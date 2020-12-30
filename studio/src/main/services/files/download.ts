import { window } from '../../window'
import * as system from '../../system'
import { download } from 'electron-dl'
import fs from 'fs-extra'
import path from 'path'
import * as pacote from 'pacote'

export const downloadNodePackage = async (data: any) => {    
    const now = Date.now()
    const env = system.env()

    const id = `${data.id}${data.version ? '@' + data.version : ''}`

    if (data.version && fs.existsSync(path.resolve(env.home.path, data.type, data.id, data.version, data.id))) {
        return {
            time: Math.round((Date.now() - now) / 1000),
            dir: path.resolve(env.home.path, data.type, data.id, data.version, data.id),
            name: data.id,
            version: data.version,
            exists: true
        }
    }

    console.log("downloadNodePackage:", data)

    const manifest = await pacote.manifest(id)
    const dir = path.resolve(env.home.path, data.type, manifest.name, manifest.version, manifest.name)

    console.log("manifest:", manifest)
    console.log("dir:", dir)

    if (fs.existsSync(dir)) {
        return {
            version: manifest.version, 
            dir,
            time: Math.round((Date.now() - now) / 1000),
            exists: true,
            name: manifest.name
        }
    }
  
    await pacote.extract(manifest._resolved, dir)

    if (!fs.existsSync(path.resolve(dir, 'package.json'))) {
        return  {
            version: manifest.version, 
            dir,
            time: Math.round((Date.now() - now) / 1000),
            exists: true,
            name: manifest.name
        }
    }

    return {
        time: Math.round((Date.now() - now) / 1000),
        name: manifest.name,
        version: manifest.version,
        dir
    }
}

export const downloadFile = async (data: any) => {
    const now = Date.now()
    const env = system.env()

    const directory = path.resolve(env.home.path, 'downloads')

    let totalProgress = 0
    let totalBytes = 0
    
    fs.existsSync(directory) || fs.mkdirsSync(directory)

    const startTime = Date.now()

    const file = path.resolve(directory, data.filename)

    if (fs.existsSync(file)) {
        return { file, time: 0 }
    }

    const onProgress = async (progress: any) => {
        totalProgress = Math.round(100 * progress.percent)
        totalBytes = progress.totalBytes
        data.onProgress && data.onProgress(totalProgress)
    }

    await download(window, data.url, { directory, onProgress })
    const totalTime = Date.now() - startTime
    const downloadSpeed = Math.round(totalBytes / totalTime) / 1000

    return { 
        downloadSpeed, 
        file,         
        time: Math.round((Date.now() - now) / 1000)
    }
}