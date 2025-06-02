<script setup lang="ts">
import { ref, computed } from "vue";
import type { Lesson, Flashcard, Quiz, LessonScore } from "../types/lesson";

const lessons: Lesson[] = [
  // Traditional Food
  {
    id: "f1",
    title: "Tradicionalna hrana",
    level: "Food",
    order: 1,
    description: "Bosanska tradicionalna jela",
    flashcards: [
      {
        word: "Ćevapi",
        translation: "Grilled meat fingers served with somun bread",
        example: "Best ćevapi can be found in Baščaršija, Sarajevo",
      },
      {
        word: "Burek",
        translation: "Meat-filled phyllo pastry",
        example: "Traditional Bosnian street food",
      },
      {
        word: "Bosanski lonac",
        translation: "Traditional Bosnian stew",
        example: "Slow-cooked meat and vegetables",
      },
    ],
  },
  // Traditional Drinks
  {
    id: "d1",
    title: "Tradicionalna pića",
    level: "Drinks",
    order: 1,
    description: "Bosanska tradicionalna pića",
    flashcards: [
      {
        word: "Bosanska kahva",
        translation: "Traditional Bosnian coffee",
        example: "Served in džezva with rahat lokum",
      },
      {
        word: "Boza",
        translation: "Traditional fermented drink",
        example: "Made from fermented corn and wheat",
      },
      {
        word: "Šerbe",
        translation: "Sweet drink made with sugar and water",
        example: "Often served during Ramadan",
      },
    ],
  },
  // Football Players
  {
    id: "fp1",
    title: "Fudbaleri",
    level: "Football",
    order: 1,
    description: "Poznati bosanski fudbaleri",
    flashcards: [
      {
        word: "Edin Džeko",
        translation: "Bosnia's all-time top scorer",
        example: "Played for Manchester City and Roma",
      },
      {
        word: "Miralem Pjanić",
        translation: "Midfielder known for his passing",
        example: "Played for Juventus and Barcelona",
      },
      {
        word: "Asmir Begović",
        translation: "National team goalkeeper",
        example: "Played for Chelsea and AC Milan",
      },
    ],
  },
  // Traditional Clothing
  {
    id: "c1",
    title: "Tradicionalna nošnja",
    level: "Clothing",
    order: 1,
    description: "Bosanska tradicionalna odjeća",
    flashcards: [
      {
        word: "Dimije",
        translation: "Traditional women's pants",
        example: "Wide, gathered at the ankle",
      },
      {
        word: "Fes",
        translation: "Traditional men's hat",
        example: "Red felt hat with black tassel",
      },
      {
        word: "Jelek",
        translation: "Embroidered vest",
        example: "Worn by both men and women",
      },
    ],
  },
  // Basketball Players
  {
    id: "bp1",
    title: "Košarkaši",
    level: "Basketball",
    order: 1,
    description: "Poznati bosanski košarkaši",
    flashcards: [
      {
        word: "Jusuf Nurkić",
        translation: "NBA center for Phoenix Suns",
        example: 'Known as the "Bosnian Beast"',
      },
      {
        word: "Džanan Musa",
        translation: "Professional basketball player",
        example: "Plays in the Spanish League",
      },
      {
        word: "Mirza Teletović",
        translation: "Former NBA player",
        example: "Played for Nets, Suns, and Bucks",
      },
    ],
  },
];

