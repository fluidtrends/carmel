(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/@theia/core/lib/common/severity.js":
/*!*********************************************************!*\
  !*** ./node_modules/@theia/core/lib/common/severity.js ***!
  \*********************************************************/
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
exports.Severity = void 0;
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var vscode_languageserver_types_1 = __webpack_require__(/*! vscode-languageserver-types */ "./node_modules/vscode-languageserver-types/lib/esm/main.js");
var Severity;
(function (Severity) {
    Severity[Severity["Ignore"] = 0] = "Ignore";
    Severity[Severity["Error"] = 1] = "Error";
    Severity[Severity["Warning"] = 2] = "Warning";
    Severity[Severity["Info"] = 3] = "Info";
    Severity[Severity["Log"] = 4] = "Log";
})(Severity = exports.Severity || (exports.Severity = {}));
(function (Severity) {
    var error = 'Errors';
    var warning = 'Warnings';
    var info = 'Info';
    var log = 'Log';
    var ignore = 'All';
    function fromValue(value) {
        value = value && value.toLowerCase();
        if (!value) {
            return Severity.Ignore;
        }
        if (['error', 'errors'].indexOf(value) !== -1) {
            return Severity.Error;
        }
        if (['warn', 'warning', 'warnings'].indexOf(value) !== -1) {
            return Severity.Warning;
        }
        if (value === 'info') {
            return Severity.Info;
        }
        if (value === 'log') {
            return Severity.Log;
        }
        return Severity.Ignore;
    }
    Severity.fromValue = fromValue;
    function toDiagnosticSeverity(value) {
        switch (value) {
            case Severity.Ignore:
                return vscode_languageserver_types_1.DiagnosticSeverity.Hint;
            case Severity.Info:
                return vscode_languageserver_types_1.DiagnosticSeverity.Information;
            case Severity.Log:
                return vscode_languageserver_types_1.DiagnosticSeverity.Information;
            case Severity.Warning:
                return vscode_languageserver_types_1.DiagnosticSeverity.Warning;
            case Severity.Error:
                return vscode_languageserver_types_1.DiagnosticSeverity.Error;
            default:
                return vscode_languageserver_types_1.DiagnosticSeverity.Error;
        }
    }
    Severity.toDiagnosticSeverity = toDiagnosticSeverity;
    function toString(severity) {
        switch (severity) {
            case Severity.Error:
                return error;
            case Severity.Warning:
                return warning;
            case Severity.Info:
                return info;
            case Severity.Log:
                return log;
            default:
                return ignore;
        }
    }
    Severity.toString = toString;
    function toArray() {
        return [ignore, error, warning, info, log];
    }
    Severity.toArray = toArray;
})(Severity = exports.Severity || (exports.Severity = {}));


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/provided-task-configurations.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/provided-task-configurations.js ***!
  \******************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidedTaskConfigurations = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var task_contribution_1 = __webpack_require__(/*! ./task-contribution */ "./node_modules/@theia/task/lib/browser/task-contribution.js");
var task_definition_registry_1 = __webpack_require__(/*! ./task-definition-registry */ "./node_modules/@theia/task/lib/browser/task-definition-registry.js");
var common_1 = __webpack_require__(/*! ../common */ "./node_modules/@theia/task/lib/common/index.js");
var ProvidedTaskConfigurations = /** @class */ (function () {
    function ProvidedTaskConfigurations() {
        /**
         * Map of source (name of extension, or path of root folder that the task config comes from) and `task config map`.
         * For the second level of inner map, the key is task label.
         * For the third level of inner map, the key is the task scope and value TaskConfiguration.
         */
        this.tasksMap = new Map();
        this.currentToken = 0;
        this.nextToken = 1;
    }
    ProvidedTaskConfigurations.prototype.startUserAction = function () {
        return this.nextToken++;
    };
    /** returns a list of provided tasks */
    ProvidedTaskConfigurations.prototype.getTasks = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var tasks, _a, _b, taskLabelMap, _c, _d, taskScopeMap, _e, _f, task;
            var e_1, _g, e_2, _h, e_3, _j;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0: return [4 /*yield*/, this.refreshTasks(token)];
                    case 1:
                        _k.sent();
                        tasks = [];
                        try {
                            for (_a = __values(this.tasksMap.values()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                taskLabelMap = _b.value;
                                try {
                                    for (_c = (e_2 = void 0, __values(taskLabelMap.values())), _d = _c.next(); !_d.done; _d = _c.next()) {
                                        taskScopeMap = _d.value;
                                        try {
                                            for (_e = (e_3 = void 0, __values(taskScopeMap.values())), _f = _e.next(); !_f.done; _f = _e.next()) {
                                                task = _f.value;
                                                tasks.push(task);
                                            }
                                        }
                                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                                        finally {
                                            try {
                                                if (_f && !_f.done && (_j = _e.return)) _j.call(_e);
                                            }
                                            finally { if (e_3) throw e_3.error; }
                                        }
                                    }
                                }
                                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                finally {
                                    try {
                                        if (_d && !_d.done && (_h = _c.return)) _h.call(_c);
                                    }
                                    finally { if (e_2) throw e_2.error; }
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_g = _a.return)) _g.call(_a);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [2 /*return*/, tasks];
                }
            });
        });
    };
    ProvidedTaskConfigurations.prototype.refreshTasks = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var providers, providedTasks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(token !== this.currentToken)) return [3 /*break*/, 3];
                        this.currentToken = token;
                        return [4 /*yield*/, this.taskProviderRegistry.getProviders()];
                    case 1:
                        providers = _a.sent();
                        return [4 /*yield*/, Promise.all(providers.map(function (p) { return p.provideTasks(); }))];
                    case 2:
                        providedTasks = (_a.sent())
                            .reduce(function (acc, taskArray) { return acc.concat(taskArray); }, [])
                            .map(function (providedTask) {
                            var originalPresentation = providedTask.presentation || {};
                            return __assign(__assign({}, providedTask), { presentation: __assign(__assign({}, common_1.TaskOutputPresentation.getDefault()), originalPresentation) });
                        });
                        this.cacheTasks(providedTasks);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /** returns the task configuration for a given source and label or undefined if none */
    ProvidedTaskConfigurations.prototype.getTask = function (token, source, taskLabel, scope) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.refreshTasks(token)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.getCachedTask(source, taskLabel, scope)];
                }
            });
        });
    };
    /**
     * Finds the detected task for the given task customization.
     * The detected task is considered as a "match" to the task customization if it has all the `required` properties.
     * In case that more than one customization is found, return the one that has the biggest number of matched properties.
     *
     * @param customization the task customization
     * @return the detected task for the given task customization. If the task customization is not found, `undefined` is returned.
     */
    ProvidedTaskConfigurations.prototype.getTaskToCustomize = function (token, customization, scope) {
        return __awaiter(this, void 0, void 0, function () {
            var definition, matchedTasks, highest, tasks, _loop_1, tasks_1, tasks_1_1, task, matchedTask;
            var e_4, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        definition = this.taskDefinitionRegistry.getDefinition(customization);
                        if (!definition) {
                            return [2 /*return*/, undefined];
                        }
                        matchedTasks = [];
                        highest = -1;
                        return [4 /*yield*/, this.getTasks(token)];
                    case 1:
                        tasks = _b.sent();
                        _loop_1 = function (task) {
                            var score = 0;
                            if (!definition.properties.required.every(function (requiredProp) { return customization[requiredProp] !== undefined; })) {
                                return "continue";
                            }
                            score += definition.properties.required.length; // number of required properties
                            var requiredProps = new Set(definition.properties.required);
                            // number of optional properties
                            score += definition.properties.all.filter(function (p) { return !requiredProps.has(p) && customization[p] !== undefined; }).length;
                            if (score >= highest) {
                                if (score > highest) {
                                    highest = score;
                                    matchedTasks.length = 0;
                                }
                                matchedTasks.push(task);
                            }
                        };
                        try {
                            for (tasks_1 = __values(tasks), tasks_1_1 = tasks_1.next(); !tasks_1_1.done; tasks_1_1 = tasks_1.next()) {
                                task = tasks_1_1.value;
                                _loop_1(task);
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (tasks_1_1 && !tasks_1_1.done && (_a = tasks_1.return)) _a.call(tasks_1);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                        matchedTask = matchedTasks.filter(function (t) {
                            return scope === t._scope && definition.properties.all.every(function (p) { return t[p] === customization[p]; });
                        })[0];
                        return [2 /*return*/, matchedTask];
                }
            });
        });
    };
    ProvidedTaskConfigurations.prototype.getCachedTask = function (source, taskLabel, scope) {
        var labelConfigMap = this.tasksMap.get(source);
        if (labelConfigMap) {
            var scopeConfigMap = labelConfigMap.get(taskLabel);
            if (scopeConfigMap) {
                if (scope) {
                    return scopeConfigMap.get(scope.toString());
                }
                return Array.from(scopeConfigMap.values())[0];
            }
        }
    };
    ProvidedTaskConfigurations.prototype.cacheTasks = function (tasks) {
        var e_5, _a;
        this.tasksMap.clear();
        try {
            for (var tasks_2 = __values(tasks), tasks_2_1 = tasks_2.next(); !tasks_2_1.done; tasks_2_1 = tasks_2.next()) {
                var task = tasks_2_1.value;
                var label = task.label;
                var source = task._source;
                var scope = task._scope;
                if (this.tasksMap.has(source)) {
                    var labelConfigMap = this.tasksMap.get(source);
                    if (labelConfigMap.has(label)) {
                        labelConfigMap.get(label).set(scope.toString(), task);
                    }
                    else {
                        var newScopeConfigMap = new Map();
                        newScopeConfigMap.set(scope.toString(), task);
                        labelConfigMap.set(label, newScopeConfigMap);
                    }
                }
                else {
                    var newLabelConfigMap = new Map();
                    var newScopeConfigMap = new Map();
                    newScopeConfigMap.set(scope.toString(), task);
                    newLabelConfigMap.set(label, newScopeConfigMap);
                    this.tasksMap.set(source, newLabelConfigMap);
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (tasks_2_1 && !tasks_2_1.done && (_a = tasks_2.return)) _a.call(tasks_2);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    __decorate([
        inversify_1.inject(task_contribution_1.TaskProviderRegistry),
        __metadata("design:type", task_contribution_1.TaskProviderRegistry)
    ], ProvidedTaskConfigurations.prototype, "taskProviderRegistry", void 0);
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], ProvidedTaskConfigurations.prototype, "taskDefinitionRegistry", void 0);
    ProvidedTaskConfigurations = __decorate([
        inversify_1.injectable()
    ], ProvidedTaskConfigurations);
    return ProvidedTaskConfigurations;
}());
exports.ProvidedTaskConfigurations = ProvidedTaskConfigurations;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/quick-open-task.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/quick-open-task.js ***!
  \*****************************************************************/
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
exports.TaskRestartRunningQuickOpen = exports.RunningTaskQuickOpenItem = exports.TaskRunningQuickOpen = exports.TaskTerminateQuickOpen = exports.TaskConfigureQuickOpenItem = exports.ConfigureBuildOrTestTaskQuickOpenItem = exports.TaskRunQuickOpenItem = exports.QuickOpenTask = exports.TaskActionProvider = exports.ConfigureTaskAction = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var task_service_1 = __webpack_require__(/*! ./task-service */ "./node_modules/@theia/task/lib/browser/task-service.js");
var task_protocol_1 = __webpack_require__(/*! ../common/task-protocol */ "./node_modules/@theia/task/lib/common/task-protocol.js");
var task_definition_registry_1 = __webpack_require__(/*! ./task-definition-registry */ "./node_modules/@theia/task/lib/browser/task-definition-registry.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/workspace/lib/browser */ "./node_modules/@theia/workspace/lib/browser/index.js");
var terminal_service_1 = __webpack_require__(/*! @theia/terminal/lib/browser/base/terminal-service */ "./node_modules/@theia/terminal/lib/browser/base/terminal-service.js");
var common_1 = __webpack_require__(/*! @theia/filesystem/lib/common */ "./node_modules/@theia/filesystem/lib/common/index.js");
var quick_open_model_1 = __webpack_require__(/*! @theia/core/lib/common/quick-open-model */ "./node_modules/@theia/core/lib/common/quick-open-model.js");
var browser_3 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var task_name_resolver_1 = __webpack_require__(/*! ./task-name-resolver */ "./node_modules/@theia/task/lib/browser/task-name-resolver.js");
var task_source_resolver_1 = __webpack_require__(/*! ./task-source-resolver */ "./node_modules/@theia/task/lib/browser/task-source-resolver.js");
var task_configuration_manager_1 = __webpack_require__(/*! ./task-configuration-manager */ "./node_modules/@theia/task/lib/browser/task-configuration-manager.js");
var ConfigureTaskAction = /** @class */ (function (_super) {
    __extends(ConfigureTaskAction, _super);
    function ConfigureTaskAction() {
        var _this = _super.call(this, { id: 'configure:task', label: 'Configure Task' }) || this;
        _this.updateClass();
        return _this;
    }
    ConfigureTaskAction.prototype.run = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (item instanceof TaskRunQuickOpenItem) {
                    this.taskService.configure(item.getToken(), item.getTask());
                }
                return [2 /*return*/];
            });
        });
    };
    ConfigureTaskAction.prototype.updateClass = function () {
        this.class = 'codicon-gear quick-open-task-configure';
    };
    __decorate([
        inversify_1.inject(task_service_1.TaskService),
        __metadata("design:type", task_service_1.TaskService)
    ], ConfigureTaskAction.prototype, "taskService", void 0);
    ConfigureTaskAction = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], ConfigureTaskAction);
    return ConfigureTaskAction;
}(browser_1.QuickOpenBaseAction));
exports.ConfigureTaskAction = ConfigureTaskAction;
var TaskActionProvider = /** @class */ (function () {
    function TaskActionProvider() {
    }
    TaskActionProvider.prototype.hasActions = function () {
        return true;
    };
    TaskActionProvider.prototype.getActions = function () {
        return [this.configureTaskAction];
    };
    __decorate([
        inversify_1.inject(ConfigureTaskAction),
        __metadata("design:type", ConfigureTaskAction)
    ], TaskActionProvider.prototype, "configureTaskAction", void 0);
    TaskActionProvider = __decorate([
        inversify_1.injectable()
    ], TaskActionProvider);
    return TaskActionProvider;
}());
exports.TaskActionProvider = TaskActionProvider;
var QuickOpenTask = /** @class */ (function () {
    function QuickOpenTask() {
        this.prefix = 'task ';
        this.description = 'Run Task';
    }
    QuickOpenTask.prototype.init = function () {
        return this.doInit(this.taskService.startUserAction());
    };
    /** Initialize this quick open model with the tasks. */
    QuickOpenTask.prototype.doInit = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var recentTasks, configuredTasks, providedTasks, _a, filteredRecentTasks, filteredConfiguredTasks, filteredProvidedTasks, isMulti;
            var _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        recentTasks = this.taskService.recentTasks;
                        return [4 /*yield*/, this.taskService.getConfiguredTasks(token)];
                    case 1:
                        configuredTasks = _c.sent();
                        return [4 /*yield*/, this.taskService.getProvidedTasks(token)];
                    case 2:
                        providedTasks = _c.sent();
                        _a = this.getFilteredTasks(recentTasks, configuredTasks, providedTasks), filteredRecentTasks = _a.filteredRecentTasks, filteredConfiguredTasks = _a.filteredConfiguredTasks, filteredProvidedTasks = _a.filteredProvidedTasks;
                        isMulti = this.workspaceService.isMultiRootWorkspaceOpened;
                        this.items = [];
                        (_b = this.items).push.apply(_b, __spread(filteredRecentTasks.map(function (task, index) {
                            var item = new TaskRunQuickOpenItem(token, task, _this.taskService, isMulti, {
                                groupLabel: index === 0 ? 'recently used tasks' : undefined,
                                showBorder: false
                            }, _this.taskDefinitionRegistry, _this.taskNameResolver, _this.taskSourceResolver);
                            return item;
                        }), filteredConfiguredTasks.map(function (task, index) {
                            var item = new TaskRunQuickOpenItem(token, task, _this.taskService, isMulti, {
                                groupLabel: index === 0 ? 'configured tasks' : undefined,
                                showBorder: (filteredRecentTasks.length <= 0
                                    ? false
                                    : index === 0 ? true : false)
                            }, _this.taskDefinitionRegistry, _this.taskNameResolver, _this.taskSourceResolver);
                            return item;
                        }), filteredProvidedTasks.map(function (task, index) {
                            var item = new TaskRunQuickOpenItem(token, task, _this.taskService, isMulti, {
                                groupLabel: index === 0 ? 'detected tasks' : undefined,
                                showBorder: (filteredRecentTasks.length <= 0 && filteredConfiguredTasks.length <= 0
                                    ? false
                                    : index === 0 ? true : false)
                            }, _this.taskDefinitionRegistry, _this.taskNameResolver, _this.taskSourceResolver);
                            return item;
                        })));
                        this.actionProvider = this.items.length ? this.taskActionProvider : undefined;
                        return [2 /*return*/];
                }
            });
        });
    };
    QuickOpenTask.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = this.taskService.startUserAction();
                        return [4 /*yield*/, this.doInit(token)];
                    case 1:
                        _a.sent();
                        if (!this.items.length) {
                            this.items.push(new quick_open_model_1.QuickOpenItem({
                                label: 'No task to run found. Configure Tasks...',
                                run: function (mode) {
                                    if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
                                        return false;
                                    }
                                    _this.configure();
                                    return true;
                                }
                            }));
                        }
                        this.quickOpenService.open(this, {
                            placeholder: 'Select the task to run',
                            fuzzyMatchLabel: true,
                            fuzzySort: false
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    QuickOpenTask.prototype.getModel = function () {
        return this;
    };
    QuickOpenTask.prototype.getOptions = function () {
        return {
            fuzzyMatchLabel: true,
            fuzzySort: false
        };
    };
    QuickOpenTask.prototype.attach = function () {
        var _this = this;
        this.items = [];
        this.actionProvider = undefined;
        var isMulti = this.workspaceService.isMultiRootWorkspaceOpened;
        this.taskService.getRunningTasks().then(function (tasks) {
            if (!tasks.length) {
                _this.items.push(new quick_open_model_1.QuickOpenItem({
                    label: 'No tasks found',
                    run: function (_mode) { return false; }
                }));
            }
            else {
                tasks.forEach(function (task) {
                    // can only attach to terminal processes, so only list those
                    if (task.terminalId) {
                        _this.items.push(new RunningTaskQuickOpenItem(task, _this.taskService, _this.taskNameResolver, _this.taskSourceResolver, _this.taskDefinitionRegistry, _this.labelProvider, isMulti, {
                            run: function (mode) {
                                if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
                                    return false;
                                }
                                _this.taskService.attach(task.terminalId, task.taskId);
                                return true;
                            }
                        }));
                    }
                });
            }
            _this.quickOpenService.open(_this, {
                placeholder: 'Choose task to open',
                fuzzyMatchLabel: true,
                fuzzySort: true
            });
        });
    };
    QuickOpenTask.prototype.configure = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isMulti, token, configuredTasks, providedTasks, isFirstGroup, _a, filteredConfiguredTasks, filteredProvidedTasks, groupedTasks, configs, rootUris, _loop_1, this_1, rootUris_1, rootUris_1_1, rootFolder;
            var _b, e_1, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.items = [];
                        this.actionProvider = undefined;
                        isMulti = this.workspaceService.isMultiRootWorkspaceOpened;
                        token = this.taskService.startUserAction();
                        return [4 /*yield*/, this.taskService.getConfiguredTasks(token)];
                    case 1:
                        configuredTasks = _d.sent();
                        return [4 /*yield*/, this.taskService.getProvidedTasks(token)];
                    case 2:
                        providedTasks = _d.sent();
                        isFirstGroup = true;
                        _a = this.getFilteredTasks([], configuredTasks, providedTasks), filteredConfiguredTasks = _a.filteredConfiguredTasks, filteredProvidedTasks = _a.filteredProvidedTasks;
                        groupedTasks = this.getGroupedTasksByWorkspaceFolder(__spread(filteredConfiguredTasks, filteredProvidedTasks));
                        if (groupedTasks.has(task_protocol_1.TaskScope.Global.toString())) {
                            configs = groupedTasks.get(task_protocol_1.TaskScope.Global.toString());
                            (_b = this.items).push.apply(_b, __spread(configs.map(function (taskConfig) {
                                var item = new TaskConfigureQuickOpenItem(token, taskConfig, _this.taskService, _this.taskNameResolver, _this.workspaceService, isMulti, { showBorder: false });
                                item['taskDefinitionRegistry'] = _this.taskDefinitionRegistry;
                                return item;
                            })));
                            isFirstGroup = false;
                        }
                        return [4 /*yield*/, this.workspaceService.roots];
                    case 3:
                        rootUris = (_d.sent()).map(function (rootStat) { return rootStat.uri; });
                        _loop_1 = function (rootFolder) {
                            var _a;
                            var folderName = new uri_1.default(rootFolder).displayName;
                            if (groupedTasks.has(rootFolder)) {
                                var configs = groupedTasks.get(rootFolder.toString());
                                (_a = this_1.items).push.apply(_a, __spread(configs.map(function (taskConfig, index) {
                                    var item = new TaskConfigureQuickOpenItem(token, taskConfig, _this.taskService, _this.taskNameResolver, _this.workspaceService, isMulti, {
                                        groupLabel: index === 0 && isMulti ? folderName : '',
                                        showBorder: !isFirstGroup && index === 0
                                    });
                                    item['taskDefinitionRegistry'] = _this.taskDefinitionRegistry;
                                    return item;
                                })));
                            }
                            else {
                                var configUri = this_1.preferences.resolve('tasks', [], rootFolder).configUri;
                                var existTaskConfigFile = !!configUri;
                                this_1.items.push(new quick_open_model_1.QuickOpenGroupItem({
                                    label: existTaskConfigFile ? 'Open tasks.json file' : 'Create tasks.json file from template',
                                    run: function (mode) {
                                        if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
                                            return false;
                                        }
                                        setTimeout(function () { return _this.taskConfigurationManager.openConfiguration(rootFolder); });
                                        return true;
                                    },
                                    showBorder: !isFirstGroup,
                                    groupLabel: isMulti ? folderName : ''
                                }));
                            }
                            isFirstGroup = false;
                        };
                        this_1 = this;
                        try {
                            for (rootUris_1 = __values(rootUris), rootUris_1_1 = rootUris_1.next(); !rootUris_1_1.done; rootUris_1_1 = rootUris_1.next()) {
                                rootFolder = rootUris_1_1.value;
                                _loop_1(rootFolder);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (rootUris_1_1 && !rootUris_1_1.done && (_c = rootUris_1.return)) _c.call(rootUris_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        if (this.items.length === 0) {
                            this.items.push(new quick_open_model_1.QuickOpenItem({
                                label: 'No tasks found',
                                run: function (_mode) { return false; }
                            }));
                        }
                        this.quickOpenService.open(this, {
                            placeholder: 'Select a task to configure',
                            fuzzyMatchLabel: true,
                            fuzzySort: false
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    QuickOpenTask.prototype.runBuildOrTestTask = function (buildOrTestType) {
        return __awaiter(this, void 0, void 0, function () {
            var shouldRunBuildTask, token, buildOrTestTasks, defaultBuildOrTestTasks, defaultBuildOrTestTask, taskToRun, scope;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shouldRunBuildTask = buildOrTestType === 'build';
                        token = this.taskService.startUserAction();
                        return [4 /*yield*/, this.doInit(token)];
                    case 1:
                        _a.sent();
                        if (this.items.length > 1 ||
                            this.items.length === 1 && this.items[0].getTask !== undefined) { // the item in `this.items` is not 'No tasks found'
                            buildOrTestTasks = this.items.filter(function (t) {
                                return shouldRunBuildTask ? task_protocol_1.TaskCustomization.isBuildTask(t.getTask()) : task_protocol_1.TaskCustomization.isTestTask(t.getTask());
                            });
                            this.actionProvider = undefined;
                            if (buildOrTestTasks.length > 0) { // build / test tasks are defined in the workspace
                                defaultBuildOrTestTasks = buildOrTestTasks.filter(function (t) {
                                    return shouldRunBuildTask ? task_protocol_1.TaskCustomization.isDefaultBuildTask(t.getTask()) : task_protocol_1.TaskCustomization.isDefaultTestTask(t.getTask());
                                });
                                if (defaultBuildOrTestTasks.length === 1) { // run the default build / test task
                                    defaultBuildOrTestTask = defaultBuildOrTestTasks[0];
                                    taskToRun = defaultBuildOrTestTask.getTask();
                                    scope = taskToRun._scope;
                                    if (this.taskDefinitionRegistry && !!this.taskDefinitionRegistry.getDefinition(taskToRun)) {
                                        this.taskService.run(token, taskToRun.source, taskToRun.label, scope);
                                    }
                                    else {
                                        this.taskService.run(token, taskToRun._source, taskToRun.label, scope);
                                    }
                                    return [2 /*return*/];
                                }
                                // if default build / test task is not found, or there are more than one default,
                                // display the list of build /test tasks to let the user decide which to run
                                this.items = buildOrTestTasks;
                            }
                            else { // no build / test tasks, display an action item to configure the build / test task
                                this.items = [new quick_open_model_1.QuickOpenItem({
                                        label: "No " + buildOrTestType + " task to run found. Configure " + (buildOrTestType.charAt(0).toUpperCase() + buildOrTestType.slice(1)) + " Task...",
                                        run: function (mode) {
                                            if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
                                                return false;
                                            }
                                            _this.doInit(token).then(function () {
                                                // update the `tasks.json` file, instead of running the task itself
                                                _this.items = _this.items.map(function (item) {
                                                    var newItem = new ConfigureBuildOrTestTaskQuickOpenItem(token, item.getTask(), _this.taskService, _this.workspaceService.isMultiRootWorkspaceOpened, item.options, _this.taskNameResolver, shouldRunBuildTask, _this.taskConfigurationManager, _this.taskDefinitionRegistry, _this.taskSourceResolver);
                                                    return newItem;
                                                });
                                                _this.quickOpenService.open(_this, {
                                                    placeholder: "Select the task to be used as the default " + buildOrTestType + " task",
                                                    fuzzyMatchLabel: true,
                                                    fuzzySort: false
                                                });
                                            });
                                            return true;
                                        }
                                    })];
                            }
                        }
                        else { // no tasks are currently present, prompt users if they'd like to configure a task.
                            this.items = [
                                new quick_open_model_1.QuickOpenItem({
                                    label: "No " + buildOrTestType + " task to run found. Configure " + (buildOrTestType.charAt(0).toUpperCase() + buildOrTestType.slice(1)) + " Task...",
                                    run: function (mode) {
                                        if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
                                            return false;
                                        }
                                        _this.configure();
                                        return true;
                                    }
                                })
                            ];
                        }
                        this.quickOpenService.open(this, {
                            placeholder: "Select the " + buildOrTestType + " task to run",
                            fuzzyMatchLabel: true,
                            fuzzySort: false
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    QuickOpenTask.prototype.onType = function (lookFor, acceptor) {
        acceptor(this.items, this.actionProvider);
    };
    QuickOpenTask.prototype.getRunningTaskLabel = function (task) {
        return "Task id: " + task.taskId + ", label: " + task.config.label;
    };
    QuickOpenTask.prototype.getFilteredTasks = function (recentTasks, configuredTasks, providedTasks) {
        var _this = this;
        var filteredRecentTasks = [];
        recentTasks.forEach(function (recent) {
            var originalTaskConfig = __spread(configuredTasks, providedTasks).find(function (t) { return _this.taskDefinitionRegistry.compareTasks(recent, t); });
            if (originalTaskConfig) {
                filteredRecentTasks.push(originalTaskConfig);
            }
        });
        var filteredProvidedTasks = [];
        providedTasks.forEach(function (provided) {
            var exist = __spread(filteredRecentTasks, configuredTasks).some(function (t) { return _this.taskDefinitionRegistry.compareTasks(provided, t); });
            if (!exist) {
                filteredProvidedTasks.push(provided);
            }
        });
        var filteredConfiguredTasks = [];
        configuredTasks.forEach(function (configured) {
            var exist = filteredRecentTasks.some(function (t) { return _this.taskDefinitionRegistry.compareTasks(configured, t); });
            if (!exist) {
                filteredConfiguredTasks.push(configured);
            }
        });
        return {
            filteredRecentTasks: filteredRecentTasks, filteredConfiguredTasks: filteredConfiguredTasks, filteredProvidedTasks: filteredProvidedTasks
        };
    };
    QuickOpenTask.prototype.getGroupedTasksByWorkspaceFolder = function (tasks) {
        var e_2, _a, e_3, _b;
        var grouped = new Map();
        try {
            for (var tasks_1 = __values(tasks), tasks_1_1 = tasks_1.next(); !tasks_1_1.done; tasks_1_1 = tasks_1.next()) {
                var task = tasks_1_1.value;
                var scope = task._scope;
                if (grouped.has(scope.toString())) {
                    grouped.get(scope.toString()).push(task);
                }
                else {
                    grouped.set(scope.toString(), [task]);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (tasks_1_1 && !tasks_1_1.done && (_a = tasks_1.return)) _a.call(tasks_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        try {
            for (var _c = __values(grouped.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var taskConfigs = _d.value;
                taskConfigs.sort(function (t1, t2) { return t1.label.localeCompare(t2.label); });
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return grouped;
    };
    __decorate([
        inversify_1.inject(task_service_1.TaskService),
        __metadata("design:type", task_service_1.TaskService)
    ], QuickOpenTask.prototype, "taskService", void 0);
    __decorate([
        inversify_1.inject(browser_1.QuickOpenService),
        __metadata("design:type", browser_1.QuickOpenService)
    ], QuickOpenTask.prototype, "quickOpenService", void 0);
    __decorate([
        inversify_1.inject(TaskActionProvider),
        __metadata("design:type", TaskActionProvider)
    ], QuickOpenTask.prototype, "taskActionProvider", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], QuickOpenTask.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], QuickOpenTask.prototype, "taskDefinitionRegistry", void 0);
    __decorate([
        inversify_1.inject(task_name_resolver_1.TaskNameResolver),
        __metadata("design:type", task_name_resolver_1.TaskNameResolver)
    ], QuickOpenTask.prototype, "taskNameResolver", void 0);
    __decorate([
        inversify_1.inject(task_source_resolver_1.TaskSourceResolver),
        __metadata("design:type", task_source_resolver_1.TaskSourceResolver)
    ], QuickOpenTask.prototype, "taskSourceResolver", void 0);
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], QuickOpenTask.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(task_configuration_manager_1.TaskConfigurationManager),
        __metadata("design:type", task_configuration_manager_1.TaskConfigurationManager)
    ], QuickOpenTask.prototype, "taskConfigurationManager", void 0);
    __decorate([
        inversify_1.inject(browser_3.PreferenceService),
        __metadata("design:type", Object)
    ], QuickOpenTask.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], QuickOpenTask.prototype, "labelProvider", void 0);
    QuickOpenTask = __decorate([
        inversify_1.injectable()
    ], QuickOpenTask);
    return QuickOpenTask;
}());
exports.QuickOpenTask = QuickOpenTask;
var TaskRunQuickOpenItem = /** @class */ (function (_super) {
    __extends(TaskRunQuickOpenItem, _super);
    function TaskRunQuickOpenItem(token, task, taskService, isMulti, options, taskDefinitionRegistry, taskNameResolver, taskSourceResolver) {
        var _this = _super.call(this, options) || this;
        _this.token = token;
        _this.task = task;
        _this.taskService = taskService;
        _this.isMulti = isMulti;
        _this.options = options;
        _this.taskDefinitionRegistry = taskDefinitionRegistry;
        _this.taskNameResolver = taskNameResolver;
        _this.taskSourceResolver = taskSourceResolver;
        return _this;
    }
    TaskRunQuickOpenItem.prototype.getTask = function () {
        return this.task;
    };
    TaskRunQuickOpenItem.prototype.getLabel = function () {
        return this.taskNameResolver.resolve(this.task);
    };
    TaskRunQuickOpenItem.prototype.getToken = function () {
        return this.token;
    };
    TaskRunQuickOpenItem.prototype.getGroupLabel = function () {
        return this.options.groupLabel || '';
    };
    TaskRunQuickOpenItem.prototype.getDescription = function () {
        return renderScope(this.task._scope, this.isMulti);
    };
    TaskRunQuickOpenItem.prototype.run = function (mode) {
        if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
            return false;
        }
        var scope = this.task._scope;
        if (this.taskDefinitionRegistry && !!this.taskDefinitionRegistry.getDefinition(this.task)) {
            this.taskService.run(this.token, this.task.source || this.task._source, this.task.label, scope);
        }
        else {
            this.taskService.run(this.token, this.task._source, this.task.label, scope);
        }
        return true;
    };
    TaskRunQuickOpenItem.prototype.getDetail = function () {
        return this.task.detail;
    };
    return TaskRunQuickOpenItem;
}(quick_open_model_1.QuickOpenGroupItem));
exports.TaskRunQuickOpenItem = TaskRunQuickOpenItem;
var ConfigureBuildOrTestTaskQuickOpenItem = /** @class */ (function (_super) {
    __extends(ConfigureBuildOrTestTaskQuickOpenItem, _super);
    function ConfigureBuildOrTestTaskQuickOpenItem(token, task, taskService, isMulti, options, taskNameResolver, isBuildTask, taskConfigurationManager, taskDefinitionRegistry, taskSourceResolver) {
        var _this = _super.call(this, token, task, taskService, isMulti, options, taskDefinitionRegistry, taskNameResolver, taskSourceResolver) || this;
        _this.token = token;
        _this.task = task;
        _this.taskService = taskService;
        _this.isMulti = isMulti;
        _this.options = options;
        _this.taskNameResolver = taskNameResolver;
        _this.isBuildTask = isBuildTask;
        _this.taskConfigurationManager = taskConfigurationManager;
        _this.taskDefinitionRegistry = taskDefinitionRegistry;
        _this.taskSourceResolver = taskSourceResolver;
        return _this;
    }
    ConfigureBuildOrTestTaskQuickOpenItem.prototype.run = function (mode) {
        var _this = this;
        if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
            return false;
        }
        this.taskService.updateTaskConfiguration(this.token, this.task, { group: { kind: this.isBuildTask ? 'build' : 'test', isDefault: true } })
            .then(function () {
            if (_this.task._scope) {
                _this.taskConfigurationManager.openConfiguration(_this.task._scope);
            }
        });
        return true;
    };
    return ConfigureBuildOrTestTaskQuickOpenItem;
}(TaskRunQuickOpenItem));
exports.ConfigureBuildOrTestTaskQuickOpenItem = ConfigureBuildOrTestTaskQuickOpenItem;
function renderScope(scope, isMulti) {
    if (typeof scope === 'string') {
        if (isMulti) {
            return new uri_1.default(scope).displayName;
        }
        else {
            return '';
        }
    }
    else {
        return task_protocol_1.TaskScope[scope];
    }
}
var TaskConfigureQuickOpenItem = /** @class */ (function (_super) {
    __extends(TaskConfigureQuickOpenItem, _super);
    function TaskConfigureQuickOpenItem(token, task, taskService, taskNameResolver, workspaceService, isMulti, options) {
        var _this = _super.call(this, options) || this;
        _this.token = token;
        _this.task = task;
        _this.taskService = taskService;
        _this.taskNameResolver = taskNameResolver;
        _this.workspaceService = workspaceService;
        _this.isMulti = isMulti;
        _this.options = options;
        var stat = _this.workspaceService.workspace;
        _this.isMulti = stat ? !stat.isDirectory : false;
        return _this;
    }
    TaskConfigureQuickOpenItem.prototype.getLabel = function () {
        return this.taskNameResolver.resolve(this.task);
    };
    TaskConfigureQuickOpenItem.prototype.getGroupLabel = function () {
        return this.options.groupLabel || '';
    };
    TaskConfigureQuickOpenItem.prototype.getDescription = function () {
        return renderScope(this.task._scope, this.isMulti);
    };
    TaskConfigureQuickOpenItem.prototype.run = function (mode) {
        if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
            return false;
        }
        this.taskService.configure(this.token, this.task);
        return true;
    };
    return TaskConfigureQuickOpenItem;
}(quick_open_model_1.QuickOpenGroupItem));
exports.TaskConfigureQuickOpenItem = TaskConfigureQuickOpenItem;
var TaskTerminateQuickOpen = /** @class */ (function () {
    function TaskTerminateQuickOpen() {
    }
    TaskTerminateQuickOpen.prototype.onType = function (_lookFor, acceptor) {
        return __awaiter(this, void 0, void 0, function () {
            var items, runningTasks, isMulti;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        items = [];
                        return [4 /*yield*/, this.taskService.getRunningTasks()];
                    case 1:
                        runningTasks = _a.sent();
                        isMulti = this.workspaceService.isMultiRootWorkspaceOpened;
                        if (runningTasks.length <= 0) {
                            items.push(new quick_open_model_1.QuickOpenItem({
                                label: 'No task is currently running',
                                run: function () { return false; },
                            }));
                        }
                        else {
                            runningTasks.forEach(function (task) {
                                items.push(new RunningTaskQuickOpenItem(task, _this.taskService, _this.taskNameResolver, _this.taskSourceResolver, _this.taskDefinitionRegistry, _this.labelProvider, isMulti, {
                                    run: function (mode) {
                                        if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
                                            return false;
                                        }
                                        _this.taskService.kill(task.taskId);
                                        return true;
                                    }
                                }));
                            });
                            if (runningTasks.length > 1) {
                                items.push(new quick_open_model_1.QuickOpenItem({
                                    label: 'All running tasks',
                                    run: function (mode) {
                                        if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
                                            return false;
                                        }
                                        runningTasks.forEach(function (t) {
                                            _this.taskService.kill(t.taskId);
                                        });
                                        return true;
                                    }
                                }));
                            }
                        }
                        acceptor(items);
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskTerminateQuickOpen.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.quickOpenService.open(this, {
                    placeholder: 'Select task to terminate',
                    fuzzyMatchLabel: true,
                    fuzzyMatchDescription: true,
                });
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], TaskTerminateQuickOpen.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(browser_1.QuickOpenService),
        __metadata("design:type", browser_1.QuickOpenService)
    ], TaskTerminateQuickOpen.prototype, "quickOpenService", void 0);
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], TaskTerminateQuickOpen.prototype, "taskDefinitionRegistry", void 0);
    __decorate([
        inversify_1.inject(task_name_resolver_1.TaskNameResolver),
        __metadata("design:type", task_name_resolver_1.TaskNameResolver)
    ], TaskTerminateQuickOpen.prototype, "taskNameResolver", void 0);
    __decorate([
        inversify_1.inject(task_source_resolver_1.TaskSourceResolver),
        __metadata("design:type", task_source_resolver_1.TaskSourceResolver)
    ], TaskTerminateQuickOpen.prototype, "taskSourceResolver", void 0);
    __decorate([
        inversify_1.inject(task_service_1.TaskService),
        __metadata("design:type", task_service_1.TaskService)
    ], TaskTerminateQuickOpen.prototype, "taskService", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], TaskTerminateQuickOpen.prototype, "workspaceService", void 0);
    TaskTerminateQuickOpen = __decorate([
        inversify_1.injectable()
    ], TaskTerminateQuickOpen);
    return TaskTerminateQuickOpen;
}());
exports.TaskTerminateQuickOpen = TaskTerminateQuickOpen;
var TaskRunningQuickOpen = /** @class */ (function () {
    function TaskRunningQuickOpen() {
    }
    TaskRunningQuickOpen.prototype.onType = function (_lookFor, acceptor) {
        return __awaiter(this, void 0, void 0, function () {
            var items, runningTasks, isMulti;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        items = [];
                        return [4 /*yield*/, this.taskService.getRunningTasks()];
                    case 1:
                        runningTasks = _a.sent();
                        isMulti = this.workspaceService.isMultiRootWorkspaceOpened;
                        if (runningTasks.length <= 0) {
                            items.push(new quick_open_model_1.QuickOpenItem({
                                label: 'No task is currently running',
                                run: function () { return false; },
                            }));
                        }
                        else {
                            runningTasks.forEach(function (task) {
                                items.push(new RunningTaskQuickOpenItem(task, _this.taskService, _this.taskNameResolver, _this.taskSourceResolver, _this.taskDefinitionRegistry, _this.labelProvider, isMulti, {
                                    run: function (mode) {
                                        if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
                                            return false;
                                        }
                                        if (task.terminalId) {
                                            var terminal = _this.terminalService.getById('terminal-' + task.terminalId);
                                            if (terminal) {
                                                _this.terminalService.open(terminal);
                                            }
                                        }
                                        return true;
                                    }
                                }));
                            });
                        }
                        acceptor(items);
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskRunningQuickOpen.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.quickOpenService.open(this, {
                    placeholder: 'Select the task to show its output',
                    fuzzyMatchLabel: true,
                    fuzzyMatchDescription: true,
                });
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], TaskRunningQuickOpen.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(browser_1.QuickOpenService),
        __metadata("design:type", browser_1.QuickOpenService)
    ], TaskRunningQuickOpen.prototype, "quickOpenService", void 0);
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], TaskRunningQuickOpen.prototype, "taskDefinitionRegistry", void 0);
    __decorate([
        inversify_1.inject(task_name_resolver_1.TaskNameResolver),
        __metadata("design:type", task_name_resolver_1.TaskNameResolver)
    ], TaskRunningQuickOpen.prototype, "taskNameResolver", void 0);
    __decorate([
        inversify_1.inject(task_source_resolver_1.TaskSourceResolver),
        __metadata("design:type", task_source_resolver_1.TaskSourceResolver)
    ], TaskRunningQuickOpen.prototype, "taskSourceResolver", void 0);
    __decorate([
        inversify_1.inject(task_service_1.TaskService),
        __metadata("design:type", task_service_1.TaskService)
    ], TaskRunningQuickOpen.prototype, "taskService", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], TaskRunningQuickOpen.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(terminal_service_1.TerminalService),
        __metadata("design:type", Object)
    ], TaskRunningQuickOpen.prototype, "terminalService", void 0);
    TaskRunningQuickOpen = __decorate([
        inversify_1.injectable()
    ], TaskRunningQuickOpen);
    return TaskRunningQuickOpen;
}());
exports.TaskRunningQuickOpen = TaskRunningQuickOpen;
var RunningTaskQuickOpenItem = /** @class */ (function (_super) {
    __extends(RunningTaskQuickOpenItem, _super);
    function RunningTaskQuickOpenItem(taskInfo, taskService, taskNameResolver, taskSourceResolver, taskDefinitionRegistry, labelProvider, isMulti, options) {
        var _this = _super.call(this, options) || this;
        _this.taskInfo = taskInfo;
        _this.taskService = taskService;
        _this.taskNameResolver = taskNameResolver;
        _this.taskSourceResolver = taskSourceResolver;
        _this.taskDefinitionRegistry = taskDefinitionRegistry;
        _this.labelProvider = labelProvider;
        _this.isMulti = isMulti;
        _this.options = options;
        return _this;
    }
    RunningTaskQuickOpenItem.prototype.getLabel = function () {
        return this.taskNameResolver.resolve(this.taskInfo.config);
    };
    RunningTaskQuickOpenItem.prototype.getDescription = function () {
        return renderScope(this.taskInfo.config._scope, this.isMulti);
    };
    RunningTaskQuickOpenItem.prototype.run = function (mode) {
        if (mode !== quick_open_model_1.QuickOpenMode.OPEN || !this.options.run) {
            return false;
        }
        return this.options.run(mode);
    };
    RunningTaskQuickOpenItem.prototype.getDetail = function () {
        return this.taskInfo.config.detail;
    };
    return RunningTaskQuickOpenItem;
}(quick_open_model_1.QuickOpenItem));
exports.RunningTaskQuickOpenItem = RunningTaskQuickOpenItem;
var TaskRestartRunningQuickOpen = /** @class */ (function () {
    function TaskRestartRunningQuickOpen() {
    }
    TaskRestartRunningQuickOpen.prototype.onType = function (_lookFor, acceptor) {
        return __awaiter(this, void 0, void 0, function () {
            var items, runningTasks, isMulti;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        items = [];
                        return [4 /*yield*/, this.taskService.getRunningTasks()];
                    case 1:
                        runningTasks = _a.sent();
                        isMulti = this.workspaceService.isMultiRootWorkspaceOpened;
                        if (runningTasks.length <= 0) {
                            items.push(new quick_open_model_1.QuickOpenItem({
                                label: 'No task to restart',
                                run: function () { return false; },
                            }));
                        }
                        else {
                            runningTasks.forEach(function (task) {
                                items.push(new RunningTaskQuickOpenItem(task, _this.taskService, _this.taskNameResolver, _this.taskSourceResolver, _this.taskDefinitionRegistry, _this.labelProvider, isMulti, {
                                    run: function (mode) {
                                        if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
                                            return false;
                                        }
                                        _this.taskService.restartTask(task);
                                        return true;
                                    }
                                }));
                            });
                        }
                        acceptor(items);
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskRestartRunningQuickOpen.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.quickOpenService.open(this, {
                    placeholder: 'Select task to restart',
                    fuzzyMatchLabel: true,
                    fuzzyMatchDescription: true,
                });
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], TaskRestartRunningQuickOpen.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(browser_1.QuickOpenService),
        __metadata("design:type", browser_1.QuickOpenService)
    ], TaskRestartRunningQuickOpen.prototype, "quickOpenService", void 0);
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], TaskRestartRunningQuickOpen.prototype, "taskDefinitionRegistry", void 0);
    __decorate([
        inversify_1.inject(task_name_resolver_1.TaskNameResolver),
        __metadata("design:type", task_name_resolver_1.TaskNameResolver)
    ], TaskRestartRunningQuickOpen.prototype, "taskNameResolver", void 0);
    __decorate([
        inversify_1.inject(task_source_resolver_1.TaskSourceResolver),
        __metadata("design:type", task_source_resolver_1.TaskSourceResolver)
    ], TaskRestartRunningQuickOpen.prototype, "taskSourceResolver", void 0);
    __decorate([
        inversify_1.inject(task_service_1.TaskService),
        __metadata("design:type", task_service_1.TaskService)
    ], TaskRestartRunningQuickOpen.prototype, "taskService", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], TaskRestartRunningQuickOpen.prototype, "workspaceService", void 0);
    TaskRestartRunningQuickOpen = __decorate([
        inversify_1.injectable()
    ], TaskRestartRunningQuickOpen);
    return TaskRestartRunningQuickOpen;
}());
exports.TaskRestartRunningQuickOpen = TaskRestartRunningQuickOpen;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-configuration-manager.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-configuration-manager.js ***!
  \****************************************************************************/
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
exports.TaskConfigurationManager = void 0;
var debounce = __webpack_require__(/*! p-debounce */ "./node_modules/p-debounce/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var quick_pick_service_1 = __webpack_require__(/*! @theia/core/lib/common/quick-pick-service */ "./node_modules/@theia/core/lib/common/quick-pick-service.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "./node_modules/@theia/workspace/lib/browser/workspace-service.js");
var task_configuration_model_1 = __webpack_require__(/*! ./task-configuration-model */ "./node_modules/@theia/task/lib/browser/task-configuration-model.js");
var task_templates_1 = __webpack_require__(/*! ./task-templates */ "./node_modules/@theia/task/lib/browser/task-templates.js");
var task_protocol_1 = __webpack_require__(/*! ../common/task-protocol */ "./node_modules/@theia/task/lib/common/task-protocol.js");
var workspace_variable_contribution_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-variable-contribution */ "./node_modules/@theia/workspace/lib/browser/workspace-variable-contribution.js");
var common_1 = __webpack_require__(/*! @theia/filesystem/lib/common */ "./node_modules/@theia/filesystem/lib/common/index.js");
var filesystem_watcher_protocol_1 = __webpack_require__(/*! @theia/filesystem/lib/common/filesystem-watcher-protocol */ "./node_modules/@theia/filesystem/lib/common/filesystem-watcher-protocol.js");
var preference_configurations_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences/preference-configurations */ "./node_modules/@theia/core/lib/browser/preferences/preference-configurations.js");
/**
 * This class connnects the the "tasks" preferences sections to task system: it collects tasks preference values and
 * provides them to the task system as raw, parsed JSON.
 */
