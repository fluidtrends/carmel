module.exports = ({ args, journey, timestamp }) => {
  var update = Object.assign({}, journey)
  var response = { message: "ok" }

  update.setup = Object.assign({}, args, { timestamp })

  return { update, response }
}
