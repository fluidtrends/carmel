"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plugin = void 0;
var _1 = require(".");
var Plugin = /** @class */ (function () {
    function Plugin(props) {
        this._props = Object.assign({}, props);
        this._name = props.name || "carmel";
        this._props.session = Object.assign({}, { name: this.name }, props.session);
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
    Object.defineProperty(Plugin.prototype, "name", {
        get: function () {
            return this._name;
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
            return Promise.reject(_1.Errors.PluginCannotLoad(this.name, 'the command is missing'));
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
        var _a;
        this._session = new _1.Session(this.props.session); //, this.command)
        return (_a = this.session) === null || _a === void 0 ? void 0 : _a.open();
    };
    Plugin.prototype.run = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.loadCommand()
                .then(function () { return _this.createSession(); })
                .then(function () { return _1.Commander.run(_this.command, _this.session); })
                .then(function () { var _a; return (_a = _this.session) === null || _a === void 0 ? void 0 : _a.close(); })
                .catch(function (e) {
                // console.log(e)
                // this.session.logger.error(e)
                resolve();
            });
        });
    };
    return Plugin;
}());
exports.Plugin = Plugin;
//# sourceMappingURL=Plugin.js.map