import React from 'react';
import { BookOpen, Award, CheckCircle, Lightbulb, Users, FileText, X, ExternalLink } from 'lucide-react';

interface TeacherGuideModalProps {
  onClose: () => void;
}

export const TeacherGuideModal: React.FC<TeacherGuideModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 my-8 space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-slate-900">
                Educator Guide: Schoolwide Enrichment Model in Reading (SEM-R)
              </h3>
              <p className="text-xs text-slate-500">
                University of Connecticut · The Neag Center for Gifted Education and Talent Development
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overview Banner */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-2">
          <p className="font-semibold text-slate-900">
            About Project SEM-R:
          </p>
          <p>
            Developed by <strong>Dr. Sally M. Reis</strong> and <strong>Dr. Joseph S. Renzulli</strong> at the University of Connecticut, the Schoolwide Enrichment Model in Reading (SEM-R) is an enrichment-based approach designed to stimulate interest in reading, promote self-regulation, and challenge students to read books at and above their independent reading levels.
          </p>
        </div>

        {/* The 3 Core Phases */}
        <div>
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 flex items-center gap-2">
            <Users className="w-4 h-4 text-emerald-600" />
            <span>The Three Phases of an SEM-R Classroom</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-emerald-700">
                <span>Phase 1</span>
                <span>10–15 Mins</span>
              </div>
              <h5 className="text-sm font-bold text-slate-900">Book Hooks & Exposure</h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Teacher introduces high-interest literature across diverse genres, models critical reading strategies, and exposes students to sophisticated chapter books.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-emerald-700">
                <span>Phase 2 (Heart of SEM-R)</span>
                <span>30–45 Mins</span>
              </div>
              <h5 className="text-sm font-bold text-slate-900">Supported Independent Reading</h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Students read self-selected challenging books while using these 24 targeted bookmarks to prompt higher-order synthesis, evaluation, and depth.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-emerald-700">
                <span>Phase 3</span>
                <span>Flexible Time</span>
              </div>
              <h5 className="text-sm font-bold text-slate-900">Interest-Based Projects</h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Students extend their thinking into creative tasks: writing movie pitches, recording book soundtracks, investigating anachronisms, or community projects.
              </p>
            </div>
          </div>
        </div>

        {/* How Bookmarks Support 4th Grade Depth & Complexity */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-600" />
            <span>Bloom’s Taxonomy & Depth/Complexity Connections</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Character Analysis (C-1 to C-8):</strong>
              <p className="text-slate-600">
                Moves students from basic recall to examining multiple perspectives, psychological motivations, and internal change over time.
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Plot & Pacing (P-1 to P-8):</strong>
              <p className="text-slate-600">
                Challenges students to evaluate causation, plot sequence logic, author intent, and executive synthesis (P-2 word-limit constraints).
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Thematic Inquiries (T-1 to T-18):</strong>
              <p className="text-slate-600">
                Engages deep ethical questions: integrity vs. pressure, balance of power, environmental stewardship, and reversible vs. permanent growth.
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Genre & Point of View (FS, M, H, NF, HF):</strong>
              <p className="text-slate-600">
                Demands critical evaluation of author bias, anachronisms in historical fiction, and deductive distinction of red herrings from evidence.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Official resources: www.gifted.uconn.edu/semr</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-colors"
          >
            Back to Quests
          </button>
        </div>
      </div>
    </div>
  );
};
