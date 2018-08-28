module.exports = ({ chai, utils, done }) => {
  const mainConfig = utils.readFile('chunky.json')
  chai.expect(mainConfig).to.exist
  chai.expect(mainConfig.theme.logoImage).to.not.equal('logo-white.png')
  chai.expect(mainConfig.theme.logoLightImage).to.not.equal('logo.png')
  done()
}
