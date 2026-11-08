<template>
  <section id="sobre" class="about-section" aria-labelledby="about-title">
    <div>
      <p class="section-label">Sobre a atuação profissional</p>
      <h2 id="about-title" class="section-heading">Uma prática orientada pela escuta e pelo respeito.</h2>
    </div>
    <div class="about-copy">
      <p class="section-copy">Sou Anelise Cristine Chagas Schwartz, psicóloga formada pela UNOESC — Campus São Miguel do Oeste. Minha atuação tem como referência a Abordagem Centrada na Pessoa (ACP), perspectiva da Psicologia Humanista associada a Carl Rogers.</p>
      <p class="section-copy">Na prática, valorizo a compreensão empática, a autenticidade na relação e a consideração positiva pela pessoa, respeitando sua história, suas experiências e sua singularidade.</p>
    </div>
  </section>
</template>

<style scoped>
.about-section { display: grid; grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr); gap: clamp(36px, 8vw, 96px); padding-bottom: 72px; border-bottom: 1px solid var(--section-border); }
.about-copy { padding-top: 8px; }
.about-copy p + p { margin-top: 18px; }
@media (max-width: 700px) { .about-section { grid-template-columns: 1fr; gap: 12px; padding-bottom: 52px; } }
</style>
