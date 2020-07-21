(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/@theia/filesystem/lib/browser/download/file-download-command-contribution.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/lib/browser/download/file-download-command-contribution.js ***!
  \***************************************************************************************************/
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
exports.FileDownloadCommands = exports.FileDownloadCommandContribution = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser/browser */ "./node_modules/@theia/core/lib/browser/browser.js");
var environment_1 = __webpack_require__(/*! @theia/application-package/lib/environment */ "./node_modules/@theia/application-package/lib/environment.js");
var selection_service_1 = __webpack_require__(/*! @theia/core/lib/common/selection-service */ "./node_modules/@theia/core/lib/common/selection-service.js");
var uri_command_handler_1 = __webpack_require__(/*! @theia/core/lib/common/uri-command-handler */ "./node_modules/@theia/core/lib/common/uri-command-handler.js");
var file_download_service_1 = __webpack_require__(/*! ./file-download-service */ "./node_modules/@theia/filesystem/lib/browser/download/file-download-service.js");
var FileDownloadCommandContribution = /** @class */ (function () {
    function FileDownloadCommandContribution() {
    }
    FileDownloadCommandContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand(FileDownloadCommands.DOWNLOAD, new uri_command_handler_1.UriAwareCommandHandler(this.selectionService, {
            execute: function (uris) { return _this.executeDownload(uris); },
            isEnabled: function (uris) { return _this.isDownloadEnabled(uris); },
            isVisible: function (uris) { return _this.isDownloadVisible(uris); },
        }, { multi: true }));
        registry.registerCommand(FileDownloadCommands.COPY_DOWNLOAD_LINK, new uri_command_handler_1.UriAwareCommandHandler(this.selectionService, {
            execute: function (uris) { return _this.executeDownload(uris, { copyLink: true }); },
            isEnabled: function (uris) { return browser_1.isChrome && _this.isDownloadEnabled(uris); },
            isVisible: function (uris) { return browser_1.isChrome && _this.isDownloadVisible(uris); },
        }, { multi: true }));
    };
    FileDownloadCommandContribution.prototype.executeDownload = function (uris, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.downloadService.download(uris, options);
                return [2 /*return*/];
            });
        });
    };
    FileDownloadCommandContribution.prototype.isDownloadEnabled = function (uris) {
        return !environment_1.environment.electron.is() && uris.length > 0 && uris.every(function (u) { return u.scheme === 'file'; });
    };
    FileDownloadCommandContribution.prototype.isDownloadVisible = function (uris) {
        return this.isDownloadEnabled(uris);
    };
    __decorate([
        inversify_1.inject(file_download_service_1.FileDownloadService),
        __metadata("design:type", file_download_service_1.FileDownloadService)
    ], FileDownloadCommandContribution.prototype, "downloadService", void 0);
    __decorate([
        inversify_1.inject(selection_service_1.SelectionService),
        __metadata("design:type", selection_service_1.SelectionService)
    ], FileDownloadCommandContribution.prototype, "selectionService", void 0);
    FileDownloadCommandContribution = __decorate([
        inversify_1.injectable()
    ], FileDownloadCommandContribution);
    return FileDownloadCommandContribution;
}());
exports.FileDownloadCommandContribution = FileDownloadCommandContribution;
var FileDownloadCommands;
(function (FileDownloadCommands) {
    FileDownloadCommands.DOWNLOAD = {
        id: 'file.download',
        category: 'File',
        label: 'Download'
    };
    FileDownloadCommands.COPY_DOWNLOAD_LINK = {
        id: 'file.copyDownloadLink',
        category: 'File',
        label: 'Copy Download Link'
    };
})(FileDownloadCommands = exports.FileDownloadCommands || (exports.FileDownloadCommands = {}));


/***/ }),

