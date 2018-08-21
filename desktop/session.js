const cassi = require('cassi')
const md5File = require('md5-file')
const fs = require('fs-extra')
const path = require('path')
const { decompressDependencies } = require('./utils')
const chokidar = require('chokidar')
const { app } = require('electron')
const { Product } = require('react-chunky/lib/extended')
const Git = require('nodegit')
const importFrom = require('import-from')
const Module = require('module')
const Jimp = require('jimp')

const sessionVaultPassword = '_carmel_session'
const machineVaultPassword = '_carmel_machine'

const CARMEL_ROOT = app.getAppPath()
const USER_ROOT = app.getPath('userData')

const HOME = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']
const CARMEL_HOME = path.resolve(HOME, '.carmel')
const CARMEL_VAULTS = path.resolve(CARMEL_HOME, '.vaults')
const CARMEL_HOME_MACHINE = path.resolve(CARMEL_HOME, 'machine')
const CARMEL_MACHINE_BUNDLES = path.resolve(CARMEL_HOME_MACHINE, 'bundles')
const CARMEL_MACHINE_CHALLENGES = path.resolve(CARMEL_HOME_MACHINE, 'challenges')
const CARMEL_HOME_PRODUCTS = path.resolve(CARMEL_HOME, 'products')
const CARMEL_REPO = 'https://github.com/fluidtrends/carmel.git'
const CARMEL_TEMPLATE_PROPS = {}

const ENV = {
  HOME,
  CARMEL_HOME,
  CARMEL_VAULTS,
  CARMEL_HOME_MACHINE,
  CARMEL_HOME_PRODUCTS
}

class Session {
  constructor () {
    this._sessionVault = new cassi.Vault({ name: 'carmelsession', root: CARMEL_VAULTS })
    this._machineVault = new cassi.Vault({ name: 'carmelmachine', root: CARMEL_VAULTS })
    this._isFirstTime = true
    this._listeners = []
    this._onWatcherFileChanged = this.onWatcherFileChanged.bind(this)
    this._onWatcherFileRemoved = this.onWatcherFileRemoved.bind(this)
    this._onWatcherFileAdded = this.onWatcherFileAdded.bind(this)
    this._products = {}
    this._files = {}
  }

  get sessionVault () {
    return this._sessionVault
  }

  get machineVault () {
    return this._machineVault
  }

  get isInitialized () {
    return (fs.existsSync(CARMEL_HOME) && fs.existsSync(CARMEL_VAULTS))
  }

  get isFirstTime () {
    return this._isFirstTime
  }

  get watcher () {
    return this._watcher
  }

  get products () {
    return this._products
  }

  get templates () {
    return this._templates
  }

  get mainWindow () {
    return this._mainWindow
  }

  get product () {
    return this._product
  }

  get challenge () {
    return this._challenge
  }

  get data () {
    return {
      products: this.products,
      product: this.product,
      bundles: this.bundles,
      challenge: this.challenge,
      templates: this.templates,
      root: CARMEL_ROOT
    }
  }

  get files () {
    return this._files
  }

  get bundles () {
    return this._bundles
  }

  createMachineFingerprint (vaults) {
    const machineFingerprintFile = path.join(this.machineVault.dir, `index.json`)
    var machineFingerprint = md5File.sync(machineFingerprintFile)
    this.sessionVault.write('_machineFingerprint', machineFingerprint)

    this.machineVault.write('fingerprint', machineFingerprint)
    machineFingerprint = md5File.sync(machineFingerprintFile)

    this.sessionVault.write('machineFingerprint', machineFingerprint)
    this.sessionVault.write('machineId', this.machineVault.id)
  }

