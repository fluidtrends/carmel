(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/@theia/console/lib/browser/ansi-console-item.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@theia/console/lib/browser/ansi-console-item.js ***!
  \**********************************************************************/
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
exports.AnsiConsoleItem = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
// TODO: Remove this workaround once issue is fixed by anser.
// REF: https://github.com/IonicaBizau/anser/issues/52
var ansiToHtml = __webpack_require__(/*! anser */ "./node_modules/anser/lib/index.js").ansiToHtml;
var AnsiConsoleItem = /** @class */ (function () {
    function AnsiConsoleItem(content, severity) {
        this.content = content;
        this.severity = severity;
        this.htmlContent = ansiToHtml(this.content, {
            use_classes: true,
            remove_empty: true
        });
    }
    Object.defineProperty(AnsiConsoleItem.prototype, "visible", {
        get: function () {
            return !!this.htmlContent;
        },
        enumerable: false,
        configurable: true
    });
    AnsiConsoleItem.prototype.render = function () {
        return React.createElement("div", { className: 'theia-console-ansi-console-item', dangerouslySetInnerHTML: { __html: this.htmlContent } });
    };
    return AnsiConsoleItem;
}());
exports.AnsiConsoleItem = AnsiConsoleItem;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/console/debug-console-contribution.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/console/debug-console-contribution.js ***!
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
exports.DebugConsoleContribution = exports.DebugConsoleCommands = exports.InDebugReplContextKey = void 0;
var console_widget_1 = __webpack_require__(/*! @theia/console/lib/browser/console-widget */ "./node_modules/@theia/console/lib/browser/console-widget.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var context_key_service_1 = __webpack_require__(/*! @theia/core/lib/browser/context-key-service */ "./node_modules/@theia/core/lib/browser/context-key-service.js");
var tab_bar_toolbar_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-toolbar */ "./node_modules/@theia/core/lib/browser/shell/tab-bar-toolbar.js");
var severity_1 = __webpack_require__(/*! @theia/core/lib/common/severity */ "./node_modules/@theia/core/lib/common/severity.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var debug_console_session_1 = __webpack_require__(/*! ./debug-console-session */ "./node_modules/@theia/debug/lib/browser/console/debug-console-session.js");
exports.InDebugReplContextKey = Symbol('inDebugReplContextKey');
var DebugConsoleCommands;
(function (DebugConsoleCommands) {
    var DEBUG_CONSOLE_CATEGORY = 'Debug';
    DebugConsoleCommands.CLEAR = {
        id: 'debug.console.clear',
        category: DEBUG_CONSOLE_CATEGORY,
        label: 'Clear Console',
        iconClass: 'clear-all'
    };
})(DebugConsoleCommands = exports.DebugConsoleCommands || (exports.DebugConsoleCommands = {}));
var DebugConsoleContribution = /** @class */ (function (_super) {
    __extends(DebugConsoleContribution, _super);
    function DebugConsoleContribution() {
        var _this = _super.call(this, {
            widgetId: DebugConsoleContribution_1.options.id,
            widgetName: DebugConsoleContribution_1.options.title.label,
            defaultWidgetOptions: {
                area: 'bottom'
            },
            toggleCommandId: 'debug:console:toggle',
            toggleKeybinding: 'ctrlcmd+shift+y'
        }) || this;
        _this.changeSeverity = function (event) {
            _this.debugConsoleSession.severity = severity_1.Severity.fromValue(event.target.value);
        };
        return _this;
    }
    DebugConsoleContribution_1 = DebugConsoleContribution;
    DebugConsoleContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        _super.prototype.registerCommands.call(this, commands);
        commands.registerCommand(DebugConsoleCommands.CLEAR, {
            isEnabled: function (widget) { return _this.withWidget(widget, function () { return true; }); },
            isVisible: function (widget) { return _this.withWidget(widget, function () { return true; }); },
            execute: function (widget) { return _this.withWidget(widget, function () {
                _this.clearConsole();
            }); },
        });
    };
    DebugConsoleContribution.prototype.registerToolbarItems = function (toolbarRegistry) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                toolbarRegistry.registerItem({
                    id: 'debug-console-severity',
                    render: function (widget) { return _this.renderSeveritySelector(widget); },
                    isVisible: function (widget) { return _this.withWidget(widget, function () { return true; }); },
                    onDidChange: this.debugConsoleSession.onSelectionChange
                });
                toolbarRegistry.registerItem({
                    id: DebugConsoleCommands.CLEAR.id,
                    command: DebugConsoleCommands.CLEAR.id,
                    tooltip: 'Clear Console',
                    priority: 0,
                });
                return [2 /*return*/];
            });
        });
    };
    DebugConsoleContribution.create = function (parent) {
        var inputFocusContextKey = parent.get(exports.InDebugReplContextKey);
        var child = console_widget_1.ConsoleWidget.createContainer(parent, __assign(__assign({}, DebugConsoleContribution_1.options), { inputFocusContextKey: inputFocusContextKey }));
        var widget = child.get(console_widget_1.ConsoleWidget);
        widget.session = child.get(debug_console_session_1.DebugConsoleSession);
        return widget;
    };
    DebugConsoleContribution.bindContribution = function (bind) {
        bind(exports.InDebugReplContextKey).toDynamicValue(function (_a) {
            var container = _a.container;
            return container.get(context_key_service_1.ContextKeyService).createKey('inDebugRepl', false);
        }).inSingletonScope();
        bind(debug_console_session_1.DebugConsoleSession).toSelf().inSingletonScope();
        browser_1.bindViewContribution(bind, DebugConsoleContribution_1).onActivation(function (context, _) {
            // eagerly initialize the debug console session
            context.container.get(debug_console_session_1.DebugConsoleSession);
            return _;
        });
        bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(DebugConsoleContribution_1);
        bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
            var container = _a.container;
            return ({
                id: DebugConsoleContribution_1.options.id,
                createWidget: function () { return DebugConsoleContribution_1.create(container); }
            });
        });
    };
    DebugConsoleContribution.prototype.renderSeveritySelector = function (widget) {
        var severityElements = [];
        severity_1.Severity.toArray().forEach(function (s) { return severityElements.push(React.createElement("option", { value: s, key: s }, s)); });
        var selectedValue = severity_1.Severity.toString(this.debugConsoleSession.severity || severity_1.Severity.Ignore);
        return React.createElement("select", { className: 'theia-select', id: 'debugConsoleSeverity', key: 'debugConsoleSeverity', value: selectedValue, onChange: this.changeSeverity }, severityElements);
    };
    DebugConsoleContribution.prototype.withWidget = function (widget, fn) {
        if (widget === void 0) { widget = this.tryGetWidget(); }
        if (widget instanceof console_widget_1.ConsoleWidget && widget.id === DebugConsoleContribution_1.options.id) {
            return fn(widget);
        }
        return false;
    };
    /**
     * Clear the console widget.
     */
    DebugConsoleContribution.prototype.clearConsole = function () {
        return __awaiter(this, void 0, void 0, function () {
            var widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.widget];
                    case 1:
                        widget = _a.sent();
                        widget.clear();
                        return [2 /*return*/];
                }
            });
        });
    };
    var DebugConsoleContribution_1;
    DebugConsoleContribution.options = {
        id: 'debug-console',
        title: {
            label: 'Debug Console',
            iconClass: 'theia-debug-console-icon'
        },
        input: {
            uri: debug_console_session_1.DebugConsoleSession.uri,
            options: {
                autoSizing: true,
                minHeight: 1,
                maxHeight: 10
            }
        }
    };
    __decorate([
        inversify_1.inject(debug_console_session_1.DebugConsoleSession),
        __metadata("design:type", debug_console_session_1.DebugConsoleSession)
    ], DebugConsoleContribution.prototype, "debugConsoleSession", void 0);
    DebugConsoleContribution = DebugConsoleContribution_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], DebugConsoleContribution);
    return DebugConsoleContribution;
}(browser_1.AbstractViewContribution));
exports.DebugConsoleContribution = DebugConsoleContribution;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/console/debug-console-session.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/console/debug-console-session.js ***!
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
exports.DebugConsoleSession = void 0;
var throttle = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var console_session_1 = __webpack_require__(/*! @theia/console/lib/browser/console-session */ "./node_modules/@theia/console/lib/browser/console-session.js");
var ansi_console_item_1 = __webpack_require__(/*! @theia/console/lib/browser/ansi-console-item */ "./node_modules/@theia/console/lib/browser/ansi-console-item.js");
var debug_session_manager_1 = __webpack_require__(/*! ../debug-session-manager */ "./node_modules/@theia/debug/lib/browser/debug-session-manager.js");
var browser_1 = __webpack_require__(/*! @theia/languages/lib/browser */ "./node_modules/@theia/languages/lib/browser/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var debug_console_items_1 = __webpack_require__(/*! ./debug-console-items */ "./node_modules/@theia/debug/lib/browser/console/debug-console-items.js");
var severity_1 = __webpack_require__(/*! @theia/core/lib/common/severity */ "./node_modules/@theia/core/lib/common/severity.js");
var DebugConsoleSession = /** @class */ (function (_super) {
    __extends(DebugConsoleSession, _super);
    function DebugConsoleSession() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 'debug';
        _this.items = [];
        _this.completionKinds = new Map();
        _this.fireDidChange = throttle(function () { return _super.prototype.fireDidChange.call(_this); }, 50);
        return _this;
    }
    DebugConsoleSession_1 = DebugConsoleSession;
    DebugConsoleSession.prototype.init = function () {
        var _this = this;
        this.toDispose.push(this.manager.onDidCreateDebugSession(function (session) {
            if (_this.manager.sessions.length === 1) {
                _this.clear();
            }
            session.on('output', function (event) { return _this.logOutput(session, event); });
        }));
        this.completionKinds.set('method', browser_1.CompletionItemKind.Method);
        this.completionKinds.set('function', browser_1.CompletionItemKind.Function);
        this.completionKinds.set('constructor', browser_1.CompletionItemKind.Constructor);
        this.completionKinds.set('field', browser_1.CompletionItemKind.Field);
        this.completionKinds.set('variable', browser_1.CompletionItemKind.Variable);
        this.completionKinds.set('class', browser_1.CompletionItemKind.Class);
        this.completionKinds.set('interface', browser_1.CompletionItemKind.Interface);
        this.completionKinds.set('module', browser_1.CompletionItemKind.Module);
        this.completionKinds.set('property', browser_1.CompletionItemKind.Property);
        this.completionKinds.set('unit', browser_1.CompletionItemKind.Unit);
        this.completionKinds.set('value', browser_1.CompletionItemKind.Value);
        this.completionKinds.set('enum', browser_1.CompletionItemKind.Enum);
        this.completionKinds.set('keyword', browser_1.CompletionItemKind.Keyword);
        this.completionKinds.set('snippet', browser_1.CompletionItemKind.Snippet);
        this.completionKinds.set('text', browser_1.CompletionItemKind.Text);
        this.completionKinds.set('color', browser_1.CompletionItemKind.Color);
        this.completionKinds.set('file', browser_1.CompletionItemKind.File);
        this.completionKinds.set('reference', browser_1.CompletionItemKind.Reference);
        this.completionKinds.set('customcolor', browser_1.CompletionItemKind.Color);
        if (this.languages.registerCompletionItemProvider) {
            this.toDispose.push(this.languages.registerCompletionItemProvider([DebugConsoleSession_1.uri], {
                provideCompletionItems: function (params) { return _this.completions(params); }
            }, '.'));
        }
    };
    DebugConsoleSession.prototype.getElements = function () {
        var _this = this;
        return this.items.filter(function (e) { return !_this.severity || e.severity === _this.severity; })[Symbol.iterator]();
    };
    DebugConsoleSession.prototype.completions = function (_a) {
        var uri = _a.textDocument.uri, position = _a.position;
        return __awaiter(this, void 0, void 0, function () {
            var session, model, column, lineNumber, word, prefixLength_1, text, document_1, items;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        session = this.manager.currentSession;
                        if (!(session && session.capabilities.supportsCompletionsRequest)) return [3 /*break*/, 2];
                        model = monaco.editor.getModel(monaco.Uri.parse(uri));
                        if (!model) return [3 /*break*/, 2];
                        column = position.character + 1;
                        lineNumber = position.line + 1;
                        word = model.getWordAtPosition({ column: column, lineNumber: lineNumber });
                        prefixLength_1 = word ? word.word.length : 0;
                        text = model.getValue();
                        document_1 = browser_1.TextDocument.create(uri, model.getModeId(), model.getVersionId(), text);
                        return [4 /*yield*/, session.completions(text, column, lineNumber)];
                    case 1:
                        items = _b.sent();
                        return [2 /*return*/, items.map(function (item) { return _this.asCompletionItem(document_1, position, prefixLength_1, item); })];
                    case 2: return [2 /*return*/, []];
                }
            });
        });
    };
    DebugConsoleSession.prototype.asCompletionItem = function (document, position, prefixLength, item) {
        var label = item.label, text = item.text, type = item.type, length = item.length;
        var newText = text || label;
        var start = document.positionAt(document.offsetAt(position) - (length || prefixLength));
        var replaceRange = browser_1.Range.create(start, position);
        var textEdit = browser_1.TextEdit.replace(replaceRange, newText);
        return {
            label: label,
            textEdit: textEdit,
            kind: this.completionKinds.get(type)
        };
    };
    DebugConsoleSession.prototype.execute = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var expression;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        expression = new debug_console_items_1.ExpressionItem(value, function () { return _this.manager.currentSession; });
                        this.items.push(expression);
                        return [4 /*yield*/, expression.evaluate()];
                    case 1:
                        _a.sent();
                        this.fireDidChange();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugConsoleSession.prototype.clear = function () {
        this.items = [];
        this.fireDidChange();
    };
    DebugConsoleSession.prototype.append = function (value) {
        if (!value) {
            return;
        }
        var lastItem = this.items.slice(-1)[0];
        if (lastItem instanceof ansi_console_item_1.AnsiConsoleItem && lastItem.content === this.uncompletedItemContent) {
            this.items.pop();
            this.uncompletedItemContent += value;
        }
        else {
            this.uncompletedItemContent = value;
        }
        this.items.push(new ansi_console_item_1.AnsiConsoleItem(this.uncompletedItemContent, severity_1.Severity.Info));
        this.fireDidChange();
    };
    DebugConsoleSession.prototype.appendLine = function (value) {
        this.items.push(new ansi_console_item_1.AnsiConsoleItem(value, severity_1.Severity.Info));
        this.fireDidChange();
    };
    DebugConsoleSession.prototype.logOutput = function (session, event) {
        return __awaiter(this, void 0, void 0, function () {
            var body, category, variablesReference, severity, items, _a, _b, line;
            var _c, e_1, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        body = event.body;
                        category = body.category, variablesReference = body.variablesReference;
                        if (category === 'telemetry') {
                            console.debug("telemetry/" + event.body.output, event.body.data);
                            return [2 /*return*/];
                        }
                        severity = category === 'stderr' ? severity_1.Severity.Error : event.body.category === 'console' ? severity_1.Severity.Warning : severity_1.Severity.Info;
                        if (!variablesReference) return [3 /*break*/, 2];
                        return [4 /*yield*/, new debug_console_items_1.ExpressionContainer({ session: function () { return session; }, variablesReference: variablesReference }).getElements()];
                    case 1:
                        items = _e.sent();
                        (_c = this.items).push.apply(_c, __spread(items));
                        return [3 /*break*/, 3];
                    case 2:
                        if (typeof body.output === 'string') {
                            try {
                                for (_a = __values(body.output.split('\n')), _b = _a.next(); !_b.done; _b = _a.next()) {
                                    line = _b.value;
                                    this.items.push(new ansi_console_item_1.AnsiConsoleItem(line, severity));
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }
                        _e.label = 3;
                    case 3:
                        this.fireDidChange();
                        return [2 /*return*/];
                }
            });
        });
    };
    var DebugConsoleSession_1;
    DebugConsoleSession.uri = new uri_1.default().withScheme('debugconsole');
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], DebugConsoleSession.prototype, "manager", void 0);
    __decorate([
        inversify_1.inject(browser_1.Languages),
        __metadata("design:type", Object)
    ], DebugConsoleSession.prototype, "languages", void 0);
    __decorate([
        inversify_1.inject(browser_1.Workspace),
        __metadata("design:type", Object)
    ], DebugConsoleSession.prototype, "workspace", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugConsoleSession.prototype, "init", null);
    DebugConsoleSession = DebugConsoleSession_1 = __decorate([
        inversify_1.injectable()
    ], DebugConsoleSession);
    return DebugConsoleSession;
}(console_session_1.ConsoleSession));
exports.DebugConsoleSession = DebugConsoleSession;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/debug-frontend-application-contribution.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/debug-frontend-application-contribution.js ***!
  \******************************************************************************************/
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
exports.DebugFrontendApplicationContribution = exports.DebugBreakpointWidgetCommands = exports.DebugEditorContextCommands = exports.DebugSessionContextCommands = exports.DebugThreadContextCommands = exports.DebugCommands = exports.DebugMenus = void 0;
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var theming_1 = __webpack_require__(/*! @theia/core/lib/browser/theming */ "./node_modules/@theia/core/lib/browser/theming.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var debug_session_manager_1 = __webpack_require__(/*! ./debug-session-manager */ "./node_modules/@theia/debug/lib/browser/debug-session-manager.js");
var debug_widget_1 = __webpack_require__(/*! ./view/debug-widget */ "./node_modules/@theia/debug/lib/browser/view/debug-widget.js");
var breakpoint_marker_1 = __webpack_require__(/*! ./breakpoint/breakpoint-marker */ "./node_modules/@theia/debug/lib/browser/breakpoint/breakpoint-marker.js");
var breakpoint_manager_1 = __webpack_require__(/*! ./breakpoint/breakpoint-manager */ "./node_modules/@theia/debug/lib/browser/breakpoint/breakpoint-manager.js");
var debug_configuration_manager_1 = __webpack_require__(/*! ./debug-configuration-manager */ "./node_modules/@theia/debug/lib/browser/debug-configuration-manager.js");
var debug_session_1 = __webpack_require__(/*! ./debug-session */ "./node_modules/@theia/debug/lib/browser/debug-session.js");
var debug_breakpoints_widget_1 = __webpack_require__(/*! ./view/debug-breakpoints-widget */ "./node_modules/@theia/debug/lib/browser/view/debug-breakpoints-widget.js");
var debug_source_breakpoint_1 = __webpack_require__(/*! ./model/debug-source-breakpoint */ "./node_modules/@theia/debug/lib/browser/model/debug-source-breakpoint.js");
var debug_threads_widget_1 = __webpack_require__(/*! ./view/debug-threads-widget */ "./node_modules/@theia/debug/lib/browser/view/debug-threads-widget.js");
var debug_thread_1 = __webpack_require__(/*! ./model/debug-thread */ "./node_modules/@theia/debug/lib/browser/model/debug-thread.js");
var debug_stack_frames_widget_1 = __webpack_require__(/*! ./view/debug-stack-frames-widget */ "./node_modules/@theia/debug/lib/browser/view/debug-stack-frames-widget.js");
var debug_stack_frame_1 = __webpack_require__(/*! ./model/debug-stack-frame */ "./node_modules/@theia/debug/lib/browser/model/debug-stack-frame.js");
var debug_variables_widget_1 = __webpack_require__(/*! ./view/debug-variables-widget */ "./node_modules/@theia/debug/lib/browser/view/debug-variables-widget.js");
var debug_console_items_1 = __webpack_require__(/*! ./console/debug-console-items */ "./node_modules/@theia/debug/lib/browser/console/debug-console-items.js");
var debug_session_widget_1 = __webpack_require__(/*! ./view/debug-session-widget */ "./node_modules/@theia/debug/lib/browser/view/debug-session-widget.js");
var debug_keybinding_contexts_1 = __webpack_require__(/*! ./debug-keybinding-contexts */ "./node_modules/@theia/debug/lib/browser/debug-keybinding-contexts.js");
var debug_editor_model_1 = __webpack_require__(/*! ./editor/debug-editor-model */ "./node_modules/@theia/debug/lib/browser/editor/debug-editor-model.js");
var debug_editor_service_1 = __webpack_require__(/*! ./editor/debug-editor-service */ "./node_modules/@theia/debug/lib/browser/editor/debug-editor-service.js");
var debug_console_contribution_1 = __webpack_require__(/*! ./console/debug-console-contribution */ "./node_modules/@theia/debug/lib/browser/console/debug-console-contribution.js");
var debug_service_1 = __webpack_require__(/*! ../common/debug-service */ "./node_modules/@theia/debug/lib/common/debug-service.js");
var debug_schema_updater_1 = __webpack_require__(/*! ./debug-schema-updater */ "./node_modules/@theia/debug/lib/browser/debug-schema-updater.js");
var debug_preferences_1 = __webpack_require__(/*! ./debug-preferences */ "./node_modules/@theia/debug/lib/browser/debug-preferences.js");
var debug_watch_widget_1 = __webpack_require__(/*! ./view/debug-watch-widget */ "./node_modules/@theia/debug/lib/browser/view/debug-watch-widget.js");
var debug_watch_expression_1 = __webpack_require__(/*! ./view/debug-watch-expression */ "./node_modules/@theia/debug/lib/browser/view/debug-watch-expression.js");
var debug_watch_manager_1 = __webpack_require__(/*! ./debug-watch-manager */ "./node_modules/@theia/debug/lib/browser/debug-watch-manager.js");
var debug_function_breakpoint_1 = __webpack_require__(/*! ./model/debug-function-breakpoint */ "./node_modules/@theia/debug/lib/browser/model/debug-function-breakpoint.js");
var debug_breakpoint_1 = __webpack_require__(/*! ./model/debug-breakpoint */ "./node_modules/@theia/debug/lib/browser/model/debug-breakpoint.js");
var DebugMenus;
(function (DebugMenus) {
    DebugMenus.DEBUG = __spread(common_1.MAIN_MENU_BAR, ['6_debug']);
    DebugMenus.DEBUG_CONTROLS = __spread(DebugMenus.DEBUG, ['a_controls']);
    DebugMenus.DEBUG_CONFIGURATION = __spread(DebugMenus.DEBUG, ['b_configuration']);
    DebugMenus.DEBUG_THREADS = __spread(DebugMenus.DEBUG, ['c_threads']);
    DebugMenus.DEBUG_SESSIONS = __spread(DebugMenus.DEBUG, ['d_sessions']);
    DebugMenus.DEBUG_BREAKPOINT = __spread(DebugMenus.DEBUG, ['e_breakpoint']);
    DebugMenus.DEBUG_NEW_BREAKPOINT = __spread(DebugMenus.DEBUG_BREAKPOINT, ['a_new_breakpoint']);
    DebugMenus.DEBUG_BREAKPOINTS = __spread(DebugMenus.DEBUG, ['f_breakpoints']);
})(DebugMenus = exports.DebugMenus || (exports.DebugMenus = {}));
var DebugCommands;
(function (DebugCommands) {
    var DEBUG_CATEGORY = 'Debug';
    DebugCommands.START = {
        id: 'workbench.action.debug.start',
        category: DEBUG_CATEGORY,
        label: 'Start Debugging',
        iconClass: 'fa fa-play'
    };
    DebugCommands.START_NO_DEBUG = {
        id: 'workbench.action.debug.run',
        label: 'Debug: Start Without Debugging'
    };
    DebugCommands.STOP = {
        id: 'workbench.action.debug.stop',
        category: DEBUG_CATEGORY,
        label: 'Stop Debugging',
        iconClass: 'fa fa-stop'
    };
    DebugCommands.RESTART = {
        id: 'workbench.action.debug.restart',
        category: DEBUG_CATEGORY,
        label: 'Restart Debugging',
    };
    DebugCommands.OPEN_CONFIGURATIONS = {
        id: 'debug.configurations.open',
        label: 'Debug: Open Configurations'
    };
    DebugCommands.ADD_CONFIGURATION = {
        id: 'debug.configurations.add',
        label: 'Debug: Add Configuration...'
    };
    DebugCommands.STEP_OVER = {
        id: 'workbench.action.debug.stepOver',
        category: DEBUG_CATEGORY,
        label: 'Step Over',
        iconClass: 'fa fa-arrow-right'
    };
    DebugCommands.STEP_INTO = {
        id: 'workbench.action.debug.stepInto',
        category: DEBUG_CATEGORY,
        label: 'Step Into',
        iconClass: 'fa fa-arrow-down'
    };
    DebugCommands.STEP_OUT = {
        id: 'workbench.action.debug.stepOut',
        category: DEBUG_CATEGORY,
        label: 'Step Out',
        iconClass: 'fa fa-arrow-up'
    };
    DebugCommands.CONTINUE = {
        id: 'workbench.action.debug.continue',
        category: DEBUG_CATEGORY,
        label: 'Continue',
        iconClass: 'fa fa-play-circle'
    };
    DebugCommands.PAUSE = {
        id: 'workbench.action.debug.pause',
        category: DEBUG_CATEGORY,
        label: 'Pause',
        iconClass: 'fa fa-pause'
    };
    DebugCommands.CONTINUE_ALL = {
        id: 'debug.thread.continue.all',
        category: DEBUG_CATEGORY,
        label: 'Continue All',
        iconClass: 'fa fa-play-circle'
    };
    DebugCommands.PAUSE_ALL = {
        id: 'debug.thread.pause.all',
        category: DEBUG_CATEGORY,
        label: 'Pause All',
        iconClass: 'fa fa-pause'
    };
    DebugCommands.TOGGLE_BREAKPOINT = {
        id: 'editor.debug.action.toggleBreakpoint',
        category: DEBUG_CATEGORY,
        label: 'Toggle Breakpoint',
    };
    DebugCommands.INLINE_BREAKPOINT = {
        id: 'editor.debug.action.inlineBreakpoint',
        category: DEBUG_CATEGORY,
        label: 'Inline Breakpoint',
    };
    DebugCommands.ADD_CONDITIONAL_BREAKPOINT = {
        id: 'debug.breakpoint.add.conditional',
        category: DEBUG_CATEGORY,
        label: 'Add Conditional Breakpoint...',
    };
    DebugCommands.ADD_LOGPOINT = {
        id: 'debug.breakpoint.add.logpoint',
        category: DEBUG_CATEGORY,
        label: 'Add Logpoint...',
    };
    DebugCommands.ADD_FUNCTION_BREAKPOINT = {
        id: 'debug.breakpoint.add.function',
        category: DEBUG_CATEGORY,
        label: 'Add Function Breakpoint...',
    };
    DebugCommands.ENABLE_ALL_BREAKPOINTS = {
        id: 'debug.breakpoint.enableAll',
        category: DEBUG_CATEGORY,
        label: 'Enable All Breakpoints',
    };
    DebugCommands.DISABLE_ALL_BREAKPOINTS = {
        id: 'debug.breakpoint.disableAll',
        category: DEBUG_CATEGORY,
        label: 'Disable All Breakpoints',
    };
    DebugCommands.EDIT_BREAKPOINT = {
        id: 'debug.breakpoint.edit',
        category: DEBUG_CATEGORY,
        label: 'Edit Breakpoint...',
    };
    DebugCommands.EDIT_LOGPOINT = {
        id: 'debug.logpoint.edit',
        category: DEBUG_CATEGORY,
        label: 'Edit Logpoint...',
    };
    DebugCommands.REMOVE_BREAKPOINT = {
        id: 'debug.breakpoint.remove',
        category: DEBUG_CATEGORY,
        label: 'Remove Breakpoint',
    };
    DebugCommands.REMOVE_LOGPOINT = {
        id: 'debug.logpoint.remove',
        category: DEBUG_CATEGORY,
        label: 'Remove Logpoint',
    };
    DebugCommands.REMOVE_ALL_BREAKPOINTS = {
        id: 'debug.breakpoint.removeAll',
        category: DEBUG_CATEGORY,
        label: 'Remove All Breakpoints',
    };
    DebugCommands.TOGGLE_BREAKPOINTS_ENABLED = {
        id: 'debug.breakpoint.toggleEnabled'
    };
    DebugCommands.SHOW_HOVER = {
        id: 'editor.debug.action.showDebugHover',
        label: 'Debug: Show Hover'
    };
    DebugCommands.RESTART_FRAME = {
        id: 'debug.frame.restart',
        category: DEBUG_CATEGORY,
        label: 'Restart Frame',
    };
    DebugCommands.COPY_CALL_STACK = {
        id: 'debug.callStack.copy',
        category: DEBUG_CATEGORY,
        label: 'Copy Call Stack',
    };
    DebugCommands.SET_VARIABLE_VALUE = {
        id: 'debug.variable.setValue',
        category: DEBUG_CATEGORY,
        label: 'Set Value',
    };
    DebugCommands.COPY_VARIABLE_VALUE = {
        id: 'debug.variable.copyValue',
        category: DEBUG_CATEGORY,
        label: 'Copy Value',
    };
    DebugCommands.COPY_VARIABLE_AS_EXPRESSION = {
        id: 'debug.variable.copyAsExpression',
        category: DEBUG_CATEGORY,
        label: 'Copy As Expression',
    };
    DebugCommands.WATCH_VARIABLE = {
        id: 'debug.variable.watch',
        category: DEBUG_CATEGORY,
        label: 'Add to Watch',
    };
    DebugCommands.ADD_WATCH_EXPRESSION = {
        id: 'debug.watch.addExpression',
        category: DEBUG_CATEGORY,
        label: 'Add Watch Expression'
    };
    DebugCommands.EDIT_WATCH_EXPRESSION = {
        id: 'debug.watch.editExpression',
        category: DEBUG_CATEGORY,
        label: 'Edit Watch Expression'
    };
    DebugCommands.COPY_WATCH_EXPRESSION_VALUE = {
        id: 'debug.watch.copyExpressionValue',
        category: DEBUG_CATEGORY,
        label: 'Copy Watch Expression Value'
    };
    DebugCommands.REMOVE_WATCH_EXPRESSION = {
        id: 'debug.watch.removeExpression',
        category: DEBUG_CATEGORY,
        label: 'Remove Watch Expression'
    };
    DebugCommands.COLLAPSE_ALL_WATCH_EXPRESSIONS = {
        id: 'debug.watch.collapseAllExpressions',
        category: DEBUG_CATEGORY,
        label: 'Collapse All Watch Expressions'
    };
    DebugCommands.REMOVE_ALL_WATCH_EXPRESSIONS = {
        id: 'debug.watch.removeAllExpressions',
        category: DEBUG_CATEGORY,
        label: 'Remove All Watch Expressions'
    };
})(DebugCommands = exports.DebugCommands || (exports.DebugCommands = {}));
var DebugThreadContextCommands;
(function (DebugThreadContextCommands) {
    DebugThreadContextCommands.STEP_OVER = {
        id: 'debug.thread.context.context.next'
    };
    DebugThreadContextCommands.STEP_INTO = {
        id: 'debug.thread.context.stepin'
    };
    DebugThreadContextCommands.STEP_OUT = {
        id: 'debug.thread.context.stepout'
    };
    DebugThreadContextCommands.CONTINUE = {
        id: 'debug.thread.context.continue'
    };
    DebugThreadContextCommands.PAUSE = {
        id: 'debug.thread.context.pause'
    };
    DebugThreadContextCommands.TERMINATE = {
        id: 'debug.thread.context.terminate'
    };
})(DebugThreadContextCommands = exports.DebugThreadContextCommands || (exports.DebugThreadContextCommands = {}));
var DebugSessionContextCommands;
(function (DebugSessionContextCommands) {
    DebugSessionContextCommands.STOP = {
        id: 'debug.session.context.stop'
    };
    DebugSessionContextCommands.RESTART = {
        id: 'debug.session.context.restart'
    };
    DebugSessionContextCommands.PAUSE_ALL = {
        id: 'debug.session.context.pauseAll'
    };
    DebugSessionContextCommands.CONTINUE_ALL = {
        id: 'debug.session.context.continueAll'
    };
    DebugSessionContextCommands.REVEAL = {
        id: 'debug.session.context.reveal'
    };
    DebugSessionContextCommands.OPEN_LEFT = {
        id: 'debug.session.context.openLeft'
    };
    DebugSessionContextCommands.OPEN_RIGHT = {
        id: 'debug.session.context.openRight'
    };
    DebugSessionContextCommands.OPEN_BOTTOM = {
        id: 'debug.session.context.openBottom'
    };
})(DebugSessionContextCommands = exports.DebugSessionContextCommands || (exports.DebugSessionContextCommands = {}));
var DebugEditorContextCommands;
(function (DebugEditorContextCommands) {
    DebugEditorContextCommands.ADD_BREAKPOINT = {
        id: 'debug.editor.context.addBreakpoint'
    };
    DebugEditorContextCommands.ADD_CONDITIONAL_BREAKPOINT = {
        id: 'debug.editor.context.addBreakpoint.conditional'
    };
    DebugEditorContextCommands.ADD_LOGPOINT = {
        id: 'debug.editor.context.add.logpoint'
    };
    DebugEditorContextCommands.REMOVE_BREAKPOINT = {
        id: 'debug.editor.context.removeBreakpoint'
    };
    DebugEditorContextCommands.EDIT_BREAKPOINT = {
        id: 'debug.editor.context.edit.breakpoint'
    };
    DebugEditorContextCommands.ENABLE_BREAKPOINT = {
        id: 'debug.editor.context.enableBreakpoint'
    };
    DebugEditorContextCommands.DISABLE_BREAKPOINT = {
        id: 'debug.editor.context.disableBreakpoint'
    };
    DebugEditorContextCommands.REMOVE_LOGPOINT = {
        id: 'debug.editor.context.logpoint.remove'
    };
    DebugEditorContextCommands.EDIT_LOGPOINT = {
        id: 'debug.editor.context.logpoint.edit'
    };
    DebugEditorContextCommands.ENABLE_LOGPOINT = {
        id: 'debug.editor.context.logpoint.enable'
    };
    DebugEditorContextCommands.DISABLE_LOGPOINT = {
        id: 'debug.editor.context.logpoint.disable'
    };
})(DebugEditorContextCommands = exports.DebugEditorContextCommands || (exports.DebugEditorContextCommands = {}));
var DebugBreakpointWidgetCommands;
(function (DebugBreakpointWidgetCommands) {
    DebugBreakpointWidgetCommands.ACCEPT = {
        id: 'debug.breakpointWidget.accept'
    };
    DebugBreakpointWidgetCommands.CLOSE = {
        id: 'debug.breakpointWidget.close'
    };
})(DebugBreakpointWidgetCommands = exports.DebugBreakpointWidgetCommands || (exports.DebugBreakpointWidgetCommands = {}));
var darkCss = __webpack_require__(/*! ../../src/browser/style/debug-dark.useable.css */ "./node_modules/@theia/debug/src/browser/style/debug-dark.useable.css");
var lightCss = __webpack_require__(/*! ../../src/browser/style/debug-bright.useable.css */ "./node_modules/@theia/debug/src/browser/style/debug-bright.useable.css");
function updateTheme() {
    var themeType = theming_1.ThemeService.get().getCurrentTheme().type;
    if (themeType === 'dark' || themeType === 'hc') {
        lightCss.unuse();
        darkCss.use();
    }
    else if (themeType === 'light') {
        darkCss.unuse();
        lightCss.use();
    }
}
updateTheme();
theming_1.ThemeService.get().onThemeChange(function () { return updateTheme(); });
var DebugFrontendApplicationContribution = /** @class */ (function (_super) {
    __extends(DebugFrontendApplicationContribution, _super);
    function DebugFrontendApplicationContribution() {
        var _this = _super.call(this, {
            widgetId: debug_widget_1.DebugWidget.ID,
            widgetName: debug_widget_1.DebugWidget.LABEL,
            defaultWidgetOptions: {
                area: 'left',
                rank: 400
            },
            toggleCommandId: 'debug:toggle',
            toggleKeybinding: 'ctrlcmd+shift+d'
        }) || this;
        _this.firstSessionStart = true;
        _this.sessionWidgets = new Map();
        return _this;
    }
    DebugFrontendApplicationContribution.prototype.initializeLayout = function () {
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
    DebugFrontendApplicationContribution.prototype.onStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.manager.onDidCreateDebugSession(function (session) { return _this.openSession(session, { reveal: false }); });
                        this.manager.onDidStartDebugSession(function (session) {
                            var noDebug = session.configuration.noDebug;
                            var openDebug = session.configuration.openDebug || _this.preference['debug.openDebug'];
                            var internalConsoleOptions = session.configuration.internalConsoleOptions || _this.preference['debug.internalConsoleOptions'];
                            if (internalConsoleOptions === 'openOnSessionStart' ||
                                (internalConsoleOptions === 'openOnFirstSessionStart' && _this.firstSessionStart)) {
                                _this.console.openView({
                                    reveal: true
                                });
                            }
                            if (!noDebug && (openDebug === 'openOnSessionStart' || (openDebug === 'openOnFirstSessionStart' && _this.firstSessionStart))) {
                                _this.openSession(session);
                            }
                            _this.firstSessionStart = false;
                        });
                        this.manager.onDidStopDebugSession(function (session) {
                            var openDebug = session.configuration.openDebug;
                            if (openDebug === 'openOnDebugBreak') {
                                _this.openSession(session);
                            }
                        });
                        this.updateStatusBar();
                        this.manager.onDidChange(function () { return _this.updateStatusBar(); });
                        this.schemaUpdater.update();
                        this.configurations.load();
                        return [4 /*yield*/, this.breakpointManager.load()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.watchManager.load()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugFrontendApplicationContribution.prototype.onStop = function () {
        this.configurations.save();
        this.breakpointManager.save();
        this.watchManager.save();
    };
    DebugFrontendApplicationContribution.prototype.registerMenus = function (menus) {
        _super.prototype.registerMenus.call(this, menus);
        var registerMenuActions = function (menuPath) {
            var e_1, _a;
            var commands = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                commands[_i - 1] = arguments[_i];
            }
            try {
                for (var _b = __values(commands.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), index = _d[0], command = _d[1];
                    menus.registerMenuAction(menuPath, {
                        commandId: command.id,
                        label: command.label && command.label.startsWith('Debug: ') && command.label.slice('Debug: '.length) || command.label,
                        icon: command.iconClass,
                        order: String.fromCharCode('a'.charCodeAt(0) + index)
                    });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        menus.registerSubmenu(DebugMenus.DEBUG, 'Debug');
        registerMenuActions(DebugMenus.DEBUG_CONTROLS, DebugCommands.START, DebugCommands.START_NO_DEBUG, DebugCommands.STOP, DebugCommands.RESTART);
        registerMenuActions(DebugMenus.DEBUG_CONFIGURATION, DebugCommands.OPEN_CONFIGURATIONS, DebugCommands.ADD_CONFIGURATION);
        registerMenuActions(DebugMenus.DEBUG_THREADS, DebugCommands.CONTINUE, DebugCommands.STEP_OVER, DebugCommands.STEP_INTO, DebugCommands.STEP_OUT, DebugCommands.PAUSE);
        registerMenuActions(DebugMenus.DEBUG_SESSIONS, DebugCommands.CONTINUE_ALL, DebugCommands.PAUSE_ALL);
        registerMenuActions(DebugMenus.DEBUG_BREAKPOINT, DebugCommands.TOGGLE_BREAKPOINT);
        menus.registerSubmenu(DebugMenus.DEBUG_NEW_BREAKPOINT, 'New Breakpoint');
        registerMenuActions(DebugMenus.DEBUG_NEW_BREAKPOINT, DebugCommands.ADD_CONDITIONAL_BREAKPOINT, DebugCommands.INLINE_BREAKPOINT, DebugCommands.ADD_FUNCTION_BREAKPOINT, DebugCommands.ADD_LOGPOINT);
        registerMenuActions(DebugMenus.DEBUG_BREAKPOINTS, DebugCommands.ENABLE_ALL_BREAKPOINTS, DebugCommands.DISABLE_ALL_BREAKPOINTS, DebugCommands.REMOVE_ALL_BREAKPOINTS);
        registerMenuActions(debug_threads_widget_1.DebugThreadsWidget.CONTROL_MENU, __assign(__assign({}, DebugCommands.PAUSE), DebugThreadContextCommands.PAUSE), __assign(__assign({}, DebugCommands.CONTINUE), DebugThreadContextCommands.CONTINUE), __assign(__assign({}, DebugCommands.STEP_OVER), DebugThreadContextCommands.STEP_OVER), __assign(__assign({}, DebugCommands.STEP_INTO), DebugThreadContextCommands.STEP_INTO), __assign(__assign({}, DebugCommands.STEP_OUT), DebugThreadContextCommands.STEP_OUT), __assign(__assign({}, DebugCommands.PAUSE_ALL), DebugSessionContextCommands.PAUSE_ALL), __assign(__assign({}, DebugCommands.CONTINUE_ALL), DebugSessionContextCommands.CONTINUE_ALL));
        registerMenuActions(debug_threads_widget_1.DebugThreadsWidget.TERMINATE_MENU, __assign(__assign(__assign({}, DebugCommands.RESTART), DebugSessionContextCommands.RESTART), { label: 'Restart' }), __assign(__assign(__assign({}, DebugCommands.STOP), DebugSessionContextCommands.STOP), { label: 'Stop' }), __assign(__assign({}, DebugThreadContextCommands.TERMINATE), { label: 'Terminate Thread' }));
        registerMenuActions(debug_threads_widget_1.DebugThreadsWidget.OPEN_MENU, __assign(__assign({}, DebugSessionContextCommands.REVEAL), { label: 'Reveal' }), __assign(__assign({}, DebugSessionContextCommands.OPEN_LEFT), { label: 'Open Left' }), __assign(__assign({}, DebugSessionContextCommands.OPEN_RIGHT), { label: 'Open Right' }), __assign(__assign({}, DebugSessionContextCommands.OPEN_BOTTOM), { label: 'Open Bottom' }));
        registerMenuActions(debug_stack_frames_widget_1.DebugStackFramesWidget.CONTEXT_MENU, DebugCommands.RESTART_FRAME, DebugCommands.COPY_CALL_STACK);
        registerMenuActions(debug_variables_widget_1.DebugVariablesWidget.EDIT_MENU, DebugCommands.SET_VARIABLE_VALUE, DebugCommands.COPY_VARIABLE_VALUE, DebugCommands.COPY_VARIABLE_AS_EXPRESSION);
        registerMenuActions(debug_variables_widget_1.DebugVariablesWidget.WATCH_MENU, DebugCommands.WATCH_VARIABLE);
        registerMenuActions(debug_watch_widget_1.DebugWatchWidget.EDIT_MENU, __assign(__assign({}, DebugCommands.EDIT_WATCH_EXPRESSION), { label: 'Edit Expression' }), __assign(__assign({}, DebugCommands.COPY_WATCH_EXPRESSION_VALUE), { label: 'Copy Value' }));
        registerMenuActions(debug_watch_widget_1.DebugWatchWidget.REMOVE_MENU, __assign(__assign({}, DebugCommands.REMOVE_WATCH_EXPRESSION), { label: 'Remove Expression' }), __assign(__assign({}, DebugCommands.REMOVE_ALL_WATCH_EXPRESSIONS), { label: 'Remove All Expressions' }));
        registerMenuActions(debug_breakpoints_widget_1.DebugBreakpointsWidget.EDIT_MENU, DebugCommands.EDIT_BREAKPOINT, DebugCommands.EDIT_LOGPOINT);
        registerMenuActions(debug_breakpoints_widget_1.DebugBreakpointsWidget.REMOVE_MENU, DebugCommands.REMOVE_BREAKPOINT, DebugCommands.REMOVE_LOGPOINT, DebugCommands.REMOVE_ALL_BREAKPOINTS);
        registerMenuActions(debug_breakpoints_widget_1.DebugBreakpointsWidget.ENABLE_MENU, DebugCommands.ENABLE_ALL_BREAKPOINTS, DebugCommands.DISABLE_ALL_BREAKPOINTS);
        registerMenuActions(debug_editor_model_1.DebugEditorModel.CONTEXT_MENU, __assign(__assign({}, DebugEditorContextCommands.ADD_BREAKPOINT), { label: 'Add Breakpoint' }), __assign(__assign({}, DebugEditorContextCommands.ADD_CONDITIONAL_BREAKPOINT), { label: DebugCommands.ADD_CONDITIONAL_BREAKPOINT.label }), __assign(__assign({}, DebugEditorContextCommands.ADD_LOGPOINT), { label: DebugCommands.ADD_LOGPOINT.label }), __assign(__assign({}, DebugEditorContextCommands.REMOVE_BREAKPOINT), { label: DebugCommands.REMOVE_BREAKPOINT.label }), __assign(__assign({}, DebugEditorContextCommands.EDIT_BREAKPOINT), { label: DebugCommands.EDIT_BREAKPOINT.label }), __assign(__assign({}, DebugEditorContextCommands.ENABLE_BREAKPOINT), { label: 'Enable Breakpoint' }), __assign(__assign({}, DebugEditorContextCommands.DISABLE_BREAKPOINT), { label: 'Disable Breakpoint' }), __assign(__assign({}, DebugEditorContextCommands.REMOVE_LOGPOINT), { label: DebugCommands.REMOVE_LOGPOINT.label }), __assign(__assign({}, DebugEditorContextCommands.EDIT_LOGPOINT), { label: DebugCommands.EDIT_LOGPOINT.label }), __assign(__assign({}, DebugEditorContextCommands.ENABLE_LOGPOINT), { label: 'Enable Logpoint' }), __assign(__assign({}, DebugEditorContextCommands.DISABLE_LOGPOINT), { label: 'Disable Logpoint' }));
    };
    DebugFrontendApplicationContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        _super.prototype.registerCommands.call(this, registry);
        registry.registerCommand(DebugCommands.START, {
            execute: function (config) { return _this.start(false, config); }
        });
        registry.registerCommand(DebugCommands.START_NO_DEBUG, {
            execute: function (config) { return _this.start(true, config); }
        });
        registry.registerCommand(DebugCommands.STOP, {
            execute: function () { return _this.manager.currentSession && _this.manager.currentSession.terminate(); },
            isEnabled: function () { return _this.manager.state !== debug_session_1.DebugState.Inactive; }
        });
        registry.registerCommand(DebugCommands.RESTART, {
            execute: function () { return _this.manager.restart(); },
            isEnabled: function () { return _this.manager.state !== debug_session_1.DebugState.Inactive; }
        });
        registry.registerCommand(DebugCommands.OPEN_CONFIGURATIONS, {
            execute: function () { return _this.configurations.openConfiguration(); }
        });
        registry.registerCommand(DebugCommands.ADD_CONFIGURATION, {
            execute: function () { return _this.configurations.addConfiguration(); }
        });
        registry.registerCommand(DebugCommands.STEP_OVER, {
            execute: function () { return _this.manager.currentThread && _this.manager.currentThread.stepOver(); },
            isEnabled: function () { return _this.manager.state === debug_session_1.DebugState.Stopped; }
        });
        registry.registerCommand(DebugCommands.STEP_INTO, {
            execute: function () { return _this.manager.currentThread && _this.manager.currentThread.stepIn(); },
            isEnabled: function () { return _this.manager.state === debug_session_1.DebugState.Stopped; }
        });
        registry.registerCommand(DebugCommands.STEP_OUT, {
            execute: function () { return _this.manager.currentThread && _this.manager.currentThread.stepOut(); },
            isEnabled: function () { return _this.manager.state === debug_session_1.DebugState.Stopped; }
        });
        registry.registerCommand(DebugCommands.CONTINUE, {
            execute: function () { return _this.manager.currentThread && _this.manager.currentThread.continue(); },
            isEnabled: function () { return _this.manager.state === debug_session_1.DebugState.Stopped; }
        });
        registry.registerCommand(DebugCommands.PAUSE, {
            execute: function () { return _this.manager.currentThread && _this.manager.currentThread.pause(); },
            isEnabled: function () { return _this.manager.state === debug_session_1.DebugState.Running; }
        });
        registry.registerCommand(DebugCommands.PAUSE_ALL, {
            execute: function () { return _this.manager.currentSession && _this.manager.currentSession.pauseAll(); },
            isEnabled: function () { return !!_this.manager.currentSession && !!_this.manager.currentSession.runningThreads.next().value; }
        });
        registry.registerCommand(DebugCommands.CONTINUE_ALL, {
            execute: function () { return _this.manager.currentSession && _this.manager.currentSession.continueAll(); },
            isEnabled: function () { return !!_this.manager.currentSession && !!_this.manager.currentSession.stoppedThreads.next().value; }
        });
        registry.registerCommand(DebugThreadContextCommands.STEP_OVER, {
            execute: function () { return _this.selectedThread && _this.selectedThread.stepOver(); },
            isEnabled: function () { return !!_this.selectedThread && _this.selectedThread.stopped; },
            isVisible: function () { return !!_this.selectedThread; }
        });
        registry.registerCommand(DebugThreadContextCommands.STEP_INTO, {
            execute: function () { return _this.selectedThread && _this.selectedThread.stepIn(); },
            isEnabled: function () { return !!_this.selectedThread && _this.selectedThread.stopped; },
            isVisible: function () { return !!_this.selectedThread; }
        });
        registry.registerCommand(DebugThreadContextCommands.STEP_OUT, {
            execute: function () { return _this.selectedThread && _this.selectedThread.stepOut(); },
            isEnabled: function () { return !!_this.selectedThread && _this.selectedThread.stopped; },
            isVisible: function () { return !!_this.selectedThread; }
        });
        registry.registerCommand(DebugThreadContextCommands.CONTINUE, {
            execute: function () { return _this.selectedThread && _this.selectedThread.continue(); },
            isEnabled: function () { return !!_this.selectedThread && _this.selectedThread.stopped; },
            isVisible: function () { return !!_this.selectedThread && _this.selectedThread.stopped; },
        });
        registry.registerCommand(DebugThreadContextCommands.PAUSE, {
            execute: function () { return _this.selectedThread && _this.selectedThread.pause(); },
            isEnabled: function () { return !!_this.selectedThread && !_this.selectedThread.stopped; },
            isVisible: function () { return !!_this.selectedThread && !_this.selectedThread.stopped; },
        });
        registry.registerCommand(DebugThreadContextCommands.TERMINATE, {
            execute: function () { return _this.selectedThread && _this.selectedThread.terminate(); },
            isEnabled: function () { return !!_this.selectedThread && _this.selectedThread.supportsTerminate; },
            isVisible: function () { return !!_this.selectedThread && _this.selectedThread.supportsTerminate; }
        });
        registry.registerCommand(DebugSessionContextCommands.STOP, {
            execute: function () { return _this.selectedSession && _this.selectedSession.terminate(); },
            isEnabled: function () { return !!_this.selectedSession && _this.selectedSession.state !== debug_session_1.DebugState.Inactive; },
            isVisible: function () { return !_this.selectedThread; }
        });
        registry.registerCommand(DebugSessionContextCommands.RESTART, {
            execute: function () { return _this.selectedSession && _this.manager.restart(_this.selectedSession); },
            isEnabled: function () { return !!_this.selectedSession && _this.selectedSession.state !== debug_session_1.DebugState.Inactive; },
            isVisible: function () { return !_this.selectedThread; }
        });
        registry.registerCommand(DebugSessionContextCommands.CONTINUE_ALL, {
            execute: function () { return _this.selectedSession && _this.selectedSession.continueAll(); },
            isEnabled: function () { return !!_this.selectedSession && !!_this.selectedSession.stoppedThreads.next().value; },
            isVisible: function () { return !_this.selectedThread; }
        });
        registry.registerCommand(DebugSessionContextCommands.PAUSE_ALL, {
            execute: function () { return _this.selectedSession && _this.selectedSession.pauseAll(); },
            isEnabled: function () { return !!_this.selectedSession && !!_this.selectedSession.runningThreads.next().value; },
            isVisible: function () { return !_this.selectedThread; }
        });
        registry.registerCommand(DebugSessionContextCommands.REVEAL, {
            execute: function () { return _this.selectedSession && _this.revealSession(_this.selectedSession); },
            isEnabled: function () { return _this.hasSessionWidget; },
            isVisible: function () { return !_this.selectedThread && _this.hasSessionWidget; }
        });
        registry.registerCommand(DebugSessionContextCommands.OPEN_LEFT, {
            execute: function () { return _this.selectedSession && _this.openSession(_this.selectedSession, {
                debugViewLocation: 'left'
            }); },
            isEnabled: function () { return !_this.hasSessionWidget; },
            isVisible: function () { return !_this.selectedThread && !_this.hasSessionWidget; }
        });
        registry.registerCommand(DebugSessionContextCommands.OPEN_RIGHT, {
            execute: function () { return _this.selectedSession && _this.openSession(_this.selectedSession, {
                debugViewLocation: 'right'
            }); },
            isEnabled: function () { return !_this.hasSessionWidget; },
            isVisible: function () { return !_this.selectedThread && !_this.hasSessionWidget; }
        });
        registry.registerCommand(DebugSessionContextCommands.OPEN_BOTTOM, {
            execute: function () { return _this.selectedSession && _this.openSession(_this.selectedSession, {
                debugViewLocation: 'bottom'
            }); },
            isEnabled: function () { return !_this.hasSessionWidget; },
            isVisible: function () { return !_this.selectedThread && !_this.hasSessionWidget; }
        });
        registry.registerCommand(DebugCommands.TOGGLE_BREAKPOINT, {
            execute: function () { return _this.editors.toggleBreakpoint(); },
            isEnabled: function () { return !!_this.editors.model; }
        });
        registry.registerCommand(DebugCommands.INLINE_BREAKPOINT, {
            execute: function () { return _this.editors.addInlineBreakpoint(); },
            isEnabled: function () { return !!_this.editors.model && !_this.editors.getInlineBreakpoint(); }
        });
        registry.registerCommand(DebugCommands.ADD_CONDITIONAL_BREAKPOINT, {
            execute: function () { return _this.editors.addBreakpoint('condition'); },
            isEnabled: function () { return !!_this.editors.model && !_this.editors.anyBreakpoint(); }
        });
        registry.registerCommand(DebugCommands.ADD_LOGPOINT, {
            execute: function () { return _this.editors.addBreakpoint('logMessage'); },
            isEnabled: function () { return !!_this.editors.model && !_this.editors.anyBreakpoint(); }
        });
        registry.registerCommand(DebugCommands.ADD_FUNCTION_BREAKPOINT, {
            execute: function () { return __awaiter(_this, void 0, void 0, function () {
                var _a, labelProvider, breakpointManager, editorManager, options;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this, labelProvider = _a.labelProvider, breakpointManager = _a.breakpointManager, editorManager = _a.editorManager;
                            options = { labelProvider: labelProvider, breakpoints: breakpointManager, editorManager: editorManager };
                            return [4 /*yield*/, new debug_function_breakpoint_1.DebugFunctionBreakpoint(breakpoint_marker_1.FunctionBreakpoint.create({ name: '' }), options).open()];
                        case 1:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            }); },
            isEnabled: function (widget) { return !(widget instanceof browser_1.Widget) || widget instanceof debug_breakpoints_widget_1.DebugBreakpointsWidget; },
            isVisible: function (widget) { return !(widget instanceof browser_1.Widget) || widget instanceof debug_breakpoints_widget_1.DebugBreakpointsWidget; }
        });
        registry.registerCommand(DebugCommands.ENABLE_ALL_BREAKPOINTS, {
            execute: function () { return _this.breakpointManager.enableAllBreakpoints(true); },
            isEnabled: function () { return _this.breakpointManager.hasBreakpoints(); }
        });
        registry.registerCommand(DebugCommands.DISABLE_ALL_BREAKPOINTS, {
            execute: function () { return _this.breakpointManager.enableAllBreakpoints(false); },
            isEnabled: function () { return _this.breakpointManager.hasBreakpoints(); }
        });
        registry.registerCommand(DebugCommands.EDIT_BREAKPOINT, {
            execute: function () { return __awaiter(_this, void 0, void 0, function () {
                var _a, selectedBreakpoint, selectedFunctionBreakpoint;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this, selectedBreakpoint = _a.selectedBreakpoint, selectedFunctionBreakpoint = _a.selectedFunctionBreakpoint;
                            if (!selectedBreakpoint) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.editors.editBreakpoint(selectedBreakpoint)];
                        case 1:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            if (!selectedFunctionBreakpoint) return [3 /*break*/, 4];
                            return [4 /*yield*/, selectedFunctionBreakpoint.open()];
                        case 3:
                            _b.sent();
                            _b.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            }); },
            isEnabled: function () { return !!_this.selectedBreakpoint || !!_this.selectedFunctionBreakpoint; },
            isVisible: function () { return !!_this.selectedBreakpoint || !!_this.selectedFunctionBreakpoint; }
        });
        registry.registerCommand(DebugCommands.EDIT_LOGPOINT, {
            execute: function () { return __awaiter(_this, void 0, void 0, function () {
                var selectedLogpoint;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            selectedLogpoint = this.selectedLogpoint;
                            if (!selectedLogpoint) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.editors.editBreakpoint(selectedLogpoint)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); },
            isEnabled: function () { return !!_this.selectedLogpoint; },
            isVisible: function () { return !!_this.selectedLogpoint; }
        });
        registry.registerCommand(DebugCommands.REMOVE_BREAKPOINT, {
            execute: function () {
                var selectedBreakpoint = _this.selectedBreakpoint || _this.selectedFunctionBreakpoint;
                if (selectedBreakpoint) {
                    selectedBreakpoint.remove();
                }
            },
            isEnabled: function () { return !!_this.selectedBreakpoint || !!_this.selectedFunctionBreakpoint; },
            isVisible: function () { return !!_this.selectedBreakpoint || !!_this.selectedFunctionBreakpoint; },
        });
        registry.registerCommand(DebugCommands.REMOVE_LOGPOINT, {
            execute: function () {
                var selectedLogpoint = _this.selectedLogpoint;
                if (selectedLogpoint) {
                    selectedLogpoint.remove();
                }
            },
            isEnabled: function () { return !!_this.selectedLogpoint; },
            isVisible: function () { return !!_this.selectedLogpoint; }
        });
        registry.registerCommand(DebugCommands.REMOVE_ALL_BREAKPOINTS, {
            execute: function () { return _this.breakpointManager.removeBreakpoints(); },
            isEnabled: function () { return _this.breakpointManager.hasBreakpoints(); },
            isVisible: function (widget) { return !(widget instanceof browser_1.Widget) || (widget instanceof debug_breakpoints_widget_1.DebugBreakpointsWidget); }
        });
        registry.registerCommand(DebugCommands.TOGGLE_BREAKPOINTS_ENABLED, {
            execute: function () { return _this.breakpointManager.breakpointsEnabled = !_this.breakpointManager.breakpointsEnabled; },
            isVisible: function (arg) { return arg instanceof debug_breakpoints_widget_1.DebugBreakpointsWidget; }
        });
        registry.registerCommand(DebugCommands.SHOW_HOVER, {
            execute: function () { return _this.editors.showHover(); },
            isEnabled: function () { return _this.editors.canShowHover(); }
        });
        registry.registerCommand(DebugCommands.RESTART_FRAME, {
            execute: function () { return _this.selectedFrame && _this.selectedFrame.restart(); },
            isEnabled: function () { return !!_this.selectedFrame; }
        });
        registry.registerCommand(DebugCommands.COPY_CALL_STACK, {
            execute: function () {
                var frames = _this.frames;
                var selection = document.getSelection();
                if (frames && selection) {
                    selection.selectAllChildren(frames.node);
                    document.execCommand('copy');
                }
            },
            isEnabled: function () { return document.queryCommandSupported('copy'); },
            isVisible: function () { return document.queryCommandSupported('copy'); }
        });
        registry.registerCommand(DebugCommands.SET_VARIABLE_VALUE, {
            execute: function () { return _this.selectedVariable && _this.selectedVariable.open(); },
            isEnabled: function () { return !!_this.selectedVariable && _this.selectedVariable.supportSetVariable; },
            isVisible: function () { return !!_this.selectedVariable && _this.selectedVariable.supportSetVariable; }
        });
        registry.registerCommand(DebugCommands.COPY_VARIABLE_VALUE, {
            execute: function () { return _this.selectedVariable && _this.selectedVariable.copyValue(); },
            isEnabled: function () { return !!_this.selectedVariable && _this.selectedVariable.supportCopyValue; },
            isVisible: function () { return !!_this.selectedVariable && _this.selectedVariable.supportCopyValue; }
        });
        registry.registerCommand(DebugCommands.COPY_VARIABLE_AS_EXPRESSION, {
            execute: function () { return _this.selectedVariable && _this.selectedVariable.copyAsExpression(); },
            isEnabled: function () { return !!_this.selectedVariable && _this.selectedVariable.supportCopyAsExpression; },
            isVisible: function () { return !!_this.selectedVariable && _this.selectedVariable.supportCopyAsExpression; }
        });
        registry.registerCommand(DebugCommands.WATCH_VARIABLE, {
            execute: function () {
                var _a = _this, selectedVariable = _a.selectedVariable, watch = _a.watch;
                if (selectedVariable && watch) {
                    watch.viewModel.addWatchExpression(selectedVariable.name);
                }
            },
            isEnabled: function () { return !!_this.selectedVariable && !!_this.watch; },
            isVisible: function () { return !!_this.selectedVariable && !!_this.watch; },
        });
        // Debug context menu commands
        registry.registerCommand(DebugEditorContextCommands.ADD_BREAKPOINT, {
            execute: function (position) { return _this.isPosition(position) && _this.editors.toggleBreakpoint(position); },
            isEnabled: function (position) { return _this.isPosition(position) && !_this.editors.anyBreakpoint(position); },
            isVisible: function (position) { return _this.isPosition(position) && !_this.editors.anyBreakpoint(position); }
        });
        registry.registerCommand(DebugEditorContextCommands.ADD_CONDITIONAL_BREAKPOINT, {
            execute: function (position) { return _this.isPosition(position) && _this.editors.addBreakpoint('condition', position); },
            isEnabled: function (position) { return _this.isPosition(position) && !_this.editors.anyBreakpoint(position); },
            isVisible: function (position) { return _this.isPosition(position) && !_this.editors.anyBreakpoint(position); }
        });
        registry.registerCommand(DebugEditorContextCommands.ADD_LOGPOINT, {
            execute: function (position) { return _this.isPosition(position) && _this.editors.addBreakpoint('logMessage', position); },
            isEnabled: function (position) { return _this.isPosition(position) && !_this.editors.anyBreakpoint(position); },
            isVisible: function (position) { return _this.isPosition(position) && !_this.editors.anyBreakpoint(position); }
        });
        registry.registerCommand(DebugEditorContextCommands.REMOVE_BREAKPOINT, {
            execute: function (position) { return _this.isPosition(position) && _this.editors.toggleBreakpoint(position); },
            isEnabled: function (position) { return _this.isPosition(position) && !!_this.editors.getBreakpoint(position); },
            isVisible: function (position) { return _this.isPosition(position) && !!_this.editors.getBreakpoint(position); }
        });
        registry.registerCommand(DebugEditorContextCommands.EDIT_BREAKPOINT, {
            execute: function (position) { return _this.isPosition(position) && _this.editors.editBreakpoint(position); },
            isEnabled: function (position) { return _this.isPosition(position) && !!_this.editors.getBreakpoint(position); },
            isVisible: function (position) { return _this.isPosition(position) && !!_this.editors.getBreakpoint(position); }
        });
        registry.registerCommand(DebugEditorContextCommands.ENABLE_BREAKPOINT, {
            execute: function (position) { return _this.isPosition(position) && _this.editors.setBreakpointEnabled(position, true); },
            isEnabled: function (position) { return _this.isPosition(position) && _this.editors.getBreakpointEnabled(position) === false; },
            isVisible: function (position) { return _this.isPosition(position) && _this.editors.getBreakpointEnabled(position) === false; }
        });
        registry.registerCommand(DebugEditorContextCommands.DISABLE_BREAKPOINT, {
            execute: function (position) { return _this.isPosition(position) && _this.editors.setBreakpointEnabled(position, false); },
            isEnabled: function (position) { return _this.isPosition(position) && !!_this.editors.getBreakpointEnabled(position); },
            isVisible: function (position) { return _this.isPosition(position) && !!_this.editors.getBreakpointEnabled(position); }
        });
        registry.registerCommand(DebugEditorContextCommands.REMOVE_LOGPOINT, {
            execute: function (position) { return _this.isPosition(position) && _this.editors.toggleBreakpoint(position); },
            isEnabled: function (position) { return _this.isPosition(position) && !!_this.editors.getLogpoint(position); },
            isVisible: function (position) { return _this.isPosition(position) && !!_this.editors.getLogpoint(position); }
        });
        registry.registerCommand(DebugEditorContextCommands.EDIT_LOGPOINT, {
            execute: function (position) { return _this.isPosition(position) && _this.editors.editBreakpoint(position); },
            isEnabled: function (position) { return _this.isPosition(position) && !!_this.editors.getLogpoint(position); },
            isVisible: function (position) { return _this.isPosition(position) && !!_this.editors.getLogpoint(position); }
        });
        registry.registerCommand(DebugEditorContextCommands.ENABLE_LOGPOINT, {
            execute: function (position) { return _this.isPosition(position) && _this.editors.setBreakpointEnabled(position, true); },
            isEnabled: function (position) { return _this.isPosition(position) && _this.editors.getLogpointEnabled(position) === false; },
            isVisible: function (position) { return _this.isPosition(position) && _this.editors.getLogpointEnabled(position) === false; }
        });
        registry.registerCommand(DebugEditorContextCommands.DISABLE_LOGPOINT, {
            execute: function (position) { return _this.isPosition(position) && _this.editors.setBreakpointEnabled(position, false); },
            isEnabled: function (position) { return _this.isPosition(position) && !!_this.editors.getLogpointEnabled(position); },
            isVisible: function (position) { return _this.isPosition(position) && !!_this.editors.getLogpointEnabled(position); }
        });
        registry.registerCommand(DebugBreakpointWidgetCommands.ACCEPT, {
            execute: function () { return _this.editors.acceptBreakpoint(); }
        });
        registry.registerCommand(DebugBreakpointWidgetCommands.CLOSE, {
            execute: function () { return _this.editors.closeBreakpoint(); }
        });
        registry.registerCommand(DebugCommands.ADD_WATCH_EXPRESSION, {
            execute: function (widget) {
                if (widget instanceof browser_1.Widget) {
                    if (widget instanceof debug_watch_widget_1.DebugWatchWidget) {
                        widget.viewModel.addWatchExpression();
                    }
                }
                else if (_this.watch) {
                    _this.watch.viewModel.addWatchExpression();
                }
            },
            isEnabled: function (widget) { return widget instanceof browser_1.Widget ? widget instanceof debug_watch_widget_1.DebugWatchWidget : !!_this.watch; },
            isVisible: function (widget) { return widget instanceof browser_1.Widget ? widget instanceof debug_watch_widget_1.DebugWatchWidget : !!_this.watch; }
        });
        registry.registerCommand(DebugCommands.EDIT_WATCH_EXPRESSION, {
            execute: function () {
                var watchExpression = _this.watchExpression;
                if (watchExpression) {
                    watchExpression.open();
                }
            },
            isEnabled: function () { return !!_this.watchExpression; },
            isVisible: function () { return !!_this.watchExpression; }
        });
        registry.registerCommand(DebugCommands.COPY_WATCH_EXPRESSION_VALUE, {
            execute: function () { return _this.watchExpression && _this.watchExpression.copyValue(); },
            isEnabled: function () { return !!_this.watchExpression && _this.watchExpression.supportCopyValue; },
            isVisible: function () { return !!_this.watchExpression && _this.watchExpression.supportCopyValue; }
        });
        registry.registerCommand(DebugCommands.COLLAPSE_ALL_WATCH_EXPRESSIONS, {
            execute: function (widget) {
                if (widget instanceof debug_watch_widget_1.DebugWatchWidget) {
                    var root = widget.model.root;
                    widget.model.collapseAll(browser_1.CompositeTreeNode.is(root) ? root : undefined);
                }
            },
            isEnabled: function (widget) { return widget instanceof debug_watch_widget_1.DebugWatchWidget; },
            isVisible: function (widget) { return widget instanceof debug_watch_widget_1.DebugWatchWidget; }
        });
        registry.registerCommand(DebugCommands.REMOVE_WATCH_EXPRESSION, {
            execute: function () {
                var _a = _this, watch = _a.watch, watchExpression = _a.watchExpression;
                if (watch && watchExpression) {
                    watch.viewModel.removeWatchExpression(watchExpression);
                }
            },
            isEnabled: function () { return !!_this.watchExpression; },
            isVisible: function () { return !!_this.watchExpression; }
        });
        registry.registerCommand(DebugCommands.REMOVE_ALL_WATCH_EXPRESSIONS, {
            execute: function (widget) {
                if (widget instanceof browser_1.Widget) {
                    if (widget instanceof debug_watch_widget_1.DebugWatchWidget) {
                        widget.viewModel.removeWatchExpressions();
                    }
                }
                else if (_this.watch) {
                    _this.watch.viewModel.removeWatchExpressions();
                }
            },
            isEnabled: function (widget) { return widget instanceof browser_1.Widget ? widget instanceof debug_watch_widget_1.DebugWatchWidget : !!_this.watch; },
            isVisible: function (widget) { return widget instanceof browser_1.Widget ? widget instanceof debug_watch_widget_1.DebugWatchWidget : !!_this.watch; }
        });
    };
    DebugFrontendApplicationContribution.prototype.registerKeybindings = function (keybindings) {
        _super.prototype.registerKeybindings.call(this, keybindings);
        keybindings.registerKeybinding({
            command: DebugCommands.START.id,
            keybinding: 'f5'
        });
        keybindings.registerKeybinding({
            command: DebugCommands.START_NO_DEBUG.id,
            keybinding: 'ctrl+f5'
        });
        keybindings.registerKeybinding({
            command: DebugCommands.STOP.id,
            keybinding: 'shift+f5',
            context: debug_keybinding_contexts_1.DebugKeybindingContexts.inDebugMode
        });
        keybindings.registerKeybinding({
            command: DebugCommands.RESTART.id,
            keybinding: 'shift+ctrlcmd+f5',
            context: debug_keybinding_contexts_1.DebugKeybindingContexts.inDebugMode
        });
        keybindings.registerKeybinding({
            command: DebugCommands.STEP_OVER.id,
            keybinding: 'f10',
            context: debug_keybinding_contexts_1.DebugKeybindingContexts.inDebugMode
        });
        keybindings.registerKeybinding({
            command: DebugCommands.STEP_INTO.id,
            keybinding: 'f11',
            context: debug_keybinding_contexts_1.DebugKeybindingContexts.inDebugMode
        });
        keybindings.registerKeybinding({
            command: DebugCommands.STEP_OUT.id,
            keybinding: 'shift+f11',
            context: debug_keybinding_contexts_1.DebugKeybindingContexts.inDebugMode
        });
        keybindings.registerKeybinding({
            command: DebugCommands.CONTINUE.id,
            keybinding: 'f5',
            context: debug_keybinding_contexts_1.DebugKeybindingContexts.inDebugMode
        });
        keybindings.registerKeybinding({
            command: DebugCommands.PAUSE.id,
            keybinding: 'f6',
            context: debug_keybinding_contexts_1.DebugKeybindingContexts.inDebugMode
        });
        keybindings.registerKeybinding({
            command: DebugCommands.TOGGLE_BREAKPOINT.id,
            keybinding: 'f9',
            context: browser_2.EditorKeybindingContexts.editorTextFocus
        });
        keybindings.registerKeybinding({
            command: DebugCommands.INLINE_BREAKPOINT.id,
            keybinding: 'shift+f9',
            context: browser_2.EditorKeybindingContexts.editorTextFocus
        });
        keybindings.registerKeybinding({
            command: DebugBreakpointWidgetCommands.ACCEPT.id,
            keybinding: 'enter',
            context: debug_keybinding_contexts_1.DebugKeybindingContexts.breakpointWidgetInputFocus
        });
        keybindings.registerKeybinding({
            command: DebugBreakpointWidgetCommands.CLOSE.id,
            keybinding: 'esc',
            context: debug_keybinding_contexts_1.DebugKeybindingContexts.breakpointWidgetInputStrictFocus
        });
    };
    DebugFrontendApplicationContribution.prototype.registerToolbarItems = function (toolbar) {
        var _this = this;
        var onDidChangeToggleBreakpointsEnabled = new common_1.Emitter();
        var toggleBreakpointsEnabled = {
            id: DebugCommands.TOGGLE_BREAKPOINTS_ENABLED.id,
            command: DebugCommands.TOGGLE_BREAKPOINTS_ENABLED.id,
            icon: 'fa breakpoints-activate',
            onDidChange: onDidChangeToggleBreakpointsEnabled.event,
            priority: 1
        };
        var updateToggleBreakpointsEnabled = function () {
            var tooltip = _this.breakpointManager.breakpointsEnabled ? 'Deactivate Breakpoints' : 'Activate Breakpoints';
            if (toggleBreakpointsEnabled.tooltip !== tooltip) {
                toggleBreakpointsEnabled.tooltip = tooltip;
                onDidChangeToggleBreakpointsEnabled.fire(undefined);
            }
        };
        toolbar.registerItem({
            id: DebugCommands.ADD_FUNCTION_BREAKPOINT.id,
            command: DebugCommands.ADD_FUNCTION_BREAKPOINT.id,
            icon: 'theia-add-icon',
            tooltip: 'Add Function Breakpoint'
        });
        updateToggleBreakpointsEnabled();
        this.breakpointManager.onDidChangeBreakpoints(updateToggleBreakpointsEnabled);
        toolbar.registerItem(toggleBreakpointsEnabled);
        toolbar.registerItem({
            id: DebugCommands.REMOVE_ALL_BREAKPOINTS.id,
            command: DebugCommands.REMOVE_ALL_BREAKPOINTS.id,
            icon: 'theia-remove-all-icon',
            priority: 2
        });
        toolbar.registerItem({
            id: DebugCommands.ADD_WATCH_EXPRESSION.id,
            command: DebugCommands.ADD_WATCH_EXPRESSION.id,
            icon: 'theia-add-icon',
            tooltip: 'Add Expression'
        });
        toolbar.registerItem({
            id: DebugCommands.COLLAPSE_ALL_WATCH_EXPRESSIONS.id,
            command: DebugCommands.COLLAPSE_ALL_WATCH_EXPRESSIONS.id,
            icon: 'theia-collapse-all-icon',
            tooltip: 'Collapse All',
            priority: 1
        });
        toolbar.registerItem({
            id: DebugCommands.REMOVE_ALL_WATCH_EXPRESSIONS.id,
            command: DebugCommands.REMOVE_ALL_WATCH_EXPRESSIONS.id,
            icon: 'theia-remove-all-icon',
            tooltip: 'Remove All Expressions',
            priority: 2
        });
    };
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "hasSessionWidget", {
        get: function () {
            return !!this.selectedSession && this.sessionWidgets.has(this.selectedSession.label);
        },
        enumerable: false,
        configurable: true
    });
    DebugFrontendApplicationContribution.prototype.openSession = function (session, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, debugViewLocation, reveal, sessionWidget, area, newSessionWidget;
            var _this = this;
            return __generator(this, function (_b) {
                _a = __assign({ debugViewLocation: session.configuration.debugViewLocation || this.preference['debug.debugViewLocation'], reveal: true }, options), debugViewLocation = _a.debugViewLocation, reveal = _a.reveal;
                sessionWidget = this.revealSession(session);
                if (sessionWidget) {
                    return [2 /*return*/, sessionWidget];
                }
                area = browser_1.ApplicationShell.isSideArea(debugViewLocation) ? debugViewLocation : 'debug';
                if (area === 'debug') {
                    return [2 /*return*/, this.openView({ reveal: reveal })];
                }
                newSessionWidget = this.sessionWidgetFactory({ session: session });
                this.sessionWidgets.set(session.label, newSessionWidget);
                newSessionWidget.disposed.connect(function () {
                    return _this.sessionWidgets.delete(session.label);
                });
                this.shell.addWidget(newSessionWidget, { area: area });
                if (reveal) {
                    this.shell.revealWidget(newSessionWidget.id);
                }
                return [2 /*return*/, newSessionWidget];
            });
        });
    };
    DebugFrontendApplicationContribution.prototype.revealSession = function (session) {
        var widget = this.sessionWidgets.get(session.label);
        if (widget) {
            this.shell.revealWidget(widget.id);
        }
        return widget;
    };
    DebugFrontendApplicationContribution.prototype.start = function (noDebug, debugSessionOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var current;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        current = debugSessionOptions ? debugSessionOptions : this.configurations.current;
                        if (!!current) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.configurations.addConfiguration()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        if (!current) return [3 /*break*/, 4];
                        if (noDebug !== undefined) {
                            current = __assign(__assign({}, current), { configuration: __assign(__assign({}, current.configuration), { noDebug: noDebug }) });
                        }
                        return [4 /*yield*/, this.manager.start(current)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "threads", {
        get: function () {
            var currentWidget = this.shell.currentWidget;
            return currentWidget instanceof debug_threads_widget_1.DebugThreadsWidget && currentWidget || undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "selectedSession", {
        get: function () {
            var threads = this.threads;
            return threads && threads.selectedElement instanceof debug_session_1.DebugSession && threads.selectedElement || undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "selectedThread", {
        get: function () {
            var threads = this.threads;
            return threads && threads.selectedElement instanceof debug_thread_1.DebugThread && threads.selectedElement || undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "frames", {
        get: function () {
            var currentWidget = this.shell.currentWidget;
            return currentWidget instanceof debug_stack_frames_widget_1.DebugStackFramesWidget && currentWidget || undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "selectedFrame", {
        get: function () {
            var frames = this.frames;
            return frames && frames.selectedElement instanceof debug_stack_frame_1.DebugStackFrame && frames.selectedElement || undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "breakpoints", {
        get: function () {
            var currentWidget = this.shell.currentWidget;
            return currentWidget instanceof debug_breakpoints_widget_1.DebugBreakpointsWidget && currentWidget || undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "selectedAnyBreakpoint", {
        get: function () {
            var breakpoints = this.breakpoints;
            var selectedElement = breakpoints && breakpoints.selectedElement;
            return selectedElement instanceof debug_breakpoint_1.DebugBreakpoint ? selectedElement : undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "selectedBreakpoint", {
        get: function () {
            var breakpoint = this.selectedAnyBreakpoint;
            return breakpoint && breakpoint instanceof debug_source_breakpoint_1.DebugSourceBreakpoint && !breakpoint.logMessage ? breakpoint : undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "selectedLogpoint", {
        get: function () {
            var breakpoint = this.selectedAnyBreakpoint;
            return breakpoint && breakpoint instanceof debug_source_breakpoint_1.DebugSourceBreakpoint && !!breakpoint.logMessage ? breakpoint : undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "selectedFunctionBreakpoint", {
        get: function () {
            var breakpoint = this.selectedAnyBreakpoint;
            return breakpoint && breakpoint instanceof debug_function_breakpoint_1.DebugFunctionBreakpoint ? breakpoint : undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "variables", {
        get: function () {
            var currentWidget = this.shell.currentWidget;
            return currentWidget instanceof debug_variables_widget_1.DebugVariablesWidget && currentWidget || undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "selectedVariable", {
        get: function () {
            var variables = this.variables;
            return variables && variables.selectedElement instanceof debug_console_items_1.DebugVariable && variables.selectedElement || undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "watch", {
        get: function () {
            var currentWidget = this.shell.currentWidget;
            return currentWidget instanceof debug_watch_widget_1.DebugWatchWidget && currentWidget || undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "watchExpression", {
        get: function () {
            var watch = this.watch;
            return watch && watch.selectedElement instanceof debug_watch_expression_1.DebugWatchExpression && watch.selectedElement || undefined;
        },
        enumerable: false,
        configurable: true
    });
    DebugFrontendApplicationContribution.prototype.isPosition = function (position) {
        return (position instanceof monaco.Position);
    };
    DebugFrontendApplicationContribution.prototype.registerColors = function (colors) {
        colors.register(
        // Debug colors should be aligned with https://code.visualstudio.com/api/references/theme-color#debug
        {
            id: 'editor.stackFrameHighlightBackground',
            defaults: { dark: '#ffff0033', light: '#ffff6673', hc: '#fff600' },
            description: 'Background color for the highlight of line at the top stack frame position.'
        }, {
            id: 'editor.focusedStackFrameHighlightBackground',
            defaults: { dark: '#7abd7a4d', light: '#cee7ce73', hc: '#cee7ce' },
            description: 'Background color for the highlight of line at focused stack frame position.'
        }, 
        // Status bar colors should be aligned with debugging colors from https://code.visualstudio.com/api/references/theme-color#status-bar-colors
        {
            id: 'statusBar.debuggingBackground', defaults: {
                dark: '#CC6633',
                light: '#CC6633',
                hc: '#CC6633'
            }, description: 'Status bar background color when a program is being debugged. The status bar is shown in the bottom of the window'
        }, {
            id: 'statusBar.debuggingForeground', defaults: {
                dark: 'statusBar.foreground',
                light: 'statusBar.foreground',
                hc: 'statusBar.foreground'
            }, description: 'Status bar foreground color when a program is being debugged. The status bar is shown in the bottom of the window'
        }, {
            id: 'statusBar.debuggingBorder', defaults: {
                dark: 'statusBar.border',
                light: 'statusBar.border',
                hc: 'statusBar.border'
            }, description: 'Status bar border color separating to the sidebar and editor when a program is being debugged. The status bar is shown in the bottom of the window'
        }, 
        // Debug Exception Widget colors should be aligned with
        // https://github.com/microsoft/vscode/blob/ff5f581425da6230b6f9216ecf19abf6c9d285a6/src/vs/workbench/contrib/debug/browser/exceptionWidget.ts#L23
        {
            id: 'debugExceptionWidget.border', defaults: {
                dark: '#a31515', light: '#a31515', hc: '#a31515'
            }, description: 'Exception widget border color.',
        }, {
            id: 'debugExceptionWidget.background', defaults: {
                dark: '#420b0d', light: '#f1dfde', hc: '#420b0d'
            }, description: 'Exception widget background color.'
        });
    };
    DebugFrontendApplicationContribution.prototype.updateStatusBar = function () {
        if (this.debuggingStatusBar === document.body.classList.contains('theia-mod-debugging')) {
            return;
        }
        document.body.classList.toggle('theia-mod-debugging');
    };
    Object.defineProperty(DebugFrontendApplicationContribution.prototype, "debuggingStatusBar", {
        get: function () {
            if (this.manager.state < debug_session_1.DebugState.Running) {
                return false;
            }
            var session = this.manager.currentSession;
            if (session && session.configuration.noDebug) {
                return false;
            }
            return true;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        inversify_1.inject(debug_service_1.DebugService),
        __metadata("design:type", Object)
    ], DebugFrontendApplicationContribution.prototype, "debug", void 0);
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], DebugFrontendApplicationContribution.prototype, "manager", void 0);
    __decorate([
        inversify_1.inject(debug_configuration_manager_1.DebugConfigurationManager),
        __metadata("design:type", debug_configuration_manager_1.DebugConfigurationManager)
    ], DebugFrontendApplicationContribution.prototype, "configurations", void 0);
    __decorate([
        inversify_1.inject(breakpoint_manager_1.BreakpointManager),
        __metadata("design:type", breakpoint_manager_1.BreakpointManager)
    ], DebugFrontendApplicationContribution.prototype, "breakpointManager", void 0);
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], DebugFrontendApplicationContribution.prototype, "shell", void 0);
    __decorate([
        inversify_1.inject(debug_session_widget_1.DebugSessionWidgetFactory),
        __metadata("design:type", Function)
    ], DebugFrontendApplicationContribution.prototype, "sessionWidgetFactory", void 0);
    __decorate([
        inversify_1.inject(debug_editor_service_1.DebugEditorService),
        __metadata("design:type", debug_editor_service_1.DebugEditorService)
    ], DebugFrontendApplicationContribution.prototype, "editors", void 0);
    __decorate([
        inversify_1.inject(debug_console_contribution_1.DebugConsoleContribution),
        __metadata("design:type", debug_console_contribution_1.DebugConsoleContribution)
    ], DebugFrontendApplicationContribution.prototype, "console", void 0);
    __decorate([
        inversify_1.inject(debug_schema_updater_1.DebugSchemaUpdater),
        __metadata("design:type", debug_schema_updater_1.DebugSchemaUpdater)
    ], DebugFrontendApplicationContribution.prototype, "schemaUpdater", void 0);
    __decorate([
        inversify_1.inject(debug_preferences_1.DebugPreferences),
        __metadata("design:type", Object)
    ], DebugFrontendApplicationContribution.prototype, "preference", void 0);
    __decorate([
        inversify_1.inject(debug_watch_manager_1.DebugWatchManager),
        __metadata("design:type", debug_watch_manager_1.DebugWatchManager)
    ], DebugFrontendApplicationContribution.prototype, "watchManager", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], DebugFrontendApplicationContribution.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], DebugFrontendApplicationContribution.prototype, "editorManager", void 0);
    DebugFrontendApplicationContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], DebugFrontendApplicationContribution);
    return DebugFrontendApplicationContribution;
}(browser_1.AbstractViewContribution));
exports.DebugFrontendApplicationContribution = DebugFrontendApplicationContribution;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/debug-keybinding-contexts.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/debug-keybinding-contexts.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreakpointWidgetInputStrictFocusContext = exports.BreakpointWidgetInputFocusContext = exports.InDebugModeContext = exports.DebugKeybindingContexts = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var debug_session_manager_1 = __webpack_require__(/*! ./debug-session-manager */ "./node_modules/@theia/debug/lib/browser/debug-session-manager.js");
var debug_editor_service_1 = __webpack_require__(/*! ./editor/debug-editor-service */ "./node_modules/@theia/debug/lib/browser/editor/debug-editor-service.js");
var DebugKeybindingContexts;
(function (DebugKeybindingContexts) {
    DebugKeybindingContexts.inDebugMode = 'inDebugMode';
    DebugKeybindingContexts.breakpointWidgetInputFocus = 'breakpointWidgetInputFocus';
    DebugKeybindingContexts.breakpointWidgetInputStrictFocus = 'breakpointWidgetInputStrictFocus';
})(DebugKeybindingContexts = exports.DebugKeybindingContexts || (exports.DebugKeybindingContexts = {}));
var InDebugModeContext = /** @class */ (function () {
    function InDebugModeContext() {
        this.id = DebugKeybindingContexts.inDebugMode;
    }
    InDebugModeContext.prototype.isEnabled = function () {
        return this.manager.inDebugMode;
    };
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], InDebugModeContext.prototype, "manager", void 0);
    InDebugModeContext = __decorate([
        inversify_1.injectable()
    ], InDebugModeContext);
    return InDebugModeContext;
}());
exports.InDebugModeContext = InDebugModeContext;
var BreakpointWidgetInputFocusContext = /** @class */ (function () {
    function BreakpointWidgetInputFocusContext() {
        this.id = DebugKeybindingContexts.breakpointWidgetInputFocus;
    }
    BreakpointWidgetInputFocusContext.prototype.isEnabled = function () {
        var model = this.editors.model;
        return !!model && !!model.breakpointWidget.position && this.isFocused(model);
    };
    BreakpointWidgetInputFocusContext.prototype.isFocused = function (model) {
        return !!model.breakpointWidget.input && model.breakpointWidget.input.isFocused({ strict: true });
    };
    __decorate([
        inversify_1.inject(debug_editor_service_1.DebugEditorService),
        __metadata("design:type", debug_editor_service_1.DebugEditorService)
    ], BreakpointWidgetInputFocusContext.prototype, "editors", void 0);
    BreakpointWidgetInputFocusContext = __decorate([
        inversify_1.injectable()
    ], BreakpointWidgetInputFocusContext);
    return BreakpointWidgetInputFocusContext;
}());
exports.BreakpointWidgetInputFocusContext = BreakpointWidgetInputFocusContext;
var BreakpointWidgetInputStrictFocusContext = /** @class */ (function (_super) {
    __extends(BreakpointWidgetInputStrictFocusContext, _super);
    function BreakpointWidgetInputStrictFocusContext() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = DebugKeybindingContexts.breakpointWidgetInputStrictFocus;
        return _this;
    }
    BreakpointWidgetInputStrictFocusContext.prototype.isFocused = function (model) {
        return _super.prototype.isFocused.call(this, model) || model.editor.isFocused({ strict: true });
    };
    BreakpointWidgetInputStrictFocusContext = __decorate([
        inversify_1.injectable()
    ], BreakpointWidgetInputStrictFocusContext);
    return BreakpointWidgetInputStrictFocusContext;
}(BreakpointWidgetInputFocusContext));
exports.BreakpointWidgetInputStrictFocusContext = BreakpointWidgetInputStrictFocusContext;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/debug-schema-updater.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/debug-schema-updater.js ***!
  \***********************************************************************/
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.launchSchemaId = exports.DebugSchemaUpdater = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var debug_service_1 = __webpack_require__(/*! ../common/debug-service */ "./node_modules/@theia/debug/lib/common/debug-service.js");
var debug_preferences_1 = __webpack_require__(/*! ./debug-preferences */ "./node_modules/@theia/debug/lib/browser/debug-preferences.js");
var variable_input_schema_1 = __webpack_require__(/*! @theia/variable-resolver/lib/browser/variable-input-schema */ "./node_modules/@theia/variable-resolver/lib/browser/variable-input-schema.js");
var DebugSchemaUpdater = /** @class */ (function () {
    function DebugSchemaUpdater() {
        this.uri = new uri_1.default(exports.launchSchemaId);
    }
    DebugSchemaUpdater.prototype.registerSchemas = function (context) {
        this.inmemoryResources.add(this.uri, '');
        context.registerSchema({
            fileMatch: ['launch.json'],
            url: this.uri.toString()
        });
    };
    DebugSchemaUpdater.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            var types, schema, items, attributePromises, _a, _b, attributes, attributes_1, attributes_1_1, attribute, properties, _c, _d, key, e_1_1, _e, _f, _g, contents;
            var e_1, _h, e_2, _j, e_3, _k, _l;
            var _this = this;
            return __generator(this, function (_m) {
                switch (_m.label) {
                    case 0: return [4 /*yield*/, this.debug.debugTypes()];
                    case 1:
                        types = _m.sent();
                        schema = __assign({}, common_1.deepClone(launchSchema));
                        items = schema.properties['configurations'].items;
                        attributePromises = types.map(function (type) { return _this.debug.getSchemaAttributes(type); });
                        _m.label = 2;
                    case 2:
                        _m.trys.push([2, 7, 8, 9]);
                        return [4 /*yield*/, Promise.all(attributePromises)];
                    case 3:
                        _a = __values.apply(void 0, [_m.sent()]), _b = _a.next();
                        _m.label = 4;
                    case 4:
                        if (!!_b.done) return [3 /*break*/, 6];
                        attributes = _b.value;
                        try {
                            for (attributes_1 = (e_2 = void 0, __values(attributes)), attributes_1_1 = attributes_1.next(); !attributes_1_1.done; attributes_1_1 = attributes_1.next()) {
                                attribute = attributes_1_1.value;
                                properties = {};
                                try {
                                    for (_c = (e_3 = void 0, __values(['debugViewLocation', 'openDebug', 'internalConsoleOptions'])), _d = _c.next(); !_d.done; _d = _c.next()) {
                                        key = _d.value;
                                        properties[key] = debug_preferences_1.debugPreferencesSchema.properties["debug." + key];
                                    }
                                }
                                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                                finally {
                                    try {
                                        if (_d && !_d.done && (_k = _c.return)) _k.call(_c);
                                    }
                                    finally { if (e_3) throw e_3.error; }
                                }
                                attribute.properties = Object.assign(properties, attribute.properties);
                                items.oneOf.push(attribute);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (attributes_1_1 && !attributes_1_1.done && (_j = attributes_1.return)) _j.call(attributes_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        _m.label = 5;
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 4];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _m.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_h = _a.return)) _h.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9:
                        _f = (_e = (_l = items.defaultSnippets).push).apply;
                        _g = [_l];
                        return [4 /*yield*/, this.debug.getConfigurationSnippets()];
                    case 10:
                        _f.apply(_e, _g.concat([__spread.apply(void 0, [_m.sent()])]));
                        contents = JSON.stringify(schema);
                        this.inmemoryResources.update(this.uri, contents);
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(common_1.InMemoryResources),
        __metadata("design:type", common_1.InMemoryResources)
    ], DebugSchemaUpdater.prototype, "inmemoryResources", void 0);
    __decorate([
        inversify_1.inject(debug_service_1.DebugService),
        __metadata("design:type", Object)
    ], DebugSchemaUpdater.prototype, "debug", void 0);
    DebugSchemaUpdater = __decorate([
        inversify_1.injectable()
    ], DebugSchemaUpdater);
    return DebugSchemaUpdater;
}());
exports.DebugSchemaUpdater = DebugSchemaUpdater;
exports.launchSchemaId = 'vscode://schemas/launch';
var launchSchema = {
    $id: exports.launchSchemaId,
    type: 'object',
    title: 'Launch',
    required: [],
    default: { version: '0.2.0', configurations: [] },
    properties: {
        version: {
            type: 'string',
            description: 'Version of this file format.',
            default: '0.2.0'
        },
        configurations: {
            type: 'array',
            description: 'List of configurations. Add new configurations or edit existing ones by using IntelliSense.',
            items: {
                defaultSnippets: [],
                'type': 'object',
                oneOf: []
            }
        },
        inputs: variable_input_schema_1.inputsSchema.definitions.inputs
    }
};


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/editor/debug-breakpoint-widget.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/editor/debug-breakpoint-widget.js ***!
  \*********************************************************************************/
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
exports.DebugBreakpointWidget = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var monaco_editor_provider_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-editor-provider */ "./node_modules/@theia/monaco/lib/browser/monaco-editor-provider.js");
var monaco_editor_zone_widget_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-editor-zone-widget */ "./node_modules/@theia/monaco/lib/browser/monaco-editor-zone-widget.js");
var debug_editor_1 = __webpack_require__(/*! ./debug-editor */ "./node_modules/@theia/debug/lib/browser/editor/debug-editor.js");
var debug_source_breakpoint_1 = __webpack_require__(/*! ../model/debug-source-breakpoint */ "./node_modules/@theia/debug/lib/browser/model/debug-source-breakpoint.js");
var DebugBreakpointWidget = /** @class */ (function () {
    function DebugBreakpointWidget() {
        var _this = this;
        this.toDispose = new core_1.DisposableCollection();
        this.context = 'condition';
        this._values = {};
        this.updateInput = function (e) {
            if (_this._input) {
                _this._values[_this.context] = _this._input.getControl().getValue();
            }
            _this.context = e.currentTarget.value;
            _this.render();
            if (_this._input) {
                _this._input.focus();
            }
        };
    }
    DebugBreakpointWidget_1 = DebugBreakpointWidget;
    Object.defineProperty(DebugBreakpointWidget.prototype, "values", {
        get: function () {
            var _a;
            if (!this._input) {
                return undefined;
            }
            return __assign(__assign({}, this._values), (_a = {}, _a[this.context] = this._input.getControl().getValue(), _a));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugBreakpointWidget.prototype, "input", {
        get: function () {
            return this._input;
        },
        enumerable: false,
        configurable: true
    });
    DebugBreakpointWidget.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var selectNode, inputNode, input, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.toDispose.push(this.zone = new monaco_editor_zone_widget_1.MonacoEditorZoneWidget(this.editor.getControl()));
                        this.zone.containerNode.classList.add('theia-debug-breakpoint-widget');
                        selectNode = this.selectNode = document.createElement('div');
                        selectNode.classList.add('theia-debug-breakpoint-select');
                        this.zone.containerNode.appendChild(selectNode);
                        inputNode = document.createElement('div');
                        inputNode.classList.add('theia-debug-breakpoint-input');
                        this.zone.containerNode.appendChild(inputNode);
                        _a = this;
                        return [4 /*yield*/, this.createInput(inputNode)];
                    case 1:
                        input = _a._input = _b.sent();
                        if (this.toDispose.disposed) {
                            input.dispose();
                            return [2 /*return*/];
                        }
                        this.toDispose.push(input);
                        this.toDispose.push(monaco.modes.CompletionProviderRegistry.register({ scheme: input.uri.scheme }, {
                            provideCompletionItems: function (model, position, context, token) { return __awaiter(_this, void 0, void 0, function () {
                                var suggestions, editor, items, overwriteBefore, value, items_1, items_1_1, completion;
                                var e_1, _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            suggestions = [];
                                            if (!((this.context === 'condition' || this.context === 'logMessage')
                                                && input.uri.toString() === model.uri.toString())) return [3 /*break*/, 2];
                                            editor = this.editor.getControl();
                                            return [4 /*yield*/, monaco.suggest.provideSuggestionItems(editor.getModel(), new monaco.Position(editor.getPosition().lineNumber, 1), new monaco.suggest.CompletionOptions(undefined, new Set().add(monaco.languages.CompletionItemKind.Snippet)), context, token)];
                                        case 1:
                                            items = _b.sent();
                                            overwriteBefore = 0;
                                            if (this.context === 'condition') {
                                                overwriteBefore = position.column - 1;
                                            }
                                            else {
                                                value = editor.getModel().getValue();
                                                while ((position.column - 2 - overwriteBefore >= 0)
                                                    && value[position.column - 2 - overwriteBefore] !== '{' && value[position.column - 2 - overwriteBefore] !== ' ') {
                                                    overwriteBefore++;
                                                }
                                            }
                                            try {
                                                for (items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                                                    completion = items_1_1.value.completion;
                                                    completion.range = monaco.Range.fromPositions(position.delta(0, -overwriteBefore), position);
                                                    suggestions.push(completion);
                                                }
                                            }
                                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                            finally {
                                                try {
                                                    if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                                                }
                                                finally { if (e_1) throw e_1.error; }
                                            }
                                            _b.label = 2;
                                        case 2: return [2 /*return*/, { suggestions: suggestions }];
                                    }
                                });
                            }); }
                        }));
                        this.toDispose.push(this.zone.onDidLayoutChange(function (dimension) { return _this.layout(dimension); }));
                        this.toDispose.push(input.getControl().onDidChangeModelContent(function () {
                            var heightInLines = input.getControl().getModel().getLineCount() + 1;
                            _this.zone.layout(heightInLines);
                            _this.updatePlaceholder();
                        }));
                        this.toDispose.push(core_1.Disposable.create(function () { return ReactDOM.unmountComponentAtNode(selectNode); }));
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugBreakpointWidget.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    Object.defineProperty(DebugBreakpointWidget.prototype, "position", {
        get: function () {
            var options = this.zone.options;
            return options && new monaco.Position(options.afterLineNumber, options.afterColumn || -1);
        },
        enumerable: false,
        configurable: true
    });
    DebugBreakpointWidget.prototype.show = function (options) {
        if (!this._input) {
            return;
        }
        var breakpoint = options instanceof debug_source_breakpoint_1.DebugSourceBreakpoint ? options : 'breakpoint' in options ? options.breakpoint : undefined;
        this._values = breakpoint ? {
            condition: breakpoint.condition,
            hitCondition: breakpoint.hitCondition,
            logMessage: breakpoint.logMessage
        } : {};
        if (options instanceof debug_source_breakpoint_1.DebugSourceBreakpoint) {
            if (options.logMessage) {
                this.context = 'logMessage';
            }
            else if (options.hitCondition && !options.condition) {
                this.context = 'hitCondition';
            }
            else {
                this.context = 'condition';
            }
        }
        else {
            this.context = options.context;
        }
        this.render();
        var position = 'position' in options ? options.position : undefined;
        var afterLineNumber = breakpoint ? breakpoint.line : position.lineNumber;
        var afterColumn = breakpoint ? breakpoint.column : position.column;
        var editor = this._input.getControl();
        var heightInLines = editor.getModel().getLineCount() + 1;
        this.zone.show({ afterLineNumber: afterLineNumber, afterColumn: afterColumn, heightInLines: heightInLines, frameWidth: 1 });
        editor.setPosition(editor.getModel().getPositionAt(editor.getModel().getValueLength()));
        this._input.focus();
    };
    DebugBreakpointWidget.prototype.hide = function () {
        this.zone.hide();
        this.editor.focus();
    };
    DebugBreakpointWidget.prototype.layout = function (dimension) {
        if (this._input) {
            this._input.getControl().layout(dimension);
        }
    };
    DebugBreakpointWidget.prototype.createInput = function (node) {
        return this.editorProvider.createInline(new uri_1.default().withScheme('breakpointinput').withPath(this.editor.getControl().getId()), node, {
            autoSizing: false
        });
    };
    DebugBreakpointWidget.prototype.render = function () {
        if (this._input) {
            this._input.getControl().setValue(this._values[this.context] || '');
        }
        ReactDOM.render(React.createElement("select", { className: 'theia-select', value: this.context, onChange: this.updateInput },
            this.renderOption('condition', 'Expression'),
            this.renderOption('hitCondition', 'Hit Count'),
            this.renderOption('logMessage', 'Log Message')), this.selectNode);
    };
    DebugBreakpointWidget.prototype.renderOption = function (context, label) {
        return React.createElement("option", { value: context }, label);
    };
    DebugBreakpointWidget.prototype.updatePlaceholder = function () {
        if (!this._input) {
            return;
        }
        var value = this._input.getControl().getValue();
        var decorations = !!value ? [] : [{
                color: undefined,
                range: {
                    startLineNumber: 0,
                    endLineNumber: 0,
                    startColumn: 0,
                    endColumn: 1
                },
                renderOptions: {
                    after: {
                        contentText: this.placeholder,
                        opacity: '0.4'
                    }
                }
            }];
        this._input.getControl().setDecorations(DebugBreakpointWidget_1.PLACEHOLDER_DECORATION, decorations);
    };
    Object.defineProperty(DebugBreakpointWidget.prototype, "placeholder", {
        get: function () {
            if (this.context === 'logMessage') {
                return "Message to log when breakpoint is hit. Expressions within {} are interpolated. 'Enter' to accept, 'esc' to cancel.";
            }
            if (this.context === 'hitCondition') {
                return "Break when hit count condition is met. 'Enter' to accept, 'esc' to cancel.";
            }
            return "Break when expression evaluates to true. 'Enter' to accept, 'esc' to cancel.";
        },
        enumerable: false,
        configurable: true
    });
    var DebugBreakpointWidget_1;
    DebugBreakpointWidget.PLACEHOLDER_DECORATION = 'placeholderDecoration';
    __decorate([
        inversify_1.inject(debug_editor_1.DebugEditor),
        __metadata("design:type", Object)
    ], DebugBreakpointWidget.prototype, "editor", void 0);
    __decorate([
        inversify_1.inject(monaco_editor_provider_1.MonacoEditorProvider),
        __metadata("design:type", monaco_editor_provider_1.MonacoEditorProvider)
    ], DebugBreakpointWidget.prototype, "editorProvider", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], DebugBreakpointWidget.prototype, "init", null);
    DebugBreakpointWidget = DebugBreakpointWidget_1 = __decorate([
        inversify_1.injectable()
    ], DebugBreakpointWidget);
    return DebugBreakpointWidget;
}());
exports.DebugBreakpointWidget = DebugBreakpointWidget;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/editor/debug-editor-model.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/editor/debug-editor-model.js ***!
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
exports.DebugEditorModel = exports.DebugEditorModelFactory = void 0;
var debounce = __webpack_require__(/*! p-debounce */ "./node_modules/p-debounce/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var breakpoint_manager_1 = __webpack_require__(/*! ../breakpoint/breakpoint-manager */ "./node_modules/@theia/debug/lib/browser/breakpoint/breakpoint-manager.js");
var debug_session_manager_1 = __webpack_require__(/*! ../debug-session-manager */ "./node_modules/@theia/debug/lib/browser/debug-session-manager.js");
var breakpoint_marker_1 = __webpack_require__(/*! ../breakpoint/breakpoint-marker */ "./node_modules/@theia/debug/lib/browser/breakpoint/breakpoint-marker.js");
var debug_editor_1 = __webpack_require__(/*! ./debug-editor */ "./node_modules/@theia/debug/lib/browser/editor/debug-editor.js");
var debug_hover_widget_1 = __webpack_require__(/*! ./debug-hover-widget */ "./node_modules/@theia/debug/lib/browser/editor/debug-hover-widget.js");
var debug_breakpoint_widget_1 = __webpack_require__(/*! ./debug-breakpoint-widget */ "./node_modules/@theia/debug/lib/browser/editor/debug-breakpoint-widget.js");
var debug_exception_widget_1 = __webpack_require__(/*! ./debug-exception-widget */ "./node_modules/@theia/debug/lib/browser/editor/debug-exception-widget.js");
var debug_inline_value_decorator_1 = __webpack_require__(/*! ./debug-inline-value-decorator */ "./node_modules/@theia/debug/lib/browser/editor/debug-inline-value-decorator.js");
exports.DebugEditorModelFactory = Symbol('DebugEditorModelFactory');
var DebugEditorModel = /** @class */ (function () {
    function DebugEditorModel() {
        var _this = this;
        this.toDispose = new core_1.DisposableCollection();
        this.breakpointDecorations = [];
        this.breakpointRanges = new Map();
        this.currentBreakpointDecorations = [];
        this.frameDecorations = [];
        this.updatingDecorations = false;
        this.renderFrames = debounce(function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, newFrameDecorations, inlineValueDecorations, codeEditor;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        this.toggleExceptionWidget();
                        return [4 /*yield*/, Promise.all([
                                this.createFrameDecorations(),
                                this.createInlineValueDecorations()
                            ])];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), newFrameDecorations = _a[0], inlineValueDecorations = _a[1];
                        codeEditor = this.editor.getControl();
                        codeEditor.removeDecorations(debug_inline_value_decorator_1.INLINE_VALUE_DECORATION_KEY);
                        codeEditor.setDecorations(debug_inline_value_decorator_1.INLINE_VALUE_DECORATION_KEY, inlineValueDecorations);
                        this.frameDecorations = this.deltaDecorations(this.frameDecorations, newFrameDecorations);
                        return [2 /*return*/];
                }
            });
        }); }, 100);
        this.hintDecorations = [];
    }
    DebugEditorModel_1 = DebugEditorModel;
    DebugEditorModel.createContainer = function (parent, editor) {
        var child = debug_hover_widget_1.createDebugHoverWidgetContainer(parent, editor);
        child.bind(DebugEditorModel_1).toSelf();
        child.bind(debug_breakpoint_widget_1.DebugBreakpointWidget).toSelf();
        child.bind(debug_exception_widget_1.DebugExceptionWidget).toSelf();
        return child;
    };
    DebugEditorModel.createModel = function (parent, editor) {
        return DebugEditorModel_1.createContainer(parent, editor).get(DebugEditorModel_1);
    };
    DebugEditorModel.prototype.init = function () {
        var _this = this;
        this.uri = new uri_1.default(this.editor.getControl().getModel().uri.toString());
        this.toDispose.pushAll([
            this.hover,
            this.breakpointWidget,
            this.exceptionWidget,
            this.editor.getControl().onMouseDown(function (event) { return _this.handleMouseDown(event); }),
            this.editor.getControl().onMouseMove(function (event) { return _this.handleMouseMove(event); }),
            this.editor.getControl().onMouseLeave(function (event) { return _this.handleMouseLeave(event); }),
            this.editor.getControl().onKeyDown(function () { return _this.hover.hide({ immediate: false }); }),
            this.editor.getControl().onDidChangeModelContent(function () { return _this.renderFrames(); }),
            this.editor.getControl().getModel().onDidChangeDecorations(function () { return _this.updateBreakpoints(); }),
            this.sessions.onDidChange(function () { return _this.renderFrames(); })
        ]);
        this.renderFrames();
        this.render();
    };
    DebugEditorModel.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    DebugEditorModel.prototype.createInlineValueDecorations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentFrame;
            return __generator(this, function (_a) {
                currentFrame = this.sessions.currentFrame;
                if (!currentFrame || !currentFrame.source || currentFrame.source.uri.toString() !== this.uri.toString()) {
                    return [2 /*return*/, []];
                }
                return [2 /*return*/, this.inlineValueDecorator.calculateDecorations(this, currentFrame)];
            });
        });
    };
    DebugEditorModel.prototype.createFrameDecorations = function () {
        var decorations = [];
        var _a = this.sessions, currentFrame = _a.currentFrame, topFrame = _a.topFrame;
        if (!currentFrame || !currentFrame.source || currentFrame.source.uri.toString() !== this.uri.toString()) {
            return decorations;
        }
        var columnUntilEOLRange = new monaco.Range(currentFrame.raw.line, currentFrame.raw.column, currentFrame.raw.line, 1 << 30);
        var range = new monaco.Range(currentFrame.raw.line, currentFrame.raw.column, currentFrame.raw.line, currentFrame.raw.column + 1);
        if (topFrame === currentFrame) {
            decorations.push({
                options: DebugEditorModel_1.TOP_STACK_FRAME_MARGIN,
                range: range
            });
            decorations.push({
                options: DebugEditorModel_1.TOP_STACK_FRAME_DECORATION,
                range: columnUntilEOLRange
            });
            var topFrameRange = this.topFrameRange;
            if (topFrameRange && topFrameRange.startLineNumber === currentFrame.raw.line && topFrameRange.startColumn !== currentFrame.raw.column) {
                decorations.push({
                    options: DebugEditorModel_1.TOP_STACK_FRAME_INLINE_DECORATION,
                    range: columnUntilEOLRange
                });
            }
            this.topFrameRange = columnUntilEOLRange;
        }
        else {
            decorations.push({
                options: DebugEditorModel_1.FOCUSED_STACK_FRAME_MARGIN,
                range: range
            });
            decorations.push({
                options: DebugEditorModel_1.FOCUSED_STACK_FRAME_DECORATION,
                range: columnUntilEOLRange
            });
        }
        return decorations;
    };
    DebugEditorModel.prototype.toggleExceptionWidget = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentFrame, info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentFrame = this.sessions.currentFrame;
                        if (!currentFrame) {
                            this.exceptionWidget.hide();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, currentFrame.thread.getExceptionInfo()];
                    case 1:
                        info = _a.sent();
                        if (!info) {
                            this.exceptionWidget.hide();
                            return [2 /*return*/];
                        }
                        this.exceptionWidget.show({
                            info: info,
                            lineNumber: currentFrame.raw.line,
                            column: currentFrame.raw.column
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugEditorModel.prototype.render = function () {
        this.renderBreakpoints();
        this.renderCurrentBreakpoints();
    };
    DebugEditorModel.prototype.renderBreakpoints = function () {
        var decorations = this.createBreakpointDecorations();
        this.breakpointDecorations = this.deltaDecorations(this.breakpointDecorations, decorations);
        this.updateBreakpointRanges();
    };
    DebugEditorModel.prototype.createBreakpointDecorations = function () {
        var _this = this;
        var breakpoints = this.breakpoints.getBreakpoints(this.uri);
        return breakpoints.map(function (breakpoint) { return _this.createBreakpointDecoration(breakpoint); });
    };
    DebugEditorModel.prototype.createBreakpointDecoration = function (breakpoint) {
        var lineNumber = breakpoint.raw.line;
        var column = breakpoint.raw.column;
        var range = typeof column === 'number' ? new monaco.Range(lineNumber, column, lineNumber, column + 1) : new monaco.Range(lineNumber, 1, lineNumber, 2);
        return {
            range: range,
            options: {
                stickiness: DebugEditorModel_1.STICKINESS
            }
        };
    };
    DebugEditorModel.prototype.updateBreakpointRanges = function () {
        var e_1, _a;
        this.breakpointRanges.clear();
        try {
            for (var _b = __values(this.breakpointDecorations), _c = _b.next(); !_c.done; _c = _b.next()) {
                var decoration = _c.value;
                var range = this.editor.getControl().getModel().getDecorationRange(decoration);
                this.breakpointRanges.set(decoration, range);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    DebugEditorModel.prototype.renderCurrentBreakpoints = function () {
        var decorations = this.createCurrentBreakpointDecorations();
        this.currentBreakpointDecorations = this.deltaDecorations(this.currentBreakpointDecorations, decorations);
    };
    DebugEditorModel.prototype.createCurrentBreakpointDecorations = function () {
        var _this = this;
        var breakpoints = this.sessions.getBreakpoints(this.uri);
        return breakpoints.map(function (breakpoint) { return _this.createCurrentBreakpointDecoration(breakpoint); });
    };
    DebugEditorModel.prototype.createCurrentBreakpointDecoration = function (breakpoint) {
        var lineNumber = breakpoint.line;
        var column = breakpoint.column;
        var range = typeof column === 'number' ? new monaco.Range(lineNumber, column, lineNumber, column + 1) : new monaco.Range(lineNumber, 1, lineNumber, 1);
        var _a = breakpoint.getDecoration(), className = _a.className, message = _a.message;
        var renderInline = typeof column === 'number' && (column > this.editor.getControl().getModel().getLineFirstNonWhitespaceColumn(lineNumber));
        return {
            range: range,
            options: {
                glyphMarginClassName: className,
                glyphMarginHoverMessage: message.map(function (value) { return ({ value: value }); }),
                stickiness: DebugEditorModel_1.STICKINESS,
                beforeContentClassName: renderInline ? "theia-debug-breakpoint-column " + className + "-column" : undefined
            }
        };
    };
    DebugEditorModel.prototype.updateBreakpoints = function () {
        if (this.areBreakpointsAffected()) {
            var breakpoints = this.createBreakpoints();
            this.breakpoints.setBreakpoints(this.uri, breakpoints);
        }
    };
    DebugEditorModel.prototype.areBreakpointsAffected = function () {
        var e_2, _a;
        if (this.updatingDecorations || !this.editor.getControl().getModel()) {
            return false;
        }
        try {
            for (var _b = __values(this.breakpointDecorations), _c = _b.next(); !_c.done; _c = _b.next()) {
                var decoration = _c.value;
                var range = this.editor.getControl().getModel().getDecorationRange(decoration);
                var oldRange = this.breakpointRanges.get(decoration);
                if (!range || !range.equalsRange(oldRange)) {
                    return true;
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
        return false;
    };
    DebugEditorModel.prototype.createBreakpoints = function () {
        var e_3, _a;
        var uri = this.uri;
        var lines = new Set();
        var breakpoints = [];
        try {
            for (var _b = __values(this.breakpointDecorations), _c = _b.next(); !_c.done; _c = _b.next()) {
                var decoration = _c.value;
                var range = this.editor.getControl().getModel().getDecorationRange(decoration);
                if (range && !lines.has(range.startLineNumber)) {
                    var line = range.startLineNumber;
                    var column = range.startColumn;
                    var oldRange = this.breakpointRanges.get(decoration);
                    var oldBreakpoint = oldRange && this.breakpoints.getInlineBreakpoint(uri, oldRange.startLineNumber, oldRange.startColumn);
                    var breakpoint = breakpoint_marker_1.SourceBreakpoint.create(uri, { line: line, column: column }, oldBreakpoint);
                    breakpoints.push(breakpoint);
                    lines.add(line);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return breakpoints;
    };
    Object.defineProperty(DebugEditorModel.prototype, "position", {
        get: function () {
            return this.editor.getControl().getPosition();
        },
        enumerable: false,
        configurable: true
    });
    DebugEditorModel.prototype.getBreakpoint = function (position) {
        if (position === void 0) { position = this.position; }
        return this.getInlineBreakpoint(position) || this.getLineBreakpoints(position)[0];
    };
    DebugEditorModel.prototype.getInlineBreakpoint = function (position) {
        if (position === void 0) { position = this.position; }
        return this.sessions.getInlineBreakpoint(this.uri, position.lineNumber, position.column);
    };
    DebugEditorModel.prototype.getLineBreakpoints = function (position) {
        if (position === void 0) { position = this.position; }
        return this.sessions.getLineBreakpoints(this.uri, position.lineNumber);
    };
    DebugEditorModel.prototype.addBreakpoint = function (raw) {
        this.breakpoints.addBreakpoint(breakpoint_marker_1.SourceBreakpoint.create(this.uri, raw));
    };
    DebugEditorModel.prototype.toggleBreakpoint = function (position) {
        var e_4, _a;
        if (position === void 0) { position = this.position; }
        var lineNumber = position.lineNumber;
        var breakpoints = this.getLineBreakpoints(position);
        if (breakpoints.length) {
            try {
                for (var breakpoints_1 = __values(breakpoints), breakpoints_1_1 = breakpoints_1.next(); !breakpoints_1_1.done; breakpoints_1_1 = breakpoints_1.next()) {
                    var breakpoint = breakpoints_1_1.value;
                    breakpoint.remove();
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (breakpoints_1_1 && !breakpoints_1_1.done && (_a = breakpoints_1.return)) _a.call(breakpoints_1);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        else {
            this.addBreakpoint({ line: lineNumber });
        }
    };
    DebugEditorModel.prototype.addInlineBreakpoint = function () {
        var position = this.position;
        var lineNumber = position.lineNumber, column = position.column;
        var breakpoint = this.getInlineBreakpoint(position);
        if (breakpoint) {
            return;
        }
        this.addBreakpoint({ line: lineNumber, column: column });
    };
    DebugEditorModel.prototype.acceptBreakpoint = function () {
        var _a = this.breakpointWidget, position = _a.position, values = _a.values;
        if (position && values) {
            var breakpoint = position.column > 0 ? this.getInlineBreakpoint(position) : this.getLineBreakpoints(position)[0];
            if (breakpoint) {
                breakpoint.updateOrigins(values);
            }
            else {
                var lineNumber = position.lineNumber;
                var column = position.column > 0 ? position.column : undefined;
                this.addBreakpoint(__assign({ line: lineNumber, column: column }, values));
            }
            this.breakpointWidget.hide();
        }
    };
    DebugEditorModel.prototype.handleMouseDown = function (event) {
        var _this = this;
        if (event.target && event.target.type === monaco.editor.MouseTargetType.GUTTER_GLYPH_MARGIN) {
            if (event.event.rightButton) {
                this.editor.focus();
                setTimeout(function () {
                    _this.contextMenu.render({
                        menuPath: DebugEditorModel_1.CONTEXT_MENU,
                        anchor: event.event.browserEvent,
                        args: [event.target.position]
                    });
                });
            }
            else {
                this.toggleBreakpoint(event.target.position);
            }
        }
        this.hintBreakpoint(event);
    };
    DebugEditorModel.prototype.handleMouseMove = function (event) {
        this.showHover(event);
        this.hintBreakpoint(event);
    };
    DebugEditorModel.prototype.handleMouseLeave = function (event) {
        this.hideHover(event);
        this.deltaHintDecorations([]);
    };
    DebugEditorModel.prototype.hintBreakpoint = function (event) {
        var hintDecorations = this.createHintDecorations(event);
        this.deltaHintDecorations(hintDecorations);
    };
    DebugEditorModel.prototype.deltaHintDecorations = function (hintDecorations) {
        this.hintDecorations = this.deltaDecorations(this.hintDecorations, hintDecorations);
    };
    DebugEditorModel.prototype.createHintDecorations = function (event) {
        if (event.target && event.target.type === monaco.editor.MouseTargetType.GUTTER_GLYPH_MARGIN && event.target.position) {
            var lineNumber = event.target.position.lineNumber;
            if (this.getLineBreakpoints(event.target.position).length) {
                return [];
            }
            return [{
                    range: new monaco.Range(lineNumber, 1, lineNumber, 1),
                    options: DebugEditorModel_1.BREAKPOINT_HINT_DECORATION
                }];
        }
        return [];
    };
    DebugEditorModel.prototype.showHover = function (mouseEvent) {
        var targetType = mouseEvent.target.type;
        var stopKey = core_1.isOSX ? 'metaKey' : 'ctrlKey';
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (targetType === monaco.editor.MouseTargetType.CONTENT_WIDGET && mouseEvent.target.detail === this.hover.getId() && !mouseEvent.event[stopKey]) {
            // mouse moved on top of debug hover widget
            return;
        }
        if (targetType === monaco.editor.MouseTargetType.CONTENT_TEXT) {
            this.hover.show({
                selection: mouseEvent.target.range,
                immediate: false
            });
        }
        else {
            this.hover.hide({ immediate: false });
        }
    };
    DebugEditorModel.prototype.hideHover = function (_a) {
        var event = _a.event;
        var rect = this.hover.getDomNode().getBoundingClientRect();
        if (event.posx < rect.left || event.posx > rect.right || event.posy < rect.top || event.posy > rect.bottom) {
            this.hover.hide({ immediate: false });
        }
    };
    DebugEditorModel.prototype.deltaDecorations = function (oldDecorations, newDecorations) {
        this.updatingDecorations = true;
        try {
            return this.editor.getControl().getModel().deltaDecorations(oldDecorations, newDecorations);
        }
        finally {
            this.updatingDecorations = false;
        }
    };
    var DebugEditorModel_1;
    DebugEditorModel.CONTEXT_MENU = ['debug-editor-context-menu'];
    DebugEditorModel.STICKINESS = monaco.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges;
    DebugEditorModel.BREAKPOINT_HINT_DECORATION = {
        glyphMarginClassName: 'theia-debug-breakpoint-hint',
        stickiness: DebugEditorModel_1.STICKINESS
    };
    DebugEditorModel.TOP_STACK_FRAME_MARGIN = {
        glyphMarginClassName: 'theia-debug-top-stack-frame',
        stickiness: DebugEditorModel_1.STICKINESS
    };
    DebugEditorModel.FOCUSED_STACK_FRAME_MARGIN = {
        glyphMarginClassName: 'theia-debug-focused-stack-frame',
        stickiness: DebugEditorModel_1.STICKINESS
    };
    DebugEditorModel.TOP_STACK_FRAME_DECORATION = {
        isWholeLine: true,
        className: 'theia-debug-top-stack-frame-line',
        stickiness: DebugEditorModel_1.STICKINESS
    };
    DebugEditorModel.TOP_STACK_FRAME_INLINE_DECORATION = {
        beforeContentClassName: 'theia-debug-top-stack-frame-column'
    };
    DebugEditorModel.FOCUSED_STACK_FRAME_DECORATION = {
        isWholeLine: true,
        className: 'theia-debug-focused-stack-frame-line',
        stickiness: DebugEditorModel_1.STICKINESS
    };
    __decorate([
        inversify_1.inject(debug_hover_widget_1.DebugHoverWidget),
        __metadata("design:type", debug_hover_widget_1.DebugHoverWidget)
    ], DebugEditorModel.prototype, "hover", void 0);
    __decorate([
        inversify_1.inject(debug_editor_1.DebugEditor),
        __metadata("design:type", Object)
    ], DebugEditorModel.prototype, "editor", void 0);
    __decorate([
        inversify_1.inject(breakpoint_manager_1.BreakpointManager),
        __metadata("design:type", breakpoint_manager_1.BreakpointManager)
    ], DebugEditorModel.prototype, "breakpoints", void 0);
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], DebugEditorModel.prototype, "sessions", void 0);
    __decorate([
        inversify_1.inject(browser_1.ContextMenuRenderer),
        __metadata("design:type", browser_1.ContextMenuRenderer)
    ], DebugEditorModel.prototype, "contextMenu", void 0);
    __decorate([
        inversify_1.inject(debug_breakpoint_widget_1.DebugBreakpointWidget),
        __metadata("design:type", debug_breakpoint_widget_1.DebugBreakpointWidget)
    ], DebugEditorModel.prototype, "breakpointWidget", void 0);
    __decorate([
        inversify_1.inject(debug_exception_widget_1.DebugExceptionWidget),
        __metadata("design:type", debug_exception_widget_1.DebugExceptionWidget)
    ], DebugEditorModel.prototype, "exceptionWidget", void 0);
    __decorate([
        inversify_1.inject(debug_inline_value_decorator_1.DebugInlineValueDecorator),
        __metadata("design:type", debug_inline_value_decorator_1.DebugInlineValueDecorator)
    ], DebugEditorModel.prototype, "inlineValueDecorator", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugEditorModel.prototype, "init", null);
    DebugEditorModel = DebugEditorModel_1 = __decorate([
        inversify_1.injectable()
    ], DebugEditorModel);
    return DebugEditorModel;
}());
exports.DebugEditorModel = DebugEditorModel;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/editor/debug-editor-service.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/editor/debug-editor-service.js ***!
  \******************************************************************************/
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
exports.DebugEditorService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var monaco_editor_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-editor */ "./node_modules/@theia/monaco/lib/browser/monaco-editor.js");
var debug_session_manager_1 = __webpack_require__(/*! ../debug-session-manager */ "./node_modules/@theia/debug/lib/browser/debug-session-manager.js");
var debug_editor_model_1 = __webpack_require__(/*! ./debug-editor-model */ "./node_modules/@theia/debug/lib/browser/editor/debug-editor-model.js");
var breakpoint_manager_1 = __webpack_require__(/*! ../breakpoint/breakpoint-manager */ "./node_modules/@theia/debug/lib/browser/breakpoint/breakpoint-manager.js");
var DebugEditorService = /** @class */ (function () {
    function DebugEditorService() {
        this.models = new Map();
    }
    DebugEditorService.prototype.init = function () {
        var _this = this;
        this.editors.all.forEach(function (widget) { return _this.push(widget); });
        this.editors.onCreated(function (widget) { return _this.push(widget); });
        this.sessionManager.onDidChangeBreakpoints(function (_a) {
            var session = _a.session, uri = _a.uri;
            if (!session || session === _this.sessionManager.currentSession) {
                _this.render(uri);
            }
        });
        this.breakpoints.onDidChangeBreakpoints(function (event) { return _this.closeBreakpointIfAffected(event); });
    };
    DebugEditorService.prototype.push = function (widget) {
        var _this = this;
        var editor = widget.editor;
        if (!(editor instanceof monaco_editor_1.MonacoEditor)) {
            return;
        }
        var uri = editor.getControl().getModel().uri.toString();
        var debugModel = this.factory(editor);
        this.models.set(uri, debugModel);
        editor.getControl().onDidDispose(function () {
            debugModel.dispose();
            _this.models.delete(uri);
        });
    };
    DebugEditorService.prototype.render = function (uri) {
        var model = this.models.get(uri.toString());
        if (model) {
            model.render();
        }
    };
    Object.defineProperty(DebugEditorService.prototype, "model", {
        get: function () {
            var currentEditor = this.editors.currentEditor;
            var uri = currentEditor && currentEditor.getResourceUri();
            return uri && this.models.get(uri.toString());
        },
        enumerable: false,
        configurable: true
    });
    DebugEditorService.prototype.getLogpoint = function (position) {
        var logpoint = this.anyBreakpoint(position);
        return logpoint && logpoint.logMessage ? logpoint : undefined;
    };
    DebugEditorService.prototype.getLogpointEnabled = function (position) {
        var logpoint = this.getLogpoint(position);
        return logpoint && logpoint.enabled;
    };
    DebugEditorService.prototype.getBreakpoint = function (position) {
        var breakpoint = this.anyBreakpoint(position);
        return breakpoint && breakpoint.logMessage ? undefined : breakpoint;
    };
    DebugEditorService.prototype.getBreakpointEnabled = function (position) {
        var breakpoint = this.getBreakpoint(position);
        return breakpoint && breakpoint.enabled;
    };
    DebugEditorService.prototype.anyBreakpoint = function (position) {
        return this.model && this.model.getBreakpoint(position);
    };
    DebugEditorService.prototype.getInlineBreakpoint = function (position) {
        return this.model && this.model.getInlineBreakpoint(position);
    };
    DebugEditorService.prototype.toggleBreakpoint = function (position) {
        var model = this.model;
        if (model) {
            model.toggleBreakpoint(position);
        }
    };
    DebugEditorService.prototype.setBreakpointEnabled = function (position, enabled) {
        var breakpoint = this.anyBreakpoint(position);
        if (breakpoint) {
            breakpoint.setEnabled(enabled);
        }
    };
    DebugEditorService.prototype.addInlineBreakpoint = function () {
        var model = this.model;
        if (model) {
            model.addInlineBreakpoint();
        }
    };
    DebugEditorService.prototype.showHover = function () {
        var model = this.model;
        if (model) {
            var selection = model.editor.getControl().getSelection();
            model.hover.show({ selection: selection, focus: true });
        }
    };
    DebugEditorService.prototype.canShowHover = function () {
        var model = this.model;
        if (model) {
            var selection = model.editor.getControl().getSelection();
            return !!model.editor.getControl().getModel().getWordAtPosition(selection.getStartPosition());
        }
        return false;
    };
    DebugEditorService.prototype.addBreakpoint = function (context, position) {
        var model = this.model;
        if (model) {
            position = position || model.position;
            var breakpoint = model.getBreakpoint(position);
            if (breakpoint) {
                model.breakpointWidget.show({ breakpoint: breakpoint, context: context });
            }
            else {
                model.breakpointWidget.show({
                    position: position,
                    context: context
                });
            }
        }
    };
    DebugEditorService.prototype.editBreakpoint = function (breakpointOrPosition) {
        return __awaiter(this, void 0, void 0, function () {
            var model;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (breakpointOrPosition instanceof monaco.Position) {
                            breakpointOrPosition = this.anyBreakpoint(breakpointOrPosition);
                        }
                        if (!breakpointOrPosition) return [3 /*break*/, 2];
                        return [4 /*yield*/, breakpointOrPosition.open()];
                    case 1:
                        _a.sent();
                        model = this.models.get(breakpointOrPosition.uri.toString());
                        if (model) {
                            model.breakpointWidget.show(breakpointOrPosition);
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    DebugEditorService.prototype.closeBreakpoint = function () {
        var model = this.model;
        if (model) {
            model.breakpointWidget.hide();
        }
    };
    DebugEditorService.prototype.acceptBreakpoint = function () {
        var model = this.model;
        if (model) {
            model.acceptBreakpoint();
        }
    };
    DebugEditorService.prototype.closeBreakpointIfAffected = function (_a) {
        var e_1, _b;
        var uri = _a.uri, removed = _a.removed;
        var model = this.models.get(uri.toString());
        if (!model) {
            return;
        }
        var position = model.breakpointWidget.position;
        if (!position) {
            return;
        }
        try {
            for (var removed_1 = __values(removed), removed_1_1 = removed_1.next(); !removed_1_1.done; removed_1_1 = removed_1.next()) {
                var breakpoint = removed_1_1.value;
                if (breakpoint.raw.line === position.lineNumber) {
                    model.breakpointWidget.hide();
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (removed_1_1 && !removed_1_1.done && (_b = removed_1.return)) _b.call(removed_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    __decorate([
        inversify_1.inject(browser_1.EditorManager),
        __metadata("design:type", browser_1.EditorManager)
    ], DebugEditorService.prototype, "editors", void 0);
    __decorate([
        inversify_1.inject(breakpoint_manager_1.BreakpointManager),
        __metadata("design:type", breakpoint_manager_1.BreakpointManager)
    ], DebugEditorService.prototype, "breakpoints", void 0);
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], DebugEditorService.prototype, "sessionManager", void 0);
    __decorate([
        inversify_1.inject(browser_2.ContextMenuRenderer),
        __metadata("design:type", browser_2.ContextMenuRenderer)
    ], DebugEditorService.prototype, "contextMenu", void 0);
    __decorate([
        inversify_1.inject(debug_editor_model_1.DebugEditorModelFactory),
        __metadata("design:type", Function)
    ], DebugEditorService.prototype, "factory", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugEditorService.prototype, "init", null);
    DebugEditorService = __decorate([
        inversify_1.injectable()
    ], DebugEditorService);
    return DebugEditorService;
}());
exports.DebugEditorService = DebugEditorService;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/editor/debug-editor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/editor/debug-editor.js ***!
  \**********************************************************************/
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
exports.DebugEditor = void 0;
exports.DebugEditor = Symbol('DebugEditor');


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/editor/debug-exception-widget.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/editor/debug-exception-widget.js ***!
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
exports.DebugExceptionWidget = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var monaco_editor_zone_widget_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-editor-zone-widget */ "./node_modules/@theia/monaco/lib/browser/monaco-editor-zone-widget.js");
var debug_editor_1 = __webpack_require__(/*! ./debug-editor */ "./node_modules/@theia/debug/lib/browser/editor/debug-editor.js");
var DebugExceptionWidget = /** @class */ (function () {
    function DebugExceptionWidget() {
        this.toDispose = new disposable_1.DisposableCollection();
    }
    DebugExceptionWidget.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.toDispose.push(this.zone = new monaco_editor_zone_widget_1.MonacoEditorZoneWidget(this.editor.getControl()));
                this.zone.containerNode.classList.add('theia-debug-exception-widget');
                this.toDispose.push(disposable_1.Disposable.create(function () { return ReactDOM.unmountComponentAtNode(_this.zone.containerNode); }));
                return [2 /*return*/];
            });
        });
    };
    DebugExceptionWidget.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    DebugExceptionWidget.prototype.show = function (_a) {
        var info = _a.info, lineNumber = _a.lineNumber, column = _a.column;
        this.render(info);
        var fontInfo = this.editor.getControl().getOption(monaco.editor.EditorOption.fontInfo);
        this.zone.containerNode.style.fontSize = fontInfo.fontSize + "px";
        this.zone.containerNode.style.lineHeight = fontInfo.lineHeight + "px";
        if (lineNumber !== undefined && column !== undefined) {
            var afterLineNumber = lineNumber;
            var afterColumn = column;
            var heightInLines = 0;
            this.zone.show({ showFrame: true, afterLineNumber: afterLineNumber, afterColumn: afterColumn, heightInLines: heightInLines, frameWidth: 1 });
        }
    };
    DebugExceptionWidget.prototype.hide = function () {
        this.zone.hide();
    };
    DebugExceptionWidget.prototype.render = function (info) {
        var _this = this;
        var stackTrace = info.details && info.details.stackTrace;
        ReactDOM.render(React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'title' }, info.id ? "Exception has occurred: " + info.id : 'Exception has occurred.'),
            info.description && React.createElement("div", { className: 'description' }, info.description),
            stackTrace && React.createElement("div", { className: 'stack-trace' }, stackTrace)), this.zone.containerNode, function () {
            var lineHeight = _this.editor.getControl().getOption(monaco.editor.EditorOption.lineHeight);
            var heightInLines = Math.ceil(_this.zone.containerNode.offsetHeight / lineHeight);
            _this.zone.layout(heightInLines);
        });
    };
    __decorate([
        inversify_1.inject(debug_editor_1.DebugEditor),
        __metadata("design:type", Object)
    ], DebugExceptionWidget.prototype, "editor", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], DebugExceptionWidget.prototype, "init", null);
    DebugExceptionWidget = __decorate([
        inversify_1.injectable()
    ], DebugExceptionWidget);
    return DebugExceptionWidget;
}());
exports.DebugExceptionWidget = DebugExceptionWidget;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/editor/debug-expression-provider.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/editor/debug-expression-provider.js ***!
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
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation and others. All rights reserved.
 *  Licensed under the MIT License. See https://github.com/Microsoft/vscode/blob/master/LICENSE.txt for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugExpressionProvider = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
/**
 * TODO: introduce a new request to LSP to look up an expression range: https://github.com/Microsoft/language-server-protocol/issues/462
 */
var DebugExpressionProvider = /** @class */ (function () {
    function DebugExpressionProvider() {
    }
    DebugExpressionProvider.prototype.get = function (model, selection) {
        var lineContent = model.getLineContent(selection.startLineNumber);
        var _a = this.getExactExpressionStartAndEnd(lineContent, selection.startColumn, selection.endColumn), start = _a.start, end = _a.end;
        return lineContent.substring(start - 1, end);
    };
    DebugExpressionProvider.prototype.getExactExpressionStartAndEnd = function (lineContent, looseStart, looseEnd) {
        var matchingExpression = undefined;
        var startOffset = 0;
        // Some example supported expressions: myVar.prop, a.b.c.d, myVar?.prop, myVar->prop, MyClass::StaticProp, *myVar
        // Match any character except a set of characters which often break interesting sub-expressions
        var expression = /([^()\[\]{}<>\s+\-/%~#^;=|,`!]|\->)+/g;
        // eslint-disable-next-line no-null/no-null
        var result = null;
        // First find the full expression under the cursor
        while (result = expression.exec(lineContent)) {
            var start = result.index + 1;
            var end = start + result[0].length;
            if (start <= looseStart && end >= looseEnd) {
                matchingExpression = result[0];
                startOffset = start;
                break;
            }
        }
        // If there are non-word characters after the cursor, we want to truncate the expression then.
        // For example in expression 'a.b.c.d', if the focus was under 'b', 'a.b' would be evaluated.
        if (matchingExpression) {
            var subExpression = /\w+/g;
            // eslint-disable-next-line no-null/no-null
            var subExpressionResult = null;
            while (subExpressionResult = subExpression.exec(matchingExpression)) {
                var subEnd = subExpressionResult.index + 1 + startOffset + subExpressionResult[0].length;
                if (subEnd >= looseEnd) {
                    break;
                }
            }
            if (subExpressionResult) {
                matchingExpression = matchingExpression.substring(0, subExpression.lastIndex);
            }
        }
        return matchingExpression ?
            { start: startOffset, end: startOffset + matchingExpression.length - 1 } :
            { start: 0, end: 0 };
    };
    DebugExpressionProvider = __decorate([
        inversify_1.injectable()
    ], DebugExpressionProvider);
    return DebugExpressionProvider;
}());
exports.DebugExpressionProvider = DebugExpressionProvider;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/editor/debug-hover-source.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/editor/debug-hover-source.js ***!
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
exports.DebugHoverSource = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var source_tree_1 = __webpack_require__(/*! @theia/core/lib/browser/source-tree */ "./node_modules/@theia/core/lib/browser/source-tree/index.js");
var debug_console_items_1 = __webpack_require__(/*! ../console/debug-console-items */ "./node_modules/@theia/debug/lib/browser/console/debug-console-items.js");
var debug_session_manager_1 = __webpack_require__(/*! ../debug-session-manager */ "./node_modules/@theia/debug/lib/browser/debug-session-manager.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var DebugHoverSource = /** @class */ (function (_super) {
    __extends(DebugHoverSource, _super);
    function DebugHoverSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.elements = [];
        return _this;
    }
    Object.defineProperty(DebugHoverSource.prototype, "expression", {
        get: function () {
            return this._expression;
        },
        enumerable: false,
        configurable: true
    });
    DebugHoverSource.prototype.getElements = function () {
        return this.elements[Symbol.iterator]();
    };
    DebugHoverSource.prototype.renderTitle = function (element) {
        return React.createElement("div", { className: 'theia-debug-hover-title', title: element.value }, element.value);
    };
    DebugHoverSource.prototype.reset = function () {
        this._expression = undefined;
        this.elements = [];
        this.fireDidChange();
    };
    DebugHoverSource.prototype.evaluate = function (expression) {
        return __awaiter(this, void 0, void 0, function () {
            var evaluated, elements, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.doEvaluate(expression)];
                    case 1:
                        evaluated = _b.sent();
                        _a = evaluated;
                        if (!_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, evaluated.getElements()];
                    case 2:
                        _a = (_b.sent());
                        _b.label = 3;
                    case 3:
                        elements = _a;
                        this._expression = evaluated;
                        this.elements = elements ? __spread(elements) : [];
                        this.fireDidChange();
                        return [2 /*return*/, !!evaluated];
                }
            });
        });
    };
    DebugHoverSource.prototype.doEvaluate = function (expression) {
        return __awaiter(this, void 0, void 0, function () {
            var currentSession, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentSession = this.sessions.currentSession;
                        if (!currentSession) {
                            return [2 /*return*/, undefined];
                        }
                        if (!currentSession.capabilities.supportsEvaluateForHovers) return [3 /*break*/, 2];
                        item = new debug_console_items_1.ExpressionItem(expression, function () { return currentSession; });
                        return [4 /*yield*/, item.evaluate('hover')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, item.available && item || undefined];
                    case 2: return [2 /*return*/, this.findVariable(expression.split('.').map(function (word) { return word.trim(); }).filter(function (word) { return !!word; }))];
                }
            });
        });
    };
    DebugHoverSource.prototype.findVariable = function (namesToFind) {
        return __awaiter(this, void 0, void 0, function () {
            var currentFrame, variable, scopes, scopes_1, scopes_1_1, scope, found, e_1_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        currentFrame = this.sessions.currentFrame;
                        if (!currentFrame) {
                            return [2 /*return*/, undefined];
                        }
                        return [4 /*yield*/, currentFrame.getScopes()];
                    case 1:
                        scopes = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 7, 8, 9]);
                        scopes_1 = __values(scopes), scopes_1_1 = scopes_1.next();
                        _b.label = 3;
                    case 3:
                        if (!!scopes_1_1.done) return [3 /*break*/, 6];
                        scope = scopes_1_1.value;
                        return [4 /*yield*/, this.doFindVariable(scope, namesToFind)];
                    case 4:
                        found = _b.sent();
                        if (!variable) {
                            variable = found;
                        }
                        else if (found && found.value !== variable.value) {
                            // only show if all expressions found have the same value
                            return [2 /*return*/, undefined];
                        }
                        _b.label = 5;
                    case 5:
                        scopes_1_1 = scopes_1.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (scopes_1_1 && !scopes_1_1.done && (_a = scopes_1.return)) _a.call(scopes_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/, variable];
                }
            });
        });
    };
    DebugHoverSource.prototype.doFindVariable = function (owner, namesToFind) {
        return __awaiter(this, void 0, void 0, function () {
            var elements, variables, elements_1, elements_1_1, element;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, owner.getElements()];
                    case 1:
                        elements = _b.sent();
                        variables = [];
                        try {
                            for (elements_1 = __values(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
                                element = elements_1_1.value;
                                if (element instanceof debug_console_items_1.DebugVariable && element.name === namesToFind[0]) {
                                    variables.push(element);
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return)) _a.call(elements_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        if (variables.length !== 1) {
                            return [2 /*return*/, undefined];
                        }
                        if (namesToFind.length === 1) {
                            return [2 /*return*/, variables[0]];
                        }
                        else {
                            return [2 /*return*/, this.doFindVariable(variables[0], namesToFind.slice(1))];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], DebugHoverSource.prototype, "sessions", void 0);
    DebugHoverSource = __decorate([
        inversify_1.injectable()
    ], DebugHoverSource);
    return DebugHoverSource;
}(source_tree_1.TreeSource));
exports.DebugHoverSource = DebugHoverSource;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/editor/debug-hover-widget.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/editor/debug-hover-widget.js ***!
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
exports.DebugHoverWidget = exports.createDebugHoverWidgetContainer = void 0;
var debounce = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
var widgets_1 = __webpack_require__(/*! @phosphor/widgets */ "./node_modules/@phosphor/widgets/lib/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var source_tree_1 = __webpack_require__(/*! @theia/core/lib/browser/source-tree */ "./node_modules/@theia/core/lib/browser/source-tree/index.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var debug_session_manager_1 = __webpack_require__(/*! ../debug-session-manager */ "./node_modules/@theia/debug/lib/browser/debug-session-manager.js");
var debug_editor_1 = __webpack_require__(/*! ./debug-editor */ "./node_modules/@theia/debug/lib/browser/editor/debug-editor.js");
var debug_expression_provider_1 = __webpack_require__(/*! ./debug-expression-provider */ "./node_modules/@theia/debug/lib/browser/editor/debug-expression-provider.js");
var debug_hover_source_1 = __webpack_require__(/*! ./debug-hover-source */ "./node_modules/@theia/debug/lib/browser/editor/debug-hover-source.js");
function createDebugHoverWidgetContainer(parent, editor) {
    var child = source_tree_1.SourceTreeWidget.createContainer(parent, {
        virtualized: false
    });
    child.bind(debug_editor_1.DebugEditor).toConstantValue(editor);
    child.bind(debug_hover_source_1.DebugHoverSource).toSelf();
    child.unbind(source_tree_1.SourceTreeWidget);
    child.bind(debug_expression_provider_1.DebugExpressionProvider).toSelf();
    child.bind(DebugHoverWidget).toSelf();
    return child;
}
exports.createDebugHoverWidgetContainer = createDebugHoverWidgetContainer;
var DebugHoverWidget = /** @class */ (function (_super) {
    __extends(DebugHoverWidget, _super);
    function DebugHoverWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toDispose = new disposable_1.DisposableCollection();
        _this.allowEditorOverflow = true;
        _this.domNode = document.createElement('div');
        _this.titleNode = document.createElement('div');
        _this.contentNode = document.createElement('div');
        _this.doSchedule = debounce(function (fn) { return fn(); }, 300);
        return _this;
    }
    DebugHoverWidget_1 = DebugHoverWidget;
    DebugHoverWidget.prototype.getId = function () {
        return DebugHoverWidget_1.ID;
    };
    DebugHoverWidget.prototype.getDomNode = function () {
        return this.domNode;
    };
    DebugHoverWidget.prototype.init = function () {
        var _this = this;
        _super.prototype.init.call(this);
        this.domNode.className = 'theia-debug-hover';
        this.titleNode.className = 'theia-debug-hover-title';
        this.domNode.appendChild(this.titleNode);
        this.contentNode.className = 'theia-debug-hover-content';
        this.domNode.appendChild(this.contentNode);
        this.editor.getControl().addContentWidget(this);
        this.source = this.hoverSource;
        this.toDispose.pushAll([
            this.hoverSource,
            disposable_1.Disposable.create(function () { return _this.editor.getControl().removeContentWidget(_this); }),
            disposable_1.Disposable.create(function () { return _this.hide(); }),
            this.sessions.onDidChange(function () {
                if (!_this.isEditorFrame()) {
                    _this.hide();
                }
            })
        ]);
    };
    DebugHoverWidget.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    DebugHoverWidget.prototype.show = function (options) {
        var _this = this;
        this.schedule(function () { return _this.doShow(options); }, options && options.immediate);
    };
    DebugHoverWidget.prototype.hide = function (options) {
        var _this = this;
        this.schedule(function () { return _this.doHide(); }, options && options.immediate);
    };
    DebugHoverWidget.prototype.schedule = function (fn, immediate) {
        if (immediate === void 0) { immediate = true; }
        if (immediate) {
            this.doSchedule.cancel();
            fn();
        }
        else {
            this.doSchedule(fn);
        }
    };
    DebugHoverWidget.prototype.doHide = function () {
        if (!this.isVisible) {
            return;
        }
        if (this.domNode.contains(document.activeElement)) {
            this.editor.getControl().focus();
        }
        if (this.isAttached) {
            widgets_1.Widget.detach(this);
        }
        this.hoverSource.reset();
        _super.prototype.hide.call(this);
        this.options = undefined;
        this.editor.getControl().layoutContentWidget(this);
    };
    DebugHoverWidget.prototype.doShow = function (options) {
        if (options === void 0) { options = this.options; }
        return __awaiter(this, void 0, void 0, function () {
            var expression, toFocus;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isEditorFrame()) {
                            this.hide();
                            return [2 /*return*/];
                        }
                        if (!options) {
                            this.hide();
                            return [2 /*return*/];
                        }
                        if (this.options && this.options.selection.equalsRange(options.selection)) {
                            return [2 /*return*/];
                        }
                        if (!this.isAttached) {
                            widgets_1.Widget.attach(this, this.contentNode);
                        }
                        _super.prototype.show.call(this);
                        this.options = options;
                        expression = this.expressionProvider.get(this.editor.getControl().getModel(), options.selection);
                        if (!expression) {
                            this.hide();
                            return [2 /*return*/];
                        }
                        toFocus = new disposable_1.DisposableCollection();
                        if (this.options.focus === true) {
                            toFocus.push(this.model.onNodeRefreshed(function () {
                                toFocus.dispose();
                                _this.activate();
                            }));
                        }
                        return [4 /*yield*/, this.hoverSource.evaluate(expression)];
                    case 1:
                        if (!(_a.sent())) {
                            toFocus.dispose();
                            this.hide();
                            return [2 /*return*/];
                        }
                        this.editor.getControl().layoutContentWidget(this);
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugHoverWidget.prototype.isEditorFrame = function () {
        var currentFrame = this.sessions.currentFrame;
        return !!currentFrame && !!currentFrame.source &&
            this.editor.getControl().getModel().uri.toString() === currentFrame.source.uri.toString();
    };
    DebugHoverWidget.prototype.getPosition = function () {
        if (!this.isVisible) {
            return undefined;
        }
        var position = this.options && this.options.selection.getStartPosition();
        var word = position && this.editor.getControl().getModel().getWordAtPosition(position);
        return position && word ? {
            position: new monaco.Position(position.lineNumber, word.startColumn),
            preference: [
                monaco.editor.ContentWidgetPositionPreference.ABOVE,
                monaco.editor.ContentWidgetPositionPreference.BELOW
            ]
        } : undefined;
    };
    DebugHoverWidget.prototype.onUpdateRequest = function (msg) {
        _super.prototype.onUpdateRequest.call(this, msg);
        var expression = this.hoverSource.expression;
        var value = expression && expression.value || '';
        this.titleNode.textContent = value;
        this.titleNode.title = value;
    };
    DebugHoverWidget.prototype.onAfterAttach = function (msg) {
        var _this = this;
        _super.prototype.onAfterAttach.call(this, msg);
        this.addKeyListener(this.domNode, browser_1.Key.ESCAPE, function () { return _this.hide(); });
    };
    var DebugHoverWidget_1;
    DebugHoverWidget.ID = 'debug.editor.hover';
    __decorate([
        inversify_1.inject(debug_editor_1.DebugEditor),
        __metadata("design:type", Object)
    ], DebugHoverWidget.prototype, "editor", void 0);
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], DebugHoverWidget.prototype, "sessions", void 0);
    __decorate([
        inversify_1.inject(debug_hover_source_1.DebugHoverSource),
        __metadata("design:type", debug_hover_source_1.DebugHoverSource)
    ], DebugHoverWidget.prototype, "hoverSource", void 0);
    __decorate([
        inversify_1.inject(debug_expression_provider_1.DebugExpressionProvider),
        __metadata("design:type", debug_expression_provider_1.DebugExpressionProvider)
    ], DebugHoverWidget.prototype, "expressionProvider", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugHoverWidget.prototype, "init", null);
    DebugHoverWidget = DebugHoverWidget_1 = __decorate([
        inversify_1.injectable()
    ], DebugHoverWidget);
    return DebugHoverWidget;
}(source_tree_1.SourceTreeWidget));
exports.DebugHoverWidget = DebugHoverWidget;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/editor/debug-inline-value-decorator.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/editor/debug-inline-value-decorator.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
exports.DebugInlineValueDecorator = exports.INLINE_VALUE_DECORATION_KEY = void 0;
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// Based on https://github.com/theia-ide/vscode/blob/standalone/0.19.x/src/vs/workbench/contrib/debug/browser/debugEditorContribution.ts
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var monaco_editor_service_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-editor-service */ "./node_modules/@theia/monaco/lib/browser/monaco-editor-service.js");
var debug_console_items_1 = __webpack_require__(/*! ../console/debug-console-items */ "./node_modules/@theia/debug/lib/browser/console/debug-console-items.js");
var debug_preferences_1 = __webpack_require__(/*! ../debug-preferences */ "./node_modules/@theia/debug/lib/browser/debug-preferences.js");
// https://github.com/theia-ide/vscode/blob/standalone/0.19.x/src/vs/workbench/contrib/debug/browser/debugEditorContribution.ts#L40-L43
exports.INLINE_VALUE_DECORATION_KEY = 'inlinevaluedecoration';
var MAX_NUM_INLINE_VALUES = 100; // JS Global scope can have 700+ entries. We want to limit ourselves for perf reasons
var MAX_INLINE_DECORATOR_LENGTH = 150; // Max string length of each inline decorator when debugging. If exceeded ... is added
var MAX_TOKENIZATION_LINE_LEN = 500; // If line is too long, then inline values for the line are skipped
var DEFAULT_WORD_REGEXP = monaco.wordHelper.DEFAULT_WORD_REGEXP;
/**
 * MAX SMI (SMall Integer) as defined in v8.
 * one bit is lost for boxing/unboxing flag.
 * one bit is lost for sign flag.
 * See https://thibaultlaurens.github.io/javascript/2013/04/29/how-the-v8-engine-works/#tagged-values
 */
// https://github.com/theia-ide/vscode/blob/standalone/0.19.x/src/vs/base/common/uint.ts#L7-L13
var MAX_SAFE_SMALL_INTEGER = 1 << 30;
;
var DebugInlineValueDecorator = /** @class */ (function () {
    function DebugInlineValueDecorator() {
        this.enabled = false;
        this.wordToLineNumbersMap = new Map(); // TODO: can we get rid of this field?
    }
    DebugInlineValueDecorator.prototype.onStart = function () {
        var _this = this;
        this.editorService.registerDecorationType(exports.INLINE_VALUE_DECORATION_KEY, {});
        this.enabled = !!this.preferences['debug.inlineValues'];
        this.preferences.onPreferenceChanged(function (_a) {
            var preferenceName = _a.preferenceName, newValue = _a.newValue;
            if (preferenceName === 'debug.inlineValues' && !!newValue !== _this.enabled) {
                _this.enabled = !!newValue;
            }
        });
    };
    DebugInlineValueDecorator.prototype.calculateDecorations = function (debugEditorModel, stackFrame) {
        return __awaiter(this, void 0, void 0, function () {
            var model;
            return __generator(this, function (_a) {
                this.wordToLineNumbersMap = undefined;
                model = debugEditorModel.editor.getControl().getModel() || undefined;
                return [2 /*return*/, this.updateInlineValueDecorations(model, stackFrame)];
            });
        });
    };
    // https://github.com/theia-ide/vscode/blob/standalone/0.19.x/src/vs/workbench/contrib/debug/browser/debugEditorContribution.ts#L382-L408
    DebugInlineValueDecorator.prototype.updateInlineValueDecorations = function (model, stackFrame) {
        return __awaiter(this, void 0, void 0, function () {
            var stackFrameRange, scopes, decorationsPerScope;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.enabled || !model || !stackFrame || !stackFrame.source || model.uri.toString() !== stackFrame.source.uri.toString()) {
                            return [2 /*return*/, []];
                        }
                        stackFrameRange = stackFrame.range;
                        if (!stackFrameRange) {
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, stackFrame.getMostSpecificScopes(stackFrameRange)];
                    case 1:
                        scopes = _a.sent();
                        return [4 /*yield*/, Promise.all(scopes.map(function (scope) { return __awaiter(_this, void 0, void 0, function () {
                                var children, _a, _b, range;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            _b = (_a = Array).from;
                                            return [4 /*yield*/, scope.getElements()];
                                        case 1:
                                            children = _b.apply(_a, [_c.sent()]);
                                            range = new monaco.Range(0, 0, stackFrameRange.startLineNumber, stackFrameRange.startColumn);
                                            if (scope.range) {
                                                range = range.setStartPosition(scope.range.startLineNumber, scope.range.startColumn);
                                            }
                                            return [2 /*return*/, this.createInlineValueDecorationsInsideRange(children, range, model)];
                                    }
                                });
                            }); }))];
                    case 2:
                        decorationsPerScope = _a.sent();
                        return [2 /*return*/, decorationsPerScope.reduce(function (previous, current) { return previous.concat(current); }, [])];
                }
            });
        });
    };
    // https://github.com/theia-ide/vscode/blob/standalone/0.19.x/src/vs/workbench/contrib/debug/browser/debugEditorContribution.ts#L410-L452
    DebugInlineValueDecorator.prototype.createInlineValueDecorationsInsideRange = function (expressions, range, model) {
        var e_1, _a;
        var _this = this;
        var nameValueMap = new Map();
        try {
            for (var expressions_1 = __values(expressions), expressions_1_1 = expressions_1.next(); !expressions_1_1.done; expressions_1_1 = expressions_1.next()) {
                var expr = expressions_1_1.value;
                if (expr instanceof debug_console_items_1.DebugVariable) { // XXX: VS Code uses `IExpression` that has `name` and `value`.
                    nameValueMap.set(expr.name, expr.value);
                }
                // Limit the size of map. Too large can have a perf impact
                if (nameValueMap.size >= MAX_NUM_INLINE_VALUES) {
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (expressions_1_1 && !expressions_1_1.done && (_a = expressions_1.return)) _a.call(expressions_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var lineToNamesMap = new Map();
        var wordToPositionsMap = this.getWordToPositionsMap(model);
        // Compute unique set of names on each line
        nameValueMap.forEach(function (_, name) {
            var e_2, _a;
            var positions = wordToPositionsMap.get(name);
            if (positions) {
                try {
                    for (var positions_1 = __values(positions), positions_1_1 = positions_1.next(); !positions_1_1.done; positions_1_1 = positions_1.next()) {
                        var position = positions_1_1.value;
                        if (range.containsPosition(position)) {
                            if (!lineToNamesMap.has(position.lineNumber)) {
                                lineToNamesMap.set(position.lineNumber, []);
                            }
                            if (lineToNamesMap.get(position.lineNumber).indexOf(name) === -1) {
                                lineToNamesMap.get(position.lineNumber).push(name);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (positions_1_1 && !positions_1_1.done && (_a = positions_1.return)) _a.call(positions_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        });
        var decorations = [];
        // Compute decorators for each line
        lineToNamesMap.forEach(function (names, line) {
            var contentText = names.sort(function (first, second) {
                var content = model.getLineContent(line);
                return content.indexOf(first) - content.indexOf(second);
            }).map(function (name) { return name + " = " + nameValueMap.get(name); }).join(', ');
            decorations.push(_this.createInlineValueDecoration(line, contentText));
        });
        return decorations;
    };
    // https://github.com/theia-ide/vscode/blob/standalone/0.19.x/src/vs/workbench/contrib/debug/browser/debugEditorContribution.ts#L454-L485
    DebugInlineValueDecorator.prototype.createInlineValueDecoration = function (lineNumber, contentText) {
        // If decoratorText is too long, trim and add ellipses. This could happen for minified files with everything on a single line
        if (contentText.length > MAX_INLINE_DECORATOR_LENGTH) {
            contentText = contentText.substr(0, MAX_INLINE_DECORATOR_LENGTH) + '...';
        }
        return {
            color: undefined,
            range: {
                startLineNumber: lineNumber,
                endLineNumber: lineNumber,
                startColumn: MAX_SAFE_SMALL_INTEGER,
                endColumn: MAX_SAFE_SMALL_INTEGER
            },
            renderOptions: {
                after: {
                    contentText: contentText,
                    backgroundColor: 'rgba(255, 200, 0, 0.2)',
                    margin: '10px'
                },
                dark: {
                    after: {
                        color: 'rgba(255, 255, 255, 0.5)',
                    }
                },
                light: {
                    after: {
                        color: 'rgba(0, 0, 0, 0.5)',
                    }
                }
            }
        };
    };
    // https://github.com/theia-ide/vscode/blob/standalone/0.19.x/src/vs/workbench/contrib/debug/browser/debugEditorContribution.ts#L487-L531
    DebugInlineValueDecorator.prototype.getWordToPositionsMap = function (model) {
        if (!this.wordToLineNumbersMap) {
            this.wordToLineNumbersMap = new Map();
            if (!model) {
                return this.wordToLineNumbersMap;
            }
            // For every word in every line, map its ranges for fast lookup
            for (var lineNumber = 1, len = model.getLineCount(); lineNumber <= len; ++lineNumber) {
                var lineContent = model.getLineContent(lineNumber);
                // If line is too long then skip the line
                if (lineContent.length > MAX_TOKENIZATION_LINE_LEN) {
                    continue;
                }
                model.forceTokenization(lineNumber);
                var lineTokens = model.getLineTokens(lineNumber);
                for (var tokenIndex = 0, tokenCount = lineTokens.getCount(); tokenIndex < tokenCount; tokenIndex++) {
                    var tokenStartOffset = lineTokens.getStartOffset(tokenIndex);
                    var tokenEndOffset = lineTokens.getEndOffset(tokenIndex);
                    var tokenType = lineTokens.getStandardTokenType(tokenIndex);
                    var tokenStr = lineContent.substring(tokenStartOffset, tokenEndOffset);
                    // Token is a word and not a comment
                    if (tokenType === 0 /* Other */) {
                        DEFAULT_WORD_REGEXP.lastIndex = 0; // We assume tokens will usually map 1:1 to words if they match
                        var wordMatch = DEFAULT_WORD_REGEXP.exec(tokenStr);
                        if (wordMatch) {
                            var word = wordMatch[0];
                            if (!this.wordToLineNumbersMap.has(word)) {
                                this.wordToLineNumbersMap.set(word, []);
                            }
                            this.wordToLineNumbersMap.get(word).push(new monaco.Position(lineNumber, tokenStartOffset));
                        }
                    }
                }
            }
        }
        return this.wordToLineNumbersMap;
    };
    __decorate([
        inversify_1.inject(monaco_editor_service_1.MonacoEditorService),
        __metadata("design:type", monaco_editor_service_1.MonacoEditorService)
    ], DebugInlineValueDecorator.prototype, "editorService", void 0);
    __decorate([
        inversify_1.inject(debug_preferences_1.DebugPreferences),
        __metadata("design:type", Object)
    ], DebugInlineValueDecorator.prototype, "preferences", void 0);
    DebugInlineValueDecorator = __decorate([
        inversify_1.injectable()
    ], DebugInlineValueDecorator);
    return DebugInlineValueDecorator;
}());
exports.DebugInlineValueDecorator = DebugInlineValueDecorator;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/view/debug-action.js":
/*!********************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/view/debug-action.js ***!
  \********************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugAction = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var DebugAction = /** @class */ (function (_super) {
    __extends(DebugAction, _super);
    function DebugAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setRef = function (ref) { return _this.ref = ref || undefined; };
        return _this;
    }
    DebugAction.prototype.render = function () {
        var _a = this.props, enabled = _a.enabled, label = _a.label, iconClass = _a.iconClass;
        var classNames = ['debug-action', 'theia-debug-' + iconClass];
        if (enabled === false) {
            classNames.push(browser_1.DISABLED_CLASS);
        }
        return React.createElement("span", { tabIndex: 0, className: classNames.join(' '), title: label, onClick: this.props.run, ref: this.setRef });
    };
    DebugAction.prototype.focus = function () {
        if (this.ref) {
            this.ref.focus();
        }
    };
    return DebugAction;
}(React.Component));
exports.DebugAction = DebugAction;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/view/debug-breakpoints-source.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/view/debug-breakpoints-source.js ***!
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
exports.DebugBreakpointsSource = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var source_tree_1 = __webpack_require__(/*! @theia/core/lib/browser/source-tree */ "./node_modules/@theia/core/lib/browser/source-tree/index.js");
var debug_view_model_1 = __webpack_require__(/*! ./debug-view-model */ "./node_modules/@theia/debug/lib/browser/view/debug-view-model.js");
var breakpoint_manager_1 = __webpack_require__(/*! ../breakpoint/breakpoint-manager */ "./node_modules/@theia/debug/lib/browser/breakpoint/breakpoint-manager.js");
var debug_exception_breakpoint_1 = __webpack_require__(/*! ./debug-exception-breakpoint */ "./node_modules/@theia/debug/lib/browser/view/debug-exception-breakpoint.js");
var DebugBreakpointsSource = /** @class */ (function (_super) {
    __extends(DebugBreakpointsSource, _super);
    function DebugBreakpointsSource() {
        return _super.call(this, {
            placeholder: 'No breakpoints'
        }) || this;
    }
    DebugBreakpointsSource.prototype.init = function () {
        var _this = this;
        this.fireDidChange();
        this.toDispose.push(this.model.onDidChangeBreakpoints(function () { return _this.fireDidChange(); }));
    };
    DebugBreakpointsSource.prototype.getElements = function () {
        var _a, _b, exceptionBreakpoint, e_1_1, _c, _d, functionBreakpoint, e_2_1, _e, _f, breakpoint, e_3_1;
        var e_1, _g, e_2, _h, e_3, _j;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0:
                    _k.trys.push([0, 5, 6, 7]);
                    _a = __values(this.breakpoints.getExceptionBreakpoints()), _b = _a.next();
                    _k.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 4];
                    exceptionBreakpoint = _b.value;
                    return [4 /*yield*/, new debug_exception_breakpoint_1.DebugExceptionBreakpoint(exceptionBreakpoint, this.breakpoints)];
                case 2:
                    _k.sent();
                    _k.label = 3;
                case 3:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_1_1 = _k.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_b && !_b.done && (_g = _a.return)) _g.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 7:
                    _k.trys.push([7, 12, 13, 14]);
                    _c = __values(this.model.functionBreakpoints), _d = _c.next();
                    _k.label = 8;
                case 8:
                    if (!!_d.done) return [3 /*break*/, 11];
                    functionBreakpoint = _d.value;
                    return [4 /*yield*/, functionBreakpoint];
                case 9:
                    _k.sent();
                    _k.label = 10;
                case 10:
                    _d = _c.next();
                    return [3 /*break*/, 8];
                case 11: return [3 /*break*/, 14];
                case 12:
                    e_2_1 = _k.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 14];
                case 13:
                    try {
                        if (_d && !_d.done && (_h = _c.return)) _h.call(_c);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 14:
                    _k.trys.push([14, 19, 20, 21]);
                    _e = __values(this.model.breakpoints), _f = _e.next();
                    _k.label = 15;
                case 15:
                    if (!!_f.done) return [3 /*break*/, 18];
                    breakpoint = _f.value;
                    return [4 /*yield*/, breakpoint];
                case 16:
                    _k.sent();
                    _k.label = 17;
                case 17:
                    _f = _e.next();
                    return [3 /*break*/, 15];
                case 18: return [3 /*break*/, 21];
                case 19:
                    e_3_1 = _k.sent();
                    e_3 = { error: e_3_1 };
                    return [3 /*break*/, 21];
                case 20:
                    try {
                        if (_f && !_f.done && (_j = _e.return)) _j.call(_e);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7 /*endfinally*/];
                case 21: return [2 /*return*/];
            }
        });
    };
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugBreakpointsSource.prototype, "model", void 0);
    __decorate([
        inversify_1.inject(breakpoint_manager_1.BreakpointManager),
        __metadata("design:type", breakpoint_manager_1.BreakpointManager)
    ], DebugBreakpointsSource.prototype, "breakpoints", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugBreakpointsSource.prototype, "init", null);
    DebugBreakpointsSource = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], DebugBreakpointsSource);
    return DebugBreakpointsSource;
}(source_tree_1.TreeSource));
exports.DebugBreakpointsSource = DebugBreakpointsSource;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/view/debug-breakpoints-widget.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/view/debug-breakpoints-widget.js ***!
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
exports.DebugBreakpointsWidget = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var source_tree_1 = __webpack_require__(/*! @theia/core/lib/browser/source-tree */ "./node_modules/@theia/core/lib/browser/source-tree/index.js");
var debug_breakpoints_source_1 = __webpack_require__(/*! ./debug-breakpoints-source */ "./node_modules/@theia/debug/lib/browser/view/debug-breakpoints-source.js");
var breakpoint_manager_1 = __webpack_require__(/*! ../breakpoint/breakpoint-manager */ "./node_modules/@theia/debug/lib/browser/breakpoint/breakpoint-manager.js");
var debug_view_model_1 = __webpack_require__(/*! ./debug-view-model */ "./node_modules/@theia/debug/lib/browser/view/debug-view-model.js");
var DebugBreakpointsWidget = /** @class */ (function (_super) {
    __extends(DebugBreakpointsWidget, _super);
    function DebugBreakpointsWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DebugBreakpointsWidget_1 = DebugBreakpointsWidget;
    DebugBreakpointsWidget.createContainer = function (parent) {
        var child = source_tree_1.SourceTreeWidget.createContainer(parent, {
            contextMenuPath: DebugBreakpointsWidget_1.CONTEXT_MENU,
            virtualized: false,
            scrollIfActive: true
        });
        child.bind(debug_breakpoints_source_1.DebugBreakpointsSource).toSelf();
        child.unbind(source_tree_1.SourceTreeWidget);
        child.bind(DebugBreakpointsWidget_1).toSelf();
        return child;
    };
    DebugBreakpointsWidget.createWidget = function (parent) {
        return DebugBreakpointsWidget_1.createContainer(parent).get(DebugBreakpointsWidget_1);
    };
    DebugBreakpointsWidget.prototype.init = function () {
        _super.prototype.init.call(this);
        this.id = 'debug:breakpoints:' + this.viewModel.id;
        this.title.label = 'Breakpoints';
        this.toDispose.push(this.breakpointsSource);
        this.source = this.breakpointsSource;
    };
    DebugBreakpointsWidget.prototype.getDefaultNodeStyle = function (node, props) {
        return undefined;
    };
    var DebugBreakpointsWidget_1;
    DebugBreakpointsWidget.CONTEXT_MENU = ['debug-breakpoints-context-menu'];
    DebugBreakpointsWidget.EDIT_MENU = __spread(DebugBreakpointsWidget_1.CONTEXT_MENU, ['a_edit']);
    DebugBreakpointsWidget.REMOVE_MENU = __spread(DebugBreakpointsWidget_1.CONTEXT_MENU, ['b_remove']);
    DebugBreakpointsWidget.ENABLE_MENU = __spread(DebugBreakpointsWidget_1.CONTEXT_MENU, ['c_enable']);
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugBreakpointsWidget.prototype, "viewModel", void 0);
    __decorate([
        inversify_1.inject(breakpoint_manager_1.BreakpointManager),
        __metadata("design:type", breakpoint_manager_1.BreakpointManager)
    ], DebugBreakpointsWidget.prototype, "breakpoints", void 0);
    __decorate([
        inversify_1.inject(debug_breakpoints_source_1.DebugBreakpointsSource),
        __metadata("design:type", debug_breakpoints_source_1.DebugBreakpointsSource)
    ], DebugBreakpointsWidget.prototype, "breakpointsSource", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugBreakpointsWidget.prototype, "init", null);
    DebugBreakpointsWidget = DebugBreakpointsWidget_1 = __decorate([
        inversify_1.injectable()
    ], DebugBreakpointsWidget);
    return DebugBreakpointsWidget;
}(source_tree_1.SourceTreeWidget));
exports.DebugBreakpointsWidget = DebugBreakpointsWidget;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/view/debug-configuration-widget.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/view/debug-configuration-widget.js ***!
  \**********************************************************************************/
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
exports.DebugConfigurationWidget = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/workspace/lib/browser */ "./node_modules/@theia/workspace/lib/browser/index.js");
var debug_console_contribution_1 = __webpack_require__(/*! ../console/debug-console-contribution */ "./node_modules/@theia/debug/lib/browser/console/debug-console-contribution.js");
var debug_configuration_manager_1 = __webpack_require__(/*! ../debug-configuration-manager */ "./node_modules/@theia/debug/lib/browser/debug-configuration-manager.js");
var debug_session_manager_1 = __webpack_require__(/*! ../debug-session-manager */ "./node_modules/@theia/debug/lib/browser/debug-session-manager.js");
var debug_action_1 = __webpack_require__(/*! ./debug-action */ "./node_modules/@theia/debug/lib/browser/view/debug-action.js");
var debug_view_model_1 = __webpack_require__(/*! ./debug-view-model */ "./node_modules/@theia/debug/lib/browser/view/debug-view-model.js");
var debug_frontend_application_contribution_1 = __webpack_require__(/*! ../debug-frontend-application-contribution */ "./node_modules/@theia/debug/lib/browser/debug-frontend-application-contribution.js");
var common_2 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var DebugConfigurationWidget = /** @class */ (function (_super) {
    __extends(DebugConfigurationWidget, _super);
    function DebugConfigurationWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setStepRef = function (stepRef) { return _this.stepRef = stepRef || undefined; };
        _this.setCurrentConfiguration = function (event) {
            var value = event.currentTarget.value;
            if (value === '__ADD_CONF__') {
                _this.manager.addConfiguration();
            }
            else {
                var _a = __read(value.split('__CONF__'), 2), name_1 = _a[0], workspaceFolderUri = _a[1];
                _this.manager.current = _this.manager.find(name_1, workspaceFolderUri);
            }
        };
        _this.start = function () {
            var configuration = _this.manager.current;
            _this.commandRegistry.executeCommand(debug_frontend_application_contribution_1.DebugCommands.START.id, configuration);
        };
        _this.openConfiguration = function () { return _this.manager.openConfiguration(); };
        _this.openConsole = function () { return _this.debugConsole.openView({
            activate: true
        }); };
        return _this;
    }
    DebugConfigurationWidget.prototype.init = function () {
        var _this = this;
        this.addClass('debug-toolbar');
        this.toDispose.push(this.manager.onDidChange(function () { return _this.update(); }));
        this.toDispose.push(this.workspaceService.onWorkspaceChanged(function () { return _this.update(); }));
        this.toDispose.push(this.workspaceService.onWorkspaceLocationChanged(function () { return _this.update(); }));
        this.scrollOptions = undefined;
        this.update();
    };
    DebugConfigurationWidget.prototype.focus = function () {
        var _this = this;
        if (!this.doFocus()) {
            this.onRender.push(common_1.Disposable.create(function () { return _this.doFocus(); }));
            this.update();
        }
    };
    DebugConfigurationWidget.prototype.doFocus = function () {
        if (!this.stepRef) {
            return false;
        }
        this.stepRef.focus();
        return true;
    };
    DebugConfigurationWidget.prototype.render = function () {
        var options = this.options;
        return React.createElement(React.Fragment, null,
            React.createElement(debug_action_1.DebugAction, { run: this.start, label: 'Start Debugging', iconClass: 'start', ref: this.setStepRef }),
            React.createElement("select", { className: 'theia-select debug-configuration', value: this.currentValue, onChange: this.setCurrentConfiguration },
                options.length ? options : React.createElement("option", { value: '__NO_CONF__' }, "No Configurations"),
                React.createElement("option", { disabled: true }, 'Add Configuration...'.replace(/./g, '-')),
                React.createElement("option", { value: '__ADD_CONF__' }, "Add Configuration...")),
            React.createElement(debug_action_1.DebugAction, { run: this.openConfiguration, label: 'Open launch.json', iconClass: 'configure' }),
            React.createElement(debug_action_1.DebugAction, { run: this.openConsole, label: 'Debug Console', iconClass: 'repl' }));
    };
    Object.defineProperty(DebugConfigurationWidget.prototype, "currentValue", {
        get: function () {
            var current = this.manager.current;
            return current ? this.toValue(current) : '__NO_CONF__';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugConfigurationWidget.prototype, "options", {
        get: function () {
            var _this = this;
            return Array.from(this.manager.all).map(function (options, index) {
                return React.createElement("option", { key: index, value: _this.toValue(options) }, _this.toName(options));
            });
        },
        enumerable: false,
        configurable: true
    });
    DebugConfigurationWidget.prototype.toValue = function (_a) {
        var configuration = _a.configuration, workspaceFolderUri = _a.workspaceFolderUri;
        if (!workspaceFolderUri) {
            return configuration.name;
        }
        return configuration.name + '__CONF__' + workspaceFolderUri;
    };
    DebugConfigurationWidget.prototype.toName = function (_a) {
        var configuration = _a.configuration, workspaceFolderUri = _a.workspaceFolderUri;
        if (!workspaceFolderUri || !this.workspaceService.isMultiRootWorkspaceOpened) {
            return configuration.name;
        }
        return configuration.name + ' (' + new uri_1.default(workspaceFolderUri).path.base + ')';
    };
    __decorate([
        inversify_1.inject(common_2.CommandRegistry),
        __metadata("design:type", common_2.CommandRegistry)
    ], DebugConfigurationWidget.prototype, "commandRegistry", void 0);
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugConfigurationWidget.prototype, "viewModel", void 0);
    __decorate([
        inversify_1.inject(debug_configuration_manager_1.DebugConfigurationManager),
        __metadata("design:type", debug_configuration_manager_1.DebugConfigurationManager)
    ], DebugConfigurationWidget.prototype, "manager", void 0);
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], DebugConfigurationWidget.prototype, "sessionManager", void 0);
    __decorate([
        inversify_1.inject(debug_console_contribution_1.DebugConsoleContribution),
        __metadata("design:type", debug_console_contribution_1.DebugConsoleContribution)
    ], DebugConfigurationWidget.prototype, "debugConsole", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], DebugConfigurationWidget.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugConfigurationWidget.prototype, "init", null);
    DebugConfigurationWidget = __decorate([
        inversify_1.injectable()
    ], DebugConfigurationWidget);
    return DebugConfigurationWidget;
}(browser_1.ReactWidget));
exports.DebugConfigurationWidget = DebugConfigurationWidget;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/view/debug-exception-breakpoint.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/view/debug-exception-breakpoint.js ***!
  \**********************************************************************************/
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
exports.DebugExceptionBreakpoint = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var DebugExceptionBreakpoint = /** @class */ (function () {
    function DebugExceptionBreakpoint(data, breakpoints) {
        var _this = this;
        this.data = data;
        this.breakpoints = breakpoints;
        this.toggle = function () { return _this.breakpoints.toggleExceptionBreakpoint(_this.data.raw.filter); };
        this.id = data.raw.filter + ':' + data.raw.label;
    }
    DebugExceptionBreakpoint.prototype.render = function () {
        return React.createElement("div", { title: this.data.raw.label, className: 'theia-source-breakpoint' },
            React.createElement("span", { className: 'theia-debug-breakpoint-icon' }),
            React.createElement("input", { type: 'checkbox', checked: this.data.enabled, onChange: this.toggle }),
            React.createElement("span", { className: 'line-info' }, this.data.raw.label));
    };
    return DebugExceptionBreakpoint;
}());
exports.DebugExceptionBreakpoint = DebugExceptionBreakpoint;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/view/debug-session-widget.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/view/debug-session-widget.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugSessionWidget = exports.DebugSessionWidgetFactory = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var debug_threads_widget_1 = __webpack_require__(/*! ./debug-threads-widget */ "./node_modules/@theia/debug/lib/browser/view/debug-threads-widget.js");
var debug_stack_frames_widget_1 = __webpack_require__(/*! ./debug-stack-frames-widget */ "./node_modules/@theia/debug/lib/browser/view/debug-stack-frames-widget.js");
var debug_breakpoints_widget_1 = __webpack_require__(/*! ./debug-breakpoints-widget */ "./node_modules/@theia/debug/lib/browser/view/debug-breakpoints-widget.js");
var debug_variables_widget_1 = __webpack_require__(/*! ./debug-variables-widget */ "./node_modules/@theia/debug/lib/browser/view/debug-variables-widget.js");
var debug_toolbar_widget_1 = __webpack_require__(/*! ./debug-toolbar-widget */ "./node_modules/@theia/debug/lib/browser/view/debug-toolbar-widget.js");
var debug_view_model_1 = __webpack_require__(/*! ./debug-view-model */ "./node_modules/@theia/debug/lib/browser/view/debug-view-model.js");
var debug_watch_widget_1 = __webpack_require__(/*! ./debug-watch-widget */ "./node_modules/@theia/debug/lib/browser/view/debug-watch-widget.js");
exports.DebugSessionWidgetFactory = Symbol('DebugSessionWidgetFactory');
var DebugSessionWidget = /** @class */ (function (_super) {
    __extends(DebugSessionWidget, _super);
    function DebugSessionWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DebugSessionWidget_1 = DebugSessionWidget;
    DebugSessionWidget.createContainer = function (parent, options) {
        var child = new inversify_1.Container({ defaultScope: 'Singleton' });
        child.parent = parent;
        child.bind(debug_view_model_1.DebugViewOptions).toConstantValue(options);
        child.bind(debug_view_model_1.DebugViewModel).toSelf();
        child.bind(debug_toolbar_widget_1.DebugToolBar).toSelf();
        child.bind(debug_threads_widget_1.DebugThreadsWidget).toDynamicValue(function (_a) {
            var container = _a.container;
            return debug_threads_widget_1.DebugThreadsWidget.createWidget(container);
        });
        child.bind(debug_stack_frames_widget_1.DebugStackFramesWidget).toDynamicValue(function (_a) {
            var container = _a.container;
            return debug_stack_frames_widget_1.DebugStackFramesWidget.createWidget(container);
        });
        child.bind(debug_variables_widget_1.DebugVariablesWidget).toDynamicValue(function (_a) {
            var container = _a.container;
            return debug_variables_widget_1.DebugVariablesWidget.createWidget(container);
        });
        child.bind(debug_watch_widget_1.DebugWatchWidget).toDynamicValue(function (_a) {
            var container = _a.container;
            return debug_watch_widget_1.DebugWatchWidget.createWidget(container);
        });
        child.bind(debug_breakpoints_widget_1.DebugBreakpointsWidget).toDynamicValue(function (_a) {
            var container = _a.container;
            return debug_breakpoints_widget_1.DebugBreakpointsWidget.createWidget(container);
        });
        child.bind(DebugSessionWidget_1).toSelf();
        return child;
    };
    DebugSessionWidget.createWidget = function (parent, options) {
        return DebugSessionWidget_1.createContainer(parent, options).get(DebugSessionWidget_1);
    };
    DebugSessionWidget.prototype.init = function () {
        this.id = 'debug:session:' + this.model.id;
        this.title.label = this.model.label;
        this.title.caption = this.model.label;
        this.title.closable = true;
        this.title.iconClass = 'debug-tab-icon';
        this.addClass('theia-session-container');
        this.viewContainer = this.viewContainerFactory({
            id: 'debug:view-container:' + this.model.id
        });
        this.viewContainer.addWidget(this.threads, { weight: 30 });
        this.viewContainer.addWidget(this.stackFrames, { weight: 20 });
        this.viewContainer.addWidget(this.variables, { weight: 10 });
        this.viewContainer.addWidget(this.watch, { weight: 10 });
        this.viewContainer.addWidget(this.breakpoints, { weight: 10 });
        this.toDispose.pushAll([
            this.toolbar,
            this.viewContainer
        ]);
        var layout = this.layout = new browser_1.PanelLayout();
        layout.addWidget(this.toolbar);
        layout.addWidget(this.viewContainer);
    };
    DebugSessionWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.toolbar.focus();
    };
    DebugSessionWidget.prototype.getTrackableWidgets = function () {
        return this.viewContainer.getTrackableWidgets();
    };
    DebugSessionWidget.prototype.storeState = function () {
        return this.viewContainer.storeState();
    };
    DebugSessionWidget.prototype.restoreState = function (oldState) {
        this.viewContainer.restoreState(oldState);
    };
    var DebugSessionWidget_1;
    __decorate([
        inversify_1.inject(browser_1.ViewContainer.Factory),
        __metadata("design:type", Function)
    ], DebugSessionWidget.prototype, "viewContainerFactory", void 0);
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugSessionWidget.prototype, "model", void 0);
    __decorate([
        inversify_1.inject(debug_toolbar_widget_1.DebugToolBar),
        __metadata("design:type", debug_toolbar_widget_1.DebugToolBar)
    ], DebugSessionWidget.prototype, "toolbar", void 0);
    __decorate([
        inversify_1.inject(debug_threads_widget_1.DebugThreadsWidget),
        __metadata("design:type", debug_threads_widget_1.DebugThreadsWidget)
    ], DebugSessionWidget.prototype, "threads", void 0);
    __decorate([
        inversify_1.inject(debug_stack_frames_widget_1.DebugStackFramesWidget),
        __metadata("design:type", debug_stack_frames_widget_1.DebugStackFramesWidget)
    ], DebugSessionWidget.prototype, "stackFrames", void 0);
    __decorate([
        inversify_1.inject(debug_variables_widget_1.DebugVariablesWidget),
        __metadata("design:type", debug_variables_widget_1.DebugVariablesWidget)
    ], DebugSessionWidget.prototype, "variables", void 0);
    __decorate([
        inversify_1.inject(debug_watch_widget_1.DebugWatchWidget),
        __metadata("design:type", debug_watch_widget_1.DebugWatchWidget)
    ], DebugSessionWidget.prototype, "watch", void 0);
    __decorate([
        inversify_1.inject(debug_breakpoints_widget_1.DebugBreakpointsWidget),
        __metadata("design:type", debug_breakpoints_widget_1.DebugBreakpointsWidget)
    ], DebugSessionWidget.prototype, "breakpoints", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugSessionWidget.prototype, "init", null);
    DebugSessionWidget = DebugSessionWidget_1 = __decorate([
        inversify_1.injectable()
    ], DebugSessionWidget);
    return DebugSessionWidget;
}(browser_1.BaseWidget));
exports.DebugSessionWidget = DebugSessionWidget;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/view/debug-toolbar-widget.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/view/debug-toolbar-widget.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugToolBar = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var widgets_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets */ "./node_modules/@theia/core/lib/browser/widgets/index.js");
var debug_view_model_1 = __webpack_require__(/*! ./debug-view-model */ "./node_modules/@theia/debug/lib/browser/view/debug-view-model.js");
var debug_session_1 = __webpack_require__(/*! ../debug-session */ "./node_modules/@theia/debug/lib/browser/debug-session.js");
var debug_action_1 = __webpack_require__(/*! ./debug-action */ "./node_modules/@theia/debug/lib/browser/view/debug-action.js");
var DebugToolBar = /** @class */ (function (_super) {
    __extends(DebugToolBar, _super);
    function DebugToolBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setStepRef = function (stepRef) { return _this.stepRef = stepRef || undefined; };
        _this.start = function () { return _this.model.start(); };
        _this.restart = function () { return _this.model.restart(); };
        _this.stop = function () { return _this.model.currentSession && _this.model.currentSession.terminate(); };
        _this.continue = function () { return _this.model.currentThread && _this.model.currentThread.continue(); };
        _this.pause = function () { return _this.model.currentThread && _this.model.currentThread.pause(); };
        _this.stepOver = function () { return _this.model.currentThread && _this.model.currentThread.stepOver(); };
        _this.stepIn = function () { return _this.model.currentThread && _this.model.currentThread.stepIn(); };
        _this.stepOut = function () { return _this.model.currentThread && _this.model.currentThread.stepOut(); };
        return _this;
    }
    DebugToolBar.prototype.init = function () {
        var _this = this;
        this.id = 'debug:toolbar:' + this.model.id;
        this.addClass('debug-toolbar');
        this.toDispose.push(this.model);
        this.toDispose.push(this.model.onDidChange(function () { return _this.update(); }));
        this.scrollOptions = undefined;
        this.update();
    };
    DebugToolBar.prototype.focus = function () {
        var _this = this;
        if (!this.doFocus()) {
            this.onRender.push(core_1.Disposable.create(function () { return _this.doFocus(); }));
            this.update();
        }
    };
    DebugToolBar.prototype.doFocus = function () {
        if (!this.stepRef) {
            return false;
        }
        this.stepRef.focus();
        return true;
    };
    DebugToolBar.prototype.render = function () {
        var state = this.model.state;
        return React.createElement(React.Fragment, null,
            this.renderContinue(),
            React.createElement(debug_action_1.DebugAction, { enabled: state === debug_session_1.DebugState.Stopped, run: this.stepOver, label: 'Step Over', iconClass: 'step-over', ref: this.setStepRef }),
            React.createElement(debug_action_1.DebugAction, { enabled: state === debug_session_1.DebugState.Stopped, run: this.stepIn, label: 'Step Into', iconClass: 'step-into' }),
            React.createElement(debug_action_1.DebugAction, { enabled: state === debug_session_1.DebugState.Stopped, run: this.stepOut, label: 'Step Out', iconClass: 'step-out' }),
            React.createElement(debug_action_1.DebugAction, { enabled: state !== debug_session_1.DebugState.Inactive, run: this.restart, label: 'Restart', iconClass: 'restart' }),
            this.renderStart());
    };
    DebugToolBar.prototype.renderStart = function () {
        var state = this.model.state;
        if (state === debug_session_1.DebugState.Inactive && this.model.sessionCount === 1) {
            return React.createElement(debug_action_1.DebugAction, { run: this.start, label: 'Start', iconClass: 'start' });
        }
        return React.createElement(debug_action_1.DebugAction, { enabled: state !== debug_session_1.DebugState.Inactive, run: this.stop, label: 'Stop', iconClass: 'stop' });
    };
    DebugToolBar.prototype.renderContinue = function () {
        var state = this.model.state;
        if (state === debug_session_1.DebugState.Stopped) {
            return React.createElement(debug_action_1.DebugAction, { run: this.continue, label: 'Continue', iconClass: 'continue' });
        }
        return React.createElement(debug_action_1.DebugAction, { enabled: state === debug_session_1.DebugState.Running, run: this.pause, label: 'Pause', iconClass: 'pause' });
    };
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugToolBar.prototype, "model", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugToolBar.prototype, "init", null);
    DebugToolBar = __decorate([
        inversify_1.injectable()
    ], DebugToolBar);
    return DebugToolBar;
}(widgets_1.ReactWidget));
exports.DebugToolBar = DebugToolBar;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/view/debug-variables-source.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/view/debug-variables-source.js ***!
  \******************************************************************************/
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
exports.DebugVariablesSource = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var source_tree_1 = __webpack_require__(/*! @theia/core/lib/browser/source-tree */ "./node_modules/@theia/core/lib/browser/source-tree/index.js");
var debug_view_model_1 = __webpack_require__(/*! ./debug-view-model */ "./node_modules/@theia/debug/lib/browser/view/debug-view-model.js");
var debounce = __webpack_require__(/*! p-debounce */ "./node_modules/p-debounce/index.js");
var DebugVariablesSource = /** @class */ (function (_super) {
    __extends(DebugVariablesSource, _super);
    function DebugVariablesSource() {
        var _this = _super.call(this, {
            placeholder: 'Not paused'
        }) || this;
        _this.refresh = debounce(function () { return _this.fireDidChange(); }, 400);
        return _this;
    }
    DebugVariablesSource.prototype.init = function () {
        var _this = this;
        this.refresh();
        this.toDispose.push(this.model.onDidChange(function () { return _this.refresh(); }));
    };
    DebugVariablesSource.prototype.getElements = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentSession, scopes, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        currentSession = this.model.currentSession;
                        if (!currentSession) return [3 /*break*/, 2];
                        return [4 /*yield*/, currentSession.getScopes()];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = [];
                        _b.label = 3;
                    case 3:
                        scopes = _a;
                        return [2 /*return*/, scopes[Symbol.iterator]()];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugVariablesSource.prototype, "model", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugVariablesSource.prototype, "init", null);
    DebugVariablesSource = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], DebugVariablesSource);
    return DebugVariablesSource;
}(source_tree_1.TreeSource));
exports.DebugVariablesSource = DebugVariablesSource;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/view/debug-variables-widget.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/view/debug-variables-widget.js ***!
  \******************************************************************************/
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
exports.DebugVariablesWidget = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var source_tree_1 = __webpack_require__(/*! @theia/core/lib/browser/source-tree */ "./node_modules/@theia/core/lib/browser/source-tree/index.js");
var debug_variables_source_1 = __webpack_require__(/*! ./debug-variables-source */ "./node_modules/@theia/debug/lib/browser/view/debug-variables-source.js");
var debug_view_model_1 = __webpack_require__(/*! ./debug-view-model */ "./node_modules/@theia/debug/lib/browser/view/debug-view-model.js");
var DebugVariablesWidget = /** @class */ (function (_super) {
    __extends(DebugVariablesWidget, _super);
    function DebugVariablesWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DebugVariablesWidget_1 = DebugVariablesWidget;
    DebugVariablesWidget.createContainer = function (parent) {
        var child = source_tree_1.SourceTreeWidget.createContainer(parent, {
            contextMenuPath: DebugVariablesWidget_1.CONTEXT_MENU,
            virtualized: false,
            scrollIfActive: true
        });
        child.bind(debug_variables_source_1.DebugVariablesSource).toSelf();
        child.unbind(source_tree_1.SourceTreeWidget);
        child.bind(DebugVariablesWidget_1).toSelf();
        return child;
    };
    DebugVariablesWidget.createWidget = function (parent) {
        return DebugVariablesWidget_1.createContainer(parent).get(DebugVariablesWidget_1);
    };
    DebugVariablesWidget.prototype.init = function () {
        _super.prototype.init.call(this);
        this.id = 'debug:variables:' + this.viewModel.id;
        this.title.label = 'Variables';
        this.toDispose.push(this.variables);
        this.source = this.variables;
    };
    var DebugVariablesWidget_1;
    DebugVariablesWidget.CONTEXT_MENU = ['debug-variables-context-menu'];
    DebugVariablesWidget.EDIT_MENU = __spread(DebugVariablesWidget_1.CONTEXT_MENU, ['a_edit']);
    DebugVariablesWidget.WATCH_MENU = __spread(DebugVariablesWidget_1.CONTEXT_MENU, ['b_watch']);
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugVariablesWidget.prototype, "viewModel", void 0);
    __decorate([
        inversify_1.inject(debug_variables_source_1.DebugVariablesSource),
        __metadata("design:type", debug_variables_source_1.DebugVariablesSource)
    ], DebugVariablesWidget.prototype, "variables", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugVariablesWidget.prototype, "init", null);
    DebugVariablesWidget = DebugVariablesWidget_1 = __decorate([
        inversify_1.injectable()
    ], DebugVariablesWidget);
    return DebugVariablesWidget;
}(source_tree_1.SourceTreeWidget));
exports.DebugVariablesWidget = DebugVariablesWidget;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/view/debug-watch-source.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/view/debug-watch-source.js ***!
  \**************************************************************************/
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
exports.DebugWatchSource = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var source_tree_1 = __webpack_require__(/*! @theia/core/lib/browser/source-tree */ "./node_modules/@theia/core/lib/browser/source-tree/index.js");
var debug_view_model_1 = __webpack_require__(/*! ./debug-view-model */ "./node_modules/@theia/debug/lib/browser/view/debug-view-model.js");
var debounce = __webpack_require__(/*! p-debounce */ "./node_modules/p-debounce/index.js");
var DebugWatchSource = /** @class */ (function (_super) {
    __extends(DebugWatchSource, _super);
    function DebugWatchSource() {
        var _this = _super.call(this, {
            placeholder: 'No expressions'
        }) || this;
        _this.refresh = debounce(function () { return _this.fireDidChange(); }, 100);
        return _this;
    }
    DebugWatchSource.prototype.init = function () {
        var _this = this;
        this.refresh();
        this.toDispose.push(this.model.onDidChangeWatchExpressions(function () { return _this.refresh(); }));
    };
    DebugWatchSource.prototype.getElements = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.model.watchExpressions[Symbol.iterator]()];
            });
        });
    };
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugWatchSource.prototype, "model", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugWatchSource.prototype, "init", null);
    DebugWatchSource = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], DebugWatchSource);
    return DebugWatchSource;
}(source_tree_1.TreeSource));
exports.DebugWatchSource = DebugWatchSource;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/view/debug-watch-widget.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/view/debug-watch-widget.js ***!
  \**************************************************************************/
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
exports.DebugWatchWidget = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var source_tree_1 = __webpack_require__(/*! @theia/core/lib/browser/source-tree */ "./node_modules/@theia/core/lib/browser/source-tree/index.js");
var debug_watch_source_1 = __webpack_require__(/*! ./debug-watch-source */ "./node_modules/@theia/debug/lib/browser/view/debug-watch-source.js");
var debug_view_model_1 = __webpack_require__(/*! ./debug-view-model */ "./node_modules/@theia/debug/lib/browser/view/debug-view-model.js");
var DebugWatchWidget = /** @class */ (function (_super) {
    __extends(DebugWatchWidget, _super);
    function DebugWatchWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DebugWatchWidget_1 = DebugWatchWidget;
    DebugWatchWidget.createContainer = function (parent) {
        var child = source_tree_1.SourceTreeWidget.createContainer(parent, {
            contextMenuPath: DebugWatchWidget_1.CONTEXT_MENU,
            virtualized: false,
            scrollIfActive: true
        });
        child.bind(debug_watch_source_1.DebugWatchSource).toSelf();
        child.unbind(source_tree_1.SourceTreeWidget);
        child.bind(DebugWatchWidget_1).toSelf();
        return child;
    };
    DebugWatchWidget.createWidget = function (parent) {
        return DebugWatchWidget_1.createContainer(parent).get(DebugWatchWidget_1);
    };
    DebugWatchWidget.prototype.init = function () {
        _super.prototype.init.call(this);
        this.id = 'debug:watch:' + this.viewModel.id;
        this.title.label = 'Watch';
        this.toDispose.push(this.variables);
        this.source = this.variables;
    };
    var DebugWatchWidget_1;
    DebugWatchWidget.CONTEXT_MENU = ['debug-watch-context-menu'];
    DebugWatchWidget.EDIT_MENU = __spread(DebugWatchWidget_1.CONTEXT_MENU, ['a_edit']);
    DebugWatchWidget.REMOVE_MENU = __spread(DebugWatchWidget_1.CONTEXT_MENU, ['b_remove']);
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugWatchWidget.prototype, "viewModel", void 0);
    __decorate([
        inversify_1.inject(debug_watch_source_1.DebugWatchSource),
        __metadata("design:type", debug_watch_source_1.DebugWatchSource)
    ], DebugWatchWidget.prototype, "variables", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugWatchWidget.prototype, "init", null);
    DebugWatchWidget = DebugWatchWidget_1 = __decorate([
        inversify_1.injectable()
    ], DebugWatchWidget);
    return DebugWatchWidget;
}(source_tree_1.SourceTreeWidget));
exports.DebugWatchWidget = DebugWatchWidget;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/view/debug-widget.js":
/*!********************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/view/debug-widget.js ***!
  \********************************************************************/
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
exports.DebugWidget = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var debug_session_widget_1 = __webpack_require__(/*! ./debug-session-widget */ "./node_modules/@theia/debug/lib/browser/view/debug-session-widget.js");
var debug_configuration_widget_1 = __webpack_require__(/*! ./debug-configuration-widget */ "./node_modules/@theia/debug/lib/browser/view/debug-configuration-widget.js");
var debug_view_model_1 = __webpack_require__(/*! ./debug-view-model */ "./node_modules/@theia/debug/lib/browser/view/debug-view-model.js");
var debug_session_manager_1 = __webpack_require__(/*! ../debug-session-manager */ "./node_modules/@theia/debug/lib/browser/debug-session-manager.js");
var progress_bar_factory_1 = __webpack_require__(/*! @theia/core/lib/browser/progress-bar-factory */ "./node_modules/@theia/core/lib/browser/progress-bar-factory.js");
var DebugWidget = /** @class */ (function (_super) {
    __extends(DebugWidget, _super);
    function DebugWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DebugWidget_1 = DebugWidget;
    DebugWidget.createContainer = function (parent) {
        var child = debug_session_widget_1.DebugSessionWidget.createContainer(parent, {});
        child.bind(debug_configuration_widget_1.DebugConfigurationWidget).toSelf();
        child.bind(DebugWidget_1).toSelf();
        return child;
    };
    DebugWidget.createWidget = function (parent) {
        return DebugWidget_1.createContainer(parent).get(DebugWidget_1);
    };
    DebugWidget.prototype.init = function () {
        var e_1, _a;
        var _this = this;
        this.id = DebugWidget_1.ID;
        this.title.label = DebugWidget_1.LABEL;
        this.title.caption = DebugWidget_1.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'debug-tab-icon';
        this.addClass('theia-debug-container');
        this.toDispose.pushAll([
            this.toolbar,
            this.sessionWidget,
            this.sessionManager.onDidCreateDebugSession(function (session) { return _this.model.push(session); }),
            this.sessionManager.onDidDestroyDebugSession(function (session) { return _this.model.delete(session); })
        ]);
        try {
            for (var _b = __values(this.sessionManager.sessions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var session = _c.value;
                this.model.push(session);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var layout = this.layout = new browser_1.PanelLayout();
        layout.addWidget(this.toolbar);
        layout.addWidget(this.sessionWidget);
        this.toDispose.push(this.progressBarFactory({ container: this.node, insertMode: 'prepend', locationId: 'debug' }));
    };
    DebugWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.toolbar.focus();
    };
    DebugWidget.prototype.getTrackableWidgets = function () {
        return this.sessionWidget.getTrackableWidgets();
    };
    DebugWidget.prototype.storeState = function () {
        return this.sessionWidget.storeState();
    };
    DebugWidget.prototype.restoreState = function (oldState) {
        this.sessionWidget.restoreState(oldState);
    };
    var DebugWidget_1;
    DebugWidget.ID = 'debug';
    DebugWidget.LABEL = 'Debug';
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugWidget.prototype, "model", void 0);
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], DebugWidget.prototype, "sessionManager", void 0);
    __decorate([
        inversify_1.inject(debug_configuration_widget_1.DebugConfigurationWidget),
        __metadata("design:type", debug_configuration_widget_1.DebugConfigurationWidget)
    ], DebugWidget.prototype, "toolbar", void 0);
    __decorate([
        inversify_1.inject(debug_session_widget_1.DebugSessionWidget),
        __metadata("design:type", debug_session_widget_1.DebugSessionWidget)
    ], DebugWidget.prototype, "sessionWidget", void 0);
    __decorate([
        inversify_1.inject(progress_bar_factory_1.ProgressBarFactory),
        __metadata("design:type", Function)
    ], DebugWidget.prototype, "progressBarFactory", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugWidget.prototype, "init", null);
    DebugWidget = DebugWidget_1 = __decorate([
        inversify_1.injectable()
    ], DebugWidget);
    return DebugWidget;
}(browser_1.BaseWidget));
exports.DebugWidget = DebugWidget;


