(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./node_modules/@theia/terminal/lib/browser/search/terminal-search-container.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@theia/terminal/lib/browser/search/terminal-search-container.js ***!
  \**************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTerminalSearchFactory = void 0;
var terminal_search_widget_1 = __webpack_require__(/*! ./terminal-search-widget */ "./node_modules/@theia/terminal/lib/browser/search/terminal-search-widget.js");
var xterm_1 = __webpack_require__(/*! xterm */ "./node_modules/xterm/lib/xterm.js");
function createTerminalSearchFactory(container) {
    container.bind(terminal_search_widget_1.TerminalSearchWidget).toSelf().inSingletonScope();
    return function (terminal) {
        container.bind(xterm_1.Terminal).toConstantValue(terminal);
        return container.get(terminal_search_widget_1.TerminalSearchWidget);
    };
}
exports.createTerminalSearchFactory = createTerminalSearchFactory;


/***/ }),

/***/ "./node_modules/@theia/terminal/lib/browser/terminal-frontend-module.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/terminal/lib/browser/terminal-frontend-module.js ***!
  \******************************************************************************/
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
__webpack_require__(/*! ../../src/browser/style/terminal.css */ "./node_modules/@theia/terminal/src/browser/style/terminal.css");
__webpack_require__(/*! xterm/css/xterm.css */ "./node_modules/xterm/css/xterm.css");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var tab_bar_toolbar_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-toolbar */ "./node_modules/@theia/core/lib/browser/shell/tab-bar-toolbar.js");
var terminal_frontend_contribution_1 = __webpack_require__(/*! ./terminal-frontend-contribution */ "./node_modules/@theia/terminal/lib/browser/terminal-frontend-contribution.js");
var terminal_widget_impl_1 = __webpack_require__(/*! ./terminal-widget-impl */ "./node_modules/@theia/terminal/lib/browser/terminal-widget-impl.js");
var terminal_widget_1 = __webpack_require__(/*! ./base/terminal-widget */ "./node_modules/@theia/terminal/lib/browser/base/terminal-widget.js");
var terminal_protocol_1 = __webpack_require__(/*! ../common/terminal-protocol */ "./node_modules/@theia/terminal/lib/common/terminal-protocol.js");
var terminal_watcher_1 = __webpack_require__(/*! ../common/terminal-watcher */ "./node_modules/@theia/terminal/lib/common/terminal-watcher.js");
var shell_terminal_protocol_1 = __webpack_require__(/*! ../common/shell-terminal-protocol */ "./node_modules/@theia/terminal/lib/common/shell-terminal-protocol.js");
var terminal_keybinding_contexts_1 = __webpack_require__(/*! ./terminal-keybinding-contexts */ "./node_modules/@theia/terminal/lib/browser/terminal-keybinding-contexts.js");
var terminal_common_module_1 = __webpack_require__(/*! ../common/terminal-common-module */ "./node_modules/@theia/terminal/lib/common/terminal-common-module.js");
var terminal_service_1 = __webpack_require__(/*! ./base/terminal-service */ "./node_modules/@theia/terminal/lib/browser/base/terminal-service.js");
var terminal_preferences_1 = __webpack_require__(/*! ./terminal-preferences */ "./node_modules/@theia/terminal/lib/browser/terminal-preferences.js");
var terminal_linkmatcher_1 = __webpack_require__(/*! ./terminal-linkmatcher */ "./node_modules/@theia/terminal/lib/browser/terminal-linkmatcher.js");
var terminal_contribution_1 = __webpack_require__(/*! ./terminal-contribution */ "./node_modules/@theia/terminal/lib/browser/terminal-contribution.js");
var terminal_linkmatcher_files_1 = __webpack_require__(/*! ./terminal-linkmatcher-files */ "./node_modules/@theia/terminal/lib/browser/terminal-linkmatcher-files.js");
var terminal_linkmatcher_diff_1 = __webpack_require__(/*! ./terminal-linkmatcher-diff */ "./node_modules/@theia/terminal/lib/browser/terminal-linkmatcher-diff.js");
var terminal_search_widget_1 = __webpack_require__(/*! ./search/terminal-search-widget */ "./node_modules/@theia/terminal/lib/browser/search/terminal-search-widget.js");
var terminal_quick_open_service_1 = __webpack_require__(/*! ./terminal-quick-open-service */ "./node_modules/@theia/terminal/lib/browser/terminal-quick-open-service.js");
var terminal_search_container_1 = __webpack_require__(/*! ./search/terminal-search-container */ "./node_modules/@theia/terminal/lib/browser/search/terminal-search-container.js");
var terminal_copy_on_selection_handler_1 = __webpack_require__(/*! ./terminal-copy-on-selection-handler */ "./node_modules/@theia/terminal/lib/browser/terminal-copy-on-selection-handler.js");
var color_application_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/color-application-contribution */ "./node_modules/@theia/core/lib/browser/color-application-contribution.js");
var terminal_theme_service_1 = __webpack_require__(/*! ./terminal-theme-service */ "./node_modules/@theia/terminal/lib/browser/terminal-theme-service.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    var e_1, _a, e_2, _b;
    terminal_preferences_1.bindTerminalPreferences(bind);
    bind(browser_1.KeybindingContext).to(terminal_keybinding_contexts_1.TerminalActiveContext).inSingletonScope();
    bind(browser_1.KeybindingContext).to(terminal_keybinding_contexts_1.TerminalSearchVisibleContext).inSingletonScope();
    bind(terminal_widget_1.TerminalWidget).to(terminal_widget_impl_1.TerminalWidgetImpl).inTransientScope();
    bind(terminal_watcher_1.TerminalWatcher).toSelf().inSingletonScope();
    var terminalNum = 0;
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: terminal_widget_impl_1.TERMINAL_WIDGET_FACTORY_ID,
        createWidget: function (options) {
            var child = new inversify_1.Container({ defaultScope: 'Singleton' });
            child.parent = ctx.container;
            var counter = terminalNum++;
            var domId = options.id || 'terminal-' + counter;
            var widgetOptions = __assign({ title: 'Terminal ' + counter, useServerTitle: true, destroyTermOnClose: true }, options);
            child.bind(terminal_widget_1.TerminalWidgetOptions).toConstantValue(widgetOptions);
            child.bind('terminal-dom-id').toConstantValue(domId);
            child.bind(terminal_search_widget_1.TerminalSearchWidgetFactory).toDynamicValue(function (context) { return terminal_search_container_1.createTerminalSearchFactory(context.container); });
            return child.get(terminal_widget_1.TerminalWidget);
        }
    }); });
    bind(terminal_quick_open_service_1.TerminalQuickOpenService).toSelf().inSingletonScope();
    bind(terminal_copy_on_selection_handler_1.TerminalCopyOnSelectionHandler).toSelf().inSingletonScope();
    bind(terminal_quick_open_service_1.TerminalQuickOpenContribution).toSelf().inSingletonScope();
    try {
        for (var _c = __values([common_1.CommandContribution, browser_1.QuickOpenContribution]), _d = _c.next(); !_d.done; _d = _c.next()) {
            var identifier = _d.value;
            bind(identifier).toService(terminal_quick_open_service_1.TerminalQuickOpenContribution);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    bind(terminal_theme_service_1.TerminalThemeService).toSelf().inSingletonScope();
    bind(terminal_frontend_contribution_1.TerminalFrontendContribution).toSelf().inSingletonScope();
    bind(terminal_service_1.TerminalService).toService(terminal_frontend_contribution_1.TerminalFrontendContribution);
    try {
        for (var _e = __values([common_1.CommandContribution, common_1.MenuContribution, browser_1.KeybindingContribution, tab_bar_toolbar_1.TabBarToolbarContribution, color_application_contribution_1.ColorContribution]), _f = _e.next(); !_f.done; _f = _e.next()) {
            var identifier = _f.value;
            bind(identifier).toService(terminal_frontend_contribution_1.TerminalFrontendContribution);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
        }
        finally { if (e_2) throw e_2.error; }
    }
    bind(terminal_protocol_1.ITerminalServer).toDynamicValue(function (ctx) {
        var connection = ctx.container.get(browser_1.WebSocketConnectionProvider);
        var terminalWatcher = ctx.container.get(terminal_watcher_1.TerminalWatcher);
        return connection.createProxy(terminal_protocol_1.terminalPath, terminalWatcher.getTerminalClient());
    }).inSingletonScope();
    bind(shell_terminal_protocol_1.ShellTerminalServerProxy).toDynamicValue(function (ctx) {
        var connection = ctx.container.get(browser_1.WebSocketConnectionProvider);
        var terminalWatcher = ctx.container.get(terminal_watcher_1.TerminalWatcher);
        return connection.createProxy(shell_terminal_protocol_1.shellTerminalPath, terminalWatcher.getTerminalClient());
    }).inSingletonScope();
    bind(shell_terminal_protocol_1.IShellTerminalServer).toService(shell_terminal_protocol_1.ShellTerminalServerProxy);
    terminal_common_module_1.createCommonBindings(bind);
    // link matchers
    core_1.bindContributionProvider(bind, terminal_contribution_1.TerminalContribution);
    bind(terminal_linkmatcher_1.URLMatcher).toSelf().inSingletonScope();
    bind(terminal_contribution_1.TerminalContribution).toService(terminal_linkmatcher_1.URLMatcher);
    bind(terminal_linkmatcher_1.LocalhostMatcher).toSelf().inSingletonScope();
    bind(terminal_contribution_1.TerminalContribution).toService(terminal_linkmatcher_1.LocalhostMatcher);
    bind(terminal_linkmatcher_files_1.TerminalLinkmatcherFiles).toSelf().inSingletonScope();
    bind(terminal_contribution_1.TerminalContribution).toService(terminal_linkmatcher_files_1.TerminalLinkmatcherFiles);
    bind(terminal_linkmatcher_diff_1.TerminalLinkmatcherDiffPre).toSelf().inSingletonScope();
    bind(terminal_contribution_1.TerminalContribution).toService(terminal_linkmatcher_diff_1.TerminalLinkmatcherDiffPre);
    bind(terminal_linkmatcher_diff_1.TerminalLinkmatcherDiffPost).toSelf().inSingletonScope();
    bind(terminal_contribution_1.TerminalContribution).toService(terminal_linkmatcher_diff_1.TerminalLinkmatcherDiffPost);
});


