"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
var fs_extra_1 = __importDefault(require("fs-extra"));
var path_1 = __importDefault(require("path"));
var __1 = require("..");
/**
 *
 * @category System
 */
var File = /** @class */ (function () {
    function File(path) {
        this._path = path;
        this._data = new __1.Data();
    }
    Object.defineProperty(File.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "path", {
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "exists", {
        get: function () {
            return this.path !== undefined && fs_extra_1.default.existsSync(path_1.default.resolve(this.path));
        },
        enumerable: false,
        configurable: true
    });
    File.prototype.load = function () {
        if (!this.exists) {
            throw __1.Errors.FileDoesNotExist(this.path || "");
        }
        try {
            this.data.update(fs_extra_1.default.readFileSync(path_1.default.resolve(this.path), 'utf8'));
            return this.data.isJson ? this.data.json() : this.data.raw;
        }
        catch (e) {
            throw __1.Errors.FileCouldNotBeLoaded(this.path, e.message);
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
//# sourceMappingURL=File.js.map