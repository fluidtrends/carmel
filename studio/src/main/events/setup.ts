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
import * as yarn from "@yarnpkg/cli"

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

export const downloadDependency = async (data: any) => {
    const now = Date.now()
    const env = system.env()
    const manifest = await pacote.manifest(data.id)
    const cwd = path.resolve(env.home.path, data.type, manifest.name, manifest.version, manifest.name)

    if (fs.existsSync(cwd)) return {
        version: manifest.version, time: 0, name: manifest.name
    }
  
    await pacote.extract(manifest._resolved, cwd)

    if (!fs.existsSync(path.resolve(cwd, 'package.json'))) return

    return {
        time: Math.round((Date.now() - now) / 1000),
        version: manifest.version,
        name: manifest.name
    }
}

export const installDependencies = async (data: any) => {

    const env = system.env()
    const yarnFile = path.resolve(env.home.path, '.yarnrc')

    if (!fs.existsSync(yarnFile)) {
        fs.writeFileSync(yarnFile, `registry "https://registry.npmjs.org/"
yarn-offline-mirror-pruning true
yarn-offline-mirror ./cache/yarnmirror/1
--cache-folder ./cache/yarncache/1`, 'utf8')
    }

    const cwd = path.resolve(env.home.path, data.type, data.name, data.version, data.name)

    return await shell({ cmd: `yarn --production --silent --prefer-offline install`, cwd })
}

export const installArchive = async (data: any) => {
    const now = Date.now()
    const env = system.env()
    const { name, version } = data
    const platform = `${os.platform}-${os.arch}`
    const filename = `${name}-${version}-${platform}.tar.gz`
    const dir = path.resolve(env.home.path, data.type, name, version)
    const dest = path.resolve(dir, name)

    if (fs.existsSync(dest)) {
        return {
            dest, 
            time: 0
        }
    }

    fs.mkdirsSync(dir)

    const url = `http://store.carmel.io/archives/${filename}`
    const stream = await axios({ method: 'get', url, responseType: 'stream' })

    await new Promise((resolve, reject) => {
            stream.data
                .pipe(require('zlib').createGunzip({ fromBase: false }))
                .pipe(require('tar').x({ strip: 0, C: dir }))
               .on('end', () => resolve())
    })

    return {
        dest,
        time: Math.round((Date.now() - now) / 1000),
    }
}

export const installMirror = async (data: any) => {
    const now = Date.now()
    const env = system.env()
    const name = 'yarnmirror'
    const { version } = data
    const filename = `${name}-${version}.tar.gz`
    const dir = path.resolve(env.home.path, data.type, name, version)
    const dest = path.resolve(dir, name)

    if (fs.existsSync(dest)) {
        return {
            dest, 
            time: 0
        }
    }

    fs.mkdirsSync(dir)

    const url = `http://store.carmel.io/archives/${filename}`
    console.log(url)
    const stream = await axios({ method: 'get', url, responseType: 'stream' })

    await new Promise((resolve, reject) => {
            stream.data
                .pipe(require('zlib').createGunzip({ fromBase: false }))
                .pipe(require('tar').x({ strip: 0, C: dir }))
               .on('end', () => resolve())
               .on('error', (error: any) => console.log(error))
    })

    return {
        dest,
        time: Math.round((Date.now() - now) / 1000),
    }
}

export const setup = async (data: any) => {
    const nodeVersion = '12.18.3'
    let totalTime = 0

    const mirror = await installMirror({ name: 'yarnmirror', version: '1', type: "cache" })
    totalTime = totalTime + mirror.time 
    console.log("mirror", mirror.time, totalTime)

    // const node = await installArchive({ name: 'node', version: nodeVersion, type: "cache" })
    // totalTime = totalTime + node.time 
    // console.log("node", node.time, totalTime)

    // const yarn = await shell({ cmd: 'npm i -g yarn' })
    // totalTime = totalTime + yarn.time
    // console.log("yarn", yarn.time, totalTime)

    // const sdk = await downloadDependency({ id: '@carmel/sdk', type: "cache" })
    // totalTime = totalTime + sdk.time
    // console.log("sdk", sdk.time, totalTime)

    // const papanache = await downloadDependency({ id: 'papanache', type: "packers" })
    // totalTime = totalTime + papanache.time
    // console.log("papanache", papanache.time, totalTime)

    // const jayesse = await downloadDependency({ id: 'jayesse', type: "stacks" })
    // totalTime = totalTime + jayesse.time
    // console.log("jayesse", jayesse.time, totalTime)

    // const bananas = await downloadDependency({ id: '@fluidtrends/bananas', type: "bundles" })
    // totalTime = totalTime + jayesse.time
    // console.log("bananas", bananas.time, totalTime)

    // const bananasDeps = await installDependencies({ name: bananas.name, version: bananas.version, type: "bundles" })
    // totalTime = totalTime + bananasDeps.time
    // console.log("bananas deps", bananasDeps.time, totalTime)

    // const papanacheDeps = await installDependencies({ name: papanache.name, version: papanache.version, type: "packers" })
    // totalTime = totalTime + papanacheDeps.time
    // console.log("papanache deps", papanacheDeps.time, totalTime)

    // const jayesseDeps = await installDependencies({ name: jayesse.name, version: jayesse.version, type: "stacks" })
    // totalTime = totalTime + jayesseDeps.time
    // console.log("jayesse deps", jayesseDeps.time, totalTime)

    // const sdkDeps = await installDependencies({ name: sdk.name, version: sdk.version, type: "cache" })
    // totalTime = totalTime + sdkDeps.time
    // console.log("sdk deps", sdkDeps.time, totalTime)

    // const env = system.env()
    // const cwd = path.resolve(env.workspace.path, 'MyFirstProduct')
    // fs.mkdirsSync(cwd)
   
    // const init = await carmel({ 
    //     node: nodeVersion,
    //     sdk: sdk.version,
    //     cmd: "init",
    //     args: [{
    //         name: "name",
    //         value: "My First Product"
    //     }, {
    //         name: "template",
    //         value: "@fluidtrends/bananas/starter"
    //     }], 
    //     cwd 
    // })

    // await send({ id: data.id, type: 'settingUp', status: init })    

    // const started = await carmel({ 
    //     node: nodeVersion,
    //     sdk: sdk.version,
    //     cmd: "start",
    //     cwd 
    // })

    // await send({ id: data.id, type: 'settingUp', status: started })    

    // const productData: any = JSON.parse(fs.readFileSync(path.resolve(cwd, '.carmel.json'), 'utf8'))

    // system.init({
    //     productId: productData.id,
    //     sdk, 
    //     packers: { papanache },
    //     stacks: { jayesse },
    //     bundles: { "@fluidtrends/bananas": bananas }
    // })
    
    // await send({ id: data.id, type: 'settingUp', done: true })    
}