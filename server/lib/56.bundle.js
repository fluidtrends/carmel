(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/@theia/task/lib/browser/process/process-task-contribution.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/process/process-task-contribution.js ***!
  \***********************************************************************************/
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
exports.ProcessTaskContribution = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var process_task_resolver_1 = __webpack_require__(/*! ./process-task-resolver */ "./node_modules/@theia/task/lib/browser/process/process-task-resolver.js");
var ProcessTaskContribution = /** @class */ (function () {
    function ProcessTaskContribution() {
    }
    ProcessTaskContribution.prototype.registerResolvers = function (resolvers) {
        resolvers.register('process', this.processTaskResolver);
        resolvers.register('shell', this.processTaskResolver);
    };
    __decorate([
        inversify_1.inject(process_task_resolver_1.ProcessTaskResolver),
        __metadata("design:type", process_task_resolver_1.ProcessTaskResolver)
    ], ProcessTaskContribution.prototype, "processTaskResolver", void 0);
    ProcessTaskContribution = __decorate([
        inversify_1.injectable()
    ], ProcessTaskContribution);
    return ProcessTaskContribution;
}());
exports.ProcessTaskContribution = ProcessTaskContribution;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/process/process-task-frontend-module.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/process/process-task-frontend-module.js ***!
  \**************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindProcessTaskModule = void 0;
var process_task_contribution_1 = __webpack_require__(/*! ./process-task-contribution */ "./node_modules/@theia/task/lib/browser/process/process-task-contribution.js");
var process_task_resolver_1 = __webpack_require__(/*! ./process-task-resolver */ "./node_modules/@theia/task/lib/browser/process/process-task-resolver.js");
var task_contribution_1 = __webpack_require__(/*! ../task-contribution */ "./node_modules/@theia/task/lib/browser/task-contribution.js");
function bindProcessTaskModule(bind) {
    bind(process_task_resolver_1.ProcessTaskResolver).toSelf().inSingletonScope();
    bind(process_task_contribution_1.ProcessTaskContribution).toSelf().inSingletonScope();
    bind(task_contribution_1.TaskContribution).toService(process_task_contribution_1.ProcessTaskContribution);
}
exports.bindProcessTaskModule = bindProcessTaskModule;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/process/process-task-resolver.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/process/process-task-resolver.js ***!
  \*******************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessTaskResolver = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/variable-resolver/lib/browser */ "./node_modules/@theia/variable-resolver/lib/browser/index.js");
