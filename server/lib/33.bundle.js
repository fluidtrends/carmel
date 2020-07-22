(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/@theia/languages/lib/common/language-selector/paths.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@theia/languages/lib/common/language-selector/paths.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
// copied from https://github.com/Microsoft/vscode/blob/bf7ac9201e7a7d01741d4e6e64b5dc9f3197d97b/src/vs/base/common/paths.ts
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/* eslint-disable no-void */
/* eslint-disable no-null/no-null */

Object.defineProperty(exports, "__esModule", { value: true });
exports.isEqualOrParent = exports.getRoot = exports.normalize = exports.extname = exports.basename = exports.nativeSep = exports.sep = void 0;
var os_1 = __webpack_require__(/*! @theia/core/lib/common/os */ "./node_modules/@theia/core/lib/common/os.js");
var strings_1 = __webpack_require__(/*! ./strings */ "./node_modules/@theia/languages/lib/common/language-selector/strings.js");
/**
 * The forward slash path separator.
 */
exports.sep = '/';
/**
 * The native path separator depending on the OS.
 */
exports.nativeSep = os_1.isWindows ? '\\' : '/';
var _posixBadPath = /(\/\.\.?\/)|(\/\.\.?)$|^(\.\.?\/)|(\/\/+)|(\\)/;
var _winBadPath = /(\\\.\.?\\)|(\\\.\.?)$|^(\.\.?\\)|(\\\\+)|(\/)/;
function _isNormal(path, win) {
    return win
        ? !_winBadPath.test(path)
        : !_posixBadPath.test(path);
}
/**
 * @returns the base name of a path.
 */
function basename(path) {
    var idx = ~path.lastIndexOf('/') || ~path.lastIndexOf('\\');
    if (idx === 0) {
        return path;
    }
    else if (~idx === path.length - 1) {
        return basename(path.substring(0, path.length - 1));
    }
    else {
        return path.substr(~idx + 1);
    }
}
exports.basename = basename;
/**
 * @returns `.far` from `boo.far` or the empty string.
 */
function extname(path) {
    path = basename(path);
    var idx = ~path.lastIndexOf('.');
    return idx ? path.substring(~idx) : '';
}
exports.extname = extname;
function normalize(path, toOSPath) {
    if (path === null || path === void 0) {
        return path;
    }
    var len = path.length;
    if (len === 0) {
        return '.';
    }
    var wantsBackslash = os_1.isWindows && toOSPath;
    if (_isNormal(path, wantsBackslash)) {
        return path;
    }
    // eslint-disable-next-line no-shadow
    var sep = wantsBackslash ? '\\' : '/';
    var root = getRoot(path, sep);
    // skip the root-portion of the path
    var start = root.length;
    var skip = false;
    var res = '';
    for (var end = root.length; end <= len; end++) {
        // either at the end or at a path-separator character
        if (end === len || path.charCodeAt(end) === 47 /* Slash */ || path.charCodeAt(end) === 92 /* Backslash */) {
            if (streql(path, start, end, '..')) {
                // skip current and remove parent (if there is already something)
                var prev_start = res.lastIndexOf(sep);
                var prev_part = res.slice(prev_start + 1);
                if ((root || prev_part.length > 0) && prev_part !== '..') {
                    res = prev_start === -1 ? '' : res.slice(0, prev_start);
                    skip = true;
                }
            }
            else if (streql(path, start, end, '.') && (root || res || end < len - 1)) {
                // skip current (if there is already something or if there is more to come)
                skip = true;
            }
            if (!skip) {
                var part = path.slice(start, end);
                if (res !== '' && res[res.length - 1] !== sep) {
                    res += sep;
                }
                res += part;
            }
            start = end + 1;
            skip = false;
        }
    }
    return root + res;
}
exports.normalize = normalize;
function streql(value, start, end, other) {
    return start + other.length === end && value.indexOf(other, start) === start;
}
/**
 * Computes the _root_ this path, like `getRoot('c:\files') === c:\`,
 * `getRoot('files:///files/path') === files:///`,
 * or `getRoot('\\server\shares\path') === \\server\shares\`
 */
// eslint-disable-next-line no-shadow
function getRoot(path, sep) {
    if (sep === void 0) { sep = '/'; }
    if (!path) {
        return '';
    }
    var len = path.length;
    var code = path.charCodeAt(0);
    if (code === 47 /* Slash */ || code === 92 /* Backslash */) {
        code = path.charCodeAt(1);
        if (code === 47 /* Slash */ || code === 92 /* Backslash */) {
            // UNC candidate \\localhost\shares\ddd
            //               ^^^^^^^^^^^^^^^^^^^
            code = path.charCodeAt(2);
            if (code !== 47 /* Slash */ && code !== 92 /* Backslash */) {
                // eslint-disable-next-line no-shadow
                var pos_1 = 3;
                var start = pos_1;
                for (; pos_1 < len; pos_1++) {
                    code = path.charCodeAt(pos_1);
                    if (code === 47 /* Slash */ || code === 92 /* Backslash */) {
                        break;
                    }
                }
                code = path.charCodeAt(pos_1 + 1);
                if (start !== pos_1 && code !== 47 /* Slash */ && code !== 92 /* Backslash */) {
                    pos_1 += 1;
                    for (; pos_1 < len; pos_1++) {
                        code = path.charCodeAt(pos_1);
                        if (code === 47 /* Slash */ || code === 92 /* Backslash */) {
                            return path.slice(0, pos_1 + 1) // consume this separator
                                .replace(/[\\/]/g, sep);
                        }
                    }
                }
            }
        }
        // /user/far
        // ^
        return sep;
    }
    else if ((code >= 65 /* A */ && code <= 90 /* Z */) || (code >= 97 /* a */ && code <= 122 /* z */)) {
        // check for windows drive letter c:\ or c:
        if (path.charCodeAt(1) === 58 /* Colon */) {
            code = path.charCodeAt(2);
            if (code === 47 /* Slash */ || code === 92 /* Backslash */) {
                // C:\fff
                // ^^^
                return path.slice(0, 2) + sep;
            }
            else {
                // C:
                // ^^
                return path.slice(0, 2);
            }
        }
    }
    // check for URI
    // scheme://authority/path
    // ^^^^^^^^^^^^^^^^^^^
    var pos = path.indexOf('://');
    if (pos !== -1) {
        pos += 3; // 3 -> "://".length
        for (; pos < len; pos++) {
            code = path.charCodeAt(pos);
            if (code === 47 /* Slash */ || code === 92 /* Backslash */) {
                return path.slice(0, pos + 1); // consume this separator
            }
        }
    }
    return '';
}
exports.getRoot = getRoot;
function isEqualOrParent(path, candidate, ignoreCase) {
    if (path === candidate) {
        return true;
    }
    if (!path || !candidate) {
        return false;
    }
    if (candidate.length > path.length) {
        return false;
    }
    if (ignoreCase) {
        var beginsWith = strings_1.startsWithIgnoreCase(path, candidate);
        if (!beginsWith) {
            return false;
        }
        if (candidate.length === path.length) {
            return true; // same path, different casing
        }
        var sepOffset = candidate.length;
        if (candidate.charAt(candidate.length - 1) === exports.nativeSep) {
            sepOffset--; // adjust the expected sep offset in case our candidate already ends in separator character
        }
        return path.charAt(sepOffset) === exports.nativeSep;
    }
    if (candidate.charAt(candidate.length - 1) !== exports.nativeSep) {
        candidate += exports.nativeSep;
    }
    return path.indexOf(candidate) === 0;
}
exports.isEqualOrParent = isEqualOrParent;


/***/ }),

