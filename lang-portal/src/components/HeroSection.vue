<template>
    <section class="text-white text-center py-20 px-4">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Learn Portuguese with Context</h1>
      <p class="mb-10 text-lg">Explore words, sounds and images for effective learning</p>
  
      <div class="bg-white p-6 rounded-xl shadow-md w-full max-w-xl mx-auto text-gray-800 space-y-4">
        <input
          v-model="word"
          type="text"
          placeholder="Enter a word..."
          class="w-full px-4 py-2 border border-gray-300 rounded"
        />
  
        <div class="flex flex-wrap justify-center gap-4">
          <button @click="searchImage" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            🔁 Translate</button>
          <button class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">🔊 Listen</button>
          <button class="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">🧠 Context</button>
        </div>
  
        <p class="text-center text-gray-500 italic">The results will appear here...</p>
        <div v-if="imageUrl" class="mt-6">
  <img
    :src="imageUrl"
    alt="Related visual context"
    class="mx-auto rounded-xl shadow-lg max-h-64 object-cover"
  />
</div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
import { fetchImageForWord } from '../services/unplashService'


const word = ref('')
const imageUrl = ref(null)

const searchImage = async () => {
  if (!word.value) return
  imageUrl.value = await fetchImageForWord(word.value)
}
  
  </script>
  