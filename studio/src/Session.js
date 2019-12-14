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
const decompressTargz = require('decompress-targz')
const { download } = require("electron-dl")
const lali = require('lali')
const cpy = require('cpy')
const copyfiles = require('copyfiles')
const rsync = require('rsync')

const STUDIO_FILES_URL = `http://files.carmel.io/studio`

const USER_HOME = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']
const HOME = path.resolve(USER_HOME, '.chunky')


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

    get env() {
        return this._env
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

    loadProduct(env, id) {
        const productDir = path.resolve(HOME, 'env', env, 'products', id)
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
        this._products = []

        Object.keys(this.env.all).map(env => {
            const productsDir = path.resolve(HOME, 'env', env, 'products')

            if (!fs.existsSync(productsDir)) {
                return 
            }
    
            const productIds = fs.readdirSync(productsDir).filter(dir => (dir && dir !== '.DS_Store'))
            this._products = this._products.concat(productIds.map(id => Object.assign({}, this.loadProduct(env, id), { id })))
    
        })
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

    syncEnv() {
        const url = `${STUDIO_FILES_URL}/env.json`
        const directory = path.resolve(HOME)
        const manifestFile = path.resolve(directory, 'env.json')

        fs.existsSync(directory) || fs.mkdirsSync(directory)

        if (fs.existsSync(manifestFile)) {
            fs.removeSync(manifestFile)
        }

        return download(this.window, url, { 
            url,
            saveAs: false,
            directory
        })
        .then(() => { 
            const all = JSON.parse(fs.readFileSync(manifestFile, 'utf8'))
            const versions = Object.keys(all).map(v => parseFloat(v))
            versions.sort((a, b) => b-a)
            const latest = Object.assign({}, all[`${versions[0]}`], { version: `${versions[0]}` })
            this._env = { all, versions, latest }
        })
    }

    downloadLib({ url, destDir }) {
        return lali.link(url).install(destDir).then(() => {
            const depsDir = path.resolve(destDir, 'node_modules')
            if (!fs.existsSync(depsDir)) {
                return 
            }

            fs.readdirSync(depsDir).filter(d => d.startsWith('_-_-_-_-_-_')).map(dir => {
                fs.moveSync(path.resolve(depsDir, dir), path.resolve(depsDir, `@${dir.substring(11)}`))
            })
        })
    }

    installLib ({ name, version }) {
        const filename = `${name}-v${version}-${process.platform}-${process.arch}`
        const url = `${STUDIO_FILES_URL}/${filename}.tar.bz2`
        const destDir = path.resolve(HOME, 'bin', name, version)

        if (fs.existsSync(destDir)) {
            return Promise.resolve()
        }

        fs.mkdirsSync(destDir)

        return this.downloadLib({ url, destDir })
    }

    installDeps () {       
        const filename = `chunky-deps-v${this.env.latest.version}-${process.platform}-${process.arch}`
        const url = `${STUDIO_FILES_URL}/${filename}.tar.bz2`

        const destDir = path.resolve(HOME, 'env', this.env.latest.version)
 
        if (fs.existsSync(destDir)) {
            return Promise.resolve()
        }

        fs.mkdirsSync(destDir)

        return this.downloadLib({ url, destDir })
    }

    startService() {
        const cli = `bin/chunky-cli/${this.env.latest.tools.cli}/service/start.js`
        return new Promise((resolve, reject) => {
            const proc = spawn('node', [cli], { cwd: HOME, stdio: ['inherit', 'inherit', 'inherit', 'ipc'] })
            this.updateState()
            resolve(this.state)
        })   
    }
    
    start() {  
        const node = path.resolve(HOME, 'bin', 'node', this.env.latest.tools.node)

        const start = Date.now()
        console.log("STARTING", this.env)

        const workers = [this.installDeps()]
                      .concat(Object.keys(this.env.latest.tools).map(tool => this.installLib({ name: `chunky-${tool}`, version: this.env.latest.tools[tool] })))

        return Promise.all(workers).then(() => {
                        console.log("DONE")
                        console.log(((Date.now() - start)/ 1000))
                        process.env.PATH = `${node}/bin/:${process.env.PATH}`
                        return this.startService()
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
            return
        } 

        let filepath = path.resolve(HOME, 'env', this.env.latest.version, 'products', operation.productId, 'chunky.code-workspace')
        fs.existsSync(filepath) && this.openFile(filepath)                
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
            this.syncEnv()
                .then(() => this.start())
                .then((data) => {
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
                type: "command",
                env: this.env
            }, command))
        })

        this.listen('operation', (operation) => {
           this.performOperation(operation)
        })

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