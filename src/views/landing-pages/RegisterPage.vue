<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
      <form>
        <div class="mb-4">
          <label for="name" class="block mb-1 text-gray-700">Name</label>
          <input id="name" type="text" class="w-full px-4 py-2 border rounded" />
        </div>
        <div class="mb-4">
          <label for="email" class="block mb-1 text-gray-700">Email</label>
          <input id="email" type="email" class="w-full px-4 py-2 border rounded" />
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-1 text-gray-700">Password</label>
          <input id="password" type="password" class="w-full px-4 py-2 border rounded" />
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
// Form handling logic can be added here later
</script>
