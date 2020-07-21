(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/@theia/editor/lib/browser/decorations/editor-decoration-style.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@theia/editor/lib/browser/decorations/editor-decoration-style.js ***!
  \***************************************************************************************/
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
exports.EditorDecorationStyle = void 0;
var EditorDecorationStyle = /** @class */ (function () {
    function EditorDecorationStyle(selector, styleProvider) {
        this.selector = selector;
        EditorDecorationStyle.createRule(selector, styleProvider);
    }
    Object.defineProperty(EditorDecorationStyle.prototype, "className", {
        get: function () {
            return this.selector.split('::')[0];
        },
        enumerable: false,
        configurable: true
    });
    EditorDecorationStyle.prototype.dispose = function () {
        EditorDecorationStyle.deleteRule(this.selector);
    };
    return EditorDecorationStyle;
}());
exports.EditorDecorationStyle = EditorDecorationStyle;
(function (EditorDecorationStyle) {
    function copyStyle(from, to) {
        Object.keys(from).forEach(function (key) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            to[key] = from[key];
        });
    }
    EditorDecorationStyle.copyStyle = copyStyle;
    function createStyleSheet(container) {
        if (container === void 0) { container = document.getElementsByTagName('head')[0]; }
        if (!container) {
            return undefined;
        }
        var style = document.createElement('style');
        style.id = 'editorDecorationsStyle';
        style.type = 'text/css';
        style.media = 'screen';
        style.appendChild(document.createTextNode('')); // trick for webkit
        container.appendChild(style);
        return style.sheet;
    }
    EditorDecorationStyle.createStyleSheet = createStyleSheet;
    var editorDecorationsStyleSheet = createStyleSheet();
    function createRule(selector, styleProvider, styleSheet) {
        if (styleSheet === void 0) { styleSheet = editorDecorationsStyleSheet; }
        if (!styleSheet) {
            return;
        }
        var index = styleSheet.insertRule('.' + selector + '{}', 0);
        var rules = styleSheet.cssRules || styleSheet.rules;
        var rule = rules[index];
        if (rule && rule.type === CSSRule.STYLE_RULE) {
            var styleRule = rule;
            styleProvider(styleRule.style);
        }
    }
    EditorDecorationStyle.createRule = createRule;
    function deleteRule(selector, styleSheet) {
        if (styleSheet === void 0) { styleSheet = editorDecorationsStyleSheet; }
        if (!styleSheet) {
            return;
        }
        var rules = styleSheet.cssRules || styleSheet.rules;
        for (var i = 0; i < rules.length; i++) {
            if (rules[i].type === CSSRule.STYLE_RULE) {
                if (rules[i].selectorText === selector) {
                    styleSheet.removeRule(i);
                }
            }
        }
    }
    EditorDecorationStyle.deleteRule = deleteRule;
})(EditorDecorationStyle = exports.EditorDecorationStyle || (exports.EditorDecorationStyle = {}));
exports.EditorDecorationStyle = EditorDecorationStyle;


/***/ }),

/***/ "./node_modules/@theia/editor/lib/browser/decorations/editor-decoration.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@theia/editor/lib/browser/decorations/editor-decoration.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackedRangeStickiness = exports.OverviewRulerLane = exports.MinimapPosition = void 0;
var MinimapPosition;
(function (MinimapPosition) {
    MinimapPosition[MinimapPosition["Inline"] = 1] = "Inline";
    MinimapPosition[MinimapPosition["Gutter"] = 2] = "Gutter";
})(MinimapPosition = exports.MinimapPosition || (exports.MinimapPosition = {}));
var OverviewRulerLane;
(function (OverviewRulerLane) {
    OverviewRulerLane[OverviewRulerLane["Left"] = 1] = "Left";
    OverviewRulerLane[OverviewRulerLane["Center"] = 2] = "Center";
    OverviewRulerLane[OverviewRulerLane["Right"] = 4] = "Right";
    OverviewRulerLane[OverviewRulerLane["Full"] = 7] = "Full";
})(OverviewRulerLane = exports.OverviewRulerLane || (exports.OverviewRulerLane = {}));
var TrackedRangeStickiness;
(function (TrackedRangeStickiness) {
    TrackedRangeStickiness[TrackedRangeStickiness["AlwaysGrowsWhenTypingAtEdges"] = 0] = "AlwaysGrowsWhenTypingAtEdges";
    TrackedRangeStickiness[TrackedRangeStickiness["NeverGrowsWhenTypingAtEdges"] = 1] = "NeverGrowsWhenTypingAtEdges";
    TrackedRangeStickiness[TrackedRangeStickiness["GrowsOnlyWhenTypingBefore"] = 2] = "GrowsOnlyWhenTypingBefore";
    TrackedRangeStickiness[TrackedRangeStickiness["GrowsOnlyWhenTypingAfter"] = 3] = "GrowsOnlyWhenTypingAfter";
})(TrackedRangeStickiness = exports.TrackedRangeStickiness || (exports.TrackedRangeStickiness = {}));


