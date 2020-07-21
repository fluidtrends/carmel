(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/@theia/monaco/data/monaco-themes/vscode/dark_defaults.json":
/*!*********************************************************************************!*\
  !*** ./node_modules/@theia/monaco/data/monaco-themes/vscode/dark_defaults.json ***!
  \*********************************************************************************/
/*! exports provided: $schema, name, colors, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"vscode://schemas/color-theme\",\"name\":\"Dark Default Colors\",\"colors\":{\"editor.background\":\"#1E1E1E\",\"editor.foreground\":\"#D4D4D4\",\"editor.inactiveSelectionBackground\":\"#3A3D41\",\"editorIndentGuide.background\":\"#404040\",\"editorIndentGuide.activeBackground\":\"#707070\",\"editor.selectionHighlightBackground\":\"#ADD6FF26\",\"list.dropBackground\":\"#383B3D\",\"activityBarBadge.background\":\"#007ACC\",\"sideBarTitle.foreground\":\"#BBBBBB\",\"input.placeholderForeground\":\"#A6A6A6\",\"settings.textInputBackground\":\"#292929\",\"settings.numberInputBackground\":\"#292929\",\"menu.background\":\"#252526\",\"menu.foreground\":\"#CCCCCC\",\"statusBarItem.remoteForeground\":\"#FFF\",\"statusBarItem.remoteBackground\":\"#16825D\"}}");

/***/ }),

/***/ "./node_modules/@theia/monaco/data/monaco-themes/vscode/dark_plus.json":
/*!*****************************************************************************!*\
  !*** ./node_modules/@theia/monaco/data/monaco-themes/vscode/dark_plus.json ***!
  \*****************************************************************************/
/*! exports provided: $schema, name, include, tokenColors, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"vscode://schemas/color-theme\",\"name\":\"Dark+ (default dark)\",\"include\":\"./dark_vs.json\",\"tokenColors\":[{\"name\":\"Function declarations\",\"scope\":[\"entity.name.function\",\"support.function\",\"support.constant.handlebars\",\"source.powershell variable.other.member\",\"entity.name.operator.custom-literal\"],\"settings\":{\"foreground\":\"#DCDCAA\"}},{\"name\":\"Types declaration and references\",\"scope\":[\"meta.return-type\",\"support.class\",\"support.type\",\"entity.name.type\",\"entity.name.namespace\",\"entity.other.attribute\",\"entity.name.scope-resolution\",\"entity.name.class\",\"storage.type.numeric.go\",\"storage.type.byte.go\",\"storage.type.boolean.go\",\"storage.type.string.go\",\"storage.type.uintptr.go\",\"storage.type.error.go\",\"storage.type.rune.go\",\"storage.type.cs\",\"storage.type.generic.cs\",\"storage.type.modifier.cs\",\"storage.type.variable.cs\",\"storage.type.annotation.java\",\"storage.type.generic.java\",\"storage.type.java\",\"storage.type.object.array.java\",\"storage.type.primitive.array.java\",\"storage.type.primitive.java\",\"storage.type.token.java\",\"storage.type.groovy\",\"storage.type.annotation.groovy\",\"storage.type.parameters.groovy\",\"storage.type.generic.groovy\",\"storage.type.object.array.groovy\",\"storage.type.primitive.array.groovy\",\"storage.type.primitive.groovy\"],\"settings\":{\"foreground\":\"#4EC9B0\"}},{\"name\":\"Types declaration and references, TS grammar specific\",\"scope\":[\"meta.type.cast.expr\",\"meta.type.new.expr\",\"support.constant.math\",\"support.constant.dom\",\"support.constant.json\",\"entity.other.inherited-class\"],\"settings\":{\"foreground\":\"#4EC9B0\"}},{\"name\":\"Control flow / Special keywords\",\"scope\":[\"keyword.control\",\"source.cpp keyword.operator.new\",\"keyword.operator.delete\",\"keyword.other.using\",\"keyword.other.operator\",\"entity.name.operator\"],\"settings\":{\"foreground\":\"#C586C0\"}},{\"name\":\"Variable and parameter name\",\"scope\":[\"variable\",\"meta.definition.variable.name\",\"support.variable\",\"entity.name.variable\"],\"settings\":{\"foreground\":\"#9CDCFE\"}},{\"name\":\"Object keys, TS grammar specific\",\"scope\":[\"meta.object-literal.key\"],\"settings\":{\"foreground\":\"#9CDCFE\"}},{\"name\":\"CSS property value\",\"scope\":[\"support.constant.property-value\",\"support.constant.font-name\",\"support.constant.media-type\",\"support.constant.media\",\"constant.other.color.rgb-value\",\"constant.other.rgb-value\",\"support.constant.color\"],\"settings\":{\"foreground\":\"#CE9178\"}},{\"name\":\"Regular expression groups\",\"scope\":[\"punctuation.definition.group.regexp\",\"punctuation.definition.group.assertion.regexp\",\"punctuation.definition.character-class.regexp\",\"punctuation.character.set.begin.regexp\",\"punctuation.character.set.end.regexp\",\"keyword.operator.negation.regexp\",\"support.other.parenthesis.regexp\"],\"settings\":{\"foreground\":\"#CE9178\"}},{\"scope\":[\"constant.character.character-class.regexp\",\"constant.other.character-class.set.regexp\",\"constant.other.character-class.regexp\",\"constant.character.set.regexp\"],\"settings\":{\"foreground\":\"#d16969\"}},{\"scope\":[\"keyword.operator.or.regexp\",\"keyword.control.anchor.regexp\"],\"settings\":{\"foreground\":\"#DCDCAA\"}},{\"scope\":\"keyword.operator.quantifier.regexp\",\"settings\":{\"foreground\":\"#d7ba7d\"}},{\"scope\":\"constant.character\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"constant.character.escape\",\"settings\":{\"foreground\":\"#d7ba7d\"}},{\"scope\":\"entity.name.label\",\"settings\":{\"foreground\":\"#C8C8C8\"}}]}");

/***/ }),

/***/ "./node_modules/@theia/monaco/data/monaco-themes/vscode/dark_theia.json":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/monaco/data/monaco-themes/vscode/dark_theia.json ***!
  \******************************************************************************/
/*! exports provided: $schema, name, include, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"vscode://schemas/color-theme\",\"name\":\"Dark (Theia)\",\"include\":\"./dark_plus.json\"}");

/***/ }),

/***/ "./node_modules/@theia/monaco/data/monaco-themes/vscode/dark_vs.json":
/*!***************************************************************************!*\
  !*** ./node_modules/@theia/monaco/data/monaco-themes/vscode/dark_vs.json ***!
  \***************************************************************************/
/*! exports provided: $schema, name, include, tokenColors, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"vscode://schemas/color-theme\",\"name\":\"Dark (Visual Studio)\",\"include\":\"./dark_defaults.json\",\"tokenColors\":[{\"scope\":[\"meta.embedded\",\"source.groovy.embedded\"],\"settings\":{\"foreground\":\"#D4D4D4\"}},{\"scope\":\"emphasis\",\"settings\":{\"fontStyle\":\"italic\"}},{\"scope\":\"strong\",\"settings\":{\"fontStyle\":\"bold\"}},{\"scope\":\"header\",\"settings\":{\"foreground\":\"#000080\"}},{\"scope\":\"comment\",\"settings\":{\"foreground\":\"#6A9955\"}},{\"scope\":\"constant.language\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":[\"constant.numeric\",\"entity.name.operator.custom-literal.number\",\"variable.other.enummember\",\"keyword.operator.plus.exponent\",\"keyword.operator.minus.exponent\"],\"settings\":{\"foreground\":\"#b5cea8\"}},{\"scope\":\"constant.regexp\",\"settings\":{\"foreground\":\"#646695\"}},{\"scope\":\"entity.name.tag\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"entity.name.tag.css\",\"settings\":{\"foreground\":\"#d7ba7d\"}},{\"scope\":\"entity.other.attribute-name\",\"settings\":{\"foreground\":\"#9cdcfe\"}},{\"scope\":[\"entity.other.attribute-name.class.css\",\"entity.other.attribute-name.class.mixin.css\",\"entity.other.attribute-name.id.css\",\"entity.other.attribute-name.parent-selector.css\",\"entity.other.attribute-name.pseudo-class.css\",\"entity.other.attribute-name.pseudo-element.css\",\"source.css.less entity.other.attribute-name.id\",\"entity.other.attribute-name.attribute.scss\",\"entity.other.attribute-name.scss\"],\"settings\":{\"foreground\":\"#d7ba7d\"}},{\"scope\":\"invalid\",\"settings\":{\"foreground\":\"#f44747\"}},{\"scope\":\"markup.underline\",\"settings\":{\"fontStyle\":\"underline\"}},{\"scope\":\"markup.bold\",\"settings\":{\"fontStyle\":\"bold\",\"foreground\":\"#569cd6\"}},{\"scope\":\"markup.heading\",\"settings\":{\"fontStyle\":\"bold\",\"foreground\":\"#569cd6\"}},{\"scope\":\"markup.italic\",\"settings\":{\"fontStyle\":\"italic\"}},{\"scope\":\"markup.inserted\",\"settings\":{\"foreground\":\"#b5cea8\"}},{\"scope\":\"markup.deleted\",\"settings\":{\"foreground\":\"#ce9178\"}},{\"scope\":\"markup.changed\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"punctuation.definition.quote.begin.markdown\",\"settings\":{\"foreground\":\"#6A9955\"}},{\"scope\":\"punctuation.definition.list.begin.markdown\",\"settings\":{\"foreground\":\"#6796e6\"}},{\"scope\":\"markup.inline.raw\",\"settings\":{\"foreground\":\"#ce9178\"}},{\"name\":\"brackets of XML/HTML tags\",\"scope\":\"punctuation.definition.tag\",\"settings\":{\"foreground\":\"#808080\"}},{\"scope\":[\"meta.preprocessor\",\"entity.name.function.preprocessor\"],\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"meta.preprocessor.string\",\"settings\":{\"foreground\":\"#ce9178\"}},{\"scope\":\"meta.preprocessor.numeric\",\"settings\":{\"foreground\":\"#b5cea8\"}},{\"scope\":\"meta.structure.dictionary.key.python\",\"settings\":{\"foreground\":\"#9cdcfe\"}},{\"scope\":\"meta.diff.header\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"storage\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"storage.type\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":[\"storage.modifier\",\"keyword.operator.noexcept\"],\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":[\"string\",\"entity.name.operator.custom-literal.string\",\"meta.embedded.assembly\"],\"settings\":{\"foreground\":\"#ce9178\"}},{\"scope\":\"string.tag\",\"settings\":{\"foreground\":\"#ce9178\"}},{\"scope\":\"string.value\",\"settings\":{\"foreground\":\"#ce9178\"}},{\"scope\":\"string.regexp\",\"settings\":{\"foreground\":\"#d16969\"}},{\"name\":\"String interpolation\",\"scope\":[\"punctuation.definition.template-expression.begin\",\"punctuation.definition.template-expression.end\",\"punctuation.section.embedded\"],\"settings\":{\"foreground\":\"#569cd6\"}},{\"name\":\"Reset JavaScript string interpolation expression\",\"scope\":[\"meta.template.expression\"],\"settings\":{\"foreground\":\"#d4d4d4\"}},{\"scope\":[\"support.type.vendored.property-name\",\"support.type.property-name\",\"variable.css\",\"variable.scss\",\"variable.other.less\",\"source.coffee.embedded\"],\"settings\":{\"foreground\":\"#9cdcfe\"}},{\"scope\":\"keyword\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"keyword.control\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"keyword.operator\",\"settings\":{\"foreground\":\"#d4d4d4\"}},{\"scope\":[\"keyword.operator.new\",\"keyword.operator.expression\",\"keyword.operator.cast\",\"keyword.operator.sizeof\",\"keyword.operator.alignof\",\"keyword.operator.typeid\",\"keyword.operator.alignas\",\"keyword.operator.instanceof\",\"keyword.operator.logical.python\",\"keyword.operator.wordlike\"],\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"keyword.other.unit\",\"settings\":{\"foreground\":\"#b5cea8\"}},{\"scope\":[\"punctuation.section.embedded.begin.php\",\"punctuation.section.embedded.end.php\"],\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"support.function.git-rebase\",\"settings\":{\"foreground\":\"#9cdcfe\"}},{\"scope\":\"constant.sha.git-rebase\",\"settings\":{\"foreground\":\"#b5cea8\"}},{\"name\":\"coloring of the Java import and package identifiers\",\"scope\":[\"storage.modifier.import.java\",\"variable.language.wildcard.java\",\"storage.modifier.package.java\"],\"settings\":{\"foreground\":\"#d4d4d4\"}},{\"name\":\"this.self\",\"scope\":\"variable.language\",\"settings\":{\"foreground\":\"#569cd6\"}}]}");

/***/ }),

/***/ "./node_modules/@theia/monaco/data/monaco-themes/vscode/hc_black.json":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/monaco/data/monaco-themes/vscode/hc_black.json ***!
  \****************************************************************************/
/*! exports provided: $schema, name, include, colors, tokenColors, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"vscode://schemas/color-theme\",\"name\":\"Dark High Contrast\",\"include\":\"./hc_black_defaults.json\",\"colors\":{\"selection.background\":\"#008000\",\"editor.selectionBackground\":\"#FFFFFF\",\"statusBarItem.remoteBackground\":\"#00000000\"},\"tokenColors\":[{\"name\":\"Function declarations\",\"scope\":[\"entity.name.function\",\"support.function\",\"support.constant.handlebars\",\"source.powershell variable.other.member\"],\"settings\":{\"foreground\":\"#DCDCAA\"}},{\"name\":\"Types declaration and references\",\"scope\":[\"meta.return-type\",\"support.class\",\"support.type\",\"entity.name.type\",\"entity.name.namespace\",\"entity.name.scope-resolution\",\"entity.name.class\",\"storage.type.cs\",\"storage.type.generic.cs\",\"storage.type.modifier.cs\",\"storage.type.variable.cs\",\"storage.type.annotation.java\",\"storage.type.generic.java\",\"storage.type.java\",\"storage.type.object.array.java\",\"storage.type.primitive.array.java\",\"storage.type.primitive.java\",\"storage.type.token.java\",\"storage.type.groovy\",\"storage.type.annotation.groovy\",\"storage.type.parameters.groovy\",\"storage.type.generic.groovy\",\"storage.type.object.array.groovy\",\"storage.type.primitive.array.groovy\",\"storage.type.primitive.groovy\"],\"settings\":{\"foreground\":\"#4EC9B0\"}},{\"name\":\"Types declaration and references, TS grammar specific\",\"scope\":[\"meta.type.cast.expr\",\"meta.type.new.expr\",\"support.constant.math\",\"support.constant.dom\",\"support.constant.json\",\"entity.other.inherited-class\"],\"settings\":{\"foreground\":\"#4EC9B0\"}},{\"name\":\"Control flow / Special keywords\",\"scope\":[\"keyword.control\",\"source.cpp keyword.operator.new\",\"source.cpp keyword.operator.delete\",\"keyword.other.using\",\"keyword.other.operator\"],\"settings\":{\"foreground\":\"#C586C0\"}},{\"name\":\"Variable and parameter name\",\"scope\":[\"variable\",\"meta.definition.variable.name\",\"support.variable\"],\"settings\":{\"foreground\":\"#9CDCFE\"}},{\"name\":\"Object keys, TS grammar specific\",\"scope\":[\"meta.object-literal.key\"],\"settings\":{\"foreground\":\"#9CDCFE\"}},{\"name\":\"CSS property value\",\"scope\":[\"support.constant.property-value\",\"support.constant.font-name\",\"support.constant.media-type\",\"support.constant.media\",\"constant.other.color.rgb-value\",\"constant.other.rgb-value\",\"support.constant.color\"],\"settings\":{\"foreground\":\"#CE9178\"}},{\"name\":\"HC Search Editor context line override\",\"scope\":\"meta.resultLinePrefix.contextLinePrefix.search\",\"settings\":{\"foreground\":\"#CBEDCB\"}}]}");

/***/ }),

/***/ "./node_modules/@theia/monaco/data/monaco-themes/vscode/hc_black_defaults.json":
/*!*************************************************************************************!*\
  !*** ./node_modules/@theia/monaco/data/monaco-themes/vscode/hc_black_defaults.json ***!
  \*************************************************************************************/
/*! exports provided: $schema, name, colors, settings, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"vscode://schemas/color-theme\",\"name\":\"High Contrast Default Colors\",\"colors\":{\"editor.background\":\"#000000\",\"editor.foreground\":\"#FFFFFF\",\"editorIndentGuide.background\":\"#FFFFFF\",\"editorIndentGuide.activeBackground\":\"#FFFFFF\",\"statusBarItem.remoteBackground\":\"#00000000\",\"sideBarTitle.foreground\":\"#FFFFFF\"},\"settings\":[{\"settings\":{\"foreground\":\"#FFFFFF\",\"background\":\"#000000\"}},{\"scope\":[\"meta.embedded\",\"source.groovy.embedded\"],\"settings\":{\"foreground\":\"#FFFFFF\",\"background\":\"#000000\"}},{\"scope\":\"emphasis\",\"settings\":{\"fontStyle\":\"italic\"}},{\"scope\":\"strong\",\"settings\":{\"fontStyle\":\"bold\"}},{\"scope\":\"meta.diff.header\",\"settings\":{\"foreground\":\"#000080\"}},{\"scope\":\"comment\",\"settings\":{\"foreground\":\"#7ca668\"}},{\"scope\":\"constant.language\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":[\"constant.numeric\",\"constant.other.color.rgb-value\",\"constant.other.rgb-value\",\"support.constant.color\"],\"settings\":{\"foreground\":\"#b5cea8\"}},{\"scope\":\"constant.regexp\",\"settings\":{\"foreground\":\"#b46695\"}},{\"scope\":\"constant.character\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"entity.name.tag\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"entity.name.tag.css\",\"settings\":{\"foreground\":\"#d7ba7d\"}},{\"scope\":\"entity.other.attribute-name\",\"settings\":{\"foreground\":\"#9cdcfe\"}},{\"scope\":[\"entity.other.attribute-name.class.css\",\"entity.other.attribute-name.class.mixin.css\",\"entity.other.attribute-name.id.css\",\"entity.other.attribute-name.parent-selector.css\",\"entity.other.attribute-name.pseudo-class.css\",\"entity.other.attribute-name.pseudo-element.css\",\"source.css.less entity.other.attribute-name.id\",\"entity.other.attribute-name.attribute.scss\",\"entity.other.attribute-name.scss\"],\"settings\":{\"foreground\":\"#d7ba7d\"}},{\"scope\":\"invalid\",\"settings\":{\"foreground\":\"#f44747\"}},{\"scope\":\"markup.underline\",\"settings\":{\"fontStyle\":\"underline\"}},{\"scope\":\"markup.bold\",\"settings\":{\"fontStyle\":\"bold\"}},{\"scope\":\"markup.heading\",\"settings\":{\"foreground\":\"#6796e6\"}},{\"scope\":\"markup.italic\",\"settings\":{\"fontStyle\":\"italic\"}},{\"scope\":\"markup.inserted\",\"settings\":{\"foreground\":\"#b5cea8\"}},{\"scope\":\"markup.deleted\",\"settings\":{\"foreground\":\"#ce9178\"}},{\"scope\":\"markup.changed\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"name\":\"brackets of XML/HTML tags\",\"scope\":[\"punctuation.definition.tag\"],\"settings\":{\"foreground\":\"#808080\"}},{\"scope\":\"meta.preprocessor\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"meta.preprocessor.string\",\"settings\":{\"foreground\":\"#ce9178\"}},{\"scope\":\"meta.preprocessor.numeric\",\"settings\":{\"foreground\":\"#b5cea8\"}},{\"scope\":\"meta.structure.dictionary.key.python\",\"settings\":{\"foreground\":\"#9cdcfe\"}},{\"scope\":\"storage\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"storage.type\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"storage.modifier\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"string\",\"settings\":{\"foreground\":\"#ce9178\"}},{\"scope\":\"string.tag\",\"settings\":{\"foreground\":\"#ce9178\"}},{\"scope\":\"string.value\",\"settings\":{\"foreground\":\"#ce9178\"}},{\"scope\":\"string.regexp\",\"settings\":{\"foreground\":\"#d16969\"}},{\"name\":\"String interpolation\",\"scope\":[\"punctuation.definition.template-expression.begin\",\"punctuation.definition.template-expression.end\",\"punctuation.section.embedded\"],\"settings\":{\"foreground\":\"#569cd6\"}},{\"name\":\"Reset JavaScript string interpolation expression\",\"scope\":[\"meta.template.expression\"],\"settings\":{\"foreground\":\"#ffffff\"}},{\"scope\":[\"support.type.vendored.property-name\",\"support.type.property-name\",\"variable.css\",\"variable.scss\",\"variable.other.less\",\"source.coffee.embedded\"],\"settings\":{\"foreground\":\"#d4d4d4\"}},{\"scope\":\"keyword\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"keyword.control\",\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"keyword.operator\",\"settings\":{\"foreground\":\"#d4d4d4\"}},{\"scope\":[\"keyword.operator.new\",\"keyword.operator.expression\",\"keyword.operator.cast\",\"keyword.operator.sizeof\",\"keyword.operator.logical.python\"],\"settings\":{\"foreground\":\"#569cd6\"}},{\"scope\":\"keyword.other.unit\",\"settings\":{\"foreground\":\"#b5cea8\"}},{\"scope\":\"support.function.git-rebase\",\"settings\":{\"foreground\":\"#d4d4d4\"}},{\"scope\":\"constant.sha.git-rebase\",\"settings\":{\"foreground\":\"#b5cea8\"}},{\"name\":\"coloring of the Java import and package identifiers\",\"scope\":[\"storage.modifier.import.java\",\"variable.language.wildcard.java\",\"storage.modifier.package.java\"],\"settings\":{\"foreground\":\"#d4d4d4\"}},{\"name\":\"coloring of the TS this\",\"scope\":\"variable.language.this\",\"settings\":{\"foreground\":\"#569cd6\"}}]}");

/***/ }),

/***/ "./node_modules/@theia/monaco/data/monaco-themes/vscode/hc_theia.json":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/monaco/data/monaco-themes/vscode/hc_theia.json ***!
  \****************************************************************************/
/*! exports provided: $schema, name, include, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"vscode://schemas/color-theme\",\"name\":\"Dark High Contrast (Theia)\",\"include\":\"./hc_black.json\"}");

/***/ }),

/***/ "./node_modules/@theia/monaco/data/monaco-themes/vscode/light_defaults.json":
/*!**********************************************************************************!*\
  !*** ./node_modules/@theia/monaco/data/monaco-themes/vscode/light_defaults.json ***!
  \**********************************************************************************/
/*! exports provided: $schema, name, colors, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"vscode://schemas/color-theme\",\"name\":\"Light Default Colors\",\"colors\":{\"editor.background\":\"#FFFFFF\",\"editor.foreground\":\"#000000\",\"editor.inactiveSelectionBackground\":\"#E5EBF1\",\"editorIndentGuide.background\":\"#D3D3D3\",\"editorIndentGuide.activeBackground\":\"#939393\",\"editor.selectionHighlightBackground\":\"#ADD6FF80\",\"editorSuggestWidget.background\":\"#F3F3F3\",\"activityBarBadge.background\":\"#007ACC\",\"sideBarTitle.foreground\":\"#6F6F6F\",\"list.hoverBackground\":\"#E8E8E8\",\"input.placeholderForeground\":\"#767676\",\"settings.textInputBorder\":\"#CECECE\",\"settings.numberInputBorder\":\"#CECECE\",\"statusBarItem.remoteForeground\":\"#FFF\",\"statusBarItem.remoteBackground\":\"#16825D\"}}");

/***/ }),

/***/ "./node_modules/@theia/monaco/data/monaco-themes/vscode/light_plus.json":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/monaco/data/monaco-themes/vscode/light_plus.json ***!
  \******************************************************************************/
/*! exports provided: $schema, name, include, tokenColors, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"vscode://schemas/color-theme\",\"name\":\"Light+ (default light)\",\"include\":\"./light_vs.json\",\"tokenColors\":[{\"name\":\"Function declarations\",\"scope\":[\"entity.name.function\",\"support.function\",\"support.constant.handlebars\",\"source.powershell variable.other.member\",\"entity.name.operator.custom-literal\"],\"settings\":{\"foreground\":\"#795E26\"}},{\"name\":\"Types declaration and references\",\"scope\":[\"meta.return-type\",\"support.class\",\"support.type\",\"entity.name.type\",\"entity.name.namespace\",\"entity.other.attribute\",\"entity.name.scope-resolution\",\"entity.name.class\",\"storage.type.numeric.go\",\"storage.type.byte.go\",\"storage.type.boolean.go\",\"storage.type.string.go\",\"storage.type.uintptr.go\",\"storage.type.error.go\",\"storage.type.rune.go\",\"storage.type.cs\",\"storage.type.generic.cs\",\"storage.type.modifier.cs\",\"storage.type.variable.cs\",\"storage.type.annotation.java\",\"storage.type.generic.java\",\"storage.type.java\",\"storage.type.object.array.java\",\"storage.type.primitive.array.java\",\"storage.type.primitive.java\",\"storage.type.token.java\",\"storage.type.groovy\",\"storage.type.annotation.groovy\",\"storage.type.parameters.groovy\",\"storage.type.generic.groovy\",\"storage.type.object.array.groovy\",\"storage.type.primitive.array.groovy\",\"storage.type.primitive.groovy\"],\"settings\":{\"foreground\":\"#267f99\"}},{\"name\":\"Types declaration and references, TS grammar specific\",\"scope\":[\"meta.type.cast.expr\",\"meta.type.new.expr\",\"support.constant.math\",\"support.constant.dom\",\"support.constant.json\",\"entity.other.inherited-class\"],\"settings\":{\"foreground\":\"#267f99\"}},{\"name\":\"Control flow / Special keywords\",\"scope\":[\"keyword.control\",\"source.cpp keyword.operator.new\",\"source.cpp keyword.operator.delete\",\"keyword.other.using\",\"keyword.other.operator\",\"entity.name.operator\"],\"settings\":{\"foreground\":\"#AF00DB\"}},{\"name\":\"Variable and parameter name\",\"scope\":[\"variable\",\"meta.definition.variable.name\",\"support.variable\",\"entity.name.variable\"],\"settings\":{\"foreground\":\"#001080\"}},{\"name\":\"Object keys, TS grammar specific\",\"scope\":[\"meta.object-literal.key\"],\"settings\":{\"foreground\":\"#001080\"}},{\"name\":\"CSS property value\",\"scope\":[\"support.constant.property-value\",\"support.constant.font-name\",\"support.constant.media-type\",\"support.constant.media\",\"constant.other.color.rgb-value\",\"constant.other.rgb-value\",\"support.constant.color\"],\"settings\":{\"foreground\":\"#0451a5\"}},{\"name\":\"Regular expression groups\",\"scope\":[\"punctuation.definition.group.regexp\",\"punctuation.definition.group.assertion.regexp\",\"punctuation.definition.character-class.regexp\",\"punctuation.character.set.begin.regexp\",\"punctuation.character.set.end.regexp\",\"keyword.operator.negation.regexp\",\"support.other.parenthesis.regexp\"],\"settings\":{\"foreground\":\"#d16969\"}},{\"scope\":[\"constant.character.character-class.regexp\",\"constant.other.character-class.set.regexp\",\"constant.other.character-class.regexp\",\"constant.character.set.regexp\"],\"settings\":{\"foreground\":\"#811f3f\"}},{\"scope\":\"keyword.operator.quantifier.regexp\",\"settings\":{\"foreground\":\"#000000\"}},{\"scope\":[\"keyword.operator.or.regexp\",\"keyword.control.anchor.regexp\"],\"settings\":{\"foreground\":\"#ff0000\"}},{\"scope\":\"constant.character\",\"settings\":{\"foreground\":\"#0000ff\"}},{\"scope\":\"constant.character.escape\",\"settings\":{\"foreground\":\"#ff0000\"}},{\"scope\":\"entity.name.label\",\"settings\":{\"foreground\":\"#000000\"}}]}");

/***/ }),

/***/ "./node_modules/@theia/monaco/data/monaco-themes/vscode/light_theia.json":
/*!*******************************************************************************!*\
  !*** ./node_modules/@theia/monaco/data/monaco-themes/vscode/light_theia.json ***!
  \*******************************************************************************/
/*! exports provided: $schema, name, include, colors, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"vscode://schemas/color-theme\",\"name\":\"Light (Theia)\",\"include\":\"./light_plus.json\",\"colors\":{\"activityBar.background\":\"#ececec\",\"activityBar.activeBorder\":\"#000000\",\"activityBar.foreground\":\"#000000\"}}");

/***/ }),

/***/ "./node_modules/@theia/monaco/data/monaco-themes/vscode/light_vs.json":
/*!****************************************************************************!*\
  !*** ./node_modules/@theia/monaco/data/monaco-themes/vscode/light_vs.json ***!
  \****************************************************************************/
