const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')

const html = fs.readFileSync(path.join(__dirname, '..', 'public', 'index.html'), 'utf8')

test('page declares Brazilian Portuguese and a meaningful title', () => {
  assert.match(html, /<html\s+lang="pt-BR"/)
  assert.match(html, /<title>[^<]*Anelise[^<]*Psicóloga<\/title>/)
})

test('search and social descriptions identify the service without outcome guarantees', () => {
  for (const name of ['description', 'twitter:description']) {
    assert.match(html, new RegExp('<meta\\s+name="' + name + '"\\s+content="[^"]*atendimento psicológico[^"]*"'))
  }
  assert.match(html, /<meta\s+property="og:description"\s+content="[^"]*atendimento psicológico[^"]*"/)
  assert.doesNotMatch(html, /cura garantida|resultado garantido|100% de eficácia/i)
})

test('social previews expose Open Graph title, locale and website type', () => {
  assert.match(html, /property="og:locale"\s+content="pt_BR"/)
  assert.match(html, /property="og:type"\s+content="website"/)
  assert.match(html, /property="og:title"\s+content="[^"]*Anelise[^"]*"/)
})

test('favicon and mount point are present', () => {
  assert.match(html, /rel="icon"\s+href="[^"]*favicon\.ico"/)
  assert.match(html, /<div id="app"><\/div>/)
})