/***/ }),

/***/ "./node_modules/@theia/editor/lib/browser/decorations/editor-decorator.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@theia/editor/lib/browser/decorations/editor-decorator.js ***!
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorDecorator = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var EditorDecorator = /** @class */ (function () {
    function EditorDecorator() {
        this.appliedDecorations = new Map();
    }
    EditorDecorator.prototype.setDecorations = function (editor, newDecorations) {
        var uri = editor.uri.toString();
        var oldDecorations = this.appliedDecorations.get(uri) || [];
        if (oldDecorations.length === 0 && newDecorations.length === 0) {
            return;
        }
        var decorationIds = editor.deltaDecorations({ oldDecorations: oldDecorations, newDecorations: newDecorations });
        this.appliedDecorations.set(uri, decorationIds);
    };
    EditorDecorator = __decorate([
        inversify_1.injectable()
    ], EditorDecorator);
    return EditorDecorator;
}());
exports.EditorDecorator = EditorDecorator;


/***/ }),

/***/ "./node_modules/@theia/editor/lib/browser/decorations/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@theia/editor/lib/browser/decorations/index.js ***!
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
__exportStar(__webpack_require__(/*! ./editor-decoration */ "./node_modules/@theia/editor/lib/browser/decorations/editor-decoration.js"), exports);
__exportStar(__webpack_require__(/*! ./editor-decoration-style */ "./node_modules/@theia/editor/lib/browser/decorations/editor-decoration-style.js"), exports);
__exportStar(__webpack_require__(/*! ./editor-decorator */ "./node_modules/@theia/editor/lib/browser/decorations/editor-decorator.js"), exports);


/***/ }),

/***/ "./node_modules/@theia/editor/lib/browser/diff-navigator.js":
/*!******************************************************************!*\
  !*** ./node_modules/@theia/editor/lib/browser/diff-navigator.js ***!
  \******************************************************************/
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
exports.DiffNavigatorProvider = void 0;
exports.DiffNavigatorProvider = Symbol('DiffNavigatorProvider');


/***/ }),

/***/ "./node_modules/@theia/editor/lib/browser/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@theia/editor/lib/browser/index.js ***!
  \*********************************************************/
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
__exportStar(__webpack_require__(/*! ./diff-navigator */ "./node_modules/@theia/editor/lib/browser/diff-navigator.js"), exports);
__exportStar(__webpack_require__(/*! ./editor */ "./node_modules/@theia/editor/lib/browser/editor.js"), exports);
__exportStar(__webpack_require__(/*! ./editor-widget */ "./node_modules/@theia/editor/lib/browser/editor-widget.js"), exports);
__exportStar(__webpack_require__(/*! ./editor-manager */ "./node_modules/@theia/editor/lib/browser/editor-manager.js"), exports);
__exportStar(__webpack_require__(/*! ./editor-command */ "./node_modules/@theia/editor/lib/browser/editor-command.js"), exports);
__exportStar(__webpack_require__(/*! ./editor-menu */ "./node_modules/@theia/editor/lib/browser/editor-menu.js"), exports);
__exportStar(__webpack_require__(/*! ./editor-keybinding-contexts */ "./node_modules/@theia/editor/lib/browser/editor-keybinding-contexts.js"), exports);
__exportStar(__webpack_require__(/*! ./editor-frontend-module */ "./node_modules/@theia/editor/lib/browser/editor-frontend-module.js"), exports);
__exportStar(__webpack_require__(/*! ./editor-preferences */ "./node_modules/@theia/editor/lib/browser/editor-preferences.js"), exports);
__exportStar(__webpack_require__(/*! ./decorations */ "./node_modules/@theia/editor/lib/browser/decorations/index.js"), exports);


/***/ })

}]);
//# sourceMappingURL=12.bundle.js.map