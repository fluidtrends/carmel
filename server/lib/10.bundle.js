(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/@theia/editor/lib/browser/editor.js":
/*!**********************************************************!*\
  !*** ./node_modules/@theia/editor/lib/browser/editor.js ***!
  \**********************************************************/
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
exports.TextEditorSelection = exports.MouseTargetType = exports.TextDocumentContentChangeDelta = exports.TextEditorProvider = exports.Location = exports.Range = exports.Position = void 0;
var vscode_languageserver_types_1 = __webpack_require__(/*! vscode-languageserver-types */ "./node_modules/vscode-languageserver-types/lib/esm/main.js");
Object.defineProperty(exports, "Position", { enumerable: true, get: function () { return vscode_languageserver_types_1.Position; } });
Object.defineProperty(exports, "Range", { enumerable: true, get: function () { return vscode_languageserver_types_1.Range; } });
Object.defineProperty(exports, "Location", { enumerable: true, get: function () { return vscode_languageserver_types_1.Location; } });
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
Object.defineProperty(exports, "TextDocumentContentChangeDelta", { enumerable: true, get: function () { return common_1.TextDocumentContentChangeDelta; } });
exports.TextEditorProvider = Symbol('TextEditorProvider');
/**
 * Type of hit element with the mouse in the editor.
 * Copied from monaco editor.
 */
var MouseTargetType;
(function (MouseTargetType) {
    /**
     * Mouse is on top of an unknown element.
     */
    MouseTargetType[MouseTargetType["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * Mouse is on top of the textarea used for input.
     */
    MouseTargetType[MouseTargetType["TEXTAREA"] = 1] = "TEXTAREA";
    /**
     * Mouse is on top of the glyph margin
     */
    MouseTargetType[MouseTargetType["GUTTER_GLYPH_MARGIN"] = 2] = "GUTTER_GLYPH_MARGIN";
    /**
     * Mouse is on top of the line numbers
     */
    MouseTargetType[MouseTargetType["GUTTER_LINE_NUMBERS"] = 3] = "GUTTER_LINE_NUMBERS";
    /**
     * Mouse is on top of the line decorations
     */
    MouseTargetType[MouseTargetType["GUTTER_LINE_DECORATIONS"] = 4] = "GUTTER_LINE_DECORATIONS";
    /**
     * Mouse is on top of the whitespace left in the gutter by a view zone.
     */
    MouseTargetType[MouseTargetType["GUTTER_VIEW_ZONE"] = 5] = "GUTTER_VIEW_ZONE";
    /**
     * Mouse is on top of text in the content.
     */
    MouseTargetType[MouseTargetType["CONTENT_TEXT"] = 6] = "CONTENT_TEXT";
    /**
     * Mouse is on top of empty space in the content (e.g. after line text or below last line)
     */
    MouseTargetType[MouseTargetType["CONTENT_EMPTY"] = 7] = "CONTENT_EMPTY";
    /**
     * Mouse is on top of a view zone in the content.
     */
    MouseTargetType[MouseTargetType["CONTENT_VIEW_ZONE"] = 8] = "CONTENT_VIEW_ZONE";
    /**
     * Mouse is on top of a content widget.
     */
    MouseTargetType[MouseTargetType["CONTENT_WIDGET"] = 9] = "CONTENT_WIDGET";
    /**
     * Mouse is on top of the decorations overview ruler.
     */
    MouseTargetType[MouseTargetType["OVERVIEW_RULER"] = 10] = "OVERVIEW_RULER";
    /**
     * Mouse is on top of a scrollbar.
     */
    MouseTargetType[MouseTargetType["SCROLLBAR"] = 11] = "SCROLLBAR";
    /**
     * Mouse is on top of an overlay widget.
     */
    MouseTargetType[MouseTargetType["OVERLAY_WIDGET"] = 12] = "OVERLAY_WIDGET";
    /**
     * Mouse is outside of the editor.
     */
    MouseTargetType[MouseTargetType["OUTSIDE_EDITOR"] = 13] = "OUTSIDE_EDITOR";
})(MouseTargetType = exports.MouseTargetType || (exports.MouseTargetType = {}));
var TextEditorSelection;
(function (TextEditorSelection) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(e) {
        return e && e['uri'] instanceof uri_1.default;
    }
    TextEditorSelection.is = is;
})(TextEditorSelection = exports.TextEditorSelection || (exports.TextEditorSelection = {}));


/***/ }),

