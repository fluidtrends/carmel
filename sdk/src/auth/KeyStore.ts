import { ISession, IKeyStore } from '../types'
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

  /**
   *
   * @param session
   */
  constructor(session: ISession) {
    this._session = session
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
  async initialize() {
    this._section = this.session.index.sections.keystore
    this._vault = this._section?.vault!
  }

  /**
   *
   * @param group
   */
  async keys(group: string) {
    return this._vault?.read(group)
  }
}
