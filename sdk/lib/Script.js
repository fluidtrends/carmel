"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require('path');
var Script = /** @class */ (function () {
    function Script(args) {
        this._args = Object.assign({}, args);
        this._platform = _.PLATFORMS[args.platform ? args.platform.toUpperCase() : _.DEFAULT_PLATFORM.toUpperCase()];
    }
    Object.defineProperty(Script.prototype, "platform", {
        get: function () {
            return this._platform;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Script.prototype, "target", {
        get: function () {
            return this.platform;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Script.prototype, "args", {
        get: function () {
            return this._args;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Script.prototype, "isDev", {
        get: function () {
            return this.args.dev;
        },
        enumerable: true,
        configurable: true
    });
    Script.prototype.makeConfig = function (session) {
        var papanacheVersion = session.get('papanacheVersion');
        var bananasVersion = session.get('bananasVersion');
        var templateDir = path.resolve(session.index.path, 'archives', '@fluidtrends/bananas', bananasVersion, '@fluidtrends/bananas');
        var root = path.resolve(session.index.path, 'archives', 'papanache', papanacheVersion, 'papanache');
        var dir = process.cwd();
        var chunkyWebDir = path.resolve(templateDir, 'node_modules', 'react-dom-chunky');
        var dev = this.isDev;
        var templateAssets = [{
                path: "node_modules/react-dom-chunky/app/assets", glob: '**/*'
            }];
        return {
            dir: dir,
            root: root,
            templateDir: templateDir,
            port: 8082,
            templateAssets: templateAssets,
            script: path.resolve(chunkyWebDir, 'app', "index" + (dev ? '.dev' : '') + ".js"),
            page: path.resolve(chunkyWebDir, 'app', 'pages', 'default.html')
        };
    };
    Script.prototype.load = function (session) {
        var props = this.makeConfig(session);
        return session.workspace.loadFile('carmel.json')
            .then(function (config) {
            props.config = Object.assign({}, config);
            return session.workspace.findDirs('chunks');
        })
            .then(function (dirs) { return Promise.all(dirs.map(function (dir) { return session.workspace.loadFile("chunks/" + dir + "/chunk.json"); })); })
            .then(function (chunks) {
            props.sections = [].concat(chunks);
            return props;
        });
    };
    return Script;
}());
exports.Script = Script;
_.ERRORS = Object.assign({}, _.ERRORS, {});
_.PLATFORMS = { WEB: "web", DESKTOP: "desktop", MOBILE: "mobile" };
_.DEFAULT_PLATFORM = _.PLATFORMS.WEB;
//# sourceMappingURL=Script.js.map