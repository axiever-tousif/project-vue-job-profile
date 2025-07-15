<template>
  <main class="min-h-screen flex flex-col justify-center items-center text-center bg-gray-50 p-8">
    <h1 class="text-5xl font-bold text-blue-600 mb-4">
      Hi, I'm ousif Anjum 👋
    </h1>
    <p class="text-lg text-gray-700 mb-6 max-w-xl">
      Frontend Developer passionate about creating beautiful and performant web experiences using Vue.js and Tailwind CSS.
    </p>

    <div class="flex flex-col sm:flex-row gap-4 mt-4">
      <a
        href="/assets/YourResume.pdf"
        download
        class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Download Resume
      </a>

      <div class="flex gap-4 justify-center">
        </a>
            <a href="https://www.linkedin.com/in/tousif-anjum-05b01b259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" class="px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white">
        LinkedIn
      </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          class="text-gray-700 hover:text-gray-900 text-2xl"
        >
          <i class="fab fa-github"></i>
          GitHub
        </a>
      </div>
    </div>
  </main>
</template>

<script setup>
// no script logic needed here right now
</script>
