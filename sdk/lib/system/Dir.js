"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dir = void 0;
var fs_extra_1 = __importDefault(require("fs-extra"));
var path_1 = __importDefault(require("path"));
var __1 = require("..");
/**
 *
 * @category System
 */
var Dir = /** @class */ (function () {
    function Dir(path) {
        this._path = path;
    }
    Object.defineProperty(Dir.prototype, "path", {
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dir.prototype, "exists", {
        get: function () {
            return this.path !== undefined && fs_extra_1.default.existsSync(path_1.default.resolve(this.path));
        },
        enumerable: false,
        configurable: true
    });
    Dir.prototype.dir = function (dirpath) {
        return this.exists ? new Dir(path_1.default.resolve(this.path, dirpath)) : undefined;
    };
    Dir.prototype.file = function (filepath) {
        return this.exists ? new __1.File(path_1.default.resolve(this.path, filepath)) : undefined;
    };
    Dir.prototype.make = function () {
        this.exists || (this.path && fs_extra_1.default.mkdirsSync(this.path));
        return this.exists ? this : undefined;
    };
    Dir.prototype.link = function (dir) {
        if (this.exists)
            return this;
        if (!this.path || !dir || !dir.exists)
            return undefined;
        fs_extra_1.default.existsSync(path_1.default.dirname(this.path)) || fs_extra_1.default.mkdirsSync(path_1.default.dirname(this.path));
        fs_extra_1.default.symlinkSync(dir.path, this.path, 'dir');
        return this.exists ? this : undefined;
    };
    Dir.prototype.copy = function (dir) {
        if (dir.exists)
            return dir;
        fs_extra_1.default.existsSync(path_1.default.dirname(dir.path)) || fs_extra_1.default.mkdirsSync(path_1.default.dirname(dir.path));
        fs_extra_1.default.copySync(this.path, dir.path);
        return dir.exists ? dir : undefined;
    };
    Object.defineProperty(Dir.prototype, "dirs", {
        get: function () {
            var _this = this;
            if (!this.exists) {
                return [];
            }
            return fs_extra_1.default.readdirSync(this.path).filter(function (d) { return fs_extra_1.default.lstatSync(path_1.default.resolve(_this.path, d)).isDirectory(); });
        },
        enumerable: false,
        configurable: true
    });
    return Dir;
}());
exports.Dir = Dir;
//# sourceMappingURL=Dir.js.map