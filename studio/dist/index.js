"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var electron_1 = require("electron");
var path_1 = __importDefault(require("path"));
var window;
var tray;
var loaded = false;
if (require('electron-squirrel-startup')) {
    electron_1.app.quit();
}
var showWindow = function () {
    var position = getWindowPosition();
    window.setPosition(position.x, position.y, false);
    window.show();
};
var toggleWindow = function () {
    if (window.isVisible()) {
        window.hide();
        return;
    }
    tray.setImage(path_1["default"].join('assets', 'icon-32.png'));
    showWindow();
};
var createTray = function () {
    tray = new electron_1.Tray(path_1["default"].join('assets', 'icon-32.png'));
    var contextMenu = electron_1.Menu.buildFromTemplate([
        { label: 'Toggle', click: function () { toggleWindow(); } },
        { label: 'Quit', click: function () { electron_1.app.quit(); } }
    ]);
    tray.setContextMenu(contextMenu);
    tray.on('click', function (event) {
        toggleWindow();
    });
};
var getWindowPosition = function () {
    var windowBounds = window.getBounds();
    var trayBounds = tray.getBounds();
    var x = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2));
    var y = Math.round(trayBounds.y + trayBounds.height + 4);
    console.log(x);
    loaded = true;
    return { x: x, y: y };
};
var createWindow = function () {
    window = new electron_1.BrowserWindow({
        width: 400,
        height: 600,
        show: false,
        frame: false,
        backgroundColor: '#ECEFF1',
        fullscreenable: false,
        resizable: false,
        transparent: false,
        webPreferences: {
            nodeIntegration: true,
            backgroundThrottling: false,
            webviewTag: true
        }
    });
    window.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
    window.webContents.openDevTools();
    window.on('closed', function () {
        window = null;
    });
    window.on('blur', function () {
        if (!window.webContents.isDevToolsOpened()) {
            window.hide();
        }
    });
    electron_1.app.setAsDefaultProtocolClient('carmel');
    electron_1.protocol.registerFileProtocol('carmel', function (request, callback) {
        var url = request.url.substr(7);
        callback({ path: path_1["default"].normalize(__dirname + "/" + url) });
    }, function (error) {
        if (error)
            console.error('Failed to register protocol');
    });
};
electron_1.app.on('activate', function () {
    if (electron_1.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
electron_1.app.on('open-url', function (event, url) {
    event.preventDefault();
    console.log('open-url event: ' + url);
});
electron_1.app.on('ready', function () {
    createWindow();
    var ret = electron_1.globalShortcut.register('CommandOrControl+1', function () {
        toggleWindow();
    });
    window.once('ready-to-show', function () {
        createTray();
        toggleWindow();
    });
});
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
//# sourceMappingURL=index.js.map