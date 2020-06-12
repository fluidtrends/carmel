import { 
    ITemplate,
    IBundle,
    Artifact,
    Name,
    Errors,
    ArtifactsKind,
    IArtifact,
    IProduct,
    IDir,
    Dir
 } from '..'

 import shortid from 'shortid'

 import {
     Archive,
     Template as Tpl
 } from 'rara'

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
    protected _artifact: IArtifact;

    /** @internal */
    protected _archive: Archive

    /** @internal */
    protected _tpl?: Tpl

    /** @internal */
    protected _name: Name

    /**
     * 
     * @param name 
     * @param bundle 
     */
    constructor(name: Name, bundle: IBundle, archive: Archive) {
        this._archive = archive
        this._name = name
        this._artifact = new Artifact(name, bundle, ArtifactsKind.TEMPLATES)
    }

    /**
     * 
     */
    get archive() {
        return this._archive
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
    get name() {
        return this._name
    }

    /**
     * 
     * @param dir 
     */
    async install(dir: IDir, product: IProduct) {  
        const id = shortid.generate().toLowerCase()
        
        const packerId = this._tpl?.content.packer
        const packer = packerId && await product.session?.index.installArchive({ id: packerId, section: "packers" })
        const stackId = this._tpl?.content.stack
        const stack = stackId && await product.session?.index.installArchive({ id: stackId, section: "stacks" })

        await this._tpl?.save(dir!.path!, {})
        
        dir?.file('carmel.code-workspace')?.update({
            folders: [
                { path: "carmel/assets" },
                { path: "carmel/chunks" }
            ],
            settings: {}
        })
        product.manifest.load()
        product.manifest.data.append({
            id,
            carmelSDKVersion: product.session?.pkg.version,
            template: this.name,
            bundle: this.artifact.bundle.id,
            bundleVersion: this.artifact.bundle.version,
            stack: stack.id,
            stackVersion: stack.version,
            packer: packer.id,
            packerVersion: packer.version,
        })
        product.manifest.save()

        const stackDir = new Dir(stack.path)        
        if (!stackDir.dir('node_modules')?.exists) {
            // If the stack is not a JS stack, forget it
            return 
        }

        if (!stackDir.dir('node_modules')?.dir(stackId)?.exists) {
            // Add the stack to itself, if necessary
            stackDir.dir('node_modules')?.dir(stackId)?.link(stackDir.dir('lib'))
        }

        // Resolve the stack and its dependencies
        dir.dir('node_modules')?.link(stackDir.dir('node_modules'))
    }

    /**
     * 
     */
    async load() {
        await this._archive.load()
        this._tpl = this._archive.templates[this.name]
        await this._tpl?.load({})

        return this
    }
}
