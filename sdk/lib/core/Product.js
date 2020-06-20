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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var path_1 = __importDefault(require("path"));
var get_port_1 = __importDefault(require("get-port"));
var __1 = require("..");
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
    function Product(session) {
        this._dir = new __1.Dir(process.cwd());
        this._manifest = new __1.File(this.dir.path !== undefined
            ? path_1.default.resolve(this.dir.path, Product.MANIFEST_FILENAME)
            : undefined);
        this._state = __1.ProductState.UNLOADED;
        this._session = session;
        this._code = new __1.Code(this);
    }
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
    Product.prototype.createFromTemplate = function (id) {
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
                        return [4 /*yield*/, template.install(this.dir, this)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, this.load()];
                }
            });
        });
    };
    /**
     *
     */
    Product.prototype.loadCache = function () {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var id, dir, packerId, stackId, packerVersion, stackVersion, packer, _e, stack, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        this.manifest.load();
                        id = this.manifest.data.json().id;
                        dir = (_b = new __1.Dir((_a = this.session) === null || _a === void 0 ? void 0 : _a.index.sections.products.path)) === null || _b === void 0 ? void 0 : _b.dir(id);
                        packerId = this.manifest.data.json().packer;
                        stackId = this.manifest.data.json().stack;
                        packerVersion = this.manifest.data.json().packerVersion;
                        stackVersion = this.manifest.data.json().stackVersion;
                        _e = packerId;
                        if (!_e) return [3 /*break*/, 2];
                        return [4 /*yield*/, ((_c = this.session) === null || _c === void 0 ? void 0 : _c.index.installArchive({
                                id: packerId,
                                version: packerVersion,
                                section: 'packers',
                            }))];
                    case 1:
                        _e = (_g.sent());
                        _g.label = 2;
                    case 2:
                        packer = _e;
                        _f = stackId;
                        if (!_f) return [3 /*break*/, 4];
                        return [4 /*yield*/, ((_d = this.session) === null || _d === void 0 ? void 0 : _d.index.installArchive({
                                id: stackId,
                                version: stackVersion,
                                section: 'stacks',
                            }))];
                    case 3:
                        _f = (_g.sent());
                        _g.label = 4;
                    case 4:
                        stack = _f;
                        return [2 /*return*/, { id: id, packer: packer, stack: stack, dir: dir }];
                }
            });
        });
    };
    /**
     *
     * @param target
     * @param watch
     */
    Product.prototype.resolvePacker = function (target, watch) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var productId, bundle, bundleVersion, templateName, productCacheDir, templateId, cache, template, _e, packerDir, stackDir, packerInstance, stackConfig, port, options, workspace, packer;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        productId = this.manifest.data.json().id;
                        bundle = this.manifest.data.json().bundle;
                        bundleVersion = this.manifest.data.json().bundleVersion;
                        templateName = this.manifest.data.json().template;
                        productCacheDir = (_b = new __1.Dir((_a = this.session) === null || _a === void 0 ? void 0 : _a.index.sections.products.path)) === null || _b === void 0 ? void 0 : _b.dir(productId);
                        templateId = bundle + "/" + bundleVersion + "/" + templateName;
                        cache = undefined;
                        if (!!(productCacheDir === null || productCacheDir === void 0 ? void 0 : productCacheDir.exists)) return [3 /*break*/, 3];
                        return [4 /*yield*/, ((_c = this.session) === null || _c === void 0 ? void 0 : _c.findTemplate(templateId))];
                    case 1:
                        template = _f.sent();
                        return [4 /*yield*/, template.install(this.dir, this)];
                    case 2:
                        cache = _f.sent();
                        _f.label = 3;
                    case 3:
                        if (!(cache === undefined)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.loadCache()];
                    case 4:
                        _e = _f.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        _e = cache;
                        _f.label = 6;
                    case 6:
                        // Make sure we have a product cache available
                        cache = _e;
                        packerDir = new __1.Dir(cache.packer.path);
                        stackDir = new __1.Dir(cache.stack.path);
                        packerInstance = require(packerDir.path);
                        stackConfig = require(stackDir.file('carmel.json').path);
                        // Make sure we've got them all
                        if (!packerInstance ||
                            !packerInstance[target] ||
                            !stackConfig ||
                            !stackConfig[target] ||
                            !((_d = stackDir.file('carmel.json')) === null || _d === void 0 ? void 0 : _d.exists))
                            return [2 /*return*/];
                        return [4 /*yield*/, get_port_1.default({ port: 9000 })
                            // Build the packer options
                        ];
                    case 7:
                        port = _f.sent();
                        options = {
                            contextDir: productCacheDir.path,
                            mainDir: this.dir.path,
                            entryFile: stackDir.file(stackConfig[target].entry).path,
                            destDir: productCacheDir === null || productCacheDir === void 0 ? void 0 : productCacheDir.dir("." + target).path,
                            stackDir: stackDir.path,
                            templateFile: stackDir.file(stackConfig[target].template).path,
                            watch: watch,
                            port: port,
                        };
                        workspace = productCacheDir === null || productCacheDir === void 0 ? void 0 : productCacheDir.file('carmel.code-workspace');
                        packer = new packerInstance[target].Packer(options);
                        return [2 /*return*/, { packer: packer, workspace: workspace }];
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
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
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
                        // Resolve the cache roo
                        this._cacheDir = new __1.Dir(path_1.default.resolve((_a = this.session) === null || _a === void 0 ? void 0 : _a.index.sections.products.path, this.id));
                        // Get the code ready
                        return [4 /*yield*/, this.code.initialize()
                            // Prepare the snapshot if necessary and if all good,
                            // then tell everyone we're ready for action
                        ];
                    case 1:
                        // Get the code ready
                        _b.sent();
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