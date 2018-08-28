const chai = require('chai')

module.exports = ({ readFile, done }) => {
  const mainConfig = readFile('chunky.json')
  chai.expect(mainConfig).to.exist
  chai.expect(mainConfig.theme.navigationColor).to.not.equal('#FFFFFF')
  done()
}
