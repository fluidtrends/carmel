(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-contribution.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-contribution.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallHierarchyContribution = exports.CallHierarchyCommands = exports.CALL_HIERARCHY_LABEL = exports.CALL_HIERARCHY_TOGGLE_COMMAND_ID = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var callhierarchy_1 = __webpack_require__(/*! ./callhierarchy */ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy.js");
var current_editor_access_1 = __webpack_require__(/*! ./current-editor-access */ "./node_modules/@theia/callhierarchy/lib/browser/current-editor-access.js");
var callhierarchy_service_1 = __webpack_require__(/*! ./callhierarchy-service */ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-service.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
exports.CALL_HIERARCHY_TOGGLE_COMMAND_ID = 'callhierarchy:toggle';
exports.CALL_HIERARCHY_LABEL = 'Call Hierarchy';
var CallHierarchyCommands;
(function (CallHierarchyCommands) {
    CallHierarchyCommands.OPEN = {
        id: 'callhierarchy:open',
        label: 'Open Call Hierarchy'
    };
})(CallHierarchyCommands = exports.CallHierarchyCommands || (exports.CallHierarchyCommands = {}));
var CallHierarchyContribution = /** @class */ (function (_super) {
    __extends(CallHierarchyContribution, _super);
    function CallHierarchyContribution() {
        return _super.call(this, {
            widgetId: callhierarchy_1.CALLHIERARCHY_ID,
            widgetName: exports.CALL_HIERARCHY_LABEL,
            defaultWidgetOptions: {
                area: 'bottom'
            },
            toggleCommandId: exports.CALL_HIERARCHY_TOGGLE_COMMAND_ID,
            toggleKeybinding: 'ctrlcmd+shift+f1'
        }) || this;
    }
    CallHierarchyContribution.prototype.isCallHierarchyAvailable = function () {
        var selection = this.editorAccess.getSelection();
        var languageId = this.editorAccess.getLanguageId();
        return !!selection && !!languageId && !!this.callHierarchyServiceProvider.get(languageId, new uri_1.default(selection.uri));
    };
    CallHierarchyContribution.prototype.openView = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var widget, selection, languageId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.openView.call(this, args)];
                    case 1:
                        widget = _a.sent();
                        selection = this.editorAccess.getSelection();
                        languageId = this.editorAccess.getLanguageId();
                        widget.initializeModel(selection, languageId);
                        return [2 /*return*/, widget];
                }
            });
        });
    };
    CallHierarchyContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(CallHierarchyCommands.OPEN, {
            execute: function () { return _this.openView({
                toggle: false,
                activate: true
            }); },
            isEnabled: this.isCallHierarchyAvailable.bind(this)
        });
        _super.prototype.registerCommands.call(this, commands);
    };
    CallHierarchyContribution.prototype.registerMenus = function (menus) {
        var menuPath = __spread(browser_2.EDITOR_CONTEXT_MENU, ['navigation']);
        menus.registerMenuAction(menuPath, {
            commandId: CallHierarchyCommands.OPEN.id,
            label: exports.CALL_HIERARCHY_LABEL
        });
        _super.prototype.registerMenus.call(this, menus);
    };
    CallHierarchyContribution.prototype.registerKeybindings = function (keybindings) {
        _super.prototype.registerKeybindings.call(this, keybindings);
        keybindings.registerKeybinding({
            command: CallHierarchyCommands.OPEN.id,
            keybinding: 'ctrlcmd+f1'
        });
    };
    __decorate([
        inversify_1.inject(current_editor_access_1.CurrentEditorAccess),
        __metadata("design:type", current_editor_access_1.CurrentEditorAccess)
    ], CallHierarchyContribution.prototype, "editorAccess", void 0);
    __decorate([
        inversify_1.inject(callhierarchy_service_1.CallHierarchyServiceProvider),
        __metadata("design:type", callhierarchy_service_1.CallHierarchyServiceProvider)
    ], CallHierarchyContribution.prototype, "callHierarchyServiceProvider", void 0);
    CallHierarchyContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], CallHierarchyContribution);
    return CallHierarchyContribution;
}(browser_1.AbstractViewContribution));
exports.CallHierarchyContribution = CallHierarchyContribution;


/***/ }),

/***/ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-frontend-module.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-frontend-module.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var callhierarchy_contribution_1 = __webpack_require__(/*! ./callhierarchy-contribution */ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-contribution.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var callhierarchy_service_1 = __webpack_require__(/*! ./callhierarchy-service */ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-service.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var callhierarchy_1 = __webpack_require__(/*! ./callhierarchy */ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy.js");
var callhierarchy_tree_1 = __webpack_require__(/*! ./callhierarchy-tree */ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-tree/index.js");
var current_editor_access_1 = __webpack_require__(/*! ./current-editor-access */ "./node_modules/@theia/callhierarchy/lib/browser/current-editor-access.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
__webpack_require__(/*! ../../src/browser/style/index.css */ "./node_modules/@theia/callhierarchy/src/browser/style/index.css");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(current_editor_access_1.CurrentEditorAccess).toSelf().inSingletonScope();
    common_1.bindContributionProvider(bind, callhierarchy_service_1.CallHierarchyService);
    bind(callhierarchy_service_1.CallHierarchyServiceProvider).to(callhierarchy_service_1.CallHierarchyServiceProvider).inSingletonScope();
    browser_1.bindViewContribution(bind, callhierarchy_contribution_1.CallHierarchyContribution);
    bind(browser_1.WidgetFactory).toDynamicValue(function (context) { return ({
        id: callhierarchy_1.CALLHIERARCHY_ID,
        createWidget: function () { return callhierarchy_tree_1.createHierarchyTreeWidget(context.container); }
    }); });
});


/***/ }),

/***/ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-service.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-service.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
exports.CallHierarchyServiceProvider = exports.CallHierarchyService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var language_selector_1 = __webpack_require__(/*! @theia/languages/lib/common/language-selector */ "./node_modules/@theia/languages/lib/common/language-selector/index.js");
exports.CallHierarchyService = Symbol('CallHierarchyService');
var CallHierarchyServiceProvider = /** @class */ (function () {
    function CallHierarchyServiceProvider() {
        this.services = [];
    }
    CallHierarchyServiceProvider.prototype.init = function () {
        this.services = this.services.concat(this.contributions.getContributions());
    };
    CallHierarchyServiceProvider.prototype.get = function (languageId, uri) {
        return this.services.sort(function (left, right) {
            return language_selector_1.score(right.selector, uri.scheme, uri.path.toString(), languageId, true) - language_selector_1.score(left.selector, uri.scheme, uri.path.toString(), languageId, true);
        })[0];
    };
    CallHierarchyServiceProvider.prototype.add = function (service) {
        this.services.push(service);
        var that = this;
        return {
            dispose: function () {
                that.remove(service);
            }
        };
    };
    CallHierarchyServiceProvider.prototype.remove = function (service) {
        var length = this.services.length;
        this.services = this.services.filter(function (value) { return value !== service; });
        return length !== this.services.length;
    };
    __decorate([
        inversify_1.inject(common_1.ContributionProvider),
        inversify_1.named(exports.CallHierarchyService),
        __metadata("design:type", Object)
    ], CallHierarchyServiceProvider.prototype, "contributions", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CallHierarchyServiceProvider.prototype, "init", null);
    CallHierarchyServiceProvider = __decorate([
        inversify_1.injectable()
    ], CallHierarchyServiceProvider);
    return CallHierarchyServiceProvider;
}());
exports.CallHierarchyServiceProvider = CallHierarchyServiceProvider;


/***/ }),

