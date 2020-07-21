(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "./node_modules/@theia/output/lib/browser/output-editor-factory.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@theia/output/lib/browser/output-editor-factory.js ***!
  \*************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputEditorFactory = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var monaco_context_menu_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-context-menu */ "./node_modules/@theia/monaco/lib/browser/monaco-context-menu.js");
var monaco_editor_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-editor */ "./node_modules/@theia/monaco/lib/browser/monaco-editor.js");
var output_uri_1 = __webpack_require__(/*! ../common/output-uri */ "./node_modules/@theia/output/lib/common/output-uri.js");
var output_context_menu_1 = __webpack_require__(/*! ./output-context-menu */ "./node_modules/@theia/output/lib/browser/output-context-menu.js");
var OutputEditorFactory = /** @class */ (function () {
    function OutputEditorFactory() {
        this.scheme = output_uri_1.OutputUri.SCHEME;
    }
    OutputEditorFactory.prototype.create = function (model, defaultsOptions, defaultOverrides) {
        var uri = new uri_1.default(model.uri);
        var options = this.createOptions(model, defaultsOptions);
        var overrides = this.createOverrides(model, defaultOverrides);
        return new monaco_editor_1.MonacoEditor(uri, model, document.createElement('div'), this.services, options, overrides);
    };
    OutputEditorFactory.prototype.createOptions = function (model, defaultOptions) {
        return __assign(__assign({}, defaultOptions), { overviewRulerLanes: 3, lineNumbersMinChars: 3, fixedOverflowWidgets: true, wordWrap: 'off', lineNumbers: 'off', glyphMargin: false, lineDecorationsWidth: 20, rulers: [], folding: false, scrollBeyondLastLine: false, readOnly: true, renderLineHighlight: 'none', minimap: { enabled: false }, matchBrackets: 'never' });
    };
    OutputEditorFactory.prototype.createOverrides = function (model, defaultOverrides) {
        var contextMenuService = this.contextMenuService;
        return __assign(__assign({}, defaultOverrides), { contextMenuService: contextMenuService });
    };
    __decorate([
        inversify_1.inject(monaco_editor_1.MonacoEditorServices),
        __metadata("design:type", monaco_editor_1.MonacoEditorServices)
    ], OutputEditorFactory.prototype, "services", void 0);
    __decorate([
        inversify_1.inject(output_context_menu_1.OutputContextMenuService),
        __metadata("design:type", monaco_context_menu_1.MonacoContextMenuService)
    ], OutputEditorFactory.prototype, "contextMenuService", void 0);
    OutputEditorFactory = __decorate([
        inversify_1.injectable()
    ], OutputEditorFactory);
    return OutputEditorFactory;
}());
exports.OutputEditorFactory = OutputEditorFactory;


/***/ }),

/***/ "./node_modules/@theia/output/lib/browser/output-editor-model-factory.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@theia/output/lib/browser/output-editor-model-factory.js ***!
  \*******************************************************************************/
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
exports.OutputEditorModel = exports.OutputEditorModelFactory = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var monaco_languageclient_1 = __webpack_require__(/*! monaco-languageclient */ "./node_modules/monaco-languageclient/lib/index.js");
var monaco_editor_model_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-editor-model */ "./node_modules/@theia/monaco/lib/browser/monaco-editor-model.js");
var output_uri_1 = __webpack_require__(/*! ../common/output-uri */ "./node_modules/@theia/output/lib/common/output-uri.js");
var OutputEditorModelFactory = /** @class */ (function () {
    function OutputEditorModelFactory() {
        this.scheme = output_uri_1.OutputUri.SCHEME;
    }
    OutputEditorModelFactory.prototype.createModel = function (resource, options) {
        return new OutputEditorModel(resource, this.m2p, this.p2m, options);
    };
    __decorate([
        inversify_1.inject(monaco_languageclient_1.MonacoToProtocolConverter),
        __metadata("design:type", monaco_languageclient_1.MonacoToProtocolConverter)
    ], OutputEditorModelFactory.prototype, "m2p", void 0);
    __decorate([
        inversify_1.inject(monaco_languageclient_1.ProtocolToMonacoConverter),
        __metadata("design:type", monaco_languageclient_1.ProtocolToMonacoConverter)
    ], OutputEditorModelFactory.prototype, "p2m", void 0);
    OutputEditorModelFactory = __decorate([
        inversify_1.injectable()
    ], OutputEditorModelFactory);
    return OutputEditorModelFactory;
}());
exports.OutputEditorModelFactory = OutputEditorModelFactory;
var OutputEditorModel = /** @class */ (function (_super) {
    __extends(OutputEditorModel, _super);
    function OutputEditorModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OutputEditorModel.prototype, "readOnly", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    OutputEditorModel.prototype.setDirty = function (dirty) {
        // NOOP
    };
    return OutputEditorModel;
}(monaco_editor_model_1.MonacoEditorModel));
exports.OutputEditorModel = OutputEditorModel;


