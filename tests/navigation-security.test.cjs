const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')

const root = path.resolve(__dirname, '..')
const files = ['src/App.vue', 'src/components/HeaderSection.vue', 'src/components/AboutSection.vue', 'src/components/ServicesSection.vue', 'src/components/ContactSection.vue']
const sources = files.map(file => ({ file, content: fs.readFileSync(path.join(root, file), 'utf8') }))

test('internal navigation anchors point to existing section ids', () => {
  const markup = sources.map(({ content }) => content).join('\n')
  const ids = new Set([...markup.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]))
  const targets = [...markup.matchAll(/\bhref="#([^"]+)"/g)].map(match => match[1])
  assert.ok(targets.length >= 3, 'Expected primary navigation anchors')
  for (const target of targets) assert.ok(ids.has(target), 'Missing target for #' + target)
})

test('links opening new tabs use noopener and noreferrer', () => {
  let count = 0
  for (const { file, content } of sources) {
    for (const match of content.matchAll(/<a\b[^>]*>/gs)) {
      const tag = match[0]
      if (!/\btarget="_blank"/.test(tag)) continue
      count++
      assert.match(tag, /\brel="[^"]*\bnoopener\b[^"]*\bnoreferrer\b[^"]*"/, 'Unsafe new-tab link in ' + file)
    }
  }
  assert.ok(count >= 4, 'Expected external contact links')
})
