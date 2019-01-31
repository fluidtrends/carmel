const { expect, assert, should } = chai

module.exports = (done, state) => {
  expect(carmel.utils.productExists(), `Looks like you didn't create a product yet`).to.be.true
  expect(carmel.utils.productDependenciesExist(), `Looks like you didn't install the dependencies yet`).to.be.true

  expect(state.events, `Missing expected events`).to.exist
  expect(state.events.startWeb, `Missing expected event`).to.exist
  const newStartWebEvent = (!carmel.original.events || !carmel.original.events.startWeb ||
                            carmel.original.events.startWeb.timestamp < state.events.startWeb.timestamp)
  expect(newStartWebEvent, `Looks like you did not start your website yet`).to.be.true

  done()
}
