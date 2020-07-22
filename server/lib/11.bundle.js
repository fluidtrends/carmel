(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/@theia/editor/lib/browser/editor-command.js":
/*!******************************************************************!*\
  !*** ./node_modules/@theia/editor/lib/browser/editor-command.js ***!
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
exports.EditorCommandContribution = exports.EditorCommands = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/languages/lib/browser */ "./node_modules/@theia/languages/lib/browser/index.js");
var editor_manager_1 = __webpack_require__(/*! ./editor-manager */ "./node_modules/@theia/editor/lib/browser/editor-manager.js");
var editor_preferences_1 = __webpack_require__(/*! ./editor-preferences */ "./node_modules/@theia/editor/lib/browser/editor-preferences.js");
var supported_encodings_1 = __webpack_require__(/*! ./supported-encodings */ "./node_modules/@theia/editor/lib/browser/supported-encodings.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var EditorCommands;
(function (EditorCommands) {
    var EDITOR_CATEGORY = 'Editor';
    /**
     * Show editor references
     */
    EditorCommands.SHOW_REFERENCES = {
        id: 'textEditor.commands.showReferences'
    };
    /**
     * Change indentation configuration (i.e., indent using tabs / spaces, and how many spaces per tab)
     */
    EditorCommands.CONFIG_INDENTATION = {
        id: 'textEditor.commands.configIndentation'
    };
    EditorCommands.CONFIG_EOL = {
        id: 'textEditor.commands.configEol',
        category: EDITOR_CATEGORY,
        label: 'Change End of Line Sequence'
    };
    EditorCommands.INDENT_USING_SPACES = {
        id: 'textEditor.commands.indentUsingSpaces',
        category: EDITOR_CATEGORY,
        label: 'Indent Using Spaces'
    };
    EditorCommands.INDENT_USING_TABS = {
        id: 'textEditor.commands.indentUsingTabs',
        category: EDITOR_CATEGORY,
        label: 'Indent Using Tabs'
    };
    EditorCommands.CHANGE_LANGUAGE = {
        id: 'textEditor.change.language',
        category: EDITOR_CATEGORY,
        label: 'Change Language Mode'
    };
    EditorCommands.CHANGE_ENCODING = {
        id: 'textEditor.change.encoding',
        category: EDITOR_CATEGORY,
        label: 'Change File Encoding'
    };
    /**
     * Command for going back to the last editor navigation location.
     */
    EditorCommands.GO_BACK = {
        id: 'textEditor.commands.go.back',
        category: EDITOR_CATEGORY,
        label: 'Go Back'
    };
    /**
     * Command for going to the forthcoming editor navigation location.
     */
    EditorCommands.GO_FORWARD = {
        id: 'textEditor.commands.go.forward',
        category: EDITOR_CATEGORY,
        label: 'Go Forward'
    };
    /**
     * Command that reveals the last text edit location, if any.
     */
    EditorCommands.GO_LAST_EDIT = {
        id: 'textEditor.commands.go.lastEdit',
        category: EDITOR_CATEGORY,
        label: 'Go to Last Edit Location'
    };
    /**
     * Command that clears the editor navigation history.
     */
    EditorCommands.CLEAR_EDITOR_HISTORY = {
        id: 'textEditor.commands.clear.history',
        category: EDITOR_CATEGORY,
        label: 'Clear Editor History'
    };
    /**
     * Command that displays all editors that are currently opened.
     */
    EditorCommands.SHOW_ALL_OPENED_EDITORS = {
        id: 'workbench.action.showAllEditors',
        category: 'View',
        label: 'Show All Opened Editors'
    };
    /**
     * Command that toggles the minimap.
     */
    EditorCommands.TOGGLE_MINIMAP = {
        id: 'editor.action.toggleMinimap',
        category: 'View',
        label: 'Toggle Minimap'
    };
    /**
     * Command that toggles the rendering of whitespace characters in the editor.
     */
    EditorCommands.TOGGLE_RENDER_WHITESPACE = {
        id: 'editor.action.toggleRenderWhitespace',
        category: 'View',
        label: 'Toggle Render Whitespace'
    };
    /**
     * Command that toggles the word wrap.
     */
    EditorCommands.TOGGLE_WORD_WRAP = {
        id: 'editor.action.toggleWordWrap',
        category: 'View',
        label: 'Toggle Word Wrap'
    };
})(EditorCommands = exports.EditorCommands || (exports.EditorCommands = {}));
var EditorCommandContribution = /** @class */ (function () {
    function EditorCommandContribution() {
    }
    EditorCommandContribution_1 = EditorCommandContribution;
    EditorCommandContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand(EditorCommands.SHOW_REFERENCES);
        registry.registerCommand(EditorCommands.CONFIG_INDENTATION);
        registry.registerCommand(EditorCommands.CONFIG_EOL);
        registry.registerCommand(EditorCommands.INDENT_USING_SPACES);
        registry.registerCommand(EditorCommands.INDENT_USING_TABS);
        registry.registerCommand(EditorCommands.CHANGE_LANGUAGE, {
            isEnabled: function () { return _this.canConfigureLanguage(); },
            isVisible: function () { return _this.canConfigureLanguage(); },
            execute: function () { return _this.configureLanguage(); }
        });
        registry.registerCommand(EditorCommands.CHANGE_ENCODING, {
            isEnabled: function () { return _this.canConfigureEncoding(); },
            isVisible: function () { return _this.canConfigureEncoding(); },
            execute: function () { return _this.configureEncoding(); }
        });
        registry.registerCommand(EditorCommands.GO_BACK);
        registry.registerCommand(EditorCommands.GO_FORWARD);
        registry.registerCommand(EditorCommands.GO_LAST_EDIT);
        registry.registerCommand(EditorCommands.CLEAR_EDITOR_HISTORY);
        registry.registerCommand(EditorCommands.TOGGLE_MINIMAP);
        registry.registerCommand(EditorCommands.TOGGLE_RENDER_WHITESPACE);
        registry.registerCommand(EditorCommands.TOGGLE_WORD_WRAP);
        registry.registerCommand(browser_1.CommonCommands.AUTO_SAVE, {
            isToggled: function () { return _this.isAutoSaveOn(); },
            execute: function () { return _this.toggleAutoSave(); }
        });
    };
    EditorCommandContribution.prototype.canConfigureLanguage = function () {
        var widget = this.editorManager.currentEditor;
        var editor = widget && widget.editor;
        return !!editor && !!this.languages.languages;
    };
    EditorCommandContribution.prototype.configureLanguage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var widget, editor, current, items, selected;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        widget = this.editorManager.currentEditor;
                        editor = widget && widget.editor;
                        if (!editor || !this.languages.languages) {
                            return [2 /*return*/];
                        }
                        current = editor.document.languageId;
                        items = __spread([
                            { label: 'Auto Detect', value: 'autoDetect' },
                            { type: 'separator', label: 'languages (identifier)' }
                        ], (this.languages.languages.map(function (language) { return _this.toQuickPickLanguage(language, current); })).sort(function (e, e2) { return e.label.localeCompare(e2.label); }));
                        return [4 /*yield*/, this.quickPick.show(items, {
                                placeholder: 'Select Language Mode'
                            })];
                    case 1:
                        selected = _a.sent();
                        if (selected === 'autoDetect') {
                            editor.detectLanguage();
                        }
                        else if (selected) {
                            editor.setLanguage(selected.id);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EditorCommandContribution.prototype.canConfigureEncoding = function () {
        var widget = this.editorManager.currentEditor;
        var editor = widget && widget.editor;
        return !!editor;
    };
    EditorCommandContribution.prototype.configureEncoding = function () {
        return __awaiter(this, void 0, void 0, function () {
            var widget, editor, reopenWithEncodingPick, saveWithEncodingPick, actionItems, action, isReopenWithEncoding, configuredEncoding, resource, guessedEncoding, _a, encodingItems, encoding;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        widget = this.editorManager.currentEditor;
                        editor = widget && widget.editor;
                        if (!editor) {
                            return [2 /*return*/];
                        }
                        reopenWithEncodingPick = { label: 'Reopen with Encoding', value: 'reopen' };
                        saveWithEncodingPick = { label: 'Save with Encoding', value: 'save' };
                        actionItems = [
                            reopenWithEncodingPick,
                            saveWithEncodingPick
                        ];
                        return [4 /*yield*/, this.quickPick.show(actionItems, {
                                placeholder: 'Select Action'
                            })];
                    case 1:
                        action = _b.sent();
                        if (!action) {
                            return [2 /*return*/];
                        }
                        isReopenWithEncoding = (action === reopenWithEncodingPick.value);
                        configuredEncoding = this.editorPreferences.get('files.encoding');
                        return [4 /*yield*/, this.resourceProvider(editor.uri)];
                    case 2:
                        resource = _b.sent();
                        if (!resource.guessEncoding) return [3 /*break*/, 4];
                        return [4 /*yield*/, resource.guessEncoding()];
                    case 3:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _a = undefined;
                        _b.label = 5;
                    case 5:
                        guessedEncoding = _a;
                        resource.dispose();
                        encodingItems = Object.keys(supported_encodings_1.SUPPORTED_ENCODINGS)
                            .sort(function (k1, k2) {
                            if (k1 === configuredEncoding) {
                                return -1;
                            }
                            else if (k2 === configuredEncoding) {
                                return 1;
                            }
                            return supported_encodings_1.SUPPORTED_ENCODINGS[k1].order - supported_encodings_1.SUPPORTED_ENCODINGS[k2].order;
                        })
                            .filter(function (k) {
                            if (k === guessedEncoding && guessedEncoding !== configuredEncoding) {
                                return false; // do not show encoding if it is the guessed encoding that does not match the configured
                            }
                            return !isReopenWithEncoding || !supported_encodings_1.SUPPORTED_ENCODINGS[k].encodeOnly; // hide those that can only be used for encoding if we are about to decode
                        })
                            .map(function (key) { return ({ label: supported_encodings_1.SUPPORTED_ENCODINGS[key].labelLong, value: { id: key, description: key } }); });
                        // Insert guessed encoding
                        if (guessedEncoding && configuredEncoding !== guessedEncoding && supported_encodings_1.SUPPORTED_ENCODINGS[guessedEncoding]) {
                            encodingItems.unshift({
                                label: "Guessed from content: " + supported_encodings_1.SUPPORTED_ENCODINGS[guessedEncoding].labelLong,
                                value: { id: guessedEncoding, description: guessedEncoding }
                            });
                        }
                        return [4 /*yield*/, this.quickPick.show(encodingItems, {
                                placeholder: isReopenWithEncoding ? 'Select File Encoding to Reopen File' : 'Select File Encoding to Save with'
                            })];
                    case 6:
                        encoding = _b.sent();
                        if (!encoding) {
                            return [2 /*return*/];
                        }
                        if (editor.document.dirty && isReopenWithEncoding) {
                            this.messageService.info('The file is dirty. Please save it first before reopening it with another encoding.');
                            return [2 /*return*/];
                        }
                        else {
                            editor.setEncoding(encoding.id, isReopenWithEncoding ? 1 /* Decode */ : 0 /* Encode */);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EditorCommandContribution.prototype.toQuickPickLanguage = function (value, current) {
        var languageUri = this.toLanguageUri(value);
        var icon = this.labelProvider.getIcon(languageUri);
        var iconClass = icon !== '' ? icon + ' file-icon' : undefined;
        return {
            value: value,
            label: value.name,
            description: "(" + value.id + ")" + (current === value.id ? ' - Configured Language' : ''),
            iconClass: iconClass
        };
    };
    EditorCommandContribution.prototype.toLanguageUri = function (language) {
        var extension = language.extensions.values().next();
        if (extension.value) {
            return new uri_1.default('file:///' + extension.value);
        }
        var filename = language.filenames.values().next();
        if (filename.value) {
            return new uri_1.default('file:///' + filename.value);
        }
        return new uri_1.default('file:///.txt');
    };
    EditorCommandContribution.prototype.isAutoSaveOn = function () {
        var autoSave = this.preferencesService.get(EditorCommandContribution_1.AUTOSAVE_PREFERENCE);
        return autoSave === 'on' || autoSave === undefined;
    };
    EditorCommandContribution.prototype.toggleAutoSave = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.preferencesService.set(EditorCommandContribution_1.AUTOSAVE_PREFERENCE, this.isAutoSaveOn() ? 'off' : 'on');
                return [2 /*return*/];
            });
        });
    };
    var EditorCommandContribution_1;
    EditorCommandContribution.AUTOSAVE_PREFERENCE = 'editor.autoSave';
    __decorate([
        inversify_1.inject(browser_1.PreferenceService),
        __metadata("design:type", Object)
    ], EditorCommandContribution.prototype, "preferencesService", void 0);
    __decorate([
        inversify_1.inject(editor_preferences_1.EditorPreferences),
        __metadata("design:type", Object)
    ], EditorCommandContribution.prototype, "editorPreferences", void 0);
    __decorate([
        inversify_1.inject(browser_1.QuickPickService),
        __metadata("design:type", Object)
    ], EditorCommandContribution.prototype, "quickPick", void 0);
    __decorate([
        inversify_1.inject(core_1.MessageService),
        __metadata("design:type", core_1.MessageService)
    ], EditorCommandContribution.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], EditorCommandContribution.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(browser_2.Languages),
        __metadata("design:type", Object)
    ], EditorCommandContribution.prototype, "languages", void 0);
    __decorate([
        inversify_1.inject(editor_manager_1.EditorManager),
        __metadata("design:type", editor_manager_1.EditorManager)
    ], EditorCommandContribution.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(core_1.ResourceProvider),
        __metadata("design:type", Function)
    ], EditorCommandContribution.prototype, "resourceProvider", void 0);
    EditorCommandContribution = EditorCommandContribution_1 = __decorate([
        inversify_1.injectable()
    ], EditorCommandContribution);
    return EditorCommandContribution;
}());
exports.EditorCommandContribution = EditorCommandContribution;


/***/ }),

