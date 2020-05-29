import { IArtifact, IBundle, Name, IDir, ArtifactsKind } from '..';
/**
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Artifact.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Artifact.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Artifact.ts/stats | Code Stats}
 *
 * @category Core
 */
export declare class Artifact implements IArtifact {
    /** @internal */
    protected _bundle: IBundle;
    /** @internal */
    protected _name: Name;
    /** @internal */
    protected _dir?: IDir;
    /** @internal */
    protected _kind: ArtifactsKind;
    /**
     *
     * @param name
     * @param bundle
     */
    constructor(name: Name, bundle: IBundle, kind: ArtifactsKind);
    /**
     *
     */
    get name(): string;
    /**
     *
     */
    get dir(): IDir | undefined;
    /**
     *
     */
    get bundle(): IBundle;
    /**
     *
     */
    get kind(): ArtifactsKind;
    /**
     *
     */
    get exists(): boolean;
}