/***/ }),

/***/ "./node_modules/@theia/terminal/lib/browser/terminal-linkmatcher-diff.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@theia/terminal/lib/browser/terminal-linkmatcher-diff.js ***!
  \*******************************************************************************/
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
exports.TerminalLinkmatcherDiffPost = exports.TerminalLinkmatcherDiffPre = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var terminal_linkmatcher_files_1 = __webpack_require__(/*! ./terminal-linkmatcher-files */ "./node_modules/@theia/terminal/lib/browser/terminal-linkmatcher-files.js");
var TerminalLinkmatcherDiffPre = /** @class */ (function (_super) {
    __extends(TerminalLinkmatcherDiffPre, _super);
    function TerminalLinkmatcherDiffPre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TerminalLinkmatcherDiffPre.prototype.getRegExp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, /^--- a\/(\S*)/];
            });
        });
    };
    TerminalLinkmatcherDiffPre = __decorate([
        inversify_1.injectable()
    ], TerminalLinkmatcherDiffPre);
    return TerminalLinkmatcherDiffPre;
}(terminal_linkmatcher_files_1.TerminalLinkmatcherFiles));
exports.TerminalLinkmatcherDiffPre = TerminalLinkmatcherDiffPre;
var TerminalLinkmatcherDiffPost = /** @class */ (function (_super) {
    __extends(TerminalLinkmatcherDiffPost, _super);
    function TerminalLinkmatcherDiffPost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TerminalLinkmatcherDiffPost.prototype.getRegExp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, /^\+\+\+ b\/(\S*)/];
            });
        });
    };
    TerminalLinkmatcherDiffPost = __decorate([
        inversify_1.injectable()
    ], TerminalLinkmatcherDiffPost);
    return TerminalLinkmatcherDiffPost;
}(terminal_linkmatcher_files_1.TerminalLinkmatcherFiles));
exports.TerminalLinkmatcherDiffPost = TerminalLinkmatcherDiffPost;


