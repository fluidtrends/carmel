import { generateKeyPairSync } from 'crypto'
import sshpk from 'sshpk'

import { IAuthKey, IDir, Id, Name } from '..'

/**
 *
 */
export class AuthKey implements IAuthKey {
  /** @internal */
  protected _dir: IDir

  /** @internal */
  protected _name: Name

  /** @internal */
  protected _id?: Id

  /** @internal */
  protected _fingerprint?: Id

  /**
   *
   * @param name
   * @param dir
   */
  constructor(name: Name, dir: IDir) {
    this._name = name
    this._dir = dir
  }

  /**
   *
   */
  get name() {
    return this._name
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
  get id() {
    return this._id
  }

  /**
   *
   */
  get fingerprint() {
    return this._fingerprint
  }

  async generate() {
    //     const pem = generateKeyPairSync('rsa', {
    //       modulusLength: 4096,
    //       publicKeyEncoding: {
    //         type: 'pkcs1',
    //         format: 'pem',
    //       },
    //       privateKeyEncoding: {
    //         type: 'pkcs8',
    //         format: 'pem',
    //         cipher: 'aes-256-cbc',
    //         passphrase: '',
    //       },
    //     })
    //     const pemPublicKey = sshpk.parseKey(pem.publicKey, 'pem', {
    //       filename: 'carmel',
    //     })
    //     console.log('type => %s', pemPublicKey.type)
    //     console.log('size => %d bits', pemPublicKey.size)
    //     console.log('comment => %s', pemPublicKey.comment)
    //     /* Compute key fingerprints, in new OpenSSH (>6.7) format, and old MD5 */
    //     console.log(
    //       'fingerprint => %s',
    //       pemPublicKey.fingerprint('sha256').toString()
    //     )
    //     console.log(
    //       'old-style fingerprint => %s',
    //       pemPublicKey.fingerprint('md5').toString()
    //     )
    //     console.log(pemPublicKey.toString('ssh'))
  }

  async initialize() {}
}
