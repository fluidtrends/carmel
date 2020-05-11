"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Data = /** @class */ (function () {
    function Data(raw) {
        this._raw = raw;
    }
    Object.defineProperty(Data.prototype, "raw", {
        get: function () {
            return this._raw;
        },
        enumerable: true,
        configurable: true
    });
    Data.prototype.json = function () {
        return JSON.parse(this.raw);
    };
    return Data;
}());
exports.Data = Data;
