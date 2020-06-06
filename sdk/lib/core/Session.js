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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
var dodi_1 = require("dodi");
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
     * Builds a new Session with the given {@linkcode SessionProps} properties
     *
     * @param props The {@linkcode SessionProps} properties
     */
    function Session(props) {
        this._props = props;
        this._logger = new __1.Logger(this.props);
        this._index = new dodi_1.Index(Object.assign({}, { sections: Session.DEFAULT_SECTIONS.map(function (id) { return ({ id: id }); }) }, this.props, { name: 'carmel' }));
        this._state = __1.SessionState.UNINITIALIZED;
    }
    Object.defineProperty(Session.prototype, "props", {
        /** */
        get: function () {
            return this._props;
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
    Object.defineProperty(Session.prototype, "state", {
        /** */
        get: function () {
            return this._state;
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
                        return [4 /*yield*/, this.initialize()
                            // Nothing else for now
                        ];
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
    /**
     *  Initializes the Session and makes sure the index is ready to go.
     */
    Session.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // No need to re-initialize
                        if (this.isInitialized)
                            return [2 /*return*/];
                        // Initialize the index first of all, if needed
                        return [4 /*yield*/, this.index.initialize()
                            // This session is ready to go
                        ];
                    case 1:
                        // Initialize the index first of all, if needed
                        _a.sent();
                        // This session is ready to go
                        this.changeState(__1.SessionState.INITIALIZED);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     */
    Session.prototype.destroy = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
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
            var args, archive, _a, _b, bundle;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: 
                    // Make sure we're ready
                    return [4 /*yield*/, this.makeReady()];
                    case 1:
                        // Make sure we're ready
                        _c.sent();
                        if (!this.index.sections.bundles || !this.index.sections.bundles.exists) {
                            // Looks like something's missing here, we need the bundles section
                            return [2 /*return*/, undefined];
                        }
                        args = Object.assign({}, { id: id }, version && { version: version });
                        if (!install) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.index.sections.bundles.installArchive(args)];
                    case 2:
                        _a = _c.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.index.sections.bundles.findArchive(args)];
                    case 4:
                        _a = _c.sent();
                        _c.label = 5;
                    case 5:
                        archive = _a;
                        if (!archive) {
                            // Doesn't look like it
                            return [2 /*return*/, undefined];
                        }
                        // Install the deps if needed
                        _b = install;
                        if (!_b) 
                        // Install the deps if needed
                        return [3 /*break*/, 7];
                        return [4 /*yield*/, archive.installDependencies()
                            // Good stuff, found the archive, ok let's build ourselves a bundle
                        ];
                    case 6:
                        _b = (_c.sent());
                        _c.label = 7;
                    case 7:
                        // Install the deps if needed
                        _b;
                        bundle = new __1.Bundle(archive);
                        // One more thing, let's load this puppy
                        return [2 /*return*/, bundle.load()];
                }
            });
        });
    };
    /**
     * Looks up an artifact in the local index.

     * @param id
     * @param kind
     */
    Session.prototype.findArtifact = function (id, kind, install) {
        var _a;
        if (install === void 0) { install = true; }
        return __awaiter(this, void 0, void 0, function () {
            var bundleVersion, bundleId, artifactName, info, bundle;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: 
                    // Make sure we're ready
                    return [4 /*yield*/, this.makeReady()
                        // Defaults
                    ];
                    case 1:
                        // Make sure we're ready
                        _b.sent();
                        bundleVersion = undefined;
                        bundleId = Session.DEFAULT_BUNDLES[0];
                        artifactName = id;
                        info = (_a = id.match(/(.*)\/(.*)\/(.*)$/)) === null || _a === void 0 ? void 0 : _a.slice(1, 4);
                        if (info && info.length === 3) {
                            // This is is a fully resolved artifact id
                            bundleId = info[0];
                            bundleVersion = info[1];
                            artifactName = info[2];
                        }
                        else if (info && info.length === 2) {
                            // This requires the latest version (no version specified)
                            bundleId = info[0];
                            artifactName = info[1];
                        }
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
    Session.prototype.findStack = function (id, install) {
        if (install === void 0) { install = true; }
        return __awaiter(this, void 0, void 0, function () {
            var stack;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findArtifact(id, __1.ArtifactsKind.STACKS, install)];
                    case 1:
                        stack = _a.sent();
                        return [2 /*return*/, stack];
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
    Session.prototype.resolveProduct = function (target) {
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
                        this._product = new __1.Product(this);
                        // Send it back if found
                        return [2 /*return*/, this.product];
                }
            });
        });
    };
    Session.prototype.installSystemBundle = function (bundleId) {
        return __awaiter(this, void 0, void 0, function () {
            var archive;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.index.installArchive({ section: "system", id: "papanache", silent: true })];
                    case 1:
                        archive = _a.sent();
                        this.set("papanacheVersion", archive.version);
                        return [4 /*yield*/, archive.installDependencies()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Session.prototype.updateIndex = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // this.logger.info('Making sure your development environment is up to date ...')
                return [2 /*return*/, this.index.installArchive({ id: "papanache", silent: true })
                        .then(function (archive) {
                        _this.set("papanacheVersion", archive.version);
                        return archive.installDependencies();
                    })
                        .then(function () { return _this.index.installArchive({ id: "@fluidtrends/bananas", silent: true }); })
                        .then(function (archive) {
                        _this.set("bananasVersion", archive.version);
                        return archive.installDependencies();
                    })
                        .then(function () {
                        // this.logger.info('Your development environment is all up to date')
                    })];
            });
        });
    };
    /** Start with these sections - always */
    Session.DEFAULT_SECTIONS = ["bundles", "stacks", "products", "packers", "events"];
    /** Use these as mandatory bundles */
    Session.DEFAULT_BUNDLES = ["@fluidtrends/bananas"];
    return Session;
}());
exports.Session = Session;
//     findCredentials(session) {
//         const profile = this.args.profile || 'default'
//         const v = session.index.sections.safe.vault
//         if (v.isLocked) {
//           return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the safe is locked')))
//         }
//         session.logger.info(`Looking up AWS credentials [${profile}] ...`)
//         const credentials = Object.assign({}, { region: "us-east-1" }, v.read(`aws.${profile}`))
//         if (!credentials || !credentials.key || !credentials.secret) {
//           return Promise.reject(new Error('No credentials found'))
//         }
//         process.env.AWS_SDK_LOAD_CONFIG = null
//         process.env.AWS_ACCESS_KEY_ID = credentials.key
//         process.env.AWS_SECRET_ACCESS_KEY = credentials.secret
//         return Promise.resolve(credentials)
//     }
//     prepareCloud(session) {
//         return this.findCredentials(session).then((credentials) => {
//             this._cloud = new Cloud(Object.assign({}, credentials, { env: this.env }))
//             return this.cloud
//         })
//     }
//# sourceMappingURL=Session.js.map