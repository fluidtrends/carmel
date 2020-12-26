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
var xml2js_1 = __importDefault(require("xml2js"));
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
    Repo.prototype.runNamecheapCommand = function (data) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var vault, productConfig, domain, namecheap, nsIp, nsUser, nsKey, domainParts, nsTLD, nsSLD, nsCmd, nsCallRoot, nsCall, nsResponse, response, ApiResponse, CommandResponse;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        vault = ((_a = this.code.product.session) === null || _a === void 0 ? void 0 : _a.index.sections.secrets).vault;
                        if (vault.isLocked) {
                            return [2 /*return*/];
                        }
                        productConfig = this.code.product.manifest.data.json();
                        domain = productConfig.domain;
                        console.log(">>>:productConfig", productConfig);
                        if (!domain) {
                            return [2 /*return*/];
                        }
                        namecheap = vault.read('namecheap');
                        nsIp = namecheap.clientIP;
                        nsUser = namecheap.username;
                        nsKey = namecheap.apiKey;
                        console.log('NS namecheap:', namecheap);
                        domainParts = domain.split('.');
                        nsTLD = domainParts.pop();
                        nsSLD = domainParts.join('.');
                        nsCmd = data.cmd;
                        nsCallRoot = "https://api.namecheap.com/xml.response?ApiUser=" + nsUser + "&ApiKey=" + nsKey + "&UserName=" + nsUser + "&ClientIP=" + nsIp;
                        nsCall = nsCallRoot + "&SLD=" + nsSLD + "&TLD=" + nsTLD + "&Command=namecheap." + nsCmd + (data.args ? '&' + data.args : '');
                        console.log('NS Call:', nsCall);
                        return [4 /*yield*/, axios_1.default.get(nsCall)];
                    case 1:
                        nsResponse = _b.sent();
                        return [4 /*yield*/, xml2js_1.default.parseStringPromise(nsResponse.data)];
                    case 2:
                        response = _b.sent();
                        ApiResponse = response.ApiResponse;
                        CommandResponse = ApiResponse.CommandResponse;
                        console.log(ApiResponse);
                        if (!ApiResponse || !CommandResponse) {
                            return [2 /*return*/];
                        }
                        if (ApiResponse.$.Status === 'ERROR') {
                            return [2 /*return*/, { error: ApiResponse.Errors[0].Error[0] }];
                        }
                        return [2 /*return*/, CommandResponse[0]];
                }
            });
        });
    };
    Repo.prototype.getNamespaceHosts = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var response, DomainDNSGetHostsResult, host;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.runNamecheapCommand(__assign(__assign({}, data), { cmd: "domains.dns.getHosts" }))];
                    case 1:
                        response = _a.sent();
                        if (!response || response.error || !response.DomainDNSGetHostsResult) {
                            return [2 /*return*/];
                        }
                        DomainDNSGetHostsResult = response.DomainDNSGetHostsResult;
                        host = DomainDNSGetHostsResult[0].host;
                        if (!host) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, host.map(function (entry) {
                                return entry.$;
                            })];
                }
            });
        });
    };
    Repo.prototype.updateNamespaceHosts = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var hosts, args, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getNamespaceHosts(data)];
                    case 1:
                        hosts = _a.sent();
                        if (!hosts) {
                            return [2 /*return*/];
                        }
                        args = "";
                        hosts.map(function (h, i) {
                            var name = h.Name;
                            var type = h.Type;
                            var ttl = h.TTL;
                            var value = h.Address;
                            if (data.cid && name.substring(0, 8) === '_dnslink') {
                                value = "dnslink=/ipfs/" + data.cid;
                            }
                            args = "" + args + ["HostName" + (i + 1)] + "=" + name + "&" + ["Address" + (i + 1)] + "=" + value + "&" + ["RecordType" + (i + 1)] + "=" + type + "&" + ["TTL" + (i + 1)] + "=" + ttl + (i < hosts.length - 1 ? '&' : '');
                        });
                        return [4 /*yield*/, this.runNamecheapCommand(__assign(__assign({}, data), { args: args, cmd: "domains.dns.setHosts" }))];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
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
            var ipfsConfig, deploymentId, deploymentRoot, ignores, files, deployment, ipfsClient, node, localGatewayUrl, publicGatewayUrl, deployed, _e, _f, result, e_1_1, deployedWeb, deployedWebNamed, dns;
            var _this = this;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        if (!((_b = this.dir) === null || _b === void 0 ? void 0 : _b.exists))
                            return [2 /*return*/];
                        process.env.IPFS_PATH = (_d = (_c = this.code.product.session.dir.dir('ipfs')) === null || _c === void 0 ? void 0 : _c.make()) === null || _d === void 0 ? void 0 : _d.path;
                        ipfsConfig = JSON.parse(fs_1.default.readFileSync(path_1.default.resolve(process.env.IPFS_PATH, 'config'), 'utf-8'));
                        deploymentId = shortid_1.default.generate();
                        deploymentRoot = "/deployments/" + deploymentId;
                        ignores = ['.DS_Store'];
                        return [4 /*yield*/, recursive_readdir_1.default(this.dir.path)];
                    case 1:
                        files = _g.sent();
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
                        ipfsClient = require('ipfs-http-client');
                        node = ipfsClient(ipfsConfig.Addresses.API);
                        localGatewayUrl = "http://" + node.gatewayHost + ":" + node.gatewayPort;
                        publicGatewayUrl = "https://ipfs.io";
                        return [4 /*yield*/, Promise.all(files.map(function (file) { return node.files.write(file.path, file.content, {
                                parents: true, create: true, mtime: file.mtime
                            }); }))];
                    case 2:
                        _g.sent();
                        deployed = [];
                        _g.label = 3;
                    case 3:
                        _g.trys.push([3, 8, 9, 14]);
                        _e = __asyncValues(node.files.ls(deploymentRoot));
                        _g.label = 4;
                    case 4: return [4 /*yield*/, _e.next()];
                    case 5:
                        if (!(_f = _g.sent(), !_f.done)) return [3 /*break*/, 7];
                        result = _f.value;
                        deployed.push(result);
                        _g.label = 6;
                    case 6: return [3 /*break*/, 4];
                    case 7: return [3 /*break*/, 14];
                    case 8:
                        e_1_1 = _g.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 14];
                    case 9:
                        _g.trys.push([9, , 12, 13]);
                        if (!(_f && !_f.done && (_a = _e.return))) return [3 /*break*/, 11];
                        return [4 /*yield*/, _a.call(_e)];
                    case 10:
                        _g.sent();
                        _g.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 13: return [7 /*endfinally*/];
                    case 14:
                        deployedWeb = deployed.find(function (d) { return d.name === 'web'; });
                        return [4 /*yield*/, node.name.publish(deployedWeb.cid)];
                    case 15:
                        deployedWebNamed = _g.sent();
                        deployment.urls = {
                            publicRaw: publicGatewayUrl + "/ipfs/" + deployedWeb.cid,
                            publicNamed: publicGatewayUrl + "/ipns/" + deployedWebNamed.name
                        };
                        return [4 /*yield*/, this.updateNamespaceHosts({
                                cid: deployedWeb.cid
                            })];
                    case 16:
                        dns = _g.sent();
                        console.log(dns);
                        // response.elements.map((e: any) => {
                        //   console.log("<<<<<<>llllll>>>>", e)
                        //   if (e.name === 'ApiResponse') {
                        //     console.log(">>EL?:", e.attributes.Status)
                        //     console.log(">>ELel:", e.elements)        
                        //   }
                        // })
                        // const shorten = await axios.post(`https://rel.ink/api/links/`,  {
                        //   url: deployment.urls.publicRaw
                        // }, { 
                        //   headers: { 'Content-Type': 'application/json' }
                        // })
                        // if (!shorten || !shorten.data || !shorten.data.hashid) {
                        //   return deployment
                        // }
                        // deployment.urls.short = `https://rel.ink/${shorten.data.hashid}`
                        // console.log('done. waiting to go live ...')
                        // console.log(deployment.urls)
                        // const check = async () => {
                        //   try {
                        //     console.log('checking ...')
                        //     return await axios.get(deployment.urls.publicRaw)
                        //   } catch {}
                        // }
                        // await new Promise((done) => {
                        //   (async () => {
                        //     let checked: any
                        //     while(!checked || checked.status !== 200) {
                        //       checked = await check()
                        //     }
                        //     done()
                        //   })()
                        // })
                        console.log('done.');
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