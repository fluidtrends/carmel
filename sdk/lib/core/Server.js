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
exports.Server = void 0;
var pm2_1 = __importDefault(require("pm2"));
var path_1 = __importDefault(require("path"));
var __1 = require("..");
/**
 *
 */
var Server = /** @class */ (function () {
    /**
     *
     * @param command
     */
    function Server(command, args) {
        var _a, _b, _c, _d;
        this._command = command;
        this._args = args;
        this._state = __1.ServerState.UNINITIALIZED;
        this._id = "" + command.id + (command.type === __1.CommandType.PRODUCT ? '/' + command.product.id : '');
        this._dir = (_d = (_c = (_b = (_a = command
            .session.dir) === null || _a === void 0 ? void 0 : _a.dir('servers')) === null || _b === void 0 ? void 0 : _b.make()) === null || _c === void 0 ? void 0 : _c.dir(this.id)) === null || _d === void 0 ? void 0 : _d.make();
    }
    /** @internal */
    Server.prototype.arg = function (name) {
        var _a;
        return (_a = this.args) === null || _a === void 0 ? void 0 : _a.find(function (a) { return a.name === name; });
    };
    Object.defineProperty(Server.prototype, "scriptFile", {
        /**
         *
         */
        get: function () {
            return this._scriptFile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Server.prototype, "pidFile", {
        /**
         *
         */
        get: function () {
            return this._pidFile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Server.prototype, "outputFile", {
        /**
         *
         */
        get: function () {
            return this._outputFile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Server.prototype, "args", {
        /**
         *
         */
        get: function () {
            return this._args;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Server.prototype, "command", {
        /**
         *
         */
        get: function () {
            return this._command;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Server.prototype, "errorFile", {
        /**
         *
         */
        get: function () {
            return this._errorFile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Server.prototype, "dir", {
        /**
         *
         */
        get: function () {
            return this._dir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Server.prototype, "state", {
        /**
         *
         */
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Move the Server into a new {@linkcode ServerState}
     *
     * @param state The new {@linkcode ServerState}
     */
    Server.prototype.changeState = function (state) {
        this._state = state;
    };
    Object.defineProperty(Server.prototype, "id", {
        /**
         *
         */
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     */
    Server.prototype.initialize = function () {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_d) {
                this.changeState(__1.ServerState.INITIALIZING);
                // Look up the server contents
                this._outputFile = (_a = this.dir) === null || _a === void 0 ? void 0 : _a.file('output.log');
                this._errorFile = (_b = this.dir) === null || _b === void 0 ? void 0 : _b.file('error.log');
                this._pidFile = (_c = this.dir) === null || _c === void 0 ? void 0 : _c.file('pid');
                this._scriptFile = new __1.File(path_1.default.resolve(path_1.default.dirname(path_1.default.dirname(__dirname)), 'lib', 'server', 'main.js'));
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        pm2_1.default.connect(function (err) {
                            if (err) {
                                _this.changeState(__1.ServerState.STOPPED);
                                reject(err);
                                return;
                            }
                            pm2_1.default.describe(_this.id, function (err, instance) {
                                if (err) {
                                    _this.changeState(__1.ServerState.STOPPED);
                                    pm2_1.default.disconnect();
                                    reject(err);
                                    return;
                                }
                                if (!instance || instance.length === 0) {
                                    _this.changeState(__1.ServerState.INITIALIZED);
                                    resolve();
                                    return;
                                }
                                _this.changeState(__1.ServerState.RUNNING);
                                resolve();
                            });
                        });
                    })];
            });
        });
    };
    Object.defineProperty(Server.prototype, "isInitialized", {
        /**
         *
         */
        get: function () {
            return this.state >= __1.ServerState.INITIALIZED;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Server.prototype, "isStarted", {
        /**
         *
         */
        get: function () {
            return this.state >= __1.ServerState.STARTED;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Server.prototype, "isRunning", {
        /**
         *
         */
        get: function () {
            return this.state >= __1.ServerState.RUNNING;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Server.prototype, "forceStart", {
        /**
         *
         */
        get: function () {
            var force = this.arg('force');
            return force !== undefined && force.value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     */
    Server.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // Make sure we're ready to start
                        _a = this.isInitialized;
                        if (_a) 
                        // Make sure we're ready to start
                        return [3 /*break*/, 2];
                        return [4 /*yield*/, this.initialize()];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        // Make sure we're ready to start
                        _a;
                        // Only start once
                        if (this.isStarted && !this.arg('force'))
                            return [2 /*return*/, { alreadyStarted: true }
                                // Ok, let's do this
                            ];
                        // Ok, let's do this
                        this.changeState(__1.ServerState.STARTING);
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                pm2_1.default.connect(function (err) {
                                    var _a;
                                    if (err) {
                                        _this.changeState(__1.ServerState.STOPPED);
                                        reject(err);
                                        return;
                                    }
                                    pm2_1.default.start({
                                        cwd: (_this.command.type === __1.CommandType.PRODUCT
                                            ? _this.command.product.cacheDir
                                            : _this.command.session.dir).path,
                                        pid: _this.pidFile.path,
                                        output: _this.outputFile.path,
                                        error: _this.errorFile.path,
                                        name: _this.id,
                                        script: (_a = _this.scriptFile) === null || _a === void 0 ? void 0 : _a.path,
                                    }, function (err, apps) {
                                        if (err) {
                                            _this.changeState(__1.ServerState.STOPPED);
                                            pm2_1.default.disconnect();
                                            reject(err);
                                            return;
                                        }
                                        _this.changeState(__1.ServerState.RUNNING);
                                        resolve({ started: true });
                                    });
                                });
                            })];
                }
            });
        });
    };
    /**
     *
     */
    Server.prototype.stop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // Make sure we're ready to start
                        _a = this.isInitialized;
                        if (_a) 
                        // Make sure we're ready to start
                        return [3 /*break*/, 2];
                        return [4 /*yield*/, this.initialize()];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        // Make sure we're ready to start
                        _a;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                pm2_1.default.connect(function (err) {
                                    if (err) {
                                        _this.changeState(__1.ServerState.STOPPED);
                                        reject(err);
                                        return;
                                    }
                                    pm2_1.default.stop(_this.id, function (err) {
                                        if (err) {
                                            pm2_1.default.disconnect();
                                            reject(err);
                                            return;
                                        }
                                        _this.changeState(__1.ServerState.STOPPED);
                                        resolve();
                                    });
                                });
                            })];
                }
            });
        });
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=Server.js.map