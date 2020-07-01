import {
  ISession,
  IKeyStore,
  IFile,
  Name,
  IDir,
  Dir,
  IAuthKey,
  AuthKey,
} from '..'
import { Section } from 'dodi'
import { Vault } from 'cassi'

/**
 *
 */
export class KeyStore implements IKeyStore {
  /** @internal */
  protected _session: ISession

  /** @internal */
  protected _section?: Section

  /** @internal */
  protected _vault?: Vault

  /** @internal */
  protected _dir?: IDir

  /** @internal */
  protected _keys: Map<Name, IAuthKey[]>

  /**
   *
   * @param session
   */
  constructor(session: ISession) {
    this._session = session
    this._keys = new Map<Name, IAuthKey[]>()
  }

  /**
   *
   */
  get session() {
    return this._session
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
  get keys() {
    return this._keys
  }

  /**
   *
   */
  async initialize() {
    this._section = this.session.index.sections.keystore
    this._vault = this._section?.vault!
    this._dir = new Dir(this._section!.path)

    // Look up the keys we already store
    const groups = this._vault.read('keys') || {}

    for (let group in groups) {
      // Load up all the keys in every group
      const keys: IAuthKey[] = await Promise.all(
        groups[group].map((key: IAuthKey) =>
          new AuthKey(group, this, key.id).initialize()
        )
      )

      // Keep track of the group keys
      this.keys.set(group, keys)
    }
  }

  /**
   *
   */
  async addNewKey(group: string) {
    const key: IAuthKey = new AuthKey(group, this)
    await key.generate()

    const keysRoot = this._vault?.read('keys') || {}
    const keys = keysRoot[group] || []

    keys.push({ id: key.id })
    keysRoot[group] = keys

    this._vault?.write('keys', keysRoot)

    return key
  }
}
