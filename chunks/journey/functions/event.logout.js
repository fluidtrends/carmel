module.exports = ({ args, journey, timestamp }) => {
  var update = Object.assign({}, journey)
  var response = { message: "ok" }

  if (update.sessions && update.sessions[args.machineId]) {
    delete update.sessions[args.machineId]
  }

  return { update, response }
}
