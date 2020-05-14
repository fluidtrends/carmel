"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirDoesNotExist = exports.FileCouldNotBeLoaded = exports.FileDoesNotExist = void 0;
var __1 = require("..");
exports.FileDoesNotExist = function (file) { return new Error(__1.Strings.FileDoesNotExist(file)); };
exports.FileCouldNotBeLoaded = function (file, reason) { return new Error(__1.Strings.FileCouldNotBeLoaded(file, reason)); };
exports.DirDoesNotExist = function (dir) { return new Error(__1.Strings.DirDoesNotExist(dir)); };
//# sourceMappingURL=index.js.map