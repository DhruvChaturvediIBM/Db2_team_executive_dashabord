import React from 'react';
import { DashboardTab } from '../types';
import {
  Users,
  Trophy,
  Clock,
  ShieldAlert,
  Globe2,
  Bot,
  Camera,
  Plus,
  Database,
  ChevronLeft,
  Lightbulb,
  Video,
  X
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
    { id: 'achievements', label: 'Achievements', icon: Trophy, badge: 'GA +' },
    { id: 'in-progress', label: 'In Progress', icon: Clock, badge: 'Active' },
    { id: 'challenges', label: 'Process & PDLC', icon: ShieldAlert },
    { id: 'innovation-proposals', label: 'Innovation Proposals', icon: Lightbulb, badge: 'New' },
    { id: 'productivity', label: 'Productivity & Media', icon: Video, badge: 'Demos' },
    { id: 'ai-adoption', label: 'AI Productivity', icon: Bot, badge: '8-10x' },
    { id: 'collaborations', label: 'Global Synergy', icon: Globe2 },
    { id: '3d-gallery', label: 'Fun Moments', icon: Camera, badge: `${memoryCount}` },
  ];

  const handleTabChange = (tab: DashboardTab) => {
    onTabChange(tab);
    // Auto-close on mobile after selection
    if (window.innerWidth < 1024 && onToggleSidebar) {
      onToggleSidebar();
    }
  };

  return (
    <>
      {/* Mobile backdrop — only shown below lg */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden"
        onClick={onToggleSidebar}
      />

      {/* Sidebar — fixed overlay on mobile, static in flow on lg+ */}
      <aside className="
        fixed inset-y-0 left-0 z-50 w-72
        lg:relative lg:inset-auto lg:z-30 lg:w-72
        bg-white border-r border-slate-200/90
        flex flex-col justify-between shrink-0
        shadow-xl lg:shadow-sm
      ">
        <div className="p-4 sm:p-5 flex-1 overflow-y-auto">
          {/* Brand Header */}
          <div className="flex items-center justify-between pb-5 border-b border-slate-200/70">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#0f62fe] text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/20 shrink-0">
                <Database className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold tracking-widest text-[#0f62fe] uppercase">IBM Db2</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-[#0f62fe]">Lucknow</span>
                </div>
                <h1 className="text-sm font-bold text-slate-900 tracking-tight truncate">Executive Dashboard</h1>
              </div>
            </div>

            {onToggleSidebar && (
              <button
                onClick={onToggleSidebar}
                className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors shrink-0 ml-2"
                title="Hide Sidebar"
              >
                <X className="w-4 h-4 lg:hidden" />
                <ChevronLeft className="w-5 h-5 hidden lg:block" />
              </button>
            )}
          </div>

          {/* Navigation */}
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
                    onClick={() => handleTabChange(item.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-bold transition-all duration-200 group ${
                      isActive
                        ? 'bg-[#0f62fe] text-white shadow-md shadow-blue-600/20'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/90'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Icon className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${
                        isActive ? 'text-white' : 'text-slate-500 group-hover:text-[#0f62fe]'
                      }`} />
                      <span className="truncate">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`ml-1 px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-[#0f62fe]'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200/80 bg-slate-50/60 shrink-0">
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
    </>
  );
};
