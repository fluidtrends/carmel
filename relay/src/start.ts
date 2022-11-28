(async () => {
    const { Server } = require('.')
    const server = new Server()
    await server.start()
})()