/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/breakpoints-activate-inverse.svg":
/*!**************************************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/breakpoints-activate-inverse.svg ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6IzI1MjUyNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tdnMtYmd7ZmlsbDojYzVjNWM1O308L3N0eWxlPjwvZGVmcz48dGl0bGU+YnJlYWtwb2ludHMtYWN0aXZhdGU8L3RpdGxlPjxnIGlkPSJjYW52YXMiPjxwYXRoIGNsYXNzPSJpY29uLWNhbnZhcy10cmFuc3BhcmVudCIgZD0iTTE2LDBWMTZIMFYwWiIvPjwvZz48ZyBpZD0ib3V0bGluZSIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48cGF0aCBjbGFzcz0iaWNvbi12cy1vdXQiIGQ9Ik0xNiw1LjVBNS41MzYsNS41MzYsMCwwLDEsMTEsMTFhNS41MzYsNS41MzYsMCwwLDEtNS41LDVBNS41NDksNS41NDksMCwwLDEsMCwxMC41LDUuNDY1LDUuNDY1LDAsMCwxLDUsNWE1LjUxMiw1LjUxMiwwLDAsMSwxMSwuNVoiLz48L2c+PGcgaWQ9Imljb25CZyI+PHBhdGggY2xhc3M9Imljb24tdnMtYmciIGQ9Ik0xNSw1LjVBNC4zOTUsNC4zOTUsMCwwLDEsMTEsMTBhMi45NTcsMi45NTcsMCwwLDAtLjItMUEzLjU2NSwzLjU2NSwwLDAsMCwxNCw1LjVhMy41MDcsMy41MDcsMCwwLDAtNy0uM0EzLjU1MiwzLjU1MiwwLDAsMCw2LDVhNC42MjIsNC42MjIsMCwwLDEsNC41LTRBNC40ODEsNC40ODEsMCwwLDEsMTUsNS41Wk01LjUsNkE0LjUsNC41LDAsMSwwLDEwLDEwLjUsNC41LDQuNSwwLDAsMCw1LjUsNloiLz48L2c+PC9zdmc+Cg=="

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/breakpoints-activate.svg":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/breakpoints-activate.svg ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6I2Y2ZjZmNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tdnMtYmd7ZmlsbDojNDI0MjQyO308L3N0eWxlPjwvZGVmcz48dGl0bGU+YnJlYWtwb2ludHMtYWN0aXZhdGU8L3RpdGxlPjxnIGlkPSJjYW52YXMiPjxwYXRoIGNsYXNzPSJpY29uLWNhbnZhcy10cmFuc3BhcmVudCIgZD0iTTE2LDBWMTZIMFYwWiIvPjwvZz48ZyBpZD0ib3V0bGluZSIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48cGF0aCBjbGFzcz0iaWNvbi12cy1vdXQiIGQ9Ik0xNiw1LjVBNS41MzYsNS41MzYsMCwwLDEsMTEsMTFhNS41MzYsNS41MzYsMCwwLDEtNS41LDVBNS41NDksNS41NDksMCwwLDEsMCwxMC41LDUuNDY1LDUuNDY1LDAsMCwxLDUsNWE1LjUxMiw1LjUxMiwwLDAsMSwxMSwuNVoiLz48L2c+PGcgaWQ9Imljb25CZyI+PHBhdGggY2xhc3M9Imljb24tdnMtYmciIGQ9Ik0xNSw1LjVBNC4zOTUsNC4zOTUsMCwwLDEsMTEsMTBhMi45NTcsMi45NTcsMCwwLDAtLjItMUEzLjU2NSwzLjU2NSwwLDAsMCwxNCw1LjVhMy41MDcsMy41MDcsMCwwLDAtNy0uM0EzLjU1MiwzLjU1MiwwLDAsMCw2LDVhNC42MjIsNC42MjIsMCwwLDEsNC41LTRBNC40ODEsNC40ODEsMCwwLDEsMTUsNS41Wk01LjUsNkE0LjUsNC41LDAsMSwwLDEwLDEwLjUsNC41LDQuNSwwLDAsMCw1LjUsNloiLz48L2c+PC9zdmc+Cg=="

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/configure-inverse.svg":
/*!***************************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/configure-inverse.svg ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6IzI1MjUyNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tdnMtYmd7ZmlsbDojYzVjNWM1O308L3N0eWxlPjwvZGVmcz48dGl0bGU+Y29uZmlndXJlPC90aXRsZT48ZyBpZD0iY2FudmFzIj48cGF0aCBjbGFzcz0iaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQiIGQ9Ik0xNiwwVjE2SDBWMFoiLz48L2c+PGcgaWQ9Im91dGxpbmUiIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+PHBhdGggY2xhc3M9Imljb24tdnMtb3V0IiBkPSJNMTYsMTAuMDE1bC0yLjIzOC4zNzIsMS4zMTgsMS44NDdMMTIuMjMzLDE1LjA4bC0xLjg0Ny0xLjMxOEwxMC4wMTMsMTZINS45ODZsLS4zNzMtMi4yMzdMMy43NjcsMTUuMDguOTE5LDEyLjIzM2wxLjMxOS0xLjg0N0wwLDEwLjAxM1Y1Ljk4NmwyLjIzOC0uMzczTC45MTksMy43NjcsMy43NjguOTE5LDUuNjEzLDIuMjM4LDUuOTg2LDBoNC4wMjhsLjM3MiwyLjIzOEwxMi4yMzMuOTE5LDE1LjA4LDMuNzY4LDEzLjc2Miw1LjYxMywxNiw1Ljk4NloiLz48L2c+PGcgaWQ9Imljb25CZyI+PHBhdGggY2xhc3M9Imljb24tdnMtYmciIGQ9Ik0xMi44NzYsOS41MjEsMTUsOS4xNjdWNi44MzRMMTIuODc5LDYuNDhhNS4xMiw1LjEyLDAsMCwwLS4zNTQtLjg1NGwxLjI1LTEuNzUtMS42NS0xLjY1TDEwLjM3MywzLjQ3N2MtLjEzNy0uMDcyLS4yNjItLjE1OS0uNDA4LS4yMTlzLS4zLS4wODctLjQ0NC0uMTMzTDkuMTY3LDFINi44MzRMNi40OCwzLjEyMWE1LjExOCw1LjExOCwwLDAsMC0uODU0LjM1NGwtMS43NS0xLjI1LTEuNjUsMS42NUwzLjQ3Nyw1LjYyN2MtLjA3Mi4xMzctLjE1OS4yNjItLjIxOS40MDhzLS4wODcuMy0uMTMzLjQ0NEwxLDYuODMzVjkuMTY2bDIuMTIxLjM1NGE1LjEyMiw1LjEyMiwwLDAsMCwuMzU0Ljg1NGwtMS4yNSwxLjc1LDEuNjUsMS42NSwxLjc1Mi0xLjI1MmMuMTM3LjA3Mi4yNjIuMTU5LjQwOC4yMnMuMy4wODcuNDQ0LjEzM0w2LjgzMywxNUg5LjE2NmwuMzU0LTIuMTIxYTUuMTIxLDUuMTIxLDAsMCwwLC44NTQtLjM1NGwxLjc1LDEuMjUsMS42NS0xLjY1LTEuMjUyLTEuNzUyYy4wNzItLjEzNy4xNTktLjI2My4yMTktLjQwOVMxMi44Myw5LjY2OSwxMi44NzYsOS41MjFaTTgsMTAuMjEyQTIuMjEyLDIuMjEyLDAsMSwxLDEwLjIxMiw4LDIuMjEyLDIuMjEyLDAsMCwxLDgsMTAuMjEyWiIvPjwvZz48L3N2Zz4K"

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/configure.svg":
/*!*******************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/configure.svg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6I2Y2ZjZmNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tdnMtYmd7ZmlsbDojNDI0MjQyO308L3N0eWxlPjwvZGVmcz48dGl0bGU+Y29uZmlndXJlPC90aXRsZT48ZyBpZD0iY2FudmFzIj48cGF0aCBjbGFzcz0iaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQiIGQ9Ik0xNiwwVjE2SDBWMFoiLz48L2c+PGcgaWQ9Im91dGxpbmUiIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+PHBhdGggY2xhc3M9Imljb24tdnMtb3V0IiBkPSJNMTYsMTAuMDE1bC0yLjIzOC4zNzIsMS4zMTgsMS44NDdMMTIuMjMzLDE1LjA4bC0xLjg0Ny0xLjMxOEwxMC4wMTMsMTZINS45ODZsLS4zNzMtMi4yMzdMMy43NjcsMTUuMDguOTE5LDEyLjIzM2wxLjMxOS0xLjg0N0wwLDEwLjAxM1Y1Ljk4NmwyLjIzOC0uMzczTC45MTksMy43NjcsMy43NjguOTE5LDUuNjEzLDIuMjM4LDUuOTg2LDBoNC4wMjhsLjM3MiwyLjIzOEwxMi4yMzMuOTE5LDE1LjA4LDMuNzY4LDEzLjc2Miw1LjYxMywxNiw1Ljk4NloiLz48L2c+PGcgaWQ9Imljb25CZyI+PHBhdGggY2xhc3M9Imljb24tdnMtYmciIGQ9Ik0xMi44NzYsOS41MjEsMTUsOS4xNjdWNi44MzRMMTIuODc5LDYuNDhhNS4xMiw1LjEyLDAsMCwwLS4zNTQtLjg1NGwxLjI1LTEuNzUtMS42NS0xLjY1TDEwLjM3MywzLjQ3N2MtLjEzNy0uMDcyLS4yNjItLjE1OS0uNDA4LS4yMTlzLS4zLS4wODctLjQ0NC0uMTMzTDkuMTY3LDFINi44MzRMNi40OCwzLjEyMWE1LjExOCw1LjExOCwwLDAsMC0uODU0LjM1NGwtMS43NS0xLjI1LTEuNjUsMS42NUwzLjQ3Nyw1LjYyN2MtLjA3Mi4xMzctLjE1OS4yNjItLjIxOS40MDhzLS4wODcuMy0uMTMzLjQ0NEwxLDYuODMzVjkuMTY2bDIuMTIxLjM1NGE1LjEyMiw1LjEyMiwwLDAsMCwuMzU0Ljg1NGwtMS4yNSwxLjc1LDEuNjUsMS42NSwxLjc1Mi0xLjI1MmMuMTM3LjA3Mi4yNjIuMTU5LjQwOC4yMnMuMy4wODcuNDQ0LjEzM0w2LjgzMywxNUg5LjE2NmwuMzU0LTIuMTIxYTUuMTIxLDUuMTIxLDAsMCwwLC44NTQtLjM1NGwxLjc1LDEuMjUsMS42NS0xLjY1LTEuMjUyLTEuNzUyYy4wNzItLjEzNy4xNTktLjI2My4yMTktLjQwOVMxMi44Myw5LjY2OSwxMi44NzYsOS41MjFaTTgsMTAuMjEyQTIuMjEyLDIuMjEyLDAsMSwxLDEwLjIxMiw4LDIuMjEyLDIuMjEyLDAsMCwxLDgsMTAuMjEyWiIvPjwvZz48L3N2Zz4K"

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/continue-inverse.svg":
/*!**************************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/continue-inverse.svg ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6IzI1MjUyNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tdnMtYWN0aW9uLWJsdWV7ZmlsbDojNzViZWZmO308L3N0eWxlPjwvZGVmcz48dGl0bGU+Y29udGludWU8L3RpdGxlPjxnIGlkPSJjYW52YXMiPjxwYXRoIGNsYXNzPSJpY29uLWNhbnZhcy10cmFuc3BhcmVudCIgZD0iTTE2LDBWMTZIMFYwWiIvPjwvZz48ZyBpZD0ib3V0bGluZSIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48cGF0aCBjbGFzcz0iaWNvbi12cy1vdXQiIGQ9Ik0xNS42NCw4bC03LjgsNkgyVjJINy44NFoiLz48L2c+PGcgaWQ9Imljb25CZyI+PHBhdGggY2xhc3M9Imljb24tdnMtYWN0aW9uLWJsdWUiIGQ9Ik0zLDNINVYxM0gzWk03LjUsM1YxM0wxNCw4WiIvPjwvZz48L3N2Zz4K"

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/continue.svg":
/*!******************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/continue.svg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6I2Y2ZjZmNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tdnMtYWN0aW9uLWJsdWV7ZmlsbDojMDA1MzljO308L3N0eWxlPjwvZGVmcz48dGl0bGU+Y29udGludWU8L3RpdGxlPjxnIGlkPSJjYW52YXMiPjxwYXRoIGNsYXNzPSJpY29uLWNhbnZhcy10cmFuc3BhcmVudCIgZD0iTTE2LDBWMTZIMFYwWiIvPjwvZz48ZyBpZD0ib3V0bGluZSIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48cGF0aCBjbGFzcz0iaWNvbi12cy1vdXQiIGQ9Ik0xNS42NCw4bC03LjgsNkgyVjJINy44NFoiLz48L2c+PGcgaWQ9Imljb25CZyI+PHBhdGggY2xhc3M9Imljb24tdnMtYWN0aW9uLWJsdWUiIGQ9Ik0zLDNINVYxM0gzWk03LjUsM1YxM0wxNCw4WiIvPjwvZz48L3N2Zz4K"

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/debug-bright.useable.css":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/debug-bright.useable.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var refs = 0;
var dispose;
var content = __webpack_require__(/*! !../../../../../css-loader!./debug-bright.useable.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/debug/src/browser/style/debug-bright.useable.css");
var options = {"singleton":true,"attrs":{"id":"theia-theme"},"hmr":true};
options.insertInto = undefined;

if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) exports.locals = content.locals;

exports.use = exports.ref = function() {
	if(!(refs++)) {
		dispose = __webpack_require__(/*! ../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
	}

	return exports;
};

exports.unuse = exports.unref = function() {
  if(refs > 0 && !(--refs)) {
	   dispose();
		 dispose = null;
  }
};
if(false) { var lastRefs; }

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/debug-dark.useable.css":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/debug-dark.useable.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var refs = 0;
var dispose;
var content = __webpack_require__(/*! !../../../../../css-loader!./debug-dark.useable.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/debug/src/browser/style/debug-dark.useable.css");
var options = {"singleton":true,"attrs":{"id":"theia-theme"},"hmr":true};
options.insertInto = undefined;

if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) exports.locals = content.locals;

exports.use = exports.ref = function() {
	if(!(refs++)) {
		dispose = __webpack_require__(/*! ../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
	}

	return exports;
};

exports.unuse = exports.unref = function() {
  if(refs > 0 && !(--refs)) {
	   dispose();
		 dispose = null;
  }
};
if(false) { var lastRefs; }

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/pause-inverse.svg":
/*!***********************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/pause-inverse.svg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6IzI1MjUyNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tdnMtYWN0aW9uLWJsdWV7ZmlsbDojNzViZWZmO308L3N0eWxlPjwvZGVmcz48dGl0bGU+cGF1c2U8L3RpdGxlPjxnIGlkPSJjYW52YXMiPjxwYXRoIGNsYXNzPSJpY29uLWNhbnZhcy10cmFuc3BhcmVudCIgZD0iTTE2LDBWMTZIMFYwWiIvPjwvZz48ZyBpZD0ib3V0bGluZSIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48cGF0aCBjbGFzcz0iaWNvbi12cy1vdXQiIGQ9Ik0xMywyVjE0SDguNVYyWk0zLDE0SDcuNVYySDNaIi8+PC9nPjxnIGlkPSJpY29uQmciPjxwYXRoIGNsYXNzPSJpY29uLXZzLWFjdGlvbi1ibHVlIiBkPSJNNCwzSDYuNVYxM0g0Wk05LjUsM1YxM0gxMlYzWiIvPjwvZz48L3N2Zz4K"

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/pause.svg":
/*!***************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/pause.svg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6I2Y2ZjZmNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tdnMtYWN0aW9uLWJsdWV7ZmlsbDojMDA1MzljO308L3N0eWxlPjwvZGVmcz48dGl0bGU+cGF1c2U8L3RpdGxlPjxnIGlkPSJjYW52YXMiPjxwYXRoIGNsYXNzPSJpY29uLWNhbnZhcy10cmFuc3BhcmVudCIgZD0iTTE2LDBWMTZIMFYwWiIvPjwvZz48ZyBpZD0ib3V0bGluZSIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48cGF0aCBjbGFzcz0iaWNvbi12cy1vdXQiIGQ9Ik0xMywyVjE0SDguNVYyWk0zLDE0SDcuNVYySDNaIi8+PC9nPjxnIGlkPSJpY29uQmciPjxwYXRoIGNsYXNzPSJpY29uLXZzLWFjdGlvbi1ibHVlIiBkPSJNNCwzSDYuNVYxM0g0Wk05LjUsM1YxM0gxMlYzWiIvPjwvZz48L3N2Zz4K"

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/repl-inverse.svg":
/*!**********************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/repl-inverse.svg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6IzI1MjUyNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tdnMtYmd7ZmlsbDojYzVjNWM1O308L3N0eWxlPjwvZGVmcz48dGl0bGU+cmVwbDwvdGl0bGU+PGcgaWQ9ImNhbnZhcyI+PHBhdGggY2xhc3M9Imljb24tY2FudmFzLXRyYW5zcGFyZW50IiBkPSJNMTYsMFYxNkgwVjBaIi8+PC9nPjxnIGlkPSJvdXRsaW5lIiBzdHlsZT0iZGlzcGxheTogbm9uZTsiPjxwYXRoIGNsYXNzPSJpY29uLXZzLW91dCIgZD0iTTE2LDJWMTRIMFYyWiIvPjwvZz48ZyBpZD0iaWNvbkJnIj48cGF0aCBpZD0iaWNvbkJnLTIiIGRhdGEtbmFtZT0iaWNvbkJnIiBjbGFzcz0iaWNvbi12cy1iZyIgZD0iTTEsM1YxM0gxNVYzWm0xMyw5SDJWNEgxNFpNNy41LDgsNC44NzUsMTAuNzUsNCw5LjgzMyw1Ljc1LDgsNCw2LjE2N2wuODc1LS45MTdaIi8+PC9nPjwvc3ZnPgo="

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/repl.svg":
/*!**************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/repl.svg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6I2Y2ZjZmNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tdnMtYmd7ZmlsbDojNDI0MjQyO308L3N0eWxlPjwvZGVmcz48dGl0bGU+cmVwbDwvdGl0bGU+PGcgaWQ9ImNhbnZhcyI+PHBhdGggY2xhc3M9Imljb24tY2FudmFzLXRyYW5zcGFyZW50IiBkPSJNMTYsMFYxNkgwVjBaIi8+PC9nPjxnIGlkPSJvdXRsaW5lIiBzdHlsZT0iZGlzcGxheTogbm9uZTsiPjxwYXRoIGNsYXNzPSJpY29uLXZzLW91dCIgZD0iTTE2LDJWMTRIMFYyWiIvPjwvZz48ZyBpZD0iaWNvbkJnIj48cGF0aCBpZD0iaWNvbkJnLTIiIGRhdGEtbmFtZT0iaWNvbkJnIiBjbGFzcz0iaWNvbi12cy1iZyIgZD0iTTEsM1YxM0gxNVYzWm0xMyw5SDJWNEgxNFpNNy41LDgsNC44NzUsMTAuNzUsNCw5LjgzMyw1Ljc1LDgsNCw2LjE2N2wuODc1LS45MTdaIi8+PC9nPjwvc3ZnPgo="

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/restart-inverse.svg":
/*!*************************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/restart-inverse.svg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxzdHlsZT4uc3Qwe2ZpbGw6IzI1MjUyNjtmaWxsLW9wYWNpdHk6MH0uc3Qxe2Rpc3BsYXk6bm9uZX0uc3Qye2Rpc3BsYXk6aW5saW5lO2ZpbGw6IzI1MjUyNn0uc3Qze2ZpbGw6Izg5ZDE4NX08L3N0eWxlPjx0aXRsZT5yZXN0YXJ0PC90aXRsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTYgMHYxNkgwVjBoMTZ6IiBpZD0iY2FudmFzIi8+PGcgaWQ9Im91dGxpbmUiIGNsYXNzPSJzdDEiIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+PHBhdGggY2xhc3M9InN0MiIgZD0iTTguNSAxQzYuOSAxIDUuMyAxLjUgNCAyLjVWMUgwdjhoMy4xTDEgOS42bC4zIDFjMS4xIDQgNS4zIDYuMyA5LjMgNS4yczYuMy01LjMgNS4yLTkuM0MxNC44IDMuMiAxMS45IDEgOC41IDF6bTAgMTFjLTEuNiAwLTIuOS0xLTMuNC0yLjVMNSA5aDNWNWguNUMxMC40IDUgMTIgNi42IDEyIDguNVMxMC40IDEyIDguNSAxMnoiLz48L2c+PHBhdGggY2xhc3M9InN0MyIgZD0iTTE1IDhjMCAzLjYtMi45IDYuNS02LjUgNi41LTIuOSAwLTUuNS0xLjktNi4zLTQuN2wxLjktLjVjLjcgMi40IDMuMiAzLjggNS42IDMuMSAyLjQtLjcgMy44LTMuMiAzLjEtNS42UzkuNyAzIDcuMyAzLjdjLTEgLjMtMS45LjktMi41IDEuOEg3djJIMXYtNmgydjMuMWMxLjktMyA1LjktNCA4LjktMi4xQzEzLjggMy43IDE1IDUuNyAxNSA4eiIgaWQ9Imljb25CZyIvPjwvc3ZnPgo="

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/restart.svg":
/*!*****************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/restart.svg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxzdHlsZT4uc3Qwe2ZpbGw6I2Y2ZjZmNjtmaWxsLW9wYWNpdHk6MH0uc3Qxe2Rpc3BsYXk6bm9uZX0uc3Qye2Rpc3BsYXk6aW5saW5lO2ZpbGw6I2Y2ZjZmNn0uc3Qze2ZpbGw6IzM4OGEzNH08L3N0eWxlPjx0aXRsZT5yZXN0YXJ0PC90aXRsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTYgMHYxNkgwVjBoMTZ6IiBpZD0iY2FudmFzIi8+PGcgaWQ9Im91dGxpbmUiIGNsYXNzPSJzdDEiIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+PHBhdGggY2xhc3M9InN0MiIgZD0iTTguNSAxQzYuOSAxIDUuMyAxLjUgNCAyLjVWMUgwdjhoMy4xTDEgOS42bC4zIDFjMS4xIDQgNS4zIDYuMyA5LjMgNS4yczYuMy01LjMgNS4yLTkuM0MxNC44IDMuMiAxMS45IDEgOC41IDF6bTAgMTFjLTEuNiAwLTIuOS0xLTMuNC0yLjVMNSA5aDNWNWguNUMxMC40IDUgMTIgNi42IDEyIDguNVMxMC40IDEyIDguNSAxMnoiLz48L2c+PHBhdGggY2xhc3M9InN0MyIgZD0iTTE1IDhjMCAzLjYtMi45IDYuNS02LjUgNi41LTIuOSAwLTUuNS0xLjktNi4zLTQuN2wxLjktLjVjLjcgMi40IDMuMiAzLjggNS42IDMuMSAyLjQtLjcgMy44LTMuMiAzLjEtNS42UzkuNyAzIDcuMyAzLjdjLTEgLjMtMS45LjktMi41IDEuOEg3djJIMXYtNmgydjMuMWMxLjktMyA1LjktNCA4LjktMi4xQzEzLjggMy43IDE1IDUuNyAxNSA4eiIgaWQ9Imljb25CZyIvPjwvc3ZnPgo="

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/start-inverse.svg":
/*!***********************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/start-inverse.svg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6IzI1MjUyNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tdnMtYWN0aW9uLWdyZWVue2ZpbGw6Izg5ZDE4NTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmNvbnRpbnVlPC90aXRsZT48ZyBpZD0iY2FudmFzIj48cGF0aCBjbGFzcz0iaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQiIGQ9Ik0xNiwwVjE2SDBWMFoiLz48L2c+PGcgaWQ9Im91dGxpbmUiIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+PHBhdGggY2xhc3M9Imljb24tdnMtb3V0IiBkPSJNMTQuMzM0LDgsMy42NjcsMTZIM1YwaC42NjdaIi8+PC9nPjxnIGlkPSJpY29uQmciPjxwYXRoIGNsYXNzPSJpY29uLXZzLWFjdGlvbi1ncmVlbiIgZD0iTTQsMS41djEzTDEyLjY2Nyw4LDQsMS41WiIvPjwvZz48L3N2Zz4K"

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/start.svg":
/*!***************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/start.svg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6I2Y2ZjZmNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tdnMtYWN0aW9uLWdyZWVue2ZpbGw6IzM4OGEzNDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmNvbnRpbnVlPC90aXRsZT48ZyBpZD0iY2FudmFzIj48cGF0aCBjbGFzcz0iaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQiIGQ9Ik0xNiwwVjE2SDBWMFoiLz48L2c+PGcgaWQ9Im91dGxpbmUiIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+PHBhdGggY2xhc3M9Imljb24tdnMtb3V0IiBkPSJNMTQuMzM0LDgsMy42NjcsMTZIM1YwaC42NjdaIi8+PC9nPjxnIGlkPSJpY29uQmciPjxwYXRoIGNsYXNzPSJpY29uLXZzLWFjdGlvbi1ncmVlbiIgZD0iTTQsMS41djEzTDEyLjY2Nyw4LDQsMS41WiIvPjwvZz48L3N2Zz4K"

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/step-into-inverse.svg":
/*!***************************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/step-into-inverse.svg ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6IzI1MjUyNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tdnMtYmd7ZmlsbDojYzVjNWM1O30uaWNvbi12cy1hY3Rpb24tYmx1ZXtmaWxsOiM3NWJlZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5zdGVwLWludG88L3RpdGxlPjxnIGlkPSJjYW52YXMiPjxwYXRoIGNsYXNzPSJpY29uLWNhbnZhcy10cmFuc3BhcmVudCIgZD0iTTE2LDBWMTZIMFYwWiIvPjwvZz48ZyBpZD0ib3V0bGluZSIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48cGF0aCBjbGFzcz0iaWNvbi12cy1vdXQiIGQ9Ik0xMSwxM2EzLDMsMCwxLDEtNC4zNzUtMi42NTFMMi41NTYsNi4yOCw1LjAzLDMuODA2bC45Ny45N1YwaDRWNC43NzVsLjk3LS45N0wxMy40NDQsNi4yOCw5LjM3NSwxMC4zNDlBMi45OTEsMi45OTEsMCwwLDEsMTEsMTNaIi8+PC9nPjxnIGlkPSJpY29uQmciPjxwYXRoIGNsYXNzPSJpY29uLXZzLWJnIiBkPSJNOCwxMWEyLDIsMCwxLDEtMiwyQTIsMiwwLDAsMSw4LDExWiIvPjwvZz48ZyBpZD0iY29sb3JBY3Rpb24iPjxwYXRoIGNsYXNzPSJpY29uLXZzLWFjdGlvbi1ibHVlIiBkPSJNMTIuMDMsNi4yOCw4LDEwLjMxMSwzLjk3LDYuMjgsNS4wMyw1LjIyLDcsNy4xODlWMUg5VjcuMTg5bDEuOTctMS45N1oiLz48L2c+PC9zdmc+Cg=="

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/step-into.svg":
/*!*******************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/step-into.svg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6I2Y2ZjZmNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tdnMtYmd7ZmlsbDojNDI0MjQyO30uaWNvbi12cy1hY3Rpb24tYmx1ZXtmaWxsOiMwMDUzOWM7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5zdGVwLWludG88L3RpdGxlPjxnIGlkPSJjYW52YXMiPjxwYXRoIGNsYXNzPSJpY29uLWNhbnZhcy10cmFuc3BhcmVudCIgZD0iTTE2LDBWMTZIMFYwWiIvPjwvZz48ZyBpZD0ib3V0bGluZSIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48cGF0aCBjbGFzcz0iaWNvbi12cy1vdXQiIGQ9Ik0xMSwxM2EzLDMsMCwxLDEtNC4zNzUtMi42NTFMMi41NTYsNi4yOCw1LjAzLDMuODA2bC45Ny45N1YwaDRWNC43NzVsLjk3LS45N0wxMy40NDQsNi4yOCw5LjM3NSwxMC4zNDlBMi45OTEsMi45OTEsMCwwLDEsMTEsMTNaIi8+PC9nPjxnIGlkPSJpY29uQmciPjxwYXRoIGNsYXNzPSJpY29uLXZzLWJnIiBkPSJNOCwxMWEyLDIsMCwxLDEtMiwyQTIsMiwwLDAsMSw4LDExWiIvPjwvZz48ZyBpZD0iY29sb3JBY3Rpb24iPjxwYXRoIGNsYXNzPSJpY29uLXZzLWFjdGlvbi1ibHVlIiBkPSJNMTIuMDMsNi4yOCw4LDEwLjMxMSwzLjk3LDYuMjgsNS4wMyw1LjIyLDcsNy4xODlWMUg5VjcuMTg5bDEuOTctMS45N1oiLz48L2c+PC9zdmc+Cg=="

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/step-out-inverse.svg":
/*!**************************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/step-out-inverse.svg ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6IzI1MjUyNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tdnMtYmd7ZmlsbDojYzVjNWM1O30uaWNvbi12cy1hY3Rpb24tYmx1ZXtmaWxsOiM3NWJlZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5zdGVwLW91dDwvdGl0bGU+PGcgaWQ9ImNhbnZhcyI+PHBhdGggY2xhc3M9Imljb24tY2FudmFzLXRyYW5zcGFyZW50IiBkPSJNMTYsMTZIMFYwSDE2WiIvPjwvZz48ZyBpZD0ib3V0bGluZSIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48cGF0aCBjbGFzcz0iaWNvbi12cy1vdXQiIGQ9Ik0xMCwxMC43OGEzLDMsMCwxLDEtNCwwVjYuMjI1bC0uOTcuOTdMMi41NTYsNC43Miw3LjI3NSwwSDguNzI1bDQuNzIsNC43MkwxMC45Nyw3LjE5NCwxMCw2LjIyNVoiLz48L2c+PGcgaWQ9Imljb25CZyI+PHBhdGggY2xhc3M9Imljb24tdnMtYmciIGQ9Ik04LDExYTIsMiwwLDEsMS0yLDJBMiwyLDAsMCwxLDgsMTFaIi8+PC9nPjxnIGlkPSJjb2xvckFjdGlvbiI+PHBhdGggY2xhc3M9Imljb24tdnMtYWN0aW9uLWJsdWUiIGQ9Ik0zLjk3LDQuNzIsOCwuNjg5bDQuMDMsNC4wM0wxMC45Nyw1Ljc4LDksMy44MTFWMTBIN1YzLjgxMUw1LjAzLDUuNzhaIi8+PC9nPjwvc3ZnPgo="

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/step-out.svg":
/*!******************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/step-out.svg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6I2Y2ZjZmNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tdnMtYmd7ZmlsbDojNDI0MjQyO30uaWNvbi12cy1hY3Rpb24tYmx1ZXtmaWxsOiMwMDUzOWM7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5zdGVwLW91dDwvdGl0bGU+PGcgaWQ9ImNhbnZhcyI+PHBhdGggY2xhc3M9Imljb24tY2FudmFzLXRyYW5zcGFyZW50IiBkPSJNMTYsMTZIMFYwSDE2WiIvPjwvZz48ZyBpZD0ib3V0bGluZSIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48cGF0aCBjbGFzcz0iaWNvbi12cy1vdXQiIGQ9Ik0xMCwxMC43OGEzLDMsMCwxLDEtNCwwVjYuMjI1bC0uOTcuOTdMMi41NTYsNC43Miw3LjI3NSwwSDguNzI1bDQuNzIsNC43MkwxMC45Nyw3LjE5NCwxMCw2LjIyNVoiLz48L2c+PGcgaWQ9Imljb25CZyI+PHBhdGggY2xhc3M9Imljb24tdnMtYmciIGQ9Ik04LDExYTIsMiwwLDEsMS0yLDJBMiwyLDAsMCwxLDgsMTFaIi8+PC9nPjxnIGlkPSJjb2xvckFjdGlvbiI+PHBhdGggY2xhc3M9Imljb24tdnMtYWN0aW9uLWJsdWUiIGQ9Ik0zLjk3LDQuNzIsOCwuNjg5bDQuMDMsNC4wM0wxMC45Nyw1Ljc4LDksMy44MTFWMTBIN1YzLjgxMUw1LjAzLDUuNzhaIi8+PC9nPjwvc3ZnPgo="

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/step-over-inverse.svg":
/*!***************************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/step-over-inverse.svg ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6IzI1MjUyNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tdnMtYmd7ZmlsbDojYzVjNWM1O30uaWNvbi12cy1hY3Rpb24tYmx1ZXtmaWxsOiM3NWJlZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5zdGVwLW92ZXI8L3RpdGxlPjxnIGlkPSJjYW52YXMiPjxwYXRoIGNsYXNzPSJpY29uLWNhbnZhcy10cmFuc3BhcmVudCIgZD0iTTE2LDBWMTZIMFYwWiIvPjwvZz48ZyBpZD0ib3V0bGluZSIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48cGF0aCBjbGFzcz0iaWNvbi12cy1vdXQiIGQ9Ik0xMSwxM2EzLDMsMCwxLDEtMy0zQTMsMywwLDAsMSwxMSwxM1pNMTIsMVYyLjUyN0E3LjQ2Niw3LjQ2NiwwLDAsMCwuMDI4LDcuOTIzTDAsOC4yOTNWOUgzLjk0NWwuMS0uODg4QTMuNDc1LDMuNDc1LDAsMCwxLDgsNS4wMzZWOWg4VjFaIi8+PC9nPjxnIGlkPSJpY29uQmciPjxwYXRoIGNsYXNzPSJpY29uLXZzLWJnIiBkPSJNMTAsMTNhMiwyLDAsMSwxLTItMkEyLDIsMCwwLDEsMTAsMTNaIi8+PC9nPjxnIGlkPSJjb2xvckFjdGlvbiI+PHBhdGggY2xhc3M9Imljb24tdnMtYWN0aW9uLWJsdWUiIGQ9Ik0xNSwyVjhIOVY2aDIuMjM3QTQuNDgxLDQuNDgxLDAsMCwwLDMuMDUxLDhIMS4wMjVBNi40ODIsNi40ODIsMCwwLDEsMTMsNS4wNjlWMloiLz48L2c+PC9zdmc+Cg=="

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/step-over.svg":
/*!*******************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/step-over.svg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6I2Y2ZjZmNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tdnMtYmd7ZmlsbDojNDI0MjQyO30uaWNvbi12cy1hY3Rpb24tYmx1ZXtmaWxsOiMwMDUzOWM7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5zdGVwLW92ZXI8L3RpdGxlPjxnIGlkPSJjYW52YXMiPjxwYXRoIGNsYXNzPSJpY29uLWNhbnZhcy10cmFuc3BhcmVudCIgZD0iTTE2LDBWMTZIMFYwWiIvPjwvZz48ZyBpZD0ib3V0bGluZSIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48cGF0aCBjbGFzcz0iaWNvbi12cy1vdXQiIGQ9Ik0xMSwxM2EzLDMsMCwxLDEtMy0zQTMsMywwLDAsMSwxMSwxM1pNMTIsMVYyLjUyN0E3LjQ2Niw3LjQ2NiwwLDAsMCwuMDI4LDcuOTIzTDAsOC4yOTNWOUgzLjk0NWwuMS0uODg4QTMuNDc1LDMuNDc1LDAsMCwxLDgsNS4wMzZWOWg4VjFaIi8+PC9nPjxnIGlkPSJpY29uQmciPjxwYXRoIGNsYXNzPSJpY29uLXZzLWJnIiBkPSJNMTAsMTNhMiwyLDAsMSwxLTItMkEyLDIsMCwwLDEsMTAsMTNaIi8+PC9nPjxnIGlkPSJjb2xvckFjdGlvbiI+PHBhdGggY2xhc3M9Imljb24tdnMtYWN0aW9uLWJsdWUiIGQ9Ik0xNSwyVjhIOVY2aDIuMjM3QTQuNDgxLDQuNDgxLDAsMCwwLDMuMDUxLDhIMS4wMjVBNi40ODIsNi40ODIsMCwwLDEsMTMsNS4wNjlWMloiLz48L2c+PC9zdmc+Cg=="

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/stop-inverse.svg":
/*!**********************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/stop-inverse.svg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6IzI1MjUyNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tdnMtYWN0aW9uLXJlZHtmaWxsOiNmNDg3NzE7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5zdG9wPC90aXRsZT48ZyBpZD0iY2FudmFzIj48cGF0aCBjbGFzcz0iaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQiIGQ9Ik0xNiwwVjE2SDBWMFoiLz48L2c+PGcgaWQ9Im91dGxpbmUiIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+PHBhdGggY2xhc3M9Imljb24tdnMtb3V0IiBkPSJNMTQsMlYxNEgyVjJaIi8+PC9nPjxnIGlkPSJpY29uQmciPjxwYXRoIGNsYXNzPSJpY29uLXZzLWFjdGlvbi1yZWQiIGQ9Ik0xMywzVjEzSDNWM1oiLz48L2c+PC9zdmc+Cg=="

/***/ }),

