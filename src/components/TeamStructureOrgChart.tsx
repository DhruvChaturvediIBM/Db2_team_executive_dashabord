import React, { useState } from 'react';
import { LEADERSHIP_NODES, PROJECT_TEAMS, HIGHLIGHT_KEYNOTE, DEFAULT_MEMBER_PROFILES } from '../data/storyData';
import { ShieldCheck, Users, Sparkles, Cpu, Code, Layers, ArrowDown, Award, ExternalLink, Heart } from 'lucide-react';
import { MemberProfileModal } from './MemberProfileModal';
import { MemberProfile } from '../types';

export const TeamStructureOrgChart: React.FC = () => {
  const [memberProfiles, setMemberProfiles] = useState<Record<string, MemberProfile>>(DEFAULT_MEMBER_PROFILES);
  const [selectedMember, setSelectedMember] = useState<MemberProfile | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMemberClick = (memberName: string, defaultRole?: string, projectTitle?: string) => {
    const profile = memberProfiles[memberName] || {
      name: memberName,
      title: 'Software Engineer',
      role: defaultRole || projectTitle || 'IBM Db2 Lucknow Team Member',
      bio: `${memberName} is a key contributor to the IBM Db2 engineering team in Lucknow, driving innovative features and quality releases.`,
      projects: projectTitle ? [projectTitle] : ['IBM Db2 Lucknow']
    };
    setSelectedMember(profile);
    setIsModalOpen(true);
  };

  const handleSaveBio = (memberName: string, newBio: string, newAvatarUrl?: string) => {
    setMemberProfiles((prev) => ({
      ...prev,
      [memberName]: {
        ...(prev[memberName] || {
          name: memberName,
          title: 'Software Engineer',
          role: 'IBM Db2 Team Member',
        }),
        bio: newBio,
        avatarUrl: newAvatarUrl || prev[memberName]?.avatarUrl,
      },
    }));
    if (selectedMember && selectedMember.name === memberName) {
      setSelectedMember((prev) => prev ? { ...prev, bio: newBio, avatarUrl: newAvatarUrl || prev.avatarUrl } : null);
    }
  };

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'db2-dev-extension':
        return <Code className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />;
      case 'db2-linux-arm':
        return <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500" />;
      case 'db2-vector-support':
        return <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />;
      case 'db2-ai-ecosystem':
        return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />;
      default:
        return <Users className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />;
    }
  };

  const mainProjects = PROJECT_TEAMS.filter(p => p.id !== 'cae-team' && p.id !== 'ai-foundry');
  const sideBySideProjects = PROJECT_TEAMS.filter(p => p.id === 'cae-team' || p.id === 'ai-foundry');

  // Helper to check if a member should show Ex-member tag in a given project
  const showExTagForMember = (memberName: string, projectId: string) => {
    // Linux ARM team: no tag
    if (projectId === 'db2-linux-arm') return false;

    // Db2 AI ecosystem enablement: Dhruv is NOT an ex-member!
    if (projectId === 'db2-ai-ecosystem' && memberName === 'Dhruv Chaturvedi') return false;
    
    // Ayush, Dhruv, Kunal get the Ex-member tag
    const exNames = ['Ayush Rastogi', 'Dhruv Chaturvedi', 'Kunal Gola'];
    if (exNames.includes(memberName)) return true;
    
    const profile = memberProfiles[memberName];
    return profile?.isExMember || false;
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Top Banner: Key Leadership Highlight with Large Quote */}
      <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-5 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-start gap-4 z-10">
          <div className="p-3 rounded-2xl bg-white/15 backdrop-blur-md text-amber-300 shrink-0 shadow-md border border-white/20">
            <Sparkles className="w-7 h-7" />
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-3 py-0.5 rounded-full bg-amber-300 text-slate-900 text-[11px] font-black uppercase tracking-wider">
                {HIGHLIGHT_KEYNOTE.badge}
              </span>
              <span className="text-xs font-extrabold text-blue-100 uppercase tracking-wider">• Executive Keynote</span>
            </div>
            <p className="text-base sm:text-lg font-bold leading-snug text-white tracking-tight">
              "{HIGHLIGHT_KEYNOTE.quote}"
            </p>
          </div>
        </div>
        <div className="shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white text-slate-900 text-xs sm:text-sm font-black shadow-md z-10 border border-amber-300 whitespace-nowrap">
          <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 fill-amber-500 shrink-0" />
          <span>Freshers Superpower Synergy</span>
        </div>
      </div>

      {/* Leadership Tier */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-[#0f62fe] border border-blue-200 text-xs font-black uppercase tracking-widest shadow-2xs">
          <ShieldCheck className="w-4 h-4 text-[#0f62fe]" />
          <span>Leadership & Strategy Steering</span>
        </div>

        {/* Senior leadership row — Manager & Lead Architect */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 max-w-2xl mx-auto">
          {LEADERSHIP_NODES.slice(0, 2).map((leader, idx) => (
            <div
              key={idx}
              onClick={() => handleMemberClick(leader.name, leader.role, leader.title)}
              className="flex-1 p-4 sm:p-5 rounded-3xl bg-white border-2 border-blue-100 shadow-md hover:shadow-xl hover:border-[#0f62fe] cursor-pointer transition-all text-center relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0f62fe]" />
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-2.5 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center font-black text-2xl shadow-md group-hover:scale-105 transition-transform overflow-hidden border-2 border-blue-100">
                {memberProfiles[leader.name]?.avatarUrl ? (
                  <img src={memberProfiles[leader.name].avatarUrl} alt={leader.name} className="w-full h-full object-cover" />
                ) : (
                  leader.name.charAt(0)
                )}
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[#0f62fe] transition-colors flex items-center justify-center gap-1.5">
                <span>{leader.name}</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#0f62fe] shrink-0" />
              </h3>
              <span className="inline-block px-3 py-0.5 rounded-full bg-blue-50 text-[#0f62fe] text-xs font-black my-1 border border-blue-200">
                {leader.title}
              </span>
              <p className="text-xs text-slate-600 font-medium">
                {leader.role}
              </p>
            </div>
          ))}
        </div>

        {/* Junior Architect — Anant Vikram Singh (smaller card, centred below) */}
        {(() => {
          const anant = LEADERSHIP_NODES[2];
          return (
            <div className="flex justify-center">
              <div
                onClick={() => handleMemberClick(anant.name, anant.role, anant.title)}
                className="w-full sm:w-72 p-3 sm:p-4 rounded-2xl bg-white border-2 border-indigo-100 shadow-sm hover:shadow-lg hover:border-indigo-400 cursor-pointer transition-all text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 to-blue-500" />
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white flex items-center justify-center font-black text-lg shadow group-hover:scale-105 transition-transform overflow-hidden border-2 border-indigo-100">
                  {memberProfiles[anant.name]?.avatarUrl ? (
                    <img src={memberProfiles[anant.name].avatarUrl} alt={anant.name} className="w-full h-full object-cover" />
                  ) : (
                    anant.name.charAt(0)
                  )}
                </div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center justify-center gap-1">
                  <span>{anant.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500 shrink-0" />
                </h3>
                <div className="flex items-center justify-center gap-1.5 flex-wrap my-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-black border border-indigo-200">
                    {anant.title}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[11px] font-black border border-purple-200">
                    <Sparkles className="w-2.5 h-2.5" />
                    Multi-Pod (6 Initiatives)
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">
                  {anant.role}
                </p>
              </div>
            </div>
          );
        })()}

        {/* Down Connection Icon */}
        <div className="flex justify-center my-1 text-[#0f62fe]">
          <ArrowDown className="w-5 h-5 animate-bounce text-[#0f62fe]" />
        </div>
      </div>

      {/* Main Engineering Project Trees */}
      <div className="space-y-4">
        {mainProjects.map((project) => {
          const allMembers = Array.from(new Set([...(project.leaders || []), ...project.members]));
          return (
            <div
              key={project.id}
              className="p-4 sm:p-5 rounded-3xl bg-white border-2 border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-3.5 relative"
            >
              {/* TOP HEADER: Project Name at TOP of container */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-blue-50 border border-blue-200 shrink-0">
                    {getProjectIcon(project.id)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-[#0f62fe] border border-blue-200 text-xs font-black whitespace-nowrap">
                    Team Members ({allMembers.length})
                  </span>
                </div>
              </div>

              {/* FULL WIDTH MEMBERS GRID with WIDER boxes & wrapped names */}
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {allMembers.map((memberName) => {
                  const profile = memberProfiles[memberName];
                  const hasExTag = showExTagForMember(memberName, project.id);
                  return (
                    <button
                      key={memberName}
                      onClick={() => handleMemberClick(memberName, profile?.title || 'Software Engineer', project.title)}
                      className="p-3.5 rounded-2xl bg-slate-50/90 border-2 border-slate-200/90 hover:bg-blue-50 hover:border-[#0f62fe] transition-all flex items-center gap-3.5 text-left group cursor-pointer w-full"
                    >
                      {/* Bigger Photo */}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-sm group-hover:scale-105 transition-transform overflow-hidden relative border border-slate-200">
                        {profile?.avatarUrl ? (
                          <img src={profile.avatarUrl} alt={memberName} className="w-full h-full object-cover" />
                        ) : (
                          memberName.charAt(0)
                        )}
                      </div>

                      {/* Member Info */}
                      <div className="min-w-0 flex-1 space-y-1">
                        <p className="text-sm sm:text-base font-black text-slate-900 group-hover:text-[#0f62fe] transition-colors leading-snug break-words">
                          {memberName}
                        </p>
                        
                        {hasExTag ? (
                          <span className="inline-block text-[11px] sm:text-xs font-black text-amber-900 bg-amber-100 border border-amber-300 px-2.5 py-0.5 rounded-md">
                            Ex-member
                          </span>
                        ) : (
                          <p className="text-xs sm:text-sm text-slate-600 font-bold leading-snug break-words">
                            {profile?.title || 'Software Engineer'}
                          </p>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Condensed Side-by-Side Cards: CAE Team & IBM AI Foundry Team */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
        {sideBySideProjects.map((project) => {
          const allMembers = Array.from(new Set([...(project.leaders || []), ...project.members]));
          return (
            <div
              key={project.id}
              className="p-4 rounded-3xl bg-white border-2 border-slate-200/90 shadow-xs hover:shadow-md transition-all space-y-3"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-2.5">
                <div className="p-2 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 shrink-0">
                  {getProjectIcon(project.id)}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm sm:text-base font-black text-slate-900">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium truncate">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {allMembers.map((memberName) => {
                  const profile = memberProfiles[memberName];
                  return (
                    <button
                      key={memberName}
                      onClick={() => handleMemberClick(memberName, project.title, project.title)}
                      className="p-2.5 sm:p-3 rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-[#0f62fe] hover:bg-blue-50/50 transition-all flex items-center gap-3 text-left group cursor-pointer w-full overflow-hidden"
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center font-black text-lg shrink-0 shadow-sm group-hover:scale-105 transition-transform overflow-hidden border border-amber-200">
                        {profile?.avatarUrl ? (
                          <img src={profile.avatarUrl} alt={memberName} className="w-full h-full object-cover" />
                        ) : (
                          memberName.charAt(0)
                        )}
                      </div>
                      <div className="min-w-0 flex-1 space-y-1">
                        <p className="text-sm sm:text-base font-black text-slate-900 group-hover:text-[#0f62fe] transition-colors leading-snug break-words">
                          {memberName}
                        </p>
                        <p className="text-xs text-slate-600 font-bold leading-snug break-words">
                          {profile?.title || 'Software Engineer'}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#0f62fe] shrink-0" />
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Prominent Designer & Developer Credit Banner */}
      <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white border-2 border-blue-500/30 shadow-md flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-[#0f62fe] text-white shrink-0 shadow-sm">
            <Heart className="w-5 h-5 text-amber-300 fill-amber-300" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-300">
              Executive Review Platform
            </span>
            <h3 className="text-base sm:text-lg font-black text-white whitespace-nowrap">
              Made with ❤️ by Pawan Thakur & Dhruv Chaturvedi
            </h3>
          </div>
        </div>
        <span className="px-3.5 py-1.5 rounded-2xl bg-white/10 backdrop-blur-md text-blue-100 border border-white/20 text-xs font-bold whitespace-nowrap">
          IBM Db2 Engineering Lucknow
        </span>
      </div>

      {/* Member Profile Modal */}
      <MemberProfileModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSaveBio={handleSaveBio}
      />

    </div>
  );
};
