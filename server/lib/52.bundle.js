(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/@theia/scm/lib/browser/decorations/scm-navigator-decorator.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@theia/scm/lib/browser/decorations/scm-navigator-decorator.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.ScmNavigatorDecorator = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var logger_1 = __webpack_require__(/*! @theia/core/lib/common/logger */ "./node_modules/@theia/core/lib/common/logger.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/filesystem/lib/browser */ "./node_modules/@theia/filesystem/lib/browser/index.js");
var scm_decorations_service_1 = __webpack_require__(/*! ./scm-decorations-service */ "./node_modules/@theia/scm/lib/browser/decorations/scm-decorations-service.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var color_registry_1 = __webpack_require__(/*! @theia/core/lib/browser/color-registry */ "./node_modules/@theia/core/lib/browser/color-registry.js");
var ScmNavigatorDecorator = /** @class */ (function () {
    function ScmNavigatorDecorator(decorationsService) {
        var _this = this;
        this.decorationsService = decorationsService;
        this.id = 'theia-scm-decorator';
        this.emitter = new event_1.Emitter();
        this.decorationsService.onNavigatorDecorationsChanged(function (data) {
            _this.decorationsMap = data;
            _this.fireDidChangeDecorations(function (tree) { return _this.collectDecorators(tree); });
        });
    }
    ScmNavigatorDecorator.prototype.collectDecorators = function (tree) {
        var e_1, _a;
        var _this = this;
        var result = new Map();
        if (tree.root === undefined || !this.decorationsMap) {
            return result;
        }
        var markers = this.appendContainerChanges(this.decorationsMap);
        try {
            for (var _b = __values(new browser_1.DepthFirstTreeIterator(tree.root)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var treeNode = _c.value;
                var uri = browser_2.FileStatNode.getUri(treeNode);
                if (uri) {
                    var marker = markers.get(uri);
                    if (marker) {
                        result.set(treeNode.id, marker);
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return new Map(Array.from(result.entries()).map(function (m) { return [m[0], _this.toDecorator(m[1])]; }));
    };
    ScmNavigatorDecorator.prototype.toDecorator = function (change) {
        var colorVariable = change.color && this.colors.toCssVariableName(change.color.id);
        return {
            tailDecorations: [
                {
                    data: change.letter ? change.letter : '',
                    fontData: {
                        color: colorVariable && "var(" + colorVariable + ")"
                    },
                    tooltip: change.title ? change.title : ''
                }
            ]
        };
    };
    ScmNavigatorDecorator.prototype.decorations = function (tree) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.decorationsMap) {
                    return [2 /*return*/, this.collectDecorators(tree)];
                }
                else {
                    return [2 /*return*/, new Map()];
                }
                return [2 /*return*/];
            });
        });
    };
    ScmNavigatorDecorator.prototype.appendContainerChanges = function (decorationsMap) {
        var e_2, _a;
        var result = new Map();
        try {
            for (var _b = __values(decorationsMap.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), uri = _d[0], data = _d[1];
                var uriString = uri.toString();
                result.set(uriString, data);
                var parentUri = new uri_1.default(uri).parent;
                while (parentUri && !parentUri.path.isRoot) {
                    var parentUriString = parentUri.toString();
                    var existing = result.get(parentUriString);
                    if (existing === undefined) {
                        result.set(parentUriString, data);
                        parentUri = parentUri.parent;
                    }
                    else {
                        parentUri = undefined;
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return result;
    };
    Object.defineProperty(ScmNavigatorDecorator.prototype, "onDidChangeDecorations", {
        get: function () {
            return this.emitter.event;
        },
        enumerable: false,
        configurable: true
    });
    ScmNavigatorDecorator.prototype.fireDidChangeDecorations = function (event) {
        this.emitter.fire(event);
    };
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], ScmNavigatorDecorator.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(color_registry_1.ColorRegistry),
        __metadata("design:type", color_registry_1.ColorRegistry)
    ], ScmNavigatorDecorator.prototype, "colors", void 0);
    ScmNavigatorDecorator = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(scm_decorations_service_1.ScmDecorationsService)),
        __metadata("design:paramtypes", [scm_decorations_service_1.ScmDecorationsService])
    ], ScmNavigatorDecorator);
    return ScmNavigatorDecorator;
}());
exports.ScmNavigatorDecorator = ScmNavigatorDecorator;


/***/ }),