/***/ "./node_modules/@theia/debug/src/browser/style/stop.svg":
/*!**************************************************************!*\
  !*** ./node_modules/@theia/debug/src/browser/style/stop.svg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE4IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQsLmljb24tdnMtb3V0e2ZpbGw6I2Y2ZjZmNjt9Lmljb24tY2FudmFzLXRyYW5zcGFyZW50e29wYWNpdHk6MDt9Lmljb24tdnMtYWN0aW9uLXJlZHtmaWxsOiNhMTI2MGQ7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5zdG9wPC90aXRsZT48ZyBpZD0iY2FudmFzIj48cGF0aCBjbGFzcz0iaWNvbi1jYW52YXMtdHJhbnNwYXJlbnQiIGQ9Ik0xNiwwVjE2SDBWMFoiLz48L2c+PGcgaWQ9Im91dGxpbmUiIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+PHBhdGggY2xhc3M9Imljb24tdnMtb3V0IiBkPSJNMTQsMlYxNEgyVjJaIi8+PC9nPjxnIGlkPSJpY29uQmciPjxwYXRoIGNsYXNzPSJpY29uLXZzLWFjdGlvbi1yZWQiIGQ9Ik0xMywzVjEzSDNWM1oiLz48L2c+PC9zdmc+Cg=="

/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-editor-zone-widget.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-editor-zone-widget.js ***!
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
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation and others. All rights reserved.
 *  Licensed under the MIT License. See https://github.com/Microsoft/vscode/blob/master/LICENSE.txt for license information.
 *--------------------------------------------------------------------------------------------*/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonacoEditorZoneWidget = void 0;
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var MonacoEditorZoneWidget = /** @class */ (function () {
    function MonacoEditorZoneWidget(editor) {
        var _this = this;
        this.editor = editor;
        this.zoneNode = document.createElement('div');
        this.containerNode = document.createElement('div');
        this.onDidLayoutChangeEmitter = new core_1.Emitter();
        this.onDidLayoutChange = this.onDidLayoutChangeEmitter.event;
        this.toHide = new core_1.DisposableCollection();
        this.toDispose = new core_1.DisposableCollection(this.onDidLayoutChangeEmitter, this.toHide);
        this.zoneNode.classList.add('zone-widget');
        this.containerNode.classList.add('zone-widget-container');
        this.zoneNode.appendChild(this.containerNode);
        this.updateWidth();
        this.toDispose.push(this.editor.onDidLayoutChange(function (info) { return _this.updateWidth(info); }));
    }
    MonacoEditorZoneWidget.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    Object.defineProperty(MonacoEditorZoneWidget.prototype, "options", {
        get: function () {
            return this.viewZone ? this._options : undefined;
        },
        enumerable: false,
        configurable: true
    });
    MonacoEditorZoneWidget.prototype.hide = function () {
        this.toHide.dispose();
    };
    MonacoEditorZoneWidget.prototype.show = function (options) {
        var _this = this;
        var _a = this._options = __assign({ showFrame: true }, options), afterLineNumber = _a.afterLineNumber, afterColumn = _a.afterColumn, heightInLines = _a.heightInLines;
        var lineHeight = this.editor.getOption(monaco.editor.EditorOption.lineHeight);
        var maxHeightInLines = (this.editor.getLayoutInfo().height / lineHeight) * .8;
        if (heightInLines >= maxHeightInLines) {
            heightInLines = maxHeightInLines;
        }
        this.toHide.dispose();
        this.editor.changeViewZones(function (accessor) {
            _this.zoneNode.style.top = '-1000px';
            var domNode = document.createElement('div');
            domNode.style.overflow = 'hidden';
            var zone = {
                domNode: domNode,
                afterLineNumber: afterLineNumber,
                afterColumn: afterColumn,
                heightInLines: heightInLines,
                onDomNodeTop: function (zoneTop) { return _this.updateTop(zoneTop); },
                onComputedHeight: function (zoneHeight) { return _this.updateHeight(zoneHeight); }
            };
            _this.viewZone = Object.assign(zone, {
                id: accessor.addZone(zone)
            });
            var id = _this.viewZone.id;
            _this.toHide.push(core_1.Disposable.create(function () {
                _this.editor.changeViewZones(function (a) { return a.removeZone(id); });
                _this.viewZone = undefined;
            }));
            var widget = {
                getId: function () { return 'editor-zone-widget-' + id; },
                getDomNode: function () { return _this.zoneNode; },
                // eslint-disable-next-line no-null/no-null
                getPosition: function () { return null; }
            };
            _this.editor.addOverlayWidget(widget);
            _this.toHide.push(core_1.Disposable.create(function () { return _this.editor.removeOverlayWidget(widget); }));
        });
        this.containerNode.style.top = 0 + 'px';
        this.containerNode.style.overflow = 'hidden';
        this.updateContainerHeight(heightInLines * lineHeight);
        var model = this.editor.getModel();
        if (model) {
            var revealLineNumber = Math.min(model.getLineCount(), Math.max(1, afterLineNumber + 1));
            this.editor.revealLine(revealLineNumber, monaco.editor.ScrollType.Smooth);
        }
    };
    MonacoEditorZoneWidget.prototype.layout = function (heightInLines) {
        if (this.viewZone && this.viewZone.heightInLines !== heightInLines) {
            this.viewZone.heightInLines = heightInLines;
            var id_1 = this.viewZone.id;
            this.editor.changeViewZones(function (accessor) { return accessor.layoutZone(id_1); });
        }
    };
    MonacoEditorZoneWidget.prototype.updateTop = function (top) {
        this.zoneNode.style.top = top + 'px';
    };
    MonacoEditorZoneWidget.prototype.updateHeight = function (zoneHeight) {
        this.zoneNode.style.height = zoneHeight + 'px';
        this.updateContainerHeight(zoneHeight);
    };
    MonacoEditorZoneWidget.prototype.updateContainerHeight = function (zoneHeight) {
        var _a = this.computeContainerHeight(zoneHeight), frameWidth = _a.frameWidth, height = _a.height;
        this.containerNode.style.height = height + 'px';
        this.containerNode.style.borderTopWidth = frameWidth + 'px';
        this.containerNode.style.borderBottomWidth = frameWidth + 'px';
        var width = this.computeWidth();
        this.onDidLayoutChangeEmitter.fire({ height: height, width: width });
    };
    MonacoEditorZoneWidget.prototype.computeContainerHeight = function (zoneHeight) {
        var lineHeight = this.editor.getOption(monaco.editor.EditorOption.lineHeight);
        var frameWidth = this._options && this._options.frameWidth;
        var frameThickness = this._options && this._options.showFrame ? Math.round(lineHeight / 9) : 0;
        return {
            frameWidth: frameWidth !== undefined ? frameWidth : frameThickness,
            height: zoneHeight - 2 * frameThickness
        };
    };
    MonacoEditorZoneWidget.prototype.updateWidth = function (info) {
        if (info === void 0) { info = this.editor.getLayoutInfo(); }
        var width = this.computeWidth(info);
        this.zoneNode.style.width = width + 'px';
        this.zoneNode.style.left = this.computeLeft(info) + 'px';
    };
    MonacoEditorZoneWidget.prototype.computeWidth = function (info) {
        if (info === void 0) { info = this.editor.getLayoutInfo(); }
        return info.width - info.minimapWidth - info.verticalScrollbarWidth;
    };
    MonacoEditorZoneWidget.prototype.computeLeft = function (info) {
        if (info === void 0) { info = this.editor.getLayoutInfo(); }
        // If minimap is to the left, we move beyond it
        if (info.minimapWidth > 0 && info.minimapLeft === 0) {
            return info.minimapWidth;
        }
        return 0;
    };
    return MonacoEditorZoneWidget;
}());
exports.MonacoEditorZoneWidget = MonacoEditorZoneWidget;
//# sourceMappingURL=monaco-editor-zone-widget.js.map

