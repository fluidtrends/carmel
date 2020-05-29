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
var _1 = require(".");
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
        this._props = Object.assign({}, props, { cwd: process.cwd() });
        this._logger = new _1.Logger(this.props);
        this._index = new dodi_1.Index(Object.assign({}, { sections: _1.Globals.DEFAULT_SECTIONS }, this.props, { name: 'carmel' }));
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
    Object.defineProperty(Session.prototype, "index", {
        /** */
        get: function () {
            return this._index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "workspace", {
        /** */
        get: function () {
            return this._workspace;
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
     *  Initializes the Session and makes sure the index is ready to go.
     */
    Session.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // Initialize the index first of all, if needed
                        _a = this.index.exists;
                        if (_a) 
                        // Initialize the index first of all, if needed
                        return [3 /*break*/, 2];
                        return [4 /*yield*/, this.index.initialize()
                            // // Make sure the local common dependencies are available
                            // this.command && this.command.requiresFreshIndex && await this.updateIndex()
                            // if (this.command?.requiresWorkspace) { 
                            //     // The command needs a workspace so let's look for one
                            //     await this.resolveWorkspace()
                            //     if (!this.workspace || !this.workspace.exists) {
                            //         // If we need a workspace but we can't get one, we're in trouble
                            //         throw Errors.WorkspaceIsMissing()
                            //     }
                            //     // So we've got ourselves a workspace, yay - let's load it up
                            //     await this.workspace.initialize()
                            // }
                            // Then let's make sure the workspace is also initialized
                            // return this.hasWorkspace && this.workspace!.initialize()
                            // this.logger.start(this.command && this.command.title)
                        ];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        // Initialize the index first of all, if needed
                        _a;
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
     * Looks for a {@linkcode Workspace} in the current working directory
     */
    Session.prototype.resolveWorkspace = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._workspace = new _1.Workspace();
                return [2 /*return*/, this.workspace];
            });
        });
    };
    /**
     * Looks up a {@linkcode Bundle} in the index
     *
     * @param id The {@linkcode Bundle} id
     * @param version the {@linkcode Bundle} version
     */
    Session.prototype.findBundle = function (id, version) {
        return __awaiter(this, void 0, void 0, function () {
            var archive, bundle;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.index.sections.bundles ||
                            !this.index.sections.bundles.exists) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.index.sections.bundles.findArchive({ id: id, version: version })];
                    case 1:
                        archive = _a.sent();
                        if (!archive) {
                            return [2 /*return*/];
                        }
                        bundle = new _1.Bundle(archive);
                        return [2 /*return*/, bundle];
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
    return Session;
}());
exports.Session = Session;
//# sourceMappingURL=Session.js.map