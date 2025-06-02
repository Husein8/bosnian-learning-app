<script setup lang="ts">
import { ref, computed } from "vue";
import type { Lesson, Flashcard, Quiz, LessonScore } from "../types/lesson";

const lessons: Lesson[] = [
  // Rivers
  {
    id: "r1",
    title: "Rijeke BiH",
    level: "Rivers",
    order: 1,
    description: "Najveće rijeke Bosne i Hercegovine",
    flashcards: [
      {
        word: "Drina",
        translation: "The longest river in BiH (346 km)",
        example: "Drina forms the border with Serbia",
      },
      {
        word: "Bosna",
        translation: "The river that gave Bosnia its name",
        example: "Flows through Sarajevo and Zenica",
      },
      {
        word: "Neretva",
        translation: "Famous for its emerald color",
        example: "Flows through Mostar and its famous bridge",
      },
    ],
  },
  // Mountains
  {
    id: "m1",
    title: "Planine BiH",
    level: "Mountains",
    order: 1,
    description: "Planinski vrhovi i olimpijske planine",
    flashcards: [
      {
        word: "Jahorina",
        translation: "1,916m high Olympic mountain",
        example: "Host of 1984 Winter Olympics",
      },
      {
        word: "Bjelašnica",
        translation: "2,067m high Olympic mountain",
        example: "Popular ski resort near Sarajevo",
      },
      {
        word: "Igman",
        translation: "1,502m high mountain",
        example: "Known for ski jumping competitions",
      },
    ],
  },
  // Lakes
  {
    id: "l1",
    title: "Jezera BiH",
    level: "Lakes",
    order: 1,
    description: "Prirodna i vještačka jezera",
    flashcards: [
      {
        word: "Boračko jezero",
        translation: "Natural lake near Konjic",
        example: "Popular summer destination",
      },
      {
        word: "Prokoško jezero",
        translation: "Glacial lake on Vranica mountain",
        example: "Known for its unique ecosystem",
      },
      {
        word: "Jablaničko jezero",
        translation: "Artificial lake on Neretva",
        example: "Important for hydroelectric power",
      },
    ],
  },
  // Cities
  {
    id: "c1",
    title: "Gradovi BiH",
    level: "Cities",
    order: 1,
    description: "Najveći gradovi i njihove znamenitosti",
    flashcards: [
      {
        word: "Sarajevo",
        translation: "Capital city of Bosnia and Herzegovina",
        example: "Known as European Jerusalem",
      },
      {
        word: "Mostar",
        translation: "City of the Old Bridge",
        example: "Famous for its diving competition",
      },
      {
        word: "Banja Luka",
        translation: "Largest city in Republika Srpska",
        example: "Known for its tree-lined avenues",
      },
    ],
  },
  // National Parks
  {
    id: "n1",
    title: "Nacionalni parkovi",
    level: "National Parks",
    order: 1,
    description: "Zaštićena prirodna područja",
    flashcards: [
      {
        word: "Sutjeska",
        translation: "Oldest national park in BiH",
        example: "Home to Perućica primeval forest",
      },
      {
        word: "Una",
        translation: "National park around Una river",
        example: "Famous for its waterfalls",
      },
      {
        word: "Kozara",
        translation: "National park in northwest Bosnia",
        example: "Rich in cultural and historical monuments",
      },
    ],
  },
];

// Reuse the same logic as BosnianLanguage.vue but with geography-specific content
const userProgress = ref<{ [key: string]: LessonScore }>({});
const selectedLevel = ref<
  "Rivers" | "Mountains" | "Lakes" | "Cities" | "National Parks" | null
>(null);
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

// ... Rest of the logic remains the same as BosnianLanguage.vue ...
// Including generateQuizFromLesson, selectLevel, startLesson, nextFlashcard, etc.

