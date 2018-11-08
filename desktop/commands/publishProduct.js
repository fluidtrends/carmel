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
    process.send({ status: 'Packaging your product for publishing ...' })

    // const dir = path.resolve(product.dir, '.chunky', 'web')
    // const assetsDir = path.resolve(product.dir, 'assets')
    // fs.existsSync(dir) && fs.removeSync(dir)
    // fs.mkdirsSync(dir)
    //
    // const manifest = loadManifest(product)
    // const chunks = loadChunks(product)
    //
    // const root = product.root
    // const configFile = path.resolve(root, 'node_modules', 'react-dom-chunky', 'packager', 'config.js')
    // const config = require(configFile)
    // const setup = config({ dir: product.dir, chunks, config: manifest, root })
    //
    // process.noDeprecation = true
    // process.env.NODE_ENV = 'production'
    //
    // webpack(setup, (error, stats) => {
    //   if (error || (stats.errors && stats.errors.length > 0)) {
    //     // Looks like webpack failed
    //     process.send({ status: 'Failed to package' })
    //     reject(error || stats.errors[0])
    //     return
    //   }
    //
    //   process.send({ status: 'Your product was successfully packaged' })
    //   fs.copySync(path.resolve(product.dir, 'assets'), path.resolve(dir, 'assets'))
      resolve()
    // })
  })
}

const deploy = (product, session, domain) => {
  return new Promise((resolve, reject) => {
    const dir = path.resolve(product.dir, '.chunky', 'web')

    process.send({ status: 'Deploying your product package to the cloud ...' })

    if (!fs.existsSync(dir)) {
      process.send({ status: 'Failed to deploy because it was not packaged yet' })
      reject(new Error('Failed to deploy because it was not packaged yet'))
      return
    }

    if (!session || !session.settings || !session.settings.cloud || session.settings.cloud.provider !== 'aws') {
      process.send({ status: 'Failed to deploy because your cloud is not setup yet' })
      reject(new Error('Failed to deploy because your cloud is not setup yet'))
      return
    }

    process.env.AWS_ACCESS_KEY_ID = session.settings.cloud.accessKeyId
    process.env.AWS_SECRET_ACCESS_KEY = session.settings.cloud.secretAccessKey

    process.send({ status: `Looking up ${domain} ...` })

    const bucket = new awsome.Bucket({ name: `${domain}`, site: true, dir })
    const redirectBucket = new awsome.Bucket({ name: `www.${domain}`, site: { redirectTo: `${domain}` }, dir })
    const bucketDomain = new awsome.Domain({ name: domain })

    const host = () => {
      return new Promise((resolve, reject) => {
        bucketDomain.isHosted()
                    .then(() => bucketDomain.records({ type: "NS" }))
                    .then((records) => resolve(records[0].ResourceRecords.map(r => r.Value)))
                    .catch(() => {
                      bucketDomain.host()
                      .then(() => bucketDomain.linkBucket())
                      .then(() => bucketDomain.records({ type: "NS" }))
                      .then((records) => resolve(records[0].ResourceRecords.map(r => r.Value)))
                    })
      })
    }

    const publish = (hosting) => {
      host().then((records) => {
        process.send({ status: 'Publishing your product files ...', data: { records } })
        bucket.update()
            .then(() => {
              process.send({ status: 'Your product was successfully published', done: true })
            })
            .catch((error) => {
              process.send({ status: 'Your product could not be published', error })
            })
        })
    }

    bucket.exists().then(() => publish())
          .catch((e) => {
            bucket.create().then(() => {
              console.log("created.....")
              setTimeout(() => publish(true), 2000)
            })
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
