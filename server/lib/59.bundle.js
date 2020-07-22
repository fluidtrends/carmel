(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/@theia/filesystem/lib/browser/file-tree/file-tree-label-provider.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/lib/browser/file-tree/file-tree-label-provider.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileTreeLabelProvider = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var label_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/label-provider */ "./node_modules/@theia/core/lib/browser/label-provider.js");
var file_tree_1 = __webpack_require__(/*! ./file-tree */ "./node_modules/@theia/filesystem/lib/browser/file-tree/file-tree.js");
var tree_label_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/tree/tree-label-provider */ "./node_modules/@theia/core/lib/browser/tree/tree-label-provider.js");
var FileTreeLabelProvider = /** @class */ (function () {
    function FileTreeLabelProvider() {
    }
    FileTreeLabelProvider.prototype.canHandle = function (element) {
        return file_tree_1.FileStatNode.is(element) ?
            this.treeLabelProvider.canHandle(element) + 1 :
            0;
    };
    FileTreeLabelProvider.prototype.getIcon = function (node) {
        return this.labelProvider.getIcon(node.fileStat);
    };
    FileTreeLabelProvider.prototype.getName = function (node) {
        return this.labelProvider.getName(node.fileStat);
    };
    FileTreeLabelProvider.prototype.getDescription = function (node) {
        return this.labelProvider.getLongName(node.fileStat);
    };
    FileTreeLabelProvider.prototype.affects = function (node, event) {
        return event.affects(node.fileStat);
    };
    __decorate([
        inversify_1.inject(label_provider_1.LabelProvider),
        __metadata("design:type", label_provider_1.LabelProvider)
    ], FileTreeLabelProvider.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(tree_label_provider_1.TreeLabelProvider),
        __metadata("design:type", tree_label_provider_1.TreeLabelProvider)
    ], FileTreeLabelProvider.prototype, "treeLabelProvider", void 0);
    FileTreeLabelProvider = __decorate([
        inversify_1.injectable()
    ], FileTreeLabelProvider);
    return FileTreeLabelProvider;
}());
exports.FileTreeLabelProvider = FileTreeLabelProvider;


/***/ }),

/***/ "./node_modules/@theia/filesystem/lib/browser/filesystem-frontend-module.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/lib/browser/filesystem-frontend-module.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017-2018 TypeFox and others.
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
exports.bindFileResource = void 0;
__webpack_require__(/*! ../../src/browser/style/index.css */ "./node_modules/@theia/filesystem/src/browser/style/index.css");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var common_2 = __webpack_require__(/*! ../common */ "./node_modules/@theia/filesystem/lib/common/index.js");
var filesystem_watcher_protocol_1 = __webpack_require__(/*! ../common/filesystem-watcher-protocol */ "./node_modules/@theia/filesystem/lib/common/filesystem-watcher-protocol.js");
var file_resource_1 = __webpack_require__(/*! ./file-resource */ "./node_modules/@theia/filesystem/lib/browser/file-resource.js");
var filesystem_preferences_1 = __webpack_require__(/*! ./filesystem-preferences */ "./node_modules/@theia/filesystem/lib/browser/filesystem-preferences.js");
var filesystem_watcher_1 = __webpack_require__(/*! ./filesystem-watcher */ "./node_modules/@theia/filesystem/lib/browser/filesystem-watcher.js");
var filesystem_frontend_contribution_1 = __webpack_require__(/*! ./filesystem-frontend-contribution */ "./node_modules/@theia/filesystem/lib/browser/filesystem-frontend-contribution.js");
var filesystem_proxy_factory_1 = __webpack_require__(/*! ./filesystem-proxy-factory */ "./node_modules/@theia/filesystem/lib/browser/filesystem-proxy-factory.js");
var file_upload_service_1 = __webpack_require__(/*! ./file-upload-service */ "./node_modules/@theia/filesystem/lib/browser/file-upload-service.js");
var file_tree_label_provider_1 = __webpack_require__(/*! ./file-tree/file-tree-label-provider */ "./node_modules/@theia/filesystem/lib/browser/file-tree/file-tree-label-provider.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    filesystem_preferences_1.bindFileSystemPreferences(bind);
    bind(filesystem_watcher_protocol_1.FileSystemWatcherServerProxy).toDynamicValue(function (ctx) {
        return browser_1.WebSocketConnectionProvider.createProxy(ctx.container, filesystem_watcher_protocol_1.fileSystemWatcherPath);
    });
    bind(filesystem_watcher_protocol_1.FileSystemWatcherServer).to(filesystem_watcher_protocol_1.ReconnectingFileSystemWatcherServer);
    bind(filesystem_watcher_1.FileSystemWatcher).toSelf().inSingletonScope();
    bind(common_2.FileShouldOverwrite).toDynamicValue(function (context) { return function (file, stat) { return __awaiter(void 0, void 0, void 0, function () {
        var labelProvider, dialog;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    labelProvider = context.container.get(browser_1.LabelProvider);
                    dialog = new browser_1.ConfirmDialog({
                        title: "The file '" + labelProvider.getName(new uri_1.default(file.uri)) + "' has been changed on the file system.",
                        msg: "Do you want to overwrite the changes made to '" + labelProvider.getLongName(new uri_1.default(file.uri)) + "' on the file system?",
                        ok: 'Yes',
                        cancel: 'No'
                    });
                    return [4 /*yield*/, dialog.open()];
                case 1: return [2 /*return*/, !!(_a.sent())];
            }
        });
    }); }; }).inSingletonScope();
    bind(filesystem_proxy_factory_1.FileSystemProxyFactory).toSelf();
    bind(common_2.FileSystem).toDynamicValue(function (ctx) {
        var proxyFactory = ctx.container.get(filesystem_proxy_factory_1.FileSystemProxyFactory);
        return browser_1.WebSocketConnectionProvider.createProxy(ctx.container, common_2.fileSystemPath, proxyFactory);
    }).inSingletonScope();
    bindFileResource(bind);
    bind(file_upload_service_1.FileUploadService).toSelf().inSingletonScope();
    bind(filesystem_frontend_contribution_1.FileSystemFrontendContribution).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).toService(filesystem_frontend_contribution_1.FileSystemFrontendContribution);
    bind(browser_1.FrontendApplicationContribution).toService(filesystem_frontend_contribution_1.FileSystemFrontendContribution);
    bind(file_tree_label_provider_1.FileTreeLabelProvider).toSelf().inSingletonScope();
    bind(browser_1.LabelProviderContribution).toService(file_tree_label_provider_1.FileTreeLabelProvider);
});
function bindFileResource(bind) {
    bind(file_resource_1.FileResourceResolver).toSelf().inSingletonScope();
    bind(common_1.ResourceResolver).toService(file_resource_1.FileResourceResolver);
}
exports.bindFileResource = bindFileResource;


