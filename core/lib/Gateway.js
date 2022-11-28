"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gateway = void 0;
const _1 = require(".");
const debug_1 = __importDefault(require("debug"));
const LOG = (0, debug_1.default)("carmel:gateway");
const MIN_OPERATORS_REQUIRED = 1;
const MIN_PEERS_REQUIRED = 1;
const SYNC_SECONDS = 3;
const SYNC_REFRESH_RATE = 20;
class Gateway {
    constructor(session) {
        this._session = session;
        this._cid = "";
        this._isBrowser = (typeof window !== 'undefined');
        this._mesh = { operators: [], peers: [], relays: [] };
        this.sync = this._sync.bind(this);
        this._refresh = SYNC_REFRESH_RATE;
    }
    get refresh() {
        return this._refresh;
    }
    get syncTimer() {
        return this._syncTimer;
    }
    get session() {
        return this._session;
    }
    get mesh() {
        return this._mesh;
    }
    get ipfs() {
        return this._ipfs;
    }
    get ctl() {
        return this._ctl;
    }
    get cid() {
        return this._cid;
    }
    get isBrowser() {
        return this._isBrowser;
    }
    async stopSync() {
        if (!this.syncTimer)
            return;
        clearInterval(this.syncTimer);
    }
    async startSync() {
        await this.sync();
        this._syncTimer = setInterval(this.sync, SYNC_SECONDS * 1000);
    }
    async _sync() {
        if (this.session.config.isOperator && !this.session.isConnected) {
            this.session.setStatus(_1.SESSION_STATUS.CONNECTED);
            return;
        }
        if (this.session.isConnected && this.refresh > 0) {
            this._refresh--;
            return;
        }
        this._mesh.operators = [];
        this._mesh.peers = [];
        const ipfsPeers = await this.ipfs.swarm.peers() || [];
        const carmelOperators = await this.ipfs.pubsub.peers(_1.Channel.EVENT.OPERATOR_ACCEPT) || [];
        this._mesh.peers = ipfsPeers.map((p) => p.peer);
        if (!ipfsPeers || ipfsPeers.length < MIN_PEERS_REQUIRED || (!this.session.config.isOperator && (!carmelOperators || carmelOperators.length < MIN_OPERATORS_REQUIRED))) {
            this.session.isConnected && this.session.setStatus(_1.SESSION_STATUS.CONNECTING);
            this._refresh = SYNC_REFRESH_RATE;
            LOG(`connecting to the Carmel Mesh ...`);
            return;
        }
        this._mesh.operators = carmelOperators;
        this.session.isConnected || this.session.setStatus(_1.SESSION_STATUS.CONNECTED);
        LOG(`connected to the Carmel Mesh [operators=${this.mesh.operators.length} peers=${this.mesh.peers.length} relays=${this.mesh.relays.length}]`);
        this.mesh.operators.map((s, i) => LOG(`   operator ${i}: ${s}`));
        this.mesh.relays.map((s, i) => LOG(`   relay ${i}: ${s}`));
        this.mesh.peers.map((s, i) => LOG(`   peer ${i}: ${s}`));
        await this.session.station.flush();
        this._refresh--;
        if (this.refresh < 0) {
            this._refresh = SYNC_REFRESH_RATE;
        }
    }
    async resolveRelays() {
        if (this.mesh.relays.length > 0) {
            return;
        }
        LOG(`resolving relays ...`);
        this._mesh.relays = await this.session.chain.fetch.relays();
        LOG(`resolved relays (${this.mesh.relays.length})`);
        this.mesh.relays.map((s, i) => LOG(`   relay ${i}: ${s}`));
        return this.mesh.relays;
    }
    async startIPFS(ipfs) {
        try {
            if (!this.mesh || !this.mesh.relays)
                return;
            if (this.isBrowser) {
                this._ipfs = ipfs;
                return;
            }
            if (!ipfs) {
                return;
            }
            this._ipfs = ipfs.api;
        }
        catch (e) {
            LOG(`Could not start IPFS [Error: ${e.message}]`);
        }
    }
    async start(ipfs) {
        LOG(`starting [browser=${this.isBrowser}] ...`);
        await this.resolveRelays();
        await this.startIPFS(ipfs);
        if (!this.ipfs)
            return;
        const { id } = await this.ipfs.id();
        this._cid = id;
        LOG(`started [cid=${this.cid} browser=${this.isBrowser}]`);
        await this.startSync();
    }
    async stop() {
        LOG(`stopping ....`);
        await this.stopSync();
        LOG(`stopped`);
    }
}
exports.Gateway = Gateway;
//# sourceMappingURL=Gateway.js.map