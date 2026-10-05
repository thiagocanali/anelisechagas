<template>
  <div class="site-shell">
    <HeaderSection />
    <main>
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </main>
    <footer class="footer">
      <p>© 2025 · Anelise Chagas, Psicóloga · CRP 12/28457</p>
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
.site-shell {
  overflow: hidden;
}

.footer {
  padding: 2rem 1.5rem 2.5rem;
  color: var(--color-muted);
  text-align: center;
  font-size: 0.78rem;
  letter-spacing: 0.05em;
}

.footer p {
  margin: 0;
}
</style>
