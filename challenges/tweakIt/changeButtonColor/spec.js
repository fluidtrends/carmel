module.exports = ({ chai, utils, original, done }) => {
  const originalIntroButtonColor = original.secondaryColor

  const chunkConfig = utils.readFile('chunky.json')
  const introButtonColor = chunkConfig.theme.secondaryColor

  chai.expect(introButtonColor).to.not.equal(originalIntroButtonColor, `Make sure you change the color of your button from "${originalIntroButtonColor}" to something else`)

  done()
}
