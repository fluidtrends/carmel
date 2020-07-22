(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/@theia/workspace/lib/browser/workspace-preferences.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/workspace/lib/browser/workspace-preferences.js ***!
  \****************************************************************************/
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
exports.bindWorkspacePreferences = exports.createWorkspacePreferences = exports.WorkspacePreferences = exports.workspacePreferenceSchema = void 0;
var preferences_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences */ "./node_modules/@theia/core/lib/browser/preferences/index.js");
exports.workspacePreferenceSchema = {
    type: 'object',
    properties: {
        'workspace.preserveWindow': {
            description: 'Enable opening workspaces in current window.',
            type: 'boolean',
            default: false
        },
        'workspace.supportMultiRootWorkspace': {
            description: 'Controls whether multi-root workspace support is enabled.',
            type: 'boolean',
            default: true
        }
    }
};
exports.WorkspacePreferences = Symbol('WorkspacePreferences');
function createWorkspacePreferences(preferences) {
    return preferences_1.createPreferenceProxy(preferences, exports.workspacePreferenceSchema);
}
exports.createWorkspacePreferences = createWorkspacePreferences;
function bindWorkspacePreferences(bind) {
    bind(exports.WorkspacePreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(preferences_1.PreferenceService);
        return createWorkspacePreferences(preferences);
    }).inSingletonScope();
    bind(preferences_1.PreferenceContribution).toConstantValue({ schema: exports.workspacePreferenceSchema });
}
exports.bindWorkspacePreferences = bindWorkspacePreferences;


/***/ }),

