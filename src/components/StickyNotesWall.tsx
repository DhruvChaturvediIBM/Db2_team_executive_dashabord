import React, { useState } from 'react';
import { TeamWishNote } from '../types';
import { GlassCard } from './GlassCard';
import { Heart, Send, Sparkles, MessageSquarePlus, User, Award } from 'lucide-react';

interface StickyNotesWallProps {
  notes: TeamWishNote[];
  onAddNote: (note: Omit<TeamWishNote, 'id' | 'timestamp'>) => void;
}

export const StickyNotesWall: React.FC<StickyNotesWallProps> = ({ notes, onAddNote }) => {
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const [selectedColor, setSelectedColor] = useState('from-blue-50 to-indigo-50 border-blue-200 text-blue-900');

  const colors = [
    { label: 'IBM Blue', value: 'from-blue-50 to-indigo-50 border-blue-200 text-blue-900' },
    { label: 'Purple Accent', value: 'from-purple-50 to-pink-50 border-purple-200 text-purple-900' },
    { label: 'Amber Warmth', value: 'from-amber-50 to-orange-50 border-amber-200 text-amber-900' },
    { label: 'Emerald Mint', value: 'from-emerald-50 to-teal-50 border-emerald-200 text-emerald-900' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !message.trim()) return;

    onAddNote({
      author: author.trim(),
      role: role.trim() || 'IBM Db2 Team Member',
      message: message.trim(),
      color: selectedColor,
    });

    setAuthor('');
    setRole('');
    setMessage('');
  };

  return (
    <section id="shared-goals-section" className="relative py-24 px-4 sm:px-8 carbon-grid-bg bg-white/70">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0f62fe] text-xs font-bold uppercase tracking-wider border border-blue-200 shadow-sm">
            <Heart className="w-4 h-4" />
            <span>Shared Family Wishes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Team Message Wall
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Leave a note of encouragement, favorite memory, or birthday wish for your IBM Db2 Lucknow teammates!
          </p>
        </div>

        {/* Add Note Form + Notes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Add Note Form */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base border-b border-slate-100 pb-3">
              <MessageSquarePlus className="w-5 h-5 text-[#0f62fe]" />
              <span>Post a Wish or Note</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Your Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0f62fe] focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Role / Pod</label>
                <div className="relative">
                  <Award className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="e.g. Bobathon Engineer / Kernel Team"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0f62fe] focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Your Message or Memory *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Share your appreciation or favorite team moment..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0f62fe] focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Card Color</label>
                <div className="flex items-center gap-2">
                  {colors.map((c, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedColor(c.value)}
                      className={`h-7 px-2.5 rounded-lg text-[10px] font-bold border transition-all ${
                        selectedColor === c.value ? 'ring-2 ring-[#0f62fe] scale-105' : 'opacity-80'
                      } bg-gradient-to-r ${c.value}`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#0f62fe] hover:bg-[#0043ce] text-white text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Post Note to Wall</span>
              </button>
            </form>
          </div>

          {/* Notes Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {notes.map((note) => (
              <GlassCard
                key={note.id}
                tiltEffect={true}
                className={`p-5 rounded-2xl bg-gradient-to-br ${note.color} border shadow-sm space-y-3 flex flex-col justify-between`}
              >
                <p className="text-xs leading-relaxed font-medium italic">
                  "{note.message}"
                </p>

                <div className="pt-2 border-t border-slate-900/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold">{note.author}</h4>
                    <p className="text-[10px] opacity-80">{note.role}</p>
                  </div>
                  <span className="text-[9px] font-mono opacity-70">{note.timestamp}</span>
                </div>
              </GlassCard>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
