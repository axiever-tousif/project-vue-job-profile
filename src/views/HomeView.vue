<template>
  <section class="min-h-screen flex justify-center items-center bg-[#0f172a] px-4">
    <div class="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl p-10 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">

      <!-- LEFT SIDE (TEXT) -->
      <div class="flex-1 text-center md:text-left">
        <h3 class="text-gray-400 text-xl mb-2">Hello, It's Me</h3>
        <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
          Tousif Anjum
        </h1>
        <h2 class="text-lg md:text-2xl text-cyan-400 mb-6 font-semibold">
          And I'm a Frontend Developer
        </h2>
        <p class="text-gray-400 mb-8 max-w-lg">
          I build responsive websites using Vue.js and Tailwind CSS. Let’s create something amazing together!
        </p>
        <div class="flex justify-center md:justify-start gap-4">
          <RouterLink
            to="/contact"
            class="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition font-medium"
          >
            Contact Me
          </RouterLink>
          <a
            href="/src/assets/Tousif_Resume.pdf"
            download
            class="px-6 py-3 bg-cyan-400 text-gray-900 rounded-full hover:bg-cyan-500 transition font-medium shadow-md"
          >
            Download CV
          </a>
        </div>
      </div>

      <!-- RIGHT SIDE (IMAGE) -->
      <div class="flex-1 mt-10 md:mt-0 flex justify-center md:justify-end">
        <div class="relative w-60 h-60 md:w-80 md:h-80 hexagon overflow-hidden shadow-xl glow">
          <img :src="photoUrl" alt="Tousif Anjum" class="w-full h-full object-cover" />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import photoUrl from '../assets/OIP.jpg'
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* HEXAGON CLIP PATH */
.hexagon {
  clip-path: polygon(
    25% 5.77%, 
    75% 5.77%, 
    100% 50%, 
    75% 94.23%, 
    25% 94.23%, 
    0% 50%
  );
  border: 4px solid #22d3ee;
  transition: transform 0.3s;
}

.hexagon:hover {
  transform: scale(1.05);
}

/* Neon Glow Effect */
.glow {
  box-shadow:
    0 0 30px #22d3ee,
    0 0 60px #22d3ee,
    0 0 90px #22d3ee;
}
</style>
