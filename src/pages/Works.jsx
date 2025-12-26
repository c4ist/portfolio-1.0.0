import React from 'react';
import { useTranslation } from 'react-i18next';
import Sidebar from '../components/Sidebar';

const Works = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen font-sans selection:bg-neutral-200 selection:text-neutral-900 bg-[#fafafa] flex">
      <Sidebar />
      
      <div className="flex-1 ml-64">
        <main className="max-w-2xl mx-auto px-6 py-12 md:py-20">
        <header className="mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 leading-tight">
            {t('works.title')}
          </h1>
          <p className="mt-4 text-base text-neutral-600 max-w-lg leading-relaxed">
            {t('works.subtitle')}
          </p>
        </header>

        <div className="space-y-12 animate-fade-in">
          <p className="text-neutral-500 italic">
            {t('works.empty')}
          </p>
        </div>
      </main>
      </div>
    </div>
  );
};

export default Works;