/***/ }),

/***/ "./node_modules/anser/lib/index.js":
/*!*****************************************!*\
  !*** ./node_modules/anser/lib/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This file was originally written by @drudru (https://github.com/drudru/ansi_up), MIT, 2011

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ANSI_COLORS = [[{ color: "0, 0, 0", "class": "ansi-black" }, { color: "187, 0, 0", "class": "ansi-red" }, { color: "0, 187, 0", "class": "ansi-green" }, { color: "187, 187, 0", "class": "ansi-yellow" }, { color: "0, 0, 187", "class": "ansi-blue" }, { color: "187, 0, 187", "class": "ansi-magenta" }, { color: "0, 187, 187", "class": "ansi-cyan" }, { color: "255,255,255", "class": "ansi-white" }], [{ color: "85, 85, 85", "class": "ansi-bright-black" }, { color: "255, 85, 85", "class": "ansi-bright-red" }, { color: "0, 255, 0", "class": "ansi-bright-green" }, { color: "255, 255, 85", "class": "ansi-bright-yellow" }, { color: "85, 85, 255", "class": "ansi-bright-blue" }, { color: "255, 85, 255", "class": "ansi-bright-magenta" }, { color: "85, 255, 255", "class": "ansi-bright-cyan" }, { color: "255, 255, 255", "class": "ansi-bright-white" }]];

var Anser = function () {
    _createClass(Anser, null, [{
        key: "escapeForHtml",


        /**
         * Anser.escapeForHtml
         * Escape the input HTML.
         *
         * This does the minimum escaping of text to make it compliant with HTML.
         * In particular, the '&','<', and '>' characters are escaped. This should
         * be run prior to `ansiToHtml`.
         *
         * @name Anser.escapeForHtml
         * @function
         * @param {String} txt The input text (containing the ANSI snippets).
         * @returns {String} The escaped html.
         */
        value: function escapeForHtml(txt) {
            return new Anser().escapeForHtml(txt);
        }

        /**
         * Anser.linkify
         * Adds the links in the HTML.
         *
         * This replaces any links in the text with anchor tags that display the
         * link. The links should have at least one whitespace character
         * surrounding it. Also, you should apply this after you have run
         * `ansiToHtml` on the text.
         *
         * @name Anser.linkify
         * @function
         * @param {String} txt The input text.
         * @returns {String} The HTML containing the <a> tags (unescaped).
         */

    }, {
        key: "linkify",
        value: function linkify(txt) {
            return new Anser().linkify(txt);
        }

        /**
         * Anser.ansiToHtml
         * This replaces ANSI terminal escape codes with SPAN tags that wrap the
         * content.
         *
         * This function only interprets ANSI SGR (Select Graphic Rendition) codes
         * that can be represented in HTML.
         * For example, cursor movement codes are ignored and hidden from output.
         * The default style uses colors that are very close to the prescribed
         * standard. The standard assumes that the text will have a black
         * background. These colors are set as inline styles on the SPAN tags.
         *
         * Another option is to set `use_classes: true` in the options argument.
         * This will instead set classes on the spans so the colors can be set via
         * CSS. The class names used are of the format `ansi-*-fg/bg` and
         * `ansi-bright-*-fg/bg` where `*` is the color name,
         * i.e black/red/green/yellow/blue/magenta/cyan/white.
         *
         * @name Anser.ansiToHtml
         * @function
         * @param {String} txt The input text.
         * @param {Object} options The options passed to the ansiToHTML method.
         * @returns {String} The HTML output.
         */

    }, {
        key: "ansiToHtml",
        value: function ansiToHtml(txt, options) {
            return new Anser().ansiToHtml(txt, options);
        }

        /**
         * Anser.ansiToJson
         * Converts ANSI input into JSON output.
         *
         * @name Anser.ansiToJson
         * @function
         * @param {String} txt The input text.
         * @param {Object} options The options passed to the ansiToHTML method.
         * @returns {String} The HTML output.
         */

    }, {
        key: "ansiToJson",
        value: function ansiToJson(txt, options) {
            return new Anser().ansiToJson(txt, options);
        }

        /**
         * Anser.ansiToText
         * Converts ANSI input into text output.
         *
         * @name Anser.ansiToText
         * @function
         * @param {String} txt The input text.
         * @returns {String} The text output.
         */

    }, {
        key: "ansiToText",
        value: function ansiToText(txt) {
            return new Anser().ansiToText(txt);
        }

        /**
         * Anser
         * The `Anser` class.
         *
         * @name Anser
         * @function
         * @returns {Anser}
         */

    }]);

    function Anser() {
        _classCallCheck(this, Anser);

        this.fg = this.bg = this.fg_truecolor = this.bg_truecolor = null;
        this.bright = 0;
    }

    /**
     * setupPalette
     * Sets up the palette.
     *
     * @name setupPalette
     * @function
     */


    _createClass(Anser, [{
        key: "setupPalette",
        value: function setupPalette() {
            this.PALETTE_COLORS = [];

            // Index 0..15 : System color
            for (var i = 0; i < 2; ++i) {
                for (var j = 0; j < 8; ++j) {
                    this.PALETTE_COLORS.push(ANSI_COLORS[i][j].color);
                }
            }

            // Index 16..231 : RGB 6x6x6
            // https://gist.github.com/jasonm23/2868981#file-xterm-256color-yaml
            var levels = [0, 95, 135, 175, 215, 255];
            var format = function format(r, g, b) {
                return levels[r] + ", " + levels[g] + ", " + levels[b];
            };
            var r = void 0,
                g = void 0,
                b = void 0;
            for (var _r = 0; _r < 6; ++_r) {
                for (var _g = 0; _g < 6; ++_g) {
                    for (var _b = 0; _b < 6; ++_b) {
                        this.PALETTE_COLORS.push(format(_r, _g, _b));
                    }
                }
            }

            // Index 232..255 : Grayscale
            var level = 8;
            for (var _i = 0; _i < 24; ++_i, level += 10) {
                this.PALETTE_COLORS.push(format(level, level, level));
            }
        }

        /**
         * escapeForHtml
         * Escapes the input text.
         *
         * @name escapeForHtml
         * @function
         * @param {String} txt The input text.
         * @returns {String} The escpaed HTML output.
         */

    }, {
        key: "escapeForHtml",
        value: function escapeForHtml(txt) {
            return txt.replace(/[&<>]/gm, function (str) {
                return str == "&" ? "&amp;" : str == "<" ? "&lt;" : str == ">" ? "&gt;" : "";
            });
        }

        /**
         * linkify
         * Adds HTML link elements.
         *
         * @name linkify
         * @function
         * @param {String} txt The input text.
         * @returns {String} The HTML output containing link elements.
         */

    }, {
        key: "linkify",
        value: function linkify(txt) {
            return txt.replace(/(https?:\/\/[^\s]+)/gm, function (str) {
                return "<a href=\"" + str + "\">" + str + "</a>";
            });
        }

        /**
         * ansiToHtml
         * Converts ANSI input into HTML output.
         *
         * @name ansiToHtml
         * @function
         * @param {String} txt The input text.
         * @param {Object} options The options passed ot the `process` method.
         * @returns {String} The HTML output.
         */

    }, {
        key: "ansiToHtml",
        value: function ansiToHtml(txt, options) {
            return this.process(txt, options, true);
        }

        /**
         * ansiToJson
         * Converts ANSI input into HTML output.
         *
         * @name ansiToJson
         * @function
         * @param {String} txt The input text.
         * @param {Object} options The options passed ot the `process` method.
         * @returns {String} The JSON output.
         */

    }, {
        key: "ansiToJson",
        value: function ansiToJson(txt, options) {
            options = options || {};
            options.json = true;
            options.clearLine = false;
            return this.process(txt, options, true);
        }

        /**
         * ansiToText
         * Converts ANSI input into HTML output.
         *
         * @name ansiToText
         * @function
         * @param {String} txt The input text.
         * @returns {String} The text output.
         */

    }, {
        key: "ansiToText",
        value: function ansiToText(txt) {
            return this.process(txt, {}, false);
        }

        /**
         * process
         * Processes the input.
         *
         * @name process
         * @function
         * @param {String} txt The input text.
         * @param {Object} options An object passed to `processChunk` method, extended with:
         *
         *  - `json` (Boolean): If `true`, the result will be an object.
         *  - `use_classes` (Boolean): If `true`, HTML classes will be appended to the HTML output.
         *
         * @param {Boolean} markup
         */

    }, {
        key: "process",
        value: function process(txt, options, markup) {
            var _this = this;

            var self = this;
            var raw_text_chunks = txt.split(/\033\[/);
            var first_chunk = raw_text_chunks.shift(); // the first chunk is not the result of the split

            if (options === undefined || options === null) {
                options = {};
            }
            options.clearLine = /\r/.test(txt); // check for Carriage Return
            var color_chunks = raw_text_chunks.map(function (chunk) {
                return _this.processChunk(chunk, options, markup);
            });

            if (options && options.json) {
                var first = self.processChunkJson("");
                first.content = first_chunk;
                first.clearLine = options.clearLine;
                color_chunks.unshift(first);
                if (options.remove_empty) {
                    color_chunks = color_chunks.filter(function (c) {
                        return !c.isEmpty();
                    });
                }
                return color_chunks;
            } else {
                color_chunks.unshift(first_chunk);
            }

            return color_chunks.join("");
        }

        /**
         * processChunkJson
         * Processes the current chunk into json output.
         *
         * @name processChunkJson
         * @function
         * @param {String} text The input text.
         * @param {Object} options An object containing the following fields:
         *
         *  - `json` (Boolean): If `true`, the result will be an object.
         *  - `use_classes` (Boolean): If `true`, HTML classes will be appended to the HTML output.
         *
         * @param {Boolean} markup If false, the colors will not be parsed.
         * @return {Object} The result object:
         *
         *  - `content` (String): The text.
         *  - `fg` (String|null): The foreground color.
         *  - `bg` (String|null): The background color.
         *  - `fg_truecolor` (String|null): The foreground true color (if 16m color is enabled).
         *  - `bg_truecolor` (String|null): The background true color (if 16m color is enabled).
         *  - `clearLine` (Boolean): `true` if a carriageReturn \r was fount at end of line.
         *  - `was_processed` (Bolean): `true` if the colors were processed, `false` otherwise.
         *  - `isEmpty` (Function): A function returning `true` if the content is empty, or `false` otherwise.
         *
         */

    }, {
        key: "processChunkJson",
        value: function processChunkJson(text, options, markup) {

            // Are we using classes or styles?
            options = typeof options == "undefined" ? {} : options;
            var use_classes = options.use_classes = typeof options.use_classes != "undefined" && options.use_classes;
            var key = options.key = use_classes ? "class" : "color";

            var result = {
                content: text,
                fg: null,
                bg: null,
                fg_truecolor: null,
                bg_truecolor: null,
                clearLine: options.clearLine,
                decoration: null,
                was_processed: false,
                isEmpty: function isEmpty() {
                    return !result.content;
                }
            };

            // Each "chunk" is the text after the CSI (ESC + "[") and before the next CSI/EOF.
            //
            // This regex matches four groups within a chunk.
            //
            // The first and third groups match code type.
            // We supported only SGR command. It has empty first group and "m" in third.
            //
            // The second group matches all of the number+semicolon command sequences
            // before the "m" (or other trailing) character.
            // These are the graphics or SGR commands.
            //
            // The last group is the text (including newlines) that is colored by
            // the other group"s commands.
            var matches = text.match(/^([!\x3c-\x3f]*)([\d;]*)([\x20-\x2c]*[\x40-\x7e])([\s\S]*)/m);

            if (!matches) return result;

            var orig_txt = result.content = matches[4];
            var nums = matches[2].split(";");

            // We currently support only "SGR" (Select Graphic Rendition)
            // Simply ignore if not a SGR command.
            if (matches[1] !== "" || matches[3] !== "m") {
                return result;
            }

            if (!markup) {
                return result;
            }

            var self = this;

            self.decoration = null;

            while (nums.length > 0) {
                var num_str = nums.shift();
                var num = parseInt(num_str);

                if (isNaN(num) || num === 0) {
                    self.fg = self.bg = self.decoration = null;
                } else if (num === 1) {
                    self.decoration = "bold";
                } else if (num === 2) {
                    self.decoration = "dim";
                    // Enable code 2 to get string
                } else if (num == 3) {
                    self.decoration = "italic";
                } else if (num == 4) {
                    self.decoration = "underline";
                } else if (num == 5) {
                    self.decoration = "blink";
                } else if (num === 7) {
                    self.decoration = "reverse";
                } else if (num === 8) {
                    self.decoration = "hidden";
                    // Enable code 9 to get strikethrough
                } else if (num === 9) {
                    self.decoration = "strikethrough";
                } else if (num == 39) {
                    self.fg = null;
                } else if (num == 49) {
                    self.bg = null;
                    // Foreground color
                } else if (num >= 30 && num < 38) {
                    self.fg = ANSI_COLORS[0][num % 10][key];
                    // Foreground bright color
                } else if (num >= 90 && num < 98) {
                    self.fg = ANSI_COLORS[1][num % 10][key];
                    // Background color
                } else if (num >= 40 && num < 48) {
                    self.bg = ANSI_COLORS[0][num % 10][key];
                    // Background bright color
                } else if (num >= 100 && num < 108) {
                    self.bg = ANSI_COLORS[1][num % 10][key];
                } else if (num === 38 || num === 48) {
                    // extend color (38=fg, 48=bg)
                    var is_foreground = num === 38;
                    if (nums.length >= 1) {
                        var mode = nums.shift();
                        if (mode === "5" && nums.length >= 1) {
                            // palette color
                            var palette_index = parseInt(nums.shift());
                            if (palette_index >= 0 && palette_index <= 255) {
                                if (!use_classes) {
                                    if (!this.PALETTE_COLORS) {
                                        self.setupPalette();
                                    }
                                    if (is_foreground) {
                                        self.fg = this.PALETTE_COLORS[palette_index];
                                    } else {
                                        self.bg = this.PALETTE_COLORS[palette_index];
                                    }
                                } else {
                                    var klass = palette_index >= 16 ? "ansi-palette-" + palette_index : ANSI_COLORS[palette_index > 7 ? 1 : 0][palette_index % 8]["class"];
                                    if (is_foreground) {
                                        self.fg = klass;
                                    } else {
                                        self.bg = klass;
                                    }
                                }
                            }
                        } else if (mode === "2" && nums.length >= 3) {
                            // true color
                            var r = parseInt(nums.shift());
                            var g = parseInt(nums.shift());
                            var b = parseInt(nums.shift());
                            if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
                                var color = r + ", " + g + ", " + b;
                                if (!use_classes) {
                                    if (is_foreground) {
                                        self.fg = color;
                                    } else {
                                        self.bg = color;
                                    }
                                } else {
                                    if (is_foreground) {
                                        self.fg = "ansi-truecolor";
                                        self.fg_truecolor = color;
                                    } else {
                                        self.bg = "ansi-truecolor";
                                        self.bg_truecolor = color;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            if (self.fg === null && self.bg === null && self.decoration === null) {
                return result;
            } else {
                var styles = [];
                var classes = [];
                var data = {};

                result.fg = self.fg;
                result.bg = self.bg;
                result.fg_truecolor = self.fg_truecolor;
                result.bg_truecolor = self.bg_truecolor;
                result.decoration = self.decoration;
                result.was_processed = true;

                return result;
            }
        }

        /**
         * processChunk
         * Processes the current chunk of text.
         *
         * @name processChunk
         * @function
         * @param {String} text The input text.
         * @param {Object} options An object containing the following fields:
         *
         *  - `json` (Boolean): If `true`, the result will be an object.
         *  - `use_classes` (Boolean): If `true`, HTML classes will be appended to the HTML output.
         *
         * @param {Boolean} markup If false, the colors will not be parsed.
         * @return {Object|String} The result (object if `json` is wanted back or string otherwise).
         */

    }, {
        key: "processChunk",
        value: function processChunk(text, options, markup) {
            var _this2 = this;

            var self = this;
            options = options || {};
            var jsonChunk = this.processChunkJson(text, options, markup);

            if (options.json) {
                return jsonChunk;
            }
            if (jsonChunk.isEmpty()) {
                return "";
            }
            if (!jsonChunk.was_processed) {
                return jsonChunk.content;
            }

            var use_classes = options.use_classes;

            var styles = [];
            var classes = [];
            var data = {};
            var render_data = function render_data(data) {
                var fragments = [];
                var key = void 0;
                for (key in data) {
                    if (data.hasOwnProperty(key)) {
                        fragments.push("data-" + key + "=\"" + _this2.escapeForHtml(data[key]) + "\"");
                    }
                }
                return fragments.length > 0 ? " " + fragments.join(" ") : "";
            };

            if (jsonChunk.fg) {
                if (use_classes) {
                    classes.push(jsonChunk.fg + "-fg");
                    if (jsonChunk.fg_truecolor !== null) {
                        data["ansi-truecolor-fg"] = jsonChunk.fg_truecolor;
                        jsonChunk.fg_truecolor = null;
                    }
                } else {
                    styles.push("color:rgb(" + jsonChunk.fg + ")");
                }
            }

            if (jsonChunk.bg) {
                if (use_classes) {
                    classes.push(jsonChunk.bg + "-bg");
                    if (jsonChunk.bg_truecolor !== null) {
                        data["ansi-truecolor-bg"] = jsonChunk.bg_truecolor;
                        jsonChunk.bg_truecolor = null;
                    }
                } else {
                    styles.push("background-color:rgb(" + jsonChunk.bg + ")");
                }
            }

            if (jsonChunk.decoration) {
                if (use_classes) {
                    classes.push("ansi-" + jsonChunk.decoration);
                } else if (jsonChunk.decoration === "bold") {
                    styles.push("font-weight:bold");
                } else if (jsonChunk.decoration === "dim") {
                    styles.push("opacity:0.5");
                } else if (jsonChunk.decoration === "italic") {
                    styles.push("font-style:italic");
                    // underline and blink are treated bellow
                } else if (jsonChunk.decoration === "reverse") {
                    styles.push("filter:invert(100%)");
                } else if (jsonChunk.decoration === "hidden") {
                    styles.push("visibility:hidden");
                } else if (jsonChunk.decoration === "strikethrough") {
                    styles.push("text-decoration:line-through");
                } else {
                    styles.push("text-decoration:" + jsonChunk.decoration);
                }
            }

            if (use_classes) {
                return "<span class=\"" + classes.join(" ") + "\"" + render_data(data) + ">" + jsonChunk.content + "</span>";
            } else {
                return "<span style=\"" + styles.join(";") + "\"" + render_data(data) + ">" + jsonChunk.content + "</span>";
            }
        }
    }]);

    return Anser;
}();

;

module.exports = Anser;

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/debug/src/browser/style/debug-bright.useable.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/debug/src/browser/style/debug-bright.useable.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":root {\n    --theia-debug-start: url(" + escape(__webpack_require__(/*! ./start.svg */ "./node_modules/@theia/debug/src/browser/style/start.svg")) + ");\n    --theia-debug-stop: url(" + escape(__webpack_require__(/*! ./stop.svg */ "./node_modules/@theia/debug/src/browser/style/stop.svg")) + ");\n    --theia-debug-restart: url(" + escape(__webpack_require__(/*! ./restart.svg */ "./node_modules/@theia/debug/src/browser/style/restart.svg")) + ");\n    --theia-debug-pause: url(" + escape(__webpack_require__(/*! ./pause.svg */ "./node_modules/@theia/debug/src/browser/style/pause.svg")) + ");\n    --theia-debug-continue: url(" + escape(__webpack_require__(/*! ./continue.svg */ "./node_modules/@theia/debug/src/browser/style/continue.svg")) + ");\n    --theia-debug-step-over: url(" + escape(__webpack_require__(/*! ./step-over.svg */ "./node_modules/@theia/debug/src/browser/style/step-over.svg")) + ");\n    --theia-debug-step-into: url(" + escape(__webpack_require__(/*! ./step-into.svg */ "./node_modules/@theia/debug/src/browser/style/step-into.svg")) + ");\n    --theia-debug-step-out: url(" + escape(__webpack_require__(/*! ./step-out.svg */ "./node_modules/@theia/debug/src/browser/style/step-out.svg")) + ");\n    --theia-debug-configure: url(" + escape(__webpack_require__(/*! ./configure.svg */ "./node_modules/@theia/debug/src/browser/style/configure.svg")) + ");\n    --theia-debug-repl: url(" + escape(__webpack_require__(/*! ./repl.svg */ "./node_modules/@theia/debug/src/browser/style/repl.svg")) + ");\n    --breakpoints-activate-url: url(" + escape(__webpack_require__(/*! ./breakpoints-activate.svg */ "./node_modules/@theia/debug/src/browser/style/breakpoints-activate.svg")) + ");\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/debug/src/browser/style/debug-dark.useable.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/debug/src/browser/style/debug-dark.useable.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":root {\n    --theia-debug-start: url(" + escape(__webpack_require__(/*! ./start-inverse.svg */ "./node_modules/@theia/debug/src/browser/style/start-inverse.svg")) + ");\n    --theia-debug-stop: url(" + escape(__webpack_require__(/*! ./stop-inverse.svg */ "./node_modules/@theia/debug/src/browser/style/stop-inverse.svg")) + ");\n    --theia-debug-restart: url(" + escape(__webpack_require__(/*! ./restart-inverse.svg */ "./node_modules/@theia/debug/src/browser/style/restart-inverse.svg")) + ");\n    --theia-debug-pause: url(" + escape(__webpack_require__(/*! ./pause-inverse.svg */ "./node_modules/@theia/debug/src/browser/style/pause-inverse.svg")) + ");\n    --theia-debug-continue: url(" + escape(__webpack_require__(/*! ./continue-inverse.svg */ "./node_modules/@theia/debug/src/browser/style/continue-inverse.svg")) + ");\n    --theia-debug-step-over: url(" + escape(__webpack_require__(/*! ./step-over-inverse.svg */ "./node_modules/@theia/debug/src/browser/style/step-over-inverse.svg")) + ");\n    --theia-debug-step-into: url(" + escape(__webpack_require__(/*! ./step-into-inverse.svg */ "./node_modules/@theia/debug/src/browser/style/step-into-inverse.svg")) + ");\n    --theia-debug-step-out: url(" + escape(__webpack_require__(/*! ./step-out-inverse.svg */ "./node_modules/@theia/debug/src/browser/style/step-out-inverse.svg")) + ");\n    --theia-debug-configure: url(" + escape(__webpack_require__(/*! ./configure-inverse.svg */ "./node_modules/@theia/debug/src/browser/style/configure-inverse.svg")) + ");\n    --theia-debug-repl: url(" + escape(__webpack_require__(/*! ./repl-inverse.svg */ "./node_modules/@theia/debug/src/browser/style/repl-inverse.svg")) + ");\n    --breakpoints-activate-url: url(" + escape(__webpack_require__(/*! ./breakpoints-activate-inverse.svg */ "./node_modules/@theia/debug/src/browser/style/breakpoints-activate-inverse.svg")) + ");\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=36.bundle.js.map