"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackCannotLoadString = exports.PluginCannotLoadString = exports.CommandCannotExecuteString = exports.CommandAlreadyExistsString = exports.CommandDoesNotExistString = exports.CommandIsMissingString = exports.WorkspaceIsMissingString = exports.ProductIsNotReadyString = exports.ProductIsMissingString = exports.SessionIsMissingString = exports.ArgumentIsMissingString = exports.DirDoesNotExistString = exports.FileCouldNotBeLoadedString = exports.FileDoesNotExistString = void 0;
/** @category Strings */
exports.FileDoesNotExistString = function (file) { return "The " + file + " file does not exit"; };
/** @category Strings */
exports.FileCouldNotBeLoadedString = function (file, reason) { return "The " + file + " could not be loaded because " + reason; };
/** @category Strings */
exports.DirDoesNotExistString = function (dir) { return "The " + dir + " directory does not exist"; };
/** @category Strings */
exports.ArgumentIsMissingString = function (arg) { return "The " + arg + " argument is missing"; };
/** @category Strings */
exports.SessionIsMissingString = function () { return "The session is missing"; };
/** @category Strings */
exports.ProductIsMissingString = function () { return "The product is missing"; };
/** @category Strings */
exports.ProductIsNotReadyString = function () { return "The product is not ready yet"; };
/** @category Strings */
exports.WorkspaceIsMissingString = function () { return "The workspace is missing"; };
/** @category Strings */
exports.CommandIsMissingString = function () { return "The command is missing"; };
/** @category Strings */
exports.CommandDoesNotExistString = function (name) { return "The " + name + " command does not exist"; };
/** @category Strings */
exports.CommandAlreadyExistsString = function (name) { return "The " + name + " command already exists"; };
/** @category Strings */
exports.CommandCannotExecuteString = function (name, reason) { return "The " + name + " command could not execute because " + reason; };
/** @category Strings */
exports.PluginCannotLoadString = function (name, reason) { return "The " + name + " plugin cannot load because " + reason; };
/** @category Strings */
exports.StackCannotLoadString = function (name, reason) { return "The " + name + " stack cannot load because " + reason; };
//# sourceMappingURL=index.js.map