var TaskConfigurationManager = /** @class */ (function () {
    function TaskConfigurationManager() {
        var _this = this;
        this.onDidChangeTaskConfigEmitter = new event_1.Emitter();
        this.onDidChangeTaskConfig = this.onDidChangeTaskConfigEmitter.event;
        this.models = new Map();
        this.updateModels = debounce(function () { return __awaiter(_this, void 0, void 0, function () {
            var roots, toDelete, _loop_1, this_1, roots_1, roots_1_1, rootStat, toDelete_1, toDelete_1_1, uri, model;
            var e_1, _a, e_2, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.workspaceService.roots];
                    case 1:
                        roots = _c.sent();
                        toDelete = new Set(this.models.keys());
                        _loop_1 = function (rootStat) {
                            var key = rootStat.uri;
                            toDelete.delete(key);
                            if (!this_1.models.has(key)) {
                                var model = new task_configuration_model_1.TaskConfigurationModel(key, this_1.folderPreferences);
                                model.onDidChange(function () { return _this.onDidChangeTaskConfigEmitter.fire({ scope: key, type: filesystem_watcher_protocol_1.FileChangeType.UPDATED }); });
                                model.onDispose(function () { return _this.models.delete(key); });
                                this_1.models.set(key, model);
                                this_1.onDidChangeTaskConfigEmitter.fire({ scope: key, type: filesystem_watcher_protocol_1.FileChangeType.UPDATED });
                            }
                        };
                        this_1 = this;
                        try {
                            for (roots_1 = __values(roots), roots_1_1 = roots_1.next(); !roots_1_1.done; roots_1_1 = roots_1.next()) {
                                rootStat = roots_1_1.value;
                                _loop_1(rootStat);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (roots_1_1 && !roots_1_1.done && (_a = roots_1.return)) _a.call(roots_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        try {
                            for (toDelete_1 = __values(toDelete), toDelete_1_1 = toDelete_1.next(); !toDelete_1_1.done; toDelete_1_1 = toDelete_1.next()) {
                                uri = toDelete_1_1.value;
                                model = this.models.get(uri);
                                if (model) {
                                    model.dispose();
                                }
                                this.onDidChangeTaskConfigEmitter.fire({ scope: uri, type: filesystem_watcher_protocol_1.FileChangeType.DELETED });
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (toDelete_1_1 && !toDelete_1_1.done && (_b = toDelete_1.return)) _b.call(toDelete_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        return [2 /*return*/];
                }
            });
        }); }, 500);
    }
    TaskConfigurationManager.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.userModel = new task_configuration_model_1.TaskConfigurationModel(task_protocol_1.TaskScope.Global, this.userPreferences);
                this.userModel.onDidChange(function () { return _this.onDidChangeTaskConfigEmitter.fire({ scope: task_protocol_1.TaskScope.Global, type: filesystem_watcher_protocol_1.FileChangeType.UPDATED }); });
                this.updateModels();
                this.folderPreferences.onDidPreferencesChanged(function (e) {
                    if (e['tasks']) {
                        _this.updateModels();
                    }
                });
                this.workspaceService.onWorkspaceChanged(function () {
                    _this.updateModels();
                });
                return [2 /*return*/];
            });
        });
    };
    TaskConfigurationManager.prototype.getTasks = function (scope) {
        if (typeof scope === 'string' && this.models.has(scope)) {
            var taskPrefModel = this.models.get(scope);
            return taskPrefModel.configurations;
        }
        return this.userModel.configurations;
    };
    TaskConfigurationManager.prototype.getTask = function (name, scope) {
        var e_3, _a;
        var taskPrefModel = this.getModel(scope);
        if (taskPrefModel) {
            try {
                for (var _b = __values(taskPrefModel.configurations), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var configuration = _c.value;
                    if (configuration.name === name) {
                        return configuration;
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        return this.userModel.configurations.find(function (configuration) { return configuration.name === 'name'; });
    };
    TaskConfigurationManager.prototype.openConfiguration = function (scope) {
        return __awaiter(this, void 0, void 0, function () {
            var taskPrefModel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskPrefModel = this.getModel(scope);
                        if (!taskPrefModel) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.doOpen(taskPrefModel)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    TaskConfigurationManager.prototype.addTaskConfiguration = function (scope, taskConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var taskPrefModel, configurations;
            return __generator(this, function (_a) {
                taskPrefModel = this.getModel(scope);
                if (taskPrefModel) {
                    configurations = taskPrefModel.configurations;
                    return [2 /*return*/, this.setTaskConfigurations(scope, __spread(configurations, [taskConfig]))];
                }
                return [2 /*return*/, false];
            });
        });
    };
    TaskConfigurationManager.prototype.setTaskConfigurations = function (scope, taskConfigs) {
        return __awaiter(this, void 0, void 0, function () {
            var taskPrefModel;
            return __generator(this, function (_a) {
                taskPrefModel = this.getModel(scope);
                if (taskPrefModel) {
                    return [2 /*return*/, taskPrefModel.setConfigurations(taskConfigs)];
                }
                return [2 /*return*/, false];
            });
        });
    };
    TaskConfigurationManager.prototype.getModel = function (scope) {
        var e_4, _a;
        if (!scope) {
            return undefined;
        }
        try {
            for (var _b = __values(this.models.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var model = _c.value;
                if (model.scope === scope) {
                    return model;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        if (scope === task_protocol_1.TaskScope.Global) {
            return this.userModel;
        }
    };
    TaskConfigurationManager.prototype.doOpen = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = model.uri;
                        if (!!uri) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.doCreate(model)];
                    case 1:
                        uri = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (uri) {
                            return [2 /*return*/, this.editorManager.open(uri, {
                                    mode: 'activate'
                                })];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskConfigurationManager.prototype.doCreate = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var content, configUri, uri, fileStat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getInitialConfigurationContent()];
                    case 1:
                        content = _a.sent();
                        if (!content) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.folderPreferences.setPreference('tasks', {}, model.getWorkspaceFolder())];
                    case 2:
                        _a.sent(); // create dummy tasks.json in the correct place
                        configUri = this.folderPreferences.resolve('tasks', model.getWorkspaceFolder()).configUri;
                        uri = void 0;
                        if (configUri && configUri.path.base === 'tasks.json') {
                            uri = configUri;
                        }
                        else { // fallback
                            uri = new uri_1.default(model.getWorkspaceFolder()).resolve(this.preferenceConfigurations.getPaths()[0] + "/tasks.json");
                        }
                        return [4 /*yield*/, this.filesystem.getFileStat(uri.toString())];
                    case 3:
                        fileStat = _a.sent();
                        if (!fileStat) {
                            throw new Error("file not found: " + uri.toString());
                        }
                        try {
                            this.filesystem.setContent(fileStat, content);
                        }
                        catch (e) {
                            if (!common_1.FileSystemError.FileExists.is(e)) {
                                throw e;
                            }
                        }
                        return [2 /*return*/, uri];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TaskConfigurationManager.prototype.getInitialConfigurationContent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var selected;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.quickPick.show(this.taskTemplateSelector.selectTemplates(), {
                            placeholder: 'Select a Task Template'
                        })];
                    case 1:
                        selected = _a.sent();
                        if (selected) {
                            return [2 /*return*/, selected.content];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], TaskConfigurationManager.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(browser_1.EditorManager),
        __metadata("design:type", browser_1.EditorManager)
    ], TaskConfigurationManager.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(quick_pick_service_1.QuickPickService),
        __metadata("design:type", Object)
    ], TaskConfigurationManager.prototype, "quickPick", void 0);
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], TaskConfigurationManager.prototype, "filesystem", void 0);
    __decorate([
        inversify_1.inject(browser_2.PreferenceProvider),
        inversify_1.named(browser_2.PreferenceScope.Folder),
        __metadata("design:type", browser_2.PreferenceProvider)
    ], TaskConfigurationManager.prototype, "folderPreferences", void 0);
    __decorate([
        inversify_1.inject(browser_2.PreferenceProvider),
        inversify_1.named(browser_2.PreferenceScope.User),
        __metadata("design:type", browser_2.PreferenceProvider)
    ], TaskConfigurationManager.prototype, "userPreferences", void 0);
    __decorate([
        inversify_1.inject(preference_configurations_1.PreferenceConfigurations),
        __metadata("design:type", preference_configurations_1.PreferenceConfigurations)
    ], TaskConfigurationManager.prototype, "preferenceConfigurations", void 0);
    __decorate([
        inversify_1.inject(workspace_variable_contribution_1.WorkspaceVariableContribution),
        __metadata("design:type", workspace_variable_contribution_1.WorkspaceVariableContribution)
    ], TaskConfigurationManager.prototype, "workspaceVariables", void 0);
    __decorate([
        inversify_1.inject(task_templates_1.TaskTemplateSelector),
        __metadata("design:type", task_templates_1.TaskTemplateSelector)
    ], TaskConfigurationManager.prototype, "taskTemplateSelector", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], TaskConfigurationManager.prototype, "init", null);
    TaskConfigurationManager = __decorate([
        inversify_1.injectable()
    ], TaskConfigurationManager);
    return TaskConfigurationManager;
}());
exports.TaskConfigurationManager = TaskConfigurationManager;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-configuration-model.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-configuration-model.js ***!
  \**************************************************************************/
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
exports.TaskConfigurationModel = void 0;
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
/**
 * Holds the task configurations associated with a particular file. Uses an editor model to facilitate
 * non-destructive editing and coordination with editing the file by hand.
 */
