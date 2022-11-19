import { Session } from './Session'
import debug from 'debug'
// import { 
//     anonChain,
//     chain,
//     getId,
//     system
// } from '@carmel/eos/src'

const LOG = debug("carmel:chain")
// const DEFAULT_URL = "https://eos.greymass.com"

export class Chain {
    
    private _session: Session
    private _provider: any 
    private _config: any

    constructor(session: Session) {
        this._config = session.config.chain || {}
        this._session = session
        // this._provider = anonChain({ url: this.url || DEFAULT_URL })
    }

    get session () {
        return this._session
    }

    get provider () {
        return this._provider
    }
    
    get config () {
        return this._config
    }

    get isReadOnly () {
        return !this.keys || !this.keys.main || !this.keys.main.id
    }

    get keys () {
        return this.config.keys
    }

    get account () {
        if (this.isReadOnly) return 

        return this.config.keys.main.id 
    }

    get type () {
        return this.config.type
    }

    // get url () {
    //     return this.config.url || DEFAULT_URL
    // }
    
    async connect () {
        if (this.isReadOnly) { 
            LOG(`connected to chain in read-only mode (${this.type})`)
            return 
        }

        // this._provider = chain({ 
        //     url: this.url || DEFAULT_URL,
        //     keys: this.keys
        // })

        LOG(`connected to the chain as ${this.account} (${this.type})`)
    }

    async disconnect () {
        LOG("disconnecting from chain ...")
        LOG("disconnected from chain")
    }  

    async _fetchIdentity(username: string) {
        if (!username) return 

        // const result: any = await getId(this.provider, username)
        // return result
    }

    async _fetchRelays () {
        // TODO fetch from the chain

        const relays = [{
            type: "webrtc-star",
            url: "net.carmel.dev",
            port: 443
        }]

        return relays.filter((s: any) => s.type === 'webrtc-star').map((s: any) => `/dns4/${s.url}/tcp/${s.port || 443}/wss/p2p-webrtc-star`)
    }

    get fetch () {
        return { 
            relays: this._fetchRelays,
            identity: this._fetchIdentity
        }
    }

    get op () {
        if (this.isReadOnly) throw new Error('Operations cannot be executed in read-only mode') 

        return {
            // system: (call: string, data: any, key: string = 'main') => system(this.provider, call, data, key)
        }
    }  
}