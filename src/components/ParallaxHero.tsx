import React from 'react';
import { GlassCard } from './GlassCard';
import { Sparkles, Heart, Users, Compass, Trophy, ChevronDown, Award, ArrowRight } from 'lucide-react';

interface ParallaxHeroProps {
  onExploreClick: () => void;
  onCollageClick: () => void;
  onTeamClick: () => void;
  photoCount: number;
}

export const ParallaxHero: React.FC<ParallaxHeroProps> = ({
  onExploreClick,
  onCollageClick,
  onTeamClick,
  photoCount,
}) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-8 overflow-hidden carbon-grid-bg"
    >
      {/* Background Image Layer with IBM Light Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url('/IBM DB2 TECH IMAGES/team_photo.jpeg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#f4f4f4]/90 via-[#f4f4f4]/95 to-[#f4f4f4]" />

      {/* Ambient Light Accent Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-blue-400/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-indigo-400/10 blur-[100px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        
        {/* Carbon Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill border-blue-200 shadow-sm animate-bounce-subtle">
          <Award className="w-4 h-4 text-[#0f62fe]" />
          <span className="text-xs sm:text-sm font-bold tracking-wide text-slate-800">
            IBM Db2 Lucknow Team Showcase
          </span>
          <span className="w-2 h-2 rounded-full bg-[#0f62fe] animate-ping" />
        </div>

        {/* Main Title in Carbon Light Typography */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
            We Excel & Build{' '}
            <span className="text-[#0f62fe] underline decoration-blue-300 decoration-wavy decoration-2">
              Together.
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-700 font-normal leading-relaxed">
            From <span className="text-[#0f62fe] font-semibold">IBM TechExchange & Seminars</span> to{' '}
            <span className="text-purple-700 font-semibold">Bobathon Hackathons</span>, team outings, colleague engagement ceremonies, Women's Day, and Sovereign celebrations — we grow as one united family.
          </p>
        </div>

        {/* Pillar Glass Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-2">
          <GlassCard tiltEffect={true} onClick={onTeamClick} className="p-4 text-center group bg-white/90 border-slate-200">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center group-hover:bg-[#0f62fe] group-hover:text-white transition-colors">
              <Users className="w-5 h-5 text-[#0f62fe] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">United Family</h3>
            <p className="text-[11px] text-slate-500 mt-1">One Team • Same Goal</p>
          </GlassCard>

          <GlassCard tiltEffect={true} onClick={onExploreClick} className="p-4 text-center group bg-white/90 border-slate-200">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <Compass className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Outings & Travel</h3>
            <p className="text-[11px] text-slate-500 mt-1">Road trips & Retreats</p>
          </GlassCard>

          <GlassCard tiltEffect={true} onClick={onExploreClick} className="p-4 text-center group bg-white/90 border-slate-200">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Trophy className="w-5 h-5 text-purple-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Bobathon & Tech</h3>
            <p className="text-[11px] text-slate-500 mt-1">Innovation & Seminars</p>
          </GlassCard>

          <GlassCard tiltEffect={true} onClick={onExploreClick} className="p-4 text-center group bg-white/90 border-slate-200">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-pink-50 border border-pink-200 flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-colors">
              <Heart className="w-5 h-5 text-pink-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Celebrations</h3>
            <p className="text-[11px] text-slate-500 mt-1">Engagements & Birthdays</p>
          </GlassCard>
        </div>

        {/* Hero Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <button
            id="start-story-scroll-btn"
            onClick={onExploreClick}
            className="px-7 py-3.5 rounded-xl bg-[#0f62fe] hover:bg-[#0043ce] text-white font-bold text-xs sm:text-sm shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-blue-200" />
            <span>Explore Parallax Story</span>
          </button>

          <button
            id="view-team-structure-btn"
            onClick={onTeamClick}
            className="px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm border border-slate-300 shadow-sm transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Users className="w-4 h-4 text-[#0f62fe]" />
            <span>View Team Structure</span>
          </button>

          <button
            id="open-photo-wall-btn"
            onClick={onCollageClick}
            className="px-6 py-3.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#0f62fe] font-bold text-xs sm:text-sm border border-blue-200 shadow-sm transition-all flex items-center gap-2"
          >
            <span>Photo Collage Wall</span>
            <span className="px-2 py-0.5 text-xs rounded-full bg-[#0f62fe] text-white font-mono">
              {photoCount} Photos
            </span>
          </button>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity cursor-pointer" 
        onClick={onExploreClick}
      >
        <span className="text-[10px] tracking-widest text-slate-500 uppercase font-mono font-bold">
          Scroll Down
        </span>
        <ChevronDown className="w-5 h-5 text-[#0f62fe] animate-bounce" />
      </div>
    </section>
  );
};
