import { 
    ITemplate,
    IBundle,
    Artifact,
    Name,
    Path,
    Errors,
    ArtifactsKind,
    IArtifact,
    IProduct,
    IDir,
    Dir
 } from '..'
 import jimp from 'jimp'
 import path from 'path'
 import shortid from 'shortid'

 import {
     Archive,
     Template as Tpl
 } from 'rara'

const { HORIZONTAL_ALIGN_CENTER, VERTICAL_ALIGN_MIDDLE } = jimp 

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

    async generateCovers(productCacheDir: IDir) {
        const coversRoot = productCacheDir?.dir('carmel/assets/en/images/covers')
        const covers = coversRoot?.dirs || []

        await Promise.all(covers.map(async (cover: Path) => {
            const coverRoot =  coversRoot?.dir(cover)
            const images = coverRoot?.files

            if (images?.includes('portrait@3x.png') || images?.includes('portrait@3x.jpg')) {
                return
            }

            const original = images?.includes('landscape@3x.png') ? coversRoot?.dir(cover)?.file('landscape@3x.png') : coversRoot?.dir(cover)?.file('landscape@3x.jpg')

            if (!original || !original.exists) {
                return 
            }

            const image = await jimp.read(original!.path!)
            const ext =  path.extname(original!.path!).substring(1)

            await image.scaleToFit(2560, 1440).quality(100).writeAsync(coverRoot?.file(`landscape@2x.${ext}`)?.path!)
            await image.scaleToFit(1920, 1080).quality(100).writeAsync(coverRoot?.file(`landscape@1x.${ext}`)?.path!)

            await image.cover(2160, 3840, HORIZONTAL_ALIGN_CENTER|VERTICAL_ALIGN_MIDDLE).quality(100).writeAsync(coverRoot?.file(`portrait@3x.${ext}`)?.path!)
            await image.cover(1440, 2560, HORIZONTAL_ALIGN_CENTER|VERTICAL_ALIGN_MIDDLE).quality(100).writeAsync(coverRoot?.file(`portrait@2x.${ext}`)?.path!)
            await image.cover(1080, 1920, HORIZONTAL_ALIGN_CENTER|VERTICAL_ALIGN_MIDDLE).quality(100).writeAsync(coverRoot?.file(`portrait@1x.${ext}`)?.path!)

            await image.cover(120, 120, HORIZONTAL_ALIGN_CENTER|VERTICAL_ALIGN_MIDDLE).quality(100).writeAsync(coverRoot?.file(`placeholder.${ext}`)?.path!)
        }))
    }

    /**
     * 
     * @param dir 
     */
    async install(dir: IDir, name: Name, product: IProduct) {
        let id = shortid.generate().toLowerCase()
        
        if (product.exists) {
            // We want to install this in an existing product
            product.manifest.load()
            id = product.manifest.data.json().id 
        }

        // Start fresh
        const productCacheDir = new Dir(product.session?.index.sections.products.path)?.dir(id)?.make()

        // Figure out the dependencies
        const packerId = this._tpl?.content.packer
        const stackId = this._tpl?.content.stack

        // Resolve the archives
        const packer = packerId && await product.session?.index.installArchive({ id: packerId, section: "packers" })
        const stack = stackId && await product.session?.index.installArchive({ id: stackId, section: "stacks" })

        // Figure out the roots
        const packerDir = new Dir(packer.path)
        const stackDir = new Dir(stack.path)
 
        await this._tpl?.save(productCacheDir!.path!, {})

        productCacheDir?.file('carmel.code-workspace')?.update({
            folders: [
                { path: "carmel/assets" },
                { path: "carmel/chunks" }
            ],
            settings: {}
        })

        if (stackDir.dir('node_modules')?.exists) {
            // Link node dependencies if necessary
            stackDir?.dir('node_modules')?.copy(productCacheDir!.dir('node_modules')!)
            productCacheDir?.dir('node_modules')?.dir(stackId)?.link(stackDir)
        }

        if (product.exists) {
            productCacheDir?.file('.carmel.json')?.remove()
            productCacheDir?.file('.carmel.json')?.link(dir.file('.carmel.json'))
            productCacheDir?.dir('carmel')?.remove()
            productCacheDir?.dir('carmel')?.link(dir.dir('carmel'))
            return 
        }

        productCacheDir?.file('.carmel.json')?.move(dir.file('.carmel.json')!)
        productCacheDir?.file('.carmel.json')?.link(dir.file('.carmel.json'))
        productCacheDir?.dir('carmel')?.move(dir.dir('carmel')!)
        productCacheDir?.dir('carmel')?.link(dir.dir('carmel'))

        product.manifest.load()
        product.manifest.data.append({
            id,
            name,
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

        await this.generateCovers(productCacheDir!)

        return { packer, stack }
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
