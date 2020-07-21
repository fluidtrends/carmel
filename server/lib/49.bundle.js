(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/@theia/debug/lib/browser/debug-frontend-module.js":
/*!************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/debug-frontend-module.js ***!
  \************************************************************************/
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
__webpack_require__(/*! ../../src/browser/style/index.css */ "./node_modules/@theia/debug/src/browser/style/index.css");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var debug_configuration_manager_1 = __webpack_require__(/*! ./debug-configuration-manager */ "./node_modules/@theia/debug/lib/browser/debug-configuration-manager.js");
var debug_widget_1 = __webpack_require__(/*! ./view/debug-widget */ "./node_modules/@theia/debug/lib/browser/view/debug-widget.js");
var debug_service_1 = __webpack_require__(/*! ../common/debug-service */ "./node_modules/@theia/debug/lib/common/debug-service.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var debug_session_manager_1 = __webpack_require__(/*! ./debug-session-manager */ "./node_modules/@theia/debug/lib/browser/debug-session-manager.js");
var debug_resource_1 = __webpack_require__(/*! ./debug-resource */ "./node_modules/@theia/debug/lib/browser/debug-resource.js");
var debug_session_contribution_1 = __webpack_require__(/*! ./debug-session-contribution */ "./node_modules/@theia/debug/lib/browser/debug-session-contribution.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var context_key_service_1 = __webpack_require__(/*! @theia/core/lib/browser/context-key-service */ "./node_modules/@theia/core/lib/browser/context-key-service.js");
var debug_frontend_application_contribution_1 = __webpack_require__(/*! ./debug-frontend-application-contribution */ "./node_modules/@theia/debug/lib/browser/debug-frontend-application-contribution.js");
var debug_console_contribution_1 = __webpack_require__(/*! ./console/debug-console-contribution */ "./node_modules/@theia/debug/lib/browser/console/debug-console-contribution.js");
var breakpoint_manager_1 = __webpack_require__(/*! ./breakpoint/breakpoint-manager */ "./node_modules/@theia/debug/lib/browser/breakpoint/breakpoint-manager.js");
var debug_editor_service_1 = __webpack_require__(/*! ./editor/debug-editor-service */ "./node_modules/@theia/debug/lib/browser/editor/debug-editor-service.js");
var debug_session_widget_1 = __webpack_require__(/*! ./view/debug-session-widget */ "./node_modules/@theia/debug/lib/browser/view/debug-session-widget.js");
var debug_keybinding_contexts_1 = __webpack_require__(/*! ./debug-keybinding-contexts */ "./node_modules/@theia/debug/lib/browser/debug-keybinding-contexts.js");
var debug_editor_model_1 = __webpack_require__(/*! ./editor/debug-editor-model */ "./node_modules/@theia/debug/lib/browser/editor/debug-editor-model.js");
__webpack_require__(/*! ./debug-monaco-contribution */ "./node_modules/@theia/debug/lib/browser/debug-monaco-contribution.js");
var debug_preferences_1 = __webpack_require__(/*! ./debug-preferences */ "./node_modules/@theia/debug/lib/browser/debug-preferences.js");
var debug_schema_updater_1 = __webpack_require__(/*! ./debug-schema-updater */ "./node_modules/@theia/debug/lib/browser/debug-schema-updater.js");
var debug_call_stack_item_type_key_1 = __webpack_require__(/*! ./debug-call-stack-item-type-key */ "./node_modules/@theia/debug/lib/browser/debug-call-stack-item-type-key.js");
var launch_preferences_1 = __webpack_require__(/*! ./preferences/launch-preferences */ "./node_modules/@theia/debug/lib/browser/preferences/launch-preferences.js");
var debug_prefix_configuration_1 = __webpack_require__(/*! ./debug-prefix-configuration */ "./node_modules/@theia/debug/lib/browser/debug-prefix-configuration.js");
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "./node_modules/@theia/core/lib/common/command.js");
var tab_bar_toolbar_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-toolbar */ "./node_modules/@theia/core/lib/browser/shell/tab-bar-toolbar.js");
var color_application_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/color-application-contribution */ "./node_modules/@theia/core/lib/browser/color-application-contribution.js");
var debug_watch_manager_1 = __webpack_require__(/*! ./debug-watch-manager */ "./node_modules/@theia/debug/lib/browser/debug-watch-manager.js");
var monaco_editor_service_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-editor-service */ "./node_modules/@theia/monaco/lib/browser/monaco-editor-service.js");
var debug_breakpoint_widget_1 = __webpack_require__(/*! ./editor/debug-breakpoint-widget */ "./node_modules/@theia/debug/lib/browser/editor/debug-breakpoint-widget.js");
var debug_inline_value_decorator_1 = __webpack_require__(/*! ./editor/debug-inline-value-decorator */ "./node_modules/@theia/debug/lib/browser/editor/debug-inline-value-decorator.js");
var json_schema_store_1 = __webpack_require__(/*! @theia/core/lib/browser/json-schema-store */ "./node_modules/@theia/core/lib/browser/json-schema-store.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    var e_1, _a;
    bind(debug_call_stack_item_type_key_1.DebugCallStackItemTypeKey).toDynamicValue(function (_a) {
        var container = _a.container;
        return container.get(context_key_service_1.ContextKeyService).createKey('callStackItemType', undefined);
    }).inSingletonScope();
    core_1.bindContributionProvider(bind, debug_session_contribution_1.DebugSessionContribution);
    bind(debug_session_contribution_1.DebugSessionFactory).to(debug_session_contribution_1.DefaultDebugSessionFactory).inSingletonScope();
    bind(debug_session_manager_1.DebugSessionManager).toSelf().inSingletonScope();
    bind(breakpoint_manager_1.BreakpointManager).toSelf().inSingletonScope();
    bind(debug_editor_model_1.DebugEditorModelFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return (function (editor) {
            return debug_editor_model_1.DebugEditorModel.createModel(container, editor);
        });
    }).inSingletonScope();
    bind(debug_editor_service_1.DebugEditorService).toSelf().inSingletonScope().onActivation(function (context, service) {
        context.container.get(monaco_editor_service_1.MonacoEditorService).registerDecorationType(debug_breakpoint_widget_1.DebugBreakpointWidget.PLACEHOLDER_DECORATION, {});
        return service;
    });
    bind(debug_session_widget_1.DebugSessionWidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return function (options) { return debug_session_widget_1.DebugSessionWidget.createWidget(container, options); };
    }).inSingletonScope();
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: debug_widget_1.DebugWidget.ID,
            createWidget: function () { return debug_widget_1.DebugWidget.createWidget(container); }
        });
    }).inSingletonScope();
    debug_console_contribution_1.DebugConsoleContribution.bindContribution(bind);
    bind(debug_schema_updater_1.DebugSchemaUpdater).toSelf().inSingletonScope();
    bind(json_schema_store_1.JsonSchemaContribution).toService(debug_schema_updater_1.DebugSchemaUpdater);
    bind(debug_configuration_manager_1.DebugConfigurationManager).toSelf().inSingletonScope();
    bind(debug_inline_value_decorator_1.DebugInlineValueDecorator).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).toService(debug_inline_value_decorator_1.DebugInlineValueDecorator);
    bind(debug_service_1.DebugService).toDynamicValue(function (context) { return browser_1.WebSocketConnectionProvider.createProxy(context.container, debug_service_1.DebugPath); }).inSingletonScope();
    bind(debug_resource_1.DebugResourceResolver).toSelf().inSingletonScope();
    bind(core_1.ResourceResolver).toService(debug_resource_1.DebugResourceResolver);
    bind(browser_1.KeybindingContext).to(debug_keybinding_contexts_1.InDebugModeContext).inSingletonScope();
    bind(browser_1.KeybindingContext).to(debug_keybinding_contexts_1.BreakpointWidgetInputFocusContext).inSingletonScope();
    bind(browser_1.KeybindingContext).to(debug_keybinding_contexts_1.BreakpointWidgetInputStrictFocusContext).inSingletonScope();
    browser_1.bindViewContribution(bind, debug_frontend_application_contribution_1.DebugFrontendApplicationContribution);
    bind(browser_1.FrontendApplicationContribution).toService(debug_frontend_application_contribution_1.DebugFrontendApplicationContribution);
    bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(debug_frontend_application_contribution_1.DebugFrontendApplicationContribution);
    bind(color_application_contribution_1.ColorContribution).toService(debug_frontend_application_contribution_1.DebugFrontendApplicationContribution);
    bind(debug_session_contribution_1.DebugSessionContributionRegistryImpl).toSelf().inSingletonScope();
    bind(debug_session_contribution_1.DebugSessionContributionRegistry).toService(debug_session_contribution_1.DebugSessionContributionRegistryImpl);
    bind(debug_prefix_configuration_1.DebugPrefixConfiguration).toSelf().inSingletonScope();
    try {
        for (var _b = __values([command_1.CommandContribution, browser_1.QuickOpenContribution]), _c = _b.next(); !_c.done; _c = _b.next()) {
            var identifier = _c.value;
            bind(identifier).toService(debug_prefix_configuration_1.DebugPrefixConfiguration);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    debug_preferences_1.bindDebugPreferences(bind);
    launch_preferences_1.bindLaunchPreferences(bind);
    bind(debug_watch_manager_1.DebugWatchManager).toSelf().inSingletonScope();
});


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/debug-monaco-contribution.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/debug-monaco-contribution.js ***!
  \****************************************************************************/
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
/*---------------------------------------------------------------------------------------------
*  Copyright (c) Microsoft Corporation. All rights reserved.
*  Licensed under the MIT License. See License.txt in the project root for license information.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
var jsonc_parser_1 = __webpack_require__(/*! jsonc-parser */ "./node_modules/jsonc-parser/lib/esm/main.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
monaco.languages.register({
    id: 'jsonc',
    'aliases': [
        'JSON with Comments'
    ],
    'filenames': [
        'launch.json'
    ]
});
monaco.languages.registerDocumentSymbolProvider('jsonc', {
    provideDocumentSymbols: function (model) {
        if (new uri_1.default(model.uri.toString()).path.base !== 'launch.json') {
            return [];
        }
        var children = [];
        var result = {
            name: 'Launch Configurations',
            detail: '',
            kind: monaco.languages.SymbolKind.Object,
            range: new monaco.Range(0, 0, 0, 0),
            selectionRange: new monaco.Range(0, 0, 0, 0),
            children: children,
            tags: []
        };
        var name = '';
        var lastProperty = '';
        var startOffset = 0;
        var depthInObjects = 0;
        jsonc_parser_1.visit(model.getValue(), {
            onObjectProperty: function (property, _offset, _length) {
                lastProperty = property;
            },
            onLiteralValue: function (value, _offset, _length) {
                if (lastProperty === 'name') {
                    name = value;
                }
            },
            onObjectBegin: function (offset, _length) {
                depthInObjects++;
                if (depthInObjects === 2) {
                    startOffset = offset;
                }
            },
            onObjectEnd: function (offset, _length) {
                if (name && depthInObjects === 2) {
                    var range = monaco.Range.fromPositions(model.getPositionAt(startOffset), model.getPositionAt(offset));
                    children.push({
                        name: name,
                        detail: '',
                        kind: monaco.languages.SymbolKind.Object,
                        range: range,
                        selectionRange: range,
                        tags: []
                    });
                }
                depthInObjects--;
            },
        });
        return [result];
    }
});


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/debug-prefix-configuration.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/debug-prefix-configuration.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
exports.DebugPrefixConfiguration = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "./node_modules/@theia/core/lib/common/command.js");
var quick_open_1 = __webpack_require__(/*! @theia/core/lib/browser/quick-open */ "./node_modules/@theia/core/lib/browser/quick-open/index.js");
var debug_session_manager_1 = __webpack_require__(/*! ./debug-session-manager */ "./node_modules/@theia/debug/lib/browser/debug-session-manager.js");
var debug_configuration_manager_1 = __webpack_require__(/*! ./debug-configuration-manager */ "./node_modules/@theia/debug/lib/browser/debug-configuration-manager.js");
var debug_frontend_application_contribution_1 = __webpack_require__(/*! ./debug-frontend-application-contribution */ "./node_modules/@theia/debug/lib/browser/debug-frontend-application-contribution.js");
var browser_1 = __webpack_require__(/*! @theia/workspace/lib/browser */ "./node_modules/@theia/workspace/lib/browser/index.js");
var label_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/label-provider */ "./node_modules/@theia/core/lib/browser/label-provider.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var debug_preferences_1 = __webpack_require__(/*! ./debug-preferences */ "./node_modules/@theia/debug/lib/browser/debug-preferences.js");
var DebugPrefixConfiguration = /** @class */ (function () {
    function DebugPrefixConfiguration() {
        this.prefix = 'debug ';
        this.description = 'Debug Configuration';
        this.statusBarId = 'select-run-debug-statusbar-item';
        this.command = {
            id: 'select.debug.configuration',
            category: 'Debug',
            label: 'Select and Start Debugging'
        };
    }
    DebugPrefixConfiguration.prototype.initialize = function () {
        var _this = this;
        this.handleDebugStatusBarVisibility();
        this.preference.onPreferenceChanged(function (e) {
            if (e.preferenceName === 'debug.showInStatusBar') {
                _this.handleDebugStatusBarVisibility();
            }
        });
        var toDisposeOnStart = this.debugSessionManager.onDidStartDebugSession(function () {
            toDisposeOnStart.dispose();
            _this.handleDebugStatusBarVisibility(true);
            _this.debugConfigurationManager.onDidChange(function () { return _this.handleDebugStatusBarVisibility(true); });
        });
    };
    DebugPrefixConfiguration.prototype.execute = function () {
        this.prefixQuickOpenService.open(this.prefix);
    };
    DebugPrefixConfiguration.prototype.isEnabled = function () {
        return true;
    };
    DebugPrefixConfiguration.prototype.isVisible = function () {
        return true;
    };
    DebugPrefixConfiguration.prototype.getModel = function () {
        return this;
    };
    DebugPrefixConfiguration.prototype.getOptions = function () {
        return {
            fuzzyMatchLabel: true,
            fuzzySort: false,
        };
    };
    DebugPrefixConfiguration.prototype.registerCommands = function (commands) {
        commands.registerCommand(this.command, this);
    };
    DebugPrefixConfiguration.prototype.registerQuickOpenHandlers = function (handlers) {
        handlers.registerHandler(this);
    };
    DebugPrefixConfiguration.prototype.onType = function (_lookFor, acceptor) {
        return __awaiter(this, void 0, void 0, function () {
            var items, configurations;
            var _this = this;
            return __generator(this, function (_a) {
                items = [];
                configurations = this.debugConfigurationManager.all;
                Array.from(configurations).forEach(function (config) {
                    items.push(new quick_open_1.QuickOpenItem({
                        label: config.configuration.name,
                        description: _this.workspaceService.isMultiRootWorkspaceOpened
                            ? _this.labelProvider.getName(new uri_1.default(config.workspaceFolderUri))
                            : '',
                        run: function (mode) {
                            if (mode !== quick_open_1.QuickOpenMode.OPEN) {
                                return false;
                            }
                            _this.runConfiguration(config);
                            return true;
                        }
                    }));
                });
                acceptor(items);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Set the current debug configuration, and execute debug start command.
     *
     * @param configuration the `DebugSessionOptions`.
     */
    DebugPrefixConfiguration.prototype.runConfiguration = function (configuration) {
        this.debugConfigurationManager.current = __assign({}, configuration);
        this.commandRegistry.executeCommand(debug_frontend_application_contribution_1.DebugCommands.START.id);
    };
    /**
     * Handle the visibility of the debug status bar.
     * @param event the preference change event.
     */
    DebugPrefixConfiguration.prototype.handleDebugStatusBarVisibility = function (started) {
        var showInStatusBar = this.preference['debug.showInStatusBar'];
        if (showInStatusBar === 'never') {
            return this.removeDebugStatusBar();
        }
        else if (showInStatusBar === 'always' || started) {
            return this.updateStatusBar();
        }
    };
    /**
     * Update the debug status bar element based on the current configuration.
     */
    DebugPrefixConfiguration.prototype.updateStatusBar = function () {
        var text = this.debugConfigurationManager.current
            ? this.debugConfigurationManager.current.configuration.name
            : '';
        var icon = '$(play)';
        this.statusBar.setElement(this.statusBarId, {
            alignment: browser_2.StatusBarAlignment.LEFT,
            text: text.length ? icon + " " + text : icon,
            tooltip: this.command.label,
            command: this.command.id,
        });
    };
    /**
     * Remove the debug status bar element.
     */
    DebugPrefixConfiguration.prototype.removeDebugStatusBar = function () {
        this.statusBar.removeElement(this.statusBarId);
    };
    __decorate([
        inversify_1.inject(command_1.CommandRegistry),
        __metadata("design:type", command_1.CommandRegistry)
    ], DebugPrefixConfiguration.prototype, "commandRegistry", void 0);
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], DebugPrefixConfiguration.prototype, "debugSessionManager", void 0);
    __decorate([
        inversify_1.inject(debug_preferences_1.DebugPreferences),
        __metadata("design:type", Object)
    ], DebugPrefixConfiguration.prototype, "preference", void 0);
    __decorate([
        inversify_1.inject(debug_configuration_manager_1.DebugConfigurationManager),
        __metadata("design:type", debug_configuration_manager_1.DebugConfigurationManager)
    ], DebugPrefixConfiguration.prototype, "debugConfigurationManager", void 0);
    __decorate([
        inversify_1.inject(quick_open_1.PrefixQuickOpenService),
        __metadata("design:type", quick_open_1.PrefixQuickOpenService)
    ], DebugPrefixConfiguration.prototype, "prefixQuickOpenService", void 0);
    __decorate([
        inversify_1.inject(browser_1.WorkspaceService),
        __metadata("design:type", browser_1.WorkspaceService)
    ], DebugPrefixConfiguration.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(label_provider_1.LabelProvider),
        __metadata("design:type", label_provider_1.LabelProvider)
    ], DebugPrefixConfiguration.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(browser_2.StatusBar),
        __metadata("design:type", Object)
    ], DebugPrefixConfiguration.prototype, "statusBar", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugPrefixConfiguration.prototype, "initialize", null);
    DebugPrefixConfiguration = __decorate([
        inversify_1.injectable()
    ], DebugPrefixConfiguration);
    return DebugPrefixConfiguration;
}());
exports.DebugPrefixConfiguration = DebugPrefixConfiguration;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/debug-resource.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/debug-resource.js ***!
  \*****************************************************************/
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
exports.DebugResourceResolver = exports.DebugResource = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var debug_session_manager_1 = __webpack_require__(/*! ./debug-session-manager */ "./node_modules/@theia/debug/lib/browser/debug-session-manager.js");
var debug_source_1 = __webpack_require__(/*! ./model/debug-source */ "./node_modules/@theia/debug/lib/browser/model/debug-source.js");
var DebugResource = /** @class */ (function () {
    function DebugResource(uri, manager) {
        this.uri = uri;
        this.manager = manager;
    }
    DebugResource.prototype.dispose = function () { };
    DebugResource.prototype.readContents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentSession, source;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentSession = this.manager.currentSession;
                        if (!currentSession) {
                            throw new Error("There is no active debug session to load content '" + this.uri + "'");
                        }
                        return [4 /*yield*/, currentSession.toSource(this.uri)];
                    case 1:
                        source = _a.sent();
                        if (!source) {
                            throw new Error("There is no source for '" + this.uri + "'");
                        }
                        return [2 /*return*/, source.load()];
                }
            });
        });
    };
    return DebugResource;
}());
exports.DebugResource = DebugResource;
var DebugResourceResolver = /** @class */ (function () {
    function DebugResourceResolver() {
    }
    DebugResourceResolver.prototype.resolve = function (uri) {
        if (uri.scheme !== debug_source_1.DebugSource.SCHEME) {
            throw new Error('The given URI is not a valid debug URI: ' + uri);
        }
        return new DebugResource(uri, this.manager);
    };
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], DebugResourceResolver.prototype, "manager", void 0);
    DebugResourceResolver = __decorate([
        inversify_1.injectable()
    ], DebugResourceResolver);
    return DebugResourceResolver;
}());
exports.DebugResourceResolver = DebugResourceResolver;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/preferences/launch-preferences.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/preferences/launch-preferences.js ***!
  \*********************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindLaunchPreferences = exports.launchPreferencesSchema = void 0;
