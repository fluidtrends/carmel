const { expect, assert, should } = chai

module.exports = (done, state) => {
  expect(carmel.utils.productExists(), `Looks like you didn't create a product yet`).to.be.true
  expect(carmel.utils.productDependenciesExist(), `Looks like you didn't install the dependencies yet`).to.be.true

  expect(carmel.original, "Missing original values").to.exist
  expect(carmel.original.route, "Missing original route").to.exist
  expect(carmel.original.route.cover, "Missing original route cover").to.exist
  expect(carmel.original.route.cover.subtitle, "Missing original route cover subtitle").to.exist

  expect(state.route, `Missing the expected route`).to.exist
  expect(state.route.cover, `Missing the expected route cover`).to.exist
  expect(state.route.cover.subtitle, `Missing the expected route cover subtitle`).to.exist
  expect(carmel.original.route.cover.subtitle, `Change the route cover subtitle to something other than "${state.route.cover.subtitle}"`).to.not.equal(state.route.cover.subtitle)

  done()
}