/***/ "./node_modules/@theia/languages/lib/common/language-selector/strings.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@theia/languages/lib/common/language-selector/strings.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unescapeInvisibleChars = exports.escapeInvisibleChars = exports.split = exports.startsWithIgnoreCase = exports.escapeRegExpCharacters = exports.equalsIgnoreCase = exports.isUpperAsciiLetter = exports.isLowerAsciiLetter = exports.endsWith = void 0;
/**
 * Determines if haystack ends with needle.
 */
function endsWith(haystack, needle) {
    var diff = haystack.length - needle.length;
    if (diff > 0) {
        return haystack.indexOf(needle, diff) === diff;
    }
    else if (diff === 0) {
        return haystack === needle;
    }
    else {
        return false;
    }
}
exports.endsWith = endsWith;
function isLowerAsciiLetter(code) {
    return code >= 97 /* a */ && code <= 122 /* z */;
}
exports.isLowerAsciiLetter = isLowerAsciiLetter;
function isUpperAsciiLetter(code) {
    return code >= 65 /* A */ && code <= 90 /* Z */;
}
exports.isUpperAsciiLetter = isUpperAsciiLetter;
function isAsciiLetter(code) {
    return isLowerAsciiLetter(code) || isUpperAsciiLetter(code);
}
function equalsIgnoreCase(a, b) {
    var len1 = a ? a.length : 0;
    var len2 = b ? b.length : 0;
    if (len1 !== len2) {
        return false;
    }
    return doEqualsIgnoreCase(a, b);
}
exports.equalsIgnoreCase = equalsIgnoreCase;
function doEqualsIgnoreCase(a, b, stopAt) {
    if (stopAt === void 0) { stopAt = a.length; }
    if (typeof a !== 'string' || typeof b !== 'string') {
        return false;
    }
    for (var i = 0; i < stopAt; i++) {
        var codeA = a.charCodeAt(i);
        var codeB = b.charCodeAt(i);
        if (codeA === codeB) {
            continue;
        }
        // a-z A-Z
        if (isAsciiLetter(codeA) && isAsciiLetter(codeB)) {
            var diff = Math.abs(codeA - codeB);
            if (diff !== 0 && diff !== 32) {
                return false;
            }
        }
        // Any other charcode
        // tslint:disable-next-line:one-line
        else {
            if (String.fromCharCode(codeA).toLowerCase() !== String.fromCharCode(codeB).toLowerCase()) {
                return false;
            }
        }
    }
    return true;
}
/**
 * Escapes regular expression characters in a given string
 */