/***/ }),

/***/ "./node_modules/@theia/terminal/lib/browser/terminal-linkmatcher-files.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@theia/terminal/lib/browser/terminal-linkmatcher-files.js ***!
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
exports.TerminalLinkmatcherFiles = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var application_protocol_1 = __webpack_require__(/*! @theia/core/lib/common/application-protocol */ "./node_modules/@theia/core/lib/common/application-protocol.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var terminal_linkmatcher_1 = __webpack_require__(/*! ./terminal-linkmatcher */ "./node_modules/@theia/terminal/lib/browser/terminal-linkmatcher.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var common_2 = __webpack_require__(/*! @theia/filesystem/lib/common */ "./node_modules/@theia/filesystem/lib/common/index.js");
var TerminalLinkmatcherFiles = /** @class */ (function (_super) {
    __extends(TerminalLinkmatcherFiles, _super);
    function TerminalLinkmatcherFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TerminalLinkmatcherFiles.prototype.init = function () {
        this.backendOs = this.appServer.getBackendOS();
    };
    TerminalLinkmatcherFiles.prototype.getRegExp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var os, baseLocalLinkClause;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.backendOs];
                    case 1:
                        os = _a.sent();
                        baseLocalLinkClause = os === common_1.OS.Type.Windows ? winLocalLinkClause : unixLocalLinkClause;
                        return [2 /*return*/, new RegExp(baseLocalLinkClause + "(" + lineAndColumnClause + ")")];
                }
            });
        });
    };
    TerminalLinkmatcherFiles.prototype.getValidate = function (terminalWidget) {
        var _this = this;
        return function (match) { return __awaiter(_this, void 0, void 0, function () {
            var toOpen, _a, _b, f, err_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 5, , 6]);
                        _a = this.toURI;
                        _b = [match];
                        return [4 /*yield*/, terminalWidget.cwd];
                    case 1: return [4 /*yield*/, _a.apply(this, _b.concat([_c.sent()]))];
                    case 2:
                        toOpen = _c.sent();
                        if (!toOpen) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.fileSystem.getFileStat(toOpen.toString())];
                    case 3:
                        f = _c.sent();
                        // eslint-disable-next-line no-null/no-null
                        return [2 /*return*/, f !== undefined && f !== null && !f.isDirectory];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        err_1 = _c.sent();
                        console.trace('Error validating ' + match);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/, false];
                }
            });
        }); };
    };
    TerminalLinkmatcherFiles.prototype.getHandler = function (terminalWidget) {
        var _this = this;
        return function (event, fullMatch) { return __awaiter(_this, void 0, void 0, function () {
            var toOpen, _a, _b, position, options, opener_1, err_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.toURI;
                        _b = [fullMatch];
                        return [4 /*yield*/, terminalWidget.cwd];
                    case 1: return [4 /*yield*/, _a.apply(this, _b.concat([_c.sent()]))];
                    case 2:
                        toOpen = _c.sent();
                        if (!toOpen) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.extractPosition(fullMatch)];
                    case 3:
                        position = _c.sent();
                        options = {};
                        if (position) {
                            options = {
                                selection: {
                                    start: position
                                }
                            };
                        }
                        _c.label = 4;
                    case 4:
                        _c.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.openerService.getOpener(toOpen, options)];
                    case 5:
                        opener_1 = _c.sent();
                        opener_1.open(toOpen, options);
                        return [3 /*break*/, 7];
                    case 6:
                        err_2 = _c.sent();
                        console.error('Cannot open link ' + fullMatch, err_2);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
    };
    TerminalLinkmatcherFiles.prototype.toURI = function (match, cwd) {
        return __awaiter(this, void 0, void 0, function () {
            var path, pathObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.extractPath(match)];
                    case 1:
                        path = _a.sent();
                        if (!path) {
                            return [2 /*return*/];
                        }
                        pathObj = new core_1.Path(path);
                        return [2 /*return*/, pathObj.isAbsolute ? cwd.withPath(path) : cwd.resolve(path)];
                }
            });
        });
    };
    TerminalLinkmatcherFiles.prototype.extractPosition = function (link) {
        return __awaiter(this, void 0, void 0, function () {
            var matches, info, lineAndColumnMatchIndex, i, lineMatchIndex, rowNumber, columnNumber;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRegExp()];
                    case 1:
                        matches = (_a.sent()).exec(link);
                        info = {
                            line: 1,
                            character: 1
                        };
                        if (!matches) {
                            return [2 /*return*/, info];
                        }
                        return [4 /*yield*/, this.backendOs];
                    case 2:
                        lineAndColumnMatchIndex = (_a.sent()) === common_1.OS.Type.Windows ? winLineAndColumnMatchIndex : unixLineAndColumnMatchIndex;
                        for (i = 0; i < lineAndColumnClause.length; i++) {
                            lineMatchIndex = lineAndColumnMatchIndex + (lineAndColumnClauseGroupCount * i);
                            rowNumber = matches[lineMatchIndex];
                            if (rowNumber) {
                                info.line = parseInt(rowNumber, 10) - 1;
                                columnNumber = matches[lineMatchIndex + 2];
                                if (columnNumber) {
                                    info.character = parseInt(columnNumber, 10) - 1;
                                }
                                break;
                            }
                        }
                        return [2 /*return*/, info];
                }
            });
        });
    };
    TerminalLinkmatcherFiles.prototype.extractPath = function (link) {
        return __awaiter(this, void 0, void 0, function () {
            var matches;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRegExp()];
                    case 1:
                        matches = (_a.sent()).exec(link);
                        if (!matches) {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, matches[1]];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(application_protocol_1.ApplicationServer),
        __metadata("design:type", Object)
    ], TerminalLinkmatcherFiles.prototype, "appServer", void 0);
    __decorate([
        inversify_1.inject(browser_1.OpenerService),
        __metadata("design:type", Object)
    ], TerminalLinkmatcherFiles.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(common_2.FileSystem),
        __metadata("design:type", Object)
    ], TerminalLinkmatcherFiles.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TerminalLinkmatcherFiles.prototype, "init", null);
    TerminalLinkmatcherFiles = __decorate([
        inversify_1.injectable()
    ], TerminalLinkmatcherFiles);
    return TerminalLinkmatcherFiles;
}(terminal_linkmatcher_1.AbstractCmdClickTerminalContribution));
exports.TerminalLinkmatcherFiles = TerminalLinkmatcherFiles;
// The following regular expressions are taken from:
// https://github.com/microsoft/vscode/blob/fbbc1aa80332189aa0d3006cb2159b79a9eba480/src/vs/workbench/contrib/terminal/browser/terminalLinkHandler.ts
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var pathPrefix = '(\\.\\.?|\\~)';
var pathSeparatorClause = '\\/';
// '":; are allowed in paths but they are often separators so ignore them
// Also disallow \\ to prevent a catastrophic backtracking case #24798
var excludedPathCharactersClause = '[^\\0\\s!$`&*()\\[\\]+\'":;\\\\]';
/** A regex that matches paths in the form /foo, ~/foo, ./foo, ../foo, foo/bar */
var unixLocalLinkClause = '((' + pathPrefix + '|(' + excludedPathCharactersClause + ')+)?(' + pathSeparatorClause + '(' + excludedPathCharactersClause + ')+)+)';
var winDrivePrefix = '[a-zA-Z]:';
var winPathPrefix = '(' + winDrivePrefix + '|\\.\\.?|\\~)';
var winPathSeparatorClause = '(\\\\|\\/)';
var winExcludedPathCharactersClause = '[^\\0<>\\?\\|\\/\\s!$`&*()\\[\\]+\'":;]';
/** A regex that matches paths in the form c:\foo, ~\foo, .\foo, ..\foo, foo\bar */
var winLocalLinkClause = '((' + winPathPrefix + '|(' + winExcludedPathCharactersClause + ')+)?(' + winPathSeparatorClause + '(' + winExcludedPathCharactersClause + ')+)+)';
/** As xterm reads from DOM, space in that case is non-breaking char ASCII code - 160, replacing space with nonBreakingSpace or space ASCII code - 32. */
var lineAndColumnClause = [
    // "(file path)", line 45 [see #40468]
    '((\\S*)", line ((\\d+)( column (\\d+))?))',
    // (file path) on line 8, column 13
    '((\\S*) on line ((\\d+)(, column (\\d+))?))',
    // (file path):line 8, column 13
    '((\\S*):line ((\\d+)(, column (\\d+))?))',
    // (file path)(45), (file path) (45), (file path)(45,18), (file path) (45,18), (file path)(45, 18), (file path) (45, 18), also with []
    '(([^\\s\\(\\)]*)(\\s?[\\(\\[](\\d+)(,\\s?(\\d+))?)[\\)\\]])',
    // (file path):336, (file path):336:9
    '(([^:\\s\\(\\)<>\'\"\\[\\]]*)(:(\\d+))?(:(\\d+))?)'
].join('|').replace(/ /g, "[" + '\u00A0' + " ]");
// Changing any regex may effect this value, hence changes this as well if required.
var winLineAndColumnMatchIndex = 12;
var unixLineAndColumnMatchIndex = 11;
// Each line and column clause have 6 groups (ie no. of expressions in round brackets)
var lineAndColumnClauseGroupCount = 6;


