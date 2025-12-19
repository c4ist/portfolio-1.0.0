import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const Works = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-neutral-200 selection:text-neutral-900 bg-[#fafafa]">
      <main className="max-w-2xl mx-auto px-6 py-12 md:py-20">
        <header className="mb-12 md:mb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors mb-6 text-xs font-medium uppercase tracking-wider">
            <ArrowLeft size={14} />
            Back
          </Link>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 leading-tight">
            Selected Works
          </h1>
          <p className="mt-4 text-base text-neutral-600 max-w-lg leading-relaxed">
            A collection of digital artifacts, tools, and experiments.
          </p>
        </header>

        <div className="space-y-12 animate-fade-in">
          <div className="group">
            <div className="flex justify-between items-baseline mb-1">
              <Link to="/memory-lane" className="text-lg font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                Memory Lane
              </Link>
              <Link to="/memory-lane" className="text-neutral-400 hover:text-neutral-900 transition-colors">
                <ExternalLink size={16} />
              </Link>
            </div>
            <p className="text-neutral-600 mb-3 leading-relaxed text-sm">
              A digital garden for preserving family histories. Built because I wanted a better way to store my grandmother's recipes than a shoebox.
            </p>
            <div className="flex gap-3 text-xs font-mono text-neutral-400">
              <span>React</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
            </div>
          </div>

          <div className="group">
            <div className="flex justify-between items-baseline mb-1">
              <Link to="/echo" className="text-lg font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                Echo
              </Link>
              <Link to="/echo" className="text-neutral-400 hover:text-neutral-900 transition-colors">
                <ExternalLink size={16} />
              </Link>
            </div>
            <p className="text-neutral-600 mb-3 leading-relaxed text-sm">
              A minimal audio visualizer that reacts to system audio in real-time. No trackers, no ads, just pretty lights dancing to your music.
            </p>
            <div className="flex gap-3 text-xs font-mono text-neutral-400">
              <span>Rust</span>
              <span>WebAssembly</span>
              <span>Canvas API</span>
            </div>
          </div>

          <div className="group">
            <div className="flex justify-between items-baseline mb-1">
              <Link to="/tiny-tools" className="text-lg font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                Tiny Tools
              </Link>
              <Link to="/tiny-tools" className="text-neutral-400 hover:text-neutral-900 transition-colors">
                <ExternalLink size={16} />
              </Link>
            </div>
            <p className="text-neutral-600 mb-3 leading-relaxed text-sm">
              A collection of single-purpose utilities for developers. JSON formatter, regex tester, and base64 converter that run entirely client-side.
            </p>
            <div className="flex gap-3 text-xs font-mono text-neutral-400">
              <span>Vue</span>
              <span>Tailwind</span>
              <span>Vite</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Works;
