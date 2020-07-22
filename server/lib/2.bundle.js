(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/@theia/filesystem/lib/browser/file-tree/file-tree.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/lib/browser/file-tree/file-tree.js ***!
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
exports.DirNode = exports.FileNode = exports.FileStatNode = exports.FileTree = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@theia/filesystem/lib/common/index.js");
var FileTree = /** @class */ (function (_super) {
    __extends(FileTree, _super);
    function FileTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileTree.prototype.resolveChildren = function (parent) {
        return __awaiter(this, void 0, void 0, function () {
            var fileStat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!FileStatNode.is(parent)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.resolveFileStat(parent)];
                    case 1:
                        fileStat = _a.sent();
                        if (fileStat) {
                            return [2 /*return*/, this.toNodes(fileStat, parent)];
                        }
                        return [2 /*return*/, []];
                    case 2: return [2 /*return*/, _super.prototype.resolveChildren.call(this, parent)];
                }
            });
        });
    };
    FileTree.prototype.resolveFileStat = function (node) {
        return this.fileSystem.getFileStat(node.fileStat.uri).then(function (fileStat) {
            if (fileStat) {
                node.fileStat = fileStat;
                return fileStat;
            }
            return undefined;
        });
    };
    FileTree.prototype.toNodes = function (fileStat, parent) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!fileStat.children) {
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, Promise.all(fileStat.children.map(function (child) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, this.toNode(child, parent)];
                            }); }); }))];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.sort(DirNode.compare)];
                }
            });
        });
    };
    FileTree.prototype.toNode = function (fileStat, parent) {
        var uri = new uri_1.default(fileStat.uri);
        var id = this.toNodeId(uri, parent);
        var node = this.getNode(id);
        if (fileStat.isDirectory) {
            if (DirNode.is(node)) {
                node.fileStat = fileStat;
                return node;
            }
            return {
                id: id, uri: uri, fileStat: fileStat, parent: parent,
                expanded: false,
                selected: false,
                children: []
            };
        }
        if (FileNode.is(node)) {
            node.fileStat = fileStat;
            return node;
        }
        return {
            id: id, uri: uri, fileStat: fileStat, parent: parent,
            selected: false
        };
    };
    FileTree.prototype.toNodeId = function (uri, parent) {
        return uri.path.toString();
    };
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], FileTree.prototype, "fileSystem", void 0);
    FileTree = __decorate([
        inversify_1.injectable()
    ], FileTree);
    return FileTree;
}(browser_1.TreeImpl));
exports.FileTree = FileTree;
var FileStatNode;
(function (FileStatNode) {
    function is(node) {
        return !!node && 'fileStat' in node;
    }
    FileStatNode.is = is;
    function getUri(node) {
        if (is(node)) {
            return node.fileStat.uri;
        }
        return undefined;
    }
    FileStatNode.getUri = getUri;
})(FileStatNode = exports.FileStatNode || (exports.FileStatNode = {}));
var FileNode;
(function (FileNode) {
    function is(node) {
        return FileStatNode.is(node) && !node.fileStat.isDirectory;
    }
    FileNode.is = is;
})(FileNode = exports.FileNode || (exports.FileNode = {}));
var DirNode;
(function (DirNode) {
    function is(node) {
        return FileStatNode.is(node) && node.fileStat.isDirectory;
    }
    DirNode.is = is;
    function compare(node, node2) {
        return DirNode.dirCompare(node, node2) || uriCompare(node, node2);
    }
    DirNode.compare = compare;
    function uriCompare(node, node2) {
        if (FileStatNode.is(node)) {
            if (FileStatNode.is(node2)) {
                return node.uri.displayName.localeCompare(node2.uri.displayName);
            }
            return 1;
        }
        if (FileStatNode.is(node2)) {
            return -1;
        }
        return 0;
    }
    DirNode.uriCompare = uriCompare;
    function dirCompare(node, node2) {
        var a = DirNode.is(node) ? 1 : 0;
        var b = DirNode.is(node2) ? 1 : 0;
        return b - a;
    }
    DirNode.dirCompare = dirCompare;
    function createRoot(fileStat) {
        var uri = new uri_1.default(fileStat.uri);
        var id = fileStat.uri;
        return {
            id: id, uri: uri, fileStat: fileStat,
            visible: true,
            parent: undefined,
            children: [],
            expanded: true,
            selected: false
        };
    }
    DirNode.createRoot = createRoot;
    function getContainingDir(node) {
        var containing = node;
        while (!!containing && !is(containing)) {
            containing = containing.parent;
        }
        return containing;
    }
    DirNode.getContainingDir = getContainingDir;
})(DirNode = exports.DirNode || (exports.DirNode = {}));


