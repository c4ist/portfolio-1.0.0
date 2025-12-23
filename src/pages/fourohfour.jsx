import React from 'react';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FourOhFour = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-neutral-200 selection:text-neutral-900 flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 text-center animate-fade-in">
        <div className="mb-6 flex justify-center text-neutral-300">
          <Compass size={64} strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl font-serif font-medium tracking-tight text-neutral-900 mb-4">
          {t('404.title')}
        </h1>
        <p className="text-neutral-600 mb-8 leading-relaxed">
          {t('404.description')}
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-neutral-900 border-b border-neutral-300 hover:border-neutral-900 pb-1 transition-all"
        >
          {t('404.back')}
        </Link>
      </div>
    </div>
  );
};

export default FourOhFour;
