<template>
  <section id="servicos" class="services-section" aria-labelledby="services-title">
    <div class="section-intro">
      <p class="section-label">Atendimento psicológico</p>
      <h2 id="services-title" class="section-heading">Informações sobre a atuação.</h2>
      <p class="section-copy">Conheça as modalidades de atendimento e a perspectiva que orienta o trabalho profissional.</p>
    </div>
    <div class="service-grid">
      <article class="service-card"><span class="card-number">01</span><h3>Modalidades</h3><p>Atendimento presencial em Blumenau e atendimento online, conforme avaliação da adequação dessa modalidade a cada situação.</p></article>
      <article class="service-card"><span class="card-number">02</span><h3>Público atendido</h3><p>Atendimento psicológico a adolescentes, adultos e pessoas idosas.</p></article>
      <article class="service-card"><span class="card-number">03</span><h3>Abordagem</h3><p>Atuação orientada pela Abordagem Centrada na Pessoa (ACP), com atenção à empatia, à autenticidade e à consideração positiva.</p></article>
    </div>
    <p class="regional-notice">Os atendimentos online para pessoas em outros estados são realizados por profissional com inscrição principal no Conselho Regional de Psicologia de Santa Catarina (CRP-12).</p>
  </section>
</template>

<style scoped>
.services-section { display: grid; grid-template-columns: minmax(0, .72fr) minmax(0, 1.28fr); gap: 44px; padding: 72px 0; }
.section-intro .section-copy { max-width: 300px; }
.service-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.service-card { min-height: 220px; padding: 24px 20px; border: 1px solid #d5e1e8; border-radius: 18px; background: #fcfcfa; box-shadow: 0 8px 24px rgba(36, 68, 92, .05); transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease; }
.service-card:hover { border-color: #aabfce; box-shadow: 0 14px 30px rgba(36, 68, 92, .11); transform: translateY(-4px); }
.card-number { color: #7896aa; font-size: .75rem; font-weight: 700; letter-spacing: .1em; }
.service-card h3 { margin: 42px 0 10px; color: #24445c; font-size: 1.35rem; font-weight: 500; }
.service-card p { margin: 0; color: #596875; font-size: .92rem; line-height: 1.65; }
.regional-notice { grid-column: 1 / -1; margin: 0; color: #596875; font-size: .88rem; line-height: 1.6; }
@media (max-width: 850px) { .services-section { grid-template-columns: 1fr; gap: 28px; padding: 52px 0; } .section-intro .section-copy { max-width: 520px; } }
@media (max-width: 560px) { .service-grid { grid-template-columns: 1fr; } .service-card { min-height: auto; } .service-card h3 { margin-top: 28px; } }
</style>
