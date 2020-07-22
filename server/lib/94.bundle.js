(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[94],{

/***/ "./node_modules/@theia/process/lib/common/process-common-module.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@theia/process/lib/common/process-common-module.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var shell_command_builder_1 = __webpack_require__(/*! ./shell-command-builder */ "./node_modules/@theia/process/lib/common/shell-command-builder.js");
exports.default = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    bind(shell_command_builder_1.ShellCommandBuilder).toSelf().inSingletonScope();
});


/***/ })

}]);
//# sourceMappingURL=94.bundle.js.map