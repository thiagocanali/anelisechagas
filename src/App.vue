<template>
  <div class="site-shell">
    <a class="skip-link" href="#conteudo">Ir para o conteúdo principal</a>
    <HeaderSection />
    <main id="conteudo" class="container">
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </main>
    <footer class="footer">
      <span>© {{ new Date().getFullYear() }} Anelise Chagas</span>
      <span>Psicóloga Clínica · CRP 12/28457</span>
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
  width: min(100% - 40px, 980px);
  margin: 0 auto;
  padding: 72px 0 24px;
}
.footer {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  width: min(100% - 40px, 980px);
  margin: 0 auto;
  padding: 28px 0 36px;
  border-top: 1px solid #d8e4e4;
  color: #718486;
  font-size: 0.85rem;
}
@media (max-width: 640px) {
  .container { width: min(100% - 32px, 980px); padding-top: 48px; }
  .footer { width: min(100% - 32px, 980px); flex-direction: column; }
}
</style>
