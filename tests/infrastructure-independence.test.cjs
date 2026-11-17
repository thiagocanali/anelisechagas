const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')

const root = path.resolve(__dirname, '..')
const runtimeFiles = ['package.json', 'src', 'public', 'vue.config.js', 'babel.config.js']
const forbidden = /@supabase\/|supabase(?:\.auth|\.storage|\.channel|\.functions|\.rpc)?|SUPABASE_(?:URL|ANON_KEY|SERVICE_ROLE_KEY)|auth\.uid\s*\(/i

function scan(target) {
  if (!fs.existsSync(target)) return []
  const stat = fs.statSync(target)
  if (stat.isDirectory()) {
    return fs.readdirSync(target, { withFileTypes: true }).flatMap((entry) => {
      if (entry.name.startsWith('.') || entry.name === 'node_modules') return []
      return scan(path.join(target, entry.name))
    })
  }
  if (!/\.(?:js|cjs|mjs|vue|json|html|ts|sql)$/.test(target)) return []
  return forbidden.test(fs.readFileSync(target, 'utf8')) ? [path.relative(root, target)] : []
}

test('public website has no Supabase runtime dependency', () => {
  const matches = runtimeFiles.flatMap((file) => scan(path.join(root, file)))
  assert.deepEqual(matches, [], 'Unexpected Supabase reference: ' + matches.join(', '))
})

test('public website does not introduce a database client dependency', () => {
  const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'))
  const deps = { ...pkg.dependencies, ...pkg.devDependencies }
  for (const name of Object.keys(deps)) {
    assert.doesNotMatch(name, /supabase|@neondatabase\/serverless|^pg$|^postgres$/, 'Unexpected database dependency: ' + name)
  }
})
