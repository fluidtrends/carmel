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
var _1 = require(".");
var Command = /** @class */ (function () {
    function Command(args) {
        this._args = args;
        this._props = _1.Config.commands[this.id] || {};
    }
    Object.defineProperty(Command.prototype, "id", {
        get: function () {
            return this.constructor.name.toLowerCase();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Command.prototype, "props", {
        get: function () {
            return this._props;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Command.prototype, "script", {
        get: function () {
            return this._script;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Command.prototype, "session", {
        get: function () {
            return this._session;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Command.prototype, "args", {
        get: function () {
            return this._args;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Command.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Command.prototype, "env", {
        get: function () {
            return this.args.env || "dev";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Command.prototype, "cwd", {
        get: function () {
            return process.cwd();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Command.prototype, "requiredArgs", {
        //     get target () { 
        //         this._target 
        //     }
        //     get context() {
        //         return this.target ? this._context[this.target] : this._context
        //     }
        get: function () { return (this.props.requiredArgs || []); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Command.prototype, "title", {
        get: function () { return this.props.title || 'command'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Command.prototype, "requiresContext", {
        get: function () { return this.props.requiresContext; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Command.prototype, "requiresFreshSession", {
        get: function () { return this.props.requiresFreshSession; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Command.prototype, "type", {
        get: function () { return this.props.type || 'workspace'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Command.prototype, "missingRequiredArgs", {
        //     get cloud () { return this._cloud }
        get: function () {
            var _this = this;
            return this.requiredArgs.filter(function (arg) {
                return (!_this.args || !_this.args[arg]);
            });
        },
        enumerable: false,
        configurable: true
    });
    Command.prototype.exec = function (session) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.initialize(session)];
            });
        });
    };
    // loadScript(paths = [this.context.script]) {   
    //     return new Promise((resolve, reject) => {
    //       try {
    //         // Let's find the script as specified by the context
    //         const starter = require(path.resolve(...paths))
    //         resolve({ exec: starter, props: { name: "app" }})
    //       } catch (e) {
    //         reject(Errors.CommandCannotExecute(this.id, 'the script could not be loaded'))
    //       }
    //     })
    // }
    // findDefaultArchive() {
    //     // const version = session?.get("papanacheVersion")
    //     // return session.index.sections.archives.findArchive({ id: "papanache", version })
    // }
    // loadDefaultScript(type: string) {
    //     // return this.findDefaultArchive()
    //     //            .then((archive) => this.loadScript([archive.path, 'src', this.target, 'commands', `${type}.js`]))
    // }
    // commandScript(type: string) {
    //     // return (this.context.script === _.DEFAULT_SCRIPT) ? this.loadDefaultScript(session, type) : this.loadScript()
    // }
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
    Command.prototype.initialize = function (session) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._session = session;
                if (!this.session) {
                    return [2 /*return*/, Promise.reject(_1.Errors.CommandCannotExecute(this.id, 'the session is missing'))];
                }
                console.log(this.session.workspace);
                if (!this.session.workspace.exists) {
                    return [2 /*return*/, Promise.reject(_1.Errors.CommandCannotExecute(this.id, 'the workspace is invalid'))];
                }
                // // Look up the workspace context, if any
                // this._context = this.session.workspace!.context?[this.id]
                // if (!this.context && this.requiresContext) {
                //     // We need a start context in the workspace
                //     return Promise.reject(Errors.CommandCannotExecute(this.id, 'the workspace context is missing'))
                // }
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    return Command;
}());
exports.Command = Command;
//# sourceMappingURL=Command.js.map