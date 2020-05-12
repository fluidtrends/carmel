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
var DataCommand = /** @class */ (function (_super) {
    __extends(DataCommand, _super);
    function DataCommand(args) {
        return _super.call(this, args) || this;
    }
    Object.defineProperty(DataCommand.prototype, "id", {
        get: function () { return _.ID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataCommand.prototype, "requiresContext", {
        get: function () { return _.REQUIRES_CONTEXT; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataCommand.prototype, "title", {
        get: function () { return _.TITLE; },
        enumerable: true,
        configurable: true
    });
    DataCommand.prototype.vault = function (session) {
        return session.index.sections[this.args.secure ? 'safe' : 'main'].vault;
    };
    DataCommand.prototype.lock = function (session) {
        var v = session.index.sections.safe.vault;
        if (v.isLocked) {
            return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the safe is already locked')));
        }
        if (!this.args.password) {
            return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the password is missing')));
        }
        session.logger.info("Locking secure data ...");
        return v.lock(this.args.password);
    };
    DataCommand.prototype.unlock = function (session) {
        var v = session.index.sections.safe.vault;
        if (!v.isLocked) {
            return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the safe is already unlocked')));
        }
        if (!this.args.password) {
            return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the password is missing')));
        }
        session.logger.info("Unlocking secure data ...");
        return v.unlock(this.args.password);
    };
    DataCommand.prototype.save = function (session) {
        var _a = this.args, key = _a.key, values = _a.values;
        if (!key) {
            return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the key is missing')));
        }
        if (!values || values.length === 0) {
            return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the value missing')));
        }
        var v = this.vault(session);
        if (this.args.secure && v.isLocked) {
            return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the safe is locked')));
        }
        session.logger.info("Saving data ...");
        v.write(key, values);
        return Promise.resolve();
    };
    DataCommand.prototype.read = function (session) {
        var key = this.args.key;
        if (!key) {
            return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the key is missing')));
        }
        var v = this.vault(session);
        if (this.args.secure && v.isLocked) {
            return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the safe is locked')));
        }
        session.logger.info("Reading data ...");
        var output = v.read(key);
        if (!output) {
            return Promise.reject(new Error('No data found'));
        }
        session.logger.done(JSON.stringify(output, null, 4));
        return Promise.resolve();
    };
    DataCommand.prototype.defaults = function (session) {
        session.logger.info("What do you want to do?");
        return Promise.resolve();
    };
    DataCommand.prototype.exec = function (session) {
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
    return DataCommand;
}(Command));
exports.DataCommand = DataCommand;
_.ERRORS = Object.assign({}, _.ERRORS, {});
_.REQUIRES_CONTEXT = false;
_.TITLE = "Managing data";
_.ID = 'data';
//# sourceMappingURL=index.js.map