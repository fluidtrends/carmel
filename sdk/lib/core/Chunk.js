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
exports.Chunk = void 0;
var __1 = require("..");
/**
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Chunk.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Chunk.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Chunk.ts/stats | Code Stats}
 *
 * @category Core
 */
var Chunk = /** @class */ (function () {
    /**
     *
     * @param product
     * @param target
     */
    function Chunk(snapshot, name) {
        var _a, _b;
        this._name = name;
        this._snapshot = snapshot;
        this._dir = (_b = (_a = this.snapshot.dir) === null || _a === void 0 ? void 0 : _a.dir('chunks')) === null || _b === void 0 ? void 0 : _b.dir(this.name);
    }
    Object.defineProperty(Chunk.prototype, "name", {
        /**
         *
         */
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Chunk.prototype, "snapshot", {
        /**
        *
        */
        get: function () {
            return this._snapshot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Chunk.prototype, "screens", {
        /**
         *
         */
        get: function () {
            return this._screens;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Chunk.prototype, "config", {
        /**
         *
         */
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Chunk.prototype, "exists", {
        /**
         *
         */
        get: function () {
            return this.dir !== undefined && this.dir.exists && this.manifest !== undefined && this.manifest.exists;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Chunk.prototype, "manifest", {
        /**
         *
         */
        get: function () {
            return this._manifest;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Chunk.prototype, "dir", {
        /**
         *
         */
        get: function () {
            return this._dir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Chunk.prototype, "srcDir", {
        /**
         *
         */
        get: function () {
            return this._srcDir;
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     * @param name
     */
    Chunk.prototype.screen = function (route) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var screen;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        screen = (_a = this.screens) === null || _a === void 0 ? void 0 : _a.get(route.screen);
                        // Looks like it's already loaded
                        if (screen)
                            return [2 /*return*/, screen
                                // Load the screen
                            ];
                        return [4 /*yield*/, new __1.Screen(this, route).load()];
                    case 1:
                        // Load the screen
                        screen = _b.sent();
                        if (!screen)
                            return [2 /*return*/, undefined
                                // Keep track of it in memory
                            ];
                        // Keep track of it in memory
                        this._screens = this._screens || new Map();
                        this._screens.set(route.screen, screen);
                        // Give the caller what they need
                        return [2 /*return*/, screen];
                }
            });
        });
    };
    /** @internal */
    Chunk.prototype._loadConfig = function () {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var screenNames;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        // Load up the manifest and figure out the config details
                        (_a = this.manifest) === null || _a === void 0 ? void 0 : _a.load();
                        this._config = this.manifest.data.json();
                        // We gotta make sure the config works
                        if (!this.config)
                            return [2 /*return*/, false
                                // No routes needed but no error, let's just leave silently
                            ];
                        // No routes needed but no error, let's just leave silently
                        if (!this.config.routes || this.config.routes.length === 0)
                            return [2 /*return*/, true
                                // Let's see the screen names we've got available
                            ];
                        screenNames = (_c = (_b = this.dir) === null || _b === void 0 ? void 0 : _b.dir('screens')) === null || _c === void 0 ? void 0 : _c.dirs;
                        // This is problematic because we have routes we need to satisfy
                        if (!screenNames || screenNames.length === 0)
                            return [2 /*return*/, false];
                        return [4 /*yield*/, Promise.all(this.config.routes.map(function (r) { return __awaiter(_this, void 0, void 0, function () {
                                var route;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            route = r;
                                            if (!route || !route.screen || !screenNames.includes(route.screen))
                                                return [2 /*return*/];
                                            // Alright, we've got a valid route so let's build the screen
                                            return [4 /*yield*/, this.screen(route)];
                                        case 1:
                                            // Alright, we've got a valid route so let's build the screen
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 1:
                        _d.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     *
     */
    Chunk.prototype.load = function () {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        // Look up the source location
                        this._srcDir = (_a = this.snapshot.product.dir.dir('chunks')) === null || _a === void 0 ? void 0 : _a.dir(this.name);
                        // Link it up here
                        (_b = this.dir) === null || _b === void 0 ? void 0 : _b.link(this.srcDir);
                        // Let's see if we have a manifest
                        this._manifest = (_c = this.dir) === null || _c === void 0 ? void 0 : _c.file(Chunk.MANIFEST_FILENAME);
                        // This is not good
                        if (!this.exists)
                            return [2 /*return*/, undefined
                                // Look for the config
                            ];
                        return [4 /*yield*/, this._loadConfig()];
                    case 1:
                        // Look for the config
                        if (!(_d.sent()))
                            return [2 /*return*/, undefined
                                // Looks like we're ready to go
                            ];
                        // Looks like we're ready to go
                        return [2 /*return*/, this];
                }
            });
        });
    };
    /** The default name of the manifest */
    Chunk.MANIFEST_FILENAME = "chunk.json";
    return Chunk;
}());
exports.Chunk = Chunk;
//# sourceMappingURL=Chunk.js.map