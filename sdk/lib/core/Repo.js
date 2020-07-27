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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repo = void 0;
// import NodeGit from 'nodegit'
var recursive_readdir_1 = __importDefault(require("recursive-readdir"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var shortid_1 = __importDefault(require("shortid"));
var axios_1 = __importDefault(require("axios"));
/**
 *
 */
var Repo = /** @class */ (function () {
    /**
     *
     * @param code
     */
    function Repo(code) {
        this._code = code;
    }
    Object.defineProperty(Repo.prototype, "code", {
        /**
         *
         */
        get: function () {
            return this._code;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repo.prototype, "remote", {
        // /**
        //  *
        //  */
        // get local() {
        //   return this._local
        // }
        /**
         *
         */
        get: function () {
            return this._remote;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repo.prototype, "owner", {
        /**
         *
         */
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repo.prototype, "dir", {
        /**
         *
         */
        get: function () {
            return this._dir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repo.prototype, "name", {
        /**
         *
         */
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repo.prototype, "hasRemote", {
        // /**
        //  *
        //  */
        // get isOpen() {
        //   return this._local !== undefined
        // }
        /**
         *
         */
        get: function () {
            return this._remote !== undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repo.prototype, "isRemoteForeign", {
        /**
         *
         */
        get: function () {
            var _a;
            return this.owner !== ((_a = this.code.user) === null || _a === void 0 ? void 0 : _a.login);
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     */
    Repo.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /**
     *
     */
    Repo.prototype.loadRemote = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /**
     *
     */
    Repo.prototype.commit = function (paths, comment) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /** @internal */
    Repo.prototype.shorten = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /**
     *
     */
    Repo.prototype.push = function () {
        var e_1, _a;
        var _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var _e, createFactory, createController, createServer, deploymentId, deploymentRoot, ignores, files, deployment, node, localGatewayUrl, publicGatewayUrl, deployed, _f, _g, result, e_1_1, deployedWeb, deployedWebNamed, shorten, check;
            var _this = this;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        if (!((_b = this.dir) === null || _b === void 0 ? void 0 : _b.exists))
                            return [2 /*return*/];
                        _e = require('ipfsd-ctl'), createFactory = _e.createFactory, createController = _e.createController, createServer = _e.createServer;
                        process.env.IPFS_PATH = (_d = (_c = this.code.product.session.dir.dir('ipfs')) === null || _c === void 0 ? void 0 : _c.make()) === null || _d === void 0 ? void 0 : _d.path;
                        console.log(process.env.IPFS_PATH);
                        deploymentId = shortid_1.default.generate();
                        deploymentRoot = "/deployments/" + deploymentId;
                        ignores = ['.DS_Store'];
                        return [4 /*yield*/, recursive_readdir_1.default(this.dir.path)];
                    case 1:
                        files = _h.sent();
                        files = files.filter(function (file) { return !ignores.includes(path_1.default.basename(file)); }).map(function (file) {
                            var info = fs_1.default.statSync(file);
                            return {
                                path: deploymentRoot + "/" + path_1.default.relative(_this.dir.path, file),
                                content: fs_1.default.readFileSync(file),
                                mtime: info.mtime
                            };
                        });
                        deployment = {
                            timestamp: Date.now(),
                            id: deploymentId,
                            files: files.length
                        };
                        if (!files || files.length === 0)
                            return [2 /*return*/, deployment];
                        console.log('starting ipfs node ...');
                        return [4 /*yield*/, createController({
                                type: 'js',
                                ipfsModule: require('ipfs'),
                                ipfsHttpModule: require('ipfs-http-client'),
                                ipfsBin: path_1.default.join(__dirname, '../../node_modules/ipfs/src/cli/bin.js'),
                                init: true,
                                start: true,
                                ipfsOptions: { start: true, init: true, repo: process.env.IPFS_PATH }
                            })];
                    case 2:
                        node = _h.sent();
                        localGatewayUrl = "http://" + node.api.gatewayHost + ":" + node.api.gatewayPort;
                        publicGatewayUrl = "https://ipfs.io" //cloudflare-ipfs.com`
                        ;
                        console.log('done. pushing files ...');
                        return [4 /*yield*/, Promise.all(files.map(function (file) { return node.api.files.write(file.path, file.content, {
                                parents: true, create: true, mtime: file.mtime
                            }); }))];
                    case 3:
                        _h.sent();
                        console.log('done. checking files ...');
                        deployed = [];
                        _h.label = 4;
                    case 4:
                        _h.trys.push([4, 9, 10, 15]);
                        _f = __asyncValues(node.api.files.ls(deploymentRoot));
                        _h.label = 5;
                    case 5: return [4 /*yield*/, _f.next()];
                    case 6:
                        if (!(_g = _h.sent(), !_g.done)) return [3 /*break*/, 8];
                        result = _g.value;
                        deployed.push(result);
                        _h.label = 7;
                    case 7: return [3 /*break*/, 5];
                    case 8: return [3 /*break*/, 15];
                    case 9:
                        e_1_1 = _h.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 15];
                    case 10:
                        _h.trys.push([10, , 13, 14]);
                        if (!(_g && !_g.done && (_a = _f.return))) return [3 /*break*/, 12];
                        return [4 /*yield*/, _a.call(_f)];
                    case 11:
                        _h.sent();
                        _h.label = 12;
                    case 12: return [3 /*break*/, 14];
                    case 13:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 14: return [7 /*endfinally*/];
                    case 15:
                        deployedWeb = deployed.find(function (d) { return d.name === 'web'; });
                        console.log(deployedWeb.cid);
                        console.log('done. publishing web ...');
                        return [4 /*yield*/, node.api.name.publish(deployedWeb.cid)];
                    case 16:
                        deployedWebNamed = _h.sent();
                        deployment.urls = {
                            publicRaw: publicGatewayUrl + "/ipfs/" + deployedWeb.cid,
                            publicNamed: publicGatewayUrl + "/ipns/" + deployedWebNamed.name
                        };
                        console.log(deployment.urls);
                        console.log('done. shortening ...');
                        return [4 /*yield*/, axios_1.default.post("https://rel.ink/api/links/", {
                                url: deployment.urls.publicRaw
                            }, {
                                headers: { 'Content-Type': 'application/json' }
                            })];
                    case 17:
                        shorten = _h.sent();
                        if (!shorten || !shorten.data || !shorten.data.hashid) {
                            return [2 /*return*/, deployment];
                        }
                        deployment.urls.short = "https://rel.ink/" + shorten.data.hashid;
                        console.log('done. waiting to go live ...');
                        console.log(deployment.urls);
                        check = function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _b.trys.push([0, 2, , 3]);
                                        console.log('checking ...');
                                        return [4 /*yield*/, axios_1.default.get(deployment.urls.publicRaw)];
                                    case 1: return [2 /*return*/, _b.sent()];
                                    case 2:
                                        _a = _b.sent();
                                        return [3 /*break*/, 3];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); };
                        return [4 /*yield*/, new Promise(function (done) {
                                (function () { return __awaiter(_this, void 0, void 0, function () {
                                    var checked;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!(!checked || checked.status !== 200)) return [3 /*break*/, 2];
                                                return [4 /*yield*/, check()];
                                            case 1:
                                                checked = _a.sent();
                                                return [3 /*break*/, 0];
                                            case 2:
                                                done();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); })();
                            })];
                    case 18:
                        _h.sent();
                        console.log('done. stopping ipfs node ...');
                        return [4 /*yield*/, node.stop()];
                    case 19:
                        _h.sent();
                        console.log('ipfs node stopped.');
                        return [2 /*return*/, deployment
                            // if (!this.isOpen) return
                            // let remote = await this.local?.getRemote('origin')
                            // if (!remote) {
                            //   remote = await NodeGit.Remote.create(
                            //     this.local!,
                            //     'origin',
                            //     `git@github.com:${this.owner}/${this.name}.git`
                            //   )
                            // }
                            // await remote?.push(['refs/heads/master:refs/heads/master'], {
                            //   callbacks: {
                            //     credentials: this.code.credentials,
                            //   },
                            // })
                        ];
                }
            });
        });
    };
    /**
     *
     */
    Repo.prototype.setupHosting = function () {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var webDir, deployWebDir;
            return __generator(this, function (_d) {
                webDir = (_b = (_a = this.code) === null || _a === void 0 ? void 0 : _a.dir) === null || _b === void 0 ? void 0 : _b.dir('.web');
                deployWebDir = (_c = this.dir) === null || _c === void 0 ? void 0 : _c.dir('web');
                (deployWebDir === null || deployWebDir === void 0 ? void 0 : deployWebDir.exists) && deployWebDir.remove();
                (webDir === null || webDir === void 0 ? void 0 : webDir.exists) && webDir.copy(deployWebDir);
                return [2 /*return*/];
            });
        });
    };
    /**
     *
     */
    Repo.prototype.initialize = function () {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_d) {
                // Always start with a fresh location
                this._dir = (_c = (_b = (_a = this.code) === null || _a === void 0 ? void 0 : _a.dir) === null || _b === void 0 ? void 0 : _b.dir('deploy')) === null || _c === void 0 ? void 0 : _c.make();
                return [2 /*return*/];
            });
        });
    };
    return Repo;
}());
exports.Repo = Repo;
//# sourceMappingURL=Repo.js.map