/***/ }),

/***/ "./node_modules/@theia/terminal/lib/browser/terminal-linkmatcher.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@theia/terminal/lib/browser/terminal-linkmatcher.js ***!
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
exports.LocalhostMatcher = exports.URLMatcher = exports.AbstractCmdClickTerminalContribution = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var opener_service_1 = __webpack_require__(/*! @theia/core/lib/browser/opener-service */ "./node_modules/@theia/core/lib/browser/opener-service.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var AbstractCmdClickTerminalContribution = /** @class */ (function () {
    function AbstractCmdClickTerminalContribution() {
    }
    AbstractCmdClickTerminalContribution.prototype.getValidate = function (terminalWidget) {
        return function () { return Promise.resolve(true); };
    };
    AbstractCmdClickTerminalContribution.prototype.onCreate = function (terminalWidget) {
        return __awaiter(this, void 0, void 0, function () {
            var term, regexp, handler, validate, wrappedHandler, matcherId;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        term = terminalWidget.getTerminal();
                        return [4 /*yield*/, this.getRegExp(terminalWidget)];
                    case 1:
                        regexp = _a.sent();
                        handler = this.getHandler(terminalWidget);
                        validate = this.getValidate(terminalWidget);
                        wrappedHandler = function (event, match) {
                            event.preventDefault();
                            if (_this.isCommandPressed(event) || _this.wasTouchEvent(event, terminalWidget.lastTouchEndEvent)) {
                                handler(event, match);
                            }
                            else {
                                term.focus();
                            }
                        };
                        matcherId = term.registerLinkMatcher(regexp, wrappedHandler, {
                            willLinkActivate: function (event, uri) { return _this.isCommandPressed(event) || _this.wasTouchEvent(event, terminalWidget.lastTouchEndEvent); },
                            tooltipCallback: function (event, uri) {
                                if (!_this.wasTouchEvent(event, terminalWidget.lastTouchEndEvent)) {
                                    terminalWidget.showHoverMessage(event.clientX, event.clientY, _this.getHoverMessage());
                                }
                            },
                            leaveCallback: function () {
                                terminalWidget.hideHover();
                            },
                            validationCallback: function (uri, callBack) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            _a = callBack;
                                            return [4 /*yield*/, validate(uri)];
                                        case 1:
                                            _a.apply(void 0, [_b.sent()]);
                                            return [2 /*return*/];
                                    }
                                });
                            }); }
                        });
                        terminalWidget.onDispose(function () {
                            term.deregisterLinkMatcher(matcherId);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AbstractCmdClickTerminalContribution.prototype.isCommandPressed = function (event) {
        return core_1.isOSX ? event.metaKey : event.ctrlKey;
    };
    AbstractCmdClickTerminalContribution.prototype.wasTouchEvent = function (event, lastTouchEnd) {
        if (!lastTouchEnd) {
            return false;
        }
        if ((event.timeStamp - lastTouchEnd.timeStamp) > 400) {
            // A 'touchend' event typically precedes a matching 'click' event by 50ms.
            return false;
        }
        if (Math.abs(event.pageX - lastTouchEnd.pageX) > 5) {
            // Matching 'touchend' and 'click' events typically have the same page coordinates,
            // plus or minus 1 pixel.
            return false;
        }
        if (Math.abs(event.pageY - lastTouchEnd.pageY) > 5) {
            return false;
        }
        // We have a match! This link was tapped.
        return true;
    };
    AbstractCmdClickTerminalContribution.prototype.getHoverMessage = function () {
        if (core_1.isOSX) {
            return 'Cmd + click to follow link';
        }
        else {
            return 'Ctrl + click to follow link';
        }
    };
    AbstractCmdClickTerminalContribution = __decorate([
        inversify_1.injectable()
    ], AbstractCmdClickTerminalContribution);
    return AbstractCmdClickTerminalContribution;
}());
exports.AbstractCmdClickTerminalContribution = AbstractCmdClickTerminalContribution;
var URLMatcher = /** @class */ (function (_super) {
    __extends(URLMatcher, _super);
    function URLMatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    URLMatcher.prototype.getRegExp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/];
            });
        });
    };
    URLMatcher.prototype.getHandler = function () {
        var _this = this;
        return function (event, uri) {
            return opener_service_1.open(_this.openerService, new uri_1.default(uri));
        };
    };
    __decorate([
        inversify_1.inject(opener_service_1.OpenerService),
        __metadata("design:type", Object)
    ], URLMatcher.prototype, "openerService", void 0);
    URLMatcher = __decorate([
        inversify_1.injectable()
    ], URLMatcher);
    return URLMatcher;
}(AbstractCmdClickTerminalContribution));
exports.URLMatcher = URLMatcher;
var LocalhostMatcher = /** @class */ (function (_super) {
    __extends(LocalhostMatcher, _super);
    function LocalhostMatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalhostMatcher.prototype.getRegExp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, /(https?:\/\/)?(localhost|127\.0\.0\.1|0\.0\.0\.0)(:[0-9]{1,5})?([-a-zA-Z0-9@:%_\+.~#?&//=]*)/];
            });
        });
    };
    LocalhostMatcher.prototype.getHandler = function () {
        var _this = this;
        return function (event, matched) {
            var uri = matched.startsWith('http') ? matched : "http://" + matched;
            opener_service_1.open(_this.openerService, new uri_1.default(uri));
        };
    };
    __decorate([
        inversify_1.inject(opener_service_1.OpenerService),
        __metadata("design:type", Object)
    ], LocalhostMatcher.prototype, "openerService", void 0);
    LocalhostMatcher = __decorate([
        inversify_1.injectable()
    ], LocalhostMatcher);
    return LocalhostMatcher;
}(AbstractCmdClickTerminalContribution));
exports.LocalhostMatcher = LocalhostMatcher;


