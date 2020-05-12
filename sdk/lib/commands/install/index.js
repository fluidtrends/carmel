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
var InstallCommand = /** @class */ (function (_super) {
    __extends(InstallCommand, _super);
    function InstallCommand(args) {
        return _super.call(this, args) || this;
    }
    Object.defineProperty(InstallCommand.prototype, "id", {
        get: function () { return _.ID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstallCommand.prototype, "title", {
        get: function () { return _.TITLE; },
        enumerable: true,
        configurable: true
    });
    InstallCommand.prototype.downloadDeps = function (installerType) {
        try {
            var installer = require("./" + this.context.type);
            return installer(this.args);
        }
        catch (e) {
            return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the dependencies could not be installed')));
        }
    };
    InstallCommand.prototype.exec = function (session) {
        var _this = this;
        return _super.prototype.initialize.call(this, session)
            .then(function () { return _this.downloadDeps('npm'); });
    };
    return InstallCommand;
}(Command));
exports.InstallCommand = InstallCommand;
_.ERRORS = Object.assign({}, _.ERRORS, {});
_.TITLE = "Installing dependencies";
_.ID = 'install';
//# sourceMappingURL=index.js.map