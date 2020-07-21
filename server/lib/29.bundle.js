(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/@theia/console/lib/browser/console-session.js":
/*!********************************************************************!*\
  !*** ./node_modules/@theia/console/lib/browser/console-session.js ***!
  \********************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleSession = exports.ConsoleItem = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var source_tree_1 = __webpack_require__(/*! @theia/core/lib/browser/source-tree */ "./node_modules/@theia/core/lib/browser/source-tree/index.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var ConsoleItem;
(function (ConsoleItem) {
    ConsoleItem.errorClassName = 'theia-console-error';
    ConsoleItem.warningClassName = 'theia-console-warning';
    ConsoleItem.infoClassName = 'theia-console-info';
    ConsoleItem.logClassName = 'theia-console-log';
})(ConsoleItem = exports.ConsoleItem || (exports.ConsoleItem = {}));
var ConsoleSession = /** @class */ (function (_super) {
    __extends(ConsoleSession, _super);
    function ConsoleSession() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectionEmitter = new event_1.Emitter();
        _this.onSelectionChange = _this.selectionEmitter.event;
        return _this;
    }
    Object.defineProperty(ConsoleSession.prototype, "severity", {
        get: function () {
            return this.selectedSeverity;
        },
        set: function (severity) {
            if (severity === this.selectedSeverity) {
                return;
            }
            this.selectedSeverity = severity;
            this.selectionEmitter.fire(undefined);
            this.fireDidChange();
        },
        enumerable: false,
        configurable: true
    });
    ConsoleSession = __decorate([
        inversify_1.injectable()
    ], ConsoleSession);
    return ConsoleSession;
}(source_tree_1.TreeSource));
exports.ConsoleSession = ConsoleSession;


/***/ }),

/***/ "./node_modules/@theia/core/lib/browser/source-tree/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@theia/core/lib/browser/source-tree/index.js ***!
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
__exportStar(__webpack_require__(/*! ./tree-source */ "./node_modules/@theia/core/lib/browser/source-tree/tree-source.js"), exports);
__exportStar(__webpack_require__(/*! ./source-tree */ "./node_modules/@theia/core/lib/browser/source-tree/source-tree.js"), exports);
__exportStar(__webpack_require__(/*! ./source-tree-widget */ "./node_modules/@theia/core/lib/browser/source-tree/source-tree-widget.js"), exports);


/***/ }),

