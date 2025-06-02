<template>
  <section
    class="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-3xl mx-4 my-8 p-6 sm:p-10 text-white shadow-lg flex flex-col md:flex-row items-center md:justify-between gap-6"
  >
    <!-- Text content -->
    <div class="max-w-xl text-center md:text-left">
      <h2
        class="text-3xl sm:text-4xl font-extrabold tracking-wide drop-shadow-lg mb-4 select-none"
      >
        Learn, Play & Grow with ABC Djeca!
      </h2>
      <p class="text-base sm:text-lg font-medium drop-shadow-md mb-6">
        Join thousands of kids enjoying fun lessons, games, and stories that make Bosnian language learning a joy.
      </p>
      <button
        @click="$router.push('/register')"
        class="bg-white text-blue-700 font-bold px-6 py-3 rounded-full shadow-xl hover:brightness-110 transition select-none w-full sm:w-auto"
      >
        Get Started Now 🎉
      </button>
    </div>

    <!-- Icon bubbles -->
    <div class="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-8 mt-4 md:mt-0">
      <FeatureBubble icon="🎵" label="Songs" />
      <FeatureBubble icon="📚" label="Books" />
      <FeatureBubble icon="🧩" label="Games" />
      <FeatureBubble icon="🎨" label="Art" />
    </div>
  </section>
</template>

<script setup lang="ts">
import FeatureBubble from './FeatureBubble.vue'
</script>
