(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/@theia/console/lib/browser/console-content-widget.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@theia/console/lib/browser/console-content-widget.js ***!
  \***************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleContentWidget = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var source_tree_1 = __webpack_require__(/*! @theia/core/lib/browser/source-tree */ "./node_modules/@theia/core/lib/browser/source-tree/index.js");
var source_tree_2 = __webpack_require__(/*! @theia/core/lib/browser/source-tree */ "./node_modules/@theia/core/lib/browser/source-tree/index.js");
var console_session_1 = __webpack_require__(/*! ./console-session */ "./node_modules/@theia/console/lib/browser/console-session.js");
var severity_1 = __webpack_require__(/*! @theia/core/lib/common/severity */ "./node_modules/@theia/core/lib/common/severity.js");
var ConsoleContentWidget = /** @class */ (function (_super) {
    __extends(ConsoleContentWidget, _super);
    function ConsoleContentWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._shouldScrollToEnd = true;
        return _this;
    }
    ConsoleContentWidget_1 = ConsoleContentWidget;
    Object.defineProperty(ConsoleContentWidget.prototype, "shouldScrollToEnd", {
        get: function () {
            return this._shouldScrollToEnd;
        },
        set: function (shouldScrollToEnd) {
            this._shouldScrollToEnd = shouldScrollToEnd;
            this.shouldScrollToRow = this._shouldScrollToEnd;
        },
        enumerable: false,
        configurable: true
    });
    ConsoleContentWidget.createContainer = function (parent, props) {
        var child = source_tree_2.SourceTreeWidget.createContainer(parent, __assign({ contextMenuPath: ConsoleContentWidget_1.CONTEXT_MENU }, props));
        child.unbind(source_tree_2.SourceTreeWidget);
        child.bind(ConsoleContentWidget_1).toSelf();
        return child;
    };
    ConsoleContentWidget.prototype.onAfterAttach = function (msg) {
        var _this = this;
        _super.prototype.onAfterAttach.call(this, msg);
        this.toDisposeOnDetach.push(this.onScrollUp(function () { return _this.shouldScrollToEnd = false; }));
        this.toDisposeOnDetach.push(this.onScrollYReachEnd(function () { return _this.shouldScrollToEnd = true; }));
        this.toDisposeOnDetach.push(this.model.onChanged(function () { return _this.revealLastOutputIfNeeded(); }));
    };
    ConsoleContentWidget.prototype.revealLastOutputIfNeeded = function () {
        var root = this.model.root;
        if (this.shouldScrollToEnd && source_tree_1.TreeSourceNode.is(root)) {
            this.model.selectNode(root.children[root.children.length - 1]);
        }
    };
    ConsoleContentWidget.prototype.createTreeElementNodeClassNames = function (node) {
        var classNames = _super.prototype.createTreeElementNodeClassNames.call(this, node);
        if (node.element) {
            var className = this.toClassName(node.element);
            if (className) {
                classNames.push(className);
            }
        }
        return classNames;
    };
    ConsoleContentWidget.prototype.toClassName = function (item) {
        if (item.severity === severity_1.Severity.Error) {
            return console_session_1.ConsoleItem.errorClassName;
        }
        if (item.severity === severity_1.Severity.Warning) {
            return console_session_1.ConsoleItem.warningClassName;
        }
        if (item.severity === severity_1.Severity.Info) {
            return console_session_1.ConsoleItem.infoClassName;
        }
        if (item.severity === severity_1.Severity.Log) {
            return console_session_1.ConsoleItem.logClassName;
        }
        return undefined;
    };
    var ConsoleContentWidget_1;
    ConsoleContentWidget.CONTEXT_MENU = ['console-context-menu'];
    ConsoleContentWidget = ConsoleContentWidget_1 = __decorate([
        inversify_1.injectable()
    ], ConsoleContentWidget);
    return ConsoleContentWidget;
}(source_tree_2.SourceTreeWidget));
exports.ConsoleContentWidget = ConsoleContentWidget;


