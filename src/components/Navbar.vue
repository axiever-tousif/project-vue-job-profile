<template>
  <nav class="bg-white shadow p-4 flex justify-center space-x-8">
    <RouterLink
      to="/"
      class="text-gray-600 hover:text-blue-600 font-medium"
      active-class="text-blue-600 font-bold"
      exact-active-class="text-blue-600 font-bold"
    >
      Home
    </RouterLink>
    <RouterLink
      to="/about"
      class="text-gray-600 hover:text-blue-600 font-medium"
      active-class="text-blue-600 font-bold"
    >
      About
    </RouterLink>
    <RouterLink
      to="/projects"
      class="text-gray-600 hover:text-blue-600 font-medium"
      active-class="text-blue-600 font-bold"
    >
      Projects
    </RouterLink>
    <RouterLink
      to="/contact"
      class="text-gray-600 hover:text-blue-600 font-medium"
      active-class="text-blue-600 font-bold"
    >
      Contact
    </RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Optional custom styling here */
</style>
