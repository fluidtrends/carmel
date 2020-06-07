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
     * @param props
     * @param target
     */
    function Product(session) {
        this._dir = new __1.Dir(process.cwd());
        this._manifest = new __1.File(this.dir.path !== undefined ? path_1.default.resolve(this.dir.path, Product.MANIFEST_FILENAME) : undefined);
        this._state = __1.ProductState.UNLOADED;
        this._session = session;
    }
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
    Object.defineProperty(Product.prototype, "stack", {
        /**
         *
         */
        get: function () {
            return this._stack;
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
     * Load this product and all its artifacts, including its manifest
     */
    Product.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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
                // Look for the stack in the manifest
                // const stackId = this.manifest.data.json().stack
                // if (!stackId) {
                //     // No stack specified - not good, nothing to look for anymore
                //     this.changeState(ProductState.UNLOADED)
                //     return this
                // }
                // // There we go, we have a stack too
                // this._stack = await this.session?.findStack(stackId)
                // if (!this.stack) {
                //     // Not quiet yet
                //     this.changeState(ProductState.UNLOADED)
                //     throw Errors.ProductCannotLoad(Strings.StackIsMissingString(stackId))
                // }
                // // Take an initial snapshot
                // this._snapshot = await new Snapshot(this).load()
                // if (!this.snapshot) {
                //     // Not quiet yet
                //     this.changeState(ProductState.UNLOADED)
                //     throw Errors.ProductCannotLoad(Strings.CannotTakeSnapshotString())
                // }
                // Prepare the snapshot if necessary and if all good,
                // then tell everyone we're ready for action
                this.changeState(__1.ProductState.READY);
                // Let callers access us directly
                return [2 /*return*/, this];
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
    Product.MANIFEST_FILENAME = ".carmel.json";
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=Product.js.map