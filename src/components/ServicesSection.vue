<template>
  <section id="atendimento" class="services" aria-labelledby="services-title">
    <div class="container">
      <div class="services__intro">
        <p class="eyebrow">Atendimento</p>
        <h2 id="services-title">Um percurso construído com você.</h2>
        <p>Atendimentos presenciais em Blumenau e online para todo o Brasil.</p>
      </div>
      <div class="services__list">
        <article>
          <span>01</span>
          <h3>Psicoterapia Humanista / ACP</h3>
        </article>
        <article>
          <span>02</span>
          <h3>Adolescentes, adultos e idosos</h3>
        </article>
        <article>
          <span>03</span>
          <h3>Escuta acolhedora e desenvolvimento emocional</h3>
        </article>
        <article>
          <span>04</span>
          <h3>Promoção de autoconhecimento e saúde mental</h3>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services { background: var(--color-sage); padding: clamp(5.5rem, 10vw, 8.5rem) 0; }
.container { width: min(1120px, calc(100% - 3rem)); margin: 0 auto; }
.services__intro { display: grid; grid-template-columns: 0.95fr 1.1fr; column-gap: 7rem; align-items: end; }
.eyebrow { grid-column: 1 / -1; margin: 0 0 1rem; color: var(--color-terra); font-size: 0.73rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; }
h2 { grid-column: 1; margin: 0; color: var(--color-ink); font-family: var(--font-display); font-size: clamp(2.5rem, 4.3vw, 4.1rem); font-weight: 400; letter-spacing: -0.055em; line-height: 1.02; }
.services__intro > p:last-child { max-width: 330px; margin: 0 0 0.35rem; color: var(--color-muted); line-height: 1.7; }
.services__list { margin-top: 4rem; border-top: 1px solid rgba(69, 74, 60, 0.35); }
.services__list article { display: grid; grid-template-columns: 5.25rem 1fr; gap: 1rem; align-items: baseline; padding: 1.45rem 0; border-bottom: 1px solid rgba(69, 74, 60, 0.35); transition: padding 180ms ease; }
.services__list article:hover { padding-left: 0.7rem; }
.services__list span { color: var(--color-terra); font-size: 0.7rem; font-weight: 600; letter-spacing: 0.1em; }
h3 { margin: 0; color: var(--color-ink); font-family: var(--font-display); font-size: clamp(1.45rem, 2.5vw, 2rem); font-weight: 400; letter-spacing: -0.035em; }
@media (max-width: 720px) { .container { width: min(100% - 2.5rem, 1120px); } .services__intro { display: block; } .services__intro > p:last-child { margin-top: 1.5rem; } .services__list { margin-top: 3rem; } .services__list article { grid-template-columns: 2.9rem 1fr; } }
</style>