/***/ }),

/***/ "./node_modules/@theia/output/lib/browser/output-frontend-module.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@theia/output/lib/browser/output-frontend-module.js ***!
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
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var output_widget_1 = __webpack_require__(/*! ./output-widget */ "./node_modules/@theia/output/lib/browser/output-widget.js");
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "./node_modules/@theia/core/lib/common/command.js");
var tab_bar_toolbar_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-toolbar */ "./node_modules/@theia/core/lib/browser/shell/tab-bar-toolbar.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var output_channel_1 = __webpack_require__(/*! ../common/output-channel */ "./node_modules/@theia/output/lib/common/output-channel.js");
var output_preferences_1 = __webpack_require__(/*! ../common/output-preferences */ "./node_modules/@theia/output/lib/common/output-preferences.js");
var output_toolbar_contribution_1 = __webpack_require__(/*! ./output-toolbar-contribution */ "./node_modules/@theia/output/lib/browser/output-toolbar-contribution.js");
var output_contribution_1 = __webpack_require__(/*! ./output-contribution */ "./node_modules/@theia/output/lib/browser/output-contribution.js");
var monaco_editor_provider_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-editor-provider */ "./node_modules/@theia/monaco/lib/browser/monaco-editor-provider.js");
var output_context_menu_1 = __webpack_require__(/*! ./output-context-menu */ "./node_modules/@theia/output/lib/browser/output-context-menu.js");
var output_editor_factory_1 = __webpack_require__(/*! ./output-editor-factory */ "./node_modules/@theia/output/lib/browser/output-editor-factory.js");
var monaco_text_model_service_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-text-model-service */ "./node_modules/@theia/monaco/lib/browser/monaco-text-model-service.js");
var output_editor_model_factory_1 = __webpack_require__(/*! ./output-editor-model-factory */ "./node_modules/@theia/output/lib/browser/output-editor-model-factory.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(output_channel_1.OutputChannelManager).toSelf().inSingletonScope();
    bind(command_1.CommandContribution).toService(output_channel_1.OutputChannelManager);
    bind(common_1.ResourceResolver).toService(output_channel_1.OutputChannelManager);
    bind(monaco_editor_provider_1.MonacoEditorFactory).to(output_editor_factory_1.OutputEditorFactory).inSingletonScope();
    bind(monaco_text_model_service_1.MonacoEditorModelFactory).to(output_editor_model_factory_1.OutputEditorModelFactory).inSingletonScope();
    bind(output_context_menu_1.OutputContextMenuService).toSelf().inSingletonScope();
    output_preferences_1.bindOutputPreferences(bind);
    bind(output_widget_1.OutputWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (context) { return ({
        id: output_widget_1.OUTPUT_WIDGET_KIND,
        createWidget: function () { return context.container.get(output_widget_1.OutputWidget); }
    }); });
    browser_1.bindViewContribution(bind, output_contribution_1.OutputContribution);
    bind(browser_1.OpenHandler).to(output_contribution_1.OutputContribution).inSingletonScope();
    bind(output_toolbar_contribution_1.OutputToolbarContribution).toSelf().inSingletonScope();
    bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(output_toolbar_contribution_1.OutputToolbarContribution);
});


/***/ }),

