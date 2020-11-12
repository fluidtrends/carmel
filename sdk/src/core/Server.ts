import pm2 from 'pm2'
import path from 'path'

import {
  IServer,
  ICommand,
  IFile,
  File,
  CommandType,
  Id,
  CommandArg,
  IDir,
  ServerState,
} from '..'

/**
 *
 */
export class Server implements IServer {
  /** @internal */
  protected _state: ServerState

  /** @internal */
  protected _dir: IDir

  /** @internal */
  protected _id: Id

  /** @internal */
  protected _scriptFile?: IFile

  /** @internal */
  protected _outputFile?: IFile

  /** @internal */
  protected _errorFile?: IFile

  /** @internal */
  protected _pidFile?: IFile

  /** @internal */
  protected _command: ICommand

  /** @internal */
  protected _args?: CommandArg[]

  /**
   *
   * @param command
   */
  constructor(command: ICommand, args?: CommandArg[]) {
    this._command = command
    this._args = args
    this._state = ServerState.UNINITIALIZED
    this._id = `${command.id}${
      command.type === CommandType.PRODUCT ? '/' + command.product!.id : ''
    }`
    this._dir = command
      .session!.dir?.dir('servers')
      ?.make()
      ?.dir(this.id)
      ?.make()!
  }

  /** @internal */
  arg(name: string) {
    return this.args?.find((a) => a.name === name)
  }

  /**
   *
   */
  get scriptFile() {
    return this._scriptFile
  }

  /**
   *
   */
  get pidFile() {
    return this._pidFile
  }

  /**
   *
   */
  get outputFile() {
    return this._outputFile
  }

  /**
   *
   */
  get args() {
    return this._args
  }

  /**
   *
   */
  get command() {
    return this._command
  }

  /**
   *
   */
  get errorFile() {
    return this._errorFile
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
  get state() {
    return this._state
  }

  /**
   * Move the Server into a new {@linkcode ServerState}
   *
   * @param state The new {@linkcode ServerState}
   */
  public changeState(state: ServerState) {
    this._state = state
  }

  /**
   *
   */
  get id() {
    return this._id
  }

  /**
   *
   */
  async initialize() {
    this.changeState(ServerState.INITIALIZING)

    // Look up the server contents
    this._outputFile = this.dir?.file('output.log')
    this._errorFile = this.dir?.file('error.log')
    this._pidFile = this.dir?.file('pid')
    this._scriptFile = new File(
      path.resolve(
        path.dirname(path.dirname(__dirname)),
        'lib',
        'server',
        'main.js'
      )
    )

    return new Promise((resolve, reject) => {
      pm2.connect((err) => {
        if (err) {
          this.changeState(ServerState.STOPPED)
          reject(err)
          return
        }

        pm2.describe(this.id, (err, instance) => {
          if (err) {
            this.changeState(ServerState.STOPPED)
            pm2.disconnect()
            reject(err)
            return
          }

          if (!instance || instance.length === 0) {
            this.changeState(ServerState.INITIALIZED)
            resolve()
            return
          }

          this.changeState(ServerState.RUNNING)
          resolve()
        })
      })
    })
  }

  /**
   *
   */
  get isInitialized() {
    return this.state >= ServerState.INITIALIZED
  }

  /**
   *
   */
  get isStarted() {
    return this.state >= ServerState.STARTED
  }

  /**
   *
   */
  get isRunning() {
    return this.state >= ServerState.RUNNING
  }

  /**
   *
   */
  get forceStart() {
    const force = this.arg('force')
    return force !== undefined && force.value
  }

  /**
   *
   */
  async start() {    
    // Make sure we're ready to start
    this.isInitialized || (await this.initialize())

    // Only start once
    if (this.isStarted && !this.arg('force')) return { alreadyStarted: true }

    // Ok, let's do this
    this.changeState(ServerState.STARTING)

    return new Promise((resolve, reject) => {
      pm2.connect((err) => {
        if (err) {
          this.changeState(ServerState.STOPPED)
          reject(err)
          return
        }

        const options =  {
          cwd: (this.command.type === CommandType.PRODUCT
            ? this.command.product!.dir!
            : this.command.session!.dir!
          ).path,
          pid: this.pidFile!.path,
          output: this.outputFile!.path,
          interpreter: process.env.NODU_NODE_EXEC,
          error: this.errorFile!.path,
          name: this.id,
          script: this.scriptFile?.path,
        }

        pm2.start(options, () => {  
            pm2.describe(this.id, (err, desc: any) => {
              if (err) {
                this.changeState(ServerState.STOPPED)
                pm2.disconnect()
                reject(err)
                return
              }

              if (desc[0].pm2_env.status !== 'online') {
                this.changeState(ServerState.STOPPED)
                pm2.disconnect()
                reject('An error occurred')
                return
              }

              this.changeState(ServerState.RUNNING)
              resolve({ started: true })  
            })
        })
      })
    })
  }

  /**
   *
   */
  async stop() {
    // Make sure we're ready to start
    this.isInitialized || (await this.initialize())

    return new Promise((resolve, reject) => {
      pm2.connect((err) => {
        if (err) {
          this.changeState(ServerState.STOPPED)
          reject(err)
          return
        }

        pm2.stop(this.id!, (err) => {
          if (err) {
            pm2.disconnect()
            reject(err)
            return
          }
          this.changeState(ServerState.STOPPED)
          resolve()
        })
      })
    })
  }
}
