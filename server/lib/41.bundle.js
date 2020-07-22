(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/@theia/search-in-workspace/lib/browser/in-memory-text-resource.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@theia/search-in-workspace/lib/browser/in-memory-text-resource.js ***!
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
exports.InMemoryTextResourceResolver = exports.InMemoryTextResource = exports.MEMORY_TEXT = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
exports.MEMORY_TEXT = 'mem-txt';
var InMemoryTextResource = /** @class */ (function () {
    function InMemoryTextResource(uri) {
        this.uri = uri;
    }
    InMemoryTextResource.prototype.readContents = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.uri.query];
            });
        });
    };
    InMemoryTextResource.prototype.dispose = function () { };
    return InMemoryTextResource;
}());
exports.InMemoryTextResource = InMemoryTextResource;
var InMemoryTextResourceResolver = /** @class */ (function () {
    function InMemoryTextResourceResolver() {
    }
    InMemoryTextResourceResolver.prototype.resolve = function (uri) {
        if (uri.scheme !== exports.MEMORY_TEXT) {
            throw new Error("Expected a URI with " + exports.MEMORY_TEXT + " scheme. Was: " + uri + ".");
        }
        return new InMemoryTextResource(uri);
    };
    InMemoryTextResourceResolver = __decorate([
        inversify_1.injectable()
    ], InMemoryTextResourceResolver);
    return InMemoryTextResourceResolver;
}());
exports.InMemoryTextResourceResolver = InMemoryTextResourceResolver;


/***/ }),

/***/ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-context-key-service.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-context-key-service.js ***!
  \********************************************************************************************************/
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
exports.SearchInWorkspaceContextKeyService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var context_key_service_1 = __webpack_require__(/*! @theia/core/lib/browser/context-key-service */ "./node_modules/@theia/core/lib/browser/context-key-service.js");
var SearchInWorkspaceContextKeyService = /** @class */ (function () {
    function SearchInWorkspaceContextKeyService() {
    }
    Object.defineProperty(SearchInWorkspaceContextKeyService.prototype, "searchViewletVisible", {
        get: function () {
            return this._searchViewletVisible;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SearchInWorkspaceContextKeyService.prototype, "searchViewletFocus", {
        get: function () {
            return this._searchViewletFocus;
        },
        enumerable: false,
        configurable: true
    });
    SearchInWorkspaceContextKeyService.prototype.setSearchInputBoxFocus = function (searchInputBoxFocus) {
        this.searchInputBoxFocus.set(searchInputBoxFocus);
        this.updateInputBoxFocus();
    };
    SearchInWorkspaceContextKeyService.prototype.setReplaceInputBoxFocus = function (replaceInputBoxFocus) {
        this.replaceInputBoxFocus.set(replaceInputBoxFocus);
        this.updateInputBoxFocus();
    };
    SearchInWorkspaceContextKeyService.prototype.setPatternIncludesInputBoxFocus = function (patternIncludesInputBoxFocus) {
        this.patternIncludesInputBoxFocus.set(patternIncludesInputBoxFocus);
        this.updateInputBoxFocus();
    };
    SearchInWorkspaceContextKeyService.prototype.setPatternExcludesInputBoxFocus = function (patternExcludesInputBoxFocus) {
        this.patternExcludesInputBoxFocus.set(patternExcludesInputBoxFocus);
        this.updateInputBoxFocus();
    };
    SearchInWorkspaceContextKeyService.prototype.updateInputBoxFocus = function () {
        this.inputBoxFocus.set(this.searchInputBoxFocus.get() ||
            this.replaceInputBoxFocus.get() ||
            this.patternIncludesInputBoxFocus.get() ||
            this.patternExcludesInputBoxFocus.get());
    };
    Object.defineProperty(SearchInWorkspaceContextKeyService.prototype, "replaceActive", {
        get: function () {
            return this._replaceActive;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SearchInWorkspaceContextKeyService.prototype, "hasSearchResult", {
        get: function () {
            return this._hasSearchResult;
        },
        enumerable: false,
        configurable: true
    });
    SearchInWorkspaceContextKeyService.prototype.init = function () {
        this._searchViewletVisible = this.contextKeyService.createKey('searchViewletVisible', false);
        this._searchViewletFocus = this.contextKeyService.createKey('searchViewletFocus', false);
        this.inputBoxFocus = this.contextKeyService.createKey('inputBoxFocus', false);
        this.searchInputBoxFocus = this.contextKeyService.createKey('searchInputBoxFocus', false);
        this.replaceInputBoxFocus = this.contextKeyService.createKey('replaceInputBoxFocus', false);
        this.patternIncludesInputBoxFocus = this.contextKeyService.createKey('patternIncludesInputBoxFocus', false);
        this.patternExcludesInputBoxFocus = this.contextKeyService.createKey('patternExcludesInputBoxFocus', false);
        this._replaceActive = this.contextKeyService.createKey('replaceActive', false);
        this._hasSearchResult = this.contextKeyService.createKey('hasSearchResult', false);
    };
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], SearchInWorkspaceContextKeyService.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SearchInWorkspaceContextKeyService.prototype, "init", null);
    SearchInWorkspaceContextKeyService = __decorate([
        inversify_1.injectable()
    ], SearchInWorkspaceContextKeyService);
    return SearchInWorkspaceContextKeyService;
}());
exports.SearchInWorkspaceContextKeyService = SearchInWorkspaceContextKeyService;


/***/ }),

/***/ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-preferences.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-preferences.js ***!
  \************************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindSearchInWorkspacePreferences = exports.createSearchInWorkspacePreferences = exports.SearchInWorkspacePreferences = exports.SearchInWorkspaceConfiguration = exports.searchInWorkspacePreferencesSchema = void 0;
var preferences_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences */ "./node_modules/@theia/core/lib/browser/preferences/index.js");
exports.searchInWorkspacePreferencesSchema = {
    type: 'object',
    properties: {
        'search.lineNumbers': {
            description: 'Controls whether to show line numbers for search results.',
            default: false,
            type: 'boolean',
        },
        'search.collapseResults': {
            description: 'Controls whether the search results will be collapsed or expanded.',
            default: 'auto',
            type: 'string',
            enum: ['auto', 'alwaysCollapse', 'alwaysExpand'],
        }
    }
};
var SearchInWorkspaceConfiguration = /** @class */ (function () {
    function SearchInWorkspaceConfiguration() {
    }
    return SearchInWorkspaceConfiguration;
}());
exports.SearchInWorkspaceConfiguration = SearchInWorkspaceConfiguration;
exports.SearchInWorkspacePreferences = Symbol('SearchInWorkspacePreferences');
function createSearchInWorkspacePreferences(preferences) {
    return preferences_1.createPreferenceProxy(preferences, exports.searchInWorkspacePreferencesSchema);
}
exports.createSearchInWorkspacePreferences = createSearchInWorkspacePreferences;
function bindSearchInWorkspacePreferences(bind) {
    bind(exports.SearchInWorkspacePreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(preferences_1.PreferenceService);
        return createSearchInWorkspacePreferences(preferences);
    }).inSingletonScope();
    bind(preferences_1.PreferenceContribution).toConstantValue({ schema: exports.searchInWorkspacePreferencesSchema });
}
exports.bindSearchInWorkspacePreferences = bindSearchInWorkspacePreferences;


/***/ }),

