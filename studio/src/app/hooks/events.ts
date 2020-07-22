import { ipcRenderer } from 'electron'
import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import shortid from 'shortid'

export const useEvent = () => {
    let [received, setReceived] = useState({})
    let [id, setId] = useState('')
 
    const send = (event: any) => {
        const newId = shortid.generate()
        setId(newId)
        ipcRenderer.send('carmel', { id: newId, ...event })
        return newId
    }
  
    useEffect(() => {
        const listener = (e: any, data: any) => {
            if (data.id === id) {
                 setReceived(data) 
            }
        }

        ipcRenderer.on('carmel', listener)

        return () => ipcRenderer.removeListener('carmel', listener)
    }, [id])

    return { send, id, received }
}

export const useCommand = () => {
    let [received, setReceived] = useState({})
 
    const send = (command: any) => ipcRenderer.send('carmel', { id: 'command', type: 'runCommand', ...command })
  
    useEffect(() => {
        const listener = (e: any, data: any) => {
            data.type === 'commandResult' && setReceived(data)
        }

        ipcRenderer.on('carmel', listener)

        // return () => ipcRenderer.removeListener('carmel', listener)
    }, [])

    return { send, received }
  }