/*! exports provided: $schema, name, include, tokenColors, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"$schema\":\"vscode://schemas/color-theme\",\"name\":\"Light (Visual Studio)\",\"include\":\"./light_defaults.json\",\"tokenColors\":[{\"scope\":[\"meta.embedded\",\"source.groovy.embedded\"],\"settings\":{\"foreground\":\"#000000ff\"}},{\"scope\":\"emphasis\",\"settings\":{\"fontStyle\":\"italic\"}},{\"scope\":\"strong\",\"settings\":{\"fontStyle\":\"bold\"}},{\"scope\":\"meta.diff.header\",\"settings\":{\"foreground\":\"#000080\"}},{\"scope\":\"comment\",\"settings\":{\"foreground\":\"#008000\"}},{\"scope\":\"constant.language\",\"settings\":{\"foreground\":\"#0000ff\"}},{\"scope\":[\"constant.numeric\",\"entity.name.operator.custom-literal.number\",\"variable.other.enummember\",\"keyword.operator.plus.exponent\",\"keyword.operator.minus.exponent\"],\"settings\":{\"foreground\":\"#09885a\"}},{\"scope\":\"constant.regexp\",\"settings\":{\"foreground\":\"#811f3f\"}},{\"name\":\"css tags in selectors, xml tags\",\"scope\":\"entity.name.tag\",\"settings\":{\"foreground\":\"#800000\"}},{\"scope\":\"entity.name.selector\",\"settings\":{\"foreground\":\"#800000\"}},{\"scope\":\"entity.other.attribute-name\",\"settings\":{\"foreground\":\"#ff0000\"}},{\"scope\":[\"entity.other.attribute-name.class.css\",\"entity.other.attribute-name.class.mixin.css\",\"entity.other.attribute-name.id.css\",\"entity.other.attribute-name.parent-selector.css\",\"entity.other.attribute-name.pseudo-class.css\",\"entity.other.attribute-name.pseudo-element.css\",\"source.css.less entity.other.attribute-name.id\",\"entity.other.attribute-name.attribute.scss\",\"entity.other.attribute-name.scss\"],\"settings\":{\"foreground\":\"#800000\"}},{\"scope\":\"invalid\",\"settings\":{\"foreground\":\"#cd3131\"}},{\"scope\":\"markup.underline\",\"settings\":{\"fontStyle\":\"underline\"}},{\"scope\":\"markup.bold\",\"settings\":{\"fontStyle\":\"bold\",\"foreground\":\"#000080\"}},{\"scope\":\"markup.heading\",\"settings\":{\"fontStyle\":\"bold\",\"foreground\":\"#800000\"}},{\"scope\":\"markup.italic\",\"settings\":{\"fontStyle\":\"italic\"}},{\"scope\":\"markup.inserted\",\"settings\":{\"foreground\":\"#09885a\"}},{\"scope\":\"markup.deleted\",\"settings\":{\"foreground\":\"#a31515\"}},{\"scope\":\"markup.changed\",\"settings\":{\"foreground\":\"#0451a5\"}},{\"scope\":[\"punctuation.definition.quote.begin.markdown\",\"punctuation.definition.list.begin.markdown\"],\"settings\":{\"foreground\":\"#0451a5\"}},{\"scope\":\"markup.inline.raw\",\"settings\":{\"foreground\":\"#800000\"}},{\"name\":\"brackets of XML/HTML tags\",\"scope\":\"punctuation.definition.tag\",\"settings\":{\"foreground\":\"#800000\"}},{\"scope\":[\"meta.preprocessor\",\"entity.name.function.preprocessor\"],\"settings\":{\"foreground\":\"#0000ff\"}},{\"scope\":\"meta.preprocessor.string\",\"settings\":{\"foreground\":\"#a31515\"}},{\"scope\":\"meta.preprocessor.numeric\",\"settings\":{\"foreground\":\"#09885a\"}},{\"scope\":\"meta.structure.dictionary.key.python\",\"settings\":{\"foreground\":\"#0451a5\"}},{\"scope\":\"storage\",\"settings\":{\"foreground\":\"#0000ff\"}},{\"scope\":\"storage.type\",\"settings\":{\"foreground\":\"#0000ff\"}},{\"scope\":[\"storage.modifier\",\"keyword.operator.noexcept\"],\"settings\":{\"foreground\":\"#0000ff\"}},{\"scope\":[\"string\",\"entity.name.operator.custom-literal.string\",\"meta.embedded.assembly\"],\"settings\":{\"foreground\":\"#a31515\"}},{\"scope\":[\"string.comment.buffered.block.pug\",\"string.quoted.pug\",\"string.interpolated.pug\",\"string.unquoted.plain.in.yaml\",\"string.unquoted.plain.out.yaml\",\"string.unquoted.block.yaml\",\"string.quoted.single.yaml\",\"string.quoted.double.xml\",\"string.quoted.single.xml\",\"string.unquoted.cdata.xml\",\"string.quoted.double.html\",\"string.quoted.single.html\",\"string.unquoted.html\",\"string.quoted.single.handlebars\",\"string.quoted.double.handlebars\"],\"settings\":{\"foreground\":\"#0000ff\"}},{\"scope\":\"string.regexp\",\"settings\":{\"foreground\":\"#811f3f\"}},{\"name\":\"String interpolation\",\"scope\":[\"punctuation.definition.template-expression.begin\",\"punctuation.definition.template-expression.end\",\"punctuation.section.embedded\"],\"settings\":{\"foreground\":\"#0000ff\"}},{\"name\":\"Reset JavaScript string interpolation expression\",\"scope\":[\"meta.template.expression\"],\"settings\":{\"foreground\":\"#000000\"}},{\"scope\":[\"support.constant.property-value\",\"support.constant.font-name\",\"support.constant.media-type\",\"support.constant.media\",\"constant.other.color.rgb-value\",\"constant.other.rgb-value\",\"support.constant.color\"],\"settings\":{\"foreground\":\"#0451a5\"}},{\"scope\":[\"support.type.vendored.property-name\",\"support.type.property-name\",\"variable.css\",\"variable.scss\",\"variable.other.less\",\"source.coffee.embedded\"],\"settings\":{\"foreground\":\"#ff0000\"}},{\"scope\":[\"support.type.property-name.json\"],\"settings\":{\"foreground\":\"#0451a5\"}},{\"scope\":\"keyword\",\"settings\":{\"foreground\":\"#0000ff\"}},{\"scope\":\"keyword.control\",\"settings\":{\"foreground\":\"#0000ff\"}},{\"scope\":\"keyword.operator\",\"settings\":{\"foreground\":\"#000000\"}},{\"scope\":[\"keyword.operator.new\",\"keyword.operator.expression\",\"keyword.operator.cast\",\"keyword.operator.sizeof\",\"keyword.operator.alignof\",\"keyword.operator.typeid\",\"keyword.operator.alignas\",\"keyword.operator.instanceof\",\"keyword.operator.logical.python\",\"keyword.operator.wordlike\"],\"settings\":{\"foreground\":\"#0000ff\"}},{\"scope\":\"keyword.other.unit\",\"settings\":{\"foreground\":\"#09885a\"}},{\"scope\":[\"punctuation.section.embedded.begin.php\",\"punctuation.section.embedded.end.php\"],\"settings\":{\"foreground\":\"#800000\"}},{\"scope\":\"support.function.git-rebase\",\"settings\":{\"foreground\":\"#0451a5\"}},{\"scope\":\"constant.sha.git-rebase\",\"settings\":{\"foreground\":\"#09885a\"}},{\"name\":\"coloring of the Java import and package identifiers\",\"scope\":[\"storage.modifier.import.java\",\"variable.language.wildcard.java\",\"storage.modifier.package.java\"],\"settings\":{\"foreground\":\"#000000\"}},{\"name\":\"this.self\",\"scope\":\"variable.language\",\"settings\":{\"foreground\":\"#0000ff\"}}]}");

/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-indexed-db.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-indexed-db.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
exports.deleteTheme = exports.putTheme = exports.getThemes = exports.MonacoThemeState = exports.monacoDB = void 0;
var idb = __webpack_require__(/*! idb */ "./node_modules/idb/build/esm/index.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var _monacoDB;
if ('indexedDB' in window) {
    _monacoDB = idb.openDB('theia-monaco', 1, {
        upgrade: function (db) {
            if (!db.objectStoreNames.contains('themes')) {
                db.createObjectStore('themes', { keyPath: 'id' });
            }
        }
    });
}
exports.monacoDB = _monacoDB;
var MonacoThemeState;
(function (MonacoThemeState) {
    function is(state) {
        return !!state && typeof state === 'object' && 'id' in state && 'label' in state && 'uiTheme' in state && 'data' in state;
    }
    MonacoThemeState.is = is;
})(MonacoThemeState = exports.MonacoThemeState || (exports.MonacoThemeState = {}));
function getThemes() {
    return __awaiter(this, void 0, void 0, function () {
        var db, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!exports.monacoDB) {
                        return [2 /*return*/, []];
                    }
                    return [4 /*yield*/, exports.monacoDB];
                case 1:
                    db = _a.sent();
                    return [4 /*yield*/, db.transaction('themes', 'readonly').objectStore('themes').getAll()];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result.filter(MonacoThemeState.is)];
            }
        });
    });
}
exports.getThemes = getThemes;
function putTheme(state) {
    var toDispose = new disposable_1.DisposableCollection(disposable_1.Disposable.create(function () { }));
    doPutTheme(state, toDispose);
    return toDispose;
}
exports.putTheme = putTheme;
function doPutTheme(state, toDispose) {
    return __awaiter(this, void 0, void 0, function () {
        var db, id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!exports.monacoDB) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, exports.monacoDB];
                case 1:
                    db = _a.sent();
                    if (toDispose.disposed) {
                        return [2 /*return*/];
                    }
                    id = state.id;
                    return [4 /*yield*/, db.transaction('themes', 'readwrite').objectStore('themes').put(state)];
                case 2:
                    _a.sent();
                    if (!toDispose.disposed) return [3 /*break*/, 4];
                    return [4 /*yield*/, deleteTheme(id)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
                case 4:
                    toDispose.push(disposable_1.Disposable.create(function () { return deleteTheme(id); }));
                    return [2 /*return*/];
            }
        });
    });
}
function deleteTheme(id) {
    return __awaiter(this, void 0, void 0, function () {
        var db;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!exports.monacoDB) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, exports.monacoDB];
                case 1:
                    db = _a.sent();
                    return [4 /*yield*/, db.transaction('themes', 'readwrite').objectStore('themes').delete(id)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.deleteTheme = deleteTheme;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-languages.js":
/*!********************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-languages.js ***!
  \********************************************************************/
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
exports.MonacoLanguages = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var monaco_languageclient_1 = __webpack_require__(/*! monaco-languageclient */ "./node_modules/monaco-languageclient/lib/index.js");
var problem_manager_1 = __webpack_require__(/*! @theia/markers/lib/browser/problem/problem-manager */ "./node_modules/@theia/markers/lib/browser/problem/problem-manager.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var monaco_diagnostic_collection_1 = __webpack_require__(/*! monaco-languageclient/lib/monaco-diagnostic-collection */ "./node_modules/monaco-languageclient/lib/monaco-diagnostic-collection.js");
inversify_1.decorate(inversify_1.injectable(), monaco_languageclient_1.MonacoLanguages);
inversify_1.decorate(inversify_1.inject(monaco_languageclient_1.ProtocolToMonacoConverter), monaco_languageclient_1.MonacoLanguages, 0);
inversify_1.decorate(inversify_1.inject(monaco_languageclient_1.MonacoToProtocolConverter), monaco_languageclient_1.MonacoLanguages, 1);
var MonacoLanguages = /** @class */ (function (_super) {
    __extends(MonacoLanguages, _super);
    function MonacoLanguages(// eslint-disable-next-line @typescript-eslint/indent
    p2m, m2p, problemManager) {
        var e_1, _a;
        var _this = _super.call(this, p2m, m2p) || this;
        _this.problemManager = problemManager;
        _this.workspaceSymbolProviders = [];
        _this.makers = new Map();
        try {
            for (var _b = __values(_this.problemManager.getUris()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var uri = _c.value;
                _this.updateMarkers(new uri_1.default(uri));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        _this.problemManager.onDidChangeMarkers(function (uri) { return _this.updateMarkers(uri); });
        return _this;
    }
    MonacoLanguages.prototype.updateMarkers = function (uri) {
        var e_2, _a, e_3, _b, e_4, _c;
        var uriString = uri.toString();
        var owners = new Map();
        try {
            for (var _d = __values(this.problemManager.findMarkers({ uri: uri })), _e = _d.next(); !_e.done; _e = _d.next()) {
                var marker = _e.value;
                var diagnostics = owners.get(marker.owner) || [];
                diagnostics.push(marker.data);
                owners.set(marker.owner, diagnostics);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var toClean = new Set(this.makers.keys());
        try {
            for (var owners_1 = __values(owners), owners_1_1 = owners_1.next(); !owners_1_1.done; owners_1_1 = owners_1.next()) {
                var _f = __read(owners_1_1.value, 2), owner = _f[0], diagnostics = _f[1];
                toClean.delete(owner);
                var collection = this.makers.get(owner) || new monaco_diagnostic_collection_1.MonacoDiagnosticCollection(owner, this.p2m);
                collection.set(uriString, diagnostics);
                this.makers.set(owner, collection);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (owners_1_1 && !owners_1_1.done && (_b = owners_1.return)) _b.call(owners_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        try {
            for (var toClean_1 = __values(toClean), toClean_1_1 = toClean_1.next(); !toClean_1_1.done; toClean_1_1 = toClean_1.next()) {
                var owner = toClean_1_1.value;
                var collection = this.makers.get(owner);
                if (collection) {
                    collection.set(uriString, []);
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (toClean_1_1 && !toClean_1_1.done && (_c = toClean_1.return)) _c.call(toClean_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    MonacoLanguages.prototype.createDiagnosticCollection = function (name) {
        var _this = this;
        var owner = name || 'default';
        var uris = [];
        return {
            set: function (uri, diagnostics) {
                _this.problemManager.setMarkers(new uri_1.default(uri), owner, diagnostics);
                uris.push(uri);
            },
            dispose: function () {
                var e_5, _a;
                try {
                    for (var uris_1 = __values(uris), uris_1_1 = uris_1.next(); !uris_1_1.done; uris_1_1 = uris_1.next()) {
                        var uri = uris_1_1.value;
                        _this.problemManager.setMarkers(new uri_1.default(uri), owner, []);
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (uris_1_1 && !uris_1_1.done && (_a = uris_1.return)) _a.call(uris_1);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
            }
        };
    };
    MonacoLanguages.prototype.registerWorkspaceSymbolProvider = function (provider) {
        var _this = this;
        this.workspaceSymbolProviders.push(provider);
        return disposable_1.Disposable.create(function () {
            var index = _this.workspaceSymbolProviders.indexOf(provider);
            if (index !== -1) {
                _this.workspaceSymbolProviders.splice(index, 1);
            }
        });
    };
    Object.defineProperty(MonacoLanguages.prototype, "languages", {
        get: function () {
            return __spread(this.mergeLanguages(monaco.languages.getLanguages()).values());
        },
        enumerable: false,
        configurable: true
    });
    MonacoLanguages.prototype.getLanguage = function (languageId) {
        return this.mergeLanguages(monaco.languages.getLanguages().filter(function (language) { return language.id === languageId; })).get(languageId);
    };
    MonacoLanguages.prototype.mergeLanguages = function (registered) {
        var e_6, _a, e_7, _b, e_8, _c, e_9, _d;
        var languages = new Map();
        try {
            for (var registered_1 = __values(registered), registered_1_1 = registered_1.next(); !registered_1_1.done; registered_1_1 = registered_1.next()) {
                var _e = registered_1_1.value, id = _e.id, aliases = _e.aliases, extensions = _e.extensions, filenames = _e.filenames;
                var merged = languages.get(id) || {
                    id: id,
                    name: '',
                    extensions: new Set(),
                    filenames: new Set()
                };
                if (!merged.name && aliases && aliases.length) {
                    merged.name = aliases[0];
                }
                if (extensions && extensions.length) {
                    try {
                        for (var extensions_1 = (e_7 = void 0, __values(extensions)), extensions_1_1 = extensions_1.next(); !extensions_1_1.done; extensions_1_1 = extensions_1.next()) {
                            var extension = extensions_1_1.value;
                            merged.extensions.add(extension);
                        }
                    }
                    catch (e_7_1) { e_7 = { error: e_7_1 }; }
                    finally {
                        try {
                            if (extensions_1_1 && !extensions_1_1.done && (_b = extensions_1.return)) _b.call(extensions_1);
                        }
                        finally { if (e_7) throw e_7.error; }
                    }
                }
                if (filenames && filenames.length) {
                    try {
                        for (var filenames_1 = (e_8 = void 0, __values(filenames)), filenames_1_1 = filenames_1.next(); !filenames_1_1.done; filenames_1_1 = filenames_1.next()) {
                            var filename = filenames_1_1.value;
                            merged.filenames.add(filename);
                        }
                    }
                    catch (e_8_1) { e_8 = { error: e_8_1 }; }
                    finally {
                        try {
                            if (filenames_1_1 && !filenames_1_1.done && (_c = filenames_1.return)) _c.call(filenames_1);
                        }
                        finally { if (e_8) throw e_8.error; }
                    }
                }
                languages.set(id, merged);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (registered_1_1 && !registered_1_1.done && (_a = registered_1.return)) _a.call(registered_1);
            }
            finally { if (e_6) throw e_6.error; }
        }
        try {
            for (var languages_1 = __values(languages), languages_1_1 = languages_1.next(); !languages_1_1.done; languages_1_1 = languages_1.next()) {
                var _f = __read(languages_1_1.value, 2), id = _f[0], language = _f[1];
                if (!language.name) {
                    language.name = id;
                }
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (languages_1_1 && !languages_1_1.done && (_d = languages_1.return)) _d.call(languages_1);
            }
            finally { if (e_9) throw e_9.error; }
        }
        return languages;
    };
    MonacoLanguages.prototype.createSignatureHelpProvider = function (selector, provider) {
        var _this = this;
        var triggerCharacters = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            triggerCharacters[_i - 2] = arguments[_i];
        }
        var signatureHelpTriggerCharacters = __spread((provider.triggerCharacters || triggerCharacters || []));
        var signatureHelpRetriggerCharacters = __spread((provider.retriggerCharacters || []));
        return {
            signatureHelpTriggerCharacters: signatureHelpTriggerCharacters,
            signatureHelpRetriggerCharacters: signatureHelpRetriggerCharacters,
            provideSignatureHelp: function (model, position, token) { return __awaiter(_this, void 0, void 0, function () {
                var params, help;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.matchModel(selector, monaco_languageclient_1.MonacoModelIdentifier.fromModel(model))) {
                                return [2 /*return*/, undefined];
                            }
                            params = this.m2p.asTextDocumentPositionParams(model, position);
                            return [4 /*yield*/, provider.provideSignatureHelp(params, token, undefined /* not used by LC */)];
                        case 1:
                            help = _a.sent();
                            if (!help) {
                                return [2 /*return*/, undefined];
                            }
                            return [2 /*return*/, this.p2m.asSignatureHelpResult(help)];
                    }
                });
            }); }
        };
    };
    MonacoLanguages.prototype.createCodeActionProvider = function (selector, provider) {
        var _this = this;
        return {
            provideCodeActions: function (model, range, context, token) { return __awaiter(_this, void 0, void 0, function () {
                var params, actions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.matchModel(selector, monaco_languageclient_1.MonacoModelIdentifier.fromModel(model))) {
                                return [2 /*return*/, undefined];
                            }
                            params = this.m2p.asCodeActionParams(model, range, context);
                            return [4 /*yield*/, provider.provideCodeActions(params, token)];
                        case 1:
                            actions = _a.sent();
                            if (!actions) {
                                return [2 /*return*/, undefined];
                            }
                            return [2 /*return*/, this.p2m.asCodeActionList(actions)];
                    }
                });
            }); }
        };
    };
    MonacoLanguages.prototype.createCodeLensProvider = function (selector, provider) {
        var _this = this;
        return {
            provideCodeLenses: function (model, token) { return __awaiter(_this, void 0, void 0, function () {
                var params, lenses;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.matchModel(selector, monaco_languageclient_1.MonacoModelIdentifier.fromModel(model))) {
                                return [2 /*return*/, undefined];
                            }
                            params = this.m2p.asCodeLensParams(model);
                            return [4 /*yield*/, provider.provideCodeLenses(params, token)];
                        case 1:
                            lenses = _a.sent();
                            if (!lenses) {
                                return [2 /*return*/, undefined];
                            }
                            return [2 /*return*/, this.p2m.asCodeLensList(lenses)];
                    }
                });
            }); },
            resolveCodeLens: provider.resolveCodeLens ? function (model, codeLens, token) { return __awaiter(_this, void 0, void 0, function () {
                var protocolCodeLens, result, resolvedCodeLens;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.matchModel(selector, monaco_languageclient_1.MonacoModelIdentifier.fromModel(model))) {
                                return [2 /*return*/, codeLens];
                            }
                            protocolCodeLens = this.m2p.asCodeLens(codeLens);
                            return [4 /*yield*/, provider.resolveCodeLens(protocolCodeLens, token)];
                        case 1:
                            result = _a.sent();
                            if (result) {
                                resolvedCodeLens = this.p2m.asCodeLens(result);
                                Object.assign(codeLens, resolvedCodeLens);
                            }
                            return [2 /*return*/, codeLens];
                    }
                });
            }); } : (function (_, codeLens, __) { return codeLens; })
        };
    };
    MonacoLanguages = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(monaco_languageclient_1.ProtocolToMonacoConverter)),
        __param(1, inversify_1.inject(monaco_languageclient_1.MonacoToProtocolConverter)),
        __param(2, inversify_1.inject(problem_manager_1.ProblemManager)),
        __metadata("design:paramtypes", [monaco_languageclient_1.ProtocolToMonacoConverter,
            monaco_languageclient_1.MonacoToProtocolConverter,
            problem_manager_1.ProblemManager])
    ], MonacoLanguages);
    return MonacoLanguages;
}(monaco_languageclient_1.MonacoLanguages));
exports.MonacoLanguages = MonacoLanguages;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-snippet-suggest-provider.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-snippet-suggest-provider.js ***!
  \***********************************************************************************/
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
exports.MonacoSnippetSuggestion = exports.JsonSerializedSnippet = exports.MonacoSnippetSuggestProvider = void 0;
var jsoncparser = __webpack_require__(/*! jsonc-parser */ "./node_modules/jsonc-parser/lib/esm/main.js");
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var common_1 = __webpack_require__(/*! @theia/filesystem/lib/common */ "./node_modules/@theia/filesystem/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/languages/lib/browser */ "./node_modules/@theia/languages/lib/browser/index.js");
var MonacoSnippetSuggestProvider = /** @class */ (function () {
    function MonacoSnippetSuggestProvider() {
        this.snippets = new Map();
        this.pendingSnippets = new Map();
    }
    MonacoSnippetSuggestProvider_1 = MonacoSnippetSuggestProvider;
    MonacoSnippetSuggestProvider.prototype.provideCompletionItems = function (model, position, context) {
        return __awaiter(this, void 0, void 0, function () {
            var languageId, snippetsForLanguage, pos, lineOffsets, linePrefixLow, endsInWhitespace, word, availableSnippets, suggestions, _loop_1, lineOffsets_1, lineOffsets_1_1, start;
            var e_1, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // copied and modified from https://github.com/microsoft/vscode/blob/master/src/vs/workbench/contrib/snippets/browser/snippetCompletionProvider.ts
                        if (position.column >= MonacoSnippetSuggestProvider_1._maxPrefix) {
                            return [2 /*return*/, undefined];
                        }
                        if (context.triggerKind === browser_1.CompletionTriggerKind.TriggerCharacter && context.triggerCharacter === ' ') {
                            // no snippets when suggestions have been triggered by space
                            return [2 /*return*/, undefined];
                        }
                        languageId = model.getModeId();
                        return [4 /*yield*/, this.loadSnippets(languageId)];
                    case 1:
                        _b.sent();
                        snippetsForLanguage = this.snippets.get(languageId) || [];
                        pos = { lineNumber: position.lineNumber, column: 1 };
                        lineOffsets = [];
                        linePrefixLow = model.getLineContent(position.lineNumber).substr(0, position.column - 1).toLowerCase();
                        endsInWhitespace = linePrefixLow.match(/\s$/);
                        while (pos.column < position.column) {
                            word = model.getWordAtPosition(pos);
                            if (word) {
                                // at a word
                                lineOffsets.push(word.startColumn - 1);
                                pos.column = word.endColumn + 1;
                                if (word.endColumn - 1 < linePrefixLow.length && !/\s/.test(linePrefixLow[word.endColumn - 1])) {
                                    lineOffsets.push(word.endColumn - 1);
                                }
                            }
                            else if (!/\s/.test(linePrefixLow[pos.column - 1])) {
                                // at a none-whitespace character
                                lineOffsets.push(pos.column - 1);
                                pos.column += 1;
                            }
                            else {
                                // always advance!
                                pos.column += 1;
                            }
                        }
                        availableSnippets = new Set();
                        snippetsForLanguage.forEach(availableSnippets.add, availableSnippets);
                        suggestions = [];
                        _loop_1 = function (start) {
                            availableSnippets.forEach(function (snippet) {
                                if (_this.isPatternInWord(linePrefixLow, start, linePrefixLow.length, snippet.prefix.toLowerCase(), 0, snippet.prefix.length)) {
                                    suggestions.push(new MonacoSnippetSuggestion(snippet, monaco.Range.fromPositions(position.delta(0, -(linePrefixLow.length - start)), position)));
                                    availableSnippets.delete(snippet);
                                }
                            });
                        };
                        try {
                            for (lineOffsets_1 = __values(lineOffsets), lineOffsets_1_1 = lineOffsets_1.next(); !lineOffsets_1_1.done; lineOffsets_1_1 = lineOffsets_1.next()) {
                                start = lineOffsets_1_1.value;
                                _loop_1(start);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (lineOffsets_1_1 && !lineOffsets_1_1.done && (_a = lineOffsets_1.return)) _a.call(lineOffsets_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        if (endsInWhitespace || lineOffsets.length === 0) {
                            // add remaining snippets when the current prefix ends in whitespace or when no
                            // interesting positions have been found
                            availableSnippets.forEach(function (snippet) {
                                suggestions.push(new MonacoSnippetSuggestion(snippet, monaco.Range.fromPositions(position)));
                            });
                        }
                        // disambiguate suggestions with same labels
                        suggestions.sort(MonacoSnippetSuggestion.compareByLabel);
                        return [2 /*return*/, { suggestions: suggestions }];
                }
            });
        });
    };
    MonacoSnippetSuggestProvider.prototype.resolveCompletionItem = function (textModel, position, item) {
        return item instanceof MonacoSnippetSuggestion ? item.resolve() : item;
    };
    MonacoSnippetSuggestProvider.prototype.loadSnippets = function (scope) {
        return __awaiter(this, void 0, void 0, function () {
            var pending;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pending = [];
                        pending.push.apply(pending, __spread((this.pendingSnippets.get(scope) || [])));
                        pending.push.apply(pending, __spread((this.pendingSnippets.get('*') || [])));
                        if (!pending.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.all(pending)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MonacoSnippetSuggestProvider.prototype.fromURI = function (uri, options) {
        var e_2, _a;
        var toDispose = new disposable_1.DisposableCollection(disposable_1.Disposable.create(function () { }));
        var pending = this.loadURI(uri, options, toDispose);
        var language = options.language;
        var scopes = Array.isArray(language) ? language : !!language ? [language] : ['*'];
        var _loop_2 = function (scope) {
            var pendingSnippets = this_1.pendingSnippets.get(scope) || [];
            pendingSnippets.push(pending);
            this_1.pendingSnippets.set(scope, pendingSnippets);
            toDispose.push(disposable_1.Disposable.create(function () {
                var index = pendingSnippets.indexOf(pending);
                if (index !== -1) {
                    pendingSnippets.splice(index, 1);
                }
            }));
        };
        var this_1 = this;
        try {
            for (var scopes_1 = __values(scopes), scopes_1_1 = scopes_1.next(); !scopes_1_1.done; scopes_1_1 = scopes_1.next()) {
                var scope = scopes_1_1.value;
                _loop_2(scope);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (scopes_1_1 && !scopes_1_1.done && (_a = scopes_1.return)) _a.call(scopes_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return toDispose;
    };
    /**
     * should NOT throw to prevent load errors on suggest
     */
    MonacoSnippetSuggestProvider.prototype.loadURI = function (uri, options, toDispose) {
        return __awaiter(this, void 0, void 0, function () {
            var content, snippets, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.filesystem.resolveContent(uri.toString(), { encoding: 'utf-8' })];
                    case 1:
                        content = (_a.sent()).content;
                        if (toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        snippets = content && jsoncparser.parse(content, undefined, { disallowComments: false });
                        toDispose.push(this.fromJSON(snippets, options));
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        if (!common_1.FileSystemError.FileNotFound.is(e_3) && !common_1.FileSystemError.FileIsDirectory.is(e_3)) {
                            console.error(e_3);
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MonacoSnippetSuggestProvider.prototype.fromJSON = function (snippets, _a) {
        var _this = this;
        var language = _a.language, source = _a.source;
        var toDispose = new disposable_1.DisposableCollection();
        this.parseSnippets(snippets, function (name, snippet) {
            var e_4, _a;
            var prefix = snippet.prefix, body = snippet.body, description = snippet.description;
            var parsedBody = Array.isArray(body) ? body.join('\n') : body;
            var parsedPrefixes = Array.isArray(prefix) ? prefix : [prefix];
            if (typeof parsedBody !== 'string') {
                return;
            }
            var scopes = [];
            if (language) {
                if (Array.isArray(language)) {
                    scopes.push.apply(scopes, __spread(language));
                }
                else {
                    scopes.push(language);
                }
            }
            else if (typeof snippet.scope === 'string') {
                try {
                    for (var _b = __values(snippet.scope.split(',')), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var rawScope = _c.value;
                        var scope = rawScope.trim();
                        if (scope) {
                            scopes.push(scope);
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
            }
            parsedPrefixes.forEach(function (parsedPrefix) { return toDispose.push(_this.push({
                scopes: scopes,
                name: name,
                prefix: parsedPrefix,
                description: description,
                body: parsedBody,
                source: source
            })); });
        });
        return toDispose;
    };
    MonacoSnippetSuggestProvider.prototype.parseSnippets = function (snippets, accept) {
        if (typeof snippets === 'object') {
            // eslint-disable-next-line guard-for-in
            for (var name_1 in snippets) {
                var scopeOrTemplate = snippets[name_1];
                if (JsonSerializedSnippet.is(scopeOrTemplate)) {
                    accept(name_1, scopeOrTemplate);
                }
                else {
                    this.parseSnippets(scopeOrTemplate, accept);
                }
            }
        }
    };
    MonacoSnippetSuggestProvider.prototype.push = function () {
        var e_5, _a;
        var snippets = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            snippets[_i] = arguments[_i];
        }
        var toDispose = new disposable_1.DisposableCollection();
        var _loop_3 = function (snippet) {
            var e_6, _a;
            var _loop_4 = function (scope) {
                var languageSnippets = this_2.snippets.get(scope) || [];
                languageSnippets.push(snippet);
                this_2.snippets.set(scope, languageSnippets);
                toDispose.push(disposable_1.Disposable.create(function () {
                    var index = languageSnippets.indexOf(snippet);
                    if (index !== -1) {
                        languageSnippets.splice(index, 1);
                    }
                }));
            };
            try {
                for (var _b = (e_6 = void 0, __values(snippet.scopes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var scope = _c.value;
                    _loop_4(scope);
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_6) throw e_6.error; }
            }
        };
        var this_2 = this;
        try {
            for (var snippets_1 = __values(snippets), snippets_1_1 = snippets_1.next(); !snippets_1_1.done; snippets_1_1 = snippets_1.next()) {
                var snippet = snippets_1_1.value;
                _loop_3(snippet);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (snippets_1_1 && !snippets_1_1.done && (_a = snippets_1.return)) _a.call(snippets_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return toDispose;
    };
    MonacoSnippetSuggestProvider.prototype.isPatternInWord = function (patternLow, patternPos, patternLen, wordLow, wordPos, wordLen) {
        while (patternPos < patternLen && wordPos < wordLen) {
            if (patternLow[patternPos] === wordLow[wordPos]) {
                patternPos += 1;
            }
            wordPos += 1;
        }
        return patternPos === patternLen; // pattern must be exhausted
    };
    var MonacoSnippetSuggestProvider_1;
    MonacoSnippetSuggestProvider._maxPrefix = 10000;
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], MonacoSnippetSuggestProvider.prototype, "filesystem", void 0);
    MonacoSnippetSuggestProvider = MonacoSnippetSuggestProvider_1 = __decorate([
        inversify_1.injectable()
    ], MonacoSnippetSuggestProvider);
    return MonacoSnippetSuggestProvider;
}());
exports.MonacoSnippetSuggestProvider = MonacoSnippetSuggestProvider;
var JsonSerializedSnippet;
(function (JsonSerializedSnippet) {
    function is(obj) {
        return typeof obj === 'object' && 'body' in obj && 'prefix' in obj;
    }
    JsonSerializedSnippet.is = is;
})(JsonSerializedSnippet = exports.JsonSerializedSnippet || (exports.JsonSerializedSnippet = {}));
var MonacoSnippetSuggestion = /** @class */ (function () {
    function MonacoSnippetSuggestion(snippet, range) {
        this.snippet = snippet;
        this.range = range;
        this.noAutoAccept = true;
        this.kind = monaco.languages.CompletionItemKind.Snippet;
        this.insertTextRules = monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet;
        this.resolved = false;
        this.label = snippet.prefix;
        this.detail = (snippet.description || snippet.name) + " (" + snippet.source + ")";
        this.insertText = snippet.body;
        this.sortText = "z-" + snippet.prefix;
        this.range = range;
    }
    MonacoSnippetSuggestion.prototype.resolve = function () {
        if (!this.resolved) {
            var codeSnippet = new monaco.snippetParser.SnippetParser().parse(this.snippet.body).toString();
            this.documentation = { value: '```\n' + codeSnippet + '```' };
            this.resolved = true;
        }
        return this;
    };
    MonacoSnippetSuggestion.compareByLabel = function (a, b) {
        return a.label > b.label ? 1 : a.label < b.label ? -1 : 0;
    };
    return MonacoSnippetSuggestion;
}());
exports.MonacoSnippetSuggestion = MonacoSnippetSuggestion;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/monaco-theming-service.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/monaco-theming-service.js ***!
  \**************************************************************************/
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
exports.MonacoThemingService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var jsoncparser = __webpack_require__(/*! jsonc-parser */ "./node_modules/jsonc-parser/lib/esm/main.js");
var plistparser = __webpack_require__(/*! fast-plist */ "./node_modules/fast-plist/release/src/main.js");
var theming_1 = __webpack_require__(/*! @theia/core/lib/browser/theming */ "./node_modules/@theia/core/lib/browser/theming.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "./node_modules/@theia/core/lib/common/uri.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var filesystem_1 = __webpack_require__(/*! @theia/filesystem/lib/common/filesystem */ "./node_modules/@theia/filesystem/lib/common/filesystem.js");
var monaco_theme_registry_1 = __webpack_require__(/*! ./textmate/monaco-theme-registry */ "./node_modules/@theia/monaco/lib/browser/textmate/monaco-theme-registry.js");
var monaco_indexed_db_1 = __webpack_require__(/*! ./monaco-indexed-db */ "./node_modules/@theia/monaco/lib/browser/monaco-indexed-db.js");
var MonacoThemingService = /** @class */ (function () {
    function MonacoThemingService() {
    }
    MonacoThemingService_1 = MonacoThemingService;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MonacoThemingService.prototype.register = function (theme, pending) {
        if (pending === void 0) { pending = {}; }
        var toDispose = new disposable_1.DisposableCollection(disposable_1.Disposable.create(function () { }));
        this.doRegister(theme, pending, toDispose);
        return toDispose;
    };
    MonacoThemingService.prototype.doRegister = function (theme, pending, toDispose) {
        return __awaiter(this, void 0, void 0, function () {
            var includes, json, label, id, description, uiTheme, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        includes = {};
                        return [4 /*yield*/, this.loadTheme(theme.uri, includes, pending, toDispose)];
                    case 1:
                        json = _a.sent();
                        if (toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        label = theme.label || new uri_1.default(theme.uri).path.base;
                        id = theme.id, description = theme.description, uiTheme = theme.uiTheme;
                        toDispose.push(MonacoThemingService_1.register({ id: id, label: label, description: description, uiTheme: uiTheme, json: json, includes: includes }));
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error('Failed to load theme from ' + theme.uri, e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MonacoThemingService.prototype.loadTheme = function (uri, includes, pending, toDispose) {
        return __awaiter(this, void 0, void 0, function () {
            var content, themeUri, value, json, value, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.fileSystem.resolveContent(uri)];
                    case 1:
                        content = (_c.sent()).content;
                        if (toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        themeUri = new uri_1.default(uri);
                        if (themeUri.path.ext !== '.json') {
                            value = plistparser.parse(content);
                            if (value && 'settings' in value && Array.isArray(value.settings)) {
                                return [2 /*return*/, { tokenColors: value.settings }];
                            }
                            throw new Error("Problem parsing tmTheme file: " + uri + ". 'settings' is not array.");
                        }
                        json = jsoncparser.parse(content, undefined, { disallowComments: false });
                        if (!('tokenColors' in json && typeof json.tokenColors === 'string')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.doLoadTheme(themeUri, json.tokenColors, includes, pending, toDispose)];
                    case 2:
                        value = _c.sent();
                        if (toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        json.tokenColors = value.tokenColors;
                        _c.label = 3;
                    case 3:
                        if (!json.include) return [3 /*break*/, 5];
                        _a = includes;
                        _b = json.include;
                        return [4 /*yield*/, this.doLoadTheme(themeUri, json.include, includes, pending, toDispose)];
                    case 4:
                        _a[_b] = _c.sent();
                        if (toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        _c.label = 5;
                    case 5: return [2 /*return*/, json];
                }
            });
        });
    };
    /* eslint-disable @typescript-eslint/no-explicit-any */
    MonacoThemingService.prototype.doLoadTheme = function (themeUri, referencedPath, includes, pending, toDispose) {
        var referencedUri = themeUri.parent.resolve(referencedPath).toString();
        if (!pending[referencedUri]) {
            pending[referencedUri] = this.loadTheme(referencedUri, includes, pending, toDispose);
        }
        return pending[referencedUri];
    };
    /* eslint-enable @typescript-eslint/no-explicit-any */
    MonacoThemingService.init = function () {
        var _this = this;
        this.updateBodyUiTheme();
        theming_1.ThemeService.get().onThemeChange(function () { return _this.updateBodyUiTheme(); });
        this.restore();
    };
    MonacoThemingService.register = function (theme) {
        var uiTheme = theme.uiTheme || 'vs-dark';
        var label = theme.label, description = theme.description, json = theme.json, includes = theme.includes;
        var id = theme.id || label;
        var cssSelector = MonacoThemingService_1.toCssSelector(id);
        var data = monaco_theme_registry_1.MonacoThemeRegistry.SINGLETON.register(json, includes, cssSelector, uiTheme);
        return MonacoThemingService_1.doRegister({ id: id, label: label, description: description, uiTheme: uiTheme, data: data });
    };
    MonacoThemingService.updateBodyUiTheme = function () {
        this.toUpdateUiTheme.dispose();
        var type = theming_1.ThemeService.get().getCurrentTheme().type;
        var uiTheme = type === 'hc' ? 'hc-black' : type === 'light' ? 'vs' : 'vs-dark';
        document.body.classList.add(uiTheme);
        this.toUpdateUiTheme.push(disposable_1.Disposable.create(function () { return document.body.classList.remove(uiTheme); }));
    };
    MonacoThemingService.doRegister = function (state) {
        var id = state.id, label = state.label, description = state.description, uiTheme = state.uiTheme, data = state.data;
        var type = uiTheme === 'vs' ? 'light' : uiTheme === 'vs-dark' ? 'dark' : 'hc';
        var builtInTheme = uiTheme === 'vs' ? theming_1.BuiltinThemeProvider.lightCss : theming_1.BuiltinThemeProvider.darkCss;
        return new disposable_1.DisposableCollection(theming_1.ThemeService.get().register({
            type: type,
            id: id,
            label: label,
            description: description,
            editorTheme: data.name,
            activate: function () {
                builtInTheme.use();
            },
            deactivate: function () {
                builtInTheme.unuse();
            }
        }), monaco_indexed_db_1.putTheme(state));
    };
    MonacoThemingService.restore = function () {
        return __awaiter(this, void 0, void 0, function () {
            var themes, themes_1, themes_1_1, state, e_2;
            var e_3, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, monaco_indexed_db_1.getThemes()];
                    case 1:
                        themes = _b.sent();
                        try {
                            for (themes_1 = __values(themes), themes_1_1 = themes_1.next(); !themes_1_1.done; themes_1_1 = themes_1.next()) {
                                state = themes_1_1.value;
                                monaco_theme_registry_1.MonacoThemeRegistry.SINGLETON.setTheme(state.data.name, state.data);
                                MonacoThemingService_1.doRegister(state);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (themes_1_1 && !themes_1_1.done && (_a = themes_1.return)) _a.call(themes_1);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _b.sent();
                        console.error('Failed to restore monaco themes', e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /* remove all characters that are not allowed in css */
    MonacoThemingService.toCssSelector = function (str) {
        str = str.replace(/[^\-a-zA-Z0-9]/g, '-');
        if (str.charAt(0).match(/[0-9\-]/)) {
            str = '-' + str;
        }
        return str;
    };
    var MonacoThemingService_1;
    MonacoThemingService.toUpdateUiTheme = new disposable_1.DisposableCollection();
    __decorate([
        inversify_1.inject(filesystem_1.FileSystem),
        __metadata("design:type", Object)
    ], MonacoThemingService.prototype, "fileSystem", void 0);
    MonacoThemingService = MonacoThemingService_1 = __decorate([
        inversify_1.injectable()
    ], MonacoThemingService);
    return MonacoThemingService;
}());
exports.MonacoThemingService = MonacoThemingService;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/textmate/monaco-textmate-frontend-bindings.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/textmate/monaco-textmate-frontend-bindings.js ***!
  \**********************************************************************************************/
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
exports.OnigasmLib = exports.fetchOnigasm = void 0;
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var textmate_registry_1 = __webpack_require__(/*! ./textmate-registry */ "./node_modules/@theia/monaco/lib/browser/textmate/textmate-registry.js");
var textmate_contribution_1 = __webpack_require__(/*! ./textmate-contribution */ "./node_modules/@theia/monaco/lib/browser/textmate/textmate-contribution.js");
var monaco_textmate_service_1 = __webpack_require__(/*! ./monaco-textmate-service */ "./node_modules/@theia/monaco/lib/browser/textmate/monaco-textmate-service.js");
var monaco_theme_registry_1 = __webpack_require__(/*! ./monaco-theme-registry */ "./node_modules/@theia/monaco/lib/browser/textmate/monaco-theme-registry.js");
var onigasm_1 = __webpack_require__(/*! onigasm */ "./node_modules/onigasm/lib/index.js");
function fetchOnigasm() {
    return new Promise(function (resolve, reject) {
        var onigasmPath = __webpack_require__(/*! onigasm/lib/onigasm.wasm */ "./node_modules/onigasm/lib/onigasm.wasm"); // webpack doing its magic here
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    resolve(this.response);
                }
                else {
                    reject(new Error('Could not fetch onigasm'));
                }
            }
        };
        request.open('GET', onigasmPath, true);
        request.responseType = 'arraybuffer';
        request.send();
    });
}
exports.fetchOnigasm = fetchOnigasm;
var OnigasmLib = /** @class */ (function () {
    function OnigasmLib() {
    }
    OnigasmLib.prototype.createOnigScanner = function (sources) {
        return new onigasm_1.OnigScanner(sources);
    };
    OnigasmLib.prototype.createOnigString = function (sources) {
        return new onigasm_1.OnigString(sources);
    };
    return OnigasmLib;
}());
exports.OnigasmLib = OnigasmLib;
exports.default = (function (bind, unbind, isBound, rebind) {
    var onigasmPromise = browser_1.isBasicWasmSupported ? fetchOnigasm().then(function (buffer) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onigasm_1.loadWASM(buffer)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, new OnigasmLib()];
            }
        });
    }); }) : Promise.reject(new Error('wasm not supported'));
    bind(monaco_textmate_service_1.OnigasmPromise).toConstantValue(onigasmPromise);
    bind(monaco_textmate_service_1.MonacoTextmateService).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).toService(monaco_textmate_service_1.MonacoTextmateService);
    core_1.bindContributionProvider(bind, textmate_contribution_1.LanguageGrammarDefinitionContribution);
    bind(textmate_registry_1.TextmateRegistry).toSelf().inSingletonScope();
    bind(monaco_theme_registry_1.MonacoThemeRegistry).toDynamicValue(function () { return monaco_theme_registry_1.MonacoThemeRegistry.SINGLETON; }).inSingletonScope();
});


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/textmate/monaco-textmate-service.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/textmate/monaco-textmate-service.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 Redhat, Ericsson and others.
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
exports.MonacoTextmateService = exports.OnigasmPromise = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var vscode_textmate_1 = __webpack_require__(/*! vscode-textmate */ "./node_modules/vscode-textmate/release/main.js");
var core_1 = __webpack_require__(/*! @theia/core */ "./node_modules/@theia/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "./node_modules/@theia/core/lib/browser/index.js");
var theming_1 = __webpack_require__(/*! @theia/core/lib/browser/theming */ "./node_modules/@theia/core/lib/browser/theming.js");
var textmate_contribution_1 = __webpack_require__(/*! ./textmate-contribution */ "./node_modules/@theia/monaco/lib/browser/textmate/textmate-contribution.js");
var textmate_tokenizer_1 = __webpack_require__(/*! ./textmate-tokenizer */ "./node_modules/@theia/monaco/lib/browser/textmate/textmate-tokenizer.js");
var textmate_registry_1 = __webpack_require__(/*! ./textmate-registry */ "./node_modules/@theia/monaco/lib/browser/textmate/textmate-registry.js");
var monaco_theme_registry_1 = __webpack_require__(/*! ./monaco-theme-registry */ "./node_modules/@theia/monaco/lib/browser/textmate/monaco-theme-registry.js");
var editor_preferences_1 = __webpack_require__(/*! @theia/editor/lib/browser/editor-preferences */ "./node_modules/@theia/editor/lib/browser/editor-preferences.js");
exports.OnigasmPromise = Symbol('OnigasmPromise');
var MonacoTextmateService = /** @class */ (function () {
    function MonacoTextmateService() {
        this.tokenizerOption = {
            lineLimit: 400
        };
        this._activatedLanguages = new Set();
        this.toDisposeOnUpdateTheme = new core_1.DisposableCollection();
    }
    MonacoTextmateService.prototype.initialize = function () {
        var e_1, _a, e_2, _b;
        var _this = this;
        if (!browser_1.isBasicWasmSupported) {
            console.log('Textmate support deactivated because WebAssembly is not detected.');
            return;
        }
        try {
            for (var _c = __values(this.grammarProviders.getContributions()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var grammarProvider = _d.value;
                try {
                    grammarProvider.registerTextmateLanguage(this.textmateRegistry);
                }
                catch (err) {
                    console.error(err);
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
        this.grammarRegistry = new vscode_textmate_1.Registry({
            getOnigLib: function () { return _this.onigasmPromise; },
            theme: this.monacoThemeRegistry.getThemeData(this.currentEditorTheme),
            loadGrammar: function (scopeName) { return __awaiter(_this, void 0, void 0, function () {
                var provider, definition, rawGrammar;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            provider = this.textmateRegistry.getProvider(scopeName);
                            if (!provider) return [3 /*break*/, 2];
                            return [4 /*yield*/, provider.getGrammarDefinition()];
                        case 1:
                            definition = _a.sent();
                            rawGrammar = void 0;
                            if (typeof definition.content === 'string') {
                                rawGrammar = vscode_textmate_1.parseRawGrammar(definition.content, definition.format === 'json' ? 'grammar.json' : 'grammar.plist');
                            }
                            else {
                                rawGrammar = definition.content;
                            }
                            return [2 /*return*/, rawGrammar];
                        case 2: return [2 /*return*/, undefined];
                    }
                });
            }); },
            getInjections: function (scopeName) {
                var provider = _this.textmateRegistry.getProvider(scopeName);
                if (provider && provider.getInjections) {
                    return provider.getInjections(scopeName);
                }
                return [];
            }
        });
        this.tokenizerOption.lineLimit = this.preferences['editor.maxTokenizationLineLength'];
        this.preferences.onPreferenceChanged(function (e) {
            if (e.preferenceName === 'editor.maxTokenizationLineLength') {
                _this.tokenizerOption.lineLimit = _this.preferences['editor.maxTokenizationLineLength'];
            }
        });
        this.updateTheme();
        this.themeService.onThemeChange(function () { return _this.updateTheme(); });
        try {
            for (var _e = __values(this.textmateRegistry.languages), _f = _e.next(); !_f.done; _f = _e.next()) {
                var id = _f.value;
                this.activateLanguage(id);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    MonacoTextmateService.prototype.updateTheme = function () {
        this.toDisposeOnUpdateTheme.dispose();
        var currentEditorTheme = this.currentEditorTheme;
        document.body.classList.add(currentEditorTheme);
        this.toDisposeOnUpdateTheme.push(core_1.Disposable.create(function () { return document.body.classList.remove(currentEditorTheme); }));
        // first update registry to run tokenization with the proper theme
        var theme = this.monacoThemeRegistry.getThemeData(currentEditorTheme);
        if (theme) {
            this.grammarRegistry.setTheme(theme);
        }
        // then trigger tokenization by setting monaco theme
        monaco.editor.setTheme(currentEditorTheme);
    };
    Object.defineProperty(MonacoTextmateService.prototype, "currentEditorTheme", {
        get: function () {
            return this.themeService.getCurrentTheme().editorTheme || monaco_theme_registry_1.MonacoThemeRegistry.DARK_DEFAULT_THEME;
        },
        enumerable: false,
        configurable: true
    });
    MonacoTextmateService.prototype.activateLanguage = function (language) {
        var _this = this;
        var toDispose = new core_1.DisposableCollection(core_1.Disposable.create(function () { }));
        toDispose.push(this.waitForLanguage(language, function () {
            return _this.doActivateLanguage(language, toDispose);
        }));
        return toDispose;
    };
    MonacoTextmateService.prototype.doActivateLanguage = function (languageId, toDispose) {
        return __awaiter(this, void 0, void 0, function () {
            var scopeName, provider, configuration, initialLanguage, grammar, options, tokenizer, support, themeService, languageIdentifier, adapter, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._activatedLanguages.has(languageId)) {
                            return [2 /*return*/];
                        }
                        this._activatedLanguages.add(languageId);
                        toDispose.push(core_1.Disposable.create(function () { return _this._activatedLanguages.delete(languageId); }));
                        scopeName = this.textmateRegistry.getScope(languageId);
                        if (!scopeName) {
                            return [2 /*return*/];
                        }
                        provider = this.textmateRegistry.getProvider(scopeName);
                        if (!provider) {
                            return [2 /*return*/];
                        }
                        configuration = this.textmateRegistry.getGrammarConfiguration(languageId);
                        initialLanguage = textmate_contribution_1.getEncodedLanguageId(languageId);
                        return [4 /*yield*/, this.onigasmPromise];
                    case 1:
                        _a.sent();
                        if (toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.grammarRegistry.loadGrammarWithConfiguration(scopeName, initialLanguage, configuration)];
                    case 3:
                        grammar = _a.sent();
                        if (toDispose.disposed) {
                            return [2 /*return*/];
                        }
                        if (!grammar) {
                            throw new Error("no grammar for " + scopeName + ", " + initialLanguage + ", " + JSON.stringify(configuration));
                        }
                        options = configuration.tokenizerOption ? configuration.tokenizerOption : this.tokenizerOption;
                        tokenizer = textmate_tokenizer_1.createTextmateTokenizer(grammar, options);
                        toDispose.push(monaco.languages.setTokensProvider(languageId, tokenizer));
                        support = monaco.modes.TokenizationRegistry.get(languageId);
                        themeService = monaco.services.StaticServices.standaloneThemeService.get();
                        languageIdentifier = monaco.services.StaticServices.modeService.get().getLanguageIdentifier(languageId);
                        adapter = new monaco.services.TokenizationSupport2Adapter(themeService, languageIdentifier, tokenizer);
                        support.tokenize = adapter.tokenize.bind(adapter);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        this.logger.warn('No grammar for this language id', languageId, error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MonacoTextmateService.prototype.waitForLanguage = function (language, cb) {
        var e_3, _a;
        var modeService = monaco.services.StaticServices.modeService.get();
        try {
            for (var _b = __values(Object.keys(modeService['_instantiatedModes'])), _c = _b.next(); !_c.done; _c = _b.next()) {
                var modeId = _c.value;
                var mode = modeService['_instantiatedModes'][modeId];
                if (mode.getId() === language) {
                    cb();
                    return core_1.Disposable.NULL;
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
        return monaco.languages.onLanguage(language, cb);
    };
    __decorate([
        inversify_1.inject(core_1.ContributionProvider),
        inversify_1.named(textmate_contribution_1.LanguageGrammarDefinitionContribution),
        __metadata("design:type", Object)
    ], MonacoTextmateService.prototype, "grammarProviders", void 0);
    __decorate([
        inversify_1.inject(textmate_registry_1.TextmateRegistry),
        __metadata("design:type", textmate_registry_1.TextmateRegistry)
    ], MonacoTextmateService.prototype, "textmateRegistry", void 0);
    __decorate([
        inversify_1.inject(core_1.ILogger),
        __metadata("design:type", Object)
    ], MonacoTextmateService.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(exports.OnigasmPromise),
        __metadata("design:type", Object)
    ], MonacoTextmateService.prototype, "onigasmPromise", void 0);
    __decorate([
        inversify_1.inject(theming_1.ThemeService),
        __metadata("design:type", theming_1.ThemeService)
    ], MonacoTextmateService.prototype, "themeService", void 0);
    __decorate([
        inversify_1.inject(monaco_theme_registry_1.MonacoThemeRegistry),
        __metadata("design:type", monaco_theme_registry_1.MonacoThemeRegistry)
    ], MonacoTextmateService.prototype, "monacoThemeRegistry", void 0);
    __decorate([
        inversify_1.inject(editor_preferences_1.EditorPreferences),
        __metadata("design:type", Object)
    ], MonacoTextmateService.prototype, "preferences", void 0);
    MonacoTextmateService = __decorate([
        inversify_1.injectable()
    ], MonacoTextmateService);
    return MonacoTextmateService;
}());
exports.MonacoTextmateService = MonacoTextmateService;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/textmate/monaco-theme-registry.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/textmate/monaco-theme-registry.js ***!
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
exports.MonacoThemeRegistry = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var vscode_textmate_1 = __webpack_require__(/*! vscode-textmate */ "./node_modules/vscode-textmate/release/main.js");
var MonacoThemeRegistry = /** @class */ (function () {
    function MonacoThemeRegistry() {
    }
    MonacoThemeRegistry.prototype.getThemeData = function (name) {
        var theme = this.doGetTheme(name);
        return theme && theme.themeData;
    };
    MonacoThemeRegistry.prototype.getTheme = function (name) {
        return this.doGetTheme(name);
    };
    MonacoThemeRegistry.prototype.doGetTheme = function (name) {
        var standaloneThemeService = monaco.services.StaticServices.standaloneThemeService.get();
        var theme = !name ? standaloneThemeService.getTheme() : standaloneThemeService._knownThemes.get(name);
        return theme;
    };
    MonacoThemeRegistry.prototype.setTheme = function (name, data) {
        // monaco auto refreshes a theme with new data
        monaco.editor.defineTheme(name, data);
    };
    /**
     * Register VS Code compatible themes
     */
    MonacoThemeRegistry.prototype.register = function (json, includes, givenName, monacoBase) {
        var _a, _b, e_1, _c, e_2, _d;
        var name = givenName || json.name;
        var result = {
            name: name,
            base: monacoBase || 'vs',
            inherit: true,
            colors: {},
            rules: [],
            settings: []
        };
        if (typeof json.include !== 'undefined') {
            if (!includes || !includes[json.include]) {
                console.error("Couldn't resolve includes theme " + json.include + ".");
            }
            else {
                var parentTheme = this.register(includes[json.include], includes);
                Object.assign(result.colors, parentTheme.colors);
                (_a = result.rules).push.apply(_a, __spread(parentTheme.rules));
                (_b = result.settings).push.apply(_b, __spread(parentTheme.settings));
            }
        }
        var tokenColors = json.tokenColors;
        if (Array.isArray(tokenColors)) {
            try {
                for (var tokenColors_1 = __values(tokenColors), tokenColors_1_1 = tokenColors_1.next(); !tokenColors_1_1.done; tokenColors_1_1 = tokenColors_1.next()) {
                    var tokenColor = tokenColors_1_1.value;
                    if (tokenColor.scope && tokenColor.settings) {
                        result.settings.push({
                            scope: tokenColor.scope,
                            settings: {
                                foreground: this.normalizeColor(tokenColor.settings.foreground),
                                background: this.normalizeColor(tokenColor.settings.background),
                                fontStyle: tokenColor.settings.fontStyle
                            }
                        });
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (tokenColors_1_1 && !tokenColors_1_1.done && (_c = tokenColors_1.return)) _c.call(tokenColors_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        if (json.colors) {
            Object.assign(result.colors, json.colors);
            result.encodedTokensColors = Object.keys(result.colors).map(function (key) { return result.colors[key]; });
        }
        if (monacoBase && givenName) {
            try {
                for (var _e = __values(result.settings), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var setting = _f.value;
                    this.transform(setting, function (rule) { return result.rules.push(rule); });
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_d = _e.return)) _d.call(_e);
                }
                finally { if (e_2) throw e_2.error; }
            }
            // the default rule (scope empty) is always the first rule. Ignore all other default rules.
            var defaultTheme = monaco.services.StaticServices.standaloneThemeService.get()._knownThemes.get(result.base);
            var foreground = result.colors['editor.foreground'] || defaultTheme.getColor('editor.foreground');
            var background = result.colors['editor.background'] || defaultTheme.getColor('editor.background');
            result.settings.unshift({
                settings: {
                    foreground: this.normalizeColor(foreground),
                    background: this.normalizeColor(background)
                }
            });
            var reg = new vscode_textmate_1.Registry();
            reg.setTheme(result);
            result.encodedTokensColors = reg.getColorMap();
            // index 0 has to be set to null as it is 'undefined' by default, but monaco code expects it to be null
            // eslint-disable-next-line no-null/no-null
            result.encodedTokensColors[0] = null;
            this.setTheme(givenName, result);
        }
        return result;
    };
    MonacoThemeRegistry.prototype.transform = function (tokenColor, acceptor) {
        var e_3, _a;
        if (typeof tokenColor.scope === 'undefined') {
            tokenColor.scope = [''];
        }
        else if (typeof tokenColor.scope === 'string') {
            tokenColor.scope = tokenColor.scope.split(',').map(function (scope) { return scope.trim(); });
        }
        try {
            for (var _b = __values(tokenColor.scope), _c = _b.next(); !_c.done; _c = _b.next()) {
                var scope = _c.value;
                acceptor(__assign(__assign({}, tokenColor.settings), { token: scope }));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    MonacoThemeRegistry.prototype.normalizeColor = function (color) {
        if (!color) {
            return undefined;
        }
        var normalized = String(color).replace(/^\#/, '').slice(0, 6);
        if (normalized.length < 6) {
            // ignoring not normalized colors to avoid breaking token color indexes between monaco and vscode-textmate
            console.error("Color '" + normalized + "' is NOT normalized, it must have 6 positions.");
            return undefined;
        }
        return '#' + normalized;
    };
    MonacoThemeRegistry = __decorate([
        inversify_1.injectable()
    ], MonacoThemeRegistry);
    return MonacoThemeRegistry;
}());
exports.MonacoThemeRegistry = MonacoThemeRegistry;
(function (MonacoThemeRegistry) {
    MonacoThemeRegistry.SINGLETON = new MonacoThemeRegistry();
    MonacoThemeRegistry.DARK_DEFAULT_THEME = MonacoThemeRegistry.SINGLETON.register(__webpack_require__(/*! ../../../data/monaco-themes/vscode/dark_theia.json */ "./node_modules/@theia/monaco/data/monaco-themes/vscode/dark_theia.json"), {
        './dark_defaults.json': __webpack_require__(/*! ../../../data/monaco-themes/vscode/dark_defaults.json */ "./node_modules/@theia/monaco/data/monaco-themes/vscode/dark_defaults.json"),
        './dark_vs.json': __webpack_require__(/*! ../../../data/monaco-themes/vscode/dark_vs.json */ "./node_modules/@theia/monaco/data/monaco-themes/vscode/dark_vs.json"),
        './dark_plus.json': __webpack_require__(/*! ../../../data/monaco-themes/vscode/dark_plus.json */ "./node_modules/@theia/monaco/data/monaco-themes/vscode/dark_plus.json")
    }, 'dark-theia', 'vs-dark').name;
    MonacoThemeRegistry.LIGHT_DEFAULT_THEME = MonacoThemeRegistry.SINGLETON.register(__webpack_require__(/*! ../../../data/monaco-themes/vscode/light_theia.json */ "./node_modules/@theia/monaco/data/monaco-themes/vscode/light_theia.json"), {
        './light_defaults.json': __webpack_require__(/*! ../../../data/monaco-themes/vscode/light_defaults.json */ "./node_modules/@theia/monaco/data/monaco-themes/vscode/light_defaults.json"),
        './light_vs.json': __webpack_require__(/*! ../../../data/monaco-themes/vscode/light_vs.json */ "./node_modules/@theia/monaco/data/monaco-themes/vscode/light_vs.json"),
        './light_plus.json': __webpack_require__(/*! ../../../data/monaco-themes/vscode/light_plus.json */ "./node_modules/@theia/monaco/data/monaco-themes/vscode/light_plus.json"),
    }, 'light-theia', 'vs').name;
    MonacoThemeRegistry.HC_DEFAULT_THEME = MonacoThemeRegistry.SINGLETON.register(__webpack_require__(/*! ../../../data/monaco-themes/vscode/hc_theia.json */ "./node_modules/@theia/monaco/data/monaco-themes/vscode/hc_theia.json"), {
        './hc_black_defaults.json': __webpack_require__(/*! ../../../data/monaco-themes/vscode/hc_black_defaults.json */ "./node_modules/@theia/monaco/data/monaco-themes/vscode/hc_black_defaults.json"),
        './hc_black.json': __webpack_require__(/*! ../../../data/monaco-themes/vscode/hc_black.json */ "./node_modules/@theia/monaco/data/monaco-themes/vscode/hc_black.json")
    }, 'hc-theia', 'hc-black').name;
})(MonacoThemeRegistry = exports.MonacoThemeRegistry || (exports.MonacoThemeRegistry = {}));
exports.MonacoThemeRegistry = MonacoThemeRegistry;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/textmate/textmate-contribution.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/textmate/textmate-contribution.js ***!
  \**********************************************************************************/
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
exports.getEncodedLanguageId = exports.LanguageGrammarDefinitionContribution = void 0;
/**
 * Callback for extensions to contribute language grammar definitions
 */
exports.LanguageGrammarDefinitionContribution = Symbol('LanguageGrammarDefinitionContribution');
function getEncodedLanguageId(languageId) {
    return monaco.languages.getEncodedLanguageId(languageId);
}
exports.getEncodedLanguageId = getEncodedLanguageId;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/textmate/textmate-registry.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/textmate/textmate-registry.js ***!
  \******************************************************************************/
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.TextmateRegistry = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "./node_modules/inversify/lib/inversify.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "./node_modules/@theia/core/lib/common/disposable.js");
var TextmateRegistry = /** @class */ (function () {
    function TextmateRegistry() {
        this.scopeToProvider = new Map();
        this.languageToConfig = new Map();
        this.languageIdToScope = new Map();
    }
    Object.defineProperty(TextmateRegistry.prototype, "languages", {
        get: function () {
            return this.languageIdToScope.keys();
        },
        enumerable: false,
        configurable: true
    });
    TextmateRegistry.prototype.registerTextmateGrammarScope = function (scope, provider) {
        var providers = this.scopeToProvider.get(scope) || [];
        var existingProvider = providers[0];
        if (existingProvider) {
            Promise.all([existingProvider.getGrammarDefinition(), provider.getGrammarDefinition()]).then(function (_a) {
                var _b = __read(_a, 2), a = _b[0], b = _b[1];
                if (a.location !== b.location || !a.location && !b.location) {
                    console.warn(new Error("a registered grammar provider for '" + scope + "' scope is overridden"));
                }
            });
        }
        providers.unshift(provider);
        this.scopeToProvider.set(scope, providers);
        return disposable_1.Disposable.create(function () {
            var index = providers.indexOf(provider);
            if (index !== -1) {
                providers.splice(index, 1);
            }
        });
    };
    TextmateRegistry.prototype.getProvider = function (scope) {
        var providers = this.scopeToProvider.get(scope);
        return providers && providers[0];
    };
    TextmateRegistry.prototype.mapLanguageIdToTextmateGrammar = function (languageId, scope) {
        var scopes = this.languageIdToScope.get(languageId) || [];
        var existingScope = scopes[0];
        if (typeof existingScope === 'string') {
            console.warn(new Error("'" + languageId + "' language is remapped from '" + existingScope + "' to '" + scope + "' scope"));
        }
        scopes.unshift(scope);
        this.languageIdToScope.set(languageId, scopes);
        return disposable_1.Disposable.create(function () {
            var index = scopes.indexOf(scope);
            if (index !== -1) {
                scopes.splice(index, 1);
            }
        });
    };
    TextmateRegistry.prototype.getScope = function (languageId) {
        var scopes = this.languageIdToScope.get(languageId);
        return scopes && scopes[0];
    };
    TextmateRegistry.prototype.getLanguageId = function (scope) {
        var e_1, _a;
        try {
            for (var _b = __values(this.languageIdToScope.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var languageId = _c.value;
                if (this.getScope(languageId) === scope) {
                    return languageId;
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
        return undefined;
    };
    TextmateRegistry.prototype.registerGrammarConfiguration = function (languageId, config) {
        var configs = this.languageToConfig.get(languageId) || [];
        var existingConfig = configs[0];
        if (existingConfig) {
            console.warn(new Error("a registered grammar configuration for '" + languageId + "' language is overridden"));
        }
        configs.unshift(config);
        this.languageToConfig.set(languageId, configs);
        return disposable_1.Disposable.create(function () {
            var index = configs.indexOf(config);
            if (index !== -1) {
                configs.splice(index, 1);
            }
        });
    };
    TextmateRegistry.prototype.getGrammarConfiguration = function (languageId) {
        var configs = this.languageToConfig.get(languageId);
        return configs && configs[0] || {};
    };
    TextmateRegistry = __decorate([
        inversify_1.injectable()
    ], TextmateRegistry);
    return TextmateRegistry;
}());
exports.TextmateRegistry = TextmateRegistry;


/***/ }),

/***/ "./node_modules/@theia/monaco/lib/browser/textmate/textmate-tokenizer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@theia/monaco/lib/browser/textmate/textmate-tokenizer.js ***!
  \*******************************************************************************/
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
exports.createTextmateTokenizer = exports.TokenizerOption = exports.TokenizerState = void 0;
var vscode_textmate_1 = __webpack_require__(/*! vscode-textmate */ "./node_modules/vscode-textmate/release/main.js");
var TokenizerState = /** @class */ (function () {
    function TokenizerState(ruleStack) {
        this.ruleStack = ruleStack;
    }
    TokenizerState.prototype.clone = function () {
        return new TokenizerState(this.ruleStack);
    };
    TokenizerState.prototype.equals = function (other) {
        return other instanceof TokenizerState && (other === this || other.ruleStack === this.ruleStack);
    };
    return TokenizerState;
}());
exports.TokenizerState = TokenizerState;
var TokenizerOption;
(function (TokenizerOption) {
    /**
     * The default TextMate tokenizer option.
     *
     * @deprecated Use the current value of `editor.maxTokenizationLineLength` preference instead.
     */
    TokenizerOption.DEFAULT = {
        lineLimit: 400
    };
})(TokenizerOption = exports.TokenizerOption || (exports.TokenizerOption = {}));
function createTextmateTokenizer(grammar, options) {
    if (options.lineLimit !== undefined && (options.lineLimit <= 0 || !Number.isInteger(options.lineLimit))) {
        throw new Error("The 'lineLimit' must be a positive integer. It was " + options.lineLimit + ".");
    }
    return {
        getInitialState: function () { return new TokenizerState(vscode_textmate_1.INITIAL); },
        tokenizeEncoded: function (line, state) {
            var processedLine = line;
            if (options.lineLimit !== undefined && line.length > options.lineLimit) {
                // Line is too long to be tokenized
                processedLine = line.substr(0, options.lineLimit);
            }
            var result = grammar.tokenizeLine2(processedLine, state.ruleStack);
            return {
                endState: new TokenizerState(result.ruleStack),
                tokens: result.tokens
            };
        },
        tokenize: function (line, state) {
            var processedLine = line;
            if (options.lineLimit !== undefined && line.length > options.lineLimit) {
                // Line is too long to be tokenized
                processedLine = line.substr(0, options.lineLimit);
            }
            var result = grammar.tokenizeLine(processedLine, state.ruleStack);
            return {
                endState: new TokenizerState(result.ruleStack),
                tokens: result.tokens.map(function (t) { return ({
                    startIndex: t.startIndex,
                    scopes: t.scopes.reverse().join(' ')
                }); })
            };
        }
    };
}
exports.createTextmateTokenizer = createTextmateTokenizer;


/***/ }),

/***/ "./node_modules/fast-plist/release/src/main.js":
/*!*****************************************************!*\
  !*** ./node_modules/fast-plist/release/src/main.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

function parseWithLocation(content, filename, locationKeyName) {
    return _parse(content, filename, locationKeyName);
}
exports.parseWithLocation = parseWithLocation;
/**
 * A very fast plist parser
 */
function parse(content) {
    return _parse(content, null, null);
}
exports.parse = parse;
function _parse(content, filename, locationKeyName) {
    var len = content.length;
    var pos = 0;
    var line = 1;
    var char = 0;
    // Skip UTF8 BOM
    if (len > 0 && content.charCodeAt(0) === 65279 /* BOM */) {
        pos = 1;
    }
    function advancePosBy(by) {
        if (locationKeyName === null) {
            pos = pos + by;
        }
        else {
            while (by > 0) {
                var chCode = content.charCodeAt(pos);
                if (chCode === 10 /* LINE_FEED */) {
                    pos++;
                    line++;
                    char = 0;
                }
                else {
                    pos++;
                    char++;
                }
                by--;
            }
        }
    }
    function advancePosTo(to) {
        if (locationKeyName === null) {
            pos = to;
        }
        else {
            advancePosBy(to - pos);
        }
    }
    function skipWhitespace() {
        while (pos < len) {
            var chCode = content.charCodeAt(pos);
            if (chCode !== 32 /* SPACE */ && chCode !== 9 /* TAB */ && chCode !== 13 /* CARRIAGE_RETURN */ && chCode !== 10 /* LINE_FEED */) {
                break;
            }
            advancePosBy(1);
        }
    }
    function advanceIfStartsWith(str) {
        if (content.substr(pos, str.length) === str) {
            advancePosBy(str.length);
            return true;
        }
        return false;
    }
    function advanceUntil(str) {
        var nextOccurence = content.indexOf(str, pos);
        if (nextOccurence !== -1) {
            advancePosTo(nextOccurence + str.length);
        }
        else {
            // EOF
            advancePosTo(len);
        }
    }
    function captureUntil(str) {
        var nextOccurence = content.indexOf(str, pos);
        if (nextOccurence !== -1) {
            var r = content.substring(pos, nextOccurence);
            advancePosTo(nextOccurence + str.length);
            return r;
        }
        else {
            // EOF
            var r = content.substr(pos);
            advancePosTo(len);
            return r;
        }
    }
    var state = 0 /* ROOT_STATE */;
    var cur = null;
    var stateStack = [];
    var objStack = [];
    var curKey = null;
    function pushState(newState, newCur) {
        stateStack.push(state);
        objStack.push(cur);
        state = newState;
        cur = newCur;
    }
    function popState() {
        state = stateStack.pop();
        cur = objStack.pop();
    }
    function fail(msg) {
        throw new Error('Near offset ' + pos + ': ' + msg + ' ~~~' + content.substr(pos, 50) + '~~~');
    }
    var dictState = {
        enterDict: function () {
            if (curKey === null) {
                fail('missing <key>');
            }
            var newDict = {};
            if (locationKeyName !== null) {
                newDict[locationKeyName] = {
                    filename: filename,
                    line: line,
                    char: char
                };
            }
            cur[curKey] = newDict;
            curKey = null;
            pushState(1 /* DICT_STATE */, newDict);
        },
        enterArray: function () {
            if (curKey === null) {
                fail('missing <key>');
            }
            var newArr = [];
            cur[curKey] = newArr;
            curKey = null;
            pushState(2 /* ARR_STATE */, newArr);
        }
    };
    var arrState = {
        enterDict: function () {
            var newDict = {};
            if (locationKeyName !== null) {
                newDict[locationKeyName] = {
                    filename: filename,
                    line: line,
                    char: char
                };
            }
            cur.push(newDict);
            pushState(1 /* DICT_STATE */, newDict);
        },
        enterArray: function () {
            var newArr = [];
            cur.push(newArr);
            pushState(2 /* ARR_STATE */, newArr);
        }
    };
    function enterDict() {
        if (state === 1 /* DICT_STATE */) {
            dictState.enterDict();
        }
        else if (state === 2 /* ARR_STATE */) {
            arrState.enterDict();
        }
        else {
            cur = {};
            if (locationKeyName !== null) {
                cur[locationKeyName] = {
                    filename: filename,
                    line: line,
                    char: char
                };
            }
            pushState(1 /* DICT_STATE */, cur);
        }
    }
    function leaveDict() {
        if (state === 1 /* DICT_STATE */) {
            popState();
        }
        else if (state === 2 /* ARR_STATE */) {
            fail('unexpected </dict>');
        }
        else {
            fail('unexpected </dict>');
        }
    }
    function enterArray() {
        if (state === 1 /* DICT_STATE */) {
            dictState.enterArray();
        }
        else if (state === 2 /* ARR_STATE */) {
            arrState.enterArray();
        }
        else {
            cur = [];
            pushState(2 /* ARR_STATE */, cur);
        }
    }
    function leaveArray() {
        if (state === 1 /* DICT_STATE */) {
            fail('unexpected </array>');
        }
        else if (state === 2 /* ARR_STATE */) {
            popState();
        }
        else {
            fail('unexpected </array>');
        }
    }
    function acceptKey(val) {
        if (state === 1 /* DICT_STATE */) {
            if (curKey !== null) {
                fail('too many <key>');
            }
            curKey = val;
        }
        else if (state === 2 /* ARR_STATE */) {
            fail('unexpected <key>');
        }
        else {
            fail('unexpected <key>');
        }
    }
    function acceptString(val) {
        if (state === 1 /* DICT_STATE */) {
            if (curKey === null) {
                fail('missing <key>');
            }
            cur[curKey] = val;
            curKey = null;
        }
        else if (state === 2 /* ARR_STATE */) {
            cur.push(val);
        }
        else {
            cur = val;
        }
    }
    function acceptReal(val) {
        if (isNaN(val)) {
            fail('cannot parse float');
        }
        if (state === 1 /* DICT_STATE */) {
            if (curKey === null) {
                fail('missing <key>');
            }
            cur[curKey] = val;
            curKey = null;
        }
        else if (state === 2 /* ARR_STATE */) {
            cur.push(val);
        }
        else {
            cur = val;
        }
    }
    function acceptInteger(val) {
        if (isNaN(val)) {
            fail('cannot parse integer');
        }
        if (state === 1 /* DICT_STATE */) {
            if (curKey === null) {
                fail('missing <key>');
            }
            cur[curKey] = val;
            curKey = null;
        }
        else if (state === 2 /* ARR_STATE */) {
            cur.push(val);
        }
        else {
            cur = val;
        }
    }
    function acceptDate(val) {
        if (state === 1 /* DICT_STATE */) {
            if (curKey === null) {
                fail('missing <key>');
            }
            cur[curKey] = val;
            curKey = null;
        }
        else if (state === 2 /* ARR_STATE */) {
            cur.push(val);
        }
        else {
            cur = val;
        }
    }
    function acceptData(val) {
        if (state === 1 /* DICT_STATE */) {
            if (curKey === null) {
                fail('missing <key>');
            }
            cur[curKey] = val;
            curKey = null;
        }
        else if (state === 2 /* ARR_STATE */) {
            cur.push(val);
        }
        else {
            cur = val;
        }
    }
    function acceptBool(val) {
        if (state === 1 /* DICT_STATE */) {
            if (curKey === null) {
                fail('missing <key>');
            }
            cur[curKey] = val;
            curKey = null;
        }
        else if (state === 2 /* ARR_STATE */) {
            cur.push(val);
        }
        else {
            cur = val;
        }
    }
    function escapeVal(str) {
        return str.replace(/&#([0-9]+);/g, function (_, m0) {
            return String.fromCodePoint(parseInt(m0, 10));
        }).replace(/&#x([0-9a-f]+);/g, function (_, m0) {
            return String.fromCodePoint(parseInt(m0, 16));
        }).replace(/&amp;|&lt;|&gt;|&quot;|&apos;/g, function (_) {
            switch (_) {
                case '&amp;': return '&';
                case '&lt;': return '<';
                case '&gt;': return '>';
                case '&quot;': return '"';
                case '&apos;': return '\'';
            }
            return _;
        });
    }
    function parseOpenTag() {
        var r = captureUntil('>');
        var isClosed = false;
        if (r.charCodeAt(r.length - 1) === 47 /* SLASH */) {
            isClosed = true;
            r = r.substring(0, r.length - 1);
        }
        return {
            name: r.trim(),
            isClosed: isClosed
        };
    }
    function parseTagValue(tag) {
        if (tag.isClosed) {
            return '';
        }
        var val = captureUntil('</');
        advanceUntil('>');
        return escapeVal(val);
    }
    while (pos < len) {
        skipWhitespace();
        if (pos >= len) {
            break;
        }
        var chCode = content.charCodeAt(pos);
        advancePosBy(1);
        if (chCode !== 60 /* LESS_THAN */) {
            fail('expected <');
        }
        if (pos >= len) {
            fail('unexpected end of input');
        }
        var peekChCode = content.charCodeAt(pos);
        if (peekChCode === 63 /* QUESTION_MARK */) {
            advancePosBy(1);
            advanceUntil('?>');
            continue;
        }
        if (peekChCode === 33 /* EXCLAMATION_MARK */) {
            advancePosBy(1);
            if (advanceIfStartsWith('--')) {
                advanceUntil('-->');
                continue;
            }
            advanceUntil('>');
            continue;
        }
        if (peekChCode === 47 /* SLASH */) {
            advancePosBy(1);
            skipWhitespace();
            if (advanceIfStartsWith('plist')) {
                advanceUntil('>');
                continue;
            }
            if (advanceIfStartsWith('dict')) {
                advanceUntil('>');
                leaveDict();
                continue;
            }
            if (advanceIfStartsWith('array')) {
                advanceUntil('>');
                leaveArray();
                continue;
            }
            fail('unexpected closed tag');
        }
        var tag = parseOpenTag();
        switch (tag.name) {
            case 'dict':
                enterDict();
                if (tag.isClosed) {
                    leaveDict();
                }
                continue;
            case 'array':
                enterArray();
                if (tag.isClosed) {
                    leaveArray();
                }
                continue;
            case 'key':
                acceptKey(parseTagValue(tag));
                continue;
            case 'string':
                acceptString(parseTagValue(tag));
                continue;
            case 'real':
                acceptReal(parseFloat(parseTagValue(tag)));
                continue;
            case 'integer':
                acceptInteger(parseInt(parseTagValue(tag), 10));
                continue;
            case 'date':
                acceptDate(new Date(parseTagValue(tag)));
                continue;
            case 'data':
                acceptData(parseTagValue(tag));
                continue;
            case 'true':
                parseTagValue(tag);
                acceptBool(true);
                continue;
            case 'false':
                parseTagValue(tag);
                acceptBool(false);
                continue;
        }
        if (/^plist/.test(tag.name)) {
            continue;
        }
        fail('unexpected opened tag ' + tag.name);
    }
    return cur;
}
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "./node_modules/idb/build/esm/chunk.js":
/*!*********************************************!*\
  !*** ./node_modules/idb/build/esm/chunk.js ***!
  \*********************************************/
/*! exports provided: a, b, c, d, e */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return wrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addTraps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return instanceOfAny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return reverseTransformCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return unwrap; });
const instanceOfAny = (object, constructors) => constructors.some(c => object instanceof c);

let idbProxyableTypes;
let cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
    return (idbProxyableTypes ||
        (idbProxyableTypes = [
            IDBDatabase,
            IDBObjectStore,
            IDBIndex,
            IDBCursor,
            IDBTransaction,
        ]));
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
    return (cursorAdvanceMethods ||
        (cursorAdvanceMethods = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey,
        ]));
}
const cursorRequestMap = new WeakMap();
const transactionDoneMap = new WeakMap();
const transactionStoreNamesMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
        const unlisten = () => {
            request.removeEventListener('success', success);
            request.removeEventListener('error', error);
        };
        const success = () => {
            resolve(wrap(request.result));
            unlisten();
        };
        const error = () => {
            reject(request.error);
            unlisten();
        };
        request.addEventListener('success', success);
        request.addEventListener('error', error);
    });
    promise
        .then(value => {
        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
        // (see wrapFunction).
        if (value instanceof IDBCursor) {
            cursorRequestMap.set(value, request);
        }
        // Catching to avoid "Uncaught Promise exceptions"
    })
        .catch(() => { });
    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
    // is because we create many promises from a single IDBRequest.
    reverseTransformCache.set(promise, request);
    return promise;
}
function cacheDonePromiseForTransaction(tx) {
    // Early bail if we've already created a done promise for this transaction.
    if (transactionDoneMap.has(tx))
        return;
    const done = new Promise((resolve, reject) => {
        const unlisten = () => {
            tx.removeEventListener('complete', complete);
            tx.removeEventListener('error', error);
            tx.removeEventListener('abort', error);
        };
        const complete = () => {
            resolve();
            unlisten();
        };
        const error = () => {
            reject(tx.error);
            unlisten();
        };
        tx.addEventListener('complete', complete);
        tx.addEventListener('error', error);
        tx.addEventListener('abort', error);
    });
    // Cache it for later retrieval.
    transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
    get(target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === 'done')
                return transactionDoneMap.get(target);
            // Polyfill for objectStoreNames because of Edge.
            if (prop === 'objectStoreNames') {
                return target.objectStoreNames || transactionStoreNamesMap.get(target);
            }
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === 'store') {
                return receiver.objectStoreNames[1]
                    ? undefined
                    : receiver.objectStore(receiver.objectStoreNames[0]);
            }
        }
        // Else transform whatever we get back.
        return wrap(target[prop]);
    },
    has(target, prop) {
        if (target instanceof IDBTransaction &&
            (prop === 'done' || prop === 'store')) {
            return true;
        }
        return prop in target;
    },
};
function addTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
    // Due to expected object equality (which is enforced by the caching in `wrap`), we
    // only create one new func per func.
    // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
    if (func === IDBDatabase.prototype.transaction &&
        !('objectStoreNames' in IDBTransaction.prototype)) {
        return function (storeNames, ...args) {
            const tx = func.call(unwrap(this), storeNames, ...args);
            transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
            return wrap(tx);
        };
    }
    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
    // with real promises, so each advance methods returns a new promise for the cursor object, or
    // undefined if the end of the cursor has been reached.
    if (getCursorAdvanceMethods().includes(func)) {
        return function (...args) {
            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
            // the original object.
            func.apply(unwrap(this), args);
            return wrap(cursorRequestMap.get(this));
        };
    }
    return function (...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap(func.apply(unwrap(this), args));
    };
}
function transformCachableValue(value) {
    if (typeof value === 'function')
        return wrapFunction(value);
    // This doesn't return, it just creates a 'done' promise for the transaction,
    // which is later returned for transaction.done (see idbObjectHandler).
    if (value instanceof IDBTransaction)
        cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
        return new Proxy(value, idbProxyTraps);
    // Return the same value back if we're not going to transform it.
    return value;
}
function wrap(value) {
    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
    if (value instanceof IDBRequest)
        return promisifyRequest(value);
    // If we've already transformed this value before, reuse the transformed value.
    // This is faster, but it also provides object equality.
    if (transformCache.has(value))
        return transformCache.get(value);
    const newValue = transformCachableValue(value);
    // Not all types are transformed.
    // These may be primitive types, so they can't be WeakMap keys.
    if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
    }
    return newValue;
}
const unwrap = (value) => reverseTransformCache.get(value);




/***/ }),

/***/ "./node_modules/idb/build/esm/index.js":
/*!*********************************************!*\
  !*** ./node_modules/idb/build/esm/index.js ***!
  \*********************************************/
/*! exports provided: unwrap, wrap, openDB, deleteDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openDB", function() { return openDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDB", function() { return deleteDB; });
/* harmony import */ var _chunk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk.js */ "./node_modules/idb/build/esm/chunk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unwrap", function() { return _chunk_js__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _chunk_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */
function openDB(name, version, { blocked, upgrade, blocking } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = Object(_chunk_js__WEBPACK_IMPORTED_MODULE_0__["a"])(request);
    if (upgrade) {
        request.addEventListener('upgradeneeded', event => {
            upgrade(Object(_chunk_js__WEBPACK_IMPORTED_MODULE_0__["a"])(request.result), event.oldVersion, event.newVersion, Object(_chunk_js__WEBPACK_IMPORTED_MODULE_0__["a"])(request.transaction));
        });
    }
    if (blocked)
        request.addEventListener('blocked', () => blocked());
    if (blocking) {
        openPromise.then(db => db.addEventListener('versionchange', blocking)).catch(() => { });
    }
    return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */
function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked)
        request.addEventListener('blocked', () => blocked());
    return Object(_chunk_js__WEBPACK_IMPORTED_MODULE_0__["a"])(request).then(() => undefined);
}

const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
const writeMethods = ['put', 'add', 'delete', 'clear'];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase &&
        !(prop in target) &&
        typeof prop === 'string')) {
        return;
    }
    if (cachedMethods.get(prop))
        return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, '');
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||
        !(isWrite || readMethods.includes(targetFuncName))) {
        return;
    }
    const method = async function (storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
        let target = tx.store;
        if (useIndex)
            target = target.index(args.shift());
        const returnVal = target[targetFuncName](...args);
        if (isWrite)
            await tx.done;
        return returnVal;
    };
    cachedMethods.set(prop, method);
    return method;
}
Object(_chunk_js__WEBPACK_IMPORTED_MODULE_0__["b"])(oldTraps => ({
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop),
}));




/***/ }),

/***/ "./node_modules/lru-cache/index.js":
/*!*****************************************!*\
  !*** ./node_modules/lru-cache/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// A linked list to keep track of recently-used-ness
const Yallist = __webpack_require__(/*! yallist */ "./node_modules/yallist/yallist.js")

const MAX = Symbol('max')
const LENGTH = Symbol('length')
const LENGTH_CALCULATOR = Symbol('lengthCalculator')
const ALLOW_STALE = Symbol('allowStale')
const MAX_AGE = Symbol('maxAge')
const DISPOSE = Symbol('dispose')
const NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet')
const LRU_LIST = Symbol('lruList')
const CACHE = Symbol('cache')
const UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet')

const naiveLength = () => 1

// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
class LRUCache {
  constructor (options) {
    if (typeof options === 'number')
      options = { max: options }

    if (!options)
      options = {}

    if (options.max && (typeof options.max !== 'number' || options.max < 0))
      throw new TypeError('max must be a non-negative number')
    // Kind of weird to have a default max of Infinity, but oh well.
    const max = this[MAX] = options.max || Infinity

    const lc = options.length || naiveLength
    this[LENGTH_CALCULATOR] = (typeof lc !== 'function') ? naiveLength : lc
    this[ALLOW_STALE] = options.stale || false
    if (options.maxAge && typeof options.maxAge !== 'number')
      throw new TypeError('maxAge must be a number')
    this[MAX_AGE] = options.maxAge || 0
    this[DISPOSE] = options.dispose
    this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false
    this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false
    this.reset()
  }

  // resize the cache when the max changes.
  set max (mL) {
    if (typeof mL !== 'number' || mL < 0)
      throw new TypeError('max must be a non-negative number')

    this[MAX] = mL || Infinity
    trim(this)
  }
  get max () {
    return this[MAX]
  }

  set allowStale (allowStale) {
    this[ALLOW_STALE] = !!allowStale
  }
  get allowStale () {
    return this[ALLOW_STALE]
  }

  set maxAge (mA) {
    if (typeof mA !== 'number')
      throw new TypeError('maxAge must be a non-negative number')

    this[MAX_AGE] = mA
    trim(this)
  }
  get maxAge () {
    return this[MAX_AGE]
  }

  // resize the cache when the lengthCalculator changes.
  set lengthCalculator (lC) {
    if (typeof lC !== 'function')
      lC = naiveLength

    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC
      this[LENGTH] = 0
      this[LRU_LIST].forEach(hit => {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key)
        this[LENGTH] += hit.length
      })
    }
    trim(this)
  }
  get lengthCalculator () { return this[LENGTH_CALCULATOR] }

  get length () { return this[LENGTH] }
  get itemCount () { return this[LRU_LIST].length }

  rforEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].tail; walker !== null;) {
      const prev = walker.prev
      forEachStep(this, fn, walker, thisp)
      walker = prev
    }
  }

  forEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].head; walker !== null;) {
      const next = walker.next
      forEachStep(this, fn, walker, thisp)
      walker = next
    }
  }

  keys () {
    return this[LRU_LIST].toArray().map(k => k.key)
  }

  values () {
    return this[LRU_LIST].toArray().map(k => k.value)
  }

  reset () {
    if (this[DISPOSE] &&
        this[LRU_LIST] &&
        this[LRU_LIST].length) {
      this[LRU_LIST].forEach(hit => this[DISPOSE](hit.key, hit.value))
    }

    this[CACHE] = new Map() // hash of items by key
    this[LRU_LIST] = new Yallist() // list of items in order of use recency
    this[LENGTH] = 0 // length of items in the list
  }

  dump () {
    return this[LRU_LIST].map(hit =>
      isStale(this, hit) ? false : {
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      }).toArray().filter(h => h)
  }

  dumpLru () {
    return this[LRU_LIST]
  }

  set (key, value, maxAge) {
    maxAge = maxAge || this[MAX_AGE]

    if (maxAge && typeof maxAge !== 'number')
      throw new TypeError('maxAge must be a number')

    const now = maxAge ? Date.now() : 0
    const len = this[LENGTH_CALCULATOR](value, key)

    if (this[CACHE].has(key)) {
      if (len > this[MAX]) {
        del(this, this[CACHE].get(key))
        return false
      }

      const node = this[CACHE].get(key)
      const item = node.value

      // dispose of the old one before overwriting
      // split out into 2 ifs for better coverage tracking
      if (this[DISPOSE]) {
        if (!this[NO_DISPOSE_ON_SET])
          this[DISPOSE](key, item.value)
      }

      item.now = now
      item.maxAge = maxAge
      item.value = value
      this[LENGTH] += len - item.length
      item.length = len
      this.get(key)
      trim(this)
      return true
    }

    const hit = new Entry(key, value, len, now, maxAge)

    // oversized objects fall out of cache automatically.
    if (hit.length > this[MAX]) {
      if (this[DISPOSE])
        this[DISPOSE](key, value)

      return false
    }

    this[LENGTH] += hit.length
    this[LRU_LIST].unshift(hit)
    this[CACHE].set(key, this[LRU_LIST].head)
    trim(this)
    return true
  }

  has (key) {
    if (!this[CACHE].has(key)) return false
    const hit = this[CACHE].get(key).value
    return !isStale(this, hit)
  }

  get (key) {
    return get(this, key, true)
  }

  peek (key) {
    return get(this, key, false)
  }

  pop () {
    const node = this[LRU_LIST].tail
    if (!node)
      return null

    del(this, node)
    return node.value
  }

  del (key) {
    del(this, this[CACHE].get(key))
  }

  load (arr) {
    // reset the cache
    this.reset()

    const now = Date.now()
    // A previous serialized cache has the most recent items first
    for (let l = arr.length - 1; l >= 0; l--) {
      const hit = arr[l]
      const expiresAt = hit.e || 0
      if (expiresAt === 0)
        // the item was created without expiration in a non aged cache
        this.set(hit.k, hit.v)
      else {
        const maxAge = expiresAt - now
        // dont add already expired items
        if (maxAge > 0) {
          this.set(hit.k, hit.v, maxAge)
        }
      }
    }
  }

  prune () {
    this[CACHE].forEach((value, key) => get(this, key, false))
  }
}

