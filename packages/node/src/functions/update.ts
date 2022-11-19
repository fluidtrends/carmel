export const handler = async ({ session, event, log }: any) => {
    const { data } = event 
    const { username, signature, did } = data 

    log(`updating ${username} ...`)

    const result = await session.chain.system("uaccount", { username, sig: signature, did })

    return result 
}