<template>
  <section class="min-h-screen flex justify-center items-center bg-darkBg px-4">
    <div class="bg-darkCard rounded-2xl p-10 md:p-20 w-full max-w-6xl flex flex-col md:flex-row items-center md:space-x-16 shadow-2xl">
      <!-- LEFT CONTENT -->
      <div class="flex-1 text-center md:text-left">
        <h3 class="text-textMain text-xl md:text-2xl mb-2">Hello, It's Me</h3>
        <h1 class="text-4xl md:text-6xl font-bold text-textMain mb-4">
          Tousif Anjum
        </h1>
        <h2 class="text-lg md:text-2xl text-textMain mb-6">
          And I'm a <span class="text-primary">Frontend Developer</span>
        </h2>
        <p class="text-gray-400 mb-8 max-w-md">
          I build responsive websites using Vue.js and Tailwind CSS. Let’s create something amazing together!
        </p>

        <!-- Social icons -->
        <div class="flex justify-center md:justify-start space-x-4 mb-8">
          <a
            href="https://facebook.com"
            target="_blank"
            class="text-primary text-2xl hover:scale-125 transition"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            class="text-primary text-2xl hover:scale-125 transition"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            class="text-primary text-2xl hover:scale-125 transition"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>

        <!-- Buttons -->
        <div class="flex justify-center md:justify-start space-x-4">
          <a
            href="#"
            class="bg-primary text-darkBg px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-cyan-400 transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>

      <!-- RIGHT IMAGE -->
      <div class="flex-1 mt-10 md:mt-0 flex justify-center md:justify-end">
        <div class="relative w-64 h-64">
          <div class="absolute inset-0 bg-primary blur-3xl rounded-[30%] opacity-50 animate-pulse"></div>
          <img
            src="/src/assets/profile.png"
            alt="Tousif Anjum"
            class="w-full h-full object-cover rounded-[30%] border-4 border-primary relative z-10"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// no script needed for static hero
</script>
