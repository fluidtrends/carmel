"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var path_1 = __importDefault(require("path"));
var get_port_1 = __importDefault(require("get-port"));
var __1 = require("..");
var shortid_1 = __importDefault(require("shortid"));
/**
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Product.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Product.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Product.ts/stats | Code Stats}
 *
 * @category Core
 */
var Product = /** @class */ (function () {
    /**
     *
     * @param session
     */
    function Product(session, id) {
        var _a, _b;
        this._state = __1.ProductState.UNLOADED;
        this._session = session;
        this._id = id || shortid_1.default.generate().toLowerCase();
        this._dir = new __1.Dir(path_1.default.resolve((_a = this.session) === null || _a === void 0 ? void 0 : _a.index.sections.products.path, this.id));
        this._manifest = new __1.File(path_1.default.resolve((_b = this.session) === null || _b === void 0 ? void 0 : _b.index.sections.products.path, this.id, Product.MANIFEST_FILENAME));
        this._code = new __1.Code(this);
    }
    Object.defineProperty(Product.prototype, "packer", {
        /**
         *
         */
        get: function () {
            return this._packer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "stack", {
        get: function () {
            return this._stack;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "packerPort", {
        /**
         *
         */
        get: function () {
            return this._packerPort;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "code", {
        /**
         *
         */
        get: function () {
            return this._code;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "session", {
        /**
         *
         */
        get: function () {
            return this._session;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "state", {
        /**
         *
         */
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "manifest", {
        /**
         *
         */
        get: function () {
            return this._manifest;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "dir", {
        /**
         *
         */
        get: function () {
            return this._dir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "data", {
        /**
         *
         */
        get: function () {
            return this.manifest.data.json();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "id", {
        /**
         *
         */
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "exists", {
        /**
         *
         */
        get: function () {
            return this.manifest.exists;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "context", {
        /**
         *
         */
        get: function () {
            return this.manifest.data.json().context;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "isLoaded", {
        /**
         *
         */
        get: function () {
            return this.state >= __1.ProductState.LOADED;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "snapshot", {
        /**
         *
         */
        get: function () {
            return this._snapshot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "isReady", {
        /**
         *
         */
        get: function () {
            return this.state >= __1.ProductState.READY;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Move the Product into a new {@linkcode ProductState}
     *
     * @param state The new {@linkcode ProductState}
     */
    Product.prototype.changeState = function (state) {
        this._state = state;
    };
    /**
     *
     * @param id
     */
    Product.prototype.createFromTemplate = function (id, name) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var template;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ((_a = this.session) === null || _a === void 0 ? void 0 : _a.findTemplate(id))];
                    case 1:
                        template = _b.sent();
                        if (!template) {
                            throw __1.Errors.ProductCannotCreate(__1.Strings.TemplateIsMissingString(id));
                        }
                        return [4 /*yield*/, template.install(name, this)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, this.load()];
                }
            });
        });
    };
    // /**
    //  *
    //  */
    // async openCode() {
    //   const file = this.cacheDir?.file('carmel.code-workspace')
    //   file && file.exists && (await open(file.path!))
    // }
    // /**
    //  *
    //  */
    // async openWeb() {
    //   await open(`https://carmel-${this.id}.vercel.app`)
    // }
    /**
     *
     * @param target
     * @param watch
     */
    Product.prototype.resolve = function (target, watch) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var packerDir, stackDir, packerInstance, stackConfig, _b, isStatic, options;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.load();
                        if (!this.isLoaded)
                            return [2 /*return*/];
                        packerDir = new __1.Dir(this.packer.path);
                        stackDir = new __1.Dir(this.stack.path);
                        packerInstance = require(packerDir.path);
                        stackConfig = require(stackDir.file('carmel.json').path);
                        // Make sure we've got them all
                        if (!packerInstance ||
                            !packerInstance[target] ||
                            !stackConfig ||
                            !stackConfig[target] ||
                            !((_a = stackDir.file('carmel.json')) === null || _a === void 0 ? void 0 : _a.exists))
                            return [2 /*return*/];
                        // Look for a port
                        _b = this;
                        return [4 /*yield*/, get_port_1.default()];
                    case 1:
                        // Look for a port
                        _b._packerPort = _c.sent();
                        isStatic = !watch;
                        options = __assign({ contextDir: this.dir.path, mainDir: this.dir.path, destDir: this.dir.dir("." + target).path, stackDir: stackDir === null || stackDir === void 0 ? void 0 : stackDir.path, packerDir: packerDir === null || packerDir === void 0 ? void 0 : packerDir.path, stackConfig: stackConfig, entryFile: stackDir.file(stackConfig[target].entry[isStatic ? 'static' : 'dom']).path, target: target, entry: stackConfig[target].entry, templateFile: stackDir.file(stackConfig[target].template).path, watch: watch,
                            isStatic: isStatic, port: this.packerPort }, this.data);
                        // Let's send it all back
                        this._packer = new packerInstance[target].Packer(options);
                        return [2 /*return*/, options];
                }
            });
        });
    };
    Object.defineProperty(Product.prototype, "cacheDir", {
        /**
         *
         */
        get: function () {
            return this._cacheDir;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Load this product and all its artifacts, including its manifest
     */
    Product.prototype.load = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var packerId, stackId, packerVersion, stackVersion, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        // No need to re-load this again
                        if (this.isLoaded)
                            return [2 /*return*/, this];
                        if (!this.manifest.exists) {
                            // Don't bother without a manifest
                            this.changeState(__1.ProductState.UNLOADED);
                            return [2 /*return*/, this];
                        }
                        // Alright, let's do this
                        this.changeState(__1.ProductState.LOADING);
                        // First things first, let's get the manifest loaded up
                        this.manifest.load();
                        // Keep track of the id
                        this._id = this.manifest.data.json().id;
                        packerId = this.manifest.data.json().packer;
                        stackId = this.manifest.data.json().stack;
                        packerVersion = this.manifest.data.json().packerVersion;
                        stackVersion = this.manifest.data.json().stackVersion;
                        // Get the fresh packer and stack
                        _c = this;
                        _d = packerId;
                        if (!_d) return [3 /*break*/, 2];
                        return [4 /*yield*/, ((_a = this.session) === null || _a === void 0 ? void 0 : _a.index.installArchive({
                                id: packerId,
                                version: packerVersion,
                                section: 'packers',
                            }))];
                    case 1:
                        _d = (_g.sent());
                        _g.label = 2;
                    case 2:
                        // Get the fresh packer and stack
                        _c._packer = _d;
                        _e = this;
                        _f = stackId;
                        if (!_f) return [3 /*break*/, 4];
                        return [4 /*yield*/, ((_b = this.session) === null || _b === void 0 ? void 0 : _b.index.installArchive({
                                id: stackId,
                                version: stackVersion,
                                section: 'stacks',
                            }))];
                    case 3:
                        _f = (_g.sent());
                        _g.label = 4;
                    case 4:
                        _e._stack = _f;
                        // Get the code ready
                        return [4 /*yield*/, this.code.initialize()
                            // Prepare the snapshot if necessary and if all good,
                            // then tell everyone we're ready for action
                        ];
                    case 5:
                        // Get the code ready
                        _g.sent();
                        // Prepare the snapshot if necessary and if all good,
                        // then tell everyone we're ready for action
                        this.changeState(__1.ProductState.READY);
                        // Let callers access us directly
                        return [2 /*return*/, this];
                }
            });
        });
    };
    /**
     *
     */
    Product.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.manifest.data.update(data);
                this.manifest.save();
                return [2 /*return*/, this.manifest.data.json()];
            });
        });
    };
    /**
     *
     * @param context
     */
    Product.prototype.saveContext = function (context) {
        this.manifest.data.append({ context: context });
        this.manifest.save();
    };
    /**
     *
     * @param data
     */
    Product.prototype.saveData = function (data) {
        this.manifest.data.append(data);
        this.manifest.save();
    };
    /**
     *
     * @param path
     */
    Product.prototype.loadFile = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var file;
            return __generator(this, function (_a) {
                file = new __1.File(path);
                return [2 /*return*/, file.load()];
            });
        });
    };
    /**
     *
     * @param dirpath
     */
    Product.prototype.findDirs = function (dirpath) {
        var _a;
        return ((_a = this.dir.dir(dirpath)) === null || _a === void 0 ? void 0 : _a.dirs) || [];
    };
    /** The default name of the manifest */
    Product.MANIFEST_FILENAME = '.carmel.json';
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=Product.js.map