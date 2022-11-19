import { Session } from './Session'
import debug from 'debug'
import listDir from 'recursive-readdir'
import path from 'path'
import fs from 'fs-extra'
import { globSource } from 'ipfs'

const LOG = debug("carmel:drive")
export class Drive {
    
    public static ROOT = "/carmel"

    private _session: Session
    public _push: any
    public _pull: any

    constructor(session: Session) {
        this._session = session
        this._push = this.push.bind(this)
        this._pull = this.pull.bind(this)
    }

    get session () {
        return this._session
    }

    get ipfs () {
        return this.session.gateway.ipfs
    }
    
    async ls (location?: string) {
        if (!this.ipfs) return 

        let result: any = []
        for await (const file of this.ipfs.files.ls(`${Drive.ROOT}${location ? '/' + location: ''}`)) {
            result.push(file)
        }

        return result
    }

    async open (id: string) {
        if (!this.ipfs) return
        let content = ""

        try {
            for await (const chunk of this.ipfs.files.read(`${Drive.ROOT}/${id}.json`)) {
                content = `${content}${Buffer.from(chunk).toString()}`
            }

            LOG(`opened content [id=${id}]`)
            
            return JSON.parse(content)
        } catch {
        }
    }

    async pull (id: string, cid: string) {
        if (!this.ipfs) return

        try {
            // Remove the old file if present
            await this.ipfs.files.rm(`${Drive.ROOT}/${id}.json`, { recursive: true })
            LOG(`removed content [id=${id}]`)
        } catch {
        }

        try {
            await this.ipfs.files.cp(`/ipfs/${cid}`, `${Drive.ROOT}/${id}.json`)

            LOG(`pulled content [id=${id} cid=${cid}]`)

            return this.open(id)
        } catch {
        }
    }

    async _readDir (dir: string) {
        const ignores = ['.DS_Store']
        let files: any[] = await listDir(dir)

        files = files.filter(file => !ignores.includes(path.basename(file))).map(file => {
            const info = fs.statSync(file)
            
            return {
                path: path.relative(dir, file),
                content: fs.readFileSync(file),
                mtime: info.mtime
            }
        })

        return files
    }

    async pushDir (dir: string, base: string) {
        LOG(`pushing dir ${dir} ...`)

        const files = await this._readDir(dir)

        await Promise.all(files.map(file => this.ipfs.files.write(`${Drive.ROOT}/${base}/${file.path}`, file.content, {
            parents: true, create: true, mtime: file.mtime  
        })))

        LOG(`pushed ${files.length} files`)

        const result = await this.ipfs.files.stat(`${Drive.ROOT}/${base}`)

        return result
    }

    async push (id: string, data: any) {
        LOG(`pushing ${id} ...`)

        if (!this.ipfs) return

        const content: string = JSON.stringify({
            timestamp: Date.now(),
            id,    
            data
        })

        try {
            // Remove the old file if present
            await this.ipfs.files.rm(`${Drive.ROOT}/${id}.json`, { recursive: true })
            LOG(`removed content [id=${id}]`)
        } catch {
        }

        await this.ipfs.files.write(`${Drive.ROOT}/${id}.json`, new TextEncoder().encode(content), { create: true })

        const result = await this.ls(`${id}.json`)

        if (!result || result.length !== 1) {
            return
        }

        const cid = result[0].cid.toString()
        await this.ipfs.pin.add(cid)

        LOG(`pushed content [id=${id} cid=${cid}]`)

        return ({
            cid,
            size: result[0].size,
            path: `${Drive.ROOT}/${id}.json`,
            id
        })
    }

    async mount () {
        LOG("mouting drive ...")

        await this.ipfs.files.mkdir(Drive.ROOT, { parents: true })

        LOG("mounted drive")
    }

    async unmount () {
        LOG("unmounting drive ...")
        LOG("unmounted drive")
    }    


}