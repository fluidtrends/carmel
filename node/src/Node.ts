import { Session } from '@carmel/core/src'
import { ipfsConfig } from '.'
import path from 'path'
import fs from 'fs-extra'
import debug from 'debug'

const LOG = debug("carmel:node")
const DEFAULT_ROOT = `${process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']}/.carmel/mesh/`

export class Node {

    private _session: Session
    private _root: string 
    private _ipfs: any

    constructor (config: any = {}) {
        this._root = config.root || DEFAULT_ROOT

        fs.existsSync(this.root) || fs.mkdirpSync(this.root)
        
        this._session = new Session({ ...config, root: this.root })
    }

    get ipfs () {
        return this._ipfs
    }

    get session() {
        return this._session
    }

    get root () {
        return this._root
    }

    async stop () {
        LOG('stopping ...')

        await this.session.stop()

        try {
            await this.ipfs.stop()
        } catch {}

        LOG('stopped')
    }

    async start () {
       LOG('starting ...')

       const relays = await this.session.chain.fetch.relays()
       LOG(relays)

       const config = ipfsConfig(relays, `${this.root}/ipfs`, this.session.config.isOperator ? [4202, 4203, 5202, 5203, 9290] : [4102, 4103, 5102, 5103, 9190])
    
       const { ipfsBin } = config 
       const { createFactory } = require('ipfsd-ctl')

       const factory = createFactory(config, { js: { ipfsBin } })
       this._ipfs = await factory.spawn()

       LOG('connected to IPFS')

       await this.session.start(this.ipfs)
    }
}