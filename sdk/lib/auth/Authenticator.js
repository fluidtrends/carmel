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
exports.Authenticator = void 0;
var __1 = require("..");
// import browserSync, { BrowserSyncInstance } from 'browser-sync'
var passport_1 = __importDefault(require("passport"));
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var http_1 = __importDefault(require("http"));
var path_1 = __importDefault(require("path"));
/**
 *
 */
var Authenticator = /** @class */ (function () {
    /**
     *
     * @param session
     */
    function Authenticator(session) {
        this._session = session;
        this._port = Authenticator.AUTH_PORT;
        this._host = Authenticator.AUTH_HOST;
        this._protocol = Authenticator.AUTH_PROTOCOL;
        this._dir = new __1.Dir(path_1.default.resolve(__dirname, '../../auth'));
        this._app = express_1.default();
        // this._browser = browserSync.create()
        this._providers = new Map();
    }
    Object.defineProperty(Authenticator.prototype, "user", {
        /**
         *
         */
        get: function () {
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authenticator.prototype, "session", {
        /**
         *
         */
        get: function () {
            return this._session;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authenticator.prototype, "providers", {
        /**
         *
         */
        get: function () {
            return this._providers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authenticator.prototype, "app", {
        /**
         *
         */
        get: function () {
            return this._app;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authenticator.prototype, "port", {
        // /**
        //  *
        //  */
        // get browser() {
        //   return this._browser
        // }
        /**
         *
         */
        get: function () {
            return this._port;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authenticator.prototype, "host", {
        /**
         *
         */
        get: function () {
            return this._host;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authenticator.prototype, "dir", {
        /**
         *
         */
        get: function () {
            return this._dir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authenticator.prototype, "protocol", {
        /**
         *
         */
        get: function () {
            return this._protocol;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authenticator.prototype, "baseUrl", {
        /**
         *
         */
        get: function () {
            return this.protocol + "://" + this.host + ":" + this.port;
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     * @param uri
     */
    Authenticator.prototype.endpoint = function (uri) {
        return this.baseUrl + "/" + uri;
    };
    /**
     *
     */
    Authenticator.prototype.openBrowser = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /** @internal */
    Authenticator.prototype._initializeApp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.app.set('port', this.port);
                this.app.set('views', this.dir.path);
                this.app.set('view engine', 'ejs');
                this.app.use(cors_1.default({
                    origin: this.baseUrl,
                    methods: ['GET', 'POST'],
                    credentials: true,
                }));
                this.app.use(function (req, res, next) {
                    res.header('Access-Control-Allow-Origin', _this.baseUrl);
                    res.header('Access-Control-Allow-Credentials', 'true');
                    next();
                });
                this.app.use(body_parser_1.default.json());
                this.app.use(body_parser_1.default.urlencoded({ extended: false }));
                this.app.use(cookie_parser_1.default());
                this.app.use(express_1.default.static(this.dir.path));
                this.app.use(__1.AuthSession({
                    name: this.session.name,
                    secret: this.session.id,
                    resave: true,
                    saveUninitialized: false,
                    cookie: { maxAge: __1.Session.DEFAULT_EXPIRATION },
                    store: this.session.store,
                }));
                this.app.use(passport_1.default.initialize());
                this.app.use(passport_1.default.session());
                return [2 /*return*/];
            });
        });
    };
    /**
     *
     */
    Authenticator.prototype.stop = function (when) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                setTimeout(function () {
                    // this.browser.exit()
                }, when);
                return [2 /*return*/];
            });
        });
    };
    /**
     *
     * @param user
     */
    Authenticator.prototype.update = function (user) {
        this._user = user;
    };
    /**
     *
     */
    Authenticator.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var githubProvider, vercelProvider;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._initializeApp();
                        this.app.get('/', function (req, res) {
                            if (!req.isAuthenticated()) {
                                res.redirect('/auth/login');
                                return;
                            }
                            res.render('screens/main', {
                                user: req.user,
                                carmel: {
                                    version: _this.session.pkg.version,
                                },
                            });
                            _this.stop(2000);
                        });
                        this.app.get('/auth/login', function (req, res) {
                            if (req.isAuthenticated()) {
                                res.redirect('/');
                                return;
                            }
                            res.render('screens/auth', {
                                carmel: {
                                    version: _this.session.pkg.version,
                                },
                            });
                        });
                        this.app.get('/auth/logout', function (req, res) {
                            req.logOut();
                            req.session.destroy(function () {
                                res.clearCookie(_this.session.name);
                                res.redirect('/');
                            });
                        });
                        githubProvider = new __1.GitHubProvider(this);
                        return [4 /*yield*/, githubProvider.initialize()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, githubProvider.prepareKeys()];
                    case 2:
                        _a.sent();
                        vercelProvider = new __1.VercelProvider(this);
                        return [4 /*yield*/, vercelProvider.initialize()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, vercelProvider.prepareKeys()
                            // Add providers
                        ];
                    case 4:
                        _a.sent();
                        // Add providers
                        this.providers.set(__1.AccessTokenType.GITHUB, githubProvider);
                        this.providers.set(__1.AccessTokenType.VERCEL, vercelProvider);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     */
    Authenticator.prototype.setupSecurity = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(Array.from(this.providers.values()).map(function (provider) {
                            return provider.prepareKeys();
                        }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     */
    Authenticator.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var serverInstance;
            var _this = this;
            return __generator(this, function (_a) {
                serverInstance = new http_1.default.Server(this.app);
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // this.browser.emitter.on('service:exit', () => resolve())
                        serverInstance.listen(_this.port, function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                this.openBrowser();
                                return [2 /*return*/];
                            });
                        }); });
                    })];
            });
        });
    };
    /** */
    Authenticator.AUTH_PORT = 13013;
    /** */
    Authenticator.AUTH_HOST = '127.0.0.1';
    /** */
    Authenticator.AUTH_PROTOCOL = 'http';
    return Authenticator;
}());
exports.Authenticator = Authenticator;
//# sourceMappingURL=Authenticator.js.map