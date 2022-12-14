import debug from 'debug'
import { OFFER, MULTIADDRESS, ID, EVENT, PAYLOAD, Server } from '.'
import { promisify } from 'util'

const LOG = debug('carmel:relay:pipe')
const SYNC_INTERVAL = 2000

export class Pipe {
    private _io: any
    private _adapter: any
    private _server: Server 
    private _join: any 
    private _leave: any 
    private _disconnect: any 

    constructor(server: Server, index: number) {
        this._server = server
        this._io = server.io![index]
        this._adapter = this.io.of('/').adapter        

        this._join = index === 0 ? promisify(this.adapter.remoteJoin).bind(this.adapter) : this.adapter.remoteJoin.bind(this.adapter)
        this._leave = index === 0 ?  promisify(this.adapter.remoteLeave).bind(this.adapter) : this.adapter.remoteLeave.bind(this.adapter)
        this._disconnect = index === 0 ? promisify(this.adapter.remoteDisconnect).bind(this.adapter) : this.adapter.remoteDisconnect.bind(this.adapter)
    }

    get server() {
        return this._server
    }

    get adapter () {
        return this._adapter
    }

    async addresses () {
        try {
            const alls = await this.server.swarm.addresses()
            return alls
        } catch (e: any) {
            LOG(`addresses fetch failed ${e.message}]`)
            console.log(e)
        }

        return []
    }

    get io() {
        return this._io
    }

    async addPeer(id: ID, address: MULTIADDRESS) {
        try {
            await this._join(id, address)
            await this.server.swarm.addPeer(id, address)
        } catch (e) {
            console.log(e)
        }
    }

    async removePeer(id: ID, address: MULTIADDRESS) {
        try {
            await this._leave(id, address)
            await this._disconnect(id, true)
            await this.server.swarm.removePeer(address)

            LOG(`Peer removed [id=${id} address=${address}]`)
          } catch (e) {
            console.log("???? removePeer error")
            console.log(e)

        }
    }

    isValidOffer(offer: OFFER) {
        return (offer != null && typeof offer === 'object' && offer.srcMultiaddr && offer.dstMultiaddr)
    }

    async sendToPeer (socket: any, address: MULTIADDRESS, event: EVENT, payload: PAYLOAD) {
        try {
            this.io.to(address).emit(event, payload)

            if (event === 'ws-peer') {
                LOG(`${address.split('/').slice(-1)}->${payload.split('/').slice(-1)}`)
            }

        } catch (e) {
            console.log(e)
        }
    }

    async handshake (socket: any, offer: OFFER) {
        if (!this.isValidOffer(offer)) return 
        
        const { srcMultiaddr, dstMultiaddr } = offer

        LOG(`${srcMultiaddr} <-> ${dstMultiaddr}`)

        const addr = await this.addresses()
        const to = addr ? addr.find((a: string) => dstMultiaddr) : false

        if (offer.answer) {
            this.sendToPeer(socket, srcMultiaddr, EVENT.HANDSHAKE, offer)
            return 
        }

        if (to) {
            this.sendToPeer(socket, dstMultiaddr, EVENT.HANDSHAKE, offer)
            return 
        } 
        
        offer.err = 'peer is not available'
        this.sendToPeer(socket, srcMultiaddr, EVENT.HANDSHAKE, offer)
    }

    async disconnect (socket: any) {
        try {
            await this._disconnect(socket.id, true)
            LOG(`Peer disconnected: ${socket.id}`)
        } catch {}
    }

    async leave (peer: any, address: any) {
        if (!address) return

        LOG(`Peer left: ${peer.id} ${address}`)

        await this.removePeer(peer, address)
    }

    async sync (socket: any, address: MULTIADDRESS) {
        const addresses = await this.addresses()

        addresses && addresses.map((peerAddress: any, i: number) => {
            if (peerAddress === address) return
            this.sendToPeer(socket, peerAddress, EVENT.PEER, address)
        })
    }
  
    async join (socket: any, address: MULTIADDRESS) {
        if (!address) return

        await this.addPeer(socket.id, address)
        
        let syncTimer: any = setInterval(async () => await this.sync(socket, address), SYNC_INTERVAL)

        const stop = () => {
            syncTimer && clearInterval(syncTimer)
            syncTimer = null
        }

        socket.once('ss-leave', stop)
        socket.once('disconnect', stop)

        this.sync(socket, address)
    }
}