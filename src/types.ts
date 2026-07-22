export type CategoryType = 
  | 'all'
  | 'outings'
  | 'hackathons'
  | 'celebrations'
  | 'tech'
  | 'festivals';

export interface MemoryPhoto {
  id: string;
  title: string;
  caption: string;
  category: CategoryType;
  date: string;
  imageUrl: string;
  tags: string[];
  location?: string;
  highlight?: boolean;
}

export interface ProjectTeam {
  id: string;
  title: string;
  leaders?: string[];
  members: string[];
  description?: string;
  subProjects?: {
    name: string;
    members: string[];
  }[];
}

export interface LeadershipNode {
  name: string;
  title: string;
  role: string;
  avatarUrl?: string;
}

export interface MemberProfile {
  name: string;
  role: string;
  title?: string;
  bio?: string;
  avatarUrl?: string;
  projects?: string[];
  skills?: string[];
  isExMember?: boolean;
  exTag?: string;
}


export type DashboardTab = 
  | 'org-structure'
  | 'innovation-proposals'
  | 'productivity'
  | 'achievements'
  | 'in-progress'
  | 'sovereign-innovations'
  | 'collaborations'
  | 'challenges'
  | 'ai-adoption'
  | '3d-gallery';

export interface StoryChapterData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  badge: string;
  gradient: string;
  category: CategoryType;
  highlights: {
    title: string;
    desc: string;
    icon: string;
  }[];
  featuredPhotos: MemoryPhoto[];
}

export interface TeamWishNote {
  id: string;
  author: string;
  role: string;
  message: string;
  color: string;
  timestamp: string;
}

