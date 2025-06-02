<script setup lang="ts">
import { ref, computed } from "vue";
import type { Lesson, Flashcard, Quiz, LessonScore } from "../types/lesson";

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
];

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

const currentQuiz = computed(() => {
  if (!currentLesson.value) return null;
  return generateQuizFromLesson(currentLesson.value);
});

const selectLevel = (level: "Beginner" | "Intermediate" | "Advanced") => {
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

  if (currentFlashcardIndex.value < currentLesson.value.flashcards.length - 1) {
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
    answer === currentQuiz.value.questions[currentQuizIndex.value].correctAnswer
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
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-8 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Bosanski Jezik</h1>
        <RouterLink
          to="/courses"
          class="text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          ← Back to Home
        </RouterLink>
      </div>

      <!-- Level Selection -->
      <div v-if="!selectedLevel" class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="level in ['Beginner', 'Intermediate', 'Advanced']"
          :key="level"
          @click="selectLevel(level as any)"
          class="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition-all"
        >
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-xl font-semibold text-gray-900">{{ level }}</h2>
            <div
              class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center"
            >
              <span class="text-blue-600 text-xl font-bold">
                {{ levelProgress }}%
              </span>
            </div>
          </div>
          <p class="text-gray-600 mb-4">
            {{
              level === "Beginner"
                ? "Start your journey"
                : level === "Intermediate"
                ? "Build your skills"
                : "Master the language"
            }}
          </p>
          <div class="mt-4 bg-gray-200 rounded-full h-2">
            <div
              class="bg-blue-600 h-2 rounded-full transition-all duration-500"
              :style="{ width: `${levelProgress}%` }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Lesson Selection -->
      <div v-else-if="!currentLesson" class="space-y-6">
        <div class="flex justify-between items-center mb-6">
          <div>
            <h2 class="text-2xl font-semibold text-gray-900">
              {{ selectedLevel }}
            </h2>
            <p class="text-gray-600">Progress: {{ levelProgress }}%</p>
          </div>
          <button
            @click="selectedLevel = null"
            class="text-sm text-gray-600 hover:text-gray-900"
          >
            ← Back to Levels
          </button>
        </div>

        <div class="grid gap-4">
          <div
            v-for="lesson in levelLessons"
            :key="lesson.id"
            class="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-500 cursor-pointer"
            @click="startLesson(lesson)"
          >
            <div class="flex justify-between items-center">
              <div>
                <h3 class="text-lg font-medium text-gray-900">
                  {{ lesson.title }}
                </h3>
                <p class="text-gray-600">{{ lesson.description }}</p>
              </div>
              <div class="flex items-center space-x-4">
                <div
                  class="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center"
                >
                  <span class="text-blue-600 font-bold"
                    >{{ getLessonProgress(lesson.id) }}%</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Learning Content -->
      <div v-else class="bg-white rounded-lg shadow p-6">
        <div class="flex justify-between items-center mb-6">
          <div>
            <h2 class="text-2xl font-semibold text-gray-900">
              {{ currentLesson.title }}
            </h2>
            <p class="text-gray-600">
              {{
                isQuizMode
                  ? "Quiz Mode"
                  : `Flashcard ${currentFlashcardIndex + 1}/${
                      currentLesson.flashcards.length
                    }`
              }}
            </p>
          </div>
          <button
            @click="currentLesson = null"
            class="text-sm text-gray-600 hover:text-gray-900"
          >
            ← Back to Lessons
          </button>
        </div>

        <!-- Flashcard Mode -->
        <div v-if="!isQuizMode" class="flex flex-col items-center space-y-6">
          <div class="w-full max-w-md bg-gray-50 rounded-lg p-8 text-center">
            <h3 class="text-3xl font-bold text-gray-900 mb-4">
              {{ currentLesson.flashcards[currentFlashcardIndex].word }}
            </h3>
            <div v-if="showTranslation" class="mt-4">
              <p class="text-xl text-gray-700">
                {{
                  currentLesson.flashcards[currentFlashcardIndex].translation
                }}
              </p>
              <p
                v-if="currentLesson.flashcards[currentFlashcardIndex].example"
                class="text-sm text-gray-600 mt-2 italic"
              >
                {{ currentLesson.flashcards[currentFlashcardIndex].example }}
              </p>
            </div>
          </div>

          <div class="flex space-x-4">
            <button
              @click="toggleTranslation"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {{ showTranslation ? "Hide Translation" : "Show Translation" }}
            </button>

            <button
              v-if="currentFlashcardIndex < currentLesson.flashcards.length - 1"
              @click="nextFlashcard"
              class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Next Card
            </button>

            <button
              v-else
              @click="startQuiz"
              class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Start Quiz
            </button>
          </div>
        </div>

        <!-- Quiz Mode -->
        <div v-else class="flex flex-col items-center space-y-6">
          <div v-if="currentQuiz && !showQuizResults" class="w-full max-w-md">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">
              {{ currentQuiz.questions[currentQuizIndex].question }}
            </h3>

            <div class="space-y-4">
              <button
                v-for="option in currentQuiz.questions[currentQuizIndex]
                  .options"
                :key="option"
                @click="submitAnswer(option)"
                class="w-full text-left px-6 py-4 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                {{ option }}
              </button>
            </div>

            <div class="mt-6 text-sm text-gray-600">
              Question {{ currentQuizIndex + 1 }} of
              {{ currentQuiz.questions.length }}
            </div>
          </div>

          <!-- Quiz Results -->
          <div v-if="showQuizResults" class="w-full max-w-md text-center">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Quiz Results</h3>
            <p class="text-xl text-gray-700 mb-6">
              Score: {{ quizScore }} / {{ currentQuiz?.questions.length }}
            </p>
            <div class="space-y-4">
              <button
                @click="currentLesson = null"
                class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Back to Lessons
              </button>
              <button
                v-if="quizScore < currentQuiz!.questions.length"
                @click="startQuiz"
                class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
