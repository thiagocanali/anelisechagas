<template>
  <header class="header">
    <div class="header-inner">
      <nav class="site-nav" aria-label="Navegação principal">
        <a href="#sobre">Sobre</a>
        <a href="#servicos">Atuação</a>
        <a href="#contato">Contato</a>
      </nav>
      <p class="eyebrow">Psicologia clínica</p>
      <h1>Anelise Chagas</h1>
      <p class="subtitle">Um espaço seguro para você se escutar, compreender e florescer.</p>
      <a class="header-cta" href="#contato">Agende uma conversa <span aria-hidden="true">→</span></a>
      <p class="credential">CRP 12/28457 · Blumenau e atendimento online</p>
    </div>
  </header>
</template>

<style scoped>
.header { padding: 22px 20px 78px; background: linear-gradient(135deg, #eaf3f1 0%, #f7faf9 72%); border-bottom: 1px solid #dce9e6; }
.header-inner { max-width: 760px; margin: 0 auto; text-align: center; }
.site-nav { display: flex; justify-content: center; gap: 26px; margin-bottom: 76px; }
.site-nav a { position: relative; color: #5e7072; font-size: .82rem; font-weight: 700; text-decoration: none; }
.site-nav a::after { position: absolute; right: 0; bottom: -7px; left: 0; height: 2px; border-radius: 999px; background: #5b918b; content: ''; transform: scaleX(0); transition: transform .2s ease; }
.site-nav a:hover, .site-nav a:focus-visible { color: #39716d; }
.site-nav a:hover::after, .site-nav a:focus-visible::after { transform: scaleX(1); }
@media (max-width: 560px) { .header { padding-bottom: 58px; } .site-nav { gap: 18px; margin-bottom: 56px; } }
.eyebrow { margin-bottom: 18px; color: #5b918b; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; }
h1 { margin-bottom: 16px; color: #29464b; font-size: clamp(2.7rem, 8vw, 5.2rem); font-weight: 500; line-height: 1; }
.subtitle { max-width: 510px; margin: 0 auto 28px; color: #5e7072; font-size: clamp(1rem, 2vw, 1.2rem); line-height: 1.7; }
.header-cta { display: inline-flex; align-items: center; gap: 12px; padding: 13px 20px; border-radius: 999px; background: #4f8580; color: #fff; font-weight: 700; text-decoration: none; transition: transform .2s, background .2s; }
.header-cta:hover { background: #3d716d; transform: translateY(-2px); }
.credential { margin: 22px 0 0; color: #78908e; font-size: .82rem; }
</style>
