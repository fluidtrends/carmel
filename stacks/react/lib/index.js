"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
// Load common reducers
var auth_1 = __importDefault(require("./auth"));
exports.auth = auth_1.default;
var common = __importStar(require("./common"));
exports.common = common;
var commonReducers = { auth: auth_1.default };
// Create the root reducer
var reducers = function (appReducers) { return redux_1.combineReducers(Object.assign(commonReducers, appReducers)); };
exports.default = reducers;
