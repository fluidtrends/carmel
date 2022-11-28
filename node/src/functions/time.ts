export const handler = async ({ log, session, channel, data }: any) => {
    log(`getting time ...`, data)

    return { timestamp: `${Date.now()}` } 
}