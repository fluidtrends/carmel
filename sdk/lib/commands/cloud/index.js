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
exports.CloudCommand = void 0;
var Command = require('../../Command');
var CloudCommand = /** @class */ (function (_super) {
    __extends(CloudCommand, _super);
    function CloudCommand(args) {
        return _super.call(this, args) || this;
    }
    Object.defineProperty(CloudCommand.prototype, "id", {
        get: function () { return _.ID; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudCommand.prototype, "requiresContext", {
        get: function () { return _.REQUIRES_CONTEXT; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudCommand.prototype, "title", {
        get: function () { return _.TITLE; },
        enumerable: false,
        configurable: true
    });
    CloudCommand.prototype.status = function (session) {
        var _this = this;
        session.logger.info("Checking the status of your cloud ...");
        return this.prepareCloud(session)
            .then(function () { return _this.cloud.status(); });
    };
    CloudCommand.prototype.init = function (session) {
        var _this = this;
        session.logger.info("Setting up your cloud ...");
        return this.prepareCloud(session)
            .then(function () { return _this.cloud.init(); });
    };
    CloudCommand.prototype.push = function (session) {
        var _this = this;
        session.logger.info("Deploying cloud changes ...");
        return this.prepareCloud(session)
            .then(function () { return _this.cloud.push(); });
    };
    CloudCommand.prototype.exec = function (session) {
        if (!session) {
            return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the session is missing')));
        }
        if (!this.args.operation) {
            return this.status(session);
        }
        if (!this[this.args.operation]) {
            return this.status(session);
        }
        return this[this.args.operation](session);
    };
    return CloudCommand;
}(Command));
exports.CloudCommand = CloudCommand;
_.ERRORS = Object.assign({}, _.ERRORS, {});
_.REQUIRES_CONTEXT = false;
_.TITLE = "Managing cloud";
_.ID = 'cloud';
//# sourceMappingURL=index.js.map