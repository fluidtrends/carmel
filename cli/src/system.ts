import { spawn } from 'child_process'
import ora from 'ora'

export async function run(cmd: string, args: string[], log?: any): Promise<string> {
    const spinner = log ? ora(log.start).start() : undefined

    return new Promise((resolve, reject) => {
        let stdout = ''
        let stderr = ''

        const s = spawn(cmd, args)

        s.stdout.on('data', (data) => {
            stdout = `${stdout}${data}`
        });
        
        s.stderr.on('data', (data) => {
            stdout = `${stderr}${data}`
        });
        
        s.on('close', (code) => {
            if (code === 0) {
                spinner && spinner.succeed(log.done)
                resolve(stdout.trim())
                return
            }
            spinner && spinner.fail(stderr)
            reject(new TypeError(stderr.trim()))
        })  
    })
}