/***/ "./node_modules/@theia/editor/lib/browser/editor-contribution.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@theia/editor/lib/browser/editor-contribution.js ***!
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
exports.EditorContribution = void 0;
var editor_manager_1 = __webpack_require__(/*! ./editor-manager */ "./node_modules/@theia/editor/lib/browser/editor-manager.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var status_bar_1 = __webpack_require__(/*! @theia/core/lib/browser/status-bar/status-bar */ "./node_modules/@theia/core/lib/browser/status-bar/status-bar.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/languages/lib/browser */ "./node_modules/@theia/languages/lib/browser/index.js");
var context_key_service_1 = __webpack_require__(/*! @theia/core/lib/browser/context-key-service */ "./node_modules/@theia/core/lib/browser/context-key-service.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var editor_command_1 = __webpack_require__(/*! ./editor-command */ "./node_modules/@theia/editor/lib/browser/editor-command.js");
var editor_quick_open_service_1 = __webpack_require__(/*! ./editor-quick-open-service */ "./node_modules/@theia/editor/lib/browser/editor-quick-open-service.js");
var supported_encodings_1 = __webpack_require__(/*! ./supported-encodings */ "./node_modules/@theia/editor/lib/browser/supported-encodings.js");
var EditorContribution = /** @class */ (function () {
    function EditorContribution() {
        this.toDisposeOnCurrentEditorChanged = new core_1.DisposableCollection();
    }
    EditorContribution.prototype.onStart = function () {
        var _this = this;
        this.initEditorContextKeys();
        this.updateStatusBar();
        this.editorManager.onCurrentEditorChanged(function () { return _this.updateStatusBar(); });
    };
    /** @deprecated since 0.5.0 - will be removed in farther releases */
    EditorContribution.prototype.initResourceContextKeys = function () {
    };
    /** @deprecated since 0.5.0 - will be removed in farther releases */
    EditorContribution.prototype.getLanguageId = function (uri) {
        var e_1, _a;
        var languages = this.languages.languages;
        if (uri && languages) {
            try {
                for (var languages_1 = __values(languages), languages_1_1 = languages_1.next(); !languages_1_1.done; languages_1_1 = languages_1.next()) {
                    var language = languages_1_1.value;
                    if (language.extensions.has(uri.path.ext)) {
                        return language.id;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (languages_1_1 && !languages_1_1.done && (_a = languages_1.return)) _a.call(languages_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return undefined;
    };
    EditorContribution.prototype.initEditorContextKeys = function () {
        var e_2, _a;
        var _this = this;
        var editorIsOpen = this.contextKeyService.createKey('editorIsOpen', false);
        var textCompareEditorVisible = this.contextKeyService.createKey('textCompareEditorVisible', false);
        var updateContextKeys = function () {
            var widgets = _this.editorManager.all;
            editorIsOpen.set(!!widgets.length);
            textCompareEditorVisible.set(widgets.some(function (widget) { return browser_1.DiffUris.isDiffUri(widget.editor.uri); }));
        };
        updateContextKeys();
        try {
            for (var _b = __values(this.editorManager.all), _c = _b.next(); !_c.done; _c = _b.next()) {
                var widget = _c.value;
                widget.disposed.connect(updateContextKeys);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.editorManager.onCreated(function (widget) {
            updateContextKeys();
            widget.disposed.connect(updateContextKeys);
        });
    };
    EditorContribution.prototype.updateStatusBar = function () {
        var _this = this;
        this.toDisposeOnCurrentEditorChanged.dispose();
        var widget = this.editorManager.currentEditor;
        var editor = widget && widget.editor;
        this.updateLanguageStatus(editor);
        this.updateEncodingStatus(editor);
        this.setCursorPositionStatus(editor);
        if (editor) {
            this.toDisposeOnCurrentEditorChanged.pushAll([
                editor.onLanguageChanged(function () { return _this.updateLanguageStatus(editor); }),
                editor.onEncodingChanged(function () { return _this.updateEncodingStatus(editor); }),
                editor.onCursorPositionChanged(function () { return _this.setCursorPositionStatus(editor); })
            ]);
        }
    };
    EditorContribution.prototype.updateLanguageStatus = function (editor) {
        if (!editor) {
            this.statusBar.removeElement('editor-status-language');
            return;
        }
        var language = this.languages.getLanguage && this.languages.getLanguage(editor.document.languageId);
        var languageName = language ? language.name : '';
        this.statusBar.setElement('editor-status-language', {
            text: languageName,
            alignment: status_bar_1.StatusBarAlignment.RIGHT,
            priority: 1,
            command: editor_command_1.EditorCommands.CHANGE_LANGUAGE.id,
            tooltip: 'Select Language Mode'
        });
    };
    EditorContribution.prototype.updateEncodingStatus = function (editor) {
        if (!editor) {
            this.statusBar.removeElement('editor-status-encoding');
            return;
        }
        this.statusBar.setElement('editor-status-encoding', {
            text: supported_encodings_1.SUPPORTED_ENCODINGS[editor.getEncoding()].labelShort,
            alignment: status_bar_1.StatusBarAlignment.RIGHT,
            priority: 10,
            command: editor_command_1.EditorCommands.CHANGE_ENCODING.id,
            tooltip: 'Select Encoding'
        });
    };
    EditorContribution.prototype.setCursorPositionStatus = function (editor) {
        if (!editor) {
            this.statusBar.removeElement('editor-status-cursor-position');
            return;
        }
        var cursor = editor.cursor;
        this.statusBar.setElement('editor-status-cursor-position', {
            text: "Ln " + (cursor.line + 1) + ", Col " + editor.getVisibleColumn(cursor),
            alignment: status_bar_1.StatusBarAlignment.RIGHT,
            priority: 100,
            tooltip: 'Go To Line',
            command: 'editor.action.gotoLine'
        });
    };
    EditorContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(editor_command_1.EditorCommands.SHOW_ALL_OPENED_EDITORS, {
            execute: function () { return _this.editorQuickOpenService.open(); }
        });
    };
    EditorContribution.prototype.registerKeybindings = function (keybindings) {
        keybindings.registerKeybinding({
            command: editor_command_1.EditorCommands.SHOW_ALL_OPENED_EDITORS.id,
            keybinding: 'ctrlcmd+k ctrlcmd+p'
        });
    };
    EditorContribution.prototype.registerQuickOpenHandlers = function (handlers) {
        handlers.registerHandler(this.editorQuickOpenService);
    };
    __decorate([
        inversify_1.inject(status_bar_1.StatusBar),
        __metadata("design:type", Object)
    ], EditorContribution.prototype, "statusBar", void 0);
    __decorate([
        inversify_1.inject(editor_manager_1.EditorManager),
        __metadata("design:type", editor_manager_1.EditorManager)
    ], EditorContribution.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(browser_2.Languages),
        __metadata("design:type", Object)
    ], EditorContribution.prototype, "languages", void 0);
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], EditorContribution.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.inject(editor_quick_open_service_1.EditorQuickOpenService),
        __metadata("design:type", editor_quick_open_service_1.EditorQuickOpenService)
    ], EditorContribution.prototype, "editorQuickOpenService", void 0);
    EditorContribution = __decorate([
        inversify_1.injectable()
    ], EditorContribution);
    return EditorContribution;
}());
exports.EditorContribution = EditorContribution;


/***/ }),

/***/ "./node_modules/@theia/editor/lib/browser/editor-frontend-module.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@theia/editor/lib/browser/editor-frontend-module.js ***!
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
__webpack_require__(/*! ../../src/browser/style/index.css */ "./node_modules/@theia/editor/src/browser/style/index.css");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/variable-resolver/lib/browser */ "./node_modules/@theia/variable-resolver/lib/browser/index.js");
var editor_manager_1 = __webpack_require__(/*! ./editor-manager */ "./node_modules/@theia/editor/lib/browser/editor-manager.js");
var editor_contribution_1 = __webpack_require__(/*! ./editor-contribution */ "./node_modules/@theia/editor/lib/browser/editor-contribution.js");
var editor_menu_1 = __webpack_require__(/*! ./editor-menu */ "./node_modules/@theia/editor/lib/browser/editor-menu.js");
var editor_command_1 = __webpack_require__(/*! ./editor-command */ "./node_modules/@theia/editor/lib/browser/editor-command.js");
var editor_keybinding_contexts_1 = __webpack_require__(/*! ./editor-keybinding-contexts */ "./node_modules/@theia/editor/lib/browser/editor-keybinding-contexts.js");
var editor_keybinding_1 = __webpack_require__(/*! ./editor-keybinding */ "./node_modules/@theia/editor/lib/browser/editor-keybinding.js");
var editor_preferences_1 = __webpack_require__(/*! ./editor-preferences */ "./node_modules/@theia/editor/lib/browser/editor-preferences.js");
var editor_widget_factory_1 = __webpack_require__(/*! ./editor-widget-factory */ "./node_modules/@theia/editor/lib/browser/editor-widget-factory.js");
var editor_navigation_contribution_1 = __webpack_require__(/*! ./editor-navigation-contribution */ "./node_modules/@theia/editor/lib/browser/editor-navigation-contribution.js");
var navigation_location_updater_1 = __webpack_require__(/*! ./navigation/navigation-location-updater */ "./node_modules/@theia/editor/lib/browser/navigation/navigation-location-updater.js");
var navigation_location_service_1 = __webpack_require__(/*! ./navigation/navigation-location-service */ "./node_modules/@theia/editor/lib/browser/navigation/navigation-location-service.js");
var navigation_location_similarity_1 = __webpack_require__(/*! ./navigation/navigation-location-similarity */ "./node_modules/@theia/editor/lib/browser/navigation/navigation-location-similarity.js");
var editor_variable_contribution_1 = __webpack_require__(/*! ./editor-variable-contribution */ "./node_modules/@theia/editor/lib/browser/editor-variable-contribution.js");
var semantic_highlighting_service_1 = __webpack_require__(/*! ./semantic-highlight/semantic-highlighting-service */ "./node_modules/@theia/editor/lib/browser/semantic-highlight/semantic-highlighting-service.js");
var editor_quick_open_service_1 = __webpack_require__(/*! ./editor-quick-open-service */ "./node_modules/@theia/editor/lib/browser/editor-quick-open-service.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    editor_preferences_1.bindEditorPreferences(bind);
    bind(editor_widget_factory_1.EditorWidgetFactory).toSelf().inSingletonScope();
    bind(browser_1.WidgetFactory).toService(editor_widget_factory_1.EditorWidgetFactory);
    bind(editor_manager_1.EditorManager).toSelf().inSingletonScope();
    bind(browser_1.OpenHandler).toService(editor_manager_1.EditorManager);
    bind(editor_command_1.EditorCommandContribution).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).toService(editor_command_1.EditorCommandContribution);
    bind(editor_menu_1.EditorMenuContribution).toSelf().inSingletonScope();
    bind(common_1.MenuContribution).toService(editor_menu_1.EditorMenuContribution);
    bind(editor_keybinding_contexts_1.StrictEditorTextFocusContext).toSelf().inSingletonScope();
    bind(browser_1.KeybindingContext).toService(editor_keybinding_contexts_1.StrictEditorTextFocusContext);
    bind(browser_1.KeybindingContext).to(editor_keybinding_contexts_1.EditorTextFocusContext).inSingletonScope();
    bind(browser_1.KeybindingContext).to(editor_keybinding_contexts_1.DiffEditorTextFocusContext).inSingletonScope();
    bind(editor_keybinding_1.EditorKeybindingContribution).toSelf().inSingletonScope();
    bind(browser_1.KeybindingContribution).toService(editor_keybinding_1.EditorKeybindingContribution);
    bind(editor_contribution_1.EditorContribution).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).toService(editor_contribution_1.EditorContribution);
    bind(editor_navigation_contribution_1.EditorNavigationContribution).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).toService(editor_navigation_contribution_1.EditorNavigationContribution);
    bind(navigation_location_service_1.NavigationLocationService).toSelf().inSingletonScope();
    bind(navigation_location_updater_1.NavigationLocationUpdater).toSelf().inSingletonScope();
    bind(navigation_location_similarity_1.NavigationLocationSimilarity).toSelf().inSingletonScope();
    bind(browser_2.VariableContribution).to(editor_variable_contribution_1.EditorVariableContribution).inSingletonScope();
    bind(semantic_highlighting_service_1.SemanticHighlightingService).toSelf().inSingletonScope();
    [common_1.CommandContribution, browser_1.KeybindingContribution, browser_1.QuickOpenContribution].forEach(function (serviceIdentifier) {
        bind(serviceIdentifier).toService(editor_contribution_1.EditorContribution);
    });
    bind(editor_quick_open_service_1.EditorQuickOpenService).toSelf().inSingletonScope();
    bind(editor_manager_1.CurrentEditorAccess).toSelf().inSingletonScope();
    bind(editor_manager_1.ActiveEditorAccess).toSelf().inSingletonScope();
    bind(editor_manager_1.EditorAccess).to(editor_manager_1.CurrentEditorAccess).inSingletonScope().whenTargetNamed(editor_manager_1.EditorAccess.CURRENT);
    bind(editor_manager_1.EditorAccess).to(editor_manager_1.ActiveEditorAccess).inSingletonScope().whenTargetNamed(editor_manager_1.EditorAccess.ACTIVE);
});


/***/ }),

/***/ "./node_modules/@theia/editor/lib/browser/editor-keybinding-contexts.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/editor/lib/browser/editor-keybinding-contexts.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrictEditorTextFocusContext = exports.DiffEditorTextFocusContext = exports.EditorTextFocusContext = exports.EditorKeybindingContexts = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var editor_manager_1 = __webpack_require__(/*! ./editor-manager */ "./node_modules/@theia/editor/lib/browser/editor-manager.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var EditorKeybindingContexts;
(function (EditorKeybindingContexts) {
    /**
     * ID of a keybinding context that is enabled when the active text editor has the focus.
     */
    EditorKeybindingContexts.editorTextFocus = 'editorTextFocus';
    /**
     * ID of a keybinding context that is enabled when the active diff editor has the focus.
     */
    EditorKeybindingContexts.diffEditorTextFocus = 'diffEditorTextFocus';
    /**
     * Unique identifier of a keybinding context that is enabled if the active editor has the focus but it does not have any overlaying widgets, such as the content assist widget.
     */
    EditorKeybindingContexts.strictEditorTextFocus = 'strictEditorTextFocus';
})(EditorKeybindingContexts = exports.EditorKeybindingContexts || (exports.EditorKeybindingContexts = {}));
var EditorTextFocusContext = /** @class */ (function () {
    function EditorTextFocusContext() {
        this.id = EditorKeybindingContexts.editorTextFocus;
    }
    EditorTextFocusContext.prototype.isEnabled = function () {
        return !!this.getEditor();
    };
    EditorTextFocusContext.prototype.getEditor = function () {
        var widget = this.editorManager.activeEditor;
        if (widget && this.canHandle(widget)) {
            return widget;
        }
        return undefined;
    };
    EditorTextFocusContext.prototype.canHandle = function (widget) {
        return widget.editor.isFocused();
    };
    __decorate([
        inversify_1.inject(editor_manager_1.EditorManager),
        __metadata("design:type", editor_manager_1.EditorManager)
    ], EditorTextFocusContext.prototype, "editorManager", void 0);
    EditorTextFocusContext = __decorate([
        inversify_1.injectable()
    ], EditorTextFocusContext);
    return EditorTextFocusContext;
}());
exports.EditorTextFocusContext = EditorTextFocusContext;
var DiffEditorTextFocusContext = /** @class */ (function (_super) {
    __extends(DiffEditorTextFocusContext, _super);
    function DiffEditorTextFocusContext() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = EditorKeybindingContexts.diffEditorTextFocus;
        return _this;
    }
    DiffEditorTextFocusContext.prototype.canHandle = function (widget) {
        return _super.prototype.canHandle.call(this, widget) && browser_1.DiffUris.isDiffUri(widget.editor.uri);
    };
    DiffEditorTextFocusContext = __decorate([
        inversify_1.injectable()
    ], DiffEditorTextFocusContext);
    return DiffEditorTextFocusContext;
}(EditorTextFocusContext));
exports.DiffEditorTextFocusContext = DiffEditorTextFocusContext;
/**
 * Keybinding context that is enabled when the active text editor has the focus **AND** it does not
 * have any widgets (for example, the content assist widget) overlaying the active editor.
 */
var StrictEditorTextFocusContext = /** @class */ (function (_super) {
    __extends(StrictEditorTextFocusContext, _super);
    function StrictEditorTextFocusContext() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = EditorKeybindingContexts.strictEditorTextFocus;
        return _this;
    }
    StrictEditorTextFocusContext = __decorate([
        inversify_1.injectable()
    ], StrictEditorTextFocusContext);
    return StrictEditorTextFocusContext;
}(EditorTextFocusContext));
exports.StrictEditorTextFocusContext = StrictEditorTextFocusContext;


/***/ }),

/***/ "./node_modules/@theia/editor/lib/browser/editor-keybinding.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@theia/editor/lib/browser/editor-keybinding.js ***!
  \*********************************************************************/
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
exports.EditorKeybindingContribution = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var os_1 = __webpack_require__(/*! @theia/core/lib/common/os */ "./node_modules/@theia/core/lib/common/os.js");
var editor_command_1 = __webpack_require__(/*! ./editor-command */ "./node_modules/@theia/editor/lib/browser/editor-command.js");
var EditorKeybindingContribution = /** @class */ (function () {
    function EditorKeybindingContribution() {
    }
    EditorKeybindingContribution.prototype.registerKeybindings = function (registry) {
        registry.registerKeybindings({
            command: editor_command_1.EditorCommands.GO_BACK.id,
            keybinding: os_1.isOSX ? 'ctrl+-' : os_1.isWindows ? 'alt+left' : /* isLinux */ 'ctrl+alt+-'
        }, {
            command: editor_command_1.EditorCommands.GO_FORWARD.id,
            keybinding: os_1.isOSX ? 'ctrl+shift+-' : os_1.isWindows ? 'alt+right' : /* isLinux */ 'ctrl+shift+-'
        }, {
            command: editor_command_1.EditorCommands.GO_LAST_EDIT.id,
            keybinding: 'ctrl+alt+q'
        }, {
            command: editor_command_1.EditorCommands.TOGGLE_WORD_WRAP.id,
            keybinding: 'alt+z'
        });
    };
    EditorKeybindingContribution = __decorate([
        inversify_1.injectable()
    ], EditorKeybindingContribution);
    return EditorKeybindingContribution;
}());
exports.EditorKeybindingContribution = EditorKeybindingContribution;


