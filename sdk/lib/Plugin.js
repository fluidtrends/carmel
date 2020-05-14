"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plugin = void 0;
var Session = require('./Session');
var Commander = require('./Commander');
var Plugin = /** @class */ (function () {
    function Plugin(props) {
        this._props = Object.assign({}, props);
        this._props.session = Object.assign({}, { name: "carmel" }, props.session);
    }
    Object.defineProperty(Plugin.prototype, "props", {
        get: function () {
            return this._props;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plugin.prototype, "session", {
        get: function () {
            return this._session;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plugin.prototype, "command", {
        get: function () {
            return this._command;
        },
        enumerable: false,
        configurable: true
    });
    Plugin.prototype.findCommand = function (id) {
        return require("./commands/" + id);
    };
    Plugin.prototype.loadCommand = function () {
        var _this = this;
        if (!this.props || !this.props.command) {
            return Promise.reject(new Error(_.ERRORS.CANNOT_LOAD('the command is missing')));
        }
        return new Promise(function (resolve, reject) {
            try {
                var Command = _this.findCommand(_this.props.command.id);
                _this._command = new Command(_this.props.command.args, _this.props.command.subid);
                resolve(_this.command);
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Plugin.prototype.createSession = function () {
        this._session = new Session(this.props.session, this.command);
        return this.session.open(this.command);
    };
    Plugin.prototype.run = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.loadCommand()
                .then(function () { return _this.createSession(); })
                .then(function () { return Commander.run(_this.command, _this.session); })
                .then(function () { return _this.session.close(); })
                .catch(function (e) {
                console.log(e);
                _this.session.logger.error(e);
                resolve();
            });
        });
    };
    return Plugin;
}());
exports.Plugin = Plugin;
_.ERRORS = {
    CANNOT_LOAD: function (reason) { return reason ? "Cannot load plugin because " + reason : "Cannot load plugin"; }
};
//# sourceMappingURL=Plugin.js.map