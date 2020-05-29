"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Artifact = void 0;
/**
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Artifact.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Artifact.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Artifact.ts/stats | Code Stats}
 *
 * @category Core
 */
var Artifact = /** @class */ (function () {
    /**
     *
     * @param name
     * @param bundle
     */
    function Artifact(name, bundle, kind) {
        var _a;
        this._name = name;
        this._bundle = bundle;
        this._kind = kind;
        this._dir = (_a = this.bundle.dir.dir(kind)) === null || _a === void 0 ? void 0 : _a.dir(this.name);
    }
    Object.defineProperty(Artifact.prototype, "name", {
        /**
         *
         */
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Artifact.prototype, "dir", {
        /**
         *
         */
        get: function () {
            return this._dir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Artifact.prototype, "bundle", {
        /**
         *
         */
        get: function () {
            return this._bundle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Artifact.prototype, "kind", {
        /**
         *
         */
        get: function () {
            return this._kind;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Artifact.prototype, "exists", {
        /**
         *
         */
        get: function () {
            return this.dir !== undefined && this.dir.exists;
        },
        enumerable: false,
        configurable: true
    });
    return Artifact;
}());
exports.Artifact = Artifact;
//# sourceMappingURL=Artifact.js.map