/***/ }),

/***/ "./node_modules/@theia/editor/lib/browser/editor-manager.js":
/*!******************************************************************!*\
  !*** ./node_modules/@theia/editor/lib/browser/editor-manager.js ***!
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
exports.ActiveEditorAccess = exports.CurrentEditorAccess = exports.EditorAccess = exports.EditorManager = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var editor_widget_1 = __webpack_require__(/*! ./editor-widget */ "./node_modules/@theia/editor/lib/browser/editor-widget.js");
var editor_1 = __webpack_require__(/*! ./editor */ "./node_modules/@theia/editor/lib/browser/editor.js");
var editor_widget_factory_1 = __webpack_require__(/*! ./editor-widget-factory */ "./node_modules/@theia/editor/lib/browser/editor-widget-factory.js");
var EditorManager = /** @class */ (function (_super) {
    __extends(EditorManager, _super);
    function EditorManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = editor_widget_factory_1.EditorWidgetFactory.ID;
        _this.label = 'Code Editor';
        _this.onActiveEditorChangedEmitter = new common_1.Emitter();
        /**
         * Emit when the active editor is changed.
         */
        _this.onActiveEditorChanged = _this.onActiveEditorChangedEmitter.event;
        _this.onCurrentEditorChangedEmitter = new common_1.Emitter();
        /**
         * Emit when the current editor is changed.
         */
        _this.onCurrentEditorChanged = _this.onCurrentEditorChangedEmitter.event;
        _this.recentlyVisibleIds = [];
        return _this;
    }
    EditorManager.prototype.init = function () {
        var e_1, _a;
        var _this = this;
        _super.prototype.init.call(this);
        this.shell.activeChanged.connect(function () { return _this.updateActiveEditor(); });
        this.shell.currentChanged.connect(function () { return _this.updateCurrentEditor(); });
        this.onCreated(function (widget) {
            widget.onDidChangeVisibility(function () {
                if (widget.isVisible) {
                    _this.addRecentlyVisible(widget);
                }
                else {
                    _this.removeRecentlyVisible(widget);
                }
                _this.updateCurrentEditor();
            });
            widget.disposed.connect(function () {
                _this.removeRecentlyVisible(widget);
                _this.updateCurrentEditor();
            });
        });
        try {
            for (var _b = __values(this.all), _c = _b.next(); !_c.done; _c = _b.next()) {
                var widget = _c.value;
                if (widget.isVisible) {
                    this.addRecentlyVisible(widget);
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
        this.updateCurrentEditor();
    };
    Object.defineProperty(EditorManager.prototype, "recentlyVisible", {
        get: function () {
            var id = this.recentlyVisibleIds[0];
            return id && this.all.find(function (w) { return w.id === id; }) || undefined;
        },
        enumerable: false,
        configurable: true
    });
    EditorManager.prototype.addRecentlyVisible = function (widget) {
        this.removeRecentlyVisible(widget);
        this.recentlyVisibleIds.unshift(widget.id);
    };
    EditorManager.prototype.removeRecentlyVisible = function (widget) {
        var index = this.recentlyVisibleIds.indexOf(widget.id);
        if (index !== -1) {
            this.recentlyVisibleIds.splice(index, 1);
        }
    };
    Object.defineProperty(EditorManager.prototype, "activeEditor", {
        /**
         * The active editor.
         * If there is an active editor (one that has focus), active and current are the same.
         */
        get: function () {
            return this._activeEditor;
        },
        enumerable: false,
        configurable: true
    });
    EditorManager.prototype.setActiveEditor = function (active) {
        if (this._activeEditor !== active) {
            this._activeEditor = active;
            this.onActiveEditorChangedEmitter.fire(this._activeEditor);
        }
    };
    EditorManager.prototype.updateActiveEditor = function () {
        var widget = this.shell.activeWidget;
        this.setActiveEditor(widget instanceof editor_widget_1.EditorWidget ? widget : undefined);
    };
    Object.defineProperty(EditorManager.prototype, "currentEditor", {
        /**
         * The most recently activated editor (which might not have the focus anymore, hence it is not active).
         * If no editor has focus, e.g. when a context menu is shown, the active editor is `undefined`, but current might be the editor that was active before the menu popped up.
         */
        get: function () {
            return this._currentEditor;
        },
        enumerable: false,
        configurable: true
    });
    EditorManager.prototype.setCurrentEditor = function (current) {
        if (this._currentEditor !== current) {
            this._currentEditor = current;
            this.onCurrentEditorChangedEmitter.fire(this._currentEditor);
        }
    };
    EditorManager.prototype.updateCurrentEditor = function () {
        var widget = this.shell.currentWidget;
        if (widget instanceof editor_widget_1.EditorWidget) {
            this.setCurrentEditor(widget);
        }
        else if (!this._currentEditor || !this._currentEditor.isVisible) {
            this.setCurrentEditor(this.recentlyVisible);
        }
    };
    EditorManager.prototype.canHandle = function (uri, options) {
        return 100;
    };
    EditorManager.prototype.open = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var editor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.open.call(this, uri, options)];
                    case 1:
                        editor = _a.sent();
                        this.revealSelection(editor, options, uri);
                        return [2 /*return*/, editor];
                }
            });
        });
    };
    EditorManager.prototype.revealSelection = function (widget, input, uri) {
        var inputSelection = input && input.selection;
        if (!inputSelection && uri) {
            var match = /^L?(\d+)(?:,(\d+))?/.exec(uri.fragment);
            if (match) {
                // support file:///some/file.js#73,84
                // support file:///some/file.js#L73
                inputSelection = {
                    start: {
                        line: parseInt(match[1]) - 1,
                        character: match[2] ? parseInt(match[2]) - 1 : 0
                    }
                };
            }
        }
        if (inputSelection) {
            var editor = widget.editor;
            var selection = this.getSelection(widget, inputSelection);
            if (editor_1.Position.is(selection)) {
                editor.cursor = selection;
                editor.revealPosition(selection);
            }
            else if (editor_1.Range.is(selection)) {
                editor.cursor = selection.end;
                editor.selection = selection;
                editor.revealRange(selection);
            }
        }
    };
    EditorManager.prototype.getSelection = function (widget, selection) {
        var start = selection.start, end = selection.end;
        var line = start && start.line !== undefined && start.line >= 0 ? start.line : undefined;
        if (line === undefined) {
            return undefined;
        }
        var character = start && start.character !== undefined && start.character >= 0 ? start.character : widget.editor.document.getLineMaxColumn(line);
        var endLine = end && end.line !== undefined && end.line >= 0 ? end.line : undefined;
        if (endLine === undefined) {
            return { line: line, character: character };
        }
        var endCharacter = end && end.character !== undefined && end.character >= 0 ? end.character : widget.editor.document.getLineMaxColumn(endLine);
        return {
            start: { line: line, character: character },
            end: { line: endLine, character: endCharacter }
        };
    };
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EditorManager.prototype, "init", null);
    EditorManager = __decorate([
        inversify_1.injectable()
    ], EditorManager);
    return EditorManager;
}(browser_1.NavigatableWidgetOpenHandler));
exports.EditorManager = EditorManager;
/**
 * Provides direct access to the underlying text editor.
 */
var EditorAccess = /** @class */ (function () {
    function EditorAccess() {
    }
    Object.defineProperty(EditorAccess.prototype, "uri", {
        /**
         * The URI of the underlying document from the editor.
         */
        get: function () {
            var editor = this.editor;
            if (editor) {
                return editor.uri.toString();
            }
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditorAccess.prototype, "selection", {
        /**
         * The selection location from the text editor.
         */
        get: function () {
            var editor = this.editor;
            if (editor) {
                var uri = editor.uri.toString();
                var range = editor.selection;
                return {
                    range: range,
                    uri: uri
                };
            }
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditorAccess.prototype, "languageId", {
        /**
         * The unique identifier of the language the current editor belongs to.
         */
        get: function () {
            var editor = this.editor;
            if (editor) {
                return editor.document.languageId;
            }
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditorAccess.prototype, "editor", {
        /**
         * The text editor.
         */
        get: function () {
            var editorWidget = this.editorWidget();
            if (editorWidget) {
                return editorWidget.editor;
            }
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        inversify_1.inject(EditorManager),
        __metadata("design:type", EditorManager)
    ], EditorAccess.prototype, "editorManager", void 0);
    EditorAccess = __decorate([
        inversify_1.injectable()
    ], EditorAccess);
    return EditorAccess;
}());
exports.EditorAccess = EditorAccess;
/**
 * Provides direct access to the currently active text editor.
 */
var CurrentEditorAccess = /** @class */ (function (_super) {
    __extends(CurrentEditorAccess, _super);
    function CurrentEditorAccess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CurrentEditorAccess.prototype.editorWidget = function () {
        return this.editorManager.currentEditor;
    };
    CurrentEditorAccess = __decorate([
        inversify_1.injectable()
    ], CurrentEditorAccess);
    return CurrentEditorAccess;
}(EditorAccess));
exports.CurrentEditorAccess = CurrentEditorAccess;
/**
 * Provides access to the active text editor.
 */
var ActiveEditorAccess = /** @class */ (function (_super) {
    __extends(ActiveEditorAccess, _super);
    function ActiveEditorAccess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActiveEditorAccess.prototype.editorWidget = function () {
        return this.editorManager.activeEditor;
    };
    ActiveEditorAccess = __decorate([
        inversify_1.injectable()
    ], ActiveEditorAccess);
    return ActiveEditorAccess;
}(EditorAccess));
exports.ActiveEditorAccess = ActiveEditorAccess;
(function (EditorAccess) {
    EditorAccess.CURRENT = 'current-editor-access';
    EditorAccess.ACTIVE = 'active-editor-access';
})(EditorAccess = exports.EditorAccess || (exports.EditorAccess = {}));
exports.EditorAccess = EditorAccess;


/***/ }),

/***/ "./node_modules/@theia/editor/lib/browser/editor-menu.js":
/*!***************************************************************!*\
  !*** ./node_modules/@theia/editor/lib/browser/editor-menu.js ***!
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
exports.EditorMenuContribution = exports.EditorMainMenu = exports.EditorContextMenu = exports.EDITOR_CONTEXT_MENU = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var editor_command_1 = __webpack_require__(/*! ./editor-command */ "./node_modules/@theia/editor/lib/browser/editor-command.js");
exports.EDITOR_CONTEXT_MENU = ['editor_context_menu'];
/**
 * Editor context menu default groups should be aligned
 * with VS Code default groups: https://code.visualstudio.com/api/references/contribution-points#contributes.menus
 */
var EditorContextMenu;
(function (EditorContextMenu) {
    EditorContextMenu.NAVIGATION = __spread(exports.EDITOR_CONTEXT_MENU, ['navigation']);
    EditorContextMenu.MODIFICATION = __spread(exports.EDITOR_CONTEXT_MENU, ['1_modification']);
    EditorContextMenu.CUT_COPY_PASTE = __spread(exports.EDITOR_CONTEXT_MENU, ['9_cutcopypaste']);
    EditorContextMenu.COMMANDS = __spread(exports.EDITOR_CONTEXT_MENU, ['z_commands']);
    EditorContextMenu.UNDO_REDO = __spread(exports.EDITOR_CONTEXT_MENU, ['1_undo']);
})(EditorContextMenu = exports.EditorContextMenu || (exports.EditorContextMenu = {}));
var EditorMainMenu;
(function (EditorMainMenu) {
    /**
     * The main `Go` menu item.
     */
    EditorMainMenu.GO = __spread(core_1.MAIN_MENU_BAR, ['5_go']);
    /**
     * Navigation menu group in the `Go` menu.
     */
    EditorMainMenu.NAVIGATION_GROUP = __spread(EditorMainMenu.GO, ['1_navigation_group']);
})(EditorMainMenu = exports.EditorMainMenu || (exports.EditorMainMenu = {}));
var EditorMenuContribution = /** @class */ (function () {
    function EditorMenuContribution() {
    }
    EditorMenuContribution.prototype.registerMenus = function (registry) {
        registry.registerMenuAction(EditorContextMenu.UNDO_REDO, {
            commandId: browser_1.CommonCommands.UNDO.id
        });
        registry.registerMenuAction(EditorContextMenu.UNDO_REDO, {
            commandId: browser_1.CommonCommands.REDO.id
        });
        registry.registerMenuAction(EditorContextMenu.CUT_COPY_PASTE, {
            commandId: browser_1.CommonCommands.CUT.id,
            order: '0'
        });
        registry.registerMenuAction(EditorContextMenu.CUT_COPY_PASTE, {
            commandId: browser_1.CommonCommands.COPY.id,
            order: '1'
        });
        registry.registerMenuAction(EditorContextMenu.CUT_COPY_PASTE, {
            commandId: browser_1.CommonCommands.PASTE.id,
            order: '2'
        });
        // Editor navigation. Go > Back and Go > Forward.
        registry.registerSubmenu(EditorMainMenu.GO, 'Go');
        registry.registerMenuAction(EditorMainMenu.NAVIGATION_GROUP, {
            commandId: editor_command_1.EditorCommands.GO_BACK.id,
            label: 'Back'
        });
        registry.registerMenuAction(EditorMainMenu.NAVIGATION_GROUP, {
            commandId: editor_command_1.EditorCommands.GO_FORWARD.id,
            label: 'Forward'
        });
        registry.registerMenuAction(EditorMainMenu.NAVIGATION_GROUP, {
            commandId: editor_command_1.EditorCommands.GO_LAST_EDIT.id,
            label: 'Last Edit Location'
        });
        // Toggle Commands.
        registry.registerMenuAction(browser_1.CommonMenus.VIEW_TOGGLE, {
            commandId: editor_command_1.EditorCommands.TOGGLE_WORD_WRAP.id,
            label: editor_command_1.EditorCommands.TOGGLE_WORD_WRAP.label,
            order: '0'
        });
        registry.registerMenuAction(browser_1.CommonMenus.VIEW_TOGGLE, {
            commandId: editor_command_1.EditorCommands.TOGGLE_MINIMAP.id,
            label: 'Show Minimap',
            order: '1',
        });
        registry.registerMenuAction(browser_1.CommonMenus.VIEW_TOGGLE, {
            commandId: editor_command_1.EditorCommands.TOGGLE_RENDER_WHITESPACE.id,
            label: 'Render Whitespace',
            order: '2'
        });
    };
    EditorMenuContribution = __decorate([
        inversify_1.injectable()
    ], EditorMenuContribution);
    return EditorMenuContribution;
}());
exports.EditorMenuContribution = EditorMenuContribution;


/***/ }),

/***/ "./node_modules/@theia/editor/lib/browser/editor-navigation-contribution.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@theia/editor/lib/browser/editor-navigation-contribution.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorNavigationContribution = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var logger_1 = __webpack_require__(/*! @theia/core/lib/common/logger */ "./node_modules/@theia/core/lib/common/logger.js");
var storage_service_1 = __webpack_require__(/*! @theia/core/lib/browser/storage-service */ "./node_modules/@theia/core/lib/browser/storage-service.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "./node_modules/@theia/core/lib/common/command.js");
var editor_command_1 = __webpack_require__(/*! ./editor-command */ "./node_modules/@theia/editor/lib/browser/editor-command.js");
var editor_manager_1 = __webpack_require__(/*! ./editor-manager */ "./node_modules/@theia/editor/lib/browser/editor-manager.js");
var navigation_location_1 = __webpack_require__(/*! ./navigation/navigation-location */ "./node_modules/@theia/editor/lib/browser/navigation/navigation-location.js");
var navigation_location_service_1 = __webpack_require__(/*! ./navigation/navigation-location-service */ "./node_modules/@theia/editor/lib/browser/navigation/navigation-location-service.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var EditorNavigationContribution = /** @class */ (function () {
    function EditorNavigationContribution() {
        this.toDispose = new disposable_1.DisposableCollection();
        this.toDisposePerCurrentEditor = new disposable_1.DisposableCollection();
    }
    EditorNavigationContribution_1 = EditorNavigationContribution;
    EditorNavigationContribution.prototype.init = function () {
        var _this = this;
        this.toDispose.pushAll([
            // TODO listen on file resource changes, if a file gets deleted, remove the corresponding navigation locations (if any).
            // This would require introducing the FS dependency in the editor extension.
            this.editorManager.onCurrentEditorChanged(this.onCurrentEditorChanged.bind(this))
        ]);
        this.commandRegistry.registerHandler(editor_command_1.EditorCommands.GO_BACK.id, {
            execute: function () { return _this.locationStack.back(); },
            isEnabled: function () { return _this.locationStack.canGoBack(); }
        });
        this.commandRegistry.registerHandler(editor_command_1.EditorCommands.GO_FORWARD.id, {
            execute: function () { return _this.locationStack.forward(); },
            isEnabled: function () { return _this.locationStack.canGoForward(); }
        });
        this.commandRegistry.registerHandler(editor_command_1.EditorCommands.GO_LAST_EDIT.id, {
            execute: function () { return _this.locationStack.reveal(_this.locationStack.lastEditLocation()); },
            isEnabled: function () { return !!_this.locationStack.lastEditLocation(); }
        });
        this.commandRegistry.registerHandler(editor_command_1.EditorCommands.CLEAR_EDITOR_HISTORY.id, {
            execute: function () { return _this.locationStack.clearHistory(); },
            isEnabled: function () { return _this.locationStack.locations().length > 0; }
        });
        this.commandRegistry.registerHandler(editor_command_1.EditorCommands.TOGGLE_MINIMAP.id, {
            execute: function () { return _this.toggleMinimap(); },
            isEnabled: function () { return true; },
            isToggled: function () { return _this.isMinimapEnabled(); }
        });
        this.commandRegistry.registerHandler(editor_command_1.EditorCommands.TOGGLE_RENDER_WHITESPACE.id, {
            execute: function () { return _this.toggleRenderWhitespace(); },
            isEnabled: function () { return true; },
            isToggled: function () { return _this.isRenderWhitespaceEnabled(); }
        });
        this.commandRegistry.registerHandler(editor_command_1.EditorCommands.TOGGLE_WORD_WRAP.id, {
            execute: function () { return _this.toggleWordWrap(); },
            isEnabled: function () { return true; },
        });
    };
    EditorNavigationContribution.prototype.onStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.restoreState()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditorNavigationContribution.prototype.onStop = function () {
        this.storeState();
        this.dispose();
    };
    EditorNavigationContribution.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    /**
     * Toggle the editor word wrap behavior.
     */
    EditorNavigationContribution.prototype.toggleWordWrap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var wordWrap, values, index;
            return __generator(this, function (_a) {
                wordWrap = this.preferenceService.get('editor.wordWrap');
                if (wordWrap === undefined) {
                    return [2 /*return*/];
                }
                values = ['off', 'on', 'wordWrapColumn', 'bounded'];
                index = values.indexOf(wordWrap) + 1;
                if (index > -1) {
                    this.preferenceService.set('editor.wordWrap', values[index % values.length], browser_1.PreferenceScope.User);
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Toggle the display of minimap in the editor.
     */
    EditorNavigationContribution.prototype.toggleMinimap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                value = this.preferenceService.get('editor.minimap.enabled');
                this.preferenceService.set('editor.minimap.enabled', !value, browser_1.PreferenceScope.User);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Toggle the rendering of whitespace in the editor.
     */
    EditorNavigationContribution.prototype.toggleRenderWhitespace = function () {
        return __awaiter(this, void 0, void 0, function () {
            var renderWhitespace, updatedRenderWhitespace;
            return __generator(this, function (_a) {
                renderWhitespace = this.preferenceService.get('editor.renderWhitespace');
                if (renderWhitespace === 'none') {
                    updatedRenderWhitespace = 'all';
                }
                else {
                    updatedRenderWhitespace = 'none';
                }
                this.preferenceService.set('editor.renderWhitespace', updatedRenderWhitespace, browser_1.PreferenceScope.User);
                return [2 /*return*/];
            });
        });
    };
    EditorNavigationContribution.prototype.onCurrentEditorChanged = function (editorWidget) {
        var _this = this;
        this.toDisposePerCurrentEditor.dispose();
        if (editorWidget) {
            var editor_1 = editorWidget.editor;
            this.toDisposePerCurrentEditor.pushAll([
                // Instead of registering an `onCursorPositionChanged` listener, we treat the zero length selection as a cursor position change.
                // Otherwise we would have two events for a single cursor change interaction.
                editor_1.onSelectionChanged(function (selection) { return _this.onSelectionChanged(editor_1, selection); }),
                editor_1.onDocumentContentChanged(function (event) { return _this.onDocumentContentChanged(editor_1, event); })
            ]);
            this.locationStack.register(navigation_location_1.NavigationLocation.create(editor_1, editor_1.selection));
        }
    };
    EditorNavigationContribution.prototype.onCursorPositionChanged = function (editor, position) {
        this.locationStack.register(navigation_location_1.NavigationLocation.create(editor, position));
    };
    EditorNavigationContribution.prototype.onSelectionChanged = function (editor, selection) {
        if (this.isZeroLengthRange(selection)) {
            this.onCursorPositionChanged(editor, selection.start);
        }
        else {
            this.locationStack.register(navigation_location_1.NavigationLocation.create(editor, selection));
        }
    };
    EditorNavigationContribution.prototype.onDocumentContentChanged = function (editor, event) {
        if (event.contentChanges.length > 0) {
            this.locationStack.register(navigation_location_1.NavigationLocation.create(editor, event.contentChanges[0]));
        }
    };
    /**
     * `true` if the `range` argument has zero length. In other words, the `start` and the `end` positions are the same. Otherwise, `false`.
     */
    EditorNavigationContribution.prototype.isZeroLengthRange = function (range) {
        var start = range.start, end = range.end;
        return start.line === end.line && start.character === end.character;
    };
    EditorNavigationContribution.prototype.storeState = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.storageService.setData(EditorNavigationContribution_1.ID, {
                    locations: this.locationStack.locations().map(navigation_location_1.NavigationLocation.toObject)
                });
                return [2 /*return*/];
            });
        });
    };
    EditorNavigationContribution.prototype.restoreState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var raw, locations, i, location_1;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.storageService.getData(EditorNavigationContribution_1.ID)];
                    case 1:
                        raw = _b.sent();
                        if (raw && raw.locations) {
                            locations = [];
                            for (i = 0; i < raw.locations.length; i++) {
                                location_1 = navigation_location_1.NavigationLocation.fromObject(raw.locations[i]);
                                if (location_1) {
                                    locations.push(location_1);
                                }
                                else {
                                    this.logger.warn('Could not restore the state of the editor navigation history.');
                                    return [2 /*return*/];
                                }
                            }
                            (_a = this.locationStack).register.apply(_a, __spread(locations));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EditorNavigationContribution.prototype.isMinimapEnabled = function () {
        return !!this.preferenceService.get('editor.minimap.enabled');
    };
    EditorNavigationContribution.prototype.isRenderWhitespaceEnabled = function () {
        var renderWhitespace = this.preferenceService.get('editor.renderWhitespace');
        return renderWhitespace === 'none' ? false : true;
    };
    var EditorNavigationContribution_1;
    EditorNavigationContribution.ID = 'editor-navigation-contribution';
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], EditorNavigationContribution.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(editor_manager_1.EditorManager),
        __metadata("design:type", editor_manager_1.EditorManager)
    ], EditorNavigationContribution.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(navigation_location_service_1.NavigationLocationService),
        __metadata("design:type", navigation_location_service_1.NavigationLocationService)
    ], EditorNavigationContribution.prototype, "locationStack", void 0);
    __decorate([
        inversify_1.inject(storage_service_1.StorageService),
        __metadata("design:type", Object)
    ], EditorNavigationContribution.prototype, "storageService", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceService),
        __metadata("design:type", Object)
    ], EditorNavigationContribution.prototype, "preferenceService", void 0);
    __decorate([
        inversify_1.inject(command_1.CommandRegistry),
        __metadata("design:type", command_1.CommandRegistry)
    ], EditorNavigationContribution.prototype, "commandRegistry", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EditorNavigationContribution.prototype, "init", null);
    EditorNavigationContribution = EditorNavigationContribution_1 = __decorate([
        inversify_1.injectable()
    ], EditorNavigationContribution);
    return EditorNavigationContribution;
}());
exports.EditorNavigationContribution = EditorNavigationContribution;


