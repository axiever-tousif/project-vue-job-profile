<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
<style>
/* RESET GLOBAL PADDING / MARGIN */
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}

/* Prevent footer spacing issue */
.main-content {
  flex: 1;
  min-height: calc(100vh - 160px); /* Adjust based on your header + footer height */
}

/* Optional: Make layout flexible to push footer to bottom */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
