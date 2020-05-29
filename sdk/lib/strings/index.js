"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackCannotLoadString = exports.PluginCannotLoadString = exports.CommandCannotExecuteString = exports.CommandAlreadyExistsString = exports.CommandDoesNotExistString = exports.CommandIsMissingString = exports.WorkspaceIsMissingString = exports.ProductIsNotReadyString = exports.StackTargetScriptIsMissingString = exports.TargetNotSupportedString = exports.ProductIsMissingString = exports.SessionIsMissingString = exports.ArgumentIsMissingString = exports.DirDoesNotExistString = exports.FileCouldNotBeLoadedString = exports.FileDoesNotExistString = void 0;
/** @category Strings */
exports.FileDoesNotExistString = function (file) { return "the " + file + " file does not exit"; };
/** @category Strings */
exports.FileCouldNotBeLoadedString = function (file, reason) { return "the " + file + " could not be loaded because " + reason; };
/** @category Strings */
exports.DirDoesNotExistString = function (dir) { return "the " + dir + " directory does not exist"; };
/** @category Strings */
exports.ArgumentIsMissingString = function (arg) { return "the " + arg + " argument is missing"; };
/** @category Strings */
exports.SessionIsMissingString = function () { return "the session is missing"; };
/** @category Strings */
exports.ProductIsMissingString = function () { return "the product is missing"; };
/** @category Strings */
exports.TargetNotSupportedString = function (target) { return "the target is not supported"; };
/** @category Strings */
exports.StackTargetScriptIsMissingString = function (target, name) { return "the required " + target + "/" + name + " stack script is missing"; };
/** @category Strings */
exports.ProductIsNotReadyString = function () { return "the product is not ready yet"; };
/** @category Strings */
exports.WorkspaceIsMissingString = function () { return "the workspace is missing"; };
/** @category Strings */
exports.CommandIsMissingString = function () { return "the command is missing"; };
/** @category Strings */
exports.CommandDoesNotExistString = function (name) { return "the " + name + " command does not exist"; };
/** @category Strings */
exports.CommandAlreadyExistsString = function (name) { return "the " + name + " command already exists"; };
/** @category Strings */
exports.CommandCannotExecuteString = function (name, reason) { return "the " + name + " command could not execute because " + reason; };
/** @category Strings */
exports.PluginCannotLoadString = function (name, reason) { return "the " + name + " plugin cannot load because " + reason; };
/** @category Strings */
exports.StackCannotLoadString = function (name, reason) { return "the " + name + " stack cannot load because " + reason; };
//# sourceMappingURL=index.js.map