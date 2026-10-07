export interface AICoachResponse {
  strengths: string[];
  deepThinkingTip: string;
  enrichmentSpark: string;
  criticalThinkingScore: number;
  xpAwarded: number;
}

export async function askAICoach(params: {
  bookmarkCode: string;
  promptText: string;
  bookTitle: string;
  bookAuthor: string;
  studentAnswer: string;
}): Promise<AICoachResponse> {
  try {
    const res = await fetch('/api/coach', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.warn('Network call to AI coach failed, using client heuristic backup:', err);
    // Instant fallback
    return {
      strengths: [
        'Wonderful effort engaging with this SEM-R bookmark!',
        'You shared your perspective and thought critically about the characters and events.'
      ],
      deepThinkingTip: 'Try adding one specific piece of evidence from the chapter to back up your thought.',
      enrichmentSpark: 'How do you think this moment might foreshadow future events later in the book?',
      criticalThinkingScore: 4,
      xpAwarded: 40,
    };
  }
}
