const { ipcMain, BrowserWindow, shell } = require('electron')
const io = require('socket.io-client')
const os = require('os')
const osName = require('os-name')
const fs = require('fs-extra')
const path = require('path')
const { spawn } = require('child_process')
const opn = require('opn')
const recursive = require("recursive-readdir")
const decompress = require('decompress')
const decompressTarbz2 = require('decompress-tarbz2')
const { download } = require("electron-dl")

const CHUNKY_VERSION = '1.1.2'
const NODE_VERSION = '8.16.2'
const CHUNKY_WEB_DEPS_VERSION = '1.1.0'

const CHUNKY_REPO_URL = `https://raw.githubusercontent.com/fluidtrends/chunky/master`
const CHUNKY_STORE_URL = `https://github.com/fluidtrends/chunky-store/raw/master`

const USER_HOME = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']
const HOME = path.resolve(USER_HOME, '.chunky')

const ARCHIVES = [
    { name: 'chunky', version: CHUNKY_VERSION },
    { name: 'node', version: NODE_VERSION },
    { name: 'chunky-web-deps', version: '1.1.0'}
]

class Session {
    constructor ({ window, port }) {    
        this._window = window
        this._socket = io(`http://localhost:${port}`)
        this._products = []
    }

    get socket() {
        return this._socket
    }

    get window() {
        return this._window
    }

    get products() {
        return this._products
    }

    listen(key, cb) {
        ipcMain.on(key, (event, data) => {
            cb && cb(data)
        })
    }

    send(key, data) {
        this._window.webContents.send(key, data)
    }

    get state() {
        return this._state
    }

    loadProduct(id) {
        const productDir = path.resolve(HOME, 'products', id)
        const manifestFile = path.resolve(productDir, 'chunky.json')
        const webStartFile = path.resolve(productDir, 'node_modules', 'react-dom-chunky', 'bin', 'start.js')
        
        if (!fs.existsSync(manifestFile)) {
            return 
        }

        // const all = fs.readdirSync(path.resolve(productDir))
        // const chunks = fs.readdirSync(path.resolve(productDir, 'chunks')).filter(dir => (dir && dir !== 'index.js' && dir !== 'index.desktop.js' && dir !== 'index.web.js' && dir !== '.DS_Store'))

        const hasDependencies = fs.existsSync(webStartFile)
        const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'))

        return Object.assign({}, manifest, { hasDependencies })
    }
 
    loadProducts() {
        const productsDir = path.resolve(HOME, 'products')

        if (!fs.existsSync(productsDir)) {
            this._products = []
            return 
        }

        const productIds = fs.readdirSync(productsDir).filter(dir => (dir && dir !== '.DS_Store'))
        this._products = productIds.map(id => Object.assign({}, this.loadProduct(id), { id }))
    }

    updateState(event) {
        this.products.length > 0 || this.loadProducts()
        const timestamp = `${Date.now()}`
        this._state = Object.assign({}, this._state, { 
            products: this.products,
            timestamp, 
            event: Object.assign({}, event, { timestamp }),
            platform: os.platform(), 
            os: osName()
        }, event && event.eventId === "login" && !event.error && {
            account: event.account,
            journey: event.journey
        })
    }

    downloadArchive ({ name, version }) {
        const downloadsDir = path.resolve(HOME, 'downloads')

        fs.existsSync(downloadsDir)  || fs.mkdirsSync(downloadsDir)
                
        const filename = `${name}-v${version}-${process.platform}-${process.arch}`
        const url = `${CHUNKY_STORE_URL}/${filename}.tar.bz2`
        const archivePath = path.resolve(downloadsDir, `${filename}.tar.bz2`)

        if (fs.existsSync(archivePath)) {
            return Promise.resolve()
        }
 
        return download(this.window, url, { 
                url,
                saveAs: false,
                directory: downloadsDir
            })
    }