/***/ }),

/***/ "./node_modules/@theia/terminal/lib/browser/terminal-quick-open-service.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@theia/terminal/lib/browser/terminal-quick-open-service.js ***!
  \*********************************************************************************/
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
exports.TerminalQuickOpenContribution = exports.TerminalQuickOpenService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var terminal_service_1 = __webpack_require__(/*! ./base/terminal-service */ "./node_modules/@theia/terminal/lib/browser/base/terminal-service.js");
var terminal_frontend_contribution_1 = __webpack_require__(/*! ./terminal-frontend-contribution */ "./node_modules/@theia/terminal/lib/browser/terminal-frontend-contribution.js");
var TerminalQuickOpenService = /** @class */ (function () {
    function TerminalQuickOpenService() {
        this.prefix = 'term ';
    }
    Object.defineProperty(TerminalQuickOpenService.prototype, "description", {
        get: function () {
            return 'Show All Opened Terminals';
        },
        enumerable: false,
        configurable: true
    });
    TerminalQuickOpenService.prototype.getModel = function () {
        return this;
    };
    TerminalQuickOpenService.prototype.getOptions = function () {
        return {
            fuzzyMatchLabel: {
                enableSeparateSubstringMatching: true
            },
            fuzzyMatchDescription: {
                enableSeparateSubstringMatching: true
            }
        };
    };
    TerminalQuickOpenService.prototype.open = function () {
        this.prefixQuickOpenService.open(this.prefix);
    };
    TerminalQuickOpenService.prototype.onType = function (lookFor, acceptor) {
        return __awaiter(this, void 0, void 0, function () {
            var terminalItems, widgets, widgets_1, widgets_1_1, widget, item, e_1_1, createNewTerminalItem;
            var e_1, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        terminalItems = [];
                        widgets = this.terminalService.all
                            .sort(function (a, b) { return _this.compareItems(a, b); });
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        widgets_1 = __values(widgets), widgets_1_1 = widgets_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!widgets_1_1.done) return [3 /*break*/, 5];
                        widget = widgets_1_1.value;
                        return [4 /*yield*/, this.toItem(widget)];
                    case 3:
                        item = _b.sent();
                        terminalItems.push(item);
                        _b.label = 4;
                    case 4:
                        widgets_1_1 = widgets_1.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (widgets_1_1 && !widgets_1_1.done && (_a = widgets_1.return)) _a.call(widgets_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8:
                        createNewTerminalItem = new browser_1.QuickOpenGroupItem({
                            label: 'Open New Terminal',
                            iconClass: 'fa fa-plus',
                            run: this.doCreateNewTerminal(),
                            groupLabel: undefined,
                            showBorder: !!terminalItems.length
                        });
                        terminalItems.push(createNewTerminalItem);
                        acceptor(terminalItems);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Compare two terminal widgets by label. If labels are identical, compare by the widget id.
     * @param a `TerminalWidget` for comparison
     * @param b `TerminalWidget` for comparison
     */
    TerminalQuickOpenService.prototype.compareItems = function (a, b) {
        var normalize = function (str) { return str.trim().toLowerCase(); };
        if (normalize(a.title.label) !== normalize(b.title.label)) {
            return normalize(a.title.label).localeCompare(normalize(b.title.label));
        }
        else {
            return normalize(a.id).localeCompare(normalize(b.id));
        }
    };
    /**
     * Get the function that can create a new terminal.
     * @param {TerminalWidget} widget - the terminal widget to be opened.
     * @returns Function that would create a new terminal if mode === QuickOpenMode.OPEN.
     */
    TerminalQuickOpenService.prototype.doCreateNewTerminal = function () {
        var _this = this;
        return function (mode) {
            if (mode !== browser_1.QuickOpenMode.OPEN) {
                return false;
            }
            _this.commandService.executeCommand(terminal_frontend_contribution_1.TerminalCommands.NEW.id);
            return true;
        };
    };
    /**
     * Convert the terminal widget to the quick open item.
     * @param {TerminalWidget} widget - the terminal widget.
     * @returns The quick open group item.
     */
    TerminalQuickOpenService.prototype.toItem = function (widget) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                options = {
                    label: widget.title.label,
                    description: widget.id,
                    tooltip: widget.title.label,
                    hidden: false,
                    run: this.getRunFunction(widget),
                    groupLabel: undefined,
                    showBorder: false
                };
                return [2 /*return*/, new browser_1.QuickOpenGroupItem(options)];
            });
        });
    };
    /**
     * Get the function that can open the editor file.
     * @param {TerminalWidget} widget - the terminal widget to be opened.
     * @returns Function that would open the terminal if mode === QuickOpenMode.OPEN.
     */
    TerminalQuickOpenService.prototype.getRunFunction = function (widget) {
        var _this = this;
        return function (mode) {
            if (mode !== browser_1.QuickOpenMode.OPEN) {
                return false;
            }
            _this.terminalService.open(widget);
            return true;
        };
    };
    __decorate([
        inversify_1.inject(browser_1.PrefixQuickOpenService),
        __metadata("design:type", browser_1.PrefixQuickOpenService)
    ], TerminalQuickOpenService.prototype, "prefixQuickOpenService", void 0);
    __decorate([
        inversify_1.inject(common_1.CommandService),
        __metadata("design:type", Object)
    ], TerminalQuickOpenService.prototype, "commandService", void 0);
    __decorate([
        inversify_1.inject(terminal_service_1.TerminalService),
        __metadata("design:type", Object)
    ], TerminalQuickOpenService.prototype, "terminalService", void 0);
    TerminalQuickOpenService = __decorate([
        inversify_1.injectable()
    ], TerminalQuickOpenService);
    return TerminalQuickOpenService;
}());
exports.TerminalQuickOpenService = TerminalQuickOpenService;
/**
 * TODO: merge it to TerminalFrontendContribution.
 */
