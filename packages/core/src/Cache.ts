import debug from 'debug'

const LOG = debug("carmel:cache")

enum STORE {
    SESSION = "session",
    DATA = "data",
    BLOBS = "blobs"
}

const CARMEL_MESH_ROOT = `${process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']}/.carmel/mesh/`

export class Cache {
    public static STORE = STORE

    private _level: any
    private _root: string
    private _stores: any
    private _isBrowser: boolean

    constructor (isBrowser: boolean, root: string = '') {
        this._isBrowser = isBrowser
        this._level = require('level')
        this._stores = {}
        this._root = root || (isBrowser ? '' : CARMEL_MESH_ROOT)

        Object.keys(STORE).map((s: string) => {
            this.stores[s] = this.level(`${this.root}data_${s}`, { prefix: "carmel/" })
        })
    }

    get root () {
        return this._root
    }

    get isBrowser() {
        return this._isBrowser
    }

    get level () {
        return this._level
    }

    get stores() {
        return this._stores
    }

    store(type: STORE) {
        return this.stores[type]
    }

    _parseId(id: string) {
        const parts = id.split("/")
        const type = parts.shift()
        return [type, parts.join("/")]
    }

    async close () {
        Object.keys(STORE).map((s: string) => {
            LOG(`closing [${s}] db`)
            this.stores[s].isClosed() || this.stores[s].close()
        })
    }

    async put(itemId: string, data: any) {
        try {
            const [type, id] = this._parseId(itemId)
            this.stores[type!.toUpperCase()].put(id, JSON.stringify(data))

            LOG(`put [item=${itemId}]`)
        } catch (e: any) {
            console.log(e)
        }
    }

    async get(itemId: string) {
        const [type, id] = this._parseId(itemId)
        
        LOG(`get [item=${itemId}]`)

        return this.stores[type!.toUpperCase()].get(id).then((d: any) => JSON.parse(d)).catch((err: any) => {})
    }

    async remove(itemId: string) {
        const [type, id] = this._parseId(itemId)
        
        LOG(`remove [item=${itemId}]`)

        return this.stores[type!.toUpperCase()].del(id).catch((err: any) => {})
    }
}