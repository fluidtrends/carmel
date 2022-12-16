export const response = async ({ log, session, channel, data }: any) => {
    log(`got register response`)
    log(data)
    
    return data
}