/***/ }),

/***/ "./node_modules/@theia/editor/lib/browser/editor-preferences.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@theia/editor/lib/browser/editor-preferences.js ***!
  \**********************************************************************/
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
exports.bindEditorPreferences = exports.createEditorPreferences = exports.EditorPreferences = exports.editorPreferenceSchema = exports.EDITOR_MODEL_DEFAULTS = exports.EDITOR_FONT_DEFAULTS = void 0;
var preferences_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences */ "./node_modules/@theia/core/lib/browser/preferences/index.js");
var os_1 = __webpack_require__(/*! @theia/core/lib/common/os */ "./node_modules/@theia/core/lib/common/os.js");
var supported_encodings_1 = __webpack_require__(/*! ./supported-encodings */ "./node_modules/@theia/editor/lib/browser/supported-encodings.js");
var DEFAULT_WINDOWS_FONT_FAMILY = 'Consolas, \'Courier New\', monospace';
var DEFAULT_MAC_FONT_FAMILY = 'Menlo, Monaco, \'Courier New\', monospace';
var DEFAULT_LINUX_FONT_FAMILY = '\'Droid Sans Mono\', \'monospace\', monospace, \'Droid Sans Fallback\'';
var platform = {
    isMacintosh: os_1.isOSX,
    isLinux: os_1.OS.type() === os_1.OS.Type.Linux
};
// should be in sync with https://github.com/theia-ide/vscode/blob/standalone/0.19.x/src/vs/editor/common/config/editorOptions.ts#L2974
exports.EDITOR_FONT_DEFAULTS = {
    fontFamily: (os_1.isOSX ? DEFAULT_MAC_FONT_FAMILY : (os_1.isWindows ? DEFAULT_WINDOWS_FONT_FAMILY : DEFAULT_LINUX_FONT_FAMILY)),
    fontWeight: 'normal',
    fontSize: (os_1.isOSX ? 12 : 14),
    lineHeight: 0,
    letterSpacing: 0,
};
// should be in sync with https://github.com/theia-ide/vscode/blob/standalone/0.19.x/src/vs/editor/common/config/editorOptions.ts#L2989
exports.EDITOR_MODEL_DEFAULTS = {
    tabSize: 4,
    indentSize: 4,
    insertSpaces: true,
    detectIndentation: true,
    trimAutoWhitespace: true,
    largeFileOptimizations: true
};
/* eslint-enable no-null/no-null */
/* eslint-disable max-len */
// should be in sync with:
//        1. https://github.com/theia-ide/vscode/blob/standalone/0.19.x/src/vs/editor/common/config/commonEditorConfig.ts#L442
//        2. https://github.com/theia-ide/vscode/blob/standalone/0.19.x/src/vs/editor/common/config/commonEditorConfig.ts#L526
// 1. Copy from https://github.com/theia-ide/vscode/blob/standalone/0.19.x/src/vs/editor/common/config/commonEditorConfig.ts#L526
// 2. Align first items with https://github.com/theia-ide/vscode/blob/standalone/0.19.x/src/vs/editor/common/config/commonEditorConfig.ts#L442
// 3. Find -> Use Regular Expressions to clean up data and replace " by ', for example -> nls\.localize\(.*, "(.*)"\) -> "$1"
// 4. Apply `quotemark` quick fixes
// 5. Fix the rest manually
var codeEditorPreferenceProperties = {
    'editor.tabSize': {
        'type': 'number',
        'default': exports.EDITOR_MODEL_DEFAULTS.tabSize,
        'minimum': 1,
        'markdownDescription': 'The number of spaces a tab is equal to. This setting is overridden based on the file contents when `#editor.detectIndentation#` is on.'
    },
    'editor.insertSpaces': {
        'type': 'boolean',
        'default': exports.EDITOR_MODEL_DEFAULTS.insertSpaces,
        'markdownDescription': 'Insert spaces when pressing `Tab`. This setting is overridden based on the file contents when `#editor.detectIndentation#` is on.'
    },
    'editor.detectIndentation': {
        'type': 'boolean',
        'default': exports.EDITOR_MODEL_DEFAULTS.detectIndentation,
        'markdownDescription': 'Controls whether `#editor.tabSize#` and `#editor.insertSpaces#` will be automatically detected when a file is opened based on the file contents.'
    },
    'editor.trimAutoWhitespace': {
        'type': 'boolean',
        'default': exports.EDITOR_MODEL_DEFAULTS.trimAutoWhitespace,
        'description': 'Remove trailing auto inserted whitespace.'
    },
    'editor.largeFileOptimizations': {
        'type': 'boolean',
        'default': exports.EDITOR_MODEL_DEFAULTS.largeFileOptimizations,
        'description': 'Special handling for large files to disable certain memory intensive features.'
    },
    'editor.wordBasedSuggestions': {
        'type': 'boolean',
        'default': true,
        'description': 'Controls whether completions should be computed based on words in the document.'
    },
    'editor.stablePeek': {
        'type': 'boolean',
        'default': false,
        'markdownDescription': 'Keep peek editors open even when double clicking their content or when hitting `Escape`.'
    },
    'editor.maxTokenizationLineLength': {
        'type': 'integer',
        'default': 400,
        'description': 'Lines above this length will not be tokenized for performance reasons'
    },
    'diffEditor.maxComputationTime': {
        'type': 'number',
        'default': 5000,
        'description': 'Timeout in milliseconds after which diff computation is cancelled. Use 0 for no timeout.'
    },
    'diffEditor.renderSideBySide': {
        'type': 'boolean',
        'default': true,
        'description': 'Controls whether the diff editor shows the diff side by side or inline.'
    },
    'diffEditor.ignoreTrimWhitespace': {
        'type': 'boolean',
        'default': true,
        'description': 'Controls whether the diff editor shows changes in leading or trailing whitespace as diffs.'
    },
    'diffEditor.renderIndicators': {
        'type': 'boolean',
        'default': true,
        'description': 'Controls whether the diff editor shows +/- indicators for added/removed changes.'
    },
    'editor.acceptSuggestionOnCommitCharacter': {
        'markdownDescription': 'Controls whether suggestions should be accepted on commit characters. For example, in JavaScript, the semi-colon (`;`) can be a commit character that accepts a suggestion and types that character.',
        'type': 'boolean',
        'default': true
    },
    'editor.acceptSuggestionOnEnter': {
        'markdownEnumDescriptions': [
            '',
            'Only accept a suggestion with `Enter` when it makes a textual change.',
            ''
        ],
        'markdownDescription': 'Controls whether suggestions should be accepted on `Enter`, in addition to `Tab`. Helps to avoid ambiguity between inserting new lines or accepting suggestions.',
        'type': 'string',
        'enum': [
            'on',
            'smart',
            'off'
        ],
        'default': 'on'
    },
    'editor.accessibilitySupport': {
        'type': 'string',
        'enum': [
            'auto',
            'on',
            'off'
        ],
        'enumDescriptions': [
            'The editor will use platform APIs to detect when a Screen Reader is attached.',
            'The editor will be permanently optimized for usage with a Screen Reader.',
            'The editor will never be optimized for usage with a Screen Reader.'
        ],
        'default': 'auto',
        'description': 'Controls whether the editor should run in a mode where it is optimized for screen readers.'
    },
    'editor.accessibilityPageSize': {
        'description': 'Controls the number of lines in the editor that can be read out by a screen reader. Warning: this has a performance implication for numbers larger than the default.',
        'type': 'integer',
        'default': 10,
        'minimum': 1,
        'maximum': 1073741824
    },
    'editor.autoClosingBrackets': {
        'enumDescriptions': [
            '',
            'Use language configurations to determine when to autoclose brackets.',
            'Autoclose brackets only when the cursor is to the left of whitespace.',
            ''
        ],
        'description': 'Controls whether the editor should automatically close brackets after the user adds an opening bracket.',
        'type': 'string',
        'enum': [
            'always',
            'languageDefined',
            'beforeWhitespace',
            'never'
        ],
        'default': 'languageDefined'
    },
    'editor.autoClosingOvertype': {
        'enumDescriptions': [
            '',
            'Type over closing quotes or brackets only if they were automatically inserted.',
            ''
        ],
        'description': 'Controls whether the editor should type over closing quotes or brackets.',
        'type': 'string',
        'enum': [
            'always',
            'auto',
            'never'
        ],
        'default': 'auto'
    },
    'editor.autoClosingQuotes': {
        'enumDescriptions': [
            '',
            'Use language configurations to determine when to autoclose quotes.',
            'Autoclose quotes only when the cursor is to the left of whitespace.',
            ''
        ],
        'description': 'Controls whether the editor should automatically close quotes after the user adds an opening quote.',
        'type': 'string',
        'enum': [
            'always',
            'languageDefined',
            'beforeWhitespace',
            'never'
        ],
        'default': 'languageDefined'
    },
    'editor.autoIndent': {
        'enumDescriptions': [
            'The editor will not insert indentation automatically.',
            'The editor will keep the current line\'s indentation.',
            'The editor will keep the current line\'s indentation and honor language defined brackets.',
            'The editor will keep the current line\'s indentation, honor language defined brackets and invoke special onEnterRules defined by languages.',
            'The editor will keep the current line\'s indentation, honor language defined brackets, invoke special onEnterRules defined by languages, and honor indentationRules defined by languages.'
        ],
        'description': 'Controls whether the editor should automatically adjust the indentation when users type, paste, move or indent lines.',
        'type': 'string',
        'enum': [
            'none',
            'keep',
            'brackets',
            'advanced',
            'full'
        ],
        'default': 'full'
    },
    'editor.autoSurround': {
        'enumDescriptions': [
            'Use language configurations to determine when to automatically surround selections.',
            'Surround with quotes but not brackets.',
            'Surround with brackets but not quotes.',
            ''
        ],
        'description': 'Controls whether the editor should automatically surround selections.',
        'type': 'string',
        'enum': [
            'languageDefined',
            'quotes',
            'brackets',
            'never'
        ],
        'default': 'languageDefined'
    },
    'editor.codeLens': {
        'description': 'Controls whether the editor shows CodeLens.',
        'type': 'boolean',
        'default': true
    },
    'editor.colorDecorators': {
        'description': 'Controls whether the editor should render the inline color decorators and color picker.',
        'type': 'boolean',
        'default': true
    },
    'editor.copyWithSyntaxHighlighting': {
        'description': 'Controls whether syntax highlighting should be copied into the clipboard.',
        'type': 'boolean',
        'default': true
    },
    'editor.cursorBlinking': {
        'description': 'Control the cursor animation style.',
        'type': 'string',
        'enum': [
            'blink',
            'smooth',
            'phase',
            'expand',
            'solid'
        ],
        'default': 'blink'
    },
    'editor.cursorSmoothCaretAnimation': {
        'description': 'Controls whether the smooth caret animation should be enabled.',
        'type': 'boolean',
        'default': false
    },
    'editor.cursorStyle': {
        'description': 'Controls the cursor style.',
        'type': 'string',
        'enum': [
            'line',
            'block',
            'underline',
            'line-thin',
            'block-outline',
            'underline-thin'
        ],
        'default': 'line'
    },
    'editor.cursorSurroundingLines': {
        'description': 'Controls the minimal number of visible leading and trailing lines surrounding the cursor. Known as `scrollOff` or `scrollOffset` in some other editors.',
        'type': 'integer',
        'default': 0,
        'minimum': 0,
        'maximum': 1073741824
    },
    'editor.cursorSurroundingLinesStyle': {
        'enumDescriptions': [
            '`cursorSurroundingLines` is enforced only when triggered via the keyboard or API.',
            '`cursorSurroundingLines` is enforced always.'
        ],
        'description': 'Controls when `cursorSurroundingLines` should be enforced.',
        'type': 'string',
        'enum': [
            'default',
            'all'
        ],
        'default': 'default'
    },
    'editor.cursorWidth': {
        'markdownDescription': 'Controls the width of the cursor when `#editor.cursorStyle#` is set to `line`.',
        'type': 'integer',
        'default': 0,
        'minimum': 0,
        'maximum': 1073741824
    },
    'editor.dragAndDrop': {
        'description': 'Controls whether the editor should allow moving selections via drag and drop.',
        'type': 'boolean',
        'default': true
    },
    'editor.emptySelectionClipboard': {
        'description': 'Controls whether copying without a selection copies the current line.',
        'type': 'boolean',
        'default': true
    },
    'editor.fastScrollSensitivity': {
        'markdownDescription': 'Scrolling speed multiplier when pressing `Alt`.',
        'type': 'number',
        'default': 5
    },
    'editor.find.seedSearchStringFromSelection': {
        'type': 'boolean',
        'default': true,
        'description': 'Controls whether the search string in the Find Widget is seeded from the editor selection.'
    },
    'editor.find.autoFindInSelection': {
        'type': 'string',
        'enum': [
            'never',
            'always',
            'multiline'
        ],
        'default': 'never',
        'enumDescriptions': [
            'Never turn on Find in selection automatically (default)',
            'Always turn on Find in selection automatically',
            'Turn on Find in selection automatically when multiple lines of content are selected.'
        ],
        'description': 'Controls whether the find operation is carried out on selected text or the entire file in the editor.'
    },
    'editor.find.globalFindClipboard': {
        'type': 'boolean',
        'default': false,
        'description': 'Controls whether the Find Widget should read or modify the shared find clipboard on macOS.',
        'included': os_1.isOSX
    },
    'editor.find.addExtraSpaceOnTop': {
        'type': 'boolean',
        'default': true,
        'description': 'Controls whether the Find Widget should add extra lines on top of the editor. When true, you can scroll beyond the first line when the Find Widget is visible.'
    },
    'editor.folding': {
        'description': 'Controls whether the editor has code folding enabled.',
        'type': 'boolean',
        'default': true
    },
    'editor.foldingStrategy': {
        'markdownDescription': 'Controls the strategy for computing folding ranges. `auto` uses a language specific folding strategy, if available. `indentation` uses the indentation based folding strategy.',
        'type': 'string',
        'enum': [
            'auto',
            'indentation'
        ],
        'default': 'auto'
    },
    'editor.fontFamily': {
        'description': 'Controls the font family.',
        'type': 'string',
        'default': exports.EDITOR_FONT_DEFAULTS.fontFamily
    },
    'editor.fontLigatures': {
        'anyOf': [
            {
                'type': 'boolean',
                'description': 'Enables/Disables font ligatures.'
            },
            {
                'type': 'string',
                'description': 'Explicit font-feature-settings.'
            }
        ],
        'description': 'Configures font ligatures.',
        'default': false
    },
    'editor.fontSize': {
        'type': 'number',
        'minimum': 6,
        'maximum': 100,
        'default': exports.EDITOR_FONT_DEFAULTS.fontSize,
        'description': 'Controls the font size in pixels.'
    },
    'editor.fontWeight': {
        'enum': [
            'normal',
            'bold',
            '100',
            '200',
            '300',
            '400',
            '500',
            '600',
            '700',
            '800',
            '900'
        ],
        'description': 'Controls the font weight.',
        'type': 'string',
        'default': exports.EDITOR_FONT_DEFAULTS.fontWeight
    },
    'editor.formatOnPaste': {
        'description': 'Controls whether the editor should automatically format the pasted content. A formatter must be available and the formatter should be able to format a range in a document.',
        'type': 'boolean',
        'default': false
    },
    'editor.formatOnType': {
        'description': 'Controls whether the editor should automatically format the line after typing.',
        'type': 'boolean',
        'default': false
    },
    'editor.glyphMargin': {
        'description': 'Controls whether the editor should render the vertical glyph margin. Glyph margin is mostly used for debugging.',
        'type': 'boolean',
        'default': true
    },
    'editor.gotoLocation.multiple': {
        'type': 'string',
        'default': '',
        'deprecationMessage': 'This setting is deprecated, please use separate settings like `editor.editor.gotoLocation.multipleDefinitions` or `editor.editor.gotoLocation.multipleImplementations` instead.'
    },
    'editor.gotoLocation.multipleDefinitions': {
        'description': 'Controls the behavior the `Go to Definition`-command when multiple target locations exist.',
        'type': 'string',
        'enum': [
            'peek',
            'gotoAndPeek',
            'goto'
        ],
        'default': 'peek',
        'enumDescriptions': [
            'Show peek view of the results (default)',
            'Go to the primary result and show a peek view',
            'Go to the primary result and enable peek-less navigation to others'
        ]
    },
    'editor.gotoLocation.multipleTypeDefinitions': {
        'description': 'Controls the behavior the `Go to Type Definition`-command when multiple target locations exist.',
        'type': 'string',
        'enum': [
            'peek',
            'gotoAndPeek',
            'goto'
        ],
        'default': 'peek',
        'enumDescriptions': [
            'Show peek view of the results (default)',
            'Go to the primary result and show a peek view',
            'Go to the primary result and enable peek-less navigation to others'
        ]
    },
    'editor.gotoLocation.multipleDeclarations': {
        'description': 'Controls the behavior the `Go to Declaration`-command when multiple target locations exist.',
        'type': 'string',
        'enum': [
            'peek',
            'gotoAndPeek',
            'goto'
        ],
        'default': 'peek',
        'enumDescriptions': [
            'Show peek view of the results (default)',
            'Go to the primary result and show a peek view',
            'Go to the primary result and enable peek-less navigation to others'
        ]
    },
    'editor.gotoLocation.multipleImplementations': {
        'description': 'Controls the behavior the `Go to Implementations`-command when multiple target locations exist.',
        'type': 'string',
        'enum': [
            'peek',
            'gotoAndPeek',
            'goto'
        ],
        'default': 'peek',
        'enumDescriptions': [
            'Show peek view of the results (default)',
            'Go to the primary result and show a peek view',
            'Go to the primary result and enable peek-less navigation to others'
        ]
    },
    'editor.gotoLocation.multipleReferences': {
        'description': 'Controls the behavior the `Go to References`-command when multiple target locations exist.',
        'type': 'string',
        'enum': [
            'peek',
            'gotoAndPeek',
            'goto'
        ],
        'default': 'peek',
        'enumDescriptions': [
            'Show peek view of the results (default)',
            'Go to the primary result and show a peek view',
            'Go to the primary result and enable peek-less navigation to others'
        ]
    },
    'editor.gotoLocation.alternativeDefinitionCommand': {
        'type': 'string',
        'default': 'editor.action.goToReferences',
        'description': 'Alternative command id that is being executed when the result of `Go to Definition` is the current location.'
    },
    'editor.gotoLocation.alternativeTypeDefinitionCommand': {
        'type': 'string',
        'default': 'editor.action.goToReferences',
        'description': 'Alternative command id that is being executed when the result of `Go to Type Definition` is the current location.'
    },
    'editor.gotoLocation.alternativeDeclarationCommand': {
        'type': 'string',
        'default': 'editor.action.goToReferences',
        'description': 'Alternative command id that is being executed when the result of `Go to Declaration` is the current location.'
    },
    'editor.gotoLocation.alternativeImplementationCommand': {
        'type': 'string',
        'default': '',
        'description': 'Alternative command id that is being executed when the result of `Go to Implementation` is the current location.'
    },
    'editor.gotoLocation.alternativeReferenceCommand': {
        'type': 'string',
        'default': '',
        'description': 'Alternative command id that is being executed when the result of `Go to Reference` is the current location.'
    },
    'editor.hideCursorInOverviewRuler': {
        'description': 'Controls whether the cursor should be hidden in the overview ruler.',
        'type': 'boolean',
        'default': false
    },
    'editor.highlightActiveIndentGuide': {
        'description': 'Controls whether the editor should highlight the active indent guide.',
        'type': 'boolean',
        'default': true
    },
    'editor.hover.enabled': {
        'type': 'boolean',
        'default': true,
        'description': 'Controls whether the hover is shown.'
    },
    'editor.hover.delay': {
        'type': 'number',
        'default': 300,
        'description': 'Controls the delay in milliseconds after which the hover is shown.'
    },
    'editor.hover.sticky': {
        'type': 'boolean',
        'default': true,
        'description': 'Controls whether the hover should remain visible when mouse is moved over it.'
    },
    'editor.letterSpacing': {
        'description': 'Controls the letter spacing in pixels.',
        'type': 'number',
        'default': exports.EDITOR_FONT_DEFAULTS.letterSpacing
    },
    'editor.lightbulb.enabled': {
        'type': 'boolean',
        'default': true,
        'description': 'Enables the code action lightbulb in the editor.'
    },
    'editor.lineHeight': {
        'description': 'Controls the line height. Use 0 to compute the line height from the font size.',
        'type': 'integer',
        'default': exports.EDITOR_FONT_DEFAULTS.lineHeight,
        'minimum': 0,
        'maximum': 150
    },
    'editor.lineNumbers': {
        'type': 'string',
        'enum': [
            'off',
            'on',
            'relative',
            'interval'
        ],
        'enumDescriptions': [
            'Line numbers are not rendered.',
            'Line numbers are rendered as absolute number.',
            'Line numbers are rendered as distance in lines to cursor position.',
            'Line numbers are rendered every 10 lines.'
        ],
        'default': 'on',
        'description': 'Controls the display of line numbers.'
    },
    'editor.links': {
        'description': 'Controls whether the editor should detect links and make them clickable.',
        'type': 'boolean',
        'default': true
    },
    'editor.matchBrackets': {
        'description': 'Highlight matching brackets.',
        'type': 'string',
        'enum': [
            'always',
            'near',
            'never'
        ],
        'default': 'always'
    },
    'editor.minimap.enabled': {
        'type': 'boolean',
        'default': true,
        'description': 'Controls whether the minimap is shown.'
    },
    'editor.minimap.side': {
        'type': 'string',
        'enum': [
            'left',
            'right'
        ],
        'default': 'right',
        'description': 'Controls the side where to render the minimap.'
    },
    'editor.minimap.showSlider': {
        'type': 'string',
        'enum': [
            'always',
            'mouseover'
        ],
        'default': 'mouseover',
        'description': 'Controls when the minimap slider is shown.'
    },
    'editor.minimap.scale': {
        'type': 'number',
        'default': 1,
        'minimum': 1,
        'maximum': 3,
        'description': 'Scale of content drawn in the minimap.'
    },
    'editor.minimap.renderCharacters': {
        'type': 'boolean',
        'default': true,
        'description': 'Render the actual characters on a line as opposed to color blocks.'
    },
    'editor.minimap.maxColumn': {
        'type': 'number',
        'default': 120,
        'description': 'Limit the width of the minimap to render at most a certain number of columns.'
    },
    'editor.mouseWheelScrollSensitivity': {
        'markdownDescription': 'A multiplier to be used on the `deltaX` and `deltaY` of mouse wheel scroll events.',
        'type': 'number',
        'default': 1
    },
    'editor.mouseWheelZoom': {
        'markdownDescription': 'Zoom the font of the editor when using mouse wheel and holding `Ctrl`.',
        'type': 'boolean',
        'default': false
    },
    'editor.multiCursorMergeOverlapping': {
        'description': 'Merge multiple cursors when they are overlapping.',
        'type': 'boolean',
        'default': true
    },
    'editor.multiCursorModifier': {
        'markdownEnumDescriptions': [
            'Maps to `Control` on Windows and Linux and to `Command` on macOS.',
            'Maps to `Alt` on Windows and Linux and to `Option` on macOS.'
        ],
        'markdownDescription': 'The modifier to be used to add multiple cursors with the mouse. The Go To Definition and Open Link mouse gestures will adapt such that they do not conflict with the multicursor modifier. [Read more](https://code.visualstudio.com/docs/editor/codebasics#_multicursor-modifier).',
        'type': 'string',
        'enum': [
            'ctrlCmd',
            'alt'
        ],
        'default': 'alt'
    },
    'editor.multiCursorPaste': {
        'markdownEnumDescriptions': [
            'Each cursor pastes a single line of the text.',
            'Each cursor pastes the full text.'
        ],
        'markdownDescription': 'Controls pasting when the line count of the pasted text matches the cursor count.',
        'type': 'string',
        'enum': [
            'spread',
            'full'
        ],
        'default': 'spread'
    },
    'editor.occurrencesHighlight': {
        'description': 'Controls whether the editor should highlight semantic symbol occurrences.',
        'type': 'boolean',
        'default': true
    },
    'editor.overviewRulerBorder': {
        'description': 'Controls whether a border should be drawn around the overview ruler.',
        'type': 'boolean',
        'default': true
    },
    'editor.parameterHints.enabled': {
        'type': 'boolean',
        'default': true,
        'description': 'Enables a pop-up that shows parameter documentation and type information as you type.'
    },
    'editor.parameterHints.cycle': {
        'type': 'boolean',
        'default': false,
        'description': 'Controls whether the parameter hints menu cycles or closes when reaching the end of the list.'
    },
    'editor.quickSuggestions': {
        'anyOf': [
            {
                'type': 'boolean'
            },
            {
                'type': 'object',
                'properties': {
                    'strings': {
                        'type': 'boolean',
                        'default': false,
                        'description': 'Enable quick suggestions inside strings.'
                    },
                    'comments': {
                        'type': 'boolean',
                        'default': false,
                        'description': 'Enable quick suggestions inside comments.'
                    },
                    'other': {
                        'type': 'boolean',
                        'default': true,
                        'description': 'Enable quick suggestions outside of strings and comments.'
                    }
                }
            }
        ],
        'default': {
            'other': true,
            'comments': false,
            'strings': false
        },
        'description': 'Controls whether suggestions should automatically show up while typing.'
    },
    'editor.quickSuggestionsDelay': {
        'description': 'Controls the delay in milliseconds after which quick suggestions will show up.',
        'type': 'integer',
        'default': 10,
        'minimum': 0,
        'maximum': 1073741824
    },
    'editor.renderControlCharacters': {
        'description': 'Controls whether the editor should render control characters.',
        'type': 'boolean',
        'default': false
    },
    'editor.renderIndentGuides': {
        'description': 'Controls whether the editor should render indent guides.',
        'type': 'boolean',
        'default': true
    },
    'editor.renderFinalNewline': {
        'description': 'Render last line number when the file ends with a newline.',
        'type': 'boolean',
        'default': true
    },
    'editor.renderLineHighlight': {
        'enumDescriptions': [
            '',
            '',
            '',
            'Highlights both the gutter and the current line.'
        ],
        'description': 'Controls how the editor should render the current line highlight.',
        'type': 'string',
        'enum': [
            'none',
            'gutter',
            'line',
            'all'
        ],
        'default': 'line'
    },
    'editor.renderWhitespace': {
        'enumDescriptions': [
            '',
            'Render whitespace characters except for single spaces between words.',
            'Render whitespace characters only on selected text.',
            ''
        ],
        'description': 'Controls how the editor should render whitespace characters.',
        'type': 'string',
        'enum': [
            'none',
            'boundary',
            'selection',
            'all'
        ],
        'default': 'none'
    },
    'editor.roundedSelection': {
        'description': 'Controls whether selections should have rounded corners.',
        'type': 'boolean',
        'default': true
    },
    'editor.rulers': {
        'type': 'array',
        'items': {
            'type': 'number'
        },
        'default': [],
        'description': 'Render vertical rulers after a certain number of monospace characters. Use multiple values for multiple rulers. No rulers are drawn if array is empty.'
    },
    'editor.scrollBeyondLastColumn': {
        'description': 'Controls the number of extra characters beyond which the editor will scroll horizontally.',
        'type': 'integer',
        'default': 5,
        'minimum': 0,
        'maximum': 1073741824
    },
    'editor.scrollBeyondLastLine': {
        'description': 'Controls whether the editor will scroll beyond the last line.',
        'type': 'boolean',
        'default': true
    },
    'editor.selectionClipboard': {
        'description': 'Controls whether the Linux primary clipboard should be supported.',
        'included': platform.isLinux,
        'type': 'boolean',
        'default': true
    },
    'editor.selectionHighlight': {
        'description': 'Controls whether the editor should highlight matches similar to the selection.',
        'type': 'boolean',
        'default': true
    },
    'editor.showFoldingControls': {
        'description': 'Controls whether the fold controls on the gutter are automatically hidden.',
        'type': 'string',
        'enum': [
            'always',
            'mouseover'
        ],
        'default': 'mouseover'
    },
    'editor.showUnused': {
        'description': 'Controls fading out of unused code.',
        'type': 'boolean',
        'default': true
    },
    'editor.snippetSuggestions': {
        'enumDescriptions': [
            'Show snippet suggestions on top of other suggestions.',
            'Show snippet suggestions below other suggestions.',
            'Show snippets suggestions with other suggestions.',
            'Do not show snippet suggestions.'
        ],
        'description': 'Controls whether snippets are shown with other suggestions and how they are sorted.',
        'type': 'string',
        'enum': [
            'top',
            'bottom',
            'inline',
            'none'
        ],
        'default': 'inline'
    },
    'editor.smoothScrolling': {
        'description': 'Controls whether the editor will scroll using an animation.',
        'type': 'boolean',
        'default': false
    },
    'editor.suggest.insertMode': {
        'type': 'string',
        'enum': [
            'insert',
            'replace'
        ],
        'enumDescriptions': [
            'Insert suggestion without overwriting text right of the cursor.',
            'Insert suggestion and overwrite text right of the cursor.'
        ],
        'default': 'insert',
        'description': 'Controls whether words are overwritten when accepting completions. Note that this depends on extensions opting into this feature.'
    },
    'editor.suggest.insertHighlight': {
        'type': 'boolean',
        'default': false,
        'description': 'Controls whether unexpected text modifications while accepting completions should be highlighted, e.g `insertMode` is `replace` but the completion only supports `insert`.'
    },
    'editor.suggest.filterGraceful': {
        'type': 'boolean',
        'default': true,
        'description': 'Controls whether filtering and sorting suggestions accounts for small typos.'
    },
    'editor.suggest.localityBonus': {
        'type': 'boolean',
        'default': false,
        'description': 'Controls whether sorting favours words that appear close to the cursor.'
    },
    'editor.suggest.shareSuggestSelections': {
        'type': 'boolean',
        'default': false,
        'markdownDescription': 'Controls whether remembered suggestion selections are shared between multiple workspaces and windows (needs `#editor.suggestSelection#`).'
    },
    'editor.suggest.snippetsPreventQuickSuggestions': {
        'type': 'boolean',
        'default': true,
        'description': 'Control whether an active snippet prevents quick suggestions.'
    },
    'editor.suggest.showIcons': {
        'type': 'boolean',
        'default': true,
        'description': 'Controls whether to show or hide icons in suggestions.'
    },
    'editor.suggest.maxVisibleSuggestions': {
        'type': 'number',
        'default': 12,
        'minimum': 1,
        'maximum': 15,
        'description': 'Controls how many suggestions IntelliSense will show before showing a scrollbar (maximum 15).'
    },
    'editor.suggest.filteredTypes': {
        'type': 'object',
        'default': {},
        'deprecationMessage': 'This setting is deprecated, please use separate settings like `editor.suggest.showKeywords` or `editor.suggest.showSnippets` instead.'
    },
    'editor.suggest.showMethods': {
        'type': 'boolean',
        'default': true,
        'markdownDescription': 'When enabled IntelliSense shows `method`-suggestions.'
    },
    'editor.suggest.showFunctions': {
        'type': 'boolean',
        'default': true,
        'markdownDescription': 'When enabled IntelliSense shows `function`-suggestions.'
    },
    'editor.suggest.showConstructors': {
        'type': 'boolean',
        'default': true,
        'markdownDescription': 'When enabled IntelliSense shows `constructor`-suggestions.'
    },
    'editor.suggest.showFields': {
        'type': 'boolean',
        'default': true,
        'markdownDescription': 'When enabled IntelliSense shows `field`-suggestions.'
    },
    'editor.suggest.showVariables': {
        'type': 'boolean',
        'default': true,
        'markdownDescription': 'When enabled IntelliSense shows `variable`-suggestions.'
    },
    'editor.suggest.showClasses': {
        'type': 'boolean',
        'default': true,
        'markdownDescription': 'When enabled IntelliSense shows `class`-suggestions.'
    },
    'editor.suggest.showStructs': {
        'type': 'boolean',
        'default': true,
        'markdownDescription': 'When enabled IntelliSense shows `struct`-suggestions.'
    },
    'editor.suggest.showInterfaces': {
        'type': 'boolean',
        'default': true,
        'markdownDescription': 'When enabled IntelliSense shows `interface`-suggestions.'
    },
    'editor.suggest.showModules': {
        'type': 'boolean',
        'default': true,
        'markdownDescription': 'When enabled IntelliSense shows `module`-suggestions.'
    },
    'editor.suggest.showProperties': {
        'type': 'boolean',
        'default': true,
        'markdownDescription': 'When enabled IntelliSense shows `property`-suggestions.'
    },
    'editor.suggest.showEvents': {
        'type': 'boolean',
        'default': true,
        'markdownDescription': 'When enabled IntelliSense shows `event`-suggestions.'
    },
    'editor.suggest.showOperators': {
        'type': 'boolean',
        'default': true,
        'markdownDescription': 'When enabled IntelliSense shows `operator`-suggestions.'
    },
    'editor.suggest.showUnits': {
        'type': 'boolean',
        'default': true,
        'markdownDescription': 'When enabled IntelliSense shows `unit`-suggestions.'
    },
    'editor.suggest.showValues': {
        'type': 'boolean',
        'default': true,
        'markdownDescription': 'When enabled IntelliSense shows `value`-suggestions.'
    },
    'editor.suggest.showConstants': {
        'type': 'boolean',
        'default': true,
        'markdownDescription': 'When enabled IntelliSense shows `constant`-suggestions.'
    },
    'editor.suggest.showEnums': {
        'type': 'boolean',
        'default': true,
        'markdownDescription': 'When enabled IntelliSense shows `enum`-suggestions.'
    },
    'editor.suggest.showEnumMembers': {
        'type': 'boolean',
        'default': true,
        'markdownDescription': 'When enabled IntelliSense shows `enumMember`-suggestions.'
    },
    'editor.suggest.showKeywords': {
        'type': 'boolean',
        'default': true,
        'markdownDescription': 'When enabled IntelliSense shows `keyword`-suggestions.'
    },
    'editor.suggest.showWords': {
        'type': 'boolean',
        'default': true,
        'markdownDescription': 'When enabled IntelliSense shows `text`-suggestions.'
    },
    'editor.suggest.showColors': {
        'type': 'boolean',
        'default': true,
        'markdownDescription': 'When enabled IntelliSense shows `color`-suggestions.'
    },
    'editor.suggest.showFiles': {
        'type': 'boolean',
        'default': true,
        'markdownDescription': 'When enabled IntelliSense shows `file`-suggestions.'
    },
    'editor.suggest.showReferences': {
        'type': 'boolean',
        'default': true,
        'markdownDescription': 'When enabled IntelliSense shows `reference`-suggestions.'
    },
    'editor.suggest.showCustomcolors': {
        'type': 'boolean',
        'default': true,
        'markdownDescription': 'When enabled IntelliSense shows `customcolor`-suggestions.'
    },
    'editor.suggest.showFolders': {
        'type': 'boolean',
        'default': true,
        'markdownDescription': 'When enabled IntelliSense shows `folder`-suggestions.'
    },
    'editor.suggest.showTypeParameters': {
        'type': 'boolean',
        'default': true,
        'markdownDescription': 'When enabled IntelliSense shows `typeParameter`-suggestions.'
    },
    'editor.suggest.showSnippets': {
        'type': 'boolean',
        'default': true,
        'markdownDescription': 'When enabled IntelliSense shows `snippet`-suggestions.'
    },
    'editor.suggestFontSize': {
        'markdownDescription': 'Font size for the suggest widget. When set to `0`, the value of `#editor.fontSize#` is used.',
        'type': 'integer',
        'default': 0,
        'minimum': 0,
        'maximum': 1000
    },
    'editor.suggestLineHeight': {
        'markdownDescription': 'Line height for the suggest widget. When set to `0`, the value of `#editor.lineHeight#` is used.',
        'type': 'integer',
        'default': 0,
        'minimum': 0,
        'maximum': 1000
    },
    'editor.suggestOnTriggerCharacters': {
        'description': 'Controls whether suggestions should automatically show up when typing trigger characters.',
        'type': 'boolean',
        'default': true
    },
    'editor.suggestSelection': {
        'markdownEnumDescriptions': [
            'Always select the first suggestion.',
            'Select recent suggestions unless further typing selects one, e.g. `console.| -> console.log` because `log` has been completed recently.',
            'Select suggestions based on previous prefixes that have completed those suggestions, e.g. `co -> console` and `con -> const`.'
        ],
        'description': 'Controls how suggestions are pre-selected when showing the suggest list.',
        'type': 'string',
        'enum': [
            'first',
            'recentlyUsed',
            'recentlyUsedByPrefix'
        ],
        'default': 'recentlyUsed'
    },
    'editor.tabCompletion': {
        'enumDescriptions': [
            'Tab complete will insert the best matching suggestion when pressing tab.',
            'Disable tab completions.',
            'Tab complete snippets when their prefix match. Works best when `quickSuggestions` aren\'t enabled.'
        ],
        'description': 'Enables tab completions.',
        'type': 'string',
        'enum': [
            'on',
            'off',
            'onlySnippets'
        ],
        'default': 'off'
    },
    'editor.useTabStops': {
        'description': 'Inserting and deleting whitespace follows tab stops.',
        'type': 'boolean',
        'default': true
    },
    'editor.wordSeparators': {
        'description': 'Characters that will be used as word separators when doing word related navigations or operations.',
        'type': 'string',
        'default': '`~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?'
    },
    'editor.wordWrap': {
        'markdownEnumDescriptions': [
            'Lines will never wrap.',
            'Lines will wrap at the viewport width.',
            'Lines will wrap at `#editor.wordWrapColumn#`.',
            'Lines will wrap at the minimum of viewport and `#editor.wordWrapColumn#`.'
        ],
        'description': 'Controls how lines should wrap.',
        'type': 'string',
        'enum': [
            'off',
            'on',
            'wordWrapColumn',
            'bounded'
        ],
        'default': 'off'
    },
    'editor.wordWrapColumn': {
        'markdownDescription': 'Controls the wrapping column of the editor when `#editor.wordWrap#` is `wordWrapColumn` or `bounded`.',
        'type': 'integer',
        'default': 80,
        'minimum': 1,
        'maximum': 1073741824
    },
    'editor.wrappingIndent': {
        'enumDescriptions': [
            'No indentation. Wrapped lines begin at column 1.',
            'Wrapped lines get the same indentation as the parent.',
            'Wrapped lines get +1 indentation toward the parent.',
            'Wrapped lines get +2 indentation toward the parent.'
        ],
        'description': 'Controls the indentation of wrapped lines.',
        'type': 'string',
        'enum': [
            'none',
            'same',
            'indent',
            'deepIndent'
        ],
        'default': 'same'
    }
};
/* eslint-enable max-len */
exports.editorPreferenceSchema = {
    'type': 'object',
    'scope': 'resource',
    'overridable': true,
    'properties': __assign(__assign({}, codeEditorPreferenceProperties), { 'editor.autoSave': {
            'enum': [
                'on',
                'off'
            ],
            'default': 'off',
            'description': 'Controls auto save of dirty files.',
            overridable: false
        }, 'editor.autoSaveDelay': {
            'type': 'number',
            'default': 500,
            'description': 'Configure the auto save delay in milliseconds.',
            overridable: false
        }, 'editor.formatOnSave': {
            'type': 'boolean',
            'default': false,
            'description': 'Enable format on manual save.'
        }, 'editor.formatOnSaveTimeout': {
            'type': 'number',
            'default': 750,
            'description': 'Timeout in milliseconds after which the formatting that is run on file save is cancelled.'
        }, 'files.eol': {
            'type': 'string',
            'enum': [
                '\n',
                '\r\n',
                'auto'
            ],
            'enumDescriptions': [
                'LF',
                'CRLF',
                'Uses operating system specific end of line character.'
            ],
            'default': 'auto',
            'description': 'The default end of line character.'
        }, 'files.encoding': {
            'enum': Object.keys(supported_encodings_1.SUPPORTED_ENCODINGS).sort(),
            'default': 'utf8',
            'description': 'The default character set encoding to use when reading and writing files.'
        } })
};
exports.EditorPreferences = Symbol('EditorPreferences');
function createEditorPreferences(preferences) {
    return preferences_1.createPreferenceProxy(preferences, exports.editorPreferenceSchema);
}
exports.createEditorPreferences = createEditorPreferences;
function bindEditorPreferences(bind) {
    bind(exports.EditorPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(preferences_1.PreferenceService);
        return createEditorPreferences(preferences);
    }).inSingletonScope();
    bind(preferences_1.PreferenceContribution).toConstantValue({ schema: exports.editorPreferenceSchema });
}
exports.bindEditorPreferences = bindEditorPreferences;


