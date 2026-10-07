import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { ALL_BOOKMARKS, SAMPLE_BOOKS, TRITE_WORDS, VIVID_CHARACTER_WORDS } from '../data/bookmarks';
import { SEMRBookmark, BookSample } from '../types';
import { askAICoach, AICoachResponse } from '../services/aiCoach';
import { 
  BookOpen, 
  Send, 
  Sparkles, 
  AlertCircle, 
  CheckCircle, 
  HelpCircle, 
  Lightbulb, 
  Compass, 
  Award, 
  RefreshCw,
  Search,
  Flame,
  Volume2
} from 'lucide-react';

interface InteractiveStudioProps {
  initialBookmark?: SEMRBookmark;
  initialPromptIndex?: number;
  onAwardXP: (xp: number, bookmarkCode: string) => void;
  onRecordResponse: (data: {
    bookmarkCode: string;
    promptText: string;
    bookTitle: string;
    bookAuthor: string;
    studentAnswer: string;
    xpEarned: number;
    feedback: AICoachResponse;
  }) => void;
}

export const InteractiveStudio: React.FC<InteractiveStudioProps> = ({
  initialBookmark,
  initialPromptIndex = 0,
  onAwardXP,
  onRecordResponse,
}) => {
  // Selected book state
  const [selectedBookType, setSelectedBookType] = useState<'sample' | 'custom'>('sample');
  const [selectedSampleBookId, setSelectedSampleBookId] = useState<string>(SAMPLE_BOOKS[0].id);
  const [customTitle, setCustomTitle] = useState('');
  const [customAuthor, setCustomAuthor] = useState('');

  // Selected bookmark & prompt state
  const [currentBookmark, setCurrentBookmark] = useState<SEMRBookmark>(initialBookmark || ALL_BOOKMARKS[0]);
  const [selectedPromptIndex, setSelectedPromptIndex] = useState<number>(initialPromptIndex);

  // Student answer state
  const [studentAnswer, setStudentAnswer] = useState('');
  const [selectedSentenceStarter, setSelectedSentenceStarter] = useState('');

  // Interactive Mini-Tool states:
  // For P-2 (Word Cruncher)
  const [summary25, setSummary25] = useState('');
  const [summary10, setSummary10] = useState('');
  const [summary5, setSummary5] = useState('');

  // For C-1 (5-Word Portrait)
  const [characterName, setCharacterName] = useState('');
  const [fiveWords, setFiveWords] = useState(['', '', '', '', '']);

  // For M-3 (Red Herring Board)
  const [clueItems, setClueItems] = useState([
    { text: 'A muddy bootprint discovered outside the kitchen window', isRedHerring: false },
    { text: 'A suspicious broken pocket watch stopped at 11:15', isRedHerring: true },
  ]);
  const [newClueText, setNewClueText] = useState('');
  const [newClueType, setNewClueType] = useState<'real' | 'herring'>('real');

  // Loading & Feedback states
  const [isLoadingFeedback, setIsLoadingFeedback] = useState(false);
  const [feedback, setFeedback] = useState<AICoachResponse | null>(null);

  // Sync when initialBookmark prop changes
  useEffect(() => {
    if (initialBookmark) {
      setCurrentBookmark(initialBookmark);
      setSelectedPromptIndex(initialPromptIndex);
      setFeedback(null);
    }
  }, [initialBookmark, initialPromptIndex]);

  const activeBook = selectedBookType === 'sample' 
    ? SAMPLE_BOOKS.find(b => b.id === selectedSampleBookId) || SAMPLE_BOOKS[0]
    : { title: customTitle || 'My Independent Reading Book', author: customAuthor || 'Unknown Author' };

  const currentPromptText = currentBookmark.prompts[selectedPromptIndex] || currentBookmark.prompts[0];

  // Trite words detector for C-1 and general text
  const detectedTriteWords = TRITE_WORDS.filter(tw => 
    new RegExp(`\\b${tw}\\b`, 'i').test(studentAnswer)
  );

  const wordCount = studentAnswer.trim() ? studentAnswer.trim().split(/\s+/).length : 0;

  // Sentence starters tailored to 4th grade critical thinking
  const SENTENCE_STARTERS = [
    'The author provides evidence of this when...',
    'On the outside the character acts..., but on the inside...',
    'This choice was difficult because...',
    'If the author changed this setting, the story would...',
    'I was surprised by this action because...',
    'This conflict matters because it shows...',
    'A specific clue from the chapter that proved this was...'
  ];

  const handleApplySentenceStarter = (starter: string) => {
    if (!starter) return;
    setStudentAnswer(prev => prev ? `${prev} ${starter} ` : `${starter} `);
    setSelectedSentenceStarter('');
  };

  const handleWordCruncherSubmit = () => {
    const combined = `[25-Word Summary]: ${summary25}\n[10-Word Summary]: ${summary10}\n[5-Word Summary]: ${summary5}`;
    setStudentAnswer(combined);
  };

  const handleFiveWordSubmit = () => {
    const validWords = fiveWords.filter(w => w.trim().length > 0);
    const combined = `Character Portrait for ${characterName || 'the protagonist'}: ${validWords.join(', ')}`;
    setStudentAnswer(combined);
  };

  const handleSubmitToCoach = async () => {
    if (!studentAnswer.trim() || studentAnswer.trim().length < 8) {
      return;
    }

    setIsLoadingFeedback(true);
    setFeedback(null);

    const result = await askAICoach({
      bookmarkCode: currentBookmark.code,
      promptText: currentPromptText,
      bookTitle: activeBook.title,
      bookAuthor: activeBook.author,
      studentAnswer: studentAnswer,
    });

    setFeedback(result);
    setIsLoadingFeedback(false);

    // Award XP to student
    onAwardXP(result.xpAwarded, currentBookmark.code);

    // Record response
    onRecordResponse({
      bookmarkCode: currentBookmark.code,
      promptText: currentPromptText,
      bookTitle: activeBook.title,
      bookAuthor: activeBook.author,
      studentAnswer: studentAnswer,
      xpEarned: result.xpAwarded,
      feedback: result,
    });

    // Confetti celebration!
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // Ignore if canvas confetti unavailable
    }
  };

  return (
    <div className="space-y-8">
      {/* Studio Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
            Interactive Reading & Critical Thinking Studio
          </div>
          <h2 className="font-display text-2xl font-bold text-slate-900 mt-1">
            Analyze, Respond & Level Up
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Pick a 4th grade book or your own current independent reading novel, select an SEM-R bookmark, and draft your evidence-based analysis.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-slate-500">Workspace:</span>
          <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-md">
            Grade 4 Inquiry
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Book & Bookmark Selector (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Step 1: Select Book */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                <span>Step 1: Choose Book</span>
              </h3>
              <div className="flex items-center gap-1 text-xs">
                <button
                  onClick={() => setSelectedBookType('sample')}
                  className={`px-2 py-0.5 rounded transition-colors ${selectedBookType === 'sample' ? 'bg-emerald-600 text-white font-medium' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  Featured
                </button>
                <button
                  onClick={() => setSelectedBookType('custom')}
                  className={`px-2 py-0.5 rounded transition-colors ${selectedBookType === 'custom' ? 'bg-emerald-600 text-white font-medium' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  My Book
                </button>
              </div>
            </div>

            {selectedBookType === 'sample' ? (
              <div className="space-y-2">
                <select
                  value={selectedSampleBookId}
                  onChange={(e) => setSelectedSampleBookId(e.target.value)}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                >
                  {SAMPLE_BOOKS.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.title} ({b.author})
                    </option>
                  ))}
                </select>

                {/* Book Details Box */}
                {'summary' in activeBook && (
                  <div className="mt-3 p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs space-y-2">
                    <p className="text-slate-700 italic leading-relaxed">
                      "{activeBook.summary}"
                    </p>
                    <div className="pt-2 border-t border-slate-200">
                      <span className="text-[11px] font-semibold text-slate-500 block mb-1">
                        Sample Excerpt:
                      </span>
                      <p className="text-[11px] text-slate-600 font-serif leading-relaxed line-clamp-3">
                        {activeBook.samplePassage}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-slate-600 font-medium block mb-1">Book Title</label>
                  <input
                    type="text"
                    value={customTitle}
                    onChange={(e) => setCustomTitle(e.target.value)}
                    placeholder="e.g. Wonder, Holes, The Wild Robot"
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-600 font-medium block mb-1">Author Name</label>
                  <input
                    type="text"
                    value={customAuthor}
                    onChange={(e) => setCustomAuthor(e.target.value)}
                    placeholder="e.g. R.J. Palacio"
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Step 2: Choose Bookmark & Prompt */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5 mb-3">
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>Step 2: SEM-R Bookmark</span>
            </h3>

            <div className="space-y-3">
              <div>
                <label className="text-xs text-slate-600 font-medium block mb-1">Select Bookmark Card</label>
                <select
                  value={currentBookmark.code}
                  onChange={(e) => {
                    const found = ALL_BOOKMARKS.find(b => b.code === e.target.value);
                    if (found) {
                      setCurrentBookmark(found);
                      setSelectedPromptIndex(0);
                      setFeedback(null);
                    }
                  }}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                >
                  {ALL_BOOKMARKS.map((b) => (
                    <option key={b.code} value={b.code}>
                      [{b.code}] {b.category}: {b.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs text-slate-600 font-medium block mb-1">Select Question</label>
                <div className="space-y-2">
                  {currentBookmark.prompts.map((p, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setSelectedPromptIndex(idx);
                        setFeedback(null);
                      }}
                      className={`p-2.5 rounded-lg text-xs cursor-pointer border transition-colors ${
                        selectedPromptIndex === idx
                          ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 font-medium shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                      }`}
                    >
                      <span className="font-semibold text-emerald-700 mr-1.5">Q{idx + 1}.</span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Response Area & Specialized Tools (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Active Question Banner */}
          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="font-mono text-emerald-400 font-semibold tracking-wider">
                BOOKMARK [{currentBookmark.code}] · {currentBookmark.category}
              </span>
              <span>{currentBookmark.depthLevel}</span>
            </div>
            <h3 className="font-display text-lg sm:text-xl font-semibold text-white leading-snug">
              {currentPromptText}
            </h3>
            <div className="mt-3 flex items-center gap-2 text-xs text-slate-400 pt-3 border-t border-slate-800">
              <span>Target Book: <strong className="text-white">{activeBook.title}</strong></span>
              <span aria-hidden="true">·</span>
              <span>Author: <strong className="text-white">{activeBook.author}</strong></span>
            </div>
          </div>

          {/* Interactive Special Tool Callout (if active bookmark has one) */}
          {currentBookmark.code === 'P-2' && (
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-5 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-900 uppercase tracking-wide">
                <Flame className="w-4 h-4 text-sky-600" />
                <span>P-2 Interactive Word Cruncher Challenge</span>
              </div>
              <p className="text-xs text-sky-800">
                Can you distill a chapter down into 3 shrinking word counts? Write each below:
              </p>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-sky-900 font-medium mb-1">
                    <span>1. 25 Words or Fewer:</span>
                    <span className="font-mono">{summary25.trim().split(/\s+/).filter(Boolean).length} / 25 words</span>
                  </div>
                  <input
                    type="text"
                    value={summary25}
                    onChange={(e) => setSummary25(e.target.value)}
                    placeholder="Capture the full chapter arc in under 25 words..."
                    className="w-full text-xs p-2 bg-white border border-sky-300 rounded-lg focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-sky-900 font-medium mb-1">
                    <span>2. 10 Words or Fewer:</span>
                    <span className="font-mono">{summary10.trim().split(/\s+/).filter(Boolean).length} / 10 words</span>
                  </div>
                  <input
                    type="text"
                    value={summary10}
                    onChange={(e) => setSummary10(e.target.value)}
                    placeholder="Focus strictly on the biggest action in under 10 words..."
                    className="w-full text-xs p-2 bg-white border border-sky-300 rounded-lg focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-sky-900 font-medium mb-1">
                    <span>3. 5 Words or Fewer:</span>
                    <span className="font-mono">{summary5.trim().split(/\s+/).filter(Boolean).length} / 5 words</span>
                  </div>
                  <input
                    type="text"
                    value={summary5}
                    onChange={(e) => setSummary5(e.target.value)}
                    placeholder="Ultra-concise punchy essence in 5 words..."
                    className="w-full text-xs p-2 bg-white border border-sky-300 rounded-lg focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleWordCruncherSubmit}
                  className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold transition-colors"
                >
                  Insert Into My Response
                </button>
              </div>
            </div>
          )}

          {currentBookmark.code === 'C-1' && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 uppercase tracking-wide">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>C-1 Five-Word Character Portrait (Anti-Trite Word Challenge)</span>
              </div>
              <p className="text-xs text-emerald-800">
                Rule: Avoid simple words like <em>nice, good, bad, mean, cool</em>. Use 5 strong, vivid words!
              </p>

              <div>
                <label className="text-xs text-emerald-900 font-medium block mb-1">Character Name:</label>
                <input
                  type="text"
                  value={characterName}
                  onChange={(e) => setCharacterName(e.target.value)}
                  placeholder="e.g. Opal, Brian, Percy Jackson, Ivan..."
                  className="w-full text-xs p-2 bg-white border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500 mb-3"
                />

                <div className="grid grid-cols-5 gap-2 mb-3">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <input
                      key={i}
                      type="text"
                      value={fiveWords[i]}
                      onChange={(e) => {
                        const copy = [...fiveWords];
                        copy[i] = e.target.value;
                        setFiveWords(copy);
                      }}
                      placeholder={`Word ${i + 1}`}
                      className="text-xs p-2 bg-white border border-emerald-300 rounded-lg text-center font-medium focus:ring-2 focus:ring-emerald-500"
                    />
                  ))}
                </div>

                {/* Vocabulary inspiration tags */}
                <div className="pt-2 border-t border-emerald-200">
                  <span className="text-[11px] font-semibold text-emerald-900 block mb-1.5">
                    Click to add rich 4th-grade words:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {VIVID_CHARACTER_WORDS.map(({ word, definition }) => (
                      <button
                        key={word}
                        type="button"
                        onClick={() => {
                          const emptyIndex = fiveWords.findIndex(w => !w.trim());
                          if (emptyIndex !== -1) {
                            const copy = [...fiveWords];
                            copy[emptyIndex] = word;
                            setFiveWords(copy);
                          }
                        }}
                        title={definition}
                        className="text-[11px] bg-white hover:bg-emerald-600 hover:text-white border border-emerald-300 text-emerald-800 px-2 py-0.5 rounded transition-colors"
                      >
                        + {word}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-3">
                  <button
                    type="button"
                    onClick={handleFiveWordSubmit}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
                  >
                    Insert 5-Word Portrait
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Response Drafting Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                Your Critical Thinking Response
              </label>

              {/* Sentence Starters Tool */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 hidden sm:inline">Sentence Starter:</span>
                <select
                  value={selectedSentenceStarter}
                  onChange={(e) => {
                    handleApplySentenceStarter(e.target.value);
                  }}
                  className="text-xs p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 cursor-pointer focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">Insert Starter...</option>
                  {SENTENCE_STARTERS.map((s, i) => (
                    <option key={i} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <textarea
              rows={6}
              value={studentAnswer}
              onChange={(e) => setStudentAnswer(e.target.value)}
              placeholder="Type your response here... Cite evidence from the chapters, describe character feelings, or analyze why events happened!"
              className="w-full p-4 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white leading-relaxed"
            />

            {/* Trite Word Warning Bar */}
            {detectedTriteWords.length > 0 && (
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  Trite Word Alert: You used <strong>"{detectedTriteWords.join(', ')}"</strong>. Try replacing them with more specific, powerful words!
                </span>
              </div>
            )}

            {/* Bottom Bar: Word count & Submit button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="font-mono tabular-nums">{wordCount} words</span>
                <span aria-hidden="true">·</span>
                <span>Recommended: 20+ words with evidence</span>
              </div>

              <button
                disabled={isLoadingFeedback || wordCount < 3}
                onClick={handleSubmitToCoach}
                className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold text-xs transition-colors shadow-xs"
              >
                {isLoadingFeedback ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Analyzing Thinking...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Get Coach Feedback & XP</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* AI Reading Coach Feedback Box */}
          {feedback && (
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-emerald-200">
                <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span>SEM-R Reading Coach Feedback</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-emerald-600 text-white">
                    +{feedback.xpAwarded} XP Earned!
                  </span>
                  <div className="flex items-center text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={i < feedback.criticalThinkingScore ? 'text-amber-500' : 'text-slate-300'}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Strengths */}
              <div>
                <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>What You Did Well:</span>
                </h4>
                <ul className="space-y-1 pl-4 list-disc text-xs text-emerald-950">
                  {feedback.strengths.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>

              {/* Deep Thinking Tip */}
              <div className="p-3 bg-white/70 rounded-xl border border-emerald-100">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-1 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                  <span>Deep Thinking Tip:</span>
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {feedback.deepThinkingTip}
                </p>
              </div>

              {/* Enrichment Spark */}
              <div className="p-3 bg-emerald-100/60 rounded-xl border border-emerald-200">
                <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wide mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Enrichment Spark (Gifted Challenge):</span>
                </h4>
                <p className="text-xs text-emerald-900 leading-relaxed">
                  {feedback.enrichmentSpark}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