/***/ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-result-tree-widget.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-result-tree-widget.js ***!
  \*******************************************************************************************************/
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
exports.SearchInWorkspaceResultTreeWidget = exports.SearchInWorkspaceResultLineNode = exports.SearchInWorkspaceFileNode = exports.SearchInWorkspaceRootFolderNode = exports.SearchInWorkspaceRoot = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var browser_3 = __webpack_require__(/*! @theia/workspace/lib/browser */ "./node_modules/@theia/workspace/lib/browser/index.js");
var browser_4 = __webpack_require__(/*! @theia/filesystem/lib/browser */ "./node_modules/@theia/filesystem/lib/browser/index.js");
var search_in_workspace_service_1 = __webpack_require__(/*! ./search-in-workspace-service */ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-service.js");
var in_memory_text_resource_1 = __webpack_require__(/*! ./in-memory-text-resource */ "./node_modules/@theia/search-in-workspace/lib/browser/in-memory-text-resource.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var search_in_workspace_preferences_1 = __webpack_require__(/*! ./search-in-workspace-preferences */ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-preferences.js");
var core_2 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var color_registry_1 = __webpack_require__(/*! @theia/core/lib/browser/color-registry */ "./node_modules/@theia/core/lib/browser/color-registry.js");
var ROOT_ID = 'ResultTree';
var SearchInWorkspaceRoot;
(function (SearchInWorkspaceRoot) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(node) {
        return browser_1.CompositeTreeNode.is(node) && node.id === ROOT_ID;
    }
    SearchInWorkspaceRoot.is = is;
})(SearchInWorkspaceRoot = exports.SearchInWorkspaceRoot || (exports.SearchInWorkspaceRoot = {}));
var SearchInWorkspaceRootFolderNode;
(function (SearchInWorkspaceRootFolderNode) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(node) {
        return browser_1.ExpandableTreeNode.is(node) && browser_1.SelectableTreeNode.is(node) && 'path' in node && 'folderUri' in node && !('fileUri' in node);
    }
    SearchInWorkspaceRootFolderNode.is = is;
})(SearchInWorkspaceRootFolderNode = exports.SearchInWorkspaceRootFolderNode || (exports.SearchInWorkspaceRootFolderNode = {}));
var SearchInWorkspaceFileNode;
(function (SearchInWorkspaceFileNode) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(node) {
        return browser_1.ExpandableTreeNode.is(node) && browser_1.SelectableTreeNode.is(node) && 'path' in node && 'fileUri' in node && !('folderUri' in node);
    }
    SearchInWorkspaceFileNode.is = is;
})(SearchInWorkspaceFileNode = exports.SearchInWorkspaceFileNode || (exports.SearchInWorkspaceFileNode = {}));
var SearchInWorkspaceResultLineNode;
(function (SearchInWorkspaceResultLineNode) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(node) {
        return browser_1.SelectableTreeNode.is(node) && 'line' in node && 'character' in node && 'lineText' in node;
    }
    SearchInWorkspaceResultLineNode.is = is;
})(SearchInWorkspaceResultLineNode = exports.SearchInWorkspaceResultLineNode || (exports.SearchInWorkspaceResultLineNode = {}));
var SearchInWorkspaceResultTreeWidget = /** @class */ (function (_super) {
    __extends(SearchInWorkspaceResultTreeWidget, _super);
    function SearchInWorkspaceResultTreeWidget(props, model, contextMenuRenderer) {
        var _this = _super.call(this, props, model, contextMenuRenderer) || this;
        _this.props = props;
        _this.model = model;
        _this.contextMenuRenderer = contextMenuRenderer;
        _this._showReplaceButtons = false;
        _this._replaceTerm = '';
        _this.searchTerm = '';
        _this.appliedDecorations = new Map();
        _this.changeEmitter = new core_1.Emitter();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _this.focusInputEmitter = new core_1.Emitter();
        _this.remove = function (node, e) { return _this.doRemove(node, e); };
        model.root = {
            id: ROOT_ID,
            parent: undefined,
            visible: false,
            children: []
        };
        _this.toDispose.push(model.onSelectionChanged(function (nodes) {
            var node = nodes[0];
            if (SearchInWorkspaceResultLineNode.is(node)) {
                _this.doOpen(node, true);
            }
        }));
        _this.resultTree = new Map();
        _this.toDispose.push(model.onNodeRefreshed(function () { return _this.changeEmitter.fire(_this.resultTree); }));
        return _this;
    }
    SearchInWorkspaceResultTreeWidget.prototype.init = function () {
        var _this = this;
        _super.prototype.init.call(this);
        this.addClass('resultContainer');
        this.toDispose.push(this.changeEmitter);
        this.toDispose.push(this.focusInputEmitter);
        this.toDispose.push(this.editorManager.onActiveEditorChanged(function () {
            _this.updateCurrentEditorDecorations();
        }));
        this.toDispose.push(this.searchInWorkspacePreferences.onPreferenceChanged(function () {
            _this.update();
        }));
    };
    Object.defineProperty(SearchInWorkspaceResultTreeWidget.prototype, "fileNumber", {
        get: function () {
            var e_1, _a;
            var num = 0;
            try {
                for (var _b = __values(this.resultTree.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var rootFolderNode = _c.value;
                    num += rootFolderNode.children.length;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SearchInWorkspaceResultTreeWidget.prototype, "showReplaceButtons", {
        set: function (srb) {
            this._showReplaceButtons = srb;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SearchInWorkspaceResultTreeWidget.prototype, "replaceTerm", {
        set: function (rt) {
            this._replaceTerm = rt;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SearchInWorkspaceResultTreeWidget.prototype, "onChange", {
        get: function () {
            return this.changeEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SearchInWorkspaceResultTreeWidget.prototype, "onFocusInput", {
        get: function () {
            return this.focusInputEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    SearchInWorkspaceResultTreeWidget.prototype.collapseAll = function () {
        var _this = this;
        this.resultTree.forEach(function (rootFolderNode) {
            rootFolderNode.children.forEach(function (fileNode) { return _this.expansionService.collapseNode(fileNode); });
            if (rootFolderNode.visible) {
                _this.expansionService.collapseNode(rootFolderNode);
            }
        });
    };
    SearchInWorkspaceResultTreeWidget.prototype.search = function (searchTerm, searchOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var collapseValue, cancelIndicator, token, progress, pendingRefreshTimeout, searchId;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.searchTerm = searchTerm;
                        collapseValue = this.searchInWorkspacePreferences['search.collapseResults'];
                        this.resultTree.clear();
                        if (this.cancelIndicator) {
                            this.cancelIndicator.cancel();
                        }
                        if (searchTerm === '') {
                            this.refreshModelChildren();
                            return [2 /*return*/];
                        }
                        this.cancelIndicator = new core_1.CancellationTokenSource();
                        cancelIndicator = this.cancelIndicator;
                        token = this.cancelIndicator.token;
                        return [4 /*yield*/, this.progressService.showProgress({ text: "search: " + searchTerm, options: { location: 'search' } })];
                    case 1:
                        progress = _a.sent();
                        token.onCancellationRequested(function () {
                            progress.cancel();
                            if (searchId) {
                                _this.searchService.cancel(searchId);
                            }
                            _this.cancelIndicator = undefined;
                            _this.changeEmitter.fire(_this.resultTree);
                        });
                        return [4 /*yield*/, this.searchService.search(searchTerm, {
                                onResult: function (aSearchId, result) {
                                    var e_2, _a;
                                    if (token.isCancellationRequested || aSearchId !== searchId) {
                                        return;
                                    }
                                    var path = _this.filenameAndPath(result.root, result.fileUri).path;
                                    var tree = _this.resultTree;
                                    var rootFolderNode = tree.get(result.root);
                                    if (!rootFolderNode) {
                                        rootFolderNode = _this.createRootFolderNode(result.root);
                                        tree.set(result.root, rootFolderNode);
                                    }
                                    var fileNode = rootFolderNode.children.find(function (f) { return f.fileUri === result.fileUri; });
                                    if (!fileNode) {
                                        fileNode = _this.createFileNode(result.root, path, result.fileUri, rootFolderNode);
                                        rootFolderNode.children.push(fileNode);
                                    }
                                    var _loop_1 = function (match) {
                                        var line = _this.createResultLineNode(result, match, fileNode);
                                        if (fileNode.children.findIndex(function (lineNode) { return lineNode.id === line.id; }) < 0) {
                                            fileNode.children.push(line);
                                        }
                                    };
                                    try {
                                        for (var _b = __values(result.matches), _c = _b.next(); !_c.done; _c = _b.next()) {
                                            var match = _c.value;
                                            _loop_1(match);
                                        }
                                    }
                                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                    finally {
                                        try {
                                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                        }
                                        finally { if (e_2) throw e_2.error; }
                                    }
                                    _this.collapseFileNode(fileNode, collapseValue);
                                    if (pendingRefreshTimeout) {
                                        clearTimeout(pendingRefreshTimeout);
                                    }
                                    pendingRefreshTimeout = setTimeout(function () { return _this.refreshModelChildren(); }, 100);
                                },
                                onDone: function () {
                                    cancelIndicator.cancel();
                                    // Sort the result map by folder URI.
                                    _this.resultTree = new Map(__spread(_this.resultTree).sort(function (a, b) { return _this.compare(a[1].folderUri, b[1].folderUri); }));
                                    // Update the list of children nodes, sorting them by their file URI.
                                    Array.from(_this.resultTree.values())
                                        .forEach(function (folder) {
                                        folder.children = folder.children.sort(function (a, b) { return _this.compare(a.fileUri, b.fileUri); });
                                    });
                                    _this.refreshModelChildren();
                                }
                            }, searchOptions).catch(function () { return undefined; })];
                    case 2:
                        searchId = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchInWorkspaceResultTreeWidget.prototype.focusFirstResult = function () {
        if (SearchInWorkspaceRoot.is(this.model.root) && this.model.root.children.length > 0) {
            var node = this.model.root.children[0];
            if (browser_1.SelectableTreeNode.is(node)) {
                this.node.focus();
                this.model.selectNode(node);
            }
        }
    };
    /**
     * Collapse the search-in-workspace file node
     * based on the preference value.
     */
    SearchInWorkspaceResultTreeWidget.prototype.collapseFileNode = function (node, preferenceValue) {
        if (preferenceValue === 'auto' && node.children.length >= 10) {
            node.expanded = false;
        }
        else if (preferenceValue === 'alwaysCollapse') {
            node.expanded = false;
        }
        else if (preferenceValue === 'alwaysExpand') {
            node.expanded = true;
        }
    };
    SearchInWorkspaceResultTreeWidget.prototype.handleUp = function (event) {
        if (!this.model.getPrevSelectableNode(this.model.selectedNodes[0])) {
            this.focusInputEmitter.fire(true);
        }
        else {
            _super.prototype.handleUp.call(this, event);
        }
    };
    SearchInWorkspaceResultTreeWidget.prototype.refreshModelChildren = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (SearchInWorkspaceRoot.is(this.model.root)) {
                    this.model.root.children = Array.from(this.resultTree.values());
                    this.model.refresh();
                    this.updateCurrentEditorDecorations();
                }
                return [2 /*return*/];
            });
        });
    };
    SearchInWorkspaceResultTreeWidget.prototype.updateCurrentEditorDecorations = function () {
        var _this = this;
        this.shell.allTabBars.map(function (tb) {
            var currentTitle = tb.currentTitle;
            if (currentTitle && currentTitle.owner instanceof browser_2.EditorWidget) {
                var widget_1 = currentTitle.owner;
                var fileNodes = _this.getFileNodesByUri(widget_1.editor.uri);
                if (fileNodes.length > 0) {
                    fileNodes.forEach(function (node) {
                        _this.decorateEditor(node, widget_1);
                    });
                }
                else {
                    _this.decorateEditor(undefined, widget_1);
                }
            }
        });
        var currentWidget = this.editorManager.currentEditor;
        if (currentWidget) {
            var fileNodes = this.getFileNodesByUri(currentWidget.editor.uri);
            fileNodes.forEach(function (node) {
                _this.decorateEditor(node, currentWidget);
            });
        }
    };
    SearchInWorkspaceResultTreeWidget.prototype.createRootFolderNode = function (rootUri) {
        var uri = new uri_1.default(rootUri);
        return {
            selected: false,
            path: uri.path.toString(),
            folderUri: rootUri,
            children: [],
            expanded: true,
            id: rootUri,
            parent: this.model.root,
            visible: this.workspaceService.isMultiRootWorkspaceOpened
        };
    };
    SearchInWorkspaceResultTreeWidget.prototype.createFileNode = function (rootUri, path, fileUri, parent) {
        return {
            selected: false,
            path: path,
            children: [],
            expanded: true,
            id: rootUri + "::" + fileUri,
            parent: parent,
            fileUri: fileUri
        };
    };
    SearchInWorkspaceResultTreeWidget.prototype.createResultLineNode = function (result, match, fileNode) {
        return __assign(__assign(__assign({}, result), match), { selected: false, id: result.fileUri + '-' + match.line + '-' + match.character + '-' + match.length, name: typeof match.lineText === 'string' ? match.lineText : match.lineText.text, parent: fileNode });
    };
    SearchInWorkspaceResultTreeWidget.prototype.getFileNodesByUri = function (uri) {
        var e_3, _a, e_4, _b;
        var nodes = [];
        var fileUri = uri.withScheme('file').toString();
        try {
            for (var _c = __values(this.resultTree.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var rootFolderNode = _d.value;
                var rootUri = new uri_1.default(rootFolderNode.path).withScheme('file');
                if (rootUri.isEqualOrParent(uri)) {
                    try {
                        for (var _e = (e_4 = void 0, __values(rootFolderNode.children)), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var fileNode = _f.value;
                            if (fileNode.fileUri === fileUri) {
                                nodes.push(fileNode);
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return nodes;
    };
    SearchInWorkspaceResultTreeWidget.prototype.filenameAndPath = function (rootUriStr, uriStr) {
        var uri = new uri_1.default(uriStr);
        var relativePath = new uri_1.default(rootUriStr).relative(uri.parent);
        return {
            name: uri.displayName,
            path: relativePath ? relativePath.toString() : ''
        };
    };
    SearchInWorkspaceResultTreeWidget.prototype.renderCaption = function (node, props) {
        if (SearchInWorkspaceRootFolderNode.is(node)) {
            return this.renderRootFolderNode(node);
        }
        else if (SearchInWorkspaceFileNode.is(node)) {
            return this.renderFileNode(node);
        }
        else if (SearchInWorkspaceResultLineNode.is(node)) {
            return this.renderResultLineNode(node);
        }
        return '';
    };
    SearchInWorkspaceResultTreeWidget.prototype.renderTailDecorations = function (node, props) {
        return React.createElement("div", { className: 'result-node-buttons' },
            this._showReplaceButtons && this.renderReplaceButton(node),
            this.renderRemoveButton(node));
    };
    SearchInWorkspaceResultTreeWidget.prototype.doReplace = function (node, e) {
        this.replace(node);
        e.stopPropagation();
    };
    SearchInWorkspaceResultTreeWidget.prototype.renderReplaceButton = function (node) {
        var _this = this;
        var isResultLineNode = SearchInWorkspaceResultLineNode.is(node);
        return React.createElement("span", { className: isResultLineNode ? 'replace-result' : 'replace-all-result', onClick: function (e) { return _this.doReplace(node, e); }, title: isResultLineNode ? 'Replace' : 'Replace All' });
    };
    SearchInWorkspaceResultTreeWidget.prototype.getFileCount = function (node) {
        var _this = this;
        if (SearchInWorkspaceRoot.is(node)) {
            return node.children.reduce(function (acc, current) { return acc + _this.getFileCount(current); }, 0);
        }
        else if (SearchInWorkspaceRootFolderNode.is(node)) {
            return node.children.length;
        }
        else if (SearchInWorkspaceFileNode.is(node)) {
            return 1;
        }
        return 0;
    };
    SearchInWorkspaceResultTreeWidget.prototype.getResultCount = function (node) {
        var _this = this;
        if (SearchInWorkspaceRoot.is(node)) {
            return node.children.reduce(function (acc, current) { return acc + _this.getResultCount(current); }, 0);
        }
        else if (SearchInWorkspaceRootFolderNode.is(node)) {
            return node.children.reduce(function (acc, current) { return acc + _this.getResultCount(current); }, 0);
        }
        else if (SearchInWorkspaceFileNode.is(node)) {
            return node.children.length;
        }
        else if (SearchInWorkspaceResultLineNode.is(node)) {
            return 1;
        }
        return 0;
    };
    /**
     * Replace results under the node passed into the function. If node is undefined, replace all results.
     * @param node Node in the tree widget where the "replace all" operation is performed
     */
    SearchInWorkspaceResultTreeWidget.prototype.replace = function (node) {
        return __awaiter(this, void 0, void 0, function () {
            var replaceForNode, needConfirm, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        replaceForNode = node || this.model.root;
                        needConfirm = !SearchInWorkspaceFileNode.is(node) && !SearchInWorkspaceResultLineNode.is(node);
                        _a = !needConfirm;
                        if (_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.confirmReplaceAll(this.getResultCount(replaceForNode), this.getFileCount(replaceForNode))];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        if (_a) {
                            (node ? [node] : Array.from(this.resultTree.values())).forEach(function (n) {
                                _this.replaceResult(n, !!node);
                                _this.removeNode(n);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchInWorkspaceResultTreeWidget.prototype.confirmReplaceAll = function (resultNumber, fileNumber) {
        var go = fileNumber > 1;
        return new browser_1.ConfirmDialog({
            title: 'Replace all',
            msg: "Do you really want to replace " + resultNumber + " match" + (resultNumber > 1 ? 'es' : '') + " " + (go ? 'across' : 'in') + " "
                + (fileNumber + " file" + (go ? 's' : '') + " with \"" + this._replaceTerm + "\"?")
        }).open();
    };
    SearchInWorkspaceResultTreeWidget.prototype.updateRightResults = function (node) {
        var fileNode = node.parent;
        var rightPositionedNodes = fileNode.children.filter(function (rl) { return rl.line === node.line && rl.character > node.character; });
        var diff = this._replaceTerm.length - this.searchTerm.length;
        rightPositionedNodes.map(function (r) { return r.character += diff; });
    };
    /**
     * Replace text either in all search matches under a node or in all search matches, and save the changes.
     * @param node - node in the tree widget in which the "replace all" is performed.
     * @param {boolean} replaceOne - whether the function is to replace all matches under a node. If it is false, replace all.
     */
    SearchInWorkspaceResultTreeWidget.prototype.replaceResult = function (node, replaceOne) {
        return __awaiter(this, void 0, void 0, function () {
            var toReplace, trackedEditors, widget, _a, source, replaceOperations;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        toReplace = [];
                        if (SearchInWorkspaceRootFolderNode.is(node)) {
                            node.children.forEach(function (fileNode) { return _this.replaceResult(fileNode, replaceOne); });
                        }
                        else if (SearchInWorkspaceFileNode.is(node)) {
                            toReplace.push.apply(toReplace, __spread(node.children));
                        }
                        else if (SearchInWorkspaceResultLineNode.is(node)) {
                            toReplace.push(node);
                            this.updateRightResults(node);
                        }
                        if (!(toReplace.length > 0)) return [3 /*break*/, 7];
                        trackedEditors = this.editorManager.all;
                        if (!replaceOne) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.doOpen(toReplace[0])];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.doGetWidget(toReplace[0])];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        widget = _a;
                        source = widget.editor.document.getText();
                        replaceOperations = toReplace.map(function (resultLineNode) { return ({
                            text: _this._replaceTerm,
                            range: {
                                start: {
                                    line: resultLineNode.line - 1,
                                    character: resultLineNode.character - 1
                                },
                                end: {
                                    line: resultLineNode.line - 1,
                                    character: resultLineNode.character - 1 + resultLineNode.length
                                }
                            }
                        }); });
                        // Replace the text.
                        return [4 /*yield*/, widget.editor.replaceText({
                                source: source,
                                replaceOperations: replaceOperations
                            })];
                    case 5:
                        // Replace the text.
                        _b.sent();
                        // Save the text replacement changes in the editor.
                        return [4 /*yield*/, widget.saveable.save()];
                    case 6:
                        // Save the text replacement changes in the editor.
                        _b.sent();
                        // Dispose the widget if it is not opened but created for `replaceAll`.
                        if (!replaceOne) {
                            if (trackedEditors.indexOf(widget) === -1) {
                                widget.dispose();
                            }
                        }
                        _b.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    SearchInWorkspaceResultTreeWidget.prototype.doRemove = function (node, e) {
        this.removeNode(node);
        e.stopPropagation();
    };
    SearchInWorkspaceResultTreeWidget.prototype.renderRemoveButton = function (node) {
        var _this = this;
        return React.createElement("span", { className: 'remove-node', onClick: function (e) { return _this.remove(node, e); }, title: 'Dismiss' });
    };
    SearchInWorkspaceResultTreeWidget.prototype.removeNode = function (node) {
        if (SearchInWorkspaceRootFolderNode.is(node)) {
            this.removeRootFolderNode(node);
        }
        else if (SearchInWorkspaceFileNode.is(node)) {
            this.removeFileNode(node);
        }
        else if (SearchInWorkspaceResultLineNode.is(node)) {
            this.removeResultLineNode(node);
        }
        this.refreshModelChildren();
    };
    SearchInWorkspaceResultTreeWidget.prototype.removeRootFolderNode = function (node) {
        var e_5, _a;
        try {
            for (var _b = __values(this.resultTree.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var rootUri = _c.value;
                if (rootUri === node.folderUri) {
                    this.resultTree.delete(rootUri);
                    break;
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    SearchInWorkspaceResultTreeWidget.prototype.removeFileNode = function (node) {
        var rootFolderNode = node.parent;
        var index = rootFolderNode.children.findIndex(function (fileNode) { return fileNode.id === node.id; });
        if (index > -1) {
            rootFolderNode.children.splice(index, 1);
        }
        if (this.getFileCount(rootFolderNode) === 0) {
            this.removeRootFolderNode(rootFolderNode);
        }
    };
    SearchInWorkspaceResultTreeWidget.prototype.removeResultLineNode = function (node) {
        var fileNode = node.parent;
        var index = fileNode.children.findIndex(function (n) { return n.fileUri === node.fileUri && n.line === node.line && n.character === node.character; });
        if (index > -1) {
            fileNode.children.splice(index, 1);
            if (this.getResultCount(fileNode) === 0) {
                this.removeFileNode(fileNode);
            }
        }
    };
    SearchInWorkspaceResultTreeWidget.prototype.renderRootFolderNode = function (node) {
        return React.createElement("div", { className: 'result' },
            React.createElement("div", { className: 'result-head' },
                React.createElement("div", { className: "result-head-info noWrapInfo noselect " + (node.selected ? 'selected' : '') },
                    React.createElement("span", { className: "file-icon " + (this.toNodeIcon(node) || '') }),
                    React.createElement("div", { className: 'noWrapInfo' },
                        React.createElement("span", { className: 'file-name' }, this.toNodeName(node)),
                        React.createElement("span", { className: 'file-path' }, node.path))),
                React.createElement("span", { className: 'notification-count-container highlighted-count-container' },
                    React.createElement("span", { className: 'notification-count' }, this.getFileCount(node)))));
    };
    SearchInWorkspaceResultTreeWidget.prototype.renderFileNode = function (node) {
        return React.createElement("div", { className: 'result' },
            React.createElement("div", { className: 'result-head' },
                React.createElement("div", { className: "result-head-info noWrapInfo noselect " + (node.selected ? 'selected' : ''), title: new uri_1.default(node.fileUri).path.toString() },
                    React.createElement("span", { className: "file-icon " + this.toNodeIcon(node) }),
                    React.createElement("div", { className: 'noWrapInfo' },
                        React.createElement("span", { className: 'file-name' }, this.toNodeName(node)),
                        React.createElement("span", { className: 'file-path' }, node.path))),
                React.createElement("span", { className: 'notification-count-container' },
                    React.createElement("span", { className: 'notification-count' }, this.getResultCount(node)))));
    };
    SearchInWorkspaceResultTreeWidget.prototype.renderResultLineNode = function (node) {
        var before;
        var after;
        var title;
        if (typeof node.lineText === 'string') {
            var prefix = node.character > 26 ? '... ' : '';
            before = prefix + node.lineText.substr(0, node.character - 1).substr(-25);
            after = node.lineText.substr(node.character - 1 + node.length, 75);
            title = node.lineText.trim();
        }
        else {
            before = node.lineText.text.substr(0, node.lineText.character);
            after = node.lineText.text.substr(node.lineText.character + node.length);
            title = node.lineText.text.trim();
        }
        return React.createElement("div", { className: "resultLine noWrapInfo " + (node.selected ? 'selected' : ''), title: title },
            this.searchInWorkspacePreferences['search.lineNumbers'] && React.createElement("span", { className: 'theia-siw-lineNumber' }, node.line),
            React.createElement("span", null, before),
            this.renderMatchLinePart(node),
            React.createElement("span", null, after));
    };
    SearchInWorkspaceResultTreeWidget.prototype.renderMatchLinePart = function (node) {
        var replaceTerm = this._replaceTerm !== '' && this._showReplaceButtons ? React.createElement("span", { className: 'replace-term' }, this._replaceTerm) : '';
        var className = "match" + (this._showReplaceButtons ? ' strike-through' : '');
        var match = typeof node.lineText === 'string' ?
            node.lineText.substr(node.character - 1, node.length)
            : node.lineText.text.substr(node.lineText.character - 1, node.length);
        return React.createElement(React.Fragment, null,
            React.createElement("span", { className: className }, match),
            replaceTerm);
    };
    /**
     * Get the editor widget by the node.
     * @param {SearchInWorkspaceResultLineNode} node - the node representing a match in the search results.
     * @returns The editor widget to which the text replace will be done.
     */
    SearchInWorkspaceResultTreeWidget.prototype.doGetWidget = function (node) {
        return __awaiter(this, void 0, void 0, function () {
            var fileUri, editorWidget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileUri = new uri_1.default(node.fileUri);
                        return [4 /*yield*/, this.editorManager.getOrCreateByUri(fileUri)];
                    case 1:
                        editorWidget = _a.sent();
                        return [2 /*return*/, editorWidget];
                }
            });
        });
    };
    SearchInWorkspaceResultTreeWidget.prototype.doOpen = function (node, preview) {
        if (preview === void 0) { preview = false; }
        return __awaiter(this, void 0, void 0, function () {
            var fileUri, resultNode, leftUri, rightUri, opts, editorWidget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resultNode = node.parent;
                        if (!(resultNode && this._showReplaceButtons && preview)) return [3 /*break*/, 2];
                        leftUri = new uri_1.default(node.fileUri);
                        return [4 /*yield*/, this.createReplacePreview(resultNode)];
                    case 1:
                        rightUri = _a.sent();
                        fileUri = browser_1.DiffUris.encode(leftUri, rightUri);
                        return [3 /*break*/, 3];
                    case 2:
                        fileUri = new uri_1.default(node.fileUri);
                        _a.label = 3;
                    case 3:
                        opts = !browser_1.DiffUris.isDiffUri(fileUri) ? {
                            selection: {
                                start: {
                                    line: node.line - 1,
                                    character: node.character - 1
                                },
                                end: {
                                    line: node.line - 1,
                                    character: node.character - 1 + node.length
                                }
                            },
                            mode: 'reveal'
                        } : undefined;
                        return [4 /*yield*/, this.editorManager.open(fileUri, opts)];
                    case 4:
                        editorWidget = _a.sent();
                        if (!browser_1.DiffUris.isDiffUri(fileUri)) {
                            this.decorateEditor(resultNode, editorWidget);
                        }
                        return [2 /*return*/, editorWidget];
                }
            });
        });
    };
    SearchInWorkspaceResultTreeWidget.prototype.createReplacePreview = function (node) {
        return __awaiter(this, void 0, void 0, function () {
            var fileUri, resource, content, lines;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileUri = new uri_1.default(node.fileUri).withScheme('file');
                        return [4 /*yield*/, this.fileResourceResolver.resolve(fileUri)];
                    case 1:
                        resource = _a.sent();
                        return [4 /*yield*/, resource.readContents()];
                    case 2:
                        content = _a.sent();
                        lines = content.split('\n');
                        node.children.map(function (l) {
                            var leftPositionedNodes = node.children.filter(function (rl) { return rl.line === l.line && rl.character < l.character; });
                            var diff = (_this._replaceTerm.length - _this.searchTerm.length) * leftPositionedNodes.length;
                            var start = lines[l.line - 1].substr(0, l.character - 1 + diff);
                            var end = lines[l.line - 1].substr(l.character - 1 + diff + l.length);
                            lines[l.line - 1] = start + _this._replaceTerm + end;
                        });
                        return [2 /*return*/, fileUri.withScheme(in_memory_text_resource_1.MEMORY_TEXT).withQuery(lines.join('\n'))];
                }
            });
        });
    };
    SearchInWorkspaceResultTreeWidget.prototype.decorateEditor = function (node, editorWidget) {
        if (!browser_1.DiffUris.isDiffUri(editorWidget.editor.uri)) {
            var key = editorWidget.editor.uri.toString() + "#search-in-workspace-matches";
            var oldDecorations = this.appliedDecorations.get(key) || [];
            var newDecorations = this.createEditorDecorations(node);
            var appliedDecorations = editorWidget.editor.deltaDecorations({
                newDecorations: newDecorations,
                oldDecorations: oldDecorations,
            });
            this.appliedDecorations.set(key, appliedDecorations);
        }
    };
    SearchInWorkspaceResultTreeWidget.prototype.createEditorDecorations = function (resultNode) {
        var decorations = [];
        if (resultNode) {
            resultNode.children.map(function (res) {
                decorations.push({
                    range: {
                        start: {
                            line: res.line - 1,
                            character: res.character - 1
                        },
                        end: {
                            line: res.line - 1,
                            character: res.character - 1 + res.length
                        }
                    },
                    options: {
                        overviewRuler: {
                            color: {
                                id: 'editor.findMatchHighlightBackground'
                            },
                            position: browser_2.OverviewRulerLane.Center
                        },
                        className: res.selected ? 'current-search-in-workspace-editor-match' : 'search-in-workspace-editor-match',
                        stickiness: browser_2.TrackedRangeStickiness.GrowsOnlyWhenTypingBefore
                    }
                });
            });
        }
        return decorations;
    };
    /**
     * Compare two normalized strings.
     *
     * @param a {string} the first string.
     * @param b {string} the second string.
     */
    SearchInWorkspaceResultTreeWidget.prototype.compare = function (a, b) {
        var itemA = a.toLowerCase().trim();
        var itemB = b.toLowerCase().trim();
        return itemA.localeCompare(itemB);
    };
    __decorate([
        inversify_1.inject(search_in_workspace_service_1.SearchInWorkspaceService),
        __metadata("design:type", search_in_workspace_service_1.SearchInWorkspaceService)
    ], SearchInWorkspaceResultTreeWidget.prototype, "searchService", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], SearchInWorkspaceResultTreeWidget.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(browser_4.FileResourceResolver),
        __metadata("design:type", browser_4.FileResourceResolver)
    ], SearchInWorkspaceResultTreeWidget.prototype, "fileResourceResolver", void 0);
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], SearchInWorkspaceResultTreeWidget.prototype, "shell", void 0);
    __decorate([
        inversify_1.inject(browser_3.WorkspaceService),
        __metadata("design:type", browser_3.WorkspaceService)
    ], SearchInWorkspaceResultTreeWidget.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(browser_1.TreeExpansionService),
        __metadata("design:type", Object)
    ], SearchInWorkspaceResultTreeWidget.prototype, "expansionService", void 0);
    __decorate([
        inversify_1.inject(search_in_workspace_preferences_1.SearchInWorkspacePreferences),
        __metadata("design:type", Object)
    ], SearchInWorkspaceResultTreeWidget.prototype, "searchInWorkspacePreferences", void 0);
    __decorate([
        inversify_1.inject(core_2.ProgressService),
        __metadata("design:type", core_2.ProgressService)
    ], SearchInWorkspaceResultTreeWidget.prototype, "progressService", void 0);
    __decorate([
        inversify_1.inject(color_registry_1.ColorRegistry),
        __metadata("design:type", color_registry_1.ColorRegistry)
    ], SearchInWorkspaceResultTreeWidget.prototype, "colorRegistry", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SearchInWorkspaceResultTreeWidget.prototype, "init", null);
    SearchInWorkspaceResultTreeWidget = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_1.TreeProps)),
        __param(1, inversify_1.inject(browser_1.TreeModel)),
        __param(2, inversify_1.inject(browser_1.ContextMenuRenderer)),
        __metadata("design:paramtypes", [Object, Object, browser_1.ContextMenuRenderer])
    ], SearchInWorkspaceResultTreeWidget);
    return SearchInWorkspaceResultTreeWidget;
}(browser_1.TreeWidget));
exports.SearchInWorkspaceResultTreeWidget = SearchInWorkspaceResultTreeWidget;


/***/ }),

/***/ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-service.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-service.js ***!
  \********************************************************************************************/
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
exports.SearchInWorkspaceService = exports.SearchInWorkspaceClientImpl = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var search_in_workspace_interface_1 = __webpack_require__(/*! ../common/search-in-workspace-interface */ "./node_modules/@theia/search-in-workspace/lib/common/search-in-workspace-interface.js");
var browser_1 = __webpack_require__(/*! @theia/workspace/lib/browser */ "./node_modules/@theia/workspace/lib/browser/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
/**
 * Class that will receive the search results from the server.  This is separate
 * from the SearchInWorkspaceService class only to avoid a cycle in the
 * dependency injection.
 */
var SearchInWorkspaceClientImpl = /** @class */ (function () {
    function SearchInWorkspaceClientImpl() {
    }
    SearchInWorkspaceClientImpl.prototype.onResult = function (searchId, result) {
        this.service.onResult(searchId, result);
    };
    SearchInWorkspaceClientImpl.prototype.onDone = function (searchId, error) {
        this.service.onDone(searchId, error);
    };
    SearchInWorkspaceClientImpl.prototype.setService = function (service) {
        this.service = service;
    };
    SearchInWorkspaceClientImpl = __decorate([
        inversify_1.injectable()
    ], SearchInWorkspaceClientImpl);
    return SearchInWorkspaceClientImpl;
}());
exports.SearchInWorkspaceClientImpl = SearchInWorkspaceClientImpl;
/**
 * Service to search text in the workspace files.
 */
var SearchInWorkspaceService = /** @class */ (function () {
    function SearchInWorkspaceService() {
        // All the searches that we have started, that are not done yet (onDone
        // with that searchId has not been called).
        this.pendingSearches = new Map();
        // Due to the asynchronicity of the node backend, it's possible that we
        // start a search, receive an event for that search, and then receive
        // the search id for that search.We therefore need to keep those
        // events until we get the search id and return it to the caller.
        // Otherwise the caller would discard the event because it doesn't know
        // the search id yet.
        this.pendingOnDones = new Map();
        this.lastKnownSearchId = -1;
    }
    SearchInWorkspaceService.prototype.init = function () {
        this.client.setService(this);
    };
    SearchInWorkspaceService.prototype.isEnabled = function () {
        return this.workspaceService.opened;
    };
    SearchInWorkspaceService.prototype.onResult = function (searchId, result) {
        var callbacks = this.pendingSearches.get(searchId);
        if (callbacks) {
            callbacks.onResult(searchId, result);
        }
    };
    SearchInWorkspaceService.prototype.onDone = function (searchId, error) {
        var callbacks = this.pendingSearches.get(searchId);
        if (callbacks) {
            this.pendingSearches.delete(searchId);
            callbacks.onDone(searchId, error);
        }
        else {
            if (searchId > this.lastKnownSearchId) {
                this.logger.debug("Got an onDone for a searchId we don't know about (" + searchId + "), stashing it for later with error = ", error);
                this.pendingOnDones.set(searchId, error);
            }
            else {
                // It's possible to receive an onDone for a search we have cancelled.  Just ignore it.
                this.logger.debug("Got an onDone for a searchId we don't know about (" + searchId + "), but it's probably an old one, error = ", error);
            }
        }
    };
    // Start a search of the string "what" in the workspace.
    SearchInWorkspaceService.prototype.search = function (what, callbacks, opts) {
        return __awaiter(this, void 0, void 0, function () {
            var roots;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.workspaceService.open) {
                            throw new Error('Search failed: no workspace root.');
                        }
                        return [4 /*yield*/, this.workspaceService.roots];
                    case 1:
                        roots = _a.sent();
                        return [2 /*return*/, this.doSearch(what, roots.map(function (r) { return r.uri; }), callbacks, opts)];
                }
            });
        });
    };
    SearchInWorkspaceService.prototype.doSearch = function (what, rootsUris, callbacks, opts) {
        return __awaiter(this, void 0, void 0, function () {
            var searchId, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.searchServer.search(what, rootsUris, opts)];
                    case 1:
                        searchId = _a.sent();
                        this.pendingSearches.set(searchId, callbacks);
                        this.lastKnownSearchId = searchId;
                        this.logger.debug('Service launched search ' + searchId);
                        // Check if we received an onDone before search() returned.
                        if (this.pendingOnDones.has(searchId)) {
                            this.logger.debug('Ohh, we have a stashed onDone for that searchId');
                            error_1 = this.pendingOnDones.get(searchId);
                            this.pendingOnDones.delete(searchId);
                            // Call the client's searchId, but first give it a
                            // chance to record the returned searchId.
                            setTimeout(function () {
                                _this.onDone(searchId, error_1);
                            }, 0);
                        }
                        return [2 /*return*/, searchId];
                }
            });
        });
    };
    SearchInWorkspaceService.prototype.searchWithCallback = function (what, rootsUris, callbacks, opts) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.doSearch(what, rootsUris, callbacks, opts)];
            });
        });
    };
    // Cancel an ongoing search.
    SearchInWorkspaceService.prototype.cancel = function (searchId) {
        this.pendingSearches.delete(searchId);
        this.searchServer.cancel(searchId);
    };
    __decorate([
        inversify_1.inject(search_in_workspace_interface_1.SearchInWorkspaceServer),
        __metadata("design:type", Object)
    ], SearchInWorkspaceService.prototype, "searchServer", void 0);
    __decorate([
        inversify_1.inject(SearchInWorkspaceClientImpl),
        __metadata("design:type", SearchInWorkspaceClientImpl)
    ], SearchInWorkspaceService.prototype, "client", void 0);
    __decorate([
        inversify_1.inject(browser_1.WorkspaceService),
        __metadata("design:type", browser_1.WorkspaceService)
    ], SearchInWorkspaceService.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(core_1.ILogger),
        __metadata("design:type", Object)
    ], SearchInWorkspaceService.prototype, "logger", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SearchInWorkspaceService.prototype, "init", null);
    SearchInWorkspaceService = __decorate([
        inversify_1.injectable()
    ], SearchInWorkspaceService);
    return SearchInWorkspaceService;
}());
exports.SearchInWorkspaceService = SearchInWorkspaceService;


