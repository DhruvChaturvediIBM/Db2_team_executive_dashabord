import React, { useState } from 'react';
import { GlassCard } from './GlassCard';
import { MemoryPhoto, CategoryType } from '../types';
import { 
  Sparkles, Search, Plus, Filter, LayoutGrid, 
  Layers, MapPin, Tag, Calendar 
} from 'lucide-react';

interface CollageSectionProps {
  memories: MemoryPhoto[];
  onSelectPhoto: (photo: MemoryPhoto) => void;
  onOpenUploadModal: () => void;
}

export const CollageSection: React.FC<CollageSectionProps> = ({
  memories,
  onSelectPhoto,
  onOpenUploadModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');

  const categories: { id: CategoryType; label: string }[] = [
    { id: 'all', label: 'All Shared Moments' },
    { id: 'outings', label: 'Outings & Travel' },
    { id: 'hackathons', label: 'Bobathon & Hackathons' },
    { id: 'celebrations', label: 'Engagements & Birthdays' },
    { id: 'tech', label: 'Seminars & TechExchange' },
    { id: 'festivals', label: 'Festivals & Sovereign' },
  ];

  const filteredMemories = memories.filter((mem) => {
    const matchesCategory = selectedCategory === 'all' || mem.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      mem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mem.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mem.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="photo-collage-section"
      className="relative min-h-screen py-24 px-4 sm:px-8 carbon-grid-bg bg-white/80 border-t border-slate-200"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-blue-100/60 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full bg-indigo-100/60 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-[#0f62fe] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#0f62fe]" />
              <span>Interactive Memory Vault</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              IBM Db2 Lucknow Photo Gallery
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-normal">
              Explore all our team photo memories — from IBM TechExchange to Bobathon, colleague engagement ceremonies, Women's Day, Sovereign summits, and road trip outings.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenUploadModal}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0f62fe] hover:bg-[#0043ce] text-white font-bold text-xs sm:text-sm shadow-sm transition-all transform active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>Upload New Photos</span>
            </button>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 px-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-[#0f62fe] text-white shadow-sm'
                    : 'text-slate-700 hover:text-[#0f62fe] hover:bg-blue-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input & View Mode */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search memories or tags..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0f62fe] focus:ring-2 focus:ring-blue-100 transition-colors"
              />
            </div>

            <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg text-slate-600 transition-colors ${
                  viewMode === 'grid' ? 'bg-white text-[#0f62fe] shadow-sm' : 'hover:text-slate-900'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-1.5 rounded-lg text-slate-600 transition-colors ${
                  viewMode === 'masonry' ? 'bg-white text-[#0f62fe] shadow-sm' : 'hover:text-slate-900'
                }`}
                title="Masonry View"
              >
                <Layers className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Photo Gallery Grid */}
        {filteredMemories.length === 0 ? (
          <div className="text-center py-20 rounded-3xl bg-white p-8 border-dashed border-slate-300 shadow-sm">
            <Filter className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 mb-1">No matching memories found</h3>
            <p className="text-slate-500 text-xs mb-4">
              Try adjusting your search query or select another category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-blue-50 text-[#0f62fe] border border-blue-200 text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            className={`grid gap-6 ${
              viewMode === 'grid'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
            }`}
          >
            {filteredMemories.map((photo) => (
              <GlassCard
                key={photo.id}
                tiltEffect={true}
                onClick={() => onSelectPhoto(photo)}
                className="group relative flex flex-col overflow-hidden rounded-2xl border-slate-200 shadow-sm hover:border-blue-300 bg-white h-96"
              >
                {/* Photo Image */}
                <div className="relative w-full h-3/5 overflow-hidden">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 border border-slate-200 backdrop-blur-md flex items-center gap-1 shadow-sm">
                    <Tag className="w-3 h-3 text-[#0f62fe]" />
                    <span className="text-[10px] font-bold text-slate-800 capitalize">
                      {photo.category}
                    </span>
                  </div>

                  {photo.location && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 border border-slate-200 backdrop-blur-md flex items-center gap-1 text-[10px] text-slate-700 font-medium shadow-sm">
                      <MapPin className="w-3 h-3 text-emerald-600" />
                      <span className="truncate max-w-[100px]">{photo.location}</span>
                    </div>
                  )}
                </div>

                {/* Card Body Info */}
                <div className="p-4 flex-1 flex flex-col justify-between bg-white">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#0f62fe] transition-colors line-clamp-1">
                        {photo.title}
                      </h3>
                      <span className="flex items-center gap-1 text-[11px] text-slate-500 font-mono">
                        <Calendar className="w-3 h-3" />
                        {photo.date}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-2 font-normal">
                      {photo.caption}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 pt-2">
                    {photo.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[10px] text-slate-700 font-semibold"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
