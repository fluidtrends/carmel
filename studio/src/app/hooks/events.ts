import { ipcRenderer } from 'electron'
import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import shortid from 'shortid'

export const useEvent = () => {
    const id = shortid.generate()
    let [received, setReceived] = useState({})
 
    const send = (event: any) => ipcRenderer.send('carmel', { id, ...event })
  
    useEffect(() => {
        const listener = (e: any, data: any) => {
            data.id === id && setReceived(data)
        }
        ipcRenderer.once('carmel', listener)
        return () => ipcRenderer.removeListener('carmel', listener)
    }, [id])

    return { send, received }
  }