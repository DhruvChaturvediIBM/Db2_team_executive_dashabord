import React, { useState, useEffect } from 'react';
import { ImagePlus, Database, Menu, X, Sparkles, Users } from 'lucide-react';
import { AudioPlayer } from './AudioPlayer';

interface NavbarProps {
  onOpenUploadModal: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenUploadModal, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#chapter-united-family' },
    { name: 'Team Structure', href: '#team-structure-section' },
    { name: 'TechExchange', href: '#chapter-learning-tech' },
    { name: 'Outings', href: '#chapter-outings-travel' },
    { name: 'Celebrations', href: '#chapter-celebrations' },
    { name: 'Bobathon', href: '#chapter-hackathons' },
    { name: 'Photo Wall', href: '#photo-collage-section' },
    { name: 'Wishes', href: '#shared-goals-section' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 py-3.5 ${
        scrolled ? 'py-2.5' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <nav
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'glass-panel shadow-md border-slate-200/80 bg-white/90'
              : 'bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-sm'
          }`}
        >
          {/* Logo & IBM Carbon Brand */}
          <a
            href="#hero-section"
            onClick={(e) => scrollToSection(e, '#hero-section')}
            className="flex items-center gap-3 group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#0f62fe] text-white p-0.5 shadow-sm group-hover:bg-[#0043ce] transition-colors">
              <Database className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 font-sans">
                  IBM Db2
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 text-[#0f62fe] font-bold uppercase tracking-wider border border-blue-200">
                  Lucknow Team
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium hidden sm:block">
                United Family • One Goal • Endless Memories
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-[#0f62fe] text-white shadow-sm'
                      : 'text-slate-700 hover:text-[#0f62fe] hover:bg-blue-50/80'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <AudioPlayer />

            <button
              id="upload-photo-btn"
              onClick={onOpenUploadModal}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0f62fe] hover:bg-[#0043ce] text-white text-xs font-semibold shadow-sm transition-all transform active:scale-95"
            >
              <ImagePlus className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Add Photos</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 rounded-2xl glass-panel bg-white/95 border-slate-200 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-800 hover:text-[#0f62fe] hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#0f62fe]" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
