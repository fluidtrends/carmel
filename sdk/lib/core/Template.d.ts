import { ITemplate, IBundle, Name, IArtifact, IProduct, IDir } from '..';
import { Archive, Template as Tpl } from 'rara';
/**
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Template.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Template.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Template.ts/stats | Code Stats}
 *
 * @category Core
 */
export declare class Template implements ITemplate {
    /** @internal */
    protected _artifact: IArtifact;
    /** @internal */
    protected _archive: Archive;
    /** @internal */
    protected _tpl?: Tpl;
    /** @internal */
    protected _name: Name;
    /**
     *
     * @param name
     * @param bundle
     */
    constructor(name: Name, bundle: IBundle, archive: Archive);
    /**
     *
     */
    get archive(): Archive;
    /**
     *
     */
    get artifact(): IArtifact;
    /**
     *
     */
    get name(): string;
    /**
     *
     * @param dir
     */
    install(dir: IDir, name: Name, product: IProduct): Promise<{
        packer: any;
        stack: any;
    } | undefined>;
    /**
     *
     */
    load(): Promise<this>;
}
