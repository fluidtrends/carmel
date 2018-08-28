module.exports = ({ chai, utils, done }) => {
  const introChunkConfig = utils.readFile('chunks/intro/chunk.json')
  chai.expect(introChunkConfig).to.exist
  chai.expect(introChunkConfig.routes.main.title).to.not.equal('Welcome', 'Make sure the title is different')
  done()
}
