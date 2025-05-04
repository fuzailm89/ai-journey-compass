
export type Question = {
  id: number;
  text: string;
  answers: {
    id: string;
    text: string;
    explanation?: string;
    value?: number;
  }[];
  isConfidenceQuestion?: boolean;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    text: "Which of the following best describes an 'AI model'?",
    answers: [
      {
        id: "1a",
        text: "A physical robot that can perform tasks",
        value: 0
      },
      {
        id: "1b",
        text: "A mathematical system trained on data to make predictions or decisions",
        value: 3
      },
      {
        id: "1c",
        text: "A human expert who understands artificial intelligence",
        value: 0
      },
      {
        id: "1d",
        text: "Software that follows specific instructions without learning",
        value: 1
      }
    ]
  },
  {
    id: 2,
    text: "What does 'LLM' stand for in the context of AI?",
    answers: [
      {
        id: "2a",
        text: "Limited Learning Machine",
        value: 0
      },
      {
        id: "2b",
        text: "Large Language Model",
        value: 3
      },
      {
        id: "2c",
        text: "Linear Logic Method",
        value: 0
      },
      {
        id: "2d",
        text: "I'm not sure",
        value: 0
      }
    ]
  },
  {
    id: 3,
    text: "Which of the following best describes 'machine learning'?",
    answers: [
      {
        id: "3a",
        text: "Computers programming themselves without human input",
        value: 1
      },
      {
        id: "3b",
        text: "Computers following step-by-step instructions from humans",
        value: 0
      },
      {
        id: "3c",
        text: "Systems improving from experience with data without explicit programming",
        value: 3
      },
      {
        id: "3d",
        text: "A method for making computers physically assemble themselves",
        value: 0
      }
    ]
  },
  {
    id: 4,
    text: "How comfortable are you explaining what an 'AI agent' is to a colleague?",
    answers: [
      {
        id: "4a",
        text: "Very comfortable - I could explain it clearly",
        value: 3
      },
      {
        id: "4b",
        text: "Somewhat comfortable - I have a general idea",
        value: 2
      },
      {
        id: "4c",
        text: "Not very comfortable - My explanation would be vague",
        value: 1
      },
      {
        id: "4d",
        text: "Not at all comfortable - I couldn't explain it",
        value: 0
      }
    ],
    isConfidenceQuestion: true
  },
  {
    id: 5,
    text: "What is 'prompt engineering' in the context of AI?",
    answers: [
      {
        id: "5a",
        text: "Building physical components for AI systems",
        value: 0
      },
      {
        id: "5b",
        text: "Creating effective instructions to get desired outputs from AI",
        value: 3
      },
      {
        id: "5c",
        text: "Writing code to develop new AI models",
        value: 1
      },
      {
        id: "5d",
        text: "Designing user interfaces for AI applications",
        value: 0
      }
    ]
  },
  {
    id: 6,
    text: "How would you rate your understanding of 'generative AI'?",
    answers: [
      {
        id: "6a",
        text: "Strong understanding",
        value: 3
      },
      {
        id: "6b",
        text: "Moderate understanding",
        value: 2
      },
      {
        id: "6c",
        text: "Basic understanding",
        value: 1
      },
      {
        id: "6d",
        text: "No understanding",
        value: 0
      }
    ],
    isConfidenceQuestion: true
  },
  {
    id: 7,
    text: "Which statement about AI and data is most accurate?",
    answers: [
      {
        id: "7a",
        text: "AI systems can function well without any training data",
        value: 0
      },
      {
        id: "7b",
        text: "More data always leads to better AI performance",
        value: 1
      },
      {
        id: "7c",
        text: "The quality and relevance of data significantly impacts AI performance",
        value: 3
      },
      {
        id: "7d",
        text: "AI only needs data during its creation, not afterward",
        value: 0
      }
    ]
  },
  {
    id: 8,
    text: "What does it mean when we say AI has 'bias'?",
    answers: [
      {
        id: "8a",
        text: "The AI has personal opinions and preferences",
        value: 0
      },
      {
        id: "8b",
        text: "The AI produces unfair or skewed outputs based on its training data",
        value: 3
      },
      {
        id: "8c",
        text: "The AI is designed to favor certain companies or products",
        value: 1
      },
      {
        id: "8d",
        text: "The AI runs more slowly on certain types of computers",
        value: 0
      }
    ]
  },
  {
    id: 9,
    text: "How confident are you in distinguishing between AI capabilities and limitations?",
    answers: [
      {
        id: "9a",
        text: "Very confident - I have a clear understanding",
        value: 3
      },
      {
        id: "9b",
        text: "Somewhat confident - I understand some aspects",
        value: 2
      },
      {
        id: "9c",
        text: "Slightly confident - My understanding is limited",
        value: 1
      },
      {
        id: "9d",
        text: "Not confident at all - I'm uncertain about what AI can/cannot do",
        value: 0
      }
    ],
    isConfidenceQuestion: true
  },
  {
    id: 10,
    text: "Which of these is NOT typically considered a type of AI?",
    answers: [
      {
        id: "10a",
        text: "Narrow AI (focused on specific tasks)",
        value: 0
      },
      {
        id: "10b",
        text: "General AI (human-level intelligence across domains)",
        value: 0
      },
      {
        id: "10c",
        text: "Super AI (beyond human intelligence)",
        value: 0
      },
      {
        id: "10d",
        text: "Simulated AI (fake AI that uses pre-programmed responses)",
        value: 3
      }
    ]
  }
];

export const calculateScore = (answers: Record<number, string>): number => {
  let totalPoints = 0;
  let possiblePoints = 0;
  
  quizQuestions.forEach(question => {
    const answerId = answers[question.id];
    if (answerId) {
      const selectedAnswer = question.answers.find(a => a.id === answerId);
      if (selectedAnswer && selectedAnswer.value !== undefined) {
        totalPoints += selectedAnswer.value;
        possiblePoints += 3; // Assuming max value for each question is 3
      }
    }
  });
  
  // Convert to percentage
  return Math.round((totalPoints / possiblePoints) * 100);
};

export const getScoreCategory = (score: number): 'beginner' | 'intermediate' | 'advanced' => {
  if (score < 40) return 'beginner';
  if (score < 75) return 'intermediate';
  return 'advanced';
};

export const getFeedback = (score: number): {
  title: string;
  description: string;
  recommendation: string;
} => {
  const category = getScoreCategory(score);
  
  switch (category) {
    case 'beginner':
      return {
        title: "AI Beginner",
        description: "You're just starting your AI journey. That's great! Everyone begins somewhere, and many professionals are in the same position.",
        recommendation: "We recommend starting with our 'AI Foundations' module to build your confidence with key terminology and concepts."
      };
    case 'intermediate':
      return {
        title: "AI Familiar",
        description: "You have some understanding of AI concepts. You're on the right track and ahead of many peers!",
        recommendation: "We suggest our 'Practical AI Applications' module to deepen your knowledge and learn how AI is being applied in your industry."
      };
    case 'advanced':
      return {
        title: "AI Proficient",
        description: "Impressive! You have a strong grasp of AI concepts and terminology. You're well-positioned to leverage AI in your work.",
        recommendation: "Check out our 'AI Strategy & Implementation' module to learn how to effectively integrate AI into workflows and decision-making."
      };
    default:
      return {
        title: "Thank you for taking the quiz!",
        description: "We're processing your results.",
        recommendation: "We'll provide personalized recommendations soon."
      };
  }
};
