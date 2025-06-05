<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../../stores/authStore";

const email = ref("");
const authStore = useAuthStore();

const handleForgotPassword = async () => {
  await authStore.forgotPassword(email.value);
};
</script>

<template>
  <form @submit.prevent="handleForgotPassword" class="space-y-4">
    <input
      v-model="email"
      type="email"
      placeholder="Enter your email"
      required
    />
    <button type="submit">Reset Password</button>
    <p v-if="authStore.errorMessage" class="text-red-500">
      {{ authStore.errorMessage }}
    </p>
  </form>
</template>
