import debug from 'debug'
import { OFFER, MULTIADDRESS, ID, EVENT, PAYLOAD, Server } from '.'
import { promisify } from 'util'

const LOG = debug('carmel:swarm')

export class Swarm {

    private _server: Server 
    private _set: any 
    private _get: any 
    private _del: any 

    constructor(server: Server) {
        this._server = server
    }

    get server() {
        return this._server
    }

    async start () {
        this._set = promisify(this.server.pub!.hset).bind(this.server.pub!)
        this._get = promisify(this.server.pub!.hgetall).bind(this.server.pub!)
        this._del = promisify(this.server.pub!.hdel).bind(this.server.pub!)
        await this.clear()
    }

    async addresses() {
        try {
            const all = await this._get('swarm')

            return Object.keys(all)
        } catch (e) {
            console.log(e)
        }

        return []
    }

    async addPeer(id: ID, address: MULTIADDRESS) {
        await this._set("swarm", address, id)
    }

    async removePeer(address: MULTIADDRESS) {
        await this._del("swarm", address)
    }

    async clear() {
        try {
            const all = await this._get('swarm')
            await Promise.all(Object.keys(all).map((addr: any) => this.removePeer(addr)))
        } catch (e) {
            console.log(e)
        }

    }

    async status () {
        const timestamp = `${Date.now()}`
        const addresses = await this.addresses()
        const totalPeers = addresses.length

        return ({ timestamp, totalPeers, addresses })
    }
}