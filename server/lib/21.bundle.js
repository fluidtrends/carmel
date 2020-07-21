(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/@theia/core/lib/browser/widgets/alert-message.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@theia/core/lib/browser/widgets/alert-message.js ***!
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
exports.AlertMessage = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var AlertMessageIcon = {
    INFO: 'fa fa-info-circle',
    SUCCESS: 'fa fa-check-circle',
    WARNING: 'fa fa-exclamation-circle',
    ERROR: 'fa fa-times-circle'
};
var AlertMessage = /** @class */ (function (_super) {
    __extends(AlertMessage, _super);
    function AlertMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AlertMessage.prototype.render = function () {
        return React.createElement("div", { className: 'theia-alert-message-container' },
            React.createElement("div", { className: "theia-" + this.props.type.toLowerCase() + "-alert" },
                React.createElement("div", { className: 'theia-message-header' },
                    React.createElement("i", { className: AlertMessageIcon[this.props.type] }),
                    "\u00A0",
                    this.props.header),
                React.createElement("div", { className: 'theia-message-content' }, this.props.children)));
    };
    return AlertMessage;
}(React.Component));
exports.AlertMessage = AlertMessage;


/***/ }),

/***/ "./node_modules/@theia/scm/lib/browser/scm-avatar-service.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@theia/scm/lib/browser/scm-avatar-service.js ***!
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
exports.ScmAvatarService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var ts_md5_1 = __webpack_require__(/*! ts-md5 */ "./node_modules/ts-md5/dist/md5.js");
var ScmAvatarService = /** @class */ (function () {
    function ScmAvatarService() {
    }
    ScmAvatarService.prototype.getAvatar = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var hash;
            return __generator(this, function (_a) {
                hash = ts_md5_1.Md5.hashStr(email);
                return [2 /*return*/, "https://www.gravatar.com/avatar/" + hash + "?d=robohash"];
            });
        });
    };
    ScmAvatarService = __decorate([
        inversify_1.injectable()
    ], ScmAvatarService);
    return ScmAvatarService;
}());
exports.ScmAvatarService = ScmAvatarService;


/***/ }),

/***/ "./node_modules/@theia/scm/lib/browser/scm-context-key-service.js":
/*!************************************************************************!*\
  !*** ./node_modules/@theia/scm/lib/browser/scm-context-key-service.js ***!
  \************************************************************************/
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
exports.ScmContextKeyService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var context_key_service_1 = __webpack_require__(/*! @theia/core/lib/browser/context-key-service */ "./node_modules/@theia/core/lib/browser/context-key-service.js");
var ScmContextKeyService = /** @class */ (function () {
    function ScmContextKeyService() {
    }
    Object.defineProperty(ScmContextKeyService.prototype, "scmProvider", {
        get: function () {
            return this._scmProvider;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScmContextKeyService.prototype, "scmResourceGroup", {
        get: function () {
            return this._scmResourceGroup;
        },
        enumerable: false,
        configurable: true
    });
    ScmContextKeyService.prototype.init = function () {
        this._scmProvider = this.contextKeyService.createKey('scmProvider', undefined);
        this._scmResourceGroup = this.contextKeyService.createKey('scmResourceGroup', undefined);
    };
    ScmContextKeyService.prototype.match = function (expression) {
        return !expression || this.contextKeyService.match(expression);
    };
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], ScmContextKeyService.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ScmContextKeyService.prototype, "init", null);
    ScmContextKeyService = __decorate([
        inversify_1.injectable()
    ], ScmContextKeyService);
    return ScmContextKeyService;
}());
exports.ScmContextKeyService = ScmContextKeyService;


/***/ }),

/***/ "./node_modules/@theia/scm/lib/browser/scm-input.js":
/*!**********************************************************!*\
  !*** ./node_modules/@theia/scm/lib/browser/scm-input.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
exports.ScmInput = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var debounce = __webpack_require__(/*! p-debounce */ "./node_modules/p-debounce/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var json_1 = __webpack_require__(/*! @phosphor/coreutils/lib/json */ "./node_modules/@phosphor/coreutils/lib/json.js");
var ScmInput = /** @class */ (function () {
    function ScmInput(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.options = options;
        this.onDidChangeEmitter = new common_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.onDidFocusEmitter = new common_1.Emitter();
        this.onDidFocus = this.onDidFocusEmitter.event;
        this.toDispose = new common_1.DisposableCollection(this.onDidChangeEmitter, this.onDidFocusEmitter);
        this._placeholder = this.options.placeholder;
        this.validate = debounce(function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.options.validator) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.options.validator(this.value)];
                    case 1:
                        _a.issue = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); }, 200);
    }
    ScmInput.prototype.fireDidChange = function () {
        this.onDidChangeEmitter.fire(undefined);
    };
    ScmInput.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    Object.defineProperty(ScmInput.prototype, "placeholder", {
        get: function () {
            return this._placeholder;
        },
        set: function (placeholder) {
            if (this._placeholder === placeholder) {
                return;
            }
            this._placeholder = placeholder;
            this.fireDidChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScmInput.prototype, "value", {
        get: function () {
            return this._value || '';
        },
        set: function (value) {
            if (this.value === value) {
                return;
            }
            this._value = value;
            this.fireDidChange();
            this.validate();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScmInput.prototype, "issue", {
        get: function () {
            return this._issue;
        },
        set: function (issue) {
            if (json_1.JSONExt.deepEqual((this._issue || {}), (issue || {}))) {
                return;
            }
            this._issue = issue;
            this.fireDidChange();
        },
        enumerable: false,
        configurable: true
    });
    ScmInput.prototype.focus = function () {
        this.onDidFocusEmitter.fire(undefined);
    };
    ScmInput.prototype.toJSON = function () {
        return {
            value: this._value,
            issue: this._issue
        };
    };
    ScmInput.prototype.fromJSON = function (data) {
        if (this._value !== undefined) {
            return;
        }
        if ('value' in data) {
            this._value = data.value;
            this._issue = data.issue;
            this.fireDidChange();
        }
    };
    return ScmInput;
}());
exports.ScmInput = ScmInput;


/***/ }),

