<template>
  <nav
    class="bg-blue-600 h-16 flex items-center justify-center px-8 shadow"
  >
    <RouterLink
      to="/"
      class="text-white hover:text-yellow-300 font-semibold text-lg"
      active-class="text-yellow-300 underline"
      exact-active-class="text-yellow-300 underline"
    >
      Home
    </RouterLink>
    <RouterLink
      to="/about"
      class="text-white hover:text-yellow-300 font-semibold text-lg ml-8"
      active-class="text-yellow-300 underline"
    >
      About
    </RouterLink>
    <RouterLink
      to="/projects"
      class="text-white hover:text-yellow-300 font-semibold text-lg ml-8"
      active-class="text-yellow-300 underline"
    >
      Projects
    </RouterLink>
    <RouterLink
      to="/contact"
      class="text-white hover:text-yellow-300 font-semibold text-lg ml-8"
      active-class="text-yellow-300 underline"
    >
      Contact
    </RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
