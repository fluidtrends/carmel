import { send } from './main'
import { createProduct } from './products'
import { window } from '../window'
import * as system from '../system'
import { download } from 'electron-dl'
import fs from 'fs-extra'
import path from 'path'
import shortid from 'shortid'
import os from 'os'
import axios from 'axios'
import { shell, carmel } from './commands'
import * as pacote from 'pacote'

export const downloadFile = async (data: any) => {
    const env = system.env()
    const directory = path.resolve(env.home.path, 'downloads')

    let totalProgress = 0
    let totalBytes = 0
    fs.existsSync(directory) || fs.mkdirsSync(directory)
    const startTime = Date.now()

    const file = path.resolve(directory, data.filename)

    const onProgress = async (progress: any) => {
        totalProgress = Math.round(100 * progress.percent)
        totalBytes = progress.totalBytes
        data.onProgress && data.onProgress(totalProgress)
    }

    await download(window, data.url, { directory, onProgress })
    const totalTime = Date.now() - startTime
    const downloadSpeed = Math.round(totalBytes / totalTime) / 1000

    return { downloadSpeed, file }
}

export const installDependency = async (data: any) => {
    const env = system.env()
    const manifest = await pacote.manifest(data.id)
    const cwd = path.resolve(env.home.path, data.type, manifest.name, manifest.version, manifest.name)

    if (fs.existsSync(cwd)) return {
        version: manifest.version
    }
  
    await pacote.extract(manifest._resolved, cwd)

    if (!fs.existsSync(path.resolve(cwd, 'package.json'))) return

    await shell({ cmd: 'yarn install --production --silent', cwd })

    return {
        version: manifest.version
    }
}

export const installArchive = async (data: any) => {
    const env = system.env()
    const { name, version } = data
    const platform = `${os.platform}-${os.arch}`
    const filename = `${name}-${version}-${platform}.tar.gz`
    const dir = path.resolve(env.home.path, data.type, name, version)
    const dest = path.resolve(dir, name)

    if (fs.existsSync(dir)) return

    fs.mkdirsSync(dir)

    const url = `http://store.carmel.io/archives/${filename}`
    const { file } = await downloadFile({ url, filename, onProgress: data.onProgress })

    await require('decompress')(file, dir, { strip: 0, plugins: [ require('decompress-targz')() ]})

    fs.existsSync(path.resolve(dest, 'package.json')) && await shell({ cmd: 'yarn install --silent --ignore-optional --production', cwd: dest })
}

export const setup = async (data: any) => {
    const nodeVersion = '12.18.3'

    await installArchive({ name: 'node', version: nodeVersion, type: "cache" })
    await shell({ cmd: 'npm i -g yarn' })
    const sdk = await installDependency({ id: '@carmel/sdk', type: "cache" })

    const papanache = await installDependency({ id: 'papanache', type: "packers" })
    const jayesse = await installDependency({ id: 'jayesse', type: "stacks" })
    const bananas = await installDependency({ id: '@fluidtrends/bananas', type: "bundles" })
   
    const env = system.env()
    const cwd = path.resolve(env.workspace.path, 'MyFirstProduct')
    fs.mkdirsSync(cwd)
   
    const init = await carmel({ 
        node: nodeVersion,
        sdk: sdk.version,
        cmd: "init",
        args: [{
            name: "name",
            value: "My First Product"
        }, {
            name: "template",
            value: "@fluidtrends/bananas/starter"
        }], 
        cwd 
    })

    await send({ id: data.id, type: 'settingUp', status: init })    

    const started = await carmel({ 
        node: nodeVersion,
        sdk: sdk.version,
        cmd: "start",
        cwd 
    })

    await send({ id: data.id, type: 'settingUp', status: started })    

    const productData: any = JSON.parse(fs.readFileSync(path.resolve(cwd, '.carmel.json'), 'utf8'))

    system.init({
        productId: productData.id,
        sdk, 
        packers: { papanache },
        stacks: { jayesse },
        bundles: { "@fluidtrends/bananas": bananas }
    })
    
    await send({ id: data.id, type: 'settingUp', done: true })    
}