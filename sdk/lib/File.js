"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = __importDefault(require("fs-extra"));
var path_1 = __importDefault(require("path"));
var _1 = require(".");
var File = /** @class */ (function () {
    function File(path) {
        this._path = path;
    }
    Object.defineProperty(File.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "path", {
        get: function () {
            return this._path;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "exists", {
        get: function () {
            return fs_extra_1.default.existsSync(path_1.default.resolve(this.path));
        },
        enumerable: true,
        configurable: true
    });
    File.prototype.load = function () {
        if (!this.exists) {
            throw _1.Errors.FileDoesNotExist(this.path);
        }
        try {
            this._data = new _1.Data(fs_extra_1.default.readFileSync(path_1.default.resolve(this.path), 'utf8'));
        }
        catch (e) {
            throw _1.Errors.FileCouldNotBeLoaded(this.path, e.message);
        }
    };
    return File;
}());
exports.File = File;
