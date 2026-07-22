import React from 'react';
import { Database, Heart, Sparkles, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white border-t border-slate-200 py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#0f62fe] text-white flex items-center justify-center shadow-sm">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-extrabold text-slate-900">IBM Db2 Lucknow Team Showcase</h3>
            <p className="text-xs text-slate-500">
              United Family • TechExchange • Bobathon • Outings • Celebrations
            </p>
          </div>
        </div>

        {/* Center Tag */}
        <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
          <span>Crafted with</span>
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
          <span>for the IBM Db2 Lucknow Engineering Family</span>
        </div>

        {/* Scroll Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-200 shadow-sm transition-colors"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4 text-[#0f62fe]" />
        </button>

      </div>
    </footer>
  );
};
