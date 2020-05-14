"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirDoesNotExist = exports.FileCouldNotBeLoaded = exports.FileDoesNotExist = void 0;
exports.FileDoesNotExist = function (file) { return "The " + file + " file does not exit"; };
exports.FileCouldNotBeLoaded = function (file, reason) { return "The " + file + " could not be loaded because " + reason; };
exports.DirDoesNotExist = function (dir) { return "The " + dir + " directory does not exit"; };
//# sourceMappingURL=index.js.map