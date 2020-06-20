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
exports.GitHubProvider = void 0;
var passport_github2_1 = require("passport-github2");
var passport_1 = __importDefault(require("passport"));
var rest_1 = require("@octokit/rest");
var __1 = require("..");
/**
 *
 */
var GitHubProvider = /** @class */ (function () {
    /**
     *
     * @param authenticator
     */
    function GitHubProvider(authenticator) {
        this._authenticator = authenticator;
        this._keys = [];
    }
    Object.defineProperty(GitHubProvider.prototype, "keys", {
        /**
         *
         */
        get: function () {
            return this._keys;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GitHubProvider.prototype, "authenticator", {
        /**
         *
         */
        get: function () {
            return this._authenticator;
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     */
    GitHubProvider.prototype.setupNewKey = function (title, service) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var newLocalKey;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.authenticator.session.keystore.addNewKey('github')
                        // And add it remotely
                    ];
                    case 1:
                        newLocalKey = _b.sent();
                        // And add it remotely
                        return [4 /*yield*/, service.users.createPublicSshKeyForAuthenticated({
                                title: title,
                                key: (_a = newLocalKey.files.get('public.ssh')) === null || _a === void 0 ? void 0 : _a.data.raw,
                            })
                            // Keep track of it
                        ];
                    case 2:
                        // And add it remotely
                        _b.sent();
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
    GitHubProvider.prototype.fetchRemoteKeys = function (service) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, service.users.listPublicSshKeysForAuthenticated()];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     *
     */
    GitHubProvider.prototype.prepareKeys = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, keystore, system, service, localKeys, remoteKeys, title, foundTitles, subId, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.authenticator.session.isLoggedIn) {
                            return [2 /*return*/];
                        }
                        _a = this.authenticator.session, keystore = _a.keystore, system = _a.system;
                        service = new rest_1.Octokit({
                            auth: this.authenticator.session.token(__1.AccessTokenType.GITHUB),
                        });
                        localKeys = keystore.keys.get('github') || [];
                        return [4 /*yield*/, this.fetchRemoteKeys(service)];
                    case 1:
                        remoteKeys = (_c.sent()) || [];
                        title = "carmel/" + (system === null || system === void 0 ? void 0 : system.id);
                        if (!(localKeys.length === 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.setupNewKey(title + "/0", service)];
                    case 2:
                        _c.sent();
                        return [2 /*return*/];
                    case 3:
                        foundTitles = [];
                        remoteKeys.map(function (remoteKey) {
                            localKeys.map(function (localKey) {
                                var _a;
                                var ssh = (_a = localKey.files.get('public.ssh')) === null || _a === void 0 ? void 0 : _a.data.raw;
                                ssh === remoteKey.key + " carmel" && _this.keys.push(localKey);
                                remoteKey.title.startsWith(title) &&
                                    foundTitles.push(remoteKey.title.substring(title.length + 1) || '0');
                            });
                        });
                        // Calculate the next unique title
                        foundTitles = foundTitles.map(function (suffix) { return "" + suffix; });
                        subId = Array.from(Array(100).keys()).find(function (id) { return !foundTitles.includes("" + (id + 1)); });
                        title = title + "/" + (subId + 1);
                        _b = this.keys.length > 0;
                        if (_b) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.setupNewKey(title, service)];
                    case 4:
                        _b = (_c.sent());
                        _c.label = 5;
                    case 5:
                        _b;
                        return [2 /*return*/];
                }
            });
        });
    };
    GitHubProvider.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                passport_1.default.serializeUser(function (user, done) {
                    done(null, user);
                });
                passport_1.default.deserializeUser(function (user, done) {
                    done(null, user);
                });
                passport_1.default.use(new passport_github2_1.Strategy({
                    clientID: GitHubProvider.APP_CLIENT_ID,
                    clientSecret: GitHubProvider.APP_CLIENT_SECRET,
                    callbackURL: this.authenticator.endpoint("auth/github/callback"),
                }, function (accessToken, refreshToken, profile, done) {
                    process.nextTick(function () {
                        done(null, __assign(__assign({}, profile._json), { tokens: [
                                {
                                    type: __1.AccessTokenType.GITHUB,
                                    value: accessToken,
                                },
                            ] }));
                    });
                }));
                this.authenticator.app.get('/auth/github', passport_1.default.authenticate('github', {
                    scope: ['user:email', 'write:public_key'],
                }));
                this.authenticator.app.get('/auth/github/callback', passport_1.default.authenticate('github', {
                    failureRedirect: '/login',
                }), function (req, res) {
                    res.redirect('/');
                });
                return [2 /*return*/];
            });
        });
    };
    /** */
    GitHubProvider.APP_CLIENT_ID = '638343cb36c073a0a29f';
    /** */
    GitHubProvider.APP_CLIENT_SECRET = '7008e0bf5922f1b2cea61e2d62e4b6057288b367';
    return GitHubProvider;
}());
exports.GitHubProvider = GitHubProvider;
//# sourceMappingURL=GitHubProvider.js.map