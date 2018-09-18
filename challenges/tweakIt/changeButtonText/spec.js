module.exports = ({ chai, utils, original, done }) => {
  const originalIntroChunkTextButton = original.chunks.intro.routes.main.cover.primaryActionTitle

  const introChunkConfig = utils.readFile('chunks/intro/chunk.json')
  const introChunksTextButton = introChunkConfig.routes.main.cover.primaryActionTitle

  chai.expect(introChunksTextButton).to.not.equal(originalIntroChunkTextButton, `Make sure you change the text of your button from "${originalIntroChunkTextButton}" to something else`)

  done()
}
