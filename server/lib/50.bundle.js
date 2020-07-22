(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-browser-module.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-browser-module.js ***!
  \*************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerModule = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
Object.defineProperty(exports, "ContainerModule", { enumerable: true, get: function () { return inversify_1.ContainerModule; } });
var monaco_loader_1 = __webpack_require__(/*! ./monaco-loader */ "./node_modules/@theia/monaco/lib/browser/monaco-loader.js");
exports.default = monaco_loader_1.loadVsRequire(window)
    .then(function (vsRequire) { return monaco_loader_1.loadMonaco(vsRequire); })
    .then(function () {
    return Promise.resolve().then(function () { return __webpack_require__(/*! ./monaco-frontend-module */ "./node_modules/@theia/monaco/lib/browser/monaco-frontend-module.js"); });
}).then(function (module) {
    return module.default;
});


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-color-registry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-color-registry.js ***!
  \*************************************************************************/
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
exports.MonacoColorRegistry = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var color_registry_1 = __webpack_require__(/*! @theia/core/lib/browser/color-registry */ "./node_modules/@theia/core/lib/browser/color-registry.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var MonacoColorRegistry = /** @class */ (function (_super) {
    __extends(MonacoColorRegistry, _super);
    function MonacoColorRegistry() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.monacoThemeService = monaco.services.StaticServices.standaloneThemeService.get();
        _this.monacoColorRegistry = monaco.color.getColorRegistry();
        return _this;
    }
    MonacoColorRegistry.prototype.getColors = function () {
        var _a, _b, id, e_1_1;
        var e_1, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    _a = __values(this.monacoColorRegistry.getColors()), _b = _a.next();
                    _d.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 4];
                    id = _b.value.id;
                    return [4 /*yield*/, id];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
    MonacoColorRegistry.prototype.getCurrentColor = function (id) {
        var color = this.monacoThemeService.getTheme().getColor(id);
        return color && color.toString();
    };
    MonacoColorRegistry.prototype.doRegister = function (definition) {
        var _this = this;
        var defaults;
        if (definition.defaults) {
            defaults = {};
            defaults.dark = this.toColor(definition.defaults.dark);
            defaults.light = this.toColor(definition.defaults.light);
            defaults.hc = this.toColor(definition.defaults.hc);
        }
        var identifier = this.monacoColorRegistry.registerColor(definition.id, defaults, definition.description);
        return disposable_1.Disposable.create(function () { return _this.monacoColorRegistry.deregisterColor(identifier); });
    };
    MonacoColorRegistry.prototype.toColor = function (value) {
        if (!value || typeof value === 'string') {
            return value;
        }
        if ('kind' in value) {
            return monaco.color[value.kind](value.v, value.f);
        }
        else if ('r' in value) {
            var r = value.r, g = value.g, b = value.b, a = value.a;
            return new monaco.color.Color(new monaco.color.RGBA(r, g, b, a));
        }
        else {
            var h = value.h, s = value.s, l = value.l, a = value.a;
            return new monaco.color.Color(new monaco.color.HSLA(h, s, l, a));
        }
    };
    MonacoColorRegistry = __decorate([
        inversify_1.injectable()
    ], MonacoColorRegistry);
    return MonacoColorRegistry;
}(color_registry_1.ColorRegistry));
exports.MonacoColorRegistry = MonacoColorRegistry;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-command-registry.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-command-registry.js ***!
  \***************************************************************************/
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
exports.MonacoCommandRegistry = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var monaco_editor_provider_1 = __webpack_require__(/*! ./monaco-editor-provider */ "./node_modules/@theia/monaco/lib/browser/monaco-editor-provider.js");
var MonacoCommandRegistry = /** @class */ (function () {
    function MonacoCommandRegistry() {
    }
    MonacoCommandRegistry.prototype.validate = function (command) {
        return this.commands.commandIds.indexOf(command) !== -1 ? command : undefined;
    };
    MonacoCommandRegistry.prototype.registerCommand = function (command, handler) {
        this.commands.registerCommand(__assign(__assign({}, command), { id: command.id }), this.newHandler(handler));
    };
    MonacoCommandRegistry.prototype.registerHandler = function (command, handler) {
        this.commands.registerHandler(command, this.newHandler(handler));
    };
    MonacoCommandRegistry.prototype.newHandler = function (monacoHandler) {
        var _this = this;
        return {
            execute: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.execute.apply(_this, __spread([monacoHandler], args));
            },
            isEnabled: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.isEnabled.apply(_this, __spread([monacoHandler], args));
            },
            isVisible: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.isVisible.apply(_this, __spread([monacoHandler], args));
            }
        };
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MonacoCommandRegistry.prototype.execute = function (monacoHandler) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var editor = this.monacoEditors.current;
        if (editor) {
            return Promise.resolve(monacoHandler.execute.apply(monacoHandler, __spread([editor], args)));
        }
        return Promise.resolve();
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MonacoCommandRegistry.prototype.isEnabled = function (monacoHandler) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var editor = this.monacoEditors.current;
        return !!editor && (!monacoHandler.isEnabled || monacoHandler.isEnabled.apply(monacoHandler, __spread([editor], args)));
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MonacoCommandRegistry.prototype.isVisible = function (monacoHandler) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return browser_1.TextEditorSelection.is(this.selectionService.selection);
    };
    __decorate([
        inversify_1.inject(monaco_editor_provider_1.MonacoEditorProvider),
        __metadata("design:type", monaco_editor_provider_1.MonacoEditorProvider)
    ], MonacoCommandRegistry.prototype, "monacoEditors", void 0);
    __decorate([
        inversify_1.inject(core_1.CommandRegistry),
        __metadata("design:type", core_1.CommandRegistry)
    ], MonacoCommandRegistry.prototype, "commands", void 0);
    __decorate([
        inversify_1.inject(core_1.SelectionService),
        __metadata("design:type", core_1.SelectionService)
    ], MonacoCommandRegistry.prototype, "selectionService", void 0);
    MonacoCommandRegistry = __decorate([
        inversify_1.injectable()
    ], MonacoCommandRegistry);
    return MonacoCommandRegistry;
}());
exports.MonacoCommandRegistry = MonacoCommandRegistry;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-command.js":
/*!******************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-command.js ***!
  \******************************************************************/
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
exports.MonacoEditorCommandHandlers = exports.MonacoCommands = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var lib_1 = __webpack_require__(/*! monaco-languageclient/lib */ "./node_modules/monaco-languageclient/lib/index.js");
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "./node_modules/@theia/core/lib/common/command.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var quick_open_service_1 = __webpack_require__(/*! @theia/core/lib/browser/quick-open/quick-open-service */ "./node_modules/@theia/core/lib/browser/quick-open/quick-open-service.js");
var quick_open_model_1 = __webpack_require__(/*! @theia/core/lib/browser/quick-open/quick-open-model */ "./node_modules/@theia/core/lib/browser/quick-open/quick-open-model.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var monaco_command_registry_1 = __webpack_require__(/*! ./monaco-command-registry */ "./node_modules/@theia/monaco/lib/browser/monaco-command-registry.js");
var monaco_editor_service_1 = __webpack_require__(/*! ./monaco-editor-service */ "./node_modules/@theia/monaco/lib/browser/monaco-editor-service.js");
var monaco_text_model_service_1 = __webpack_require__(/*! ./monaco-text-model-service */ "./node_modules/@theia/monaco/lib/browser/monaco-text-model-service.js");
var MonacoCommands;
(function (MonacoCommands) {
    MonacoCommands.COMMON_ACTIONS = new Map([
        ['undo', browser_1.CommonCommands.UNDO.id],
        ['redo', browser_1.CommonCommands.REDO.id],
        ['editor.action.selectAll', browser_1.CommonCommands.SELECT_ALL.id],
        ['actions.find', browser_1.CommonCommands.FIND.id],
        ['editor.action.startFindReplaceAction', browser_1.CommonCommands.REPLACE.id]
    ]);
    MonacoCommands.GO_TO_DEFINITION = 'editor.action.revealDefinition';
    MonacoCommands.EXCLUDE_ACTIONS = new Set([
        'editor.action.quickCommand',
        'editor.action.clipboardCutAction',
        'editor.action.clipboardCopyAction',
        'editor.action.clipboardPasteAction'
    ]);
})(MonacoCommands = exports.MonacoCommands || (exports.MonacoCommands = {}));
var MonacoEditorCommandHandlers = /** @class */ (function () {
    function MonacoEditorCommandHandlers() {
    }
    MonacoEditorCommandHandlers.prototype.registerCommands = function () {
        this.registerMonacoCommands();
        this.registerEditorCommandHandlers();
    };
    /**
     * Register commands from Monaco to Theia registry.
     *
     * Monaco has different kind of commands which should be handled differently by Theia.
     *
     * ### Editor Actions
     *
     * They should be registered with a label to be visible in the quick command palette.
     *
     * Such actions should be enabled only if the current editor is available and
     * it supports such action in the current context.
     *
     * ### Editor Commands
     *
     * Such actions should be enabled only if the current editor is available.
     *
     * `actions.find` and `editor.action.startFindReplaceAction` are registed as handlers for `find` and `replace`.
     * If handlers are not enabled then the core should prevent the default browser behaviour.
     * Other Theia extensions can register alternative implementations using custom enablement.
     *
     * ### Global Commands
     *
     * These commands are not necessary dependend on the current editor and enabled always.
     * But they depend on services which are global in VS Code, but bound to the editor in Monaco,
     * i.e. `ICodeEditorService` or `IContextKeyService`. We should take care of providing Theia implementations for such services.
     *
     * #### Global Native or Editor Commands
     *
     * Namely: `undo`, `redo` and `editor.action.selectAll`. They depend on `ICodeEditorService`.
     * They will try to delegate to the current editor and if it is not available delegate to the browser.
     * They are registered as handlers for corresponding core commands always.
     * Other Theia extensions can provide alternative implementations by introducing a dependency to `@theia/monaco` extension.
     *
     * #### Global Language Commands
     *
     * Like `_executeCodeActionProvider`, they depend on `ICodeEditorService` and `ITextModelService`.
     *
     * #### Global Context Commands
     *
     * It is `setContext`. It depends on `IContextKeyService`.
     *
     * #### Global Editor Commands
     *
     * Like `openReferenceToSide` and `openReference`, they depend on `IListService`.
     * We treat all commands which don't match any other category of global commands as global editor commands
     * and execute them using the instantiation service of the current editor.
     */
    MonacoEditorCommandHandlers.prototype.registerMonacoCommands = function () {
        var e_1, _a;
        var editorRegistry = monaco.editorExtensions.EditorExtensionsRegistry;
        var editorActions = new Map(editorRegistry.getEditorActions().map(function (_a) {
            var id = _a.id, label = _a.label;
            return [id, label];
        }));
        var _b = this, codeEditorService = _b.codeEditorService, textModelService = _b.textModelService, contextKeyService = _b.contextKeyService;
        var _c = __read(monaco.services.StaticServices.init({ codeEditorService: codeEditorService, textModelService: textModelService, contextKeyService: contextKeyService }), 2), globalInstantiationService = _c[1];
        var monacoCommands = monaco.commands.CommandsRegistry.getCommands();
        var _loop_1 = function (id) {
            if (MonacoCommands.EXCLUDE_ACTIONS.has(id)) {
                return "continue";
            }
            var handler = {
                execute: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    /*
                     * We check monaco focused code editor first since they can contain inline like the debug console and embedded editors like in the peek reference.
                     * If there is not such then we check last focused editor tracked by us.
                     */
                    var editor = codeEditorService.getFocusedCodeEditor() || codeEditorService.getActiveCodeEditor();
                    if (editorActions.has(id)) {
                        var action = editor && editor.getAction(id);
                        if (!action) {
                            return;
                        }
                        return action.run();
                    }
                    var editorCommand = !!editorRegistry.getEditorCommand(id) ||
                        !(id.startsWith('_execute') || id === 'setContext' || MonacoCommands.COMMON_ACTIONS.has(id));
                    var instantiationService = editorCommand ? editor && editor['_instantiationService'] : globalInstantiationService;
                    if (!instantiationService) {
                        return;
                    }
                    return instantiationService.invokeFunction.apply(instantiationService, __spread([monacoCommands.get(id).handler], args));
                },
                isEnabled: function () {
                    var editor = codeEditorService.getFocusedCodeEditor() || codeEditorService.getActiveCodeEditor();
                    if (editorActions.has(id)) {
                        var action = editor && editor.getAction(id);
                        return !!action && action.isSupported();
                    }
                    if (!!editorRegistry.getEditorCommand(id)) {
                        return !!editor;
                    }
                    return true;
                }
            };
            var label = editorActions.get(id);
            this_1.commandRegistry.registerCommand({ id: id, label: label }, handler);
            var coreCommand = MonacoCommands.COMMON_ACTIONS.get(id);
            if (coreCommand) {
                this_1.commandRegistry.registerHandler(coreCommand, handler);
            }
        };
        var this_1 = this;
        try {
            for (var _d = __values(monacoCommands.keys()), _e = _d.next(); !_e.done; _e = _d.next()) {
                var id = _e.value;
                _loop_1(id);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    MonacoEditorCommandHandlers.prototype.registerEditorCommandHandlers = function () {
        this.monacoCommandRegistry.registerHandler(browser_2.EditorCommands.SHOW_REFERENCES.id, this.newShowReferenceHandler());
        this.monacoCommandRegistry.registerHandler(browser_2.EditorCommands.CONFIG_INDENTATION.id, this.newConfigIndentationHandler());
        this.monacoCommandRegistry.registerHandler(browser_2.EditorCommands.CONFIG_EOL.id, this.newConfigEolHandler());
        this.monacoCommandRegistry.registerHandler(browser_2.EditorCommands.INDENT_USING_SPACES.id, this.newConfigTabSizeHandler(true));
        this.monacoCommandRegistry.registerHandler(browser_2.EditorCommands.INDENT_USING_TABS.id, this.newConfigTabSizeHandler(false));
    };
    MonacoEditorCommandHandlers.prototype.newShowReferenceHandler = function () {
        var _this = this;
        return {
            execute: function (editor, uri, position, locations) {
                editor.commandService.executeCommand('editor.action.showReferences', monaco.Uri.parse(uri), _this.p2m.asPosition(position), locations.map(function (l) { return _this.p2m.asLocation(l); }));
            }
        };
    };
    MonacoEditorCommandHandlers.prototype.newConfigIndentationHandler = function () {
        var _this = this;
        return {
            execute: function (editor) { return _this.configureIndentation(editor); }
        };
    };
    MonacoEditorCommandHandlers.prototype.configureIndentation = function (editor) {
        var _this = this;
        var options = [true, false].map(function (useSpaces) {
            return new quick_open_model_1.QuickOpenItem({
                label: "Indent Using " + (useSpaces ? 'Spaces' : 'Tabs'),
                run: function (mode) {
                    if (mode === quick_open_model_1.QuickOpenMode.OPEN) {
                        _this.configureTabSize(editor, useSpaces);
                    }
                    return false;
                }
            });
        });
        this.quickOpenService.open({ onType: function (_, acceptor) { return acceptor(options); } }, {
            placeholder: 'Select Action',
            fuzzyMatchLabel: true
        });
    };
    MonacoEditorCommandHandlers.prototype.newConfigEolHandler = function () {
        var _this = this;
        return {
            execute: function (editor) { return _this.configureEol(editor); }
        };
    };
    MonacoEditorCommandHandlers.prototype.configureEol = function (editor) {
        var _this = this;
        var options = ['LF', 'CRLF'].map(function (lineEnding) {
            return new quick_open_model_1.QuickOpenItem({
                label: lineEnding,
                run: function (mode) {
                    if (mode === quick_open_model_1.QuickOpenMode.OPEN) {
                        _this.setEol(editor, lineEnding);
                        return true;
                    }
                    return false;
                }
            });
        });
        this.quickOpenService.open({ onType: function (_, acceptor) { return acceptor(options); } }, {
            placeholder: 'Select End of Line Sequence',
            fuzzyMatchLabel: true
        });
    };
    MonacoEditorCommandHandlers.prototype.setEol = function (editor, lineEnding) {
        var model = editor.document && editor.document.textEditorModel;
        if (model) {
            if (lineEnding === 'CRLF' || lineEnding === '\r\n') {
                model.pushEOL(monaco.editor.EndOfLineSequence.CRLF);
            }
            else {
                model.pushEOL(monaco.editor.EndOfLineSequence.LF);
            }
        }
    };
    MonacoEditorCommandHandlers.prototype.newConfigTabSizeHandler = function (useSpaces) {
        var _this = this;
        return {
            execute: function (editor) { return _this.configureTabSize(editor, useSpaces); }
        };
    };
    MonacoEditorCommandHandlers.prototype.configureTabSize = function (editor, useSpaces) {
        var model = editor.document && editor.document.textEditorModel;
        if (model) {
            var tabSize_1 = model.getOptions().tabSize;
            var sizes = Array.from(Array(8), function (_, x) { return x + 1; });
            var tabSizeOptions_1 = sizes.map(function (size) {
                return new quick_open_model_1.QuickOpenItem({
                    label: size === tabSize_1 ? size + "   Configured Tab Size" : size.toString(),
                    run: function (mode) {
                        if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
                            return false;
                        }
                        model.updateOptions({
                            tabSize: size || tabSize_1,
                            insertSpaces: useSpaces
                        });
                        return true;
                    }
                });
            });
            this.quickOpenService.open({ onType: function (_, acceptor) { return acceptor(tabSizeOptions_1); } }, {
                placeholder: 'Select Tab Size for Current File',
                fuzzyMatchLabel: true,
                selectIndex: function (lookFor) {
                    if (!lookFor || lookFor === '') {
                        return tabSize_1 - 1;
                    }
                    return 0;
                }
            });
        }
    };
    __decorate([
        inversify_1.inject(monaco_command_registry_1.MonacoCommandRegistry),
        __metadata("design:type", monaco_command_registry_1.MonacoCommandRegistry)
    ], MonacoEditorCommandHandlers.prototype, "monacoCommandRegistry", void 0);
    __decorate([
        inversify_1.inject(command_1.CommandRegistry),
        __metadata("design:type", command_1.CommandRegistry)
    ], MonacoEditorCommandHandlers.prototype, "commandRegistry", void 0);
    __decorate([
        inversify_1.inject(lib_1.ProtocolToMonacoConverter),
        __metadata("design:type", lib_1.ProtocolToMonacoConverter)
    ], MonacoEditorCommandHandlers.prototype, "p2m", void 0);
    __decorate([
        inversify_1.inject(quick_open_service_1.QuickOpenService),
        __metadata("design:type", quick_open_service_1.QuickOpenService)
    ], MonacoEditorCommandHandlers.prototype, "quickOpenService", void 0);
    __decorate([
        inversify_1.inject(monaco_editor_service_1.MonacoEditorService),
        __metadata("design:type", monaco_editor_service_1.MonacoEditorService)
    ], MonacoEditorCommandHandlers.prototype, "codeEditorService", void 0);
    __decorate([
        inversify_1.inject(monaco_text_model_service_1.MonacoTextModelService),
        __metadata("design:type", monaco_text_model_service_1.MonacoTextModelService)
    ], MonacoEditorCommandHandlers.prototype, "textModelService", void 0);
    __decorate([
        inversify_1.inject(monaco.contextKeyService.ContextKeyService),
        __metadata("design:type", monaco.contextKeyService.ContextKeyService)
    ], MonacoEditorCommandHandlers.prototype, "contextKeyService", void 0);
    MonacoEditorCommandHandlers = __decorate([
        inversify_1.injectable()
    ], MonacoEditorCommandHandlers);
    return MonacoEditorCommandHandlers;
}());
exports.MonacoEditorCommandHandlers = MonacoEditorCommandHandlers;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-frontend-application-contribution.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-frontend-application-contribution.js ***!
  \********************************************************************************************/
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
exports.MonacoFrontendApplicationContribution = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var monaco_snippet_suggest_provider_1 = __webpack_require__(/*! ./monaco-snippet-suggest-provider */ "./node_modules/@theia/monaco/lib/browser/monaco-snippet-suggest-provider.js");
var MonacoFrontendApplicationContribution = /** @class */ (function () {
    function MonacoFrontendApplicationContribution() {
    }
    MonacoFrontendApplicationContribution.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, language, registerLanguage;
            var e_1, _c;
            var _this = this;
            return __generator(this, function (_d) {
                monaco.suggest.setSnippetSuggestSupport(this.snippetSuggestProvider);
                try {
                    for (_a = __values(monaco.languages.getLanguages()), _b = _a.next(); !_b.done; _b = _a.next()) {
                        language = _b.value;
                        this.preferenceSchema.registerOverrideIdentifier(language.id);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                registerLanguage = monaco.languages.register.bind(monaco.languages);
                monaco.languages.register = function (language) {
                    // first register override identifier, because monaco will immediately update already opened documents and then initialize with bad preferences.
                    _this.preferenceSchema.registerOverrideIdentifier(language.id);
                    registerLanguage(language);
                };
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_1.inject(monaco_snippet_suggest_provider_1.MonacoSnippetSuggestProvider),
        __metadata("design:type", monaco_snippet_suggest_provider_1.MonacoSnippetSuggestProvider)
    ], MonacoFrontendApplicationContribution.prototype, "snippetSuggestProvider", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceSchemaProvider),
        __metadata("design:type", browser_1.PreferenceSchemaProvider)
    ], MonacoFrontendApplicationContribution.prototype, "preferenceSchema", void 0);
    MonacoFrontendApplicationContribution = __decorate([
        inversify_1.injectable()
    ], MonacoFrontendApplicationContribution);
    return MonacoFrontendApplicationContribution;
}());
exports.MonacoFrontendApplicationContribution = MonacoFrontendApplicationContribution;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-frontend-module.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-frontend-module.js ***!
  \**************************************************************************/
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
exports.createMonacoConfigurationService = exports.MonacoConfigurationService = void 0;
__webpack_require__(/*! ../../src/browser/style/index.css */ "./node_modules/@theia/monaco/src/browser/style/index.css");
__webpack_require__(/*! ../../src/browser/style/symbol-sprite.svg */ "./node_modules/@theia/monaco/src/browser/style/symbol-sprite.svg");
__webpack_require__(/*! ../../src/browser/style/symbol-icons.css */ "./node_modules/@theia/monaco/src/browser/style/symbol-icons.css");
var debounce = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var preference_scope_1 = __webpack_require__(/*! @theia/core/lib/common/preferences/preference-scope */ "./node_modules/@theia/core/lib/common/preferences/preference-scope.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/languages/lib/browser */ "./node_modules/@theia/languages/lib/browser/index.js");
var browser_3 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var editor_keybinding_contexts_1 = __webpack_require__(/*! @theia/editor/lib/browser/editor-keybinding-contexts */ "./node_modules/@theia/editor/lib/browser/editor-keybinding-contexts.js");
var monaco_languageclient_1 = __webpack_require__(/*! monaco-languageclient */ "./node_modules/monaco-languageclient/lib/index.js");
var monaco_editor_provider_1 = __webpack_require__(/*! ./monaco-editor-provider */ "./node_modules/@theia/monaco/lib/browser/monaco-editor-provider.js");
var monaco_menu_1 = __webpack_require__(/*! ./monaco-menu */ "./node_modules/@theia/monaco/lib/browser/monaco-menu.js");
var monaco_command_1 = __webpack_require__(/*! ./monaco-command */ "./node_modules/@theia/monaco/lib/browser/monaco-command.js");
var monaco_keybinding_1 = __webpack_require__(/*! ./monaco-keybinding */ "./node_modules/@theia/monaco/lib/browser/monaco-keybinding.js");
var monaco_languages_1 = __webpack_require__(/*! ./monaco-languages */ "./node_modules/@theia/monaco/lib/browser/monaco-languages.js");
var monaco_workspace_1 = __webpack_require__(/*! ./monaco-workspace */ "./node_modules/@theia/monaco/lib/browser/monaco-workspace.js");
var monaco_configurations_1 = __webpack_require__(/*! ./monaco-configurations */ "./node_modules/@theia/monaco/lib/browser/monaco-configurations.js");
var monaco_editor_service_1 = __webpack_require__(/*! ./monaco-editor-service */ "./node_modules/@theia/monaco/lib/browser/monaco-editor-service.js");
var monaco_text_model_service_1 = __webpack_require__(/*! ./monaco-text-model-service */ "./node_modules/@theia/monaco/lib/browser/monaco-text-model-service.js");
var monaco_context_menu_1 = __webpack_require__(/*! ./monaco-context-menu */ "./node_modules/@theia/monaco/lib/browser/monaco-context-menu.js");
var monaco_outline_contribution_1 = __webpack_require__(/*! ./monaco-outline-contribution */ "./node_modules/@theia/monaco/lib/browser/monaco-outline-contribution.js");
var monaco_status_bar_contribution_1 = __webpack_require__(/*! ./monaco-status-bar-contribution */ "./node_modules/@theia/monaco/lib/browser/monaco-status-bar-contribution.js");
var monaco_command_service_1 = __webpack_require__(/*! ./monaco-command-service */ "./node_modules/@theia/monaco/lib/browser/monaco-command-service.js");
var monaco_command_registry_1 = __webpack_require__(/*! ./monaco-command-registry */ "./node_modules/@theia/monaco/lib/browser/monaco-command-registry.js");
var monaco_quick_open_service_1 = __webpack_require__(/*! ./monaco-quick-open-service */ "./node_modules/@theia/monaco/lib/browser/monaco-quick-open-service.js");
var monaco_diff_navigator_factory_1 = __webpack_require__(/*! ./monaco-diff-navigator-factory */ "./node_modules/@theia/monaco/lib/browser/monaco-diff-navigator-factory.js");
var monaco_keybinding_contexts_1 = __webpack_require__(/*! ./monaco-keybinding-contexts */ "./node_modules/@theia/monaco/lib/browser/monaco-keybinding-contexts.js");
var monaco_frontend_application_contribution_1 = __webpack_require__(/*! ./monaco-frontend-application-contribution */ "./node_modules/@theia/monaco/lib/browser/monaco-frontend-application-contribution.js");
var monaco_textmate_frontend_bindings_1 = __webpack_require__(/*! ./textmate/monaco-textmate-frontend-bindings */ "./node_modules/@theia/monaco/lib/browser/textmate/monaco-textmate-frontend-bindings.js");
var monaco_semantic_highlighting_service_1 = __webpack_require__(/*! ./monaco-semantic-highlighting-service */ "./node_modules/@theia/monaco/lib/browser/monaco-semantic-highlighting-service.js");
var semantic_highlighting_service_1 = __webpack_require__(/*! @theia/editor/lib/browser/semantic-highlight/semantic-highlighting-service */ "./node_modules/@theia/editor/lib/browser/semantic-highlight/semantic-highlighting-service.js");
var monaco_bulk_edit_service_1 = __webpack_require__(/*! ./monaco-bulk-edit-service */ "./node_modules/@theia/monaco/lib/browser/monaco-bulk-edit-service.js");
var monaco_outline_decorator_1 = __webpack_require__(/*! ./monaco-outline-decorator */ "./node_modules/@theia/monaco/lib/browser/monaco-outline-decorator.js");
var outline_decorator_service_1 = __webpack_require__(/*! @theia/outline-view/lib/browser/outline-decorator-service */ "./node_modules/@theia/outline-view/lib/browser/outline-decorator-service.js");
var monaco_snippet_suggest_provider_1 = __webpack_require__(/*! ./monaco-snippet-suggest-provider */ "./node_modules/@theia/monaco/lib/browser/monaco-snippet-suggest-provider.js");
var context_key_service_1 = __webpack_require__(/*! @theia/core/lib/browser/context-key-service */ "./node_modules/@theia/core/lib/browser/context-key-service.js");
var monaco_context_key_service_1 = __webpack_require__(/*! ./monaco-context-key-service */ "./node_modules/@theia/monaco/lib/browser/monaco-context-key-service.js");
var monaco_mime_service_1 = __webpack_require__(/*! ./monaco-mime-service */ "./node_modules/@theia/monaco/lib/browser/monaco-mime-service.js");
var mime_service_1 = __webpack_require__(/*! @theia/core/lib/browser/mime-service */ "./node_modules/@theia/core/lib/browser/mime-service.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "./node_modules/@theia/monaco/lib/browser/monaco-editor.js");
var monaco_color_registry_1 = __webpack_require__(/*! ./monaco-color-registry */ "./node_modules/@theia/monaco/lib/browser/monaco-color-registry.js");
var color_registry_1 = __webpack_require__(/*! @theia/core/lib/browser/color-registry */ "./node_modules/@theia/core/lib/browser/color-registry.js");
var monaco_theming_service_1 = __webpack_require__(/*! ./monaco-theming-service */ "./node_modules/@theia/monaco/lib/browser/monaco-theming-service.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
inversify_1.decorate(inversify_1.injectable(), monaco_languageclient_1.MonacoToProtocolConverter);
inversify_1.decorate(inversify_1.injectable(), monaco_languageclient_1.ProtocolToMonacoConverter);
inversify_1.decorate(inversify_1.injectable(), monaco.contextKeyService.ContextKeyService);
monaco_theming_service_1.MonacoThemingService.init();
exports.default = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    bind(monaco_theming_service_1.MonacoThemingService).toSelf().inSingletonScope();
    bind(monaco_context_key_service_1.MonacoContextKeyService).toSelf().inSingletonScope();
    rebind(context_key_service_1.ContextKeyService).toService(monaco_context_key_service_1.MonacoContextKeyService);
    bind(monaco_snippet_suggest_provider_1.MonacoSnippetSuggestProvider).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).to(monaco_frontend_application_contribution_1.MonacoFrontendApplicationContribution).inSingletonScope();
    bind(monaco_languageclient_1.MonacoToProtocolConverter).toSelf().inSingletonScope();
    bind(monaco_languageclient_1.ProtocolToMonacoConverter).toSelf().inSingletonScope();
    bind(monaco_languages_1.MonacoLanguages).toSelf().inSingletonScope();
    bind(browser_2.Languages).toService(monaco_languages_1.MonacoLanguages);
    bind(monaco_configurations_1.MonacoConfigurations).toSelf().inSingletonScope();
    bind(monaco_workspace_1.MonacoWorkspace).toSelf().inSingletonScope();
    bind(browser_2.Workspace).toService(monaco_workspace_1.MonacoWorkspace);
    bind(exports.MonacoConfigurationService).toDynamicValue(function (_a) {
        var container = _a.container;
        return createMonacoConfigurationService(container);
    }).inSingletonScope();
    bind(monaco.contextKeyService.ContextKeyService).toDynamicValue(function (_a) {
        var container = _a.container;
        return new monaco.contextKeyService.ContextKeyService(container.get(exports.MonacoConfigurationService));
    }).inSingletonScope();
    bind(monaco_bulk_edit_service_1.MonacoBulkEditService).toSelf().inSingletonScope();
    bind(monaco_editor_service_1.MonacoEditorService).toSelf().inSingletonScope();
    bind(monaco_text_model_service_1.MonacoTextModelService).toSelf().inSingletonScope();
    bind(monaco_context_menu_1.MonacoContextMenuService).toSelf().inSingletonScope();
    bind(monaco_editor_1.MonacoEditorServices).toSelf().inSingletonScope();
    bind(monaco_editor_provider_1.MonacoEditorProvider).toSelf().inSingletonScope();
    core_1.bindContributionProvider(bind, monaco_editor_provider_1.MonacoEditorFactory);
    core_1.bindContributionProvider(bind, monaco_text_model_service_1.MonacoEditorModelFactory);
    bind(monaco_command_service_1.MonacoCommandService).toSelf().inTransientScope();
    bind(monaco_command_service_1.MonacoCommandServiceFactory).toAutoFactory(monaco_command_service_1.MonacoCommandService);
    bind(browser_3.TextEditorProvider).toProvider(function (context) {
        return function (uri) { return context.container.get(monaco_editor_provider_1.MonacoEditorProvider).get(uri); };
    });
    bind(monaco_diff_navigator_factory_1.MonacoDiffNavigatorFactory).toSelf().inSingletonScope();
    bind(browser_3.DiffNavigatorProvider).toFactory(function (context) {
        return function (editor) { return context.container.get(monaco_editor_provider_1.MonacoEditorProvider).getDiffNavigator(editor); };
    });
    bind(monaco_outline_contribution_1.MonacoOutlineContribution).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).toService(monaco_outline_contribution_1.MonacoOutlineContribution);
    bind(monaco_status_bar_contribution_1.MonacoStatusBarContribution).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).toService(monaco_status_bar_contribution_1.MonacoStatusBarContribution);
    bind(monaco_command_registry_1.MonacoCommandRegistry).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).to(monaco_command_1.MonacoEditorCommandHandlers).inSingletonScope();
    bind(monaco_menu_1.MonacoEditorMenuContribution).toSelf().inSingletonScope();
    bind(common_1.MenuContribution).toService(monaco_menu_1.MonacoEditorMenuContribution);
    bind(monaco_keybinding_1.MonacoKeybindingContribution).toSelf().inSingletonScope();
    bind(browser_1.KeybindingContribution).toService(monaco_keybinding_1.MonacoKeybindingContribution);
    rebind(editor_keybinding_contexts_1.StrictEditorTextFocusContext).to(monaco_keybinding_contexts_1.MonacoStrictEditorTextFocusContext).inSingletonScope();
    bind(monaco_quick_open_service_1.MonacoQuickOpenService).toSelf().inSingletonScope();
    rebind(browser_1.QuickOpenService).toService(monaco_quick_open_service_1.MonacoQuickOpenService);
    monaco_textmate_frontend_bindings_1.default(bind, unbind, isBound, rebind);
    bind(monaco_semantic_highlighting_service_1.MonacoSemanticHighlightingService).toSelf().inSingletonScope();
    rebind(semantic_highlighting_service_1.SemanticHighlightingService).to(monaco_semantic_highlighting_service_1.MonacoSemanticHighlightingService).inSingletonScope();
    bind(monaco_outline_decorator_1.MonacoOutlineDecorator).toSelf().inSingletonScope();
    bind(outline_decorator_service_1.OutlineTreeDecorator).toService(monaco_outline_decorator_1.MonacoOutlineDecorator);
    bind(monaco_mime_service_1.MonacoMimeService).toSelf().inSingletonScope();
    rebind(mime_service_1.MimeService).toService(monaco_mime_service_1.MonacoMimeService);
    bind(monaco_color_registry_1.MonacoColorRegistry).toSelf().inSingletonScope();
    rebind(color_registry_1.ColorRegistry).toService(monaco_color_registry_1.MonacoColorRegistry);
});
exports.MonacoConfigurationService = Symbol('MonacoConfigurationService');
function createMonacoConfigurationService(container) {
    var configurations = container.get(monaco_configurations_1.MonacoConfigurations);
    var preferences = container.get(browser_1.PreferenceService);
    var preferenceSchemaProvider = container.get(browser_1.PreferenceSchemaProvider);
    var service = monaco.services.StaticServices.configurationService.get();
    var _configuration = service._configuration;
    _configuration.getValue = function (section, overrides, workspace) {
        var overrideIdentifier = overrides && 'overrideIdentifier' in overrides && overrides['overrideIdentifier'] || undefined;
        var resourceUri = overrides && 'resource' in overrides && !!overrides['resource'] && overrides['resource'].toString();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var proxy = browser_1.createPreferenceProxy(preferences, preferenceSchemaProvider.getCombinedSchema(), {
            resourceUri: resourceUri, overrideIdentifier: overrideIdentifier,
            style: 'both'
        });
        if (section) {
            return proxy[section];
        }
        return proxy;
    };
    var initFromConfiguration = debounce(function () {
        var event = new monaco.services.ConfigurationChangeEvent();
        event._source = 6 /* DEFAULT */;
        service._onDidChangeConfiguration.fire(event);
    });
    preferences.onPreferenceChanged(function (e) {
        if (e.scope === preference_scope_1.PreferenceScope.Default) {
            initFromConfiguration();
        }
    });
    configurations.onDidChangeConfiguration(function (e) {
        if (e.affectedSections) {
            var event_1 = new monaco.services.ConfigurationChangeEvent();
            event_1.change(e.affectedSections);
            service._onDidChangeConfiguration.fire(event_1);
        }
    });
    return service;
}
exports.createMonacoConfigurationService = createMonacoConfigurationService;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-keybinding-contexts.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-keybinding-contexts.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonacoStrictEditorTextFocusContext = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var editor_keybinding_contexts_1 = __webpack_require__(/*! @theia/editor/lib/browser/editor-keybinding-contexts */ "./node_modules/@theia/editor/lib/browser/editor-keybinding-contexts.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "./node_modules/@theia/monaco/lib/browser/monaco-editor.js");
/**
 * Besides checking whether this editor is the currently active one and has the focus, it also checks the followings:
 *  - the suggest widget is visible
 *  - the find (and replace) widget is visible.
 *  - the rename input widget (which we use for refactoring and not find and replace) is visible.
 *
 * If any of the above-mentioned additional checks evaluates to `true` the `canHandle` will evaluate to `false`.
 *
 * See: https://github.com/eamodio/vscode-gitlens/blob/57226d54d1e929be04b02ee31ca294c50305481b/package.json#L2857
 */
var MonacoStrictEditorTextFocusContext = /** @class */ (function (_super) {
    __extends(MonacoStrictEditorTextFocusContext, _super);
    function MonacoStrictEditorTextFocusContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MonacoStrictEditorTextFocusContext.prototype.canHandle = function (widget) {
        var editor = widget.editor;
        if (editor instanceof monaco_editor_1.MonacoEditor) {
            return editor.isFocused({ strict: true });
        }
        return _super.prototype.canHandle.call(this, widget);
    };
    MonacoStrictEditorTextFocusContext = __decorate([
        inversify_1.injectable()
    ], MonacoStrictEditorTextFocusContext);
    return MonacoStrictEditorTextFocusContext;
}(editor_keybinding_contexts_1.StrictEditorTextFocusContext));
exports.MonacoStrictEditorTextFocusContext = MonacoStrictEditorTextFocusContext;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-keybinding.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-keybinding.js ***!
  \*********************************************************************/
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
exports.MonacoKeybindingContribution = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var monaco_command_1 = __webpack_require__(/*! ./monaco-command */ "./node_modules/@theia/monaco/lib/browser/monaco-command.js");
var monaco_command_registry_1 = __webpack_require__(/*! ./monaco-command-registry */ "./node_modules/@theia/monaco/lib/browser/monaco-command-registry.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var monaco_resolved_keybinding_1 = __webpack_require__(/*! ./monaco-resolved-keybinding */ "./node_modules/@theia/monaco/lib/browser/monaco-resolved-keybinding.js");
var MonacoKeybindingContribution = /** @class */ (function () {
    function MonacoKeybindingContribution() {
    }
    MonacoKeybindingContribution.prototype.registerKeybindings = function (registry) {
        var e_1, _a;
        var defaultKeybindings = monaco.keybindings.KeybindingsRegistry.getDefaultKeybindings();
        try {
            for (var defaultKeybindings_1 = __values(defaultKeybindings), defaultKeybindings_1_1 = defaultKeybindings_1.next(); !defaultKeybindings_1_1.done; defaultKeybindings_1_1 = defaultKeybindings_1.next()) {
                var item = defaultKeybindings_1_1.value;
                var command = this.commands.validate(item.command);
                if (command) {
                    var when = item.when && item.when.serialize();
                    var keybinding = void 0;
                    if (item.command === monaco_command_1.MonacoCommands.GO_TO_DEFINITION && !core_1.environment.electron.is()) {
                        keybinding = 'ctrlcmd+f11';
                    }
                    else {
                        keybinding = monaco_resolved_keybinding_1.MonacoResolvedKeybinding.toKeybinding(item.keybinding);
                    }
                    registry.registerKeybinding({ command: command, keybinding: keybinding, when: when });
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (defaultKeybindings_1_1 && !defaultKeybindings_1_1.done && (_a = defaultKeybindings_1.return)) _a.call(defaultKeybindings_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    __decorate([
        inversify_1.inject(monaco_command_registry_1.MonacoCommandRegistry),
        __metadata("design:type", monaco_command_registry_1.MonacoCommandRegistry)
    ], MonacoKeybindingContribution.prototype, "commands", void 0);
    MonacoKeybindingContribution = __decorate([
        inversify_1.injectable()
    ], MonacoKeybindingContribution);
    return MonacoKeybindingContribution;
}());
exports.MonacoKeybindingContribution = MonacoKeybindingContribution;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-loader.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-loader.js ***!
  \*****************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadMonaco = exports.loadVsRequire = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
function loadVsRequire(context) {
    // Monaco uses a custom amd loader that over-rides node's require.
    // Keep a reference to an original require so we can restore it after executing the amd loader file.
    var originalRequire = context.require;
    return new Promise(function (resolve) {
        return window.addEventListener('load', function () {
            var vsLoader = document.createElement('script');
            vsLoader.type = 'text/javascript';
            vsLoader.src = './vs/loader.js';
            vsLoader.charset = 'utf-8';
            vsLoader.addEventListener('load', function () {
                // Save Monaco's amd require and restore the original require
                var amdRequire = context.require;
                if (originalRequire) {
                    context.require = originalRequire;
                }
                resolve(amdRequire);
            });
            document.body.appendChild(vsLoader);
        }, { once: true });
    });
}
exports.loadVsRequire = loadVsRequire;
function loadMonaco(vsRequire) {
    return new Promise(function (resolve) {
        vsRequire(['vs/editor/editor.main'], function () {
            vsRequire([
                'vs/platform/commands/common/commands',
                'vs/platform/actions/common/actions',
                'vs/platform/keybinding/common/keybindingsRegistry',
                'vs/platform/keybinding/common/keybindingResolver',
                'vs/platform/keybinding/common/usLayoutResolvedKeybinding',
                'vs/base/common/keybindingLabels',
                'vs/base/common/keyCodes',
                'vs/base/common/mime',
                'vs/editor/browser/editorExtensions',
                'vs/editor/standalone/browser/simpleServices',
                'vs/editor/standalone/browser/standaloneServices',
                'vs/editor/standalone/browser/standaloneLanguages',
                'vs/base/parts/quickopen/browser/quickOpenWidget',
                'vs/base/parts/quickopen/browser/quickOpenModel',
                'vs/base/common/filters',
                'vs/platform/theme/common/styler',
                'vs/platform/theme/common/colorRegistry',
                'vs/base/common/color',
                'vs/base/common/platform',
                'vs/editor/common/modes',
                'vs/editor/contrib/suggest/suggest',
                'vs/editor/contrib/snippet/snippetParser',
                'vs/platform/configuration/common/configuration',
                'vs/platform/configuration/common/configurationModels',
                'vs/editor/common/services/resolverService',
                'vs/editor/browser/services/codeEditorService',
                'vs/editor/browser/services/codeEditorServiceImpl',
                'vs/editor/browser/services/openerService',
                'vs/platform/markers/common/markerService',
                'vs/platform/contextkey/common/contextkey',
                'vs/platform/contextkey/browser/contextKeyService',
                'vs/editor/common/model/wordHelper',
                'vs/base/common/errors'
            ], function (commands, actions, keybindingsRegistry, keybindingResolver, resolvedKeybinding, keybindingLabels, keyCodes, mime, editorExtensions, simpleServices, standaloneServices, standaloneLanguages, quickOpenWidget, quickOpenModel, filters, styler, colorRegistry, color, platform, modes, suggest, snippetParser, configuration, configurationModels, resolverService, codeEditorService, codeEditorServiceImpl, openerService, markerService, contextKey, contextKeyService, wordHelper, error) {
                var global = self;
                global.monaco.commands = commands;
                global.monaco.actions = actions;
                global.monaco.keybindings = Object.assign({}, keybindingsRegistry, keybindingResolver, resolvedKeybinding, keybindingLabels, keyCodes);
                global.monaco.services = Object.assign({}, simpleServices, standaloneServices, standaloneLanguages, configuration, configurationModels, resolverService, codeEditorService, codeEditorServiceImpl, markerService, openerService);
                global.monaco.quickOpen = Object.assign({}, quickOpenWidget, quickOpenModel);
                global.monaco.filters = filters;
                global.monaco.theme = styler;
                global.monaco.color = Object.assign({}, colorRegistry, color);
                global.monaco.platform = platform;
                global.monaco.editorExtensions = editorExtensions;
                global.monaco.modes = modes;
                global.monaco.suggest = suggest;
                global.monaco.snippetParser = snippetParser;
                global.monaco.contextkey = contextKey;
                global.monaco.contextKeyService = contextKeyService;
                global.monaco.mime = mime;
                global.monaco.wordHelper = wordHelper;
                global.monaco.error = error;
                resolve();
            });
        });
    });
}
exports.loadMonaco = loadMonaco;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-menu.js":
/*!***************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-menu.js ***!
  \***************************************************************/
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
exports.MonacoEditorMenuContribution = exports.MonacoMenus = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var monaco_command_registry_1 = __webpack_require__(/*! ./monaco-command-registry */ "./node_modules/@theia/monaco/lib/browser/monaco-command-registry.js");
var MenuRegistry = monaco.actions.MenuRegistry;
var MonacoMenus;
(function (MonacoMenus) {
    MonacoMenus.SELECTION = __spread(common_1.MAIN_MENU_BAR, ['3_selection']);
    MonacoMenus.PEEK_CONTEXT_SUBMENU = __spread(browser_1.EDITOR_CONTEXT_MENU, ['navigation', 'peek_submenu']);
})(MonacoMenus = exports.MonacoMenus || (exports.MonacoMenus = {}));
var MonacoEditorMenuContribution = /** @class */ (function () {
    function MonacoEditorMenuContribution(commands) {
        this.commands = commands;
    }
    MonacoEditorMenuContribution.prototype.registerMenus = function (registry) {
        var e_1, _a, e_2, _b;
        try {
            for (var _c = __values(MenuRegistry.getMenuItems(7)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var item = _d.value;
                if (!monaco.actions.isIMenuItem(item)) {
                    continue;
                }
                var commandId = this.commands.validate(item.command.id);
                if (commandId) {
                    var menuPath = __spread(browser_1.EDITOR_CONTEXT_MENU, [(item.group || '')]);
                    registry.registerMenuAction(menuPath, { commandId: commandId });
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.registerPeekSubmenu(registry);
        registry.registerSubmenu(MonacoMenus.SELECTION, 'Selection');
        try {
            for (var _e = __values(MenuRegistry.getMenuItems(23)), _f = _e.next(); !_f.done; _f = _e.next()) {
                var item = _f.value;
                if (!monaco.actions.isIMenuItem(item)) {
                    continue;
                }
                var commandId = this.commands.validate(item.command.id);
                if (commandId) {
                    var menuPath = __spread(MonacoMenus.SELECTION, [(item.group || '')]);
                    var label = this.removeMnemonic(item.command.title);
                    var order = item.order ? String(item.order) : '';
                    registry.registerMenuAction(menuPath, { commandId: commandId, order: order, label: label });
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    MonacoEditorMenuContribution.prototype.registerPeekSubmenu = function (registry) {
        var e_3, _a;
        registry.registerSubmenu(MonacoMenus.PEEK_CONTEXT_SUBMENU, 'Peek');
        try {
            for (var _b = __values(MenuRegistry.getMenuItems(8)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                var commandId = this.commands.validate(item.command.id);
                if (commandId) {
                    var order = item.order ? String(item.order) : '';
                    registry.registerMenuAction(__spread(MonacoMenus.PEEK_CONTEXT_SUBMENU, [item.group || '']), { commandId: commandId, order: order });
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
    };
    MonacoEditorMenuContribution.prototype.removeMnemonic = function (label) {
        return label.replace(/\(&&\w\)|&&/g, '');
    };
    MonacoEditorMenuContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(monaco_command_registry_1.MonacoCommandRegistry)),
        __metadata("design:paramtypes", [monaco_command_registry_1.MonacoCommandRegistry])
    ], MonacoEditorMenuContribution);
    return MonacoEditorMenuContribution;
}());
exports.MonacoEditorMenuContribution = MonacoEditorMenuContribution;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-mime-service.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-mime-service.js ***!
  \***********************************************************************/
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
exports.MonacoMimeService = void 0;
var debounce = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var mime_service_1 = __webpack_require__(/*! @theia/core/lib/browser/mime-service */ "./node_modules/@theia/core/lib/browser/mime-service.js");
var MonacoMimeService = /** @class */ (function (_super) {
    __extends(MonacoMimeService, _super);
    function MonacoMimeService() {
        var _this = _super.call(this) || this;
        _this.associations = [];
        _this.updatingAssociations = false;
        _this.updateAssociations = debounce(function () {
            var e_1, _a;
            _this.updatingAssociations = true;
            try {
                monaco.mime.clearTextMimes(true);
                try {
                    for (var _b = __values(_this.associations), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var association = _c.value;
                        var mimetype = _this.getMimeForMode(association.id) || "text/x-" + association.id;
                        monaco.mime.registerTextMime({ id: association.id, mime: mimetype, filepattern: association.filepattern, userConfigured: true }, false);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                monaco.services.StaticServices.modeService.get()._onLanguagesMaybeChanged.fire(undefined);
            }
            finally {
                _this.updatingAssociations = false;
            }
        });
        monaco.services.StaticServices.modeService.get()._onLanguagesMaybeChanged.event(function () {
            if (_this.updatingAssociations) {
                return;
            }
            _this.updateAssociations();
        });
        return _this;
    }
    MonacoMimeService.prototype.setAssociations = function (associations) {
        this.associations = associations;
        this.updateAssociations();
    };
    MonacoMimeService.prototype.getMimeForMode = function (langId) {
        var e_2, _a;
        try {
            for (var _b = __values(monaco.languages.getLanguages()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var language = _c.value;
                if (language.id === langId && language.mimetypes) {
                    return language.mimetypes[0];
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
        return undefined;
    };
    MonacoMimeService = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], MonacoMimeService);
    return MonacoMimeService;
}(mime_service_1.MimeService));
exports.MonacoMimeService = MonacoMimeService;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-outline-contribution.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-outline-contribution.js ***!
  \*******************************************************************************/
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
exports.MonacoOutlineSymbolInformationNode = exports.MonacoOutlineContribution = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var SymbolKind = monaco.languages.SymbolKind;
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var DocumentSymbolProviderRegistry = monaco.modes.DocumentSymbolProviderRegistry;
var CancellationTokenSource = monaco.CancellationTokenSource;
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var outline_view_service_1 = __webpack_require__(/*! @theia/outline-view/lib/browser/outline-view-service */ "./node_modules/@theia/outline-view/lib/browser/outline-view-service.js");
var outline_view_widget_1 = __webpack_require__(/*! @theia/outline-view/lib/browser/outline-view-widget */ "./node_modules/@theia/outline-view/lib/browser/outline-view-widget.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "./node_modules/@theia/monaco/lib/browser/monaco-editor.js");
var debounce = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
var MonacoOutlineContribution = /** @class */ (function () {
    function MonacoOutlineContribution() {
        this.toDisposeOnClose = new core_1.DisposableCollection();
        this.toDisposeOnEditor = new core_1.DisposableCollection();
        this.canUpdateOutline = true;
        this.tokenSource = new CancellationTokenSource();
    }
    MonacoOutlineContribution.prototype.onStart = function (app) {
        var _this = this;
        this.outlineViewService.onDidChangeOpenState(function (open) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (open) {
                    this.toDisposeOnClose.push(this.toDisposeOnEditor);
                    this.toDisposeOnClose.push(DocumentSymbolProviderRegistry.onDidChange(debounce(function () { return _this.updateOutline(); })));
                    this.toDisposeOnClose.push(this.editorManager.onCurrentEditorChanged(debounce(function () { return _this.handleCurrentEditorChanged(); }, 50)));
                    this.handleCurrentEditorChanged();
                }
                else {
                    this.toDisposeOnClose.dispose();
                }
                return [2 /*return*/];
            });
        }); });
        this.outlineViewService.onDidSelect(function (node) { return __awaiter(_this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(MonacoOutlineSymbolInformationNode.is(node) && node.parent)) return [3 /*break*/, 2];
                        options = {
                            mode: 'reveal',
                            selection: node.range
                        };
                        return [4 /*yield*/, this.selectInEditor(node, options)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
        this.outlineViewService.onDidOpen(function (node) { return __awaiter(_this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!MonacoOutlineSymbolInformationNode.is(node)) return [3 /*break*/, 2];
                        options = {
                            selection: {
                                start: node.range.start
                            }
                        };
                        return [4 /*yield*/, this.selectInEditor(node, options)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    };
    MonacoOutlineContribution.prototype.selectInEditor = function (node, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Avoid cyclic updates: Outline -> Editor -> Outline.
                        this.canUpdateOutline = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, this.editorManager.open(node.uri, options)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.canUpdateOutline = true;
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MonacoOutlineContribution.prototype.handleCurrentEditorChanged = function () {
        var _this = this;
        this.toDisposeOnEditor.dispose();
        if (this.toDisposeOnClose.disposed) {
            return;
        }
        this.toDisposeOnClose.push(this.toDisposeOnEditor);
        this.toDisposeOnEditor.push(core_1.Disposable.create(function () { return _this.roots = undefined; }));
        var editor = this.editorManager.currentEditor;
        if (editor) {
            var model = monaco_editor_1.MonacoEditor.get(editor).getControl().getModel();
            if (model) {
                this.toDisposeOnEditor.push(model.onDidChangeContent(function () {
                    _this.roots = undefined; // Invalidate the previously resolved roots.
                    _this.updateOutline();
                }));
            }
            this.toDisposeOnEditor.push(editor.editor.onSelectionChanged(function (selection) { return _this.updateOutline(selection); }));
        }
        this.updateOutline();
    };
    MonacoOutlineContribution.prototype.updateOutline = function (editorSelection) {
        return __awaiter(this, void 0, void 0, function () {
            var token, editor, model, roots, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.canUpdateOutline) {
                            return [2 /*return*/];
                        }
                        this.tokenSource.cancel();
                        this.tokenSource = new CancellationTokenSource();
                        token = this.tokenSource.token;
                        editor = monaco_editor_1.MonacoEditor.get(this.editorManager.currentEditor);
                        model = editor && editor.getControl().getModel();
                        _a = model;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.createRoots(model, token, editorSelection)];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        roots = _a;
                        if (token.isCancellationRequested) {
                            return [2 /*return*/];
                        }
                        this.outlineViewService.publish(roots || []);
                        return [2 /*return*/];
                }
            });
        });
    };
    MonacoOutlineContribution.prototype.createRoots = function (model, token, editorSelection) {
        return __awaiter(this, void 0, void 0, function () {
            var resetSelection_1, providers, uri, providers_1, providers_1_1, provider, symbols, nodes, _a, e_1_1;
            var e_1, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(this.roots && this.roots.length > 0)) return [3 /*break*/, 1];
                        resetSelection_1 = function (node) {
                            node.selected = false;
                            node.children.forEach(resetSelection_1);
                        };
                        this.roots.forEach(resetSelection_1);
                        return [3 /*break*/, 12];
                    case 1:
                        this.roots = [];
                        return [4 /*yield*/, DocumentSymbolProviderRegistry.all(model)];
                    case 2:
                        providers = _d.sent();
                        if (token.isCancellationRequested) {
                            return [2 /*return*/, []];
                        }
                        uri = new uri_1.default(model.uri.toString());
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 10, 11, 12]);
                        providers_1 = __values(providers), providers_1_1 = providers_1.next();
                        _d.label = 4;
                    case 4:
                        if (!!providers_1_1.done) return [3 /*break*/, 9];
                        provider = providers_1_1.value;
                        _d.label = 5;
                    case 5:
                        _d.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, provider.provideDocumentSymbols(model, token)];
                    case 6:
                        symbols = _d.sent();
                        if (token.isCancellationRequested) {
                            return [2 /*return*/, []];
                        }
                        nodes = this.createNodes(uri, symbols || []);
                        (_c = this.roots).push.apply(_c, __spread(nodes));
                        return [3 /*break*/, 8];
                    case 7:
                        _a = _d.sent();
                        return [3 /*break*/, 8];
                    case 8:
                        providers_1_1 = providers_1.next();
                        return [3 /*break*/, 4];
                    case 9: return [3 /*break*/, 12];
                    case 10:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 12];
                    case 11:
                        try {
                            if (providers_1_1 && !providers_1_1.done && (_b = providers_1.return)) _b.call(providers_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 12:
                        this.applySelection(this.roots, editorSelection);
                        return [2 /*return*/, this.roots];
                }
            });
        });
    };
    MonacoOutlineContribution.prototype.createNodes = function (uri, symbols) {
        var e_2, _a, e_3, _b;
        var _this = this;
        var rangeBased = false;
        var ids = new Map();
        var roots = [];
        var nodesByName = symbols.sort(this.orderByPosition).reduce(function (result, symbol) {
            var node = _this.createNode(uri, symbol, ids);
            if (symbol.children) {
                MonacoOutlineSymbolInformationNode.insert(roots, node);
            }
            else {
                rangeBased = rangeBased || symbol.range.startLineNumber !== symbol.range.endLineNumber;
                var values = result.get(symbol.name) || [];
                values.push({ symbol: symbol, node: node });
                result.set(symbol.name, values);
            }
            return result;
        }, new Map());
        try {
            for (var _c = __values(nodesByName.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var nodes = _d.value;
                var _loop_1 = function (node, symbol) {
                    if (!symbol.containerName) {
                        MonacoOutlineSymbolInformationNode.insert(roots, node);
                    }
                    else {
                        var possibleParents = nodesByName.get(symbol.containerName);
                        if (possibleParents) {
                            var parent_1 = possibleParents.find(function (possibleParent) { return _this.parentContains(symbol, possibleParent.symbol, rangeBased); });
                            if (parent_1) {
                                node.parent = parent_1.node;
                                MonacoOutlineSymbolInformationNode.insert(parent_1.node.children, node);
                            }
                        }
                    }
                };
                try {
                    for (var nodes_1 = (e_3 = void 0, __values(nodes)), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
                        var _e = nodes_1_1.value, node = _e.node, symbol = _e.symbol;
                        _loop_1(node, symbol);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (nodes_1_1 && !nodes_1_1.done && (_b = nodes_1.return)) _b.call(nodes_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (!roots.length) {
            var nodes = nodesByName.values().next().value;
            if (nodes && !nodes[0].node.parent) {
                return [nodes[0].node];
            }
            return [];
        }
        return roots;
    };
    /**
     * Sets the selection on the sub-trees based on the optional editor selection.
     * Select the narrowest node that is strictly contains the editor selection.
     */
    MonacoOutlineContribution.prototype.applySelection = function (roots, editorSelection) {
        var e_4, _a;
        if (editorSelection) {
            try {
                for (var roots_1 = __values(roots), roots_1_1 = roots_1.next(); !roots_1_1.done; roots_1_1 = roots_1.next()) {
                    var root = roots_1_1.value;
                    if (this.parentContains(editorSelection, root.fullRange, true)) {
                        var children = root.children;
                        root.selected = !root.expanded || !this.applySelection(children, editorSelection);
                        return true;
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (roots_1_1 && !roots_1_1.done && (_a = roots_1.return)) _a.call(roots_1);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        return false;
    };
    /**
     * Returns `true` if `candidate` is strictly contained inside `parent`
     *
     * If the argument is a `DocumentSymbol`, then `getFullRange` will be used to retrieve the range of the underlying symbol.
     */
    MonacoOutlineContribution.prototype.parentContains = function (candidate, parent, rangeBased) {
        // TODO: move this code to the `monaco-languageclient`: https://github.com/eclipse-theia/theia/pull/2885#discussion_r217800446
        var candidateRange = browser_1.Range.is(candidate) ? candidate : this.getFullRange(candidate);
        var parentRange = browser_1.Range.is(parent) ? parent : this.getFullRange(parent);
        var sameStartLine = candidateRange.start.line === parentRange.start.line;
        var startColGreaterOrEqual = candidateRange.start.character >= parentRange.start.character;
        var startLineGreater = candidateRange.start.line > parentRange.start.line;
        var sameEndLine = candidateRange.end.line === parentRange.end.line;
        var endColSmallerOrEqual = candidateRange.end.character <= parentRange.end.character;
        var endLineSmaller = candidateRange.end.line < parentRange.end.line;
        return (((sameStartLine && startColGreaterOrEqual || startLineGreater) &&
            (sameEndLine && endColSmallerOrEqual || endLineSmaller)) || !rangeBased);
    };
    /**
     * `monaco` to LSP `Range` converter. Converts the `1-based` location indices into `0-based` ones.
     */
    MonacoOutlineContribution.prototype.asRange = function (range) {
        var startLineNumber = range.startLineNumber, startColumn = range.startColumn, endLineNumber = range.endLineNumber, endColumn = range.endColumn;
        return {
            start: {
                line: startLineNumber - 1,
                character: startColumn - 1
            },
            end: {
                line: endLineNumber - 1,
                character: endColumn - 1
            }
        };
    };
    /**
     * Returns with a range enclosing this symbol not including leading/trailing whitespace but everything else like comments.
     * This information is typically used to determine if the clients cursor is inside the symbol to reveal in the symbol in the UI.
     * This allows to obtain the range including the associated comments.
     *
     * See: [`DocumentSymbol#range`](https://microsoft.github.io/language-server-protocol/specification#textDocument_documentSymbol) for more details.
     */
    MonacoOutlineContribution.prototype.getFullRange = function (documentSymbol) {
        return this.asRange(documentSymbol.range);
    };
    /**
     * The range that should be selected and revealed when this symbol is being picked, e.g the name of a function. Must be contained by the `getSelectionRange`.
     *
     * See: [`DocumentSymbol#selectionRange`](https://microsoft.github.io/language-server-protocol/specification#textDocument_documentSymbol) for more details.
     */
    MonacoOutlineContribution.prototype.getNameRange = function (documentSymbol) {
        return this.asRange(documentSymbol.selectionRange);
    };
    MonacoOutlineContribution.prototype.createNode = function (uri, symbol, ids, parent) {
        var e_5, _a;
        var id = this.createId(symbol.name, ids);
        var children = [];
        var node = {
            children: children,
            id: id,
            iconClass: SymbolKind[symbol.kind].toString().toLowerCase(),
            name: this.getName(symbol),
            detail: this.getDetail(symbol),
            parent: parent,
            uri: uri,
            range: this.getNameRange(symbol),
            fullRange: this.getFullRange(symbol),
            selected: false,
            expanded: this.shouldExpand(symbol)
        };
        if (symbol.children) {
            try {
                for (var _b = __values(symbol.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    MonacoOutlineSymbolInformationNode.insert(children, this.createNode(uri, child, ids, node));
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
        return node;
    };
    MonacoOutlineContribution.prototype.getName = function (symbol) {
        return symbol.name;
    };
    MonacoOutlineContribution.prototype.getDetail = function (symbol) {
        return symbol.detail;
    };
    MonacoOutlineContribution.prototype.createId = function (name, ids) {
        var counter = ids.get(name);
        var index = typeof counter === 'number' ? counter + 1 : 0;
        ids.set(name, index);
        return name + '_' + index;
    };
    MonacoOutlineContribution.prototype.shouldExpand = function (symbol) {
        return [
            SymbolKind.Class,
            SymbolKind.Enum, SymbolKind.File,
            SymbolKind.Interface, SymbolKind.Module,
            SymbolKind.Namespace, SymbolKind.Object,
            SymbolKind.Package, SymbolKind.Struct
        ].indexOf(symbol.kind) !== -1;
    };
    MonacoOutlineContribution.prototype.orderByPosition = function (symbol, symbol2) {
        var startLineComparison = symbol.range.startLineNumber - symbol2.range.startLineNumber;
        if (startLineComparison !== 0) {
            return startLineComparison;
        }
        var startOffsetComparison = symbol.range.startColumn - symbol2.range.startColumn;
        if (startOffsetComparison !== 0) {
            return startOffsetComparison;
        }
        var endLineComparison = symbol.range.endLineNumber - symbol2.range.endLineNumber;
        if (endLineComparison !== 0) {
            return endLineComparison;
        }
        return symbol.range.endColumn - symbol2.range.endColumn;
    };
    __decorate([
        inversify_1.inject(outline_view_service_1.OutlineViewService),
        __metadata("design:type", outline_view_service_1.OutlineViewService)
    ], MonacoOutlineContribution.prototype, "outlineViewService", void 0);
    __decorate([
        inversify_1.inject(browser_1.EditorManager),
        __metadata("design:type", browser_1.EditorManager)
    ], MonacoOutlineContribution.prototype, "editorManager", void 0);
    MonacoOutlineContribution = __decorate([
        inversify_1.injectable()
    ], MonacoOutlineContribution);
    return MonacoOutlineContribution;
}());
exports.MonacoOutlineContribution = MonacoOutlineContribution;
var MonacoOutlineSymbolInformationNode;
(function (MonacoOutlineSymbolInformationNode) {
    function is(node) {
        return outline_view_widget_1.OutlineSymbolInformationNode.is(node) && 'uri' in node && 'range' in node;
    }
    MonacoOutlineSymbolInformationNode.is = is;
    function insert(nodes, node) {
        var index = nodes.findIndex(function (current) { return compare(node, current) < 0; });
        if (index === -1) {
            nodes.push(node);
        }
        else {
            nodes.splice(index, 0, node);
        }
    }
    MonacoOutlineSymbolInformationNode.insert = insert;
    function compare(node, node2) {
        var startLineComparison = node.range.start.line - node2.range.start.line;
        if (startLineComparison !== 0) {
            return startLineComparison;
        }
        var startColumnComparison = node.range.start.character - node2.range.start.character;
        if (startColumnComparison !== 0) {
            return startColumnComparison;
        }
        var endLineComparison = node2.range.end.line - node.range.end.line;
        if (endLineComparison !== 0) {
            return endLineComparison;
        }
        return node2.range.end.character - node.range.end.character;
    }
    MonacoOutlineSymbolInformationNode.compare = compare;
})(MonacoOutlineSymbolInformationNode = exports.MonacoOutlineSymbolInformationNode || (exports.MonacoOutlineSymbolInformationNode = {}));


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-outline-decorator.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-outline-decorator.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 RedHat and others.
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
exports.MonacoOutlineDecorator = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var tree_iterator_1 = __webpack_require__(/*! @theia/core/lib/browser/tree/tree-iterator */ "./node_modules/@theia/core/lib/browser/tree/tree-iterator.js");
var monaco_outline_contribution_1 = __webpack_require__(/*! ./monaco-outline-contribution */ "./node_modules/@theia/monaco/lib/browser/monaco-outline-contribution.js");
var MonacoOutlineDecorator = /** @class */ (function () {
    function MonacoOutlineDecorator() {
        this.id = 'theia-monaco-outline-decorator';
        this.emitter = new event_1.Emitter();
    }
    MonacoOutlineDecorator.prototype.decorations = function (tree) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.collectDecorations(tree)];
            });
        });
    };
    Object.defineProperty(MonacoOutlineDecorator.prototype, "onDidChangeDecorations", {
        get: function () {
            return this.emitter.event;
        },
        enumerable: false,
        configurable: true
    });
    MonacoOutlineDecorator.prototype.collectDecorations = function (tree) {
        var e_1, _a;
        var result = new Map();
        if (tree.root === undefined) {
            return result;
        }
        try {
            for (var _b = __values(new tree_iterator_1.DepthFirstTreeIterator(tree.root)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var treeNode = _c.value;
                if (monaco_outline_contribution_1.MonacoOutlineSymbolInformationNode.is(treeNode) && treeNode.detail) {
                    result.set(treeNode.id, this.toDecoration(treeNode));
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
        return result;
    };
    MonacoOutlineDecorator.prototype.toDecoration = function (node) {
        var captionSuffixes = [{
                data: (node.detail || ''),
                fontData: {
                    color: 'var(--theia-descriptionForeground)',
                }
            }];
        return {
            captionSuffixes: captionSuffixes
        };
    };
    MonacoOutlineDecorator = __decorate([
        inversify_1.injectable()
    ], MonacoOutlineDecorator);
    return MonacoOutlineDecorator;
}());
exports.MonacoOutlineDecorator = MonacoOutlineDecorator;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-semantic-highlighting-service.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-semantic-highlighting-service.js ***!
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
exports.MonacoSemanticHighlightingService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var logger_1 = __webpack_require__(/*! @theia/core/lib/common/logger */ "./node_modules/@theia/core/lib/common/logger.js");
var editor_manager_1 = __webpack_require__(/*! @theia/editor/lib/browser/editor-manager */ "./node_modules/@theia/editor/lib/browser/editor-manager.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var semantic_highlighting_service_1 = __webpack_require__(/*! @theia/editor/lib/browser/semantic-highlight/semantic-highlighting-service */ "./node_modules/@theia/editor/lib/browser/semantic-highlight/semantic-highlighting-service.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "./node_modules/@theia/monaco/lib/browser/monaco-editor.js");
var monaco_editor_service_1 = __webpack_require__(/*! ./monaco-editor-service */ "./node_modules/@theia/monaco/lib/browser/monaco-editor-service.js");
/**
 * A helper class for grouping information about a decoration type that has
 * been registered with the editor service.
 */
var DecorationTypeInfo = /** @class */ (function () {
    function DecorationTypeInfo() {
    }
    return DecorationTypeInfo;
}());
var MonacoSemanticHighlightingService = /** @class */ (function (_super) {
    __extends(MonacoSemanticHighlightingService, _super);
    function MonacoSemanticHighlightingService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.decorations = new Map();
        _this.toDisposeOnEditorClose = new Map();
        _this.toDisposeOnUnregister = new Map();
        // language id -> (scope index -> decoration type)
        _this.decorationTypes = new Map();
        _this.lastDecorationTypeId = 0;
        return _this;
    }
    MonacoSemanticHighlightingService.prototype.nextDecorationTypeKey = function () {
        return 'MonacoSemanticHighlighting' + (++this.lastDecorationTypeId);
    };
    MonacoSemanticHighlightingService.prototype.registerDecorationTypesForLanguage = function (languageId) {
        var scopes = this.scopes.get(languageId);
        if (scopes) {
            var decorationTypes = new Map();
            for (var index = 0; index < scopes.length; index++) {
                var modelDecoration = this.toDecorationType(scopes[index]);
                if (modelDecoration) {
                    decorationTypes.set(index, modelDecoration);
                }
            }
            this.decorationTypes.set(languageId, decorationTypes);
        }
    };
    MonacoSemanticHighlightingService.prototype.removeDecorationTypesForLanguage = function (languageId) {
        var e_1, _a;
        var decorationTypes = this.decorationTypes.get(languageId);
        if (!decorationTypes) {
            this.logger.warn("No decoration types are registered for language: " + languageId);
            return;
        }
        try {
            for (var decorationTypes_1 = __values(decorationTypes), decorationTypes_1_1 = decorationTypes_1.next(); !decorationTypes_1_1.done; decorationTypes_1_1 = decorationTypes_1.next()) {
                var _b = __read(decorationTypes_1_1.value, 2), decorationType = _b[1];
                this.monacoEditorService.removeDecorationType(decorationType.key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (decorationTypes_1_1 && !decorationTypes_1_1.done && (_a = decorationTypes_1.return)) _a.call(decorationTypes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    MonacoSemanticHighlightingService.prototype.refreshDecorationTypesForLanguage = function (languageId) {
        var e_2, _a;
        var decorationTypes = this.decorationTypes.get(languageId);
        var scopes = this.scopes.get(languageId);
        if (!decorationTypes || !scopes) {
            this.logger.warn("No decoration types are registered for language: " + languageId);
            return;
        }
        try {
            for (var decorationTypes_2 = __values(decorationTypes), decorationTypes_2_1 = decorationTypes_2.next(); !decorationTypes_2_1.done; decorationTypes_2_1 = decorationTypes_2.next()) {
                var _b = __read(decorationTypes_2_1.value, 2), scope = _b[0], decorationType = _b[1];
                // Pass in the existing key to associate the new color with the same
                // decoration type, thereby reusing it.
                var newDecorationType = this.toDecorationType(scopes[scope], decorationType.key);
                if (newDecorationType) {
                    decorationType.options = newDecorationType.options;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (decorationTypes_2_1 && !decorationTypes_2_1.done && (_a = decorationTypes_2.return)) _a.call(decorationTypes_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    MonacoSemanticHighlightingService.prototype.register = function (languageId, scopes) {
        var _this = this;
        var result = _super.prototype.register.call(this, languageId, scopes);
        this.registerDecorationTypesForLanguage(languageId);
        var disposable = this.themeService().onThemeChange(function () {
            // When the theme changes, refresh the decoration types to reflect
            // the colors for the old theme.
            // Note that we do not remove the old decoration types and add new ones.
            // The new ones would have different class names, and we'd have to
            // update all open editors to use the new class names.
            _this.refreshDecorationTypesForLanguage(languageId);
        });
        this.toDisposeOnUnregister.set(languageId, disposable);
        return result;
    };
    MonacoSemanticHighlightingService.prototype.unregister = function (languageId) {
        _super.prototype.unregister.call(this, languageId);
        this.removeDecorationTypesForLanguage(languageId);
        var disposable = this.toDisposeOnUnregister.get(languageId);
        if (disposable) {
            disposable.dispose();
        }
        this.decorationTypes.delete(languageId);
        this.toDisposeOnUnregister.delete(languageId);
    };
    MonacoSemanticHighlightingService.prototype.toDecorationType = function (scopes, reuseKey) {
        var e_3, _a;
        var key = reuseKey || this.nextDecorationTypeKey();
        try {
            // TODO: why for-of? How to pick the right scope? Is it fine to get the first element (with the narrowest scope)?
            for (var scopes_1 = __values(scopes), scopes_1_1 = scopes_1.next(); !scopes_1_1.done; scopes_1_1 = scopes_1.next()) {
                var scope = scopes_1_1.value;
                var tokenTheme = this.tokenTheme();
                var metadata = tokenTheme.match(0 /* Null */, scope);
                // Don't use the inlineClassName from the TokenMetadata, because this
                // will conflict with styles used for TM scopes
                // (https://github.com/Microsoft/monaco-editor/issues/1070).
                // Instead, get the token color, use registerDecorationType() to cause
                // monaco to allocate a new inlineClassName for that color, and use
                // resolveDecorationOptions() to get an IModelDecorationOptions
                // containing that inlineClassName.
                var colorIndex = monaco.modes.TokenMetadata.getForeground(metadata);
                var color = tokenTheme.getColorMap()[colorIndex];
                // If we wanted to support other decoration options such as font style,
                // we could include them here.
                var options = {
                    color: color.toString(),
                };
                this.monacoEditorService.registerDecorationType(key, options);
                return {
                    key: key,
                    options: this.monacoEditorService.resolveDecorationOptions(key, false)
                };
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (scopes_1_1 && !scopes_1_1.done && (_a = scopes_1.return)) _a.call(scopes_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return undefined;
    };
    MonacoSemanticHighlightingService.prototype.decorate = function (languageId, uri, ranges) {
        return __awaiter(this, void 0, void 0, function () {
            var editor, key, newDecorations, oldDecorations, newState, decorationIds;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editor(uri)];
                    case 1:
                        editor = _a.sent();
                        if (!editor) {
                            return [2 /*return*/];
                        }
                        key = uri.toString();
                        if (!this.toDisposeOnEditorClose.has(key)) {
                            this.toDisposeOnEditorClose.set(key, new disposable_1.DisposableCollection(editor.onDispose(function () { return _this.deleteDecorations(key, editor); })));
                        }
                        newDecorations = ranges.map(function (range) { return _this.toDecoration(languageId, range); });
                        oldDecorations = this.oldDecorations(key, editor, ranges);
                        newState = editor.deltaDecorations({
                            newDecorations: newDecorations,
                            oldDecorations: oldDecorations
                        });
                        decorationIds = this.decorationIds(key);
                        newState.forEach(function (id) { return decorationIds.add(id); });
                        this.decorations.set(key, decorationIds);
                        return [2 /*return*/];
                }
            });
        });
    };
    MonacoSemanticHighlightingService.prototype.dispose = function () {
        Array.from(this.toDisposeOnEditorClose.values()).forEach(function (disposable) { return disposable.dispose(); });
    };
    MonacoSemanticHighlightingService.prototype.decorationIds = function (uri) {
        return this.decorations.get(typeof uri === 'string' ? uri : uri.toString()) || new Set();
    };
    MonacoSemanticHighlightingService.prototype.editor = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var editorWidget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editorManager.getByUri(typeof uri === 'string' ? new uri_1.default(uri) : uri)];
                    case 1:
                        editorWidget = _a.sent();
                        if (!!editorWidget && editorWidget.editor instanceof monaco_editor_1.MonacoEditor) {
                            return [2 /*return*/, editorWidget.editor];
                        }
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    MonacoSemanticHighlightingService.prototype.model = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var editor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editor(uri)];
                    case 1:
                        editor = _a.sent();
                        if (editor) {
                            return [2 /*return*/, editor.getControl().getModel() || undefined];
                        }
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    /**
     * Returns all the semantic highlighting decoration IDs that are affected by any of the range arguments.
     */
    MonacoSemanticHighlightingService.prototype.oldDecorations = function (uri, editor, ranges) {
        var ids = this.decorationIds(uri);
        var affectedLines = Array.from(new Set(ranges.map(function (r) { return [r.start.line, r.end.line]; }).reduce(function (prev, curr) { return prev.concat(curr); }, [])));
        return affectedLines
            .map(function (line) { return editor.getLinesDecorations(line, line); })
            .reduce(function (prev, curr) { return prev.concat(curr); }, [])
            .map(function (decoration) { return decoration.id; })
            .filter(function (id) { return ids.has(id); });
    };
    MonacoSemanticHighlightingService.prototype.deleteDecorations = function (uri, editor) {
        var ids = this.decorations.get(uri);
        if (ids) {
            var oldDecorations = Array.from(ids);
            editor.deltaDecorations({
                newDecorations: [],
                oldDecorations: oldDecorations
            });
            this.decorations.delete(uri);
        }
        var disposable = this.toDisposeOnEditorClose.get(uri);
        if (disposable) {
            disposable.dispose();
        }
        this.toDisposeOnEditorClose.delete(uri);
    };
    MonacoSemanticHighlightingService.prototype.toDecoration = function (languageId, range) {
        var start = range.start, end = range.end;
        var options = this.toOptions(languageId, range.scope);
        return {
            range: semantic_highlighting_service_1.Range.create(start, end),
            options: options
        };
    };
    MonacoSemanticHighlightingService.prototype.toOptions = function (languageId, scope) {
        if (scope !== undefined) {
            var decorationTypes = this.decorationTypes.get(languageId);
            if (decorationTypes) {
                var decoration = decorationTypes.get(scope);
                if (decoration) {
                    return {
                        inlineClassName: decoration.options.inlineClassName || undefined
                    };
                }
            }
        }
        return {};
    };
    MonacoSemanticHighlightingService.prototype.themeService = function () {
        return monaco.services.StaticServices.standaloneThemeService.get();
    };
    MonacoSemanticHighlightingService.prototype.tokenTheme = function () {
        return this.themeService().getTheme().tokenTheme;
    };
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], MonacoSemanticHighlightingService.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(editor_manager_1.EditorManager),
        __metadata("design:type", editor_manager_1.EditorManager)
    ], MonacoSemanticHighlightingService.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(monaco_editor_service_1.MonacoEditorService),
        __metadata("design:type", monaco_editor_service_1.MonacoEditorService)
    ], MonacoSemanticHighlightingService.prototype, "monacoEditorService", void 0);
    MonacoSemanticHighlightingService = __decorate([
        inversify_1.injectable()
    ], MonacoSemanticHighlightingService);
    return MonacoSemanticHighlightingService;
}(semantic_highlighting_service_1.SemanticHighlightingService));
exports.MonacoSemanticHighlightingService = MonacoSemanticHighlightingService;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-status-bar-contribution.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-status-bar-contribution.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Ericsson
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonacoStatusBarContribution = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "./node_modules/@theia/monaco/lib/browser/monaco-editor.js");
var MonacoStatusBarContribution = /** @class */ (function () {
    function MonacoStatusBarContribution(editorManager, statusBar) {
        this.editorManager = editorManager;
        this.statusBar = statusBar;
        this.toDispose = new core_1.DisposableCollection();
    }
    MonacoStatusBarContribution.prototype.onStart = function (app) {
        var _this = this;
        this.updateStatusBar();
        this.editorManager.onCurrentEditorChanged(function () { return _this.updateStatusBar(); });
    };
    MonacoStatusBarContribution.prototype.updateStatusBar = function () {
        var _this = this;
        var editor = this.editorManager.currentEditor;
        var editorModel = this.getModel(editor);
        if (editor && editorModel) {
            this.setConfigTabSizeWidget();
            this.setLineEndingWidget();
            this.toDispose.dispose();
            this.toDispose.push(editorModel.onDidChangeOptions(function () {
                _this.setConfigTabSizeWidget();
                _this.setLineEndingWidget();
            }));
            var previous_1 = editorModel.getEOL();
            this.toDispose.push(editorModel.onDidChangeContent(function (e) {
                if (previous_1 !== e.eol) {
                    previous_1 = e.eol;
                    _this.setLineEndingWidget();
                }
            }));
        }
        else {
            this.removeConfigTabSizeWidget();
            this.removeLineEndingWidget();
        }
    };
    MonacoStatusBarContribution.prototype.setConfigTabSizeWidget = function () {
        var editor = this.editorManager.currentEditor;
        var editorModel = this.getModel(editor);
        if (editor && editorModel) {
            var modelOptions = editorModel.getOptions();
            var tabSize = modelOptions.tabSize;
            var useSpaceOrTab = modelOptions.insertSpaces ? 'Spaces' : 'Tab Size';
            this.statusBar.setElement('editor-status-tabbing-config', {
                text: useSpaceOrTab + ": " + tabSize,
                alignment: browser_1.StatusBarAlignment.RIGHT,
                priority: 10,
                command: browser_2.EditorCommands.CONFIG_INDENTATION.id,
                tooltip: 'Select Indentation'
            });
        }
    };
    MonacoStatusBarContribution.prototype.removeConfigTabSizeWidget = function () {
        this.statusBar.removeElement('editor-status-tabbing-config');
    };
    MonacoStatusBarContribution.prototype.setLineEndingWidget = function () {
        var editor = this.editorManager.currentEditor;
        var editorModel = this.getModel(editor);
        if (editor && editorModel) {
            var eol = editorModel.getEOL();
            var text = eol === '\n' ? 'LF' : 'CRLF';
            this.statusBar.setElement('editor-status-eol', {
                text: "" + text,
                alignment: browser_1.StatusBarAlignment.RIGHT,
                priority: 11,
                command: browser_2.EditorCommands.CONFIG_EOL.id,
                tooltip: 'Select End Of Line Sequence'
            });
        }
    };
    MonacoStatusBarContribution.prototype.removeLineEndingWidget = function () {
        this.statusBar.removeElement('editor-status-eol');
    };
    MonacoStatusBarContribution.prototype.getModel = function (editor) {
        var monacoEditor = monaco_editor_1.MonacoEditor.get(editor);
        return monacoEditor && monacoEditor.getControl().getModel() || undefined;
    };
    MonacoStatusBarContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_2.EditorManager)),
        __param(1, inversify_1.inject(browser_1.StatusBar)),
        __metadata("design:paramtypes", [browser_2.EditorManager, Object])
    ], MonacoStatusBarContribution);
    return MonacoStatusBarContribution;
}());
exports.MonacoStatusBarContribution = MonacoStatusBarContribution;


/***/ }),

/***/ "./node_modules/@theia/monaco/src/browser/style/index.css":
/*!****************************************************************!*\
  !*** ./node_modules/@theia/monaco/src/browser/style/index.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./index.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/monaco/src/browser/style/index.css");

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

/***/ "./node_modules/@theia/monaco/src/browser/style/symbol-icons.css":
/*!***********************************************************************!*\
  !*** ./node_modules/@theia/monaco/src/browser/style/symbol-icons.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./symbol-icons.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/monaco/src/browser/style/symbol-icons.css");

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

/***/ "./node_modules/@theia/monaco/src/browser/style/symbol-sprite.svg":
/*!************************************************************************!*\
  !*** ./node_modules/@theia/monaco/src/browser/style/symbol-sprite.svg ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cf2aabacdc2b3a5768b03545cb1d8330.svg";

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/monaco/src/browser/style/index.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/monaco/src/browser/style/index.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".monaco-editor {\n    padding-bottom: 5.6px;\n    font-family: var(--theia-ui-font-family);\n    font-size: inherit !important;\n}\n\n/*\n * set z-index to 0, so tabs are not above overlay widgets\n */\n.p-TabBar.theia-app-centers {\n    z-index: 0;\n    display: flex;\n}\n\n/*\n * we need to disable the background image when using font awesome icons and file-icons\n */\n.monaco-quick-open-widget .quick-open-tree .quick-open-entry .quick-open-entry-icon.fa,\n.monaco-quick-open-widget .quick-open-tree .quick-open-entry .quick-open-entry-icon.file-icon {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: none;\n    margin-right: 0px;\n}\n\n.monaco-quick-open-widget .quick-open-tree .quick-open-entry .codicon {\n\tvertical-align: sub;\n}\n\n.monaco-quick-open-widget {\n    background-color: var(--theia-quickInput-background) !important;\n    color: var(--theia-quickInput-foreground) !important;\n}\n\n.quick-open-entry .quick-open-row .monaco-icon-label .monaco-icon-label-description-container .label-description {\n    font-size: calc(var(--theia-ui-font-size0) * 0.95);\n}\n\n.monaco-editor .zone-widget {\n\tposition: absolute;\n\tz-index: 10;\n}\n\n.monaco-editor .zone-widget .zone-widget-container {\n\tborder-top-style: solid;\n\tborder-bottom-style: solid;\n\tborder-top-width: 0;\n\tborder-bottom-width: 0;\n    border-top-color: var(--theia-peekView-border);\n    border-bottom-color: var(--theia-peekView-border);\n\tposition: relative;\n}\n\n.monaco-editor .parameter-hints-widget > .wrapper {\n    overflow: hidden;\n}\n\n/* List highlight, see https://github.com/microsoft/vscode/blob/ff5f581425da6230b6f9216ecf19abf6c9d285a6/src/vs/workbench/browser/style.ts#L50 */\n.monaco-tree .monaco-tree-row .monaco-highlighted-label .highlight,\n.monaco-list .monaco-list-row .monaco-highlighted-label .highlight {\n\tcolor: var(--theia-list-highlightForeground) !important;\n}\n\n/* Scrollbars, see https://github.com/microsoft/vscode/blob/ff5f581425da6230b6f9216ecf19abf6c9d285a6/src/vs/workbench/browser/style.ts#L65 */\n.monaco-scrollable-element > .shadow.top {\n    box-shadow: var(--theia-scrollbar-shadow) 0 6px 6px -6px inset !important;\n}\n\n.monaco-scrollable-element > .shadow.left {\n    box-shadow: var(--theia-scrollbar-shadow) 6px 0 6px -6px inset !important;\n}\n\n.monaco-scrollable-element > .shadow.top.left {\n    box-shadow: var(--theia-scrollbar-shadow) 6px 6px 6px -6px inset !important;\n}\n\n.monaco-scrollable-element > .scrollbar > .slider {\n    background: var(--theia-scrollbarSlider-background) !important;\n}\n\n.monaco-scrollable-element > .scrollbar > .slider:hover {\n    background: var(--theia-scrollbarSlider-hoverBackground) !important;\n}\n\n.monaco-scrollable-element > .scrollbar > .slider.active {\n    background: var(--theia-scrollbarSlider-activeBackground) !important;\n}\n\n.monaco-scrollable-element > .scrollbar.vertical > .slider {\n    width: var(--theia-scrollbar-width) !important;\n}\n\n.monaco-scrollable-element > .scrollbar.horizontal > .slider {\n    height: var(--theia-scrollbar-width) !important;\n}\n\n.monaco-editor .reference-zone-widget .ref-tree .referenceMatch .highlight {\n    color: unset !important;\n}\n\n.monaco-editor .find-widget .monaco-inputbox.synthetic-focus {\n    outline: var(--theia-border-width) solid;\n    outline-offset: calc(-1*var(--theia-border-width));\n    outline-color: var(--theia-focusBorder);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/monaco/src/browser/style/symbol-icons.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/monaco/src/browser/style/symbol-icons.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".symbol-icon {\n    background-image: url(" + escape(__webpack_require__(/*! ./symbol-sprite.svg */ "./node_modules/@theia/monaco/src/browser/style/symbol-sprite.svg")) + ");\n    background-repeat: no-repeat;\n    overflow: hidden;\n    min-width: var(--theia-icon-size);\n    height: var(--theia-icon-size);\n    margin-right: 4px;\n}\n\n.symbol-icon-center {\n    align-self: center;\n}\n\n.symbol-icon.method {\n    background-position: 0 calc(var(--theia-sprite-y-offset));\n}\n\n.symbol-icon.constant,\n.symbol-icon.variable {\n    background-position: -22px calc(var(--theia-sprite-y-offset));\n}\n\n.symbol-icon.class {\n    background-position: -42px calc(var(--theia-sprite-y-offset));\n}\n\n.symbol-icon.interface {\n    background-position: -62px calc(var(--theia-sprite-y-offset));\n}\n\n.symbol-icon.module {\n    background-position: -82px calc(var(--theia-sprite-y-offset));\n}\n\n.symbol-icon.property {\n    background-position: -102px calc(var(--theia-sprite-y-offset));\n}\n\n.symbol-icon.enum {\n    background-position: -122px calc(var(--theia-sprite-y-offset));\n}\n\n.symbol-icon.rule {\n    background-position: -242px calc(var(--theia-sprite-y-offset));\n}\n\n.symbol-icon.file {\n    background-position: -262px calc(var(--theia-sprite-y-offset));\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=50.bundle.js.map