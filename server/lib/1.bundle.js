(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@theia/filesystem/lib/browser/filesystem-preferences.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/lib/browser/filesystem-preferences.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindFileSystemPreferences = exports.createFileSystemPreferences = exports.FileSystemPreferences = exports.filesystemPreferenceSchema = void 0;
var preferences_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences */ "./node_modules/@theia/core/lib/browser/preferences/index.js");
exports.filesystemPreferenceSchema = {
    'type': 'object',
    'properties': {
        'files.watcherExclude': {
            'description': 'List of paths to exclude from the filesystem watcher',
            'additionalProperties': {
                'type': 'boolean'
            },
            'default': {
                '**/.git/objects/**': true,
                '**/.git/subtree-cache/**': true,
                '**/node_modules/**': true
            },
            'scope': 'resource'
        },
        'files.exclude': {
            'type': 'object',
            'default': { '**/.git': true, '**/.svn': true, '**/.hg': true, '**/CVS': true, '**/.DS_Store': true },
            'description': 'Configure glob patterns for excluding files and folders.',
            'scope': 'resource'
        },
        'files.enableTrash': {
            'type': 'boolean',
            'default': true,
            'description': 'Moves files/folders to the OS trash (recycle bin on Windows) when deleting. Disabling this will delete files/folders permanently.'
        },
        'files.associations': {
            'type': 'object',
            'description': 'Configure file associations to languages (e.g. \"*.extension\": \"html\"). \
These have precedence over the default associations of the languages installed.'
        }
    }
};
exports.FileSystemPreferences = Symbol('FileSystemPreferences');
function createFileSystemPreferences(preferences) {
    return preferences_1.createPreferenceProxy(preferences, exports.filesystemPreferenceSchema);
}
exports.createFileSystemPreferences = createFileSystemPreferences;
function bindFileSystemPreferences(bind) {
    bind(exports.FileSystemPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(preferences_1.PreferenceService);
        return createFileSystemPreferences(preferences);
    }).inSingletonScope();
    bind(preferences_1.PreferenceContribution).toConstantValue({ schema: exports.filesystemPreferenceSchema });
}
exports.bindFileSystemPreferences = bindFileSystemPreferences;


/***/ }),

