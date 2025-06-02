<template>
  <footer class="bg-white rounded-lg shadow-sm m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <img
            :src="logo"
            class="h-8"
            alt="ABC Djeca Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-blue-700">
            Lilium
          </span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
          <li>
            <a href="/about" class="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="/privacy-policy" class="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
            <a href="/licensing" class="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
            <a href="/contact" class="hover:underline">Contact</a>
          </li>
        </ul>
      </div>

      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />

      <div class="text-center text-gray-600 text-sm max-w-xl mx-auto">
        ABC Djeca is an educational platform for children aged 1 to 10, offering fun and interactive lessons, games, songs, and stories to learn the Bosnian language.
        Our mission is to foster a love of the native language and learning through play and creativity.
      </div>

      <span class="block mt-6 text-sm text-gray-500 sm:text-center">
        © 2025 ABC Djeca. All rights reserved.
      </span>
    </div>
  </footer>
</template>

<script setup>
// ✅ Use a relative path
import logo from '../assets/LogoLilium.png' // adjust if your file is deeper
</script>

<style scoped>
/* Optional additional styling if needed */
</style>
