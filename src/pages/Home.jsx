import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, ArrowRight, Globe, Code2, Terminal, Layers } from 'lucide-react';
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
      const sections = ['about', 'skills', 'experience', 'contact'];
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

  const skills = {
    languages: ['C++', 'Python', 'JavaScript', 'TypeScript', 'Go', 'Rust'],
    frameworks: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Next.js'],
    tools: ['Git', 'Docker', 'Linux', 'VSCode', 'PostgreSQL', 'Redis']
  };

  const experiences = [
    {
      title: 'High School Student',
      organization: 'Year 2',
      period: '2024 - Present',
      description: 'Focusing on computer science, mathematics, and building practical projects.'
    },
    {
      title: 'Self-Learning',
      organization: 'Distributed Systems',
      period: '2024 - Present',
      description: 'Deep diving into distributed systems architecture, consensus algorithms, and scalability patterns.'
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 py-5 px-6 md:px-12 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-mono text-sm tracking-tighter font-semibold text-neutral-800">
            caín
          </div>
          <div className="flex gap-6 text-sm text-neutral-600 font-medium items-center">
            <button
              onClick={() => scrollToSection('about')}
              className={`hover:text-blue-600 transition-colors ${activeSection === 'about' ? 'text-blue-600' : ''}`}
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`hover:text-blue-600 transition-colors ${activeSection === 'skills' ? 'text-blue-600' : ''}`}
            >
              {t('nav.skills')}
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`hover:text-blue-600 transition-colors ${activeSection === 'experience' ? 'text-blue-600' : ''}`}
            >
              {t('nav.experience')}
            </button>
            <Link 
              to="/works" 
              className="hover:text-blue-600 transition-colors"
            >
              {t('nav.works')}
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className={`hover:text-blue-600 transition-colors ${activeSection === 'contact' ? 'text-blue-600' : ''}`}
            >
              {t('nav.contact')}
            </button>
            <button 
              onClick={toggleLanguage}
              className="hover:text-blue-600 transition-colors ml-2"
              aria-label="Toggle language"
            >
              <Globe size={16} />
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Hero Section */}
        <section id="about" className="min-h-[80vh] flex flex-col justify-center animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
              Welcome to my garden 🌱
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            <span className="gradient-text">{t('home.hero')}</span>
          </h1>
          <div className="prose prose-neutral prose-xl text-neutral-600 leading-relaxed max-w-3xl">
            <p className="mb-6 text-lg">
              {t('home.intro')}
            </p>
            <p className="mb-8 text-lg">
              {t('home.description')}
            </p>
            <Link 
              to="/works"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all group"
            >
              {t('home.cta')}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="flex gap-4 mt-8">
            <a href="https://github.com/c4ist" target="_blank" rel="noopener noreferrer" className="p-3 text-neutral-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 text-neutral-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
              <Linkedin size={22} />
            </a>
            <a href="https://letterboxd.com/youswan" target="_blank" rel="noopener noreferrer" className="p-3 transition-all hover:bg-blue-50 rounded-lg">
              <img src="/letterboxd-decal-dots-neg-mono-500px.png" alt="Letterboxd" className="w-6 h-6 object-contain opacity-60 hover:opacity-100" />
            </a>
            <a href="mailto:cain@otters.email" className="p-3 text-neutral-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
              <Mail size={22} />
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 animate-fade-in">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-neutral-900">
              {t('home.skills.title')}
            </h2>
            <p className="text-neutral-600 text-lg">
              {t('home.skills.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-neutral-100 card-hover">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-neutral-900">
                {t('home.skills.categories.languages')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-neutral-50 text-neutral-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm border border-neutral-100 card-hover">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Layers className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-neutral-900">
                {t('home.skills.categories.frameworks')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-neutral-50 text-neutral-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm border border-neutral-100 card-hover">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Terminal className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-neutral-900">
                {t('home.skills.categories.tools')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-neutral-50 text-neutral-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 animate-fade-in">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-neutral-900">
              {t('home.experience.title')}
            </h2>
            <p className="text-neutral-600 text-lg">
              {t('home.experience.subtitle')}
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-neutral-100 card-hover">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {exp.organization}
                    </p>
                  </div>
                  <span className="text-sm text-neutral-500 font-medium mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-neutral-600 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">
              {t('home.experience.interests')}
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white text-neutral-700 rounded-lg text-sm font-medium shadow-sm">
                🧬 Distributed Systems
              </span>
              <span className="px-4 py-2 bg-white text-neutral-700 rounded-lg text-sm font-medium shadow-sm">
                🍞 Sourdough Baking
              </span>
              <span className="px-4 py-2 bg-white text-neutral-700 rounded-lg text-sm font-medium shadow-sm">
                📚 Sci-Fi Novels
              </span>
              <span className="px-4 py-2 bg-white text-neutral-700 rounded-lg text-sm font-medium shadow-sm">
                🎬 Documentaries
              </span>
              <span className="px-4 py-2 bg-white text-neutral-700 rounded-lg text-sm font-medium shadow-sm">
                ⚡ Clean Code
              </span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 animate-fade-in">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-neutral-900">
              {t('home.contact.title')}
            </h2>
            <p className="text-neutral-600 text-lg mb-12">
              {t('home.contact.subtitle')}
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="mailto:cain@otters.email"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <Mail size={20} />
                {t('home.contact.email')}
              </a>
              <a 
                href="https://github.com/c4ist"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-800 font-semibold rounded-lg border-2 border-neutral-200 hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                <Github size={20} />
                {t('home.contact.github')}
              </a>
            </div>
          </div>
        </section>

        <footer className="pt-24 pb-8 text-center text-neutral-400 text-sm font-mono border-t border-neutral-100">
          <a href="https://www.youtube.com/watch?v=erh2ngRZxs0" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            {t('home.footer')}
          </a>
        </footer>
      </main>
    </div>
  );
};

export default Home;
