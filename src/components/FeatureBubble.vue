<template>
  <div
    class="flex flex-col items-center justify-center bg-white/30 backdrop-blur-sm rounded-full w-20 h-20 sm:w-24 sm:h-24 shadow-lg cursor-default select-none text-blue-900"
  >
    <div class="text-3xl sm:text-4xl">{{ icon }}</div>
    <span class="mt-2 font-semibold drop-shadow-md text-sm sm:text-base">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  label: string;
}>();
</script>
