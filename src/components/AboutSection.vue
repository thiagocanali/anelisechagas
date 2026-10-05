<template>
  <section id="sobre" class="about section container" aria-labelledby="about-title">
    <div class="about__visual" aria-hidden="true">
      <div class="about__shape"></div>
      <span>ACP</span>
    </div>
    <div class="about__content">
      <p class="eyebrow">Sobre a profissional</p>
      <h2 id="about-title">Cuidado que começa pela escuta.</h2>
      <div class="about__text">
        <p>Sou Anelise Chagas, psicóloga formada pela UNOESC — Campus São Miguel do Oeste, onde desenvolvi uma sólida formação teórica e prática em Psicologia.</p>
        <p>Trabalho com a Abordagem Centrada na Pessoa (ACP), priorizando empatia, acolhimento e aceitação incondicional.</p>
      </div>
      <div class="credential"><span></span><p>Um espaço seguro e acolhedor para explorar emoções e fortalecer o bem-estar emocional.</p></div>
    </div>
  </section>
</template>

<style scoped>
.container { width: min(1120px, calc(100% - 3rem)); margin: 0 auto; }
.section { padding: clamp(5.5rem, 11vw, 9rem) 0; }
.about { display: grid; grid-template-columns: minmax(250px, 0.75fr) minmax(0, 1fr); align-items: center; gap: clamp(3rem, 10vw, 9.5rem); }
.about__visual { min-height: 420px; position: relative; overflow: hidden; background: #ddd7c8; }
.about__shape { width: 72%; height: 95%; position: absolute; right: 11%; bottom: -18%; border: 1px solid rgba(85, 84, 67, 0.6); border-radius: 50% 50% 0 0; }
.about__visual::before { width: 46%; height: 46%; position: absolute; top: 13%; left: 11%; border-radius: 50%; background: #c99b7b; content: ''; }
.about__visual::after { width: 24%; height: 1px; position: absolute; bottom: 19%; left: 0; background: var(--color-ink); content: ''; }
.about__visual span { position: absolute; right: 8%; bottom: 10%; color: var(--color-ink); font-family: var(--font-display); font-size: 3rem; font-style: italic; }
.eyebrow { margin: 0 0 1rem; color: var(--color-terra); font-size: 0.73rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; }
h2 { max-width: 520px; margin: 0; color: var(--color-ink); font-family: var(--font-display); font-size: clamp(2.55rem, 4.4vw, 4.2rem); font-weight: 400; letter-spacing: -0.055em; line-height: 1.02; }
.about__text { max-width: 535px; margin-top: 2rem; color: var(--color-muted); font-size: 1rem; line-height: 1.8; }
.about__text p { margin: 0 0 1rem; }
.credential { display: flex; align-items: flex-start; gap: 1rem; max-width: 480px; margin-top: 2rem; padding-top: 1.4rem; border-top: 1px solid var(--color-line); color: var(--color-ink); font-size: 0.9rem; line-height: 1.55; }
.credential span { width: 0.55rem; height: 0.55rem; flex: 0 0 auto; margin-top: 0.4rem; border-radius: 50%; background: var(--color-terra); }
.credential p { margin: 0; }
@media (max-width: 720px) { .container { width: min(100% - 2.5rem, 1120px); } .about { grid-template-columns: 1fr; gap: 3rem; } .about__visual { min-height: 340px; width: min(100%, 410px); } }
</style>
