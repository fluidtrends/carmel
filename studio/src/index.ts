import { app, ipcMain, Menu, Tray, protocol, globalShortcut, BrowserWindow, MenuItem } from 'electron'
import path from 'path'
import commandExists from 'command-exists'
import execa from 'execa'
import fs from 'fs'
import notifier from 'node-notifier'
import carmel from '@carmel/cli'

declare const MAIN_WINDOW_WEBPACK_ENTRY: any

const _DEV = true 

let window: BrowserWindow
let tray: Tray
let loaded = false

if (require('electron-squirrel-startup')) {
  app.quit()
}

const environmentTools = [['node', '--version'], ['npm'], ['code'], ['hyper'], ['docker'], ['sh'], ['chrome']]

let environment: any = {
  tools: {}
}

const checkEnvironment = async () => {
  environment = { tools: {} }

  environmentTools.map(async (command) => {
    const exists = commandExists.sync(command[0])
    let details: any = false

    if (exists) {
      if (command.length > 1) {
        const { stdout } = await execa(command[0], [command[1]])
        console.log(stdout)
      }
      details = { name: command } 
    }

    environment.tools[command[0]] = details
  })
}

const setup = async () => {
        carmel.init()

        const sdkPath = await installCarmelSDK()
        
        const command = parseCommand(input)
        await runCarmelCommand(command, sdkPath)
    } catch (e) {
        logError(e)
    }
}}

const showWindow = () => {
  const position = getWindowPosition()

  window.setPosition(position.x, position.y, false)
  window.show()

  updateTray()
}

const quit = () => {
  app.quit()
}

const toggleWindow = () => {
  if (window.isVisible()) {
    window.hide() 
    updateTray()
    return 
  } 
  
  showWindow()
}

const updateTray = () => {
  let items: any[] = []
  items.push({ label: window.isVisible() ? 'Close Window' : 'Show Window', click: toggleWindow })
  items.push({ type: "separator" })

  let tools: any = []
  Object.keys(environment.tools).map(tool => {
    tools.push({ label: `${tool}`, submenu: [{
      label: environment.tools[tool] ? 'Installed' : 'Not Installed'
    }]})
  })
  items.push({ label: "Tools", submenu: tools })

  const contextMenu = Menu.buildFromTemplate(items.concat([
    { type: "separator" },
    { label: 'Quit', click: quit }
  ]))
  tray.setImage(path.join('assets', 'icon-32.png'))
  tray.setContextMenu(contextMenu)
}

const createTray = () => {
  tray = new Tray(path.join('assets', 'icon-32.png'))
  updateTray()
}

const getWindowPosition = () => {
  const windowBounds = window.getBounds()
  const trayBounds = tray.getBounds()
  const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2))
  const y = Math.round(trayBounds.y + trayBounds.height + 4)

  loaded = true

  return { x, y }
}

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

  _DEV && window.webContents.openDevTools()
  window.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  window.on('closed', () => {
    window = null
  })

  window.on('blur', () => {
    if (!window.webContents.isDevToolsOpened()) {
      window.hide()
    }
  })
}

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.on('open-url', (event, url) => {
  event.preventDefault()
  window.webContents.send('onNewUrl', { url })
  showWindow()
});

app.on('ready', async () => {
  notifier.notify('Message');

  app.setAsDefaultProtocolClient('carmel')

  notifier.notify({
    title: 'My notification',
    message: 'Hello, there!'
  })

  await checkEnvironment()
  await setup ()

  createWindow()

  window.once('ready-to-show', () => {
    createTray()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})