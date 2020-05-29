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
exports.Script = void 0;
/**
 *
 * @category System
 * @internal
 */
var Script = /** @class */ (function () {
    /**
     *
     * @param target
     * @param name
     */
    function Script(stack, target, name) {
        this._stack = stack;
        this._target = target;
        this._name = name;
        this._dir = this.stack.targetScriptDir(this.target, this.name);
    }
    Object.defineProperty(Script.prototype, "name", {
        /**
         *
         */
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Script.prototype, "target", {
        /**
         *
         */
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Script.prototype, "stack", {
        /**
         *
         */
        get: function () {
            return this._stack;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Script.prototype, "dir", {
        /**
         *
         */
        get: function () {
            return this._dir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Script.prototype, "module", {
        /**
         *
         */
        get: function () {
            return this._module;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Script.prototype, "exists", {
        /**
         *
         */
        get: function () {
            var _a;
            return this.stack.artifact !== undefined && ((_a = this.stack.artifact) === null || _a === void 0 ? void 0 : _a.exists) &&
                this.stack.supportsTargetScript(this.target, this.name);
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     */
    Script.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // Don't bother if it's missing
                if (!this.exists)
                    return [2 /*return*/, undefined];
                try {
                    // Let's see what we've got here
                    this._module = require(this.dir.path);
                    // We only care about the default module
                    if (!this.module.default)
                        return [2 /*return*/, undefined];
                }
                catch (err) {
                    // Well now, we can't have this can we
                    return [2 /*return*/, undefined];
                }
                // We should have a nice happy module going by now
                return [2 /*return*/, this];
            });
        });
    };
    /**
     *
     * @param args
     */
    Script.prototype.exec = function (args) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, (_a = this.module) === null || _a === void 0 ? void 0 : _a.default(args)];
            });
        });
    };
    return Script;
}());
exports.Script = Script;
// _.ERRORS = Object.assign({}, _.ERRORS, {
// })
// _.PLATFORMS = { WEB: "web", DESKTOP: "desktop", MOBILE: "mobile" }
// _.DEFAULT_PLATFORM = _.PLATFORMS.WEB
// const fs = require('fs-extra')
// const path = require('path')
// const _makeChunkShadows = ({ shadowsChunksDir, chunk, shadows }) => {    
//     // Let's make sure the chunk shadow locations are ready
//     const chunkDir = path.resolve(shadowsChunksDir, chunk.name)
//     const chunkScreensDir = path.resolve(chunkDir, 'screens')
//     fs.existsSync(chunkScreensDir) && fs.removeSync(chunkScreensDir) 
//     fs.mkdirsSync(chunkScreensDir)  
//     Object.keys(SHADOW_TYPES).map(type => {
//         const screensShadow = Object.keys(chunk.routes).map(screen => SHADOW_CHUNK_SCREEN({ chunk, screen, type })).join('\n')
//         shadows[type] = `${shadows[type]}${SHADOW({ chunk, type })}\n`
//         fs.writeFileSync(path.resolve(chunkDir, `index${SHADOW_TYPES[type]}.js`), SHADOW_CHUNK({ chunk, type }), 'utf8')
//         fs.writeFileSync(path.resolve(chunkScreensDir, `index${SHADOW_TYPES[type]}.js`), screensShadow, 'utf8')
//     })
// }
// const _makeShadows = (workspace, chunks) => {
//     // The shadows are empty to start with
//     var shadows = { web: "", desktop: "", mobile: ""}
//     // This is where we expect the shadows to exist
//     const shadowsDir = path.resolve(workspace.dir, '.app')
//     const shadowsChunksDir = path.resolve(shadowsDir, 'chunks')
//     // We want to make sure we start with fresh locations 
//     fs.existsSync(shadowsChunksDir) && fs.removeSync(shadowsChunksDir) 
//     fs.mkdirsSync(shadowsChunksDir)  
//     Object.keys(SHADOW_TYPES).map(type => fs.existsSync(path.resolve(shadowsDir, type)) && fs.removeSync(path.resolve(shadowsDir, type)))
//     // We're ready to produce the shadow chunks
//     chunks.map(chunk => _makeChunkShadows({ chunk, shadowsChunksDir, shadows }))
//     // Generate the main shadows
//     Object.keys(SHADOW_TYPES).map(type => fs.writeFileSync(path.resolve(shadowsChunksDir, `index${SHADOW_TYPES[type]}.js`), shadows[type], 'utf8'))
// }
// const run = ({ session, props, script }) => {
//     _makeShadows (session.workspace, props.sections)
//     return script.exec(Object.assign({}, script.props, props))
// }
// SHADOW_TYPES = { web: ".web", desktop: ".desktop", mobile: "" }
// SHADOW_CHUNK_SCREEN = ({ chunk, screen, type }) => `export { default as ${screen} } from '../../../../chunks/${chunk.name}/screens/${screen}${SHADOW_TYPES[type]}.js'`
// SHADOW = ({ chunk, type }) => `export { default as ${chunk.name} } from './${chunk.name}/index${SHADOW_TYPES[type]}.js'`
// SHADOW_CHUNK = ({ chunk, type }) => `
// import config from '../../../chunks/${chunk.name}/chunk.json'
// import * as screens from './screens/index${SHADOW_TYPES[type]}.js'
// const chunk = { screens, ...config }
// export default chunk
// `
// module.exports = run
//# sourceMappingURL=Script.js.map