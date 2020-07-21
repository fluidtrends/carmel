(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/@theia/navigator/lib/browser/navigator-contribution.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@theia/navigator/lib/browser/navigator-contribution.js ***!
  \*****************************************************************************/
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
exports.FileNavigatorContribution = exports.NavigatorContextMenu = exports.NAVIGATOR_CONTEXT_MENU = exports.NavigatorMoreToolbarGroups = exports.FileNavigatorCommands = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var view_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/view-contribution */ "./node_modules/@theia/core/lib/browser/shell/view-contribution.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var file_download_command_contribution_1 = __webpack_require__(/*! @theia/filesystem/lib/browser/download/file-download-command-contribution */ "./node_modules/@theia/filesystem/lib/browser/download/file-download-command-contribution.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var browser_2 = __webpack_require__(/*! @theia/workspace/lib/browser */ "./node_modules/@theia/workspace/lib/browser/index.js");
var navigator_widget_1 = __webpack_require__(/*! ./navigator-widget */ "./node_modules/@theia/navigator/lib/browser/navigator-widget.js");
var navigator_preferences_1 = __webpack_require__(/*! ./navigator-preferences */ "./node_modules/@theia/navigator/lib/browser/navigator-preferences.js");
var navigator_keybinding_context_1 = __webpack_require__(/*! ./navigator-keybinding-context */ "./node_modules/@theia/navigator/lib/browser/navigator-keybinding-context.js");
var navigator_filter_1 = __webpack_require__(/*! ./navigator-filter */ "./node_modules/@theia/navigator/lib/browser/navigator-filter.js");
var navigator_tree_1 = __webpack_require__(/*! ./navigator-tree */ "./node_modules/@theia/navigator/lib/browser/navigator-tree.js");
var navigator_context_key_service_1 = __webpack_require__(/*! ./navigator-context-key-service */ "./node_modules/@theia/navigator/lib/browser/navigator-context-key-service.js");
var tab_bar_toolbar_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-toolbar */ "./node_modules/@theia/core/lib/browser/shell/tab-bar-toolbar.js");
var filesystem_frontend_contribution_1 = __webpack_require__(/*! @theia/filesystem/lib/browser/filesystem-frontend-contribution */ "./node_modules/@theia/filesystem/lib/browser/filesystem-frontend-contribution.js");
var navigator_diff_1 = __webpack_require__(/*! ./navigator-diff */ "./node_modules/@theia/navigator/lib/browser/navigator-diff.js");
var selection_1 = __webpack_require__(/*! @theia/core/lib/common/selection */ "./node_modules/@theia/core/lib/common/selection.js");
var browser_3 = __webpack_require__(/*! @theia/filesystem/lib/browser */ "./node_modules/@theia/filesystem/lib/browser/index.js");
var clipboard_service_1 = __webpack_require__(/*! @theia/core/lib/browser/clipboard-service */ "./node_modules/@theia/core/lib/browser/clipboard-service.js");
var selection_service_1 = __webpack_require__(/*! @theia/core/lib/common/selection-service */ "./node_modules/@theia/core/lib/common/selection-service.js");
var uri_command_handler_1 = __webpack_require__(/*! @theia/core/lib/common/uri-command-handler */ "./node_modules/@theia/core/lib/common/uri-command-handler.js");
var FileNavigatorCommands;
(function (FileNavigatorCommands) {
    FileNavigatorCommands.REVEAL_IN_NAVIGATOR = {
        id: 'navigator.reveal',
        label: 'Reveal in Explorer'
    };
    FileNavigatorCommands.TOGGLE_HIDDEN_FILES = {
        id: 'navigator.toggle.hidden.files',
        label: 'Toggle Hidden Files'
    };
    FileNavigatorCommands.TOGGLE_AUTO_REVEAL = {
        id: 'navigator.toggle.autoReveal',
        category: 'File',
        label: 'Auto Reveal'
    };
    FileNavigatorCommands.REFRESH_NAVIGATOR = {
        id: 'navigator.refresh',
        category: 'File',
        label: 'Refresh in Explorer',
        iconClass: 'refresh'
    };
    FileNavigatorCommands.COLLAPSE_ALL = {
        id: 'navigator.collapse.all',
        category: 'File',
        label: 'Collapse Folders in Explorer',
        iconClass: 'theia-collapse-all-icon'
    };
    FileNavigatorCommands.ADD_ROOT_FOLDER = {
        id: 'navigator.addRootFolder'
    };
    FileNavigatorCommands.FOCUS = {
        id: 'workbench.files.action.focusFilesExplorer',
        category: 'File',
        label: 'Focus on Files Explorer'
    };
    FileNavigatorCommands.COPY_RELATIVE_FILE_PATH = {
        id: 'navigator.copyRelativeFilePath'
    };
})(FileNavigatorCommands = exports.FileNavigatorCommands || (exports.FileNavigatorCommands = {}));
/**
 * Navigator `More Actions...` toolbar item groups.
 * Used in order to group items present in the toolbar.
 */
