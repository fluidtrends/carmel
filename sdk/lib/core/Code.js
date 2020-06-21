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
exports.Code = void 0;
var __1 = require("..");
var rest_1 = require("@octokit/rest");
var nodegit_1 = __importDefault(require("nodegit"));
/**
 *
 */
var Code = /** @class */ (function () {
    /**
     *
     * @param product
     */
    function Code(product) {
        this._product = product;
        this._deployRepo = new __1.Repo(this);
    }
    Object.defineProperty(Code.prototype, "user", {
        /**
         *
         */
        get: function () {
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Code.prototype, "deployRepo", {
        /**
         *
         */
        get: function () {
            return this._deployRepo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Code.prototype, "keys", {
        /**
         *
         */
        get: function () {
            return this._keys;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Code.prototype, "key", {
        /**
         *
         */
        get: function () {
            return this._key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Code.prototype, "keystore", {
        /**
         *
         */
        get: function () {
            return this._keystore;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Code.prototype, "dir", {
        /**
         *
         */
        get: function () {
            return this._dir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Code.prototype, "credentials", {
        /**
         *
         */
        get: function () {
            return this._credentials;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Code.prototype, "service", {
        /**
         *
         */
        get: function () {
            return this._service;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Code.prototype, "product", {
        /**
         *
         */
        get: function () {
            return this._product;
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     */
    Code.prototype.initialize = function () {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        this._keystore = (_a = this.product.session) === null || _a === void 0 ? void 0 : _a.keystore;
                        this._user = (_b = this.product.session) === null || _b === void 0 ? void 0 : _b.user;
                        this._keys = ((_c = this.product.session) === null || _c === void 0 ? void 0 : _c.keys(__1.AccessTokenType.GITHUB)) || [];
                        this._key = this.keys[0];
                        this._dir = this.product.cacheDir;
                        try {
                            this._credentials = function (url, username) {
                                var _a, _b, _c, _d;
                                return nodegit_1.default.Cred.sshKeyNew(username, (_b = (_a = _this.key) === null || _a === void 0 ? void 0 : _a.files.get('public.ssh')) === null || _b === void 0 ? void 0 : _b.path, (_d = (_c = _this.key) === null || _c === void 0 ? void 0 : _c.files.get('private.ssh')) === null || _d === void 0 ? void 0 : _d.path, '');
                            };
                        }
                        catch (_g) { }
                        try {
                            this._service = new rest_1.Octokit({
                                auth: (_e = (_d = this.product) === null || _d === void 0 ? void 0 : _d.session) === null || _e === void 0 ? void 0 : _e.token(__1.AccessTokenType.GITHUB),
                            });
                        }
                        catch (_h) { }
                        return [4 /*yield*/, this.deployRepo.initialize()];
                    case 1:
                        _f.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     */
    Code.prototype.setupDeployment = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ((_a = this.deployRepo) === null || _a === void 0 ? void 0 : _a.setupHosting())];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     */
    Code.prototype.deploy = function (target) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var files;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if ((_b = (_a = this.dir) === null || _a === void 0 ? void 0 : _a.dir(target)) === null || _b === void 0 ? void 0 : _b.exists)
                            return [2 /*return*/];
                        files = ['index.html'];
                        return [4 /*yield*/, ((_c = this.deployRepo) === null || _c === void 0 ? void 0 : _c.commit(files.map(function (f) { return target + "/" + f; }), "New " + target + " deployment"))];
                    case 1:
                        _e.sent();
                        return [4 /*yield*/, ((_d = this.deployRepo) === null || _d === void 0 ? void 0 : _d.push())];
                    case 2:
                        _e.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Code;
}());
exports.Code = Code;
//# sourceMappingURL=Code.js.map