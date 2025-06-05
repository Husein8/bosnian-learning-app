<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useAuthStore } from "../../stores/authStore";
import gsap from "gsap";

const email = ref("");
const password = ref("");
const authStore = useAuthStore();

const handleLogin = async () => {
  await authStore.login(email.value, password.value);
};

onMounted(() => {
  gsap.from(".login-card", {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out",
  });
});
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <form
      @submit.prevent="handleLogin"
      class="login-card w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6"
    >
      <h2 class="text-2xl font-bold text-center text-gray-800">Login</h2>

      <input
        v-model="email"
        type="email"
        placeholder="Email"
        required
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
        :disabled="authStore.loading"
      >
        {{ authStore.loading ? "Logging in..." : "Login" }}
      </button>

      <p v-if="authStore.errorMessage" class="text-red-500 text-center">
        {{ authStore.errorMessage }}
      </p>
    </form>
  </div>
</template>
