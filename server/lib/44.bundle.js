(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "./node_modules/@theia/mini-browser/lib/browser/location-mapper-service.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@theia/mini-browser/lib/browser/location-mapper-service.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiniBrowserEndpoint = exports.FileLocationMapper = exports.LocationWithoutSchemeMapper = exports.HttpsLocationMapper = exports.HttpLocationMapper = exports.LocationMapperService = exports.LocationMapper = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var types_1 = __webpack_require__(/*! @theia/core/lib/common/types */ "./node_modules/@theia/core/lib/common/types.js");
var contribution_provider_1 = __webpack_require__(/*! @theia/core/lib/common/contribution-provider */ "./node_modules/@theia/core/lib/common/contribution-provider.js");
/**
 * Contribution for the `LocationMapperService`.
 */
exports.LocationMapper = Symbol('LocationMapper');
/**
 * Location mapper service.
 */
var LocationMapperService = /** @class */ (function () {
    function LocationMapperService() {
    }
    LocationMapperService.prototype.map = function (location) {
        return __awaiter(this, void 0, void 0, function () {
            var contributions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prioritize(location)];
                    case 1:
                        contributions = _a.sent();
                        if (contributions.length === 0) {
                            return [2 /*return*/, this.defaultMapper()(location)];
                        }
                        return [2 /*return*/, contributions[0].map(location)];
                }
            });
        });
    };
    LocationMapperService.prototype.defaultMapper = function () {
        return function (location) { return new browser_1.Endpoint().httpScheme + "//" + location; };
    };
    LocationMapperService.prototype.prioritize = function (location) {
        return __awaiter(this, void 0, void 0, function () {
            var prioritized;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, types_1.Prioritizeable.prioritizeAll(this.getContributions(), function (contribution) { return contribution.canHandle(location); })];
                    case 1:
                        prioritized = _a.sent();
                        return [2 /*return*/, prioritized.map(function (p) { return p.value; })];
                }
            });
        });
    };
    LocationMapperService.prototype.getContributions = function () {
        return this.contributions.getContributions();
    };
    __decorate([
        inversify_1.inject(contribution_provider_1.ContributionProvider),
        inversify_1.named(exports.LocationMapper),
        __metadata("design:type", Object)
    ], LocationMapperService.prototype, "contributions", void 0);
    LocationMapperService = __decorate([
        inversify_1.injectable()
    ], LocationMapperService);
    return LocationMapperService;
}());
exports.LocationMapperService = LocationMapperService;
/**
 * HTTP location mapper.
 */
var HttpLocationMapper = /** @class */ (function () {
    function HttpLocationMapper() {
    }
    HttpLocationMapper.prototype.canHandle = function (location) {
        return location.startsWith('http://') ? 1 : 0;
    };
    HttpLocationMapper.prototype.map = function (location) {
        return location;
    };
    HttpLocationMapper = __decorate([
        inversify_1.injectable()
    ], HttpLocationMapper);
    return HttpLocationMapper;
}());
exports.HttpLocationMapper = HttpLocationMapper;
/**
 * HTTPS location mapper.
 */
var HttpsLocationMapper = /** @class */ (function () {
    function HttpsLocationMapper() {
    }
    HttpsLocationMapper.prototype.canHandle = function (location) {
        return location.startsWith('https://') ? 1 : 0;
    };
    HttpsLocationMapper.prototype.map = function (location) {
        return location;
    };
    HttpsLocationMapper = __decorate([
        inversify_1.injectable()
    ], HttpsLocationMapper);
    return HttpsLocationMapper;
}());
exports.HttpsLocationMapper = HttpsLocationMapper;
/**
 * Location mapper for locations without a scheme.
 */
var LocationWithoutSchemeMapper = /** @class */ (function () {
    function LocationWithoutSchemeMapper() {
    }
    LocationWithoutSchemeMapper.prototype.canHandle = function (location) {
        return new uri_1.default(location).scheme === '' ? 1 : 0;
    };
    LocationWithoutSchemeMapper.prototype.map = function (location) {
        return "http://" + location;
    };
    LocationWithoutSchemeMapper = __decorate([
        inversify_1.injectable()
    ], LocationWithoutSchemeMapper);
    return LocationWithoutSchemeMapper;
}());
exports.LocationWithoutSchemeMapper = LocationWithoutSchemeMapper;
/**
 * `file` URI location mapper.
 */
var FileLocationMapper = /** @class */ (function () {
    function FileLocationMapper() {
    }
    FileLocationMapper.prototype.canHandle = function (location) {
        return location.startsWith('file://') ? 1 : 0;
    };
    FileLocationMapper.prototype.map = function (location) {
        var uri = new uri_1.default(location);
        if (uri.scheme !== 'file') {
            throw new Error("Only URIs with 'file' scheme can be mapped to an URL. URI was: " + uri + ".");
        }
        var rawLocation = uri.path.toString();
        if (rawLocation.charAt(0) === '/') {
            rawLocation = rawLocation.substr(1);
        }
        return new MiniBrowserEndpoint().getRestUrl().resolve(rawLocation).toString();
    };
    FileLocationMapper = __decorate([
        inversify_1.injectable()
    ], FileLocationMapper);
    return FileLocationMapper;
}());
exports.FileLocationMapper = FileLocationMapper;
var MiniBrowserEndpoint = /** @class */ (function (_super) {
    __extends(MiniBrowserEndpoint, _super);
    function MiniBrowserEndpoint() {
        return _super.call(this, { path: 'mini-browser' }) || this;
    }
    return MiniBrowserEndpoint;
}(browser_1.Endpoint));
exports.MiniBrowserEndpoint = MiniBrowserEndpoint;


/***/ })

}]);
//# sourceMappingURL=44.bundle.js.map