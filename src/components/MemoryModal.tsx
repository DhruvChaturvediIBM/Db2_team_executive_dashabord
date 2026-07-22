import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { MemoryPhoto } from '../types';
import { X, ChevronLeft, ChevronRight, Sparkles, MapPin, Calendar, Tag } from 'lucide-react';

interface MemoryModalProps {
  photo: MemoryPhoto | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  onUpdatePhoto?: (updatedPhoto: MemoryPhoto) => void;
}

export const MemoryModal: React.FC<MemoryModalProps> = ({
  photo,
  onClose,
  onNext,
  onPrev,
  onUpdatePhoto,
}) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [caption, setCaption] = React.useState('');
  const [location, setLocation] = React.useState('');

  useEffect(() => {
    if (photo) {
      setTitle(photo.title);
      setCaption(photo.caption);
      setLocation(photo.location || '');
      setIsEditing(false);
    }
  }, [photo]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext && !isEditing) onNext();
      if (e.key === 'ArrowLeft' && onPrev && !isEditing) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev, isEditing]);

  if (!photo) return null;

  const handleSave = () => {
    if (onUpdatePhoto) {
      onUpdatePhoto({
        ...photo,
        title,
        caption,
        location,
      });
    }
    setIsEditing(false);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0f62fe', '#8a3ffc', '#1192e8', '#f1c21b', '#24a148'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-md animate-in fade-in duration-300">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-5xl rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-2xl max-h-[90vh] flex flex-col lg:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors shadow-sm"
          title="Close (Esc)"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Photo Frame */}
        <div className="relative flex-1 bg-slate-100 flex items-center justify-center min-h-[300px] lg:min-h-[500px]">
          <img
            src={photo.imageUrl}
            alt={photo.title}
            className="w-full h-full object-contain max-h-[70vh] p-2"
          />

          {/* Navigation Arrows */}
          {onPrev && (
            <button
              onClick={onPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 border border-slate-200 text-slate-900 hover:bg-[#0f62fe] hover:text-white transition-colors shadow-md"
              title="Previous Photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {onNext && (
            <button
              onClick={onNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 border border-slate-200 text-slate-900 hover:bg-[#0f62fe] hover:text-white transition-colors shadow-md"
              title="Next Photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Right Side: Memory Story Details */}
        <div className="w-full lg:w-96 p-6 sm:p-8 flex flex-col justify-between bg-white border-t lg:border-t-0 lg:border-l border-slate-200 overflow-y-auto">
          <div className="space-y-5">
            
            {/* Category & Date Badges */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-[#0f62fe] border border-blue-200 text-xs font-bold capitalize">
                  {photo.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-500 font-mono font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  {photo.date}
                </span>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-xs font-bold text-[#0f62fe] bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-lg border border-blue-200 transition-colors"
              >
                {isEditing ? 'Cancel' : 'Edit Caption'}
              </button>
            </div>

            {isEditing ? (
              <div className="space-y-3 pt-2">
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-500">Image Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 rounded-xl border border-blue-300 text-sm font-bold"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-500">Location</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-2 rounded-xl border border-blue-300 text-xs font-medium"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-500">Description / Caption</label>
                  <textarea
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    rows={3}
                    className="w-full p-2 rounded-xl border border-blue-300 text-xs font-medium"
                  />
                </div>
                <button
                  onClick={handleSave}
                  className="w-full py-2 rounded-xl bg-[#0f62fe] text-white text-xs font-bold shadow-xs hover:bg-blue-700"
                >
                  Save Image Description
                </button>
              </div>
            ) : (
              <>
                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {photo.title}
                </h2>

                {/* Location if present */}
                {photo.location && (
                  <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                    <MapPin className="w-4 h-4" />
                    <span>{photo.location}</span>
                  </div>
                )}

                {/* Detailed Description */}
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {photo.caption}
                </p>
              </>
            )}

            {/* Tags */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Memory Tags
              </span>
              <div className="flex flex-wrap gap-1.5">
                {photo.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-700 font-semibold"
                  >
                    <Tag className="w-3 h-3 text-[#0f62fe]" />
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-3 mt-6">
            <button
              onClick={triggerConfetti}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0f62fe] hover:bg-[#0043ce] text-white font-bold text-xs sm:text-sm shadow-sm transition-all transform active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Celebrate Memory</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