    decompressArchive({ name, version }) {
        const downloadsDir = path.resolve(HOME, 'downloads')

        const filename = `${name}-v${version}-${process.platform}-${process.arch}`
        const archivePath = path.resolve(downloadsDir, `${filename}.tar.bz2`)
        
        if (!fs.existsSync(archivePath)) {
            return Promise.resolve()
        }
        
        const dest = path.resolve(HOME, 'bin', name, version)

        fs.existsSync(dest) || fs.mkdirsSync(dest)

        return decompress(archivePath, dest, { strip: 0, plugins: [decompressTarbz2()]})
    }

    startService(chunky) {
        const node = path.resolve(HOME, 'bin', 'node', NODE_VERSION)
        const cwd = path.resolve(HOME)

        process.env.PATH = `${node}/bin/:${process.env.PATH}`

        return new Promise((resolve, reject) => {
            const proc = spawn('node', [chunky], { cwd, stdio: ['inherit', 'inherit', 'inherit', 'ipc'] })
            this.updateState()
            resolve(this.state)
        })   
    }
    
    start() {   
        const chunky = path.resolve(HOME, 'bin', 'chunky', CHUNKY_VERSION, 'service', 'start.js')
        
        const mainDepsFilename = `chunky-web-deps-v${CHUNKY_WEB_DEPS_VERSION}-${process.platform}-${process.arch}.tar.bz2`
        const mainDepsArchive = path.resolve(HOME, 'downloads', mainDepsFilename)
        const mainDepsDir = path.resolve(HOME, 'deps')
        const mainDeps = path.resolve(mainDepsDir, 'main.tar.bz2')

        fs.existsSync(mainDepsDir) || fs.mkdirsSync(mainDepsDir)

        if (fs.existsSync(chunky)) {
            return this.startService(chunky)
        }
 
        return Promise.all(ARCHIVES.map(archive => this.downloadArchive(archive)))
                    .then(() => this.decompressArchive(ARCHIVES[0]))
                    .then(() => this.decompressArchive(ARCHIVES[1]))
                    .then(() => {
                          if (!fs.existsSync(chunky)) {
                              return 
                          }

                          if (!fs.existsSync(mainDeps)) {
                            fs.copyFileSync(mainDepsArchive, mainDeps)
                          }

                          return this.startService(chunky)
                      })
    }

    end() {
        return new Promise((resolve, reject) => {
            resolve()
        })
    }

    onWindowEvent(cb) {
        cb && cb()
    }
    
    openBrowser(url) {
        shell.openExternal(url)
    }

    openFile(filepath) {
        shell.openItem(filepath) 
    }

    openVisualStudio(operation) {
        if (operation.path) {
            let filepath = path.resolve(HOME, 'products', operation.productId, operation.path)
            fs.existsSync(filepath) && this.openBrowser(`vscode://file${filepath}`)
        } else {
            let filepath = path.resolve(HOME, 'products', operation.productId, 'chunky.code-workspace')
            fs.existsSync(filepath) && this.openFile(filepath)                
        }
    }

    performOperation(operation) {
        switch (operation.type) {
            case "startWebPreview":
                this.openBrowser(`http://localhost:${operation.port}`)
                break
            case "openCode":
                this.openVisualStudio(operation)
                break
            default: 
                this.socket.emit('exec', Object.assign({}, {
                    "type": "operation"
                }, operation))
        }
    }

    initialize(cb) {
        this.socket.on('connect', () => {
            this.socket.on('event', (event) => {
                this.updateState(event)
                this.send('session', this.state)
            })
    
            this.socket.on('disconnect', () => {
            })
        })

        this.listen('startSession', () => {
            this.start().then((data) => {
                this.send('sessionStarted', data)
            })
        })    

 
        // // this.listen('stopWebPreview', (data) => {
        // //     this.socket.emit('command', Object.assign({}, {
        // //         "type": "terminate"
        // //     }))
        // // })
        
        this.listen('command', (command) => {
            this.socket.emit('event', Object.assign({}, {
                "type": "command"
            }, command))
        })

        // this.listen('operation', (operation) => {
        //    this.performOperation(operation)
        // })

        // // this.listen('endSession', () => {
        // //     this.end().then((data) => {

        // //     })
        // // })

        return new Promise((resolve, reject) => {
            resolve()
        })        
    }
}

module.exports = Session