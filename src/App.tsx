import React, { useState } from 'react';
import { DashboardSidebar } from './components/DashboardSidebar';
import { DashboardHeader } from './components/DashboardHeader';
import { TeamStructureOrgChart } from './components/TeamStructureOrgChart';
import { ProductivityOutreachPanel } from './components/ProductivityOutreachPanel';
import { InnovationProposalsPanel } from './components/InnovationProposalsPanel';
import { PhotoCarousel3D } from './components/PhotoCarousel3D';
import { ExecutivePanels } from './components/ExecutivePanels';
import { CollageSection } from './components/CollageSection';
import { StickyNotesWall } from './components/StickyNotesWall';
import { MemoryModal } from './components/MemoryModal';
import { UploadModal } from './components/UploadModal';
import { RightTeamSidebar } from './components/RightTeamSidebar';
import { MemberProfileModal } from './components/MemberProfileModal';
import { MemoryPhoto, TeamWishNote, DashboardTab, MemberProfile } from './types';
import { DEFAULT_MEMORIES, DEFAULT_WISHE_NOTES, DEFAULT_MEMBER_PROFILES } from './data/storyData';

export default function App() {
  const [activeTab, setActiveTab] = useState<DashboardTab>('org-structure');
  const [memories, setMemories] = useState<MemoryPhoto[]>(DEFAULT_MEMORIES);
  const [notes, setNotes] = useState<TeamWishNote[]>(DEFAULT_WISHE_NOTES);
  const [selectedPhoto, setSelectedPhoto] = useState<MemoryPhoto | null>(null);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Sidebar & Layout states
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  // Member profiles state
  const [memberProfiles, setMemberProfiles] = useState<Record<string, MemberProfile>>(DEFAULT_MEMBER_PROFILES);
  const [selectedMember, setSelectedMember] = useState<MemberProfile | null>(null);
  const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);

  const handleAddPhoto = (newPhoto: MemoryPhoto) => {
    setMemories((prev) => [newPhoto, ...prev]);
  };

  const handleAddNote = (newNote: Omit<TeamWishNote, 'id' | 'timestamp'>) => {
    const created: TeamWishNote = {
      ...newNote,
      id: `note-${Date.now()}`,
      timestamp: 'Just now'
    };
    setNotes(prev => [created, ...prev]);
  };

  const handleNextPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = memories.findIndex((m) => m.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % memories.length;
    setSelectedPhoto(memories[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = memories.findIndex((m) => m.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + memories.length) % memories.length;
    setSelectedPhoto(memories[prevIndex]);
  };

  const handleSelectMember = (memberName: string, defaultRole?: string, projectTitle?: string) => {
    const profile = memberProfiles[memberName] || {
      name: memberName,
      title: 'Software Engineer',
      role: defaultRole || projectTitle || 'IBM Db2 Lucknow Team Member',
      bio: `${memberName} is a key contributor to the IBM Db2 engineering team in Lucknow, driving innovative features and quality releases.`,
      projects: projectTitle ? [projectTitle] : ['IBM Db2 Lucknow']
    };
    setSelectedMember(profile);
    setIsMemberModalOpen(true);
  };

  const handleSaveBio = (memberName: string, newBio: string, newAvatarUrl?: string) => {
    setMemberProfiles((prev) => ({
      ...prev,
      [memberName]: {
        ...(prev[memberName] || {
          name: memberName,
          title: 'Software Engineer',
          role: 'IBM Db2 Team Member',
        }),
        bio: newBio,
        avatarUrl: newAvatarUrl || prev[memberName]?.avatarUrl,
      },
    }));
    if (selectedMember && selectedMember.name === memberName) {
      setSelectedMember((prev) => prev ? { ...prev, bio: newBio, avatarUrl: newAvatarUrl || prev.avatarUrl } : null);
    }
  };

  // Filter memories if search query is present
  const filteredMemories = searchQuery.trim()
    ? memories.filter(m => 
        m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : memories;

  return (
    <div className="min-h-screen mesh-gradient-bg text-[#161616] font-sans antialiased flex flex-row overflow-x-hidden selection:bg-[#0f62fe] selection:text-white">

      {/* Left Sidebar — fixed overlay on mobile, static column on lg+ */}
      {!isSidebarCollapsed && (
        <DashboardSidebar
          activeTab={activeTab}
          onTabChange={(tab) => setActiveTab(tab)}
          onOpenUpload={() => setIsUploadOpen(true)}
          memoryCount={memories.length}
          isEditMode={isEditMode}
          onToggleSidebar={() => setIsSidebarCollapsed(true)}
        />
      )}

      {/* Main Dashboard Canvas */}
      <main className="flex-1 flex flex-col min-w-0 min-h-screen transition-all duration-300">
        
        {/* Top Header */}
        <DashboardHeader
          activeTab={activeTab}
          onOpenUpload={() => setIsUploadOpen(true)}
          searchQuery={searchQuery}
          onSearchChange={(q) => setSearchQuery(q)}
          isSidebarCollapsed={isSidebarCollapsed}
          onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          isEditMode={isEditMode}
          onToggleEditMode={() => setIsEditMode(!isEditMode)}
          onOpenRightSidebar={() => setIsRightSidebarOpen(true)}
        />

        {/* Dashboard Content Container */}
        <div className="flex-1 p-3 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-4 sm:space-y-6">
          
          {/* Section 1: Team Structure (Org Chart) */}
          {activeTab === 'org-structure' && (
            <TeamStructureOrgChart />
          )}

          {/* Section 1.5: Innovation Proposals */}
          {activeTab === 'innovation-proposals' && (
            <InnovationProposalsPanel />
          )}

          {/* Section 1.6: Productivity & Media */}
          {activeTab === 'productivity' && (
            <ProductivityOutreachPanel />
          )}

          {/* Section 2: Achievements */}
          {activeTab === 'achievements' && (
            <ExecutivePanels type="achievements" onSelectMember={handleSelectMember} />
          )}

          {/* Section 3: In Progress */}
          {activeTab === 'in-progress' && (
            <ExecutivePanels type="in-progress" onSelectMember={handleSelectMember} />
          )}

          {/* Section 5: Global Cross-Team Collaborations */}
          {activeTab === 'collaborations' && (
            <ExecutivePanels type="collaborations" onSelectMember={handleSelectMember} />
          )}

          {/* Section 6: Process Challenges & PDLC Improvements */}
          {activeTab === 'challenges' && (
            <ExecutivePanels type="challenges" onSelectMember={handleSelectMember} />
          )}

          {/* Section 7: AI Adoption & Productivity */}
          {activeTab === 'ai-adoption' && (
            <ExecutivePanels type="ai-adoption" onSelectMember={handleSelectMember} />
          )}

          {/* Section 8: 3D Image Carousel & Gallery */}
          {activeTab === '3d-gallery' && (
            <div className="space-y-12">
              <PhotoCarousel3D
                photos={filteredMemories}
                onSelectPhoto={(photo) => setSelectedPhoto(photo)}
              />
              <CollageSection
                memories={filteredMemories}
                onSelectPhoto={(photo) => setSelectedPhoto(photo)}
                onOpenUploadModal={() => setIsUploadOpen(true)}
              />
            </div>
          )}

          {/* Section 9: Family Wishes Wall */}
          {activeTab === 'wishes-notes' && (
            <StickyNotesWall notes={notes} onAddNote={handleAddNote} />
          )}

        </div>

        {/* Footer info strip */}
        <footer className="mt-auto border-t border-slate-200/80 bg-white/80 backdrop-blur-md py-4 px-6 text-center text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>IBM Db2 Lucknow • Executive Review & Team Showcase</span>
          <span className="font-extrabold text-[#0f62fe] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Made with ❤️ by Pawan Thakur & Dhruv Chaturvedi
          </span>
        </footer>
      </main>

      {/* Right Team Member Directory Sidebar Drawer */}
      <RightTeamSidebar
        isOpen={isRightSidebarOpen}
        onClose={() => setIsRightSidebarOpen(false)}
        memberProfiles={memberProfiles}
        onSelectMember={handleSelectMember}
      />

      {/* Team Member Profile Modal */}
      <MemberProfileModal
        member={selectedMember}
        isOpen={isMemberModalOpen}
        onClose={() => setIsMemberModalOpen(false)}
        onSaveBio={handleSaveBio}
        isEditMode={isEditMode}
      />

      {/* Lightbox Photo Modal */}
      <MemoryModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onNext={handleNextPhoto}
        onPrev={handlePrevPhoto}
        onUpdatePhoto={(updatedPhoto) => {
          setMemories((prev) => prev.map((p) => p.id === updatedPhoto.id ? updatedPhoto : p));
          setSelectedPhoto(updatedPhoto);
        }}
      />

      {/* Upload Photo Modal */}
      <UploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onAddPhoto={handleAddPhoto}
      />
    </div>
  );
}

