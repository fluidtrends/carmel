import { start, stop } from './main'
import * as functions from './functions'

(async () => {
    try {
        process.on('SIGINT', async () => {
            await stop()
            process.exit()
        })

        await start(functions)
    } catch (e) {
        process.exit(1)
    }
})()
