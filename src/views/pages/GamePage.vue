<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-yellow-200 flex flex-col items-center p-6">
    <h1 class="text-4xl font-extrabold text-purple-700 mb-10 drop-shadow-lg select-none">
      🎮 Choose a Game to Play!
    </h1>

    <div v-if="!gameStarted" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl w-full">
      <button
        @click="selectGame('Word Match')"
        class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-6 rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
        aria-label="Play Word Match Game"
      >
        🔤<br />
        <span class="mt-2 block text-xl">Word Match</span>
      </button>

      <button
        @click="selectGame('Picture Quiz')"
        class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-6 rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-pink-300"
        aria-label="Play Picture Quiz Game"
      >
        🖼️<br />
        <span class="mt-2 block text-xl">Picture Quiz</span>
      </button>

      <button
        @click="selectGame('Listening Game')"
        class="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-6 rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300"
        aria-label="Play Listening Game"
      >
        🎧<br />
        <span class="mt-2 block text-xl">Listening Game</span>
      </button>
    </div>

    <transition name="fade" mode="out-in" appear>
      <div v-if="selectedGame && !gameStarted" key="game-selected" class="mt-12 p-6 bg-white rounded-3xl shadow-2xl max-w-xl w-full text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">You selected:</h2>
        <p class="text-xl text-gray-700 mb-6 select-none">{{ selectedGame }}</p>
        <button
          @click="startGame"
          class="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:brightness-110 transition focus:outline-none focus:ring-4 focus:ring-purple-300"
        >
          Start Game 🚀
        </button>
        <button
          @click="selectedGame = ''"
          class="mt-4 text-purple-600 underline hover:text-purple-800 focus:outline-none"
        >
          Choose another game
        </button>
      </div>
    </transition>

    <!-- Word Match Game -->
    <div v-if="gameStarted && selectedGame === 'Word Match'" class="mt-12 max-w-xl w-full bg-white rounded-3xl shadow-2xl p-6 text-center">
      <h2 class="text-3xl font-bold text-purple-700 mb-6 select-none">Word Match: Unscramble the word!</h2>
      <p class="text-2xl mb-4 font-mono select-none">{{ scrambledWord }}</p>
      <input
        v-model="userGuess"
        type="text"
        placeholder="Type your guess here"
        class="border border-purple-300 rounded-lg p-2 w-full text-center text-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
        @keyup.enter="checkWordMatch"
      />
      <div class="mt-4 space-x-4">
        <button
          @click="checkWordMatch"
          class="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition"
        >
          Check
        </button>
        <button
          @click="resetWordMatch"
          class="bg-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-400 transition"
        >
          New Word
        </button>
      </div>
      <p class="mt-4 text-lg select-none" :class="{'text-green-600': isCorrect, 'text-red-600': isCorrect === false}">
        {{ feedbackMessage }}
      </p>
      <button @click="quitGame" class="mt-8 text-purple-600 underline hover:text-purple-800 focus:outline-none">
        Quit Game
      </button>
    </div>

    <!-- Picture Quiz Game -->
    <div v-if="gameStarted && selectedGame === 'Picture Quiz'" class="mt-12 max-w-xl w-full bg-white rounded-3xl shadow-2xl p-6 text-center">
      <h2 class="text-3xl font-bold text-pink-700 mb-6 select-none">Picture Quiz: What is this?</h2>
      <div class="text-9xl mb-6 select-none">{{ currentEmoji }}</div>
      <input
        v-model="pictureGuess"
        type="text"
        placeholder="Type your answer here"
        class="border border-pink-300 rounded-lg p-2 w-full text-center text-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
        @keyup.enter="checkPictureQuiz"
      />
      <div class="mt-4 space-x-4">
        <button
          @click="checkPictureQuiz"
          class="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
        >
          Check
        </button>
        <button
          @click="resetPictureQuiz"
          class="bg-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-400 transition"
        >
          New Picture
        </button>
      </div>
      <p class="mt-4 text-lg select-none" :class="{'text-green-600': pictureCorrect, 'text-red-600': pictureCorrect === false}">
        {{ pictureFeedback }}
      </p>
      <button @click="quitGame" class="mt-8 text-pink-600 underline hover:text-pink-800 focus:outline-none">
        Quit Game
      </button>
    </div>

    <!-- Listening Game -->
    <div v-if="gameStarted && selectedGame === 'Listening Game'" class="mt-12 max-w-xl w-full bg-white rounded-3xl shadow-2xl p-6 text-center">
      <h2 class="text-3xl font-bold text-yellow-700 mb-6 select-none">Listening Game: Click when you hear the beep!</h2>
      <button
        @click="playBeep"
        class="bg-yellow-400 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:brightness-110 transition mb-6 focus:outline-none focus:ring-4 focus:ring-yellow-300"
      >
        Play Beep 🔊
      </button>
      <button
        @click="recordClick"
        class="bg-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:brightness-110 transition focus:outline-none focus:ring-4 focus:ring-yellow-500"
      >
        Click Me!
      </button>
      <p class="mt-6 text-xl select-none">{{ listeningFeedback }}</p>
      <button @click="quitGame" class="mt-8 text-yellow-700 underline hover:text-yellow-900 focus:outline-none">
        Quit Game
      </button>
    </div>

  </div>

  <div><Footer /></div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Footer from '../../components/Footer.vue'

