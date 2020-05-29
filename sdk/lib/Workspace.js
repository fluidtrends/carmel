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
exports.Workspace = void 0;
var path_1 = __importDefault(require("path"));
var _1 = require(".");
var Stack_1 = require("./Stack");
/**
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Workspace.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Workspace.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Workspace.ts/stats | Code Stats}
 *
 * @category Core
 */
var Workspace = /** @class */ (function () {
    function Workspace(props, session) {
        this._props = props;
        this._session = session;
        this._dir = new _1.Dir(this.props.cwd || process.cwd());
        this._manifest = new _1.File(this.dir.path !== undefined ? path_1.default.resolve(this.dir.path, _1.Globals.MANIFEST_FILENAME) : undefined);
    }
    Object.defineProperty(Workspace.prototype, "manifest", {
        get: function () { return this._manifest; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workspace.prototype, "props", {
        get: function () { return this._props; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workspace.prototype, "dir", {
        get: function () { return this._dir; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workspace.prototype, "session", {
        get: function () { return this._session; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workspace.prototype, "stack", {
        get: function () { return this._stack; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workspace.prototype, "data", {
        get: function () {
            return this.manifest.data.json();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workspace.prototype, "exists", {
        get: function () {
            return this.manifest.exists;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workspace.prototype, "context", {
        get: function () {
            return this.manifest.data.json().context;
        },
        enumerable: false,
        configurable: true
    });
    Workspace.prototype.loadStack = function () {
        return __awaiter(this, void 0, void 0, function () {
            var name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = this.manifest.data.json().stack;
                        if (!name) {
                            throw _1.Errors.StackCannotLoad('unknown', 'a name was not specified');
                        }
                        this._stack = new Stack_1.Stack({ name: name });
                        return [4 /*yield*/, this.stack.load(this)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.stack];
                }
            });
        });
    };
    Workspace.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.manifest.exists && this.manifest.load();
                return [2 /*return*/];
            });
        });
    };
    Workspace.prototype.create = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.manifest.data.update({});
                this.manifest.save();
                return [2 /*return*/, this.manifest.data.json()];
            });
        });
    };
    Workspace.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.load()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    Workspace.prototype.saveContext = function (context) {
        this.manifest.data.append({ context: context });
        this.manifest.save();
    };
    Workspace.prototype.saveData = function (data) {
        this.manifest.data.append(data);
        this.manifest.save();
    };
    Workspace.prototype.loadFile = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var file;
            return __generator(this, function (_a) {
                file = new _1.File(path);
                return [2 /*return*/, file.load()];
            });
        });
    };
    Workspace.prototype.findDirs = function (dirpath) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, (_a = this.dir.dir(dirpath)) === null || _a === void 0 ? void 0 : _a.dirs()];
            });
        });
    };
    return Workspace;
}());
exports.Workspace = Workspace;
//# sourceMappingURL=Workspace.js.map