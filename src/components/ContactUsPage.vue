<template>
  <Navbar />

  <section class="bg-gradient-to-b from-white to-gray-50 text-gray-800 py-12 px-6 max-w-5xl mx-auto rounded-xl">
    <h1 class="text-4xl font-bold mb-2 text-center">Contact Us</h1>
    <div class="h-1 w-24 bg-blue-600 mx-auto mb-6 rounded"></div>

    <p class="text-lg mb-10 text-center max-w-2xl mx-auto">
      Questions? Comments? Want to say hi? We'd love to hear from you.
    </p>

    <!-- Contact Info -->
    <div class="grid gap-8 md:grid-cols-2 mb-12">
      <div class="space-y-4">
        <div>
          <h2 class="text-xl font-semibold">Email</h2>
          <p class="text-gray-700">hello@yourbrand.com</p>
        </div>
        <div>
          <h2 class="text-xl font-semibold">Phone</h2>
          <p class="text-gray-700">+1 (123) 456-7890</p>
        </div>
        <div>
          <h2 class="text-xl font-semibold">Hours</h2>
          <p class="text-gray-700">Monday – Friday, 9am – 5pm</p>
        </div>
      </div>

      <!-- Styled Placeholder -->
      <div class="border border-gray-200 rounded-lg shadow-sm flex items-center justify-center h-48 bg-white">
        <span class="text-gray-400">Image Placeholder</span>
      </div>
    </div>

    <!-- Contact Form -->
    <div class="bg-white shadow-md p-6 rounded-lg border">
      <h2 class="text-2xl font-semibold mb-6 text-center">Send Us a Message</h2>
      <form class="grid gap-4">
        <input
          type="text"
          placeholder="Your Name"
          class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
        />
        <input
          type="email"
          placeholder="Your Email"
          class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
        ></textarea>
        <button
          type="submit"
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow active:scale-95 transition-transform"
        >
          Send Message
        </button>
      </form>

      <!-- Success message placeholder -->
      <p class="text-green-600 text-sm text-center mt-4">Thanks! We'll get back to you soon.</p>
    </div>
  </section>

  <Footer />
</template>

<script setup>
import Footer from './Footer.vue';
import Navbar from './Navbar.vue';

// Template-only page – no interactivity yet
</script>

<style scoped>
/* Scoped styles if needed */
</style>