var NavigatorMoreToolbarGroups;
(function (NavigatorMoreToolbarGroups) {
    NavigatorMoreToolbarGroups.NEW_OPEN = '1_navigator_new_open';
    NavigatorMoreToolbarGroups.TOOLS = '2_navigator_tools';
    NavigatorMoreToolbarGroups.WORKSPACE = '3_navigator_workspace';
})(NavigatorMoreToolbarGroups = exports.NavigatorMoreToolbarGroups || (exports.NavigatorMoreToolbarGroups = {}));
exports.NAVIGATOR_CONTEXT_MENU = ['navigator-context-menu'];
/**
 * Navigator context menu default groups should be aligned
 * with VS Code default groups: https://code.visualstudio.com/api/references/contribution-points#contributes.menus
 */
var NavigatorContextMenu;
(function (NavigatorContextMenu) {
    NavigatorContextMenu.NAVIGATION = __spread(exports.NAVIGATOR_CONTEXT_MENU, ['navigation']);
    /** @deprecated use NAVIGATION */
    NavigatorContextMenu.OPEN = NavigatorContextMenu.NAVIGATION;
    /** @deprecated use NAVIGATION */
    NavigatorContextMenu.NEW = NavigatorContextMenu.NAVIGATION;
    NavigatorContextMenu.WORKSPACE = __spread(exports.NAVIGATOR_CONTEXT_MENU, ['2_workspace']);
    NavigatorContextMenu.COMPARE = __spread(exports.NAVIGATOR_CONTEXT_MENU, ['3_compare']);
    /** @deprecated use COMPARE */
    NavigatorContextMenu.DIFF = NavigatorContextMenu.COMPARE;
    NavigatorContextMenu.SEARCH = __spread(exports.NAVIGATOR_CONTEXT_MENU, ['4_search']);
    NavigatorContextMenu.CLIPBOARD = __spread(exports.NAVIGATOR_CONTEXT_MENU, ['5_cutcopypaste']);
    NavigatorContextMenu.MODIFICATION = __spread(exports.NAVIGATOR_CONTEXT_MENU, ['7_modification']);
    /** @deprecated use MODIFICATION */
    NavigatorContextMenu.MOVE = NavigatorContextMenu.MODIFICATION;
    /** @deprecated use MODIFICATION */
    NavigatorContextMenu.ACTIONS = NavigatorContextMenu.MODIFICATION;
    NavigatorContextMenu.OPEN_WITH = __spread(NavigatorContextMenu.NAVIGATION, ['open_with']);
})(NavigatorContextMenu = exports.NavigatorContextMenu || (exports.NavigatorContextMenu = {}));
var FileNavigatorContribution = /** @class */ (function (_super) {
    __extends(FileNavigatorContribution, _super);
    function FileNavigatorContribution(fileNavigatorPreferences, openerService, fileNavigatorFilter, workspaceService, workspacePreferences) {
        var _this = _super.call(this, {
            viewContainerId: navigator_widget_1.EXPLORER_VIEW_CONTAINER_ID,
            widgetId: navigator_widget_1.FILE_NAVIGATOR_ID,
            widgetName: 'Explorer',
            defaultWidgetOptions: {
                area: 'left',
                rank: 100
            },
            toggleCommandId: 'fileNavigator:toggle',
            toggleKeybinding: 'ctrlcmd+shift+e'
        }) || this;
        _this.fileNavigatorPreferences = fileNavigatorPreferences;
        _this.openerService = openerService;
        _this.fileNavigatorFilter = fileNavigatorFilter;
        _this.workspaceService = workspaceService;
        _this.workspacePreferences = workspacePreferences;
        /**
         * Register commands to the `More Actions...` navigator toolbar item.
         */
        _this.registerMoreToolbarItem = function (item) {
            var commandId = item.command;
            var id = 'navigator.tabbar.toolbar.' + commandId;
            var command = _this.commandRegistry.getCommand(commandId);
            _this.commandRegistry.registerCommand({ id: id, iconClass: command && command.iconClass }, {
                execute: function (w) {
                    var _a;
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return w instanceof navigator_widget_1.FileNavigatorWidget
                        && (_a = _this.commandRegistry).executeCommand.apply(_a, __spread([commandId], args));
                },
                isEnabled: function (w) {
                    var _a;
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return w instanceof navigator_widget_1.FileNavigatorWidget
                        && (_a = _this.commandRegistry).isEnabled.apply(_a, __spread([commandId], args));
                },
                isVisible: function (w) {
                    var _a;
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return w instanceof navigator_widget_1.FileNavigatorWidget
                        && (_a = _this.commandRegistry).isVisible.apply(_a, __spread([commandId], args));
                },
                isToggled: function (w) {
                    var _a;
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return w instanceof navigator_widget_1.FileNavigatorWidget
                        && (_a = _this.commandRegistry).isToggled.apply(_a, __spread([commandId], args));
                },
            });
            item.command = id;
            _this.tabbarToolbarRegistry.registerItem(item);
        };
        _this.toDisposeAddRemoveFolderActions = new common_1.DisposableCollection();
        return _this;
    }
    FileNavigatorContribution.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var updateFocusContextKeys;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileNavigatorPreferences.ready];
                    case 1:
                        _a.sent();
                        this.shell.currentChanged.connect(function () { return _this.onCurrentWidgetChangedHandler(); });
                        updateFocusContextKeys = function () {
                            var hasFocus = _this.shell.activeWidget instanceof navigator_widget_1.FileNavigatorWidget;
                            _this.contextKeyService.explorerViewletFocus.set(hasFocus);
                            _this.contextKeyService.filesExplorerFocus.set(hasFocus);
                        };
                        updateFocusContextKeys();
                        this.shell.activeChanged.connect(updateFocusContextKeys);
                        this.workspaceCommandContribution.onDidCreateNewFile(function (event) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, this.onDidCreateNewResource(event)];
                        }); }); });
                        this.workspaceCommandContribution.onDidCreateNewFolder(function (event) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, this.onDidCreateNewResource(event)];
                        }); }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    FileNavigatorContribution.prototype.onDidCreateNewResource = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var navigator, model, parent, node;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigator = this.tryGetWidget();
                        if (!navigator || !navigator.isVisible) {
                            return [2 /*return*/];
                        }
                        model = navigator.model;
                        return [4 /*yield*/, model.revealFile(event.parent)];
                    case 1:
                        parent = _a.sent();
                        if (!browser_3.DirNode.is(parent)) return [3 /*break*/, 3];
                        return [4 /*yield*/, model.refresh(parent)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, model.revealFile(event.uri)];
                    case 4:
                        node = _a.sent();
                        if (browser_1.SelectableTreeNode.is(node)) {
                            model.selectNode(node);
                            if (browser_3.DirNode.is(node)) {
                                this.openView({ activate: true });
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FileNavigatorContribution.prototype.onStart = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.workspacePreferences.ready.then(function () {
                    _this.updateAddRemoveFolderActions(_this.menuRegistry);
                    _this.workspacePreferences.onPreferenceChanged(function (change) {
                        if (change.preferenceName === 'workspace.supportMultiRootWorkspace') {
                            _this.updateAddRemoveFolderActions(_this.menuRegistry);
                        }
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    FileNavigatorContribution.prototype.initializeLayout = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openView()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FileNavigatorContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        _super.prototype.registerCommands.call(this, registry);
        registry.registerCommand(FileNavigatorCommands.FOCUS, {
            execute: function () { return _this.openView({ activate: true }); }
        });
        registry.registerCommand(FileNavigatorCommands.REVEAL_IN_NAVIGATOR, {
            execute: function () { return _this.openView({ activate: true }).then(function () { return _this.selectWidgetFileNode(_this.shell.currentWidget); }); },
            isEnabled: function () { return browser_1.Navigatable.is(_this.shell.currentWidget); },
            isVisible: function () { return browser_1.Navigatable.is(_this.shell.currentWidget); }
        });
        registry.registerCommand(FileNavigatorCommands.TOGGLE_HIDDEN_FILES, {
            execute: function () {
                _this.fileNavigatorFilter.toggleHiddenFiles();
            },
            isEnabled: function () { return true; },
            isVisible: function () { return true; }
        });
        registry.registerCommand(FileNavigatorCommands.TOGGLE_AUTO_REVEAL, {
            isEnabled: function (widget) { return _this.withWidget(widget, function () { return _this.workspaceService.opened; }); },
            isVisible: function (widget) { return _this.withWidget(widget, function () { return _this.workspaceService.opened; }); },
            execute: function () {
                var autoReveal = !_this.fileNavigatorPreferences['explorer.autoReveal'];
                _this.preferenceService.set('explorer.autoReveal', autoReveal, browser_1.PreferenceScope.User);
                if (autoReveal) {
                    _this.selectWidgetFileNode(_this.shell.currentWidget);
                }
            },
            isToggled: function () { return _this.fileNavigatorPreferences['explorer.autoReveal']; }
        });
        registry.registerCommand(FileNavigatorCommands.COLLAPSE_ALL, {
            execute: function (widget) { return _this.withWidget(widget, function () { return _this.collapseFileNavigatorTree(); }); },
            isEnabled: function (widget) { return _this.withWidget(widget, function () { return _this.workspaceService.opened; }); },
            isVisible: function (widget) { return _this.withWidget(widget, function () { return _this.workspaceService.opened; }); }
        });
        registry.registerCommand(FileNavigatorCommands.REFRESH_NAVIGATOR, {
            execute: function (widget) { return _this.withWidget(widget, function () { return _this.refreshWorkspace(); }); },
            isEnabled: function (widget) { return _this.withWidget(widget, function () { return _this.workspaceService.opened; }); },
            isVisible: function (widget) { return _this.withWidget(widget, function () { return _this.workspaceService.opened; }); }
        });
        registry.registerCommand(FileNavigatorCommands.ADD_ROOT_FOLDER, {
            execute: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return registry.executeCommand.apply(registry, __spread([browser_2.WorkspaceCommands.ADD_FOLDER.id], args));
            },
            isEnabled: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return registry.isEnabled.apply(registry, __spread([browser_2.WorkspaceCommands.ADD_FOLDER.id], args));
            },
            isVisible: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (!registry.isVisible.apply(registry, __spread([browser_2.WorkspaceCommands.ADD_FOLDER.id], args))) {
                    return false;
                }
                var navigator = _this.tryGetWidget();
                var model = navigator && navigator.model;
                var uris = selection_1.UriSelection.getUris(model && model.selectedNodes);
                return _this.workspaceService.areWorkspaceRoots(uris);
            }
        });
        registry.registerCommand(navigator_diff_1.NavigatorDiffCommands.COMPARE_FIRST, {
            execute: function () {
                _this.navigatorDiff.addFirstComparisonFile();
            },
            isEnabled: function () { return true; },
            isVisible: function () { return true; }
        });
        registry.registerCommand(navigator_diff_1.NavigatorDiffCommands.COMPARE_SECOND, {
            execute: function () {
                _this.navigatorDiff.compareFiles();
            },
            isEnabled: function () { return _this.navigatorDiff.isFirstFileSelected; },
            isVisible: function () { return _this.navigatorDiff.isFirstFileSelected; }
        });
        registry.registerCommand(FileNavigatorCommands.COPY_RELATIVE_FILE_PATH, new uri_command_handler_1.UriAwareCommandHandler(this.selectionService, {
            isEnabled: function (uris) { return !!uris.length; },
            isVisible: function (uris) { return !!uris.length; },
            execute: function (uris) { return __awaiter(_this, void 0, void 0, function () {
                var lineDelimiter, text;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            lineDelimiter = common_1.isWindows ? '\r\n' : '\n';
                            text = uris.map(function (uri) {
                                var workspaceRoot = _this.workspaceService.getWorkspaceRootUri(uri);
                                if (workspaceRoot) {
                                    return workspaceRoot.relative(uri);
                                }
                            }).join(lineDelimiter);
                            return [4 /*yield*/, this.clipboardService.writeText(text)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }
        }, { multi: true }));
    };
    FileNavigatorContribution.prototype.withWidget = function (widget, cb) {
        if (widget === void 0) { widget = this.tryGetWidget(); }
        if (widget instanceof navigator_widget_1.FileNavigatorWidget && widget.id === navigator_widget_1.FILE_NAVIGATOR_ID) {
            return cb(widget);
        }
        return false;
    };
    FileNavigatorContribution.prototype.registerMenus = function (registry) {
        _super.prototype.registerMenus.call(this, registry);
        registry.registerMenuAction(browser_1.SHELL_TABBAR_CONTEXT_MENU, {
            commandId: FileNavigatorCommands.REVEAL_IN_NAVIGATOR.id,
            label: FileNavigatorCommands.REVEAL_IN_NAVIGATOR.label,
            order: '5'
        });
        registry.registerMenuAction(NavigatorContextMenu.NAVIGATION, {
            commandId: browser_1.CommonCommands.OPEN.id
        });
        registry.registerSubmenu(NavigatorContextMenu.OPEN_WITH, 'Open With');
        this.openerService.getOpeners().then(function (openers) {
            var e_1, _a;
            try {
                for (var openers_1 = __values(openers), openers_1_1 = openers_1.next(); !openers_1_1.done; openers_1_1 = openers_1.next()) {
                    var opener_1 = openers_1_1.value;
                    var openWithCommand = browser_2.WorkspaceCommands.FILE_OPEN_WITH(opener_1);
                    registry.registerMenuAction(NavigatorContextMenu.OPEN_WITH, {
                        commandId: openWithCommand.id,
                        label: opener_1.label,
                        icon: opener_1.iconClass
                    });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (openers_1_1 && !openers_1_1.done && (_a = openers_1.return)) _a.call(openers_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
        // registry.registerMenuAction([CONTEXT_MENU_PATH, CUT_MENU_GROUP], {
        //     commandId: Commands.FILE_CUT
        // });
        registry.registerMenuAction(NavigatorContextMenu.CLIPBOARD, {
            commandId: browser_1.CommonCommands.COPY.id,
            order: 'a'
        });
        registry.registerMenuAction(NavigatorContextMenu.CLIPBOARD, {
            commandId: browser_1.CommonCommands.PASTE.id,
            order: 'b'
        });
        registry.registerMenuAction(NavigatorContextMenu.CLIPBOARD, {
            commandId: browser_1.CommonCommands.COPY_PATH.id,
            order: 'c'
        });
        registry.registerMenuAction(NavigatorContextMenu.CLIPBOARD, {
            commandId: FileNavigatorCommands.COPY_RELATIVE_FILE_PATH.id,
            label: 'Copy Relative Path',
            order: 'd'
        });
        registry.registerMenuAction(NavigatorContextMenu.CLIPBOARD, {
            commandId: file_download_command_contribution_1.FileDownloadCommands.COPY_DOWNLOAD_LINK.id,
            order: 'z'
        });
        registry.registerMenuAction(NavigatorContextMenu.MODIFICATION, {
            commandId: browser_2.WorkspaceCommands.FILE_RENAME.id
        });
        registry.registerMenuAction(NavigatorContextMenu.MODIFICATION, {
            commandId: browser_2.WorkspaceCommands.FILE_DELETE.id
        });
        registry.registerMenuAction(NavigatorContextMenu.MODIFICATION, {
            commandId: browser_2.WorkspaceCommands.FILE_DUPLICATE.id
        });
        var downloadUploadMenu = __spread(exports.NAVIGATOR_CONTEXT_MENU, ['6_downloadupload']);
        registry.registerMenuAction(downloadUploadMenu, {
            commandId: filesystem_frontend_contribution_1.FileSystemCommands.UPLOAD.id,
            order: 'a'
        });
        registry.registerMenuAction(downloadUploadMenu, {
            commandId: file_download_command_contribution_1.FileDownloadCommands.DOWNLOAD.id,
            order: 'b'
        });
        registry.registerMenuAction(NavigatorContextMenu.NAVIGATION, {
            commandId: browser_2.WorkspaceCommands.NEW_FILE.id
        });
        registry.registerMenuAction(NavigatorContextMenu.NAVIGATION, {
            commandId: browser_2.WorkspaceCommands.NEW_FOLDER.id
        });
        registry.registerMenuAction(NavigatorContextMenu.COMPARE, {
            commandId: browser_2.WorkspaceCommands.FILE_COMPARE.id
        });
        registry.registerMenuAction(NavigatorContextMenu.MODIFICATION, {
            commandId: FileNavigatorCommands.COLLAPSE_ALL.id,
            label: 'Collapse All',
            order: 'z2'
        });
        registry.registerMenuAction(NavigatorContextMenu.COMPARE, {
            commandId: navigator_diff_1.NavigatorDiffCommands.COMPARE_FIRST.id,
            order: 'z'
        });
        registry.registerMenuAction(NavigatorContextMenu.COMPARE, {
            commandId: navigator_diff_1.NavigatorDiffCommands.COMPARE_SECOND.id,
            order: 'z'
        });
    };
    FileNavigatorContribution.prototype.registerKeybindings = function (registry) {
        _super.prototype.registerKeybindings.call(this, registry);
        registry.registerKeybinding({
            command: FileNavigatorCommands.REVEAL_IN_NAVIGATOR.id,
            keybinding: 'alt+r'
        });
        registry.registerKeybinding({
            command: browser_2.WorkspaceCommands.FILE_DELETE.id,
            keybinding: 'del',
            context: navigator_keybinding_context_1.NavigatorKeybindingContexts.navigatorActive
        });
        if (common_1.isOSX) {
            registry.registerKeybinding({
                command: browser_2.WorkspaceCommands.FILE_DELETE.id,
                keybinding: 'cmd+backspace',
                context: navigator_keybinding_context_1.NavigatorKeybindingContexts.navigatorActive
            });
        }
        registry.registerKeybinding({
            command: browser_2.WorkspaceCommands.FILE_RENAME.id,
            keybinding: 'f2',
            context: navigator_keybinding_context_1.NavigatorKeybindingContexts.navigatorActive
        });
        registry.registerKeybinding({
            command: FileNavigatorCommands.TOGGLE_HIDDEN_FILES.id,
            keybinding: 'ctrlcmd+i',
            context: navigator_keybinding_context_1.NavigatorKeybindingContexts.navigatorActive
        });
        registry.registerKeybinding({
            command: FileNavigatorCommands.COPY_RELATIVE_FILE_PATH.id,
            keybinding: common_1.isWindows ? 'ctrl+k ctrl+shift+c' : 'ctrlcmd+shift+alt+c',
            when: '!editorFocus'
        });
    };
    FileNavigatorContribution.prototype.registerToolbarItems = function (toolbarRegistry) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                toolbarRegistry.registerItem({
                    id: FileNavigatorCommands.REFRESH_NAVIGATOR.id,
                    command: FileNavigatorCommands.REFRESH_NAVIGATOR.id,
                    tooltip: 'Refresh Explorer',
                    priority: 0,
                });
                toolbarRegistry.registerItem({
                    id: FileNavigatorCommands.COLLAPSE_ALL.id,
                    command: FileNavigatorCommands.COLLAPSE_ALL.id,
                    tooltip: 'Collapse All',
                    priority: 1,
                });
                this.registerMoreToolbarItem({
                    id: browser_2.WorkspaceCommands.NEW_FILE.id,
                    command: browser_2.WorkspaceCommands.NEW_FILE.id,
                    tooltip: browser_2.WorkspaceCommands.NEW_FILE.label,
                    group: NavigatorMoreToolbarGroups.NEW_OPEN,
                });
                this.registerMoreToolbarItem({
                    id: browser_2.WorkspaceCommands.NEW_FOLDER.id,
                    command: browser_2.WorkspaceCommands.NEW_FOLDER.id,
                    tooltip: browser_2.WorkspaceCommands.NEW_FOLDER.label,
                    group: NavigatorMoreToolbarGroups.NEW_OPEN,
                });
                this.registerMoreToolbarItem({
                    id: FileNavigatorCommands.TOGGLE_AUTO_REVEAL.id,
                    command: FileNavigatorCommands.TOGGLE_AUTO_REVEAL.id,
                    tooltip: FileNavigatorCommands.TOGGLE_AUTO_REVEAL.label,
                    group: NavigatorMoreToolbarGroups.TOOLS,
                });
                this.registerMoreToolbarItem({
                    id: browser_2.WorkspaceCommands.ADD_FOLDER.id,
                    command: browser_2.WorkspaceCommands.ADD_FOLDER.id,
                    tooltip: browser_2.WorkspaceCommands.ADD_FOLDER.label,
                    group: NavigatorMoreToolbarGroups.WORKSPACE,
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * Reveals and selects node in the file navigator to which given widget is related.
     * Does nothing if given widget undefined or doesn't have related resource.
     *
     * @param widget widget file resource of which should be revealed and selected
     */
    FileNavigatorContribution.prototype.selectWidgetFileNode = function (widget) {
        return __awaiter(this, void 0, void 0, function () {
            var resourceUri, model, node;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!browser_1.Navigatable.is(widget)) return [3 /*break*/, 3];
                        resourceUri = widget.getResourceUri();
                        if (!resourceUri) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.widget];
                    case 1:
                        model = (_a.sent()).model;
                        return [4 /*yield*/, model.revealFile(resourceUri)];
                    case 2:
                        node = _a.sent();
                        if (browser_1.SelectableTreeNode.is(node)) {
                            model.selectNode(node);
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FileNavigatorContribution.prototype.onCurrentWidgetChangedHandler = function () {
        if (this.fileNavigatorPreferences['explorer.autoReveal']) {
            this.selectWidgetFileNode(this.shell.currentWidget);
        }
    };
    /**
     * Collapse file navigator nodes and set focus on first visible node
     * - single root workspace: collapse all nodes except root
     * - multiple root workspace: collapse all nodes, even roots
     */
    FileNavigatorContribution.prototype.collapseFileNavigatorTree = function () {
        return __awaiter(this, void 0, void 0, function () {
            var model, root, firstChild;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.widget];
                    case 1:
                        model = (_a.sent()).model;
                        root = model.root;
                        if (navigator_tree_1.WorkspaceNode.is(root) && root.children.length === 1) {
                            root = root.children[0];
                        }
                        root.children.forEach(function (child) { return browser_1.CompositeTreeNode.is(child) && model.collapseAll(child); });
                        firstChild = navigator_tree_1.WorkspaceNode.is(root) ? root.children[0] : root;
                        if (browser_1.SelectableTreeNode.is(firstChild)) {
                            model.selectNode(firstChild);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * force refresh workspace in navigator
     */
    FileNavigatorContribution.prototype.refreshWorkspace = function () {
        return __awaiter(this, void 0, void 0, function () {
            var model;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.widget];
                    case 1:
                        model = (_a.sent()).model;
                        return [4 /*yield*/, model.refresh()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FileNavigatorContribution.prototype.updateAddRemoveFolderActions = function (registry) {
        this.toDisposeAddRemoveFolderActions.dispose();
        if (this.workspacePreferences['workspace.supportMultiRootWorkspace']) {
            this.toDisposeAddRemoveFolderActions.push(registry.registerMenuAction(NavigatorContextMenu.WORKSPACE, {
                commandId: FileNavigatorCommands.ADD_ROOT_FOLDER.id,
                label: browser_2.WorkspaceCommands.ADD_FOLDER.label
            }));
            this.toDisposeAddRemoveFolderActions.push(registry.registerMenuAction(NavigatorContextMenu.WORKSPACE, {
                commandId: browser_2.WorkspaceCommands.REMOVE_FOLDER.id
            }));
        }
    };
    __decorate([
        inversify_1.inject(clipboard_service_1.ClipboardService),
        __metadata("design:type", Object)
    ], FileNavigatorContribution.prototype, "clipboardService", void 0);
    __decorate([
        inversify_1.inject(common_1.CommandRegistry),
        __metadata("design:type", common_1.CommandRegistry)
    ], FileNavigatorContribution.prototype, "commandRegistry", void 0);
    __decorate([
        inversify_1.inject(tab_bar_toolbar_1.TabBarToolbarRegistry),
        __metadata("design:type", tab_bar_toolbar_1.TabBarToolbarRegistry)
    ], FileNavigatorContribution.prototype, "tabbarToolbarRegistry", void 0);
    __decorate([
        inversify_1.inject(navigator_context_key_service_1.NavigatorContextKeyService),
        __metadata("design:type", navigator_context_key_service_1.NavigatorContextKeyService)
    ], FileNavigatorContribution.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.inject(common_1.MenuModelRegistry),
        __metadata("design:type", common_1.MenuModelRegistry)
    ], FileNavigatorContribution.prototype, "menuRegistry", void 0);
    __decorate([
        inversify_1.inject(navigator_diff_1.NavigatorDiff),
        __metadata("design:type", navigator_diff_1.NavigatorDiff)
    ], FileNavigatorContribution.prototype, "navigatorDiff", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceService),
        __metadata("design:type", Object)
    ], FileNavigatorContribution.prototype, "preferenceService", void 0);
    __decorate([
        inversify_1.inject(selection_service_1.SelectionService),
        __metadata("design:type", selection_service_1.SelectionService)
    ], FileNavigatorContribution.prototype, "selectionService", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceCommandContribution),
        __metadata("design:type", browser_2.WorkspaceCommandContribution)
    ], FileNavigatorContribution.prototype, "workspaceCommandContribution", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], FileNavigatorContribution.prototype, "init", null);
    FileNavigatorContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(navigator_preferences_1.FileNavigatorPreferences)),
        __param(1, inversify_1.inject(browser_1.OpenerService)),
        __param(2, inversify_1.inject(navigator_filter_1.FileNavigatorFilter)),
        __param(3, inversify_1.inject(browser_2.WorkspaceService)),
        __param(4, inversify_1.inject(browser_2.WorkspacePreferences)),
        __metadata("design:paramtypes", [Object, Object, navigator_filter_1.FileNavigatorFilter,
            browser_2.WorkspaceService, Object])
    ], FileNavigatorContribution);
    return FileNavigatorContribution;
}(view_contribution_1.AbstractViewContribution));
exports.FileNavigatorContribution = FileNavigatorContribution;


/***/ }),

/***/ "./node_modules/@theia/navigator/lib/browser/navigator-diff.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@theia/navigator/lib/browser/navigator-diff.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 David Saunders and others.
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
exports.NavigatorDiff = exports.NavigatorDiffCommands = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var filesystem_1 = __webpack_require__(/*! @theia/filesystem/lib/common/filesystem */ "./node_modules/@theia/filesystem/lib/common/filesystem.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var opener_service_1 = __webpack_require__(/*! @theia/core/lib/browser/opener-service */ "./node_modules/@theia/core/lib/browser/opener-service.js");
var message_service_1 = __webpack_require__(/*! @theia/core/lib/common/message-service */ "./node_modules/@theia/core/lib/common/message-service.js");
var diff_uris_1 = __webpack_require__(/*! @theia/core/lib/browser/diff-uris */ "./node_modules/@theia/core/lib/browser/diff-uris.js");
var NavigatorDiffCommands;
(function (NavigatorDiffCommands) {
    var COMPARE_CATEGORY = 'Compare';
    NavigatorDiffCommands.COMPARE_FIRST = {
        id: 'compare:first',
        category: COMPARE_CATEGORY,
        label: 'Select for Compare'
    };
    NavigatorDiffCommands.COMPARE_SECOND = {
        id: 'compare:second',
        category: COMPARE_CATEGORY,
        label: 'Compare with Selected'
    };
})(NavigatorDiffCommands = exports.NavigatorDiffCommands || (exports.NavigatorDiffCommands = {}));
var NavigatorDiff = /** @class */ (function () {
    function NavigatorDiff() {
        this._firstCompareFile = undefined;
    }
    Object.defineProperty(NavigatorDiff.prototype, "firstCompareFile", {
        get: function () {
            return this._firstCompareFile;
        },
        set: function (uri) {
            this._firstCompareFile = uri;
            this._isFirstFileSelected = true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NavigatorDiff.prototype, "isFirstFileSelected", {
        get: function () {
            return this._isFirstFileSelected;
        },
        enumerable: false,
        configurable: true
    });
    NavigatorDiff.prototype.isDirectory = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var stat, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.fileSystem.getFileStat(uri.path.toString())];
                    case 1:
                        stat = _a.sent();
                        if (!stat || stat.isDirectory) {
                            return [2 /*return*/, true];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    NavigatorDiff.prototype.getURISelection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = common_1.UriSelection.getUri(this.selectionService.selection);
                        if (!uri) {
                            return [2 /*return*/, undefined];
                        }
                        return [4 /*yield*/, this.isDirectory(uri)];
                    case 1:
                        if (_a.sent()) {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, uri];
                }
            });
        });
    };
    /**
     * Adds the initial file for comparison
     * @see SelectionService
     * @see compareFiles
     * @returns Promise<boolean> indicating whether the uri is valid
     */
    NavigatorDiff.prototype.addFirstComparisonFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uriSelected;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getURISelection()];
                    case 1:
                        uriSelected = _a.sent();
                        if (uriSelected === undefined) {
                            return [2 /*return*/, false];
                        }
                        this.firstCompareFile = uriSelected;
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * Compare selected files.  First file is selected through addFirstComparisonFile
     * @see SelectionService
     * @see addFirstComparisonFile
     * @returns Promise<boolean> indicating whether the comparison was completed successfully
     */
    NavigatorDiff.prototype.compareFiles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uriSelected, diffUri;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getURISelection()];
                    case 1:
                        uriSelected = _a.sent();
                        if (this.firstCompareFile === undefined || uriSelected === undefined) {
                            return [2 /*return*/, false];
                        }
                        diffUri = diff_uris_1.DiffUris.encode(this.firstCompareFile, uriSelected);
                        opener_service_1.open(this.openerService, diffUri).catch(function (e) {
                            _this.notifications.error(e.message);
                        });
                        return [2 /*return*/, true];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(filesystem_1.FileSystem),
        __metadata("design:type", Object)
    ], NavigatorDiff.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(opener_service_1.OpenerService),
        __metadata("design:type", Object)
    ], NavigatorDiff.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], NavigatorDiff.prototype, "notifications", void 0);
    __decorate([
        inversify_1.inject(common_1.SelectionService),
        __metadata("design:type", common_1.SelectionService)
    ], NavigatorDiff.prototype, "selectionService", void 0);
    NavigatorDiff = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], NavigatorDiff);
    return NavigatorDiff;
}());
exports.NavigatorDiff = NavigatorDiff;


