(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

/***/ "./node_modules/@theia/filesystem/lib/common/filesystem-utils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@theia/filesystem/lib/common/filesystem-utils.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
exports.FileSystemUtils = void 0;
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var FileSystemUtils;
(function (FileSystemUtils) {
    /**
     * Tildify path, replacing `home` with `~` if user's `home` is present at the beginning of the path.
     * This is a non-operation for Windows.
     *
     * @param resourcePath
     * @param home
     */
    function tildifyPath(resourcePath, home) {
        var path = new common_1.Path(resourcePath);
        var isWindows = path.root && common_1.Path.isDrive(path.root.base);
        if (!isWindows && home && resourcePath.indexOf(home + "/") === 0) {
            return resourcePath.replace(home + "/", '~/');
        }
        return resourcePath;
    }
    FileSystemUtils.tildifyPath = tildifyPath;
    /**
     * Generate unique URI for a given parent which does not collide
     *
     * @param parentUri the `URI` of the parent
     * @param parent the `FileStat` of the parent
     * @param name the resource name
     * @param ext the resource extension
     */
    function generateUniqueResourceURI(parentUri, parent, name, ext) {
        if (ext === void 0) { ext = ''; }
        var children = !parent.children ? [] : parent.children.map(function (child) { return new uri_1.default(child.uri); });
        var index = 1;
        var base = name + ext;
        while (children.some(function (child) { return child.path.base === base; })) {
            index = index + 1;
            base = name + '_' + index + ext;
        }
        return parentUri.resolve(base);
    }
    FileSystemUtils.generateUniqueResourceURI = generateUniqueResourceURI;
})(FileSystemUtils = exports.FileSystemUtils || (exports.FileSystemUtils = {}));


/***/ }),

/***/ "./node_modules/@theia/filesystem/lib/common/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@theia/filesystem/lib/common/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./filesystem */ "./node_modules/@theia/filesystem/lib/common/filesystem.js"), exports);
__exportStar(__webpack_require__(/*! ./filesystem-utils */ "./node_modules/@theia/filesystem/lib/common/filesystem-utils.js"), exports);


/***/ })

}]);
//# sourceMappingURL=71.bundle.js.map