/***/ "./node_modules/@theia/editor/lib/browser/navigation/navigation-location-service.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@theia/editor/lib/browser/navigation/navigation-location-service.js ***!
  \******************************************************************************************/
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
exports.NavigationLocationService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var logger_1 = __webpack_require__(/*! @theia/core/lib/common/logger */ "./node_modules/@theia/core/lib/common/logger.js");
var opener_service_1 = __webpack_require__(/*! @theia/core/lib/browser/opener-service */ "./node_modules/@theia/core/lib/browser/opener-service.js");
var navigation_location_updater_1 = __webpack_require__(/*! ./navigation-location-updater */ "./node_modules/@theia/editor/lib/browser/navigation/navigation-location-updater.js");
var navigation_location_similarity_1 = __webpack_require__(/*! ./navigation-location-similarity */ "./node_modules/@theia/editor/lib/browser/navigation/navigation-location-similarity.js");
var navigation_location_1 = __webpack_require__(/*! ./navigation-location */ "./node_modules/@theia/editor/lib/browser/navigation/navigation-location.js");
/**
 * The navigation location service. Also, stores and manages navigation locations.
 */
var NavigationLocationService = /** @class */ (function () {
    function NavigationLocationService() {
        this.pointer = -1;
        this.stack = [];
        this.canRegister = true;
    }
    NavigationLocationService_1 = NavigationLocationService;
    /**
     * Registers the give locations into the service.
     */
    NavigationLocationService.prototype.register = function () {
        var _this = this;
        var locations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            locations[_i] = arguments[_i];
        }
        if (this.canRegister) {
            var max_1 = this.maxStackItems();
            __spread(locations).forEach(function (location) {
                if (navigation_location_1.ContentChangeLocation.is(location)) {
                    _this._lastEditLocation = location;
                }
                var current = _this.currentLocation();
                _this.debug("Registering new location: " + navigation_location_1.NavigationLocation.toString(location) + ".");
                if (!_this.isSimilar(current, location)) {
                    _this.debug('Before location registration.');
                    _this.debug(_this.stackDump);
                    // Just like in VSCode; if we are not at the end of stack, we remove anything after.
                    if (_this.stack.length > _this.pointer + 1) {
                        _this.debug("Discarding all locations after " + _this.pointer + ".");
                        _this.stack = _this.stack.slice(0, _this.pointer + 1);
                    }
                    _this.stack.push(location);
                    _this.pointer = _this.stack.length - 1;
                    if (_this.stack.length > max_1) {
                        _this.debug('Trimming exceeding locations.');
                        _this.stack.shift();
                        _this.pointer--;
                    }
                    _this.debug('Updating preceding navigation locations.');
                    for (var i = _this.stack.length - 1; i >= 0; i--) {
                        var candidate = _this.stack[i];
                        var update = _this.updater.affects(candidate, location);
                        if (update === undefined) {
                            _this.debug("Erasing obsolete location: " + navigation_location_1.NavigationLocation.toString(candidate) + ".");
                            _this.stack.splice(i, 1);
                            _this.pointer--;
                        }
                        else if (typeof update !== 'boolean') {
                            _this.debug("Updating location at index: " + i + " => " + navigation_location_1.NavigationLocation.toString(candidate) + ".");
                            _this.stack[i] = update;
                        }
                    }
                    _this.debug('After location registration.');
                    _this.debug(_this.stackDump);
                }
                else {
                    if (current) {
                        _this.debug("The new location " + navigation_location_1.NavigationLocation.toString(location) + " is similar to the current one: " + navigation_location_1.NavigationLocation.toString(current) + ". Aborting.");
                    }
                }
            });
        }
    };
    /**
     * Navigates one back. Returns with the previous location, or `undefined` if it could not navigate back.
     */
    NavigationLocationService.prototype.back = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.debug('Navigating back.');
                        if (!this.canGoBack()) return [3 /*break*/, 2];
                        this.pointer--;
                        return [4 /*yield*/, this.reveal()];
                    case 1:
                        _a.sent();
                        this.debug(this.stackDump);
                        return [2 /*return*/, this.currentLocation()];
                    case 2:
                        this.debug('Cannot navigate back.');
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    /**
     * Navigates one forward. Returns with the next location, or `undefined` if it could not go forward.
     */
    NavigationLocationService.prototype.forward = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.debug('Navigating forward.');
                        if (!this.canGoForward()) return [3 /*break*/, 2];
                        this.pointer++;
                        return [4 /*yield*/, this.reveal()];
                    case 1:
                        _a.sent();
                        this.debug(this.stackDump);
                        return [2 /*return*/, this.currentLocation()];
                    case 2:
                        this.debug('Cannot navigate forward.');
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    /**
     * Checks whether the service can go [`back`](#back).
     */
    NavigationLocationService.prototype.canGoBack = function () {
        return this.pointer >= 1;
    };
    /**
     * Checks whether the service can go [`forward`](#forward).
     */
    NavigationLocationService.prototype.canGoForward = function () {
        return this.pointer >= 0 && this.pointer !== this.stack.length - 1;
    };
    /**
     * Returns with all known navigation locations in chronological order.
     */
    NavigationLocationService.prototype.locations = function () {
        return this.stack;
    };
    /**
     * Returns with the current location.
     */
    NavigationLocationService.prototype.currentLocation = function () {
        return this.stack[this.pointer];
    };
    /**
     * Returns with the location of the most recent edition if any. If there were no modifications,
     * returns `undefined`.
     */
    NavigationLocationService.prototype.lastEditLocation = function () {
        return this._lastEditLocation;
    };
    /**
     * Clears the navigation history.
     */
    NavigationLocationService.prototype.clearHistory = function () {
        this.stack = [];
        this.pointer = -1;
        this._lastEditLocation = undefined;
    };
    /**
     * Reveals the location argument. If not given, reveals the `current location`. Does nothing, if the argument is `undefined`.
     */
    NavigationLocationService.prototype.reveal = function (location) {
        if (location === void 0) { location = this.currentLocation(); }
        return __awaiter(this, void 0, void 0, function () {
            var uri, options, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (location === undefined) {
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        this.canRegister = false;
                        uri = location.uri;
                        options = this.toOpenerOptions(location);
                        return [4 /*yield*/, opener_service_1.open(this.openerService, uri, options)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        e_1 = _a.sent();
                        this.logger.error("Error occurred while revealing location: " + navigation_location_1.NavigationLocation.toString(location) + ".", e_1);
                        return [3 /*break*/, 5];
                    case 4:
                        this.canRegister = true;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * `true` if the two locations are similar.
     */
    NavigationLocationService.prototype.isSimilar = function (left, right) {
        return this.similarity.similar(left, right);
    };
    /**
     * Returns with the number of navigation locations that the application can handle and manage.
     * When the number of locations exceeds this number, old locations will be erased.
     */
    NavigationLocationService.prototype.maxStackItems = function () {
        return NavigationLocationService_1.MAX_STACK_ITEMS;
    };
    /**
     * Returns with the opener option for the location argument.
     */
    NavigationLocationService.prototype.toOpenerOptions = function (location) {
        var start = navigation_location_1.NavigationLocation.range(location).start;
        // Here, the `start` and represents the previous state that has been updated with the `text`.
        // So we calculate the range by appending the `text` length to the `start`.
        if (navigation_location_1.ContentChangeLocation.is(location)) {
            start = __assign(__assign({}, start), { character: start.character + location.context.text.length });
        }
        return {
            selection: navigation_location_1.Range.create(start, start)
        };
    };
    NavigationLocationService.prototype.debug = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.logger.trace(typeof message === 'string' ? message : message());
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(NavigationLocationService.prototype, "stackDump", {
        get: function () {
            return "----- Navigation location stack [" + new Date() + "] -----\nPointer: " + this.pointer + "\n" + this.stack.map(function (location, i) { return i + ": " + JSON.stringify(navigation_location_1.NavigationLocation.toObject(location)); }).join('\n') + "\n----- o -----";
        },
        enumerable: false,
        configurable: true
    });
    var NavigationLocationService_1;
    NavigationLocationService.MAX_STACK_ITEMS = 30;
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], NavigationLocationService.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(opener_service_1.OpenerService),
        __metadata("design:type", Object)
    ], NavigationLocationService.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(navigation_location_updater_1.NavigationLocationUpdater),
        __metadata("design:type", navigation_location_updater_1.NavigationLocationUpdater)
    ], NavigationLocationService.prototype, "updater", void 0);
    __decorate([
        inversify_1.inject(navigation_location_similarity_1.NavigationLocationSimilarity),
        __metadata("design:type", navigation_location_similarity_1.NavigationLocationSimilarity)
    ], NavigationLocationService.prototype, "similarity", void 0);
    NavigationLocationService = NavigationLocationService_1 = __decorate([
        inversify_1.injectable()
    ], NavigationLocationService);
    return NavigationLocationService;
}());
exports.NavigationLocationService = NavigationLocationService;