/***/ }),

/***/ "./node_modules/@theia/editor/lib/browser/editor-quick-open-service.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@theia/editor/lib/browser/editor-quick-open-service.js ***!
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
exports.EditorQuickOpenService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var label_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/label-provider */ "./node_modules/@theia/core/lib/browser/label-provider.js");
var editor_manager_1 = __webpack_require__(/*! ./editor-manager */ "./node_modules/@theia/editor/lib/browser/editor-manager.js");
var EditorQuickOpenService = /** @class */ (function () {
    function EditorQuickOpenService() {
        this.prefix = 'edt ';
    }
    Object.defineProperty(EditorQuickOpenService.prototype, "description", {
        get: function () {
            return 'Show All Opened Editors';
        },
        enumerable: false,
        configurable: true
    });
    EditorQuickOpenService.prototype.getModel = function () {
        return this;
    };
    EditorQuickOpenService.prototype.getOptions = function () {
        return {
            fuzzyMatchLabel: {
                enableSeparateSubstringMatching: true
            },
            fuzzyMatchDescription: {
                enableSeparateSubstringMatching: true
            }
        };
    };
    EditorQuickOpenService.prototype.open = function () {
        this.prefixQuickOpenService.open(this.prefix);
    };
    EditorQuickOpenService.prototype.onType = function (lookFor, acceptor) {
        var e_1, _a;
        var editorItems = [];
        // Get the alphabetically sorted list of URIs of all currently opened editor widgets.
        var widgets = this.editorManager.all
            .map(function (w) { return w.editor.uri; })
            .sort();
        if (widgets.length === 0) {
            editorItems.push(new browser_1.QuickOpenItem({
                label: 'List of opened editors is currently empty',
                run: function () { return false; }
            }));
            acceptor(editorItems);
            return;
        }
        try {
            for (var widgets_1 = __values(widgets), widgets_1_1 = widgets_1.next(); !widgets_1_1.done; widgets_1_1 = widgets_1.next()) {
                var uri = widgets_1_1.value;
                var item = this.toItem(uri);
                editorItems.push(item);
                acceptor(editorItems);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (widgets_1_1 && !widgets_1_1.done && (_a = widgets_1.return)) _a.call(widgets_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return;
    };
    EditorQuickOpenService.prototype.toItem = function (uri) {
        var description = this.labelProvider.getLongName(uri.parent);
        var icon = this.labelProvider.getIcon(uri);
        var iconClass = icon === '' ? undefined : icon + ' file-icon';
        var options = {
            label: this.labelProvider.getName(uri),
            iconClass: iconClass,
            description: description,
            tooltip: uri.path.toString(),
            uri: uri,
            hidden: false,
            run: this.getRunFunction(uri)
        };
        return new browser_1.QuickOpenItem(options);
    };
    /**
     * Gets the function that can open the editor file
     * @param uri the file uri
     * @returns the function that opens the file if mode === QuickOpenMode.OPEN
     */
    EditorQuickOpenService.prototype.getRunFunction = function (uri) {
        var _this = this;
        return function (mode) {
            if (mode !== browser_1.QuickOpenMode.OPEN) {
                return false;
            }
            _this.openFile(uri);
            return true;
        };
    };
    EditorQuickOpenService.prototype.openFile = function (uri) {
        this.openerService.getOpener(uri)
            .then(function (opener) { return opener.open(uri); });
    };
    __decorate([
        inversify_1.inject(browser_1.OpenerService),
        __metadata("design:type", Object)
    ], EditorQuickOpenService.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(browser_1.PrefixQuickOpenService),
        __metadata("design:type", browser_1.PrefixQuickOpenService)
    ], EditorQuickOpenService.prototype, "prefixQuickOpenService", void 0);
    __decorate([
        inversify_1.inject(label_provider_1.LabelProvider),
        __metadata("design:type", label_provider_1.LabelProvider)
    ], EditorQuickOpenService.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(editor_manager_1.EditorManager),
        __metadata("design:type", editor_manager_1.EditorManager)
    ], EditorQuickOpenService.prototype, "editorManager", void 0);
    EditorQuickOpenService = __decorate([
        inversify_1.injectable()
    ], EditorQuickOpenService);
    return EditorQuickOpenService;
}());
exports.EditorQuickOpenService = EditorQuickOpenService;


/***/ }),

