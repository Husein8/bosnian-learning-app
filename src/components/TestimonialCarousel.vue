<template>
  <section class="py-12 bg-gray-50">
    <h2 class="text-2xl font-bold text-center mb-6">Šta kažu roditelji?</h2>

    <div class="overflow-x-auto no-scrollbar">
      <div class="flex gap-6 px-4 md:px-12">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="min-w-[250px] bg-white rounded-xl shadow-md p-6 flex-shrink-0"
        >
          <img
            :src="testimonial.image"
            :alt="testimonial.name"
            class="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 class="text-center font-semibold text-lg">
            {{ testimonial.name }}
          </h3>
          <p class="text-gray-600 text-sm mt-2 text-center">
            "{{ testimonial.message }}"
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name: "Amina Husić",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    message: "Aplikacija je odlična! Djeca obožavaju učiti kroz igru.",
  },
  {
    name: "Adnan Selimović",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    message: "Napokon nešto kvalitetno za učenje bosanskog jezika.",
  },
  {
    name: "Lejla Džafić",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    message: "Interaktivni sadržaj je fantastičan. Sve preporuke!",
  },
  {
    name: "Mirza Begić",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    message: "Bez reklama i sa korisnim sadržajem – savršeno.",
  },
  {
    name: "Selma Kovačević",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    message: "Moje dijete sada zna više bosanskog nego ja! 😄",
  },
];
</script>

<style scoped>
/* Optional: Hide scrollbar */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
