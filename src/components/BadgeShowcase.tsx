import React, { useState } from 'react';
import { StudentBadge, StudentResponse } from '../types';
import { 
  Trophy, 
  Award, 
  CheckCircle2, 
  Lock, 
  Printer, 
  Sparkles, 
  BookOpen, 
  UserSearch, 
  Clapperboard, 
  Compass, 
  Fingerprint, 
  ShieldCheck, 
  Sprout, 
  TreePine, 
  Palette, 
  Hourglass, 
  Crown 
} from 'lucide-react';

interface BadgeShowcaseProps {
  badges: StudentBadge[];
  xp: number;
  level: number;
  responses: StudentResponse[];
  onPrintCertificate: () => void;
}

const BADGE_ICON_MAP: Record<string, React.ElementType> = {
  UserSearch,
  Clapperboard,
  Compass,
  Fingerprint,
  ShieldCheck,
  Sprout,
  TreePine,
  Palette,
  Hourglass,
  Crown,
};

export const BadgeShowcase: React.FC<BadgeShowcaseProps> = ({
  badges,
  xp,
  level,
  responses,
  onPrintCertificate,
}) => {
  const [selectedBadge, setSelectedBadge] = useState<StudentBadge | null>(null);

  const unlockedCount = badges.filter(b => b.unlocked).length;
  const uniqueBooks = Array.from(new Set(responses.map(r => r.bookTitle))).filter(Boolean);

  const nextLevelXP = level * 150;
  const currentLevelBaseXP = (level - 1) * 150;
  const levelProgress = Math.min(100, Math.round(((xp - currentLevelBaseXP) / 150) * 100));

  return (
    <div className="space-y-8">
      {/* Trophy Hall Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
            Student Achievements & Gamified Progress
          </div>
          <h2 className="font-display text-2xl font-bold text-slate-900 mt-1">
            Badges & Reader Passport
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Track your critical thinking mastery across all UConn SEM-R bookmarks and collect honors.
          </p>
        </div>

        <button
          onClick={onPrintCertificate}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors shadow-xs shrink-0"
        >
          <Printer className="w-4 h-4 text-emerald-400" />
          <span>Generate Official Certificate</span>
        </button>
      </div>

      {/* Reader Passport Card */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white p-6 sm:p-8 rounded-2xl shadow-md border border-slate-700">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-600/30 border border-emerald-400/40 flex items-center justify-center overflow-hidden">
              <img
                src="/src/assets/images/badge_character_detective_1790258055673.jpg"
                alt="Badge emblem"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="text-xs text-emerald-400 uppercase tracking-wider font-semibold">
                Project SEM-R Reading Passport
              </div>
              <h3 className="font-display text-2xl font-bold text-white mt-0.5">
                4th Grade Critical Reader
              </h3>
              <p className="text-xs text-slate-300">
                Rank: <strong className="text-emerald-300">Level {level} Master Inquirer</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-center sm:text-right">
              <div className="text-xs text-slate-400 font-medium">Total Experience</div>
              <div className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">
                {xp} <span className="text-xs text-slate-400 font-normal">XP</span>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <div className="text-xs text-slate-400 font-medium">Badges Unlocked</div>
              <div className="text-2xl font-bold text-amber-400">
                {unlockedCount} / {badges.length}
              </div>
            </div>
          </div>
        </div>

        {/* Level XP Progress Bar */}
        <div className="pt-6">
          <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
            <span>Progress to Level {level + 1}</span>
            <span className="font-mono">{xp} / {nextLevelXP} XP</span>
          </div>
          <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-700"
              style={{ width: `${levelProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Badges Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-slate-900">
            Collectible Quest Badges
          </h3>
          <span className="text-xs text-slate-500">
            Click any badge to view details & criteria
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {badges.map((badge) => {
            const IconComp = BADGE_ICON_MAP[badge.icon] || Award;
            const isUnlocked = badge.unlocked;

            return (
              <div
                key={badge.id}
                onClick={() => setSelectedBadge(badge)}
                className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isUnlocked
                    ? 'bg-white border-emerald-200 hover:border-emerald-300 hover:shadow-sm'
                    : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 opacity-75'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                        isUnlocked
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-200 text-slate-500'
                      }`}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>

                    {isUnlocked ? (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Unlocked</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                        <Lock className="w-3 h-3" />
                        <span>Locked</span>
                      </span>
                    )}
                  </div>

                  <h4 className="text-sm font-bold text-slate-900">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    {badge.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-500 font-medium">+{badge.xpValue} XP</span>
                  <span className="text-emerald-700 font-semibold text-[11px]">
                    {badge.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Reading Inquiries Log */}
      {responses.length > 0 && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>Completed Inquiries Log</span>
            </h3>
            <span className="text-xs text-slate-500">
              {responses.length} responses documented
            </span>
          </div>

          <div className="space-y-3">
            {responses.slice().reverse().map((r) => (
              <div
                key={r.id}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex flex-col md:flex-row md:items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 font-medium text-slate-800">
                    <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded font-mono font-semibold">
                      {r.bookmarkCode}
                    </span>
                    <span>Book: <strong>{r.bookTitle}</strong> ({r.bookAuthor})</span>
                  </div>
                  <p className="text-slate-600 italic line-clamp-1">
                    "{r.studentAnswer}"
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-semibold text-emerald-700 font-mono">
                    +{r.xpEarned} XP
                  </span>
                  <span className="text-slate-400 text-[11px]">
                    {new Date(r.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Selected Badge Detail Modal */}
      {selectedBadge && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-slate-900">
                    {selectedBadge.title}
                  </h4>
                  <span className="text-xs text-emerald-700 font-medium">
                    {selectedBadge.category} Module Award
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedBadge(null)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed">
              {selectedBadge.description}
            </p>

            <div className="p-3 bg-slate-50 rounded-lg text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-500">Reward Value:</span>
                <span className="font-semibold text-emerald-700">+{selectedBadge.xpValue} XP</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Status:</span>
                <span className="font-semibold text-slate-800">
                  {selectedBadge.unlocked ? 'Unlocked & Verified ✓' : 'In Progress'}
                </span>
              </div>
            </div>

            <button
              onClick={() => setSelectedBadge(null)}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
