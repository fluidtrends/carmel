module.exports = ({ chai, utils, done }) => {
  const introChunkConfig = utils.readFile('chunks/intro/chunk.json')
  chai.expect(introChunkConfig).to.exist
  chai.expect(introChunkConfig.routes.main.subtitle).to.not.equal('Checkout all the cool bikes')
  done()
}
