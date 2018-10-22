const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const getPort = require('get-port')
const {
  createFile,
  generateManifest,
  generatePackage,
  loadManifest,
  loadChunks,
  Product,
  installTemplate
} = require('react-chunky/lib/extended')
const path = require('path')
const fs = require('fs-extra')
const async = require('async')
const fetch = require('node-fetch')

var compiler, server, port

const compilerConfig = ({ dir, port }) => {
  return {
    host: '0.0.0.0',
    inline: true,
    quiet: true,
    noInfo: true,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false,
      modules: false
    },
    port,
    contentBase: path.resolve(dir),
    watchContentBase: true,
    historyApiFallback: true,
    hot: true
  }
}

const startWebserver = ({ port, product }, cb) => {
  return new Promise((resolve, reject) => {
    try {
      process.noDeprecation = true

      const dir = path.resolve(product.dir, '.chunky', 'web')
      fs.existsSync(dir) && fs.removeSync(dir)
      fs.mkdirsSync(dir)

      const manifest = loadManifest(product)
      const chunks = loadChunks(product)

      const root = product.root
      const configFile = path.resolve(root, 'node_modules', 'react-dom-chunky', 'packager', 'config.dev.js')
      const config = require(configFile)
      const setup = config({ dir: product.dir, chunks, config: manifest, root, port })
      const compConfig = compilerConfig({ dir: product.dir, root, port })

      compiler = webpack(setup)
      compiler.plugin('done', (stats) => {
        cb && cb(Object.assign({}, { compiled: true, compiling: false }, stats.compilation.errors.length > 0, { errors: stats.compilation.errors }))
        resolve({ port, files: product.files })
      })
      compiler.plugin('compile', (params) => {
        cb && cb(Object.assign({}, { compiled: false, compiling: true }))
      })

      server = new WebpackDevServer(compiler, compConfig)
      server.listen(port, '0.0.0.0', (error) => {
        if (error) {
          reject(error)
          return
        }
      })
    } catch (e) {
      reject(e)
    }
  })
}

const refreshWebserver = ({ port, product }, cb) => {
  return new Promise((resolve, reject) => {
    try {
      process.noDeprecation = true

      compiler.plugin('done', (stats) => {
        cb && cb(Object.assign({}, { compiled: true, compiling: false }, stats.compilation.errors.length > 0 && { errors: stats.compilation.errors }))
        resolve({ port, files: product.files })
      })

      compiler.plugin('compile', (params) => {
        cb && cb(Object.assign({}, { compiled: false, compiling: true }))
      })

      cb && cb(Object.assign({}, { compiled: true, compiling: false }))
      resolve({ port, files: product.files })
    } catch (e) {
      reject(e)
    }
  })
}

const startProduct = ({ light, product }, cb) => {
  console.log('Starting product ...', product.id)

  if (light) {
    return product.loadFileList()
  }

  return product.loadFileList()
          .then(() => getPort())
          .then((port) => startWebserver({ port, product }, cb))
}

const refreshProduct = ({ light, product }, cb) => {
  console.log('Refreshing product ...', product.id)

  if (light) {
    return product.loadFileList()
  }

  return product.loadFileList()
         .then(() => refreshWebserver({ port, product }, cb))
}

const start = ({ command, CARMEL_HOME, CARMEL_ROOT }) => {
  const product = new Product({ id: command.id, home: CARMEL_HOME, root: CARMEL_ROOT })

  startProduct({ light: command.light, product }, (compilation) => {
    var errors = compilation.errors
    if (errors) {
      errors = errors.map((error) => error.message)
      delete compilation.errors
    }
    process.send(Object.assign({}, compilation, errors && { errors }))
  })
  .then((result) => {
    port = result.port
    process.send({ done: true, port, dir: product.dir, files: result.files })
  })
  .catch((error) => {
    process.send({ done: true, errors: [error.message] })
  })
}

const refresh = ({ command, CARMEL_HOME, CARMEL_ROOT }) => {
  const product = new Product({ id: command.id, home: CARMEL_HOME, root: CARMEL_ROOT })

  refreshProduct({ light: command.light, product }, (compilation) => {
    var errors = compilation.errors
    if (errors) {
      errors = errors.map((error) => error.message)
      delete compilation.errors
    }
    process.send(Object.assign({}, compilation, errors && { errors }))
  })
  .then((result) => {
    process.send({ done: true, port, dir: product.dir, files: result.files })
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

  if (data && data.refresh) {
    refresh(data)
    return
  }
})