/***/ }),

/***/ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-widget.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-widget.js ***!
  \*******************************************************************************************/
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
exports.SearchInWorkspaceWidget = void 0;
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var search_in_workspace_result_tree_widget_1 = __webpack_require__(/*! ./search-in-workspace-result-tree-widget */ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-result-tree-widget.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var browser_2 = __webpack_require__(/*! @theia/workspace/lib/browser */ "./node_modules/@theia/workspace/lib/browser/index.js");
var search_in_workspace_context_key_service_1 = __webpack_require__(/*! ./search-in-workspace-context-key-service */ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-context-key-service.js");
var progress_bar_factory_1 = __webpack_require__(/*! @theia/core/lib/browser/progress-bar-factory */ "./node_modules/@theia/core/lib/browser/progress-bar-factory.js");
var SearchInWorkspaceWidget = /** @class */ (function (_super) {
    __extends(SearchInWorkspaceWidget, _super);
    function SearchInWorkspaceWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showSearchDetails = false;
        _this._hasResults = false;
        _this.resultNumber = 0;
        _this.searchFieldContainerIsFocused = false;
        _this.searchTerm = '';
        _this.replaceTerm = '';
        _this._showReplaceField = false;
        _this.onDidUpdateEmitter = new common_1.Emitter();
        _this.onDidUpdate = _this.onDidUpdateEmitter.event;
        _this.focusSearchFieldContainer = function () { return _this.doFocusSearchFieldContainer(); };
        _this.unfocusSearchFieldContainer = function () { return _this.doUnfocusSearchFieldContainer(); };
        _this.search = function (e) { return _this.doSearch(e); };
        _this.handleFocusSearchInputBox = function () { return _this.contextKeyService.setSearchInputBoxFocus(true); };
        _this.handleBlurSearchInputBox = function () { return _this.contextKeyService.setSearchInputBoxFocus(false); };
        _this.updateReplaceTerm = function (e) { return _this.doUpdateReplaceTerm(e); };
        _this.handleFocusReplaceInputBox = function () { return _this.contextKeyService.setReplaceInputBoxFocus(true); };
        _this.handleBlurReplaceInputBox = function () { return _this.contextKeyService.setReplaceInputBoxFocus(false); };
        _this.handleFocusIncludesInputBox = function () { return _this.contextKeyService.setPatternExcludesInputBoxFocus(true); };
        _this.handleBlurIncludesInputBox = function () { return _this.contextKeyService.setPatternExcludesInputBoxFocus(false); };
        _this.handleFocusExcludesInputBox = function () { return _this.contextKeyService.setPatternExcludesInputBoxFocus(true); };
        _this.handleBlurExcludesInputBox = function () { return _this.contextKeyService.setPatternExcludesInputBoxFocus(false); };
        return _this;
    }
    SearchInWorkspaceWidget_1 = SearchInWorkspaceWidget;
    Object.defineProperty(SearchInWorkspaceWidget.prototype, "hasResults", {
        get: function () {
            return this._hasResults;
        },
        set: function (hasResults) {
            this.contextKeyService.hasSearchResult.set(hasResults);
            this._hasResults = hasResults;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SearchInWorkspaceWidget.prototype, "showReplaceField", {
        get: function () {
            return this._showReplaceField;
        },
        set: function (showReplaceField) {
            this.contextKeyService.replaceActive.set(showReplaceField);
            this._showReplaceField = showReplaceField;
        },
        enumerable: false,
        configurable: true
    });
    SearchInWorkspaceWidget.prototype.init = function () {
        var _this = this;
        this.id = SearchInWorkspaceWidget_1.ID;
        this.title.label = SearchInWorkspaceWidget_1.LABEL;
        this.title.caption = SearchInWorkspaceWidget_1.LABEL;
        this.title.iconClass = 'search-in-workspace-tab-icon';
        this.title.closable = true;
        this.contentNode = document.createElement('div');
        this.contentNode.classList.add('t-siw-search-container');
        this.searchFormContainer = document.createElement('div');
        this.searchFormContainer.classList.add('searchHeader');
        this.contentNode.appendChild(this.searchFormContainer);
        this.node.appendChild(this.contentNode);
        this.matchCaseState = {
            className: 'match-case',
            enabled: false,
            title: 'Match Case'
        };
        this.wholeWordState = {
            className: 'whole-word',
            enabled: false,
            title: 'Match Whole Word'
        };
        this.regExpState = {
            className: 'use-regexp',
            enabled: false,
            title: 'Use Regular Expression'
        };
        this.includeIgnoredState = {
            className: 'include-ignored fa fa-eye',
            enabled: false,
            title: 'Include Ignored Files'
        };
        this.searchInWorkspaceOptions = {
            matchCase: false,
            matchWholeWord: false,
            useRegExp: false,
            includeIgnored: false,
            include: [],
            exclude: [],
            maxResults: 2000
        };
        this.toDispose.push(this.resultTreeWidget.onChange(function (r) {
            _this.hasResults = r.size > 0;
            _this.resultNumber = 0;
            var results = Array.from(r.values());
            results.forEach(function (rootFolder) {
                return rootFolder.children.forEach(function (file) { return _this.resultNumber += file.children.length; });
            });
            _this.update();
        }));
        this.toDispose.push(this.resultTreeWidget.onFocusInput(function (b) {
            _this.focusInputField();
        }));
        this.toDispose.push(this.resultTreeWidget);
        this.toDispose.push(this.progressBarFactory({ container: this.node, insertMode: 'prepend', locationId: 'search' }));
    };
    SearchInWorkspaceWidget.prototype.storeState = function () {
        return {
            matchCaseState: this.matchCaseState,
            wholeWordState: this.wholeWordState,
            regExpState: this.regExpState,
            includeIgnoredState: this.includeIgnoredState,
            showSearchDetails: this.showSearchDetails,
            searchInWorkspaceOptions: this.searchInWorkspaceOptions,
            searchTerm: this.searchTerm,
            replaceTerm: this.replaceTerm,
            showReplaceField: this.showReplaceField
        };
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    SearchInWorkspaceWidget.prototype.restoreState = function (oldState) {
        this.matchCaseState = oldState.matchCaseState;
        this.wholeWordState = oldState.wholeWordState;
        this.regExpState = oldState.regExpState;
        this.includeIgnoredState = oldState.includeIgnoredState;
        this.showSearchDetails = oldState.showSearchDetails;
        this.searchInWorkspaceOptions = oldState.searchInWorkspaceOptions;
        this.searchTerm = oldState.searchTerm;
        this.replaceTerm = oldState.replaceTerm;
        this.showReplaceField = oldState.showReplaceField;
        this.resultTreeWidget.replaceTerm = this.replaceTerm;
        this.resultTreeWidget.showReplaceButtons = this.showReplaceField;
        this.refresh();
    };
    SearchInWorkspaceWidget.prototype.findInFolder = function (uris) {
        this.showSearchDetails = true;
        var values = Array.from(new Set(uris.map(function (uri) { return uri + "/**"; })));
        var value = values.join(', ');
        this.searchInWorkspaceOptions.include = values;
        var include = document.getElementById('include-glob-field');
        if (include) {
            include.value = value;
        }
        this.update();
    };
    /**
     * Update the search term and input field.
     * @param term the search term.
     */
    SearchInWorkspaceWidget.prototype.updateSearchTerm = function (term) {
        this.searchTerm = term;
        var search = document.getElementById('search-input-field');
        if (search) {
            search.value = term;
        }
        this.refresh();
    };
    SearchInWorkspaceWidget.prototype.hasResultList = function () {
        return this.hasResults;
    };
    SearchInWorkspaceWidget.prototype.hasSearchTerm = function () {
        return this.searchTerm !== '';
    };
    SearchInWorkspaceWidget.prototype.refresh = function () {
        this.resultTreeWidget.search(this.searchTerm, this.searchInWorkspaceOptions);
        this.update();
    };
    SearchInWorkspaceWidget.prototype.getCancelIndicator = function () {
        return this.resultTreeWidget.cancelIndicator;
    };
    SearchInWorkspaceWidget.prototype.collapseAll = function () {
        this.resultTreeWidget.collapseAll();
        this.update();
    };
    SearchInWorkspaceWidget.prototype.clear = function () {
        this.searchTerm = '';
        this.replaceTerm = '';
        this.searchInWorkspaceOptions.include = [];
        this.searchInWorkspaceOptions.exclude = [];
        this.includeIgnoredState.enabled = false;
        this.matchCaseState.enabled = false;
        this.wholeWordState.enabled = false;
        this.regExpState.enabled = false;
        var search = document.getElementById('search-input-field');
        var replace = document.getElementById('replace-input-field');
        var include = document.getElementById('include-glob-field');
        var exclude = document.getElementById('exclude-glob-field');
        if (search && replace && include && exclude) {
            search.value = '';
            replace.value = '';
            include.value = '';
            exclude.value = '';
        }
        this.resultTreeWidget.search(this.searchTerm, this.searchInWorkspaceOptions);
        this.update();
    };
    SearchInWorkspaceWidget.prototype.onAfterAttach = function (msg) {
        var _this = this;
        _super.prototype.onAfterAttach.call(this, msg);
        ReactDOM.render(React.createElement(React.Fragment, null,
            this.renderSearchHeader(),
            this.renderSearchInfo()), this.searchFormContainer);
        browser_1.Widget.attach(this.resultTreeWidget, this.contentNode);
        this.toDisposeOnDetach.push(common_1.Disposable.create(function () {
            browser_1.Widget.detach(_this.resultTreeWidget);
        }));
    };
    SearchInWorkspaceWidget.prototype.onUpdateRequest = function (msg) {
        _super.prototype.onUpdateRequest.call(this, msg);
        var searchInfo = this.renderSearchInfo();
        if (searchInfo) {
            ReactDOM.render(React.createElement(React.Fragment, null,
                this.renderSearchHeader(),
                searchInfo), this.searchFormContainer);
            this.onDidUpdateEmitter.fire(undefined);
        }
    };
    SearchInWorkspaceWidget.prototype.onResize = function (msg) {
        _super.prototype.onResize.call(this, msg);
        browser_1.MessageLoop.sendMessage(this.resultTreeWidget, browser_1.Widget.ResizeMessage.UnknownSize);
    };
    SearchInWorkspaceWidget.prototype.onAfterShow = function (msg) {
        _super.prototype.onAfterShow.call(this, msg);
        this.focusInputField();
        this.contextKeyService.searchViewletVisible.set(true);
    };
    SearchInWorkspaceWidget.prototype.onAfterHide = function (msg) {
        _super.prototype.onAfterHide.call(this, msg);
        this.contextKeyService.searchViewletVisible.set(false);
    };
    SearchInWorkspaceWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.focusInputField();
    };
    SearchInWorkspaceWidget.prototype.focusInputField = function () {
        var f = document.getElementById('search-input-field');
        if (f) {
            f.focus();
            f.select();
        }
    };
    SearchInWorkspaceWidget.prototype.renderSearchHeader = function () {
        var searchAndReplaceContainer = this.renderSearchAndReplace();
        var searchDetails = this.renderSearchDetails();
        return React.createElement("div", null,
            searchAndReplaceContainer,
            searchDetails);
    };
    SearchInWorkspaceWidget.prototype.renderSearchAndReplace = function () {
        var toggleContainer = this.renderReplaceFieldToggle();
        var searchField = this.renderSearchField();
        var replaceField = this.renderReplaceField();
        return React.createElement("div", { className: 'search-and-replace-container' },
            toggleContainer,
            React.createElement("div", { className: 'search-and-replace-fields' },
                searchField,
                replaceField));
    };
    SearchInWorkspaceWidget.prototype.renderReplaceFieldToggle = function () {
        var _this = this;
        var toggle = React.createElement("span", { className: "fa fa-caret-" + (this.showReplaceField ? 'down' : 'right') });
        return React.createElement("div", { title: 'Toggle Replace', className: 'replace-toggle', tabIndex: 0, onClick: function (e) {
                var elArr = document.getElementsByClassName('replace-toggle');
                if (elArr && elArr.length > 0) {
                    elArr[0].focus();
                }
                _this.showReplaceField = !_this.showReplaceField;
                _this.resultTreeWidget.showReplaceButtons = _this.showReplaceField;
                _this.update();
            } }, toggle);
    };
    SearchInWorkspaceWidget.prototype.renderNotification = function () {
        if (this.workspaceService.tryGetRoots().length <= 0) {
            return React.createElement("div", { className: 'search-notification show' },
                React.createElement("div", null, "Cannot search without an active workspace present."));
        }
        return React.createElement("div", { className: "search-notification " + (this.searchInWorkspaceOptions.maxResults && this.resultNumber >= this.searchInWorkspaceOptions.maxResults ? 'show' : '') },
            React.createElement("div", null, "This is only a subset of all results. Use a more specific search term to narrow down the result list."));
    };
    SearchInWorkspaceWidget.prototype.doFocusSearchFieldContainer = function () {
        this.searchFieldContainerIsFocused = true;
        this.update();
    };
    SearchInWorkspaceWidget.prototype.doUnfocusSearchFieldContainer = function () {
        this.searchFieldContainerIsFocused = false;
        this.update();
    };
    SearchInWorkspaceWidget.prototype.doSearch = function (e) {
        if (e.target) {
            if (browser_1.Key.ARROW_DOWN.keyCode === e.keyCode) {
                this.resultTreeWidget.focusFirstResult();
            }
            else {
                this.searchTerm = e.target.value;
                this.resultTreeWidget.search(this.searchTerm, (this.searchInWorkspaceOptions || {}));
            }
        }
    };
    SearchInWorkspaceWidget.prototype.renderSearchField = function () {
        var input = React.createElement("input", { id: 'search-input-field', className: 'theia-input', title: 'Search', type: 'text', size: 1, placeholder: 'Search', defaultValue: this.searchTerm, autoComplete: 'off', onKeyUp: this.search, onFocus: this.handleFocusSearchInputBox, onBlur: this.handleBlurSearchInputBox });
        var notification = this.renderNotification();
        var optionContainer = this.renderOptionContainer();
        var tooMany = this.searchInWorkspaceOptions.maxResults && this.resultNumber >= this.searchInWorkspaceOptions.maxResults ? 'tooManyResults' : '';
        var className = "search-field-container " + tooMany + " " + (this.searchFieldContainerIsFocused ? 'focused' : '');
        return React.createElement("div", { className: className },
            React.createElement("div", { className: 'search-field', tabIndex: -1, onFocus: this.focusSearchFieldContainer, onBlur: this.unfocusSearchFieldContainer },
                input,
                optionContainer),
            notification);
    };
    SearchInWorkspaceWidget.prototype.doUpdateReplaceTerm = function (e) {
        if (e.target) {
            this.replaceTerm = e.target.value;
            this.resultTreeWidget.replaceTerm = this.replaceTerm;
            this.resultTreeWidget.search(this.searchTerm, (this.searchInWorkspaceOptions || {}));
            this.update();
        }
    };
    SearchInWorkspaceWidget.prototype.renderReplaceField = function () {
        var replaceAllButtonContainer = this.renderReplaceAllButtonContainer();
        return React.createElement("div", { className: "replace-field" + (this.showReplaceField ? '' : ' hidden') },
            React.createElement("input", { id: 'replace-input-field', className: 'theia-input', title: 'Replace', type: 'text', size: 1, placeholder: 'Replace', defaultValue: this.replaceTerm, onKeyUp: this.updateReplaceTerm, onFocus: this.handleFocusReplaceInputBox, onBlur: this.handleBlurReplaceInputBox }),
            replaceAllButtonContainer);
    };
    SearchInWorkspaceWidget.prototype.renderReplaceAllButtonContainer = function () {
        var _this = this;
        // The `Replace All` button is enabled if there is a search term present with results.
        var enabled = this.searchTerm !== '' && this.resultNumber > 0;
        return React.createElement("div", { className: 'replace-all-button-container' },
            React.createElement("span", { title: 'Replace All', className: "replace-all-button" + (enabled ? ' ' : ' disabled'), onClick: function () {
                    if (enabled) {
                        _this.resultTreeWidget.replace(undefined);
                    }
                } }));
    };
    SearchInWorkspaceWidget.prototype.renderOptionContainer = function () {
        var matchCaseOption = this.renderOptionElement(this.matchCaseState);
        var wholeWordOption = this.renderOptionElement(this.wholeWordState);
        var regexOption = this.renderOptionElement(this.regExpState);
        var includeIgnoredOption = this.renderOptionElement(this.includeIgnoredState);
        return React.createElement("div", { className: 'option-buttons' },
            matchCaseOption,
            wholeWordOption,
            regexOption,
            includeIgnoredOption);
    };
    SearchInWorkspaceWidget.prototype.renderOptionElement = function (opt) {
        var _this = this;
        return React.createElement("span", { className: opt.className + " option " + (opt.enabled ? 'enabled' : ''), title: opt.title, onClick: function () { return _this.handleOptionClick(opt); } });
    };
    SearchInWorkspaceWidget.prototype.handleOptionClick = function (option) {
        option.enabled = !option.enabled;
        this.updateSearchOptions();
        this.searchFieldContainerIsFocused = true;
        this.resultTreeWidget.search(this.searchTerm, this.searchInWorkspaceOptions);
        this.update();
    };
    SearchInWorkspaceWidget.prototype.updateSearchOptions = function () {
        this.searchInWorkspaceOptions.matchCase = this.matchCaseState.enabled;
        this.searchInWorkspaceOptions.matchWholeWord = this.wholeWordState.enabled;
        this.searchInWorkspaceOptions.useRegExp = this.regExpState.enabled;
        this.searchInWorkspaceOptions.includeIgnored = this.includeIgnoredState.enabled;
    };
    SearchInWorkspaceWidget.prototype.renderSearchDetails = function () {
        var expandButton = this.renderExpandGlobFieldsButton();
        var globFieldContainer = this.renderGlobFieldContainer();
        return React.createElement("div", { className: 'search-details' },
            expandButton,
            globFieldContainer);
    };
    SearchInWorkspaceWidget.prototype.renderGlobFieldContainer = function () {
        var includeField = this.renderGlobField('include');
        var excludeField = this.renderGlobField('exclude');
        return React.createElement("div", { className: "glob-field-container" + (!this.showSearchDetails ? ' hidden' : '') },
            includeField,
            excludeField);
    };
    SearchInWorkspaceWidget.prototype.renderExpandGlobFieldsButton = function () {
        var _this = this;
        return React.createElement("div", { className: 'button-container' },
            React.createElement("span", { title: 'Toggle Search Details', className: 'fa fa-ellipsis-h btn', onClick: function () {
                    _this.showSearchDetails = !_this.showSearchDetails;
                    _this.update();
                } }));
    };
    SearchInWorkspaceWidget.prototype.renderGlobField = function (kind) {
        var _this = this;
        var currentValue = this.searchInWorkspaceOptions[kind];
        var value = currentValue && currentValue.join(', ') || '';
        return React.createElement("div", { className: 'glob-field' },
            React.createElement("div", { className: 'label' }, 'files to ' + kind),
            React.createElement("input", { className: 'theia-input', type: 'text', size: 1, defaultValue: value, id: kind + '-glob-field', onKeyUp: function (e) {
                    if (e.target) {
                        if (browser_1.Key.ENTER.keyCode === e.keyCode) {
                            _this.resultTreeWidget.search(_this.searchTerm, _this.searchInWorkspaceOptions);
                        }
                        else {
                            _this.searchInWorkspaceOptions[kind] = _this.splitOnComma(e.target.value);
                        }
                    }
                }, onFocus: kind === 'include' ? this.handleFocusIncludesInputBox : this.handleFocusExcludesInputBox, onBlur: kind === 'include' ? this.handleBlurIncludesInputBox : this.handleBlurExcludesInputBox }));
    };
    SearchInWorkspaceWidget.prototype.splitOnComma = function (patterns) {
        return patterns.length > 0 ? patterns.split(',').map(function (s) { return s.trim(); }) : [];
    };
    SearchInWorkspaceWidget.prototype.renderSearchInfo = function () {
        var message = '';
        if (this.searchTerm) {
            if (this.searchInWorkspaceOptions.include && this.searchInWorkspaceOptions.include.length > 0 && this.resultNumber === 0) {
                message = "No results found in '" + this.searchInWorkspaceOptions.include + "'";
            }
            else if (this.resultNumber === 0) {
                message = 'No results found.';
            }
            else {
                if (this.resultNumber === 1 && this.resultTreeWidget.fileNumber === 1) {
                    message = this.resultNumber + " result in " + this.resultTreeWidget.fileNumber + " file";
                }
                else if (this.resultTreeWidget.fileNumber === 1) {
                    message = this.resultNumber + " results in " + this.resultTreeWidget.fileNumber + " file";
                }
                else if (this.resultTreeWidget.fileNumber > 0) {
                    message = this.resultNumber + " results in " + this.resultTreeWidget.fileNumber + " files";
                }
                else {
                    // if fileNumber === 0, return undefined so that `onUpdateRequest()` would not re-render component
                    return undefined;
                }
            }
        }
        return React.createElement("div", { className: 'search-info' }, message);
    };
    var SearchInWorkspaceWidget_1;
    SearchInWorkspaceWidget.ID = 'search-in-workspace';
    SearchInWorkspaceWidget.LABEL = 'Search';
    __decorate([
        inversify_1.inject(search_in_workspace_result_tree_widget_1.SearchInWorkspaceResultTreeWidget),
        __metadata("design:type", search_in_workspace_result_tree_widget_1.SearchInWorkspaceResultTreeWidget)
    ], SearchInWorkspaceWidget.prototype, "resultTreeWidget", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], SearchInWorkspaceWidget.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(search_in_workspace_context_key_service_1.SearchInWorkspaceContextKeyService),
        __metadata("design:type", search_in_workspace_context_key_service_1.SearchInWorkspaceContextKeyService)
    ], SearchInWorkspaceWidget.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.inject(progress_bar_factory_1.ProgressBarFactory),
        __metadata("design:type", Function)
    ], SearchInWorkspaceWidget.prototype, "progressBarFactory", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SearchInWorkspaceWidget.prototype, "init", null);
    SearchInWorkspaceWidget = SearchInWorkspaceWidget_1 = __decorate([
        inversify_1.injectable()
    ], SearchInWorkspaceWidget);
    return SearchInWorkspaceWidget;
}(browser_1.BaseWidget));
exports.SearchInWorkspaceWidget = SearchInWorkspaceWidget;


/***/ }),

/***/ "./node_modules/@theia/search-in-workspace/lib/common/search-in-workspace-interface.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@theia/search-in-workspace/lib/common/search-in-workspace-interface.js ***!
  \*********************************************************************************************/
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
exports.SearchInWorkspaceServer = exports.SIW_WS_PATH = exports.SearchInWorkspaceClient = exports.SearchInWorkspaceResult = void 0;
var SearchInWorkspaceResult;
(function (SearchInWorkspaceResult) {
    /**
     * Sort search in workspace results according to file, line, character position
     * and then length.
     */
    function compare(a, b) {
        if (a.fileUri !== b.fileUri) {
            return a.fileUri < b.fileUri ? -1 : 1;
        }
        return 0;
    }
    SearchInWorkspaceResult.compare = compare;
})(SearchInWorkspaceResult = exports.SearchInWorkspaceResult || (exports.SearchInWorkspaceResult = {}));
exports.SearchInWorkspaceClient = Symbol('SearchInWorkspaceClient');
exports.SIW_WS_PATH = '/services/search-in-workspace';
exports.SearchInWorkspaceServer = Symbol('SearchInWorkspaceServer');


/***/ })

}]);
//# sourceMappingURL=41.bundle.js.map