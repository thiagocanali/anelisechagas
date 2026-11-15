const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')

const header = fs.readFileSync(path.join(__dirname, '..', 'src', 'components', 'HeaderSection.vue'), 'utf8')

test('primary navigation links provide 44px touch targets', () => {
  assert.match(header, /\.site-nav a\s*\{[^}]*min-height:\s*44px\s*;/s)
})

test('secondary header action provides a 44px touch target', () => {
  assert.match(header, /\.header-secondary\s*\{[^}]*min-height:\s*44px\s*;/s)
})

test('navigation and contact actions remain available', () => {
  for (const anchor of ['#sobre', '#servicos', '#contato']) {
    assert.ok(header.includes('href="' + anchor + '"'), 'Missing header anchor: ' + anchor)
  }
  assert.match(header, /https:\/\/wa\.me\/5549984114013/)
})
