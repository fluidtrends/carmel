(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-frontend-contribution.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-frontend-contribution.js ***!
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
exports.SearchInWorkspaceFrontendContribution = exports.SearchInWorkspaceCommands = void 0;
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var search_in_workspace_widget_1 = __webpack_require__(/*! ./search-in-workspace-widget */ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-widget.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var navigator_contribution_1 = __webpack_require__(/*! @theia/navigator/lib/browser/navigator-contribution */ "./node_modules/@theia/navigator/lib/browser/navigator-contribution.js");
var uri_command_handler_1 = __webpack_require__(/*! @theia/core/lib/common/uri-command-handler */ "./node_modules/@theia/core/lib/common/uri-command-handler.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var browser_2 = __webpack_require__(/*! @theia/workspace/lib/browser */ "./node_modules/@theia/workspace/lib/browser/index.js");
var common_1 = __webpack_require__(/*! @theia/filesystem/lib/common */ "./node_modules/@theia/filesystem/lib/common/index.js");
var search_in_workspace_context_key_service_1 = __webpack_require__(/*! ./search-in-workspace-context-key-service */ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-context-key-service.js");
var editor_manager_1 = __webpack_require__(/*! @theia/editor/lib/browser/editor-manager */ "./node_modules/@theia/editor/lib/browser/editor-manager.js");
var vscode_languageserver_types_1 = __webpack_require__(/*! vscode-languageserver-types */ "./node_modules/vscode-languageserver-types/lib/esm/main.js");
var SearchInWorkspaceCommands;
(function (SearchInWorkspaceCommands) {
    var SEARCH_CATEGORY = 'Search';
    SearchInWorkspaceCommands.TOGGLE_SIW_WIDGET = {
        id: 'search-in-workspace.toggle'
    };
    SearchInWorkspaceCommands.OPEN_SIW_WIDGET = {
        id: 'search-in-workspace.open',
        category: SEARCH_CATEGORY,
        label: 'Find in Files'
    };
    SearchInWorkspaceCommands.FIND_IN_FOLDER = {
        id: 'search-in-workspace.in-folder',
        category: SEARCH_CATEGORY,
        label: 'Find in Folder'
    };
    SearchInWorkspaceCommands.REFRESH_RESULTS = {
        id: 'search-in-workspace.refresh',
        category: SEARCH_CATEGORY,
        label: 'Refresh',
        iconClass: 'refresh'
    };
    SearchInWorkspaceCommands.CANCEL_SEARCH = {
        id: 'search-in-workspace.cancel',
        category: SEARCH_CATEGORY,
        label: 'Cancel Search',
        iconClass: 'cancel'
    };
    SearchInWorkspaceCommands.COLLAPSE_ALL = {
        id: 'search-in-workspace.collapse-all',
        category: SEARCH_CATEGORY,
        label: 'Collapse All',
        iconClass: 'theia-collapse-all-icon'
    };
    SearchInWorkspaceCommands.CLEAR_ALL = {
        id: 'search-in-workspace.clear-all',
        category: SEARCH_CATEGORY,
        label: 'Clear Search Results',
        iconClass: 'clear-all'
    };
})(SearchInWorkspaceCommands = exports.SearchInWorkspaceCommands || (exports.SearchInWorkspaceCommands = {}));
var SearchInWorkspaceFrontendContribution = /** @class */ (function (_super) {
    __extends(SearchInWorkspaceFrontendContribution, _super);
    function SearchInWorkspaceFrontendContribution() {
        return _super.call(this, {
            widgetId: search_in_workspace_widget_1.SearchInWorkspaceWidget.ID,
            widgetName: search_in_workspace_widget_1.SearchInWorkspaceWidget.LABEL,
            defaultWidgetOptions: {
                area: 'left',
                rank: 200
            },
            toggleCommandId: SearchInWorkspaceCommands.TOGGLE_SIW_WIDGET.id
        }) || this;
    }
    SearchInWorkspaceFrontendContribution.prototype.init = function () {
        var _this = this;
        var updateFocusContextKey = function () {
            return _this.contextKeyService.searchViewletFocus.set(_this.shell.activeWidget instanceof search_in_workspace_widget_1.SearchInWorkspaceWidget);
        };
        updateFocusContextKey();
        this.shell.activeChanged.connect(updateFocusContextKey);
    };
    SearchInWorkspaceFrontendContribution.prototype.initializeLayout = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openView({ activate: false })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchInWorkspaceFrontendContribution.prototype.registerCommands = function (commands) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                _super.prototype.registerCommands.call(this, commands);
                commands.registerCommand(SearchInWorkspaceCommands.OPEN_SIW_WIDGET, {
                    isEnabled: function () { return _this.workspaceService.tryGetRoots().length > 0; },
                    execute: function () { return __awaiter(_this, void 0, void 0, function () {
                        var widget;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.openView({ activate: true })];
                                case 1:
                                    widget = _a.sent();
                                    widget.updateSearchTerm(this.getSearchTerm());
                                    return [2 /*return*/];
                            }
                        });
                    }); }
                });
                commands.registerCommand(SearchInWorkspaceCommands.FIND_IN_FOLDER, this.newMultiUriAwareCommandHandler({
                    execute: function (uris) { return __awaiter(_this, void 0, void 0, function () {
                        var resources, widget;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    resources = [];
                                    return [4 /*yield*/, Promise.all(uris.map(function (uri) {
                                            return _this.fileSystem.getFileStat(uri.toString());
                                        })).then(function (stats) {
                                            var e_1, _a;
                                            try {
                                                for (var stats_1 = __values(stats), stats_1_1 = stats_1.next(); !stats_1_1.done; stats_1_1 = stats_1.next()) {
                                                    var stat = stats_1_1.value;
                                                    if (stat) {
                                                        var uri = new uri_1.default(stat.uri);
                                                        var uriStr = _this.labelProvider.getLongName(uri);
                                                        if (stat && !stat.isDirectory) {
                                                            uriStr = _this.labelProvider.getLongName(uri.parent);
                                                        }
                                                        resources.push(uriStr);
                                                    }
                                                }
                                            }
                                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                            finally {
                                                try {
                                                    if (stats_1_1 && !stats_1_1.done && (_a = stats_1.return)) _a.call(stats_1);
                                                }
                                                finally { if (e_1) throw e_1.error; }
                                            }
                                        })];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, this.openView({ activate: true })];
                                case 2:
                                    widget = _a.sent();
                                    widget.findInFolder(resources);
                                    return [2 /*return*/];
                            }
                        });
                    }); }
                }));
                commands.registerCommand(SearchInWorkspaceCommands.CANCEL_SEARCH, {
                    execute: function (w) { return _this.withWidget(w, function (widget) { return widget.getCancelIndicator() && widget.getCancelIndicator().cancel(); }); },
                    isEnabled: function (w) { return _this.withWidget(w, function (widget) { return widget.getCancelIndicator() !== undefined; }); },
                    isVisible: function (w) { return _this.withWidget(w, function (widget) { return widget.getCancelIndicator() !== undefined; }); }
                });
                commands.registerCommand(SearchInWorkspaceCommands.REFRESH_RESULTS, {
                    execute: function (w) { return _this.withWidget(w, function (widget) { return widget.refresh(); }); },
                    isEnabled: function (w) { return _this.withWidget(w, function (widget) { return (widget.hasResultList() || widget.hasSearchTerm()) && _this.workspaceService.tryGetRoots().length > 0; }); },
                    isVisible: function (w) { return _this.withWidget(w, function () { return true; }); }
                });
                commands.registerCommand(SearchInWorkspaceCommands.COLLAPSE_ALL, {
                    execute: function (w) { return _this.withWidget(w, function (widget) { return widget.collapseAll(); }); },
                    isEnabled: function (w) { return _this.withWidget(w, function (widget) { return widget.hasResultList(); }); },
                    isVisible: function (w) { return _this.withWidget(w, function () { return true; }); }
                });
                commands.registerCommand(SearchInWorkspaceCommands.CLEAR_ALL, {
                    execute: function (w) { return _this.withWidget(w, function (widget) { return widget.clear(); }); },
                    isEnabled: function (w) { return _this.withWidget(w, function (widget) { return widget.hasResultList(); }); },
                    isVisible: function (w) { return _this.withWidget(w, function () { return true; }); }
                });
                return [2 /*return*/];
            });
        });
    };
    SearchInWorkspaceFrontendContribution.prototype.withWidget = function (widget, fn) {
        if (widget === void 0) { widget = this.tryGetWidget(); }
        if (widget instanceof search_in_workspace_widget_1.SearchInWorkspaceWidget && widget.id === search_in_workspace_widget_1.SearchInWorkspaceWidget.ID) {
            return fn(widget);
        }
        return false;
    };
    /**
     * Get the search term based on current editor selection.
     * @returns the selection if available.
     */
    SearchInWorkspaceFrontendContribution.prototype.getSearchTerm = function () {
        if (!this.editorManager.currentEditor) {
            return '';
        }
        // Get the current editor selection.
        var selection = this.editorManager.currentEditor.editor.selection;
        // Compute the selection range.
        var selectedRange = vscode_languageserver_types_1.Range.create(selection.start.line, selection.start.character, selection.end.line, selection.end.character);
        // Return the selection text if available, else return empty.
        return this.editorManager.currentEditor
            ? this.editorManager.currentEditor.editor.document.getText(selectedRange)
            : '';
    };
    SearchInWorkspaceFrontendContribution.prototype.registerKeybindings = function (keybindings) {
        _super.prototype.registerKeybindings.call(this, keybindings);
        keybindings.registerKeybinding({
            command: SearchInWorkspaceCommands.OPEN_SIW_WIDGET.id,
            keybinding: 'ctrlcmd+shift+f'
        });
    };
    SearchInWorkspaceFrontendContribution.prototype.registerMenus = function (menus) {
        _super.prototype.registerMenus.call(this, menus);
        menus.registerMenuAction(navigator_contribution_1.NavigatorContextMenu.SEARCH, {
            commandId: SearchInWorkspaceCommands.FIND_IN_FOLDER.id
        });
        menus.registerMenuAction(browser_1.CommonMenus.EDIT_FIND, {
            commandId: SearchInWorkspaceCommands.OPEN_SIW_WIDGET.id
        });
    };
    SearchInWorkspaceFrontendContribution.prototype.registerToolbarItems = function (toolbarRegistry) {
        return __awaiter(this, void 0, void 0, function () {
            var widget, onDidChange;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.widget];
                    case 1:
                        widget = _a.sent();
                        onDidChange = widget.onDidUpdate;
                        toolbarRegistry.registerItem({
                            id: SearchInWorkspaceCommands.CANCEL_SEARCH.id,
                            command: SearchInWorkspaceCommands.CANCEL_SEARCH.id,
                            tooltip: SearchInWorkspaceCommands.CANCEL_SEARCH.label,
                            priority: 0,
                            onDidChange: onDidChange
                        });
                        toolbarRegistry.registerItem({
                            id: SearchInWorkspaceCommands.REFRESH_RESULTS.id,
                            command: SearchInWorkspaceCommands.REFRESH_RESULTS.id,
                            tooltip: SearchInWorkspaceCommands.REFRESH_RESULTS.label,
                            priority: 1,
                            onDidChange: onDidChange
                        });
                        toolbarRegistry.registerItem({
                            id: SearchInWorkspaceCommands.CLEAR_ALL.id,
                            command: SearchInWorkspaceCommands.CLEAR_ALL.id,
                            tooltip: SearchInWorkspaceCommands.CLEAR_ALL.label,
                            priority: 2,
                            onDidChange: onDidChange
                        });
                        toolbarRegistry.registerItem({
                            id: SearchInWorkspaceCommands.COLLAPSE_ALL.id,
                            command: SearchInWorkspaceCommands.COLLAPSE_ALL.id,
                            tooltip: SearchInWorkspaceCommands.COLLAPSE_ALL.label,
                            priority: 3,
                            onDidChange: onDidChange
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchInWorkspaceFrontendContribution.prototype.newUriAwareCommandHandler = function (handler) {
        return new uri_command_handler_1.UriAwareCommandHandler(this.selectionService, handler);
    };
    SearchInWorkspaceFrontendContribution.prototype.newMultiUriAwareCommandHandler = function (handler) {
        return new uri_command_handler_1.UriAwareCommandHandler(this.selectionService, handler, { multi: true });
    };
    __decorate([
        inversify_1.inject(core_1.SelectionService),
        __metadata("design:type", core_1.SelectionService)
    ], SearchInWorkspaceFrontendContribution.prototype, "selectionService", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], SearchInWorkspaceFrontendContribution.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], SearchInWorkspaceFrontendContribution.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], SearchInWorkspaceFrontendContribution.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(editor_manager_1.EditorManager),
        __metadata("design:type", editor_manager_1.EditorManager)
    ], SearchInWorkspaceFrontendContribution.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(search_in_workspace_context_key_service_1.SearchInWorkspaceContextKeyService),
        __metadata("design:type", search_in_workspace_context_key_service_1.SearchInWorkspaceContextKeyService)
    ], SearchInWorkspaceFrontendContribution.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SearchInWorkspaceFrontendContribution.prototype, "init", null);
    SearchInWorkspaceFrontendContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], SearchInWorkspaceFrontendContribution);
    return SearchInWorkspaceFrontendContribution;
}(browser_1.AbstractViewContribution));
exports.SearchInWorkspaceFrontendContribution = SearchInWorkspaceFrontendContribution;