  create () {
    return new Promise((resolve, reject) => {
      reject(new Error('Work in progress do not touch please :)'))
      // fs.existsSync(CARMEL_HOME) && fs.removeSync(CARMEL_HOME)
      // fs.mkdirsSync(CARMEL_HOME_PRODUCTS)
      // fs.mkdirsSync(CARMEL_HOME_MACHINE)

      // Jimp.read('http://www.example.com/path/to/lenna.jpg')
      //     .then(image => {
      //         // do stuff with the image
      //     })
      //     .catch(err => {
      //         // handle an exception
      //     })

      // const cloneOptions = new Git.CloneOptions()
      // cloneOptions.checkoutBranch = 'machine'
      // Git.Clone.clone(CARMEL_REPO, CARMEL_HOME_MACHINE, cloneOptions)
      //           .then((repo) => {
      //             console.log(repo)
      //           })
      //           .catch((e) => {
      //             console.log(e)
      //           })

          // return Git.Repository.open(path.resolve(CARMEL_MACHINE, '.git'))
          //           .then((repo) => repo.fetch('origin').then(() => repo.mergeBranches('machine', 'origin/machine')))

      // fs.copySync(path.resolve(CARMEL_ROOT, 'desktop', 'machine'), CARMEL_MACHINE)
      // fs.moveSync(path.resolve(CARMEL_MACHINE, 'git'), path.resolve(CARMEL_MACHINE, '.git'))

      // return this.sessionVault.create(sessionVaultPassword)
      //             .then((session) => this.machineVault.create(machineVaultPassword).then((machine) => ({ machine: machine.vault, session: session.vault })))
      //             .then((vaults) => {
      //               this.createMachineFingerprint(vaults)
      //               return this.load(vaults.session, true)
      //             })
      //             .then((session) => resolve(Object.assign({}, session, { isFirstTime: true })))
      //             .catch((error) => reject(error))
    })
  }

  validateMachineFingerprint (sessionVault, machineVault) {
    return new Promise((resolve, reject) => {
      try {
        const machineFingerprintFile = path.join(machineVault.dir, `index.json`)
        const machineFingerprint = md5File.sync(machineFingerprintFile)

        const valid = (
          (sessionVault.read('_machineFingerprint') === machineVault.read('fingerprint')) &&
          (sessionVault.read('machineId') === machineVault.id) &&
          (sessionVault.read('machineFingerprint') === machineFingerprint)
        )

        resolve(valid)
      } catch (error) {
        reject(error)
      }
    })
  }

  checkMachineFingerprint (sessionVault, quickValidation) {
    if (quickValidation) {
      return Promise.resolve(true)
    }

    return this.machineVault.load().then(({ vault }) => this.validateMachineFingerprint(sessionVault, vault))
  }

  get listeners () {
    return this._listeners
  }

  listen (listener) {
    if (!listener) {
      return
    }

    this._listeners.push(listener)
  }

  parseWatchedFile (f) {
    const file = path.relative(CARMEL_HOME, f)
    const paths = file.split(path.sep)
    const type = paths[0].toLowerCase()

    return { type, file }
  }

  onWatcherFileChanged (file) {
    const data = this.parseWatchedFile(file)
  }

  onWatcherFileRemoved (file) {
    const data = this.parseWatchedFile(file)
  }

  onWatcherFileAdded (file) {
    const data = this.parseWatchedFile(file)

    switch (data.type) {
      case 'products':
        this.onNewProductFile(data.file)
        break
      default:
    }
  }

  onNewProductFile (file) {
    const paths = file.split(path.sep)
    const productId = paths[1]
    const productFile = paths.slice(2).join(path.sep)

    if (productFile === 'chunky.json') {
      this.loadProduct(productId)
    }
  }

  loadProduct (productId) {
    try {
      const productManifest = path.resolve(CARMEL_HOME_PRODUCTS, productId, 'chunky.json')
      const dataContent = fs.readFileSync(productManifest, 'utf8')
      const data = JSON.parse(dataContent)
      const product = Object.assign({}, data, { id: productId })
      this._products[productId] = product
      return data
    } catch (e) {
    }
  }

