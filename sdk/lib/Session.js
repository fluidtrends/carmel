"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
var dodi_1 = require("dodi");
var _1 = require(".");
var Session = /** @class */ (function () {
    function Session(props) {
        this._props = props;
        // this._command = command
        this._logger = new _1.Logger(this.props);
        this._workspace = this.props.noWorkspace ? undefined : new _1.Workspace(this.props);
        this._index = new dodi_1.Index(Object.assign({}, { sections: Session.DEFAULT_SECTIONS }, this.props, { name: 'carmel' })); //, this.logger)
    }
    Object.defineProperty(Session.prototype, "props", {
        get: function () {
            return this._props;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "logger", {
        get: function () {
            return this._logger;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "index", {
        get: function () {
            return this._index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "workspace", {
        get: function () {
            return this._workspace;
        },
        enumerable: false,
        configurable: true
    });
    Session.DEFAULT_SECTIONS = [
        { id: "main" },
        { id: "safe", secure: true },
        { id: "archives" },
        { id: "events" },
        { id: "cloud" },
        { id: "products" }
    ];
    return Session;
}());
exports.Session = Session;
//# sourceMappingURL=Session.js.map