var preference_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences/preference-contribution */ "./node_modules/@theia/core/lib/browser/preferences/preference-contribution.js");
var debug_schema_updater_1 = __webpack_require__(/*! ../debug-schema-updater */ "./node_modules/@theia/debug/lib/browser/debug-schema-updater.js");
var preference_configurations_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences/preference-configurations */ "./node_modules/@theia/core/lib/browser/preferences/preference-configurations.js");
exports.launchPreferencesSchema = {
    type: 'object',
    scope: 'resource',
    properties: {
        'launch': {
            $ref: debug_schema_updater_1.launchSchemaId,
            description: "Global debug launch configuration. Should be used as an alternative to 'launch.json' that is shared across workspaces",
            defaultValue: { configurations: [], compounds: [] }
        }
    }
};
function bindLaunchPreferences(bind) {
    bind(preference_contribution_1.PreferenceContribution).toConstantValue({ schema: exports.launchPreferencesSchema });
    bind(preference_configurations_1.PreferenceConfiguration).toConstantValue({ name: 'launch' });
}
exports.bindLaunchPreferences = bindLaunchPreferences;


/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/breakpoint-conditional-disabled.svg":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/breakpoint-conditional-disabled.svg ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uY2xzLTEsLmljb24tdnMtb3V0e2ZpbGw6I2Y2ZjZmNjt9LmNscy0xe2ZpbGwtb3BhY2l0eTowO30uaWNvbi1kaXNhYmxlZC1ncmV5e2ZpbGw6Izg0ODQ4NDt9Lmljb24td2hpdGV7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48dGl0bGU+YnJlYWtwb2ludC1jb25kaXRpb25hbC1kaXNhYmxlZDwvdGl0bGU+PGcgaWQ9ImNhbnZhcyI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTYsMFYxNkgwVjBaIi8+PC9nPjxnIGlkPSJvdXRsaW5lIiBzdHlsZT0iZGlzcGxheTogbm9uZTsiPjxwYXRoIGNsYXNzPSJpY29uLXZzLW91dCIgZD0iTTEyLjgsOEE0LjgsNC44LDAsMSwxLDgsMy4yLDQuODA2LDQuODA2LDAsMCwxLDEyLjgsOFoiLz48L2c+PGcgaWQ9Imljb25CZyI+PHBhdGggY2xhc3M9Imljb24tZGlzYWJsZWQtZ3JleSIgZD0iTTExLjgsOEEzLjgsMy44LDAsMSwxLDgsNC4yLDMuOCwzLjgsMCwwLDEsMTEuOCw4WiIvPjxwYXRoIGNsYXNzPSJpY29uLXdoaXRlIiBkPSJNMTAuMSw2Ljd2LjhINS45VjYuN1pNNS45LDkuMmg0LjJWOC40SDUuOVoiLz48L2c+PC9zdmc+Cg=="

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/breakpoint-conditional-unverified.svg":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/breakpoint-conditional-unverified.svg ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6I2Y2ZjZmNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tZGlzYWJsZWQtZ3JleXtmaWxsOiM4NDg0ODQ7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5icmVha3BvaW50LWNvbmRpdGlvbmFsLXVudmVyaWZpZWQ8L3RpdGxlPjxnIGlkPSJjYW52YXMiPjxwYXRoIGNsYXNzPSJpY29uLWNhbnZhcy10cmFuc3BhcmVudCIgZD0iTTE2LDBWMTZIMFYwWiIvPjwvZz48ZyBpZD0ib3V0bGluZSIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48cGF0aCBjbGFzcz0iaWNvbi12cy1vdXQiIGQ9Ik0xMi42MzIsOEE0LjYzMiw0LjYzMiwwLDEsMSw4LDMuMzY4LDQuNjM4LDQuNjM4LDAsMCwxLDEyLjYzMiw4WiIvPjwvZz48ZyBpZD0iaWNvbkJnIj48cGF0aCBjbGFzcz0iaWNvbi1kaXNhYmxlZC1ncmV5IiBkPSJNNi41MjYsOC40MjFIOS40NzR2Ljg0Mkg2LjUyNlpNMTEuNzg5LDhBMy43ODksMy43ODksMCwxLDEsOCw0LjIxMSwzLjc4OCwzLjc4OCwwLDAsMSwxMS43ODksOFptLTEsMEEyLjc4OSwyLjc4OSwwLDEsMCw4LDEwLjc5LDIuNzkzLDIuNzkzLDAsMCwwLDEwLjc4OSw4Wk02LjUyNiw3LjU3OUg5LjQ3NFY2LjczN0g2LjUyNloiLz48L2c+PC9zdmc+Cg=="

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/breakpoint-conditional.svg":
/*!********************************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/breakpoint-conditional.svg ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uY2xzLTEsLmljb24tdnMtb3V0e2ZpbGw6I2Y2ZjZmNjt9LmNscy0xe2ZpbGwtb3BhY2l0eTowO30uaWNvbi12cy1yZWR7ZmlsbDojZTUxNDAwO30uaWNvbi13aGl0ZXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5icmVha3BvaW50LWNvbmRpdGlvbmFsPC90aXRsZT48ZyBpZD0iY2FudmFzIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNiwwVjE2SDBWMFoiLz48L2c+PGcgaWQ9Im91dGxpbmUiIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+PHBhdGggY2xhc3M9Imljb24tdnMtb3V0IiBkPSJNMTIuOCw4QTQuOCw0LjgsMCwxLDEsOCwzLjIsNC44MDYsNC44MDYsMCwwLDEsMTIuOCw4WiIvPjwvZz48ZyBpZD0iaWNvbkJnIj48cGF0aCBjbGFzcz0iaWNvbi12cy1yZWQiIGQ9Ik0xMS44LDhBMy44LDMuOCwwLDEsMSw4LDQuMiwzLjgsMy44LDAsMCwxLDExLjgsOFoiLz48cGF0aCBjbGFzcz0iaWNvbi13aGl0ZSIgZD0iTTEwLjEsNi43di44SDUuOVY2LjdaTTUuOSw5LjJoNC4yVjguNEg1LjlaIi8+PC9nPjwvc3ZnPgo="

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/breakpoint-disabled.svg":
/*!*****************************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/breakpoint-disabled.svg ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6I2Y2ZjZmNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tZGlzYWJsZWQtZ3JleXtmaWxsOiM4NDg0ODQ7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5icmVha3BvaW50LWRpc2FibGVkPC90aXRsZT48ZyBpZD0iY2FudmFzIj48cGF0aCBjbGFzcz0iaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQiIGQ9Ik0xNiwwVjE2SDBWMFoiLz48L2c+PGcgaWQ9Im91dGxpbmUiIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+PHBhdGggY2xhc3M9Imljb24tdnMtb3V0IiBkPSJNMTIuNjMyLDhBNC42MzIsNC42MzIsMCwxLDEsOCwzLjM2OCw0LjYzOCw0LjYzOCwwLDAsMSwxMi42MzIsOFoiLz48L2c+PGcgaWQ9Imljb25CZyI+PHBhdGggY2xhc3M9Imljb24tZGlzYWJsZWQtZ3JleSIgZD0iTTExLjc4OSw4QTMuNzg5LDMuNzg5LDAsMSwxLDgsNC4yMTEsMy43ODgsMy43ODgsMCwwLDEsMTEuNzg5LDhaIi8+PC9nPjwvc3ZnPgo="

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/breakpoint-function-disabled.svg":
/*!**************************************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/breakpoint-function-disabled.svg ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE5IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+Cjxzdmcgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik04IDRMMTIgMTAuOTA0OEg0TDggNFoiIGZpbGw9IiM4NDg0ODQiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/breakpoint-function-unverified.svg":
/*!****************************************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/breakpoint-function-unverified.svg ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE5IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+Cjxzdmcgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMC45MjMgMTAuMzc1SDUuMDc2OTlMOCA1LjI1OTczTDEwLjkyMyAxMC4zNzVaIiBzdHJva2U9IiM4NDg0ODQiIHN0cm9rZS13aWR0aD0iMS4yNSIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/breakpoint-function.svg":
/*!*****************************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/breakpoint-function.svg ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE5IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+Cjxzdmcgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik04IDRMMTIgMTAuOTA0OEg0TDggNFoiIGZpbGw9IiNFNTE0MDAiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/breakpoint-hint.svg":
/*!*************************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/breakpoint-hint.svg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6I2Y2ZjZmNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9LmNscy0xe2ZpbGw6I2U1MTQwMDtvcGFjaXR5OjAuNDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmJyZWFrcG9pbnQtaGludDwvdGl0bGU+PGcgaWQ9ImNhbnZhcyI+PHBhdGggY2xhc3M9Imljb24tY2FudmFzLXRyYW5zcGFyZW50IiBkPSJNMTYsMFYxNkgwVjBaIi8+PC9nPjxnIGlkPSJvdXRsaW5lIiBzdHlsZT0iZGlzcGxheTogbm9uZTsiPjxwYXRoIGNsYXNzPSJpY29uLXZzLW91dCIgZD0iTTEyLjYzMiw4QTQuNjMyLDQuNjMyLDAsMSwxLDgsMy4zNjgsNC42MzgsNC42MzgsMCwwLDEsMTIuNjMyLDhaIi8+PC9nPjxnIGlkPSJpY29uQmciPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTExLjc4OSw4QTMuNzg5LDMuNzg5LDAsMSwxLDgsNC4yMTEsMy43ODgsMy43ODgsMCwwLDEsMTEuNzg5LDhaIi8+PC9nPjwvc3ZnPgo="

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/breakpoint-log-disabled.svg":
/*!*********************************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/breakpoint-log-disabled.svg ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6I2Y2ZjZmNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tZGlzYWJsZWQtZ3JleXtmaWxsOiM4NDg0ODQ7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5icmVha3BvaW50LWxvZy1kaXNhYmxlZDwvdGl0bGU+PGcgaWQ9ImNhbnZhcyI+PHBhdGggY2xhc3M9Imljb24tY2FudmFzLXRyYW5zcGFyZW50IiBkPSJNMTYsMFYxNkgwVjBaIi8+PC9nPjxnIGlkPSJvdXRsaW5lIiBzdHlsZT0iZGlzcGxheTogbm9uZTsiPjxwYXRoIGNsYXNzPSJpY29uLXZzLW91dCIgZD0iTTEzLjQxNCw4LDgsMTMuNDE0LDIuNTg2LDgsOCwyLjU4NloiLz48L2c+PGcgaWQ9Imljb25CZyI+PHBhdGggY2xhc3M9Imljb24tZGlzYWJsZWQtZ3JleSIgZD0iTTEyLDgsOCwxMiw0LDgsOCw0WiIvPjwvZz48L3N2Zz4K"

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/breakpoint-log-unverified.svg":
/*!***********************************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/breakpoint-log-unverified.svg ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6I2Y2ZjZmNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tZGlzYWJsZWQtZ3JleXtmaWxsOiM4NDg0ODQ7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5icmVha3BvaW50LWxvZy11bnZlcmlmaWVkPC90aXRsZT48ZyBpZD0iY2FudmFzIj48cGF0aCBjbGFzcz0iaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQiIGQ9Ik0xNiwwVjE2SDBWMFoiLz48L2c+PGcgaWQ9Im91dGxpbmUiIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+PHBhdGggY2xhc3M9Imljb24tdnMtb3V0IiBkPSJNMTMuNjY0LDgsOCwxMy42NjQsMi4zMzYsOCw4LDIuMzM2WiIvPjwvZz48ZyBpZD0iaWNvbkJnIj48cGF0aCBjbGFzcz0iaWNvbi1kaXNhYmxlZC1ncmV5IiBkPSJNOCwzLjc1LDMuNzUsOCw4LDEyLjI1LDEyLjI1LDhaTTUuNTE4LDgsOCw1LjUxOCwxMC40ODIsOCw4LDEwLjQ4MloiLz48L2c+PC9zdmc+Cg=="

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/breakpoint-log.svg":
/*!************************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/breakpoint-log.svg ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6I2Y2ZjZmNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tdnMtcmVke2ZpbGw6I2U1MTQwMDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmJyZWFrcG9pbnQtbG9nPC90aXRsZT48ZyBpZD0iY2FudmFzIj48cGF0aCBjbGFzcz0iaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQiIGQ9Ik0xNiwwVjE2SDBWMFoiLz48L2c+PGcgaWQ9Im91dGxpbmUiIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+PHBhdGggY2xhc3M9Imljb24tdnMtb3V0IiBkPSJNMTMuNDE0LDgsOCwxMy40MTQsMi41ODYsOCw4LDIuNTg2WiIvPjwvZz48ZyBpZD0iaWNvbkJnIj48cGF0aCBjbGFzcz0iaWNvbi12cy1yZWQiIGQ9Ik0xMiw4LDgsMTIsNCw4LDgsNFoiLz48L2c+PC9zdmc+Cg=="

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/breakpoint-unsupported.svg":
/*!********************************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/breakpoint-unsupported.svg ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6I2Y2ZjZmNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tdnMtcmVke2ZpbGw6I2U1MTQwMDt9Lmljb24td2hpdGV7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48dGl0bGU+YnJlYWtwb2ludC11bnN1cHBvcnRlZDwvdGl0bGU+PGcgaWQ9ImNhbnZhcyI+PHBhdGggY2xhc3M9Imljb24tY2FudmFzLXRyYW5zcGFyZW50IiBkPSJNMTYsMFYxNkgwVjBaIi8+PC9nPjxnIGlkPSJvdXRsaW5lIiBzdHlsZT0iZGlzcGxheTogbm9uZTsiPjxwYXRoIGNsYXNzPSJpY29uLXZzLW91dCIgZD0iTTEyLjYzMiw4QTQuNjMyLDQuNjMyLDAsMSwxLDgsMy4zNjgsNC42MzgsNC42MzgsMCwwLDEsMTIuNjMyLDhaIi8+PC9nPjxnIGlkPSJpY29uQmciPjxwYXRoIGNsYXNzPSJpY29uLXZzLXJlZCIgZD0iTTExLjc4OSw4QTMuNzg5LDMuNzg5LDAsMSwxLDgsNC4yMTEsMy43ODgsMy43ODgsMCwwLDEsMTEuNzg5LDhaIi8+PHBhdGggY2xhc3M9Imljb24td2hpdGUiIGQ9Ik03LjUsOS41aDF2MWgtMVptMC00djNoMXYtM1oiLz48L2c+PC9zdmc+Cg=="

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/breakpoint-unverified.svg":
/*!*******************************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/breakpoint-unverified.svg ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6I2Y2ZjZmNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tZGlzYWJsZWQtZ3JleXtmaWxsOiM4NDg0ODQ7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5icmVha3BvaW50LXVudmVyaWZpZWQ8L3RpdGxlPjxnIGlkPSJjYW52YXMiPjxwYXRoIGNsYXNzPSJpY29uLWNhbnZhcy10cmFuc3BhcmVudCIgZD0iTTE2LDBWMTZIMFYwWiIvPjwvZz48ZyBpZD0ib3V0bGluZSIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48cGF0aCBjbGFzcz0iaWNvbi12cy1vdXQiIGQ9Ik0xMi42MzIsOEE0LjYzMiw0LjYzMiwwLDEsMSw4LDMuMzY4LDQuNjM4LDQuNjM4LDAsMCwxLDEyLjYzMiw4WiIvPjwvZz48ZyBpZD0iaWNvbkJnIj48cGF0aCBjbGFzcz0iaWNvbi1kaXNhYmxlZC1ncmV5IiBkPSJNOCw0LjIxMUEzLjc4OSwzLjc4OSwwLDEsMCwxMS43OSw4LDMuNzg4LDMuNzg4LDAsMCwwLDgsNC4yMTFaTTgsMTAuMjlBMi4yOSwyLjI5LDAsMSwxLDEwLjI5LDgsMi4yOTIsMi4yOTIsMCwwLDEsOCwxMC4yOVoiLz48L2c+PC9zdmc+Cg=="

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/breakpoint.svg":
/*!********************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/breakpoint.svg ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6I2Y2ZjZmNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tdnMtcmVke2ZpbGw6I2U1MTQwMDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmJyZWFrcG9pbnQ8L3RpdGxlPjxnIGlkPSJjYW52YXMiPjxwYXRoIGNsYXNzPSJpY29uLWNhbnZhcy10cmFuc3BhcmVudCIgZD0iTTE2LDBWMTZIMFYwWiIvPjwvZz48ZyBpZD0ib3V0bGluZSIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48cGF0aCBjbGFzcz0iaWNvbi12cy1vdXQiIGQ9Ik0xMi42MzIsOEE0LjYzMiw0LjYzMiwwLDEsMSw4LDMuMzY4LDQuNjM4LDQuNjM4LDAsMCwxLDEyLjYzMiw4WiIvPjwvZz48ZyBpZD0iaWNvbkJnIj48cGF0aCBjbGFzcz0iaWNvbi12cy1yZWQiIGQ9Ik0xMS43ODksOEEzLjc4OSwzLjc4OSwwLDEsMSw4LDQuMjExLDMuNzg4LDMuNzg4LDAsMCwxLDExLjc4OSw4WiIvPjwvZz48L3N2Zz4K"

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/current-and-breakpoint.svg":
/*!********************************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/current-and-breakpoint.svg ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6I2Y2ZjZmNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tdnMteWVsbG93e2ZpbGw6I2ZjMDt9Lmljb24tdnMtcmVke2ZpbGw6I2U1MTQwMDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmN1cnJlbnQtYW5kLWJyZWFrcG9pbnQ8L3RpdGxlPjxnIGlkPSJjYW52YXMiPjxwYXRoIGNsYXNzPSJpY29uLWNhbnZhcy10cmFuc3BhcmVudCIgZD0iTTE2LDBWMTZIMFYwWiIvPjwvZz48ZyBpZD0ib3V0bGluZSIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48cGF0aCBjbGFzcz0iaWNvbi12cy1vdXQiIGQ9Ik0xMy44MjksOCw5LjQ1NCwxM0g0VjNIOS40NTRaIi8+PC9nPjxnIGlkPSJpY29uQmciPjxwYXRoIGNsYXNzPSJpY29uLXZzLXllbGxvdyIgZD0iTTEyLjUsOCw5LDEySDVWNEg5WiIvPjxwYXRoIGNsYXNzPSJpY29uLXZzLXJlZCIgZD0iTTEwLjUsOEEyLjUsMi41LDAsMSwxLDgsNS41LDIuNSwyLjUsMCwwLDEsMTAuNSw4WiIvPjwvZz48L3N2Zz4K"

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/current-arrow.svg":
/*!***********************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/current-arrow.svg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6I2Y2ZjZmNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tdnMteWVsbG93e2ZpbGw6I2ZjMDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmN1cnJlbnQtYXJyb3c8L3RpdGxlPjxnIGlkPSJjYW52YXMiPjxwYXRoIGNsYXNzPSJpY29uLWNhbnZhcy10cmFuc3BhcmVudCIgZD0iTTE2LDBWMTZIMFYwWiIvPjwvZz48ZyBpZD0ib3V0bGluZSIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48cGF0aCBjbGFzcz0iaWNvbi12cy1vdXQiIGQ9Ik0xMy44MjksOCw5LjQ1NCwxM0g0VjNIOS40NTRaIi8+PC9nPjxnIGlkPSJpY29uQmciPjxwYXRoIGNsYXNzPSJpY29uLXZzLXllbGxvdyIgZD0iTTEyLjUsOCw5LDEySDVWNEg5WiIvPjwvZz48L3N2Zz4K"

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/debug-dark.svg":
/*!********************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/debug-dark.svg ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE5IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+Cjxzdmcgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4IiB2aWV3Qm94PSIwIDAgMjggMjgiIGZpbGw9IiNGNkY2RjYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+PHBhdGggZD0iTTE1LjE2NzMgMTguMDY4N1YyMy4wMjQ3QzE1LjE2NzMgMjMuNTYzNyAxNS4yNzIzIDI0LjUgMTQuNzMxNSAyNC41SDEyLjgzMjhWMjMuMzMyN0gxNFYxOS42MTIyTDEzLjc5ODggMTkuNDAyMkMxMy4wNjA0IDIwLjA4MDMgMTIuMTAwOCAyMC40NjY5IDExLjA5ODYgMjAuNDlDMTAuMDk2NCAyMC41MTMyIDkuMTE5OTQgMjAuMTcxNCA4LjM1MSAxOS41MjgyQzcgMTguMTczNyA3LjEzODI2IDE2LjMzMjcgOC42MDQ3NSAxNEg0LjY2NzI2VjE1LjE2NzJIMy41MDAwMVYxMy4yNjg1QzMuNTAwMDEgMTIuNzI3NyA0LjQzNjI2IDEyLjgzMjcgNC45NzUyNiAxMi44MzI3SDkuNzYzMjZMMTUuMTY3MyAxOC4wNjg3Wk0xMS42NjczIDUuODMyNzVIMTAuNVY0LjY2NzI1SDEyLjc3NUMxMy4zMTIzIDQuNjY3MjUgMTQgNC45MjQ1IDE0IDUuNDYzNVY5LjM2NkwxNC44NTkzIDEwLjM4NjJDMTQuOTI3IDkuODM5NzkgMTUuMTkwNiA5LjMzNjQ0IDE1LjYwMTMgOC45Njk1OEMxNi4wMTE5IDguNjAyNzEgMTYuNTQxNiA4LjM5NzIzIDE3LjA5MjMgOC4zOTEyNUMxNy4yMjk4IDguMzc5NDUgMTcuMzY4NCA4LjM5NDkyIDE3LjUgOC40MzY3NVY1LjgzMjc1SDE4LjY2NzNWOC44ODgyNUMxOC43MDMgOC45OTE1NCAxOC43NjE4IDkuMDg1MzYgMTguODM5MSA5LjE2MjY1QzE4LjkxNjQgOS4yMzk5NSAxOS4wMTAyIDkuMjk4NzEgMTkuMTEzNSA5LjMzNDVIMjIuMTY3M1YxMC41SDE5LjU2MTVDMTkuNTkzIDEwLjUgMTkuNjEwNSAxMC42NzUgMTkuNjEwNSAxMC44NUMxOS42MDU4IDExLjQwMzQgMTkuNDAxMSAxMS45MzY1IDE5LjAzNDEgMTIuMzUwOEMxOC42NjcxIDEyLjc2NTEgMTguMTYyNiAxMy4wMzI2IDE3LjYxMzggMTMuMTA0TDE4LjYzNCAxNEgyMi41MzgzQzIzLjA3NzMgMTQgMjMuMzM0NSAxNC42ODA3IDIzLjMzNDUgMTUuMjI1VjE3LjVIMjIuMTY3M1YxNi4zMzI3SDE5LjIyNzNMMTEuNjY3MyA4Ljk4Mjc1VjUuODMyNzVaTTE0IDBDMTEuMjMxMSAwIDguNTI0MzEgMC44MjEwODYgNi4yMjIwMiAyLjM1OTQzQzMuOTE5NzMgMy44OTc3NiAyLjEyNTMyIDYuMDg0MjYgMS4wNjU2OSA4LjY0MjQzQzAuMDA2MDY1OTMgMTEuMjAwNiAtMC4yNzExODEgMTQuMDE1NSAwLjI2OTAxMiAxNi43MzEzQzAuODA5MjA1IDE5LjQ0NyAyLjE0MjU4IDIxLjk0MTYgNC4xMDA1MSAyMy44OTk1QzYuMDU4NDUgMjUuODU3NCA4LjU1MzAxIDI3LjE5MDggMTEuMjY4NyAyNy43MzFDMTMuOTg0NSAyOC4yNzEyIDE2Ljc5OTQgMjcuOTkzOSAxOS4zNTc2IDI2LjkzNDNDMjEuOTE1NyAyNS44NzQ3IDI0LjEwMjIgMjQuMDgwMyAyNS42NDA2IDIxLjc3OEMyNy4xNzg5IDE5LjQ3NTcgMjggMTYuNzY4OSAyOCAxNEMyOCAxMC4yODcgMjYuNTI1IDYuNzI2MDEgMjMuODk5NSA0LjEwMDVDMjEuMjc0IDEuNDc1IDE3LjcxMyAwIDE0IDBWMFpNMjUuNjY3MyAxNEMyNS42NjkyIDE2LjY5MDggMjQuNzM2NCAxOS4yOTg4IDIzLjAyODMgMjEuMzc4TDYuNjIyIDQuOTcxNzVDOC4zMzAzNiAzLjU3MjY5IDEwLjQwMDkgMi42ODc1NSAxMi41OTI3IDIuNDE5MzVDMTQuNzg0NSAyLjE1MTE1IDE3LjAwNzQgMi41MTA5MSAxOS4wMDI3IDMuNDU2NzZDMjAuOTk4IDQuNDAyNjIgMjIuNjgzNiA1Ljg5NTY3IDIzLjg2MzUgNy43NjIxN0MyNS4wNDMzIDkuNjI4NjcgMjUuNjY4OSAxMS43OTE5IDI1LjY2NzMgMTRaTTIuMzMyNzYgMTRDMi4zMzA2NiAxMS4zMDkxIDMuMjYzNTEgOC43MDExMSA0Ljk3MTc2IDYuNjIyTDIxLjM3OCAyMy4wM0MxOS42NjkzIDI0LjQyODQgMTcuNTk4NyAyNS4zMTMgMTUuNDA3IDI1LjU4MDdDMTMuMjE1MyAyNS44NDg1IDEwLjk5MjYgMjUuNDg4NCA4Ljk5NzU0IDI0LjU0MjVDNy4wMDI0NCAyMy41OTY1IDUuMzE2OTMgMjIuMTAzNiA0LjEzNzA4IDIwLjIzNzNDMi45NTcyMiAxOC4zNzA5IDIuMzMxNTIgMTYuMjA4IDIuMzMyNzYgMTRaIiBmaWxsPSJ3aGl0ZSIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwIj48cmVjdCB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9IiNGNkY2RjYiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4K"

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/index.css":
/*!***************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/index.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./index.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/debug/src/browser/style/index.css");

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

/***/ "./node_modules/@theia/debug/src/browser/style/stackframe-and-breakpoint.svg":
/*!***********************************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/stackframe-and-breakpoint.svg ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6I2Y2ZjZmNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9LmNscy0xe2ZpbGw6IzljY2U5Yzt9Lmljb24tdnMtcmVke2ZpbGw6I2U1MTQwMDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPnN0YWNrZnJhbWUtYW5kLWJyZWFrcG9pbnQ8L3RpdGxlPjxnIGlkPSJjYW52YXMiPjxwYXRoIGNsYXNzPSJpY29uLWNhbnZhcy10cmFuc3BhcmVudCIgZD0iTTE2LDBWMTZIMFYwWiIvPjwvZz48ZyBpZD0ib3V0bGluZSIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48cGF0aCBjbGFzcz0iaWNvbi12cy1vdXQiIGQ9Ik0xMy44MjksOCw5LjQ1NCwxM0g0VjNIOS40NTRaIi8+PC9nPjxnIGlkPSJpY29uQmciPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEyLjUsOCw5LDEySDVWNEg5WiIvPjxwYXRoIGNsYXNzPSJpY29uLXZzLXJlZCIgZD0iTTEwLjUsOEEyLjUsMi41LDAsMSwxLDgsNS41LDIuNSwyLjUsMCwwLDEsMTAuNSw4WiIvPjwvZz48L3N2Zz4K"

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/stackframe-arrow.svg":
/*!**************************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/stackframe-arrow.svg ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6I2Y2ZjZmNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9LmNscy0xe2ZpbGw6IzljY2U5Yzt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPnN0YWNrZnJhbWUtYXJyb3c8L3RpdGxlPjxnIGlkPSJjYW52YXMiPjxwYXRoIGNsYXNzPSJpY29uLWNhbnZhcy10cmFuc3BhcmVudCIgZD0iTTE2LDBWMTZIMFYwWiIvPjwvZz48ZyBpZD0ib3V0bGluZSIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48cGF0aCBjbGFzcz0iaWNvbi12cy1vdXQiIGQ9Ik0xMy44MjksOCw5LjQ1NCwxM0g0VjNIOS40NTRaIi8+PC9nPjxnIGlkPSJpY29uQmciPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEyLjUsOCw5LDEySDVWNEg5WiIvPjwvZz48L3N2Zz4K"

/***/ }),

