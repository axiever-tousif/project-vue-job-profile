<template>
  <section class="min-h-screen bg-[#0f172a] text-white flex items-center justify-center px-4">
    <div class="max-w-5xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8">

      <!-- Left Section -->
      <div class="text-center md:text-left space-y-4">
        <h2 class="text-3xl sm:text-4xl font-light">Hello, It's Me</h2>
        <h1 class="text-4xl sm:text-6xl font-bold text-white">Tousif Anjum</h1>
        <h3 class="text-2xl sm:text-3xl font-medium">
          And I'm a <span class="text-cyan-400 font-bold">Frontend Developer</span>
        </h3>
        <p class="text-sm text-gray-300 max-w-md mx-auto md:mx-0">
          I build responsive websites using Vue.js & Tailwind CSS. Let's create something amazing together!
        </p>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-6">
          <!-- ✅ Resume Button -->
          <a
            href="/assets/Tousif_Resume.pdf"
            download
            class="border border-cyan-400 text-cyan-400  font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-cyan-300 transition"
          >
            Download Resume
          </a>

          <!-- ✅ LinkedIn Button -->
          <a
            href="https://www.linkedin.com/in/tousif-anjum-05b01b259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            class="border border-cyan-400 text-cyan-400 font-semibold px-6 py-3 rounded-full hover:bg-cyan-400 hover:text-[#0f172a] transition"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <!-- Right Section - Profile Image -->
      <div class="relative">
        <img
          :src="profileImage"
          alt="Profile"
          class="w-44 h-44 md:w-60 md:h-60 object-cover rounded-full border-4 border-cyan-400 shadow-xl"
        />
        <!-- Neon glow -->
        <div class="absolute inset-0 rounded-full blur-2xl opacity-40 bg-cyan-400 z-[-1]"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script logic needed
</script>

<style scoped>
/* Optional extra styling */
</style>
