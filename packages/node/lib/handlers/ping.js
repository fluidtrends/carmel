"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = exports.request = void 0;
const request = async ({ session, event, eventlog }) => {
    eventlog("[ping request]:", event);
    return { message: "World" };
};
exports.request = request;
const response = async ({ session, event, eventlog }) => {
    eventlog("[ping response]:", event);
};
exports.response = response;
//# sourceMappingURL=ping.js.map