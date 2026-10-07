import React from 'react';
import { Sparkles, Compass, BookOpen, Award, ArrowRight } from 'lucide-react';

interface HeroBannerProps {
  xp: number;
  level: number;
  badgesCount: number;
  totalBadges: number;
  onStartQuest: () => void;
  onExploreBookmarks: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  xp,
  level,
  badgesCount,
  totalBadges,
  onStartQuest,
  onExploreBookmarks,
}) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-slate-900 text-white mb-10 shadow-lg border border-slate-800">
      {/* Background Hero Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_reading_quest_1790258041657.jpg"
          alt="Warm reading exploration library studio with storybooks and bookmarks"
          className="w-full h-full object-cover object-center opacity-35"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 p-6 sm:p-10 lg:p-12 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-3">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>University of Connecticut · Project SEM-R</span>
          <span aria-hidden="true">·</span>
          <span>4th Grade Reading Studio</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
          Read Deeper. Think Bigger. Earn Badges.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
          Transform your daily reading into an intellectual adventure. Use research-backed SEM-R bookmarks to dissect characters, crack plot mysteries, explore big ethical dilemmas, and earn scholar badges.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <button
            onClick={onStartQuest}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all shadow-md hover:shadow-emerald-500/20 active:scale-95"
          >
            <Compass className="w-4 h-4" />
            <span>Launch Reading Studio</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreBookmarks}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/15 backdrop-blur-xs transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            <span>Explore 24 Bookmarks</span>
          </button>
        </div>

        {/* Reader Snapshot Bar */}
        <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-4 max-w-lg">
          <div>
            <div className="text-xs text-slate-400 font-medium">Reader Level</div>
            <div className="text-xl font-bold text-white flex items-center gap-1.5 mt-0.5">
              <span>Level {level}</span>
              <span className="text-xs font-normal text-emerald-400">Scholar</span>
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Experience Points</div>
            <div className="text-xl font-bold font-mono tabular-nums text-white mt-0.5">
              {xp} <span className="text-xs font-normal text-slate-400">XP</span>
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Badges Earned</div>
            <div className="text-xl font-bold text-white flex items-center gap-1 mt-0.5">
              <Award className="w-4 h-4 text-amber-400" />
              <span>{badgesCount} / {totalBadges}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