/***/ "./node_modules/@theia/scm/lib/browser/dirty-diff/dirty-diff-module.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@theia/scm/lib/browser/dirty-diff/dirty-diff-module.js ***!
  \*****************************************************************************/
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
exports.bindDirtyDiff = void 0;
var dirty_diff_decorator_1 = __webpack_require__(/*! ./dirty-diff-decorator */ "./node_modules/@theia/scm/lib/browser/dirty-diff/dirty-diff-decorator.js");
__webpack_require__(/*! ../../../src/browser/style/dirty-diff.css */ "./node_modules/@theia/scm/src/browser/style/dirty-diff.css");
function bindDirtyDiff(bind) {
    bind(dirty_diff_decorator_1.DirtyDiffDecorator).toSelf().inSingletonScope();
}
exports.bindDirtyDiff = bindDirtyDiff;


/***/ }),

/***/ "./node_modules/@theia/scm/lib/browser/scm-frontend-module.js":
/*!********************************************************************!*\
  !*** ./node_modules/@theia/scm/lib/browser/scm-frontend-module.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
exports.createScmTreeContainer = void 0;
__webpack_require__(/*! ../../src/browser/style/index.css */ "./node_modules/@theia/scm/src/browser/style/index.css");
__webpack_require__(/*! ../../src/browser/style/diff.css */ "./node_modules/@theia/scm/src/browser/style/diff.css");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var scm_service_1 = __webpack_require__(/*! ./scm-service */ "./node_modules/@theia/scm/lib/browser/scm-service.js");
var scm_contribution_1 = __webpack_require__(/*! ./scm-contribution */ "./node_modules/@theia/scm/lib/browser/scm-contribution.js");
var scm_widget_1 = __webpack_require__(/*! ./scm-widget */ "./node_modules/@theia/scm/lib/browser/scm-widget.js");
var scm_tree_widget_1 = __webpack_require__(/*! ./scm-tree-widget */ "./node_modules/@theia/scm/lib/browser/scm-tree-widget.js");
var scm_commit_widget_1 = __webpack_require__(/*! ./scm-commit-widget */ "./node_modules/@theia/scm/lib/browser/scm-commit-widget.js");
var scm_amend_widget_1 = __webpack_require__(/*! ./scm-amend-widget */ "./node_modules/@theia/scm/lib/browser/scm-amend-widget.js");
var scm_no_repository_widget_1 = __webpack_require__(/*! ./scm-no-repository-widget */ "./node_modules/@theia/scm/lib/browser/scm-no-repository-widget.js");
var scm_tree_model_1 = __webpack_require__(/*! ./scm-tree-model */ "./node_modules/@theia/scm/lib/browser/scm-tree-model.js");
var scm_quick_open_service_1 = __webpack_require__(/*! ./scm-quick-open-service */ "./node_modules/@theia/scm/lib/browser/scm-quick-open-service.js");
var dirty_diff_module_1 = __webpack_require__(/*! ./dirty-diff/dirty-diff-module */ "./node_modules/@theia/scm/lib/browser/dirty-diff/dirty-diff-module.js");
var browser_2 = __webpack_require__(/*! @theia/navigator/lib/browser */ "./node_modules/@theia/navigator/lib/browser/index.js");
var scm_navigator_decorator_1 = __webpack_require__(/*! ./decorations/scm-navigator-decorator */ "./node_modules/@theia/scm/lib/browser/decorations/scm-navigator-decorator.js");
var scm_decorations_service_1 = __webpack_require__(/*! ./decorations/scm-decorations-service */ "./node_modules/@theia/scm/lib/browser/decorations/scm-decorations-service.js");
var scm_avatar_service_1 = __webpack_require__(/*! ./scm-avatar-service */ "./node_modules/@theia/scm/lib/browser/scm-avatar-service.js");
var scm_context_key_service_1 = __webpack_require__(/*! ./scm-context-key-service */ "./node_modules/@theia/scm/lib/browser/scm-context-key-service.js");
var scm_layout_migrations_1 = __webpack_require__(/*! ./scm-layout-migrations */ "./node_modules/@theia/scm/lib/browser/scm-layout-migrations.js");
var scm_tree_label_provider_1 = __webpack_require__(/*! ./scm-tree-label-provider */ "./node_modules/@theia/scm/lib/browser/scm-tree-label-provider.js");
var tab_bar_toolbar_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-toolbar */ "./node_modules/@theia/core/lib/browser/shell/tab-bar-toolbar.js");
var color_application_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/color-application-contribution */ "./node_modules/@theia/core/lib/browser/color-application-contribution.js");
var label_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/label-provider */ "./node_modules/@theia/core/lib/browser/label-provider.js");
var scm_preferences_1 = __webpack_require__(/*! ./scm-preferences */ "./node_modules/@theia/scm/lib/browser/scm-preferences.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(scm_context_key_service_1.ScmContextKeyService).toSelf().inSingletonScope();
    bind(scm_service_1.ScmService).toSelf().inSingletonScope();
    bind(scm_widget_1.ScmWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: scm_contribution_1.SCM_WIDGET_FACTORY_ID,
            createWidget: function () { return container.get(scm_widget_1.ScmWidget); }
        });
    }).inSingletonScope();
    bind(scm_commit_widget_1.ScmCommitWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: scm_commit_widget_1.ScmCommitWidget.ID,
            createWidget: function () { return container.get(scm_commit_widget_1.ScmCommitWidget); }
        });
    }).inSingletonScope();
    bind(scm_tree_widget_1.ScmTreeWidget).toDynamicValue(function (ctx) {
        var child = createScmTreeContainer(ctx.container);
        return child.get(scm_tree_widget_1.ScmTreeWidget);
    });
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: scm_tree_widget_1.ScmTreeWidget.ID,
            createWidget: function () { return container.get(scm_tree_widget_1.ScmTreeWidget); }
        });
    }).inSingletonScope();
    bind(scm_amend_widget_1.ScmAmendWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: scm_amend_widget_1.ScmAmendWidget.ID,
            createWidget: function () { return container.get(scm_amend_widget_1.ScmAmendWidget); }
        });
    }).inSingletonScope();
    bind(scm_no_repository_widget_1.ScmNoRepositoryWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: scm_no_repository_widget_1.ScmNoRepositoryWidget.ID,
            createWidget: function () { return container.get(scm_no_repository_widget_1.ScmNoRepositoryWidget); }
        });
    }).inSingletonScope();
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: scm_contribution_1.SCM_VIEW_CONTAINER_ID,
            createWidget: function () { return __awaiter(void 0, void 0, void 0, function () {
                var viewContainer, widget;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            viewContainer = container.get(browser_1.ViewContainer.Factory)({
                                id: scm_contribution_1.SCM_VIEW_CONTAINER_ID,
                                progressLocationId: 'scm'
                            });
                            viewContainer.setTitleOptions(scm_contribution_1.SCM_VIEW_CONTAINER_TITLE_OPTIONS);
                            return [4 /*yield*/, container.get(browser_1.WidgetManager).getOrCreateWidget(scm_contribution_1.SCM_WIDGET_FACTORY_ID)];
                        case 1:
                            widget = _a.sent();
                            viewContainer.addWidget(widget, {
                                canHide: false,
                                initiallyCollapsed: false
                            });
                            return [2 /*return*/, viewContainer];
                    }
                });
            }); }
        });
    }).inSingletonScope();
    bind(browser_1.ApplicationShellLayoutMigration).to(scm_layout_migrations_1.ScmLayoutVersion3Migration).inSingletonScope();
    bind(scm_quick_open_service_1.ScmQuickOpenService).toSelf().inSingletonScope();
    browser_1.bindViewContribution(bind, scm_contribution_1.ScmContribution);
    bind(browser_1.FrontendApplicationContribution).toService(scm_contribution_1.ScmContribution);
    bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(scm_contribution_1.ScmContribution);
    bind(color_application_contribution_1.ColorContribution).toService(scm_contribution_1.ScmContribution);
    bind(browser_2.NavigatorTreeDecorator).to(scm_navigator_decorator_1.ScmNavigatorDecorator).inSingletonScope();
    bind(scm_decorations_service_1.ScmDecorationsService).toSelf().inSingletonScope();
    bind(scm_avatar_service_1.ScmAvatarService).toSelf().inSingletonScope();
    dirty_diff_module_1.bindDirtyDiff(bind);
    bind(scm_tree_label_provider_1.ScmTreeLabelProvider).toSelf().inSingletonScope();
    bind(label_provider_1.LabelProviderContribution).toService(scm_tree_label_provider_1.ScmTreeLabelProvider);
    scm_preferences_1.bindScmPreferences(bind);
});
function createScmTreeContainer(parent) {
    var child = browser_1.createTreeContainer(parent, {
        virtualized: true,
        search: true,
        multiSelect: true,
    });
    child.unbind(browser_1.TreeWidget);
    child.bind(scm_tree_widget_1.ScmTreeWidget).toSelf();
    child.unbind(browser_1.TreeModelImpl);
    child.bind(scm_tree_model_1.ScmTreeModel).toSelf();
    child.rebind(browser_1.TreeModel).toService(scm_tree_model_1.ScmTreeModel);
    child.bind(scm_tree_model_1.ScmTreeModelProps).toConstantValue({
        defaultExpansion: 'expanded',
    });
    return child;
}
exports.createScmTreeContainer = createScmTreeContainer;


