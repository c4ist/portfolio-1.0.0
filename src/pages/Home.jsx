import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-neutral-200 selection:text-neutral-900">
      <nav className="fixed top-0 left-0 w-full bg-[#fafafa]/80 backdrop-blur-sm z-50 py-6 px-6 md:px-12 flex justify-between items-center">
        <div className="font-mono text-sm tracking-tighter font-medium text-neutral-500">
          cain
        </div>
        <div className="flex gap-6 text-sm text-neutral-500 font-medium">
          {['about', 'projects', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`hover:text-neutral-900 transition-colors ${activeSection === item ? 'text-neutral-900' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32">
        <section id="about" className="min-h-[60vh] flex flex-col justify-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 text-neutral-900 leading-tight">
            I plant flowers. 
          </h1>
          <div className="prose prose-neutral prose-lg text-neutral-600 leading-relaxed max-w-2xl">
            <p className="mb-6">
              Hi, I'm Cain, a second year high school student and son of the soil. 
              I enjoy problem solving and clean syntax (I'm a fan of C++, lol.)
            </p>
            <p>
            Currently tinkering with distributed systems and learning how to bake better sourdough. I really enjoy sci-fi novels and short documentaries. 
            </p>
          </div>
          <div className="flex gap-4 mt-10">
            <a href="https://github.com/c4ist" target="_blank" rel="noopener noreferrer" className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:hello@example.com" className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </section>

        <section id="projects" className="py-24">
          <h2 className="text-sm font-mono text-neutral-400 mb-12 tracking-wider uppercase">Selected Works</h2>
          <div className="space-y-16">
            <div className="group">
              <div className="flex justify-between items-baseline mb-2">
                <Link to="/memory-lane" className="text-xl font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                  Memory Lane
                </Link>
                <Link to="/memory-lane" className="text-neutral-400 hover:text-neutral-900 transition-colors">
                  <ExternalLink size={16} />
                </Link>
              </div>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                A digital garden for preserving family histories. Built because I wanted a better way to store my grandmother's recipes than a shoebox.
              </p>
              <div className="flex gap-3 text-xs font-mono text-neutral-400">
                <span>React</span>
                <span>Node.js</span>
                <span>PostgreSQL</span>
              </div>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline mb-2">
                <Link to="/echo" className="text-xl font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                  Echo
                </Link>
                <Link to="/echo" className="text-neutral-400 hover:text-neutral-900 transition-colors">
                  <ExternalLink size={16} />
                </Link>
              </div>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                A minimal audio visualizer that reacts to system audio in real-time. No trackers, no ads, just pretty lights dancing to your music.
              </p>
              <div className="flex gap-3 text-xs font-mono text-neutral-400">
                <span>Rust</span>
                <span>WebAssembly</span>
                <span>Canvas API</span>
              </div>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline mb-2">
                <Link to="/tiny-tools" className="text-xl font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                  Tiny Tools
                </Link>
                <Link to="/tiny-tools" className="text-neutral-400 hover:text-neutral-900 transition-colors">
                  <ExternalLink size={16} />
                </Link>
              </div>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                A collection of single-purpose utilities for developers. JSON formatter, regex tester, and base64 converter that run entirely client-side.
              </p>
              <div className="flex gap-3 text-xs font-mono text-neutral-400">
                <span>Vue</span>
                <span>Tailwind</span>
                <span>Vite</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 min-h-[50vh]">
          <h2 className="text-sm font-mono text-neutral-400 mb-12 tracking-wider uppercase">Get in Touch</h2>
          <p className="text-xl text-neutral-800 mb-8 max-w-lg leading-relaxed">
             open to discussing new projects, creative ideas, or opportunities. 
          </p>
          <a 
            href="mailto:hello@example.com" 
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors border-b border-neutral-300 hover:border-neutral-900 pb-1"
          >
            <Mail size={18} />
            <span>gurt@gurt</span>
          </a>
        </section>

        <footer className="pt-24 pb-8 text-center text-neutral-400 text-sm font-mono">
          <a href="https://www.youtube.com/watch?v=erh2ngRZxs0" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-600 transition-colors">
            gurt
          </a>
        </footer>
      </main>
    </div>
  );
};

export default Home;
