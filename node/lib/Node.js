"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
const src_1 = require("@carmel/mesh/src");
const _1 = require(".");
const fs_extra_1 = __importDefault(require("fs-extra"));
const debug_1 = __importDefault(require("debug"));
const LOG = (0, debug_1.default)("carmel:node");
const DEFAULT_ROOT = `${process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']}/.carmel/mesh/`;
class Node {
    constructor(config = {}) {
        this._root = config.root || DEFAULT_ROOT;
        fs_extra_1.default.existsSync(this.root) || fs_extra_1.default.mkdirpSync(this.root);
        this._session = new src_1.Session(Object.assign(Object.assign({ isOperator: true }, config), { root: this.root }));
    }
    get session() {
        return this._session;
    }
    get root() {
        return this._root;
    }
    async stop() {
        LOG('stopping node');
        await this.session.stop();
    }
    async start() {
        const relays = await this.session.server.resolveRelays();
        const config = (0, _1.ipfsConfig)(relays, `${this.root}/ipfs`, this.session.config.isOperator ? [4002, 4003, 5002, 5003, 9090] : [4102, 4103, 5102, 5103, 9190]);
        const { ipfsBin } = config;
        const { createFactory } = require('ipfsd-ctl');
        const factory = createFactory(config, { js: { ipfsBin } });
        const ipfs = await factory.spawn();
        LOG('spawned IPFS node');
        await this.session.start(ipfs);
    }
    get send() {
        return this.session.server.send;
    }
}
exports.Node = Node;
//# sourceMappingURL=Node.js.map