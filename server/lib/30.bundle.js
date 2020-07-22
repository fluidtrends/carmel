(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/@theia/debug/lib/browser/breakpoint/breakpoint-manager.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/breakpoint/breakpoint-manager.js ***!
  \********************************************************************************/
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
exports.BreakpointManager = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var marker_manager_1 = __webpack_require__(/*! @theia/markers/lib/browser/marker-manager */ "./node_modules/@theia/markers/lib/browser/marker-manager.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var breakpoint_marker_1 = __webpack_require__(/*! ./breakpoint-marker */ "./node_modules/@theia/debug/lib/browser/breakpoint/breakpoint-marker.js");
var BreakpointManager = /** @class */ (function (_super) {
    __extends(BreakpointManager, _super);
    function BreakpointManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.owner = 'breakpoint';
        _this.onDidChangeBreakpointsEmitter = new common_1.Emitter();
        _this.onDidChangeBreakpoints = _this.onDidChangeBreakpointsEmitter.event;
        _this.onDidChangeFunctionBreakpointsEmitter = new common_1.Emitter();
        _this.onDidChangeFunctionBreakpoints = _this.onDidChangeFunctionBreakpointsEmitter.event;
        _this._breakpointsEnabled = true;
        _this.exceptionBreakpoints = new Map();
        _this.functionBreakpoints = [];
        return _this;
    }
    BreakpointManager_1 = BreakpointManager;
    BreakpointManager.prototype.getKind = function () {
        return breakpoint_marker_1.BREAKPOINT_KIND;
    };
    BreakpointManager.prototype.setMarkers = function (uri, owner, newMarkers) {
        var e_1, _a, e_2, _b;
        var result = _super.prototype.setMarkers.call(this, uri, owner, newMarkers);
        var added = [];
        var removed = [];
        var changed = [];
        var oldMarkers = new Map(result.map(function (_a) {
            var data = _a.data;
            return [data.id, data];
        }));
        var ids = new Set();
        try {
            for (var newMarkers_1 = __values(newMarkers), newMarkers_1_1 = newMarkers_1.next(); !newMarkers_1_1.done; newMarkers_1_1 = newMarkers_1.next()) {
                var newMarker = newMarkers_1_1.value;
                ids.add(newMarker.id);
                if (oldMarkers.has(newMarker.id)) {
                    changed.push(newMarker);
                }
                else {
                    added.push(newMarker);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (newMarkers_1_1 && !newMarkers_1_1.done && (_a = newMarkers_1.return)) _a.call(newMarkers_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var _c = __values(oldMarkers.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), id = _e[0], data = _e[1];
                if (!ids.has(id)) {
                    removed.push(data);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.onDidChangeBreakpointsEmitter.fire({ uri: uri, added: added, removed: removed, changed: changed });
        return result;
    };
    BreakpointManager.prototype.getLineBreakpoints = function (uri, line) {
        return this.findMarkers({
            uri: uri,
            dataFilter: function (breakpoint) { return breakpoint.raw.line === line; }
        }).map(function (_a) {
            var data = _a.data;
            return data;
        });
    };
    BreakpointManager.prototype.getInlineBreakpoint = function (uri, line, column) {
        var marker = this.findMarkers({
            uri: uri,
            dataFilter: function (breakpoint) { return breakpoint.raw.line === line && breakpoint.raw.column === column; }
        })[0];
        return marker && marker.data;
    };
    BreakpointManager.prototype.getBreakpoints = function (uri) {
        return this.findMarkers({ uri: uri }).map(function (marker) { return marker.data; });
    };
    BreakpointManager.prototype.setBreakpoints = function (uri, breakpoints) {
        this.setMarkers(uri, this.owner, breakpoints.sort(function (a, b) { return (a.raw.line - b.raw.line) || ((a.raw.column || 0) - (b.raw.column || 0)); }));
    };
    BreakpointManager.prototype.addBreakpoint = function (breakpoint) {
        var uri = new uri_1.default(breakpoint.uri);
        var breakpoints = this.getBreakpoints(uri);
        var newBreakpoints = breakpoints.filter(function (_a) {
            var raw = _a.raw;
            return !(raw.line === breakpoint.raw.line && raw.column === breakpoint.raw.column);
        });
        if (breakpoints.length === newBreakpoints.length) {
            newBreakpoints.push(breakpoint);
            this.setBreakpoints(uri, newBreakpoints);
            return true;
        }
        return false;
    };
    BreakpointManager.prototype.enableAllBreakpoints = function (enabled) {
        var e_3, _a, e_4, _b, e_5, _c;
        try {
            for (var _d = __values(this.getUris()), _e = _d.next(); !_e.done; _e = _d.next()) {
                var uriString = _e.value;
                var didChange = false;
                var uri = new uri_1.default(uriString);
                var markers = this.findMarkers({ uri: uri });
                try {
                    for (var markers_1 = (e_4 = void 0, __values(markers)), markers_1_1 = markers_1.next(); !markers_1_1.done; markers_1_1 = markers_1.next()) {
                        var marker = markers_1_1.value;
                        if (marker.data.enabled !== enabled) {
                            marker.data.enabled = enabled;
                            didChange = true;
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (markers_1_1 && !markers_1_1.done && (_b = markers_1.return)) _b.call(markers_1);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                if (didChange) {
                    this.fireOnDidChangeMarkers(uri);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_3) throw e_3.error; }
        }
        var didChangeFunction = false;
        try {
            for (var _f = __values(this.getFunctionBreakpoints()), _g = _f.next(); !_g.done; _g = _f.next()) {
                var breakpoint = _g.value;
                if (breakpoint.enabled !== enabled) {
                    breakpoint.enabled = enabled;
                    didChangeFunction = true;
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
            }
            finally { if (e_5) throw e_5.error; }
        }
        if (didChangeFunction) {
            this.fireOnDidChangeMarkers(BreakpointManager_1.FUNCTION_URI);
        }
    };
    Object.defineProperty(BreakpointManager.prototype, "breakpointsEnabled", {
        get: function () {
            return this._breakpointsEnabled;
        },
        set: function (breakpointsEnabled) {
            var e_6, _a;
            if (this._breakpointsEnabled !== breakpointsEnabled) {
                this._breakpointsEnabled = breakpointsEnabled;
                try {
                    for (var _b = __values(this.getUris()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var uri = _c.value;
                        this.fireOnDidChangeMarkers(new uri_1.default(uri));
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
                this.fireOnDidChangeMarkers(BreakpointManager_1.FUNCTION_URI);
            }
        },
        enumerable: false,
        configurable: true
    });
    BreakpointManager.prototype.getExceptionBreakpoint = function (filter) {
        return this.exceptionBreakpoints.get(filter);
    };
    BreakpointManager.prototype.getExceptionBreakpoints = function () {
        return this.exceptionBreakpoints.values();
    };
    BreakpointManager.prototype.setExceptionBreakpoints = function (exceptionBreakpoints) {
        var e_7, _a, e_8, _b;
        var toRemove = new Set(this.exceptionBreakpoints.keys());
        try {
            for (var exceptionBreakpoints_1 = __values(exceptionBreakpoints), exceptionBreakpoints_1_1 = exceptionBreakpoints_1.next(); !exceptionBreakpoints_1_1.done; exceptionBreakpoints_1_1 = exceptionBreakpoints_1.next()) {
                var exceptionBreakpoint = exceptionBreakpoints_1_1.value;
                var filter = exceptionBreakpoint.raw.filter;
                toRemove.delete(filter);
                this.exceptionBreakpoints.set(filter, exceptionBreakpoint);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (exceptionBreakpoints_1_1 && !exceptionBreakpoints_1_1.done && (_a = exceptionBreakpoints_1.return)) _a.call(exceptionBreakpoints_1);
            }
            finally { if (e_7) throw e_7.error; }
        }
        try {
            for (var toRemove_1 = __values(toRemove), toRemove_1_1 = toRemove_1.next(); !toRemove_1_1.done; toRemove_1_1 = toRemove_1.next()) {
                var filter = toRemove_1_1.value;
                this.exceptionBreakpoints.delete(filter);
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (toRemove_1_1 && !toRemove_1_1.done && (_b = toRemove_1.return)) _b.call(toRemove_1);
            }
            finally { if (e_8) throw e_8.error; }
        }
        if (toRemove.size || exceptionBreakpoints.length) {
            this.fireOnDidChangeMarkers(BreakpointManager_1.EXCEPTION_URI);
        }
    };
    BreakpointManager.prototype.toggleExceptionBreakpoint = function (filter) {
        var breakpoint = this.getExceptionBreakpoint(filter);
        if (breakpoint) {
            breakpoint.enabled = !breakpoint.enabled;
            this.fireOnDidChangeMarkers(BreakpointManager_1.EXCEPTION_URI);
        }
    };
    BreakpointManager.prototype.getFunctionBreakpoints = function () {
        return this.functionBreakpoints;
    };
    BreakpointManager.prototype.setFunctionBreakpoints = function (functionBreakpoints) {
        var e_9, _a, e_10, _b;
        var oldBreakpoints = new Map(this.functionBreakpoints.map(function (b) { return [b.id, b]; }));
        this.functionBreakpoints = functionBreakpoints;
        this.fireOnDidChangeMarkers(BreakpointManager_1.FUNCTION_URI);
        var added = [];
        var removed = [];
        var changed = [];
        var ids = new Set();
        try {
            for (var functionBreakpoints_1 = __values(functionBreakpoints), functionBreakpoints_1_1 = functionBreakpoints_1.next(); !functionBreakpoints_1_1.done; functionBreakpoints_1_1 = functionBreakpoints_1.next()) {
                var newBreakpoint = functionBreakpoints_1_1.value;
                ids.add(newBreakpoint.id);
                if (oldBreakpoints.has(newBreakpoint.id)) {
                    changed.push(newBreakpoint);
                }
                else {
                    added.push(newBreakpoint);
                }
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (functionBreakpoints_1_1 && !functionBreakpoints_1_1.done && (_a = functionBreakpoints_1.return)) _a.call(functionBreakpoints_1);
            }
            finally { if (e_9) throw e_9.error; }
        }
        try {
            for (var _c = __values(oldBreakpoints.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), id = _e[0], breakpoint = _e[1];
                if (!ids.has(id)) {
                    removed.push(breakpoint);
                }
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_10) throw e_10.error; }
        }
        this.onDidChangeFunctionBreakpointsEmitter.fire({ uri: BreakpointManager_1.FUNCTION_URI, added: added, removed: removed, changed: changed });
    };
    BreakpointManager.prototype.hasBreakpoints = function () {
        return !!this.getUris().next().value || !!this.functionBreakpoints.length;
    };
    BreakpointManager.prototype.removeBreakpoints = function () {
        this.cleanAllMarkers();
        this.setFunctionBreakpoints([]);
    };
    BreakpointManager.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getData('breakpoints', {
                            breakpointsEnabled: true,
                            breakpoints: {}
                        })];
                    case 1:
                        data = _a.sent();
                        this._breakpointsEnabled = data.breakpointsEnabled;
                        // eslint-disable-next-line guard-for-in
                        for (uri in data.breakpoints) {
                            this.setBreakpoints(new uri_1.default(uri), data.breakpoints[uri]);
                        }
                        if (data.functionBreakpoints) {
                            this.setFunctionBreakpoints(data.functionBreakpoints);
                        }
                        if (data.exceptionBreakpoints) {
                            this.setExceptionBreakpoints(data.exceptionBreakpoints);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BreakpointManager.prototype.save = function () {
        var e_11, _a;
        var data = {
            breakpointsEnabled: this._breakpointsEnabled,
            breakpoints: {}
        };
        var uris = this.getUris();
        try {
            for (var uris_1 = __values(uris), uris_1_1 = uris_1.next(); !uris_1_1.done; uris_1_1 = uris_1.next()) {
                var uri = uris_1_1.value;
                data.breakpoints[uri] = this.findMarkers({ uri: new uri_1.default(uri) }).map(function (marker) { return marker.data; });
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (uris_1_1 && !uris_1_1.done && (_a = uris_1.return)) _a.call(uris_1);
            }
            finally { if (e_11) throw e_11.error; }
        }
        if (this.functionBreakpoints.length) {
            data.functionBreakpoints = this.functionBreakpoints;
        }
        if (this.exceptionBreakpoints.size) {
            data.exceptionBreakpoints = __spread(this.exceptionBreakpoints.values());
        }
        this.storage.setData('breakpoints', data);
    };
    var BreakpointManager_1;
    BreakpointManager.EXCEPTION_URI = new uri_1.default('debug:exception://');
    BreakpointManager.FUNCTION_URI = new uri_1.default('debug:function://');
    __decorate([
        inversify_1.inject(browser_1.StorageService),
        __metadata("design:type", Object)
    ], BreakpointManager.prototype, "storage", void 0);
    BreakpointManager = BreakpointManager_1 = __decorate([
        inversify_1.injectable()
    ], BreakpointManager);
    return BreakpointManager;
}(marker_manager_1.MarkerManager));
exports.BreakpointManager = BreakpointManager;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/breakpoint/breakpoint-marker.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/breakpoint/breakpoint-marker.js ***!
  \*******************************************************************************/
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
exports.FunctionBreakpoint = exports.ExceptionBreakpoint = exports.BreakpointMarker = exports.SourceBreakpoint = exports.BREAKPOINT_KIND = void 0;
var coreutils_1 = __webpack_require__(/*! @phosphor/coreutils */ "./node_modules/@phosphor/coreutils/lib/index.js");
exports.BREAKPOINT_KIND = 'breakpoint';
var SourceBreakpoint;
(function (SourceBreakpoint) {
    function create(uri, data, origin) {
        return {
            id: origin ? origin.id : coreutils_1.UUID.uuid4(),
            uri: uri.toString(),
            enabled: origin ? origin.enabled : true,
            raw: __assign(__assign({}, (origin && origin.raw)), data)
        };
    }
    SourceBreakpoint.create = create;
})(SourceBreakpoint = exports.SourceBreakpoint || (exports.SourceBreakpoint = {}));
var BreakpointMarker;
(function (BreakpointMarker) {
    function is(node) {
        return 'kind' in node && node.kind === exports.BREAKPOINT_KIND;
    }
    BreakpointMarker.is = is;
})(BreakpointMarker = exports.BreakpointMarker || (exports.BreakpointMarker = {}));
var ExceptionBreakpoint;
(function (ExceptionBreakpoint) {
    function create(data, origin) {
        return {
            enabled: origin ? origin.enabled : false,
            raw: __assign(__assign({}, (origin && origin.raw)), data)
        };
    }
    ExceptionBreakpoint.create = create;
})(ExceptionBreakpoint = exports.ExceptionBreakpoint || (exports.ExceptionBreakpoint = {}));
var FunctionBreakpoint;
(function (FunctionBreakpoint) {
    function create(data, origin) {
        return {
            id: origin ? origin.id : coreutils_1.UUID.uuid4(),
            enabled: origin ? origin.enabled : true,
            raw: __assign(__assign({}, (origin && origin.raw)), data)
        };
    }
    FunctionBreakpoint.create = create;
})(FunctionBreakpoint = exports.FunctionBreakpoint || (exports.FunctionBreakpoint = {}));


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/console/debug-console-items.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/console/debug-console-items.js ***!
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
exports.DebugScope = exports.ExpressionItem = exports.DebugVirtualVariable = exports.DebugVariable = exports.ExpressionContainer = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var console_session_1 = __webpack_require__(/*! @theia/console/lib/browser/console-session */ "./node_modules/@theia/console/lib/browser/console-session.js");
var severity_1 = __webpack_require__(/*! @theia/core/lib/common/severity */ "./node_modules/@theia/core/lib/common/severity.js");
var ExpressionContainer = /** @class */ (function () {
    function ExpressionContainer(options) {
        this.sessionProvider = options.session;
        this.variablesReference = options.variablesReference || 0;
        this.namedVariables = options.namedVariables;
        this.indexedVariables = options.indexedVariables;
        this.startOfVariables = options.startOfVariables || 0;
    }
    Object.defineProperty(ExpressionContainer.prototype, "session", {
        get: function () {
            return this.sessionProvider();
        },
        enumerable: false,
        configurable: true
    });
    ExpressionContainer.prototype.render = function () {
        return undefined;
    };
    Object.defineProperty(ExpressionContainer.prototype, "hasElements", {
        get: function () {
            return !!this.variablesReference;
        },
        enumerable: false,
        configurable: true
    });
    ExpressionContainer.prototype.getElements = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.hasElements || !this.session) {
                            return [2 /*return*/, [][Symbol.iterator]()];
                        }
                        if (!this.elements) {
                            this.elements = this.doResolve();
                        }
                        return [4 /*yield*/, this.elements];
                    case 1: return [2 /*return*/, (_a.sent())[Symbol.iterator]()];
                }
            });
        });
    };
    ExpressionContainer.prototype.doResolve = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, chunkSize, numberOfChunks, i, start, count, variablesReference;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = [];
                        if (!this.namedVariables) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fetch(result, 'named')];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (this.indexedVariables) {
                            chunkSize = ExpressionContainer.BASE_CHUNK_SIZE;
                            while (this.indexedVariables > chunkSize * ExpressionContainer.BASE_CHUNK_SIZE) {
                                chunkSize *= ExpressionContainer.BASE_CHUNK_SIZE;
                            }
                            if (this.indexedVariables > chunkSize) {
                                numberOfChunks = Math.ceil(this.indexedVariables / chunkSize);
                                for (i = 0; i < numberOfChunks; i++) {
                                    start = this.startOfVariables + i * chunkSize;
                                    count = Math.min(chunkSize, this.indexedVariables - i * chunkSize);
                                    variablesReference = this.variablesReference;
                                    result.push(new DebugVirtualVariable({
                                        session: this.sessionProvider,
                                        variablesReference: variablesReference,
                                        namedVariables: 0,
                                        indexedVariables: count,
                                        startOfVariables: start,
                                        name: "[" + start + ".." + (start + count - 1) + "]"
                                    }));
                                }
                                return [2 /*return*/, result];
                            }
                        }
                        return [4 /*yield*/, this.fetch(result, 'indexed', this.startOfVariables, this.indexedVariables)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ExpressionContainer.prototype.fetch = function (result, filter, start, count) {
        return __awaiter(this, void 0, void 0, function () {
            var variablesReference, response, variables, names, variables_1, variables_1_1, variable, e_1;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        variablesReference = this.variablesReference;
                        return [4 /*yield*/, this.session.sendRequest('variables', { variablesReference: variablesReference, filter: filter, start: start, count: count })];
                    case 1:
                        response = _b.sent();
                        variables = response.body.variables;
                        names = new Set();
                        try {
                            for (variables_1 = __values(variables), variables_1_1 = variables_1.next(); !variables_1_1.done; variables_1_1 = variables_1.next()) {
                                variable = variables_1_1.value;
                                if (!names.has(variable.name)) {
                                    result.push(new DebugVariable(this.sessionProvider, variable, this));
                                    names.add(variable.name);
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (variables_1_1 && !variables_1_1.done && (_a = variables_1.return)) _a.call(variables_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _b.sent();
                        result.push({
                            severity: severity_1.Severity.Error,
                            visible: !!e_1.message,
                            render: function () { return e_1.message; }
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ExpressionContainer.BASE_CHUNK_SIZE = 100;
    return ExpressionContainer;
}());
exports.ExpressionContainer = ExpressionContainer;
var DebugVariable = /** @class */ (function (_super) {
    __extends(DebugVariable, _super);
    function DebugVariable(session, variable, parent) {
        var _this = _super.call(this, {
            session: session,
            variablesReference: variable.variablesReference,
            namedVariables: variable.namedVariables,
            indexedVariables: variable.indexedVariables
        }) || this;
        _this.variable = variable;
        _this.parent = parent;
        _this.setValueRef = function (valueRef) { return _this.valueRef = valueRef || undefined; };
        _this.setNameRef = function (nameRef) { return _this.nameRef = nameRef || undefined; };
        return _this;
    }
    Object.defineProperty(DebugVariable.prototype, "name", {
        get: function () {
            return this.variable.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugVariable.prototype, "type", {
        get: function () {
            return this._type || this.variable.type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugVariable.prototype, "value", {
        get: function () {
            return this._value || this.variable.value;
        },
        enumerable: false,
        configurable: true
    });
    DebugVariable.prototype.render = function () {
        var _a = this, type = _a.type, value = _a.value, name = _a.name;
        return React.createElement("div", { className: this.variableClassName },
            React.createElement("span", { title: type || name, className: 'name', ref: this.setNameRef },
                name,
                !!value && ': '),
            React.createElement("span", { title: value, ref: this.setValueRef }, value));
    };
    Object.defineProperty(DebugVariable.prototype, "variableClassName", {
        get: function () {
            var _a = this, type = _a.type, value = _a.value;
            var classNames = ['theia-debug-console-variable'];
            if (type === 'number' || type === 'boolean' || type === 'string') {
                classNames.push(type);
            }
            else if (!isNaN(+value)) {
                classNames.push('number');
            }
            else if (DebugVariable.booleanRegex.test(value)) {
                classNames.push('boolean');
            }
            else if (DebugVariable.stringRegex.test(value)) {
                classNames.push('string');
            }
            return classNames.join(' ');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugVariable.prototype, "supportSetVariable", {
        get: function () {
            return !!this.session && !!this.session.capabilities.supportsSetVariable;
        },
        enumerable: false,
        configurable: true
    });
    DebugVariable.prototype.setValue = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, parent, variablesReference, response, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.session) {
                            return [2 /*return*/];
                        }
                        _a = this, name = _a.name, parent = _a.parent;
                        variablesReference = parent['variablesReference'];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.session.sendRequest('setVariable', { variablesReference: variablesReference, name: name, value: value })];
                    case 2:
                        response = _b.sent();
                        this._value = response.body.value;
                        this._type = response.body.type;
                        this.variablesReference = response.body.variablesReference || 0;
                        this.namedVariables = response.body.namedVariables;
                        this.indexedVariables = response.body.indexedVariables;
                        this.elements = undefined;
                        this.session['fireDidChange']();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        console.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(DebugVariable.prototype, "supportCopyValue", {
        get: function () {
            return !!this.valueRef && document.queryCommandSupported('copy');
        },
        enumerable: false,
        configurable: true
    });
    DebugVariable.prototype.copyValue = function () {
        var selection = document.getSelection();
        if (this.valueRef && selection) {
            selection.selectAllChildren(this.valueRef);
            document.execCommand('copy');
        }
    };
    Object.defineProperty(DebugVariable.prototype, "supportCopyAsExpression", {
        get: function () {
            return !!this.nameRef && document.queryCommandSupported('copy');
        },
        enumerable: false,
        configurable: true
    });
    DebugVariable.prototype.copyAsExpression = function () {
        var selection = document.getSelection();
        if (this.nameRef && selection) {
            selection.selectAllChildren(this.nameRef);
            document.execCommand('copy');
        }
    };
    DebugVariable.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            var input, newValue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        input = new browser_1.SingleTextInputDialog({
                            title: "Set " + this.name + " Value",
                            initialValue: this.value
                        });
                        return [4 /*yield*/, input.open()];
                    case 1:
                        newValue = _a.sent();
                        if (!newValue) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.setValue(newValue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DebugVariable.booleanRegex = /^true|false$/i;
    DebugVariable.stringRegex = /^(['"]).*\1$/;
    return DebugVariable;
}(ExpressionContainer));
exports.DebugVariable = DebugVariable;
var DebugVirtualVariable = /** @class */ (function (_super) {
    __extends(DebugVirtualVariable, _super);
    function DebugVirtualVariable(options) {
        var _this = _super.call(this, options) || this;
        _this.options = options;
        return _this;
    }
    DebugVirtualVariable.prototype.render = function () {
        return this.options.name;
    };
    return DebugVirtualVariable;
}(ExpressionContainer));
exports.DebugVirtualVariable = DebugVirtualVariable;
var ExpressionItem = /** @class */ (function (_super) {
    __extends(ExpressionItem, _super);
    function ExpressionItem(_expression, session) {
        var _this = _super.call(this, { session: session }) || this;
        _this._expression = _expression;
        _this._value = ExpressionItem.notAvailable;
        _this._available = false;
        return _this;
    }
    Object.defineProperty(ExpressionItem.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExpressionItem.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExpressionItem.prototype, "available", {
        get: function () {
            return this._available;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExpressionItem.prototype, "expression", {
        get: function () {
            return this._expression;
        },
        enumerable: false,
        configurable: true
    });
    ExpressionItem.prototype.render = function () {
        var valueClassNames = [];
        if (!this._available) {
            valueClassNames.push(console_session_1.ConsoleItem.errorClassName);
            valueClassNames.push('theia-debug-console-unavailable');
        }
        return React.createElement("div", { className: 'theia-debug-console-expression' },
            React.createElement("div", null, this._expression),
            React.createElement("div", { className: valueClassNames.join(' ') }, this._value));
    };
    ExpressionItem.prototype.evaluate = function (context) {
        if (context === void 0) { context = 'repl'; }
        return __awaiter(this, void 0, void 0, function () {
            var session, body, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        session = this.session;
                        if (!session) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, session.evaluate(this._expression, context)];
                    case 2:
                        body = _a.sent();
                        this.setResult(body);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.setResult(undefined, err_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.setResult(undefined, 'Please start a debug session to evaluate');
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ExpressionItem.prototype.setResult = function (body, error) {
        if (error === void 0) { error = ExpressionItem.notAvailable; }
        if (body) {
            this._value = body.result;
            this._type = body.type;
            this._available = true;
            this.variablesReference = body.variablesReference;
            this.namedVariables = body.namedVariables;
            this.indexedVariables = body.indexedVariables;
            this.severity = severity_1.Severity.Log;
        }
        else {
            this._value = error;
            this._type = undefined;
            this._available = false;
            this.variablesReference = 0;
            this.namedVariables = undefined;
            this.indexedVariables = undefined;
            this.severity = severity_1.Severity.Error;
        }
        this.elements = undefined;
    };
    ExpressionItem.notAvailable = 'not available';
    return ExpressionItem;
}(ExpressionContainer));
exports.ExpressionItem = ExpressionItem;
var DebugScope = /** @class */ (function (_super) {
    __extends(DebugScope, _super);
    function DebugScope(raw, session) {
        var _this = _super.call(this, {
            session: session,
            variablesReference: raw.variablesReference,
            namedVariables: raw.namedVariables,
            indexedVariables: raw.indexedVariables
        }) || this;
        _this.raw = raw;
        return _this;
    }
    DebugScope.prototype.render = function () {
        return this.raw.name;
    };
    Object.defineProperty(DebugScope.prototype, "expensive", {
        get: function () {
            return this.raw.expensive;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugScope.prototype, "range", {
        get: function () {
            var _a = this.raw, line = _a.line, column = _a.column, endLine = _a.endLine, endColumn = _a.endColumn;
            if (line !== undefined && column !== undefined && endLine !== undefined && endColumn !== undefined) {
                return new monaco.Range(line, column, endLine, endColumn);
            }
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    return DebugScope;
}(ExpressionContainer));
exports.DebugScope = DebugScope;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/debug-call-stack-item-type-key.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/debug-call-stack-item-type-key.js ***!
  \*********************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugCallStackItemTypeKey = void 0;
exports.DebugCallStackItemTypeKey = Symbol('DebugCallStackItemTypeKey');


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/debug-configuration-manager.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/debug-configuration-manager.js ***!
  \******************************************************************************/
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
exports.DebugConfigurationManager = void 0;
/*---------------------------------------------------------------------------------------------
*  Copyright (c) Microsoft Corporation. All rights reserved.
*  Licensed under the MIT License. See License.txt in the project root for license information.
*--------------------------------------------------------------------------------------------*/
var debounce = __webpack_require__(/*! p-debounce */ "./node_modules/p-debounce/index.js");
var jsonc_parser_1 = __webpack_require__(/*! jsonc-parser */ "./node_modules/jsonc-parser/lib/esm/main.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var monaco_editor_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-editor */ "./node_modules/@theia/monaco/lib/browser/monaco-editor.js");
var browser_2 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var quick_pick_service_1 = __webpack_require__(/*! @theia/core/lib/common/quick-pick-service */ "./node_modules/@theia/core/lib/common/quick-pick-service.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "./node_modules/@theia/workspace/lib/browser/workspace-service.js");
var debug_configuration_model_1 = __webpack_require__(/*! ./debug-configuration-model */ "./node_modules/@theia/debug/lib/browser/debug-configuration-model.js");
var debug_service_1 = __webpack_require__(/*! ../common/debug-service */ "./node_modules/@theia/debug/lib/common/debug-service.js");
var context_key_service_1 = __webpack_require__(/*! @theia/core/lib/browser/context-key-service */ "./node_modules/@theia/core/lib/browser/context-key-service.js");
var workspace_variable_contribution_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-variable-contribution */ "./node_modules/@theia/workspace/lib/browser/workspace-variable-contribution.js");
var common_1 = __webpack_require__(/*! @theia/filesystem/lib/common */ "./node_modules/@theia/filesystem/lib/common/index.js");
var preference_configurations_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences/preference-configurations */ "./node_modules/@theia/core/lib/browser/preferences/preference-configurations.js");
var DebugConfigurationManager = /** @class */ (function () {
    function DebugConfigurationManager() {
        var _this = this;
        this.onDidChangeEmitter = new event_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.onWillProvideDebugConfigurationEmitter = new event_1.Emitter();
        this.onWillProvideDebugConfiguration = this.onWillProvideDebugConfigurationEmitter.event;
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
                                var model = new debug_configuration_model_1.DebugConfigurationModel(key, this_1.preferences);
                                model.onDidChange(function () { return _this.updateCurrent(); });
                                model.onDispose(function () { return _this.models.delete(key); });
                                this_1.models.set(key, model);
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
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (toDelete_1_1 && !toDelete_1_1.done && (_b = toDelete_1.return)) _b.call(toDelete_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        this.updateCurrent();
                        return [2 /*return*/];
                }
            });
        }); }, 500);
    }
    DebugConfigurationManager.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.debugConfigurationTypeKey = this.contextKeyService.createKey('debugConfigurationType', undefined);
                this.initialized = this.updateModels();
                this.preferences.onPreferenceChanged(function (e) {
                    if (e.preferenceName === 'launch') {
                        _this.updateModels();
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(DebugConfigurationManager.prototype, "all", {
        get: function () {
            return this.getAll();
        },
        enumerable: false,
        configurable: true
    });
    DebugConfigurationManager.prototype.getAll = function () {
        var _a, _b, model, _c, _d, configuration, e_3_1, e_4_1;
        var e_4, _e, e_3, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    _g.trys.push([0, 11, 12, 13]);
                    _a = __values(this.models.values()), _b = _a.next();
                    _g.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 10];
                    model = _b.value;
                    _g.label = 2;
                case 2:
                    _g.trys.push([2, 7, 8, 9]);
                    _c = (e_3 = void 0, __values(model.configurations)), _d = _c.next();
                    _g.label = 3;
                case 3:
                    if (!!_d.done) return [3 /*break*/, 6];
                    configuration = _d.value;
                    return [4 /*yield*/, {
                            configuration: configuration,
                            workspaceFolderUri: model.workspaceFolderUri
                        }];
                case 4:
                    _g.sent();
                    _g.label = 5;
                case 5:
                    _d = _c.next();
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_3_1 = _g.sent();
                    e_3 = { error: e_3_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7 /*endfinally*/];
                case 9:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 10: return [3 /*break*/, 13];
                case 11:
                    e_4_1 = _g.sent();
                    e_4 = { error: e_4_1 };
                    return [3 /*break*/, 13];
                case 12:
                    try {
                        if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                    }
                    finally { if (e_4) throw e_4.error; }
                    return [7 /*endfinally*/];
                case 13: return [2 /*return*/];
            }
        });
    };
    Object.defineProperty(DebugConfigurationManager.prototype, "supported", {
        get: function () {
            return this.getSupported();
        },
        enumerable: false,
        configurable: true
    });
    DebugConfigurationManager.prototype.getSupported = function () {
        return __awaiter(this, void 0, void 0, function () {
            var debugTypes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialized];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.debug.debugTypes()];
                    case 2:
                        debugTypes = _a.sent();
                        return [2 /*return*/, this.doGetSupported(new Set(debugTypes))];
                }
            });
        });
    };
    DebugConfigurationManager.prototype.doGetSupported = function (debugTypes) {
        var _a, _b, options, e_5_1;
        var e_5, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    _a = __values(this.getAll()), _b = _a.next();
                    _d.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 4];
                    options = _b.value;
                    if (!debugTypes.has(options.configuration.type)) return [3 /*break*/, 3];
                    return [4 /*yield*/, options];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_5_1 = _d.sent();
                    e_5 = { error: e_5_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_5) throw e_5.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
    Object.defineProperty(DebugConfigurationManager.prototype, "current", {
        get: function () {
            return this._currentOptions;
        },
        set: function (option) {
            this.updateCurrent(option);
        },
        enumerable: false,
        configurable: true
    });
    DebugConfigurationManager.prototype.updateCurrent = function (options) {
        if (options === void 0) { options = this._currentOptions; }
        this._currentOptions = options
            && this.find(options.configuration.name, options.workspaceFolderUri);
        if (!this._currentOptions) {
            var model = this.model;
            if (model) {
                var configuration = model.configurations[0];
                if (configuration) {
                    this._currentOptions = {
                        configuration: configuration,
                        workspaceFolderUri: model.workspaceFolderUri
                    };
                }
            }
        }
        this.debugConfigurationTypeKey.set(this.current && this.current.configuration.type);
        this.onDidChangeEmitter.fire(undefined);
    };
    DebugConfigurationManager.prototype.find = function (name, workspaceFolderUri) {
        var e_6, _a, e_7, _b;
        try {
            for (var _c = __values(this.models.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var model = _d.value;
                if (model.workspaceFolderUri === workspaceFolderUri) {
                    try {
                        for (var _e = (e_7 = void 0, __values(model.configurations)), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var configuration = _f.value;
                            if (configuration.name === name) {
                                return {
                                    configuration: configuration,
                                    workspaceFolderUri: workspaceFolderUri
                                };
                            }
                        }
                    }
                    catch (e_7_1) { e_7 = { error: e_7_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_7) throw e_7.error; }
                    }
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return undefined;
    };
    DebugConfigurationManager.prototype.openConfiguration = function () {
        return __awaiter(this, void 0, void 0, function () {
            var model;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        model = this.model;
                        if (!model) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.doOpen(model)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    DebugConfigurationManager.prototype.addConfiguration = function () {
        return __awaiter(this, void 0, void 0, function () {
            var model, widget, editor, commandService, position, depthInArray, lastProperty;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        model = this.model;
                        if (!model) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.doOpen(model)];
                    case 1:
                        widget = _a.sent();
                        if (!(widget.editor instanceof monaco_editor_1.MonacoEditor)) {
                            return [2 /*return*/];
                        }
                        editor = widget.editor.getControl();
                        commandService = widget.editor.commandService;
                        depthInArray = 0;
                        lastProperty = '';
                        jsonc_parser_1.visit(editor.getValue(), {
                            onObjectProperty: function (property) {
                                lastProperty = property;
                            },
                            onArrayBegin: function (offset) {
                                if (lastProperty === 'configurations' && depthInArray === 0) {
                                    position = editor.getModel().getPositionAt(offset + 1);
                                }
                                depthInArray++;
                            },
                            onArrayEnd: function () {
                                depthInArray--;
                            }
                        });
                        if (!position) {
                            return [2 /*return*/];
                        }
                        // Check if there are more characters on a line after a "configurations": [, if yes enter a newline
                        if (editor.getModel().getLineLastNonWhitespaceColumn(position.lineNumber) > position.column) {
                            editor.setPosition(position);
                            editor.trigger('debug', 'lineBreakInsert', undefined);
                        }
                        if (!(editor.getModel().getLineLastNonWhitespaceColumn(position.lineNumber + 1) === 0)) return [3 /*break*/, 3];
                        editor.setPosition({ lineNumber: position.lineNumber + 1, column: 1 << 30 });
                        return [4 /*yield*/, commandService.executeCommand('editor.action.deleteLines')];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        editor.setPosition(position);
                        return [4 /*yield*/, commandService.executeCommand('editor.action.insertLineAfter')];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, commandService.executeCommand('editor.action.triggerSuggest')];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(DebugConfigurationManager.prototype, "model", {
        get: function () {
            var e_8, _a, e_9, _b;
            var workspaceFolderUri = this.workspaceVariables.getWorkspaceRootUri();
            if (workspaceFolderUri) {
                var key = workspaceFolderUri.toString();
                try {
                    for (var _c = __values(this.models.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var model = _d.value;
                        if (model.workspaceFolderUri === key) {
                            return model;
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
            }
            try {
                for (var _e = __values(this.models.values()), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var model = _f.value;
                    if (model.uri) {
                        return model;
                    }
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_9) throw e_9.error; }
            }
            return this.models.values().next().value;
        },
        enumerable: false,
        configurable: true
    });
    DebugConfigurationManager.prototype.doOpen = function (model) {
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
                    case 2: return [2 /*return*/, this.editorManager.open(uri, {
                            mode: 'activate'
                        })];
                }
            });
        });
    };
    DebugConfigurationManager.prototype.doCreate = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var configUri, uri, debugType, configurations, _a, content, fileStat, e_10;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.preferences.set('launch', {})];
                    case 1:
                        _b.sent(); // create dummy launch.json in the correct place
                        configUri = this.preferences.resolve('launch').configUri;
                        if (configUri && configUri.path.base === 'launch.json') {
                            uri = configUri;
                        }
                        else { // fallback
                            uri = new uri_1.default(model.workspaceFolderUri).resolve(this.preferenceConfigurations.getPaths()[0] + "/launch.json");
                        }
                        return [4 /*yield*/, this.selectDebugType()];
                    case 2:
                        debugType = _b.sent();
                        if (!debugType) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.provideDebugConfigurations(debugType, model.workspaceFolderUri)];
                    case 3:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _a = [];
                        _b.label = 5;
                    case 5:
                        configurations = _a;
                        content = this.getInitialConfigurationContent(configurations);
                        return [4 /*yield*/, this.filesystem.getFileStat(uri.toString())];
                    case 6:
                        fileStat = _b.sent();
                        if (!fileStat) {
                            throw new Error("file not found: " + uri.toString());
                        }
                        _b.label = 7;
                    case 7:
                        _b.trys.push([7, 9, , 10]);
                        return [4 /*yield*/, this.filesystem.setContent(fileStat, content)];
                    case 8:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        e_10 = _b.sent();
                        if (!common_1.FileSystemError.FileExists.is(e_10)) {
                            throw e_10;
                        }
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/, uri];
                }
            });
        });
    };
    DebugConfigurationManager.prototype.provideDebugConfigurations = function (debugType, workspaceFolderUri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fireWillProvideDebugConfiguration()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.debug.provideDebugConfigurations(debugType, workspaceFolderUri)];
                }
            });
        });
    };
    DebugConfigurationManager.prototype.fireWillProvideDebugConfiguration = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, event_1.WaitUntilEvent.fire(this.onWillProvideDebugConfigurationEmitter, {})];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugConfigurationManager.prototype.getInitialConfigurationContent = function (initialConfigurations) {
        return "{\n  // Use IntelliSense to learn about possible attributes.\n  // Hover to view descriptions of existing attributes.\n  \"version\": \"0.2.0\",\n  \"configurations\": " + JSON.stringify(initialConfigurations, undefined, '  ').split('\n').map(function (line) { return '  ' + line; }).join('\n').trim() + "\n}\n";
    };
    DebugConfigurationManager.prototype.selectDebugType = function () {
        return __awaiter(this, void 0, void 0, function () {
            var widget, languageId, debuggers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        widget = this.editorManager.currentEditor;
                        if (!widget) {
                            return [2 /*return*/, undefined];
                        }
                        languageId = widget.editor.document.languageId;
                        return [4 /*yield*/, this.debug.getDebuggersForLanguage(languageId)];
                    case 1:
                        debuggers = _a.sent();
                        return [2 /*return*/, this.quickPick.show(debuggers.map(function (_a) {
                                var label = _a.label, type = _a.type;
                                return ({ label: label, value: type });
                            }, { placeholder: 'Select Environment' }))];
                }
            });
        });
    };
    DebugConfigurationManager.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialized];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.getData('debug.configurations', {})];
                    case 2:
                        data = _a.sent();
                        if (data.current) {
                            this.current = this.find(data.current.name, data.current.workspaceFolderUri);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugConfigurationManager.prototype.save = function () {
        var data = {};
        var current = this.current;
        if (current) {
            data.current = {
                name: current.configuration.name,
                workspaceFolderUri: current.workspaceFolderUri
            };
        }
        this.storage.setData('debug.configurations', data);
    };
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], DebugConfigurationManager.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(browser_1.EditorManager),
        __metadata("design:type", browser_1.EditorManager)
    ], DebugConfigurationManager.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(debug_service_1.DebugService),
        __metadata("design:type", Object)
    ], DebugConfigurationManager.prototype, "debug", void 0);
    __decorate([
        inversify_1.inject(quick_pick_service_1.QuickPickService),
        __metadata("design:type", Object)
    ], DebugConfigurationManager.prototype, "quickPick", void 0);
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], DebugConfigurationManager.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], DebugConfigurationManager.prototype, "filesystem", void 0);
    __decorate([
        inversify_1.inject(browser_2.PreferenceService),
        __metadata("design:type", Object)
    ], DebugConfigurationManager.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(preference_configurations_1.PreferenceConfigurations),
        __metadata("design:type", preference_configurations_1.PreferenceConfigurations)
    ], DebugConfigurationManager.prototype, "preferenceConfigurations", void 0);
    __decorate([
        inversify_1.inject(workspace_variable_contribution_1.WorkspaceVariableContribution),
        __metadata("design:type", workspace_variable_contribution_1.WorkspaceVariableContribution)
    ], DebugConfigurationManager.prototype, "workspaceVariables", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], DebugConfigurationManager.prototype, "init", null);
    __decorate([
        inversify_1.inject(browser_2.StorageService),
        __metadata("design:type", Object)
    ], DebugConfigurationManager.prototype, "storage", void 0);
    DebugConfigurationManager = __decorate([
        inversify_1.injectable()
    ], DebugConfigurationManager);
    return DebugConfigurationManager;
}());
exports.DebugConfigurationManager = DebugConfigurationManager;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/debug-configuration-model.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/debug-configuration-model.js ***!
  \****************************************************************************/
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
exports.DebugConfigurationModel = void 0;
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var debug_common_1 = __webpack_require__(/*! ../common/debug-common */ "./node_modules/@theia/debug/lib/common/debug-common.js");
var DebugConfigurationModel = /** @class */ (function () {
    function DebugConfigurationModel(workspaceFolderUri, preferences) {
        var _this = this;
        this.workspaceFolderUri = workspaceFolderUri;
        this.preferences = preferences;
        this.onDidChangeEmitter = new event_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.toDispose = new disposable_1.DisposableCollection(this.onDidChangeEmitter);
        this.reconcile();
        this.toDispose.push(this.preferences.onPreferenceChanged(function (e) {
            if (e.preferenceName === 'launch' && e.affects(workspaceFolderUri)) {
                _this.reconcile();
            }
        }));
    }
    Object.defineProperty(DebugConfigurationModel.prototype, "uri", {
        get: function () {
            return this.json.uri;
        },
        enumerable: false,
        configurable: true
    });
    DebugConfigurationModel.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    Object.defineProperty(DebugConfigurationModel.prototype, "onDispose", {
        get: function () {
            return this.toDispose.onDispose;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugConfigurationModel.prototype, "configurations", {
        get: function () {
            return this.json.configurations;
        },
        enumerable: false,
        configurable: true
    });
    DebugConfigurationModel.prototype.reconcile = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.json = this.parseConfigurations();
                this.onDidChangeEmitter.fire(undefined);
                return [2 /*return*/];
            });
        });
    };
    DebugConfigurationModel.prototype.parseConfigurations = function () {
        var e_1, _a;
        var configurations = [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var _b = this.preferences.resolve('launch', undefined, this.workspaceFolderUri), configUri = _b.configUri, value = _b.value;
        if (value && typeof value === 'object' && 'configurations' in value) {
            if (Array.isArray(value.configurations)) {
                try {
                    for (var _c = __values(value.configurations), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var configuration = _d.value;
                        if (debug_common_1.DebugConfiguration.is(configuration)) {
                            configurations.push(configuration);
                        }
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
    return DebugConfigurationModel;
}());
exports.DebugConfigurationModel = DebugConfigurationModel;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/debug-preferences.js":
/*!********************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/debug-preferences.js ***!
  \********************************************************************/
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
exports.bindDebugPreferences = exports.createDebugPreferences = exports.DebugPreferences = exports.DebugConfiguration = exports.debugPreferencesSchema = void 0;
var preferences_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences */ "./node_modules/@theia/core/lib/browser/preferences/index.js");
exports.debugPreferencesSchema = {
    type: 'object',
    properties: {
        'debug.trace': {
            type: 'boolean',
            default: false,
            description: 'Enable/disable tracing communications with debug adapters'
        },
        'debug.debugViewLocation': {
            enum: ['default', 'left', 'right', 'bottom'],
            default: 'default',
            description: 'Controls the location of the debug view.'
        },
        'debug.openDebug': {
            enum: ['neverOpen', 'openOnSessionStart', 'openOnFirstSessionStart', 'openOnDebugBreak'],
            default: 'openOnSessionStart',
            description: 'Controls when the debug view should open.'
        },
        'debug.internalConsoleOptions': {
            enum: ['neverOpen', 'openOnSessionStart', 'openOnFirstSessionStart'],
            default: 'openOnFirstSessionStart',
            description: 'Controls when the internal debug console should open.'
        },
        'debug.inlineValues': {
            type: 'boolean',
            default: false,
            description: 'Show variable values inline in editor while debugging.'
        },
        'debug.showInStatusBar': {
            enum: ['never', 'always', 'onFirstSessionStart'],
            description: 'Controls when the debug status bar should be visible.',
            default: 'onFirstSessionStart'
        }
    }
};
var DebugConfiguration = /** @class */ (function () {
    function DebugConfiguration() {
    }
    return DebugConfiguration;
}());
exports.DebugConfiguration = DebugConfiguration;
exports.DebugPreferences = Symbol('DebugPreferences');
function createDebugPreferences(preferences) {
    return preferences_1.createPreferenceProxy(preferences, exports.debugPreferencesSchema);
}
exports.createDebugPreferences = createDebugPreferences;
function bindDebugPreferences(bind) {
    bind(exports.DebugPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(preferences_1.PreferenceService);
        return createDebugPreferences(preferences);
    }).inSingletonScope();
    bind(preferences_1.PreferenceContribution).toConstantValue({ schema: exports.debugPreferencesSchema });
}
exports.bindDebugPreferences = bindDebugPreferences;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/debug-session-connection.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/debug-session-connection.js ***!
  \***************************************************************************/
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
exports.DebugSessionConnection = void 0;
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "./node_modules/@theia/core/lib/common/promise-util.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var standardDebugEvents = new Set([
    'breakpoint',
    'capabilities',
    'continued',
    'exited',
    'initialized',
    'loadedSource',
    'module',
    'output',
    'process',
    'stopped',
    'terminated',
    'thread'
]);
var DebugSessionConnection = /** @class */ (function () {
    function DebugSessionConnection(sessionId, connectionFactory, traceOutputChannel) {
        var _this = this;
        this.sessionId = sessionId;
        this.connectionFactory = connectionFactory;
        this.traceOutputChannel = traceOutputChannel;
        this.sequence = 1;
        this.pendingRequests = new Map();
        this.requestHandlers = new Map();
        this.onDidCustomEventEmitter = new core_1.Emitter();
        this.onDidCustomEvent = this.onDidCustomEventEmitter.event;
        this.toDispose = new core_1.DisposableCollection(this.onDidCustomEventEmitter, core_1.Disposable.create(function () { return _this.pendingRequests.clear(); }), core_1.Disposable.create(function () { return _this.emitters.clear(); }));
        this.allThreadsContinued = true;
        this.emitters = new Map();
        this.connection = this.createConnection();
    }
    Object.defineProperty(DebugSessionConnection.prototype, "disposed", {
        get: function () {
            return this.toDispose.disposed;
        },
        enumerable: false,
        configurable: true
    });
    DebugSessionConnection.prototype.checkDisposed = function () {
        if (this.disposed) {
            throw new Error('the debug session connection is disposed, id: ' + this.sessionId);
        }
    };
    DebugSessionConnection.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    DebugSessionConnection.prototype.createConnection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var connection_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.disposed) return [3 /*break*/, 1];
                        throw new Error('Connection has been already disposed.');
                    case 1: return [4 /*yield*/, this.connectionFactory(this.sessionId)];
                    case 2:
                        connection_1 = _a.sent();
                        connection_1.onClose(function (code, reason) {
                            connection_1.dispose();
                            _this.fire('exited', { code: code, reason: reason });
                        });
                        connection_1.onMessage(function (data) { return _this.handleMessage(data); });
                        return [2 /*return*/, connection_1];
                }
            });
        });
    };
    DebugSessionConnection.prototype.sendRequest = function (command, args) {
        return __awaiter(this, void 0, void 0, function () {
            var result, response, allThreadsContinued;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.doSendRequest(command, args)];
                    case 1:
                        result = _a.sent();
                        if (command === 'next' || command === 'stepIn' ||
                            command === 'stepOut' || command === 'stepBack' ||
                            command === 'reverseContinue' || command === 'restartFrame') {
                            this.fireContinuedEvent(args.threadId);
                        }
                        if (command === 'continue') {
                            response = result;
                            allThreadsContinued = response && response.body && response.body.allThreadsContinued;
                            if (allThreadsContinued !== undefined) {
                                this.allThreadsContinued = result.body.allThreadsContinued;
                            }
                            this.fireContinuedEvent(args.threadId, this.allThreadsContinued);
                            return [2 /*return*/, result];
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    DebugSessionConnection.prototype.sendCustomRequest = function (command, args) {
        return this.doSendRequest(command, args);
    };
    DebugSessionConnection.prototype.doSendRequest = function (command, args) {
        return __awaiter(this, void 0, void 0, function () {
            var result, request, onDispose;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = new promise_util_1.Deferred();
                        request = {
                            seq: this.sequence++,
                            type: 'request',
                            command: command,
                            arguments: args
                        };
                        onDispose = this.toDispose.push(core_1.Disposable.create(function () {
                            var pendingRequest = _this.pendingRequests.get(request.seq);
                            if (pendingRequest) {
                                pendingRequest({
                                    type: 'response',
                                    request_seq: request.seq,
                                    command: request.command,
                                    seq: 0,
                                    success: false,
                                    message: 'debug session is closed'
                                });
                            }
                        }));
                        this.pendingRequests.set(request.seq, function (response) {
                            onDispose.dispose();
                            if (!response.success) {
                                result.reject(response);
                            }
                            else {
                                result.resolve(response);
                            }
                        });
                        return [4 /*yield*/, this.send(request)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, result.promise];
                }
            });
        });
    };
    DebugSessionConnection.prototype.send = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, messageStr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connection];
                    case 1:
                        connection = _a.sent();
                        messageStr = JSON.stringify(message);
                        if (this.traceOutputChannel) {
                            this.traceOutputChannel.appendLine(this.sessionId.substring(0, 8) + " theia -> adapter: " + messageStr);
                        }
                        connection.send(messageStr);
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugSessionConnection.prototype.handleMessage = function (data) {
        if (this.traceOutputChannel) {
            this.traceOutputChannel.appendLine(this.sessionId.substring(0, 8) + " theia <- adapter: " + data);
        }
        var message = JSON.parse(data);
        if (message.type === 'request') {
            this.handleRequest(message);
        }
        else if (message.type === 'response') {
            this.handleResponse(message);
        }
        else if (message.type === 'event') {
            this.handleEvent(message);
        }
    };
    DebugSessionConnection.prototype.handleResponse = function (response) {
        var callback = this.pendingRequests.get(response.request_seq);
        if (callback) {
            this.pendingRequests.delete(response.request_seq);
            callback(response);
        }
    };
    DebugSessionConnection.prototype.onRequest = function (command, handler) {
        this.requestHandlers.set(command, handler);
    };
    DebugSessionConnection.prototype.handleRequest = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var response, handler, _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        response = {
                            type: 'response',
                            seq: 0,
                            command: request.command,
                            request_seq: request.seq,
                            success: true,
                        };
                        handler = this.requestHandlers.get(request.command);
                        if (!handler) return [3 /*break*/, 5];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = response;
                        return [4 /*yield*/, handler(request)];
                    case 2:
                        _a.body = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        response.success = false;
                        response.message = error_1.message;
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        console.error('Unhandled request', request);
                        _b.label = 6;
                    case 6: return [4 /*yield*/, this.send(response)];
                    case 7:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugSessionConnection.prototype.handleEvent = function (event) {
        if ('event' in event) {
            if (event.event === 'continued') {
                this.allThreadsContinued = event.body.allThreadsContinued === false ? false : true;
            }
            if (standardDebugEvents.has(event.event)) {
                this.doFire(event.event, event);
            }
            else {
                this.onDidCustomEventEmitter.fire(event);
            }
        }
        else {
            this.fire('exited', event);
        }
    };
    DebugSessionConnection.prototype.on = function (kind, listener) {
        return this.getEmitter(kind).event(listener);
    };
    DebugSessionConnection.prototype.fire = function (kind, e) {
        this.doFire(kind, e);
    };
    DebugSessionConnection.prototype.doFire = function (kind, e) {
        this.getEmitter(kind).fire(e);
    };
    DebugSessionConnection.prototype.getEmitter = function (kind) {
        var emitter = this.emitters.get(kind) || this.newEmitter();
        this.emitters.set(kind, emitter);
        return emitter;
    };
    DebugSessionConnection.prototype.newEmitter = function () {
        var emitter = new core_1.Emitter();
        this.checkDisposed();
        this.toDispose.push(emitter);
        return emitter;
    };
    DebugSessionConnection.prototype.fireContinuedEvent = function (threadId, allThreadsContinued) {
        if (allThreadsContinued === void 0) { allThreadsContinued = false; }
        this.fire('continued', {
            type: 'event',
            event: 'continued',
            body: {
                threadId: threadId,
                allThreadsContinued: allThreadsContinued
            },
            seq: -1
        });
    };
    return DebugSessionConnection;
}());
exports.DebugSessionConnection = DebugSessionConnection;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/debug-session-contribution.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/debug-session-contribution.js ***!
  \*****************************************************************************/
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
exports.DefaultDebugSessionFactory = exports.DebugSessionFactory = exports.DebugSessionContributionRegistryImpl = exports.DebugSessionContributionRegistry = exports.DebugSessionContribution = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var terminal_service_1 = __webpack_require__(/*! @theia/terminal/lib/browser/base/terminal-service */ "./node_modules/@theia/terminal/lib/browser/base/terminal-service.js");
var ws_connection_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/messaging/ws-connection-provider */ "./node_modules/@theia/core/lib/browser/messaging/ws-connection-provider.js");
var debug_session_1 = __webpack_require__(/*! ./debug-session */ "./node_modules/@theia/debug/lib/browser/debug-session.js");
var breakpoint_manager_1 = __webpack_require__(/*! ./breakpoint/breakpoint-manager */ "./node_modules/@theia/debug/lib/browser/breakpoint/breakpoint-manager.js");
var output_channel_1 = __webpack_require__(/*! @theia/output/lib/common/output-channel */ "./node_modules/@theia/output/lib/common/output-channel.js");
var debug_preferences_1 = __webpack_require__(/*! ./debug-preferences */ "./node_modules/@theia/debug/lib/browser/debug-preferences.js");
var debug_session_connection_1 = __webpack_require__(/*! ./debug-session-connection */ "./node_modules/@theia/debug/lib/browser/debug-session-connection.js");
var debug_service_1 = __webpack_require__(/*! ../common/debug-service */ "./node_modules/@theia/debug/lib/common/debug-service.js");
var contribution_provider_1 = __webpack_require__(/*! @theia/core/lib/common/contribution-provider */ "./node_modules/@theia/core/lib/common/contribution-provider.js");
var common_2 = __webpack_require__(/*! @theia/filesystem/lib/common */ "./node_modules/@theia/filesystem/lib/common/index.js");
/**
 * DebugSessionContribution symbol for DI.
 */
