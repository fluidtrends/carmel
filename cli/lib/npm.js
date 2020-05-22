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
exports.run = exports.existsGlobal = exports.env = void 0;
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var nopt_1 = __importDefault(require("nopt"));
exports.env = init();
function existsGlobal(id) {
    return fs_1.default.existsSync(path_1.default.resolve(exports.env.nodeGlobalModulesRoot, id));
}
exports.existsGlobal = existsGlobal;
function init() {
    var nodeExec = path_1.default.resolve(process.execPath);
    var nodeBin = path_1.default.dirname(nodeExec);
    var nodeRoot = path_1.default.dirname(nodeBin);
    var nodeLib = path_1.default.resolve(nodeRoot, 'lib');
    var nodeGlobalModulesRoot = path_1.default.resolve(nodeLib, 'node_modules');
    var npmRoot = path_1.default.resolve(nodeGlobalModulesRoot, 'npm');
    var npmExec = path_1.default.resolve(nodeBin, 'npm');
    var npmExists = fs_1.default.existsSync(npmRoot);
    return {
        nodeExec: nodeExec,
        nodeBin: nodeBin,
        nodeRoot: nodeRoot,
        nodeGlobalModulesRoot: nodeGlobalModulesRoot,
        nodeLib: nodeLib,
        npmRoot: npmRoot,
        npmExec: npmExec,
        npmExists: npmExists
    };
}
function run(cmd) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    if (!exports.env.npmExists) {
                        reject(new Error('Could not find npm'));
                        return;
                    }
                    var output = '';
                    // const stdout = process.stdout.write
                    // const stderr = process.stderr.write
                    var original = cmd.split(' ').map(function (s) { return s.trim(); });
                    process.argv = process.argv.slice(0, 2).concat(original);
                    var npm = require(exports.env.npmRoot + "/lib/npm.js");
                    var npmconf = require(exports.env.npmRoot + "/lib/config/core.js");
                    var configDefs = npmconf.defs;
                    var shorthands = configDefs.shorthands;
                    var types = configDefs.types;
                    var conf = nopt_1.default(types, shorthands);
                    npm.argv = conf.argv.remain;
                    npm.command = npm.argv.shift();
                    conf._exit = false;
                    // process.stdout.write = (msg: string) => {
                    //     output = output + msg
                    //     return true
                    // }
                    npm.load(conf, function (er) {
                        if (er) {
                            // process.stdout.write = stdout
                            // process.stderr.write = stderr
                            reject(er);
                            return;
                        }
                        // npm.config.set('loglevel', 'silent')
                        npm.commands[npm.command](npm.argv, function (err) {
                            if (err) {
                                // process.stdout.write = stdout
                                // process.stderr.write = stderr
                                reject(err);
                                return;
                            }
                            // process.stdout.write = stdout
                            // process.stderr.write = stderr
                            resolve(output.trim());
                        });
                    });
                })];
        });
    });
}
exports.run = run;
//# sourceMappingURL=npm.js.map