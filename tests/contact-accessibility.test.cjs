const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')

const contact = fs.readFileSync(path.join(__dirname, '..', 'src', 'components', 'ContactSection.vue'), 'utf8')

test('contact links have a minimum touch target of 44px', () => {
  assert.match(contact, /\.contact-links a\s*\{[^}]*min-height:\s*44px\s*;/s)
})

test('contact links expose a visible keyboard focus indicator', () => {
  assert.match(contact, /\.contact-links a:focus-visible\s*\{[^}]*outline:\s*3px solid/s)
})

test('contact section preserves direct contact channels', () => {
  assert.match(contact, /https:\/\/wa\.me\/5549984114013/)
  assert.match(contact, /mailto:anelisechagas\.s@hotmail\.com/)
  assert.match(contact, /https:\/\/linktr\.ee\/anelisechagas/)
})
