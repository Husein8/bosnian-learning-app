<template>
  <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-blue-100 px-4">
    <div class="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl space-y-6">
      <h2 class="text-3xl font-bold text-center text-blue-600">🎉 Welcome Back, Friend!</h2>
      <p class="text-center text-gray-600 text-sm">Let's get you back to learning fun stuff!</p>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label for="email" class="block mb-1 font-semibold text-gray-700">📧 Email Address</label>
          <input
            v-model="email"
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label for="password" class="block mb-1 font-semibold text-gray-700">🔑 Password</label>
          <input
            v-model="password"
            id="password"
            type="password"
            required
            placeholder="Your password"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <RouterLink
            to="/forgot-password"
            class="block text-right text-sm text-blue-600 hover:underline mt-1"
          >
            Forgot your password?
          </RouterLink>
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
          :disabled="loading"
        >
          <svg
            v-if="loading"
            class="w-5 h-5 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
          <span>{{ loading ? 'Signing In...' : 'Sign In' }}</span>
        </button>
      </form>

      <div class="flex items-center justify-center gap-4">
        <hr class="w-1/3 border-gray-300" />
        <span class="text-gray-500 text-sm">OR</span>
        <hr class="w-1/3 border-gray-300" />
      </div>

      <button
        @click="handleGoogleSignIn"
        class="w-full bg-white border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2"
        :disabled="googleLoading"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 48 48">
          <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l6-6C35.3 6.5 30 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 20-9 20-20 0-1.3-.1-2.7-.4-3.5z"/>
          <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.1 16.1 18.7 14 24 14c3.1 0 5.9 1.2 8 3.1l6-6C35.3 6.5 30 4 24 4 16.3 4 9.4 8.3 6.3 14.7z"/>
          <path fill="#4CAF50" d="M24 44c6 0 11.5-2.5 15.3-6.6l-7.1-5.8C29.6 34.5 27 36 24 36c-5.3 0-9.8-3.4-11.3-8l-6.7 5.2C9.3 39.6 16 44 24 44z"/>
          <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-0.9 2.5-2.7 4.7-5.1 6.2l7.1 5.8c-1.1 1.1 6.3-4.5 6.3-13.5 0-1.3-.1-2.7-.4-3.5z"/>
        </svg>
        <span>{{ googleLoading ? 'Connecting...' : 'Sign in with Google' }}</span>
      </button>

      <p v-if="errorMessage" class="text-center text-red-500 text-sm mt-2 font-medium">{{ errorMessage }}</p>

      <p class="mt-4 text-center text-sm text-gray-600">
        Don’t have an account?
        <RouterLink to="/register" class="text-blue-600 hover:underline">Register here</RouterLink>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute, RouterLink } from 'vue-router'
import { supabase } from '../../supabase/supabase'

const email = ref('')
const password = ref('')
const loading = ref(false)
const googleLoading = ref(false)
const errorMessage = ref('')

const router = useRouter()
const route = useRoute()

async function handleSubmit() {
  errorMessage.value = ''
  loading.value = true

  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })

  loading.value = false

  if (error) {
    errorMessage.value = error.message
  } else {
    const redirectTo = (route.query.redirect as string) || '/courses'
    router.push(redirectTo)
  }
}

async function handleGoogleSignIn() {
  googleLoading.value = true
  errorMessage.value = ''

  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  })

  googleLoading.value = false

  if (error) {
    errorMessage.value = error.message
  }
}
</script>
