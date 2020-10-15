import { send } from './main'
import { carmel } from './commands'
import * as system from '../system'
import * as window from '../window'
import fs from 'fs-extra'
import path from 'path'
import readdir from "recursive-readdir"

// export const installTemplate = async (data: any) => {
//     const info = data.id.split('/')

//     let bundleVersion = undefined
//     let bundleId = data.id
//     let name = data.id

//     name = info.pop()!
//     bundleId = info.shift()!
//     bundleId = bundleId.charAt(0) === '@' ? `${bundleId}/${info.shift()}` : bundleId
//     bundleVersion = info && info.length > 0 ? info.shift() : bundleVersion
// }

export const createProduct = async (data: any) => {
    const env = system.env()
    const cwd = path.resolve(env.workspace.path, data.name.replace(/\s/g, ''))

    if (fs.existsSync(cwd)) {
        await send({ 
            id: data.id,
            type: 'createdProduct', 
            error: 'The name is taken, please choose another name'
        })
        return
    }

    fs.mkdirsSync(cwd)

    const result = await carmel({ 
        node: data.node,
        sdk: data.sdk,
        cmd: "init",
        args: [{
            name: "name",
            value: data.name
        }, {
            name: "template",
            value: data.template
        }], 
        cwd 
    })

    const manifest: any = JSON.parse(fs.readFileSync(path.resolve(cwd, '.carmel.json'), 'utf8'))

    system.update({ productId: manifest.id })

    await send({ 
        id: data.id,
        type: 'createdProduct', 
        product: manifest
    })
}

export const selectProduct = async (data: any) => {
    system.update({ productId: data.product.id })
}

export const saveFile = async (data: any) => {
    const env = system.env()
    const cwd = path.resolve(env.home.path, 'products', data.productId)
    const file = path.resolve(cwd, data.path)

    fs.writeFileSync(file, data.content, 'utf8')

    const manifestFile = path.resolve(cwd, '.carmel.json')
    const manifest: any = JSON.parse(fs.readFileSync(manifestFile, 'utf8'))

    fs.writeFileSync(manifestFile, JSON.stringify({ ...manifest, timestamp: `${Date.now()}` }, null, 2), 'utf8')
 
    // const ext: string = path.extname(file).substring(1).toUpperCase()
    // const needsReload = ["MD"].includes(ext)
    // needsReload && window.browser.reload()
}

export const loadFile = async (data: any) => {
    const env = system.env()
    const cwd = path.resolve(env.home.path, 'products', data.productId)
    const file = path.resolve(cwd, data.path)
    const content = fs.readFileSync(file, 'utf8')

    await send({ 
        id: data.id,
        type: 'fileLoaded', 
        content
    })
}

export const loadSelectedProduct = async (data: any) => {
    system.reload()
    const env = system.env()
    const server = system.server
    const productId = system.session.productId

    const isLocked = env.lock.exists

    if (!productId) return 

    const cwd = path.resolve(env.home.path, 'products', productId)
    const manifest = JSON.parse(fs.readFileSync(path.resolve(cwd, '.carmel.json'), 'utf8'))
    const rootDir = path.resolve(env.home.path, 'products', productId, 'carmel')
    const files = (await readdir(rootDir, ['.git', 'node_modules'])).map(file => path.relative(rootDir, file))

    const serverPath = path.resolve(env.home.path, 'servers', 'start', productId)
    const hasStartServer = fs.existsSync(serverPath)

    await send({ 
        id: data.id,
        type: 'selectedProductLoaded', 
        manifest,
        isLocked,
        hasStartServer,
        staticServerPort: server.port,
        rootDir, 
        files
    })
}

export const unselectProduct = async (data: any) => {
    system.update({ productId: undefined })
}