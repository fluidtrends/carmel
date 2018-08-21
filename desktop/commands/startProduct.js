const getPort = require('get-port')
const { Product } = require('react-chunky/lib/extended')

const start = ({ command, CARMEL_HOME, CARMEL_ROOT }) => {
  const product = new Product({ id: command.id, home: CARMEL_HOME, root: CARMEL_ROOT })

  getPort()
    .then((port) => product.start({ port, light: command.light }, (compilation) => {
      var errors = compilation.errors
      if (errors) {
        errors = errors.map((error) => error.message)
        delete compilation.errors
      }
      process.send(Object.assign({}, compilation, errors && { errors }))
    }))
    .then(({ port, files }) => {
      process.send({ done: true, port, dir: product.dir, files })
    })
    .catch((error) => {
      process.send({ done: true, errors: [error.message] })
    })
}

process.on('message', (data) => {
  if (data && data.start) {
    start(data)
    return
  }
})
