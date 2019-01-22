const expected = {
  subtitle: "string",
  chunk: "string",
  route: "string"
}

const main = ({ chai, utils, expected, done }) => {
  const chunkConfig = utils.readFile(`chunks/${expected.chunk}/chunk.json`)
  const chunkCoverTitle = chunkConfig.routes[expected.route].cover.title

  chai.expect(introChunkCoverSubtitle).to.equal(expected.subtitle, `Make sure the cover subtitle is "${expected.subtitle}"`)

  done()
}

module.exports = {
  expected,
  main
}