/***/ "./node_modules/@theia/workspace/lib/browser/workspace-service.js":
/*!************************************************************************!*\
  !*** ./node_modules/@theia/workspace/lib/browser/workspace-service.js ***!
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
exports.WorkspaceData = exports.WorkspaceService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var common_1 = __webpack_require__(/*! @theia/filesystem/lib/common */ "./node_modules/@theia/filesystem/lib/common/index.js");
var filesystem_watcher_1 = __webpack_require__(/*! @theia/filesystem/lib/browser/filesystem-watcher */ "./node_modules/@theia/filesystem/lib/browser/filesystem-watcher.js");
var common_2 = __webpack_require__(/*! ../common */ "./node_modules/@theia/workspace/lib/common/index.js");
var window_service_1 = __webpack_require__(/*! @theia/core/lib/browser/window/window-service */ "./node_modules/@theia/core/lib/browser/window/window-service.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "./node_modules/@theia/core/lib/common/promise-util.js");
var env_variables_1 = __webpack_require__(/*! @theia/core/lib/common/env-variables */ "./node_modules/@theia/core/lib/common/env-variables/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var workspace_preferences_1 = __webpack_require__(/*! ./workspace-preferences */ "./node_modules/@theia/workspace/lib/browser/workspace-preferences.js");
var jsoncparser = __webpack_require__(/*! jsonc-parser */ "./node_modules/jsonc-parser/lib/esm/main.js");
var Ajv = __webpack_require__(/*! ajv */ "./node_modules/ajv/lib/ajv.js");
var frontend_application_config_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/frontend-application-config-provider */ "./node_modules/@theia/core/lib/browser/frontend-application-config-provider.js");
/**
 * The workspace service.
 */
var WorkspaceService = /** @class */ (function () {
    function WorkspaceService() {
        this._roots = [];
        this.deferredRoots = new promise_util_1.Deferred();
        this.onWorkspaceChangeEmitter = new core_1.Emitter();
        this.onWorkspaceLocationChangedEmitter = new core_1.Emitter();
        this.toDisposeOnWorkspace = new core_1.DisposableCollection();
        this.rootWatchers = new Map();
    }
    WorkspaceService.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var wsUriString, wsStat;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.applicationName = frontend_application_config_provider_1.FrontendApplicationConfigProvider.get().applicationName;
                        return [4 /*yield*/, this.getDefaultWorkspaceUri()];
                    case 1:
                        wsUriString = _a.sent();
                        return [4 /*yield*/, this.toFileStat(wsUriString)];
                    case 2:
                        wsStat = _a.sent();
                        return [4 /*yield*/, this.setWorkspace(wsStat)];
                    case 3:
                        _a.sent();
                        this.watcher.onFilesChanged(function (event) {
                            if (_this._workspace && filesystem_watcher_1.FileChangeEvent.isAffected(event, new uri_1.default(_this._workspace.uri))) {
                                _this.updateWorkspace();
                            }
                        });
                        this.preferences.onPreferenceChanged(function (event) {
                            var multiRootPrefName = 'workspace.supportMultiRootWorkspace';
                            if (event.preferenceName === multiRootPrefName) {
                                _this.updateWorkspace();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Resolves to the default workspace URI as string.
     *
     * The default implementation tries to extract the default workspace location
     * from the `window.location.hash`, then falls-back to the most recently
     * used workspace root from the server.
     *
     * It is not ensured that the resolved workspace URI is valid, it can point
     * to a non-existing location.
     */
    WorkspaceService.prototype.getDefaultWorkspaceUri = function () {
        return this.doGetDefaultWorkspaceUri();
    };
    WorkspaceService.prototype.doGetDefaultWorkspaceUri = function () {
        return __awaiter(this, void 0, void 0, function () {
            var wpPath, workspaceUri, workspaceStat, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(window.location.hash.length > 1)) return [3 /*break*/, 4];
                        wpPath = decodeURI(window.location.hash.substring(1));
                        workspaceUri = new uri_1.default().withPath(wpPath).withScheme('file');
                        return [4 /*yield*/, this.fileSystem.getFileStat(workspaceUri.toString())];
                    case 1:
                        workspaceStat = _b.sent();
                        _a = workspaceStat && !workspaceStat.isDirectory;
                        if (!_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.isWorkspaceFile(workspaceStat)];
                    case 2:
                        _a = !(_b.sent());
                        _b.label = 3;
                    case 3:
                        if (_a) {
                            this.messageService.error("Not a valid workspace file: " + workspaceUri);
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, workspaceUri.toString()];
                    case 4: 
                    // Else, ask the server for its suggested workspace (usually the one
                    // specified on the CLI, or the most recent).
                    return [2 /*return*/, this.server.getMostRecentlyUsedWorkspace()];
                }
            });
        });
    };
    /**
     * Get the path of the workspace to use initially.
     * @deprecated use `WorkspaceService#getDefaultWorkspaceUri` instead.
     */
    WorkspaceService.prototype.getDefaultWorkspacePath = function () {
        return this.getDefaultWorkspaceUri();
    };
    /**
     * Set the URL fragment to the given workspace path.
     */
    WorkspaceService.prototype.setURLFragment = function (workspacePath) {
        window.location.hash = workspacePath;
    };
    Object.defineProperty(WorkspaceService.prototype, "roots", {
        get: function () {
            return this.deferredRoots.promise;
        },
        enumerable: false,
        configurable: true
    });
    WorkspaceService.prototype.tryGetRoots = function () {
        return this._roots;
    };
    Object.defineProperty(WorkspaceService.prototype, "workspace", {
        get: function () {
            return this._workspace;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspaceService.prototype, "onWorkspaceChanged", {
        get: function () {
            return this.onWorkspaceChangeEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspaceService.prototype, "onWorkspaceLocationChanged", {
        get: function () {
            return this.onWorkspaceLocationChangedEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    WorkspaceService.prototype.setWorkspace = function (workspaceStat) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (common_1.FileStat.equals(this._workspace, workspaceStat)) {
                            return [2 /*return*/];
                        }
                        this.toDisposeOnWorkspace.dispose();
                        this._workspace = workspaceStat;
                        if (!this._workspace) return [3 /*break*/, 2];
                        uri = new uri_1.default(this._workspace.uri);
                        _b = (_a = this.toDisposeOnWorkspace).push;
                        return [4 /*yield*/, this.watcher.watchFileChanges(uri)];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        this.setURLFragment(uri.path.toString());
                        return [3 /*break*/, 3];
                    case 2:
                        this.setURLFragment('');
                        _c.label = 3;
                    case 3:
                        this.updateTitle();
                        return [4 /*yield*/, this.updateWorkspace()];
                    case 4:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkspaceService.prototype.updateWorkspace = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._workspace) {
                            this.toFileStat(this._workspace.uri).then(function (stat) { return _this._workspace = stat; });
                        }
                        return [4 /*yield*/, this.updateRoots()];
                    case 1:
                        _a.sent();
                        this.watchRoots();
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkspaceService.prototype.updateRoots = function () {
        return __awaiter(this, void 0, void 0, function () {
            var newRoots, rootsChanged, _loop_1, this_1, newRoots_1, newRoots_1_1, newRoot, state_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.computeRoots()];
                    case 1:
                        newRoots = _b.sent();
                        rootsChanged = false;
                        if (newRoots.length !== this._roots.length || newRoots.length === 0) {
                            rootsChanged = true;
                        }
                        else {
                            _loop_1 = function (newRoot) {
                                if (!this_1._roots.some(function (r) { return r.uri === newRoot.uri; })) {
                                    rootsChanged = true;
                                    return "break";
                                }
                            };
                            this_1 = this;
                            try {
                                for (newRoots_1 = __values(newRoots), newRoots_1_1 = newRoots_1.next(); !newRoots_1_1.done; newRoots_1_1 = newRoots_1.next()) {
                                    newRoot = newRoots_1_1.value;
                                    state_1 = _loop_1(newRoot);
                                    if (state_1 === "break")
                                        break;
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (newRoots_1_1 && !newRoots_1_1.done && (_a = newRoots_1.return)) _a.call(newRoots_1);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }
                        if (rootsChanged) {
                            this._roots = newRoots;
                            this.deferredRoots.resolve(this._roots); // in order to resolve first
                            this.deferredRoots = new promise_util_1.Deferred();
                            this.deferredRoots.resolve(this._roots);
                            this.onWorkspaceChangeEmitter.fire(this._roots);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkspaceService.prototype.computeRoots = function () {
        return __awaiter(this, void 0, void 0, function () {
            var roots, workspaceData, _a, _b, path, valid, e_2_1;
            var e_2, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        roots = [];
                        if (!this._workspace) return [3 /*break*/, 9];
                        if (this._workspace.isDirectory) {
                            return [2 /*return*/, [this._workspace]];
                        }
                        return [4 /*yield*/, this.getWorkspaceDataFromFile()];
                    case 1:
                        workspaceData = _d.sent();
                        if (!workspaceData) return [3 /*break*/, 9];
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 7, 8, 9]);
                        _a = __values(workspaceData.folders), _b = _a.next();
                        _d.label = 3;
                    case 3:
                        if (!!_b.done) return [3 /*break*/, 6];
                        path = _b.value.path;
                        return [4 /*yield*/, this.toValidRoot(path)];
                    case 4:
                        valid = _d.sent();
                        if (valid) {
                            roots.push(valid);
                        }
                        else {
                            roots.push({
                                uri: path,
                                lastModification: Date.now(),
                                isDirectory: true
                            });
                        }
                        _d.label = 5;
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_2_1 = _d.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/, roots];
                }
            });
        });
    };
    WorkspaceService.prototype.getWorkspaceDataFromFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, stat, content, strippedContent, data;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this._workspace;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fileSystem.exists(this._workspace.uri)];
                    case 1:
                        _a = (_c.sent());
                        _c.label = 2;
                    case 2:
                        if (!_a) return [3 /*break*/, 7];
                        if (!this._workspace.isDirectory) return [3 /*break*/, 3];
                        return [2 /*return*/, {
                                folders: [{ path: this._workspace.uri }]
                            }];
                    case 3: return [4 /*yield*/, this.isWorkspaceFile(this._workspace)];
                    case 4:
                        if (!_c.sent()) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.fileSystem.resolveContent(this._workspace.uri)];
                    case 5:
                        _b = _c.sent(), stat = _b.stat, content = _b.content;
                        strippedContent = jsoncparser.stripComments(content);
                        data = jsoncparser.parse(strippedContent);
                        if (data && WorkspaceData.is(data)) {
                            return [2 /*return*/, WorkspaceData.transformToAbsolute(data, stat)];
                        }
                        this.logger.error("Unable to retrieve workspace data from the file: '" + this._workspace.uri + "'. Please check if the file is corrupted.");
                        return [3 /*break*/, 7];
                    case 6:
                        this.logger.warn("Not a valid workspace file: " + this._workspace.uri);
                        _c.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    WorkspaceService.prototype.formatTitle = function (title) {
        var name = this.applicationName;
        return title ? title + " \u2014 " + name : name;
    };
    WorkspaceService.prototype.updateTitle = function () {
        var title;
        if (this._workspace) {
            var uri = new uri_1.default(this._workspace.uri);
            var displayName = uri.displayName;
            if (!this._workspace.isDirectory &&
                (displayName.endsWith("." + common_2.THEIA_EXT) || displayName.endsWith("." + common_2.VSCODE_EXT))) {
                title = displayName.slice(0, displayName.lastIndexOf('.'));
            }
            else {
                title = displayName;
            }
        }
        document.title = this.formatTitle(title);
    };
    /**
     * on unload, we set our workspace root as the last recently used on the backend.
     */
    WorkspaceService.prototype.onStop = function () {
        this.server.setMostRecentlyUsedWorkspace(this._workspace ? this._workspace.uri : '');
    };
    WorkspaceService.prototype.recentWorkspaces = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.server.getRecentWorkspaces()];
            });
        });
    };
    Object.defineProperty(WorkspaceService.prototype, "opened", {
        /**
         * Returns `true` if theia has an opened workspace or folder
         * @returns {boolean}
         */
        get: function () {
            return !!this._workspace;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspaceService.prototype, "isMultiRootWorkspaceOpened", {
        /**
         * Returns `true` if a multiple-root workspace is currently open.
         * @returns {boolean}
         */
        get: function () {
            return !!this.workspace && !this.workspace.isDirectory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkspaceService.prototype, "isMultiRootWorkspaceEnabled", {
        /**
         * Returns `true` if there is an opened workspace, and multi root workspace support is enabled.
         * @returns {boolean}
         */
        get: function () {
            return this.opened && this.preferences['workspace.supportMultiRootWorkspace'];
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Opens directory, or recreates a workspace from the file that `uri` points to.
     */
    WorkspaceService.prototype.open = function (uri, options) {
        this.doOpen(uri, options);
    };
    WorkspaceService.prototype.doOpen = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var rootUri, stat, _a, message, preserveWindow;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        rootUri = uri.toString();
                        return [4 /*yield*/, this.toFileStat(rootUri)];
                    case 1:
                        stat = _b.sent();
                        if (!stat) return [3 /*break*/, 6];
                        _a = !stat.isDirectory;
                        if (!_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.isWorkspaceFile(stat)];
                    case 2:
                        _a = !(_b.sent());
                        _b.label = 3;
                    case 3:
                        if (_a) {
                            message = "Not a valid workspace file: " + uri;
                            this.messageService.error(message);
                            throw new Error(message);
                        }
                        // The same window has to be preserved too (instead of opening a new one), if the workspace root is not yet available and we are setting it for the first time.
                        // Option passed as parameter has the highest priority (for api developers), then the preference, then the default.
                        return [4 /*yield*/, this.roots];
                    case 4:
                        // The same window has to be preserved too (instead of opening a new one), if the workspace root is not yet available and we are setting it for the first time.
                        // Option passed as parameter has the highest priority (for api developers), then the preference, then the default.
                        _b.sent();
                        preserveWindow = __assign({ preserveWindow: this.preferences['workspace.preserveWindow'] || !this.opened }, options).preserveWindow;
                        return [4 /*yield*/, this.server.setMostRecentlyUsedWorkspace(rootUri)];
                    case 5:
                        _b.sent();
                        if (preserveWindow) {
                            this._workspace = stat;
                        }
                        this.openWindow(stat, { preserveWindow: preserveWindow });
                        return [2 /*return*/];
                    case 6: throw new Error('Invalid workspace root URI. Expected an existing directory location.');
                }
            });
        });
    };
    /**
     * Adds a root folder to the workspace
     * @param uri URI of the root folder being added
     */
    WorkspaceService.prototype.addRoot = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.spliceRoots(this._roots.length, 0, uri)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Removes root folder(s) from workspace.
     */
    WorkspaceService.prototype.removeRoots = function (uris) {
        return __awaiter(this, void 0, void 0, function () {
            var workspaceData, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.opened) {
                            throw new Error('Folder cannot be removed as there is no active folder in the current workspace.');
                        }
                        if (!this._workspace) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getWorkspaceDataFromFile()];
                    case 1:
                        workspaceData = _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.writeWorkspaceFile(this._workspace, WorkspaceData.buildWorkspaceData(this._roots.filter(function (root) { return uris.findIndex(function (u) { return u.toString() === root.uri; }) < 0; }), workspaceData.settings))];
                    case 2:
                        _a._workspace = _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    WorkspaceService.prototype.spliceRoots = function (start, deleteCount) {
        var rootsToAdd = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rootsToAdd[_i - 2] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var dedup, roots, toAdd, rootsToAdd_1, rootsToAdd_1_1, root, uri, toRemove, untitledWorkspace, currentData, newData;
            var e_3, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this._workspace) {
                            throw new Error('There is not active workspace');
                        }
                        dedup = new Set();
                        roots = this._roots.map(function (root) { return (dedup.add(root.uri), root.uri); });
                        toAdd = [];
                        try {
                            for (rootsToAdd_1 = __values(rootsToAdd), rootsToAdd_1_1 = rootsToAdd_1.next(); !rootsToAdd_1_1.done; rootsToAdd_1_1 = rootsToAdd_1.next()) {
                                root = rootsToAdd_1_1.value;
                                uri = root.toString();
                                if (!dedup.has(uri)) {
                                    dedup.add(uri);
                                    toAdd.push(uri);
                                }
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (rootsToAdd_1_1 && !rootsToAdd_1_1.done && (_a = rootsToAdd_1.return)) _a.call(rootsToAdd_1);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        toRemove = roots.splice.apply(roots, __spread([start, deleteCount || 0], toAdd));
                        if (!toRemove.length && !toAdd.length) {
                            return [2 /*return*/, []];
                        }
                        if (!this._workspace.isDirectory) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getUntitledWorkspace()];
                    case 1:
                        untitledWorkspace = _b.sent();
                        if (!untitledWorkspace) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.save(untitledWorkspace)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [4 /*yield*/, this.getWorkspaceDataFromFile()];
                    case 4:
                        currentData = _b.sent();
                        newData = WorkspaceData.buildWorkspaceData(roots, currentData && currentData.settings);
                        return [4 /*yield*/, this.writeWorkspaceFile(this._workspace, newData)];
                    case 5:
                        _b.sent();
                        return [2 /*return*/, toRemove.map(function (root) { return new uri_1.default(root); })];
                }
            });
        });
    };
    WorkspaceService.prototype.getUntitledWorkspace = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, common_2.getTemporaryWorkspaceFileUri(this.envVariableServer)];
            });
        });
    };
    WorkspaceService.prototype.writeWorkspaceFile = function (workspaceFile, workspaceData) {
        return __awaiter(this, void 0, void 0, function () {
            var data, edits, result, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!workspaceFile) return [3 /*break*/, 2];
                        data = JSON.stringify(WorkspaceData.transformToRelative(workspaceData, workspaceFile));
                        edits = jsoncparser.format(data, undefined, { tabSize: 3, insertSpaces: true, eol: '' });
                        result = jsoncparser.applyEdits(data, edits);
                        return [4 /*yield*/, this.fileSystem.setContent(workspaceFile, result)];
                    case 1:
                        stat = _a.sent();
                        return [2 /*return*/, stat];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Clears current workspace root.
     */
    WorkspaceService.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._workspace = undefined;
                        this._roots.length = 0;
                        return [4 /*yield*/, this.server.setMostRecentlyUsedWorkspace('')];
                    case 1:
                        _a.sent();
                        this.reloadWindow();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * returns a FileStat if the argument URI points to an existing directory. Otherwise, `undefined`.
     */
    WorkspaceService.prototype.toValidRoot = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var fileStat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toFileStat(uri)];
                    case 1:
                        fileStat = _a.sent();
                        if (fileStat && fileStat.isDirectory) {
                            return [2 /*return*/, fileStat];
                        }
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    /**
     * returns a FileStat if the argument URI points to a file or directory. Otherwise, `undefined`.
     */
    WorkspaceService.prototype.toFileStat = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var uriStr, normalizedUriStr, fileStat, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!uri) {
                            return [2 /*return*/, undefined];
                        }
                        uriStr = uri.toString();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        if (uriStr.endsWith('/')) {
                            uriStr = uriStr.slice(0, -1);
                        }
                        normalizedUriStr = new uri_1.default(uriStr).normalizePath().toString();
                        return [4 /*yield*/, this.fileSystem.getFileStat(normalizedUriStr)];
                    case 2:
                        fileStat = _a.sent();
                        if (!fileStat) {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, fileStat];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, undefined];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    WorkspaceService.prototype.openWindow = function (uri, options) {
        var _this = this;
        var workspacePath = new uri_1.default(uri.uri).path.toString();
        if (this.shouldPreserveWindow(options)) {
            this.reloadWindow();
        }
        else {
            try {
                this.openNewWindow(workspacePath);
            }
            catch (error) {
                // Fall back to reloading the current window in case the browser has blocked the new window
                this._workspace = uri;
                this.logger.error(error.toString()).then(function () { return _this.reloadWindow(); });
            }
        }
    };
    WorkspaceService.prototype.reloadWindow = function () {
        // Set the new workspace path as the URL fragment.
        if (this._workspace !== undefined) {
            this.setURLFragment(new uri_1.default(this._workspace.uri).path.toString());
        }
        else {
            this.setURLFragment('');
        }
        window.location.reload(true);
    };
    WorkspaceService.prototype.openNewWindow = function (workspacePath) {
        var url = new URL(window.location.href);
        url.hash = workspacePath;
        this.windowService.openNewWindow(url.toString());
    };
    WorkspaceService.prototype.shouldPreserveWindow = function (options) {
        return options !== undefined && !!options.preserveWindow;
    };
    /**
     * Return true if one of the paths in paths array is present in the workspace
     * NOTE: You should always explicitly use `/` as the separator between the path segments.
     */
    WorkspaceService.prototype.containsSome = function (paths) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, root, uri, paths_1, paths_1_1, path, fileUri, exists, e_4_1, e_5_1;
            var e_5, _c, e_4, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.roots];
                    case 1:
                        _e.sent();
                        if (!this.opened) return [3 /*break*/, 15];
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 13, 14, 15]);
                        _a = __values(this._roots), _b = _a.next();
                        _e.label = 3;
                    case 3:
                        if (!!_b.done) return [3 /*break*/, 12];
                        root = _b.value;
                        uri = new uri_1.default(root.uri);
                        _e.label = 4;
                    case 4:
                        _e.trys.push([4, 9, 10, 11]);
                        paths_1 = (e_4 = void 0, __values(paths)), paths_1_1 = paths_1.next();
                        _e.label = 5;
                    case 5:
                        if (!!paths_1_1.done) return [3 /*break*/, 8];
                        path = paths_1_1.value;
                        fileUri = uri.resolve(path).toString();
                        return [4 /*yield*/, this.fileSystem.exists(fileUri)];
                    case 6:
                        exists = _e.sent();
                        if (exists) {
                            return [2 /*return*/, exists];
                        }
                        _e.label = 7;
                    case 7:
                        paths_1_1 = paths_1.next();
                        return [3 /*break*/, 5];
                    case 8: return [3 /*break*/, 11];
                    case 9:
                        e_4_1 = _e.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 11];
                    case 10:
                        try {
                            if (paths_1_1 && !paths_1_1.done && (_d = paths_1.return)) _d.call(paths_1);
                        }
                        finally { if (e_4) throw e_4.error; }
                        return [7 /*endfinally*/];
                    case 11:
                        _b = _a.next();
                        return [3 /*break*/, 3];
                    case 12: return [3 /*break*/, 15];
                    case 13:
                        e_5_1 = _e.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 15];
                    case 14:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_5) throw e_5.error; }
                        return [7 /*endfinally*/];
                    case 15: return [2 /*return*/, false];
                }
            });
        });
    };
    Object.defineProperty(WorkspaceService.prototype, "saved", {
        get: function () {
            return !!this._workspace && !this._workspace.isDirectory;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Save workspace data into a file
     * @param uri URI or FileStat of the workspace file
     */
    WorkspaceService.prototype.save = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var uriStr, workspaceData, _a, _b, p, preferences, stat, _c, _d, _e;
            var e_6, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        uriStr = uri instanceof uri_1.default ? uri.toString() : uri.uri;
                        return [4 /*yield*/, this.fileSystem.exists(uriStr)];
                    case 1:
                        if (!!(_g.sent())) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.fileSystem.createFile(uriStr)];
                    case 2:
                        _g.sent();
                        _g.label = 3;
                    case 3:
                        workspaceData = { folders: [], settings: {} };
                        if (!this.saved) {
                            try {
                                for (_a = __values(Object.keys(this.schemaProvider.getCombinedSchema().properties)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                    p = _b.value;
                                    if (this.schemaProvider.isValidInScope(p, browser_1.PreferenceScope.Folder)) {
                                        continue;
                                    }
                                    preferences = this.preferenceImpl.inspect(p);
                                    if (preferences && preferences.workspaceValue) {
                                        workspaceData.settings[p] = preferences.workspaceValue;
                                    }
                                }
                            }
                            catch (e_6_1) { e_6 = { error: e_6_1 }; }
                            finally {
                                try {
                                    if (_b && !_b.done && (_f = _a.return)) _f.call(_a);
                                }
                                finally { if (e_6) throw e_6.error; }
                            }
                        }
                        return [4 /*yield*/, this.toFileStat(uriStr)];
                    case 4:
                        stat = _g.sent();
                        _d = (_c = Object).assign;
                        _e = [workspaceData];
                        return [4 /*yield*/, this.getWorkspaceDataFromFile()];
                    case 5:
                        _d.apply(_c, _e.concat([_g.sent()]));
                        return [4 /*yield*/, this.writeWorkspaceFile(stat, WorkspaceData.buildWorkspaceData(this._roots, workspaceData ? workspaceData.settings : undefined))];
                    case 6:
                        stat = _g.sent();
                        return [4 /*yield*/, this.server.setMostRecentlyUsedWorkspace(uriStr)];
                    case 7:
                        _g.sent();
                        return [4 /*yield*/, this.setWorkspace(stat)];
                    case 8:
                        _g.sent();
                        this.onWorkspaceLocationChangedEmitter.fire(stat);
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkspaceService.prototype.watchRoots = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rootUris, _a, _b, _c, uri, watcher, _d, _e, root;
            var e_7, _f, e_8, _g;
            return __generator(this, function (_h) {
                rootUris = new Set(this._roots.map(function (r) { return r.uri; }));
                try {
                    for (_a = __values(this.rootWatchers.entries()), _b = _a.next(); !_b.done; _b = _a.next()) {
                        _c = __read(_b.value, 2), uri = _c[0], watcher = _c[1];
                        if (!rootUris.has(uri)) {
                            watcher.dispose();
                        }
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_f = _a.return)) _f.call(_a);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
                try {
                    for (_d = __values(this._roots), _e = _d.next(); !_e.done; _e = _d.next()) {
                        root = _e.value;
                        this.watchRoot(root);
                    }
                }
                catch (e_8_1) { e_8 = { error: e_8_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_g = _d.return)) _g.call(_d);
                    }
                    finally { if (e_8) throw e_8.error; }
                }
                return [2 /*return*/];
            });
        });
    };
    WorkspaceService.prototype.watchRoot = function (root) {
        return __awaiter(this, void 0, void 0, function () {
            var uriStr, watcher;
            var _this = this;
            return __generator(this, function (_a) {
                uriStr = root.uri;
                if (this.rootWatchers.has(uriStr)) {
                    return [2 /*return*/];
                }
                watcher = this.watcher.watchFileChanges(new uri_1.default(uriStr));
                this.rootWatchers.set(uriStr, core_1.Disposable.create(function () {
                    watcher.then(function (disposable) { return disposable.dispose(); });
                    _this.rootWatchers.delete(uriStr);
                }));
                return [2 /*return*/];
            });
        });
    };
    /**
     * Returns the workspace root uri that the given file belongs to.
     * In case that the file is found in more than one workspace roots, returns the root that is closest to the file.
     * If the file is not from the current workspace, returns `undefined`.
     * @param uri URI of the file
     */
    WorkspaceService.prototype.getWorkspaceRootUri = function (uri) {
        var e_9, _a;
        if (!uri) {
            var root = this.tryGetRoots()[0];
            if (root) {
                return new uri_1.default(root.uri);
            }
            return undefined;
        }
        var rootUris = [];
        try {
            for (var _b = __values(this.tryGetRoots()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var root = _c.value;
                var rootUri = new uri_1.default(root.uri);
                if (rootUri && rootUri.isEqualOrParent(uri)) {
                    rootUris.push(rootUri);
                }
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_9) throw e_9.error; }
        }
        return rootUris.sort(function (r1, r2) { return r2.toString().length - r1.toString().length; })[0];
    };
    WorkspaceService.prototype.areWorkspaceRoots = function (uris) {
        if (!uris.length) {
            return false;
        }
        var rootUris = new Set(this.tryGetRoots().map(function (root) { return root.uri; }));
        return uris.every(function (uri) { return rootUris.has(uri.toString()); });
    };
    /**
     * Check if the file should be considered as a workspace file.
     *
     * Example: We should not try to read the contents of an .exe file.
     */
    WorkspaceService.prototype.isWorkspaceFile = function (fileStat) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, fileStat.uri.endsWith("." + common_2.THEIA_EXT) || fileStat.uri.endsWith("." + common_2.VSCODE_EXT)];
            });
        });
    };
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], WorkspaceService.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(filesystem_watcher_1.FileSystemWatcher),
        __metadata("design:type", filesystem_watcher_1.FileSystemWatcher)
    ], WorkspaceService.prototype, "watcher", void 0);
    __decorate([
        inversify_1.inject(common_2.WorkspaceServer),
        __metadata("design:type", Object)
    ], WorkspaceService.prototype, "server", void 0);
    __decorate([
        inversify_1.inject(window_service_1.WindowService),
        __metadata("design:type", Object)
    ], WorkspaceService.prototype, "windowService", void 0);
    __decorate([
        inversify_1.inject(core_1.ILogger),
        __metadata("design:type", Object)
    ], WorkspaceService.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(workspace_preferences_1.WorkspacePreferences),
        __metadata("design:type", Object)
    ], WorkspaceService.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceServiceImpl),
        __metadata("design:type", browser_1.PreferenceServiceImpl)
    ], WorkspaceService.prototype, "preferenceImpl", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceSchemaProvider),
        __metadata("design:type", browser_1.PreferenceSchemaProvider)
    ], WorkspaceService.prototype, "schemaProvider", void 0);
    __decorate([
        inversify_1.inject(env_variables_1.EnvVariablesServer),
        __metadata("design:type", Object)
    ], WorkspaceService.prototype, "envVariableServer", void 0);
    __decorate([
        inversify_1.inject(core_1.MessageService),
        __metadata("design:type", core_1.MessageService)
    ], WorkspaceService.prototype, "messageService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], WorkspaceService.prototype, "init", null);
    WorkspaceService = __decorate([
        inversify_1.injectable()
    ], WorkspaceService);
    return WorkspaceService;
}());
exports.WorkspaceService = WorkspaceService;
var WorkspaceData;
(function (WorkspaceData) {
    var validateSchema = new Ajv().compile({
        type: 'object',
        properties: {
            folders: {
                description: 'Root folders in the workspace',
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        path: {
                            type: 'string',
                        }
                    },
                    required: ['path']
                }
            },
            settings: {
                description: 'Workspace preferences',
                type: 'object'
            }
        },
        required: ['folders']
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(data) {
        return !!validateSchema(data);
    }
    WorkspaceData.is = is;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function buildWorkspaceData(folders, settings) {
        var roots = [];
        if (folders.length > 0) {
            if (typeof folders[0] !== 'string') {
                roots = folders.map(function (folder) { return folder.uri; });
            }
            else {
                roots = folders;
            }
        }
        var data = {
            folders: roots.map(function (folder) { return ({ path: folder }); })
        };
        if (settings) {
            data.settings = settings;
        }
        return data;
    }
    WorkspaceData.buildWorkspaceData = buildWorkspaceData;
    function transformToRelative(data, workspaceFile) {
        var e_10, _a;
        var folderUris = [];
        var workspaceFileUri = new uri_1.default(workspaceFile ? workspaceFile.uri : '').withScheme('file');
        try {
            for (var _b = __values(data.folders), _c = _b.next(); !_c.done; _c = _b.next()) {
                var path = _c.value.path;
                var folderUri = new uri_1.default(path).withScheme('file');
                var rel = workspaceFileUri.parent.relative(folderUri);
                if (rel) {
                    folderUris.push(rel.toString());
                }
                else {
                    folderUris.push(folderUri.toString());
                }
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_10) throw e_10.error; }
        }
        return buildWorkspaceData(folderUris, data.settings);
    }
    WorkspaceData.transformToRelative = transformToRelative;
    function transformToAbsolute(data, workspaceFile) {
        var e_11, _a;
        if (workspaceFile) {
            var folders = [];
            try {
                for (var _b = __values(data.folders), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var folder = _c.value;
                    var path = folder.path;
                    if (path.startsWith('file:///')) {
                        folders.push(path);
                    }
                    else {
                        folders.push(new uri_1.default(workspaceFile.uri).withScheme('file').parent.resolve(path).toString());
                    }
                }
            }
            catch (e_11_1) { e_11 = { error: e_11_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_11) throw e_11.error; }
            }
            return Object.assign(data, buildWorkspaceData(folders, data.settings));
        }
        return data;
    }
    WorkspaceData.transformToAbsolute = transformToAbsolute;
})(WorkspaceData = exports.WorkspaceData || (exports.WorkspaceData = {}));


