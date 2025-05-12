<template>
    <section
      class="relative bg-cover bg-center bg-no-repeat text-white min-h-screen"
      style="background-image: url('https://images.unsplash.com/photo-1544991337-95176b5233c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');"
    >
      <div class="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
  
      <div class="relative z-10 flex flex-col">
        <Header />
        <HeroSection />
      </div>
    </section>
  </template>
  
  <script setup>
  import Header from '../components/Header.vue'
  import HeroSection from '../components/HeroSection.vue'
  </script>
  