const generateQuizFromLesson = (lesson: Lesson): Quiz => {
  const questions = lesson.flashcards.map((flashcard) => ({
    question: `What is special about ${flashcard.word}?`,
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

const selectLevel = (
  level: "Rivers" | "Mountains" | "Lakes" | "Cities" | "National Parks"
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
  <div
    class="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-50 py-8 px-4"
  >
    <div class="max-w-4xl mx-auto">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-emerald-900">Geografija BiH</h1>
        <RouterLink
          to="/courses"
          class="text-sm text-emerald-600 hover:text-emerald-900 transition-colors"
        >
          ← Back to Home
        </RouterLink>
      </div>

      <p>works</p>

      <!-- Level Selection -->
      <div v-if="!selectedLevel" class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="level in [
            'Rivers',
            'Mountains',
            'Lakes',
            'Cities',
            'National Parks',
          ]"
          :key="level"
          @click="selectLevel(level as any)"
          class="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all transform hover:scale-105 border-2 border-transparent hover:border-emerald-300"
        >
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-semibold text-emerald-900">{{ level }}</h2>
            <div
              class="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center"
            >
              <span class="text-emerald-600 text-xl font-bold">
                {{ levelProgress }}%
              </span>
            </div>
          </div>
          <p class="text-gray-600 mb-4">
            {{
              level === "Rivers"
                ? "Explore major rivers"
                : level === "Mountains"
                ? "Discover mountain peaks"
                : level === "Lakes"
                ? "Learn about lakes"
                : level === "Cities"
                ? "Major cities"
                : "Protected areas"
            }}
          </p>
          <div class="mt-4 bg-emerald-50 rounded-full h-2">
            <div
              class="bg-emerald-600 h-2 rounded-full transition-all duration-500"
              :style="{ width: `${levelProgress}%` }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Lesson Content -->
      <div v-else-if="!currentLesson" class="space-y-6">
        <div class="flex justify-between items-center mb-6">
          <div>
            <h2 class="text-2xl font-semibold text-emerald-900">
              {{ selectedLevel }}
            </h2>
            <p class="text-emerald-600">Progress: {{ levelProgress }}%</p>
          </div>
          <button
            @click="selectedLevel = null"
            class="text-sm text-emerald-600 hover:text-emerald-900 transition-colors"
          >
            ← Back to Categories
          </button>
        </div>

        <div class="grid gap-4">
          <div
            v-for="lesson in levelLessons"
            :key="lesson.id"
            class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg cursor-pointer transition-all transform hover:scale-102 border-2 border-transparent hover:border-emerald-300"
            @click="startLesson(lesson)"
          >
            <div class="flex justify-between items-center">
              <div>
                <h3 class="text-lg font-medium text-emerald-900">
                  {{ lesson.title }}
                </h3>
                <p class="text-gray-600">{{ lesson.description }}</p>
              </div>
              <div class="flex items-center space-x-4">
                <div
                  class="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center"
                >
                  <span class="text-emerald-600 font-bold"
                    >{{ getLessonProgress(lesson.id) }}%</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Learning Content -->
      <div v-else class="bg-white rounded-2xl shadow-lg p-8">
        <div class="flex justify-between items-center mb-8">
          <div>
            <h2 class="text-2xl font-semibold text-emerald-900">
              {{ currentLesson.title }}
            </h2>
            <p class="text-emerald-600">
              {{
                isQuizMode
                  ? "Quiz Mode"
                  : `Item ${currentFlashcardIndex + 1}/${
                      currentLesson.flashcards.length
                    }`
              }}
            </p>
          </div>
          <button
            @click="currentLesson = null"
            class="text-sm text-emerald-600 hover:text-emerald-900 transition-colors"
          >
            ← Back to Lessons
          </button>
        </div>

        <!-- Learning Mode -->
        <div v-if="!isQuizMode" class="flex flex-col items-center space-y-8">
          <div
            class="w-full max-w-md bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8"
          >
            <div class="text-center">
              <h3 class="text-3xl font-bold text-emerald-900 mb-4">
                {{ currentLesson.flashcards[currentFlashcardIndex].word }}
              </h3>
              <div class="mt-6 space-y-4">
                <p class="text-xl text-emerald-700">
                  {{
                    currentLesson.flashcards[currentFlashcardIndex].translation
                  }}
                </p>
                <p class="text-lg text-emerald-600 italic">
                  {{ currentLesson.flashcards[currentFlashcardIndex].example }}
                </p>
              </div>
            </div>
          </div>

          <div class="flex space-x-4">
            <button
              v-if="currentFlashcardIndex < currentLesson.flashcards.length - 1"
              @click="nextFlashcard"
              class="px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors transform hover:scale-105"
            >
              Next
            </button>

            <button
              v-else
              @click="startQuiz"
              class="px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors transform hover:scale-105"
            >
              Start Quiz
            </button>
          </div>
        </div>

        <!-- Quiz Mode -->
        <div v-else class="flex flex-col items-center space-y-8">
          <div v-if="currentQuiz && !showQuizResults" class="w-full max-w-md">
            <div
              class="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8"
            >
              <h3 class="text-xl font-semibold text-emerald-900 mb-6">
                {{ currentQuiz.questions[currentQuizIndex].question }}
              </h3>

              <div class="space-y-4">
                <button
                  v-for="option in currentQuiz.questions[currentQuizIndex]
                    .options"
                  :key="option"
                  @click="submitAnswer(option)"
                  class="w-full text-left px-6 py-4 bg-white rounded-xl border-2 border-transparent hover:border-emerald-300 transition-all transform hover:scale-102"
                >
                  {{ option }}
                </button>
              </div>

              <div class="mt-6 text-sm text-emerald-600">
                Question {{ currentQuizIndex + 1 }} of
                {{ currentQuiz.questions.length }}
              </div>
            </div>
          </div>

          <!-- Quiz Results -->
          <div
            v-if="showQuizResults"
            class="w-full max-w-md bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 text-center"
          >
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-emerald-900 mb-2">
                Quiz Results
              </h3>
              <div
                class="w-32 h-32 mx-auto rounded-full bg-white flex items-center justify-center border-4 border-emerald-600"
              >
                <span class="text-3xl font-bold text-emerald-600">
                  {{
                    Math.round(
                      (quizScore / currentQuiz!.questions.length) * 100
                    )
                  }}%
                </span>
              </div>
            </div>
            <p class="text-xl text-emerald-700 mb-6">
              Score: {{ quizScore }} / {{ currentQuiz?.questions.length }}
            </p>
            <div class="space-y-4">
              <button
                @click="currentLesson = null"
                class="px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors transform hover:scale-105"
              >
                Back to Lessons
              </button>
              <button
                v-if="quizScore < currentQuiz!.questions.length"
                @click="startQuiz"
                class="px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors transform hover:scale-105"
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