/***/ }),

/***/ "./node_modules/@theia/workspace/lib/common/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@theia/workspace/lib/common/index.js ***!
  \***********************************************************/
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
__exportStar(__webpack_require__(/*! ./workspace-protocol */ "./node_modules/@theia/workspace/lib/common/workspace-protocol.js"), exports);
__exportStar(__webpack_require__(/*! ./utils */ "./node_modules/@theia/workspace/lib/common/utils.js"), exports);


/***/ }),

/***/ "./node_modules/@theia/workspace/lib/common/utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/@theia/workspace/lib/common/utils.js ***!
  \***********************************************************/
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
exports.getTemporaryWorkspaceFileUri = exports.VSCODE_EXT = exports.THEIA_EXT = void 0;
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
exports.THEIA_EXT = 'theia-workspace';
exports.VSCODE_EXT = 'code-workspace';
function getTemporaryWorkspaceFileUri(envVariableServer) {
    return __awaiter(this, void 0, void 0, function () {
        var configDirUri;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, envVariableServer.getConfigDirUri()];
                case 1:
                    configDirUri = _a.sent();
                    return [2 /*return*/, new uri_1.default(configDirUri).resolve("Untitled." + exports.THEIA_EXT)];
            }
        });
    });
}
exports.getTemporaryWorkspaceFileUri = getTemporaryWorkspaceFileUri;


