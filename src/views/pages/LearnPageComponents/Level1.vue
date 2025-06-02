<template>
  <section class="p-6 bg-gradient-to-b from-blue-100 to-white min-h-screen">
    <h1 class="text-3xl font-bold text-blue-700 mb-6 text-center">Level 1: Beginner</h1>

    <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(lesson, index) in lessons"
        :key="index"
        class="bg-white shadow-md rounded-xl p-4 transition-transform hover:scale-105"
      >
        <h2 class="text-xl font-semibold text-blue-600 mb-2">{{ lesson.title }}</h2>
        <p class="text-sm text-gray-600 mb-2">{{ lesson.description }}</p>
        <ul class="list-disc list-inside text-gray-700 text-sm">
          <li v-for="(item, i) in lesson.content" :key="i">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const lessons = [
  {
    title: "📘 Alphabet",
    description: "Learn the Bosnian alphabet with pronunciation tips.",
    content: [
      "A - like in 'apple'",
      "B - like in 'ball'",
      "Ć - like in 'cute'",
      "Dž - like in 'jungle'",
    ],
  },
  {
    title: "👋 Greetings",
    description: "Common greetings and polite expressions.",
    content: [
      "Zdravo - Hello",
      "Dobar dan - Good day",
      "Molim - Please",
      "Hvala - Thank you",
    ],
  },
  {
    title: "🌈 Colors & 🐾 Animals",
    description: "Basic colors and animal names with visuals (coming soon).",
    content: [
      "Crvena - Red",
      "Plava - Blue",
      "Pas - Dog",
      "Mačka - Cat",
    ],
  },
  {
    title: "🎵 Songs & Flashcards",
    description: "Interactive songs and review flashcards.",
    content: [
      "ABC Bosnian Song",
      "Match the picture to the word",
      "Pronunciation repeat games",
      "Quick quizzes",
    ],
  },
];
</script>