/***/ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-tree/callhierarchy-tree-container.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-tree/callhierarchy-tree-container.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
exports.createHierarchyTreeWidget = void 0;
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var callhierarchy_tree_1 = __webpack_require__(/*! ./callhierarchy-tree */ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-tree/callhierarchy-tree.js");
var callhierarchy_tree_model_1 = __webpack_require__(/*! ./callhierarchy-tree-model */ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-tree/callhierarchy-tree-model.js");
var callhierarchy_tree_widget_1 = __webpack_require__(/*! ./callhierarchy-tree-widget */ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-tree/callhierarchy-tree-widget.js");
function createHierarchyTreeContainer(parent) {
    var child = browser_1.createTreeContainer(parent);
    child.unbind(browser_1.TreeImpl);
    child.bind(callhierarchy_tree_1.CallHierarchyTree).toSelf();
    child.rebind(browser_1.Tree).toService(callhierarchy_tree_1.CallHierarchyTree);
    child.unbind(browser_1.TreeModelImpl);
    child.bind(callhierarchy_tree_model_1.CallHierarchyTreeModel).toSelf();
    child.rebind(browser_1.TreeModel).toService(callhierarchy_tree_model_1.CallHierarchyTreeModel);
    child.bind(callhierarchy_tree_widget_1.CallHierarchyTreeWidget).toSelf();
    child.rebind(browser_1.TreeWidget).toService(callhierarchy_tree_widget_1.CallHierarchyTreeWidget);
    return child;
}
function createHierarchyTreeWidget(parent) {
    return createHierarchyTreeContainer(parent).get(callhierarchy_tree_widget_1.CallHierarchyTreeWidget);
}
exports.createHierarchyTreeWidget = createHierarchyTreeWidget;


/***/ }),

/***/ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-tree/callhierarchy-tree-model.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-tree/callhierarchy-tree-model.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
exports.CallHierarchyTreeModel = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var callhierarchy_tree_1 = __webpack_require__(/*! ./callhierarchy-tree */ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-tree/callhierarchy-tree.js");
var callhierarchy_service_1 = __webpack_require__(/*! ../callhierarchy-service */ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-service.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var cancellation_1 = __webpack_require__(/*! @theia/core/lib/common/cancellation */ "./node_modules/@theia/core/lib/common/cancellation.js");
var CallHierarchyTreeModel = /** @class */ (function (_super) {
    __extends(CallHierarchyTreeModel, _super);
    function CallHierarchyTreeModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CallHierarchyTreeModel.prototype.getTree = function () {
        return this.tree;
    };
    Object.defineProperty(CallHierarchyTreeModel.prototype, "languageId", {
        get: function () {
            return this._languageId;
        },
        enumerable: false,
        configurable: true
    });
    CallHierarchyTreeModel.prototype.initializeCallHierarchy = function (languageId, uri, position) {
        return __awaiter(this, void 0, void 0, function () {
            var callHierarchyService, cancellationSource, rootDefinition, rootNode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.tree.root = undefined;
                        this.tree.callHierarchyService = undefined;
                        this._languageId = languageId;
                        if (!(languageId && uri && position)) return [3 /*break*/, 2];
                        callHierarchyService = this.callHierarchyServiceProvider.get(languageId, new uri_1.default(uri));
                        if (!callHierarchyService) return [3 /*break*/, 2];
                        this.tree.callHierarchyService = callHierarchyService;
                        cancellationSource = new cancellation_1.CancellationTokenSource();
                        return [4 /*yield*/, callHierarchyService.getRootDefinition(uri, position, cancellationSource.token)];
                    case 1:
                        rootDefinition = _a.sent();
                        if (rootDefinition) {
                            rootNode = callhierarchy_tree_1.DefinitionNode.create(rootDefinition, undefined);
                            this.tree.root = rootNode;
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    CallHierarchyTreeModel.prototype.doOpenNode = function (node) {
        // do nothing (in particular do not expand the node)
    };
    __decorate([
        inversify_1.inject(callhierarchy_tree_1.CallHierarchyTree),
        __metadata("design:type", callhierarchy_tree_1.CallHierarchyTree)
    ], CallHierarchyTreeModel.prototype, "tree", void 0);
    __decorate([
        inversify_1.inject(callhierarchy_service_1.CallHierarchyServiceProvider),
        __metadata("design:type", callhierarchy_service_1.CallHierarchyServiceProvider)
    ], CallHierarchyTreeModel.prototype, "callHierarchyServiceProvider", void 0);
    CallHierarchyTreeModel = __decorate([
        inversify_1.injectable()
    ], CallHierarchyTreeModel);
    return CallHierarchyTreeModel;
}(browser_1.TreeModelImpl));
exports.CallHierarchyTreeModel = CallHierarchyTreeModel;


/***/ }),

/***/ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-tree/callhierarchy-tree-widget.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-tree/callhierarchy-tree-widget.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallHierarchyTreeWidget = exports.DEFINITION_ICON_CLASS = exports.DEFINITION_NODE_CLASS = exports.HIERARCHY_TREE_CLASS = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var label_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/label-provider */ "./node_modules/@theia/core/lib/browser/label-provider.js");
var callhierarchy_tree_1 = __webpack_require__(/*! ./callhierarchy-tree */ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-tree/callhierarchy-tree.js");
var callhierarchy_tree_model_1 = __webpack_require__(/*! ./callhierarchy-tree-model */ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-tree/callhierarchy-tree-model.js");
var callhierarchy_1 = __webpack_require__(/*! ../callhierarchy */ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var vscode_languageserver_types_1 = __webpack_require__(/*! vscode-languageserver-types */ "./node_modules/vscode-languageserver-types/lib/esm/main.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
exports.HIERARCHY_TREE_CLASS = 'theia-CallHierarchyTree';
exports.DEFINITION_NODE_CLASS = 'theia-CallHierarchyTreeNode';
exports.DEFINITION_ICON_CLASS = 'theia-CallHierarchyTreeNodeIcon';
var CallHierarchyTreeWidget = /** @class */ (function (_super) {
    __extends(CallHierarchyTreeWidget, _super);
    function CallHierarchyTreeWidget(props, model, contextMenuRenderer, labelProvider, editorManager) {
        var _this = _super.call(this, props, model, contextMenuRenderer) || this;
        _this.props = props;
        _this.model = model;
        _this.labelProvider = labelProvider;
        _this.editorManager = editorManager;
        _this.id = callhierarchy_1.CALLHIERARCHY_ID;
        _this.title.label = 'Call Hierarchy';
        _this.title.caption = 'Call Hierarchy';
        _this.title.iconClass = 'fa call-hierarchy-tab-icon';
        _this.title.closable = true;
        _this.addClass(exports.HIERARCHY_TREE_CLASS);
        _this.toDispose.push(_this.model.onSelectionChanged(function (selection) {
            var node = selection[0];
            if (node) {
                _this.openEditor(node, true);
            }
        }));
        _this.toDispose.push(_this.model.onOpenNode(function (node) {
            _this.openEditor(node, false);
        }));
        _this.toDispose.push(_this.labelProvider.onDidChange(function () { return _this.update(); }));
        return _this;
    }
    CallHierarchyTreeWidget.prototype.initializeModel = function (selection, languageId) {
        this.model.initializeCallHierarchy(languageId, selection ? selection.uri : undefined, selection ? selection.range.start : undefined);
    };
    CallHierarchyTreeWidget.prototype.createNodeClassNames = function (node, props) {
        var classNames = _super.prototype.createNodeClassNames.call(this, node, props);
        if (callhierarchy_tree_1.DefinitionNode.is(node)) {
            classNames.push(exports.DEFINITION_NODE_CLASS);
        }
        return classNames;
    };
    CallHierarchyTreeWidget.prototype.createNodeAttributes = function (node, props) {
        var elementAttrs = _super.prototype.createNodeAttributes.call(this, node, props);
        return __assign({}, elementAttrs);
    };
    CallHierarchyTreeWidget.prototype.renderTree = function (model) {
        return _super.prototype.renderTree.call(this, model)
            || React.createElement("div", { className: 'theia-widget-noInfo' }, "No callers have been detected.");
    };
    CallHierarchyTreeWidget.prototype.renderCaption = function (node, props) {
        if (callhierarchy_tree_1.DefinitionNode.is(node)) {
            return this.decorateDefinitionCaption(node.definition);
        }
        if (callhierarchy_tree_1.CallerNode.is(node)) {
            return this.decorateCallerCaption(node.caller);
        }
        return 'caption';
    };
    CallHierarchyTreeWidget.prototype.decorateDefinitionCaption = function (definition) {
        var containerName = definition.containerName;
        var symbol = definition.symbolName;
        var location = this.labelProvider.getName(new uri_1.default(definition.location.uri));
        var container = (containerName) ? containerName + ' — ' + location : location;
        return React.createElement("div", { className: 'definitionNode' },
            React.createElement("div", { className: 'symbol-icon ' + this.toIconClass(definition.symbolKind) }),
            React.createElement("div", { className: 'definitionNode-content' },
                React.createElement("span", { className: 'symbol' }, symbol),
                React.createElement("span", { className: 'container' }, container)));
    };
    CallHierarchyTreeWidget.prototype.decorateCallerCaption = function (caller) {
        var definition = caller.callerDefinition;
        var containerName = definition.containerName;
        var symbol = definition.symbolName;
        var referenceCount = caller.references.length;
        var location = this.labelProvider.getName(new uri_1.default(definition.location.uri));
        var container = (containerName) ? containerName + ' — ' + location : location;
        return React.createElement("div", { className: 'definitionNode' },
            React.createElement("div", { className: 'symbol-icon ' + this.toIconClass(definition.symbolKind) }),
            React.createElement("div", { className: 'definitionNode-content' },
                React.createElement("span", { className: 'symbol' }, symbol),
                React.createElement("span", { className: 'referenceCount' }, (referenceCount > 1) ? "[" + referenceCount + "]" : ''),
                React.createElement("span", { className: 'container' }, container)));
    };
    // tslint:disable-next-line:typedef
    CallHierarchyTreeWidget.prototype.toIconClass = function (symbolKind) {
        switch (symbolKind) {
            case vscode_languageserver_types_1.SymbolKind.File: return 'file';
            case vscode_languageserver_types_1.SymbolKind.Module: return 'module';
            case vscode_languageserver_types_1.SymbolKind.Namespace: return 'namespace';
            case vscode_languageserver_types_1.SymbolKind.Package: return 'package';
            case vscode_languageserver_types_1.SymbolKind.Class: return 'class';
            case vscode_languageserver_types_1.SymbolKind.Method: return 'method';
            case vscode_languageserver_types_1.SymbolKind.Property: return 'property';
            case vscode_languageserver_types_1.SymbolKind.Field: return 'field';
            case vscode_languageserver_types_1.SymbolKind.Constructor: return 'constructor';
            case vscode_languageserver_types_1.SymbolKind.Enum: return 'enum';
            case vscode_languageserver_types_1.SymbolKind.Interface: return 'interface';
            case vscode_languageserver_types_1.SymbolKind.Function: return 'function';
            case vscode_languageserver_types_1.SymbolKind.Variable: return 'variable';
            case vscode_languageserver_types_1.SymbolKind.Constant: return 'constant';
            case vscode_languageserver_types_1.SymbolKind.String: return 'string';
            case vscode_languageserver_types_1.SymbolKind.Number: return 'number';
            case vscode_languageserver_types_1.SymbolKind.Boolean: return 'boolean';
            case vscode_languageserver_types_1.SymbolKind.Array: return 'array';
            default: return 'unknown';
        }
    };
    CallHierarchyTreeWidget.prototype.openEditor = function (node, keepFocus) {
        if (callhierarchy_tree_1.DefinitionNode.is(node)) {
            var def = node.definition;
            this.doOpenEditor(node.definition.location.uri, def.selectionRange ? def.selectionRange : def.location.range, keepFocus);
        }
        if (callhierarchy_tree_1.CallerNode.is(node)) {
            this.doOpenEditor(node.caller.callerDefinition.location.uri, node.caller.references[0], keepFocus);
        }
    };
    CallHierarchyTreeWidget.prototype.doOpenEditor = function (uri, range, keepFocus) {
        this.editorManager.open(new uri_1.default(uri), {
            mode: keepFocus ? 'reveal' : 'activate',
            selection: range
        }).then(function (editorWidget) {
            if (editorWidget.parent instanceof browser_1.DockPanel) {
                editorWidget.parent.selectWidget(editorWidget);
            }
        });
    };
    CallHierarchyTreeWidget.prototype.storeState = function () {
        var callHierarchyService = this.model.getTree().callHierarchyService;
        if (this.model.root && callHierarchyService) {
            return {
                root: this.deflateForStorage(this.model.root),
                languageId: this.model.languageId,
            };
        }
        else {
            return {};
        }
    };
    CallHierarchyTreeWidget.prototype.restoreState = function (oldState) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (oldState.root && oldState.languageId) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var root = this.inflateFromStorage(oldState.root);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.model.initializeCallHierarchy(oldState.languageId, root.definition.location.uri, root.definition.location.range.start);
        }
    };
    CallHierarchyTreeWidget = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_1.TreeProps)),
        __param(1, inversify_1.inject(callhierarchy_tree_model_1.CallHierarchyTreeModel)),
        __param(2, inversify_1.inject(browser_1.ContextMenuRenderer)),
        __param(3, inversify_1.inject(label_provider_1.LabelProvider)),
        __param(4, inversify_1.inject(browser_2.EditorManager)),
        __metadata("design:paramtypes", [Object, callhierarchy_tree_model_1.CallHierarchyTreeModel,
            browser_1.ContextMenuRenderer,
            label_provider_1.LabelProvider,
            browser_2.EditorManager])
    ], CallHierarchyTreeWidget);
    return CallHierarchyTreeWidget;
}(browser_1.TreeWidget));
exports.CallHierarchyTreeWidget = CallHierarchyTreeWidget;


/***/ }),

