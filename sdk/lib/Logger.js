"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var Ora = require('ora');
var chalk = require('chalk');
var Logger = /** @class */ (function () {
    function Logger(props) {
        this._props = Object.assign({}, { name: "carmel" }, props);
        this._events = [];
    }
    Object.defineProperty(Logger.prototype, "console", {
        get: function () {
            return this._console;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "props", {
        get: function () {
            return this._props;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "events", {
        get: function () {
            return this._events;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "name", {
        get: function () {
            return this.props.name;
        },
        enumerable: true,
        configurable: true
    });
    Logger.prototype.start = function (message) {
        var _this = this;
        return new Promise(function (resolve) {
            if (!_this.props.console) {
                resolve();
                return;
            }
            _this._console = new Ora({ text: chalk[_.TYPE_FLAGS[_.TYPE_SYSTEM]](message || ''), spinner: 'dots', color: 'yellow', stream: process.stdout });
            _this.console.start();
            resolve();
        });
    };
    Logger.prototype.stop = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (!_this.console) {
                resolve();
                return;
            }
            _this.console.stop();
            resolve();
        });
    };
    Logger.prototype.done = function (message) {
        this.info(message);
        this.console.succeed();
    };
    Logger.prototype.logEvent = function (event) {
        var type = event.type || _.TYPE_SYSTEM;
        var message = "" + (event.message || "");
        this.events.push(Object.assign({}, {
            timestamp: "" + Date.now(),
            type: type, message: message
        }, event));
        if (!this.console) {
            return;
        }
        if (_.TYPE_ERROR === type) {
            this.console.fail("" + chalk[_.TYPE_FLAGS[type]](message));
            return;
        }
        this.console.text = "" + chalk[_.TYPE_FLAGS[type]](message);
    };
    Logger.prototype.system = function (message) {
        this.logEvent({ message: message, type: _.TYPE_SYSTEM });
    };
    Logger.prototype.error = function (error) {
        this.logEvent({ error: error, message: error.message, type: _.TYPE_ERROR });
    };
    Logger.prototype.info = function (message) {
        this.logEvent({ message: message, type: _.TYPE_INFO });
    };
    return Logger;
}());
exports.Logger = Logger;
_.TYPE_ERROR = 'error';
_.TYPE_INFO = 'info';
_.TYPE_SYSTEM = 'system';
_.TYPE_FLAGS = (_a = {},
    _a[_.TYPE_ERROR] = 'red',
    _a[_.TYPE_INFO] = 'green',
    _a[_.TYPE_SYSTEM] = 'bold',
    _a);
//# sourceMappingURL=Logger.js.map