"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var __1 = require("..");
/**
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Stack.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Stack.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Stack.ts/stats | Code Stats}
 *
 * @category Core
 */
var Stack = /** @class */ (function () {
    /**
     *
     * @param name
     * @param bundle
     */
    function Stack(name, bundle) {
        this._artifact = new __1.Artifact(name, bundle, __1.ArtifactsKind.STACKS);
    }
    Object.defineProperty(Stack.prototype, "artifact", {
        /**
         *
         */
        get: function () {
            return this._artifact;
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     */
    Stack.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.artifact !== undefined && this.artifact.exists ? this : undefined];
            });
        });
    };
    /**
     *
     * @param target
     * @param name
     */
    Stack.prototype.findTargetScript = function (target, name) {
        return __awaiter(this, void 0, void 0, function () {
            var script;
            return __generator(this, function (_a) {
                // Don't even bother if the target script is missing
                if (!this.supportsTargetScript(target, name))
                    return [2 /*return*/, undefined
                        // Cool, let's build ourselves a script now
                    ];
                script = new __1.Script(this, target, name);
                // Boom, load it up and get on with it  
                return [2 /*return*/, script.load()];
            });
        });
    };
    /**
     *
     * @param target
     */
    Stack.prototype.targetDir = function (target) {
        var _a;
        return (_a = this.artifact) === null || _a === void 0 ? void 0 : _a.dir.dir(target);
    };
    /**
     *
     * @param target
     */
    Stack.prototype.targetScriptDir = function (target, name) {
        var _a, _b;
        return (_b = (_a = this.artifact) === null || _a === void 0 ? void 0 : _a.dir.dir(target)) === null || _b === void 0 ? void 0 : _b.dir(name);
    };
    /**
     *
     * @param target
     */
    Stack.prototype.supportsTarget = function (target) {
        var _a;
        return this.artifact !== undefined && ((_a = this.artifact) === null || _a === void 0 ? void 0 : _a.exists) &&
            this.targetDir(target) !== undefined &&
            this.targetDir(target).exists;
    };
    /**
     *
     * @param target
     * @param name
     */
    Stack.prototype.supportsTargetScript = function (target, name) {
        return this.supportsTarget(target) &&
            this.targetScriptDir(target, name) !== undefined &&
            this.targetScriptDir(target, name).exists;
    };
    return Stack;
}());
exports.Stack = Stack;
//# sourceMappingURL=Stack.js.map