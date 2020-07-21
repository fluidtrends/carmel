import { send } from './main'
import * as system from '../system'
import { download } from 'electron-dl'
import fs from 'fs'
import path from 'path'

export const setup = async (data: any) => {
    const env = system.env()
    console.log(env)

    // if (system.env().sdk.exists) {
        // send({ id: data.id, type: 'ready', session: system.session })
        // return
    // }
}