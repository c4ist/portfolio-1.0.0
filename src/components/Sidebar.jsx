import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home, Briefcase, BookOpen, ChefHat, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Sidebar = ({ isCollapsed, onToggle, isMobileOpen, onMobileClose }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navItems = [
    {
      path: '/',
      label: t('nav.about'),
      icon: Home,
      key: 'home'
    },
    {
      path: '/works',
      label: t('nav.works'),
      icon: Briefcase,
      key: 'works'
    },
    {
      path: '/literature',
      label: t('nav.literature'),
      icon: BookOpen,
      key: 'literature'
    },
    {
      path: '/recipes',
      label: t('nav.recipes'),
      icon: ChefHat,
      key: 'recipes'
    }
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={onMobileClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-screen bg-neutral-50 border-r border-neutral-100 overflow-y-auto transition-all duration-300 z-50 ${
        isMobile 
          ? `${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} w-64`
          : `${isCollapsed ? 'w-16' : 'w-56'}`
      }`}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          {(!isCollapsed || isMobile) && (
            <div className="font-mono text-sm tracking-tighter font-medium text-neutral-900">
              caín
            </div>
          )}
          {isMobile ? (
            <button
              onClick={onMobileClose}
              className="p-1.5 hover:bg-neutral-200 rounded-md transition-colors text-neutral-600 hover:text-neutral-900"
              aria-label="Close sidebar"
            >
              <X size={18} />
            </button>
          ) : (
            <button
              onClick={onToggle}
              className="p-1.5 hover:bg-neutral-200 rounded-md transition-colors text-neutral-600 hover:text-neutral-900"
              aria-label="Toggle sidebar"
            >
              {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>
          )}
        </div>
        
        <nav className="space-y-0.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            const firstLetter = item.label.charAt(0).toLowerCase();
            
            return (
              <div key={item.key}>
                <Link
                  to={item.path}
                  onClick={isMobile ? onMobileClose : undefined}
                  className={`flex items-center rounded-md text-sm transition-colors ${
                    isCollapsed && !isMobile ? 'justify-center px-3 py-2' : 'gap-2.5 px-3 py-1.5'
                  } ${
                    isActive 
                      ? 'bg-neutral-900 text-white' 
                      : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                  }`}
                  title={isCollapsed && !isMobile ? item.label : undefined}
                >
                  {isCollapsed && !isMobile ? (
                    <span className="font-medium text-base">{firstLetter}</span>
                  ) : (
                    <>
                      <Icon size={15} />
                      <span className="font-medium text-[13px]">{item.label}</span>
                    </>
                  )}
                </Link>
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
    </>
  );
};

export default Sidebar;
