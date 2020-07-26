import { send } from './main'
import { carmel } from './commands'
import * as system from '../system'
import fs from 'fs-extra'
import path from 'path'
import readdir from "recursive-readdir"

// export const installTemplate = async (data: any) => {

// }

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

// export const installd = async (data: any) => {
//     const env = system.env()
//     const cwd = path.resolve(env.workspace.path, 'MyFirstProduct')
//     // fs.mkdirsSync(cwd)
   
//     // const init = await carmel({ 
//     //     node: nodeVersion,
//     //     sdk: sdk.version,
//     //     cmd: "init",
//     //     args: [{
//     //         name: "name",
//     //         value: "My First Product"
//     //     }, {
//     //         name: "template",
//     //         value: "@fluidtrends/bananas/starter"
//     //     }], 
//     //     cwd 
//     // })

//     // await send({ id: data.id, type: 'settingUp', status: init })    

//     // const started = await carmel({ 
//     //     node: nodeVersion,
//     //     sdk: sdk.version,
//     //     cmd: "start",
//     //     cwd 
//     // })

//     // await send({ id: data.id, type: 'settingUp', status: started })    

//     // const productData: any = JSON.parse(fs.readFileSync(path.resolve(cwd, '.carmel.json'), 'utf8'))

//     // system.init({
//     //     productId: productData.id,
//     //     sdk, 
//     //     packers: { papanache },
//     //     stacks: { jayesse },
//     //     bundles: { "@fluidtrends/bananas": bananas }
//     // })
    
//     // await send({ id: data.id, type: 'settingUp', done: true })    
// }

// export const createProduct = async (data: any) => {
//     const env = system.env()
//     const cwd = path.resolve(env.workspace.path, data.name.replace(/\s/g, ''))
    
//     if (fs.existsSync(cwd)) {
//         await send({ 
//             id: data.id,
//             type: 'createdProduct', 
//             error: 'The name is taken, please choose another name'
//         })
//         return
//     }

//     fs.mkdirsSync(cwd)
   
//     await carmel({ 
//         cmd: `init --template=${data.template} --name="${data.name}"`, 
//         cwd
//     })

//     await send({ 
//         id: data.id,
//         type: 'createdProduct', 
//         done: true
//     })
// }

export const selectProduct = async (data: any) => {
    system.update({ productId: data.product.id })
}

export const saveFile = async (data: any) => {
    const env = system.env()
    const rootDir = path.resolve(env.home.path, 'products', data.productId, 'carmel')
    const file = path.resolve(rootDir, data.path)

    fs.writeFileSync(file, data.content, 'utf8')
}

export const loadFile = async (data: any) => {
    const env = system.env()
    const rootDir = path.resolve(env.home.path, 'products', data.productId, 'carmel')
    const file = path.resolve(rootDir, data.path)
    const content = fs.readFileSync(file, 'utf8')

    await send({ 
        id: data.id,
        type: 'fileLoaded', 
        content
    })
}

export const loadSelectedProduct = async (data: any) => {
    const env = system.env()
    const productId = system.session.productId

    if (!productId) return 

    const rootDir = path.resolve(env.home.path, 'products', productId, 'carmel')
    const files = (await readdir(rootDir, ['.git', 'node_modules'])).map(file => path.relative(rootDir, file))

    const serverPath = path.resolve(env.home.path, 'servers', 'start', productId)
    const started = fs.existsSync(serverPath)

    await send({ 
        id: data.id,
        type: 'selectedProductloaded', 
        started,
        rootDir, 
        files
    })
}

export const unselectProduct = async (data: any) => {
    system.update({ productId: undefined })
}