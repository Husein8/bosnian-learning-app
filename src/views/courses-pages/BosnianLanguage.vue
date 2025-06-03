<script setup lang="ts">
import { useBosnianLanguageStore } from "../../stores/bosnianLanguage";

const store = useBosnianLanguageStore();
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-8 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Bosanski Jezik</h1>
        <RouterLink
          to="/"
          class="text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          ← Back to Home
        </RouterLink>
      </div>

      <!-- Level Selection -->
      <div
        v-if="!store.selectedLevel"
        class="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div
          v-for="level in ['Beginner', 'Intermediate', 'Advanced']"
          :key="level"
          @click="store.selectLevel(level as any)"
          class="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition-all"
        >
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-xl font-semibold text-gray-900">{{ level }}</h2>
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
              :style="{ width: `${store.levelProgress}%` }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Lesson Selection -->
      <div v-else-if="!store.currentLesson" class="space-y-6">
        <div class="flex justify-between items-center mb-6">
          <div>
            <h2 class="text-2xl font-semibold text-gray-900">
              {{ store.selectedLevel }}
            </h2>
            <p class="text-gray-600">Progress: {{ store.levelProgress }}%</p>
          </div>
          <button
            @click="store.selectLevel(null)"
            class="text-sm text-gray-600 hover:text-gray-900"
          >
            ← Back to Levels
          </button>
        </div>

        <div class="grid gap-4">
          <div
            v-for="lesson in store.levelLessons"
            :key="lesson.id"
            class="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-500 cursor-pointer"
            @click="store.startLesson(lesson)"
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
                    >{{ store.getLessonProgress(lesson.id) }}%</span
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
              {{ store.currentLesson.title }}
            </h2>
            <p class="text-gray-600">
              {{
                store.isQuizMode
                  ? "Quiz Mode"
                  : `Flashcard ${store.currentFlashcardIndex + 1}/${
                      store.currentLesson.flashcards.length
                    }`
              }}
            </p>
          </div>
          <button
            @click="store.currentLesson = null"
            class="text-sm text-gray-600 hover:text-gray-900"
          >
            ← Back to Lessons
          </button>
        </div>

        <!-- Learning Mode -->
        <div
          v-if="!store.isQuizMode"
          class="flex flex-col items-center space-y-6"
        >
          <div class="w-full max-w-md bg-gray-50 rounded-lg p-8">
            <div class="text-center">
              <h3 class="text-3xl font-bold text-gray-900 mb-4">
                {{
                  store.currentLesson.flashcards[store.currentFlashcardIndex]
                    .word
                }}
              </h3>
              <div v-if="store.showTranslation" class="mt-6 space-y-4">
                <p class="text-xl text-gray-700">
                  {{
                    store.currentLesson.flashcards[store.currentFlashcardIndex]
                      .translation
                  }}
                </p>
                <p
                  v-if="
                    store.currentLesson.flashcards[store.currentFlashcardIndex]
                      .example
                  "
                  class="text-lg text-gray-600 italic"
                >
                  {{
                    store.currentLesson.flashcards[store.currentFlashcardIndex]
                      .example
                  }}
                </p>
              </div>
            </div>
          </div>

          <div class="flex space-x-4">
            <button
              @click="store.toggleTranslation"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {{
                store.showTranslation ? "Hide Translation" : "Show Translation"
              }}
            </button>

            <button
              v-if="
                store.currentFlashcardIndex <
                store.currentLesson.flashcards.length - 1
              "
              @click="store.nextFlashcard"
              class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Next Card
            </button>

            <button
              v-else
              @click="store.startQuiz"
              class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Start Quiz
            </button>
          </div>
        </div>

        <!-- Quiz Mode -->
        <div v-else class="flex flex-col items-center space-y-6">
          <div
            v-if="store.currentQuiz && !store.showQuizResults"
            class="w-full max-w-md"
          >
            <div class="bg-gray-50 rounded-lg p-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-6">
                {{
                  store.currentQuiz.questions[store.currentQuizIndex].question
                }}
              </h3>

              <div class="space-y-4">
                <button
                  v-for="option in store.currentQuiz.questions[
                    store.currentQuizIndex
                  ].options"
                  :key="option"
                  @click="store.submitAnswer(option)"
                  class="w-full text-left px-6 py-4 bg-white rounded-lg hover:bg-gray-100"
                >
                  {{ option }}
                </button>
              </div>

              <div class="mt-6 text-sm text-gray-600">
                Question {{ store.currentQuizIndex + 1 }} of
                {{ store.currentQuiz.questions.length }}
              </div>
            </div>
          </div>

          <!-- Quiz Results -->
          <div v-if="store.showQuizResults" class="w-full max-w-md text-center">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Quiz Results</h3>
            <p class="text-xl text-gray-700 mb-6">
              Score: {{ store.quizScore }} /
              {{ store.currentQuiz?.questions.length }}
            </p>
            <div class="space-y-4">
              <button
                @click="store.currentLesson = null"
                class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Back to Lessons
              </button>
              <button
                v-if="store.quizScore < store.currentQuiz!.questions.length"
                @click="store.startQuiz"
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
