<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1 class="">{{ msg }}</h1>

  <div>

    <h2 class="text-red-500">THIS IS A TEST</h2>

    <button type="button" @click="count++">count is {{ count }}</button>

</div>
</template>

<script>
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
