<template>
  <section
    class="py-12 bg-gray-50 mx-2 sm:mx-6 "
    aria-label="Parent Testimonials"
  >
    <h2 class="text-2xl font-bold text-center mb-6">What Parents Are Saying</h2>

    <div
      ref="scrollContainer"
      tabindex="0"
      role="list"
      class="overflow-x-auto no-scrollbar px-2 sm:px-4 md:px-12 focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-grab active:cursor-grabbing"
      aria-label="Testimonials Carousel"
      @mousedown="dragStart"
      @mouseup="dragEnd"
      @mouseleave="dragEnd"
      @mousemove="dragMove"
      @touchstart="dragStart"
      @touchend="dragEnd"
      @touchmove="dragMove"
    >
      <div class="flex gap-6 w-max select-none">
        <article
          v-for="(testimonial, index) in testimonials"
          :key="index"
          role="listitem"
          class="min-w-[280px] sm:min-w-[220px] bg-white rounded-xl shadow-md p-6 flex-shrink-0 hover:shadow-lg transition-shadow duration-300"
        >
          <img
            :src="testimonial.image"
            :alt="`Photo of ${testimonial.name}`"
            class="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 class="text-center font-semibold text-lg">{{ testimonial.name }}</h3>
          <p class="text-gray-600 text-sm mt-2 text-center italic">
            "{{ testimonial.message }}"
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const testimonials = [
  {
    name: "Amina Husić",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    message: "The app is amazing! Kids love learning through play.",
  },
  {
    name: "Adnan Selimović",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    message: "Finally, quality content for learning Bosnian language.",
  },
  {
    name: "Lejla Džafić",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    message: "Interactive content is fantastic. Highly recommended!",
  },
  {
    name: "Mirza Begić",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    message: "No ads and useful content – perfect.",
  },
  {
    name: "Selma Kovačević",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    message: "My child now knows more Bosnian than I do! 😄",
  },
];

const scrollContainer = ref<HTMLElement | null>(null);

let isDragging = false;
let startX = 0;
let scrollLeft = 0;

function dragStart(e: MouseEvent | TouchEvent) {
  isDragging = true;
  startX = getPageX(e) - (scrollContainer.value?.offsetLeft || 0);
  scrollLeft = scrollContainer.value?.scrollLeft || 0;
  e.preventDefault();
}

function dragEnd() {
  isDragging = false;
}

function dragMove(e: MouseEvent | TouchEvent) {
  if (!isDragging || !scrollContainer.value) return;
  e.preventDefault();
  const x = getPageX(e) - scrollContainer.value.offsetLeft;
  const walk = (x - startX) * 1; //scroll-fast multiplier
  scrollContainer.value.scrollLeft = scrollLeft - walk;
}

function getPageX(e: MouseEvent | TouchEvent): number {
  if (e instanceof MouseEvent) {
    return e.pageX;
  } else if (e.touches.length) {
    return e.touches[0].pageX;
  }
  return 0;
}
</script>

<style scoped>
/* Hide scrollbar for Webkit browsers */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
