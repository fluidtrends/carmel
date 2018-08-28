module.exports = ({ chai, utils, original, done }) => {
  const originalIntroChunkCoverTitle = original.chunks.intro.routes.main.cover.title

  const introChunkConfig = utils.readFile('chunks/intro/chunk.json')
  const introChunkCoverTitle = introChunkConfig.routes.main.cover.title

  chai.expect(introChunkCoverTitle).to.not.equal(originalIntroChunkCoverTitle, `Make sure you change the intro cover title from "${originalIntroChunkCoverTitle}" to something else`)

  done()
}
