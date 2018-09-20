module.exports = ({ chai, utils, original, done }) => {
  const originalTextContent = original.assets.text.intro

  const introAssetsConfig = utils.readFile('assets/text/intro.md')
  const contentText = introAssetsConfig

  chai.expect(introChunksTextButton).to.not.equal(originalTextContent, `Make sure your content is different`)

  done()
}
