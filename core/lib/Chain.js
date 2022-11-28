"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chain = void 0;
const debug_1 = __importDefault(require("debug"));
// import { 
//     anonChain,
//     chain,
//     getId,
//     system
// } from '@carmel/eos/src'
const LOG = (0, debug_1.default)("carmel:chain");
// const DEFAULT_URL = "https://eos.greymass.com"
class Chain {
    constructor(session) {
        this._config = session.config.chain || {};
        this._session = session;
        // this._provider = anonChain({ url: this.url || DEFAULT_URL })
    }
    get session() {
        return this._session;
    }
    get provider() {
        return this._provider;
    }
    get config() {
        return this._config;
    }
    get isReadOnly() {
        return !this.keys || !this.keys.main || !this.keys.main.id;
    }
    get keys() {
        return this.config.keys;
    }
    get account() {
        if (this.isReadOnly)
            return;
        return this.config.keys.main.id;
    }
    get type() {
        return this.config.type;
    }
    // get url () {
    //     return this.config.url || DEFAULT_URL
    // }
    async connect() {
        if (this.isReadOnly) {
            LOG(`connected to chain in read-only mode (${this.type})`);
            return;
        }
        // this._provider = chain({ 
        //     url: this.url || DEFAULT_URL,
        //     keys: this.keys
        // })
        LOG(`connected to the chain as ${this.account} (${this.type})`);
    }
    async disconnect() {
        LOG("disconnecting from chain ...");
        LOG("disconnected from chain");
    }
    async _fetchIdentity(username) {
        if (!username)
            return;
        // const result: any = await getId(this.provider, username)
        // return result
    }
    async _fetchRelays() {
        // TODO fetch from the chain
        const relays = [{
                type: "webrtc-star",
                url: "net.carmel.dev",
                port: 443
            }];
        return relays.filter((s) => s.type === 'webrtc-star').map((s) => `/dns4/${s.url}/tcp/${s.port || 443}/wss/p2p-webrtc-star`);
    }
    get fetch() {
        return {
            relays: this._fetchRelays,
            identity: this._fetchIdentity
        };
    }
    get op() {
        if (this.isReadOnly)
            throw new Error('Operations cannot be executed in read-only mode');
        return {
        // system: (call: string, data: any, key: string = 'main') => system(this.provider, call, data, key)
        };
    }
}
exports.Chain = Chain;
//# sourceMappingURL=Chain.js.map