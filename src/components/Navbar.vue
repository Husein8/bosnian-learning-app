<template>
  <nav class="bg-white shadow-md fixed w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <!-- TODO: Add logo here -->
          <span class="text-xl font-bold text-blue-600">ABC Djeca</span>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center md:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600"
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

        <!-- Links -->
        <div class="hidden md:flex md:items-center space-x-6">
          <a href="#" class="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" class="text-gray-700 hover:text-blue-600">About</a>
          <a href="#" class="text-gray-700 hover:text-blue-600">Subscription</a>
          <a href="#" class="text-gray-700 hover:text-blue-600">Contact</a>
          <RouterLink to="/login">
         <button class="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
    Login
  </button>
</RouterLink>

        <RouterLink to="/register">

          <button
            class="border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-50"
          >
            Register
          </button>
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Mobile Dropdown -->
    <div v-if="isOpen" class="md:hidden px-4 pb-4 space-y-2">
      <a href="#" class="block text-gray-700 hover:text-blue-600">Home</a>
      <a href="#" class="block text-gray-700 hover:text-blue-600">About</a>
      <a href="#" class="block text-gray-700 hover:text-blue-600">Subscription</a>
      <a href="#" class="block text-gray-700 hover:text-blue-600">Contact</a>
      <div class="flex gap-2 pt-2">
        <button
          class="w-full bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
        >
          Login
        </button>
        <button
          class="w-full border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-50"
        >
          Register
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from 'vue-router';

const isOpen = ref(false);
</script>
