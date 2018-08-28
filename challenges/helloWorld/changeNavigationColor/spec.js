module.exports = ({ chai, utils, done }) => {
  const mainConfig = utils.readFile('chunky.json')
  chai.expect(mainConfig).to.exist
  chai.expect(mainConfig.theme.navigationColor).to.not.equal('#FFFFFF')
  done()
}
