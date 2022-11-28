export const handler = async ({ session, event, log }: any) => {
    const { data } = event 
    const { username, publicKey, did } = data 

    log(`registering ${username} ...`)

    const result = await session.chain.system("caccount", { username, pub_key: publicKey, did })

    return result 
}