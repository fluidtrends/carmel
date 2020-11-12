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
exports.Session = void 0;
var dodi_1 = require("dodi");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var shortid_1 = __importDefault(require("shortid"));
var os_1 = __importDefault(require("os"));
var __1 = require("..");
/**
 * Represents an {@linkcode Engine} Session initiated by a client.
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Session.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Session.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Session.ts/stats | Code Stats}
 *
 * @category Core
 */
var Session = /** @class */ (function () {
    /**
     *
     * Builds a new Session with the given {@linkcode SessionProps} properties
     *
     * @param props The {@linkcode SessionProps} properties
     */
    function Session(props) {
        var _a;
        this._props = props;
        this._logger = new __1.Logger(this.props);
        this._index = new dodi_1.Index(Object.assign({}, { sections: Session.DEFAULT_SECTIONS.map(function (id) { return ({ id: id }); }) }, this.props, { name: 'carmel' }));
        this._state = __1.SessionState.UNINITIALIZED;
        this._pkg = JSON.parse(fs_1.default.readFileSync(path_1.default.resolve(__dirname, '../..', 'package.json'), 'utf8'));
        this._dir = new __1.Dir(this.index.path).make();
        this._manifest = this.dir.file('carmel.json');
        this._authDir = (_a = this.dir.dir('auth')) === null || _a === void 0 ? void 0 : _a.make();
        this._id = Session.DEFAULT_ID;
        this._name = Session.DEFAULT_ID;
        this._authenticator = new __1.Authenticator(this);
        this._keystore = new __1.KeyStore(this);
    }
    Object.defineProperty(Session.prototype, "props", {
        /** */
        get: function () {
            return this._props;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "keystore", {
        /** */
        get: function () {
            return this._keystore;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "manifest", {
        /** */
        get: function () {
            return this._manifest;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "logger", {
        /** */
        get: function () {
            return this._logger;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "authenticator", {
        /** */
        get: function () {
            return this._authenticator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "authDir", {
        /** */
        get: function () {
            return this._authDir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "state", {
        /** */
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "isLoggedIn", {
        /** */
        get: function () {
            return this.user !== undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "user", {
        /** */
        get: function () {
            return this._user;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "index", {
        /** */
        get: function () {
            return this._index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "store", {
        /** */
        get: function () {
            return this._store;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "system", {
        /** */
        get: function () {
            var _a;
            return (_a = this.manifest) === null || _a === void 0 ? void 0 : _a.data.json();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "isInitialized", {
        /** */
        get: function () {
            return this.state >= __1.SessionState.INITIALIZED;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "isReady", {
        /** */
        get: function () {
            return this.state >= __1.SessionState.READY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "product", {
        /** */
        get: function () {
            return this._product;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "pkg", {
        /** */
        get: function () {
            return this._pkg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "dir", {
        /** */
        get: function () {
            return this._dir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "id", {
        /** */
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "name", {
        /** */
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     * @param type
     */
    Session.prototype.token = function (type) {
        var _a, _b;
        return this.isLoggedIn
            ? (_b = (_a = this.user) === null || _a === void 0 ? void 0 : _a.tokens.find(function (token) { return token.type === type; })) === null || _b === void 0 ? void 0 : _b.value : undefined;
    };
    /** */
    Session.prototype.set = function (key, val) {
        return this.index.sections.system.vault.write(key, val);
    };
    /** */
    Session.prototype.get = function (key) {
        return this.index.sections.system.vault.read(key);
    };
    /**
     * Move the Session into a new {@linkcode SessionState}
     *
     * @param state The new {@linkcode SessionState}
     */
    Session.prototype.changeState = function (state) {
        this._state = state;
    };
    /**
     *
     */
    Session.prototype.authenticate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authenticator.start()];
                    case 1:
                        _a.sent();
                        this._checkAuth();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Make sure the session is ready for action
     */
    Session.prototype.makeReady = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // Nothing for us to do
                        if (this.isReady)
                            return [2 /*return*/];
                        // Initialize if necessary
                        _a = this.isInitialized;
                        if (_a) 
                        // Initialize if necessary
                        return [3 /*break*/, 2];
                        return [4 /*yield*/, this.initialize()];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        // Initialize if necessary
                        _a;
                        // Nothing else for now
                        this.changeState(__1.SessionState.READY);
                        return [2 /*return*/];
                }
            });
        });
    };
    /** @internal */
    Session.prototype._checkAuth = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sessionData;
            var _this = this;
            return __generator(this, function (_a) {
                sessionData = this.authDir.files
                    .map(function (f) { var _a; return (_a = _this.authDir.file(f)) === null || _a === void 0 ? void 0 : _a.load(); })
                    .shift();
                this._user =
                    sessionData !== undefined ? sessionData.passport.user : undefined;
                return [2 /*return*/];
            });
        });
    };
    /**
     *
     * @param type
     */
    Session.prototype.keys = function (type) {
        var _a;
        return ((_a = this.authenticator.providers.get(__1.AccessTokenType.GITHUB)) === null || _a === void 0 ? void 0 : _a.keys) || [];
    };
    /**
     *  Initializes the Session and makes sure the index is ready to go.
     */
    Session.prototype.initialize = function () {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var now, update;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        // No need to re-initialize
                        if (this.isInitialized)
                            return [2 /*return*/];
                        // Initialize the index first of all, if needed
                        return [4 /*yield*/, this.index.initialize()
                            // Get the store ready
                        ];
                    case 1:
                        // Initialize the index first of all, if needed
                        _e.sent();
                        // Get the store ready
                        this._store = new __1.AuthStore({
                            path: (_b = (_a = this.authDir) === null || _a === void 0 ? void 0 : _a.make()) === null || _b === void 0 ? void 0 : _b.path,
                        });
                        // Wait for the authenticator to setup
                        return [4 /*yield*/, this.authenticator.initialize()
                            // Check to see if we're logged in
                        ];
                    case 2:
                        // Wait for the authenticator to setup
                        _e.sent();
                        // Check to see if we're logged in
                        this._checkAuth();
                        now = Date.now();
                        update = {
                            modifiedTimestamp: now,
                            memory: os_1.default.freemem(),
                            uptime: os_1.default.uptime(),
                        };
                        ((_c = this.manifest) === null || _c === void 0 ? void 0 : _c.exists) && this.manifest.load();
                        (_d = this.manifest) === null || _d === void 0 ? void 0 : _d.update(Object.assign({}, update, this.manifest.exists || {
                            createdTimestamp: now,
                            id: shortid_1.default.generate(),
                            platform: {
                                system: os_1.default.platform(),
                                type: os_1.default.type(),
                                release: os_1.default.release(),
                                totalMemory: os_1.default.totalmem(),
                                arch: os_1.default.arch(),
                                eol: os_1.default.EOL,
                                cpus: os_1.default.cpus().length,
                                homeDir: os_1.default.homedir(),
                                hostname: os_1.default.hostname(),
                                env: os_1.default.userInfo(),
                            },
                        }));
                        // This session is ready to go
                        this.changeState(__1.SessionState.INITIALIZED);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     */
    Session.prototype.enableSecurity = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isLoggedIn)
                            return [2 /*return*/];
                        // Prepare the keystore
                        return [4 /*yield*/, this.keystore.initialize()
                            // Wait for the authenticator to setup
                        ];
                    case 1:
                        // Prepare the keystore
                        _a.sent();
                        // Wait for the authenticator to setup
                        return [4 /*yield*/, this.authenticator.setupSecurity()];
                    case 2:
                        // Wait for the authenticator to setup
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     */
    Session.prototype.destroy = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    /**
     * Looks up a {@linkcode Bundle} in the local index.
     *
     * @param id The {@linkcode Bundle} id
     * @param version the {@linkcode Bundle} version
     * @param install whether we should  the {@linkcode Bundle} if not found
     */
    Session.prototype.findBundle = function (id, version, install) {
        if (install === void 0) { install = true; }
        return __awaiter(this, void 0, void 0, function () {
            var args, archive, _a, bundle;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: 
                    // Make sure we're ready
                    return [4 /*yield*/, this.makeReady()];
                    case 1:
                        // Make sure we're ready
                        _b.sent();
                        if (!this.index.sections.bundles || !this.index.sections.bundles.exists) {
                            // Looks like something's missing here, we need the bundles section
                            return [2 /*return*/, undefined];
                        }
                        args = Object.assign({}, { id: id }, version && { version: version });
                        if (!install) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.index.sections.bundles.installArchive(args)];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.index.sections.bundles.findArchive(args)];
                    case 4:
                        _a = _b.sent();
                        _b.label = 5;
                    case 5:
                        archive = _a;
                        if (!archive) {
                            // Doesn't look like it
                            return [2 /*return*/, undefined];
                        }
                        bundle = new __1.Bundle(archive);
                        // One more thing, let's load this puppy
                        return [2 /*return*/, bundle.load()];
                }
            });
        });
    };
    /** @internal */
    Session.prototype.parseArtifact = function (id, kind, install) {
        if (install === void 0) { install = true; }
        // Defaults
        var bundleVersion = undefined;
        var bundleId = Session.DEFAULT_BUNDLES[0];
        var artifactName = id;
        // Look at the all the sections
        var info = id.split('/');
        // The artifact name is simple
        artifactName = info.pop();
        // Parse the bundle id
        bundleId = info.shift();
        // Append if it's scoped
        bundleId =
            bundleId.charAt(0) === '@' ? bundleId + "/" + info.shift() : bundleId;
        // Ready for the version, if any
        bundleVersion = info && info.length > 0 ? info.shift() : bundleVersion;
        return { bundleId: bundleId, bundleVersion: bundleVersion, artifactName: artifactName };
    };
    /**
       * Looks up an artifact in the local index.
  
       * @param id
       * @param kind
       */
    Session.prototype.findArtifact = function (id, kind, install) {
        if (install === void 0) { install = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, bundleId, bundleVersion, artifactName, bundle;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: 
                    // Make sure we're ready
                    return [4 /*yield*/, this.makeReady()
                        // Parse the artifact
                    ];
                    case 1:
                        // Make sure we're ready
                        _b.sent();
                        _a = this.parseArtifact(id, kind, install), bundleId = _a.bundleId, bundleVersion = _a.bundleVersion, artifactName = _a.artifactName;
                        return [4 /*yield*/, this.findBundle(bundleId, bundleVersion, install)
                            // Too bad the bundle does not exist
                        ];
                    case 2:
                        bundle = _b.sent();
                        // Too bad the bundle does not exist
                        if (!bundle || !bundle.exists)
                            return [2 /*return*/, undefined
                                // Load the artifact from the bundle
                            ];
                        // Load the artifact from the bundle
                        return [2 /*return*/, bundle.loadArtifact(artifactName, kind)];
                }
            });
        });
    };
    /**
     *
     * @param id
     */
    Session.prototype.findTemplate = function (id, install) {
        if (install === void 0) { install = true; }
        return __awaiter(this, void 0, void 0, function () {
            var tpl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findArtifact(id, __1.ArtifactsKind.TEMPLATES, install)];
                    case 1:
                        tpl = _a.sent();
                        return [2 /*return*/, tpl];
                }
            });
        });
    };
    /**
     *
     * @param productId
     */
    Session.prototype.resolveProduct = function (productId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Make sure we're ready
                    return [4 /*yield*/, this.makeReady()
                        // Let's build it up
                    ];
                    case 1:
                        // Make sure we're ready
                        _a.sent();
                        // Let's build it up
                        this._product = new __1.Product(this, productId);
                        // Send it back if found
                        return [2 /*return*/, this.product];
                }
            });
        });
    };
    /** Start with these sections - always */
    Session.DEFAULT_SECTIONS = [
        'bundles',
        'secrets',
        'settings',
        'stacks',
        'system',
        'products',
        'keystore',
        'packers',
        'events',
    ];
    /** Default lifetime for a typical session */
    Session.DEFAULT_EXPIRATION = 24 * 60 * 60 * 1000;
    /** Use these as mandatory bundles */
    Session.DEFAULT_BUNDLES = ['traista'];
    /** The id to use for auth */
    Session.DEFAULT_ID = 'io.carmel.session';
    return Session;
}());
exports.Session = Session;
//# sourceMappingURL=Session.js.map