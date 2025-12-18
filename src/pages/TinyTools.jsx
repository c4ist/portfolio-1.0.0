import React, { useState, useMemo } from 'react';
import { ArrowLeft, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const TinyTools = () => {
  const [activeTool, setActiveTool] = useState('json');
  
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-neutral-200 selection:text-neutral-900">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <header className="mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors mb-8 text-sm font-medium">
            <ArrowLeft size={16} />
            Back to home
          </Link>
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">Tiny Tools</h1>
          <p className="text-neutral-600 max-w-lg">
            A collection of simple, client-side utilities. No data leaves your browser.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="md:col-span-1">
            <div className="flex flex-col gap-1">
              <button 
                onClick={() => setActiveTool('json')}
                className={`text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTool === 'json' ? 'bg-neutral-200 text-neutral-900' : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                JSON Formatter
              </button>
              <button 
                onClick={() => setActiveTool('regex')}
                className={`text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTool === 'regex' ? 'bg-neutral-200 text-neutral-900' : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                Regex Tester
              </button>
              <button 
                onClick={() => setActiveTool('base64')}
                className={`text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTool === 'base64' ? 'bg-neutral-200 text-neutral-900' : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                Base64
              </button>
            </div>
          </aside>

          <main className="md:col-span-3">
            {activeTool === 'json' && <JsonFormatter />}
            {activeTool === 'regex' && <RegexTester />}
            {activeTool === 'base64' && <Base64Converter />}
          </main>
        </div>
      </div>
    </div>
  );
};

const JsonFormatter = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const format = (value) => {
    setInput(value);
    setError('');
    if (!value.trim()) {
      setOutput('');
      return;
    }
    try {
      const parsed = JSON.parse(value);
      setOutput(JSON.stringify(parsed, null, 2));
    } catch (e) {
      setError('Invalid JSON');
      setOutput('');
    }
  };

  const copyToClipboard = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="space-y-2">
        <label className="text-sm font-medium text-neutral-900">Input JSON</label>
        <textarea
          value={input}
          onChange={(e) => format(e.target.value)}
          className="w-full h-48 p-3 bg-white border border-neutral-200 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent resize-none"
          placeholder='{"key": "value"}'
        />
        {error && <p className="text-red-500 text-xs font-medium">{error}</p>}
      </div>

      {output && (
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-neutral-900">Formatted Output</label>
            <button 
              onClick={copyToClipboard}
              className="text-neutral-500 hover:text-neutral-900 transition-colors"
              title="Copy to clipboard"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
          <pre className="w-full h-96 p-3 bg-neutral-50 border border-neutral-200 rounded-lg font-mono text-sm overflow-auto text-neutral-800">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
};

const RegexTester = () => {
  const [pattern, setPattern] = useState('');
  const [flags, setFlags] = useState('g');
  const [text, setText] = useState('');
  
  const result = useMemo(() => {
    if (!pattern) return { matches: [], error: null };
    try {
      const regex = new RegExp(pattern, flags);
      const matches = [...text.matchAll(regex)].map(m => m[0]);
      return { matches, error: null };
    } catch (e) {
      return { matches: [], error: e.message };
    }
  }, [pattern, flags, text]);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3 space-y-2">
          <label className="text-sm font-medium text-neutral-900">Regex Pattern</label>
          <input
            type="text"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            className="w-full p-2 bg-white border border-neutral-200 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
            placeholder="[a-z]+"
          />
        </div>
        <div className="col-span-1 space-y-2">
          <label className="text-sm font-medium text-neutral-900">Flags</label>
          <input
            type="text"
            value={flags}
            onChange={(e) => setFlags(e.target.value)}
            className="w-full p-2 bg-white border border-neutral-200 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
            placeholder="g"
          />
        </div>
      </div>
      
      {result.error && <p className="text-red-500 text-xs font-medium">{result.error}</p>}

      <div className="space-y-2">
        <label className="text-sm font-medium text-neutral-900">Test String</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-32 p-3 bg-white border border-neutral-200 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent resize-none"
          placeholder="Enter text to test against..."
        />
      </div>

      {result.matches.length > 0 && (
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-900">Matches ({result.matches.length})</label>
          <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg font-mono text-sm text-neutral-800 max-h-60 overflow-auto">
            <ul className="list-disc list-inside space-y-1">
              {result.matches.map((match, i) => (
                <li key={i} className="break-all">{match}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const Base64Converter = () => {
  const [input, setInput] = useState('');
  const [encoded, setEncoded] = useState('');
  const [decoded, setDecoded] = useState('');
  const [mode, setMode] = useState('encode'); // encode | decode

  const process = (value, currentMode) => {
    setInput(value);
    if (!value) {
      setEncoded('');
      setDecoded('');
      return;
    }

    try {
      if (currentMode === 'encode') {
        setEncoded(btoa(value));
      } else {
        setDecoded(atob(value));
      }
    } catch (e) {
      if (currentMode === 'decode') {
        setDecoded('Invalid Base64 string');
      }
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex gap-4 border-b border-neutral-200 pb-4">
        <button 
          onClick={() => { setMode('encode'); setInput(''); setEncoded(''); }}
          className={`text-sm font-medium transition-colors ${mode === 'encode' ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-900'}`}
        >
          Encode
        </button>
        <button 
          onClick={() => { setMode('decode'); setInput(''); setDecoded(''); }}
          className={`text-sm font-medium transition-colors ${mode === 'decode' ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-900'}`}
        >
          Decode
        </button>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-neutral-900">
          {mode === 'encode' ? 'Text to Encode' : 'Base64 to Decode'}
        </label>
        <textarea
          value={input}
          onChange={(e) => process(e.target.value, mode)}
          className="w-full h-32 p-3 bg-white border border-neutral-200 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent resize-none"
          placeholder={mode === 'encode' ? 'Hello World' : 'SGVsbG8gV29ybGQ='}
        />
      </div>

      {(encoded || decoded) && (
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-900">Result</label>
          <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg font-mono text-sm break-all text-neutral-800">
            {mode === 'encode' ? encoded : decoded}
          </div>
        </div>
      )}
    </div>
  );
};

export default TinyTools;