/***/ }),

/***/ "./node_modules/@theia/scm/lib/browser/scm-layout-migrations.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@theia/scm/lib/browser/scm-layout-migrations.js ***!
  \**********************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScmLayoutVersion3Migration = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var scm_contribution_1 = __webpack_require__(/*! ./scm-contribution */ "./node_modules/@theia/scm/lib/browser/scm-contribution.js");
var ScmLayoutVersion3Migration = /** @class */ (function () {
    function ScmLayoutVersion3Migration() {
        this.layoutVersion = 3.0;
    }
    ScmLayoutVersion3Migration.prototype.onWillInflateWidget = function (desc, _a) {
        var parent = _a.parent;
        if (desc.constructionOptions.factoryId === 'scm' && !parent) {
            return {
                constructionOptions: {
                    factoryId: scm_contribution_1.SCM_VIEW_CONTAINER_ID
                },
                innerWidgetState: {
                    parts: [
                        {
                            widget: {
                                constructionOptions: {
                                    factoryId: scm_contribution_1.SCM_WIDGET_FACTORY_ID
                                },
                                innerWidgetState: desc.innerWidgetState
                            },
                            partId: {
                                factoryId: scm_contribution_1.SCM_WIDGET_FACTORY_ID
                            },
                            collapsed: false,
                            hidden: false
                        }
                    ],
                    title: scm_contribution_1.SCM_VIEW_CONTAINER_TITLE_OPTIONS
                }
            };
        }
        return undefined;
    };
    ScmLayoutVersion3Migration = __decorate([
        inversify_1.injectable()
    ], ScmLayoutVersion3Migration);
    return ScmLayoutVersion3Migration;
}());
exports.ScmLayoutVersion3Migration = ScmLayoutVersion3Migration;


