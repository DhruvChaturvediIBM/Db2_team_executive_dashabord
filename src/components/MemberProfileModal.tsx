import React, { useState } from 'react';
import { MemberProfile } from '../types';
import { X, User, Briefcase, Award, Code, Sparkles, Edit3, Check, Camera, Star, Layers, ShieldCheck } from 'lucide-react';

interface MemberProfileModalProps {
  member: MemberProfile | null;
  isOpen: boolean;
  onClose: () => void;
  onSaveBio?: (memberName: string, newBio: string, newAvatarUrl?: string) => void;
  isEditMode?: boolean;
}

export const MemberProfileModal: React.FC<MemberProfileModalProps> = ({
  member,
  isOpen,
  onClose,
  onSaveBio,
  isEditMode = false,
}) => {
  if (!isOpen || !member) return null;

  const [bioText, setBioText] = useState(member.bio || '');
  const [avatarUrl, setAvatarUrl] = useState(member.avatarUrl || '');
  const [isEditing, setIsEditing] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    if (onSaveBio) {
      onSaveBio(member.name, bioText, avatarUrl);
    }
    setIsEditing(false);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setAvatarUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Color theme generator based on member name
  const getGradientColors = (name: string) => {
    if (name.includes('Daya') || name.includes('Umakanta')) {
      return {
        header: 'from-amber-600 via-orange-600 to-indigo-700',
        avatar: 'from-amber-500 to-orange-600',
        badge: 'bg-amber-100 text-amber-900 border-amber-300',
      };
    }
    if (name.includes('Dhruv')) {
      return {
        header: 'from-blue-600 via-indigo-600 to-purple-700',
        avatar: 'from-blue-600 to-indigo-700',
        badge: 'bg-indigo-100 text-indigo-900 border-indigo-300',
      };
    }
    if (name.includes('Anant') || name.includes('Ayush')) {
      return {
        header: 'from-indigo-600 via-blue-600 to-cyan-700',
        avatar: 'from-indigo-600 to-blue-700',
        badge: 'bg-blue-100 text-blue-900 border-blue-300',
      };
    }
    if (name.includes('Priyanshu') || name.includes('Geetika') || name.includes('Khushi')) {
      return {
        header: 'from-purple-600 via-pink-600 to-indigo-700',
        avatar: 'from-purple-600 to-pink-600',
        badge: 'bg-purple-100 text-purple-900 border-purple-300',
      };
    }
    return {
      header: 'from-blue-600 via-indigo-600 to-purple-600',
      avatar: 'from-blue-600 to-indigo-600',
      badge: 'bg-blue-100 text-blue-900 border-blue-200',
    };
  };

  const theme = getGradientColors(member.name);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl sm:max-w-4xl lg:max-w-5xl rounded-3xl bg-white/95 backdrop-blur-xl border-2 border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Background */}
        <div className={`h-36 sm:h-40 bg-gradient-to-r ${theme.header} relative p-6 sm:p-8 flex items-start justify-between`}>
          <div className="flex items-center gap-2 text-white/90 text-xs font-black uppercase tracking-widest bg-black/25 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>IBM Db2 Team Executive Profile</span>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all cursor-pointer"
            title="Close Profile"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Profile Content */}
        <div className="px-6 sm:px-8 pb-8 pt-0 space-y-6 overflow-y-auto -mt-16 sm:-mt-18">
          
          {/* Avatar and Main Info Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 bg-white/90 p-6 rounded-3xl border border-slate-200/90 shadow-md backdrop-blur-md">
            <div className="relative group shrink-0">
              <div className={`w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br ${theme.avatar} text-white border-4 border-white shadow-2xl flex items-center justify-center font-black text-4xl overflow-hidden shrink-0`}>
                {avatarUrl ? (
                  <img src={avatarUrl} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <span>{member.name.charAt(0)}</span>
                )}
              </div>
              
              {isEditMode && (
                <label className="absolute bottom-0 right-0 p-2.5 rounded-full bg-[#0f62fe] text-white border-2 border-white shadow-md cursor-pointer hover:bg-blue-700 transition-colors">
                  <Camera className="w-4 h-4" />
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={handleFileUpload}
                  />
                </label>
              )}
            </div>

            <div className="text-center sm:text-left space-y-1.5 flex-1 min-w-0">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {member.name}
                </h2>
                {member.projects && member.projects.length > 1 && (
                  <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-950 border border-amber-300 text-xs font-black shadow-2xs">
                    ✨ Multi-Pod ({member.projects.length} Initiatives)
                  </span>
                )}
                {(member.isExMember || member.exTag) && (
                  <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-black shadow-2xs">
                    🏷️ {member.exTag || 'Ex-member from IBM Db2'}
                  </span>
                )}
              </div>

              <p className="text-base sm:text-lg font-extrabold text-[#0f62fe] flex items-center justify-center sm:justify-start gap-2">
                <Briefcase className="w-5 h-5 text-[#0f62fe]" />
                <span>{member.title || 'Software Engineer'}</span>
              </p>
              <p className="text-sm text-slate-600 font-bold">
                {member.role}
              </p>
            </div>

            {isEditMode && (
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2.5 rounded-2xl bg-blue-50 text-[#0f62fe] border border-blue-200 hover:bg-blue-100 text-xs font-black transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
              >
                <Edit3 className="w-4 h-4" />
                {isEditing ? 'Cancel Edit' : 'Edit Info'}
              </button>
            )}
          </div>

          {/* Quick Projects Badges */}
          {member.projects && member.projects.length > 0 && (
            <div className="p-5 sm:p-6 rounded-3xl bg-slate-50/80 border border-slate-200/90 space-y-3">
              <div className="flex items-center justify-between text-xs font-black text-slate-800 uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#0f62fe]" />
                  <span>Project & Pod Contributions</span>
                </div>
                <span className="text-xs text-slate-500 font-bold">
                  {member.projects.length} Active {member.projects.length === 1 ? 'Pod' : 'Pods'}
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {member.projects.map((proj, pIdx) => (
                  <span
                    key={pIdx}
                    className="px-4 py-2 rounded-2xl bg-white border border-blue-200/90 text-[#0f62fe] text-xs sm:text-sm font-extrabold shadow-2xs flex items-center gap-2"
                  >
                    <Layers className="w-4 h-4 text-[#0f62fe]" />
                    <span>{proj}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Member Bio & Story */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <User className="w-4 h-4 text-[#0f62fe]" />
                <span>About & Key Contributions</span>
              </label>
              {isSaved && (
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  <Check className="w-4 h-4" /> Saved!
                </span>
              )}
            </div>

            {isEditing ? (
              <div className="space-y-3">
                <textarea
                  value={bioText}
                  onChange={(e) => setBioText(e.target.value)}
                  rows={4}
                  className="w-full p-4 rounded-2xl border-2 border-blue-300 focus:border-[#0f62fe] focus:outline-none text-sm text-slate-800 font-medium leading-relaxed bg-blue-50/30"
                  placeholder="Write something about this team member..."
                />
                
                <div className="flex justify-end gap-2">
                  <button
                    onClick={handleSave}
                    className="px-5 py-2.5 rounded-xl bg-[#0f62fe] text-white text-xs font-extrabold shadow-md hover:bg-blue-700 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <Check className="w-4 h-4" />
                    Save Details
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-50 via-blue-50/40 to-slate-50 border border-slate-200 text-sm sm:text-base text-slate-800 leading-relaxed font-medium shadow-inner">
                {bioText || 'Key contributor to the IBM Db2 engineering lab.'}
              </div>
            )}
          </div>

          {/* Technical Skills Badges */}
          {member.skills && member.skills.length > 0 && (
            <div className="space-y-3">
              <span className="text-xs font-black text-slate-900 uppercase tracking-wider block flex items-center gap-2">
                <Code className="w-4 h-4 text-purple-600" />
                <span>Technical Skills & Core Competencies</span>
              </span>
              <div className="flex flex-wrap gap-2.5">
                {member.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-1.5 rounded-2xl bg-purple-50 text-purple-950 border border-purple-200 text-xs sm:text-sm font-extrabold shadow-2xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Footer Developer Credit */}
          <div className="pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 font-medium">
            <span>IBM Db2 Lucknow Engineering</span>
            <span className="font-extrabold text-[#0f62fe]">Designed & Developed by Dhruv Chaturvedi</span>
          </div>

        </div>
      </div>
    </div>
  );
};
