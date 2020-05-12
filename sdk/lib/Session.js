"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Index = require('dodi').Index;
var Workspace = require('./Workspace');
var Logger = require('./Logger');
var Session = /** @class */ (function () {
    function Session(props, command) {
        this._props = Object.assign({}, props);
        this._command = command;
        this._logger = new Logger(this.props);
        this._workspace = this.props.noWorkspace ? null : new Workspace(this.props, this);
        this._index = new Index(Object.assign({}, { sections: _.DEFAULT_SECTIONS }, this.props, { name: 'carmel' }), this.logger);
    }
    Object.defineProperty(Session.prototype, "props", {
        get: function () {
            return this._props;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "logger", {
        get: function () {
            return this._logger;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "index", {
        get: function () {
            return this._index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "workspace", {
        get: function () {
            return this._workspace;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "hasWorkspace", {
        get: function () {
            return !this.props.noWorkspace;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "command", {
        get: function () {
            return this._command;
        },
        enumerable: true,
        configurable: true
    });
    Session.prototype.set = function (key, val) {
        return this.index.sections.main.vault.write(key, val);
    };
    Session.prototype.get = function (key) {
        return this.index.sections.main.vault.read(key);
    };
    Session.prototype.updateIndex = function () {
        var _this = this;
        this.logger.info('Making sure your development environment is up to date ...');
        return this.index.installArchive({ id: "papanache", silent: true })
            .then(function (archive) {
            _this.set("papanacheVersion", archive.version);
            return archive.installDependencies();
        })
            .then(function () { return _this.index.installArchive({ id: "@fluidtrends/bananas", silent: true }); })
            .then(function (archive) {
            _this.set("bananasVersion", archive.version);
            return archive.installDependencies();
        })
            .then(function () {
            _this.logger.info('Your development environment is all up to date');
        });
    };
    Session.prototype.open = function () {
        // Let's setup the logger
        return this.logger.start(this.command && this.command.title);
    };
    Session.prototype.initialize = function () {
        var _this = this;
        // Initialize the index first of all
        return this.index.initialize()
            // Make sure the local common deps are available
            .then(function () { return _this.command && _this.command.requiresFreshSession && _this.updateIndex(); })
            // Then let's make sure the workspace is also initialized
            .then(function () { return _this.hasWorkspace && _this.workspace.initialize(); });
    };
    Session.prototype.close = function () {
        // Close this session
        return this.logger.stop();
    };
    return Session;
}());
exports.Session = Session;
_.DEFAULT_SECTIONS = [
    { id: "main" },
    { id: "safe", secure: true },
    { id: "archives" },
    { id: "events" },
    { id: "cloud" },
    { id: "products" }
];
//# sourceMappingURL=Session.js.map