/***/ }),

/***/ "./node_modules/@theia/filesystem/lib/browser/file-upload-service.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/lib/browser/file-upload-service.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {
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
exports.FileUploadService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var cancellation_1 = __webpack_require__(/*! @theia/core/lib/common/cancellation */ "./node_modules/@theia/core/lib/common/cancellation.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "./node_modules/@theia/core/lib/common/promise-util.js");
var message_service_1 = __webpack_require__(/*! @theia/core/lib/common/message-service */ "./node_modules/@theia/core/lib/common/message-service.js");
var endpoint_1 = __webpack_require__(/*! @theia/core/lib/browser/endpoint */ "./node_modules/@theia/core/lib/browser/endpoint.js");
var throttle = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
var maxChunkSize = 64 * 1024;
var FileUploadService = /** @class */ (function () {
    function FileUploadService() {
    }
    FileUploadService_1 = FileUploadService;
    FileUploadService.prototype.init = function () {
        this.uploadForm = this.createUploadForm();
    };
    FileUploadService.prototype.createUploadForm = function () {
        var _this = this;
        var targetInput = document.createElement('input');
        targetInput.type = 'text';
        targetInput.name = FileUploadService_1.TARGET;
        targetInput.classList.add('theia-input');
        var fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.classList.add('theia-input');
        fileInput.name = FileUploadService_1.UPLOAD;
        fileInput.multiple = true;
        var form = document.createElement('form');
        form.style.display = 'none';
        form.enctype = 'multipart/form-data';
        form.append(targetInput);
        form.append(fileInput);
        document.body.appendChild(form);
        fileInput.addEventListener('change', function () {
            if (_this.deferredUpload && fileInput.value) {
                var source_1 = new FormData(form);
                // clean up to allow upload to the same folder twice
                fileInput.value = '';
                var targetUri_1 = new uri_1.default(source_1.get(FileUploadService_1.TARGET));
                var _a = _this.deferredUpload, resolve = _a.resolve, reject = _a.reject;
                _this.deferredUpload = undefined;
                var onDidUpload_1 = _this.uploadForm.onDidUpload;
                _this.withProgress(function (progress, token) { return _this.doUpload(targetUri_1, { source: source_1, progress: progress, token: token, onDidUpload: onDidUpload_1 }); }, _this.uploadForm.progress).then(resolve, reject);
            }
        });
        return { targetInput: targetInput, fileInput: fileInput };
    };
    FileUploadService.prototype.upload = function (targetUri, params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var source, onDidUpload;
            var _this = this;
            return __generator(this, function (_a) {
                source = params.source, onDidUpload = params.onDidUpload;
                if (source) {
                    return [2 /*return*/, this.withProgress(function (progress, token) { return _this.doUpload(new uri_1.default(String(targetUri)), { source: source, progress: progress, token: token, onDidUpload: onDidUpload }); }, params.progress)];
                }
                this.deferredUpload = new promise_util_1.Deferred();
                this.uploadForm.targetInput.value = String(targetUri);
                this.uploadForm.fileInput.click();
                this.uploadForm.progress = params.progress;
                this.uploadForm.onDidUpload = params.onDidUpload;
                return [2 /*return*/, this.deferredUpload.promise];
            });
        });
    };
    FileUploadService.prototype.doUpload = function (targetUri, _a) {
        var source = _a.source, progress = _a.progress, token = _a.token, onDidUpload = _a.onDidUpload;
        return __awaiter(this, void 0, void 0, function () {
            var result, total, done, totalFiles, doneFiles, reportProgress, deferredUpload, endpoint, socketOpen, socket, rejectAndClose, queue_1, e_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        result = { uploaded: [] };
                        total = 0;
                        done = 0;
                        totalFiles = 0;
                        doneFiles = 0;
                        reportProgress = throttle(function () { return progress.report({
                            message: doneFiles + " out of " + totalFiles,
                            work: { done: done, total: total }
                        }); }, 60);
                        deferredUpload = new promise_util_1.Deferred();
                        endpoint = new endpoint_1.Endpoint({ path: '/file-upload' });
                        socketOpen = new promise_util_1.Deferred();
                        socket = new WebSocket(endpoint.getWebSocketUrl().toString());
                        socket.onerror = function (e) {
                            socketOpen.reject(e);
                            deferredUpload.reject(e);
                        };
                        socket.onclose = function (_a) {
                            var code = _a.code, reason = _a.reason;
                            return deferredUpload.reject(new Error(String(reason || code)));
                        };
                        socket.onmessage = function (_a) {
                            var data = _a.data;
                            var response = JSON.parse(data);
                            if (response.uri) {
                                doneFiles++;
                                result.uploaded.push(response.uri);
                                reportProgress();
                                if (onDidUpload) {
                                    onDidUpload(response.uri);
                                }
                                return;
                            }
                            if (response.done) {
                                done = response.done;
                                reportProgress();
                                return;
                            }
                            if (response.ok) {
                                deferredUpload.resolve(result);
                            }
                            else if (response.error) {
                                deferredUpload.reject(new Error(response.error));
                            }
                            else {
                                console.error('unknown upload response: ' + response);
                            }
                            socket.close();
                        };
                        socket.onopen = function () { return socketOpen.resolve(); };
                        rejectAndClose = function (e) {
                            deferredUpload.reject(e);
                            if (socket.readyState === 1) {
                                socket.close();
                            }
                        };
                        token.onCancellationRequested(function () { return rejectAndClose(cancellation_1.cancelled()); });
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 5, , 6]);
                        queue_1 = Promise.resolve();
                        return [4 /*yield*/, this.index(targetUri, source, {
                                token: token,
                                progress: progress,
                                accept: function (_a) {
                                    var uri = _a.uri, file = _a.file;
                                    return __awaiter(_this, void 0, void 0, function () {
                                        var _this = this;
                                        return __generator(this, function (_b) {
                                            total += file.size;
                                            totalFiles++;
                                            reportProgress();
                                            queue_1 = queue_1.then(function () { return __awaiter(_this, void 0, void 0, function () {
                                                var readBytes, fileSlice, e_2;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            _a.trys.push([0, 8, , 9]);
                                                            return [4 /*yield*/, socketOpen.promise];
                                                        case 1:
                                                            _a.sent();
                                                            cancellation_1.checkCancelled(token);
                                                            readBytes = 0;
                                                            socket.send(JSON.stringify({ uri: uri.toString(), size: file.size }));
                                                            if (!file.size) return [3 /*break*/, 7];
                                                            _a.label = 2;
                                                        case 2: return [4 /*yield*/, this.readFileSlice(file, readBytes)];
                                                        case 3:
                                                            fileSlice = _a.sent();
                                                            cancellation_1.checkCancelled(token);
                                                            readBytes = fileSlice.read;
                                                            socket.send(fileSlice.content);
                                                            _a.label = 4;
                                                        case 4:
                                                            if (!(socket.bufferedAmount > maxChunkSize * 2)) return [3 /*break*/, 6];
                                                            return [4 /*yield*/, new Promise(function (resolve) { return setImmediate(resolve); })];
                                                        case 5:
                                                            _a.sent();
                                                            cancellation_1.checkCancelled(token);
                                                            return [3 /*break*/, 4];
                                                        case 6:
                                                            if (readBytes < file.size) return [3 /*break*/, 2];
                                                            _a.label = 7;
                                                        case 7: return [3 /*break*/, 9];
                                                        case 8:
                                                            e_2 = _a.sent();
                                                            rejectAndClose(e_2);
                                                            return [3 /*break*/, 9];
                                                        case 9: return [2 /*return*/];
                                                    }
                                                });
                                            }); });
                                            return [2 /*return*/];
                                        });
                                    });
                                }
                            })];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, queue_1];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, socketOpen.promise];
                    case 4:
                        _b.sent();
                        socket.send(JSON.stringify({ ok: true }));
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _b.sent();
                        rejectAndClose(e_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/, deferredUpload.promise];
                }
            });
        });
    };
    FileUploadService.prototype.readFileSlice = function (file, read) {
        return new Promise(function (resolve, reject) {
            var bytesLeft = file.size - read;
            if (!bytesLeft) {
                reject(new Error('nothing to read'));
                return;
            }
            var size = Math.min(maxChunkSize, bytesLeft);
            var slice = file.slice(read, read + size);
            var reader = new FileReader();
            reader.onload = function () {
                read += size;
                var content = reader.result;
                resolve({ content: content, read: read });
            };
            reader.onerror = reject;
            reader.readAsArrayBuffer(slice);
        });
    };
    FileUploadService.prototype.withProgress = function (cb, _a) {
        var text = (_a === void 0 ? { text: 'Uploading Files...' } : _a).text;
        return __awaiter(this, void 0, void 0, function () {
            var cancellationSource, token, progress;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        cancellationSource = new cancellation_1.CancellationTokenSource();
                        token = cancellationSource.token;
                        return [4 /*yield*/, this.messageService.showProgress({ text: text, options: { cancelable: true } }, function () { return cancellationSource.cancel(); })];
                    case 1:
                        progress = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, , 4, 5]);
                        return [4 /*yield*/, cb(progress, token)];
                    case 3: return [2 /*return*/, _b.sent()];
                    case 4:
                        progress.cancel();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    FileUploadService.prototype.index = function (targetUri, source, context) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(source instanceof FormData)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.indexFormData(targetUri, source, context)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.indexDataTransfer(targetUri, source, context)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FileUploadService.prototype.indexFormData = function (targetUri, formData, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, file, e_3_1;
            var e_3, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, 6, 7]);
                        _a = __values(formData.getAll(FileUploadService_1.UPLOAD)), _b = _a.next();
                        _d.label = 1;
                    case 1:
                        if (!!_b.done) return [3 /*break*/, 4];
                        file = _b.value;
                        if (!(file instanceof File)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.indexFile(targetUri, file, context)];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3:
                        _b = _a.next();
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        e_3_1 = _d.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 7];
                    case 6:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    FileUploadService.prototype.indexDataTransfer = function (targetUri, dataTransfer, context) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cancellation_1.checkCancelled(context.token);
                        if (!dataTransfer.items) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.indexDataTransferItemList(targetUri, dataTransfer.items, context)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.indexFileList(targetUri, dataTransfer.files, context)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FileUploadService.prototype.indexFileList = function (targetUri, files, context) {
        return __awaiter(this, void 0, void 0, function () {
            var i, file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < files.length)) return [3 /*break*/, 4];
                        file = files[i];
                        if (!file) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.indexFile(targetUri, file, context)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FileUploadService.prototype.indexFile = function (targetUri, file, context) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, context.accept({
                            uri: targetUri.resolve(file.name),
                            file: file
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FileUploadService.prototype.indexDataTransferItemList = function (targetUri, items, context) {
        return __awaiter(this, void 0, void 0, function () {
            var entries, i, entry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cancellation_1.checkCancelled(context.token);
                        entries = [];
                        for (i = 0; i < items.length; i++) {
                            entry = items[i].webkitGetAsEntry();
                            entries.push(entry);
                        }
                        return [4 /*yield*/, this.indexEntries(targetUri, entries, context)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FileUploadService.prototype.indexEntry = function (targetUri, entry, context) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cancellation_1.checkCancelled(context.token);
                        if (!entry) {
                            return [2 /*return*/];
                        }
                        if (!entry.isDirectory) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.indexDirectoryEntry(targetUri, entry, context)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.indexFileEntry(targetUri, entry, context)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *  Read all entries within a folder by block of 100 files or folders until the
     *  whole folder has been read.
     */
    FileUploadService.prototype.indexDirectoryEntry = function (targetUri, entry, context) {
        return __awaiter(this, void 0, void 0, function () {
            var newTargetUri;
            var _this = this;
            return __generator(this, function (_a) {
                cancellation_1.checkCancelled(context.token);
                newTargetUri = targetUri.resolve(entry.name);
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var reader, getEntries;
                        var _this = this;
                        return __generator(this, function (_a) {
                            reader = entry.createReader();
                            getEntries = function () { return reader.readEntries(function (results) { return __awaiter(_this, void 0, void 0, function () {
                                var e_4;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 4, , 5]);
                                            if (!(!context.token.isCancellationRequested && results && results.length)) return [3 /*break*/, 2];
                                            return [4 /*yield*/, this.indexEntries(newTargetUri, results, context)];
                                        case 1:
                                            _a.sent();
                                            getEntries(); // loop to read all getEntries
                                            return [3 /*break*/, 3];
                                        case 2:
                                            resolve();
                                            _a.label = 3;
                                        case 3: return [3 /*break*/, 5];
                                        case 4:
                                            e_4 = _a.sent();
                                            reject(e_4);
                                            return [3 /*break*/, 5];
                                        case 5: return [2 /*return*/];
                                    }
                                });
                            }); }, reject); };
                            getEntries();
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    FileUploadService.prototype.indexEntries = function (targetUri, entries, context) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cancellation_1.checkCancelled(context.token);
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < entries.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.indexEntry(targetUri, entries[i], context)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FileUploadService.prototype.indexFileEntry = function (targetUri, entry, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            try {
                                entry.file(function (file) { return _this.indexFile(targetUri, file, context).then(resolve, reject); }, reject);
                            }
                            catch (e) {
                                reject(e);
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    var FileUploadService_1;
    FileUploadService.TARGET = 'target';
    FileUploadService.UPLOAD = 'upload';
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], FileUploadService.prototype, "messageService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FileUploadService.prototype, "init", null);
    FileUploadService = FileUploadService_1 = __decorate([
        inversify_1.injectable()
    ], FileUploadService);
    return FileUploadService;
}());
exports.FileUploadService = FileUploadService;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

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
//# sourceMappingURL=2.bundle.js.map