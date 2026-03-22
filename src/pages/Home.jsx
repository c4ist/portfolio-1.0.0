import React from 'react';
import { ArrowDown, ArrowRight, BookOpenText, ChefHat, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageShell from '../components/layout/PageShell';
import SectionBlock from '../components/layout/SectionBlock';
import FeaturedWorksSection from '../components/projects/FeaturedWorksSection';

const Home = () => {
  const { t } = useTranslation();

  return (
    <PageShell mainClassName="max-w-5xl mx-auto px-6 pt-28 pb-24 md:pt-40 md:pb-32">
      <section id="hero" className="min-h-[56vh] flex flex-col justify-center animate-fade-in">
        <p className="mb-4 text-[11px] tracking-[0.18em] uppercase text-neutral-400 font-medium">{t('home.hero.eyebrow')}</p>
        <h1 className="max-w-3xl text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
          {t('home.hero.title')}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral-600 leading-relaxed">{t('home.hero.subtitle')}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#featured-works"
            className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
          >
            {t('home.hero.primaryCta')}
            <ArrowDown size={16} />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
          >
            {t('home.hero.secondaryCta')}
          </a>
        </div>
      </section>

      <SectionBlock
        id="about"
        eyebrow={t('home.about.eyebrow')}
        title={t('home.about.title')}
        description={t('home.about.description')}
      >
        <div className="max-w-3xl space-y-5 text-neutral-600 leading-relaxed">
          <p>{t('home.about.paragraphOne')}</p>
          <p>{t('home.about.paragraphTwo')}</p>
          <Link
            to="/works"
            className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:gap-3 transition-all group"
          >
            {t('home.about.cta')}
            <ArrowRight size={18} className="text-neutral-400 group-hover:text-neutral-900 transition-colors" />
          </Link>
        </div>
      </SectionBlock>

      <FeaturedWorksSection />

      <SectionBlock
        id="other-sections"
        eyebrow={t('home.other.eyebrow')}
        title={t('home.other.title')}
        description={t('home.other.description')}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            to="/literature"
            className="group rounded-xl border border-neutral-200 bg-white p-5 hover:shadow-sm transition-all duration-300"
          >
            <BookOpenText size={18} className="text-neutral-500 mb-3" />
            <h3 className="text-xl font-semibold tracking-tight text-neutral-900">{t('home.other.literatureTitle')}</h3>
            <p className="mt-2 text-neutral-600 leading-relaxed">{t('home.other.literatureDescription')}</p>
          </Link>

          <Link
            to="/recipes"
            className="group rounded-xl border border-neutral-200 bg-white p-5 hover:shadow-sm transition-all duration-300"
          >
            <ChefHat size={18} className="text-neutral-500 mb-3" />
            <h3 className="text-xl font-semibold tracking-tight text-neutral-900">{t('home.other.recipesTitle')}</h3>
            <p className="mt-2 text-neutral-600 leading-relaxed">{t('home.other.recipesDescription')}</p>
          </Link>
        </div>

        <div className="mt-8 flex items-center gap-2 sm:gap-3">
          <a
            href="https://github.com/c4ist"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-white p-2.5 text-neutral-500 hover:text-neutral-900 hover:border-neutral-300 transition-colors"
            aria-label={t('home.social.github')}
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-white p-2.5 text-neutral-500 hover:text-neutral-900 hover:border-neutral-300 transition-colors"
            aria-label={t('home.social.linkedin')}
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://letterboxd.com/youswan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-white p-2.5 hover:border-neutral-300 transition-colors"
            aria-label={t('home.social.letterboxd')}
          >
            <img
              src="/letterboxd-decal-dots-neg-mono-500px.png"
              alt="Letterboxd"
              className="w-[18px] h-[18px] object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
          </a>
          <a
            href="mailto:cain@otters.email"
            className="inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-white p-2.5 text-neutral-500 hover:text-neutral-900 hover:border-neutral-300 transition-colors"
            aria-label={t('home.social.email')}
          >
            <Mail size={18} />
          </a>
        </div>
      </SectionBlock>

      <footer className="pt-16 pb-8 text-center text-neutral-400 text-sm font-mono">
        <a
          href="https://www.youtube.com/watch?v=erh2ngRZxs0"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-600 transition-colors"
        >
          {t('home.footer')}
        </a>
      </footer>
    </PageShell>
  );
};

export default Home;
