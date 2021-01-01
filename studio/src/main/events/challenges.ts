import { send } from './main'
import { carmel } from './commands'
import { installBundle } from '../services/files'
import * as validators from '../validators'
import * as system from '../system'
import * as window from '../window'
import fs, { existsSync } from 'fs-extra'
import path from 'path'
import readdir from "recursive-readdir"
import semver from 'semver'

import { eos } from '../services/blockchain'

//////

export const _resolveChallenge = (data: any) => {
    const { env, challenge, version } = data 
    const { bundle_name, name, challenge_version } = challenge 

    let bundle: any = {
        exists: false
    }

    try {
        const cacheRootDir = path.resolve(env.home.path, "bundles", bundle_name)
        const bundleDir = path.resolve(cacheRootDir, version, bundle_name)
        const dir = path.resolve(bundleDir, "challenges", name)        
        const manifest = path.resolve(dir, "challenge.json")
        
        bundle = {
            dir: bundleDir,
            exists: fs.existsSync(bundleDir),
            id: bundle_name,
            version: challenge_version || version
        }

        if (!bundle.exists) {
            return {
                ...challenge,
                bundle,
                exists: false
            }
        }

        const data = Object.assign({}, challenge)
        const manifestData = JSON.parse(fs.readFileSync(manifest, "utf-8"))
        const tutorials = manifestData.tasks.map((task: any) => fs.readFileSync(path.resolve(dir, 'tasks', `${task.id}`, 'tutorial.md'), "utf-8"))

        const result = {
            ...data,
            bundle,
            dir,
            isCompleted: data.done > 0,
            exists: fs.existsSync(manifest),
            ...manifestData,
            tutorials
        }

        return result
    } catch (e) {
        return {
            ...challenge,
            bundle,
            error: e.message,
            exists: false
        }
    }
}

//////

export const listChallenges = async (data: any) => {
    const result = await eos.read("carmelsystem", "carmelsystem", "challenges")
    
    const challenges = result.rows.map((c: any) => {
        let skills = { } as any
        (c.skills || []).map((s: any) => skills[s.key] = s.value)
        
        return {
            ...c,
            ...JSON.parse(c.details || {}),
            skills
        }
    })

    await send({ 
        id: data.id,
        type: 'challengesList',
        challenges
    })
}

export const startChallenge = async (data: any) => {    
    system.reload()

    const env = system.env()
    const { session } = system
    const { challenge, product } = data 

    let latest: any

    (data.challenge.versions || []).map((challenge_version: string) => {
        const current = _resolveChallenge({ env, challenge: { ...data.challenge, challenge_version, bundle_name: data.challenge.bundle_name || data.challenge.bundle }, version: challenge_version })
        latest = latest || current
        latest = semver.gt(challenge_version, latest.bundle.version) ? current : latest
    })

    if (!latest) throw new Error('Invalid bundle')

    if (!latest.bundle.exists) {
        await installBundle({ id: latest.bundle.id, version: latest.bundle.version })
        latest = _resolveChallenge({ env, challenge: data.challenge, version: latest.bundle.version })
    }

    await eos.system.call("trychallenge", {
        account: session.user.account,
        user: session.user.username,
        challenge_name: latest.name,
        challenge_version: latest.bundle.version,
        product_id: product.id
    })

    await send({ 
        id: data.id,
        type: 'startChallenge'
    })
}

export const validateTask = async (data: any) => {    
    try {
        await validators.main(data)

        await send({ 
            id: data.id,
            type: "validateTask"
        })
    } catch (e) {
        await send({ 
            id: data.id,
            type: "validateTask",
            error: e.message
        })
    }
}

export const updateProgress = async (data: any) => { 
    system.reload()
    
    const env = system.env()
    const { session } = system
    const { challenge, product, progress } = data 

    await eos.system.call("addeffort", {
        account: session.user.account,
        user: session.user.username,
        challenge_name: progress.name,
        challenge_version: progress.bundle.version,
        product_id: product.id,
        successful: data.error ? false : true,
        results: JSON.stringify(data.results || {})
    })

    await send({ 
        id: data.id,
        type: 'updateProgress'
    })
}