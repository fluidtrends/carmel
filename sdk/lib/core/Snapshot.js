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
exports.Snapshot = void 0;
var __1 = require("..");
var shortid_1 = __importDefault(require("shortid"));
/**
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Snapshot.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Snapshot.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Snapshot.ts/stats | Code Stats}
 *
 * @category Core
 */
var Snapshot = /** @class */ (function () {
    /**
     *
     * @param product
     * @param target
     */
    function Snapshot(product) {
        var _a;
        this._product = product;
        this._dir = (_a = this.product.dir.dir(Snapshot.SNAPSHOT_DIRNAME)) === null || _a === void 0 ? void 0 : _a.make();
        this._id = shortid_1.default.generate();
    }
    Object.defineProperty(Snapshot.prototype, "product", {
        /**
         *
         */
        get: function () {
            return this._product;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Snapshot.prototype, "exists", {
        /**
         *
         */
        get: function () {
            var _a;
            return this.dir !== undefined && ((_a = this.dir) === null || _a === void 0 ? void 0 : _a.exists);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Snapshot.prototype, "id", {
        /**
         *
         */
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Snapshot.prototype, "dir", {
        /**
         *
         */
        get: function () {
            return this._dir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Snapshot.prototype, "chunksDir", {
        /**
         *
         */
        get: function () {
            return this._chunksDir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Snapshot.prototype, "apps", {
        /**
         *
         */
        get: function () {
            return this._apps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Snapshot.prototype, "chunks", {
        /**
         *
         */
        get: function () {
            return this._chunks;
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     * @param name
     */
    Snapshot.prototype.chunk = function (name) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var chunk;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        chunk = (_a = this.chunks) === null || _a === void 0 ? void 0 : _a.get(name);
                        // Looks like it's already loaded
                        if (chunk)
                            return [2 /*return*/, chunk
                                // Load the chunk
                            ];
                        return [4 /*yield*/, new __1.Chunk(this, name).load()
                            // Something went horribly wrong
                        ];
                    case 1:
                        // Load the chunk
                        chunk = _b.sent();
                        // Something went horribly wrong
                        if (!chunk)
                            return [2 /*return*/, undefined
                                // Keep track of it in memory
                            ];
                        // Keep track of it in memory
                        this._chunks = this._chunks || new Map();
                        this._chunks.set(name, chunk);
                        // Give the caller what they need
                        return [2 /*return*/, chunk];
                }
            });
        });
    };
    /**
     *
     * @param target
     */
    Snapshot.prototype.app = function (target) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var app;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        app = (_a = this.apps) === null || _a === void 0 ? void 0 : _a.get(target);
                        // Looks like it's already loaded
                        if (app)
                            return [2 /*return*/, app
                                // Load the app
                            ];
                        return [4 /*yield*/, new __1.App(this, target).load()];
                    case 1:
                        // Load the app
                        app = _b.sent();
                        if (!app)
                            return [2 /*return*/, undefined
                                // Keep track of it in memory
                            ];
                        // Keep track of it in memory
                        this._apps = this._apps || new Map();
                        this._apps.set(target, app);
                        // Give the caller what they need
                        return [2 /*return*/, app];
                }
            });
        });
    };
    /**
     *
     */
    Snapshot.prototype.load = function () {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        // We need this to exist
                        if (!this.exists)
                            return [2 /*return*/, undefined
                                // Setup the main chunks location if necessary
                            ];
                        // Setup the main chunks location if necessary
                        this._chunksDir = (_b = (_a = this.dir) === null || _a === void 0 ? void 0 : _a.dir('chunks')) === null || _b === void 0 ? void 0 : _b.make();
                        // Look for chunks
                        return [4 /*yield*/, Promise.all(((_c = this.product.dir.dir('chunks')) === null || _c === void 0 ? void 0 : _c.dirs.map(function (name) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.chunk(name)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); })) || [])];
                    case 1:
                        // Look for chunks
                        _d.sent();
                        if (!this.chunks || this.chunks.size === 0) {
                            // Absolutely need some chunks here
                            throw __1.Errors.CannotTakeSnapshot(__1.Strings.ChunksAreMissingString());
                        }
                        // Should be all good now
                        return [2 /*return*/, this.exists ? this : undefined];
                }
            });
        });
    };
    /** The product cache */
    Snapshot.SNAPSHOT_DIRNAME = ".carmel";
    return Snapshot;
}());
exports.Snapshot = Snapshot;
// const _makeChunkShadows = ({ shadowsChunksDir, chunk, shadows }) => {    
//     // Let's make sure the chunk shadow locations are ready
//     const chunkDir = path.resolve(shadowsChunksDir, chunk.name)
//     const chunkScreensDir = path.resolve(chunkDir, 'screens')
//     fs.existsSync(chunkScreensDir) && fs.removeSync(chunkScreensDir) 
//     fs.mkdirsSync(chunkScreensDir)  
//     Object.keys(SHADOW_TYPES).map(type => {
//         const screensShadow = Object.keys(chunk.routes).map(screen => SHADOW_CHUNK_SCREEN({ chunk, screen, type })).join('\n')
//         shadows[type] = `${shadows[type]}${SHADOW({ chunk, type })}\n`
//         fs.writeFileSync(path.resolve(chunkDir, `index${SHADOW_TYPES[type]}.js`), SHADOW_CHUNK({ chunk, type }), 'utf8')
//         fs.writeFileSync(path.resolve(chunkScreensDir, `index${SHADOW_TYPES[type]}.js`), screensShadow, 'utf8')
//     })
// }
// const _makeShadows = (workspace, chunks) => {
//     // The shadows are empty to start with
//     var shadows = { web: "", desktop: "", mobile: ""}
//     // This is where we expect the shadows to exist
//     const shadowsDir = path.resolve(workspace.dir, '.app')
//     const shadowsChunksDir = path.resolve(shadowsDir, 'chunks')
//     // We want to make sure we start with fresh locations 
//     fs.existsSync(shadowsChunksDir) && fs.removeSync(shadowsChunksDir) 
//     fs.mkdirsSync(shadowsChunksDir)  
//     Object.keys(SHADOW_TYPES).map(type => fs.existsSync(path.resolve(shadowsDir, type)) && fs.removeSync(path.resolve(shadowsDir, type)))
//     // We're ready to produce the shadow chunks
//     chunks.map(chunk => _makeChunkShadows({ chunk, shadowsChunksDir, shadows }))
//     // Generate the main shadows
//     Object.keys(SHADOW_TYPES).map(type => fs.writeFileSync(path.resolve(shadowsChunksDir, `index${SHADOW_TYPES[type]}.js`), shadows[type], 'utf8'))
// }
// const run = ({ session, props, script }) => {
//     _makeShadows (session.workspace, props.sections)
//     return script.exec(Object.assign({}, script.props, props))
// }
// SHADOW_TYPES = { web: ".web", desktop: ".desktop", mobile: "" }
// SHADOW_CHUNK_SCREEN = ({ chunk, screen, type }) => `export { default as ${screen} } from '../../../../chunks/${chunk.name}/screens/${screen}${SHADOW_TYPES[type]}.js'`
// SHADOW = ({ chunk, type }) => `export { default as ${chunk.name} } from './${chunk.name}/index${SHADOW_TYPES[type]}.js'`
// SHADOW_CHUNK = ({ chunk, type }) => `
// import config from '../../../chunks/${chunk.name}/chunk.json'
// import * as screens from './screens/index${SHADOW_TYPES[type]}.js'
// const chunk = { screens, ...config }
// export default chunk
// `
//# sourceMappingURL=Snapshot.js.map