var task_definition_registry_1 = __webpack_require__(/*! ../task-definition-registry */ "./node_modules/@theia/task/lib/browser/task-definition-registry.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var browser_2 = __webpack_require__(/*! @theia/workspace/lib/browser */ "./node_modules/@theia/workspace/lib/browser/index.js");
var ProcessTaskResolver = /** @class */ (function () {
    function ProcessTaskResolver() {
    }
    /**
     * Perform some adjustments to the task launch configuration, before sending
     * it to the backend to be executed. We can make sure that parameters that
     * are optional to the user but required by the server will be defined, with
     * sane default values. Also, resolve all known variables, e.g. `${workspaceFolder}`.
     */
    ProcessTaskResolver.prototype.resolveTask = function (taskConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var context, variableResolverOptions, processTaskConfig, cwd, rootURI, result, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
            return __generator(this, function (_p) {
                switch (_p.label) {
                    case 0:
                        if (taskConfig.type !== 'process' && taskConfig.type !== 'shell') {
                            throw new Error('Unsupported task configuration type.');
                        }
                        context = typeof taskConfig._scope === 'string' ? new uri_1.default(taskConfig._scope) : undefined;
                        variableResolverOptions = {
                            context: context,
                            configurationSection: 'tasks'
                        };
                        processTaskConfig = taskConfig;
                        cwd = processTaskConfig.options && processTaskConfig.options.cwd;
                        if (!cwd) {
                            rootURI = this.workspaceService.getWorkspaceRootUri(context);
                            if (rootURI) {
                                cwd = rootURI.toString();
                            }
                        }
                        _a = [__assign({}, processTaskConfig)];
                        _b = {};
                        return [4 /*yield*/, this.variableResolverService.resolve(processTaskConfig.command, variableResolverOptions)];
                    case 1:
                        _b.command = _p.sent();
                        if (!processTaskConfig.args) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.variableResolverService.resolveArray(processTaskConfig.args, variableResolverOptions)];
                    case 2:
                        _c = _p.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _c = undefined;
                        _p.label = 4;
                    case 4:
                        _b.args = _c;
                        if (!processTaskConfig.windows) return [3 /*break*/, 9];
                        _e = {};
                        return [4 /*yield*/, this.variableResolverService.resolve(processTaskConfig.windows.command, variableResolverOptions)];
                    case 5:
                        _e.command = _p.sent();
                        if (!processTaskConfig.windows.args) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.variableResolverService.resolveArray(processTaskConfig.windows.args, variableResolverOptions)];
                    case 6:
                        _f = _p.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        _f = undefined;
                        _p.label = 8;
                    case 8:
                        _d = (_e.args = _f,
                            _e.options = processTaskConfig.windows.options,
                            _e);
                        return [3 /*break*/, 10];
                    case 9:
                        _d = undefined;
                        _p.label = 10;
                    case 10:
                        _b.windows = _d;
                        if (!processTaskConfig.osx) return [3 /*break*/, 15];
                        _h = {};
                        return [4 /*yield*/, this.variableResolverService.resolve(processTaskConfig.osx.command, variableResolverOptions)];
                    case 11:
                        _h.command = _p.sent();
                        if (!processTaskConfig.osx.args) return [3 /*break*/, 13];
                        return [4 /*yield*/, this.variableResolverService.resolveArray(processTaskConfig.osx.args, variableResolverOptions)];
                    case 12:
                        _j = _p.sent();
                        return [3 /*break*/, 14];
                    case 13:
                        _j = undefined;
                        _p.label = 14;
                    case 14:
                        _g = (_h.args = _j,
                            _h.options = processTaskConfig.osx.options,
                            _h);
                        return [3 /*break*/, 16];
                    case 15:
                        _g = undefined;
                        _p.label = 16;
                    case 16:
                        _b.osx = _g;
                        if (!processTaskConfig.linux) return [3 /*break*/, 21];
                        _l = {};
                        return [4 /*yield*/, this.variableResolverService.resolve(processTaskConfig.linux.command, variableResolverOptions)];
                    case 17:
                        _l.command = _p.sent();
                        if (!processTaskConfig.linux.args) return [3 /*break*/, 19];
                        return [4 /*yield*/, this.variableResolverService.resolveArray(processTaskConfig.linux.args, variableResolverOptions)];
                    case 18:
                        _m = _p.sent();
                        return [3 /*break*/, 20];
                    case 19:
                        _m = undefined;
                        _p.label = 20;
                    case 20:
                        _k = (_l.args = _m,
                            _l.options = processTaskConfig.linux.options,
                            _l);
                        return [3 /*break*/, 22];
                    case 21:
                        _k = undefined;
                        _p.label = 22;
                    case 22:
                        _b.linux = _k;
                        _o = {};
                        return [4 /*yield*/, this.variableResolverService.resolve(cwd, variableResolverOptions)];
                    case 23:
                        result = __assign.apply(void 0, _a.concat([(_b.options = (_o.cwd = _p.sent(),
                                _o.env = processTaskConfig.options && processTaskConfig.options.env,
                                _o.shell = processTaskConfig.options && processTaskConfig.options.shell,
                                _o), _b)]));
                        return [2 /*return*/, result];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(browser_1.VariableResolverService),
        __metadata("design:type", browser_1.VariableResolverService)
    ], ProcessTaskResolver.prototype, "variableResolverService", void 0);
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], ProcessTaskResolver.prototype, "taskDefinitionRegistry", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], ProcessTaskResolver.prototype, "workspaceService", void 0);
    ProcessTaskResolver = __decorate([
        inversify_1.injectable()
    ], ProcessTaskResolver);
    return ProcessTaskResolver;
}());
exports.ProcessTaskResolver = ProcessTaskResolver;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-frontend-contribution.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-frontend-contribution.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
exports.TaskFrontendContribution = exports.TaskCommands = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var quick_open_task_1 = __webpack_require__(/*! ./quick-open-task */ "./node_modules/@theia/task/lib/browser/quick-open-task.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var widget_manager_1 = __webpack_require__(/*! @theia/core/lib/browser/widget-manager */ "./node_modules/@theia/core/lib/browser/widget-manager.js");
var task_contribution_1 = __webpack_require__(/*! ./task-contribution */ "./node_modules/@theia/task/lib/browser/task-contribution.js");
var task_service_1 = __webpack_require__(/*! ./task-service */ "./node_modules/@theia/task/lib/browser/task-service.js");
var terminal_frontend_contribution_1 = __webpack_require__(/*! @theia/terminal/lib/browser/terminal-frontend-contribution */ "./node_modules/@theia/terminal/lib/browser/terminal-frontend-contribution.js");
var task_schema_updater_1 = __webpack_require__(/*! ./task-schema-updater */ "./node_modules/@theia/task/lib/browser/task-schema-updater.js");
var common_2 = __webpack_require__(/*! ../common */ "./node_modules/@theia/task/lib/common/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "./node_modules/@theia/workspace/lib/browser/workspace-service.js");
var TaskCommands;
(function (TaskCommands) {
    var TASK_CATEGORY = 'Task';
    TaskCommands.TASK_RUN = {
        id: 'task:run',
        category: TASK_CATEGORY,
        label: 'Run Task...'
    };
    TaskCommands.TASK_RUN_BUILD = {
        id: 'task:run:build',
        category: TASK_CATEGORY,
        label: 'Run Build Task...'
    };
    TaskCommands.TASK_RUN_TEST = {
        id: 'task:run:test',
        category: TASK_CATEGORY,
        label: 'Run Test Task...'
    };
    TaskCommands.WORKBENCH_RUN_TASK = {
        id: 'workbench.action.tasks.runTask',
        category: TASK_CATEGORY
    };
    TaskCommands.TASK_RUN_LAST = {
        id: 'task:run:last',
        category: TASK_CATEGORY,
        label: 'Run Last Task'
    };
    TaskCommands.TASK_ATTACH = {
        id: 'task:attach',
        category: TASK_CATEGORY,
        label: 'Attach Task...'
    };
    TaskCommands.TASK_RUN_TEXT = {
        id: 'task:run:text',
        category: TASK_CATEGORY,
        label: 'Run Selected Text'
    };
    TaskCommands.TASK_CONFIGURE = {
        id: 'task:configure',
        category: TASK_CATEGORY,
        label: 'Configure Tasks...'
    };
    TaskCommands.TASK_OPEN_USER = {
        id: 'task:open_user',
        category: TASK_CATEGORY,
        label: 'Open User Tasks'
    };
    TaskCommands.TASK_CLEAR_HISTORY = {
        id: 'task:clear-history',
        category: TASK_CATEGORY,
        label: 'Clear History'
    };
    TaskCommands.TASK_SHOW_RUNNING = {
        id: 'task:show-running',
        category: TASK_CATEGORY,
        label: 'Show Running Tasks'
    };
    TaskCommands.TASK_TERMINATE = {
        id: 'task:terminate',
        category: TASK_CATEGORY,
        label: 'Terminate Task'
    };
    TaskCommands.TASK_RESTART_RUNNING = {
        id: 'task:restart-running',
        category: TASK_CATEGORY,
        label: 'Restart Running Task...'
    };
})(TaskCommands = exports.TaskCommands || (exports.TaskCommands = {}));
var TASKS_STORAGE_KEY = 'tasks';
var TaskFrontendContribution = /** @class */ (function () {
    function TaskFrontendContribution() {
    }
    TaskFrontendContribution.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.taskWatcher.onTaskCreated(function () { return _this.updateRunningTasksItem(); });
                this.taskWatcher.onTaskExit(function () { return _this.updateRunningTasksItem(); });
                return [2 /*return*/];
            });
        });
    };
    TaskFrontendContribution.prototype.onStart = function () {
        var _this = this;
        this.contributionProvider.getContributions().forEach(function (contrib) {
            if (contrib.registerResolvers) {
                contrib.registerResolvers(_this.taskResolverRegistry);
            }
            if (contrib.registerProviders) {
                contrib.registerProviders(_this.taskProviderRegistry);
            }
        });
        this.schemaUpdater.update();
        this.storageService.getData(TASKS_STORAGE_KEY, { recent: [] })
            .then(function (tasks) { return _this.taskService.recentTasks = tasks.recent; });
    };
    TaskFrontendContribution.prototype.onStop = function () {
        var recent = this.taskService.recentTasks;
        this.storageService.setData(TASKS_STORAGE_KEY, { recent: recent });
    };
    /**
     * Contribute a status-bar item to trigger
     * the `Show Running Tasks` command.
     */
    TaskFrontendContribution.prototype.updateRunningTasksItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var id, items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = 'show-running-tasks';
                        return [4 /*yield*/, this.taskService.getRunningTasks()];
                    case 1:
                        items = _a.sent();
                        if (!!items.length) {
                            this.statusBar.setElement(id, {
                                text: "$(tools) " + items.length,
                                tooltip: 'Show Running Tasks',
                                alignment: browser_1.StatusBarAlignment.LEFT,
                                priority: 2,
                                command: TaskCommands.TASK_SHOW_RUNNING.id,
                            });
                        }
                        else {
                            this.statusBar.removeElement(id);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskFrontendContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand(TaskCommands.WORKBENCH_RUN_TASK, {
            isEnabled: function () { return true; },
            execute: function (label) { return __awaiter(_this, void 0, void 0, function () {
                var didExecute;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.taskService.runTaskByLabel(this.taskService.startUserAction(), label)];
                        case 1:
                            didExecute = _a.sent();
                            if (!didExecute) {
                                this.quickOpenTask.open();
                            }
                            return [2 /*return*/];
                    }
                });
            }); }
        });
        registry.registerCommand(TaskCommands.TASK_RUN, {
            isEnabled: function () { return true; },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            execute: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _a = __read(args, 3), source = _a[0], label = _a[1], scope = _a[2];
                if (source && label) {
                    return _this.taskService.run(_this.taskService.startUserAction(), source, label, scope);
                }
                return _this.quickOpenTask.open();
            }
        });
        registry.registerCommand(TaskCommands.TASK_RUN_BUILD, {
            isEnabled: function () { return _this.workspaceService.opened; },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            execute: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.quickOpenTask.runBuildOrTestTask('build');
            }
        });
        registry.registerCommand(TaskCommands.TASK_RUN_TEST, {
            isEnabled: function () { return _this.workspaceService.opened; },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            execute: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.quickOpenTask.runBuildOrTestTask('test');
            }
        });
        registry.registerCommand(TaskCommands.TASK_ATTACH, {
            isEnabled: function () { return true; },
            execute: function () { return _this.quickOpenTask.attach(); }
        });
        registry.registerCommand(TaskCommands.TASK_RUN_LAST, {
            execute: function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.taskService.runLastTask(this.taskService.startUserAction())];
                        case 1:
                            if (!!(_a.sent())) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.quickOpenTask.open()];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); }
        });
        registry.registerCommand(TaskCommands.TASK_RUN_TEXT, {
            isVisible: function () { return !!_this.editorManager.currentEditor; },
            isEnabled: function () { return !!_this.editorManager.currentEditor; },
            execute: function () { return _this.taskService.runSelectedText(); }
        });
        registry.registerCommand(TaskCommands.TASK_CONFIGURE, {
            execute: function () { return _this.quickOpenTask.configure(); }
        });
        registry.registerCommand(TaskCommands.TASK_OPEN_USER, {
            execute: function () {
                _this.taskService.openUserTasks();
            }
        });
        registry.registerCommand(TaskCommands.TASK_CLEAR_HISTORY, {
            execute: function () { return _this.taskService.clearRecentTasks(); }
        });
        registry.registerCommand(TaskCommands.TASK_SHOW_RUNNING, {
            execute: function () { return _this.taskRunningQuickOpen.open(); }
        });
        registry.registerCommand(TaskCommands.TASK_TERMINATE, {
            execute: function () { return _this.taskTerminateQuickOpen.open(); }
        });
        registry.registerCommand(TaskCommands.TASK_RESTART_RUNNING, {
            execute: function () { return _this.taskRestartRunningQuickOpen.open(); }
        });
    };
    TaskFrontendContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS, {
            commandId: TaskCommands.TASK_RUN.id,
            order: '0'
        });
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS, {
            commandId: TaskCommands.TASK_RUN_BUILD.id,
            order: '1'
        });
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS, {
            commandId: TaskCommands.TASK_RUN_TEST.id,
            order: '2'
        });
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS, {
            commandId: TaskCommands.TASK_RUN_LAST.id,
            order: '3'
        });
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS, {
            commandId: TaskCommands.TASK_ATTACH.id,
            order: '4'
        });
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS, {
            commandId: TaskCommands.TASK_RUN_TEXT.id,
            order: '5'
        });
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS_INFO, {
            commandId: TaskCommands.TASK_SHOW_RUNNING.id,
            label: 'Show Running Tasks...',
            order: '0'
        });
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS_INFO, {
            commandId: TaskCommands.TASK_RESTART_RUNNING.id,
            label: TaskCommands.TASK_RESTART_RUNNING.label,
            order: '1'
        });
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS_INFO, {
            commandId: TaskCommands.TASK_TERMINATE.id,
            label: 'Terminate Task...',
            order: '2'
        });
        menus.registerMenuAction(terminal_frontend_contribution_1.TerminalMenus.TERMINAL_TASKS_CONFIG, {
            commandId: TaskCommands.TASK_CONFIGURE.id,
            order: '0'
        });
    };
    TaskFrontendContribution.prototype.registerQuickOpenHandlers = function (handlers) {
        handlers.registerHandler(this.quickOpenTask);
    };
    TaskFrontendContribution.prototype.registerKeybindings = function (keybindings) {
        keybindings.registerKeybinding({
            command: TaskCommands.TASK_RUN_LAST.id,
            keybinding: 'ctrlcmd+shift+k',
            when: '!textInputFocus || editorReadonly'
        });
    };
    __decorate([
        inversify_1.inject(quick_open_task_1.QuickOpenTask),
        __metadata("design:type", quick_open_task_1.QuickOpenTask)
    ], TaskFrontendContribution.prototype, "quickOpenTask", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], TaskFrontendContribution.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(browser_1.FrontendApplication),
        __metadata("design:type", browser_1.FrontendApplication)
    ], TaskFrontendContribution.prototype, "app", void 0);
    __decorate([
        inversify_1.inject(common_1.ILogger),
        inversify_1.named('task'),
        __metadata("design:type", Object)
    ], TaskFrontendContribution.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(widget_manager_1.WidgetManager),
        __metadata("design:type", widget_manager_1.WidgetManager)
    ], TaskFrontendContribution.prototype, "widgetManager", void 0);
    __decorate([
        inversify_1.inject(common_1.ContributionProvider),
        inversify_1.named(task_contribution_1.TaskContribution),
        __metadata("design:type", Object)
    ], TaskFrontendContribution.prototype, "contributionProvider", void 0);
    __decorate([
        inversify_1.inject(task_contribution_1.TaskProviderRegistry),
        __metadata("design:type", task_contribution_1.TaskProviderRegistry)
    ], TaskFrontendContribution.prototype, "taskProviderRegistry", void 0);
    __decorate([
        inversify_1.inject(task_contribution_1.TaskResolverRegistry),
        __metadata("design:type", task_contribution_1.TaskResolverRegistry)
    ], TaskFrontendContribution.prototype, "taskResolverRegistry", void 0);
    __decorate([
        inversify_1.inject(task_service_1.TaskService),
        __metadata("design:type", task_service_1.TaskService)
    ], TaskFrontendContribution.prototype, "taskService", void 0);
    __decorate([
        inversify_1.inject(task_schema_updater_1.TaskSchemaUpdater),
        __metadata("design:type", task_schema_updater_1.TaskSchemaUpdater)
    ], TaskFrontendContribution.prototype, "schemaUpdater", void 0);
    __decorate([
        inversify_1.inject(browser_1.StorageService),
        __metadata("design:type", Object)
    ], TaskFrontendContribution.prototype, "storageService", void 0);
    __decorate([
        inversify_1.inject(quick_open_task_1.TaskRunningQuickOpen),
        __metadata("design:type", quick_open_task_1.TaskRunningQuickOpen)
    ], TaskFrontendContribution.prototype, "taskRunningQuickOpen", void 0);
    __decorate([
        inversify_1.inject(quick_open_task_1.TaskTerminateQuickOpen),
        __metadata("design:type", quick_open_task_1.TaskTerminateQuickOpen)
    ], TaskFrontendContribution.prototype, "taskTerminateQuickOpen", void 0);
    __decorate([
        inversify_1.inject(quick_open_task_1.TaskRestartRunningQuickOpen),
        __metadata("design:type", quick_open_task_1.TaskRestartRunningQuickOpen)
    ], TaskFrontendContribution.prototype, "taskRestartRunningQuickOpen", void 0);
    __decorate([
        inversify_1.inject(common_2.TaskWatcher),
        __metadata("design:type", common_2.TaskWatcher)
    ], TaskFrontendContribution.prototype, "taskWatcher", void 0);
    __decorate([
        inversify_1.inject(browser_1.StatusBar),
        __metadata("design:type", Object)
    ], TaskFrontendContribution.prototype, "statusBar", void 0);
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], TaskFrontendContribution.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], TaskFrontendContribution.prototype, "init", null);
    TaskFrontendContribution = __decorate([
        inversify_1.injectable()
    ], TaskFrontendContribution);
    return TaskFrontendContribution;
}());
exports.TaskFrontendContribution = TaskFrontendContribution;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-frontend-module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-frontend-module.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var messaging_1 = __webpack_require__(/*! @theia/core/lib/browser/messaging */ "./node_modules/@theia/core/lib/browser/messaging/index.js");
var quick_open_task_1 = __webpack_require__(/*! ./quick-open-task */ "./node_modules/@theia/task/lib/browser/quick-open-task.js");
var task_contribution_1 = __webpack_require__(/*! ./task-contribution */ "./node_modules/@theia/task/lib/browser/task-contribution.js");
var task_service_1 = __webpack_require__(/*! ./task-service */ "./node_modules/@theia/task/lib/browser/task-service.js");
var task_configurations_1 = __webpack_require__(/*! ./task-configurations */ "./node_modules/@theia/task/lib/browser/task-configurations.js");
var provided_task_configurations_1 = __webpack_require__(/*! ./provided-task-configurations */ "./node_modules/@theia/task/lib/browser/provided-task-configurations.js");
var task_frontend_contribution_1 = __webpack_require__(/*! ./task-frontend-contribution */ "./node_modules/@theia/task/lib/browser/task-frontend-contribution.js");
var task_common_module_1 = __webpack_require__(/*! ../common/task-common-module */ "./node_modules/@theia/task/lib/common/task-common-module.js");
var task_protocol_1 = __webpack_require__(/*! ../common/task-protocol */ "./node_modules/@theia/task/lib/common/task-protocol.js");
var task_watcher_1 = __webpack_require__(/*! ../common/task-watcher */ "./node_modules/@theia/task/lib/common/task-watcher.js");
var process_task_frontend_module_1 = __webpack_require__(/*! ./process/process-task-frontend-module */ "./node_modules/@theia/task/lib/browser/process/process-task-frontend-module.js");
var task_schema_updater_1 = __webpack_require__(/*! ./task-schema-updater */ "./node_modules/@theia/task/lib/browser/task-schema-updater.js");
var task_definition_registry_1 = __webpack_require__(/*! ./task-definition-registry */ "./node_modules/@theia/task/lib/browser/task-definition-registry.js");
var task_problem_matcher_registry_1 = __webpack_require__(/*! ./task-problem-matcher-registry */ "./node_modules/@theia/task/lib/browser/task-problem-matcher-registry.js");
var task_problem_pattern_registry_1 = __webpack_require__(/*! ./task-problem-pattern-registry */ "./node_modules/@theia/task/lib/browser/task-problem-pattern-registry.js");
var task_configuration_manager_1 = __webpack_require__(/*! ./task-configuration-manager */ "./node_modules/@theia/task/lib/browser/task-configuration-manager.js");
var task_preferences_1 = __webpack_require__(/*! ./task-preferences */ "./node_modules/@theia/task/lib/browser/task-preferences.js");
__webpack_require__(/*! ../../src/browser/style/index.css */ "./node_modules/@theia/task/src/browser/style/index.css");
__webpack_require__(/*! ./tasks-monaco-contribution */ "./node_modules/@theia/task/lib/browser/tasks-monaco-contribution.js");
var task_name_resolver_1 = __webpack_require__(/*! ./task-name-resolver */ "./node_modules/@theia/task/lib/browser/task-name-resolver.js");
var task_source_resolver_1 = __webpack_require__(/*! ./task-source-resolver */ "./node_modules/@theia/task/lib/browser/task-source-resolver.js");
var task_templates_1 = __webpack_require__(/*! ./task-templates */ "./node_modules/@theia/task/lib/browser/task-templates.js");
var task_terminal_widget_manager_1 = __webpack_require__(/*! ./task-terminal-widget-manager */ "./node_modules/@theia/task/lib/browser/task-terminal-widget-manager.js");
var json_schema_store_1 = __webpack_require__(/*! @theia/core/lib/browser/json-schema-store */ "./node_modules/@theia/core/lib/browser/json-schema-store.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    var e_1, _a;
    bind(task_frontend_contribution_1.TaskFrontendContribution).toSelf().inSingletonScope();
    bind(task_service_1.TaskService).toSelf().inSingletonScope();
    bind(quick_open_task_1.TaskActionProvider).toSelf().inSingletonScope();
    bind(quick_open_task_1.ConfigureTaskAction).toSelf().inSingletonScope();
    try {
        for (var _b = __values([browser_1.FrontendApplicationContribution, common_1.CommandContribution, browser_1.KeybindingContribution, common_1.MenuContribution, browser_1.QuickOpenContribution]), _c = _b.next(); !_c.done; _c = _b.next()) {
            var identifier = _c.value;
            bind(identifier).toService(task_frontend_contribution_1.TaskFrontendContribution);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    bind(quick_open_task_1.QuickOpenTask).toSelf().inSingletonScope();
    bind(quick_open_task_1.TaskRunningQuickOpen).toSelf().inSingletonScope();
    bind(quick_open_task_1.TaskTerminateQuickOpen).toSelf().inSingletonScope();
    bind(quick_open_task_1.TaskRestartRunningQuickOpen).toSelf().inSingletonScope();
    bind(task_configurations_1.TaskConfigurations).toSelf().inSingletonScope();
    bind(provided_task_configurations_1.ProvidedTaskConfigurations).toSelf().inSingletonScope();
    bind(task_configuration_manager_1.TaskConfigurationManager).toSelf().inSingletonScope();
    bind(task_protocol_1.TaskServer).toDynamicValue(function (ctx) {
        var connection = ctx.container.get(messaging_1.WebSocketConnectionProvider);
        var taskWatcher = ctx.container.get(task_watcher_1.TaskWatcher);
        return connection.createProxy(task_protocol_1.taskPath, taskWatcher.getTaskClient());
    }).inSingletonScope();
    bind(task_definition_registry_1.TaskDefinitionRegistry).toSelf().inSingletonScope();
    bind(task_problem_matcher_registry_1.ProblemMatcherRegistry).toSelf().inSingletonScope();
    bind(task_problem_pattern_registry_1.ProblemPatternRegistry).toSelf().inSingletonScope();
    task_common_module_1.createCommonBindings(bind);
    bind(task_contribution_1.TaskProviderRegistry).toSelf().inSingletonScope();
    bind(task_contribution_1.TaskResolverRegistry).toSelf().inSingletonScope();
    common_1.bindContributionProvider(bind, task_contribution_1.TaskContribution);
    bind(task_schema_updater_1.TaskSchemaUpdater).toSelf().inSingletonScope();
    bind(json_schema_store_1.JsonSchemaContribution).toService(task_schema_updater_1.TaskSchemaUpdater);
    bind(task_name_resolver_1.TaskNameResolver).toSelf().inSingletonScope();
    bind(task_source_resolver_1.TaskSourceResolver).toSelf().inSingletonScope();
    bind(task_templates_1.TaskTemplateSelector).toSelf().inSingletonScope();
    bind(task_terminal_widget_manager_1.TaskTerminalWidgetManager).toSelf().inSingletonScope();
    process_task_frontend_module_1.bindProcessTaskModule(bind);
    task_preferences_1.bindTaskPreferences(bind);
});


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-preferences.js":
/*!******************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-preferences.js ***!
  \******************************************************************/
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
exports.bindTaskPreferences = exports.taskPreferencesSchema = void 0;
var preference_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences/preference-contribution */ "./node_modules/@theia/core/lib/browser/preferences/preference-contribution.js");
var task_schema_updater_1 = __webpack_require__(/*! ./task-schema-updater */ "./node_modules/@theia/task/lib/browser/task-schema-updater.js");
var preference_configurations_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences/preference-configurations */ "./node_modules/@theia/core/lib/browser/preferences/preference-configurations.js");
exports.taskPreferencesSchema = {
    type: 'object',
    scope: 'resource',
    properties: {
        tasks: {
            $ref: task_schema_updater_1.taskSchemaId,
            description: 'Task definition file',
            defaultValue: {
                tasks: []
            }
        }
    }
};
function bindTaskPreferences(bind) {
    bind(preference_contribution_1.PreferenceContribution).toConstantValue({ schema: exports.taskPreferencesSchema });
    bind(preference_configurations_1.PreferenceConfiguration).toConstantValue({ name: 'tasks' });
}
exports.bindTaskPreferences = bindTaskPreferences;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/tasks-monaco-contribution.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/tasks-monaco-contribution.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
monaco.languages.register({
    id: 'jsonc',
    'aliases': [
        'JSON with Comments'
    ],
    'filenames': [
        'tasks.json'
    ]
});