const get = (self, key, doUse) => {
  const node = self[CACHE].get(key)
  if (node) {
    const hit = node.value
    if (isStale(self, hit)) {
      del(self, node)
      if (!self[ALLOW_STALE])
        return undefined
    } else {
      if (doUse) {
        if (self[UPDATE_AGE_ON_GET])
          node.value.now = Date.now()
        self[LRU_LIST].unshiftNode(node)
      }
    }
    return hit.value
  }
}

const isStale = (self, hit) => {
  if (!hit || (!hit.maxAge && !self[MAX_AGE]))
    return false

  const diff = Date.now() - hit.now
  return hit.maxAge ? diff > hit.maxAge
    : self[MAX_AGE] && (diff > self[MAX_AGE])
}

const trim = self => {
  if (self[LENGTH] > self[MAX]) {
    for (let walker = self[LRU_LIST].tail;
      self[LENGTH] > self[MAX] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      const prev = walker.prev
      del(self, walker)
      walker = prev
    }
  }
}

const del = (self, node) => {
  if (node) {
    const hit = node.value
    if (self[DISPOSE])
      self[DISPOSE](hit.key, hit.value)

    self[LENGTH] -= hit.length
    self[CACHE].delete(hit.key)
    self[LRU_LIST].removeNode(node)
  }
}