/***/ }),

/***/ "./node_modules/@theia/filesystem/lib/browser/filesystem-proxy-factory.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/lib/browser/filesystem-proxy-factory.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystemProxyFactory = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var proxy_factory_1 = __webpack_require__(/*! @theia/core/lib/common/messaging/proxy-factory */ "./node_modules/@theia/core/lib/common/messaging/proxy-factory.js");
var filesystem_preferences_1 = __webpack_require__(/*! ./filesystem-preferences */ "./node_modules/@theia/filesystem/lib/browser/filesystem-preferences.js");
var FileSystemProxyFactory = /** @class */ (function (_super) {
    __extends(FileSystemProxyFactory, _super);
    function FileSystemProxyFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileSystemProxyFactory.prototype.get = function (target, propertyKey, receiver) {
        var _this = this;
        var property = _super.prototype.get.call(this, target, propertyKey, receiver);
        if (propertyKey !== 'delete') {
            return property;
        }
        var deleteFn = function (uri, options) {
            var opt = __assign({}, options);
            if (opt.moveToTrash === undefined) {
                opt.moveToTrash = _this.preferences['files.enableTrash'];
            }
            return property(uri, opt);
        };
        return deleteFn;
    };
    __decorate([
        inversify_1.inject(filesystem_preferences_1.FileSystemPreferences),
        __metadata("design:type", Object)
    ], FileSystemProxyFactory.prototype, "preferences", void 0);
    FileSystemProxyFactory = __decorate([
        inversify_1.injectable()
    ], FileSystemProxyFactory);
    return FileSystemProxyFactory;
}(proxy_factory_1.JsonRpcProxyFactory));
exports.FileSystemProxyFactory = FileSystemProxyFactory;


/***/ }),

