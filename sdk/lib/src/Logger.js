"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var Logger = /** @class */ (function () {
    function Logger(props) {
        this._props = Object.assign({}, { name: "carmel" }, props);
        // this._events = []
    }
    Object.defineProperty(Logger.prototype, "props", {
        // get console() {
        //     return this._console
        // }
        get: function () {
            return this._props;
        },
        enumerable: false,
        configurable: true
    });
    return Logger;
}());
exports.Logger = Logger;
// _.TYPE_ERROR = 'error'
// _.TYPE_INFO = 'info'
// _.TYPE_SYSTEM = 'system'
// _.TYPE_FLAGS = { 
//     [_.TYPE_ERROR]: 'red', 
//     [_.TYPE_INFO]: 'green',
//     [_.TYPE_SYSTEM]: 'bold' 
// }
//# sourceMappingURL=Logger.js.map