/***/ }),

/***/ "./node_modules/@theia/workspace/lib/common/workspace-protocol.js":
/*!************************************************************************!*\
  !*** ./node_modules/@theia/workspace/lib/common/workspace-protocol.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceServer = exports.workspacePath = void 0;
exports.workspacePath = '/services/workspace';
/**
 * The JSON-RPC workspace interface.
 */
exports.WorkspaceServer = Symbol('WorkspaceServer');


/***/ }),

/***/ "./node_modules/jsonc-parser/lib/esm/impl/edit.js":
/*!********************************************************!*\
  !*** ./node_modules/jsonc-parser/lib/esm/impl/edit.js ***!
  \********************************************************/
/*! exports provided: removeProperty, setProperty, applyEdit, isWS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeProperty", function() { return removeProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProperty", function() { return setProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyEdit", function() { return applyEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWS", function() { return isWS; });
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format */ "./node_modules/jsonc-parser/lib/esm/impl/format.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser */ "./node_modules/jsonc-parser/lib/esm/impl/parser.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



function removeProperty(text, path, options) {
    return setProperty(text, path, void 0, options);
}
function setProperty(text, originalPath, value, options) {
    var _a;
    var path = originalPath.slice();
    var errors = [];
    var root = Object(_parser__WEBPACK_IMPORTED_MODULE_1__["parseTree"])(text, errors);
    var parent = void 0;
    var lastSegment = void 0;
    while (path.length > 0) {
        lastSegment = path.pop();
        parent = Object(_parser__WEBPACK_IMPORTED_MODULE_1__["findNodeAtLocation"])(root, path);
        if (parent === void 0 && value !== void 0) {
            if (typeof lastSegment === 'string') {
                value = (_a = {}, _a[lastSegment] = value, _a);
            }
            else {
                value = [value];
            }
        }
        else {
            break;
        }
    }
    if (!parent) {
        // empty document
        if (value === void 0) { // delete
            throw new Error('Can not delete in empty document');
        }
        return withFormatting(text, { offset: root ? root.offset : 0, length: root ? root.length : 0, content: JSON.stringify(value) }, options);
    }
    else if (parent.type === 'object' && typeof lastSegment === 'string' && Array.isArray(parent.children)) {
        var existing = Object(_parser__WEBPACK_IMPORTED_MODULE_1__["findNodeAtLocation"])(parent, [lastSegment]);
        if (existing !== void 0) {
            if (value === void 0) { // delete
                if (!existing.parent) {
                    throw new Error('Malformed AST');
                }
                var propertyIndex = parent.children.indexOf(existing.parent);
                var removeBegin = void 0;
                var removeEnd = existing.parent.offset + existing.parent.length;
                if (propertyIndex > 0) {
                    // remove the comma of the previous node
                    var previous = parent.children[propertyIndex - 1];
                    removeBegin = previous.offset + previous.length;
                }
                else {
                    removeBegin = parent.offset + 1;
                    if (parent.children.length > 1) {
                        // remove the comma of the next node
                        var next = parent.children[1];
                        removeEnd = next.offset;
                    }
                }
                return withFormatting(text, { offset: removeBegin, length: removeEnd - removeBegin, content: '' }, options);
            }
            else {
                // set value of existing property
                return withFormatting(text, { offset: existing.offset, length: existing.length, content: JSON.stringify(value) }, options);
            }
        }
        else {
            if (value === void 0) { // delete
                return []; // property does not exist, nothing to do
            }
            var newProperty = JSON.stringify(lastSegment) + ": " + JSON.stringify(value);
            var index = options.getInsertionIndex ? options.getInsertionIndex(parent.children.map(function (p) { return p.children[0].value; })) : parent.children.length;
            var edit = void 0;
            if (index > 0) {
                var previous = parent.children[index - 1];
                edit = { offset: previous.offset + previous.length, length: 0, content: ',' + newProperty };
            }
            else if (parent.children.length === 0) {
                edit = { offset: parent.offset + 1, length: 0, content: newProperty };
            }
            else {
                edit = { offset: parent.offset + 1, length: 0, content: newProperty + ',' };
            }
            return withFormatting(text, edit, options);
        }
    }
    else if (parent.type === 'array' && typeof lastSegment === 'number' && Array.isArray(parent.children)) {
        var insertIndex = lastSegment;
        if (insertIndex === -1) {
            // Insert
            var newProperty = "" + JSON.stringify(value);
            var edit = void 0;
            if (parent.children.length === 0) {
                edit = { offset: parent.offset + 1, length: 0, content: newProperty };
            }
            else {
                var previous = parent.children[parent.children.length - 1];
                edit = { offset: previous.offset + previous.length, length: 0, content: ',' + newProperty };
            }
            return withFormatting(text, edit, options);
        }
        else if (value === void 0 && parent.children.length >= 0) {
            // Removal
            var removalIndex = lastSegment;
            var toRemove = parent.children[removalIndex];
            var edit = void 0;
            if (parent.children.length === 1) {
                // only item
                edit = { offset: parent.offset + 1, length: parent.length - 2, content: '' };
            }
            else if (parent.children.length - 1 === removalIndex) {
                // last item
                var previous = parent.children[removalIndex - 1];
                var offset = previous.offset + previous.length;
                var parentEndOffset = parent.offset + parent.length;
                edit = { offset: offset, length: parentEndOffset - 2 - offset, content: '' };
            }
            else {
                edit = { offset: toRemove.offset, length: parent.children[removalIndex + 1].offset - toRemove.offset, content: '' };
            }
            return withFormatting(text, edit, options);
        }
        else if (value !== void 0) {
            var edit = void 0;
            var newProperty = "" + JSON.stringify(value);
            if (!options.isArrayInsertion && parent.children.length > lastSegment) {
                var toModify = parent.children[lastSegment];
                edit = { offset: toModify.offset, length: toModify.length, content: newProperty };
            }
            else if (parent.children.length === 0 || lastSegment === 0) {
                edit = { offset: parent.offset + 1, length: 0, content: parent.children.length === 0 ? newProperty : newProperty + ',' };
            }
            else {
                var index = lastSegment > parent.children.length ? parent.children.length : lastSegment;
                var previous = parent.children[index - 1];
                edit = { offset: previous.offset + previous.length, length: 0, content: ',' + newProperty };
            }
            return withFormatting(text, edit, options);
        }
        else {
            throw new Error("Can not " + (value === void 0 ? 'remove' : (options.isArrayInsertion ? 'insert' : 'modify')) + " Array index " + insertIndex + " as length is not sufficient");
        }
    }
    else {
        throw new Error("Can not add " + (typeof lastSegment !== 'number' ? 'index' : 'property') + " to parent of type " + parent.type);
    }
}
function withFormatting(text, edit, options) {
    if (!options.formattingOptions) {
        return [edit];
    }
    // apply the edit
    var newText = applyEdit(text, edit);
    // format the new text
    var begin = edit.offset;
    var end = edit.offset + edit.content.length;
    if (edit.length === 0 || edit.content.length === 0) { // insert or remove
        while (begin > 0 && !Object(_format__WEBPACK_IMPORTED_MODULE_0__["isEOL"])(newText, begin - 1)) {
            begin--;
        }
        while (end < newText.length && !Object(_format__WEBPACK_IMPORTED_MODULE_0__["isEOL"])(newText, end)) {
            end++;
        }
    }
    var edits = Object(_format__WEBPACK_IMPORTED_MODULE_0__["format"])(newText, { offset: begin, length: end - begin }, options.formattingOptions);
    // apply the formatting edits and track the begin and end offsets of the changes
    for (var i = edits.length - 1; i >= 0; i--) {
        var edit_1 = edits[i];
        newText = applyEdit(newText, edit_1);
        begin = Math.min(begin, edit_1.offset);
        end = Math.max(end, edit_1.offset + edit_1.length);
        end += edit_1.content.length - edit_1.length;
    }
    // create a single edit with all changes
    var editLength = text.length - (newText.length - end) - begin;
    return [{ offset: begin, length: editLength, content: newText.substring(begin, end) }];
}
function applyEdit(text, edit) {
    return text.substring(0, edit.offset) + edit.content + text.substring(edit.offset + edit.length);
}
function isWS(text, offset) {
    return '\r\n \t'.indexOf(text.charAt(offset)) !== -1;
}


/***/ }),

/***/ "./node_modules/jsonc-parser/lib/esm/impl/format.js":
/*!**********************************************************!*\
  !*** ./node_modules/jsonc-parser/lib/esm/impl/format.js ***!
  \**********************************************************/
/*! exports provided: format, isEOL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEOL", function() { return isEOL; });
/* harmony import */ var _scanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scanner */ "./node_modules/jsonc-parser/lib/esm/impl/scanner.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


