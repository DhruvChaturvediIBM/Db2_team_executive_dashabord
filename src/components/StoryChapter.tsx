import React from 'react';
import { GlassCard } from './GlassCard';
import { StoryChapterData, MemoryPhoto } from '../types';
import { 
  Users, Target, Heart, Cpu, BookOpen, Zap, 
  Compass, MapPin, Coffee, Sparkles, Award, Gift, 
  Code2, Rocket, Trophy, Quote, Eye
} from 'lucide-react';

interface StoryChapterProps {
  chapter: StoryChapterData;
  isEven: boolean;
  onPhotoClick: (photo: MemoryPhoto) => void;
}

export const StoryChapter: React.FC<StoryChapterProps> = ({
  chapter,
  isEven,
  onPhotoClick,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-5 h-5 text-[#0f62fe]" />;
      case 'Target': return <Target className="w-5 h-5 text-indigo-600" />;
      case 'Heart': return <Heart className="w-5 h-5 text-pink-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#0f62fe]" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-purple-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-600" />;
      case 'Compass': return <Compass className="w-5 h-5 text-emerald-600" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-teal-600" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-amber-700" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'Award': return <Award className="w-5 h-5 text-rose-600" />;
      case 'Gift': return <Gift className="w-5 h-5 text-purple-600" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-[#0f62fe]" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-indigo-600" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-amber-500" />;
      default: return <Sparkles className="w-5 h-5 text-[#0f62fe]" />;
    }
  };

  // Select backdrop image for chapter
  const chapterBgImage = chapter.featuredPhotos[0]?.imageUrl || '/IBM DB2 TECH IMAGES/team_photo.jpeg';

  return (
    <section
      id={chapter.id}
      className="relative min-h-screen py-20 px-4 sm:px-8 flex items-center justify-center overflow-hidden border-b border-slate-200/80 carbon-grid-bg"
    >
      {/* Background Image Backdrop with Light IBM Mask */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 blur-sm scale-105 pointer-events-none"
        style={{ backgroundImage: `url('${chapterBgImage}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-[#f4f4f4]/95 to-white/90 pointer-events-none" />

      {/* Ambient Light Accent Glow */}
      <div
        className={`absolute top-1/2 ${
          isEven ? 'left-10' : 'right-10'
        } -translate-y-1/2 w-96 h-96 rounded-full bg-blue-100/70 blur-[120px] pointer-events-none`}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
            isEven ? '' : 'lg:flex-row-reverse'
          }`}
        >
          {/* Text & Narrative Content Column */}
          <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-black font-mono text-[#0f62fe]">
                {chapter.number}
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-xs font-bold text-[#0f62fe] uppercase tracking-wider shadow-sm">
                {chapter.badge}
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-bold text-[#0f62fe] uppercase tracking-widest font-mono">
                {chapter.subtitle}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {chapter.title}
              </h2>
            </div>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              {chapter.description}
            </p>

            {/* Quote Glass Container in Light Carbon Styling */}
            <div className="p-4 rounded-xl bg-white/90 border border-blue-200 shadow-sm backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-2 left-2 text-blue-300/40">
                <Quote className="w-8 h-8" />
              </div>
              <p className="relative z-10 italic text-xs sm:text-sm text-slate-800 font-medium pl-6">
                {chapter.quote}
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {chapter.highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/90 border border-slate-200 shadow-sm hover:border-blue-300 transition-colors"
                >
                  <div className="mb-2">{getIcon(h.icon)}</div>
                  <h4 className="text-xs font-bold text-slate-900 mb-0.5">{h.title}</h4>
                  <p className="text-[11px] text-slate-600 leading-tight">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3D Glass Photo Showcase Stage Column */}
          <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="relative group perspective-1000">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {chapter.featuredPhotos.map((photo, pIdx) => (
                  <GlassCard
                    key={photo.id || pIdx}
                    tiltEffect={true}
                    onClick={() => onPhotoClick(photo)}
                    className="group relative overflow-hidden rounded-2xl h-64 sm:h-72 border-slate-200 shadow-md bg-white"
                  >
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 border border-slate-200 backdrop-blur-md shadow-sm">
                      <span className="text-[10px] font-bold text-[#0f62fe] font-mono">
                        {photo.date}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white line-clamp-1">
                          {photo.title}
                        </span>
                        <Eye className="w-4 h-4 text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-[11px] text-slate-200 line-clamp-2 font-normal">
                        {photo.caption}
                      </p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
