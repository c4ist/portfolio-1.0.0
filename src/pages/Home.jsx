import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('about');

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

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
          caín
        </div>
        <div className="flex gap-6 text-sm text-neutral-500 font-medium items-center">
          <button
            onClick={() => scrollToSection('about')}
            className={`hover:text-neutral-900 transition-colors ${activeSection === 'about' ? 'text-neutral-900' : ''}`}
          >
            {t('nav.about')}
          </button>
          <Link 
            to="/works" 
            className="hover:text-neutral-900 transition-colors"
          >
            {t('nav.works')}
          </Link>
          <button 
            onClick={toggleLanguage}
            className="hover:text-neutral-900 transition-colors ml-2"
            aria-label="Toggle language"
          >
            <Globe size={16} />
          </button>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32">
        <section id="about" className="min-h-[60vh] flex flex-col justify-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 text-neutral-900 leading-tight">
            {t('home.hero')}
          </h1>
          <div className="prose prose-neutral prose-lg text-neutral-600 leading-relaxed max-w-2xl">
            <p className="mb-6">
              {t('home.intro')}
            </p>
            <p className="mb-8">
              {t('home.description')}
            </p>
            <Link 
              to="/works"
              className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:gap-3 transition-all group"
            >
              {t('home.cta')}
              <ArrowRight size={18} className="text-neutral-400 group-hover:text-neutral-900 transition-colors" />
            </Link>
          </div>
          <div className="flex gap-4 mt-6">
            <a href="https://github.com/c4ist" target="_blank" rel="noopener noreferrer" className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://letterboxd.com/youswan" target="_blank" rel="noopener noreferrer" className="p-2 transition-opacity hover:opacity-80">
              <img src="/letterboxd-decal-dots-neg-mono-500px.png" alt="Letterboxd" className="w-6 h-6 object-contain opacity-60 hover:opacity-100" />
            </a>
            <a href="mailto:cain@otters.email" className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </section>

        <footer className="pt-24 pb-8 text-center text-neutral-400 text-sm font-mono">
          <a href="https://www.youtube.com/watch?v=erh2ngRZxs0" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-600 transition-colors">
            {t('home.footer')}
          </a>
        </footer>
      </main>
    </div>
  );
};

export default Home;