class Entry {
  constructor (key, value, length, now, maxAge) {
    this.key = key
    this.value = value
    this.length = length
    this.now = now
    this.maxAge = maxAge || 0
  }
}

const forEachStep = (self, fn, node, thisp) => {
  let hit = node.value
  if (isStale(self, hit)) {
    del(self, node)
    if (!self[ALLOW_STALE])
      hit = undefined
  }
  if (hit)
    fn.call(thisp, hit.value, hit.key, self)
}

module.exports = LRUCache


/***/ }),

/***/ "./node_modules/onigasm/lib/OnigRegExp.js":
/*!************************************************!*\
  !*** ./node_modules/onigasm/lib/OnigRegExp.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const OnigScanner_1 = __webpack_require__(/*! ./OnigScanner */ "./node_modules/onigasm/lib/OnigScanner.js");
class OnigRegExp {
    /**
     * Create a new regex with the given pattern
     * @param source A string pattern
     */
    constructor(source) {
        this.source = source;
        try {
            this.scanner = new OnigScanner_1.default([this.source]);
        }
        catch (error) {
            // doesn't make much sense, but this to pass atom/node-oniguruam tests
        }
    }
    /**
     * Synchronously search the string for a match starting at the given position
     * @param string The string to search
     * @param startPosition The optional position to start the search at, defaults to `0`
     */
    searchSync(string, startPosition) {
        let match;
        if (startPosition == null) {
            startPosition = 0;
        }
        match = this.scanner.findNextMatchSync(string, startPosition);
        return this.captureIndicesForMatch(string, match);
    }
    /**
     * Search the string for a match starting at the given position
     * @param string The string to search
     * @param startPosition The optional position to start the search at, defaults to `0`
     * @param callback The `(error, match)` function to call when done, match will be null if no matches were found. match will be an array of objects for each matched group on a successful search
     */
    search(string, startPosition, callback) {
        if (startPosition == null) {
            startPosition = 0;
        }
        if (typeof startPosition === 'function') {
            callback = startPosition;
            startPosition = 0;
        }
        try {
            const ret = this.searchSync(string, startPosition);
            callback(null, ret);
        }
        catch (error) {
            callback(error);
        }
    }
    /**
     * Synchronously test if this regular expression matches the given string
     * @param string The string to test against
     */
    testSync(string) {
        if ((typeof this.source === 'boolean' || typeof string === 'boolean')) {
            return this.source === string;
        }
        return this.searchSync(string) != null;
    }
    /**
     * Test if this regular expression matches the given string
     * @param string The string to test against
     * @param callback The (error, matches) function to call when done, matches will be true if at least one match is found, false otherwise
     */
    test(string, callback) {
        if (typeof callback !== 'function') {
            callback = () => { };
        }
        try {
            callback(null, this.testSync(string));
        }
        catch (error) {
            callback(error);
        }
    }
    captureIndicesForMatch(string, match) {
        if (match != null) {
            const { captureIndices } = match;
            let capture;
            string = this.scanner.convertToString(string);
            for (let i = 0; i < captureIndices.length; i++) {
                capture = captureIndices[i];
                capture.match = string.slice(capture.start, capture.end);
            }
            return captureIndices;
        }
        else {
            return null;
        }
    }
}
exports.default = OnigRegExp;
//# sourceMappingURL=OnigRegExp.js.map

/***/ }),

/***/ "./node_modules/onigasm/lib/OnigScanner.js":
/*!*************************************************!*\
  !*** ./node_modules/onigasm/lib/OnigScanner.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LRUCache = __webpack_require__(/*! lru-cache */ "./node_modules/lru-cache/index.js");
const onigasmH_1 = __webpack_require__(/*! ./onigasmH */ "./node_modules/onigasm/lib/onigasmH.js");
const OnigString_1 = __webpack_require__(/*! ./OnigString */ "./node_modules/onigasm/lib/OnigString.js");
/**
 * Allocates space on the heap and copies the string bytes on to it
 * @param str
 * @returns pointer to the first byte's address on heap
 */
function mallocAndWriteString(str) {
    const ptr = onigasmH_1.onigasmH._malloc(str.utf8Bytes.length);
    onigasmH_1.onigasmH.HEAPU8.set(str.utf8Bytes, ptr);
    return ptr;
}
function convertUTF8BytesFromPtrToString(ptr) {
    const chars = [];
    let i = 0;
    while (onigasmH_1.onigasmH.HEAPU8[ptr] !== 0x00) {
        chars[i++] = onigasmH_1.onigasmH.HEAPU8[ptr++];
    }
    return chars.join();
}
const cache = new LRUCache({
    dispose: (scanner, info) => {
        const regexTPtrsPtr = onigasmH_1.onigasmH._malloc(info.regexTPtrs.length);
        onigasmH_1.onigasmH.HEAPU8.set(info.regexTPtrs, regexTPtrsPtr);
        const status = onigasmH_1.onigasmH._disposeCompiledPatterns(regexTPtrsPtr, scanner.patterns.length);
        if (status !== 0) {
            const errMessage = convertUTF8BytesFromPtrToString(onigasmH_1.onigasmH._getLastError());
            throw new Error(errMessage);
        }
        onigasmH_1.onigasmH._free(regexTPtrsPtr);
    },
    max: 1000,
});
class OnigScanner {
    /**
     * Create a new scanner with the given patterns
     * @param patterns  An array of string patterns
     */
    constructor(patterns) {
        if (onigasmH_1.onigasmH === null) {
            throw new Error(`Onigasm has not been initialized, call loadWASM from 'onigasm' exports before using any other API`);
        }
        for (let i = 0; i < patterns.length; i++) {
            const pattern = patterns[i];
            if (typeof pattern !== 'string') {
                throw new TypeError(`First parameter to OnigScanner constructor must be array of (pattern) strings`);
            }
        }
        this.sources = patterns.slice();
    }
    get patterns() {
        return this.sources.slice();
    }
    /**
     * Find the next match from a given position
     * @param string The string to search
     * @param startPosition The optional position to start at, defaults to 0
     * @param callback The (error, match) function to call when done, match will null when there is no match
     */
    findNextMatch(string, startPosition, callback) {
        if (startPosition == null) {
            startPosition = 0;
        }
        if (typeof startPosition === 'function') {
            callback = startPosition;
            startPosition = 0;
        }
        try {
            const match = this.findNextMatchSync(string, startPosition);
            callback(null, match);
        }
        catch (error) {
            callback(error);
        }
    }
    /**
     * Find the next match from a given position
     * @param string The string to search
     * @param startPosition The optional position to start at, defaults to 0
     */
    findNextMatchSync(string, startPosition) {
        if (startPosition == null) {
            startPosition = 0;
        }
        startPosition = this.convertToNumber(startPosition);
        let onigNativeInfo = cache.get(this);
        let status = 0;
        if (!onigNativeInfo) {
            const regexTAddrRecieverPtr = onigasmH_1.onigasmH._malloc(4);
            const regexTPtrs = [];
            for (let i = 0; i < this.sources.length; i++) {
                const pattern = this.sources[i];
                const patternStrPtr = mallocAndWriteString(new OnigString_1.default(pattern));
                status = onigasmH_1.onigasmH._compilePattern(patternStrPtr, regexTAddrRecieverPtr);
                if (status !== 0) {
                    const errMessage = convertUTF8BytesFromPtrToString(onigasmH_1.onigasmH._getLastError());
                    throw new Error(errMessage);
                }
                const regexTAddress = onigasmH_1.onigasmH.HEAP32[regexTAddrRecieverPtr / 4];
                regexTPtrs.push(regexTAddress);
                onigasmH_1.onigasmH._free(patternStrPtr);
            }
            onigNativeInfo = {
                regexTPtrs: new Uint8Array(Uint32Array.from(regexTPtrs).buffer),
            };
            onigasmH_1.onigasmH._free(regexTAddrRecieverPtr);
            cache.set(this, onigNativeInfo);
        }
        const onigString = string instanceof OnigString_1.default ? string : new OnigString_1.default(this.convertToString(string));
        const strPtr = mallocAndWriteString(onigString);
        const resultInfoReceiverPtr = onigasmH_1.onigasmH._malloc(8);
        const regexTPtrsPtr = onigasmH_1.onigasmH._malloc(onigNativeInfo.regexTPtrs.length);
        onigasmH_1.onigasmH.HEAPU8.set(onigNativeInfo.regexTPtrs, regexTPtrsPtr);
        status = onigasmH_1.onigasmH._findBestMatch(
        // regex_t **patterns
        regexTPtrsPtr, 
        // int patternCount
        this.sources.length, 
        // UChar *utf8String
        strPtr, 
        // int strLen
        onigString.utf8Bytes.length - 1, 
        // int startOffset
        onigString.convertUtf16OffsetToUtf8(startPosition), 
        // int *resultInfo
        resultInfoReceiverPtr);
        if (status !== 0) {
            const errMessage = convertUTF8BytesFromPtrToString(onigasmH_1.onigasmH._getLastError());
            throw new Error(errMessage);
        }
        const [
        // The index of pattern which matched the string at least offset from 0 (start)
        bestPatternIdx, 
        // Begin address of capture info encoded as pairs
        // like [start, end, start, end, start, end, ...]
        //  - first start-end pair is entire match (index 0 and 1)
        //  - subsequent pairs are capture groups (2, 3 = first capture group, 4, 5 = second capture group and so on)
        encodedResultBeginAddress, 
        // Length of the [start, end, ...] sequence so we know how much memory to read (will always be 0 or multiple of 2)
        encodedResultLength,] = new Uint32Array(onigasmH_1.onigasmH.HEAPU32.buffer, resultInfoReceiverPtr, 3);
        onigasmH_1.onigasmH._free(strPtr);
        onigasmH_1.onigasmH._free(resultInfoReceiverPtr);
        onigasmH_1.onigasmH._free(regexTPtrsPtr);
        if (encodedResultLength > 0) {
            const encodedResult = new Uint32Array(onigasmH_1.onigasmH.HEAPU32.buffer, encodedResultBeginAddress, encodedResultLength);
            const captureIndices = [];
            let i = 0;
            let captureIdx = 0;
            while (i < encodedResultLength) {
                const index = captureIdx++;
                let start = encodedResult[i++];
                let end = encodedResult[i++];
                if (onigString.hasMultiByteCharacters) {
                    start = onigString.convertUtf8OffsetToUtf16(start);
                    end = onigString.convertUtf8OffsetToUtf16(end);
                }
                captureIndices.push({
                    end,
                    index,
                    length: end - start,
                    start,
                });
            }
            onigasmH_1.onigasmH._free(encodedResultBeginAddress);
            return {
                captureIndices,
                index: bestPatternIdx,
                scanner: this,
            };
        }
        return null;
    }
    convertToString(value) {
        if (value === undefined) {
            return 'undefined';
        }
        if (value === null) {
            return 'null';
        }
        if (value instanceof OnigString_1.default) {
            return value.content;
        }
        return value.toString();
    }
    convertToNumber(value) {
        value = parseInt(value, 10);
        if (!isFinite(value)) {
            value = 0;
        }
        value = Math.max(value, 0);
        return value;
    }
}
exports.OnigScanner = OnigScanner;
exports.default = OnigScanner;
//# sourceMappingURL=OnigScanner.js.map

/***/ }),

/***/ "./node_modules/onigasm/lib/OnigString.js":
/*!************************************************!*\
  !*** ./node_modules/onigasm/lib/OnigString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class OnigString {
    constructor(content) {
        this.substring = (start, end) => {
            return this.source.substring(start, end);
        };
        this.toString = (start, end) => {
            return this.source;
        };
        if (typeof content !== 'string') {
            throw new TypeError('Argument must be a string');
        }
        this.source = content;
        this._utf8Bytes = null;
        this._utf8Indexes = null;
    }
    get utf8Bytes() {
        if (!this._utf8Bytes) {
            this.encode();
        }
        return this._utf8Bytes;
    }
    /**
     * Returns `null` if all utf8 offsets match utf-16 offset (content has no multi byte characters)
     */
    get utf8Indexes() {
        if (!this._utf8Bytes) {
            this.encode();
        }
        return this._utf8Indexes;
    }
    get content() {
        return this.source;
    }
    get length() {
        return this.source.length;
    }
    get hasMultiByteCharacters() {
        return this.utf8Indexes !== null;
    }
    convertUtf8OffsetToUtf16(utf8Offset) {
        if (utf8Offset < 0) {
            return 0;
        }
        const utf8Array = this._utf8Bytes;
        if (utf8Offset >= utf8Array.length - 1) {
            return this.source.length;
        }
        const utf8OffsetMap = this.utf8Indexes;
        if (utf8OffsetMap && utf8Offset >= this._mappingTableStartOffset) {
            return findFirstInSorted(utf8OffsetMap, utf8Offset - this._mappingTableStartOffset) + this._mappingTableStartOffset;
        }
        return utf8Offset;
    }
    convertUtf16OffsetToUtf8(utf16Offset) {
        if (utf16Offset < 0) {
            return 0;
        }
        const utf8Array = this._utf8Bytes;
        if (utf16Offset >= this.source.length) {
            return utf8Array.length - 1;
        }
        const utf8OffsetMap = this.utf8Indexes;
        if (utf8OffsetMap && utf16Offset >= this._mappingTableStartOffset) {
            return utf8OffsetMap[utf16Offset - this._mappingTableStartOffset] + this._mappingTableStartOffset;
        }
        return utf16Offset;
    }
    encode() {
        const str = this.source;
        const n = str.length;
        let utf16OffsetToUtf8;
        let utf8Offset = 0;
        let mappingTableStartOffset = 0;
        function createOffsetTable(startOffset) {
            const maxUtf8Len = (n - startOffset) * 3;
            if (maxUtf8Len <= 0xff) {
                utf16OffsetToUtf8 = new Uint8Array(n - startOffset);
            }
            else if (maxUtf8Len <= 0xffff) {
                utf16OffsetToUtf8 = new Uint16Array(n - startOffset);
            }
            else {
                utf16OffsetToUtf8 = new Uint32Array(n - startOffset);
            }
            mappingTableStartOffset = startOffset;
            utf16OffsetToUtf8[utf8Offset++] = 0;
        }
        const u8view = new Uint8Array((n * 3) /* alloc max now, trim later*/ + 1 /** null termination character */);
        let ptrHead = 0;
        let i = 0;
        // for some reason, v8 is faster with str.length than using a variable (might be illusion)
        while (i < str.length) {
            let codepoint;
            const c = str.charCodeAt(i);
            if (utf16OffsetToUtf8) {
                utf16OffsetToUtf8[utf8Offset++] = ptrHead - mappingTableStartOffset;
            }
            if (c < 0xD800 || c > 0xDFFF) {
                codepoint = c;
            }
            else if (c >= 0xDC00) {
                codepoint = 0xFFFD;
            }
            else {
                if (i === n - 1) {
                    codepoint = 0xFFFD;
                }
                else {
                    const d = str.charCodeAt(i + 1);
                    if (0xDC00 <= d && d <= 0xDFFF) {
                        if (!utf16OffsetToUtf8) {
                            createOffsetTable(i);
                        }
                        const a = c & 0x3FF;
                        const b = d & 0x3FF;
                        codepoint = 0x10000 + (a << 10) + b;
                        i += 1;
                        utf16OffsetToUtf8[utf8Offset++] = ptrHead - mappingTableStartOffset;
                    }
                    else {
                        codepoint = 0xFFFD;
                    }
                }
            }
            let bytesRequiredToEncode;
            let offset;
            if (codepoint <= 0x7F) {
                bytesRequiredToEncode = 1;
                offset = 0;
            }
            else if (codepoint <= 0x07FF) {
                bytesRequiredToEncode = 2;
                offset = 0xC0;
            }
            else if (codepoint <= 0xFFFF) {
                bytesRequiredToEncode = 3;
                offset = 0xE0;
            }
            else {
                bytesRequiredToEncode = 4;
                offset = 0xF0;
            }
            if (bytesRequiredToEncode === 1) {
                u8view[ptrHead++] = codepoint;
            }
            else {
                if (!utf16OffsetToUtf8) {
                    createOffsetTable(ptrHead);
                }
                u8view[ptrHead++] = (codepoint >> (6 * (--bytesRequiredToEncode))) + offset;
                while (bytesRequiredToEncode > 0) {
                    const temp = codepoint >> (6 * (bytesRequiredToEncode - 1));
                    u8view[ptrHead++] = (0x80 | (temp & 0x3F));
                    bytesRequiredToEncode -= 1;
                }
            }
            i += 1;
        }
        const utf8 = u8view.slice(0, ptrHead + 1);
        utf8[ptrHead] = 0x00;
        this._utf8Bytes = utf8;
        if (utf16OffsetToUtf8) { // set if UTF-16 surrogate chars or multi-byte characters found
            this._utf8Indexes = utf16OffsetToUtf8;
            this._mappingTableStartOffset = mappingTableStartOffset;
        }
    }
}
function findFirstInSorted(array, i) {
    let low = 0;
    let high = array.length;
    if (high === 0) {
        return 0; // no children
    }
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (array[mid] >= i) {
            high = mid;
        }
        else {
            low = mid + 1;
        }
    }
    // low is on the index of the first value >= i or array.length. Decrement low until we find array[low] <= i
    while (low > 0 && (low >= array.length || array[low] > i)) {
        low--;
    }
    // check whether we are on the second index of a utf-16 surrogate char. If so, go to the first index.
    if (low > 0 && array[low] === array[low - 1]) {
        low--;
    }
    return low;
}
exports.default = OnigString;
//# sourceMappingURL=OnigString.js.map

/***/ }),

