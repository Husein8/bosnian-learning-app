<template>
  <section class="min-h-screen flex items-center justify-center bg-gray-50 px-6">
    <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-3xl font-bold text-center mb-8 text-blue-600">Sign In</h2>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label for="email" class="block mb-2 font-semibold text-gray-700">Email Address</label>
          <input
            v-model="email"
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label for="password" class="block mb-2 font-semibold text-gray-700">Password</label>
          <input
            v-model="password"
            id="password"
            type="password"
            required
            placeholder="Enter your password"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Sign In
        </button>
      </form>

      
      <p class="mt-6 text-center text-gray-600">
        Don't have an account?
        <RouterLink to="/register">
          <a href="/register" class="text-blue-600 hover:underline">Register here</a>
        </RouterLink>
        
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router';

const email = ref('')
const password = ref('')

function handleSubmit() {
  // Placeholder for sign-in logic
  alert(`Signing in with\nEmail: ${email.value}\nPassword: ${password.value}`)
  // Here you would add your authentication logic
}
</script>
