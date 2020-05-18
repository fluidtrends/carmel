"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginCannotLoad = exports.CommandCannotExecute = exports.CommandAlreadyExists = exports.CommandDoesNotExist = exports.ArgumentIsMissing = exports.DirDoesNotExist = exports.FileCouldNotBeLoaded = exports.FileDoesNotExist = void 0;
exports.FileDoesNotExist = function (file) { return "The " + file + " file does not exit"; };
exports.FileCouldNotBeLoaded = function (file, reason) { return "The " + file + " could not be loaded because " + reason; };
exports.DirDoesNotExist = function (dir) { return "The " + dir + " directory does not exist"; };
exports.ArgumentIsMissing = function (arg) { return "The " + arg + " argument is missing"; };
exports.CommandDoesNotExist = function (name) { return "The " + name + " command does not exist"; };
exports.CommandAlreadyExists = function (name) { return "The " + name + " command already exists"; };
exports.CommandCannotExecute = function (name, reason) { return "The " + name + " command could not execute because " + reason; };
exports.PluginCannotLoad = function (name, reason) { return "The " + name + " plugin cannot load because " + reason; };
//# sourceMappingURL=index.js.map