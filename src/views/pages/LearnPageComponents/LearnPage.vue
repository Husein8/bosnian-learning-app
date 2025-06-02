<template>
  <section class="p-6 bg-gradient-to-b from-blue-100 to-white min-h-screen">
    <h1 class="text-3xl font-bold text-blue-700 mb-6 text-center">Start Learning Bosnian!</h1>

    <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <router-link
        v-for="level in levels"
        :key="level.id"
        :to="`/level${level.id}`"
        class="bg-white shadow-md rounded-xl p-4 transition-transform hover:scale-105 block no-underline"
        aria-label="Go to {{ level.title }}"
      >
        <h2 class="text-xl font-semibold text-blue-600 mb-2">{{ level.title }}</h2>
        <p class="text-sm text-gray-600 mb-2">{{ level.description }}</p>
        <ul class="list-disc list-inside text-gray-700 text-sm">
          <li v-for="(topic, index) in level.topics" :key="index">{{ topic }}</li>
        </ul>
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
const levels = [
  {
    id: 1,
    title: "🌟 Level 1: Beginner",
    description: "Learn the alphabet, greetings, and basic words.",
    topics: [
      "Bosnian alphabet",
      "Colors, numbers, animals",
      "Greetings and polite phrases",
      "Simple songs and flashcards",
    ],
  },
  {
    id: 2,
    title: "🌿 Level 2: Elementary",
    description: "Form short sentences and ask simple questions.",
    topics: [
      "Family, days of the week",
      "Basic verbs",
      "Introduction phrases",
      "Short dialogues",
    ],
  },
  {
    id: 3,
    title: "🚀 Level 3: Intermediate",
    description: "Understand stories and describe actions.",
    topics: [
      "Storytelling",
      "Daily routine phrases",
      "Short Q&A",
      "Basic comprehension",
    ],
  },
  {
    id: 4,
    title: "🌈 Level 4: Advanced",
    description: "Express thoughts and write simple texts.",
    topics: [
      "Feelings & requests",
      "Descriptions",
      "Short letters or diary entries",
      "Creative expression",
    ],
  },
];
</script>
