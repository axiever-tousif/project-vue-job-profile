<template>
  <header class="header">
    <nav class="navbar">
      <div class="container">
        <div class="nav-links">
          <a href="#" class="nav-link">Home</a>
          <a href="#" class="nav-link">About</a>
          <a href="#" class="nav-link">Projects</a>
          <a href="#" class="nav-link">Contact</a>
        </div>
        <div class="action-btn">
          <a href="/assets/Tousif_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button class="learn-more-btn">Download CV</button>
          </a>
        </div>
        <div class="action-btn">
          <a href="https://www.linkedin.com/in/tousif-anjum-05b01b259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <button class="learn-more-btn">Linked In Profile</button>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
// No additional logic needed for now
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #cadae9;
  color: white;
  padding: 0.75rem 1rem;
  z-index: 1000;
  box-shadow: 0 2px 6px rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: black;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  border:2px;
}

.nav-link:hover {
  color: #0af;
  border:2px;
}

.learn-more-btn {
  background-color: #0af;
  border: none;
  color: white;
  padding: 0.5rem 1.25rem;
  padding-top:4px;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.learn-more-btn:hover {
  background-color: #08c;
}
</style>
