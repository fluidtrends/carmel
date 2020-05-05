const Main = require('./Main')

module.exports = (args) => {
    const command = Object.assign({}, { args }, { id: args._[0] } )
    const main = new Main({ command })
    return main.run()
}