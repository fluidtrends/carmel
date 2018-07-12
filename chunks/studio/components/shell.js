import { ipcRenderer } from 'electron'
import { Utils } from 'react-dom-chunky'

export default class Shell {
  constructor (props) {
    this._props = props
  }

  get props () {
    return this._props
  }

  exec (type, command, data) {
    return new Promise((resolve, reject) => {
      const callId = `${type}-${Utils.newShortId()}`
      ipcRenderer.on(callId, (event, result) => {
        if (result.error) {
          reject(result.error)
          return
        }

        data(result)
        result.done && resolve(result)
      })
      ipcRenderer.send(type, { command, callId })
    })
  }
}
