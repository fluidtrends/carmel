import { 
    IStack,
    Errors,
    IBundle,
    IWorkspace
 } from '.'

export class Stack implements IStack {
    protected _props: any;
    protected _workspace?: IWorkspace;
    protected _bundle?: IBundle;

    constructor(props: any) {
        this._props = props
    }

    get name() {
        return this.props.name
    }

    get workspace() {
        return this._workspace
    }

    get props() {
        return this._props
    }

    get bundle() {
        return this._bundle
    }

    get exists() {
        return this.props &&
               this.name &&
               this.workspace && 
               this.workspace!.session &&
               this.workspace!.session!.index.sections.bundles &&
               this.workspace!.session!.index.sections.bundles.exists
    }

    async load(workspace: IWorkspace) {
        this._workspace = workspace

        if (!this.exists) {
            throw Errors.StackCannotLoad(this.name || "unknown", 'it is invalid')
        }

        const section = this.workspace!.session!.index.sections.bundles

        this._bundle = await section.findArchive({
            id: this.props.bundle,
            version: this.props.version
        })
        
        if (!this.bundle) {
            throw Errors.StackCannotLoad(this.name, 'the bundle could not be found')
        }

        return this
    }
}