/***/ "./node_modules/@theia/filesystem/lib/browser/filesystem-watcher.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/lib/browser/filesystem-watcher.js ***!
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
exports.FileSystemWatcher = exports.FileOperationEmitter = exports.FileMoveEvent = exports.FileChangeEvent = exports.FileChange = exports.FileChangeType = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var filesystem_1 = __webpack_require__(/*! ../common/filesystem */ "./node_modules/@theia/filesystem/lib/common/filesystem.js");
var filesystem_watcher_protocol_1 = __webpack_require__(/*! ../common/filesystem-watcher-protocol */ "./node_modules/@theia/filesystem/lib/common/filesystem-watcher-protocol.js");
Object.defineProperty(exports, "FileChangeType", { enumerable: true, get: function () { return filesystem_watcher_protocol_1.FileChangeType; } });
var filesystem_preferences_1 = __webpack_require__(/*! ./filesystem-preferences */ "./node_modules/@theia/filesystem/lib/browser/filesystem-preferences.js");
var FileChange;
(function (FileChange) {
    function isUpdated(change, uri) {
        return change.type === filesystem_watcher_protocol_1.FileChangeType.UPDATED && uri.toString() === change.uri.toString();
    }
    FileChange.isUpdated = isUpdated;
    function isAdded(change, uri) {
        return change.type === filesystem_watcher_protocol_1.FileChangeType.ADDED && uri.toString() === change.uri.toString();
    }
    FileChange.isAdded = isAdded;
    function isDeleted(change, uri) {
        return change.type === filesystem_watcher_protocol_1.FileChangeType.DELETED && change.uri.isEqualOrParent(uri);
    }
    FileChange.isDeleted = isDeleted;
    function isAffected(change, uri) {
        return isDeleted(change, uri) || uri.toString() === change.uri.toString();
    }
    FileChange.isAffected = isAffected;
    function isChanged(change, uri) {
        return !isDeleted(change, uri) && uri.toString() === change.uri.toString();
    }
    FileChange.isChanged = isChanged;
})(FileChange = exports.FileChange || (exports.FileChange = {}));
var FileChangeEvent;
(function (FileChangeEvent) {
    function isUpdated(event, uri) {
        return event.some(function (change) { return FileChange.isUpdated(change, uri); });
    }
    FileChangeEvent.isUpdated = isUpdated;
    function isAdded(event, uri) {
        return event.some(function (change) { return FileChange.isAdded(change, uri); });
    }
    FileChangeEvent.isAdded = isAdded;
    function isDeleted(event, uri) {
        return event.some(function (change) { return FileChange.isDeleted(change, uri); });
    }
    FileChangeEvent.isDeleted = isDeleted;
    function isAffected(event, uri) {
        return event.some(function (change) { return FileChange.isAffected(change, uri); });
    }
    FileChangeEvent.isAffected = isAffected;
    function isChanged(event, uri) {
        return !isDeleted(event, uri) && event.some(function (change) { return FileChange.isChanged(change, uri); });
    }
    FileChangeEvent.isChanged = isChanged;
})(FileChangeEvent = exports.FileChangeEvent || (exports.FileChangeEvent = {}));
var FileMoveEvent;
(function (FileMoveEvent) {
    function isRename(_a) {
        var sourceUri = _a.sourceUri, targetUri = _a.targetUri;
        return sourceUri.parent.toString() === targetUri.parent.toString();
    }
    FileMoveEvent.isRename = isRename;
})(FileMoveEvent = exports.FileMoveEvent || (exports.FileMoveEvent = {}));
var FileOperationEmitter = /** @class */ (function () {
    function FileOperationEmitter() {
        this.onWillEmitter = new event_1.Emitter();
        this.onWill = this.onWillEmitter.event;
        this.onDidFailEmitter = new event_1.Emitter();
        this.onDidFail = this.onDidFailEmitter.event;
        this.onDidEmitter = new event_1.Emitter();
        this.onDid = this.onDidEmitter.event;
        this.toDispose = new disposable_1.DisposableCollection(this.onWillEmitter, this.onDidFailEmitter, this.onDidEmitter);
    }
    FileOperationEmitter.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    FileOperationEmitter.prototype.fireWill = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, event_1.WaitUntilEvent.fire(this.onWillEmitter, event)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FileOperationEmitter.prototype.fireDid = function (failed, event) {
        return __awaiter(this, void 0, void 0, function () {
            var onDidEmitter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        onDidEmitter = failed ? this.onDidFailEmitter : this.onDidEmitter;
                        return [4 /*yield*/, event_1.WaitUntilEvent.fire(onDidEmitter, event)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return FileOperationEmitter;
}());
exports.FileOperationEmitter = FileOperationEmitter;
/**
 * React to file system events, including calls originating from the
 * application or event coming from the system's filesystem directly
 * (actual file watching).
 *
 * `on(will|did)(create|rename|delete)` events solely come from application
 * usage, not from actual filesystem.
 */
var FileSystemWatcher = /** @class */ (function () {
    function FileSystemWatcher() {
        this.toDispose = new disposable_1.DisposableCollection();
        this.toRestartAll = new disposable_1.DisposableCollection();
        this.onFileChangedEmitter = new event_1.Emitter();
        this.onFilesChanged = this.onFileChangedEmitter.event;
        this.fileCreateEmitter = new FileOperationEmitter();
        this.onWillCreate = this.fileCreateEmitter.onWill;
        this.onDidFailCreate = this.fileCreateEmitter.onDidFail;
        this.onDidCreate = this.fileCreateEmitter.onDid;
        this.fileDeleteEmitter = new FileOperationEmitter();
        this.onWillDelete = this.fileDeleteEmitter.onWill;
        this.onDidFailDelete = this.fileDeleteEmitter.onDidFail;
        this.onDidDelete = this.fileDeleteEmitter.onDid;
        this.fileMoveEmitter = new FileOperationEmitter();
        this.onWillMove = this.fileMoveEmitter.onWill;
        this.onDidFailMove = this.fileMoveEmitter.onDidFail;
        this.onDidMove = this.fileMoveEmitter.onDid;
    }
    FileSystemWatcher.prototype.init = function () {
        var _this = this;
        this.toDispose.push(this.onFileChangedEmitter);
        this.toDispose.push(this.fileDeleteEmitter);
        this.toDispose.push(this.fileMoveEmitter);
        this.toDispose.push(this.server);
        this.server.setClient({
            onDidFilesChanged: function (e) { return _this.onDidFilesChanged(e); }
        });
        this.toDispose.push(this.preferences.onPreferenceChanged(function (e) {
            if (e.preferenceName === 'files.watcherExclude') {
                _this.toRestartAll.dispose();
            }
        }));
        this.filesystem.setClient({
            /* eslint-disable no-void */
            shouldOverwrite: this.shouldOverwrite.bind(this),
            willCreate: function (uri) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileCreateEmitter.fireWill({ uri: new uri_1.default(uri) })];
                    case 1: return [2 /*return*/, void (_a.sent())];
                }
            }); }); },
            didCreate: function (uri, failed) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileCreateEmitter.fireDid(failed, { uri: new uri_1.default(uri) })];
                    case 1: return [2 /*return*/, void (_a.sent())];
                }
            }); }); },
            willDelete: function (uri) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileDeleteEmitter.fireWill({ uri: new uri_1.default(uri) })];
                    case 1: return [2 /*return*/, void (_a.sent())];
                }
            }); }); },
            didDelete: function (uri, failed) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileDeleteEmitter.fireDid(failed, { uri: new uri_1.default(uri) })];
                    case 1: return [2 /*return*/, void (_a.sent())];
                }
            }); }); },
            willMove: function (sourceUri, targetUri) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileMoveEmitter.fireWill({ sourceUri: new uri_1.default(sourceUri), targetUri: new uri_1.default(targetUri) })];
                    case 1: return [2 /*return*/, void (_a.sent())];
                }
            }); }); },
            didMove: function (sourceUri, targetUri, failed) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileMoveEmitter.fireDid(failed, { sourceUri: new uri_1.default(sourceUri), targetUri: new uri_1.default(targetUri) })];
                    case 1: return [2 /*return*/, void (_a.sent())];
                }
            }); }); },
        });
    };
    /**
     * Stop watching.
     */
    FileSystemWatcher.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    FileSystemWatcher.prototype.onDidFilesChanged = function (event) {
        var changes = event.changes.map(function (change) { return ({
            uri: new uri_1.default(change.uri),
            type: change.type
        }); });
        this.onFileChangedEmitter.fire(changes);
    };
    /**
     * Start file watching under the given uri.
     *
     * Resolve when watching is started.
     * Return a disposable to stop file watching under the given uri.
     */
    FileSystemWatcher.prototype.watchFileChanges = function (uri) {
        var _this = this;
        return this.createWatchOptions(uri.toString())
            .then(function (options) {
            return _this.server.watchFileChanges(uri.toString(), options);
        })
            .then(function (watcher) {
            var toDispose = new disposable_1.DisposableCollection();
            var toStop = disposable_1.Disposable.create(function () {
                return _this.server.unwatchFileChanges(watcher);
            });
            var toRestart = toDispose.push(toStop);
            _this.toRestartAll.push(disposable_1.Disposable.create(function () {
                toRestart.dispose();
                toStop.dispose();
                _this.watchFileChanges(uri).then(function (disposable) {
                    return toDispose.push(disposable);
                });
            }));
            return toDispose;
        });
    };
    FileSystemWatcher.prototype.createWatchOptions = function (uri) {
        return this.getIgnored(uri).then(function (ignored) { return ({
            // always ignore temporary upload files
            ignored: ignored.concat('**/theia_upload_*')
        }); });
    };
    FileSystemWatcher.prototype.getIgnored = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var patterns;
            return __generator(this, function (_a) {
                patterns = this.preferences.get('files.watcherExclude', undefined, uri);
                return [2 /*return*/, Object.keys(patterns).filter(function (pattern) { return patterns[pattern]; })];
            });
        });
    };
    __decorate([
        inversify_1.inject(filesystem_watcher_protocol_1.FileSystemWatcherServer),
        __metadata("design:type", Object)
    ], FileSystemWatcher.prototype, "server", void 0);
    __decorate([
        inversify_1.inject(filesystem_preferences_1.FileSystemPreferences),
        __metadata("design:type", Object)
    ], FileSystemWatcher.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(filesystem_1.FileSystem),
        __metadata("design:type", Object)
    ], FileSystemWatcher.prototype, "filesystem", void 0);
    __decorate([
        inversify_1.inject(filesystem_1.FileShouldOverwrite),
        __metadata("design:type", Function)
    ], FileSystemWatcher.prototype, "shouldOverwrite", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FileSystemWatcher.prototype, "init", null);
    FileSystemWatcher = __decorate([
        inversify_1.injectable()
    ], FileSystemWatcher);
    return FileSystemWatcher;
}());
exports.FileSystemWatcher = FileSystemWatcher;