var TaskConfigurationModel = /** @class */ (function () {
    function TaskConfigurationModel(scope, preferences) {
        var _this = this;
        this.scope = scope;
        this.preferences = preferences;
        this.onDidChangeEmitter = new event_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.toDispose = new disposable_1.DisposableCollection(this.onDidChangeEmitter);
        this.reconcile();
        this.toDispose.push(this.preferences.onDidPreferencesChanged(function (e) {
            var change = e['tasks'];
            if (change && browser_1.PreferenceProviderDataChange.affects(change, _this.getWorkspaceFolder())) {
                _this.reconcile();
            }
        }));
    }
    Object.defineProperty(TaskConfigurationModel.prototype, "uri", {
        get: function () {
            return this.json.uri;
        },
        enumerable: false,
        configurable: true
    });
    TaskConfigurationModel.prototype.getWorkspaceFolder = function () {
        return typeof this.scope === 'string' ? this.scope : undefined;
    };
    TaskConfigurationModel.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    Object.defineProperty(TaskConfigurationModel.prototype, "onDispose", {
        get: function () {
            return this.toDispose.onDispose;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TaskConfigurationModel.prototype, "configurations", {
        get: function () {
            return this.json.configurations;
        },
        enumerable: false,
        configurable: true
    });
    TaskConfigurationModel.prototype.reconcile = function () {
        this.json = this.parseConfigurations();
        this.onDidChangeEmitter.fire(undefined);
    };
    TaskConfigurationModel.prototype.setConfigurations = function (value) {
        return this.preferences.setPreference('tasks.tasks', value, this.getWorkspaceFolder());
    };
    TaskConfigurationModel.prototype.parseConfigurations = function () {
        var e_1, _a;
        var configurations = [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var _b = this.preferences.resolve('tasks', this.getWorkspaceFolder()), configUri = _b.configUri, value = _b.value;
        if (value && typeof value === 'object' && 'tasks' in value) {
            if (Array.isArray(value.tasks)) {
                try {
                    for (var _c = __values(value.tasks), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var taskConfig = _d.value;
                        configurations.push(taskConfig);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        }
        return {
            uri: configUri,
            configurations: configurations
        };
    };
    return TaskConfigurationModel;
}());
exports.TaskConfigurationModel = TaskConfigurationModel;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-configurations.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-configurations.js ***!
  \*********************************************************************/
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
exports.TaskConfigurations = exports.USER_TASKS_URI = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! ../common */ "./node_modules/@theia/task/lib/common/index.js");
var task_definition_registry_1 = __webpack_require__(/*! ./task-definition-registry */ "./node_modules/@theia/task/lib/browser/task-definition-registry.js");
var provided_task_configurations_1 = __webpack_require__(/*! ./provided-task-configurations */ "./node_modules/@theia/task/lib/browser/provided-task-configurations.js");
var task_configuration_manager_1 = __webpack_require__(/*! ./task-configuration-manager */ "./node_modules/@theia/task/lib/browser/task-configuration-manager.js");
var task_schema_updater_1 = __webpack_require__(/*! ./task-schema-updater */ "./node_modules/@theia/task/lib/browser/task-schema-updater.js");
var task_source_resolver_1 = __webpack_require__(/*! ./task-source-resolver */ "./node_modules/@theia/task/lib/browser/task-source-resolver.js");
var common_2 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var filesystem_watcher_protocol_1 = __webpack_require__(/*! @theia/filesystem/lib/common/filesystem-watcher-protocol */ "./node_modules/@theia/filesystem/lib/common/filesystem-watcher-protocol.js");
var browser_1 = __webpack_require__(/*! @theia/workspace/lib/browser */ "./node_modules/@theia/workspace/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var user_configs_preference_provider_1 = __webpack_require__(/*! @theia/preferences/lib/browser/user-configs-preference-provider */ "./node_modules/@theia/preferences/lib/browser/user-configs-preference-provider.js");
exports.USER_TASKS_URI = user_configs_preference_provider_1.USER_PREFERENCE_FOLDER.withPath('/tasks.json');
/**
 * Watches a tasks.json configuration file and provides a parsed version of the contained task configurations
 */
var TaskConfigurations = /** @class */ (function () {
    function TaskConfigurations() {
        var _this = this;
        this.toDispose = new common_2.DisposableCollection();
        /**
         * Map of source (path of root folder that the task configs come from) and task config map.
         * For the inner map (i.e., task config map), the key is task label and value TaskConfiguration
         */
        this.tasksMap = new Map();
        /**
         * Map of source (path of root folder that the task configs come from) and task customizations map.
         */
        this.taskCustomizationMap = new Map();
        this.client = undefined;
        /**
         * Map of source (path of root folder that the task configs come from) and raw task configurations / customizations.
         * This map is used to store the data from `tasks.json` files in workspace.
         */
        this.rawTaskConfigurations = new Map();
        this.toDispose.push(common_2.Disposable.create(function () {
            _this.tasksMap.clear();
            _this.taskCustomizationMap.clear();
            _this.rawTaskConfigurations.clear();
            _this.client = undefined;
        }));
    }
    TaskConfigurations.prototype.init = function () {
        var _this = this;
        this.toDispose.push(this.taskConfigurationManager.onDidChangeTaskConfig(function (change) { return __awaiter(_this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.onDidTaskFileChange([change])];
                    case 1:
                        _a.sent();
                        if (this.client) {
                            this.client.taskConfigurationChanged(this.getTaskLabels());
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); }));
        this.reorganizeTasks();
        this.toDispose.push(this.taskSchemaUpdater.onDidChangeTaskSchema(function () { return _this.reorganizeTasks(); }));
    };
    TaskConfigurations.prototype.setClient = function (client) {
        this.client = client;
    };
    TaskConfigurations.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    /** returns the list of known task labels */
    TaskConfigurations.prototype.getTaskLabels = function () {
        return Array.from(this.tasksMap.values()).reduce(function (acc, labelConfigMap) { return acc.concat(Array.from(labelConfigMap.keys())); }, []);
    };
    /**
     * returns a collection of known tasks, which includes:
     * - all the configured tasks in `tasks.json`, and
     * - the customized detected tasks.
     *
     * The invalid task configs are not returned.
     */
    TaskConfigurations.prototype.getTasks = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var configuredTasks, detectedTasksAsConfigured, _a, _b, _c, rootFolder, customizations, customizations_1, customizations_1_1, cus, detected, e_1_1, e_2_1;
            var e_2, _d, e_1, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        configuredTasks = Array.from(this.tasksMap.values()).reduce(function (acc, labelConfigMap) { return acc.concat(Array.from(labelConfigMap.values())); }, []);
                        detectedTasksAsConfigured = [];
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 12, 13, 14]);
                        _a = __values(Array.from(this.taskCustomizationMap.entries())), _b = _a.next();
                        _f.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 11];
                        _c = __read(_b.value, 2), rootFolder = _c[0], customizations = _c[1];
                        _f.label = 3;
                    case 3:
                        _f.trys.push([3, 8, 9, 10]);
                        customizations_1 = (e_1 = void 0, __values(customizations)), customizations_1_1 = customizations_1.next();
                        _f.label = 4;
                    case 4:
                        if (!!customizations_1_1.done) return [3 /*break*/, 7];
                        cus = customizations_1_1.value;
                        return [4 /*yield*/, this.providedTaskConfigurations.getTaskToCustomize(token, cus, rootFolder)];
                    case 5:
                        detected = _f.sent();
                        if (detected) {
                            // there might be a provided task that has a different scope from the task we're inspecting
                            detectedTasksAsConfigured.push(__assign(__assign({}, detected), cus));
                        }
                        _f.label = 6;
                    case 6:
                        customizations_1_1 = customizations_1.next();
                        return [3 /*break*/, 4];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _f.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (customizations_1_1 && !customizations_1_1.done && (_e = customizations_1.return)) _e.call(customizations_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 11: return [3 /*break*/, 14];
                    case 12:
                        e_2_1 = _f.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 14];
                    case 13:
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 14: return [2 /*return*/, __spread(configuredTasks, detectedTasksAsConfigured)];
                }
            });
        });
    };
    TaskConfigurations.prototype.getRawTaskConfigurations = function (scope) {
        var e_3, _a;
        if (!scope) {
            var tasks = [];
            try {
                for (var _b = __values(this.rawTaskConfigurations.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var configs = _c.value;
                    tasks.push.apply(tasks, __spread(configs));
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return tasks;
        }
        var scopeKey = this.getKeyFromScope(scope);
        if (this.rawTaskConfigurations.has(scopeKey)) {
            return Array.from(this.rawTaskConfigurations.get(scopeKey).values());
        }
        return [];
    };
    /**
     * returns a collection of invalid task configs as per the task schema defined in Theia.
     */
    TaskConfigurations.prototype.getInvalidTaskConfigurations = function () {
        var e_4, _a, e_5, _b;
        var invalidTaskConfigs = [];
        try {
            for (var _c = __values(this.rawTaskConfigurations.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var taskConfigs = _d.value;
                try {
                    for (var taskConfigs_1 = (e_5 = void 0, __values(taskConfigs)), taskConfigs_1_1 = taskConfigs_1.next(); !taskConfigs_1_1.done; taskConfigs_1_1 = taskConfigs_1.next()) {
                        var taskConfig = taskConfigs_1_1.value;
                        var isValid = this.isTaskConfigValid(taskConfig);
                        if (!isValid) {
                            invalidTaskConfigs.push(taskConfig);
                        }
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (taskConfigs_1_1 && !taskConfigs_1_1.done && (_b = taskConfigs_1.return)) _b.call(taskConfigs_1);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return invalidTaskConfigs;
    };
    /** returns the task configuration for a given label or undefined if none */
    TaskConfigurations.prototype.getTask = function (scope, taskLabel) {
        var labelConfigMap = this.tasksMap.get(this.getKeyFromScope(scope));
        if (labelConfigMap) {
            return labelConfigMap.get(taskLabel);
        }
    };
    /** returns the customized task for a given label or undefined if none */
    TaskConfigurations.prototype.getCustomizedTask = function (token, scope, taskLabel) {
        return __awaiter(this, void 0, void 0, function () {
            var customizations, customization, detected;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        customizations = this.taskCustomizationMap.get(this.getKeyFromScope(scope));
                        if (!customizations) return [3 /*break*/, 2];
                        customization = customizations.find(function (cus) { return cus.label === taskLabel; });
                        if (!customization) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.providedTaskConfigurations.getTaskToCustomize(token, customization, scope)];
                    case 1:
                        detected = _a.sent();
                        if (detected) {
                            return [2 /*return*/, __assign(__assign(__assign({}, detected), customization), { type: detected.type })];
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /** removes tasks configured in the given task config file */
    TaskConfigurations.prototype.removeTasks = function (scope) {
        var source = this.getKeyFromScope(scope);
        this.tasksMap.delete(source);
        this.taskCustomizationMap.delete(source);
    };
    /**
     * Removes task customization objects found in the given task config file from the memory.
     * Please note: this function does not modify the task config file.
     */
    TaskConfigurations.prototype.removeTaskCustomizations = function (scope) {
        var source = this.getKeyFromScope(scope);
        this.taskCustomizationMap.delete(source);
    };
    /**
     * Returns the task customizations by type from a given root folder in the workspace.
     * @param type the type of task customizations
     * @param rootFolder the root folder to find task customizations from. If `undefined`, this function returns an empty array.
     */
    TaskConfigurations.prototype.getTaskCustomizations = function (type, scope) {
        var customizationInRootFolder = this.taskCustomizationMap.get(this.getKeyFromScope(scope));
        if (customizationInRootFolder) {
            return customizationInRootFolder.filter(function (c) { return c.type === type; });
        }
        else {
            return [];
        }
    };
    /**
     * Returns the customization object in `tasks.json` for the given task. Please note, this function
     * returns `undefined` if the given task is not a detected task, because configured tasks don't need
     * customization objects - users can modify its config directly in `tasks.json`.
     * @param taskConfig The task config, which could either be a configured task or a detected task.
     */
    TaskConfigurations.prototype.getCustomizationForTask = function (taskConfig) {
        if (!this.isDetectedTask(taskConfig)) {
            return undefined;
        }
        var customizationByType = this.getTaskCustomizations(taskConfig.taskType || taskConfig.type, taskConfig._scope) || [];
        var hasCustomization = customizationByType.length > 0;
        if (hasCustomization) {
            var taskDefinition_1 = this.taskDefinitionRegistry.getDefinition(taskConfig);
            if (taskDefinition_1) {
                var cus = customizationByType.filter(function (customization) {
                    return taskDefinition_1.properties.required.every(function (rp) { return customization[rp] === taskConfig[rp]; });
                })[0]; // Only support having one customization per task
                return cus;
            }
        }
        return undefined;
    };
    /**
     * Called when a change, to a config file we watch, is detected.
     */
    TaskConfigurations.prototype.onDidTaskFileChange = function (fileChanges) {
        return __awaiter(this, void 0, void 0, function () {
            var fileChanges_1, fileChanges_1_1, change, e_6_1;
            var e_6, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, 7, 8]);
                        fileChanges_1 = __values(fileChanges), fileChanges_1_1 = fileChanges_1.next();
                        _b.label = 1;
                    case 1:
                        if (!!fileChanges_1_1.done) return [3 /*break*/, 5];
                        change = fileChanges_1_1.value;
                        if (!(change.type === filesystem_watcher_protocol_1.FileChangeType.DELETED)) return [3 /*break*/, 2];
                        this.removeTasks(change.scope);
                        return [3 /*break*/, 4];
                    case 2: 
                    // re-parse the config file
                    return [4 /*yield*/, this.refreshTasks(change.scope)];
                    case 3:
                        // re-parse the config file
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        fileChanges_1_1 = fileChanges_1.next();
                        return [3 /*break*/, 1];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_6_1 = _b.sent();
                        e_6 = { error: e_6_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (fileChanges_1_1 && !fileChanges_1_1.done && (_a = fileChanges_1.return)) _a.call(fileChanges_1);
                        }
                        finally { if (e_6) throw e_6.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Read the task configs from the task configuration manager, and updates the list of available tasks.
     */
    TaskConfigurations.prototype.refreshTasks = function (scope) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.readTasks(scope)];
                    case 1:
                        _a.sent();
                        this.removeTasks(scope);
                        this.removeTaskCustomizations(scope);
                        this.reorganizeTasks();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** parses a config file and extracts the tasks launch configurations */
    TaskConfigurations.prototype.readTasks = function (scope) {
        return __awaiter(this, void 0, void 0, function () {
            var rawConfigArray, key;
            return __generator(this, function (_a) {
                rawConfigArray = this.taskConfigurationManager.getTasks(scope);
                key = this.getKeyFromScope(scope);
                if (this.rawTaskConfigurations.has(key)) {
                    this.rawTaskConfigurations.delete(key);
                }
                this.rawTaskConfigurations.set(key, rawConfigArray);
                return [2 /*return*/, rawConfigArray];
            });
        });
    };
    TaskConfigurations.prototype.openUserTasks = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openerService.getOpener(exports.USER_TASKS_URI).then(function (opener) { return opener.open(exports.USER_TASKS_URI); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** Adds given task to a config file and opens the file to provide ability to edit task configuration. */
    TaskConfigurations.prototype.configure = function (token, task) {
        return __awaiter(this, void 0, void 0, function () {
            var scope, workspace, configuredAndCustomizedTasks, e_7;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        scope = task._scope;
                        if (scope === common_1.TaskScope.Global) {
                            return [2 /*return*/, this.openUserTasks()];
                        }
                        else if (typeof scope !== 'string') {
                            console.error('Global task cannot be customized');
                            // TODO detected tasks of scope workspace or user could be customized in those preferences.
                            return [2 /*return*/];
                        }
                        workspace = this.workspaceService.workspace;
                        if (!workspace) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.getTasks(token)];
                    case 1:
                        configuredAndCustomizedTasks = _a.sent();
                        if (!!configuredAndCustomizedTasks.some(function (t) { return _this.taskDefinitionRegistry.compareTasks(t, task); })) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.saveTask(scope, __assign(__assign({}, task), { problemMatcher: [] }))];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.taskConfigurationManager.openConfiguration(scope)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_7 = _a.sent();
                        console.error("Error occurred while opening 'tasks.json' in " + this.taskSourceResolver.resolve(task) + ".", e_7);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    TaskConfigurations.prototype.getTaskCustomizationTemplate = function (task) {
        var definition = this.getTaskDefinition(task);
        if (!definition) {
            console.error('Detected / Contributed tasks should have a task definition.');
            return;
        }
        var customization = { type: task.taskType || task.type };
        definition.properties.all.forEach(function (p) {
            if (task[p] !== undefined) {
                customization[p] = task[p];
            }
        });
        if ('problemMatcher' in task) {
            var problemMatcher = [];
            if (Array.isArray(task.problemMatcher)) {
                problemMatcher.push.apply(problemMatcher, __spread(task.problemMatcher.map(function (t) {
                    if (typeof t === 'string') {
                        return t;
                    }
                    else {
                        return t.name;
                    }
                })));
            }
            else if (typeof task.problemMatcher === 'string') {
                problemMatcher.push(task.problemMatcher);
            }
            else if (task.problemMatcher) {
                problemMatcher.push(task.problemMatcher.name);
            }
            customization.problemMatcher = problemMatcher.map(function (name) { return name.startsWith('$') ? name : "$" + name; });
        }
        if (task.group) {
            customization.group = task.group;
        }
        return __assign({}, customization);
    };
    /** Writes the task to a config file. Creates a config file if this one does not exist */
    TaskConfigurations.prototype.saveTask = function (scope, task) {
        var _source = task._source, $ident = task.$ident, preparedTask = __rest(task, ["_source", "$ident"]);
        var customizedTaskTemplate = this.getTaskCustomizationTemplate(task) || preparedTask;
        return this.taskConfigurationManager.addTaskConfiguration(scope, customizedTaskTemplate);
    };
    /**
     * This function is called after a change in TaskDefinitionRegistry happens.
     * It checks all tasks that have been loaded, and re-organized them in `tasksMap` and `taskCustomizationMap`.
     */
    TaskConfigurations.prototype.reorganizeTasks = function () {
        var e_8, _a, e_9, _b;
        var newTaskMap = new Map();
        var newTaskCustomizationMap = new Map();
        var addCustomization = function (rootFolder, customization) {
            if (newTaskCustomizationMap.has(rootFolder)) {
                newTaskCustomizationMap.get(rootFolder).push(customization);
            }
            else {
                newTaskCustomizationMap.set(rootFolder, [customization]);
            }
        };
        var addConfiguredTask = function (rootFolder, label, configuredTask) {
            if (newTaskMap.has(rootFolder)) {
                newTaskMap.get(rootFolder).set(label, configuredTask);
            }
            else {
                var newConfigMap = new Map();
                newConfigMap.set(label, configuredTask);
                newTaskMap.set(rootFolder, newConfigMap);
            }
        };
        try {
            for (var _c = __values(this.rawTaskConfigurations.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), scopeKey = _e[0], taskConfigs = _e[1];
                try {
                    for (var taskConfigs_2 = (e_9 = void 0, __values(taskConfigs)), taskConfigs_2_1 = taskConfigs_2.next(); !taskConfigs_2_1.done; taskConfigs_2_1 = taskConfigs_2.next()) {
                        var taskConfig = taskConfigs_2_1.value;
                        var scope = this.getScopeFromKey(scopeKey);
                        var isValid = this.isTaskConfigValid(taskConfig);
                        if (!isValid) {
                            continue;
                        }
                        var transformedTask = this.getTransformedRawTask(taskConfig, scope);
                        if (this.isDetectedTask(transformedTask)) {
                            addCustomization(scopeKey, transformedTask);
                        }
                        else {
                            addConfiguredTask(scopeKey, transformedTask['label'], transformedTask);
                        }
                    }
                }
                catch (e_9_1) { e_9 = { error: e_9_1 }; }
                finally {
                    try {
                        if (taskConfigs_2_1 && !taskConfigs_2_1.done && (_b = taskConfigs_2.return)) _b.call(taskConfigs_2);
                    }
                    finally { if (e_9) throw e_9.error; }
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_8) throw e_8.error; }
        }
        this.taskCustomizationMap = newTaskCustomizationMap;
        this.tasksMap = newTaskMap;
    };
    TaskConfigurations.prototype.getTransformedRawTask = function (rawTask, scope) {
        var taskConfig;
        if (this.isDetectedTask(rawTask)) {
            var def = this.getTaskDefinition(rawTask);
            taskConfig = __assign(__assign({}, rawTask), { _source: def.source, _scope: scope });
        }
        else {
            taskConfig = __assign(__assign({}, rawTask), { _source: scope, _scope: scope });
        }
        return __assign(__assign({}, taskConfig), { presentation: common_1.TaskOutputPresentation.fromJson(rawTask) });
    };
    /**
     * Returns `true` if the given task configuration is valid as per the task schema defined in Theia
     * or contributed by Theia extensions and plugins, `false` otherwise.
     */
    TaskConfigurations.prototype.isTaskConfigValid = function (task) {
        return this.taskSchemaUpdater.validate({ tasks: [task] });
    };
    /**
     * Updates the task config in the `tasks.json`.
     * The task config, together with updates, will be written into the `tasks.json` if it is not found in the file.
     *
     * @param task task that the updates will be applied to
     * @param update the updates to be applied
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TaskConfigurations.prototype.updateTaskConfig = function (token, task, update) {
        return __awaiter(this, void 0, void 0, function () {
            var scope, configuredAndCustomizedTasks, jsonTasks, ind;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        scope = task._scope;
                        return [4 /*yield*/, this.getTasks(token)];
                    case 1:
                        configuredAndCustomizedTasks = _a.sent();
                        if (configuredAndCustomizedTasks.some(function (t) { return _this.taskDefinitionRegistry.compareTasks(t, task); })) { // task is already in `tasks.json`
                            jsonTasks = this.taskConfigurationManager.getTasks(scope);
                            if (jsonTasks) {
                                ind = jsonTasks.findIndex(function (t) {
                                    if (t.type !== (task.taskType || task.type)) {
                                        return false;
                                    }
                                    var def = _this.taskDefinitionRegistry.getDefinition(t);
                                    if (def) {
                                        return def.properties.all.every(function (p) { return t[p] === task[p]; });
                                    }
                                    return t.label === task.label;
                                });
                                jsonTasks[ind] = __assign(__assign({}, jsonTasks[ind]), update);
                            }
                            this.taskConfigurationManager.setTaskConfigurations(scope, jsonTasks);
                        }
                        else { // task is not in `tasks.json`
                            Object.keys(update).forEach(function (taskProperty) {
                                task[taskProperty] = update[taskProperty];
                            });
                            this.saveTask(scope, task);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskConfigurations.prototype.getKeyFromScope = function (scope) {
        // Converting the enums to string will not yield a valid URI, so the keys will be distinct from any URI.
        return scope.toString();
    };
    TaskConfigurations.prototype.getScopeFromKey = function (key) {
        if (common_1.TaskScope.Global.toString() === key) {
            return common_1.TaskScope.Global;
        }
        else if (common_1.TaskScope.Workspace.toString() === key) {
            return common_1.TaskScope.Workspace;
        }
        else {
            return key;
        }
    };
    /** checks if the config is a detected / contributed task */
    TaskConfigurations.prototype.isDetectedTask = function (task) {
        var taskDefinition = this.getTaskDefinition(task);
        // it is considered as a customization if the task definition registry finds a def for the task configuration
        return !!taskDefinition;
    };
    TaskConfigurations.prototype.getTaskDefinition = function (task) {
        return this.taskDefinitionRegistry.getDefinition(__assign(__assign({}, task), { type: typeof task.taskType === 'string' ? task.taskType : task.type }));
    };
    __decorate([
        inversify_1.inject(browser_1.WorkspaceService),
        __metadata("design:type", browser_1.WorkspaceService)
    ], TaskConfigurations.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(browser_2.OpenerService),
        __metadata("design:type", Object)
    ], TaskConfigurations.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], TaskConfigurations.prototype, "taskDefinitionRegistry", void 0);
    __decorate([
        inversify_1.inject(provided_task_configurations_1.ProvidedTaskConfigurations),
        __metadata("design:type", provided_task_configurations_1.ProvidedTaskConfigurations)
    ], TaskConfigurations.prototype, "providedTaskConfigurations", void 0);
    __decorate([
        inversify_1.inject(task_configuration_manager_1.TaskConfigurationManager),
        __metadata("design:type", task_configuration_manager_1.TaskConfigurationManager)
    ], TaskConfigurations.prototype, "taskConfigurationManager", void 0);
    __decorate([
        inversify_1.inject(task_schema_updater_1.TaskSchemaUpdater),
        __metadata("design:type", task_schema_updater_1.TaskSchemaUpdater)
    ], TaskConfigurations.prototype, "taskSchemaUpdater", void 0);
    __decorate([
        inversify_1.inject(task_source_resolver_1.TaskSourceResolver),
        __metadata("design:type", task_source_resolver_1.TaskSourceResolver)
    ], TaskConfigurations.prototype, "taskSourceResolver", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TaskConfigurations.prototype, "init", null);
    TaskConfigurations = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], TaskConfigurations);
    return TaskConfigurations;
}());
exports.TaskConfigurations = TaskConfigurations;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-contribution.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-contribution.js ***!
  \*******************************************************************/
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
exports.TaskProviderRegistry = exports.TaskResolverRegistry = exports.TaskContribution = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
exports.TaskContribution = Symbol('TaskContribution');
var TaskResolverRegistry = /** @class */ (function () {
    function TaskResolverRegistry() {
        this.onWillProvideTaskResolverEmitter = new event_1.Emitter();
        this.onWillProvideTaskResolver = this.onWillProvideTaskResolverEmitter.event;
    }
    TaskResolverRegistry.prototype.init = function () {
        this.resolvers = new Map();
    };
    /** Registers the given Task Resolver to resolve the Task Configurations of the specified type. */
    TaskResolverRegistry.prototype.register = function (type, resolver) {
        var _this = this;
        this.resolvers.set(type, resolver);
        return {
            dispose: function () { return _this.resolvers.delete(type); }
        };
    };
    TaskResolverRegistry.prototype.getResolver = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, event_1.WaitUntilEvent.fire(this.onWillProvideTaskResolverEmitter, {})];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.resolvers.get(type)];
                }
            });
        });
    };
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TaskResolverRegistry.prototype, "init", null);
    TaskResolverRegistry = __decorate([
        inversify_1.injectable()
    ], TaskResolverRegistry);
    return TaskResolverRegistry;
}());
exports.TaskResolverRegistry = TaskResolverRegistry;
var TaskProviderRegistry = /** @class */ (function () {
    function TaskProviderRegistry() {
        this.onWillProvideTaskProviderEmitter = new event_1.Emitter();
        this.onWillProvideTaskProvider = this.onWillProvideTaskProviderEmitter.event;
    }
    TaskProviderRegistry.prototype.init = function () {
        this.providers = new Map();
    };
    /** Registers the given Task Provider to return Task Configurations of the specified type. */
    TaskProviderRegistry.prototype.register = function (type, provider, handle) {
        var _this = this;
        var key = handle === undefined ? type : type + "::" + handle;
        this.providers.set(key, provider);
        return {
            dispose: function () { return _this.providers.delete(key); }
        };
    };
    TaskProviderRegistry.prototype.getProvider = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, event_1.WaitUntilEvent.fire(this.onWillProvideTaskProviderEmitter, {})];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.providers.get(type)];
                }
            });
        });
    };
    /** Returns all registered Task Providers. */
    TaskProviderRegistry.prototype.getProviders = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, event_1.WaitUntilEvent.fire(this.onWillProvideTaskProviderEmitter, {})];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, __spread(this.providers.values())];
                }
            });
        });
    };
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TaskProviderRegistry.prototype, "init", null);
    TaskProviderRegistry = __decorate([
        inversify_1.injectable()
    ], TaskProviderRegistry);
    return TaskProviderRegistry;
}());
exports.TaskProviderRegistry = TaskProviderRegistry;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-definition-registry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-definition-registry.js ***!
  \**************************************************************************/
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
exports.TaskDefinitionRegistry = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var TaskDefinitionRegistry = /** @class */ (function () {
    function TaskDefinitionRegistry() {
        // task type - array of task definitions
        this.definitions = new Map();
        this.onDidRegisterTaskDefinitionEmitter = new common_1.Emitter();
        this.onDidUnregisterTaskDefinitionEmitter = new common_1.Emitter();
    }
    Object.defineProperty(TaskDefinitionRegistry.prototype, "onDidRegisterTaskDefinition", {
        get: function () {
            return this.onDidRegisterTaskDefinitionEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TaskDefinitionRegistry.prototype, "onDidUnregisterTaskDefinition", {
        get: function () {
            return this.onDidUnregisterTaskDefinitionEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns all task definitions that are registered
     * @return the task definitions that are registered
     */
    TaskDefinitionRegistry.prototype.getAll = function () {
        var e_1, _a;
        var all = [];
        try {
            for (var _b = __values(this.definitions.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var definitions = _c.value;
                all.push.apply(all, __spread(definitions));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return all;
    };
    /**
     * Finds the task definition(s) from the registry with the given `taskType`.
     *
     * @param taskType the type of the task
     * @return an array of the task definitions. If no task definitions are found, an empty array is returned.
     */
    TaskDefinitionRegistry.prototype.getDefinitions = function (taskType) {
        return this.definitions.get(taskType) || [];
    };
    /**
     * Finds the task definition from the registry for the task configuration.
     * The task configuration is considered as a "match" to the task definition if it has all the `required` properties.
     * In case that more than one task definition is found, return the one that has the biggest number of matched properties.
     *
     * @param taskConfiguration the task configuration
     * @return the task definition for the task configuration. If the task definition is not found, `undefined` is returned.
     */
    TaskDefinitionRegistry.prototype.getDefinition = function (taskConfiguration) {
        var e_2, _a;
        var definitions = this.getDefinitions(taskConfiguration.taskType || taskConfiguration.type);
        var matchedDefinition;
        var highest = -1;
        var _loop_1 = function (def) {
            var score = 0;
            if (!def.properties.required.every(function (requiredProp) { return taskConfiguration[requiredProp] !== undefined; })) {
                return "continue";
            }
            score += def.properties.required.length; // number of required properties
            var requiredProps = new Set(def.properties.required);
            // number of optional properties
            score += def.properties.all.filter(function (p) { return !requiredProps.has(p) && taskConfiguration[p] !== undefined; }).length;
            if (score > highest) {
                highest = score;
                matchedDefinition = def;
            }
        };
        try {
            for (var definitions_1 = __values(definitions), definitions_1_1 = definitions_1.next(); !definitions_1_1.done; definitions_1_1 = definitions_1.next()) {
                var def = definitions_1_1.value;
                _loop_1(def);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (definitions_1_1 && !definitions_1_1.done && (_a = definitions_1.return)) _a.call(definitions_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return matchedDefinition;
    };
    /**
     * Add a task definition to the registry.
     *
     * @param definition the task definition to be added.
     */
    TaskDefinitionRegistry.prototype.register = function (definition) {
        var _this = this;
        var taskType = definition.taskType;
        var definitions = this.definitions.get(taskType) || [];
        definitions.push(definition);
        this.definitions.set(taskType, definitions);
        this.onDidRegisterTaskDefinitionEmitter.fire(undefined);
        return disposable_1.Disposable.create(function () {
            var index = definitions.indexOf(definition);
            if (index !== -1) {
                definitions.splice(index, 1);
            }
            _this.onDidUnregisterTaskDefinitionEmitter.fire(undefined);
        });
    };
    TaskDefinitionRegistry.prototype.compareTasks = function (one, other) {
        var oneType = one.taskType || one.type;
        var otherType = other.taskType || other.type;
        if (oneType !== otherType) {
            return false;
        }
        var def = this.getDefinition(one);
        if (def) {
            // scope is either a string or an enum value. Anyway...the must exactly match
            return def.properties.all.every(function (p) { return p === 'type' || one[p] === other[p]; }) && one._scope === other._scope;
        }
        return one.label === other.label && one._source === other._source;
    };
    TaskDefinitionRegistry = __decorate([
        inversify_1.injectable()
    ], TaskDefinitionRegistry);
    return TaskDefinitionRegistry;
}());
exports.TaskDefinitionRegistry = TaskDefinitionRegistry;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-name-resolver.js":
/*!********************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-name-resolver.js ***!
  \********************************************************************/
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
exports.TaskNameResolver = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var task_definition_registry_1 = __webpack_require__(/*! ./task-definition-registry */ "./node_modules/@theia/task/lib/browser/task-definition-registry.js");
var task_configurations_1 = __webpack_require__(/*! ./task-configurations */ "./node_modules/@theia/task/lib/browser/task-configurations.js");
var TaskNameResolver = /** @class */ (function () {
    function TaskNameResolver() {
    }
    /**
     * Returns task name to display.
     * It is aligned with VS Code.
     */
    TaskNameResolver.prototype.resolve = function (task) {
        var _this = this;
        if (this.isDetectedTask(task)) {
            var scope_1 = task._scope;
            var rawConfigs = this.taskConfigurations.getRawTaskConfigurations(scope_1);
            var jsonConfig = rawConfigs.find(function (rawConfig) { return _this.taskDefinitionRegistry.compareTasks(__assign(__assign({}, rawConfig), { _scope: scope_1 }), task); });
            // detected task that has a `label` defined in `tasks.json`
            if (jsonConfig && jsonConfig.label) {
                return jsonConfig.label;
            }
            return (task.source || task._source) + ": " + task.label;
        }
        // it is a hack, when task is customized but extension is absent
        return task.label || task.type + ": " + task.task;
    };
    TaskNameResolver.prototype.isDetectedTask = function (task) {
        return !!this.taskDefinitionRegistry.getDefinition(task);
    };
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], TaskNameResolver.prototype, "taskDefinitionRegistry", void 0);
    __decorate([
        inversify_1.inject(task_configurations_1.TaskConfigurations),
        __metadata("design:type", task_configurations_1.TaskConfigurations)
    ], TaskNameResolver.prototype, "taskConfigurations", void 0);
    TaskNameResolver = __decorate([
        inversify_1.injectable()
    ], TaskNameResolver);
    return TaskNameResolver;
}());
exports.TaskNameResolver = TaskNameResolver;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-node.js":
/*!***********************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-node.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskNode = void 0;
var TaskNode = /** @class */ (function () {
    function TaskNode(taskId, childTasks, parentsID) {
        this.taskId = taskId;
        this.childTasks = childTasks;
        this.parentsID = parentsID;
    }
    TaskNode.prototype.addChildDependency = function (node) {
        this.childTasks.push(node);
    };
    TaskNode.prototype.addParentDependency = function (parentId) {
        this.parentsID.push(parentId);
    };
    return TaskNode;
}());
exports.TaskNode = TaskNode;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-problem-matcher-registry.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-problem-matcher-registry.js ***!
  \*******************************************************************************/
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
exports.ProblemMatcherRegistry = void 0;
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var common_2 = __webpack_require__(/*! ../common */ "./node_modules/@theia/task/lib/common/index.js");
var task_problem_pattern_registry_1 = __webpack_require__(/*! ./task-problem-pattern-registry */ "./node_modules/@theia/task/lib/browser/task-problem-pattern-registry.js");
var severity_1 = __webpack_require__(/*! @theia/core/lib/common/severity */ "./node_modules/@theia/core/lib/common/severity.js");
var ProblemMatcherRegistry = /** @class */ (function () {
    function ProblemMatcherRegistry() {
        this.matchers = new Map();
        this.onDidChangeProblemMatcherEmitter = new common_1.Emitter();
    }
    Object.defineProperty(ProblemMatcherRegistry.prototype, "onDidChangeProblemMatcher", {
        get: function () {
            return this.onDidChangeProblemMatcherEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    ProblemMatcherRegistry.prototype.init = function () {
        var _this = this;
        this.problemPatternRegistry.onReady().then(function () {
            _this.fillDefaults();
            _this.readyPromise = new Promise(function (res, rej) { return res(undefined); });
            _this.onDidChangeProblemMatcherEmitter.fire(undefined);
        });
    };
    ProblemMatcherRegistry.prototype.onReady = function () {
        return this.readyPromise;
    };
    /**
     * Add a problem matcher to the registry.
     *
     * @param definition the problem matcher to be added.
     */
    ProblemMatcherRegistry.prototype.register = function (matcher) {
        var _this = this;
        if (!matcher.name) {
            console.error('Only named Problem Matchers can be registered.');
            return disposable_1.Disposable.NULL;
        }
        var toDispose = new disposable_1.DisposableCollection(disposable_1.Disposable.create(function () {
            /* mark as not disposed */
            _this.onDidChangeProblemMatcherEmitter.fire(undefined);
        }));
        this.doRegister(matcher, toDispose).then(function () { return _this.onDidChangeProblemMatcherEmitter.fire(undefined); });
        return toDispose;
    };
    ProblemMatcherRegistry.prototype.doRegister = function (matcher, toDispose) {
        return __awaiter(this, void 0, void 0, function () {
            var problemMatcher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProblemMatcherFromContribution(matcher)];
                    case 1:
                        problemMatcher = _a.sent();
                        if (toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        toDispose.push(this.add(problemMatcher));
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Finds the problem matcher from the registry by its name.
     *
     * @param name the name of the problem matcher
     * @return the problem matcher. If the task definition is not found, `undefined` is returned.
     */
    ProblemMatcherRegistry.prototype.get = function (name) {
        if (name.startsWith('$')) {
            return this.matchers.get(name.slice(1));
        }
        return this.matchers.get(name);
    };
    /**
     * Returns all registered problem matchers in the registry.
     */
    ProblemMatcherRegistry.prototype.getAll = function () {
        var e_1, _a;
        var all = [];
        try {
            for (var _b = __values(this.matchers.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var matcherName = _c.value;
                all.push(this.get(matcherName));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        all.sort(function (one, other) { return one.name.localeCompare(other.name); });
        return all;
    };
    /**
     * Transforms the `ProblemMatcherContribution` to a `ProblemMatcher`
     *
     * @return the problem matcher
     */
    ProblemMatcherRegistry.prototype.getProblemMatcherFromContribution = function (matcher) {
        return __awaiter(this, void 0, void 0, function () {
            var baseMatcher, fileLocation, filePrefix, locationAndPrefix, patterns, registeredPattern, deprecated, applyTo, severity, watching, problemMatcher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (matcher.base) {
                            baseMatcher = this.get(matcher.base);
                        }
                        if (matcher.fileLocation === undefined) {
                            fileLocation = baseMatcher ? baseMatcher.fileLocation : common_2.FileLocationKind.Relative;
                            filePrefix = baseMatcher ? baseMatcher.filePrefix : '${workspaceFolder}';
                        }
                        else {
                            locationAndPrefix = this.getFileLocationKindAndPrefix(matcher);
                            fileLocation = locationAndPrefix.fileLocation;
                            filePrefix = locationAndPrefix.filePrefix;
                        }
                        patterns = [];
                        if (!matcher.pattern) return [3 /*break*/, 4];
                        if (!(typeof matcher.pattern === 'string')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.problemPatternRegistry.onReady()];
                    case 1:
                        _a.sent();
                        registeredPattern = this.problemPatternRegistry.get(matcher.pattern);
                        if (Array.isArray(registeredPattern)) {
                            patterns.push.apply(patterns, __spread(registeredPattern));
                        }
                        else if (!!registeredPattern) {
                            patterns.push(registeredPattern);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        if (Array.isArray(matcher.pattern)) {
                            patterns.push.apply(patterns, __spread(matcher.pattern.map(function (p) { return common_2.ProblemPattern.fromProblemPatternContribution(p); })));
                        }
                        else {
                            patterns.push(common_2.ProblemPattern.fromProblemPatternContribution(matcher.pattern));
                        }
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        if (baseMatcher) {
                            patterns.push.apply(patterns, __spread(baseMatcher.pattern));
                        }
                        _a.label = 5;
                    case 5:
                        deprecated = matcher.deprecated;
                        if (deprecated === undefined && baseMatcher) {
                            deprecated = baseMatcher.deprecated;
                        }
                        if (matcher.applyTo === undefined) {
                            applyTo = baseMatcher ? baseMatcher.applyTo : common_2.ApplyToKind.allDocuments;
                        }
                        else {
                            applyTo = common_2.ApplyToKind.fromString(matcher.applyTo) || common_2.ApplyToKind.allDocuments;
                        }
                        severity = severity_1.Severity.fromValue(matcher.severity);
                        if (matcher.severity === undefined && baseMatcher && baseMatcher.severity !== undefined) {
                            severity = baseMatcher.severity;
                        }
                        watching = common_2.WatchingMatcher.fromWatchingMatcherContribution(matcher.background || matcher.watching);
                        if (watching === undefined && baseMatcher) {
                            watching = baseMatcher.watching;
                        }
                        problemMatcher = {
                            name: matcher.name || (baseMatcher ? baseMatcher.name : undefined),
                            label: matcher.label || (baseMatcher ? baseMatcher.label : undefined),
                            deprecated: deprecated,
                            owner: matcher.owner || (baseMatcher ? baseMatcher.owner : ''),
                            source: matcher.source || (baseMatcher ? baseMatcher.source : undefined),
                            applyTo: applyTo,
                            fileLocation: fileLocation,
                            filePrefix: filePrefix,
                            pattern: patterns,
                            severity: severity,
                            watching: watching
                        };
                        return [2 /*return*/, problemMatcher];
                }
            });
        });
    };
    ProblemMatcherRegistry.prototype.add = function (matcher) {
        var _this = this;
        this.matchers.set(matcher.name, matcher);
        return disposable_1.Disposable.create(function () { return _this.matchers.delete(matcher.name); });
    };
    ProblemMatcherRegistry.prototype.getFileLocationKindAndPrefix = function (matcher) {
        var fileLocation = common_2.FileLocationKind.Relative;
        var filePrefix = '${workspaceFolder}';
        if (matcher.fileLocation !== undefined) {
            if (Array.isArray(matcher.fileLocation)) {
                if (matcher.fileLocation.length > 0) {
                    var locationKind = common_2.FileLocationKind.fromString(matcher.fileLocation[0]);
                    if (matcher.fileLocation.length === 1 && locationKind === common_2.FileLocationKind.Absolute) {
                        fileLocation = locationKind;
                    }
                    else if (matcher.fileLocation.length === 2 && locationKind === common_2.FileLocationKind.Relative && matcher.fileLocation[1]) {
                        fileLocation = locationKind;
                        filePrefix = matcher.fileLocation[1];
                    }
                }
            }
            else {
                var locationKind = common_2.FileLocationKind.fromString(matcher.fileLocation);
                if (locationKind) {
                    fileLocation = locationKind;
                    if (locationKind === common_2.FileLocationKind.Relative) {
                        filePrefix = '${workspaceFolder}';
                    }
                }
            }
        }
        return { fileLocation: fileLocation, filePrefix: filePrefix };
    };
    // copied from https://github.com/Microsoft/vscode/blob/1.33.1/src/vs/workbench/contrib/tasks/common/problemMatcher.ts
    ProblemMatcherRegistry.prototype.fillDefaults = function () {
        this.add({
            name: 'msCompile',
            label: 'Microsoft compiler problems',
            owner: 'msCompile',
            applyTo: common_2.ApplyToKind.allDocuments,
            fileLocation: common_2.FileLocationKind.Absolute,
            pattern: (this.problemPatternRegistry.get('msCompile'))
        });
        this.add({
            name: 'lessCompile',
            label: 'Less problems',
            deprecated: true,
            owner: 'lessCompile',
            source: 'less',
            applyTo: common_2.ApplyToKind.allDocuments,
            fileLocation: common_2.FileLocationKind.Absolute,
            pattern: (this.problemPatternRegistry.get('lessCompile')),
            severity: severity_1.Severity.Error
        });
        this.add({
            name: 'gulp-tsc',
            label: 'Gulp TSC Problems',
            owner: 'typescript',
            source: 'ts',
            applyTo: common_2.ApplyToKind.closedDocuments,
            fileLocation: common_2.FileLocationKind.Relative,
            filePrefix: '${workspaceFolder}',
            pattern: (this.problemPatternRegistry.get('gulp-tsc'))
        });
        this.add({
            name: 'jshint',
            label: 'JSHint problems',
            owner: 'jshint',
            source: 'jshint',
            applyTo: common_2.ApplyToKind.allDocuments,
            fileLocation: common_2.FileLocationKind.Absolute,
            pattern: (this.problemPatternRegistry.get('jshint'))
        });
        this.add({
            name: 'jshint-stylish',
            label: 'JSHint stylish problems',
            owner: 'jshint',
            source: 'jshint',
            applyTo: common_2.ApplyToKind.allDocuments,
            fileLocation: common_2.FileLocationKind.Absolute,
            pattern: (this.problemPatternRegistry.get('jshint-stylish'))
        });
        this.add({
            name: 'eslint-compact',
            label: 'ESLint compact problems',
            owner: 'eslint',
            source: 'eslint',
            applyTo: common_2.ApplyToKind.allDocuments,
            fileLocation: common_2.FileLocationKind.Absolute,
            filePrefix: '${workspaceFolder}',
            pattern: (this.problemPatternRegistry.get('eslint-compact'))
        });
        this.add({
            name: 'eslint-stylish',
            label: 'ESLint stylish problems',
            owner: 'eslint',
            source: 'eslint',
            applyTo: common_2.ApplyToKind.allDocuments,
            fileLocation: common_2.FileLocationKind.Absolute,
            pattern: (this.problemPatternRegistry.get('eslint-stylish'))
        });
        this.add({
            name: 'go',
            label: 'Go problems',
            owner: 'go',
            source: 'go',
            applyTo: common_2.ApplyToKind.allDocuments,
            fileLocation: common_2.FileLocationKind.Relative,
            filePrefix: '${workspaceFolder}',
            pattern: (this.problemPatternRegistry.get('go'))
        });
    };
    __decorate([
        inversify_1.inject(task_problem_pattern_registry_1.ProblemPatternRegistry),
        __metadata("design:type", task_problem_pattern_registry_1.ProblemPatternRegistry)
    ], ProblemMatcherRegistry.prototype, "problemPatternRegistry", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProblemMatcherRegistry.prototype, "init", null);
    ProblemMatcherRegistry = __decorate([
        inversify_1.injectable()
    ], ProblemMatcherRegistry);
    return ProblemMatcherRegistry;
}());
exports.ProblemMatcherRegistry = ProblemMatcherRegistry;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-problem-pattern-registry.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-problem-pattern-registry.js ***!
  \*******************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProblemPatternRegistry = void 0;
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! ../common */ "./node_modules/@theia/task/lib/common/index.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var ProblemPatternRegistry = /** @class */ (function () {
    function ProblemPatternRegistry() {
        this.patterns = new Map();
    }
    ProblemPatternRegistry.prototype.init = function () {
        this.fillDefaults();
        this.readyPromise = new Promise(function (res, rej) { return res(undefined); });
    };
    ProblemPatternRegistry.prototype.onReady = function () {
        return this.readyPromise;
    };
    /**
     * Add a problem pattern to the registry.
     *
     * @param definition the problem pattern to be added.
     */
    ProblemPatternRegistry.prototype.register = function (value) {
        var _this = this;
        if (Array.isArray(value)) {
            var toDispose_1 = new disposable_1.DisposableCollection();
            value.forEach(function (problemPatternContribution) { return toDispose_1.push(_this.register(problemPatternContribution)); });
            return toDispose_1;
        }
        if (!value.name) {
            console.error('Only named Problem Patterns can be registered.');
            return disposable_1.Disposable.NULL;
        }
        var problemPattern = common_1.ProblemPattern.fromProblemPatternContribution(value);
        return this.add(problemPattern.name, problemPattern);
    };
    /**
     * Finds the problem pattern(s) from the registry with the given name.
     *
     * @param key the name of the problem patterns
     * @return a problem pattern or an array of the problem patterns associated with the name. If no problem patterns are found, `undefined` is returned.
     */
    ProblemPatternRegistry.prototype.get = function (key) {
        return this.patterns.get(key);
    };
    ProblemPatternRegistry.prototype.add = function (key, value) {
        var _this = this;
        var toAdd;
        if (Array.isArray(value)) {
            toAdd = value.map(function (v) { return Object.assign(v, { name: key }); });
        }
        else {
            toAdd = Object.assign(value, { name: key });
        }
        this.patterns.set(key, toAdd);
        return disposable_1.Disposable.create(function () { return _this.patterns.delete(key); });
    };
    // copied from https://github.com/Microsoft/vscode/blob/1.33.1/src/vs/workbench/contrib/tasks/common/problemMatcher.ts
    ProblemPatternRegistry.prototype.fillDefaults = function () {
        this.add('msCompile', {
            regexp: /^(?:\s+\d+\>)?([^\s].*)\((\d+|\d+,\d+|\d+,\d+,\d+,\d+)\)\s*:\s+(error|warning|info)\s+(\w{1,2}\d+)\s*:\s*(.*)$/.source,
            kind: common_1.ProblemLocationKind.Location,
            file: 1,
            location: 2,
            severity: 3,
            code: 4,
            message: 5
        });
        this.add('gulp-tsc', {
            regexp: /^([^\s].*)\((\d+|\d+,\d+|\d+,\d+,\d+,\d+)\):\s+(\d+)\s+(.*)$/.source,
            kind: common_1.ProblemLocationKind.Location,
            file: 1,
            location: 2,
            code: 3,
            message: 4
        });
        this.add('cpp', {
            regexp: /^([^\s].*)\((\d+|\d+,\d+|\d+,\d+,\d+,\d+)\):\s+(error|warning|info)\s+(C\d+)\s*:\s*(.*)$/.source,
            kind: common_1.ProblemLocationKind.Location,
            file: 1,
            location: 2,
            severity: 3,
            code: 4,
            message: 5
        });
        this.add('csc', {
            regexp: /^([^\s].*)\((\d+|\d+,\d+|\d+,\d+,\d+,\d+)\):\s+(error|warning|info)\s+(CS\d+)\s*:\s*(.*)$/.source,
            kind: common_1.ProblemLocationKind.Location,
            file: 1,
            location: 2,
            severity: 3,
            code: 4,
            message: 5
        });
        this.add('vb', {
            regexp: /^([^\s].*)\((\d+|\d+,\d+|\d+,\d+,\d+,\d+)\):\s+(error|warning|info)\s+(BC\d+)\s*:\s*(.*)$/.source,
            kind: common_1.ProblemLocationKind.Location,
            file: 1,
            location: 2,
            severity: 3,
            code: 4,
            message: 5
        });
        this.add('lessCompile', {
            regexp: /^\s*(.*) in file (.*) line no. (\d+)$/.source,
            kind: common_1.ProblemLocationKind.Location,
            message: 1,
            file: 2,
            line: 3
        });
        this.add('jshint', {
            regexp: /^(.*):\s+line\s+(\d+),\s+col\s+(\d+),\s(.+?)(?:\s+\((\w)(\d+)\))?$/.source,
            kind: common_1.ProblemLocationKind.Location,
            file: 1,
            line: 2,
            character: 3,
            message: 4,
            severity: 5,
            code: 6
        });
        this.add('jshint-stylish', [
            {
                regexp: /^(.+)$/.source,
                kind: common_1.ProblemLocationKind.Location,
                file: 1
            },
            {
                regexp: /^\s+line\s+(\d+)\s+col\s+(\d+)\s+(.+?)(?:\s+\((\w)(\d+)\))?$/.source,
                line: 1,
                character: 2,
                message: 3,
                severity: 4,
                code: 5,
                loop: true
            }
        ]);
        this.add('eslint-compact', {
            regexp: /^(.+):\sline\s(\d+),\scol\s(\d+),\s(Error|Warning|Info)\s-\s(.+)\s\((.+)\)$/.source,
            file: 1,
            kind: common_1.ProblemLocationKind.Location,
            line: 2,
            character: 3,
            severity: 4,
            message: 5,
            code: 6
        });
        this.add('eslint-stylish', [
            {
                regexp: /^([^\s].*)$/.source,
                kind: common_1.ProblemLocationKind.Location,
                file: 1
            },
            {
                regexp: /^\s+(\d+):(\d+)\s+(error|warning|info)\s+(.+?)(?:\s\s+(.*))?$/.source,
                line: 1,
                character: 2,
                severity: 3,
                message: 4,
                code: 5,
                loop: true
            }
        ]);
        this.add('go', {
            regexp: /^([^:]*: )?((.:)?[^:]*):(\d+)(:(\d+))?: (.*)$/.source,
            kind: common_1.ProblemLocationKind.Location,
            file: 2,
            line: 4,
            character: 6,
            message: 7
        });
    };
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProblemPatternRegistry.prototype, "init", null);
    ProblemPatternRegistry = __decorate([
        inversify_1.injectable()
    ], ProblemPatternRegistry);
    return ProblemPatternRegistry;
}());
exports.ProblemPatternRegistry = ProblemPatternRegistry;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-schema-updater.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-schema-updater.js ***!
  \*********************************************************************/
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
// This file is inspired by VSCode and partially copied from https://github.com/Microsoft/vscode/blob/1.33.1/src/vs/workbench/contrib/tasks/common/problemMatcher.ts
// 'problemMatcher.ts' copyright:
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchemaUpdater = exports.taskSchemaId = void 0;
var Ajv = __webpack_require__(/*! ajv */ "./node_modules/ajv/lib/ajv.js");
var debounce = __webpack_require__(/*! p-debounce */ "./node_modules/p-debounce/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var variable_input_schema_1 = __webpack_require__(/*! @theia/variable-resolver/lib/browser/variable-input-schema */ "./node_modules/@theia/variable-resolver/lib/browser/variable-input-schema.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var task_problem_matcher_registry_1 = __webpack_require__(/*! ./task-problem-matcher-registry */ "./node_modules/@theia/task/lib/browser/task-problem-matcher-registry.js");
var task_definition_registry_1 = __webpack_require__(/*! ./task-definition-registry */ "./node_modules/@theia/task/lib/browser/task-definition-registry.js");
var common_2 = __webpack_require__(/*! ../common */ "./node_modules/@theia/task/lib/common/index.js");
var task_configurations_1 = __webpack_require__(/*! ./task-configurations */ "./node_modules/@theia/task/lib/browser/task-configurations.js");
exports.taskSchemaId = 'vscode://schemas/tasks';
var TaskSchemaUpdater = /** @class */ (function () {
    function TaskSchemaUpdater() {
        var _this = this;
        this.onDidChangeTaskSchemaEmitter = new common_1.Emitter();
        this.onDidChangeTaskSchema = this.onDidChangeTaskSchemaEmitter.event;
        this.update = debounce(function () { return _this.doUpdate(); }, 0);
    }
    TaskSchemaUpdater.prototype.registerSchemas = function (context) {
        var _this = this;
        var taskSchemaUri = new uri_1.default(exports.taskSchemaId);
        var resource = this.inmemoryResources.add(taskSchemaUri, '');
        if (resource.onDidChangeContents) {
            resource.onDidChangeContents(function () {
                _this.onDidChangeTaskSchemaEmitter.fire(undefined);
            });
        }
        context.registerSchema({
            fileMatch: ['tasks.json', task_configurations_1.USER_TASKS_URI.toString()],
            url: taskSchemaUri.toString()
        });
        this.updateProblemMatcherNames();
        this.updateSupportedTaskTypes();
        // update problem matcher names in the task schema every time a problem matcher is added or disposed
        this.problemMatcherRegistry.onDidChangeProblemMatcher(function () { return _this.updateProblemMatcherNames(); });
        // update supported task types in the task schema every time a task definition is registered or removed
        this.taskDefinitionRegistry.onDidRegisterTaskDefinition(function () { return _this.updateSupportedTaskTypes(); });
        this.taskDefinitionRegistry.onDidUnregisterTaskDefinition(function () { return _this.updateSupportedTaskTypes(); });
    };
    TaskSchemaUpdater.prototype.doUpdate = function () {
        var taskSchemaUri = new uri_1.default(exports.taskSchemaId);
        taskConfigurationSchema.anyOf = __spread([processTaskConfigurationSchema], customizedDetectedTasks, customSchemas);
        var schema = this.getTaskSchema();
        this.doValidate = new Ajv().compile(schema);
        var schemaContent = JSON.stringify(schema);
        this.inmemoryResources.update(taskSchemaUri, schemaContent);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TaskSchemaUpdater.prototype.validate = function (data) {
        return !!this.doValidate && !!this.doValidate(data);
    };
    /**
     * Adds given task schema to `taskConfigurationSchema` as `oneOf` subschema.
     * Replaces existed subschema by given schema if the corresponding `$id` properties are equal.
     *
     * Note: please provide `$id` property for subschema to have ability remove/replace it.
     * @param schema subschema for adding to `taskConfigurationSchema`
     */
    TaskSchemaUpdater.prototype.addSubschema = function (schema) {
        var schemaId = schema.$id;
        if (schemaId) {
            this.doRemoveSubschema(schemaId);
        }
        customSchemas.push(schema);
        this.update();
    };
    /**
     * Removes task subschema from `taskConfigurationSchema`.
     *
     * @param arg `$id` property of subschema
     */
    TaskSchemaUpdater.prototype.removeSubschema = function (arg) {
        var isRemoved = this.doRemoveSubschema(arg);
        if (isRemoved) {
            this.update();
        }
    };
    /**
     * Removes task subschema from `customSchemas`, use `update()` to apply the changes for `taskConfigurationSchema`.
     *
     * @param arg `$id` property of subschema
     * @returns `true` if subschema was removed, `false` otherwise
     */
    TaskSchemaUpdater.prototype.doRemoveSubschema = function (arg) {
        var index = customSchemas.findIndex(function (existed) { return !!existed.$id && existed.$id === arg; });
        if (index > -1) {
            customSchemas.splice(index, 1);
            return true;
        }
        return false;
    };
    /** Returns an array of task types that are registered, including the default types */
    TaskSchemaUpdater.prototype.getRegisteredTaskTypes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var serverSupportedTypes, browserSupportedTypes, allTypes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.taskServer.getRegisteredTaskTypes()];
                    case 1:
                        serverSupportedTypes = _a.sent();
                        browserSupportedTypes = this.taskDefinitionRegistry.getAll().map(function (def) { return def.taskType; });
                        allTypes = new Set(__spread(serverSupportedTypes, browserSupportedTypes));
                        return [2 /*return*/, Array.from(allTypes.values()).sort()];
                }
            });
        });
    };
    TaskSchemaUpdater.prototype.updateSchemasForRegisteredTasks = function () {
        customizedDetectedTasks.length = 0;
        var definitions = this.taskDefinitionRegistry.getAll();
        definitions.forEach(function (def) {
            var customizedDetectedTask = {
                type: 'object',
                required: ['type'],
                properties: {}
            };
            var taskType = __assign(__assign({}, defaultTaskType), { enum: [def.taskType], default: def.taskType, description: 'The task type to customize' });
            customizedDetectedTask.properties.type = taskType;
            def.properties.all.forEach(function (taskProp) {
                if (!!def.properties.required.find(function (requiredProp) { return requiredProp === taskProp; })) { // property is mandatory
                    customizedDetectedTask.required.push(taskProp);
                }
                customizedDetectedTask.properties[taskProp] = __assign({}, def.properties.schema.properties[taskProp]);
            });
            customizedDetectedTask.properties.label = taskLabel;
            customizedDetectedTask.properties.problemMatcher = problemMatcher;
            customizedDetectedTask.properties.presentation = presentation;
            customizedDetectedTask.properties.options = commandOptionsSchema;
            customizedDetectedTask.properties.group = group;
            customizedDetectedTask.properties.detail = detail;
            customizedDetectedTask.additionalProperties = true;
            customizedDetectedTasks.push(customizedDetectedTask);
        });
    };
    /** Returns the task's JSON schema */
    TaskSchemaUpdater.prototype.getTaskSchema = function () {
        return {
            type: 'object',
            properties: {
                version: {
                    type: 'string'
                },
                tasks: {
                    type: 'array',
                    items: __assign({}, common_1.deepClone(taskConfigurationSchema))
                },
                inputs: variable_input_schema_1.inputsSchema.definitions.inputs
            },
            additionalProperties: false
        };
    };
    /** Gets the most up-to-date names of problem matchers from the registry and update the task schema */
    TaskSchemaUpdater.prototype.updateProblemMatcherNames = function () {
        var matcherNames = this.problemMatcherRegistry.getAll().map(function (m) { return m.name.startsWith('$') ? m.name : "$" + m.name; });
        problemMatcherNames.length = 0;
        problemMatcherNames.push.apply(problemMatcherNames, __spread(matcherNames));
        this.update();
    };
    TaskSchemaUpdater.prototype.updateSupportedTaskTypes = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.updateSchemasForRegisteredTasks();
                this.update();
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_1.inject(common_1.InMemoryResources),
        __metadata("design:type", common_1.InMemoryResources)
    ], TaskSchemaUpdater.prototype, "inmemoryResources", void 0);
    __decorate([
        inversify_1.inject(task_problem_matcher_registry_1.ProblemMatcherRegistry),
        __metadata("design:type", task_problem_matcher_registry_1.ProblemMatcherRegistry)
    ], TaskSchemaUpdater.prototype, "problemMatcherRegistry", void 0);
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], TaskSchemaUpdater.prototype, "taskDefinitionRegistry", void 0);
    __decorate([
        inversify_1.inject(common_2.TaskServer),
        __metadata("design:type", Object)
    ], TaskSchemaUpdater.prototype, "taskServer", void 0);
    TaskSchemaUpdater = __decorate([
        inversify_1.injectable()
    ], TaskSchemaUpdater);
    return TaskSchemaUpdater;
}());
exports.TaskSchemaUpdater = TaskSchemaUpdater;
var commandSchema = {
    type: 'string',
    description: 'The actual command or script to execute'
};
var commandArgSchema = {
    type: 'array',
    description: 'A list of strings, each one being one argument to pass to the command',
    items: {
        type: 'string'
    }
};
var commandOptionsSchema = {
    type: 'object',
    description: 'The command options used when the command is executed',
    properties: {
        cwd: {
            type: 'string',
            description: 'The directory in which the command will be executed',
            default: '${workspaceFolder}'
        },
        env: {
            type: 'object',
            description: 'The environment of the executed program or shell. If omitted the parent process\' environment is used'
        },
        shell: {
            type: 'object',
            description: 'Configuration of the shell when task type is `shell`',
            properties: {
                executable: {
                    type: 'string',
                    description: 'The shell to use'
                },
                args: {
                    type: 'array',
                    description: "The arguments to be passed to the shell executable to run in command mode\n                        (e.g ['-c'] for bash or ['/S', '/C'] for cmd.exe)",
                    items: {
                        type: 'string'
                    }
                }
            }
        }
    }
};
var problemMatcherNames = [];
var defaultTaskTypes = ['shell', 'process'];
var supportedTaskTypes = __spread(defaultTaskTypes);
var taskLabel = {
    type: 'string',
    description: 'A unique string that identifies the task that is also used as task\'s user interface label'
};
var defaultTaskType = {
    type: 'string',
    enum: supportedTaskTypes,
    default: defaultTaskTypes[0],
    description: 'Determines what type of process will be used to execute the task. Only shell types will have output shown on the user interface'
};
var commandAndArgs = {
    command: commandSchema,
    args: commandArgSchema,
    options: commandOptionsSchema
};
var group = {
    oneOf: [
        {
            type: 'string'
        },
        {
            type: 'object',
            properties: {
                kind: {
                    type: 'string',
                    default: 'none',
                    description: 'The task\'s execution group.'
                },
                isDefault: {
                    type: 'boolean',
                    default: false,
                    description: 'Defines if this task is the default task in the group.'
                }
            }
        }
    ],
    enum: [
        { kind: 'build', isDefault: true },
        { kind: 'test', isDefault: true },
        'build',
        'test',
        'none'
    ],
    enumDescriptions: [
        'Marks the task as the default build task.',
        'Marks the task as the default test task.',
        'Marks the task as a build task accessible through the \'Run Build Task\' command.',
        'Marks the task as a test task accessible through the \'Run Test Task\' command.',
        'Assigns the task to no group'
    ],
    // eslint-disable-next-line max-len
    description: 'Defines to which execution group this task belongs to. It supports "build" to add it to the build group and "test" to add it to the test group.'
};
var problemPattern = {
    default: {
        regexp: '^([^\\\\s].*)\\\\((\\\\d+,\\\\d+)\\\\):\\\\s*(.*)$',
        file: 1,
        location: 2,
        message: 3
    },
    type: 'object',
    properties: {
        regexp: {
            type: 'string',
            description: 'The regular expression to find an error, warning or info in the output.'
        },
        kind: {
            type: 'string',
            description: 'whether the pattern matches a location (file and line) or only a file.'
        },
        file: {
            type: 'integer',
            description: 'The match group index of the filename. If omitted 1 is used.'
        },
        location: {
            type: 'integer',
            // eslint-disable-next-line max-len
            description: 'The match group index of the problem\'s location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.'
        },
        line: {
            type: 'integer',
            description: 'The match group index of the problem\'s line. Defaults to 2'
        },
        column: {
            type: 'integer',
            description: 'The match group index of the problem\'s line character. Defaults to 3'
        },
        endLine: {
            type: 'integer',
            description: 'The match group index of the problem\'s end line. Defaults to undefined'
        },
        endColumn: {
            type: 'integer',
            description: 'The match group index of the problem\'s end line character. Defaults to undefined'
        },
        severity: {
            type: 'integer',
            description: 'The match group index of the problem\'s severity. Defaults to undefined'
        },
        code: {
            type: 'integer',
            description: 'The match group index of the problem\'s code. Defaults to undefined'
        },
        message: {
            type: 'integer',
            description: 'The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.'
        },
        loop: {
            type: 'boolean',
            // eslint-disable-next-line max-len
            description: 'In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.'
        }
    }
};
var multiLineProblemPattern = {
    type: 'array',
    items: problemPattern
};
var watchingPattern = {
    type: 'object',
    additionalProperties: false,
    properties: {
        regexp: {
            type: 'string',
            description: 'The regular expression to detect the begin or end of a background task.'
        },
        file: {
            type: 'integer',
            description: 'The match group index of the filename. Can be omitted.'
        },
    }
};
var patternType = {
    anyOf: [
        {
            type: 'string',
            description: 'The name of a contributed or predefined pattern'
        },
        problemPattern,
        multiLineProblemPattern
    ],
    description: 'A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.'
};
var problemMatcherObject = {
    type: 'object',
    properties: {
        base: {
            type: 'string',
            enum: problemMatcherNames,
            description: 'The name of a base problem matcher to use.'
        },
        owner: {
            type: 'string',
            description: 'The owner of the problem inside Code. Can be omitted if base is specified. Defaults to \'external\' if omitted and base is not specified.'
        },
        source: {
            type: 'string',
            description: 'A human-readable string describing the source of this diagnostic, e.g. \'typescript\' or \'super lint\'.'
        },
        severity: {
            type: 'string',
            enum: ['error', 'warning', 'info'],
            description: 'The default severity for captures problems. Is used if the pattern doesn\'t define a match group for severity.'
        },
        applyTo: {
            type: 'string',
            enum: ['allDocuments', 'openDocuments', 'closedDocuments'],
            description: 'Controls if a problem reported on a text document is applied only to open, closed or all documents.'
        },
        pattern: patternType,
        fileLocation: {
            oneOf: [
                {
                    type: 'string',
                    enum: ['absolute', 'relative', 'autoDetect']
                },
                {
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                }
            ],
            description: 'Defines how file names reported in a problem pattern should be interpreted.'
        },
        background: {
            type: 'object',
            additionalProperties: false,
            description: 'Patterns to track the begin and end of a matcher active on a background task.',
            properties: {
                activeOnStart: {
                    type: 'boolean',
                    description: 'If set to true the background monitor is in active mode when the task starts. This is equals of issuing a line that matches the beginsPattern'
                },
                beginsPattern: {
                    oneOf: [
                        {
                            type: 'string'
                        },
                        watchingPattern
                    ],
                    description: 'If matched in the output the start of a background task is signaled.'
                },
                endsPattern: {
                    oneOf: [
                        {
                            type: 'string'
                        },
                        watchingPattern
                    ],
                    description: 'If matched in the output the end of a background task is signaled.'
                }
            }
        },
        watching: {
            type: 'object',
            additionalProperties: false,
            deprecationMessage: 'The watching property is deprecated. Use background instead.',
            description: 'Patterns to track the begin and end of a watching matcher.',
            properties: {
                activeOnStart: {
                    type: 'boolean',
                    description: 'If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern'
                },
                beginsPattern: {
                    oneOf: [
                        {
                            type: 'string'
                        },
                        watchingPattern
                    ],
                    description: 'If matched in the output the start of a watching task is signaled.'
                },
                endsPattern: {
                    oneOf: [
                        {
                            type: 'string'
                        },
                        watchingPattern
                    ],
                    description: 'If matched in the output the end of a watching task is signaled.'
                }
            }
        }
    }
};
var problemMatcher = {
    anyOf: [
        {
            type: 'string',
            description: 'Name of the problem matcher to parse the output of the task',
            enum: problemMatcherNames
        },
        {
            type: 'array',
            description: 'Name(s) of the problem matcher(s) to parse the output of the task',
            items: {
                type: 'string',
                enum: problemMatcherNames
            }
        },
        problemMatcherObject,
        {
            type: 'array',
            description: 'User defined problem matcher(s) to parse the output of the task',
            items: problemMatcherObject
        }
    ]
};
var presentation = {
    type: 'object',
    default: {
        echo: true,
        reveal: 'always',
        focus: false,
        panel: 'shared',
        showReuseMessage: true,
        clear: false
    },
    description: 'Configures the panel that is used to present the task\'s output and reads its input.',
    additionalProperties: true,
    properties: {
        echo: {
            type: 'boolean',
            default: true,
            description: 'Controls whether the executed command is echoed to the panel. Default is true.'
        },
        focus: {
            type: 'boolean',
            default: false,
            description: 'Controls whether the panel takes focus. Default is false. If set to true the panel is revealed as well.'
        },
        reveal: {
            type: 'string',
            enum: ['always', 'silent', 'never'],
            enumDescriptions: [
                'Always reveals the terminal when this task is executed.',
                'Only reveals the terminal if the task exits with an error or the problem matcher finds an error.',
                'Never reveals the terminal when this task is executed.'
            ],
            default: 'always',
            description: 'Controls whether the terminal running the task is revealed or not. May be overridden by option \"revealProblems\". Default is \"always\".'
        },
        panel: {
            type: 'string',
            enum: ['shared', 'dedicated', 'new'],
            enumDescriptions: [
                'The terminal is shared and the output of other task runs are added to the same terminal.',
                // eslint-disable-next-line max-len
                'The terminal is dedicated to a specific task. If that task is executed again, the terminal is reused. However, the output of a different task is presented in a different terminal.',
                'Every execution of that task is using a new clean terminal.'
            ],
            default: 'shared',
            description: 'Controls if the panel is shared between tasks, dedicated to this task or a new one is created on every run.'
        },
        showReuseMessage: {
            type: 'boolean',
            default: true,
            description: 'Controls whether to show the "Terminal will be reused by tasks" message.'
        },
        clear: {
            type: 'boolean',
            default: false,
            description: 'Controls whether the terminal is cleared before this task is run.'
        }
    }
};
var detail = {
    type: 'string',
    description: 'An optional description of a task that shows in the Run Task quick pick as a detail.'
};
var taskIdentifier = {
    type: 'object',
    additionalProperties: true,
    properties: {
        type: {
            type: 'string',
            description: 'The task identifier.'
        }
    }
};
var processTaskConfigurationSchema = {
    type: 'object',
    required: ['type', 'label', 'command'],
    properties: __assign(__assign({ label: taskLabel, type: defaultTaskType }, commandAndArgs), { isBackground: {
            type: 'boolean',
            default: false,
            description: 'Whether the executed task is kept alive and is running in the background.'
        }, dependsOn: {
            anyOf: [
                {
                    type: 'string',
                    description: 'Another task this task depends on.'
                },
                taskIdentifier,
                {
                    type: 'array',
                    description: 'The other tasks this task depends on.',
                    items: {
                        anyOf: [
                            {
                                type: 'string'
                            },
                            taskIdentifier
                        ]
                    }
                }
            ],
            description: 'Either a string representing another task or an array of other tasks that this task depends on.'
        }, dependsOrder: {
            type: 'string',
            enum: ['parallel', 'sequence'],
            enumDescriptions: [
                'Run all dependsOn tasks in parallel.',
                'Run all dependsOn tasks in sequence.'
            ],
            default: 'parallel',
            description: 'Determines the order of the dependsOn tasks for this task. Note that this property is not recursive.'
        }, windows: {
            type: 'object',
            description: 'Windows specific command configuration that overrides the command, args, and options',
            properties: commandAndArgs
        }, osx: {
            type: 'object',
            description: 'MacOS specific command configuration that overrides the command, args, and options',
            properties: commandAndArgs
        }, linux: {
            type: 'object',
            description: 'Linux specific command configuration that overrides the default command, args, and options',
            properties: commandAndArgs
        }, group: group,
        problemMatcher: problemMatcher,
        presentation: presentation,
        detail: detail }),
    additionalProperties: true
};
var customizedDetectedTasks = [];
var customSchemas = [];
var taskConfigurationSchema = {
    $id: exports.taskSchemaId,
    anyOf: __spread([processTaskConfigurationSchema], customizedDetectedTasks, customSchemas)
};


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-service.js":
/*!**************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-service.js ***!
  \**************************************************************/
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
exports.TaskService = exports.TaskEndedTypes = void 0;
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var opener_service_1 = __webpack_require__(/*! @theia/core/lib/browser/opener-service */ "./node_modules/@theia/core/lib/browser/opener-service.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var message_service_1 = __webpack_require__(/*! @theia/core/lib/common/message-service */ "./node_modules/@theia/core/lib/common/message-service.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "./node_modules/@theia/core/lib/common/promise-util.js");
var quick_pick_service_1 = __webpack_require__(/*! @theia/core/lib/common/quick-pick-service */ "./node_modules/@theia/core/lib/common/quick-pick-service.js");
var label_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/label-provider */ "./node_modules/@theia/core/lib/browser/label-provider.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var problem_manager_1 = __webpack_require__(/*! @theia/markers/lib/browser/problem/problem-manager */ "./node_modules/@theia/markers/lib/browser/problem/problem-manager.js");
var terminal_service_1 = __webpack_require__(/*! @theia/terminal/lib/browser/base/terminal-service */ "./node_modules/@theia/terminal/lib/browser/base/terminal-service.js");
var browser_3 = __webpack_require__(/*! @theia/variable-resolver/lib/browser */ "./node_modules/@theia/variable-resolver/lib/browser/index.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "./node_modules/@theia/workspace/lib/browser/workspace-service.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var vscode_languageserver_types_1 = __webpack_require__(/*! vscode-languageserver-types */ "./node_modules/vscode-languageserver-types/lib/esm/main.js");
var common_2 = __webpack_require__(/*! ../common */ "./node_modules/@theia/task/lib/common/index.js");
var task_watcher_1 = __webpack_require__(/*! ../common/task-watcher */ "./node_modules/@theia/task/lib/common/task-watcher.js");
var provided_task_configurations_1 = __webpack_require__(/*! ./provided-task-configurations */ "./node_modules/@theia/task/lib/browser/provided-task-configurations.js");
var task_configurations_1 = __webpack_require__(/*! ./task-configurations */ "./node_modules/@theia/task/lib/browser/task-configurations.js");
var task_contribution_1 = __webpack_require__(/*! ./task-contribution */ "./node_modules/@theia/task/lib/browser/task-contribution.js");
var task_definition_registry_1 = __webpack_require__(/*! ./task-definition-registry */ "./node_modules/@theia/task/lib/browser/task-definition-registry.js");
var task_name_resolver_1 = __webpack_require__(/*! ./task-name-resolver */ "./node_modules/@theia/task/lib/browser/task-name-resolver.js");
var task_source_resolver_1 = __webpack_require__(/*! ./task-source-resolver */ "./node_modules/@theia/task/lib/browser/task-source-resolver.js");
var task_problem_matcher_registry_1 = __webpack_require__(/*! ./task-problem-matcher-registry */ "./node_modules/@theia/task/lib/browser/task-problem-matcher-registry.js");
var task_schema_updater_1 = __webpack_require__(/*! ./task-schema-updater */ "./node_modules/@theia/task/lib/browser/task-schema-updater.js");
var task_configuration_manager_1 = __webpack_require__(/*! ./task-configuration-manager */ "./node_modules/@theia/task/lib/browser/task-configuration-manager.js");
var problem_widget_1 = __webpack_require__(/*! @theia/markers/lib/browser/problem/problem-widget */ "./node_modules/@theia/markers/lib/browser/problem/problem-widget.js");
var task_node_1 = __webpack_require__(/*! ./task-node */ "./node_modules/@theia/task/lib/browser/task-node.js");
var monaco_workspace_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-workspace */ "./node_modules/@theia/monaco/lib/browser/monaco-workspace.js");
var task_terminal_widget_manager_1 = __webpack_require__(/*! ./task-terminal-widget-manager */ "./node_modules/@theia/task/lib/browser/task-terminal-widget-manager.js");
var TaskEndedTypes;
(function (TaskEndedTypes) {
    TaskEndedTypes[TaskEndedTypes["TaskExited"] = 0] = "TaskExited";
    TaskEndedTypes[TaskEndedTypes["BackgroundTaskEnded"] = 1] = "BackgroundTaskEnded";
})(TaskEndedTypes = exports.TaskEndedTypes || (exports.TaskEndedTypes = {}));
var TaskService = /** @class */ (function () {
    function TaskService() {
        /**
         * The last executed task.
         */
        this.lastTask = undefined;
        this.cachedRecentTasks = [];
        this.runningTasks = new Map();
    }
    TaskService.prototype.init = function () {
        var _this = this;
        this.getRunningTasks().then(function (tasks) {
            return tasks.forEach(function (task) {
                if (!_this.runningTasks.has(task.taskId)) {
                    _this.runningTasks.set(task.taskId, {
                        exitCode: new promise_util_1.Deferred(), terminateSignal: new promise_util_1.Deferred(),
                        isBackgroundTaskEnded: new promise_util_1.Deferred()
                    });
                }
            });
        });
        // notify user that task has started
        this.taskWatcher.onTaskCreated(function (event) {
            if (!_this.isEventForThisClient(event.ctx)) {
                return;
            }
            _this.runningTasks.set(event.taskId, {
                exitCode: new promise_util_1.Deferred(),
                terminateSignal: new promise_util_1.Deferred(),
                isBackgroundTaskEnded: new promise_util_1.Deferred()
            });
            var taskConfig = event.config;
            var taskIdentifier = taskConfig ? _this.getTaskIdentifier(taskConfig) : event.taskId.toString();
            _this.messageService.info("Task '" + taskIdentifier + "' has been started.");
        });
        this.taskWatcher.onOutputProcessed(function (event) { return __awaiter(_this, void 0, void 0, function () {
            var runningTasksInfo, matchedRunningTaskInfo_1, isTaskActiveAndOutputSilent_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isEventForThisClient(event.ctx)) {
                            return [2 /*return*/];
                        }
                        if (!event.problems) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getRunningTasks()];
                    case 1:
                        runningTasksInfo = _a.sent();
                        matchedRunningTaskInfo_1 = runningTasksInfo.find(function (taskInfo) {
                            var taskConfig = taskInfo.config;
                            return _this.taskDefinitionRegistry.compareTasks(taskConfig, event.config);
                        });
                        isTaskActiveAndOutputSilent_1 = matchedRunningTaskInfo_1 &&
                            matchedRunningTaskInfo_1.config.presentation && matchedRunningTaskInfo_1.config.presentation.reveal === common_2.RevealKind.Silent;
                        event.problems.forEach(function (problem) {
                            var existingMarkers = _this.problemManager.findMarkers({ owner: problem.description.owner });
                            var uris = new Set();
                            existingMarkers.forEach(function (marker) { return uris.add(marker.uri); });
                            if (common_2.ProblemMatchData.is(problem) && problem.resource) {
                                // When task.presentation.reveal === RevealKind.Silent, put focus on the terminal only if it is an error
                                if (isTaskActiveAndOutputSilent_1 && problem.marker.severity === vscode_languageserver_types_1.DiagnosticSeverity.Error) {
                                    var terminalId = matchedRunningTaskInfo_1.terminalId;
                                    if (terminalId) {
                                        var terminal = _this.terminalService.getByTerminalId(terminalId);
                                        if (terminal) {
                                            var focus_1 = !!matchedRunningTaskInfo_1.config.presentation.focus;
                                            if (focus_1) { // assign focus to the terminal if presentation.focus is true
                                                _this.terminalService.open(terminal, { mode: 'activate' });
                                            }
                                            else { // show the terminal but not assign focus
                                                _this.terminalService.open(terminal, { mode: 'reveal' });
                                            }
                                        }
                                    }
                                }
                                var uri_2 = new uri_1.default(problem.resource.path).withScheme(problem.resource.scheme);
                                var document_1 = _this.monacoWorkspace.getTextDocument(uri_2.toString());
                                if (problem.description.applyTo === common_2.ApplyToKind.openDocuments && !!document_1 ||
                                    problem.description.applyTo === common_2.ApplyToKind.closedDocuments && !document_1 ||
                                    problem.description.applyTo === common_2.ApplyToKind.allDocuments) {
                                    if (uris.has(uri_2.toString())) {
                                        var newData = __spread(existingMarkers
                                            .filter(function (marker) { return marker.uri === uri_2.toString(); })
                                            .map(function (markerData) { return markerData.data; }), [
                                            problem.marker
                                        ]);
                                        _this.problemManager.setMarkers(uri_2, problem.description.owner, newData);
                                    }
                                    else {
                                        _this.problemManager.setMarkers(uri_2, problem.description.owner, [problem.marker]);
                                    }
                                }
                            }
                            else { // should have received an event for finding the "background task begins" pattern
                                uris.forEach(function (uriString) { return _this.problemManager.setMarkers(new uri_1.default(uriString), problem.description.owner, []); });
                            }
                        });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
        this.taskWatcher.onBackgroundTaskEnded(function (event) {
            if (!_this.isEventForThisClient(event.ctx)) {
                return;
            }
            if (!_this.runningTasks.has(event.taskId)) {
                _this.runningTasks.set(event.taskId, {
                    exitCode: new promise_util_1.Deferred(),
                    terminateSignal: new promise_util_1.Deferred(),
                    isBackgroundTaskEnded: new promise_util_1.Deferred()
                });
            }
            _this.runningTasks.get(event.taskId).isBackgroundTaskEnded.resolve(true);
        });
        // notify user that task has finished
        this.taskWatcher.onTaskExit(function (event) {
            if (!_this.isEventForThisClient(event.ctx)) {
                return;
            }
            if (!_this.runningTasks.has(event.taskId)) {
                _this.runningTasks.set(event.taskId, {
                    exitCode: new promise_util_1.Deferred(),
                    terminateSignal: new promise_util_1.Deferred(),
                    isBackgroundTaskEnded: new promise_util_1.Deferred()
                });
            }
            _this.runningTasks.get(event.taskId).exitCode.resolve(event.code);
            _this.runningTasks.get(event.taskId).terminateSignal.resolve(event.signal);
            setTimeout(function () { return _this.runningTasks.delete(event.taskId); }, 60 * 1000);
            var taskConfig = event.config;
            var taskIdentifier = taskConfig ? _this.getTaskIdentifier(taskConfig) : event.taskId.toString();
            if (event.code !== undefined) {
                var message = "Task '" + taskIdentifier + "' has exited with code " + event.code + ".";
                if (event.code === 0) {
                    _this.messageService.info(message);
                }
                else {
                    var eventTaskConfig = event.config;
                    if (eventTaskConfig && eventTaskConfig.presentation && eventTaskConfig.presentation.reveal === common_2.RevealKind.Silent && event.terminalId) {
                        var terminal = _this.terminalService.getByTerminalId(event.terminalId);
                        var focus_2 = !!eventTaskConfig.presentation.focus;
                        if (terminal) {
                            if (focus_2) { // assign focus to the terminal if presentation.focus is true
                                _this.terminalService.open(terminal, { mode: 'activate' });
                            }
                            else { // show the terminal but not assign focus
                                _this.terminalService.open(terminal, { mode: 'reveal' });
                            }
                        }
                    }
                    _this.messageService.error(message);
                }
            }
            else if (event.signal !== undefined) {
                _this.messageService.info("Task '" + taskIdentifier + "' was terminated by signal " + event.signal + ".");
            }
            else {
                console.error('Invalid TaskExitedEvent received, neither code nor signal is set.');
            }
        });
    };
    TaskService.prototype.getTaskIdentifier = function (taskConfig) {
        var taskName = this.taskNameResolver.resolve(taskConfig);
        var sourceStrUri = this.taskSourceResolver.resolve(taskConfig);
        return taskName + " (" + this.labelProvider.getName(new uri_1.default(sourceStrUri)) + ")";
    };
    /**
     * Client should call this method to indicate that a new user-level action related to tasks has been started,
     * like invoking "Run Task..."
     * This method returns a token that can be used with various methods in this service.
     * As long as a client uses the same token, task providers will only asked once to contribute
     * tasks and the set of tasks will be cached. Each time the a new token is used, the cache of
     * contributed tasks is cleared.
     * @returns a token to be used for task-related actions
     */
    TaskService.prototype.startUserAction = function () {
        return this.providedTaskConfigurations.startUserAction();
    };
    /**
     * Returns an array of the task configurations configured in tasks.json and provided by the extensions.
     * @param token  The cache token for the user interaction in progress
     */
    TaskService.prototype.getTasks = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var configuredTasks, providedTasks, notCustomizedProvidedTasks;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getConfiguredTasks(token)];
                    case 1:
                        configuredTasks = _a.sent();
                        return [4 /*yield*/, this.getProvidedTasks(token)];
                    case 2:
                        providedTasks = _a.sent();
                        notCustomizedProvidedTasks = providedTasks.filter(function (provided) {
                            return !configuredTasks.some(function (configured) { return _this.taskDefinitionRegistry.compareTasks(configured, provided); });
                        });
                        return [2 /*return*/, __spread(configuredTasks, notCustomizedProvidedTasks)];
                }
            });
        });
    };
    /**
     * Returns an array of the valid task configurations which are configured in tasks.json files
     * @param token  The cache token for the user interaction in progress
     *
     */
    TaskService.prototype.getConfiguredTasks = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var invalidTaskConfig, widget, isProblemsWidgetVisible_1, currentEditorUri, isInvalidTaskConfigFileOpen, folderUri, warningMessage, validTaskConfigs;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        invalidTaskConfig = this.taskConfigurations.getInvalidTaskConfigurations()[0];
                        if (!invalidTaskConfig) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.widgetManager.getOrCreateWidget(problem_widget_1.PROBLEMS_WIDGET_ID)];
                    case 1:
                        widget = _a.sent();
                        isProblemsWidgetVisible_1 = widget && widget.isVisible;
                        currentEditorUri = this.editorManager.currentEditor && this.editorManager.currentEditor.editor.getResourceUri();
                        isInvalidTaskConfigFileOpen = false;
                        if (currentEditorUri) {
                            folderUri = this.workspaceService.getWorkspaceRootUri(currentEditorUri);
                            if (folderUri && folderUri.toString() === invalidTaskConfig._scope) {
                                isInvalidTaskConfigFileOpen = true;
                            }
                        }
                        warningMessage = 'Invalid task configurations are found. Open tasks.json and find details in the Problems view.';
                        if (!isProblemsWidgetVisible_1 || !isInvalidTaskConfigFileOpen) {
                            this.messageService.warn(warningMessage, 'Open').then(function (actionOpen) {
                                if (actionOpen) {
                                    if (invalidTaskConfig && invalidTaskConfig._scope) {
                                        _this.taskConfigurationManager.openConfiguration(invalidTaskConfig._scope);
                                    }
                                    if (!isProblemsWidgetVisible_1) {
                                        _this.commands.executeCommand('problemsView:toggle');
                                    }
                                }
                            });
                        }
                        else {
                            this.messageService.warn(warningMessage);
                        }
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.taskConfigurations.getTasks(token)];
                    case 3:
                        validTaskConfigs = _a.sent();
                        return [2 /*return*/, validTaskConfigs];
                }
            });
        });
    };
    /**
     * Returns an array of the task configurations which are provided by the extensions.
     * @param token  The cache token for the user interaction in progress
     */
    TaskService.prototype.getProvidedTasks = function (token) {
        return this.providedTaskConfigurations.getTasks(token);
    };
    TaskService.prototype.addRecentTasks = function (tasks) {
        var _this = this;
        if (Array.isArray(tasks)) {
            tasks.forEach(function (task) { return _this.addRecentTasks(task); });
        }
        else {
            var ind = this.cachedRecentTasks.findIndex(function (recent) { return _this.taskDefinitionRegistry.compareTasks(recent, tasks); });
            if (ind >= 0) {
                this.cachedRecentTasks.splice(ind, 1);
            }
            this.cachedRecentTasks.unshift(tasks);
        }
    };
    Object.defineProperty(TaskService.prototype, "recentTasks", {
        get: function () {
            return this.cachedRecentTasks;
        },
        set: function (recent) {
            this.cachedRecentTasks = recent;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clears the list of recently used tasks.
     */
    TaskService.prototype.clearRecentTasks = function () {
        this.cachedRecentTasks = [];
    };
    /**
     * Open user ser
     */
    TaskService.prototype.openUserTasks = function () {
        return this.taskConfigurations.openUserTasks();
    };
    /**
     * Returns a task configuration provided by an extension by task source, scope and label.
     * If there are no task configuration, returns undefined.
     * @param token  The cache token for the user interaction in progress
     * @param source The source for configured tasks
     * @param label  The label of the task to find
     * @param scope  The task scope to look in
     */
    TaskService.prototype.getProvidedTask = function (token, source, label, scope) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.providedTaskConfigurations.getTask(token, source, label, scope)];
            });
        });
    };
    /** Returns an array of running tasks 'TaskInfo' objects */
    TaskService.prototype.getRunningTasks = function () {
        return this.taskServer.getTasks(this.getContext());
    };
    /** Returns an array of task types that are registered, including the default types */
    TaskService.prototype.getRegisteredTaskTypes = function () {
        return this.taskSchemaUpdater.getRegisteredTaskTypes();
    };
    /**
     * Get the last executed task.
     *
     * @returns the last executed task or `undefined`.
     */
    TaskService.prototype.getLastTask = function () {
        return this.lastTask;
    };
    /**
     * Runs a task, by task configuration label.
     * Note, it looks for a task configured in tasks.json only.
     * @param token  The cache token for the user interaction in progress
     * @param scope The scope where to look for tasks
     * @param taskLabel the label to look for
     */
    TaskService.prototype.runConfiguredTask = function (token, scope, taskLabel) {
        return __awaiter(this, void 0, void 0, function () {
            var task;
            return __generator(this, function (_a) {
                task = this.taskConfigurations.getTask(scope, taskLabel);
                if (!task) {
                    this.logger.error("Can't get task launch configuration for label: " + taskLabel);
                    return [2 /*return*/];
                }
                this.run(token, task._source, taskLabel, scope);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Run the last executed task.
     * @param token  The cache token for the user interaction in progress
     */
    TaskService.prototype.runLastTask = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, source, taskLabel, scope;
            return __generator(this, function (_b) {
                if (!this.lastTask) {
                    return [2 /*return*/];
                }
                _a = this.lastTask, source = _a.source, taskLabel = _a.taskLabel, scope = _a.scope;
                return [2 /*return*/, this.run(token, source, taskLabel, scope)];
            });
        });
    };
    /**
     * Runs a task, by the source and label of the task configuration.
     * It looks for configured and detected tasks.
     * @param token  The cache token for the user interaction in progress
     * @param source The source for configured tasks
     * @param taskLabel The label to look for
     * @param scope  The scope where to look for tasks
     */
    TaskService.prototype.run = function (token, source, taskLabel, scope) {
        return __awaiter(this, void 0, void 0, function () {
            var task, customizationObject, items, selected, matcherNames, resolvedMatchers, runTaskOption;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        task = this.taskConfigurations.getTask(scope, taskLabel);
                        if (!!task) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getProvidedTask(token, source, taskLabel, scope)];
                    case 1:
                        task = _a.sent();
                        if (!!task) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.taskConfigurations.getCustomizedTask(token, scope, taskLabel)];
                    case 2:
                        task = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!task) {
                            this.logger.error("Can't get task launch configuration for label: " + taskLabel);
                            return [2 /*return*/];
                        }
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.getTaskCustomization(task)];
                    case 5:
                        customizationObject = _a.sent();
                        if (!!customizationObject.problemMatcher) return [3 /*break*/, 7];
                        items = this.getCustomizeProblemMatcherItems();
                        return [4 /*yield*/, this.quickPick.show(items, {
                                placeholder: 'Select for which kind of errors and warnings to scan the task output'
                            })];
                    case 6:
                        selected = _a.sent();
                        if (selected) {
                            if (selected.problemMatchers) {
                                matcherNames = [];
                                if (selected.problemMatchers && selected.problemMatchers.length === 0) { // never parse output for this task
                                    matcherNames = [];
                                }
                                else if (selected.problemMatchers && selected.problemMatchers.length > 0) { // continue with user-selected parser
                                    matcherNames = selected.problemMatchers.map(function (matcher) { return matcher.name; });
                                }
                                customizationObject.problemMatcher = matcherNames;
                                // write the selected matcher (or the decision of "never parse") into the `tasks.json`
                                this.updateTaskConfiguration(token, task, { problemMatcher: matcherNames });
                            }
                            else if (selected.learnMore) { // user wants to learn more about parsing task output
                                opener_service_1.open(this.openerService, new uri_1.default('https://code.visualstudio.com/docs/editor/tasks#_processing-task-output-with-problem-matchers'));
                            }
                            // else, continue the task with no parser
                        }
                        else { // do not start the task in case that the user did not select any item from the list
                            return [2 /*return*/];
                        }
                        _a.label = 7;
                    case 7: return [4 /*yield*/, this.resolveProblemMatchers(task, customizationObject)];
                    case 8:
                        resolvedMatchers = _a.sent();
                        runTaskOption = {
                            customization: __assign(__assign({}, customizationObject), { problemMatcher: resolvedMatchers })
                        };
                        if (task.dependsOn) {
                            return [2 /*return*/, this.runCompoundTask(token, task, runTaskOption)];
                        }
                        else {
                            return [2 /*return*/, this.runTask(task, runTaskOption).catch(function (error) {
                                    console.error('Error at launching task', error);
                                    return undefined;
                                })];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Runs a compound task
     * @param token  The cache token for the user interaction in progress
     * @param task The task to be executed
     * @param option options for executing the task
     */
    TaskService.prototype.runCompoundTask = function (token, task, option) {
        return __awaiter(this, void 0, void 0, function () {
            var tasks, rootNode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getWorkspaceTasks(token, task._scope)];
                    case 1:
                        tasks = _a.sent();
                        try {
                            rootNode = new task_node_1.TaskNode(task, [], []);
                            this.detectDirectedAcyclicGraph(task, rootNode, tasks);
                        }
                        catch (error) {
                            console.error("Error at launching task '" + task.label + "'", error);
                            this.messageService.error(error.message);
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, this.runTasksGraph(task, tasks, option).catch(function (error) {
                                console.error("Error at launching task '" + task.label + "'", error);
                                return undefined;
                            })];
                }
            });
        });
    };
    /**
     * A recursive function that runs a task and all its sub tasks that it depends on.
     * A task can be executed only when all of its dependencies have been executed, or when it doesn’t have any dependencies at all.
     */
    TaskService.prototype.runTasksGraph = function (task, tasks, option) {
        return __awaiter(this, void 0, void 0, function () {
            var dependentTasks, i, taskIdentifier, dependentTask, taskCustomization, resolvedMatchers, promises, taskIdentifier, dependentTask, taskCustomization, resolvedMatchers, taskInfo, getExitCodePromise, isBackgroundTaskEndedPromise, taskEndedInfo;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(task && task.dependsOn)) return [3 /*break*/, 13];
                        if (!(Array.isArray(task.dependsOn) && task.dependsOn.length > 0)) return [3 /*break*/, 9];
                        dependentTasks = [];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < task.dependsOn.length)) return [3 /*break*/, 6];
                        taskIdentifier = task.dependsOn[i];
                        dependentTask = this.getDependentTask(taskIdentifier, tasks);
                        return [4 /*yield*/, this.getTaskCustomization(dependentTask)];
                    case 2:
                        taskCustomization = _a.sent();
                        return [4 /*yield*/, this.resolveProblemMatchers(dependentTask, taskCustomization)];
                    case 3:
                        resolvedMatchers = _a.sent();
                        dependentTasks.push({ 'task': dependentTask, 'taskCustomization': taskCustomization, 'resolvedMatchers': resolvedMatchers });
                        if (!(task.dependsOrder && task.dependsOrder === common_2.DependsOrder.Sequence)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.runTasksGraph(dependentTask, tasks, {
                                customization: __assign(__assign({}, taskCustomization), { problemMatcher: resolvedMatchers })
                            })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6:
                        if (!((!task.dependsOrder) || (task.dependsOrder && task.dependsOrder === common_2.DependsOrder.Parallel))) return [3 /*break*/, 8];
                        promises = dependentTasks.map(function (item) {
                            return _this.runTasksGraph(item.task, tasks, {
                                customization: __assign(__assign({}, item.taskCustomization), { problemMatcher: item.resolvedMatchers })
                            });
                        });
                        return [4 /*yield*/, Promise.all(promises)];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [3 /*break*/, 13];
                    case 9:
                        if (!!Array.isArray(task.dependsOn)) return [3 /*break*/, 13];
                        taskIdentifier = task.dependsOn;
                        dependentTask = this.getDependentTask(taskIdentifier, tasks);
                        return [4 /*yield*/, this.getTaskCustomization(dependentTask)];
                    case 10:
                        taskCustomization = _a.sent();
                        return [4 /*yield*/, this.resolveProblemMatchers(dependentTask, taskCustomization)];
                    case 11:
                        resolvedMatchers = _a.sent();
                        return [4 /*yield*/, this.runTasksGraph(dependentTask, tasks, {
                                customization: __assign(__assign({}, taskCustomization), { problemMatcher: resolvedMatchers })
                            })];
                    case 12:
                        _a.sent();
                        _a.label = 13;
                    case 13: return [4 /*yield*/, this.runTask(task, option)];
                    case 14:
                        taskInfo = _a.sent();
                        if (!taskInfo) return [3 /*break*/, 16];
                        getExitCodePromise = this.getExitCode(taskInfo.taskId).then(function (result) { return ({ taskEndedType: TaskEndedTypes.TaskExited, value: result }); });
                        isBackgroundTaskEndedPromise = this.isBackgroundTaskEnded(taskInfo.taskId).then(function (result) {
                            return ({ taskEndedType: TaskEndedTypes.BackgroundTaskEnded, value: result });
                        });
                        return [4 /*yield*/, Promise.race([getExitCodePromise, isBackgroundTaskEndedPromise])];
                    case 15:
                        taskEndedInfo = _a.sent();
                        if ((taskEndedInfo.taskEndedType === TaskEndedTypes.TaskExited && taskEndedInfo.value !== 0) ||
                            (taskEndedInfo.taskEndedType === TaskEndedTypes.BackgroundTaskEnded && !taskEndedInfo.value)) {
                            throw new Error('The task: ' + task.label + ' terminated with exit code ' + taskEndedInfo.value + '.');
                        }
                        _a.label = 16;
                    case 16: return [2 /*return*/, taskInfo];
                }
            });
        });
    };
    /**
     * Creates a graph of dependencies tasks from the root task and verify there is no DAG (Directed Acyclic Graph).
     * In case of detection of a circular dependency, an error is thrown with a message which describes the detected circular reference.
     */
    TaskService.prototype.detectDirectedAcyclicGraph = function (task, taskNode, tasks) {
        if (task && task.dependsOn) {
            // In case the 'dependsOn' is an array
            if (Array.isArray(task.dependsOn) && task.dependsOn.length > 0) {
                for (var i = 0; i < task.dependsOn.length; i++) {
                    var childNode = this.createChildTaskNode(task, taskNode, task.dependsOn[i], tasks);
                    this.detectDirectedAcyclicGraph(childNode.taskConfiguration, childNode.node, tasks);
                }
            }
            else if (!Array.isArray(task.dependsOn)) {
                var childNode = this.createChildTaskNode(task, taskNode, task.dependsOn, tasks);
                this.detectDirectedAcyclicGraph(childNode.taskConfiguration, childNode.node, tasks);
            }
        }
    };
    // 'childTaskIdentifier' may be a string (a task label) or a JSON object which represents a TaskIdentifier (e.g. {"type":"npm", "script":"script1"})
    TaskService.prototype.createChildTaskNode = function (task, taskNode, childTaskIdentifier, tasks) {
        var _this = this;
        var childTaskConfiguration = this.getDependentTask(childTaskIdentifier, tasks);
        // If current task and child task are identical or if
        // one of the child tasks is identical to one of the current task ancestors, then raise an error
        if (this.taskDefinitionRegistry.compareTasks(task, childTaskConfiguration) ||
            taskNode.parentsID.filter(function (t) { return _this.taskDefinitionRegistry.compareTasks(childTaskConfiguration, t); }).length > 0) {
            var fromNode = task.label;
            var toNode = childTaskConfiguration.label;
            throw new Error('Circular reference detected: ' + fromNode + ' -->  ' + toNode);
        }
        var childNode = new task_node_1.TaskNode(childTaskConfiguration, [], Object.assign([], taskNode.parentsID));
        childNode.addParentDependency(taskNode.taskId);
        taskNode.addChildDependency(childNode);
        return { 'taskConfiguration': childTaskConfiguration, 'node': childNode };
    };
    /**
     * Gets task configuration by task label or by a JSON object which represents a task identifier
     *
     * @param taskIdentifier The task label (string) or a JSON object which represents a TaskIdentifier (e.g. {"type":"npm", "script":"script1"})
     * @param tasks an array of the task configurations
     * @returns the correct TaskConfiguration object which matches the taskIdentifier
     */
    TaskService.prototype.getDependentTask = function (taskIdentifier, tasks) {
        var _this = this;
        var notEnoughDataError = 'The information provided in the "dependsOn" is not enough for matching the correct task !';
        var currentTaskChildConfiguration;
        if (typeof (taskIdentifier) !== 'string') {
            // TaskIdentifier object does not support tasks of type 'shell' (The same behavior as in VS Code).
            // So if we want the 'dependsOn' property to include tasks of type 'shell',
            // then we must mention their labels (in the 'dependsOn' property) and not to create a task identifier object for them.
            var taskDefinition = this.taskDefinitionRegistry.getDefinition(taskIdentifier);
            if (taskDefinition) {
                currentTaskChildConfiguration = this.getTaskByTaskIdentifierAndTaskDefinition(taskDefinition, taskIdentifier, tasks);
                if (!currentTaskChildConfiguration.type) {
                    this.messageService.error(notEnoughDataError);
                    throw new Error(notEnoughDataError);
                }
                return currentTaskChildConfiguration;
            }
            else {
                this.messageService.error(notEnoughDataError);
                throw new Error(notEnoughDataError);
            }
        }
        else {
            currentTaskChildConfiguration = tasks.filter(function (t) { return taskIdentifier === _this.taskNameResolver.resolve(t); })[0];
            return currentTaskChildConfiguration;
        }
    };
    /**
     * Gets the matched task from an array of task configurations by TaskDefinition and TaskIdentifier.
     * In case that more than one task configuration matches, we returns the first one.
     *
     * @param taskDefinition The task definition for the task configuration.
     * @param taskIdentifier The task label (string) or a JSON object which represents a TaskIdentifier (e.g. {"type":"npm", "script":"script1"})
     * @param tasks An array of task configurations.
     * @returns The correct TaskConfiguration object which matches the taskDefinition and taskIdentifier.
     */
    TaskService.prototype.getTaskByTaskIdentifierAndTaskDefinition = function (taskDefinition, taskIdentifier, tasks) {
        var identifierProperties = [];
        var relevantTasks = tasks.filter(function (t) {
            return taskDefinition && t.hasOwnProperty('taskType') &&
                taskDefinition['taskType'] === t['taskType'] &&
                t.hasOwnProperty('source') &&
                taskDefinition['source'] === t['source'];
        });
        Object.keys(taskIdentifier).forEach(function (key) {
            identifierProperties.push(key);
        });
        identifierProperties.forEach(function (key) {
            if (key === 'type' || key === 'taskType') {
                relevantTasks = relevantTasks.filter(function (t) { return (t.hasOwnProperty('type') || t.hasOwnProperty('taskType')) &&
                    ((taskIdentifier[key] === t['type']) || (taskIdentifier[key] === t['taskType'])); });
            }
            else {
                relevantTasks = relevantTasks.filter(function (t) { return t.hasOwnProperty(key) && taskIdentifier[key] === t[key]; });
            }
        });
        if (relevantTasks.length > 0) {
            return relevantTasks[0];
        }
        else {
            // return empty TaskConfiguration
            return { 'label': '', '_scope': '', 'type': '' };
        }
    };
    TaskService.prototype.runTask = function (task, option) {
        return __awaiter(this, void 0, void 0, function () {
            var runningTasksInfo, matchedRunningTaskInfo, taskName, terminalId, terminal, selectedAction;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRunningTasks()];
                    case 1:
                        runningTasksInfo = _a.sent();
                        matchedRunningTaskInfo = runningTasksInfo.find(function (taskInfo) {
                            var taskConfig = taskInfo.config;
                            return _this.taskDefinitionRegistry.compareTasks(taskConfig, task);
                        });
                        if (!matchedRunningTaskInfo) return [3 /*break*/, 6];
                        taskName = this.taskNameResolver.resolve(task);
                        terminalId = matchedRunningTaskInfo.terminalId;
                        if (terminalId) {
                            terminal = this.terminalService.getByTerminalId(terminalId);
                            if (terminal) {
                                if (common_2.TaskOutputPresentation.shouldSetFocusToTerminal(task)) { // assign focus to the terminal if presentation.focus is true
                                    this.terminalService.open(terminal, { mode: 'activate' });
                                }
                                else if (common_2.TaskOutputPresentation.shouldAlwaysRevealTerminal(task)) { // show the terminal but not assign focus
                                    this.terminalService.open(terminal, { mode: 'reveal' });
                                }
                            }
                        }
                        return [4 /*yield*/, this.messageService.info("The task '" + taskName + "' is already active", 'Terminate Task', 'Restart Task')];
                    case 2:
                        selectedAction = _a.sent();
                        if (!(selectedAction === 'Terminate Task')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.terminateTask(matchedRunningTaskInfo)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        if (selectedAction === 'Restart Task') {
                            return [2 /*return*/, this.restartTask(matchedRunningTaskInfo, option)];
                        }
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6: // run task as the task is not active
                    return [2 /*return*/, this.doRunTask(task, option)];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Terminates a task that is actively running.
     * @param activeTaskInfo the TaskInfo of the task that is actively running
     */
    TaskService.prototype.terminateTask = function (activeTaskInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var taskId;
            return __generator(this, function (_a) {
                taskId = activeTaskInfo.taskId;
                return [2 /*return*/, this.kill(taskId)];
            });
        });
    };
    /**
     * Terminates a task that is actively running, and restarts it.
     * @param activeTaskInfo the TaskInfo of the task that is actively running
     */
    TaskService.prototype.restartTask = function (activeTaskInfo, option) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.terminateTask(activeTaskInfo)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.doRunTask(activeTaskInfo.config, option)];
                }
            });
        });
    };
    TaskService.prototype.doRunTask = function (task, option) {
        return __awaiter(this, void 0, void 0, function () {
            var taskDefinition_1, resolvedTask;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (option && option.customization) {
                            taskDefinition_1 = this.taskDefinitionRegistry.getDefinition(task);
                            if (taskDefinition_1) { // use the customization object to override the task config
                                Object.keys(option.customization).forEach(function (customizedProperty) {
                                    // properties used to define the task cannot be customized
                                    if (customizedProperty !== 'type' && !taskDefinition_1.properties.all.some(function (pDefinition) { return pDefinition === customizedProperty; })) {
                                        task[customizedProperty] = option.customization[customizedProperty];
                                    }
                                });
                            }
                        }
                        return [4 /*yield*/, this.getResolvedTask(task)];
                    case 1:
                        resolvedTask = _a.sent();
                        if (!resolvedTask) return [3 /*break*/, 3];
                        // remove problem markers from the same source before running the task
                        return [4 /*yield*/, this.removeProblemMarkers(option)];
                    case 2:
                        // remove problem markers from the same source before running the task
                        _a.sent();
                        return [2 /*return*/, this.runResolvedTask(resolvedTask, option)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Runs the first task with the given label.
     *
     * @param token  The cache token for the user interaction in progress
     * @param taskLabel The label of the task to be executed
     */
    TaskService.prototype.runTaskByLabel = function (token, taskLabel) {
        return __awaiter(this, void 0, void 0, function () {
            var tasks, tasks_1, tasks_1_1, task;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getTasks(token)];
                    case 1:
                        tasks = _b.sent();
                        try {
                            for (tasks_1 = __values(tasks), tasks_1_1 = tasks_1.next(); !tasks_1_1.done; tasks_1_1 = tasks_1.next()) {
                                task = tasks_1_1.value;
                                if (task.label === taskLabel) {
                                    return [2 /*return*/, this.runTask(task)];
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (tasks_1_1 && !tasks_1_1.done && (_a = tasks_1.return)) _a.call(tasks_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Runs a task identified by the given identifier, but only if found in the give workspace folder
     *
     * @param token  The cache token for the user interaction in progress
     * @param workspaceFolderUri  The folder to restrict the search to
     * @param taskIdentifier The identifier to look for
     */
    TaskService.prototype.runWorkspaceTask = function (token, workspaceFolderUri, taskIdentifier) {
        return __awaiter(this, void 0, void 0, function () {
            var tasks, task, taskCustomization, resolvedMatchers, rootNode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getWorkspaceTasks(token, workspaceFolderUri)];
                    case 1:
                        tasks = _a.sent();
                        task = this.getDependentTask(taskIdentifier, tasks);
                        if (!task) {
                            return [2 /*return*/, undefined];
                        }
                        return [4 /*yield*/, this.getTaskCustomization(task)];
                    case 2:
                        taskCustomization = _a.sent();
                        return [4 /*yield*/, this.resolveProblemMatchers(task, taskCustomization)];
                    case 3:
                        resolvedMatchers = _a.sent();
                        try {
                            rootNode = new task_node_1.TaskNode(task, [], []);
                            this.detectDirectedAcyclicGraph(task, rootNode, tasks);
                        }
                        catch (error) {
                            this.logger.error(error.message);
                            this.messageService.error(error.message);
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, this.runTasksGraph(task, tasks, {
                                customization: __assign(__assign({}, taskCustomization), { problemMatcher: resolvedMatchers })
                            }).catch(function (error) {
                                console.log(error.message);
                                return undefined;
                            })];
                }
            });
        });
    };
    /**
     * Updates the task configuration in the `tasks.json`.
     * The task config, together with updates, will be written into the `tasks.json` if it is not found in the file.
     *
     * @param token  The cache token for the user interaction in progress
     * @param task task that the updates will be applied to
     * @param update the updates to be applied
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TaskService.prototype.updateTaskConfiguration = function (token, task, update) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (update.problemMatcher) {
                    if (Array.isArray(update.problemMatcher)) {
                        update.problemMatcher.forEach(function (name, index) {
                            if (!name.startsWith('$')) {
                                update.problemMatcher[index] = "$" + update.problemMatcher[index];
                            }
                        });
                    }
                    else if (!update.problemMatcher.startsWith('$')) {
                        update.problemMatcher = "$" + update.problemMatcher;
                    }
                }
                this.taskConfigurations.updateTaskConfig(token, task, update);
                return [2 /*return*/];
            });
        });
    };
    TaskService.prototype.getWorkspaceTasks = function (token, restrictToFolder) {
        return __awaiter(this, void 0, void 0, function () {
            var tasks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTasks(token)];
                    case 1:
                        tasks = _a.sent();
                        // if we pass undefined, return everything, otherwise only tasks with the same uri or workspace/global scope tasks
                        return [2 /*return*/, tasks.filter(function (t) { return typeof t._scope !== 'string' || t._scope === restrictToFolder; })];
                }
            });
        });
    };
    TaskService.prototype.resolveProblemMatchers = function (task, customizationObject) {
        return __awaiter(this, void 0, void 0, function () {
            var notResolvedMatchers, resolvedMatchers, notResolvedMatchers_1, notResolvedMatchers_1_1, matcher, resolvedMatcher, scope, options, resolvedPrefix, e_2_1;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        notResolvedMatchers = customizationObject.problemMatcher ?
                            (Array.isArray(customizationObject.problemMatcher) ? customizationObject.problemMatcher : [customizationObject.problemMatcher]) : undefined;
                        resolvedMatchers = [];
                        if (!notResolvedMatchers) return [3 /*break*/, 14];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 11, 12, 13]);
                        notResolvedMatchers_1 = __values(notResolvedMatchers), notResolvedMatchers_1_1 = notResolvedMatchers_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!notResolvedMatchers_1_1.done) return [3 /*break*/, 10];
                        matcher = notResolvedMatchers_1_1.value;
                        resolvedMatcher = void 0;
                        return [4 /*yield*/, this.problemMatcherRegistry.onReady()];
                    case 3:
                        _b.sent();
                        if (!(typeof matcher === 'string')) return [3 /*break*/, 4];
                        resolvedMatcher = this.problemMatcherRegistry.get(matcher);
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.problemMatcherRegistry.getProblemMatcherFromContribution(matcher)];
                    case 5:
                        resolvedMatcher = _b.sent();
                        _b.label = 6;
                    case 6:
                        if (!resolvedMatcher) return [3 /*break*/, 9];
                        scope = task._scope || task._source;
                        if (!(resolvedMatcher.filePrefix && scope)) return [3 /*break*/, 8];
                        options = {
                            context: new uri_1.default(scope).withScheme('file'),
                            configurationSection: 'tasks'
                        };
                        return [4 /*yield*/, this.variableResolverService.resolve(resolvedMatcher.filePrefix, options)];
                    case 7:
                        resolvedPrefix = _b.sent();
                        Object.assign(resolvedMatcher, { filePrefix: resolvedPrefix });
                        _b.label = 8;
                    case 8:
                        resolvedMatchers.push(resolvedMatcher);
                        _b.label = 9;
                    case 9:
                        notResolvedMatchers_1_1 = notResolvedMatchers_1.next();
                        return [3 /*break*/, 2];
                    case 10: return [3 /*break*/, 13];
                    case 11:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 13];
                    case 12:
                        try {
                            if (notResolvedMatchers_1_1 && !notResolvedMatchers_1_1.done && (_a = notResolvedMatchers_1.return)) _a.call(notResolvedMatchers_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 13: return [3 /*break*/, 15];
                    case 14:
                        resolvedMatchers = undefined;
                        _b.label = 15;
                    case 15: return [2 /*return*/, resolvedMatchers];
                }
            });
        });
    };
    TaskService.prototype.getTaskCustomization = function (task) {
        return __awaiter(this, void 0, void 0, function () {
            var customizationObject, customizationFound;
            return __generator(this, function (_a) {
                customizationObject = { type: '', _scope: task._scope };
                customizationFound = this.taskConfigurations.getCustomizationForTask(task);
                if (customizationFound) {
                    Object.assign(customizationObject, customizationFound);
                }
                else {
                    Object.assign(customizationObject, {
                        type: task.type,
                        problemMatcher: task.problemMatcher
                    });
                }
                return [2 /*return*/, customizationObject];
            });
        });
    };
    TaskService.prototype.removeProblemMarkers = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            var matchersFromOption, _loop_1, this_1, matchersFromOption_1, matchersFromOption_1_1, matcher;
            var e_3, _a;
            var _this = this;
            return __generator(this, function (_b) {
                if (option && option.customization) {
                    matchersFromOption = option.customization.problemMatcher || [];
                    _loop_1 = function (matcher) {
                        if (matcher && matcher.owner) {
                            var existingMarkers = this_1.problemManager.findMarkers({ owner: matcher.owner });
                            var uris_1 = new Set();
                            existingMarkers.forEach(function (marker) { return uris_1.add(marker.uri); });
                            uris_1.forEach(function (uriString) { return _this.problemManager.setMarkers(new uri_1.default(uriString), matcher.owner, []); });
                        }
                    };
                    this_1 = this;
                    try {
                        for (matchersFromOption_1 = __values(matchersFromOption), matchersFromOption_1_1 = matchersFromOption_1.next(); !matchersFromOption_1_1.done; matchersFromOption_1_1 = matchersFromOption_1.next()) {
                            matcher = matchersFromOption_1_1.value;
                            _loop_1(matcher);
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (matchersFromOption_1_1 && !matchersFromOption_1_1.done && (_a = matchersFromOption_1.return)) _a.call(matchersFromOption_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    TaskService.prototype.getResolvedTask = function (task) {
        return __awaiter(this, void 0, void 0, function () {
            var resolver, resolvedTask, _a, error_1, errMessage;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        resolver = undefined;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.taskResolverRegistry.getResolver(task.type)];
                    case 2:
                        resolver = _b.sent();
                        if (!resolver) return [3 /*break*/, 4];
                        return [4 /*yield*/, resolver.resolveTask(task)];
                    case 3:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _a = task;
                        _b.label = 5;
                    case 5:
                        resolvedTask = _a;
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _b.sent();
                        errMessage = "Error resolving task '" + task.label + "': " + error_1;
                        this.logger.error(errMessage);
                        resolvedTask = task;
                        return [3 /*break*/, 7];
                    case 7:
                        this.addRecentTasks(task);
                        return [2 /*return*/, resolvedTask];
                }
            });
        });
    };
    /**
     * Runs the resolved task and opens terminal widget if the task is based on a terminal process
     * @param resolvedTask the resolved task
     * @param option options to run the resolved task
     */
    TaskService.prototype.runResolvedTask = function (resolvedTask, option) {
        return __awaiter(this, void 0, void 0, function () {
            var source, taskLabel, taskInfo, error_2, errorStr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        source = resolvedTask._source;
                        taskLabel = resolvedTask.label;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.taskServer.run(resolvedTask, this.getContext(), option)];
                    case 2:
                        taskInfo = _a.sent();
                        this.lastTask = { source: source, taskLabel: taskLabel, scope: resolvedTask._scope };
                        this.logger.debug("Task created. Task id: " + taskInfo.taskId);
                        /**
                         * open terminal widget if the task is based on a terminal process (type: 'shell' or 'process')
                         *
                         * @todo Use a different mechanism to determine if the task should be attached?
                         *       Reason: Maybe a new task type wants to also be displayed in a terminal.
                         */
                        if (typeof taskInfo.terminalId === 'number') {
                            this.attach(taskInfo.terminalId, taskInfo.taskId);
                        }
                        return [2 /*return*/, taskInfo];
                    case 3:
                        error_2 = _a.sent();
                        errorStr = "Error launching task '" + taskLabel + "': " + error_2.message;
                        this.logger.error(errorStr);
                        this.messageService.error(errorStr);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.getCustomizeProblemMatcherItems = function () {
        var items = [];
        items.push({
            label: 'Continue without scanning the task output',
            value: { problemMatchers: undefined }
        });
        items.push({
            label: 'Never scan the task output',
            value: { problemMatchers: [] }
        });
        items.push({
            label: 'Learn more about scanning the task output',
            value: { problemMatchers: undefined, learnMore: true }
        });
        items.push({ type: 'separator', label: 'registered parsers' });
        var registeredProblemMatchers = this.problemMatcherRegistry.getAll();
        items.push.apply(items, __spread(registeredProblemMatchers.map(function (matcher) {
            return ({
                label: matcher.label,
                value: { problemMatchers: [matcher] },
                description: matcher.name.startsWith('$') ? matcher.name : "$" + matcher.name
            });
        })));
        return items;
    };
    /**
     * Run selected text in the last active terminal.
     */
    TaskService.prototype.runSelectedText = function () {
        return __awaiter(this, void 0, void 0, function () {
            var startLine, startCharacter, endLine, endCharacter, selectedRange, selectedText, terminal, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.editorManager.currentEditor) {
                            return [2 /*return*/];
                        }
                        startLine = this.editorManager.currentEditor.editor.selection.start.line;
                        startCharacter = this.editorManager.currentEditor.editor.selection.start.character;
                        endLine = this.editorManager.currentEditor.editor.selection.end.line;
                        endCharacter = this.editorManager.currentEditor.editor.selection.end.character;
                        selectedRange = vscode_languageserver_types_1.Range.create(startLine, startCharacter, endLine, endCharacter);
                        // if no text is selected, default to selecting entire line
                        if (startLine === endLine && startCharacter === endCharacter) {
                            selectedRange = vscode_languageserver_types_1.Range.create(startLine, 0, endLine + 1, 0);
                        }
                        selectedText = this.editorManager.currentEditor.editor.document.getText(selectedRange).trimRight() + '\n';
                        terminal = this.terminalService.lastUsedTerminal;
                        _a = !terminal || terminal.kind !== 'user';
                        if (_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, terminal.hasChildProcesses()];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        if (!_a) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.terminalService.newTerminal({ created: new Date().toString() })];
                    case 3:
                        terminal = (_b.sent());
                        return [4 /*yield*/, terminal.start()];
                    case 4:
                        _b.sent();
                        this.terminalService.activateTerminal(terminal);
                        _b.label = 5;
                    case 5:
                        terminal.sendText(selectedText);
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.attach = function (terminalId, taskId) {
        return __awaiter(this, void 0, void 0, function () {
            var runningTasks, taskInfo, widgetOpenMode, terminalWidget, widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRunningTasks()];
                    case 1:
                        runningTasks = _a.sent();
                        taskInfo = runningTasks.find(function (t) { return t.taskId === taskId; });
                        widgetOpenMode = 'open';
                        if (taskInfo) {
                            terminalWidget = this.terminalService.getByTerminalId(terminalId);
                            if (terminalWidget) {
                                this.messageService.error('Task is already running in terminal');
                                return [2 /*return*/, this.terminalService.open(terminalWidget, { mode: 'activate' })];
                            }
                            if (common_2.TaskOutputPresentation.shouldAlwaysRevealTerminal(taskInfo.config)) {
                                if (common_2.TaskOutputPresentation.shouldSetFocusToTerminal(taskInfo.config)) { // assign focus to the terminal if presentation.focus is true
                                    widgetOpenMode = 'activate';
                                }
                                else { // show the terminal but not assign focus
                                    widgetOpenMode = 'reveal';
                                }
                            }
                        }
                        return [4 /*yield*/, this.taskTerminalWidgetManager.open({
                                created: new Date().toString(),
                                id: this.getTerminalWidgetId(terminalId),
                                title: taskInfo
                                    ? "Task: " + taskInfo.config.label
                                    : "Task: #" + taskId,
                                destroyTermOnClose: true
                            }, {
                                widgetOptions: { area: 'bottom' },
                                mode: widgetOpenMode,
                                taskInfo: taskInfo
                            })];
                    case 2:
                        widget = _a.sent();
                        widget.start(terminalId);
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.getTerminalWidgetId = function (terminalId) {
        var terminalWidget = this.terminalService.getByTerminalId(terminalId);
        if (terminalWidget) {
            return terminalWidget.id;
        }
    };
    /**
     * Opens an editor to configure the given task.
     *
     * @param token  The cache token for the user interaction in progress
     * @param task The task to configure
     */
    TaskService.prototype.configure = function (token, task) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.taskConfigurations.configure(token, task)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.isEventForThisClient = function (context) {
        if (context === this.getContext()) {
            return true;
        }
        return false;
    };
    TaskService.prototype.taskConfigurationChanged = function (event) {
        // do nothing for now
    };
    TaskService.prototype.getContext = function () {
        return this.workspaceService.workspace && this.workspaceService.workspace.uri;
    };
    /** Kill task for a given id if task is found */
    TaskService.prototype.kill = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.taskServer.kill(id)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        this.logger.error("Error killing task '" + id + "': " + error_3);
                        this.messageService.error("Error killing task '" + id + "': " + error_3);
                        return [2 /*return*/];
                    case 3:
                        this.logger.debug("Task killed. Task id: " + id);
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.isBackgroundTaskEnded = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var completedTask;
            return __generator(this, function (_a) {
                completedTask = this.runningTasks.get(id);
                return [2 /*return*/, completedTask && completedTask.isBackgroundTaskEnded.promise];
            });
        });
    };
    TaskService.prototype.getExitCode = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var completedTask;
            return __generator(this, function (_a) {
                completedTask = this.runningTasks.get(id);
                return [2 /*return*/, completedTask && completedTask.exitCode.promise];
            });
        });
    };
    TaskService.prototype.getTerminateSignal = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var completedTask;
            return __generator(this, function (_a) {
                completedTask = this.runningTasks.get(id);
                return [2 /*return*/, completedTask && completedTask.terminateSignal.promise];
            });
        });
    };
    __decorate([
        inversify_1.inject(browser_1.FrontendApplication),
        __metadata("design:type", browser_1.FrontendApplication)
    ], TaskService.prototype, "app", void 0);
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], TaskService.prototype, "shell", void 0);
    __decorate([
        inversify_1.inject(common_2.TaskServer),
        __metadata("design:type", Object)
    ], TaskService.prototype, "taskServer", void 0);
    __decorate([
        inversify_1.inject(common_1.ILogger),
        inversify_1.named('task'),
        __metadata("design:type", Object)
    ], TaskService.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(browser_1.WidgetManager),
        __metadata("design:type", browser_1.WidgetManager)
    ], TaskService.prototype, "widgetManager", void 0);
    __decorate([
        inversify_1.inject(task_watcher_1.TaskWatcher),
        __metadata("design:type", task_watcher_1.TaskWatcher)
    ], TaskService.prototype, "taskWatcher", void 0);
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], TaskService.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], TaskService.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(task_configurations_1.TaskConfigurations),
        __metadata("design:type", task_configurations_1.TaskConfigurations)
    ], TaskService.prototype, "taskConfigurations", void 0);
    __decorate([
        inversify_1.inject(provided_task_configurations_1.ProvidedTaskConfigurations),
        __metadata("design:type", provided_task_configurations_1.ProvidedTaskConfigurations)
    ], TaskService.prototype, "providedTaskConfigurations", void 0);
    __decorate([
        inversify_1.inject(browser_3.VariableResolverService),
        __metadata("design:type", browser_3.VariableResolverService)
    ], TaskService.prototype, "variableResolverService", void 0);
    __decorate([
        inversify_1.inject(task_contribution_1.TaskResolverRegistry),
        __metadata("design:type", task_contribution_1.TaskResolverRegistry)
    ], TaskService.prototype, "taskResolverRegistry", void 0);
    __decorate([
        inversify_1.inject(terminal_service_1.TerminalService),
        __metadata("design:type", Object)
    ], TaskService.prototype, "terminalService", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], TaskService.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(problem_manager_1.ProblemManager),
        __metadata("design:type", problem_manager_1.ProblemManager)
    ], TaskService.prototype, "problemManager", void 0);
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], TaskService.prototype, "taskDefinitionRegistry", void 0);
    __decorate([
        inversify_1.inject(task_problem_matcher_registry_1.ProblemMatcherRegistry),
        __metadata("design:type", task_problem_matcher_registry_1.ProblemMatcherRegistry)
    ], TaskService.prototype, "problemMatcherRegistry", void 0);
    __decorate([
        inversify_1.inject(quick_pick_service_1.QuickPickService),
        __metadata("design:type", Object)
    ], TaskService.prototype, "quickPick", void 0);
    __decorate([
        inversify_1.inject(opener_service_1.OpenerService),
        __metadata("design:type", Object)
    ], TaskService.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(task_name_resolver_1.TaskNameResolver),
        __metadata("design:type", task_name_resolver_1.TaskNameResolver)
    ], TaskService.prototype, "taskNameResolver", void 0);
    __decorate([
        inversify_1.inject(task_source_resolver_1.TaskSourceResolver),
        __metadata("design:type", task_source_resolver_1.TaskSourceResolver)
    ], TaskService.prototype, "taskSourceResolver", void 0);
    __decorate([
        inversify_1.inject(task_schema_updater_1.TaskSchemaUpdater),
        __metadata("design:type", task_schema_updater_1.TaskSchemaUpdater)
    ], TaskService.prototype, "taskSchemaUpdater", void 0);
    __decorate([
        inversify_1.inject(task_configuration_manager_1.TaskConfigurationManager),
        __metadata("design:type", task_configuration_manager_1.TaskConfigurationManager)
    ], TaskService.prototype, "taskConfigurationManager", void 0);
    __decorate([
        inversify_1.inject(common_1.CommandService),
        __metadata("design:type", Object)
    ], TaskService.prototype, "commands", void 0);
    __decorate([
        inversify_1.inject(label_provider_1.LabelProvider),
        __metadata("design:type", label_provider_1.LabelProvider)
    ], TaskService.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(monaco_workspace_1.MonacoWorkspace),
        __metadata("design:type", monaco_workspace_1.MonacoWorkspace)
    ], TaskService.prototype, "monacoWorkspace", void 0);
    __decorate([
        inversify_1.inject(task_terminal_widget_manager_1.TaskTerminalWidgetManager),
        __metadata("design:type", task_terminal_widget_manager_1.TaskTerminalWidgetManager)
    ], TaskService.prototype, "taskTerminalWidgetManager", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TaskService.prototype, "init", null);
    TaskService = __decorate([
        inversify_1.injectable()
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-source-resolver.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-source-resolver.js ***!
  \**********************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSourceResolver = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! ../common */ "./node_modules/@theia/task/lib/common/index.js");
var task_definition_registry_1 = __webpack_require__(/*! ./task-definition-registry */ "./node_modules/@theia/task/lib/browser/task-definition-registry.js");
var TaskSourceResolver = /** @class */ (function () {
    function TaskSourceResolver() {
    }
    /**
     * Returns task source to display.
     */
    TaskSourceResolver.prototype.resolve = function (task) {
        if (typeof task._scope === 'string') {
            return task._scope;
        }
        else {
            return common_1.TaskScope[task._scope];
        }
    };
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], TaskSourceResolver.prototype, "taskDefinitionRegistry", void 0);
    TaskSourceResolver = __decorate([
        inversify_1.injectable()
    ], TaskSourceResolver);
    return TaskSourceResolver;
}());
exports.TaskSourceResolver = TaskSourceResolver;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-templates.js":
/*!****************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-templates.js ***!
  \****************************************************************/
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
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskTemplateSelector = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var dotnetBuild = {
    id: 'dotnetCore',
    label: '.NET Core',
    sort: 'NET Core',
    autoDetect: false,
    description: 'Executes .NET Core build command',
    content: [
        '{',
        '\t// See https://go.microsoft.com/fwlink/?LinkId=733558',
        '\t// for the documentation about the tasks.json format',
        '\t"version": "2.0.0",',
        '\t"tasks": [',
        '\t\t{',
        '\t\t\t"label": "build",',
        '\t\t\t"command": "dotnet",',
        '\t\t\t"type": "shell",',
        '\t\t\t"args": [',
        '\t\t\t\t"build",',
        '\t\t\t\t// Ask dotnet build to generate full paths for file names.',
        '\t\t\t\t"/property:GenerateFullPaths=true",',
        '\t\t\t\t// Do not generate summary otherwise it leads to duplicate errors in Problems panel',
        '\t\t\t\t"/consoleloggerparameters:NoSummary"',
        '\t\t\t],',
        '\t\t\t"group": "build",',
        '\t\t\t"presentation": {',
        '\t\t\t\t"reveal": "silent"',
        '\t\t\t},',
        '\t\t\t"problemMatcher": "$msCompile"',
        '\t\t}',
        '\t]',
        '}'
    ].join('\n')
};
var msbuild = {
    id: 'msbuild',
    label: 'MSBuild',
    autoDetect: false,
    description: 'Executes the build target',
    content: [
        '{',
        '\t// See https://go.microsoft.com/fwlink/?LinkId=733558',
        '\t// for the documentation about the tasks.json format',
        '\t"version": "2.0.0",',
        '\t"tasks": [',
        '\t\t{',
        '\t\t\t"label": "build",',
        '\t\t\t"type": "shell",',
        '\t\t\t"command": "msbuild",',
        '\t\t\t"args": [',
        '\t\t\t\t// Ask msbuild to generate full paths for file names.',
        '\t\t\t\t"/property:GenerateFullPaths=true",',
        '\t\t\t\t"/t:build",',
        '\t\t\t\t// Do not generate summary otherwise it leads to duplicate errors in Problems panel',
        '\t\t\t\t"/consoleloggerparameters:NoSummary"',
        '\t\t\t],',
        '\t\t\t"group": "build",',
        '\t\t\t"presentation": {',
        '\t\t\t\t// Reveal the output only if unrecognized errors occur.',
        '\t\t\t\t"reveal": "silent"',
        '\t\t\t},',
        '\t\t\t// Use the standard MS compiler pattern to detect errors, warnings and infos',
        '\t\t\t"problemMatcher": "$msCompile"',
        '\t\t}',
        '\t]',
        '}'
    ].join('\n')
};
var maven = {
    id: 'maven',
    label: 'maven',
    sort: 'MVN',
    autoDetect: false,
    description: 'Executes common maven commands',
    content: [
        '{',
        '\t// See https://go.microsoft.com/fwlink/?LinkId=733558',
        '\t// for the documentation about the tasks.json format',
        '\t"version": "2.0.0",',
        '\t"tasks": [',
        '\t\t{',
        '\t\t\t"label": "verify",',
        '\t\t\t"type": "shell",',
        '\t\t\t"command": "mvn -B verify",',
        '\t\t\t"group": "build"',
        '\t\t},',
        '\t\t{',
        '\t\t\t"label": "test",',
        '\t\t\t"type": "shell",',
        '\t\t\t"command": "mvn -B test",',
        '\t\t\t"group": "test"',
        '\t\t}',
        '\t]',
        '}'
    ].join('\n')
};
var command = {
    id: 'externalCommand',
    label: 'Others',
    autoDetect: false,
    description: 'Example to run an arbitrary external command',
    content: [
        '{',
        '\t// See https://go.microsoft.com/fwlink/?LinkId=733558',
        '\t// for the documentation about the tasks.json format',
        '\t"version": "2.0.0",',
        '\t"tasks": [',
        '\t\t{',
        '\t\t\t"label": "echo",',
        '\t\t\t"type": "shell",',
        '\t\t\t"command": "echo Hello"',
        '\t\t}',
        '\t]',
        '}'
    ].join('\n')
};
var TaskTemplateSelector = /** @class */ (function () {
    function TaskTemplateSelector() {
    }
    TaskTemplateSelector.prototype.selectTemplates = function () {
        var templates = [
            dotnetBuild, msbuild, maven
        ].sort(function (a, b) {
            return (a.sort || a.label).localeCompare(b.sort || b.label);
        });
        templates.push(command);
        return templates.map(function (t) { return ({
            label: t.label,
            description: t.description,
            value: t
        }); });
    };
    TaskTemplateSelector = __decorate([
        inversify_1.injectable()
    ], TaskTemplateSelector);
    return TaskTemplateSelector;
}());
exports.TaskTemplateSelector = TaskTemplateSelector;


