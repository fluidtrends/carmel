"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackCannotLoad = exports.PluginCannotLoad = exports.CommandCannotExecute = exports.CommandAlreadyExists = exports.CommandDoesNotExist = exports.ArgumentIsMissing = exports.DirDoesNotExist = exports.FileCouldNotBeLoaded = exports.FileDoesNotExist = void 0;
var __1 = require("..");
exports.FileDoesNotExist = function (file) { return new Error(__1.Strings.FileDoesNotExist(file)); };
exports.FileCouldNotBeLoaded = function (file, reason) { return new Error(__1.Strings.FileCouldNotBeLoaded(file, reason)); };
exports.DirDoesNotExist = function (dir) { return new Error(__1.Strings.DirDoesNotExist(dir)); };
exports.ArgumentIsMissing = function (arg) { return new Error(__1.Strings.ArgumentIsMissing(arg)); };
exports.CommandDoesNotExist = function (name) { return new Error(__1.Strings.CommandDoesNotExist(name)); };
exports.CommandAlreadyExists = function (name) { return new Error(__1.Strings.CommandAlreadyExists(name)); };
exports.CommandCannotExecute = function (name, reason) { return new Error(__1.Strings.CommandCannotExecute(name, reason)); };
exports.PluginCannotLoad = function (name, reason) { return new Error(__1.Strings.PluginCannotLoad(name, reason)); };
exports.StackCannotLoad = function (name, reason) { return new Error(__1.Strings.StackCannotLoad(name, reason)); };
//# sourceMappingURL=index.js.map