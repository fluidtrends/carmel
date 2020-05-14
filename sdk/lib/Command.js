"use strict";
// const path = require('path')
// const fs = require('fs-extra')
// const { Cloud } = require("awsome")
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var Command = /** @class */ (function () {
    function Command(props) {
        this._props = props;
    }
    Object.defineProperty(Command.prototype, "props", {
        get: function () {
            return this._props;
        },
        enumerable: false,
        configurable: true
    });
    return Command;
}());
exports.Command = Command;
// _.ERRORS = {
//     DOES_NOT_EXIST: (name) => name ? `The ${name} does not exist` : `Does not exist`,
//     ALREADY_EXISTS: (name) => name ? `The ${name} already exists` : `Already exists`,
//     COULD_NOT_EXECUTE: (reason) => reason ? `${reason}`: `Could not execute command`
// }
// _.TITLE = 'command'
// _.ID = '_'
// _.REQUIRES_CONTEXT = true 
// _.REQUIRES_FRESH_SESSION = false
// _.TARGETS = { WEB: "web", DESKTOP: "desktop", MOBILE: "mobile", CLOUD: "cloud" }
// _.DEFAULT_SCRIPT = 'default'
//# sourceMappingURL=Command.js.map