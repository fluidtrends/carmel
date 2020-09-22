import * as window from '../window'

export const send = async (data: any) => {
    const sender = window.content()
    sender && sender.send('carmel', data)
}

export const newUrl = async (url: any) => {
    console.log("!!!!!", url)
    await send({ type: 'url', url })
    window.show()
}

// export const login = async (url: any) => {
//     await send({ type: 'url', url })
//     window.show()
// }

export const toggleBrowser = async (data: any) => {
    const sender = window.browserContent()
    sender && sender.send('carmel', data)
    window.toggleBrowser()
}