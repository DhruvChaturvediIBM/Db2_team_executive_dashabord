import React, { useState, useEffect } from 'react';
import { MemoryPhoto, CategoryType } from '../types';
import { ChevronLeft, ChevronRight, Sparkles, MapPin, Calendar, Tag, Maximize2 } from 'lucide-react';

interface PhotoCarousel3DProps {
  photos: MemoryPhoto[];
  onSelectPhoto: (photo: MemoryPhoto) => void;
}

export const PhotoCarousel3D: React.FC<PhotoCarousel3DProps> = ({
  photos,
  onSelectPhoto,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredPhotos = activeCategory === 'all'
    ? photos
    : photos.filter((p) => p.category === activeCategory);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  const categories: { id: CategoryType; label: string }[] = [
    { id: 'all', label: 'All Moments' },
    { id: 'tech', label: 'Tech & Seminars' },
    { id: 'hackathons', label: 'Bobathon & Hacks' },
    { id: 'outings', label: 'Outings & Trips' },
    { id: 'celebrations', label: 'Celebrations' },
    { id: 'festivals', label: 'Festivals & Sovereign' },
  ];

  if (filteredPhotos.length === 0) return null;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 pb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#0f62fe]" />
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            3D Memory Gallery Scroll
          </h2>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#0f62fe] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Carousel Stage */}
      <div className="relative w-full min-h-[560px] sm:min-h-[660px] flex items-center justify-center overflow-hidden py-10 px-4 rounded-3xl bg-slate-900/5 backdrop-blur-md border border-slate-200/60 shadow-inner">
        
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-3 sm:left-6 z-30 p-4 rounded-2xl bg-white/95 border border-slate-200 text-slate-800 hover:bg-[#0f62fe] hover:text-white transition-all shadow-xl hover:scale-110 active:scale-95 cursor-pointer"
          title="Previous Photo"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-3 sm:right-6 z-30 p-4 rounded-2xl bg-white/95 border border-slate-200 text-slate-800 hover:bg-[#0f62fe] hover:text-white transition-all shadow-xl hover:scale-110 active:scale-95 cursor-pointer"
          title="Next Photo"
        >
          <ChevronRight className="w-7 h-7" />
        </button>

        {/* 3D Cards Stack */}
        <div className="relative w-full max-w-5xl h-[460px] sm:h-[560px] flex items-center justify-center perspective-[1400px]">
          {filteredPhotos.map((photo, idx) => {
            // Calculate distance from current active index
            const count = filteredPhotos.length;
            let offset = (idx - currentIndex + count) % count;
            if (offset > count / 2) offset -= count;

            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            // Compute 3D transforms with larger spacing
            let translateX = offset * 340; // Spread out horizontally
            let rotateY = offset * -22;    // Rotated 3D angle
            let scale = 1 - Math.abs(offset) * 0.16; // Size scaling
            let zIndex = 20 - Math.abs(offset) * 5;
            let opacity = 1 - Math.abs(offset) * 0.3;

            // Responsive tweak for smaller mobile screens
            if (typeof window !== 'undefined' && window.innerWidth < 640) {
              translateX = offset * 160;
              scale = 1 - Math.abs(offset) * 0.22;
            }

            return (
              <div
                key={photo.id}
                onClick={() => isCenter && onSelectPhoto(photo)}
                style={{
                  transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  zIndex,
                  opacity,
                }}
                className={`absolute w-[300px] sm:w-[540px] md:w-[640px] h-[400px] sm:h-[500px] md:h-[540px] rounded-3xl bg-white border border-slate-200/90 shadow-2xl transition-all duration-500 ease-out cursor-pointer overflow-hidden flex flex-col justify-between group ${
                  isCenter ? 'ring-4 ring-[#0f62fe]/40 shadow-blue-500/25' : 'pointer-events-auto filter brightness-90 hover:brightness-100'
                }`}
              >
                {/* Photo Image Frame */}
                <div className="relative flex-1 bg-slate-100 overflow-hidden">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-90" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0f62fe] text-[10px] font-extrabold capitalize border border-white/50 shadow-xs">
                      {photo.category}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectPhoto(photo);
                      }}
                      className="p-1.5 rounded-full bg-slate-900/60 text-white hover:bg-[#0f62fe] transition-colors"
                      title="Enlarge View"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Bottom Image Info */}
                  <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                    <div className="flex items-center gap-2 text-[10px] font-mono font-semibold text-blue-200">
                      <Calendar className="w-3 h-3" />
                      <span>{photo.date}</span>
                      {photo.location && (
                        <>
                          <span>•</span>
                          <MapPin className="w-3 h-3 text-emerald-300" />
                          <span className="text-emerald-200">{photo.location}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight line-clamp-1">
                      {photo.title}
                    </h3>
                  </div>
                </div>

                {/* Card Caption Footer */}
                <div className="p-3 sm:p-4 bg-white border-t border-slate-100 space-y-2">
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
                    {photo.caption}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {photo.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-[10px] text-slate-700 font-semibold"
                      >
                        <Tag className="w-2.5 h-2.5 text-[#0f62fe]" />
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-30 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
          {filteredPhotos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === idx ? 'w-6 bg-[#0f62fe]' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
