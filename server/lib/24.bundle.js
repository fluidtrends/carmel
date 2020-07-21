(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/@theia/process/lib/common/shell-command-builder.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@theia/process/lib/common/shell-command-builder.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellCommandBuilder = void 0;
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var shell_quoting_1 = __webpack_require__(/*! ../common/shell-quoting */ "./node_modules/@theia/process/lib/common/shell-quoting.js");
/**
 * Create command lines ready to be sent to a shell's stdin for evaluation.
 */
var ShellCommandBuilder = /** @class */ (function () {
    function ShellCommandBuilder() {
    }
    /**
     * Constructs a command line to run in a shell. The shell could be
     * re-used/long-lived, this means we cannot spawn a new process with a nice
     * and fresh environment, we need to encode environment modifications into
     * the returned command.
     *
     * Inspired by VS Code implementation, see:
     * https://github.com/microsoft/vscode/blob/f395cac4fff0721a8099126172c01411812bcb4a/src/vs/workbench/contrib/debug/node/terminals.ts#L79
     *
     * @param hostProcessInfo the host terminal process infos
     * @param commandOptions program to execute in the host terminal
     */
    ShellCommandBuilder.prototype.buildCommand = function (hostProcessInfo, commandOptions) {
        var e_1, _a;
        var host = hostProcessInfo && hostProcessInfo.executable;
        var cwd = commandOptions.cwd;
        var args = commandOptions.args.map(function (value) { return ({
            value: value,
            quoting: "strong" /* Strong */,
        }); });
        var env = [];
        if (commandOptions.env) {
            try {
                for (var _b = __values(Object.keys(commandOptions.env)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    env.push([key, commandOptions.env[key]]);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        if (host) {
            if (/(bash|wsl)(.exe)?$/.test(host)) {
                return this.buildForBash(args, cwd, env);
            }
            else if (/(ps|pwsh|powershell)(.exe)?$/i.test(host)) {
                return this.buildForPowershell(args, cwd, env);
            }
            else if (/cmd(.exe)?$/i.test(host)) {
                return this.buildForCmd(args, cwd, env);
            }
        }
        return this.buildForDefault(args, cwd, env);
    };
    ShellCommandBuilder.prototype.buildForBash = function (args, cwd, env) {
        var e_2, _a;
        var command = '';
        if (cwd) {
            command += "cd " + shell_quoting_1.BashQuotingFunctions.strong(cwd) + " && ";
        }
        if (env) {
            command += 'env';
            try {
                for (var env_1 = __values(env), env_1_1 = env_1.next(); !env_1_1.done; env_1_1 = env_1.next()) {
                    var _b = __read(env_1_1.value, 2), key = _b[0], value = _b[1];
                    // eslint-disable-next-line no-null/no-null
                    if (value === null) {
                        command += " -u " + shell_quoting_1.BashQuotingFunctions.strong(key);
                    }
                    else {
                        command += " " + shell_quoting_1.BashQuotingFunctions.strong(key + "=" + value);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (env_1_1 && !env_1_1.done && (_a = env_1.return)) _a.call(env_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            command += ' ';
        }
        command += shell_quoting_1.createShellCommandLine(args, shell_quoting_1.BashQuotingFunctions);
        return command;
    };
    ShellCommandBuilder.prototype.buildForPowershell = function (args, cwd, env) {
        var e_3, _a;
        var command = '';
        if (cwd) {
            command += "cd " + shell_quoting_1.PowershellQuotingFunctions.strong(cwd) + "; ";
        }
        if (env) {
            try {
                for (var env_2 = __values(env), env_2_1 = env_2.next(); !env_2_1.done; env_2_1 = env_2.next()) {
                    var _b = __read(env_2_1.value, 2), key = _b[0], value = _b[1];
                    // Powershell requires special quoting when dealing with
                    // environment variable names.
                    var quotedKey = key
                        .replace(/`/g, '````')
                        .replace(/\?/g, '``?');
                    // eslint-disable-next-line no-null/no-null
                    if (value === null) {
                        command += "Remove-Item ${env:" + quotedKey + "}; ";
                    }
                    else {
                        command += "${env:" + quotedKey + "}=" + shell_quoting_1.PowershellQuotingFunctions.strong(value) + "; ";
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (env_2_1 && !env_2_1.done && (_a = env_2.return)) _a.call(env_2);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        command += '& ' + shell_quoting_1.createShellCommandLine(args, shell_quoting_1.PowershellQuotingFunctions);
        return command;
    };
    ShellCommandBuilder.prototype.buildForCmd = function (args, cwd, env) {
        var e_4, _a;
        var command = '';
        if (cwd) {
            command += "cd " + shell_quoting_1.CmdQuotingFunctions.strong(cwd) + " && ";
        }
        if (env) {
            command += 'cmd /C "';
            try {
                for (var env_3 = __values(env), env_3_1 = env_3.next(); !env_3_1.done; env_3_1 = env_3.next()) {
                    var _b = __read(env_3_1.value, 2), key = _b[0], value = _b[1];
                    // eslint-disable-next-line no-null/no-null
                    if (value === null) {
                        command += "set " + shell_quoting_1.CmdQuotingFunctions.strong(key) + "=\"\" && ";
                    }
                    else {
                        command += "set " + shell_quoting_1.CmdQuotingFunctions.strong(key + "=" + value) + " && ";
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (env_3_1 && !env_3_1.done && (_a = env_3.return)) _a.call(env_3);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        command += shell_quoting_1.createShellCommandLine(args, shell_quoting_1.CmdQuotingFunctions);
        if (env) {
            command += '"';
        }
        return command;
    };
    ShellCommandBuilder.prototype.buildForDefault = function (args, cwd, env) {
        return this.buildForBash(args, cwd, env);
    };
    ShellCommandBuilder = __decorate([
        inversify_1.injectable()
    ], ShellCommandBuilder);
    return ShellCommandBuilder;
}());
exports.ShellCommandBuilder = ShellCommandBuilder;


/***/ }),

/***/ "./node_modules/@theia/process/lib/common/shell-quoting.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@theia/process/lib/common/shell-quoting.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowershellQuotingFunctions = exports.CmdQuotingFunctions = exports.BashQuotingFunctions = exports.escapeForShell = exports.createShellCommandLine = void 0;
/**
 * Converts a list of args into an escaped shell command.
 *
 * There are two main use cases when handling command/arguments for a shell:
 * 1. User already wrote the escaped commandline, then just use that.
 * 2. User wants a specific process to be invoked with some arguments.
 *
 * The `createShellCommandLine` function is useful for the latter.
 *
 * @param args Standard list of spawn/exec arguments, first item is the command.
 * @param quotingFunctions Collection of functions to process arguments.
 */
function createShellCommandLine(args, quotingFunctions) {
    return args.map(function (arg) { return escapeForShell(arg, quotingFunctions); }).join(' ');
}
exports.createShellCommandLine = createShellCommandLine;
/**
 * Escape (or quote) a given input.
 *
 * @param arg Input to escape.
 * @param quotingFunctions Collection of functions to process the given `arg`.
 * @param quotingType Override the quoting type specified by the given `arg`.
 */
function escapeForShell(arg, quotingFunctions, quotingType) {
    var value;
    var quoting = quotingType;
    if (typeof arg === 'string') {
        if (!quoting) {
            return arg;
        }
        value = arg;
    }
    else {
        if (!quoting) {
            quoting = arg.quoting;
        }
        value = arg.value;
    }
    if (quotingFunctions && typeof quotingFunctions[quoting] === 'function') {
        return quotingFunctions[quoting](value);
    }
    return value;
}
exports.escapeForShell = escapeForShell;
exports.BashQuotingFunctions = {
    characters: {
        needQuotes: '()',
        escape: '\\',
        strong: '\'',
        weak: '"',
    },
    escape: function (arg) {
        return arg
            .replace(/[\s\\|(){}<>$&;"']/g, '\\$&');
    },
    strong: function (arg) {
        // ('+) becomes ('"'+"')
        return "'" + arg
            .replace(/'+/g, '\'"$&"\'') + "'";
    },
    weak: function (arg) {
        return "\"" + arg
            // Escape escape-characters.
            .replace(/\\"/g, '\\\\"')
            // Escape user-specified double-quotes.
            .replace(/"/g, '\\"')
            // Escape trailing (\), we don't want the user to escape our last quote.
            .replace(/\\$/g, '\\\\') + "\"";
    },
};
exports.CmdQuotingFunctions = {
    characters: {
        weak: '"',
    },
    escape: function (arg) {
        return arg
            // Escape forbidden characters (see: cmd /?).
            .replace(/[%&<>()@^|]/g, '^$&')
            // Some characters must be escaped using `\`.
            .replace(/[\\"]/g, '\\$&')
            // Double-quote whitespaces, else we cannot escape it.
            .replace(/\s+/g, '"$&"');
    },
    strong: function (arg) {
        return this.weak(arg)
            // Try to prevent variable expansion.
            .replace(/%/g, '"%"');
    },
    weak: function (arg) {
        return "\"" + arg
            // Escape double quotes.
            .replace(/\\"/g, '\\\\"')
            .replace(/"/g, '\\"')
            // Escape forbidden characters (see: cmd /?)
            .replace(/[&<>()@^|]/g, '^$&')
            // Escape trailing backslash, we don't want the user to escape our last quote.
            .replace(/\\$/g, '\\\\')
            // Escape line returns
            .replace(/\r?\n/g, '^$&') + "\"";
    },
};
exports.PowershellQuotingFunctions = {
    characters: {
        needQuotes: '()',
        escape: '`',
        strong: '\'',
        weak: '"',
    },
    escape: function (arg) {
        return arg.replace(/[`|{}()<>;"' ]/g, '`$&');
    },
    strong: function (arg) {
        // In powershell, one must write ('') for a single quote to be displayed
        // within a single quoted string.
        return "'" + arg
            .replace(/'/g, '\'\'') + "'";
    },
    weak: function (arg) {
        return "\"" + arg
            // Escape escape-characters.
            .replace(/`"/g, '``"')
            // Escape user-specified backticks.
            .replace(/"/g, '`"')
            // Escape trailing (`), we don't want the user to escape our last quote.
            .replace(/`$/g, '``') + "\"";
    },
};


/***/ })

}]);
//# sourceMappingURL=24.bundle.js.map