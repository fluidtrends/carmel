const { expect, assert, should } = chai

module.exports = (done, state) => {
  expect(carmel.utils.productExists(), `Looks like you didn't create a product yet`).to.be.true
  expect(carmel.utils.productDependenciesExist(), `Looks like you didn't install the dependencies yet`).to.be.true

  expect(carmel.original, "Missing original values").to.exist
  expect(carmel.original.route, "Missing original route").to.exist
  expect(carmel.original.route.title, "Missing original route title").to.exist

  expect(state.route, `Missing the expected route`).to.exist
  expect(state.route.title, `Missing the expected route title`).to.exist
  expect(carmel.original.route.title, `Change the route title to something other than "${state.route.title}"`).to.not.equal(state.route.title)

  done()
}
