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
var WorkspaceCommand = /** @class */ (function (_super) {
    __extends(WorkspaceCommand, _super);
    function WorkspaceCommand(args) {
        return _super.call(this, args) || this;
    }
    Object.defineProperty(WorkspaceCommand.prototype, "id", {
        get: function () { return _.ID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkspaceCommand.prototype, "requiresContext", {
        get: function () { return _.REQUIRES_CONTEXT; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkspaceCommand.prototype, "title", {
        get: function () { return _.TITLE; },
        enumerable: true,
        configurable: true
    });
    WorkspaceCommand.prototype.set = function (session) {
        var _a = this.args, key = _a.key, values = _a.values;
        if (!key) {
            return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the key is missing')));
        }
        if (!values || values.length === 0 || Object.keys(values).length === 0) {
            return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the value is missing')));
        }
        session.logger.info("Updating workspace ...");
        session.workspace.reload();
        var ks = key.split('.');
        var el = {};
        var tmp = el;
        var i = 0;
        ks.map(function (k) {
            tmp[k] = ++i < ks.length ? {} : values;
            tmp = tmp[k];
        });
        session.workspace.saveData(el);
        return Promise.resolve();
    };
    WorkspaceCommand.prototype.get = function (session) {
        var key = this.args.key;
        if (!key) {
            return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the key is missing')));
        }
        session.logger.info("Reading workspace settings ...");
        session.workspace.reload();
        var data = session.workspace.data;
        if (!data) {
            return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('Nothing available')));
        }
        var ks = key.split('.');
        var el = Object.assign({}, data);
        var i = 0;
        var found = true;
        ks.map(function (k) {
            if (!found) {
                return;
            }
            el = el[ks[i++]];
            if (!el) {
                found = false;
                return;
            }
        });
        if (!found) {
            return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('Not found in the workspace')));
        }
        session.logger.done(JSON.stringify(el, null, 4));
        return Promise.resolve();
    };
    WorkspaceCommand.prototype.defaults = function (session) {
        session.logger.info("What do you want to do?");
        return Promise.resolve();
    };
    WorkspaceCommand.prototype.exec = function (session) {
        if (!session) {
            return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the session is missing')));
        }
        if (!this.args.operation) {
            return this.defaults(session);
        }
        if (!this[this.args.operation]) {
            return this.defaults(session);
        }
        return this[this.args.operation](session);
    };
    return WorkspaceCommand;
}(Command));
exports.WorkspaceCommand = WorkspaceCommand;
_.ERRORS = Object.assign({}, _.ERRORS, {});
_.REQUIRES_CONTEXT = false;
_.TITLE = "Managing workspace";
_.ID = 'workspace';
//# sourceMappingURL=index.js.map