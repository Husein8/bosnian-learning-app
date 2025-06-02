<template>
  <Navbar />
  <div class="min-h-screen bg-gray-50 py-8 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header when a level is selected -->
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Bosanski Jezik</h1>
        <RouterLink to="/courses">
          <button
            class="text-sm cursor-pointer text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to Home
          </button>
        </RouterLink>
      </div>

      <!-- Level Selection -->
      <div v-if="!selectedLevel" class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="level in ['Beginner', 'Intermediate', 'Advanced']"
          :key="level"
          @click="selectLevel(level)"
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
              :style="{ width: levelProgress + '%' }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Lessons List -->
      <div v-else class="space-y-6">
        <div class="flex justify-between items-center mb-6">
          <div>
            <h2 class="text-2xl font-semibold text-gray-900">
              {{ selectedLevel }}
            </h2>
            <p class="text-gray-600">Progress: {{ levelProgress }}%</p>
          </div>
          <button
            @click="() => (selectedLevel = null)"
            class="text-sm text-gray-600 hover:text-gray-900"
          >
            ← Back to Levels
          </button>
        </div>

        <div class="grid gap-4">
          <div
            v-for="lesson in lessons.filter((l) => l.level === selectedLevel)"
            :key="lesson.id"
            class="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 cursor-pointer transition-colors"
            @click="startLesson(lesson)"
          >
            <div class="flex justify-between items-center">
              <div>
                <h3 class="text-lg font-medium text-gray-900">
                  {{ lesson.title }}
                </h3>
                <p class="text-gray-600 mt-1">{{ lesson.description || "" }}</p>
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
            <p
              v-if="getLessonProgress(lesson.id) === 100"
              class="text-green-600 mt-2 font-semibold"
            >
              ✅ Completed
            </p>
          </div>
        </div>

        <!-- Current Lesson Flashcards -->
        <div
          v-if="currentLesson"
          class="bg-white rounded-lg shadow p-8 mt-8 max-w-md mx-auto"
        >
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-2xl font-semibold text-gray-900">
              {{ currentLesson.title }}
            </h3>
            <button
              @click="() => (currentLesson = null)"
              class="text-sm text-gray-600 hover:text-gray-900"
            >
              ← Back to Lessons
            </button>
          </div>

          <div class="bg-gray-50 rounded-lg p-8 text-center mb-6">
            <h3 class="text-3xl font-bold text-gray-900 mb-4">
              {{ currentLesson.items[currentFlashcardIndex].bosnian }}
            </h3>
            <div v-if="showTranslation" class="mt-4">
              <p class="text-xl text-gray-700">
                {{ currentLesson.items[currentFlashcardIndex].english }}
              </p>
            </div>
          </div>

          <div class="flex justify-center space-x-4 mb-6">
            <button
              @click="toggleTranslation"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {{ showTranslation ? "Hide Translation" : "Show Translation" }}
            </button>

            <button
              v-if="currentFlashcardIndex < currentLesson.items.length - 1"
              @click="nextFlashcard"
              class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Next Card
            </button>

            <button
              v-else
              @click="startQuiz"
              class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Start Quiz
            </button>
          </div>
        </div>

        <!-- Quiz Section -->
        <div
          v-if="quizStarted"
          class="max-w-md mx-auto bg-white rounded-lg shadow p-6"
        >
          <h3 class="text-xl font-semibold text-gray-900 mb-6">
            Q{{ currentQuestionIndex + 1 }}:
            {{ currentQuiz[currentQuestionIndex].question }}
          </h3>

          <div class="space-y-4 mb-6">
            <button
              v-for="option in currentQuiz[currentQuestionIndex].options"
              :key="option"
              @click="selectedOption = option"
              :class="[
                'w-full text-left px-6 py-4 rounded-lg transition-colors',
                selectedOption === option
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-50 hover:bg-gray-100',
              ]"
            >
              {{ option }}
            </button>
          </div>

          <button
            @click="submitAnswer"
            class="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Submit
          </button>
        </div>

        <!-- Quiz Results -->
        <div
          v-if="quizCompleted"
          class="max-w-md mx-auto bg-white rounded-lg shadow p-6 text-center mt-6"
        >
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Quiz Finished!</h3>
          <p class="text-xl text-gray-700 mb-6">
            Your score: {{ score }} / {{ currentQuiz.length }}
          </p>
          <div class="space-x-4 flex justify-center">
            <button
              @click="resetQuiz"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Retry
            </button>
            <button
              @click="() => (currentLesson = null)"
              class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Back to Lessons
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useLessonStore } from "../../stores/lessonStore";
// import { useLessonStore } from "@/stores/lessonStore";

const lessonStore = useLessonStore();
const {
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
  currentQuiz,
  levelProgress,
} = storeToRefs(lessonStore);

const {
  selectLevel,
  startLesson,
  nextFlashcard,
  startQuiz,
  submitAnswer,
  resetQuiz,
  getLessonProgress,
} = lessonStore;

// Toggle translation if needed — optional
import { ref } from "vue";
import Navbar from "../../components/Navbar.vue";
const showTranslation = ref(false);
const toggleTranslation = () => {
  showTranslation.value = !showTranslation.value;
};
</script>
