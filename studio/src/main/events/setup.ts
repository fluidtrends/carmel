import { send } from './main'
import { window } from '../window'
import * as system from '../system'
import { download } from 'electron-dl'
import fs from 'fs-extra'
import path from 'path'
import shortid from 'shortid'
import os from 'os'
import axios from 'axios'
import { shell } from './commands'
import { createProduct } from './products'
import * as pacote from 'pacote'

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
    const cwd = path.resolve(env.home.path, data.type, data.name, data.version, data.name)

    return await shell({ cmd: `yarn install`, cwd })
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
    const { version } = data
    const dir = env.cache.path

    fs.existsSync(dir) || fs.mkdirsSync(dir)
    const filename = `yarnmirror-${version}.tar.gz`

    const url = `http://store.carmel.io/archives/${filename}`
    const stream = await axios({ method: 'get', url, responseType: 'stream' })

    await new Promise((resolve, reject) => {
            stream.data
                .pipe(require('zlib').createGunzip({ fromBase: false }))
                .pipe(require('tar').x({ strip: 0, C: dir }))
               .on('end', () => resolve())
               .on('error', (error: any) => console.log(error))
    })

    return {
        time: Math.round((Date.now() - now) / 1000),
    }
}

export const installBundle = async (data: any) => {
    const archive = await downloadDependency({ id: data.id, type: "bundles" })
    await installDependencies({ name: archive.name, version: archive.version, type: "bundles" })

    return archive    
}

export const installPacker = async (data: any) => {
    const archive = await downloadDependency({ id: data.id, type: "packers" })
    await installDependencies({ name: archive.name, version: archive.version, type: "packers" })

    return archive    
}

export const installStack = async (data: any) => {
    const archive = await downloadDependency({ id: data.id, type: "stacks" })
    await installDependencies({ name: archive.name, version: archive.version, type: "stacks" })

    return archive
}

export const setup = async (data: any) => {
    const nodeVersion = '12.18.3'
    let totalTime = 0
    const env = system.env()

    await send({ id: data.id, type: 'settingUp', status: 'Setting Up Your Environment ...' })    

    fs.existsSync(env.cache.path) || fs.mkdirsSync(env.cache.path)

    const yarnFile = path.resolve(env.home.path, '.yarnrc')

    if (!fs.existsSync(yarnFile)) {
        fs.writeFileSync(yarnFile, `registry "https://registry.npmjs.org/"
yarn-offline-mirror-pruning true
yarn-offline-mirror ./cache/yarnmirror
--install.production true
--install.silent true
--install.prefer-offline true
--cache-folder ./cache/yarncache`, 'utf8')
    }

    await send({ id: data.id, type: 'settingUp', status: 'Installing base mirror ...' })    

    const baseMirror = await installMirror({ version: 'base' })
    totalTime = totalTime + baseMirror.time 
    console.log("base mirror", baseMirror.time, totalTime)

    await send({ id: data.id, type: 'settingUp', status: 'Installing ipfs mirror ...' })    

    const ipfsMirror = await installMirror({ version: 'base' })
    totalTime = totalTime + ipfsMirror.time 
    console.log("ipfs mirror", ipfsMirror.time, totalTime)

    await send({ id: data.id, type: 'settingUp', status: 'Installing Node.js ...' })    

    const node = await installArchive({ name: 'node', version: nodeVersion, type: "cache" })
    totalTime = totalTime + node.time 
    console.log("node", node.time, totalTime)

    await send({ id: data.id, type: 'settingUp', status: 'Installing yarn ...' })    

    const yarn = await shell({ cmd: 'npm i -g yarn' })
    totalTime = totalTime + yarn.time
    console.log("yarn", yarn.time, totalTime)

    await send({ id: data.id, type: 'settingUp', status: 'Installing Carmel Dependencies ...' })    

    const sdk = await downloadDependency({ id: '@carmel/sdk', type: "cache" })
    totalTime = totalTime + sdk.time
    console.log("sdk", sdk.time, totalTime)

    const sdkDeps = await installDependencies({ name: sdk.name, version: sdk.version, type: "cache" })
    totalTime = totalTime + sdkDeps.time
    console.log("sdk deps", sdkDeps.time, totalTime)

    await send({ id: data.id, type: 'settingUp', status: 'Installing The Default Packer (papanache)...' })    

    const papanache = await installPacker({ id: "papanache" })
    totalTime = totalTime + papanache.time
    console.log("papanache", papanache.time, totalTime)
    
    await send({ id: data.id, type: 'settingUp', status: 'Installing The Default Stack (jayesse)...' })    

    const jayesse = await installStack({ id: "jayesse" })
    totalTime = totalTime + jayesse.time
    console.log("jayesse", jayesse.time, totalTime)

    await send({ id: data.id, type: 'settingUp', status: 'Installing The Default Bundle (@fluidtrends/bananas)...' })    

    const bananas = await installBundle({ id: "@fluidtrends/bananas" })
    totalTime = totalTime + bananas.time
    console.log("bananas", bananas.time, totalTime)

    await send({ id: data.id, type: 'settingUp', status: 'Creating A Sample Product ...' })    

    const product: any = await createProduct({ 
        node: nodeVersion, 
        sdk: sdk.version, 
        name: "My First Product",
        template: "@fluidtrends/bananas/starter"
    })
    console.log("sample product ok", product)

    await send({ id: data.id, type: 'settingUp', status: 'Initializing Your System ...' })    

    system.init({
        mirrors: ['base', 'ipfs'],
        productId: product.id,
        yarn: true,
        node: {
            versions: [nodeVersion]
        },
        sdk: {
            versions: [sdk.version]
        },
        packers: {
            papanache: { versions: [papanache.version] }
        },
        stacks: {
            jayesse: { versions: [jayesse.version] }
        },
        bundles: {
            "@fluidtrends/bananas": { versions: [bananas.version] }
        }
    })
    
    await send({ id: data.id, type: 'settingUp', status: 'Your Carmel Environment Is Ready', done: true })    
}