<template>
  <section class="min-h-screen flex justify-center items-center bg-[#5370b5] px-4">
    <div class="p-4 text-white">
    <!-- LEFT SIDE (TEXT) -->
      <div class="flex-1 text-center md:text-left">
        <h1 class="text-gray-400 text-xl mb-2">About <span style="color: #00f9ff;">Me!</span> </h1>
        
        <p class="text-gray-400 mb-8 max-w-lg word">
          I hold a B.Tech in Civil Engineering but transitioned to Web Development with a strong interest
          in creating beautiful, functional websites. I currently work as a Junior Developer at Axiver Inc.,
          where I build responsive UIs and collaborate on exciting projects.        
        </p>

      </div>
    </div>
    <div class="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl p-10 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">

      

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
import photoUrl from '../assets/OIP.jpeg'
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
.word {
  font-size:20px;
}

/* Neon Glow Effect */
.glow {
  box-shadow:
    0 0 30px #22d3ee,
    0 0 60px #22d3ee,
    0 0 90px #22d3ee;
}
</style>