function format(documentText, range, options) {
    var initialIndentLevel;
    var formatText;
    var formatTextStart;
    var rangeStart;
    var rangeEnd;
    if (range) {
        rangeStart = range.offset;
        rangeEnd = rangeStart + range.length;
        formatTextStart = rangeStart;
        while (formatTextStart > 0 && !isEOL(documentText, formatTextStart - 1)) {
            formatTextStart--;
        }
        var endOffset = rangeEnd;
        while (endOffset < documentText.length && !isEOL(documentText, endOffset)) {
            endOffset++;
        }
        formatText = documentText.substring(formatTextStart, endOffset);
        initialIndentLevel = computeIndentLevel(formatText, options);
    }
    else {
        formatText = documentText;
        initialIndentLevel = 0;
        formatTextStart = 0;
        rangeStart = 0;
        rangeEnd = documentText.length;
    }
    var eol = getEOL(options, documentText);
    var lineBreak = false;
    var indentLevel = 0;
    var indentValue;
    if (options.insertSpaces) {
        indentValue = repeat(' ', options.tabSize || 4);
    }
    else {
        indentValue = '\t';
    }
    var scanner = Object(_scanner__WEBPACK_IMPORTED_MODULE_0__["createScanner"])(formatText, false);
    var hasError = false;
    function newLineAndIndent() {
        return eol + repeat(indentValue, initialIndentLevel + indentLevel);
    }
    function scanNext() {
        var token = scanner.scan();
        lineBreak = false;
        while (token === 15 /* Trivia */ || token === 14 /* LineBreakTrivia */) {
            lineBreak = lineBreak || (token === 14 /* LineBreakTrivia */);
            token = scanner.scan();
        }
        hasError = token === 16 /* Unknown */ || scanner.getTokenError() !== 0 /* None */;
        return token;
    }
    var editOperations = [];
    function addEdit(text, startOffset, endOffset) {
        if (!hasError && startOffset < rangeEnd && endOffset > rangeStart && documentText.substring(startOffset, endOffset) !== text) {
            editOperations.push({ offset: startOffset, length: endOffset - startOffset, content: text });
        }
    }
    var firstToken = scanNext();
    if (firstToken !== 17 /* EOF */) {
        var firstTokenStart = scanner.getTokenOffset() + formatTextStart;
        var initialIndent = repeat(indentValue, initialIndentLevel);
        addEdit(initialIndent, formatTextStart, firstTokenStart);
    }
    while (firstToken !== 17 /* EOF */) {
        var firstTokenEnd = scanner.getTokenOffset() + scanner.getTokenLength() + formatTextStart;
        var secondToken = scanNext();
        var replaceContent = '';
        while (!lineBreak && (secondToken === 12 /* LineCommentTrivia */ || secondToken === 13 /* BlockCommentTrivia */)) {
            // comments on the same line: keep them on the same line, but ignore them otherwise
            var commentTokenStart = scanner.getTokenOffset() + formatTextStart;
            addEdit(' ', firstTokenEnd, commentTokenStart);
            firstTokenEnd = scanner.getTokenOffset() + scanner.getTokenLength() + formatTextStart;
            replaceContent = secondToken === 12 /* LineCommentTrivia */ ? newLineAndIndent() : '';
            secondToken = scanNext();
        }
        if (secondToken === 2 /* CloseBraceToken */) {
            if (firstToken !== 1 /* OpenBraceToken */) {
                indentLevel--;
                replaceContent = newLineAndIndent();
            }
        }
        else if (secondToken === 4 /* CloseBracketToken */) {
            if (firstToken !== 3 /* OpenBracketToken */) {
                indentLevel--;
                replaceContent = newLineAndIndent();
            }
        }
        else {
            switch (firstToken) {
                case 3 /* OpenBracketToken */:
                case 1 /* OpenBraceToken */:
                    indentLevel++;
                    replaceContent = newLineAndIndent();
                    break;
                case 5 /* CommaToken */:
                case 12 /* LineCommentTrivia */:
                    replaceContent = newLineAndIndent();
                    break;
                case 13 /* BlockCommentTrivia */:
                    if (lineBreak) {
                        replaceContent = newLineAndIndent();
                    }
                    else {
                        // symbol following comment on the same line: keep on same line, separate with ' '
                        replaceContent = ' ';
                    }
                    break;
                case 6 /* ColonToken */:
                    replaceContent = ' ';
                    break;
                case 10 /* StringLiteral */:
                    if (secondToken === 6 /* ColonToken */) {
                        replaceContent = '';
                        break;
                    }
                // fall through
                case 7 /* NullKeyword */:
                case 8 /* TrueKeyword */:
                case 9 /* FalseKeyword */:
                case 11 /* NumericLiteral */:
                case 2 /* CloseBraceToken */:
                case 4 /* CloseBracketToken */:
                    if (secondToken === 12 /* LineCommentTrivia */ || secondToken === 13 /* BlockCommentTrivia */) {
                        replaceContent = ' ';
                    }
                    else if (secondToken !== 5 /* CommaToken */ && secondToken !== 17 /* EOF */) {
                        hasError = true;
                    }
                    break;
                case 16 /* Unknown */:
                    hasError = true;
                    break;
            }
            if (lineBreak && (secondToken === 12 /* LineCommentTrivia */ || secondToken === 13 /* BlockCommentTrivia */)) {
                replaceContent = newLineAndIndent();
            }
        }
        var secondTokenStart = scanner.getTokenOffset() + formatTextStart;
        addEdit(replaceContent, firstTokenEnd, secondTokenStart);
        firstToken = secondToken;
    }
    return editOperations;
}
function repeat(s, count) {
    var result = '';
    for (var i = 0; i < count; i++) {
        result += s;
    }
    return result;
}
function computeIndentLevel(content, options) {
    var i = 0;
    var nChars = 0;
    var tabSize = options.tabSize || 4;
    while (i < content.length) {
        var ch = content.charAt(i);
        if (ch === ' ') {
            nChars++;
        }
        else if (ch === '\t') {
            nChars += tabSize;
        }
        else {
            break;
        }
        i++;
    }
    return Math.floor(nChars / tabSize);
}
function getEOL(options, text) {
    for (var i = 0; i < text.length; i++) {
        var ch = text.charAt(i);
        if (ch === '\r') {
            if (i + 1 < text.length && text.charAt(i + 1) === '\n') {
                return '\r\n';
            }
            return '\r';
        }
        else if (ch === '\n') {
            return '\n';
        }
    }
    return (options && options.eol) || '\n';
}
function isEOL(text, offset) {
    return '\r\n'.indexOf(text.charAt(offset)) !== -1;
}


/***/ }),

/***/ "./node_modules/jsonc-parser/lib/esm/impl/parser.js":
/*!**********************************************************!*\
  !*** ./node_modules/jsonc-parser/lib/esm/impl/parser.js ***!
  \**********************************************************/
/*! exports provided: getLocation, parse, parseTree, findNodeAtLocation, getNodePath, getNodeValue, contains, findNodeAtOffset, visit, stripComments, getNodeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTree", function() { return parseTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNodeAtLocation", function() { return findNodeAtLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodePath", function() { return getNodePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodeValue", function() { return getNodeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNodeAtOffset", function() { return findNodeAtOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visit", function() { return visit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripComments", function() { return stripComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodeType", function() { return getNodeType; });
/* harmony import */ var _scanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scanner */ "./node_modules/jsonc-parser/lib/esm/impl/scanner.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var ParseOptions;
(function (ParseOptions) {
    ParseOptions.DEFAULT = {
        allowTrailingComma: false
    };
})(ParseOptions || (ParseOptions = {}));
/**
 * For a given offset, evaluate the location in the JSON document. Each segment in the location path is either a property name or an array index.
 */
function getLocation(text, position) {
    var segments = []; // strings or numbers
    var earlyReturnException = new Object();
    var previousNode = undefined;
    var previousNodeInst = {
        value: {},
        offset: 0,
        length: 0,
        type: 'object',
        parent: undefined
    };
    var isAtPropertyKey = false;
    function setPreviousNode(value, offset, length, type) {
        previousNodeInst.value = value;
        previousNodeInst.offset = offset;
        previousNodeInst.length = length;
        previousNodeInst.type = type;
        previousNodeInst.colonOffset = undefined;
        previousNode = previousNodeInst;
    }
    try {
        visit(text, {
            onObjectBegin: function (offset, length) {
                if (position <= offset) {
                    throw earlyReturnException;
                }
                previousNode = undefined;
                isAtPropertyKey = position > offset;
                segments.push(''); // push a placeholder (will be replaced)
            },
            onObjectProperty: function (name, offset, length) {
                if (position < offset) {
                    throw earlyReturnException;
                }
                setPreviousNode(name, offset, length, 'property');
                segments[segments.length - 1] = name;
                if (position <= offset + length) {
                    throw earlyReturnException;
                }
            },
            onObjectEnd: function (offset, length) {
                if (position <= offset) {
                    throw earlyReturnException;
                }
                previousNode = undefined;
                segments.pop();
            },
            onArrayBegin: function (offset, length) {
                if (position <= offset) {
                    throw earlyReturnException;
                }
                previousNode = undefined;
                segments.push(0);
            },
            onArrayEnd: function (offset, length) {
                if (position <= offset) {
                    throw earlyReturnException;
                }
                previousNode = undefined;
                segments.pop();
            },
            onLiteralValue: function (value, offset, length) {
                if (position < offset) {
                    throw earlyReturnException;
                }
                setPreviousNode(value, offset, length, getNodeType(value));
                if (position <= offset + length) {
                    throw earlyReturnException;
                }
            },
            onSeparator: function (sep, offset, length) {
                if (position <= offset) {
                    throw earlyReturnException;
                }
                if (sep === ':' && previousNode && previousNode.type === 'property') {
                    previousNode.colonOffset = offset;
                    isAtPropertyKey = false;
                    previousNode = undefined;
                }
                else if (sep === ',') {
                    var last = segments[segments.length - 1];
                    if (typeof last === 'number') {
                        segments[segments.length - 1] = last + 1;
                    }
                    else {
                        isAtPropertyKey = true;
                        segments[segments.length - 1] = '';
                    }
                    previousNode = undefined;
                }
            }
        });
    }
    catch (e) {
        if (e !== earlyReturnException) {
            throw e;
        }
    }
    return {
        path: segments,
        previousNode: previousNode,
        isAtPropertyKey: isAtPropertyKey,
        matches: function (pattern) {
            var k = 0;
            for (var i = 0; k < pattern.length && i < segments.length; i++) {
                if (pattern[k] === segments[i] || pattern[k] === '*') {
                    k++;
                }
                else if (pattern[k] !== '**') {
                    return false;
                }
            }
            return k === pattern.length;
        }
    };
}
/**
 * Parses the given text and returns the object the JSON content represents. On invalid input, the parser tries to be as fault tolerant as possible, but still return a result.
 * Therefore always check the errors list to find out if the input was valid.
 */
function parse(text, errors, options) {
    if (errors === void 0) { errors = []; }
    if (options === void 0) { options = ParseOptions.DEFAULT; }
    var currentProperty = null;
    var currentParent = [];
    var previousParents = [];
    function onValue(value) {
        if (Array.isArray(currentParent)) {
            currentParent.push(value);
        }
        else if (currentProperty !== null) {
            currentParent[currentProperty] = value;
        }
    }
    var visitor = {
        onObjectBegin: function () {
            var object = {};
            onValue(object);
            previousParents.push(currentParent);
            currentParent = object;
            currentProperty = null;
        },
        onObjectProperty: function (name) {
            currentProperty = name;
        },
        onObjectEnd: function () {
            currentParent = previousParents.pop();
        },
        onArrayBegin: function () {
            var array = [];
            onValue(array);
            previousParents.push(currentParent);
            currentParent = array;
            currentProperty = null;
        },
        onArrayEnd: function () {
            currentParent = previousParents.pop();
        },
        onLiteralValue: onValue,
        onError: function (error, offset, length) {
            errors.push({ error: error, offset: offset, length: length });
        }
    };
    visit(text, visitor, options);
    return currentParent[0];
}
/**
 * Parses the given text and returns a tree representation the JSON content. On invalid input, the parser tries to be as fault tolerant as possible, but still return a result.
 */
