import React, { useState } from 'react';
import { ALL_BOOKMARKS } from '../data/bookmarks';
import { SEMRBookmark } from '../types';
import { Printer, X, Check } from 'lucide-react';

interface PrintableBookmarkModalProps {
  initialBookmark?: SEMRBookmark;
  onClose: () => void;
}

export const PrintableBookmarkModal: React.FC<PrintableBookmarkModalProps> = ({
  initialBookmark,
  onClose,
}) => {
  const [selectedBookmarks, setSelectedBookmarks] = useState<SEMRBookmark[]>(
    initialBookmark ? [initialBookmark] : [ALL_BOOKMARKS[0], ALL_BOOKMARKS[8], ALL_BOOKMARKS[14]]
  );

  const toggleBookmark = (bm: SEMRBookmark) => {
    if (selectedBookmarks.some(b => b.code === bm.code)) {
      if (selectedBookmarks.length > 1) {
        setSelectedBookmarks(selectedBookmarks.filter(b => b.code !== bm.code));
      }
    } else {
      if (selectedBookmarks.length < 3) {
        setSelectedBookmarks([...selectedBookmarks, bm]);
      } else {
        setSelectedBookmarks([selectedBookmarks[1], selectedBookmarks[2], bm]);
      }
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full p-6 shadow-2xl border border-slate-200 my-8 space-y-6">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div>
            <h3 className="font-display text-xl font-bold text-slate-900">
              Printable SEM-R Bookmarks
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Print a 3-column physical bookmark sheet formatted to cut out and use with classroom books.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print Sheet</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bookmark Slot Selector */}
        <div>
          <span className="text-xs font-semibold text-slate-700 block mb-2">
            Select up to 3 Bookmarks for your 3-column print sheet:
          </span>
          <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto p-2 bg-slate-50 rounded-lg border border-slate-200">
            {ALL_BOOKMARKS.map((bm) => {
              const isSelected = selectedBookmarks.some(b => b.code === bm.code);
              return (
                <button
                  key={bm.code}
                  onClick={() => toggleBookmark(bm)}
                  className={`text-xs px-2.5 py-1 rounded-md font-medium transition-colors flex items-center gap-1 ${
                    isSelected
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3" />}
                  <span>[{bm.code}] {bm.category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Printable Bookmark Preview (Matches the PDF layout) */}
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-300 print:bg-white print:p-0 print:border-none">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 rounded-lg border border-slate-300 shadow-sm print:shadow-none print:border-none">
            {selectedBookmarks.map((bookmark) => (
              <div
                key={bookmark.code}
                className="border-2 border-slate-800 p-4 flex flex-col justify-between min-h-[460px] bg-white text-slate-900"
              >
                {/* Physical Header Banner */}
                <div>
                  <div className="border border-slate-600 bg-slate-200 text-center py-2 px-1 mb-4">
                    <h4 className="font-serif text-lg font-bold tracking-wide uppercase">
                      {bookmark.category}
                    </h4>
                  </div>

                  {/* Prompts list */}
                  <div className="space-y-4 text-xs font-sans leading-relaxed text-slate-900">
                    {bookmark.prompts.map((p, idx) => (
                      <p key={idx} className="border-b border-slate-100 pb-2 last:border-none">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Footer with UConn Project SEM-R Citation */}
                <div className="mt-6 pt-3 border-t border-slate-400 flex items-end justify-between text-[10px] text-slate-600 font-sans">
                  <div>
                    <p className="font-semibold text-slate-800">Project SEM-R (Elementary)</p>
                    <p>University of Connecticut</p>
                    <p className="text-[9px]">www.gifted.uconn.edu</p>
                  </div>
                  <div className="text-right">
                    <span className="font-serif font-bold text-lg text-slate-900">
                      {bookmark.code}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex justify-between items-center pt-2">
          <span className="text-xs text-slate-500">
            Tip: Standard US Letter paper fits 3 bookmarks perfectly.
          </span>
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
          >
            <Printer className="w-4 h-4 text-emerald-400" />
            <span>Print 3 Bookmarks</span>
          </button>
        </div>
      </div>
    </div>
  );
};
