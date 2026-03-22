import React from 'react';
import { Globe, Menu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TopNav = ({ sidebarCollapsed, onOpenMobileMenu }) => {
  const { i18n } = useTranslation();
  const navOffsetClass = sidebarCollapsed ? 'md:left-16' : 'md:left-56';

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 ${navOffsetClass} z-30 flex items-center justify-between bg-[#fafafa]/80 px-6 py-6 backdrop-blur-sm transition-all duration-300 md:justify-end md:px-12`}
    >
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