function parseTree(text, errors, options) {
    if (errors === void 0) { errors = []; }
    if (options === void 0) { options = ParseOptions.DEFAULT; }
    var currentParent = { type: 'array', offset: -1, length: -1, children: [], parent: undefined }; // artificial root
    function ensurePropertyComplete(endOffset) {
        if (currentParent.type === 'property') {
            currentParent.length = endOffset - currentParent.offset;
            currentParent = currentParent.parent;
        }
    }
    function onValue(valueNode) {
        currentParent.children.push(valueNode);
        return valueNode;
    }
    var visitor = {
        onObjectBegin: function (offset) {
            currentParent = onValue({ type: 'object', offset: offset, length: -1, parent: currentParent, children: [] });
        },
        onObjectProperty: function (name, offset, length) {
            currentParent = onValue({ type: 'property', offset: offset, length: -1, parent: currentParent, children: [] });
            currentParent.children.push({ type: 'string', value: name, offset: offset, length: length, parent: currentParent });
        },
        onObjectEnd: function (offset, length) {
            ensurePropertyComplete(offset + length); // in case of a missing value for a property: make sure property is complete
            currentParent.length = offset + length - currentParent.offset;
            currentParent = currentParent.parent;
            ensurePropertyComplete(offset + length);
        },
        onArrayBegin: function (offset, length) {
            currentParent = onValue({ type: 'array', offset: offset, length: -1, parent: currentParent, children: [] });
        },
        onArrayEnd: function (offset, length) {
            currentParent.length = offset + length - currentParent.offset;
            currentParent = currentParent.parent;
            ensurePropertyComplete(offset + length);
        },
        onLiteralValue: function (value, offset, length) {
            onValue({ type: getNodeType(value), offset: offset, length: length, parent: currentParent, value: value });
            ensurePropertyComplete(offset + length);
        },
        onSeparator: function (sep, offset, length) {
            if (currentParent.type === 'property') {
                if (sep === ':') {
                    currentParent.colonOffset = offset;
                }
                else if (sep === ',') {
                    ensurePropertyComplete(offset);
                }
            }
        },
        onError: function (error, offset, length) {
            errors.push({ error: error, offset: offset, length: length });
        }
    };
    visit(text, visitor, options);
    var result = currentParent.children[0];
    if (result) {
        delete result.parent;
    }
    return result;
}
/**
 * Finds the node at the given path in a JSON DOM.
 */
function findNodeAtLocation(root, path) {
    if (!root) {
        return undefined;
    }
    var node = root;
    for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
        var segment = path_1[_i];
        if (typeof segment === 'string') {
            if (node.type !== 'object' || !Array.isArray(node.children)) {
                return undefined;
            }
            var found = false;
            for (var _a = 0, _b = node.children; _a < _b.length; _a++) {
                var propertyNode = _b[_a];
                if (Array.isArray(propertyNode.children) && propertyNode.children[0].value === segment) {
                    node = propertyNode.children[1];
                    found = true;
                    break;
                }
            }
            if (!found) {
                return undefined;
            }
        }
        else {
            var index = segment;
            if (node.type !== 'array' || index < 0 || !Array.isArray(node.children) || index >= node.children.length) {
                return undefined;
            }
            node = node.children[index];
        }
    }
    return node;
}
/**
 * Gets the JSON path of the given JSON DOM node
 */
function getNodePath(node) {
    if (!node.parent || !node.parent.children) {
        return [];
    }
    var path = getNodePath(node.parent);
    if (node.parent.type === 'property') {
        var key = node.parent.children[0].value;
        path.push(key);
    }
    else if (node.parent.type === 'array') {
        var index = node.parent.children.indexOf(node);
        if (index !== -1) {
            path.push(index);
        }
    }
    return path;
}
/**
 * Evaluates the JavaScript object of the given JSON DOM node
 */
function getNodeValue(node) {
    switch (node.type) {
        case 'array':
            return node.children.map(getNodeValue);
        case 'object':
            var obj = Object.create(null);
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var prop = _a[_i];
                var valueNode = prop.children[1];
                if (valueNode) {
                    obj[prop.children[0].value] = getNodeValue(valueNode);
                }
            }
            return obj;
        case 'null':
        case 'string':
        case 'number':
        case 'boolean':
            return node.value;
        default:
            return undefined;
    }
}
function contains(node, offset, includeRightBound) {
    if (includeRightBound === void 0) { includeRightBound = false; }
    return (offset >= node.offset && offset < (node.offset + node.length)) || includeRightBound && (offset === (node.offset + node.length));
}
/**
 * Finds the most inner node at the given offset. If includeRightBound is set, also finds nodes that end at the given offset.
 */
function findNodeAtOffset(node, offset, includeRightBound) {
    if (includeRightBound === void 0) { includeRightBound = false; }
    if (contains(node, offset, includeRightBound)) {
        var children = node.children;
        if (Array.isArray(children)) {
            for (var i = 0; i < children.length && children[i].offset <= offset; i++) {
                var item = findNodeAtOffset(children[i], offset, includeRightBound);
                if (item) {
                    return item;
                }
            }
        }
        return node;
    }
    return undefined;
}
/**
 * Parses the given text and invokes the visitor functions for each object, array and literal reached.
 */
function visit(text, visitor, options) {
    if (options === void 0) { options = ParseOptions.DEFAULT; }
    var _scanner = Object(_scanner__WEBPACK_IMPORTED_MODULE_0__["createScanner"])(text, false);
    function toNoArgVisit(visitFunction) {
        return visitFunction ? function () { return visitFunction(_scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter()); } : function () { return true; };
    }
    function toOneArgVisit(visitFunction) {
        return visitFunction ? function (arg) { return visitFunction(arg, _scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter()); } : function () { return true; };
    }
    var onObjectBegin = toNoArgVisit(visitor.onObjectBegin), onObjectProperty = toOneArgVisit(visitor.onObjectProperty), onObjectEnd = toNoArgVisit(visitor.onObjectEnd), onArrayBegin = toNoArgVisit(visitor.onArrayBegin), onArrayEnd = toNoArgVisit(visitor.onArrayEnd), onLiteralValue = toOneArgVisit(visitor.onLiteralValue), onSeparator = toOneArgVisit(visitor.onSeparator), onComment = toNoArgVisit(visitor.onComment), onError = toOneArgVisit(visitor.onError);
    var disallowComments = options && options.disallowComments;
    var allowTrailingComma = options && options.allowTrailingComma;
    function scanNext() {
        while (true) {
            var token = _scanner.scan();
            switch (_scanner.getTokenError()) {
                case 4 /* InvalidUnicode */:
                    handleError(14 /* InvalidUnicode */);
                    break;
                case 5 /* InvalidEscapeCharacter */:
                    handleError(15 /* InvalidEscapeCharacter */);
                    break;
                case 3 /* UnexpectedEndOfNumber */:
                    handleError(13 /* UnexpectedEndOfNumber */);
                    break;
                case 1 /* UnexpectedEndOfComment */:
                    if (!disallowComments) {
                        handleError(11 /* UnexpectedEndOfComment */);
                    }
                    break;
                case 2 /* UnexpectedEndOfString */:
                    handleError(12 /* UnexpectedEndOfString */);
                    break;
                case 6 /* InvalidCharacter */:
                    handleError(16 /* InvalidCharacter */);
                    break;
            }
            switch (token) {
                case 12 /* LineCommentTrivia */:
                case 13 /* BlockCommentTrivia */:
                    if (disallowComments) {
                        handleError(10 /* InvalidCommentToken */);
                    }
                    else {
                        onComment();
                    }
                    break;
                case 16 /* Unknown */:
                    handleError(1 /* InvalidSymbol */);
                    break;
                case 15 /* Trivia */:
                case 14 /* LineBreakTrivia */:
                    break;
                default:
                    return token;
            }
        }
    }
    function handleError(error, skipUntilAfter, skipUntil) {
        if (skipUntilAfter === void 0) { skipUntilAfter = []; }
        if (skipUntil === void 0) { skipUntil = []; }
        onError(error);
        if (skipUntilAfter.length + skipUntil.length > 0) {
            var token = _scanner.getToken();
            while (token !== 17 /* EOF */) {
                if (skipUntilAfter.indexOf(token) !== -1) {
                    scanNext();
                    break;
                }
                else if (skipUntil.indexOf(token) !== -1) {
                    break;
                }
                token = scanNext();
            }
        }
    }
    function parseString(isValue) {
        var value = _scanner.getTokenValue();
        if (isValue) {
            onLiteralValue(value);
        }
        else {
            onObjectProperty(value);
        }
        scanNext();
        return true;
    }
    function parseLiteral() {
        switch (_scanner.getToken()) {
            case 11 /* NumericLiteral */:
                var value = 0;
                try {
                    value = JSON.parse(_scanner.getTokenValue());
                    if (typeof value !== 'number') {
                        handleError(2 /* InvalidNumberFormat */);
                        value = 0;
                    }
                }
                catch (e) {
                    handleError(2 /* InvalidNumberFormat */);
                }
                onLiteralValue(value);
                break;
            case 7 /* NullKeyword */:
                onLiteralValue(null);
                break;
            case 8 /* TrueKeyword */:
                onLiteralValue(true);
                break;
            case 9 /* FalseKeyword */:
                onLiteralValue(false);
                break;
            default:
                return false;
        }
        scanNext();
        return true;
    }
    function parseProperty() {
        if (_scanner.getToken() !== 10 /* StringLiteral */) {
            handleError(3 /* PropertyNameExpected */, [], [2 /* CloseBraceToken */, 5 /* CommaToken */]);
            return false;
        }
        parseString(false);
        if (_scanner.getToken() === 6 /* ColonToken */) {
            onSeparator(':');
            scanNext(); // consume colon
            if (!parseValue()) {
                handleError(4 /* ValueExpected */, [], [2 /* CloseBraceToken */, 5 /* CommaToken */]);
            }
        }
        else {
            handleError(5 /* ColonExpected */, [], [2 /* CloseBraceToken */, 5 /* CommaToken */]);
        }
        return true;
    }
    function parseObject() {
        onObjectBegin();
        scanNext(); // consume open brace
        var needsComma = false;
        while (_scanner.getToken() !== 2 /* CloseBraceToken */ && _scanner.getToken() !== 17 /* EOF */) {
            if (_scanner.getToken() === 5 /* CommaToken */) {
                if (!needsComma) {
                    handleError(4 /* ValueExpected */, [], []);
                }
                onSeparator(',');
                scanNext(); // consume comma
                if (_scanner.getToken() === 2 /* CloseBraceToken */ && allowTrailingComma) {
                    break;
                }
            }
            else if (needsComma) {
                handleError(6 /* CommaExpected */, [], []);
            }
            if (!parseProperty()) {
                handleError(4 /* ValueExpected */, [], [2 /* CloseBraceToken */, 5 /* CommaToken */]);
            }
            needsComma = true;
        }
        onObjectEnd();
        if (_scanner.getToken() !== 2 /* CloseBraceToken */) {
            handleError(7 /* CloseBraceExpected */, [2 /* CloseBraceToken */], []);
        }
        else {
            scanNext(); // consume close brace
        }
        return true;
    }
    function parseArray() {
        onArrayBegin();
        scanNext(); // consume open bracket
        var needsComma = false;
        while (_scanner.getToken() !== 4 /* CloseBracketToken */ && _scanner.getToken() !== 17 /* EOF */) {
            if (_scanner.getToken() === 5 /* CommaToken */) {
                if (!needsComma) {
                    handleError(4 /* ValueExpected */, [], []);
                }
                onSeparator(',');
                scanNext(); // consume comma
                if (_scanner.getToken() === 4 /* CloseBracketToken */ && allowTrailingComma) {
                    break;
                }
            }
            else if (needsComma) {
                handleError(6 /* CommaExpected */, [], []);
            }
            if (!parseValue()) {
                handleError(4 /* ValueExpected */, [], [4 /* CloseBracketToken */, 5 /* CommaToken */]);
            }
            needsComma = true;
        }
        onArrayEnd();
        if (_scanner.getToken() !== 4 /* CloseBracketToken */) {
            handleError(8 /* CloseBracketExpected */, [4 /* CloseBracketToken */], []);
        }
        else {
            scanNext(); // consume close bracket
        }
        return true;
    }
    function parseValue() {
        switch (_scanner.getToken()) {
            case 3 /* OpenBracketToken */:
                return parseArray();
            case 1 /* OpenBraceToken */:
                return parseObject();
            case 10 /* StringLiteral */:
                return parseString(true);
            default:
                return parseLiteral();
        }
    }
    scanNext();
    if (_scanner.getToken() === 17 /* EOF */) {
        if (options.allowEmptyContent) {
            return true;
        }
        handleError(4 /* ValueExpected */, [], []);
        return false;
    }
    if (!parseValue()) {
        handleError(4 /* ValueExpected */, [], []);
        return false;
    }
    if (_scanner.getToken() !== 17 /* EOF */) {
        handleError(9 /* EndOfFileExpected */, [], []);
    }
    return true;
}
/**
 * Takes JSON with JavaScript-style comments and remove
 * them. Optionally replaces every none-newline character
 * of comments with a replaceCharacter
 */