/***/ }),

/***/ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-frontend-module.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-frontend-module.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017-2018 Ericsson and others.
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
exports.createSearchTreeWidget = void 0;
__webpack_require__(/*! ../../src/browser/styles/index.css */ "./node_modules/@theia/search-in-workspace/src/browser/styles/index.css");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var search_in_workspace_service_1 = __webpack_require__(/*! ./search-in-workspace-service */ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-service.js");
var search_in_workspace_interface_1 = __webpack_require__(/*! ../common/search-in-workspace-interface */ "./node_modules/@theia/search-in-workspace/lib/common/search-in-workspace-interface.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var search_in_workspace_widget_1 = __webpack_require__(/*! ./search-in-workspace-widget */ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-widget.js");
var search_in_workspace_result_tree_widget_1 = __webpack_require__(/*! ./search-in-workspace-result-tree-widget */ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-result-tree-widget.js");
var search_in_workspace_frontend_contribution_1 = __webpack_require__(/*! ./search-in-workspace-frontend-contribution */ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-frontend-contribution.js");
var in_memory_text_resource_1 = __webpack_require__(/*! ./in-memory-text-resource */ "./node_modules/@theia/search-in-workspace/lib/browser/in-memory-text-resource.js");
var search_in_workspace_context_key_service_1 = __webpack_require__(/*! ./search-in-workspace-context-key-service */ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-context-key-service.js");
var tab_bar_toolbar_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-toolbar */ "./node_modules/@theia/core/lib/browser/shell/tab-bar-toolbar.js");
var search_in_workspace_preferences_1 = __webpack_require__(/*! ./search-in-workspace-preferences */ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-preferences.js");
var search_in_workspace_label_provider_1 = __webpack_require__(/*! ./search-in-workspace-label-provider */ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-label-provider.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(search_in_workspace_context_key_service_1.SearchInWorkspaceContextKeyService).toSelf().inSingletonScope();
    bind(search_in_workspace_widget_1.SearchInWorkspaceWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: search_in_workspace_widget_1.SearchInWorkspaceWidget.ID,
        createWidget: function () { return ctx.container.get(search_in_workspace_widget_1.SearchInWorkspaceWidget); }
    }); });
    bind(search_in_workspace_result_tree_widget_1.SearchInWorkspaceResultTreeWidget).toDynamicValue(function (ctx) { return createSearchTreeWidget(ctx.container); });
    browser_1.bindViewContribution(bind, search_in_workspace_frontend_contribution_1.SearchInWorkspaceFrontendContribution);
    bind(browser_1.FrontendApplicationContribution).toService(search_in_workspace_frontend_contribution_1.SearchInWorkspaceFrontendContribution);
    bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(search_in_workspace_frontend_contribution_1.SearchInWorkspaceFrontendContribution);
    // The object that gets notified of search results.
    bind(search_in_workspace_service_1.SearchInWorkspaceClientImpl).toSelf().inSingletonScope();
    bind(search_in_workspace_service_1.SearchInWorkspaceService).toSelf().inSingletonScope();
    // The object to call methods on the backend.
    bind(search_in_workspace_interface_1.SearchInWorkspaceServer).toDynamicValue(function (ctx) {
        var client = ctx.container.get(search_in_workspace_service_1.SearchInWorkspaceClientImpl);
        return browser_1.WebSocketConnectionProvider.createProxy(ctx.container, search_in_workspace_interface_1.SIW_WS_PATH, client);
    }).inSingletonScope();
    bind(in_memory_text_resource_1.InMemoryTextResourceResolver).toSelf().inSingletonScope();
    bind(core_1.ResourceResolver).toService(in_memory_text_resource_1.InMemoryTextResourceResolver);
    search_in_workspace_preferences_1.bindSearchInWorkspacePreferences(bind);
    bind(search_in_workspace_label_provider_1.SearchInWorkspaceLabelProvider).toSelf().inSingletonScope();
    bind(browser_1.LabelProviderContribution).toService(search_in_workspace_label_provider_1.SearchInWorkspaceLabelProvider);
});
function createSearchTreeWidget(parent) {
    var child = browser_1.createTreeContainer(parent);
    child.unbind(browser_1.TreeWidget);
    child.bind(search_in_workspace_result_tree_widget_1.SearchInWorkspaceResultTreeWidget).toSelf();
    return child.get(search_in_workspace_result_tree_widget_1.SearchInWorkspaceResultTreeWidget);
}
exports.createSearchTreeWidget = createSearchTreeWidget;


