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

 import fs from 'fs'
 import path from 'path'

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
        // const productDir = new Dir(path.resolve(product.session?.index.sections.products.path, id)).make()
        
        const packerId = this._tpl?.content.packer
        const stackId = this._tpl?.content.stack

        const packer = packerId && await product.session?.index.installArchive({ id: packerId, section: "packers" })
        const stack = stackId && await product.session?.index.installArchive({ id: stackId, section: "stacks" })

        const packerDir = new Dir(path.resolve(product.session?.index.sections.packers.path, packer.id, packer.version, packer.id))
        const stackDir = new Dir(path.resolve(product.session?.index.sections.stacks.path, stack.id, stack.version, stack.id))

        const stackDepsDir = new Dir(path.resolve(stackDir!.path!, 'node_modules'))
        dir?.dir('node_modules')?.link(stackDepsDir)

        const rootDir = dir.dir('carmel')?.make()
        await this._tpl?.save(rootDir!.path!, {})

        dir?.file('carmel.code-workspace')?.update({
            folders: [
                { path: "carmel/assets" },
                { path: "carmel/chunks" }
            ],
            settings: {}
        })

        product.create({
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
