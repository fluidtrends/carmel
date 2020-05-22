"use strict";
var fs = require('fs-extra');
var path = require('path');
var _makeChunkShadows = function (_a) {
    var shadowsChunksDir = _a.shadowsChunksDir, chunk = _a.chunk, shadows = _a.shadows;
    // Let's make sure the chunk shadow locations are ready
    var chunkDir = path.resolve(shadowsChunksDir, chunk.name);
    var chunkScreensDir = path.resolve(chunkDir, 'screens');
    fs.existsSync(chunkScreensDir) && fs.removeSync(chunkScreensDir);
    fs.mkdirsSync(chunkScreensDir);
    Object.keys(SHADOW_TYPES).map(function (type) {
        var screensShadow = Object.keys(chunk.routes).map(function (screen) { return SHADOW_CHUNK_SCREEN({ chunk: chunk, screen: screen, type: type }); }).join('\n');
        shadows[type] = "" + shadows[type] + SHADOW({ chunk: chunk, type: type }) + "\n";
        fs.writeFileSync(path.resolve(chunkDir, "index" + SHADOW_TYPES[type] + ".js"), SHADOW_CHUNK({ chunk: chunk, type: type }), 'utf8');
        fs.writeFileSync(path.resolve(chunkScreensDir, "index" + SHADOW_TYPES[type] + ".js"), screensShadow, 'utf8');
    });
};
var _makeShadows = function (workspace, chunks) {
    // The shadows are empty to start with
    var shadows = { web: "", desktop: "", mobile: "" };
    // This is where we expect the shadows to exist
    var shadowsDir = path.resolve(workspace.dir, '.app');
    var shadowsChunksDir = path.resolve(shadowsDir, 'chunks');
    // We want to make sure we start with fresh locations 
    fs.existsSync(shadowsChunksDir) && fs.removeSync(shadowsChunksDir);
    fs.mkdirsSync(shadowsChunksDir);
    Object.keys(SHADOW_TYPES).map(function (type) { return fs.existsSync(path.resolve(shadowsDir, type)) && fs.removeSync(path.resolve(shadowsDir, type)); });
    // We're ready to produce the shadow chunks
    chunks.map(function (chunk) { return _makeChunkShadows({ chunk: chunk, shadowsChunksDir: shadowsChunksDir, shadows: shadows }); });
    // Generate the main shadows
    Object.keys(SHADOW_TYPES).map(function (type) { return fs.writeFileSync(path.resolve(shadowsChunksDir, "index" + SHADOW_TYPES[type] + ".js"), shadows[type], 'utf8'); });
};
var run = function (_a) {
    var session = _a.session, props = _a.props, script = _a.script;
    _makeShadows(session.workspace, props.sections);
    return script.exec(Object.assign({}, script.props, props));
};
SHADOW_TYPES = { web: ".web", desktop: ".desktop", mobile: "" };
SHADOW_CHUNK_SCREEN = function (_a) {
    var chunk = _a.chunk, screen = _a.screen, type = _a.type;
    return "export { default as " + screen + " } from '../../../../chunks/" + chunk.name + "/screens/" + screen + SHADOW_TYPES[type] + ".js'";
};
SHADOW = function (_a) {
    var chunk = _a.chunk, type = _a.type;
    return "export { default as " + chunk.name + " } from './" + chunk.name + "/index" + SHADOW_TYPES[type] + ".js'";
};
SHADOW_CHUNK = function (_a) {
    var chunk = _a.chunk, type = _a.type;
    return "\nimport config from '../../../chunks/" + chunk.name + "/chunk.json'\nimport * as screens from './screens/index" + SHADOW_TYPES[type] + ".js'\nconst chunk = { screens, ...config }\nexport default chunk\n";
};
module.exports = run;
//# sourceMappingURL=run.js.map