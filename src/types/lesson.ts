export interface Flashcard {
  word: string;
  translation: string;
  example?: string;
}

export interface Quiz {
  id: string;
  lessonId: string;
  questions: {
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
}

export interface LessonScore {
  lessonId: string;
  score: number;
  totalQuestions: number;
  completedAt: Date;
}

export interface CategoryScore {
  category: "Beginner" | "Intermediate" | "Advanced";
  totalScore: number;
  completedLessons: number;
  lastAttempt: Date;
}

export interface Lesson {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  order: number;
  description: string;
  flashcards: Flashcard[];
}
