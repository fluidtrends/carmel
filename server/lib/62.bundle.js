(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "./node_modules/@theia/scm-extra/lib/browser/history/scm-history-frontend-module.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@theia/scm-extra/lib/browser/history/scm-history-frontend-module.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Arm and others.
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
exports.bindScmHistoryModule = void 0;
var scm_history_contribution_1 = __webpack_require__(/*! ./scm-history-contribution */ "./node_modules/@theia/scm-extra/lib/browser/history/scm-history-contribution.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var scm_history_widget_1 = __webpack_require__(/*! ./scm-history-widget */ "./node_modules/@theia/scm-extra/lib/browser/history/scm-history-widget.js");
var scm_extra_layout_migrations_1 = __webpack_require__(/*! ../scm-extra-layout-migrations */ "./node_modules/@theia/scm-extra/lib/browser/scm-extra-layout-migrations.js");
__webpack_require__(/*! ../../../src/browser/style/history.css */ "./node_modules/@theia/scm-extra/src/browser/style/history.css");
function bindScmHistoryModule(bind) {
    bind(scm_history_widget_1.ScmHistoryWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: scm_history_contribution_1.SCM_HISTORY_ID,
        createWidget: function () { return ctx.container.get(scm_history_widget_1.ScmHistoryWidget); }
    }); });
    browser_1.bindViewContribution(bind, scm_history_contribution_1.ScmHistoryContribution);
    bind(browser_1.ApplicationShellLayoutMigration).to(scm_extra_layout_migrations_1.ScmExtraLayoutVersion4Migration).inSingletonScope();
}
exports.bindScmHistoryModule = bindScmHistoryModule;


/***/ }),

/***/ "./node_modules/@theia/scm-extra/lib/browser/scm-extra-frontend-module.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@theia/scm-extra/lib/browser/scm-extra-frontend-module.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Arm and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var scm_history_frontend_module_1 = __webpack_require__(/*! ./history/scm-history-frontend-module */ "./node_modules/@theia/scm-extra/lib/browser/history/scm-history-frontend-module.js");
var scm_file_change_label_provider_1 = __webpack_require__(/*! ./scm-file-change-label-provider */ "./node_modules/@theia/scm-extra/lib/browser/scm-file-change-label-provider.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    scm_history_frontend_module_1.bindScmHistoryModule(bind);
    bind(scm_file_change_label_provider_1.ScmFileChangeLabelProvider).toSelf().inSingletonScope();
    bind(browser_1.LabelProviderContribution).toService(scm_file_change_label_provider_1.ScmFileChangeLabelProvider);
});


/***/ }),

/***/ "./node_modules/@theia/scm-extra/lib/browser/scm-extra-layout-migrations.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@theia/scm-extra/lib/browser/scm-extra-layout-migrations.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 Arm and others.
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
exports.ScmExtraLayoutVersion4Migration = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var scm_history_contribution_1 = __webpack_require__(/*! ./history/scm-history-contribution */ "./node_modules/@theia/scm-extra/lib/browser/history/scm-history-contribution.js");
var ScmExtraLayoutVersion4Migration = /** @class */ (function () {
    function ScmExtraLayoutVersion4Migration() {
        this.layoutVersion = 4.0;
    }
    ScmExtraLayoutVersion4Migration.prototype.onWillInflateWidget = function (desc, _a) {
        var parent = _a.parent;
        if (desc.constructionOptions.factoryId === 'git-history') {
            desc.constructionOptions.factoryId = scm_history_contribution_1.SCM_HISTORY_ID;
            return desc;
        }
        return undefined;
    };
    ScmExtraLayoutVersion4Migration = __decorate([
        inversify_1.injectable()
    ], ScmExtraLayoutVersion4Migration);
    return ScmExtraLayoutVersion4Migration;
}());
exports.ScmExtraLayoutVersion4Migration = ScmExtraLayoutVersion4Migration;


/***/ }),

/***/ "./node_modules/@theia/scm-extra/src/browser/style/history.css":
/*!*********************************************************************!*\
  !*** ./node_modules/@theia/scm-extra/src/browser/style/history.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!./history.css */ "./node_modules/css-loader/index.js!./node_modules/@theia/scm-extra/src/browser/style/history.css");

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

/***/ "./node_modules/css-loader/index.js!./node_modules/@theia/scm-extra/src/browser/style/history.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@theia/scm-extra/src/browser/style/history.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-scm-history .commitList .commitListElement {\n    margin: 3px 0;\n}\n\n.theia-scm-history .commitListElement.first .containerHead {\n    border: none;\n}\n\n.theia-scm-history .commitListElement .containerHead {\n    width: calc(100% - 5px);\n    height: 50px;\n    display: flex;\n    align-items: center;\n    border-top: 1px solid var(--theia-contrastBorder);\n}\n\n.theia-scm-history .commitListElement .containerHead:hover {\n    background-color: var(--theia-list-hoverBackground);\n    color: var(--theia-list-hoverForeground);\n    cursor: pointer;\n}\n\n.theia-scm-history:focus-within .commitListElement .containerHead.theia-mod-selected {\n    background: var(--theia-list-focusBackground);\n    color: var(--theia-list-focusForeground);\n}\n\n.theia-scm-history:not(:focus-within) .commitListElement .containerHead.theia-mod-selected {\n    background: var(--theia-list-inactiveFocusBackground);\n}\n\n.theia-scm-history .commitListElement .containerHead .headContent {\n    display: flex;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 0 8px 0 2px;\n}\n\n.theia-scm-history .commitListElement .containerHead .headContent .image-container{\n    margin-right: 5px;\n}\n\n.theia-scm-history .commitListElement .containerHead .headContent .image-container img{\n    width: 27px;\n}\n\n.theia-scm-history .commitListElement .containerHead .headContent .headLabelContainer{\n    min-width: calc(100% - 93px);\n}\n\n.theia-scm-history .commitListElement .containerHead .headContent .headLabelContainer.singleFileMode{\n    width: 100%;\n}\n\n.theia-scm-history .commitListElement .containerHead .headContent .expansionToggle{\n    display: flex;\n    align-items: center;\n}\n\n.theia-scm-history .commitListElement .containerHead .headContent .detailButton{\n    display: flex;\n    align-items: center;\n    visibility: hidden;\n    margin: 0 5px;\n}\n\n.theia-scm-history .commitListElement .containerHead:hover .headContent .detailButton {\n    visibility: visible;\n}\n\n.theia-scm-history .commitListElement .containerHead .headContent .expansionToggle > .toggle {\n    display: flex;\n    background: var(--theia-list-focusBackground);\n    padding: 5px;\n    border-radius: 7px;\n    margin-left: 5px;\n    align-items: center;\n    justify-content: flex-end;\n    min-width: 30px;\n    color: var(--theia-theia-list-focusForeground);\n}\n\n.theia-scm-history .commitTime {\n    color: var(--theia-descriptionForeground);\n    font-size: smaller;\n}\n\n.scm-history-tab-icon::before {\n    content: \"\\F1DA\"\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=62.bundle.js.map