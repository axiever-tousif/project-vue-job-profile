<template>
  <nav class="bg-darkBg text-textMain px-8 py-4 flex justify-between items-center shadow-lg">
    <h1 class="text-primary text-xl font-bold">Portfolio.</h1>
    <div class="space-x-6">
      <RouterLink
        v-for="item in menu"
        :key="item.path"
        :to="item.path"
        class="hover:text-primary transition duration-300 font-medium"
        :class="$route.path === item.path ? 'text-primary font-bold' : ''"
      >
        {{ item.label }}
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'

const menu = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
]
</script>

<style scoped>
</style>
