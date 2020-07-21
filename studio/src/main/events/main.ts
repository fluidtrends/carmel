import * as window from '../window'

export const send = async (data: any) => {
    const sender = window.content()
    sender && sender.send('carmel', data)
}

export const newUrl = async (url: any) => {
    await send({ type: 'url', url })
    window.show()
}
