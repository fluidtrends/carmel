import { Node } from './Node' 
import merge from 'deepmerge'
import baseConfig from '../config.json'
import * as functions from './functions'

(async () => {
    const isOperator = process.env.OPERATOR
    const root = `${process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']}/.carmel/mesh${isOperator ? "-op" : ""}/`

    try {
        const config: any = merge(baseConfig, require('../config.private.json'))
        const node = new Node({ root, ...config, isOperator })
        node.session.registerFunctions(functions)

        process.on('SIGINT', async () => {
            await node.stop()
            process.exit()
        })

        await node.start()

        if (!isOperator) {
            await node.session.station.channel('stats:utils').sendEvent('req:time', { format: "MMMM d, YYYY HH:mm" })
        }
    } catch (e) {
        console.log(e)
        process.exit(1)
    }
})()