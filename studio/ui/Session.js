import { ipcRenderer } from 'electron'

class Session {
    constructor(listener) {
        this._events = {}
        this._listeners = [listener]
        this._timestamp = `${Date.now()}`
    }
    
    _listenToMain(key, cb) {
        ipcRenderer.on(key, (e, data) => {
            this._timestamp = `${Date.now()}`
            const callback = this._events[data.event._eid]
            cb && cb(data)
            callback && callback(data)
        })
    }

    _sendToMain(key, data, cb) {
        const _eid = `${Date.now()}`
        this._events[_eid] = cb
        ipcRenderer.send(key, Object.assign({}, data, { _eid }))
    }

    _sendChunkyCommand(executor, options, cb) {
        this._sendToMain('command', { executor, options }, cb)
    }

    _sendCarmelCommand(options, cb) {
        this._sendToMain('command', {
            executor: "carmel",
            options
        }, cb) 
    }

    _onUpdated(data) {
        this._data = Object.assign({}, data)
        this._listeners.map(listener => {
            listener && listener.onUpdatedSession && listener.onUpdatedSession(data)
        })
    }

    get timestamp() {
        return this._timestamp
    }

    get data() {
        return this._data
    }

    stop() {
        console.log('Bye')
    }

    start() {
        return new Promise((resolve, reject) => {
            this._listenToMain('session', (data) => this._onUpdated(data))
            this._listenToMain('sessionStarted', (data) => {
                this._onUpdated(data)
                resolve(data)
            })
            this._sendToMain('startSession')    
        })
    }

    openCode({ productId, path }) {
        this._sendToMain('operation', {
            type: "openCode",
            productId, path
        })    
    }

    login({ email, password, productId, silent }, cb) {
        this._sendCarmelCommand({
            actions: ['login'],
            productId,
            silent,
            email, 
            password
        }, cb)     
    }

    getChallenge({ challengeId, productId }, cb) {
        this._sendCarmelCommand({
            actions: ['list'],
            challengeId,
            productId,
        }, cb)     
    }

    getChallenges(cb) {
        this._sendCarmelCommand({
            actions: ['list']
        }, cb)     
    }

    pauseChallenge({ challengeId, productId }, cb) {
        this._sendCarmelCommand({
            actions: ['pause'],
            challengeId,
            productId,
        }, cb)     
    }

    startChallenge({ productId, challengeId }) {
        this._sendCarmelCommand({
            actions: ['start'],
            challengeId,
            productId,
        })  
    }

    validateTask({ productId, challengeId }) {
        this._sendCarmelCommand({
            actions: ['next'],
            challengeId,
            productId,
        })  
    }

    createProduct({ name, template }) {
        const productId = name.toLowerCase().replace(/[^0-9a-zA-Z]/g, '')
        this._sendChunkyCommand('init', {
            name,
            productId,
            template,
            bundle: "fluidtrends/chunky-bananas"
        })  
    }

    initProduct({ productId }) {
        this._sendChunkyCommand('install', { productId })
    }

    startWebPreview({ productId, port }) {
        this._sendToMain('operation', {
            type: "startWebPreview",
            productId, port
        })    
    }

    startWebPackager({ productId }) {
        this._sendChunkyCommand('start', { 
            productId, 
            platforms: ["web"],
            webPackagerPort: 8082 
        })    
    }
}

export default Session