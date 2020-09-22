import { app, ipcMain } from 'electron'
import path from 'path'
import fs from 'fs'
import { Server } from './node'

import * as window from './window'
import * as events from './events'
import * as _session from './session'

export let session: any = undefined
export let server: Server = undefined

export const quit = () => {
  app.quit()
}

export const userHome = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']

export const env = () => {
  const home = path.resolve(userHome, '.carmel')
  const workspace = path.resolve(userHome, 'carmel')
  const lock = path.resolve(home, 'secrets', '.data', '.lock')
  const cache = path.resolve(home, 'cache')
  const sdk = path.resolve(cache, '@carmel', 'sdk', 'default')
  const node = path.resolve(cache, 'node', 'default')
 
  return {
    home: { path: home, exists: fs.existsSync(home) },
    workspace: { path: workspace, exists: fs.existsSync(workspace) },
    cache: { path: cache, exists: fs.existsSync(cache) },
    sdk: { path: sdk, exists: fs.existsSync(sdk) },
    node: { path: node, exists: fs.existsSync(node) },
    lock: { path: lock, exists: fs.existsSync(lock) }
  }
}

export const reload = () => {
  session = _session.load()
  server = server || new Server(env())
}

export const update = (data: any) => {
  _session.update(data)
  reload()
}

export const init = (data: any) => {
  _session.create()
  update(data)
}

export const start = () => {
  reload()
  
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

  app.on('ready', async () => {
    app.setAsDefaultProtocolClient('carmel')
    reload()
    await server.start()
    window.hasWindow || window.create()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      window.hide()
    }
  })
}