/***/ "./node_modules/@theia/filesystem/src/browser/style/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/@theia/filesystem/src/browser/style/index.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./index.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/filesystem/src/browser/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/filesystem/src/browser/style/file-dialog.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/filesystem/src/browser/style/file-dialog.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2017 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n /*\n  * Open and Save file dialogs\n  */\n\n.dialogContent .theia-FileDialog,\n.dialogContent .theia-SaveFileDialog,\n.dialogContent .theia-ResponsiveFileDialog {\n    height: 500px;\n    width: 500px;\n    border: 1px solid var(--theia-editorWidget-border);\n    background: var(--theia-dropdown-background);\n}\n\n\n@media only screen and (max-height: 700px) {\n    .dialogContent .theia-FileDialog,\n    .dialogContent .theia-SaveFileDialog,\n    .dialogContent .theia-ResponsiveFileDialog {\n        height: 300px;\n    }\n}\n\n.dialogContent .theia-NavigationPanel,\n.dialogContent .theia-FiltersPanel,\n.dialogContent .theia-FileNamePanel {\n    display: block;\n    position: relative;\n    overflow: hidden;\n}\n\n.dialogContent .theia-NavigationPanel,\n.dialogContent .theia-FiltersPanel {\n    min-height: 27px;\n}\n\n.dialogContent .theia-FileNamePanel {\n    height: 31px;\n}\n\n/*\n * Navigation panel items\n */\n\n.dialogContent .theia-NavigationBack,\n.dialogContent .theia-NavigationForward,\n.dialogContent .theia-NavigationHome {\n    position: absolute;\n    top: 0px;\n    line-height: 23px;\n    cursor: pointer;\n    outline: none;\n}\n\n.dialogContent .theia-NavigationBack:focus,\n.dialogContent .theia-NavigationForward:focus,\n.dialogContent .theia-NavigationHome:focus {\n    outline: none;\n    border: none;\n    box-shadow: none;\n}\n\n.dialogContent .theia-NavigationBack {\n    left: auto;\n}\n\n.dialogContent .theia-NavigationForward {\n    left: 21px;\n}\n\n.dialogContent .theia-NavigationHome {\n    left: 41px;\n}\n\n.dialogContent .theia-LocationListPanel {\n    position: absolute;\n    left: 72px;\n    top: 1px;\n}\n\n.dialogContent .theia-LocationList {\n    width: 427px;\n    height: 21px;\n}\n\n/*\n * Filters panel items\n */\n\n.dialogContent .theia-FiltersLabel {\n    position: absolute;\n    left: 1px;\n    top: 0px;\n    line-height: 27px;\n}\n\n.dialogContent .theia-FiltersListPanel {\n    position: absolute;\n    left: 72px;\n    top: 3px;\n}\n\n.dialogContent .theia-FileTreeFiltersList {\n    width: 427px;\n    height: 21px;\n}\n\n/*\n * File name panel items\n */\n\n.dialogContent .theia-FileNameLabel {\n    position: absolute;\n    left: 1px;\n    top: 0px;\n    line-height: 23px;\n}\n\n.dialogContent .theia-FileNameTextField {\n    position: absolute;\n    left: 72px;\n    top: 0px;\n    width: 420px;\n}\n\n/*\n * Control panel items\n */\n\n.dialogContent .theia-ControlPanel {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    margin-bottom: 0px;\n}\n\n.dialogContent .theia-ControlPanel > * {\n    margin-left: 4px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/filesystem/src/browser/style/file-icons.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/filesystem/src/browser/style/file-icons.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2017 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n .theia-file-icons-js {\n    /*\n    Here, the `line-height` ensures that FontAwesome and `file-icons-js` container has the same height.\n    Ideally, it would be 1 em, but since we set the max height above (and other places too) with 0.8\n    multiplier, we use 0.8 em here too.\n     */\n    line-height: 0.8em;\n}\n\n.theia-file-icons-js:before {\n    font-size: calc(var(--theia-content-font-size) * 0.8);\n}\n\n.theia-file-icons-js.file-icon {\n    min-width: var(--theia-icon-size);\n    height: var(--theia-icon-size);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.fa-file:before,\n.fa-folder:before,\n.theia-file-icons-js:before {\n    text-align: center;\n    margin-right: 4px;\n}\n\n.theia-app-sides .theia-file-icons-js {\n    max-height: none;\n    line-height: inherit;\n}\n\n.theia-app-sides .theia-file-icons-js:before {\n    font-size: var(--theia-private-sidebar-icon-size);\n    margin-right: 0px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/filesystem/src/browser/style/index.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/filesystem/src/browser/style/index.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../../css-loader!./file-dialog.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/filesystem/src/browser/style/file-dialog.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../css-loader!./file-icons.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/filesystem/src/browser/style/file-icons.css"), "");

// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2017 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-file-tree-drag-image {\n  position: absolute;\n  /*\n    make sure you don't see it flashing\n     */\n  top: -1000px;\n  font-size: var(--theia-ui-font-size1);\n  display: inline-block;\n  padding: 1px calc(var(--theia-ui-padding)*2);\n  border-radius: 10px;\n\n  background: var(--theia-list-activeSelectionBackground);\n  color: var(--theia-list-activeSelectionForeground);\n  outline: 1px solid var(--theia-contrastActiveBorder);\n  outline-offset: -1px;\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=59.bundle.js.map