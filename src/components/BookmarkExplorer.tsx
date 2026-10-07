import React, { useState, useMemo } from 'react';
import { ALL_BOOKMARKS } from '../data/bookmarks';
import { SEMRBookmark, BookmarkCategory } from '../types';
import { Search, Printer, ArrowRight, BookOpen, Filter, CheckCircle2 } from 'lucide-react';

interface BookmarkExplorerProps {
  onPracticeBookmark: (bookmark: SEMRBookmark, promptIndex?: number) => void;
  onOpenPrintModal: (selectedBookmark?: SEMRBookmark) => void;
  completedBookmarkCodes: string[];
}

export const BookmarkExplorer: React.FC<BookmarkExplorerProps> = ({
  onPracticeBookmark,
  onOpenPrintModal,
  completedBookmarkCodes,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const set = new Set<string>();
    ALL_BOOKMARKS.forEach(b => set.add(b.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredBookmarks = useMemo(() => {
    return ALL_BOOKMARKS.filter(bookmark => {
      const matchesCategory = selectedCategory === 'All' || bookmark.category === selectedCategory;
      const matchesSearch =
        bookmark.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bookmark.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bookmark.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bookmark.prompts.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Header and Controls */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
              Official University of Connecticut SEM-R Collection
            </div>
            <h2 className="font-display text-2xl font-bold text-slate-900 mt-1">
              SEM-R Reading Bookmarks
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              All 24 bookmark types from the Schoolwide Enrichment Model in Reading. Select any prompt to practice or print.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenPrintModal()}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors shadow-xs"
            >
              <Printer className="w-4 h-4" />
              <span>Print Bookmark Sheet</span>
            </button>
          </div>
        </div>

        {/* Search & Category Filter */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="relative md:col-span-2">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by prompt, code (e.g. C-1, P-2), or topic (e.g. antagonist, courage)..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white appearance-none pr-8 cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'All' ? 'All Bookmark Categories' : cat}
                </option>
              ))}
            </select>
            <Filter className="absolute right-3 top-3 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Filter Tags */}
        <div className="mt-3 flex items-center gap-2 text-xs text-slate-600 overflow-x-auto pb-1">
          <span className="font-medium text-slate-700">Quick Filters:</span>
          {['Character', 'Plot', 'Courage', 'Growth & Change', 'Mysteries', 'Fantasy/SciFi'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(selectedCategory === cat ? 'All' : cat)}
              className={`px-2.5 py-1 rounded-md text-xs transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white font-medium'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Bookmarks Grid: Styled authentically like the physical bookmarks! */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBookmarks.map((bookmark) => {
          const isCompleted = completedBookmarkCodes.includes(bookmark.code);

          return (
            <div
              key={bookmark.code}
              className="bg-white rounded-xl border border-slate-300 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden relative"
            >
              {/* Completed Watermark Ribbon */}
              {isCompleted && (
                <div className="absolute top-2 right-2 z-10 flex items-center gap-1 bg-emerald-100 text-emerald-800 text-xs px-2 py-0.5 rounded-full font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Practiced</span>
                </div>
              )}

              {/* Bookmark Inner Frame matching the physical PDF format */}
              <div className="p-5 flex-1 flex flex-col">
                {/* Physical Gray Header Box */}
                <div className="border border-slate-400 bg-slate-200 text-center py-2 px-3 rounded-xs mb-4">
                  <h3 className="font-serif text-lg font-bold text-slate-900 tracking-wide">
                    {bookmark.category}
                  </h3>
                </div>

                {/* Subtitle / Depth badge */}
                <div className="flex items-center justify-between text-xs text-slate-600 mb-3 px-1">
                  <span className="font-medium text-slate-700">{bookmark.title}</span>
                  <span className="text-slate-600">{bookmark.depthLevel}</span>
                </div>

                {/* The 4 authentic prompts from the bookmark */}
                <div className="space-y-3.5 flex-1 text-xs text-slate-800 leading-relaxed font-sans">
                  {bookmark.prompts.map((prompt, idx) => (
                    <div
                      key={idx}
                      onClick={() => onPracticeBookmark(bookmark, idx)}
                      className="p-2.5 rounded-lg hover:bg-emerald-50 hover:text-emerald-950 transition-colors cursor-pointer border border-transparent hover:border-emerald-200 group"
                    >
                      <p>{prompt}</p>
                      <span className="text-[11px] text-emerald-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity block mt-1">
                        → Practice this prompt
                      </span>
                    </div>
                  ))}
                </div>

                {/* Authentic University of Connecticut SEM-R Footer */}
                <div className="mt-5 pt-3 border-t border-slate-300 flex items-center justify-between text-[11px] text-slate-500 font-sans">
                  <div>
                    <p className="font-medium text-slate-600">Project SEM-R (Elementary)</p>
                    <p>University of Connecticut</p>
                    <p className="text-[10px] text-slate-400">www.gifted.uconn.edu</p>
                  </div>
                  <div className="text-right">
                    <span className="font-serif font-bold text-base text-slate-800">
                      {bookmark.code}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-200 flex items-center justify-between gap-2">
                <button
                  onClick={() => onOpenPrintModal(bookmark)}
                  className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 font-medium py-1 px-2 rounded hover:bg-slate-200 transition-colors"
                  title="Print this individual bookmark"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Card</span>
                </button>

                <button
                  onClick={() => onPracticeBookmark(bookmark)}
                  className="flex items-center gap-1 text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-1.5 px-3 rounded-lg transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Start Practice</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredBookmarks.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h4 className="text-base font-semibold text-slate-800">No bookmarks matched your search</h4>
          <p className="text-xs text-slate-500 mt-1">Try searching for other words like "character", "climax", or "courage".</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            className="mt-4 px-4 py-2 text-xs font-semibold bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
