export const request = async ({ session, data, log }: any) => {
    const { username, code, publicKey } = data 

    log(`Registering ${username} [code: ${code} | publicKey: ${publicKey}] ...`)

    return {
        error: "Invalid code"
    }
}