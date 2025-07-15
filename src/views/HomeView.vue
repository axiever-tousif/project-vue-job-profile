<template>
  <section class="min-h-screen flex items-center justify-center bg-[#0f172a] text-white px-4">
    <div class="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
      
      <!-- Left Content -->
      <div class="text-center md:text-left space-y-4">
        <h2 class="text-3xl sm:text-4xl font-light">Hello, It's Me</h2>
        <h1 class="text-4xl sm:text-6xl font-bold text-white">Tousif Anjum</h1>
        <h3 class="text-2xl sm:text-3xl font-medium">
          And I'm a <span class="text-cyan-400 font-bold">Frontend Developer</span>
        </h3>
        <p class="text-sm text-gray-300 max-w-md">
          I build clean, responsive websites using Vue.js & Tailwind CSS. Let's collaborate to create something amazing.
        </p>
        
        <!-- Social Icons -->
        <div class="flex space-x-4 justify-center md:justify-start mt-4">
          <a href="#" class="text-cyan-400 hover:scale-110 transition"><i class="fab fa-github"></i></a>
          <a href="#" class="text-cyan-400 hover:scale-110 transition"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="text-cyan-400 hover:scale-110 transition"><i class="fab fa-twitter"></i></a>
        </div>

        <!-- Download Button -->
        <div class="mt-6">
          <a
            href="/resume.pdf"
            class="bg-cyan-400 text-[#0f172a] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-cyan-300 transition"
          >
            Download CV
          </a>
        </div>
      </div>

      <!-- Right Side Image -->
      <div class="relative">
        <img
          :src="profileImage"
          alt="Profile"
          class="w-60 h-60 object-cover rounded-full border-4 border-cyan-400 shadow-xl"
        />
        <!-- Optional glow effect -->
        <div class="absolute inset-0 rounded-full blur-2xl opacity-30 bg-cyan-400 z-[-1]"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import profileImage from '../assets/profile.png'
</script>
