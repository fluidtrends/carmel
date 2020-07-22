import { send } from './main'
import { window } from '../window'
import * as system from '../system'
import { download } from 'electron-dl'
import fs from 'fs'
import path from 'path'

export const setup = async (data: any) => {
    const env = system.env()

    const downloadsDir = path.resolve(env.home.path, 'downloads')
    fs.existsSync(downloadsDir) || fs.mkdirSync(downloadsDir)

    await send({ id: data.id,  type: 'settingUp', status: "Downloading Node ...", progress: 0 })

    let totalProgress = 0

    const url = `https://nodejs.org/dist/latest-v12.x/node-v12.18.3-darwin-x64.tar.gz`
    await download(window, url, { directory: downloadsDir, onProgress: async (progress) => {
        totalProgress = Math.round(100 * progress.percent)
        await send({ 
            id: data.id, 
            type: 'settingUp', 
            status: (progress.percent >= 1) ? "Ready" : "Getting your environment ready ...", 
            progress: totalProgress 
        })
    } })
}