/***/ }),

/***/ "./node_modules/@theia/editor/lib/browser/navigation/navigation-location-similarity.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@theia/editor/lib/browser/navigation/navigation-location-similarity.js ***!
  \*********************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationLocationSimilarity = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var navigation_location_1 = __webpack_require__(/*! ./navigation-location */ "./node_modules/@theia/editor/lib/browser/navigation/navigation-location.js");
/**
 * Service for checking whether two navigation locations are similar or not.
 */
var NavigationLocationSimilarity = /** @class */ (function () {
    function NavigationLocationSimilarity() {
    }
    NavigationLocationSimilarity_1 = NavigationLocationSimilarity;
    /**
     * `true` if the `left` and `right` locations are withing +- 10 lines in the same editor. Otherwise, `false`.
     */
    NavigationLocationSimilarity.prototype.similar = function (left, right) {
        if (left === undefined || right === undefined) {
            return left === right;
        }
        if (left.uri.toString() !== right.uri.toString()) {
            return false;
        }
        var leftRange = navigation_location_1.NavigationLocation.range(left);
        var rightRange = navigation_location_1.NavigationLocation.range(right);
        if (leftRange === undefined || rightRange === undefined) {
            return leftRange === rightRange;
        }
        var leftLineNumber = Math.min(leftRange.start.line, leftRange.end.line);
        var rightLineNumber = Math.min(rightRange.start.line, rightRange.end.line);
        return Math.abs(leftLineNumber - rightLineNumber) < this.getThreshold();
    };
    NavigationLocationSimilarity.prototype.getThreshold = function () {
        return NavigationLocationSimilarity_1.EDITOR_SELECTION_THRESHOLD;
    };
    var NavigationLocationSimilarity_1;
    /**
     * The number of lines to move in the editor to justify for new state.
     */
    NavigationLocationSimilarity.EDITOR_SELECTION_THRESHOLD = 10;
    NavigationLocationSimilarity = NavigationLocationSimilarity_1 = __decorate([
        inversify_1.injectable()
    ], NavigationLocationSimilarity);
    return NavigationLocationSimilarity;
}());
exports.NavigationLocationSimilarity = NavigationLocationSimilarity;