/***/ }),

/***/ "./node_modules/@theia/filesystem/lib/common/filesystem-watcher-protocol.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/lib/common/filesystem-watcher-protocol.js ***!
  \**********************************************************************************/
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
exports.ReconnectingFileSystemWatcherServer = exports.FileSystemWatcherServerProxy = exports.FileChangeType = exports.FileSystemWatcherServer = exports.fileSystemWatcherPath = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
exports.fileSystemWatcherPath = '/services/fs-watcher';
exports.FileSystemWatcherServer = Symbol('FileSystemWatcherServer');
var FileChangeType;
(function (FileChangeType) {
    FileChangeType[FileChangeType["UPDATED"] = 0] = "UPDATED";
    FileChangeType[FileChangeType["ADDED"] = 1] = "ADDED";
    FileChangeType[FileChangeType["DELETED"] = 2] = "DELETED";
})(FileChangeType = exports.FileChangeType || (exports.FileChangeType = {}));
exports.FileSystemWatcherServerProxy = Symbol('FileSystemWatcherServerProxy');
var ReconnectingFileSystemWatcherServer = /** @class */ (function () {
    function ReconnectingFileSystemWatcherServer(proxy) {
        var _this = this;
        this.proxy = proxy;
        this.watcherSequence = 1;
        this.watchParams = new Map();
        this.localToRemoteWatcher = new Map();
        var onInitialized = this.proxy.onDidOpenConnection(function () {
            // skip reconnection on the first connection
            onInitialized.dispose();
            _this.proxy.onDidOpenConnection(function () { return _this.reconnect(); });
        });
    }
    ReconnectingFileSystemWatcherServer.prototype.reconnect = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.watchParams.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), watcher = _d[0], _e = _d[1], uri = _e.uri, options = _e.options;
                this.doWatchFileChanges(watcher, uri, options);
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
    ReconnectingFileSystemWatcherServer.prototype.dispose = function () {
        this.proxy.dispose();
    };
    ReconnectingFileSystemWatcherServer.prototype.watchFileChanges = function (uri, options) {
        var watcher = this.watcherSequence++;
        this.watchParams.set(watcher, { uri: uri, options: options });
        return this.doWatchFileChanges(watcher, uri, options);
    };
    ReconnectingFileSystemWatcherServer.prototype.doWatchFileChanges = function (watcher, uri, options) {
        var _this = this;
        return this.proxy.watchFileChanges(uri, options).then(function (remote) {
            _this.localToRemoteWatcher.set(watcher, remote);
            return watcher;
        });
    };
    ReconnectingFileSystemWatcherServer.prototype.unwatchFileChanges = function (watcher) {
        this.watchParams.delete(watcher);
        var remote = this.localToRemoteWatcher.get(watcher);
        if (remote) {
            this.localToRemoteWatcher.delete(watcher);
            return this.proxy.unwatchFileChanges(remote);
        }
        return Promise.resolve();
    };
    ReconnectingFileSystemWatcherServer.prototype.setClient = function (client) {
        this.proxy.setClient(client);
    };
    ReconnectingFileSystemWatcherServer = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(exports.FileSystemWatcherServerProxy)),
        __metadata("design:paramtypes", [Object])
    ], ReconnectingFileSystemWatcherServer);
    return ReconnectingFileSystemWatcherServer;
}());
exports.ReconnectingFileSystemWatcherServer = ReconnectingFileSystemWatcherServer;


/***/ })

}]);
//# sourceMappingURL=1.bundle.js.map