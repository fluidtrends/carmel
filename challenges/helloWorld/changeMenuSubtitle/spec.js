const chai = require('chai')

module.exports = ({ readFile, done }) => {
  const introChunkConfig = readFile('chunks/intro/chunk.json')
  chai.expect(introChunkConfig).to.exist
  chai.expect(introChunkConfig.routes.main.subtitle).to.not.equal('Checkout all the cool bikes')
  done()
}
