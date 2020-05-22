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
exports.PreviewCommand = void 0;
var path = require('path');
var Command = require('../../Command');
var PreviewCommand = /** @class */ (function (_super) {
    __extends(PreviewCommand, _super);
    function PreviewCommand(args) {
        return _super.call(this, args) || this;
    }
    Object.defineProperty(PreviewCommand.prototype, "id", {
        get: function () { return _.ID; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreviewCommand.prototype, "title", {
        get: function () { return _.TITLE; },
        enumerable: false,
        configurable: true
    });
    PreviewCommand.prototype.exec = function (session) {
        var _this = this;
        return _super.prototype.initialize.call(this, session)
            .then(function () { return _this.startScript(session, _.ID); });
    };
    return PreviewCommand;
}(Command));
exports.PreviewCommand = PreviewCommand;
_.TITLE = "Previewing";
_.ID = 'preview';
//# sourceMappingURL=index.js.map