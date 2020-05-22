"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
var deepmerge_1 = __importDefault(require("deepmerge"));
var Data = /** @class */ (function () {
    function Data(raw) {
        this._raw = raw || "";
    }
    Object.defineProperty(Data.prototype, "raw", {
        get: function () {
            return this._raw;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Data.prototype, "isJson", {
        get: function () {
            try {
                JSON.parse(this.raw);
                return true;
            }
            catch (e) {
                return false;
            }
        },
        enumerable: false,
        configurable: true
    });
    Data.prototype.json = function () {
        return this.raw ? JSON.parse(this.raw) : {};
    };
    Data.prototype.append = function (data) {
        this._raw = (typeof data !== "object" ? "" + this.raw + data : JSON.stringify(deepmerge_1.default(Object.assign({}, this.json()), data || {}), null, 2));
    };
    Data.prototype.update = function (data) {
        this._raw = "";
        this.append(data);
    };
    return Data;
}());
exports.Data = Data;
//# sourceMappingURL=Data.js.map