/***/ }),

/***/ "./node_modules/@theia/scm/lib/browser/scm-tree-label-provider.js":
/*!************************************************************************!*\
  !*** ./node_modules/@theia/scm/lib/browser/scm-tree-label-provider.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 Arm and others.
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
exports.ScmTreeLabelProvider = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var label_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/label-provider */ "./node_modules/@theia/core/lib/browser/label-provider.js");
var tree_1 = __webpack_require__(/*! @theia/core/lib/browser/tree */ "./node_modules/@theia/core/lib/browser/tree/index.js");
var scm_tree_model_1 = __webpack_require__(/*! ./scm-tree-model */ "./node_modules/@theia/scm/lib/browser/scm-tree-model.js");
var ScmTreeLabelProvider = /** @class */ (function () {
    function ScmTreeLabelProvider() {
    }
    ScmTreeLabelProvider.prototype.canHandle = function (element) {
        return tree_1.TreeNode.is(element) && (scm_tree_model_1.ScmFileChangeFolderNode.is(element) || scm_tree_model_1.ScmFileChangeNode.is(element)) ? 60 : 0;
    };
    ScmTreeLabelProvider.prototype.getName = function (node) {
        return this.labelProvider.getName(new uri_1.default(node.sourceUri));
    };
    __decorate([
        inversify_1.inject(label_provider_1.LabelProvider),
        __metadata("design:type", label_provider_1.LabelProvider)
    ], ScmTreeLabelProvider.prototype, "labelProvider", void 0);
    ScmTreeLabelProvider = __decorate([
        inversify_1.injectable()
    ], ScmTreeLabelProvider);
    return ScmTreeLabelProvider;
}());
exports.ScmTreeLabelProvider = ScmTreeLabelProvider;


/***/ }),