exports.DebugSessionContribution = Symbol('DebugSessionContribution');
/**
 * DebugSessionContributionRegistry symbol for DI.
 */
exports.DebugSessionContributionRegistry = Symbol('DebugSessionContributionRegistry');
var DebugSessionContributionRegistryImpl = /** @class */ (function () {
    function DebugSessionContributionRegistryImpl() {
        this.contribs = new Map();
    }
    DebugSessionContributionRegistryImpl.prototype.init = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.contributions.getContributions()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contrib = _c.value;
                this.contribs.set(contrib.debugType, contrib);
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
    DebugSessionContributionRegistryImpl.prototype.get = function (debugType) {
        return this.contribs.get(debugType);
    };
    __decorate([
        inversify_1.inject(contribution_provider_1.ContributionProvider),
        inversify_1.named(exports.DebugSessionContribution),
        __metadata("design:type", Object)
    ], DebugSessionContributionRegistryImpl.prototype, "contributions", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugSessionContributionRegistryImpl.prototype, "init", null);
    DebugSessionContributionRegistryImpl = __decorate([
        inversify_1.injectable()
    ], DebugSessionContributionRegistryImpl);
    return DebugSessionContributionRegistryImpl;
}());
exports.DebugSessionContributionRegistryImpl = DebugSessionContributionRegistryImpl;
/**
 * DebugSessionFactory symbol for DI.
 */
