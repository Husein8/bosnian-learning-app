<script setup lang="ts">
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
</script>

<template>
  <div class="bg-white text-gray-900">
    <Navbar />

    <!-- Hero Section -->
    <section class="text-center px-6 py-16 max-w-4xl mx-auto">
      <h1 class="text-5xl font-bold mb-4">About Our Brand</h1>
      <p class="text-lg text-gray-700 max-w-2xl mx-auto">
        We're passionate about helping kids connect with their roots through engaging, fun, and modern language-learning tools.
      </p>
    </section>

    <!-- Mission Section -->
    <section class="bg-gray-100 px-6 py-16">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 class="text-3xl font-semibold mb-4">Our Mission</h2>
          <p class="text-gray-700">
            Our mission is to help Bosnian children growing up in English-speaking environments learn their native language in a fun, interactive, and culturally meaningful way.
            Through games, stories, and interactive content, we aim to preserve language, identity, and pride.
          </p>
        </div>
        <div class="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-sm">
          Mission Image Placeholder
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="px-6 py-16">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div class="order-2 md:order-1 w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-sm">
          Story Image Placeholder
        </div>
        <div class="order-1 md:order-2">
          <h2 class="text-3xl font-semibold mb-4">Our Story</h2>
          <p class="text-gray-700">
            Born from a desire to help our own children stay connected to the Bosnian language and heritage, this project started as a small weekend idea and has grown into a
            full-fledged learning platform. With the support of educators, parents, and a growing community, we’ve turned this dream into a reality.
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
            <strong>Language is identity:</strong> We believe that knowing your native language strengthens your sense of self and culture.
          </li>
          <li class="text-gray-700">
            <strong>Learning should be fun:</strong> Kids learn best when they’re engaged, entertained, and curious.
          </li>
          <li class="text-gray-700">
            <strong>Access matters:</strong> Every Bosnian child, no matter where they are in the world, should have tools to learn their language.
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
            <h3 class="text-lg font-semibold">Amir H.</h3>
            <p class="text-sm text-gray-600">Founder</p>
            <p class="text-sm mt-2 text-gray-700">
              A parent and visionary who started the project to teach his kids Bosnian in a modern way.
            </p>
          </div>

          <div class="p-4 border rounded-lg shadow-sm text-center">
            <div class="w-24 h-24 mx-auto rounded-full bg-gray-300 flex items-center justify-center text-sm text-gray-500 mb-4">
              Photo
            </div>
            <h3 class="text-lg font-semibold">Selma K.</h3>
            <p class="text-sm text-gray-600">Curriculum Lead</p>
            <p class="text-sm mt-2 text-gray-700">
              A teacher and language enthusiast, she ensures the lessons are age-appropriate and engaging.
            </p>
          </div>

          <div class="p-4 border rounded-lg shadow-sm text-center">
            <div class="w-24 h-24 mx-auto rounded-full bg-gray-300 flex items-center justify-center text-sm text-gray-500 mb-4">
              Photo
            </div>
            <h3 class="text-lg font-semibold">Lejla M.</h3>
            <p class="text-sm text-gray-600">Designer</p>
            <p class="text-sm mt-2 text-gray-700">
              The creative mind behind the visuals that make our app colorful, intuitive, and fun.
            </p>
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

    <Footer />
  </div>
</template>
