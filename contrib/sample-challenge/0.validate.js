const expected = {
  title: "string",
  chunk: "string",
  route: "string"
}

const main = ({ chai, utils, expected, done }) => {
  const chunkConfig = utils.readFile(`chunks/${expected.chunk}/chunk.json`)
  const chunkTitle = chunkConfig.routes[expected.route].title

  chai.expect(chunkTitle).to.equal(expected.title, `Make sure you change the intro page title to "${expected.title}"`)

  done()
}

module.exports = {
  expected,
  main
}
