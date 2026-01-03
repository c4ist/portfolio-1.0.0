import React from 'react';
import { Globe, Menu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TopNav = ({ sidebarCollapsed, onOpenMobileMenu }) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className={`fixed top-0 right-0 bg-[#fafafa]/80 backdrop-blur-sm z-30 py-6 px-6 md:px-12 flex justify-between md:justify-end items-center transition-all duration-300 left-0 md:${sidebarCollapsed ? 'left-16' : 'left-56'}`}>
      <button
        onClick={onOpenMobileMenu}
        className="md:hidden text-neutral-500 hover:text-neutral-900 transition-colors"
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>
      <button
        onClick={toggleLanguage}
        className="text-neutral-500 hover:text-neutral-900 transition-colors"
        aria-label="Toggle language"
      >
        <Globe size={16} />
      </button>
    </nav>
  );
};

export default TopNav;
