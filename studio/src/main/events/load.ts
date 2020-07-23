import { send } from './main'
import * as system from '../system'
import fs from 'fs'
import path from 'path'

export const load = async (data: any) => {
    const env = system.env()
    const session = system.session || { notInstalled: true }

     if (session.notInstalled) {
        await send({ 
            id: data.id, 
            type: 'loaded', 
            session,
            products: [],
            env,
        })
        return 
     }

    const products = fs.readdirSync(path.resolve(env.home.path, 'products'))
                        .filter(id => !id.startsWith('.'))
                        .map(id => JSON.parse(fs.readFileSync(path.resolve(env.home.path, 'products', id, '.carmel.json'), 'utf8')))
                        .map(prod => {
                            const serverPath = path.resolve(env.home.path, 'servers', 'start', prod.id)
                            const started = fs.existsSync(serverPath)
                            return { ...prod, started }
                        })

    const product = session.productId ? products.find(p => p.id === session.productId) : undefined

    await send(Object.assign({}, { 
        id: data.id, 
        type: 'loaded', 
        env,
        products,
        session
    }, product && { product }))
}