/***/ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-tree/callhierarchy-tree.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-tree/callhierarchy-tree.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallerNode = exports.DefinitionNode = exports.CallHierarchyTree = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var md5_1 = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
var cancellation_1 = __webpack_require__(/*! @theia/core/lib/common/cancellation */ "./node_modules/@theia/core/lib/common/cancellation.js");
var CallHierarchyTree = /** @class */ (function (_super) {
    __extends(CallHierarchyTree, _super);
    function CallHierarchyTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CallHierarchyTree.prototype, "callHierarchyService", {
        get: function () {
            return this._callHierarchyService;
        },
        set: function (callHierarchyService) {
            this._callHierarchyService = callHierarchyService;
        },
        enumerable: false,
        configurable: true
    });
    CallHierarchyTree.prototype.resolveChildren = function (parent) {
        return __awaiter(this, void 0, void 0, function () {
            var definition, cancellationSource, callers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.callHierarchyService) {
                            return [2 /*return*/, Promise.resolve([])];
                        }
                        if (parent.children.length > 0) {
                            return [2 /*return*/, Promise.resolve(__spread(parent.children))];
                        }
                        if (DefinitionNode.is(parent)) {
                            definition = parent.definition;
                        }
                        else if (CallerNode.is(parent)) {
                            definition = parent.caller.callerDefinition;
                        }
                        if (!definition) return [3 /*break*/, 2];
                        cancellationSource = new cancellation_1.CancellationTokenSource();
                        return [4 /*yield*/, this.callHierarchyService.getCallers(definition, cancellationSource.token)];
                    case 1:
                        callers = _a.sent();
                        if (!callers) {
                            return [2 /*return*/, Promise.resolve([])];
                        }
                        return [2 /*return*/, this.toNodes(callers, parent)];
                    case 2: return [2 /*return*/, Promise.resolve([])];
                }
            });
        });
    };
    CallHierarchyTree.prototype.toNodes = function (callers, parent) {
        var _this = this;
        return callers.map(function (caller) { return _this.toNode(caller, parent); });
    };
    CallHierarchyTree.prototype.toNode = function (caller, parent) {
        return CallerNode.create(caller, parent);
    };
    CallHierarchyTree = __decorate([
        inversify_1.injectable()
    ], CallHierarchyTree);
    return CallHierarchyTree;
}(browser_1.TreeImpl));
exports.CallHierarchyTree = CallHierarchyTree;
var DefinitionNode;
(function (DefinitionNode) {
    function is(node) {
        return !!node && 'definition' in node;
    }
    DefinitionNode.is = is;
    function create(definition, parent) {
        var name = definition.symbolName;
        var id = createId(definition, parent);
        return {
            id: id, definition: definition, name: name, parent: parent,
            visible: true,
            children: [],
            expanded: false,
            selected: false,
        };
    }
    DefinitionNode.create = create;
})(DefinitionNode = exports.DefinitionNode || (exports.DefinitionNode = {}));
var CallerNode;
(function (CallerNode) {
    function is(node) {
        return !!node && 'caller' in node;
    }
    CallerNode.is = is;
    function create(caller, parent) {
        var callerDefinition = caller.callerDefinition;
        var name = callerDefinition.symbolName;
        var id = createId(callerDefinition, parent);
        return {
            id: id, caller: caller, name: name, parent: parent,
            visible: true,
            children: [],
            expanded: false,
            selected: false,
        };
    }
    CallerNode.create = create;
})(CallerNode = exports.CallerNode || (exports.CallerNode = {}));
function createId(definition, parent) {
    var idPrefix = (parent) ? parent.id + '/' : '';
    var id = idPrefix + md5_1.Md5.hashStr(JSON.stringify(definition));
    return id;
}


