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
exports.installCarmelSDK = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var nodu_1 = require("nodu");
var install_1 = __importDefault(require("nodu/lib/commands/install"));
function parseCommand(input) {
    var raw = Object.assign({}, input);
    var id = raw._.shift();
    delete raw.$0;
    delete raw._;
    var cls = (id.charAt(0).toUpperCase() + id.substring(1));
    return Object.assign({}, { id: id, cls: cls }, raw);
}
function init() {
    var userRoot = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
    var carmelRoot = path_1.default.resolve(userRoot, '.carmel');
    var carmelCacheRoot = path_1.default.resolve(carmelRoot, 'cache');
    var carmelBundlesRoot = path_1.default.resolve(carmelRoot, 'bundles');
    fs_1.default.existsSync(carmelRoot) || fs_1.default.mkdirSync(carmelRoot);
    fs_1.default.existsSync(carmelCacheRoot) || fs_1.default.mkdirSync(carmelCacheRoot);
    process.env.CARMEL_USER_HOME = userRoot;
    process.env.CARMEL_HOME = carmelRoot;
    process.env.CARMEL_CACHE_ROOT = carmelCacheRoot;
    process.env.CARMEL_BUNDLES_ROOT = carmelBundlesRoot;
    nodu_1.resolveAll();
}
function runCarmelCommand(command, sdkPath) {
    return __awaiter(this, void 0, void 0, function () {
        var tsMode, Carmel, Command, cmd, args;
        return __generator(this, function (_a) {
            tsMode = process.env.CARMEL_MODE && process.env.CARMEL_MODE === 'ts';
            Carmel = require(path_1.default.resolve(sdkPath, tsMode ? 'src' : 'lib'));
            Command = Carmel.Commands[command.cls];
            cmd = new Command(command);
            args = Object.keys(command).map(function (name) { return ({ name: name, value: command[name] }); });
            return [2 /*return*/, Carmel.Engine.run(cmd, args)];
        });
    });
}
function installCarmelSDK() {
    return __awaiter(this, void 0, void 0, function () {
        var carmelSdkPath, installed;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    carmelSdkPath = path_1.default.resolve(process.env.CARMEL_CACHE_ROOT, "@carmel", "sdk", "default");
                    if (fs_1.default.existsSync(carmelSdkPath)) {
                        return [2 /*return*/, carmelSdkPath];
                    }
                    return [4 /*yield*/, install_1.default({
                            module: "@carmel/sdk",
                            to: process.env.CARMEL_CACHE_ROOT
                        })];
                case 1:
                    installed = _a.sent();
                    fs_1.default.symlinkSync(installed.to, carmelSdkPath, 'dir');
                    return [2 /*return*/, installed.to];
            }
        });
    });
}
exports.installCarmelSDK = installCarmelSDK;
exports.default = (function (input) { return __awaiter(void 0, void 0, void 0, function () {
    var sdkPath, command, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                init();
                return [4 /*yield*/, installCarmelSDK()];
            case 1:
                sdkPath = _a.sent();
                command = parseCommand(input);
                return [4 /*yield*/, runCarmelCommand(command, sdkPath)];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                nodu_1.logError(e_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=exec.js.map