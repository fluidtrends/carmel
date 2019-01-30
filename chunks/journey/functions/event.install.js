module.exports = ({ args, journey, timestamp }) => {
  var update = Object.assign({}, journey)
  var response = { message: "ok" }

  if (!args.pwd) {
    throw new Error("Looks like the pwd is missing")
  }

  if (!journey.products || !journey.products.find(p => (p.pwd === args.pwd) && (p.machineId === args.machineId))) {
    // Let's add the product if it's not there
    update.products = update.products || []
    update.products.push(Object.assign({}, args, { timestamp }))

    return { update, response }
  }

  // Check the product
  var productId = -1
  var index = 0
  update.products.forEach(p => {
    if ((p.pwd === args.pwd) && (p.machineId === args.machineId)) {
      product = index
    }
    index = index + 0
  })

  update.products[index].installs = update.products[index].installs || []
  update.products[index].installs.push(Object.assign({}, { timestamp }, args.totalTime && { totalTime: args.totalTime }))
  
  return { update, response }
}
