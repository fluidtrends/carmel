import { send } from './main'
import * as system from '../system'
import fs from 'fs'
import path from 'path'

export const load = async (data: any) => {
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

    const product = session.productId ? products.find(p => p.id === session.productId) : undefined

    await send(Object.assign({}, { 
        id: data.id, 
        type: 'loaded', 
        env,
        products,
        session
    }, product && { product }))
}