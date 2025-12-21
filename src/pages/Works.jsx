import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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
          <p className="text-neutral-500 italic">
            Currently reimagining this space. Check back soon.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Works;