/***/ "./node_modules/@theia/editor/lib/browser/editor-variable-contribution.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@theia/editor/lib/browser/editor-variable-contribution.js ***!
  \********************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorVariableContribution = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var editor_manager_1 = __webpack_require__(/*! ./editor-manager */ "./node_modules/@theia/editor/lib/browser/editor-manager.js");
var EditorVariableContribution = /** @class */ (function () {
    function EditorVariableContribution() {
    }
    EditorVariableContribution.prototype.registerVariables = function (variables) {
        var _this = this;
        variables.registerVariable({
            name: 'lineNumber',
            description: 'The current line number in the currently opened file',
            resolve: function () {
                var editor = _this.getCurrentEditor();
                return editor ? "" + (editor.cursor.line + 1) : undefined;
            }
        });
        variables.registerVariable({
            name: 'selectedText',
            description: 'The current selected text in the active file',
            resolve: function () {
                var editor = _this.getCurrentEditor();
                return editor ? editor.document.getText(editor.selection) : undefined;
            }
        });
    };
    EditorVariableContribution.prototype.getCurrentEditor = function () {
        var currentEditor = this.editorManager.currentEditor;
        if (!currentEditor) {
            return undefined;
        }
        return currentEditor.editor;
    };
    __decorate([
        inversify_1.inject(editor_manager_1.EditorManager),
        __metadata("design:type", editor_manager_1.EditorManager)
    ], EditorVariableContribution.prototype, "editorManager", void 0);
    EditorVariableContribution = __decorate([
        inversify_1.injectable()
    ], EditorVariableContribution);
    return EditorVariableContribution;
}());
exports.EditorVariableContribution = EditorVariableContribution;


