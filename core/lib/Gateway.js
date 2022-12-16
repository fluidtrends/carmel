import { Channel, SESSION_STATUS } from './index.js';
import debug from 'debug';
const LOG = debug("carmel:gateway");
const MIN_OPERATORS_REQUIRED = 1;
const MIN_PEERS_REQUIRED = 1;
const SYNC_SECONDS = 3;
const SYNC_REFRESH_RATE = 5;
export class Gateway {
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
            this.session.setStatus(SESSION_STATUS.CONNECTED);
            return;
        }
        if (this.session.isConnected && this.refresh > 0) {
            this._refresh--;
            return;
        }
        this._mesh.operators = [];
        this._mesh.peers = [];
        const ipfsPeers = await this.ipfs.swarm.peers() || [];
        const carmelOperators = await this.ipfs.pubsub.peers(Channel.EVENT.OPERATOR_ACCEPT) || [];
        const carmelPeers = await this.ipfs.pubsub.peers(Channel.EVENT.PEER_ACCEPT) || [];
        this._mesh.peers = ipfsPeers.map((p) => p.peer);
        this._mesh.operators = carmelOperators;
        this.session.isConnected && this.session.setStatus(SESSION_STATUS.CONNECTING);
        if (!ipfsPeers || ipfsPeers.length < MIN_PEERS_REQUIRED) {
            LOG(`Connecting to the Carmel Network. Looking for peers ...`);
            return;
        }
        if (this.session.config.isOperator) {
            LOG(`Connected to the Carmel Network as an operator [peers: [${ipfsPeers.length}:${carmelPeers.length}]  relays: ${this.mesh.relays.length}]`);
            this.session.isConnected || this.session.setStatus(SESSION_STATUS.CONNECTED);
            this._refresh = SYNC_REFRESH_RATE;
        }
        else if (!carmelOperators || carmelOperators.length < MIN_OPERATORS_REQUIRED) {
            LOG(`Connecting to the Carmel Network. Looking for operators ...`);
            LOG(`   peers: [${ipfsPeers.length}:${carmelPeers.length}]  operators: ${carmelOperators.length} relays: ${this.mesh.relays.length}]`);
            return;
        }
        else {
            LOG(`Connected to the Carmel Network [operators: ${this.mesh.operators.length} peers: [${ipfsPeers.length}:${carmelPeers.length}]  relays: ${this.mesh.relays.length}]`);
            this.mesh.operators.map((s, i) => LOG(`   operator ${i}: ${s}`));
            this.session.isConnected || this.session.setStatus(SESSION_STATUS.CONNECTED);
        }
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
            if (!ipfs || !this.mesh || !this.mesh.relays)
                return;
            this._ipfs = ipfs;
        }
        catch (e) {
            LOG(`Could not start IPFS [Error: ${e.message}]`);
        }
    }
    async start(ipfs) {
        if (!ipfs) {
            LOG(`Error: could not find IPFS instance`);
            return;
        }
        LOG(`starting [browser=${this.isBrowser}] ...`);
        await this.resolveRelays();
        await this.startIPFS(ipfs);
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
//# sourceMappingURL=Gateway.js.map