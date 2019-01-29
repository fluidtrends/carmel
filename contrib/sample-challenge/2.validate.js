const { expect, assert, should } = chai

module.exports = (done, { chunk, route }) => {
  expect(carmel.task.expected, "Missing expected values").to.exist
  expect(carmel.task.expected.subtitle, "Missing expected subtitle").to.exist

  expect(chunk.config.routes[route].cover, `The ${chunk.name}:${route} route does not have a cover`).to.exist
  expect(chunk.config.routes[route].cover.subtitle, `The ${chunk.name}:${route} route does not have a cover subtitle`).to.exist
  expect(chunk.config.routes[route].cover.subtitle, `The ${chunk.name}:${route} route cover subtitle is wrong`).to.equal(carmel.task.expected.subtitle)

  done()
}