/***/ "./node_modules/@theia/filesystem/lib/browser/download/file-download-service.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@theia/filesystem/lib/browser/download/file-download-service.js ***!
  \**************************************************************************************/
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
exports.FileDownloadService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var logger_1 = __webpack_require__(/*! @theia/core/lib/common/logger */ "./node_modules/@theia/core/lib/common/logger.js");
var endpoint_1 = __webpack_require__(/*! @theia/core/lib/browser/endpoint */ "./node_modules/@theia/core/lib/browser/endpoint.js");
var filesystem_1 = __webpack_require__(/*! ../../common/filesystem */ "./node_modules/@theia/filesystem/lib/common/filesystem.js");
var message_service_1 = __webpack_require__(/*! @theia/core/lib/common/message-service */ "./node_modules/@theia/core/lib/common/message-service.js");
var widgets_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets */ "./node_modules/@theia/core/lib/browser/widgets/index.js");
var FileDownloadService = /** @class */ (function () {
    function FileDownloadService() {
        this.downloadCounter = 0;
    }
    FileDownloadService.prototype.handleCopy = function (event, downloadUrl) {
        if (downloadUrl && event.clipboardData) {
            event.clipboardData.setData('text/plain', downloadUrl);
            event.preventDefault();
            this.messageService.info('Copied the download link to the clipboard.');
        }
    };
    FileDownloadService.prototype.cancelDownload = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this.endpoint() + "/download/?id=" + id + "&cancel=true")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FileDownloadService.prototype.download = function (uris, options) {
        return __awaiter(this, void 0, void 0, function () {
            var cancel, copyLink, _a, progress, result, response, jsonResponse, status_1, statusText, downloadUrl_1, toDispose_1, e_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        cancel = false;
                        if (uris.length === 0) {
                            return [2 /*return*/];
                        }
                        copyLink = options && options.copyLink ? true : false;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Promise.all([
                                this.messageService.showProgress({
                                    text: "Preparing download" + (copyLink ? ' link' : '') + "...",
                                    options: { cancelable: true }
                                }, function () { cancel = true; }),
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                                    var resp, jsonResp;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, fetch(this.request(uris))];
                                            case 1:
                                                resp = _a.sent();
                                                return [4 /*yield*/, resp.json()];
                                            case 2:
                                                jsonResp = _a.sent();
                                                resolve({ response: resp, jsonResponse: jsonResp });
                                                return [2 /*return*/];
                                        }
                                    });
                                }); })
                            ])];
                    case 2:
                        _a = __read.apply(void 0, [_b.sent(), 2]), progress = _a[0], result = _a[1];
                        response = result.response, jsonResponse = result.jsonResponse;
                        if (cancel) {
                            this.cancelDownload(jsonResponse.id);
                            return [2 /*return*/];
                        }
                        status_1 = response.status, statusText = response.statusText;
                        if (status_1 === 200) {
                            progress.cancel();
                            downloadUrl_1 = this.endpoint() + "/download/?id=" + jsonResponse.id;
                            if (copyLink) {
                                if (document.documentElement) {
                                    toDispose_1 = widgets_1.addClipboardListener(document.documentElement, 'copy', function (e) {
                                        toDispose_1.dispose();
                                        _this.handleCopy(e, downloadUrl_1);
                                    });
                                    document.execCommand('copy');
                                }
                            }
                            else {
                                this.forceDownload(jsonResponse.id, decodeURIComponent(jsonResponse.name));
                            }
                        }
                        else {
                            throw new Error("Received unexpected status code: " + status_1 + ". [" + statusText + "]");
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        this.logger.error("Error occurred when downloading: " + uris.map(function (u) { return u.toString(true); }) + ".", e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FileDownloadService.prototype.forceDownload = function (id, title) {
        return __awaiter(this, void 0, void 0, function () {
            var url, endpoint;
            return __generator(this, function (_a) {
                try {
                    if (this.anchor === undefined) {
                        this.anchor = document.createElement('a');
                    }
                    endpoint = this.endpoint();
                    url = endpoint + "/download/?id=" + id;
                    this.anchor.href = url;
                    this.anchor.style.display = 'none';
                    this.anchor.download = title;
                    document.body.appendChild(this.anchor);
                    this.anchor.click();
                }
                finally {
                    // make sure anchor is removed from parent
                    if (this.anchor && this.anchor.parentNode) {
                        this.anchor.parentNode.removeChild(this.anchor);
                    }
                    if (url) {
                        URL.revokeObjectURL(url);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    FileDownloadService.prototype.request = function (uris) {
        var url = this.url(uris);
        var init = this.requestInit(uris);
        return new Request(url, init);
    };
    FileDownloadService.prototype.requestInit = function (uris) {
        if (uris.length === 1) {
            return {
                body: undefined,
                method: 'GET'
            };
        }
        return {
            method: 'PUT',
            body: JSON.stringify(this.body(uris)),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        };
    };
    FileDownloadService.prototype.body = function (uris) {
        return {
            uris: uris.map(function (u) { return u.toString(true); })
        };
    };
    FileDownloadService.prototype.url = function (uris) {
        var endpoint = this.endpoint();
        if (uris.length === 1) {
            // tslint:disable-next-line:whitespace
            var _a = __read(uris, 1), uri = _a[0];
            return endpoint + "/?uri=" + uri.toString();
        }
        return endpoint;
    };
    FileDownloadService.prototype.endpoint = function () {
        var url = this.filesUrl();
        return url.endsWith('/') ? url.slice(0, -1) : url;
    };
    FileDownloadService.prototype.filesUrl = function () {
        return new endpoint_1.Endpoint({ path: 'files' }).getRestUrl().toString();
    };
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], FileDownloadService.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(filesystem_1.FileSystem),
        __metadata("design:type", Object)
    ], FileDownloadService.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], FileDownloadService.prototype, "messageService", void 0);
    FileDownloadService = __decorate([
        inversify_1.injectable()
    ], FileDownloadService);
    return FileDownloadService;
}());
exports.FileDownloadService = FileDownloadService;


/***/ })

}]);
//# sourceMappingURL=7.bundle.js.map