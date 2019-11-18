import { ipcRenderer } from 'electron'

class EventManager {
    constructor() {

    }

    // listen(key, cb) {
    //     ipcRenderer.on(key, (event, data) => {
    //         cb && cb(data)
    //     })
    // }

    // send(key, data) {
    //     ipcRenderer.send(key, data)
    // }

    // initProduct({ productId }) {
    //     this.send('command', {
    //         executor: "install",
    //         options: {
    //             productId
    //         }
    //     })    
    // }

    startChallenge({ productId, challengeId }) {
        this.send('command', {
            executor: "carmel",
            options: {
                productId,
                challengeId,
                actions: ['start']
            }
        })    
    }

    startWebPackager({ productId }) {
        this.send('command', {
            executor: "start",
            options: {
                productId,
                platforms: ["web"],
                webPackagerPort: 8082
            }
        })    
    }

    createProduct({ name, template }) {
        const productId = name.toLowerCase().replace(/[^0-9a-zA-Z]/g, '')
        this.send('command', {
            executor: "init",
            options: {
                productId,
                name,
                template,
                bundle: "fluidtrends/chunky-bananas"
            }
        })    
    }

    getChallenges({ productId }) {
        this.send('command', {
            executor: "carmel",
            options: {
                productId,
                actions: ['list']
            }
        })    
    }

    getChallenge({ productId, challengeId }) {
        this.send('command', {
            executor: "carmel",
            options: {
                productId,
                challengeId,
                actions: ['list']
            }
        })    
    }

    startWebPreview({ productId, port }) {
        this.send('operation', {
            type: "startWebPreview",
            port, productId
        })            
    }

    stopWebPreview({ productId }) {
        this.send('operation', {
            type: "stopWebPreview",
            productId
        })            
    }

    login({ email, password, productId, silent }) {
        this.send('command', {
            executor: "carmel",
            options: {
                actions: ['login'],
                productId,
                silent,
                email, 
                password
            }
        })     
    }

    openCode({ productId, path }) {
        this.send('operation', {
            type: "openCode",
            productId, path
        })    
    }

    startSession(cb) {
        return new Promise((resolve, reject) => {
            this.listen('sessionStarted', (session) => {
                resolve(session)
            })
            
            this.listen('session', (session) => {
                cb && cb(session)
            })

            this.send('startSession')    
        })
    }
}

export default EventManager