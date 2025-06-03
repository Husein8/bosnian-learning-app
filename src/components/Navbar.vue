<template>
  <nav
    class="sticky top-0 z-50 flex items-center justify-between sm:h-10 md:justify-center py-6 px-4 mt-2 bg-transparent shadow-sm"
  >
    <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
      <div class="flex items-center justify-between w-full md:w-auto">
        <RouterLink to="/" aria-label="Home">
          <transition name="pop" appear>
            <img
              v-show="show"
              :src="logo"
              alt="Lilium Logo"
              class="h-10 w-auto"
            />
          </transition>
        </RouterLink>
        <div class="-mr-2 flex items-center md:hidden">
          <button
            type="button"
            id="main-menu"
            aria-label="Main menu"
            aria-haspopup="true"
            class="inline-flex items-center justify-center p-2 rounded-md text-blue-500 hover:text-blue-700 hover:bg-blue-100 focus:outline-none focus:bg-blue-100 focus:text-blue-700 transition duration-150 ease-in-out"
            @click="isOpen = !isOpen"
          >
            <transition name="pop" appear>
              <svg
                v-if="!isOpen && show"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
              <svg
                v-else-if="show"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </transition>
          </button>
        </div>
      </div>
    </div>

    <div class="hidden md:flex md:space-x-10 text-blue-700 font-semibold">
      <transition-group
        name="pop"
        tag="div"
        appear
        class="flex space-x-10"
        v-show="show"
      >
        <RouterLink
          key="home"
          to="/"
          class="font-medium hover:text-blue-900 transition duration-150 ease-in-out flex items-center gap-1"
        >
          🏠 Home
        </RouterLink>
        <RouterLink
          key="courses"
          to="/courses"
          class="font-medium hover:text-blue-900 transition duration-150 ease-in-out flex items-center gap-1"
        >
          📖 Learn
        </RouterLink>
        <RouterLink
          key="about"
          to="/about"
          class="font-medium hover:text-blue-900 transition duration-150 ease-in-out flex items-center gap-1"
        >
          ✨ About
        </RouterLink>
        <RouterLink
          key="contact"
          to="/contact"
          class="font-medium hover:text-blue-900 transition duration-150 ease-in-out flex items-center gap-1"
        >
          📬 Contact
        </RouterLink>
      </transition-group>
    </div>

    <div
      class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0 space-x-3"
      v-show="show"
    >
      <transition-group name="pop" tag="div" appear class="flex space-x-3">
        <RouterLink
          key="login"
          to="/login"
          class="inline-flex items-center px-4 py-2 border border-blue-400 text-blue-600 hover:text-blue-800 hover:border-blue-600 rounded-md transition duration-150 ease-in-out font-semibold"
        >
           Login
        </RouterLink>
        <RouterLink
          key="signup"
          to="/register"
          class="inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 text-blue-900 font-bold hover:brightness-110 shadow-sm transition duration-150 ease-in-out"
        >
           Sign Up
        </RouterLink>
      </transition-group>
    </div>

    <!-- Mobile menu dropdown -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="md:hidden absolute top-full inset-x-0 p-4 bg-white bg-opacity-90 rounded-b-lg shadow-lg"
      >
        <RouterLink
          to="/"
          class="block px-3 py-2 rounded-md text-blue-700 hover:bg-blue-100 font-semibold flex items-center gap-1"
          >🏠 Home</RouterLink
        >
        <RouterLink
          to="/courses"
          class="block px-3 py-2 rounded-md text-blue-700 hover:bg-blue-100 font-semibold flex items-center gap-1"
          >📖 Learn</RouterLink
        >
        <RouterLink
          to="/about"
          class="block px-3 py-2 rounded-md text-blue-700 hover:bg-blue-100 font-semibold flex items-center gap-1"
          >✨ About</RouterLink
        >
        <RouterLink
          to="/contact"
          class="block px-3 py-2 rounded-md text-blue-700 hover:bg-blue-100 font-semibold flex items-center gap-1"
          >📬 Contact</RouterLink
        >
        <RouterLink
          to="/login"
          class="block px-3 py-2 rounded-md text-blue-700 hover:bg-blue-100 font-semibold mt-2"
          > Login</RouterLink
        >
        <RouterLink
          to="/register"
          class="block px-3 py-2 rounded-md bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 text-blue-900 font-bold hover:brightness-110 mt-2"
          > Sign Up</RouterLink
        >
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import logo from "../assets/LogoLilium.png";

const isOpen = ref(false);
const show = ref(false);

onMounted(() => {
  // Delay so transition appear works nicely
  setTimeout(() => {
    show.value = true;
  }, 100);
});
</script>

<style scoped>
.pop-enter-active,
.pop-leave-active {
  transition: all 0.3s ease;
}
.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
.pop-enter-to,
.pop-leave-from {
  opacity: 1;
  transform: scale(1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
