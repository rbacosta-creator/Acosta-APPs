import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

// Initialize Gemini client if API key is provided
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Fallback smart heuristic reading coach for 4th graders
function generateHeuristicFeedback(
  promptText: string,
  bookTitle: string,
  studentAnswer: string,
  bookmarkCode: string
) {
  const words = studentAnswer.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const lower = studentAnswer.toLowerCase();

  const triteWordsUsed = ['nice', 'good', 'bad', 'mean', 'cool', 'fun'].filter(w =>
    new RegExp(`\\b${w}\\b`, 'i').test(studentAnswer)
  );

  const hasEvidenceKeywords = /because|for example|when|chapter|page|in the book|author|scene/i.test(lower);
  const hasFeelingWords = /felt|thought|realized|struggled|courage|afraid|surprised|decided/i.test(lower);

  const strengths: string[] = [];
  if (wordCount >= 15) {
    strengths.push('Great explanation! You gave a detailed thought rather than just a one-word answer.');
  } else {
    strengths.push('You captured a clear idea about ' + (bookTitle || 'your story') + '!');
  }

  if (triteWordsUsed.length === 0) {
    strengths.push('Super vocabulary! You avoided overused words and expressed your ideas clearly.');
  } else {
    strengths.push(`Nice effort! Notice how replacing "${triteWordsUsed[0]}" with a vivid word like "resilient" or "impulsive" makes your idea even stronger.`);
  }

  if (hasEvidenceKeywords) {
    strengths.push('Awesome detective work connecting your answer directly to events from the text!');
  }

  let deepThinkingTip = 'Can you identify one exact quote or action from the text that convinced you of this?';
  if (bookmarkCode.startsWith('C')) {
    deepThinkingTip = 'How might the character’s inner thoughts differ from what they say out loud to other characters?';
  } else if (bookmarkCode.startsWith('P')) {
    deepThinkingTip = 'If the author had changed this one event, how would the rest of the chapters have changed?';
  } else if (bookmarkCode.startsWith('T')) {
    deepThinkingTip = 'Think about what the character had to sacrifice or risk when making this choice.';
  } else if (bookmarkCode.startsWith('M')) {
    deepThinkingTip = 'What was the cleverest clue the author planted, and how did it guide your deduction?';
  }

  const enrichmentSpark = `Try pairing this with SEM-R bookmark question ${bookmarkCode} to compare how another character would respond!`;
  
  const score = Math.min(5, Math.max(3, Math.floor(wordCount / 10) + (hasEvidenceKeywords ? 1 : 0) + (triteWordsUsed.length === 0 ? 1 : 0)));
  const xp = 30 + score * 5;

  return {
    strengths: strengths.slice(0, 2),
    deepThinkingTip,
    enrichmentSpark,
    criticalThinkingScore: score,
    xpAwarded: xp,
  };
}

// API endpoint for 4th Grade SEM-R AI Reading Coach
app.post('/api/coach', async (req, res) => {
  try {
    const { promptText, bookmarkCode, bookTitle, bookAuthor, studentAnswer } = req.body;

    if (!studentAnswer || typeof studentAnswer !== 'string') {
      return res.status(400).json({ error: 'Please provide your answer to get coach feedback.' });
    }

    if (!ai || !process.env.GEMINI_API_KEY) {
      const feedback = generateHeuristicFeedback(promptText, bookTitle, studentAnswer, bookmarkCode);
      return res.json(feedback);
    }

    const systemPrompt = `You are a warm, encouraging 4th-grade elementary reading coach trained in the University of Connecticut Schoolwide Enrichment Model in Reading (SEM-R).
Your goal is to praise the student's thinking, validate their ideas about the book "${bookTitle}" (author: ${bookAuthor || 'unknown'}), and gently stretch their critical thinking using Bloom's Taxonomy and Depth & Complexity elements.
Keep vocabulary accessible for a 9-10 year old, but introduce one exciting challenge word when helpful.

Return ONLY a JSON object adhering to:
{
  "strengths": ["string", "string"], // exactly 2 specific praise points highlighting evidence, insight, or vocabulary
  "deepThinkingTip": "string", // 1-2 encouraging sentences guiding them deeper (e.g. asking why, or how a character changed)
  "enrichmentSpark": "string", // 1 creative extension question or challenge
  "criticalThinkingScore": number, // integer 1 to 5
  "xpAwarded": number // integer 30 to 60 based on completeness
}`;

    const prompt = `Student Response for Bookmark [${bookmarkCode}]:
Prompt: "${promptText}"
Book: "${bookTitle}" by ${bookAuthor || 'unknown'}
Student's Answer: "${studentAnswer}"

Evaluate and coach this 4th grader:`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            strengths: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: 'Two specific praise points for the 4th grader',
            },
            deepThinkingTip: {
              type: Type.STRING,
              description: 'A constructive 1-2 sentence tip to stretch their thinking',
            },
            enrichmentSpark: {
              type: Type.STRING,
              description: 'An exciting follow-up challenge or connection',
            },
            criticalThinkingScore: {
              type: Type.INTEGER,
              description: 'Rating from 1 to 5',
            },
            xpAwarded: {
              type: Type.INTEGER,
              description: 'XP awarded between 30 and 60',
            },
          },
          required: ['strengths', 'deepThinkingTip', 'enrichmentSpark', 'criticalThinkingScore', 'xpAwarded'],
        },
      },
    });

    const parsed = JSON.parse(response.text?.trim() || '{}');
    return res.json(parsed);
  } catch (error) {
    console.error('Error generating AI coach feedback:', error);
    // Graceful fallback to heuristic coach so student is never interrupted
    const fallback = generateHeuristicFeedback(
      req.body.promptText || '',
      req.body.bookTitle || '',
      req.body.studentAnswer || '',
      req.body.bookmarkCode || 'C-1'
    );
    return res.json(fallback);
  }
});

// Configure Vite middleware or static serving
async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