/***/ }),

/***/ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-tree/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-tree/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
__exportStar(__webpack_require__(/*! ./callhierarchy-tree */ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-tree/callhierarchy-tree.js"), exports);
__exportStar(__webpack_require__(/*! ./callhierarchy-tree-model */ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-tree/callhierarchy-tree-model.js"), exports);
__exportStar(__webpack_require__(/*! ./callhierarchy-tree-widget */ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-tree/callhierarchy-tree-widget.js"), exports);
__exportStar(__webpack_require__(/*! ./callhierarchy-tree-container */ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-tree/callhierarchy-tree-container.js"), exports);


/***/ }),

/***/ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy.js":
/*!************************************************************************!*\
  !*** ./node_modules/@theia/callhierarchy/lib/browser/callhierarchy.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
exports.CALLHIERARCHY_ID = void 0;
exports.CALLHIERARCHY_ID = 'callhierarchy';


/***/ }),

/***/ "./node_modules/@theia/callhierarchy/lib/browser/current-editor-access.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@theia/callhierarchy/lib/browser/current-editor-access.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
exports.CurrentEditorAccess = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var CurrentEditorAccess = /** @class */ (function () {
    function CurrentEditorAccess() {
    }
    CurrentEditorAccess.prototype.getSelection = function () {
        var activeEditor = this.getCurrentEditor();
        if (!activeEditor) {
            return;
        }
        var range = activeEditor.selection;
        var uri = activeEditor.uri.toString();
        return { range: range, uri: uri };
    };
    CurrentEditorAccess.prototype.getLanguageId = function () {
        var activeEditor = this.getCurrentEditor();
        if (!activeEditor) {
            return;
        }
        return activeEditor.document.languageId;
    };
    CurrentEditorAccess.prototype.getCurrentEditor = function () {
        var activeEditor = this.editorManager.currentEditor;
        if (activeEditor) {
            return activeEditor.editor;
        }
        return undefined;
    };
    __decorate([
        inversify_1.inject(browser_1.EditorManager),
        __metadata("design:type", browser_1.EditorManager)
    ], CurrentEditorAccess.prototype, "editorManager", void 0);
    CurrentEditorAccess = __decorate([
        inversify_1.injectable()
    ], CurrentEditorAccess);
    return CurrentEditorAccess;
}());
exports.CurrentEditorAccess = CurrentEditorAccess;


/***/ }),

/***/ "./node_modules/@theia/callhierarchy/src/browser/style/index.css":
/*!***********************************************************************!*\
  !*** ./node_modules/@theia/callhierarchy/src/browser/style/index.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./index.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/callhierarchy/src/browser/style/index.css");

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

/***/ "./node_modules/@theia/languages/lib/common/language-selector/glob.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/languages/lib/common/language-selector/glob.js ***!
  \****************************************************************************/
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
// copied from https://github.com/Microsoft/vscode/blob/bf7ac9201e7a7d01741d4e6e64b5dc9f3197d97b/src/vs/base/common/glob.ts
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPathTerms = exports.getBasenameTerms = exports.parseToAsync = exports.isRelativePattern = exports.hasSiblingFn = exports.hasSiblingPromiseFn = exports.parse = exports.match = exports.splitGlobAware = exports.getEmptyExpression = void 0;
var strings = __webpack_require__(/*! ./strings */ "./node_modules/@theia/languages/lib/common/language-selector/strings.js");
var paths = __webpack_require__(/*! ./paths */ "./node_modules/@theia/languages/lib/common/language-selector/paths.js");
function getEmptyExpression() {
    return Object.create(null);
}
exports.getEmptyExpression = getEmptyExpression;
var GLOBSTAR = '**';
var GLOB_SPLIT = '/';
var PATH_REGEX = '[/\\\\]'; // any slash or backslash
var NO_PATH_REGEX = '[^/\\\\]'; // any non-slash and non-backslash
var ALL_FORWARD_SLASHES = /\//g;
function starsToRegExp(starCount) {
    switch (starCount) {
        case 0:
            return '';
        case 1:
            return NO_PATH_REGEX + "*?"; // 1 star matches any number of characters except path separator (/ and \) - non greedy (?)
        default:
            // Matches:  (Path Sep OR Path Val followed by Path Sep OR Path Sep followed by Path Val) 0-many times
            // Group is non capturing because we don't need to capture at all (?:...)
            // Overall we use non-greedy matching because it could be that we match too much
            return "(?:" + PATH_REGEX + "|" + NO_PATH_REGEX + "+" + PATH_REGEX + "|" + PATH_REGEX + NO_PATH_REGEX + "+)*?";
    }
}
function splitGlobAware(pattern, splitChar) {
    if (!pattern) {
        return [];
    }
    var segments = [];
    var inBraces = false;
    var inBrackets = false;
    var char;
    var curVal = '';
    for (var i = 0; i < pattern.length; i++) {
        char = pattern[i];
        switch (char) {
            case splitChar:
                if (!inBraces && !inBrackets) {
                    segments.push(curVal);
                    curVal = '';
                    continue;
                }
                break;
            case '{':
                inBraces = true;
                break;
            case '}':
                inBraces = false;
                break;
            case '[':
                inBrackets = true;
                break;
            case ']':
                inBrackets = false;
                break;
        }
        curVal += char;
    }
    // Tail
    if (curVal) {
        segments.push(curVal);
    }
    return segments;
}
exports.splitGlobAware = splitGlobAware;
function parseRegExp(pattern) {
    if (!pattern) {
        return '';
    }
    var regEx = '';
    // Split up into segments for each slash found
    // eslint-disable-next-line prefer-const
    var segments = splitGlobAware(pattern, GLOB_SPLIT);
    // Special case where we only have globstars
    if (segments.every(function (s) { return s === GLOBSTAR; })) {
        regEx = '.*';
    }
    // Build regex over segments
    // tslint:disable-next-line:one-line
    else {
        var previousSegmentWasGlobStar_1 = false;
        segments.forEach(function (segment, index) {
            // Globstar is special
            if (segment === GLOBSTAR) {
                // if we have more than one globstar after another, just ignore it
                if (!previousSegmentWasGlobStar_1) {
                    regEx += starsToRegExp(2);
                    previousSegmentWasGlobStar_1 = true;
                }
                return;
            }
            // States
            var inBraces = false;
            var braceVal = '';
            var inBrackets = false;
            var bracketVal = '';
            var char;
            for (var i = 0; i < segment.length; i++) {
                char = segment[i];
                // Support brace expansion
                if (char !== '}' && inBraces) {
                    braceVal += char;
                    continue;
                }
                // Support brackets
                if (inBrackets && (char !== ']' || !bracketVal) /* ] is literally only allowed as first character in brackets to match it */) {
                    var res = void 0;
                    // range operator
                    if (char === '-') {
                        res = char;
                    }
                    // negation operator (only valid on first index in bracket)
                    // tslint:disable-next-line:one-line
                    else if ((char === '^' || char === '!') && !bracketVal) {
                        res = '^';
                    }
                    // glob split matching is not allowed within character ranges
                    // see http://man7.org/linux/man-pages/man7/glob.7.html
                    // tslint:disable-next-line:one-line
                    else if (char === GLOB_SPLIT) {
                        res = '';
                    }
                    // anything else gets escaped
                    // tslint:disable-next-line:one-line
                    else {
                        res = strings.escapeRegExpCharacters(char);
                    }
                    bracketVal += res;
                    continue;
                }
                switch (char) {
                    case '{':
                        inBraces = true;
                        continue;
                    case '[':
                        inBrackets = true;
                        continue;
                    case '}':
                        // eslint-disable-next-line prefer-const
                        var choices = splitGlobAware(braceVal, ',');
                        // Converts {foo,bar} => [foo|bar]
                        // eslint-disable-next-line prefer-const
                        var braceRegExp = "(?:" + choices.map(function (c) { return parseRegExp(c); }).join('|') + ")";
                        regEx += braceRegExp;
                        inBraces = false;
                        braceVal = '';
                        break;
                    case ']':
                        regEx += ('[' + bracketVal + ']');
                        inBrackets = false;
                        bracketVal = '';
                        break;
                    case '?':
                        regEx += NO_PATH_REGEX; // 1 ? matches any single character except path separator (/ and \)
                        continue;
                    case '*':
                        regEx += starsToRegExp(1);
                        continue;
                    default:
                        regEx += strings.escapeRegExpCharacters(char);
                }
            }
            // Tail: Add the slash we had split on if there is more to come and the remaining pattern is not a globstar
            // For example if pattern: some/**/*.js we want the "/" after some to be included in the RegEx to prevent
            // a folder called "something" to match as well.
            // However, if pattern: some/**, we tolerate that we also match on "something" because our globstar behaviour
            // is to match 0-N segments.
            if (index < segments.length - 1 && (segments[index + 1] !== GLOBSTAR || index + 2 < segments.length)) {
                regEx += PATH_REGEX;
            }
            // reset state
            previousSegmentWasGlobStar_1 = false;
        });
    }
    return regEx;
}
// regexes to check for trivial glob patterns that just check for String#endsWith
var T1 = /^\*\*\/\*\.[\w\.-]+$/; // **/*.something
var T2 = /^\*\*\/([\w\.-]+)\/?$/; // **/something
var T3 = /^{\*\*\/[\*\.]?[\w\.-]+\/?(,\*\*\/[\*\.]?[\w\.-]+\/?)*}$/; // {**/*.something,**/*.else} or {**/package.json,**/project.json}
var T3_2 = /^{\*\*\/[\*\.]?[\w\.-]+(\/(\*\*)?)?(,\*\*\/[\*\.]?[\w\.-]+(\/(\*\*)?)?)*}$/; // Like T3, with optional trailing /**
var T4 = /^\*\*((\/[\w\.-]+)+)\/?$/; // **/something/else
var T5 = /^([\w\.-]+(\/[\w\.-]+)*)\/?$/; // something/else
var CACHE = new Map(); // new LRUCache<string, ParsedStringPattern>(10000); // bounded to 10000 elements
var FALSE = function () {
    return false;
};
var NULL = function () {
    return null;
};
function parsePattern(arg1, options) {
    if (!arg1) {
        return NULL;
    }
    // Handle IRelativePattern
    var pattern;
    if (typeof arg1 !== 'string') {
        pattern = arg1.pattern;
    }
    else {
        pattern = arg1;
    }
    // Whitespace trimming
    pattern = pattern.trim();
    // Check cache
    var patternKey = pattern + "_" + !!options.trimForExclusions;
    var parsedPattern = CACHE.get(patternKey);
    if (parsedPattern) {
        return wrapRelativePattern(parsedPattern, arg1);
    }
    // Check for Trivias
    var match;
    if (T1.test(pattern)) { // common pattern: **/*.txt just need endsWith check
        var base_1 = pattern.substr(4); // '**/*'.length === 4
        parsedPattern = function (path, basename) {
            return path && strings.endsWith(path, base_1) ? pattern : null;
        };
    }
    else if (match = T2.exec(trimForExclusions(pattern, options))) { // common pattern: **/some.txt just need basename check
        parsedPattern = trivia2(match[1], pattern);
    }
    else if ((options.trimForExclusions ? T3_2 : T3).test(pattern)) { // repetition of common patterns (see above) {**/*.txt,**/*.png}
        parsedPattern = trivia3(pattern, options);
    }
    else if (match = T4.exec(trimForExclusions(pattern, options))) { // common pattern: **/something/else just need endsWith check
        parsedPattern = trivia4and5(match[1].substr(1), pattern, true);
    }
    else if (match = T5.exec(trimForExclusions(pattern, options))) { // common pattern: something/else just need equals check
        parsedPattern = trivia4and5(match[1], pattern, false);
    }
    // Otherwise convert to pattern
    // tslint:disable-next-line:one-line
    else {
        parsedPattern = toRegExp(pattern);
    }
    // Cache
    CACHE.set(patternKey, parsedPattern);
    return wrapRelativePattern(parsedPattern, arg1);
}
function wrapRelativePattern(parsedPattern, arg2) {
    if (typeof arg2 === 'string') {
        return parsedPattern;
    }
    return function (path, basename) {
        if (!paths.isEqualOrParent(path, arg2.base)) {
            return null;
        }
        return parsedPattern(paths.normalize(arg2.pathToRelative(arg2.base, path)), basename);
    };
}
function trimForExclusions(pattern, options) {
    return options.trimForExclusions && strings.endsWith(pattern, '/**') ? pattern.substr(0, pattern.length - 2) : pattern; // dropping **, tailing / is dropped later
}
// common pattern: **/some.txt just need basename check
function trivia2(base, originalPattern) {
    var slashBase = "/" + base;
    var backslashBase = "\\" + base;
    var parsedPattern = function (path, basename) {
        if (!path) {
            return null;
        }
        if (basename) {
            return basename === base ? originalPattern : null;
        }
        return path === base || strings.endsWith(path, slashBase) || strings.endsWith(path, backslashBase) ? originalPattern : null;
    };
    var basenames = [base];
    parsedPattern.basenames = basenames;
    parsedPattern.patterns = [originalPattern];
    parsedPattern.allBasenames = basenames;
    return parsedPattern;
}
// repetition of common ppatterns (see above) {**/*.txt,**/*.png}
function trivia3(pattern, options) {
    var parsedPatterns = aggregateBasenameMatches(pattern.slice(1, -1).split(',')
        .map(function (pattern) { return parsePattern(pattern, options); })
        .filter(function (pattern) { return pattern !== NULL; }), pattern);
    var n = parsedPatterns.length;
    if (!n) {
        return NULL;
    }
    if (n === 1) {
        return parsedPatterns[0];
    }
    var parsedPattern = function (path, basename) {
        for (var i = 0, n_1 = parsedPatterns.length; i < n_1; i++) {
            if (parsedPatterns[i](path, basename)) {
                return pattern;
            }
        }
        return null;
    };
    var withBasenames = parsedPatterns.find(function (pattern) { return !!pattern.allBasenames; });
    // const withBasenames = arrays.first(parsedPatterns, pattern => !!(<ParsedStringPattern>pattern).allBasenames);
    if (withBasenames) {
        parsedPattern.allBasenames = withBasenames.allBasenames;
    }
    var allPaths = parsedPatterns.reduce(function (all, current) { return current.allPaths ? all.concat(current.allPaths) : all; }, []);
    if (allPaths.length) {
        parsedPattern.allPaths = allPaths;
    }
    return parsedPattern;
}
// common patterns: **/something/else just need endsWith check, something/else just needs and equals check
function trivia4and5(path, pattern, matchPathEnds) {
    var nativePath = paths.nativeSep !== paths.sep ? path.replace(ALL_FORWARD_SLASHES, paths.nativeSep) : path;
    var nativePathEnd = paths.nativeSep + nativePath;
    // eslint-disable-next-line no-shadow
    var parsedPattern = matchPathEnds ? function (path, basename) {
        return path && (path === nativePath || strings.endsWith(path, nativePathEnd)) ? pattern : null;
        // eslint-disable-next-line no-shadow
    } : function (path, basename) {
        return path && path === nativePath ? pattern : null;
    };
    parsedPattern.allPaths = [(matchPathEnds ? '*/' : './') + path];
    return parsedPattern;
}
function toRegExp(pattern) {
    try {
        var regExp_1 = new RegExp("^" + parseRegExp(pattern) + "$");
        return function (path, basename) {
            regExp_1.lastIndex = 0; // reset RegExp to its initial state to reuse it!
            return path && regExp_1.test(path) ? pattern : null;
        };
    }
    catch (error) {
        return NULL;
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function match(arg1, path, hasSibling) {
    if (!arg1 || !path) {
        return false;
    }
    return parse(arg1)(path, undefined, hasSibling);
}
exports.match = match;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parse(arg1, options) {
    if (options === void 0) { options = {}; }
    if (!arg1) {
        return FALSE;
    }
    // Glob with String
    if (typeof arg1 === 'string' || isRelativePattern(arg1)) {
        var parsedPattern_1 = parsePattern(arg1, options);
        if (parsedPattern_1 === NULL) {
            return FALSE;
        }
        var resultPattern = function (path, basename) {
            return !!parsedPattern_1(path, basename);
        };
        if (parsedPattern_1.allBasenames) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            resultPattern.allBasenames = parsedPattern_1.allBasenames;
        }
        if (parsedPattern_1.allPaths) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            resultPattern.allPaths = parsedPattern_1.allPaths;
        }
        return resultPattern;
    }
    // Glob with Expression
    return parsedExpression(arg1, options);
}
exports.parse = parse;
function hasSiblingPromiseFn(siblingsFn) {
    if (!siblingsFn) {
        return undefined;
    }
    var siblings;
    return function (name) {
        if (!siblings) {
            siblings = (siblingsFn() || Promise.resolve([]))
                .then(function (list) { return list ? listToMap(list) : {}; });
        }
        return siblings.then(function (map) { return !!map[name]; });
    };
}
exports.hasSiblingPromiseFn = hasSiblingPromiseFn;
function hasSiblingFn(siblingsFn) {
    if (!siblingsFn) {
        return undefined;
    }
    var siblings;
    return function (name) {
        if (!siblings) {
            var list = siblingsFn();
            siblings = list ? listToMap(list) : {};
        }
        return !!siblings[name];
    };
}
exports.hasSiblingFn = hasSiblingFn;
function listToMap(list) {
    var e_1, _a;
    var map = {};
    try {
        for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
            var key = list_1_1.value;
            map[key] = true;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return map;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isRelativePattern(obj) {
    var rp = obj;
    return rp && typeof rp.base === 'string' && typeof rp.pattern === 'string' && typeof rp.pathToRelative === 'function';
}
exports.isRelativePattern = isRelativePattern;
/**
 * Same as `parse`, but the ParsedExpression is guaranteed to return a Promise
 */
function parseToAsync(expression, options) {
    // eslint-disable-next-line no-shadow
    var parsedExpression = parse(expression, options);
    return function (path, basename, hasSibling) {
        var result = parsedExpression(path, basename, hasSibling);
        return result instanceof Promise ? result : Promise.resolve(result);
    };
}
exports.parseToAsync = parseToAsync;
function getBasenameTerms(patternOrExpression) {
    return patternOrExpression.allBasenames || [];
}
exports.getBasenameTerms = getBasenameTerms;
function getPathTerms(patternOrExpression) {
    return patternOrExpression.allPaths || [];
}
exports.getPathTerms = getPathTerms;
function parsedExpression(expression, options) {
    var parsedPatterns = aggregateBasenameMatches(Object.getOwnPropertyNames(expression)
        .map(function (pattern) { return parseExpressionPattern(pattern, expression[pattern], options); })
        .filter(function (pattern) { return pattern !== NULL; }));
    var n = parsedPatterns.length;
    if (!n) {
        return NULL;
    }
    if (!parsedPatterns.some(function (parsedPattern) { return parsedPattern.requiresSiblings; })) {
        if (n === 1) {
            return parsedPatterns[0];
        }
        // eslint-disable-next-line no-shadow
        var resultExpression_1 = function (path, basename) {
            // eslint-disable-next-line no-shadow
            // tslint:disable-next-line:one-variable-per-declaration
            for (var i = 0, n_2 = parsedPatterns.length; i < n_2; i++) {
                // Pattern matches path
                var result = parsedPatterns[i](path, basename);
                if (result) {
                    return result;
                }
            }
            return null;
        };
        // eslint-disable-next-line no-shadow
        var withBasenames_1 = parsedPatterns.find(function (pattern) { return !!pattern.allBasenames; });
        if (withBasenames_1) {
            resultExpression_1.allBasenames = withBasenames_1.allBasenames;
        }
        // eslint-disable-next-line no-shadow
        var allPaths_1 = parsedPatterns.reduce(function (all, current) { return current.allPaths ? all.concat(current.allPaths) : all; }, []);
        if (allPaths_1.length) {
            resultExpression_1.allPaths = allPaths_1;
        }
        return resultExpression_1;
    }
    var resultExpression = function (path, basename, hasSibling) {
        var name = null;
        // eslint-disable-next-line no-shadow
        for (var i = 0, n_3 = parsedPatterns.length; i < n_3; i++) {
            // Pattern matches path
            var parsedPattern = parsedPatterns[i];
            if (parsedPattern.requiresSiblings && hasSibling) {
                if (!basename) {
                    basename = paths.basename(path);
                }
                if (!name) {
                    name = basename.substr(0, basename.length - paths.extname(path).length);
                }
            }
            var result = parsedPattern(path, basename, name, hasSibling);
            if (result) {
                return result;
            }
        }
        return null;
    };
    var withBasenames = parsedPatterns.find(function (pattern) { return !!pattern.allBasenames; });
    if (withBasenames) {
        resultExpression.allBasenames = withBasenames.allBasenames;
    }
    var allPaths = parsedPatterns.reduce(function (all, current) { return current.allPaths ? all.concat(current.allPaths) : all; }, []);
    if (allPaths.length) {
        resultExpression.allPaths = allPaths;
    }
    return resultExpression;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseExpressionPattern(pattern, value, options) {
    if (value === false) {
        return NULL; // pattern is disabled
    }
    var parsedPattern = parsePattern(pattern, options);
    if (parsedPattern === NULL) {
        return NULL;
    }
    // Expression Pattern is <boolean>
    if (typeof value === 'boolean') {
        return parsedPattern;
    }
    // Expression Pattern is <SiblingClause>
    if (value) {
        var when_1 = value.when;
        if (typeof when_1 === 'string') {
            var result = function (path, basename, name, hasSibling) {
                if (!hasSibling || !parsedPattern(path, basename)) {
                    return null;
                }
                var clausePattern = when_1.replace('$(basename)', name);
                var matched = hasSibling(clausePattern);
                return matched instanceof Promise ?
                    matched.then(function (m) { return m ? pattern : null; }) :
                    matched ? pattern : null;
            };
            result.requiresSiblings = true;
            return result;
        }
    }
    // Expression is Anything
    return parsedPattern;
}
function aggregateBasenameMatches(parsedPatterns, result) {
    var basenamePatterns = parsedPatterns.filter(function (parsedPattern) { return !!parsedPattern.basenames; });
    if (basenamePatterns.length < 2) {
        return parsedPatterns;
    }
    var basenames = basenamePatterns.reduce(function (all, current) { return all.concat(current.basenames); }, []);
    var patterns;
    if (result) {
        patterns = [];
        // tslint:disable-next-line:one-variable-per-declaration
        for (var i = 0, n = basenames.length; i < n; i++) {
            patterns.push(result);
        }
    }
    else {
        patterns = basenamePatterns.reduce(function (all, current) { return all.concat(current.patterns); }, []);
    }
    var aggregate = function (path, basename) {
        if (!path) {
            return null;
        }
        if (!basename) {
            var i = void 0;
            for (i = path.length; i > 0; i--) {
                var ch = path.charCodeAt(i - 1);
                if (ch === 47 /* Slash */ || ch === 92 /* Backslash */) {
                    break;
                }
            }
            basename = path.substr(i);
        }
        var index = basenames.indexOf(basename);
        return index !== -1 ? patterns[index] : null;
    };
    aggregate.basenames = basenames;
    aggregate.patterns = patterns;
    aggregate.allBasenames = basenames;
    var aggregatedPatterns = parsedPatterns.filter(function (parsedPattern) { return !parsedPattern.basenames; });
    aggregatedPatterns.push(aggregate);
    return aggregatedPatterns;
}


/***/ }),

/***/ "./node_modules/@theia/languages/lib/common/language-selector/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@theia/languages/lib/common/language-selector/index.js ***!
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
__exportStar(__webpack_require__(/*! ./language-selector */ "./node_modules/@theia/languages/lib/common/language-selector/language-selector.js"), exports);
__exportStar(__webpack_require__(/*! ./glob */ "./node_modules/@theia/languages/lib/common/language-selector/glob.js"), exports);


/***/ }),

/***/ "./node_modules/@theia/languages/lib/common/language-selector/language-selector.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@theia/languages/lib/common/language-selector/language-selector.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.score = void 0;
/********************************************************************************
 * Copyright (C) 2020 Red Hat, Inc. and others.
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
var glob_1 = __webpack_require__(/*! ./glob */ "./node_modules/@theia/languages/lib/common/language-selector/glob.js");
function score(selector, uriScheme, path, candidateLanguage, candidateIsSynchronized) {
    var e_1, _a;
    if (Array.isArray(selector)) {
        var ret = 0;
        try {
            for (var selector_1 = __values(selector), selector_1_1 = selector_1.next(); !selector_1_1.done; selector_1_1 = selector_1.next()) {
                var filter = selector_1_1.value;
                var value = score(filter, uriScheme, path, candidateLanguage, candidateIsSynchronized);
                if (value === 10) {
                    return value;
                }
                if (value > ret) {
                    ret = value;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (selector_1_1 && !selector_1_1.done && (_a = selector_1.return)) _a.call(selector_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return ret;
    }
    else if (typeof selector === 'string') {
        if (!candidateIsSynchronized) {
            return 0;
        }
        if (selector === '*') {
            return 5;
        }
        else if (selector === candidateLanguage) {
            return 10;
        }
        else {
            return 0;
        }
    }
    else if (selector) {
        var language = selector.language, pattern = selector.pattern, scheme = selector.scheme, hasAccessToAllModels = selector.hasAccessToAllModels;
        if (!candidateIsSynchronized && !hasAccessToAllModels) {
            return 0;
        }
        var result = 0;
        if (scheme) {
            if (scheme === uriScheme) {
                result = 10;
            }
            else if (scheme === '*') {
                result = 5;
            }
            else {
                return 0;
            }
        }
        if (language) {
            if (language === candidateLanguage) {
                result = 10;
            }
            else if (language === '*') {
                result = Math.max(result, 5);
            }
            else {
                return 0;
            }
        }
        if (pattern) {
            if (pattern === path || glob_1.match(pattern, path)) {
                result = 10;
            }
            else {
                return 0;
            }
        }
        return result;
    }
    else {
        return 0;
    }
}
exports.score = score;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/callhierarchy/src/browser/style/index.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/callhierarchy/src/browser/style/index.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-CallHierarchyTree {\n    font-size: var(--theia-ui-font-size1);\n}\n\n.theia-CallHierarchyTree .theia-TreeNode {\n    width: 100%;\n}\n\n.theia-CallHierarchyTree .theia-ExpansionToggle {\n    min-width: 9px;\n    padding-right: 4px;\n}\n\n.theia-CallHierarchyTree .definitionNode {\n    display: flex;\n}\n\n.theia-CallHierarchyTree .definitionNode {\n    width: calc(100% - 32px);\n}\n\n.theia-CallHierarchyTree .definitionNode div {\n    margin-right: 5px;\n}\n\n.theia-CallHierarchyTree .definitionNode .symbol {\n    padding-right: 4px;\n}\n\n.theia-CallHierarchyTree .definitionNode .referenceCount {\n    color: var(--theia-badge-background);\n}\n\n.theia-CallHierarchyTree .definitionNode .container {\n    color: var(--theia-descriptionForeground);\n}\n\n.call-hierarchy-tab-icon::before {\n    content: \"\\F0AB\"\n}\n\n.theia-CallHierarchyTree .definitionNode-content {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=39.bundle.js.map