/***/ "./node_modules/onigasm/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/onigasm/lib/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const onigasmH_1 = __webpack_require__(/*! ./onigasmH */ "./node_modules/onigasm/lib/onigasmH.js");
exports.loadWASM = onigasmH_1.loadWASM;
const OnigRegExp_1 = __webpack_require__(/*! ./OnigRegExp */ "./node_modules/onigasm/lib/OnigRegExp.js");
exports.OnigRegExp = OnigRegExp_1.default;
const OnigScanner_1 = __webpack_require__(/*! ./OnigScanner */ "./node_modules/onigasm/lib/OnigScanner.js");
exports.OnigScanner = OnigScanner_1.default;
const OnigString_1 = __webpack_require__(/*! ./OnigString */ "./node_modules/onigasm/lib/OnigString.js");
exports.OnigString = OnigString_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/onigasm/lib/onigasm.js":
/*!*********************************************!*\
  !*** ./node_modules/onigasm/lib/onigasm.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var Onigasm = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  return (
function(Onigasm) {
  Onigasm = Onigasm || {};

var Module=typeof Onigasm!=="undefined"?Onigasm:{};var moduleOverrides={};var key;for(key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key]}}var arguments_=[];var thisProgram="./this.program";var quit_=function(status,toThrow){throw toThrow};var ENVIRONMENT_IS_WEB=false;var ENVIRONMENT_IS_WORKER=false;var ENVIRONMENT_IS_NODE=false;var ENVIRONMENT_IS_SHELL=true;var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readBinary;if(ENVIRONMENT_IS_SHELL){if(typeof read!="undefined"){read_=function shell_read(f){return read(f)}}readBinary=function readBinary(f){var data;if(typeof readbuffer==="function"){return new Uint8Array(readbuffer(f))}data=read(f,"binary");assert(typeof data==="object");return data};if(typeof scriptArgs!="undefined"){arguments_=scriptArgs}else if(typeof arguments!="undefined"){arguments_=arguments}if(typeof quit==="function"){quit_=function(status){quit(status)}}if(typeof print!=="undefined"){if(typeof console==="undefined")console={};console.log=print;console.warn=console.error=typeof printErr!=="undefined"?printErr:print}}else{}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.warn.bind(console);for(key in moduleOverrides){if(moduleOverrides.hasOwnProperty(key)){Module[key]=moduleOverrides[key]}}moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];var STACK_ALIGN=16;function dynamicAlloc(size){var ret=HEAP32[DYNAMICTOP_PTR>>2];var end=ret+size+15&-16;if(end>_emscripten_get_heap_size()){abort()}HEAP32[DYNAMICTOP_PTR>>2]=end;return ret}function getNativeTypeSize(type){switch(type){case"i1":case"i8":return 1;case"i16":return 2;case"i32":return 4;case"i64":return 8;case"float":return 4;case"double":return 8;default:{if(type[type.length-1]==="*"){return 4}else if(type[0]==="i"){var bits=parseInt(type.substr(1));assert(bits%8===0,"getNativeTypeSize invalid bits "+bits+", type "+type);return bits/8}else{return 0}}}}function warnOnce(text){if(!warnOnce.shown)warnOnce.shown={};if(!warnOnce.shown[text]){warnOnce.shown[text]=1;err(text)}}function convertJsFunctionToWasm(func,sig){var typeSection=[1,0,1,96];var sigRet=sig.slice(0,1);var sigParam=sig.slice(1);var typeCodes={"i":127,"j":126,"f":125,"d":124};typeSection.push(sigParam.length);for(var i=0;i<sigParam.length;++i){typeSection.push(typeCodes[sigParam[i]])}if(sigRet=="v"){typeSection.push(0)}else{typeSection=typeSection.concat([1,typeCodes[sigRet]])}typeSection[1]=typeSection.length-2;var bytes=new Uint8Array([0,97,115,109,1,0,0,0].concat(typeSection,[2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0]));var module=new WebAssembly.Module(bytes);var instance=new WebAssembly.Instance(module,{e:{f:func}});var wrappedFunc=instance.exports.f;return wrappedFunc}function addFunctionWasm(func,sig){var table=wasmTable;var ret=table.length;try{table.grow(1)}catch(err){if(!err instanceof RangeError){throw err}throw"Unable to grow wasm table. Use a higher value for RESERVED_FUNCTION_POINTERS or set ALLOW_TABLE_GROWTH."}try{table.set(ret,func)}catch(err){if(!err instanceof TypeError){throw err}assert(typeof sig!=="undefined","Missing signature argument to addFunction");var wrapped=convertJsFunctionToWasm(func,sig);table.set(ret,wrapped)}return ret}function removeFunctionWasm(index){}var funcWrappers={};function dynCall(sig,ptr,args){if(args&&args.length){return Module["dynCall_"+sig].apply(null,[ptr].concat(args))}else{return Module["dynCall_"+sig].call(null,ptr)}}var tempRet0=0;var setTempRet0=function(value){tempRet0=value};var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var noExitRuntime;if(Module["noExitRuntime"])noExitRuntime=Module["noExitRuntime"];if(typeof WebAssembly!=="object"){err("no native wasm support detected")}function setValue(ptr,value,type,noSafe){type=type||"i8";if(type.charAt(type.length-1)==="*")type="i32";switch(type){case"i1":HEAP8[ptr>>0]=value;break;case"i8":HEAP8[ptr>>0]=value;break;case"i16":HEAP16[ptr>>1]=value;break;case"i32":HEAP32[ptr>>2]=value;break;case"i64":tempI64=[value>>>0,(tempDouble=value,+Math_abs(tempDouble)>=1?tempDouble>0?(Math_min(+Math_floor(tempDouble/4294967296),4294967295)|0)>>>0:~~+Math_ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[ptr>>2]=tempI64[0],HEAP32[ptr+4>>2]=tempI64[1];break;case"float":HEAPF32[ptr>>2]=value;break;case"double":HEAPF64[ptr>>3]=value;break;default:abort("invalid type for setValue: "+type)}}var wasmMemory;var wasmTable=new WebAssembly.Table({"initial":244,"maximum":244+0,"element":"anyfunc"});var ABORT=false;var EXITSTATUS=0;function assert(condition,text){if(!condition){abort("Assertion failed: "+text)}}function getCFunc(ident){var func=Module["_"+ident];assert(func,"Cannot call unknown function "+ident+", make sure it is exported");return func}function ccall(ident,returnType,argTypes,args,opts){var toC={"string":function(str){var ret=0;if(str!==null&&str!==undefined&&str!==0){var len=(str.length<<2)+1;ret=stackAlloc(len);stringToUTF8(str,ret,len)}return ret},"array":function(arr){var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}};function convertReturnValue(ret){if(returnType==="string")return UTF8ToString(ret);if(returnType==="boolean")return Boolean(ret);return ret}var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func.apply(null,cArgs);ret=convertReturnValue(ret);if(stack!==0)stackRestore(stack);return ret}var ALLOC_NONE=3;var UTF8Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(u8Array,idx,maxBytesToRead){var endIdx=idx+maxBytesToRead;var endPtr=idx;while(u8Array[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&u8Array.subarray&&UTF8Decoder){return UTF8Decoder.decode(u8Array.subarray(idx,endPtr))}else{var str="";while(idx<endPtr){var u0=u8Array[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=u8Array[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=u8Array[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|u8Array[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}}return str}function UTF8ToString(ptr,maxBytesToRead){return ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):""}function stringToUTF8Array(str,outU8Array,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343){var u1=str.charCodeAt(++i);u=65536+((u&1023)<<10)|u1&1023}if(u<=127){if(outIdx>=endIdx)break;outU8Array[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;outU8Array[outIdx++]=192|u>>6;outU8Array[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;outU8Array[outIdx++]=224|u>>12;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;outU8Array[outIdx++]=240|u>>18;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}}outU8Array[outIdx]=0;return outIdx-startIdx}function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}function lengthBytesUTF8(str){var len=0;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343)u=65536+((u&1023)<<10)|str.charCodeAt(++i)&1023;if(u<=127)++len;else if(u<=2047)len+=2;else if(u<=65535)len+=3;else len+=4}return len}var UTF16Decoder=typeof TextDecoder!=="undefined"?new TextDecoder("utf-16le"):undefined;function writeArrayToMemory(array,buffer){HEAP8.set(array,buffer)}function writeAsciiToMemory(str,buffer,dontAddNull){for(var i=0;i<str.length;++i){HEAP8[buffer++>>0]=str.charCodeAt(i)}if(!dontAddNull)HEAP8[buffer>>0]=0}var WASM_PAGE_SIZE=65536;function alignUp(x,multiple){if(x%multiple>0){x+=multiple-x%multiple}return x}var buffer,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateGlobalBufferAndViews(buf){buffer=buf;Module["HEAP8"]=HEAP8=new Int8Array(buf);Module["HEAP16"]=HEAP16=new Int16Array(buf);Module["HEAP32"]=HEAP32=new Int32Array(buf);Module["HEAPU8"]=HEAPU8=new Uint8Array(buf);Module["HEAPU16"]=HEAPU16=new Uint16Array(buf);Module["HEAPU32"]=HEAPU32=new Uint32Array(buf);Module["HEAPF32"]=HEAPF32=new Float32Array(buf);Module["HEAPF64"]=HEAPF64=new Float64Array(buf)}var STACK_BASE=5507664,DYNAMIC_BASE=5507664,DYNAMICTOP_PTR=264624;var INITIAL_TOTAL_MEMORY=Module["TOTAL_MEMORY"]||157286400;if(Module["wasmMemory"]){wasmMemory=Module["wasmMemory"]}else{wasmMemory=new WebAssembly.Memory({"initial":INITIAL_TOTAL_MEMORY/WASM_PAGE_SIZE})}if(wasmMemory){buffer=wasmMemory.buffer}INITIAL_TOTAL_MEMORY=buffer.byteLength;updateGlobalBufferAndViews(buffer);HEAP32[DYNAMICTOP_PTR>>2]=DYNAMIC_BASE;function callRuntimeCallbacks(callbacks){while(callbacks.length>0){var callback=callbacks.shift();if(typeof callback=="function"){callback();continue}var func=callback.func;if(typeof func==="number"){if(callback.arg===undefined){Module["dynCall_v"](func)}else{Module["dynCall_vi"](func,callback.arg)}}else{func(callback.arg===undefined?null:callback.arg)}}}var __ATPRERUN__=[];var __ATINIT__=[];var __ATMAIN__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;var runtimeExited=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function preMain(){callRuntimeCallbacks(__ATMAIN__)}function exitRuntime(){runtimeExited=true}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var Math_abs=Math.abs;var Math_ceil=Math.ceil;var Math_floor=Math.floor;var Math_min=Math.min;var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}Module["preloadedImages"]={};Module["preloadedAudios"]={};function abort(what){if(Module["onAbort"]){Module["onAbort"](what)}what+="";out(what);err(what);ABORT=true;EXITSTATUS=1;what="abort("+what+"). Build with -s ASSERTIONS=1 for more info.";throw new WebAssembly.RuntimeError(what)}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return String.prototype.startsWith?filename.startsWith(dataURIPrefix):filename.indexOf(dataURIPrefix)===0}var wasmBinaryFile="onigasm.wasm";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}function getBinary(){try{if(wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(wasmBinaryFile)}else{throw"both async and sync fetching of the wasm failed"}}catch(err){abort(err)}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)&&typeof fetch==="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){if(!response["ok"]){throw"failed to load wasm binary file at '"+wasmBinaryFile+"'"}return response["arrayBuffer"]()}).catch(function(){return getBinary()})}return new Promise(function(resolve,reject){resolve(getBinary())})}function createWasm(){var info={"env":asmLibraryArg,"wasi_unstable":asmLibraryArg};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;removeRunDependency("wasm-instantiate")}addRunDependency("wasm-instantiate");function receiveInstantiatedSource(output){receiveInstance(output["instance"])}function instantiateArrayBuffer(receiver){return getBinaryPromise().then(function(binary){return WebAssembly.instantiate(binary,info)}).then(receiver,function(reason){err("failed to asynchronously prepare wasm: "+reason);abort(reason)})}function instantiateAsync(){if(!wasmBinary&&typeof WebAssembly.instantiateStreaming==="function"&&!isDataURI(wasmBinaryFile)&&typeof fetch==="function"){fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){var result=WebAssembly.instantiateStreaming(response,info);return result.then(receiveInstantiatedSource,function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");instantiateArrayBuffer(receiveInstantiatedSource)})})}else{return instantiateArrayBuffer(receiveInstantiatedSource)}}if(Module["instantiateWasm"]){try{var exports=Module["instantiateWasm"](info,receiveInstance);return exports}catch(e){err("Module.instantiateWasm callback failed with error: "+e);return false}}instantiateAsync();return{}}var tempDouble;var tempI64;__ATINIT__.push({func:function(){___wasm_call_ctors()}});function demangle(func){var __cxa_demangle_func=Module["___cxa_demangle"]||Module["__cxa_demangle"];assert(__cxa_demangle_func);try{var s=func;if(s.startsWith("__Z"))s=s.substr(1);var len=lengthBytesUTF8(s)+1;var buf=_malloc(len);stringToUTF8(s,buf,len);var status=_malloc(4);var ret=__cxa_demangle_func(buf,0,0,status);if(HEAP32[status>>2]===0&&ret){return UTF8ToString(ret)}}catch(e){}finally{if(buf)_free(buf);if(status)_free(status);if(ret)_free(ret)}return func}function demangleAll(text){var regex=/\b_Z[\w\d_]+/g;return text.replace(regex,function(x){var y=demangle(x);return x===y?x:y+" ["+x+"]"})}function jsStackTrace(){var err=new Error;if(!err.stack){try{throw new Error(0)}catch(e){err=e}if(!err.stack){return"(no stack trace available)"}}return err.stack.toString()}function _abort(){abort()}function _emscripten_get_heap_size(){return HEAP8.length}function _emscripten_get_sbrk_ptr(){return 264624}function _emscripten_memcpy_big(dest,src,num){HEAPU8.set(HEAPU8.subarray(src,src+num),dest)}function emscripten_realloc_buffer(size){try{wasmMemory.grow(size-buffer.byteLength+65535>>16);updateGlobalBufferAndViews(wasmMemory.buffer);return 1}catch(e){}}function _emscripten_resize_heap(requestedSize){var oldSize=_emscripten_get_heap_size();var PAGE_MULTIPLE=65536;var LIMIT=2147483648-PAGE_MULTIPLE;if(requestedSize>LIMIT){return false}var MIN_TOTAL_MEMORY=16777216;var newSize=Math.max(oldSize,MIN_TOTAL_MEMORY);while(newSize<requestedSize){if(newSize<=536870912){newSize=alignUp(2*newSize,PAGE_MULTIPLE)}else{newSize=Math.min(alignUp((3*newSize+2147483648)/4,PAGE_MULTIPLE),LIMIT)}}var replacement=emscripten_realloc_buffer(newSize);if(!replacement){return false}return true}var PATH={splitPath:function(filename){var splitPathRe=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return splitPathRe.exec(filename).slice(1)},normalizeArray:function(parts,allowAboveRoot){var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==="."){parts.splice(i,1)}else if(last===".."){parts.splice(i,1);up++}else if(up){parts.splice(i,1);up--}}if(allowAboveRoot){for(;up;up--){parts.unshift("..")}}return parts},normalize:function(path){var isAbsolute=path.charAt(0)==="/",trailingSlash=path.substr(-1)==="/";path=PATH.normalizeArray(path.split("/").filter(function(p){return!!p}),!isAbsolute).join("/");if(!path&&!isAbsolute){path="."}if(path&&trailingSlash){path+="/"}return(isAbsolute?"/":"")+path},dirname:function(path){var result=PATH.splitPath(path),root=result[0],dir=result[1];if(!root&&!dir){return"."}if(dir){dir=dir.substr(0,dir.length-1)}return root+dir},basename:function(path){if(path==="/")return"/";var lastSlash=path.lastIndexOf("/");if(lastSlash===-1)return path;return path.substr(lastSlash+1)},extname:function(path){return PATH.splitPath(path)[3]},join:function(){var paths=Array.prototype.slice.call(arguments,0);return PATH.normalize(paths.join("/"))},join2:function(l,r){return PATH.normalize(l+"/"+r)}};var SYSCALLS={buffers:[null,[],[]],printChar:function(stream,curr){var buffer=SYSCALLS.buffers[stream];if(curr===0||curr===10){(stream===1?out:err)(UTF8ArrayToString(buffer,0));buffer.length=0}else{buffer.push(curr)}},varargs:0,get:function(varargs){SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret},getStr:function(){var ret=UTF8ToString(SYSCALLS.get());return ret},get64:function(){var low=SYSCALLS.get(),high=SYSCALLS.get();return low},getZero:function(){SYSCALLS.get()}};function _fd_close(fd){try{return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return e.errno}}function _fd_seek(fd,offset_low,offset_high,whence,newOffset){try{return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return e.errno}}function _fd_write(fd,iov,iovcnt,pnum){try{var num=0;for(var i=0;i<iovcnt;i++){var ptr=HEAP32[iov+i*8>>2];var len=HEAP32[iov+(i*8+4)>>2];for(var j=0;j<len;j++){SYSCALLS.printChar(fd,HEAPU8[ptr+j])}num+=len}HEAP32[pnum>>2]=num;return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return e.errno}}function _setTempRet0($i){setTempRet0($i|0)}var ASSERTIONS=false;var asmLibraryArg={"abort":_abort,"emscripten_get_sbrk_ptr":_emscripten_get_sbrk_ptr,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"fd_close":_fd_close,"fd_seek":_fd_seek,"fd_write":_fd_write,"memory":wasmMemory,"setTempRet0":_setTempRet0,"table":wasmTable};var asm=createWasm();Module["asm"]=asm;var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){return Module["asm"]["__wasm_call_ctors"].apply(null,arguments)};var _malloc=Module["_malloc"]=function(){return Module["asm"]["malloc"].apply(null,arguments)};var _free=Module["_free"]=function(){return Module["asm"]["free"].apply(null,arguments)};var _getLastError=Module["_getLastError"]=function(){return Module["asm"]["getLastError"].apply(null,arguments)};var _compilePattern=Module["_compilePattern"]=function(){return Module["asm"]["compilePattern"].apply(null,arguments)};var _disposeCompiledPatterns=Module["_disposeCompiledPatterns"]=function(){return Module["asm"]["disposeCompiledPatterns"].apply(null,arguments)};var _findBestMatch=Module["_findBestMatch"]=function(){return Module["asm"]["findBestMatch"].apply(null,arguments)};var ___cxa_demangle=Module["___cxa_demangle"]=function(){return Module["asm"]["__cxa_demangle"].apply(null,arguments)};var _setThrew=Module["_setThrew"]=function(){return Module["asm"]["setThrew"].apply(null,arguments)};var stackSave=Module["stackSave"]=function(){return Module["asm"]["stackSave"].apply(null,arguments)};var stackAlloc=Module["stackAlloc"]=function(){return Module["asm"]["stackAlloc"].apply(null,arguments)};var stackRestore=Module["stackRestore"]=function(){return Module["asm"]["stackRestore"].apply(null,arguments)};var __growWasmMemory=Module["__growWasmMemory"]=function(){return Module["asm"]["__growWasmMemory"].apply(null,arguments)};var dynCall_vi=Module["dynCall_vi"]=function(){return Module["asm"]["dynCall_vi"].apply(null,arguments)};var dynCall_iiii=Module["dynCall_iiii"]=function(){return Module["asm"]["dynCall_iiii"].apply(null,arguments)};var dynCall_iiiii=Module["dynCall_iiiii"]=function(){return Module["asm"]["dynCall_iiiii"].apply(null,arguments)};var dynCall_iii=Module["dynCall_iii"]=function(){return Module["asm"]["dynCall_iii"].apply(null,arguments)};var dynCall_iidiiii=Module["dynCall_iidiiii"]=function(){return Module["asm"]["dynCall_iidiiii"].apply(null,arguments)};var dynCall_vii=Module["dynCall_vii"]=function(){return Module["asm"]["dynCall_vii"].apply(null,arguments)};var dynCall_ii=Module["dynCall_ii"]=function(){return Module["asm"]["dynCall_ii"].apply(null,arguments)};var dynCall_i=Module["dynCall_i"]=function(){return Module["asm"]["dynCall_i"].apply(null,arguments)};var dynCall_v=Module["dynCall_v"]=function(){return Module["asm"]["dynCall_v"].apply(null,arguments)};var dynCall_viiiiii=Module["dynCall_viiiiii"]=function(){return Module["asm"]["dynCall_viiiiii"].apply(null,arguments)};var dynCall_viiiii=Module["dynCall_viiiii"]=function(){return Module["asm"]["dynCall_viiiii"].apply(null,arguments)};var dynCall_viiii=Module["dynCall_viiii"]=function(){return Module["asm"]["dynCall_viiii"].apply(null,arguments)};var dynCall_jiji=Module["dynCall_jiji"]=function(){return Module["asm"]["dynCall_jiji"].apply(null,arguments)};Module["asm"]=asm;Module["ccall"]=ccall;var calledRun;Module["then"]=function(func){if(calledRun){func(Module)}else{var old=Module["onRuntimeInitialized"];Module["onRuntimeInitialized"]=function(){if(old)old();func(Module)}}return Module};function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status}dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function run(args){args=args||arguments_;if(runDependencies>0){return}preRun();if(runDependencies>0)return;function doRun(){if(calledRun)return;calledRun=true;if(ABORT)return;initRuntime();preMain();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("")},1);doRun()},1)}else{doRun()}}Module["run"]=run;if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}noExitRuntime=true;run();


  return Onigasm
}
);
})();
if (true)
      module.exports = Onigasm;
    else {}
    

/***/ }),

/***/ "./node_modules/onigasm/lib/onigasm.wasm":
/*!***********************************************!*\
  !*** ./node_modules/onigasm/lib/onigasm.wasm ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "154ccd182313c345d3b9dd8571931eb5.wasm";

/***/ }),

/***/ "./node_modules/onigasm/lib/onigasmH.js":
/*!**********************************************!*\
  !*** ./node_modules/onigasm/lib/onigasmH.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const OnigasmModuleFactory = __webpack_require__(/*! ./onigasm.js */ "./node_modules/onigasm/lib/onigasm.js" /** when TS is compiled to JS, this will mean `lib/onigasm.js` (emitted by `emcc`) */);
async function initModule(bytes) {
    return new Promise((resolve, reject) => {
        const { log, warn, error } = console;
        OnigasmModuleFactory({
            instantiateWasm(imports, successCallback) {
                WebAssembly.instantiate(bytes, imports)
                    .then((output) => {
                    successCallback(output.instance);
                })
                    .catch((e) => {
                    throw e;
                });
                return {};
            },
        })
            .then(moduleH => {
            exports.onigasmH = moduleH;
            resolve();
        });
        if (typeof print !== 'undefined') {
            // can be removed when https://github.com/emscripten-core/emscripten/issues/9829 is fixed.
            // tslint:disable-next-line:no-console
            console.log = log;
            // tslint:disable-next-line:no-console
            console.error = error;
            // tslint:disable-next-line:no-console
            console.warn = warn;
        }
    });
}
let isInitialized = false;
/**
 * Mount the .wasm file that will act as library's "backend"
 * @param data Path to .wasm file or it's ArrayBuffer
 */
async function loadWASM(data) {
    if (isInitialized) {
        throw new Error(`Onigasm#init has been called and was succesful, subsequent calls are not allowed once initialized`);
    }
    if (typeof data === 'string') {
        const arrayBuffer = await (await fetch(data)).arrayBuffer();
        await initModule(arrayBuffer);
    }
    else if (data instanceof ArrayBuffer) {
        await initModule(data);
    }
    else {
        throw new TypeError(`Expected a string (URL of .wasm file) or ArrayBuffer (.wasm file itself) as first parameter`);
    }
    isInitialized = true;
}
exports.loadWASM = loadWASM;
//# sourceMappingURL=onigasmH.js.map

/***/ }),

