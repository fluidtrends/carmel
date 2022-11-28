"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
const nanoid_1 = require("nanoid");
const _1 = require(".");
const debug_1 = __importDefault(require("debug"));
const LOG = (0, debug_1.default)("carmel:session");
class Session {
    constructor(config, dispatch = undefined) {
        this._config = config || {};
        this._dispatch = dispatch;
        this._isBrowser = (typeof window !== 'undefined');
        this._cache = new _1.Cache(this.isBrowser, this.config.root);
        this._data = { account: new _1.Data(this, 'account') };
        this._status = _1.SESSION_STATUS.NEW;
        this._gateway = new _1.Gateway(this);
        this._id = (0, nanoid_1.nanoid)();
        this._chain = new _1.Chain(this);
        this._drive = new _1.Drive(this);
        this._station = new _1.Station(this);
        this._revision = this.config.revision || `N/A-${Date.now()}`;
        this._listeners = [];
        this._functions = {};
        Object.keys(this.config.data || {}).map(async (slice) => this._data[slice] = new _1.Data(this, slice));
        this._identity = new _1.Identity(this);
    }
    get station() {
        return this._station;
    }
    get functions() {
        return this._functions;
    }
    get chain() {
        return this._chain;
    }
    get drive() {
        return this._drive;
    }
    get identity() {
        return this._identity;
    }
    get dir() {
        return this._dir;
    }
    get revision() {
        return this._revision;
    }
    get listeners() {
        return this._listeners;
    }
    get dispatch() {
        return this._dispatch;
    }
    get config() {
        return this._config;
    }
    get id() {
        return this._id;
    }
    get gateway() {
        return this._gateway;
    }
    get status() {
        return this._status;
    }
    get cache() {
        return this._cache;
    }
    get data() {
        return this._data;
    }
    get isBrowser() {
        return this._isBrowser;
    }
    get isReady() {
        return this.status >= _1.SESSION_STATUS.READY;
    }
    get isConnected() {
        return this.status >= _1.SESSION_STATUS.CONNECTED;
    }
    async save() {
        await this.cache.put(`session/id`, this.id);
        await Promise.all(Object.keys(this.data || {}).map(async (slice) => this.data[slice].save()));
    }
    async load() {
        this._id = await this.cache.get(`session/id`) || (0, nanoid_1.nanoid)();
        await Promise.all(Object.keys(this.data || {}).map(async (slice) => this.data[slice].init()));
    }
    async init() {
        await this.load();
        await this.save();
    }
    async close() {
        await this.cache.close();
    }
    setStatus(s) {
        LOG(`changed status [status=${s}]`);
        this._status = s;
    }
    toJSON() {
        return ({
            id: this.id,
            cid: this.id
        });
    }
    async registerFunctions(functions) {
        if (!functions)
            return;
        for (let id in functions) {
            const f = functions[id];
            if ("object" !== typeof f || !f)
                continue;
            this._functions[id] = f;
        }
    }
    async start(ipfs) {
        LOG(`starting [revision=${this.revision} operator=${this.config.isOperator}]`);
        this.setStatus(_1.SESSION_STATUS.INITIALIZING);
        await this.init();
        await this.chain.connect();
        await this.gateway.start(ipfs);
        await this.save();
        await this.drive.mount();
        await this.station.start();
        this.setStatus(_1.SESSION_STATUS.READY);
    }
    async stop() {
        LOG(`stopping [revision=${this.revision}]`);
        this.setStatus(_1.SESSION_STATUS.STOPPING);
        await this.station.stop();
        await this.gateway.stop();
        await this.drive.unmount();
        await this.chain.disconnect();
        await this.close();
        this.setStatus(_1.SESSION_STATUS.STOPPED);
    }
}
exports.Session = Session;
//# sourceMappingURL=Session.js.map