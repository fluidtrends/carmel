(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/@theia/callhierarchy/lib/browser/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@theia/callhierarchy/lib/browser/index.js ***!
  \****************************************************************/
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
__exportStar(__webpack_require__(/*! ./callhierarchy */ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy.js"), exports);
__exportStar(__webpack_require__(/*! ./callhierarchy-contribution */ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-contribution.js"), exports);
__exportStar(__webpack_require__(/*! ./callhierarchy-frontend-module */ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-frontend-module.js"), exports);
__exportStar(__webpack_require__(/*! ./callhierarchy-service */ "./node_modules/@theia/callhierarchy/lib/browser/callhierarchy-service.js"), exports);


/***/ }),

/***/ "./node_modules/@theia/file-search/lib/common/file-search-service.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@theia/file-search/lib/common/file-search-service.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSearchService = exports.fileSearchServicePath = void 0;
exports.fileSearchServicePath = '/services/search';
exports.FileSearchService = Symbol('FileSearchService');


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/textmate/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/textmate/index.js ***!
  \******************************************************************/
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
__exportStar(__webpack_require__(/*! ./textmate-registry */ "./node_modules/@theia/monaco/lib/browser/textmate/textmate-registry.js"), exports);
__exportStar(__webpack_require__(/*! ./textmate-contribution */ "./node_modules/@theia/monaco/lib/browser/textmate/textmate-contribution.js"), exports);
__exportStar(__webpack_require__(/*! ./monaco-textmate-service */ "./node_modules/@theia/monaco/lib/browser/textmate/monaco-textmate-service.js"), exports);
__exportStar(__webpack_require__(/*! ./monaco-textmate-frontend-bindings */ "./node_modules/@theia/monaco/lib/browser/textmate/monaco-textmate-frontend-bindings.js"), exports);


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/common/connection.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/common/connection.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginWebSocketChannel = exports.PluginConnection = void 0;
/**
 * The container for message reader and writer which can be used to create connection between plugins and main side.
 */
var PluginConnection = /** @class */ (function () {
    function PluginConnection(reader, writer, dispose) {
        this.reader = reader;
        this.writer = writer;
        this.dispose = dispose;
    }
    PluginConnection.prototype.forward = function (to, map) {
        if (map === void 0) { map = function (message) { return message; }; }
        this.reader.listen(function (input) {
            var output = map(input);
            to.writer.write(output);
        });
    };
    return PluginConnection;
}());
exports.PluginConnection = PluginConnection;
/**
 * [IWebSocket](#IWebSocket) implementation over RPC.
 */
var PluginWebSocketChannel = /** @class */ (function () {
    function PluginWebSocketChannel(connection) {
        this.connection = connection;
    }
    PluginWebSocketChannel.prototype.send = function (content) {
        this.connection.writer.write(content);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    PluginWebSocketChannel.prototype.onMessage = function (cb) {
        this.connection.reader.listen(cb);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    PluginWebSocketChannel.prototype.onError = function (cb) {
        this.connection.reader.onError(function (e) { return cb(e); });
    };
    PluginWebSocketChannel.prototype.onClose = function (cb) {
        this.connection.reader.onClose(function () { return cb(-1, 'closed'); });
    };
    PluginWebSocketChannel.prototype.dispose = function () {
        this.connection.dispose();
    };
    return PluginWebSocketChannel;
}());
exports.PluginWebSocketChannel = PluginWebSocketChannel;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/common/editor-options.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/common/editor-options.js ***!
  \*********************************************************************/
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
exports.cursorStyleToString = exports.TextEditorCursorStyle = void 0;
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// enum copied from monaco.d.ts
/**
 * The style in which the editor's cursor should be rendered.
 */
var TextEditorCursorStyle;
(function (TextEditorCursorStyle) {
    /**
     * As a vertical line
     */
    TextEditorCursorStyle[TextEditorCursorStyle["Line"] = 1] = "Line";
    /**
     * As a block
     */
    TextEditorCursorStyle[TextEditorCursorStyle["Block"] = 2] = "Block";
    /**
     * As a horizontal line, under character
     */
    TextEditorCursorStyle[TextEditorCursorStyle["Underline"] = 3] = "Underline";
    /**
     * As a thin vertical line
     */
    TextEditorCursorStyle[TextEditorCursorStyle["LineThin"] = 4] = "LineThin";
    /**
     * As an outlined block, on top of a character
     */
    TextEditorCursorStyle[TextEditorCursorStyle["BlockOutline"] = 5] = "BlockOutline";
    /**
     * As a thin horizontal line, under a character
     */
    TextEditorCursorStyle[TextEditorCursorStyle["UnderlineThin"] = 6] = "UnderlineThin";
})(TextEditorCursorStyle = exports.TextEditorCursorStyle || (exports.TextEditorCursorStyle = {}));
function cursorStyleToString(cursorStyle) {
    switch (cursorStyle) {
        case TextEditorCursorStyle.Line:
            return 'line';
        case TextEditorCursorStyle.Block:
            return 'block';
        case TextEditorCursorStyle.Underline:
            return 'underline';
        case TextEditorCursorStyle.LineThin:
            return 'line-thin';
        case TextEditorCursorStyle.BlockOutline:
            return 'block-outline';
        case TextEditorCursorStyle.UnderlineThin:
            return 'underline-thin';
        default:
            throw new Error('cursorStyleToString: Unknown cursorStyle');
    }
}
exports.cursorStyleToString = cursorStyleToString;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/common/object-identifier.js":
/*!************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/common/object-identifier.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectIdentifier = void 0;
var ObjectIdentifier;
(function (ObjectIdentifier) {
    ObjectIdentifier.name = '$ident';
    function mixin(obj, id) {
        Object.defineProperty(obj, ObjectIdentifier.name, { value: id, enumerable: true });
        return obj;
    }
    ObjectIdentifier.mixin = mixin;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function of(obj) {
        return obj[ObjectIdentifier.name];
    }
    ObjectIdentifier.of = of;
})(ObjectIdentifier = exports.ObjectIdentifier || (exports.ObjectIdentifier = {}));


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/common/plugin-message-reader.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/common/plugin-message-reader.js ***!
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
exports.PluginMessageReader = void 0;
var types_1 = __webpack_require__(/*! ./types */ "./node_modules/@theia/plugin-ext/lib/common/types.js");
var messageReader_1 = __webpack_require__(/*! vscode-jsonrpc/lib/messageReader */ "./node_modules/vscode-jsonrpc/lib/messageReader.js");
/**
 * Support for reading string message through RPC protocol.
 */
var PluginMessageReader = /** @class */ (function (_super) {
    __extends(PluginMessageReader, _super);
    function PluginMessageReader() {
        var _this = _super.call(this) || this;
        _this.state = 'initial';
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _this.events = [];
        return _this;
    }
    PluginMessageReader.prototype.listen = function (callback) {
        if (this.state === 'initial') {
            this.state = 'listening';
            this.callback = callback;
            while (this.events.length !== 0) {
                var event_1 = this.events.pop();
                if (event_1.message) {
                    this.readMessage(event_1.message);
                }
                else if (event_1.error) {
                    this.fireError(event_1.error);
                }
                else {
                    this.fireClose();
                }
            }
        }
    };
    PluginMessageReader.prototype.readMessage = function (message) {
        if (this.state === 'initial') {
            this.events.splice(0, 0, { message: message });
        }
        else if (this.state === 'listening') {
            var data = JSON.parse(message);
            this.callback(data);
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    PluginMessageReader.prototype.fireError = function (error) {
        if (this.state === 'initial') {
            this.events.splice(0, 0, { error: error });
        }
        else if (this.state === 'listening') {
            _super.prototype.fireError.call(this, error);
        }
    };
    PluginMessageReader.prototype.fireClose = function () {
        if (this.state === 'initial') {
            this.events.splice(0, 0, {});
        }
        else if (this.state === 'listening') {
            _super.prototype.fireClose.call(this);
        }
        this.state = 'closed';
    };
    return PluginMessageReader;
}(types_1.es5ClassCompat(messageReader_1.AbstractMessageReader)));
exports.PluginMessageReader = PluginMessageReader;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/common/plugin-message-writer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/common/plugin-message-writer.js ***!
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
exports.PluginMessageWriter = void 0;
var types_1 = __webpack_require__(/*! ./types */ "./node_modules/@theia/plugin-ext/lib/common/types.js");
var messageWriter_1 = __webpack_require__(/*! vscode-jsonrpc/lib/messageWriter */ "./node_modules/vscode-jsonrpc/lib/messageWriter.js");
/**
 * Support for writing string message through RPC protocol.
 */
var PluginMessageWriter = /** @class */ (function (_super) {
    __extends(PluginMessageWriter, _super);
    function PluginMessageWriter(id, proxy) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.proxy = proxy;
        return _this;
    }
    PluginMessageWriter.prototype.write = function (arg) {
        var content = JSON.stringify(arg);
        this.proxy.$sendMessage(this.id, content);
    };
    return PluginMessageWriter;
}(types_1.es5ClassCompat(messageWriter_1.AbstractMessageWriter)));
exports.PluginMessageWriter = PluginMessageWriter;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/common/types.js":
/*!************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/common/types.js ***!
  \************************************************************/
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
// copied from https://github.com/microsoft/vscode/blob/1.37.0/src/vs/base/common/types.ts
/*---------------------------------------------------------------------------------------------
*  Copyright (c) Microsoft Corporation. All rights reserved.
*  Licensed under the MIT License. See License.txt in the project root for license information.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUndefinedOrNull = exports.isUndefined = exports.isArray = exports.es5ClassCompat = exports.LogType = exports.mixin = exports.isObject = void 0;
/**
 * Returns `true` if the parameter has type "object" and not null, an array, a regexp, a date.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isObject(obj) {
    return typeof obj === 'object'
        && obj !== null // eslint-disable-line @typescript-eslint/no-explicit-any
        && !Array.isArray(obj)
        && !(obj instanceof RegExp)
        && !(obj instanceof Date);
}
exports.isObject = isObject;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mixin(destination, source, overwrite) {
    if (overwrite === void 0) { overwrite = true; }
    if (!isObject(destination)) {
        return source;
    }
    if (isObject(source)) {
        Object.keys(source).forEach(function (key) {
            if (key in destination) {
                if (overwrite) {
                    if (isObject(destination[key]) && isObject(source[key])) {
                        mixin(destination[key], source[key], overwrite);
                    }
                    else {
                        destination[key] = source[key];
                    }
                }
            }
            else {
                destination[key] = source[key];
            }
        });
    }
    return destination;
}
exports.mixin = mixin;
var LogType;
(function (LogType) {
    LogType[LogType["Info"] = 0] = "Info";
    LogType[LogType["Error"] = 1] = "Error";
})(LogType = exports.LogType || (exports.LogType = {}));
/* eslint-disable @typescript-eslint/no-explicit-any */
/** copied from https://github.com/TypeFox/vscode/blob/70b8db24a37fafc77247de7f7cb5bb0195120ed0/src/vs/workbench/api/common/extHostTypes.ts#L18-L27 */
function es5ClassCompat(target) {
    // @ts-ignore
    function _() { return Reflect.construct(target, arguments, this.constructor); }
    Object.defineProperty(_, 'name', Object.getOwnPropertyDescriptor(target, 'name'));
    Object.setPrototypeOf(_, target);
    Object.setPrototypeOf(_.prototype, target.prototype);
    return _;
}
exports.es5ClassCompat = es5ClassCompat;
/* eslint-enable @typescript-eslint/no-explicit-any */
var _typeof = {
    number: 'number',
    string: 'string',
    undefined: 'undefined',
    object: 'object',
    function: 'function'
};
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @returns whether the provided parameter is a JavaScript Array or not.
 */
function isArray(array) {
    if (Array.isArray) {
        return Array.isArray(array);
    }
    if (array && typeof (array.length) === _typeof.number && array.constructor === Array) {
        return true;
    }
    return false;
}
exports.isArray = isArray;
/**
 * @returns whether the provided parameter is undefined.
 */
function isUndefined(obj) {
    return typeof (obj) === _typeof.undefined;
}
exports.isUndefined = isUndefined;
/**
 * @returns whether the provided parameter is undefined or null.
 */
function isUndefinedOrNull(obj) {
    return isUndefined(obj) || obj === null; // eslint-disable-line no-null/no-null
}
exports.isUndefinedOrNull = isUndefinedOrNull;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/hosted/browser/hosted-plugin-watcher.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/hosted/browser/hosted-plugin-watcher.js ***!
  \************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostedPluginWatcher = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var HostedPluginWatcher = /** @class */ (function () {
    function HostedPluginWatcher() {
        this.onPostMessage = new event_1.Emitter();
        this.onLogMessage = new event_1.Emitter();
        this.onDidDeployEmitter = new event_1.Emitter();
        this.onDidDeploy = this.onDidDeployEmitter.event;
    }
    HostedPluginWatcher.prototype.getHostedPluginClient = function () {
        var _this = this;
        var messageEmitter = this.onPostMessage;
        var logEmitter = this.onLogMessage;
        return {
            postMessage: function (message) {
                messageEmitter.fire(JSON.parse(message));
                return Promise.resolve();
            },
            log: function (logPart) {
                logEmitter.fire(logPart);
                return Promise.resolve();
            },
            onDidDeploy: function () { return _this.onDidDeployEmitter.fire(undefined); }
        };
    };
    Object.defineProperty(HostedPluginWatcher.prototype, "onPostMessageEvent", {
        get: function () {
            return this.onPostMessage.event;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HostedPluginWatcher.prototype, "onLogMessageEvent", {
        get: function () {
            return this.onLogMessage.event;
        },
        enumerable: false,
        configurable: true
    });
    HostedPluginWatcher = __decorate([
        inversify_1.injectable()
    ], HostedPluginWatcher);
    return HostedPluginWatcher;
}());
exports.HostedPluginWatcher = HostedPluginWatcher;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/hosted/browser/hosted-plugin.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/hosted/browser/hosted-plugin.js ***!
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
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// some code copied and modified from https://github.com/microsoft/vscode/blob/da5fb7d5b865aa522abc7e82c10b746834b98639/src/vs/workbench/api/node/extHostExtensionService.ts
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
exports.PluginContributions = exports.HostedPluginSupport = exports.PluginProgressLocation = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var debounce = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
var coreutils_1 = __webpack_require__(/*! @phosphor/coreutils */ "./node_modules/@phosphor/coreutils/lib/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var plugin_worker_1 = __webpack_require__(/*! ../../main/browser/plugin-worker */ "./node_modules/@theia/plugin-ext/lib/main/browser/plugin-worker.js");
var plugin_protocol_1 = __webpack_require__(/*! ../../common/plugin-protocol */ "./node_modules/@theia/plugin-ext/lib/common/plugin-protocol.js");
var hosted_plugin_watcher_1 = __webpack_require__(/*! ./hosted-plugin-watcher */ "./node_modules/@theia/plugin-ext/lib/hosted/browser/hosted-plugin-watcher.js");
var plugin_api_rpc_1 = __webpack_require__(/*! ../../common/plugin-api-rpc */ "./node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js");
var main_context_1 = __webpack_require__(/*! ../../main/browser/main-context */ "./node_modules/@theia/plugin-ext/lib/main/browser/main-context.js");
var rpc_protocol_1 = __webpack_require__(/*! ../../common/rpc-protocol */ "./node_modules/@theia/plugin-ext/lib/common/rpc-protocol.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var preferences_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences */ "./node_modules/@theia/core/lib/browser/preferences/index.js");
var browser_1 = __webpack_require__(/*! @theia/workspace/lib/browser */ "./node_modules/@theia/workspace/lib/browser/index.js");
var plugin_contribution_handler_1 = __webpack_require__(/*! ../../main/browser/plugin-contribution-handler */ "./node_modules/@theia/plugin-ext/lib/main/browser/plugin-contribution-handler.js");
var env_main_1 = __webpack_require__(/*! ../../main/browser/env-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/env-main.js");
var plugin_ext_api_contribution_1 = __webpack_require__(/*! ../../common/plugin-ext-api-contribution */ "./node_modules/@theia/plugin-ext/lib/common/plugin-ext-api-contribution.js");
var plugin_paths_protocol_1 = __webpack_require__(/*! ../../main/common/plugin-paths-protocol */ "./node_modules/@theia/plugin-ext/lib/main/common/plugin-paths-protocol.js");
var preference_registry_main_1 = __webpack_require__(/*! ../../main/browser/preference-registry-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/preference-registry-main.js");
var plugin_protocol_2 = __webpack_require__(/*! ../../common/plugin-protocol */ "./node_modules/@theia/plugin-ext/lib/common/plugin-protocol.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "./node_modules/@theia/core/lib/common/promise-util.js");
var debug_session_manager_1 = __webpack_require__(/*! @theia/debug/lib/browser/debug-session-manager */ "./node_modules/@theia/debug/lib/browser/debug-session-manager.js");
var debug_configuration_manager_1 = __webpack_require__(/*! @theia/debug/lib/browser/debug-configuration-manager */ "./node_modules/@theia/debug/lib/browser/debug-configuration-manager.js");
var common_1 = __webpack_require__(/*! @theia/filesystem/lib/common */ "./node_modules/@theia/filesystem/lib/common/index.js");
var file_search_service_1 = __webpack_require__(/*! @theia/file-search/lib/common/file-search-service */ "./node_modules/@theia/file-search/lib/common/file-search-service.js");
var core_2 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var frontend_application_state_1 = __webpack_require__(/*! @theia/core/lib/browser/frontend-application-state */ "./node_modules/@theia/core/lib/browser/frontend-application-state.js");
var plugin_view_registry_1 = __webpack_require__(/*! ../../main/browser/view/plugin-view-registry */ "./node_modules/@theia/plugin-ext/lib/main/browser/view/plugin-view-registry.js");
var task_contribution_1 = __webpack_require__(/*! @theia/task/lib/browser/task-contribution */ "./node_modules/@theia/task/lib/browser/task-contribution.js");
var webview_environment_1 = __webpack_require__(/*! ../../main/browser/webview/webview-environment */ "./node_modules/@theia/plugin-ext/lib/main/browser/webview/webview-environment.js");
var webview_1 = __webpack_require__(/*! ../../main/browser/webview/webview */ "./node_modules/@theia/plugin-ext/lib/main/browser/webview/webview.js");
var widget_manager_1 = __webpack_require__(/*! @theia/core/lib/browser/widget-manager */ "./node_modules/@theia/core/lib/browser/widget-manager.js");
var terminal_service_1 = __webpack_require__(/*! @theia/terminal/lib/browser/base/terminal-service */ "./node_modules/@theia/terminal/lib/browser/base/terminal-service.js");
var env_variables_1 = __webpack_require__(/*! @theia/core/lib/common/env-variables */ "./node_modules/@theia/core/lib/common/env-variables/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var frontend_application_config_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/frontend-application-config-provider */ "./node_modules/@theia/core/lib/browser/frontend-application-config-provider.js");
var environment_1 = __webpack_require__(/*! @theia/application-package/lib/environment */ "./node_modules/@theia/application-package/lib/environment.js");
var json_schema_store_1 = __webpack_require__(/*! @theia/core/lib/browser/json-schema-store */ "./node_modules/@theia/core/lib/browser/json-schema-store.js");
exports.PluginProgressLocation = 'plugin';
var HostedPluginSupport = /** @class */ (function () {
    function HostedPluginSupport() {
        var _this = this;
        this.clientId = coreutils_1.UUID.uuid4();
        this.managers = new Map();
        this.contributions = new Map();
        this.activationEvents = new Set();
        this.onDidChangePluginsEmitter = new core_2.Emitter();
        this.onDidChangePlugins = this.onDidChangePluginsEmitter.event;
        this.deferredWillStart = new promise_util_1.Deferred();
        this.deferredDidStart = new promise_util_1.Deferred();
        this.loadQueue = Promise.resolve(undefined);
        this.load = debounce(function () { return _this.loadQueue = _this.loadQueue.then(function () { return __awaiter(_this, void 0, void 0, function () {
            var e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.progressService.withProgress('', exports.PluginProgressLocation, function () { return _this.doLoad(); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error('Failed to load plugins:', e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); }); }, 50, { leading: true });
        this.webviewsToRestore = new Set();
        this.webviewRevivers = new Map();
    }
    Object.defineProperty(HostedPluginSupport.prototype, "willStart", {
        /**
         * Resolves when the initial plugins are loaded and about to be started.
         */
        get: function () {
            return this.deferredWillStart.promise;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HostedPluginSupport.prototype, "didStart", {
        /**
         * Resolves when the initial plugins are started.
         */
        get: function () {
            return this.deferredDidStart.promise;
        },
        enumerable: false,
        configurable: true
    });
    HostedPluginSupport.prototype.init = function () {
        var e_2, _a;
        var _this = this;
        this.theiaReadyPromise = Promise.all([this.preferenceServiceImpl.ready, this.workspaceService.roots]);
        this.workspaceService.onWorkspaceChanged(function () { return _this.updateStoragePath(); });
        var modeService = monaco.services.StaticServices.modeService.get();
        try {
            for (var _b = __values(Object.keys(modeService['_instantiatedModes'])), _c = _b.next(); !_c.done; _c = _b.next()) {
                var modeId = _c.value;
                var mode = modeService['_instantiatedModes'][modeId];
                this.activateByLanguage(mode.getId());
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        modeService.onDidCreateMode(function (mode) { return _this.activateByLanguage(mode.getId()); });
        this.commands.onWillExecuteCommand(function (event) { return _this.ensureCommandHandlerRegistration(event); });
        this.debugSessionManager.onWillStartDebugSession(function (event) { return _this.ensureDebugActivation(event); });
        this.debugSessionManager.onWillResolveDebugConfiguration(function (event) { return _this.ensureDebugActivation(event, 'onDebugResolve', event.debugType); });
        this.debugConfigurationManager.onWillProvideDebugConfiguration(function (event) { return _this.ensureDebugActivation(event, 'onDebugInitialConfigurations'); });
        this.viewRegistry.onDidExpandView(function (id) { return _this.activateByView(id); });
        this.taskProviderRegistry.onWillProvideTaskProvider(function (event) { return _this.ensureTaskActivation(event); });
        this.taskResolverRegistry.onWillProvideTaskResolver(function (event) { return _this.ensureTaskActivation(event); });
        this.widgets.onDidCreateWidget(function (_a) {
            var factoryId = _a.factoryId, widget = _a.widget;
            if (factoryId === webview_1.WebviewWidget.FACTORY_ID && widget instanceof webview_1.WebviewWidget) {
                var storeState_1 = widget.storeState.bind(widget);
                var restoreState_1 = widget.restoreState.bind(widget);
                widget.storeState = function () {
                    if (_this.webviewRevivers.has(widget.viewType)) {
                        return storeState_1();
                    }
                    return {};
                };
                widget.restoreState = function (oldState) {
                    if (oldState.viewType) {
                        restoreState_1(oldState);
                        _this.preserveWebview(widget);
                    }
                    else {
                        widget.dispose();
                    }
                };
            }
        });
    };
    Object.defineProperty(HostedPluginSupport.prototype, "plugins", {
        get: function () {
            var plugins = [];
            this.contributions.forEach(function (contributions) { return plugins.push(contributions.plugin.metadata); });
            return plugins;
        },
        enumerable: false,
        configurable: true
    });
    HostedPluginSupport.prototype.getPlugin = function (id) {
        var contributions = this.contributions.get(id);
        return contributions && contributions.plugin;
    };
    /** do not call it, except from the plugin frontend contribution */
    HostedPluginSupport.prototype.onStart = function (container) {
        var _this = this;
        this.container = container;
        this.load();
        this.watcher.onDidDeploy(function () { return _this.load(); });
        this.server.onDidOpenConnection(function () { return _this.load(); });
    };
    HostedPluginSupport.prototype.doLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toDisconnect, contributionsByHost;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        toDisconnect = new core_1.DisposableCollection(core_1.Disposable.create(function () { }));
                        toDisconnect.push(core_1.Disposable.create(function () { return _this.preserveWebviews(); }));
                        this.server.onDidCloseConnection(function () { return toDisconnect.dispose(); });
                        // process empty plugins as well in order to properly remove stale plugin widgets
                        return [4 /*yield*/, this.syncPlugins()];
                    case 1:
                        // process empty plugins as well in order to properly remove stale plugin widgets
                        _a.sent();
                        // it has to be resolved before awaiting layout is initialized
                        // otherwise clients can hang forever in the initialization phase
                        this.deferredWillStart.resolve();
                        // make sure that the previous state, including plugin widgets, is restored
                        // and core layout is initialized, i.e. explorer, scm, debug views are already added to the shell
                        // but shell is not yet revealed
                        return [4 /*yield*/, this.appState.reachedState('initialized_layout')];
                    case 2:
                        // make sure that the previous state, including plugin widgets, is restored
                        // and core layout is initialized, i.e. explorer, scm, debug views are already added to the shell
                        // but shell is not yet revealed
                        _a.sent();
                        if (toDisconnect.disposed) {
                            // if disconnected then don't try to load plugin contributions
                            return [2 /*return*/];
                        }
                        contributionsByHost = this.loadContributions(toDisconnect);
                        return [4 /*yield*/, this.viewRegistry.initWidgets()];
                    case 3:
                        _a.sent();
                        // remove restored plugin widgets which were not registered by contributions
                        this.viewRegistry.removeStaleWidgets();
                        return [4 /*yield*/, this.theiaReadyPromise];
                    case 4:
                        _a.sent();
                        if (toDisconnect.disposed) {
                            // if disconnected then don't try to init plugin code and dynamic contributions
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.startPlugins(contributionsByHost, toDisconnect)];
                    case 5:
                        _a.sent();
                        this.deferredDidStart.resolve();
                        this.restoreWebviews();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Sync loaded and deployed plugins:
     * - undeployed plugins are unloaded
     * - newly deployed plugins are initialized
     */
    HostedPluginSupport.prototype.syncPlugins = function () {
        return __awaiter(this, void 0, void 0, function () {
            var initialized, syncPluginsMeasurement, toUnload, pluginIds, deployedPluginIds, deployedPluginIds_1, deployedPluginIds_1_1, pluginId, toUnload_1, toUnload_1_1, pluginId, contribution, plugins, _loop_1, this_1, plugins_1, plugins_1_1, plugin;
            var e_3, _a, e_4, _b, e_5, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        initialized = 0;
                        syncPluginsMeasurement = this.createMeasurement('syncPlugins');
                        toUnload = new Set(this.contributions.keys());
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, , 5, 6]);
                        pluginIds = [];
                        return [4 /*yield*/, this.server.getDeployedPluginIds()];
                    case 2:
                        deployedPluginIds = _d.sent();
                        try {
                            for (deployedPluginIds_1 = __values(deployedPluginIds), deployedPluginIds_1_1 = deployedPluginIds_1.next(); !deployedPluginIds_1_1.done; deployedPluginIds_1_1 = deployedPluginIds_1.next()) {
                                pluginId = deployedPluginIds_1_1.value;
                                toUnload.delete(pluginId);
                                if (!this.contributions.has(pluginId)) {
                                    pluginIds.push(pluginId);
                                }
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (deployedPluginIds_1_1 && !deployedPluginIds_1_1.done && (_a = deployedPluginIds_1.return)) _a.call(deployedPluginIds_1);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        try {
                            for (toUnload_1 = __values(toUnload), toUnload_1_1 = toUnload_1.next(); !toUnload_1_1.done; toUnload_1_1 = toUnload_1.next()) {
                                pluginId = toUnload_1_1.value;
                                contribution = this.contributions.get(pluginId);
                                if (contribution) {
                                    contribution.dispose();
                                }
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (toUnload_1_1 && !toUnload_1_1.done && (_b = toUnload_1.return)) _b.call(toUnload_1);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                        if (!pluginIds.length) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.server.getDeployedPlugins({ pluginIds: pluginIds })];
                    case 3:
                        plugins = _d.sent();
                        _loop_1 = function (plugin) {
                            var pluginId = plugin.metadata.model.id;
                            var contributions = new PluginContributions(plugin);
                            this_1.contributions.set(pluginId, contributions);
                            contributions.push(core_1.Disposable.create(function () { return _this.contributions.delete(pluginId); }));
                            initialized++;
                        };
                        this_1 = this;
                        try {
                            for (plugins_1 = __values(plugins), plugins_1_1 = plugins_1.next(); !plugins_1_1.done; plugins_1_1 = plugins_1.next()) {
                                plugin = plugins_1_1.value;
                                _loop_1(plugin);
                            }
                        }
                        catch (e_5_1) { e_5 = { error: e_5_1 }; }
                        finally {
                            try {
                                if (plugins_1_1 && !plugins_1_1.done && (_c = plugins_1.return)) _c.call(plugins_1);
                            }
                            finally { if (e_5) throw e_5.error; }
                        }
                        _d.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        if (initialized || toUnload.size) {
                            this.onDidChangePluginsEmitter.fire(undefined);
                        }
                        return [7 /*endfinally*/];
                    case 6:
                        this.logMeasurement('Sync', initialized, syncPluginsMeasurement);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Always synchronous in order to simplify handling disconnections.
     * @throws never
     */
    HostedPluginSupport.prototype.loadContributions = function (toDisconnect) {
        var e_6, _a;
        var _this = this;
        var loaded = 0;
        var loadPluginsMeasurement = this.createMeasurement('loadPlugins');
        var hostContributions = new Map();
        var _loop_2 = function (contributions) {
            var plugin = contributions.plugin.metadata;
            var pluginId = plugin.model.id;
            if (contributions.state === PluginContributions.State.INITIALIZING) {
                contributions.state = PluginContributions.State.LOADING;
                contributions.push(core_1.Disposable.create(function () { return console.log("[" + pluginId + "]: Unloaded plugin."); }));
                contributions.push(this_2.contributionHandler.handleContributions(this_2.clientId, contributions.plugin));
                contributions.state = PluginContributions.State.LOADED;
                console.log("[" + this_2.clientId + "][" + pluginId + "]: Loaded contributions.");
                loaded++;
            }
            if (contributions.state === PluginContributions.State.LOADED) {
                contributions.state = PluginContributions.State.STARTING;
                var host = plugin.model.entryPoint.frontend ? 'frontend' : plugin.host;
                var dynamicContributions = hostContributions.get(plugin.host) || [];
                dynamicContributions.push(contributions);
                hostContributions.set(host, dynamicContributions);
                toDisconnect.push(core_1.Disposable.create(function () {
                    contributions.state = PluginContributions.State.LOADED;
                    console.log("[" + _this.clientId + "][" + pluginId + "]: Disconnected.");
                }));
            }
        };
        var this_2 = this;
        try {
            for (var _b = __values(this.contributions.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contributions = _c.value;
                _loop_2(contributions);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        this.logMeasurement('Load contributions', loaded, loadPluginsMeasurement);
        return hostContributions;
    };
    HostedPluginSupport.prototype.startPlugins = function (contributionsByHost, toDisconnect) {
        return __awaiter(this, void 0, void 0, function () {
            var started, startPluginsMeasurement, _a, hostLogPath, hostStoragePath, hostGlobalStoragePath, thenable, configStorage, _loop_3, this_3, contributionsByHost_1, contributionsByHost_1_1, _b, host, hostContributions, state_1, e_7_1;
            var e_7, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        started = 0;
                        startPluginsMeasurement = this.createMeasurement('startPlugins');
                        return [4 /*yield*/, Promise.all([
                                this.pluginPathsService.getHostLogPath(),
                                this.getStoragePath(),
                                this.getHostGlobalStoragePath()
                            ])];
                    case 1:
                        _a = __read.apply(void 0, [_d.sent(), 3]), hostLogPath = _a[0], hostStoragePath = _a[1], hostGlobalStoragePath = _a[2];
                        if (toDisconnect.disposed) {
                            return [2 /*return*/];
                        }
                        thenable = [];
                        configStorage = {
                            hostLogPath: hostLogPath,
                            hostStoragePath: hostStoragePath,
                            hostGlobalStoragePath: hostGlobalStoragePath
                        };
                        _loop_3 = function (host, hostContributions) {
                            var manager, plugins;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this_3.obtainManager(host, hostContributions, toDisconnect)];
                                    case 1:
                                        manager = _a.sent();
                                        if (!manager) {
                                            return [2 /*return*/, { value: void 0 }];
                                        }
                                        plugins = hostContributions.map(function (contributions) { return contributions.plugin.metadata; });
                                        thenable.push((function () { return __awaiter(_this, void 0, void 0, function () {
                                            var activationEvents, _loop_4, this_4, hostContributions_1, hostContributions_1_1, contributions, e_8;
                                            var e_9, _a;
                                            var _this = this;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0:
                                                        _b.trys.push([0, 2, , 3]);
                                                        activationEvents = __spread(this.activationEvents);
                                                        return [4 /*yield*/, manager.$start({ plugins: plugins, configStorage: configStorage, activationEvents: activationEvents })];
                                                    case 1:
                                                        _b.sent();
                                                        if (toDisconnect.disposed) {
                                                            return [2 /*return*/];
                                                        }
                                                        _loop_4 = function (contributions) {
                                                            started++;
                                                            var plugin = contributions.plugin;
                                                            var id = plugin.metadata.model.id;
                                                            contributions.state = PluginContributions.State.STARTED;
                                                            console.log("[" + this_4.clientId + "][" + id + "]: Started plugin.");
                                                            toDisconnect.push(contributions.push(core_1.Disposable.create(function () {
                                                                console.log("[" + _this.clientId + "][" + id + "]: Stopped plugin.");
                                                                manager.$stop(id);
                                                            })));
                                                            this_4.activateByWorkspaceContains(manager, plugin);
                                                        };
                                                        this_4 = this;
                                                        try {
                                                            for (hostContributions_1 = __values(hostContributions), hostContributions_1_1 = hostContributions_1.next(); !hostContributions_1_1.done; hostContributions_1_1 = hostContributions_1.next()) {
                                                                contributions = hostContributions_1_1.value;
                                                                _loop_4(contributions);
                                                            }
                                                        }
                                                        catch (e_9_1) { e_9 = { error: e_9_1 }; }
                                                        finally {
                                                            try {
                                                                if (hostContributions_1_1 && !hostContributions_1_1.done && (_a = hostContributions_1.return)) _a.call(hostContributions_1);
                                                            }
                                                            finally { if (e_9) throw e_9.error; }
                                                        }
                                                        return [3 /*break*/, 3];
                                                    case 2:
                                                        e_8 = _b.sent();
                                                        console.error("Failed to start plugins for '" + host + "' host", e_8);
                                                        return [3 /*break*/, 3];
                                                    case 3: return [2 /*return*/];
                                                }
                                            });
                                        }); })());
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_3 = this;
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 7, 8, 9]);
                        contributionsByHost_1 = __values(contributionsByHost), contributionsByHost_1_1 = contributionsByHost_1.next();
                        _d.label = 3;
                    case 3:
                        if (!!contributionsByHost_1_1.done) return [3 /*break*/, 6];
                        _b = __read(contributionsByHost_1_1.value, 2), host = _b[0], hostContributions = _b[1];
                        return [5 /*yield**/, _loop_3(host, hostContributions)];
                    case 4:
                        state_1 = _d.sent();
                        if (typeof state_1 === "object")
                            return [2 /*return*/, state_1.value];
                        _d.label = 5;
                    case 5:
                        contributionsByHost_1_1 = contributionsByHost_1.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_7_1 = _d.sent();
                        e_7 = { error: e_7_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (contributionsByHost_1_1 && !contributionsByHost_1_1.done && (_c = contributionsByHost_1.return)) _c.call(contributionsByHost_1);
                        }
                        finally { if (e_7) throw e_7.error; }
                        return [7 /*endfinally*/];
                    case 9: return [4 /*yield*/, Promise.all(thenable)];
                    case 10:
                        _d.sent();
                        if (toDisconnect.disposed) {
                            return [2 /*return*/];
                        }
                        this.logMeasurement('Start', started, startPluginsMeasurement);
                        return [2 /*return*/];
                }
            });
        });
    };
    HostedPluginSupport.prototype.obtainManager = function (host, hostContributions, toDisconnect) {
        return __awaiter(this, void 0, void 0, function () {
            var manager, pluginId, rpc, _a, extApi, globalState, workspaceState, webviewResourceRoot, webviewCspSource, defaultShell, jsonValidation;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        manager = this.managers.get(host);
                        if (!!manager) return [3 /*break*/, 3];
                        pluginId = plugin_protocol_1.getPluginId(hostContributions[0].plugin.metadata.model);
                        rpc = this.initRpc(host, pluginId);
                        toDisconnect.push(rpc);
                        manager = rpc.getProxy(plugin_api_rpc_1.MAIN_RPC_CONTEXT.HOSTED_PLUGIN_MANAGER_EXT);
                        this.managers.set(host, manager);
                        toDisconnect.push(core_1.Disposable.create(function () { return _this.managers.delete(host); }));
                        return [4 /*yield*/, Promise.all([
                                this.server.getExtPluginAPI(),
                                this.pluginServer.getAllStorageValues(undefined),
                                this.pluginServer.getAllStorageValues({
                                    workspace: this.workspaceService.workspace,
                                    roots: this.workspaceService.tryGetRoots()
                                }),
                                this.webviewEnvironment.resourceRoot(),
                                this.webviewEnvironment.cspSource(),
                                this.terminalService.getDefaultShell(),
                                this.jsonSchemaStore.schemas
                            ])];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 7]), extApi = _a[0], globalState = _a[1], workspaceState = _a[2], webviewResourceRoot = _a[3], webviewCspSource = _a[4], defaultShell = _a[5], jsonValidation = _a[6];
                        if (toDisconnect.disposed) {
                            return [2 /*return*/, undefined];
                        }
                        return [4 /*yield*/, manager.$init({
                                preferences: preference_registry_main_1.getPreferences(this.preferenceProviderProvider, this.workspaceService.tryGetRoots()),
                                globalState: globalState,
                                workspaceState: workspaceState,
                                env: {
                                    queryParams: env_main_1.getQueryParameters(),
                                    language: navigator.language,
                                    shell: defaultShell,
                                    uiKind: environment_1.environment.electron.is() ? plugin_api_rpc_1.UIKind.Desktop : plugin_api_rpc_1.UIKind.Web,
                                    appName: frontend_application_config_provider_1.FrontendApplicationConfigProvider.get().applicationName
                                },
                                extApi: extApi,
                                webview: {
                                    webviewResourceRoot: webviewResourceRoot,
                                    webviewCspSource: webviewCspSource
                                },
                                jsonValidation: jsonValidation
                            })];
                    case 2:
                        _b.sent();
                        if (toDisconnect.disposed) {
                            return [2 /*return*/, undefined];
                        }
                        _b.label = 3;
                    case 3: return [2 /*return*/, manager];
                }
            });
        });
    };
    HostedPluginSupport.prototype.initRpc = function (host, pluginId) {
        var _this = this;
        var rpc = host === 'frontend' ? new plugin_worker_1.PluginWorker().rpc : this.createServerRpc(pluginId, host);
        main_context_1.setUpPluginApi(rpc, this.container);
        this.mainPluginApiProviders.getContributions().forEach(function (p) { return p.initialize(rpc, _this.container); });
        return rpc;
    };
    HostedPluginSupport.prototype.createServerRpc = function (pluginID, hostID) {
        var _this = this;
        return new rpc_protocol_1.RPCProtocolImpl({
            onMessage: this.watcher.onPostMessageEvent,
            send: function (message) {
                var wrappedMessage = {};
                wrappedMessage['pluginID'] = pluginID;
                wrappedMessage['content'] = message;
                _this.server.onMessage(JSON.stringify(wrappedMessage));
            }
        }, hostID);
    };
    HostedPluginSupport.prototype.updateStoragePath = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, _a, _b, manager;
            var e_10, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.getStoragePath()];
                    case 1:
                        path = _d.sent();
                        try {
                            for (_a = __values(this.managers.values()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                manager = _b.value;
                                manager.$updateStoragePath(path);
                            }
                        }
                        catch (e_10_1) { e_10 = { error: e_10_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_10) throw e_10.error; }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HostedPluginSupport.prototype.getStoragePath = function () {
        return __awaiter(this, void 0, void 0, function () {
            var roots;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.workspaceService.roots];
                    case 1:
                        roots = _a.sent();
                        return [2 /*return*/, this.pluginPathsService.getHostStoragePath(this.workspaceService.workspace, roots)];
                }
            });
        });
    };
    HostedPluginSupport.prototype.getHostGlobalStoragePath = function () {
        return __awaiter(this, void 0, void 0, function () {
            var configDirUri, globalStorageFolderUri, globalStorageFolderFsPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.envServer.getConfigDirUri()];
                    case 1:
                        configDirUri = _a.sent();
                        globalStorageFolderUri = new uri_1.default(configDirUri).resolve('globalStorage').toString();
                        return [4 /*yield*/, this.fileSystem.exists(globalStorageFolderUri)];
                    case 2:
                        if (!!(_a.sent())) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.fileSystem.createFolder(globalStorageFolderUri)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.fileSystem.getFsPath(globalStorageFolderUri)];
                    case 5:
                        globalStorageFolderFsPath = _a.sent();
                        if (!globalStorageFolderFsPath) {
                            throw new Error("Could not resolve the FS path for URI: " + globalStorageFolderUri);
                        }
                        return [2 /*return*/, globalStorageFolderFsPath];
                }
            });
        });
    };
    HostedPluginSupport.prototype.activateByEvent = function (activationEvent) {
        return __awaiter(this, void 0, void 0, function () {
            var activation, _a, _b, manager;
            var e_11, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (this.activationEvents.has(activationEvent)) {
                            return [2 /*return*/];
                        }
                        this.activationEvents.add(activationEvent);
                        activation = [];
                        try {
                            for (_a = __values(this.managers.values()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                manager = _b.value;
                                activation.push(manager.$activateByEvent(activationEvent));
                            }
                        }
                        catch (e_11_1) { e_11 = { error: e_11_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_11) throw e_11.error; }
                        }
                        return [4 /*yield*/, Promise.all(activation)];
                    case 1:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HostedPluginSupport.prototype.activateByView = function (viewId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.activateByEvent("onView:" + viewId)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HostedPluginSupport.prototype.activateByLanguage = function (languageId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.activateByEvent("onLanguage:" + languageId)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HostedPluginSupport.prototype.activateByCommand = function (commandId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.activateByEvent("onCommand:" + commandId)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HostedPluginSupport.prototype.ensureCommandHandlerRegistration = function (event) {
        var activation = this.activateByCommand(event.commandId);
        if (this.commands.getCommand(event.commandId) &&
            (!this.contributionHandler.hasCommand(event.commandId) ||
                this.contributionHandler.hasCommandHandler(event.commandId))) {
            return;
        }
        var waitForCommandHandler = new promise_util_1.Deferred();
        var listener = this.contributionHandler.onDidRegisterCommandHandler(function (id) {
            if (id === event.commandId) {
                listener.dispose();
                waitForCommandHandler.resolve();
            }
        });
        var p = Promise.all([
            activation,
            waitForCommandHandler.promise
        ]);
        p.then(function () { return listener.dispose(); }, function () { return listener.dispose(); });
        event.waitUntil(p);
    };
    HostedPluginSupport.prototype.ensureTaskActivation = function (event) {
        event.waitUntil(this.activateByCommand('workbench.action.tasks.runTask'));
    };
    HostedPluginSupport.prototype.ensureDebugActivation = function (event, activationEvent, debugType) {
        event.waitUntil(this.activateByDebug(activationEvent, debugType));
    };
    HostedPluginSupport.prototype.activateByDebug = function (activationEvent, debugType) {
        return __awaiter(this, void 0, void 0, function () {
            var promises;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promises = [this.activateByEvent('onDebug')];
                        if (activationEvent) {
                            promises.push(this.activateByEvent(activationEvent));
                            if (debugType) {
                                promises.push(this.activateByEvent(activationEvent + ':' + debugType));
                            }
                        }
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HostedPluginSupport.prototype.activateByWorkspaceContains = function (manager, plugin) {
        return __awaiter(this, void 0, void 0, function () {
            var activationEvents, paths, includePatterns, activationEvents_1, activationEvents_1_1, activationEvent, fileNameOrGlob, activatePlugin, promises, tokenSource_1, searchTimeout_1, _a;
            var e_12, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        activationEvents = plugin.contributes && plugin.contributes.activationEvents;
                        if (!activationEvents) {
                            return [2 /*return*/];
                        }
                        paths = [];
                        includePatterns = [];
                        try {
                            // should be aligned with https://github.com/microsoft/vscode/blob/da5fb7d5b865aa522abc7e82c10b746834b98639/src/vs/workbench/api/node/extHostExtensionService.ts#L460-L469
                            for (activationEvents_1 = __values(activationEvents), activationEvents_1_1 = activationEvents_1.next(); !activationEvents_1_1.done; activationEvents_1_1 = activationEvents_1.next()) {
                                activationEvent = activationEvents_1_1.value;
                                if (/^workspaceContains:/.test(activationEvent)) {
                                    fileNameOrGlob = activationEvent.substr('workspaceContains:'.length);
                                    if (fileNameOrGlob.indexOf('*') >= 0 || fileNameOrGlob.indexOf('?') >= 0) {
                                        includePatterns.push(fileNameOrGlob);
                                    }
                                    else {
                                        paths.push(fileNameOrGlob);
                                    }
                                }
                            }
                        }
                        catch (e_12_1) { e_12 = { error: e_12_1 }; }
                        finally {
                            try {
                                if (activationEvents_1_1 && !activationEvents_1_1.done && (_b = activationEvents_1.return)) _b.call(activationEvents_1);
                            }
                            finally { if (e_12) throw e_12.error; }
                        }
                        activatePlugin = function () { return manager.$activateByEvent("onPlugin:" + plugin.metadata.model.id); };
                        promises = [];
                        if (paths.length) {
                            promises.push(this.workspaceService.containsSome(paths));
                        }
                        if (includePatterns.length) {
                            tokenSource_1 = new core_1.CancellationTokenSource();
                            searchTimeout_1 = setTimeout(function () {
                                tokenSource_1.cancel();
                                // activate eagerly if took to long to search
                                activatePlugin();
                            }, 7000);
                            promises.push((function () { return __awaiter(_this, void 0, void 0, function () {
                                var result, e_13;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 2, 3, 4]);
                                            return [4 /*yield*/, this.fileSearchService.find('', {
                                                    rootUris: this.workspaceService.tryGetRoots().map(function (r) { return r.uri; }),
                                                    includePatterns: includePatterns,
                                                    limit: 1
                                                }, tokenSource_1.token)];
                                        case 1:
                                            result = _a.sent();
                                            return [2 /*return*/, result.length > 0];
                                        case 2:
                                            e_13 = _a.sent();
                                            if (!core_2.isCancelled(e_13)) {
                                                console.error(e_13);
                                            }
                                            return [2 /*return*/, false];
                                        case 3:
                                            clearTimeout(searchTimeout_1);
                                            return [7 /*endfinally*/];
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); })());
                        }
                        _a = promises.length;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.all(promises).then(function (exists) { return exists.some(function (v) { return v; }); })];
                    case 1:
                        _a = (_c.sent());
                        _c.label = 2;
                    case 2:
                        if (!_a) return [3 /*break*/, 4];
                        return [4 /*yield*/, activatePlugin()];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HostedPluginSupport.prototype.activatePlugin = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var activation, _a, _b, manager;
            var e_14, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        activation = [];
                        try {
                            for (_a = __values(this.managers.values()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                manager = _b.value;
                                activation.push(manager.$activatePlugin(id));
                            }
                        }
                        catch (e_14_1) { e_14 = { error: e_14_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_14) throw e_14.error; }
                        }
                        return [4 /*yield*/, Promise.all(activation)];
                    case 1:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HostedPluginSupport.prototype.createMeasurement = function (name) {
        var startMarker = name + "-start";
        var endMarker = name + "-end";
        performance.clearMeasures(name);
        performance.clearMarks(startMarker);
        performance.clearMarks(endMarker);
        performance.mark(startMarker);
        return function () {
            performance.mark(endMarker);
            performance.measure(name, startMarker, endMarker);
            var entries = performance.getEntriesByName(name);
            var duration = entries.length > 0 ? entries[0].duration : Number.NaN;
            performance.clearMeasures(name);
            performance.clearMarks(startMarker);
            performance.clearMarks(endMarker);
            return duration;
        };
    };
    HostedPluginSupport.prototype.logMeasurement = function (prefix, count, measurement) {
        var duration = measurement();
        if (duration === Number.NaN) {
            // Measurement was prevented by native API, do not log NaN duration
            return;
        }
        var pluginCount = count + " plugin" + (count === 1 ? '' : 's');
        console.log("[" + this.clientId + "] " + prefix + " of " + pluginCount + " took: " + duration.toFixed(1) + " ms");
    };
    HostedPluginSupport.prototype.registerWebviewReviver = function (viewType, reviver) {
        if (this.webviewRevivers.has(viewType)) {
            throw new Error("Reviver for " + viewType + " already registered");
        }
        this.webviewRevivers.set(viewType, reviver);
    };
    HostedPluginSupport.prototype.unregisterWebviewReviver = function (viewType) {
        this.webviewRevivers.delete(viewType);
    };
    HostedPluginSupport.prototype.preserveWebviews = function () {
        var e_15, _a;
        try {
            for (var _b = __values(this.widgets.getWidgets(webview_1.WebviewWidget.FACTORY_ID)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var webview = _c.value;
                this.preserveWebview(webview);
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_15) throw e_15.error; }
        }
    };
    HostedPluginSupport.prototype.preserveWebview = function (webview) {
        var _this = this;
        if (!this.webviewsToRestore.has(webview)) {
            this.webviewsToRestore.add(webview);
            webview.disposed.connect(function () { return _this.webviewsToRestore.delete(webview); });
        }
    };
    HostedPluginSupport.prototype.restoreWebviews = function () {
        var e_16, _a;
        try {
            for (var _b = __values(this.webviewsToRestore), _c = _b.next(); !_c.done; _c = _b.next()) {
                var webview = _c.value;
                this.restoreWebview(webview);
            }
        }
        catch (e_16_1) { e_16 = { error: e_16_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_16) throw e_16.error; }
        }
        this.webviewsToRestore.clear();
    };
    HostedPluginSupport.prototype.restoreWebview = function (webview) {
        return __awaiter(this, void 0, void 0, function () {
            var restore, e_17;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.activateByEvent("onWebviewPanel:" + webview.viewType)];
                    case 1:
                        _a.sent();
                        restore = this.webviewRevivers.get(webview.viewType);
                        if (!restore) {
                            /* eslint-disable max-len */
                            webview.setHTML(this.getDeserializationFailedContents("\n            <p>The extension providing '" + webview.viewType + "' view is not capable of restoring it.</p>\n            <p>Want to help fix this? Please inform the extension developer to register a <a href=\"https://code.visualstudio.com/api/extension-guides/webview#serialization\">reviver</a>.</p>\n            "));
                            /* eslint-enable max-len */
                            return [2 /*return*/];
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, restore(webview)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_17 = _a.sent();
                        webview.setHTML(this.getDeserializationFailedContents("\n            An error occurred while restoring '" + webview.viewType + "' view. Please check logs.\n            "));
                        console.error('Failed to restore the webview', e_17);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HostedPluginSupport.prototype.getDeserializationFailedContents = function (message) {
        return "<!DOCTYPE html>\n\t\t<html>\n\t\t\t<head>\n\t\t\t\t<meta http-equiv=\"Content-type\" content=\"text/html;charset=UTF-8\">\n\t\t\t\t<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'none';\">\n\t\t\t</head>\n\t\t\t<body>" + message + "</body>\n\t\t</html>";
    };
    __decorate([
        inversify_1.inject(core_1.ILogger),
        __metadata("design:type", Object)
    ], HostedPluginSupport.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(plugin_protocol_1.HostedPluginServer),
        __metadata("design:type", Object)
    ], HostedPluginSupport.prototype, "server", void 0);
    __decorate([
        inversify_1.inject(hosted_plugin_watcher_1.HostedPluginWatcher),
        __metadata("design:type", hosted_plugin_watcher_1.HostedPluginWatcher)
    ], HostedPluginSupport.prototype, "watcher", void 0);
    __decorate([
        inversify_1.inject(plugin_contribution_handler_1.PluginContributionHandler),
        __metadata("design:type", plugin_contribution_handler_1.PluginContributionHandler)
    ], HostedPluginSupport.prototype, "contributionHandler", void 0);
    __decorate([
        inversify_1.inject(core_1.ContributionProvider),
        inversify_1.named(plugin_ext_api_contribution_1.MainPluginApiProvider),
        __metadata("design:type", Object)
    ], HostedPluginSupport.prototype, "mainPluginApiProviders", void 0);
    __decorate([
        inversify_1.inject(plugin_protocol_2.PluginServer),
        __metadata("design:type", Object)
    ], HostedPluginSupport.prototype, "pluginServer", void 0);
    __decorate([
        inversify_1.inject(preferences_1.PreferenceProviderProvider),
        __metadata("design:type", Function)
    ], HostedPluginSupport.prototype, "preferenceProviderProvider", void 0);
    __decorate([
        inversify_1.inject(preferences_1.PreferenceServiceImpl),
        __metadata("design:type", preferences_1.PreferenceServiceImpl)
    ], HostedPluginSupport.prototype, "preferenceServiceImpl", void 0);
    __decorate([
        inversify_1.inject(plugin_paths_protocol_1.PluginPathsService),
        __metadata("design:type", Object)
    ], HostedPluginSupport.prototype, "pluginPathsService", void 0);
    __decorate([
        inversify_1.inject(browser_1.WorkspaceService),
        __metadata("design:type", browser_1.WorkspaceService)
    ], HostedPluginSupport.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(core_1.CommandRegistry),
        __metadata("design:type", core_1.CommandRegistry)
    ], HostedPluginSupport.prototype, "commands", void 0);
    __decorate([
        inversify_1.inject(debug_session_manager_1.DebugSessionManager),
        __metadata("design:type", debug_session_manager_1.DebugSessionManager)
    ], HostedPluginSupport.prototype, "debugSessionManager", void 0);
    __decorate([
        inversify_1.inject(debug_configuration_manager_1.DebugConfigurationManager),
        __metadata("design:type", debug_configuration_manager_1.DebugConfigurationManager)
    ], HostedPluginSupport.prototype, "debugConfigurationManager", void 0);
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], HostedPluginSupport.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(file_search_service_1.FileSearchService),
        __metadata("design:type", Object)
    ], HostedPluginSupport.prototype, "fileSearchService", void 0);
    __decorate([
        inversify_1.inject(frontend_application_state_1.FrontendApplicationStateService),
        __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
    ], HostedPluginSupport.prototype, "appState", void 0);
    __decorate([
        inversify_1.inject(plugin_view_registry_1.PluginViewRegistry),
        __metadata("design:type", plugin_view_registry_1.PluginViewRegistry)
    ], HostedPluginSupport.prototype, "viewRegistry", void 0);
    __decorate([
        inversify_1.inject(task_contribution_1.TaskProviderRegistry),
        __metadata("design:type", task_contribution_1.TaskProviderRegistry)
    ], HostedPluginSupport.prototype, "taskProviderRegistry", void 0);
    __decorate([
        inversify_1.inject(task_contribution_1.TaskResolverRegistry),
        __metadata("design:type", task_contribution_1.TaskResolverRegistry)
    ], HostedPluginSupport.prototype, "taskResolverRegistry", void 0);
    __decorate([
        inversify_1.inject(core_1.ProgressService),
        __metadata("design:type", core_1.ProgressService)
    ], HostedPluginSupport.prototype, "progressService", void 0);
    __decorate([
        inversify_1.inject(webview_environment_1.WebviewEnvironment),
        __metadata("design:type", webview_environment_1.WebviewEnvironment)
    ], HostedPluginSupport.prototype, "webviewEnvironment", void 0);
    __decorate([
        inversify_1.inject(widget_manager_1.WidgetManager),
        __metadata("design:type", widget_manager_1.WidgetManager)
    ], HostedPluginSupport.prototype, "widgets", void 0);
    __decorate([
        inversify_1.inject(terminal_service_1.TerminalService),
        __metadata("design:type", Object)
    ], HostedPluginSupport.prototype, "terminalService", void 0);
    __decorate([
        inversify_1.inject(env_variables_1.EnvVariablesServer),
        __metadata("design:type", Object)
    ], HostedPluginSupport.prototype, "envServer", void 0);
    __decorate([
        inversify_1.inject(json_schema_store_1.JsonSchemaStore),
        __metadata("design:type", json_schema_store_1.JsonSchemaStore)
    ], HostedPluginSupport.prototype, "jsonSchemaStore", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HostedPluginSupport.prototype, "init", null);
    HostedPluginSupport = __decorate([
        inversify_1.injectable()
    ], HostedPluginSupport);
    return HostedPluginSupport;
}());
exports.HostedPluginSupport = HostedPluginSupport;
var PluginContributions = /** @class */ (function (_super) {
    __extends(PluginContributions, _super);
    function PluginContributions(plugin) {
        var _this = _super.call(this) || this;
        _this.plugin = plugin;
        _this.state = PluginContributions.State.INITIALIZING;
        return _this;
    }
    return PluginContributions;
}(core_1.DisposableCollection));
exports.PluginContributions = PluginContributions;
(function (PluginContributions) {
    var State;
    (function (State) {
        State[State["INITIALIZING"] = 0] = "INITIALIZING";
        State[State["LOADING"] = 1] = "LOADING";
        State[State["LOADED"] = 2] = "LOADED";
        State[State["STARTING"] = 3] = "STARTING";
        State[State["STARTED"] = 4] = "STARTED";
    })(State = PluginContributions.State || (PluginContributions.State = {}));
})(PluginContributions = exports.PluginContributions || (exports.PluginContributions = {}));
exports.PluginContributions = PluginContributions;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/hosted/browser/worker/worker-main.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/hosted/browser/worker/worker-main.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "worker-ext.046ff49bc2ff2d5ef49a.js");
};

/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/callhierarchy/callhierarchy-type-converters.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/callhierarchy/callhierarchy-type-converters.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 Red Hat, Inc. and others.
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
exports.fromCaller = exports.toCaller = exports.fromDefinition = exports.toDefinition = exports.SymbolKindConverter = exports.toRange = exports.fromRange = exports.fromPosition = exports.toLocation = exports.fromLocation = exports.fromUriComponents = exports.toUriComponents = void 0;
var model = __webpack_require__(/*! ../../../common/plugin-api-rpc-model */ "./node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc-model.js");
var callhierarchy = __webpack_require__(/*! vscode-languageserver-types */ "./node_modules/vscode-languageserver-types/lib/esm/main.js");
var vscode_uri_1 = __webpack_require__(/*! vscode-uri */ "./node_modules/vscode-uri/lib/esm/index.js");
function toUriComponents(uri) {
    return vscode_uri_1.URI.parse(uri);
}
exports.toUriComponents = toUriComponents;
function fromUriComponents(uri) {
    return vscode_uri_1.URI.revive(uri).toString();
}
exports.fromUriComponents = fromUriComponents;
function fromLocation(location) {
    return {
        uri: vscode_uri_1.URI.parse(location.uri),
        range: fromRange(location.range)
    };
}
exports.fromLocation = fromLocation;
function toLocation(uri, range) {
    return {
        uri: vscode_uri_1.URI.revive(uri).toString(),
        range: toRange(range)
    };
}
exports.toLocation = toLocation;
function fromPosition(position) {
    return {
        lineNumber: position.line,
        column: position.character
    };
}
exports.fromPosition = fromPosition;
function fromRange(range) {
    var start = range.start, end = range.end;
    return {
        startLineNumber: start.line,
        startColumn: start.character,
        endLineNumber: end.line,
        endColumn: end.character
    };
}
exports.fromRange = fromRange;
function toRange(range) {
    return callhierarchy.Range.create(range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn);
}
exports.toRange = toRange;
var SymbolKindConverter;
(function (SymbolKindConverter) {
    // tslint:disable-next-line:no-null-keyword
    var fromMapping = Object.create(null);
    fromMapping[callhierarchy.SymbolKind.File] = model.SymbolKind.File;
    fromMapping[callhierarchy.SymbolKind.Module] = model.SymbolKind.Module;
    fromMapping[callhierarchy.SymbolKind.Namespace] = model.SymbolKind.Namespace;
    fromMapping[callhierarchy.SymbolKind.Package] = model.SymbolKind.Package;
    fromMapping[callhierarchy.SymbolKind.Class] = model.SymbolKind.Class;
    fromMapping[callhierarchy.SymbolKind.Method] = model.SymbolKind.Method;
    fromMapping[callhierarchy.SymbolKind.Property] = model.SymbolKind.Property;
    fromMapping[callhierarchy.SymbolKind.Field] = model.SymbolKind.Field;
    fromMapping[callhierarchy.SymbolKind.Constructor] = model.SymbolKind.Constructor;
    fromMapping[callhierarchy.SymbolKind.Enum] = model.SymbolKind.Enum;
    fromMapping[callhierarchy.SymbolKind.Interface] = model.SymbolKind.Interface;
    fromMapping[callhierarchy.SymbolKind.Function] = model.SymbolKind.Function;
    fromMapping[callhierarchy.SymbolKind.Variable] = model.SymbolKind.Variable;
    fromMapping[callhierarchy.SymbolKind.Constant] = model.SymbolKind.Constant;
    fromMapping[callhierarchy.SymbolKind.String] = model.SymbolKind.String;
    fromMapping[callhierarchy.SymbolKind.Number] = model.SymbolKind.Number;
    fromMapping[callhierarchy.SymbolKind.Boolean] = model.SymbolKind.Boolean;
    fromMapping[callhierarchy.SymbolKind.Array] = model.SymbolKind.Array;
    fromMapping[callhierarchy.SymbolKind.Object] = model.SymbolKind.Object;
    fromMapping[callhierarchy.SymbolKind.Key] = model.SymbolKind.Key;
    fromMapping[callhierarchy.SymbolKind.Null] = model.SymbolKind.Null;
    fromMapping[callhierarchy.SymbolKind.EnumMember] = model.SymbolKind.EnumMember;
    fromMapping[callhierarchy.SymbolKind.Struct] = model.SymbolKind.Struct;
    fromMapping[callhierarchy.SymbolKind.Event] = model.SymbolKind.Event;
    fromMapping[callhierarchy.SymbolKind.Operator] = model.SymbolKind.Operator;
    fromMapping[callhierarchy.SymbolKind.TypeParameter] = model.SymbolKind.TypeParameter;
    function fromSymbolKind(kind) {
        return fromMapping[kind] || model.SymbolKind.Property;
    }
    SymbolKindConverter.fromSymbolKind = fromSymbolKind;
    // tslint:disable-next-line:no-null-keyword
    var toMapping = Object.create(null);
    toMapping[model.SymbolKind.File] = callhierarchy.SymbolKind.File;
    toMapping[model.SymbolKind.Module] = callhierarchy.SymbolKind.Module;
    toMapping[model.SymbolKind.Namespace] = callhierarchy.SymbolKind.Namespace;
    toMapping[model.SymbolKind.Package] = callhierarchy.SymbolKind.Package;
    toMapping[model.SymbolKind.Class] = callhierarchy.SymbolKind.Class;
    toMapping[model.SymbolKind.Method] = callhierarchy.SymbolKind.Method;
    toMapping[model.SymbolKind.Property] = callhierarchy.SymbolKind.Property;
    toMapping[model.SymbolKind.Field] = callhierarchy.SymbolKind.Field;
    toMapping[model.SymbolKind.Constructor] = callhierarchy.SymbolKind.Constructor;
    toMapping[model.SymbolKind.Enum] = callhierarchy.SymbolKind.Enum;
    toMapping[model.SymbolKind.Interface] = callhierarchy.SymbolKind.Interface;
    toMapping[model.SymbolKind.Function] = callhierarchy.SymbolKind.Function;
    toMapping[model.SymbolKind.Variable] = callhierarchy.SymbolKind.Variable;
    toMapping[model.SymbolKind.Constant] = callhierarchy.SymbolKind.Constant;
    toMapping[model.SymbolKind.String] = callhierarchy.SymbolKind.String;
    toMapping[model.SymbolKind.Number] = callhierarchy.SymbolKind.Number;
    toMapping[model.SymbolKind.Boolean] = callhierarchy.SymbolKind.Boolean;
    toMapping[model.SymbolKind.Array] = callhierarchy.SymbolKind.Array;
    toMapping[model.SymbolKind.Object] = callhierarchy.SymbolKind.Object;
    toMapping[model.SymbolKind.Key] = callhierarchy.SymbolKind.Key;
    toMapping[model.SymbolKind.Null] = callhierarchy.SymbolKind.Null;
    toMapping[model.SymbolKind.EnumMember] = callhierarchy.SymbolKind.EnumMember;
    toMapping[model.SymbolKind.Struct] = callhierarchy.SymbolKind.Struct;
    toMapping[model.SymbolKind.Event] = callhierarchy.SymbolKind.Event;
    toMapping[model.SymbolKind.Operator] = callhierarchy.SymbolKind.Operator;
    toMapping[model.SymbolKind.TypeParameter] = callhierarchy.SymbolKind.TypeParameter;
    function toSymbolKind(kind) {
        return toMapping[kind] || model.SymbolKind.Property;
    }
    SymbolKindConverter.toSymbolKind = toSymbolKind;
})(SymbolKindConverter = exports.SymbolKindConverter || (exports.SymbolKindConverter = {}));
function toDefinition(definition) {
    if (!definition) {
        return undefined;
    }
    return {
        location: {
            uri: fromUriComponents(definition.uri),
            range: toRange(definition.range)
        },
        selectionRange: toRange(definition.selectionRange),
        symbolName: definition.name,
        symbolKind: SymbolKindConverter.toSymbolKind(definition.kind),
        containerName: undefined
    };
}
exports.toDefinition = toDefinition;
function fromDefinition(definition) {
    return {
        uri: toUriComponents(definition.location.uri),
        range: fromRange(definition.location.range),
        selectionRange: fromRange(definition.selectionRange),
        name: definition.symbolName,
        kind: SymbolKindConverter.fromSymbolKind(definition.symbolKind)
    };
}
exports.fromDefinition = fromDefinition;
function toCaller(caller) {
    return {
        callerDefinition: toDefinition(caller.callerDefinition),
        references: caller.references.map(toRange)
    };
}
exports.toCaller = toCaller;
function fromCaller(caller) {
    return {
        callerDefinition: fromDefinition(caller.callerDefinition),
        references: caller.references.map(fromRange)
    };
}
exports.fromCaller = fromCaller;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/clipboard-main.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/clipboard-main.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 RedHat and others.
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
exports.ClipboardMainImpl = void 0;
var clipboard_service_1 = __webpack_require__(/*! @theia/core/lib/browser/clipboard-service */ "./node_modules/@theia/core/lib/browser/clipboard-service.js");
var ClipboardMainImpl = /** @class */ (function () {
    function ClipboardMainImpl(container) {
        this.clipboardService = container.get(clipboard_service_1.ClipboardService);
    }
    ClipboardMainImpl.prototype.$readText = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clipboardService.readText()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ClipboardMainImpl.prototype.$writeText = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clipboardService.writeText(value)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ClipboardMainImpl;
}());
exports.ClipboardMainImpl = ClipboardMainImpl;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/command-registry-main.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/command-registry-main.js ***!
  \**********************************************************************************/
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
exports.CommandRegistryMainImpl = void 0;
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "./node_modules/@theia/core/lib/common/command.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var plugin_api_rpc_1 = __webpack_require__(/*! ../../common/plugin-api-rpc */ "./node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var plugin_contribution_handler_1 = __webpack_require__(/*! ./plugin-contribution-handler */ "./node_modules/@theia/plugin-ext/lib/main/browser/plugin-contribution-handler.js");
var CommandRegistryMainImpl = /** @class */ (function () {
    function CommandRegistryMainImpl(rpc, container) {
        this.commands = new Map();
        this.handlers = new Map();
        this.toDispose = new disposable_1.DisposableCollection();
        this.proxy = rpc.getProxy(plugin_api_rpc_1.MAIN_RPC_CONTEXT.COMMAND_REGISTRY_EXT);
        this.delegate = container.get(command_1.CommandRegistry);
        this.keyBinding = container.get(browser_1.KeybindingRegistry);
        this.contributions = container.get(plugin_contribution_handler_1.PluginContributionHandler);
    }
    CommandRegistryMainImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    CommandRegistryMainImpl.prototype.$registerCommand = function (command) {
        var _this = this;
        var id = command.id;
        this.commands.set(id, this.contributions.registerCommand(command));
        this.toDispose.push(disposable_1.Disposable.create(function () { return _this.$unregisterCommand(id); }));
    };
    CommandRegistryMainImpl.prototype.$unregisterCommand = function (id) {
        var command = this.commands.get(id);
        if (command) {
            command.dispose();
            this.commands.delete(id);
        }
    };
    CommandRegistryMainImpl.prototype.$registerHandler = function (id) {
        var _this = this;
        this.handlers.set(id, this.contributions.registerCommandHandler(id, function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return (_a = _this.proxy).$executeCommand.apply(_a, __spread([id], args));
        }));
        this.toDispose.push(disposable_1.Disposable.create(function () { return _this.$unregisterHandler(id); }));
    };
    CommandRegistryMainImpl.prototype.$unregisterHandler = function (id) {
        var handler = this.handlers.get(id);
        if (handler) {
            handler.dispose();
            this.handlers.delete(id);
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    CommandRegistryMainImpl.prototype.$executeCommand = function (id) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.delegate.getCommand(id)) {
                            throw new Error("Command with id '" + id + "' is not registered.");
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (_a = this.delegate).executeCommand.apply(_a, __spread([id], args))];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3:
                        e_1 = _b.sent();
                        // Command handler may be not active at the moment so the error must be caught. See https://github.com/eclipse-theia/theia/pull/6687#discussion_r354810079
                        if ('code' in e_1 && e_1['code'] === 'NO_ACTIVE_HANDLER') {
                            return [2 /*return*/];
                        }
                        else {
                            throw e_1;
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CommandRegistryMainImpl.prototype.$getKeyBinding = function (commandId) {
        try {
            var keyBindings = this.keyBinding.getKeybindingsForCommand(commandId);
            if (keyBindings) {
                // transform inner type to CommandKeyBinding
                return Promise.resolve(keyBindings.map(function (keyBinding) { return ({ id: commandId, value: keyBinding.keybinding }); }));
            }
            else {
                return Promise.resolve(undefined);
            }
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    CommandRegistryMainImpl.prototype.$getCommands = function () {
        return Promise.resolve(this.delegate.commandIds);
    };
    return CommandRegistryMainImpl;
}());
exports.CommandRegistryMainImpl = CommandRegistryMainImpl;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/commands.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/commands.js ***!
  \*********************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenUriCommandHandler = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "./node_modules/@theia/core/lib/common/command.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var window_service_1 = __webpack_require__(/*! @theia/core/lib/browser/window/window-service */ "./node_modules/@theia/core/lib/browser/window/window-service.js");
var OpenUriCommandHandler = /** @class */ (function () {
    function OpenUriCommandHandler(windowService, commandService) {
        this.windowService = windowService;
        this.commandService = commandService;
        this.openNewTabDialog = new OpenNewTabDialog(windowService);
    }
    OpenUriCommandHandler.prototype.execute = function (resource) {
        if (!resource) {
            return;
        }
        var uriString = resource.toString();
        if (uriString.startsWith('http://') || uriString.startsWith('https://')) {
            this.openWebUri(uriString);
        }
        else {
            this.commandService.executeCommand('editor.action.openLink', uriString);
        }
    };
    OpenUriCommandHandler.prototype.openWebUri = function (uri) {
        try {
            this.windowService.openNewWindow(uri);
        }
        catch (err) {
            // browser has blocked opening of a new tab
            this.openNewTabDialog.showOpenNewTabDialog(uri);
        }
    };
    OpenUriCommandHandler.COMMAND_METADATA = {
        id: 'theia.open'
    };
    OpenUriCommandHandler = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(window_service_1.WindowService)),
        __param(1, inversify_1.inject(command_1.CommandService)),
        __metadata("design:paramtypes", [Object, Object])
    ], OpenUriCommandHandler);
    return OpenUriCommandHandler;
}());
exports.OpenUriCommandHandler = OpenUriCommandHandler;
var OpenNewTabDialog = /** @class */ (function (_super) {
    __extends(OpenNewTabDialog, _super);
    function OpenNewTabDialog(windowService) {
        var _this = _super.call(this, {
            title: 'Your browser prevented opening of a new tab'
        }) || this;
        _this.windowService = windowService;
        _this.linkNode = document.createElement('a');
        _this.linkNode.target = '_blank';
        _this.linkNode.setAttribute('style', 'color: var(--theia-editorWidget-foreground);');
        _this.contentNode.appendChild(_this.linkNode);
        var messageNode = document.createElement('div');
        messageNode.innerText = 'You are going to open: ';
        messageNode.appendChild(_this.linkNode);
        _this.contentNode.appendChild(messageNode);
        _this.appendCloseButton();
        _this.openButton = _this.appendAcceptButton('Open');
        return _this;
    }
    OpenNewTabDialog.prototype.showOpenNewTabDialog = function (uri) {
        var _this = this;
        this.value = uri;
        this.linkNode.innerHTML = uri;
        this.linkNode.href = uri;
        this.openButton.onclick = function () {
            _this.windowService.openNewWindow(uri);
        };
        // show dialog window to user
        this.open();
    };
    return OpenNewTabDialog;
}(browser_1.AbstractDialog));


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/connection-main.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/connection-main.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionMainImpl = void 0;
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var plugin_api_rpc_1 = __webpack_require__(/*! ../../common/plugin-api-rpc */ "./node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js");
var connection_1 = __webpack_require__(/*! ../../common/connection */ "./node_modules/@theia/plugin-ext/lib/common/connection.js");
var plugin_message_reader_1 = __webpack_require__(/*! ../../common/plugin-message-reader */ "./node_modules/@theia/plugin-ext/lib/common/plugin-message-reader.js");
var plugin_message_writer_1 = __webpack_require__(/*! ../../common/plugin-message-writer */ "./node_modules/@theia/plugin-ext/lib/common/plugin-message-writer.js");
/**
 * Implementation of connection system of the plugin API.
 * Creates holds the connections to the plugins. Allows to send a message to the plugin by getting already created connection via id.
 */
var ConnectionMainImpl = /** @class */ (function () {
    function ConnectionMainImpl(rpc) {
        this.connections = new Map();
        this.toDispose = new disposable_1.DisposableCollection();
        this.proxy = rpc.getProxy(plugin_api_rpc_1.MAIN_RPC_CONTEXT.CONNECTION_EXT);
    }
    ConnectionMainImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    /**
     * Gets the connection between plugin by id and sends string message to it.
     *
     * @param id connection's id
     * @param message incoming message
     */
    ConnectionMainImpl.prototype.$sendMessage = function (id, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.connections.has(id)) {
                    this.connections.get(id).reader.readMessage(message);
                }
                else {
                    console.warn('It is not possible to read message. Connection missed.');
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Instantiates a new connection by the given id.
     * @param id the connection id
     */
    ConnectionMainImpl.prototype.$createConnection = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.doEnsureConnection(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Deletes a connection.
     * @param id the connection id
     */
    ConnectionMainImpl.prototype.$deleteConnection = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.connections.delete(id);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Returns existed connection or creates a new one.
     * @param id the connection id
     */
    ConnectionMainImpl.prototype.ensureConnection = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var connection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.doEnsureConnection(id)];
                    case 1:
                        connection = _a.sent();
                        return [4 /*yield*/, this.proxy.$createConnection(id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, connection];
                }
            });
        });
    };
    /**
     * Returns existed connection or creates a new one.
     * @param id the connection id
     */
    ConnectionMainImpl.prototype.doEnsureConnection = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.connections.get(id);
                        if (_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.doCreateConnection(id)];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        connection = _a;
                        this.connections.set(id, connection);
                        return [2 /*return*/, connection];
                }
            });
        });
    };
    ConnectionMainImpl.prototype.doCreateConnection = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var reader, writer, connection, toClose;
            var _this = this;
            return __generator(this, function (_a) {
                reader = new plugin_message_reader_1.PluginMessageReader();
                writer = new plugin_message_writer_1.PluginMessageWriter(id, this.proxy);
                connection = new connection_1.PluginConnection(reader, writer, function () {
                    _this.connections.delete(id);
                    if (!toClose.disposed) {
                        _this.proxy.$deleteConnection(id);
                    }
                });
                toClose = new disposable_1.DisposableCollection(disposable_1.Disposable.create(function () { return reader.fireClose(); }));
                this.toDispose.push(toClose);
                return [2 /*return*/, connection];
            });
        });
    };
    return ConnectionMainImpl;
}());
exports.ConnectionMainImpl = ConnectionMainImpl;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/debug/debug-main.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/debug/debug-main.js ***!
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
exports.DebugMainImpl = void 0;
var plugin_api_rpc_1 = __webpack_require__(/*! ../../../common/plugin-api-rpc */ "./node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js");
var debug_session_manager_1 = __webpack_require__(/*! @theia/debug/lib/browser/debug-session-manager */ "./node_modules/@theia/debug/lib/browser/debug-session-manager.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var breakpoint_manager_1 = __webpack_require__(/*! @theia/debug/lib/browser/breakpoint/breakpoint-manager */ "./node_modules/@theia/debug/lib/browser/breakpoint/breakpoint-manager.js");
var debug_source_breakpoint_1 = __webpack_require__(/*! @theia/debug/lib/browser/model/debug-source-breakpoint */ "./node_modules/@theia/debug/lib/browser/model/debug-source-breakpoint.js");
var vscode_uri_1 = __webpack_require__(/*! vscode-uri */ "./node_modules/vscode-uri/lib/esm/index.js");
var debug_console_session_1 = __webpack_require__(/*! @theia/debug/lib/browser/console/debug-console-session */ "./node_modules/@theia/debug/lib/browser/console/debug-console-session.js");
var debug_configuration_manager_1 = __webpack_require__(/*! @theia/debug/lib/browser/debug-configuration-manager */ "./node_modules/@theia/debug/lib/browser/debug-configuration-manager.js");
var terminal_service_1 = __webpack_require__(/*! @theia/terminal/lib/browser/base/terminal-service */ "./node_modules/@theia/terminal/lib/browser/base/terminal-service.js");
var message_service_protocol_1 = __webpack_require__(/*! @theia/core/lib/common/message-service-protocol */ "./node_modules/@theia/core/lib/common/message-service-protocol.js");
var output_channel_1 = __webpack_require__(/*! @theia/output/lib/common/output-channel */ "./node_modules/@theia/output/lib/common/output-channel.js");
var debug_preferences_1 = __webpack_require__(/*! @theia/debug/lib/browser/debug-preferences */ "./node_modules/@theia/debug/lib/browser/debug-preferences.js");
var plugin_debug_adapter_contribution_1 = __webpack_require__(/*! ./plugin-debug-adapter-contribution */ "./node_modules/@theia/plugin-ext/lib/main/browser/debug/plugin-debug-adapter-contribution.js");
var plugin_debug_session_contribution_registry_1 = __webpack_require__(/*! ./plugin-debug-session-contribution-registry */ "./node_modules/@theia/plugin-ext/lib/main/browser/debug/plugin-debug-session-contribution-registry.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var plugin_debug_session_factory_1 = __webpack_require__(/*! ./plugin-debug-session-factory */ "./node_modules/@theia/plugin-ext/lib/main/browser/debug/plugin-debug-session-factory.js");
var connection_1 = __webpack_require__(/*! ../../../common/connection */ "./node_modules/@theia/plugin-ext/lib/common/connection.js");
var plugin_debug_service_1 = __webpack_require__(/*! ./plugin-debug-service */ "./node_modules/@theia/plugin-ext/lib/main/browser/debug/plugin-debug-service.js");
var common_1 = __webpack_require__(/*! @theia/filesystem/lib/common */ "./node_modules/@theia/filesystem/lib/common/index.js");
var hosted_plugin_1 = __webpack_require__(/*! ../../../hosted/browser/hosted-plugin */ "./node_modules/@theia/plugin-ext/lib/hosted/browser/hosted-plugin.js");
var debug_function_breakpoint_1 = __webpack_require__(/*! @theia/debug/lib/browser/model/debug-function-breakpoint */ "./node_modules/@theia/debug/lib/browser/model/debug-function-breakpoint.js");
var DebugMainImpl = /** @class */ (function () {
    function DebugMainImpl(rpc, connectionMain, container) {
        var _this = this;
        this.connectionMain = connectionMain;
        this.debuggerContributions = new Map();
        this.toDispose = new disposable_1.DisposableCollection();
        this.debugExt = rpc.getProxy(plugin_api_rpc_1.MAIN_RPC_CONTEXT.DEBUG_EXT);
        this.sessionManager = container.get(debug_session_manager_1.DebugSessionManager);
        this.labelProvider = container.get(browser_1.LabelProvider);
        this.editorManager = container.get(browser_2.EditorManager);
        this.breakpointsManager = container.get(breakpoint_manager_1.BreakpointManager);
        this.debugConsoleSession = container.get(debug_console_session_1.DebugConsoleSession);
        this.configurationManager = container.get(debug_configuration_manager_1.DebugConfigurationManager);
        this.terminalService = container.get(terminal_service_1.TerminalService);
        this.messages = container.get(message_service_protocol_1.MessageClient);
        this.outputChannelManager = container.get(output_channel_1.OutputChannelManager);
        this.debugPreferences = container.get(debug_preferences_1.DebugPreferences);
        this.adapterContributionRegistrator = container.get(plugin_debug_service_1.PluginDebugService);
        this.sessionContributionRegistrator = container.get(plugin_debug_session_contribution_registry_1.PluginDebugSessionContributionRegistry);
        this.fileSystem = container.get(common_1.FileSystem);
        this.pluginService = container.get(hosted_plugin_1.HostedPluginSupport);
        var fireDidChangeBreakpoints = function (_a) {
            var added = _a.added, removed = _a.removed, changed = _a.changed;
            _this.debugExt.$breakpointsDidChange(_this.toTheiaPluginApiBreakpoints(added), removed.map(function (b) { return b.id; }), _this.toTheiaPluginApiBreakpoints(changed));
        };
        this.debugExt.$breakpointsDidChange(this.toTheiaPluginApiBreakpoints(this.breakpointsManager.getBreakpoints()), [], []);
        this.debugExt.$breakpointsDidChange(this.toTheiaPluginApiBreakpoints(this.breakpointsManager.getFunctionBreakpoints()), [], []);
        this.toDispose.pushAll([
            this.breakpointsManager.onDidChangeBreakpoints(fireDidChangeBreakpoints),
            this.breakpointsManager.onDidChangeFunctionBreakpoints(fireDidChangeBreakpoints),
            this.sessionManager.onDidCreateDebugSession(function (debugSession) { return _this.debugExt.$sessionDidCreate(debugSession.id); }),
            this.sessionManager.onDidDestroyDebugSession(function (debugSession) { return _this.debugExt.$sessionDidDestroy(debugSession.id); }),
            this.sessionManager.onDidChangeActiveDebugSession(function (event) { return _this.debugExt.$sessionDidChange(event.current && event.current.id); }),
            this.sessionManager.onDidReceiveDebugSessionCustomEvent(function (event) { return _this.debugExt.$onSessionCustomEvent(event.session.id, event.event, event.body); })
        ]);
    }
    DebugMainImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    DebugMainImpl.prototype.$appendToDebugConsole = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.debugConsoleSession.append(value);
                return [2 /*return*/];
            });
        });
    };
    DebugMainImpl.prototype.$appendLineToDebugConsole = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.debugConsoleSession.appendLine(value);
                return [2 /*return*/];
            });
        });
    };
    DebugMainImpl.prototype.$registerDebuggerContribution = function (description) {
        return __awaiter(this, void 0, void 0, function () {
            var debugType, terminalOptionsExt, debugSessionFactory, toDispose;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        debugType = description.type;
                        return [4 /*yield*/, this.debugExt.$getTerminalCreationOptions(debugType)];
                    case 1:
                        terminalOptionsExt = _a.sent();
                        if (this.toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        debugSessionFactory = new plugin_debug_session_factory_1.PluginDebugSessionFactory(this.terminalService, this.editorManager, this.breakpointsManager, this.labelProvider, this.messages, this.outputChannelManager, this.debugPreferences, function (sessionId) { return __awaiter(_this, void 0, void 0, function () {
                            var connection;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.connectionMain.ensureConnection(sessionId)];
                                    case 1:
                                        connection = _a.sent();
                                        return [2 /*return*/, new connection_1.PluginWebSocketChannel(connection)];
                                }
                            });
                        }); }, this.fileSystem, terminalOptionsExt);
                        toDispose = new disposable_1.DisposableCollection(disposable_1.Disposable.create(function () { return _this.debuggerContributions.delete(debugType); }));
                        this.debuggerContributions.set(debugType, toDispose);
                        toDispose.pushAll([
                            this.adapterContributionRegistrator.registerDebugAdapterContribution(new plugin_debug_adapter_contribution_1.PluginDebugAdapterContribution(description, this.debugExt, this.pluginService)),
                            this.sessionContributionRegistrator.registerDebugSessionContribution({
                                debugType: description.type,
                                debugSessionFactory: function () { return debugSessionFactory; }
                            })
                        ]);
                        this.toDispose.push(disposable_1.Disposable.create(function () { return _this.$unregisterDebuggerConfiguration(debugType); }));
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugMainImpl.prototype.$unregisterDebuggerConfiguration = function (debugType) {
        return __awaiter(this, void 0, void 0, function () {
            var disposable;
            return __generator(this, function (_a) {
                disposable = this.debuggerContributions.get(debugType);
                if (disposable) {
                    disposable.dispose();
                }
                return [2 /*return*/];
            });
        });
    };
    DebugMainImpl.prototype.$addBreakpoints = function (breakpoints) {
        return __awaiter(this, void 0, void 0, function () {
            var newBreakpoints, addedFunctionBreakpoints, functionBreakpoints, functionBreakpoints_1, functionBreakpoints_1_1, breakpoint, _a, _b, breakpoint, location_1, column;
            var e_1, _c, e_2, _d;
            return __generator(this, function (_e) {
                newBreakpoints = new Map();
                breakpoints.forEach(function (b) { return newBreakpoints.set(b.id, b); });
                this.breakpointsManager.findMarkers({
                    dataFilter: function (data) {
                        // install only new breakpoints
                        if (newBreakpoints.has(data.id)) {
                            newBreakpoints.delete(data.id);
                        }
                        return false;
                    }
                });
                addedFunctionBreakpoints = false;
                functionBreakpoints = this.breakpointsManager.getFunctionBreakpoints();
                try {
                    for (functionBreakpoints_1 = __values(functionBreakpoints), functionBreakpoints_1_1 = functionBreakpoints_1.next(); !functionBreakpoints_1_1.done; functionBreakpoints_1_1 = functionBreakpoints_1.next()) {
                        breakpoint = functionBreakpoints_1_1.value;
                        // install only new breakpoints
                        if (newBreakpoints.has(breakpoint.id)) {
                            newBreakpoints.delete(breakpoint.id);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (functionBreakpoints_1_1 && !functionBreakpoints_1_1.done && (_c = functionBreakpoints_1.return)) _c.call(functionBreakpoints_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                try {
                    for (_a = __values(newBreakpoints.values()), _b = _a.next(); !_b.done; _b = _a.next()) {
                        breakpoint = _b.value;
                        if (breakpoint.location) {
                            location_1 = breakpoint.location;
                            column = breakpoint.location.range.startColumn;
                            this.breakpointsManager.addBreakpoint({
                                id: breakpoint.id,
                                uri: vscode_uri_1.URI.revive(location_1.uri).toString(),
                                enabled: breakpoint.enabled,
                                raw: {
                                    line: breakpoint.location.range.startLineNumber + 1,
                                    column: column > 0 ? column + 1 : undefined,
                                    condition: breakpoint.condition,
                                    hitCondition: breakpoint.hitCondition,
                                    logMessage: breakpoint.logMessage
                                }
                            });
                        }
                        else if (breakpoint.functionName) {
                            addedFunctionBreakpoints = true;
                            functionBreakpoints.push({
                                id: breakpoint.id,
                                enabled: breakpoint.enabled,
                                raw: {
                                    name: breakpoint.functionName
                                }
                            });
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                if (addedFunctionBreakpoints) {
                    this.breakpointsManager.setFunctionBreakpoints(functionBreakpoints);
                }
                return [2 /*return*/];
            });
        });
    };
    DebugMainImpl.prototype.$removeBreakpoints = function (breakpoints) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, labelProvider, breakpointsManager, editorManager, session, ids, _b, _c, origin_1, breakpoint, _d, _e, origin_2, breakpoint;
            var e_3, _f, e_4, _g;
            return __generator(this, function (_h) {
                _a = this, labelProvider = _a.labelProvider, breakpointsManager = _a.breakpointsManager, editorManager = _a.editorManager;
                session = this.sessionManager.currentSession;
                ids = new Set(breakpoints);
                try {
                    for (_b = __values(this.breakpointsManager.findMarkers({ dataFilter: function (data) { return ids.has(data.id); } })), _c = _b.next(); !_c.done; _c = _b.next()) {
                        origin_1 = _c.value;
                        breakpoint = new debug_source_breakpoint_1.DebugSourceBreakpoint(origin_1.data, { labelProvider: labelProvider, breakpoints: breakpointsManager, editorManager: editorManager, session: session });
                        breakpoint.remove();
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_f = _b.return)) _f.call(_b);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                try {
                    for (_d = __values(this.breakpointsManager.getFunctionBreakpoints()), _e = _d.next(); !_e.done; _e = _d.next()) {
                        origin_2 = _e.value;
                        if (ids.has(origin_2.id)) {
                            breakpoint = new debug_function_breakpoint_1.DebugFunctionBreakpoint(origin_2, { labelProvider: labelProvider, breakpoints: breakpointsManager, editorManager: editorManager, session: session });
                            breakpoint.remove();
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_g = _d.return)) _g.call(_d);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                return [2 /*return*/];
            });
        });
    };
    DebugMainImpl.prototype.$customRequest = function (sessionId, command, args) {
        return __awaiter(this, void 0, void 0, function () {
            var session;
            return __generator(this, function (_a) {
                session = this.sessionManager.getSession(sessionId);
                if (session) {
                    return [2 /*return*/, session.sendCustomRequest(command, args)];
                }
                throw new Error("Debug session '" + sessionId + "' not found");
            });
        });
    };
    DebugMainImpl.prototype.$startDebugging = function (folder, nameOrConfiguration) {
        return __awaiter(this, void 0, void 0, function () {
            var configuration, _a, _b, options, session;
            var e_5, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (typeof nameOrConfiguration === 'string') {
                            try {
                                for (_a = __values(this.configurationManager.all), _b = _a.next(); !_b.done; _b = _a.next()) {
                                    options = _b.value;
                                    if (options.configuration.name === nameOrConfiguration) {
                                        configuration = options.configuration;
                                    }
                                }
                            }
                            catch (e_5_1) { e_5 = { error: e_5_1 }; }
                            finally {
                                try {
                                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                }
                                finally { if (e_5) throw e_5.error; }
                            }
                        }
                        else {
                            configuration = nameOrConfiguration;
                        }
                        if (!configuration) {
                            console.error("There is no debug configuration for " + nameOrConfiguration);
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.sessionManager.start({
                                configuration: configuration,
                                workspaceFolderUri: folder && vscode_uri_1.URI.revive(folder.uri).toString()
                            })];
                    case 1:
                        session = _d.sent();
                        return [2 /*return*/, !!session];
                }
            });
        });
    };
    DebugMainImpl.prototype.toTheiaPluginApiBreakpoints = function (breakpoints) {
        var _this = this;
        return breakpoints.map(function (b) { return _this.toTheiaPluginApiBreakpoint(b); });
    };
    DebugMainImpl.prototype.toTheiaPluginApiBreakpoint = function (breakpoint) {
        if ('uri' in breakpoint) {
            var raw = breakpoint.raw;
            return {
                id: breakpoint.id,
                enabled: breakpoint.enabled,
                condition: breakpoint.raw.condition,
                hitCondition: breakpoint.raw.hitCondition,
                logMessage: raw.logMessage,
                location: {
                    uri: vscode_uri_1.URI.parse(breakpoint.uri),
                    range: {
                        startLineNumber: raw.line - 1,
                        startColumn: (raw.column || 1) - 1,
                        endLineNumber: raw.line - 1,
                        endColumn: (raw.column || 1) - 1
                    }
                }
            };
        }
        return {
            id: breakpoint.id,
            enabled: breakpoint.enabled,
            functionName: breakpoint.raw.name
        };
    };
    return DebugMainImpl;
}());
exports.DebugMainImpl = DebugMainImpl;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/debug/plugin-debug-adapter-contribution.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/debug/plugin-debug-adapter-contribution.js ***!
  \****************************************************************************************************/
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
exports.PluginDebugAdapterContribution = void 0;
/**
 * Plugin [DebugAdapterContribution](#DebugAdapterContribution).
 */
var PluginDebugAdapterContribution = /** @class */ (function () {
    function PluginDebugAdapterContribution(description, debugExt, pluginService) {
        this.description = description;
        this.debugExt = debugExt;
        this.pluginService = pluginService;
    }
    Object.defineProperty(PluginDebugAdapterContribution.prototype, "type", {
        get: function () {
            return this.description.type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PluginDebugAdapterContribution.prototype, "label", {
        get: function () {
            return this.description.label;
        },
        enumerable: false,
        configurable: true
    });
    PluginDebugAdapterContribution.prototype.provideDebugConfigurations = function (workspaceFolderUri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.debugExt.$provideDebugConfigurations(this.type, workspaceFolderUri)];
            });
        });
    };
    PluginDebugAdapterContribution.prototype.resolveDebugConfiguration = function (config, workspaceFolderUri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.debugExt.$resolveDebugConfigurations(config, workspaceFolderUri)];
            });
        });
    };
    PluginDebugAdapterContribution.prototype.createDebugSession = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pluginService.activateByDebug('onDebugAdapterProtocolTracker', config.type)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.debugExt.$createDebugSession(config)];
                }
            });
        });
    };
    PluginDebugAdapterContribution.prototype.terminateDebugSession = function (sessionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.debugExt.$terminateDebugSession(sessionId);
                return [2 /*return*/];
            });
        });
    };
    return PluginDebugAdapterContribution;
}());
exports.PluginDebugAdapterContribution = PluginDebugAdapterContribution;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/debug/plugin-debug-service.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/debug/plugin-debug-service.js ***!
  \***************************************************************************************/
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
exports.PluginDebugService = void 0;
var debug_service_1 = __webpack_require__(/*! @theia/debug/lib/common/debug-service */ "./node_modules/@theia/debug/lib/common/debug-service.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var ws_connection_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/messaging/ws-connection-provider */ "./node_modules/@theia/core/lib/browser/messaging/ws-connection-provider.js");
var browser_1 = __webpack_require__(/*! @theia/workspace/lib/browser */ "./node_modules/@theia/workspace/lib/browser/index.js");
/**
 * Debug service to work with plugin and extension contributions.
 */
var PluginDebugService = /** @class */ (function () {
    function PluginDebugService() {
        this.debuggers = [];
        this.contributors = new Map();
        this.toDispose = new disposable_1.DisposableCollection();
        // maps session and contribution
        this.sessionId2contrib = new Map();
    }
    PluginDebugService.prototype.init = function () {
        var _this = this;
        this.delegated = this.connectionProvider.createProxy(debug_service_1.DebugPath);
        this.toDispose.pushAll([
            disposable_1.Disposable.create(function () { return _this.delegated.dispose(); }),
            disposable_1.Disposable.create(function () {
                var e_1, _a;
                try {
                    for (var _b = __values(_this.sessionId2contrib.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var sessionId = _c.value;
                        var contrib = _this.sessionId2contrib.get(sessionId);
                        contrib.terminateDebugSession(sessionId);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                _this.sessionId2contrib.clear();
            })
        ]);
    };
    PluginDebugService.prototype.registerDebugAdapterContribution = function (contrib) {
        var _this = this;
        var type = contrib.type;
        if (this.contributors.has(type)) {
            console.warn("Debugger with type '" + type + "' already registered.");
            return disposable_1.Disposable.NULL;
        }
        this.contributors.set(type, contrib);
        return disposable_1.Disposable.create(function () { return _this.unregisterDebugAdapterContribution(type); });
    };
    PluginDebugService.prototype.unregisterDebugAdapterContribution = function (debugType) {
        this.contributors.delete(debugType);
    };
    PluginDebugService.prototype.debugTypes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var debugTypes, _a, _b, _c, contribution, _d, _e, debugType;
            var e_2, _f, e_3, _g;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        _a = Set.bind;
                        return [4 /*yield*/, this.delegated.debugTypes()];
                    case 1:
                        debugTypes = new (_a.apply(Set, [void 0, _h.sent()]))();
                        try {
                            for (_b = __values(this.debuggers), _c = _b.next(); !_c.done; _c = _b.next()) {
                                contribution = _c.value;
                                debugTypes.add(contribution.type);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_f = _b.return)) _f.call(_b);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        try {
                            for (_d = __values(this.contributors.keys()), _e = _d.next(); !_e.done; _e = _d.next()) {
                                debugType = _e.value;
                                debugTypes.add(debugType);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_e && !_e.done && (_g = _d.return)) _g.call(_d);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        return [2 /*return*/, __spread(debugTypes)];
                }
            });
        });
    };
    PluginDebugService.prototype.provideDebugConfigurations = function (debugType, workspaceFolderUri) {
        return __awaiter(this, void 0, void 0, function () {
            var contributor;
            return __generator(this, function (_a) {
                contributor = this.contributors.get(debugType);
                if (contributor) {
                    return [2 /*return*/, contributor.provideDebugConfigurations && contributor.provideDebugConfigurations(workspaceFolderUri) || []];
                }
                else {
                    return [2 /*return*/, this.delegated.provideDebugConfigurations(debugType, workspaceFolderUri)];
                }
                return [2 /*return*/];
            });
        });
    };
    PluginDebugService.prototype.resolveDebugConfiguration = function (config, workspaceFolderUri) {
        return __awaiter(this, void 0, void 0, function () {
            var resolved, _a, _b, contributor, next, e_4, e_5_1;
            var e_5, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        resolved = config;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 8, 9, 10]);
                        _a = __values(this.contributors.values()), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 7];
                        contributor = _b.value;
                        if (!contributor) return [3 /*break*/, 6];
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, contributor.resolveDebugConfiguration(resolved, workspaceFolderUri)];
                    case 4:
                        next = _d.sent();
                        if (next) {
                            resolved = next;
                        }
                        else {
                            return [2 /*return*/, resolved];
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        e_4 = _d.sent();
                        console.error(e_4);
                        return [3 /*break*/, 6];
                    case 6:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_5_1 = _d.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_5) throw e_5.error; }
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/, this.delegated.resolveDebugConfiguration(resolved, workspaceFolderUri)];
                }
            });
        });
    };
    PluginDebugService.prototype.registerDebugger = function (contribution) {
        var _this = this;
        this.debuggers.push(contribution);
        return disposable_1.Disposable.create(function () {
            var index = _this.debuggers.indexOf(contribution);
            if (index !== -1) {
                _this.debuggers.splice(index, 1);
            }
        });
    };
    PluginDebugService.prototype.getDebuggersForLanguage = function (language) {
        return __awaiter(this, void 0, void 0, function () {
            var debuggers, _a, _b, contributor, languages, label, type;
            var e_6, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.delegated.getDebuggersForLanguage(language)];
                    case 1:
                        debuggers = _d.sent();
                        try {
                            for (_a = __values(this.debuggers), _b = _a.next(); !_b.done; _b = _a.next()) {
                                contributor = _b.value;
                                languages = contributor.languages;
                                if (languages && languages.indexOf(language) !== -1) {
                                    label = contributor.label, type = contributor.type;
                                    debuggers.push({ type: type, label: label || type });
                                }
                            }
                        }
                        catch (e_6_1) { e_6 = { error: e_6_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_6) throw e_6.error; }
                        }
                        return [2 /*return*/, debuggers];
                }
            });
        });
    };
    PluginDebugService.prototype.getSchemaAttributes = function (debugType) {
        return __awaiter(this, void 0, void 0, function () {
            var schemas, _a, _b, contribution;
            var e_7, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.delegated.getSchemaAttributes(debugType)];
                    case 1:
                        schemas = _d.sent();
                        try {
                            for (_a = __values(this.debuggers), _b = _a.next(); !_b.done; _b = _a.next()) {
                                contribution = _b.value;
                                if (contribution.configurationAttributes &&
                                    (contribution.type === debugType || contribution.type === '*' || debugType === '*')) {
                                    schemas = schemas.concat(contribution.configurationAttributes);
                                }
                            }
                        }
                        catch (e_7_1) { e_7 = { error: e_7_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_7) throw e_7.error; }
                        }
                        return [2 /*return*/, schemas];
                }
            });
        });
    };
    PluginDebugService.prototype.getConfigurationSnippets = function () {
        return __awaiter(this, void 0, void 0, function () {
            var snippets, _a, _b, contribution;
            var e_8, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.delegated.getConfigurationSnippets()];
                    case 1:
                        snippets = _d.sent();
                        try {
                            for (_a = __values(this.debuggers), _b = _a.next(); !_b.done; _b = _a.next()) {
                                contribution = _b.value;
                                if (contribution.configurationSnippets) {
                                    snippets = snippets.concat(contribution.configurationSnippets);
                                }
                            }
                        }
                        catch (e_8_1) { e_8 = { error: e_8_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_8) throw e_8.error; }
                        }
                        return [2 /*return*/, snippets];
                }
            });
        });
    };
    PluginDebugService.prototype.createDebugSession = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var contributor, sessionId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contributor = this.contributors.get(config.type);
                        if (!contributor) return [3 /*break*/, 2];
                        return [4 /*yield*/, contributor.createDebugSession(config)];
                    case 1:
                        sessionId = _a.sent();
                        this.sessionId2contrib.set(sessionId, contributor);
                        return [2 /*return*/, sessionId];
                    case 2: return [2 /*return*/, this.delegated.createDebugSession(config)];
                }
            });
        });
    };
    PluginDebugService.prototype.terminateDebugSession = function (sessionId) {
        return __awaiter(this, void 0, void 0, function () {
            var contributor;
            return __generator(this, function (_a) {
                contributor = this.sessionId2contrib.get(sessionId);
                if (contributor) {
                    this.sessionId2contrib.delete(sessionId);
                    return [2 /*return*/, contributor.terminateDebugSession(sessionId)];
                }
                else {
                    return [2 /*return*/, this.delegated.terminateDebugSession(sessionId)];
                }
                return [2 /*return*/];
            });
        });
    };
    PluginDebugService.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    __decorate([
        inversify_1.inject(ws_connection_provider_1.WebSocketConnectionProvider),
        __metadata("design:type", ws_connection_provider_1.WebSocketConnectionProvider)
    ], PluginDebugService.prototype, "connectionProvider", void 0);
    __decorate([
        inversify_1.inject(browser_1.WorkspaceService),
        __metadata("design:type", browser_1.WorkspaceService)
    ], PluginDebugService.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PluginDebugService.prototype, "init", null);
    PluginDebugService = __decorate([
        inversify_1.injectable()
    ], PluginDebugService);
    return PluginDebugService;
}());
exports.PluginDebugService = PluginDebugService;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/debug/plugin-debug-session-contribution-registry.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/debug/plugin-debug-session-contribution-registry.js ***!
  \*************************************************************************************************************/
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
exports.PluginDebugSessionContributionRegistry = void 0;
var debug_session_contribution_1 = __webpack_require__(/*! @theia/debug/lib/browser/debug-session-contribution */ "./node_modules/@theia/debug/lib/browser/debug-session-contribution.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var contribution_provider_1 = __webpack_require__(/*! @theia/core/lib/common/contribution-provider */ "./node_modules/@theia/core/lib/common/contribution-provider.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
/**
 * Plugin debug session contribution registry implementation with functionality
 * to register / unregister plugin contributions.
 */
var PluginDebugSessionContributionRegistry = /** @class */ (function () {
    function PluginDebugSessionContributionRegistry() {
        this.contribs = new Map();
    }
    PluginDebugSessionContributionRegistry.prototype.init = function () {
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
    PluginDebugSessionContributionRegistry.prototype.get = function (debugType) {
        return this.contribs.get(debugType);
    };
    PluginDebugSessionContributionRegistry.prototype.registerDebugSessionContribution = function (contrib) {
        var _this = this;
        var debugType = contrib.debugType;
        if (this.contribs.has(debugType)) {
            console.warn("Debug session contribution already registered for " + debugType);
            return disposable_1.Disposable.NULL;
        }
        this.contribs.set(debugType, contrib);
        return disposable_1.Disposable.create(function () { return _this.unregisterDebugSessionContribution(debugType); });
    };
    PluginDebugSessionContributionRegistry.prototype.unregisterDebugSessionContribution = function (debugType) {
        this.contribs.delete(debugType);
    };
    __decorate([
        inversify_1.inject(contribution_provider_1.ContributionProvider),
        inversify_1.named(debug_session_contribution_1.DebugSessionContribution),
        __metadata("design:type", Object)
    ], PluginDebugSessionContributionRegistry.prototype, "contributions", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PluginDebugSessionContributionRegistry.prototype, "init", null);
    PluginDebugSessionContributionRegistry = __decorate([
        inversify_1.injectable()
    ], PluginDebugSessionContributionRegistry);
    return PluginDebugSessionContributionRegistry;
}());
exports.PluginDebugSessionContributionRegistry = PluginDebugSessionContributionRegistry;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/debug/plugin-debug-session-factory.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/debug/plugin-debug-session-factory.js ***!
  \***********************************************************************************************/
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
exports.PluginDebugSessionFactory = exports.PluginDebugSession = void 0;
var debug_session_contribution_1 = __webpack_require__(/*! @theia/debug/lib/browser/debug-session-contribution */ "./node_modules/@theia/debug/lib/browser/debug-session-contribution.js");
var debug_session_1 = __webpack_require__(/*! @theia/debug/lib/browser/debug-session */ "./node_modules/@theia/debug/lib/browser/debug-session.js");
var debug_session_connection_1 = __webpack_require__(/*! @theia/debug/lib/browser/debug-session-connection */ "./node_modules/@theia/debug/lib/browser/debug-session-connection.js");
var PluginDebugSession = /** @class */ (function (_super) {
    __extends(PluginDebugSession, _super);
    function PluginDebugSession(id, options, connection, terminalServer, editorManager, breakpoints, labelProvider, messages, fileSystem, terminalOptionsExt) {
        var _this = _super.call(this, id, options, connection, terminalServer, editorManager, breakpoints, labelProvider, messages, fileSystem) || this;
        _this.id = id;
        _this.options = options;
        _this.connection = connection;
        _this.terminalServer = terminalServer;
        _this.editorManager = editorManager;
        _this.breakpoints = breakpoints;
        _this.labelProvider = labelProvider;
        _this.messages = messages;
        _this.fileSystem = fileSystem;
        _this.terminalOptionsExt = terminalOptionsExt;
        return _this;
    }
    PluginDebugSession.prototype.doCreateTerminal = function (terminalWidgetOptions) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                terminalWidgetOptions = Object.assign({}, terminalWidgetOptions, this.terminalOptionsExt);
                return [2 /*return*/, _super.prototype.doCreateTerminal.call(this, terminalWidgetOptions)];
            });
        });
    };
    return PluginDebugSession;
}(debug_session_1.DebugSession));
exports.PluginDebugSession = PluginDebugSession;
/**
 * Session factory for a client debug session that communicates with debug adapter contributed as plugin.
 * The main difference is to use a connection factory that creates [IWebSocket](#IWebSocket) over Rpc channel.
 */
var PluginDebugSessionFactory = /** @class */ (function (_super) {
    __extends(PluginDebugSessionFactory, _super);
    function PluginDebugSessionFactory(terminalService, editorManager, breakpoints, labelProvider, messages, outputChannelManager, debugPreferences, connectionFactory, fileSystem, terminalOptionsExt) {
        var _this = _super.call(this) || this;
        _this.terminalService = terminalService;
        _this.editorManager = editorManager;
        _this.breakpoints = breakpoints;
        _this.labelProvider = labelProvider;
        _this.messages = messages;
        _this.outputChannelManager = outputChannelManager;
        _this.debugPreferences = debugPreferences;
        _this.connectionFactory = connectionFactory;
        _this.fileSystem = fileSystem;
        _this.terminalOptionsExt = terminalOptionsExt;
        return _this;
    }
    PluginDebugSessionFactory.prototype.get = function (sessionId, options) {
        var connection = new debug_session_connection_1.DebugSessionConnection(sessionId, this.connectionFactory, this.getTraceOutputChannel());
        return new PluginDebugSession(sessionId, options, connection, this.terminalService, this.editorManager, this.breakpoints, this.labelProvider, this.messages, this.fileSystem, this.terminalOptionsExt);
    };
    return PluginDebugSessionFactory;
}(debug_session_contribution_1.DefaultDebugSessionFactory));
exports.PluginDebugSessionFactory = PluginDebugSessionFactory;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/decorations/decorations-main.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/decorations/decorations-main.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
exports.DecorationsMainImpl = void 0;
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
var plugin_api_rpc_1 = __webpack_require__(/*! ../../../common/plugin-api-rpc */ "./node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var scm_decorations_service_1 = __webpack_require__(/*! @theia/scm/lib/browser/decorations/scm-decorations-service */ "./node_modules/@theia/scm/lib/browser/decorations/scm-decorations-service.js");
var DecorationsMainImpl = /** @class */ (function () {
    function DecorationsMainImpl(rpc, container) {
        this.emitter = new event_1.Emitter();
        this.toDispose = new disposable_1.DisposableCollection();
        // TODO: why it is never used?
        this.providers = new Map();
        this.proxy = rpc.getProxy(plugin_api_rpc_1.MAIN_RPC_CONTEXT.DECORATIONS_EXT);
        this.scmDecorationsService = container.get(scm_decorations_service_1.ScmDecorationsService);
    }
    DecorationsMainImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    DecorationsMainImpl.prototype.$dispose = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // TODO: What about removing decorations when a provider is gone?
                this.providers.delete(id);
                return [2 /*return*/];
            });
        });
    };
    DecorationsMainImpl.prototype.$registerDecorationProvider = function (id, provider) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.providers.set(id, provider);
                this.toDispose.push(disposable_1.Disposable.create(function () { return _this.$dispose(id); }));
                return [2 /*return*/, id];
            });
        });
    };
    DecorationsMainImpl.prototype.$fireDidChangeDecorations = function (id, arg) {
        return __awaiter(this, void 0, void 0, function () {
            var result, arg_1, arg_1_1, uri, data, e_1_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!Array.isArray(arg)) return [3 /*break*/, 9];
                        result = new Map();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        arg_1 = __values(arg), arg_1_1 = arg_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!arg_1_1.done) return [3 /*break*/, 5];
                        uri = arg_1_1.value;
                        return [4 /*yield*/, this.proxy.$provideDecoration(id, uri)];
                    case 3:
                        data = _b.sent();
                        if (data) {
                            result.set(uri, data);
                        }
                        _b.label = 4;
                    case 4:
                        arg_1_1 = arg_1.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (arg_1_1 && !arg_1_1.done && (_a = arg_1.return)) _a.call(arg_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8:
                        this.scmDecorationsService.fireNavigatorDecorationsChanged(result);
                        return [3 /*break*/, 10];
                    case 9:
                        if (arg) {
                            // TODO: why to make a remote call instead of sending decoration to `$fireDidChangeDecorations` in first place?
                            this.proxy.$provideDecoration(id, arg);
                        }
                        _b.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    return DecorationsMainImpl;
}());
exports.DecorationsMainImpl = DecorationsMainImpl;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/dialogs-main.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/dialogs-main.js ***!
  \*************************************************************************/
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
exports.DialogsMainImpl = void 0;
var browser_1 = __webpack_require__(/*! @theia/filesystem/lib/browser */ "./node_modules/@theia/filesystem/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/workspace/lib/browser */ "./node_modules/@theia/workspace/lib/browser/index.js");
var common_1 = __webpack_require__(/*! @theia/filesystem/lib/common */ "./node_modules/@theia/filesystem/lib/common/index.js");
var selection_1 = __webpack_require__(/*! @theia/core/lib/common/selection */ "./node_modules/@theia/core/lib/common/selection.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var file_upload_service_1 = __webpack_require__(/*! @theia/filesystem/lib/browser/file-upload-service */ "./node_modules/@theia/filesystem/lib/browser/file-upload-service.js");
var DialogsMainImpl = /** @class */ (function () {
    function DialogsMainImpl(rpc, container) {
        this.workspaceService = container.get(browser_2.WorkspaceService);
        this.fileSystem = container.get(common_1.FileSystem);
        this.openFileDialogFactory = container.get(browser_1.OpenFileDialogFactory);
        this.saveFileDialogFactory = container.get(browser_1.SaveFileDialogFactory);
        this.uploadService = container.get(file_upload_service_1.FileUploadService);
    }
    DialogsMainImpl.prototype.getRootUri = function (defaultUri) {
        return __awaiter(this, void 0, void 0, function () {
            var rootStat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!defaultUri) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fileSystem.getFileStat(defaultUri)];
                    case 1:
                        rootStat = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!(rootStat && !rootStat.isDirectory || !rootStat)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.fileSystem.getFileStat(new uri_1.default(defaultUri).parent.toString())];
                    case 3:
                        rootStat = _a.sent();
                        _a.label = 4;
                    case 4:
                        if (!!rootStat) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.workspaceService.roots];
                    case 5:
                        rootStat = (_a.sent())[0];
                        _a.label = 6;
                    case 6:
                        if (!!rootStat) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.fileSystem.getCurrentUserHome()];
                    case 7:
                        rootStat = _a.sent();
                        _a.label = 8;
                    case 8: return [2 /*return*/, rootStat];
                }
            });
        });
    };
    DialogsMainImpl.prototype.$showOpenDialog = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var rootStat, rootNode, canSelectFiles, canSelectFolders, title, dialogProps, dialog, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRootUri(options.defaultUri ? options.defaultUri : undefined)];
                    case 1:
                        rootStat = _a.sent();
                        // Fail if root not fount
                        if (!rootStat) {
                            throw new Error('Unable to find the rootStat');
                        }
                        rootNode = browser_1.DirNode.createRoot(rootStat);
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        canSelectFiles = typeof options.canSelectFiles === 'boolean' ? options.canSelectFiles : true;
                        canSelectFolders = typeof options.canSelectFolders === 'boolean' ? options.canSelectFolders : true;
                        title = void 0;
                        if (canSelectFiles && canSelectFolders) {
                            title = 'Open';
                        }
                        else {
                            if (canSelectFiles) {
                                title = 'Open File';
                            }
                            else {
                                title = 'Open Folder';
                            }
                            if (options.canSelectMany) {
                                title += '(s)';
                            }
                        }
                        dialogProps = {
                            title: title,
                            openLabel: options.openLabel,
                            canSelectFiles: options.canSelectFiles,
                            canSelectFolders: options.canSelectFolders,
                            canSelectMany: options.canSelectMany,
                            filters: options.filters
                        };
                        dialog = this.openFileDialogFactory(dialogProps);
                        dialog.model.navigateTo(rootNode);
                        return [4 /*yield*/, dialog.open()];
                    case 3:
                        result = _a.sent();
                        // Return the result
                        return [2 /*return*/, selection_1.UriSelection.getUris(result).map(function (uri) { return uri.path.toString(); })];
                    case 4:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, undefined];
                }
            });
        });
    };
    DialogsMainImpl.prototype.$showSaveDialog = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var rootStat, rootNode, fileNameValue, defaultURIStat, dialogProps, dialog, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRootUri(options.defaultUri ? options.defaultUri : undefined)];
                    case 1:
                        rootStat = _a.sent();
                        // Fail if root not found
                        if (!rootStat) {
                            throw new Error('Unable to find the rootStat');
                        }
                        rootNode = browser_1.DirNode.createRoot(rootStat);
                        fileNameValue = '';
                        if (!options.defaultUri) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.fileSystem.getFileStat(options.defaultUri)];
                    case 2:
                        defaultURIStat = _a.sent();
                        if (defaultURIStat && !defaultURIStat.isDirectory || !defaultURIStat) {
                            fileNameValue = new uri_1.default(options.defaultUri).path.base;
                        }
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        dialogProps = {
                            title: 'Save',
                            saveLabel: options.saveLabel,
                            filters: options.filters,
                            inputValue: fileNameValue
                        };
                        dialog = this.saveFileDialogFactory(dialogProps);
                        dialog.model.navigateTo(rootNode);
                        return [4 /*yield*/, dialog.open()];
                    case 4:
                        result = _a.sent();
                        // Return the result
                        if (result) {
                            return [2 /*return*/, result.path.toString()];
                        }
                        return [2 /*return*/, undefined];
                    case 5:
                        error_2 = _a.sent();
                        console.error(error_2);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/, undefined];
                }
            });
        });
    };
    DialogsMainImpl.prototype.$showUploadDialog = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var rootStat, uploadResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRootUri(options.defaultUri)];
                    case 1:
                        rootStat = _a.sent();
                        // Fail if root not fount
                        if (!rootStat) {
                            throw new Error('Failed to resolve base directory where files should be uploaded');
                        }
                        return [4 /*yield*/, this.uploadService.upload(rootStat.uri)];
                    case 2:
                        uploadResult = _a.sent();
                        if (uploadResult) {
                            return [2 /*return*/, uploadResult.uploaded];
                        }
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    return DialogsMainImpl;
}());
exports.DialogsMainImpl = DialogsMainImpl;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/dialogs/modal-notification.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/dialogs/modal-notification.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
exports.ModalNotification = exports.MessageType = void 0;
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
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var dialogs_1 = __webpack_require__(/*! @theia/core/lib/browser/dialogs */ "./node_modules/@theia/core/lib/browser/dialogs.js");
__webpack_require__(/*! ../../../../src/main/browser/dialogs/style/modal-notification.css */ "./node_modules/@theia/plugin-ext/src/main/browser/dialogs/style/modal-notification.css");
var MessageType;
(function (MessageType) {
    MessageType["Error"] = "error";
    MessageType["Warning"] = "warning";
    MessageType["Info"] = "info";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var NOTIFICATION = 'modal-Notification';
var ICON = 'icon';
var TEXT = 'text';
var ModalNotification = /** @class */ (function (_super) {
    __extends(ModalNotification, _super);
    function ModalNotification() {
        return _super.call(this, { title: 'Theia' }) || this;
    }
    ModalNotification.prototype.onCloseRequest = function (msg) {
        this.actionTitle = undefined;
        this.accept();
    };
    Object.defineProperty(ModalNotification.prototype, "value", {
        get: function () {
            return this.actionTitle;
        },
        enumerable: false,
        configurable: true
    });
    ModalNotification.prototype.showDialog = function (messageType, text, actions) {
        this.contentNode.appendChild(this.createMessageNode(messageType, text, actions));
        return this.open();
    };
    ModalNotification.prototype.createMessageNode = function (messageType, text, actions) {
        var _this = this;
        var messageNode = document.createElement('div');
        messageNode.classList.add(NOTIFICATION);
        var iconContainer = messageNode.appendChild(document.createElement('div'));
        iconContainer.classList.add(ICON);
        var iconElement = iconContainer.appendChild(document.createElement('i'));
        iconElement.classList.add('fa', this.toIconClass(messageType), 'fa-fw', messageType.toString());
        var textContainer = messageNode.appendChild(document.createElement('div'));
        textContainer.classList.add(TEXT);
        var textElement = textContainer.appendChild(document.createElement('p'));
        textElement.textContent = text;
        actions.forEach(function (action) {
            var button = _this.createButton(action.title);
            button.classList.add('main');
            _this.controlPanel.appendChild(button);
            _this.addKeyListener(button, browser_1.Key.ENTER, function () {
                _this.actionTitle = action.title;
                _this.accept();
            }, 'click');
        });
        if (!actions.some(function (action) { return action.isCloseAffordance === true; })) {
            this.appendCloseButton('close');
        }
        return messageNode;
    };
    ModalNotification.prototype.toIconClass = function (icon) {
        if (icon === MessageType.Error) {
            return 'fa-times-circle';
        }
        if (icon === MessageType.Warning) {
            return 'fa-warning';
        }
        return 'fa-info-circle';
    };
    ModalNotification = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], ModalNotification);
    return ModalNotification;
}(dialogs_1.AbstractDialog));
exports.ModalNotification = ModalNotification;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/editors-and-documents-main.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/editors-and-documents-main.js ***!
  \***************************************************************************************/
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
exports.EditorsAndDocumentsMain = void 0;
var plugin_api_rpc_1 = __webpack_require__(/*! ../../common/plugin-api-rpc */ "./node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var text_editor_model_service_1 = __webpack_require__(/*! ./text-editor-model-service */ "./node_modules/@theia/plugin-ext/lib/main/browser/text-editor-model-service.js");
var monaco_editor_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-editor */ "./node_modules/@theia/monaco/lib/browser/monaco-editor.js");
var text_editor_main_1 = __webpack_require__(/*! ./text-editor-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/text-editor-main.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var core_2 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var EditorsAndDocumentsMain = /** @class */ (function () {
    function EditorsAndDocumentsMain(rpc, container) {
        var _this = this;
        this.textEditors = new Map();
        this.onTextEditorAddEmitter = new core_1.Emitter();
        this.onTextEditorRemoveEmitter = new core_1.Emitter();
        this.onDocumentAddEmitter = new core_1.Emitter();
        this.onDocumentRemoveEmitter = new core_1.Emitter();
        this.onTextEditorAdd = this.onTextEditorAddEmitter.event;
        this.onTextEditorRemove = this.onTextEditorRemoveEmitter.event;
        this.onDocumentAdd = this.onDocumentAddEmitter.event;
        this.onDocumentRemove = this.onDocumentRemoveEmitter.event;
        this.toDispose = new core_2.DisposableCollection(disposable_1.Disposable.create(function () { return _this.textEditors.clear(); }));
        this.proxy = rpc.getProxy(plugin_api_rpc_1.MAIN_RPC_CONTEXT.EDITORS_AND_DOCUMENTS_EXT);
        var editorService = container.get(browser_1.EditorManager);
        this.modelService = container.get(text_editor_model_service_1.EditorModelService);
        this.stateComputer = new EditorAndDocumentStateComputer(function (d) { return _this.onDelta(d); }, editorService, this.modelService);
        this.toDispose.push(this.stateComputer);
        this.toDispose.push(this.onTextEditorAddEmitter);
        this.toDispose.push(this.onTextEditorRemoveEmitter);
        this.toDispose.push(this.onDocumentAddEmitter);
        this.toDispose.push(this.onDocumentRemoveEmitter);
    }
    EditorsAndDocumentsMain.prototype.listen = function () {
        this.stateComputer.listen();
    };
    EditorsAndDocumentsMain.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    EditorsAndDocumentsMain.prototype.onDelta = function (delta) {
        var e_1, _a, e_2, _b;
        var _this = this;
        var removedEditors = new Array();
        var addedEditors = new Array();
        var removedDocuments = delta.removedDocuments.map(function (d) { return d.textEditorModel.uri; });
        try {
            for (var _c = __values(delta.addedEditors), _d = _c.next(); !_d.done; _d = _c.next()) {
                var editor = _d.value;
                var textEditorMain = new text_editor_main_1.TextEditorMain(editor.id, editor.editor.getControl().getModel(), editor.editor);
                this.textEditors.set(editor.id, textEditorMain);
                this.toDispose.push(textEditorMain);
                addedEditors.push(textEditorMain);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var _e = __values(delta.removedEditors), _f = _e.next(); !_f.done; _f = _e.next()) {
                var id = _f.value.id;
                var textEditorMain = this.textEditors.get(id);
                if (textEditorMain) {
                    textEditorMain.dispose();
                    this.textEditors.delete(id);
                    removedEditors.push(id);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var deltaExt = {};
        var empty = true;
        if (delta.newActiveEditor !== undefined) {
            empty = false;
            deltaExt.newActiveEditor = delta.newActiveEditor;
        }
        if (removedDocuments.length > 0) {
            empty = false;
            deltaExt.removedDocuments = removedDocuments;
        }
        if (removedEditors.length > 0) {
            empty = false;
            deltaExt.removedEditors = removedEditors;
        }
        if (delta.addedDocuments.length > 0) {
            empty = false;
            deltaExt.addedDocuments = delta.addedDocuments.map(function (d) { return _this.toModelAddData(d); });
        }
        if (delta.addedEditors.length > 0) {
            empty = false;
            deltaExt.addedEditors = addedEditors.map(function (e) { return _this.toTextEditorAddData(e); });
        }
        if (!empty) {
            this.proxy.$acceptEditorsAndDocumentsDelta(deltaExt);
            this.onDocumentRemoveEmitter.fire(removedDocuments);
            this.onDocumentAddEmitter.fire(delta.addedDocuments);
            this.onTextEditorRemoveEmitter.fire(removedEditors);
            this.onTextEditorAddEmitter.fire(addedEditors);
        }
    };
    EditorsAndDocumentsMain.prototype.toModelAddData = function (model) {
        return {
            uri: model.textEditorModel.uri,
            versionId: model.textEditorModel.getVersionId(),
            lines: model.textEditorModel.getLinesContent(),
            EOL: model.textEditorModel.getEOL(),
            modeId: model.languageId,
            isDirty: model.dirty
        };
    };
    EditorsAndDocumentsMain.prototype.toTextEditorAddData = function (textEditor) {
        var properties = textEditor.getProperties();
        return {
            id: textEditor.getId(),
            documentUri: textEditor.getModel().uri,
            options: properties.options,
            selections: properties.selections,
            visibleRanges: properties.visibleRanges,
            editorPosition: this.findEditorPosition(textEditor)
        };
    };
    EditorsAndDocumentsMain.prototype.findEditorPosition = function (editor) {
        return plugin_api_rpc_1.EditorPosition.ONE; // TODO: fix this when Theia has support splitting editors
    };
    EditorsAndDocumentsMain.prototype.getEditor = function (id) {
        return this.textEditors.get(id);
    };
    EditorsAndDocumentsMain.prototype.saveAll = function (includeUntitled) {
        return this.modelService.saveAll(includeUntitled);
    };
    return EditorsAndDocumentsMain;
}());
exports.EditorsAndDocumentsMain = EditorsAndDocumentsMain;
var EditorAndDocumentStateComputer = /** @class */ (function () {
    function EditorAndDocumentStateComputer(callback, editorService, modelService) {
        var _this = this;
        this.callback = callback;
        this.editorService = editorService;
        this.modelService = modelService;
        this.editors = new Map();
        this.toDispose = new core_2.DisposableCollection(disposable_1.Disposable.create(function () { return _this.currentState = undefined; }));
    }
    EditorAndDocumentStateComputer.prototype.listen = function () {
        var e_3, _a;
        var _this = this;
        if (this.toDispose.disposed) {
            return;
        }
        this.toDispose.push(this.editorService.onCreated(function (widget) {
            _this.onTextEditorAdd(widget);
            _this.update();
        }));
        this.toDispose.push(this.editorService.onCurrentEditorChanged(function () { return _this.update(); }));
        this.toDispose.push(this.modelService.onModelAdded(this.onModelAdded, this));
        this.toDispose.push(this.modelService.onModelRemoved(function () { return _this.update(); }));
        try {
            for (var _b = __values(this.editorService.all), _c = _b.next(); !_c.done; _c = _b.next()) {
                var widget = _c.value;
                this.onTextEditorAdd(widget);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.update();
    };
    EditorAndDocumentStateComputer.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    EditorAndDocumentStateComputer.prototype.onModelAdded = function (model) {
        if (!this.currentState) {
            this.update();
            return;
        }
        this.currentState = new EditorAndDocumentState(this.currentState.documents.add(model), this.currentState.editors, this.currentState.activeEditor);
        this.callback(new EditorAndDocumentStateDelta([], [model], [], [], undefined, undefined));
    };
    EditorAndDocumentStateComputer.prototype.onTextEditorAdd = function (widget) {
        var _this = this;
        var editor = monaco_editor_1.MonacoEditor.get(widget);
        if (!editor) {
            return;
        }
        var id = editor.getControl().getId();
        var toDispose = new core_2.DisposableCollection(editor.onDispose(function () { return _this.onTextEditorRemove(editor); }), disposable_1.Disposable.create(function () { return _this.editors.delete(id); }));
        this.editors.set(id, toDispose);
        this.toDispose.push(toDispose);
    };
    EditorAndDocumentStateComputer.prototype.onTextEditorRemove = function (e) {
        var toDispose = this.editors.get(e.getControl().getId());
        if (toDispose) {
            toDispose.dispose();
            this.update();
        }
    };
    EditorAndDocumentStateComputer.prototype.update = function () {
        var e_4, _a, e_5, _b;
        var models = new Set();
        try {
            for (var _c = __values(this.modelService.getModels()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var model = _d.value;
                models.add(model);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_4) throw e_4.error; }
        }
        var activeId = null;
        var activeEditor = monaco_editor_1.MonacoEditor.getCurrent(this.editorService);
        var editors = new Map();
        try {
            for (var _e = __values(this.editorService.all), _f = _e.next(); !_f.done; _f = _e.next()) {
                var widget = _f.value;
                var editor = monaco_editor_1.MonacoEditor.get(widget);
                // VS Code tracks only visibles widgets
                if (!editor || !widget.isVisible) {
                    continue;
                }
                var model = editor.getControl().getModel();
                if (model && !model.isDisposed()) {
                    var editorSnapshot = new EditorSnapshot(editor);
                    editors.set(editorSnapshot.id, editorSnapshot);
                    if (activeEditor === editor) {
                        activeId = editorSnapshot.id;
                    }
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_5) throw e_5.error; }
        }
        var newState = new EditorAndDocumentState(models, editors, activeId);
        var delta = EditorAndDocumentState.compute(this.currentState, newState);
        if (!delta.isEmpty) {
            this.currentState = newState;
            this.callback(delta);
        }
    };
    return EditorAndDocumentStateComputer;
}());
var EditorAndDocumentStateDelta = /** @class */ (function () {
    function EditorAndDocumentStateDelta(removedDocuments, addedDocuments, removedEditors, addedEditors, oldActiveEditor, newActiveEditor) {
        this.removedDocuments = removedDocuments;
        this.addedDocuments = addedDocuments;
        this.removedEditors = removedEditors;
        this.addedEditors = addedEditors;
        this.oldActiveEditor = oldActiveEditor;
        this.newActiveEditor = newActiveEditor;
        this.isEmpty = this.removedDocuments.length === 0
            && this.addedDocuments.length === 0
            && this.addedEditors.length === 0
            && this.removedEditors.length === 0
            && this.newActiveEditor === this.oldActiveEditor;
    }
    return EditorAndDocumentStateDelta;
}());
var EditorAndDocumentState = /** @class */ (function () {
    function EditorAndDocumentState(documents, editors, activeEditor) {
        this.documents = documents;
        this.editors = editors;
        this.activeEditor = activeEditor;
    }
    EditorAndDocumentState.compute = function (before, after) {
        if (!before) {
            return new EditorAndDocumentStateDelta([], Array.from(after.documents), [], Array.from(after.editors.values()), undefined, after.activeEditor);
        }
        var documentDelta = Delta.ofSets(before.documents, after.documents);
        var editorDelta = Delta.ofMaps(before.editors, after.editors);
        var oldActiveEditor = before.activeEditor !== after.activeEditor ? before.activeEditor : undefined;
        var newActiveEditor = before.activeEditor !== after.activeEditor ? after.activeEditor : undefined;
        return new EditorAndDocumentStateDelta(documentDelta.removed, documentDelta.added, editorDelta.removed, editorDelta.added, oldActiveEditor, newActiveEditor);
    };
    return EditorAndDocumentState;
}());
var EditorSnapshot = /** @class */ (function () {
    function EditorSnapshot(editor) {
        this.editor = editor;
        this.id = editor.getControl().getId() + "," + editor.getControl().getModel().id;
    }
    return EditorSnapshot;
}());
var Delta;
(function (Delta) {
    function ofSets(before, after) {
        var removed = [];
        var added = [];
        before.forEach(function (element) {
            if (!after.has(element)) {
                removed.push(element);
            }
        });
        after.forEach(function (element) {
            if (!before.has(element)) {
                added.push(element);
            }
        });
        return { removed: removed, added: added };
    }
    Delta.ofSets = ofSets;
    function ofMaps(before, after) {
        var removed = [];
        var added = [];
        before.forEach(function (value, index) {
            if (!after.has(index)) {
                removed.push(value);
            }
        });
        after.forEach(function (value, index) {
            if (!before.has(index)) {
                added.push(value);
            }
        });
        return { removed: removed, added: added };
    }
    Delta.ofMaps = ofMaps;
})(Delta || (Delta = {}));


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/env-main.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/env-main.js ***!
  \*********************************************************************/
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
exports.getQueryParameters = exports.EnvMainImpl = void 0;
var env_variables_1 = __webpack_require__(/*! @theia/core/lib/common/env-variables */ "./node_modules/@theia/core/lib/common/env-variables/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var types_impl_1 = __webpack_require__(/*! ../../plugin/types-impl */ "./node_modules/@theia/plugin-ext/lib/plugin/types-impl.js");
var EnvMainImpl = /** @class */ (function () {
    function EnvMainImpl(rpc, container) {
        this.envVariableServer = container.get(env_variables_1.EnvVariablesServer);
    }
    EnvMainImpl.prototype.$getEnvVariable = function (envVarName) {
        return this.envVariableServer.getValue(envVarName).then(function (result) { return result ? result.value : undefined; });
    };
    EnvMainImpl.prototype.$getClientOperatingSystem = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (core_1.isWindows) {
                    return [2 /*return*/, types_impl_1.OperatingSystem.Windows];
                }
                if (core_1.isOSX) {
                    return [2 /*return*/, types_impl_1.OperatingSystem.OSX];
                }
                return [2 /*return*/, types_impl_1.OperatingSystem.Linux];
            });
        });
    };
    return EnvMainImpl;
}());
exports.EnvMainImpl = EnvMainImpl;
/**
 * Returns query parameters from current page.
 */
function getQueryParameters() {
    var e_1, _a;
    var queryParameters = {};
    if (window.location.search !== '') {
        var queryParametersString = window.location.search.substr(1); // remove question mark
        var params = queryParametersString.split('&');
        try {
            for (var params_1 = __values(params), params_1_1 = params_1.next(); !params_1_1.done; params_1_1 = params_1.next()) {
                var pair = params_1_1.value;
                if (pair === '') {
                    continue;
                }
                var keyValue = pair.split('=');
                var key = keyValue[0];
                var value = keyValue[1] ? keyValue[1] : '';
                try {
                    key = decodeURIComponent(key);
                    if (value !== '') {
                        value = decodeURIComponent(value);
                    }
                }
                catch (error) {
                    // skip malformed URI sequence
                    continue;
                }
                var existedValue = queryParameters[key];
                if (existedValue) {
                    if (existedValue instanceof Array) {
                        existedValue.push(value);
                    }
                    else {
                        // existed value is string
                        queryParameters[key] = [existedValue, value];
                    }
                }
                else {
                    queryParameters[key] = value;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (params_1_1 && !params_1_1.done && (_a = params_1.return)) _a.call(params_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    return queryParameters;
}
exports.getQueryParameters = getQueryParameters;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/file-system-main.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/file-system-main.js ***!
  \*****************************************************************************/
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
exports.FSResource = exports.FSResourceResolver = exports.FileSystemMainImpl = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var vscode_uri_1 = __webpack_require__(/*! vscode-uri */ "./node_modules/vscode-uri/lib/esm/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var resource_1 = __webpack_require__(/*! @theia/core/lib/common/resource */ "./node_modules/@theia/core/lib/common/resource.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var plugin_api_rpc_1 = __webpack_require__(/*! ../../common/plugin-api-rpc */ "./node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js");
var FileSystemMainImpl = /** @class */ (function () {
    function FileSystemMainImpl(rpc, container) {
        this.providers = new Map();
        this.providersBySchema = new Map();
        this.toDispose = new core_1.DisposableCollection();
        this.proxy = rpc.getProxy(plugin_api_rpc_1.MAIN_RPC_CONTEXT.FILE_SYSTEM_EXT);
        this.resourceResolver = container.get(FSResourceResolver);
        this.resourceProvider = container.get(resource_1.ResourceProvider);
    }
    FileSystemMainImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    FileSystemMainImpl.prototype.$registerFileSystemProvider = function (handle, scheme) {
        return __awaiter(this, void 0, void 0, function () {
            var toDispose;
            var _this = this;
            return __generator(this, function (_a) {
                toDispose = new core_1.DisposableCollection(this.resourceResolver.registerResourceProvider(handle, scheme, this.proxy), core_1.Disposable.create(function () {
                    _this.providers.delete(handle);
                    _this.providersBySchema.delete(scheme);
                }));
                this.providers.set(handle, toDispose);
                if (this.providersBySchema.has(scheme)) {
                    throw new Error("Resource Provider for scheme '" + scheme + "' is already registered");
                }
                this.providersBySchema.set(scheme, handle);
                this.toDispose.push(toDispose);
                return [2 /*return*/];
            });
        });
    };
    FileSystemMainImpl.prototype.$unregisterProvider = function (handle) {
        var disposable = this.providers.get(handle);
        if (disposable) {
            disposable.dispose();
        }
    };
    FileSystemMainImpl.prototype.getHandle = function (uri) {
        var handle = this.providersBySchema.get(uri.scheme);
        if (handle === undefined) {
            throw new Error("'No available file system provider for schema " + uri.scheme);
        }
        return handle;
    };
    // currently only support registered file system providers (and not real file system)
    FileSystemMainImpl.prototype.$stat = function (uriComponents) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, handle;
            return __generator(this, function (_a) {
                uri = vscode_uri_1.URI.revive(uriComponents);
                handle = this.getHandle(uri);
                return [2 /*return*/, this.proxy.$stat(handle, uri)];
            });
        });
    };
    // currently only support registered file system providers (and not real file system)
    FileSystemMainImpl.prototype.$readDirectory = function (uriComponents) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, handle;
            return __generator(this, function (_a) {
                uri = vscode_uri_1.URI.revive(uriComponents);
                handle = this.getHandle(uri);
                return [2 /*return*/, this.proxy.$readDirectory(handle, uri)];
            });
        });
    };
    // currently only support registered file system providers (and not real file system)
    FileSystemMainImpl.prototype.$createDirectory = function (uriComponents) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, handle;
            return __generator(this, function (_a) {
                uri = vscode_uri_1.URI.revive(uriComponents);
                handle = this.getHandle(uri);
                return [2 /*return*/, this.proxy.$createDirectory(handle, uri)];
            });
        });
    };
    FileSystemMainImpl.prototype.$readFile = function (uriComponents) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, resource;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = vscode_uri_1.URI.revive(uriComponents);
                        return [4 /*yield*/, this.resourceProvider(new uri_1.default(uri))];
                    case 1:
                        resource = _a.sent();
                        return [2 /*return*/, resource.readContents()];
                }
            });
        });
    };
    FileSystemMainImpl.prototype.$writeFile = function (uriComponents, content) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, resource;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = vscode_uri_1.URI.revive(uriComponents);
                        return [4 /*yield*/, this.resourceProvider(new uri_1.default(uri))];
                    case 1:
                        resource = _a.sent();
                        if (!resource.saveContents) {
                            throw new Error("'No write operation available on the resource for URI " + uriComponents);
                        }
                        return [2 /*return*/, resource.saveContents(content)];
                }
            });
        });
    };
    // currently only support registered file system providers (and not real file system)
    FileSystemMainImpl.prototype.$delete = function (uriComponents, options) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, handle;
            return __generator(this, function (_a) {
                uri = vscode_uri_1.URI.revive(uriComponents);
                handle = this.getHandle(uri);
                return [2 /*return*/, this.proxy.$delete(handle, uri, options)];
            });
        });
    };
    // currently only support registered file system providers (and not real file system)
    FileSystemMainImpl.prototype.$rename = function (source, target, options) {
        return __awaiter(this, void 0, void 0, function () {
            var sourceUri, targetUri, sourceHandle;
            return __generator(this, function (_a) {
                sourceUri = vscode_uri_1.URI.revive(source);
                targetUri = vscode_uri_1.URI.revive(target);
                sourceHandle = this.getHandle(sourceUri);
                if (sourceHandle !== this.getHandle(targetUri)) {
                    throw new Error("'No matching file system provider for " + sourceUri + " and " + targetUri);
                }
                return [2 /*return*/, this.proxy.$rename(sourceHandle, sourceUri, targetUri, options)];
            });
        });
    };
    // currently only support registered file system providers (and not real file system)
    FileSystemMainImpl.prototype.$copy = function (source, target, options) {
        return __awaiter(this, void 0, void 0, function () {
            var sourceUri, targetUri, sourceHandle;
            return __generator(this, function (_a) {
                sourceUri = vscode_uri_1.URI.revive(source);
                targetUri = vscode_uri_1.URI.revive(target);
                sourceHandle = this.getHandle(sourceUri);
                if (sourceHandle !== this.getHandle(targetUri)) {
                    throw new Error("'No matching file system provider for " + sourceUri + " and " + targetUri);
                }
                return [2 /*return*/, this.proxy.$copy(sourceHandle, sourceUri, targetUri, options)];
            });
        });
    };
    return FileSystemMainImpl;
}());
exports.FileSystemMainImpl = FileSystemMainImpl;
var FSResourceResolver = /** @class */ (function () {
    function FSResourceResolver() {
        // resource providers by schemas
        this.providers = new Map();
        this.toDispose = new core_1.DisposableCollection();
    }
    FSResourceResolver.prototype.resolve = function (uri) {
        var provider = this.providers.get(uri.scheme);
        if (provider) {
            return provider.create(uri);
        }
        throw new Error("Unable to find a Resource Provider for scheme '" + uri.scheme + "'");
    };
    FSResourceResolver.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    FSResourceResolver.prototype.registerResourceProvider = function (handle, scheme, proxy) {
        var _this = this;
        if (this.providers.has(scheme)) {
            throw new Error("Resource Provider for scheme '" + scheme + "' is already registered");
        }
        var provider = new FSResourceProvider(handle, proxy);
        this.providers.set(scheme, provider);
        var disposable = core_1.Disposable.create(function () {
            _this.providers.delete(scheme);
        });
        this.toDispose.push(disposable);
        return disposable;
    };
    FSResourceResolver = __decorate([
        inversify_1.injectable()
    ], FSResourceResolver);
    return FSResourceResolver;
}());
exports.FSResourceResolver = FSResourceResolver;
var FSResourceProvider = /** @class */ (function () {
    function FSResourceProvider(handle, proxy) {
        this.handle = handle;
        this.proxy = proxy;
    }
    FSResourceProvider.prototype.create = function (uri) {
        return new FSResource(this.handle, uri, this.proxy);
    };
    return FSResourceProvider;
}());
/** Resource that delegates reading/saving a content to a plugin's FileSystemProvider. */
var FSResource = /** @class */ (function () {
    function FSResource(handle, uri, proxy) {
        this.handle = handle;
        this.uri = uri;
        this.proxy = proxy;
    }
    FSResource.prototype.readContents = function (options) {
        return this.proxy.$readFile(this.handle, vscode_uri_1.URI.parse(this.uri.toString()), options);
    };
    FSResource.prototype.saveContents = function (content, options) {
        return this.proxy.$writeFile(this.handle, vscode_uri_1.URI.parse(this.uri.toString()), content, options);
    };
    FSResource.prototype.dispose = function () { };
    return FSResource;
}());
exports.FSResource = FSResource;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/in-plugin-filesystem-watcher-manager.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/in-plugin-filesystem-watcher-manager.js ***!
  \*************************************************************************************************/
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
exports.InPluginFileSystemWatcherManager = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var language_selector_1 = __webpack_require__(/*! @theia/languages/lib/common/language-selector */ "./node_modules/@theia/languages/lib/common/language-selector/index.js");
var filesystem_watcher_1 = __webpack_require__(/*! @theia/filesystem/lib/browser/filesystem-watcher */ "./node_modules/@theia/filesystem/lib/browser/filesystem-watcher.js");
var types_impl_1 = __webpack_require__(/*! ../../plugin/types-impl */ "./node_modules/@theia/plugin-ext/lib/plugin/types-impl.js");
var uri_components_1 = __webpack_require__(/*! ../../common/uri-components */ "./node_modules/@theia/plugin-ext/lib/common/uri-components.js");
/**
 * Actual implementation of file watching system of the plugin API.
 * Holds subscriptions (with its settings) from within plugins
 * and process all file system events in all workspace roots whether they matches to any subscription.
 * Only if event matches it will be sent into plugin side to specific subscriber.
 */
var InPluginFileSystemWatcherManager = /** @class */ (function () {
    function InPluginFileSystemWatcherManager() {
        this.subscribers = new Map();
        this.nextSubscriberId = 0;
    }
    InPluginFileSystemWatcherManager.prototype.init = function () {
        var _this = this;
        this.fileSystemWatcher.onFilesChanged(function (event) { return _this.onFilesChangedEventHandler(event); });
    };
    // Filter file system changes according to subscribers settings here to avoid unneeded traffic.
    InPluginFileSystemWatcherManager.prototype.onFilesChangedEventHandler = function (changes) {
        var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
        try {
            for (var changes_1 = __values(changes), changes_1_1 = changes_1.next(); !changes_1_1.done; changes_1_1 = changes_1.next()) {
                var change = changes_1_1.value;
                switch (change.type) {
                    case filesystem_watcher_1.FileChangeType.UPDATED:
                        try {
                            for (var _e = (e_2 = void 0, __values(this.subscribers)), _f = _e.next(); !_f.done; _f = _e.next()) {
                                var _g = __read(_f.value, 2), id = _g[0], subscriber = _g[1];
                                if (!subscriber.ignoreChangeEvents && this.uriMatches(subscriber, change)) {
                                    subscriber.proxy.$fileChanged({ subscriberId: id, uri: uri_components_1.theiaUritoUriComponents(change.uri), type: 'updated' });
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        break;
                    case filesystem_watcher_1.FileChangeType.ADDED:
                        try {
                            for (var _h = (e_3 = void 0, __values(this.subscribers)), _j = _h.next(); !_j.done; _j = _h.next()) {
                                var _k = __read(_j.value, 2), id = _k[0], subscriber = _k[1];
                                if (!subscriber.ignoreCreateEvents && this.uriMatches(subscriber, change)) {
                                    subscriber.proxy.$fileChanged({ subscriberId: id, uri: uri_components_1.theiaUritoUriComponents(change.uri), type: 'created' });
                                }
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        break;
                    case filesystem_watcher_1.FileChangeType.DELETED:
                        try {
                            for (var _l = (e_4 = void 0, __values(this.subscribers)), _m = _l.next(); !_m.done; _m = _l.next()) {
                                var _o = __read(_m.value, 2), id = _o[0], subscriber = _o[1];
                                if (!subscriber.ignoreDeleteEvents && this.uriMatches(subscriber, change)) {
                                    subscriber.proxy.$fileChanged({ subscriberId: id, uri: uri_components_1.theiaUritoUriComponents(change.uri), type: 'deleted' });
                                }
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                        break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (changes_1_1 && !changes_1_1.done && (_a = changes_1.return)) _a.call(changes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    InPluginFileSystemWatcherManager.prototype.uriMatches = function (subscriber, fileChange) {
        return subscriber.matcher(fileChange.uri.path.toString());
    };
    /**
     * Registers new file system events subscriber.
     *
     * @param options subscription options
     * @returns generated subscriber id
     */
    InPluginFileSystemWatcherManager.prototype.registerFileWatchSubscription = function (options, proxy) {
        var subscriberId = this.getNextId();
        var globPatternMatcher;
        if (typeof options.globPattern === 'string') {
            globPatternMatcher = language_selector_1.parse(options.globPattern);
        }
        else {
            var relativePattern = new types_impl_1.RelativePattern(options.globPattern.base, options.globPattern.pattern);
            globPatternMatcher = language_selector_1.parse(relativePattern);
        }
        var subscriber = {
            id: subscriberId,
            matcher: globPatternMatcher,
            ignoreCreateEvents: options.ignoreCreateEvents === true,
            ignoreChangeEvents: options.ignoreChangeEvents === true,
            ignoreDeleteEvents: options.ignoreDeleteEvents === true,
            proxy: proxy
        };
        this.subscribers.set(subscriberId, subscriber);
        return subscriberId;
    };
    InPluginFileSystemWatcherManager.prototype.unregisterFileWatchSubscription = function (subscriptionId) {
        this.subscribers.delete(subscriptionId);
    };
    InPluginFileSystemWatcherManager.prototype.getNextId = function () {
        return 'ipfsw' + this.nextSubscriberId++;
    };
    __decorate([
        inversify_1.inject(filesystem_watcher_1.FileSystemWatcher),
        __metadata("design:type", filesystem_watcher_1.FileSystemWatcher)
    ], InPluginFileSystemWatcherManager.prototype, "fileSystemWatcher", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InPluginFileSystemWatcherManager.prototype, "init", null);
    InPluginFileSystemWatcherManager = __decorate([
        inversify_1.injectable()
    ], InPluginFileSystemWatcherManager);
    return InPluginFileSystemWatcherManager;
}());
exports.InPluginFileSystemWatcherManager = InPluginFileSystemWatcherManager;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/keybindings/keybindings-contribution-handler.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/keybindings/keybindings-contribution-handler.js ***!
  \*********************************************************************************************************/
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
exports.KeybindingsContributionPointHandler = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var keybinding_1 = __webpack_require__(/*! @theia/core/lib/browser/keybinding */ "./node_modules/@theia/core/lib/browser/keybinding.js");
var os_1 = __webpack_require__(/*! @theia/core/lib/common/os */ "./node_modules/@theia/core/lib/common/os.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var KeybindingsContributionPointHandler = /** @class */ (function () {
    function KeybindingsContributionPointHandler() {
    }
    KeybindingsContributionPointHandler.prototype.handle = function (contributions) {
        var e_1, _a;
        if (!contributions || !contributions.keybindings) {
            return disposable_1.Disposable.NULL;
        }
        var toDispose = new core_1.DisposableCollection();
        try {
            for (var _b = __values(contributions.keybindings), _c = _b.next(); !_c.done; _c = _b.next()) {
                var raw = _c.value;
                var keybinding = this.toKeybinding(raw);
                if (keybinding) {
                    toDispose.push(this.keybindingRegistry.registerKeybinding(keybinding));
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
        return toDispose;
    };
    KeybindingsContributionPointHandler.prototype.toKeybinding = function (pluginKeybinding) {
        var keybinding = this.toOSKeybinding(pluginKeybinding);
        if (!keybinding) {
            return undefined;
        }
        var command = pluginKeybinding.command, when = pluginKeybinding.when;
        return { keybinding: keybinding, command: command, when: when };
    };
    KeybindingsContributionPointHandler.prototype.toOSKeybinding = function (pluginKeybinding) {
        var keybinding;
        var os = os_1.OS.type();
        if (os === os_1.OS.Type.Windows) {
            keybinding = pluginKeybinding.win;
        }
        else if (os === os_1.OS.Type.OSX) {
            keybinding = pluginKeybinding.mac;
        }
        else {
            keybinding = pluginKeybinding.linux;
        }
        return keybinding || pluginKeybinding.keybinding;
    };
    __decorate([
        inversify_1.inject(keybinding_1.KeybindingRegistry),
        __metadata("design:type", keybinding_1.KeybindingRegistry)
    ], KeybindingsContributionPointHandler.prototype, "keybindingRegistry", void 0);
    KeybindingsContributionPointHandler = __decorate([
        inversify_1.injectable()
    ], KeybindingsContributionPointHandler);
    return KeybindingsContributionPointHandler;
}());
exports.KeybindingsContributionPointHandler = KeybindingsContributionPointHandler;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/language-provider/language-client-contribution-provider-impl.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/language-provider/language-client-contribution-provider-impl.js ***!
  \*************************************************************************************************************************/
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
exports.LanguageClientContributionProviderImpl = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var logger_1 = __webpack_require__(/*! @theia/core/lib/common/logger */ "./node_modules/@theia/core/lib/common/logger.js");
var browser_2 = __webpack_require__(/*! @theia/languages/lib/browser */ "./node_modules/@theia/languages/lib/browser/index.js");
var LanguageClientContributionProviderImpl = /** @class */ (function () {
    function LanguageClientContributionProviderImpl() {
        this.languageClientContributors = new Map();
    }
    LanguageClientContributionProviderImpl.prototype.collectContributions = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.contributions.getContributions()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contribution = _c.value;
                this.languageClientContributors.set(contribution.id, contribution);
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
    LanguageClientContributionProviderImpl.prototype.getLanguageClientContributions = function () {
        return this.languageClientContributors.values();
    };
    LanguageClientContributionProviderImpl.prototype.registerLanguageClientContribution = function (clientContribution) {
        var _this = this;
        var id = clientContribution.id;
        if (this.languageClientContributors.has(id)) {
            this.logger.warn("The language contribution with type '" + id + "' was already registered.");
            return disposable_1.Disposable.NULL;
        }
        this.languageClientContributors.set(clientContribution.id, clientContribution);
        clientContribution.waitForActivation(this.app).then(function () {
            return clientContribution.activate(_this.app);
        });
        this.logger.info("The language contribution with type '" + id + "' was activated.");
        return disposable_1.Disposable.create(function () { return _this.unregisterLanguageClientContribution(id); });
    };
    LanguageClientContributionProviderImpl.prototype.unregisterLanguageClientContribution = function (id) {
        var contribution = this.languageClientContributors.get(id);
        if (!contribution) {
            return;
        }
        contribution.deactivate();
        this.languageClientContributors.delete(id);
        this.logger.info("The language contribution with type '" + id + "' was deactivated.");
    };
    __decorate([
        inversify_1.inject(browser_1.FrontendApplication),
        __metadata("design:type", browser_1.FrontendApplication)
    ], LanguageClientContributionProviderImpl.prototype, "app", void 0);
    __decorate([
        inversify_1.inject(logger_1.ILogger),
        __metadata("design:type", Object)
    ], LanguageClientContributionProviderImpl.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(common_1.ContributionProvider),
        inversify_1.named(browser_2.LanguageClientContribution),
        __metadata("design:type", Object)
    ], LanguageClientContributionProviderImpl.prototype, "contributions", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LanguageClientContributionProviderImpl.prototype, "collectContributions", null);
    LanguageClientContributionProviderImpl = __decorate([
        inversify_1.injectable()
    ], LanguageClientContributionProviderImpl);
    return LanguageClientContributionProviderImpl;
}());
exports.LanguageClientContributionProviderImpl = LanguageClientContributionProviderImpl;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/language-provider/language-client-contribution-provider.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/language-provider/language-client-contribution-provider.js ***!
  \********************************************************************************************************************/
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
exports.LanguageClientContributionProvider = void 0;
exports.LanguageClientContributionProvider = Symbol('LanguageClientContributionProvider');


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/language-provider/plugin-language-client-provider.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/language-provider/plugin-language-client-provider.js ***!
  \**************************************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageClientProviderImpl = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var language_client_contribution_provider_1 = __webpack_require__(/*! ./language-client-contribution-provider */ "./node_modules/@theia/plugin-ext/lib/main/browser/language-provider/language-client-contribution-provider.js");
var LanguageClientProviderImpl = /** @class */ (function () {
    function LanguageClientProviderImpl() {
    }
    LanguageClientProviderImpl.prototype.getLanguageClient = function (languageId) {
        return __awaiter(this, void 0, void 0, function () {
            var contribution;
            return __generator(this, function (_a) {
                contribution = this.getLanguageContribution(languageId);
                if (contribution) {
                    return [2 /*return*/, contribution.languageClient];
                }
                return [2 /*return*/];
            });
        });
    };
    LanguageClientProviderImpl.prototype.getLanguageContribution = function (languageId) {
        var e_1, _a;
        var contributions = this.languageClientContribution.getLanguageClientContributions();
        if (contributions) {
            try {
                for (var contributions_1 = __values(contributions), contributions_1_1 = contributions_1.next(); !contributions_1_1.done; contributions_1_1 = contributions_1.next()) {
                    var contribution = contributions_1_1.value;
                    if (contribution.id === languageId) {
                        return contribution;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (contributions_1_1 && !contributions_1_1.done && (_a = contributions_1.return)) _a.call(contributions_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return undefined;
    };
    __decorate([
        inversify_1.inject(language_client_contribution_provider_1.LanguageClientContributionProvider),
        __metadata("design:type", Object)
    ], LanguageClientProviderImpl.prototype, "languageClientContribution", void 0);
    LanguageClientProviderImpl = __decorate([
        inversify_1.injectable()
    ], LanguageClientProviderImpl);
    return LanguageClientProviderImpl;
}());
exports.LanguageClientProviderImpl = LanguageClientProviderImpl;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/languages-contribution-main.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/languages-contribution-main.js ***!
  \****************************************************************************************/
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
exports.LanguagesContributionMainImpl = void 0;
var plugin_api_rpc_1 = __webpack_require__(/*! ../../common/plugin-api-rpc */ "./node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js");
var language_client_services_1 = __webpack_require__(/*! @theia/languages/lib/browser/language-client-services */ "./node_modules/@theia/languages/lib/browser/language-client-services.js");
var browser_1 = __webpack_require__(/*! @theia/languages/lib/browser */ "./node_modules/@theia/languages/lib/browser/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var browser_2 = __webpack_require__(/*! @theia/workspace/lib/browser */ "./node_modules/@theia/workspace/lib/browser/index.js");
var browser_3 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "./node_modules/vscode-jsonrpc/lib/main.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "./node_modules/@theia/core/lib/common/promise-util.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var language_client_contribution_provider_1 = __webpack_require__(/*! ./language-provider/language-client-contribution-provider */ "./node_modules/@theia/plugin-ext/lib/main/browser/language-provider/language-client-contribution-provider.js");
/**
 * Implementation of languages contribution system of the plugin API.
 * Uses for registering new language server which was described in the plug-in.
 */
var LanguagesContributionMainImpl = /** @class */ (function () {
    function LanguagesContributionMainImpl(rpc, container, connectionMain) {
        this.rpc = rpc;
        this.container = container;
        this.connectionMain = connectionMain;
        this.toDispose = new disposable_1.DisposableCollection();
        this.languageClientContributionProvider = container.get(language_client_contribution_provider_1.LanguageClientContributionProvider);
    }
    LanguagesContributionMainImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    /**
     * Creates new client contribution for the language server and register it.
     *
     * @param languageServerInfo an information about the registered language server
     */
    LanguagesContributionMainImpl.prototype.$registerLanguageServerProvider = function (languageServerInfo) {
        var _this = this;
        var newLanguageContribution = new PluginLanguageClientContribution(this.container.get(language_client_services_1.Workspace), this.container.get(language_client_services_1.Languages), this.container.get(browser_1.LanguageClientFactory), this.connectionMain, languageServerInfo, this.rpc);
        newLanguageContribution.messageService = this.container.get(core_1.MessageService);
        newLanguageContribution.registry = this.container.get(core_1.CommandRegistry);
        newLanguageContribution.workspaceService = this.container.get(browser_2.WorkspaceService);
        newLanguageContribution.connectionProvider = this.container.get(browser_3.WebSocketConnectionProvider);
        newLanguageContribution.id = languageServerInfo.id;
        newLanguageContribution.name = languageServerInfo.name;
        newLanguageContribution.contains = languageServerInfo.workspaceContains;
        newLanguageContribution.patterns = languageServerInfo.globPatterns;
        this.languageClientContributionProvider.registerLanguageClientContribution(newLanguageContribution);
        this.toDispose.push(disposable_1.Disposable.create(function () { return _this.$stop(languageServerInfo.id); }));
    };
    /**
     * Removes language client contribution from the registry and clear related connections.
     *
     * @param id language server's id
     */
    LanguagesContributionMainImpl.prototype.$stop = function (id) {
        this.languageClientContributionProvider.unregisterLanguageClientContribution(id);
        this.connectionMain.ensureConnection(id).then(function (connection) {
            connection.dispose();
        });
    };
    return LanguagesContributionMainImpl;
}());
exports.LanguagesContributionMainImpl = LanguagesContributionMainImpl;
/**
 * The language client contribution for the language server which was described in the plug-in.
 */
var PluginLanguageClientContribution = /** @class */ (function (_super) {
    __extends(PluginLanguageClientContribution, _super);
    function PluginLanguageClientContribution(workspace, languages, languageClientFactory, connectionMain, languageContribution, rpc) {
        var _this = _super.call(this, workspace, languages, languageClientFactory) || this;
        _this.workspace = workspace;
        _this.languages = languages;
        _this.languageClientFactory = languageClientFactory;
        _this.connectionMain = connectionMain;
        _this.languageContribution = languageContribution;
        _this.rpc = rpc;
        return _this;
    }
    Object.defineProperty(PluginLanguageClientContribution.prototype, "globPatterns", {
        get: function () {
            return this.patterns ? this.patterns : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PluginLanguageClientContribution.prototype, "workspaceContains", {
        get: function () {
            return this.contains ? this.contains : [];
        },
        enumerable: false,
        configurable: true
    });
    PluginLanguageClientContribution.prototype.doActivate = function (toDeactivate) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, messageConnection, proxy;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.connectionMain.ensureConnection(this.id)];
                    case 1:
                        connection = _a.sent();
                        messageConnection = vscode_jsonrpc_1.createMessageConnection(connection.reader, connection.writer);
                        this.deferredConnection.resolve(messageConnection);
                        messageConnection.onDispose(function () { return _this.deferredConnection = new promise_util_1.Deferred(); });
                        if (toDeactivate.disposed) {
                            messageConnection.dispose();
                            return [2 /*return*/];
                        }
                        proxy = this.rpc.getProxy(plugin_api_rpc_1.MAIN_RPC_CONTEXT.LANGUAGES_CONTRIBUTION_EXT);
                        // Asks the plugin to start the process of language server.
                        proxy.$start(this.languageContribution);
                        toDeactivate.push(disposable_1.Disposable.create(function () { return _this.stop = (function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _b.trys.push([0, 3, , 4]);
                                        // avoid calling stop if start failed
                                        return [4 /*yield*/, this._languageClient.onReady()];
                                    case 1:
                                        // avoid calling stop if start failed
                                        _b.sent();
                                        // remove all listeners
                                        return [4 /*yield*/, this._languageClient.stop()];
                                    case 2:
                                        // remove all listeners
                                        _b.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        _a = _b.sent();
                                        // if start or stop failed make sure the the connection is closed
                                        messageConnection.dispose();
                                        connection.dispose();
                                        return [3 /*break*/, 4];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); })(); }));
                        toDeactivate.push(messageConnection.onClose(function () { return _this.restart(); }));
                        this.onWillStart(this._languageClient);
                        this._languageClient.start();
                        return [2 /*return*/];
                }
            });
        });
    };
    return PluginLanguageClientContribution;
}(browser_1.BaseLanguageClientContribution));


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/languages-main.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/languages-main.js ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.toMonacoWorkspaceEdit = exports.LanguagesMainImpl = void 0;
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// Method `$changeLanguage` copied and modified
// from https://github.com/microsoft/vscode/blob/e9c50663154c369a06355ce752b447af5b580dc3/src/vs/workbench/api/browser/mainThreadLanguages.ts#L30-L42
var plugin_api_rpc_1 = __webpack_require__(/*! ../../common/plugin-api-rpc */ "./node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var plugin_api_rpc_model_1 = __webpack_require__(/*! ../../common/plugin-api-rpc-model */ "./node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc-model.js");
var rpc_protocol_1 = __webpack_require__(/*! ../../common/rpc-protocol */ "./node_modules/@theia/plugin-ext/lib/common/rpc-protocol.js");
var type_converters_1 = __webpack_require__(/*! ../../plugin/type-converters */ "./node_modules/@theia/plugin-ext/lib/plugin/type-converters.js");
var lib_1 = __webpack_require__(/*! monaco-languageclient/lib */ "./node_modules/monaco-languageclient/lib/index.js");
var monaco_languages_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-languages */ "./node_modules/@theia/monaco/lib/browser/monaco-languages.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var browser_1 = __webpack_require__(/*! @theia/markers/lib/browser */ "./node_modules/@theia/markers/lib/browser/index.js");
var vst = __webpack_require__(/*! vscode-languageserver-types */ "./node_modules/vscode-languageserver-types/lib/esm/main.js");
var browser_2 = __webpack_require__(/*! @theia/callhierarchy/lib/browser */ "./node_modules/@theia/callhierarchy/lib/browser/index.js");
var callhierarchy_type_converters_1 = __webpack_require__(/*! ./callhierarchy/callhierarchy-type-converters */ "./node_modules/@theia/plugin-ext/lib/main/browser/callhierarchy/callhierarchy-type-converters.js");
var object_identifier_1 = __webpack_require__(/*! ../../common/object-identifier */ "./node_modules/@theia/plugin-ext/lib/common/object-identifier.js");
var types_1 = __webpack_require__(/*! ../../common/types */ "./node_modules/@theia/plugin-ext/lib/common/types.js");
var LanguagesMainImpl = /** @class */ (function () {
    function LanguagesMainImpl(rpc) {
        this.services = new Map();
        this.toDispose = new disposable_1.DisposableCollection();
        this.proxy = rpc.getProxy(plugin_api_rpc_1.MAIN_RPC_CONTEXT.LANGUAGES_EXT);
    }
    LanguagesMainImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    LanguagesMainImpl.prototype.$getLanguages = function () {
        return Promise.resolve(monaco.languages.getLanguages().map(function (l) { return l.id; }));
    };
    LanguagesMainImpl.prototype.$changeLanguage = function (resource, languageId) {
        var uri = monaco.Uri.revive(resource);
        var model = monaco.editor.getModel(uri);
        if (!model) {
            return Promise.reject(new Error('Invalid uri'));
        }
        var langId = monaco.languages.getEncodedLanguageId(languageId);
        if (!langId) {
            return Promise.reject(new Error("Unknown language ID: " + languageId));
        }
        monaco.editor.setModelLanguage(model, languageId);
        return Promise.resolve(undefined);
    };
    LanguagesMainImpl.prototype.register = function (handle, service) {
        var _this = this;
        this.services.set(handle, service);
        this.toDispose.push(disposable_1.Disposable.create(function () { return _this.$unregister(handle); }));
    };
    LanguagesMainImpl.prototype.$unregister = function (handle) {
        var disposable = this.services.get(handle);
        if (disposable) {
            this.services.delete(handle);
            disposable.dispose();
        }
    };
    LanguagesMainImpl.prototype.$setLanguageConfiguration = function (handle, languageId, configuration) {
        var config = {
            comments: configuration.comments,
            brackets: configuration.brackets,
            wordPattern: reviveRegExp(configuration.wordPattern),
            indentationRules: reviveIndentationRule(configuration.indentationRules),
            onEnterRules: reviveOnEnterRules(configuration.onEnterRules),
        };
        this.register(handle, monaco.languages.setLanguageConfiguration(languageId, config));
    };
    LanguagesMainImpl.prototype.$registerCompletionSupport = function (handle, pluginInfo, selector, triggerCharacters, supportsResolveDetails) {
        var _this = this;
        this.register(handle, monaco.modes.CompletionProviderRegistry.register(type_converters_1.fromLanguageSelector(selector), {
            triggerCharacters: triggerCharacters,
            provideCompletionItems: function (model, position, context, token) { return _this.provideCompletionItems(handle, model, position, context, token); },
            resolveCompletionItem: supportsResolveDetails
                ? function (model, position, suggestion, token) { return Promise.resolve(_this.resolveCompletionItem(handle, model, position, suggestion, token)); }
                : undefined
        }));
    };
    LanguagesMainImpl.prototype.provideCompletionItems = function (handle, model, position, context, token) {
        var _this = this;
        return this.proxy.$provideCompletionItems(handle, model.uri, position, context, token).then(function (result) {
            if (!result) {
                return undefined;
            }
            return {
                suggestions: result.completions.map(function (c) { return Object.assign(c, {
                    range: c.range || result.defaultRange
                }); }),
                incomplete: result.incomplete,
                dispose: function () { return _this.proxy.$releaseCompletionItems(handle, result.id); }
            };
        });
    };
    LanguagesMainImpl.prototype.resolveCompletionItem = function (handle, model, position, item, token) {
        var _a = item, parentId = _a.parentId, id = _a.id;
        return this.proxy.$resolveCompletionItem(handle, parentId, id, token).then(function (resolved) {
            if (resolved) {
                types_1.mixin(item, resolved, true);
            }
            return item;
        });
    };
    LanguagesMainImpl.prototype.$registerDefinitionProvider = function (handle, pluginInfo, selector) {
        var languageSelector = type_converters_1.fromLanguageSelector(selector);
        var definitionProvider = this.createDefinitionProvider(handle);
        this.register(handle, monaco.languages.registerDefinitionProvider(languageSelector, definitionProvider));
    };
    LanguagesMainImpl.prototype.$registerDeclarationProvider = function (handle, pluginInfo, selector) {
        var languageSelector = type_converters_1.fromLanguageSelector(selector);
        var declarationProvider = this.createDeclarationProvider(handle);
        this.register(handle, monaco.languages.registerDeclarationProvider(languageSelector, declarationProvider));
    };
    LanguagesMainImpl.prototype.$registerReferenceProvider = function (handle, pluginInfo, selector) {
        var languageSelector = type_converters_1.fromLanguageSelector(selector);
        var referenceProvider = this.createReferenceProvider(handle);
        this.register(handle, monaco.languages.registerReferenceProvider(languageSelector, referenceProvider));
    };
    LanguagesMainImpl.prototype.createReferenceProvider = function (handle) {
        var _this = this;
        return {
            provideReferences: function (model, position, context, token) { return _this.provideReferences(handle, model, position, context, token); }
        };
    };
    LanguagesMainImpl.prototype.provideReferences = function (handle, model, position, context, token) {
        return this.proxy.$provideReferences(handle, model.uri, position, context, token).then(function (result) {
            var e_1, _a;
            if (!result) {
                return undefined;
            }
            if (Array.isArray(result)) {
                var references = [];
                try {
                    for (var result_1 = __values(result), result_1_1 = result_1.next(); !result_1_1.done; result_1_1 = result_1.next()) {
                        var item = result_1_1.value;
                        references.push(__assign(__assign({}, item), { uri: monaco.Uri.revive(item.uri) }));
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (result_1_1 && !result_1_1.done && (_a = result_1.return)) _a.call(result_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return references;
            }
            return undefined;
        });
    };
    LanguagesMainImpl.prototype.$registerSignatureHelpProvider = function (handle, pluginInfo, selector, metadata) {
        var languageSelector = type_converters_1.fromLanguageSelector(selector);
        var signatureHelpProvider = this.createSignatureHelpProvider(handle, metadata);
        this.register(handle, monaco.languages.registerSignatureHelpProvider(languageSelector, signatureHelpProvider));
    };
    LanguagesMainImpl.prototype.$clearDiagnostics = function (id) {
        var e_2, _a;
        try {
            for (var _b = __values(this.problemManager.getUris()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var uri = _c.value;
                this.problemManager.setMarkers(new uri_1.default(uri), id, []);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    LanguagesMainImpl.prototype.$changeDiagnostics = function (id, delta) {
        var e_3, _a;
        try {
            for (var delta_1 = __values(delta), delta_1_1 = delta_1.next(); !delta_1_1.done; delta_1_1 = delta_1.next()) {
                var _b = __read(delta_1_1.value, 2), uriString = _b[0], markers = _b[1];
                var uri = new uri_1.default(uriString);
                this.problemManager.setMarkers(uri, id, markers.map(reviveMarker));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (delta_1_1 && !delta_1_1.done && (_a = delta_1.return)) _a.call(delta_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    LanguagesMainImpl.prototype.$registerImplementationProvider = function (handle, pluginInfo, selector) {
        var languageSelector = type_converters_1.fromLanguageSelector(selector);
        var implementationProvider = this.createImplementationProvider(handle);
        this.register(handle, monaco.languages.registerImplementationProvider(languageSelector, implementationProvider));
    };
    LanguagesMainImpl.prototype.createImplementationProvider = function (handle) {
        var _this = this;
        return {
            provideImplementation: function (model, position, token) { return _this.provideImplementation(handle, model, position, token); }
        };
    };
    LanguagesMainImpl.prototype.provideImplementation = function (handle, model, position, token) {
        return this.proxy.$provideImplementation(handle, model.uri, position, token).then(function (result) {
            var e_4, _a;
            if (!result) {
                return undefined;
            }
            if (Array.isArray(result)) {
                // using DefinitionLink because Location is mandatory part of DefinitionLink
                var definitionLinks = [];
                try {
                    for (var result_2 = __values(result), result_2_1 = result_2.next(); !result_2_1.done; result_2_1 = result_2.next()) {
                        var item = result_2_1.value;
                        definitionLinks.push(__assign(__assign({}, item), { uri: monaco.Uri.revive(item.uri) }));
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (result_2_1 && !result_2_1.done && (_a = result_2.return)) _a.call(result_2);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                return definitionLinks;
            }
            else {
                // single Location
                return {
                    uri: monaco.Uri.revive(result.uri),
                    range: result.range
                };
            }
        });
    };
    LanguagesMainImpl.prototype.$registerTypeDefinitionProvider = function (handle, pluginInfo, selector) {
        var languageSelector = type_converters_1.fromLanguageSelector(selector);
        var typeDefinitionProvider = this.createTypeDefinitionProvider(handle);
        this.register(handle, monaco.languages.registerTypeDefinitionProvider(languageSelector, typeDefinitionProvider));
    };
    LanguagesMainImpl.prototype.createTypeDefinitionProvider = function (handle) {
        var _this = this;
        return {
            provideTypeDefinition: function (model, position, token) { return _this.provideTypeDefinition(handle, model, position, token); }
        };
    };
    LanguagesMainImpl.prototype.provideTypeDefinition = function (handle, model, position, token) {
        return this.proxy.$provideTypeDefinition(handle, model.uri, position, token).then(function (result) {
            var e_5, _a;
            if (!result) {
                return undefined;
            }
            if (Array.isArray(result)) {
                // using DefinitionLink because Location is mandatory part of DefinitionLink
                var definitionLinks = [];
                try {
                    for (var result_3 = __values(result), result_3_1 = result_3.next(); !result_3_1.done; result_3_1 = result_3.next()) {
                        var item = result_3_1.value;
                        definitionLinks.push(__assign(__assign({}, item), { uri: monaco.Uri.revive(item.uri) }));
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (result_3_1 && !result_3_1.done && (_a = result_3.return)) _a.call(result_3);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
                return definitionLinks;
            }
            else {
                // single Location
                return {
                    uri: monaco.Uri.revive(result.uri),
                    range: result.range
                };
            }
        });
    };
    LanguagesMainImpl.prototype.$registerHoverProvider = function (handle, pluginInfo, selector) {
        var languageSelector = type_converters_1.fromLanguageSelector(selector);
        var hoverProvider = this.createHoverProvider(handle);
        this.register(handle, monaco.languages.registerHoverProvider(languageSelector, hoverProvider));
    };
    LanguagesMainImpl.prototype.createHoverProvider = function (handle) {
        var _this = this;
        return {
            provideHover: function (model, position, token) { return _this.provideHover(handle, model, position, token); }
        };
    };
    LanguagesMainImpl.prototype.provideHover = function (handle, model, position, token) {
        return this.proxy.$provideHover(handle, model.uri, position, token);
    };
    LanguagesMainImpl.prototype.$registerDocumentHighlightProvider = function (handle, pluginInfo, selector) {
        var languageSelector = type_converters_1.fromLanguageSelector(selector);
        var documentHighlightProvider = this.createDocumentHighlightProvider(handle);
        this.register(handle, monaco.languages.registerDocumentHighlightProvider(languageSelector, documentHighlightProvider));
    };
    LanguagesMainImpl.prototype.createDocumentHighlightProvider = function (handle) {
        var _this = this;
        return {
            provideDocumentHighlights: function (model, position, token) { return _this.provideDocumentHighlights(handle, model, position, token); }
        };
    };
    LanguagesMainImpl.prototype.provideDocumentHighlights = function (handle, model, position, token) {
        return this.proxy.$provideDocumentHighlights(handle, model.uri, position, token).then(function (result) {
            var e_6, _a;
            if (!result) {
                return undefined;
            }
            if (Array.isArray(result)) {
                var highlights = [];
                try {
                    for (var result_4 = __values(result), result_4_1 = result_4.next(); !result_4_1.done; result_4_1 = result_4.next()) {
                        var item = result_4_1.value;
                        highlights.push(__assign(__assign({}, item), { kind: (item.kind ? item.kind : monaco.languages.DocumentHighlightKind.Text) }));
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (result_4_1 && !result_4_1.done && (_a = result_4.return)) _a.call(result_4);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
                return highlights;
            }
            return undefined;
        });
    };
    LanguagesMainImpl.prototype.$registerWorkspaceSymbolProvider = function (handle, pluginInfo) {
        var workspaceSymbolProvider = this.createWorkspaceSymbolProvider(handle);
        this.register(handle, this.monacoLanguages.registerWorkspaceSymbolProvider(workspaceSymbolProvider));
    };
    LanguagesMainImpl.prototype.createWorkspaceSymbolProvider = function (handle) {
        var _this = this;
        return {
            provideWorkspaceSymbols: function (params, token) { return _this.provideWorkspaceSymbols(handle, params, token); },
            resolveWorkspaceSymbol: function (symbol, token) { return _this.resolveWorkspaceSymbol(handle, symbol, token); }
        };
    };
    LanguagesMainImpl.prototype.provideWorkspaceSymbols = function (handle, params, token) {
        return this.proxy.$provideWorkspaceSymbols(handle, params.query, token);
    };
    LanguagesMainImpl.prototype.resolveWorkspaceSymbol = function (handle, symbol, token) {
        return this.proxy.$resolveWorkspaceSymbol(handle, symbol, token);
    };
    LanguagesMainImpl.prototype.$registerDocumentLinkProvider = function (handle, pluginInfo, selector) {
        var languageSelector = type_converters_1.fromLanguageSelector(selector);
        var linkProvider = this.createLinkProvider(handle);
        this.register(handle, monaco.languages.registerLinkProvider(languageSelector, linkProvider));
    };
    LanguagesMainImpl.prototype.createLinkProvider = function (handle) {
        var _this = this;
        return {
            provideLinks: function (model, token) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, this.provideLinks(handle, model, token)];
            }); }); },
            resolveLink: function (link, token) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, this.resolveLink(handle, link, token)];
            }); }); }
        };
    };
    LanguagesMainImpl.prototype.provideLinks = function (handle, model, token) {
        return __awaiter(this, void 0, void 0, function () {
            var links;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.proxy.$provideDocumentLinks(handle, model.uri, token)];
                    case 1:
                        links = _a.sent();
                        if (!links) {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, {
                                links: links.map(function (link) { return _this.toMonacoLink(link); }),
                                dispose: function () {
                                    if (links && Array.isArray(links)) {
                                        _this.proxy.$releaseDocumentLinks(handle, links.map(function (link) { return object_identifier_1.ObjectIdentifier.of(link); }));
                                    }
                                }
                            }];
                }
            });
        });
    };
    LanguagesMainImpl.prototype.resolveLink = function (handle, link, token) {
        return __awaiter(this, void 0, void 0, function () {
            var resolved;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.proxy.$resolveDocumentLink(handle, link, token)];
                    case 1:
                        resolved = _a.sent();
                        return [2 /*return*/, resolved && this.toMonacoLink(resolved)];
                }
            });
        });
    };
    LanguagesMainImpl.prototype.toMonacoLink = function (link) {
        return __assign(__assign({}, link), { url: !!link.url && typeof link.url !== 'string' ? monaco.Uri.revive(link.url) : link.url });
    };
    LanguagesMainImpl.prototype.$registerCodeLensSupport = function (handle, pluginInfo, selector, eventHandle) {
        var languageSelector = type_converters_1.fromLanguageSelector(selector);
        var lensProvider = this.createCodeLensProvider(handle);
        if (typeof eventHandle === 'number') {
            var emitter = new event_1.Emitter();
            this.register(eventHandle, emitter);
            lensProvider.onDidChange = emitter.event;
        }
        this.register(handle, monaco.languages.registerCodeLensProvider(languageSelector, lensProvider));
    };
    LanguagesMainImpl.prototype.createCodeLensProvider = function (handle) {
        var _this = this;
        return {
            provideCodeLenses: function (model, token) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, this.provideCodeLenses(handle, model, token)];
            }); }); },
            resolveCodeLens: function (model, codeLens, token) { return _this.resolveCodeLens(handle, model, codeLens, token); }
        };
    };
    LanguagesMainImpl.prototype.provideCodeLenses = function (handle, model, token) {
        return __awaiter(this, void 0, void 0, function () {
            var lenses;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.proxy.$provideCodeLenses(handle, model.uri, token)];
                    case 1:
                        lenses = _a.sent();
                        if (!lenses) {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, {
                                lenses: lenses,
                                dispose: function () {
                                    if (lenses && Array.isArray(lenses)) {
                                        _this.proxy.$releaseCodeLenses(handle, lenses.map(function (symbol) { return object_identifier_1.ObjectIdentifier.of(symbol); }));
                                    }
                                }
                            }];
                }
            });
        });
    };
    LanguagesMainImpl.prototype.resolveCodeLens = function (handle, model, codeLens, token) {
        return this.proxy.$resolveCodeLens(handle, model.uri, codeLens, token);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    LanguagesMainImpl.prototype.$emitCodeLensEvent = function (eventHandle, event) {
        var obj = this.services.get(eventHandle);
        if (obj instanceof event_1.Emitter) {
            obj.fire(event);
        }
    };
    LanguagesMainImpl.prototype.$registerOutlineSupport = function (handle, pluginInfo, selector) {
        var languageSelector = type_converters_1.fromLanguageSelector(selector);
        var symbolProvider = this.createDocumentSymbolProvider(handle);
        this.register(handle, monaco.modes.DocumentSymbolProviderRegistry.register(languageSelector, symbolProvider));
    };
    LanguagesMainImpl.prototype.createDocumentSymbolProvider = function (handle) {
        var _this = this;
        return {
            provideDocumentSymbols: function (model, token) { return _this.provideDocumentSymbols(handle, model, token); }
        };
    };
    LanguagesMainImpl.prototype.provideDocumentSymbols = function (handle, model, token) {
        return this.proxy.$provideDocumentSymbols(handle, model.uri, token);
    };
    LanguagesMainImpl.prototype.createDefinitionProvider = function (handle) {
        var _this = this;
        return {
            provideDefinition: function (model, position, token) { return _this.provideDefinition(handle, model, position, token); }
        };
    };
    LanguagesMainImpl.prototype.createDeclarationProvider = function (handle) {
        var _this = this;
        return {
            provideDeclaration: function (model, position, token) { return _this.provideDeclaration(handle, model, position, token); }
        };
    };
    LanguagesMainImpl.prototype.provideDeclaration = function (handle, model, position, token) {
        return this.proxy.$provideDeclaration(handle, model.uri, position, token).then(function (result) {
            var e_7, _a;
            if (!result) {
                return undefined;
            }
            if (Array.isArray(result)) {
                // using DefinitionLink because Location is mandatory part of DefinitionLink
                var definitionLinks = [];
                try {
                    for (var result_5 = __values(result), result_5_1 = result_5.next(); !result_5_1.done; result_5_1 = result_5.next()) {
                        var item = result_5_1.value;
                        definitionLinks.push(__assign(__assign({}, item), { uri: monaco.Uri.revive(item.uri) }));
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (result_5_1 && !result_5_1.done && (_a = result_5.return)) _a.call(result_5);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
                return definitionLinks;
            }
            else {
                // single Location
                return {
                    uri: monaco.Uri.revive(result.uri),
                    range: result.range
                };
            }
        });
    };
    LanguagesMainImpl.prototype.provideDefinition = function (handle, model, position, token) {
        return this.proxy.$provideDefinition(handle, model.uri, position, token).then(function (result) {
            var e_8, _a;
            if (!result) {
                return undefined;
            }
            if (Array.isArray(result)) {
                // using DefinitionLink because Location is mandatory part of DefinitionLink
                var definitionLinks = [];
                try {
                    for (var result_6 = __values(result), result_6_1 = result_6.next(); !result_6_1.done; result_6_1 = result_6.next()) {
                        var item = result_6_1.value;
                        definitionLinks.push(__assign(__assign({}, item), { uri: monaco.Uri.revive(item.uri) }));
                    }
                }
                catch (e_8_1) { e_8 = { error: e_8_1 }; }
                finally {
                    try {
                        if (result_6_1 && !result_6_1.done && (_a = result_6.return)) _a.call(result_6);
                    }
                    finally { if (e_8) throw e_8.error; }
                }
                return definitionLinks;
            }
            else {
                // single Location
                return {
                    uri: monaco.Uri.revive(result.uri),
                    range: result.range
                };
            }
        });
    };
    LanguagesMainImpl.prototype.createSignatureHelpProvider = function (handle, metadata) {
        var _this = this;
        return {
            signatureHelpTriggerCharacters: metadata.triggerCharacters,
            signatureHelpRetriggerCharacters: metadata.retriggerCharacters,
            provideSignatureHelp: function (model, position, token, context) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, this.provideSignatureHelp(handle, model, position, token, context)];
            }); }); }
        };
    };
    LanguagesMainImpl.prototype.provideSignatureHelp = function (handle, model, position, token, context) {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.proxy.$provideSignatureHelp(handle, model.uri, position, context, token)];
                    case 1:
                        value = _a.sent();
                        if (!value) {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, {
                                value: value,
                                dispose: function () {
                                    if (typeof value.id === 'number') {
                                        _this.proxy.$releaseSignatureHelp(handle, value.id);
                                    }
                                }
                            }];
                }
            });
        });
    };
    LanguagesMainImpl.prototype.$registerDocumentFormattingSupport = function (handle, pluginInfo, selector) {
        var languageSelector = type_converters_1.fromLanguageSelector(selector);
        var documentFormattingEditSupport = this.createDocumentFormattingSupport(handle);
        this.register(handle, monaco.languages.registerDocumentFormattingEditProvider(languageSelector, documentFormattingEditSupport));
    };
    LanguagesMainImpl.prototype.createDocumentFormattingSupport = function (handle) {
        var _this = this;
        return {
            provideDocumentFormattingEdits: function (model, options, token) { return _this.provideDocumentFormattingEdits(handle, model, options, token); }
        };
    };
    LanguagesMainImpl.prototype.provideDocumentFormattingEdits = function (handle, model, options, token) {
        return this.proxy.$provideDocumentFormattingEdits(handle, model.uri, options, token);
    };
    LanguagesMainImpl.prototype.$registerRangeFormattingProvider = function (handle, pluginInfo, selector) {
        var languageSelector = type_converters_1.fromLanguageSelector(selector);
        var rangeFormattingEditProvider = this.createRangeFormattingProvider(handle);
        this.register(handle, monaco.languages.registerDocumentRangeFormattingEditProvider(languageSelector, rangeFormattingEditProvider));
    };
    LanguagesMainImpl.prototype.createRangeFormattingProvider = function (handle) {
        var _this = this;
        return {
            provideDocumentRangeFormattingEdits: function (model, range, options, token) { return _this.provideDocumentRangeFormattingEdits(handle, model, range, options, token); }
        };
    };
    LanguagesMainImpl.prototype.provideDocumentRangeFormattingEdits = function (handle, model, range, options, token) {
        return this.proxy.$provideDocumentRangeFormattingEdits(handle, model.uri, range, options, token);
    };
    LanguagesMainImpl.prototype.$registerOnTypeFormattingProvider = function (handle, pluginInfo, selector, autoFormatTriggerCharacters) {
        var languageSelector = type_converters_1.fromLanguageSelector(selector);
        var onTypeFormattingProvider = this.createOnTypeFormattingProvider(handle, autoFormatTriggerCharacters);
        this.register(handle, monaco.languages.registerOnTypeFormattingEditProvider(languageSelector, onTypeFormattingProvider));
    };
    LanguagesMainImpl.prototype.createOnTypeFormattingProvider = function (handle, autoFormatTriggerCharacters) {
        var _this = this;
        return {
            autoFormatTriggerCharacters: autoFormatTriggerCharacters,
            provideOnTypeFormattingEdits: function (model, position, ch, options, token) { return _this.provideOnTypeFormattingEdits(handle, model, position, ch, options, token); }
        };
    };
    LanguagesMainImpl.prototype.provideOnTypeFormattingEdits = function (handle, model, position, ch, options, token) {
        return this.proxy.$provideOnTypeFormattingEdits(handle, model.uri, position, ch, options, token);
    };
    LanguagesMainImpl.prototype.$registerFoldingRangeProvider = function (handle, pluginInfo, selector) {
        var languageSelector = type_converters_1.fromLanguageSelector(selector);
        var provider = this.createFoldingRangeProvider(handle);
        this.register(handle, monaco.languages.registerFoldingRangeProvider(languageSelector, provider));
    };
    LanguagesMainImpl.prototype.createFoldingRangeProvider = function (handle) {
        var _this = this;
        return {
            provideFoldingRanges: function (model, context, token) { return _this.provideFoldingRanges(handle, model, context, token); }
        };
    };
    LanguagesMainImpl.prototype.provideFoldingRanges = function (handle, model, context, token) {
        return this.proxy.$provideFoldingRange(handle, model.uri, context, token);
    };
    LanguagesMainImpl.prototype.$registerSelectionRangeProvider = function (handle, pluginInfo, selector) {
        var languageSelector = type_converters_1.fromLanguageSelector(selector);
        var provider = this.createSelectionRangeProvider(handle);
        this.register(handle, monaco.languages.registerSelectionRangeProvider(languageSelector, provider));
    };
    LanguagesMainImpl.prototype.createSelectionRangeProvider = function (handle) {
        var _this = this;
        return {
            provideSelectionRanges: function (model, positions, token) { return _this.provideSelectionRanges(handle, model, positions, token); }
        };
    };
    LanguagesMainImpl.prototype.provideSelectionRanges = function (handle, model, positions, token) {
        return this.proxy.$provideSelectionRanges(handle, model.uri, positions, token);
    };
    LanguagesMainImpl.prototype.$registerDocumentColorProvider = function (handle, pluginInfo, selector) {
        var languageSelector = type_converters_1.fromLanguageSelector(selector);
        var colorProvider = this.createColorProvider(handle);
        this.register(handle, monaco.languages.registerColorProvider(languageSelector, colorProvider));
    };
    LanguagesMainImpl.prototype.createColorProvider = function (handle) {
        var _this = this;
        return {
            provideDocumentColors: function (model, token) { return _this.provideDocumentColors(handle, model, token); },
            provideColorPresentations: function (model, colorInfo, token) { return _this.provideColorPresentations(handle, model, colorInfo, token); }
        };
    };
    LanguagesMainImpl.prototype.provideDocumentColors = function (handle, model, token) {
        return this.proxy.$provideDocumentColors(handle, model.uri, token).then(function (documentColors) {
            return documentColors.map(function (documentColor) {
                var _a = __read(documentColor.color, 4), red = _a[0], green = _a[1], blue = _a[2], alpha = _a[3];
                var color = {
                    red: red,
                    green: green,
                    blue: blue,
                    alpha: alpha
                };
                return {
                    color: color,
                    range: documentColor.range
                };
            });
        });
    };
    LanguagesMainImpl.prototype.provideColorPresentations = function (handle, model, colorInfo, token) {
        return this.proxy.$provideColorPresentations(handle, model.uri, {
            color: [
                colorInfo.color.red,
                colorInfo.color.green,
                colorInfo.color.blue,
                colorInfo.color.alpha
            ],
            range: colorInfo.range
        }, token);
    };
    LanguagesMainImpl.prototype.$registerQuickFixProvider = function (handle, pluginInfo, selector, providedCodeActionKinds) {
        var _this = this;
        var languageSelector = type_converters_1.fromLanguageSelector(selector);
        var quickFixProvider = {
            provideCodeActions: function (model, range, context, token) {
                var markers = monaco.services.StaticServices.markerService.get().read({ resource: model.uri }).filter(function (m) { return monaco.Range.areIntersectingOrTouching(m, range); });
                return _this.provideCodeActions(handle, model, range, { markers: markers, only: context.only }, token);
            },
            providedCodeActionKinds: providedCodeActionKinds
        };
        this.register(handle, monaco.modes.CodeActionProviderRegistry.register(languageSelector, quickFixProvider));
    };
    LanguagesMainImpl.prototype.provideCodeActions = function (handle, model, rangeOrSelection, context, token) {
        return __awaiter(this, void 0, void 0, function () {
            var actions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.proxy.$provideCodeActions(handle, model.uri, rangeOrSelection, __assign({}, context), token)];
                    case 1:
                        actions = _a.sent();
                        if (!actions) {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, {
                                actions: actions.map(function (a) { return toMonacoAction(a); }),
                                dispose: function () {
                                    // TODO this.proxy.$releaseCodeActions(handle, cacheId);
                                }
                            }];
                }
            });
        });
    };
    LanguagesMainImpl.prototype.$registerRenameProvider = function (handle, pluginInfo, selector, supportsResolveLocation) {
        var languageSelector = type_converters_1.fromLanguageSelector(selector);
        var renameProvider = this.createRenameProvider(handle, supportsResolveLocation);
        this.register(handle, monaco.languages.registerRenameProvider(languageSelector, renameProvider));
    };
    LanguagesMainImpl.prototype.createRenameProvider = function (handle, supportsResolveLocation) {
        var _this = this;
        return {
            provideRenameEdits: function (model, position, newName, token) { return _this.provideRenameEdits(handle, model, position, newName, token); },
            resolveRenameLocation: supportsResolveLocation
                ? function (model, position, token) {
                    return _this.resolveRenameLocation(handle, model, position, token);
                }
                : undefined
        };
    };
    LanguagesMainImpl.prototype.provideRenameEdits = function (handle, model, position, newName, token) {
        return this.proxy.$provideRenameEdits(handle, model.uri, position, newName, token).then(toMonacoWorkspaceEdit);
    };
    LanguagesMainImpl.prototype.$registerCallHierarchyProvider = function (handle, selector) {
        var languageSelector = type_converters_1.fromLanguageSelector(selector);
        var callHierarchyService = this.createCallHierarchyService(handle, languageSelector);
        this.register(handle, this.callHierarchyServiceContributionRegistry.add(callHierarchyService));
    };
    LanguagesMainImpl.prototype.createCallHierarchyService = function (handle, language) {
        var _this = this;
        return {
            selector: language,
            getRootDefinition: function (uri, position, cancellationToken) {
                return _this.proxy.$provideRootDefinition(handle, callhierarchy_type_converters_1.toUriComponents(uri), callhierarchy_type_converters_1.fromPosition(position), cancellationToken)
                    .then(function (def) { return callhierarchy_type_converters_1.toDefinition(def); });
            },
            getCallers: function (definition, cancellationToken) { return _this.proxy.$provideCallers(handle, callhierarchy_type_converters_1.fromDefinition(definition), cancellationToken)
                .then(function (result) {
                var e_9, _a;
                if (!result) {
                    return undefined;
                }
                if (Array.isArray(result)) {
                    var callers = [];
                    try {
                        for (var result_7 = __values(result), result_7_1 = result_7.next(); !result_7_1.done; result_7_1 = result_7.next()) {
                            var item = result_7_1.value;
                            callers.push(callhierarchy_type_converters_1.toCaller(item));
                        }
                    }
                    catch (e_9_1) { e_9 = { error: e_9_1 }; }
                    finally {
                        try {
                            if (result_7_1 && !result_7_1.done && (_a = result_7.return)) _a.call(result_7);
                        }
                        finally { if (e_9) throw e_9.error; }
                    }
                    return callers;
                }
                return undefined;
            }); }
        };
    };
    LanguagesMainImpl.prototype.matchModel = function (selector, model) {
        var _this = this;
        if (Array.isArray(selector)) {
            return selector.some(function (filter) { return _this.matchModel(filter, model); });
        }
        if (lib_1.DocumentFilter.is(selector)) {
            if (!!selector.language && selector.language !== model.languageId) {
                return false;
            }
            if (!!selector.scheme && selector.scheme !== model.uri.scheme) {
                return false;
            }
            if (!!selector.pattern && !lib_1.testGlob(selector.pattern, model.uri.path)) {
                return false;
            }
            return true;
        }
        return selector === model.languageId;
    };
    LanguagesMainImpl.prototype.resolveRenameLocation = function (handle, model, position, token) {
        return this.proxy.$resolveRenameLocation(handle, model.uri, position, token);
    };
    __decorate([
        inversify_1.inject(monaco_languages_1.MonacoLanguages),
        __metadata("design:type", monaco_languages_1.MonacoLanguages)
    ], LanguagesMainImpl.prototype, "monacoLanguages", void 0);
    __decorate([
        inversify_1.inject(browser_1.ProblemManager),
        __metadata("design:type", browser_1.ProblemManager)
    ], LanguagesMainImpl.prototype, "problemManager", void 0);
    __decorate([
        inversify_1.inject(browser_2.CallHierarchyServiceProvider),
        __metadata("design:type", browser_2.CallHierarchyServiceProvider)
    ], LanguagesMainImpl.prototype, "callHierarchyServiceContributionRegistry", void 0);
    LanguagesMainImpl = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(rpc_protocol_1.RPCProtocol)),
        __metadata("design:paramtypes", [Object])
    ], LanguagesMainImpl);
    return LanguagesMainImpl;
}());
exports.LanguagesMainImpl = LanguagesMainImpl;
function reviveMarker(marker) {
    var monacoMarker = {
        code: marker.code,
        severity: reviveSeverity(marker.severity),
        range: reviveRange(marker.startLineNumber, marker.startColumn, marker.endLineNumber, marker.endColumn),
        message: marker.message,
        source: marker.source,
        relatedInformation: undefined
    };
    if (marker.relatedInformation) {
        monacoMarker.relatedInformation = marker.relatedInformation.map(reviveRelated);
    }
    return monacoMarker;
}
function reviveSeverity(severity) {
    switch (severity) {
        case plugin_api_rpc_model_1.MarkerSeverity.Error: return vst.DiagnosticSeverity.Error;
        case plugin_api_rpc_model_1.MarkerSeverity.Warning: return vst.DiagnosticSeverity.Warning;
        case plugin_api_rpc_model_1.MarkerSeverity.Info: return vst.DiagnosticSeverity.Information;
        case plugin_api_rpc_model_1.MarkerSeverity.Hint: return vst.DiagnosticSeverity.Hint;
    }
}
function reviveRange(startLine, startColumn, endLine, endColumn) {
    // note: language server range is 0-based, marker is 1-based, so need to deduct 1 here
    return {
        start: {
            line: startLine - 1,
            character: startColumn - 1
        },
        end: {
            line: endLine - 1,
            character: endColumn - 1
        }
    };
}
function reviveRelated(related) {
    return {
        message: related.message,
        location: {
            uri: related.resource,
            range: reviveRange(related.startLineNumber, related.startColumn, related.endLineNumber, related.endColumn)
        }
    };
}
function reviveRegExp(regExp) {
    if (typeof regExp === 'undefined' || regExp === null) {
        return undefined;
    }
    return new RegExp(regExp.pattern, regExp.flags);
}
function reviveIndentationRule(indentationRule) {
    if (typeof indentationRule === 'undefined' || indentationRule === null) {
        return undefined;
    }
    return {
        increaseIndentPattern: reviveRegExp(indentationRule.increaseIndentPattern),
        decreaseIndentPattern: reviveRegExp(indentationRule.decreaseIndentPattern),
        indentNextLinePattern: reviveRegExp(indentationRule.indentNextLinePattern),
        unIndentedLinePattern: reviveRegExp(indentationRule.unIndentedLinePattern),
    };
}
function reviveOnEnterRule(onEnterRule) {
    return {
        beforeText: reviveRegExp(onEnterRule.beforeText),
        afterText: reviveRegExp(onEnterRule.afterText),
        action: onEnterRule.action
    };
}
function reviveOnEnterRules(onEnterRules) {
    if (typeof onEnterRules === 'undefined' || onEnterRules === null) {
        return undefined;
    }
    return onEnterRules.map(reviveOnEnterRule);
}
function toMonacoAction(action) {
    return __assign(__assign({}, action), { diagnostics: action.diagnostics ? action.diagnostics.map(function (m) { return toMonacoMarkerData(m); }) : undefined, edit: action.edit ? toMonacoWorkspaceEdit(action.edit) : undefined });
}
function toMonacoMarkerData(marker) {
    return __assign(__assign({}, marker), { relatedInformation: marker.relatedInformation
            ? marker.relatedInformation.map(function (i) { return toMonacoRelatedInformation(i); })
            : undefined });
}
function toMonacoRelatedInformation(relatedInfo) {
    return __assign(__assign({}, relatedInfo), { resource: monaco.Uri.parse(relatedInfo.resource) });
}
function toMonacoWorkspaceEdit(data) {
    return {
        edits: (data && data.edits || []).map(function (edit) {
            if (plugin_api_rpc_1.ResourceTextEditDto.is(edit)) {
                return { resource: monaco.Uri.revive(edit.resource), edits: edit.edits };
            }
            else {
                return { newUri: monaco.Uri.revive(edit.newUri), oldUri: monaco.Uri.revive(edit.oldUri), options: edit.options };
            }
        })
    };
}
exports.toMonacoWorkspaceEdit = toMonacoWorkspaceEdit;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/main-context.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/main-context.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setUpPluginApi = void 0;
var command_registry_main_1 = __webpack_require__(/*! ./command-registry-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/command-registry-main.js");
var preference_registry_main_1 = __webpack_require__(/*! ./preference-registry-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/preference-registry-main.js");
var quick_open_main_1 = __webpack_require__(/*! ./quick-open-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/quick-open-main.js");
var plugin_api_rpc_1 = __webpack_require__(/*! ../../common/plugin-api-rpc */ "./node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js");
var message_registry_main_1 = __webpack_require__(/*! ./message-registry-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/message-registry-main.js");
var window_state_main_1 = __webpack_require__(/*! ./window-state-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/window-state-main.js");
var workspace_main_1 = __webpack_require__(/*! ./workspace-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/workspace-main.js");
var status_bar_message_registry_main_1 = __webpack_require__(/*! ./status-bar-message-registry-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/status-bar-message-registry-main.js");
var env_main_1 = __webpack_require__(/*! ./env-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/env-main.js");
var editors_and_documents_main_1 = __webpack_require__(/*! ./editors-and-documents-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/editors-and-documents-main.js");
var terminal_main_1 = __webpack_require__(/*! ./terminal-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/terminal-main.js");
var dialogs_main_1 = __webpack_require__(/*! ./dialogs-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/dialogs-main.js");
var tree_views_main_1 = __webpack_require__(/*! ./view/tree-views-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/view/tree-views-main.js");
var notification_main_1 = __webpack_require__(/*! ./notification-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/notification-main.js");
var connection_main_1 = __webpack_require__(/*! ./connection-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/connection-main.js");
var webviews_main_1 = __webpack_require__(/*! ./webviews-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/webviews-main.js");
var tasks_main_1 = __webpack_require__(/*! ./tasks-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/tasks-main.js");
var plugin_storage_1 = __webpack_require__(/*! ./plugin-storage */ "./node_modules/@theia/plugin-ext/lib/main/browser/plugin-storage.js");
var languages_contribution_main_1 = __webpack_require__(/*! ./languages-contribution-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/languages-contribution-main.js");
var debug_main_1 = __webpack_require__(/*! ./debug/debug-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/debug/debug-main.js");
var file_system_main_1 = __webpack_require__(/*! ./file-system-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/file-system-main.js");
var scm_main_1 = __webpack_require__(/*! ./scm-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/scm-main.js");
var decorations_main_1 = __webpack_require__(/*! ./decorations/decorations-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/decorations/decorations-main.js");
var clipboard_main_1 = __webpack_require__(/*! ./clipboard-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/clipboard-main.js");
var documents_main_1 = __webpack_require__(/*! ./documents-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/documents-main.js");
var text_editors_main_1 = __webpack_require__(/*! ./text-editors-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/text-editors-main.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "./node_modules/@theia/editor/lib/browser/index.js");
var text_editor_model_service_1 = __webpack_require__(/*! ./text-editor-model-service */ "./node_modules/@theia/plugin-ext/lib/main/browser/text-editor-model-service.js");
var opener_service_1 = __webpack_require__(/*! @theia/core/lib/browser/opener-service */ "./node_modules/@theia/core/lib/browser/opener-service.js");
var application_shell_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/application-shell */ "./node_modules/@theia/core/lib/browser/shell/application-shell.js");
var monaco_bulk_edit_service_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-bulk-edit-service */ "./node_modules/@theia/monaco/lib/browser/monaco-bulk-edit-service.js");
var monaco_editor_service_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-editor-service */ "./node_modules/@theia/monaco/lib/browser/monaco-editor-service.js");
var untitled_resource_1 = __webpack_require__(/*! ./editor/untitled-resource */ "./node_modules/@theia/plugin-ext/lib/main/browser/editor/untitled-resource.js");
var browser_2 = __webpack_require__(/*! @theia/filesystem/lib/browser */ "./node_modules/@theia/filesystem/lib/browser/index.js");
function setUpPluginApi(rpc, container) {
    var commandRegistryMain = new command_registry_main_1.CommandRegistryMainImpl(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.COMMAND_REGISTRY_MAIN, commandRegistryMain);
    var quickOpenMain = new quick_open_main_1.QuickOpenMainImpl(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.QUICK_OPEN_MAIN, quickOpenMain);
    var workspaceMain = new workspace_main_1.WorkspaceMainImpl(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.WORKSPACE_MAIN, workspaceMain);
    var dialogsMain = new dialogs_main_1.DialogsMainImpl(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.DIALOGS_MAIN, dialogsMain);
    var messageRegistryMain = new message_registry_main_1.MessageRegistryMainImpl(container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.MESSAGE_REGISTRY_MAIN, messageRegistryMain);
    var preferenceRegistryMain = new preference_registry_main_1.PreferenceRegistryMainImpl(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.PREFERENCE_REGISTRY_MAIN, preferenceRegistryMain);
    var editorsAndDocuments = new editors_and_documents_main_1.EditorsAndDocumentsMain(rpc, container);
    var modelService = container.get(text_editor_model_service_1.EditorModelService);
    var editorManager = container.get(browser_1.EditorManager);
    var openerService = container.get(opener_service_1.OpenerService);
    var shell = container.get(application_shell_1.ApplicationShell);
    var untitledResourceResolver = container.get(untitled_resource_1.UntitledResourceResolver);
    var fileResourceResolver = container.get(browser_2.FileResourceResolver);
    var documentsMain = new documents_main_1.DocumentsMainImpl(editorsAndDocuments, modelService, rpc, editorManager, openerService, shell, untitledResourceResolver, fileResourceResolver);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.DOCUMENTS_MAIN, documentsMain);
    var bulkEditService = container.get(monaco_bulk_edit_service_1.MonacoBulkEditService);
    var monacoEditorService = container.get(monaco_editor_service_1.MonacoEditorService);
    var editorsMain = new text_editors_main_1.TextEditorsMainImpl(editorsAndDocuments, rpc, bulkEditService, monacoEditorService);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.TEXT_EDITORS_MAIN, editorsMain);
    // start listening only after all clients are subscribed to events
    editorsAndDocuments.listen();
    var statusBarMessageRegistryMain = new status_bar_message_registry_main_1.StatusBarMessageRegistryMainImpl(container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.STATUS_BAR_MESSAGE_REGISTRY_MAIN, statusBarMessageRegistryMain);
    var envMain = new env_main_1.EnvMainImpl(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.ENV_MAIN, envMain);
    var notificationMain = new notification_main_1.NotificationMainImpl(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.NOTIFICATION_MAIN, notificationMain);
    var terminalMain = new terminal_main_1.TerminalServiceMainImpl(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.TERMINAL_MAIN, terminalMain);
    var treeViewsMain = new tree_views_main_1.TreeViewsMainImpl(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.TREE_VIEWS_MAIN, treeViewsMain);
    var outputChannelRegistryFactory = container.get(plugin_api_rpc_1.OutputChannelRegistryFactory);
    var outputChannelRegistryMain = outputChannelRegistryFactory();
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.OUTPUT_CHANNEL_REGISTRY_MAIN, outputChannelRegistryMain);
    var languagesMainFactory = container.get(plugin_api_rpc_1.LanguagesMainFactory);
    var languagesMain = languagesMainFactory(rpc);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.LANGUAGES_MAIN, languagesMain);
    var webviewsMain = new webviews_main_1.WebviewsMainImpl(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.WEBVIEWS_MAIN, webviewsMain);
    var storageMain = new plugin_storage_1.StorageMainImpl(container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.STORAGE_MAIN, storageMain);
    var connectionMain = new connection_main_1.ConnectionMainImpl(rpc);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.CONNECTION_MAIN, connectionMain);
    var tasksMain = new tasks_main_1.TasksMainImpl(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.TASKS_MAIN, tasksMain);
    var languagesContribution = new languages_contribution_main_1.LanguagesContributionMainImpl(rpc, container, connectionMain);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.LANGUAGES_CONTRIBUTION_MAIN, languagesContribution);
    var debugMain = new debug_main_1.DebugMainImpl(rpc, connectionMain, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.DEBUG_MAIN, debugMain);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.FILE_SYSTEM_MAIN, new file_system_main_1.FileSystemMainImpl(rpc, container));
    var scmMain = new scm_main_1.ScmMainImpl(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.SCM_MAIN, scmMain);
    var decorationsMain = new decorations_main_1.DecorationsMainImpl(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.DECORATIONS_MAIN, decorationsMain);
    var windowMain = new window_state_main_1.WindowStateMain(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.WINDOW_MAIN, windowMain);
    var clipboardMain = new clipboard_main_1.ClipboardMainImpl(container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.CLIPBOARD_MAIN, clipboardMain);
}
exports.setUpPluginApi = setUpPluginApi;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/message-registry-main.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/message-registry-main.js ***!
  \**********************************************************************************/
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
exports.MessageRegistryMainImpl = void 0;
var message_service_1 = __webpack_require__(/*! @theia/core/lib/common/message-service */ "./node_modules/@theia/core/lib/common/message-service.js");
var plugin_api_rpc_1 = __webpack_require__(/*! ../../common/plugin-api-rpc */ "./node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js");
var modal_notification_1 = __webpack_require__(/*! ./dialogs/modal-notification */ "./node_modules/@theia/plugin-ext/lib/main/browser/dialogs/modal-notification.js");
var MessageRegistryMainImpl = /** @class */ (function () {
    function MessageRegistryMainImpl(container) {
        this.messageService = container.get(message_service_1.MessageService);
    }
    MessageRegistryMainImpl.prototype.$showMessage = function (type, message, options, actions) {
        return __awaiter(this, void 0, void 0, function () {
            var action, handle;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.doShowMessage(type, message, options, actions)];
                    case 1:
                        action = _a.sent();
                        handle = action
                            ? actions.map(function (a) { return a.title; }).indexOf(action)
                            : undefined;
                        return [2 /*return*/, handle === undefined && options.modal ? options.onCloseActionHandle : handle];
                }
            });
        });
    };
    MessageRegistryMainImpl.prototype.doShowMessage = function (type, message, options, actions) {
        return __awaiter(this, void 0, void 0, function () {
            var messageType, modalNotification;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                if (options.modal) {
                    messageType = type === plugin_api_rpc_1.MainMessageType.Error ? modal_notification_1.MessageType.Error :
                        type === plugin_api_rpc_1.MainMessageType.Warning ? modal_notification_1.MessageType.Warning :
                            modal_notification_1.MessageType.Info;
                    modalNotification = new modal_notification_1.ModalNotification();
                    return [2 /*return*/, modalNotification.showDialog(messageType, message, actions)];
                }
                switch (type) {
                    case plugin_api_rpc_1.MainMessageType.Info:
                        return [2 /*return*/, (_a = this.messageService).info.apply(_a, __spread([message], actions.map(function (a) { return a.title; })))];
                    case plugin_api_rpc_1.MainMessageType.Warning:
                        return [2 /*return*/, (_b = this.messageService).warn.apply(_b, __spread([message], actions.map(function (a) { return a.title; })))];
                    case plugin_api_rpc_1.MainMessageType.Error:
                        return [2 /*return*/, (_c = this.messageService).error.apply(_c, __spread([message], actions.map(function (a) { return a.title; })))];
                }
                throw new Error("Message type '" + type + "' is not supported yet!");
            });
        });
    };
    return MessageRegistryMainImpl;
}());
exports.MessageRegistryMainImpl = MessageRegistryMainImpl;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/notification-main.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/notification-main.js ***!
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
exports.NotificationMainImpl = void 0;
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var NotificationMainImpl = /** @class */ (function () {
    function NotificationMainImpl(rpc, container) {
        this.progressMap = new Map();
        this.progress2Work = new Map();
        this.toDispose = new disposable_1.DisposableCollection(disposable_1.Disposable.create(function () { }));
        this.progressService = container.get(common_1.ProgressService);
    }
    NotificationMainImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    NotificationMainImpl.prototype.$startProgress = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var progressMessage, progress, id;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        progressMessage = this.mapOptions(options);
                        return [4 /*yield*/, this.progressService.showProgress(progressMessage)];
                    case 1:
                        progress = _a.sent();
                        id = progress.id;
                        this.progressMap.set(id, progress);
                        this.progress2Work.set(id, 0);
                        if (this.toDispose.disposed) {
                            this.$stopProgress(id);
                        }
                        else {
                            this.toDispose.push(disposable_1.Disposable.create(function () { return _this.$stopProgress(id); }));
                        }
                        return [2 /*return*/, id];
                }
            });
        });
    };
    NotificationMainImpl.prototype.mapOptions = function (options) {
        var title = options.title, location = options.location, cancellable = options.cancellable;
        return { text: title, options: { location: location, cancelable: cancellable } };
    };
    NotificationMainImpl.prototype.$stopProgress = function (id) {
        var progress = this.progressMap.get(id);
        if (progress) {
            progress.cancel();
            this.progressMap.delete(id);
            this.progress2Work.delete(id);
        }
    };
    NotificationMainImpl.prototype.$updateProgress = function (id, item) {
        var progress = this.progressMap.get(id);
        if (!progress) {
            return;
        }
        var done = Math.min((this.progress2Work.get(id) || 0) + (item.increment || 0), 100);
        this.progress2Work.set(id, done);
        progress.report({ message: item.message, work: done ? { done: done, total: 100 } : undefined });
    };
    return NotificationMainImpl;
}());
exports.NotificationMainImpl = NotificationMainImpl;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/output-channel-registry-main.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/output-channel-registry-main.js ***!
  \*****************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputChannelRegistryMainImpl = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var output_contribution_1 = __webpack_require__(/*! @theia/output/lib/browser/output-contribution */ "./node_modules/@theia/output/lib/browser/output-contribution.js");
var output_channel_1 = __webpack_require__(/*! @theia/output/lib/common/output-channel */ "./node_modules/@theia/output/lib/common/output-channel.js");
var OutputChannelRegistryMainImpl = /** @class */ (function () {
    function OutputChannelRegistryMainImpl() {
        this.channels = new Map();
    }
    OutputChannelRegistryMainImpl.prototype.$append = function (channelName, value, pluginInfo) {
        var outputChannel = this.getChannel(channelName);
        if (outputChannel) {
            outputChannel.append(value);
        }
        return Promise.resolve();
    };
    OutputChannelRegistryMainImpl.prototype.$clear = function (channelName) {
        var outputChannel = this.getChannel(channelName);
        if (outputChannel) {
            outputChannel.clear();
        }
        return Promise.resolve();
    };
    OutputChannelRegistryMainImpl.prototype.$dispose = function (channelName) {
        this.outputChannelManager.deleteChannel(channelName);
        if (this.channels.has(channelName)) {
            this.channels.delete(channelName);
        }
        return Promise.resolve();
    };
    OutputChannelRegistryMainImpl.prototype.$reveal = function (channelName, preserveFocus) {
        return __awaiter(this, void 0, void 0, function () {
            var outputChannel, activate, reveal, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        outputChannel = this.getChannel(channelName);
                        if (!outputChannel) return [3 /*break*/, 2];
                        activate = !preserveFocus;
                        reveal = preserveFocus;
                        _a = this;
                        return [4 /*yield*/, this.outputContribution.openView({ activate: activate, reveal: reveal })];
                    case 1:
                        _a.commonOutputWidget = _b.sent();
                        outputChannel.setVisibility(true);
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    OutputChannelRegistryMainImpl.prototype.$close = function (channelName) {
        var outputChannel = this.getChannel(channelName);
        if (outputChannel) {
            outputChannel.setVisibility(false);
        }
        var channels = this.outputChannelManager.getChannels();
        var isEmpty = channels.findIndex(function (channel) { return channel.isVisible; }) === -1;
        if (isEmpty && this.commonOutputWidget) {
            this.commonOutputWidget.close();
        }
        return Promise.resolve();
    };
    OutputChannelRegistryMainImpl.prototype.getChannel = function (channelName) {
        var outputChannel;
        if (this.channels.has(channelName)) {
            outputChannel = this.channels.get(channelName);
        }
        else {
            outputChannel = this.outputChannelManager.getChannel(channelName);
            this.channels.set(channelName, outputChannel);
        }
        return outputChannel;
    };
    __decorate([
        inversify_1.inject(output_channel_1.OutputChannelManager),
        __metadata("design:type", output_channel_1.OutputChannelManager)
    ], OutputChannelRegistryMainImpl.prototype, "outputChannelManager", void 0);
    __decorate([
        inversify_1.inject(output_contribution_1.OutputContribution),
        __metadata("design:type", output_contribution_1.OutputContribution)
    ], OutputChannelRegistryMainImpl.prototype, "outputContribution", void 0);
    OutputChannelRegistryMainImpl = __decorate([
        inversify_1.injectable()
    ], OutputChannelRegistryMainImpl);
    return OutputChannelRegistryMainImpl;
}());
exports.OutputChannelRegistryMainImpl = OutputChannelRegistryMainImpl;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/plugin-contribution-handler.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/plugin-contribution-handler.js ***!
  \****************************************************************************************/
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
exports.PluginContributionHandler = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var textmate_1 = __webpack_require__(/*! @theia/monaco/lib/browser/textmate */ "./node_modules/@theia/monaco/lib/browser/textmate/index.js");
var menus_contribution_handler_1 = __webpack_require__(/*! ./menus/menus-contribution-handler */ "./node_modules/@theia/plugin-ext/lib/main/browser/menus/menus-contribution-handler.js");
var plugin_view_registry_1 = __webpack_require__(/*! ./view/plugin-view-registry */ "./node_modules/@theia/plugin-ext/lib/main/browser/view/plugin-view-registry.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var keybindings_contribution_handler_1 = __webpack_require__(/*! ./keybindings/keybindings-contribution-handler */ "./node_modules/@theia/plugin-ext/lib/main/browser/keybindings/keybindings-contribution-handler.js");
var monaco_snippet_suggest_provider_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-snippet-suggest-provider */ "./node_modules/@theia/monaco/lib/browser/monaco-snippet-suggest-provider.js");
var plugin_shared_style_1 = __webpack_require__(/*! ./plugin-shared-style */ "./node_modules/@theia/plugin-ext/lib/main/browser/plugin-shared-style.js");
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "./node_modules/@theia/core/lib/common/command.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var browser_2 = __webpack_require__(/*! @theia/task/lib/browser */ "./node_modules/@theia/task/lib/browser/index.js");
var plugin_debug_service_1 = __webpack_require__(/*! ./debug/plugin-debug-service */ "./node_modules/@theia/plugin-ext/lib/main/browser/debug/plugin-debug-service.js");
var debug_schema_updater_1 = __webpack_require__(/*! @theia/debug/lib/browser/debug-schema-updater */ "./node_modules/@theia/debug/lib/browser/debug-schema-updater.js");
var monaco_theming_service_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-theming-service */ "./node_modules/@theia/monaco/lib/browser/monaco-theming-service.js");
var color_registry_1 = __webpack_require__(/*! @theia/core/lib/browser/color-registry */ "./node_modules/@theia/core/lib/browser/color-registry.js");
var plugin_icon_theme_service_1 = __webpack_require__(/*! ./plugin-icon-theme-service */ "./node_modules/@theia/plugin-ext/lib/main/browser/plugin-icon-theme-service.js");
var PluginContributionHandler = /** @class */ (function () {
    function PluginContributionHandler() {
        this.injections = new Map();
        this.commandHandlers = new Map();
        this.onDidRegisterCommandHandlerEmitter = new event_1.Emitter();
        this.onDidRegisterCommandHandler = this.onDidRegisterCommandHandlerEmitter.event;
    }
    /**
     * Always synchronous in order to simplify handling disconnections.
     * @throws never, loading of each contribution should handle errors
     * in order to avoid preventing loading of other contributions or extensions
     */
    PluginContributionHandler.prototype.handleContributions = function (clientId, plugin) {
        var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _e, e_6, _f, e_7, _g, e_8, _h, e_9, _j, e_10, _k;
        var _this = this;
        var contributions = plugin.contributes;
        if (!contributions) {
            return disposable_1.Disposable.NULL;
        }
        var toDispose = new disposable_1.DisposableCollection(disposable_1.Disposable.create(function () { }));
        /* eslint-disable @typescript-eslint/no-explicit-any */
        var logError = function (message) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return console.error.apply(console, __spread(["[" + clientId + "][" + plugin.metadata.model.id + "]: " + message], args));
        };
        var pushContribution = function (id, contribute) {
            if (toDispose.disposed) {
                return;
            }
            try {
                toDispose.push(contribute());
            }
            catch (e) {
                logError("Failed to load '" + id + "' contribution.", e);
            }
        };
        var configuration = contributions.configuration;
        if (configuration) {
            var _loop_1 = function (config) {
                pushContribution('configuration', function () { return _this.preferenceSchemaProvider.setSchema(config); });
            };
            try {
                for (var configuration_1 = __values(configuration), configuration_1_1 = configuration_1.next(); !configuration_1_1.done; configuration_1_1 = configuration_1.next()) {
                    var config = configuration_1_1.value;
                    _loop_1(config);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (configuration_1_1 && !configuration_1_1.done && (_a = configuration_1.return)) _a.call(configuration_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        var configurationDefaults = contributions.configurationDefaults;
        if (configurationDefaults) {
            pushContribution('configurationDefaults', function () { return _this.updateDefaultOverridesSchema(configurationDefaults); });
        }
        var languages = contributions.languages;
        if (languages && languages.length) {
            var _loop_2 = function (lang) {
                // it is not possible to unregister a language
                monaco.languages.register({
                    id: lang.id,
                    aliases: lang.aliases,
                    extensions: lang.extensions,
                    filenamePatterns: lang.filenamePatterns,
                    filenames: lang.filenames,
                    firstLine: lang.firstLine,
                    mimetypes: lang.mimetypes
                });
                var langConfiguration = lang.configuration;
                if (langConfiguration) {
                    pushContribution("language." + lang.id + ".configuration", function () { return monaco.languages.setLanguageConfiguration(lang.id, {
                        wordPattern: _this.createRegex(langConfiguration.wordPattern),
                        autoClosingPairs: langConfiguration.autoClosingPairs,
                        brackets: langConfiguration.brackets,
                        comments: langConfiguration.comments,
                        folding: _this.convertFolding(langConfiguration.folding),
                        surroundingPairs: langConfiguration.surroundingPairs,
                        indentationRules: _this.convertIndentationRules(langConfiguration.indentationRules)
                    }); });
                }
            };
            try {
                for (var languages_1 = __values(languages), languages_1_1 = languages_1.next(); !languages_1_1.done; languages_1_1 = languages_1.next()) {
                    var lang = languages_1_1.value;
                    _loop_2(lang);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (languages_1_1 && !languages_1_1.done && (_b = languages_1.return)) _b.call(languages_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        var grammars = contributions.grammars;
        if (grammars && grammars.length) {
            var grammarsWithLanguage_1 = [];
            var _loop_3 = function (grammar) {
                var e_11, _a;
                if (grammar.injectTo) {
                    var _loop_13 = function (injectScope) {
                        pushContribution("grammar.injectTo." + injectScope, function () {
                            var injections = _this.injections.get(injectScope) || [];
                            injections.push(grammar.scope);
                            _this.injections.set(injectScope, injections);
                            return disposable_1.Disposable.create(function () {
                                var index = injections.indexOf(grammar.scope);
                                if (index !== -1) {
                                    injections.splice(index, 1);
                                }
                            });
                        });
                    };
                    try {
                        for (var _b = (e_11 = void 0, __values(grammar.injectTo)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var injectScope = _c.value;
                            _loop_13(injectScope);
                        }
                    }
                    catch (e_11_1) { e_11 = { error: e_11_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_11) throw e_11.error; }
                    }
                }
                if (grammar.language) {
                    // processing is deferred.
                    grammarsWithLanguage_1.push(grammar);
                }
                pushContribution("grammar.textmate.scope." + grammar.scope, function () { return _this.grammarsRegistry.registerTextmateGrammarScope(grammar.scope, {
                    getGrammarDefinition: function () {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, {
                                        format: grammar.format,
                                        content: grammar.grammar || '',
                                        location: grammar.grammarLocation
                                    }];
                            });
                        });
                    },
                    getInjections: function (scopeName) {
                        return _this.injections.get(scopeName);
                    }
                }); });
            };
            try {
                for (var grammars_1 = __values(grammars), grammars_1_1 = grammars_1.next(); !grammars_1_1.done; grammars_1_1 = grammars_1.next()) {
                    var grammar = grammars_1_1.value;
                    _loop_3(grammar);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (grammars_1_1 && !grammars_1_1.done && (_c = grammars_1.return)) _c.call(grammars_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            // load grammars on next tick to await registration of languages from all plugins in current tick
            // see https://github.com/eclipse-theia/theia/issues/6907#issuecomment-578600243
            setTimeout(function () {
                var e_12, _a;
                var _loop_14 = function (grammar) {
                    var language = grammar.language;
                    pushContribution("grammar.language." + language + ".scope", function () { return _this.grammarsRegistry.mapLanguageIdToTextmateGrammar(language, grammar.scope); });
                    pushContribution("grammar.language." + language + ".configuration", function () { return _this.grammarsRegistry.registerGrammarConfiguration(language, {
                        embeddedLanguages: _this.convertEmbeddedLanguages(grammar.embeddedLanguages, logError),
                        tokenTypes: _this.convertTokenTypes(grammar.tokenTypes)
                    }); });
                };
                try {
                    for (var grammarsWithLanguage_2 = __values(grammarsWithLanguage_1), grammarsWithLanguage_2_1 = grammarsWithLanguage_2.next(); !grammarsWithLanguage_2_1.done; grammarsWithLanguage_2_1 = grammarsWithLanguage_2.next()) {
                        var grammar = grammarsWithLanguage_2_1.value;
                        _loop_14(grammar);
                    }
                }
                catch (e_12_1) { e_12 = { error: e_12_1 }; }
                finally {
                    try {
                        if (grammarsWithLanguage_2_1 && !grammarsWithLanguage_2_1.done && (_a = grammarsWithLanguage_2.return)) _a.call(grammarsWithLanguage_2);
                    }
                    finally { if (e_12) throw e_12.error; }
                }
                // activate grammars only once everything else is loaded.
                // see https://github.com/eclipse-theia/theia-cpp-extensions/issues/100#issuecomment-610643866
                setTimeout(function () {
                    var e_13, _a;
                    var _loop_15 = function (grammar) {
                        var language = grammar.language;
                        pushContribution("grammar.language." + language + ".activation", function () { return _this.monacoTextmateService.activateLanguage(language); });
                    };
                    try {
                        for (var grammarsWithLanguage_3 = __values(grammarsWithLanguage_1), grammarsWithLanguage_3_1 = grammarsWithLanguage_3.next(); !grammarsWithLanguage_3_1.done; grammarsWithLanguage_3_1 = grammarsWithLanguage_3.next()) {
                            var grammar = grammarsWithLanguage_3_1.value;
                            _loop_15(grammar);
                        }
                    }
                    catch (e_13_1) { e_13 = { error: e_13_1 }; }
                    finally {
                        try {
                            if (grammarsWithLanguage_3_1 && !grammarsWithLanguage_3_1.done && (_a = grammarsWithLanguage_3.return)) _a.call(grammarsWithLanguage_3);
                        }
                        finally { if (e_13) throw e_13.error; }
                    }
                });
            });
        }
        pushContribution('commands', function () { return _this.registerCommands(contributions); });
        pushContribution('menus', function () { return _this.menusContributionHandler.handle(plugin); });
        pushContribution('keybindings', function () { return _this.keybindingsContributionHandler.handle(contributions); });
        if (contributions.viewsContainers) {
            var _loop_4 = function (location_1) {
                var e_14, _a;
                if (contributions.viewsContainers.hasOwnProperty(location_1)) {
                    var _loop_16 = function (viewContainer) {
                        pushContribution("viewContainers." + viewContainer.id, function () { return _this.viewRegistry.registerViewContainer(location_1, viewContainer); });
                    };
                    try {
                        for (var _b = (e_14 = void 0, __values(contributions.viewsContainers[location_1])), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var viewContainer = _c.value;
                            _loop_16(viewContainer);
                        }
                    }
                    catch (e_14_1) { e_14 = { error: e_14_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_14) throw e_14.error; }
                    }
                }
            };
            for (var location_1 in contributions.viewsContainers) {
                _loop_4(location_1);
            }
        }
        if (contributions.views) {
            var _loop_5 = function (location_2) {
                var e_15, _a;
                var _loop_17 = function (view) {
                    pushContribution("views." + view.id, function () { return _this.viewRegistry.registerView(location_2, view); });
                };
                try {
                    for (var _b = (e_15 = void 0, __values(contributions.views[location_2])), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var view = _c.value;
                        _loop_17(view);
                    }
                }
                catch (e_15_1) { e_15 = { error: e_15_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_15) throw e_15.error; }
                }
            };
            // eslint-disable-next-line guard-for-in
            for (var location_2 in contributions.views) {
                _loop_5(location_2);
            }
        }
        if (contributions.snippets) {
            var _loop_6 = function (snippet) {
                pushContribution("snippets." + snippet.uri, function () { return _this.snippetSuggestProvider.fromURI(snippet.uri, {
                    language: snippet.language,
                    source: snippet.source
                }); });
            };
            try {
                for (var _l = __values(contributions.snippets), _m = _l.next(); !_m.done; _m = _l.next()) {
                    var snippet = _m.value;
                    _loop_6(snippet);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        if (contributions.themes && contributions.themes.length) {
            var pending_1 = {};
            var _loop_7 = function (theme) {
                pushContribution("themes." + theme.uri, function () { return _this.monacoThemingService.register(theme, pending_1); });
            };
            try {
                for (var _o = __values(contributions.themes), _p = _o.next(); !_p.done; _p = _o.next()) {
                    var theme = _p.value;
                    _loop_7(theme);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_p && !_p.done && (_e = _o.return)) _e.call(_o);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
        if (contributions.iconThemes && contributions.iconThemes.length) {
            var _loop_8 = function (iconTheme) {
                pushContribution("iconThemes." + iconTheme.uri, function () { return _this.iconThemeService.register(iconTheme, plugin); });
            };
            try {
                for (var _q = __values(contributions.iconThemes), _r = _q.next(); !_r.done; _r = _q.next()) {
                    var iconTheme = _r.value;
                    _loop_8(iconTheme);
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_r && !_r.done && (_f = _q.return)) _f.call(_q);
                }
                finally { if (e_6) throw e_6.error; }
            }
        }
        if (contributions.colors) {
            pushContribution('colors', function () {
                var _a;
                return (_a = _this.colors).register.apply(_a, __spread(contributions.colors));
            });
        }
        if (contributions.taskDefinitions) {
            var _loop_9 = function (taskDefinition) {
                pushContribution("taskDefinitions." + taskDefinition.taskType, function () { return _this.taskDefinitionRegistry.register(taskDefinition); });
            };
            try {
                for (var _s = __values(contributions.taskDefinitions), _t = _s.next(); !_t.done; _t = _s.next()) {
                    var taskDefinition = _t.value;
                    _loop_9(taskDefinition);
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (_t && !_t.done && (_g = _s.return)) _g.call(_s);
                }
                finally { if (e_7) throw e_7.error; }
            }
        }
        if (contributions.problemPatterns) {
            var _loop_10 = function (problemPattern) {
                pushContribution("problemPatterns." + (problemPattern.name || problemPattern.regexp), function () { return _this.problemPatternRegistry.register(problemPattern); });
            };
            try {
                for (var _u = __values(contributions.problemPatterns), _v = _u.next(); !_v.done; _v = _u.next()) {
                    var problemPattern = _v.value;
                    _loop_10(problemPattern);
                }
            }
            catch (e_8_1) { e_8 = { error: e_8_1 }; }
            finally {
                try {
                    if (_v && !_v.done && (_h = _u.return)) _h.call(_u);
                }
                finally { if (e_8) throw e_8.error; }
            }
        }
        if (contributions.problemMatchers) {
            var _loop_11 = function (problemMatcher) {
                pushContribution("problemMatchers." + problemMatcher.label, function () { return _this.problemMatcherRegistry.register(problemMatcher); });
            };
            try {
                for (var _w = __values(contributions.problemMatchers), _x = _w.next(); !_x.done; _x = _w.next()) {
                    var problemMatcher = _x.value;
                    _loop_11(problemMatcher);
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (_x && !_x.done && (_j = _w.return)) _j.call(_w);
                }
                finally { if (e_9) throw e_9.error; }
            }
        }
        if (contributions.debuggers && contributions.debuggers.length) {
            toDispose.push(disposable_1.Disposable.create(function () { return _this.debugSchema.update(); }));
            var _loop_12 = function (contribution) {
                pushContribution("debuggers." + contribution.type, function () { return _this.debugService.registerDebugger(contribution); });
            };
            try {
                for (var _y = __values(contributions.debuggers), _z = _y.next(); !_z.done; _z = _y.next()) {
                    var contribution = _z.value;
                    _loop_12(contribution);
                }
            }
            catch (e_10_1) { e_10 = { error: e_10_1 }; }
            finally {
                try {
                    if (_z && !_z.done && (_k = _y.return)) _k.call(_y);
                }
                finally { if (e_10) throw e_10.error; }
            }
            this.debugSchema.update();
        }
        return toDispose;
    };
    PluginContributionHandler.prototype.registerCommands = function (contribution) {
        var e_16, _a;
        if (!contribution.commands) {
            return disposable_1.Disposable.NULL;
        }
        var toDispose = new disposable_1.DisposableCollection();
        try {
            for (var _b = __values(contribution.commands), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = _c.value, iconUrl = _d.iconUrl, command = _d.command, category = _d.category, title = _d.title;
                var reference = iconUrl && this.style.toIconClass(iconUrl);
                var iconClass = void 0;
                if (reference) {
                    toDispose.push(reference);
                    iconClass = reference.object.iconClass;
                }
                toDispose.push(this.registerCommand({ id: command, category: category, label: title, iconClass: iconClass }));
            }
        }
        catch (e_16_1) { e_16 = { error: e_16_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_16) throw e_16.error; }
        }
        return toDispose;
    };
    PluginContributionHandler.prototype.registerCommand = function (command) {
        var _this = this;
        if (this.hasCommand(command.id)) {
            console.warn("command '" + command.id + "' already registered");
            return disposable_1.Disposable.NULL;
        }
        var commandHandler = {
            execute: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return __awaiter(_this, void 0, void 0, function () {
                    var handler;
                    return __generator(this, function (_a) {
                        handler = this.commandHandlers.get(command.id);
                        if (!handler) {
                            throw new Error("command '" + command.id + "' not found");
                        }
                        return [2 /*return*/, handler.apply(void 0, __spread(args))];
                    });
                });
            },
            // Always enabled - a command can be executed programmatically or via the commands palette.
            isEnabled: function () { return true; },
            // Visibility rules are defined via the `menus` contribution point.
            isVisible: function () { return true; }
        };
        var toDispose = new disposable_1.DisposableCollection();
        if (this.commands.getCommand(command.id)) {
            // overriding built-in command, i.e. `type` by the VSCodeVim extension
            toDispose.push(this.commands.registerHandler(command.id, commandHandler));
        }
        else {
            toDispose.push(this.commands.registerCommand(command, commandHandler));
        }
        this.commandHandlers.set(command.id, undefined);
        toDispose.push(disposable_1.Disposable.create(function () { return _this.commandHandlers.delete(command.id); }));
        return toDispose;
    };
    PluginContributionHandler.prototype.registerCommandHandler = function (id, execute) {
        var _this = this;
        if (this.hasCommandHandler(id)) {
            console.warn("command handler '" + id + "' already registered");
            return disposable_1.Disposable.NULL;
        }
        this.commandHandlers.set(id, execute);
        this.onDidRegisterCommandHandlerEmitter.fire(id);
        return disposable_1.Disposable.create(function () { return _this.commandHandlers.set(id, undefined); });
    };
    PluginContributionHandler.prototype.hasCommand = function (id) {
        return this.commandHandlers.has(id);
    };
    PluginContributionHandler.prototype.hasCommandHandler = function (id) {
        return !!this.commandHandlers.get(id);
    };
    PluginContributionHandler.prototype.updateDefaultOverridesSchema = function (configurationDefaults) {
        var defaultOverrides = {
            id: 'defaultOverrides',
            title: 'Default Configuration Overrides',
            properties: {}
        };
        // eslint-disable-next-line guard-for-in
        for (var key in configurationDefaults) {
            var defaultValue = configurationDefaults[key];
            if (this.preferenceSchemaProvider.testOverrideValue(key, defaultValue)) {
                defaultOverrides.properties[key] = {
                    type: 'object',
                    default: defaultValue,
                    description: "Configure editor settings to be overridden for " + key + " language."
                };
            }
        }
        if (Object.keys(defaultOverrides.properties).length) {
            return this.preferenceSchemaProvider.setSchema(defaultOverrides);
        }
        return disposable_1.Disposable.NULL;
    };
    PluginContributionHandler.prototype.createRegex = function (value) {
        if (typeof value === 'string') {
            return new RegExp(value, '');
        }
        return undefined;
    };
    PluginContributionHandler.prototype.convertIndentationRules = function (rules) {
        if (!rules) {
            return undefined;
        }
        return {
            decreaseIndentPattern: this.createRegex(rules.decreaseIndentPattern),
            increaseIndentPattern: this.createRegex(rules.increaseIndentPattern),
            indentNextLinePattern: this.createRegex(rules.indentNextLinePattern),
            unIndentedLinePattern: this.createRegex(rules.unIndentedLinePattern)
        };
    };
    PluginContributionHandler.prototype.convertFolding = function (folding) {
        if (!folding) {
            return undefined;
        }
        var result = {
            offSide: folding.offSide
        };
        if (folding.markers) {
            result.markers = {
                end: this.createRegex(folding.markers.end),
                start: this.createRegex(folding.markers.start)
            };
        }
        return result;
    };
    PluginContributionHandler.prototype.convertTokenTypes = function (tokenTypes) {
        if (typeof tokenTypes === 'undefined' || tokenTypes === null) {
            return undefined;
        }
        var result = Object.create(null);
        var scopes = Object.keys(tokenTypes);
        var len = scopes.length;
        for (var i = 0; i < len; i++) {
            var scope = scopes[i];
            var tokenType = tokenTypes[scope];
            switch (tokenType) {
                case 'string':
                    result[scope] = 2 /* String */;
                    break;
                case 'other':
                    result[scope] = 0 /* Other */;
                    break;
                case 'comment':
                    result[scope] = 1 /* Comment */;
                    break;
            }
        }
        return result;
    };
    PluginContributionHandler.prototype.convertEmbeddedLanguages = function (languages, logError) {
        if (typeof languages === 'undefined' || languages === null) {
            return undefined;
        }
        var result = Object.create(null);
        var scopes = Object.keys(languages);
        var len = scopes.length;
        for (var i = 0; i < len; i++) {
            var scope = scopes[i];
            var langId = languages[scope];
            result[scope] = textmate_1.getEncodedLanguageId(langId);
            if (!result[scope]) {
                logError("Language for '" + scope + "' not found.");
            }
        }
        return result;
    };
    __decorate([
        inversify_1.inject(textmate_1.TextmateRegistry),
        __metadata("design:type", textmate_1.TextmateRegistry)
    ], PluginContributionHandler.prototype, "grammarsRegistry", void 0);
    __decorate([
        inversify_1.inject(plugin_view_registry_1.PluginViewRegistry),
        __metadata("design:type", plugin_view_registry_1.PluginViewRegistry)
    ], PluginContributionHandler.prototype, "viewRegistry", void 0);
    __decorate([
        inversify_1.inject(menus_contribution_handler_1.MenusContributionPointHandler),
        __metadata("design:type", menus_contribution_handler_1.MenusContributionPointHandler)
    ], PluginContributionHandler.prototype, "menusContributionHandler", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceSchemaProvider),
        __metadata("design:type", browser_1.PreferenceSchemaProvider)
    ], PluginContributionHandler.prototype, "preferenceSchemaProvider", void 0);
    __decorate([
        inversify_1.inject(textmate_1.MonacoTextmateService),
        __metadata("design:type", textmate_1.MonacoTextmateService)
    ], PluginContributionHandler.prototype, "monacoTextmateService", void 0);
    __decorate([
        inversify_1.inject(keybindings_contribution_handler_1.KeybindingsContributionPointHandler),
        __metadata("design:type", keybindings_contribution_handler_1.KeybindingsContributionPointHandler)
    ], PluginContributionHandler.prototype, "keybindingsContributionHandler", void 0);
    __decorate([
        inversify_1.inject(monaco_snippet_suggest_provider_1.MonacoSnippetSuggestProvider),
        __metadata("design:type", monaco_snippet_suggest_provider_1.MonacoSnippetSuggestProvider)
    ], PluginContributionHandler.prototype, "snippetSuggestProvider", void 0);
    __decorate([
        inversify_1.inject(command_1.CommandRegistry),
        __metadata("design:type", command_1.CommandRegistry)
    ], PluginContributionHandler.prototype, "commands", void 0);
    __decorate([
        inversify_1.inject(plugin_shared_style_1.PluginSharedStyle),
        __metadata("design:type", plugin_shared_style_1.PluginSharedStyle)
    ], PluginContributionHandler.prototype, "style", void 0);
    __decorate([
        inversify_1.inject(browser_2.TaskDefinitionRegistry),
        __metadata("design:type", browser_2.TaskDefinitionRegistry)
    ], PluginContributionHandler.prototype, "taskDefinitionRegistry", void 0);
    __decorate([
        inversify_1.inject(browser_2.ProblemMatcherRegistry),
        __metadata("design:type", browser_2.ProblemMatcherRegistry)
    ], PluginContributionHandler.prototype, "problemMatcherRegistry", void 0);
    __decorate([
        inversify_1.inject(browser_2.ProblemPatternRegistry),
        __metadata("design:type", browser_2.ProblemPatternRegistry)
    ], PluginContributionHandler.prototype, "problemPatternRegistry", void 0);
    __decorate([
        inversify_1.inject(plugin_debug_service_1.PluginDebugService),
        __metadata("design:type", plugin_debug_service_1.PluginDebugService)
    ], PluginContributionHandler.prototype, "debugService", void 0);
    __decorate([
        inversify_1.inject(debug_schema_updater_1.DebugSchemaUpdater),
        __metadata("design:type", debug_schema_updater_1.DebugSchemaUpdater)
    ], PluginContributionHandler.prototype, "debugSchema", void 0);
    __decorate([
        inversify_1.inject(monaco_theming_service_1.MonacoThemingService),
        __metadata("design:type", monaco_theming_service_1.MonacoThemingService)
    ], PluginContributionHandler.prototype, "monacoThemingService", void 0);
    __decorate([
        inversify_1.inject(color_registry_1.ColorRegistry),
        __metadata("design:type", color_registry_1.ColorRegistry)
    ], PluginContributionHandler.prototype, "colors", void 0);
    __decorate([
        inversify_1.inject(plugin_icon_theme_service_1.PluginIconThemeService),
        __metadata("design:type", plugin_icon_theme_service_1.PluginIconThemeService)
    ], PluginContributionHandler.prototype, "iconThemeService", void 0);
    PluginContributionHandler = __decorate([
        inversify_1.injectable()
    ], PluginContributionHandler);
    return PluginContributionHandler;
}());
exports.PluginContributionHandler = PluginContributionHandler;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/plugin-ext-deploy-command.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/plugin-ext-deploy-command.js ***!
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
exports.DeployQuickOpenItem = exports.PluginExtDeployCommandService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@theia/plugin-ext/lib/common/index.js");
var PluginExtDeployCommandService = /** @class */ (function () {
    function PluginExtDeployCommandService() {
        /**
         * Whether the dialog is currently open.
         */
        this.isOpen = false;
        this.items = [];
    }
    PluginExtDeployCommandService.prototype.deploy = function () {
        var _this = this;
        var placeholderText = "Plugin's id to deploy.";
        this.isOpen = true;
        this.quickOpenService.open(this, {
            placeholder: placeholderText,
            fuzzyMatchLabel: true,
            fuzzyMatchDescription: true,
            fuzzySort: true,
            onClose: function () {
                _this.isOpen = false;
            },
        });
    };
    PluginExtDeployCommandService.prototype.onType = function (lookFor, acceptor) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.items = [];
                if (lookFor || lookFor.length > 0) {
                    this.items.push(new DeployQuickOpenItem(lookFor, this.pluginServer, 'Deploy this plugin'));
                }
                acceptor(this.items);
                return [2 /*return*/];
            });
        });
    };
    PluginExtDeployCommandService.COMMAND = {
        id: 'plugin-ext:deploy-plugin-id',
        category: 'Plugin',
        label: 'Deploy Plugin by Id',
    };
    __decorate([
        inversify_1.inject(browser_1.QuickOpenService),
        __metadata("design:type", browser_1.QuickOpenService)
    ], PluginExtDeployCommandService.prototype, "quickOpenService", void 0);
    __decorate([
        inversify_1.inject(common_1.PluginServer),
        __metadata("design:type", Object)
    ], PluginExtDeployCommandService.prototype, "pluginServer", void 0);
    PluginExtDeployCommandService = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], PluginExtDeployCommandService);
    return PluginExtDeployCommandService;
}());
exports.PluginExtDeployCommandService = PluginExtDeployCommandService;
var DeployQuickOpenItem = /** @class */ (function (_super) {
    __extends(DeployQuickOpenItem, _super);
    function DeployQuickOpenItem(name, pluginServer, description) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.pluginServer = pluginServer;
        _this.description = description;
        return _this;
    }
    DeployQuickOpenItem.prototype.getLabel = function () {
        return this.name;
    };
    DeployQuickOpenItem.prototype.getDetail = function () {
        return this.description || '';
    };
    DeployQuickOpenItem.prototype.run = function (mode) {
        if (mode !== browser_1.QuickOpenMode.OPEN) {
            return false;
        }
        this.pluginServer.deploy(this.name);
        return true;
    };
    return DeployQuickOpenItem;
}(browser_1.QuickOpenItem));
exports.DeployQuickOpenItem = DeployQuickOpenItem;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/plugin-ext-frontend-module.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/plugin-ext-frontend-module.js ***!
  \***************************************************************************************/
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
__webpack_require__(/*! ../../../src/main/style/status-bar.css */ "./node_modules/@theia/plugin-ext/src/main/style/status-bar.css");
__webpack_require__(/*! ../../../src/main/browser/style/index.css */ "./node_modules/@theia/plugin-ext/src/main/browser/style/index.css");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var messaging_1 = __webpack_require__(/*! @theia/core/lib/browser/messaging */ "./node_modules/@theia/core/lib/browser/messaging/index.js");
var hosted_plugin_1 = __webpack_require__(/*! ../../hosted/browser/hosted-plugin */ "./node_modules/@theia/plugin-ext/lib/hosted/browser/hosted-plugin.js");
var hosted_plugin_watcher_1 = __webpack_require__(/*! ../../hosted/browser/hosted-plugin-watcher */ "./node_modules/@theia/plugin-ext/lib/hosted/browser/hosted-plugin-watcher.js");
var commands_1 = __webpack_require__(/*! ./commands */ "./node_modules/@theia/plugin-ext/lib/main/browser/commands.js");
var plugin_frontend_contribution_1 = __webpack_require__(/*! ./plugin-frontend-contribution */ "./node_modules/@theia/plugin-ext/lib/main/browser/plugin-frontend-contribution.js");
var plugin_protocol_1 = __webpack_require__(/*! ../../common/plugin-protocol */ "./node_modules/@theia/plugin-ext/lib/common/plugin-protocol.js");
var modal_notification_1 = __webpack_require__(/*! ./dialogs/modal-notification */ "./node_modules/@theia/plugin-ext/lib/main/browser/dialogs/modal-notification.js");
var plugin_ext_widget_1 = __webpack_require__(/*! ./plugin-ext-widget */ "./node_modules/@theia/plugin-ext/lib/main/browser/plugin-ext-widget.js");
var plugin_frontend_view_contribution_1 = __webpack_require__(/*! ./plugin-frontend-view-contribution */ "./node_modules/@theia/plugin-ext/lib/main/browser/plugin-frontend-view-contribution.js");
var plugin_ext_deploy_command_1 = __webpack_require__(/*! ./plugin-ext-deploy-command */ "./node_modules/@theia/plugin-ext/lib/main/browser/plugin-ext-deploy-command.js");
var text_editor_model_service_1 = __webpack_require__(/*! ./text-editor-model-service */ "./node_modules/@theia/plugin-ext/lib/main/browser/text-editor-model-service.js");
var untitled_resource_1 = __webpack_require__(/*! ./editor/untitled-resource */ "./node_modules/@theia/plugin-ext/lib/main/browser/editor/untitled-resource.js");
var menus_contribution_handler_1 = __webpack_require__(/*! ./menus/menus-contribution-handler */ "./node_modules/@theia/plugin-ext/lib/main/browser/menus/menus-contribution-handler.js");
var plugin_contribution_handler_1 = __webpack_require__(/*! ./plugin-contribution-handler */ "./node_modules/@theia/plugin-ext/lib/main/browser/plugin-contribution-handler.js");
var plugin_view_registry_1 = __webpack_require__(/*! ./view/plugin-view-registry */ "./node_modules/@theia/plugin-ext/lib/main/browser/view/plugin-view-registry.js");
var workspace_main_1 = __webpack_require__(/*! ./workspace-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/workspace-main.js");
var plugin_ext_api_contribution_1 = __webpack_require__(/*! ../../common/plugin-ext-api-contribution */ "./node_modules/@theia/plugin-ext/lib/common/plugin-ext-api-contribution.js");
var plugin_paths_protocol_1 = __webpack_require__(/*! ../common/plugin-paths-protocol */ "./node_modules/@theia/plugin-ext/lib/main/common/plugin-paths-protocol.js");
var keybindings_contribution_handler_1 = __webpack_require__(/*! ./keybindings/keybindings-contribution-handler */ "./node_modules/@theia/plugin-ext/lib/main/browser/keybindings/keybindings-contribution-handler.js");
var language_client_provider_1 = __webpack_require__(/*! @theia/languages/lib/browser/language-client-provider */ "./node_modules/@theia/languages/lib/browser/language-client-provider.js");
var plugin_language_client_provider_1 = __webpack_require__(/*! ./language-provider/plugin-language-client-provider */ "./node_modules/@theia/plugin-ext/lib/main/browser/language-provider/plugin-language-client-provider.js");
var language_client_contribution_provider_impl_1 = __webpack_require__(/*! ./language-provider/language-client-contribution-provider-impl */ "./node_modules/@theia/plugin-ext/lib/main/browser/language-provider/language-client-contribution-provider-impl.js");
var language_client_contribution_provider_1 = __webpack_require__(/*! ./language-provider/language-client-contribution-provider */ "./node_modules/@theia/plugin-ext/lib/main/browser/language-provider/language-client-contribution-provider.js");
var debug_session_contribution_1 = __webpack_require__(/*! @theia/debug/lib/browser/debug-session-contribution */ "./node_modules/@theia/debug/lib/browser/debug-session-contribution.js");
var plugin_debug_session_contribution_registry_1 = __webpack_require__(/*! ./debug/plugin-debug-session-contribution-registry */ "./node_modules/@theia/plugin-ext/lib/main/browser/debug/plugin-debug-session-contribution-registry.js");
var plugin_debug_service_1 = __webpack_require__(/*! ./debug/plugin-debug-service */ "./node_modules/@theia/plugin-ext/lib/main/browser/debug/plugin-debug-service.js");
var debug_service_1 = __webpack_require__(/*! @theia/debug/lib/common/debug-service */ "./node_modules/@theia/debug/lib/common/debug-service.js");
var plugin_shared_style_1 = __webpack_require__(/*! ./plugin-shared-style */ "./node_modules/@theia/plugin-ext/lib/main/browser/plugin-shared-style.js");
var file_system_main_1 = __webpack_require__(/*! ./file-system-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/file-system-main.js");
var selection_provider_command_1 = __webpack_require__(/*! ./selection-provider-command */ "./node_modules/@theia/plugin-ext/lib/main/browser/selection-provider-command.js");
var view_column_service_1 = __webpack_require__(/*! ./view-column-service */ "./node_modules/@theia/plugin-ext/lib/main/browser/view-column-service.js");
var view_context_key_service_1 = __webpack_require__(/*! ./view/view-context-key-service */ "./node_modules/@theia/plugin-ext/lib/main/browser/view/view-context-key-service.js");
var plugin_view_widget_1 = __webpack_require__(/*! ./view/plugin-view-widget */ "./node_modules/@theia/plugin-ext/lib/main/browser/view/plugin-view-widget.js");
var tree_view_widget_1 = __webpack_require__(/*! ./view/tree-view-widget */ "./node_modules/@theia/plugin-ext/lib/main/browser/view/tree-view-widget.js");
var rpc_protocol_1 = __webpack_require__(/*! ../../common/rpc-protocol */ "./node_modules/@theia/plugin-ext/lib/common/rpc-protocol.js");
var common_2 = __webpack_require__(/*! ../../common */ "./node_modules/@theia/plugin-ext/lib/common/index.js");
var languages_main_1 = __webpack_require__(/*! ./languages-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/languages-main.js");
var output_channel_registry_main_1 = __webpack_require__(/*! ./output-channel-registry-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/output-channel-registry-main.js");
var in_plugin_filesystem_watcher_manager_1 = __webpack_require__(/*! ./in-plugin-filesystem-watcher-manager */ "./node_modules/@theia/plugin-ext/lib/main/browser/in-plugin-filesystem-watcher-manager.js");
var webview_1 = __webpack_require__(/*! ./webview/webview */ "./node_modules/@theia/plugin-ext/lib/main/browser/webview/webview.js");
var webview_environment_1 = __webpack_require__(/*! ./webview/webview-environment */ "./node_modules/@theia/plugin-ext/lib/main/browser/webview/webview-environment.js");
var webview_theme_data_provider_1 = __webpack_require__(/*! ./webview/webview-theme-data-provider */ "./node_modules/@theia/plugin-ext/lib/main/browser/webview/webview-theme-data-provider.js");
var webview_preferences_1 = __webpack_require__(/*! ./webview/webview-preferences */ "./node_modules/@theia/plugin-ext/lib/main/browser/webview/webview-preferences.js");
var webview_protocol_1 = __webpack_require__(/*! ../common/webview-protocol */ "./node_modules/@theia/plugin-ext/lib/main/common/webview-protocol.js");
var webview_resource_cache_1 = __webpack_require__(/*! ./webview/webview-resource-cache */ "./node_modules/@theia/plugin-ext/lib/main/browser/webview/webview-resource-cache.js");
var plugin_icon_theme_service_1 = __webpack_require__(/*! ./plugin-icon-theme-service */ "./node_modules/@theia/plugin-ext/lib/main/browser/plugin-icon-theme-service.js");
var plugin_tree_view_node_label_provider_1 = __webpack_require__(/*! ./view/plugin-tree-view-node-label-provider */ "./node_modules/@theia/plugin-ext/lib/main/browser/view/plugin-tree-view-node-label-provider.js");
var webview_widget_factory_1 = __webpack_require__(/*! ./webview/webview-widget-factory */ "./node_modules/@theia/plugin-ext/lib/main/browser/webview/webview-widget-factory.js");
exports.default = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    bind(languages_main_1.LanguagesMainImpl).toSelf().inTransientScope();
    bind(common_2.LanguagesMainFactory).toFactory(function (context) { return function (rpc) {
        var child = context.container.createChild();
        child.bind(rpc_protocol_1.RPCProtocol).toConstantValue(rpc);
        return child.get(languages_main_1.LanguagesMainImpl);
    }; });
    bind(output_channel_registry_main_1.OutputChannelRegistryMainImpl).toSelf().inTransientScope();
    bind(common_2.OutputChannelRegistryFactory).toFactory(function (context) { return function () {
        var child = context.container.createChild();
        return child.get(output_channel_registry_main_1.OutputChannelRegistryMainImpl);
    }; });
    bind(modal_notification_1.ModalNotification).toSelf().inSingletonScope();
    bind(hosted_plugin_1.HostedPluginSupport).toSelf().inSingletonScope();
    bind(hosted_plugin_watcher_1.HostedPluginWatcher).toSelf().inSingletonScope();
    bind(selection_provider_command_1.SelectionProviderCommandContribution).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).toService(selection_provider_command_1.SelectionProviderCommandContribution);
    bind(commands_1.OpenUriCommandHandler).toSelf().inSingletonScope();
    bind(plugin_frontend_contribution_1.PluginApiFrontendContribution).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).toService(plugin_frontend_contribution_1.PluginApiFrontendContribution);
    bind(text_editor_model_service_1.EditorModelService).toSelf().inSingletonScope();
    bind(untitled_resource_1.UntitledResourceResolver).toSelf().inSingletonScope();
    bind(common_1.ResourceResolver).toService(untitled_resource_1.UntitledResourceResolver);
    bind(browser_1.FrontendApplicationContribution).toDynamicValue(function (ctx) { return ({
        onStart: function () {
            ctx.container.get(hosted_plugin_1.HostedPluginSupport).onStart(ctx.container);
        }
    }); });
    bind(plugin_protocol_1.HostedPluginServer).toDynamicValue(function (ctx) {
        var connection = ctx.container.get(messaging_1.WebSocketConnectionProvider);
        var hostedWatcher = ctx.container.get(hosted_plugin_watcher_1.HostedPluginWatcher);
        return connection.createProxy(plugin_protocol_1.hostedServicePath, hostedWatcher.getHostedPluginClient());
    }).inSingletonScope();
    bind(plugin_paths_protocol_1.PluginPathsService).toDynamicValue(function (ctx) {
        var connection = ctx.container.get(messaging_1.WebSocketConnectionProvider);
        return connection.createProxy(plugin_paths_protocol_1.pluginPathsServicePath);
    }).inSingletonScope();
    browser_1.bindViewContribution(bind, plugin_frontend_view_contribution_1.PluginFrontendViewContribution);
    bind(plugin_ext_widget_1.PluginWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: plugin_frontend_view_contribution_1.PluginFrontendViewContribution.PLUGINS_WIDGET_FACTORY_ID,
        createWidget: function () { return ctx.container.get(plugin_ext_widget_1.PluginWidget); }
    }); });
    bind(plugin_ext_deploy_command_1.PluginExtDeployCommandService).toSelf().inSingletonScope();
    bind(plugin_protocol_1.PluginServer).toDynamicValue(function (ctx) {
        var provider = ctx.container.get(messaging_1.WebSocketConnectionProvider);
        return provider.createProxy(plugin_protocol_1.pluginServerJsonRpcPath);
    }).inSingletonScope();
    bind(view_context_key_service_1.ViewContextKeyService).toSelf().inSingletonScope();
    bind(plugin_tree_view_node_label_provider_1.PluginTreeViewNodeLabelProvider).toSelf().inSingletonScope();
    bind(browser_1.LabelProviderContribution).toService(plugin_tree_view_node_label_provider_1.PluginTreeViewNodeLabelProvider);
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: plugin_view_registry_1.PLUGIN_VIEW_DATA_FACTORY_ID,
            createWidget: function (identifier) {
                var child = browser_1.createTreeContainer(container, {
                    contextMenuPath: tree_view_widget_1.VIEW_ITEM_CONTEXT_MENU,
                    globalSelection: true
                });
                child.bind(tree_view_widget_1.TreeViewWidgetIdentifier).toConstantValue(identifier);
                child.bind(tree_view_widget_1.PluginTree).toSelf();
                child.rebind(browser_1.TreeImpl).toService(tree_view_widget_1.PluginTree);
                child.bind(tree_view_widget_1.PluginTreeModel).toSelf();
                child.rebind(browser_1.TreeModelImpl).toService(tree_view_widget_1.PluginTreeModel);
                child.bind(tree_view_widget_1.TreeViewWidget).toSelf();
                child.rebind(browser_1.TreeWidget).toService(tree_view_widget_1.TreeViewWidget);
                return child.get(browser_1.TreeWidget);
            }
        });
    }).inSingletonScope();
    webview_preferences_1.bindWebviewPreferences(bind);
    bind(webview_environment_1.WebviewEnvironment).toSelf().inSingletonScope();
    bind(webview_theme_data_provider_1.WebviewThemeDataProvider).toSelf().inSingletonScope();
    bind(webview_protocol_1.WebviewResourceLoader).toDynamicValue(function (ctx) {
        return messaging_1.WebSocketConnectionProvider.createProxy(ctx.container, webview_protocol_1.WebviewResourceLoaderPath);
    }).inSingletonScope();
    bind(webview_resource_cache_1.WebviewResourceCache).toSelf().inSingletonScope();
    bind(webview_1.WebviewWidget).toSelf();
    bind(webview_widget_factory_1.WebviewWidgetFactory).toDynamicValue(function (ctx) { return new webview_widget_factory_1.WebviewWidgetFactory(ctx.container); }).inSingletonScope();
    bind(browser_1.WidgetFactory).toService(webview_widget_factory_1.WebviewWidgetFactory);
    bind(plugin_view_widget_1.PluginViewWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: plugin_view_registry_1.PLUGIN_VIEW_FACTORY_ID,
            createWidget: function (identifier) {
                var child = container.createChild();
                child.bind(plugin_view_widget_1.PluginViewWidgetIdentifier).toConstantValue(identifier);
                return child.get(plugin_view_widget_1.PluginViewWidget);
            }
        });
    }).inSingletonScope();
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: plugin_view_registry_1.PLUGIN_VIEW_CONTAINER_FACTORY_ID,
            createWidget: function (identifier) {
                return container.get(browser_1.ViewContainer.Factory)(identifier);
            }
        });
    }).inSingletonScope();
    bind(plugin_shared_style_1.PluginSharedStyle).toSelf().inSingletonScope();
    bind(plugin_view_registry_1.PluginViewRegistry).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).toService(plugin_view_registry_1.PluginViewRegistry);
    bind(plugin_icon_theme_service_1.PluginIconThemeFactory).toFactory(function (_a) {
        var container = _a.container;
        return function (definition) {
            var child = container.createChild();
            child.bind(plugin_icon_theme_service_1.PluginIconThemeDefinition).toConstantValue(definition);
            child.bind(plugin_icon_theme_service_1.PluginIconTheme).toSelf().inSingletonScope();
            return child.get(plugin_icon_theme_service_1.PluginIconTheme);
        };
    });
    bind(plugin_icon_theme_service_1.PluginIconThemeService).toSelf().inSingletonScope();
    bind(browser_1.LabelProviderContribution).toService(plugin_icon_theme_service_1.PluginIconThemeService);
    bind(menus_contribution_handler_1.MenusContributionPointHandler).toSelf().inSingletonScope();
    bind(keybindings_contribution_handler_1.KeybindingsContributionPointHandler).toSelf().inSingletonScope();
    bind(plugin_contribution_handler_1.PluginContributionHandler).toSelf().inSingletonScope();
    bind(in_plugin_filesystem_watcher_manager_1.InPluginFileSystemWatcherManager).toSelf().inSingletonScope();
    bind(workspace_main_1.TextContentResourceResolver).toSelf().inSingletonScope();
    bind(common_1.ResourceResolver).toService(workspace_main_1.TextContentResourceResolver);
    bind(file_system_main_1.FSResourceResolver).toSelf().inSingletonScope();
    bind(common_1.ResourceResolver).toService(file_system_main_1.FSResourceResolver);
    common_1.bindContributionProvider(bind, plugin_ext_api_contribution_1.MainPluginApiProvider);
    bind(language_client_contribution_provider_impl_1.LanguageClientContributionProviderImpl).toSelf().inSingletonScope();
    bind(language_client_contribution_provider_1.LanguageClientContributionProvider).toService(language_client_contribution_provider_impl_1.LanguageClientContributionProviderImpl);
    bind(plugin_language_client_provider_1.LanguageClientProviderImpl).toSelf().inSingletonScope();
    rebind(language_client_provider_1.LanguageClientProvider).toService(plugin_language_client_provider_1.LanguageClientProviderImpl);
    bind(plugin_debug_service_1.PluginDebugService).toSelf().inSingletonScope();
    rebind(debug_service_1.DebugService).toService(plugin_debug_service_1.PluginDebugService);
    bind(plugin_debug_session_contribution_registry_1.PluginDebugSessionContributionRegistry).toSelf().inSingletonScope();
    rebind(debug_session_contribution_1.DebugSessionContributionRegistry).toService(plugin_debug_session_contribution_registry_1.PluginDebugSessionContributionRegistry);
    bind(view_column_service_1.ViewColumnService).toSelf().inSingletonScope();
});


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/plugin-ext-widget.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/plugin-ext-widget.js ***!
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
exports.PluginWidget = void 0;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var react_widget_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets/react-widget */ "./node_modules/@theia/core/lib/browser/widgets/react-widget.js");
var alert_message_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets/alert-message */ "./node_modules/@theia/core/lib/browser/widgets/alert-message.js");
var hosted_plugin_1 = __webpack_require__(/*! ../../hosted/browser/hosted-plugin */ "./node_modules/@theia/plugin-ext/lib/hosted/browser/hosted-plugin.js");
var progress_bar_factory_1 = __webpack_require__(/*! @theia/core/lib/browser/progress-bar-factory */ "./node_modules/@theia/core/lib/browser/progress-bar-factory.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var PluginWidget = /** @class */ (function (_super) {
    __extends(PluginWidget, _super);
    function PluginWidget() {
        var _this = _super.call(this) || this;
        _this.toDisposeProgress = new disposable_1.DisposableCollection();
        _this.id = 'plugins';
        _this.title.label = 'Plugins';
        _this.title.caption = 'Plugins';
        _this.title.iconClass = 'fa plugins-tab-icon';
        _this.title.closable = true;
        _this.node.tabIndex = 0;
        _this.addClass('theia-plugins');
        _this.update();
        return _this;
    }
    PluginWidget.prototype.init = function () {
        var _this = this;
        this.toDispose.push(this.pluginService.onDidChangePlugins(function () { return _this.update(); }));
    };
    PluginWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.node.focus();
    };
    PluginWidget.prototype.render = function () {
        var _this = this;
        return React.createElement("div", { ref: function (ref) {
                _this.toDisposeProgress.dispose();
                _this.toDispose.push(_this.toDisposeProgress);
                if (ref) {
                    _this.toDispose.push(_this.progressBarFactory({ container: _this.node, insertMode: 'prepend', locationId: hosted_plugin_1.PluginProgressLocation }));
                }
            } }, this.doRender());
    };
    PluginWidget.prototype.doRender = function () {
        var plugins = this.pluginService.plugins;
        if (!plugins.length) {
            return React.createElement(alert_message_1.AlertMessage, { type: 'INFO', header: 'No plugins currently available.' });
        }
        return React.createElement(React.Fragment, null, this.renderPlugins(plugins));
    };
    PluginWidget.prototype.renderPlugins = function (plugins) {
        var _this = this;
        return React.createElement("div", { id: 'pluginListContainer' }, plugins.sort(function (a, b) { return _this.compareMetadata(a, b); }).map(function (plugin) { return _this.renderPlugin(plugin); }));
    };
    PluginWidget.prototype.renderPlugin = function (plugin) {
        return React.createElement("div", { key: plugin.model.name, className: this.createPluginClassName(plugin) },
            React.createElement("div", { className: 'column flexcontainer pluginInformationContainer' },
                React.createElement("div", { className: 'row flexcontainer' },
                    React.createElement("div", { className: 'fa fa-puzzle-piece fa-2x fa-fw' }),
                    React.createElement("div", { title: plugin.model.name, className: 'pluginName noWrapInfo' }, plugin.model.name)),
                React.createElement("div", { className: 'row flexcontainer' },
                    React.createElement("div", { className: 'pluginVersion' }, plugin.model.version)),
                React.createElement("div", { className: 'row flexcontainer' },
                    React.createElement("div", { className: 'pluginDescription noWrapInfo' }, plugin.model.description)),
                React.createElement("div", { className: 'row flexcontainer' },
                    React.createElement("div", { className: 'pluginPublisher noWrapInfo flexcontainer' }, plugin.model.publisher))));
    };
    PluginWidget.prototype.createPluginClassName = function (plugin) {
        var classNames = ['pluginHeaderContainer'];
        return classNames.join(' ');
    };
    /**
     * Compare two plugins based on their names, and publishers.
     * @param a the first plugin metadata.
     * @param b the second plugin metadata.
     */
    PluginWidget.prototype.compareMetadata = function (a, b) {
        // Determine the name of the plugins.
        var nameA = a.model.name.toLowerCase();
        var nameB = b.model.name.toLowerCase();
        // Determine the publisher of the plugin (when names are equal).
        var publisherA = a.model.publisher.toLowerCase();
        var publisherB = b.model.publisher.toLowerCase();
        return (nameA === nameA)
            ? nameA.localeCompare(nameB)
            : publisherA.localeCompare(publisherB);
    };
    __decorate([
        inversify_1.inject(hosted_plugin_1.HostedPluginSupport),
        __metadata("design:type", hosted_plugin_1.HostedPluginSupport)
    ], PluginWidget.prototype, "pluginService", void 0);
    __decorate([
        inversify_1.inject(progress_bar_factory_1.ProgressBarFactory),
        __metadata("design:type", Function)
    ], PluginWidget.prototype, "progressBarFactory", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PluginWidget.prototype, "init", null);
    PluginWidget = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], PluginWidget);
    return PluginWidget;
}(react_widget_1.ReactWidget));
exports.PluginWidget = PluginWidget;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/plugin-frontend-contribution.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/plugin-frontend-contribution.js ***!
  \*****************************************************************************************/
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
exports.PluginApiFrontendContribution = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var plugin_ext_deploy_command_1 = __webpack_require__(/*! ./plugin-ext-deploy-command */ "./node_modules/@theia/plugin-ext/lib/main/browser/plugin-ext-deploy-command.js");
var commands_1 = __webpack_require__(/*! ./commands */ "./node_modules/@theia/plugin-ext/lib/main/browser/commands.js");
var PluginApiFrontendContribution = /** @class */ (function () {
    function PluginApiFrontendContribution() {
    }
    PluginApiFrontendContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(plugin_ext_deploy_command_1.PluginExtDeployCommandService.COMMAND, {
            execute: function () { return _this.pluginExtDeployCommandService.deploy(); }
        });
        commands.registerCommand(commands_1.OpenUriCommandHandler.COMMAND_METADATA, {
            execute: function (arg) { return _this.openUriCommandHandler.execute(arg); },
            isVisible: function () { return false; }
        });
    };
    __decorate([
        inversify_1.inject(plugin_ext_deploy_command_1.PluginExtDeployCommandService),
        __metadata("design:type", plugin_ext_deploy_command_1.PluginExtDeployCommandService)
    ], PluginApiFrontendContribution.prototype, "pluginExtDeployCommandService", void 0);
    __decorate([
        inversify_1.inject(commands_1.OpenUriCommandHandler),
        __metadata("design:type", commands_1.OpenUriCommandHandler)
    ], PluginApiFrontendContribution.prototype, "openUriCommandHandler", void 0);
    PluginApiFrontendContribution = __decorate([
        inversify_1.injectable()
    ], PluginApiFrontendContribution);
    return PluginApiFrontendContribution;
}());
exports.PluginApiFrontendContribution = PluginApiFrontendContribution;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/plugin-frontend-view-contribution.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/plugin-frontend-view-contribution.js ***!
  \**********************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginFrontendViewContribution = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var view_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/view-contribution */ "./node_modules/@theia/core/lib/browser/shell/view-contribution.js");
var PluginFrontendViewContribution = /** @class */ (function (_super) {
    __extends(PluginFrontendViewContribution, _super);
    function PluginFrontendViewContribution() {
        return _super.call(this, {
            widgetId: PluginFrontendViewContribution_1.PLUGINS_WIDGET_FACTORY_ID,
            widgetName: 'Plugins',
            defaultWidgetOptions: {
                area: 'left',
                rank: 400
            },
            toggleCommandId: 'pluginsView:toggle',
            toggleKeybinding: 'ctrlcmd+shift+l'
        }) || this;
    }
    PluginFrontendViewContribution_1 = PluginFrontendViewContribution;
    var PluginFrontendViewContribution_1;
    PluginFrontendViewContribution.PLUGINS_WIDGET_FACTORY_ID = 'plugins';
    PluginFrontendViewContribution = PluginFrontendViewContribution_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], PluginFrontendViewContribution);
    return PluginFrontendViewContribution;
}(view_contribution_1.AbstractViewContribution));
exports.PluginFrontendViewContribution = PluginFrontendViewContribution;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/plugin-icon-theme-service.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/plugin-icon-theme-service.js ***!
  \**************************************************************************************/
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
// some code is copied and modified from:
// https://github.com/microsoft/vscode/blob/7cf4cca47aa025a590fc939af54932042302be63/src/vs/workbench/services/themes/browser/fileIconThemeData.ts
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
exports.PluginIconThemeService = exports.PluginIconTheme = exports.PluginIconThemeDefinition = exports.PluginIconThemeFactory = void 0;
var debounce = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
var jsoncparser = __webpack_require__(/*! jsonc-parser */ "./node_modules/jsonc-parser/lib/esm/main.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/filesystem/lib/common */ "./node_modules/@theia/filesystem/lib/common/index.js");
var icon_theme_service_1 = __webpack_require__(/*! @theia/core/lib/browser/icon-theme-service */ "./node_modules/@theia/core/lib/browser/icon-theme-service.js");
var plugin_protocol_1 = __webpack_require__(/*! ../../common/plugin-protocol */ "./node_modules/@theia/plugin-ext/lib/common/plugin-protocol.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var label_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/label-provider */ "./node_modules/@theia/core/lib/browser/label-provider.js");
var browser_1 = __webpack_require__(/*! @theia/filesystem/lib/browser */ "./node_modules/@theia/filesystem/lib/browser/index.js");
var navigator_tree_1 = __webpack_require__(/*! @theia/navigator/lib/browser/navigator-tree */ "./node_modules/@theia/navigator/lib/browser/navigator-tree.js");
var endpoint_1 = __webpack_require__(/*! @theia/core/lib/browser/endpoint */ "./node_modules/@theia/core/lib/browser/endpoint.js");
exports.PluginIconThemeFactory = Symbol('PluginIconThemeFactory');
var PluginIconThemeDefinition = /** @class */ (function () {
    function PluginIconThemeDefinition() {
    }
    PluginIconThemeDefinition = __decorate([
        inversify_1.injectable()
    ], PluginIconThemeDefinition);
    return PluginIconThemeDefinition;
}());
exports.PluginIconThemeDefinition = PluginIconThemeDefinition;
var PluginIconTheme = /** @class */ (function (_super) {
    __extends(PluginIconTheme, _super);
    function PluginIconTheme() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onDidChangeEmitter = new event_1.Emitter();
        _this.onDidChange = _this.onDidChangeEmitter.event;
        _this.toDeactivate = new disposable_1.DisposableCollection();
        _this.toUnload = new disposable_1.DisposableCollection();
        _this.toDisposeStyleElement = new disposable_1.DisposableCollection();
        _this.toDispose = new disposable_1.DisposableCollection(_this.toDeactivate, _this.toDisposeStyleElement, _this.toUnload, _this.onDidChangeEmitter);
        _this.icons = new Set();
        _this.reload = debounce(function () {
            _this.toUnload.dispose();
            _this.doActivate();
        }, 50);
        _this.fileIcon = 'theia-plugin-file-icon';
        _this.folderIcon = 'theia-plugin-folder-icon';
        _this.folderExpandedIcon = 'theia-plugin-folder-expanded-icon';
        _this.rootFolderIcon = 'theia-plugin-root-folder-icon';
        _this.rootFolderExpandedIcon = 'theia-plugin-root-folder-expanded-icon';
        return _this;
    }
    PluginIconTheme.prototype.init = function () {
        Object.assign(this, this.definition);
        this.packageRootUri = new uri_1.default(this.packageUri);
        this.locationUri = new uri_1.default(this.uri).parent;
    };
    PluginIconTheme.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    PluginIconTheme.prototype.fireDidChange = function () {
        this.onDidChangeEmitter.fire({ affects: function () { return true; } });
    };
    PluginIconTheme.prototype.activate = function () {
        var _this = this;
        if (!this.toDeactivate.disposed) {
            return this.toDeactivate;
        }
        this.toDeactivate.push(disposable_1.Disposable.create(function () { return _this.fireDidChange(); }));
        this.doActivate();
        return this.toDeactivate;
    };
    PluginIconTheme.prototype.doActivate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.load()];
                    case 1:
                        _a.sent();
                        this.updateStyleElement();
                        return [2 /*return*/];
                }
            });
        });
    };
    PluginIconTheme.prototype.updateStyleElement = function () {
        this.toDisposeStyleElement.dispose();
        if (this.toDeactivate.disposed || !this.styleSheetContent) {
            return;
        }
        var styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        styleElement.className = 'theia-icon-theme';
        styleElement.innerHTML = this.styleSheetContent;
        document.head.appendChild(styleElement);
        var toRemoveStyleElement = disposable_1.Disposable.create(function () { return styleElement.remove(); });
        this.toDisposeStyleElement.push(toRemoveStyleElement);
        this.toDeactivate.push(toRemoveStyleElement);
        this.fireDidChange();
    };
    /**
     * This should be aligned with
     * https://github.com/microsoft/vscode/blob/7cf4cca47aa025a590fc939af54932042302be63/src/vs/workbench/services/themes/browser/fileIconThemeData.ts#L201
     */
    PluginIconTheme.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var content, json, uri, toUnwatch, iconDefinitions, definitionSelectors, acceptSelector, fonts, fonts_1, fonts_1_1, font, src, _a, _b, srcLocation, cssUrl, firstFont, _c, _d, definitionId, iconDefinition, selectors, cssUrl, body;
            var e_1, _e, e_2, _f, e_3, _g;
            var _this = this;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        if (this.styleSheetContent !== undefined) {
                            return [2 /*return*/];
                        }
                        this.styleSheetContent = '';
                        this.toUnload.push(disposable_1.Disposable.create(function () {
                            _this.styleSheetContent = undefined;
                            _this.hasFileIcons = undefined;
                            _this.hasFolderIcons = undefined;
                            _this.hidesExplorerArrows = undefined;
                            _this.icons.clear();
                        }));
                        return [4 /*yield*/, this.fileSystem.resolveContent(this.uri)];
                    case 1:
                        content = (_h.sent()).content;
                        json = jsoncparser.parse(content, undefined, { disallowComments: false });
                        this.hidesExplorerArrows = !!json.hidesExplorerArrows;
                        uri = new uri_1.default(this.uri);
                        return [4 /*yield*/, this.fsWatcher.watchFileChanges(uri)];
                    case 2:
                        toUnwatch = _h.sent();
                        if (this.toUnload.disposed) {
                            toUnwatch.dispose();
                        }
                        else {
                            this.toUnload.push(toUnwatch);
                            this.toUnload.push(this.fsWatcher.onFilesChanged(function (e) {
                                if (browser_1.FileChangeEvent.isChanged(e, uri)) {
                                    _this.reload();
                                }
                            }));
                        }
                        iconDefinitions = json.iconDefinitions;
                        if (!iconDefinitions) {
                            return [2 /*return*/];
                        }
                        definitionSelectors = new Map();
                        acceptSelector = function (themeType, definitionId) {
                            var e_4, _a;
                            var icons = [];
                            for (var _i = 2; _i < arguments.length; _i++) {
                                icons[_i - 2] = arguments[_i];
                            }
                            if (!iconDefinitions[definitionId]) {
                                return;
                            }
                            var selector = '';
                            try {
                                for (var icons_1 = __values(icons), icons_1_1 = icons_1.next(); !icons_1_1.done; icons_1_1 = icons_1.next()) {
                                    var icon = icons_1_1.value;
                                    if (icon) {
                                        selector += '.' + icon;
                                        _this.icons.add(icon);
                                    }
                                }
                            }
                            catch (e_4_1) { e_4 = { error: e_4_1 }; }
                            finally {
                                try {
                                    if (icons_1_1 && !icons_1_1.done && (_a = icons_1.return)) _a.call(icons_1);
                                }
                                finally { if (e_4) throw e_4.error; }
                            }
                            if (!selector) {
                                return;
                            }
                            var selectors = definitionSelectors.get(definitionId) || [];
                            if (themeType !== 'dark') {
                                selector = '.theia-' + themeType + ' ' + selector;
                            }
                            selectors.push(selector);
                            selectors.push(selector + '::before');
                            definitionSelectors.set(definitionId, selectors);
                        };
                        this.collectSelectors(json, acceptSelector.bind(undefined, 'dark'));
                        if (json.light) {
                            this.collectSelectors(json.light, acceptSelector.bind(undefined, 'light'));
                        }
                        if (json.highContrast) {
                            this.collectSelectors(json.highContrast, acceptSelector.bind(undefined, 'hc'));
                        }
                        if (!this.icons.size) {
                            return [2 /*return*/];
                        }
                        fonts = json.fonts;
                        if (Array.isArray(fonts)) {
                            try {
                                for (fonts_1 = __values(fonts), fonts_1_1 = fonts_1.next(); !fonts_1_1.done; fonts_1_1 = fonts_1.next()) {
                                    font = fonts_1_1.value;
                                    if (font) {
                                        src = '';
                                        if (Array.isArray(font.src)) {
                                            try {
                                                for (_a = (e_2 = void 0, __values(font.src)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                    srcLocation = _b.value;
                                                    if (srcLocation && srcLocation.path) {
                                                        cssUrl = this.toCSSUrl(srcLocation.path);
                                                        if (cssUrl) {
                                                            if (src) {
                                                                src += ', ';
                                                            }
                                                            src += cssUrl + " format('" + srcLocation.format + "')";
                                                        }
                                                    }
                                                }
                                            }
                                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                            finally {
                                                try {
                                                    if (_b && !_b.done && (_f = _a.return)) _f.call(_a);
                                                }
                                                finally { if (e_2) throw e_2.error; }
                                            }
                                        }
                                        if (src) {
                                            this.styleSheetContent += "@font-face {\n    src: " + src + ";\n    font-family: '" + font.id + "';\n    font-weight: " + font.weight + ";\n    font-style: " + font.style + ";\n}\n";
                                        }
                                    }
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (fonts_1_1 && !fonts_1_1.done && (_e = fonts_1.return)) _e.call(fonts_1);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                            firstFont = fonts[0];
                            if (firstFont && firstFont.id) {
                                this.styleSheetContent += "." + this.fileIcon + "::before, ." + this.folderIcon + "::before, ." + this.rootFolderIcon + "::before {\n    font-family: '" + firstFont.id + "';\n    font-size: " + (firstFont.size || '150%') + ";\n    -webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tvertical-align: top;\n}\n";
                            }
                        }
                        try {
                            for (_c = __values(definitionSelectors.keys()), _d = _c.next(); !_d.done; _d = _c.next()) {
                                definitionId = _d.value;
                                iconDefinition = iconDefinitions[definitionId];
                                selectors = definitionSelectors.get(definitionId);
                                if (selectors && iconDefinition) {
                                    cssUrl = this.toCSSUrl(iconDefinition.iconPath);
                                    if (cssUrl) {
                                        this.styleSheetContent += selectors.join(', ') + " {\n    content: ' ';\n    background-image: " + cssUrl + ";\n\tbackground-size: 16px;\n\tbackground-position: left center;\n\tbackground-repeat: no-repeat;\n}\n";
                                    }
                                    if (iconDefinition.fontCharacter || iconDefinition.fontColor) {
                                        body = '';
                                        if (iconDefinition.fontColor) {
                                            body += " color: " + iconDefinition.fontColor + ";";
                                        }
                                        if (iconDefinition.fontCharacter) {
                                            body += " content: '" + iconDefinition.fontCharacter + "';";
                                        }
                                        if (iconDefinition.fontSize) {
                                            body += " font-size: " + iconDefinition.fontSize + ";";
                                        }
                                        if (iconDefinition.fontId) {
                                            body += " font-family: " + iconDefinition.fontId + ";";
                                        }
                                        this.styleSheetContent += selectors.join(', ') + " {" + body + " }\n";
                                    }
                                }
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_g = _c.return)) _g.call(_c);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PluginIconTheme.prototype.toCSSUrl = function (iconPath) {
        if (!iconPath) {
            return undefined;
        }
        var iconUri = this.locationUri.resolve(iconPath);
        var relativePath = this.packageRootUri.path.relative(iconUri.path.normalize());
        return relativePath && "url('" + new endpoint_1.Endpoint({
            path: "hostedPlugin/" + this.pluginId + "/" + encodeURIComponent(relativePath.normalize().toString())
        }).getRestUrl().toString() + "')";
    };
    PluginIconTheme.prototype.escapeCSS = function (value) {
        value = value.replace(/[^\-a-zA-Z0-9]/g, '-');
        if (value.charAt(0).match(/[0-9\-]/)) {
            value = '-' + value;
        }
        return value;
    };
    PluginIconTheme.prototype.folderNameIcon = function (folderName) {
        return 'theia-plugin-' + this.escapeCSS(folderName.toLowerCase()) + '-folder-name-icon';
    };
    PluginIconTheme.prototype.expandedFolderNameIcon = function (folderName) {
        return 'theia-plugin-' + this.escapeCSS(folderName.toLowerCase()) + '-expanded-folder-name-icon';
    };
    PluginIconTheme.prototype.fileNameIcon = function (fileName) {
        fileName = fileName.toLowerCase();
        var extIndex = fileName.indexOf('.');
        var icons = extIndex !== -1 ? this.fileExtensionIcon(fileName.substr(extIndex + 1)) : [];
        icons.unshift('theia-plugin-' + this.escapeCSS(fileName) + '-file-name-icon');
        return icons;
    };
    PluginIconTheme.prototype.fileExtensionIcon = function (fileExtension) {
        fileExtension = fileExtension.toString();
        var icons = [];
        var segments = fileExtension.split('.');
        if (segments.length) {
            if (segments.length) {
                for (var i = 0; i < segments.length; i++) {
                    icons.push('theia-plugin-' + this.escapeCSS(segments.slice(i).join('.')) + '-ext-file-icon');
                }
                icons.push('theia-plugin-ext-file-icon'); // extra segment to increase file-ext score
            }
        }
        return icons;
    };
    PluginIconTheme.prototype.languageIcon = function (languageId) {
        return 'theia-plugin-' + this.escapeCSS(languageId) + '-lang-file-icon';
    };
    PluginIconTheme.prototype.collectSelectors = function (associations, accept) {
        if (associations.folder) {
            accept(associations.folder, this.folderIcon);
            this.hasFolderIcons = true;
        }
        if (associations.folderExpanded) {
            accept(associations.folderExpanded, this.folderExpandedIcon);
            this.hasFolderIcons = true;
        }
        var rootFolder = associations.rootFolder || associations.folder;
        if (rootFolder) {
            accept(rootFolder, this.rootFolderIcon);
            this.hasFolderIcons = true;
        }
        var rootFolderExpanded = associations.rootFolderExpanded || associations.folderExpanded;
        if (rootFolderExpanded) {
            accept(rootFolderExpanded, this.rootFolderExpandedIcon);
            this.hasFolderIcons = true;
        }
        if (associations.file) {
            accept(associations.file, this.fileIcon);
            this.hasFileIcons = true;
        }
        var folderNames = associations.folderNames;
        if (folderNames) {
            // eslint-disable-next-line guard-for-in
            for (var folderName in folderNames) {
                accept(folderNames[folderName], this.folderNameIcon(folderName), this.folderIcon);
                this.hasFolderIcons = true;
            }
        }
        var folderNamesExpanded = associations.folderNamesExpanded;
        if (folderNamesExpanded) {
            // eslint-disable-next-line guard-for-in
            for (var folderName in folderNamesExpanded) {
                accept(folderNamesExpanded[folderName], this.expandedFolderNameIcon(folderName), this.folderExpandedIcon);
                this.hasFolderIcons = true;
            }
        }
        var languageIds = associations.languageIds;
        if (languageIds) {
            if (!languageIds.jsonc && languageIds.json) {
                languageIds.jsonc = languageIds.json;
            }
            // eslint-disable-next-line guard-for-in
            for (var languageId in languageIds) {
                accept(languageIds[languageId], this.languageIcon(languageId), this.fileIcon);
                this.hasFileIcons = true;
            }
        }
        var fileExtensions = associations.fileExtensions;
        if (fileExtensions) {
            // eslint-disable-next-line guard-for-in
            for (var fileExtension in fileExtensions) {
                accept.apply(void 0, __spread([fileExtensions[fileExtension]], this.fileExtensionIcon(fileExtension), [this.fileIcon]));
                this.hasFileIcons = true;
            }
        }
        var fileNames = associations.fileNames;
        if (fileNames) {
            // eslint-disable-next-line guard-for-in
            for (var fileName in fileNames) {
                accept.apply(void 0, __spread([fileNames[fileName]], this.fileNameIcon(fileName), [this.fileIcon]));
                this.hasFileIcons = true;
            }
        }
    };
    /**
     * This should be aligned with
     * https://github.com/microsoft/vscode/blob/7cf4cca47aa025a590fc939af54932042302be63/src/vs/editor/common/services/getIconClasses.ts#L5
     */
    PluginIconTheme.prototype.getIcon = function (element) {
        var e_5, _a;
        var icon = '';
        try {
            for (var _b = __values(this.getClassNames(element)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var className = _c.value;
                if (this.icons.has(className)) {
                    if (icon) {
                        icon += ' ';
                    }
                    icon += className;
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return icon;
    };
    PluginIconTheme.prototype.getClassNames = function (element) {
        if (navigator_tree_1.WorkspaceRootNode.is(element)) {
            var name_1 = this.labelProvider.getName(element);
            if (element.expanded) {
                return [this.rootFolderExpandedIcon, this.expandedFolderNameIcon(name_1)];
            }
            return [this.rootFolderIcon, this.folderNameIcon(name_1)];
        }
        if (browser_1.DirNode.is(element)) {
            if (element.expanded) {
                var name_2 = this.labelProvider.getName(element);
                return [this.folderExpandedIcon, this.expandedFolderNameIcon(name_2)];
            }
            return this.getFolderClassNames(element);
        }
        if (browser_1.FileStatNode.is(element)) {
            return this.getFileClassNames(element, element.fileStat.uri);
        }
        if (common_1.FileStat.is(element)) {
            if (element.isDirectory) {
                return this.getFolderClassNames(element);
            }
            return this.getFileClassNames(element, element.uri);
        }
        if (label_provider_1.URIIconReference.is(element)) {
            if (element.id === 'folder') {
                return this.getFolderClassNames(element);
            }
            return this.getFileClassNames(element, element.uri && element.uri.toString());
        }
        return this.getFileClassNames(element, element.toString());
    };
    PluginIconTheme.prototype.getFolderClassNames = function (element) {
        var name = this.labelProvider.getName(element);
        return [this.folderIcon, this.folderNameIcon(name)];
    };
    PluginIconTheme.prototype.getFileClassNames = function (element, uri) {
        var name = this.labelProvider.getName(element);
        var classNames = this.fileNameIcon(name);
        if (uri) {
            var language = monaco.services.StaticServices.modeService.get().createByFilepathOrFirstLine(monaco.Uri.parse(uri));
            classNames.push(this.languageIcon(language.languageIdentifier.language));
            classNames.unshift(this.fileIcon);
        }
        return classNames;
    };
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], PluginIconTheme.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(browser_1.FileSystemWatcher),
        __metadata("design:type", browser_1.FileSystemWatcher)
    ], PluginIconTheme.prototype, "fsWatcher", void 0);
    __decorate([
        inversify_1.inject(label_provider_1.LabelProvider),
        __metadata("design:type", label_provider_1.LabelProvider)
    ], PluginIconTheme.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(PluginIconThemeDefinition),
        __metadata("design:type", PluginIconThemeDefinition)
    ], PluginIconTheme.prototype, "definition", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PluginIconTheme.prototype, "init", null);
    PluginIconTheme = __decorate([
        inversify_1.injectable()
    ], PluginIconTheme);
    return PluginIconTheme;
}(PluginIconThemeDefinition));
exports.PluginIconTheme = PluginIconTheme;
var PluginIconThemeService = /** @class */ (function () {
    function PluginIconThemeService() {
        this.onDidChangeEmitter = new event_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
    }
    PluginIconThemeService.prototype.fireDidChange = function () {
        this.onDidChangeEmitter.fire({ affects: function () { return true; } });
    };
    PluginIconThemeService.prototype.register = function (contribution, plugin) {
        var _this = this;
        var pluginId = plugin_protocol_1.getPluginId(plugin.metadata.model);
        var packageUri = plugin.metadata.model.packageUri;
        var iconTheme = this.iconThemeFactory({
            id: contribution.id,
            label: contribution.label || new uri_1.default(contribution.uri).path.base,
            description: contribution.description,
            uri: contribution.uri,
            uiTheme: contribution.uiTheme,
            pluginId: pluginId,
            packageUri: packageUri
        });
        return new disposable_1.DisposableCollection(iconTheme, iconTheme.onDidChange(function () { return _this.fireDidChange(); }), this.iconThemeService.register(iconTheme));
    };
    PluginIconThemeService.prototype.canHandle = function (element) {
        var current = this.iconThemeService.getDefinition(this.iconThemeService.current);
        if (current instanceof PluginIconTheme && ((element instanceof uri_1.default && element.scheme === 'file') || label_provider_1.URIIconReference.is(element) || common_1.FileStat.is(element) || browser_1.FileStatNode.is(element))) {
            return Number.MAX_SAFE_INTEGER;
        }
        return 0;
    };
    PluginIconThemeService.prototype.getIcon = function (element) {
        var current = this.iconThemeService.getDefinition(this.iconThemeService.current);
        if (current instanceof PluginIconTheme) {
            return current.getIcon(element);
        }
        return undefined;
    };
    __decorate([
        inversify_1.inject(icon_theme_service_1.IconThemeService),
        __metadata("design:type", icon_theme_service_1.IconThemeService)
    ], PluginIconThemeService.prototype, "iconThemeService", void 0);
    __decorate([
        inversify_1.inject(exports.PluginIconThemeFactory),
        __metadata("design:type", Function)
    ], PluginIconThemeService.prototype, "iconThemeFactory", void 0);
    PluginIconThemeService = __decorate([
        inversify_1.injectable()
    ], PluginIconThemeService);
    return PluginIconThemeService;
}());
exports.PluginIconThemeService = PluginIconThemeService;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/plugin-storage.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/plugin-storage.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageMainImpl = void 0;
var plugin_protocol_1 = __webpack_require__(/*! ../../common/plugin-protocol */ "./node_modules/@theia/plugin-ext/lib/common/plugin-protocol.js");
var workspace_service_1 = __webpack_require__(/*! @theia/workspace/lib/browser/workspace-service */ "./node_modules/@theia/workspace/lib/browser/workspace-service.js");
var StorageMainImpl = /** @class */ (function () {
    function StorageMainImpl(container) {
        this.pluginServer = container.get(plugin_protocol_1.PluginServer);
        this.workspaceService = container.get(workspace_service_1.WorkspaceService);
    }
    StorageMainImpl.prototype.$set = function (key, value, isGlobal) {
        return this.pluginServer.setStorageValue(key, value, this.toKind(isGlobal));
    };
    StorageMainImpl.prototype.$get = function (key, isGlobal) {
        return this.pluginServer.getStorageValue(key, this.toKind(isGlobal));
    };
    StorageMainImpl.prototype.$getAll = function (isGlobal) {
        return this.pluginServer.getAllStorageValues(this.toKind(isGlobal));
    };
    StorageMainImpl.prototype.toKind = function (isGlobal) {
        if (isGlobal) {
            return undefined;
        }
        return {
            workspace: this.workspaceService.workspace,
            roots: this.workspaceService.tryGetRoots()
        };
    };
    return StorageMainImpl;
}());
exports.StorageMainImpl = StorageMainImpl;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/plugin-worker.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/plugin-worker.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
exports.PluginWorker = void 0;
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
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var rpc_protocol_1 = __webpack_require__(/*! ../../common/rpc-protocol */ "./node_modules/@theia/plugin-ext/lib/common/rpc-protocol.js");
var PluginWorker = /** @class */ (function () {
    function PluginWorker() {
        var _this = this;
        var emitter = new event_1.Emitter();
        this.worker = new (__webpack_require__(/*! ../../hosted/browser/worker/worker-main */ "./node_modules/@theia/plugin-ext/lib/hosted/browser/worker/worker-main.js"));
        this.worker.onmessage = function (message) {
            emitter.fire(message.data);
        };
        this.worker.onerror = function (e) { return console.error(e); };
        this.rpc = new rpc_protocol_1.RPCProtocolImpl({
            onMessage: emitter.event,
            send: function (m) {
                _this.worker.postMessage(m);
            }
        });
    }
    PluginWorker = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], PluginWorker);
    return PluginWorker;
}());
exports.PluginWorker = PluginWorker;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/preference-registry-main.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/preference-registry-main.js ***!
  \*************************************************************************************/
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
exports.PreferenceRegistryMainImpl = exports.getPreferences = void 0;
var preferences_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences */ "./node_modules/@theia/core/lib/browser/preferences/index.js");
var plugin_api_rpc_1 = __webpack_require__(/*! ../../common/plugin-api-rpc */ "./node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js");
var types_impl_1 = __webpack_require__(/*! ../../plugin/types-impl */ "./node_modules/@theia/plugin-ext/lib/plugin/types-impl.js");
var browser_1 = __webpack_require__(/*! @theia/workspace/lib/browser */ "./node_modules/@theia/workspace/lib/browser/index.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
function getPreferences(preferenceProviderProvider, rootFolders) {
    var folders = rootFolders.map(function (root) { return root.uri.toString(); });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return preferences_1.PreferenceScope.getScopes().reduce(function (result, scope) {
        var e_1, _a;
        result[scope] = {};
        var provider = preferenceProviderProvider(scope);
        if (scope === preferences_1.PreferenceScope.Folder) {
            try {
                for (var folders_1 = __values(folders), folders_1_1 = folders_1.next(); !folders_1_1.done; folders_1_1 = folders_1.next()) {
                    var f = folders_1_1.value;
                    var folderPrefs = provider.getPreferences(f);
                    result[scope][f] = folderPrefs;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (folders_1_1 && !folders_1_1.done && (_a = folders_1.return)) _a.call(folders_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else {
            result[scope] = provider.getPreferences();
        }
        return result;
    }, {});
}
exports.getPreferences = getPreferences;
var PreferenceRegistryMainImpl = /** @class */ (function () {
    function PreferenceRegistryMainImpl(prc, container) {
        var _this = this;
        this.toDispose = new disposable_1.DisposableCollection();
        this.proxy = prc.getProxy(plugin_api_rpc_1.MAIN_RPC_CONTEXT.PREFERENCE_REGISTRY_EXT);
        this.preferenceService = container.get(preferences_1.PreferenceService);
        var preferenceProviderProvider = container.get(preferences_1.PreferenceProviderProvider);
        var preferenceServiceImpl = container.get(preferences_1.PreferenceServiceImpl);
        var workspaceService = container.get(browser_1.WorkspaceService);
        this.toDispose.push(preferenceServiceImpl.onPreferencesChanged(function (changes) {
            // it HAS to be synchronous to propagate changes before update/remove response
            var e_2, _a;
            var roots = workspaceService.tryGetRoots();
            var data = getPreferences(preferenceProviderProvider, roots);
            var eventData = [];
            try {
                for (var _b = __values(Object.keys(changes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var preferenceName = _c.value;
                    var newValue = changes[preferenceName].newValue;
                    eventData.push({ preferenceName: preferenceName, newValue: newValue });
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            _this.proxy.$acceptConfigurationChanged(data, eventData);
        }));
    }
    PreferenceRegistryMainImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    PreferenceRegistryMainImpl.prototype.$updateConfigurationOption = function (target, key, value, resource) {
        return __awaiter(this, void 0, void 0, function () {
            var scope;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        scope = this.parseConfigurationTarget(target);
                        return [4 /*yield*/, this.preferenceService.set(key, value, scope, resource)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PreferenceRegistryMainImpl.prototype.$removeConfigurationOption = function (target, key, resource) {
        return __awaiter(this, void 0, void 0, function () {
            var scope;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        scope = this.parseConfigurationTarget(target);
                        return [4 /*yield*/, this.preferenceService.set(key, undefined, scope, resource)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PreferenceRegistryMainImpl.prototype.parseConfigurationTarget = function (target) {
        if (typeof target === 'boolean') {
            return target ? preferences_1.PreferenceScope.User : preferences_1.PreferenceScope.Workspace;
        }
        switch (target) {
            case types_impl_1.ConfigurationTarget.Global:
                return preferences_1.PreferenceScope.User;
            case types_impl_1.ConfigurationTarget.Workspace:
                return preferences_1.PreferenceScope.Workspace;
            case types_impl_1.ConfigurationTarget.WorkspaceFolder:
                return preferences_1.PreferenceScope.Folder;
            default:
                // PreferenceService knows how to deal with undefined in VS Code compatible way
                return undefined;
        }
    };
    return PreferenceRegistryMainImpl;
}());
exports.PreferenceRegistryMainImpl = PreferenceRegistryMainImpl;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/quick-open-main.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/quick-open-main.js ***!
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
exports.QuickOpenMainImpl = void 0;
var quick_open_model_1 = __webpack_require__(/*! @theia/core/lib/browser/quick-open/quick-open-model */ "./node_modules/@theia/core/lib/browser/quick-open/quick-open-model.js");
var plugin_api_rpc_1 = __webpack_require__(/*! ../../common/plugin-api-rpc */ "./node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js");
var monaco_quick_open_service_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-quick-open-service */ "./node_modules/@theia/monaco/lib/browser/monaco-quick-open-service.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var plugin_shared_style_1 = __webpack_require__(/*! ./plugin-shared-style */ "./node_modules/@theia/plugin-ext/lib/main/browser/plugin-shared-style.js");
var vscode_uri_1 = __webpack_require__(/*! vscode-uri */ "./node_modules/vscode-uri/lib/esm/index.js");
var types_impl_1 = __webpack_require__(/*! ../../plugin/types-impl */ "./node_modules/@theia/plugin-ext/lib/plugin/types-impl.js");
var quick_pick_service_1 = __webpack_require__(/*! @theia/core/lib/common/quick-pick-service */ "./node_modules/@theia/core/lib/common/quick-pick-service.js");
var quick_title_bar_1 = __webpack_require__(/*! @theia/core/lib/browser/quick-open/quick-title-bar */ "./node_modules/@theia/core/lib/browser/quick-open/quick-title-bar.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var quick_open_model_2 = __webpack_require__(/*! @theia/core/lib/common/quick-open-model */ "./node_modules/@theia/core/lib/common/quick-open-model.js");
var QuickOpenMainImpl = /** @class */ (function () {
    function QuickOpenMainImpl(rpc, container) {
        this.toDispose = new disposable_1.DisposableCollection();
        this.proxy = rpc.getProxy(plugin_api_rpc_1.MAIN_RPC_CONTEXT.QUICK_OPEN_EXT);
        this.delegate = container.get(monaco_quick_open_service_1.MonacoQuickOpenService);
        this.quickInput = container.get(browser_1.QuickInputService);
        this.quickTitleBar = container.get(quick_title_bar_1.QuickTitleBar);
        this.quickPick = container.get(quick_pick_service_1.QuickPickService);
        this.sharedStyle = container.get(plugin_shared_style_1.PluginSharedStyle);
        this.labelProvider = container.get(browser_1.LabelProvider);
    }
    QuickOpenMainImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    QuickOpenMainImpl.prototype.cleanUp = function () {
        this.items = undefined;
        this.acceptor = undefined;
        if (this.activeElement) {
            this.activeElement.focus({ preventScroll: true });
        }
        this.activeElement = undefined;
    };
    QuickOpenMainImpl.prototype.$show = function (options, token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (token.isCancellationRequested) {
                resolve(undefined);
                return;
            }
            _this.doResolve = resolve;
            _this.activeElement = window.document.activeElement;
            var toDispose = token.onCancellationRequested(function () {
                return _this.delegate.hide();
            });
            _this.delegate.open(_this, {
                fuzzyMatchDescription: options.matchOnDescription,
                fuzzyMatchLabel: true,
                fuzzyMatchDetail: options.matchOnDetail,
                placeholder: options.placeHolder,
                ignoreFocusOut: options.ignoreFocusLost,
                onClose: function () {
                    _this.doResolve(undefined);
                    toDispose.dispose();
                    _this.cleanUp();
                }
            });
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    QuickOpenMainImpl.prototype.$setItems = function (items) {
        var e_1, _a;
        var _this = this;
        this.items = [];
        var _loop_1 = function (i) {
            var item = void 0;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var options = {
                label: i.label,
                description: i.description,
                detail: i.detail,
                run: function (mode) {
                    if (mode === quick_open_model_1.QuickOpenMode.OPEN) {
                        _this.proxy.$onItemSelected(i.handle);
                        _this.doResolve(i.handle);
                        _this.cleanUp();
                        return true;
                    }
                    return false;
                }
            };
            if (i.groupLabel !== undefined || i.showBorder !== undefined) {
                options.groupLabel = i.groupLabel;
                options.showBorder = i.showBorder;
                item = new quick_open_model_2.QuickOpenGroupItem(options);
            }
            else {
                item = new quick_open_model_1.QuickOpenItem(options);
            }
            this_1.items.push(item);
        };
        var this_1 = this;
        try {
            for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var i = items_1_1.value;
                _loop_1(i);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (this.acceptor) {
            this.acceptor(this.items);
        }
        return Promise.resolve();
    };
    QuickOpenMainImpl.prototype.convertPickOpenItemToQuickOpenItem = function (items) {
        var e_2, _a;
        var convertedItems = [];
        try {
            for (var items_2 = __values(items), items_2_1 = items_2.next(); !items_2_1.done; items_2_1 = items_2.next()) {
                var i = items_2_1.value;
                convertedItems.push({
                    label: i.label,
                    description: i.description,
                    detail: i.detail,
                    value: i.handle
                });
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (items_2_1 && !items_2_1.done && (_a = items_2.return)) _a.call(items_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return convertedItems;
    };
    QuickOpenMainImpl.prototype.$input = function (options, validateInput, token) {
        var _this = this;
        if (validateInput) {
            options.validateInput = function (val) { return _this.proxy.$validateInput(val); };
        }
        return this.quickInput.open(options, token);
    };
    QuickOpenMainImpl.prototype.convertQuickInputButton = function (quickInputButton, index, toDispose) {
        var currentIconPath = quickInputButton.iconPath;
        var newIcon = '';
        var newIconClass = '';
        if ('id' in currentIconPath || currentIconPath instanceof types_impl_1.ThemeIcon) {
            newIconClass = this.resolveIconClassFromThemeIcon(currentIconPath);
        }
        else if (currentIconPath instanceof vscode_uri_1.URI) {
            newIcon = currentIconPath.toString();
        }
        else {
            var _a = currentIconPath, light = _a.light, dark = _a.dark;
            var themedIconClasses = {
                light: light.toString(),
                dark: dark.toString()
            };
            var reference = this.sharedStyle.toIconClass(themedIconClasses);
            toDispose.push(reference);
            newIconClass = reference.object.iconClass;
        }
        var isDefaultQuickInputButton = 'id' in quickInputButton.iconPath && quickInputButton.iconPath.id === 'Back' ? true : false;
        return {
            icon: newIcon,
            iconClass: newIconClass,
            tooltip: quickInputButton.tooltip,
            side: isDefaultQuickInputButton ? quick_open_model_2.QuickTitleButtonSide.LEFT : quick_open_model_2.QuickTitleButtonSide.RIGHT,
            index: isDefaultQuickInputButton ? -1 : index
        };
    };
    QuickOpenMainImpl.prototype.resolveIconClassFromThemeIcon = function (themeIconID) {
        switch (themeIconID.id) {
            case 'folder': {
                return this.labelProvider.folderIcon;
            }
            case 'file': {
                return this.labelProvider.fileIcon;
            }
            case 'Back': {
                return 'fa fa-arrow-left';
            }
            default: {
                return '';
            }
        }
    };
    QuickOpenMainImpl.prototype.$showInputBox = function (inputBox, validateInput) {
        return __awaiter(this, void 0, void 0, function () {
            var toDispose, quickInput;
            var _this = this;
            return __generator(this, function (_a) {
                if (validateInput) {
                    inputBox.validateInput = function (val) { return _this.proxy.$validateInput(val); };
                }
                toDispose = new disposable_1.DisposableCollection();
                quickInput = this.quickInput.open({
                    busy: inputBox.busy,
                    enabled: inputBox.enabled,
                    ignoreFocusOut: inputBox.ignoreFocusOut,
                    password: inputBox.password,
                    step: inputBox.step,
                    title: inputBox.title,
                    totalSteps: inputBox.totalSteps,
                    buttons: inputBox.buttons.map(function (btn, i) { return _this.convertQuickInputButton(btn, i, toDispose); }),
                    validationMessage: inputBox.validationMessage,
                    placeHolder: inputBox.placeholder,
                    value: inputBox.value,
                    prompt: inputBox.prompt,
                    validateInput: inputBox.validateInput
                });
                toDispose.push(this.quickInput.onDidAccept(function () { return _this.proxy.$acceptOnDidAccept(inputBox.id); }));
                toDispose.push(this.quickInput.onDidChangeValue(function (changedText) { return _this.proxy.$acceptDidChangeValue(inputBox.id, changedText); }));
                toDispose.push(this.quickTitleBar.onDidTriggerButton(function (button) {
                    _this.proxy.$acceptOnDidTriggerButton(inputBox.id, button);
                }));
                this.toDispose.push(toDispose);
                quickInput.then(function () {
                    if (toDispose.disposed) {
                        return;
                    }
                    _this.proxy.$acceptOnDidHide(inputBox.id);
                    toDispose.dispose();
                });
                return [2 /*return*/];
            });
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    QuickOpenMainImpl.prototype.findChangedKey = function (key, value) {
        switch (key) {
            case 'title': {
                this.quickTitleBar.title = value;
                break;
            }
            case 'step': {
                this.quickTitleBar.step = value;
                break;
            }
            case 'totalSteps': {
                this.quickTitleBar.totalSteps = value;
                break;
            }
            case 'buttons': {
                this.quickTitleBar.buttons = value;
                break;
            }
            case 'value': {
                this.delegate.setValue(value);
                break;
            }
            case 'enabled': {
                this.delegate.setEnabled(value);
                break;
            }
            case 'password': {
                this.delegate.setPassword(value);
                break;
            }
            case 'placeholder': {
                this.delegate.setPlaceHolder(value);
                break;
            }
            case 'items': {
                this.quickPick.setItems(this.convertPickOpenItemToQuickOpenItem(value));
                break;
            }
            // TODO selectedItems, activeItems and other properties
            // TODO we need better type checking here
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    QuickOpenMainImpl.prototype.$setQuickInputChanged = function (changed) {
        for (var key in changed) {
            if (changed.hasOwnProperty(key)) {
                var value = changed[key];
                this.findChangedKey(key, value);
            }
        }
    };
    QuickOpenMainImpl.prototype.$refreshQuickInput = function () {
        this.quickInput.refresh();
    };
    QuickOpenMainImpl.prototype.$showCustomQuickPick = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var toDispose, quickPick;
            var _this = this;
            return __generator(this, function (_a) {
                toDispose = new disposable_1.DisposableCollection();
                quickPick = this.quickPick.show(this.convertPickOpenItemToQuickOpenItem(options.items), {
                    buttons: options.buttons.map(function (btn, i) { return _this.convertQuickInputButton(btn, i, toDispose); }),
                    placeholder: options.placeholder,
                    fuzzyMatchDescription: options.matchOnDescription,
                    fuzzyMatchLabel: true,
                    step: options.step,
                    title: options.title,
                    totalSteps: options.totalSteps,
                    ignoreFocusOut: options.ignoreFocusOut,
                    value: options.value,
                    runIfSingle: false,
                });
                toDispose.push(this.quickPick.onDidAccept(function () { return _this.proxy.$acceptOnDidAccept(options.id); }));
                toDispose.push(this.quickPick.onDidChangeActive(function (elements) {
                    _this.proxy.$onDidChangeActive(options.id, elements.map(function (e) { return e.value; }));
                }));
                toDispose.push(this.quickPick.onDidChangeSelection(function (elements) {
                    _this.proxy.$onDidChangeSelection(options.id, elements.map(function (e) { return e.value; }));
                }));
                toDispose.push(this.quickPick.onDidChangeValue(function (value) { return _this.proxy.$acceptDidChangeValue(options.id, value); }));
                toDispose.push(this.quickTitleBar.onDidTriggerButton(function (button) {
                    _this.proxy.$acceptOnDidTriggerButton(options.id, button);
                }));
                this.toDispose.push(toDispose);
                quickPick.then(function () {
                    if (toDispose.disposed) {
                        return;
                    }
                    _this.proxy.$acceptOnDidHide(options.id);
                    toDispose.dispose();
                });
                return [2 /*return*/];
            });
        });
    };
    QuickOpenMainImpl.prototype.onType = function (lookFor, acceptor) {
        this.acceptor = acceptor;
        if (this.items) {
            acceptor(this.items);
        }
    };
    QuickOpenMainImpl.prototype.$hide = function () {
        this.delegate.hide();
    };
    return QuickOpenMainImpl;
}());
exports.QuickOpenMainImpl = QuickOpenMainImpl;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/selection-provider-command.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/selection-provider-command.js ***!
  \***************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionProviderCommandContribution = exports.SelectionProviderCommands = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var uri_command_handler_1 = __webpack_require__(/*! @theia/core/lib/common/uri-command-handler */ "./node_modules/@theia/core/lib/common/uri-command-handler.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var uri_components_1 = __webpack_require__(/*! ../../common/uri-components */ "./node_modules/@theia/plugin-ext/lib/common/uri-components.js");
var SelectionProviderCommands;
(function (SelectionProviderCommands) {
    SelectionProviderCommands.GET_SELECTED_CONTEXT = {
        id: 'theia.plugin.workspace.selectedContext'
    };
})(SelectionProviderCommands = exports.SelectionProviderCommands || (exports.SelectionProviderCommands = {}));
var SelectionProviderCommandContribution = /** @class */ (function () {
    function SelectionProviderCommandContribution() {
    }
    SelectionProviderCommandContribution.prototype.registerCommands = function (commands) {
        commands.registerCommand(SelectionProviderCommands.GET_SELECTED_CONTEXT, this.newMultiUriAwareCommandHandler({
            isEnabled: function () { return true; },
            isVisible: function () { return false; },
            execute: function (selectedUris) { return selectedUris.map(function (uri) { return uri_components_1.theiaUritoUriComponents(uri); }); }
        }));
    };
    SelectionProviderCommandContribution.prototype.newMultiUriAwareCommandHandler = function (handler) {
        return new uri_command_handler_1.UriAwareCommandHandler(this.selectionService, handler, { multi: true });
    };
    __decorate([
        inversify_1.inject(core_1.SelectionService),
        __metadata("design:type", core_1.SelectionService)
    ], SelectionProviderCommandContribution.prototype, "selectionService", void 0);
    SelectionProviderCommandContribution = __decorate([
        inversify_1.injectable()
    ], SelectionProviderCommandContribution);
    return SelectionProviderCommandContribution;
}());
exports.SelectionProviderCommandContribution = SelectionProviderCommandContribution;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/status-bar-message-registry-main.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/status-bar-message-registry-main.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
exports.StatusBarMessageRegistryMainImpl = void 0;
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var types = __webpack_require__(/*! ../../plugin/types-impl */ "./node_modules/@theia/plugin-ext/lib/plugin/types-impl.js");
var status_bar_1 = __webpack_require__(/*! @theia/core/lib/browser/status-bar/status-bar */ "./node_modules/@theia/core/lib/browser/status-bar/status-bar.js");
var color_registry_1 = __webpack_require__(/*! @theia/core/lib/browser/color-registry */ "./node_modules/@theia/core/lib/browser/color-registry.js");
var StatusBarMessageRegistryMainImpl = /** @class */ (function () {
    function StatusBarMessageRegistryMainImpl(container) {
        this.entries = new Map();
        this.toDispose = new disposable_1.DisposableCollection(disposable_1.Disposable.create(function () { }));
        this.delegate = container.get(status_bar_1.StatusBar);
        this.colorRegistry = container.get(color_registry_1.ColorRegistry);
    }
    StatusBarMessageRegistryMainImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    StatusBarMessageRegistryMainImpl.prototype.$setMessage = function (id, text, priority, alignment, color, tooltip, command) {
        return __awaiter(this, void 0, void 0, function () {
            var entry;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        entry = {
                            text: text || '',
                            priority: priority,
                            alignment: alignment === types.StatusBarAlignment.Left ? status_bar_1.StatusBarAlignment.LEFT : status_bar_1.StatusBarAlignment.RIGHT,
                            color: color && (this.colorRegistry.getCurrentColor(color) || color),
                            tooltip: tooltip,
                            command: command
                        };
                        this.entries.set(id, entry);
                        return [4 /*yield*/, this.delegate.setElement(id, entry)];
                    case 1:
                        _a.sent();
                        if (this.toDispose.disposed) {
                            this.$dispose(id);
                        }
                        else {
                            this.toDispose.push(disposable_1.Disposable.create(function () { return _this.$dispose(id); }));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    StatusBarMessageRegistryMainImpl.prototype.$update = function (id, message) {
        var entry = this.entries.get(id);
        if (entry) {
            entry.text = message;
            this.delegate.setElement(id, entry);
        }
    };
    StatusBarMessageRegistryMainImpl.prototype.$dispose = function (id) {
        var entry = this.entries.get(id);
        if (entry) {
            this.entries.delete(id);
            this.delegate.removeElement(id);
        }
    };
    return StatusBarMessageRegistryMainImpl;
}());
exports.StatusBarMessageRegistryMainImpl = StatusBarMessageRegistryMainImpl;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/tasks-main.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/tasks-main.js ***!
  \***********************************************************************/
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
exports.TasksMainImpl = void 0;
var plugin_api_rpc_1 = __webpack_require__(/*! ../../common/plugin-api-rpc */ "./node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "./node_modules/@theia/core/lib/common/index.js");
var task_contribution_1 = __webpack_require__(/*! @theia/task/lib/browser/task-contribution */ "./node_modules/@theia/task/lib/browser/task-contribution.js");
var task_watcher_1 = __webpack_require__(/*! @theia/task/lib/common/task-watcher */ "./node_modules/@theia/task/lib/common/task-watcher.js");
var task_service_1 = __webpack_require__(/*! @theia/task/lib/browser/task-service */ "./node_modules/@theia/task/lib/browser/task-service.js");
var browser_1 = __webpack_require__(/*! @theia/task/lib/browser */ "./node_modules/@theia/task/lib/browser/index.js");
var TasksMainImpl = /** @class */ (function () {
    function TasksMainImpl(rpc, container) {
        var _this = this;
        this.taskProviders = new Map();
        this.toDispose = new common_1.DisposableCollection();
        this.proxy = rpc.getProxy(plugin_api_rpc_1.MAIN_RPC_CONTEXT.TASKS_EXT);
        this.taskProviderRegistry = container.get(task_contribution_1.TaskProviderRegistry);
        this.taskResolverRegistry = container.get(task_contribution_1.TaskResolverRegistry);
        this.taskWatcher = container.get(task_watcher_1.TaskWatcher);
        this.taskService = container.get(task_service_1.TaskService);
        this.taskDefinitionRegistry = container.get(browser_1.TaskDefinitionRegistry);
        this.toDispose.push(this.taskWatcher.onTaskCreated(function (event) {
            _this.proxy.$onDidStartTask({
                id: event.taskId,
                task: _this.fromTaskConfiguration(event.config)
            });
        }));
        this.toDispose.push(this.taskWatcher.onTaskExit(function (event) {
            _this.proxy.$onDidEndTask(event.taskId);
        }));
        this.toDispose.push(this.taskWatcher.onDidStartTaskProcess(function (event) {
            if (event.processId !== undefined) {
                _this.proxy.$onDidStartTaskProcess(event.processId, {
                    id: event.taskId,
                    task: _this.fromTaskConfiguration(event.config)
                });
            }
        }));
        this.toDispose.push(this.taskWatcher.onDidEndTaskProcess(function (event) {
            if (event.code !== undefined) {
                _this.proxy.$onDidEndTaskProcess(event.code, event.taskId);
            }
        }));
    }
    TasksMainImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    TasksMainImpl.prototype.$registerTaskProvider = function (handle, type) {
        var _this = this;
        var taskProvider = this.createTaskProvider(handle);
        var taskResolver = this.createTaskResolver(handle);
        var toDispose = new common_1.DisposableCollection(this.taskProviderRegistry.register(type, taskProvider, handle), this.taskResolverRegistry.register(type, taskResolver), common_1.Disposable.create(function () { return _this.taskProviders.delete(handle); }));
        this.taskProviders.set(handle, toDispose);
        this.toDispose.push(toDispose);
    };
    TasksMainImpl.prototype.$unregister = function (handle) {
        var disposable = this.taskProviders.get(handle);
        if (disposable) {
            disposable.dispose();
        }
    };
    TasksMainImpl.prototype.$fetchTasks = function (taskVersion, taskType) {
        return __awaiter(this, void 0, void 0, function () {
            var token, _a, configured, provided, result, _b, _c, tasks, tasks_1, tasks_1_1, task, type, label, _scope, _source, properties, dto, key;
            var e_1, _d, e_2, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        if (taskVersion && !taskVersion.startsWith('2.')) { // Theia does not support 1.x or earlier task versions
                            return [2 /*return*/, []];
                        }
                        token = this.taskService.startUserAction();
                        return [4 /*yield*/, Promise.all([
                                this.taskService.getConfiguredTasks(token),
                                this.taskService.getProvidedTasks(token)
                            ])];
                    case 1:
                        _a = __read.apply(void 0, [_f.sent(), 2]), configured = _a[0], provided = _a[1];
                        result = [];
                        try {
                            for (_b = __values([configured, provided]), _c = _b.next(); !_c.done; _c = _b.next()) {
                                tasks = _c.value;
                                try {
                                    for (tasks_1 = (e_2 = void 0, __values(tasks)), tasks_1_1 = tasks_1.next(); !tasks_1_1.done; tasks_1_1 = tasks_1.next()) {
                                        task = tasks_1_1.value;
                                        if (!taskType || (!!this.taskDefinitionRegistry.getDefinition(task) ? task._source === taskType : task.type === taskType)) {
                                            type = task.type, label = task.label, _scope = task._scope, _source = task._source, properties = __rest(task, ["type", "label", "_scope", "_source"]);
                                            dto = { type: type, label: label, scope: _scope, source: _source };
                                            for (key in properties) {
                                                if (properties.hasOwnProperty(key)) {
                                                    dto[key] = properties[key];
                                                }
                                            }
                                            result.push(dto);
                                        }
                                    }
                                }
                                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                finally {
                                    try {
                                        if (tasks_1_1 && !tasks_1_1.done && (_e = tasks_1.return)) _e.call(tasks_1);
                                    }
                                    finally { if (e_2) throw e_2.error; }
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    TasksMainImpl.prototype.$executeTask = function (taskDto) {
        return __awaiter(this, void 0, void 0, function () {
            var taskConfig, taskInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskConfig = this.toTaskConfiguration(taskDto);
                        return [4 /*yield*/, this.taskService.runTask(taskConfig)];
                    case 1:
                        taskInfo = _a.sent();
                        if (taskInfo) {
                            return [2 /*return*/, {
                                    id: taskInfo.taskId,
                                    task: this.fromTaskConfiguration(taskInfo.config)
                                }];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TasksMainImpl.prototype.$taskExecutions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var runningTasks;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.taskService.getRunningTasks()];
                    case 1:
                        runningTasks = _a.sent();
                        return [2 /*return*/, runningTasks.map(function (taskInfo) { return ({
                                id: taskInfo.taskId,
                                task: _this.fromTaskConfiguration(taskInfo.config)
                            }); })];
                }
            });
        });
    };
    TasksMainImpl.prototype.$terminateTask = function (id) {
        this.taskService.kill(id);
    };
    TasksMainImpl.prototype.createTaskProvider = function (handle) {
        var _this = this;
        return {
            provideTasks: function () {
                return _this.proxy.$provideTasks(handle).then(function (v) {
                    return v.map(function (taskDto) {
                        return _this.toTaskConfiguration(taskDto);
                    });
                });
            }
        };
    };
    TasksMainImpl.prototype.createTaskResolver = function (handle) {
        var _this = this;
        return {
            resolveTask: function (taskConfig) {
                return _this.proxy.$resolveTask(handle, _this.fromTaskConfiguration(taskConfig)).then(function (v) {
                    return _this.toTaskConfiguration(v);
                });
            }
        };
    };
    TasksMainImpl.prototype.toTaskConfiguration = function (taskDto) {
        return Object.assign(taskDto, {
            _source: taskDto.source,
            _scope: taskDto.scope
        });
    };
    TasksMainImpl.prototype.fromTaskConfiguration = function (task) {
        return Object.assign(task, {
            source: task._source,
            scope: task._scope
        });
    };
    return TasksMainImpl;
}());
exports.TasksMainImpl = TasksMainImpl;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/terminal-main.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/terminal-main.js ***!
  \**************************************************************************/
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
exports.TerminalServiceMainImpl = void 0;
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var terminal_service_1 = __webpack_require__(/*! @theia/terminal/lib/browser/base/terminal-service */ "./node_modules/@theia/terminal/lib/browser/base/terminal-service.js");
var plugin_api_rpc_1 = __webpack_require__(/*! ../../common/plugin-api-rpc */ "./node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
/**
 * Plugin api service allows working with terminal emulator.
 */
var TerminalServiceMainImpl = /** @class */ (function () {
    function TerminalServiceMainImpl(rpc, container) {
        var e_1, _a;
        var _this = this;
        this.toDispose = new disposable_1.DisposableCollection();
        this.terminals = container.get(terminal_service_1.TerminalService);
        this.shell = container.get(browser_1.ApplicationShell);
        this.extProxy = rpc.getProxy(plugin_api_rpc_1.MAIN_RPC_CONTEXT.TERMINAL_EXT);
        this.toDispose.push(this.terminals.onDidCreateTerminal(function (terminal) { return _this.trackTerminal(terminal); }));
        try {
            for (var _b = __values(this.terminals.all), _c = _b.next(); !_c.done; _c = _b.next()) {
                var terminal = _c.value;
                this.trackTerminal(terminal);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.toDispose.push(this.terminals.onDidChangeCurrentTerminal(function () { return _this.updateCurrentTerminal(); }));
        this.updateCurrentTerminal();
    }
    TerminalServiceMainImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    TerminalServiceMainImpl.prototype.updateCurrentTerminal = function () {
        var currentTerminal = this.terminals.currentTerminal;
        this.extProxy.$currentTerminalChanged(currentTerminal && currentTerminal.id);
    };
    TerminalServiceMainImpl.prototype.trackTerminal = function (terminal) {
        return __awaiter(this, void 0, void 0, function () {
            var name, updateTitle, updateProcessId;
            var _this = this;
            return __generator(this, function (_a) {
                name = terminal.title.label;
                this.extProxy.$terminalCreated(terminal.id, name);
                updateTitle = function () {
                    if (name !== terminal.title.label) {
                        name = terminal.title.label;
                        _this.extProxy.$terminalNameChanged(terminal.id, name);
                    }
                };
                terminal.title.changed.connect(updateTitle);
                this.toDispose.push(disposable_1.Disposable.create(function () { return terminal.title.changed.disconnect(updateTitle); }));
                updateProcessId = function () { return terminal.processId.then(function (processId) { return _this.extProxy.$terminalOpened(terminal.id, processId, terminal.dimensions.cols, terminal.dimensions.rows); }, function () { }); };
                updateProcessId();
                this.toDispose.push(terminal.onDidOpen(function () { return updateProcessId(); }));
                this.toDispose.push(terminal.onTerminalDidClose(function () { return _this.extProxy.$terminalClosed(terminal.id); }));
                this.toDispose.push(terminal.onSizeChanged(function (_a) {
                    var cols = _a.cols, rows = _a.rows;
                    _this.extProxy.$terminalSizeChanged(terminal.id, cols, rows);
                }));
                this.toDispose.push(terminal.onData(function (data) {
                    _this.extProxy.$terminalOnInput(terminal.id, data);
                }));
                return [2 /*return*/];
            });
        });
    };
    TerminalServiceMainImpl.prototype.$write = function (id, data) {
        var terminal = this.terminals.getById(id);
        if (!terminal) {
            return;
        }
        terminal.write(data);
    };
    TerminalServiceMainImpl.prototype.$resize = function (id, cols, rows) {
        var terminal = this.terminals.getById(id);
        if (!terminal) {
            return;
        }
        terminal.rezise(cols, rows);
    };
    TerminalServiceMainImpl.prototype.$createTerminal = function (id, options, isPseudoTerminal) {
        return __awaiter(this, void 0, void 0, function () {
            var terminal, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.terminals.newTerminal({
                                id: id,
                                title: options.name,
                                shellPath: options.shellPath,
                                shellArgs: options.shellArgs,
                                cwd: options.cwd,
                                env: options.env,
                                destroyTermOnClose: true,
                                useServerTitle: false,
                                attributes: options.attributes,
                                isPseudoTerminal: isPseudoTerminal,
                            })];
                    case 1:
                        terminal = _a.sent();
                        terminal.start();
                        return [2 /*return*/, terminal.id];
                    case 2:
                        error_1 = _a.sent();
                        throw new Error('Failed to create terminal. Cause: ' + error_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TerminalServiceMainImpl.prototype.$sendText = function (id, text, addNewLine) {
        var terminal = this.terminals.getById(id);
        if (terminal) {
            text = text.replace(/\r?\n/g, '\r');
            if (addNewLine && text.charAt(text.length - 1) !== '\r') {
                text += '\r';
            }
            terminal.sendText(text);
        }
    };
    TerminalServiceMainImpl.prototype.$show = function (id, preserveFocus) {
        var terminal = this.terminals.getById(id);
        if (terminal) {
            var options = {};
            if (preserveFocus) {
                options.mode = 'reveal';
            }
            this.terminals.open(terminal, options);
        }
    };
    TerminalServiceMainImpl.prototype.$hide = function (id) {
        var terminal = this.terminals.getById(id);
        if (terminal && terminal.isVisible) {
            var area = this.shell.getAreaFor(terminal);
            if (area) {
                this.shell.collapsePanel(area);
            }
        }
    };
    TerminalServiceMainImpl.prototype.$dispose = function (id) {
        var terminal = this.terminals.getById(id);
        if (terminal) {
            terminal.dispose();
        }
    };
    return TerminalServiceMainImpl;
}());
exports.TerminalServiceMainImpl = TerminalServiceMainImpl;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/text-editor-main.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/text-editor-main.js ***!
  \*****************************************************************************/
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
exports.TextEditorPropertiesMain = exports.TextEditorMain = void 0;
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var plugin_api_rpc_1 = __webpack_require__(/*! ../../common/plugin-api-rpc */ "./node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var editor_options_1 = __webpack_require__(/*! ../../common/editor-options */ "./node_modules/@theia/plugin-ext/lib/common/editor-options.js");
var types_impl_1 = __webpack_require__(/*! ../../plugin/types-impl */ "./node_modules/@theia/plugin-ext/lib/plugin/types-impl.js");
var TextEditorMain = /** @class */ (function () {
    function TextEditorMain(id, model, editor) {
        var _this = this;
        this.id = id;
        this.model = model;
        this.onPropertiesChangedEmitter = new core_1.Emitter();
        this.toDispose = new disposable_1.DisposableCollection(disposable_1.Disposable.create(function () { return _this.properties = undefined; }), this.onPropertiesChangedEmitter);
        this.toDisposeOnEditor = new disposable_1.DisposableCollection();
        this.toDispose.push(this.model.onDidChangeOptions(function () {
            return _this.updateProperties(undefined);
        }));
        this.setEditor(editor);
        this.updateProperties(undefined);
    }
    TextEditorMain.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    TextEditorMain.prototype.updateProperties = function (source) {
        this.setProperties(TextEditorPropertiesMain.readFromEditor(this.properties, this.model, this.editor), source);
    };
    TextEditorMain.prototype.setProperties = function (newProperties, source) {
        var result = newProperties.generateDelta(this.properties, source);
        this.properties = newProperties;
        if (result) {
            this.onPropertiesChangedEmitter.fire(result);
        }
    };
    TextEditorMain.prototype.setEditor = function (editor) {
        var _this = this;
        if (this.editor === editor) {
            return;
        }
        this.toDisposeOnEditor.dispose();
        this.toDispose.push(this.toDisposeOnEditor);
        this.editor = editor;
        this.toDisposeOnEditor.push(disposable_1.Disposable.create(function () { return _this.editor = undefined; }));
        if (this.editor) {
            var monaco_1 = this.editor.getControl();
            this.toDisposeOnEditor.push(this.editor.onSelectionChanged(function (_) {
                _this.updateProperties();
            }));
            this.toDisposeOnEditor.push(monaco_1.onDidChangeModel(function () {
                _this.setEditor(undefined);
            }));
            this.toDisposeOnEditor.push(monaco_1.onDidChangeCursorSelection(function (e) {
                _this.updateProperties(e.source);
            }));
            this.toDisposeOnEditor.push(monaco_1.onDidChangeConfiguration(function () {
                _this.updateProperties();
            }));
            this.toDisposeOnEditor.push(monaco_1.onDidLayoutChange(function () {
                _this.updateProperties();
            }));
            this.toDisposeOnEditor.push(monaco_1.onDidScrollChange(function () {
                _this.updateProperties();
            }));
            this.updateProperties();
        }
    };
    TextEditorMain.prototype.getId = function () {
        return this.id;
    };
    TextEditorMain.prototype.getModel = function () {
        return this.model;
    };
    TextEditorMain.prototype.getProperties = function () {
        return this.properties;
    };
    Object.defineProperty(TextEditorMain.prototype, "onPropertiesChangedEvent", {
        get: function () {
            return this.onPropertiesChangedEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    TextEditorMain.prototype.setSelections = function (selections) {
        if (this.editor) {
            this.editor.getControl().setSelections(selections);
            return;
        }
        var monacoSelections = selections.map(TextEditorMain.toMonacoSelections);
        this.setProperties(new TextEditorPropertiesMain(monacoSelections, this.properties.options, this.properties.visibleRanges), undefined);
    };
    TextEditorMain.prototype.setConfiguration = function (newConfiguration) {
        this.setIndentConfiguration(newConfiguration);
        if (!this.editor) {
            return;
        }
        if (newConfiguration.cursorStyle) {
            var newCursorStyle = editor_options_1.cursorStyleToString(newConfiguration.cursorStyle);
            this.editor.getControl().updateOptions({
                cursorStyle: newCursorStyle
            });
        }
        if (typeof newConfiguration.lineNumbers !== 'undefined') {
            var lineNumbers = void 0;
            switch (newConfiguration.lineNumbers) {
                case types_impl_1.TextEditorLineNumbersStyle.On:
                    lineNumbers = 'on';
                    break;
                case types_impl_1.TextEditorLineNumbersStyle.Relative:
                    lineNumbers = 'relative';
                    break;
                default:
                    lineNumbers = 'off';
            }
            this.editor.getControl().updateOptions({
                lineNumbers: lineNumbers
            });
        }
    };
    TextEditorMain.prototype.setIndentConfiguration = function (newConfiguration) {
        if (newConfiguration.tabSize === 'auto' || newConfiguration.insertSpaces === 'auto') {
            var creationOpts = this.model.getOptions();
            var insertSpaces = creationOpts.insertSpaces;
            var tabSize = creationOpts.tabSize;
            if (newConfiguration.insertSpaces !== 'auto' && typeof newConfiguration.insertSpaces !== 'undefined') {
                insertSpaces = newConfiguration.insertSpaces;
            }
            if (newConfiguration.tabSize !== 'auto' && typeof newConfiguration.tabSize !== 'undefined') {
                tabSize = newConfiguration.tabSize;
            }
            this.model.detectIndentation(insertSpaces, tabSize);
            return;
        }
        var newOpts = {};
        if (typeof newConfiguration.insertSpaces !== 'undefined') {
            newOpts.insertSpaces = newConfiguration.insertSpaces;
        }
        if (typeof newConfiguration.tabSize !== 'undefined') {
            newOpts.tabSize = newConfiguration.tabSize;
        }
        this.model.updateOptions(newOpts);
    };
    TextEditorMain.prototype.revealRange = function (range, revealType) {
        if (!this.editor) {
            return;
        }
        switch (revealType) {
            case plugin_api_rpc_1.TextEditorRevealType.Default:
                this.editor.getControl().revealRange(range, monaco.editor.ScrollType.Smooth);
                break;
            case plugin_api_rpc_1.TextEditorRevealType.InCenter:
                this.editor.getControl().revealRangeInCenter(range, monaco.editor.ScrollType.Smooth);
                break;
            case plugin_api_rpc_1.TextEditorRevealType.InCenterIfOutsideViewport:
                this.editor.getControl().revealRangeInCenterIfOutsideViewport(range, monaco.editor.ScrollType.Smooth);
                break;
            case plugin_api_rpc_1.TextEditorRevealType.AtTop:
                this.editor.getControl().revealRangeAtTop(range, monaco.editor.ScrollType.Smooth);
                break;
            default:
                console.warn("Unknown revealType: " + revealType);
                break;
        }
    };
    TextEditorMain.prototype.applyEdits = function (versionId, edits, opts) {
        var e_1, _a;
        if (this.model.getVersionId() !== versionId) {
            // model changed in the meantime
            return false;
        }
        if (!this.editor) {
            return false;
        }
        if (opts.setEndOfLine === types_impl_1.EndOfLine.CRLF) {
            this.model.setEOL(monaco.editor.EndOfLineSequence.CRLF);
        }
        else if (opts.setEndOfLine === types_impl_1.EndOfLine.LF) {
            this.model.setEOL(monaco.editor.EndOfLineSequence.LF);
        }
        var editOperations = [];
        try {
            for (var edits_1 = __values(edits), edits_1_1 = edits_1.next(); !edits_1_1.done; edits_1_1 = edits_1.next()) {
                var edit = edits_1_1.value;
                var range = edit.range, text = edit.text;
                if (!range && !text) {
                    continue;
                }
                if (range && range.startLineNumber === range.endLineNumber && range.startColumn === range.endColumn && !edit.text) {
                    continue;
                }
                editOperations.push({
                    range: range ? monaco.Range.lift(range) : this.editor.getControl().getModel().getFullModelRange(),
                    /* eslint-disable-next-line no-null/no-null */
                    text: text || null,
                    forceMoveMarkers: edit.forceMoveMarkers
                });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (edits_1_1 && !edits_1_1.done && (_a = edits_1.return)) _a.call(edits_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (opts.undoStopBefore) {
            this.editor.getControl().pushUndoStop();
        }
        this.editor.getControl().executeEdits('MainThreadTextEditor', editOperations);
        if (opts.undoStopAfter) {
            this.editor.getControl().pushUndoStop();
        }
        return true;
    };
    TextEditorMain.prototype.insertSnippet = function (template, ranges, opts) {
        if (!this.editor) {
            return false;
        }
        var snippetController = this.editor.getControl().getContribution('snippetController2');
        var selections = ranges.map(function (r) { return new monaco.Selection(r.startLineNumber, r.startColumn, r.endLineNumber, r.endColumn); });
        this.editor.getControl().setSelections(selections);
        this.editor.focus();
        snippetController.insert(template, 0, 0, opts.undoStopBefore, opts.undoStopAfter);
        return true;
    };
    TextEditorMain.prototype.setDecorations = function (key, ranges) {
        if (!this.editor) {
            return;
        }
        this.editor.getControl().setDecorations(key, ranges.map(function (option) { return Object.assign(option, { color: undefined }); }));
    };
    TextEditorMain.prototype.setDecorationsFast = function (key, _ranges) {
        if (!this.editor) {
            return;
        }
        var ranges = [];
        var len = Math.floor(_ranges.length / 4);
        for (var i = 0; i < len; i++) {
            ranges[i] = new monaco.Range(_ranges[4 * i], _ranges[4 * i + 1], _ranges[4 * i + 2], _ranges[4 * i + 3]);
        }
        this.editor.getControl().setDecorationsFast(key, ranges);
    };
    TextEditorMain.toMonacoSelections = function (selection) {
        return new monaco.Selection(selection.selectionStartLineNumber, selection.selectionStartColumn, selection.positionLineNumber, selection.positionColumn);
    };
    return TextEditorMain;
}());
exports.TextEditorMain = TextEditorMain;
var TextEditorPropertiesMain = /** @class */ (function () {
    function TextEditorPropertiesMain(selections, options, visibleRanges) {
        this.selections = selections;
        this.options = options;
        this.visibleRanges = visibleRanges;
    }
    TextEditorPropertiesMain.prototype.generateDelta = function (old, source) {
        var result = {
            options: undefined,
            selections: undefined,
            visibleRanges: undefined
        };
        if (!old || !TextEditorPropertiesMain.selectionsEqual(old.selections, this.selections)) {
            result.selections = {
                selections: this.selections,
                source: source
            };
        }
        if (!old || !TextEditorPropertiesMain.optionsEqual(old.options, this.options)) {
            result.options = this.options;
        }
        if (!old || !TextEditorPropertiesMain.rangesEqual(old.visibleRanges, this.visibleRanges)) {
            result.visibleRanges = this.visibleRanges;
        }
        if (result.selections || result.visibleRanges || result.options) {
            return result;
        }
        return undefined;
    };
    TextEditorPropertiesMain.readFromEditor = function (prevProperties, model, editor) {
        var selections = TextEditorPropertiesMain.getSelectionsFromEditor(prevProperties, editor);
        var options = TextEditorPropertiesMain.getOptionsFromEditor(prevProperties, model, editor);
        var visibleRanges = TextEditorPropertiesMain.getVisibleRangesFromEditor(prevProperties, editor);
        return new TextEditorPropertiesMain(selections, options, visibleRanges);
    };
    TextEditorPropertiesMain.getSelectionsFromEditor = function (prevProperties, editor) {
        var result = undefined;
        if (editor) {
            result = editor.getControl().getSelections() || undefined;
        }
        if (!result && prevProperties) {
            result = prevProperties.selections;
        }
        if (!result) {
            result = [new monaco.Selection(1, 1, 1, 1)];
        }
        return result;
    };
    TextEditorPropertiesMain.getOptionsFromEditor = function (prevProperties, model, editor) {
        if (model.isDisposed()) {
            return prevProperties.options;
        }
        var cursorStyle;
        var lineNumbers;
        if (editor) {
            var editorOptions = editor.getControl().getOptions();
            var lineNumbersOpts = editorOptions.get(monaco.editor.EditorOption.lineNumbers);
            cursorStyle = editorOptions.get(monaco.editor.EditorOption.cursorStyle);
            switch (lineNumbersOpts.renderType) {
                case monaco.editor.RenderLineNumbersType.Off:
                    lineNumbers = types_impl_1.TextEditorLineNumbersStyle.Off;
                    break;
                case monaco.editor.RenderLineNumbersType.Relative:
                    lineNumbers = types_impl_1.TextEditorLineNumbersStyle.Relative;
                    break;
                default:
                    lineNumbers = types_impl_1.TextEditorLineNumbersStyle.On;
                    break;
            }
        }
        else if (prevProperties) {
            cursorStyle = prevProperties.options.cursorStyle;
            lineNumbers = prevProperties.options.lineNumbers;
        }
        else {
            cursorStyle = editor_options_1.TextEditorCursorStyle.Line;
            lineNumbers = types_impl_1.TextEditorLineNumbersStyle.On;
        }
        var modelOptions = model.getOptions();
        return {
            insertSpaces: modelOptions.insertSpaces,
            tabSize: modelOptions.tabSize,
            cursorStyle: cursorStyle,
            lineNumbers: lineNumbers,
        };
    };
    TextEditorPropertiesMain.getVisibleRangesFromEditor = function (prevProperties, editor) {
        if (editor) {
            return editor.getControl().getVisibleRanges();
        }
        return [];
    };
    TextEditorPropertiesMain.selectionsEqual = function (a, b) {
        if (a.length !== b.length) {
            return false;
        }
        for (var i = 0; i < a.length; i++) {
            if (!a[i].equalsSelection(b[i])) {
                return false;
            }
        }
        return true;
    };
    TextEditorPropertiesMain.optionsEqual = function (a, b) {
        if (a && !b || !a && b) {
            return false;
        }
        if (!a && !b) {
            return true;
        }
        return (a.tabSize === b.tabSize
            && a.insertSpaces === b.insertSpaces
            && a.cursorStyle === b.cursorStyle
            && a.lineNumbers === b.lineNumbers);
    };
    TextEditorPropertiesMain.rangesEqual = function (a, b) {
        if (a.length !== b.length) {
            return false;
        }
        for (var i = 0; i < a.length; i++) {
            if (!a[i].equalsRange(b[i])) {
                return false;
            }
        }
        return true;
    };
    return TextEditorPropertiesMain;
}());
exports.TextEditorPropertiesMain = TextEditorPropertiesMain;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/text-editor-model-service.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/text-editor-model-service.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
exports.EditorModelService = void 0;
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
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var monaco_text_model_service_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-text-model-service */ "./node_modules/@theia/monaco/lib/browser/monaco-text-model-service.js");
var monaco_workspace_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-workspace */ "./node_modules/@theia/monaco/lib/browser/monaco-workspace.js");
var uri_components_1 = __webpack_require__(/*! ../../common/uri-components */ "./node_modules/@theia/plugin-ext/lib/common/uri-components.js");
var EditorModelService = /** @class */ (function () {
    function EditorModelService(monacoModelService, monacoWorkspace) {
        var _this = this;
        this.modelModeChangedEmitter = new core_1.Emitter();
        this.onModelRemovedEmitter = new core_1.Emitter();
        this.modelDirtyEmitter = new core_1.Emitter();
        this.modelSavedEmitter = new core_1.Emitter();
        this.onModelWillSavedEmitter = new core_1.Emitter();
        this.onModelDirtyChanged = this.modelDirtyEmitter.event;
        this.onModelSaved = this.modelSavedEmitter.event;
        this.onModelModeChanged = this.modelModeChangedEmitter.event;
        this.onModelRemoved = this.onModelRemovedEmitter.event;
        this.onModelWillSave = this.onModelWillSavedEmitter.event;
        this.monacoModelService = monacoModelService;
        monacoModelService.models.forEach(function (model) { return _this.modelCreated(model); });
        monacoModelService.onDidCreate(this.modelCreated, this);
        monacoWorkspace.onDidCloseTextDocument(function (model) {
            setTimeout(function () {
                _this.onModelRemovedEmitter.fire(model);
            }, 1);
        });
    }
    EditorModelService.prototype.modelCreated = function (model) {
        var _this = this;
        model.textEditorModel.onDidChangeLanguage(function (e) {
            _this.modelModeChangedEmitter.fire({ model: model, oldModeId: e.oldLanguage });
        });
        model.onDidSaveModel(function (_) {
            _this.modelSavedEmitter.fire(model);
        });
        model.onDirtyChanged(function (_) {
            _this.modelDirtyEmitter.fire(model);
        });
        model.onWillSaveModel(function (willSaveModelEvent) {
            _this.onModelWillSavedEmitter.fire(willSaveModelEvent);
        });
    };
    Object.defineProperty(EditorModelService.prototype, "onModelAdded", {
        get: function () {
            return this.monacoModelService.onDidCreate;
        },
        enumerable: false,
        configurable: true
    });
    EditorModelService.prototype.getModels = function () {
        return this.monacoModelService.models;
    };
    EditorModelService.prototype.saveAll = function (includeUntitled) {
        return __awaiter(this, void 0, void 0, function () {
            var saves, _loop_1, _a, _b, model, results;
            var e_1, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        saves = [];
                        _loop_1 = function (model) {
                            var uri = model.textEditorModel.uri;
                            if (model.dirty && (includeUntitled || uri.scheme !== uri_components_1.Schemes.UNTITLED)) {
                                saves.push((function () { return __awaiter(_this, void 0, void 0, function () {
                                    var e_2;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                _a.trys.push([0, 2, , 3]);
                                                return [4 /*yield*/, model.save()];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/, true];
                                            case 2:
                                                e_2 = _a.sent();
                                                console.error('Failed to save ', uri.toString(), e_2);
                                                return [2 /*return*/, false];
                                            case 3: return [2 /*return*/];
                                        }
                                    });
                                }); })());
                            }
                        };
                        try {
                            for (_a = __values(this.monacoModelService.models), _b = _a.next(); !_b.done; _b = _a.next()) {
                                model = _b.value;
                                _loop_1(model);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [4 /*yield*/, Promise.all(saves)];
                    case 1:
                        results = _d.sent();
                        return [2 /*return*/, results.reduce(function (a, b) { return a && b; }, true)];
                }
            });
        });
    };
    EditorModelService.prototype.createModelReference = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.monacoModelService.createModelReference(uri)];
            });
        });
    };
    EditorModelService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(monaco_text_model_service_1.MonacoTextModelService)),
        __param(1, inversify_1.inject(monaco_workspace_1.MonacoWorkspace)),
        __metadata("design:paramtypes", [monaco_text_model_service_1.MonacoTextModelService,
            monaco_workspace_1.MonacoWorkspace])
    ], EditorModelService);
    return EditorModelService;
}());
exports.EditorModelService = EditorModelService;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/text-editors-main.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/text-editors-main.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextEditorsMainImpl = void 0;
var vscode_uri_1 = __webpack_require__(/*! vscode-uri */ "./node_modules/vscode-uri/lib/esm/index.js");
var plugin_api_rpc_1 = __webpack_require__(/*! ../../common/plugin-api-rpc */ "./node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var errors_1 = __webpack_require__(/*! ../../common/errors */ "./node_modules/@theia/plugin-ext/lib/common/errors.js");
var languages_main_1 = __webpack_require__(/*! ./languages-main */ "./node_modules/@theia/plugin-ext/lib/main/browser/languages-main.js");
var uri_components_1 = __webpack_require__(/*! ../../common/uri-components */ "./node_modules/@theia/plugin-ext/lib/common/uri-components.js");
var endpoint_1 = __webpack_require__(/*! @theia/core/lib/browser/endpoint */ "./node_modules/@theia/core/lib/browser/endpoint.js");
var TextEditorsMainImpl = /** @class */ (function () {
    function TextEditorsMainImpl(editorsAndDocuments, rpc, bulkEditService, monacoEditorService) {
        var _this = this;
        this.editorsAndDocuments = editorsAndDocuments;
        this.bulkEditService = bulkEditService;
        this.monacoEditorService = monacoEditorService;
        this.toDispose = new disposable_1.DisposableCollection();
        this.editorsToDispose = new Map();
        this.fileEndpoint = new endpoint_1.Endpoint({ path: 'file' }).getRestUrl();
        this.proxy = rpc.getProxy(plugin_api_rpc_1.MAIN_RPC_CONTEXT.TEXT_EDITORS_EXT);
        this.toDispose.push(editorsAndDocuments);
        this.toDispose.push(editorsAndDocuments.onTextEditorAdd(function (editors) { return editors.forEach(_this.onTextEditorAdd, _this); }));
        this.toDispose.push(editorsAndDocuments.onTextEditorRemove(function (editors) { return editors.forEach(_this.onTextEditorRemove, _this); }));
    }
    TextEditorsMainImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    TextEditorsMainImpl.prototype.onTextEditorAdd = function (editor) {
        var _this = this;
        var id = editor.getId();
        var toDispose = new disposable_1.DisposableCollection(editor.onPropertiesChangedEvent(function (e) {
            _this.proxy.$acceptEditorPropertiesChanged(id, e);
        }), disposable_1.Disposable.create(function () { return _this.editorsToDispose.delete(id); }));
        this.editorsToDispose.set(id, toDispose);
        this.toDispose.push(toDispose);
    };
    TextEditorsMainImpl.prototype.onTextEditorRemove = function (id) {
        var disposables = this.editorsToDispose.get(id);
        if (disposables) {
            disposables.dispose();
        }
    };
    TextEditorsMainImpl.prototype.$trySetOptions = function (id, options) {
        if (!this.editorsAndDocuments.getEditor(id)) {
            return Promise.reject(errors_1.disposed("TextEditor: " + id));
        }
        this.editorsAndDocuments.getEditor(id).setConfiguration(options);
        return Promise.resolve();
    };
    TextEditorsMainImpl.prototype.$trySetSelections = function (id, selections) {
        if (!this.editorsAndDocuments.getEditor(id)) {
            return Promise.reject(errors_1.disposed("TextEditor: " + id));
        }
        this.editorsAndDocuments.getEditor(id).setSelections(selections);
        return Promise.resolve();
    };
    TextEditorsMainImpl.prototype.$tryRevealRange = function (id, range, revealType) {
        if (!this.editorsAndDocuments.getEditor(id)) {
            return Promise.reject(errors_1.disposed("TextEditor(" + id + ")"));
        }
        this.editorsAndDocuments.getEditor(id).revealRange(new monaco.Range(range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn), revealType);
        return Promise.resolve();
    };
    TextEditorsMainImpl.prototype.$tryApplyEdits = function (id, modelVersionId, edits, opts) {
        if (!this.editorsAndDocuments.getEditor(id)) {
            return Promise.reject(errors_1.disposed("TextEditor(" + id + ")"));
        }
        return Promise.resolve(this.editorsAndDocuments.getEditor(id).applyEdits(modelVersionId, edits, opts));
    };
    TextEditorsMainImpl.prototype.$tryApplyWorkspaceEdit = function (dto) {
        var _this = this;
        var edits = languages_main_1.toMonacoWorkspaceEdit(dto);
        return new Promise(function (resolve) {
            _this.bulkEditService.apply(edits).then(function () { return resolve(true); }, function (err) { return resolve(false); });
        });
    };
    TextEditorsMainImpl.prototype.$tryInsertSnippet = function (id, template, ranges, opts) {
        if (!this.editorsAndDocuments.getEditor(id)) {
            return Promise.reject(errors_1.disposed("TextEditor(" + id + ")"));
        }
        return Promise.resolve(this.editorsAndDocuments.getEditor(id).insertSnippet(template, ranges, opts));
    };
    TextEditorsMainImpl.prototype.$registerTextEditorDecorationType = function (key, options) {
        var _this = this;
        this.injectRemoteUris(options);
        this.monacoEditorService.registerDecorationType(key, options);
        this.toDispose.push(disposable_1.Disposable.create(function () { return _this.$removeTextEditorDecorationType(key); }));
    };
    TextEditorsMainImpl.prototype.injectRemoteUris = function (options) {
        if (options.before) {
            options.before.contentIconPath = this.toRemoteUri(options.before.contentIconPath);
        }
        if (options.after) {
            options.after.contentIconPath = this.toRemoteUri(options.after.contentIconPath);
        }
        if ('gutterIconPath' in options) {
            options.gutterIconPath = this.toRemoteUri(options.gutterIconPath);
        }
        if ('dark' in options && options.dark) {
            this.injectRemoteUris(options.dark);
        }
        if ('light' in options && options.light) {
            this.injectRemoteUris(options.light);
        }
    };
    TextEditorsMainImpl.prototype.toRemoteUri = function (uri) {
        if (uri && uri.scheme === 'file') {
            return uri_components_1.theiaUritoUriComponents(this.fileEndpoint.withQuery(vscode_uri_1.URI.revive(uri).toString()));
        }
        return uri;
    };
    TextEditorsMainImpl.prototype.$removeTextEditorDecorationType = function (key) {
        this.monacoEditorService.removeDecorationType(key);
    };
    TextEditorsMainImpl.prototype.$trySetDecorations = function (id, key, ranges) {
        if (!this.editorsAndDocuments.getEditor(id)) {
            return Promise.reject(errors_1.disposed("TextEditor(" + id + ")"));
        }
        this.editorsAndDocuments.getEditor(id).setDecorations(key, ranges);
        return Promise.resolve();
    };
    TextEditorsMainImpl.prototype.$trySetDecorationsFast = function (id, key, ranges) {
        if (!this.editorsAndDocuments.getEditor(id)) {
            return Promise.reject(errors_1.disposed("TextEditor(" + id + ")"));
        }
        this.editorsAndDocuments.getEditor(id).setDecorationsFast(key, ranges);
        return Promise.resolve();
    };
    TextEditorsMainImpl.prototype.$saveAll = function (includeUntitled) {
        return this.editorsAndDocuments.saveAll(includeUntitled);
    };
    return TextEditorsMainImpl;
}());
exports.TextEditorsMainImpl = TextEditorsMainImpl;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/view-column-service.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/view-column-service.js ***!
  \********************************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.ViewColumnService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var application_shell_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/application-shell */ "./node_modules/@theia/core/lib/browser/shell/application-shell.js");
var algorithm_1 = __webpack_require__(/*! @phosphor/algorithm */ "./node_modules/@phosphor/algorithm/lib/index.js");
var ViewColumnService = /** @class */ (function () {
    function ViewColumnService(shell) {
        var _this = this;
        this.shell = shell;
        this.columnValues = new Map();
        this.viewColumnIds = new Map();
        this.onViewColumnChangedEmitter = new event_1.Emitter();
        var oldColumnValues = new Map();
        var update = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise((function (resolve) { return setTimeout(function () { return resolve(); }); }))];
                    case 1:
                        _a.sent();
                        this.updateViewColumns();
                        this.viewColumnIds.forEach(function (ids, viewColumn) {
                            ids.forEach(function (id) {
                                if (!oldColumnValues.has(id) || oldColumnValues.get(id) !== viewColumn) {
                                    _this.onViewColumnChangedEmitter.fire({ id: id, viewColumn: viewColumn });
                                }
                            });
                        });
                        oldColumnValues = new Map(this.columnValues.entries());
                        return [2 /*return*/];
                }
            });
        }); };
        this.shell.mainPanel.widgetAdded.connect(function () { return update(); });
        this.shell.mainPanel.widgetRemoved.connect(function () { return update(); });
    }
    Object.defineProperty(ViewColumnService.prototype, "onViewColumnChanged", {
        get: function () {
            return this.onViewColumnChangedEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    ViewColumnService.prototype.updateViewColumns = function () {
        var e_1, _a;
        this.columnValues.clear();
        this.viewColumnIds.clear();
        var rows = new Map();
        var columns = new Map();
        try {
            for (var _b = __values(algorithm_1.toArray(this.shell.mainPanel.tabBars())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var tabBar = _c.value;
                if (!tabBar.node.style.top || !tabBar.node.style.left) {
                    continue;
                }
                var top_1 = parseInt(tabBar.node.style.top);
                var left = parseInt(tabBar.node.style.left);
                var row = rows.get(top_1) || new Set();
                row.add(left);
                rows.set(top_1, row);
                var column = columns.get(left) || new Map();
                column.set(top_1, tabBar);
                columns.set(left, column);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var firstRow = rows.get(__spread(rows.keys()).sort()[0]);
        if (!firstRow) {
            return;
        }
        var lefts = __spread(firstRow.keys()).sort();
        for (var i = 0; i < lefts.length; i++) {
            var column = columns.get(lefts[i]);
            if (!column) {
                break;
            }
            var cellIndexes = __spread(column.keys()).sort();
            var viewColumn = Math.min(i, 2);
            for (var j = 0; j < cellIndexes.length; j++) {
                var cell = column.get(cellIndexes[j]);
                if (!cell) {
                    break;
                }
                this.setViewColumn(cell, viewColumn);
                if (viewColumn < 7) {
                    viewColumn += 3;
                }
            }
        }
    };
    ViewColumnService.prototype.setViewColumn = function (tabBar, viewColumn) {
        var e_2, _a;
        var ids = [];
        try {
            for (var _b = __values(tabBar.titles), _c = _b.next(); !_c.done; _c = _b.next()) {
                var title = _c.value;
                var id = title.owner.id;
                ids.push(id);
                this.columnValues.set(id, viewColumn);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.viewColumnIds.set(viewColumn, ids);
    };
    ViewColumnService.prototype.getViewColumnIds = function (viewColumn) {
        return this.viewColumnIds.get(viewColumn) || [];
    };
    ViewColumnService.prototype.getViewColumn = function (id) {
        return this.columnValues.get(id);
    };
    ViewColumnService.prototype.hasViewColumn = function (id) {
        return this.columnValues.has(id);
    };
    ViewColumnService.prototype.viewColumnsSize = function () {
        return this.viewColumnIds.size;
    };
    ViewColumnService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(application_shell_1.ApplicationShell)),
        __metadata("design:paramtypes", [application_shell_1.ApplicationShell])
    ], ViewColumnService);
    return ViewColumnService;
}());
exports.ViewColumnService = ViewColumnService;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/view/plugin-tree-view-node-label-provider.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/view/plugin-tree-view-node-label-provider.js ***!
  \******************************************************************************************************/
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
exports.PluginTreeViewNodeLabelProvider = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var label_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/label-provider */ "./node_modules/@theia/core/lib/browser/label-provider.js");
var tree_label_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/tree/tree-label-provider */ "./node_modules/@theia/core/lib/browser/tree/tree-label-provider.js");
var tree_1 = __webpack_require__(/*! @theia/core/lib/browser/tree/tree */ "./node_modules/@theia/core/lib/browser/tree/tree.js");
var PluginTreeViewNodeLabelProvider = /** @class */ (function () {
    function PluginTreeViewNodeLabelProvider() {
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    PluginTreeViewNodeLabelProvider.prototype.canHandle = function (element) {
        if (tree_1.TreeNode.is(element) && ('resourceUri' in element || 'themeIconId' in element)) {
            return this.treeLabelProvider.canHandle(element) + 1;
        }
        return 0;
    };
    PluginTreeViewNodeLabelProvider.prototype.getIcon = function (node) {
        if (node.icon) {
            return node.icon;
        }
        if (node.themeIconId) {
            var uri = node.resourceUri && new uri_1.default(node.resourceUri) || undefined;
            return this.labelProvider.getIcon(label_provider_1.URIIconReference.create(node.themeIconId, uri));
        }
        if (node.resourceUri) {
            return this.labelProvider.getIcon(new uri_1.default(node.resourceUri));
        }
        return undefined;
    };
    PluginTreeViewNodeLabelProvider.prototype.getName = function (node) {
        if (node.name) {
            return node.name;
        }
        if (node.resourceUri) {
            return this.labelProvider.getName(new uri_1.default(node.resourceUri));
        }
        return undefined;
    };
    PluginTreeViewNodeLabelProvider.prototype.getLongName = function (node) {
        if (typeof node.description === 'string') {
            return node.description;
        }
        if (node.description === true && node.resourceUri) {
            return this.labelProvider.getLongName(new uri_1.default(node.resourceUri));
        }
        return undefined;
    };
    __decorate([
        inversify_1.inject(label_provider_1.LabelProvider),
        __metadata("design:type", label_provider_1.LabelProvider)
    ], PluginTreeViewNodeLabelProvider.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(tree_label_provider_1.TreeLabelProvider),
        __metadata("design:type", tree_label_provider_1.TreeLabelProvider)
    ], PluginTreeViewNodeLabelProvider.prototype, "treeLabelProvider", void 0);
    PluginTreeViewNodeLabelProvider = __decorate([
        inversify_1.injectable()
    ], PluginTreeViewNodeLabelProvider);
    return PluginTreeViewNodeLabelProvider;
}());
exports.PluginTreeViewNodeLabelProvider = PluginTreeViewNodeLabelProvider;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/view/plugin-view-registry.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/view/plugin-view-registry.js ***!
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
exports.PluginViewRegistry = exports.PLUGIN_VIEW_DATA_FACTORY_ID = exports.PLUGIN_VIEW_CONTAINER_FACTORY_ID = exports.PLUGIN_VIEW_FACTORY_ID = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var plugin_shared_style_1 = __webpack_require__(/*! ../plugin-shared-style */ "./node_modules/@theia/plugin-ext/lib/main/browser/plugin-shared-style.js");
var debug_widget_1 = __webpack_require__(/*! @theia/debug/lib/browser/view/debug-widget */ "./node_modules/@theia/debug/lib/browser/view/debug-widget.js");
var plugin_view_widget_1 = __webpack_require__(/*! ./plugin-view-widget */ "./node_modules/@theia/plugin-ext/lib/main/browser/view/plugin-view-widget.js");
var scm_contribution_1 = __webpack_require__(/*! @theia/scm/lib/browser/scm-contribution */ "./node_modules/@theia/scm/lib/browser/scm-contribution.js");
var browser_2 = __webpack_require__(/*! @theia/navigator/lib/browser */ "./node_modules/@theia/navigator/lib/browser/index.js");
var navigator_contribution_1 = __webpack_require__(/*! @theia/navigator/lib/browser/navigator-contribution */ "./node_modules/@theia/navigator/lib/browser/navigator-contribution.js");
var debug_frontend_application_contribution_1 = __webpack_require__(/*! @theia/debug/lib/browser/debug-frontend-application-contribution */ "./node_modules/@theia/debug/lib/browser/debug-frontend-application-contribution.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "./node_modules/@theia/core/lib/common/command.js");
var menu_1 = __webpack_require__(/*! @theia/core/lib/common/menu */ "./node_modules/@theia/core/lib/common/menu.js");
var quick_view_service_1 = __webpack_require__(/*! @theia/core/lib/browser/quick-view-service */ "./node_modules/@theia/core/lib/browser/quick-view-service.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "./node_modules/@theia/core/lib/common/event.js");
var context_key_service_1 = __webpack_require__(/*! @theia/core/lib/browser/context-key-service */ "./node_modules/@theia/core/lib/browser/context-key-service.js");
var search_in_workspace_widget_1 = __webpack_require__(/*! @theia/search-in-workspace/lib/browser/search-in-workspace-widget */ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-widget.js");
var view_context_key_service_1 = __webpack_require__(/*! ./view-context-key-service */ "./node_modules/@theia/plugin-ext/lib/main/browser/view/view-context-key-service.js");
var problem_widget_1 = __webpack_require__(/*! @theia/markers/lib/browser/problem/problem-widget */ "./node_modules/@theia/markers/lib/browser/problem/problem-widget.js");
var output_widget_1 = __webpack_require__(/*! @theia/output/lib/browser/output-widget */ "./node_modules/@theia/output/lib/browser/output-widget.js");
var debug_console_contribution_1 = __webpack_require__(/*! @theia/debug/lib/browser/console/debug-console-contribution */ "./node_modules/@theia/debug/lib/browser/console/debug-console-contribution.js");
var terminal_widget_impl_1 = __webpack_require__(/*! @theia/terminal/lib/browser/terminal-widget-impl */ "./node_modules/@theia/terminal/lib/browser/terminal-widget-impl.js");
exports.PLUGIN_VIEW_FACTORY_ID = 'plugin-view';
exports.PLUGIN_VIEW_CONTAINER_FACTORY_ID = 'plugin-view-container';
exports.PLUGIN_VIEW_DATA_FACTORY_ID = 'plugin-view-data';
var PluginViewRegistry = /** @class */ (function () {
    function PluginViewRegistry() {
        this.onDidExpandViewEmitter = new event_1.Emitter();
        this.onDidExpandView = this.onDidExpandViewEmitter.event;
        this.views = new Map();
        this.viewContainers = new Map();
        this.containerViews = new Map();
        this.viewClauseContexts = new Map();
        this.viewDataProviders = new Map();
        this.viewDataState = new Map();
        this.visiblePanels = new Set();
        this.visibleViewlets = new Set();
    }
    PluginViewRegistry.prototype.init = function () {
        var _this = this;
        // VS Code Viewlets
        this.trackVisibleWidget(browser_2.EXPLORER_VIEW_CONTAINER_ID, { viewletId: 'workbench.view.explorer' });
        this.trackVisibleWidget(search_in_workspace_widget_1.SearchInWorkspaceWidget.ID, { viewletId: 'workbench.view.search', sideArea: true });
        this.trackVisibleWidget(scm_contribution_1.SCM_VIEW_CONTAINER_ID, { viewletId: 'workbench.view.scm' });
        this.trackVisibleWidget(debug_widget_1.DebugWidget.ID, { viewletId: 'workbench.view.debug' });
        // TODO workbench.view.extensions - Theia does not have a proper extension view yet
        // VS Code Panels
        this.trackVisibleWidget(problem_widget_1.PROBLEMS_WIDGET_ID, { panelId: 'workbench.panel.markers' });
        this.trackVisibleWidget(output_widget_1.OUTPUT_WIDGET_KIND, { panelId: 'workbench.panel.output' });
        this.trackVisibleWidget(debug_console_contribution_1.DebugConsoleContribution.options.id, { panelId: 'workbench.panel.repl' });
        this.trackVisibleWidget(terminal_widget_impl_1.TERMINAL_WIDGET_FACTORY_ID, { panelId: 'workbench.panel.terminal' });
        // TODO workbench.panel.comments - Theia does not have a proper comments view yet
        this.trackVisibleWidget(search_in_workspace_widget_1.SearchInWorkspaceWidget.ID, { panelId: 'workbench.view.search', sideArea: false });
        this.updateFocusedView();
        this.shell.onDidChangeActiveWidget(function () { return _this.updateFocusedView(); });
        this.widgetManager.onWillCreateWidget(function (_a) {
            var factoryId = _a.factoryId, widget = _a.widget, waitUntil = _a.waitUntil;
            if (factoryId === browser_2.EXPLORER_VIEW_CONTAINER_ID && widget instanceof browser_1.ViewContainer) {
                waitUntil(_this.prepareViewContainer('explorer', widget));
            }
            if (factoryId === scm_contribution_1.SCM_VIEW_CONTAINER_ID && widget instanceof browser_1.ViewContainer) {
                waitUntil(_this.prepareViewContainer('scm', widget));
            }
            if (factoryId === debug_widget_1.DebugWidget.ID && widget instanceof debug_widget_1.DebugWidget) {
                var viewContainer = widget['sessionWidget']['viewContainer'];
                waitUntil(_this.prepareViewContainer('debug', viewContainer));
            }
            if (factoryId === exports.PLUGIN_VIEW_CONTAINER_FACTORY_ID && widget instanceof browser_1.ViewContainer) {
                waitUntil(_this.prepareViewContainer(_this.toViewContainerId(widget.options), widget));
            }
            if (factoryId === exports.PLUGIN_VIEW_FACTORY_ID && widget instanceof plugin_view_widget_1.PluginViewWidget) {
                waitUntil(_this.prepareView(widget));
            }
        });
        this.doRegisterViewContainer('test', 'left', {
            label: 'Test',
            iconClass: 'theia-plugin-test-tab-icon',
            closeable: true
        });
        this.contextKeyService.onDidChange(function (e) {
            var e_1, _a;
            try {
                for (var _b = __values(_this.views.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), view = _d[1];
                    var clauseContext = _this.viewClauseContexts.get(view.id);
                    if (clauseContext && e.affects(clauseContext)) {
                        _this.updateViewVisibility(view.id);
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
    PluginViewRegistry.prototype.updateViewVisibility = function (viewId) {
        return __awaiter(this, void 0, void 0, function () {
            var widget, viewInfo, _a, viewContainerId, viewContainer, part;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getView(viewId)];
                    case 1:
                        widget = _b.sent();
                        if (!!widget) return [3 /*break*/, 4];
                        if (!this.isViewVisible(viewId)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.openView(viewId)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                    case 4:
                        viewInfo = this.views.get(viewId);
                        if (!viewInfo) {
                            return [2 /*return*/];
                        }
                        _a = __read(viewInfo, 1), viewContainerId = _a[0];
                        return [4 /*yield*/, this.getPluginViewContainer(viewContainerId)];
                    case 5:
                        viewContainer = _b.sent();
                        if (!viewContainer) {
                            return [2 /*return*/];
                        }
                        part = viewContainer.getPartFor(widget);
                        if (!part) {
                            return [2 /*return*/];
                        }
                        widget.updateViewVisibility(function () {
                            return part.setHidden(!_this.isViewVisible(viewId));
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PluginViewRegistry.prototype.isViewVisible = function (viewId) {
        var viewInfo = this.views.get(viewId);
        if (!viewInfo) {
            return false;
        }
        var _a = __read(viewInfo, 2), view = _a[1];
        return view.when === undefined || this.contextKeyService.match(view.when);
    };
    PluginViewRegistry.prototype.registerViewContainer = function (location, viewContainer) {
        if (this.viewContainers.has(viewContainer.id)) {
            console.warn('view container such id already registered: ', JSON.stringify(viewContainer));
            return disposable_1.Disposable.NULL;
        }
        var toDispose = new disposable_1.DisposableCollection();
        var containerClass = 'theia-plugin-view-container';
        var iconClass = 'plugin-view-container-icon-' + viewContainer.id;
        var iconUrl = plugin_shared_style_1.PluginSharedStyle.toExternalIconUrl(viewContainer.iconUrl);
        toDispose.push(this.style.insertRule('.' + containerClass + '.' + iconClass, function () { return "\n                mask: url('" + iconUrl + "') no-repeat 50% 50%;\n                -webkit-mask: url('" + iconUrl + "') no-repeat 50% 50%;\n            "; }));
        toDispose.push(this.doRegisterViewContainer(viewContainer.id, location, {
            label: viewContainer.title,
            iconClass: containerClass + ' ' + iconClass,
            closeable: true
        }));
        return toDispose;
    };
    PluginViewRegistry.prototype.doRegisterViewContainer = function (id, location, options) {
        var _this = this;
        var toDispose = new disposable_1.DisposableCollection();
        this.viewContainers.set(id, [location, options]);
        toDispose.push(disposable_1.Disposable.create(function () { return _this.viewContainers.delete(id); }));
        var toggleCommandId = "plugin.view-container." + id + ".toggle";
        toDispose.push(this.commands.registerCommand({
            id: toggleCommandId,
            label: 'Toggle ' + options.label + ' View'
        }, {
            execute: function () { return __awaiter(_this, void 0, void 0, function () {
                var widget;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getPluginViewContainer(id)];
                        case 1:
                            widget = _a.sent();
                            if (!widget) return [3 /*break*/, 2];
                            widget.dispose();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, this.openViewContainer(id)];
                        case 3:
                            widget = _a.sent();
                            if (widget) {
                                this.shell.activateWidget(widget.id);
                            }
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            }); }
        }));
        toDispose.push(this.menus.registerMenuAction(browser_1.CommonMenus.VIEW_VIEWS, {
            commandId: toggleCommandId,
            label: options.label
        }));
        toDispose.push(this.quickView.registerItem({
            label: options.label,
            open: function () { return __awaiter(_this, void 0, void 0, function () {
                var widget;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.openViewContainer(id)];
                        case 1:
                            widget = _a.sent();
                            if (widget) {
                                this.shell.activateWidget(widget.id);
                            }
                            return [2 /*return*/];
                    }
                });
            }); }
        }));
        toDispose.push(disposable_1.Disposable.create(function () { return __awaiter(_this, void 0, void 0, function () {
            var widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPluginViewContainer(id)];
                    case 1:
                        widget = _a.sent();
                        if (widget) {
                            widget.dispose();
                        }
                        return [2 /*return*/];
                }
            });
        }); }));
        return toDispose;
    };
    PluginViewRegistry.prototype.registerView = function (viewContainerId, view) {
        var _this = this;
        if (this.views.has(view.id)) {
            console.warn('view with such id already registered: ', JSON.stringify(view));
            return disposable_1.Disposable.NULL;
        }
        var toDispose = new disposable_1.DisposableCollection();
        this.views.set(view.id, [viewContainerId, view]);
        toDispose.push(disposable_1.Disposable.create(function () { return _this.views.delete(view.id); }));
        var containerViews = this.containerViews.get(viewContainerId) || [];
        containerViews.push(view.id);
        this.containerViews.set(viewContainerId, containerViews);
        toDispose.push(disposable_1.Disposable.create(function () {
            var index = containerViews.indexOf(view.id);
            if (index !== -1) {
                containerViews.splice(index, 1);
            }
        }));
        if (view.when) {
            this.viewClauseContexts.set(view.id, this.contextKeyService.parseKeys(view.when));
            toDispose.push(disposable_1.Disposable.create(function () { return _this.viewClauseContexts.delete(view.id); }));
        }
        toDispose.push(this.quickView.registerItem({
            label: view.name,
            when: view.when,
            open: function () { return _this.openView(view.id, { activate: true }); }
        }));
        toDispose.push(this.commands.registerCommand({ id: view.id + ".focus" }, {
            execute: function () { return _this.openView(view.id, { activate: true }); }
        }));
        return toDispose;
    };
    PluginViewRegistry.prototype.getView = function (viewId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.views.has(viewId)) {
                    return [2 /*return*/, undefined];
                }
                return [2 /*return*/, this.widgetManager.getWidget(exports.PLUGIN_VIEW_FACTORY_ID, this.toPluginViewWidgetIdentifier(viewId))];
            });
        });
    };
    PluginViewRegistry.prototype.openView = function (viewId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var view;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.doOpenView(viewId)];
                    case 1:
                        view = _a.sent();
                        if (!(view && options && options.activate === true)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.shell.activateWidget(view.id)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, view];
                }
            });
        });
    };
    PluginViewRegistry.prototype.doOpenView = function (viewId) {
        return __awaiter(this, void 0, void 0, function () {
            var widget, data, _a, containerId;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getView(viewId)];
                    case 1:
                        widget = _b.sent();
                        if (widget) {
                            return [2 /*return*/, widget];
                        }
                        data = this.views.get(viewId);
                        if (!data) {
                            return [2 /*return*/, undefined];
                        }
                        _a = __read(data, 1), containerId = _a[0];
                        return [4 /*yield*/, this.openViewContainer(containerId)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, this.getView(viewId)];
                }
            });
        });
    };
    PluginViewRegistry.prototype.prepareView = function (widget) {
        return __awaiter(this, void 0, void 0, function () {
            var data, _a, view, currentDataWidget, viewDataWidget;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        data = this.views.get(widget.options.viewId);
                        if (!data) {
                            return [2 /*return*/];
                        }
                        _a = __read(data, 2), view = _a[1];
                        widget.title.label = view.name;
                        currentDataWidget = widget.widgets[0];
                        return [4 /*yield*/, this.createViewDataWidget(view.id)];
                    case 1:
                        viewDataWidget = _b.sent();
                        if (widget.isDisposed) {
                            // eslint-disable-next-line no-unused-expressions
                            viewDataWidget === null || viewDataWidget === void 0 ? void 0 : viewDataWidget.dispose();
                            return [2 /*return*/];
                        }
                        if (currentDataWidget !== viewDataWidget) {
                            if (currentDataWidget) {
                                currentDataWidget.dispose();
                            }
                            if (viewDataWidget) {
                                widget.addWidget(viewDataWidget);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PluginViewRegistry.prototype.openViewContainer = function (containerId) {
        return __awaiter(this, void 0, void 0, function () {
            var widget, widget, widget, data, _a, location, identifier, containerWidget;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(containerId === 'explorer')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.explorer.openView()];
                    case 1:
                        widget = _b.sent();
                        if (widget.parent instanceof browser_1.ViewContainer) {
                            return [2 /*return*/, widget.parent];
                        }
                        return [2 /*return*/, undefined];
                    case 2:
                        if (!(containerId === 'scm')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.scm.openView()];
                    case 3:
                        widget = _b.sent();
                        if (widget.parent instanceof browser_1.ViewContainer) {
                            return [2 /*return*/, widget.parent];
                        }
                        return [2 /*return*/, undefined];
                    case 4:
                        if (!(containerId === 'debug')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.debug.openView()];
                    case 5:
                        widget = _b.sent();
                        return [2 /*return*/, widget['sessionWidget']['viewContainer']];
                    case 6:
                        data = this.viewContainers.get(containerId);
                        if (!data) {
                            return [2 /*return*/, undefined];
                        }
                        _a = __read(data, 1), location = _a[0];
                        identifier = this.toViewContainerIdentifier(containerId);
                        return [4 /*yield*/, this.widgetManager.getOrCreateWidget(exports.PLUGIN_VIEW_CONTAINER_FACTORY_ID, identifier)];
                    case 7:
                        containerWidget = _b.sent();
                        if (!!containerWidget.isAttached) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.shell.addWidget(containerWidget, {
                                area: browser_1.ApplicationShell.isSideArea(location) ? location : 'left',
                                rank: Number.MAX_SAFE_INTEGER
                            })];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9: return [2 /*return*/, containerWidget];
                }
            });
        });
    };
    PluginViewRegistry.prototype.prepareViewContainer = function (viewContainerId, containerWidget) {
        return __awaiter(this, void 0, void 0, function () {
            var data, _a, options, _loop_1, this_1, _b, _c, viewId, e_2_1;
            var e_2, _d;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        data = this.viewContainers.get(viewContainerId);
                        if (data) {
                            _a = __read(data, 2), options = _a[1];
                            containerWidget.setTitleOptions(options);
                        }
                        _loop_1 = function (viewId) {
                            var identifier, widget, part, tryFireOnDidExpandView, toFire_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        identifier = this_1.toPluginViewWidgetIdentifier(viewId);
                                        return [4 /*yield*/, this_1.widgetManager.getOrCreateWidget(exports.PLUGIN_VIEW_FACTORY_ID, identifier)];
                                    case 1:
                                        widget = _a.sent();
                                        if (containerWidget.getTrackableWidgets().indexOf(widget) === -1) {
                                            containerWidget.addWidget(widget, {
                                                initiallyCollapsed: !!containerWidget.getParts().length,
                                                initiallyHidden: !this_1.isViewVisible(viewId)
                                            });
                                        }
                                        part = containerWidget.getPartFor(widget);
                                        if (part) {
                                            // if a view is explicitly hidden then suppress updating visibility based on `when` closure
                                            part.onDidChangeVisibility(function () { return widget.suppressUpdateViewVisibility = part.isHidden; });
                                            tryFireOnDidExpandView = function () {
                                                if (!part.collapsed && part.isVisible) {
                                                    toFire_1.dispose();
                                                }
                                            };
                                            toFire_1 = new disposable_1.DisposableCollection(disposable_1.Disposable.create(function () { return _this.onDidExpandViewEmitter.fire(viewId); }), part.onCollapsed(tryFireOnDidExpandView), part.onDidChangeVisibility(tryFireOnDidExpandView));
                                            tryFireOnDidExpandView();
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 6, 7, 8]);
                        _b = __values(this.containerViews.get(viewContainerId) || []), _c = _b.next();
                        _e.label = 2;
                    case 2:
                        if (!!_c.done) return [3 /*break*/, 5];
                        viewId = _c.value;
                        return [5 /*yield**/, _loop_1(viewId)];
                    case 3:
                        _e.sent();
                        _e.label = 4;
                    case 4:
                        _c = _b.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_2_1 = _e.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    PluginViewRegistry.prototype.getPluginViewContainer = function (viewContainerId) {
        return __awaiter(this, void 0, void 0, function () {
            var debug, identifier;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (viewContainerId === 'explorer') {
                            return [2 /*return*/, this.widgetManager.getWidget(browser_2.EXPLORER_VIEW_CONTAINER_ID)];
                        }
                        if (viewContainerId === 'scm') {
                            return [2 /*return*/, this.widgetManager.getWidget(scm_contribution_1.SCM_VIEW_CONTAINER_ID)];
                        }
                        if (!(viewContainerId === 'debug')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.widgetManager.getWidget(debug_widget_1.DebugWidget.ID)];
                    case 1:
                        debug = _a.sent();
                        if (debug instanceof debug_widget_1.DebugWidget) {
                            return [2 /*return*/, debug['sessionWidget']['viewContainer']];
                        }
                        _a.label = 2;
                    case 2:
                        identifier = this.toViewContainerIdentifier(viewContainerId);
                        return [2 /*return*/, this.widgetManager.getWidget(exports.PLUGIN_VIEW_CONTAINER_FACTORY_ID, identifier)];
                }
            });
        });
    };
    PluginViewRegistry.prototype.initWidgets = function () {
        return __awaiter(this, void 0, void 0, function () {
            var promises, _loop_2, _a, _b, id;
            var e_3, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        promises = [];
                        _loop_2 = function (id) {
                            promises.push((function () { return __awaiter(_this, void 0, void 0, function () {
                                var viewContainer;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.getPluginViewContainer(id)];
                                        case 1:
                                            viewContainer = _a.sent();
                                            if (!!viewContainer) return [3 /*break*/, 3];
                                            return [4 /*yield*/, this.openViewContainer(id)];
                                        case 2:
                                            viewContainer = _a.sent();
                                            if (viewContainer && !viewContainer.getParts().filter(function (part) { return !part.isHidden; }).length) {
                                                // close view containers without any visible view parts
                                                viewContainer.dispose();
                                            }
                                            return [3 /*break*/, 5];
                                        case 3: return [4 /*yield*/, this.prepareViewContainer(this.toViewContainerId(viewContainer.options), viewContainer)];
                                        case 4:
                                            _a.sent();
                                            _a.label = 5;
                                        case 5: return [2 /*return*/];
                                    }
                                });
                            }); })().catch(console.error));
                        };
                        try {
                            for (_a = __values(this.viewContainers.keys()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                id = _b.value;
                                _loop_2(id);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        promises.push((function () { return __awaiter(_this, void 0, void 0, function () {
                            var explorer;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.widgetManager.getWidget(browser_2.EXPLORER_VIEW_CONTAINER_ID)];
                                    case 1:
                                        explorer = _a.sent();
                                        if (!(explorer instanceof browser_1.ViewContainer)) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.prepareViewContainer('explorer', explorer)];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); })().catch(console.error));
                        promises.push((function () { return __awaiter(_this, void 0, void 0, function () {
                            var scm;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.widgetManager.getWidget(scm_contribution_1.SCM_VIEW_CONTAINER_ID)];
                                    case 1:
                                        scm = _a.sent();
                                        if (!(scm instanceof browser_1.ViewContainer)) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.prepareViewContainer('scm', scm)];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); })().catch(console.error));
                        promises.push((function () { return __awaiter(_this, void 0, void 0, function () {
                            var debug, viewContainer;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.widgetManager.getWidget(debug_widget_1.DebugWidget.ID)];
                                    case 1:
                                        debug = _a.sent();
                                        if (!(debug instanceof debug_widget_1.DebugWidget)) return [3 /*break*/, 3];
                                        viewContainer = debug['sessionWidget']['viewContainer'];
                                        return [4 /*yield*/, this.prepareViewContainer('debug', viewContainer)];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); })().catch(console.error));
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PluginViewRegistry.prototype.removeStaleWidgets = function () {
        return __awaiter(this, void 0, void 0, function () {
            var views, views_1, views_1_1, view, id, viewContainers, viewContainers_1, viewContainers_1_1, viewContainer, id;
            var e_4, _a, e_5, _b;
            return __generator(this, function (_c) {
                views = this.widgetManager.getWidgets(exports.PLUGIN_VIEW_FACTORY_ID);
                try {
                    for (views_1 = __values(views), views_1_1 = views_1.next(); !views_1_1.done; views_1_1 = views_1.next()) {
                        view = views_1_1.value;
                        if (view instanceof plugin_view_widget_1.PluginViewWidget) {
                            id = this.toViewId(view.options);
                            if (!this.views.has(id)) {
                                view.dispose();
                            }
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (views_1_1 && !views_1_1.done && (_a = views_1.return)) _a.call(views_1);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                viewContainers = this.widgetManager.getWidgets(exports.PLUGIN_VIEW_CONTAINER_FACTORY_ID);
                try {
                    for (viewContainers_1 = __values(viewContainers), viewContainers_1_1 = viewContainers_1.next(); !viewContainers_1_1.done; viewContainers_1_1 = viewContainers_1.next()) {
                        viewContainer = viewContainers_1_1.value;
                        if (viewContainer instanceof browser_1.ViewContainer) {
                            id = this.toViewContainerId(viewContainer.options);
                            if (!this.viewContainers.has(id)) {
                                viewContainer.dispose();
                            }
                        }
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (viewContainers_1_1 && !viewContainers_1_1.done && (_b = viewContainers_1.return)) _b.call(viewContainers_1);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
                return [2 /*return*/];
            });
        });
    };
    PluginViewRegistry.prototype.toViewContainerIdentifier = function (viewContainerId) {
        return { id: exports.PLUGIN_VIEW_CONTAINER_FACTORY_ID + ':' + viewContainerId };
    };
    PluginViewRegistry.prototype.toViewContainerId = function (identifier) {
        return identifier.id.substr(exports.PLUGIN_VIEW_CONTAINER_FACTORY_ID.length + 1);
    };
    PluginViewRegistry.prototype.toPluginViewWidgetIdentifier = function (viewId) {
        return { id: exports.PLUGIN_VIEW_FACTORY_ID + ':' + viewId, viewId: viewId };
    };
    PluginViewRegistry.prototype.toViewId = function (identifier) {
        return identifier.viewId;
    };
    /**
     * retrieve restored layout state from previous user session but close widgets
     * widgets should be opened only when view data providers are registered
     */
    PluginViewRegistry.prototype.onDidInitializeLayout = function () {
        var e_6, _a;
        var widgets = this.widgetManager.getWidgets(exports.PLUGIN_VIEW_DATA_FACTORY_ID);
        try {
            for (var widgets_1 = __values(widgets), widgets_1_1 = widgets_1.next(); !widgets_1_1.done; widgets_1_1 = widgets_1.next()) {
                var widget = widgets_1_1.value;
                if (browser_1.StatefulWidget.is(widget)) {
                    this.viewDataState.set(widget.id, widget.storeState());
                }
                widget.dispose();
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (widgets_1_1 && !widgets_1_1.done && (_a = widgets_1.return)) _a.call(widgets_1);
            }
            finally { if (e_6) throw e_6.error; }
        }
    };
    PluginViewRegistry.prototype.registerViewDataProvider = function (viewId, provider) {
        var _this = this;
        if (this.viewDataProviders.has(viewId)) {
            console.error("data provider for '" + viewId + "' view is already registered");
            return disposable_1.Disposable.NULL;
        }
        this.viewDataProviders.set(viewId, provider);
        var toDispose = new disposable_1.DisposableCollection(disposable_1.Disposable.create(function () {
            _this.viewDataProviders.delete(viewId);
            _this.viewDataState.delete(viewId);
        }));
        this.getView(viewId).then(function (view) { return __awaiter(_this, void 0, void 0, function () {
            var toDisposeOnDidExpandView_1, unsubscribe_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        if (!view) return [3 /*break*/, 3];
                        if (!view.isVisible) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.prepareView(view)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        toDisposeOnDidExpandView_1 = new disposable_1.DisposableCollection(this.onDidExpandView(function (id) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(id === viewId)) return [3 /*break*/, 2];
                                        unsubscribe_1();
                                        return [4 /*yield*/, this.prepareView(view)];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); }));
                        unsubscribe_1 = function () { return toDisposeOnDidExpandView_1.dispose(); };
                        view.disposed.connect(unsubscribe_1);
                        toDisposeOnDidExpandView_1.push(disposable_1.Disposable.create(function () { return view.disposed.disconnect(unsubscribe_1); }));
                        toDispose.push(toDisposeOnDidExpandView_1);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        return toDispose;
    };
    PluginViewRegistry.prototype.createViewDataWidget = function (viewId) {
        return __awaiter(this, void 0, void 0, function () {
            var view, provider, _a, viewInfo, state, widget;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        view = this.views.get(viewId);
                        provider = this.viewDataProviders.get(viewId);
                        if (!view || !provider) {
                            return [2 /*return*/, undefined];
                        }
                        _a = __read(view, 2), viewInfo = _a[1];
                        state = this.viewDataState.get(viewId);
                        return [4 /*yield*/, provider({ state: state, viewInfo: viewInfo })];
                    case 1:
                        widget = _b.sent();
                        if (browser_1.StatefulWidget.is(widget)) {
                            this.storeViewDataStateOnDispose(viewId, widget);
                        }
                        else {
                            this.viewDataState.delete(viewId);
                        }
                        return [2 /*return*/, widget];
                }
            });
        });
    };
    PluginViewRegistry.prototype.storeViewDataStateOnDispose = function (viewId, widget) {
        var _this = this;
        var dispose = widget.dispose.bind(widget);
        widget.dispose = function () {
            _this.viewDataState.set(viewId, widget.storeState());
            dispose();
        };
    };
    PluginViewRegistry.prototype.trackVisibleWidget = function (factoryId, view) {
        var _this = this;
        this.doTrackVisibleWidget(this.widgetManager.tryGetWidget(factoryId), view);
        this.widgetManager.onDidCreateWidget(function (event) {
            if (factoryId === event.factoryId) {
                var widget = event.widget;
                _this.doTrackVisibleWidget(widget, view);
            }
        });
    };
    PluginViewRegistry.prototype.doTrackVisibleWidget = function (widget, view) {
        var _this = this;
        if (widget instanceof browser_1.BaseWidget) {
            widget.onDidChangeVisibility(function () { return _this.updateVisibleWidget(widget, view); });
            var toDispose_1 = new disposable_1.DisposableCollection(disposable_1.Disposable.create(function () { return _this.updateVisibleWidget(widget, view); }), this.shell.onDidChangeActiveWidget(function () {
                if (_this.shell.activeWidget === widget) {
                    _this.updateVisibleWidget(widget, view);
                }
            }));
            if (view.sideArea !== undefined) {
                toDispose_1.pushAll([
                    this.shell.onDidAddWidget(function (w) {
                        if (w === widget) {
                            _this.updateVisibleWidget(widget, view);
                        }
                    })
                ]);
            }
            widget.disposed.connect(function () { return toDispose_1.dispose(); });
        }
    };
    PluginViewRegistry.prototype.updateVisibleWidget = function (widget, view) {
        var visibleViews = 'viewletId' in view ? this.visibleViewlets : this.visiblePanels;
        var viewId = 'viewletId' in view ? view.viewletId : view.panelId;
        var visibleView = 'viewletId' in view ? this.viewContextKeys.activeViewlet : this.viewContextKeys.activePanel;
        visibleViews.delete(viewId);
        if (this.isVisibleWidget(widget, view)) {
            visibleView.set(viewId);
            visibleViews.add(viewId);
        }
        else {
            var lastVisibleView = __spread(visibleViews.values())[visibleViews.size - 1];
            visibleView.set(lastVisibleView);
        }
    };
    PluginViewRegistry.prototype.isVisibleWidget = function (widget, view) {
        if (widget.isDisposed || !widget.isVisible) {
            return false;
        }
        if (view.sideArea === undefined) {
            return true;
        }
        var area = this.shell.getAreaFor(widget);
        return view.sideArea === (area === 'left' || area === 'right');
    };
    PluginViewRegistry.prototype.updateFocusedView = function () {
        var widget = this.shell.activeWidget;
        if (widget instanceof plugin_view_widget_1.PluginViewWidget) {
            this.viewContextKeys.focusedView.set(widget.options.viewId);
        }
        else {
            this.viewContextKeys.focusedView.reset();
        }
    };
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], PluginViewRegistry.prototype, "shell", void 0);
    __decorate([
        inversify_1.inject(plugin_shared_style_1.PluginSharedStyle),
        __metadata("design:type", plugin_shared_style_1.PluginSharedStyle)
    ], PluginViewRegistry.prototype, "style", void 0);
    __decorate([
        inversify_1.inject(browser_1.WidgetManager),
        __metadata("design:type", browser_1.WidgetManager)
    ], PluginViewRegistry.prototype, "widgetManager", void 0);
    __decorate([
        inversify_1.inject(scm_contribution_1.ScmContribution),
        __metadata("design:type", scm_contribution_1.ScmContribution)
    ], PluginViewRegistry.prototype, "scm", void 0);
    __decorate([
        inversify_1.inject(navigator_contribution_1.FileNavigatorContribution),
        __metadata("design:type", navigator_contribution_1.FileNavigatorContribution)
    ], PluginViewRegistry.prototype, "explorer", void 0);
    __decorate([
        inversify_1.inject(debug_frontend_application_contribution_1.DebugFrontendApplicationContribution),
        __metadata("design:type", debug_frontend_application_contribution_1.DebugFrontendApplicationContribution)
    ], PluginViewRegistry.prototype, "debug", void 0);
    __decorate([
        inversify_1.inject(command_1.CommandRegistry),
        __metadata("design:type", command_1.CommandRegistry)
    ], PluginViewRegistry.prototype, "commands", void 0);
    __decorate([
        inversify_1.inject(menu_1.MenuModelRegistry),
        __metadata("design:type", menu_1.MenuModelRegistry)
    ], PluginViewRegistry.prototype, "menus", void 0);
    __decorate([
        inversify_1.inject(quick_view_service_1.QuickViewService),
        __metadata("design:type", quick_view_service_1.QuickViewService)
    ], PluginViewRegistry.prototype, "quickView", void 0);
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], PluginViewRegistry.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.inject(view_context_key_service_1.ViewContextKeyService),
        __metadata("design:type", view_context_key_service_1.ViewContextKeyService)
    ], PluginViewRegistry.prototype, "viewContextKeys", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PluginViewRegistry.prototype, "init", null);
    PluginViewRegistry = __decorate([
        inversify_1.injectable()
    ], PluginViewRegistry);
    return PluginViewRegistry;
}());
exports.PluginViewRegistry = PluginViewRegistry;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/view/tree-views-main.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/view/tree-views-main.js ***!
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
exports.TreeViewsMainImpl = void 0;
var plugin_api_rpc_1 = __webpack_require__(/*! ../../../common/plugin-api-rpc */ "./node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js");
var plugin_view_registry_1 = __webpack_require__(/*! ./plugin-view-registry */ "./node_modules/@theia/plugin-ext/lib/main/browser/view/plugin-view-registry.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var view_context_key_service_1 = __webpack_require__(/*! ./view-context-key-service */ "./node_modules/@theia/plugin-ext/lib/main/browser/view/view-context-key-service.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var tree_view_widget_1 = __webpack_require__(/*! ./tree-view-widget */ "./node_modules/@theia/plugin-ext/lib/main/browser/view/tree-view-widget.js");
var plugin_view_widget_1 = __webpack_require__(/*! ./plugin-view-widget */ "./node_modules/@theia/plugin-ext/lib/main/browser/view/plugin-view-widget.js");
var TreeViewsMainImpl = /** @class */ (function () {
    function TreeViewsMainImpl(rpc, container) {
        this.container = container;
        this.treeViewProviders = new Map();
        this.toDispose = new core_1.DisposableCollection(core_1.Disposable.create(function () { }));
        this.proxy = rpc.getProxy(plugin_api_rpc_1.MAIN_RPC_CONTEXT.TREE_VIEWS_EXT);
        this.viewRegistry = container.get(plugin_view_registry_1.PluginViewRegistry);
        this.contextKeys = this.container.get(view_context_key_service_1.ViewContextKeyService);
        this.widgetManager = this.container.get(browser_1.WidgetManager);
    }
    TreeViewsMainImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    TreeViewsMainImpl.prototype.$registerTreeDataProvider = function (treeViewId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.treeViewProviders.set(treeViewId, this.viewRegistry.registerViewDataProvider(treeViewId, function (_a) {
                    var state = _a.state, viewInfo = _a.viewInfo;
                    return __awaiter(_this, void 0, void 0, function () {
                        var widget, root;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, this.widgetManager.getOrCreateWidget(plugin_view_registry_1.PLUGIN_VIEW_DATA_FACTORY_ID, { id: treeViewId })];
                                case 1:
                                    widget = _b.sent();
                                    widget.model.viewInfo = viewInfo;
                                    if (!state) return [3 /*break*/, 3];
                                    widget.restoreState(state);
                                    // ensure that state is completely restored
                                    return [4 /*yield*/, widget.model.refresh()];
                                case 2:
                                    // ensure that state is completely restored
                                    _b.sent();
                                    return [3 /*break*/, 4];
                                case 3:
                                    if (!widget.model.root) {
                                        root = {
                                            id: '',
                                            parent: undefined,
                                            name: '',
                                            visible: false,
                                            expanded: true,
                                            children: []
                                        };
                                        widget.model.root = root;
                                    }
                                    _b.label = 4;
                                case 4:
                                    if (this.toDispose.disposed) {
                                        widget.model.proxy = undefined;
                                    }
                                    else {
                                        widget.model.proxy = this.proxy;
                                        this.toDispose.push(core_1.Disposable.create(function () { return widget.model.proxy = undefined; }));
                                        this.handleTreeEvents(widget.id, widget);
                                    }
                                    return [4 /*yield*/, widget.model.refresh()];
                                case 5:
                                    _b.sent();
                                    return [2 /*return*/, widget];
                            }
                        });
                    });
                }));
                this.toDispose.push(core_1.Disposable.create(function () { return _this.$unregisterTreeDataProvider(treeViewId); }));
                return [2 /*return*/];
            });
        });
    };
    TreeViewsMainImpl.prototype.$unregisterTreeDataProvider = function (treeViewId) {
        return __awaiter(this, void 0, void 0, function () {
            var treeDataProvider;
            return __generator(this, function (_a) {
                treeDataProvider = this.treeViewProviders.get(treeViewId);
                if (treeDataProvider) {
                    this.treeViewProviders.delete(treeViewId);
                    treeDataProvider.dispose();
                }
                return [2 /*return*/];
            });
        });
    };
    TreeViewsMainImpl.prototype.$refresh = function (treeViewId) {
        return __awaiter(this, void 0, void 0, function () {
            var viewPanel, widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.viewRegistry.getView(treeViewId)];
                    case 1:
                        viewPanel = _a.sent();
                        widget = viewPanel && viewPanel.widgets[0];
                        if (!(widget instanceof tree_view_widget_1.TreeViewWidget)) return [3 /*break*/, 3];
                        return [4 /*yield*/, widget.model.refresh()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TreeViewsMainImpl.prototype.$reveal = function (treeViewId, treeItemId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var viewPanel, widget, treeNode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.viewRegistry.openView(treeViewId, { activate: options.focus })];
                    case 1:
                        viewPanel = _a.sent();
                        widget = viewPanel && viewPanel.widgets[0];
                        if (widget instanceof tree_view_widget_1.TreeViewWidget) {
                            treeNode = widget.model.getNode(treeItemId);
                            if (treeNode) {
                                if (options.expand && browser_1.ExpandableTreeNode.is(treeNode)) {
                                    widget.model.expandNode(treeNode);
                                }
                                if (options.select && browser_1.SelectableTreeNode.is(treeNode)) {
                                    widget.model.selectNode(treeNode);
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TreeViewsMainImpl.prototype.$setMessage = function (treeViewId, message) {
        return __awaiter(this, void 0, void 0, function () {
            var viewPanel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.viewRegistry.getView(treeViewId)];
                    case 1:
                        viewPanel = _a.sent();
                        if (viewPanel instanceof plugin_view_widget_1.PluginViewWidget) {
                            viewPanel.message = message;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TreeViewsMainImpl.prototype.$setTitle = function (treeViewId, title) {
        return __awaiter(this, void 0, void 0, function () {
            var viewPanel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.viewRegistry.getView(treeViewId)];
                    case 1:
                        viewPanel = _a.sent();
                        if (viewPanel) {
                            viewPanel.title.label = title;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TreeViewsMainImpl.prototype.handleTreeEvents = function (treeViewId, treeViewWidget) {
        var _this = this;
        this.toDispose.push(treeViewWidget.model.onExpansionChanged(function (event) {
            _this.proxy.$setExpanded(treeViewId, event.id, event.expanded);
        }));
        this.toDispose.push(treeViewWidget.model.onSelectionChanged(function (event) {
            if (event.length === 1) {
                var contextValue = event[0].contextValue;
                _this.contextKeys.viewItem.set(contextValue);
            }
            else {
                _this.contextKeys.viewItem.set('');
            }
            _this.contextKeys.view.set(treeViewId);
            _this.proxy.$setSelection(treeViewId, event.map(function (node) { return node.id; }));
        }));
        var updateVisible = function () { return _this.proxy.$setVisible(treeViewId, treeViewWidget.isVisible); };
        updateVisible();
        this.toDispose.push(treeViewWidget.onDidChangeVisibility(function () { return updateVisible(); }));
    };
    return TreeViewsMainImpl;
}());
exports.TreeViewsMainImpl = TreeViewsMainImpl;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/webview/webview-widget-factory.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/webview/webview-widget-factory.js ***!
  \*******************************************************************************************/
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
exports.WebviewWidgetFactory = void 0;
var webview_1 = __webpack_require__(/*! ./webview */ "./node_modules/@theia/plugin-ext/lib/main/browser/webview/webview.js");
var webview_environment_1 = __webpack_require__(/*! ./webview-environment */ "./node_modules/@theia/plugin-ext/lib/main/browser/webview/webview-environment.js");
var WebviewWidgetFactory = /** @class */ (function () {
    function WebviewWidgetFactory(container) {
        this.id = webview_1.WebviewWidget.FACTORY_ID;
        this.container = container;
    }
    WebviewWidgetFactory.prototype.createWidget = function (identifier) {
        return __awaiter(this, void 0, void 0, function () {
            var externalEndpoint, endpoint, child;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.container.get(webview_environment_1.WebviewEnvironment).externalEndpoint()];
                    case 1:
                        externalEndpoint = _a.sent();
                        endpoint = externalEndpoint.replace('{{uuid}}', identifier.id);
                        if (endpoint[endpoint.length - 1] === '/') {
                            endpoint = endpoint.slice(0, endpoint.length - 1);
                        }
                        child = this.container.createChild();
                        child.bind(webview_1.WebviewWidgetIdentifier).toConstantValue(identifier);
                        child.bind(webview_1.WebviewWidgetExternalEndpoint).toConstantValue(endpoint);
                        return [2 /*return*/, child.get(webview_1.WebviewWidget)];
                }
            });
        });
    };
    return WebviewWidgetFactory;
}());
exports.WebviewWidgetFactory = WebviewWidgetFactory;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/webviews-main.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/webviews-main.js ***!
  \**************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebviewsMainImpl = void 0;
var debounce = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
var vscode_uri_1 = __webpack_require__(/*! vscode-uri */ "./node_modules/vscode-uri/lib/esm/index.js");
var plugin_api_rpc_1 = __webpack_require__(/*! ../../common/plugin-api-rpc */ "./node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js");
var application_shell_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/application-shell */ "./node_modules/@theia/core/lib/browser/shell/application-shell.js");
var webview_1 = __webpack_require__(/*! ./webview/webview */ "./node_modules/@theia/plugin-ext/lib/main/browser/webview/webview.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var view_column_service_1 = __webpack_require__(/*! ./view-column-service */ "./node_modules/@theia/plugin-ext/lib/main/browser/view-column-service.js");
var widget_manager_1 = __webpack_require__(/*! @theia/core/lib/browser/widget-manager */ "./node_modules/@theia/core/lib/browser/widget-manager.js");
var json_1 = __webpack_require__(/*! @phosphor/coreutils/lib/json */ "./node_modules/@phosphor/coreutils/lib/json.js");
var hosted_plugin_1 = __webpack_require__(/*! ../../hosted/browser/hosted-plugin */ "./node_modules/@theia/plugin-ext/lib/hosted/browser/hosted-plugin.js");
var WebviewsMainImpl = /** @class */ (function () {
    function WebviewsMainImpl(rpc, container) {
        var _this = this;
        this.toDispose = new disposable_1.DisposableCollection();
        this.updateViewStates = debounce(function () {
            var e_1, _a;
            try {
                for (var _b = __values(_this.widgets.getWidgets(webview_1.WebviewWidget.FACTORY_ID)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var widget = _c.value;
                    if (widget instanceof webview_1.WebviewWidget) {
                        _this.updateViewState(widget);
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
        }, 100);
        this.proxy = rpc.getProxy(plugin_api_rpc_1.MAIN_RPC_CONTEXT.WEBVIEWS_EXT);
        this.shell = container.get(application_shell_1.ApplicationShell);
        this.viewColumnService = container.get(view_column_service_1.ViewColumnService);
        this.widgets = container.get(widget_manager_1.WidgetManager);
        this.pluginService = container.get(hosted_plugin_1.HostedPluginSupport);
        this.toDispose.push(this.shell.onDidChangeActiveWidget(function () { return _this.updateViewStates(); }));
        this.toDispose.push(this.shell.onDidChangeCurrentWidget(function () { return _this.updateViewStates(); }));
        this.toDispose.push(this.viewColumnService.onViewColumnChanged(function () { return _this.updateViewStates(); }));
    }
    WebviewsMainImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    WebviewsMainImpl.prototype.$createWebviewPanel = function (panelId, viewType, title, showOptions, options) {
        return __awaiter(this, void 0, void 0, function () {
            var view, enableFindWidget, retainContextWhenHidden, enableScripts, localResourceRoots, contentOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.widgets.getOrCreateWidget(webview_1.WebviewWidget.FACTORY_ID, { id: panelId })];
                    case 1:
                        view = _a.sent();
                        this.hookWebview(view);
                        view.viewType = viewType;
                        view.title.label = title;
                        enableFindWidget = options.enableFindWidget, retainContextWhenHidden = options.retainContextWhenHidden, enableScripts = options.enableScripts, localResourceRoots = options.localResourceRoots, contentOptions = __rest(options, ["enableFindWidget", "retainContextWhenHidden", "enableScripts", "localResourceRoots"]);
                        view.options = { enableFindWidget: enableFindWidget, retainContextWhenHidden: retainContextWhenHidden };
                        view.setContentOptions(__assign({ allowScripts: enableScripts, localResourceRoots: localResourceRoots && localResourceRoots.map(function (root) { return root.toString(); }) }, contentOptions));
                        this.addOrReattachWidget(view, showOptions);
                        return [2 /*return*/];
                }
            });
        });
    };
    WebviewsMainImpl.prototype.hookWebview = function (view) {
        var _this = this;
        var handle = view.identifier.id;
        this.toDispose.push(view.onDidChangeVisibility(function () { return _this.updateViewState(view); }));
        this.toDispose.push(view.onMessage(function (data) { return _this.proxy.$onMessage(handle, data); }));
        view.disposed.connect(function () {
            if (_this.toDispose.disposed) {
                return;
            }
            _this.proxy.$onDidDisposeWebviewPanel(handle);
        });
    };
    WebviewsMainImpl.prototype.addOrReattachWidget = function (widget, showOptions) {
        var widgetOptions = { area: showOptions.area ? showOptions.area : 'main' };
        var mode = 'open-to-right';
        if (showOptions.viewColumn === -2) {
            var ref = this.shell.currentWidget;
            if (ref && this.shell.getAreaFor(ref) === widgetOptions.area) {
                Object.assign(widgetOptions, { ref: ref, mode: mode });
            }
        }
        else if (widgetOptions.area === 'main' && showOptions.viewColumn !== undefined) {
            this.viewColumnService.updateViewColumns();
            var widgetIds_1 = this.viewColumnService.getViewColumnIds(showOptions.viewColumn);
            if (widgetIds_1.length > 0) {
                mode = 'tab-after';
            }
            else if (showOptions.viewColumn >= 0) {
                var columnsSize = this.viewColumnService.viewColumnsSize();
                if (columnsSize) {
                    showOptions.viewColumn = columnsSize - 1;
                    widgetIds_1 = this.viewColumnService.getViewColumnIds(showOptions.viewColumn);
                }
            }
            var ref = this.shell.getWidgets(widgetOptions.area).find(function (w) { return !w.isHidden && widgetIds_1.indexOf(w.id) !== -1; });
            if (ref) {
                Object.assign(widgetOptions, { ref: ref, mode: mode });
            }
        }
        this.shell.addWidget(widget, widgetOptions);
        if (showOptions.preserveFocus) {
            this.shell.revealWidget(widget.id);
        }
        else {
            this.shell.activateWidget(widget.id);
        }
    };
    WebviewsMainImpl.prototype.$disposeWebview = function (handle) {
        return __awaiter(this, void 0, void 0, function () {
            var view;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tryGetWebview(handle)];
                    case 1:
                        view = _a.sent();
                        if (view) {
                            view.dispose();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WebviewsMainImpl.prototype.$reveal = function (handle, showOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var widget, columnIds, area;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getWebview(handle)];
                    case 1:
                        widget = _a.sent();
                        if (widget.isDisposed) {
                            return [2 /*return*/];
                        }
                        if ((showOptions.viewColumn !== undefined && showOptions.viewColumn !== widget.viewState.position) || showOptions.area !== undefined) {
                            this.viewColumnService.updateViewColumns();
                            columnIds = showOptions.viewColumn ? this.viewColumnService.getViewColumnIds(showOptions.viewColumn) : [];
                            area = this.shell.getAreaFor(widget);
                            if (columnIds.indexOf(widget.id) === -1 || area !== showOptions.area) {
                                this.addOrReattachWidget(widget, showOptions);
                                return [2 /*return*/];
                            }
                        }
                        if (showOptions.preserveFocus) {
                            this.shell.revealWidget(widget.id);
                        }
                        else {
                            this.shell.activateWidget(widget.id);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WebviewsMainImpl.prototype.$setTitle = function (handle, value) {
        return __awaiter(this, void 0, void 0, function () {
            var webview;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getWebview(handle)];
                    case 1:
                        webview = _a.sent();
                        webview.title.label = value;
                        return [2 /*return*/];
                }
            });
        });
    };
    WebviewsMainImpl.prototype.$setIconPath = function (handle, iconUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var webview;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getWebview(handle)];
                    case 1:
                        webview = _a.sent();
                        webview.setIconUrl(iconUrl);
                        return [2 /*return*/];
                }
            });
        });
    };
    WebviewsMainImpl.prototype.$setHtml = function (handle, value) {
        return __awaiter(this, void 0, void 0, function () {
            var webview;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getWebview(handle)];
                    case 1:
                        webview = _a.sent();
                        webview.setHTML(value);
                        return [2 /*return*/];
                }
            });
        });
    };
    WebviewsMainImpl.prototype.$setOptions = function (handle, options) {
        return __awaiter(this, void 0, void 0, function () {
            var webview, enableScripts, localResourceRoots, contentOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getWebview(handle)];
                    case 1:
                        webview = _a.sent();
                        enableScripts = options.enableScripts, localResourceRoots = options.localResourceRoots, contentOptions = __rest(options, ["enableScripts", "localResourceRoots"]);
                        webview.setContentOptions(__assign({ allowScripts: enableScripts, localResourceRoots: localResourceRoots && localResourceRoots.map(function (root) { return root.toString(); }) }, contentOptions));
                        return [2 /*return*/];
                }
            });
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    WebviewsMainImpl.prototype.$postMessage = function (handle, value) {
        return __awaiter(this, void 0, void 0, function () {
            var webview;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getWebview(handle)];
                    case 1:
                        webview = _a.sent();
                        webview.sendMessage(value);
                        return [2 /*return*/, true];
                }
            });
        });
    };
    WebviewsMainImpl.prototype.$registerSerializer = function (viewType) {
        var _this = this;
        this.pluginService.registerWebviewReviver(viewType, function (widget) { return _this.restoreWidget(widget); });
        this.toDispose.push(disposable_1.Disposable.create(function () { return _this.$unregisterSerializer(viewType); }));
    };
    WebviewsMainImpl.prototype.$unregisterSerializer = function (viewType) {
        this.pluginService.unregisterWebviewReviver(viewType);
    };
    WebviewsMainImpl.prototype.restoreWidget = function (widget) {
        return __awaiter(this, void 0, void 0, function () {
            var handle, title, state, options, _a, allowScripts, localResourceRoots, contentOptions;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.hookWebview(widget);
                        handle = widget.identifier.id;
                        title = widget.title.label;
                        state = undefined;
                        if (widget.state) {
                            try {
                                state = JSON.parse(widget.state);
                            }
                            catch (_c) {
                                // noop
                            }
                        }
                        options = widget.options;
                        _a = widget.contentOptions, allowScripts = _a.allowScripts, localResourceRoots = _a.localResourceRoots, contentOptions = __rest(_a, ["allowScripts", "localResourceRoots"]);
                        this.updateViewState(widget);
                        return [4 /*yield*/, this.proxy.$deserializeWebviewPanel(handle, widget.viewType, title, state, widget.viewState, __assign(__assign({ enableScripts: allowScripts, localResourceRoots: localResourceRoots && localResourceRoots.map(function (root) { return vscode_uri_1.URI.parse(root); }) }, contentOptions), options))];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WebviewsMainImpl.prototype.updateViewState = function (widget, viewColumn) {
        var viewState = {
            active: this.shell.activeWidget === widget,
            visible: !widget.isHidden,
            position: viewColumn || 0
        };
        if (typeof viewColumn !== 'number') {
            this.viewColumnService.updateViewColumns();
            viewState.position = this.viewColumnService.getViewColumn(widget.id) || 0;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (json_1.JSONExt.deepEqual(viewState, widget.viewState)) {
            return;
        }
        widget.viewState = viewState;
        this.proxy.$onDidChangeWebviewPanelViewState(widget.identifier.id, widget.viewState);
    };
    WebviewsMainImpl.prototype.getWebview = function (viewId) {
        return __awaiter(this, void 0, void 0, function () {
            var webview;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tryGetWebview(viewId)];
                    case 1:
                        webview = _a.sent();
                        if (!webview) {
                            throw new Error("Unknown Webview: " + viewId);
                        }
                        return [2 /*return*/, webview];
                }
            });
        });
    };
    WebviewsMainImpl.prototype.tryGetWebview = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.widgets.getWidget(webview_1.WebviewWidget.FACTORY_ID, { id: id })];
            });
        });
    };
    return WebviewsMainImpl;
}());
exports.WebviewsMainImpl = WebviewsMainImpl;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/window-state-main.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/window-state-main.js ***!
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
exports.WindowStateMain = void 0;
var vscode_uri_1 = __webpack_require__(/*! vscode-uri */ "./node_modules/vscode-uri/lib/esm/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var plugin_api_rpc_1 = __webpack_require__(/*! ../../common/plugin-api-rpc */ "./node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var opener_service_1 = __webpack_require__(/*! @theia/core/lib/browser/opener-service */ "./node_modules/@theia/core/lib/browser/opener-service.js");
var external_uri_service_1 = __webpack_require__(/*! @theia/core/lib/browser/external-uri-service */ "./node_modules/@theia/core/lib/browser/external-uri-service.js");
var WindowStateMain = /** @class */ (function () {
    function WindowStateMain(rpc, container) {
        var _this = this;
        this.toDispose = new disposable_1.DisposableCollection();
        this.proxy = rpc.getProxy(plugin_api_rpc_1.MAIN_RPC_CONTEXT.WINDOW_STATE_EXT);
        this.openerService = container.get(opener_service_1.OpenerService);
        this.externalUriService = container.get(external_uri_service_1.ExternalUriService);
        var fireDidFocus = function () { return _this.onFocusChanged(true); };
        window.addEventListener('focus', fireDidFocus);
        this.toDispose.push(disposable_1.Disposable.create(function () { return window.removeEventListener('focus', fireDidFocus); }));
        var fireDidBlur = function () { return _this.onFocusChanged(false); };
        window.addEventListener('blur', fireDidBlur);
        this.toDispose.push(disposable_1.Disposable.create(function () { return window.removeEventListener('blur', fireDidBlur); }));
    }
    WindowStateMain.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    WindowStateMain.prototype.onFocusChanged = function (focused) {
        this.proxy.$onWindowStateChanged(focused);
    };
    WindowStateMain.prototype.$openUri = function (uriComponent) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, url, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = vscode_uri_1.URI.revive(uriComponent);
                        url = new uri_1.default(encodeURI(uri.toString(true)));
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, opener_service_1.open(this.openerService, url)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 3:
                        e_1 = _a.sent();
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    WindowStateMain.prototype.$asExternalUri = function (uriComponents) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, resolved;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = vscode_uri_1.URI.revive(uriComponents);
                        return [4 /*yield*/, this.externalUriService.resolve(new uri_1.default(uri))];
                    case 1:
                        resolved = _a.sent();
                        return [2 /*return*/, vscode_uri_1.URI.parse(resolved.toString())];
                }
            });
        });
    };
    return WindowStateMain;
}());
exports.WindowStateMain = WindowStateMain;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/browser/workspace-main.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/browser/workspace-main.js ***!
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
exports.TextContentResource = exports.TextContentResourceResolver = exports.WorkspaceMainImpl = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var plugin_api_rpc_1 = __webpack_require__(/*! ../../common/plugin-api-rpc */ "./node_modules/@theia/plugin-ext/lib/common/plugin-api-rpc.js");
var vscode_uri_1 = __webpack_require__(/*! vscode-uri */ "./node_modules/vscode-uri/lib/esm/index.js");
var uri_components_1 = __webpack_require__(/*! ../../common/uri-components */ "./node_modules/@theia/plugin-ext/lib/common/uri-components.js");
var quick_open_model_1 = __webpack_require__(/*! @theia/core/lib/browser/quick-open/quick-open-model */ "./node_modules/@theia/core/lib/browser/quick-open/quick-open-model.js");
var monaco_quick_open_service_1 = __webpack_require__(/*! @theia/monaco/lib/browser/monaco-quick-open-service */ "./node_modules/@theia/monaco/lib/browser/monaco-quick-open-service.js");
var file_search_service_1 = __webpack_require__(/*! @theia/file-search/lib/common/file-search-service */ "./node_modules/@theia/file-search/lib/common/file-search-service.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var browser_1 = __webpack_require__(/*! @theia/workspace/lib/browser */ "./node_modules/@theia/workspace/lib/browser/index.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var in_plugin_filesystem_watcher_manager_1 = __webpack_require__(/*! ./in-plugin-filesystem-watcher-manager */ "./node_modules/@theia/plugin-ext/lib/main/browser/in-plugin-filesystem-watcher-manager.js");
var plugin_protocol_1 = __webpack_require__(/*! ../../common/plugin-protocol */ "./node_modules/@theia/plugin-ext/lib/common/plugin-protocol.js");
var browser_2 = __webpack_require__(/*! @theia/filesystem/lib/browser */ "./node_modules/@theia/filesystem/lib/browser/index.js");
var search_in_workspace_service_1 = __webpack_require__(/*! @theia/search-in-workspace/lib/browser/search-in-workspace-service */ "./node_modules/@theia/search-in-workspace/lib/browser/search-in-workspace-service.js");
var WorkspaceMainImpl = /** @class */ (function () {
    function WorkspaceMainImpl(rpc, container) {
        var _this = this;
        this.toDispose = new disposable_1.DisposableCollection();
        this.workspaceSearch = new Set();
        this.proxy = rpc.getProxy(plugin_api_rpc_1.MAIN_RPC_CONTEXT.WORKSPACE_EXT);
        this.storageProxy = rpc.getProxy(plugin_api_rpc_1.MAIN_RPC_CONTEXT.STORAGE_EXT);
        this.quickOpenService = container.get(monaco_quick_open_service_1.MonacoQuickOpenService);
        this.fileSearchService = container.get(file_search_service_1.FileSearchService);
        this.searchInWorkspaceService = container.get(search_in_workspace_service_1.SearchInWorkspaceService);
        this.resourceResolver = container.get(TextContentResourceResolver);
        this.pluginServer = container.get(plugin_protocol_1.PluginServer);
        this.workspaceService = container.get(browser_1.WorkspaceService);
        this.fsPreferences = container.get(browser_2.FileSystemPreferences);
        this.fileSystemWatcher = container.get(browser_2.FileSystemWatcher);
        this.inPluginFileSystemWatcherManager = container.get(in_plugin_filesystem_watcher_manager_1.InPluginFileSystemWatcherManager);
        this.processWorkspaceFoldersChanged(this.workspaceService.tryGetRoots());
        this.toDispose.push(this.workspaceService.onWorkspaceChanged(function (roots) {
            _this.processWorkspaceFoldersChanged(roots);
        }));
        this.toDispose.push(this.fileSystemWatcher.onWillCreate(function (event) {
            event.waitUntil(_this.proxy.$onWillCreateFiles({ files: [uri_components_1.theiaUritoUriComponents(event.uri)] }));
        }));
        this.toDispose.push(this.fileSystemWatcher.onDidCreate(function (event) {
            _this.proxy.$onDidCreateFiles({ files: [uri_components_1.theiaUritoUriComponents(event.uri)] });
        }));
        this.toDispose.push(this.fileSystemWatcher.onWillMove(function (event) {
            event.waitUntil(_this.proxy.$onWillRenameFiles({
                files: [{
                        oldUri: uri_components_1.theiaUritoUriComponents(event.sourceUri),
                        newUri: uri_components_1.theiaUritoUriComponents(event.targetUri),
                    }],
            }));
        }));
        this.toDispose.push(this.fileSystemWatcher.onDidMove(function (event) {
            _this.proxy.$onDidRenameFiles({
                files: [{
                        oldUri: uri_components_1.theiaUritoUriComponents(event.sourceUri),
                        newUri: uri_components_1.theiaUritoUriComponents(event.targetUri),
                    }],
            });
        }));
        this.toDispose.push(this.fileSystemWatcher.onWillDelete(function (event) {
            event.waitUntil(_this.proxy.$onWillDeleteFiles({ files: [uri_components_1.theiaUritoUriComponents(event.uri)] }));
        }));
        this.toDispose.push(this.fileSystemWatcher.onDidDelete(function (event) {
            _this.proxy.$onDidDeleteFiles({ files: [uri_components_1.theiaUritoUriComponents(event.uri)] });
        }));
    }
    WorkspaceMainImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    WorkspaceMainImpl.prototype.processWorkspaceFoldersChanged = function (roots) {
        return __awaiter(this, void 0, void 0, function () {
            var keyValueStorageWorkspacesData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isAnyRootChanged(roots) === false) {
                            return [2 /*return*/];
                        }
                        this.roots = roots;
                        this.proxy.$onWorkspaceFoldersChanged({ roots: roots });
                        return [4 /*yield*/, this.pluginServer.getAllStorageValues({
                                workspace: this.workspaceService.workspace,
                                roots: this.workspaceService.tryGetRoots()
                            })];
                    case 1:
                        keyValueStorageWorkspacesData = _a.sent();
                        this.storageProxy.$updatePluginsWorkspaceData(keyValueStorageWorkspacesData);
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkspaceMainImpl.prototype.isAnyRootChanged = function (roots) {
        if (!this.roots || this.roots.length !== roots.length) {
            return true;
        }
        return this.roots.some(function (root, index) { return root.uri !== roots[index].uri; });
    };
    WorkspaceMainImpl.prototype.$pickWorkspaceFolder = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Return undefined if workspace root is not set
            if (!_this.roots || !_this.roots.length) {
                resolve(undefined);
                return;
            }
            // Active before appearing the pick menu
            var activeElement = window.document.activeElement;
            // WorkspaceFolder to be returned
            var returnValue;
            var items = _this.roots.map(function (root) {
                var rootUri = vscode_uri_1.URI.parse(root.uri);
                var rootPathName = rootUri.path.substring(rootUri.path.lastIndexOf('/') + 1);
                return new quick_open_model_1.QuickOpenItem({
                    label: rootPathName,
                    detail: rootUri.path,
                    run: function (mode) {
                        if (mode === quick_open_model_1.QuickOpenMode.OPEN) {
                            returnValue = {
                                uri: rootUri,
                                name: rootPathName,
                                index: 0
                            };
                        }
                        return true;
                    }
                });
            });
            // Create quick open model
            var model = {
                onType: function (lookFor, acceptor) {
                    acceptor(items);
                }
            };
            // Show pick menu
            _this.quickOpenService.open(model, {
                fuzzyMatchLabel: true,
                fuzzyMatchDetail: true,
                fuzzyMatchDescription: true,
                placeholder: options.placeHolder,
                onClose: function () {
                    if (activeElement) {
                        activeElement.focus({ preventScroll: true });
                    }
                    resolve(returnValue);
                }
            });
        });
    };
    WorkspaceMainImpl.prototype.$startFileSearch = function (includePattern, includeFolderUri, excludePatternOrDisregardExcludes, maxResults) {
        return __awaiter(this, void 0, void 0, function () {
            var roots, rootUris, rootUris_1, rootUris_1_1, rootUri, opts, rootUris_2, rootUris_2_1, rootUri, filesExclude, excludePattern, rootOptions, rootExcludePatterns, uriStrs;
            var e_1, _a, e_2, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        roots = {};
                        rootUris = includeFolderUri ? [includeFolderUri] : this.roots.map(function (r) { return r.uri; });
                        try {
                            for (rootUris_1 = __values(rootUris), rootUris_1_1 = rootUris_1.next(); !rootUris_1_1.done; rootUris_1_1 = rootUris_1.next()) {
                                rootUri = rootUris_1_1.value;
                                roots[rootUri] = {};
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (rootUris_1_1 && !rootUris_1_1.done && (_a = rootUris_1.return)) _a.call(rootUris_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        opts = { rootOptions: roots };
                        if (includePattern) {
                            opts.includePatterns = [includePattern];
                        }
                        if (typeof excludePatternOrDisregardExcludes === 'string') {
                            opts.excludePatterns = [excludePatternOrDisregardExcludes];
                        }
                        if (excludePatternOrDisregardExcludes !== false) {
                            try {
                                for (rootUris_2 = __values(rootUris), rootUris_2_1 = rootUris_2.next(); !rootUris_2_1.done; rootUris_2_1 = rootUris_2.next()) {
                                    rootUri = rootUris_2_1.value;
                                    filesExclude = this.fsPreferences.get('files.exclude', undefined, rootUri);
                                    if (filesExclude) {
                                        for (excludePattern in filesExclude) {
                                            if (filesExclude[excludePattern]) {
                                                rootOptions = roots[rootUri];
                                                rootExcludePatterns = rootOptions.excludePatterns || [];
                                                rootExcludePatterns.push(excludePattern);
                                                rootOptions.excludePatterns = rootExcludePatterns;
                                            }
                                        }
                                    }
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (rootUris_2_1 && !rootUris_2_1.done && (_b = rootUris_2.return)) _b.call(rootUris_2);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }
                        if (typeof maxResults === 'number') {
                            opts.limit = maxResults;
                        }
                        return [4 /*yield*/, this.fileSearchService.find('', opts)];
                    case 1:
                        uriStrs = _c.sent();
                        return [2 /*return*/, uriStrs.map(function (uriStr) { return vscode_uri_1.URI.parse(uriStr); })];
                }
            });
        });
    };
    WorkspaceMainImpl.prototype.$findTextInFiles = function (query, options, searchRequestId, token) {
        if (token === void 0) { token = core_1.CancellationToken.None; }
        return __awaiter(this, void 0, void 0, function () {
            var maxHits, excludes, includes, canceledRequest;
            var _this = this;
            return __generator(this, function (_a) {
                maxHits = options.maxResults ? options.maxResults : 150;
                excludes = options.exclude ? (typeof options.exclude === 'string' ? options.exclude : options.exclude.pattern) : undefined;
                includes = options.include ? (typeof options.include === 'string' ? options.include : options.include.pattern) : undefined;
                canceledRequest = false;
                return [2 /*return*/, new Promise(function (resolve) {
                        var matches = 0;
                        var what = query.pattern;
                        var rootUris = _this.roots.map(function (r) { return r.uri; });
                        _this.searchInWorkspaceService.searchWithCallback(what, rootUris, {
                            onResult: function (searchId, result) {
                                if (canceledRequest) {
                                    return;
                                }
                                var hasSearch = _this.workspaceSearch.has(searchId);
                                if (!hasSearch) {
                                    _this.workspaceSearch.add(searchId);
                                    token.onCancellationRequested(function () {
                                        _this.searchInWorkspaceService.cancel(searchId);
                                        canceledRequest = true;
                                    });
                                }
                                if (token.isCancellationRequested) {
                                    _this.searchInWorkspaceService.cancel(searchId);
                                    canceledRequest = true;
                                    return;
                                }
                                if (result && result.matches && result.matches.length) {
                                    while ((matches + result.matches.length) > maxHits) {
                                        result.matches.splice(result.matches.length - 1, 1);
                                    }
                                    _this.proxy.$onTextSearchResult(searchRequestId, false, result);
                                    matches += result.matches.length;
                                    if (maxHits <= matches) {
                                        _this.searchInWorkspaceService.cancel(searchId);
                                    }
                                }
                            },
                            onDone: function (searchId, _error) {
                                var hasSearch = _this.workspaceSearch.has(searchId);
                                if (hasSearch) {
                                    _this.searchInWorkspaceService.cancel(searchId);
                                    _this.workspaceSearch.delete(searchId);
                                }
                                _this.proxy.$onTextSearchResult(searchRequestId, true);
                                if (maxHits <= matches) {
                                    resolve({ limitHit: true });
                                }
                                else {
                                    resolve({ limitHit: false });
                                }
                            }
                        }, {
                            useRegExp: query.isRegExp,
                            matchCase: query.isCaseSensitive,
                            matchWholeWord: query.isWordMatch,
                            exclude: excludes ? [excludes] : undefined,
                            include: includes ? [includes] : undefined,
                            maxResults: maxHits
                        });
                    })];
            });
        });
    };
    WorkspaceMainImpl.prototype.$registerFileSystemWatcher = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var handle;
            var _this = this;
            return __generator(this, function (_a) {
                handle = this.inPluginFileSystemWatcherManager.registerFileWatchSubscription(options, this.proxy);
                this.toDispose.push(disposable_1.Disposable.create(function () { return _this.inPluginFileSystemWatcherManager.unregisterFileWatchSubscription(handle); }));
                return [2 /*return*/, handle];
            });
        });
    };
    WorkspaceMainImpl.prototype.$unregisterFileSystemWatcher = function (watcherId) {
        this.inPluginFileSystemWatcherManager.unregisterFileWatchSubscription(watcherId);
        return Promise.resolve();
    };
    WorkspaceMainImpl.prototype.$registerTextDocumentContentProvider = function (scheme) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.resourceResolver.registerContentProvider(scheme, this.proxy);
                this.toDispose.push(disposable_1.Disposable.create(function () { return _this.resourceResolver.unregisterContentProvider(scheme); }));
                return [2 /*return*/];
            });
        });
    };
    WorkspaceMainImpl.prototype.$unregisterTextDocumentContentProvider = function (scheme) {
        this.resourceResolver.unregisterContentProvider(scheme);
    };
    WorkspaceMainImpl.prototype.$onTextDocumentContentChange = function (uri, content) {
        this.resourceResolver.onContentChange(uri, content);
    };
    WorkspaceMainImpl.prototype.$updateWorkspaceFolders = function (start, deleteCount) {
        var rootsToAdd = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rootsToAdd[_i - 2] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (_a = this.workspaceService).spliceRoots.apply(_a, __spread([start, deleteCount], rootsToAdd.map(function (root) { return new uri_1.default(root); })))];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return WorkspaceMainImpl;
}());
exports.WorkspaceMainImpl = WorkspaceMainImpl;
var TextContentResourceResolver = /** @class */ (function () {
    function TextContentResourceResolver() {
        // Resource providers for different schemes
        this.providers = new Map();
        // Opened resources
        this.resources = new Map();
    }
    TextContentResourceResolver.prototype.resolve = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var provider;
            return __generator(this, function (_a) {
                provider = this.providers.get(uri.scheme);
                if (provider) {
                    return [2 /*return*/, provider.provideResource(uri)];
                }
                throw new Error("Unable to find Text Content Resource Provider for scheme '" + uri.scheme + "'");
            });
        });
    };
    TextContentResourceResolver.prototype.registerContentProvider = function (scheme, proxy) {
        if (this.providers.has(scheme)) {
            throw new Error("Text Content Resource Provider for scheme '" + scheme + "' is already registered");
        }
        var instance = this;
        this.providers.set(scheme, {
            provideResource: function (uri) {
                var resource = instance.resources.get(uri.toString());
                if (resource) {
                    return resource;
                }
                resource = new TextContentResource(uri, proxy, {
                    dispose: function () {
                        instance.resources.delete(uri.toString());
                    }
                });
                instance.resources.set(uri.toString(), resource);
                return resource;
            }
        });
    };
    TextContentResourceResolver.prototype.unregisterContentProvider = function (scheme) {
        if (!this.providers.delete(scheme)) {
            throw new Error("Text Content Resource Provider for scheme '" + scheme + "' has not been registered");
        }
    };
    TextContentResourceResolver.prototype.onContentChange = function (uri, content) {
        var resource = this.resources.get(uri);
        if (resource) {
            resource.setContent(content);
        }
    };
    TextContentResourceResolver = __decorate([
        inversify_1.injectable()
    ], TextContentResourceResolver);
    return TextContentResourceResolver;
}());
exports.TextContentResourceResolver = TextContentResourceResolver;
var TextContentResource = /** @class */ (function () {
    function TextContentResource(uri, proxy, disposable) {
        this.uri = uri;
        this.proxy = proxy;
        this.disposable = disposable;
        this.onDidChangeContentsEmitter = new core_1.Emitter();
        this.onDidChangeContents = this.onDidChangeContentsEmitter.event;
    }
    TextContentResource.prototype.readContents = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var content, content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.cache) return [3 /*break*/, 1];
                        content = this.cache;
                        this.cache = undefined;
                        return [2 /*return*/, content];
                    case 1: return [4 /*yield*/, this.proxy.$provideTextDocumentContent(this.uri.toString())];
                    case 2:
                        content = _a.sent();
                        if (content) {
                            return [2 /*return*/, content];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, Promise.reject(new Error("Unable to get content for '" + this.uri.toString() + "'"))];
                }
            });
        });
    };
    TextContentResource.prototype.dispose = function () {
        this.disposable.dispose();
    };
    TextContentResource.prototype.setContent = function (content) {
        this.cache = content;
        this.onDidChangeContentsEmitter.fire(undefined);
    };
    return TextContentResource;
}());
exports.TextContentResource = TextContentResource;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/main/common/plugin-paths-protocol.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/main/common/plugin-paths-protocol.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginPathsService = exports.pluginPathsServicePath = void 0;
exports.pluginPathsServicePath = '/services/plugin-paths';
// Service to create plugin configuration folders for different purpose.
exports.PluginPathsService = Symbol('PluginPathsService');


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/lib/plugin-ext-frontend-module.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/lib/plugin-ext-frontend-module.js ***!
  \**************************************************************************/
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
var plugin_ext_frontend_module_1 = __webpack_require__(/*! ./main/browser/plugin-ext-frontend-module */ "./node_modules/@theia/plugin-ext/lib/main/browser/plugin-ext-frontend-module.js");
exports.default = plugin_ext_frontend_module_1.default;


/***/ }),

/***/ "./node_modules/@theia/plugin-ext/src/main/browser/dialogs/style/modal-notification.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/src/main/browser/dialogs/style/modal-notification.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../css-loader!./modal-notification.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/plugin-ext/src/main/browser/dialogs/style/modal-notification.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@theia/plugin-ext/src/main/browser/style/index.css":
/*!*************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/src/main/browser/style/index.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader!./index.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/plugin-ext/src/main/browser/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@theia/plugin-ext/src/main/browser/style/test.svg":
/*!************************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/src/main/browser/style/test.svg ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE5IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+Cjxzdmcgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxnIGlkPSJDYW52YXMiIGZpbGw9Im5vbmUiPgo8ZyBpZD0iYmVha2VyIj4KPGcgaWQ9IlNoYXBlIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0gMjAuNzU5NiAyMS44ODVMIDE1LjY4OTYgMTAuNUwgMTUuNjg5NiA0LjVMIDE3LjE4OTYgNC41TCAxNy4xODk2IDNMIDMuNjg5NTkgM0wgMy42ODk1OSA0LjVMIDUuMTg5NTkgNC41TCA1LjE4OTU5IDEwLjVMIDAuMTM0NTg4IDIxLjg4NUMgLTAuMzE1NDEyIDIyLjg3NSAwLjQxOTU4OCAyNCAxLjQ5OTU5IDI0TCAxOS40MDk2IDI0QyAyMC40ODk2IDI0IDIxLjIwOTYgMjIuODc1IDIwLjc3NDYgMjEuODg1TCAyMC43NTk2IDIxLjg4NVpNIDQuODE0NTggMTVMIDYuNjg5NTggMTAuNUwgNi42ODk1OCA0LjVMIDE0LjE4OTYgNC41TCAxNC4xODk2IDEwLjVMIDE2LjA2NDYgMTVMIDQuODE0NTggMTVaTSAxMS4xODk2IDEyTCAxMi42ODk2IDEyTCAxMi42ODk2IDEzLjVMIDExLjE4OTYgMTMuNUwgMTEuMTg5NiAxMlpNIDkuNjg5NTggMTAuNUwgOC4xODk1OCAxMC41TCA4LjE4OTU4IDlMIDkuNjg5NTggOUwgOS42ODk1OCAxMC41Wk0gOS42ODk1OCA2TCAxMS4xODk2IDZMIDExLjE4OTYgNy41TCA5LjY4OTU4IDcuNUwgOS42ODk1OCA2Wk0gOS42ODk1OCAxLjVMIDguMTg5NTggMS41TCA4LjE4OTU4IDBMIDkuNjg5NTggMEwgOS42ODk1OCAxLjVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjgxMDA1OSAwKSIgZmlsbD0id2hpdGUiLz4KPC9nPgo8L2c+CjwvZz4KPC9zdmc+Cgo="

/***/ }),

/***/ "./node_modules/@theia/plugin-ext/src/main/style/status-bar.css":
/*!**********************************************************************!*\
  !*** ./node_modules/@theia/plugin-ext/src/main/style/status-bar.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./status-bar.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/plugin-ext/src/main/style/status-bar.css");

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

/***/ "./node_modules/@theia/task/lib/browser/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@theia/task/lib/browser/index.js ***!
  \*******************************************************/
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
__exportStar(__webpack_require__(/*! ./task-service */ "./node_modules/@theia/task/lib/browser/task-service.js"), exports);
__exportStar(__webpack_require__(/*! ./task-contribution */ "./node_modules/@theia/task/lib/browser/task-contribution.js"), exports);
__exportStar(__webpack_require__(/*! ./task-definition-registry */ "./node_modules/@theia/task/lib/browser/task-definition-registry.js"), exports);
__exportStar(__webpack_require__(/*! ./task-problem-matcher-registry */ "./node_modules/@theia/task/lib/browser/task-problem-matcher-registry.js"), exports);
__exportStar(__webpack_require__(/*! ./task-problem-pattern-registry */ "./node_modules/@theia/task/lib/browser/task-problem-pattern-registry.js"), exports);
__exportStar(__webpack_require__(/*! ./task-schema-updater */ "./node_modules/@theia/task/lib/browser/task-schema-updater.js"), exports);


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/plugin-ext/src/main/browser/dialogs/style/modal-notification.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/plugin-ext/src/main/browser/dialogs/style/modal-notification.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 Red Hat, Inc. and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n.modal-Notification {\n    pointer-events: all;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    display: flex;\n    flex-direction: row;\n    -webkit-justify-content: center;\n    justify-content: center;\n    clear: both;\n    box-sizing: border-box;\n    position: relative;\n    min-width: 200px;\n    max-width: min(66vw, 800px);\n    background-color: var(--theia-editorWidget-background);\n    min-height: 35px;\n    margin-bottom: 1px;\n    color: var(--theia-editorWidget-foreground);\n}\n\n.modal-Notification .icon {\n    display: inline-block;\n    font-size: 20px;\n    padding: 5px 0;\n    width: 35px;\n    order: 1;\n}\n\n.modal-Notification .icon .fa {\n    line-height: inherit;\n    vertical-align: middle;\n    font-size: 120%;\n    color: var(--theia-editorInfo-foreground);\n}\n\n.modal-Notification .icon .error {\n    color: var(--theia-editorError-foreground);\n}\n\n.modal-Notification .icon .warning {\n    color: var(--theia-editorWarning-foreground);\n}\n\n.modal-Notification .text {\n    order: 2;\n    display: inline-block;\n    max-height: min(66vh, 600px);\n    -webkit-user-select: text;\n    -moz-user-select: text;\n    -ms-user-select: text;\n    user-select: text;\n    align-self: center;\n    flex: 1 100%;\n    padding: 10px;\n    overflow: auto;\n    white-space: pre-wrap;\n}\n\n.modal-Notification .text > p {\n    margin: 0;\n    font-size: var(--theia-ui-font-size1);\n    font-family: var(--theia-ui-font-family);\n    vertical-align: middle;\n}\n\n.modal-Notification .buttons {\n    display: flex;\n    flex-direction: row;\n    order: 3;\n    white-space: nowrap;\n    align-self: flex-end;\n    height: 40px;\n}\n\n.modal-Notification .buttons > button {\n    background-color: var(--theia-button-background);\n    color: var(--theia-button-foreground);\n    border: none;\n    border-radius: 0;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    padding: 0 10px;\n    margin: 0;\n    font-size: var(--theia-ui-font-size1);\n    outline: none;\n    cursor: pointer;\n}\n\n.modal-Notification .buttons > button:hover {\n    background-color: var(--theia-button-hoverBackground);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/plugin-ext/src/main/browser/style/index.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/plugin-ext/src/main/browser/style/index.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../../../css-loader!./plugin-sidebar.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/plugin-ext/src/main/browser/style/plugin-sidebar.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../../css-loader!./webview.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/plugin-ext/src/main/browser/style/webview.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../../css-loader!./tree.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/plugin-ext/src/main/browser/style/tree.css"), "");

// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 Red Hat, Inc. and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.spinnerContainer {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.flexcontainer {\n    display: flex;\n}\n\n.row {\n    width: 100%;\n}\n\n.column {\n    flex-direction: column;\n}\n\n.theia-plugin-view-container {\n    -webkit-mask: url('');\n    mask: url('');\n}\n\n.theia-plugin-test-tab-icon {\n    -webkit-mask: url(" + escape(__webpack_require__(/*! ./test.svg */ "./node_modules/@theia/plugin-ext/src/main/browser/style/test.svg")) + ");\n    mask: url(" + escape(__webpack_require__(/*! ./test.svg */ "./node_modules/@theia/plugin-ext/src/main/browser/style/test.svg")) + ");\n}\n\n.theia-plugin-file-icon,\n.theia-plugin-file-icon::before,\n.theia-plugin-folder-icon,\n.theia-plugin-folder-icon::before,\n.theia-plugin-folder-expanded-icon,\n.theia-plugin-folder-expanded-icon::before,\n.theia-plugin-root-folder-icon,\n.theia-plugin-root-folder-icon::before,\n.theia-plugin-root-folder-expanded-icon,\n.theia-plugin-root-folder-expanded-icon::before {\n    padding-right: var(--theia-ui-padding);\n\twidth: var(--theia-icon-size);\n\theight: var(--theia-content-line-height);\n\tline-height: inherit !important;\n\tdisplay: inline-block;\n}\n\n.p-TabBar.theia-app-sides .theia-plugin-file-icon,\n.p-TabBar.theia-app-sides .theia-plugin-file-icon::before,\n.p-TabBar.theia-app-sides .theia-plugin-folder-icon,\n.p-TabBar.theia-app-sides .theia-plugin-folder-icon::before,\n.p-TabBar.theia-app-sides .theia-plugin-folder-expanded-icon,\n.p-TabBar.theia-app-sides .theia-plugin-folder-expanded-icon::before,\n.p-TabBar.theia-app-sides .theia-plugin-root-folder-icon,\n.p-TabBar.theia-app-sides .theia-plugin-root-folder-icon::before,\n.p-TabBar.theia-app-sides .theia-plugin-root-folder-expanded-icon,\n.p-TabBar.theia-app-sides .theia-plugin-root-folder-expanded-icon::before {\n    padding: 0px !important;\n    width: var(--theia-private-sidebar-icon-size) !important;\n    height: var(--theia-private-sidebar-icon-size) !important;\n    background-size: var(--theia-private-sidebar-icon-size) !important;\n    font-size: var(--theia-private-sidebar-icon-size) !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/plugin-ext/src/main/browser/style/plugin-sidebar.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/plugin-ext/src/main/browser/style/plugin-sidebar.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 Red Hat, Inc. and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-plugins {\n    min-width: 250px !important;\n    display: flex;\n    flex-direction: column;\n}\n\n#pluginListContainer {\n    width: 100%;\n    box-sizing: border-box;\n    overflow-y: auto;\n    flex-grow: 1;\n}\n\n.theia-plugins .pluginHeaderContainer {\n    padding: 5px 15px;\n    font-size: var(--theia-ui-font-size0);\n    border-bottom: 1px solid;\n}\n\n.theia-side-panel .theia-plugins .pluginHeaderContainer {\n    padding-left: 20px;\n}\n\n.theia-plugins .pluginHeaderContainer:hover {\n    background: var(--theia-list-hoverBackground);\n}\n\n.theia-plugins .pluginHeaderContainer .row {\n    margin: 3px 0;\n}\n\n.theia-plugins .pluginName {\n    flex: 1;\n    margin-right: 5px;\n    font-size: var(--theia-ui-font-size1);\n    font-weight: 400;\n}\n\n.theia-plugins .pluginVersion {\n    flex: 1;\n    text-align: left;\n    font-size: var(--theia-ui-font-size0)\n}\n\n.theia-plugins .pluginDescription {\n    flex: 1;\n}\n\n.theia-plugins .pluginPublisher {\n    font-size: var(--theia-ui-font-size0);\n    flex: 5;\n    align-items: center;\n}\n\n.plugins-tab-icon::before {\n    content: \"\\F0FE\"\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/plugin-ext/src/main/browser/style/tree.css":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/plugin-ext/src/main/browser/style/tree.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 Red Hat, Inc. and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-tree-view-icon {\n    padding-right: var(--theia-ui-padding);\n    -webkit-font-smoothing: antialiased;\n    flex-shrink: 0;\n}\n\n.theia-tree-view-inline-action {\n    padding: 2px;\n}\n\n.theia-tree-view-description {\n    color: var(--theia-descriptionForeground);\n    font-size: var(--theia-ui-font-size0);\n    margin-left: var(--theia-ui-padding);\n}\n\n.theia-tree-view .theia-TreeNodeSegment {\n    display: flex;\n}\n\n.theia-tree-view .theia-TreeNodeContent {\n    align-items: center;\n    height: 100%;\n}\n\n.theia-tree-view  .theia-TreeContainer .theia-TreeViewInfo {\n    margin-top: 7px;\n    margin-bottom: 10px;\n    margin-left: 17px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/plugin-ext/src/main/browser/style/webview.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/plugin-ext/src/main/browser/style/webview.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 Red Hat, Inc. and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-webview.p-mod-hidden {\n    visibility: hidden;\n    display: flex !important;\n}\n\n.theia-webview {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.theia-webview iframe {\n    flex-grow: 1;\n    border: none; margin: 0; padding: 0;\n}\n\n.theia-webview-icon {\n    background: none !important;\n    min-height: 20px;\n}\n\n.theia-webview-icon::before {\n    background-size: 13px;\n    background-repeat: no-repeat;\n    vertical-align: middle;\n    display: inline-block;\n    text-align: center;\n    height: 15px;\n    width: 15px;\n    content: \"\";\n}\n\n.p-TabBar.theia-app-sides .theia-webview-icon::before {\n    width: var(--theia-private-sidebar-icon-size);\n    height: var(--theia-private-sidebar-icon-size);\n    background-size: contain;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/plugin-ext/src/main/style/status-bar.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/plugin-ext/src/main/style/status-bar.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 Red Hat, Inc. and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n#theia-statusBar .development-host {\n    background-color: var(--theia-successBackground);\n}\n\n#theia-statusBar .development-host-offline {\n    background-color: var(--theia-errorBackground);\n}\n\n#theia-statusBar .hosted-plugin {\n    background-color: var(--theia-inputValidation-infoBackground);\n}\n\n#theia-statusBar .hosted-plugin:hover {\n    background-color: var(--theia-editorInfo-foreground);\n}\n\n#theia-statusBar .hosted-plugin-failed {\n    background-color: var(--theia-errorBackground);\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=46.bundle.js.map