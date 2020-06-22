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
exports.VercelProvider = void 0;
var passport_1 = __importDefault(require("passport"));
var passport_oauth2_1 = __importDefault(require("passport-oauth2"));
var client_1 = require("@vercel/client");
var axios_1 = __importDefault(require("axios"));
var __1 = require("..");
/**
 *
 */
var VercelProvider = /** @class */ (function () {
    /**
     *
     * @param authenticator
     */
    function VercelProvider(authenticator) {
        this._authenticator = authenticator;
        this._keys = [];
    }
    Object.defineProperty(VercelProvider.prototype, "keys", {
        /**
         *
         */
        get: function () {
            return this._keys;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VercelProvider.prototype, "token", {
        /**
         *
         */
        get: function () {
            return this.authenticator.session.token(__1.AccessTokenType.VERCEL);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VercelProvider.prototype, "authenticator", {
        /**
         *
         */
        get: function () {
            return this._authenticator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VercelProvider.prototype, "isLoggedIn", {
        /**
         *
         */
        get: function () {
            return this.token !== undefined;
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     */
    VercelProvider.prototype.setupNewKey = function (title, service) {
        return __awaiter(this, void 0, void 0, function () {
            var newLocalKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authenticator.session.keystore.addNewKey('vercel')
                        // Keep track of it
                    ];
                    case 1:
                        newLocalKey = _a.sent();
                        // Keep track of it
                        this._keys.push(newLocalKey);
                        return [2 /*return*/, newLocalKey];
                }
            });
        });
    };
    /**
     *
     * @param service
     */
    VercelProvider.prototype.fetchRemoteKeys = function (service) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, []];
            });
        });
    };
    /**
     *
     */
    VercelProvider.prototype.prepareKeys = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, keystore, system, localKeys;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.authenticator.session.isLoggedIn) {
                            return [2 /*return*/];
                        }
                        _a = this.authenticator.session, keystore = _a.keystore, system = _a.system;
                        localKeys = keystore.keys.get('vercel') || [];
                        if (!(localKeys.length === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.setupNewKey("")];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                    case 2:
                        localKeys.map(function (k) { return _this.keys.push(k); });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @param name
     * @param repo
     */
    VercelProvider.prototype.push = function (name, repo) {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function () {
            var project, deploymentGenerator, deployment, _b, _c, event_1, e_1_1;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.isLoggedIn)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.request("v1/projects/ensure-project", {
                                name: name,
                            })];
                    case 1:
                        project = _d.sent();
                        return [4 /*yield*/, this.request("v2/projects/" + name, {
                                publicSource: true,
                                framework: null,
                                buildCommand: null,
                                devCommand: null,
                                outputDirectory: '.web',
                                rootDirectory: null,
                            }, true)];
                    case 2:
                        project = _d.sent();
                        if (!project)
                            return [2 /*return*/];
                        deploymentGenerator = function () {
                            return client_1.createDeployment({
                                token: _this.token,
                                path: repo.dir.path,
                            }, {
                                name: name,
                                version: 2,
                            });
                        };
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 8, 9, 14]);
                        _b = __asyncValues(deploymentGenerator());
                        _d.label = 4;
                    case 4: return [4 /*yield*/, _b.next()];
                    case 5:
                        if (!(_c = _d.sent(), !_c.done)) return [3 /*break*/, 7];
                        event_1 = _c.value;
                        switch (event_1.type) {
                            case 'error':
                                console.log(event_1.payload);
                                break;
                            case 'ready':
                                deployment = event_1.payload;
                                break;
                        }
                        _d.label = 6;
                    case 6: return [3 /*break*/, 4];
                    case 7: return [3 /*break*/, 14];
                    case 8:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 14];
                    case 9:
                        _d.trys.push([9, , 12, 13]);
                        if (!(_c && !_c.done && (_a = _b.return))) return [3 /*break*/, 11];
                        return [4 /*yield*/, _a.call(_b)];
                    case 10:
                        _d.sent();
                        _d.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 13: return [7 /*endfinally*/];
                    case 14: return [2 /*return*/, deployment];
                }
            });
        });
    };
    /**
     *
     * @param uri
     * @param options
     * @param patch
     */
    VercelProvider.prototype.request = function (uri, options, patch) {
        return __awaiter(this, void 0, void 0, function () {
            var url, header, data, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isLoggedIn)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        url = "https://api.vercel.com/" + uri;
                        header = {
                            headers: {
                                Authorization: "Bearer " + this.token,
                                'Content-Type': 'application/json',
                            },
                        };
                        return [4 /*yield*/, (options
                                ? patch
                                    ? axios_1.default.patch(url, options || {}, header)
                                    : axios_1.default.post(url, options || {}, header)
                                : axios_1.default.get(url, header))];
                    case 2:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                    case 3:
                        e_2 = _a.sent();
                        console.log(e_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     */
    VercelProvider.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                passport_1.default.use(new passport_oauth2_1.default({
                    authorizationURL: 'https://vercel.com/oauth/authorize',
                    tokenURL: 'https://api.vercel.com/v2/oauth/access_token',
                    clientID: VercelProvider.APP_CLIENT_ID,
                    clientSecret: VercelProvider.APP_CLIENT_SECRET,
                    callbackURL: this.authenticator.baseUrl + "/auth/vercel/callback",
                }, function (accessToken, refreshToken, profile, done) {
                    process.nextTick(function () {
                        var user = _this.authenticator.user;
                        user === null || user === void 0 ? void 0 : user.tokens.push({
                            type: __1.AccessTokenType.VERCEL,
                            value: accessToken,
                        });
                        done(null, user);
                    });
                }));
                this.authenticator.app.get('/auth/vercel', passport_1.default.authenticate('oauth2'));
                this.authenticator.app.get('/auth/vercel/callback', passport_1.default.authenticate('oauth2', { failureRedirect: '/login' }), function (req, res) {
                    res.redirect('/');
                });
                return [2 /*return*/];
            });
        });
    };
    /** */
    VercelProvider.APP_CLIENT_ID = 'oac_6cgAIFisZuUgjKYVdM4rdg8s';
    /** */
    VercelProvider.APP_CLIENT_SECRET = '5CptA1wt73OmfR03VkYbexwK';
    return VercelProvider;
}());
exports.VercelProvider = VercelProvider;
//# sourceMappingURL=VercelProvider.js.map