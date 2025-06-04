<template>
  <section class="bg-white text-gray-900 py-20 px-6 relative overflow-hidden">
    <!-- Hero Section -->
    <div class="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      
      <!-- Text Content -->
      <div class="md:w-1/2 text-center md:text-left">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Learn Bosnian the Fun Way!<br />
          <span class="text-blue-600">Master English, One Word at a Time</span>
        </h1>
        <p class="text-lg md:text-xl mb-6 text-gray-700 max-w-md mx-auto md:mx-0">
          Interactive lessons, stories, and games that make language learning fun and easy for kids.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <router-link
            to="/register"
            class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            Start Learning Free
          </router-link>
          <router-link
            to="/demo"
            class="bg-white border border-blue-600 text-blue-600 hover:bg-blue-100 font-semibold px-8 py-3 rounded-lg transition"
          >
            Try a Demo Lesson
          </router-link>
        </div>
      </div>

      <!-- Fun Image -->
      <div class="md:w-1/2 flex justify-center relative z-10">
        <img
          ref="heroImage"
          src="/DogFlag.jpg"
          alt="Fun character"
          class="w-64 h-64 object-cover p-2 bg-yellow-200 border-4 border-blue-600 rounded-full shadow-xl childish-clip"
        />
      </div>
    </div>

    <!-- Animated Background Shapes -->
    <div class="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div>
    <div class="absolute bottom-0 left-0 w-32 h-32 bg-yellow-100 rounded-full blur-2xl opacity-50 z-0"></div>

    <!-- Features Section (Styled like mimo.org) -->
    <div class="mt-20 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-blue-950 text-white rounded-2xl p-6 shadow-md border border-blue-800">
        <div class="flex items-center justify-between mb-4">
          <span class="text-yellow-300 text-2xl">🎧</span>
          <span class="bg-blue-800 text-xs font-semibold px-2 py-1 rounded-full">FEATURE</span>
        </div>
        <h3 class="text-lg font-semibold mb-2">Audio & Video Lessons</h3>
        <p class="text-sm text-blue-100">
          Learn with native pronunciation through fun and short lessons.
        </p>
      </div>

      <div class="bg-blue-950 text-white rounded-2xl p-6 shadow-md border border-blue-800">
        <div class="flex items-center justify-between mb-4">
          <span class="text-green-300 text-2xl">🧠</span>
          <span class="bg-blue-800 text-xs font-semibold px-2 py-1 rounded-full">FEATURE</span>
        </div>
        <h3 class="text-lg font-semibold mb-2">Interactive Games</h3>
        <p class="text-sm text-blue-100">
          Memorize new words and phrases by playing mini-games and quizzes.
        </p>
      </div>

      <div class="bg-blue-950 text-white rounded-2xl p-6 shadow-md border border-blue-800">
        <div class="flex items-center justify-between mb-4">
          <span class="text-pink-300 text-2xl">📚</span>
          <span class="bg-blue-800 text-xs font-semibold px-2 py-1 rounded-full">FEATURE</span>
        </div>
        <h3 class="text-lg font-semibold mb-2">Reading & Listening Skills</h3>
        <p class="text-sm text-blue-100">
          Practice reading short stories and listening to native speakers to boost comprehension.
        </p>
      </div>

      <div class="bg-blue-950 text-white rounded-2xl p-6 shadow-md border border-blue-800">
        <div class="flex items-center justify-between mb-4">
          <span class="text-purple-300 text-2xl">✍️</span>
          <span class="bg-blue-800 text-xs font-semibold px-2 py-1 rounded-full">FEATURE</span>
        </div>
        <h3 class="text-lg font-semibold mb-2">Grammar Made Easy</h3>
        <p class="text-sm text-blue-100">
          Learn basic grammar rules through fun examples and simple explanations.
        </p>
      </div>

      <div class="bg-blue-950 text-white rounded-2xl p-6 shadow-md border border-blue-800">
        <div class="flex items-center justify-between mb-4">
          <span class="text-red-300 text-2xl">🗣️</span>
          <span class="bg-blue-800 text-xs font-semibold px-2 py-1 rounded-full">FEATURE</span>
        </div>
        <h3 class="text-lg font-semibold mb-2">Speak with Confidence</h3>
        <p class="text-sm text-blue-100">
          Practice speaking with voice-based challenges and easy dialogues.
        </p>
      </div>

      <div class="bg-blue-950 text-white rounded-2xl p-6 shadow-md border border-blue-800">
        <div class="flex items-center justify-between mb-4">
          <span class="text-blue-300 text-2xl">🌟</span>
          <span class="bg-blue-800 text-xs font-semibold px-2 py-1 rounded-full">FEATURE</span>
        </div>
        <h3 class="text-lg font-semibold mb-2">Track Your Progress</h3>
        <p class="text-sm text-blue-100">
          Stay motivated by earning stars, unlocking achievements, and completing levels.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const heroImage = ref(null)

onMounted(() => {
  gsap.from(heroImage.value, {
    scale: 0,
    opacity: 0,
    duration: 1.2,
    ease: 'back.out(1.7)',
    delay: 0.5,
  })
})
</script>

<style scoped>
.childish-clip {
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
}
</style>
