import { send } from './main'
import * as system from '../system'
import { 
    createYarnConfig,
    downloadNodePackage,
    installYarnMirror,
    installNodeDependencies,
    installCacheArchive
} from '../services/files'
import { 
    node
} from './commands'
import axios from 'axios'
import fs from 'fs-extra'
import path from 'path'

const REMOTE_ROOT = `http://files.carmel.io`

export const setup = async (e: any) => {
    const { data } = await axios({ method: 'get', url: `${REMOTE_ROOT}/releases/latest.json`, responseType: 'json' })

    if (!data) {
        throw new Error('Could not find release manifest')
    }
    
    const { nodeVersion, yarnMirrors } = data

    if (!nodeVersion || !yarnMirrors) {
        throw new Error('Invalid release manifest')
    }    

    const env = system.env()

    await send({ id: e.id, type: 'setup', status: 'Installing JavaScript ...' })    

    createYarnConfig()

    await installCacheArchive({ name: 'node', version: nodeVersion, type: "cache" })

    await send({ id: e.id, type: 'setup', status: `Preparing your environment ...` })  

    await Promise.all(yarnMirrors.map((mirror: string) => installYarnMirror({ id: mirror })))

    await send({ id: e.id, type: 'setup', status: 'Installing the package manager ...' })    

    await node({ nodeVersion, cmd: 'npm i -g yarn' })
    
    await send({ id: e.id, type: 'setup', status: 'Installing the Carmel SDK ...' })    

    const sdk = await downloadNodePackage({ nodeVersion, id: '@carmel/sdk', type: "cache" })    
    await installNodeDependencies({ nodeVersion, name: sdk.name, version: sdk.version, type: "cache" })
    // fs.symlinkSync(path.resolve(env.cache.path, sdk.name, sdk.version), path.resolve(env.cache.path, sdk.name, 'default'), 'dir')

    // await send({ id: e.id, type: 'settingUp', status: 'Installing The Default Packer (papanache)...' })    

    // const papanache = await installPacker({ id: "papanache" })
    // totalTime = totalTime + papanache.time
    // console.log("papanache", papanache.time, totalTime)
    // fs.symlinkSync(path.resolve(env.home.path, 'packers', papanache.name, papanache.version), path.resolve(env.home.path, 'packers', papanache.name, 'default'), 'dir')

    // await send({ id: data.id, type: 'settingUp', status: 'Installing The Default Stack (jayesse)...' })    

    // const jayesse = await installStack({ id: "jayesse" })
    // totalTime = totalTime + jayesse.time
    // console.log("jayesse", jayesse.time, totalTime)
    // fs.symlinkSync(path.resolve(env.home.path, 'stacks', jayesse.name, jayesse.version), path.resolve(env.home.path, 'stacks', jayesse.name, 'default'), 'dir')

    // await send({ id: data.id, type: 'settingUp', status: 'Installing The Default Bundle (@fluidtrends/bananas)...' })    

    // const bananas = await installBundle({ id: "@fluidtrends/bananas" })
    // totalTime = totalTime + bananas.time
    // console.log("bananas", bananas.time, totalTime)
    // fs.symlinkSync(path.resolve(env.home.path, 'bundles', bananas.name, bananas.version), path.resolve(env.home.path, 'bundles', bananas.name, 'default'), 'dir')

    // await send({ id: data.id, type: 'settingUp', status: 'Creating A Sample Product ...' })    

    // console.log("creating.....")

    // const product: any = await createProduct({ 
    //     node: nodeVersion, 
    //     sdk: sdk.version, 
    //     name: "My First Product",
    //     template: "@fluidtrends/bananas/starter"
    // })

    // console.log("sample product ok")

    // await send({ id: data.id, type: 'settingUp', status: 'Initializing Your System ...' })    

    system.init({
    //     productId: product.id,
        yarn: true,
        node: {
            default: nodeVersion,
            versions: [nodeVersion]
        },
        sdk: {
            default: sdk.version,
            versions: [sdk.version]
        },
    //     packers: {
    //         papanache: { versions: [papanache.version] }
    //     },
    //     stacks: {
    //         jayesse: { versions: [jayesse.version] }
    //     },
    //     bundles: {
    //         "@fluidtrends/bananas": { versions: [bananas.version] }
    //     }
    })
    
    await send({ id: e.id, type: 'settingUp', status: 'Your Carmel Environment Is Ready', done: true })    
}