function stripComments(text, replaceCh) {
    var _scanner = Object(_scanner__WEBPACK_IMPORTED_MODULE_0__["createScanner"])(text), parts = [], kind, offset = 0, pos;
    do {
        pos = _scanner.getPosition();
        kind = _scanner.scan();
        switch (kind) {
            case 12 /* LineCommentTrivia */:
            case 13 /* BlockCommentTrivia */:
            case 17 /* EOF */:
                if (offset !== pos) {
                    parts.push(text.substring(offset, pos));
                }
                if (replaceCh !== undefined) {
                    parts.push(_scanner.getTokenValue().replace(/[^\r\n]/g, replaceCh));
                }
                offset = _scanner.getPosition();
                break;
        }
    } while (kind !== 17 /* EOF */);
    return parts.join('');
}
function getNodeType(value) {
    switch (typeof value) {
        case 'boolean': return 'boolean';
        case 'number': return 'number';
        case 'string': return 'string';
        case 'object': {
            if (!value) {
                return 'null';
            }
            else if (Array.isArray(value)) {
                return 'array';
            }
            return 'object';
        }
        default: return 'null';
    }
}


/***/ }),

/***/ "./node_modules/jsonc-parser/lib/esm/impl/scanner.js":
/*!***********************************************************!*\
  !*** ./node_modules/jsonc-parser/lib/esm/impl/scanner.js ***!
  \***********************************************************/
/*! exports provided: createScanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createScanner", function() { return createScanner; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Creates a JSON scanner on the given text.
 * If ignoreTrivia is set, whitespaces or comments are ignored.
 */
function createScanner(text, ignoreTrivia) {
    if (ignoreTrivia === void 0) { ignoreTrivia = false; }
    var len = text.length;
    var pos = 0, value = '', tokenOffset = 0, token = 16 /* Unknown */, lineNumber = 0, lineStartOffset = 0, tokenLineStartOffset = 0, prevTokenLineStartOffset = 0, scanError = 0 /* None */;
    function scanHexDigits(count, exact) {
        var digits = 0;
        var value = 0;
        while (digits < count || !exact) {
            var ch = text.charCodeAt(pos);
            if (ch >= 48 /* _0 */ && ch <= 57 /* _9 */) {
                value = value * 16 + ch - 48 /* _0 */;
            }
            else if (ch >= 65 /* A */ && ch <= 70 /* F */) {
                value = value * 16 + ch - 65 /* A */ + 10;
            }
            else if (ch >= 97 /* a */ && ch <= 102 /* f */) {
                value = value * 16 + ch - 97 /* a */ + 10;
            }
            else {
                break;
            }
            pos++;
            digits++;
        }
        if (digits < count) {
            value = -1;
        }
        return value;
    }
    function setPosition(newPosition) {
        pos = newPosition;
        value = '';
        tokenOffset = 0;
        token = 16 /* Unknown */;
        scanError = 0 /* None */;
    }
    function scanNumber() {
        var start = pos;
        if (text.charCodeAt(pos) === 48 /* _0 */) {
            pos++;
        }
        else {
            pos++;
            while (pos < text.length && isDigit(text.charCodeAt(pos))) {
                pos++;
            }
        }
        if (pos < text.length && text.charCodeAt(pos) === 46 /* dot */) {
            pos++;
            if (pos < text.length && isDigit(text.charCodeAt(pos))) {
                pos++;
                while (pos < text.length && isDigit(text.charCodeAt(pos))) {
                    pos++;
                }
            }
            else {
                scanError = 3 /* UnexpectedEndOfNumber */;
                return text.substring(start, pos);
            }
        }
        var end = pos;
        if (pos < text.length && (text.charCodeAt(pos) === 69 /* E */ || text.charCodeAt(pos) === 101 /* e */)) {
            pos++;
            if (pos < text.length && text.charCodeAt(pos) === 43 /* plus */ || text.charCodeAt(pos) === 45 /* minus */) {
                pos++;
            }
            if (pos < text.length && isDigit(text.charCodeAt(pos))) {
                pos++;
                while (pos < text.length && isDigit(text.charCodeAt(pos))) {
                    pos++;
                }
                end = pos;
            }
            else {
                scanError = 3 /* UnexpectedEndOfNumber */;
            }
        }
        return text.substring(start, end);
    }
    function scanString() {
        var result = '', start = pos;
        while (true) {
            if (pos >= len) {
                result += text.substring(start, pos);
                scanError = 2 /* UnexpectedEndOfString */;
                break;
            }
            var ch = text.charCodeAt(pos);
            if (ch === 34 /* doubleQuote */) {
                result += text.substring(start, pos);
                pos++;
                break;
            }
            if (ch === 92 /* backslash */) {
                result += text.substring(start, pos);
                pos++;
                if (pos >= len) {
                    scanError = 2 /* UnexpectedEndOfString */;
                    break;
                }
                var ch2 = text.charCodeAt(pos++);
                switch (ch2) {
                    case 34 /* doubleQuote */:
                        result += '\"';
                        break;
                    case 92 /* backslash */:
                        result += '\\';
                        break;
                    case 47 /* slash */:
                        result += '/';
                        break;
                    case 98 /* b */:
                        result += '\b';
                        break;
                    case 102 /* f */:
                        result += '\f';
                        break;
                    case 110 /* n */:
                        result += '\n';
                        break;
                    case 114 /* r */:
                        result += '\r';
                        break;
                    case 116 /* t */:
                        result += '\t';
                        break;
                    case 117 /* u */:
                        var ch3 = scanHexDigits(4, true);
                        if (ch3 >= 0) {
                            result += String.fromCharCode(ch3);
                        }
                        else {
                            scanError = 4 /* InvalidUnicode */;
                        }
                        break;
                    default:
                        scanError = 5 /* InvalidEscapeCharacter */;
                }
                start = pos;
                continue;
            }
            if (ch >= 0 && ch <= 0x1f) {
                if (isLineBreak(ch)) {
                    result += text.substring(start, pos);
                    scanError = 2 /* UnexpectedEndOfString */;
                    break;
                }
                else {
                    scanError = 6 /* InvalidCharacter */;
                    // mark as error but continue with string
                }
            }
            pos++;
        }
        return result;
    }
    function scanNext() {
        value = '';
        scanError = 0 /* None */;
        tokenOffset = pos;
        lineStartOffset = lineNumber;
        prevTokenLineStartOffset = tokenLineStartOffset;
        if (pos >= len) {
            // at the end
            tokenOffset = len;
            return token = 17 /* EOF */;
        }
        var code = text.charCodeAt(pos);
        // trivia: whitespace
        if (isWhiteSpace(code)) {
            do {
                pos++;
                value += String.fromCharCode(code);
                code = text.charCodeAt(pos);
            } while (isWhiteSpace(code));
            return token = 15 /* Trivia */;
        }
        // trivia: newlines
        if (isLineBreak(code)) {
            pos++;
            value += String.fromCharCode(code);
            if (code === 13 /* carriageReturn */ && text.charCodeAt(pos) === 10 /* lineFeed */) {
                pos++;
                value += '\n';
            }
            lineNumber++;
            tokenLineStartOffset = pos;
            return token = 14 /* LineBreakTrivia */;
        }
        switch (code) {
            // tokens: []{}:,
            case 123 /* openBrace */:
                pos++;
                return token = 1 /* OpenBraceToken */;
            case 125 /* closeBrace */:
                pos++;
                return token = 2 /* CloseBraceToken */;
            case 91 /* openBracket */:
                pos++;
                return token = 3 /* OpenBracketToken */;
            case 93 /* closeBracket */:
                pos++;
                return token = 4 /* CloseBracketToken */;
            case 58 /* colon */:
                pos++;
                return token = 6 /* ColonToken */;
            case 44 /* comma */:
                pos++;
                return token = 5 /* CommaToken */;
            // strings
            case 34 /* doubleQuote */:
                pos++;
                value = scanString();
                return token = 10 /* StringLiteral */;
            // comments
            case 47 /* slash */:
                var start = pos - 1;
                // Single-line comment
                if (text.charCodeAt(pos + 1) === 47 /* slash */) {
                    pos += 2;
                    while (pos < len) {
                        if (isLineBreak(text.charCodeAt(pos))) {
                            break;
                        }
                        pos++;
                    }
                    value = text.substring(start, pos);
                    return token = 12 /* LineCommentTrivia */;
                }
                // Multi-line comment
                if (text.charCodeAt(pos + 1) === 42 /* asterisk */) {
                    pos += 2;
                    var safeLength = len - 1; // For lookahead.
                    var commentClosed = false;
                    while (pos < safeLength) {
                        var ch = text.charCodeAt(pos);
                        if (ch === 42 /* asterisk */ && text.charCodeAt(pos + 1) === 47 /* slash */) {
                            pos += 2;
                            commentClosed = true;
                            break;
                        }
                        pos++;
                        if (isLineBreak(ch)) {
                            if (ch === 13 /* carriageReturn */ && text.charCodeAt(pos) === 10 /* lineFeed */) {
                                pos++;
                            }
                            lineNumber++;
                            tokenLineStartOffset = pos;
                        }
                    }
                    if (!commentClosed) {
                        pos++;
                        scanError = 1 /* UnexpectedEndOfComment */;
                    }
                    value = text.substring(start, pos);
                    return token = 13 /* BlockCommentTrivia */;
                }
                // just a single slash
                value += String.fromCharCode(code);
                pos++;
                return token = 16 /* Unknown */;
            // numbers
            case 45 /* minus */:
                value += String.fromCharCode(code);
                pos++;
                if (pos === len || !isDigit(text.charCodeAt(pos))) {
                    return token = 16 /* Unknown */;
                }
            // found a minus, followed by a number so
            // we fall through to proceed with scanning
            // numbers
            case 48 /* _0 */:
            case 49 /* _1 */:
            case 50 /* _2 */:
            case 51 /* _3 */:
            case 52 /* _4 */:
            case 53 /* _5 */:
            case 54 /* _6 */:
            case 55 /* _7 */:
            case 56 /* _8 */:
            case 57 /* _9 */:
                value += scanNumber();
                return token = 11 /* NumericLiteral */;
            // literals and unknown symbols
            default:
                // is a literal? Read the full word.
                while (pos < len && isUnknownContentCharacter(code)) {
                    pos++;
                    code = text.charCodeAt(pos);
                }
                if (tokenOffset !== pos) {
                    value = text.substring(tokenOffset, pos);
                    // keywords: true, false, null
                    switch (value) {
                        case 'true': return token = 8 /* TrueKeyword */;
                        case 'false': return token = 9 /* FalseKeyword */;
                        case 'null': return token = 7 /* NullKeyword */;
                    }
                    return token = 16 /* Unknown */;
                }
                // some
                value += String.fromCharCode(code);
                pos++;
                return token = 16 /* Unknown */;
        }
    }
    function isUnknownContentCharacter(code) {
        if (isWhiteSpace(code) || isLineBreak(code)) {
            return false;
        }
        switch (code) {
            case 125 /* closeBrace */:
            case 93 /* closeBracket */:
            case 123 /* openBrace */:
            case 91 /* openBracket */:
            case 34 /* doubleQuote */:
            case 58 /* colon */:
            case 44 /* comma */:
            case 47 /* slash */:
                return false;
        }
        return true;
    }
    function scanNextNonTrivia() {
        var result;
        do {
            result = scanNext();
        } while (result >= 12 /* LineCommentTrivia */ && result <= 15 /* Trivia */);
        return result;
    }
    return {
        setPosition: setPosition,
        getPosition: function () { return pos; },
        scan: ignoreTrivia ? scanNextNonTrivia : scanNext,
        getToken: function () { return token; },
        getTokenValue: function () { return value; },
        getTokenOffset: function () { return tokenOffset; },
        getTokenLength: function () { return pos - tokenOffset; },
        getTokenStartLine: function () { return lineStartOffset; },
        getTokenStartCharacter: function () { return tokenOffset - prevTokenLineStartOffset; },
        getTokenError: function () { return scanError; },
    };
}
function isWhiteSpace(ch) {
    return ch === 32 /* space */ || ch === 9 /* tab */ || ch === 11 /* verticalTab */ || ch === 12 /* formFeed */ ||
        ch === 160 /* nonBreakingSpace */ || ch === 5760 /* ogham */ || ch >= 8192 /* enQuad */ && ch <= 8203 /* zeroWidthSpace */ ||
        ch === 8239 /* narrowNoBreakSpace */ || ch === 8287 /* mathematicalSpace */ || ch === 12288 /* ideographicSpace */ || ch === 65279 /* byteOrderMark */;
}
function isLineBreak(ch) {
    return ch === 10 /* lineFeed */ || ch === 13 /* carriageReturn */ || ch === 8232 /* lineSeparator */ || ch === 8233 /* paragraphSeparator */;
}
function isDigit(ch) {
    return ch >= 48 /* _0 */ && ch <= 57 /* _9 */;
}


