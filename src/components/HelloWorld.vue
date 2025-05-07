<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">

    <h2>THIS IS A TEST</h2>

    <button type="button" @click="count++">count is {{ count }}</button>

</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
