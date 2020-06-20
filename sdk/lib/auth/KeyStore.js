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
exports.KeyStore = void 0;
var __1 = require("..");
/**
 *
 */
var KeyStore = /** @class */ (function () {
    /**
     *
     * @param session
     */
    function KeyStore(session) {
        this._session = session;
        this._keys = new Map();
    }
    Object.defineProperty(KeyStore.prototype, "session", {
        /**
         *
         */
        get: function () {
            return this._session;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyStore.prototype, "dir", {
        /**
         *
         */
        get: function () {
            return this._dir;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyStore.prototype, "keys", {
        /**
         *
         */
        get: function () {
            return this._keys;
        },
        enumerable: false,
        configurable: true
    });
    /**
     *
     */
    KeyStore.prototype.initialize = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var groups, _loop_1, this_1, _b, _c, _i, group;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this._section = this.session.index.sections.keystore;
                        this._vault = (_a = this._section) === null || _a === void 0 ? void 0 : _a.vault;
                        this._dir = new __1.Dir(this._section.path);
                        groups = this._vault.read('keys') || {};
                        _loop_1 = function (group) {
                            var keys;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, Promise.all(groups[group].map(function (key) {
                                            return new __1.AuthKey(group, _this, key.id).initialize();
                                        }))
                                        // Keep track of the group keys
                                    ];
                                    case 1:
                                        keys = _a.sent();
                                        // Keep track of the group keys
                                        this_1.keys.set(group, keys);
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _b = [];
                        for (_c in groups)
                            _b.push(_c);
                        _i = 0;
                        _d.label = 1;
                    case 1:
                        if (!(_i < _b.length)) return [3 /*break*/, 4];
                        group = _b[_i];
                        return [5 /*yield**/, _loop_1(group)];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     */
    KeyStore.prototype.addNewKey = function (group) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var key, keysRoot, keys;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        key = new __1.AuthKey(group, this);
                        return [4 /*yield*/, key.generate()];
                    case 1:
                        _c.sent();
                        keysRoot = ((_a = this._vault) === null || _a === void 0 ? void 0 : _a.read('keys')) || {};
                        keys = keysRoot[group] || [];
                        keys.push({ id: key.id });
                        keysRoot[group] = keys;
                        (_b = this._vault) === null || _b === void 0 ? void 0 : _b.write('keys', keysRoot);
                        return [2 /*return*/, key];
                }
            });
        });
    };
    return KeyStore;
}());
exports.KeyStore = KeyStore;
//# sourceMappingURL=KeyStore.js.map