/***/ "./node_modules/@theia/core/lib/browser/source-tree/source-tree-widget.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@theia/core/lib/browser/source-tree/source-tree-widget.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceTreeWidget = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var disposable_1 = __webpack_require__(/*! ../../common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var tree_1 = __webpack_require__(/*! ../tree */ "./node_modules/@theia/core/lib/browser/tree/index.js");
var source_tree_1 = __webpack_require__(/*! ./source-tree */ "./node_modules/@theia/core/lib/browser/source-tree/source-tree.js");
var SourceTreeWidget = /** @class */ (function (_super) {
    __extends(SourceTreeWidget, _super);
    function SourceTreeWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toDisposeOnSource = new disposable_1.DisposableCollection();
        return _this;
    }
    SourceTreeWidget_1 = SourceTreeWidget;
    SourceTreeWidget.createContainer = function (parent, props) {
        var child = tree_1.createTreeContainer(parent, props);
        child.unbind(tree_1.TreeImpl);
        child.bind(source_tree_1.SourceTree).toSelf();
        child.rebind(tree_1.Tree).toService(source_tree_1.SourceTree);
        child.unbind(tree_1.TreeWidget);
        child.bind(SourceTreeWidget_1).toSelf();
        return child;
    };
    SourceTreeWidget.prototype.init = function () {
        _super.prototype.init.call(this);
        this.addClass('theia-source-tree');
        this.toDispose.push(this.model.onOpenNode(function (node) {
            if (source_tree_1.TreeElementNode.is(node) && node.element.open) {
                node.element.open();
            }
        }));
    };
    Object.defineProperty(SourceTreeWidget.prototype, "source", {
        get: function () {
            var root = this.model.root;
            return source_tree_1.TreeSourceNode.is(root) ? root.source : undefined;
        },
        set: function (source) {
            var _this = this;
            if (this.source === source) {
                return;
            }
            this.toDisposeOnSource.dispose();
            this.toDispose.push(this.toDisposeOnSource);
            this.model.root = source_tree_1.TreeSourceNode.to(source);
            if (source) {
                this.toDisposeOnSource.push(source.onDidChange(function () { return _this.model.refresh(); }));
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SourceTreeWidget.prototype, "selectedElement", {
        get: function () {
            var node = this.model.selectedNodes[0];
            return source_tree_1.TreeElementNode.is(node) && node.element || undefined;
        },
        enumerable: false,
        configurable: true
    });
    SourceTreeWidget.prototype.renderTree = function (model) {
        if (source_tree_1.TreeSourceNode.is(model.root) && model.root.children.length === 0) {
            var placeholder = model.root.source.placeholder;
            if (placeholder) {
                return React.createElement("div", { className: 'theia-tree-source-node-placeholder noselect' }, placeholder);
            }
        }
        return _super.prototype.renderTree.call(this, model);
    };
    SourceTreeWidget.prototype.renderCaption = function (node) {
        if (source_tree_1.TreeElementNode.is(node)) {
            var classNames = this.createTreeElementNodeClassNames(node);
            return React.createElement("div", { className: classNames.join(' ') }, node.element.render());
        }
        return undefined;
    };
    SourceTreeWidget.prototype.createTreeElementNodeClassNames = function (node) {
        return ['theia-tree-element-node'];
    };
    SourceTreeWidget.prototype.storeState = function () {
        // no-op
        return {};
    };
    SourceTreeWidget.prototype.superStoreState = function () {
        return _super.prototype.storeState.call(this);
    };
    SourceTreeWidget.prototype.restoreState = function (state) {
        // no-op
    };
    SourceTreeWidget.prototype.superRestoreState = function (state) {
        _super.prototype.restoreState.call(this, state);
        return;
    };
    var SourceTreeWidget_1;
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SourceTreeWidget.prototype, "init", null);
    SourceTreeWidget = SourceTreeWidget_1 = __decorate([
        inversify_1.injectable()
    ], SourceTreeWidget);
    return SourceTreeWidget;
}(tree_1.TreeWidget));
exports.SourceTreeWidget = SourceTreeWidget;


/***/ }),

