"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackCannotLoad = exports.PluginCannotLoad = exports.CommandCannotExecute = exports.CommandAlreadyExists = exports.CommandDoesNotExist = exports.CommandIsMissing = exports.SessionIsMissing = exports.ProductAlreadyExists = exports.ArgumentIsMissing = exports.DirDoesNotExist = exports.FileCouldNotBeLoaded = exports.FileDoesNotExist = void 0;
var __1 = require("..");
/** @category Errors */
exports.FileDoesNotExist = function (file) { return new Error(__1.Strings.FileDoesNotExistString(file)); };
/** @category Errors */
exports.FileCouldNotBeLoaded = function (file, reason) { return new Error(__1.Strings.FileCouldNotBeLoadedString(file, reason)); };
/** @category Errors */
exports.DirDoesNotExist = function (dir) { return new Error(__1.Strings.DirDoesNotExistString(dir)); };
/** @category Errors */
exports.ArgumentIsMissing = function (arg) { return new Error(__1.Strings.ArgumentIsMissingString(arg)); };
/** @category Errors */
exports.ProductAlreadyExists = function () { return new Error(__1.Strings.ProductAlreadyExistsString()); };
/** @category Errors */
exports.SessionIsMissing = function () { return new Error(__1.Strings.SessionIsMissingString()); };
/** @category Errors */
exports.CommandIsMissing = function () { return new Error(__1.Strings.CommandIsMissingString()); };
/** @category Errors */
exports.CommandDoesNotExist = function (name) { return new Error(__1.Strings.CommandDoesNotExistString(name)); };
/** @category Errors */
exports.CommandAlreadyExists = function (name) { return new Error(__1.Strings.CommandAlreadyExistsString(name)); };
/** @category Errors */
exports.CommandCannotExecute = function (name, reason) { return new Error(__1.Strings.CommandCannotExecuteString(name, reason)); };
/** @category Errors */
exports.PluginCannotLoad = function (name, reason) { return new Error(__1.Strings.PluginCannotLoadString(name, reason)); };
/** @category Errors */
exports.StackCannotLoad = function (name, reason) { return new Error(__1.Strings.StackCannotLoadString(name, reason)); };
//# sourceMappingURL=index.js.map