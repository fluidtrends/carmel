const expected = {
  title: "string",
  chunk: "string",
  route: "string"
}

const main = ({ chai, utils, expected, done }) => {
  const chunkConfig = utils.readFile(`chunks/${expected.chunk}/chunk.json`)
  const chunkCoverTitle = chunkConfig.routes[expected.route].cover.title

  chai.expect(chunkCoverTitle).to.equal(expected.title, `Make sure you change the intro cover title to "${expected.title}"`)

  done()
}

module.exports = {
  expected,
  main
}
