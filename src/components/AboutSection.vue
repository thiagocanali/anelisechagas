<template>
  <section id="sobre" class="about-section" aria-labelledby="about-title">
    <div>
      <p class="section-label">Sobre o meu trabalho</p>
      <h2 id="about-title" class="section-heading">Cuidar da mente também é um gesto de coragem.</h2>
    </div>
    <div class="about-copy">
      <p class="section-copy">Sou Anelise Chagas, psicóloga formada pela UNOESC — Campus São Miguel do Oeste. Na Abordagem Centrada na Pessoa (ACP), encontro uma forma de trabalhar com presença, empatia e respeito pela história de cada pessoa.</p>
      <p class="section-copy">Meu propósito é oferecer um espaço de escuta acolhedora para que você possa compreender suas emoções, fortalecer o bem-estar e construir novos caminhos com mais autenticidade.</p>
    </div>
  </section>
</template>

<style scoped>
.about-section { display: grid; grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr); gap: clamp(36px, 8vw, 96px); padding-bottom: 72px; border-bottom: 1px solid #dce9e6; }
.about-copy { padding-top: 8px; }
.about-copy p + p { margin-top: 18px; }
@media (max-width: 700px) { .about-section { grid-template-columns: 1fr; gap: 12px; padding-bottom: 52px; } }
</style>
