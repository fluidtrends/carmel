"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = exports.request = void 0;
const request = async ({ session, event, eventlog }) => {
    eventlog("[accept request]:", event);
    return { message: "ok" };
};
exports.request = request;
const response = async ({ session, event, eventlog }) => {
    eventlog("[accept response]:", event);
};
exports.response = response;
//# sourceMappingURL=accept.js.map