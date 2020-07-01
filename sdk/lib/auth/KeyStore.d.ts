import { ISession, IKeyStore, Name, IDir, IAuthKey } from '..';
import { Section } from 'dodi';
import { Vault } from 'cassi';
/**
 *
 */
export declare class KeyStore implements IKeyStore {
    /** @internal */
    protected _session: ISession;
    /** @internal */
    protected _section?: Section;
    /** @internal */
    protected _vault?: Vault;
    /** @internal */
    protected _dir?: IDir;
    /** @internal */
    protected _keys: Map<Name, IAuthKey[]>;
    /**
     *
     * @param session
     */
    constructor(session: ISession);
    /**
     *
     */
    get session(): ISession;
    /**
     *
     */
    get dir(): IDir | undefined;
    /**
     *
     */
    get keys(): Map<string, IAuthKey[]>;
    /**
     *
     */
    initialize(): Promise<void>;
    /**
     *
     */
    addNewKey(group: string): Promise<IAuthKey>;
}