/***/ "./node_modules/vscode-textmate/release/main.js":
/*!******************************************************!*\
  !*** ./node_modules/vscode-textmate/release/main.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname, process) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
(function (factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(function () {

/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
var $map = {};
function $load(name, factory) {
    var mod = {
        exports: {}
    };
    var requireFunc = function (mod) {
        if ($map[mod]) {
            return $map[mod].exports;
        }
        return __webpack_require__("./node_modules/vscode-textmate/release sync recursive")(mod);
    };
    factory.call(this, requireFunc, mod, mod.exports);
    $map[name] = mod;
}
//# sourceMappingURL=_prefix.js.map
$load('./onigLibs', function(require, module, exports) {
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var onigasmLib = null;
var onigurumaLib = null;
function getOnigasm() {
    if (!onigasmLib) {
        var onigasmModule_1 = require('onigasm');
        var fs = require('fs');
        var path = require('path');
        var wasmBin = fs.readFileSync(path.join(__dirname, '../node_modules/onigasm/lib/onigasm.wasm')).buffer;
        onigasmLib = onigasmModule_1.loadWASM(wasmBin).then(function (_) {
            return {
                createOnigScanner: function (patterns) { return new onigasmModule_1.OnigScanner(patterns); },
                createOnigString: function (s) { return new onigasmModule_1.OnigString(s); }
            };
        });
    }
    return onigasmLib;
}
exports.getOnigasm = getOnigasm;
function getOniguruma() {
    if (!onigurumaLib) {
        var getOnigModule_1 = (function () {
            var onigurumaModule = null;
            return function () {
                if (!onigurumaModule) {
                    onigurumaModule = require('oniguruma');
                }
                return onigurumaModule;
            };
        })();
        onigurumaLib = Promise.resolve({
            createOnigScanner: function (patterns) {
                var onigurumaModule = getOnigModule_1();
                return new onigurumaModule.OnigScanner(patterns);
            },
            createOnigString: function (s) {
                var onigurumaModule = getOnigModule_1();
                var string = new onigurumaModule.OnigString(s);
                string.content = s;
                return string;
            }
        });
    }
    return onigurumaLib;
}
exports.getOniguruma = getOniguruma;
//# sourceMappingURL=onigLibs.js.map
});
$load('./utils', function(require, module, exports) {
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function clone(something) {
    return doClone(something);
}
exports.clone = clone;
function doClone(something) {
    if (Array.isArray(something)) {
        return cloneArray(something);
    }
    if (typeof something === 'object') {
        return cloneObj(something);
    }
    return something;
}
function cloneArray(arr) {
    var r = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        r[i] = doClone(arr[i]);
    }
    return r;
}
function cloneObj(obj) {
    var r = {};
    for (var key in obj) {
        r[key] = doClone(obj[key]);
    }
    return r;
}
function mergeObjects(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    sources.forEach(function (source) {
        for (var key in source) {
            target[key] = source[key];
        }
    });
    return target;
}
exports.mergeObjects = mergeObjects;
function basename(path) {
    var idx = ~path.lastIndexOf('/') || ~path.lastIndexOf('\\');
    if (idx === 0) {
        return path;
    }
    else if (~idx === path.length - 1) {
        return basename(path.substring(0, path.length - 1));
    }
    else {
        return path.substr(~idx + 1);
    }
}
exports.basename = basename;
var CAPTURING_REGEX_SOURCE = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/;
var RegexSource = /** @class */ (function () {
    function RegexSource() {
    }
    RegexSource.hasCaptures = function (regexSource) {
        if (regexSource === null) {
            return false;
        }
        return CAPTURING_REGEX_SOURCE.test(regexSource);
    };
    RegexSource.replaceCaptures = function (regexSource, captureSource, captureIndices) {
        return regexSource.replace(CAPTURING_REGEX_SOURCE, function (match, index, commandIndex, command) {
            var capture = captureIndices[parseInt(index || commandIndex, 10)];
            if (capture) {
                var result = captureSource.substring(capture.start, capture.end);
                // Remove leading dots that would make the selector invalid
                while (result[0] === '.') {
                    result = result.substring(1);
                }
                switch (command) {
                    case 'downcase':
                        return result.toLowerCase();
                    case 'upcase':
                        return result.toUpperCase();
                    default:
                        return result;
                }
            }
            else {
                return match;
            }
        });
    };
    return RegexSource;
}());
exports.RegexSource = RegexSource;
//# sourceMappingURL=utils.js.map
});
$load('./theme', function(require, module, exports) {
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var ParsedThemeRule = /** @class */ (function () {
    function ParsedThemeRule(scope, parentScopes, index, fontStyle, foreground, background) {
        this.scope = scope;
        this.parentScopes = parentScopes;
        this.index = index;
        this.fontStyle = fontStyle;
        this.foreground = foreground;
        this.background = background;
    }
    return ParsedThemeRule;
}());
exports.ParsedThemeRule = ParsedThemeRule;
function isValidHexColor(hex) {
    if (/^#[0-9a-f]{6}$/i.test(hex)) {
        // #rrggbb
        return true;
    }
    if (/^#[0-9a-f]{8}$/i.test(hex)) {
        // #rrggbbaa
        return true;
    }
    if (/^#[0-9a-f]{3}$/i.test(hex)) {
        // #rgb
        return true;
    }
    if (/^#[0-9a-f]{4}$/i.test(hex)) {
        // #rgba
        return true;
    }
    return false;
}
/**
 * Parse a raw theme into rules.
 */
function parseTheme(source) {
    if (!source) {
        return [];
    }
    if (!source.settings || !Array.isArray(source.settings)) {
        return [];
    }
    var settings = source.settings;
    var result = [], resultLen = 0;
    for (var i = 0, len = settings.length; i < len; i++) {
        var entry = settings[i];
        if (!entry.settings) {
            continue;
        }
        var scopes = void 0;
        if (typeof entry.scope === 'string') {
            var _scope = entry.scope;
            // remove leading commas
            _scope = _scope.replace(/^[,]+/, '');
            // remove trailing commans
            _scope = _scope.replace(/[,]+$/, '');
            scopes = _scope.split(',');
        }
        else if (Array.isArray(entry.scope)) {
            scopes = entry.scope;
        }
        else {
            scopes = [''];
        }
        var fontStyle = -1 /* NotSet */;
        if (typeof entry.settings.fontStyle === 'string') {
            fontStyle = 0 /* None */;
            var segments = entry.settings.fontStyle.split(' ');
            for (var j = 0, lenJ = segments.length; j < lenJ; j++) {
                var segment = segments[j];
                switch (segment) {
                    case 'italic':
                        fontStyle = fontStyle | 1 /* Italic */;
                        break;
                    case 'bold':
                        fontStyle = fontStyle | 2 /* Bold */;
                        break;
                    case 'underline':
                        fontStyle = fontStyle | 4 /* Underline */;
                        break;
                }
            }
        }
        var foreground = null;
        if (typeof entry.settings.foreground === 'string' && isValidHexColor(entry.settings.foreground)) {
            foreground = entry.settings.foreground;
        }
        var background = null;
        if (typeof entry.settings.background === 'string' && isValidHexColor(entry.settings.background)) {
            background = entry.settings.background;
        }
        for (var j = 0, lenJ = scopes.length; j < lenJ; j++) {
            var _scope = scopes[j].trim();
            var segments = _scope.split(' ');
            var scope = segments[segments.length - 1];
            var parentScopes = null;
            if (segments.length > 1) {
                parentScopes = segments.slice(0, segments.length - 1);
                parentScopes.reverse();
            }
            result[resultLen++] = new ParsedThemeRule(scope, parentScopes, i, fontStyle, foreground, background);
        }
    }
    return result;
}
exports.parseTheme = parseTheme;
/**
 * Resolve rules (i.e. inheritance).
 */
function resolveParsedThemeRules(parsedThemeRules, _colorMap) {
    // Sort rules lexicographically, and then by index if necessary
    parsedThemeRules.sort(function (a, b) {
        var r = strcmp(a.scope, b.scope);
        if (r !== 0) {
            return r;
        }
        r = strArrCmp(a.parentScopes, b.parentScopes);
        if (r !== 0) {
            return r;
        }
        return a.index - b.index;
    });
    // Determine defaults
    var defaultFontStyle = 0 /* None */;
    var defaultForeground = '#000000';
    var defaultBackground = '#ffffff';
    while (parsedThemeRules.length >= 1 && parsedThemeRules[0].scope === '') {
        var incomingDefaults = parsedThemeRules.shift();
        if (incomingDefaults.fontStyle !== -1 /* NotSet */) {
            defaultFontStyle = incomingDefaults.fontStyle;
        }
        if (incomingDefaults.foreground !== null) {
            defaultForeground = incomingDefaults.foreground;
        }
        if (incomingDefaults.background !== null) {
            defaultBackground = incomingDefaults.background;
        }
    }
    var colorMap = new ColorMap(_colorMap);
    var defaults = new ThemeTrieElementRule(0, null, defaultFontStyle, colorMap.getId(defaultForeground), colorMap.getId(defaultBackground));
    var root = new ThemeTrieElement(new ThemeTrieElementRule(0, null, -1 /* NotSet */, 0, 0), []);
    for (var i = 0, len = parsedThemeRules.length; i < len; i++) {
        var rule = parsedThemeRules[i];
        root.insert(0, rule.scope, rule.parentScopes, rule.fontStyle, colorMap.getId(rule.foreground), colorMap.getId(rule.background));
    }
    return new Theme(colorMap, defaults, root);
}
var ColorMap = /** @class */ (function () {
    function ColorMap(_colorMap) {
        this._lastColorId = 0;
        this._id2color = [];
        this._color2id = Object.create(null);
        if (Array.isArray(_colorMap)) {
            this._isFrozen = true;
            for (var i = 0, len = _colorMap.length; i < len; i++) {
                this._color2id[_colorMap[i]] = i;
                this._id2color[i] = _colorMap[i];
            }
        }
        else {
            this._isFrozen = false;
        }
    }
    ColorMap.prototype.getId = function (color) {
        if (color === null) {
            return 0;
        }
        color = color.toUpperCase();
        var value = this._color2id[color];
        if (value) {
            return value;
        }
        if (this._isFrozen) {
            throw new Error("Missing color in color map - " + color);
        }
        value = ++this._lastColorId;
        this._color2id[color] = value;
        this._id2color[value] = color;
        return value;
    };
    ColorMap.prototype.getColorMap = function () {
        return this._id2color.slice(0);
    };
    return ColorMap;
}());
exports.ColorMap = ColorMap;
var Theme = /** @class */ (function () {
    function Theme(colorMap, defaults, root) {
        this._colorMap = colorMap;
        this._root = root;
        this._defaults = defaults;
        this._cache = {};
    }
    Theme.createFromRawTheme = function (source, colorMap) {
        return this.createFromParsedTheme(parseTheme(source), colorMap);
    };
    Theme.createFromParsedTheme = function (source, colorMap) {
        return resolveParsedThemeRules(source, colorMap);
    };
    Theme.prototype.getColorMap = function () {
        return this._colorMap.getColorMap();
    };
    Theme.prototype.getDefaults = function () {
        return this._defaults;
    };
    Theme.prototype.match = function (scopeName) {
        if (!this._cache.hasOwnProperty(scopeName)) {
            this._cache[scopeName] = this._root.match(scopeName);
        }
        return this._cache[scopeName];
    };
    return Theme;
}());
exports.Theme = Theme;
function strcmp(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}
exports.strcmp = strcmp;
function strArrCmp(a, b) {
    if (a === null && b === null) {
        return 0;
    }
    if (!a) {
        return -1;
    }
    if (!b) {
        return 1;
    }
    var len1 = a.length;
    var len2 = b.length;
    if (len1 === len2) {
        for (var i = 0; i < len1; i++) {
            var res = strcmp(a[i], b[i]);
            if (res !== 0) {
                return res;
            }
        }
        return 0;
    }
    return len1 - len2;
}
exports.strArrCmp = strArrCmp;
var ThemeTrieElementRule = /** @class */ (function () {
    function ThemeTrieElementRule(scopeDepth, parentScopes, fontStyle, foreground, background) {
        this.scopeDepth = scopeDepth;
        this.parentScopes = parentScopes;
        this.fontStyle = fontStyle;
        this.foreground = foreground;
        this.background = background;
    }
    ThemeTrieElementRule.prototype.clone = function () {
        return new ThemeTrieElementRule(this.scopeDepth, this.parentScopes, this.fontStyle, this.foreground, this.background);
    };
    ThemeTrieElementRule.cloneArr = function (arr) {
        var r = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            r[i] = arr[i].clone();
        }
        return r;
    };
    ThemeTrieElementRule.prototype.acceptOverwrite = function (scopeDepth, fontStyle, foreground, background) {
        if (this.scopeDepth > scopeDepth) {
            console.log('how did this happen?');
        }
        else {
            this.scopeDepth = scopeDepth;
        }
        // console.log('TODO -> my depth: ' + this.scopeDepth + ', overwriting depth: ' + scopeDepth);
        if (fontStyle !== -1 /* NotSet */) {
            this.fontStyle = fontStyle;
        }
        if (foreground !== 0) {
            this.foreground = foreground;
        }
        if (background !== 0) {
            this.background = background;
        }
    };
    return ThemeTrieElementRule;
}());
exports.ThemeTrieElementRule = ThemeTrieElementRule;
var ThemeTrieElement = /** @class */ (function () {
    function ThemeTrieElement(mainRule, rulesWithParentScopes, children) {
        if (rulesWithParentScopes === void 0) { rulesWithParentScopes = []; }
        if (children === void 0) { children = {}; }
        this._mainRule = mainRule;
        this._rulesWithParentScopes = rulesWithParentScopes;
        this._children = children;
    }
    ThemeTrieElement._sortBySpecificity = function (arr) {
        if (arr.length === 1) {
            return arr;
        }
        arr.sort(this._cmpBySpecificity);
        return arr;
    };
    ThemeTrieElement._cmpBySpecificity = function (a, b) {
        if (a.scopeDepth === b.scopeDepth) {
            var aParentScopes = a.parentScopes;
            var bParentScopes = b.parentScopes;
            var aParentScopesLen = aParentScopes === null ? 0 : aParentScopes.length;
            var bParentScopesLen = bParentScopes === null ? 0 : bParentScopes.length;
            if (aParentScopesLen === bParentScopesLen) {
                for (var i = 0; i < aParentScopesLen; i++) {
                    var aLen = aParentScopes[i].length;
                    var bLen = bParentScopes[i].length;
                    if (aLen !== bLen) {
                        return bLen - aLen;
                    }
                }
            }
            return bParentScopesLen - aParentScopesLen;
        }
        return b.scopeDepth - a.scopeDepth;
    };
    ThemeTrieElement.prototype.match = function (scope) {
        if (scope === '') {
            return ThemeTrieElement._sortBySpecificity([].concat(this._mainRule).concat(this._rulesWithParentScopes));
        }
        var dotIndex = scope.indexOf('.');
        var head;
        var tail;
        if (dotIndex === -1) {
            head = scope;
            tail = '';
        }
        else {
            head = scope.substring(0, dotIndex);
            tail = scope.substring(dotIndex + 1);
        }
        if (this._children.hasOwnProperty(head)) {
            return this._children[head].match(tail);
        }
        return ThemeTrieElement._sortBySpecificity([].concat(this._mainRule).concat(this._rulesWithParentScopes));
    };
    ThemeTrieElement.prototype.insert = function (scopeDepth, scope, parentScopes, fontStyle, foreground, background) {
        if (scope === '') {
            this._doInsertHere(scopeDepth, parentScopes, fontStyle, foreground, background);
            return;
        }
        var dotIndex = scope.indexOf('.');
        var head;
        var tail;
        if (dotIndex === -1) {
            head = scope;
            tail = '';
        }
        else {
            head = scope.substring(0, dotIndex);
            tail = scope.substring(dotIndex + 1);
        }
        var child;
        if (this._children.hasOwnProperty(head)) {
            child = this._children[head];
        }
        else {
            child = new ThemeTrieElement(this._mainRule.clone(), ThemeTrieElementRule.cloneArr(this._rulesWithParentScopes));
            this._children[head] = child;
        }
        child.insert(scopeDepth + 1, tail, parentScopes, fontStyle, foreground, background);
    };
    ThemeTrieElement.prototype._doInsertHere = function (scopeDepth, parentScopes, fontStyle, foreground, background) {
        if (parentScopes === null) {
            // Merge into the main rule
            this._mainRule.acceptOverwrite(scopeDepth, fontStyle, foreground, background);
            return;
        }
        // Try to merge into existing rule
        for (var i = 0, len = this._rulesWithParentScopes.length; i < len; i++) {
            var rule = this._rulesWithParentScopes[i];
            if (strArrCmp(rule.parentScopes, parentScopes) === 0) {
                // bingo! => we get to merge this into an existing one
                rule.acceptOverwrite(scopeDepth, fontStyle, foreground, background);
                return;
            }
        }
        // Must add a new rule
        // Inherit from main rule
        if (fontStyle === -1 /* NotSet */) {
            fontStyle = this._mainRule.fontStyle;
        }
        if (foreground === 0) {
            foreground = this._mainRule.foreground;
        }
        if (background === 0) {
            background = this._mainRule.background;
        }
        this._rulesWithParentScopes.push(new ThemeTrieElementRule(scopeDepth, parentScopes, fontStyle, foreground, background));
    };
    return ThemeTrieElement;
}());
exports.ThemeTrieElement = ThemeTrieElement;
//# sourceMappingURL=theme.js.map
});
$load('./matcher', function(require, module, exports) {
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function createMatchers(selector, matchesName) {
    var results = [];
    var tokenizer = newTokenizer(selector);
    var token = tokenizer.next();
    while (token !== null) {
        var priority = 0;
        if (token.length === 2 && token.charAt(1) === ':') {
            switch (token.charAt(0)) {
                case 'R':
                    priority = 1;
                    break;
                case 'L':
                    priority = -1;
                    break;
                default:
                    console.log("Unknown priority " + token + " in scope selector");
            }
            token = tokenizer.next();
        }
        var matcher = parseConjunction();
        if (matcher) {
            results.push({ matcher: matcher, priority: priority });
        }
        if (token !== ',') {
            break;
        }
        token = tokenizer.next();
    }
    return results;
    function parseOperand() {
        if (token === '-') {
            token = tokenizer.next();
            var expressionToNegate_1 = parseOperand();
            return function (matcherInput) { return !!expressionToNegate_1 && !expressionToNegate_1(matcherInput); };
        }
        if (token === '(') {
            token = tokenizer.next();
            var expressionInParents = parseInnerExpression();
            if (token === ')') {
                token = tokenizer.next();
            }
            return expressionInParents;
        }
        if (isIdentifier(token)) {
            var identifiers_1 = [];
            do {
                identifiers_1.push(token);
                token = tokenizer.next();
            } while (isIdentifier(token));
            return function (matcherInput) { return matchesName(identifiers_1, matcherInput); };
        }
        return null;
    }
    function parseConjunction() {
        var matchers = [];
        var matcher = parseOperand();
        while (matcher) {
            matchers.push(matcher);
            matcher = parseOperand();
        }
        return function (matcherInput) { return matchers.every(function (matcher) { return matcher(matcherInput); }); }; // and
    }
    function parseInnerExpression() {
        var matchers = [];
        var matcher = parseConjunction();
        while (matcher) {
            matchers.push(matcher);
            if (token === '|' || token === ',') {
                do {
                    token = tokenizer.next();
                } while (token === '|' || token === ','); // ignore subsequent commas
            }
            else {
                break;
            }
            matcher = parseConjunction();
        }
        return function (matcherInput) { return matchers.some(function (matcher) { return matcher(matcherInput); }); }; // or
    }
}
exports.createMatchers = createMatchers;
function isIdentifier(token) {
    return !!token && !!token.match(/[\w\.:]+/);
}
function newTokenizer(input) {
    var regex = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g;
    var match = regex.exec(input);
    return {
        next: function () {
            if (!match) {
                return null;
            }
            var res = match[0];
            match = regex.exec(input);
            return res;
        }
    };
}
//# sourceMappingURL=matcher.js.map
});
$load('./debug', function(require, module, exports) {
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugFlags = {
    InDebugMode: (typeof process !== 'undefined' && !!process.env['VSCODE_TEXTMATE_DEBUG'])
};
//# sourceMappingURL=debug.js.map
});
$load('./json', function(require, module, exports) {
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function doFail(streamState, msg) {
    // console.log('Near offset ' + streamState.pos + ': ' + msg + ' ~~~' + streamState.source.substr(streamState.pos, 50) + '~~~');
    throw new Error('Near offset ' + streamState.pos + ': ' + msg + ' ~~~' + streamState.source.substr(streamState.pos, 50) + '~~~');
}
function parse(source, filename, withMetadata) {
    var streamState = new JSONStreamState(source);
    var token = new JSONToken();
    var state = 0 /* ROOT_STATE */;
    var cur = null;
    var stateStack = [];
    var objStack = [];
    function pushState() {
        stateStack.push(state);
        objStack.push(cur);
    }
    function popState() {
        state = stateStack.pop();
        cur = objStack.pop();
    }
    function fail(msg) {
        doFail(streamState, msg);
    }
    while (nextJSONToken(streamState, token)) {
        if (state === 0 /* ROOT_STATE */) {
            if (cur !== null) {
                fail('too many constructs in root');
            }
            if (token.type === 3 /* LEFT_CURLY_BRACKET */) {
                cur = {};
                if (withMetadata) {
                    cur.$vscodeTextmateLocation = token.toLocation(filename);
                }
                pushState();
                state = 1 /* DICT_STATE */;
                continue;
            }
            if (token.type === 2 /* LEFT_SQUARE_BRACKET */) {
                cur = [];
                pushState();
                state = 4 /* ARR_STATE */;
                continue;
            }
            fail('unexpected token in root');
        }
        if (state === 2 /* DICT_STATE_COMMA */) {
            if (token.type === 5 /* RIGHT_CURLY_BRACKET */) {
                popState();
                continue;
            }
            if (token.type === 7 /* COMMA */) {
                state = 3 /* DICT_STATE_NO_CLOSE */;
                continue;
            }
            fail('expected , or }');
        }
        if (state === 1 /* DICT_STATE */ || state === 3 /* DICT_STATE_NO_CLOSE */) {
            if (state === 1 /* DICT_STATE */ && token.type === 5 /* RIGHT_CURLY_BRACKET */) {
                popState();
                continue;
            }
            if (token.type === 1 /* STRING */) {
                var keyValue = token.value;
                if (!nextJSONToken(streamState, token) || token.type !== 6 /* COLON */) {
                    fail('expected colon');
                }
                if (!nextJSONToken(streamState, token)) {
                    fail('expected value');
                }
                state = 2 /* DICT_STATE_COMMA */;
                if (token.type === 1 /* STRING */) {
                    cur[keyValue] = token.value;
                    continue;
                }
                if (token.type === 8 /* NULL */) {
                    cur[keyValue] = null;
                    continue;
                }
                if (token.type === 9 /* TRUE */) {
                    cur[keyValue] = true;
                    continue;
                }
                if (token.type === 10 /* FALSE */) {
                    cur[keyValue] = false;
                    continue;
                }
                if (token.type === 11 /* NUMBER */) {
                    cur[keyValue] = parseFloat(token.value);
                    continue;
                }
                if (token.type === 2 /* LEFT_SQUARE_BRACKET */) {
                    var newArr = [];
                    cur[keyValue] = newArr;
                    pushState();
                    state = 4 /* ARR_STATE */;
                    cur = newArr;
                    continue;
                }
                if (token.type === 3 /* LEFT_CURLY_BRACKET */) {
                    var newDict = {};
                    if (withMetadata) {
                        newDict.$vscodeTextmateLocation = token.toLocation(filename);
                    }
                    cur[keyValue] = newDict;
                    pushState();
                    state = 1 /* DICT_STATE */;
                    cur = newDict;
                    continue;
                }
            }
            fail('unexpected token in dict');
        }
        if (state === 5 /* ARR_STATE_COMMA */) {
            if (token.type === 4 /* RIGHT_SQUARE_BRACKET */) {
                popState();
                continue;
            }
            if (token.type === 7 /* COMMA */) {
                state = 6 /* ARR_STATE_NO_CLOSE */;
                continue;
            }
            fail('expected , or ]');
        }
        if (state === 4 /* ARR_STATE */ || state === 6 /* ARR_STATE_NO_CLOSE */) {
            if (state === 4 /* ARR_STATE */ && token.type === 4 /* RIGHT_SQUARE_BRACKET */) {
                popState();
                continue;
            }
            state = 5 /* ARR_STATE_COMMA */;
            if (token.type === 1 /* STRING */) {
                cur.push(token.value);
                continue;
            }
            if (token.type === 8 /* NULL */) {
                cur.push(null);
                continue;
            }
            if (token.type === 9 /* TRUE */) {
                cur.push(true);
                continue;
            }
            if (token.type === 10 /* FALSE */) {
                cur.push(false);
                continue;
            }
            if (token.type === 11 /* NUMBER */) {
                cur.push(parseFloat(token.value));
                continue;
            }
            if (token.type === 2 /* LEFT_SQUARE_BRACKET */) {
                var newArr = [];
                cur.push(newArr);
                pushState();
                state = 4 /* ARR_STATE */;
                cur = newArr;
                continue;
            }
            if (token.type === 3 /* LEFT_CURLY_BRACKET */) {
                var newDict = {};
                if (withMetadata) {
                    newDict.$vscodeTextmateLocation = token.toLocation(filename);
                }
                cur.push(newDict);
                pushState();
                state = 1 /* DICT_STATE */;
                cur = newDict;
                continue;
            }
            fail('unexpected token in array');
        }
        fail('unknown state');
    }
    if (objStack.length !== 0) {
        fail('unclosed constructs');
    }
    return cur;
}
exports.parse = parse;
var JSONStreamState = /** @class */ (function () {
    function JSONStreamState(source) {
        this.source = source;
        this.pos = 0;
        this.len = source.length;
        this.line = 1;
        this.char = 0;
    }
    return JSONStreamState;
}());
var JSONToken = /** @class */ (function () {
    function JSONToken() {
        this.value = null;
        this.type = 0 /* UNKNOWN */;
        this.offset = -1;
        this.len = -1;
        this.line = -1;
        this.char = -1;
    }
    JSONToken.prototype.toLocation = function (filename) {
        return {
            filename: filename,
            line: this.line,
            char: this.char
        };
    };
    return JSONToken;
}());
/**
 * precondition: the string is known to be valid JSON (https://www.ietf.org/rfc/rfc4627.txt)
 */
function nextJSONToken(_state, _out) {
    _out.value = null;
    _out.type = 0 /* UNKNOWN */;
    _out.offset = -1;
    _out.len = -1;
    _out.line = -1;
    _out.char = -1;
    var source = _state.source;
    var pos = _state.pos;
    var len = _state.len;
    var line = _state.line;
    var char = _state.char;
    //------------------------ skip whitespace
    var chCode;
    do {
        if (pos >= len) {
            return false; /*EOS*/
        }
        chCode = source.charCodeAt(pos);
        if (chCode === 32 /* SPACE */ || chCode === 9 /* HORIZONTAL_TAB */ || chCode === 13 /* CARRIAGE_RETURN */) {
            // regular whitespace
            pos++;
            char++;
            continue;
        }
        if (chCode === 10 /* LINE_FEED */) {
            // newline
            pos++;
            line++;
            char = 0;
            continue;
        }
        // not whitespace
        break;
    } while (true);
    _out.offset = pos;
    _out.line = line;
    _out.char = char;
    if (chCode === 34 /* QUOTATION_MARK */) {
        //------------------------ strings
        _out.type = 1 /* STRING */;
        pos++;
        char++;
        do {
            if (pos >= len) {
                return false; /*EOS*/
            }
            chCode = source.charCodeAt(pos);
            pos++;
            char++;
            if (chCode === 92 /* BACKSLASH */) {
                // skip next char
                pos++;
                char++;
                continue;
            }
            if (chCode === 34 /* QUOTATION_MARK */) {
                // end of the string
                break;
            }
        } while (true);
        _out.value = source.substring(_out.offset + 1, pos - 1).replace(/\\u([0-9A-Fa-f]{4})/g, function (_, m0) {
            return String.fromCodePoint(parseInt(m0, 16));
        }).replace(/\\(.)/g, function (_, m0) {
            switch (m0) {
                case '"': return '"';
                case '\\': return '\\';
                case '/': return '/';
                case 'b': return '\b';
                case 'f': return '\f';
                case 'n': return '\n';
                case 'r': return '\r';
                case 't': return '\t';
                default: doFail(_state, 'invalid escape sequence');
            }
            throw new Error('unreachable');
        });
    }
    else if (chCode === 91 /* LEFT_SQUARE_BRACKET */) {
        _out.type = 2 /* LEFT_SQUARE_BRACKET */;
        pos++;
        char++;
    }
    else if (chCode === 123 /* LEFT_CURLY_BRACKET */) {
        _out.type = 3 /* LEFT_CURLY_BRACKET */;
        pos++;
        char++;
    }
    else if (chCode === 93 /* RIGHT_SQUARE_BRACKET */) {
        _out.type = 4 /* RIGHT_SQUARE_BRACKET */;
        pos++;
        char++;
    }
    else if (chCode === 125 /* RIGHT_CURLY_BRACKET */) {
        _out.type = 5 /* RIGHT_CURLY_BRACKET */;
        pos++;
        char++;
    }
    else if (chCode === 58 /* COLON */) {
        _out.type = 6 /* COLON */;
        pos++;
        char++;
    }
    else if (chCode === 44 /* COMMA */) {
        _out.type = 7 /* COMMA */;
        pos++;
        char++;
    }
    else if (chCode === 110 /* n */) {
        //------------------------ null
        _out.type = 8 /* NULL */;
        pos++;
        char++;
        chCode = source.charCodeAt(pos);
        if (chCode !== 117 /* u */) {
            return false; /* INVALID */
        }
        pos++;
        char++;
        chCode = source.charCodeAt(pos);
        if (chCode !== 108 /* l */) {
            return false; /* INVALID */
        }
        pos++;
        char++;
        chCode = source.charCodeAt(pos);
        if (chCode !== 108 /* l */) {
            return false; /* INVALID */
        }
        pos++;
        char++;
    }
    else if (chCode === 116 /* t */) {
        //------------------------ true
        _out.type = 9 /* TRUE */;
        pos++;
        char++;
        chCode = source.charCodeAt(pos);
        if (chCode !== 114 /* r */) {
            return false; /* INVALID */
        }
        pos++;
        char++;
        chCode = source.charCodeAt(pos);
        if (chCode !== 117 /* u */) {
            return false; /* INVALID */
        }
        pos++;
        char++;
        chCode = source.charCodeAt(pos);
        if (chCode !== 101 /* e */) {
            return false; /* INVALID */
        }
        pos++;
        char++;
    }
    else if (chCode === 102 /* f */) {
        //------------------------ false
        _out.type = 10 /* FALSE */;
        pos++;
        char++;
        chCode = source.charCodeAt(pos);
        if (chCode !== 97 /* a */) {
            return false; /* INVALID */
        }
        pos++;
        char++;
        chCode = source.charCodeAt(pos);
        if (chCode !== 108 /* l */) {
            return false; /* INVALID */
        }
        pos++;
        char++;
        chCode = source.charCodeAt(pos);
        if (chCode !== 115 /* s */) {
            return false; /* INVALID */
        }
        pos++;
        char++;
        chCode = source.charCodeAt(pos);
        if (chCode !== 101 /* e */) {
            return false; /* INVALID */
        }
        pos++;
        char++;
    }
    else {
        //------------------------ numbers
        _out.type = 11 /* NUMBER */;
        do {
            if (pos >= len) {
                return false; /*EOS*/
            }
            chCode = source.charCodeAt(pos);
            if (chCode === 46 /* DOT */
                || (chCode >= 48 /* D0 */ && chCode <= 57 /* D9 */)
                || (chCode === 101 /* e */ || chCode === 69 /* E */)
                || (chCode === 45 /* MINUS */ || chCode === 43 /* PLUS */)) {
                // looks like a piece of a number
                pos++;
                char++;
                continue;
            }
            // pos--; char--;
            break;
        } while (true);
    }
    _out.len = pos - _out.offset;
    if (_out.value === null) {
        _out.value = source.substr(_out.offset, _out.len);
    }
    _state.pos = pos;
    _state.line = line;
    _state.char = char;
    // console.log('PRODUCING TOKEN: ', _out.value, JSONTokenType[_out.type]);
    return true;
}
//# sourceMappingURL=json.js.map
});
$load('./plist', function(require, module, exports) {
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function parseWithLocation(content, filename, locationKeyName) {
    return _parse(content, filename, locationKeyName);
}
exports.parseWithLocation = parseWithLocation;
/**
 * A very fast plist parser
 */
function parse(content) {
    return _parse(content, null, null);
}
exports.parse = parse;
function _parse(content, filename, locationKeyName) {
    var len = content.length;
    var pos = 0;
    var line = 1;
    var char = 0;
    // Skip UTF8 BOM
    if (len > 0 && content.charCodeAt(0) === 65279 /* BOM */) {
        pos = 1;
    }
    function advancePosBy(by) {
        if (locationKeyName === null) {
            pos = pos + by;
        }
        else {
            while (by > 0) {
                var chCode = content.charCodeAt(pos);
                if (chCode === 10 /* LINE_FEED */) {
                    pos++;
                    line++;
                    char = 0;
                }
                else {
                    pos++;
                    char++;
                }
                by--;
            }
        }
    }
    function advancePosTo(to) {
        if (locationKeyName === null) {
            pos = to;
        }
        else {
            advancePosBy(to - pos);
        }
    }
    function skipWhitespace() {
        while (pos < len) {
            var chCode = content.charCodeAt(pos);
            if (chCode !== 32 /* SPACE */ && chCode !== 9 /* TAB */ && chCode !== 13 /* CARRIAGE_RETURN */ && chCode !== 10 /* LINE_FEED */) {
                break;
            }
            advancePosBy(1);
        }
    }
    function advanceIfStartsWith(str) {
        if (content.substr(pos, str.length) === str) {
            advancePosBy(str.length);
            return true;
        }
        return false;
    }
    function advanceUntil(str) {
        var nextOccurence = content.indexOf(str, pos);
        if (nextOccurence !== -1) {
            advancePosTo(nextOccurence + str.length);
        }
        else {
            // EOF
            advancePosTo(len);
        }
    }
    function captureUntil(str) {
        var nextOccurence = content.indexOf(str, pos);
        if (nextOccurence !== -1) {
            var r = content.substring(pos, nextOccurence);
            advancePosTo(nextOccurence + str.length);
            return r;
        }
        else {
            // EOF
            var r = content.substr(pos);
            advancePosTo(len);
            return r;
        }
    }
    var state = 0 /* ROOT_STATE */;
    var cur = null;
    var stateStack = [];
    var objStack = [];
    var curKey = null;
    function pushState(newState, newCur) {
        stateStack.push(state);
        objStack.push(cur);
        state = newState;
        cur = newCur;
    }
    function popState() {
        if (stateStack.length === 0) {
            return fail('illegal state stack');
        }
        state = stateStack.pop();
        cur = objStack.pop();
    }
    function fail(msg) {
        throw new Error('Near offset ' + pos + ': ' + msg + ' ~~~' + content.substr(pos, 50) + '~~~');
    }
    var dictState = {
        enterDict: function () {
            if (curKey === null) {
                return fail('missing <key>');
            }
            var newDict = {};
            if (locationKeyName !== null) {
                newDict[locationKeyName] = {
                    filename: filename,
                    line: line,
                    char: char
                };
            }
            cur[curKey] = newDict;
            curKey = null;
            pushState(1 /* DICT_STATE */, newDict);
        },
        enterArray: function () {
            if (curKey === null) {
                return fail('missing <key>');
            }
            var newArr = [];
            cur[curKey] = newArr;
            curKey = null;
            pushState(2 /* ARR_STATE */, newArr);
        }
    };
    var arrState = {
        enterDict: function () {
            var newDict = {};
            if (locationKeyName !== null) {
                newDict[locationKeyName] = {
                    filename: filename,
                    line: line,
                    char: char
                };
            }
            cur.push(newDict);
            pushState(1 /* DICT_STATE */, newDict);
        },
        enterArray: function () {
            var newArr = [];
            cur.push(newArr);
            pushState(2 /* ARR_STATE */, newArr);
        }
    };
    function enterDict() {
        if (state === 1 /* DICT_STATE */) {
            dictState.enterDict();
        }
        else if (state === 2 /* ARR_STATE */) {
            arrState.enterDict();
        }
        else { // ROOT_STATE
            cur = {};
            if (locationKeyName !== null) {
                cur[locationKeyName] = {
                    filename: filename,
                    line: line,
                    char: char
                };
            }
            pushState(1 /* DICT_STATE */, cur);
        }
    }
    function leaveDict() {
        if (state === 1 /* DICT_STATE */) {
            popState();
        }
        else if (state === 2 /* ARR_STATE */) {
            return fail('unexpected </dict>');
        }
        else { // ROOT_STATE
            return fail('unexpected </dict>');
        }
    }
    function enterArray() {
        if (state === 1 /* DICT_STATE */) {
            dictState.enterArray();
        }
        else if (state === 2 /* ARR_STATE */) {
            arrState.enterArray();
        }
        else { // ROOT_STATE
            cur = [];
            pushState(2 /* ARR_STATE */, cur);
        }
    }
    function leaveArray() {
        if (state === 1 /* DICT_STATE */) {
            return fail('unexpected </array>');
        }
        else if (state === 2 /* ARR_STATE */) {
            popState();
        }
        else { // ROOT_STATE
            return fail('unexpected </array>');
        }
    }
    function acceptKey(val) {
        if (state === 1 /* DICT_STATE */) {
            if (curKey !== null) {
                return fail('too many <key>');
            }
            curKey = val;
        }
        else if (state === 2 /* ARR_STATE */) {
            return fail('unexpected <key>');
        }
        else { // ROOT_STATE
            return fail('unexpected <key>');
        }
    }
    function acceptString(val) {
        if (state === 1 /* DICT_STATE */) {
            if (curKey === null) {
                return fail('missing <key>');
            }
            cur[curKey] = val;
            curKey = null;
        }
        else if (state === 2 /* ARR_STATE */) {
            cur.push(val);
        }
        else { // ROOT_STATE
            cur = val;
        }
    }
    function acceptReal(val) {
        if (isNaN(val)) {
            return fail('cannot parse float');
        }
        if (state === 1 /* DICT_STATE */) {
            if (curKey === null) {
                return fail('missing <key>');
            }
            cur[curKey] = val;
            curKey = null;
        }
        else if (state === 2 /* ARR_STATE */) {
            cur.push(val);
        }
        else { // ROOT_STATE
            cur = val;
        }
    }
    function acceptInteger(val) {
        if (isNaN(val)) {
            return fail('cannot parse integer');
        }
        if (state === 1 /* DICT_STATE */) {
            if (curKey === null) {
                return fail('missing <key>');
            }
            cur[curKey] = val;
            curKey = null;
        }
        else if (state === 2 /* ARR_STATE */) {
            cur.push(val);
        }
        else { // ROOT_STATE
            cur = val;
        }
    }
    function acceptDate(val) {
        if (state === 1 /* DICT_STATE */) {
            if (curKey === null) {
                return fail('missing <key>');
            }
            cur[curKey] = val;
            curKey = null;
        }
        else if (state === 2 /* ARR_STATE */) {
            cur.push(val);
        }
        else { // ROOT_STATE
            cur = val;
        }
    }
    function acceptData(val) {
        if (state === 1 /* DICT_STATE */) {
            if (curKey === null) {
                return fail('missing <key>');
            }
            cur[curKey] = val;
            curKey = null;
        }
        else if (state === 2 /* ARR_STATE */) {
            cur.push(val);
        }
        else { // ROOT_STATE
            cur = val;
        }
    }
    function acceptBool(val) {
        if (state === 1 /* DICT_STATE */) {
            if (curKey === null) {
                return fail('missing <key>');
            }
            cur[curKey] = val;
            curKey = null;
        }
        else if (state === 2 /* ARR_STATE */) {
            cur.push(val);
        }
        else { // ROOT_STATE
            cur = val;
        }
    }
    function escapeVal(str) {
        return str.replace(/&#([0-9]+);/g, function (_, m0) {
            return String.fromCodePoint(parseInt(m0, 10));
        }).replace(/&#x([0-9a-f]+);/g, function (_, m0) {
            return String.fromCodePoint(parseInt(m0, 16));
        }).replace(/&amp;|&lt;|&gt;|&quot;|&apos;/g, function (_) {
            switch (_) {
                case '&amp;': return '&';
                case '&lt;': return '<';
                case '&gt;': return '>';
                case '&quot;': return '"';
                case '&apos;': return '\'';
            }
            return _;
        });
    }
    function parseOpenTag() {
        var r = captureUntil('>');
        var isClosed = false;
        if (r.charCodeAt(r.length - 1) === 47 /* SLASH */) {
            isClosed = true;
            r = r.substring(0, r.length - 1);
        }
        return {
            name: r.trim(),
            isClosed: isClosed
        };
    }
    function parseTagValue(tag) {
        if (tag.isClosed) {
            return '';
        }
        var val = captureUntil('</');
        advanceUntil('>');
        return escapeVal(val);
    }
    while (pos < len) {
        skipWhitespace();
        if (pos >= len) {
            break;
        }
        var chCode = content.charCodeAt(pos);
        advancePosBy(1);
        if (chCode !== 60 /* LESS_THAN */) {
            return fail('expected <');
        }
        if (pos >= len) {
            return fail('unexpected end of input');
        }
        var peekChCode = content.charCodeAt(pos);
        if (peekChCode === 63 /* QUESTION_MARK */) {
            advancePosBy(1);
            advanceUntil('?>');
            continue;
        }
        if (peekChCode === 33 /* EXCLAMATION_MARK */) {
            advancePosBy(1);
            if (advanceIfStartsWith('--')) {
                advanceUntil('-->');
                continue;
            }
            advanceUntil('>');
            continue;
        }
        if (peekChCode === 47 /* SLASH */) {
            advancePosBy(1);
            skipWhitespace();
            if (advanceIfStartsWith('plist')) {
                advanceUntil('>');
                continue;
            }
            if (advanceIfStartsWith('dict')) {
                advanceUntil('>');
                leaveDict();
                continue;
            }
            if (advanceIfStartsWith('array')) {
                advanceUntil('>');
                leaveArray();
                continue;
            }
            return fail('unexpected closed tag');
        }
        var tag = parseOpenTag();
        switch (tag.name) {
            case 'dict':
                enterDict();
                if (tag.isClosed) {
                    leaveDict();
                }
                continue;
            case 'array':
                enterArray();
                if (tag.isClosed) {
                    leaveArray();
                }
                continue;
            case 'key':
                acceptKey(parseTagValue(tag));
                continue;
            case 'string':
                acceptString(parseTagValue(tag));
                continue;
            case 'real':
                acceptReal(parseFloat(parseTagValue(tag)));
                continue;
            case 'integer':
                acceptInteger(parseInt(parseTagValue(tag), 10));
                continue;
            case 'date':
                acceptDate(new Date(parseTagValue(tag)));
                continue;
            case 'data':
                acceptData(parseTagValue(tag));
                continue;
            case 'true':
                parseTagValue(tag);
                acceptBool(true);
                continue;
            case 'false':
                parseTagValue(tag);
                acceptBool(false);
                continue;
        }
        if (/^plist/.test(tag.name)) {
            continue;
        }
        return fail('unexpected opened tag ' + tag.name);
    }
    return cur;
}
//# sourceMappingURL=plist.js.map
});
$load('./grammarReader', function(require, module, exports) {
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var plist = require("./plist");
var debug_1 = require("./debug");
var json_1 = require("./json");
function parseRawGrammar(content, filePath) {
    if (filePath === void 0) { filePath = null; }
    if (filePath !== null && /\.json$/.test(filePath)) {
        return parseJSONGrammar(content, filePath);
    }
    return parsePLISTGrammar(content, filePath);
}
exports.parseRawGrammar = parseRawGrammar;
function parseJSONGrammar(contents, filename) {
    if (debug_1.DebugFlags.InDebugMode) {
        return json_1.parse(contents, filename, true);
    }
    return JSON.parse(contents);
}
function parsePLISTGrammar(contents, filename) {
    if (debug_1.DebugFlags.InDebugMode) {
        return plist.parseWithLocation(contents, filename, '$vscodeTextmateLocation');
    }
    return plist.parse(contents);
}
//# sourceMappingURL=grammarReader.js.map
});
$load('./rule', function(require, module, exports) {
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
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
var utils_1 = require("./utils");
var HAS_BACK_REFERENCES = /\\(\d+)/;
var BACK_REFERENCING_END = /\\(\d+)/g;
var Rule = /** @class */ (function () {
    function Rule($location, id, name, contentName) {
        this.$location = $location;
        this.id = id;
        this._name = name || null;
        this._nameIsCapturing = utils_1.RegexSource.hasCaptures(this._name);
        this._contentName = contentName || null;
        this._contentNameIsCapturing = utils_1.RegexSource.hasCaptures(this._contentName);
    }
    Object.defineProperty(Rule.prototype, "debugName", {
        get: function () {
            var location = this.$location ? utils_1.basename(this.$location.filename) + ":" + this.$location.line : 'unknown';
            return this.constructor.name + "#" + this.id + " @ " + location;
        },
        enumerable: true,
        configurable: true
    });
    Rule.prototype.getName = function (lineText, captureIndices) {
        if (!this._nameIsCapturing || this._name === null || lineText === null || captureIndices === null) {
            return this._name;
        }
        return utils_1.RegexSource.replaceCaptures(this._name, lineText, captureIndices);
    };
    Rule.prototype.getContentName = function (lineText, captureIndices) {
        if (!this._contentNameIsCapturing || this._contentName === null) {
            return this._contentName;
        }
        return utils_1.RegexSource.replaceCaptures(this._contentName, lineText, captureIndices);
    };
    return Rule;
}());
exports.Rule = Rule;
var CaptureRule = /** @class */ (function (_super) {
    __extends(CaptureRule, _super);
    function CaptureRule($location, id, name, contentName, retokenizeCapturedWithRuleId) {
        var _this = _super.call(this, $location, id, name, contentName) || this;
        _this.retokenizeCapturedWithRuleId = retokenizeCapturedWithRuleId;
        return _this;
    }
    CaptureRule.prototype.collectPatternsRecursive = function (grammar, out, isFirst) {
        throw new Error('Not supported!');
    };
    CaptureRule.prototype.compile = function (grammar, endRegexSource, allowA, allowG) {
        throw new Error('Not supported!');
    };
    return CaptureRule;
}(Rule));
exports.CaptureRule = CaptureRule;
var RegExpSource = /** @class */ (function () {
    function RegExpSource(regExpSource, ruleId, handleAnchors) {
        if (handleAnchors === void 0) { handleAnchors = true; }
        if (handleAnchors) {
            if (regExpSource) {
                var len = regExpSource.length;
                var lastPushedPos = 0;
                var output = [];
                var hasAnchor = false;
                for (var pos = 0; pos < len; pos++) {
                    var ch = regExpSource.charAt(pos);
                    if (ch === '\\') {
                        if (pos + 1 < len) {
                            var nextCh = regExpSource.charAt(pos + 1);
                            if (nextCh === 'z') {
                                output.push(regExpSource.substring(lastPushedPos, pos));
                                output.push('$(?!\\n)(?<!\\n)');
                                lastPushedPos = pos + 2;
                            }
                            else if (nextCh === 'A' || nextCh === 'G') {
                                hasAnchor = true;
                            }
                            pos++;
                        }
                    }
                }
                this.hasAnchor = hasAnchor;
                if (lastPushedPos === 0) {
                    // No \z hit
                    this.source = regExpSource;
                }
                else {
                    output.push(regExpSource.substring(lastPushedPos, len));
                    this.source = output.join('');
                }
            }
            else {
                this.hasAnchor = false;
                this.source = regExpSource;
            }
        }
        else {
            this.hasAnchor = false;
            this.source = regExpSource;
        }
        if (this.hasAnchor) {
            this._anchorCache = this._buildAnchorCache();
        }
        else {
            this._anchorCache = null;
        }
        this.ruleId = ruleId;
        this.hasBackReferences = HAS_BACK_REFERENCES.test(this.source);
        // console.log('input: ' + regExpSource + ' => ' + this.source + ', ' + this.hasAnchor);
    }
    RegExpSource.prototype.clone = function () {
        return new RegExpSource(this.source, this.ruleId, true);
    };
    RegExpSource.prototype.setSource = function (newSource) {
        if (this.source === newSource) {
            return;
        }
        this.source = newSource;
        if (this.hasAnchor) {
            this._anchorCache = this._buildAnchorCache();
        }
    };
    RegExpSource.prototype.resolveBackReferences = function (lineText, captureIndices) {
        var capturedValues = captureIndices.map(function (capture) {
            return lineText.substring(capture.start, capture.end);
        });
        BACK_REFERENCING_END.lastIndex = 0;
        return this.source.replace(BACK_REFERENCING_END, function (match, g1) {
            return escapeRegExpCharacters(capturedValues[parseInt(g1, 10)] || '');
        });
    };
    RegExpSource.prototype._buildAnchorCache = function () {
        var A0_G0_result = [];
        var A0_G1_result = [];
        var A1_G0_result = [];
        var A1_G1_result = [];
        var pos, len, ch, nextCh;
        for (pos = 0, len = this.source.length; pos < len; pos++) {
            ch = this.source.charAt(pos);
            A0_G0_result[pos] = ch;
            A0_G1_result[pos] = ch;
            A1_G0_result[pos] = ch;
            A1_G1_result[pos] = ch;
            if (ch === '\\') {
                if (pos + 1 < len) {
                    nextCh = this.source.charAt(pos + 1);
                    if (nextCh === 'A') {
                        A0_G0_result[pos + 1] = '\uFFFF';
                        A0_G1_result[pos + 1] = '\uFFFF';
                        A1_G0_result[pos + 1] = 'A';
                        A1_G1_result[pos + 1] = 'A';
                    }
                    else if (nextCh === 'G') {
                        A0_G0_result[pos + 1] = '\uFFFF';
                        A0_G1_result[pos + 1] = 'G';
                        A1_G0_result[pos + 1] = '\uFFFF';
                        A1_G1_result[pos + 1] = 'G';
                    }
                    else {
                        A0_G0_result[pos + 1] = nextCh;
                        A0_G1_result[pos + 1] = nextCh;
                        A1_G0_result[pos + 1] = nextCh;
                        A1_G1_result[pos + 1] = nextCh;
                    }
                    pos++;
                }
            }
        }
        return {
            A0_G0: A0_G0_result.join(''),
            A0_G1: A0_G1_result.join(''),
            A1_G0: A1_G0_result.join(''),
            A1_G1: A1_G1_result.join('')
        };
    };
    RegExpSource.prototype.resolveAnchors = function (allowA, allowG) {
        if (!this.hasAnchor || !this._anchorCache) {
            return this.source;
        }
        if (allowA) {
            if (allowG) {
                return this._anchorCache.A1_G1;
            }
            else {
                return this._anchorCache.A1_G0;
            }
        }
        else {
            if (allowG) {
                return this._anchorCache.A0_G1;
            }
            else {
                return this._anchorCache.A0_G0;
            }
        }
    };
    return RegExpSource;
}());
exports.RegExpSource = RegExpSource;
var RegExpSourceList = /** @class */ (function () {
    function RegExpSourceList() {
        this._items = [];
        this._hasAnchors = false;
        this._cached = null;
        this._anchorCache = {
            A0_G0: null,
            A0_G1: null,
            A1_G0: null,
            A1_G1: null
        };
    }
    RegExpSourceList.prototype.push = function (item) {
        this._items.push(item);
        this._hasAnchors = this._hasAnchors || item.hasAnchor;
    };
    RegExpSourceList.prototype.unshift = function (item) {
        this._items.unshift(item);
        this._hasAnchors = this._hasAnchors || item.hasAnchor;
    };
    RegExpSourceList.prototype.length = function () {
        return this._items.length;
    };
    RegExpSourceList.prototype.setSource = function (index, newSource) {
        if (this._items[index].source !== newSource) {
            // bust the cache
            this._cached = null;
            this._anchorCache.A0_G0 = null;
            this._anchorCache.A0_G1 = null;
            this._anchorCache.A1_G0 = null;
            this._anchorCache.A1_G1 = null;
            this._items[index].setSource(newSource);
        }
    };
    RegExpSourceList.prototype.compile = function (onigLib, allowA, allowG) {
        if (!this._hasAnchors) {
            if (!this._cached) {
                var regExps = this._items.map(function (e) { return e.source; });
                this._cached = {
                    scanner: onigLib.createOnigScanner(regExps),
                    rules: this._items.map(function (e) { return e.ruleId; }),
                    debugRegExps: regExps
                };
            }
            return this._cached;
        }
        else {
            if (allowA) {
                if (allowG) {
                    if (!this._anchorCache.A1_G1) {
                        this._anchorCache.A1_G1 = this._resolveAnchors(onigLib, allowA, allowG);
                    }
                    return this._anchorCache.A1_G1;
                }
                else {
                    if (!this._anchorCache.A1_G0) {
                        this._anchorCache.A1_G0 = this._resolveAnchors(onigLib, allowA, allowG);
                    }
                    return this._anchorCache.A1_G0;
                }
            }
            else {
                if (allowG) {
                    if (!this._anchorCache.A0_G1) {
                        this._anchorCache.A0_G1 = this._resolveAnchors(onigLib, allowA, allowG);
                    }
                    return this._anchorCache.A0_G1;
                }
                else {
                    if (!this._anchorCache.A0_G0) {
                        this._anchorCache.A0_G0 = this._resolveAnchors(onigLib, allowA, allowG);
                    }
                    return this._anchorCache.A0_G0;
                }
            }
        }
    };
    RegExpSourceList.prototype._resolveAnchors = function (onigLib, allowA, allowG) {
        var regExps = this._items.map(function (e) { return e.resolveAnchors(allowA, allowG); });
        return {
            scanner: onigLib.createOnigScanner(regExps),
            rules: this._items.map(function (e) { return e.ruleId; }),
            debugRegExps: regExps
        };
    };
    return RegExpSourceList;
}());
exports.RegExpSourceList = RegExpSourceList;
var MatchRule = /** @class */ (function (_super) {
    __extends(MatchRule, _super);
    function MatchRule($location, id, name, match, captures) {
        var _this = _super.call(this, $location, id, name, null) || this;
        _this._match = new RegExpSource(match, _this.id);
        _this.captures = captures;
        _this._cachedCompiledPatterns = null;
        return _this;
    }
    Object.defineProperty(MatchRule.prototype, "debugMatchRegExp", {
        get: function () {
            return "" + this._match.source;
        },
        enumerable: true,
        configurable: true
    });
    MatchRule.prototype.collectPatternsRecursive = function (grammar, out, isFirst) {
        out.push(this._match);
    };
    MatchRule.prototype.compile = function (grammar, endRegexSource, allowA, allowG) {
        if (!this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns = new RegExpSourceList();
            this.collectPatternsRecursive(grammar, this._cachedCompiledPatterns, true);
        }
        return this._cachedCompiledPatterns.compile(grammar, allowA, allowG);
    };
    return MatchRule;
}(Rule));
exports.MatchRule = MatchRule;
var IncludeOnlyRule = /** @class */ (function (_super) {
    __extends(IncludeOnlyRule, _super);
    function IncludeOnlyRule($location, id, name, contentName, patterns) {
        var _this = _super.call(this, $location, id, name, contentName) || this;
        _this.patterns = patterns.patterns;
        _this.hasMissingPatterns = patterns.hasMissingPatterns;
        _this._cachedCompiledPatterns = null;
        return _this;
    }
    IncludeOnlyRule.prototype.collectPatternsRecursive = function (grammar, out, isFirst) {
        var i, len, rule;
        for (i = 0, len = this.patterns.length; i < len; i++) {
            rule = grammar.getRule(this.patterns[i]);
            rule.collectPatternsRecursive(grammar, out, false);
        }
    };
    IncludeOnlyRule.prototype.compile = function (grammar, endRegexSource, allowA, allowG) {
        if (!this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns = new RegExpSourceList();
            this.collectPatternsRecursive(grammar, this._cachedCompiledPatterns, true);
        }
        return this._cachedCompiledPatterns.compile(grammar, allowA, allowG);
    };
    return IncludeOnlyRule;
}(Rule));
exports.IncludeOnlyRule = IncludeOnlyRule;
function escapeRegExpCharacters(value) {
    return value.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&');
}
var BeginEndRule = /** @class */ (function (_super) {
    __extends(BeginEndRule, _super);
    function BeginEndRule($location, id, name, contentName, begin, beginCaptures, end, endCaptures, applyEndPatternLast, patterns) {
        var _this = _super.call(this, $location, id, name, contentName) || this;
        _this._begin = new RegExpSource(begin, _this.id);
        _this.beginCaptures = beginCaptures;
        _this._end = new RegExpSource(end ? end : '\uFFFF', -1);
        _this.endHasBackReferences = _this._end.hasBackReferences;
        _this.endCaptures = endCaptures;
        _this.applyEndPatternLast = applyEndPatternLast || false;
        _this.patterns = patterns.patterns;
        _this.hasMissingPatterns = patterns.hasMissingPatterns;
        _this._cachedCompiledPatterns = null;
        return _this;
    }
    Object.defineProperty(BeginEndRule.prototype, "debugBeginRegExp", {
        get: function () {
            return "" + this._begin.source;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BeginEndRule.prototype, "debugEndRegExp", {
        get: function () {
            return "" + this._end.source;
        },
        enumerable: true,
        configurable: true
    });
    BeginEndRule.prototype.getEndWithResolvedBackReferences = function (lineText, captureIndices) {
        return this._end.resolveBackReferences(lineText, captureIndices);
    };
    BeginEndRule.prototype.collectPatternsRecursive = function (grammar, out, isFirst) {
        if (isFirst) {
            var i = void 0, len = void 0, rule = void 0;
            for (i = 0, len = this.patterns.length; i < len; i++) {
                rule = grammar.getRule(this.patterns[i]);
                rule.collectPatternsRecursive(grammar, out, false);
            }
        }
        else {
            out.push(this._begin);
        }
    };
    BeginEndRule.prototype.compile = function (grammar, endRegexSource, allowA, allowG) {
        if (!this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns = new RegExpSourceList();
            this.collectPatternsRecursive(grammar, this._cachedCompiledPatterns, true);
            if (this.applyEndPatternLast) {
                this._cachedCompiledPatterns.push(this._end.hasBackReferences ? this._end.clone() : this._end);
            }
            else {
                this._cachedCompiledPatterns.unshift(this._end.hasBackReferences ? this._end.clone() : this._end);
            }
        }
        if (this._end.hasBackReferences) {
            if (this.applyEndPatternLast) {
                this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length() - 1, endRegexSource);
            }
            else {
                this._cachedCompiledPatterns.setSource(0, endRegexSource);
            }
        }
        return this._cachedCompiledPatterns.compile(grammar, allowA, allowG);
    };
    return BeginEndRule;
}(Rule));
exports.BeginEndRule = BeginEndRule;
var BeginWhileRule = /** @class */ (function (_super) {
    __extends(BeginWhileRule, _super);
    function BeginWhileRule($location, id, name, contentName, begin, beginCaptures, _while, whileCaptures, patterns) {
        var _this = _super.call(this, $location, id, name, contentName) || this;
        _this._begin = new RegExpSource(begin, _this.id);
        _this.beginCaptures = beginCaptures;
        _this.whileCaptures = whileCaptures;
        _this._while = new RegExpSource(_while, -2);
        _this.whileHasBackReferences = _this._while.hasBackReferences;
        _this.patterns = patterns.patterns;
        _this.hasMissingPatterns = patterns.hasMissingPatterns;
        _this._cachedCompiledPatterns = null;
        _this._cachedCompiledWhilePatterns = null;
        return _this;
    }
    Object.defineProperty(BeginWhileRule.prototype, "debugBeginRegExp", {
        get: function () {
            return "" + this._begin.source;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BeginWhileRule.prototype, "debugWhileRegExp", {
        get: function () {
            return "" + this._while.source;
        },
        enumerable: true,
        configurable: true
    });
    BeginWhileRule.prototype.getWhileWithResolvedBackReferences = function (lineText, captureIndices) {
        return this._while.resolveBackReferences(lineText, captureIndices);
    };
    BeginWhileRule.prototype.collectPatternsRecursive = function (grammar, out, isFirst) {
        if (isFirst) {
            var i = void 0, len = void 0, rule = void 0;
            for (i = 0, len = this.patterns.length; i < len; i++) {
                rule = grammar.getRule(this.patterns[i]);
                rule.collectPatternsRecursive(grammar, out, false);
            }
        }
        else {
            out.push(this._begin);
        }
    };
    BeginWhileRule.prototype.compile = function (grammar, endRegexSource, allowA, allowG) {
        if (!this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns = new RegExpSourceList();
            this.collectPatternsRecursive(grammar, this._cachedCompiledPatterns, true);
        }
        return this._cachedCompiledPatterns.compile(grammar, allowA, allowG);
    };
    BeginWhileRule.prototype.compileWhile = function (grammar, endRegexSource, allowA, allowG) {
        if (!this._cachedCompiledWhilePatterns) {
            this._cachedCompiledWhilePatterns = new RegExpSourceList();
            this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences ? this._while.clone() : this._while);
        }
        if (this._while.hasBackReferences) {
            this._cachedCompiledWhilePatterns.setSource(0, endRegexSource ? endRegexSource : '\uFFFF');
        }
        return this._cachedCompiledWhilePatterns.compile(grammar, allowA, allowG);
    };
    return BeginWhileRule;
}(Rule));
exports.BeginWhileRule = BeginWhileRule;
var RuleFactory = /** @class */ (function () {
    function RuleFactory() {
    }
    RuleFactory.createCaptureRule = function (helper, $location, name, contentName, retokenizeCapturedWithRuleId) {
        return helper.registerRule(function (id) {
            return new CaptureRule($location, id, name, contentName, retokenizeCapturedWithRuleId);
        });
    };
    RuleFactory.getCompiledRuleId = function (desc, helper, repository) {
        if (!desc.id) {
            helper.registerRule(function (id) {
                desc.id = id;
                if (desc.match) {
                    return new MatchRule(desc.$vscodeTextmateLocation, desc.id, desc.name, desc.match, RuleFactory._compileCaptures(desc.captures, helper, repository));
                }
                if (typeof desc.begin === 'undefined') {
                    if (desc.repository) {
                        repository = utils_1.mergeObjects({}, repository, desc.repository);
                    }
                    var patterns = desc.patterns;
                    if (typeof patterns === 'undefined' && desc.include) {
                        patterns = [{ include: desc.include }];
                    }
                    return new IncludeOnlyRule(desc.$vscodeTextmateLocation, desc.id, desc.name, desc.contentName, RuleFactory._compilePatterns(patterns, helper, repository));
                }
                if (desc.while) {
                    return new BeginWhileRule(desc.$vscodeTextmateLocation, desc.id, desc.name, desc.contentName, desc.begin, RuleFactory._compileCaptures(desc.beginCaptures || desc.captures, helper, repository), desc.while, RuleFactory._compileCaptures(desc.whileCaptures || desc.captures, helper, repository), RuleFactory._compilePatterns(desc.patterns, helper, repository));
                }
                return new BeginEndRule(desc.$vscodeTextmateLocation, desc.id, desc.name, desc.contentName, desc.begin, RuleFactory._compileCaptures(desc.beginCaptures || desc.captures, helper, repository), desc.end, RuleFactory._compileCaptures(desc.endCaptures || desc.captures, helper, repository), desc.applyEndPatternLast, RuleFactory._compilePatterns(desc.patterns, helper, repository));
            });
        }
        return desc.id;
    };
    RuleFactory._compileCaptures = function (captures, helper, repository) {
        var r = [];
        if (captures) {
            // Find the maximum capture id
            var maximumCaptureId = 0;
            for (var captureId in captures) {
                if (captureId === '$vscodeTextmateLocation') {
                    continue;
                }
                var numericCaptureId = parseInt(captureId, 10);
                if (numericCaptureId > maximumCaptureId) {
                    maximumCaptureId = numericCaptureId;
                }
            }
            // Initialize result
            for (var i = 0; i <= maximumCaptureId; i++) {
                r[i] = null;
            }
            // Fill out result
            for (var captureId in captures) {
                if (captureId === '$vscodeTextmateLocation') {
                    continue;
                }
                var numericCaptureId = parseInt(captureId, 10);
                var retokenizeCapturedWithRuleId = 0;
                if (captures[captureId].patterns) {
                    retokenizeCapturedWithRuleId = RuleFactory.getCompiledRuleId(captures[captureId], helper, repository);
                }
                r[numericCaptureId] = RuleFactory.createCaptureRule(helper, captures[captureId].$vscodeTextmateLocation, captures[captureId].name, captures[captureId].contentName, retokenizeCapturedWithRuleId);
            }
        }
        return r;
    };
    RuleFactory._compilePatterns = function (patterns, helper, repository) {
        var r = [];
        if (patterns) {
            for (var i = 0, len = patterns.length; i < len; i++) {
                var pattern = patterns[i];
                var patternId = -1;
                if (pattern.include) {
                    if (pattern.include.charAt(0) === '#') {
                        // Local include found in `repository`
                        var localIncludedRule = repository[pattern.include.substr(1)];
                        if (localIncludedRule) {
                            patternId = RuleFactory.getCompiledRuleId(localIncludedRule, helper, repository);
                        }
                        else {
                            // console.warn('CANNOT find rule for scopeName: ' + pattern.include + ', I am: ', repository['$base'].name);
                        }
                    }
                    else if (pattern.include === '$base' || pattern.include === '$self') {
                        // Special include also found in `repository`
                        patternId = RuleFactory.getCompiledRuleId(repository[pattern.include], helper, repository);
                    }
                    else {
                        var externalGrammarName = null;
                        var externalGrammarInclude = null;
                        var sharpIndex = pattern.include.indexOf('#');
                        if (sharpIndex >= 0) {
                            externalGrammarName = pattern.include.substring(0, sharpIndex);
                            externalGrammarInclude = pattern.include.substring(sharpIndex + 1);
                        }
                        else {
                            externalGrammarName = pattern.include;
                        }
                        // External include
                        var externalGrammar = helper.getExternalGrammar(externalGrammarName, repository);
                        if (externalGrammar) {
                            if (externalGrammarInclude) {
                                var externalIncludedRule = externalGrammar.repository[externalGrammarInclude];
                                if (externalIncludedRule) {
                                    patternId = RuleFactory.getCompiledRuleId(externalIncludedRule, helper, externalGrammar.repository);
                                }
                                else {
                                    // console.warn('CANNOT find rule for scopeName: ' + pattern.include + ', I am: ', repository['$base'].name);
                                }
                            }
                            else {
                                patternId = RuleFactory.getCompiledRuleId(externalGrammar.repository.$self, helper, externalGrammar.repository);
                            }
                        }
                        else {
                            // console.warn('CANNOT find grammar for scopeName: ' + pattern.include + ', I am: ', repository['$base'].name);
                        }
                    }
                }
                else {
                    patternId = RuleFactory.getCompiledRuleId(pattern, helper, repository);
                }
                if (patternId !== -1) {
                    var rule = helper.getRule(patternId);
                    var skipRule = false;
                    if (rule instanceof IncludeOnlyRule || rule instanceof BeginEndRule || rule instanceof BeginWhileRule) {
                        if (rule.hasMissingPatterns && rule.patterns.length === 0) {
                            skipRule = true;
                        }
                    }
                    if (skipRule) {
                        // console.log('REMOVING RULE ENTIRELY DUE TO EMPTY PATTERNS THAT ARE MISSING');
                        continue;
                    }
                    r.push(patternId);
                }
            }
        }
        return {
            patterns: r,
            hasMissingPatterns: ((patterns ? patterns.length : 0) !== r.length)
        };
    };
    return RuleFactory;
}());
exports.RuleFactory = RuleFactory;
//# sourceMappingURL=rule.js.map
});
$load('./grammar', function(require, module, exports) {
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var rule_1 = require("./rule");
var matcher_1 = require("./matcher");
var debug_1 = require("./debug");
function createGrammar(grammar, initialLanguage, embeddedLanguages, tokenTypes, grammarRepository, onigLib) {
    return new Grammar(grammar, initialLanguage, embeddedLanguages, tokenTypes, grammarRepository, onigLib);
}
exports.createGrammar = createGrammar;
var FullScopeDependency = /** @class */ (function () {
    function FullScopeDependency(scopeName) {
        this.scopeName = scopeName;
    }
    return FullScopeDependency;
}());
exports.FullScopeDependency = FullScopeDependency;
var PartialScopeDependency = /** @class */ (function () {
    function PartialScopeDependency(scopeName, include) {
        this.scopeName = scopeName;
        this.include = include;
    }
    PartialScopeDependency.prototype.toKey = function () {
        return this.scopeName + "#" + this.include;
    };
    return PartialScopeDependency;
}());
exports.PartialScopeDependency = PartialScopeDependency;
var ScopeDependencyCollector = /** @class */ (function () {
    function ScopeDependencyCollector() {
        this.full = [];
        this.partial = [];
        this.visitedRule = new Set();
        this._seenFull = new Set();
        this._seenPartial = new Set();
    }
    ScopeDependencyCollector.prototype.add = function (dep) {
        if (dep instanceof FullScopeDependency) {
            if (!this._seenFull.has(dep.scopeName)) {
                this._seenFull.add(dep.scopeName);
                this.full.push(dep);
            }
        }
        else {
            if (!this._seenPartial.has(dep.toKey())) {
                this._seenPartial.add(dep.toKey());
                this.partial.push(dep);
            }
        }
    };
    return ScopeDependencyCollector;
}());
exports.ScopeDependencyCollector = ScopeDependencyCollector;
/**
 * Fill in `result` all external included scopes in `patterns`
 */
function _extractIncludedScopesInPatterns(result, baseGrammar, selfGrammar, patterns, repository) {
    for (var _i = 0, patterns_1 = patterns; _i < patterns_1.length; _i++) {
        var pattern = patterns_1[_i];
        if (result.visitedRule.has(pattern)) {
            continue;
        }
        result.visitedRule.add(pattern);
        var patternRepository = (pattern.repository ? utils_1.mergeObjects({}, repository, pattern.repository) : repository);
        if (Array.isArray(pattern.patterns)) {
            _extractIncludedScopesInPatterns(result, baseGrammar, selfGrammar, pattern.patterns, patternRepository);
        }
        var include = pattern.include;
        if (!include) {
            continue;
        }
        if (include === '$base' || include === baseGrammar.scopeName) {
            collectDependencies(result, baseGrammar, baseGrammar);
        }
        else if (include === '$self' || include === selfGrammar.scopeName) {
            collectDependencies(result, baseGrammar, selfGrammar);
        }
        else if (include.charAt(0) === '#') {
            collectSpecificDependencies(result, baseGrammar, selfGrammar, include.substring(1), patternRepository);
        }
        else {
            var sharpIndex = include.indexOf('#');
            if (sharpIndex >= 0) {
                var scopeName = include.substring(0, sharpIndex);
                var includedName = include.substring(sharpIndex + 1);
                if (scopeName === baseGrammar.scopeName) {
                    collectSpecificDependencies(result, baseGrammar, baseGrammar, includedName, patternRepository);
                }
                else if (scopeName === selfGrammar.scopeName) {
                    collectSpecificDependencies(result, baseGrammar, selfGrammar, includedName, patternRepository);
                }
                else {
                    result.add(new PartialScopeDependency(scopeName, include.substring(sharpIndex + 1)));
                }
            }
            else {
                result.add(new FullScopeDependency(include));
            }
        }
    }
}
/**
 * Collect a specific dependency from the grammar's repository
 */
function collectSpecificDependencies(result, baseGrammar, selfGrammar, include, repository) {
    if (repository === void 0) { repository = selfGrammar.repository; }
    if (repository && repository[include]) {
        var rule = repository[include];
        _extractIncludedScopesInPatterns(result, baseGrammar, selfGrammar, [rule], repository);
    }
}
exports.collectSpecificDependencies = collectSpecificDependencies;
/**
 * Collects the list of all external included scopes in `grammar`.
 */
function collectDependencies(result, baseGrammar, selfGrammar) {
    if (selfGrammar.patterns && Array.isArray(selfGrammar.patterns)) {
        _extractIncludedScopesInPatterns(result, baseGrammar, selfGrammar, selfGrammar.patterns, selfGrammar.repository);
    }
    if (selfGrammar.injections) {
        var injections = [];
        for (var injection in selfGrammar.injections) {
            injections.push(selfGrammar.injections[injection]);
        }
        _extractIncludedScopesInPatterns(result, baseGrammar, selfGrammar, injections, selfGrammar.repository);
    }
}
exports.collectDependencies = collectDependencies;
function scopesAreMatching(thisScopeName, scopeName) {
    if (!thisScopeName) {
        return false;
    }
    if (thisScopeName === scopeName) {
        return true;
    }
    var len = scopeName.length;
    return thisScopeName.length > len && thisScopeName.substr(0, len) === scopeName && thisScopeName[len] === '.';
}
function nameMatcher(identifers, scopes) {
    if (scopes.length < identifers.length) {
        return false;
    }
    var lastIndex = 0;
    return identifers.every(function (identifier) {
        for (var i = lastIndex; i < scopes.length; i++) {
            if (scopesAreMatching(scopes[i], identifier)) {
                lastIndex = i + 1;
                return true;
            }
        }
        return false;
    });
}
function collectInjections(result, selector, rule, ruleFactoryHelper, grammar) {
    var matchers = matcher_1.createMatchers(selector, nameMatcher);
    var ruleId = rule_1.RuleFactory.getCompiledRuleId(rule, ruleFactoryHelper, grammar.repository);
    for (var _i = 0, matchers_1 = matchers; _i < matchers_1.length; _i++) {
        var matcher = matchers_1[_i];
        result.push({
            matcher: matcher.matcher,
            ruleId: ruleId,
            grammar: grammar,
            priority: matcher.priority
        });
    }
}
var ScopeMetadata = /** @class */ (function () {
    function ScopeMetadata(scopeName, languageId, tokenType, themeData) {
        this.scopeName = scopeName;
        this.languageId = languageId;
        this.tokenType = tokenType;
        this.themeData = themeData;
    }
    return ScopeMetadata;
}());
exports.ScopeMetadata = ScopeMetadata;
var ScopeMetadataProvider = /** @class */ (function () {
    function ScopeMetadataProvider(initialLanguage, themeProvider, embeddedLanguages) {
        this._initialLanguage = initialLanguage;
        this._themeProvider = themeProvider;
        this._cache = new Map();
        this._defaultMetaData = new ScopeMetadata('', this._initialLanguage, 0 /* Other */, [this._themeProvider.getDefaults()]);
        // embeddedLanguages handling
        this._embeddedLanguages = Object.create(null);
        if (embeddedLanguages) {
            // If embeddedLanguages are configured, fill in `this._embeddedLanguages`
            var scopes = Object.keys(embeddedLanguages);
            for (var i = 0, len = scopes.length; i < len; i++) {
                var scope = scopes[i];
                var language = embeddedLanguages[scope];
                if (typeof language !== 'number' || language === 0) {
                    console.warn('Invalid embedded language found at scope ' + scope + ': <<' + language + '>>');
                    // never hurts to be too careful
                    continue;
                }
                this._embeddedLanguages[scope] = language;
            }
        }
        // create the regex
        var escapedScopes = Object.keys(this._embeddedLanguages).map(function (scopeName) { return ScopeMetadataProvider._escapeRegExpCharacters(scopeName); });
        if (escapedScopes.length === 0) {
            // no scopes registered
            this._embeddedLanguagesRegex = null;
        }
        else {
            escapedScopes.sort();
            escapedScopes.reverse();
            this._embeddedLanguagesRegex = new RegExp("^((" + escapedScopes.join(')|(') + "))($|\\.)", '');
        }
    }
    ScopeMetadataProvider.prototype.onDidChangeTheme = function () {
        this._cache = new Map();
        this._defaultMetaData = new ScopeMetadata('', this._initialLanguage, 0 /* Other */, [this._themeProvider.getDefaults()]);
    };
    ScopeMetadataProvider.prototype.getDefaultMetadata = function () {
        return this._defaultMetaData;
    };
    /**
     * Escapes regular expression characters in a given string
     */
    ScopeMetadataProvider._escapeRegExpCharacters = function (value) {
        return value.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&');
    };
    ScopeMetadataProvider.prototype.getMetadataForScope = function (scopeName) {
        if (scopeName === null) {
            return ScopeMetadataProvider._NULL_SCOPE_METADATA;
        }
        var value = this._cache.get(scopeName);
        if (value) {
            return value;
        }
        value = this._doGetMetadataForScope(scopeName);
        this._cache.set(scopeName, value);
        return value;
    };
    ScopeMetadataProvider.prototype._doGetMetadataForScope = function (scopeName) {
        var languageId = this._scopeToLanguage(scopeName);
        var standardTokenType = this._toStandardTokenType(scopeName);
        var themeData = this._themeProvider.themeMatch(scopeName);
        return new ScopeMetadata(scopeName, languageId, standardTokenType, themeData);
    };
    /**
     * Given a produced TM scope, return the language that token describes or null if unknown.
     * e.g. source.html => html, source.css.embedded.html => css, punctuation.definition.tag.html => null
     */
    ScopeMetadataProvider.prototype._scopeToLanguage = function (scope) {
        if (!scope) {
            return 0;
        }
        if (!this._embeddedLanguagesRegex) {
            // no scopes registered
            return 0;
        }
        var m = scope.match(this._embeddedLanguagesRegex);
        if (!m) {
            // no scopes matched
            return 0;
        }
        var language = this._embeddedLanguages[m[1]] || 0;
        if (!language) {
            return 0;
        }
        return language;
    };
    ScopeMetadataProvider.prototype._toStandardTokenType = function (tokenType) {
        var m = tokenType.match(ScopeMetadataProvider.STANDARD_TOKEN_TYPE_REGEXP);
        if (!m) {
            return 0 /* Other */;
        }
        switch (m[1]) {
            case 'comment':
                return 1 /* Comment */;
            case 'string':
                return 2 /* String */;
            case 'regex':
                return 4 /* RegEx */;
            case 'meta.embedded':
                return 8 /* MetaEmbedded */;
        }
        throw new Error('Unexpected match for standard token type!');
    };
    ScopeMetadataProvider._NULL_SCOPE_METADATA = new ScopeMetadata('', 0, 0, null);
    ScopeMetadataProvider.STANDARD_TOKEN_TYPE_REGEXP = /\b(comment|string|regex|meta\.embedded)\b/;
    return ScopeMetadataProvider;
}());
var Grammar = /** @class */ (function () {
    function Grammar(grammar, initialLanguage, embeddedLanguages, tokenTypes, grammarRepository, onigLib) {
        this._scopeMetadataProvider = new ScopeMetadataProvider(initialLanguage, grammarRepository, embeddedLanguages);
        this._onigLib = onigLib;
        this._rootId = -1;
        this._lastRuleId = 0;
        this._ruleId2desc = [];
        this._includedGrammars = {};
        this._grammarRepository = grammarRepository;
        this._grammar = initGrammar(grammar, null);
        this._injections = null;
        this._tokenTypeMatchers = [];
        if (tokenTypes) {
            for (var _i = 0, _a = Object.keys(tokenTypes); _i < _a.length; _i++) {
                var selector = _a[_i];
                var matchers = matcher_1.createMatchers(selector, nameMatcher);
                for (var _b = 0, matchers_2 = matchers; _b < matchers_2.length; _b++) {
                    var matcher = matchers_2[_b];
                    this._tokenTypeMatchers.push({
                        matcher: matcher.matcher,
                        type: tokenTypes[selector]
                    });
                }
            }
        }
    }
    Grammar.prototype.createOnigScanner = function (sources) {
        return this._onigLib.createOnigScanner(sources);
    };
    Grammar.prototype.createOnigString = function (sources) {
        return this._onigLib.createOnigString(sources);
    };
    Grammar.prototype.onDidChangeTheme = function () {
        this._scopeMetadataProvider.onDidChangeTheme();
    };
    Grammar.prototype.getMetadataForScope = function (scope) {
        return this._scopeMetadataProvider.getMetadataForScope(scope);
    };
    Grammar.prototype.getInjections = function () {
        var _this = this;
        if (this._injections === null) {
            this._injections = [];
            // add injections from the current grammar
            var rawInjections = this._grammar.injections;
            if (rawInjections) {
                for (var expression in rawInjections) {
                    collectInjections(this._injections, expression, rawInjections[expression], this, this._grammar);
                }
            }
            // add injection grammars contributed for the current scope
            if (this._grammarRepository) {
                var injectionScopeNames = this._grammarRepository.injections(this._grammar.scopeName);
                if (injectionScopeNames) {
                    injectionScopeNames.forEach(function (injectionScopeName) {
                        var injectionGrammar = _this.getExternalGrammar(injectionScopeName);
                        if (injectionGrammar) {
                            var selector = injectionGrammar.injectionSelector;
                            if (selector) {
                                collectInjections(_this._injections, selector, injectionGrammar, _this, injectionGrammar);
                            }
                        }
                    });
                }
            }
            this._injections.sort(function (i1, i2) { return i1.priority - i2.priority; }); // sort by priority
        }
        return this._injections;
    };
    Grammar.prototype.registerRule = function (factory) {
        var id = (++this._lastRuleId);
        var result = factory(id);
        this._ruleId2desc[id] = result;
        return result;
    };
    Grammar.prototype.getRule = function (patternId) {
        return this._ruleId2desc[patternId];
    };
    Grammar.prototype.getExternalGrammar = function (scopeName, repository) {
        if (this._includedGrammars[scopeName]) {
            return this._includedGrammars[scopeName];
        }
        else if (this._grammarRepository) {
            var rawIncludedGrammar = this._grammarRepository.lookup(scopeName);
            if (rawIncludedGrammar) {
                // console.log('LOADED GRAMMAR ' + pattern.include);
                this._includedGrammars[scopeName] = initGrammar(rawIncludedGrammar, repository && repository.$base);
                return this._includedGrammars[scopeName];
            }
        }
        return null;
    };
    Grammar.prototype.tokenizeLine = function (lineText, prevState) {
        var r = this._tokenize(lineText, prevState, false);
        return {
            tokens: r.lineTokens.getResult(r.ruleStack, r.lineLength),
            ruleStack: r.ruleStack
        };
    };
    Grammar.prototype.tokenizeLine2 = function (lineText, prevState) {
        var r = this._tokenize(lineText, prevState, true);
        return {
            tokens: r.lineTokens.getBinaryResult(r.ruleStack, r.lineLength),
            ruleStack: r.ruleStack
        };
    };
    Grammar.prototype._tokenize = function (lineText, prevState, emitBinaryTokens) {
        if (this._rootId === -1) {
            this._rootId = rule_1.RuleFactory.getCompiledRuleId(this._grammar.repository.$self, this, this._grammar.repository);
        }
        var isFirstLine;
        if (!prevState || prevState === StackElement.NULL) {
            isFirstLine = true;
            var rawDefaultMetadata = this._scopeMetadataProvider.getDefaultMetadata();
            var defaultTheme = rawDefaultMetadata.themeData[0];
            var defaultMetadata = StackElementMetadata.set(0, rawDefaultMetadata.languageId, rawDefaultMetadata.tokenType, defaultTheme.fontStyle, defaultTheme.foreground, defaultTheme.background);
            var rootScopeName = this.getRule(this._rootId).getName(null, null);
            var rawRootMetadata = this._scopeMetadataProvider.getMetadataForScope(rootScopeName);
            var rootMetadata = ScopeListElement.mergeMetadata(defaultMetadata, null, rawRootMetadata);
            var scopeList = new ScopeListElement(null, rootScopeName === null ? 'unknown' : rootScopeName, rootMetadata);
            prevState = new StackElement(null, this._rootId, -1, -1, false, null, scopeList, scopeList);
        }
        else {
            isFirstLine = false;
            prevState.reset();
        }
        lineText = lineText + '\n';
        var onigLineText = this.createOnigString(lineText);
        var lineLength = onigLineText.content.length;
        var lineTokens = new LineTokens(emitBinaryTokens, lineText, this._tokenTypeMatchers);
        var nextState = _tokenizeString(this, onigLineText, isFirstLine, 0, prevState, lineTokens, true);
        disposeOnigString(onigLineText);
        return {
            lineLength: lineLength,
            lineTokens: lineTokens,
            ruleStack: nextState
        };
    };
    return Grammar;
}());
exports.Grammar = Grammar;
function disposeOnigString(str) {
    if (typeof str.dispose === 'function') {
        str.dispose();
    }
}
function initGrammar(grammar, base) {
    grammar = utils_1.clone(grammar);
    grammar.repository = grammar.repository || {};
    grammar.repository.$self = {
        $vscodeTextmateLocation: grammar.$vscodeTextmateLocation,
        patterns: grammar.patterns,
        name: grammar.scopeName
    };
    grammar.repository.$base = base || grammar.repository.$self;
    return grammar;
}
function handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, captures, captureIndices) {
    if (captures.length === 0) {
        return;
    }
    var lineTextContent = lineText.content;
    var len = Math.min(captures.length, captureIndices.length);
    var localStack = [];
    var maxEnd = captureIndices[0].end;
    for (var i = 0; i < len; i++) {
        var captureRule = captures[i];
        if (captureRule === null) {
            // Not interested
            continue;
        }
        var captureIndex = captureIndices[i];
        if (captureIndex.length === 0) {
            // Nothing really captured
            continue;
        }
        if (captureIndex.start > maxEnd) {
            // Capture going beyond consumed string
            break;
        }
        // pop captures while needed
        while (localStack.length > 0 && localStack[localStack.length - 1].endPos <= captureIndex.start) {
            // pop!
            lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, localStack[localStack.length - 1].endPos);
            localStack.pop();
        }
        if (localStack.length > 0) {
            lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, captureIndex.start);
        }
        else {
            lineTokens.produce(stack, captureIndex.start);
        }
        if (captureRule.retokenizeCapturedWithRuleId) {
            // the capture requires additional matching
            var scopeName = captureRule.getName(lineTextContent, captureIndices);
            var nameScopesList = stack.contentNameScopesList.push(grammar, scopeName);
            var contentName = captureRule.getContentName(lineTextContent, captureIndices);
            var contentNameScopesList = nameScopesList.push(grammar, contentName);
            var stackClone = stack.push(captureRule.retokenizeCapturedWithRuleId, captureIndex.start, -1, false, null, nameScopesList, contentNameScopesList);
            var onigSubStr = grammar.createOnigString(lineTextContent.substring(0, captureIndex.end));
            _tokenizeString(grammar, onigSubStr, (isFirstLine && captureIndex.start === 0), captureIndex.start, stackClone, lineTokens, false);
            disposeOnigString(onigSubStr);
            continue;
        }
        var captureRuleScopeName = captureRule.getName(lineTextContent, captureIndices);
        if (captureRuleScopeName !== null) {
            // push
            var base = localStack.length > 0 ? localStack[localStack.length - 1].scopes : stack.contentNameScopesList;
            var captureRuleScopesList = base.push(grammar, captureRuleScopeName);
            localStack.push(new LocalStackElement(captureRuleScopesList, captureIndex.end));
        }
    }
    while (localStack.length > 0) {
        // pop!
        lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, localStack[localStack.length - 1].endPos);
        localStack.pop();
    }
}
function debugCompiledRuleToString(ruleScanner) {
    var r = [];
    for (var i = 0, len = ruleScanner.rules.length; i < len; i++) {
        r.push('   - ' + ruleScanner.rules[i] + ': ' + ruleScanner.debugRegExps[i]);
    }
    return r.join('\n');
}
function matchInjections(injections, grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
    // The lower the better
    var bestMatchRating = Number.MAX_VALUE;
    var bestMatchCaptureIndices = null;
    var bestMatchRuleId;
    var bestMatchResultPriority = 0;
    var scopes = stack.contentNameScopesList.generateScopes();
    for (var i = 0, len = injections.length; i < len; i++) {
        var injection = injections[i];
        if (!injection.matcher(scopes)) {
            // injection selector doesn't match stack
            continue;
        }
        var ruleScanner = grammar.getRule(injection.ruleId).compile(grammar, null, isFirstLine, linePos === anchorPosition);
        var matchResult = ruleScanner.scanner.findNextMatchSync(lineText, linePos);
        if (debug_1.DebugFlags.InDebugMode) {
            console.log('  scanning for injections');
            console.log(debugCompiledRuleToString(ruleScanner));
        }
        if (!matchResult) {
            continue;
        }
        var matchRating = matchResult.captureIndices[0].start;
        if (matchRating >= bestMatchRating) {
            // Injections are sorted by priority, so the previous injection had a better or equal priority
            continue;
        }
        bestMatchRating = matchRating;
        bestMatchCaptureIndices = matchResult.captureIndices;
        bestMatchRuleId = ruleScanner.rules[matchResult.index];
        bestMatchResultPriority = injection.priority;
        if (bestMatchRating === linePos) {
            // No more need to look at the rest of the injections.
            break;
        }
    }
    if (bestMatchCaptureIndices) {
        return {
            priorityMatch: bestMatchResultPriority === -1,
            captureIndices: bestMatchCaptureIndices,
            matchedRuleId: bestMatchRuleId
        };
    }
    return null;
}
function matchRule(grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
    var rule = stack.getRule(grammar);
    var ruleScanner = rule.compile(grammar, stack.endRule, isFirstLine, linePos === anchorPosition);
    var r = ruleScanner.scanner.findNextMatchSync(lineText, linePos);
    if (debug_1.DebugFlags.InDebugMode) {
        // console.log(`  scanning for (linePos: ${linePos}, anchorPosition: ${anchorPosition})`);
        // console.log(debugCompiledRuleToString(ruleScanner));
        if (r) {
            console.log("matched rule id: " + ruleScanner.rules[r.index] + " from " + r.captureIndices[0].start + " to " + r.captureIndices[0].end);
        }
    }
    if (r) {
        return {
            captureIndices: r.captureIndices,
            matchedRuleId: ruleScanner.rules[r.index]
        };
    }
    return null;
}
function matchRuleOrInjections(grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
    // Look for normal grammar rule
    var matchResult = matchRule(grammar, lineText, isFirstLine, linePos, stack, anchorPosition);
    // Look for injected rules
    var injections = grammar.getInjections();
    if (injections.length === 0) {
        // No injections whatsoever => early return
        return matchResult;
    }
    var injectionResult = matchInjections(injections, grammar, lineText, isFirstLine, linePos, stack, anchorPosition);
    if (!injectionResult) {
        // No injections matched => early return
        return matchResult;
    }
    if (!matchResult) {
        // Only injections matched => early return
        return injectionResult;
    }
    // Decide if `matchResult` or `injectionResult` should win
    var matchResultScore = matchResult.captureIndices[0].start;
    var injectionResultScore = injectionResult.captureIndices[0].start;
    if (injectionResultScore < matchResultScore || (injectionResult.priorityMatch && injectionResultScore === matchResultScore)) {
        // injection won!
        return injectionResult;
    }
    return matchResult;
}
/**
 * Walk the stack from bottom to top, and check each while condition in this order.
 * If any fails, cut off the entire stack above the failed while condition. While conditions
 * may also advance the linePosition.
 */
