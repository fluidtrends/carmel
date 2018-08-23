import { ipcRenderer } from 'electron'
import { Utils } from 'react-dom-chunky'

export default class Shell {
  constructor (props) {
    this._props = props
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
