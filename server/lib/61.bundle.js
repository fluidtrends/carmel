(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/@theia/file-search/lib/browser/file-search-frontend-module.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@theia/file-search/lib/browser/file-search-frontend-module.js ***!
  \************************************************************************************/
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
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var quick_file_open_contribution_1 = __webpack_require__(/*! ./quick-file-open-contribution */ "./node_modules/@theia/file-search/lib/browser/quick-file-open-contribution.js");
var quick_file_open_1 = __webpack_require__(/*! ./quick-file-open */ "./node_modules/@theia/file-search/lib/browser/quick-file-open.js");
var file_search_service_1 = __webpack_require__(/*! ../common/file-search-service */ "./node_modules/@theia/file-search/lib/common/file-search-service.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(file_search_service_1.FileSearchService).toDynamicValue(function (ctx) {
        var provider = ctx.container.get(browser_1.WebSocketConnectionProvider);
        return provider.createProxy(file_search_service_1.fileSearchServicePath);
    }).inSingletonScope();
    bind(quick_file_open_contribution_1.QuickFileOpenFrontendContribution).toSelf().inSingletonScope();
    [common_1.CommandContribution, browser_1.KeybindingContribution, browser_1.QuickOpenContribution].forEach(function (serviceIdentifier) {
        return bind(serviceIdentifier).toService(quick_file_open_contribution_1.QuickFileOpenFrontendContribution);
    });
    bind(quick_file_open_1.QuickFileOpenService).toSelf().inSingletonScope();
});


/***/ }),

/***/ "./node_modules/@theia/file-search/lib/browser/quick-file-open-contribution.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@theia/file-search/lib/browser/quick-file-open-contribution.js ***!
  \*************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickFileOpenFrontendContribution = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var quick_file_open_1 = __webpack_require__(/*! ./quick-file-open */ "./node_modules/@theia/file-search/lib/browser/quick-file-open.js");
var QuickFileOpenFrontendContribution = /** @class */ (function () {
    function QuickFileOpenFrontendContribution() {
    }
    QuickFileOpenFrontendContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(quick_file_open_1.quickFileOpen, {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            execute: function () {
                var _a;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var fileURI;
                if (args) {
                    _a = __read(args, 1), fileURI = _a[0];
                }
                if (fileURI) {
                    _this.quickFileOpenService.openFile(new uri_1.default(fileURI));
                }
                else {
                    _this.quickFileOpenService.open();
                }
            }
        });
    };
    QuickFileOpenFrontendContribution.prototype.registerKeybindings = function (keybindings) {
        keybindings.registerKeybinding({
            command: quick_file_open_1.quickFileOpen.id,
            keybinding: 'ctrlcmd+p'
        });
    };
    QuickFileOpenFrontendContribution.prototype.registerQuickOpenHandlers = function (handlers) {
        handlers.registerHandler(this.quickFileOpenService, true);
    };
    __decorate([
        inversify_1.inject(quick_file_open_1.QuickFileOpenService),
        __metadata("design:type", quick_file_open_1.QuickFileOpenService)
    ], QuickFileOpenFrontendContribution.prototype, "quickFileOpenService", void 0);
    QuickFileOpenFrontendContribution = __decorate([
        inversify_1.injectable()
    ], QuickFileOpenFrontendContribution);
    return QuickFileOpenFrontendContribution;
}());
exports.QuickFileOpenFrontendContribution = QuickFileOpenFrontendContribution;


/***/ }),

