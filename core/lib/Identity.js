class Identity {
    constructor(session, data = {}) {
        this._session = session;
        this._username = data.username;
        this._publicKey = data.pub_key;
        this._revision = data.rev;
        this._did = data.did;
    }
    get did() {
        return this._did;
    }
    get session() {
        return this._session;
    }
    get username() {
        return this._username;
    }
    get publicKey() {
        return this._publicKey;
    }
    get revision() {
        return this._revision;
    }
    get data() {
        if (!this.username)
            return;
        return ({
            username: this.username,
            revision: this.revision,
            publicKey: this.publicKey,
            did: this.did
        });
    }
}
Identity.DID_PREFIX = "did:carmel";
export { Identity };
export default Identity;
//# sourceMappingURL=Identity.js.map