import React from 'react';
import { MODULES_CONFIG } from '../data/bookmarks';
import { ModuleId } from '../types';
import { 
  UserSearch, 
  Film, 
  Compass, 
  Palette, 
  Sparkles, 
  BookOpen, 
  Award, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface QuestModulesProps {
  onSelectModule: (moduleId: ModuleId) => void;
  completedBookmarkCodes: string[];
}

const MODULE_ICONS: Record<string, React.ElementType> = {
  UserSearch,
  Film,
  Compass,
  Palette,
  Sparkles,
  BookOpen,
  Award,
};

export const QuestModules: React.FC<QuestModulesProps> = ({
  onSelectModule,
  completedBookmarkCodes,
}) => {
  return (
    <section className="mb-12">
      <div className="flex items-end justify-between mb-6">
        <div>
          <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
            Interactive Learning Journey
          </div>
          <h2 className="font-display text-2xl font-bold text-slate-900 mt-1">
            SEM-R Quest Modules
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Choose a critical thinking realm below to practice higher-order questioning on any book.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MODULES_CONFIG.map((module, index) => {
          const IconComponent = MODULE_ICONS[module.icon] || BookOpen;
          const completedInThisModule = module.bookmarkCodes.filter(c => completedBookmarkCodes.includes(c)).length;
          const totalInModule = module.bookmarkCodes.length;
          const progressPercent = Math.round((completedInThisModule / totalInModule) * 100);

          return (
            <div
              key={module.id}
              className="group bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all hover:shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                {/* Module Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-emerald-50 text-slate-700 group-hover:text-emerald-700 flex items-center justify-center transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-slate-600 font-medium">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {module.name}
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  {module.subtitle}
                </p>

                {/* Bookmark codes list */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5 items-center">
                  <span className="text-xs text-slate-500 font-medium">Bookmarks:</span>
                  {module.bookmarkCodes.slice(0, 5).map((code) => {
                    const isDone = completedBookmarkCodes.includes(code);
                    return (
                      <span
                        key={code}
                        className={`text-xs font-mono px-2 py-0.5 rounded ${
                          isDone 
                            ? 'bg-emerald-100 text-emerald-800 font-semibold' 
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {code}
                      </span>
                    );
                  })}
                  {module.bookmarkCodes.length > 5 && (
                    <span className="text-xs text-slate-600">
                      +{module.bookmarkCodes.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* Progress & Launch Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
                  <span className="font-medium">Progress</span>
                  <span className="font-mono tabular-nums">{completedInThisModule} / {totalInModule} done</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-4">
                  <div
                    className="h-full bg-emerald-600 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                <button
                  onClick={() => onSelectModule(module.id as ModuleId)}
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-slate-900 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors"
                >
                  <span>Launch Module Quest</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
