import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';
import useKeyboardNav from '../hooks/useKeyboardNav';
import { useSidebar } from '../context/SidebarContext';

const Recipes = () => {
  const { t } = useTranslation();
  const { isCollapsed: sidebarCollapsed, toggleSidebar } = useSidebar();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useKeyboardNav();

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-neutral-200 selection:text-neutral-900 flex">
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
        <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">
            {t('recipes.title')}
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            {t('recipes.subtitle')}
          </p>
        </header>

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
