<template>
  <section class="py-12 bg-white" aria-label="Key Features">
    <h2 class="text-3xl font-bold text-center mb-8 text-blue-800">
      Why Choose Bosnian Buddies?
    </h2>

    <div
      ref="scrollContainer"
      class="overflow-x-auto no-scrollbar px-4 md:px-8 lg:px-16 cursor-grab active:cursor-grabbing"
    >
      <div class="flex gap-6 pb-2 select-none">
        <article
          v-for="(feature, index) in features"
          :key="index"
          class="min-w-[260px] bg-blue-50 border border-blue-200 rounded-2xl shadow p-6 flex-shrink-0 hover:shadow-md transition-shadow duration-300"
        >
          <div
            class="text-blue-500 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center text-3xl mx-auto mb-4"
          >
            {{ feature.icon }}
          </div>
          <h3 class="text-lg font-semibold text-center text-blue-700 mb-2">
            {{ feature.title }}
          </h3>
          <p class="text-sm text-blue-700 text-center">
            {{ feature.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const scrollContainer = ref<HTMLElement | null>(null)

const features = [
  {
    icon: "🎮",
    title: "Interactive Games",
    description:
      "Fun and educational games that motivate children to learn Bosnian through play.",
  },
  {
    icon: "🎵",
    title: "Songs and Stories",
    description:
      "Stories and songs that help children naturally and joyfully acquire the language.",
  },
  {
    icon: "🚫",
    title: "Ad-Free Experience",
    description: "Safe and focused learning with no distractions.",
  },
  {
    icon: "🧠",
    title: "Memory Boost",
    description: "Activities designed to strengthen vocabulary and memory retention.",
  },
  {
    icon: "📱",
    title: "Mobile Friendly",
    description: "Smooth experience across phones and tablets for learning anywhere.",
  },
  {
    icon: "🧒",
    title: "Kid-Friendly UI",
    description: "Bright visuals, simple menus, and child-safe navigation.",
  },
]

// Mouse drag scroll
onMounted(() => {
  const el = scrollContainer.value
  if (!el) return

  let isDown = false
  let startX: number
  let scrollLeft: number

  el.addEventListener('mousedown', (e) => {
    isDown = true
    el.classList.add('active')
    startX = e.pageX - el.offsetLeft
    scrollLeft = el.scrollLeft
  })

  el.addEventListener('mouseleave', () => {
    isDown = false
    el.classList.remove('active')
  })

  el.addEventListener('mouseup', () => {
    isDown = false
    el.classList.remove('active')
  })

  el.addEventListener('mousemove', (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    const walk = (x - startX) * 2 // scroll-fast
    el.scrollLeft = scrollLeft - walk
  })
})
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