  startWatching () {
    this._watcher = chokidar.watch([CARMEL_HOME], {
      ignored: /node_modules|bundles|assets|\.DS_Store/,
      persistent: true
    })
    this._watcher
        .on('add', this._onWatcherFileAdded)
        .on('unlink', this._onWatcherFileRemoved)
        .on('change', this._onWatcherFileChanged)
  }

  loadDependencies () {
    try {
      require('app-module-path').addPath(path.resolve(CARMEL_ROOT, 'node_modules'))
      this._bundles = require.main.require(CARMEL_MACHINE_BUNDLES)
      this._challenges = require.main.require(CARMEL_MACHINE_CHALLENGES)
    } catch (e) {
    }
  }

  loadProducts () {
    if (!fs.existsSync(CARMEL_HOME_PRODUCTS)) {
      this.sessionVault.write('productId', '')
      return
    }

    const dirs = fs.readdirSync(CARMEL_HOME_PRODUCTS)
    dirs.filter(d => d[0] !== '.').map(productId => this.loadProduct(productId))

    if (!this.products || Object.keys(this.products).length === 0) {
      this.sessionVault.write('productId', '')
      return
    }

    this._product = this.products[Object.keys(this.products)[0]]
    const cachedProductId = this.sessionVault.read('productId')

    if (cachedProductId && this.products[cachedProductId]) {
      this._product = this.products[cachedProductId]
    } else {
      this.sessionVault.write('productId', this.product.id)
    }

    const cachedChallengeId = this.sessionVault.read('challengeId')
    this._challenge = { id: cachedChallengeId }
  }

  loadTemplates () {
    this._templates = []

    if (!this.bundles) {
      return
    }

    Object.keys(this.bundles).forEach(bundleName => {
      const bundle = this.bundles[bundleName]
      Object.keys(bundle.templates).forEach(templateName => {
        const template = bundle.templates[templateName]
        const bundleDir = path.resolve(CARMEL_MACHINE_BUNDLES, bundleName)
        const assetsDir = path.resolve(bundleDir, 'assets')
        const defaults = template(CARMEL_TEMPLATE_PROPS)

        this._templates.push(Object.assign({}, defaults, {
          assetsDir,
          bundleDir,
          id: this.templates.length,
          bundle: bundleName
        }))
      })
    })
  }

  load (vault, quickValidation) {
    return new Promise((resolve, reject) => {
      try {
        this._files = {}
        this.updateCache(quickValidation)
             .then(() => this.checkMachineFingerprint(vault, quickValidation))
             .then((valid) => {
               if (!valid) {
                 reject(new Error('Invalid machine fingerprint'))
                 return
               }
               this.loadDependencies()
               this.loadProducts()
               this.loadTemplates()
               this.startWatching()
               resolve(this.data)
             })
              .catch((error) => reject(error))
      } catch (error) {
        reject(error)
      }
    })
  }

  createProduct ({ client, name, template }) {
    try {
      const id = name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

      const fixture = this.bundles[template.bundle].fixtures[template.fixture]
      const product = new Product({ name, id, template, fixture, root: CARMEL_ROOT, home: CARMEL_HOME })

      product.create()
             .then(() => {
               this.sessionVault.write('productId', id)
               this.loadProducts()
               this.mainWindow.webContents.send('refresh', { session: this.data })
               this.mainWindow.webContents.send(client, { product, done: true })
             })
             .catch((error) => {
               console.log(error)
               this.mainWindow.webContents.send(client, { error })
             })
    } catch (error) {
      console.log(error)
      this.mainWindow.webContents.send(client, { error })
    }
  }

  start ({ mainWindow }) {
    this._mainWindow = mainWindow

    // if (!this.isInitialized) {
    return this.create()
    // }
    // return this.sessionVault.load().then(({ vault }) => this.load(vault))
  }
}

module.exports = Session
