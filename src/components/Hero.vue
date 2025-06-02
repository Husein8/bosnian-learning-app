<template>
  <section class="bg-white text-gray-900 py-16 px-6">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
      <!-- Text Content -->
      <div class="md:w-1/2 text-center md:text-left">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Learn Bosnian the Fun Way
        </h1>
        <p class="text-lg md:text-xl mb-6 text-gray-700">
          Interactive lessons for kids who speak English. Simple, fun, and totally beginner-friendly!
        </p>
        <router-link
          to="/register"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition"
        >
          Start Learning Free
        </router-link>
      </div>

      <!-- Fun Icon Image -->
      <div class="md:w-1/2 flex justify-center">
        <img
          ref="popImage"
          src="/DogFlag.jpg"
          alt="Dog with Flag"
          class="w-64 h-64 object-cover p-2 bg-yellow-100 border-4 border-pink-300 rounded-full shadow-xl childish-clip"
        />
      </div>
    </div>

    <!-- Features Section -->
    <div class="mt-20 grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
      <div class="text-center px-4">
        <div class="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-3xl">
          🎧
        </div>
        <h2 class="text-xl font-semibold mb-2">Audio & Video Lessons</h2>
        <p class="text-gray-700 text-sm">
          Learn with native pronunciation through fun and short lessons.
        </p>
      </div>

      <div class="text-center px-4">
        <div class="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-3xl">
          🧠
        </div>
        <h2 class="text-xl font-semibold mb-2">Interactive Games</h2>
        <p class="text-gray-700 text-sm">
          Memorize new words and phrases by playing mini-games and quizzes.
        </p>
      </div>

      <div class="text-center px-4">
        <div class="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-3xl">
          👩‍🏫
        </div>
        <h2 class="text-xl font-semibold mb-2">Learn with Confidence</h2>
        <p class="text-gray-700 text-sm">
          Build confidence step-by-step with structured beginner-friendly paths.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const popImage = ref(null)

onMounted(() => {
  gsap.from(popImage.value, {
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
