<template>
  <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-blue-100 px-4">
    <div class="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl space-y-6">
      <h2 class="text-2xl font-bold text-center text-blue-600">Forgot Your Password?</h2>
      <p class="text-center text-gray-600 text-sm">
        Don't worry! Enter your email and we'll send you a reset link.
      </p>

      <form @submit.prevent="handleReset" class="space-y-4">
        <div>
          <label for="email" class="block mb-1 font-semibold text-gray-700">Email Address</label>
          <input
            v-model="email"
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          :disabled="loading"
        >
          <span v-if="loading">Sending...</span>
          <span v-else>Send Reset Link</span>
        </button>
      </form>

      <p v-if="successMessage" class="text-green-600 text-center text-sm font-semibold">{{ successMessage }}</p>
      <p v-if="errorMessage" class="text-red-500 text-center text-sm font-semibold">{{ errorMessage }}</p>

      <p class="text-center text-gray-600 text-sm mt-4">
        Remembered your password?
        <RouterLink to="/login" class="text-blue-600 hover:underline">Back to Sign In</RouterLink>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { supabase } from "../../supabase/supabase"

const email = ref('')
const loading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

async function handleReset() {
  errorMessage.value = ''
  successMessage.value = ''
  loading.value = true

  const { error } = await supabase.auth.resetPasswordForEmail(email.value, {
    redirectTo: window.location.origin + '/update-password',
  })

  loading.value = false

  if (error) {
    errorMessage.value = error.message
  } else {
    successMessage.value = 'Reset link sent! Check your email 📬'
  }
}
</script>
