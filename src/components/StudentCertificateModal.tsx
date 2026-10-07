import React from 'react';
import { Award, Printer, X } from 'lucide-react';
import { StudentBadge, StudentResponse } from '../types';

interface StudentCertificateModalProps {
  level: number;
  xp: number;
  badges: StudentBadge[];
  responses: StudentResponse[];
  onClose: () => void;
}

export const StudentCertificateModal: React.FC<StudentCertificateModalProps> = ({
  level,
  xp,
  badges,
  responses,
  onClose,
}) => {
  const unlockedBadges = badges.filter(b => b.unlocked);
  const bookTitles = Array.from(new Set(responses.map(r => r.bookTitle))).filter(Boolean);
  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 my-8 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 print:hidden">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wide">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>Official Reader Certificate</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print Certificate</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Printable Canvas */}
        <div className="border-8 border-double border-amber-700/80 p-8 sm:p-12 text-center bg-amber-50/30 rounded-xl relative print:border-8 print:p-8 print:m-0">
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-amber-800 pointer-events-none" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-amber-800 pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-amber-800 pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-amber-800 pointer-events-none" />

          {/* Crest */}
          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-amber-600/15 border-2 border-amber-600 flex items-center justify-center text-amber-700">
            <Award className="w-9 h-9" />
          </div>

          <div className="text-xs font-mono font-bold tracking-widest text-amber-900 uppercase">
            Schoolwide Enrichment Model in Reading
          </div>
          <div className="text-[11px] text-slate-500 tracking-wider">
            University of Connecticut · Project SEM-R
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-4 tracking-tight">
            Certificate of Reading Excellence
          </h2>

          <p className="text-xs text-slate-600 mt-4 uppercase tracking-widest">
            Presented for Academic Achievement in Grade 4
          </p>

          <div className="font-serif text-2xl sm:text-3xl font-bold text-emerald-900 border-b-2 border-amber-600/50 pb-2 max-w-md mx-auto my-3">
            SEM-R Critical Reading Scholar
          </div>

          <p className="text-xs text-slate-700 max-w-lg mx-auto leading-relaxed mt-2 font-sans">
            Demonstrated exceptional critical thinking, textual analysis, and deep comprehension across the higher-order questioning bookmarks in Grade 4.
          </p>

          {/* Certificate Metrics */}
          <div className="mt-6 pt-4 border-t border-amber-200 grid grid-cols-3 gap-2 max-w-md mx-auto text-xs">
            <div>
              <span className="text-slate-500 block text-[11px]">Scholar Rank</span>
              <strong className="text-slate-900 text-sm">Level {level}</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">Experience</span>
              <strong className="text-slate-900 text-sm font-mono">{xp} XP</strong>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">Badges Earned</span>
              <strong className="text-slate-900 text-sm">{unlockedBadges.length} Badges</strong>
            </div>
          </div>

          {/* Books studied */}
          {bookTitles.length > 0 && (
            <div className="mt-4 text-[11px] text-slate-600">
              <span>Books Analyzed: </span>
              <strong className="text-slate-800">{bookTitles.join(', ')}</strong>
            </div>
          )}

          {/* Signature & Date */}
          <div className="mt-8 pt-6 border-t border-slate-300 flex justify-between items-end text-xs text-slate-600 px-4">
            <div className="text-left">
              <div className="font-serif italic text-sm text-slate-800">SEM-R Reading Coach</div>
              <div className="w-36 border-t border-slate-400 mt-1 pt-0.5 text-[10px] text-slate-500">
                Instructional Verification
              </div>
            </div>

            <div className="text-right">
              <div className="text-xs font-semibold text-slate-800">{today}</div>
              <div className="w-28 border-t border-slate-400 mt-1 pt-0.5 text-[10px] text-slate-500">
                Date Awarded
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
