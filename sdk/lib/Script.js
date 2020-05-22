"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Script = void 0;
var _1 = require(".");
var Script = /** @class */ (function () {
    function Script(args) {
        this._args = Object.assign({}, args);
        this._platform = _1.Globals.SUPPORTED_PLATFORMS[args.platform ? args.platform.toUpperCase() : _1.Globals.DEFAULT_PLATFORM.toUpperCase()];
    }
    Object.defineProperty(Script.prototype, "platform", {
        get: function () {
            return this._platform;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Script.prototype, "target", {
        get: function () {
            return this.platform;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Script.prototype, "args", {
        get: function () {
            return this._args;
        },
        enumerable: false,
        configurable: true
    });
    return Script;
}());
exports.Script = Script;
// _.ERRORS = Object.assign({}, _.ERRORS, {
// })
// _.PLATFORMS = { WEB: "web", DESKTOP: "desktop", MOBILE: "mobile" }
// _.DEFAULT_PLATFORM = _.PLATFORMS.WEB
//# sourceMappingURL=Script.js.map