function _checkWhileConditions(grammar, lineText, isFirstLine, linePos, stack, lineTokens) {
    var anchorPosition = (stack.beginRuleCapturedEOL ? 0 : -1);
    var whileRules = [];
    for (var node = stack; node; node = node.pop()) {
        var nodeRule = node.getRule(grammar);
        if (nodeRule instanceof rule_1.BeginWhileRule) {
            whileRules.push({
                rule: nodeRule,
                stack: node
            });
        }
    }
    for (var whileRule = whileRules.pop(); whileRule; whileRule = whileRules.pop()) {
        var ruleScanner = whileRule.rule.compileWhile(grammar, whileRule.stack.endRule, isFirstLine, anchorPosition === linePos);
        var r = ruleScanner.scanner.findNextMatchSync(lineText, linePos);
        if (debug_1.DebugFlags.InDebugMode) {
            console.log('  scanning for while rule');
            console.log(debugCompiledRuleToString(ruleScanner));
        }
        if (r) {
            var matchedRuleId = ruleScanner.rules[r.index];
            if (matchedRuleId !== -2) {
                // we shouldn't end up here
                stack = whileRule.stack.pop();
                break;
            }
            if (r.captureIndices && r.captureIndices.length) {
                lineTokens.produce(whileRule.stack, r.captureIndices[0].start);
                handleCaptures(grammar, lineText, isFirstLine, whileRule.stack, lineTokens, whileRule.rule.whileCaptures, r.captureIndices);
                lineTokens.produce(whileRule.stack, r.captureIndices[0].end);
                anchorPosition = r.captureIndices[0].end;
                if (r.captureIndices[0].end > linePos) {
                    linePos = r.captureIndices[0].end;
                    isFirstLine = false;
                }
            }
        }
        else {
            if (debug_1.DebugFlags.InDebugMode) {
                console.log('  popping ' + whileRule.rule.debugName + ' - ' + whileRule.rule.debugWhileRegExp);
            }
            stack = whileRule.stack.pop();
            break;
        }
    }
    return { stack: stack, linePos: linePos, anchorPosition: anchorPosition, isFirstLine: isFirstLine };
}
function _tokenizeString(grammar, lineText, isFirstLine, linePos, stack, lineTokens, checkWhileConditions) {
    var lineLength = lineText.content.length;
    var STOP = false;
    var anchorPosition = -1;
    if (checkWhileConditions) {
        var whileCheckResult = _checkWhileConditions(grammar, lineText, isFirstLine, linePos, stack, lineTokens);
        stack = whileCheckResult.stack;
        linePos = whileCheckResult.linePos;
        isFirstLine = whileCheckResult.isFirstLine;
        anchorPosition = whileCheckResult.anchorPosition;
    }
    while (!STOP) {
        scanNext(); // potentially modifies linePos && anchorPosition
    }
    function scanNext() {
        if (debug_1.DebugFlags.InDebugMode) {
            console.log('');
            console.log("@@scanNext " + linePos + ": |" + lineText.content.substr(linePos).replace(/\n$/, '\\n') + "|");
        }
        var r = matchRuleOrInjections(grammar, lineText, isFirstLine, linePos, stack, anchorPosition);
        if (!r) {
            if (debug_1.DebugFlags.InDebugMode) {
                console.log('  no more matches.');
            }
            // No match
            lineTokens.produce(stack, lineLength);
            STOP = true;
            return;
        }
        var captureIndices = r.captureIndices;
        var matchedRuleId = r.matchedRuleId;
        var hasAdvanced = (captureIndices && captureIndices.length > 0) ? (captureIndices[0].end > linePos) : false;
        if (matchedRuleId === -1) {
            // We matched the `end` for this rule => pop it
            var poppedRule = stack.getRule(grammar);
            if (debug_1.DebugFlags.InDebugMode) {
                console.log('  popping ' + poppedRule.debugName + ' - ' + poppedRule.debugEndRegExp);
            }
            lineTokens.produce(stack, captureIndices[0].start);
            stack = stack.setContentNameScopesList(stack.nameScopesList);
            handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, poppedRule.endCaptures, captureIndices);
            lineTokens.produce(stack, captureIndices[0].end);
            // pop
            var popped = stack;
            stack = stack.pop();
            anchorPosition = popped.getAnchorPos();
            if (!hasAdvanced && popped.getEnterPos() === linePos) {
                // Grammar pushed & popped a rule without advancing
                if (debug_1.DebugFlags.InDebugMode) {
                    console.error('[1] - Grammar is in an endless loop - Grammar pushed & popped a rule without advancing');
                }
                // See https://github.com/Microsoft/vscode-textmate/issues/12
                // Let's assume this was a mistake by the grammar author and the intent was to continue in this state
                stack = popped;
                lineTokens.produce(stack, lineLength);
                STOP = true;
                return;
            }
        }
        else {
            // We matched a rule!
            var _rule = grammar.getRule(matchedRuleId);
            lineTokens.produce(stack, captureIndices[0].start);
            var beforePush = stack;
            // push it on the stack rule
            var scopeName = _rule.getName(lineText.content, captureIndices);
            var nameScopesList = stack.contentNameScopesList.push(grammar, scopeName);
            stack = stack.push(matchedRuleId, linePos, anchorPosition, captureIndices[0].end === lineLength, null, nameScopesList, nameScopesList);
            if (_rule instanceof rule_1.BeginEndRule) {
                var pushedRule = _rule;
                if (debug_1.DebugFlags.InDebugMode) {
                    console.log('  pushing ' + pushedRule.debugName + ' - ' + pushedRule.debugBeginRegExp);
                }
                handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, pushedRule.beginCaptures, captureIndices);
                lineTokens.produce(stack, captureIndices[0].end);
                anchorPosition = captureIndices[0].end;
                var contentName = pushedRule.getContentName(lineText.content, captureIndices);
                var contentNameScopesList = nameScopesList.push(grammar, contentName);
                stack = stack.setContentNameScopesList(contentNameScopesList);
                if (pushedRule.endHasBackReferences) {
                    stack = stack.setEndRule(pushedRule.getEndWithResolvedBackReferences(lineText.content, captureIndices));
                }
                if (!hasAdvanced && beforePush.hasSameRuleAs(stack)) {
                    // Grammar pushed the same rule without advancing
                    if (debug_1.DebugFlags.InDebugMode) {
                        console.error('[2] - Grammar is in an endless loop - Grammar pushed the same rule without advancing');
                    }
                    stack = stack.pop();
                    lineTokens.produce(stack, lineLength);
                    STOP = true;
                    return;
                }
            }
            else if (_rule instanceof rule_1.BeginWhileRule) {
                var pushedRule = _rule;
                if (debug_1.DebugFlags.InDebugMode) {
                    console.log('  pushing ' + pushedRule.debugName);
                }
                handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, pushedRule.beginCaptures, captureIndices);
                lineTokens.produce(stack, captureIndices[0].end);
                anchorPosition = captureIndices[0].end;
                var contentName = pushedRule.getContentName(lineText.content, captureIndices);
                var contentNameScopesList = nameScopesList.push(grammar, contentName);
                stack = stack.setContentNameScopesList(contentNameScopesList);
                if (pushedRule.whileHasBackReferences) {
                    stack = stack.setEndRule(pushedRule.getWhileWithResolvedBackReferences(lineText.content, captureIndices));
                }
                if (!hasAdvanced && beforePush.hasSameRuleAs(stack)) {
                    // Grammar pushed the same rule without advancing
                    if (debug_1.DebugFlags.InDebugMode) {
                        console.error('[3] - Grammar is in an endless loop - Grammar pushed the same rule without advancing');
                    }
                    stack = stack.pop();
                    lineTokens.produce(stack, lineLength);
                    STOP = true;
                    return;
                }
            }
            else {
                var matchingRule = _rule;
                if (debug_1.DebugFlags.InDebugMode) {
                    console.log('  matched ' + matchingRule.debugName + ' - ' + matchingRule.debugMatchRegExp);
                }
                handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, matchingRule.captures, captureIndices);
                lineTokens.produce(stack, captureIndices[0].end);
                // pop rule immediately since it is a MatchRule
                stack = stack.pop();
                if (!hasAdvanced) {
                    // Grammar is not advancing, nor is it pushing/popping
                    if (debug_1.DebugFlags.InDebugMode) {
                        console.error('[4] - Grammar is in an endless loop - Grammar is not advancing, nor is it pushing/popping');
                    }
                    stack = stack.safePop();
                    lineTokens.produce(stack, lineLength);
                    STOP = true;
                    return;
                }
            }
        }
        if (captureIndices[0].end > linePos) {
            // Advance stream
            linePos = captureIndices[0].end;
            isFirstLine = false;
        }
    }
    return stack;
}
var StackElementMetadata = /** @class */ (function () {
    function StackElementMetadata() {
    }
    StackElementMetadata.toBinaryStr = function (metadata) {
        var r = metadata.toString(2);
        while (r.length < 32) {
            r = '0' + r;
        }
        return r;
    };
    StackElementMetadata.printMetadata = function (metadata) {
        var languageId = StackElementMetadata.getLanguageId(metadata);
        var tokenType = StackElementMetadata.getTokenType(metadata);
        var fontStyle = StackElementMetadata.getFontStyle(metadata);
        var foreground = StackElementMetadata.getForeground(metadata);
        var background = StackElementMetadata.getBackground(metadata);
        console.log({
            languageId: languageId,
            tokenType: tokenType,
            fontStyle: fontStyle,
            foreground: foreground,
            background: background,
        });
    };
    StackElementMetadata.getLanguageId = function (metadata) {
        return (metadata & 255 /* LANGUAGEID_MASK */) >>> 0 /* LANGUAGEID_OFFSET */;
    };
    StackElementMetadata.getTokenType = function (metadata) {
        return (metadata & 1792 /* TOKEN_TYPE_MASK */) >>> 8 /* TOKEN_TYPE_OFFSET */;
    };
    StackElementMetadata.getFontStyle = function (metadata) {
        return (metadata & 14336 /* FONT_STYLE_MASK */) >>> 11 /* FONT_STYLE_OFFSET */;
    };
    StackElementMetadata.getForeground = function (metadata) {
        return (metadata & 8372224 /* FOREGROUND_MASK */) >>> 14 /* FOREGROUND_OFFSET */;
    };
    StackElementMetadata.getBackground = function (metadata) {
        return (metadata & 4286578688 /* BACKGROUND_MASK */) >>> 23 /* BACKGROUND_OFFSET */;
    };
    StackElementMetadata.set = function (metadata, languageId, tokenType, fontStyle, foreground, background) {
        var _languageId = StackElementMetadata.getLanguageId(metadata);
        var _tokenType = StackElementMetadata.getTokenType(metadata);
        var _fontStyle = StackElementMetadata.getFontStyle(metadata);
        var _foreground = StackElementMetadata.getForeground(metadata);
        var _background = StackElementMetadata.getBackground(metadata);
        if (languageId !== 0) {
            _languageId = languageId;
        }
        if (tokenType !== 0 /* Other */) {
            _tokenType = tokenType === 8 /* MetaEmbedded */ ? 0 /* Other */ : tokenType;
        }
        if (fontStyle !== -1 /* NotSet */) {
            _fontStyle = fontStyle;
        }
        if (foreground !== 0) {
            _foreground = foreground;
        }
        if (background !== 0) {
            _background = background;
        }
        return ((_languageId << 0 /* LANGUAGEID_OFFSET */)
            | (_tokenType << 8 /* TOKEN_TYPE_OFFSET */)
            | (_fontStyle << 11 /* FONT_STYLE_OFFSET */)
            | (_foreground << 14 /* FOREGROUND_OFFSET */)
            | (_background << 23 /* BACKGROUND_OFFSET */)) >>> 0;
    };
    return StackElementMetadata;
}());
exports.StackElementMetadata = StackElementMetadata;
var ScopeListElement = /** @class */ (function () {
    function ScopeListElement(parent, scope, metadata) {
        this.parent = parent;
        this.scope = scope;
        this.metadata = metadata;
    }
    ScopeListElement._equals = function (a, b) {
        do {
            if (a === b) {
                return true;
            }
            if (!a && !b) {
                // End of list reached for both
                return true;
            }
            if (!a || !b) {
                // End of list reached only for one
                return false;
            }
            if (a.scope !== b.scope || a.metadata !== b.metadata) {
                return false;
            }
            // Go to previous pair
            a = a.parent;
            b = b.parent;
        } while (true);
    };
    ScopeListElement.prototype.equals = function (other) {
        return ScopeListElement._equals(this, other);
    };
    ScopeListElement._matchesScope = function (scope, selector, selectorWithDot) {
        return (selector === scope || scope.substring(0, selectorWithDot.length) === selectorWithDot);
    };
    ScopeListElement._matches = function (target, parentScopes) {
        if (parentScopes === null) {
            return true;
        }
        var len = parentScopes.length;
        var index = 0;
        var selector = parentScopes[index];
        var selectorWithDot = selector + '.';
        while (target) {
            if (this._matchesScope(target.scope, selector, selectorWithDot)) {
                index++;
                if (index === len) {
                    return true;
                }
                selector = parentScopes[index];
                selectorWithDot = selector + '.';
            }
            target = target.parent;
        }
        return false;
    };
    ScopeListElement.mergeMetadata = function (metadata, scopesList, source) {
        if (source === null) {
            return metadata;
        }
        var fontStyle = -1 /* NotSet */;
        var foreground = 0;
        var background = 0;
        if (source.themeData !== null) {
            // Find the first themeData that matches
            for (var i = 0, len = source.themeData.length; i < len; i++) {
                var themeData = source.themeData[i];
                if (this._matches(scopesList, themeData.parentScopes)) {
                    fontStyle = themeData.fontStyle;
                    foreground = themeData.foreground;
                    background = themeData.background;
                    break;
                }
            }
        }
        return StackElementMetadata.set(metadata, source.languageId, source.tokenType, fontStyle, foreground, background);
    };
    ScopeListElement._push = function (target, grammar, scopes) {
        for (var i = 0, len = scopes.length; i < len; i++) {
            var scope = scopes[i];
            var rawMetadata = grammar.getMetadataForScope(scope);
            var metadata = ScopeListElement.mergeMetadata(target.metadata, target, rawMetadata);
            target = new ScopeListElement(target, scope, metadata);
        }
        return target;
    };
    ScopeListElement.prototype.push = function (grammar, scope) {
        if (scope === null) {
            return this;
        }
        if (scope.indexOf(' ') >= 0) {
            // there are multiple scopes to push
            return ScopeListElement._push(this, grammar, scope.split(/ /g));
        }
        // there is a single scope to push
        return ScopeListElement._push(this, grammar, [scope]);
    };
    ScopeListElement._generateScopes = function (scopesList) {
        var result = [];
        var resultLen = 0;
        while (scopesList) {
            result[resultLen++] = scopesList.scope;
            scopesList = scopesList.parent;
        }
        result.reverse();
        return result;
    };
    ScopeListElement.prototype.generateScopes = function () {
        return ScopeListElement._generateScopes(this);
    };
    return ScopeListElement;
}());
exports.ScopeListElement = ScopeListElement;
/**
 * Represents a "pushed" state on the stack (as a linked list element).
 */