/***/ }),

/***/ "./node_modules/@theia/task/lib/browser/task-terminal-widget-manager.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/task-terminal-widget-manager.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 Ericsson and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskTerminalWidgetManager = exports.TaskTerminalWidgetOpenerOptions = exports.TaskTerminalWidget = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var terminal_service_1 = __webpack_require__(/*! @theia/terminal/lib/browser/base/terminal-service */ "./node_modules/@theia/terminal/lib/browser/base/terminal-service.js");
var common_1 = __webpack_require__(/*! ../common */ "./node_modules/@theia/task/lib/common/index.js");
var task_protocol_1 = __webpack_require__(/*! ../common/process/task-protocol */ "./node_modules/@theia/task/lib/common/process/task-protocol.js");
var task_definition_registry_1 = __webpack_require__(/*! ./task-definition-registry */ "./node_modules/@theia/task/lib/browser/task-definition-registry.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "./node_modules/@theia/workspace/lib/browser/workspace-service.js");
var TaskTerminalWidget;
(function (TaskTerminalWidget) {
    function is(widget) {
        return widget.kind === 'task';
    }
    TaskTerminalWidget.is = is;
})(TaskTerminalWidget = exports.TaskTerminalWidget || (exports.TaskTerminalWidget = {}));
var TaskTerminalWidgetOpenerOptions;
(function (TaskTerminalWidgetOpenerOptions) {
    function isDedicatedTerminal(options) {
        var taskConfig = options.taskInfo ? options.taskInfo.config : options.taskConfig;
        return !!taskConfig && !!taskConfig.presentation && taskConfig.presentation.panel === common_1.PanelKind.Dedicated;
    }
    TaskTerminalWidgetOpenerOptions.isDedicatedTerminal = isDedicatedTerminal;
    function isNewTerminal(options) {
        var taskConfig = options.taskInfo ? options.taskInfo.config : options.taskConfig;
        return !!taskConfig && !!taskConfig.presentation && taskConfig.presentation.panel === common_1.PanelKind.New;
    }
    TaskTerminalWidgetOpenerOptions.isNewTerminal = isNewTerminal;
    function isSharedTerminal(options) {
        var taskConfig = options.taskInfo ? options.taskInfo.config : options.taskConfig;
        return !!taskConfig && (taskConfig.presentation === undefined || taskConfig.presentation.panel === undefined || taskConfig.presentation.panel === common_1.PanelKind.Shared);
    }
    TaskTerminalWidgetOpenerOptions.isSharedTerminal = isSharedTerminal;
    function echoExecutedCommand(options) {
        var taskConfig = options.taskInfo ? options.taskInfo.config : options.taskConfig;
        return !!taskConfig && (taskConfig.presentation === undefined || taskConfig.presentation.echo === undefined || taskConfig.presentation.echo);
    }
    TaskTerminalWidgetOpenerOptions.echoExecutedCommand = echoExecutedCommand;
})(TaskTerminalWidgetOpenerOptions = exports.TaskTerminalWidgetOpenerOptions || (exports.TaskTerminalWidgetOpenerOptions = {}));
var TaskTerminalWidgetManager = /** @class */ (function () {
    function TaskTerminalWidgetManager() {
    }
    TaskTerminalWidgetManager.prototype.init = function () {
        var _this = this;
        this.taskWatcher.onTaskExit(function (event) {
            var e_1, _a;
            var finishedTaskId = event.taskId;
            try {
                // find the terminal where the task ran, and mark it as "idle"
                for (var _b = __values(_this.getTaskTerminalWidgets()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var terminal = _c.value;
                    if (terminal.taskId === finishedTaskId) {
                        var showReuseMessage = !!event.config && common_1.TaskOutputPresentation.shouldShowReuseMessage(event.config);
                        _this.notifyTaskFinished(terminal, showReuseMessage);
                        break;
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
        });
        this.terminalService.onDidCreateTerminal(function (widget) { return __awaiter(_this, void 0, void 0, function () {
            var terminal, didConnectListener_1, didConnectFailureListener_1;
            var _this = this;
            return __generator(this, function (_a) {
                terminal = TaskTerminalWidget.is(widget) && widget;
                if (terminal) {
                    didConnectListener_1 = terminal.onDidOpen(function () { return __awaiter(_this, void 0, void 0, function () {
                        var context, tasksInfo, taskInfo, taskConfig;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    context = this.workspaceService.workspace && this.workspaceService.workspace.uri;
                                    return [4 /*yield*/, this.taskServer.getTasks(context)];
                                case 1:
                                    tasksInfo = _a.sent();
                                    taskInfo = tasksInfo.find(function (info) { return info.terminalId === widget.terminalId; });
                                    if (taskInfo) {
                                        taskConfig = taskInfo.config;
                                        terminal.dedicated = !!taskConfig.presentation && !!taskConfig.presentation.panel && taskConfig.presentation.panel === common_1.PanelKind.Dedicated;
                                        terminal.taskId = taskInfo.taskId;
                                        terminal.taskConfig = taskConfig;
                                        terminal.busy = true;
                                    }
                                    else {
                                        this.notifyTaskFinished(terminal, true);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    didConnectFailureListener_1 = terminal.onDidOpenFailure(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.notifyTaskFinished(terminal, true);
                            return [2 /*return*/];
                        });
                    }); });
                    terminal.onDidDispose(function () {
                        didConnectListener_1.dispose();
                        didConnectFailureListener_1.dispose();
                    });
                }
                return [2 /*return*/];
            });
        }); });
    };
    TaskTerminalWidgetManager.prototype.newTaskTerminal = function (factoryOptions) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.terminalService.newTerminal(__assign(__assign({}, factoryOptions), { kind: 'task' }))];
            });
        });
    };
    TaskTerminalWidgetManager.prototype.open = function (factoryOptions, openerOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var taskInfo, taskConfig, dedicated, _a, isNew, widget;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        taskInfo = openerOptions.taskInfo;
                        taskConfig = taskInfo ? taskInfo.config : openerOptions.taskConfig;
                        dedicated = TaskTerminalWidgetOpenerOptions.isDedicatedTerminal(openerOptions);
                        if (dedicated && !taskConfig) {
                            throw new Error('"taskConfig" must be included as part of the "option.taskInfo" if "isDedicated" is true');
                        }
                        return [4 /*yield*/, this.getWidgetToRunTask(factoryOptions, openerOptions)];
                    case 1:
                        _a = _b.sent(), isNew = _a.isNew, widget = _a.widget;
                        if (isNew) {
                            this.shell.addWidget(widget, { area: openerOptions.widgetOptions ? openerOptions.widgetOptions.area : 'bottom' });
                            widget.resetTerminal();
                        }
                        else {
                            if (factoryOptions.title) {
                                widget.setTitle(factoryOptions.title);
                            }
                            if (taskConfig && common_1.TaskOutputPresentation.shouldClearTerminalBeforeRun(taskConfig)) {
                                widget.clearOutput();
                            }
                        }
                        this.terminalService.open(widget, openerOptions);
                        if (TaskTerminalWidgetOpenerOptions.echoExecutedCommand(openerOptions) &&
                            taskInfo && task_protocol_1.ProcessTaskInfo.is(taskInfo) && taskInfo.command && taskInfo.command.length > 0) {
                            widget.writeLine("\u001B[1m> Executing task: " + taskInfo.command + " <\u001B[0m\n");
                        }
                        return [2 /*return*/, widget];
                }
            });
        });
    };
    TaskTerminalWidgetManager.prototype.getWidgetToRunTask = function (factoryOptions, openerOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var reusableTerminalWidget, taskConfig, _a, _b, widget, availableWidgets, _c, _d, widget, lastUsedWidget, widget;
            var e_2, _e, e_3, _f;
            var _this = this;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        taskConfig = openerOptions.taskInfo ? openerOptions.taskInfo.config : openerOptions.taskConfig;
                        if (TaskTerminalWidgetOpenerOptions.isDedicatedTerminal(openerOptions)) {
                            try {
                                for (_a = __values(this.getTaskTerminalWidgets()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                    widget = _b.value;
                                    // to run a task whose `taskPresentation === 'dedicated'`, the terminal to be reused must be
                                    // 1) dedicated, 2) idle, 3) the one that ran the same task
                                    if (widget.dedicated &&
                                        !widget.busy &&
                                        widget.taskConfig && taskConfig &&
                                        this.taskDefinitionRegistry.compareTasks(taskConfig, widget.taskConfig)) {
                                        reusableTerminalWidget = widget;
                                        break;
                                    }
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }
                        else if (TaskTerminalWidgetOpenerOptions.isSharedTerminal(openerOptions)) {
                            availableWidgets = [];
                            try {
                                for (_c = __values(this.getTaskTerminalWidgets()), _d = _c.next(); !_d.done; _d = _c.next()) {
                                    widget = _d.value;
                                    // to run a task whose `taskPresentation === 'shared'`, the terminal to be used must be
                                    // 1) not dedicated, and 2) idle
                                    if (!widget.dedicated && !widget.busy) {
                                        availableWidgets.push(widget);
                                    }
                                }
                            }
                            catch (e_3_1) { e_3 = { error: e_3_1 }; }
                            finally {
                                try {
                                    if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                                }
                                finally { if (e_3) throw e_3.error; }
                            }
                            lastUsedWidget = availableWidgets.find(function (w) {
                                var lastUsedTerminal = _this.terminalService.lastUsedTerminal;
                                return lastUsedTerminal && lastUsedTerminal.id === w.id;
                            });
                            reusableTerminalWidget = lastUsedWidget || availableWidgets[0];
                        }
                        if (!!reusableTerminalWidget) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.newTaskTerminal(factoryOptions)];
                    case 1:
                        widget = _g.sent();
                        return [2 /*return*/, { isNew: true, widget: widget }];
                    case 2: return [2 /*return*/, { isNew: false, widget: reusableTerminalWidget }];
                }
            });
        });
    };
    TaskTerminalWidgetManager.prototype.getTaskTerminalWidgets = function () {
        return this.terminalService.all.filter(TaskTerminalWidget.is);
    };
    TaskTerminalWidgetManager.prototype.notifyTaskFinished = function (terminal, showReuseMessage) {
        terminal.busy = false;
        terminal.scrollToBottom();
        if (showReuseMessage) {
            terminal.writeLine('\x1b[1m\n\rTerminal will be reused by tasks. \x1b[0m\n');
        }
    };
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], TaskTerminalWidgetManager.prototype, "shell", void 0);
    __decorate([
        inversify_1.inject(task_definition_registry_1.TaskDefinitionRegistry),
        __metadata("design:type", task_definition_registry_1.TaskDefinitionRegistry)
    ], TaskTerminalWidgetManager.prototype, "taskDefinitionRegistry", void 0);
    __decorate([
        inversify_1.inject(terminal_service_1.TerminalService),
        __metadata("design:type", Object)
    ], TaskTerminalWidgetManager.prototype, "terminalService", void 0);
    __decorate([
        inversify_1.inject(common_1.TaskWatcher),
        __metadata("design:type", common_1.TaskWatcher)
    ], TaskTerminalWidgetManager.prototype, "taskWatcher", void 0);
    __decorate([
        inversify_1.inject(common_1.TaskServer),
        __metadata("design:type", Object)
    ], TaskTerminalWidgetManager.prototype, "taskServer", void 0);
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], TaskTerminalWidgetManager.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TaskTerminalWidgetManager.prototype, "init", null);
    TaskTerminalWidgetManager = __decorate([
        inversify_1.injectable()
    ], TaskTerminalWidgetManager);
    return TaskTerminalWidgetManager;
}());
exports.TaskTerminalWidgetManager = TaskTerminalWidgetManager;


