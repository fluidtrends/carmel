module.exports = ({ chai, utils, original, done }) => {
  const originalIntroChunkCoverSubtitle = original.chunks.intro.routes.main.cover.title

  const introChunkConfig = utils.readFile('chunks/intro/chunk.json')
  const introChunkCoverSubtitle = introChunkConfig.routes.main.cover.subtitle

  chai.expect(introChunkCoverSubtitle).to.not.equal(originalIntroChunkCoverSubtitle, `Make sure the cover subtitle is not "${originalIntroChunkCoverSubtitle}"`)

  done()
}