/***/ "./node_modules/@theia/file-search/lib/browser/quick-file-open.js":
/*!************************************************************************!*\
  !*** ./node_modules/@theia/file-search/lib/browser/quick-file-open.js ***!
  \************************************************************************/
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
exports.QuickFileOpenService = exports.quickFileOpen = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var filesystem_1 = __webpack_require__(/*! @theia/filesystem/lib/common/filesystem */ "./node_modules/@theia/filesystem/lib/common/filesystem.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "./node_modules/@theia/workspace/lib/browser/workspace-service.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var file_search_service_1 = __webpack_require__(/*! ../common/file-search-service */ "./node_modules/@theia/file-search/lib/common/file-search-service.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var label_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/label-provider */ "./node_modules/@theia/core/lib/browser/label-provider.js");
var navigation_location_service_1 = __webpack_require__(/*! @theia/editor/lib/browser/navigation/navigation-location-service */ "./node_modules/@theia/editor/lib/browser/navigation/navigation-location-service.js");
var fuzzy = __webpack_require__(/*! fuzzy */ "./node_modules/fuzzy/lib/fuzzy.js");
var message_service_1 = __webpack_require__(/*! @theia/core/lib/common/message-service */ "./node_modules/@theia/core/lib/common/message-service.js");
exports.quickFileOpen = {
    id: 'file-search.openFile',
    category: 'File',
    label: 'Open File...'
};
var QuickFileOpenService = /** @class */ (function () {
    function QuickFileOpenService() {
        /**
         * Whether to hide .gitignored (and other ignored) files.
         */
        this.hideIgnoredFiles = true;
        /**
         * Whether the dialog is currently open.
         */
        this.isOpen = false;
        /**
         * The current lookFor string input by the user.
         */
        this.currentLookFor = '';
        this.prefix = '...';
        this.cancelIndicator = new common_1.CancellationTokenSource();
    }
    Object.defineProperty(QuickFileOpenService.prototype, "description", {
        get: function () {
            return 'Open File';
        },
        enumerable: false,
        configurable: true
    });
    QuickFileOpenService.prototype.getModel = function () {
        return this;
    };
    QuickFileOpenService.prototype.getOptions = function () {
        var _this = this;
        var placeholder = 'File name to search.';
        var keybinding = this.getKeyCommand();
        if (keybinding) {
            placeholder += " (Press " + keybinding + " to show/hide ignored files)";
        }
        return {
            placeholder: placeholder,
            fuzzyMatchLabel: {
                enableSeparateSubstringMatching: true
            },
            fuzzyMatchDescription: {
                enableSeparateSubstringMatching: true
            },
            showItemsWithoutHighlight: true,
            onClose: function () {
                _this.isOpen = false;
                _this.cancelIndicator.cancel();
            }
        };
    };
    QuickFileOpenService.prototype.isEnabled = function () {
        return this.workspaceService.opened;
    };
    QuickFileOpenService.prototype.open = function () {
        // Triggering the keyboard shortcut while the dialog is open toggles
        // showing the ignored files.
        if (this.isOpen) {
            this.hideIgnoredFiles = !this.hideIgnoredFiles;
        }
        else {
            this.hideIgnoredFiles = true;
            this.currentLookFor = '';
            this.isOpen = true;
        }
        this.quickOpenService.open(this.currentLookFor);
    };
    /**
     * Get a string (suitable to show to the user) representing the keyboard
     * shortcut used to open the quick file open menu.
     */
    QuickFileOpenService.prototype.getKeyCommand = function () {
        var keyCommand = this.keybindingRegistry.getKeybindingsForCommand(exports.quickFileOpen.id);
        if (keyCommand) {
            // We only consider the first keybinding.
            var accel = this.keybindingRegistry.acceleratorFor(keyCommand[0], '+');
            return accel.join(' ');
        }
        return undefined;
    };
    QuickFileOpenService.prototype.onType = function (lookFor, acceptor) {
        return __awaiter(this, void 0, void 0, function () {
            var token, roots, alreadyCollected, recentlyUsedItems, locations, locations_1, locations_1_1, location_1, uriString, item, handler;
            var e_1, _a;
            var _this = this;
            return __generator(this, function (_b) {
                this.cancelIndicator.cancel();
                this.cancelIndicator = new common_1.CancellationTokenSource();
                token = this.cancelIndicator.token;
                roots = this.workspaceService.tryGetRoots();
                this.currentLookFor = lookFor;
                alreadyCollected = new Set();
                recentlyUsedItems = [];
                locations = __spread(this.navigationLocationService.locations()).reverse();
                try {
                    for (locations_1 = __values(locations), locations_1_1 = locations_1.next(); !locations_1_1.done; locations_1_1 = locations_1.next()) {
                        location_1 = locations_1_1.value;
                        uriString = location_1.uri.toString();
                        if (location_1.uri.scheme === 'file' && !alreadyCollected.has(uriString) && fuzzy.test(lookFor, uriString)) {
                            item = this.toItem(location_1.uri, { groupLabel: recentlyUsedItems.length === 0 ? 'recently opened' : undefined, showBorder: false });
                            recentlyUsedItems.push(item);
                            alreadyCollected.add(uriString);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (locations_1_1 && !locations_1_1.done && (_a = locations_1.return)) _a.call(locations_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (lookFor.length > 0) {
                    handler = function (results) { return __awaiter(_this, void 0, void 0, function () {
                        var fileSearchResultItems, results_1, results_1_1, fileUri, item, sortedResults, first, item;
                        var e_2, _a;
                        var _this = this;
                        return __generator(this, function (_b) {
                            if (token.isCancellationRequested) {
                                return [2 /*return*/];
                            }
                            fileSearchResultItems = [];
                            if (results.length <= 0) {
                                acceptor([this.toNoResultsItem()]);
                                return [2 /*return*/];
                            }
                            try {
                                for (results_1 = __values(results), results_1_1 = results_1.next(); !results_1_1.done; results_1_1 = results_1.next()) {
                                    fileUri = results_1_1.value;
                                    if (!alreadyCollected.has(fileUri)) {
                                        item = this.toItem(fileUri);
                                        fileSearchResultItems.push(item);
                                        alreadyCollected.add(fileUri);
                                    }
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (results_1_1 && !results_1_1.done && (_a = results_1.return)) _a.call(results_1);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                            sortedResults = fileSearchResultItems.slice();
                            sortedResults.sort(function (a, b) { return _this.compareItems(a, b); });
                            first = sortedResults[0];
                            sortedResults.shift();
                            if (first) {
                                item = this.toItem(first.getUri(), { groupLabel: 'file results', showBorder: !!recentlyUsedItems.length });
                                sortedResults.unshift(item);
                            }
                            // Return the recently used items, followed by the search results.
                            acceptor(__spread(recentlyUsedItems, sortedResults));
                            return [2 /*return*/];
                        });
                    }); };
                    this.fileSearchService.find(lookFor, {
                        rootUris: roots.map(function (r) { return r.uri; }),
                        fuzzyMatch: true,
                        limit: 200,
                        useGitIgnore: this.hideIgnoredFiles,
                        excludePatterns: ['*.git*']
                    }, token).then(handler);
                }
                else {
                    if (roots.length !== 0) {
                        acceptor(recentlyUsedItems);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    QuickFileOpenService.prototype.getRunFunction = function (uri) {
        var _this = this;
        return function (mode) {
            if (mode !== browser_1.QuickOpenMode.OPEN) {
                return false;
            }
            _this.openFile(uri);
            return true;
        };
    };
    /**
     * Compare two `QuickOpenItem`.
     *
     * @param a `QuickOpenItem` for comparison.
     * @param b `QuickOpenItem` for comparison.
     * @param member the `QuickOpenItem` object member for comparison.
     */
    QuickFileOpenService.prototype.compareItems = function (a, b, member) {
        if (member === void 0) { member = 'getLabel'; }
        /**
         * Normalize a given string.
         *
         * @param str the raw string value.
         * @returns the normalized string value.
         */
        function normalize(str) {
            return str.trim().toLowerCase();
        }
        // Normalize the user query.
        var query = normalize(this.currentLookFor);
        /**
         * Score a given string.
         *
         * @param str the string to score on.
         * @returns the score.
         */
        function score(str) {
            var match = fuzzy.match(query, str);
            // eslint-disable-next-line no-null/no-null
            return (match === null) ? 0 : match.score;
        }
        // Get the item's member values for comparison.
        var itemA = a[member]();
        var itemB = b[member]();
        // If the `URI` is used as a comparison member, perform the necessary string conversions.
        if (typeof itemA !== 'string') {
            itemA = itemA.path.toString();
        }
        if (typeof itemB !== 'string') {
            itemB = itemB.path.toString();
        }
        // Normalize the item labels.
        itemA = normalize(itemA);
        itemB = normalize(itemB);
        // Score the item labels.
        var scoreA = score(itemA);
        var scoreB = score(itemB);
        // If both label scores are identical, perform additional computation.
        if (scoreA === scoreB) {
            // Favor the label which have the smallest substring index.
            var indexA = itemA.indexOf(query);
            var indexB = itemB.indexOf(query);
            if (indexA === indexB) {
                // Favor the result with the shortest label length.
                if (itemA.length !== itemB.length) {
                    return (itemA.length < itemB.length) ? -1 : 1;
                }
                // Fallback to the alphabetical order.
                var comparison = itemB.localeCompare(itemA);
                // If the alphabetical comparison is equal, call `compareItems` recursively using the `URI` member instead.
                if (comparison === 0) {
                    return this.compareItems(a, b, 'getUri');
                }
                return itemB.localeCompare(itemA);
            }
            return indexA - indexB;
        }
        return scoreB - scoreA;
    };
    QuickFileOpenService.prototype.openFile = function (uri) {
        var _this = this;
        this.openerService.getOpener(uri)
            .then(function (opener) { return opener.open(uri); })
            .catch(function (error) { return _this.messageService.error(error); });
    };
    QuickFileOpenService.prototype.toItem = function (uriOrString, group) {
        var uri = uriOrString instanceof uri_1.default ? uriOrString : new uri_1.default(uriOrString);
        var description = this.labelProvider.getLongName(uri.parent);
        if (this.workspaceService.isMultiRootWorkspaceOpened) {
            var rootUri = this.workspaceService.getWorkspaceRootUri(uri);
            if (rootUri) {
                description = rootUri.displayName + " \u2022 " + description;
            }
        }
        var icon = this.labelProvider.getIcon(uri);
        var iconClass = icon === '' ? undefined : icon + ' file-icon';
        var options = {
            label: this.labelProvider.getName(uri),
            iconClass: iconClass,
            description: description,
            tooltip: this.labelProvider.getLongName(uri),
            uri: uri,
            hidden: false,
            run: this.getRunFunction(uri)
        };
        if (group) {
            return new browser_1.QuickOpenGroupItem(__assign(__assign({}, options), group));
        }
        else {
            return new browser_1.QuickOpenItem(options);
        }
    };
    QuickFileOpenService.prototype.toNoResultsItem = function () {
        var options = {
            label: 'No matching results',
            run: function () { return false; }
        };
        return new browser_1.QuickOpenItem(options);
    };
    __decorate([
        inversify_1.inject(browser_1.KeybindingRegistry),
        __metadata("design:type", browser_1.KeybindingRegistry)
    ], QuickFileOpenService.prototype, "keybindingRegistry", void 0);
    __decorate([
        inversify_1.inject(filesystem_1.FileSystem),
        __metadata("design:type", Object)
    ], QuickFileOpenService.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], QuickFileOpenService.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(browser_1.OpenerService),
        __metadata("design:type", Object)
    ], QuickFileOpenService.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(browser_1.PrefixQuickOpenService),
        __metadata("design:type", browser_1.PrefixQuickOpenService)
    ], QuickFileOpenService.prototype, "quickOpenService", void 0);
    __decorate([
        inversify_1.inject(file_search_service_1.FileSearchService),
        __metadata("design:type", Object)
    ], QuickFileOpenService.prototype, "fileSearchService", void 0);
    __decorate([
        inversify_1.inject(label_provider_1.LabelProvider),
        __metadata("design:type", label_provider_1.LabelProvider)
    ], QuickFileOpenService.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(navigation_location_service_1.NavigationLocationService),
        __metadata("design:type", navigation_location_service_1.NavigationLocationService)
    ], QuickFileOpenService.prototype, "navigationLocationService", void 0);
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], QuickFileOpenService.prototype, "messageService", void 0);
    QuickFileOpenService = __decorate([
        inversify_1.injectable()
    ], QuickFileOpenService);
    return QuickFileOpenService;
}());
exports.QuickFileOpenService = QuickFileOpenService;


/***/ }),

/***/ "./node_modules/@theia/file-search/lib/common/file-search-service.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@theia/file-search/lib/common/file-search-service.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSearchService = exports.fileSearchServicePath = void 0;
exports.fileSearchServicePath = '/services/search';
exports.FileSearchService = Symbol('FileSearchService');


/***/ }),

/***/ "./node_modules/@theia/filesystem/lib/common/filesystem-utils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@theia/filesystem/lib/common/filesystem-utils.js ***!
  \***********************************************************************/
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
exports.FileSystemUtils = void 0;
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var FileSystemUtils;
(function (FileSystemUtils) {
    /**
     * Tildify path, replacing `home` with `~` if user's `home` is present at the beginning of the path.
     * This is a non-operation for Windows.
     *
     * @param resourcePath
     * @param home
     */
    function tildifyPath(resourcePath, home) {
        var path = new common_1.Path(resourcePath);
        var isWindows = path.root && common_1.Path.isDrive(path.root.base);
        if (!isWindows && home && resourcePath.indexOf(home + "/") === 0) {
            return resourcePath.replace(home + "/", '~/');
        }
        return resourcePath;
    }
    FileSystemUtils.tildifyPath = tildifyPath;
    /**
     * Generate unique URI for a given parent which does not collide
     *
     * @param parentUri the `URI` of the parent
     * @param parent the `FileStat` of the parent
     * @param name the resource name
     * @param ext the resource extension
     */
    function generateUniqueResourceURI(parentUri, parent, name, ext) {
        if (ext === void 0) { ext = ''; }
        var children = !parent.children ? [] : parent.children.map(function (child) { return new uri_1.default(child.uri); });
        var index = 1;
        var base = name + ext;
        while (children.some(function (child) { return child.path.base === base; })) {
            index = index + 1;
            base = name + '_' + index + ext;
        }
        return parentUri.resolve(base);
    }
    FileSystemUtils.generateUniqueResourceURI = generateUniqueResourceURI;
})(FileSystemUtils = exports.FileSystemUtils || (exports.FileSystemUtils = {}));


/***/ }),

/***/ "./node_modules/@theia/filesystem/lib/common/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@theia/filesystem/lib/common/index.js ***!
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
__exportStar(__webpack_require__(/*! ./filesystem */ "./node_modules/@theia/filesystem/lib/common/filesystem.js"), exports);
__exportStar(__webpack_require__(/*! ./filesystem-utils */ "./node_modules/@theia/filesystem/lib/common/filesystem-utils.js"), exports);


/***/ })

}]);
//# sourceMappingURL=61.bundle.js.map