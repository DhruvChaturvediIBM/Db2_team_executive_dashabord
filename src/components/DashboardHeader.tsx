import React from 'react';
import { DashboardTab } from '../types';
import { Plus, Search, PanelLeftOpen, PanelLeftClose, Edit3, Eye, Users } from 'lucide-react';

interface DashboardHeaderProps {
  activeTab: DashboardTab;
  onOpenUpload: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  isSidebarCollapsed: boolean;
  onToggleSidebar: () => void;
  isEditMode: boolean;
  onToggleEditMode: () => void;
  onOpenRightSidebar: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  activeTab,
  onOpenUpload,
  searchQuery,
  onSearchChange,
  isSidebarCollapsed,
  onToggleSidebar,
  isEditMode,
  onToggleEditMode,
  onOpenRightSidebar,
}) => {
  const getTabTitles = (tab: DashboardTab) => {
    switch (tab) {
      case 'org-structure':
        return { title: 'Project-Based Team Structure', sub: 'Leadership, managers, project leads, and specialized pods' };
      case 'achievements':
        return { title: '2025 and early 2026 Team Milestones', sub: 'Defensive Publications, Life at IBM Spotlight, GA Products & Ecosystem Deliverables' };
      case 'in-progress':
        return { title: 'Active In-Progress Initiatives', sub: 'Db2 on ARM64 Linux, PPC, Genius Hub Text-to-SQL' };
      case 'collaborations':
        return { title: 'Global Cross-Team Synergy', sub: 'Db2 Core, Vector Index, Security, Release, Infra & External' };
      case 'challenges':
        return { title: 'Process & Alignment Improvement', sub: 'PDLC alignment, review bottlenecks, and stakeholder engagement' };
      case 'ai-adoption':
        return { title: 'AI Adoption & Productivity', sub: '8-10x velocity gains and 100% AI Native 2026 goal' };
      case '3d-gallery':
        return { title: '3D Team Photo Gallery Scroll', sub: 'Interactive perspective carousel and team memory collage' };
      default:
        return { title: 'Executive Review Dashboard', sub: 'IBM Db2 Lucknow Engineering' };
    }
  };

  const { title, sub } = getTabTitles(activeTab);

  return (
    <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200/90 px-3 sm:px-6 py-3 flex items-center justify-between gap-3 shadow-2xs">
      {/* Left: Toggle + Title */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-xl bg-slate-100 hover:bg-[#0f62fe] text-slate-700 hover:text-white transition-all shadow-2xs border border-slate-200 shrink-0"
          title={isSidebarCollapsed ? 'Show Sidebar' : 'Hide Sidebar'}
        >
          {isSidebarCollapsed ? <PanelLeftOpen className="w-4 h-4 sm:w-5 sm:h-5" /> : <PanelLeftClose className="w-4 h-4 sm:w-5 sm:h-5" />}
        </button>

        <div className="min-w-0">
          {/* Hide sub-brand on very small screens */}
          <div className="hidden sm:flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-full bg-blue-100 text-[#0f62fe] text-[10px] font-black uppercase tracking-wider">
              IBM Db2 Lucknow
            </span>
            <span className="text-[10px] text-slate-500 font-bold hidden md:inline">• Executive Slide Presentation</span>
          </div>
          <h1 className="text-sm sm:text-lg lg:text-xl font-black text-slate-900 tracking-tight truncate">
            {title}
          </h1>
          <p className="text-[10px] sm:text-xs text-slate-500 font-medium truncate hidden sm:block">
            {sub}
          </p>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
        <button
          onClick={onOpenRightSidebar}
          className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-xs shadow-md shadow-blue-500/20 transition-all border border-blue-400/30 cursor-pointer active:scale-95 shrink-0"
          title="Open Team Member Directory"
        >
          <Users className="w-4 h-4 text-amber-300" />
          <span className="hidden sm:inline">Team Member View</span>
        </button>

        {/* Search — hidden on xs, visible sm+ */}
        <div className="relative hidden sm:block w-36 md:w-48">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search..."
            className="w-full pl-8 pr-3 py-1.5 bg-slate-100 border border-slate-200/90 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0f62fe] focus:bg-white transition-colors"
          />
        </div>

        <button
          onClick={onToggleEditMode}
          className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all border shrink-0 ${
            isEditMode
              ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border-slate-200'
          }`}
          title={isEditMode ? 'Exit Edit Mode' : 'Enable Edit Mode'}
        >
          {isEditMode ? <Edit3 className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">{isEditMode ? 'Editing On' : 'Slide View'}</span>
        </button>

        {isEditMode && (
          <button
            onClick={onOpenUpload}
            className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-xl bg-[#0f62fe] hover:bg-[#0043ce] text-white font-bold text-xs shadow-xs transition-colors shrink-0 animate-in fade-in"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Add Photo</span>
          </button>
        )}
      </div>
    </header>
  );
};
