<template>
  <div>
    <HeaderSection />
    <div class="container">
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </div>
    <footer class="footer">
      © 2025 · Site profissional de Anelise Chagas, Psicóloga
    </footer>
  </div>
</template>

<script setup>
import HeaderSection from './components/HeaderSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<style>
.container {
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}
.footer {
  text-align: center;
  padding: 20px;
  color: #668;
  margin-top: 40px;
  font-size: 0.9rem;
}
</style>
