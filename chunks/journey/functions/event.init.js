module.exports = ({ args, journey, timestamp }) => {
  var update = Object.assign({}, journey)
  var response = { message: "ok" }

  update.products = update.products || []
  update.products.push(Object.assign({}, args, { timestamp }))

  return { update, response }
}
