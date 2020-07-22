(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-bulk-edit-service.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-bulk-edit-service.js ***!
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
exports.MonacoBulkEditService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var monaco_workspace_1 = __webpack_require__(/*! ./monaco-workspace */ "./node_modules/@theia/monaco/lib/browser/monaco-workspace.js");
var MonacoBulkEditService = /** @class */ (function () {
    function MonacoBulkEditService() {
    }
    MonacoBulkEditService.prototype.apply = function (edit) {
        return this.workspace.applyBulkEdit(edit);
    };
    __decorate([
        inversify_1.inject(monaco_workspace_1.MonacoWorkspace),
        __metadata("design:type", monaco_workspace_1.MonacoWorkspace)
    ], MonacoBulkEditService.prototype, "workspace", void 0);
    MonacoBulkEditService = __decorate([
        inversify_1.injectable()
    ], MonacoBulkEditService);
    return MonacoBulkEditService;
}());
exports.MonacoBulkEditService = MonacoBulkEditService;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-command-service.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-command-service.js ***!
  \**************************************************************************/
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
exports.MonacoCommandService = exports.MonacoCommandServiceFactory = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "./node_modules/@theia/core/lib/common/command.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
exports.MonacoCommandServiceFactory = Symbol('MonacoCommandServiceFactory');
var MonacoCommandService = /** @class */ (function () {
    function MonacoCommandService(commandRegistry) {
        var _this = this;
        this.commandRegistry = commandRegistry;
        this.onWillExecuteCommandEmitter = new event_1.Emitter();
        this.onDidExecuteCommandEmitter = new event_1.Emitter();
        this.toDispose = new disposable_1.DisposableCollection(this.onWillExecuteCommandEmitter, this.onDidExecuteCommandEmitter);
        this.delegateListeners = new disposable_1.DisposableCollection();
        this.toDispose.push(this.commandRegistry.onWillExecuteCommand(function (e) { return _this.onWillExecuteCommandEmitter.fire(e); }));
        this.toDispose.push(this.commandRegistry.onDidExecuteCommand(function (e) { return _this.onDidExecuteCommandEmitter.fire(e); }));
    }
    MonacoCommandService.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    Object.defineProperty(MonacoCommandService.prototype, "onWillExecuteCommand", {
        get: function () {
            return this.onWillExecuteCommandEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonacoCommandService.prototype, "onDidExecuteCommand", {
        get: function () {
            return this.onDidExecuteCommandEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    MonacoCommandService.prototype.setDelegate = function (delegate) {
        var _this = this;
        if (this.toDispose.disposed) {
            return;
        }
        this.delegateListeners.dispose();
        this.toDispose.push(this.delegateListeners);
        this.delegate = delegate;
        if (this.delegate) {
            this.delegateListeners.push(this.delegate['_onWillExecuteCommand'].event(function (event) {
                return _this.onWillExecuteCommandEmitter.fire(event);
            }));
            this.delegateListeners.push(this.delegate['_onDidExecuteCommand'].event(function (event) {
                return _this.onDidExecuteCommandEmitter.fire(event);
            }));
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MonacoCommandService.prototype.executeCommand = function (commandId) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, (_a = this.commandRegistry).executeCommand.apply(_a, __spread([commandId], args))];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _b.sent();
                        if (e_1.code === 'NO_ACTIVE_HANDLER') {
                            return [2 /*return*/, this.executeMonacoCommand.apply(this, __spread([commandId], args))];
                        }
                        throw e_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MonacoCommandService.prototype.executeMonacoCommand = function (commandId) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                if (this.delegate) {
                    return [2 /*return*/, (_a = this.delegate).executeCommand.apply(_a, __spread([commandId], args))];
                }
                throw new Error("command '" + commandId + "' not found");
            });
        });
    };
    MonacoCommandService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(command_1.CommandRegistry)),
        __metadata("design:paramtypes", [command_1.CommandRegistry])
    ], MonacoCommandService);
    return MonacoCommandService;
}());
exports.MonacoCommandService = MonacoCommandService;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-context-key-service.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-context-key-service.js ***!
  \******************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonacoContextKeyService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var context_key_service_1 = __webpack_require__(/*! @theia/core/lib/browser/context-key-service */ "./node_modules/@theia/core/lib/browser/context-key-service.js");