/***/ }),

/***/ "./node_modules/@theia/task/lib/common/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@theia/task/lib/common/index.js ***!
  \******************************************************/
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
__exportStar(__webpack_require__(/*! ./task-protocol */ "./node_modules/@theia/task/lib/common/task-protocol.js"), exports);
__exportStar(__webpack_require__(/*! ./task-watcher */ "./node_modules/@theia/task/lib/common/task-watcher.js"), exports);
__exportStar(__webpack_require__(/*! ./problem-matcher-protocol */ "./node_modules/@theia/task/lib/common/problem-matcher-protocol.js"), exports);


/***/ }),

/***/ "./node_modules/@theia/task/lib/common/problem-matcher-protocol.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@theia/task/lib/common/problem-matcher-protocol.js ***!
  \*************************************************************************/
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
exports.ProblemMatchData = exports.ProblemPattern = exports.ProblemMatcher = exports.ProblemLocationKind = exports.WatchingMatcher = exports.FileLocationKind = exports.ApplyToKind = void 0;
var ApplyToKind;
(function (ApplyToKind) {
    ApplyToKind[ApplyToKind["allDocuments"] = 0] = "allDocuments";
    ApplyToKind[ApplyToKind["openDocuments"] = 1] = "openDocuments";
    ApplyToKind[ApplyToKind["closedDocuments"] = 2] = "closedDocuments";
})(ApplyToKind = exports.ApplyToKind || (exports.ApplyToKind = {}));
(function (ApplyToKind) {
    function fromString(value) {
        if (value) {
            value = value.toLowerCase();
            if (value === 'alldocuments') {
                return ApplyToKind.allDocuments;
            }
            else if (value === 'opendocuments') {
                return ApplyToKind.openDocuments;
            }
            else if (value === 'closeddocuments') {
                return ApplyToKind.closedDocuments;
            }
        }
        return undefined;
    }
    ApplyToKind.fromString = fromString;
})(ApplyToKind = exports.ApplyToKind || (exports.ApplyToKind = {}));
var FileLocationKind;
(function (FileLocationKind) {
    FileLocationKind[FileLocationKind["Auto"] = 0] = "Auto";
    FileLocationKind[FileLocationKind["Relative"] = 1] = "Relative";
    FileLocationKind[FileLocationKind["Absolute"] = 2] = "Absolute";
})(FileLocationKind = exports.FileLocationKind || (exports.FileLocationKind = {}));
(function (FileLocationKind) {
    function fromString(value) {
        value = value.toLowerCase();
        if (value === 'absolute') {
            return FileLocationKind.Absolute;
        }
        else if (value === 'relative') {
            return FileLocationKind.Relative;
        }
        else {
            return undefined;
        }
    }
    FileLocationKind.fromString = fromString;
})(FileLocationKind = exports.FileLocationKind || (exports.FileLocationKind = {}));
var WatchingMatcher;
(function (WatchingMatcher) {
    function fromWatchingMatcherContribution(value) {
        if (!value) {
            return undefined;
        }
        return {
            activeOnStart: !!value.activeOnStart,
            beginsPattern: typeof value.beginsPattern === 'string' ? { regexp: value.beginsPattern } : value.beginsPattern,
            endsPattern: typeof value.endsPattern === 'string' ? { regexp: value.endsPattern } : value.endsPattern
        };
    }
    WatchingMatcher.fromWatchingMatcherContribution = fromWatchingMatcherContribution;
})(WatchingMatcher = exports.WatchingMatcher || (exports.WatchingMatcher = {}));
var ProblemLocationKind;
(function (ProblemLocationKind) {
    ProblemLocationKind[ProblemLocationKind["File"] = 0] = "File";
    ProblemLocationKind[ProblemLocationKind["Location"] = 1] = "Location";
})(ProblemLocationKind = exports.ProblemLocationKind || (exports.ProblemLocationKind = {}));
(function (ProblemLocationKind) {
    function fromString(value) {
        value = value.toLowerCase();
        if (value === 'file') {
            return ProblemLocationKind.File;
        }
        else if (value === 'location') {
            return ProblemLocationKind.Location;
        }
        else {
            return undefined;
        }
    }
    ProblemLocationKind.fromString = fromString;
})(ProblemLocationKind = exports.ProblemLocationKind || (exports.ProblemLocationKind = {}));
var ProblemMatcher;
(function (ProblemMatcher) {
    function isWatchModeWatcher(matcher) {
        return !!matcher.watching;
    }
    ProblemMatcher.isWatchModeWatcher = isWatchModeWatcher;
})(ProblemMatcher = exports.ProblemMatcher || (exports.ProblemMatcher = {}));
var ProblemPattern;
(function (ProblemPattern) {
    function fromProblemPatternContribution(value) {
        return {
            name: value.name,
            regexp: value.regexp,
            kind: value.kind ? ProblemLocationKind.fromString(value.kind) : undefined,
            file: value.file,
            message: value.message,
            location: value.location,
            line: value.line,
            character: value.column || value.character,
            endLine: value.endLine,
            endCharacter: value.endColumn || value.endCharacter,
            code: value.code,
            severity: value.severity,
            loop: value.loop
        };
    }
    ProblemPattern.fromProblemPatternContribution = fromProblemPatternContribution;
})(ProblemPattern = exports.ProblemPattern || (exports.ProblemPattern = {}));
var ProblemMatchData;
(function (ProblemMatchData) {
    function is(data) {
        return 'marker' in data;
    }
    ProblemMatchData.is = is;
})(ProblemMatchData = exports.ProblemMatchData || (exports.ProblemMatchData = {}));


