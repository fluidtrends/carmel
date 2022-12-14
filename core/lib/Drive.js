import debug from 'debug';
const LOG = debug("carmel:drive");
export class Drive {
    constructor(session) {
        this._session = session;
        this._push = this.push.bind(this);
        this._pull = this.pull.bind(this);
    }
    get session() {
        return this._session;
    }
    get ipfs() {
        return this.session.gateway.ipfs;
    }
    async ls(location) {
        if (!this.ipfs)
            return;
        let result = [];
        // for await (const file of this.ipfs.files.ls(`${Drive.ROOT}${location ? '/' + location: ''}`)) {
        //     result.push(file)
        // }
        return result;
    }
    async open(id) {
        if (!this.ipfs)
            return;
        let content = "";
        // try {
        //     for await (const chunk of this.ipfs.files.read(`${Drive.ROOT}/${id}.json`)) {
        //         content = `${content}${Buffer.from(chunk).toString()}`
        //     }
        //     LOG(`opened content [id=${id}]`)
        //     return JSON.parse(content)
        // } catch {
        // }
    }
    async pull(id, cid) {
        if (!this.ipfs)
            return;
        // try {
        //     // Remove the old file if present
        //     await this.ipfs.files.rm(`${Drive.ROOT}/${id}.json`, { recursive: true })
        //     LOG(`removed content [id=${id}]`)
        // } catch {
        // }
        // try {
        //     await this.ipfs.files.cp(`/ipfs/${cid}`, `${Drive.ROOT}/${id}.json`)
        //     LOG(`pulled content [id=${id} cid=${cid}]`)
        //     return this.open(id)
        // } catch {
        // }
    }
    async _readDir(dir) {
        const ignores = ['.DS_Store'];
        // let files: any[] = await listDir(dir)
        // const fs = require('fs-extra')
        // files = files.filter(file => !ignores.includes(path.basename(file))).map(file => {
        //     const info = fs.statSync(file)
        //     return {
        //         path: path.relative(dir, file),
        //         content: fs.readFileSync(file),
        //         mtime: info.mtime
        //     }
        // })
        // return files
    }
    async pushDir(dir, base) {
        LOG(`pushing dir ${dir} ...`);
        // const files = await this._readDir(dir)
        // await Promise.all(files.map(file => this.ipfs.files.write(`${Drive.ROOT}/${base}/${file.path}`, file.content, {
        //     parents: true, create: true, mtime: file.mtime  
        // })))
        // LOG(`pushed ${files.length} files`)
        // const result = await this.ipfs.files.stat(`${Drive.ROOT}/${base}`)
        // return result
    }
    async push(id, data) {
        LOG(`pushing ${id} ...`);
        if (!this.ipfs)
            return;
        // const content: string = JSON.stringify({
        //     timestamp: Date.now(),
        //     id,    
        //     data
        // })
        // try {
        //     // Remove the old file if present
        //     await this.ipfs.files.rm(`${Drive.ROOT}/${id}.json`, { recursive: true })
        //     LOG(`removed content [id=${id}]`)
        // } catch {
        // }
        // await this.ipfs.files.write(`${Drive.ROOT}/${id}.json`, new TextEncoder().encode(content), { create: true })
        // const result = await this.ls(`${id}.json`)
        // if (!result || result.length !== 1) {
        //     return
        // }
        // const cid = result[0].cid.toString()
        // await this.ipfs.pin.add(cid)
        // LOG(`pushed content [id=${id} cid=${cid}]`)
        // return ({
        //     cid,
        //     size: result[0].size,
        //     path: `${Drive.ROOT}/${id}.json`,
        //     id
        // })
    }
    async mount() {
        LOG("mouting drive ...");
        // await this.ipfs.files.mkdir(Drive.ROOT, { parents: true })
        LOG("mounted drive");
    }
    async unmount() {
        LOG("unmounting drive ...");
        LOG("unmounted drive");
    }
}
Drive.ROOT = "/carmel";
//# sourceMappingURL=Drive.js.map