/***/ }),

/***/ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-label-provider.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-label-provider.js ***!
  \***************************************************************************************************/
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
exports.SearchInWorkspaceLabelProvider = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var label_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/label-provider */ "./node_modules/@theia/core/lib/browser/label-provider.js");
var search_in_workspace_result_tree_widget_1 = __webpack_require__(/*! ./search-in-workspace-result-tree-widget */ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-result-tree-widget.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var SearchInWorkspaceLabelProvider = /** @class */ (function () {
    function SearchInWorkspaceLabelProvider() {
    }
    SearchInWorkspaceLabelProvider.prototype.canHandle = function (element) {
        return search_in_workspace_result_tree_widget_1.SearchInWorkspaceRootFolderNode.is(element) || search_in_workspace_result_tree_widget_1.SearchInWorkspaceFileNode.is(element) ? 100 : 0;
    };
    SearchInWorkspaceLabelProvider.prototype.getIcon = function (node) {
        if (search_in_workspace_result_tree_widget_1.SearchInWorkspaceFileNode.is(node)) {
            return this.labelProvider.getIcon(new uri_1.default(node.fileUri).withScheme('file'));
        }
        return this.labelProvider.folderIcon;
    };
    SearchInWorkspaceLabelProvider.prototype.getName = function (node) {
        var uri = search_in_workspace_result_tree_widget_1.SearchInWorkspaceFileNode.is(node) ? node.fileUri : node.folderUri;
        return new uri_1.default(uri).displayName;
    };
    SearchInWorkspaceLabelProvider.prototype.affects = function (node, event) {
        return search_in_workspace_result_tree_widget_1.SearchInWorkspaceFileNode.is(node) && event.affects(new uri_1.default(node.fileUri).withScheme('file'));
    };
    __decorate([
        inversify_1.inject(label_provider_1.LabelProvider),
        __metadata("design:type", label_provider_1.LabelProvider)
    ], SearchInWorkspaceLabelProvider.prototype, "labelProvider", void 0);
    SearchInWorkspaceLabelProvider = __decorate([
        inversify_1.injectable()
    ], SearchInWorkspaceLabelProvider);
    return SearchInWorkspaceLabelProvider;
}());
exports.SearchInWorkspaceLabelProvider = SearchInWorkspaceLabelProvider;


/***/ }),

