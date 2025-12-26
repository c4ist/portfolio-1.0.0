import React from 'react';
import { ChefHat, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Sidebar from '../components/Sidebar';
import useKeyboardNav from '../hooks/useKeyboardNav';
import { useSidebar } from '../context/SidebarContext';

const Recipes = () => {
  const { t, i18n } = useTranslation();
  const { isCollapsed: sidebarCollapsed, toggleSidebar } = useSidebar();
  useKeyboardNav();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-neutral-200 selection:text-neutral-900 flex">
      <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      
      <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-56'}`}>
        <nav className={`fixed top-0 right-0 bg-[#fafafa]/80 backdrop-blur-sm z-50 py-6 px-6 md:px-12 flex justify-end items-center transition-all duration-300 ${sidebarCollapsed ? 'left-16' : 'left-56'}`}>
          <button 
            onClick={toggleLanguage}
            className="text-neutral-500 hover:text-neutral-900 transition-colors"
            aria-label="Toggle language"
          >
            <Globe size={16} />
          </button>
        </nav>
        <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="flex items-center gap-3 mb-8">
          <ChefHat size={32} className="text-neutral-900" />
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
            {t('recipes.title')}
          </h1>
        </div>
        
        <p className="text-lg text-neutral-600 mb-12 leading-relaxed">
          {t('recipes.subtitle')}
        </p>

        <div className="space-y-8">
          <div className="border-l-2 border-neutral-200 pl-6 py-2">
            <h3 className="text-xl font-medium text-neutral-900 mb-2">
              {t('recipes.baking')}
            </h3>
            <p className="text-neutral-600">
              {t('recipes.empty')}
            </p>
          </div>

          <div className="border-l-2 border-neutral-200 pl-6 py-2">
            <h3 className="text-xl font-medium text-neutral-900 mb-2">
              {t('recipes.cooking')}
            </h3>
            <p className="text-neutral-600">
              {t('recipes.empty')}
            </p>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
};

export default Recipes;
