const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')

const components = ['HeaderSection', 'AboutSection', 'ServicesSection', 'ContactSection']
const source = Object.fromEntries(components.map(name => [
  name,
  fs.readFileSync(path.join(__dirname, '..', 'src', 'components', name + '.vue'), 'utf8')
]))

test('navigation anchors resolve to existing section IDs', () => {
  const links = [...source.HeaderSection.matchAll(/href="#([^"]+)"/g)].map(match => match[1])
  assert.ok(links.length >= 3, 'expected primary navigation anchors')
  const markup = Object.values(source).join('\n')
  for (const anchor of links) {
    assert.match(markup, new RegExp('id="' + anchor + '"'), 'missing section for #' + anchor)
  }
})

test('WhatsApp contact links use the same verified number', () => {
  for (const name of ['HeaderSection', 'ContactSection']) {
    assert.match(source[name], /href="https:\/\/wa\.me\/5549984114013"/)
  }
})

test('external links opening new tabs include safe rel attributes', () => {
  for (const [name, component] of Object.entries(source)) {
    const tags = component.match(/<a\b[^>]*>/gs) || []
    for (const tag of tags) {
      if (!/target="_blank"/.test(tag)) continue
      assert.match(tag, /rel="[^"]*noopener[^"]*"/, name + ': missing noopener')
      assert.match(tag, /rel="[^"]*noreferrer[^"]*"/, name + ': missing noreferrer')
    }
  }
})

test('main content has a matching skip link', () => {
  const app = fs.readFileSync(path.join(__dirname, '..', 'src', 'App.vue'), 'utf8')
  assert.match(app, /href="#conteudo"/)
  assert.match(app, /<main\s+id="conteudo"/)
})