/***/ "./node_modules/@theia/scm/src/browser/style/diff.css":
/*!************************************************************!*\
  !*** ./node_modules/@theia/scm/src/browser/style/diff.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./diff.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/scm/src/browser/style/diff.css");

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

/***/ "./node_modules/@theia/scm/src/browser/style/dirty-diff.css":
/*!******************************************************************!*\
  !*** ./node_modules/@theia/scm/src/browser/style/dirty-diff.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./dirty-diff.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/scm/src/browser/style/dirty-diff.css");

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

/***/ "./node_modules/@theia/scm/src/browser/style/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/@theia/scm/src/browser/style/index.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./index.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/scm/src/browser/style/index.css");

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

/***/ "./node_modules/@theia/scm/src/browser/style/scm.svg":
/*!***********************************************************!*\
  !*** ./node_modules/@theia/scm/src/browser/style/scm.svg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE5IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgZmlsbD0iI0Y2RjZGNiIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI4IDI4IiB3aWR0aD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMjAgMGMtMi4yMiAwLTQgMS43OC00IDQgMCAxLjQ2LjgyIDIuNzYgMiAzLjQ0djIuNTZsLTQgNC00LTR2LTIuNTZjMS4xOC0uNjggMi0xLjk2IDItMy40NCAwLTIuMjItMS43OC00LTQtNHMtNCAxLjc4LTQgNGMwIDEuNDYuODIgMi43NiAyIDMuNDR2My41Nmw2IDZ2My41NmMtMS4xOC42OC0yIDEuOTYtMiAzLjQ0IDAgMi4yMiAxLjc4IDQgNCA0czQtMS43OCA0LTRjMC0xLjQ2LS44Mi0yLjc2LTItMy40NHYtMy41Nmw2LTZ2LTMuNTZjMS4xOC0uNjggMi0xLjk2IDItMy40NCAwLTIuMjItMS43OC00LTQtNHptLTEyIDYuNGMtMS4zMiAwLTIuNC0xLjEtMi40LTIuNHMxLjEtMi40IDIuNC0yLjQgMi40IDEuMSAyLjQgMi40LTEuMSAyLjQtMi40IDIuNHptNiAyMGMtMS4zMiAwLTIuNC0xLjEtMi40LTIuNHMxLjEtMi40IDIuNC0yLjQgMi40IDEuMSAyLjQgMi40LTEuMSAyLjQtMi40IDIuNHptNi0yMGMtMS4zMiAwLTIuNC0xLjEtMi40LTIuNHMxLjEtMi40IDIuNC0yLjQgMi40IDEuMSAyLjQgMi40LTEuMSAyLjQtMi40IDIuNHoiIGZpbGw9IiNGNkY2RjYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPgo="

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/scm/src/browser/style/diff.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/scm/src/browser/style/diff.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.scm-diff-container {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    height: 100%;\n}\n\n.scm-diff-container .listContainer {\n    flex: 1;\n    position: relative;\n}\n\n.scm-diff-container .listContainer .commitList {\n    height: 100%;\n}\n\n.scm-diff-container .subject {\n    font-size: var(--theia-ui-font-size2);\n    font-weight: bold;\n}\n\n.scm-diff-container .noWrapInfo {\n    width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/scm/src/browser/style/dirty-diff-decorator.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/scm/src/browser/style/dirty-diff-decorator.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.dirty-diff-glyph {\n\tmargin-left: 5px;\n\tcursor: pointer;\n}\n\n.dirty-diff-removed-line:after {\n\tcontent: '';\n\tposition: absolute;\n\tbottom: -4px;\n\tbox-sizing: border-box;\n\twidth: 4px;\n\theight: 0;\n\tz-index: 9;\n\tborder-top: 4px solid transparent;\n\tborder-bottom: 4px solid transparent;\n\ttransition: border-top-width 80ms linear, border-bottom-width 80ms linear, bottom 80ms linear;\n}\n\n.dirty-diff-glyph:before {\n\tposition: absolute;\n\tcontent: '';\n\theight: 100%;\n\twidth: 0;\n\tleft: -2px;\n\ttransition: width 80ms linear, left 80ms linear;\n}\n\n.dirty-diff-removed-line:before {\n\tmargin-left: 3px;\n\theight: 0;\n\tbottom: 0;\n\ttransition: height 80ms linear;\n}\n\n.margin-view-overlays > div:hover > .dirty-diff-glyph:before {\n\tposition: absolute;\n\tcontent: '';\n\theight: 100%;\n\twidth: 9px;\n\tleft: -6px;\n}\n\n.margin-view-overlays > div:hover > .dirty-diff-removed-line:after {\n\tbottom: 0;\n\tborder-top-width: 0;\n\tborder-bottom-width: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/scm/src/browser/style/dirty-diff.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/scm/src/browser/style/dirty-diff.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../../css-loader!./dirty-diff-decorator.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/scm/src/browser/style/dirty-diff-decorator.css"), "");

// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.monaco-editor .dirty-diff-added-line {\n\tborder-left: 3px solid var(--theia-editorGutter-addedBackground);\n\ttransition: opacity 0.5s;\n}\n.monaco-editor .dirty-diff-added-line:before {\n\tbackground: var(--theia-editorGutter-addedBackground);\n}\n.monaco-editor .margin:hover .dirty-diff-added-line {\n    opacity: 1;\n}\n\n.monaco-editor .dirty-diff-removed-line:after {\n\tborder-left: 4px solid var(--theia-editorGutter-deletedBackground);\n\ttransition: opacity 0.5s;\n}\n.monaco-editor .dirty-diff-removed-line:before {\n\tbackground: var(--theia-editorGutter-deletedBackground);\n}\n.monaco-editor .margin:hover .dirty-diff-removed-line {\n    opacity: 1;\n}\n\n.monaco-editor .dirty-diff-modified-line {\n\tborder-left: 3px solid var(--theia-editorGutter-modifiedBackground);\n\ttransition: opacity 0.5s;\n}\n.monaco-editor .dirty-diff-modified-line:before {\n\tbackground: var(--theia-editorGutter-modifiedBackground);\n}\n.monaco-editor .margin:hover .dirty-diff-modified-line {\n    opacity: 1;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/scm/src/browser/style/index.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/scm/src/browser/style/index.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2019 Red Hat, Inc. and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-scm-commit {\n    overflow: hidden;\n    font-size: var(--theia-ui-font-size1);\n    max-height: calc(100% - var(--theia-border-width));\n    position: relative;\n}\n\n.theia-scm {\n    padding: 5px;\n    box-sizing: border-box;\n    height: 100%;\n}\n\n.theia-side-panel .theia-scm {\n    padding-left: 19px;\n}\n\n.groups-outer-container:focus {\n    outline: 0;\n    box-shadow: none;\n    border: none;\n}\n\n.theia-scm .noWrapInfo {\n    width: 100%;\n    align-items: center;\n}\n\n.theia-scm:focus, .theia-scm :focus {\n    outline: 0;\n    box-shadow: none;\n    border: none;\n}\n\n.theia-scm .space-between {\n    justify-content: space-between;\n}\n\n.theia-scm .changesHeader {\n    font-weight: bold;\n}\n\n.theia-scm .theia-scm-amend {\n    margin: 5px 0;\n}\n\n.theia-scm #messageInputContainer {\n    position: relative;\n}\n\n.theia-scm #repositoryListContainer {\n    display: flex;\n    margin-bottom: 5px;\n    flex: 1;\n}\n\n.theia-scm .groups-outer-container {\n    overflow-y: auto;\n    width: 100%;\n    flex-grow: 1;\n}\n\n.theia-scm .warn {\n    background-color: var(--theia-inputValidation-warningBackground) !important;\n}\n\n.theia-scm-main-container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.theia-scm-input-message-container {\n    display: flex;\n    flex-direction: column;\n    margin: 0px 0px 7px 0px;\n    max-height: 400px;\n}\n\n.theia-scm-input-message-container textarea {\n    line-height: var(--theia-content-line-height);\n    resize: none;\n    box-sizing: border-box;\n    min-height: 32px;\n    padding: 4px;\n    border: none;\n}\n\n.theia-scm-input-message-container textarea:placeholder-shown {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.theia-scm-input-message-container textarea:not(:focus) {\n    border: var(--theia-border-width) solid var(--theia-input-background);\n}\n\n.theia-scm-input-message-container textarea:focus {\n    border: var(--theia-border-width) solid var(--theia-focusBorder);\n}\n\n.theia-scm-input-message {\n    width: 100%;\n}\n\n.theia-scm-input-message-idle:not(:focus) {\n    border-color: var(--theia-input-border);\n}\n\n.theia-scm-input-message-info {\n    border-color: var(--theia-inputValidation-infoBorder) !important;\n}\n\n.theia-scm-input-message-success {\n    border-color: var(--theia-successBackground) !important;\n}\n\n.theia-scm-input-message-warning {\n    border-color: var(--theia-inputValidation-warningBorder) !important;\n}\n\n.theia-scm-input-message-error {\n    border-color: var(--theia-inputValidation-errorBorder) !important;\n}\n\n.theia-scm-message,\n.theia-scm-input-validation-message {\n    padding: 4px 4px 4px 4px;\n}\n\n.theia-scm-validation-message-info {\n    background-color: var(--theia-inputValidation-infoBackground) !important;\n    color: var(--theia-inputValidation-infoForeground);\n    border: var(--theia-border-width) solid var(--theia-inputValidation-infoBorder);\n    border-top: none; /* remove top border since the input declares it already */\n}\n\n.theia-scm-validation-message-success {\n    background-color: var(--theia-successBackground) !important;\n    color: var(--theia-inputValidation-warningBackground);\n}\n\n.theia-scm-message-warning,\n.theia-scm-validation-message-warning {\n    background-color: var(--theia-inputValidation-warningBackground) !important;\n    color: var(--theia-inputValidation-warningForeground);\n    border: var(--theia-border-width) solid var(--theia-inputValidation-warningBorder);\n    border-top: none; /* remove top border since the input declares it already */\n}\n\n.theia-scm-validation-message-error {\n    background-color: var(--theia-inputValidation-errorBackground) !important;\n    color: var(--theia-inputValidation-errorForeground);\n    border: var(--theia-border-width) solid var(--theia-inputValidation-errorBorder);\n    border-top: none; /* remove top border since the input declares it already */\n}\n\n.no-select {\n    cursor: default;\n    -webkit-user-select: none;\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n}\n\n.no-select:focus {\n    outline: none;\n}\n\n.theia-scm .scmItem {\n    font-size: var(--theia-ui-font-size1);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: var(--theia-content-line-height);\n    line-height: var(--theia-content-line-height);\n    padding: 0px calc(var(--theia-ui-padding)/2);\n}\n\n.theia-scm .scmItem:hover {\n    cursor: pointer;\n}\n\n.theia-scm:focus-within .scmItem:focus {\n    background: var(--theia-list-focusBackground);\n    color: var(--theia-list-focusForeground);\n}\n\n.theia-scm:not(:focus-within) .scmItem:not(:focus) {\n    background: var(--theia-list-inactiveFocusBackground);\n}\n\n.theia-scm:focus-within .scmItem.theia-mod-selected {\n    background: var(--theia-list-activeSelectionBackground);\n    color: var(--theia-list-activeSelectionForeground);\n}\n\n.theia-scm:not(:focus-within) .scmItem.theia-mod-selected {\n    background: var(--theia-list-inactiveSelectionBackground);\n    color: var(--theia-list-inactiveSelectionForeground);\n}\n\n.theia-scm .scmItem .path {\n    font-size: var(--theia-ui-font-size0);\n    margin-left: var(--theia-ui-padding);\n    opacity: .7;\n}\n\n.theia-scm .scmItem .status {\n    width: 16px;\n    text-align: center;\n    padding-top: 2px;\n    padding-bottom: 2px;\n    font-size: var(--theia-ui-font-size0);\n}\n\n.scm-change-count {\n    float: right;\n}\n\n.scm-theia-header {\n    display: flex;\n}\n\n.scm-theia-header:hover {\n    cursor: pointer;\n}\n\n.scm-tab-icon {\n    -webkit-mask: url(" + escape(__webpack_require__(/*! ./scm.svg */ "./node_modules/@theia/scm/src/browser/style/scm.svg")) + ");\n    mask: url(" + escape(__webpack_require__(/*! ./scm.svg */ "./node_modules/@theia/scm/src/browser/style/scm.svg")) + ");\n}\n\n.theia-scm-inline-actions-container {\n    display: flex;\n    justify-content: flex-end;\n    margin-left: 3px;\n    min-height: 16px;\n}\n\n.theia-scm-inline-actions {\n    display: flex;\n    margin: 0 3px;\n}\n\n.theia-scm-inline-actions a {\n    color: var(--theia-icon-foreground);\n}\n\n.theia-scm-inline-action {\n    padding: 0px 3px;\n    font-size: var(--theia-ui-font-size1);\n    margin: 0 2px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n}\n\n.theia-scm-inline-action .open-file {\n    height: var(--theia-icon-size);\n    width: 12px;\n    background: var(--theia-icon-open-file) no-repeat center center;\n}\n\n.theia-scm-panel {\n    overflow: visible;\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=52.bundle.js.map