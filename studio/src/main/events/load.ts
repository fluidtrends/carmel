import { send } from './main'
import * as system from '../system'
import fs from 'fs'
import path from 'path'

export const load = async (data: any) => {
    const env = system.env()
    const session = system.session
    const products = fs.readdirSync(path.resolve(env.home.path, 'products'))
                        .filter(id => !id.startsWith('.'))
                        .map(id => JSON.parse(fs.readFileSync(path.resolve(env.home.path, 'products', id, '.carmel.json'), 'utf8')))
    const product = session.productId ? products.find(p => p.id === session.productId) : undefined

    await send(Object.assign({}, { 
        id: data.id, 
        type: 'loaded', 
        env,
        products,
        session
    }, product && { product })
}