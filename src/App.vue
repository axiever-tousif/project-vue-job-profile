<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

main {
  padding: 20px;
}
</style>