function escapeRegExpCharacters(value) {
    return value.replace(/[\-\\\{\}\*\+\?\|\^\$\.\[\]\(\)\#]/g, '\\$&');
}
exports.escapeRegExpCharacters = escapeRegExpCharacters;
function startsWithIgnoreCase(str, candidate) {
    var candidateLength = candidate.length;
    if (candidate.length > str.length) {
        return false;
    }
    return doEqualsIgnoreCase(str, candidate, candidateLength);
}
exports.startsWithIgnoreCase = startsWithIgnoreCase;
function split(s, splitter) {
    var start, end;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                start = 0;
                _a.label = 1;
            case 1:
                if (!(start < s.length)) return [3 /*break*/, 3];
                end = s.indexOf(splitter, start);
                if (end === -1) {
                    end = s.length;
                }
                return [4 /*yield*/, s.substring(start, end)];
            case 2:
                _a.sent();
                start = end + splitter.length;
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
exports.split = split;
function escapeInvisibleChars(value) {
    return value.replace(/\n/g, '\\n').replace(/\r/g, '\\r');
}
exports.escapeInvisibleChars = escapeInvisibleChars;
function unescapeInvisibleChars(value) {
    return value.replace(/\\n/g, '\n').replace(/\\r/g, '\r');
}
exports.unescapeInvisibleChars = unescapeInvisibleChars;


/***/ })

}]);
//# sourceMappingURL=33.bundle.js.map