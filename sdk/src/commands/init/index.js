const Command = require('../../Command')
const parse = require('url-parse')

class _ extends Command {
  constructor(args) {
    super(args)
  }

  get id() { return _.ID }
  get requiredArgs() { return _.REQUIRED }
  get requiresContext() { return _.REQUIRES_CONTEXT }
  get title() { return _.TITLE }
  get type () { return _.TYPE }

  get archive() {
    return this._archive
  }

  get template() {
    return this._template
  }

  parse() {
    const url = parse(this.args.template, true)

    const source = url.protocol.slice(0, -1).toLowerCase() || 'npm'
    const version = url.hash.substring(1) || null
    const path = url.pathname
      
    var id = url.host || _.DEFAULT_ARCHIVE_ID

    if (id.split(":").length > 1) {
      const [owner, repo] = id.toLowerCase().split(":")
      id = `@${owner}/${repo}`
    }

    if (!_.SUPPORTED_ARCHIVE_SOURCES.includes(source)) {
      return
    }

    this._archive = Object.assign({}, { source, id }, version && { version })
    this._template = Object.assign({}, { path })    
  }

  exec(session) {
    if (!session) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the session is missing')))
    }

    if (session.workspace.exists) {
      return Promise.reject(new Error(_.ERRORS.ALREADY_EXISTS(this.type)))
    }

    // Figure out the archive id and version and the template path within the archive
    this.parse()

    if (!this.archive || !this.archive.id || !this.template || !this.template.path) {
      return Promise.reject(new Error(_.ERRORS.COULD_NOT_EXECUTE('the template is invalid')))
    }

    // The dynamic args for templating
    const args = {}

    // Initialize the workspace
    return session.workspace.create()
             .then(() => session.index.installArchive(this.archive))
             .then((archive) => archive.save(session.workspace.dir, args))
  }
}

_.ERRORS = Object.assign({}, _.ERRORS, {})
_.REQUIRES_CONTEXT = false
_.REQUIRED = ['name', 'template']
_.TITLE = "Creating a new workspace"
_.TYPE = "workspace"
_.ID = 'init'
_.DEFAULT_ARCHIVE_ID = "@fluidtrends/bananas"
_.SUPPORTED_ARCHIVE_SOURCES = ['npm']

module.exports = _