const path = require('path')

export class Script {
    constructor(args) {
      this._args = Object.assign({}, args)
      this._platform = _.PLATFORMS[args.platform ? args.platform.toUpperCase() : _.DEFAULT_PLATFORM.toUpperCase()]
    }

    get platform() {
      return this._platform
    }

    get target() {
      return this.platform
    }

    get args() {
      return this._args
    }

    get isDev() {
      return this.args.dev
    }

    makeConfig(session) {
      const papanacheVersion = session.get('papanacheVersion')
      const bananasVersion = session.get('bananasVersion')

      const templateDir = path.resolve(session.index.path, 'archives', '@fluidtrends/bananas', bananasVersion, '@fluidtrends/bananas')
      const root = path.resolve(session.index.path, 'archives', 'papanache', papanacheVersion, 'papanache')

      const dir = process.cwd()
      const chunkyWebDir = path.resolve(templateDir, 'node_modules', 'react-dom-chunky')

      const dev = this.isDev 

      const templateAssets = [{
        path: `node_modules/react-dom-chunky/app/assets`, glob: '**/*' 
      }]

      return {
        dir,
        root,
        templateDir,
        port: 8082,
        templateAssets,
        script: path.resolve(chunkyWebDir, 'app', `index${dev ? '.dev' : ''}.js`),
        page: path.resolve(chunkyWebDir, 'app', 'pages', 'default.html')
      } 
    }

    load(session) {
      const props = this.makeConfig(session)

      return session.workspace.loadFile('carmel.json')
                    .then((config) => { 
                      props.config = Object.assign({}, config) 
                      return session.workspace.findDirs('chunks')
                    })
                    .then((dirs) => Promise.all(dirs.map(dir => session.workspace.loadFile(`chunks/${dir}/chunk.json`))))
                    .then((chunks) => { 
                      props.sections = [].concat(chunks)
                      return props
                    })
    }
}

_.ERRORS = Object.assign({}, _.ERRORS, {
})

_.PLATFORMS = { WEB: "web", DESKTOP: "desktop", MOBILE: "mobile" }
_.DEFAULT_PLATFORM = _.PLATFORMS.WEB