/***/ }),

/***/ "./node_modules/@theia/editor/lib/browser/navigation/navigation-location-updater.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@theia/editor/lib/browser/navigation/navigation-location-updater.js ***!
  \******************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationLocationUpdater = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var navigation_location_1 = __webpack_require__(/*! ./navigation-location */ "./node_modules/@theia/editor/lib/browser/navigation/navigation-location.js");
/**
 * A navigation location updater that is responsible for adapting editor navigation locations.
 *
 * 1. Inserting or deleting text before the position shifts the position accordingly.
 * 2. Inserting text at the position offset shifts the position accordingly.
 * 3. Inserting or deleting text strictly contained by the position shrinks or stretches the position.
 * 4. Inserting or deleting text after a position does not affect the position.
 * 5. Deleting text which strictly contains the position deletes the position.
 * Note that the position is not deleted if its only shrunken to length zero. To delete a position, the modification must delete from
 * strictly before to strictly after the position.
 * 6. Replacing text contained by the position shrinks or expands the position (but does not shift it), such that the final position
 * contains the original position and the replacing text.
 * 7. Replacing text overlapping the position in other ways is considered as a sequence of first deleting the replaced text and
 * afterwards inserting the new text. Thus, a position is shrunken and can then be shifted (if the replaced text overlaps the offset of the position).
 */
