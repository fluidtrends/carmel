"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCarmel = void 0;
const react_1 = require("react");
const Session_1 = require("../Session");
const debug_1 = __importDefault(require("debug"));
const ipfs_core_1 = require("ipfs-core");
const ipfs_1 = require("../config/ipfs");
debug_1.default.enable("carmel*");
const LOG = (0, debug_1.default)("carmel:react");
let ipfs = null;
const useCarmel = () => {
    (0, react_1.useEffect)(() => {
        start();
    }, []);
    async function start() {
        LOG("initializing");
        const ses = new Session_1.Session({});
        const relays = await ses.chain.fetch.relays();
        const config = (0, ipfs_1.ipfsConfig)(relays, `${ses.cache.root}/ipfs`);
        const node = await (0, ipfs_core_1.create)(config);
        await ses.start(node);
        LOG("initialized");
    }
    return { ipfs };
};
exports.useCarmel = useCarmel;
//# sourceMappingURL=carmel.js.map