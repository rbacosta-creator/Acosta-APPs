import { SEMRBookmark, BookSample, StudentBadge } from '../types';

export const MODULES_CONFIG = [
  {
    id: 'character-detective',
    name: 'Character Detective',
    subtitle: 'Uncover motives, secrets, traits & relationships',
    badgeName: 'Character Profiler',
    icon: 'UserSearch',
    color: 'emerald',
    bookmarkCodes: ['C-1', 'C-2', 'C-3', 'C-4', 'C-5', 'C-6', 'C-7', 'C-8'],
  },
  {
    id: 'plot-director',
    name: 'Plot Master & Director',
    subtitle: 'Analyze pacing, turning points, suspense & movie pitch',
    badgeName: 'Plot Director',
    icon: 'Film',
    color: 'sky',
    bookmarkCodes: ['P-1', 'P-2', 'P-3', 'P-4', 'P-5', 'P-6', 'P-7', 'P-8'],
  },
  {
    id: 'world-setting',
    name: 'World & Setting Explorer',
    subtitle: 'Inspect environments, time periods, and atmosphere',
    badgeName: 'World Cartographer',
    icon: 'Compass',
    color: 'amber',
    bookmarkCodes: ['S-1', 'S-2'],
  },
  {
    id: 'visual-design',
    name: 'Visual & Layout Investigator',
    subtitle: 'Critique book design, illustrations, and visual mood',
    badgeName: 'Visual Analyst',
    icon: 'Palette',
    color: 'rose',
    bookmarkCodes: ['I-1', 'I-2'],
  },
  {
    id: 'big-ideas',
    name: 'Big Ideas & Themes',
    subtitle: 'Courage, integrity, power, nature, growth & conflict',
    badgeName: 'Philosophy Scholar',
    icon: 'Sparkles',
    color: 'indigo',
    bookmarkCodes: [
      'T-1', 'T-2', 'T-3', 'T-4', 'T-5', 'T-6', 'T-7', 'T-8', 
      'T-9', 'T-10', 'T-11', 'T-12', 'T-13', 'T-14', 'T-15', 'T-16', 'T-17', 'T-18'
    ],
  },
  {
    id: 'genre-quests',
    name: 'Genre Master Quests',
    subtitle: 'Fantasy, Sci-Fi, Mystery, Poetry, Humor & Nonfiction',
    badgeName: 'Genre Master',
    icon: 'BookOpen',
    color: 'teal',
    bookmarkCodes: [
      'FS-1', 'FS-2', 'FS-3', 'FS-4',
      'M-1', 'M-2', 'M-3',
      'H-1', 'H-2', 'H-3',
      'PT-1', 'PT-2', 'PT-3',
      'NF-1', 'NF-2', 'NF-3', 'NF-4', 'NF-5', 'NF-6', 'NF-7', 'NF-8',
      'HT-1', 'SH-1', 'SH-2',
      'HF-1', 'HF-2', 'HF-3'
    ],
  },
  {
    id: 'reader-reflection',
    name: 'Reader Reflection & Biography',
    subtitle: 'Personal growth, reading attitudes, and real lives',
    badgeName: 'Lifelong Reader',
    icon: 'Award',
    color: 'purple',
    bookmarkCodes: ['B-1', 'B-2', 'B-3', 'B-4', 'RA-1', 'RA-2', 'A-1'],
  },
] as const;

