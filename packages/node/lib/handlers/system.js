"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = exports.request = void 0;
const request = async ({ session, event, eventlog }) => {
    eventlog("[system request]:", event);
    const { call, data } = event;
    let result = { message: "skipped" };
    switch (call) {
        case "register":
            eventlog(`registering ${data.username} ...`);
            result = await session.server._.system("caccount", { username: data.username, pub_key: data.publicKey, did: data.did });
            break;
        case "update":
            eventlog(`updating ${data.username} ...`);
            result = await session.server._.system("uaccount", { username: data.username, did: data.did, sig: data.signature });
            break;
    }
    return result;
};
exports.request = request;
const response = async ({ session, event, eventlog }) => {
    eventlog("[system response]:", event);
};
exports.response = response;
//# sourceMappingURL=system.js.map