import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import TopNav from '../TopNav';
import useKeyboardNav from '../../hooks/useKeyboardNav';
import { useSidebar } from '../../context/SidebarContext';

const PageShell = ({ children, mainClassName = 'max-w-5xl mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32' }) => {
  const { isCollapsed: sidebarCollapsed, toggleSidebar } = useSidebar();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useKeyboardNav();

  const sidebarOffsetClass = sidebarCollapsed ? 'md:ml-16' : 'md:ml-56';

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-neutral-200 selection:text-neutral-900 flex">
      <Sidebar
        isCollapsed={sidebarCollapsed}
        onToggle={toggleSidebar}
        isMobileOpen={isMobileMenuOpen}
        onMobileClose={() => setIsMobileMenuOpen(false)}
      />

      <div className={`flex-1 transition-all duration-300 ${sidebarOffsetClass}`}>
        <TopNav sidebarCollapsed={sidebarCollapsed} onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
        <main className={mainClassName}>{children}</main>
      </div>
    </div>
  );
};

export default PageShell;
