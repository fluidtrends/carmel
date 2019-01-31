module.exports = ({ args, journey, timestamp }) => {
  var update = Object.assign({}, journey)
  var response = { message: "ok" }

  update.sessions = update.sessions || {}
  update.sessions[args.machineId] = (Object.assign({}, args, { timestamp }))

  update.machines = update.machines || {}
  update.machines[args.machineId] = Object.assign({}, args, { timestamp })

  return { update, response }
}
