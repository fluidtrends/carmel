"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenType = exports.AuthStore = exports.AuthSession = void 0;
var express_session_1 = __importDefault(require("express-session"));
var session_file_store_1 = __importDefault(require("session-file-store"));
exports.AuthSession = express_session_1.default;
exports.AuthStore = session_file_store_1.default(exports.AuthSession);
var AccessTokenType;
(function (AccessTokenType) {
    AccessTokenType["UNKNOWN"] = "unknown";
    AccessTokenType["GITHUB"] = "github";
    AccessTokenType["VERCEL"] = "vercel";
})(AccessTokenType = exports.AccessTokenType || (exports.AccessTokenType = {}));
//# sourceMappingURL=auth.js.map