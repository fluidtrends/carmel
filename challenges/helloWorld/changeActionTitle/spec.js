module.exports = ({ chai, utils, done }) => {
  const introChunkConfig = utils.readFile('chunks/intro/chunk.json')
  chai.expect(introChunkConfig).to.exist
  chai.expect(introChunkConfig.routes.main.cover.primaryActionTitle).to.not.equal('Get A Bike')
  done()
}
