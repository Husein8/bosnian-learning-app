<script setup lang="ts">
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';


</script>

<template>
  <div class="bg-white text-gray-900">
    <Navbar/>
    <!-- Hero Section -->
    <section class="text-center px-6 py-16 max-w-4xl mx-auto">
      <h1 class="text-5xl font-bold mb-4">[Main Headline]</h1>
      <p class="text-lg text-gray-700 max-w-2xl mx-auto">
        [Short introductory paragraph about your brand, mission, or tagline.]
      </p>
    </section>

    <!-- Mission Section -->
    <section class="bg-gray-100 px-6 py-16">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 class="text-3xl font-semibold mb-4">Our Mission</h2>
          <p class="text-gray-700">
            [Insert a few sentences here about your brand's purpose or what you aim to do.]
          </p>
        </div>
        <div class="w-full h-64 bg-gray-300 rounded-xl flex items-center justify-center text-gray-500 text-sm">
          Image Placeholder
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="px-6 py-16">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div class="order-2 md:order-1 w-full h-64 bg-gray-300 rounded-xl flex items-center justify-center text-gray-500 text-sm">
          Image Placeholder
        </div>
        <div class="order-1 md:order-2">
          <h2 class="text-3xl font-semibold mb-4">Our Story</h2>
          <p class="text-gray-700">
            [Tell a short story about how your brand was created, what inspired you, and your evolution.]
          </p>
        </div>
      </div>
    </section>

    <!-- Beliefs Section -->
    <section class="bg-gray-100 px-6 py-16">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-semibold mb-6 text-center">What We Believe</h2>
        <ul class="space-y-4">
          <li class="text-gray-700">
            <strong>[Value Title 1]:</strong> [Short explanation of the value.]
          </li>
          <li class="text-gray-700">
            <strong>[Value Title 2]:</strong> [Short explanation of the value.]
          </li>
          <li class="text-gray-700">
            <strong>[Value Title 3]:</strong> [Short explanation of the value.]
          </li>
        </ul>
      </div>
    </section>

    <!-- Meet the Team -->
    <section class="px-6 py-16">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-semibold mb-6 text-center">Meet the Team</h2>
        <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div class="p-4 border rounded-lg shadow-sm text-center">
            <div class="w-24 h-24 mx-auto rounded-full bg-gray-300 flex items-center justify-center text-sm text-gray-500 mb-4">
              Photo
            </div>
            <h3 class="text-lg font-semibold">[Name]</h3>
            <p class="text-sm text-gray-600">[Role]</p>
            <p class="text-sm mt-2 text-gray-700">[Short bio or description.]</p>
          </div>

          <div class="p-4 border rounded-lg shadow-sm text-center">
            <div class="w-24 h-24 mx-auto rounded-full bg-gray-300 flex items-center justify-center text-sm text-gray-500 mb-4">
              Photo
            </div>
            <h3 class="text-lg font-semibold">[Name]</h3>
            <p class="text-sm text-gray-600">[Role]</p>
            <p class="text-sm mt-2 text-gray-700">[Short bio or description.]</p>
          </div>

          <div class="p-4 border rounded-lg shadow-sm text-center">
            <div class="w-24 h-24 mx-auto rounded-full bg-gray-300 flex items-center justify-center text-sm text-gray-500 mb-4">
              Photo
            </div>
            <h3 class="text-lg font-semibold">[Name]</h3>
            <p class="text-sm text-gray-600">[Role]</p>
            <p class="text-sm mt-2 text-gray-700">[Short bio or description.]</p>
          </div>
        </div>
        
    
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gray-100 px-6 py-16 text-center">
      <h2 class="text-2xl font-semibold mb-4">Want to work with us or learn more?</h2>
      <a
        href="/contact"
        class="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Contact Us
      </a>
    </section>
  </div> <Footer/>
</template>
