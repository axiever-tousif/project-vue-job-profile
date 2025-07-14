<template>
  <nav class="nav-bar">
    <router-link to="/" class="nav-link">🏠 Home</router-link>
    <router-link to="/add" class="nav-link">➕ Add Job</router-link>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
.nav-bar {
  background-color: #333;
  padding: 12px;
  display: flex;
  gap: 20px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav-link.router-link-exact-active {
  color: #42b983;
}
</style>
