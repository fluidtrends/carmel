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
exports.Engine = void 0;
var __1 = require("..");
/**
 * Solely reponsible for running Carmel Commands.
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
                        props = props || {
                            cwd: process.cwd(),
                            name: "carmel",
                            dir: process.env.CARMEL_HOME
                        };
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
                // Let's put ourselves in the right state
                this.changeState(__1.EngineState.STOPPED);
                // Ready to go to sleep now
                return [2 /*return*/, (_a = this._session) === null || _a === void 0 ? void 0 : _a.destroy()];
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
                        if (!this._session) {
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
                        return [4 /*yield*/, (command === null || command === void 0 ? void 0 : command.run(this._session, args))];
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
     * @param onlyOnce Whether we want to allow the Engine to process further commands or not
     */
    Engine.run = function (command, args, onlyOnce) {
        if (onlyOnce === void 0) { onlyOnce = true; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // First, start the engine if necessary
                    return [4 /*yield*/, Engine.instance.start()
                        // Let's let this command run
                    ];
                    case 1:
                        // First, start the engine if necessary
                        _a.sent();
                        // Let's let this command run
                        return [4 /*yield*/, Engine.instance.exec(command, args)
                            // If we only need to run this once, then we're completely finished
                        ];
                    case 2:
                        // Let's let this command run
                        _a.sent();
                        // If we only need to run this once, then we're completely finished
                        onlyOnce && Engine.instance.stop();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Engine;
}());
exports.Engine = Engine;
//# sourceMappingURL=Engine.js.map