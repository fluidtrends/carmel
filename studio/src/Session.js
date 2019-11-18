const { ipcMain, shell } = require('electron')
const io = require('socket.io-client')
const os = require('os')
const osName = require('os-name')
const fs = require('fs-extra')
const path = require('path')
const { spawn } = require('child_process')
const opn = require('opn')
const recursive = require("recursive-readdir")

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
        const productIds = fs.readdirSync(path.resolve(HOME, 'products')).filter(dir => (dir && dir !== '.DS_Store'))
        this._products = productIds.map(id => Object.assign({}, this.loadProduct(id), { id }))
    }

    updateState(event) {
        this.products.length.length > 0 || this.loadProducts()
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

    start() {   
        this.updateState()

        return new Promise((resolve, reject) => {
            const cli = path.resolve(__dirname, '../../../../chunky/cli/service/start.js')
            const cwd = path.resolve(HOME)
            const proc = spawn('node', [cli], { cwd, stdio: ['ignore', 'ignore', 'ignore', 'ipc'] })
            // const proc = spawn('node', [cli], { cwd, stdio: ['inherit', 'inherit', 'inherit', 'ipc'] })

            resolve(this.state)
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

        // this.listen('stopWebPreview', (data) => {
        //     this.socket.emit('command', Object.assign({}, {
        //         "type": "terminate"
        //     }))
        // })
        
        this.listen('command', (command) => {
            this.socket.emit('event', Object.assign({}, {
                "type": "command"
            }, command))
        })

        this.listen('operation', (operation) => {
           this.performOperation(operation)
        })

        // this.listen('endSession', () => {
        //     this.end().then((data) => {

        //     })
        // })

        return new Promise((resolve, reject) => {
            resolve()
        })
    }
}

module.exports = Session