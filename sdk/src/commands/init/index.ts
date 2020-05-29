import {
  Command,
  CommandArg,
  ISession,
  Errors,
  CommandProps,
  CommandType
} from '../..'

const props: CommandProps = {
  id: "init",
  requiredArgs: ["name", "template"],
  type: CommandType.WORKSPACE,
  title: "Creating a new Carmel Product"
}

/**
 * 
 * @category Commands
 */
export default class Init extends Command {
  /** @internal */
  constructor() {
    super(props)
  }

  /** @internal */
  async exec() {
    if (this.product?.exists) {
      // Check to make sure we're even allowed to attempt this
      throw Errors.ProductAlreadyExists()
    }

    // Const check on the template
    const templateId = this.arg('template')

    // And let's see if it loads
    const template = await this.session?.findTemplate(templateId, true)
    
    console.log("Template:", template)
  }
}

// /**
//  * 
//  * 
//  * @category Commands
//  */
// export default class Init extends Command {
//   // protected _archive?: any;
//   // protected _template?: any;

//   /** @internal */
//   constructor() {
//     super(props)
//   }

  // parse() {
  //   const url = parse(this.args.template, true)

  //   const source = url.protocol.slice(0, -1).toLowerCase() || 'npm'
  //   const version = url.hash.substring(1) || null
  //   const path = url.pathname.substring(1)
      
  //   var id = url.host || Globals.DEFAULT_ARCHIVE_ID

  //   if (id.split(":").length > 1) {
  //     const [owner, repo] = id.toLowerCase().split(":")
  //     id = `@${owner}/${repo}`
  //   }

  //   if (!Globals.SUPPORTED_ARCHIVE_SOURCES.includes(source)) {
  //     return
  //   }

  //   this._archive = Object.assign({}, { silent: true, source, id }, version && { version })
  //   this._template = Object.assign({}, { path })    
  // }

  // /** @internal */
  // async exec(session: ISession, args?: CommandArg[]) {
    
  // }

    // if (!session) {
    //   return Promise.reject(Errors.CommandCannotExecute(this.id, 'the session is missing'))
    // }

    // if (session.workspace?.exists) {
    //   return Promise.reject(Errors.CommandCannotExecute(this.id, 'the workspace already exists'))
    // }

    // // Figure out the archive id and version and the template path within the archive
    // this.parse()

    // if (!this._archive || !this._archive.id || !this._template || !this._template.path) {
    //   return Promise.reject(Errors.CommandCannotExecute(this.id, 'the template is invalid'))
    // }

    // // Initialize the workspace
    // return session.workspace?.create() 
// }
