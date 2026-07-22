import React, { useState, useEffect } from 'react';
import { Sparkles, Quote, ChevronRight, RefreshCw, Award } from 'lucide-react';
import { IBM_VALUE_THOUGHTS } from '../data/storyData';

export const IbmThoughtBanner: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % IBM_VALUE_THOUGHTS.length);
        setIsFading(false);
      }, 300);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const currentItem = IBM_VALUE_THOUGHTS[index];

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % IBM_VALUE_THOUGHTS.length);
      setIsFading(false);
    }, 200);
  };

  return (
    <div className="w-full rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-4 sm:p-5 border-2 border-blue-400/40 shadow-xl relative overflow-hidden backdrop-blur-md group">
      
      {/* Background glowing light accents */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-blue-500/20 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        {/* Left Badge & Quote */}
        <div className="flex items-start gap-3.5 flex-1 min-w-0">
          <div className="p-2.5 rounded-2xl bg-blue-600/80 border border-blue-300/40 text-amber-300 shrink-0 shadow-md mt-0.5">
            <Quote className="w-5 h-5" />
          </div>

          <div className="space-y-1 min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/30 text-blue-200 border border-blue-300/30 text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-300" />
                {currentItem.category}
              </span>
              <span className="text-[10px] font-bold text-slate-300">
                • Thought {index + 1} of {IBM_VALUE_THOUGHTS.length}
              </span>
            </div>

            <p
              className={`text-sm sm:text-base font-bold text-white leading-snug transition-opacity duration-300 italic ${
                isFading ? 'opacity-0' : 'opacity-100'
              }`}
            >
              "{currentItem.thought}"
            </p>

            <p className="text-xs font-semibold text-blue-300 flex items-center gap-1.5 pt-0.5">
              <span>— {currentItem.author}</span>
            </p>
          </div>
        </div>

        {/* Right Manual Rotation Button */}
        <button
          onClick={handleNext}
          className="self-start sm:self-center px-3.5 py-2 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold transition-all flex items-center gap-2 shrink-0 cursor-pointer shadow-xs active:scale-95"
          title="Next IBM Value Thought"
        >
          <RefreshCw className={`w-3.5 h-3.5 text-blue-200 ${isFading ? 'animate-spin' : ''}`} />
          <span>Next Thought</span>
        </button>

      </div>
    </div>
  );
};
