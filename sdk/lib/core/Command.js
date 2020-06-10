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
exports.Command = void 0;
var __1 = require("..");
var Defaults = function (cls) { return ({
    id: cls.constructor.name.toLowerCase(),
    target: __1.Target.WEB,
    type: __1.CommandType.PRODUCT
}); };
/**
 * The base class representing a single unit of execution.
 * Every Carmel Command extends this class and tweaks the defaults as needed.
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Command.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Command.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Command.ts/stats | Code Stats}
 *
 * @category Core
 */
var Command = /** @class */ (function () {
    /**
     * Construct a new command from the given {@linkcode CommandProps}.
     *
     * @param props The {@linkcode CommandsProps} required for building this command
     */
    function Command(props) {
        this._props = Object.assign({}, Defaults(this), props);
    }
    Object.defineProperty(Command.prototype, "props", {
        /**
         *
         */
        get: function () {
            return this._props;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Command.prototype, "target", {
        /**
         *
         */
        get: function () {
            return this.props.target;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Command.prototype, "id", {
        /**
         *
         */
        get: function () {
            return this.props.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Command.prototype, "type", {
        /**
         *
         */
        get: function () {
            return this.props.type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Command.prototype, "requiresArgs", {
        /**
         *
         */
        get: function () {
            return this.props.requiredArgs !== undefined && this.props.requiredArgs.length > 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Command.prototype, "product", {
        /**
         *
         */
        get: function () {
            return this._product;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Command.prototype, "session", {
        /**
         *
         */
        get: function () {
            return this._session;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Command.prototype, "args", {
        /**
         *
         */
        get: function () {
            return this._args;
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     * @param name
     */
    Command.prototype.arg = function (name) {
        var _a, _b;
        return (_b = (_a = this.args) === null || _a === void 0 ? void 0 : _a.find(function (a) { return a.name === name; })) === null || _b === void 0 ? void 0 : _b.value;
    };
    /** @internal */
    Command.prototype._validateArgs = function (args) {
        if (!this.requiresArgs) {
            // If we don't expect any args, let's get outta here
            return;
        }
        if (!args || args.length === 0) {
            // Looks like no arguments were passed at all, when some were expected
            throw __1.Errors.ArgumentIsMissing(this.props.requiredArgs[0]);
        }
        var missingArgs = this.props.requiredArgs.filter(function (arg) { return !args.find(function (a) { return a.name === arg; }); });
        if (missingArgs && missingArgs.length > 0) {
            // Look for any missing args
            throw __1.Errors.ArgumentIsMissing(missingArgs[0]);
        }
    };
    /** @internal */
    Command.prototype._validateProductTypeRequirements = function () {
        if (!this.product || !this.product.exists) {
            // Ensure the product exists 
            throw __1.Errors.CommandCannotExecute(this.id, __1.Strings.ProductIsMissingString());
        }
        if (!this.product.isReady) {
            // Ensure the product is ready  
            throw __1.Errors.CommandCannotExecute(this.id, __1.Strings.ProductIsNotReadyString());
        }
    };
    /** @internal */
    Command.prototype._validateTypeRequirements = function () {
        switch (this.type) {
            case __1.CommandType.PRODUCT:
                this._validateProductTypeRequirements();
                break;
        }
    };
    /** @internal */
    Command.prototype._resolve = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _c = this;
                        return [4 /*yield*/, ((_a = this.session) === null || _a === void 0 ? void 0 : _a.resolveProduct(this.target))];
                    case 1:
                        _c._product = _e.sent();
                        _d = this.type;
                        switch (_d) {
                            case __1.CommandType.PRODUCT: return [3 /*break*/, 2];
                        }
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, ((_b = this._product) === null || _b === void 0 ? void 0 : _b.load())];
                    case 3:
                        _e.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Run a command in the given session, this usually gets invoked by
     * the {@linkcode Engine}
     *
     * @param session The {@linkcode Session} in which to run this command
     * @param args The {@linkcode CommandArg} args used to execute this command, if any
     */
    Command.prototype.run = function (session, args) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Keep track of the arguments
                        this._args = args;
                        // Keep track of the session too
                        this._session = session;
                        // Look for a product, if any
                        return [4 /*yield*/, this._resolve()
                            // First, make sure the passed args (if any) are valid
                        ];
                    case 1:
                        // Look for a product, if any
                        _a.sent();
                        // First, make sure the passed args (if any) are valid
                        this._validateArgs(args);
                        // Check that all requirements for this command type are met
                        this._validateTypeRequirements();
                        return [4 /*yield*/, this.exec()
                            // Send back the result, if any
                        ];
                    case 2:
                        result = _a.sent();
                        // Send back the result, if any
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return Command;
}());
exports.Command = Command;
//# sourceMappingURL=Command.js.map