// stores/lessonStore.ts
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export type Level = "Beginner" | "Intermediate" | "Advanced";

export interface LessonItem {
  bosnian: string;
  english: string;
  audio?: string;
  image?: string;
}

export interface Lesson {
  id: number;
  title: string;
  level: Level;
  items: LessonItem[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export const useLessonStore = defineStore("lessonStore", () => {
  const selectedLevel = ref<Level | null>(null);
  const currentLesson = ref<Lesson | null>(null);
  const currentFlashcardIndex = ref(0);
  const quizStarted = ref(false);
  const currentQuestionIndex = ref(0);
  const selectedOption = ref<string | null>(null);
  const quizCompleted = ref(false);
  const score = ref(0);
  const progress = ref<Record<number, boolean>>({});

  const lessons = ref<Lesson[]>([
    {
      id: 1,
      title: "Alphabet A–J",
      level: "Beginner",
      items: [
        { bosnian: "A", english: "A" },
        { bosnian: "B", english: "B" },
        { bosnian: "C", english: "C" },
      ],
    },
    {
      id: 2,
      title: "Numbers",
      level: "Beginner",
      items: [
        { bosnian: "Dž", english: "Dž" },
        { bosnian: "Đ", english: "Đ" },
        { bosnian: "E", english: "E" },
      ],
    },
  ]);

  const selectLevel = (level: Level) => {
    selectedLevel.value = level;
    currentLesson.value = null;
    currentFlashcardIndex.value = 0;
  };

  const startLesson = (lesson: Lesson) => {
    currentLesson.value = lesson;
    currentFlashcardIndex.value = 0;
  };

  const nextFlashcard = () => {
    if (
      currentLesson.value &&
      currentFlashcardIndex.value < currentLesson.value.items.length - 1
    ) {
      currentFlashcardIndex.value++;
    }
  };

  const generateQuizFromLesson = (lesson: Lesson): QuizQuestion[] => {
    return lesson.items.map((item) => {
      const correct = item.english;
      const options = [correct];
      while (options.length < 4) {
        const random =
          lesson.items[Math.floor(Math.random() * lesson.items.length)].english;
        if (!options.includes(random)) options.push(random);
      }
      options.sort(() => Math.random() - 0.5);
      return {
        question: item.bosnian,
        options,
        correctAnswer: correct,
      };
    });
  };

  const currentQuiz = computed(() => {
    return currentLesson.value
      ? generateQuizFromLesson(currentLesson.value)
      : [];
  });

  const startQuiz = () => {
    quizStarted.value = true;
    currentQuestionIndex.value = 0;
    selectedOption.value = null;
    quizCompleted.value = false;
    score.value = 0;
  };

  const submitAnswer = () => {
    if (!quizStarted.value || !currentLesson.value) return;

    const quiz = currentQuiz.value;
    const current = quiz[currentQuestionIndex.value];
    if (selectedOption.value === current.correctAnswer) {
      score.value++;
    }

    if (currentQuestionIndex.value < quiz.length - 1) {
      currentQuestionIndex.value++;
      selectedOption.value = null;
    } else {
      quizCompleted.value = true;
      progress.value[currentLesson.value.id] = true;
    }
  };

  const resetQuiz = () => {
    quizStarted.value = false;
    currentQuestionIndex.value = 0;
    selectedOption.value = null;
    quizCompleted.value = false;
    score.value = 0;
  };

  const getLessonProgress = (lessonId: number): boolean => {
    return !!progress.value[lessonId];
  };

  const levelProgress = computed(() => {
    if (!selectedLevel.value) return 0;
    const levelLessons = lessons.value.filter(
      (lesson) => lesson.level === selectedLevel.value
    );
    const completed = levelLessons.filter(
      (lesson) => progress.value[lesson.id]
    ).length;
    return Math.round((completed / levelLessons.length) * 100);
  });

  return {
    selectedLevel,
    currentLesson,
    currentFlashcardIndex,
    quizStarted,
    currentQuestionIndex,
    selectedOption,
    quizCompleted,
    score,
    lessons,
    progress,
    selectLevel,
    startLesson,
    nextFlashcard,
    startQuiz,
    submitAnswer,
    resetQuiz,
    getLessonProgress,
    currentQuiz,
    levelProgress,
  };
});
