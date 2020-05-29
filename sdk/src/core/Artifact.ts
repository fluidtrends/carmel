import { 
    IArtifact,
    IBundle,
    Name,
    IDir,
    ArtifactsKind
 } from '..'

/**
 * 
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Artifact.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Artifact.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Artifact.ts/stats | Code Stats}
 *
 * @category Core
 */
export class Artifact implements IArtifact {
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
    constructor(name: Name, bundle: IBundle, kind: ArtifactsKind) {
        this._name = name 
        this._bundle = bundle
        this._kind = kind
        this._dir = this.bundle.dir.dir(kind)?.dir(this.name)
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
    get bundle() {
        return this._bundle
    }
    
    /**
     * 
     */
    get kind() {
        return this._kind
    }

    /**
     * 
     */
    get exists() {
        return this.dir !== undefined && this.dir!.exists 
    }
}