/***/ "./node_modules/@theia/core/lib/browser/source-tree/source-tree.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@theia/core/lib/browser/source-tree/source-tree.js ***!
  \*************************************************************************/
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
exports.TreeSourceNode = exports.CompositeTreeElementNode = exports.TreeElementNode = exports.SourceTree = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var tree_1 = __webpack_require__(/*! ../tree */ "./node_modules/@theia/core/lib/browser/tree/index.js");
var tree_source_1 = __webpack_require__(/*! ./tree-source */ "./node_modules/@theia/core/lib/browser/source-tree/tree-source.js");
var SourceTree = /** @class */ (function (_super) {
    __extends(SourceTree, _super);
    function SourceTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SourceTree.prototype.resolveChildren = function (parent) {
        return __awaiter(this, void 0, void 0, function () {
            var elements, nodes, index, elements_1, elements_1_1, element;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.resolveElements(parent)];
                    case 1:
                        elements = _b.sent();
                        nodes = [];
                        index = 0;
                        try {
                            for (elements_1 = __values(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
                                element = elements_1_1.value;
                                if (element.visible !== false) {
                                    nodes.push(this.toNode(element, index++, parent));
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return)) _a.call(elements_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [2 /*return*/, nodes];
                }
            });
        });
    };
    SourceTree.prototype.resolveElements = function (parent) {
        if (TreeSourceNode.is(parent)) {
            return parent.source.getElements();
        }
        return parent.element.getElements();
    };
    SourceTree.prototype.toNode = function (element, index, parent) {
        var id = element.id ? String(element.id) : (parent.id + ':' + index);
        var name = id;
        var existing = this.getNode(id);
        var updated = existing && Object.assign(existing, { element: element, parent: parent });
        if (tree_source_1.CompositeTreeElement.hasElements(element)) {
            if (updated) {
                if (!tree_1.ExpandableTreeNode.is(updated)) {
                    Object.assign(updated, { expanded: false });
                }
                if (!tree_1.CompositeTreeNode.is(updated)) {
                    Object.assign(updated, { children: [] });
                }
                return updated;
            }
            return {
                element: element,
                parent: parent,
                id: id,
                name: name,
                selected: false,
                expanded: false,
                children: []
            };
        }
        if (CompositeTreeElementNode.is(updated)) {
            delete updated.expanded;
            delete updated.children;
        }
        if (updated) {
            if (tree_1.ExpandableTreeNode.is(updated)) {
                delete updated.expanded;
            }
            if (tree_1.CompositeTreeNode.is(updated)) {
                delete updated.children;
            }
            return updated;
        }
        return {
            element: element,
            parent: parent,
            id: id,
            name: name,
            selected: false
        };
    };
    SourceTree = __decorate([
        inversify_1.injectable()
    ], SourceTree);
    return SourceTree;
}(tree_1.TreeImpl));
exports.SourceTree = SourceTree;
var TreeElementNode;
(function (TreeElementNode) {
    function is(node) {
        return tree_1.SelectableTreeNode.is(node) && 'element' in node;
    }
    TreeElementNode.is = is;
})(TreeElementNode = exports.TreeElementNode || (exports.TreeElementNode = {}));
var CompositeTreeElementNode;
(function (CompositeTreeElementNode) {
    function is(node) {
        return TreeElementNode.is(node) && tree_1.CompositeTreeNode.is(node) && tree_1.ExpandableTreeNode.is(node) && !!node.visible;
    }
    CompositeTreeElementNode.is = is;
})(CompositeTreeElementNode = exports.CompositeTreeElementNode || (exports.CompositeTreeElementNode = {}));
var TreeSourceNode;
(function (TreeSourceNode) {
    function is(node) {
        return tree_1.CompositeTreeNode.is(node) && !node.visible && 'source' in node;
    }
    TreeSourceNode.is = is;
    function to(source) {
        if (!source) {
            return source;
        }
        var id = source.id || '__source__';
        return {
            id: id,
            name: id,
            visible: false,
            children: [],
            source: source,
            parent: undefined,
            selected: false
        };
    }
    TreeSourceNode.to = to;
})(TreeSourceNode = exports.TreeSourceNode || (exports.TreeSourceNode = {}));


/***/ }),

/***/ "./node_modules/@theia/core/lib/browser/source-tree/tree-source.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@theia/core/lib/browser/source-tree/tree-source.js ***!
  \*************************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeSource = exports.CompositeTreeElement = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! ../../common/event */ "./node_modules/@theia/core/lib/common/event.js");
var disposable_1 = __webpack_require__(/*! ../../common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var CompositeTreeElement;
(function (CompositeTreeElement) {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    function is(element) {
        return !!element && 'getElements' in element;
    }
    CompositeTreeElement.is = is;
    function hasElements(element) {
        return is(element) && element.hasElements !== false;
    }
    CompositeTreeElement.hasElements = hasElements;
})(CompositeTreeElement = exports.CompositeTreeElement || (exports.CompositeTreeElement = {}));
var TreeSource = /** @class */ (function () {
    function TreeSource(options) {
        if (options === void 0) { options = {}; }
        this.onDidChangeEmitter = new event_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.toDispose = new disposable_1.DisposableCollection(this.onDidChangeEmitter);
        this.id = options.id;
        this.placeholder = options.placeholder;
    }
    TreeSource.prototype.fireDidChange = function () {
        this.onDidChangeEmitter.fire(undefined);
    };
    TreeSource.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    TreeSource = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.unmanaged()),
        __metadata("design:paramtypes", [Object])
    ], TreeSource);
    return TreeSource;
}());
exports.TreeSource = TreeSource;


/***/ })

}]);
//# sourceMappingURL=29.bundle.js.map