/***/ }),

/***/ "./node_modules/@theia/task/lib/common/task-common-module.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@theia/task/lib/common/task-common-module.js ***!
  \*******************************************************************/
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
exports.createCommonBindings = void 0;
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var task_watcher_1 = __webpack_require__(/*! ./task-watcher */ "./node_modules/@theia/task/lib/common/task-watcher.js");
/**
 * Create the bindings common to node and browser.
 *
 * @param bind The bind function from inversify.
 */
function createCommonBindings(bind) {
    bind(core_1.ILogger).toDynamicValue(function (ctx) {
        var logger = ctx.container.get(core_1.ILogger);
        return logger.child('task');
    }).inSingletonScope().whenTargetNamed('task');
    bind(task_watcher_1.TaskWatcher).toSelf().inSingletonScope();
}
exports.createCommonBindings = createCommonBindings;


/***/ }),

/***/ "./node_modules/@theia/task/src/browser/style/index.css":
/*!**************************************************************!*\
  !*** ./node_modules/@theia/task/src/browser/style/index.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./index.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/task/src/browser/style/index.css");

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

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/task/src/browser/style/index.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/task/src/browser/style/index.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2019 Red Hat, Inc. and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n .quick-open-task-configure {\n    margin-top: 3px !important;\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=56.bundle.js.map