/***/ }),

/***/ "./node_modules/@theia/editor/lib/browser/editor-widget-factory.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@theia/editor/lib/browser/editor-widget-factory.js ***!
  \*************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorWidgetFactory = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var editor_widget_1 = __webpack_require__(/*! ./editor-widget */ "./node_modules/@theia/editor/lib/browser/editor-widget.js");
var editor_1 = __webpack_require__(/*! ./editor */ "./node_modules/@theia/editor/lib/browser/editor.js");
var EditorWidgetFactory = /** @class */ (function () {
    function EditorWidgetFactory() {
        this.id = EditorWidgetFactory_1.ID;
    }
    EditorWidgetFactory_1 = EditorWidgetFactory;
    EditorWidgetFactory.prototype.createWidget = function (options) {
        var uri = new uri_1.default(options.uri);
        return this.createEditor(uri);
    };
    EditorWidgetFactory.prototype.createEditor = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var textEditor, newEditor, labelListener;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editorProvider(uri)];
                    case 1:
                        textEditor = _a.sent();
                        newEditor = new editor_widget_1.EditorWidget(textEditor, this.selectionService);
                        this.setLabels(newEditor, uri);
                        labelListener = this.labelProvider.onDidChange(function (event) {
                            if (event.affects(uri)) {
                                _this.setLabels(newEditor, uri);
                            }
                        });
                        newEditor.onDispose(function () { return labelListener.dispose(); });
                        newEditor.id = this.id + ':' + uri.toString();
                        newEditor.title.closable = true;
                        newEditor.title.caption = uri.path.toString();
                        return [2 /*return*/, newEditor];
                }
            });
        });
    };
    EditorWidgetFactory.prototype.setLabels = function (editor, uri) {
        var icon = this.labelProvider.getIcon(uri);
        editor.title.label = this.labelProvider.getName(uri);
        editor.title.iconClass = icon + ' file-icon';
    };
    var EditorWidgetFactory_1;
    EditorWidgetFactory.ID = 'code-editor-opener';
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], EditorWidgetFactory.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(editor_1.TextEditorProvider),
        __metadata("design:type", Function)
    ], EditorWidgetFactory.prototype, "editorProvider", void 0);
    __decorate([
        inversify_1.inject(common_1.SelectionService),
        __metadata("design:type", common_1.SelectionService)
    ], EditorWidgetFactory.prototype, "selectionService", void 0);
    EditorWidgetFactory = EditorWidgetFactory_1 = __decorate([
        inversify_1.injectable()
    ], EditorWidgetFactory);
    return EditorWidgetFactory;
}());
exports.EditorWidgetFactory = EditorWidgetFactory;


/***/ }),

/***/ "./node_modules/@theia/editor/lib/browser/editor-widget.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@theia/editor/lib/browser/editor-widget.js ***!
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
exports.EditorWidget = void 0;
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var EditorWidget = /** @class */ (function (_super) {
    __extends(EditorWidget, _super);
    function EditorWidget(editor, selectionService) {
        var _this = _super.call(this, editor) || this;
        _this.editor = editor;
        _this.selectionService = selectionService;
        _this.addClass('theia-editor');
        _this.toDispose.push(_this.editor);
        _this.toDispose.push(_this.editor.onSelectionChanged(function () {
            if (_this.editor.isFocused()) {
                _this.selectionService.selection = _this.editor;
            }
        }));
        _this.toDispose.push(common_1.Disposable.create(function () {
            if (_this.selectionService.selection === _this.editor) {
                _this.selectionService.selection = undefined;
            }
        }));
        return _this;
    }
    Object.defineProperty(EditorWidget.prototype, "saveable", {
        get: function () {
            return this.editor.document;
        },
        enumerable: false,
        configurable: true
    });
    EditorWidget.prototype.getResourceUri = function () {
        return this.editor.getResourceUri();
    };
    EditorWidget.prototype.createMoveToUri = function (resourceUri) {
        return this.editor.createMoveToUri(resourceUri);
    };
    EditorWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.editor.focus();
        this.selectionService.selection = this.editor;
    };
    EditorWidget.prototype.onAfterAttach = function (msg) {
        _super.prototype.onAfterAttach.call(this, msg);
        if (this.isVisible) {
            this.editor.refresh();
        }
    };
    EditorWidget.prototype.onAfterShow = function (msg) {
        _super.prototype.onAfterShow.call(this, msg);
        this.editor.refresh();
    };
    EditorWidget.prototype.onResize = function (msg) {
        if (msg.width < 0 || msg.height < 0) {
            this.editor.resizeToFit();
        }
        else {
            this.editor.setSize(msg);
        }
    };
    EditorWidget.prototype.storeState = function () {
        return this.editor.storeViewState();
    };
    EditorWidget.prototype.restoreState = function (oldState) {
        this.editor.restoreViewState(oldState);
    };
    Object.defineProperty(EditorWidget.prototype, "onDispose", {
        get: function () {
            return this.toDispose.onDispose;
        },
        enumerable: false,
        configurable: true
    });
    return EditorWidget;
}(browser_1.BaseWidget));
exports.EditorWidget = EditorWidget;


/***/ }),

/***/ "./node_modules/@theia/editor/lib/browser/semantic-highlight/semantic-highlighting-service.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@theia/editor/lib/browser/semantic-highlight/semantic-highlighting-service.js ***!
  \****************************************************************************************************/
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
exports.Range = exports.Position = exports.SemanticHighlightingService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var base64_arraybuffer_1 = __webpack_require__(/*! base64-arraybuffer */ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js");
var vscode_languageserver_types_1 = __webpack_require__(/*! vscode-languageserver-types */ "./node_modules/vscode-languageserver-types/lib/esm/main.js");
Object.defineProperty(exports, "Position", { enumerable: true, get: function () { return vscode_languageserver_types_1.Position; } });
Object.defineProperty(exports, "Range", { enumerable: true, get: function () { return vscode_languageserver_types_1.Range; } });
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var logger_1 = __webpack_require__(/*! @theia/core/lib/common/logger */ "./node_modules/@theia/core/lib/common/logger.js");
var semantic_highlighting_feature_1 = __webpack_require__(/*! @theia/languages/lib/browser/semantic-highlighting/semantic-highlighting-feature */ "./node_modules/@theia/languages/lib/browser/semantic-highlighting/semantic-highlighting-feature.js");
/**
 * Service for registering and managing semantic highlighting decorations in the code editors for multiple languages.
 *
 * The current, default implementation does nothing at all, because the unique identifier of the `EditorDecoration` is not
 * exposed via the API. A working example is available as the `MonacoSemanticHighlightingService` from the `@theia/monaco` extension.
 */
var SemanticHighlightingService = /** @class */ (function () {
    function SemanticHighlightingService() {
        this.scopes = new Map();
    }
    /**
     * Registers the supported highlighting scopes for the given language. Returns with a disposable that will unregister the scopes from this service on `dispose`.
     * @param languageId the unique identifier of the language.
     * @param scopes a lookup table of the supported (TextMate) scopes received from the server. Semantic highlighting will be be supported for a language if the `scopes` is empty.
     */
    SemanticHighlightingService.prototype.register = function (languageId, scopes) {
        if (scopes && scopes.length > 0) {
            this.logger.info("Registering scopes for language: " + languageId + ".");
            if (this.scopes.has(languageId)) {
                this.logger.warn("The scopes are already registered for language: " + languageId + ".");
            }
            this.scopes.set(languageId, scopes.map(function (scope) { return scope.slice(0); }));
            this.logger.info("The scopes have been successfully registered for " + languageId + ".");
            var unregister_1 = this.unregister.bind(this);
            return disposable_1.Disposable.create(function () { return unregister_1(languageId); });
        }
        return disposable_1.Disposable.NULL;
    };
    SemanticHighlightingService.prototype.unregister = function (languageId) {
        this.logger.info("Unregistering scopes for language: " + languageId + ".");
        if (!this.scopes.has(languageId)) {
            this.logger.warn("No scopes were registered for language: " + languageId + ".");
        }
        this.scopes.delete(languageId);
        this.logger.info("The scopes have been successfully unregistered for " + languageId + ".");
    };
    /**
     * An array for TextMate scopes for the language.
     * @param languageId the unique ID of the language.
     * @param index the index of the TextMate scopes for the language.
     */
    SemanticHighlightingService.prototype.scopesFor = function (languageId, index) {
        if (index < 0) {
            throw new Error("index >= 0. " + index);
        }
        var scopes = this.scopes.get(languageId);
        if (!scopes) {
            throw new Error("No scopes were registered for language: " + languageId + ".");
        }
        if (scopes.length <= index) {
            throw new Error("Cannot find scopes by index. Language ID: " + languageId + ". Index: " + index + ". Scopes: " + scopes);
        }
        return scopes[index];
    };
    /**
     * Decorates the editor with the semantic highlighting scopes.
     * @param languageId the unique identifier of the language the resource belongs to.
     * @param uri the URI of the resource to decorate in the editor.
     * @param ranges the decoration ranges.
     */
    SemanticHighlightingService.prototype.decorate = function (languageId, uri, ranges) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /**
     * Disposes the service.
     */
    SemanticHighlightingService.prototype.dispose = function () {
        // NOOP
    };
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], SemanticHighlightingService.prototype, "logger", void 0);
    SemanticHighlightingService = __decorate([
        inversify_1.injectable()
    ], SemanticHighlightingService);
    return SemanticHighlightingService;
}());
exports.SemanticHighlightingService = SemanticHighlightingService;
(function (SemanticHighlightingService) {
    var LENGTH_SHIFT = 0x0000010;
    var SCOPE_MASK = 0x000FFFF;
    var Token;
    (function (Token) {
        function fromArray(tokens) {
            if (tokens.length % 3 !== 0) {
                throw new Error("\"Invalid tokens. 'tokens.length % 3 !== 0' Tokens length was: \" + " + tokens.length + ".");
            }
            var result = [];
            for (var i = 0; i < tokens.length; i = i + 3) {
                result.push({
                    character: tokens[i],
                    length: tokens[i + 1],
                    scope: tokens[i + 2]
                });
            }
            return result;
        }
        Token.fromArray = fromArray;
    })(Token = SemanticHighlightingService.Token || (SemanticHighlightingService.Token = {}));
    /**
     * Converts the compact, `base64` string token into an array of tokens.
     */
    function decode(tokens) {
        if (!tokens) {
            return [];
        }
        var buffer = base64_arraybuffer_1.decode(tokens);
        var dataView = new DataView(buffer);
        var result = [];
        for (var i = 0; i < buffer.byteLength / Uint32Array.BYTES_PER_ELEMENT; i = i + 2) {
            var character = dataView.getUint32(i * Uint32Array.BYTES_PER_ELEMENT);
            var lengthAndScope = dataView.getUint32((i + 1) * Uint32Array.BYTES_PER_ELEMENT);
            var length_1 = lengthAndScope >>> LENGTH_SHIFT;
            var scope = lengthAndScope & SCOPE_MASK;
            result.push({
                character: character,
                length: length_1,
                scope: scope
            });
        }
        return result;
    }
    SemanticHighlightingService.decode = decode;
    /**
     * Encodes the array of tokens into a compact `base64` string representation.
     */
    function encode(tokens) {
        if (!tokens || tokens.length === 0) {
            return '';
        }
        var buffer = new ArrayBuffer(tokens.length * 2 * Uint32Array.BYTES_PER_ELEMENT);
        var dataView = new DataView(buffer);
        var j = 0;
        for (var i = 0; i < tokens.length; i++) {
            var _a = tokens[i], character = _a.character, length_2 = _a.length, scope = _a.scope;
            var lengthAndScope = length_2;
            lengthAndScope = lengthAndScope << LENGTH_SHIFT;
            lengthAndScope |= scope;
            dataView.setUint32(j++ * Uint32Array.BYTES_PER_ELEMENT, character);
            dataView.setUint32(j++ * Uint32Array.BYTES_PER_ELEMENT, lengthAndScope);
        }
        return base64_arraybuffer_1.encode(buffer);
    }
    SemanticHighlightingService.encode = encode;
    /**
     * Creates a new text document feature to handle the semantic highlighting capabilities of the protocol.
     * When the feature gets initialized, it delegates to the semantic highlighting service and registers the TextMate scopes received as part of the server capabilities.
     * Plus, each time when a notification is received by the client, the semantic highlighting service will be used as the consumer and the highlighting information
     * will be used to decorate the text editor.
     */
    function createNewFeature(service, client) {
        var languageId = client.languageId;
        var initializeCallback = function (id, scopes) { return service.register(id, scopes); };
        var consumer = function (params) {
            var toRanges = function (tuple) {
                var _a = __read(tuple, 2), line = _a[0], tokens = _a[1];
                if (!tokens) {
                    return [
                        {
                            start: vscode_languageserver_types_1.Position.create(line, 0),
                            end: vscode_languageserver_types_1.Position.create(line, 0),
                        }
                    ];
                }
                return SemanticHighlightingService.decode(tokens).map(function (token) { return ({
                    start: vscode_languageserver_types_1.Position.create(line, token.character),
                    end: vscode_languageserver_types_1.Position.create(line, token.character + token.length),
                    scope: token.scope
                }); });
            };
            var ranges = params.lines.map(function (line) { return [line.line, line.tokens]; }).map(toRanges).reduce(function (acc, current) { return acc.concat(current); }, []);
            var uri = new uri_1.default(params.textDocument.uri);
            service.decorate(languageId, uri, ranges);
        };
        return new semantic_highlighting_feature_1.SemanticHighlightFeature(client, initializeCallback, consumer);
    }
    SemanticHighlightingService.createNewFeature = createNewFeature;
})(SemanticHighlightingService = exports.SemanticHighlightingService || (exports.SemanticHighlightingService = {}));
exports.SemanticHighlightingService = SemanticHighlightingService;