/***/ }),

/***/ "./node_modules/jsonc-parser/lib/esm/main.js":
/*!***************************************************!*\
  !*** ./node_modules/jsonc-parser/lib/esm/main.js ***!
  \***************************************************/
/*! exports provided: createScanner, getLocation, parse, parseTree, findNodeAtLocation, findNodeAtOffset, getNodePath, getNodeValue, visit, stripComments, printParseErrorCode, format, modify, applyEdits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createScanner", function() { return createScanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTree", function() { return parseTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNodeAtLocation", function() { return findNodeAtLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNodeAtOffset", function() { return findNodeAtOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodePath", function() { return getNodePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodeValue", function() { return getNodeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visit", function() { return visit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripComments", function() { return stripComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printParseErrorCode", function() { return printParseErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modify", function() { return modify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyEdits", function() { return applyEdits; });
/* harmony import */ var _impl_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./impl/format */ "./node_modules/jsonc-parser/lib/esm/impl/format.js");
/* harmony import */ var _impl_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./impl/edit */ "./node_modules/jsonc-parser/lib/esm/impl/edit.js");
/* harmony import */ var _impl_scanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./impl/scanner */ "./node_modules/jsonc-parser/lib/esm/impl/scanner.js");
/* harmony import */ var _impl_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./impl/parser */ "./node_modules/jsonc-parser/lib/esm/impl/parser.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





/**
 * Creates a JSON scanner on the given text.
 * If ignoreTrivia is set, whitespaces or comments are ignored.
 */
var createScanner = _impl_scanner__WEBPACK_IMPORTED_MODULE_2__["createScanner"];
/**
 * For a given offset, evaluate the location in the JSON document. Each segment in the location path is either a property name or an array index.
 */
var getLocation = _impl_parser__WEBPACK_IMPORTED_MODULE_3__["getLocation"];
/**
 * Parses the given text and returns the object the JSON content represents. On invalid input, the parser tries to be as fault tolerant as possible, but still return a result.
 * Therefore, always check the errors list to find out if the input was valid.
 */
var parse = _impl_parser__WEBPACK_IMPORTED_MODULE_3__["parse"];
/**
 * Parses the given text and returns a tree representation the JSON content. On invalid input, the parser tries to be as fault tolerant as possible, but still return a result.
 */
var parseTree = _impl_parser__WEBPACK_IMPORTED_MODULE_3__["parseTree"];
/**
 * Finds the node at the given path in a JSON DOM.
 */
var findNodeAtLocation = _impl_parser__WEBPACK_IMPORTED_MODULE_3__["findNodeAtLocation"];
/**
 * Finds the innermost node at the given offset. If includeRightBound is set, also finds nodes that end at the given offset.
 */
var findNodeAtOffset = _impl_parser__WEBPACK_IMPORTED_MODULE_3__["findNodeAtOffset"];
/**
 * Gets the JSON path of the given JSON DOM node
 */
var getNodePath = _impl_parser__WEBPACK_IMPORTED_MODULE_3__["getNodePath"];
/**
 * Evaluates the JavaScript object of the given JSON DOM node
 */
var getNodeValue = _impl_parser__WEBPACK_IMPORTED_MODULE_3__["getNodeValue"];
/**
 * Parses the given text and invokes the visitor functions for each object, array and literal reached.
 */
var visit = _impl_parser__WEBPACK_IMPORTED_MODULE_3__["visit"];
/**
 * Takes JSON with JavaScript-style comments and remove
 * them. Optionally replaces every none-newline character
 * of comments with a replaceCharacter
 */
var stripComments = _impl_parser__WEBPACK_IMPORTED_MODULE_3__["stripComments"];
function printParseErrorCode(code) {
    switch (code) {
        case 1 /* InvalidSymbol */: return 'InvalidSymbol';
        case 2 /* InvalidNumberFormat */: return 'InvalidNumberFormat';
        case 3 /* PropertyNameExpected */: return 'PropertyNameExpected';
        case 4 /* ValueExpected */: return 'ValueExpected';
        case 5 /* ColonExpected */: return 'ColonExpected';
        case 6 /* CommaExpected */: return 'CommaExpected';
        case 7 /* CloseBraceExpected */: return 'CloseBraceExpected';
        case 8 /* CloseBracketExpected */: return 'CloseBracketExpected';
        case 9 /* EndOfFileExpected */: return 'EndOfFileExpected';
        case 10 /* InvalidCommentToken */: return 'InvalidCommentToken';
        case 11 /* UnexpectedEndOfComment */: return 'UnexpectedEndOfComment';
        case 12 /* UnexpectedEndOfString */: return 'UnexpectedEndOfString';
        case 13 /* UnexpectedEndOfNumber */: return 'UnexpectedEndOfNumber';
        case 14 /* InvalidUnicode */: return 'InvalidUnicode';
        case 15 /* InvalidEscapeCharacter */: return 'InvalidEscapeCharacter';
        case 16 /* InvalidCharacter */: return 'InvalidCharacter';
    }
    return '<unknown ParseErrorCode>';
}
/**
 * Computes the edits needed to format a JSON document.
 *
 * @param documentText The input text
 * @param range The range to format or `undefined` to format the full content
 * @param options The formatting options
 * @returns A list of edit operations describing the formatting changes to the original document. Edits can be either inserts, replacements or
 * removals of text segments. All offsets refer to the original state of the document. No two edits must change or remove the same range of
 * text in the original document. However, multiple edits can have
 * the same offset, for example multiple inserts, or an insert followed by a remove or replace. The order in the array defines which edit is applied first.
 * To apply edits to an input, you can use `applyEdits`.
 */
function format(documentText, range, options) {
    return _impl_format__WEBPACK_IMPORTED_MODULE_0__["format"](documentText, range, options);
}
/**
 * Computes the edits needed to modify a value in the JSON document.
 *
 * @param documentText The input text
 * @param path The path of the value to change. The path represents either to the document root, a property or an array item.
 * If the path points to an non-existing property or item, it will be created.
 * @param value The new value for the specified property or item. If the value is undefined,
 * the property or item will be removed.
 * @param options Options
 * @returns A list of edit operations describing the formatting changes to the original document. Edits can be either inserts, replacements or
 * removals of text segments. All offsets refer to the original state of the document. No two edits must change or remove the same range of
 * text in the original document. However, multiple edits can have
 * the same offset, for example multiple inserts, or an insert followed by a remove or replace. The order in the array defines which edit is applied first.
 * To apply edits to an input, you can use `applyEdits`.
 */
function modify(text, path, value, options) {
    return _impl_edit__WEBPACK_IMPORTED_MODULE_1__["setProperty"](text, path, value, options);
}
/**
 * Applies edits to a input string.
 */
function applyEdits(text, edits) {
    for (var i = edits.length - 1; i >= 0; i--) {
        text = _impl_edit__WEBPACK_IMPORTED_MODULE_1__["applyEdit"](text, edits[i]);
    }
    return text;
}


/***/ })

}]);
//# sourceMappingURL=4.bundle.js.map