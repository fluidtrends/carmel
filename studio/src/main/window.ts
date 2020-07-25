import { BrowserWindow, webContents } from 'electron'
import { isDevMode } from './utils'
import * as tray from './tray'

declare const MAIN_WINDOW_WEBPACK_ENTRY: any

export let window: BrowserWindow

export const hasWindow = BrowserWindow.getAllWindows().length > 0
export const content = () => window ? window.webContents : undefined

export const hide = () => {
  if (!window || !window.isVisible()) return

  window.hide() 
  tray.update()
}

export const show = () => {
  if (!window || window.isVisible()) return

  window.center()
  window.show()
  tray.update()
}

export const isVisible = () => window && window.isVisible()

export const toggle = () => {
  if (!window) return

  window.isVisible() ? hide() : show()
}

export const create = () => {
  window = new BrowserWindow({
    width: 960,
    minWidth: 960,
    height: 560,
    minHeight: 560,
    show: false,
    frame: true,
    fullscreenable: true,
    resizable: true,
    transparent: false,
    webPreferences: {
      nodeIntegration: true,
      backgroundThrottling: false,
      webviewTag: true
    }
  })

  isDevMode && window.webContents.openDevTools()
  window.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  window.on('close', () => {
    hide()
  })

  window.once('ready-to-show', () => {
    tray.create()
    show()
  })
}