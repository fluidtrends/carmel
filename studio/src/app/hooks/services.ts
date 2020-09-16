import { ipcRenderer } from 'electron'
import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import shortid from 'shortid'
import axios from 'axios'
import { Api, JsonRpc, RpcError } from 'eosjs'

// const eos = new JsonRpc('http://api.eosn.io')
const eos = new JsonRpc('http://0.0.0.0:8888')

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

const _getTemplates = async (set: any) => {
    const data = await eos.get_table_rows({
        json: true,              
        code: 'carmelsystem',     
        scope: 'carmelsystem',
        table: 'templates',       
        limit: 10,
        reverse: false, 
        show_payer: false
    })

    set(data && data.rows ? data.rows : [])
}

export const useBlockchain = () => {
    const [templates, setTemplates] = useState([])

    const calls = {
        getTemplates: () => _getTemplates(setTemplates)
    } 

    return { templates, ...calls }
}