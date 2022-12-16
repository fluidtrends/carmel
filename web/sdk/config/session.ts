export const mainConfig = () => {
    return {
        channels: {
            "sys:ops": {
                events: {
                    "req:register": true,
                    "rsp:register": "register"
                }
            }
        }
    }
}