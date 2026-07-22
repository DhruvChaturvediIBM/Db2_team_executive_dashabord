import React, { useState } from 'react';
import { X, Search, User, ExternalLink, Sparkles, Shield, Code, Cpu, Layers, Users, Heart } from 'lucide-react';
import { MemberProfile } from '../types';
import { LEADERSHIP_NODES, PROJECT_TEAMS } from '../data/storyData';

interface RightTeamSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  memberProfiles: Record<string, MemberProfile>;
  onSelectMember: (memberName: string, defaultRole?: string, projectTitle?: string) => void;
}

export const RightTeamSidebar: React.FC<RightTeamSidebarProps> = ({
  isOpen,
  onClose,
  memberProfiles,
  onSelectMember,
}) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  if (!isOpen) return null;

  // Build complete team member list with pod associations
  const allTeamMembersMap = new Map<string, { name: string; pod: string; role: string }>();

  LEADERSHIP_NODES.forEach((l) => {
    allTeamMembersMap.set(l.name, { name: l.name, pod: 'Leadership', role: `${l.title} - ${l.role}` });
  });

  PROJECT_TEAMS.forEach((pt) => {
    pt.leaders?.forEach((l) => {
      if (!allTeamMembersMap.has(l)) {
        allTeamMembersMap.set(l, { name: l, pod: pt.title, role: `Software Engineer - ${pt.title}` });
      }
    });
    pt.members?.forEach((m) => {
      if (!allTeamMembersMap.has(m)) {
        allTeamMembersMap.set(m, { name: m, pod: pt.title, role: `Software Engineer - ${pt.title}` });
      }
    });
    pt.subProjects?.forEach((sp) => {
      sp.members?.forEach((m) => {
        if (!allTeamMembersMap.has(m)) {
          allTeamMembersMap.set(m, { name: m, pod: `${pt.title} (${sp.name})`, role: `Sub-project Contributor` });
        }
      });
    });
  });

  const memberList = Array.from(allTeamMembersMap.values());

  const categories = ['all', 'Leadership', 'IBM Db2 Dev Extension', 'Db2 Linux ARM Team', 'Db2 Vector Support', 'DB2 AI Ecosystem Enablement', 'CAE Team', 'IBM AI Foundry Team'];

  const filteredMembers = memberList.filter((item) => {
    const profile = memberProfiles[item.name];
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.pod.toLowerCase().includes(search.toLowerCase()) ||
      item.role.toLowerCase().includes(search.toLowerCase()) ||
      (profile && profile.title.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'all' || item.pod.toLowerCase().includes(selectedCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  // List of known leaders
  const isLeader = (name: string) => {
    return [
      'Daya Nand',
      'Umakanta Senapati',
      'Anant Vikram Singh',
      'Ayush Rastogi',
      'Urvashi',
      'Mohit Pandey',
      'Priyanshu Krishnan'
    ].includes(name);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-in fade-in duration-200">
      {/* Dimmed Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Right Drawer Glass Panel */}
      <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl bg-white/95 backdrop-blur-2xl border-l border-white/80 shadow-2xl h-full flex flex-col z-10 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200/80 bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-slate-50 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0f62fe] bg-blue-100 border border-blue-200 px-3 py-1 rounded-full">
                IBM Db2 Lucknow
              </span>
              <span className="text-xs sm:text-sm font-extrabold text-slate-600">
                {memberList.length} Team Members
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1 flex items-center gap-2">
              <Users className="w-6 h-6 text-[#0f62fe]" />
              <span>Team Directory & Leaders</span>
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
            title="Close Drawer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/50 space-y-3.5">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search team member, title, or project pod..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200/90 rounded-2xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0f62fe] focus:ring-2 focus:ring-blue-500/20 shadow-2xs font-medium"
            />
          </div>

          {/* Pod Quick Filters */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold whitespace-nowrap transition-all border cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0f62fe] text-white border-[#0f62fe] shadow-xs'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                {cat === 'all' ? 'All Pods' : cat === 'Leadership' ? '👑 Leadership' : cat.replace('IBM Db2 ', '').replace(' Enablement', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Team Cards List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 custom-scrollbar">
          {filteredMembers.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-sm font-medium bg-slate-50/60 rounded-2xl border border-dashed border-slate-200">
              No team members match "{search}". Try another name or pod filter.
            </div>
          ) : (
            filteredMembers.map((item) => {
              const profile = memberProfiles[item.name];
              const title = profile?.title || item.role.split('-')[0] || 'Software Engineer';
              const bio = profile?.bio || `${item.name} is a key contributor to the IBM Db2 engineering team in Lucknow.`;
              const avatar = profile?.avatarUrl;
              const leaderStatus = isLeader(item.name);

              return (
                <div
                  key={item.name}
                  onClick={() => onSelectMember(item.name, item.role, item.pod)}
                  className={`p-5 sm:p-6 rounded-3xl bg-white border-2 hover:shadow-xl transition-all duration-200 cursor-pointer group space-y-3.5 relative overflow-hidden ${
                    leaderStatus
                      ? 'border-indigo-300 bg-gradient-to-br from-white via-indigo-50/30 to-blue-50/40 shadow-indigo-100'
                      : 'border-slate-200/90 hover:border-[#0f62fe]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className={`w-14 h-14 rounded-2xl text-white flex items-center justify-center font-black text-xl shrink-0 shadow-md group-hover:scale-105 transition-transform overflow-hidden ${
                      leaderStatus 
                        ? 'bg-gradient-to-br from-indigo-600 via-purple-600 to-amber-600 ring-2 ring-indigo-400' 
                        : 'bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700'
                    }`}>
                      {avatar ? (
                        <img src={avatar} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        item.name.charAt(0)
                      )}
                    </div>

                    <div className="min-w-0 flex-1 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#0f62fe] transition-colors flex items-center gap-1.5 flex-wrap">
                          <span>{item.name}</span>
                          {leaderStatus && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-black border border-amber-300 flex items-center gap-1">
                              👑 Lead
                            </span>
                          )}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#0f62fe] shrink-0 opacity-80" />
                      </div>

                      <p className="text-xs sm:text-sm font-extrabold text-[#0f62fe]">
                        {title}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <span className={`inline-block px-3 py-1 rounded-xl text-xs font-black border ${
                          leaderStatus 
                            ? 'bg-indigo-100 text-indigo-900 border-indigo-200' 
                            : 'bg-blue-50 text-[#0f62fe] border-blue-200'
                        }`}>
                          {item.pod}
                        </span>
                        {profile?.projects && profile.projects.length > 1 && (
                          <span className="inline-block px-3 py-1 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 text-amber-900 border border-amber-300 text-xs font-black shadow-2xs">
                            ✨ Multi-Project ({profile.projects.length} Pods)
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bio snippet */}
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed bg-slate-50/80 p-3 rounded-2xl border border-slate-100">
                    {bio}
                  </p>

                  <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-xs font-bold text-slate-500">
                    <span>Click card to view complete profile</span>
                    <span className="text-[#0f62fe] group-hover:underline flex items-center gap-1 font-black">
                      View Full Profile &rarr;
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Credit */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 text-center">
          <p className="text-[11px] font-bold text-slate-600 flex items-center justify-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Designed & Developed by Dhruv Chaturvedi</span>
          </p>
        </div>

      </div>
    </div>
  );
};
