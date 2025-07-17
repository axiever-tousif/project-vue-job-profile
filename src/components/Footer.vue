<template>
  <div class="pg-footer">
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-column">
          <h2 class="footer-title">Short Term Goals</h2>
          <p class="footer-text">
            "To join a growth-oriented company where I can apply and improve my skills in frontend and backend development, while contributing to live projects and learning from experienced professionals."
          </p>
        </div>

        <div class="footer-column">
          <h2 class="footer-title">Long Term Goals</h2>
          <p class="footer-text">
            Motivated and detail-oriented web developer with experience in designing and developing user interfaces, testing, and debugging. Passionate about building modern and responsive web applications.
          </p>
        </div>

        <div class="footer-column">
          <h2 class="footer-title">Skills</h2>
          <div class="skills-grid">
            <span class="skill-box">HTML</span>
            <span class="skill-box">CSS</span>
            <span class="skill-box">JavaScript</span>
            <span class="skill-box">Vue.js</span>
            <span class="skill-box">PHP & MySQL</span>
            <span class="skill-box">Git & GitHub</span>
            <span class="skill-box">Bootstrap</span>
            <span class="skill-box">Tailwind CSS</span>
            <span class="skill-box">Autocad</span>
          </div>
        </div>

        <div class="footer-column">
          <h2 class="footer-title">Contacts</h2>
          <p><i class="fa fa-phone"></i> +91 6204840788</p>
          <p><i class="fa fa-phone"></i> +214 52564785</p>
          <p><i class="fa fa-envelope"></i> <span class="email">tousif@axiever.com</span></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>
.pg-footer {
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
}

.footer {
  background-color: #d3e4f2;
  padding: 40px 20px 10px 20px; /* Reduced bottom padding */
  margin-bottom: 0;
}

body, html, #app {
  margin: 0;
  padding: 0;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
}

.footer-column {
  flex: 1 1 200px;
  min-width: 200px;
}

.footer-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #3b4391;
  margin-bottom: 10px;
  text-transform: uppercase;
  border-bottom: 2px solid #3b4391;
  padding-bottom: 5px;
  display: inline-block;
}

.footer-text, .footer-list, .footer-column p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #111;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-list li {
  margin-bottom: 5px;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.skill-box {
  background-color: #ffffff;
  color: #3b4391;
  padding: 8px 14px;
  border-radius: 12px;
  font-weight: 500;
  border: 1px solid #3b4391;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.skill-box:hover {
  background-color: #3b4391;
  color: #fff;
  cursor: default;
}

.email {
  text-transform: none !important;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
