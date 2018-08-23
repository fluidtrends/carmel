import { ipcRenderer } from 'electron'
import { Utils } from 'react-dom-chunky'
import Analytics from 'electron-ga'

export default class Shell {
  constructor (props) {
    this._props = props
    this._analytics = new Analytics('UA-99031266-1')
  }

  analytics (data) {
    this._analytics.send('Carmel Studio', data)
  }

  get props () {
    return this._props
  }

  cache (key, data, options) {
    ipcRenderer.send('sessionCache', { key, data, options })
  }

  exec (type, command, data) {
    return new Promise((resolve, reject) => {
      const callId = `${type}-${Utils.newShortId()}`
      ipcRenderer.on(callId, (event, result) => {
        if (result.error) {
          reject(new Error(result.error))
          return
        }

        if (result.done) {
          resolve(result)
          return
        }

        data && data(result)
      })
      ipcRenderer.send(type, { command, callId })
    })
  }
}
