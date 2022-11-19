import merge from 'deepmerge'
import Automerge from 'automerge'
import { nanoid } from 'nanoid'
import { Session } from '.'
import debug from 'debug'

const LOG = debug("carmel:data")
const CONTENT_MODEL_VERSION = "1.0"

const CONTENT_MODEL: any = (id: string, slice: string) => ({
    version: CONTENT_MODEL_VERSION,
    type: "carmel",
    id,
    slice,
    main: {},
    table: new Automerge.Table()
})

export class Data {
    private _content: any 
    private _session: Session 
    private _id: string 
    private _slice: string 
    private _lastModified: number
    private _state: any 
    private _list: any 
    private _main: any 

    constructor(session: Session, slice: string) {
        this._session = session 
        this._id = nanoid() 
        this._slice = slice
        this._content = Automerge.from(CONTENT_MODEL(this.id, slice))
        this._lastModified = Date.now()
        this._state = {}

        this._list = {
            add: this._insertTableRow.bind(this),
            push: this._pushTableRow.bind(this),
            updateBlob: this._updateTableRowBlob.bind(this),
            queue: this._tableQueue.bind(this),
            delete: this._deleteTableRow.bind(this),
            all: this._getTableRows.bind(this),
            select: this._selectTableRow.bind(this),
            deselect: this._deselectTableRow.bind(this),
            selection: this._selectedTableRow.bind(this),
            isEmpty: this._isTableEmpty.bind(this)
        }

        this._main = {
            update: this._updateMain.bind(this)
        }
    }

    get lastModified() {
        return this._lastModified
    }

    get id () {
        return this._id
    }

    get slice () {
        return this._slice
    }

    get main() {
        return this._main 
    }

    get state() {
        return this._state
    }

    get session() {
        return this._session
    }

    get content() {
        return this._content
    }

    get list () {
        return this._list
    }

    async save () {
        this._lastModified = Date.now()

        const snapshot = Automerge.save(this.content)
        const res = { lastModified: this.lastModified, data: snapshot }

        await this.session.cache.put(`data/${this.slice}`, res)
        // this.session.onEvent(EVENT.DATA_CHANGED, this.slice)

        LOG(`saved [slice=${this.slice}]`)

        return res
    }

    async _load () {
        try {
            const cached = await this.session.cache.get(`data/${this.slice}`)
            this._lastModified = cached.lastModified
            this._content = Automerge.load(cached.data)

            LOG(`loaded [slice=${this.slice}]`)
        } catch {}
    }

    async init() {
        await this._load()

        LOG(`initialized [slice=${this.slice}]`)
    }

    _updateState(s: any) {
        this._state = s
        return this
    }

    // edit(data: any = {}) {
    //     this.session.dispatch(actions.edit(this, data))
    // }

    update(data: any = {}) {
        // this.session.dispatch(actions.update(this, data))
    }

    updateSelected(data: any = {}) {
        // this.session.dispatch(actions.updateSelected(this, data))
    }

    select(id: string) {
        // this.session.dispatch(actions.select(this, id))
    }

    deselect() {
        // this.session.dispatch(actions.deselect(this))
    }

    updateBlob(id: string, data: any = {}) {
        // this.session.dispatch(actions.updateBlob(this, `${this.slice}:${id}`, data))
    }

    push (id: string, update: any = {}) {
        // this.session.dispatch(actions.push(this, id, update))
    }

    // async _pushBlobs() {
    //     const blobs = this.state.blobs
    //     if (!blobs) return 

    //     Object.keys(blobs).map((blobId: string) => {
    //         console.log(blobId, blobs[blobId])
    //     })

    //     // const result = await this.session.node.push(`data:${this.slice}:blob:${id}`, blob)

    //     // LOG(`pushed data slice blob [slice=${this.slice} blob=${id}]`)

    //     // return result
    //     return {}
    // }

    // async pull(cid: string) {
    //     try {
    //         const remote = await this.session.node.pull(`data_${this.slice}`, cid)

    //         this._lastModified = remote.lastModified
    //         this._content = Automerge.load(remote.data)

    //         this.save()

    //         LOG(`pulled [slice=${this.slice}]`)
    //     } catch {}
    // }

    _tableQueue() {
        return this.list.all()
                        .map((item: any) => this.list.item(item.id))
                        .filter((item: any) => item.push)
    }

