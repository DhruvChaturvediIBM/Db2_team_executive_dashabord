import React from 'react';
import { 
  ACHIEVEMENTS_DATA, 
  IN_PROGRESS_DATA, 
  SOVEREIGN_INNOVATIONS, 
  GLOBAL_COLLABORATIONS, 
  CHALLENGES_PROCESS, 
  AI_ADOPTION_METRICS 
} from '../data/storyData';
import { 
  Trophy, 
  Clock, 
  Sparkles, 
  Globe2, 
  AlertTriangle, 
  Bot, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Cpu,
  UserCheck,
  ExternalLink,
  Award,
  FileText,
  Share2
} from 'lucide-react';

interface ExecutivePanelsProps {
  type: 'achievements' | 'in-progress' | 'sovereign-innovations' | 'collaborations' | 'challenges' | 'ai-adoption';
  onSelectMember?: (memberName: string) => void;
}

export const ExecutivePanels: React.FC<ExecutivePanelsProps> = ({ type, onSelectMember }) => {
  
  /* List of key team members to highlight in text */
  const teamNames = [
    'Dhruv Chaturvedi',
    'dhruv chaturvedi',
    'Daya Nand',
    'Khushi Tyagi',
    'Geetika Chugh',
    'Urvashi',
    'Anant Vikram Singh',
    'Ayush Rastogi',
    'Priyanshu Krishnan',
    'Mohit Pandey',
    'Umakanta Senapati',
    'Saurabh Srivastava',
    'Jahanvi Sharma'
  ];

  /* Helper function to detect and format URLs and team member names in text */
  const renderDetailText = (text: string) => {
    // Regex for URLs or team names
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        let label = part;
        if (part.includes('ip.com')) label = '📄 View Publication on IP.com (00278081D)';
        else if (part.includes('linkedin')) label = '🔗 View Official LinkedIn Post';
        else if (part.includes('instagram')) label = '📸 View Official Instagram Post';

        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 my-1 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#0f62fe] font-black text-xs border border-blue-200 transition-all hover:underline"
          >
            <span>{label}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        );
      }

      // Further split text by team member names
      let segments: React.ReactNode[] = [part];

      teamNames.forEach((name) => {
        const nextSegments: React.ReactNode[] = [];
        segments.forEach((seg) => {
          if (typeof seg === 'string') {
            const regex = new RegExp(`(${name})`, 'gi');
            const subParts = seg.split(regex);
            subParts.forEach((sub, subIdx) => {
              if (sub.toLowerCase() === name.toLowerCase()) {
                const canonicalName = name.charAt(0).toUpperCase() + name.slice(1);
                nextSegments.push(
                  <button
                    key={`${index}-${name}-${subIdx}`}
                    onClick={() => onSelectMember?.(canonicalName === 'Dhruv chaturvedi' ? 'Dhruv Chaturvedi' : canonicalName)}
                    className="inline-flex items-center gap-1 px-2.5 py-0.5 my-0.5 mx-0.5 rounded-lg bg-gradient-to-r from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200 text-indigo-950 font-black text-xs border border-indigo-300/80 shadow-2xs transition-all cursor-pointer hover:scale-105 active:scale-95"
                    title={`Click to view ${canonicalName}'s Team Profile`}
                  >
                    <Users className="w-3 h-3 text-[#0f62fe]" />
                    <span>{canonicalName}</span>
                  </button>
                );
              } else {
                nextSegments.push(sub);
              }
            });
          } else {
            nextSegments.push(seg);
          }
        });
        segments = nextSegments;
      });

      return <span key={index}>{segments}</span>;
    });
  };

  /* ACHIEVEMENTS PANEL */
  if (type === 'achievements') {
    return (
      <div className="space-y-6 animate-in fade-in duration-300">
        <div className="flex items-center justify-between border-b-2 border-slate-200/80 pb-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Trophy className="w-6 h-6 text-[#0f62fe]" />
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Key Achievements & Deliverables</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
              Defensive Publications, Global Spotlights, GA product releases & ecosystem milestones
            </p>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0f62fe] text-xs sm:text-sm font-black border border-blue-200">
            2025 and early 2026 Team Milestone.....
          </span>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS_DATA.map((ach) => (
            <div
              key={ach.id}
              className={`p-6 sm:p-7 rounded-3xl bg-white border-2 border-slate-200/90 shadow-sm hover:shadow-xl transition-all space-y-4 relative overflow-hidden flex flex-col justify-between ${
                ach.id === 'ach-ipcom' 
                  ? 'border-indigo-300 bg-gradient-to-br from-white via-indigo-50/20 to-blue-50/30' 
                  : ach.id === 'ach-social'
                  ? 'border-purple-300 bg-gradient-to-br from-white via-purple-50/20 to-pink-50/30'
                  : 'hover:border-blue-400'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100/80 pb-3 gap-2 flex-wrap">
                  <span className={`px-3 py-1 rounded-xl text-xs font-black uppercase tracking-wider border ${
                    ach.id === 'ach-ipcom'
                      ? 'bg-indigo-100 text-indigo-800 border-indigo-200'
                      : ach.id === 'ach-social'
                      ? 'bg-purple-100 text-purple-800 border-purple-200'
                      : 'bg-blue-100 text-[#0f62fe] border-blue-200'
                  }`}>
                    {ach.category}
                  </span>
                  <span className="text-xs sm:text-sm font-black text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200 shadow-2xs">
                    {ach.metric}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight flex items-start gap-2.5">
                  {ach.id === 'ach-ipcom' && <Award className="w-6 h-6 text-indigo-600 shrink-0 mt-0.5" />}
                  {ach.id === 'ach-social' && <Share2 className="w-6 h-6 text-purple-600 shrink-0 mt-0.5" />}
                  <span>{ach.title}</span>
                </h3>

                <ul className="space-y-3 pt-1">
                  {ach.details.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${
                        ach.id === 'ach-ipcom' 
                          ? 'text-indigo-600' 
                          : ach.id === 'ach-social' 
                          ? 'text-purple-600' 
                          : 'text-[#0f62fe]'
                      }`} />
                      <span>{renderDetailText(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Link Action Buttons */}
              {ach.id === 'ach-ipcom' && (
                <div className="pt-3 border-t border-indigo-100 flex flex-wrap gap-2">
                  <a
                    href="https://priorart.ip.com/IPCOM/00278081D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow-md transition-all border border-indigo-500/30"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Read Full IP.com Publication</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {ach.id === 'ach-social' && (
                <div className="pt-3 border-t border-purple-100 flex flex-wrap gap-2">
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:ugcPost:7484842033162108928/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#0a66c2] hover:bg-[#004182] text-white font-black text-xs transition-all shadow-xs"
                  >
                    <span>LinkedIn Post</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://www.instagram.com/p/DbAP2xUDLHk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white font-black text-xs transition-all shadow-xs"
                  >
                    <span>Instagram Post</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sovereign Core Section — embedded directly in Achievements */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200/80">
            <Cpu className="w-5 h-5 text-purple-600" />
            <h3 className="text-lg font-black text-slate-900 tracking-tight">Sovereign Core & AI Innovations</h3>
            <span className="ml-auto px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-black border border-purple-200">
              Sovereign Core Selected
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SOVEREIGN_INNOVATIONS.sovereignProjects.map((proj, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-gradient-to-br from-white via-purple-50/20 to-blue-50/30 border-2 border-purple-200 shadow-md hover:shadow-xl hover:border-purple-400 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-black border border-purple-200">
                    {proj.badge}
                  </span>
                  <Cpu className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">{proj.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{proj.desc}</p>
              </div>
            ))}
          </div>

          {/* WatsonX Challenge */}
          <div className="p-6 rounded-3xl bg-white border-2 border-slate-200/90 shadow-md flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-amber-100 text-amber-800 border border-amber-200 shrink-0">
                <Trophy className="w-7 h-7 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">{SOVEREIGN_INNOVATIONS.watsonx.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">{SOVEREIGN_INNOVATIONS.watsonx.desc}</p>
              </div>
            </div>
            <span className="px-4 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-black shrink-0 border border-slate-200">
              Global Competition
            </span>
          </div>
        </div>

        {/* CAE Deep Dive Highlight */}
        <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white shadow-xl space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="px-3.5 py-1 rounded-full bg-amber-300 text-slate-900 text-xs font-black uppercase tracking-wider">
              CAE Team Spotlight (Urvashi)
            </span>
            <span className="text-xs sm:text-sm font-bold text-blue-100">Customer Engineering</span>
          </div>
          <p className="text-sm sm:text-base text-white font-bold leading-relaxed max-w-4xl">
            "Managed 22 active customer engagements while driving Db2 Intelligence Center (DIC) to Genius Hub migration, supporting enterprise customers through live demos, adoption planning, sales collaboration, and authoring technical enablement blogs."
          </p>
        </div>
      </div>
    );
  }

  /* IN PROGRESS PANEL */
  if (type === 'in-progress') {
    return (
      <div className="space-y-6 animate-in fade-in duration-300">
        <div className="flex items-center justify-between border-b-2 border-slate-200/80 pb-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-6 h-6 text-[#0f62fe]" />
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Active In-Progress Initiatives</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
              Current active builds, platform ports, and framework integrations
            </p>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs sm:text-sm font-black border border-amber-200">
            Active Build Phase
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {IN_PROGRESS_DATA.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border-2 border-slate-200/90 shadow-md hover:shadow-xl hover:border-blue-400 transition-all space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-[#0f62fe] text-xs font-black border border-blue-200">
                  {item.status}
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-slate-900">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* GLOBAL COLLABORATIONS PANEL */
  if (type === 'collaborations') {
    return (
      <div className="space-y-6 animate-in fade-in duration-300">
        <div className="flex items-center justify-between border-b-2 border-slate-200/80 pb-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Globe2 className="w-6 h-6 text-[#0f62fe]" />
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Global Cross-Team Collaboration</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
              Active engineering synergy across global Db2, release, security, and open-source teams
            </p>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0f62fe] text-xs sm:text-sm font-black border border-blue-200">
            Global Network
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GLOBAL_COLLABORATIONS.map((collab, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border-2 border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4"
            >
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <Users className="w-5 h-5 text-[#0f62fe]" />
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                  {collab.domain}
                </h3>
              </div>

              <div className="space-y-2">
                {collab.leadNames.map((name, nIdx) => (
                  <div key={nIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-900 font-extrabold bg-blue-50/70 px-3 py-1.5 rounded-xl border border-blue-100">
                    <UserCheck className="w-4 h-4 text-[#0f62fe] shrink-0" />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* CHALLENGES PANEL */
  if (type === 'challenges') {
    return (
      <div className="space-y-6 animate-in fade-in duration-300">
        <div className="flex items-center justify-between border-b-2 border-slate-200/80 pb-4">
          <div>
            <div className="flex items-center gap-2.5">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Process & Alignment Improvement Areas</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
              Constructive suggestions for PDLC alignment, review bottlenecks, and stakeholder engagement
            </p>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs sm:text-sm font-black border border-amber-200">
            Continuous Improvement
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CHALLENGES_PROCESS.map((ch) => (
            <div
              key={ch.id}
              className="p-6 rounded-3xl bg-white border-2 border-amber-200 shadow-md space-y-3 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 bottom-0 w-2 bg-amber-500" />
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-xl bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider">
                  {ch.area}
                </span>
                <AlertTriangle className="w-5 h-5 text-amber-500" />
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium pt-1">
                {ch.issue}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* AI ADOPTION PANEL */
  if (type === 'ai-adoption') {
    return (
      <div className="space-y-6 animate-in fade-in duration-300">
        <div className="flex items-center justify-between border-b-2 border-slate-200/80 pb-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Bot className="w-6 h-6 text-[#0f62fe]" />
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">AI Adoption & Productivity Gains</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
              Empowering development velocity, tech exchange, and market outreach through AI
            </p>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-black border border-emerald-200">
            100% AI Native Target 2026
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AI_ADOPTION_METRICS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border-2 border-slate-200/90 shadow-md hover:shadow-xl hover:border-blue-400 transition-all text-center space-y-2"
            >
              <div className="text-3xl sm:text-4xl font-black text-[#0f62fe]">
                {item.metric}
              </div>
              <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider">
                {item.label}
              </h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Featured IBM BOB Tool Session Card */}
        <div 
          className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white shadow-xl border-2 border-indigo-500/30 space-y-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-indigo-700/50 pb-3">
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 text-xs font-black uppercase tracking-widest">
                Tech Exchange & Knowledge Sharing
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-black">
                👑 Led by Dhruv Chaturvedi
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2.5">
              <Bot className="w-6 h-6 text-indigo-400 shrink-0" />
              <span>IBM BOB Tool Global Knowledge Sharing Session</span>
            </h3>
            <p className="text-sm sm:text-base text-indigo-100 font-medium leading-relaxed">
              Dhruv Chaturvedi led an interactive global IBM Tech Exchange knowledge sharing session on developer productivity. The VS Code Extension team and multiple cross-functional IBM engineering teams came together to demonstrate and present IBM BOB AI tools for accelerating software development workflows.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="px-3 py-1 rounded-xl bg-indigo-800/60 border border-indigo-600/50 text-indigo-100 text-xs font-bold">
              💻 VS Code Extension Team
            </span>
            <span className="px-3 py-1 rounded-xl bg-indigo-800/60 border border-indigo-600/50 text-indigo-100 text-xs font-bold">
              🤖 IBM BOB AI Productivity Tools
            </span>
            <span className="px-3 py-1 rounded-xl bg-indigo-800/60 border border-indigo-600/50 text-indigo-100 text-xs font-bold">
              🌐 Global Tech Exchange
            </span>
          </div>
        </div>

        <div className="p-7 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xl space-y-3">
          <div className="flex items-center gap-2.5">
            <TrendingUp className="w-6 h-6 text-amber-300" />
            <h3 className="text-lg font-extrabold">2026 Vision: 100% AI-Native Engineering</h3>
          </div>
          <p className="text-sm sm:text-base text-blue-100 leading-relaxed max-w-4xl font-medium">
            Targeting complete end-to-end AI integration across all Db2 engineering workflows, build pipelines, documentation generation, customer enablement, and open-source ecosystem connectors by end of 2026.
          </p>
        </div>
      </div>
    );
  }

  return null;
};
