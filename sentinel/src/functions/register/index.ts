export const request = async ({ session, data, log }: any) => {
    // const { data } = event 
    // const { username, publicKey, did } = data 

    // log(`registering ${username} ...`)

    // console.log(data)

    // const result = await session.chain.system("caccount", { username, pub_key: publicKey, did })

    return {
        data: {
            status: "pending"
        }
    }
}