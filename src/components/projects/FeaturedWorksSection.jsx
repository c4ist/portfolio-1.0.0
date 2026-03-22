import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useProjects from '../../hooks/useProjects';
import SectionBlock from '../layout/SectionBlock';
import ProjectGrid from './ProjectGrid';

const FeaturedWorksSection = () => {
  const { t } = useTranslation();
  const { projects, isLoading, error } = useProjects({ featuredOnly: true });

  return (
    <SectionBlock
      id="featured-works"
      eyebrow={t('home.featured.eyebrow')}
      title={t('home.featured.title')}
      description={t('home.featured.description')}
    >
      <div className="mb-8 flex justify-end">
        <Link
          to="/works"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
        >
          {t('home.featured.cta')}
          <ArrowRight size={16} />
        </Link>
      </div>

      {isLoading && (
        <div className="grid gap-6 md:grid-cols-2">
          {[1, 2].map((item) => (
            <div key={item} className="h-72 rounded-2xl border border-neutral-200 bg-white animate-pulse" />
          ))}
        </div>
      )}

      {!isLoading && error && (
        <p className="rounded-xl border border-neutral-200 bg-white px-4 py-6 text-center text-neutral-500">
          {t('works.loadError')}
        </p>
      )}

      {!isLoading && !error && projects.length === 0 && (
        <p className="rounded-xl border border-neutral-200 bg-white px-4 py-6 text-center text-neutral-500 italic">
          {t('home.featured.empty')}
        </p>
      )}

      {!isLoading && !error && projects.length > 0 && <ProjectGrid projects={projects} showFeaturedBadge />}
    </SectionBlock>
  );
};

export default FeaturedWorksSection;
