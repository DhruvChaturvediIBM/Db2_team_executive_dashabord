import React, { useState } from 'react';
import { CategoryType, MemoryPhoto } from '../types';
import { X, Upload, Sparkles, Check } from 'lucide-react';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPhoto: (photo: MemoryPhoto) => void;
}

export const UploadModal: React.FC<UploadModalProps> = ({
  isOpen,
  onClose,
  onAddPhoto,
}) => {
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [category, setCategory] = useState<CategoryType>('outings');
  const [date, setDate] = useState('2025');
  const [location, setLocation] = useState('Lucknow');
  const [tags, setTags] = useState('IBM, Db2, Team');
  const [imageUrl, setImageUrl] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setImageUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !imageUrl.trim()) return;

    const newPhoto: MemoryPhoto = {
      id: `custom-${Date.now()}`,
      title: title.trim(),
      caption: caption.trim() || 'Cherished IBM Db2 Lucknow team memory.',
      category,
      date: date.trim() || '2025',
      location: location.trim() || 'Lucknow',
      imageUrl,
      tags: tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
    };

    onAddPhoto(newPhoto);
    onClose();

    // Reset form
    setTitle('');
    setCaption('');
    setImageUrl('');
    setImagePreview(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-lg rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#0f62fe]" />
            <h3 className="text-xl font-bold text-slate-900">Add Team Memory Photo</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* File Drag and Drop / Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Select Photo File or Image URL
            </label>
            <div className="relative border-2 border-dashed border-slate-200 rounded-2xl p-4 text-center hover:border-[#0f62fe] transition-colors bg-slate-50">
              {imagePreview ? (
                <div className="relative h-44 rounded-xl overflow-hidden border border-slate-200">
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => setImagePreview(null)}
                    className="absolute top-2 right-2 p-1 rounded-full bg-slate-900/80 text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Upload className="w-8 h-8 text-[#0f62fe] mx-auto" />
                  <p className="text-xs text-slate-600 font-medium">
                    Click to browse your photos or drop an image file here
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              )}
            </div>

            <div className="pt-2">
              <input
                type="url"
                value={imageUrl.startsWith('data:') ? '' : imageUrl}
                onChange={(e) => {
                  setImageUrl(e.target.value);
                  setImagePreview(e.target.value);
                }}
                placeholder="Or paste an image web URL..."
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0f62fe]"
              />
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
              Memory Title
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Engagement Celebration or Bobathon Winners"
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0f62fe]"
            />
          </div>

          {/* Category & Date */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as CategoryType)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#0f62fe]"
              >
                <option value="outings">Outings & Travel</option>
                <option value="hackathons">Bobathon & Hackathons</option>
                <option value="celebrations">Engagements & Birthdays</option>
                <option value="tech">Seminars & TechExchange</option>
                <option value="festivals">Festivals & Sovereign</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                Year / Date
              </label>
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="2025"
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0f62fe]"
              />
            </div>
          </div>

          {/* Caption */}
          <div>
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
              Story Caption / Details
            </label>
            <textarea
              rows={2}
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Tell the story behind this moment..."
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0f62fe] resize-none"
            />
          </div>

          {/* Location & Tags */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Lucknow"
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0f62fe]"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                Tags (comma separated)
              </label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="Db2, Family, Outing"
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0f62fe]"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!title.trim() || !imageUrl.trim()}
            className="w-full py-3 rounded-xl bg-[#0f62fe] hover:bg-[#0043ce] disabled:opacity-50 text-white font-bold text-xs sm:text-sm shadow-sm flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4" />
            <span>Add Memory to Gallery</span>
          </button>
        </form>
      </div>
    </div>
  );
};
