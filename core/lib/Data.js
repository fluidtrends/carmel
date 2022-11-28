"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
const deepmerge_1 = __importDefault(require("deepmerge"));
const automerge_1 = __importDefault(require("automerge"));
const nanoid_1 = require("nanoid");
const debug_1 = __importDefault(require("debug"));
const LOG = (0, debug_1.default)("carmel:data");
const CONTENT_MODEL_VERSION = "1.0";
const CONTENT_MODEL = (id, slice) => ({
    version: CONTENT_MODEL_VERSION,
    type: "carmel",
    id,
    slice,
    main: {},
    table: new automerge_1.default.Table()
});
class Data {
    constructor(session, slice) {
        this._session = session;
        this._id = (0, nanoid_1.nanoid)();
        this._slice = slice;
        this._content = automerge_1.default.from(CONTENT_MODEL(this.id, slice));
        this._lastModified = Date.now();
        this._state = {};
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
        };
        this._main = {
            update: this._updateMain.bind(this)
        };
    }
    get lastModified() {
        return this._lastModified;
    }
    get id() {
        return this._id;
    }
    get slice() {
        return this._slice;
    }
    get main() {
        return this._main;
    }
    get state() {
        return this._state;
    }
    get session() {
        return this._session;
    }
    get content() {
        return this._content;
    }
    get list() {
        return this._list;
    }
    async save() {
        this._lastModified = Date.now();
        const snapshot = automerge_1.default.save(this.content);
        const res = { lastModified: this.lastModified, data: snapshot };
        await this.session.cache.put(`data/${this.slice}`, res);
        // this.session.onEvent(EVENT.DATA_CHANGED, this.slice)
        LOG(`saved [slice=${this.slice}]`);
        return res;
    }
    async _load() {
        try {
            const cached = await this.session.cache.get(`data/${this.slice}`);
            this._lastModified = cached.lastModified;
            this._content = automerge_1.default.load(cached.data);
            LOG(`loaded [slice=${this.slice}]`);
        }
        catch (_a) { }
    }
    async init() {
        await this._load();
        LOG(`initialized [slice=${this.slice}]`);
    }
    _updateState(s) {
        this._state = s;
        return this;
    }
    // edit(data: any = {}) {
    //     this.session.dispatch(actions.edit(this, data))
    // }
    update(data = {}) {
        // this.session.dispatch(actions.update(this, data))
    }
    updateSelected(data = {}) {
        // this.session.dispatch(actions.updateSelected(this, data))
    }
    select(id) {
        // this.session.dispatch(actions.select(this, id))
    }
    deselect() {
        // this.session.dispatch(actions.deselect(this))
    }
    updateBlob(id, data = {}) {
        // this.session.dispatch(actions.updateBlob(this, `${this.slice}:${id}`, data))
    }
    push(id, update = {}) {
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
            .map((item) => this.list.item(item.id))
            .filter((item) => item.push);
    }
    _pushTableRow(id, update = {}) {
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
        this.push(id, update);
    }
    _insertTableRow(row = {}, message = "new row") {
        var id;
        this._content = automerge_1.default.change(this.content, message, (doc) => {
            id = doc.table.add(Object.assign(Object.assign({}, row), { createdOn: Date.now() }));
        });
        this._selectTableRow(id);
        return id;
    }
    _updateMain(update, message = "row updated") {
        this._content = automerge_1.default.change(this._content, message, (doc) => {
            doc.main = (0, deepmerge_1.default)(doc.object, update);
        });
        this.update();
    }
    _updateTableRow(id, update, message = "row updated") {
        let item;
        this._content = automerge_1.default.change(this.content, message, (doc) => {
            item = doc.table.byId(id);
            if (!item || !update)
                return;
            item.dirty = true;
            Object.keys(update).map((k) => item[k] = update[k]);
        });
        if (item && this.state.selection && this.state.selection.id === id) {
            this.updateSelected(item);
            return;
        }
        this.update();
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
    _deleteTableRow(id, message = "deleted row") {
        this._content = automerge_1.default.change(this.content, message, (doc) => {
            let item = doc.table.byId(id);
            if (!item)
                return;
            doc.table.remove(id);
        });
        this.update();
    }
    _getTableRows() {
        return this._content.table.rows;
    }
    _isTableEmpty() {
        return this._content.table.count === 0;
    }
    _selectTableRow(id) {
        this.select(id);
    }
    _deselectTableRow() {
        this.deselect();
    }
    _updateTableRowBlob(rowId, id, content, type = "text") {
        let item;
        this._content = automerge_1.default.change(this.content, "updated blob", (doc) => {
            item = doc.table.byId(rowId);
            if (!item)
                return;
            // const blobs = { ...item.blobs, [id]: { hi: "now" } }
            item.dirty = true;
            item.blobs = Object.assign(Object.assign({}, item.blobs), { [`${this.slice}:list:${rowId}:${id}`]: true });
            // item.blobs[id] = { hello: "ok" }
            // Object.keys(update).map((k: string) => item[k] = update[k])
        });
        this.updateBlob(`list:${rowId}:${id}`, {
            type,
            content
        });
        // this._updateTableRowBlob(rowId, `list:${rowId}:${id}`)
    }
    async _loadTableRow(rowId) {
        const row = this._content.table.byId(rowId);
        if (!row)
            return;
        let result = Object.assign(Object.assign({}, row), { blobs: [] });
        const { blobs } = row;
        if (blobs) {
            await Promise.all(Object.keys(blobs)
                .filter((blobId) => blobId.startsWith(`${this.slice}:list:${row.id}`))
                .map(async (blobId) => {
                const field = blobId.substring(`${this.slice}:list:${row.id}`.length + 1);
                const blob = await this.session.cache.get(`blobs/${blobId}`);
                result[field] = blob.content;
                result.blobs.push(field);
            }));
        }
        return result;
    }
    _selectedTableRow() {
        return this.state.selection;
    }
}
exports.Data = Data;
//# sourceMappingURL=Data.js.map