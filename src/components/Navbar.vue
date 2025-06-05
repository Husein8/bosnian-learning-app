<template>
  <nav
    class="sticky top-0 z-50 bg-gradient-to-br from-blue-50 to-white rounded-2xl mx-4 my-4 shadow-md border border-blue-100"
  >
    <div class="px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center space-x-3">
        <img :src="logo" alt="ABC Djeca Logo" class="h-10 w-auto" />
        <span class="text-2xl font-extrabold text-blue-700 select-none">
          Lilium
        </span>
      </div>

      <!-- Desktop Links -->
      <div
        class="hidden md:flex items-center space-x-6 text-blue-700 font-semibold"
      >
        <RouterLink
          to="/"
          class="px-3 py-2 rounded-full hover:bg-blue-100 transition flex items-center gap-1"
          >🏠 Home</RouterLink
        >
        <RouterLink
          to="/courses"
          class="px-3 py-2 rounded-full hover:bg-blue-100 transition flex items-center gap-1"
          >📚 Learn</RouterLink
        >
        <RouterLink
          to="/about"
          class="px-3 py-2 rounded-full hover:bg-blue-100 transition flex items-center gap-1"
          >🌟 About</RouterLink
        >
        <RouterLink
          to="/contact"
          class="px-3 py-2 rounded-full hover:bg-blue-100 transition flex items-center gap-1"
          >📞 Contact</RouterLink
        >

        <template v-if="authStore.user">
          <button
            @click="authStore.logout"
            class="px-4 py-2 text-red-600 border border-red-200 hover:bg-red-50 rounded-full font-semibold transition"
          >
            🚪 Log Out
          </button>
        </template>
        <template v-else>
          <RouterLink to="/login">
            <button
              class="px-4 py-2 bg-blue-200 hover:bg-blue-300 text-blue-900 rounded-full transition font-semibold shadow-sm"
            >
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
        </template>
      </div>

      <!-- Mobile Button -->
      <div class="md:hidden">
        <button
          @click="isOpen = !isOpen"
          class="text-blue-700 focus:outline-none cursor-pointer"
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
      <RouterLink
        to="/"
        class="px-3 py-2 rounded-lg hover:bg-blue-100 transition font-semibold flex items-center gap-1"
        >🏠 Home</RouterLink
      >
      <RouterLink
        to="/courses"
        class="px-3 py-2 rounded-lg hover:bg-blue-100 transition font-semibold flex items-center gap-1"
        >📚 Learn</RouterLink
      >
      <RouterLink
        to="/about"
        class="px-3 py-2 rounded-lg hover:bg-blue-100 transition font-semibold flex items-center gap-1"
        >🌟 About</RouterLink
      >
      <RouterLink
        to="/contact"
        class="px-3 py-2 rounded-lg hover:bg-blue-100 transition font-semibold flex items-center gap-1"
        >📞 Contact</RouterLink
      >

      <div class="flex flex-col gap-2 pt-2">
        <template v-if="authStore.user">
          <button
            @click="authStore.logout"
            class="w-full cursor-pointer px-3 py-2 bg-red-100 hover:bg-red-200 text-red-700 font-semibold rounded-full transition"
          >
            🚪 Log Out
          </button>
        </template>
        <template v-else>
          <RouterLink to="/login" class="w-full">
            <button
              class="w-full px-2 py-2 bg-blue-200 hover:bg-blue-300 text-blue-900 rounded-full transition font-semibold shadow-sm"
            >
              🔐 Login
            </button>
          </RouterLink>
          <RouterLink to="/register" class="w-full">
            <button
              class="w-full px-2 py-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 text-blue-900 font-bold transition hover:brightness-110 shadow-sm"
            >
              ✨ Sign Up
            </button>
          </RouterLink>
        </template>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
// import { supabase } from "../supabase/supabase";
import { RouterLink } from "vue-router";
import logo from "../assets/LogoLilium.png";
import { useAuthStore } from "../stores/authStore";

const isOpen = ref(false);
const authStore = useAuthStore();

// onMounted(() => {
//   supabase.auth.getUser().then(({ data }) => {
//     user.value = data.user;
//   });

//   supabase.auth.onAuthStateChange((_, session) => {
//     user.value = session?.user || null;
//   });
// });
</script>