var TerminalQuickOpenContribution = /** @class */ (function () {
    function TerminalQuickOpenContribution() {
    }
    TerminalQuickOpenContribution.prototype.registerQuickOpenHandlers = function (handlers) {
        handlers.registerHandler(this.terminalQuickOpenService);
    };
    TerminalQuickOpenContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(terminal_frontend_contribution_1.TerminalCommands.SHOW_ALL_OPENED_TERMINALS, {
            execute: function () { return _this.terminalQuickOpenService.open(); }
        });
    };
    __decorate([
        inversify_1.inject(TerminalQuickOpenService),
        __metadata("design:type", TerminalQuickOpenService)
    ], TerminalQuickOpenContribution.prototype, "terminalQuickOpenService", void 0);
    TerminalQuickOpenContribution = __decorate([
        inversify_1.injectable()
    ], TerminalQuickOpenContribution);
    return TerminalQuickOpenContribution;
}());
exports.TerminalQuickOpenContribution = TerminalQuickOpenContribution;


/***/ }),

/***/ "./node_modules/@theia/terminal/lib/common/terminal-common-module.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@theia/terminal/lib/common/terminal-common-module.js ***!
  \***************************************************************************/
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
exports.createCommonBindings = void 0;
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
/**
 * Create the bindings common to node and browser.
 *
 * @param bind The bind function from inversify.
 */