/***/ "./node_modules/@theia/output/lib/browser/output-toolbar-contribution.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@theia/output/lib/browser/output-toolbar-contribution.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Arm and others.
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
exports.OutputToolbarContribution = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var output_widget_1 = __webpack_require__(/*! ./output-widget */ "./node_modules/@theia/output/lib/browser/output-widget.js");
var output_contribution_1 = __webpack_require__(/*! ./output-contribution */ "./node_modules/@theia/output/lib/browser/output-contribution.js");
var output_channel_1 = __webpack_require__(/*! ../common/output-channel */ "./node_modules/@theia/output/lib/common/output-channel.js");
var OutputToolbarContribution = /** @class */ (function () {
    function OutputToolbarContribution() {
        var _this = this;
        this.onOutputWidgetStateChangedEmitter = new event_1.Emitter();
        this.onOutputWidgetStateChanged = this.onOutputWidgetStateChangedEmitter.event;
        this.onChannelsChangedEmitter = new event_1.Emitter();
        this.onChannelsChanged = this.onChannelsChangedEmitter.event;
        this.NONE = '<no channels>';
        this.changeChannel = function (event) {
            var channelName = event.target.value;
            if (channelName !== _this.NONE) {
                _this.outputChannelManager.selectedChannel = _this.outputChannelManager.getChannel(channelName);
            }
        };
    }
    OutputToolbarContribution.prototype.init = function () {
        var _this = this;
        this.outputContribution.widget.then(function (widget) {
            widget.onStateChanged(function () { return _this.onOutputWidgetStateChangedEmitter.fire(); });
        });
        var fireChannelsChanged = function () { return _this.onChannelsChangedEmitter.fire(); };
        this.outputChannelManager.onSelectedChannelChanged(fireChannelsChanged);
        this.outputChannelManager.onChannelAdded(fireChannelsChanged);
        this.outputChannelManager.onChannelDeleted(fireChannelsChanged);
        this.outputChannelManager.onChannelWasShown(fireChannelsChanged);
        this.outputChannelManager.onChannelWasHidden(fireChannelsChanged);
    };
    OutputToolbarContribution.prototype.registerToolbarItems = function (toolbarRegistry) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                toolbarRegistry.registerItem({
                    id: 'channels',
                    render: function () { return _this.renderChannelSelector(); },
                    isVisible: function (widget) { return widget instanceof output_widget_1.OutputWidget; },
                    onDidChange: this.onChannelsChanged
                });
                toolbarRegistry.registerItem({
                    id: output_contribution_1.OutputCommands.CLEAR__WIDGET.id,
                    command: output_contribution_1.OutputCommands.CLEAR__WIDGET.id,
                    tooltip: 'Clear Output',
                    priority: 1,
                });
                toolbarRegistry.registerItem({
                    id: output_contribution_1.OutputCommands.LOCK__WIDGET.id,
                    command: output_contribution_1.OutputCommands.LOCK__WIDGET.id,
                    tooltip: 'Turn Auto Scrolling Off',
                    onDidChange: this.onOutputWidgetStateChanged,
                    priority: 2
                });
                toolbarRegistry.registerItem({
                    id: output_contribution_1.OutputCommands.UNLOCK__WIDGET.id,
                    command: output_contribution_1.OutputCommands.UNLOCK__WIDGET.id,
                    tooltip: 'Turn Auto Scrolling On',
                    onDidChange: this.onOutputWidgetStateChanged,
                    priority: 2
                });
                return [2 /*return*/];
            });
        });
    };
    OutputToolbarContribution.prototype.renderChannelSelector = function () {
        var channelOptionElements = [];
        this.outputChannelManager.getVisibleChannels().forEach(function (channel) {
            channelOptionElements.push(React.createElement("option", { value: channel.name, key: channel.name }, channel.name));
        });
        if (channelOptionElements.length === 0) {
            channelOptionElements.push(React.createElement("option", { key: this.NONE, value: this.NONE }, this.NONE));
        }
        return React.createElement("select", { className: 'theia-select', id: 'outputChannelList', key: 'outputChannelList', value: this.outputChannelManager.selectedChannel ? this.outputChannelManager.selectedChannel.name : this.NONE, onChange: this.changeChannel }, channelOptionElements);
    };
    __decorate([
        inversify_1.inject(output_channel_1.OutputChannelManager),
        __metadata("design:type", output_channel_1.OutputChannelManager)
    ], OutputToolbarContribution.prototype, "outputChannelManager", void 0);
    __decorate([
        inversify_1.inject(output_contribution_1.OutputContribution),
        __metadata("design:type", output_contribution_1.OutputContribution)
    ], OutputToolbarContribution.prototype, "outputContribution", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], OutputToolbarContribution.prototype, "init", null);
    OutputToolbarContribution = __decorate([
        inversify_1.injectable()
    ], OutputToolbarContribution);
    return OutputToolbarContribution;
}());
exports.OutputToolbarContribution = OutputToolbarContribution;


/***/ })

}]);
//# sourceMappingURL=64.bundle.js.map