export const ALL_BOOKMARKS: SEMRBookmark[] = [
  // --- Character C-1 to C-8 ---
  {
    code: 'C-1',
    category: 'Character',
    moduleId: 'character-detective',
    title: 'Character Traits & Choices',
    depthLevel: 'Foundation',
    iconName: 'User',
    specialTool: 'trite-word-detector',
    prompts: [
      'Think of two questions you have about the main character. Do you think the questions will be answered as you continue with the story? Why or why not?',
      'Describe the main character of the book in five or fewer words. Avoid using trite words (nice, good, bad, mean, etc.).',
      'Tell about a decision or choice made by a character. Do you think the character made a good choice? Why or why not?',
      'Tell about a character’s action that surprised you. Why was the action a surprise? What did it show about the character?'
    ]
  },
  {
    code: 'C-2',
    category: 'Character',
    moduleId: 'character-detective',
    title: 'Antagonist & Empathy',
    depthLevel: 'Analytical',
    iconName: 'Users',
    prompts: [
      'Who is the antagonist in the story? What clues from the text help you to know this?',
      'Imagine you are one of the characters during an important moment in the book. How do you think you would feel about what is happening? Why?',
      'If you could give the main character a gift, what would you give him or her? What details from the book helped you to decide what you might give?',
      'What is a question that one of the characters seems to be struggling with in the story? How does this character try to find answers?'
    ]
  },
  {
    code: 'C-3',
    category: 'Character',
    moduleId: 'character-detective',
    title: 'Perspective & Connections',
    depthLevel: 'Advanced Scholar',
    iconName: 'Eye',
    prompts: [
      'If you could choose to become one of the characters, whom would you choose? Why?',
      'How would the book be different if told from another character’s point of view?',
      'Compare and contrast the protagonist in this story with a character in another book.',
      'Create a new problem for the main character that is similar to a problem you once faced. Do you think the main character would respond to the problem the same way you did? Why or why not?'
    ]
  },
  {
    code: 'C-4',
    category: 'Character',
    moduleId: 'character-detective',
    title: 'Actions vs. Thoughts',
    depthLevel: 'Analytical',
    iconName: 'Brain',
    prompts: [
      'Tell about a part of the book in which a character’s thoughts differed from his or her actions. Why do you think this happened?',
      'How does the setting of the book influence the characters’ actions and decisions?',
      'Compare and contrast two characters in this book. Which one do you think is a more interesting character? Why?',
      'Put the major characters in the story in order from your favorite to least favorite. Explain your decisions.'
    ]
  },
  {
    code: 'C-5',
    category: 'Character',
    moduleId: 'character-detective',
    title: 'Context & Relatability',
    depthLevel: 'Analytical',
    iconName: 'Smile',
    prompts: [
      'How might the characters act differently if the story were set in a different place or time? Why?',
      'Is the main character someone you would want to “hang out” with? What do you know about the character that affected your answer?',
      'Which character’s point of view is used to tell the story? Tell one event from a different character’s point of view. How did you decide what to change in describing the event?'
    ]
  },
  {
    code: 'C-6',
    category: 'Character',
    moduleId: 'character-detective',
    title: 'Problems & The Character Closet',
    depthLevel: 'Advanced Scholar',
    iconName: 'Box',
    specialTool: 'character-closet',
    prompts: [
      'If you could change a choice made by one of the characters, what would you change? Why? How would the change affect the story overall?',
      'Which character in the book faces the biggest problem? Why do you think this is the biggest problem?',
      'Would you want to read about other characters this author has created? Why or why not?',
      'Imagine one character’s closet. Describe at least five things that you would expect to find there. (Remember, many people’s closets contain more than clothing!)'
    ]
  },
  {
    code: 'C-7',
    category: 'Character',
    moduleId: 'character-detective',
    title: 'Personality & School Life',
    depthLevel: 'Analytical',
    iconName: 'HeartHandshake',
    prompts: [
      'How does the personality of one character contribute to his or her success or failure in the story?',
      'Who narrates the book? Why do you think the author made this choice?',
      'Tell about two events in the story that the author used to portray the main character’s personality. What did you learn about the character from these parts of the book?',
      'What advice would you give the main character if he or she was starting as a new student at your school? Whom do you think he or she would sit with at lunch?'
    ]
  },
  {
    code: 'C-8',
    category: 'Character',
    moduleId: 'character-detective',
    title: 'Character Removal & Sequels',
    depthLevel: 'Advanced Scholar',
    iconName: 'Shuffle',
    prompts: [
      'If you could remove one character from the book, whom would you choose? How would this change the story?',
      'If you were writing a sequel or companion book to this one, which character would you make your protagonist? Why?',
      'In what ways does the main character stand out from other characters? Do you think this person would stand out in real life, or only in the context of the story? Why?',
      'Is the antagonist a believable character? Why or why not?'
    ]
  },

  // --- Plot P-1 to P-8 ---
  {
    code: 'P-1',
    category: 'Plot',
    moduleId: 'plot-director',
    title: 'Sequence & Conflicts',
    depthLevel: 'Foundation',
    iconName: 'GitCommit',
    prompts: [
      'What do you think was the most important event in the story? Why?',
      'Think of what has happened in the story so far. Why do you think the author chose to put the events into that order?',
      'Describe a conflict that occurred in the book. What were the causes of the conflict?',
      'In what ways are the events of the story realistic or not? What events do you think are most and least likely to happen in real life?'
    ]
  },
  {
    code: 'P-2',
    category: 'Plot',
    moduleId: 'plot-director',
    title: 'Word Cruncher & Suspense',
    depthLevel: 'Analytical',
    iconName: 'Scissors',
    specialTool: 'word-cruncher',
    prompts: [
      'Choose one scene from the book that you would like to illustrate. What kinds of colors and materials would you choose? Why?',
      'Summarize a chapter from the book in: 25 words or fewer; 10 words or fewer; 5 words or fewer.',
      'At the beginning of the book, how does the author “set the stage” for what is going to happen next?',
      'Tell about a suspenseful moment in the story. How did the author build the suspense?'
    ]
  },
  {
    code: 'P-3',
    category: 'Plot',
    moduleId: 'plot-director',
    title: 'Timelines & Emotional Arc',
    depthLevel: 'Analytical',
    iconName: 'TrendingUp',
    prompts: [
      'What feelings do you think the author wants readers to have during and at the end of the book? How do you know?',
      'What is one thing you would ask the author to change about the plot if you could?',
      'If you made a timeline or diagram of the events in the book, what do you think it might look like? Would a straight line or another shape show the sequence of events best?',
      'Choose a chapter of the book and give it a new title. Explain why this is a good title for the chapter.'
    ]
  },
  {
    code: 'P-4',
    category: 'Plot',
    moduleId: 'plot-director',
    title: 'Page-Turners & Stakes',
    depthLevel: 'Foundation',
    iconName: 'Flame',
    prompts: [
      'What are the main problems so far for the characters in the book? At this point in the story, which is the biggest or most important problem? Why?',
      'If you could only choose one event from the story to tell a friend, what event would you choose? Do you think you could convince your friend to read the book based only on this one event?',
      'Tell about a point in the story at which you didn’t want to put the book down. What made that moment so interesting?'
    ]
  },
  {
    code: 'P-5',
    category: 'Plot',
    moduleId: 'plot-director',
    title: 'Movie Adaptation & Predictions',
    depthLevel: 'Analytical',
    iconName: 'Clapperboard',
    prompts: [
      'What events would you include if you were to make a movie of this book?',
      'List what you think are some characteristics of a good story. Which ones apply to this book?',
      'Tell about a time when you were able to predict correctly what would happen next in the story. What clues did the author give that helped you make your predictions?',
      'Find a scene in the book that left a strong picture in your mind. What language did the author use that helped to create that visualization?'
    ]
  },
  {
    code: 'P-6',
    category: 'Plot',
    moduleId: 'plot-director',
    title: 'Book Soundtrack & Alternate Endings',
    depthLevel: 'Advanced Scholar',
    iconName: 'Music',
    specialTool: 'soundtrack-studio',
    prompts: [
      'Would you change the ending of the book if you could? If so, what changes would you make? Why?',
      'Why do you think the author wrote this story?',
      'Predict the reactions of the following people to this story: someone in your family, a close friend, your teacher.',
      'Think of three or four songs that you would want to include on a “soundtrack” for this book. Why did you choose each song?'
    ]
  },
  {
    code: 'P-7',
    category: 'Plot',
    moduleId: 'plot-director',
    title: 'Conflict Resolution & Growth',
    depthLevel: 'Analytical',
    iconName: 'RefreshCw',
    prompts: [
      'What clues did the title give you about the plot? Would you change the title if you could? Why or why not?',
      'How are the events in the story similar to events in your own life?',
      'Does the book have a table of contents? If so, what clues does it give you about the plot?',
      'What is the main conflict in the book? In what ways did the resolution of the conflict help the characters to grow and change?'
    ]
  },
  {
    code: 'P-8',
    category: 'Plot',
    moduleId: 'plot-director',
    title: 'Climax & Resolving Confusion',
    depthLevel: 'Advanced Scholar',
    iconName: 'HelpCircle',
    prompts: [
      'Tell about any part of the plot that confused you. Do you think the author wanted to confuse the reader? How did you resolve your confusion?',
      'Describe a scene that you would include in a movie preview for this book. Why would you choose that scene?',
      'What was the turning point or climax of the story? How do you know? How did it affect the main characters?',
      'Is the plot believable? Why or why not?'
    ]
  },

  // --- Setting S-1 to S-2 ---
  {
    code: 'S-1',
    category: 'Setting',
    moduleId: 'world-setting',
    title: 'Atmosphere & Mood',
    depthLevel: 'Foundation',
    iconName: 'MapPin',
    prompts: [
      'Visualize one location from this book. What three adjectives would you use to describe this setting?',
      'Would you want to live in the setting of this book? Why or why not? If the setting is a real place, do you think you would like to visit it? Why or why not?',
      'Imagine if the story happened in a different setting. Where else might the story be set? How would this other setting change the characters and plot?',
      'How does the author use the setting to build the mood for the story?'
    ]
  },
  {
    code: 'S-2',
    category: 'Setting',
    moduleId: 'world-setting',
    title: 'Expedition Packing & Research',
    depthLevel: 'Analytical',
    iconName: 'Backpack',
    specialTool: 'trip-packer',
    prompts: [
      'If you were to plan a trip to the setting of this book, what would you pack and why?',
      'Connect the setting of this book to that of another book you have read. What do the settings have in common? How are they different?',
      'Do you think the setting is a good location for the story? Why or why not?',
      'What kind of background information do you think the author needed to collect in creating the setting for this book? What resources could the author have used to gather this information?'
    ]
  },

  // --- Illustrations/Layout I-1 to I-2 ---
  {
    code: 'I-1',
    category: 'Illustrations/Layout',
    moduleId: 'visual-design',
    title: 'Visual Storytelling',
    depthLevel: 'Foundation',
    iconName: 'Image',
    prompts: [
      'Could the illustrations in this book tell the story without words? Why or why not?',
      'How did the illustrations affect your feelings?',
      'What can you observe about the layout or organization of the book? How did the layout affect the way you are reading the book?',
      'How did the “look” of the book influence your decision to read it?',
      'Choose an illustration you like from the book. Why do you think the illustrator chose to show that moment?'
    ]
  },
  {
    code: 'I-2',
    category: 'Illustrations/Layout',
    moduleId: 'visual-design',
    title: 'Covers & Format Design',
    depthLevel: 'Analytical',
    iconName: 'Book',
    prompts: [
      'Is the cover of the book a good match for what you find inside? Why or why not?',
      'How do the illustrations or page layouts differ from those in other books you have read?',
      'If you were in charge of developing a new edition of this book, what changes would you make to how the book looks?',
      'Would this book be as interesting or helpful to you without the illustrations and/or diagrams? Why or why not?'
    ]
  },

  // --- Big Ideas & Themes T-1 to T-18 ---
  {
    code: 'T-1',
    category: 'Courage',
    moduleId: 'big-ideas',
    title: 'Courage & Unexpected Bravery',
    depthLevel: 'Analytical',
    iconName: 'Shield',
    prompts: [
      'How do characters show courage in the book? In what ways do their acts of courage differ?',
      'Tell about a brave act that surprised you as you read. Why would it be surprising for the character to act that way?',
      'Tell about a way that a character showed courage by NOT doing something. Do you agree with the character’s decision? Why or why not?',
      'Describe a character’s courageous act. Predict how other characters might be inspired by this.'
    ]
  },
  {
    code: 'T-2',
    category: 'Courage',
    moduleId: 'big-ideas',
    title: 'Fear and Courage United',
    depthLevel: 'Advanced Scholar',
    iconName: 'Heart',
    prompts: [
      'Describe a courageous act by the main character. What made this act courageous?',
      'Think about the challenges that caused characters in this book to show courage. Which challenge would you be most willing to face, and which would require the most courage for you? Why?',
      'What events earlier in the story helped a character to be brave at a later point? How do you know?',
      'In what ways does the book show that someone can be scared and be courageous at the same time? What does that tell you about courage?'
    ]
  },
  {
    code: 'T-3',
    category: 'Integrity',
    moduleId: 'big-ideas',
    title: 'Standing For Beliefs',
    depthLevel: 'Advanced Scholar',
    iconName: 'CheckCircle',
    prompts: [
      'A person shows integrity by sticking to what he or she believes to be right, even if there is pressure to do something he or she doesn’t believe in. Describe a character in the book who shows integrity.',
      'Give an example of a time when a character had to decide between following his or her beliefs about what is right or choosing some other option.',
      'In what ways did a character have to give something up in order to stick to what he or she believed was right?',
      'What advice would you give to a character facing a tough decision in this book?'
    ]
  },
  {
    code: 'T-4',
    category: 'Power',
    moduleId: 'big-ideas',
    title: 'Power: Position vs Personality',
    depthLevel: 'Analytical',
    iconName: 'Zap',
    prompts: [
      'Identify a powerful character in the book. Is the character powerful because of his or her position or something about personality? Explain.',
      'Compare a character who uses power for good with one who uses power for evil. What are their similarities and differences?',
      'How do characters in the book show their power? Why do they try to show other people how powerful they are?',
      'Imagine you are transported to the world of the book. How would you prepare to resist a powerful antagonist?'
    ]
  },
  {
    code: 'T-5',
    category: 'Power',
    moduleId: 'big-ideas',
    title: 'Powerlessness & Resisting Bullies',
    depthLevel: 'Analytical',
    iconName: 'UserMinus',
    prompts: [
      'Can you identify a character in the book who is completely powerless? What message is the author sending by including this character?',
      'Imagine you are painting a picture of a powerful character in the book. What signs or symbols would you include to show how powerful the character is?',
      'Does this book show an example of the idea of good vs. evil? Explain how.',
      'Tell about a character that you would describe as a bully. What advice would you offer other characters for how to make the bully less powerful?'
    ]
  },
  {
    code: 'T-6',
    category: 'Power',
    moduleId: 'big-ideas',
    title: 'Shifts in Power & Generosity',
    depthLevel: 'Advanced Scholar',
    iconName: 'ArrowUpRight',
    prompts: [
      'Describe a character whose power increases in the book. How does that happen? What are the consequences?',
      'Tell about an event in the book when a character showed kindness or generosity. How did that affect the story overall?',
      'Tell about a point in the story at which one character became more powerful than another. Predict the consequences of this change.',
      'How does a powerful character use his or her strength for himself or herself? How does the person use power to help others?'
    ]
  },
  {
    code: 'T-7',
    category: 'Power',
    moduleId: 'big-ideas',
    title: 'Team Strength & Sacrifices',
    depthLevel: 'Advanced Scholar',
    iconName: 'Users',
    prompts: [
      'How do characters work together to use their strengths in the story?',
      'Describe choices made by powerful characters in the book. How do these choices show these characters’ beliefs about right and wrong?',
      'What sacrifices are characters in the story willing to make to stand up for what they believe is right?',
      'Describe a character who becomes less powerful during the story. What do the other characters learn from this change?'
    ]
  },
  {
    code: 'T-8',
    category: 'Nature',
    moduleId: 'big-ideas',
    title: 'Nature as Character',
    depthLevel: 'Analytical',
    iconName: 'TreePine',
    prompts: [
      'How is nature used as a character in this book?',
      'What does the book show about how nature affects people? What do the characters need to learn about nature in the story?',
      'Compare the role of nature in this book to its role in a book with a very different setting, but a similar theme (for example, survival).',
      'If the main character was buying a painting showing something in nature, what do you think would be the subject of the painting? Why?'
    ]
  },
  {
    code: 'T-9',
    category: 'Stewardship',
    moduleId: 'big-ideas',
    title: 'Caring for Our World',
    depthLevel: 'Analytical',
    iconName: 'Globe',
    prompts: [
      'What message does the book give about people’s responsibility to care for the Earth?',
      'In what ways does the author try to persuade readers to take action about a problem or concern? Is the author convincing? Why or why not?',
      'How might the information in this book help people take better care of their environment?',
      'Describe a project you might do in your community to show the message of this book.'
    ]
  },
  {
    code: 'T-10',
    category: 'Growth & Change',
    moduleId: 'big-ideas',
    title: 'Internal Transformations',
    depthLevel: 'Analytical',
    iconName: 'Sprout',
    prompts: [
      'Describe 3 important changes that have happened in this book. What made these changes happen?',
      'Tell about a moment in the book that made the main character think about things differently. Predict how this change will help the character to grow.',
      'Explain how events in the story make characters think differently about each other. Explain whether these changes happen suddenly or gradually.',
      'What changes in the book result from careful planning and action? What can you learn from these actions?'
    ]
  },
  {
    code: 'T-11',
    category: 'Growth & Change',
    moduleId: 'big-ideas',
    title: 'Ripple Effects & Learning',
    depthLevel: 'Advanced Scholar',
    iconName: 'Layers',
    prompts: [
      'How does a learning experience help a character in the book to grow?',
      'Describe a change in the book that you think was negative. What evidence supports your opinion? Would all the characters think the change was negative? Why or why not?',
      'How does the book show that not all changes can be predicted or controlled?',
      'Describe a change that led to many other changes. How would you show the connections among these changes in a diagram?'
    ]
  },
  {
    code: 'T-12',
    category: 'Growth & Change',
    moduleId: 'big-ideas',
    title: 'Reversible vs Permanent Change',
    depthLevel: 'Advanced Scholar',
    iconName: 'Activity',
    prompts: [
      'In what ways does the main character’s growth within the book change his or her relationships with others?',
      'How did the protagonist deal with a difficult change in the book? How did he or she grow as a result?',
      'Can you identify changes in the book that might be reversible? How do these differ from changes that seem more permanent or one-directional?',
      'How do a character’s actions demonstrate the ways the character is changing on the inside?'
    ]
  },
  {
    code: 'T-13',
    category: 'Relationships',
    moduleId: 'big-ideas',
    title: 'Healthy vs Unhealthy Bonds',
    depthLevel: 'Foundation',
    iconName: 'HeartHandshake',
    prompts: [
      'Describe the relationship between two important characters. What are the good things and bad things about the relationship for each person?',
      'Tell about a relationship in the book that might be unhealthy. Why is the relationship a problem?',
      'Explain how the main character affects his or her environment. What changes does the character make to his or her surroundings?',
      'Describe a character who is good at keeping up relationships. What makes this person successful?'
    ]
  },
  {
    code: 'T-14',
    category: 'Relationships',
    moduleId: 'big-ideas',
    title: 'Enemies & Theme Songs',
    depthLevel: 'Analytical',
    iconName: 'Radio',
    prompts: [
      'Give an example of how characters work together to solve a problem in the book. How is their relationship changed by the experience?',
      'Describe a relationship between two enemies in the book. Is the relationship believable? Why or why not?',
      'What makes a friendship healthy? Give an example of a healthy friendship from the story.',
      'Identify a relationship in this book and give it a “theme song.” Explain whether the same song would fit the relationship throughout the book or change.'
    ]
  },
  {
    code: 'T-15',
    category: 'Relationships',
    moduleId: 'big-ideas',
    title: 'Emotional Waves & Companionship',
    depthLevel: 'Analytical',
    iconName: 'Sparkle',
    prompts: [
      'Describe a relationship between two characters in this book. How did these characters come together? Do you expect the relationship to continue throughout the book? Why?',
      'How do the characters’ emotions affect their relationships? Give a specific example.',
      'Identify a character who you think needs a friend. How might a friendship help the character? What qualities would the friend need to bring to the relationship?'
    ]
  },
  {
    code: 'T-16',
    category: 'Conflict',
    moduleId: 'big-ideas',
    title: 'Peacemakers & Stakes',
    depthLevel: 'Foundation',
    iconName: 'Swords',
    prompts: [
      'What is the main conflict in the book? Is the conflict mainly between different people or is it a different kind of conflict? Explain.',
      'Tell about a character who is a “peacemaker” in the book. Explain how he or she helps avoid or resolve conflicts.',
      'Describe a conflict between characters in the book. Which character has greater control in the conflict? How do you know?',
      'What are the potential positive and negative effects of the story’s main conflict? Who might be hurt or helped as a result of the conflict and why?'
    ]
  },
  {
    code: 'T-17',
    category: 'Conflict',
    moduleId: 'big-ideas',
    title: 'Inner Struggles & Compromise',
    depthLevel: 'Analytical',
    iconName: 'Balance',
    prompts: [
      'What are some decisions with which the main character has to struggle? Why were these decisions difficult for the character?',
      'In what way does a conflict in the story come from competition between characters?',
      'Choose a conflict in the story. What are the causes of the conflict? How do you think this conflict will influence the overall plot?',
      'What do the characters have to give up to resolve conflict? In what ways does this change the characters?'
    ]
  },
  {
    code: 'T-18',
    category: 'Conflict',
    moduleId: 'big-ideas',
    title: 'Individual vs Society',
    depthLevel: 'Advanced Scholar',
    iconName: 'Scale',
    prompts: [
      'Describe a conflict that one or more characters have with their society or culture. Predict whether this conflict will lead to a change in society.',
      'How is the conflict in this book similar to those you have read about in other books?',
      'Describe a choice a character made to avoid a conflict. Did this choice show strength or weakness? Why?',
      'Describe the antagonist’s role in the main conflict. How does the antagonist show his or her strength?'
    ]
  },

  // --- Genre Quests: Fantasy/SciFi FS-1 to FS-4 ---
  {
    code: 'FS-1',
    category: 'Fantasy/SciFi',
    moduleId: 'genre-quests',
    title: 'Fairy Tales & Lone Heroes',
    depthLevel: 'Foundation',
    iconName: 'Wand2',
    prompts: [
      'What elements of traditional fairy tales can you find in the setting, plot, or characters? Why do you think the author included these elements?',
      'Many fantasy and science fiction books have characters who are orphans or otherwise on their own. Does your book have such a character in an important role? How does this affect the plot?',
      'Were you able to predict the ending of this story? What clues from the text helped you with this? If not, what elements in the text made it difficult to predict?'
    ]
  },
  {
    code: 'FS-2',
    category: 'Fantasy/SciFi',
    moduleId: 'genre-quests',
    title: 'Magic Systems & Movie FX',
    depthLevel: 'Analytical',
    iconName: 'Sparkles',
    prompts: [
      'What parts of this book would be hard to show in a movie? What kinds of special effects might moviemakers need to use?',
      'Identify any magical powers in this book. How and why were these powers necessary to the plot?',
      'How does the author make the plot of the book believable within its fictional setting?',
      'What do you notice about the settings of the first and last scenes? Why might these settings be important?'
    ]
  },
  {
    code: 'FS-3',
    category: 'Fantasy/SciFi',
    moduleId: 'genre-quests',
    title: 'Allegory & Nonhuman Characters',
    depthLevel: 'Advanced Scholar',
    iconName: 'Ghost',
    prompts: [
      'How does this novel show the theme of good vs. evil? How does the fictional setting emphasize this conflict?',
      'In what ways does the author exaggerate something from the “real world” to show something about his or her fantasy world?',
      'Are there nonhuman characters in the book that show human characteristics? What can you learn from these characters about human feelings or behavior?',
      'What do you think is the moral of the story? Why?'
    ]
  },
  {
    code: 'FS-4',
    category: 'Fantasy/SciFi',
    moduleId: 'genre-quests',
    title: 'Gadgets & Alternate Worlds',
    depthLevel: 'Analytical',
    iconName: 'Rocket',
    prompts: [
      'Imagine if we had the creatures/gadgets/modes of transportation from the book in our own society. How would your life be different?',
      'What have you found to be the most creative part of the book? Why?',
      'If you were unexpectedly dropped into the world of this book, what would you miss most? What would you find most difficult to get used to?',
      'What message is the author trying to convey in the book?'
    ]
  },

  // --- Mysteries M-1 to M-3 ---
  {
    code: 'M-1',
    category: 'Mysteries',
    moduleId: 'genre-quests',
    title: 'Detective Skills & Suspects',
    depthLevel: 'Foundation',
    iconName: 'Search',
    prompts: [
      'How do you know that this book is a mystery (besides the label on the book)?',
      'What skills does the character in the “detective” role bring to the story? If more than one person is working to solve the mystery, how are their skills similar and different?',
      'At this point in the story, who would you include on a list of suspects? Why?',
      'Would you say that this mystery is more of a “thinking” mystery or an action-based one? Why?'
    ]
  },
  {
    code: 'M-2',
    category: 'Mysteries',
    moduleId: 'genre-quests',
    title: 'Clues & Building Suspense',
    depthLevel: 'Analytical',
    iconName: 'Key',
    prompts: [
      'What clues has the author given so far to help you solve the mystery? How do you know they are clues? How has this evidence changed your thinking about the “answer”?',
      'Have you decided that any characters are innocent? Why do you think so? Provide evidence from the story.',
      'Describe an event in the book that was suspenseful for you as the reader. How does the author build suspense throughout the story?',
      'How would reading this book be different if you knew the solution before you started?'
    ]
  },
  {
    code: 'M-3',
    category: 'Mysteries',
    moduleId: 'genre-quests',
    title: 'Red Herrings & Investigations',
    depthLevel: 'Advanced Scholar',
    iconName: 'Fingerprint',
    specialTool: 'red-herring-board',
    prompts: [
      'A “red herring” is a false clue that the author adds to confuse the reader and/or the detective. Describe any red herrings in the story.',
      'Have you decided that any characters are guilty? Provide evidence from the story.',
      'If you were investigating this mystery, what steps would you take to uncover the truth?',
      'Would you ever read the ending of a mystery first? Why or why not?',
      'Do you feel that the resolution of the mystery was logical and believable? Why?'
    ]
  },

  // --- Humor H-1 to H-3 ---
  {
    code: 'H-1',
    category: 'Humor',
    moduleId: 'genre-quests',
    title: 'Surprise & Comic Voice',
    depthLevel: 'Foundation',
    iconName: 'Smile',
    prompts: [
      'What cues or clues tell you that this book is intended to be funny?',
      'Describe how a particular character’s actions or behaviors remind you of someone you know. Do you find this person to be funny in “real life”? Why?',
      'Sometimes things are funny because they are unexpected or surprising. Give an example of how the author uses surprise for humorous effect.',
      'In what ways does the author use the narration of the story to convey humor?'
    ]
  },
  {
    code: 'H-2',
    category: 'Humor',
    moduleId: 'genre-quests',
    title: 'Witty vs Slapstick & Exaggeration',
    depthLevel: 'Analytical',
    iconName: 'Laugh',
    prompts: [
      'Would you describe this book as witty or does it rely more on slapstick humor? Explain your answer.',
      'How does the author use exaggeration to make the book funny?',
      'Describe a funny scene from the book. Do you think the situation would seem funny if it really happened? Why or why not?',
      'How does the author or a character make fun of himself or herself? Why do you think people might find this type of humor to be funny?'
    ]
  },
  {
    code: 'H-3',
    category: 'Humor',
    moduleId: 'genre-quests',
    title: 'Language of Comedy & Logic',
    depthLevel: 'Analytical',
    iconName: 'MessageSquare',
    prompts: [
      'Describe something a character did that you wish you could actually do but that wouldn’t work outside of a book. Why are the rules of behavior or logic different in a story than real life sometimes?',
      'Give examples of how the author uses language to create humor in the book.',
      'Retell a funny moment from the book. What made this moment seem funny to you?',
      'Which character from this book would you like to invite to “hang out” with you and your friends? Why?'
    ]
  },

  // --- Poetry PT-1 to PT-3 ---
  {
    code: 'PT-1',
    category: 'Poetry',
    moduleId: 'genre-quests',
    title: 'Sensory Imagery & Read-Aloud',
    depthLevel: 'Foundation',
    iconName: 'Feather',
    prompts: [
      'Choose a phrase from a poem in this book that caught your attention while you were reading. Explain why you think you noticed this phrase.',
      'What was your emotional response to this poem?',
      'What sensory images (visual, auditory, etc.) come to mind when you read this poem? How does the language of the poem help to make these images?',
      'If you were to read this poem aloud, would you read it quickly or slowly? Why? What other choices would you make about reading it aloud?'
    ]
  },
  {
    code: 'PT-2',
    category: 'Poetry',
    moduleId: 'genre-quests',
    title: 'Song, Rhythm & Structure',
    depthLevel: 'Analytical',
    iconName: 'Music2',
    prompts: [
      'If you made this poem into a song, what kind of music would you use? What kinds of instruments would you use? Why?',
      'How would you illustrate this poem? What colors and materials would you use? Why?',
      'How do the structural elements of the poem (rhythm, use of repetition, structure of lines, etc.) contribute to its meaning?',
      'Look at the collection of poems in this book as a whole. Why do you think the poet chose to group the poems this way? How do the poems fit together?'
    ]
  },
  {
    code: 'PT-3',
    category: 'Poetry',
    moduleId: 'genre-quests',
    title: 'Poetic Forms & Meter',
    depthLevel: 'Advanced Scholar',
    iconName: 'BookMarked',
    prompts: [
      'What patterns of rhythm and rhyme do you notice in this poem? How do these elements affect meaning? If the poem doesn’t have rhyme or a particular rhythm, why do you think the poet chose not to use these elements?',
      'There are many specific poetic forms, such as haiku, limericks, sonnets, etc. What different poetic forms do you notice in this book? Which poetic form or forms do you like best? Why?',
      'If you were to recommend this poem to an adult other than your reading teacher, who would it be and why?'
    ]
  },

  // --- Nonfiction NF-1 to NF-8 ---
  {
    code: 'NF-1',
    category: 'Nonfiction',
    moduleId: 'genre-quests',
    title: 'Changing the World & Professions',
    depthLevel: 'Foundation',
    iconName: 'Briefcase',
    prompts: [
      'How could an idea in this book improve or change the world? Or, if you are reading a history book, how did an idea in the book change the world?',
      'Describe some jobs or professions that relate to this topic. What kinds of work do these people do?',
      'How is the information in this book organized? In what ways is it similar to or different from a fictional narrative?',
      'What new information have you learned from this book that makes you curious to learn more about the topic?'
    ]
  },
  {
    code: 'NF-2',
    category: 'Nonfiction',
    moduleId: 'genre-quests',
    title: 'Cause, Effect & Text Features',
    depthLevel: 'Analytical',
    iconName: 'ArrowRightLeft',
    prompts: [
      'Identify one cause and effect relationship described in this book. Was the relationship between cause and effect predicted or was its discovery a surprise? Explain.',
      'What different perspectives were presented on an issue in this book? How well balanced were the viewpoints?',
      'How do the ideas in this book relate to your life?',
      'How did the Table of Contents and Index help you to use this book? What advice would you give to another student about using these tools while reading this book?'
    ]
  },
  {
    code: 'NF-3',
    category: 'Point of View',
    moduleId: 'genre-quests',
    title: 'Investigating Bias & Perspectives',
    depthLevel: 'Advanced Scholar',
    iconName: 'Scale',
    prompts: [
      'Bias happens when the author presents only one point of view on an issue that may have multiple perspectives. Describe how you might investigate whether this book presents information in a biased way.',
      'What point of view do you think the author conveys on the topic? Do you think he or she shows bias? How? If not, how did the author avoid conveying a bias?',
      'Are there points in the book at which you disagree with the author? Explain your perspective and what evidence you have to support your ideas.'
    ]
  },
  {
    code: 'NF-4',
    category: 'Nonfiction',
    moduleId: 'genre-quests',
    title: 'Time Capsules & Author Expertise',
    depthLevel: 'Analytical',
    iconName: 'Archive',
    prompts: [
      'Would this book be a good choice to include in a time capsule? Why or why not?',
      'What information does the book provide on the author’s background? What evidence of the author’s expertise on the topic did you find in this information? What evidence did you find in the text itself?',
      'If more than one author wrote the book, why do you think their collaboration might have been important?',
      'What is one big question you still have after reading the book? What steps might you take to find answers?'
    ]
  },
  {
    code: 'NF-5',
    category: 'Nonfiction',
    moduleId: 'genre-quests',
    title: 'Comprehension Fix-Up Strategies',
    depthLevel: 'Analytical',
    iconName: 'HelpCircle',
    prompts: [
      'Identify a part of the book on which you had to spend extra time. Explain the strategies you used to understand the information (rereading, consulting pictures, looking in another book, etc.).',
      'Have you read any fiction books that deal with this topic? How accurate was the content presented in the fiction book?',
      'What is the most important idea the author conveys? How does this compare with what you found to be most interesting about the book?',
      'Why did you choose to read this book?'
    ]
  },
  {
    code: 'NF-6',
    category: 'Nonfiction',
    moduleId: 'genre-quests',
    title: 'Facts vs New Conclusions',
    depthLevel: 'Foundation',
    iconName: 'CheckSquare',
    prompts: [
      'Compare what you learned in this book with what you already knew or thought you knew about the topic.',
      'What sections of the book did you want to read first? Why?',
      'Is everything in the book based on fact? How does the author use factual evidence to support new ideas and conclusions?',
      'Describe how the layout of the book helped you or made it harder to understand.'
    ]
  },
  {
    code: 'NF-7',
    category: 'Nonfiction',
    moduleId: 'genre-quests',
    title: 'Connecting Subjects & Expert Interviews',
    depthLevel: 'Analytical',
    iconName: 'Link',
    prompts: [
      'Explain how the information in this book added to your existing knowledge. How does the information relate to things you are learning in other parts of your day?',
      'Describe the format of the book. What other topics could be covered using this format? What topics would not be appropriate for this format?',
      'Suggest a plot for a fictional story in which this information plays an important role.',
      'What questions would you want to ask an expert on this topic after reading the book?'
    ]
  },
  {
    code: 'NF-8',
    category: 'Nonfiction',
    moduleId: 'genre-quests',
    title: 'Vocabulary & Author Purpose',
    depthLevel: 'Advanced Scholar',
    iconName: 'FileText',
    prompts: [
      'Compare this book with other books on this topic. In what ways was the information similar and different? In what ways was the presentation similar and different?',
      'Identify a word from the book that was new to you. How did you figure out the meaning of the word?',
      'If you were to write a follow up to this book, what part would you like to research in more depth?',
      'What was the author’s purpose in writing this book? How well do you think he or she achieved this goal?'
    ]
  },

  // --- How-To & Self-Help HT-1, SH-1, SH-2 ---
  {
    code: 'HT-1',
    category: 'How-To Books',
    moduleId: 'genre-quests',
    title: 'Following Procedural Guides',
    depthLevel: 'Foundation',
    iconName: 'Wrench',
    prompts: [
      'What would you find most challenging about following the directions in this book? Why?',
      'If you had a question about some of the processes in this book, what person in your community might you contact for help? What expertise would this person bring to the tasks?',
      'Explain how you would collect any special resources or tools you would need to follow the directions in the book.',
      'As you follow one set of directions in this book, what signs will you look for to be sure that you are completing the task correctly?'
    ]
  },
  {
    code: 'SH-1',
    category: 'Self-Help',
    moduleId: 'genre-quests',
    title: 'Personal Strategies & Evidence',
    depthLevel: 'Analytical',
    iconName: 'Lightbulb',
    prompts: [
      'Explain how the title of the book connects to the strategies that the author is trying to provide. What audience do you think the title was intended to attract and why?',
      'What kind of evidence does the author provide to show that his or her strategies are helpful?',
      'Describe any strategies from this book that you plan to use yourself. Why have you made these choices?',
      'Which strategies from this book would you not want to try? Why?'
    ]
  },
  {
    code: 'SH-2',
    category: 'Self-Help',
    moduleId: 'genre-quests',
    title: 'Organization & Beneficiaries',
    depthLevel: 'Analytical',
    iconName: 'Users2',
    prompts: [
      'Why did you choose this book to read? What questions did you have when you started to read the book? Were your questions answered?',
      'What can you observe about the organization of this book? What did you find to be useful about the way information was presented? What might you change in your own version of this book?',
      'Can you think of a fictional character or someone you know who might benefit from reading this book? In what way would he/she benefit?'
    ]
  },

  // --- Historical Fiction HF-1 to HF-3 ---
  {
    code: 'HF-1',
    category: 'Historical Fiction',
    moduleId: 'genre-quests',
    title: 'Time Travel Details',
    depthLevel: 'Analytical',
    iconName: 'Hourglass',
    prompts: [
      'Describe how the author brings the historical period to life. What details of the time period stand out to you? Why?',
      'From whose point of view is the story being told? Is this person real or fictional? Why do you think the author made the decision to tell the story from this character’s point of view?',
      'What do you think you would like about living in the time and place shown in this book? Why?',
      'What modern conveniences would you most miss if you lived in the time of this book?'
    ]
  },
  {
    code: 'HF-2',
    category: 'Historical Fiction',
    moduleId: 'genre-quests',
    title: 'Anachronisms & Research',
    depthLevel: 'Advanced Scholar',
    iconName: 'Clock',
    prompts: [
      'Anachronism refers to something or someone that is not in its accurate historical time. For example, an electronic object or the use of modern slang would be out of place in a book set in the 18th century. Can you find any anachronisms in this book? If so, how might they distract or mislead a reader?',
      'Does the book put modern and historical details together on purpose? Explain how this is done, and how you know it is intentional.',
      'What nonfiction resources might help you to develop a better understanding of details of the historical period?'
    ]
  },
  {
    code: 'HF-3',
    category: 'Historical Fiction',
    moduleId: 'genre-quests',
    title: 'Historical Accuracy & Daily Life',
    depthLevel: 'Analytical',
    iconName: 'Compass',
    prompts: [
      'After reading this book, what questions do you have about the historical setting and/or the people of this time and place?',
      'Did you feel more connections with the real or fictional characters in this book? Why?',
      'How would you check the accuracy of the historical information in this book? What resources might you use?',
      'Choose some part of daily life mentioned in this book, such as food or clothing or transportation. How would you explain to a character from the book how this part of life has changed from their time to yours?'
    ]
  },

  // --- Audience A-1 ---
  {
    code: 'A-1',
    category: 'Audience',
    moduleId: 'reader-reflection',
    title: 'Target Audience & Book Blurbs',
    depthLevel: 'Analytical',
    iconName: 'Target',
    prompts: [
      'What other topics or ideas might people who like this book be interested in? Why?',
      'Read the summary on the back of the book. To what audience do you think the summary is intended to appeal? What evidence supports your answer?',
      'To whom would you recommend this book? Why? Who do you know that would not like this book? Why?',
      'How would you change this book to appeal to a younger or older audience?'
    ]
  },

  // --- Biography B-1 to B-4 ---
  {
    code: 'B-1',
    category: 'Biography',
    moduleId: 'reader-reflection',
    title: 'Admiration & School Days',
    depthLevel: 'Foundation',
    iconName: 'Award',
    prompts: [
      'If you were going to write a biography, who would you write about? Why?',
      'What do you admire about the person in this biography? Why? How might you become more like this person?',
      'What do you think school was like for the person about whom this biography was written? Explain.',
      'How did the author organize the sequence of events in the story of the person’s life?'
    ]
  },
  {
    code: 'B-2',
    category: 'Biography',
    moduleId: 'reader-reflection',
    title: 'Overcoming Obstacles',
    depthLevel: 'Analytical',
    iconName: 'Mountain',
    prompts: [
      'What challenges did this person face? How did he or she work to overcome these challenges?',
      'Describe a difficult decision the person had to make. Do you think you would have made the same choice? Why?',
      'What do most people think is this person’s most significant accomplishment? Do you think the person would agree that this was the most important thing he or she did? Why or why not?',
      'Was the person alive at the time the biography was written? How might this have affected how the author prepared the book?'
    ]
  },
  {
    code: 'B-3',
    category: 'Biography',
    moduleId: 'reader-reflection',
    title: 'Unanswered Questions & Bonds',
    depthLevel: 'Analytical',
    iconName: 'HelpCircle',
    prompts: [
      'Why would an author write a biography about this individual?',
      'What other questions do you have about this person and his or her experiences that this book did not answer?',
      'What do you have in common with the person about whom you are reading? Do you think you would be friends with this person if you could meet him or her?',
      'If you are reading an autobiography, look to see if there is a dedication in the front of the book. What do you know about the person that might explain the dedication?'
    ]
  },
  {
    code: 'B-4',
    category: 'Biography',
    moduleId: 'reader-reflection',
    title: 'Failures, Setbacks & Self-Discovery',
    depthLevel: 'Advanced Scholar',
    iconName: 'Sparkles',
    prompts: [
      'From what you have read so far, tell about an event that was very influential on the choices the person made in his or her life.',
      'What did you learn about yourself while reading this biography?',
      'Describe a situation in which the person faced a setback or failure. How did he or she respond?',
      'If the book you are reading is a biography, how might it be different if it were an autobiography? Or vice versa?'
    ]
  },

  // --- Reading Attitudes RA-1 to RA-2 ---
  {
    code: 'RA-1',
    category: 'Reading Attitudes',
    moduleId: 'reader-reflection',
    title: 'Reading Likes & Movie vs Book',
    depthLevel: 'Foundation',
    iconName: 'ThumbsUp',
    prompts: [
      'What have you liked most about reading this book? What have you liked the least?',
      'Do you think you would read another book by this author? Explain why or why not.',
      'Have you read other books in this genre? If so, what do you like most about the genre? If not, what drew you to this book?',
      'Would you like to see a movie based on this book, or would you prefer to keep the images you created yourself as you read? Why?'
    ]
  },
  {
    code: 'RA-2',
    category: 'Reading Attitudes',
    moduleId: 'reader-reflection',
    title: 'Reading Growth & Strategies',
    depthLevel: 'Analytical',
    iconName: 'Bookmark',
    prompts: [
      'Do you think you would want to read this book again someday? Why or why not?',
      'What have you found most challenging about reading this book? What strategies have you tried to help you respond? What additional support might you need?',
      'In what kind of setting would you most like to be reading this book? Why?',
      'What would you share with your friends about this book? Why?',
      'What have you learned about yourself as a reader from reading this book?'
    ]
  }
];

