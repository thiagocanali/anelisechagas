<template>
  <header class="header">
    <div class="header-inner">
      <nav class="site-nav" aria-label="Navegação principal">
        <a href="#sobre">Sobre</a>
        <a href="#servicos">Atuação</a>
        <a href="#contato">Contato</a>
      </nav>
      <p class="eyebrow">Psicologia clínica</p>
      <h1>Um espaço de escuta e respeito à sua singularidade.</h1>
      <p class="subtitle">Um espaço profissional pautado pela escuta, pela empatia e pelo respeito à história de cada pessoa.</p>
      <div class="hero-actions">
        <a
          class="header-cta"
          href="https://wa.me/5549984114013"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar pelo WhatsApp (abre em nova aba)"
        >Conversar pelo WhatsApp <span aria-hidden="true">↗</span></a>
        <a class="header-secondary" href="#servicos">Conheça a abordagem</a>
      </div>
      <p class="credential">Psicóloga Anelise Cristine Chagas Schwartz · CRP-12/28457</p>
    </div>
  </header>
</template>

<style scoped>
.header { padding: 22px 20px 86px; background: linear-gradient(135deg, var(--surface-soft) 0%, var(--surface) 72%); border-bottom: 1px solid var(--line); }
.header-inner { max-width: 820px; margin: 0 auto; text-align: center; }
.site-nav { display: flex; justify-content: center; gap: 26px; margin-bottom: 82px; }
.site-nav a { position: relative; color: var(--muted); font-size: .82rem; font-weight: 700; text-decoration: none; }
.site-nav a::after { position: absolute; right: 0; bottom: -7px; left: 0; height: 2px; border-radius: 999px; background: var(--accent-soft); content: ''; transform: scaleX(0); transition: transform .2s ease; }
.site-nav a:hover, .site-nav a:focus-visible { color: var(--deep); }
.site-nav a:hover::after, .site-nav a:focus-visible::after { transform: scaleX(1); }
@media (max-width: 560px) { .header { padding-bottom: 62px; } .site-nav { gap: 18px; margin-bottom: 58px; } }
.eyebrow { margin-bottom: 18px; color: var(--accent); font-size: 0.75rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; }
h1 { max-width: 760px; margin: 0 auto 20px; color: var(--deep); font-size: clamp(2.7rem, 8vw, 5.2rem); font-weight: 500; line-height: 1.04; }
.subtitle { max-width: 560px; margin: 0 auto 30px; color: var(--muted); font-size: clamp(1rem, 2vw, 1.2rem); line-height: 1.7; }
.hero-actions { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 20px; }
.header-cta { display: inline-flex; align-items: center; gap: 12px; padding: 13px 20px; border-radius: 999px; background: var(--accent); color: #fff; font-weight: 700; text-decoration: none; transition: transform .2s, background .2s; }
.header-cta:hover { background: var(--deep); transform: translateY(-2px); }
.header-secondary { color: var(--accent); font-size: .9rem; font-weight: 700; text-decoration: none; }
.header-secondary:hover { color: var(--deep); text-decoration: underline; }
.credential { margin: 22px 0 0; color: var(--accent-soft); font-size: .82rem; }
</style>