    _pushTableRow(id: string, update: any = {}) {
        // const snapshot = await this.save()
        // const result = await this.session.node.push(`data:${this.slice}`, snapshot)
        // await this._pushBlobs()
        // if (this.list.isEmpty()) return 
        // const item = this.list.item(id)

        // if (!item || !item.dirty) return

        // this._updateTableRow(id, { push: true })

        // console.log(item)
        // const dirtyItems = this.list.all().map((item: any) => this.list.item(item.id)).filter((i: any) => i.dirty)

        // const results = await Promise.all(dirtyItems.map((item: any) => {
        //     LOG(`pushed data slice item [slice=${this.slice} item=${item.id}]`)
        //     this._updateTableRow(item.id, { dirty: false })
        //     return this.session.node.push(`data:${this.slice}:${item.id}`, item)
        // }))
 
        // console.log(results)
        // return result
        this.push(id, update)
    }

    _insertTableRow(row: any = {}, message: string = "new row") {
        var id: any
        this._content = Automerge.change(this.content, message, (doc: any) => {
            id = doc.table.add({ ...row, createdOn: Date.now() })
        })
        this._selectTableRow(id)
        return id
    }

    _updateMain(update: any, message: string = "row updated") {
        this._content = Automerge.change(this._content, message, (doc: any) => {
            doc.main = merge(doc.object, update)
        })
        this.update()
    }

    _updateTableRow(id: string, update: any, message: string = "row updated") {
        let item: any
        this._content = Automerge.change(this.content, message, (doc: any) => {
            item = doc.table.byId(id)
            if (!item || !update) return
            item.dirty = true
            Object.keys(update).map((k: string) => item[k] = update[k])
        })

        if (item && this.state.selection && this.state.selection.id === id) {
            this.updateSelected(item)
            return 
        }

        this.update()
    }

    // _updateTableRowBlob(id: string, update: any, message: string = "row blob updated") {
    //     let item: any
    //     this._content = Automerge.change(this.content, message, (doc: any) => {
    //         item = doc.table.byId(id)
    //         if (!item || !update) return
    //         item.dirty = true
    //         Object.keys(update).map((k: string) => item[k] = update[k])
    //     })

    //     if (item && this.state.selection && this.state.selection.id === id) {
    //         this.updateSelected(item)
    //         return 
    //     }

    //     this.update()
    // }

    _deleteTableRow(id: string, message: string = "deleted row") {
        this._content = Automerge.change(this.content, message, (doc: any) => {
            let item = doc.table.byId(id)
            if (!item) return
            doc.table.remove(id)            
        })
        this.update()
    }

    _getTableRows() {
        return this._content.table.rows
    }

    _isTableEmpty() {
        return this._content.table.count === 0
    }

    _selectTableRow(id: string) {
        this.select(id)
    }

    _deselectTableRow() {
        this.deselect()
    }

    _updateTableRowBlob(rowId: string, id: string, content: any, type: string = "text") {
        let item: any

        this._content = Automerge.change(this.content, "updated blob", (doc: any) => {
            item = doc.table.byId(rowId)
            if (!item) return
            // const blobs = { ...item.blobs, [id]: { hi: "now" } }
            item.dirty = true
            item.blobs = { ...item.blobs, [`${this.slice}:list:${rowId}:${id}`]: true }
            // item.blobs[id] = { hello: "ok" }
            // Object.keys(update).map((k: string) => item[k] = update[k])
        })

        this.updateBlob(`list:${rowId}:${id}`, { 
            type,
            content
        })
        // this._updateTableRowBlob(rowId, `list:${rowId}:${id}`)
    }

    async _loadTableRow(rowId: string) {
        const row = this._content.table.byId(rowId)

        if (!row) return 

        let result = {
            ...row,
            blobs: [],
        }

        const { blobs } = row

        if (blobs) {
            await Promise.all(Object.keys(blobs)
                                .filter((blobId: string) => blobId.startsWith(`${this.slice}:list:${row.id}`))
                                .map(async (blobId: string) => {
                                    const field = blobId.substring(`${this.slice}:list:${row.id}`.length + 1)
                                    const blob: any = await this.session.cache.get(`blobs/${blobId}`)
                                    result[field] = blob.content
                                    result.blobs.push(field)
                                }))
        }

        return result
    }

    _selectedTableRow() { 
        return this.state.selection
    }

    // async updateFields(data: any, message: string = "object updated") {
    //     this._content = Automerge.change(this._content, message, (doc: any) => {
    //         doc.main = merge(doc.object, data)
    //     })
    //     await this.save()
    // }

    // async removeField(field: string, message: string = "removed object field") {
    //     this._content = Automerge.change(this._content, message, (doc: any) => {
    //         doc.main[field] && delete doc.main[field]
    //     })
    //     await this.save()
    // }
}