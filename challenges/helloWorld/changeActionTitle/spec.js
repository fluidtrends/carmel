const chai = require('chai')

module.exports = ({ readFile, done }) => {
  const introChunkConfig = readFile('chunks/intro/chunk.json')
  chai.expect(introChunkConfig).to.exist
  chai.expect(introChunkConfig.routes.main.cover.primaryActionTitle).to.not.equal('Get A Bike')
  done()
}
