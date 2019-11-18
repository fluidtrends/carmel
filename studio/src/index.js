global.navigator = {
  userAgent: 'chunky'
}

const { app, Tray, BrowserWindow, globalShortcut } = require('electron')
const path = require('path')
const Session = require('./Session')

const PORT = 13001

let window
let session 
let tray
let loaded = false

app.dock.hide()

const createWindow = () => {
  window = new BrowserWindow({
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
  })

  window.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)
  window.webContents.openDevTools()

  window.on('closed', () => {
    window = null
  })

  window.on('blur', () => {
    if (!window.webContents.isDevToolsOpened()) {
      window.hide()
    }
  })
}

const createTray = () => {
  tray = new Tray(path.join('assets', 'logo.png'))
  tray.on('click', function (event) {
    toggleWindow()
  })
}

const getWindowPosition = () => {
    const windowBounds = window.getBounds()
    const trayBounds = tray.getBounds()
    const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2) - (loaded ? 0 : 18))
    const y = Math.round(trayBounds.y + trayBounds.height + 4)

    loaded = true
    return { x: x, y: y }
}

const toggleWindow = () => {
    if (window.isVisible()) {
      // tray.setImage(path.join('assets', 'logo-progress.png'))
      window.hide() 
      return 
    } 
    
    tray.setImage(path.join('assets', 'logo.png'))
    showWindow()
}

const showWindow = () => {
    const position = getWindowPosition()
    window.setPosition(position.x, position.y, false)
    window.show()
}

app.on('ready', () => {
  createWindow()
  session = new Session({ window, port: PORT })
  session.initialize().then(() => {
      const ret = globalShortcut.register('CommandOrControl+1', () => {
        toggleWindow()
      })
  
      window.once('ready-to-show', () => {
        createTray()
        toggleWindow()
      })
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