/***/ }),

/***/ "./node_modules/@theia/editor/lib/browser/supported-encodings.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@theia/editor/lib/browser/supported-encodings.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Xuye Cai and others.
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
exports.SUPPORTED_ENCODINGS = void 0;
// copied from vscode: https://github.com/microsoft/vscode/blob/master/src/vs/workbench/services/textfile/common/textfiles.ts
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
exports.SUPPORTED_ENCODINGS = {
    utf8: {
        labelLong: 'UTF-8',
        labelShort: 'UTF-8',
        order: 1,
        alias: 'utf8bom'
    },
    utf8bom: {
        labelLong: 'UTF-8 with BOM',
        labelShort: 'UTF-8 with BOM',
        encodeOnly: true,
        order: 2,
        alias: 'utf8'
    },
    utf16le: {
        labelLong: 'UTF-16 LE',
        labelShort: 'UTF-16 LE',
        order: 3
    },
    utf16be: {
        labelLong: 'UTF-16 BE',
        labelShort: 'UTF-16 BE',
        order: 4
    },
    windows1252: {
        labelLong: 'Western (Windows 1252)',
        labelShort: 'Windows 1252',
        order: 5
    },
    iso88591: {
        labelLong: 'Western (ISO 8859-1)',
        labelShort: 'ISO 8859-1',
        order: 6
    },
    iso88593: {
        labelLong: 'Western (ISO 8859-3)',
        labelShort: 'ISO 8859-3',
        order: 7
    },
    iso885915: {
        labelLong: 'Western (ISO 8859-15)',
        labelShort: 'ISO 8859-15',
        order: 8
    },
    macroman: {
        labelLong: 'Western (Mac Roman)',
        labelShort: 'Mac Roman',
        order: 9
    },
    cp437: {
        labelLong: 'DOS (CP 437)',
        labelShort: 'CP437',
        order: 10
    },
    windows1256: {
        labelLong: 'Arabic (Windows 1256)',
        labelShort: 'Windows 1256',
        order: 11
    },
    iso88596: {
        labelLong: 'Arabic (ISO 8859-6)',
        labelShort: 'ISO 8859-6',
        order: 12
    },
    windows1257: {
        labelLong: 'Baltic (Windows 1257)',
        labelShort: 'Windows 1257',
        order: 13
    },
    iso88594: {
        labelLong: 'Baltic (ISO 8859-4)',
        labelShort: 'ISO 8859-4',
        order: 14
    },
    iso885914: {
        labelLong: 'Celtic (ISO 8859-14)',
        labelShort: 'ISO 8859-14',
        order: 15
    },
    windows1250: {
        labelLong: 'Central European (Windows 1250)',
        labelShort: 'Windows 1250',
        order: 16
    },
    iso88592: {
        labelLong: 'Central European (ISO 8859-2)',
        labelShort: 'ISO 8859-2',
        order: 17
    },
    cp852: {
        labelLong: 'Central European (CP 852)',
        labelShort: 'CP 852',
        order: 18
    },
    windows1251: {
        labelLong: 'Cyrillic (Windows 1251)',
        labelShort: 'Windows 1251',
        order: 19
    },
    cp866: {
        labelLong: 'Cyrillic (CP 866)',
        labelShort: 'CP 866',
        order: 20
    },
    iso88595: {
        labelLong: 'Cyrillic (ISO 8859-5)',
        labelShort: 'ISO 8859-5',
        order: 21
    },
    koi8r: {
        labelLong: 'Cyrillic (KOI8-R)',
        labelShort: 'KOI8-R',
        order: 22
    },
    koi8u: {
        labelLong: 'Cyrillic (KOI8-U)',
        labelShort: 'KOI8-U',
        order: 23
    },
    iso885913: {
        labelLong: 'Estonian (ISO 8859-13)',
        labelShort: 'ISO 8859-13',
        order: 24
    },
    windows1253: {
        labelLong: 'Greek (Windows 1253)',
        labelShort: 'Windows 1253',
        order: 25
    },
    iso88597: {
        labelLong: 'Greek (ISO 8859-7)',
        labelShort: 'ISO 8859-7',
        order: 26
    },
    windows1255: {
        labelLong: 'Hebrew (Windows 1255)',
        labelShort: 'Windows 1255',
        order: 27
    },
    iso88598: {
        labelLong: 'Hebrew (ISO 8859-8)',
        labelShort: 'ISO 8859-8',
        order: 28
    },
    iso885910: {
        labelLong: 'Nordic (ISO 8859-10)',
        labelShort: 'ISO 8859-10',
        order: 29
    },
    iso885916: {
        labelLong: 'Romanian (ISO 8859-16)',
        labelShort: 'ISO 8859-16',
        order: 30
    },
    windows1254: {
        labelLong: 'Turkish (Windows 1254)',
        labelShort: 'Windows 1254',
        order: 31
    },
    iso88599: {
        labelLong: 'Turkish (ISO 8859-9)',
        labelShort: 'ISO 8859-9',
        order: 32
    },
    windows1258: {
        labelLong: 'Vietnamese (Windows 1258)',
        labelShort: 'Windows 1258',
        order: 33
    },
    gbk: {
        labelLong: 'Simplified Chinese (GBK)',
        labelShort: 'GBK',
        order: 34
    },
    gb18030: {
        labelLong: 'Simplified Chinese (GB18030)',
        labelShort: 'GB18030',
        order: 35
    },
    cp950: {
        labelLong: 'Traditional Chinese (Big5)',
        labelShort: 'Big5',
        order: 36
    },
    big5hkscs: {
        labelLong: 'Traditional Chinese (Big5-HKSCS)',
        labelShort: 'Big5-HKSCS',
        order: 37
    },
    shiftjis: {
        labelLong: 'Japanese (Shift JIS)',
        labelShort: 'Shift JIS',
        order: 38
    },
    eucjp: {
        labelLong: 'Japanese (EUC-JP)',
        labelShort: 'EUC-JP',
        order: 39
    },
    euckr: {
        labelLong: 'Korean (EUC-KR)',
        labelShort: 'EUC-KR',
        order: 40
    },
    windows874: {
        labelLong: 'Thai (Windows 874)',
        labelShort: 'Windows 874',
        order: 41
    },
    iso885911: {
        labelLong: 'Latin/Thai (ISO 8859-11)',
        labelShort: 'ISO 8859-11',
        order: 42
    },
    koi8ru: {
        labelLong: 'Cyrillic (KOI8-RU)',
        labelShort: 'KOI8-RU',
        order: 43
    },
    koi8t: {
        labelLong: 'Tajik (KOI8-T)',
        labelShort: 'KOI8-T',
        order: 44
    },
    gb2312: {
        labelLong: 'Simplified Chinese (GB 2312)',
        labelShort: 'GB 2312',
        order: 45
    },
    cp865: {
        labelLong: 'Nordic DOS (CP 865)',
        labelShort: 'CP 865',
        order: 46
    },
    cp850: {
        labelLong: 'Western European DOS (CP 850)',
        labelShort: 'CP 850',
        order: 47
    }
};


/***/ }),

/***/ "./node_modules/@theia/editor/src/browser/style/index.css":
/*!****************************************************************!*\
  !*** ./node_modules/@theia/editor/src/browser/style/index.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./index.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/editor/src/browser/style/index.css");

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

/***/ "./node_modules/@theia/languages/lib/browser/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@theia/languages/lib/browser/index.js ***!
  \************************************************************/
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./language-client-services */ "./node_modules/@theia/languages/lib/browser/language-client-services.js"), exports);
__exportStar(__webpack_require__(/*! ./language-client-factory */ "./node_modules/@theia/languages/lib/browser/language-client-factory.js"), exports);
__exportStar(__webpack_require__(/*! ./language-client-contribution */ "./node_modules/@theia/languages/lib/browser/language-client-contribution.js"), exports);
__exportStar(__webpack_require__(/*! ./languages-frontend-contribution */ "./node_modules/@theia/languages/lib/browser/languages-frontend-contribution.js"), exports);
__exportStar(__webpack_require__(/*! ./languages-frontend-module */ "./node_modules/@theia/languages/lib/browser/languages-frontend-module.js"), exports);


/***/ }),

/***/ "./node_modules/@theia/languages/lib/browser/semantic-highlighting/semantic-highlighting-feature.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@theia/languages/lib/browser/semantic-highlighting/semantic-highlighting-feature.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemanticHighlightFeature = void 0;
var uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common/ */ "./node_modules/@theia/core/lib/common/index.js");
var language_client_services_1 = __webpack_require__(/*! ../language-client-services */ "./node_modules/@theia/languages/lib/browser/language-client-services.js");
var semantic_highlighting_protocol_1 = __webpack_require__(/*! ./semantic-highlighting-protocol */ "./node_modules/@theia/languages/lib/browser/semantic-highlighting/semantic-highlighting-protocol.js");
// NOTE: This module can be removed, or at least can be simplified once the semantic highlighting will become the part of the LSP.
// https://github.com/Microsoft/vscode-languageserver-node/issues/368
/**
 * @deprecated since 1.4.0 - in order to remove monaco-languageclient, use VS Code extensions to contribute language smartness:
 * https://code.visualstudio.com/api/language-extensions/language-server-extension-guide
 */
var SemanticHighlightFeature = /** @class */ (function (_super) {
    __extends(SemanticHighlightFeature, _super);
    function SemanticHighlightFeature(client, initializeCallback, consumer) {
        var _this = _super.call(this, client, semantic_highlighting_protocol_1.SemanticHighlight.type) || this;
        _this.initializeCallback = initializeCallback;
        _this.consumer = consumer;
        _this.languageId = client.languageId;
        _this.toDispose = new common_1.DisposableCollection();
        return _this;
    }
    SemanticHighlightFeature.prototype.fillClientCapabilities = function (capabilities) {
        if (!capabilities.textDocument) {
            capabilities.textDocument = {};
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        capabilities.textDocument.semanticHighlightingCapabilities = {
            semanticHighlighting: true
        };
    };
    SemanticHighlightFeature.prototype.initialize = function (capabilities, documentSelector) {
        if (!documentSelector) {
            return;
        }
        var capabilitiesExt = capabilities;
        if (capabilitiesExt.semanticHighlighting) {
            var scopes = capabilitiesExt.semanticHighlighting.scopes;
            if (scopes && scopes.length > 0) {
                this.toDispose.push(this.initializeCallback(this.languageId, scopes));
                var id = uuid_1.v4();
                this.register(this.messages, {
                    id: id,
                    registerOptions: Object.assign({}, { documentSelector: documentSelector }, capabilitiesExt.semanticHighlighting)
                });
            }
        }
    };
    SemanticHighlightFeature.prototype.registerLanguageProvider = function () {
        var _this = this;
        this._client.onNotification(semantic_highlighting_protocol_1.SemanticHighlight.type, this.consumeSemanticHighlighting.bind(this));
        return [language_client_services_1.Disposable.create(function () { return _this.toDispose.dispose(); }), {}];
    };
    SemanticHighlightFeature.prototype.consumeSemanticHighlighting = function (params) {
        this.consumer(params);
    };
    return SemanticHighlightFeature;
}(language_client_services_1.TextDocumentFeature));
exports.SemanticHighlightFeature = SemanticHighlightFeature;


/***/ }),

/***/ "./node_modules/@theia/languages/lib/browser/semantic-highlighting/semantic-highlighting-protocol.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@theia/languages/lib/browser/semantic-highlighting/semantic-highlighting-protocol.js ***!
  \***********************************************************************************************************/
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
exports.SemanticHighlight = void 0;
var __1 = __webpack_require__(/*! ../ */ "./node_modules/@theia/languages/lib/browser/index.js");
var SemanticHighlight;
(function (SemanticHighlight) {
    SemanticHighlight.type = new __1.NotificationType('textDocument/semanticHighlighting');
})(SemanticHighlight = exports.SemanticHighlight || (exports.SemanticHighlight = {}));


/***/ }),

/***/ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(){
  "use strict";

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  // Use a lookup table to find the index.
  var lookup = new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.length, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i+1)];
      encoded3 = lookup[base64.charCodeAt(i+2)];
      encoded4 = lookup[base64.charCodeAt(i+3)];

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})();


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/editor/src/browser/style/index.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/editor/src/browser/style/index.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2020 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-editor {\n    height: 100%;\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=11.bundle.js.map