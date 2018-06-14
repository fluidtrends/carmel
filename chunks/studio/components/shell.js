import { ipcRenderer } from 'electron'
import { Utils } from 'react-dom-chunky'

export default class Shell {
  constructor (props) {
    this._props = props
  }

  get props () {
    return this._props
  }

  sendCommand (type, command) {
    return new Promise((resolve, reject) => {
      const callId = `${type}-${Utils.newShortId()}`
      ipcRenderer.on(callId, (event, result) => {
        if (result.error) {
          resolve()
          return
        }
        resolve(result.data)
      })
      ipcRenderer.send(type, { command, callId })
    })
  }
}