/***/ }),

/***/ "./node_modules/@theia/navigator/lib/browser/navigator-keybinding-context.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@theia/navigator/lib/browser/navigator-keybinding-context.js ***!
  \***********************************************************************************/
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
exports.NavigatorActiveContext = exports.NavigatorKeybindingContexts = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var navigator_widget_1 = __webpack_require__(/*! ./navigator-widget */ "./node_modules/@theia/navigator/lib/browser/navigator-widget.js");
var NavigatorKeybindingContexts;
(function (NavigatorKeybindingContexts) {
    NavigatorKeybindingContexts.navigatorActive = 'navigatorActive';
})(NavigatorKeybindingContexts = exports.NavigatorKeybindingContexts || (exports.NavigatorKeybindingContexts = {}));
var NavigatorActiveContext = /** @class */ (function () {
    function NavigatorActiveContext() {
        this.id = NavigatorKeybindingContexts.navigatorActive;
    }
    NavigatorActiveContext.prototype.isEnabled = function () {
        return this.applicationShell.activeWidget instanceof navigator_widget_1.FileNavigatorWidget;
    };
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], NavigatorActiveContext.prototype, "applicationShell", void 0);
    NavigatorActiveContext = __decorate([
        inversify_1.injectable()
    ], NavigatorActiveContext);
    return NavigatorActiveContext;
}());
exports.NavigatorActiveContext = NavigatorActiveContext;


/***/ })

}]);
//# sourceMappingURL=20.bundle.js.map