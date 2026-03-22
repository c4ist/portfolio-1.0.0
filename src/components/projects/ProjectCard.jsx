import React, { memo } from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ project, showFeaturedBadge = false }) => {
  const { t } = useTranslation();
  const hasRepositoryLink = Boolean(project.repository) && project.repository !== project.link;

  return (
    <article className="group border border-neutral-200 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
      <div className="relative aspect-16/10 overflow-hidden bg-neutral-100">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.opacity = '0';
          }}
        />
        {showFeaturedBadge && project.featured && (
          <span className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-neutral-700 backdrop-blur-sm">
            <Sparkles size={12} />
            {t('works.featuredBadge')}
          </span>
        )}
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">{project.title}</h3>
        <p className="mt-3 text-neutral-600 leading-relaxed">{project.description}</p>

        {project.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={`${project.id}-${tag}`}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-neutral-100 text-neutral-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row gap-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
            >
              <ExternalLink size={15} />
              {t('works.viewProject')}
            </a>
          )}

          {hasRepositoryLink && (
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-800 hover:bg-neutral-50 transition-colors"
            >
              <Github size={15} />
              {t('works.viewCode')}
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default memo(ProjectCard);
