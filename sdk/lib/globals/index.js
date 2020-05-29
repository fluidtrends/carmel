"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_SECTIONS = exports.DEFAULT_BUNDLE_ID = exports.MANIFEST_FILENAME = exports.DEFAULT_PLATFORM = exports.SUPPORTED_PLATFORMS = exports.SUPPORTED_ARCHIVE_SOURCES = void 0;
exports.SUPPORTED_ARCHIVE_SOURCES = ['npm'];
exports.SUPPORTED_PLATFORMS = ['web', 'mobile'];
exports.DEFAULT_PLATFORM = 'web';
exports.MANIFEST_FILENAME = ".carmel.json";
exports.DEFAULT_BUNDLE_ID = "@fluidtrends/bananas";
exports.DEFAULT_SECTIONS = [
    { id: "main" },
    { id: "system" },
    { id: "safe", secure: true },
    { id: "bundles" },
    { id: "events" },
    { id: "cloud" },
    { id: "products" }
];
//# sourceMappingURL=index.js.map