/***/ "./node_modules/@theia/search-in-workspace/src/browser/styles/index.css":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/search-in-workspace/src/browser/styles/index.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./index.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/search-in-workspace/src/browser/styles/index.css");

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

/***/ "./node_modules/@theia/search-in-workspace/src/browser/styles/search.svg":
/*!*******************************************************************************!*\
  !*** ./node_modules/@theia/search-in-workspace/src/browser/styles/search.svg ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE5IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgZmlsbD0iI0Y2RjZGNiIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI4IDI4IiB3aWR0aD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJtMTcuMTI0OSAyYy00LjkxMjcgMC04Ljg5NzAxIDMuOTg1MzMtOC44OTcwMSA4Ljg5OSAwIDEuODA3LjU0Njg2IDMuNDgwMSAxLjQ3MDE0IDQuODg1MyAwIDAtNS41NjIgNS41MzQ2LTcuMjA1NjQgNy4yMDU2LTEuNjQ0NjYyIDEuNjcwMSAxLjAxNTYgNC4xMzA0IDIuNjM5OTcgMi40NDQyIDEuNjI1MzgtMS42ODMyIDcuMTA4MjQtNy4xMDcyIDcuMTA4MjQtNy4xMDcyIDEuNDA0Mi45MjQzIDMuMDc5MyAxLjQ3MTEgNC44ODQzIDEuNDcxMSA0LjkxNTcgMCA4LjktMy45ODczIDguOS04Ljg5OS4wMDEtNC45MTQ2OS0zLjk4NDMtOC44OTktOC45LTguODk5em0wIDE1LjI1NDRjLTMuNTA5NSAwLTYuMzU2NS0yLjg0NDktNi4zNTY1LTYuMzU1NCAwLTMuNTEwNDkgMi44NDYtNi4zNTY0MyA2LjM1NjUtNi4zNTY0MyAzLjUxMjUgMCA2LjM1NzQgMi44NDQ5MyA2LjM1NzQgNi4zNTY0MyAwIDMuNTEwNS0yLjg0NDkgNi4zNTU0LTYuMzU3NCA2LjM1NTR6IiBmaWxsPSIjRjZGNkY2IiAvPgo8L3N2Zz4K"

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/search-in-workspace/src/browser/styles/index.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/search-in-workspace/src/browser/styles/index.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2017-2018 Ericsson and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.t-siw-search-container {\n    padding: 5px ;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    box-sizing: border-box;\n}\n\n.t-siw-search-container .theia-ExpansionToggle {\n    padding-right: 4px;\n    min-width: 6px;\n}\n\n.t-siw-search-container .theia-input {\n    flex: 1;\n    line-height: var(--theia-content-line-height);\n    padding-left: 8px;\n    padding: 3px 0 3px 4px;\n}\n\n.t-siw-search-container #search-input-field:focus {\n    border: none;\n    outline: none;\n}\n\n.t-siw-search-container #search-input-field {\n    background: none;\n    border: none;\n}\n\n.t-siw-search-container .searchHeader {\n    width: 100%;\n    margin-bottom:  10px;\n}\n\n.t-siw-search-container .searchHeader .controls.button-container {\n    height: var(--theia-content-line-height);\n    margin-bottom: 5px;\n}\n\n.t-siw-search-container .searchHeader .search-field-container {\n    background: var(--theia-input-background);\n    border-style: solid;\n    border-width: var(--theia-border-width);\n    border-color: var(--theia-input-background);\n}\n\n.t-siw-search-container .searchHeader .search-field-container.focused {\n    border-color: var(--theia-focusBorder);\n}\n\n.t-siw-search-container .searchHeader .search-field {\n    display: flex;\n    align-items:  center;\n}\n\n.t-siw-search-container .searchHeader .search-field:focus {\n    border: none;\n    outline: none;\n}\n\n.t-siw-search-container .searchHeader .search-field .option {\n    opacity: 0.7;\n    cursor: pointer;\n}\n\n.t-siw-search-container .searchHeader .search-field .option.enabled {\n    border: var(--theia-border-width) var(--theia-inputOption-activeBorder) solid;\n    background-color: var(--theia-inputOption-activeBackground);\n}\n\n.t-siw-search-container .searchHeader .search-field .option:hover {\n    opacity: 1;\n}\n\n.t-siw-search-container .searchHeader .search-field .option.match-case {\n    background-image: var(--theia-icon-case-sensitive);\n}\n\n.t-siw-search-container .searchHeader .search-field .option.whole-word {\n    background-image: var(--theia-icon-whole-word);\n}\n\n.t-siw-search-container .searchHeader .search-field .option.use-regexp {\n    background-image: var(--theia-icon-regex);\n}\n\n.t-siw-search-container .searchHeader .search-field .option-buttons {\n    height: 23px;\n    display: flex;\n    align-items:  center;\n    background-color: none;\n}\n\n.t-siw-search-container .searchHeader .search-field-container.tooManyResults {\n    border-style: solid;\n    border-width: var(--theia-border-width);\n    margin: -1px;\n    border-color: var(--theia-inputValidation-warningBorder);\n}\n\n.t-siw-search-container .searchHeader .search-field-container .search-notification {\n    height: 0;\n    display: none;\n    width: 100%;\n    position: relative;\n}\n\n.t-siw-search-container .searchHeader .search-field-container.focused .search-notification.show {\n    display: block;\n}\n\n.t-siw-search-container .searchHeader .search-notification div{\n    background-color: var(--theia-inputValidation-warningBackground);\n    width: calc(100% + 2px);\n    margin-left: -1px;\n    color: var(--theia-inputValidation-warningForeground);\n    z-index: 1000;\n    position: absolute;\n    border: 1px solid var(--theia-inputValidation-warningBorder);\n    box-sizing: border-box;\n    padding: 3px;\n}\n\n.t-siw-search-container .searchHeader .button-container {\n    text-align: center;\n    display: flex;\n    justify-content: center;\n}\n\n.t-siw-search-container .searchHeader .search-field .option,\n.t-siw-search-container .searchHeader .button-container .btn {\n    width: 21px;\n    height: 21px;\n    margin: 0 1px;\n    display: inline-block;\n    box-sizing: border-box;\n    align-items: center;\n    user-select: none;\n    background-repeat: no-repeat;\n    background-position: center;\n    border: var(--theia-border-width) solid transparent;\n}\n\n.t-siw-search-container .searchHeader .search-field .fa.option {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.t-siw-search-container .searchHeader .search-details {\n    position: relative;\n    padding-top: 5px;\n}\n\n.t-siw-search-container .searchHeader .search-details .button-container {\n    position: absolute;\n    width: 25px;\n    top:0;\n    right:0;\n}\n\n.t-siw-search-container .searchHeader .search-details .button-container .btn{\n    cursor: pointer;\n}\n\n.t-siw-search-container .searchHeader .glob-field-container.hidden {\n    display: none;\n}\n\n.t-siw-search-container .searchHeader .glob-field-container .glob-field {\n    margin-bottom: 8px;\n    margin-left: 14px;\n    display: flex;\n    flex-direction: column;\n}\n\n.t-siw-search-container .searchHeader .glob-field-container .glob-field .label {\n    margin-bottom: 3px;\n    user-select: none;\n    font-size: var(--theia-ui-font-size0);\n}\n\n.t-siw-search-container .resultContainer {\n    height: 100%;\n    margin-left: 13px;\n}\n\n.t-siw-search-container .result {\n    overflow: hidden;\n    width: 100%;\n}\n\n.t-siw-search-container .result .result-head {\n    display:flex;\n}\n\n.t-siw-search-container .result .result-head .fa,\n.t-siw-search-container .result .result-head .theia-file-icons-js {\n    margin: 0 3px;\n}\n\n.t-siw-search-container .result .result-head .file-name {\n    margin-right: 5px;\n}\n\n.t-siw-search-container .result .result-head .file-path {\n    color: var(--theia-descriptionForeground);\n    font-size: var(--theia-ui-font-size0);\n    margin-left: 3px;\n}\n\n.t-siw-search-container .resultLine .match {\n    line-height: normal;\n    white-space: pre;\n    background: var(--theia-editor-findMatchHighlightBackground);\n    border: 1px solid var(--theia-editor-findMatchHighlightBorder);\n}\n.theia-hc .t-siw-search-container .resultLine .match {\n    border-style: dashed;\n}\n\n.t-siw-search-container .resultLine .match.strike-through {\n    text-decoration: line-through;\n    background: var(--theia-diffEditor-removedTextBackground);\n    border-color: var(--theia-diffEditor-removedTextBorder);\n}\n\n.t-siw-search-container .resultLine .replace-term {\n    background: var(--theia-diffEditor-insertedTextBackground);\n    border: 1p solid var(--theia-diffEditor-insertedTextBorder);\n}\n.theia-hc\n.t-siw-search-container .resultLine .replace-term {\n    border-style: dashed;\n}\n\n.t-siw-search-container .noWrapInfo {\n    width: 100%;\n}\n\n.t-siw-search-container .result-head-info {\n    display: inline-flex;\n    align-items: center;\n}\n\n.search-in-workspace-editor-match {\n    background: var(--theia-editor-findMatchHighlightBackground);\n}\n\n.current-search-in-workspace-editor-match {\n    background: var(--theia-editor-findMatchBackground)\n}\n\n.current-match-range-highlight {\n    background: var(--theia-editor-findRangeHighlightBackground);\n}\n\n.result-node-buttons {\n    display: none;\n}\n\n.theia-TreeNode:hover .result-node-buttons {\n    display: flex;\n    justify-content: flex-end;\n    flex: 1;\n    align-items: center;\n    align-self: center;\n}\n\n.theia-TreeNode:hover .result-head .notification-count-container {\n    display: none;\n}\n\n.result-node-buttons .remove-node {\n    background-image: var(--theia-icon-close);\n}\n\n.result-node-buttons > span {\n    width: 15px;\n    height: 15px;\n    margin-left: 2.5px;\n    margin-right: 0.5px;\n    background-repeat:  no-repeat;\n    background-position: center;\n    background-size: contain;\n}\n\n.search-and-replace-container {\n    display: flex;\n}\n\n.replace-toggle {\n    display: flex;\n    align-items:  center;\n    width: 15px;\n    min-width: 15px;\n    justify-content: center;\n    margin-right: 1px;\n    box-sizing: border-box;\n}\n\n.theia-side-panel .replace-toggle {\n    width: 13px;\n    min-width: 13px;\n}\n\n.replace-toggle:hover {\n    background: rgba(0, 0, 0, 0.1);\n}\n\n.search-and-replace-fields {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n}\n\n.replace-field {\n    display: flex;\n    margin-top: 5px;\n}\n\n.replace-field.hidden {\n    display: none;\n}\n\n.replace-all-button-container {\n    width: 25px;\n    display: flex;\n    align-items: center;\n    justify-content:  center;\n}\n\n.replace-all-button {\n    width:  100%;\n    height: 100%;\n    display: inline-block;\n    background: var(--theia-icon-replace-all) no-repeat center;\n    cursor: pointer;\n}\n\n.result-node-buttons .replace-result {\n    background-image: var(--theia-icon-replace);\n}\n.result-node-buttons .replace-all-result {\n    background-image: var(--theia-icon-replace-all);\n}\n\n.replace-all-button.disabled {\n    opacity: var(--theia-mod-disabled-opacity);;\n    cursor: default;\n}\n\n.search-in-workspace-tab-icon {\n    -webkit-mask: url(" + escape(__webpack_require__(/*! ./search.svg */ "./node_modules/@theia/search-in-workspace/src/browser/styles/search.svg")) + ");\n    mask: url(" + escape(__webpack_require__(/*! ./search.svg */ "./node_modules/@theia/search-in-workspace/src/browser/styles/search.svg")) + ");\n}\n\n.highlighted-count-container {\n    background-color: var(--theia-list-activeSelectionBackground);\n    color: var(--theia-list-activeSelectionForeground);\n}\n\n.t-siw-search-container .searchHeader .search-info {\n    color: var(--theia-descriptionForeground);\n    margin-left: 17px;\n}\n\n.theia-siw-lineNumber {\n    opacity: .7;\n    padding-right: 4px;\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=60.bundle.js.map