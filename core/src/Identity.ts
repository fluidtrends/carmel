import {
    Session 
} from './Session'

export class Identity {
  
    public static DID_PREFIX: string = "did:carmel"

    private _session: Session
    private _username: string 
    private _publicKey: string 
    private _revision: number  
    private _did: string 

    constructor(session: Session, data: any = {}) {
        this._session = session
        this._username = data.username
        this._publicKey = data.pub_key
        this._revision = data.rev
        this._did = data.did
    }

    get did () {
        return this._did 
    }

    get session () {
        return this._session
    }

    get username () {
        return this._username
    }

    get publicKey () {
        return this._publicKey
    }

    get revision () {
        return this._revision
    }

    get data () {
       if (!this.username) return 

       return ({
           username: this.username, 
           revision: this.revision,
           publicKey: this.publicKey,
           did: this.did 
       })
    }

    // async update (data: any, signer: any) {
    //    const remote: any = await this.session.fetchIdentity(data.username)
    //    const result: any = await this.session.server.push("identity", { ...data })

    //    if (!result) return

    //    const did = `${Identity.DID_PREFIX}:${result.cid}`
    //    const signature = await signer(`${remote.revision + 1}:${did}`)
   
    //    this.session.server.send.system({
    //        call: "update",
    //        data: {
    //            username: data.username,
    //            signature,
    //            did
    //        }
    //    })
       
    //    this._username = data.username
    //    this._publicKey = remote.publicKey
    //    this._revision = remote.revision + 1
    //    this._did = did
    // }

    // async create(data: any, signer: any) {
    //     const result: any = await this.session.drive.push("identity", data)
        
    //     if (!result) return 

    //     const did = `${Identity.DID_PREFIX}:${result.cid}`    
    //     this.session.server.send.system({
    //         call: "register",
    //         data: {
    //             ...data,
    //             did
    //         }
    //     })
        
    //     this._username = data.username
    //     this._publicKey = data.publicKey
    //     this._revision = 0
    //     this._did = did
    // }
}