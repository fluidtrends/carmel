import { 
    IStack,
    Errors,
    IBundle,
    Name,
    IDir,
    Script,
    Target,
    Dir
 } from '..'

 import path from 'path'
 import fs from 'fs'
  
/**
 * 
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Stack.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Stack.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Stack.ts/stats | Code Stats}
 *
 * @category Core
 */
export class Stack implements IStack {
    /** */
    protected _bundle: IBundle;

    /** */
    protected _name: Name;

    /** */
    protected _dir?: IDir;

    /**
     * 
     * @param name 
     * @param bundle 
     */
    constructor(name: Name, bundle: IBundle) {
        this._name = name 
        this._bundle = bundle
        this._dir = this.bundle.dir.dir("stacks")?.dir(this.name)
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
    get exists() {
        return this.dir !== undefined && this.dir!.exists 
    }

    /**
     * 
     */
    async load() {
        // const packerRoot = '/Users/idancali/idancali/dev/papanache'
        // const packerDir = path.resolve(packerRoot, this.target)
        // const scriptFile = path.resolve(packerDir, `${this.id}.js`)

        // if (!fs.existsSync(scriptFile)) {
        //     console.log("missing script", scriptFile)
        //     return this
        // }

        // console.log("starting...", scriptFile)
        return this
    }

    /**
     * 
     * @param target 
     * @param name 
     */
    async findTargetScript(target: Target, name: Name) {
        // Don't even bother if the target script is missing
        if (!this.supportsTargetScript(target, name)) return undefined

        // Cool, let's build ourselves a script now
        const script = new Script(this, target, name)

        // Boom, load it up and get on with it  
        return script.load()
    }

    /**
     * 
     * @param target 
     */
    targetDir(target: Target) {
        return this.dir!.dir(target)
    }

    /**
     * 
     * @param target 
     */
    targetScriptDir(target: Target, name: Name) {
        return this.dir!.dir(target)?.dir(name)
    }

    /**
     * 
     * @param target 
     */
    supportsTarget(target: Target) {
        return this.exists && 
               this.targetDir(target) !== undefined && 
               this.targetDir(target)!.exists
    }

    /**
     * 
     * @param target 
     * @param name 
     */  
    supportsTargetScript(target: Target, name: Name) {
        return this.supportsTarget(target) && 
               this.targetScriptDir(target, name) !== undefined && 
               this.targetScriptDir(target, name)!.exists
    }

    // commandScript(type: string) {
    //     // return (this.context.script === _.DEFAULT_SCRIPT) ? this.loadDefaultScript(session, type) : this.loadScript()
    // }

    // makeConfig() {
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
    // }

    // loadScript(paths = [this.context.script]) {   
    //     return new Promise((resolve, reject) => {
    //       try {
    //         // Let's find the script as specified by the context
    //         const starter = require(path.resolve(...paths))
    //         resolve({ exec: starter, props: { name: "app" }})
    //       } catch (e) {
    //         reject(Errors.CommandCannotExecute(this.id, 'the script could not be loaded'))
    //       }
    //     })
    // }

    // findDefaultArchive() {
    //     // const version = session?.get("papanacheVersion")
    //     // return session.index.sections.archives.findArchive({ id: "papanache", version })
    // }
    
    // loadDefaultScript(type: string) {
    //     // return this.findDefaultArchive()
    //     //            .then((archive) => this.loadScript([archive.path, 'src', this.target, 'commands', `${type}.js`]))
    // }

}
