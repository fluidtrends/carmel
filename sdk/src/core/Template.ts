import { 
    ITemplate,
    IBundle,
    Artifact,
    Name,
    ArtifactsKind,
    IArtifact
 } from '..'

/**
 * 
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Template.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Template.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Template.ts/stats | Code Stats}
 *
 * @category Core
 */
export class Template implements ITemplate {
    /** @internal */
    protected _artifact?: IArtifact;

    /**
     * 
     * @param name 
     * @param bundle 
     */
    constructor(name: Name, bundle: IBundle) {
        this._artifact = new Artifact(name, bundle, ArtifactsKind.STACKS)
    }

    /**
     * 
     */
    get artifact() {
        return this._artifact
    }

    /**
     * 
     */
    async load() {
        return this
    }


}
