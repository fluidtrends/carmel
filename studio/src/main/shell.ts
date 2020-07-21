// import path from 'path'
// import commandExists from 'command-exists'
// import fs from 'fs'
// import { spawn } from 'child_process'
// import { download } from 'electron-dl'

// let window: BrowserWindow
// let tray: Tray
// let loaded = false

// const isDevMode = !app.isPackaged
// const asset = (name: string) => isDevMode ? `assets/${name}` : path.resolve(process.resourcesPath, 'assets', name)

// const environmentTools = [['carmel'], ['node', '--version'], ['npm'], ['code'], ['hyper'], ['docker'], ['sh'], ['chrome']]

// let environment: any = {
//   tools: {}
// }

// const checkEnvironment = async () => {
//   environment = { tools: {} }

//   environmentTools.map(async (command) => {
//     const exists = commandExists.sync(command[0])
//     let details: any = false

//     if (exists) {
//       if (command.length > 1) {
//         const { stdout } = await execa(command[0], [command[1]])
//         console.log(">>", stdout)
//       }
//       details = { name: command }
//     }

//     environment.tools[command[0]] = details
//   })
// }

// window.webContents.session.on('will-download', (event, item, webContents) => {
//   // item.setSavePath('/tmp/save.pdf')

//   console.log(event, item)

//   item.on('updated', (event, state) => {
//     if (state === 'interrupted') {
//       console.log('Download is interrupted but can be resumed')
//     } else if (state === 'progressing') {
//       if (item.isPaused()) {
//         console.log('Download is paused')
//       } else {
//         console.log(`Received bytes: ${item.getReceivedBytes()}`)
//       }
//     }
//   })

//   item.once('done', (event, state) => {
//     if (state === 'completed') {
//       console.log('Download successfully')
//     } else {
//       console.log(`Download failed: ${state}`)
//     }
//   })
// })

//   ipcMain.on('carmel', (e, data) => {
//     console.log(data)
//     switch(data.type) {
//       case 'start':
//         e.sender.send('carmel', { id: data.id, type: "started", path: '/dashboard' })
//         break;
//       case 'file':
//         // const content = fs.readFileSync('/Users/idancali/idancali/dev/carmel/README.md', 'utf8')
//         // event.sender.send('carmel', { id: "fileContent", path: "/", content })
//         break;
//       }
//   })
// }

// const runCommand = () => new Promise((resolve, reject) => {

// const nodeExe = path.resolve(process.env.CARMEL_CACHE_ROOT, 'node', 'default', 'bin', 'node')
// console.log("nodeExe", nodeExe)

// const carmelCliExe = path.resolve('bin', 'cli.js')
// console.log("carmelCliExe", carmelCliExe)

// const exe = spawn(nodeExe, [carmelCliExe, 'start']);

// exe.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// exe.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// exe.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });
// })

// createWindow()
// createTray()

// window.once('ready-to-show', async () => {
//   toggleWindow()
// await download(window, `https://nodejs.org/dist/latest-v10.x/node-v10.21.0-darwin-x64.tar.gz`, {
//   directory: path.resolve(process.env.CARMEL_CACHE_ROOT, 'downloads')
// })
// await download(window, `https://nodejs.org/dist/latest-v12.x/node-v12.18.2-darwin-x64.tar.gz`, {
//   directory: path.resolve(process.env.CARMEL_CACHE_ROOT, 'downloads')
// })
// const decompress = require('decompress')
// const decompressTargz = require('decompress-targz')
// })