var MonacoContextKeyService = /** @class */ (function (_super) {
    __extends(MonacoContextKeyService, _super);
    function MonacoContextKeyService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.expressions = new Map();
        return _this;
    }
    MonacoContextKeyService.prototype.init = function () {
        var _this = this;
        this.contextKeyService.onDidChangeContext(function (e) {
            return _this.fireDidChange({
                affects: function (keys) { return e.affectsSome(keys); }
            });
        });
    };
    MonacoContextKeyService.prototype.createKey = function (key, defaultValue) {
        return this.contextKeyService.createKey(key, defaultValue);
    };
    MonacoContextKeyService.prototype.match = function (expression, context) {
        var ctx = context || this.activeContext || (window.document.activeElement instanceof HTMLElement ? window.document.activeElement : undefined);
        var parsed = this.parse(expression);
        if (!ctx) {
            return this.contextKeyService.contextMatchesRules(parsed);
        }
        var keyContext = this.contextKeyService.getContext(ctx);
        return monaco.keybindings.KeybindingResolver.contextMatchesRules(keyContext, parsed);
    };
    MonacoContextKeyService.prototype.parse = function (when) {
        var expression = this.expressions.get(when);
        if (!expression) {
            expression = monaco.contextkey.ContextKeyExpr.deserialize(when);
            this.expressions.set(when, expression);
        }
        return expression;
    };
    MonacoContextKeyService.prototype.parseKeys = function (expression) {
        return new Set(monaco.contextkey.ContextKeyExpr.deserialize(expression).keys());
    };
    __decorate([
        inversify_1.inject(monaco.contextKeyService.ContextKeyService),
        __metadata("design:type", monaco.contextKeyService.ContextKeyService)
    ], MonacoContextKeyService.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MonacoContextKeyService.prototype, "init", null);
    MonacoContextKeyService = __decorate([
        inversify_1.injectable()
    ], MonacoContextKeyService);
    return MonacoContextKeyService;
}(context_key_service_1.ContextKeyService));
exports.MonacoContextKeyService = MonacoContextKeyService;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-context-menu.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-context-menu.js ***!
  \***********************************************************************/
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
exports.MonacoContextMenuService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var widgets_1 = __webpack_require__(/*! @phosphor/widgets */ "./node_modules/@phosphor/widgets/lib/index.js");
var commands_1 = __webpack_require__(/*! @phosphor/commands */ "./node_modules/@phosphor/commands/lib/index.js");
var MonacoContextMenuService = /** @class */ (function () {
    function MonacoContextMenuService(contextMenuRenderer) {
        this.contextMenuRenderer = contextMenuRenderer;
    }
    MonacoContextMenuService.prototype.showContextMenu = function (delegate) {
        var e_1, _a;
        var anchor = browser_2.toAnchor(delegate.getAnchor());
        var actions = delegate.getActions();
        // Actions for editor context menu come as 'MenuItemAction' items
        // In case of 'Quick Fix' actions come as 'CodeActionAction' items
        if (actions.length > 0 && actions[0] instanceof monaco.actions.MenuItemAction) {
            this.contextMenuRenderer.render({
                menuPath: this.menuPath(),
                anchor: anchor,
                onHide: function () { return delegate.onHide(false); }
            });
        }
        else {
            var commands = new commands_1.CommandRegistry();
            var menu = new widgets_1.Menu({
                commands: commands
            });
            var _loop_1 = function (action) {
                var commandId = 'quickfix_' + actions.indexOf(action);
                commands.addCommand(commandId, {
                    label: action.label,
                    className: action.class,
                    isToggled: function () { return action.checked; },
                    isEnabled: function () { return action.enabled; },
                    execute: function () { return action.run(); }
                });
                menu.addItem({
                    type: 'command',
                    command: commandId
                });
            };
            try {
                for (var actions_1 = __values(actions), actions_1_1 = actions_1.next(); !actions_1_1.done; actions_1_1 = actions_1.next()) {
                    var action = actions_1_1.value;
                    _loop_1(action);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (actions_1_1 && !actions_1_1.done && (_a = actions_1.return)) _a.call(actions_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            menu.aboutToClose.connect(function () { return delegate.onHide(false); });
            menu.open(anchor.x, anchor.y);
        }
    };
    MonacoContextMenuService.prototype.menuPath = function () {
        return browser_1.EDITOR_CONTEXT_MENU;
    };
    MonacoContextMenuService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_2.ContextMenuRenderer)),
        __metadata("design:paramtypes", [browser_2.ContextMenuRenderer])
    ], MonacoContextMenuService);
    return MonacoContextMenuService;
}());
exports.MonacoContextMenuService = MonacoContextMenuService;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-diff-editor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-diff-editor.js ***!
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
exports.MonacoDiffEditor = void 0;
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "./node_modules/@theia/monaco/lib/browser/monaco-editor.js");
var diff_uris_1 = __webpack_require__(/*! @theia/core/lib/browser/diff-uris */ "./node_modules/@theia/core/lib/browser/diff-uris.js");
var MonacoDiffEditor = /** @class */ (function (_super) {
    __extends(MonacoDiffEditor, _super);
    function MonacoDiffEditor(uri, node, originalModel, modifiedModel, services, diffNavigatorFactory, options, override) {
        var _this = _super.call(this, uri, modifiedModel, node, services, options, override) || this;
        _this.uri = uri;
        _this.node = node;
        _this.originalModel = originalModel;
        _this.modifiedModel = modifiedModel;
        _this.diffNavigatorFactory = diffNavigatorFactory;
        _this.documents.add(originalModel);
        var original = originalModel.textEditorModel;
        var modified = modifiedModel.textEditorModel;
        _this._diffNavigator = diffNavigatorFactory.createdDiffNavigator(_this._diffEditor, options);
        _this._diffEditor.setModel({ original: original, modified: modified });
        return _this;
    }
    Object.defineProperty(MonacoDiffEditor.prototype, "diffEditor", {
        get: function () {
            return this._diffEditor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonacoDiffEditor.prototype, "diffNavigator", {
        get: function () {
            return this._diffNavigator;
        },
        enumerable: false,
        configurable: true
    });
    MonacoDiffEditor.prototype.create = function (options, override) {
        this._diffEditor = monaco.editor.createDiffEditor(this.node, __assign(__assign({}, options), { fixedOverflowWidgets: true }), override);
        this.editor = this._diffEditor.getModifiedEditor();
        return this._diffEditor;
    };
    MonacoDiffEditor.prototype.resize = function (dimension) {
        if (this.node) {
            var layoutSize = this.computeLayoutSize(this.node, dimension);
            this._diffEditor.layout(layoutSize);
        }
    };
    MonacoDiffEditor.prototype.isActionSupported = function (id) {
        var action = this._diffEditor.getSupportedActions().find(function (a) { return a.id === id; });
        return !!action && action.isSupported() && _super.prototype.isActionSupported.call(this, id);
    };
    MonacoDiffEditor.prototype.deltaDecorations = function (params) {
        console.warn('`deltaDecorations` should be called on either the original, or the modified editor.');
        return [];
    };
    MonacoDiffEditor.prototype.getResourceUri = function () {
        return new uri_1.default(this.originalModel.uri);
    };
    MonacoDiffEditor.prototype.createMoveToUri = function (resourceUri) {
        var _a = __read(diff_uris_1.DiffUris.decode(this.uri), 2), left = _a[0], right = _a[1];
        return diff_uris_1.DiffUris.encode(left.withPath(resourceUri.path), right.withPath(resourceUri.path));
    };
    return MonacoDiffEditor;
}(monaco_editor_1.MonacoEditor));
exports.MonacoDiffEditor = MonacoDiffEditor;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-diff-navigator-factory.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-diff-navigator-factory.js ***!
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonacoDiffNavigatorFactory = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var MonacoDiffNavigatorFactory = /** @class */ (function () {
    function MonacoDiffNavigatorFactory() {
    }
    MonacoDiffNavigatorFactory.prototype.createdDiffNavigator = function (editor, options) {
        var navigator = monaco.editor.createDiffNavigator(editor, options);
        var ensureInitialized = function (fwd) {
            if (navigator.nextIdx < -1) {
                navigator._initIdx(fwd);
            }
        };
        return {
            canNavigate: function () { return navigator.canNavigate(); },
            hasNext: function () {
                ensureInitialized(true);
                return navigator.nextIdx + 1 < navigator.ranges.length;
            },
            hasPrevious: function () {
                ensureInitialized(false);
                return navigator.nextIdx > 0;
            },
            next: function () { return navigator.next(); },
            previous: function () { return navigator.previous(); },
            revealFirst: navigator.revealFirst,
        };
    };
    MonacoDiffNavigatorFactory.nullNavigator = {
        canNavigate: function () { return false; },
        hasNext: function () { return false; },
        hasPrevious: function () { return false; },
        next: function () { },
        previous: function () { },
        revealFirst: false,
    };
    MonacoDiffNavigatorFactory = __decorate([
        inversify_1.injectable()
    ], MonacoDiffNavigatorFactory);
    return MonacoDiffNavigatorFactory;
}());
exports.MonacoDiffNavigatorFactory = MonacoDiffNavigatorFactory;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-editor-provider.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-editor-provider.js ***!
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
exports.MonacoEditorProvider = exports.MonacoEditorFactory = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var diff_uris_1 = __webpack_require__(/*! @theia/core/lib/browser/diff-uris */ "./node_modules/@theia/core/lib/browser/diff-uris.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var monaco_languageclient_1 = __webpack_require__(/*! monaco-languageclient */ "./node_modules/monaco-languageclient/lib/index.js");
var monaco_command_service_1 = __webpack_require__(/*! ./monaco-command-service */ "./node_modules/@theia/monaco/lib/browser/monaco-command-service.js");
var monaco_context_menu_1 = __webpack_require__(/*! ./monaco-context-menu */ "./node_modules/@theia/monaco/lib/browser/monaco-context-menu.js");
var monaco_diff_editor_1 = __webpack_require__(/*! ./monaco-diff-editor */ "./node_modules/@theia/monaco/lib/browser/monaco-diff-editor.js");
var monaco_diff_navigator_factory_1 = __webpack_require__(/*! ./monaco-diff-navigator-factory */ "./node_modules/@theia/monaco/lib/browser/monaco-diff-navigator-factory.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "./node_modules/@theia/monaco/lib/browser/monaco-editor.js");
var monaco_editor_model_1 = __webpack_require__(/*! ./monaco-editor-model */ "./node_modules/@theia/monaco/lib/browser/monaco-editor-model.js");
var monaco_editor_service_1 = __webpack_require__(/*! ./monaco-editor-service */ "./node_modules/@theia/monaco/lib/browser/monaco-editor-service.js");
var monaco_quick_open_service_1 = __webpack_require__(/*! ./monaco-quick-open-service */ "./node_modules/@theia/monaco/lib/browser/monaco-quick-open-service.js");
var monaco_text_model_service_1 = __webpack_require__(/*! ./monaco-text-model-service */ "./node_modules/@theia/monaco/lib/browser/monaco-text-model-service.js");
var monaco_workspace_1 = __webpack_require__(/*! ./monaco-workspace */ "./node_modules/@theia/monaco/lib/browser/monaco-workspace.js");
var monaco_bulk_edit_service_1 = __webpack_require__(/*! ./monaco-bulk-edit-service */ "./node_modules/@theia/monaco/lib/browser/monaco-bulk-edit-service.js");
var application_protocol_1 = __webpack_require__(/*! @theia/core/lib/common/application-protocol */ "./node_modules/@theia/core/lib/common/application-protocol.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var monaco_resolved_keybinding_1 = __webpack_require__(/*! ./monaco-resolved-keybinding */ "./node_modules/@theia/monaco/lib/browser/monaco-resolved-keybinding.js");
exports.MonacoEditorFactory = Symbol('MonacoEditorFactory');
var MonacoEditorProvider = /** @class */ (function () {
    function MonacoEditorProvider(codeEditorService, textModelService, contextMenuService, m2p, p2m, workspace, commandServiceFactory, editorPreferences, quickOpenService, diffNavigatorFactory, applicationServer, contextKeyService) {
        var _this = this;
        this.codeEditorService = codeEditorService;
        this.textModelService = textModelService;
        this.contextMenuService = contextMenuService;
        this.m2p = m2p;
        this.p2m = p2m;
        this.workspace = workspace;
        this.commandServiceFactory = commandServiceFactory;
        this.editorPreferences = editorPreferences;
        this.quickOpenService = quickOpenService;
        this.diffNavigatorFactory = diffNavigatorFactory;
        this.applicationServer = applicationServer;
        this.contextKeyService = contextKeyService;
        this.isWindowsBackend = false;
        var staticServices = monaco.services.StaticServices;
        var init = staticServices.init.bind(monaco.services.StaticServices);
        this.applicationServer.getBackendOS().then(function (os) {
            _this.isWindowsBackend = os === core_1.OS.Type.Windows;
        });
        if (staticServices.resourcePropertiesService) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var original = staticServices.resourcePropertiesService.get();
            original.getEOL = function () {
                var eol = _this.editorPreferences['files.eol'];
                if (eol) {
                    if (eol !== 'auto') {
                        return eol;
                    }
                }
                return _this.isWindowsBackend ? '\r\n' : '\n';
            };
        }
        monaco.services.StaticServices.init = function (o) {
            var result = init(o);
            result[0].set(monaco.services.ICodeEditorService, codeEditorService);
            return result;
        };
    }
    MonacoEditorProvider_1 = MonacoEditorProvider;
    Object.defineProperty(MonacoEditorProvider.prototype, "current", {
        /**
         * Returns the last focused MonacoEditor.
         * It takes into account inline editors as well.
         * If you are interested only in standalone editors then use `MonacoEditor.getCurrent(EditorManager)`
         */
        get: function () {
            return this._current;
        },
        enumerable: false,
        configurable: true
    });
    MonacoEditorProvider.prototype.getModel = function (uri, toDispose) {
        return __awaiter(this, void 0, void 0, function () {
            var reference;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.textModelService.createModelReference(uri)];
                    case 1:
                        reference = _a.sent();
                        if (!!reference.object.valid) return [3 /*break*/, 3];
                        return [4 /*yield*/, reference.object.sync()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!reference.object.valid) {
                            reference.dispose();
                            throw Object.assign(new Error("'" + uri.toString() + "' is invalid"), { code: 'MODEL_IS_INVALID' });
                        }
                        toDispose.push(reference);
                        return [2 /*return*/, reference.object];
                }
            });
        });
    };
    MonacoEditorProvider.prototype.get = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editorPreferences.ready];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.doCreateEditor(uri, function (override, toDispose) { return _this.createEditor(uri, override, toDispose); })];
                }
            });
        });
    };
    MonacoEditorProvider.prototype.doCreateEditor = function (uri, factory) {
        return __awaiter(this, void 0, void 0, function () {
            var commandService, contextKeyService, _a, codeEditorService, textModelService, contextMenuService, IWorkspaceEditService, toDispose, openerService, editor, standaloneCommandService;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        commandService = this.commandServiceFactory();
                        contextKeyService = this.contextKeyService.createScoped();
                        _a = this, codeEditorService = _a.codeEditorService, textModelService = _a.textModelService, contextMenuService = _a.contextMenuService;
                        IWorkspaceEditService = this.bulkEditService;
                        toDispose = new common_1.DisposableCollection(commandService);
                        openerService = new monaco.services.OpenerService(codeEditorService, commandService);
                        openerService.registerOpener({
                            open: function (u, options) { return _this.interceptOpen(u, options); }
                        });
                        return [4 /*yield*/, factory({
                                codeEditorService: codeEditorService,
                                textModelService: textModelService,
                                contextMenuService: contextMenuService,
                                commandService: commandService,
                                IWorkspaceEditService: IWorkspaceEditService,
                                contextKeyService: contextKeyService,
                                openerService: openerService
                            }, toDispose)];
                    case 1:
                        editor = _b.sent();
                        editor.onDispose(function () { return toDispose.dispose(); });
                        this.suppressMonacoKeybindingListener(editor);
                        this.injectKeybindingResolver(editor);
                        standaloneCommandService = new monaco.services.StandaloneCommandService(editor.instantiationService);
                        commandService.setDelegate(standaloneCommandService);
                        toDispose.push(this.installQuickOpenService(editor));
                        toDispose.push(this.installReferencesController(editor));
                        toDispose.push(editor.onFocusChanged(function (focused) {
                            if (focused) {
                                _this._current = editor;
                            }
                        }));
                        toDispose.push(common_1.Disposable.create(function () {
                            if (_this._current === editor) {
                                _this._current = undefined;
                            }
                        }));
                        return [2 /*return*/, editor];
                }
            });
        });
    };
    /**
     * Intercept internal Monaco open calls and delegate to OpenerService.
     */
    MonacoEditorProvider.prototype.interceptOpen = function (monacoUri, monacoOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var options, uri, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = undefined;
                        if (monacoOptions) {
                            if ('openToSide' in monacoOptions && monacoOptions.openToSide) {
                                options = Object.assign(options || {}, {
                                    widgetOptions: {
                                        mode: 'split-right'
                                    }
                                });
                            }
                            if ('openExternal' in monacoOptions && monacoOptions.openExternal) {
                                options = Object.assign(options || {}, {
                                    openExternal: true
                                });
                            }
                        }
                        uri = new uri_1.default(monacoUri.toString());
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, browser_2.open(this.openerService, uri, options)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 3:
                        e_1 = _a.sent();
                        console.error("Fail to open '" + uri.toString() + "':", e_1);
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Suppresses Monaco keydown listener to avoid triggering default Monaco keybindings
     * if they are overridden by a user. Monaco keybindings should be registered as Theia keybindings
     * to allow a user to customize them.
     */
    MonacoEditorProvider.prototype.suppressMonacoKeybindingListener = function (editor) {
        var e_2, _a;
        var keydownListener;
        var keybindingService = editor.getControl()._standaloneKeybindingService;
        try {
            for (var _b = __values(keybindingService._store._toDispose), _c = _b.next(); !_c.done; _c = _b.next()) {
                var listener = _c.value;
                if ('_type' in listener && listener['_type'] === 'keydown') {
                    keydownListener = listener;
                    break;
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
        if (keydownListener) {
            keydownListener.dispose();
        }
    };
    MonacoEditorProvider.prototype.injectKeybindingResolver = function (editor) {
        var _this = this;
        var keybindingService = editor.getControl()._standaloneKeybindingService;
        keybindingService.resolveKeybinding = function (keybinding) { return [new monaco_resolved_keybinding_1.MonacoResolvedKeybinding(monaco_resolved_keybinding_1.MonacoResolvedKeybinding.keySequence(keybinding), _this.keybindingRegistry)]; };
        keybindingService.resolveKeyboardEvent = function (keyboardEvent) {
            var keybinding = new monaco.keybindings.SimpleKeybinding(keyboardEvent.ctrlKey, keyboardEvent.shiftKey, keyboardEvent.altKey, keyboardEvent.metaKey, keyboardEvent.keyCode).toChord();
            return new monaco_resolved_keybinding_1.MonacoResolvedKeybinding(monaco_resolved_keybinding_1.MonacoResolvedKeybinding.keySequence(keybinding), _this.keybindingRegistry);
        };
    };
    MonacoEditorProvider.prototype.createEditor = function (uri, override, toDispose) {
        if (diff_uris_1.DiffUris.isDiffUri(uri)) {
            return this.createMonacoDiffEditor(uri, override, toDispose);
        }
        return this.createMonacoEditor(uri, override, toDispose);
    };
    Object.defineProperty(MonacoEditorProvider.prototype, "preferencePrefixes", {
        get: function () {
            return ['editor.'];
        },
        enumerable: false,
        configurable: true
    });
    MonacoEditorProvider.prototype.createMonacoEditor = function (uri, override, toDispose) {
        return __awaiter(this, void 0, void 0, function () {
            var model, options, factory, editor;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getModel(uri, toDispose)];
                    case 1:
                        model = _a.sent();
                        options = this.createMonacoEditorOptions(model);
                        factory = this.factories.getContributions().find(function (_a) {
                            var scheme = _a.scheme;
                            return uri.scheme === scheme;
                        });
                        editor = factory
                            ? factory.create(model, options, override)
                            : new monaco_editor_1.MonacoEditor(uri, model, document.createElement('div'), this.services, options, override);
                        toDispose.push(this.editorPreferences.onPreferenceChanged(function (event) {
                            if (event.affects(uri.toString(), model.languageId)) {
                                _this.updateMonacoEditorOptions(editor, event);
                            }
                        }));
                        toDispose.push(editor.onLanguageChanged(function () { return _this.updateMonacoEditorOptions(editor); }));
                        editor.document.onWillSaveModel(function (event) { return event.waitUntil(_this.formatOnSave(editor, event)); });
                        return [2 /*return*/, editor];
                }
            });
        });
    };
    MonacoEditorProvider.prototype.createMonacoEditorOptions = function (model) {
        var options = this.createOptions(this.preferencePrefixes, model.uri, model.languageId);
        options.model = model.textEditorModel;
        options.readOnly = model.readOnly;
        return options;
    };
    MonacoEditorProvider.prototype.updateMonacoEditorOptions = function (editor, event) {
        if (event) {
            var preferenceName = event.preferenceName;
            var overrideIdentifier = editor.document.languageId;
            var newValue = this.editorPreferences.get({ preferenceName: preferenceName, overrideIdentifier: overrideIdentifier }, undefined, editor.uri.toString());
            editor.getControl().updateOptions(this.setOption(preferenceName, newValue, this.preferencePrefixes));
        }
        else {
            var options = this.createMonacoEditorOptions(editor.document);
            delete options.model;
            editor.getControl().updateOptions(options);
        }
    };
    MonacoEditorProvider.prototype.formatOnSave = function (editor, event) {
        return __awaiter(this, void 0, void 0, function () {
            var overrideIdentifier, uri, formatOnSave, formatOnSaveTimeout;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (event.reason !== monaco_languageclient_1.TextDocumentSaveReason.Manual) {
                            return [2 /*return*/, []];
                        }
                        overrideIdentifier = editor.document.languageId;
                        uri = editor.uri.toString();
                        formatOnSave = this.editorPreferences.get({ preferenceName: 'editor.formatOnSave', overrideIdentifier: overrideIdentifier }, undefined, uri);
                        if (!formatOnSave) {
                            return [2 /*return*/, []];
                        }
                        formatOnSaveTimeout = this.editorPreferences.get({ preferenceName: 'editor.formatOnSaveTimeout', overrideIdentifier: overrideIdentifier }, undefined, uri);
                        return [4 /*yield*/, Promise.race([
                                new Promise(function (_, reject) { return setTimeout(function () { return reject(new Error("Aborted format on save after " + formatOnSaveTimeout + "ms")); }, formatOnSaveTimeout); }),
                                editor.commandService.executeCommand('editor.action.formatDocument')
                            ])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, []];
                }
            });
        });
    };
    Object.defineProperty(MonacoEditorProvider.prototype, "diffPreferencePrefixes", {
        get: function () {
            return __spread(this.preferencePrefixes, ['diffEditor.']);
        },
        enumerable: false,
        configurable: true
    });
    MonacoEditorProvider.prototype.createMonacoDiffEditor = function (uri, override, toDispose) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, original, modified, _b, originalModel, modifiedModel, options, editor;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = __read(diff_uris_1.DiffUris.decode(uri), 2), original = _a[0], modified = _a[1];
                        return [4 /*yield*/, Promise.all([this.getModel(original, toDispose), this.getModel(modified, toDispose)])];
                    case 1:
                        _b = __read.apply(void 0, [_c.sent(), 2]), originalModel = _b[0], modifiedModel = _b[1];
                        options = this.createMonacoDiffEditorOptions(originalModel, modifiedModel);
                        editor = new monaco_diff_editor_1.MonacoDiffEditor(uri, document.createElement('div'), originalModel, modifiedModel, this.services, this.diffNavigatorFactory, options, override);
                        toDispose.push(this.editorPreferences.onPreferenceChanged(function (event) {
                            var originalFileUri = original.withoutQuery().withScheme('file').toString();
                            if (event.affects(originalFileUri, editor.document.languageId)) {
                                _this.updateMonacoDiffEditorOptions(editor, event, originalFileUri);
                            }
                        }));
                        toDispose.push(editor.onLanguageChanged(function () { return _this.updateMonacoDiffEditorOptions(editor); }));
                        return [2 /*return*/, editor];
                }
            });
        });
    };
    MonacoEditorProvider.prototype.createMonacoDiffEditorOptions = function (original, modified) {
        var options = this.createOptions(this.diffPreferencePrefixes, modified.uri, modified.languageId);
        options.originalEditable = !original.readOnly;
        options.readOnly = modified.readOnly;
        return options;
    };
    MonacoEditorProvider.prototype.updateMonacoDiffEditorOptions = function (editor, event, resourceUri) {
        if (event) {
            var preferenceName = event.preferenceName;
            var overrideIdentifier = editor.document.languageId;
            var newValue = this.editorPreferences.get({ preferenceName: preferenceName, overrideIdentifier: overrideIdentifier }, undefined, resourceUri);
            editor.diffEditor.updateOptions(this.setOption(preferenceName, newValue, this.diffPreferencePrefixes));
        }
        else {
            var options = this.createMonacoDiffEditorOptions(editor.originalModel, editor.modifiedModel);
            editor.diffEditor.updateOptions(options);
        }
    };
    MonacoEditorProvider.prototype.createOptions = function (prefixes, uri, overrideIdentifier) {
        var _this = this;
        return Object.keys(this.editorPreferences).reduce(function (options, preferenceName) {
            var value = _this.editorPreferences.get({ preferenceName: preferenceName, overrideIdentifier: overrideIdentifier }, undefined, uri);
            return _this.setOption(preferenceName, common_1.deepClone(value), prefixes, options);
        }, {});
    };
    MonacoEditorProvider.prototype.setOption = function (preferenceName, value, prefixes, options) {
        if (options === void 0) { options = {}; }
        var optionName = this.toOptionName(preferenceName, prefixes);
        this.doSetOption(options, value, optionName.split('.'));
        return options;
    };
    MonacoEditorProvider.prototype.toOptionName = function (preferenceName, prefixes) {
        var e_3, _a;
        try {
            for (var prefixes_1 = __values(prefixes), prefixes_1_1 = prefixes_1.next(); !prefixes_1_1.done; prefixes_1_1 = prefixes_1.next()) {
                var prefix = prefixes_1_1.value;
                if (preferenceName.startsWith(prefix)) {
                    return preferenceName.substr(prefix.length);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (prefixes_1_1 && !prefixes_1_1.done && (_a = prefixes_1.return)) _a.call(prefixes_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return preferenceName;
    };
    MonacoEditorProvider.prototype.doSetOption = function (obj, value, names, idx) {
        if (idx === void 0) { idx = 0; }
        var name = names[idx];
        if (!obj[name]) {
            if (names.length > (idx + 1)) {
                obj[name] = {};
                this.doSetOption(obj[name], value, names, (idx + 1));
            }
            else {
                obj[name] = value;
            }
        }
    };
    MonacoEditorProvider.prototype.installQuickOpenService = function (editor) {
        var _this = this;
        var control = editor.getControl();
        var quickOpenController = control._contributions['editor.controller.quickOpenController'];
        var originalRun = quickOpenController.run;
        var toDispose = new common_1.DisposableCollection();
        quickOpenController.dispose = function () { return toDispose.dispose(); };
        quickOpenController.run = function (options) {
            var toDisposeOnClose = toDispose.push(common_1.Disposable.create(function () { return _this.quickOpenService.hide(); }));
            var selection = control.getSelection();
            _this.quickOpenService.internalOpen(__assign(__assign({}, options), { onClose: function (canceled) {
                    toDisposeOnClose.dispose();
                    quickOpenController.clearDecorations();
                    // Restore selection if canceled
                    if (canceled && selection) {
                        control.setSelection(selection);
                        control.revealRangeInCenterIfOutsideViewport(selection);
                    }
                    // Return focus to the editor if
                    // - focus is back on the <body> element because no other focusable element was clicked
                    // - a command was picked from the picker which indicates the editor should get focused
                    if (document.activeElement === document.body || !canceled) {
                        editor.focus();
                    }
                } }));
        };
        return common_1.Disposable.create(function () { return quickOpenController.run = originalRun; });
    };
    MonacoEditorProvider.prototype.installReferencesController = function (editor) {
        var _this = this;
        var control = editor.getControl();
        var referencesController = control._contributions['editor.contrib.referencesController'];
        var originalGotoReference = referencesController._gotoReference;
        referencesController._gotoReference = function (ref) { return __awaiter(_this, void 0, void 0, function () {
            var range, model;
            return __generator(this, function (_a) {
                if (referencesController._widget) {
                    referencesController._widget.hide();
                }
                referencesController._ignoreModelChangeEvent = true;
                range = monaco.Range.lift(ref.range).collapseToStart();
                model = referencesController._model;
                referencesController._model = undefined;
                referencesController._editorService.openCodeEditor({
                    resource: ref.uri,
                    options: { selection: range }
                }, control).then(function (openedEditor) {
                    referencesController._model = model;
                    referencesController._ignoreModelChangeEvent = false;
                    if (!openedEditor) {
                        referencesController.closeWidget();
                        return;
                    }
                    if (openedEditor !== control) {
                        // preserve the model that it does not get disposed in `referencesController.closeWidget`
                        referencesController._model = undefined;
                        // to preserve the active editor
                        var focus_1 = control.focus;
                        control.focus = function () { };
                        referencesController.closeWidget();
                        control.focus = focus_1;
                        var modelPromise = Promise.resolve(model);
                        modelPromise.cancel = function () { };
                        openedEditor._contributions['editor.contrib.referencesController'].toggleWidget(range, modelPromise, true);
                        return;
                    }
                    if (referencesController._widget) {
                        referencesController._widget.show(range);
                        referencesController._widget.focus();
                    }
                }, function (e) {
                    referencesController._ignoreModelChangeEvent = false;
                    monaco.error.onUnexpectedError(e);
                });
                return [2 /*return*/];
            });
        }); };
        return common_1.Disposable.create(function () { return referencesController._gotoReference = originalGotoReference; });
    };
    MonacoEditorProvider.prototype.getDiffNavigator = function (editor) {
        if (editor instanceof monaco_diff_editor_1.MonacoDiffEditor) {
            return editor.diffNavigator;
        }
        return monaco_diff_navigator_factory_1.MonacoDiffNavigatorFactory.nullNavigator;
    };
    MonacoEditorProvider.prototype.createInline = function (uri, node, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.doCreateEditor(uri, function (override, toDispose) { return __awaiter(_this, void 0, void 0, function () {
                        var document, model;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    override.contextMenuService = {
                                        showContextMenu: function () { }
                                    };
                                    document = new monaco_editor_model_1.MonacoEditorModel({
                                        uri: uri,
                                        readContents: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                            return [2 /*return*/, ''];
                                        }); }); },
                                        dispose: function () { }
                                    }, this.m2p, this.p2m);
                                    toDispose.push(document);
                                    return [4 /*yield*/, document.load()];
                                case 1:
                                    model = (_a.sent()).textEditorModel;
                                    return [2 /*return*/, new monaco_editor_1.MonacoEditor(uri, document, node, this.services, Object.assign({
                                            model: model,
                                            isSimpleWidget: true,
                                            autoSizing: false,
                                            minHeight: 1,
                                            maxHeight: 1
                                        }, MonacoEditorProvider_1.inlineOptions, options), override)];
                            }
                        });
                    }); })];
            });
        });
    };
    var MonacoEditorProvider_1;
    MonacoEditorProvider.inlineOptions = {
        wordWrap: 'on',
        overviewRulerLanes: 0,
        glyphMargin: false,
        lineNumbers: 'off',
        folding: false,
        selectOnLineNumbers: false,
        hideCursorInOverviewRuler: true,
        selectionHighlight: false,
        scrollbar: {
            horizontal: 'hidden'
        },
        lineDecorationsWidth: 0,
        overviewRulerBorder: false,
        scrollBeyondLastLine: false,
        renderLineHighlight: 'none',
        fixedOverflowWidgets: true,
        acceptSuggestionOnEnter: 'smart',
        minimap: {
            enabled: false
        }
    };
    __decorate([
        inversify_1.inject(core_1.ContributionProvider),
        inversify_1.named(exports.MonacoEditorFactory),
        __metadata("design:type", Object)
    ], MonacoEditorProvider.prototype, "factories", void 0);
    __decorate([
        inversify_1.inject(monaco_bulk_edit_service_1.MonacoBulkEditService),
        __metadata("design:type", monaco_bulk_edit_service_1.MonacoBulkEditService)
    ], MonacoEditorProvider.prototype, "bulkEditService", void 0);
    __decorate([
        inversify_1.inject(monaco_editor_1.MonacoEditorServices),
        __metadata("design:type", monaco_editor_1.MonacoEditorServices)
    ], MonacoEditorProvider.prototype, "services", void 0);
    __decorate([
        inversify_1.inject(browser_2.KeybindingRegistry),
        __metadata("design:type", browser_2.KeybindingRegistry)
    ], MonacoEditorProvider.prototype, "keybindingRegistry", void 0);
    __decorate([
        inversify_1.inject(browser_2.OpenerService),
        __metadata("design:type", Object)
    ], MonacoEditorProvider.prototype, "openerService", void 0);
    MonacoEditorProvider = MonacoEditorProvider_1 = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(monaco_editor_service_1.MonacoEditorService)),
        __param(1, inversify_1.inject(monaco_text_model_service_1.MonacoTextModelService)),
        __param(2, inversify_1.inject(monaco_context_menu_1.MonacoContextMenuService)),
        __param(3, inversify_1.inject(monaco_languageclient_1.MonacoToProtocolConverter)),
        __param(4, inversify_1.inject(monaco_languageclient_1.ProtocolToMonacoConverter)),
        __param(5, inversify_1.inject(monaco_workspace_1.MonacoWorkspace)),
        __param(6, inversify_1.inject(monaco_command_service_1.MonacoCommandServiceFactory)),
        __param(7, inversify_1.inject(browser_1.EditorPreferences)),
        __param(8, inversify_1.inject(monaco_quick_open_service_1.MonacoQuickOpenService)),
        __param(9, inversify_1.inject(monaco_diff_navigator_factory_1.MonacoDiffNavigatorFactory)),
        __param(10, inversify_1.inject(application_protocol_1.ApplicationServer)),
        __param(11, inversify_1.inject(monaco.contextKeyService.ContextKeyService)),
        __metadata("design:paramtypes", [monaco_editor_service_1.MonacoEditorService,
            monaco_text_model_service_1.MonacoTextModelService,
            monaco_context_menu_1.MonacoContextMenuService,
            monaco_languageclient_1.MonacoToProtocolConverter,
            monaco_languageclient_1.ProtocolToMonacoConverter,
            monaco_workspace_1.MonacoWorkspace, Function, Object, monaco_quick_open_service_1.MonacoQuickOpenService,
            monaco_diff_navigator_factory_1.MonacoDiffNavigatorFactory, Object, monaco.contextKeyService.ContextKeyService])
    ], MonacoEditorProvider);
    return MonacoEditorProvider;
}());
exports.MonacoEditorProvider = MonacoEditorProvider;
//# sourceMappingURL=monaco-editor-provider.js.map

