import { generateKeyPairSync } from 'crypto'
import shortid from 'shortid'
import path from 'path'
import sshpk from 'sshpk'

import { IAuthKey, IKeyStore, IDir, IFile, File, Id, Name } from '..'

/**
 *
 */
export class AuthKey implements IAuthKey {
  /** @internal */
  protected _dir?: IDir

  /** @internal */
  protected _group: Name

  /** @internal */
  protected _id?: Id

  /** @internal */
  protected _fingerprint?: Id

  /** @internal */
  protected _keystore: IKeyStore

  /** @internal */
  protected _files: Map<Name, IFile>

  /**
   *
   * @param name
   * @param keystore
   */
  constructor(group: Name, keystore: IKeyStore, id?: Id) {
    this._group = group
    this._keystore = keystore
    this._id = id
    this._files = new Map<Name, IFile>()
  }

  /**
   *
   */
  get group() {
    return this._group
  }

  /**
   *
   */
  get files() {
    return this._files
  }

  /**
   *
   */
  get exists() {
    return this.dir !== undefined && this.dir!.exists
  }

  /**
   *
   */
  get dir() {
    return this._dir
  }

  /**
   *
   */
  get keystore() {
    return this._keystore
  }

  /**
   *
   */
  get id() {
    return this._id
  }

  /**
   *
   */
  get fingerprint() {
    return this._fingerprint
  }

  /**
   *
   */
  async generate() {
    this._id = shortid.generate().toLowerCase()

    await this.initialize()

    const { publicKey, privateKey } = generateKeyPairSync('rsa', {
      modulusLength: 4096,
      publicKeyEncoding: {
        type: 'pkcs1',
        format: 'pem',
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        cipher: 'aes-256-cbc',
        passphrase: '',
      },
    })

    const sshPublicKey = sshpk.parseKey(publicKey, 'pem', {
      filename: 'carmel',
    })

    const sshPrivateKey = sshpk.parsePrivateKey(privateKey, 'pem', {
      passphrase: '',
      filename: 'carmel',
    })

    this.files.get('public.pem')!.update(publicKey)
    this.files.get('private.pem')!.update(privateKey)
    this.files.get('public.ssh')!.update(sshPublicKey.toString('ssh'))
    this.files
      .get('private.ssh')!
      .update(sshPrivateKey.toBuffer('openssh', {}).toString())
    this.files
      .get('fingerprint.sha256')!
      .update(sshPublicKey.fingerprint('sha256').toString())
    this.files
      .get('fingerprint.md5')!
      .update(sshPublicKey.fingerprint('md5').toString())
  }

  async initialize() {
    if (!this.id) {
      return this
    }

    this._dir = this.keystore?.dir?.dir(this.id!)?.make()

    this.files.set('public.pem', this.dir?.file('public.pem', true)!)
    this.files.set('private.pem', this.dir?.file('private.pem', true)!)
    this.files.set('public.ssh', this.dir?.file('public.ssh', true)!)
    this.files.set('private.ssh', this.dir?.file('private.ssh', true)!)
    this.files.set(
      'fingerprint.sha256',
      this.dir?.file('fingerprint.sha256', true)!
    )
    this.files.set('fingerprint.md5', this.dir?.file('fingerprint.md5', true)!)

    try {
      // Load all files if possible
      this.files.forEach((file) => file.load())
    } catch {}

    return this
  }
}
