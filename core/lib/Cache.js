"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cache = void 0;
const debug_1 = __importDefault(require("debug"));
const LOG = (0, debug_1.default)("carmel:cache");
var STORE;
(function (STORE) {
    STORE["SESSION"] = "session";
    STORE["DATA"] = "data";
    STORE["BLOBS"] = "blobs";
})(STORE || (STORE = {}));
const CARMEL_MESH_ROOT = () => `${process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']}/.carmel/mesh/`;
class Cache {
    constructor(isBrowser, root = '') {
        this._isBrowser = isBrowser;
        this._level = require('level');
        this._stores = {};
        this._root = root || (isBrowser ? '' : CARMEL_MESH_ROOT());
        Object.keys(STORE).map((s) => {
            this.stores[s] = this.level(`${this.root}data_${s}`, { prefix: "carmel/" });
        });
    }
    get root() {
        return this._root;
    }
    get isBrowser() {
        return this._isBrowser;
    }
    get level() {
        return this._level;
    }
    get stores() {
        return this._stores;
    }
    store(type) {
        return this.stores[type];
    }
    _parseId(id) {
        const parts = id.split("/");
        const type = parts.shift();
        return [type, parts.join("/")];
    }
    async close() {
        Object.keys(STORE).map((s) => {
            LOG(`closing [${s}] db`);
            this.stores[s].isClosed() || this.stores[s].close();
        });
    }
    async put(itemId, data) {
        try {
            const [type, id] = this._parseId(itemId);
            this.stores[type.toUpperCase()].put(id, JSON.stringify(data));
            LOG(`put [item=${itemId}]`);
        }
        catch (e) {
            console.log(e);
        }
    }
    async get(itemId) {
        const [type, id] = this._parseId(itemId);
        LOG(`get [item=${itemId}]`);
        return this.stores[type.toUpperCase()].get(id).then((d) => JSON.parse(d)).catch((err) => { });
    }
    async remove(itemId) {
        const [type, id] = this._parseId(itemId);
        LOG(`remove [item=${itemId}]`);
        return this.stores[type.toUpperCase()].del(id).catch((err) => { });
    }
}
exports.Cache = Cache;
Cache.STORE = STORE;
//# sourceMappingURL=Cache.js.map