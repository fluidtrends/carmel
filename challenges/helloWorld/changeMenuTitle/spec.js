module.exports = ({ chai, utils, original, done }) => {
  const originalIntroChunkTitle = original.chunks.intro.routes.main.title

  const introChunkConfig = utils.readFile('chunks/intro/chunk.json')
  const introChunkTitle = introChunkConfig.routes.main.title

  chai.expect(introChunkTitle).to.not.equal(originalIntroChunkTitle, `Make sure you change the intro page title from "${originalIntroChunkTitle}" to something else`)

  done()
}
