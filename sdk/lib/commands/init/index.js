"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var url_parse_1 = __importDefault(require("url-parse"));
var __1 = require("../..");
var Init = /** @class */ (function (_super) {
    __extends(Init, _super);
    function Init(args) {
        return _super.call(this, args) || this;
    }
    Object.defineProperty(Init.prototype, "archive", {
        get: function () {
            return this._archive;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Init.prototype, "template", {
        get: function () {
            return this._template;
        },
        enumerable: false,
        configurable: true
    });
    Init.prototype.parse = function () {
        var url = url_parse_1.default(this.args.template, true);
        var source = url.protocol.slice(0, -1).toLowerCase() || 'npm';
        var version = url.hash.substring(1) || null;
        var path = url.pathname.substring(1);
        var id = url.host || __1.Globals.DEFAULT_ARCHIVE_ID;
        if (id.split(":").length > 1) {
            var _a = id.toLowerCase().split(":"), owner = _a[0], repo = _a[1];
            id = "@" + owner + "/" + repo;
        }
        if (!__1.Globals.SUPPORTED_ARCHIVE_SOURCES.includes(source)) {
            return;
        }
        this._archive = Object.assign({}, { silent: true, source: source, id: id }, version && { version: version });
        this._template = Object.assign({}, { path: path });
    };
    Init.prototype.exec = function (session) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_c) {
                if (!session) {
                    return [2 /*return*/, Promise.reject(__1.Errors.CommandCannotExecute(this.id, 'the session is missing'))];
                }
                if ((_a = session.workspace) === null || _a === void 0 ? void 0 : _a.exists) {
                    return [2 /*return*/, Promise.reject(__1.Errors.CommandCannotExecute(this.id, 'the workspace already exists'))];
                }
                // Figure out the archive id and version and the template path within the archive
                this.parse();
                if (!this.archive || !this.archive.id || !this.template || !this.template.path) {
                    return [2 /*return*/, Promise.reject(__1.Errors.CommandCannotExecute(this.id, 'the template is invalid'))];
                }
                // Initialize the workspace
                return [2 /*return*/, (_b = session.workspace) === null || _b === void 0 ? void 0 : _b.create()];
            });
        });
    };
    return Init;
}(__1.Command));
exports.default = Init;
//# sourceMappingURL=index.js.map