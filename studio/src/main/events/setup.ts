import { send } from './main'
import * as system from '../system'
import { 
    downloadNodePackage,
    installNodeDependencies,
    installBundle,
    installPacker,
    installStack,
    installCacheArchive
} from '../services/files'
import { 
    npm
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
    
    const { nodeVersion } = data

    if (!nodeVersion) {
        throw new Error('Invalid release manifest')
    }    

    const env = system.env()

    await send({ id: e.id, type: 'setup', status: 'Installing JavaScript ...' })    
    await installCacheArchive({ name: 'node', version: nodeVersion, type: "cache" })
    await send({ id: e.id, type: 'setup', status: 'Installing the package manager ...' })    
    await npm({ nodeVersion, cmd: 'i -g pnpm' })
    await send({ id: e.id, type: 'setup', status: 'Installing the Carmel SDK ...' })    

    const sdk = await downloadNodePackage({ nodeVersion, id: '@carmel/sdk', type: "cache" })    
    await installNodeDependencies({ nodeVersion, name: sdk.name, version: sdk.version, type: "cache" })
    await send({ id: e.id, type: 'settingUp', status: 'Installing The Default Packer (papanache)...' })    

    const papanache = await installPacker({ nodeVersion, id: "papanache" })
    await send({ id: data.id, type: 'settingUp', status: 'Installing The Default Stack (jayesse)...' })    
    const jayesse = await installStack({ nodeVersion, id: "jayesse" })
    await send({ id: data.id, type: 'settingUp', status: 'Installing The Default Bundle (traista)...' })    
    const traista = await installBundle({ nodeVersion, id: "traista" })

    // await send({ id: data.id, type: 'settingUp', status: 'Creating A Sample Product ...' })    

    // const product: any = await createProduct({ 
    //     node: nodeVersion, 
    //     sdk: sdk.version, 
    //     name: "My First Product",
    //     template: "@fluidtrends/bananas/starter"
    // })

    // console.log("sample product ok")

    await send({ id: data.id, type: 'settingUp', status: 'Initializing Your System ...' })    

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
        packers: {
            papanache: { versions: [papanache.version] }
        },
        stacks: {
            jayesse: { versions: [jayesse.version] }
        },
        bundles: {
            traista: { versions: [traista.version] }
        }
    })
    
    await send({ id: e.id, type: 'settingUp', status: 'Your Carmel Environment Is Ready', done: true })    
}