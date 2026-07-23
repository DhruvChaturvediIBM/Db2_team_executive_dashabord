import React, { useState } from 'react';
import { Video, Share2, FileText, Linkedin, Play, ExternalLink, Sparkles, Award, Eye, CheckCircle2 } from 'lucide-react';

interface VideoDemo {
  title: string;
  url: string;
  description: string;
  badge: string;
  category: string;
}

export const ProductivityOutreachPanel: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoDemo | null>(null);

  const demonstrationVideos: (VideoDemo & { author: string })[] = [
    {
      title: 'Db2 Developer Extension Demo Video',
      url: 'https://ibm.box.com/s/tdrkt869h9rb8h7czlhdt8fffiygw7n3',
      description: 'Full demonstration of IBM Db2 Developer Extension in VS Code featuring Text-to-SQL, Genius Hub connection manager, and query execution engine.',
      badge: 'GA Product Demo',
      category: 'VS Code Extension',
      author: 'Created by Dhruv Chaturvedi'
    },
    {
      title: 'Langflow Demonstration Video',
      url: 'https://ibm.ent.box.com/s/5f846o0d0f50a4ark4odxzyv9w8o1rir',
      description: 'End-to-end walkthrough of the IBM Db2 vector & chat memory connector in Langflow (30k+ community downloads).',
      badge: '30k+ Downloads',
      category: 'AI Ecosystem',
      author: 'Created by Dhruv Chaturvedi'
    },
    {
      title: 'Haystack Demonstration Video',
      url: 'https://ibm.box.com/s/y7tkpuogn0ol6rp95ywviq5w3lf1tvlt',
      description: 'Technical demonstration of Db2 Document Store and Hybrid Vector Search integration in deep Haystack RAG pipelines.',
      badge: 'RAG Pipeline Demo',
      category: 'Framework Connector',
      author: 'Created by Dhruv Chaturvedi & Geetika Chugh'
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 text-white shadow-xl relative overflow-hidden space-y-4">
        <div className="absolute right-0 top-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-amber-300 border border-white/20 text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Productivity & Technical Outreach</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs shadow-md">
              <Award className="w-4 h-4" />
              <span>Initiative Lead: Dhruv Chaturvedi</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Team Productivity, Media & Global Visibility
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-4xl leading-relaxed">
            <strong className="text-white font-extrabold">Dhruv Chaturvedi</strong> is leading this productivity initiative — creating rich graphics, videos, blogs, and media assets, and actively sharing these capabilities and materials across all team members for maximum global impact.
          </p>
        </div>
      </div>

      {/* Key Excellence Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Pillar 1: Video & Graphic Production */}
        <div className="p-6 rounded-3xl bg-white border-2 border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4">
          <div className="p-3.5 rounded-2xl bg-blue-50 text-[#0f62fe] w-fit border border-blue-100">
            <Video className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-black text-slate-900">
            Graphics & Video Content
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            Produced high-impact product video walkthroughs, architectural motion graphics, and live demonstration videos showcasing Db2 AI capabilities.
          </p>
          <ul className="space-y-2 text-xs font-bold text-slate-700 pt-2 border-t border-slate-100">
            <li className="flex items-center gap-2 text-blue-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Db2 VS Code Extension GA Walkthroughs</span>
            </li>
            <li className="flex items-center gap-2 text-blue-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Langflow, Haystack & CrewAI Demos</span>
            </li>
          </ul>
        </div>

        {/* Pillar 2: Technical Content & Blogs */}
        <div className="p-6 rounded-3xl bg-white border-2 border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4">
          <div className="p-3.5 rounded-2xl bg-indigo-50 text-indigo-600 w-fit border border-indigo-100">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-black text-slate-900">
            Technical Blogs & IP Publications
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            Authored technical enablement articles, IP.com defensive publications on Self-Healing Transaction Agents, and step-by-step developer integration blogs.
          </p>
          <ul className="space-y-2 text-xs font-bold text-slate-700 pt-2 border-t border-slate-100">
            <li className="flex items-center gap-2 text-indigo-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>IP.com Technical Defensive Publication</span>
            </li>
            <li className="flex items-center gap-2 text-indigo-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Genius Hub & DIC Migration Blogs</span>
            </li>
          </ul>
        </div>

        {/* Pillar 3: LinkedIn & Social Visibility */}
        <div className="p-6 rounded-3xl bg-white border-2 border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4">
          <div className="p-3.5 rounded-2xl bg-amber-50 text-amber-600 w-fit border border-amber-100">
            <Linkedin className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-black text-slate-900">
            LinkedIn & Life at IBM Visibility
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            Featured on official IBM social handles and Life at IBM spotlights, generating broad industry engagement for Lucknow engineering achievements.
          </p>
          <ul className="space-y-2 text-xs font-bold text-slate-700 pt-2 border-t border-slate-100">
            <li className="flex items-center gap-2 text-amber-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Official "Life at IBM" Spotlight Features</span>
            </li>
            <li className="flex items-center gap-2 text-amber-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>High Engagement Tech Posts & Shares</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Demonstration Videos Section */}
      <div className="space-y-4 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600 text-white shadow-sm shrink-0">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">
                Official Demonstration Videos
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Click any video demonstration to open and watch the executive recordings
              </p>
            </div>
          </div>
          <span className="self-start sm:self-center shrink-0 px-3.5 py-1 rounded-full bg-blue-100 text-[#0f62fe] text-xs font-black whitespace-nowrap">
            3 High-Impact Demos
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {demonstrationVideos.map((video, idx) => (
            <div
              key={idx}
              className="p-5 rounded-3xl bg-white border-2 border-slate-200 hover:border-[#0f62fe] shadow-sm hover:shadow-lg transition-all space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0f62fe] text-xs font-black border border-blue-200">
                    {video.badge}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {video.category}
                  </span>
                </div>

                <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative flex items-center justify-center border border-slate-800 group-hover:border-[#0f62fe]/50 overflow-hidden shadow-inner">
                  <div className="w-12 h-12 rounded-full bg-[#0f62fe] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white text-white ml-0.5" />
                  </div>
                </div>

                <h4 className="text-base font-black text-slate-900 group-hover:text-[#0f62fe] transition-colors">
                  {video.title}
                </h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {video.description}
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-700 font-extrabold bg-blue-50/80 px-3 py-1.5 rounded-xl border border-blue-100">
                  <Sparkles className="w-3.5 h-3.5 text-[#0f62fe] shrink-0" />
                  <span>{video.author}</span>
                </div>
              </div>

              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Watch Video on IBM Box</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