exports.DebugSessionFactory = Symbol('DebugSessionFactory');
var DefaultDebugSessionFactory = /** @class */ (function () {
    function DefaultDebugSessionFactory() {
    }
    DefaultDebugSessionFactory.prototype.get = function (sessionId, options) {
        var _this = this;
        var connection = new debug_session_connection_1.DebugSessionConnection(sessionId, function () { return new Promise(function (resolve) {
            return _this.connectionProvider.openChannel(debug_service_1.DebugAdapterPath + "/" + sessionId, function (channel) {
                resolve(channel);
            }, { reconnecting: false });
        }); }, this.getTraceOutputChannel());
        return new debug_session_1.DebugSession(sessionId, options, connection, this.terminalService, this.editorManager, this.breakpoints, this.labelProvider, this.messages, this.fileSystem);
    };
    DefaultDebugSessionFactory.prototype.getTraceOutputChannel = function () {
        if (this.debugPreferences['debug.trace']) {
            return this.outputChannelManager.getChannel('Debug adapters');
        }
    };
    __decorate([
        inversify_1.inject(ws_connection_provider_1.WebSocketConnectionProvider),
        __metadata("design:type", ws_connection_provider_1.WebSocketConnectionProvider)
    ], DefaultDebugSessionFactory.prototype, "connectionProvider", void 0);
    __decorate([
        inversify_1.inject(terminal_service_1.TerminalService),
        __metadata("design:type", Object)
    ], DefaultDebugSessionFactory.prototype, "terminalService", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], DefaultDebugSessionFactory.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(breakpoint_manager_1.BreakpointManager),
        __metadata("design:type", breakpoint_manager_1.BreakpointManager)
    ], DefaultDebugSessionFactory.prototype, "breakpoints", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], DefaultDebugSessionFactory.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(common_1.MessageClient),
        __metadata("design:type", common_1.MessageClient)
    ], DefaultDebugSessionFactory.prototype, "messages", void 0);
    __decorate([
        inversify_1.inject(output_channel_1.OutputChannelManager),
        __metadata("design:type", output_channel_1.OutputChannelManager)
    ], DefaultDebugSessionFactory.prototype, "outputChannelManager", void 0);
    __decorate([
        inversify_1.inject(debug_preferences_1.DebugPreferences),
        __metadata("design:type", Object)
    ], DefaultDebugSessionFactory.prototype, "debugPreferences", void 0);
    __decorate([
        inversify_1.inject(common_2.FileSystem),
        __metadata("design:type", Object)
    ], DefaultDebugSessionFactory.prototype, "fileSystem", void 0);
    DefaultDebugSessionFactory = __decorate([
        inversify_1.injectable()
    ], DefaultDebugSessionFactory);
    return DefaultDebugSessionFactory;
}());
exports.DefaultDebugSessionFactory = DefaultDebugSessionFactory;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/debug-session-manager.js":
/*!************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/debug-session-manager.js ***!
  \************************************************************************/
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
exports.DebugSessionManager = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var context_key_service_1 = __webpack_require__(/*! @theia/core/lib/browser/context-key-service */ "./node_modules/@theia/core/lib/browser/context-key-service.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var quick_open_task_1 = __webpack_require__(/*! @theia/task/lib/browser/quick-open-task */ "./node_modules/@theia/task/lib/browser/quick-open-task.js");
var task_service_1 = __webpack_require__(/*! @theia/task/lib/browser/task-service */ "./node_modules/@theia/task/lib/browser/task-service.js");
var browser_3 = __webpack_require__(/*! @theia/variable-resolver/lib/browser */ "./node_modules/@theia/variable-resolver/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var debug_service_1 = __webpack_require__(/*! ../common/debug-service */ "./node_modules/@theia/debug/lib/common/debug-service.js");
var breakpoint_manager_1 = __webpack_require__(/*! ./breakpoint/breakpoint-manager */ "./node_modules/@theia/debug/lib/browser/breakpoint/breakpoint-manager.js");
var debug_configuration_manager_1 = __webpack_require__(/*! ./debug-configuration-manager */ "./node_modules/@theia/debug/lib/browser/debug-configuration-manager.js");
var debug_session_1 = __webpack_require__(/*! ./debug-session */ "./node_modules/@theia/debug/lib/browser/debug-session.js");
var debug_session_contribution_1 = __webpack_require__(/*! ./debug-session-contribution */ "./node_modules/@theia/debug/lib/browser/debug-session-contribution.js");
var debug_session_options_1 = __webpack_require__(/*! ./debug-session-options */ "./node_modules/@theia/debug/lib/browser/debug-session-options.js");
var debug_source_breakpoint_1 = __webpack_require__(/*! ./model/debug-source-breakpoint */ "./node_modules/@theia/debug/lib/browser/model/debug-source-breakpoint.js");
var debug_function_breakpoint_1 = __webpack_require__(/*! ./model/debug-function-breakpoint */ "./node_modules/@theia/debug/lib/browser/model/debug-function-breakpoint.js");
var DebugSessionManager = /** @class */ (function () {
    function DebugSessionManager() {
        this._sessions = new Map();
        this.onWillStartDebugSessionEmitter = new core_1.Emitter();
        this.onWillStartDebugSession = this.onWillStartDebugSessionEmitter.event;
        this.onWillResolveDebugConfigurationEmitter = new core_1.Emitter();
        this.onWillResolveDebugConfiguration = this.onWillResolveDebugConfigurationEmitter.event;
        this.onDidCreateDebugSessionEmitter = new core_1.Emitter();
        this.onDidCreateDebugSession = this.onDidCreateDebugSessionEmitter.event;
        this.onDidStartDebugSessionEmitter = new core_1.Emitter();
        this.onDidStartDebugSession = this.onDidStartDebugSessionEmitter.event;
        this.onDidStopDebugSessionEmitter = new core_1.Emitter();
        this.onDidStopDebugSession = this.onDidStopDebugSessionEmitter.event;
        this.onDidChangeActiveDebugSessionEmitter = new core_1.Emitter();
        this.onDidChangeActiveDebugSession = this.onDidChangeActiveDebugSessionEmitter.event;
        this.onDidDestroyDebugSessionEmitter = new core_1.Emitter();
        this.onDidDestroyDebugSession = this.onDidDestroyDebugSessionEmitter.event;
        this.onDidReceiveDebugSessionCustomEventEmitter = new core_1.Emitter();
        this.onDidReceiveDebugSessionCustomEvent = this.onDidReceiveDebugSessionCustomEventEmitter.event;
        this.onDidChangeBreakpointsEmitter = new core_1.Emitter();
        this.onDidChangeBreakpoints = this.onDidChangeBreakpointsEmitter.event;
        this.onDidChangeEmitter = new core_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.configurationIds = new Map();
        this.toDisposeOnCurrentSession = new core_1.DisposableCollection();
    }
    DebugSessionManager.prototype.fireDidChangeBreakpoints = function (event) {
        this.onDidChangeBreakpointsEmitter.fire(event);
    };
    DebugSessionManager.prototype.fireDidChange = function (current) {
        this.inDebugModeKey.set(this.inDebugMode);
        this.onDidChangeEmitter.fire(current);
    };
    DebugSessionManager.prototype.init = function () {
        var _this = this;
        this.debugTypeKey = this.contextKeyService.createKey('debugType', undefined);
        this.inDebugModeKey = this.contextKeyService.createKey('inDebugMode', this.inDebugMode);
        this.breakpoints.onDidChangeMarkers(function (uri) { return _this.fireDidChangeBreakpoints({ uri: uri }); });
        this.labelProvider.onDidChange(function (event) {
            var e_1, _a;
            try {
                for (var _b = __values(_this.breakpoints.getUris()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var uriString = _c.value;
                    var uri = new uri_1.default(uriString);
                    if (event.affects(uri)) {
                        _this.fireDidChangeBreakpoints({ uri: uri });
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
    };
    Object.defineProperty(DebugSessionManager.prototype, "inDebugMode", {
        get: function () {
            return this.state > debug_session_1.DebugState.Inactive;
        },
        enumerable: false,
        configurable: true
    });
    DebugSessionManager.prototype.start = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.progressService.withProgress('Start...', 'debug', function () { return __awaiter(_this, void 0, void 0, function () {
                        var resolved, taskRun, sessionId, e_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 7, , 8]);
                                    return [4 /*yield*/, this.shell.saveAll()];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, this.fireWillStartDebugSession()];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, this.resolveConfiguration(options)];
                                case 3:
                                    resolved = _a.sent();
                                    if (!!options.configuration.__restart) return [3 /*break*/, 5];
                                    return [4 /*yield*/, this.runTask(options.workspaceFolderUri, resolved.configuration.preLaunchTask, true)];
                                case 4:
                                    taskRun = _a.sent();
                                    if (!taskRun) {
                                        return [2 /*return*/, undefined];
                                    }
                                    _a.label = 5;
                                case 5: return [4 /*yield*/, this.debug.createDebugSession(resolved.configuration)];
                                case 6:
                                    sessionId = _a.sent();
                                    return [2 /*return*/, this.doStart(sessionId, resolved)];
                                case 7:
                                    e_2 = _a.sent();
                                    if (debug_service_1.DebugError.NotFound.is(e_2)) {
                                        this.messageService.error("The debug session type \"" + e_2.data.type + "\" is not supported.");
                                        return [2 /*return*/, undefined];
                                    }
                                    this.messageService.error('There was an error starting the debug session, check the logs for more details.');
                                    console.error('Error starting the debug session', e_2);
                                    throw e_2;
                                case 8: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    DebugSessionManager.prototype.fireWillStartDebugSession = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, core_1.WaitUntilEvent.fire(this.onWillStartDebugSessionEmitter, {})];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugSessionManager.prototype.resolveConfiguration = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var workspaceFolderUri, resolvedConfiguration, configuration, key, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (debug_session_options_1.InternalDebugSessionOptions.is(options)) {
                            return [2 /*return*/, options];
                        }
                        workspaceFolderUri = options.workspaceFolderUri;
                        return [4 /*yield*/, this.resolveDebugConfiguration(options.configuration, workspaceFolderUri)];
                    case 1:
                        resolvedConfiguration = _a.sent();
                        return [4 /*yield*/, this.variableResolver.resolve(resolvedConfiguration, {
                                context: options.workspaceFolderUri ? new uri_1.default(options.workspaceFolderUri) : undefined,
                                configurationSection: 'launch'
                            })];
                    case 2:
                        configuration = _a.sent();
                        key = configuration.name + workspaceFolderUri;
                        id = this.configurationIds.has(key) ? this.configurationIds.get(key) + 1 : 0;
                        this.configurationIds.set(key, id);
                        return [2 /*return*/, {
                                id: id,
                                configuration: configuration,
                                workspaceFolderUri: workspaceFolderUri
                            }];
                }
            });
        });
    };
    DebugSessionManager.prototype.resolveDebugConfiguration = function (configuration, workspaceFolderUri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fireWillResolveDebugConfiguration(configuration.type)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.debug.resolveDebugConfiguration(configuration, workspaceFolderUri)];
                }
            });
        });
    };
    DebugSessionManager.prototype.fireWillResolveDebugConfiguration = function (debugType) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, core_1.WaitUntilEvent.fire(this.onWillResolveDebugConfigurationEmitter, { debugType: debugType })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugSessionManager.prototype.doStart = function (sessionId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var contrib, sessionFactory, session, state;
            var _this = this;
            return __generator(this, function (_a) {
                contrib = this.sessionContributionRegistry.get(options.configuration.type);
                sessionFactory = contrib ? contrib.debugSessionFactory() : this.debugSessionFactory;
                session = sessionFactory.get(sessionId, options);
                this._sessions.set(sessionId, session);
                this.debugTypeKey.set(session.configuration.type);
                this.onDidCreateDebugSessionEmitter.fire(session);
                state = debug_session_1.DebugState.Inactive;
                session.onDidChange(function () {
                    if (state !== session.state) {
                        state = session.state;
                        if (state === debug_session_1.DebugState.Stopped) {
                            _this.onDidStopDebugSessionEmitter.fire(session);
                        }
                    }
                    _this.updateCurrentSession(session);
                });
                session.onDidChangeBreakpoints(function (uri) { return _this.fireDidChangeBreakpoints({ session: session, uri: uri }); });
                session.on('terminated', function (event) { return __awaiter(_this, void 0, void 0, function () {
                    var restart;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                restart = event.body && event.body.restart;
                                if (!restart) return [3 /*break*/, 1];
                                // postDebugTask isn't run in case of auto restart as well as preLaunchTask
                                this.doRestart(session, restart);
                                return [3 /*break*/, 3];
                            case 1:
                                session.terminate();
                                return [4 /*yield*/, this.runTask(session.options.workspaceFolderUri, session.configuration.postDebugTask)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                session.on('exited', function () { return _this.destroy(session.id); });
                session.start().then(function () { return _this.onDidStartDebugSessionEmitter.fire(session); });
                session.onDidCustomEvent(function (_a) {
                    var event = _a.event, body = _a.body;
                    return _this.onDidReceiveDebugSessionCustomEventEmitter.fire({ event: event, body: body, session: session });
                });
                return [2 /*return*/, session];
            });
        });
    };
    DebugSessionManager.prototype.restart = function (session) {
        if (session === void 0) { session = this.currentSession; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, session && this.doRestart(session)];
            });
        });
    };
    DebugSessionManager.prototype.doRestart = function (session, restart) {
        return __awaiter(this, void 0, void 0, function () {
            var options, configuration;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, session.restart()];
                    case 1:
                        if (_a.sent()) {
                            return [2 /*return*/, session];
                        }
                        return [4 /*yield*/, session.terminate(true)];
                    case 2:
                        _a.sent();
                        options = session.options, configuration = session.configuration;
                        configuration.__restart = restart;
                        return [2 /*return*/, this.start(options)];
                }
            });
        });
    };
    DebugSessionManager.prototype.remove = function (sessionId) {
        this._sessions.delete(sessionId);
        var currentSession = this.currentSession;
        if (currentSession && currentSession.id === sessionId) {
            this.updateCurrentSession(undefined);
        }
    };
    DebugSessionManager.prototype.getSession = function (sessionId) {
        return this._sessions.get(sessionId);
    };
    Object.defineProperty(DebugSessionManager.prototype, "sessions", {
        get: function () {
            return Array.from(this._sessions.values()).filter(function (session) { return session.state > debug_session_1.DebugState.Inactive; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugSessionManager.prototype, "currentSession", {
        get: function () {
            return this._currentSession;
        },
        set: function (current) {
            var _this = this;
            if (this._currentSession === current) {
                return;
            }
            this.toDisposeOnCurrentSession.dispose();
            var previous = this.currentSession;
            this._currentSession = current;
            this.onDidChangeActiveDebugSessionEmitter.fire({ previous: previous, current: current });
            if (current) {
                this.toDisposeOnCurrentSession.push(current.onDidChange(function () {
                    if (_this.currentFrame === _this.topFrame) {
                        _this.open();
                    }
                    _this.fireDidChange(current);
                }));
            }
            this.updateBreakpoints(previous, current);
            this.open();
            this.fireDidChange(current);
        },
        enumerable: false,
        configurable: true
    });
    DebugSessionManager.prototype.open = function () {
        var currentFrame = this.currentFrame;
        if (currentFrame) {
            currentFrame.open();
        }
    };
    DebugSessionManager.prototype.updateBreakpoints = function (previous, current) {
        var e_3, _a, e_4, _b;
        var affectedUri = new Set();
        try {
            for (var _c = __values([previous, current]), _d = _c.next(); !_d.done; _d = _c.next()) {
                var session = _d.value;
                if (session) {
                    try {
                        for (var _e = (e_4 = void 0, __values(session.breakpointUris)), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var uriString = _f.value;
                            if (!affectedUri.has(uriString)) {
                                affectedUri.add(uriString);
                                this.fireDidChangeBreakpoints({
                                    session: current,
                                    uri: new uri_1.default(uriString)
                                });
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
    };
    DebugSessionManager.prototype.updateCurrentSession = function (session) {
        this.currentSession = session || this.sessions[0];
    };
    Object.defineProperty(DebugSessionManager.prototype, "currentThread", {
        get: function () {
            var session = this.currentSession;
            return session && session.currentThread;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugSessionManager.prototype, "state", {
        get: function () {
            var session = this.currentSession;
            return session ? session.state : debug_session_1.DebugState.Inactive;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugSessionManager.prototype, "currentFrame", {
        get: function () {
            var currentThread = this.currentThread;
            return currentThread && currentThread.currentFrame;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugSessionManager.prototype, "topFrame", {
        get: function () {
            var currentThread = this.currentThread;
            return currentThread && currentThread.topFrame;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Destroy the debug session. If session identifier isn't provided then
     * all active debug session will be destroyed.
     * @param sessionId The session identifier
     */
    DebugSessionManager.prototype.destroy = function (sessionId) {
        var _this = this;
        if (sessionId) {
            var session = this._sessions.get(sessionId);
            if (session) {
                this.doDestroy(session);
            }
        }
        else {
            this._sessions.forEach(function (session) { return _this.doDestroy(session); });
        }
    };
    DebugSessionManager.prototype.doDestroy = function (session) {
        this.debug.terminateDebugSession(session.id);
        session.dispose();
        this.remove(session.id);
        this.onDidDestroyDebugSessionEmitter.fire(session);
    };
    DebugSessionManager.prototype.getFunctionBreakpoints = function (session) {
        if (session === void 0) { session = this.currentSession; }
        if (session && session.state > debug_session_1.DebugState.Initializing) {
            return session.getFunctionBreakpoints();
        }
        var _a = this, labelProvider = _a.labelProvider, breakpoints = _a.breakpoints, editorManager = _a.editorManager;
        return this.breakpoints.getFunctionBreakpoints().map(function (origin) { return new debug_function_breakpoint_1.DebugFunctionBreakpoint(origin, { labelProvider: labelProvider, breakpoints: breakpoints, editorManager: editorManager }); });
    };
    DebugSessionManager.prototype.getBreakpoints = function (arg, arg2) {
        var uri = arg instanceof uri_1.default ? arg : undefined;
        var session = arg instanceof debug_session_1.DebugSession ? arg : arg2 instanceof debug_session_1.DebugSession ? arg2 : this.currentSession;
        if (session && session.state > debug_session_1.DebugState.Initializing) {
            return session.getSourceBreakpoints(uri);
        }
        var _a = this, labelProvider = _a.labelProvider, breakpoints = _a.breakpoints, editorManager = _a.editorManager;
        return this.breakpoints.findMarkers({ uri: uri }).map(function (_a) {
            var data = _a.data;
            return new debug_source_breakpoint_1.DebugSourceBreakpoint(data, { labelProvider: labelProvider, breakpoints: breakpoints, editorManager: editorManager });
        });
    };
    DebugSessionManager.prototype.getLineBreakpoints = function (uri, line) {
        var session = this.currentSession;
        if (session && session.state > debug_session_1.DebugState.Initializing) {
            return session.getSourceBreakpoints(uri).filter(function (breakpoint) { return breakpoint.line === line; });
        }
        var _a = this, labelProvider = _a.labelProvider, breakpoints = _a.breakpoints, editorManager = _a.editorManager;
        return this.breakpoints.getLineBreakpoints(uri, line).map(function (origin) {
            return new debug_source_breakpoint_1.DebugSourceBreakpoint(origin, { labelProvider: labelProvider, breakpoints: breakpoints, editorManager: editorManager });
        });
    };
    DebugSessionManager.prototype.getInlineBreakpoint = function (uri, line, column) {
        var session = this.currentSession;
        if (session && session.state > debug_session_1.DebugState.Initializing) {
            return session.getSourceBreakpoints(uri).filter(function (breakpoint) { return breakpoint.line === line && breakpoint.column === column; })[0];
        }
        var origin = this.breakpoints.getInlineBreakpoint(uri, line, column);
        var _a = this, labelProvider = _a.labelProvider, breakpoints = _a.breakpoints, editorManager = _a.editorManager;
        return origin && new debug_source_breakpoint_1.DebugSourceBreakpoint(origin, { labelProvider: labelProvider, breakpoints: breakpoints, editorManager: editorManager });
    };
    /**
     * Runs the given tasks.
     * @param taskName the task name to run, see [TaskNameResolver](#TaskNameResolver)
     * @return true if it allowed to continue debugging otherwise it returns false
     */
    DebugSessionManager.prototype.runTask = function (workspaceFolderUri, taskName, checkErrors) {
        return __awaiter(this, void 0, void 0, function () {
            var taskInfo, getExitCodePromise, isBackgroundTaskEndedPromise, taskEndedInfo, signal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!taskName) {
                            return [2 /*return*/, true];
                        }
                        return [4 /*yield*/, this.taskService.runWorkspaceTask(this.taskService.startUserAction(), workspaceFolderUri, taskName)];
                    case 1:
                        taskInfo = _a.sent();
                        if (!checkErrors) {
                            return [2 /*return*/, true];
                        }
                        if (!taskInfo) {
                            return [2 /*return*/, this.doPostTaskAction("Could not run the task '" + taskName + "'.")];
                        }
                        getExitCodePromise = this.taskService.getExitCode(taskInfo.taskId).then(function (result) {
                            return ({ taskEndedType: task_service_1.TaskEndedTypes.TaskExited, value: result });
                        });
                        isBackgroundTaskEndedPromise = this.taskService.isBackgroundTaskEnded(taskInfo.taskId).then(function (result) {
                            return ({ taskEndedType: task_service_1.TaskEndedTypes.BackgroundTaskEnded, value: result });
                        });
                        return [4 /*yield*/, Promise.race([getExitCodePromise, isBackgroundTaskEndedPromise])];
                    case 2:
                        taskEndedInfo = _a.sent();
                        if (taskEndedInfo.taskEndedType === task_service_1.TaskEndedTypes.BackgroundTaskEnded && taskEndedInfo.value) {
                            return [2 /*return*/, true];
                        }
                        if (!(taskEndedInfo.taskEndedType === task_service_1.TaskEndedTypes.TaskExited && taskEndedInfo.value === 0)) return [3 /*break*/, 3];
                        return [2 /*return*/, true];
                    case 3:
                        if (!(taskEndedInfo.taskEndedType === task_service_1.TaskEndedTypes.TaskExited && taskEndedInfo.value !== undefined)) return [3 /*break*/, 4];
                        return [2 /*return*/, this.doPostTaskAction("Task '" + taskName + "' terminated with exit code " + taskEndedInfo.value + ".")];
                    case 4: return [4 /*yield*/, this.taskService.getTerminateSignal(taskInfo.taskId)];
                    case 5:
                        signal = _a.sent();
                        if (signal !== undefined) {
                            return [2 /*return*/, this.doPostTaskAction("Task '" + taskName + "' terminated by signal " + signal + ".")];
                        }
                        else {
                            return [2 /*return*/, this.doPostTaskAction("Task '" + taskName + "' terminated for unknown reason.")];
                        }
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    DebugSessionManager.prototype.doPostTaskAction = function (errorMessage) {
        return __awaiter(this, void 0, void 0, function () {
            var actions, result;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        actions = ['Open launch.json', 'Cancel', 'Configure Task', 'Debug Anyway'];
                        return [4 /*yield*/, (_a = this.messageService).error.apply(_a, __spread([errorMessage], actions))];
                    case 1:
                        result = _b.sent();
                        switch (result) {
                            case actions[0]: // open launch.json
                                this.debugConfigurationManager.openConfiguration();
                                return [2 /*return*/, false];
                            case actions[1]: // cancel
                                return [2 /*return*/, false];
                            case actions[2]: // configure tasks
                                this.quickOpenTask.configure();
                                return [2 /*return*/, false];
                            default: // continue debugging
                                return [2 /*return*/, true];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(debug_session_contribution_1.DebugSessionFactory),
        __metadata("design:type", Object)
    ], DebugSessionManager.prototype, "debugSessionFactory", void 0);
    __decorate([
        inversify_1.inject(debug_service_1.DebugService),
        __metadata("design:type", Object)
    ], DebugSessionManager.prototype, "debug", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], DebugSessionManager.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], DebugSessionManager.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(breakpoint_manager_1.BreakpointManager),
        __metadata("design:type", breakpoint_manager_1.BreakpointManager)
    ], DebugSessionManager.prototype, "breakpoints", void 0);
    __decorate([
        inversify_1.inject(browser_3.VariableResolverService),
        __metadata("design:type", browser_3.VariableResolverService)
    ], DebugSessionManager.prototype, "variableResolver", void 0);
    __decorate([
        inversify_1.inject(debug_session_contribution_1.DebugSessionContributionRegistry),
        __metadata("design:type", Object)
    ], DebugSessionManager.prototype, "sessionContributionRegistry", void 0);
    __decorate([
        inversify_1.inject(core_1.MessageService),
        __metadata("design:type", core_1.MessageService)
    ], DebugSessionManager.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(core_1.ProgressService),
        __metadata("design:type", core_1.ProgressService)
    ], DebugSessionManager.prototype, "progressService", void 0);
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], DebugSessionManager.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.inject(task_service_1.TaskService),
        __metadata("design:type", task_service_1.TaskService)
    ], DebugSessionManager.prototype, "taskService", void 0);
    __decorate([
        inversify_1.inject(debug_configuration_manager_1.DebugConfigurationManager),
        __metadata("design:type", debug_configuration_manager_1.DebugConfigurationManager)
    ], DebugSessionManager.prototype, "debugConfigurationManager", void 0);
    __decorate([
        inversify_1.inject(quick_open_task_1.QuickOpenTask),
        __metadata("design:type", quick_open_task_1.QuickOpenTask)
    ], DebugSessionManager.prototype, "quickOpenTask", void 0);
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], DebugSessionManager.prototype, "shell", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugSessionManager.prototype, "init", null);
    DebugSessionManager = __decorate([
        inversify_1.injectable()
    ], DebugSessionManager);
    return DebugSessionManager;
}());
exports.DebugSessionManager = DebugSessionManager;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/debug-session-options.js":
/*!************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/debug-session-options.js ***!
  \************************************************************************/
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
exports.InternalDebugSessionOptions = void 0;
var InternalDebugSessionOptions;
(function (InternalDebugSessionOptions) {
    function is(options) {
        return ('id' in options);
    }
    InternalDebugSessionOptions.is = is;
})(InternalDebugSessionOptions = exports.InternalDebugSessionOptions || (exports.InternalDebugSessionOptions = {}));


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/debug-session.js":
/*!****************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/debug-session.js ***!
  \****************************************************************/
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
exports.DebugSession = exports.DebugState = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var debug_thread_1 = __webpack_require__(/*! ./model/debug-thread */ "./node_modules/@theia/debug/lib/browser/model/debug-thread.js");
var debug_source_1 = __webpack_require__(/*! ./model/debug-source */ "./node_modules/@theia/debug/lib/browser/model/debug-source.js");
var debug_source_breakpoint_1 = __webpack_require__(/*! ./model/debug-source-breakpoint */ "./node_modules/@theia/debug/lib/browser/model/debug-source-breakpoint.js");
var debounce = __webpack_require__(/*! p-debounce */ "./node_modules/p-debounce/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var breakpoint_manager_1 = __webpack_require__(/*! ./breakpoint/breakpoint-manager */ "./node_modules/@theia/debug/lib/browser/breakpoint/breakpoint-manager.js");
var debug_session_options_1 = __webpack_require__(/*! ./debug-session-options */ "./node_modules/@theia/debug/lib/browser/debug-session-options.js");
var breakpoint_marker_1 = __webpack_require__(/*! ./breakpoint/breakpoint-marker */ "./node_modules/@theia/debug/lib/browser/breakpoint/breakpoint-marker.js");
var debug_function_breakpoint_1 = __webpack_require__(/*! ./model/debug-function-breakpoint */ "./node_modules/@theia/debug/lib/browser/model/debug-function-breakpoint.js");
var DebugState;
(function (DebugState) {
    DebugState[DebugState["Inactive"] = 0] = "Inactive";
    DebugState[DebugState["Initializing"] = 1] = "Initializing";
    DebugState[DebugState["Running"] = 2] = "Running";
    DebugState[DebugState["Stopped"] = 3] = "Stopped";
})(DebugState = exports.DebugState || (exports.DebugState = {}));
// FIXME: make injectable to allow easily inject services
var DebugSession = /** @class */ (function () {
    function DebugSession(id, options, connection, terminalServer, editorManager, breakpoints, labelProvider, messages, fileSystem) {
        var _this = this;
        this.id = id;
        this.options = options;
        this.connection = connection;
        this.terminalServer = terminalServer;
        this.editorManager = editorManager;
        this.breakpoints = breakpoints;
        this.labelProvider = labelProvider;
        this.messages = messages;
        this.fileSystem = fileSystem;
        this.onDidChangeEmitter = new common_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.onDidChangeBreakpointsEmitter = new common_1.Emitter();
        this.onDidChangeBreakpoints = this.onDidChangeBreakpointsEmitter.event;
        this.toDispose = new common_1.DisposableCollection();
        this._capabilities = {};
        this.sources = new Map();
        this._threads = new Map();
        this.toDisposeOnCurrentThread = new common_1.DisposableCollection();
        this.initialized = false;
        this.terminated = false;
        this.scheduleUpdateThreads = debounce(function () { return _this.updateThreads(undefined); }, 100);
        this.pendingThreads = Promise.resolve();
        this._breakpoints = new Map();
        this.updatingBreakpoints = false;
        this.connection.onRequest('runInTerminal', function (request) { return _this.runInTerminal(request); });
        this.toDispose.pushAll([
            this.onDidChangeEmitter,
            this.onDidChangeBreakpointsEmitter,
            common_1.Disposable.create(function () {
                _this.clearBreakpoints();
                _this.doUpdateThreads([]);
            }),
            this.connection,
            this.on('initialized', function () { return _this.configure(); }),
            this.on('breakpoint', function (_a) {
                var body = _a.body;
                return _this.updateBreakpoint(body);
            }),
            this.on('continued', function (_a) {
                var _b = _a.body, allThreadsContinued = _b.allThreadsContinued, threadId = _b.threadId;
                if (allThreadsContinued !== false) {
                    _this.clearThreads();
                }
                else {
                    _this.clearThread(threadId);
                }
            }),
            this.on('stopped', function (_a) {
                var body = _a.body;
                return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: 
                            // Update thread list
                            return [4 /*yield*/, this.updateThreads(body)];
                            case 1:
                                // Update thread list
                                _b.sent();
                                // Update current thread's frames immediately
                                return [4 /*yield*/, this.updateFrames()];
                            case 2:
                                // Update current thread's frames immediately
                                _b.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            }),
            this.on('thread', function (_a) {
                var _b = _a.body, reason = _b.reason, threadId = _b.threadId;
                if (reason === 'started') {
                    _this.scheduleUpdateThreads();
                }
                else if (reason === 'exited') {
                    _this.clearThread(threadId);
                }
            }),
            this.on('terminated', function () { return _this.terminated = true; }),
            this.on('capabilities', function (event) { return _this.updateCapabilities(event.body.capabilities); }),
            this.breakpoints.onDidChangeMarkers(function (uri) { return _this.updateBreakpoints({ uri: uri, sourceModified: true }); })
        ]);
    }
    DebugSession.prototype.fireDidChange = function () {
        this.onDidChangeEmitter.fire(undefined);
    };
    DebugSession.prototype.fireDidChangeBreakpoints = function (uri) {
        this.onDidChangeBreakpointsEmitter.fire(uri);
    };
    DebugSession.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    Object.defineProperty(DebugSession.prototype, "configuration", {
        get: function () {
            return this.options.configuration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugSession.prototype, "capabilities", {
        get: function () {
            return this._capabilities;
        },
        enumerable: false,
        configurable: true
    });
    DebugSession.prototype.getSource = function (raw) {
        var uri = debug_source_1.DebugSource.toUri(raw).toString();
        var source = this.sources.get(uri) || new debug_source_1.DebugSource(this, this.editorManager, this.labelProvider);
        source.update({ raw: raw });
        this.sources.set(uri, source);
        return source;
    };
    DebugSession.prototype.getSourceForUri = function (uri) {
        return this.sources.get(uri.toString());
    };
    DebugSession.prototype.toSource = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var source, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        source = this.getSourceForUri(uri);
                        if (source) {
                            return [2 /*return*/, source];
                        }
                        _a = this.getSource;
                        return [4 /*yield*/, this.toDebugSource(uri)];
                    case 1: return [2 /*return*/, _a.apply(this, [_b.sent()])];
                }
            });
        });
    };
    DebugSession.prototype.toDebugSource = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var name, path;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (uri.scheme === debug_source_1.DebugSource.SCHEME) {
                            return [2 /*return*/, {
                                    name: uri.path.toString(),
                                    sourceReference: Number(uri.query)
                                }];
                        }
                        name = uri.displayName;
                        path = uri.toString();
                        if (!(uri.scheme === 'file')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fileSystem.getFsPath(path)];
                    case 1:
                        path = _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, { name: name, path: path }];
                }
            });
        });
    };
    Object.defineProperty(DebugSession.prototype, "threads", {
        get: function () {
            return this._threads.values();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugSession.prototype, "threadCount", {
        get: function () {
            return this._threads.size;
        },
        enumerable: false,
        configurable: true
    });
    DebugSession.prototype.getThreads = function (filter) {
        var _a, _b, thread, e_1_1;
        var e_1, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    _a = __values(this.threads), _b = _a.next();
                    _d.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 4];
                    thread = _b.value;
                    if (!filter(thread)) return [3 /*break*/, 3];
                    return [4 /*yield*/, thread];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
    Object.defineProperty(DebugSession.prototype, "runningThreads", {
        get: function () {
            return this.getThreads(function (thread) { return !thread.stopped; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugSession.prototype, "stoppedThreads", {
        get: function () {
            return this.getThreads(function (thread) { return thread.stopped; });
        },
        enumerable: false,
        configurable: true
    });
    DebugSession.prototype.pauseAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var promises, _loop_1, _a, _b, thread;
            var e_2, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        promises = [];
                        _loop_1 = function (thread) {
                            promises.push((function () { return __awaiter(_this, void 0, void 0, function () {
                                var e_3;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 2, , 3]);
                                            return [4 /*yield*/, thread.pause()];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            e_3 = _a.sent();
                                            console.error(e_3);
                                            return [3 /*break*/, 3];
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); })());
                        };
                        try {
                            for (_a = __values(this.runningThreads), _b = _a.next(); !_b.done; _b = _a.next()) {
                                thread = _b.value;
                                _loop_1(thread);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugSession.prototype.continueAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var promises, _loop_2, _a, _b, thread;
            var e_4, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        promises = [];
                        _loop_2 = function (thread) {
                            promises.push((function () { return __awaiter(_this, void 0, void 0, function () {
                                var e_5;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 2, , 3]);
                                            return [4 /*yield*/, thread.continue()];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 3];
                                        case 2:
                                            e_5 = _a.sent();
                                            console.error(e_5);
                                            return [3 /*break*/, 3];
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); })());
                        };
                        try {
                            for (_a = __values(this.stoppedThreads), _b = _a.next(); !_b.done; _b = _a.next()) {
                                thread = _b.value;
                                _loop_2(thread);
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(DebugSession.prototype, "currentFrame", {
        get: function () {
            return this.currentThread && this.currentThread.currentFrame;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugSession.prototype, "currentThread", {
        get: function () {
            return this._currentThread;
        },
        set: function (thread) {
            var _this = this;
            this.toDisposeOnCurrentThread.dispose();
            this._currentThread = thread;
            this.fireDidChange();
            if (thread) {
                this.toDisposeOnCurrentThread.push(thread.onDidChanged(function () { return _this.fireDidChange(); }));
                // If this thread is missing stack frame information, then load that.
                this.updateFrames();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugSession.prototype, "state", {
        get: function () {
            if (this.connection.disposed) {
                return DebugState.Inactive;
            }
            if (!this.initialized) {
                return DebugState.Initializing;
            }
            var thread = this.currentThread;
            if (thread) {
                return thread.stopped ? DebugState.Stopped : DebugState.Running;
            }
            return !!this.stoppedThreads.next().value ? DebugState.Stopped : DebugState.Running;
        },
        enumerable: false,
        configurable: true
    });
    DebugSession.prototype.getScopes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentFrame;
            return __generator(this, function (_a) {
                currentFrame = this.currentFrame;
                return [2 /*return*/, currentFrame ? currentFrame.getScopes() : []];
            });
        });
    };
    DebugSession.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialize()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.launchOrAttach()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugSession.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connection.sendRequest('initialize', {
                            clientID: 'Theia',
                            clientName: 'Theia IDE',
                            adapterID: this.configuration.type,
                            locale: 'en-US',
                            linesStartAt1: true,
                            columnsStartAt1: true,
                            pathFormat: 'path',
                            supportsVariableType: false,
                            supportsVariablePaging: false,
                            supportsRunInTerminalRequest: true
                        })];
                    case 1:
                        response = _a.sent();
                        this.updateCapabilities(response.body || {});
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugSession.prototype.launchOrAttach = function () {
        return __awaiter(this, void 0, void 0, function () {
            var reason_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 7]);
                        if (!(this.configuration.request === 'attach')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.sendRequest('attach', this.configuration)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.sendRequest('launch', this.configuration)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        reason_1 = _a.sent();
                        this.fireExited(reason_1);
                        return [4 /*yield*/, this.messages.showMessage({
                                type: common_1.MessageType.Error,
                                text: reason_1.message || 'Debug session initialization failed. See console for details.',
                                options: {
                                    timeout: 10000
                                }
                            })];
                    case 6:
                        _a.sent();
                        throw reason_1;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    DebugSession.prototype.configure = function () {
        return __awaiter(this, void 0, void 0, function () {
            var exceptionBreakpoints, _a, _b, filter, origin_1;
            var e_6, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (this.capabilities.exceptionBreakpointFilters) {
                            exceptionBreakpoints = [];
                            try {
                                for (_a = __values(this.capabilities.exceptionBreakpointFilters), _b = _a.next(); !_b.done; _b = _a.next()) {
                                    filter = _b.value;
                                    origin_1 = this.breakpoints.getExceptionBreakpoint(filter.filter);
                                    exceptionBreakpoints.push(breakpoint_marker_1.ExceptionBreakpoint.create(filter, origin_1));
                                }
                            }
                            catch (e_6_1) { e_6 = { error: e_6_1 }; }
                            finally {
                                try {
                                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                }
                                finally { if (e_6) throw e_6.error; }
                            }
                            this.breakpoints.setExceptionBreakpoints(exceptionBreakpoints);
                        }
                        return [4 /*yield*/, this.updateBreakpoints({ sourceModified: false })];
                    case 1:
                        _d.sent();
                        if (!this.capabilities.supportsConfigurationDoneRequest) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.sendRequest('configurationDone', {})];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3:
                        this.initialized = true;
                        return [4 /*yield*/, this.updateThreads(undefined)];
                    case 4:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugSession.prototype.terminate = function (restart) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!this.terminated && this.capabilities.supportsTerminateRequest && this.configuration.request === 'launch')) return [3 /*break*/, 5];
                        this.terminated = true;
                        return [4 /*yield*/, this.connection.sendRequest('terminate', { restart: restart })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.exited(1000)];
                    case 2:
                        if (!!(_a.sent())) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.disconnect(restart)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.disconnect(restart)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    DebugSession.prototype.disconnect = function (restart) {
        return __awaiter(this, void 0, void 0, function () {
            var reason_2, timeout;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.sendRequest('disconnect', { restart: restart })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        reason_2 = _a.sent();
                        this.fireExited(reason_2);
                        return [2 /*return*/];
                    case 3:
                        timeout = 500;
                        return [4 /*yield*/, this.exited(timeout)];
                    case 4:
                        if (!(_a.sent())) {
                            this.fireExited(new Error("timeout after " + timeout + " ms"));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugSession.prototype.fireExited = function (reason) {
        this.connection['fire']('exited', { reason: reason });
    };
    DebugSession.prototype.exited = function (timeout) {
        var _this = this;
        return new Promise(function (resolve) {
            var listener = _this.on('exited', function () {
                listener.dispose();
                resolve(true);
            });
            setTimeout(function () {
                listener.dispose();
                resolve(false);
            }, timeout);
        });
    };
    DebugSession.prototype.restart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.capabilities.supportsRestartRequest) return [3 /*break*/, 2];
                        this.terminated = false;
                        return [4 /*yield*/, this.sendRequest('restart', {})];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 2: return [2 /*return*/, false];
                }
            });
        });
    };
    DebugSession.prototype.completions = function (text, column, line) {
        return __awaiter(this, void 0, void 0, function () {
            var frameId, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        frameId = this.currentFrame && this.currentFrame.raw.id;
                        return [4 /*yield*/, this.sendRequest('completions', { frameId: frameId, text: text, column: column, line: line })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.body.targets];
                }
            });
        });
    };
    DebugSession.prototype.evaluate = function (expression, context) {
        return __awaiter(this, void 0, void 0, function () {
            var frameId, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        frameId = this.currentFrame && this.currentFrame.raw.id;
                        return [4 /*yield*/, this.sendRequest('evaluate', { expression: expression, frameId: frameId, context: context })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.body];
                }
            });
        });
    };
    DebugSession.prototype.sendRequest = function (command, args) {
        return this.connection.sendRequest(command, args);
    };
    DebugSession.prototype.sendCustomRequest = function (command, args) {
        return this.connection.sendCustomRequest(command, args);
    };
    DebugSession.prototype.on = function (kind, listener) {
        return this.connection.on(kind, listener);
    };
    Object.defineProperty(DebugSession.prototype, "onDidCustomEvent", {
        get: function () {
            return this.connection.onDidCustomEvent;
        },
        enumerable: false,
        configurable: true
    });
    DebugSession.prototype.runInTerminal = function (_a) {
        var _b = _a.arguments, title = _b.title, cwd = _b.cwd, args = _b.args, env = _b.env;
        return __awaiter(this, void 0, void 0, function () {
            var terminal, processId, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.doCreateTerminal({ title: title, cwd: cwd, env: env, useServerTitle: false })];
                    case 1:
                        terminal = _d.sent();
                        processId = terminal.processId;
                        return [4 /*yield*/, terminal.executeCommand({ cwd: cwd, args: args, env: env })];
                    case 2:
                        _d.sent();
                        _c = {};
                        return [4 /*yield*/, processId];
                    case 3: return [2 /*return*/, (_c.processId = _d.sent(), _c)];
                }
            });
        });
    };
    DebugSession.prototype.doCreateTerminal = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var terminal, _a, _b, t, _c, e_7_1;
            var e_7, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        terminal = undefined;
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 7, 8, 9]);
                        _a = __values(this.terminalServer.all), _b = _a.next();
                        _e.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 6];
                        t = _b.value;
                        _c = (t.title.label === options.title || t.title.caption === options.title);
                        if (!_c) return [3 /*break*/, 4];
                        return [4 /*yield*/, t.hasChildProcesses()];
                    case 3:
                        _c = (_e.sent()) === false;
                        _e.label = 4;
                    case 4:
                        if (_c) {
                            terminal = t;
                            return [3 /*break*/, 6];
                        }
                        _e.label = 5;
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_7_1 = _e.sent();
                        e_7 = { error: e_7_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_7) throw e_7.error; }
                        return [7 /*endfinally*/];
                    case 9:
                        if (!!terminal) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.terminalServer.newTerminal(options)];
                    case 10:
                        terminal = _e.sent();
                        return [4 /*yield*/, terminal.start()];
                    case 11:
                        _e.sent();
                        _e.label = 12;
                    case 12:
                        this.terminalServer.open(terminal);
                        return [2 /*return*/, terminal];
                }
            });
        });
    };
    DebugSession.prototype.clearThreads = function () {
        var e_8, _a;
        try {
            for (var _b = __values(this.threads), _c = _b.next(); !_c.done; _c = _b.next()) {
                var thread = _c.value;
                thread.clear();
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_8) throw e_8.error; }
        }
        this.updateCurrentThread();
    };
    DebugSession.prototype.clearThread = function (threadId) {
        var thread = this._threads.get(threadId);
        if (thread) {
            thread.clear();
        }
        this.updateCurrentThread();
    };
    DebugSession.prototype.updateThreads = function (stoppedDetails) {
        var _this = this;
        return this.pendingThreads = this.pendingThreads.then(function () { return __awaiter(_this, void 0, void 0, function () {
            var response, threads, e_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.sendRequest('threads', {})];
                    case 1:
                        response = _a.sent();
                        threads = response && response.body && response.body.threads || [];
                        this.doUpdateThreads(threads, stoppedDetails);
                        return [3 /*break*/, 3];
                    case 2:
                        e_9 = _a.sent();
                        console.error(e_9);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    DebugSession.prototype.doUpdateThreads = function (threads, stoppedDetails) {
        var e_10, _a;
        var existing = this._threads;
        this._threads = new Map();
        try {
            for (var threads_1 = __values(threads), threads_1_1 = threads_1.next(); !threads_1_1.done; threads_1_1 = threads_1.next()) {
                var raw = threads_1_1.value;
                var id = raw.id;
                var thread = existing.get(id) || new debug_thread_1.DebugThread(this);
                this._threads.set(id, thread);
                var data = { raw: raw };
                if (stoppedDetails) {
                    if (stoppedDetails.threadId === id) {
                        data.stoppedDetails = stoppedDetails;
                    }
                    else if (stoppedDetails.allThreadsStopped) {
                        data.stoppedDetails = {
                            // When a debug adapter notifies us that all threads are stopped,
                            // we do not know why the others are stopped, so we should default
                            // to something generic.
                            reason: '',
                        };
                    }
                }
                thread.update(data);
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (threads_1_1 && !threads_1_1.done && (_a = threads_1.return)) _a.call(threads_1);
            }
            finally { if (e_10) throw e_10.error; }
        }
        this.updateCurrentThread(stoppedDetails);
    };
    DebugSession.prototype.updateCurrentThread = function (stoppedDetails) {
        var currentThread = this.currentThread;
        var threadId = currentThread && currentThread.raw.id;
        if (stoppedDetails && !stoppedDetails.preserveFocusHint && !!stoppedDetails.threadId) {
            threadId = stoppedDetails.threadId;
        }
        this.currentThread = typeof threadId === 'number' && this._threads.get(threadId)
            || this._threads.values().next().value;
    };
    DebugSession.prototype.updateFrames = function () {
        return __awaiter(this, void 0, void 0, function () {
            var thread;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        thread = this._currentThread;
                        if (!thread || thread.pendingFrameCount || thread.frameCount) {
                            return [2 /*return*/];
                        }
                        if (!this.capabilities.supportsDelayedStackTraceLoading) return [3 /*break*/, 3];
                        return [4 /*yield*/, thread.fetchFrames(1)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, thread.fetchFrames(19)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, thread.fetchFrames()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    DebugSession.prototype.updateCapabilities = function (capabilities) {
        Object.assign(this._capabilities, capabilities);
    };
    Object.defineProperty(DebugSession.prototype, "breakpointUris", {
        get: function () {
            return this._breakpoints.keys();
        },
        enumerable: false,
        configurable: true
    });
    DebugSession.prototype.getSourceBreakpoints = function (uri) {
        var e_11, _a;
        var breakpoints = [];
        try {
            for (var _b = __values(this.getBreakpoints(uri)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var breakpoint = _c.value;
                if (breakpoint instanceof debug_source_breakpoint_1.DebugSourceBreakpoint) {
                    breakpoints.push(breakpoint);
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
        return breakpoints;
    };
    DebugSession.prototype.getFunctionBreakpoints = function () {
        var e_12, _a;
        var breakpoints = [];
        try {
            for (var _b = __values(this.getBreakpoints(breakpoint_manager_1.BreakpointManager.FUNCTION_URI)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var breakpoint = _c.value;
                if (breakpoint instanceof debug_function_breakpoint_1.DebugFunctionBreakpoint) {
                    breakpoints.push(breakpoint);
                }
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return breakpoints;
    };
    DebugSession.prototype.getBreakpoints = function (uri) {
        var e_13, _a;
        if (uri) {
            return this._breakpoints.get(uri.toString()) || [];
        }
        var result = [];
        try {
            for (var _b = __values(this._breakpoints.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var breakpoints = _c.value;
                result.push.apply(result, __spread(breakpoints));
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_13) throw e_13.error; }
        }
        return result;
    };
    DebugSession.prototype.clearBreakpoints = function () {
        var e_14, _a;
        var uris = __spread(this._breakpoints.keys());
        this._breakpoints.clear();
        try {
            for (var uris_1 = __values(uris), uris_1_1 = uris_1.next(); !uris_1_1.done; uris_1_1 = uris_1.next()) {
                var uri = uris_1_1.value;
                this.fireDidChangeBreakpoints(new uri_1.default(uri));
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (uris_1_1 && !uris_1_1.done && (_a = uris_1.return)) _a.call(uris_1);
            }
            finally { if (e_14) throw e_14.error; }
        }
    };
    DebugSession.prototype.updateBreakpoint = function (body) {
        this.updatingBreakpoints = true;
        try {
            var raw_1 = body.breakpoint;
            if (body.reason === 'new') {
                if (raw_1.source && typeof raw_1.line === 'number') {
                    var uri = debug_source_1.DebugSource.toUri(raw_1.source);
                    var origin_2 = breakpoint_marker_1.SourceBreakpoint.create(uri, { line: raw_1.line, column: raw_1.column });
                    if (this.breakpoints.addBreakpoint(origin_2)) {
                        var breakpoints = this.getSourceBreakpoints(uri);
                        var breakpoint = new debug_source_breakpoint_1.DebugSourceBreakpoint(origin_2, this.asDebugBreakpointOptions());
                        breakpoint.update({ raw: raw_1 });
                        breakpoints.push(breakpoint);
                        this.setSourceBreakpoints(uri, breakpoints);
                    }
                }
            }
            if (body.reason === 'removed' && raw_1.id) {
                var toRemove = this.findBreakpoint(function (b) { return b.idFromAdapter === raw_1.id; });
                if (toRemove) {
                    toRemove.remove();
                    var breakpoints = this.getBreakpoints(toRemove.uri);
                    var index = breakpoints.indexOf(toRemove);
                    if (index !== -1) {
                        breakpoints.splice(index, 1);
                        this.setBreakpoints(toRemove.uri, breakpoints);
                    }
                }
            }
            if (body.reason === 'changed' && raw_1.id) {
                var toUpdate = this.findBreakpoint(function (b) { return b.idFromAdapter === raw_1.id; });
                if (toUpdate) {
                    toUpdate.update({ raw: raw_1 });
                    if (toUpdate instanceof debug_source_breakpoint_1.DebugSourceBreakpoint) {
                        var sourceBreakpoints = this.getSourceBreakpoints(toUpdate.uri);
                        // in order to dedup again if a debugger converted line breakpoint to inline breakpoint
                        // i.e. assigned a column to a line breakpoint
                        this.setSourceBreakpoints(toUpdate.uri, sourceBreakpoints);
                    }
                    else {
                        this.fireDidChangeBreakpoints(toUpdate.uri);
                    }
                }
            }
        }
        finally {
            this.updatingBreakpoints = false;
        }
    };
    DebugSession.prototype.findBreakpoint = function (match) {
        var e_15, _a, e_16, _b;
        try {
            for (var _c = __values(this._breakpoints), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), breakpoints = _e[1];
                try {
                    for (var breakpoints_1 = (e_16 = void 0, __values(breakpoints)), breakpoints_1_1 = breakpoints_1.next(); !breakpoints_1_1.done; breakpoints_1_1 = breakpoints_1.next()) {
                        var breakpoint = breakpoints_1_1.value;
                        if (match(breakpoint)) {
                            return breakpoint;
                        }
                    }
                }
                catch (e_16_1) { e_16 = { error: e_16_1 }; }
                finally {
                    try {
                        if (breakpoints_1_1 && !breakpoints_1_1.done && (_b = breakpoints_1.return)) _b.call(breakpoints_1);
                    }
                    finally { if (e_16) throw e_16.error; }
                }
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_15) throw e_15.error; }
        }
        return undefined;
    };
    DebugSession.prototype.updateBreakpoints = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, sourceModified, _a, _b, affectedUri, e_17_1;
            var e_17, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (this.updatingBreakpoints) {
                            return [2 /*return*/];
                        }
                        uri = options.uri, sourceModified = options.sourceModified;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 10, 11, 12]);
                        _a = __values(this.getAffectedUris(uri)), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 9];
                        affectedUri = _b.value;
                        if (!(affectedUri.toString() === breakpoint_manager_1.BreakpointManager.EXCEPTION_URI.toString())) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.sendExceptionBreakpoints()];
                    case 3:
                        _d.sent();
                        return [3 /*break*/, 8];
                    case 4:
                        if (!(affectedUri.toString() === breakpoint_manager_1.BreakpointManager.FUNCTION_URI.toString())) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.sendFunctionBreakpoints(affectedUri)];
                    case 5:
                        _d.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.sendSourceBreakpoints(affectedUri, sourceModified)];
                    case 7:
                        _d.sent();
                        _d.label = 8;
                    case 8:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 9: return [3 /*break*/, 12];
                    case 10:
                        e_17_1 = _d.sent();
                        e_17 = { error: e_17_1 };
                        return [3 /*break*/, 12];
                    case 11:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_17) throw e_17.error; }
                        return [7 /*endfinally*/];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    DebugSession.prototype.sendExceptionBreakpoints = function () {
        return __awaiter(this, void 0, void 0, function () {
            var filters, _a, _b, breakpoint;
            var e_18, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        filters = [];
                        try {
                            for (_a = __values(this.breakpoints.getExceptionBreakpoints()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                breakpoint = _b.value;
                                if (breakpoint.enabled) {
                                    filters.push(breakpoint.raw.filter);
                                }
                            }
                        }
                        catch (e_18_1) { e_18 = { error: e_18_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_18) throw e_18.error; }
                        }
                        return [4 /*yield*/, this.sendRequest('setExceptionBreakpoints', { filters: filters })];
                    case 1:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugSession.prototype.sendFunctionBreakpoints = function (affectedUri) {
        return __awaiter(this, void 0, void 0, function () {
            var all, enabled, response, error_1, genericMessage, message_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        all = this.breakpoints.getFunctionBreakpoints().map(function (origin) {
                            return new debug_function_breakpoint_1.DebugFunctionBreakpoint(origin, _this.asDebugBreakpointOptions());
                        });
                        enabled = all.filter(function (b) { return b.enabled; });
                        if (!this.capabilities.supportsFunctionBreakpoints) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.sendRequest('setFunctionBreakpoints', {
                                breakpoints: enabled.map(function (b) { return b.origin.raw; })
                            })];
                    case 2:
                        response = _a.sent();
                        response.body.breakpoints.map(function (raw, index) {
                            // node debug adapter returns more breakpoints sometimes
                            if (enabled[index]) {
                                enabled[index].update({ raw: raw });
                            }
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        // could be error or promise rejection of DebugProtocol.SetFunctionBreakpoints
                        if (error_1 instanceof Error) {
                            console.error("Error setting breakpoints: " + error_1.message);
                        }
                        else {
                            genericMessage = 'Function breakpoint not valid for current debug session';
                            message_1 = error_1.message ? "" + error_1.message : genericMessage;
                            console.warn("Could not handle function breakpoints: " + message_1 + ", disabling...");
                            enabled.forEach(function (b) { return b.update({
                                raw: {
                                    verified: false,
                                    message: message_1
                                }
                            }); });
                        }
                        return [3 /*break*/, 4];
                    case 4:
                        this.setBreakpoints(affectedUri, all);
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugSession.prototype.sendSourceBreakpoints = function (affectedUri, sourceModified) {
        return __awaiter(this, void 0, void 0, function () {
            var source, all, enabled, response, error_2, genericMessage, message_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toSource(affectedUri)];
                    case 1:
                        source = _a.sent();
                        all = this.breakpoints.findMarkers({ uri: affectedUri }).map(function (_a) {
                            var data = _a.data;
                            return new debug_source_breakpoint_1.DebugSourceBreakpoint(data, _this.asDebugBreakpointOptions());
                        });
                        enabled = all.filter(function (b) { return b.enabled; });
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.sendRequest('setBreakpoints', {
                                source: source.raw,
                                sourceModified: sourceModified,
                                breakpoints: enabled.map(function (_a) {
                                    var origin = _a.origin;
                                    return origin.raw;
                                })
                            })];
                    case 3:
                        response = _a.sent();
                        response.body.breakpoints.map(function (raw, index) {
                            // node debug adapter returns more breakpoints sometimes
                            if (enabled[index]) {
                                enabled[index].update({ raw: raw });
                            }
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        // could be error or promise rejection of DebugProtocol.SetBreakpointsResponse
                        if (error_2 instanceof Error) {
                            console.error("Error setting breakpoints: " + error_2.message);
                        }
                        else {
                            genericMessage = 'Breakpoint not valid for current debug session';
                            message_2 = error_2.message ? "" + error_2.message : genericMessage;
                            console.warn("Could not handle breakpoints for " + affectedUri + ": " + message_2 + ", disabling...");
                            enabled.forEach(function (b) { return b.update({
                                raw: {
                                    verified: false,
                                    message: message_2
                                }
                            }); });
                        }
                        return [3 /*break*/, 5];
                    case 5:
                        this.setSourceBreakpoints(affectedUri, all);
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugSession.prototype.setBreakpoints = function (uri, breakpoints) {
        this._breakpoints.set(uri.toString(), breakpoints);
        this.fireDidChangeBreakpoints(uri);
    };
    DebugSession.prototype.setSourceBreakpoints = function (uri, breakpoints) {
        var distinct = this.dedupSourceBreakpoints(breakpoints);
        this.setBreakpoints(uri, distinct);
    };
    DebugSession.prototype.dedupSourceBreakpoints = function (all) {
        var e_19, _a, _b, _c;
        var positions = new Map();
        try {
            for (var all_1 = __values(all), all_1_1 = all_1.next(); !all_1_1.done; all_1_1 = all_1.next()) {
                var breakpoint = all_1_1.value;
                var primary = positions.get(breakpoint.renderPosition()) || breakpoint;
                if (primary !== breakpoint) {
                    var secondary = breakpoint;
                    if (secondary.raw && secondary.raw.line === secondary.origin.raw.line && secondary.raw.column === secondary.origin.raw.column) {
                        _b = __read([breakpoint, primary], 2), primary = _b[0], secondary = _b[1];
                    }
                    (_c = primary.origins).push.apply(_c, __spread(secondary.origins));
                }
                positions.set(primary.renderPosition(), primary);
            }
        }
        catch (e_19_1) { e_19 = { error: e_19_1 }; }
        finally {
            try {
                if (all_1_1 && !all_1_1.done && (_a = all_1.return)) _a.call(all_1);
            }
            finally { if (e_19) throw e_19.error; }
        }
        return __spread(positions.values());
    };
    DebugSession.prototype.getAffectedUris = function (uri) {
        var _a, _b, uriString, e_20_1;
        var e_20, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (!uri) return [3 /*break*/, 2];
                    return [4 /*yield*/, uri];
                case 1:
                    _d.sent();
                    return [3 /*break*/, 12];
                case 2:
                    _d.trys.push([2, 7, 8, 9]);
                    _a = __values(this.breakpoints.getUris()), _b = _a.next();
                    _d.label = 3;
                case 3:
                    if (!!_b.done) return [3 /*break*/, 6];
                    uriString = _b.value;
                    return [4 /*yield*/, new uri_1.default(uriString)];
                case 4:
                    _d.sent();
                    _d.label = 5;
                case 5:
                    _b = _a.next();
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_20_1 = _d.sent();
                    e_20 = { error: e_20_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_20) throw e_20.error; }
                    return [7 /*endfinally*/];
                case 9: return [4 /*yield*/, breakpoint_manager_1.BreakpointManager.FUNCTION_URI];
                case 10:
                    _d.sent();
                    return [4 /*yield*/, breakpoint_manager_1.BreakpointManager.EXCEPTION_URI];
                case 11:
                    _d.sent();
                    _d.label = 12;
                case 12: return [2 /*return*/];
            }
        });
    };
    DebugSession.prototype.asDebugBreakpointOptions = function () {
        var _a = this, labelProvider = _a.labelProvider, breakpoints = _a.breakpoints, editorManager = _a.editorManager;
        return { labelProvider: labelProvider, breakpoints: breakpoints, editorManager: editorManager, session: this };
    };
    Object.defineProperty(DebugSession.prototype, "label", {
        get: function () {
            if (debug_session_options_1.InternalDebugSessionOptions.is(this.options) && this.options.id) {
                return this.configuration.name + ' (' + (this.options.id + 1) + ')';
            }
            return this.configuration.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugSession.prototype, "visible", {
        get: function () {
            return this.state > DebugState.Inactive;
        },
        enumerable: false,
        configurable: true
    });
    DebugSession.prototype.render = function () {
        return React.createElement("div", { className: 'theia-debug-session', title: 'Session' },
            React.createElement("span", { className: 'label' }, this.label),
            React.createElement("span", { className: 'status' }, this.state === DebugState.Stopped ? 'Paused' : 'Running'));
    };
    DebugSession.prototype.getElements = function () {
        return this.threads;
    };
    return DebugSession;
}());
exports.DebugSession = DebugSession;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/debug-watch-manager.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/debug-watch-manager.js ***!
  \**********************************************************************/
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
exports.DebugWatchManager = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var storage_service_1 = __webpack_require__(/*! @theia/core/lib/browser/storage-service */ "./node_modules/@theia/core/lib/browser/storage-service.js");
var DebugWatchManager = /** @class */ (function () {
    function DebugWatchManager() {
        this.onDidChangeEmitter = new event_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.idSequence = 0;
        this._watchExpressions = new Map();
    }
    Object.defineProperty(DebugWatchManager.prototype, "watchExpressions", {
        get: function () {
            return this._watchExpressions.entries();
        },
        enumerable: false,
        configurable: true
    });
    DebugWatchManager.prototype.addWatchExpression = function (expression) {
        var id = this.idSequence++;
        this._watchExpressions.set(id, expression);
        this.onDidChangeEmitter.fire(undefined);
        return id;
    };
    DebugWatchManager.prototype.removeWatchExpression = function (id) {
        if (!this._watchExpressions.has(id)) {
            return false;
        }
        this._watchExpressions.delete(id);
        this.onDidChangeEmitter.fire(undefined);
        return true;
    };
    DebugWatchManager.prototype.removeWatchExpressions = function () {
        if (this._watchExpressions.size) {
            this.idSequence = 0;
            this._watchExpressions.clear();
            this.onDidChangeEmitter.fire(undefined);
        }
    };
    DebugWatchManager.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getData(this.storageKey, {
                            expressions: []
                        })];
                    case 1:
                        data = _a.sent();
                        this.restoreState(data);
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugWatchManager.prototype.save = function () {
        var data = this.storeState();
        this.storage.setData(this.storageKey, data);
    };
    Object.defineProperty(DebugWatchManager.prototype, "storageKey", {
        get: function () {
            return 'debug:watch';
        },
        enumerable: false,
        configurable: true
    });
    DebugWatchManager.prototype.storeState = function () {
        return {
            expressions: __spread(this._watchExpressions.values())
        };
    };
    DebugWatchManager.prototype.restoreState = function (state) {
        var e_1, _a;
        try {
            for (var _b = __values(state.expressions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var expression = _c.value;
                this.addWatchExpression(expression);
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
    __decorate([
        inversify_1.inject(storage_service_1.StorageService),
        __metadata("design:type", Object)
    ], DebugWatchManager.prototype, "storage", void 0);
    DebugWatchManager = __decorate([
        inversify_1.injectable()
    ], DebugWatchManager);
    return DebugWatchManager;
}());
exports.DebugWatchManager = DebugWatchManager;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/model/debug-breakpoint.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/model/debug-breakpoint.js ***!
  \*************************************************************************/
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
exports.DebugBreakpoint = exports.DebugBreakpointDecoration = exports.DebugBreakpointOptions = exports.DebugBreakpointData = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var DebugBreakpointData = /** @class */ (function () {
    function DebugBreakpointData() {
    }
    return DebugBreakpointData;
}());
exports.DebugBreakpointData = DebugBreakpointData;
var DebugBreakpointOptions = /** @class */ (function () {
    function DebugBreakpointOptions() {
    }
    return DebugBreakpointOptions;
}());
exports.DebugBreakpointOptions = DebugBreakpointOptions;
var DebugBreakpointDecoration = /** @class */ (function () {
    function DebugBreakpointDecoration() {
    }
    return DebugBreakpointDecoration;
}());
exports.DebugBreakpointDecoration = DebugBreakpointDecoration;
var DebugBreakpoint = /** @class */ (function (_super) {
    __extends(DebugBreakpoint, _super);
    function DebugBreakpoint(uri, options) {
        var _this = _super.call(this) || this;
        _this.uri = uri;
        _this.setBreakpointEnabled = function (event) {
            _this.setEnabled(event.target.checked);
        };
        Object.assign(_this, options);
        return _this;
    }
    DebugBreakpoint.prototype.update = function (data) {
        Object.assign(this, data);
    };
    Object.defineProperty(DebugBreakpoint.prototype, "idFromAdapter", {
        get: function () {
            return this.raw && this.raw.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugBreakpoint.prototype, "id", {
        get: function () {
            return this.origin.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugBreakpoint.prototype, "enabled", {
        get: function () {
            return this.breakpoints.breakpointsEnabled && this.origin.enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugBreakpoint.prototype, "installed", {
        get: function () {
            return !!this.raw;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugBreakpoint.prototype, "verified", {
        get: function () {
            return !!this.raw ? this.raw.verified : true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugBreakpoint.prototype, "message", {
        get: function () {
            return this.raw && this.raw.message || '';
        },
        enumerable: false,
        configurable: true
    });
    DebugBreakpoint.prototype.render = function () {
        var classNames = ['theia-source-breakpoint'];
        if (!this.isEnabled()) {
            classNames.push(browser_1.DISABLED_CLASS);
        }
        var decoration = this.getDecoration();
        return React.createElement("div", { title: decoration.message.join('\n'), className: classNames.join(' ') },
            React.createElement("span", { className: 'theia-debug-breakpoint-icon ' + decoration.className }),
            React.createElement("input", { className: 'theia-input', type: 'checkbox', checked: this.origin.enabled, onChange: this.setBreakpointEnabled }),
            this.doRender());
    };
    DebugBreakpoint.prototype.isEnabled = function () {
        return this.breakpoints.breakpointsEnabled && this.verified;
    };
    DebugBreakpoint.prototype.getDecoration = function () {
        if (!this.enabled) {
            return this.getDisabledBreakpointDecoration();
        }
        if (this.installed && !this.verified) {
            return this.getUnverifiedBreakpointDecoration();
        }
        return this.doGetDecoration();
    };
    DebugBreakpoint.prototype.getUnverifiedBreakpointDecoration = function () {
        var decoration = this.getBreakpointDecoration();
        return {
            className: decoration.className + '-unverified',
            message: [this.message || 'Unverified ' + decoration.message[0]]
        };
    };
    DebugBreakpoint.prototype.getDisabledBreakpointDecoration = function (message) {
        var decoration = this.getBreakpointDecoration();
        return {
            className: decoration.className + '-disabled',
            message: [message || ('Disabled ' + decoration.message[0])]
        };
    };
    DebugBreakpoint.prototype.doGetDecoration = function (messages) {
        if (messages === void 0) { messages = []; }
        if (this.message) {
            if (messages.length) {
                messages[messages.length - 1].concat(', ' + this.message);
            }
            else {
                messages.push(this.message);
            }
        }
        return this.getBreakpointDecoration(messages);
    };
    return DebugBreakpoint;
}(DebugBreakpointOptions));
exports.DebugBreakpoint = DebugBreakpoint;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/model/debug-function-breakpoint.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/model/debug-function-breakpoint.js ***!
  \**********************************************************************************/
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
exports.DebugFunctionBreakpoint = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var breakpoint_manager_1 = __webpack_require__(/*! ../breakpoint/breakpoint-manager */ "./node_modules/@theia/debug/lib/browser/breakpoint/breakpoint-manager.js");
var debug_breakpoint_1 = __webpack_require__(/*! ./debug-breakpoint */ "./node_modules/@theia/debug/lib/browser/model/debug-breakpoint.js");
var dialogs_1 = __webpack_require__(/*! @theia/core/lib/browser/dialogs */ "./node_modules/@theia/core/lib/browser/dialogs.js");
var DebugFunctionBreakpoint = /** @class */ (function (_super) {
    __extends(DebugFunctionBreakpoint, _super);
    function DebugFunctionBreakpoint(origin, options) {
        var _this = _super.call(this, breakpoint_manager_1.BreakpointManager.FUNCTION_URI, options) || this;
        _this.origin = origin;
        return _this;
    }
    DebugFunctionBreakpoint.prototype.setEnabled = function (enabled) {
        var _this = this;
        var breakpoints = this.breakpoints.getFunctionBreakpoints();
        var breakpoint = breakpoints.find(function (b) { return b.id === _this.id; });
        if (breakpoint && breakpoint.enabled !== enabled) {
            breakpoint.enabled = enabled;
            this.breakpoints.setFunctionBreakpoints(breakpoints);
        }
    };
    DebugFunctionBreakpoint.prototype.isEnabled = function () {
        return _super.prototype.isEnabled.call(this) && this.isSupported();
    };
    DebugFunctionBreakpoint.prototype.isSupported = function () {
        var session = this.session;
        return !session || !!session.capabilities.supportsFunctionBreakpoints;
    };
    DebugFunctionBreakpoint.prototype.remove = function () {
        var _this = this;
        var breakpoints = this.breakpoints.getFunctionBreakpoints();
        var newBreakpoints = breakpoints.filter(function (b) { return b.id !== _this.id; });
        if (breakpoints.length !== newBreakpoints.length) {
            this.breakpoints.setFunctionBreakpoints(newBreakpoints);
        }
    };
    Object.defineProperty(DebugFunctionBreakpoint.prototype, "name", {
        get: function () {
            return this.origin.raw.name;
        },
        enumerable: false,
        configurable: true
    });
    DebugFunctionBreakpoint.prototype.doRender = function () {
        return React.createElement("span", { className: 'line-info' }, this.name);
    };
    DebugFunctionBreakpoint.prototype.doGetDecoration = function () {
        if (!this.isSupported()) {
            return this.getDisabledBreakpointDecoration('Function breakpoints are not supported by this debug type');
        }
        return _super.prototype.doGetDecoration.call(this);
    };
    DebugFunctionBreakpoint.prototype.getBreakpointDecoration = function (message) {
        return {
            className: 'theia-debug-function',
            message: message || ['Function Breakpoint']
        };
    };
    DebugFunctionBreakpoint.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            var input, newValue, breakpoints, breakpoint;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        input = new dialogs_1.SingleTextInputDialog({
                            title: 'Add Function Breakpoint',
                            initialValue: this.name
                        });
                        return [4 /*yield*/, input.open()];
                    case 1:
                        newValue = _a.sent();
                        if (newValue !== undefined && newValue !== this.name) {
                            breakpoints = this.breakpoints.getFunctionBreakpoints();
                            breakpoint = breakpoints.find(function (b) { return b.id === _this.id; });
                            if (breakpoint) {
                                if (breakpoint.raw.name !== newValue) {
                                    breakpoint.raw.name = newValue;
                                    this.breakpoints.setFunctionBreakpoints(breakpoints);
                                }
                            }
                            else {
                                this.origin.raw.name = newValue;
                                breakpoints.push(this.origin);
                                this.breakpoints.setFunctionBreakpoints(breakpoints);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return DebugFunctionBreakpoint;
}(debug_breakpoint_1.DebugBreakpoint));
exports.DebugFunctionBreakpoint = DebugFunctionBreakpoint;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/model/debug-source-breakpoint.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/model/debug-source-breakpoint.js ***!
  \********************************************************************************/
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
exports.DebugSourceBreakpoint = exports.DebugSourceBreakpointData = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var debug_breakpoint_1 = __webpack_require__(/*! ./debug-breakpoint */ "./node_modules/@theia/debug/lib/browser/model/debug-breakpoint.js");
var DebugSourceBreakpointData = /** @class */ (function (_super) {
    __extends(DebugSourceBreakpointData, _super);
    function DebugSourceBreakpointData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DebugSourceBreakpointData;
}(debug_breakpoint_1.DebugBreakpointData));
exports.DebugSourceBreakpointData = DebugSourceBreakpointData;
var DebugSourceBreakpoint = /** @class */ (function (_super) {
    __extends(DebugSourceBreakpoint, _super);
    function DebugSourceBreakpoint(origin, options) {
        var _this = _super.call(this, new uri_1.default(origin.uri), options) || this;
        _this.setBreakpointEnabled = function (event) {
            _this.setEnabled(event.target.checked);
        };
        _this.origins = [origin];
        return _this;
    }
    DebugSourceBreakpoint.prototype.update = function (data) {
        _super.prototype.update.call(this, data);
    };
    Object.defineProperty(DebugSourceBreakpoint.prototype, "origin", {
        get: function () {
            return this.origins[0];
        },
        enumerable: false,
        configurable: true
    });
    DebugSourceBreakpoint.prototype.setEnabled = function (enabled) {
        var e_1, _a;
        var _b = this, uri = _b.uri, raw = _b.raw;
        var shouldUpdate = false;
        var breakpoints = raw && this.doRemove(this.origins.filter(function (origin) { return !(origin.raw.line === raw.line && origin.raw.column === raw.column); }));
        if (breakpoints) {
            shouldUpdate = true;
        }
        else {
            breakpoints = this.breakpoints.getBreakpoints(uri);
        }
        try {
            for (var breakpoints_1 = __values(breakpoints), breakpoints_1_1 = breakpoints_1.next(); !breakpoints_1_1.done; breakpoints_1_1 = breakpoints_1.next()) {
                var breakpoint = breakpoints_1_1.value;
                if (breakpoint.raw.line === this.origin.raw.line && breakpoint.raw.column === this.origin.raw.column && breakpoint.enabled !== enabled) {
                    breakpoint.enabled = enabled;
                    shouldUpdate = true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (breakpoints_1_1 && !breakpoints_1_1.done && (_a = breakpoints_1.return)) _a.call(breakpoints_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (shouldUpdate) {
            this.breakpoints.setBreakpoints(this.uri, breakpoints);
        }
    };
    DebugSourceBreakpoint.prototype.updateOrigins = function (data) {
        var e_2, _a;
        var breakpoints = this.breakpoints.getBreakpoints(this.uri);
        var shouldUpdate = false;
        var originPositions = new Set();
        this.origins.forEach(function (origin) { return originPositions.add(origin.raw.line + ':' + origin.raw.column); });
        try {
            for (var breakpoints_2 = __values(breakpoints), breakpoints_2_1 = breakpoints_2.next(); !breakpoints_2_1.done; breakpoints_2_1 = breakpoints_2.next()) {
                var breakpoint = breakpoints_2_1.value;
                if (originPositions.has(breakpoint.raw.line + ':' + breakpoint.raw.column)) {
                    Object.assign(breakpoint.raw, data);
                    shouldUpdate = true;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (breakpoints_2_1 && !breakpoints_2_1.done && (_a = breakpoints_2.return)) _a.call(breakpoints_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (shouldUpdate) {
            this.breakpoints.setBreakpoints(this.uri, breakpoints);
        }
    };
    Object.defineProperty(DebugSourceBreakpoint.prototype, "line", {
        /** 1-based */
        get: function () {
            return this.raw && this.raw.line || this.origins[0].raw.line;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugSourceBreakpoint.prototype, "column", {
        get: function () {
            return this.raw && this.raw.column || this.origins[0].raw.column;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugSourceBreakpoint.prototype, "endLine", {
        get: function () {
            return this.raw && this.raw.endLine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugSourceBreakpoint.prototype, "endColumn", {
        get: function () {
            return this.raw && this.raw.endColumn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugSourceBreakpoint.prototype, "condition", {
        get: function () {
            return this.origin.raw.condition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugSourceBreakpoint.prototype, "hitCondition", {
        get: function () {
            return this.origin.raw.hitCondition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugSourceBreakpoint.prototype, "logMessage", {
        get: function () {
            return this.origin.raw.logMessage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugSourceBreakpoint.prototype, "source", {
        get: function () {
            return this.raw && this.raw.source && this.session && this.session.getSource(this.raw.source);
        },
        enumerable: false,
        configurable: true
    });
    DebugSourceBreakpoint.prototype.open = function (options) {
        if (options === void 0) { options = {
            mode: 'reveal'
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, line, column, endLine, endColumn, selection;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, line = _a.line, column = _a.column, endLine = _a.endLine, endColumn = _a.endColumn;
                        selection = {
                            start: {
                                line: line - 1,
                                character: typeof column === 'number' ? column - 1 : undefined
                            }
                        };
                        if (typeof endLine === 'number') {
                            selection.end = {
                                line: endLine - 1,
                                character: typeof endColumn === 'number' ? endColumn - 1 : undefined
                            };
                        }
                        if (!this.source) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.source.open(__assign(__assign({}, options), { selection: selection }))];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.editorManager.open(this.uri, __assign(__assign({}, options), { selection: selection }))];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DebugSourceBreakpoint.prototype.doRender = function () {
        return React.createElement(React.Fragment, null,
            React.createElement("span", { className: 'line-info', title: this.labelProvider.getLongName(this.uri) },
                React.createElement("span", { className: 'name' },
                    this.labelProvider.getName(this.uri),
                    " "),
                React.createElement("span", { className: 'path' },
                    this.labelProvider.getLongName(this.uri.parent),
                    " ")),
            React.createElement("span", { className: 'line' }, this.renderPosition()));
    };
    DebugSourceBreakpoint.prototype.renderPosition = function () {
        return this.line + (typeof this.column === 'number' ? ':' + this.column : '');
    };
    DebugSourceBreakpoint.prototype.doGetDecoration = function (messages) {
        if (messages === void 0) { messages = []; }
        if (this.logMessage || this.condition || this.hitCondition) {
            var session = this.session;
            if (this.logMessage) {
                if (session && !session.capabilities.supportsLogPoints) {
                    return this.getUnsupportedBreakpointDecoration('Logpoints not supported by this debug type');
                }
                messages.push('Log Message: ' + this.logMessage);
            }
            if (this.condition) {
                if (session && !session.capabilities.supportsConditionalBreakpoints) {
                    return this.getUnsupportedBreakpointDecoration('Conditional breakpoints not supported by this debug type');
                }
                messages.push('Expression: ' + this.condition);
            }
            if (this.hitCondition) {
                if (session && !session.capabilities.supportsHitConditionalBreakpoints) {
                    return this.getUnsupportedBreakpointDecoration('Hit conditional breakpoints not supported by this debug type');
                }
                messages.push('Hit Count: ' + this.hitCondition);
            }
        }
        return _super.prototype.doGetDecoration.call(this, messages);
    };
    DebugSourceBreakpoint.prototype.getUnsupportedBreakpointDecoration = function (message) {
        return {
            className: 'theia-debug-breakpoint-unsupported',
            message: [message]
        };
    };
    DebugSourceBreakpoint.prototype.getBreakpointDecoration = function (message) {
        if (this.logMessage) {
            return {
                className: 'theia-debug-logpoint',
                message: message || ['Logpoint']
            };
        }
        if (this.condition || this.hitCondition) {
            return {
                className: 'theia-debug-conditional-breakpoint',
                message: message || ['Conditional Breakpoint']
            };
        }
        return {
            className: 'theia-debug-breakpoint',
            message: message || ['Breakpoint']
        };
    };
    DebugSourceBreakpoint.prototype.remove = function () {
        var breakpoints = this.doRemove(this.origins);
        if (breakpoints) {
            this.breakpoints.setBreakpoints(this.uri, breakpoints);
        }
    };
    DebugSourceBreakpoint.prototype.doRemove = function (origins) {
        if (!origins.length) {
            return undefined;
        }
        var uri = this.uri;
        var toRemove = new Set();
        origins.forEach(function (origin) { return toRemove.add(origin.raw.line + ':' + origin.raw.column); });
        var shouldUpdate = false;
        var breakpoints = this.breakpoints.findMarkers({
            uri: uri,
            dataFilter: function (data) {
                var result = !toRemove.has(data.raw.line + ':' + data.raw.column);
                shouldUpdate = shouldUpdate || !result;
                return result;
            }
        }).map(function (_a) {
            var data = _a.data;
            return data;
        });
        return shouldUpdate && breakpoints || undefined;
    };
    return DebugSourceBreakpoint;
}(debug_breakpoint_1.DebugBreakpoint));
exports.DebugSourceBreakpoint = DebugSourceBreakpoint;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/model/debug-source.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/model/debug-source.js ***!
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
exports.DebugSource = exports.DebugSourceData = void 0;
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var vscode_uri_1 = __webpack_require__(/*! vscode-uri */ "./node_modules/vscode-uri/lib/esm/index.js");
var DebugSourceData = /** @class */ (function () {
    function DebugSourceData() {
    }
    return DebugSourceData;
}());
exports.DebugSourceData = DebugSourceData;
var DebugSource = /** @class */ (function (_super) {
    __extends(DebugSource, _super);
    function DebugSource(session, editorManager, labelProvider) {
        var _this = _super.call(this) || this;
        _this.session = session;
        _this.editorManager = editorManager;
        _this.labelProvider = labelProvider;
        return _this;
    }
    Object.defineProperty(DebugSource.prototype, "uri", {
        get: function () {
            return DebugSource.toUri(this.raw);
        },
        enumerable: false,
        configurable: true
    });
    DebugSource.prototype.update = function (data) {
        Object.assign(this, data);
    };
    DebugSource.prototype.open = function (options) {
        return this.editorManager.open(this.uri, options);
    };
    DebugSource.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var source, sourceReference, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        source = this.raw;
                        sourceReference = source.sourceReference;
                        return [4 /*yield*/, this.session.sendRequest('source', {
                                sourceReference: sourceReference,
                                source: source
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.body.content];
                }
            });
        });
    };
    Object.defineProperty(DebugSource.prototype, "inMemory", {
        get: function () {
            return this.uri.scheme === DebugSource.SCHEME;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugSource.prototype, "name", {
        get: function () {
            if (this.inMemory) {
                return this.raw.name || this.uri.path.base || this.uri.path.toString();
            }
            return this.labelProvider.getName(this.uri);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugSource.prototype, "longName", {
        get: function () {
            if (this.inMemory) {
                return this.name;
            }
            return this.labelProvider.getLongName(this.uri);
        },
        enumerable: false,
        configurable: true
    });
    DebugSource.toUri = function (raw) {
        if (raw.sourceReference && raw.sourceReference > 0) {
            return new uri_1.default().withScheme(DebugSource.SCHEME).withPath(raw.name).withQuery(String(raw.sourceReference));
        }
        if (!raw.path) {
            throw new Error('Unrecognized source type: ' + JSON.stringify(raw));
        }
        if (raw.path.match(DebugSource.SCHEME_PATTERN)) {
            return new uri_1.default(raw.path);
        }
        return new uri_1.default(vscode_uri_1.URI.file(raw.path));
    };
    DebugSource.SCHEME = 'debug';
    DebugSource.SCHEME_PATTERN = /^[a-zA-Z][a-zA-Z0-9\+\-\.]+:/;
    return DebugSource;
}(DebugSourceData));
exports.DebugSource = DebugSource;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/model/debug-stack-frame.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/model/debug-stack-frame.js ***!
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
exports.DebugStackFrame = exports.DebugStackFrameData = void 0;
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// Based on https://github.com/theia-ide/vscode/blob/standalone/0.19.x/src/vs/workbench/contrib/debug/common/debugModel.ts
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var debug_console_items_1 = __webpack_require__(/*! ../console/debug-console-items */ "./node_modules/@theia/debug/lib/browser/console/debug-console-items.js");
var DebugStackFrameData = /** @class */ (function () {
    function DebugStackFrameData() {
    }
    return DebugStackFrameData;
}());
exports.DebugStackFrameData = DebugStackFrameData;
var DebugStackFrame = /** @class */ (function (_super) {
    __extends(DebugStackFrame, _super);
    function DebugStackFrame(thread, session) {
        var _this = _super.call(this) || this;
        _this.thread = thread;
        _this.session = session;
        return _this;
    }
    Object.defineProperty(DebugStackFrame.prototype, "id", {
        get: function () {
            return this.session.id + ':' + this.thread.id + ':' + this.raw.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugStackFrame.prototype, "source", {
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    DebugStackFrame.prototype.update = function (data) {
        Object.assign(this, data);
        this._source = this.raw.source && this.session.getSource(this.raw.source);
    };
    DebugStackFrame.prototype.restart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.session.sendRequest('restartFrame', this.toArgs({
                            threadId: this.thread.id
                        }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugStackFrame.prototype.open = function (options) {
        if (options === void 0) { options = {
            mode: 'reveal'
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, line, column, endLine, endColumn, selection;
            return __generator(this, function (_b) {
                if (!this.source) {
                    return [2 /*return*/, undefined];
                }
                _a = this.raw, line = _a.line, column = _a.column, endLine = _a.endLine, endColumn = _a.endColumn;
                selection = {
                    start: browser_2.Position.create(line - 1, column - 1)
                };
                if (typeof endLine === 'number') {
                    selection.end = {
                        line: endLine - 1,
                        character: typeof endColumn === 'number' ? endColumn - 1 : undefined
                    };
                }
                this.source.open(__assign(__assign({}, options), { selection: selection }));
                return [2 /*return*/];
            });
        });
    };
    DebugStackFrame.prototype.getScopes = function () {
        return this.scopes || (this.scopes = this.doGetScopes());
    };
    DebugStackFrame.prototype.doGetScopes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.session.sendRequest('scopes', this.toArgs())];
                    case 1:
                        response = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 3:
                        if (!response) {
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/, response.body.scopes.map(function (raw) { return new debug_console_items_1.DebugScope(raw, function () { return _this.session; }); })];
                }
            });
        });
    };
    // https://github.com/theia-ide/vscode/blob/standalone/0.19.x/src/vs/workbench/contrib/debug/common/debugModel.ts#L324-L335
    DebugStackFrame.prototype.getMostSpecificScopes = function (range) {
        return __awaiter(this, void 0, void 0, function () {
            var scopes, nonExpensiveScopes, haveRangeInfo, scopesContainingRange;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getScopes()];
                    case 1:
                        scopes = _a.sent();
                        nonExpensiveScopes = scopes.filter(function (s) { return !s.expensive; });
                        haveRangeInfo = nonExpensiveScopes.some(function (s) { return !!s.range; });
                        if (!haveRangeInfo) {
                            return [2 /*return*/, nonExpensiveScopes];
                        }
                        scopesContainingRange = nonExpensiveScopes.filter(function (scope) { return scope.range && monaco.Range.containsRange(scope.range, range); })
                            .sort(function (first, second) { return (first.range.endLineNumber - first.range.startLineNumber) - (second.range.endLineNumber - second.range.startLineNumber); });
                        return [2 /*return*/, scopesContainingRange.length ? scopesContainingRange : nonExpensiveScopes];
                }
            });
        });
    };
    DebugStackFrame.prototype.toArgs = function (arg) {
        return Object.assign({}, arg, {
            frameId: this.raw.id
        });
    };
    DebugStackFrame.prototype.render = function () {
        var classNames = ['theia-debug-stack-frame'];
        if (this.raw.presentationHint === 'label') {
            classNames.push('label');
        }
        if (this.raw.presentationHint === 'subtle') {
            classNames.push('subtle');
        }
        if (!this.source || this.source.raw.presentationHint === 'deemphasize') {
            classNames.push(browser_1.DISABLED_CLASS);
        }
        return React.createElement("div", { className: classNames.join(' ') },
            React.createElement("span", { className: 'expression', title: this.raw.name }, this.raw.name),
            this.renderFile());
    };
    DebugStackFrame.prototype.renderFile = function () {
        var source = this.source;
        if (!source) {
            return undefined;
        }
        var origin = source.raw.origin && "\n" + source.raw.origin || '';
        return React.createElement("span", { className: 'file', title: source.longName + origin },
            React.createElement("span", { className: 'name' }, source.name),
            React.createElement("span", { className: 'line' },
                this.raw.line,
                ":",
                this.raw.column));
    };
    Object.defineProperty(DebugStackFrame.prototype, "range", {
        get: function () {
            var _a = this.raw, source = _a.source, startLine = _a.line, startColumn = _a.column, endLine = _a.endLine, endColumn = _a.endColumn;
            if (source) {
                return new monaco.Range(startLine, startColumn, endLine || startLine, endColumn || startColumn);
            }
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    return DebugStackFrame;
}(DebugStackFrameData));
exports.DebugStackFrame = DebugStackFrame;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/model/debug-thread.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/model/debug-thread.js ***!
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
exports.DebugThread = exports.DebugThreadData = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var debug_stack_frame_1 = __webpack_require__(/*! ./debug-stack-frame */ "./node_modules/@theia/debug/lib/browser/model/debug-stack-frame.js");
var DebugThreadData = /** @class */ (function () {
    function DebugThreadData() {
    }
    return DebugThreadData;
}());
exports.DebugThreadData = DebugThreadData;
var DebugThread = /** @class */ (function (_super) {
    __extends(DebugThread, _super);
    function DebugThread(session) {
        var _this = _super.call(this) || this;
        _this.session = session;
        _this.onDidChangedEmitter = new core_1.Emitter();
        _this.onDidChanged = _this.onDidChangedEmitter.event;
        _this._frames = new Map();
        _this.pendingFetch = Promise.resolve([]);
        _this._pendingFetchCount = 0;
        _this.pendingFetchCancel = new core_1.CancellationTokenSource();
        return _this;
    }
    Object.defineProperty(DebugThread.prototype, "id", {
        get: function () {
            return this.session.id + ':' + this.raw.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugThread.prototype, "currentFrame", {
        get: function () {
            return this._currentFrame;
        },
        set: function (frame) {
            this._currentFrame = frame;
            this.onDidChangedEmitter.fire(undefined);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugThread.prototype, "stopped", {
        get: function () {
            return !!this.stoppedDetails;
        },
        enumerable: false,
        configurable: true
    });
    DebugThread.prototype.update = function (data) {
        Object.assign(this, data);
        if ('stoppedDetails' in data) {
            this.clearFrames();
        }
    };
    DebugThread.prototype.clear = function () {
        this.update({
            raw: this.raw,
            stoppedDetails: undefined
        });
    };
    DebugThread.prototype.continue = function () {
        return this.session.sendRequest('continue', this.toArgs());
    };
    DebugThread.prototype.stepOver = function () {
        return this.session.sendRequest('next', this.toArgs());
    };
    DebugThread.prototype.stepIn = function () {
        return this.session.sendRequest('stepIn', this.toArgs());
    };
    DebugThread.prototype.stepOut = function () {
        return this.session.sendRequest('stepOut', this.toArgs());
    };
    DebugThread.prototype.pause = function () {
        return this.session.sendRequest('pause', this.toArgs());
    };
    DebugThread.prototype.getExceptionInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.stoppedDetails && this.stoppedDetails.reason === 'exception')) return [3 /*break*/, 3];
                        if (!this.session.capabilities.supportsExceptionInfoRequest) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.session.sendRequest('exceptionInfo', this.toArgs())];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, {
                                id: response.body.exceptionId,
                                description: response.body.description,
                                details: response.body.details
                            }];
                    case 2: return [2 /*return*/, {
                            description: this.stoppedDetails.text
                        }];
                    case 3: return [2 /*return*/, undefined];
                }
            });
        });
    };
    Object.defineProperty(DebugThread.prototype, "supportsTerminate", {
        get: function () {
            return !!this.session.capabilities.supportsTerminateThreadsRequest;
        },
        enumerable: false,
        configurable: true
    });
    DebugThread.prototype.terminate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.supportsTerminate) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.session.sendRequest('terminateThreads', {
                                threadIds: [this.raw.id]
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(DebugThread.prototype, "frames", {
        get: function () {
            return this._frames.values();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugThread.prototype, "topFrame", {
        get: function () {
            return this.frames.next().value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugThread.prototype, "frameCount", {
        get: function () {
            return this._frames.size;
        },
        enumerable: false,
        configurable: true
    });
    DebugThread.prototype.fetchFrames = function (levels) {
        if (levels === void 0) { levels = 20; }
        return __awaiter(this, void 0, void 0, function () {
            var cancel;
            var _this = this;
            return __generator(this, function (_a) {
                cancel = this.pendingFetchCancel.token;
                this._pendingFetchCount += 1;
                return [2 /*return*/, this.pendingFetch = this.pendingFetch.then(function () { return __awaiter(_this, void 0, void 0, function () {
                        var start, frames_1, e_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, 3, 4]);
                                    start = this.frameCount;
                                    return [4 /*yield*/, this.doFetchFrames(start, levels)];
                                case 1:
                                    frames_1 = _a.sent();
                                    if (cancel.isCancellationRequested) {
                                        return [2 /*return*/, []];
                                    }
                                    return [2 /*return*/, this.doUpdateFrames(frames_1)];
                                case 2:
                                    e_1 = _a.sent();
                                    console.error(e_1);
                                    return [2 /*return*/, []];
                                case 3:
                                    if (!cancel.isCancellationRequested) {
                                        this._pendingFetchCount -= 1;
                                    }
                                    return [7 /*endfinally*/];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    Object.defineProperty(DebugThread.prototype, "pendingFrameCount", {
        get: function () {
            return this._pendingFetchCount;
        },
        enumerable: false,
        configurable: true
    });
    DebugThread.prototype.doFetchFrames = function (startFrame, levels) {
        return __awaiter(this, void 0, void 0, function () {
            var response, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.session.sendRequest('stackTrace', this.toArgs({ startFrame: startFrame, levels: levels }))];
                    case 1:
                        response = _a.sent();
                        if (this.stoppedDetails) {
                            this.stoppedDetails.totalFrames = response.body.totalFrames;
                        }
                        return [2 /*return*/, response.body.stackFrames];
                    case 2:
                        e_2 = _a.sent();
                        if (this.stoppedDetails) {
                            this.stoppedDetails.framesErrorMessage = e_2.message;
                        }
                        return [2 /*return*/, []];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DebugThread.prototype.doUpdateFrames = function (frames) {
        var e_3, _a;
        var result = new Set();
        try {
            for (var frames_2 = __values(frames), frames_2_1 = frames_2.next(); !frames_2_1.done; frames_2_1 = frames_2.next()) {
                var raw = frames_2_1.value;
                var id = raw.id;
                var frame = this._frames.get(id) || new debug_stack_frame_1.DebugStackFrame(this, this.session);
                this._frames.set(id, frame);
                frame.update({ raw: raw });
                result.add(frame);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (frames_2_1 && !frames_2_1.done && (_a = frames_2.return)) _a.call(frames_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.updateCurrentFrame();
        return __spread(result.values());
    };
    DebugThread.prototype.clearFrames = function () {
        // Clear all frames
        this._frames.clear();
        // Cancel all request promises
        this.pendingFetchCancel.cancel();
        this.pendingFetchCancel = new core_1.CancellationTokenSource();
        // Empty all current requests
        this.pendingFetch = Promise.resolve([]);
        this._pendingFetchCount = 0;
        this.updateCurrentFrame();
    };
    DebugThread.prototype.updateCurrentFrame = function () {
        var currentFrame = this.currentFrame;
        var frameId = currentFrame && currentFrame.raw.id;
        this.currentFrame = typeof frameId === 'number' &&
            this._frames.get(frameId) ||
            this._frames.values().next().value;
    };
    DebugThread.prototype.toArgs = function (arg) {
        return Object.assign({}, arg, {
            threadId: this.raw.id
        });
    };
    DebugThread.prototype.render = function () {
        var reason = this.stoppedDetails && this.stoppedDetails.reason;
        var status = this.stoppedDetails ? reason ? "Paused on " + reason : 'Paused' : 'Running';
        return React.createElement("div", { className: 'theia-debug-thread', title: 'Thread' },
            React.createElement("span", { className: 'label' }, this.raw.name),
            React.createElement("span", { className: 'status' }, status));
    };
    return DebugThread;
}(DebugThreadData));
exports.DebugThread = DebugThread;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/view/debug-stack-frames-source.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/view/debug-stack-frames-source.js ***!
  \*********************************************************************************/
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
exports.LoadMoreStackFrames = exports.DebugStackFramesSource = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var source_tree_1 = __webpack_require__(/*! @theia/core/lib/browser/source-tree */ "./node_modules/@theia/core/lib/browser/source-tree/index.js");
var debug_view_model_1 = __webpack_require__(/*! ./debug-view-model */ "./node_modules/@theia/debug/lib/browser/view/debug-view-model.js");
var debounce = __webpack_require__(/*! p-debounce */ "./node_modules/p-debounce/index.js");
var DebugStackFramesSource = /** @class */ (function (_super) {
    __extends(DebugStackFramesSource, _super);
    function DebugStackFramesSource() {
        var _this = _super.call(this, {
            placeholder: 'Not paused'
        }) || this;
        _this.refresh = debounce(function () { return _this.fireDidChange(); }, 100);
        return _this;
    }
    DebugStackFramesSource.prototype.init = function () {
        var _this = this;
        this.refresh();
        this.toDispose.push(this.model.onDidChange(function () { return _this.refresh(); }));
    };
    DebugStackFramesSource.prototype.getElements = function () {
        var thread, _a, _b, frame, e_1_1, _c, framesErrorMessage_1, totalFrames;
        var e_1, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    thread = this.model.currentThread;
                    if (!thread) {
                        return [2 /*return*/];
                    }
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 6, 7, 8]);
                    _a = __values(thread.frames), _b = _a.next();
                    _e.label = 2;
                case 2:
                    if (!!_b.done) return [3 /*break*/, 5];
                    frame = _b.value;
                    return [4 /*yield*/, frame];
                case 3:
                    _e.sent();
                    _e.label = 4;
                case 4:
                    _b = _a.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 8:
                    if (!thread.stoppedDetails) return [3 /*break*/, 12];
                    _c = thread.stoppedDetails, framesErrorMessage_1 = _c.framesErrorMessage, totalFrames = _c.totalFrames;
                    if (!framesErrorMessage_1) return [3 /*break*/, 10];
                    return [4 /*yield*/, {
                            render: function () { return React.createElement("span", { title: framesErrorMessage_1 }, framesErrorMessage_1); }
                        }];
                case 9:
                    _e.sent();
                    _e.label = 10;
                case 10:
                    if (!(totalFrames && totalFrames > thread.frameCount)) return [3 /*break*/, 12];
                    return [4 /*yield*/, new LoadMoreStackFrames(thread)];
                case 11:
                    _e.sent();
                    _e.label = 12;
                case 12: return [2 /*return*/];
            }
        });
    };
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugStackFramesSource.prototype, "model", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugStackFramesSource.prototype, "init", null);
    DebugStackFramesSource = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], DebugStackFramesSource);
    return DebugStackFramesSource;
}(source_tree_1.TreeSource));
exports.DebugStackFramesSource = DebugStackFramesSource;
var LoadMoreStackFrames = /** @class */ (function () {
    function LoadMoreStackFrames(thread) {
        this.thread = thread;
    }
    LoadMoreStackFrames.prototype.render = function () {
        return React.createElement("span", { className: 'theia-load-more-frames' }, "Load More Stack Frames");
    };
    LoadMoreStackFrames.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            var frames;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.thread.fetchFrames()];
                    case 1:
                        frames = _a.sent();
                        if (frames[0]) {
                            this.thread.currentFrame = frames[0];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return LoadMoreStackFrames;
}());
exports.LoadMoreStackFrames = LoadMoreStackFrames;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/view/debug-stack-frames-widget.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/view/debug-stack-frames-widget.js ***!
  \*********************************************************************************/
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
exports.DebugStackFramesWidget = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var source_tree_1 = __webpack_require__(/*! @theia/core/lib/browser/source-tree */ "./node_modules/@theia/core/lib/browser/source-tree/index.js");
var debug_stack_frames_source_1 = __webpack_require__(/*! ./debug-stack-frames-source */ "./node_modules/@theia/debug/lib/browser/view/debug-stack-frames-source.js");
var debug_stack_frame_1 = __webpack_require__(/*! ../model/debug-stack-frame */ "./node_modules/@theia/debug/lib/browser/model/debug-stack-frame.js");
var debug_view_model_1 = __webpack_require__(/*! ./debug-view-model */ "./node_modules/@theia/debug/lib/browser/view/debug-view-model.js");
var debug_call_stack_item_type_key_1 = __webpack_require__(/*! ../debug-call-stack-item-type-key */ "./node_modules/@theia/debug/lib/browser/debug-call-stack-item-type-key.js");
var DebugStackFramesWidget = /** @class */ (function (_super) {
    __extends(DebugStackFramesWidget, _super);
    function DebugStackFramesWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.updatingSelection = false;
        return _this;
    }
    DebugStackFramesWidget_1 = DebugStackFramesWidget;
    DebugStackFramesWidget.createContainer = function (parent) {
        var child = source_tree_1.SourceTreeWidget.createContainer(parent, {
            contextMenuPath: DebugStackFramesWidget_1.CONTEXT_MENU,
            virtualized: false,
            scrollIfActive: true
        });
        child.bind(debug_stack_frames_source_1.DebugStackFramesSource).toSelf();
        child.unbind(source_tree_1.SourceTreeWidget);
        child.bind(DebugStackFramesWidget_1).toSelf();
        return child;
    };
    DebugStackFramesWidget.createWidget = function (parent) {
        return DebugStackFramesWidget_1.createContainer(parent).get(DebugStackFramesWidget_1);
    };
    DebugStackFramesWidget.prototype.init = function () {
        var _this = this;
        _super.prototype.init.call(this);
        this.id = 'debug:frames:' + this.viewModel.id;
        this.title.label = 'Call Stack';
        this.toDispose.push(this.frames);
        this.source = this.frames;
        this.toDispose.push(this.viewModel.onDidChange(function () { return _this.updateWidgetSelection(); }));
        this.toDispose.push(this.model.onNodeRefreshed(function () { return _this.updateWidgetSelection(); }));
        this.toDispose.push(this.model.onSelectionChanged(function () { return _this.updateModelSelection(); }));
    };
    DebugStackFramesWidget.prototype.updateWidgetSelection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentFrame, node;
            return __generator(this, function (_a) {
                if (this.updatingSelection) {
                    return [2 /*return*/];
                }
                this.updatingSelection = true;
                try {
                    currentFrame = this.viewModel.currentFrame;
                    if (currentFrame) {
                        node = this.model.getNode(currentFrame.id);
                        if (browser_1.SelectableTreeNode.is(node)) {
                            this.model.selectNode(node);
                        }
                    }
                }
                finally {
                    this.updatingSelection = false;
                }
                return [2 /*return*/];
            });
        });
    };
    DebugStackFramesWidget.prototype.updateModelSelection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var node;
            return __generator(this, function (_a) {
                if (this.updatingSelection) {
                    return [2 /*return*/];
                }
                this.updatingSelection = true;
                try {
                    node = this.model.selectedNodes[0];
                    if (source_tree_1.TreeElementNode.is(node)) {
                        if (node.element instanceof debug_stack_frame_1.DebugStackFrame) {
                            node.element.thread.currentFrame = node.element;
                            this.debugCallStackItemTypeKey.set('stackFrame');
                        }
                    }
                }
                finally {
                    this.updatingSelection = false;
                }
                return [2 /*return*/];
            });
        });
    };
    DebugStackFramesWidget.prototype.toContextMenuArgs = function (node) {
        if (source_tree_1.TreeElementNode.is(node)) {
            if (node.element instanceof debug_stack_frame_1.DebugStackFrame) {
                var source = node.element.source;
                if (source) {
                    if (source.inMemory) {
                        var path = source.raw.path || source.raw.sourceReference;
                        if (path !== undefined) {
                            return [path];
                        }
                    }
                    else {
                        return [source.uri.toString()];
                    }
                }
            }
        }
        return undefined;
    };
    DebugStackFramesWidget.prototype.handleClickEvent = function (node, event) {
        if (source_tree_1.TreeElementNode.is(node) && node.element instanceof debug_stack_frames_source_1.LoadMoreStackFrames) {
            node.element.open();
        }
        _super.prototype.handleClickEvent.call(this, node, event);
    };
    DebugStackFramesWidget.prototype.getDefaultNodeStyle = function (node, props) {
        return undefined;
    };
    var DebugStackFramesWidget_1;
    DebugStackFramesWidget.CONTEXT_MENU = ['debug-frames-context-menu'];
    __decorate([
        inversify_1.inject(debug_stack_frames_source_1.DebugStackFramesSource),
        __metadata("design:type", debug_stack_frames_source_1.DebugStackFramesSource)
    ], DebugStackFramesWidget.prototype, "frames", void 0);
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugStackFramesWidget.prototype, "viewModel", void 0);
    __decorate([
        inversify_1.inject(debug_call_stack_item_type_key_1.DebugCallStackItemTypeKey),
        __metadata("design:type", Object)
    ], DebugStackFramesWidget.prototype, "debugCallStackItemTypeKey", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugStackFramesWidget.prototype, "init", null);
    DebugStackFramesWidget = DebugStackFramesWidget_1 = __decorate([
        inversify_1.injectable()
    ], DebugStackFramesWidget);
    return DebugStackFramesWidget;
}(source_tree_1.SourceTreeWidget));
exports.DebugStackFramesWidget = DebugStackFramesWidget;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/view/debug-threads-source.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/view/debug-threads-source.js ***!
  \****************************************************************************/
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
exports.DebugThreadsSource = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var source_tree_1 = __webpack_require__(/*! @theia/core/lib/browser/source-tree */ "./node_modules/@theia/core/lib/browser/source-tree/index.js");
var debug_view_model_1 = __webpack_require__(/*! ./debug-view-model */ "./node_modules/@theia/debug/lib/browser/view/debug-view-model.js");
var DebugThreadsSource = /** @class */ (function (_super) {
    __extends(DebugThreadsSource, _super);
    function DebugThreadsSource() {
        return _super.call(this, {
            placeholder: 'Not running'
        }) || this;
    }
    DebugThreadsSource.prototype.init = function () {
        var _this = this;
        this.fireDidChange();
        this.toDispose.push(this.model.onDidChange(function () { return _this.fireDidChange(); }));
    };
    Object.defineProperty(DebugThreadsSource.prototype, "multiSession", {
        get: function () {
            return this.model.sessionCount > 1;
        },
        enumerable: false,
        configurable: true
    });
    DebugThreadsSource.prototype.getElements = function () {
        if (this.model.sessionCount === 1 && this.model.session && this.model.session.threadCount) {
            return this.model.session.threads;
        }
        return this.model.sessions;
    };
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugThreadsSource.prototype, "model", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugThreadsSource.prototype, "init", null);
    DebugThreadsSource = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], DebugThreadsSource);
    return DebugThreadsSource;
}(source_tree_1.TreeSource));
exports.DebugThreadsSource = DebugThreadsSource;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/view/debug-threads-widget.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/view/debug-threads-widget.js ***!
  \****************************************************************************/
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
exports.DebugThreadsWidget = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var source_tree_1 = __webpack_require__(/*! @theia/core/lib/browser/source-tree */ "./node_modules/@theia/core/lib/browser/source-tree/index.js");
var debug_threads_source_1 = __webpack_require__(/*! ./debug-threads-source */ "./node_modules/@theia/debug/lib/browser/view/debug-threads-source.js");
var debug_session_1 = __webpack_require__(/*! ../debug-session */ "./node_modules/@theia/debug/lib/browser/debug-session.js");
var debug_thread_1 = __webpack_require__(/*! ../model/debug-thread */ "./node_modules/@theia/debug/lib/browser/model/debug-thread.js");
var debug_view_model_1 = __webpack_require__(/*! ../view/debug-view-model */ "./node_modules/@theia/debug/lib/browser/view/debug-view-model.js");
var debug_call_stack_item_type_key_1 = __webpack_require__(/*! ../debug-call-stack-item-type-key */ "./node_modules/@theia/debug/lib/browser/debug-call-stack-item-type-key.js");
var DebugThreadsWidget = /** @class */ (function (_super) {
    __extends(DebugThreadsWidget, _super);
    function DebugThreadsWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.updatingSelection = false;
        return _this;
    }
    DebugThreadsWidget_1 = DebugThreadsWidget;
    DebugThreadsWidget.createContainer = function (parent) {
        var child = source_tree_1.SourceTreeWidget.createContainer(parent, {
            contextMenuPath: DebugThreadsWidget_1.CONTEXT_MENU,
            virtualized: false,
            scrollIfActive: true
        });
        child.bind(debug_threads_source_1.DebugThreadsSource).toSelf();
        child.unbind(source_tree_1.SourceTreeWidget);
        child.bind(DebugThreadsWidget_1).toSelf();
        return child;
    };
    DebugThreadsWidget.createWidget = function (parent) {
        return DebugThreadsWidget_1.createContainer(parent).get(DebugThreadsWidget_1);
    };
    DebugThreadsWidget.prototype.init = function () {
        var _this = this;
        _super.prototype.init.call(this);
        this.id = 'debug:threads:' + this.viewModel.id;
        this.title.label = 'Threads';
        this.toDispose.push(this.threads);
        this.source = this.threads;
        this.toDispose.push(this.viewModel.onDidChange(function () { return _this.updateWidgetSelection(); }));
        this.toDispose.push(this.model.onSelectionChanged(function () { return _this.updateModelSelection(); }));
    };
    DebugThreadsWidget.prototype.updateWidgetSelection = function () {
        if (this.updatingSelection) {
            return;
        }
        this.updatingSelection = true;
        try {
            var currentThread = this.viewModel.currentThread;
            if (currentThread) {
                var node = this.model.getNode(currentThread.id);
                if (browser_1.SelectableTreeNode.is(node)) {
                    this.model.selectNode(node);
                }
            }
        }
        finally {
            this.updatingSelection = false;
        }
    };
    DebugThreadsWidget.prototype.updateModelSelection = function () {
        if (this.updatingSelection) {
            return;
        }
        this.updatingSelection = true;
        try {
            var node = this.model.selectedNodes[0];
            if (source_tree_1.TreeElementNode.is(node)) {
                if (node.element instanceof debug_session_1.DebugSession) {
                    this.viewModel.currentSession = node.element;
                    this.debugCallStackItemTypeKey.set('session');
                }
                else if (node.element instanceof debug_thread_1.DebugThread) {
                    node.element.session.currentThread = node.element;
                    this.debugCallStackItemTypeKey.set('thread');
                }
            }
        }
        finally {
            this.updatingSelection = false;
        }
    };
    DebugThreadsWidget.prototype.toContextMenuArgs = function (node) {
        if (source_tree_1.TreeElementNode.is(node) && node.element instanceof debug_thread_1.DebugThread) {
            return [node.element.raw.id];
        }
        return undefined;
    };
    DebugThreadsWidget.prototype.getDefaultNodeStyle = function (node, props) {
        if (this.threads.multiSession) {
            return _super.prototype.getDefaultNodeStyle.call(this, node, props);
        }
        return undefined;
    };
    var DebugThreadsWidget_1;
    DebugThreadsWidget.CONTEXT_MENU = ['debug-threads-context-menu'];
    DebugThreadsWidget.CONTROL_MENU = __spread(DebugThreadsWidget_1.CONTEXT_MENU, ['a_control']);
    DebugThreadsWidget.TERMINATE_MENU = __spread(DebugThreadsWidget_1.CONTEXT_MENU, ['b_terminate']);
    DebugThreadsWidget.OPEN_MENU = __spread(DebugThreadsWidget_1.CONTEXT_MENU, ['c_open']);
    __decorate([
        inversify_1.inject(debug_threads_source_1.DebugThreadsSource),
        __metadata("design:type", debug_threads_source_1.DebugThreadsSource)
    ], DebugThreadsWidget.prototype, "threads", void 0);
    __decorate([
        inversify_1.inject(debug_view_model_1.DebugViewModel),
        __metadata("design:type", debug_view_model_1.DebugViewModel)
    ], DebugThreadsWidget.prototype, "viewModel", void 0);
    __decorate([
        inversify_1.inject(debug_call_stack_item_type_key_1.DebugCallStackItemTypeKey),
        __metadata("design:type", Object)
    ], DebugThreadsWidget.prototype, "debugCallStackItemTypeKey", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugThreadsWidget.prototype, "init", null);
    DebugThreadsWidget = DebugThreadsWidget_1 = __decorate([
        inversify_1.injectable()
    ], DebugThreadsWidget);
    return DebugThreadsWidget;
}(source_tree_1.SourceTreeWidget));
exports.DebugThreadsWidget = DebugThreadsWidget;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/view/debug-view-model.js":
/*!************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/view/debug-view-model.js ***!
  \************************************************************************/
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
exports.DebugViewModel = exports.DebugViewOptions = void 0;
var p_debounce_1 = __webpack_require__(/*! p-debounce */ "./node_modules/p-debounce/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var debug_session_1 = __webpack_require__(/*! ../debug-session */ "./node_modules/@theia/debug/lib/browser/debug-session.js");
var debug_session_manager_1 = __webpack_require__(/*! ../debug-session-manager */ "./node_modules/@theia/debug/lib/browser/debug-session-manager.js");
var debug_watch_expression_1 = __webpack_require__(/*! ./debug-watch-expression */ "./node_modules/@theia/debug/lib/browser/view/debug-watch-expression.js");
var debug_watch_manager_1 = __webpack_require__(/*! ../debug-watch-manager */ "./node_modules/@theia/debug/lib/browser/debug-watch-manager.js");
exports.DebugViewOptions = Symbol('DebugViewOptions');
var DebugViewModel = /** @class */ (function () {
    function DebugViewModel() {
        var _this = this;
        this.onDidChangeEmitter = new common_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.onDidChangeBreakpointsEmitter = new common_1.Emitter();
        this.onDidChangeBreakpoints = this.onDidChangeBreakpointsEmitter.event;
        this._watchExpressions = new Map();
        this.onDidChangeWatchExpressionsEmitter = new common_1.Emitter();
        this.onDidChangeWatchExpressions = this.onDidChangeWatchExpressionsEmitter.event;
        this.toDispose = new common_1.DisposableCollection(this.onDidChangeEmitter, this.onDidChangeBreakpointsEmitter, this.onDidChangeWatchExpressionsEmitter);
        this._sessions = new Set();
        this.refreshWatchExpressionsQueue = Promise.resolve();
        this.refreshWatchExpressions = p_debounce_1.default(function () {
            _this.refreshWatchExpressionsQueue = _this.refreshWatchExpressionsQueue.then(function () { return __awaiter(_this, void 0, void 0, function () {
                var _a, _b, watchExpression, e_1_1, e_2;
                var e_1, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _d.trys.push([0, 9, , 10]);
                            _d.label = 1;
                        case 1:
                            _d.trys.push([1, 6, 7, 8]);
                            _a = __values(this.watchExpressions), _b = _a.next();
                            _d.label = 2;
                        case 2:
                            if (!!_b.done) return [3 /*break*/, 5];
                            watchExpression = _b.value;
                            return [4 /*yield*/, watchExpression.evaluate()];
                        case 3:
                            _d.sent();
                            _d.label = 4;
                        case 4:
                            _b = _a.next();
                            return [3 /*break*/, 2];
                        case 5: return [3 /*break*/, 8];
                        case 6:
                            e_1_1 = _d.sent();
                            e_1 = { error: e_1_1 };
                            return [3 /*break*/, 8];
                        case 7:
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_1) throw e_1.error; }
                            return [7 /*endfinally*/];
                        case 8: return [3 /*break*/, 10];
                        case 9:
                            e_2 = _d.sent();
                            console.error('Failed to refresh watch expressions: ', e_2);
                            return [3 /*break*/, 10];
                        case 10: return [2 /*return*/];
                    }
                });
            }); });
        }, 50);
    }
    DebugViewModel.prototype.fireDidChange = function () {
        this.refreshWatchExpressions();
        this.onDidChangeEmitter.fire(undefined);
    };
    DebugViewModel.prototype.fireDidChangeBreakpoints = function (uri) {
        this.onDidChangeBreakpointsEmitter.fire(uri);
    };
    DebugViewModel.prototype.fireDidChangeWatchExpressions = function () {
        this.onDidChangeWatchExpressionsEmitter.fire(undefined);
    };
    Object.defineProperty(DebugViewModel.prototype, "sessions", {
        get: function () {
            return this._sessions.values();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugViewModel.prototype, "sessionCount", {
        get: function () {
            return this._sessions.size;
        },
        enumerable: false,
        configurable: true
    });
    DebugViewModel.prototype.push = function (session) {
        if (this._sessions.has(session)) {
            return;
        }
        this._sessions.add(session);
        this.fireDidChange();
    };
    DebugViewModel.prototype.delete = function (session) {
        if (this._sessions.delete(session)) {
            this.fireDidChange();
            return true;
        }
        return false;
    };
    Object.defineProperty(DebugViewModel.prototype, "session", {
        get: function () {
            return this.sessions.next().value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugViewModel.prototype, "id", {
        get: function () {
            return this.session && this.session.id || '-1';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugViewModel.prototype, "label", {
        get: function () {
            return this.session && this.session.label || 'Unknown Session';
        },
        enumerable: false,
        configurable: true
    });
    DebugViewModel.prototype.has = function (session) {
        return !!session && this._sessions.has(session);
    };
    DebugViewModel.prototype.init = function () {
        var _this = this;
        if (this.options.session) {
            this.push(this.options.session);
        }
        this.toDispose.push(this.manager.onDidChangeActiveDebugSession(function (_a) {
            var previous = _a.previous, current = _a.current;
            if (_this.has(previous) && !_this.has(current)) {
                _this.fireDidChange();
            }
        }));
        this.toDispose.push(this.manager.onDidChange(function (current) {
            if (_this.has(current)) {
                _this.fireDidChange();
            }
        }));
        this.toDispose.push(this.manager.onDidChangeBreakpoints(function (_a) {
            var session = _a.session, uri = _a.uri;
            if (!session || session === _this.currentSession) {
                _this.fireDidChangeBreakpoints(uri);
            }
        }));
        this.updateWatchExpressions();
        this.toDispose.push(this.watch.onDidChange(function () { return _this.updateWatchExpressions(); }));
    };
    DebugViewModel.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    Object.defineProperty(DebugViewModel.prototype, "currentSession", {
        get: function () {
            var currentSession = this.manager.currentSession;
            return this.has(currentSession) && currentSession || this.session;
        },
        set: function (currentSession) {
            this.manager.currentSession = currentSession;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugViewModel.prototype, "state", {
        get: function () {
            var currentSession = this.currentSession;
            return currentSession && currentSession.state || debug_session_1.DebugState.Inactive;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugViewModel.prototype, "currentThread", {
        get: function () {
            var currentSession = this.currentSession;
            return currentSession && currentSession.currentThread;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugViewModel.prototype, "currentFrame", {
        get: function () {
            var currentThread = this.currentThread;
            return currentThread && currentThread.currentFrame;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugViewModel.prototype, "breakpoints", {
        get: function () {
            return this.manager.getBreakpoints(this.currentSession);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DebugViewModel.prototype, "functionBreakpoints", {
        get: function () {
            return this.manager.getFunctionBreakpoints(this.currentSession);
        },
        enumerable: false,
        configurable: true
    });
    DebugViewModel.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var session, newSession;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        session = this.session;
                        if (!session) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.manager.start(session.options)];
                    case 1:
                        newSession = _a.sent();
                        if (newSession) {
                            this._sessions.delete(session);
                            this._sessions.add(newSession);
                            this.fireDidChange();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugViewModel.prototype.restart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var session, newSession;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        session = this.session;
                        if (!session) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.manager.restart(session)];
                    case 1:
                        newSession = _a.sent();
                        if (newSession !== session) {
                            this._sessions.delete(session);
                            this._sessions.add(newSession);
                        }
                        this.fireDidChange();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(DebugViewModel.prototype, "watchExpressions", {
        get: function () {
            return this._watchExpressions.values();
        },
        enumerable: false,
        configurable: true
    });
    DebugViewModel.prototype.addWatchExpression = function (expression) {
        if (expression === void 0) { expression = ''; }
        return __awaiter(this, void 0, void 0, function () {
            var watchExpression, id;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        watchExpression = new debug_watch_expression_1.DebugWatchExpression({
                            id: Number.MAX_SAFE_INTEGER,
                            expression: expression,
                            session: function () { return _this.currentSession; },
                            onDidChange: function () { }
                        });
                        return [4 /*yield*/, watchExpression.open()];
                    case 1:
                        _a.sent();
                        if (!watchExpression.expression) {
                            return [2 /*return*/, undefined];
                        }
                        id = this.watch.addWatchExpression(watchExpression.expression);
                        return [2 /*return*/, this._watchExpressions.get(id)];
                }
            });
        });
    };
    DebugViewModel.prototype.removeWatchExpressions = function () {
        this.watch.removeWatchExpressions();
    };
    DebugViewModel.prototype.removeWatchExpression = function (expression) {
        this.watch.removeWatchExpression(expression.id);
    };
    DebugViewModel.prototype.updateWatchExpressions = function () {
        var e_3, _a, e_4, _b;
        var _this = this;
        var added = false;
        var toRemove = new Set(this._watchExpressions.keys());
        try {
            for (var _c = __values(this.watch.watchExpressions), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), id = _e[0], expression = _e[1];
                toRemove.delete(id);
                if (!this._watchExpressions.has(id)) {
                    added = true;
                    var watchExpression = new debug_watch_expression_1.DebugWatchExpression({
                        id: id,
                        expression: expression,
                        session: function () { return _this.currentSession; },
                        onDidChange: function () { return _this.fireDidChangeWatchExpressions(); }
                    });
                    this._watchExpressions.set(id, watchExpression);
                    watchExpression.evaluate();
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
        try {
            for (var toRemove_1 = __values(toRemove), toRemove_1_1 = toRemove_1.next(); !toRemove_1_1.done; toRemove_1_1 = toRemove_1.next()) {
                var id = toRemove_1_1.value;
                this._watchExpressions.delete(id);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (toRemove_1_1 && !toRemove_1_1.done && (_b = toRemove_1.return)) _b.call(toRemove_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        if (added || toRemove.size) {
            this.fireDidChangeWatchExpressions();
        }
    };
    __decorate([
        inversify_1.inject(exports.DebugViewOptions),
        __metadata("design:type", Object)
    ], DebugViewModel.prototype, "options", void 0);
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], DebugViewModel.prototype, "manager", void 0);
    __decorate([
        inversify_1.inject(debug_watch_manager_1.DebugWatchManager),
        __metadata("design:type", debug_watch_manager_1.DebugWatchManager)
    ], DebugViewModel.prototype, "watch", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DebugViewModel.prototype, "init", null);
    DebugViewModel = __decorate([
        inversify_1.injectable()
    ], DebugViewModel);
    return DebugViewModel;
}());
exports.DebugViewModel = DebugViewModel;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/browser/view/debug-watch-expression.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/browser/view/debug-watch-expression.js ***!
  \******************************************************************************/
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
exports.DebugWatchExpression = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var dialogs_1 = __webpack_require__(/*! @theia/core/lib/browser/dialogs */ "./node_modules/@theia/core/lib/browser/dialogs.js");
var debug_console_items_1 = __webpack_require__(/*! ../console/debug-console-items */ "./node_modules/@theia/debug/lib/browser/console/debug-console-items.js");
var DebugWatchExpression = /** @class */ (function (_super) {
    __extends(DebugWatchExpression, _super);
    function DebugWatchExpression(options) {
        var _this = _super.call(this, options.expression, options.session) || this;
        _this.options = options;
        _this.setValueRef = function (valueRef) { return _this.valueRef = valueRef || undefined; };
        _this.id = options.id;
        return _this;
    }
    DebugWatchExpression.prototype.evaluate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.evaluate.call(this, 'watch')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugWatchExpression.prototype.setResult = function (body) {
        // overridden to ignore error
        _super.prototype.setResult.call(this, body);
        this.options.onDidChange();
    };
    DebugWatchExpression.prototype.render = function () {
        return React.createElement("div", { className: 'theia-debug-console-variable' },
            React.createElement("span", { title: this.type || this._expression, className: 'name' },
                this._expression,
                ": "),
            React.createElement("span", { title: this._value, ref: this.setValueRef }, this._value));
    };
    DebugWatchExpression.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            var input, newValue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        input = new dialogs_1.SingleTextInputDialog({
                            title: 'Edit Watch Expression',
                            initialValue: this.expression
                        });
                        return [4 /*yield*/, input.open()];
                    case 1:
                        newValue = _a.sent();
                        if (!(newValue !== undefined)) return [3 /*break*/, 3];
                        this._expression = newValue;
                        return [4 /*yield*/, this.evaluate()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(DebugWatchExpression.prototype, "supportCopyValue", {
        get: function () {
            return !!this.valueRef && document.queryCommandSupported('copy');
        },
        enumerable: false,
        configurable: true
    });
    DebugWatchExpression.prototype.copyValue = function () {
        var selection = document.getSelection();
        if (this.valueRef && selection) {
            selection.selectAllChildren(this.valueRef);
            document.execCommand('copy');
        }
    };
    return DebugWatchExpression;
}(debug_console_items_1.ExpressionItem));
exports.DebugWatchExpression = DebugWatchExpression;


/***/ }),

/***/ "./node_modules/@theia/debug/lib/common/debug-common.js":
/*!**************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/common/debug-common.js ***!
  \**************************************************************/
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
// FIXME: refactor extensions to get rid of this file and remove it
__exportStar(__webpack_require__(/*! ./debug-configuration */ "./node_modules/@theia/debug/lib/common/debug-configuration.js"), exports);


/***/ }),

/***/ "./node_modules/@theia/debug/lib/common/debug-configuration.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/common/debug-configuration.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugConfiguration = void 0;
var DebugConfiguration;
(function (DebugConfiguration) {
    function is(arg) {
        return !!arg && typeof arg === 'object' && 'type' in arg && 'name' in arg && 'request' in arg;
    }
    DebugConfiguration.is = is;
})(DebugConfiguration = exports.DebugConfiguration || (exports.DebugConfiguration = {}));


/***/ }),

/***/ "./node_modules/@theia/debug/lib/common/debug-service.js":
/*!***************************************************************!*\
  !*** ./node_modules/@theia/debug/lib/common/debug-service.js ***!
  \***************************************************************/
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
exports.DebugError = exports.DebugAdapterPath = exports.DebugService = exports.DebugPath = void 0;
var application_error_1 = __webpack_require__(/*! @theia/core/lib/common/application-error */ "./node_modules/@theia/core/lib/common/application-error.js");
/**
 * The WS endpoint path to the Debug service.
 */
exports.DebugPath = '/services/debug';
/**
 * DebugService symbol for DI.
 */
exports.DebugService = Symbol('DebugService');
/**
 * The endpoint path to the debug adapter session.
 */
exports.DebugAdapterPath = '/services/debug-adapter';
var DebugError;
(function (DebugError) {
    DebugError.NotFound = application_error_1.ApplicationError.declare(-41000, function (type) { return ({
        message: "'" + type + "' debugger type is not supported.",
        data: { type: type }
    }); });
})(DebugError = exports.DebugError || (exports.DebugError = {}));


/***/ })

}]);
//# sourceMappingURL=30.bundle.js.map