/***/ "./node_modules/@theia/scm/lib/browser/scm-repository.js":
/*!***************************************************************!*\
  !*** ./node_modules/@theia/scm/lib/browser/scm-repository.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
exports.ScmRepository = void 0;
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var scm_input_1 = __webpack_require__(/*! ./scm-input */ "./node_modules/@theia/scm/lib/browser/scm-input.js");
var ScmRepository = /** @class */ (function () {
    function ScmRepository(provider, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.provider = provider;
        this.options = options;
        this.onDidChangeEmitter = new common_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.toDispose = new common_1.DisposableCollection(this.onDidChangeEmitter);
        this.toDispose.pushAll([
            this.provider,
            this.input = new scm_input_1.ScmInput(options.input),
            this.input.onDidChange(function () { return _this.fireDidChange(); })
        ]);
    }
    ScmRepository.prototype.fireDidChange = function () {
        this.onDidChangeEmitter.fire(undefined);
    };
    ScmRepository.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    return ScmRepository;
}());
exports.ScmRepository = ScmRepository;


/***/ }),

/***/ "./node_modules/@theia/scm/lib/browser/scm-service.js":
/*!************************************************************!*\
  !*** ./node_modules/@theia/scm/lib/browser/scm-service.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScmService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var scm_context_key_service_1 = __webpack_require__(/*! ./scm-context-key-service */ "./node_modules/@theia/scm/lib/browser/scm-context-key-service.js");
var scm_repository_1 = __webpack_require__(/*! ./scm-repository */ "./node_modules/@theia/scm/lib/browser/scm-repository.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var ScmService = /** @class */ (function () {
    function ScmService() {
        this._repositories = new Map();
        this.onDidChangeSelectedRepositoryEmitter = new common_1.Emitter();
        this.onDidChangeSelectedRepository = this.onDidChangeSelectedRepositoryEmitter.event;
        this.onDidAddRepositoryEmitter = new common_1.Emitter();
        this.onDidAddRepository = this.onDidAddRepositoryEmitter.event;
        this.onDidRemoveRepositoryEmitter = new common_1.Emitter();
        this.onDidRemoveRepository = this.onDidAddRepositoryEmitter.event;
        this.onDidChangeStatusBarCommandsEmitter = new common_1.Emitter();
        this.onDidChangeStatusBarCommands = this.onDidChangeStatusBarCommandsEmitter.event;
        this.toDisposeOnSelected = new common_1.DisposableCollection();
    }
    ScmService.prototype.fireDidChangeStatusBarCommands = function () {
        this.onDidChangeStatusBarCommandsEmitter.fire(this.statusBarCommands);
    };
    Object.defineProperty(ScmService.prototype, "statusBarCommands", {
        get: function () {
            var repository = this.selectedRepository;
            return repository && repository.provider.statusBarCommands || [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScmService.prototype, "repositories", {
        get: function () {
            return __spread(this._repositories.values());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScmService.prototype, "selectedRepository", {
        get: function () {
            return this._selectedRepository;
        },
        set: function (repository) {
            var _this = this;
            if (this._selectedRepository === repository) {
                return;
            }
            this.toDisposeOnSelected.dispose();
            this._selectedRepository = repository;
            if (this._selectedRepository) {
                if (this._selectedRepository.provider.onDidChangeStatusBarCommands) {
                    this.toDisposeOnSelected.push(this._selectedRepository.provider.onDidChangeStatusBarCommands(function () { return _this.fireDidChangeStatusBarCommands(); }));
                }
            }
            this.onDidChangeSelectedRepositoryEmitter.fire(this._selectedRepository);
            this.fireDidChangeStatusBarCommands();
        },
        enumerable: false,
        configurable: true
    });
    ScmService.prototype.findRepository = function (uri) {
        var reposSorted = this.repositories.sort(function (ra, rb) { return rb.provider.rootUri.length - ra.provider.rootUri.length; });
        return reposSorted.find(function (repo) { return new uri_1.default(repo.provider.rootUri).isEqualOrParent(uri); });
    };
    ScmService.prototype.registerScmProvider = function (provider, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var key = provider.id + ':' + provider.rootUri;
        if (this._repositories.has(key)) {
            throw new Error(provider.label + " provider for '" + provider.rootUri + "' already exists.");
        }
        var repository = new scm_repository_1.ScmRepository(provider, options);
        var dispose = repository.dispose;
        repository.dispose = function () {
            _this._repositories.delete(key);
            dispose.bind(repository)();
            _this.onDidRemoveRepositoryEmitter.fire(repository);
            if (_this._selectedRepository === repository) {
                _this.selectedRepository = _this._repositories.values().next().value;
            }
        };
        this._repositories.set(key, repository);
        this.onDidAddRepositoryEmitter.fire(repository);
        if (this._repositories.size === 1) {
            this.selectedRepository = repository;
        }
        return repository;
    };
    __decorate([
        inversify_1.inject(scm_context_key_service_1.ScmContextKeyService),
        __metadata("design:type", scm_context_key_service_1.ScmContextKeyService)
    ], ScmService.prototype, "contextKeys", void 0);
    ScmService = __decorate([
        inversify_1.injectable()
    ], ScmService);
    return ScmService;
}());
exports.ScmService = ScmService;


/***/ })

}]);
//# sourceMappingURL=21.bundle.js.map