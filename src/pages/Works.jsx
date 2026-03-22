import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import ProjectGrid from '../components/projects/ProjectGrid';
import useProjects from '../hooks/useProjects';

const Works = () => {
  const { t } = useTranslation();
  const { projects, isLoading, error } = useProjects();

  return (
    <PageShell>
      <header className="mb-14 md:mb-16 animate-fade-in">
        <Link
          to="/#featured-works"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft size={16} />
          {t('works.backToFeatured')}
        </Link>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">{t('works.title')}</h1>
        <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl">{t('works.subtitle')}</p>
      </header>

      {isLoading && (
        <div className="grid gap-6 md:grid-cols-2">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="h-80 rounded-2xl border border-neutral-200 bg-white animate-pulse" />
          ))}
        </div>
      )}

      {!isLoading && error && (
        <p className="rounded-xl border border-neutral-200 bg-white px-4 py-8 text-center text-neutral-500">{t('works.loadError')}</p>
      )}

      {!isLoading && !error && projects.length === 0 && (
        <p className="rounded-xl border border-neutral-200 bg-white px-4 py-8 text-center text-neutral-500 italic">{t('works.empty')}</p>
      )}

      {!isLoading && !error && projects.length > 0 && <ProjectGrid projects={projects} showFeaturedBadge />}

      {!isLoading && !error && projects.length > 0 && (
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="text-sm text-neutral-500 text-center">
            {t('works.moreOn')}{' '}
            <a
              href="https://github.com/c4ist"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 hover:underline font-medium"
            >
              GitHub
            </a>
          </p>
        </div>
      )}
    </PageShell>
  );
};

export default Works;
