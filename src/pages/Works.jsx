import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';
import useKeyboardNav from '../hooks/useKeyboardNav';
import { useSidebar } from '../context/SidebarContext';

const Works = () => {
  const { t } = useTranslation();
  const { isCollapsed: sidebarCollapsed, toggleSidebar } = useSidebar();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useKeyboardNav();
  
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const GITHUB_USERNAME = 'c4ist';
  const FEATURED_REPOS = ['portfolio-1.0.0'];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`);
        const data = await response.json();
        
        const filteredRepos = data
          .filter(repo => !repo.fork && !repo.private)
          .filter(repo => FEATURED_REPOS.length === 0 || FEATURED_REPOS.includes(repo.name))
          .map(repo => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || t('works.noDescription'),
            html_url: repo.html_url,
            homepage: repo.homepage,
            language: repo.language,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            updated_at: new Date(repo.updated_at).getFullYear(),
            topics: repo.topics || [],
            owner: repo.owner.login
          }));
        
        setRepos(filteredRepos);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repos:', error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-neutral-200 selection:text-neutral-900 bg-[#fafafa] flex">
      <Sidebar 
        isCollapsed={sidebarCollapsed} 
        onToggle={toggleSidebar}
        isMobileOpen={isMobileMenuOpen}
        onMobileClose={() => setIsMobileMenuOpen(false)}
      />
      
      <div className={`flex-1 transition-all duration-300 md:${sidebarCollapsed ? 'ml-16' : 'ml-56'}`}>
        <TopNav
          sidebarCollapsed={sidebarCollapsed}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        />
        <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">
              {t('works.title')}
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              {t('works.subtitle')}
            </p>
          </header>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-neutral-500">{t('works.loading')}</div>
            </div>
          ) : repos.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-neutral-500 italic">
                {t('works.empty')}
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              {repos.map((repo) => (
                <article 
                  key={repo.id}
                  className="group relative overflow-hidden border border-neutral-200 rounded-xl bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-video w-full bg-gradient-to-br from-neutral-100 to-neutral-200 relative overflow-hidden">
                    <img 
                      src={`https://opengraph.githubassets.com/1/${repo.owner}/${repo.name}`}
                      alt={`${repo.name} preview`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h2 className="text-2xl font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors">
                        {repo.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </h2>
                      <span className="text-sm text-neutral-500 whitespace-nowrap ml-4">{repo.updated_at}</span>
                    </div>

                    <p className="text-neutral-600 mb-4 leading-relaxed">
                      {repo.description}
                    </p>

                    <div className="flex items-center gap-4 mb-4 text-sm text-neutral-500">
                      {repo.language && (
                        <span className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-neutral-400"></span>
                          {repo.language}
                        </span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1.5">
                          <Star size={14} />
                          {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1.5">
                          <GitFork size={14} />
                          {repo.forks_count}
                        </span>
                      )}
                    </div>

                    {repo.topics.length > 0 && (
                      <div className="flex gap-2 flex-wrap mb-4">
                        {repo.topics.slice(0, 5).map((topic, index) => (
                          <span 
                            key={index}
                            className="px-2.5 py-1 text-xs font-medium bg-neutral-100 text-neutral-700 rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex gap-3 pt-4 border-t border-neutral-100">
                      <a 
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors font-medium text-sm"
                      >
                        <Github size={16} />
                        View Code
                      </a>
                      {repo.homepage && (
                        <a 
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-neutral-300 text-neutral-900 rounded-lg hover:bg-neutral-50 transition-colors font-medium text-sm"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {!loading && repos.length > 0 && (
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <p className="text-sm text-neutral-500 text-center">
                More projects on{' '}
                <a 
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 hover:underline font-medium"
                >
                  GitHub
                </a>
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Works;
