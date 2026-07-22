import React from 'react';
import { DashboardTab } from '../types';
import { 
  Users, 
  Trophy, 
  Clock, 
  ShieldAlert, 
  Globe2, 
  Sparkles, 
  Bot, 
  Camera, 
  Plus,
  Database,
  ChevronLeft,
  Lightbulb,
  Video
} from 'lucide-react';

interface DashboardSidebarProps {
  activeTab: DashboardTab;
  onTabChange: (tab: DashboardTab) => void;
  onOpenUpload: () => void;
  memoryCount: number;
  isEditMode: boolean;
  onToggleSidebar?: () => void;
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  activeTab,
  onTabChange,
  onOpenUpload,
  memoryCount,
  isEditMode,
  onToggleSidebar,
}) => {
  const navItems: { id: DashboardTab; label: string; icon: React.FC<{ className?: string }>; badge?: string }[] = [
    { id: 'org-structure', label: 'Team Structure', icon: Users, badge: 'Main' },
    { id: 'achievements', label: 'Achievements', icon: Trophy, badge: '3 GA' },
    { id: 'in-progress', label: 'In Progress', icon: Clock, badge: '4 Active' },
    { id: 'sovereign-innovations', label: 'Sovereign Core', icon: Sparkles, badge: '2 Selected' },
    { id: 'collaborations', label: 'Global Synergy', icon: Globe2 },
    { id: 'challenges', label: 'Process & PDLC', icon: ShieldAlert },
    { id: 'innovation-proposals', label: 'Innovation Proposals', icon: Lightbulb, badge: 'New' },
    { id: 'productivity', label: 'Productivity & Media', icon: Video, badge: 'Demos' },
    { id: 'ai-adoption', label: 'AI Productivity', icon: Bot, badge: '8-10x' },
    { id: '3d-gallery', label: '3D Gallery', icon: Camera, badge: `${memoryCount}` },
  ];

  return (
    <aside className="w-full lg:w-72 bg-white border-r border-slate-200/90 flex flex-col justify-between shrink-0 shadow-sm z-30 transition-all duration-300">
      <div className="p-4 sm:p-5">
        {/* Brand Header & Hide Sidebar Toggle */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-200/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0f62fe] text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/20">
              <Database className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold tracking-widest text-[#0f62fe] uppercase">IBM Db2</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-[#0f62fe]">Lucknow</span>
              </div>
              <h1 className="text-base font-bold text-slate-900 tracking-tight">Executive Dashboard</h1>
            </div>
          </div>

          {onToggleSidebar && (
            <button
              onClick={onToggleSidebar}
              className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              title="Hide Sidebar (Slide Presentation Mode)"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Navigation Section */}
        <div className="mt-5 space-y-1">
          <p className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">
            Executive Review
          </p>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-bold transition-all duration-200 group ${
                    isActive
                      ? 'bg-[#0f62fe] text-white shadow-md shadow-blue-600/20'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/90'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                        isActive ? 'text-white' : 'text-slate-500 group-hover:text-[#0f62fe]'
                      }`}
                    />
                    <span className="truncate text-xs sm:text-sm">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-[#0f62fe]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Footer Action Card */}
      <div className="p-4 border-t border-slate-200/80 bg-slate-50/60">
        <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-800">Freshers Synergy</span>
            <span className="text-[10px] text-emerald-700 font-extrabold bg-emerald-100 px-2 py-0.5 rounded-full">
              High Impact
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-snug">
            Freshers team performing up to the mark and driving 8-10x AI productivity.
          </p>

          {/* Add photo button visible only if edit mode is active */}
          {isEditMode && (
            <button
              onClick={onOpenUpload}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#0f62fe] hover:bg-[#0043ce] text-white font-bold text-xs shadow-xs transition-colors mt-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add Team Photo</span>
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};
