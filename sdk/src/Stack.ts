import { 
    IStack,
    Errors,
    IBundle,
    IDir,
    IWorkspace
 } from '.'

export class Stack implements IStack {
    protected _props: any;
    protected _workspace?: IWorkspace;
    protected _bundle?: IBundle;
    protected _dir?: IDir;

    constructor(props: any) {
        this._props = props
    }

    get name() {
        return this.props.name
    }

    get dir() {
        return this._dir
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
        this._bundle = await this.workspace?.session?.findBundle(this.props.bundle, this.props.version)
        
        if (!this.bundle) {
            throw Errors.StackCannotLoad(this.name || "unknown", 'it is invalid')
        }

        this._dir = this.bundle.dir.dir('stacks')?.dir(this.name)

        if (!this.dir?.exists) {
            throw Errors.StackCannotLoad(this.name, 'it is missing')
        }

        return this
    }

    makeConfig() {
    //   const papanacheVersion = session.get('papanacheVersion')
    //   const bananasVersion = session.get('bananasVersion')

    //   const templateDir = path.resolve(session.index.path, 'archives', '@fluidtrends/bananas', bananasVersion, '@fluidtrends/bananas')
    //   const root = path.resolve(session.index.path, 'archives', 'papanache', papanacheVersion, 'papanache')

    //   const dir = process.cwd()
    //   const chunkyWebDir = path.resolve(templateDir, 'node_modules', 'react-dom-chunky')

    //   const dev = this.isDev 

    //   const templateAssets = [{
    //     path: `node_modules/react-dom-chunky/app/assets`, glob: '**/*' 
    //   }]

    //   return {
    //     dir,
    //     root,
    //     templateDir,
    //     port: 8082,
    //     templateAssets,
    //     script: path.resolve(chunkyWebDir, 'app', `index${dev ? '.dev' : ''}.js`),
    //     page: path.resolve(chunkyWebDir, 'app', 'pages', 'default.html')
    //   }
    
    
        // const stack
    }
}