export const SAMPLE_BOOKS: BookSample[] = [
  {
    id: 'winn-dixie',
    title: 'Because of Winn-Dixie',
    author: 'Kate DiCamillo',
    genre: 'Realistic Fiction',
    gradeLevel: 'Grade 4',
    coverColor: 'from-amber-600 to-amber-800',
    summary: 'Ten-year-old India Opal Buloni moves to Naomi, Florida with her preacher father. At the local supermarket, she meets an energetic, smiling stray dog she names Winn-Dixie, who helps her make friends with eccentric townspeople and learn to forgive.',
    keyThemes: ['Friendship', 'Forgiveness', 'Loneliness to Connection'],
    suggestedBookmarks: ['C-1', 'C-7', 'T-13', 'T-10'],
    samplePassage: 'My name is India Opal Buloni, and last summer my daddy, the preacher, sent me to the store for a box of macaroni-and-cheese, some white rice, and two tomatoes and I came back with a dog. He was a big dog. And at the moment, he was tearing up the produce section of the Winn-Dixie grocery store.'
  },
  {
    id: 'hatchet',
    title: 'Hatchet',
    author: 'Gary Paulsen',
    genre: 'Survival / Adventure',
    gradeLevel: 'Grade 4-5',
    coverColor: 'from-emerald-700 to-teal-900',
    summary: 'Thirteen-year-old Brian Robeson is flying to visit his father in northern Canada when the pilot suffers a heart attack. Brian crashes the plane into a wilderness lake and must survive alone with only his windbreaker and a hatchet his mother gave him.',
    keyThemes: ['Survival', 'Courage', 'Nature', 'Inner Growth'],
    suggestedBookmarks: ['T-1', 'T-8', 'T-10', 'P-2'],
    samplePassage: 'Brian looked out the side window of the small Cessna 406 bush plane and saw the endless green carpet of northern woods. He had never felt so alone. In his belt was the leather pouch with the steel hatchet. He remembered his mother giving it to him before the flight, looking sad and distant.'
  },
  {
    id: 'percy-jackson',
    title: 'The Lightning Thief',
    author: 'Rick Riordan',
    genre: 'Mythology / Fantasy',
    gradeLevel: 'Grade 4-5',
    coverColor: 'from-sky-700 to-indigo-900',
    summary: 'Percy Jackson discovers he is actually a demigod—the son of Poseidon. Accused of stealing Zeus’s master lightning bolt, he embarks on a dangerous cross-country quest to prevent an all-out war between the Olympian gods.',
    keyThemes: ['Identity', 'Power', 'Friendship', 'Bravery'],
    suggestedBookmarks: ['FS-1', 'FS-2', 'T-4', 'P-5'],
    samplePassage: 'Look, I didn’t want to be a half-blood. If you’re reading this because you think you might be one, my advice is: close this book right now. Believe whatever lie your mom or dad told you about your birth, and try to lead a normal life. Being a half-blood is dangerous. It’s scary. Most of the time, it gets you killed in painful, nasty ways.'
  },
  {
    id: 'one-and-only-ivan',
    title: 'The One and Only Ivan',
    author: 'Katherine Applegate',
    genre: 'Animal Fiction',
    gradeLevel: 'Grade 4',
    coverColor: 'from-stone-700 to-amber-900',
    summary: 'Ivan, a silverback gorilla, has lived for twenty-seven years in a shopping mall glass enclosure. When a baby elephant named Ruby arrives and is mistreated, Ivan decides to use his artistic talent to save her and find a better life.',
    keyThemes: ['Stewardship', 'Empathy', 'Art & Voice', 'Promises'],
    suggestedBookmarks: ['T-3', 'T-9', 'C-3', 'P-1'],
    samplePassage: 'I am Ivan. I am a gorilla. It’s not as easy as it looks. Humans waste words. They toss them like banana peels and leave them to rot. Everyone knows the sounds of chimps, but gorillas don’t talk just to hear our own voices. When we speak, it matters.'
  },
  {
    id: 'esperanza-rising',
    title: 'Esperanza Rising',
    author: 'Pam Muñoz Ryan',
    genre: 'Historical Fiction',
    gradeLevel: 'Grade 4-5',
    coverColor: 'from-red-800 to-orange-950',
    summary: 'Esperanza thought she would always live a lavish life on her family ranch in Mexico. But sudden tragedy forces her and her mother to flee to a farm labor camp in California during the Great Depression, where she must learn perseverance and strength.',
    keyThemes: ['Resilience', 'Social Justice', 'Growth & Change', 'Family'],
    suggestedBookmarks: ['HF-1', 'T-10', 'T-16', 'B-2'],
    samplePassage: 'Our land is alive, Esperanza,” said Papa, taking her hand. “Can you hear it breathing?” Esperanza leaned down and pressed her ear against the warm Mexican soil. For a moment there was only silence, then a faint thrumming resonated in her chest. “Wait a little while,” Papa whispered, “and the fruit will fall into your hand.”'
  }
];

