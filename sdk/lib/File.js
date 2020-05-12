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
        this._data = new _1.Data();
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
            this.data.update(fs_extra_1.default.readFileSync(path_1.default.resolve(this.path), 'utf8'));
        }
        catch (e) {
            throw _1.Errors.FileCouldNotBeLoaded(this.path, e.message);
        }
    };
    File.prototype.save = function () {
        this.exists || fs_extra_1.default.mkdirsSync(path_1.default.dirname(this.path));
        fs_extra_1.default.writeFileSync(this.path, "" + this.data.raw, 'utf8');
    };
    File.prototype.update = function (data) {
        this.data.append(data);
        this.save();
    };
    return File;
}());
exports.File = File;
