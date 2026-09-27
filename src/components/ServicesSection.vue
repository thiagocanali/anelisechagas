<template>
  <section id="servicos" class="services-section" aria-labelledby="services-title">
    <div class="section-intro">
      <p class="section-label">Como posso ajudar</p>
      <h2 id="services-title" class="section-heading">Um acompanhamento no seu ritmo.</h2>
      <p class="section-copy">Cada processo é construído com cuidado, respeitando o seu momento e as suas necessidades.</p>
    </div>
    <div class="service-grid">
      <article class="service-card"><span class="card-number">01</span><h3>Atendimento</h3><p>Consultas presenciais em Blumenau e sessões online para todo o Brasil.</p></article>
      <article class="service-card"><span class="card-number">02</span><h3>Para quem</h3><p>Psicoterapia para adolescentes, adultos e idosos em diferentes fases da vida.</p></article>
      <article class="service-card"><span class="card-number">03</span><h3>Abordagem</h3><p>Um olhar humanista, baseado em escuta genuína, acolhimento e aceitação.</p></article>
    </div>
  </section>
</template>

<style scoped>
.services-section { display: grid; grid-template-columns: minmax(0, .72fr) minmax(0, 1.28fr); gap: 44px; padding: 72px 0; }
.section-intro .section-copy { max-width: 300px; }
.service-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.service-card { min-height: 220px; padding: 24px 20px; border: 1px solid #dce9e6; border-radius: 18px; background: #fff; box-shadow: 0 8px 24px rgba(41, 70, 75, .04); transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease; }
.service-card:hover { border-color: #b9d5d1; box-shadow: 0 14px 30px rgba(41, 70, 75, .09); transform: translateY(-4px); }
.card-number { color: #76a29d; font-size: .75rem; font-weight: 700; letter-spacing: .1em; }
.service-card h3 { margin: 42px 0 10px; color: #29464b; font-size: 1.35rem; font-weight: 500; }
.service-card p { margin: 0; color: #697b7c; font-size: .92rem; line-height: 1.65; }
@media (max-width: 850px) { .services-section { grid-template-columns: 1fr; gap: 28px; padding: 52px 0; } .section-intro .section-copy { max-width: 520px; } }
@media (max-width: 560px) { .service-grid { grid-template-columns: 1fr; } .service-card { min-height: auto; } .service-card h3 { margin-top: 28px; } }
</style>
