const chai = require('chai')

module.exports = ({ readFile, done }) => {
  const mainConfig = readFile('chunky.json')
  chai.expect(mainConfig).to.exist
  chai.expect(mainConfig.theme.logoImage).to.not.equal('logo-white.png')
  chai.expect(mainConfig.theme.logoLightImage).to.not.equal('logo.png')
  done()
}