export const INITIAL_BADGES: StudentBadge[] = [
  {
    id: 'badge-char-detective',
    title: 'Character Profiler',
    description: 'Mastered 3 character analysis prompts without using trite words like “nice” or “good”.',
    icon: 'UserSearch',
    category: 'Character',
    xpValue: 150,
    unlocked: true,
    unlockedAt: 'Quest Start',
    progress: 1,
    maxProgress: 3,
    color: 'emerald',
  },
  {
    id: 'badge-plot-director',
    title: 'Plot Director',
    description: 'Completed the famous P-2 Word Cruncher (25, 10, and 5 words) and movie pitch.',
    icon: 'Clapperboard',
    category: 'Plot',
    xpValue: 200,
    unlocked: false,
    progress: 0,
    maxProgress: 2,
    color: 'sky',
  },
  {
    id: 'badge-world-cartographer',
    title: 'World Cartographer',
    description: 'Analyzed setting mood, atmosphere, and packed an expedition backpack for a book setting.',
    icon: 'Compass',
    category: 'Setting',
    xpValue: 150,
    unlocked: false,
    progress: 0,
    maxProgress: 2,
    color: 'amber',
  },
  {
    id: 'badge-mystery-sleuth',
    title: 'Master Sleuth',
    description: 'Distinguished real evidence from red herrings and analyzed detective skills.',
    icon: 'Fingerprint',
    category: 'Mystery',
    xpValue: 180,
    unlocked: false,
    progress: 0,
    maxProgress: 2,
    color: 'teal',
  },
  {
    id: 'badge-integrity-guardian',
    title: 'Integrity Guardian',
    description: 'Explored tough ethical choices, sacrifices, and what it means to stand for truth.',
    icon: 'ShieldCheck',
    category: 'Theme',
    xpValue: 220,
    unlocked: false,
    progress: 0,
    maxProgress: 2,
    color: 'indigo',
  },
  {
    id: 'badge-growth-mindset',
    title: 'Metamorphosis Scholar',
    description: 'Examined how difficult challenges caused a character to transform on the inside.',
    icon: 'Sprout',
    category: 'Theme',
    xpValue: 200,
    unlocked: false,
    progress: 0,
    maxProgress: 2,
    color: 'emerald',
  },
  {
    id: 'badge-eco-steward',
    title: 'Earth & Nature Ally',
    description: 'Analyzed how nature acts as a character or tackled human environmental responsibility.',
    icon: 'TreePine',
    category: 'Theme',
    xpValue: 160,
    unlocked: false,
    progress: 0,
    maxProgress: 1,
    color: 'green',
  },
  {
    id: 'badge-visual-critic',
    title: 'Visual Arts Critic',
    description: 'Evaluated how illustrations, typography, and cover art influence reader comprehension.',
    icon: 'Palette',
    category: 'Visuals',
    xpValue: 150,
    unlocked: false,
    progress: 0,
    maxProgress: 2,
    color: 'rose',
  },
  {
    id: 'badge-time-traveler',
    title: 'Time Traveler',
    description: 'Discovered historical details, checked for anachronisms, and connected past to present.',
    icon: 'Hourglass',
    category: 'History',
    xpValue: 200,
    unlocked: false,
    progress: 0,
    maxProgress: 2,
    color: 'orange',
  },
  {
    id: 'badge-master-critic',
    title: 'Grand SEM-R Scholar',
    description: 'Reached 500+ XP by completing critical thinking inquiries across multiple modules.',
    icon: 'Crown',
    category: 'Mastery',
    xpValue: 350,
    unlocked: false,
    progress: 150,
    maxProgress: 500,
    color: 'yellow',
  }
];

export const TRITE_WORDS = [
  'nice', 'good', 'bad', 'mean', 'cool', 'fun', 'happy', 'sad', 'mad', 'great', 'awesome', 'dumb', 'stupid', 'ok', 'okay'
];

export const VIVID_CHARACTER_WORDS = [
  { word: 'Resilient', definition: 'Bounces back from tough setbacks' },
  { word: 'Tenacious', definition: 'Never gives up, holds on firmly' },
  { word: 'Resourceful', definition: 'Finds clever ways to solve problems with what is available' },
  { word: 'Compassionate', definition: 'Deeply feels caring for others’ struggles' },
  { word: 'Impulsive', definition: 'Acts quickly before thinking through the consequences' },
  { word: 'Hesitant', definition: 'Slow to decide due to uncertainty or fear' },
  { word: 'Deceptive', definition: 'Hides true intentions to mislead others' },
  { word: 'Fiercely Loyal', definition: 'Unwaveringly stands by friends through thick and thin' },
  { word: 'Vigilant', definition: 'Alert and watchful for danger or clues' },
  { word: 'Inquisitive', definition: 'Full of curiosity and eager to learn' }
];
