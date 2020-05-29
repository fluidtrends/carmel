import {
  IScript,
  Target,
  IStack,
  Name,
  Module,
  IDir,
  CommandArg
} from '..'

/**
 * 
 * @category System
 * @internal
 */
export class Script implements IScript {
  
    /** @internal */
    protected _target: Target;
 
    /** @internal */
    protected _name: Name;

    /** @internal */
    protected _stack: IStack;

    /** @internal */
    protected _dir?: IDir;

    /** @internal */
    protected _module: Module;

    /**
     * 
     * @param target 
     * @param name 
     */
    constructor(stack: IStack, target: Target, name: Name) {
      this._stack = stack
      this._target = target
      this._name = name 
      this._dir = this.stack.targetScriptDir(this.target, this.name)
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
    get target() {
      return this._target
    }

    /**
     * 
     */
    get stack() {
      return this._stack
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
    get module() {
      return this._module
    }

    /**
     *  
     */ 
    get exists() {
      return  this.stack.artifact !== undefined &&
              this.stack.artifact?.exists && 
              this.stack.supportsTargetScript(this.target, this.name)
    }

    /**
     * 
     */
    async load() {
      // Don't bother if it's missing
      if (!this.exists) return undefined

      try {
        // Let's see what we've got here
        this._module = require(this.dir!.path!)

        // We only care about the default module
        if (!this.module.default) return undefined
      } catch (err) {
        // Well now, we can't have this can we
        return undefined
      }

      // We should have a nice happy module going by now
      return this
    }

    /**
     * 
     * @param args 
     */ 
    async exec(args?: CommandArg[]) {
      return this.module?.default(args)
    }

    // get isDev() {
    //   return this.args.dev
    // }

    // makeConfig(session) {
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
    // }

    // load(session) {
    //   const props = this.makeConfig(session)

    //   return session.workspace.loadFile('carmel.json')
    //                 .then((config) => { 
    //                   props.config = Object.assign({}, config) 
    //                   return session.workspace.findDirs('chunks')
    //                 })
    //                 .then((dirs) => Promise.all(dirs.map(dir => session.workspace.loadFile(`chunks/${dir}/chunk.json`))))
    //                 .then((chunks) => { 
    //                   props.sections = [].concat(chunks)
    //                   return props
    //                 })
    // }
}

// _.ERRORS = Object.assign({}, _.ERRORS, {
// })

// _.PLATFORMS = { WEB: "web", DESKTOP: "desktop", MOBILE: "mobile" }
// _.DEFAULT_PLATFORM = _.PLATFORMS.WEB


// const fs = require('fs-extra')
// const path = require('path')

// const _makeChunkShadows = ({ shadowsChunksDir, chunk, shadows }) => {    
//     // Let's make sure the chunk shadow locations are ready
//     const chunkDir = path.resolve(shadowsChunksDir, chunk.name)
//     const chunkScreensDir = path.resolve(chunkDir, 'screens')
//     fs.existsSync(chunkScreensDir) && fs.removeSync(chunkScreensDir) 
//     fs.mkdirsSync(chunkScreensDir)  

//     Object.keys(SHADOW_TYPES).map(type => {
//         const screensShadow = Object.keys(chunk.routes).map(screen => SHADOW_CHUNK_SCREEN({ chunk, screen, type })).join('\n')
//         shadows[type] = `${shadows[type]}${SHADOW({ chunk, type })}\n`
//         fs.writeFileSync(path.resolve(chunkDir, `index${SHADOW_TYPES[type]}.js`), SHADOW_CHUNK({ chunk, type }), 'utf8')
//         fs.writeFileSync(path.resolve(chunkScreensDir, `index${SHADOW_TYPES[type]}.js`), screensShadow, 'utf8')
//     })
// }

// const _makeShadows = (workspace, chunks) => {
//     // The shadows are empty to start with
//     var shadows = { web: "", desktop: "", mobile: ""}
 
//     // This is where we expect the shadows to exist
//     const shadowsDir = path.resolve(workspace.dir, '.app')
//     const shadowsChunksDir = path.resolve(shadowsDir, 'chunks')

//     // We want to make sure we start with fresh locations 
//     fs.existsSync(shadowsChunksDir) && fs.removeSync(shadowsChunksDir) 
//     fs.mkdirsSync(shadowsChunksDir)  
//     Object.keys(SHADOW_TYPES).map(type => fs.existsSync(path.resolve(shadowsDir, type)) && fs.removeSync(path.resolve(shadowsDir, type)))
    
//     // We're ready to produce the shadow chunks
//     chunks.map(chunk => _makeChunkShadows({ chunk, shadowsChunksDir, shadows }))

//     // Generate the main shadows
//     Object.keys(SHADOW_TYPES).map(type => fs.writeFileSync(path.resolve(shadowsChunksDir, `index${SHADOW_TYPES[type]}.js`), shadows[type], 'utf8'))
// }

// const run = ({ session, props, script }) => {
//     _makeShadows (session.workspace, props.sections)
//     return script.exec(Object.assign({}, script.props, props))
// }

// SHADOW_TYPES = { web: ".web", desktop: ".desktop", mobile: "" }
// SHADOW_CHUNK_SCREEN = ({ chunk, screen, type }) => `export { default as ${screen} } from '../../../../chunks/${chunk.name}/screens/${screen}${SHADOW_TYPES[type]}.js'`
// SHADOW = ({ chunk, type }) => `export { default as ${chunk.name} } from './${chunk.name}/index${SHADOW_TYPES[type]}.js'`
// SHADOW_CHUNK = ({ chunk, type }) => `
// import config from '../../../chunks/${chunk.name}/chunk.json'
// import * as screens from './screens/index${SHADOW_TYPES[type]}.js'
// const chunk = { screens, ...config }
// export default chunk
// `

// module.exports = run
