import { app, Menu, Tray, MenuItem } from 'electron'
import path from 'path'
import { asset } from './assets'
import { isDevMode } from './utils'
import { window, toggle as toggleWindow } from './window'
import { quit } from './system'

export let tray: Tray

export const update = () => {
  let items: any[] = []
  items.push({ label: window.isVisible() ? 'Hide Carmel' : 'Show Carmel', click: toggleWindow })
  items.push({ type: "separator" })

  // let tools: any = []
  // Object.keys(environment.tools).map(tool => {
  //   tools.push({ label: `${tool}`, submenu: [{
  //     label: environment.tools[tool] ? 'Installed' : 'Not Installed'
  //   }]})
  // })
  // items.push({ label: "Tools", submenu: tools })

  const contextMenu = Menu.buildFromTemplate(items.concat([
    { type: "separator" },
    { label: 'Quit', click: quit }
  ]))
  tray.setImage(asset('icon-32.png'))
  tray.setContextMenu(contextMenu)
}

export const create = () => {
  tray = new Tray(asset('icon-32.png'))
  update()
}