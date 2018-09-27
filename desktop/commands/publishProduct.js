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
const awsome = require('awsome')
const webpack = require('webpack')
const browserSync = require('browser-sync')
const getPort = require('get-port')
const copyfiles = require('copyfiles')

const build = (product) => {
  return new Promise((resolve, reject) => {
    process.send({ status: 'Building ...' })

    const dir = path.resolve(product.dir, '.chunky', 'web')
    const assetsDir = path.resolve(product.dir, 'assets')
    fs.existsSync(dir) && fs.removeSync(dir)
    fs.mkdirsSync(dir)

    const manifest = loadManifest(product)
    const chunks = loadChunks(product)

    const root = product.root
    const configFile = path.resolve(root, 'node_modules', 'react-dom-chunky', 'packager', 'config.js')
    const config = require(configFile)
    const setup = config({ dir: product.dir, chunks, config: manifest, root })

    process.noDeprecation = true
    process.env.NODE_ENV = 'production'

    webpack(setup, (error, stats) => {
      if (error || (stats.errors && stats.errors.length > 0)) {
        // Looks like webpack failed
        process.send({ status: 'Failed to build.' })
        reject(error || stats.errors[0])
        return
      }

      process.send({ status: 'Built successfully.' })
      fs.copySync(path.resolve(product.dir, 'assets'), path.resolve(dir, 'assets'))
      resolve()
    })
  })
}

const deploy = (product, session, domain) => {
  return new Promise((resolve, reject) => {
    const dir = path.resolve(product.dir, '.chunky', 'web')

    process.send({ status: 'Deploying ...' })

    if (!fs.existsSync(dir)) {
      process.send({ status: 'Failed to deploy. Not build yet.' })
      reject(new Error('Not build yet'))
      return
    }

    if (!session || !session.settings || !session.settings.cloud || session.settings.cloud.provider !== 'aws') {
      process.send({ status: 'Failed to deploy. Your AWS Cloud is not setup yet.' })
      reject(new Error('Your AWS Cloud is not setup yet'))
      return
    }

    process.env.AWS_ACCESS_KEY_ID = session.settings.cloud.accessKeyId
    process.env.AWS_SECRET_ACCESS_KEY = session.settings.cloud.secretAccessKey

    process.send({ status: `Looking for www.${domain} bucket ...` })

    const bucket = new awsome.Bucket({ name: `www.${domain}`, site: true, dir })

    bucket.retrieve()
          .then((bucket) => {
            process.send({ status: 'Bucket found. Updating...' })
            return bucket.update()
          })
          .then((data) => {
            process.send({ status: 'Bucket updated.', done: true })
          })
          .catch((error) => {
            process.send({ status: 'Bucket could not be updated.' })
          })
  })
}

const preview = (product) => {
  const server = path.resolve(product.dir, '.chunky', 'web')
  const bs = browserSync.create()

  return getPort().then((port) => bs.init({ port, server }))
}

const start = ({ command, CARMEL_HOME, CARMEL_ROOT, session }) => {
  const product = new Product({ id: command.id, home: CARMEL_HOME, root: CARMEL_ROOT })

  build(product)
        .then(() => deploy(product, session, command.domain))
        .catch((error) => process.send({ error }))
}

process.on('message', (data) => {
  if (data && (data.start || data.refresh)) {
    start(data)
    return
  }
})