/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-editor-service.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-editor-service.js ***!
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
exports.MonacoEditorService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var monaco_languageclient_1 = __webpack_require__(/*! monaco-languageclient */ "./node_modules/monaco-languageclient/lib/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var monaco_editor_1 = __webpack_require__(/*! ./monaco-editor */ "./node_modules/@theia/monaco/lib/browser/monaco-editor.js");
inversify_1.decorate(inversify_1.injectable(), monaco.services.CodeEditorServiceImpl);
var MonacoEditorService = /** @class */ (function (_super) {
    __extends(MonacoEditorService, _super);
    function MonacoEditorService() {
        return _super.call(this, monaco.services.StaticServices.standaloneThemeService.get()) || this;
    }
    MonacoEditorService_1 = MonacoEditorService;
    /**
     * Monaco active editor is either focused or last focused editor.
     */
    MonacoEditorService.prototype.getActiveCodeEditor = function () {
        var editor = monaco_editor_1.MonacoEditor.getCurrent(this.editors);
        return editor && editor.getControl();
    };
    MonacoEditorService.prototype.openCodeEditor = function (input, source, sideBySide) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, openerOptions, widget, editorWidget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new uri_1.default(input.resource.toString());
                        openerOptions = this.createEditorOpenerOptions(input, source, sideBySide);
                        return [4 /*yield*/, browser_1.open(this.openerService, uri, openerOptions)];
                    case 1:
                        widget = _a.sent();
                        return [4 /*yield*/, this.findEditorWidgetByUri(widget, uri.toString())];
                    case 2:
                        editorWidget = _a.sent();
                        if (editorWidget && editorWidget.editor instanceof monaco_editor_1.MonacoEditor) {
                            return [2 /*return*/, editorWidget.editor.getControl()];
                        }
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    MonacoEditorService.prototype.findEditorWidgetByUri = function (widget, uriAsString) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, childWidget, editorWidget, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (widget instanceof browser_2.EditorWidget) {
                            if (widget.editor.uri.toString() === uriAsString) {
                                return [2 /*return*/, widget];
                            }
                            return [2 /*return*/, undefined];
                        }
                        if (!browser_1.ApplicationShell.TrackableWidgetProvider.is(widget)) return [3 /*break*/, 8];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        _a = __values(widget.getTrackableWidgets()), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 5];
                        childWidget = _b.value;
                        return [4 /*yield*/, this.findEditorWidgetByUri(childWidget, uriAsString)];
                    case 3:
                        editorWidget = _d.sent();
                        if (editorWidget) {
                            return [2 /*return*/, editorWidget];
                        }
                        _d.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, undefined];
                }
            });
        });
    };
    MonacoEditorService.prototype.createEditorOpenerOptions = function (input, source, sideBySide) {
        var mode = this.getEditorOpenMode(input);
        var selection = input.options && this.m2p.asRange(input.options.selection);
        var widgetOptions = this.getWidgetOptions(source, sideBySide);
        var preview = !!this.preferencesService.get(MonacoEditorService_1.ENABLE_PREVIEW_PREFERENCE, false);
        return { mode: mode, selection: selection, widgetOptions: widgetOptions, preview: preview };
    };
    MonacoEditorService.prototype.getEditorOpenMode = function (input) {
        var options = __assign({ preserveFocus: false, revealIfVisible: true }, input.options);
        if (options.preserveFocus) {
            return 'reveal';
        }
        return options.revealIfVisible ? 'activate' : 'open';
    };
    MonacoEditorService.prototype.getWidgetOptions = function (source, sideBySide) {
        var ref = monaco_editor_1.MonacoEditor.getWidgetFor(this.editors, source);
        if (!ref) {
            return undefined;
        }
        var area = (ref && this.shell.getAreaFor(ref)) || 'main';
        var mode = ref && sideBySide ? 'split-right' : undefined;
        return { area: area, mode: mode, ref: ref };
    };
    var MonacoEditorService_1;
    MonacoEditorService.ENABLE_PREVIEW_PREFERENCE = 'editor.enablePreview';
    __decorate([
        inversify_1.inject(browser_1.OpenerService),
        __metadata("design:type", Object)
    ], MonacoEditorService.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(monaco_languageclient_1.MonacoToProtocolConverter),
        __metadata("design:type", monaco_languageclient_1.MonacoToProtocolConverter)
    ], MonacoEditorService.prototype, "m2p", void 0);
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], MonacoEditorService.prototype, "shell", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], MonacoEditorService.prototype, "editors", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceService),
        __metadata("design:type", Object)
    ], MonacoEditorService.prototype, "preferencesService", void 0);
    MonacoEditorService = MonacoEditorService_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], MonacoEditorService);
    return MonacoEditorService;
}(monaco.services.CodeEditorServiceImpl));
exports.MonacoEditorService = MonacoEditorService;
//# sourceMappingURL=monaco-editor-service.js.map

