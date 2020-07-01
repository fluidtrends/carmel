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
var __1 = require("..");
var nodegit_1 = __importDefault(require("nodegit"));
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
    Object.defineProperty(Repo.prototype, "local", {
        /**
         *
         */
        get: function () {
            return this._local;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repo.prototype, "remote", {
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
    Object.defineProperty(Repo.prototype, "isOpen", {
        /**
         *
         */
        get: function () {
            return this._local !== undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repo.prototype, "hasRemote", {
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
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 4, , 5]);
                        _b = this;
                        if (!((_a = this.dir) === null || _a === void 0 ? void 0 : _a.exists)) return [3 /*break*/, 2];
                        return [4 /*yield*/, nodegit_1.default.Repository.open(this.dir.path)];
                    case 1:
                        _c = _e.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _c = undefined;
                        _e.label = 3;
                    case 3:
                        _b._local = _c;
                        return [3 /*break*/, 5];
                    case 4:
                        _d = _e.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     */
    Repo.prototype.loadRemote = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 3, , 4]);
                        _a = this;
                        _b = this.code.service;
                        if (!_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.code.service.repos.get({
                                owner: this.owner,
                                repo: this.name,
                            })];
                    case 1:
                        _b = (_d.sent());
                        _d.label = 2;
                    case 2:
                        _a._remote = _b;
                        return [3 /*break*/, 4];
                    case 3:
                        _c = _d.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     */
    Repo.prototype.commit = function (paths, comment) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var signature;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.isOpen)
                            return [2 /*return*/];
                        signature = nodegit_1.default.Signature.now((_a = this.code.user) === null || _a === void 0 ? void 0 : _a.name, (_b = this.code.user) === null || _b === void 0 ? void 0 : _b.email);
                        return [4 /*yield*/, ((_c = this.local) === null || _c === void 0 ? void 0 : _c.createCommitOnHead(paths, signature, signature, comment))];
                    case 1:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     */
    Repo.prototype.push = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var remote;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.isOpen)
                            return [2 /*return*/];
                        return [4 /*yield*/, ((_a = this.local) === null || _a === void 0 ? void 0 : _a.getRemote('origin'))];
                    case 1:
                        remote = _b.sent();
                        if (!!remote) return [3 /*break*/, 3];
                        return [4 /*yield*/, nodegit_1.default.Remote.create(this.local, 'origin', "git@github.com:" + this.owner + "/" + this.name + ".git")];
                    case 2:
                        remote = _b.sent();
                        _b.label = 3;
                    case 3: return [4 /*yield*/, (remote === null || remote === void 0 ? void 0 : remote.push(['refs/heads/master:refs/heads/master'], {
                            callbacks: {
                                credentials: this.code.credentials,
                            },
                        }))];
                    case 4:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     */
    Repo.prototype.setupHosting = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var cwd, vercel, name, deployment;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        cwd = process.cwd();
                        process.chdir(this.dir.path);
                        vercel = (_a = this.code.product.session) === null || _a === void 0 ? void 0 : _a.authenticator.providers.get(__1.AccessTokenType.VERCEL);
                        name = "carmel-" + this.code.product.id;
                        return [4 /*yield*/, (vercel === null || vercel === void 0 ? void 0 : vercel.push(name, this))];
                    case 1:
                        deployment = _b.sent();
                        process.chdir(cwd);
                        return [2 /*return*/, deployment];
                }
            });
        });
    };
    /**
     *
     */
    Repo.prototype.initialize = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return __awaiter(this, void 0, void 0, function () {
            var _o, _p, _q;
            return __generator(this, function (_r) {
                switch (_r.label) {
                    case 0:
                        // Always start with a fresh location
                        this._dir = (_c = (_b = (_a = this.code) === null || _a === void 0 ? void 0 : _a.dir) === null || _b === void 0 ? void 0 : _b.dir('deploy')) === null || _c === void 0 ? void 0 : _c.make();
                        this._owner =
                            ((_g = (_f = (_e = (_d = this.code) === null || _d === void 0 ? void 0 : _d.product) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.deployRepo) === null || _g === void 0 ? void 0 : _g.owner) || ((_h = this.code.user) === null || _h === void 0 ? void 0 : _h.login);
                        this._name = ((_m = (_l = (_k = (_j = this.code) === null || _j === void 0 ? void 0 : _j.product) === null || _k === void 0 ? void 0 : _k.data) === null || _l === void 0 ? void 0 : _l.deployRepo) === null || _m === void 0 ? void 0 : _m.name) || this.owner;
                        return [4 /*yield*/, this.open()];
                    case 1:
                        _r.sent();
                        return [4 /*yield*/, this.loadRemote()];
                    case 2:
                        _r.sent();
                        if (!(!this.hasRemote && !this.isRemoteForeign)) return [3 /*break*/, 4];
                        // Create the remote repo, if possible
                        return [4 /*yield*/, this.code.service.repos.createForAuthenticatedUser({
                                name: this.name,
                            })];
                    case 3:
                        // Create the remote repo, if possible
                        _r.sent();
                        _r.label = 4;
                    case 4:
                        if (this.isOpen) {
                            // Let's get outta here
                            return [2 /*return*/];
                        }
                        _r.label = 5;
                    case 5:
                        _r.trys.push([5, 11, , 12]);
                        // Initialize it, if necessary
                        _o = this;
                        if (!!this.hasRemote) return [3 /*break*/, 7];
                        return [4 /*yield*/, nodegit_1.default.Repository.init(this.dir.path, 0)];
                    case 6:
                        _p = _r.sent();
                        return [3 /*break*/, 9];
                    case 7: // Clone it
                    return [4 /*yield*/, nodegit_1.default.Clone.clone("git@github.com:" + this.owner + "/" + this.name + ".git", this.dir.path, {
                            fetchOpts: {
                                callbacks: {
                                    certificateCheck: function () { return 0; },
                                    credentials: this.code.credentials,
                                },
                            },
                        })];
                    case 8:
                        _p = _r.sent();
                        _r.label = 9;
                    case 9:
                        // Initialize it, if necessary
                        _o._local = _p;
                        return [4 /*yield*/, this.open()];
                    case 10:
                        _r.sent();
                        return [3 /*break*/, 12];
                    case 11:
                        _q = _r.sent();
                        return [3 /*break*/, 12];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    return Repo;
}());
exports.Repo = Repo;
//# sourceMappingURL=Repo.js.map