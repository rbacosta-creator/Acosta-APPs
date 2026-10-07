import React from 'react';
import { BookOpen, Trophy } from 'lucide-react';

interface NavbarProps {
  activeTab: 'quests' | 'bookmarks' | 'studio' | 'badges' | 'guide';
  onSelectTab: (tab: 'quests' | 'bookmarks' | 'studio' | 'badges' | 'guide') => void;
  xp: number;
  level: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  xp,
  level,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element Brand Title */}
          <button
            onClick={() => onSelectTab('quests')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
              SEM-R Reading Quest
            </span>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              onClick={() => onSelectTab('quests')}
              className={`hover:text-slate-900 transition-colors py-1 relative ${
                activeTab === 'quests' ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600' : ''
              }`}
            >
              Quests
            </button>
            <button
              onClick={() => onSelectTab('bookmarks')}
              className={`hover:text-slate-900 transition-colors py-1 relative ${
                activeTab === 'bookmarks' ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600' : ''
              }`}
            >
              SEM-R Bookmarks
            </button>
            <button
              onClick={() => onSelectTab('studio')}
              className={`hover:text-slate-900 transition-colors py-1 relative ${
                activeTab === 'studio' ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600' : ''
              }`}
            >
              Reading Studio
            </button>
            <button
              onClick={() => onSelectTab('badges')}
              className={`hover:text-slate-900 transition-colors py-1 relative ${
                activeTab === 'badges' ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600' : ''
              }`}
            >
              Badges & Passport
            </button>
            <button
              onClick={() => onSelectTab('guide')}
              className={`hover:text-slate-900 transition-colors py-1 relative ${
                activeTab === 'guide' ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600' : ''
              }`}
            >
              Teacher & SEM-R Guide
            </button>
          </nav>

          {/* Zone 3: Primary Actions (Level & XP) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectTab('badges')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 hover:bg-amber-100 transition-colors"
              title="Click to view badges & achievements"
            >
              <Trophy className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-semibold font-mono tabular-nums">{xp} XP</span>
              <span className="text-xs text-amber-700">· Level {level} Scholar</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav bar */}
      <div className="md:hidden flex items-center justify-around border-t border-slate-200 py-2 px-2 bg-slate-50 text-xs font-medium text-slate-600">
        <button
          onClick={() => onSelectTab('quests')}
          className={`px-2 py-1 rounded ${activeTab === 'quests' ? 'bg-white text-emerald-700 font-semibold shadow-xs' : ''}`}
        >
          Quests
        </button>
        <button
          onClick={() => onSelectTab('bookmarks')}
          className={`px-2 py-1 rounded ${activeTab === 'bookmarks' ? 'bg-white text-emerald-700 font-semibold shadow-xs' : ''}`}
        >
          Bookmarks
        </button>
        <button
          onClick={() => onSelectTab('studio')}
          className={`px-2 py-1 rounded ${activeTab === 'studio' ? 'bg-white text-emerald-700 font-semibold shadow-xs' : ''}`}
        >
          Studio
        </button>
        <button
          onClick={() => onSelectTab('badges')}
          className={`px-2 py-1 rounded ${activeTab === 'badges' ? 'bg-white text-emerald-700 font-semibold shadow-xs' : ''}`}
        >
          Badges
        </button>
        <button
          onClick={() => onSelectTab('guide')}
          className={`px-2 py-1 rounded ${activeTab === 'guide' ? 'bg-white text-emerald-700 font-semibold shadow-xs' : ''}`}
        >
          Guide
        </button>
      </div>
    </header>
  );
};
