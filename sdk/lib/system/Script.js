"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Script = void 0;
var __1 = require("..");
/**
 *
 * @category System
 * @internal
 */
var Script = /** @class */ (function () {
    function Script(args) {
        this._args = Object.assign({}, args);
        this._platform = __1.Globals.SUPPORTED_PLATFORMS[args.platform ? args.platform.toUpperCase() : __1.Globals.DEFAULT_PLATFORM.toUpperCase()];
    }
    Object.defineProperty(Script.prototype, "platform", {
        get: function () {
            return this._platform;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Script.prototype, "target", {
        get: function () {
            return this.platform;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Script.prototype, "args", {
        get: function () {
            return this._args;
        },
        enumerable: false,
        configurable: true
    });
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