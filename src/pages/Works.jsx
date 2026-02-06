import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Works = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Distributed Cache System',
      description: 'A high-performance distributed caching system built with Go, implementing consistent hashing and replication strategies.',
      category: 'systems',
      tags: ['Go', 'Redis', 'Docker', 'gRPC'],
      link: 'https://github.com/c4ist',
      github: 'https://github.com/c4ist',
      image: '🌐'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with React, featuring internationalization and modern design patterns.',
      category: 'web',
      tags: ['React', 'Tailwind CSS', 'Vite', 'i18n'],
      link: '/',
      github: 'https://github.com/c4ist',
      image: '🎨'
    },
    {
      id: 3,
      title: 'CLI Task Manager',
      description: 'A lightweight command-line task management tool with SQLite backend and beautiful TUI.',
      category: 'tools',
      tags: ['Python', 'SQLite', 'CLI'],
      github: 'https://github.com/c4ist',
      image: '📋'
    },
    {
      id: 4,
      title: 'Algorithm Visualizer',
      description: 'Interactive web application for visualizing sorting and graph algorithms in real-time.',
      category: 'web',
      tags: ['JavaScript', 'Canvas API', 'Algorithms'],
      link: 'https://github.com/c4ist',
      github: 'https://github.com/c4ist',
      image: '📊'
    },
    {
      id: 5,
      title: 'Code Snippet Manager',
      description: 'VSCode extension for managing and sharing code snippets with syntax highlighting.',
      category: 'tools',
      tags: ['TypeScript', 'VSCode API', 'Node.js'],
      github: 'https://github.com/c4ist',
      image: '💾'
    },
    {
      id: 6,
      title: 'Consensus Algorithm Demo',
      description: 'Educational implementation of Raft consensus algorithm with interactive visualization.',
      category: 'systems',
      tags: ['C++', 'Networking', 'Algorithms'],
      github: 'https://github.com/c4ist',
      image: '🔄'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const categories = [
    { id: 'all', label: t('works.categories.all') },
    { id: 'web', label: t('works.categories.web') },
    { id: 'systems', label: t('works.categories.systems') },
    { id: 'tools', label: t('works.categories.tools') }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 bg-[#fafafa]">
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <header className="mb-12 md:mb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-neutral-600 hover:text-blue-600 transition-colors mb-6 text-xs font-medium uppercase tracking-wider">
            <ArrowLeft size={14} />
            {t('works.back')}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            <span className="gradient-text">{t('works.title')}</span>
          </h1>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl leading-relaxed">
            {t('works.subtitle')}
          </p>
        </header>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                  : 'bg-white text-neutral-600 hover:bg-neutral-50 border border-neutral-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {project.image}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-neutral-50 text-neutral-600 rounded text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-4 border-t border-neutral-100">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      <Globe size={16} />
                      {t('works.viewProject')}
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-neutral-600 hover:text-neutral-900 font-medium transition-colors"
                    >
                      <Github size={16} />
                      {t('works.viewCode')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-neutral-500 italic">
              {t('works.empty')}
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Works;
