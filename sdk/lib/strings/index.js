"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileDoesNotExist = function (file) { return "The " + file + " file does not exit"; };
exports.FileCouldNotBeLoaded = function (file, reason) { return "The " + file + " could not be loaded because " + reason; };
