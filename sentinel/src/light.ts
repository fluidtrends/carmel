import { start, stop } from './main'

(async () => {
    try {
        process.on('SIGINT', async () => {
            await stop()
            process.exit()
        })

        await start(undefined, false)
    } catch (e) {
        process.exit(1)
    }
})()
