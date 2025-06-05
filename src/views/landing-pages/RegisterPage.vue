<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-pink-100 px-4">
    <div class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6">
      <h2 class="text-3xl font-bold text-center text-blue-700">Create Your Account</h2>

      <form @submit.prevent="handleRegister" class="space-y-4">
        <div>
          <label for="email" class="block mb-1 text-gray-700 font-semibold">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="you@example.com"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label for="password" class="block mb-1 text-gray-700 font-semibold">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Choose a strong password"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
          :disabled="loading"
        >
          <svg
            v-if="loading && !googleLoading"
            class="w-5 h-5 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
          </svg>
          <span>{{ loading && !googleLoading ? 'Signing Up...' : 'Sign Up' }}</span>
        </button>
      </form>

      <div class="flex items-center justify-center gap-4">
        <hr class="w-1/3 border-gray-300" />
        <span class="text-gray-500 text-sm">OR</span>
        <hr class="w-1/3 border-gray-300" />
      </div>

      <button
        @click="handleGoogleSignUp"
        class="w-full bg-white text-gray-800 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2"
        :disabled="googleLoading"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 48 48">
          <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l6-6C35.3 6.5 30 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 20-9 20-20 0-1.3-.1-2.7-.4-3.5z"/>
          <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.1 16.1 18.7 14 24 14c3.1 0 5.9 1.2 8 3.1l6-6C35.3 6.5 30 4 24 4 16.3 4 9.4 8.3 6.3 14.7z"/>
          <path fill="#4CAF50" d="M24 44c6 0 11.5-2.5 15.3-6.6l-7.1-5.8C29.6 34.5 27 36 24 36c-5.3 0-9.8-3.4-11.3-8l-6.7 5.2C9.3 39.6 16 44 24 44z"/>
          <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-0.9 2.5-2.7 4.7-5.1 6.2l7.1 5.8c-1.1 1.1 6.3-4.5 6.3-13.5 0-1.3-.1-2.7-.4-3.5z"/>
        </svg>
        <span>{{ googleLoading ? 'Connecting...' : 'Sign up with Google' }}</span>
      </button>

      <p class="text-center text-gray-600 text-sm mt-4">
        Already have an account?
        <RouterLink to="/login" class="text-blue-600 hover:underline">Login here</RouterLink>
      </p>

      <p v-if="errorMsg" class="text-red-500 text-center mt-2 text-sm">{{ errorMsg }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from "../../supabase/supabase"

const router = useRouter()
const email = ref('')
const password = ref('')
const loading = ref(false)
const googleLoading = ref(false)
const errorMsg = ref('')

const handleRegister = async () => {
  loading.value = true
  errorMsg.value = ''

  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  })

  loading.value = false

  if (error) {
    errorMsg.value = error.message
  } else {
    router.push('/courses')
  }
}

const handleGoogleSignUp = async () => {
  googleLoading.value = true
  errorMsg.value = ''

  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  })

  googleLoading.value = false

  if (error) {
    errorMsg.value = error.message
  }
}
</script>
