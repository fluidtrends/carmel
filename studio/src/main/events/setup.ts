import { send } from './main'
import { runCommand } from './commands'
import { window } from '../window'
import * as system from '../system'
import { download } from 'electron-dl'
import fs from 'fs-extra'
import path from 'path'
import shortid from 'shortid'

export const downloadFile = async (data: any) => {
    const env = system.env()
    const directory = path.resolve(env.home.path, 'downloads')
    const filename = `${shortid.generate()}`

    let totalProgress = 0
    let totalBytes = 0
    fs.existsSync(directory) || fs.mkdirsSync(directory)
    const startTime = Date.now()

    const onProgress = async (progress: any) => {
        totalProgress = Math.round(20 * progress.percent)
        totalBytes = progress.totalBytes
    }

    await download(window, data.url, { directory, filename, onProgress })
    const totalTime = Date.now() - startTime
    const speed = Math.round(totalBytes / totalTime) / 1000
    const file = path.resolve(directory, filename)

    return { totalTime, filename, file, directory, totalBytes, speed }
}

export const installNode = async (data: any) => {
    const { version, build, platform } = data

    const filename = `node-v${version}.${build}-${platform}`
    const url = `https://nodejs.org/dist/latest-v${version}.x/${filename}.tar.gz`
    const downloaded = await downloadFile({ url })

    const env = system.env()
    const decompress = require('decompress')
    const decompressTargz = require('decompress-targz')

    const dist = path.resolve(env.home.path, 'cache', 'node')
    const dir = path.resolve(dist, 'default') 

    await decompress(downloaded.file, dist, { strip: 0,
        plugins: [ decompressTargz() ]
    })

    fs.moveSync(path.resolve(dist, filename), dir)

    return { ...downloaded, dir }
}

export const setup = async (data: any) => {
    await send({ 
        id: data.id, 
        type: 'settingUp', 
    })
    
    const download = await installNode({ version: '12', build: '18.3', platform: 'darwin-x64' })

    const estimatedSize = 700
    const estimatedTime =  Math.round(estimatedSize / download.speed)

    await send({ 
        id: data.id, 
        type: 'settingUp', 
        estimatedTime
    })

    await runCommand({ commandId: 'status' })

    await send({ 
        id: data.id, 
        type: 'settingUp', 
        done: true
    })
}