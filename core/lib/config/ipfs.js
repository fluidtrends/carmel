"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ipfsConfig = void 0;
const ipfsConfig = (Swarm, repo) => {
    return {
        start: true,
        init: true,
        repo,
        EXPERIMENTAL: {
            pubsub: true
        },
        relay: {
            enabled: true,
            hop: {
                enabled: true
            }
        },
        config: {
            Addresses: {
                Swarm
            }
        }
    };
};
exports.ipfsConfig = ipfsConfig;
//# sourceMappingURL=ipfs.js.map