var StackElement = /** @class */ (function () {
    function StackElement(parent, ruleId, enterPos, anchorPos, beginRuleCapturedEOL, endRule, nameScopesList, contentNameScopesList) {
        this.parent = parent;
        this.depth = (this.parent ? this.parent.depth + 1 : 1);
        this.ruleId = ruleId;
        this._enterPos = enterPos;
        this._anchorPos = anchorPos;
        this.beginRuleCapturedEOL = beginRuleCapturedEOL;
        this.endRule = endRule;
        this.nameScopesList = nameScopesList;
        this.contentNameScopesList = contentNameScopesList;
    }
    /**
     * A structural equals check. Does not take into account `scopes`.
     */
    StackElement._structuralEquals = function (a, b) {
        do {
            if (a === b) {
                return true;
            }
            if (!a && !b) {
                // End of list reached for both
                return true;
            }
            if (!a || !b) {
                // End of list reached only for one
                return false;
            }
            if (a.depth !== b.depth || a.ruleId !== b.ruleId || a.endRule !== b.endRule) {
                return false;
            }
            // Go to previous pair
            a = a.parent;
            b = b.parent;
        } while (true);
    };
    StackElement._equals = function (a, b) {
        if (a === b) {
            return true;
        }
        if (!this._structuralEquals(a, b)) {
            return false;
        }
        return a.contentNameScopesList.equals(b.contentNameScopesList);
    };
    StackElement.prototype.clone = function () {
        return this;
    };
    StackElement.prototype.equals = function (other) {
        if (other === null) {
            return false;
        }
        return StackElement._equals(this, other);
    };
    StackElement._reset = function (el) {
        while (el) {
            el._enterPos = -1;
            el._anchorPos = -1;
            el = el.parent;
        }
    };
    StackElement.prototype.reset = function () {
        StackElement._reset(this);
    };
    StackElement.prototype.pop = function () {
        return this.parent;
    };
    StackElement.prototype.safePop = function () {
        if (this.parent) {
            return this.parent;
        }
        return this;
    };
    StackElement.prototype.push = function (ruleId, enterPos, anchorPos, beginRuleCapturedEOL, endRule, nameScopesList, contentNameScopesList) {
        return new StackElement(this, ruleId, enterPos, anchorPos, beginRuleCapturedEOL, endRule, nameScopesList, contentNameScopesList);
    };
    StackElement.prototype.getEnterPos = function () {
        return this._enterPos;
    };
    StackElement.prototype.getAnchorPos = function () {
        return this._anchorPos;
    };
    StackElement.prototype.getRule = function (grammar) {
        return grammar.getRule(this.ruleId);
    };
    StackElement.prototype._writeString = function (res, outIndex) {
        if (this.parent) {
            outIndex = this.parent._writeString(res, outIndex);
        }
        res[outIndex++] = "(" + this.ruleId + ", TODO-" + this.nameScopesList + ", TODO-" + this.contentNameScopesList + ")";
        return outIndex;
    };
    StackElement.prototype.toString = function () {
        var r = [];
        this._writeString(r, 0);
        return '[' + r.join(',') + ']';
    };
    StackElement.prototype.setContentNameScopesList = function (contentNameScopesList) {
        if (this.contentNameScopesList === contentNameScopesList) {
            return this;
        }
        return this.parent.push(this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, this.endRule, this.nameScopesList, contentNameScopesList);
    };
    StackElement.prototype.setEndRule = function (endRule) {
        if (this.endRule === endRule) {
            return this;
        }
        return new StackElement(this.parent, this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, endRule, this.nameScopesList, this.contentNameScopesList);
    };
    StackElement.prototype.hasSameRuleAs = function (other) {
        return this.ruleId === other.ruleId;
    };
    StackElement.NULL = new StackElement(null, 0, 0, 0, false, null, null, null);
    return StackElement;
}());
exports.StackElement = StackElement;
var LocalStackElement = /** @class */ (function () {
    function LocalStackElement(scopes, endPos) {
        this.scopes = scopes;
        this.endPos = endPos;
    }
    return LocalStackElement;
}());
exports.LocalStackElement = LocalStackElement;
var LineTokens = /** @class */ (function () {
    function LineTokens(emitBinaryTokens, lineText, tokenTypeOverrides) {
        this._emitBinaryTokens = emitBinaryTokens;
        this._tokenTypeOverrides = tokenTypeOverrides;
        if (debug_1.DebugFlags.InDebugMode) {
            this._lineText = lineText;
        }
        else {
            this._lineText = null;
        }
        this._tokens = [];
        this._binaryTokens = [];
        this._lastTokenEndIndex = 0;
    }
    LineTokens.prototype.produce = function (stack, endIndex) {
        this.produceFromScopes(stack.contentNameScopesList, endIndex);
    };
    LineTokens.prototype.produceFromScopes = function (scopesList, endIndex) {
        if (this._lastTokenEndIndex >= endIndex) {
            return;
        }
        if (this._emitBinaryTokens) {
            var metadata = scopesList.metadata;
            for (var _i = 0, _a = this._tokenTypeOverrides; _i < _a.length; _i++) {
                var tokenType = _a[_i];
                if (tokenType.matcher(scopesList.generateScopes())) {
                    metadata = StackElementMetadata.set(metadata, 0, toTemporaryType(tokenType.type), -1 /* NotSet */, 0, 0);
                }
            }
            if (this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === metadata) {
                // no need to push a token with the same metadata
                this._lastTokenEndIndex = endIndex;
                return;
            }
            this._binaryTokens.push(this._lastTokenEndIndex);
            this._binaryTokens.push(metadata);
            this._lastTokenEndIndex = endIndex;
            return;
        }
        var scopes = scopesList.generateScopes();
        if (debug_1.DebugFlags.InDebugMode) {
            console.log('  token: |' + this._lineText.substring(this._lastTokenEndIndex, endIndex).replace(/\n$/, '\\n') + '|');
            for (var k = 0; k < scopes.length; k++) {
                console.log('      * ' + scopes[k]);
            }
        }
        this._tokens.push({
            startIndex: this._lastTokenEndIndex,
            endIndex: endIndex,
            // value: lineText.substring(lastTokenEndIndex, endIndex),
            scopes: scopes
        });
        this._lastTokenEndIndex = endIndex;
    };
    LineTokens.prototype.getResult = function (stack, lineLength) {
        if (this._tokens.length > 0 && this._tokens[this._tokens.length - 1].startIndex === lineLength - 1) {
            // pop produced token for newline
            this._tokens.pop();
        }
        if (this._tokens.length === 0) {
            this._lastTokenEndIndex = -1;
            this.produce(stack, lineLength);
            this._tokens[this._tokens.length - 1].startIndex = 0;
        }
        return this._tokens;
    };
    LineTokens.prototype.getBinaryResult = function (stack, lineLength) {
        if (this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 2] === lineLength - 1) {
            // pop produced token for newline
            this._binaryTokens.pop();
            this._binaryTokens.pop();
        }
        if (this._binaryTokens.length === 0) {
            this._lastTokenEndIndex = -1;
            this.produce(stack, lineLength);
            this._binaryTokens[this._binaryTokens.length - 2] = 0;
        }
        var result = new Uint32Array(this._binaryTokens.length);
        for (var i = 0, len = this._binaryTokens.length; i < len; i++) {
            result[i] = this._binaryTokens[i];
        }
        return result;
    };
    return LineTokens;
}());
function toTemporaryType(standardType) {
    switch (standardType) {
        case 4 /* RegEx */:
            return 4 /* RegEx */;
        case 2 /* String */:
            return 2 /* String */;
        case 1 /* Comment */:
            return 1 /* Comment */;
        case 0 /* Other */:
        default:
            // `MetaEmbedded` is the same scope as `Other`
            // but it overwrites existing token types in the stack.
            return 8 /* MetaEmbedded */;
    }
}
//# sourceMappingURL=grammar.js.map
});
$load('./registry', function(require, module, exports) {
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var grammar_1 = require("./grammar");
var onigLibs_1 = require("./onigLibs");
var SyncRegistry = /** @class */ (function () {
    function SyncRegistry(theme, onigLibPromise) {
        this._theme = theme;
        this._grammars = {};
        this._rawGrammars = {};
        this._injectionGrammars = {};
        this._onigLibPromise = onigLibPromise || onigLibs_1.getOniguruma();
    }
    SyncRegistry.prototype.setTheme = function (theme) {
        var _this = this;
        this._theme = theme;
        Object.keys(this._grammars).forEach(function (scopeName) {
            var grammar = _this._grammars[scopeName];
            grammar.onDidChangeTheme();
        });
    };
    SyncRegistry.prototype.getColorMap = function () {
        return this._theme.getColorMap();
    };
    /**
     * Add `grammar` to registry and return a list of referenced scope names
     */
    SyncRegistry.prototype.addGrammar = function (grammar, injectionScopeNames) {
        this._rawGrammars[grammar.scopeName] = grammar;
        if (injectionScopeNames) {
            this._injectionGrammars[grammar.scopeName] = injectionScopeNames;
        }
    };
    /**
     * Lookup a raw grammar.
     */
    SyncRegistry.prototype.lookup = function (scopeName) {
        return this._rawGrammars[scopeName];
    };
    /**
     * Returns the injections for the given grammar
     */
    SyncRegistry.prototype.injections = function (targetScope) {
        return this._injectionGrammars[targetScope];
    };
    /**
     * Get the default theme settings
     */
    SyncRegistry.prototype.getDefaults = function () {
        return this._theme.getDefaults();
    };
    /**
     * Match a scope in the theme.
     */
    SyncRegistry.prototype.themeMatch = function (scopeName) {
        return this._theme.match(scopeName);
    };
    /**
     * Lookup a grammar.
     */
    SyncRegistry.prototype.grammarForScopeName = function (scopeName, initialLanguage, embeddedLanguages, tokenTypes) {
        return __awaiter(this, void 0, void 0, function () {
            var rawGrammar, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!!this._grammars[scopeName]) return [3 /*break*/, 2];
                        rawGrammar = this._rawGrammars[scopeName];
                        if (!rawGrammar) {
                            return [2 /*return*/, null];
                        }
                        _a = this._grammars;
                        _b = scopeName;
                        _c = grammar_1.createGrammar;
                        _d = [rawGrammar, initialLanguage, embeddedLanguages, tokenTypes, this];
                        return [4 /*yield*/, this._onigLibPromise];
                    case 1:
                        _a[_b] = _c.apply(void 0, _d.concat([_e.sent()]));
                        _e.label = 2;
                    case 2: return [2 /*return*/, this._grammars[scopeName]];
                }
            });
        });
    };
    return SyncRegistry;
}());
exports.SyncRegistry = SyncRegistry;
//# sourceMappingURL=registry.js.map
});
$load('./main', function(require, module, exports) {
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var registry_1 = require("./registry");
var grammarReader = require("./grammarReader");
var theme_1 = require("./theme");
var grammar_1 = require("./grammar");
/**
 * The registry that will hold all grammars.
 */
var Registry = /** @class */ (function () {
    function Registry(locator) {
        var _this = this;
        if (locator === void 0) { locator = { loadGrammar: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, null];
            }); }); } }; }
        this._locator = locator;
        this._syncRegistry = new registry_1.SyncRegistry(theme_1.Theme.createFromRawTheme(locator.theme, locator.colorMap), locator.getOnigLib && locator.getOnigLib());
        this._ensureGrammarCache = new Map();
    }
    /**
     * Change the theme. Once called, no previous `ruleStack` should be used anymore.
     */
    Registry.prototype.setTheme = function (theme, colorMap) {
        this._syncRegistry.setTheme(theme_1.Theme.createFromRawTheme(theme, colorMap));
    };
    /**
     * Returns a lookup array for color ids.
     */
    Registry.prototype.getColorMap = function () {
        return this._syncRegistry.getColorMap();
    };
    /**
     * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
     * Please do not use language id 0.
     */
    Registry.prototype.loadGrammarWithEmbeddedLanguages = function (initialScopeName, initialLanguage, embeddedLanguages) {
        return this.loadGrammarWithConfiguration(initialScopeName, initialLanguage, { embeddedLanguages: embeddedLanguages });
    };
    /**
     * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
     * Please do not use language id 0.
     */
    Registry.prototype.loadGrammarWithConfiguration = function (initialScopeName, initialLanguage, configuration) {
        return this._loadGrammar(initialScopeName, initialLanguage, configuration.embeddedLanguages, configuration.tokenTypes);
    };
    /**
     * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
     */
    Registry.prototype.loadGrammar = function (initialScopeName) {
        return this._loadGrammar(initialScopeName, 0, null, null);
    };
    Registry.prototype._doLoadSingleGrammar = function (scopeName) {
        return __awaiter(this, void 0, void 0, function () {
            var grammar, injections;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._locator.loadGrammar(scopeName)];
                    case 1:
                        grammar = _a.sent();
                        if (grammar) {
                            injections = (typeof this._locator.getInjections === 'function' ? this._locator.getInjections(scopeName) : undefined);
                            this._syncRegistry.addGrammar(grammar, injections);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Registry.prototype._loadSingleGrammar = function (scopeName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this._ensureGrammarCache.has(scopeName)) {
                    this._ensureGrammarCache.set(scopeName, this._doLoadSingleGrammar(scopeName));
                }
                return [2 /*return*/, this._ensureGrammarCache.get(scopeName)];
            });
        });
    };
    Registry.prototype._collectDependenciesForDep = function (initialScopeName, result, dep) {
        var grammar = this._syncRegistry.lookup(dep.scopeName);
        if (!grammar) {
            if (dep.scopeName === initialScopeName) {
                throw new Error("No grammar provided for <" + initialScopeName + ">");
            }
            return;
        }
        if (dep instanceof grammar_1.FullScopeDependency) {
            grammar_1.collectDependencies(result, this._syncRegistry.lookup(initialScopeName), grammar);
        }
        else {
            grammar_1.collectSpecificDependencies(result, this._syncRegistry.lookup(initialScopeName), grammar, dep.include);
        }
        var injections = this._syncRegistry.injections(dep.scopeName);
        if (injections) {
            for (var _i = 0, injections_1 = injections; _i < injections_1.length; _i++) {
                var injection = injections_1[_i];
                result.add(new grammar_1.FullScopeDependency(injection));
            }
        }
    };
    Registry.prototype._loadGrammar = function (initialScopeName, initialLanguage, embeddedLanguages, tokenTypes) {
        return __awaiter(this, void 0, void 0, function () {
            var seenFullScopeRequests, seenPartialScopeRequests, Q, q, deps, _i, q_1, dep, _a, _b, dep, _c, _d, dep;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        seenFullScopeRequests = new Set();
                        seenPartialScopeRequests = new Set();
                        seenFullScopeRequests.add(initialScopeName);
                        Q = [new grammar_1.FullScopeDependency(initialScopeName)];
                        _e.label = 1;
                    case 1:
                        if (!(Q.length > 0)) return [3 /*break*/, 3];
                        q = Q;
                        Q = [];
                        return [4 /*yield*/, Promise.all(q.map(function (request) { return _this._loadSingleGrammar(request.scopeName); }))];
                    case 2:
                        _e.sent();
                        deps = new grammar_1.ScopeDependencyCollector();
                        for (_i = 0, q_1 = q; _i < q_1.length; _i++) {
                            dep = q_1[_i];
                            this._collectDependenciesForDep(initialScopeName, deps, dep);
                        }
                        for (_a = 0, _b = deps.full; _a < _b.length; _a++) {
                            dep = _b[_a];
                            if (seenFullScopeRequests.has(dep.scopeName)) {
                                // already processed
                                continue;
                            }
                            seenFullScopeRequests.add(dep.scopeName);
                            Q.push(dep);
                        }
                        for (_c = 0, _d = deps.partial; _c < _d.length; _c++) {
                            dep = _d[_c];
                            if (seenFullScopeRequests.has(dep.scopeName)) {
                                // already processed in full
                                continue;
                            }
                            if (seenPartialScopeRequests.has(dep.toKey())) {
                                // already processed
                                continue;
                            }
                            seenPartialScopeRequests.add(dep.toKey());
                            Q.push(dep);
                        }
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, this.grammarForScopeName(initialScopeName, initialLanguage, embeddedLanguages, tokenTypes)];
                }
            });
        });
    };
    /**
     * Adds a rawGrammar.
     */
    Registry.prototype.addGrammar = function (rawGrammar, injections, initialLanguage, embeddedLanguages) {
        if (injections === void 0) { injections = []; }
        if (initialLanguage === void 0) { initialLanguage = 0; }
        if (embeddedLanguages === void 0) { embeddedLanguages = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._syncRegistry.addGrammar(rawGrammar, injections);
                        return [4 /*yield*/, this.grammarForScopeName(rawGrammar.scopeName, initialLanguage, embeddedLanguages)];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    /**
     * Get the grammar for `scopeName`. The grammar must first be created via `loadGrammar` or `addGrammar`.
     */
    Registry.prototype.grammarForScopeName = function (scopeName, initialLanguage, embeddedLanguages, tokenTypes) {
        if (initialLanguage === void 0) { initialLanguage = 0; }
        if (embeddedLanguages === void 0) { embeddedLanguages = null; }
        if (tokenTypes === void 0) { tokenTypes = null; }
        return this._syncRegistry.grammarForScopeName(scopeName, initialLanguage, embeddedLanguages, tokenTypes);
    };
    return Registry;
}());
exports.Registry = Registry;
exports.INITIAL = grammar_1.StackElement.NULL;
exports.parseRawGrammar = grammarReader.parseRawGrammar;
//# sourceMappingURL=main.js.map
});

return $map['./main'].exports;;
});
/* WEBPACK VAR INJECTION */}.call(this, "/", __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/yallist/iterator.js":
/*!******************************************!*\
  !*** ./node_modules/yallist/iterator.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (Yallist) {
  Yallist.prototype[Symbol.iterator] = function* () {
    for (let walker = this.head; walker; walker = walker.next) {
      yield walker.value
    }
  }
}


/***/ }),

/***/ "./node_modules/yallist/yallist.js":
/*!*****************************************!*\
  !*** ./node_modules/yallist/yallist.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Yallist

Yallist.Node = Node
Yallist.create = Yallist

function Yallist (list) {
  var self = this
  if (!(self instanceof Yallist)) {
    self = new Yallist()
  }

  self.tail = null
  self.head = null
  self.length = 0

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item)
    })
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i])
    }
  }

  return self
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list')
  }

  var next = node.next
  var prev = node.prev

  if (next) {
    next.prev = prev
  }

  if (prev) {
    prev.next = next
  }

  if (node === this.head) {
    this.head = next
  }
  if (node === this.tail) {
    this.tail = prev
  }

  node.list.length--
  node.next = null
  node.prev = null
  node.list = null

  return next
}

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var head = this.head
  node.list = this
  node.next = head
  if (head) {
    head.prev = node
  }

  this.head = node
  if (!this.tail) {
    this.tail = node
  }
  this.length++
}

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var tail = this.tail
  node.list = this
  node.prev = tail
  if (tail) {
    tail.next = node
  }

  this.tail = node
  if (!this.head) {
    this.head = node
  }
  this.length++
}

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined
  }

  var res = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) {
    this.tail.next = null
  } else {
    this.head = null
  }
  this.length--
  return res
}

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined
  }

  var res = this.head.value
  this.head = this.head.next
  if (this.head) {
    this.head.prev = null
  } else {
    this.tail = null
  }
  this.length--
  return res
}

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.next
  }
}

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.prev
  }
}

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.next
  }
  return res
}

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.prev
  }
  return res
}

Yallist.prototype.reduce = function (fn, initial) {
  var acc
  var walker = this.head
  if (arguments.length > 1) {
    acc = initial
  } else if (this.head) {
    walker = this.head.next
    acc = this.head.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i)
    walker = walker.next
  }

  return acc
}

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc
  var walker = this.tail
  if (arguments.length > 1) {
    acc = initial
  } else if (this.tail) {
    walker = this.tail.prev
    acc = this.tail.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i)
    walker = walker.prev
  }

  return acc
}

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.next
  }
  return arr
}

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.prev
  }
  return arr
}

Yallist.prototype.slice = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next
  }
  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev
  }
  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.splice = function (start, deleteCount /*, ...nodes */) {
  if (start > this.length) {
    start = this.length - 1
  }
  if (start < 0) {
    start = this.length + start;
  }

  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
    walker = walker.next
  }

  var ret = []
  for (var i = 0; walker && i < deleteCount; i++) {
    ret.push(walker.value)
    walker = this.removeNode(walker)
  }
  if (walker === null) {
    walker = this.tail
  }

  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev
  }

  for (var i = 2; i < arguments.length; i++) {
    walker = insert(this, walker, arguments[i])
  }
  return ret;
}

Yallist.prototype.reverse = function () {
  var head = this.head
  var tail = this.tail
  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev
    walker.prev = walker.next
    walker.next = p
  }
  this.head = tail
  this.tail = head
  return this
}

function insert (self, node, value) {
  var inserted = node === self.head ?
    new Node(value, null, node, self) :
    new Node(value, node, node.next, self)

  if (inserted.next === null) {
    self.tail = inserted
  }
  if (inserted.prev === null) {
    self.head = inserted
  }

  self.length++

  return inserted
}

function push (self, item) {
  self.tail = new Node(item, self.tail, null, self)
  if (!self.head) {
    self.head = self.tail
  }
  self.length++
}

function unshift (self, item) {
  self.head = new Node(item, null, self.head, self)
  if (!self.tail) {
    self.tail = self.head
  }
  self.length++
}

function Node (value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list)
  }

  this.list = list
  this.value = value

  if (prev) {
    prev.next = this
    this.prev = prev
  } else {
    this.prev = null
  }

  if (next) {
    next.prev = this
    this.next = next
  } else {
    this.next = null
  }
}

try {
  // add if support for Symbol.iterator is present
  __webpack_require__(/*! ./iterator.js */ "./node_modules/yallist/iterator.js")(Yallist)
} catch (er) {}


/***/ })

}]);
//# sourceMappingURL=37.bundle.js.map