/***/ "./node_modules/@theia/terminal/lib/browser/base/terminal-service.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@theia/terminal/lib/browser/base/terminal-service.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminalService = void 0;
/**
 * Service manipulating terminal widgets.
 */
exports.TerminalService = Symbol('TerminalService');


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/debug/src/browser/style/index.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/debug/src/browser/style/index.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 Red Hat, Inc. and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-debug-container,\n.theia-session-container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.theia-side-panel .theia-debug-container .theia-ExpansionToggle {\n    padding-right: 4px;\n    min-width: 10px;\n}\n\n.theia-source-breakpoint,\n.theia-debug-session,\n.theia-debug-thread,\n.theia-debug-stack-frame {\n    display: flex;\n    align-items: center;\n}\n\n.theia-source-breakpoint > span,\n.theia-debug-session > span,\n.theia-debug-thread > span,\n.theia-debug-stack-frame > span,\n.theia-debug-stack-frame .file > span {\n    margin-left: calc(var(--theia-ui-padding)/2);\n}\n\n.theia-debug-session .label,\n.theia-debug-thread .label,\n.theia-debug-stack-frame .expression {\n    width: 100%;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.theia-source-breakpoint .path {\n    font-size: var(--theia-ui-font-size0);\n    color: var(--theia-descriptionForeground);\n}\n\n.theia-source-breakpoint .line-info {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: 100%;\n    white-space: nowrap;\n}\n\n.theia-source-breakpoint .line,\n.theia-debug-stack-frame .line {\n    background: var(--theia-descriptionForeground);\n    color: var(--theia-editor-background);\n    padding: calc(var(--theia-ui-padding)/3);\n    font-size: var(--theia-ui-font-size0);\n    line-height: calc(var(--theia-private-horizontal-tab-height)/2);\n    border-radius: 2px;\n}\n\n.theia-debug-session .status,\n.theia-debug-thread .status {\n    text-transform: uppercase;\n    white-space: nowrap;\n}\n\n.theia-debug-stack-frame .expression {\n    white-space: pre;\n}\n\n.theia-debug-stack-frame.label {\n    text-align: center;\n    font-style: italic;\n}\n\n.theia-debug-stack-frame.subtle {\n    font-style: italic;\n}\n\n.theia-debug-stack-frame .file > span {\n    white-space: nowrap;\n}\n\n.theia-load-more-frames {\n    text-align: center;\n    font-style: italic;\n    white-space: nowrap;\n    display: flex;\n    flex-direction: column;\n}\n\n/** Miscellaneous */\n\n.debug-toolbar {\n    display: flex;\n    align-items: center;\n    padding-top: calc(var(--theia-ui-padding)*2);\n    padding-right: calc(var(--theia-ui-padding)*2);\n    padding-bottom: var(--theia-ui-padding);\n    margin-right: var(--theia-ui-padding);\n    margin-left: var(--theia-ui-padding);\n}\n\n.theia-side-panel .debug-toolbar {\n    padding-left: 3px;\n}\n\n.theia-session-container > .debug-toolbar {\n    padding-top: var(--theia-ui-padding);\n    padding-bottom: var(--theia-ui-padding);\n    border-bottom: 1px solid var(--theia-sideBarSectionHeader-border);\n}\n\n.debug-toolbar .debug-configuration {\n    width: 100%;\n    min-width: 40px;\n}\n\n.debug-toolbar .debug-action {\n    opacity: 0.9;\n    cursor: pointer;\n    pointer-events: all;\n    padding-left: var(--theia-ui-padding);\n    padding-right: var(--theia-ui-padding);\n    min-width: var(--theia-icon-size);\n    min-height: var(--theia-icon-size);\n}\n\n.debug-toolbar .debug-action:not(:focus) {\n    border: 1px solid transparent;\n}\n\n.debug-toolbar .debug-action.theia-mod-disabled {\n    opacity: 0.5 !important;\n    user-select: none;\n    pointer-events: none;\n}\n\n.debug-toolbar .debug-action:not(.theia-mod-disabled):hover {\n    opacity: 1;\n}\n\n.debug-tab-icon {\n    -webkit-mask: url(" + escape(__webpack_require__(/*! ./debug-dark.svg */ "./node_modules/@theia/debug/src/browser/style/debug-dark.svg")) + ") 50%;\n    mask: url(" + escape(__webpack_require__(/*! ./debug-dark.svg */ "./node_modules/@theia/debug/src/browser/style/debug-dark.svg")) + ") 50%;\n}\n\n.theia-debug-console-icon {\n    -webkit-mask: url(" + escape(__webpack_require__(/*! ./repl.svg */ "./node_modules/@theia/debug/src/browser/style/repl.svg")) + ");\n    mask: url(" + escape(__webpack_require__(/*! ./repl.svg */ "./node_modules/@theia/debug/src/browser/style/repl.svg")) + ");\n}\n\n/** Console */\n\n.theia-debug-console-unavailable {\n    font-style: italic;\n}\n\n.theia-debug-console-expression {\n    display: flex;\n    flex-direction: column;\n    white-space: pre-wrap;\n}\n\n.theia-debug-console-variable {\n    width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: var(--theia-variable-value-color);\n}\n\n.theia-debug-console-variable.number {\n    color: var(--theia-number-variable-color);\n}\n\n.theia-debug-console-variable.boolean {\n    color: var(--theia-boolean-variable-color);\n}\n\n.theia-debug-console-variable.string {\n    color: var(--theia-string-variable-color);\n}\n\n.theia-debug-console-variable .name {\n    color: var(--theia-variable-name-color);\n}\n\n/** Editor **/\n.monaco-editor .theia-debug-breakpoint-hint {\n\tbackground: url(" + escape(__webpack_require__(/*! ./breakpoint-hint.svg */ "./node_modules/@theia/debug/src/browser/style/breakpoint-hint.svg")) + ") center center no-repeat;\n}\n\n.theia-debug-breakpoint-icon {\n    width: 19px;\n    height: 19px;\n    min-width: 19px;\n    margin-left: 0px !important;\n}\n\n.monaco-editor .theia-debug-breakpoint-column::before,\n.monaco-editor .theia-debug-top-stack-frame-column::before {\n\tcontent: ' ';\n\twidth: 1.3em;\n\theight: 1.3em;\n\tdisplay: inline-block;\n\tvertical-align: text-bottom;\n}\n\n.monaco-editor .theia-debug-top-stack-frame-column {\n\tbackground: url(" + escape(__webpack_require__(/*! ./current-arrow.svg */ "./node_modules/@theia/debug/src/browser/style/current-arrow.svg")) + ") center center no-repeat;\n}\n\n.theia-debug-breakpoint,\n.monaco-editor .theia-debug-breakpoint-column.theia-debug-breakpoint-column {\n\tbackground: url(" + escape(__webpack_require__(/*! ./breakpoint.svg */ "./node_modules/@theia/debug/src/browser/style/breakpoint.svg")) + ") center center no-repeat;\n}\n.theia-debug-breakpoint-disabled,\n.monaco-editor .theia-debug-breakpoint-column.theia-debug-breakpoint-disabled-column {\n    background: url(" + escape(__webpack_require__(/*! ./breakpoint-disabled.svg */ "./node_modules/@theia/debug/src/browser/style/breakpoint-disabled.svg")) + ") center center no-repeat;\n}\n.theia-debug-breakpoint-unverified,\n.monaco-editor .theia-debug-breakpoint-column.theia-debug-breakpoint-unverified-column {\n    background: url(" + escape(__webpack_require__(/*! ./breakpoint-unverified.svg */ "./node_modules/@theia/debug/src/browser/style/breakpoint-unverified.svg")) + ") center center no-repeat;\n}\n.theia-debug-breakpoint-unsupported,\n.monaco-editor .theia-debug-breakpoint-column.theia-debug-breakpoint-unsupported-column {\n    background: url(" + escape(__webpack_require__(/*! ./breakpoint-unsupported.svg */ "./node_modules/@theia/debug/src/browser/style/breakpoint-unsupported.svg")) + ") center center no-repeat;\n}\n\n.theia-debug-conditional-breakpoint,\n.monaco-editor .theia-debug-breakpoint-column.theia-debug-conditional-breakpoint-column {\n    background: url(" + escape(__webpack_require__(/*! ./breakpoint-conditional.svg */ "./node_modules/@theia/debug/src/browser/style/breakpoint-conditional.svg")) + ") center center no-repeat;\n}\n.theia-debug-conditional-breakpoint-disabled,\n.monaco-editor .theia-debug-breakpoint-column.theia-debug-conditional-breakpoint-disabled-column {\n    background: url(" + escape(__webpack_require__(/*! ./breakpoint-conditional-disabled.svg */ "./node_modules/@theia/debug/src/browser/style/breakpoint-conditional-disabled.svg")) + ") center center no-repeat;\n}\n.theia-debug-conditional-breakpoint-unverified,\n.monaco-editor .theia-debug-breakpoint-column.theia-debug-conditional-breakpoint-unverified-column {\n    background: url(" + escape(__webpack_require__(/*! ./breakpoint-conditional-unverified.svg */ "./node_modules/@theia/debug/src/browser/style/breakpoint-conditional-unverified.svg")) + ") center center no-repeat;\n}\n\n.theia-debug-logpoint,\n.monaco-editor .theia-debug-breakpoint-column.theia-debug-logpoint-column {\n\tbackground: url(" + escape(__webpack_require__(/*! ./breakpoint-log.svg */ "./node_modules/@theia/debug/src/browser/style/breakpoint-log.svg")) + ") center center no-repeat;\n}\n.theia-debug-logpoint-disabled,\n.monaco-editor .theia-debug-breakpoint-column.theia-debug-logpoint-disabled-columne {\n    background: url(" + escape(__webpack_require__(/*! ./breakpoint-log-disabled.svg */ "./node_modules/@theia/debug/src/browser/style/breakpoint-log-disabled.svg")) + ") center center no-repeat;\n}\n.theia-debug-logpoint-unverified,\n.monaco-editor .theia-debug-breakpoint-column.theia-debug-logpoint-unverified-column {\n    background: url(" + escape(__webpack_require__(/*! ./breakpoint-log-unverified.svg */ "./node_modules/@theia/debug/src/browser/style/breakpoint-log-unverified.svg")) + ") center center no-repeat;\n}\n\n.theia-debug-function {\n\tbackground: url(" + escape(__webpack_require__(/*! ./breakpoint-function.svg */ "./node_modules/@theia/debug/src/browser/style/breakpoint-function.svg")) + ") center center no-repeat;\n}\n.theia-debug-function-disabled {\n\tbackground: url(" + escape(__webpack_require__(/*! ./breakpoint-function-disabled.svg */ "./node_modules/@theia/debug/src/browser/style/breakpoint-function-disabled.svg")) + ") center center no-repeat;\n}\n.theia-debug-function-unverified {\n\tbackground: url(" + escape(__webpack_require__(/*! ./breakpoint-function-unverified.svg */ "./node_modules/@theia/debug/src/browser/style/breakpoint-function-unverified.svg")) + ") center center no-repeat;\n}\n\n.monaco-editor .theia-debug-top-stack-frame {\n\tbackground: url(" + escape(__webpack_require__(/*! ./current-arrow.svg */ "./node_modules/@theia/debug/src/browser/style/current-arrow.svg")) + ") center center no-repeat;\n}\n.monaco-editor .theia-debug-top-stack-frame.theia-debug-breakpoint,\n.monaco-editor .theia-debug-breakpoint-column.theia-debug-breakpoint-column.debug-top-stack-frame-column {\n\tbackground: url(" + escape(__webpack_require__(/*! ./current-and-breakpoint.svg */ "./node_modules/@theia/debug/src/browser/style/current-and-breakpoint.svg")) + ") center center no-repeat;\n}\n.monaco-editor .view-overlays .theia-debug-top-stack-frame-line {\n    background: var(--theia-editor-stackFrameHighlightBackground);\n}\n\n.monaco-editor .theia-debug-focused-stack-frame {\n\tbackground: url(" + escape(__webpack_require__(/*! ./stackframe-arrow.svg */ "./node_modules/@theia/debug/src/browser/style/stackframe-arrow.svg")) + ") center center no-repeat;\n}\n.monaco-editor .theia-debug-focused-stack-frame.theia-debug-breakpoint {\n\tbackground: url(" + escape(__webpack_require__(/*! ./stackframe-and-breakpoint.svg */ "./node_modules/@theia/debug/src/browser/style/stackframe-and-breakpoint.svg")) + ") center center no-repeat;\n}\n.monaco-editor .view-overlays .theia-debug-focused-stack-frame-line {\n    background: var(--theia-editor-focusedStackFrameHighlightBackground);\n}\n\n/** Toolbars */\n\n.theia-debug-configure {\n    background: var(--theia-debug-configure) center center no-repeat;\n}\n.theia-debug-repl {\n    background: var(--theia-debug-repl) center center no-repeat;\n}\n\n.theia-debug-start {\n    background: var(--theia-debug-start) center center no-repeat;\n}\n.theia-debug-stop {\n    background: var(--theia-debug-stop) center center no-repeat;\n}\n.theia-debug-restart {\n    background: var(--theia-debug-restart) center center no-repeat;\n}\n.theia-debug-pause {\n    background: var(--theia-debug-pause) center center no-repeat;\n}\n.theia-debug-continue {\n    background: var(--theia-debug-continue) center center no-repeat;\n}\n.theia-debug-step-over {\n    background: var(--theia-debug-step-over) center center no-repeat;\n}\n.theia-debug-step-into {\n    background: var(--theia-debug-step-into) center center no-repeat;\n}\n.theia-debug-step-out {\n    background: var(--theia-debug-step-out) center center no-repeat;\n}\n\n.breakpoints-activate {\n\tbackground: var(--breakpoints-activate-url) center center no-repeat;\n}\n\n/** Hover */\n.theia-debug-hover {\n    display: flex;\n    flex-direction: column;\n    min-width: 324px;\n    min-height: 324px;\n    width: 324px;\n    height: 324px;\n    border: 1px solid var(--theia-editorHoverWidget-border);\n    background: var(--theia-editorHoverWidget-background);\n    /* TODO color: var(--theia-editorHoverWidget-foreground); with a newer Monaco version */\n    color: var(--theia-editorWidget-foreground);\n}\n\n.theia-debug-hover .theia-source-tree {\n    height: 100%;\n    width: 100%;\n}\n\n.theia-debug-hover-title {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    padding: var(--theia-ui-padding);\n    padding-left: calc(var(--theia-ui-padding)*2);\n    border-bottom: 1px solid var(--theia-editorHoverWidget-border);\n}\n\n.theia-debug-hover-content {\n    display: flex;\n    flex: 1;\n    overflow-y: auto;\n}\n\n/** Breakpoint Widget */\n.theia-debug-breakpoint-widget {\n    display: flex;\n}\n\n.theia-debug-breakpoint-select {\n\tdisplay: flex;\n\tjustify-content: center;\n\tflex-direction: column;\n\tpadding: 0 10px;\n\tflex-shrink: 0;\n}\n\n.theia-debug-breakpoint-input {\n\tflex: 1;\n\tmargin-top: var(--theia-ui-padding);\n\tmargin-bottom: var(--theia-ui-padding);\n}\n\n/* Status Bar */\n.theia-mod-debugging #theia-statusBar {\n    background: var(--theia-statusBar-debuggingBackground);\n    color: var(--theia-statusBar-debuggingForeground);\n    border-top: var(--theia-border-width) solid var(--theia-statusBar-debuggingBorder);\n}\n\n/** Exception Widget */\n.monaco-editor .zone-widget .zone-widget-container.theia-debug-exception-widget {\n    color: var(--theia-editor-foreground);\n    font-size: var(--theia-code-font-size);\n    line-height: var(--theia-code-line-height);\n    font-family: var(--theia-code-font-family);\n    border-top-color: var(--theia-debugExceptionWidget-border);\n    border-bottom-color: var(--theia-debugExceptionWidget-border);\n    background-color: var(--theia-debugExceptionWidget-background);\n    padding: var(--theia-ui-padding) calc(var(--theia-ui-padding)*1.5);\n\twhite-space: pre-wrap;\n\tuser-select: text;\n    overflow: hidden;\n}\n\n.theia-debug-exception-widget .title {\n\tfont-weight: bold;\n}\n\n.theia-debug-exception-widget .stack-trace {\n\tmargin-top: 0.5em;\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=49.bundle.js.map