function createCommonBindings(bind) {
    bind(core_1.ILogger).toDynamicValue(function (ctx) {
        var logger = ctx.container.get(core_1.ILogger);
        return logger.child('terminal');
    }).inSingletonScope().whenTargetNamed('terminal');
}
exports.createCommonBindings = createCommonBindings;


/***/ }),

/***/ "./node_modules/@theia/terminal/src/browser/style/terminal.css":
/*!*********************************************************************!*\
  !*** ./node_modules/@theia/terminal/src/browser/style/terminal.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./terminal.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/terminal/src/browser/style/terminal.css");

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

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/terminal/src/browser/style/terminal.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/terminal/src/browser/style/terminal.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2017 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.terminal-container {\n    width:100%;\n    height:100%;\n    padding: var(--theia-code-padding);\n    background: var(--theia-terminal-background);\n}\n\n.xterm .xterm-screen canvas {\n  /* fix random 1px white border on terminal in Firefox. See https://github.com/eclipse-theia/theia/issues/4665 */\n  border: 1px solid var(--theia-terminal-background);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/xterm/css/xterm.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/xterm/css/xterm.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Copyright (c) 2014 The xterm.js authors. All rights reserved.\n * Copyright (c) 2012-2013, Christopher Jeffrey (MIT License)\n * https://github.com/chjj/term.js\n * @license MIT\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n *\n * Originally forked from (with the author's permission):\n *   Fabrice Bellard's javascript vt100 for jslinux:\n *   http://bellard.org/jslinux/\n *   Copyright (c) 2011 Fabrice Bellard\n *   The original design remains. The terminal itself\n *   has been extended to include xterm CSI codes, among\n *   other features.\n */\n\n/**\n *  Default styles for xterm.js\n */\n\n.xterm {\n    font-feature-settings: \"liga\" 0;\n    position: relative;\n    user-select: none;\n    -ms-user-select: none;\n    -webkit-user-select: none;\n}\n\n.xterm.focus,\n.xterm:focus {\n    outline: none;\n}\n\n.xterm .xterm-helpers {\n    position: absolute;\n    top: 0;\n    /**\n     * The z-index of the helpers must be higher than the canvases in order for\n     * IMEs to appear on top.\n     */\n    z-index: 5;\n}\n\n.xterm .xterm-helper-textarea {\n    padding: 0;\n    border: 0;\n    margin: 0;\n    /* Move textarea out of the screen to the far left, so that the cursor is not visible */\n    position: absolute;\n    opacity: 0;\n    left: -9999em;\n    top: 0;\n    width: 0;\n    height: 0;\n    z-index: -5;\n    /** Prevent wrapping so the IME appears against the textarea at the correct position */\n    white-space: nowrap;\n    overflow: hidden;\n    resize: none;\n}\n\n.xterm .composition-view {\n    /* TODO: Composition position got messed up somewhere */\n    background: #000;\n    color: #FFF;\n    display: none;\n    position: absolute;\n    white-space: nowrap;\n    z-index: 1;\n}\n\n.xterm .composition-view.active {\n    display: block;\n}\n\n.xterm .xterm-viewport {\n    /* On OS X this is required in order for the scroll bar to appear fully opaque */\n    background-color: #000;\n    overflow-y: scroll;\n    cursor: default;\n    position: absolute;\n    right: 0;\n    left: 0;\n    top: 0;\n    bottom: 0;\n}\n\n.xterm .xterm-screen {\n    position: relative;\n}\n\n.xterm .xterm-screen canvas {\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n\n.xterm .xterm-scroll-area {\n    visibility: hidden;\n}\n\n.xterm-char-measure-element {\n    display: inline-block;\n    visibility: hidden;\n    position: absolute;\n    top: 0;\n    left: -9999em;\n    line-height: normal;\n}\n\n.xterm {\n    cursor: text;\n}\n\n.xterm.enable-mouse-events {\n    /* When mouse events are enabled (eg. tmux), revert to the standard pointer cursor */\n    cursor: default;\n}\n\n.xterm.xterm-cursor-pointer {\n    cursor: pointer;\n}\n\n.xterm.column-select.focus {\n    /* Column selection mode */\n    cursor: crosshair;\n}\n\n.xterm .xterm-accessibility,\n.xterm .xterm-message {\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 10;\n    color: transparent;\n}\n\n.xterm .live-region {\n    position: absolute;\n    left: -9999px;\n    width: 1px;\n    height: 1px;\n    overflow: hidden;\n}\n\n.xterm-dim {\n    opacity: 0.5;\n}\n\n.xterm-underline {\n    text-decoration: underline;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/xterm/css/xterm.css":
/*!******************************************!*\
  !*** ./node_modules/xterm/css/xterm.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader!./xterm.css */ "./node_modules/css-loader/index.js!./node_modules/xterm/css/xterm.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);
//# sourceMappingURL=54.bundle.js.map