/***/ }),

/***/ "./node_modules/@theia/task/lib/common/process/task-protocol.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@theia/task/lib/common/process/task-protocol.js ***!
  \**********************************************************************/
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
exports.ProcessTaskError = exports.ProcessTaskInfo = void 0;
var application_error_1 = __webpack_require__(/*! @theia/core/lib/common/application-error */ "./node_modules/@theia/core/lib/common/application-error.js");
var ProcessTaskInfo;
(function (ProcessTaskInfo) {
    function is(info) {
        return info['processId'] !== undefined;
    }
    ProcessTaskInfo.is = is;
})(ProcessTaskInfo = exports.ProcessTaskInfo || (exports.ProcessTaskInfo = {}));
var ProcessTaskError;
(function (ProcessTaskError) {
    ProcessTaskError.CouldNotRun = application_error_1.ApplicationError.declare(1, function (code) { return ({
        message: "Error starting process (" + code + ")",
        data: { code: code }
    }); });
})(ProcessTaskError = exports.ProcessTaskError || (exports.ProcessTaskError = {}));


/***/ }),

/***/ "./node_modules/@theia/task/lib/common/task-protocol.js":
/*!**************************************************************!*\
  !*** ./node_modules/@theia/task/lib/common/task-protocol.js ***!
  \**************************************************************/
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
exports.TaskScope = exports.TaskCustomization = exports.TaskOutputPresentation = exports.PanelKind = exports.RevealKind = exports.DependsOrder = exports.TaskClient = exports.TaskServer = exports.taskPath = void 0;
exports.taskPath = '/services/task';
exports.TaskServer = Symbol('TaskServer');
exports.TaskClient = Symbol('TaskClient');
var DependsOrder;
(function (DependsOrder) {
    DependsOrder["Sequence"] = "sequence";
    DependsOrder["Parallel"] = "parallel";
})(DependsOrder = exports.DependsOrder || (exports.DependsOrder = {}));
var RevealKind;
(function (RevealKind) {
    RevealKind["Always"] = "always";
    RevealKind["Silent"] = "silent";
    RevealKind["Never"] = "never";
})(RevealKind = exports.RevealKind || (exports.RevealKind = {}));
var PanelKind;
(function (PanelKind) {
    PanelKind["Shared"] = "shared";
    PanelKind["Dedicated"] = "dedicated";
    PanelKind["New"] = "new";
})(PanelKind = exports.PanelKind || (exports.PanelKind = {}));
var TaskOutputPresentation;
(function (TaskOutputPresentation) {
    function getDefault() {
        return {
            echo: true,
            reveal: RevealKind.Always,
            focus: false,
            panel: PanelKind.Shared,
            showReuseMessage: true,
            clear: false
        };
    }
    TaskOutputPresentation.getDefault = getDefault;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function fromJson(task) {
        var outputPresentation = getDefault();
        if (task && task.presentation) {
            if (task.presentation.reveal) {
                var reveal = RevealKind.Always;
                if (task.presentation.reveal === 'silent') {
                    reveal = RevealKind.Silent;
                }
                else if (task.presentation.reveal === 'never') {
                    reveal = RevealKind.Never;
                }
                outputPresentation = __assign(__assign({}, outputPresentation), { reveal: reveal });
            }
            if (task.presentation.panel) {
                var panel = PanelKind.Shared;
                if (task.presentation.panel === 'dedicated') {
                    panel = PanelKind.Dedicated;
                }
                else if (task.presentation.panel === 'new') {
                    panel = PanelKind.New;
                }
                outputPresentation = __assign(__assign({}, outputPresentation), { panel: panel });
            }
            outputPresentation = __assign(__assign({}, outputPresentation), { echo: task.presentation.echo === undefined || task.presentation.echo, focus: shouldSetFocusToTerminal(task), showReuseMessage: shouldShowReuseMessage(task), clear: shouldClearTerminalBeforeRun(task) });
        }
        return outputPresentation;
    }
    TaskOutputPresentation.fromJson = fromJson;
    function shouldAlwaysRevealTerminal(task) {
        return !task.presentation || task.presentation.reveal === undefined || task.presentation.reveal === RevealKind.Always;
    }
    TaskOutputPresentation.shouldAlwaysRevealTerminal = shouldAlwaysRevealTerminal;
    function shouldSetFocusToTerminal(task) {
        return !!task.presentation && !!task.presentation.focus;
    }
    TaskOutputPresentation.shouldSetFocusToTerminal = shouldSetFocusToTerminal;
    function shouldClearTerminalBeforeRun(task) {
        return !!task.presentation && !!task.presentation.clear;
    }
    TaskOutputPresentation.shouldClearTerminalBeforeRun = shouldClearTerminalBeforeRun;
    function shouldShowReuseMessage(task) {
        return !task.presentation || task.presentation.showReuseMessage === undefined || !!task.presentation.showReuseMessage;
    }
    TaskOutputPresentation.shouldShowReuseMessage = shouldShowReuseMessage;
})(TaskOutputPresentation = exports.TaskOutputPresentation || (exports.TaskOutputPresentation = {}));
var TaskCustomization;
(function (TaskCustomization) {
    function isBuildTask(task) {
        return task.group === 'build' || !!task.group && typeof task.group === 'object' && task.group.kind === 'build';
    }
    TaskCustomization.isBuildTask = isBuildTask;
    function isDefaultBuildTask(task) {
        return !!task.group && typeof task.group === 'object' && task.group.kind === 'build' && task.group.isDefault;
    }
    TaskCustomization.isDefaultBuildTask = isDefaultBuildTask;
    function isTestTask(task) {
        return task.group === 'test' || !!task.group && typeof task.group === 'object' && task.group.kind === 'test';
    }
    TaskCustomization.isTestTask = isTestTask;
    function isDefaultTestTask(task) {
        return !!task.group && typeof task.group === 'object' && task.group.kind === 'test' && task.group.isDefault;
    }
    TaskCustomization.isDefaultTestTask = isDefaultTestTask;
})(TaskCustomization = exports.TaskCustomization || (exports.TaskCustomization = {}));
var TaskScope;
(function (TaskScope) {
    TaskScope[TaskScope["Workspace"] = 0] = "Workspace";
    TaskScope[TaskScope["Global"] = 1] = "Global";
})(TaskScope = exports.TaskScope || (exports.TaskScope = {}));


