/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { QuestModules } from './components/QuestModules';
import { BookmarkExplorer } from './components/BookmarkExplorer';
import { InteractiveStudio } from './components/InteractiveStudio';
import { BadgeShowcase } from './components/BadgeShowcase';
import { PrintableBookmarkModal } from './components/PrintableBookmarkModal';
import { TeacherGuideModal } from './components/TeacherGuideModal';
import { StudentCertificateModal } from './components/StudentCertificateModal';
import { ALL_BOOKMARKS, INITIAL_BADGES } from './data/bookmarks';
import { SEMRBookmark, ModuleId, StudentBadge, StudentResponse } from './types';
import { AICoachResponse } from './services/aiCoach';
import { Trophy } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'quests' | 'bookmarks' | 'studio' | 'badges' | 'guide'>('quests');

  const [xp, setXp] = useState<number>(() => {
    const saved = localStorage.getItem('semr_student_xp');
    return saved ? parseInt(saved, 10) : 150;
  });

  const [badges, setBadges] = useState<StudentBadge[]>(() => {
    const saved = localStorage.getItem('semr_student_badges');
    return saved ? JSON.parse(saved) : INITIAL_BADGES;
  });

  const [completedCodes, setCompletedCodes] = useState<string[]>(() => {
    const saved = localStorage.getItem('semr_completed_codes');
    return saved ? JSON.parse(saved) : ['C-1'];
  });

  const [responses, setResponses] = useState<StudentResponse[]>(() => {
    const saved = localStorage.getItem('semr_student_responses');
    return saved ? JSON.parse(saved) : [
      {
        id: 'init-1',
        bookmarkCode: 'C-1',
        promptText: 'Describe the main character of the book in five or fewer words. Avoid using trite words.',
        bookTitle: 'Because of Winn-Dixie',
        bookAuthor: 'Kate DiCamillo',
        studentAnswer: 'Resilient, lonely, compassionate, determined, inquisitive.',
        createdAt: new Date().toISOString(),
        xpEarned: 50,
      }
    ];
  });

  // Navigation targets for Studio
  const [studioBookmark, setStudioBookmark] = useState<SEMRBookmark>(ALL_BOOKMARKS[0]);
  const [studioPromptIndex, setStudioPromptIndex] = useState<number>(0);

  // Modals state
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [printModalTargetBookmark, setPrintModalTargetBookmark] = useState<SEMRBookmark | undefined>();
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);

  // Badge notification banner state
  const [unlockedBadgeNotice, setUnlockedBadgeNotice] = useState<string | null>(null);

  // Persist state to localStorage
  useEffect(() => {
    localStorage.setItem('semr_student_xp', xp.toString());
  }, [xp]);

  useEffect(() => {
    localStorage.setItem('semr_student_badges', JSON.stringify(badges));
  }, [badges]);

  useEffect(() => {
    localStorage.setItem('semr_completed_codes', JSON.stringify(completedCodes));
  }, [completedCodes]);

  useEffect(() => {
    localStorage.setItem('semr_student_responses', JSON.stringify(responses));
  }, [responses]);

  const level = Math.max(1, Math.floor(xp / 150) + 1);

  // Award XP and check badge unlocks
  const handleAwardXP = (earnedXp: number, bookmarkCode: string) => {
    const newTotalXp = xp + earnedXp;
    setXp(newTotalXp);

    const updatedCompleted = completedCodes.includes(bookmarkCode)
      ? completedCodes
      : [...completedCodes, bookmarkCode];
    setCompletedCodes(updatedCompleted);

    // Evaluate badge conditions
    const updatedBadges = badges.map(badge => {
      if (badge.unlocked) return badge;

      let shouldUnlock = false;

      if (badge.id === 'badge-master-critic' && newTotalXp >= 500) {
        shouldUnlock = true;
      } else if (badge.id === 'badge-plot-director' && updatedCompleted.includes('P-2')) {
        shouldUnlock = true;
      } else if (badge.id === 'badge-world-cartographer' && (updatedCompleted.includes('S-1') || updatedCompleted.includes('S-2'))) {
        shouldUnlock = true;
      } else if (badge.id === 'badge-mystery-sleuth' && (updatedCompleted.includes('M-1') || updatedCompleted.includes('M-2') || updatedCompleted.includes('M-3'))) {
        shouldUnlock = true;
      } else if (badge.id === 'badge-integrity-guardian' && updatedCompleted.includes('T-3')) {
        shouldUnlock = true;
      } else if (badge.id === 'badge-growth-mindset' && (updatedCompleted.includes('T-10') || updatedCompleted.includes('T-11') || updatedCompleted.includes('T-12'))) {
        shouldUnlock = true;
      } else if (badge.id === 'badge-eco-steward' && (updatedCompleted.includes('T-8') || updatedCompleted.includes('T-9'))) {
        shouldUnlock = true;
      } else if (badge.id === 'badge-visual-critic' && (updatedCompleted.includes('I-1') || updatedCompleted.includes('I-2'))) {
        shouldUnlock = true;
      } else if (badge.id === 'badge-time-traveler' && (updatedCompleted.includes('HF-1') || updatedCompleted.includes('HF-2') || updatedCompleted.includes('HF-3'))) {
        shouldUnlock = true;
      }

      if (shouldUnlock) {
        setUnlockedBadgeNotice(badge.title);
        try {
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.6 }
          });
        } catch {
          // ignore
        }
        return {
          ...badge,
          unlocked: true,
          unlockedAt: 'Just Now',
        };
      }
      return badge;
    });

    setBadges(updatedBadges);
  };

  const handleRecordResponse = (data: {
    bookmarkCode: string;
    promptText: string;
    bookTitle: string;
    bookAuthor: string;
    studentAnswer: string;
    xpEarned: number;
    feedback: AICoachResponse;
  }) => {
    const newEntry: StudentResponse = {
      id: `resp-${Date.now()}`,
      bookmarkCode: data.bookmarkCode,
      promptText: data.promptText,
      bookTitle: data.bookTitle,
      bookAuthor: data.bookAuthor,
      studentAnswer: data.studentAnswer,
      createdAt: new Date().toISOString(),
      xpEarned: data.xpEarned,
      feedback: data.feedback,
    };
    setResponses(prev => [...prev, newEntry]);
  };

  const handlePracticeBookmark = (bookmark: SEMRBookmark, promptIndex: number = 0) => {
    setStudioBookmark(bookmark);
    setStudioPromptIndex(promptIndex);
    setActiveTab('studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectModule = (moduleId: ModuleId) => {
    const firstBookmarkOfModule = ALL_BOOKMARKS.find(b => b.moduleId === moduleId);
    if (firstBookmarkOfModule) {
      setStudioBookmark(firstBookmarkOfModule);
      setStudioPromptIndex(0);
    }
    setActiveTab('studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPrintModal = (bookmark?: SEMRBookmark) => {
    setPrintModalTargetBookmark(bookmark);
    setIsPrintModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between">
      <div>
        {/* Navigation Bar */}
        <Navbar
          activeTab={activeTab}
          onSelectTab={(tab) => {
            if (tab === 'guide') {
              setIsGuideModalOpen(true);
            } else {
              setActiveTab(tab);
            }
          }}
          xp={xp}
          level={level}
        />

        {/* Badge Unlock Celebration Banner */}
        {unlockedBadgeNotice && (
          <div className="bg-amber-500 text-slate-950 px-4 py-2.5 flex items-center justify-between text-xs font-semibold shadow-xs">
            <div className="max-w-7xl mx-auto flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              <span>Badge Unlocked: Congratulations! You earned the <strong>{unlockedBadgeNotice}</strong> badge!</span>
            </div>
            <button
              onClick={() => setUnlockedBadgeNotice(null)}
              className="text-slate-950 hover:text-white px-2 py-0.5 rounded font-bold"
            >
              ✕
            </button>
          </div>
        )}

        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {activeTab === 'quests' && (
            <>
              <HeroBanner
                xp={xp}
                level={level}
                badgesCount={badges.filter(b => b.unlocked).length}
                totalBadges={badges.length}
                onStartQuest={() => setActiveTab('studio')}
                onExploreBookmarks={() => setActiveTab('bookmarks')}
              />
              <QuestModules
                onSelectModule={handleSelectModule}
                completedBookmarkCodes={completedCodes}
              />
            </>
          )}

          {activeTab === 'bookmarks' && (
            <BookmarkExplorer
              onPracticeBookmark={handlePracticeBookmark}
              onOpenPrintModal={handleOpenPrintModal}
              completedBookmarkCodes={completedCodes}
            />
          )}

          {activeTab === 'studio' && (
            <InteractiveStudio
              initialBookmark={studioBookmark}
              initialPromptIndex={studioPromptIndex}
              onAwardXP={handleAwardXP}
              onRecordResponse={handleRecordResponse}
            />
          )}

          {activeTab === 'badges' && (
            <BadgeShowcase
              badges={badges}
              xp={xp}
              level={level}
              responses={responses}
              onPrintCertificate={() => setIsCertificateModalOpen(true)}
            />
          )}
        </main>
      </div>

      {/* Educational Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-16 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800">SEM-R Reading Quest</span>
            <span aria-hidden="true">·</span>
            <span>Based on Project SEM-R bookmarks from the University of Connecticut (gifted.uconn.edu)</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsGuideModalOpen(true)}
              className="hover:text-slate-900 transition-colors"
            >
              Teacher Research Guide
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => handleOpenPrintModal()}
              className="hover:text-slate-900 transition-colors"
            >
              Printable Bookmarks
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setIsCertificateModalOpen(true)}
              className="hover:text-slate-900 transition-colors"
            >
              Reading Certificate
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {isPrintModalOpen && (
        <PrintableBookmarkModal
          initialBookmark={printModalTargetBookmark}
          onClose={() => setIsPrintModalOpen(false)}
        />
      )}

      {isGuideModalOpen && (
        <TeacherGuideModal
          onClose={() => setIsGuideModalOpen(false)}
        />
      )}

      {isCertificateModalOpen && (
        <StudentCertificateModal
          level={level}
          xp={xp}
          badges={badges}
          responses={responses}
          onClose={() => setIsCertificateModalOpen(false)}
        />
      )}
    </div>
  );
}
