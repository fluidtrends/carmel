"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
require("./index.css");
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var App_1 = require("./App");
var props = {
    name: "Carmel",
    routes: [{
            path: "/",
            id: "main"
        }]
};
react_dom_1["default"].render(react_1["default"].createElement(App_1.App, __assign({}, props)), document.getElementById('app'));
//# sourceMappingURL=renderer.js.map