var NavigationLocationUpdater = /** @class */ (function () {
    function NavigationLocationUpdater() {
    }
    /**
     * Checks whether `candidateLocation` has to be updated when applying `other`.
     *  - `false` if the `other` does not affect the `candidateLocation`.
     *  - A `NavigationLocation` object if the `candidateLocation` has to be replaced with the return value.
     *  - `undefined` if the candidate has to be deleted.
     *
     * If the `otherLocation` is not a `ContentChangeLocation` or it does not contain any actual content changes, this method returns with `false`
     */
    NavigationLocationUpdater.prototype.affects = function (candidateLocation, otherLocation) {
        if (!navigation_location_1.ContentChangeLocation.is(otherLocation)) {
            return false;
        }
        if (candidateLocation.uri.toString() !== otherLocation.uri.toString()) {
            return false;
        }
        var candidate = navigation_location_1.NavigationLocation.range(candidateLocation);
        var other = navigation_location_1.NavigationLocation.range(otherLocation);
        if (candidate === undefined || other === undefined) {
            return false;
        }
        var uri = candidateLocation.uri, type = candidateLocation.type;
        var modification = otherLocation.context.text;
        var newLineCount = modification.split(/[\n\r]/g).length - 1;
        // Spec (1. and 2.)
        if (other.end.line < candidate.start.line
            || (other.end.line === candidate.start.line && other.end.character <= candidate.start.character)) {
            // Shortcut for the general case. The user is typing above the candidate range. Nothing to do.
            if (other.start.line === other.end.line && newLineCount === 0) {
                return false;
            }
            var lineDiff = other.start.line - other.end.line + newLineCount;
            var startCharacter = candidate.start.character;
            var endCharacter = candidate.end.character;
            if (other.start.line !== other.end.line) {
                startCharacter = other.start.character + (candidate.start.character - other.end.character) + (modification.length - (modification.lastIndexOf('\n') + 1));
                endCharacter = candidate.start.line === candidate.end.line
                    ? candidate.end.character + startCharacter - candidate.start.character
                    : candidate.end.character;
            }
            var context_1 = this.handleBefore(candidateLocation, other, lineDiff, startCharacter, endCharacter);
            return {
                uri: uri,
                type: type,
                context: context_1
            };
        }
        // Spec (3.,  5., and 6.)
        if (this.contained(other, candidate)) {
            var endLine = candidate.end.line - other.end.line + candidate.start.line + newLineCount;
            var endCharacter = candidate.end.character - (other.end.character - other.start.character) + modification.length;
            if (newLineCount > 0) {
                if (candidate.end.line === other.end.line) {
                    endCharacter = modification.length - (modification.lastIndexOf('\n') + 1) + (candidate.end.character - other.end.character);
                }
                else {
                    endCharacter = endCharacter - 1;
                }
            }
            var context_2 = this.handleInside(candidateLocation, endLine, endCharacter);
            return {
                uri: uri,
                type: type,
                context: context_2
            };
        }
        // Spec (5.)
        if (other.start.line === candidate.start.line && other.start.character === candidate.start.character
            && (other.end.line > candidate.end.line || (other.end.line === candidate.end.line && other.end.character > candidate.end.character))) {
            return undefined;
        }
        // Spec (4.)
        if (candidate.end.line < other.start.line
            || (candidate.end.line === other.start.line && candidate.end.character < other.end.character)) {
            return false;
        }
        return false;
    };
    NavigationLocationUpdater.prototype.handleInside = function (candidate, endLine, endCharacter) {
        if (navigation_location_1.CursorLocation.is(candidate)) {
            throw new Error('Modifications are not allowed inside a cursor location.');
        }
        var start = navigation_location_1.NavigationLocation.range(candidate).start;
        var range = {
            start: start,
            end: {
                line: endLine,
                character: endCharacter
            }
        };
        if (navigation_location_1.SelectionLocation.is(candidate)) {
            return range;
        }
        if (navigation_location_1.ContentChangeLocation.is(candidate)) {
            var _a = candidate.context, rangeLength = _a.rangeLength, text = _a.text;
            return {
                range: range,
                rangeLength: rangeLength,
                text: text
            };
        }
        throw new Error("Unexpected navigation location: " + navigation_location_1.NavigationLocation.toString(candidate) + ".");
    };
    NavigationLocationUpdater.prototype.handleBefore = function (candidate, modification, lineDiff, startCharacter, endCharacter) {
        var range = navigation_location_1.NavigationLocation.range(candidate);
        range = this.shiftLine(range, lineDiff);
        range = {
            start: {
                line: range.start.line,
                character: startCharacter
            },
            end: {
                line: range.end.line,
                character: endCharacter
            }
        };
        if (navigation_location_1.CursorLocation.is(candidate)) {
            return range.start;
        }
        if (navigation_location_1.SelectionLocation.is(candidate)) {
            return range;
        }
        if (navigation_location_1.ContentChangeLocation.is(candidate)) {
            var _a = candidate.context, rangeLength = _a.rangeLength, text = _a.text;
            return {
                range: range,
                rangeLength: rangeLength,
                text: text
            };
        }
        throw new Error("Unexpected navigation location: " + navigation_location_1.NavigationLocation.toString(candidate) + ".");
    };
    NavigationLocationUpdater.prototype.shiftLine = function (input, diff) {
        if (navigation_location_1.Position.is(input)) {
            var line = input.line, character = input.character;
            return {
                line: line + diff,
                character: character
            };
        }
        var start = input.start, end = input.end;
        return {
            start: this.shiftLine(start, diff),
            end: this.shiftLine(end, diff)
        };
    };
    /**
     * `true` if `subRange` is strictly contained in the `range`. Otherwise, `false`.
     */
    NavigationLocationUpdater.prototype.contained = function (subRange, range) {
        if (subRange.start.line > range.start.line && subRange.end.line < range.end.line) {
            return true;
        }
        if (subRange.start.line < range.start.line || subRange.end.line > range.end.line) {
            return false;
        }
        if (subRange.start.line === range.start.line && subRange.start.character < range.start.character) {
            return false;
        }
        if (subRange.end.line === range.end.line && subRange.end.character > range.end.character) {
            return false;
        }
        return true;
    };
    NavigationLocationUpdater = __decorate([
        inversify_1.injectable()
    ], NavigationLocationUpdater);
    return NavigationLocationUpdater;
}());
exports.NavigationLocationUpdater = NavigationLocationUpdater;


