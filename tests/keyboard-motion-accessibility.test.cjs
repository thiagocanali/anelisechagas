const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')

const app = fs.readFileSync(path.join(__dirname, '..', 'src', 'App.vue'), 'utf8')
const css = fs.readFileSync(path.join(__dirname, '..', 'src', 'style.css'), 'utf8')

test('skip link points to a focusable main landmark', () => {
  assert.match(app, /class="skip-link"\s+href="#conteudo"/)
  assert.match(app, /<main\s+id="conteudo"[^>]*tabindex="-1"/)
})

test('reduced-motion preferences disable smooth scrolling and transitions', () => {
  assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/)
  assert.match(css, /scroll-behavior:\s*auto\s*!important/)
  assert.match(css, /transition-duration:\s*0\.01ms\s*!important/)
})
