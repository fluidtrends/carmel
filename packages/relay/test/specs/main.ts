import savor, { Context, Completion } from 'savor'
const io = require("socket.io-client");
import { Server } from '../../src'


savor.
  add('should start server', (context: Context, done: Completion) => {
    const server = new Server()
    savor.promiseShouldSucceed(server.start(), () => {}, (result) => {
        const socket = io("ws://localhost/socket.io", {})
        console.log(socket.id)
        setTimeout(() => {
            savor.promiseShouldSucceed(server.stop(), done, (result2) => {
                console.log("DONE!")
            })            
        }, 1000)
    })
}).

run('[Carmel Relay]')