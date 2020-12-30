import * as window from '../window'
import * as system from '../system'
import fs from 'fs'
import path from 'path'
import readdir from "recursive-readdir"
import { eos } from '../services/blockchain'
import { _resolveChallenge } from './challenges'
import { installBundle } from '../services/files'
import { carmel } from './commands'

export const send = async (data: any) => {
    const sender = window.content()
    sender && sender.send('carmel', data)
}

export const newUrl = async (url: any) => {
    await send({ type: 'url', url })
    window.show()
}

export const updateWebPreview = async (data: any) => {
    window.updateBrowser(data)
}

export const showWebPreview = async (data: any) => {
    window.showBrowser(data)
}

export const hideWebPreview = async () => {
    window.hideBrowser()
}

export const _loadUser = async (data: any) => {
    const now = Date.now()
    let sys: any = data.system
    let env: any

    if (!sys) {
        system.reload()
        env = system.env()
        sys = system
    }

    const result = await eos.read("carmelsystem", "carmelsystem", "users", ["name", "secondary", data.username])

    if (!result || !result.rows || result.rows.length === 0) {
        throw new Error("User not found")
    }

    const tokens = await eos.balances({ account: data.account })

    let user = {
        ...result.rows[0],
        tokens
    }

    let skills = { } as any
    (user.skills || []).map((s: any) => skills[s.key] = s.value)
   
    user.skills = skills

    sys.update({ 
        loadedTimestamp: now,
        user
    })

    return user
}

const _loadProfile = async (user: any, env: any, product?: any) => {    
    let result = await eos.read("carmelsystem", user.account, "progress", ['name', 'secondary', user.username])
    let all = (result && result.rows && result.rows.length > 0) ? result.rows : []
 
    let sorted: any = {}

    // Resolve local challenges
    all = all.filter((c: any) => product ? (product.id === c.product_id) : true)
                      .map((c: any) => ({
                            ...c,
                            bundle: c.bundle_name,
                            name: c.challenge_name,
                            challengeVersion: c.challenge_version
                      }))
                      .map((c: any) => _resolveChallenge({ env, challenge: c, version: c.challengeVersion }))
    
    // Install missing bundles
    await Promise.all(all.map((c: any) => c.bundle.exists ? Promise.resolve() : installBundle({ id: c.bundle.id, version: c.bundle.version })))
    
    // Resolve again
    all = all.map((c: any) => _resolveChallenge({ env, challenge: c, version: c.bundle.version }))

    // Organize by product and completion
    all.map((c: any) => {
        sorted[c.product_id] = sorted[c.product_id] || { completed: [], inProgress: []}
        sorted[c.product_id][(c.isCompleted ? "completed" : "inProgress")].push(c)
    })

    const data = await _loadUser({ username: user.username })

    return { challenges: sorted, ...data }
}

const _parseProductFiles = (files: any) => {
    let parsedFiles: any = {}
    files.map((file: string) => {
        const dirs = file.split(path.sep)
        const filename = dirs.pop()

        let dir: any = parsedFiles
        let dPath = ""

        dirs.map((d: string) => {
            dir[d] = dir[d] || {}
            dPath = `${dPath}${path.sep}${d}`
            dir[d].__path = dPath
            dir = dir[d]
        })

        dir.__files = dir.__files || []
        dir.__files.push(filename)
    })

    return parsedFiles
}

const _loadProduct = async (productId: any, system: any, env: any) => {
    const { server, session } = system
    const isLocked = env.lock.exists

    const cwd = path.resolve(env.home.path, 'products', productId)
    const manifest = JSON.parse(fs.readFileSync(path.resolve(cwd, '.carmel.json'), 'utf8'))
    const rootDir = path.resolve(env.home.path, 'products', productId, 'carmel')
    const rawFiles = (await readdir(rootDir, ['.git', 'node_modules'])).map(file => path.relative(rootDir, file))

    const contentDir = path.resolve(env.home.path, 'products', productId, 'content')
    const contentIndexFile = path.resolve(env.home.path, 'products', productId, 'content.json')

    fs.existsSync(contentDir) || fs.mkdirSync(contentDir)
    fs.existsSync(contentIndexFile) || fs.writeFileSync(contentIndexFile, JSON.stringify({ }), 'utf-8')

    const content = (await readdir(contentDir, ['.git', 'node_modules'])).map(file => path.relative(contentDir, file))
    const contentIndex = JSON.parse(fs.readFileSync(contentIndexFile, 'utf8'))

    const serverPath = path.resolve(env.home.path, 'servers', 'start', productId)
    const hasStartServer = fs.existsSync(serverPath)

    const files = _parseProductFiles(rawFiles)

    return {
        ...manifest,
        isLocked,
        hasStartServer,
        staticServerPort: server.port,
        timestamp: session.loadedTimestamp,
        rootDir, 
        files,
        content,
        contentIndex
    }
}

/////

export const startSession = async (data: any) => {
    system.reload()
    const env = system.env()
    system.update({ loadedTimestamp: Date.now() })
    const session = system.session

    const sdk = data.node || session.sdk.versions[0]
    const node = data.sdk || session.node.versions[0]

    const cwd = env.home.path

    console.log(session)

    if (session.ipfsIsRunning) {
        await send({ 
            id: data.id, 
            type: 'startSession', 
            session,
            env,
            status: 'IPFS already running.'
        })    
        return
    }

    const result = await carmel({ 
        id: data.id, 
        node, 
        sdk,
        cmd: "ipfs",
        args: [{ name: 'start', value: true }],
        cwd 
    })

    console.log(result)

    await send({ 
        id: data.id, 
        type: 'startSession', 
        status: 'IPFS start attempt finished.',
        session,
        env,
        result
    })
}

export const load = async (data: any) => {
    system.reload()
    const env = system.env()
    system.update({ loadedTimestamp: Date.now() })
    const session = system.session

     if (!session) {
        await send({ 
            id: data.id, 
            type: 'firstTime', 
            env,
        })
        return 
     }

    const productsDir = path.resolve(env.home.path, 'products')    

    if (!fs.existsSync(productsDir)) {
        await send({ 
            id: data.id, 
            type: 'loaded', 
            env,
            products: [],
            session
        })
        return 
    }

    const products = fs.readdirSync(productsDir)
                        .filter(id => !id.startsWith('.'))
                        .map(id => JSON.parse(fs.readFileSync(path.resolve(env.home.path, 'products', id, '.carmel.json'), 'utf8')))
                        .map(prod => {
                            const serverPath = path.resolve(env.home.path, 'servers', 'start', prod.id)
                            const started = fs.existsSync(serverPath)
                            return { ...prod, started }
                        })

    let product = session.productId ? products.find(p => p.id === session.productId) : undefined

    if (product) {
        product = await _loadProduct(product.id, system, env)
    }

    let profile = {}

    if (session.user) {
        profile = await _loadProfile(session.user, env, product)
    }

    await send(Object.assign({}, { 
        id: data.id, 
        type: 'loaded', 
        env,
        product,
        profile,
        products,
        session
    }, product && { product }))
}