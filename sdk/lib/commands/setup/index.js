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
var SetupCommand = /** @class */ (function (_super) {
    __extends(SetupCommand, _super);
    function SetupCommand(args) {
        return _super.call(this, args) || this;
    }
    Object.defineProperty(SetupCommand.prototype, "id", {
        get: function () { return _.ID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SetupCommand.prototype, "requiresContext", {
        get: function () { return _.REQUIRES_CONTEXT; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SetupCommand.prototype, "title", {
        get: function () { return _.TITLE; },
        enumerable: true,
        configurable: true
    });
    SetupCommand.prototype.exec = function (session) {
        if (!session) {
            return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the session is missing')));
        }
        return session.updateIndex();
    };
    return SetupCommand;
}(Command));
exports.SetupCommand = SetupCommand;
_.ERRORS = Object.assign({}, _.ERRORS, {});
_.REQUIRES_CONTEXT = false;
_.TITLE = "Setting up your environment";
_.ID = 'setup';
//# sourceMappingURL=index.js.map