<template>
  <Navbar />

  <!-- Hero Contact Section -->
  <section
    class="bg-gradient-to-b from-blue-100 via-white to-blue-50 py-16 px-6 text-gray-800 rounded-2xl shadow-md max-w-6xl mx-auto mt-8 animate-fade-in"
  >
    <div class="flex flex-col md:flex-row items-center gap-10">
      <!-- Left Side: Text and Info -->
      <div class="flex-1 space-y-6">
        <h1 class="text-4xl font-extrabold text-blue-800 text-center md:text-left animate-bounce-slow">
          Let's Talk!
        </h1>
        <p class="text-lg text-gray-700 max-w-md text-center md:text-left">
          Have a question or just want to say hello? We're happy to chat with you!
        </p>

        <div class="space-y-4 text-blue-800">
          <div>
            <h2 class="text-xl font-semibold">📧 Email</h2>
            <p class="text-gray-700">hello@yourbrand.com</p>
          </div>
          <div>
            <h2 class="text-xl font-semibold">📞 Phone</h2>
            <p class="text-gray-700">+1 (123) 456-7890</p>
          </div>
          <div>
            <h2 class="text-xl font-semibold">🕘 Hours</h2>
            <p class="text-gray-700">Monday – Friday, 9am – 5pm</p>
          </div>
        </div>
      </div>

      <!-- Right Side: Image -->
      <div
        class="flex-1 flex justify-center animate-float"
      >
        <img
          src="/dogcontactus.jpg"
          alt="Happy Dog Illustration"
          class="max-h-72 w-auto object-contain rounded-2xl shadow-xl border-4 border-blue-200"
        />
      </div>
    </div>

    <!-- Contact Form -->
    <div
      class="mt-16 bg-white shadow-xl p-8 rounded-2xl border-2 border-blue-100 max-w-3xl mx-auto animate-fade-in-up"
    >
      <h2 class="text-2xl font-bold text-blue-800 text-center mb-6">
        Send Us a Message 
      </h2>
      <form class="grid gap-4">
        <input
          type="text"
          placeholder="Your Name"
          class="border border-blue-200 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 shadow-sm"
        />
        <input
          type="email"
          placeholder="Your Email"
          class="border border-blue-200 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 shadow-sm"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          class="border border-blue-200 rounded-2xl px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 shadow-sm resize-none"
        ></textarea>
        <button
          type="submit"
          class="bg-gradient-to-r from-blue-400 to-blue-500 hover:brightness-110 text-white font-bold px-6 py-3 rounded-full shadow-md transform hover:scale-105 transition"
        >
          🚀 Send Message
        </button>
      </form>

      <!-- Success message -->
      <p class="text-green-600 text-sm text-center mt-4">
        Thanks! We'll get back to you soon.
      </p>
    </div>
  </section>

  <Footer />
</template>

<script setup>
import Footer from './Footer.vue';
import Navbar from './Navbar.vue';
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 2.5s ease-in-out infinite;
}
</style>
