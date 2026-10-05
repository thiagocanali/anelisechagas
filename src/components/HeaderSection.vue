<template>
  <header class="hero" id="inicio">
    <div class="hero__top container">
      <a class="brand" href="#inicio" aria-label="Anelise Chagas — início">Anelise <span>Chagas</span></a>
      <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-controls="main-navigation" @click="menuOpen = !menuOpen">
        <span class="sr-only">{{ menuOpen ? 'Fechar' : 'Abrir' }} menu</span>
        <span></span><span></span>
      </button>
      <nav id="main-navigation" class="navigation" :class="{ 'navigation--open': menuOpen }" aria-label="Navegação principal">
        <a href="#sobre" @click="menuOpen = false">Sobre</a>
        <a href="#atendimento" @click="menuOpen = false">Atendimento</a>
        <a href="#contato" @click="menuOpen = false">Contato</a>
      </nav>
    </div>

    <div class="hero__content container">
      <div class="hero__copy">
        <p class="eyebrow">Psicologia clínica · CRP 12/28457</p>
        <h1>Um espaço para se escutar com mais calma.</h1>
        <p class="hero__intro">Acolhimento, presença e cuidado em cada encontro.</p>
        <a class="button" href="mailto:anelisechagas.s@hotmail.com">Entrar em contato <span aria-hidden="true">↗</span></a>
      </div>
      <div class="hero__art" aria-hidden="true">
        <div class="hero__sun"></div>
        <div class="hero__arch"></div>
        <p>Presença<br>e escuta</p>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<style scoped>
.hero { background: var(--color-cream); padding-bottom: clamp(4.5rem, 9vw, 7.5rem); }
.container { width: min(1120px, calc(100% - 3rem)); margin: 0 auto; }
.hero__top { min-height: 5.7rem; display: flex; align-items: center; justify-content: space-between; position: relative; }
.brand { color: var(--color-ink); font-family: var(--font-display); font-size: 1.35rem; letter-spacing: -0.04em; text-decoration: none; }
.brand span { color: var(--color-terra); }
.navigation { display: flex; align-items: center; gap: 2rem; }
.navigation a { color: var(--color-ink); font-size: 0.82rem; text-decoration: none; transition: color 180ms ease; }
.navigation a:hover { color: var(--color-terra); }
.menu-toggle { display: none; }
.hero__content { display: grid; grid-template-columns: minmax(0, 1.06fr) minmax(250px, 0.7fr); align-items: center; gap: clamp(3rem, 10vw, 10rem); padding-top: clamp(3rem, 8vw, 6.5rem); }
.eyebrow { margin: 0 0 1.15rem; color: var(--color-terra); font-size: 0.73rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; }
h1 { max-width: 660px; margin: 0; color: var(--color-ink); font-family: var(--font-display); font-size: clamp(3.1rem, 6.2vw, 5.7rem); font-weight: 400; letter-spacing: -0.065em; line-height: 0.95; }
.hero__intro { max-width: 410px; margin: 1.8rem 0 2.2rem; color: var(--color-muted); font-size: 1.05rem; line-height: 1.7; }
.button { display: inline-flex; align-items: center; gap: 1.25rem; padding: 0.95rem 1.3rem; background: var(--color-ink); color: #fffdf8; font-size: 0.8rem; font-weight: 600; text-decoration: none; transition: background 180ms ease, transform 180ms ease; }
.button:hover { background: var(--color-terra); transform: translateY(-2px); }
.button span { font-size: 1.1rem; }
.hero__art { aspect-ratio: 0.81; min-height: 325px; position: relative; overflow: hidden; background: #d7d7c2; }
.hero__sun { position: absolute; top: 12%; right: 13%; width: 51%; aspect-ratio: 1; border-radius: 50%; background: #ead5bd; }
.hero__arch { position: absolute; bottom: -6%; left: 17%; width: 66%; height: 75%; border: 1px solid rgba(66, 73, 58, 0.55); border-bottom: 0; border-radius: 999px 999px 0 0; }
.hero__art p { position: absolute; left: 11%; bottom: 10%; margin: 0; color: var(--color-ink); font-family: var(--font-display); font-size: clamp(1.6rem, 3vw, 2.5rem); font-style: italic; line-height: 1; }
@media (max-width: 680px) { .container { width: min(100% - 2.5rem, 1120px); } .menu-toggle { width: 2.75rem; height: 2.75rem; display: grid; align-content: center; gap: 0.32rem; border: 1px solid var(--color-line); background: transparent; cursor: pointer; } .menu-toggle span:not(.sr-only) { width: 1.1rem; height: 1px; display: block; margin: 0 auto; background: var(--color-ink); } .navigation { width: calc(100vw - 2.5rem); position: absolute; z-index: 2; top: 4.7rem; right: 0; display: none; flex-direction: column; align-items: flex-start; gap: 1.15rem; padding: 1.5rem; background: #fffdf8; box-shadow: 0 12px 25px rgba(58, 55, 43, 0.1); } .navigation--open { display: flex; } .hero__content { grid-template-columns: 1fr; padding-top: 3.3rem; gap: 3.5rem; } .hero__art { width: min(100%, 360px); min-height: 0; margin-left: auto; } }
</style>
