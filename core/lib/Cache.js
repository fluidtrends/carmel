import debug from 'debug';
import { Level } from 'level';
const LOG = debug("carmel:cache");
var STORE;
(function (STORE) {
    STORE["SESSION"] = "session";
    STORE["DATA"] = "data";
    STORE["BLOBS"] = "blobs";
})(STORE || (STORE = {}));
const CARMEL_MESH_ROOT = () => `${process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']}/.carmel/mesh/`;
export class Cache {
    constructor(isBrowser, root = '') {
        this._isBrowser = isBrowser;
        this._stores = {};
        this._root = root || (isBrowser ? '' : CARMEL_MESH_ROOT());
        Object.keys(STORE).map((s) => {
            this.stores[s] = new Level(`${this.root}data_${s}`, { prefix: "carmel/" });
        });
    }
    get root() {
        return this._root;
    }
    get isBrowser() {
        return this._isBrowser;
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
            try {
                this.stores[s].close();
            }
            catch { }
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
Cache.STORE = STORE;
//# sourceMappingURL=Cache.js.map