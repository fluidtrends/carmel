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
exports.Engine = void 0;
var __1 = require("..");
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var socket_io_1 = __importDefault(require("socket.io"));
var get_port_1 = __importDefault(require("get-port"));
/**
 * Solely responsible for running Carmel Commands.
 * It acts as the main entry point to the Carmel System.
 * Usually gets invoked by a Carmel Client, such as the Carmel CLI.
 * Only one instance available at all times.
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Engine.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Engine.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Engine.ts/stats | Code Stats}
 *
 * @category Core
 */
var Engine = /** @class */ (function () {
    /** @internal */
    function Engine() {
        this._state = __1.EngineState.STOPPED;
    }
    Object.defineProperty(Engine, "instance", {
        /**
         * Makes sure that the Engine has a single instance
         */
        get: function () {
            Engine._instance = Engine._instance || new Engine();
            return Engine._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Move the Engine into a new {@linkcode EngineState}
     *
     * @param state The new {@linkcode EngineState}
     */
    Engine.prototype.changeState = function (state) {
        this._state = state;
    };
    Object.defineProperty(Engine.prototype, "server", {
        /**
         *
         */
        get: function () {
            return this._server;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Engine.prototype, "state", {
        /**
         * Retrieves the current {@linkcode EngineState} of the Engine.
         */
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     * @param command
     * @param args
     */
    Engine.prototype.startServer = function (command, args) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var props;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        props = {};
                        args === null || args === void 0 ? void 0 : args.map(function (arg) { return (props[arg.name] = arg.value); });
                        process.env.CARMEL_COMMAND = JSON.stringify(props);
                        this._server = new __1.Server(command, args);
                        return [4 /*yield*/, ((_a = this.server) === null || _a === void 0 ? void 0 : _a.start())];
                    case 1:
                        _b.sent();
                        process.exit(0);
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(Engine.prototype, "session", {
        /**
         *
         */
        get: function () {
            return this._session;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Engine.prototype, "hasSession", {
        /**
         * Checks whether the Engine has a valid {@linkcode Session}
         */
        get: function () {
            return this._session !== undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Engine.prototype, "isStarted", {
        /**
         * Checks whether the Engine has been started or not.
         */
        get: function () {
            return this._state >= __1.EngineState.STARTED && this.hasSession;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Create a brand new  {@linkcode Session}
     *
     * @param props The {@linkcode SessionProps} with which to create a new {@linkcode Session}
     */
    Engine.prototype.newSession = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Make sure we do have props, even if only defaults
                        props = Object.assign({}, {
                            cwd: process.cwd(),
                            name: 'carmel',
                            dir: process.env.CARMEL_USER_HOME,
                        }, props);
                        // This engine is not started yet, let's begin by assigning a new Session
                        this._session = new __1.Session(props);
                        // Good, let's also make sure the Session is initialized
                        return [4 /*yield*/, this._session.initialize()];
                    case 1:
                        // Good, let's also make sure the Session is initialized
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Starts a new Engine {@linkcode Session}.
     *
     * @param props The {@linkcode SessionProps} with which to initialize a new {@linkcode Session}
     */
    Engine.prototype.start = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isStarted) {
                            // No need to start an Engine that has already been started
                            return [2 /*return*/, this._session];
                        }
                        // Let's let the world know we're starting up
                        this.changeState(__1.EngineState.STARTING);
                        // This engine is not started yet, let's begin by assigning a new Session
                        return [4 /*yield*/, this.newSession(props)
                            // We're now started and ready to go
                        ];
                    case 1:
                        // This engine is not started yet, let's begin by assigning a new Session
                        _a.sent();
                        // We're now started and ready to go
                        this.changeState(__1.EngineState.READY);
                        // Let's allow callers to access the Session
                        return [2 /*return*/, this._session];
                }
            });
        });
    };
    /**
     * Ends the current Engine {@linkcode Session} and clean up if necessary.
     */
    Engine.prototype.stop = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // Let's put ourselves in the right state
                        this.changeState(__1.EngineState.STOPPED);
                        // Ready to go to sleep now
                        return [4 /*yield*/, ((_a = this._session) === null || _a === void 0 ? void 0 : _a.destroy())];
                    case 1:
                        // Ready to go to sleep now
                        _b.sent();
                        delete this._session;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Executes a single {@linkcode ICommand}.
     *
     * @param command The {@linkcode ICommand} to execute
     * @param args The {@linkcode CommandArgs} to pass to this command
     */
    Engine.prototype.exec = function (command, args) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.session) {
                            // Don't do anything without a session
                            throw __1.Errors.SessionIsMissing();
                        }
                        if (!command) {
                            // Likewise, don't do anything without a command
                            throw __1.Errors.CommandIsMissing();
                        }
                        if (!this.isStarted) {
                            // Don't barf but silently ignore execution until we're ready
                            return [2 /*return*/];
                        }
                        // We're about to run it
                        Engine.instance.changeState(__1.EngineState.RUNNING);
                        // Time to let the command do its thing
                        return [4 /*yield*/, (command === null || command === void 0 ? void 0 : command.exec())];
                    case 1:
                        // Time to let the command do its thing
                        _a.sent();
                        // We're done running
                        Engine.instance.changeState(__1.EngineState.READY);
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(Engine, "session", {
        /**
         *
         */
        get: function () {
            return Engine.instance.session;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Runs a {@linkcode Command} in a {@linkcode Session}.
     *
     * @param command The {@linkcode Command} to run
     * @param args The {@linkcode CommandArgs} to pass to this command
     */
    Engine.run = function (command, args) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(command === null || command === void 0 ? void 0 : command.isLongRunning)) return [3 /*break*/, 6];
                        // First, start the engine if necessary
                        return [4 /*yield*/, Engine.instance.start()
                            // Prepare the command
                        ];
                    case 1:
                        // First, start the engine if necessary
                        _b.sent();
                        // Prepare the command
                        return [4 /*yield*/, (command === null || command === void 0 ? void 0 : command.initialize(this.session, args))];
                    case 2:
                        // Prepare the command
                        _b.sent();
                        // Make sure the product has a packer
                        _a = command !== undefined &&
                            (command === null || command === void 0 ? void 0 : command.product) !== undefined;
                        if (!_a) 
                        // Make sure the product has a packer
                        return [3 /*break*/, 4];
                        return [4 /*yield*/, command.product.resolvePacker(command.target, true)];
                    case 3:
                        _a = (_b.sent());
                        _b.label = 4;
                    case 4:
                        // Make sure the product has a packer
                        _a;
                        // Start the server for long running commands
                        return [4 /*yield*/, Engine.instance.startServer(command, args)];
                    case 5:
                        // Start the server for long running commands
                        _b.sent();
                        return [2 /*return*/];
                    case 6: 
                    // Let's let this command run
                    return [4 /*yield*/, Engine.start(command, args)
                        // If we only need to run this once, then we're completely finished
                    ];
                    case 7:
                        // Let's let this command run
                        _b.sent();
                        // If we only need to run this once, then we're completely finished
                        return [4 /*yield*/, Engine.stop()];
                    case 8:
                        // If we only need to run this once, then we're completely finished
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @param command
     * @param args
     */
    Engine.start = function (command, args) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var port, app, serverInstance, io;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: 
                    // First, start the engine if necessary
                    return [4 /*yield*/, Engine.instance.start()
                        // Prepare the command
                    ];
                    case 1:
                        // First, start the engine if necessary
                        _c.sent();
                        // Prepare the command
                        return [4 /*yield*/, (command === null || command === void 0 ? void 0 : command.initialize(this.session, args))];
                    case 2:
                        // Prepare the command
                        _c.sent();
                        if (!((command === null || command === void 0 ? void 0 : command.requiresAuth) && !((_a = this.session) === null || _a === void 0 ? void 0 : _a.isLoggedIn))) return [3 /*break*/, 4];
                        // Make sure we authenticate first if we need to
                        return [4 /*yield*/, ((_b = this.session) === null || _b === void 0 ? void 0 : _b.authenticate())];
                    case 3:
                        // Make sure we authenticate first if we need to
                        _c.sent();
                        _c.label = 4;
                    case 4:
                        if (!(command === null || command === void 0 ? void 0 : command.isLongRunning)) return [3 /*break*/, 6];
                        // Let's let this command run
                        return [4 /*yield*/, Engine.instance.exec(command, args)];
                    case 5:
                        // Let's let this command run
                        _c.sent();
                        return [2 /*return*/];
                    case 6: return [4 /*yield*/, get_port_1.default({ port: 3000 })];
                    case 7:
                        port = _c.sent();
                        app = express_1.default();
                        app.set('port', port);
                        serverInstance = new http_1.default.Server(app);
                        io = socket_io_1.default(serverInstance);
                        app.get('/', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                res.send('ok');
                                return [2 /*return*/];
                            });
                        }); });
                        io.on('connection', function (socket) {
                            console.log('A user has connected to the socket!');
                            socket.on('disconnect', function () {
                                return console.log('A user has disconnected from the socket!');
                            });
                            socket.on('request', function (message) {
                                console.log('>', message);
                                socket.emit('response', { hello: 'world', message: message });
                            });
                        });
                        serverInstance.listen(port, function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                // Listen for events
                                console.log('server instance running', port);
                                return [2 /*return*/];
                            });
                        }); });
                        // Let's let this command run
                        return [4 /*yield*/, Engine.instance.exec(command, args)];
                    case 8:
                        // Let's let this command run
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     */
    Engine.stop = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // First, start the engine if necessary
                    return [4 /*yield*/, Engine.instance.stop()];
                    case 1:
                        // First, start the engine if necessary
                        _a.sent();
                        process.exit(0);
                        return [2 /*return*/];
                }
            });
        });
    };
    return Engine;
}());
exports.Engine = Engine;
//# sourceMappingURL=Engine.js.map