/***/ }),

/***/ "./node_modules/@theia/console/lib/browser/console-history.js":
/*!********************************************************************!*\
  !*** ./node_modules/@theia/console/lib/browser/console-history.js ***!
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleHistory = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var ConsoleHistory = /** @class */ (function () {
    function ConsoleHistory() {
        this.values = [];
        this.index = -1;
    }
    ConsoleHistory_1 = ConsoleHistory;
    ConsoleHistory.prototype.push = function (value) {
        this.delete(value);
        this.values.push(value);
        this.trim();
        this.index = this.values.length;
    };
    ConsoleHistory.prototype.delete = function (value) {
        var index = this.values.indexOf(value);
        if (index !== -1) {
            this.values.splice(index, 1);
        }
    };
    ConsoleHistory.prototype.trim = function () {
        var index = this.values.length - ConsoleHistory_1.limit;
        if (index > 0) {
            this.values.slice(index);
        }
    };
    Object.defineProperty(ConsoleHistory.prototype, "current", {
        get: function () {
            return this.values[this.index];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConsoleHistory.prototype, "previous", {
        get: function () {
            this.index = Math.max(this.index - 1, -1);
            return this.current;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConsoleHistory.prototype, "next", {
        get: function () {
            this.index = Math.min(this.index + 1, this.values.length);
            return this.current;
        },
        enumerable: false,
        configurable: true
    });
    ConsoleHistory.prototype.store = function () {
        var _a = this, values = _a.values, index = _a.index;
        return { values: values, index: index };
    };
    ConsoleHistory.prototype.restore = function (object) {
        this.values = object.values;
        this.index = object.index;
    };
    var ConsoleHistory_1;
    ConsoleHistory.limit = 50;
    ConsoleHistory = ConsoleHistory_1 = __decorate([
        inversify_1.injectable()
    ], ConsoleHistory);
    return ConsoleHistory;
}());
exports.ConsoleHistory = ConsoleHistory;


/***/ }),

/***/ "./node_modules/@theia/console/lib/browser/console-widget.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@theia/console/lib/browser/console-widget.js ***!
  \*******************************************************************/
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
exports.ConsoleWidget = exports.ConsoleOptions = void 0;
var domutils_1 = __webpack_require__(/*! @phosphor/domutils */ "./node_modules/@phosphor/domutils/lib/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var source_tree_1 = __webpack_require__(/*! @theia/core/lib/browser/source-tree */ "./node_modules/@theia/core/lib/browser/source-tree/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var monaco_editor_provider_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-editor-provider */ "./node_modules/@theia/monaco/lib/browser/monaco-editor-provider.js");
var lib_1 = __webpack_require__(/*! monaco-languageclient/lib */ "./node_modules/monaco-languageclient/lib/index.js");
var console_history_1 = __webpack_require__(/*! ./console-history */ "./node_modules/@theia/console/lib/browser/console-history.js");
var console_content_widget_1 = __webpack_require__(/*! ./console-content-widget */ "./node_modules/@theia/console/lib/browser/console-content-widget.js");
exports.ConsoleOptions = Symbol('ConsoleWidgetOptions');
var ConsoleWidget = /** @class */ (function (_super) {
    __extends(ConsoleWidget, _super);
    function ConsoleWidget() {
        var _this = _super.call(this) || this;
        _this.totalHeight = -1;
        _this.totalWidth = -1;
        _this.node.classList.add(ConsoleWidget_1.styles.node);
        return _this;
    }
    ConsoleWidget_1 = ConsoleWidget;
    ConsoleWidget.createContainer = function (parent, options) {
        var child = console_content_widget_1.ConsoleContentWidget.createContainer(parent);
        child.bind(console_history_1.ConsoleHistory).toSelf();
        child.bind(exports.ConsoleOptions).toConstantValue(options);
        child.bind(ConsoleWidget_1).toSelf();
        return child;
    };
    ConsoleWidget.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, title, inputFocusContextKey, _b, label, iconClass, caption, layout, inputWidget, input, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this.options, id = _a.id, title = _a.title, inputFocusContextKey = _a.inputFocusContextKey;
                        _b = Object.assign({}, title), label = _b.label, iconClass = _b.iconClass, caption = _b.caption;
                        this.id = id;
                        this.title.closable = true;
                        this.title.label = label || id;
                        if (iconClass) {
                            this.title.iconClass = iconClass;
                        }
                        this.title.caption = caption || label || id;
                        layout = this.layout = new browser_1.PanelLayout();
                        this.content.node.classList.add(ConsoleWidget_1.styles.content);
                        this.toDispose.push(this.content);
                        layout.addWidget(this.content);
                        inputWidget = new browser_1.Widget();
                        inputWidget.node.classList.add(ConsoleWidget_1.styles.input);
                        layout.addWidget(inputWidget);
                        _c = this;
                        return [4 /*yield*/, this.createInput(inputWidget.node)];
                    case 1:
                        input = _c._input = _d.sent();
                        this.toDispose.push(input);
                        this.toDispose.push(input.getControl().onDidLayoutChange(function () { return _this.resizeContent(); }));
                        // todo update font if fontInfo was changed only
                        // it's impossible at the moment, but will be fixed for next upgrade of monaco version
                        // see https://github.com/microsoft/vscode/commit/5084e8ca1935698c98c163e339ca664818786c6d
                        this.toDispose.push(input.getControl().onDidChangeConfiguration(function () { return _this.updateFont(); }));
                        this.updateFont();
                        if (inputFocusContextKey) {
                            this.toDispose.push(input.onFocusChanged(function () { return inputFocusContextKey.set(_this.hasInputFocus()); }));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ConsoleWidget.prototype.createInput = function (node) {
        return this.editorProvider.createInline(this.options.input.uri, node, this.options.input.options);
    };
    ConsoleWidget.prototype.updateFont = function () {
        var _a = this._input.getControl().getOption(monaco.editor.EditorOption.fontInfo), fontFamily = _a.fontFamily, fontSize = _a.fontSize, lineHeight = _a.lineHeight;
        this.content.node.style.fontFamily = fontFamily;
        this.content.node.style.fontSize = fontSize + 'px';
        this.content.node.style.lineHeight = lineHeight + 'px';
    };
    Object.defineProperty(ConsoleWidget.prototype, "session", {
        get: function () {
            return this._session;
        },
        set: function (session) {
            if (this._session === session) {
                return;
            }
            this._session = session;
            this.content.source = session;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConsoleWidget.prototype, "input", {
        get: function () {
            return this._input;
        },
        enumerable: false,
        configurable: true
    });
    ConsoleWidget.prototype.selectAll = function () {
        var selection = document.getSelection();
        if (selection) {
            selection.selectAllChildren(this.content.node);
        }
    };
    ConsoleWidget.prototype.collapseAll = function () {
        var root = this.content.model.root;
        if (browser_1.CompositeTreeNode.is(root)) {
            this.content.model.collapseAll(root);
        }
    };
    ConsoleWidget.prototype.clear = function () {
        if (this.session) {
            this.session.clear();
        }
    };
    ConsoleWidget.prototype.execute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var value, listener_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        value = this._input.getControl().getValue();
                        this._input.getControl().setValue('');
                        this.history.push(value);
                        if (!this.session) return [3 /*break*/, 2];
                        listener_1 = this.content.model.onNodeRefreshed(function () {
                            listener_1.dispose();
                            _this.revealLastOutput();
                        });
                        return [4 /*yield*/, this.session.execute(value)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ConsoleWidget.prototype.navigateBack = function () {
        var value = this.history.previous;
        if (value === undefined) {
            return;
        }
        var editor = this.input.getControl();
        editor.setValue(value);
        editor.setPosition({
            lineNumber: 1,
            column: 1
        });
    };
    ConsoleWidget.prototype.navigateForward = function () {
        var value = this.history.next || '';
        var editor = this.input.getControl();
        editor.setValue(value);
        var lineNumber = editor.getModel().getLineCount();
        var column = editor.getModel().getLineMaxColumn(lineNumber);
        editor.setPosition({ lineNumber: lineNumber, column: column });
    };
    ConsoleWidget.prototype.revealLastOutput = function () {
        var root = this.content.model.root;
        if (source_tree_1.TreeSourceNode.is(root)) {
            this.content.model.selectNode(root.children[root.children.length - 1]);
        }
    };
    ConsoleWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this._input.focus();
    };
    ConsoleWidget.prototype.onResize = function (msg) {
        _super.prototype.onResize.call(this, msg);
        this.totalWidth = msg.width;
        this.totalHeight = msg.height;
        this._input.resizeToFit();
        this.resizeContent();
    };
    ConsoleWidget.prototype.resizeContent = function () {
        this.totalHeight = this.totalHeight < 0 ? this.computeHeight() : this.totalHeight;
        var inputHeight = this._input.getControl().getLayoutInfo().height;
        var contentHeight = this.totalHeight - inputHeight;
        this.content.node.style.height = contentHeight + "px";
        browser_1.MessageLoop.sendMessage(this.content, new browser_1.Widget.ResizeMessage(this.totalWidth, contentHeight));
    };
    ConsoleWidget.prototype.computeHeight = function () {
        var verticalSum = domutils_1.ElementExt.boxSizing(this.node).verticalSum;
        return this.node.offsetHeight - verticalSum;
    };
    ConsoleWidget.prototype.storeState = function () {
        var history = this.history.store();
        var input = this.input.storeViewState();
        return {
            history: history,
            input: input
        };
    };
    ConsoleWidget.prototype.restoreState = function (oldState) {
        if ('history' in oldState) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.history.restore(oldState['history']);
        }
        this.input.getControl().setValue(this.history.current || '');
        if ('input' in oldState) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.input.restoreViewState(oldState['input']);
        }
    };
    ConsoleWidget.prototype.hasInputFocus = function () {
        return this._input && this._input.isFocused({ strict: true });
    };
    var ConsoleWidget_1;
    ConsoleWidget.styles = {
        node: 'theia-console-widget',
        content: 'theia-console-content',
        input: 'theia-console-input',
    };
    __decorate([
        inversify_1.inject(exports.ConsoleOptions),
        __metadata("design:type", Object)
    ], ConsoleWidget.prototype, "options", void 0);
    __decorate([
        inversify_1.inject(lib_1.MonacoToProtocolConverter),
        __metadata("design:type", lib_1.MonacoToProtocolConverter)
    ], ConsoleWidget.prototype, "m2p", void 0);
    __decorate([
        inversify_1.inject(lib_1.ProtocolToMonacoConverter),
        __metadata("design:type", lib_1.ProtocolToMonacoConverter)
    ], ConsoleWidget.prototype, "p2m", void 0);
    __decorate([
        inversify_1.inject(console_content_widget_1.ConsoleContentWidget),
        __metadata("design:type", console_content_widget_1.ConsoleContentWidget)
    ], ConsoleWidget.prototype, "content", void 0);
    __decorate([
        inversify_1.inject(console_history_1.ConsoleHistory),
        __metadata("design:type", console_history_1.ConsoleHistory)
    ], ConsoleWidget.prototype, "history", void 0);
    __decorate([
        inversify_1.inject(monaco_editor_provider_1.MonacoEditorProvider),
        __metadata("design:type", monaco_editor_provider_1.MonacoEditorProvider)
    ], ConsoleWidget.prototype, "editorProvider", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ConsoleWidget.prototype, "init", null);
    ConsoleWidget = ConsoleWidget_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], ConsoleWidget);
    return ConsoleWidget;
}(browser_1.BaseWidget));
exports.ConsoleWidget = ConsoleWidget;


/***/ })

}]);
//# sourceMappingURL=32.bundle.js.map