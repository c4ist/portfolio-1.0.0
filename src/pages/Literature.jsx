import React from 'react';
import { BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Sidebar from '../components/Sidebar';
import useKeyboardNav from '../hooks/useKeyboardNav';
import { useSidebar } from '../context/SidebarContext';

const Literature = () => {
  const { t } = useTranslation();
  const { isCollapsed: sidebarCollapsed, toggleSidebar } = useSidebar();
  useKeyboardNav();

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-neutral-200 selection:text-neutral-900 flex">
      <Sidebar isCollapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      
      <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-56'}`}>
        <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen size={32} className="text-neutral-900" />
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
            {t('literature.title')}
          </h1>
        </div>
        
        <p className="text-lg text-neutral-600 mb-12 leading-relaxed">
          {t('literature.subtitle')}
        </p>

        <div className="space-y-8">
          <div className="border-l-2 border-neutral-200 pl-6 py-2">
            <h3 className="text-xl font-medium text-neutral-900 mb-2">
              {t('literature.currentlyReading')}
            </h3>
            <p className="text-neutral-600">
              {t('literature.empty')}
            </p>
          </div>

          <div className="border-l-2 border-neutral-200 pl-6 py-2">
            <h3 className="text-xl font-medium text-neutral-900 mb-2">
              {t('literature.favorites')}
            </h3>
            <p className="text-neutral-600">
              {t('literature.empty')}
            </p>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
};

export default Literature;
