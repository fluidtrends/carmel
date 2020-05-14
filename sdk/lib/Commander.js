"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commander = void 0;
var Commander = /** @class */ (function () {
    function Commander(command, session) {
        this._command = command;
        this._session = session;
    }
    Object.defineProperty(Commander.prototype, "command", {
        get: function () {
            return this._command;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Commander.prototype, "session", {
        get: function () {
            return this._session;
        },
        enumerable: false,
        configurable: true
    });
    Commander.prototype.run = function () {
        return this.command.exec(this.session);
    };
    Commander.prototype.verify = function () {
        var _this_1 = this;
        return new Promise(function (resolve, reject) {
            var missing = _this_1.command.missingRequiredArgs;
            if (missing && missing.length > 0) {
                // Make sure that the command has been given what it expects
                reject(new Error(_.ERRORS.MISSING_ARG(missing[0])));
                return;
            }
            resolve();
        });
    };
    Commander.run = function (command, session) {
        var _this = new _(command, session);
        return _this.verify()
            .then(function () { return _this.session.initialize(); })
            .then(function () { return _this.run(); });
    };
    return Commander;
}());
exports.Commander = Commander;
_.ERRORS = {
    MISSING_ARG: function (arg) { return "Missing [" + arg + "] argument"; }
};
//# sourceMappingURL=Commander.js.map