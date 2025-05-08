<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <h2>HARU MANIS</h2>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi recusandae porro quo aliquid iste quod assumenda officiis, unde odit harum veritatis at modi? Cumque harum inventore quaerat et doloribus accusamus ex, culpa dignissimos tempora possimus quo, illum officiis facere id ipsam libero reiciendis eius iusto molestiae nisi. Alias quasi in, reiciendis illum aperiam architecto nostrum. Suscipit consequuntur labore impedit eius aut earum neque quo ab obcaecati distinctio. Pariatur, placeat a itaque provident, perspiciatis labore, recusandae voluptate distinctio deserunt corporis animi commodi? Incidunt et repellendus temporibus quaerat at, omnis numquam accusantium commodi molestias fugit ex sapiente dignissimos expedita possimus, reprehenderit eius.</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
