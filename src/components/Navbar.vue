<template>
  <nav class="bg-gradient-to-br from-blue-50 to-white rounded-2xl mx-4 mt-4 shadow-md border border-blue-100">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center"
    >
      <!-- Logo -->
      <div class="flex items-center">
        <span class="text-2xl font-extrabold text-blue-700 select-none">ABC Djeca</span>
      </div>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center space-x-6 text-blue-700 font-semibold">
        <RouterLink to="/" class="px-3 py-2 rounded-full hover:bg-blue-100 transition flex items-center gap-1">🏠 Home</RouterLink>
        <RouterLink to="/learn" class="px-3 py-2 rounded-full hover:bg-blue-100 transition flex items-center gap-1">📚 Learn</RouterLink>
        <RouterLink to="/games" class="px-3 py-2 rounded-full hover:bg-blue-100 transition flex items-center gap-1">🎮 Play</RouterLink>
        <RouterLink to="/about" class="px-3 py-2 rounded-full hover:bg-blue-100 transition flex items-center gap-1">🌟 About</RouterLink>
        <RouterLink to="/contact" class="px-3 py-2 rounded-full hover:bg-blue-100 transition flex items-center gap-1">📞 Contact</RouterLink>

        <RouterLink to="/login">
          <button class="px-4 py-2 bg-blue-200 hover:bg-blue-300 text-blue-900 rounded-full transition font-semibold shadow-sm">
            🔐 Login
          </button>
        </RouterLink>

        <RouterLink to="/register">
          <button
            class="px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 text-blue-900 font-bold transition hover:brightness-110 shadow-sm"
          >
            ✨ Sign Up
          </button>
        </RouterLink>
      </div>

      <!-- Mobile Button -->
      <div class="md:hidden">
        <button
          @click="isOpen = !isOpen"
          class="text-blue-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            v-if="!isOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown -->
    <div
      v-if="isOpen"
      class="md:hidden bg-gradient-to-br from-blue-50 to-white rounded-xl mx-4 mt-2 p-4 text-blue-700 space-y-3 shadow-inner"
    >
      <RouterLink to="/" class="block px-3 py-2 rounded-lg hover:bg-blue-100 transition font-semibold flex items-center gap-1">🏠 Home</RouterLink>
      <RouterLink to="/learn" class="block px-3 py-2 rounded-lg hover:bg-blue-100 transition font-semibold flex items-center gap-1">📚 Learn</RouterLink>
      <RouterLink to="/games" class="block px-3 py-2 rounded-lg hover:bg-blue-100 transition font-semibold flex items-center gap-1">🎮 Play</RouterLink>
      <RouterLink to="/about" class="block px-3 py-2 rounded-lg hover:bg-blue-100 transition font-semibold flex items-center gap-1">🌟 About</RouterLink>
      <RouterLink to="/contact" class="block px-3 py-2 rounded-lg hover:bg-blue-100 transition font-semibold flex items-center gap-1">📞 Contact</RouterLink>

      <div class="flex gap-2 pt-2">
        <RouterLink to="/login" class="w-full">
          <button class="w-full px-4 py-2 bg-blue-200 hover:bg-blue-300 text-blue-900 rounded-full transition font-semibold shadow-sm">
            🔐 Login
          </button>
        </RouterLink>
        <RouterLink to="/register" class="w-full">
          <button
            class="w-full px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 text-blue-900 font-bold transition hover:brightness-110 shadow-sm"
          >
            ✨ Sign Up
          </button>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isOpen = ref(false);
</script>
