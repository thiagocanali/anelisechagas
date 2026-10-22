<template>
  <section id="contato" class="contact-card" aria-labelledby="contact-title">
    <div>
      <p class="section-label">Primeiro passo</p>
      <h2 id="contact-title">Você pode chegar como está.</h2>
      <p>Não é preciso ter todas as respostas para começar. Entre em contato para tirar suas dúvidas e encontrar um primeiro passo que faça sentido para você.</p>
    </div>
    <div class="contact-links">
      <a class="primary-link" href="mailto:anelisechagas.s@hotmail.com">Enviar um e-mail <span aria-hidden="true">→</span></a>
      <a href="https://instagram.com/anelisechagas" target="_blank" rel="noopener noreferrer" aria-label="Instagram (abre em nova aba)">Instagram <span aria-hidden="true">↗</span></a>
      <a href="https://www.linkedin.com/in/anelise-chagas/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (abre em nova aba)">LinkedIn <span aria-hidden="true">↗</span></a>
    </div>
  </section>
</template>

<style scoped>
.contact-card { display: flex; align-items: end; justify-content: space-between; gap: 36px; padding: 38px clamp(24px, 5vw, 52px); border: 1px solid var(--line); border-radius: 24px; background: var(--surface-soft); }
@media (prefers-color-scheme: dark) {
  .contact-card { border-color: #466277; background: #263f52; }
  .contact-card h2 { color: #eef5f8; }
  .contact-card p:not(.section-label) { color: #c3d3dd; }
  .contact-links a { color: #d1e3ed; }
}
.contact-card h2 { margin-bottom: 12px; color: var(--deep); font-size: clamp(1.8rem, 4vw, 2.45rem); font-weight: 500; }
.contact-card p:not(.section-label) { max-width: 460px; margin-bottom: 0; color: var(--muted); line-height: 1.7; }
.contact-links { display: flex; flex-wrap: wrap; align-items: center; justify-content: end; gap: 18px; }
.contact-links a { color: #426b83; font-size: .9rem; font-weight: 700; text-decoration: none; }
.contact-links a:hover { text-decoration: underline; }
.contact-links .primary-link { padding: 13px 17px; border-radius: 999px; background: #426b83; color: #fff; text-decoration: none; }
.contact-links .primary-link:hover { background: #24445c; text-decoration: none; }
@media (max-width: 700px) { .contact-card { align-items: start; flex-direction: column; gap: 26px; } .contact-links { justify-content: start; gap: 14px; } }
</style>
