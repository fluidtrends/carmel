const { expect, assert, should } = chai

module.exports = (done, { chunk, route }) => {
  expect(carmel.task.expected, "Missing expected values").to.exist
  expect(carmel.task.expected.title, "Missing expected title").to.exist

  expect(chunk.config.routes[route].title, `The ${chunk.name}:${route} route does not have a title`).to.exist
  expect(chunk.config.routes[route].title, `The ${chunk.name}:${route} route title is wrong`).to.equal(carmel.task.expected.title)

  done()
}
