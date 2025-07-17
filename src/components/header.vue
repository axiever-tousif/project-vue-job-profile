<template>
  <header class="header">
    <nav class="navbar">
      <div class="navbar-inner">
        <!-- Navigation Links -->
        <div class="nav-links">
          <router-link to="/" class="nav-link" :class="{ active: $route.path === '/' }">Home</router-link>
          <router-link to="/about" class="nav-link" :class="{ active: $route.path === '/about' }">About</router-link>
          <router-link to="/projects" class="nav-link" :class="{ active: $route.path === '/projects' }">Career Highlights</router-link>
          <router-link to="/contact" class="nav-link" :class="{ active: $route.path === '/contact' }">Contact</router-link>
        </div>

        <!-- Resume & LinkedIn Buttons -->
        <div class="nav-buttons">
          <a href="/assets/Tousif_Resume.pdf" target="_blank" rel="noopener">
            <button class="action-btn">Download CV</button>
          </a>
          <a href="https://www.linkedin.com/in/tousif-anjum-05b01b259" target="_blank" rel="noopener">
            <button class="action-btn">LinkedIn Profile</button>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  background-color: #d3e4f2;
  padding: 20px 40px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.nav-links {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.nav-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.nav-link {
  text-decoration: none;
  color: #000;
  font-weight: 600;
  padding: 8px 14px;
  border-radius: 6px;
  transition: 0.2s ease;
}

.navbar-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px; /* ⬅️ Wider than before */
  margin: 0 auto;
  width: 100%;
}

.nav-link:hover {
  background-color: #e3f2fd;
  color: #0077cc;
}

.nav-link.active {
  border: 2px solid #0077cc;
  color: #0077cc;
  background-color: white;
}

.action-btn {
  background-color: #73d8a5;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.action-btn:hover {
  background-color: #5cc491;
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .nav-links,
  .nav-buttons {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
  }
}
</style>
