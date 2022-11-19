"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Swarm = void 0;
const debug_1 = __importDefault(require("debug"));
const util_1 = require("util");
const LOG = (0, debug_1.default)('carmel:swarm');
class Swarm {
    constructor(server) {
        this._server = server;
    }
    get server() {
        return this._server;
    }
    async start() {
        this._set = (0, util_1.promisify)(this.server.pub.hset).bind(this.server.pub);
        this._get = (0, util_1.promisify)(this.server.pub.hgetall).bind(this.server.pub);
        this._del = (0, util_1.promisify)(this.server.pub.hdel).bind(this.server.pub);
    }
    async addresses() {
        try {
            const all = await this._get('swarm');
            console.log("swarm", Object.keys(all));
            return Object.keys(all);
        }
        catch (e) {
            console.log(e);
        }
        return [];
    }
    async addPeer(id, address) {
        await this._set("swarm", address, id);
    }
    async removePeer(address) {
        await this._del("swarm", address);
    }
    async status() {
        const timestamp = `${Date.now()}`;
        const addresses = await this.addresses();
        const totalPeers = addresses.length;
        return ({ timestamp, totalPeers, addresses });
    }
}
exports.Swarm = Swarm;
//# sourceMappingURL=Swarm.js.map