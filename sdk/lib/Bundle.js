"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bundle = void 0;
var _1 = require(".");
/**
 *
 * @category System
 */
var Bundle = /** @class */ (function () {
    function Bundle(archive) {
        this._archive = archive;
        this._dir = new _1.Dir(this.archive.path || undefined);
    }
    Object.defineProperty(Bundle.prototype, "archive", {
        get: function () {
            return this._archive;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bundle.prototype, "dir", {
        get: function () {
            return this._dir;
        },
        enumerable: false,
        configurable: true
    });
    return Bundle;
}());
exports.Bundle = Bundle;
//# sourceMappingURL=Bundle.js.map