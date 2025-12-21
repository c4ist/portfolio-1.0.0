import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, ArrowRight } from 'lucide-react';
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
      const sections = ['about'];
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
          <button
            onClick={() => scrollToSection('about')}
            className={`hover:text-neutral-900 transition-colors ${activeSection === 'about' ? 'text-neutral-900' : ''}`}
          >
            about
          </button>
          <Link 
            to="/works" 
            className="hover:text-neutral-900 transition-colors"
          >
            works
          </Link>
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
            <p className="mb-8">
              Currently tinkering with distributed systems and learning how to bake better sourdough. I really enjoy sci-fi novels and short documentaries. 
            </p>
            <Link 
              to="/works"
              className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:gap-3 transition-all group"
            >
              See my work
              <ArrowRight size={18} className="text-neutral-400 group-hover:text-neutral-900 transition-colors" />
            </Link>
          </div>
          <div className="flex gap-4 mt-12">
            <a href="https://github.com/c4ist" target="_blank" rel="noopener noreferrer" className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://letterboxd.com/youswan" target="_blank" rel="noopener noreferrer" className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
                <path d="M12 12.3c-1.374-1.374-1.374-3.601 0-4.975 1.374-1.374 3.601-1.374 4.975 0 1.374 1.374 1.374 3.601 0 4.975-1.374 1.374-3.601 1.374-4.975 0zm-6.6-4.4c-1.374-1.374-1.374-3.601 0-4.975 1.374-1.374 3.601-1.374 4.975 0 1.374 1.374 1.374 3.601 0 4.975-1.374 1.374-3.601 1.374-4.975 0zm0 13.2c-1.374-1.374-1.374-3.601 0-4.975 1.374-1.374 3.601-1.374 4.975 0 1.374 1.374 1.374 3.601 0 4.975-1.374 1.374-3.601 1.374-4.975 0z" />
              </svg>
            </a>
            <a href="mailto:hello@example.com" className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors">
              <Mail size={20} />
            </a>
          </div>
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
