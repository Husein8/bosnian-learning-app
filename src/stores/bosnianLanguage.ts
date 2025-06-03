import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Lesson, LessonScore, Quiz } from "../types/lesson";

export const useBosnianLanguageStore = defineStore("bosnianLanguage", () => {
  const lessons: Lesson[] = [
    {
      id: "1",
      title: "Abeceda",
      level: "Beginner",
      order: 1,
      description: "Learn the Bosnian alphabet",
      flashcards: [
        { word: "Zdravo", translation: "Hello", example: "Zdravo, kako si?" },
        { word: "Hvala", translation: "Thank you", example: "Hvala lijepo!" },
        {
          word: "Molim",
          translation: "Please/You're welcome",
          example: "Molim vas.",
        },
      ],
    },
    {
      id: "2",
      title: "Brojevi",
      level: "Beginner",
      order: 2,
      description: "Learn numbers in Bosnian",
      flashcards: [
        { word: "Jedan", translation: "One" },
        { word: "Dva", translation: "Two" },
        { word: "Tri", translation: "Three" },
      ],
    },
    {
      id: "3",
      title: "Intermediate",
      level: "Intermediate",
      order: 1,
      description: "Intermediate",
      flashcards: [
        { word: "Jedan", translation: "One" },
        { word: "Dva", translation: "Two" },
        { word: "Tri", translation: "Three" },
      ],
    },
  ];

  // State
  const userProgress = ref<{ [key: string]: LessonScore }>({});
  const selectedLevel = ref<"Beginner" | "Intermediate" | "Advanced" | null>(
    null
  );
  const currentLesson = ref<Lesson | null>(null);
  const currentFlashcardIndex = ref(0);
  const isQuizMode = ref(false);
  const currentQuizIndex = ref(0);
  const userAnswers = ref<string[]>([]);
  const quizScore = ref<number>(0);
  const showQuizResults = ref(false);
  const showTranslation = ref(false);

  // Computed
  const levelLessons = computed(() => {
    if (!selectedLevel.value) return [];
    return lessons.filter((lesson) => lesson.level === selectedLevel.value);
  });

  const levelProgress = computed(() => {
    if (!selectedLevel.value) return 0;
    const levelLessonsCount = lessons.filter(
      (l) => l.level === selectedLevel.value
    ).length;
    const completedLessons = Object.values(userProgress.value).filter(
      (score) =>
        lessons.find((l) => l.id === score.lessonId)?.level ===
        selectedLevel.value
    ).length;
    return Math.round((completedLessons / levelLessonsCount) * 100);
  });

  // Actions
  const generateQuizFromLesson = (lesson: Lesson): Quiz => {
    const questions = lesson.flashcards.map((flashcard) => ({
      question: `What is the translation of "${flashcard.word}"?`,
      options: [
        flashcard.translation,
        ...lesson.flashcards
          .filter((f) => f.word !== flashcard.word)
          .map((f) => f.translation)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3),
      ].sort(() => Math.random() - 0.5),
      correctAnswer: flashcard.translation,
    }));

    return {
      id: `quiz-${lesson.id}`,
      lessonId: lesson.id,
      questions,
    };
  };

  const selectLevel = (
    level: "Beginner" | "Intermediate" | "Advanced" | null
  ) => {
    selectedLevel.value = level;
    currentLesson.value = null;
    resetQuiz();
  };

  const startLesson = (lesson: Lesson) => {
    currentLesson.value = lesson;
    currentFlashcardIndex.value = 0;
    isQuizMode.value = false;
    showTranslation.value = false;
    resetQuiz();
  };

  const nextFlashcard = () => {
    if (!currentLesson.value) return;

    if (
      currentFlashcardIndex.value <
      currentLesson.value.flashcards.length - 1
    ) {
      currentFlashcardIndex.value++;
      showTranslation.value = false;
    }
  };

  const toggleTranslation = () => {
    showTranslation.value = !showTranslation.value;
  };

  const startQuiz = () => {
    isQuizMode.value = true;
    currentQuizIndex.value = 0;
    userAnswers.value = [];
    quizScore.value = 0;
    showQuizResults.value = false;
  };

  const resetQuiz = () => {
    isQuizMode.value = false;
    currentQuizIndex.value = 0;
    userAnswers.value = [];
    quizScore.value = 0;
    showQuizResults.value = false;
  };

  const submitAnswer = (answer: string) => {
    if (!currentQuiz.value || !currentLesson.value) return;

    userAnswers.value.push(answer);
    if (
      answer ===
      currentQuiz.value.questions[currentQuizIndex.value].correctAnswer
    ) {
      quizScore.value++;
    }

    if (currentQuizIndex.value < currentQuiz.value.questions.length - 1) {
      currentQuizIndex.value++;
    } else {
      showQuizResults.value = true;
      const lessonScore: LessonScore = {
        lessonId: currentLesson.value.id,
        score: quizScore.value,
        totalQuestions: currentQuiz.value.questions.length,
        completedAt: new Date(),
      };
      userProgress.value[currentLesson.value.id] = lessonScore;
    }
  };

  const getLessonProgress = (lessonId: string): number => {
    const score = userProgress.value[lessonId];
    if (!score) return 0;
    return Math.round((score.score / score.totalQuestions) * 100);
  };

  const currentQuiz = computed(() => {
    if (!currentLesson.value) return null;
    return generateQuizFromLesson(currentLesson.value);
  });

  return {
    // State
    lessons,
    userProgress,
    selectedLevel,
    currentLesson,
    currentFlashcardIndex,
    isQuizMode,
    currentQuizIndex,
    userAnswers,
    quizScore,
    showQuizResults,
    showTranslation,

    // Computed
    levelLessons,
    levelProgress,
    currentQuiz,

    // Actions
    selectLevel,
    startLesson,
    nextFlashcard,
    toggleTranslation,
    startQuiz,
    resetQuiz,
    submitAnswer,
    getLessonProgress,
  };
});
