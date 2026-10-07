export type BookmarkCategory = 
  | 'Character'
  | 'Plot'
  | 'Setting'
  | 'Illustrations/Layout'
  | 'Biography'
  | 'Courage'
  | 'Integrity'
  | 'Power'
  | 'Nature'
  | 'Stewardship'
  | 'Growth & Change'
  | 'Relationships'
  | 'Conflict'
  | 'Fantasy/SciFi'
  | 'Self-Help'
  | 'How-To Books'
  | 'Mysteries'
  | 'Humor'
  | 'Poetry'
  | 'Nonfiction'
  | 'Point of View'
  | 'Audience'
  | 'Historical Fiction'
  | 'Reading Attitudes';

export type ModuleId = 
  | 'character-detective'
  | 'plot-director'
  | 'world-setting'
  | 'visual-design'
  | 'big-ideas'
  | 'genre-quests'
  | 'reader-reflection';

export interface SEMRBookmark {
  code: string; // e.g. "C-1", "P-2", "M-3", "T-10"
  category: BookmarkCategory;
  moduleId: ModuleId;
  title: string;
  prompts: string[];
  depthLevel: 'Foundation' | 'Analytical' | 'Advanced Scholar';
  iconName: string;
  specialTool?: 'trite-word-detector' | 'word-cruncher' | 'red-herring-board' | 'character-closet' | 'soundtrack-studio' | 'trip-packer';
}

export interface BookSample {
  id: string;
  title: string;
  author: string;
  genre: string;
  gradeLevel: string;
  coverColor: string;
  summary: string;
  keyThemes: string[];
  suggestedBookmarks: string[];
  samplePassage: string;
}

export interface StudentBadge {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  xpValue: number;
  unlocked: boolean;
  unlockedAt?: string;
  progress: number;
  maxProgress: number;
  color: string;
}

export interface StudentResponse {
  id: string;
  bookmarkCode: string;
  promptText: string;
  bookTitle: string;
  bookAuthor: string;
  studentAnswer: string;
  createdAt: string;
  xpEarned: number;
  feedback?: {
    strengths: string[];
    deepThinkingTip: string;
    enrichmentSpark: string;
    criticalThinkingScore: number; // 1-5
  };
}