const selectedGame = ref('')
const gameStarted = ref(false)

// WORD MATCH GAME DATA
const words = ['apple', 'banana', 'orange', 'grape', 'melon']
const scrambledWord = ref('')
const userGuess = ref('')
const feedbackMessage = ref('')
const isCorrect = ref(null)

function shuffleWord(word) {
  return word.split('').sort(() => Math.random() - 0.5).join('')
}

function selectGame(gameName) {
  selectedGame.value = gameName
  gameStarted.value = false
  resetFeedback()
}

function startGame() {
  gameStarted.value = true
  if (selectedGame.value === 'Word Match') {
    startWordMatch()
  } else if (selectedGame.value === 'Picture Quiz') {
    startPictureQuiz()
  } else if (selectedGame.value === 'Listening Game') {
    resetListeningGame()
  }
}

function quitGame() {
  gameStarted.value = false
  selectedGame.value = ''
  resetFeedback()
}

// Word Match logic
function startWordMatch() {
  const word = words[Math.floor(Math.random() * words.length)]
  scrambledWord.value = shuffleWord(word)
  userGuess.value = ''
  feedbackMessage.value = ''
  isCorrect.value = null
}

function checkWordMatch() {
  const original = words.find(w => shuffleWord(w) === scrambledWord.value) || ''
  // Because scrambledWord is generated by shuffleWord, we can check userGuess against original word list
  if (userGuess.value.toLowerCase() === words.find(w => w === userGuess.value.toLowerCase())) {
    feedbackMessage.value = '🎉 Correct! Well done!'
    isCorrect.value = true
  } else {
    feedbackMessage.value = '❌ Try again!'
    isCorrect.value = false
  }
}

function resetWordMatch() {
  startWordMatch()
  userGuess.value = ''
  feedbackMessage.value = ''
  isCorrect.value = null
}

// PICTURE QUIZ GAME DATA
const pictures = [
  { emoji: '🍎', answer: 'apple' },
  { emoji: '🍌', answer: 'banana' },
  { emoji: '🍊', answer: 'orange' },
  { emoji: '🍇', answer: 'grape' },
  { emoji: '🍉', answer: 'melon' },
]
const currentEmoji = ref('')
const pictureGuess = ref('')
const pictureFeedback = ref('')
const pictureCorrect = ref(null)

function startPictureQuiz() {
  const pic = pictures[Math.floor(Math.random() * pictures.length)]
  currentEmoji.value = pic.emoji
  pictureGuess.value = ''
  pictureFeedback.value = ''
  pictureCorrect.value = null
}

function checkPictureQuiz() {
  const answer = pictures.find(p => p.emoji === currentEmoji.value)?.answer || ''
  if (pictureGuess.value.toLowerCase() === answer) {
    pictureFeedback.value = '🎉 Correct! Great job!'
    pictureCorrect.value = true
  } else {
    pictureFeedback.value = '❌ Try again!'
    pictureCorrect.value = false
  }
}

function resetPictureQuiz() {
  startPictureQuiz()
  pictureGuess.value = ''
  pictureFeedback.value = ''
  pictureCorrect.value = null
}

// LISTENING GAME DATA
let beepAudio = null
const listeningFeedback = ref('')
let beepPlayed = false
let clickRecorded = false

function resetListeningGame() {
  if (!beepAudio) {
    beepAudio = new Audio()
    // Simple beep sound from data URI (440Hz sine wave 0.5s)
    beepAudio.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAwF0AAIC7AAACABAAZGF0YQQAAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA"
  }
  beepPlayed = false
  clickRecorded = false
  listeningFeedback.value = ''
}

function playBeep() {
  beepAudio.play()
  beepPlayed = true
  listeningFeedback.value = '🔊 Beep played! Now click "Click Me!" as fast as you can!'
}

function recordClick() {
  if (!beepPlayed) {
    listeningFeedback.value = '❌ You need to play the beep first!'
    return
  }
  if (clickRecorded) {
    listeningFeedback.value = '✅ You already clicked!'
    return
  }
  clickRecorded = true
  listeningFeedback.value = '🎉 Great! You clicked after the beep!'
}
function resetFeedback() {
  feedbackMessage.value = ''
  isCorrect.value = null
  pictureFeedback.value = ''
  pictureCorrect.value = null
  listeningFeedback.value = ''
  beepPlayed = false
  clickRecorded = false
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