// Reuse the same logic as BosnianLanguage.vue but with culture-specific content
const userProgress = ref<{ [key: string]: LessonScore }>({});
const selectedLevel = ref<
  "Food" | "Drinks" | "Football" | "Clothing" | "Basketball" | null
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
  level: "Food" | "Drinks" | "Football" | "Clothing" | "Basketball"
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
    class="min-h-screen bg-gradient-to-b from-rose-50 to-orange-50 py-8 px-4"
  >
    <div class="max-w-4xl mx-auto">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-rose-900">Kultura i Tradicija</h1>
        <RouterLink
          to="/courses"
          class="text-sm text-rose-600 hover:text-rose-900 transition-colors"
        >
          ← Back to Home
        </RouterLink>
      </div>

      <!-- Level Selection -->
      <div v-if="!selectedLevel" class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="level in [
            'Food',
            'Drinks',
            'Football',
            'Clothing',
            'Basketball',
          ]"
          :key="level"
          @click="selectLevel(level as any)"
          class="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all transform hover:scale-105 border-2 border-transparent hover:border-rose-300"
        >
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-semibold text-rose-900">{{ level }}</h2>
            <div
              class="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center"
            >
              <span class="text-rose-600 text-xl font-bold">
                {{ levelProgress }}%
              </span>
            </div>
          </div>
          <p class="text-gray-600 mb-4">
            {{
              level === "Food"
                ? "Traditional Bosnian dishes"
                : level === "Drinks"
                ? "Traditional beverages"
                : level === "Football"
                ? "Famous football players"
                : level === "Clothing"
                ? "Traditional clothing"
                : "Basketball stars"
            }}
          </p>
          <div class="mt-4 bg-rose-50 rounded-full h-2">
            <div
              class="bg-rose-600 h-2 rounded-full transition-all duration-500"
              :style="{ width: `${levelProgress}%` }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Lesson Content -->
      <div v-else-if="!currentLesson" class="space-y-6">
        <div class="flex justify-between items-center mb-6">
          <div>
            <h2 class="text-2xl font-semibold text-rose-900">
              {{ selectedLevel }}
            </h2>
            <p class="text-rose-600">Progress: {{ levelProgress }}%</p>
          </div>
          <button
            @click="selectedLevel = null"
            class="text-sm text-rose-600 hover:text-rose-900 transition-colors"
          >
            ← Back to Categories
          </button>
        </div>

        <div class="grid gap-4">
          <div
            v-for="lesson in levelLessons"
            :key="lesson.id"
            class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg cursor-pointer transition-all transform hover:scale-102 border-2 border-transparent hover:border-rose-300"
            @click="startLesson(lesson)"
          >
            <div class="flex justify-between items-center">
              <div>
                <h3 class="text-lg font-medium text-rose-900">
                  {{ lesson.title }}
                </h3>
                <p class="text-gray-600">{{ lesson.description }}</p>
              </div>
              <div class="flex items-center space-x-4">
                <div
                  class="w-16 h-16 rounded-full bg-rose-50 flex items-center justify-center"
                >
                  <span class="text-rose-600 font-bold"
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
            <h2 class="text-2xl font-semibold text-rose-900">
              {{ currentLesson.title }}
            </h2>
            <p class="text-rose-600">
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
            class="text-sm text-rose-600 hover:text-rose-900 transition-colors"
          >
            ← Back to Lessons
          </button>
        </div>

        <!-- Learning Mode -->
        <div v-if="!isQuizMode" class="flex flex-col items-center space-y-8">
          <div
            class="w-full max-w-md bg-gradient-to-r from-rose-50 to-orange-50 rounded-2xl p-8"
          >
            <div class="text-center">
              <h3 class="text-3xl font-bold text-rose-900 mb-4">
                {{ currentLesson.flashcards[currentFlashcardIndex].word }}
              </h3>
              <div class="mt-6 space-y-4">
                <p class="text-xl text-rose-700">
                  {{
                    currentLesson.flashcards[currentFlashcardIndex].translation
                  }}
                </p>
                <p class="text-lg text-rose-600 italic">
                  {{ currentLesson.flashcards[currentFlashcardIndex].example }}
                </p>
              </div>
            </div>
          </div>

          <div class="flex space-x-4">
            <button
              v-if="currentFlashcardIndex < currentLesson.flashcards.length - 1"
              @click="nextFlashcard"
              class="px-6 py-3 bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition-colors transform hover:scale-105"
            >
              Next
            </button>

            <button
              v-else
              @click="startQuiz"
              class="px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors transform hover:scale-105"
            >
              Start Quiz
            </button>
          </div>
        </div>

        <!-- Quiz Mode -->
        <div v-else class="flex flex-col items-center space-y-8">
          <div v-if="currentQuiz && !showQuizResults" class="w-full max-w-md">
            <div
              class="bg-gradient-to-r from-rose-50 to-orange-50 rounded-2xl p-8"
            >
              <h3 class="text-xl font-semibold text-rose-900 mb-6">
                {{ currentQuiz.questions[currentQuizIndex].question }}
              </h3>

              <div class="space-y-4">
                <button
                  v-for="option in currentQuiz.questions[currentQuizIndex]
                    .options"
                  :key="option"
                  @click="submitAnswer(option)"
                  class="w-full text-left px-6 py-4 bg-white rounded-xl border-2 border-transparent hover:border-rose-300 transition-all transform hover:scale-102"
                >
                  {{ option }}
                </button>
              </div>

              <div class="mt-6 text-sm text-rose-600">
                Question {{ currentQuizIndex + 1 }} of
                {{ currentQuiz.questions.length }}
              </div>
            </div>
          </div>

          <!-- Quiz Results -->
          <div
            v-if="showQuizResults"
            class="w-full max-w-md bg-gradient-to-r from-rose-50 to-orange-50 rounded-2xl p-8 text-center"
          >
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-rose-900 mb-2">
                Quiz Results
              </h3>
              <div
                class="w-32 h-32 mx-auto rounded-full bg-white flex items-center justify-center border-4 border-rose-600"
              >
                <span class="text-3xl font-bold text-rose-600">
                  {{
                    Math.round(
                      (quizScore / currentQuiz!.questions.length) * 100
                    )
                  }}%
                </span>
              </div>
            </div>
            <p class="text-xl text-rose-700 mb-6">
              Score: {{ quizScore }} / {{ currentQuiz?.questions.length }}
            </p>
            <div class="space-y-4">
              <button
                @click="currentLesson = null"
                class="px-6 py-3 bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition-colors transform hover:scale-105"
              >
                Back to Lessons
              </button>
              <button
                v-if="quizScore < currentQuiz!.questions.length"
                @click="startQuiz"
                class="px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors transform hover:scale-105"
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