/***/ }),

/***/ "./node_modules/@theia/task/lib/common/task-watcher.js":
/*!*************************************************************!*\
  !*** ./node_modules/@theia/task/lib/common/task-watcher.js ***!
  \*************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskWatcher = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var TaskWatcher = /** @class */ (function () {
    function TaskWatcher() {
        this.onTaskCreatedEmitter = new event_1.Emitter();
        this.onTaskExitEmitter = new event_1.Emitter();
        this.onDidStartTaskProcessEmitter = new event_1.Emitter();
        this.onDidEndTaskProcessEmitter = new event_1.Emitter();
        this.onOutputProcessedEmitter = new event_1.Emitter();
        this.onBackgroundTaskEndedEmitter = new event_1.Emitter();
    }
    TaskWatcher.prototype.getTaskClient = function () {
        var newTaskEmitter = this.onTaskCreatedEmitter;
        var exitEmitter = this.onTaskExitEmitter;
        var taskProcessStartedEmitter = this.onDidStartTaskProcessEmitter;
        var taskProcessEndedEmitter = this.onDidEndTaskProcessEmitter;
        var outputProcessedEmitter = this.onOutputProcessedEmitter;
        var backgroundTaskEndedEmitter = this.onBackgroundTaskEndedEmitter;
        return {
            onTaskCreated: function (event) {
                newTaskEmitter.fire(event);
            },
            onTaskExit: function (event) {
                exitEmitter.fire(event);
            },
            onDidStartTaskProcess: function (event) {
                taskProcessStartedEmitter.fire(event);
            },
            onDidEndTaskProcess: function (event) {
                taskProcessEndedEmitter.fire(event);
            },
            onDidProcessTaskOutput: function (event) {
                outputProcessedEmitter.fire(event);
            },
            onBackgroundTaskEnded: function (event) {
                backgroundTaskEndedEmitter.fire(event);
            }
        };
    };
    Object.defineProperty(TaskWatcher.prototype, "onTaskCreated", {
        get: function () {
            return this.onTaskCreatedEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TaskWatcher.prototype, "onTaskExit", {
        get: function () {
            return this.onTaskExitEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TaskWatcher.prototype, "onDidStartTaskProcess", {
        get: function () {
            return this.onDidStartTaskProcessEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TaskWatcher.prototype, "onDidEndTaskProcess", {
        get: function () {
            return this.onDidEndTaskProcessEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TaskWatcher.prototype, "onOutputProcessed", {
        get: function () {
            return this.onOutputProcessedEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TaskWatcher.prototype, "onBackgroundTaskEnded", {
        get: function () {
            return this.onBackgroundTaskEndedEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    TaskWatcher = __decorate([
        inversify_1.injectable()
    ], TaskWatcher);
    return TaskWatcher;
}());
exports.TaskWatcher = TaskWatcher;


/***/ }),

/***/ "./node_modules/@theia/variable-resolver/lib/browser/variable-input-schema.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@theia/variable-resolver/lib/browser/variable-input-schema.js ***!
  \************************************************************************************/
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
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/*
 * copied from
 * https://github.com/microsoft/vscode/blob/0a34756cae4fc67739e60c708b04637089f8bb0d/src/vs/workbench/services/configurationResolver/common/configurationResolverSchema.ts#L23
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputsSchema = void 0;
var idDescription = "The input's id is used to associate an input with a variable of the form ${input:id}.";
var typeDescription = 'The type of user input prompt to use.';
var descriptionDescription = 'The description is shown when the user is prompted for input.';
var defaultDescription = 'The default value for the input.';
exports.inputsSchema = {
    definitions: {
        inputs: {
            type: 'array',
            description: 'User inputs. Used for defining user input prompts, such as free string input or a choice from several options.',
            items: {
                oneOf: [
                    {
                        type: 'object',
                        required: ['id', 'type', 'description'],
                        additionalProperties: false,
                        properties: {
                            id: {
                                type: 'string',
                                description: idDescription
                            },
                            type: {
                                type: 'string',
                                description: typeDescription,
                                enum: ['promptString'],
                                enumDescriptions: [
                                    "The 'promptString' type opens an input box to ask the user for input."
                                ]
                            },
                            description: {
                                type: 'string',
                                description: descriptionDescription
                            },
                            default: {
                                type: 'string',
                                description: defaultDescription
                            },
                        }
                    },
                    {
                        type: 'object',
                        required: ['id', 'type', 'description', 'options'],
                        additionalProperties: false,
                        properties: {
                            id: {
                                type: 'string',
                                description: idDescription
                            },
                            type: {
                                type: 'string',
                                description: typeDescription,
                                enum: ['pickString'],
                                enumDescriptions: [
                                    "The 'pickString' type shows a selection list.",
                                ]
                            },
                            description: {
                                type: 'string',
                                description: descriptionDescription
                            },
                            default: {
                                type: 'string',
                                description: defaultDescription
                            },
                            options: {
                                type: 'array',
                                description: 'An array of strings that defines the options for a quick pick.',
                                items: {
                                    type: 'string'
                                }
                            }
                        }
                    },
                    {
                        type: 'object',
                        required: ['id', 'type', 'command'],
                        additionalProperties: false,
                        properties: {
                            id: {
                                type: 'string',
                                description: idDescription
                            },
                            type: {
                                type: 'string',
                                description: typeDescription,
                                enum: ['command'],
                                enumDescriptions: [
                                    "The 'command' type executes a command.",
                                ]
                            },
                            command: {
                                type: 'string',
                                description: 'The command to execute for this input variable.'
                            },
                            args: {
                                type: 'object',
                                description: 'Optional arguments passed to the command.'
                            }
                        }
                    }
                ]
            }
        }
    }
};


/***/ })

}]);
//# sourceMappingURL=25.bundle.js.map