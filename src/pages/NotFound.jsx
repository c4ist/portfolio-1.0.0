import React from 'react';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-neutral-200 selection:text-neutral-900 flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 text-center animate-fade-in">
        <div className="mb-6 flex justify-center text-neutral-300">
          <Compass size={64} strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl font-serif font-medium tracking-tight text-neutral-900 mb-4">
          Strayed off the path?
        </h1>
        <p className="text-neutral-600 mb-8 leading-relaxed">
          The page you're looking for doesn't seem to exist. It might have been moved, or perhaps it never was.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-neutral-900 border-b border-neutral-300 hover:border-neutral-900 pb-1 transition-all"
        >
          Return home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