/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-keycode-map.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-keycode-map.js ***!
  \**********************************************************************/
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
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.KEY_CODE_MAP = void 0;
var browser = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var KeyCode = monaco.KeyCode;
exports.KEY_CODE_MAP = [];
(function () {
    exports.KEY_CODE_MAP[3] = KeyCode.PauseBreak; // VK_CANCEL 0x03 Control-break processing
    exports.KEY_CODE_MAP[8] = KeyCode.Backspace;
    exports.KEY_CODE_MAP[9] = KeyCode.Tab;
    exports.KEY_CODE_MAP[13] = KeyCode.Enter;
    exports.KEY_CODE_MAP[16] = KeyCode.Shift;
    exports.KEY_CODE_MAP[17] = KeyCode.Ctrl;
    exports.KEY_CODE_MAP[18] = KeyCode.Alt;
    exports.KEY_CODE_MAP[19] = KeyCode.PauseBreak;
    exports.KEY_CODE_MAP[20] = KeyCode.CapsLock;
    exports.KEY_CODE_MAP[27] = KeyCode.Escape;
    exports.KEY_CODE_MAP[32] = KeyCode.Space;
    exports.KEY_CODE_MAP[33] = KeyCode.PageUp;
    exports.KEY_CODE_MAP[34] = KeyCode.PageDown;
    exports.KEY_CODE_MAP[35] = KeyCode.End;
    exports.KEY_CODE_MAP[36] = KeyCode.Home;
    exports.KEY_CODE_MAP[37] = KeyCode.LeftArrow;
    exports.KEY_CODE_MAP[38] = KeyCode.UpArrow;
    exports.KEY_CODE_MAP[39] = KeyCode.RightArrow;
    exports.KEY_CODE_MAP[40] = KeyCode.DownArrow;
    exports.KEY_CODE_MAP[45] = KeyCode.Insert;
    exports.KEY_CODE_MAP[46] = KeyCode.Delete;
    exports.KEY_CODE_MAP[48] = KeyCode.KEY_0;
    exports.KEY_CODE_MAP[49] = KeyCode.KEY_1;
    exports.KEY_CODE_MAP[50] = KeyCode.KEY_2;
    exports.KEY_CODE_MAP[51] = KeyCode.KEY_3;
    exports.KEY_CODE_MAP[52] = KeyCode.KEY_4;
    exports.KEY_CODE_MAP[53] = KeyCode.KEY_5;
    exports.KEY_CODE_MAP[54] = KeyCode.KEY_6;
    exports.KEY_CODE_MAP[55] = KeyCode.KEY_7;
    exports.KEY_CODE_MAP[56] = KeyCode.KEY_8;
    exports.KEY_CODE_MAP[57] = KeyCode.KEY_9;
    exports.KEY_CODE_MAP[65] = KeyCode.KEY_A;
    exports.KEY_CODE_MAP[66] = KeyCode.KEY_B;
    exports.KEY_CODE_MAP[67] = KeyCode.KEY_C;
    exports.KEY_CODE_MAP[68] = KeyCode.KEY_D;
    exports.KEY_CODE_MAP[69] = KeyCode.KEY_E;
    exports.KEY_CODE_MAP[70] = KeyCode.KEY_F;
    exports.KEY_CODE_MAP[71] = KeyCode.KEY_G;
    exports.KEY_CODE_MAP[72] = KeyCode.KEY_H;
    exports.KEY_CODE_MAP[73] = KeyCode.KEY_I;
    exports.KEY_CODE_MAP[74] = KeyCode.KEY_J;
    exports.KEY_CODE_MAP[75] = KeyCode.KEY_K;
    exports.KEY_CODE_MAP[76] = KeyCode.KEY_L;
    exports.KEY_CODE_MAP[77] = KeyCode.KEY_M;
    exports.KEY_CODE_MAP[78] = KeyCode.KEY_N;
    exports.KEY_CODE_MAP[79] = KeyCode.KEY_O;
    exports.KEY_CODE_MAP[80] = KeyCode.KEY_P;
    exports.KEY_CODE_MAP[81] = KeyCode.KEY_Q;
    exports.KEY_CODE_MAP[82] = KeyCode.KEY_R;
    exports.KEY_CODE_MAP[83] = KeyCode.KEY_S;
    exports.KEY_CODE_MAP[84] = KeyCode.KEY_T;
    exports.KEY_CODE_MAP[85] = KeyCode.KEY_U;
    exports.KEY_CODE_MAP[86] = KeyCode.KEY_V;
    exports.KEY_CODE_MAP[87] = KeyCode.KEY_W;
    exports.KEY_CODE_MAP[88] = KeyCode.KEY_X;
    exports.KEY_CODE_MAP[89] = KeyCode.KEY_Y;
    exports.KEY_CODE_MAP[90] = KeyCode.KEY_Z;
    exports.KEY_CODE_MAP[93] = KeyCode.ContextMenu;
    exports.KEY_CODE_MAP[96] = KeyCode.NUMPAD_0;
    exports.KEY_CODE_MAP[97] = KeyCode.NUMPAD_1;
    exports.KEY_CODE_MAP[98] = KeyCode.NUMPAD_2;
    exports.KEY_CODE_MAP[99] = KeyCode.NUMPAD_3;
    exports.KEY_CODE_MAP[100] = KeyCode.NUMPAD_4;
    exports.KEY_CODE_MAP[101] = KeyCode.NUMPAD_5;
    exports.KEY_CODE_MAP[102] = KeyCode.NUMPAD_6;
    exports.KEY_CODE_MAP[103] = KeyCode.NUMPAD_7;
    exports.KEY_CODE_MAP[104] = KeyCode.NUMPAD_8;
    exports.KEY_CODE_MAP[105] = KeyCode.NUMPAD_9;
    exports.KEY_CODE_MAP[106] = KeyCode.NUMPAD_MULTIPLY;
    exports.KEY_CODE_MAP[107] = KeyCode.NUMPAD_ADD;
    exports.KEY_CODE_MAP[108] = KeyCode.NUMPAD_SEPARATOR;
    exports.KEY_CODE_MAP[109] = KeyCode.NUMPAD_SUBTRACT;
    exports.KEY_CODE_MAP[110] = KeyCode.NUMPAD_DECIMAL;
    exports.KEY_CODE_MAP[111] = KeyCode.NUMPAD_DIVIDE;
    exports.KEY_CODE_MAP[112] = KeyCode.F1;
    exports.KEY_CODE_MAP[113] = KeyCode.F2;
    exports.KEY_CODE_MAP[114] = KeyCode.F3;
    exports.KEY_CODE_MAP[115] = KeyCode.F4;
    exports.KEY_CODE_MAP[116] = KeyCode.F5;
    exports.KEY_CODE_MAP[117] = KeyCode.F6;
    exports.KEY_CODE_MAP[118] = KeyCode.F7;
    exports.KEY_CODE_MAP[119] = KeyCode.F8;
    exports.KEY_CODE_MAP[120] = KeyCode.F9;
    exports.KEY_CODE_MAP[121] = KeyCode.F10;
    exports.KEY_CODE_MAP[122] = KeyCode.F11;
    exports.KEY_CODE_MAP[123] = KeyCode.F12;
    exports.KEY_CODE_MAP[124] = KeyCode.F13;
    exports.KEY_CODE_MAP[125] = KeyCode.F14;
    exports.KEY_CODE_MAP[126] = KeyCode.F15;
    exports.KEY_CODE_MAP[127] = KeyCode.F16;
    exports.KEY_CODE_MAP[128] = KeyCode.F17;
    exports.KEY_CODE_MAP[129] = KeyCode.F18;
    exports.KEY_CODE_MAP[130] = KeyCode.F19;
    exports.KEY_CODE_MAP[144] = KeyCode.NumLock;
    exports.KEY_CODE_MAP[145] = KeyCode.ScrollLock;
    exports.KEY_CODE_MAP[186] = KeyCode.US_SEMICOLON;
    exports.KEY_CODE_MAP[187] = KeyCode.US_EQUAL;
    exports.KEY_CODE_MAP[188] = KeyCode.US_COMMA;
    exports.KEY_CODE_MAP[189] = KeyCode.US_MINUS;
    exports.KEY_CODE_MAP[190] = KeyCode.US_DOT;
    exports.KEY_CODE_MAP[191] = KeyCode.US_SLASH;
    exports.KEY_CODE_MAP[192] = KeyCode.US_BACKTICK;
    exports.KEY_CODE_MAP[193] = KeyCode.ABNT_C1;
    exports.KEY_CODE_MAP[194] = KeyCode.ABNT_C2;
    exports.KEY_CODE_MAP[219] = KeyCode.US_OPEN_SQUARE_BRACKET;
    exports.KEY_CODE_MAP[220] = KeyCode.US_BACKSLASH;
    exports.KEY_CODE_MAP[221] = KeyCode.US_CLOSE_SQUARE_BRACKET;
    exports.KEY_CODE_MAP[222] = KeyCode.US_QUOTE;
    exports.KEY_CODE_MAP[223] = KeyCode.OEM_8;
    exports.KEY_CODE_MAP[226] = KeyCode.OEM_102;
    /**
     * https://lists.w3.org/Archives/Public/www-dom/2010JulSep/att-0182/keyCode-spec.html
     * If an Input Method Editor is processing key input and the event is keydown, return 229.
     */
    exports.KEY_CODE_MAP[229] = KeyCode.KEY_IN_COMPOSITION;
    if (browser.isIE) {
        exports.KEY_CODE_MAP[91] = KeyCode.Meta;
    }
    else if (browser.isFirefox) {
        exports.KEY_CODE_MAP[59] = KeyCode.US_SEMICOLON;
        exports.KEY_CODE_MAP[107] = KeyCode.US_EQUAL;
        exports.KEY_CODE_MAP[109] = KeyCode.US_MINUS;
        if (monaco.platform.OS === 2 /* Macintosh */) {
            exports.KEY_CODE_MAP[224] = KeyCode.Meta;
        }
    }
    else if (browser.isWebKit) {
        exports.KEY_CODE_MAP[91] = KeyCode.Meta;
        if (monaco.platform.OS === 2 /* Macintosh */) {
            // the two meta keys in the Mac have different key codes (91 and 93)
            exports.KEY_CODE_MAP[93] = KeyCode.Meta;
        }
        else {
            exports.KEY_CODE_MAP[92] = KeyCode.Meta;
        }
    }
})();


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-quick-open-service.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-quick-open-service.js ***!
  \*****************************************************************************/
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
exports.MonacoQuickOpenActionProvider = exports.MonacoQuickOpenAction = exports.QuickOpenEntryGroup = exports.QuickOpenEntry = exports.MonacoQuickOpenControllerOptsImpl = exports.MonacoQuickOpenService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var message_service_protocol_1 = __webpack_require__(/*! @theia/core/lib/common/message-service-protocol */ "./node_modules/@theia/core/lib/common/message-service-protocol.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var monaco_context_key_service_1 = __webpack_require__(/*! ./monaco-context-key-service */ "./node_modules/@theia/monaco/lib/browser/monaco-context-key-service.js");
var quick_open_service_1 = __webpack_require__(/*! @theia/core/lib/common/quick-open-service */ "./node_modules/@theia/core/lib/common/quick-open-service.js");
var monaco_resolved_keybinding_1 = __webpack_require__(/*! ./monaco-resolved-keybinding */ "./node_modules/@theia/monaco/lib/browser/monaco-resolved-keybinding.js");
var browser_menu_plugin_1 = __webpack_require__(/*! @theia/core/lib/browser/menu/browser-menu-plugin */ "./node_modules/@theia/core/lib/browser/menu/browser-menu-plugin.js");
var MonacoQuickOpenService = /** @class */ (function (_super) {
    __extends(MonacoQuickOpenService, _super);
    function MonacoQuickOpenService() {
        var _this = _super.call(this) || this;
        var overlayWidgets = document.createElement('div');
        overlayWidgets.classList.add('quick-open-overlay');
        document.body.appendChild(overlayWidgets);
        var container = _this.container = document.createElement('quick-open-container');
        container.style.position = 'absolute';
        container.style.top = '0px';
        container.style.right = '50%';
        container.style.zIndex = '1000000';
        overlayWidgets.appendChild(container);
        return _this;
    }
    MonacoQuickOpenService.prototype.init = function () {
        this.inQuickOpenKey = this.contextKeyService.createKey('inQuickOpen', false);
    };
    MonacoQuickOpenService.prototype.open = function (model, options) {
        this.internalOpen(new MonacoQuickOpenControllerOptsImpl(model, this.keybindingRegistry, options));
    };
    MonacoQuickOpenService.prototype.hide = function (reason) {
        var hideReason;
        switch (reason) {
            case quick_open_service_1.QuickOpenHideReason.ELEMENT_SELECTED:
                hideReason = monaco.quickOpen.HideReason.ELEMENT_SELECTED;
                break;
            case quick_open_service_1.QuickOpenHideReason.FOCUS_LOST:
                hideReason = monaco.quickOpen.HideReason.FOCUS_LOST;
                break;
            case quick_open_service_1.QuickOpenHideReason.CANCELED:
                hideReason = monaco.quickOpen.HideReason.CANCELED;
                break;
        }
        this.widget.hide(hideReason);
    };
    MonacoQuickOpenService.prototype.showDecoration = function (type) {
        var decoration = monaco.MarkerSeverity.Info;
        if (type === message_service_protocol_1.MessageType.Warning) {
            decoration = monaco.MarkerSeverity.Warning;
        }
        else if (type === message_service_protocol_1.MessageType.Error) {
            decoration = monaco.MarkerSeverity.Error;
        }
        this.showInputDecoration(decoration);
    };
    MonacoQuickOpenService.prototype.hideDecoration = function () {
        this.clearInputDecoration();
    };
    MonacoQuickOpenService.prototype.refresh = function () {
        var inputBox = this.widget.inputBox;
        if (inputBox) {
            this.onType(inputBox.inputElement.value);
        }
    };
    MonacoQuickOpenService.prototype.internalOpen = function (opts) {
        var browserMenuBarContribution = this.browserMenuBarContribution;
        if (browserMenuBarContribution) {
            var browserMenuBar = browserMenuBarContribution.menuBar;
            if (browserMenuBar) {
                var activeMenu = browserMenuBar.activeMenu;
                if (activeMenu) {
                    activeMenu.close();
                }
            }
        }
        // eslint-disable-next-line no-null/no-null
        if (this.widgetNode && this.widgetNode.offsetParent !== null) {
            this.hide();
        }
        this.opts = opts;
        var activeContext = window.document.activeElement || undefined;
        if (!activeContext || !this.container.contains(activeContext)) {
            this.previousActiveElement = activeContext;
            this.contextKeyService.activeContext = activeContext instanceof HTMLElement ? activeContext : undefined;
        }
        this.hideDecoration();
        this.widget.show(this.opts.prefix || '');
        this.setPlaceHolder(opts.inputAriaLabel);
        this.setPassword(opts.password ? true : false);
        this.setEnabled(opts.enabled);
        this.setValueSelected(opts.inputAriaLabel, opts.valueSelection);
        this.inQuickOpenKey.set(true);
        var widget = this.widget;
        if (widget.inputBox) {
            widget.inputBox.inputElement.tabIndex = 1;
            // Position the cursor at the end of the input unless a user has made a selection.
            if (widget.inputBox.inputElement.selectionStart === widget.inputBox.inputElement.selectionEnd) {
                widget.inputBox.inputElement.selectionStart = widget.inputBox.inputElement.value.length;
            }
        }
    };
    MonacoQuickOpenService.prototype.setValueSelected = function (value, selectLocation) {
        if (!value) {
            return;
        }
        var widget = this.widget;
        if (widget.inputBox) {
            if (!selectLocation) {
                widget.inputBox.inputElement.setSelectionRange(0, value.length);
                return;
            }
            if (selectLocation[0] === selectLocation[1]) {
                widget.inputBox.inputElement.setSelectionRange(selectLocation[0], selectLocation[0]);
                return;
            }
            widget.inputBox.inputElement.setSelectionRange(selectLocation[0], selectLocation[1]);
        }
    };
    MonacoQuickOpenService.prototype.setEnabled = function (isEnabled) {
        var widget = this.widget;
        if (widget.inputBox) {
            widget.inputBox.inputElement.readOnly = (isEnabled !== undefined) ? !isEnabled : false;
        }
    };
    MonacoQuickOpenService.prototype.setValue = function (value) {
        if (this.widget && this.widget.inputBox) {
            this.widget.inputBox.inputElement.value = (value !== undefined) ? value : '';
        }
    };
    MonacoQuickOpenService.prototype.setPlaceHolder = function (placeHolder) {
        var widget = this.widget;
        if (widget.inputBox) {
            widget.inputBox.setPlaceHolder(placeHolder);
        }
    };
    MonacoQuickOpenService.prototype.setPassword = function (isPassword) {
        var widget = this.widget;
        if (widget.inputBox) {
            widget.inputBox.inputElement.type = isPassword ? 'password' : 'text';
        }
    };
    MonacoQuickOpenService.prototype.showInputDecoration = function (decoration) {
        var widget = this.widget;
        if (widget.inputBox) {
            var type = decoration === monaco.MarkerSeverity.Info ? 1 :
                decoration === monaco.MarkerSeverity.Warning ? 2 : 3;
            widget.inputBox.showMessage({ type: type, content: '' });
        }
    };
    MonacoQuickOpenService.prototype.clearInputDecoration = function () {
        var widget = this.widget;
        if (widget.inputBox) {
            widget.inputBox.hideMessage();
        }
    };
    Object.defineProperty(MonacoQuickOpenService.prototype, "widget", {
        get: function () {
            var _this = this;
            if (this._widget) {
                return this._widget;
            }
            var widget = this._widget = new monaco.quickOpen.QuickOpenWidget(this.container, {
                onOk: function () {
                    _this.previousActiveElement = undefined;
                    _this.contextKeyService.activeContext = undefined;
                    _this.onClose(false);
                },
                onCancel: function () {
                    if (_this.previousActiveElement instanceof HTMLElement) {
                        _this.previousActiveElement.focus({ preventScroll: true });
                    }
                    _this.previousActiveElement = undefined;
                    _this.contextKeyService.activeContext = undefined;
                    _this.onClose(true);
                },
                onType: function (lookFor) { return _this.onType(lookFor || ''); },
                onFocusLost: function () {
                    if (_this.opts && _this.opts.ignoreFocusOut !== undefined) {
                        if (_this.opts.ignoreFocusOut === false) {
                            _this.onClose(true);
                        }
                        return _this.opts.ignoreFocusOut;
                    }
                    else {
                        return false;
                    }
                }
            }, {});
            this.attachQuickOpenStyler();
            this._widgetNode = widget.create();
            widget.tree.onDidChangeFocus(function () { return _this.onDidChangeActiveEmitter.fire(_this.getActive()); });
            return widget;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenService.prototype, "widgetNode", {
        get: function () {
            return this._widgetNode;
        },
        enumerable: false,
        configurable: true
    });
    MonacoQuickOpenService.prototype.getActive = function () {
        if (this._widget && this._widget.isVisible()) {
            var focus_1 = this._widget.tree.getFocus();
            if (focus_1 instanceof QuickOpenEntry) {
                return [focus_1.item];
            }
        }
        return [];
    };
    MonacoQuickOpenService.prototype.attachQuickOpenStyler = function () {
        var _this = this;
        if (!this._widget) {
            return;
        }
        var themeService = monaco.services.StaticServices.standaloneThemeService.get();
        var detach = monaco.theme.attachQuickOpenStyler(this._widget, themeService);
        var dispose = themeService.onThemeChange(function () {
            detach.dispose();
            _this.attachQuickOpenStyler();
            dispose.dispose();
        });
    };
    MonacoQuickOpenService.prototype.onClose = function (cancelled) {
        if (this.opts && this.opts.onClose) {
            this.opts.onClose(cancelled);
        }
        this.inQuickOpenKey.set(false);
    };
    MonacoQuickOpenService.prototype.onType = function (lookFor) {
        return __awaiter(this, void 0, void 0, function () {
            var opts, m;
            var _this = this;
            return __generator(this, function (_a) {
                opts = this.opts;
                if (this.widget && opts) {
                    if (opts.onType) {
                        opts.onType(lookFor, function (model) {
                            return _this.widget.setInput(model, opts.getAutoFocus(lookFor), opts.inputAriaLabel);
                        });
                    }
                    else {
                        m = opts.getModel(lookFor);
                        this.widget.setInput(m, opts.getAutoFocus(lookFor), opts.inputAriaLabel);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_1.inject(monaco_context_key_service_1.MonacoContextKeyService),
        __metadata("design:type", monaco_context_key_service_1.MonacoContextKeyService)
    ], MonacoQuickOpenService.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.inject(browser_1.KeybindingRegistry),
        __metadata("design:type", browser_1.KeybindingRegistry)
    ], MonacoQuickOpenService.prototype, "keybindingRegistry", void 0);
    __decorate([
        inversify_1.inject(browser_menu_plugin_1.BrowserMenuBarContribution),
        inversify_1.optional(),
        __metadata("design:type", browser_menu_plugin_1.BrowserMenuBarContribution)
    ], MonacoQuickOpenService.prototype, "browserMenuBarContribution", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MonacoQuickOpenService.prototype, "init", null);
    MonacoQuickOpenService = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], MonacoQuickOpenService);
    return MonacoQuickOpenService;
}(browser_1.QuickOpenService));
exports.MonacoQuickOpenService = MonacoQuickOpenService;
var MonacoQuickOpenControllerOptsImpl = /** @class */ (function () {
    function MonacoQuickOpenControllerOptsImpl(model, keybindingService, options) {
        this.model = model;
        this.keybindingService = keybindingService;
        this.model = model;
        this.options = browser_1.QuickOpenOptions.resolve(options);
        this.password = this.options.password;
    }
    Object.defineProperty(MonacoQuickOpenControllerOptsImpl.prototype, "enabled", {
        get: function () {
            return this.options.enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenControllerOptsImpl.prototype, "prefix", {
        get: function () {
            return this.options.prefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenControllerOptsImpl.prototype, "ignoreFocusOut", {
        get: function () {
            return this.options.ignoreFocusOut;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenControllerOptsImpl.prototype, "inputAriaLabel", {
        get: function () {
            return this.options.placeholder || '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenControllerOptsImpl.prototype, "valueSelection", {
        get: function () {
            return this.options.valueSelection || [-1, -1];
        },
        enumerable: false,
        configurable: true
    });
    MonacoQuickOpenControllerOptsImpl.prototype.onClose = function (cancelled) {
        this.options.onClose(cancelled);
    };
    MonacoQuickOpenControllerOptsImpl.prototype.toOpenModel = function (lookFor, items, actionProvider) {
        var e_1, _a;
        var entries = [];
        try {
            for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var item = items_1_1.value;
                var entry = this.createEntry(item, lookFor);
                if (entry) {
                    entries.push(entry);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (this.options.fuzzySort) {
            entries.sort(function (a, b) { return monaco.quickOpen.compareEntries(a, b, lookFor); });
        }
        return new monaco.quickOpen.QuickOpenModel(entries, actionProvider ? new MonacoQuickOpenActionProvider(actionProvider) : undefined);
    };
    MonacoQuickOpenControllerOptsImpl.prototype.getModel = function (lookFor) {
        throw new Error('getModel not supported!');
    };
    MonacoQuickOpenControllerOptsImpl.prototype.onType = function (lookFor, acceptor) {
        var _this = this;
        this.model.onType(lookFor, function (items, actionProvider) {
            var result = _this.toOpenModel(lookFor, items, actionProvider);
            acceptor(result);
        });
    };
    MonacoQuickOpenControllerOptsImpl.prototype.createEntry = function (item, lookFor) {
        if (this.options.skipPrefix) {
            lookFor = lookFor.substr(this.options.skipPrefix);
        }
        if (this.options.trimInput) {
            lookFor = lookFor.trim();
        }
        var _a = this.options, fuzzyMatchLabel = _a.fuzzyMatchLabel, fuzzyMatchDescription = _a.fuzzyMatchDescription, fuzzyMatchDetail = _a.fuzzyMatchDetail;
        var labelHighlights = fuzzyMatchLabel ? this.matchesFuzzy(lookFor, item.getLabel(), fuzzyMatchLabel) : item.getLabelHighlights();
        var descriptionHighlights = fuzzyMatchDescription ? this.matchesFuzzy(lookFor, item.getDescription(), fuzzyMatchDescription) : item.getDescriptionHighlights();
        var detailHighlights = fuzzyMatchDetail ? this.matchesFuzzy(lookFor, item.getDetail(), fuzzyMatchDetail) : item.getDetailHighlights();
        if ((lookFor && !labelHighlights && !descriptionHighlights && !detailHighlights)
            && !this.options.showItemsWithoutHighlight) {
            return undefined;
        }
        var entry = item instanceof browser_1.QuickOpenGroupItem
            ? new QuickOpenEntryGroup(item, this.keybindingService)
            : new QuickOpenEntry(item, this.keybindingService);
        entry.setHighlights(labelHighlights || [], descriptionHighlights, detailHighlights);
        return entry;
    };
    MonacoQuickOpenControllerOptsImpl.prototype.matchesFuzzy = function (lookFor, value, options) {
        if (!lookFor || !value) {
            return undefined;
        }
        var enableSeparateSubstringMatching = typeof options === 'object' && options.enableSeparateSubstringMatching;
        return monaco.filters.matchesFuzzy(lookFor, value, enableSeparateSubstringMatching);
    };
    MonacoQuickOpenControllerOptsImpl.prototype.getAutoFocus = function (lookFor) {
        if (this.options.selectIndex) {
            var idx = this.options.selectIndex(lookFor);
            if (idx >= 0) {
                return {
                    autoFocusIndex: idx
                };
            }
        }
        return {
            autoFocusFirstEntry: true,
            autoFocusPrefixMatch: lookFor
        };
    };
    return MonacoQuickOpenControllerOptsImpl;
}());
exports.MonacoQuickOpenControllerOptsImpl = MonacoQuickOpenControllerOptsImpl;
var QuickOpenEntry = /** @class */ (function (_super) {
    __extends(QuickOpenEntry, _super);
    function QuickOpenEntry(item, keybindingService) {
        var _this = _super.call(this) || this;
        _this.item = item;
        _this.keybindingService = keybindingService;
        return _this;
    }
    QuickOpenEntry.prototype.getLabel = function () {
        return this.item.getLabel();
    };
    QuickOpenEntry.prototype.getAriaLabel = function () {
        return this.item.getTooltip() || '';
    };
    QuickOpenEntry.prototype.getDetail = function () {
        return this.item.getDetail();
    };
    QuickOpenEntry.prototype.getDescription = function () {
        return this.item.getDescription();
    };
    QuickOpenEntry.prototype.isHidden = function () {
        return _super.prototype.isHidden.call(this) || this.item.isHidden();
    };
    QuickOpenEntry.prototype.getResource = function () {
        var uri = this.item.getUri();
        return uri ? monaco.Uri.parse(uri.toString()) : undefined;
    };
    QuickOpenEntry.prototype.getIcon = function () {
        return this.item.getIconClass();
    };
    QuickOpenEntry.prototype.getKeybinding = function () {
        var keybinding = this.item.getKeybinding();
        if (!keybinding) {
            return undefined;
        }
        var keySequence;
        try {
            keySequence = this.keybindingService.resolveKeybinding(keybinding);
        }
        catch (error) {
            return undefined;
        }
        return new monaco_resolved_keybinding_1.MonacoResolvedKeybinding(keySequence, this.keybindingService);
    };
    QuickOpenEntry.prototype.run = function (mode) {
        if (mode === 1) {
            return this.item.run(browser_1.QuickOpenMode.OPEN);
        }
        if (mode === 2) {
            return this.item.run(browser_1.QuickOpenMode.OPEN_IN_BACKGROUND);
        }
        if (mode === 0) {
            return this.item.run(browser_1.QuickOpenMode.PREVIEW);
        }
        return false;
    };
    return QuickOpenEntry;
}(monaco.quickOpen.QuickOpenEntry));
exports.QuickOpenEntry = QuickOpenEntry;
var QuickOpenEntryGroup = /** @class */ (function (_super) {
    __extends(QuickOpenEntryGroup, _super);
    function QuickOpenEntryGroup(item, keybindingService) {
        var _this = _super.call(this, new QuickOpenEntry(item, keybindingService)) || this;
        _this.item = item;
        _this.keybindingService = keybindingService;
        return _this;
    }
    QuickOpenEntryGroup.prototype.getGroupLabel = function () {
        return this.item.getGroupLabel() || '';
    };
    QuickOpenEntryGroup.prototype.showBorder = function () {
        return this.item.showBorder();
    };
    QuickOpenEntryGroup.prototype.getKeybinding = function () {
        var entry = this.getEntry();
        return entry ? entry.getKeybinding() : _super.prototype.getKeybinding.call(this);
    };
    return QuickOpenEntryGroup;
}(monaco.quickOpen.QuickOpenEntryGroup));
exports.QuickOpenEntryGroup = QuickOpenEntryGroup;
var MonacoQuickOpenAction = /** @class */ (function () {
    function MonacoQuickOpenAction(action) {
        this.action = action;
    }
    Object.defineProperty(MonacoQuickOpenAction.prototype, "id", {
        get: function () {
            return this.action.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenAction.prototype, "label", {
        get: function () {
            return this.action.label || '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenAction.prototype, "tooltip", {
        get: function () {
            return this.action.tooltip || '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenAction.prototype, "class", {
        get: function () {
            return this.action.class;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenAction.prototype, "enabled", {
        get: function () {
            return this.action.enabled || true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonacoQuickOpenAction.prototype, "checked", {
        get: function () {
            return this.action.checked || false;
        },
        enumerable: false,
        configurable: true
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MonacoQuickOpenAction.prototype.run = function (entry) {
        return this.action.run(entry.item);
    };
    MonacoQuickOpenAction.prototype.dispose = function () {
        this.action.dispose();
    };
    return MonacoQuickOpenAction;
}());
exports.MonacoQuickOpenAction = MonacoQuickOpenAction;
var MonacoQuickOpenActionProvider = /** @class */ (function () {
    function MonacoQuickOpenActionProvider(provider) {
        this.provider = provider;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MonacoQuickOpenActionProvider.prototype.hasActions = function (element, entry) {
        return this.provider.hasActions(entry.item);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MonacoQuickOpenActionProvider.prototype.getActions = function (element, entry) {
        var actions = this.provider.getActions(entry.item);
        return actions.map(function (action) { return new MonacoQuickOpenAction(action); });
    };
    return MonacoQuickOpenActionProvider;
}());
exports.MonacoQuickOpenActionProvider = MonacoQuickOpenActionProvider;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-resolved-keybinding.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-resolved-keybinding.js ***!
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
exports.MonacoResolvedKeybinding = void 0;
var keys_1 = __webpack_require__(/*! @theia/core/lib/browser/keys */ "./node_modules/@theia/core/lib/browser/keys.js");
var os_1 = __webpack_require__(/*! @theia/core/lib/common/os */ "./node_modules/@theia/core/lib/common/os.js");
var monaco_keycode_map_1 = __webpack_require__(/*! ./monaco-keycode-map */ "./node_modules/@theia/monaco/lib/browser/monaco-keycode-map.js");
var MonacoResolvedKeybinding = /** @class */ (function (_super) {
    __extends(MonacoResolvedKeybinding, _super);
    function MonacoResolvedKeybinding(keySequence, keybindingService) {
        var _this = _super.call(this) || this;
        _this.keySequence = keySequence;
        _this.parts = keySequence.map(function (keyCode) {
            // eslint-disable-next-line no-null/no-null
            var keyLabel = keyCode.key ? keybindingService.acceleratorForKey(keyCode.key) : null;
            var keyAriaLabel = keyLabel;
            return new monaco.keybindings.ResolvedKeybindingPart(keyCode.ctrl, keyCode.shift, keyCode.alt, keyCode.meta, keyLabel, keyAriaLabel);
        });
        return _this;
    }
    MonacoResolvedKeybinding.prototype.getLabel = function () {
        return monaco.keybindings.UILabelProvider.toLabel(monaco.platform.OS, this.parts, function (p) { return p.keyLabel; });
    };
    MonacoResolvedKeybinding.prototype.getAriaLabel = function () {
        return monaco.keybindings.UILabelProvider.toLabel(monaco.platform.OS, this.parts, function (p) { return p.keyAriaLabel; });
    };
    MonacoResolvedKeybinding.prototype.getElectronAccelerator = function () {
        if (this.isChord()) {
            // Electron cannot handle chords
            // eslint-disable-next-line no-null/no-null
            return null;
        }
        return monaco.keybindings.ElectronAcceleratorLabelProvider.toLabel(monaco.platform.OS, this.parts, function (p) { return p.keyLabel; });
    };
    MonacoResolvedKeybinding.prototype.getUserSettingsLabel = function () {
        return monaco.keybindings.UserSettingsLabelProvider.toLabel(monaco.platform.OS, this.parts, function (p) { return p.keyLabel; });
    };
    MonacoResolvedKeybinding.prototype.isWYSIWYG = function () {
        return true;
    };
    MonacoResolvedKeybinding.prototype.isChord = function () {
        return this.parts.length > 1;
    };
    MonacoResolvedKeybinding.prototype.getDispatchParts = function () {
        var _this = this;
        return this.keySequence.map(function (keyCode) { return monaco.keybindings.USLayoutResolvedKeybinding.getDispatchStr(_this.toKeybinding(keyCode)); });
    };
    MonacoResolvedKeybinding.prototype.toKeybinding = function (keyCode) {
        return new monaco.keybindings.SimpleKeybinding(keyCode.ctrl, keyCode.shift, keyCode.alt, keyCode.meta, monaco_keycode_map_1.KEY_CODE_MAP[keyCode.key.keyCode]);
    };
    MonacoResolvedKeybinding.prototype.getParts = function () {
        return this.parts;
    };
    MonacoResolvedKeybinding.toKeybinding = function (keybinding) {
        return keybinding instanceof monaco.keybindings.SimpleKeybinding
            ? this.keyCode(keybinding).toString()
            : this.keySequence(keybinding).join(' ');
    };
    MonacoResolvedKeybinding.keyCode = function (keybinding) {
        var keyCode = keybinding.keyCode;
        var sequence = {
            first: keys_1.Key.getKey(this.monaco2BrowserKeyCode(keyCode & 0xff)),
            modifiers: []
        };
        if (keybinding.ctrlKey) {
            if (os_1.isOSX) {
                sequence.modifiers.push(keys_1.KeyModifier.MacCtrl);
            }
            else {
                sequence.modifiers.push(keys_1.KeyModifier.CtrlCmd);
            }
        }
        if (keybinding.shiftKey) {
            sequence.modifiers.push(keys_1.KeyModifier.Shift);
        }
        if (keybinding.altKey) {
            sequence.modifiers.push(keys_1.KeyModifier.Alt);
        }
        if (keybinding.metaKey && sequence.modifiers.indexOf(keys_1.KeyModifier.CtrlCmd) === -1) {
            sequence.modifiers.push(keys_1.KeyModifier.CtrlCmd);
        }
        return keys_1.KeyCode.createKeyCode(sequence);
    };
    MonacoResolvedKeybinding.keySequence = function (keybinding) {
        var _this = this;
        return keybinding.parts.map(function (part) { return _this.keyCode(part); });
    };
    MonacoResolvedKeybinding.monaco2BrowserKeyCode = function (keyCode) {
        for (var i = 0; i < monaco_keycode_map_1.KEY_CODE_MAP.length; i++) {
            if (monaco_keycode_map_1.KEY_CODE_MAP[i] === keyCode) {
                return i;
            }
        }
        return -1;
    };
    return MonacoResolvedKeybinding;
}(monaco.keybindings.ResolvedKeybinding));
exports.MonacoResolvedKeybinding = MonacoResolvedKeybinding;


/***/ })

}]);
//# sourceMappingURL=18.bundle.js.map