import { app, ipcMain } from 'electron'
import path from 'path'
import fs from 'fs'

import * as window from './window'
import * as events from './events'
import * as _session from './session'

export let session: any = undefined

export const quit = () => {
  app.quit()
}

export const userHome = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']

export const env = () => {
  const home = path.resolve(userHome, '.carmel')
  const cache = path.resolve(home, 'cache')
  const sdk = path.resolve(cache, '@carmel', 'sdk', 'default')
  const node = path.resolve(cache, 'node', 'default')

  return {
    home: { path: home, exists: fs.existsSync(home) },
    cache: { path: cache, exists: fs.existsSync(cache) },
    sdk: { path: sdk, exists: fs.existsSync(sdk) },
    node: { path: node, exists: fs.existsSync(node) }
  }
}

export const reload = () => {
  session = _session.load()
}

export const update = (data: any) => {
  _session.update(data)
  reload()
}

export const start = () => {
  ipcMain.on('carmel', async (e, data) => {
    const eventType: keyof typeof events = data.type
    const event = events[eventType] 
    event && await event(data)     
  })
  
  app.on('activate', () => {
    window.hasWindow || window.create()
  })

  app.on('open-url', (e, url) => {
    e.preventDefault()
    events.newUrl(url)
  })

  app.on('ready', () => {
    app.setAsDefaultProtocolClient('carmel')
    window.hasWindow || window.create()
    reload()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      window.hide()
    }
  })
}
