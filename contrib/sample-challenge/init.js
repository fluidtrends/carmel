const { expect, assert, should } = chai

const REQUIREMENTS = [
  `at least a chunk with a route that contains a title, a cover title and a cover subtitle`
]

const validRoute = (route) => {
  return route && route.title && route.cover && route.cover.title && route.cover.subtitle
}

const initialChecks = () => {
  expect(carmel).to.exist
  expect(carmel.product).to.exist
  expect(carmel.product.chunks).to.be.an('array').that.is.not.empty
  expect(carmel.utils).to.exist
  expect(carmel.task).to.exist
  expect(carmel.challenge).to.exist
}

const findChunksWithValidRoutes = () => {
  return carmel.product.chunks.map(chunk => {
    if (!chunk.config.routes) {
      return
    }

    const validRoutes = Object.keys(chunk.config.routes).map(route => validRoute(chunk.config.routes[route]) ? route : false)
    return (validRoutes && validRoutes.length > 0) ? Object.assign({}, chunk, { validRoutes }) : false
  })
}

const init = (done) => {
  // Perform basic checks
  initialChecks()

  // Let's look up chunks with at least a route that contains a title, a cover title and a cover subtitle
  const chunks = findChunksWithValidRoutes()

  // This challenge needs a route that contains a title, a cover title and a cover subtitle
  assert(chunks && chunks.length > 0, `This challenge requires ${REQUIREMENTS[0]}`)

  // Let's take the first of these
  const chunk = chunks[0]

  // And let's also take its first valid route
  const route = chunk.validRoutes[0]

  done ({ chunk, route })
}

module.exports = init
