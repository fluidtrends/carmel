import { ipcRenderer } from 'electron'
import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import shortid from 'shortid'
import axios from 'axios'

export const useRemote = () => {
    const [text, setText] = useState({})

    const loadText = (id: string, url: string) => {
        (async () => {
            try {
                const response = await fetch(url)
                const data = await response.text()
                setText((prev: any) => ({ ...prev, [id]: { url, data }}))
            } catch {
            }
        })()
    }

    return { text, loadText }
}