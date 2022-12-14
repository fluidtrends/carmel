"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pipe = void 0;
const debug_1 = __importDefault(require("debug"));
const _1 = require(".");
const util_1 = require("util");
const LOG = (0, debug_1.default)('carmel:relay:pipe');
const SYNC_INTERVAL = 2000;
class Pipe {
    constructor(server, index) {
        this._server = server;
        this._io = server.io[index];
        this._adapter = this.io.of('/').adapter;
        this._join = index === 0 ? (0, util_1.promisify)(this.adapter.remoteJoin).bind(this.adapter) : this.adapter.remoteJoin.bind(this.adapter);
        this._leave = index === 0 ? (0, util_1.promisify)(this.adapter.remoteLeave).bind(this.adapter) : this.adapter.remoteLeave.bind(this.adapter);
        this._disconnect = index === 0 ? (0, util_1.promisify)(this.adapter.remoteDisconnect).bind(this.adapter) : this.adapter.remoteDisconnect.bind(this.adapter);
    }
    get server() {
        return this._server;
    }
    get adapter() {
        return this._adapter;
    }
    async addresses() {
        try {
            const alls = await this.server.swarm.addresses();
            return alls;
        }
        catch (e) {
            LOG(`addresses fetch failed ${e.message}]`);
            console.log(e);
        }
        return [];
    }
    get io() {
        return this._io;
    }
    async addPeer(id, address) {
        try {
            await this._join(id, address);
            await this.server.swarm.addPeer(id, address);
        }
        catch (e) {
            console.log(e);
        }
    }
    async removePeer(id, address) {
        try {
            await this._leave(id, address);
            await this._disconnect(id, true);
            await this.server.swarm.removePeer(address);
            LOG(`Peer removed [id=${id} address=${address}]`);
        }
        catch (e) {
            console.log("???? removePeer error");
            console.log(e);
        }
    }
    isValidOffer(offer) {
        return (offer != null && typeof offer === 'object' && offer.srcMultiaddr && offer.dstMultiaddr);
    }
    async sendToPeer(socket, address, event, payload) {
        try {
            this.io.to(address).emit(event, payload);
            if (event === 'ws-peer') {
                LOG(`${address.split('/').slice(-1)}->${payload.split('/').slice(-1)}`);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async handshake(socket, offer) {
        if (!this.isValidOffer(offer))
            return;
        const { srcMultiaddr, dstMultiaddr } = offer;
        LOG(`${srcMultiaddr} <-> ${dstMultiaddr}`);
        const addr = await this.addresses();
        const to = addr ? addr.find((a) => dstMultiaddr) : false;
        if (offer.answer) {
            this.sendToPeer(socket, srcMultiaddr, _1.EVENT.HANDSHAKE, offer);
            return;
        }
        if (to) {
            this.sendToPeer(socket, dstMultiaddr, _1.EVENT.HANDSHAKE, offer);
            return;
        }
        offer.err = 'peer is not available';
        this.sendToPeer(socket, srcMultiaddr, _1.EVENT.HANDSHAKE, offer);
    }
    async disconnect(socket) {
        try {
            await this._disconnect(socket.id, true);
            LOG(`Peer disconnected: ${socket.id}`);
        }
        catch (_a) { }
    }
    async leave(peer, address) {
        if (!address)
            return;
        LOG(`Peer left: ${peer.id} ${address}`);
        await this.removePeer(peer, address);
    }
    async sync(socket, address) {
        const addresses = await this.addresses();
        addresses && addresses.map((peerAddress, i) => {
            if (peerAddress === address)
                return;
            this.sendToPeer(socket, peerAddress, _1.EVENT.PEER, address);
        });
    }
    async join(socket, address) {
        if (!address)
            return;
        await this.addPeer(socket.id, address);
        let syncTimer = setInterval(async () => await this.sync(socket, address), SYNC_INTERVAL);
        const stop = () => {
            syncTimer && clearInterval(syncTimer);
            syncTimer = null;
        };
        socket.once('ss-leave', stop);
        socket.once('disconnect', stop);
        this.sync(socket, address);
    }
}
exports.Pipe = Pipe;
//# sourceMappingURL=Pipe.js.map