import { send } from './main'
import { carmel } from './commands'
import { installBundle } from './setup'
import { _tryChallenge, _getProgress, _addEffort } from './blockchain'
import * as validators from '../validators'
import * as system from '../system'
import * as window from '../window'
import fs, { existsSync } from 'fs-extra'
import path from 'path'
import readdir from "recursive-readdir"
import semver from 'semver'

import { eos } from '../services/blockchain'

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

////////


export const _resolveChallenge = (env: any, challenge?: any, version?: string) => {
    const cacheRootDir = path.resolve(env.home.path, "bundles", challenge.bundle)
    const bundleDir = path.resolve(cacheRootDir, version, challenge.bundle)
    const dir = path.resolve(bundleDir, "challenges", challenge.name)        
    const manifest = path.resolve(dir, "challenge.json")
    const manifestData = JSON.parse(fs.readFileSync(manifest, "utf-8"))
    
    const tutorials = manifestData.tasks.map((task: any) => fs.readFileSync(path.resolve(dir, 'tasks', `${task.id}`, 'tutorial.md'), "utf-8"))

    const bundle = {
        dir: bundleDir,
        exists: fs.existsSync(bundleDir),
        id: challenge.bundle,
        version: challenge.challengeVersion
    }

    const data = Object.assign({}, challenge)
    delete data.challengeVersion
    
    const result = {
        ...data,
        bundle,
        dir,
        exists: fs.existsSync(manifest),
        ...manifestData,
        tutorials
    }

    return result
}

const loadSecrets = (env: any) => {
    try {
        const file = path.resolve(env.home.path, 'secrets', '.data', 'index.json')
        const secrets: any = JSON.parse(fs.readFileSync(file, 'utf8'))
        return secrets
    } catch {
    }
}

const doStartChallenge = async (challenge: any, productId: string, eventId: string, env: any, session: any) => {
    if (!challenge.exists) {
        await send({ 
            id: eventId,
            type: "startChallengeError",
            error: "Challenge missing"
        })
        return 
    }

    try {
        const secrets = loadSecrets(env)
        const { privateKey } = secrets.user

        if (!privateKey || !session.user) {
            throw new Error('Not logged in yet')
        }

        await _tryChallenge({ privateKey, productId, user: session.user, challenge, challengeVersion: challenge.bundle.version })

        await send({ 
            id: eventId,
            type: "startChallenge",
            challenge
        })
    } catch (e) {
        await send({ 
            id: eventId,
            type: "startChallengeError",
            error: e.message
        })
    }
}

export const startChallenge = async (data: any) => {    
    system.reload()
    const env = system.env()
    let latest: any

    if (env.lock.exists) {
        await send({ 
            id: data.id,
            type: "startChallengeError",
            error: "The vault is locked"
        })
        return 
    }

    (data.challenge.versions || []).map((challengeVersion: string) => {
        const current = _resolveChallenge(env, { ...data.challenge, challengeVersion }, challengeVersion)
        latest = latest || current
        latest = semver.gt(challengeVersion, latest.bundle.version) ? current : latest
    })

    if (!latest) {
        await send({ 
            id: data.id,
            type: "startChallengeError",
            error: "Invalid bundle"
        })
        return
    }

    if (!latest.bundle.exists) {
        await installBundle({ id: latest.bundleId, version: latest.bundle.version })
        latest = _resolveChallenge(env, data.challenge, latest.bundle.version)
        await doStartChallenge(latest, data.productId, data.id, env, system.session)
        return
    }

    await doStartChallenge(latest, data.productId, data.id, env, system.session)
}

export const validateTask = async (data: any) => {    
    try {
        await validators.main(data)

        await send({ 
            id: data.id,
            type: "validateTaskOk"
        })
    } catch (e) {
        await send({ 
            id: data.id,
            type: "validateTaskError",
            error: e.message
        })
    }
}

export const updateProgress = async (data: any) => {    
    system.reload()
    const env = system.env()
    let latest: any

    if (env.lock.exists) {
        await send({ 
            id: data.id,
            type: "updateProgressError",
            error: "The vault is locked"
        })
        return 
    }
    
    try {
        const secrets = loadSecrets(env)
        const { privateKey } = secrets.user

        if (!privateKey || !system.session.user) {
            throw new Error('Not logged in yet')
        }

        await _addEffort({ 
            privateKey, 
            user: system.session.user, 
            challenge: data.challenge,
            details: data.details,
            account: system.session.account 
        })

        await send({ 
            id: data.id,
            type: "updateProgressOk"
        })

    } catch (e) {
        await send({ 
            id: data.id,
            type: "updateProgressError",
            error: e.message
        })
    }
}
