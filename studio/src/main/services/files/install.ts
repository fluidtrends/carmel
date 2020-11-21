import * as system from '../../system'
import path from 'path'
import { pnpm } from '../../events/commands'
import os from 'os'
import axios from 'axios'
import fs from 'fs-extra'
import { downloadNodePackage } from '.'

const REMOTE_CACHE_ROOT = `http://files.carmel.io/cache`

export const installNodeDependencies = async (data: any) => {
    console.log("installNodeDependencies:", data)
    const env = system.env()
    const cwd = path.resolve(env.home.path, data.type, data.name, data.version, data.name)

    return await pnpm({ nodeVersion: data.nodeVersion, cmd: `install -P`, cwd })
}

export const installBundle = async (data: any) => {
    const archive = await downloadNodePackage({ id: data.id, version: data.version, type: "bundles" })
    
    if (archive.exists) {
        return archive
    }
    
    await installNodeDependencies({ nodeVersion: data.nodeVersion, name: archive.name, version: archive.version, type: "bundles" })

    return archive    
}

export const installPacker = async (data: any) => {
    const archive = await downloadNodePackage({ id: data.id, type: "packers" })

    if (archive.exists) {
        return archive
    }

    await installNodeDependencies({ nodeVersion: data.nodeVersion, name: archive.name, version: archive.version, type: "packers" })

    return archive    
}

export const installStack = async (data: any) => {
    const archive = await downloadNodePackage({ id: data.id, type: "stacks" })

    if (archive.exists) {
        return archive
    }

    await installNodeDependencies({ nodeVersion: data.nodeVersion, name: archive.name, version: archive.version, type: "stacks" })

    return archive
} 

export const installCacheArchive = async (data: any) => {
    const now = Date.now()
    const env = system.env()
    const { name, version } = data
    const platform = `${os.platform}-${os.arch}`
    const filename = data.id ? `${data.id}.tar.gz` : `${name}-${version}-${platform}.tar.gz`
    
    const dir = path.resolve(env.home.path, data.type || 'cache', name, version)
    const dest = path.resolve(dir, name)

    if (fs.existsSync(dest) && data.name !== 'pnpm') {
        return {
            dest, 
            time: 0
        }
    }

    fs.mkdirsSync(dir)

    const url = `${REMOTE_CACHE_ROOT}/${filename}`
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