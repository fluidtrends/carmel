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
Object.defineProperty(exports, "__esModule", { value: true });
var Command = require('../../Command');
var parse = require('url-parse');
var InitCommand = /** @class */ (function (_super) {
    __extends(InitCommand, _super);
    function InitCommand(args) {
        return _super.call(this, args) || this;
    }
    Object.defineProperty(InitCommand.prototype, "id", {
        get: function () { return _.ID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InitCommand.prototype, "requiredArgs", {
        get: function () { return _.REQUIRED; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InitCommand.prototype, "requiresContext", {
        get: function () { return _.REQUIRES_CONTEXT; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InitCommand.prototype, "title", {
        get: function () { return _.TITLE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InitCommand.prototype, "type", {
        get: function () { return _.TYPE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InitCommand.prototype, "requiresFreshSession", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InitCommand.prototype, "archive", {
        get: function () {
            return this._archive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InitCommand.prototype, "template", {
        get: function () {
            return this._template;
        },
        enumerable: true,
        configurable: true
    });
    InitCommand.prototype.parse = function () {
        var url = parse(this.args.template, true);
        var source = url.protocol.slice(0, -1).toLowerCase() || 'npm';
        var version = url.hash.substring(1) || null;
        var path = url.pathname.substring(1);
        var id = url.host || _.DEFAULT_ARCHIVE_ID;
        if (id.split(":").length > 1) {
            var _a = id.toLowerCase().split(":"), owner = _a[0], repo = _a[1];
            id = "@" + owner + "/" + repo;
        }
        if (!_.SUPPORTED_ARCHIVE_SOURCES.includes(source)) {
            return;
        }
        this._archive = Object.assign({}, { silent: true, source: source, id: id }, version && { version: version });
        this._template = Object.assign({}, { path: path });
    };
    InitCommand.prototype.exec = function (session) {
        if (!session) {
            return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the session is missing')));
        }
        if (session.workspace.exists) {
            return Promise.reject(new Error(_.ERRORS.ALREADY_EXISTS(this.type)));
        }
        // Figure out the archive id and version and the template path within the archive
        this.parse();
        if (!this.archive || !this.archive.id || !this.template || !this.template.path) {
            return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the template is invalid')));
        }
        // Initialize the workspace
        return session.workspace.create();
    };
    return InitCommand;
}(Command));
exports.InitCommand = InitCommand;
_.ERRORS = Object.assign({}, _.ERRORS, {});
_.REQUIRES_CONTEXT = false;
_.REQUIRED = ['name', 'template'];
_.TITLE = "Creating a new workspace";
_.TYPE = "workspace";
_.ID = 'init';
_.DEFAULT_ARCHIVE_ID = "@fluidtrends/bananas";
_.SUPPORTED_ARCHIVE_SOURCES = ['npm'];
//# sourceMappingURL=index.js.map