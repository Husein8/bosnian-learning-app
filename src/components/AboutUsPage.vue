<script setup lang="ts">
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import logo from '../assets/LogoLilium.png';
</script>

<template>
  <div
    class="min-h-screen bg-fixed bg-repeat"
    :style="{
      backgroundImage: `url(${logo})`,
      backgroundSize: '10vw', // scale with screen width
    }"
  >
    <!-- Overlay for contrast -->
    <div class="bg-white/80 min-h-screen">
      <Navbar />

      <!-- Hero -->
      <section class="text-center px-6 py-16 max-w-screen-xl mx-auto">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-6 animate-float">
          About Our Brand
        </h1>
        <p class="text-base sm:text-lg xl:text-xl text-gray-700 max-w-3xl mx-auto">
          We're passionate about helping kids connect with their roots through engaging, fun, and modern language-learning tools.
        </p>
      </section>

      <!-- Mission -->
      <section class="bg-gray-100 px-6 py-20">
        <div class="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-2xl md:text-3xl 2xl:text-4xl font-semibold mb-4 animate-float">Our Mission</h2>
            <p class="text-gray-700 text-base xl:text-lg">
              Our mission is to help Bosnian children growing up in English-speaking environments learn their native language in a fun, interactive, and culturally meaningful way.
              Through games, stories, and interactive content, we aim to preserve language, identity, and pride.
            </p>
          </div>
          <div class="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-sm">
            Mission Image Placeholder
          </div>
        </div>
      </section>

      <!-- Story -->
      <section class="px-6 py-20">
        <div class="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1 w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-sm">
            Story Image Placeholder
          </div>
          <div class="order-1 md:order-2">
            <h2 class="text-2xl md:text-3xl 2xl:text-4xl font-semibold mb-4 animate-float">Our Story</h2>
            <p class="text-gray-700 text-base xl:text-lg">
              Born from a desire to help our own children stay connected to the Bosnian language and heritage, this project started as a small weekend idea and has grown into a
              full-fledged learning platform. With the support of educators, parents, and a growing community, we’ve turned this dream into a reality.
            </p>
          </div>
        </div>
      </section>

      <!-- Beliefs -->
      <section class="bg-gray-100 px-6 py-20">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-2xl md:text-3xl 2xl:text-4xl font-semibold mb-6 text-center animate-float">What We Believe</h2>
          <ul class="space-y-6 text-base xl:text-lg text-gray-700">
            <li>
              <strong>Language is identity:</strong> Knowing your native language strengthens your sense of self and culture.
            </li>
            <li>
              <strong>Learning should be fun:</strong> Kids learn best when they’re engaged, entertained, and curious.
            </li>
            <li>
              <strong>Access matters:</strong> Every Bosnian child, no matter where they are, should have tools to learn their language.
            </li>
          </ul>
        </div>
      </section>

      <!-- Team -->
      <section class="px-6 py-20">
        <div class="max-w-screen-xl mx-auto">
          <h2 class="text-2xl md:text-3xl 2xl:text-4xl font-semibold mb-10 text-center animate-float">Meet the Team</h2>
          <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div class="p-6 border rounded-xl shadow-md text-center bg-white hover:scale-105 transition-transform">
              <div class="w-24 h-24 mx-auto rounded-full bg-gray-300 flex items-center justify-center text-sm text-gray-500 mb-4">
                Photo
              </div>
              <h3 class="text-lg font-semibold">Amir H.</h3>
              <p class="text-sm text-gray-600">Founder</p>
              <p class="text-sm mt-2 text-gray-700">Started this project to teach his kids Bosnian in a modern way.</p>
            </div>

            <div class="p-6 border rounded-xl shadow-md text-center bg-white hover:scale-105 transition-transform">
              <div class="w-24 h-24 mx-auto rounded-full bg-gray-300 flex items-center justify-center text-sm text-gray-500 mb-4">
                Photo
              </div>
              <h3 class="text-lg font-semibold">Selma K.</h3>
              <p class="text-sm text-gray-600">Curriculum Lead</p>
              <p class="text-sm mt-2 text-gray-700">Ensures lessons are age-appropriate and fun.</p>
            </div>

            <div class="p-6 border rounded-xl shadow-md text-center bg-white hover:scale-105 transition-transform">
              <div class="w-24 h-24 mx-auto rounded-full bg-gray-300 flex items-center justify-center text-sm text-gray-500 mb-4">
                Photo
              </div>
              <h3 class="text-lg font-semibold">Lejla M.</h3>
              <p class="text-sm text-gray-600">Designer</p>
              <p class="text-sm mt-2 text-gray-700">Creates visuals that make our app colorful and intuitive.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-gray-100 px-6 py-20 text-center">
        <h2 class="text-xl sm:text-2xl 2xl:text-3xl font-semibold mb-4 animate-float">Want to work with us or learn more?</h2>
        <a
          href="/contact"
          class="inline-block mt-4 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  </div>
</template>
