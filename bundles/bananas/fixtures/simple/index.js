const manifest = require('./manifest')
const footer = require('./footer')
const chunks = require('./chunks')

function fixture (template) {
  return {
    manifest: manifest(template),
    chunks: chunks(template),
    images: [
      'logo.png',
      'logo-white.png',
      `${template.cover}.r.png`
    ],
    text: [
      'intro.md'
    ],
    web: {
      layout: {
        fixed: true
      },
      permissions: {
        privateRedirect: '/me',
        publicRedirect: '/register'
      },
      footer: footer(template)
    }
  }
}

module.exports = fixture
