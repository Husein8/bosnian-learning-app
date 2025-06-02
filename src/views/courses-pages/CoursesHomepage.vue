<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref, onMounted } from "vue";
import Navbar from "../../components/Navbar.vue";

const showContent = ref(false);

onMounted(() => {
  setTimeout(() => {
    showContent.value = true;
  }, 500);
});
</script>

<template>
  <Navbar />
  <div
    class="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100 py-12 px-4 sm:px-6 lg:px-8 animate-rainbow-shift"
  >
    <div class="max-w-7xl mx-auto">
      <div
        class="text-center space-y-4 mb-12 transition-all duration-500"
        :class="{
          'translate-y-0 opacity-100': showContent,
          '-translate-y-10 opacity-0': !showContent,
        }"
      >
        <h1
          class="text-6xl font-bold text-indigo-900 animate-bounce-gentle mb-2"
        >
          Learn Bosnian
        </h1>
        <h2
          class="text-4xl font-bold text-indigo-700 animate-bounce-gentle-delayed mb-4"
        >
          Uči Bosanski
        </h2>
        <p class="text-xl text-indigo-600">
          Start your journey into the Bosnian language and culture!
          <br />
          <span class="text-lg text-indigo-500"
            >Započni svoje putovanje kroz bosanski jezik i kulturu!</span
          >
        </p>
      </div>

      <div
        class="transition-all duration-500 space-y-12"
        :class="{
          'translate-y-0 opacity-100': showContent,
          'translate-y-10 opacity-0': !showContent,
        }"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Language Section -->
          <RouterLink
            to="/language"
            class="group bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1 animate-float"
          >
            <div
              class="bg-indigo-100 rounded-2xl p-6 mb-6 group-hover:animate-wiggle"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3898/3898082.png"
                alt="Language"
                class="w-24 h-24 mx-auto"
              />
            </div>
            <h2
              class="text-2xl font-bold text-indigo-900 mb-2 group-hover:text-indigo-600 transition-colors"
            >
              Bosanski Jezik
            </h2>
            <p class="text-lg text-indigo-700 mb-1">Bosnian Language</p>
            <p class="text-gray-600 mb-4">
              Learn through fun interactive lessons!
              <br />
              <span class="text-sm text-indigo-500"
                >Uči kroz zabavne interaktivne lekcije!</span
              >
            </p>
            <ul class="space-y-2 text-sm text-gray-500">
              <li class="flex items-center">
                <span
                  class="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"
                ></span>
                Beginner: Alphabet, Numbers, Colors
              </li>
              <li class="flex items-center">
                <span
                  class="w-3 h-3 bg-yellow-400 rounded-full mr-2 animate-pulse"
                ></span>
                Intermediate: Greetings, Family
              </li>
              <li class="flex items-center">
                <span
                  class="w-3 h-3 bg-red-400 rounded-full mr-2 animate-pulse"
                ></span>
                Advanced: Culture, Literature
              </li>
            </ul>
          </RouterLink>

          <!-- Geography Section -->
          <RouterLink
            to="/geography"
            class="group bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1 animate-float-delayed-1"
          >
            <div
              class="bg-emerald-100 rounded-2xl p-6 mb-6 group-hover:animate-wiggle"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3069/3069613.png"
                alt="Geography"
                class="w-24 h-24 mx-auto"
              />
            </div>
            <h2
              class="text-2xl font-bold text-emerald-900 mb-2 group-hover:text-emerald-600 transition-colors"
            >
              Geografija BiH
            </h2>
            <p class="text-lg text-emerald-700 mb-1">Geography of BiH</p>
            <p class="text-gray-600 mb-4">
              Discover beautiful landscapes!
              <br />
              <span class="text-sm text-emerald-500"
                >Otkrij prelijepe pejzaže!</span
              >
            </p>
            <ul class="space-y-2 text-sm text-gray-500">
              <li class="flex items-center">
                <span
                  class="w-3 h-3 bg-blue-400 rounded-full mr-2 animate-pulse"
                ></span>
                Rijeke / Rivers
              </li>
              <li class="flex items-center">
                <span
                  class="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"
                ></span>
                Planine / Mountains
              </li>
              <li class="flex items-center">
                <span
                  class="w-3 h-3 bg-cyan-400 rounded-full mr-2 animate-pulse"
                ></span>
                Jezera / Lakes
              </li>
            </ul>
          </RouterLink>

          <!-- Culture Section -->
          <RouterLink
            to="/culture"
            class="group bg-gradient-to-br from-rose-50 to-pink-100 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1 animate-float-delayed-2"
          >
            <div
              class="bg-rose-100 rounded-2xl p-6 mb-6 group-hover:animate-wiggle"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3159/3159310.png"
                alt="Culture"
                class="w-24 h-24 mx-auto"
              />
            </div>
            <h2
              class="text-2xl font-bold text-rose-900 mb-2 group-hover:text-rose-600 transition-colors"
            >
              Kultura i Tradicija
            </h2>
            <p class="text-lg text-rose-700 mb-1">Culture and Tradition</p>
            <p class="text-gray-600 mb-4">
              Experience rich heritage!
              <br />
              <span class="text-sm text-rose-500"
                >Doživi bogato naslijeđe!</span
              >
            </p>
            <ul class="space-y-2 text-sm text-gray-500">
              <li class="flex items-center">
                <span
                  class="w-3 h-3 bg-orange-400 rounded-full mr-2 animate-pulse"
                ></span>
                Hrana / Food
              </li>
              <li class="flex items-center">
                <span
                  class="w-3 h-3 bg-purple-400 rounded-full mr-2 animate-pulse"
                ></span>
                Sportisti / Athletes
              </li>
              <li class="flex items-center">
                <span
                  class="w-3 h-3 bg-pink-400 rounded-full mr-2 animate-pulse"
                ></span>
                Nošnja / Clothing
              </li>
            </ul>
          </RouterLink>

          <!-- Games Section -->
          <!-- <RouterLink
            to="/games"
            class="group bg-gradient-to-br from-yellow-50 to-amber-100 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1 animate-float-delayed-3"
          >
            <div
              class="bg-yellow-100 rounded-2xl p-6 mb-6 group-hover:animate-wiggle"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2331/2331852.png"
                alt="Games"
                class="w-24 h-24 mx-auto"
              />
            </div>
            <h2
              class="text-2xl font-bold text-yellow-900 mb-2 group-hover:text-yellow-600 transition-colors"
            >
              Igre za Učenje
            </h2>
            <p class="text-lg text-yellow-700 mb-1">Learning Games</p>
            <p class="text-gray-600 mb-4">
              Learn while playing!
              <br />
              <span class="text-sm text-yellow-500">Uči kroz igru!</span>
            </p>
            <ul class="space-y-2 text-sm text-gray-500">
              <li class="flex items-center">
                <span
                  class="w-3 h-3 bg-yellow-400 rounded-full mr-2 animate-pulse"
                ></span>
                Memorija / Memory
              </li>
              <li class="flex items-center">
                <span
                  class="w-3 h-3 bg-orange-400 rounded-full mr-2 animate-pulse"
                ></span>
                Riječi / Words
              </li>
              <li class="flex items-center">
                <span
                  class="w-3 h-3 bg-red-400 rounded-full mr-2 animate-pulse"
                ></span>
                Kviz / Quiz
              </li>
            </ul>
          </RouterLink> -->
        </div>

        <!-- Features Section -->
        <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div
            class="bg-white/50 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-transform"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-gentle"
            >
              <span class="text-2xl">🎯</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900">Track Progress</h3>
            <p class="text-gray-600">Prati Napredak</p>
          </div>

          <div
            class="bg-white/50 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-transform"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-emerald-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-gentle-delayed"
            >
              <span class="text-2xl">⭐</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900">
              Interactive Learning
            </h3>
            <p class="text-gray-600">Interaktivno Učenje</p>
          </div>

          <div
            class="bg-white/50 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-transform"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-gentle"
            >
              <span class="text-2xl">📚</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900">Rich Content</h3>
            <p class="text-gray-600">Bogat Sadržaj</p>
          </div>

          <!-- <div
            class="bg-white/50 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-transform"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-yellow-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-gentle-delayed"
            >
              <span class="text-2xl">🎮</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900">Fun Games</h3>
            <p class="text-gray-600">Zabavne Igre</p>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.animate-rainbow-shift {
  animation: rainbowShift 20s linear infinite;
}

.animate-bounce-gentle {
  animation: bounceGentle 2s ease-in-out infinite;
}

.animate-bounce-gentle-delayed {
  animation: bounceGentle 2s ease-in-out 1s infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed-1 {
  animation: float 6s ease-in-out 1s infinite;
}

.animate-float-delayed-2 {
  animation: float 6s ease-in-out 2s infinite;
}

.animate-float-delayed-3 {
  animation: float 6s ease-in-out 3s infinite;
}

.animate-wiggle {
  animation: wiggle 1s ease-in-out infinite;
}

@keyframes rainbowShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes bounceGentle {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes wiggle {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
}

.group:hover .group-hover\:animate-wiggle {
  animation: wiggle 1s ease-in-out infinite;
}
</style>