/***/ }),

/***/ "./node_modules/@theia/editor/lib/browser/navigation/navigation-location.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@theia/editor/lib/browser/navigation/navigation-location.js ***!
  \**********************************************************************************/
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
exports.ContentChangeLocation = exports.SelectionLocation = exports.CursorLocation = exports.NavigationLocation = exports.Range = exports.Position = void 0;
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var editor_1 = __webpack_require__(/*! ../editor */ "./node_modules/@theia/editor/lib/browser/editor.js");
Object.defineProperty(exports, "Position", { enumerable: true, get: function () { return editor_1.Position; } });
Object.defineProperty(exports, "Range", { enumerable: true, get: function () { return editor_1.Range; } });
var NavigationLocation;
(function (NavigationLocation) {
    /**
     * The navigation location type.
     */
    var Type;
    (function (Type) {
        /**
         * Cursor position change type.
         */
        Type[Type["CURSOR"] = 0] = "CURSOR";
        /**
         * Text selection change type.
         */
        Type[Type["SELECTION"] = 1] = "SELECTION";
        /**
         * Content change type.
         */
        Type[Type["CONTENT_CHANGE"] = 2] = "CONTENT_CHANGE";
    })(Type = NavigationLocation.Type || (NavigationLocation.Type = {}));
    var Context;
    (function (Context) {
        /**
         * Returns with the type for the context.
         */
        function getType(context) {
            if (editor_1.Position.is(context)) {
                return Type.CURSOR;
            }
            if (editor_1.Range.is(context)) {
                return Type.SELECTION;
            }
            if (editor_1.TextDocumentContentChangeDelta.is(context)) {
                return Type.CONTENT_CHANGE;
            }
            throw new Error("Unexpected context for type: " + context + ".");
        }
        Context.getType = getType;
    })(Context = NavigationLocation.Context || (NavigationLocation.Context = {}));
})(NavigationLocation = exports.NavigationLocation || (exports.NavigationLocation = {}));
(function (NavigationLocation) {
    /**
     * Transforms the location into an object that can be safely serialized.
     */
    function toObject(location) {
        var uri = location.uri, type = location.type;
        var context = (function () {
            if (CursorLocation.is(location)) {
                return CursorLocation.toObject(location.context);
            }
            if (SelectionLocation.is(location)) {
                return SelectionLocation.toObject(location.context);
            }
            if (ContentChangeLocation.is(location)) {
                return ContentChangeLocation.toObject(location.context);
            }
        })();
        return {
            uri: uri.toString(),
            type: type,
            context: context
        };
    }
    NavigationLocation.toObject = toObject;
    /**
     * Returns with the navigation location object from its serialized counterpart.
     */
    function fromObject(object) {
        var uri = object.uri, type = object.type;
        if (uri !== undefined && type !== undefined && object.context !== undefined) {
            var context_1 = (function () {
                switch (type) {
                    case NavigationLocation.Type.CURSOR: return CursorLocation.fromObject(object.context);
                    case NavigationLocation.Type.SELECTION: return SelectionLocation.fromObject(object.context);
                    case NavigationLocation.Type.CONTENT_CHANGE: return ContentChangeLocation.fromObject(object.context);
                }
            })();
            if (context_1) {
                return {
                    uri: toUri(uri),
                    context: context_1,
                    type: type
                };
            }
        }
        return undefined;
    }
    NavigationLocation.fromObject = fromObject;
    /**
     * Returns with the context of the location as a `Range`.
     */
    function range(location) {
        if (CursorLocation.is(location)) {
            return editor_1.Range.create(location.context, location.context);
        }
        if (SelectionLocation.is(location)) {
            return location.context;
        }
        if (ContentChangeLocation.is(location)) {
            return location.context.range;
        }
        throw new Error("Unexpected navigation location: " + location + ".");
    }
    NavigationLocation.range = range;
    /**
     * Creates a new navigation location object.
     */
    function create(uri, context) {
        var type = NavigationLocation.Context.getType(context);
        return {
            uri: toUri(uri),
            type: type,
            context: context
        };
    }
    NavigationLocation.create = create;
    /**
     * Returns with the human-consumable (JSON) string representation of the location argument.
     */
    function toString(location) {
        return JSON.stringify(toObject(location));
    }
    NavigationLocation.toString = toString;
    function toUri(arg) {
        if (arg instanceof uri_1.default) {
            return arg;
        }
        if (typeof arg === 'string') {
            return new uri_1.default(arg);
        }
        return arg.uri;
    }
})(NavigationLocation = exports.NavigationLocation || (exports.NavigationLocation = {}));
var CursorLocation;
(function (CursorLocation) {
    /**
     * `true` if the argument is a cursor location. Otherwise, `false`.
     */
    function is(location) {
        return location.type === NavigationLocation.Type.CURSOR;
    }
    CursorLocation.is = is;
    /**
     * Returns with the serialized format of the position argument.
     */
    function toObject(context) {
        var line = context.line, character = context.character;
        return {
            line: line,
            character: character
        };
    }
    CursorLocation.toObject = toObject;
    /**
     * Returns with the position from its serializable counterpart, or `undefined`.
     */
    function fromObject(object) {
        if (object.line !== undefined && object.character !== undefined) {
            var line = object.line, character = object.character;
            return {
                line: line,
                character: character
            };
        }
        return undefined;
    }
    CursorLocation.fromObject = fromObject;
})(CursorLocation = exports.CursorLocation || (exports.CursorLocation = {}));
var SelectionLocation;
(function (SelectionLocation) {
    /**
     * `true` if the argument is a selection location.
     */
    function is(location) {
        return location.type === NavigationLocation.Type.SELECTION;
    }
    SelectionLocation.is = is;
    /**
     * Converts the range argument into a serializable object.
     */
    function toObject(context) {
        var start = context.start, end = context.end;
        return {
            start: CursorLocation.toObject(start),
            end: CursorLocation.toObject(end)
        };
    }
    SelectionLocation.toObject = toObject;
    /**
     * Creates a range object from its serializable counterpart. Returns with `undefined` if the argument cannot be converted into a range.
     */
    function fromObject(object) {
        if (!!object.start && !!object.end) {
            var start = CursorLocation.fromObject(object.start);
            var end = CursorLocation.fromObject(object.end);
            if (start && end) {
                return {
                    start: start,
                    end: end
                };
            }
        }
        return undefined;
    }
    SelectionLocation.fromObject = fromObject;
})(SelectionLocation = exports.SelectionLocation || (exports.SelectionLocation = {}));
var ContentChangeLocation;
(function (ContentChangeLocation) {
    /**
     * `true` if the argument is a content change location. Otherwise, `false`.
     */
    function is(location) {
        return location.type === NavigationLocation.Type.CONTENT_CHANGE;
    }
    ContentChangeLocation.is = is;
    /**
     * Returns with a serializable object representing the arguments.
     */
    function toObject(context) {
        return {
            range: SelectionLocation.toObject(context.range),
            rangeLength: context.rangeLength,
            text: context.text
        };
    }
    ContentChangeLocation.toObject = toObject;
    /**
     * Returns with a text document change delta for the argument. `undefined` if the argument cannot be mapped to a content change delta.
     */
    function fromObject(object) {
        if (!!object.range && object.rangeLength !== undefined && object.text !== undefined) {
            var range = SelectionLocation.fromObject(object.range);
            var rangeLength = object.rangeLength;
            var text = object.text;
            if (!!range) {
                return {
                    range: range,
                    rangeLength: rangeLength,
                    text: text
                };
            }
        }
        else {
            return undefined;
        }
    }
    ContentChangeLocation.fromObject = fromObject;
})(ContentChangeLocation = exports.ContentChangeLocation || (exports.ContentChangeLocation = {}));


/***/ })

}]);
//# sourceMappingURL=10.bundle.js.map