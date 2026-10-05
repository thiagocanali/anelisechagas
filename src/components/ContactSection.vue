<template>
  <section id="contato" class="contact section" aria-labelledby="contact-title">
    <div class="container contact__grid">
      <div>
        <p class="eyebrow">Contato</p>
        <h2 id="contact-title">Quando fizer sentido para você, estou por aqui.</h2>
      </div>
      <div class="contact__content">
        <p class="contact__intro">Para saber mais ou conversar sobre atendimento, entre em contato pelo canal que for mais confortável.</p>
        <a class="email-link" href="mailto:anelisechagas.s@hotmail.com">anelisechagas.s@hotmail.com <span aria-hidden="true">↗</span></a>
        <div class="social-links" aria-label="Redes profissionais">
          <a href="https://instagram.com/anelisechagas" target="_blank" rel="noopener noreferrer">Instagram <span>@anelisechagas</span></a>
          <a href="https://www.linkedin.com/in/anelise-chagas/" target="_blank" rel="noopener noreferrer">LinkedIn <span>Perfil profissional</span></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section { padding: clamp(5.5rem, 11vw, 9rem) 0 clamp(5rem, 9vw, 7rem); }
.container { width: min(1120px, calc(100% - 3rem)); margin: 0 auto; }
.contact__grid { display: grid; grid-template-columns: minmax(0, 0.9fr) minmax(0, 1fr); gap: clamp(3rem, 12vw, 12rem); }
.eyebrow { margin: 0 0 1rem; color: var(--color-terra); font-size: 0.73rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; }
h2 { max-width: 465px; margin: 0; color: var(--color-ink); font-family: var(--font-display); font-size: clamp(2.55rem, 4.2vw, 4rem); font-weight: 400; letter-spacing: -0.055em; line-height: 1.02; }
.contact__intro { max-width: 400px; margin: 0; color: var(--color-muted); line-height: 1.75; }
.email-link { display: flex; justify-content: space-between; align-items: center; gap: 1rem; margin-top: 2.6rem; padding: 1.2rem 0; border-bottom: 1px solid var(--color-ink); color: var(--color-ink); font-family: var(--font-display); font-size: clamp(1.15rem, 2vw, 1.55rem); text-decoration: none; transition: color 180ms ease; }
.email-link:hover { color: var(--color-terra); }
.email-link span { font-family: var(--font-sans); font-size: 1.1rem; }
.social-links { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1.5rem; }
.social-links a { color: var(--color-ink); font-size: 0.82rem; text-decoration: none; }
.social-links a:hover { color: var(--color-terra); }
.social-links span { display: block; margin-top: 0.4rem; color: var(--color-muted); font-size: 0.73rem; }
@media (max-width: 720px) { .container { width: min(100% - 2.5rem, 1120px); } .contact__grid { grid-template-columns: 1fr; gap: 2.5rem; } }
</style>
