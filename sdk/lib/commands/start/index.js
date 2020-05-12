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
var path = require('path');
var Command = require('../../Command');
var Script = require('../../Script');
var run = require('../../run');
var StartCommand = /** @class */ (function (_super) {
    __extends(StartCommand, _super);
    function StartCommand(args) {
        var _this = _super.call(this, args) || this;
        _this._script = new Script(Object.assign({}, args, { dev: true }));
        return _this;
    }
    Object.defineProperty(StartCommand.prototype, "id", {
        get: function () { return _.ID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StartCommand.prototype, "title", {
        get: function () { return _.TITLE; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StartCommand.prototype, "requiresFreshSession", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StartCommand.prototype, "script", {
        get: function () {
            return this._script;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StartCommand.prototype, "target", {
        get: function () {
            return this.script.target;
        },
        enumerable: true,
        configurable: true
    });
    StartCommand.prototype.exec = function (session) {
        var _this = this;
        return _super.prototype.initialize.call(this, session)
            .then(function () { return Promise.all([_this.commandScript(session, _.ID), _this.script.load(session)]); })
            .then(function (_a) {
            var script = _a[0], props = _a[1];
            return run({ session: session, script: script, props: props });
        });
    };
    return StartCommand;
}(Command));
exports.StartCommand = StartCommand;
_.TITLE = "Starting up";
_.ID = 'start';
//# sourceMappingURL=index.js.map