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
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _d, createFactory, createController, createServer, deploymentId, deploymentRoot, ignores, files, publicGatewayUrl, hash, ipfsUrl, shorten, shortUrl;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!((_a = this.dir) === null || _a === void 0 ? void 0 : _a.exists))
                            return [2 /*return*/];
                        _d = require('ipfsd-ctl'), createFactory = _d.createFactory, createController = _d.createController, createServer = _d.createServer;
                        process.env.IPFS_PATH = (_c = (_b = this.code.product.session.dir.dir('ipfs')) === null || _b === void 0 ? void 0 : _b.make()) === null || _c === void 0 ? void 0 : _c.path;
                        deploymentId = shortid_1.default.generate();
                        deploymentRoot = "/deployments/" + deploymentId;
                        ignores = ['.DS_Store'];
                        return [4 /*yield*/, recursive_readdir_1.default(this.dir.path)];
                    case 1:
                        files = _e.sent();
                        files = files.filter(function (file) { return !ignores.includes(path_1.default.basename(file)); }).map(function (file) {
                            var info = fs_1.default.statSync(file);
                            return {
                                path: deploymentRoot + "/" + path_1.default.relative(_this.dir.path, file),
                                content: fs_1.default.readFileSync(file),
                                mtime: info.mtime
                            };
                        });
                        if (!files || files.length === 0)
                            return [2 /*return*/];
                        console.log('starting ipfs node ...');
                        publicGatewayUrl = "https://cloudflare-ipfs.com";
                        console.log('done. pushing files ...');
                        hash = 'Qmed19uXaxrhNFwEhmPm8zyz9vnF7TaqstJ4BiXvZ6ZuUb';
                        console.log('done. publishing web ...');
                        ipfsUrl = publicGatewayUrl + "/ipfs/" + hash;
                        console.log(ipfsUrl);
                        return [4 /*yield*/, axios_1.default.post("https://rel.ink/api/links/", {
                                url: ipfsUrl
                            }, {
                                headers: { 'Content-Type': 'application/json' }
                            })];
                    case 2:
                        shorten = _e.sent();
                        if (!shorten || !shorten.data || !shorten.data.hashid) {
                            return [2 /*return*/];
                        }
                        shortUrl = "https://rel.ink/" + shorten.data.hashid;
                        console.log(shortUrl);
                        // const deployed = []
                        // for await (const result of node.api.files.ls(deploymentRoot)) deployed.push(result)
                        // const deployedWeb = deployed.find(d => d.name === 'web')
                        // const deployedWebNamed = await node.api.name.publish(deployedWeb.cid)
                        // const deployedWebNamed = await node.api.name.publish(`/ipfs/${hash}`)
                        // console.log(deployedWebNamed)
                        // const deployedWebUrls = {
                        //   // localRaw: `${localGatewayUrl}/ipfs/${deployedWeb.cid}`,
                        //   localNamed: `${localGatewayUrl}/ipns/${deployedWebNamed.name}`,
                        //   // publicRaw: `${publicGatewayUrl}/ipfs/${deployedWeb.cid}`,
                        //   publicNamed: `${publicGatewayUrl}/ipns/${deployedWebNamed.name}`
                        // }
                        console.log('done.');
                        // console.log(deployedWebUrls)
                        // await node.stop()
                        console.log('node stopped');
                        return [2 /*return*/];
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