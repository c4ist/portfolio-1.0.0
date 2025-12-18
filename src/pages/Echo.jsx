import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Play, Square, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Echo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState('');
  const [sourceType, setSourceType] = useState('mic'); // 'mic' | 'system'
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceRef = useRef(null);
  const animationFrameRef = useRef(null);

  const setupAudioStream = (stream) => {
    // If there is an existing context, close it
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }

    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    analyserRef.current = audioContextRef.current.createAnalyser();
    sourceRef.current = audioContextRef.current.createMediaStreamSource(stream);
    
    sourceRef.current.connect(analyserRef.current);
    analyserRef.current.fftSize = 256;
    
    setIsPlaying(true);
    setError('');
    draw();

    // If system audio (video track present), stop video track as we don't need it
    if (sourceType === 'system') {
      stream.getVideoTracks().forEach(track => track.stop());
    }

    // Handle stream ending (user stops sharing)
    stream.getTracks()[0].onended = () => {
      stopAudio();
    };
  };

  const startAudio = async () => {
    try {
      let stream;
      if (sourceType === 'mic') {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      } else {
        stream = await navigator.mediaDevices.getDisplayMedia({ video: { width: 1, height: 1 }, audio: true });
        if (stream.getAudioTracks().length === 0) {
          stream.getTracks().forEach(track => track.stop()); // Stop video track if no audio
          throw new Error('No audio track shared. Please check "Share tab audio" when selecting a tab/screen.');
        }
      }
      setupAudioStream(stream);
    } catch (err) {
      console.error(err);
      if (err.name === 'NotAllowedError') {
        setError(sourceType === 'mic' ? 'Microphone access denied.' : 'Screen sharing cancelled or denied.');
      } else {
        setError(err.message || 'Could not start audio. Please try again.');
      }
    }
  };

  const stopAudio = () => {
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    setIsPlaying(false);
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas || !analyserRef.current) return;

    const ctx = canvas.getContext('2d');
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const render = () => {
      if (!analyserRef.current) return;
      analyserRef.current.getByteFrequencyData(dataArray);
      
      ctx.fillStyle = '#0a0a0a'; // Dark background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 2.5;
      let barHeight;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] * 1.5; // Scale up

        // Gradient color
        const r = barHeight + (25 * (i / bufferLength));
        const g = 250 * (i / bufferLength);
        const b = 50;

        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(x, canvas.height - barHeight / 2 - canvas.height / 2, barWidth, barHeight);

        x += barWidth + 1;
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();
  };

  useEffect(() => {
    return () => stopAudio();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-neutral-200 selection:bg-neutral-800 selection:text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="mb-8 flex justify-between items-center">
          <Link to="/" className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            Back to home
          </Link>
          <div className="flex items-center gap-2 text-neutral-500 text-sm">
             <Volume2 size={16} />
             <span>System Audio / Mic</span>
          </div>
        </header>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-mono font-medium tracking-tight text-white mb-6">
            Echo
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto mb-8 leading-relaxed">
            A minimal audio visualizer. It listens to the world around you and paints it in light. 
            No data is recorded or stored.
          </p>

          {!isPlaying ? (
            <div className="flex flex-col items-center gap-6">
              <div className="flex bg-neutral-900 rounded-lg p-1 border border-neutral-800">
                <button
                  onClick={() => setSourceType('mic')}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                    sourceType === 'mic' 
                      ? 'bg-neutral-800 text-white shadow-sm' 
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  Microphone
                </button>
                <button
                  onClick={() => setSourceType('system')}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                    sourceType === 'system' 
                      ? 'bg-neutral-800 text-white shadow-sm' 
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  System Audio
                </button>
              </div>

              <button 
                onClick={startAudio}
                className="group relative inline-flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-neutral-200 transition-all hover:scale-105"
              >
                <Play size={20} className="fill-current" />
                {sourceType === 'mic' ? 'Start Listening' : 'Share Audio'}
              </button>
            </div>
          ) : (
            <button 
              onClick={stopAudio}
              className="inline-flex items-center gap-3 bg-red-500/10 text-red-500 border border-red-500/20 px-8 py-3 rounded-full font-medium hover:bg-red-500/20 transition-all"
            >
              <Square size={20} className="fill-current" />
              Stop
            </button>
          )}

          {error && <p className="mt-4 text-red-400 text-sm">{error}</p>}
        </div>

        <div className="relative w-full aspect-video bg-neutral-900/50 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
          <canvas 
            ref={canvasRef} 
            width={1024} 
            height={576}
            className="w-full h-full object-cover"
          />
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center text-neutral-700 font-mono text-sm">
              Waiting for audio input...
            </div>
          )}
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-xs font-mono text-neutral-600">
          <div className="p-4 border border-neutral-800 rounded-lg">
            <span className="block text-neutral-400 mb-1">Frequency Range</span>
            20Hz - 20kHz
          </div>
          <div className="p-4 border border-neutral-800 rounded-lg">
            <span className="block text-neutral-400 mb-1">Sample Rate</span>
            44.1kHz / 48kHz
          </div>
          <div className="p-4 border border-neutral-800 rounded-lg">
            <span className="block text-neutral-400 mb-1">FFT Size</span>
            256 Bins
          </div>
        </div>
      </div>
    </div>
  );
};

export default Echo;
