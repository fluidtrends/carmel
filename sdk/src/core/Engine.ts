import {
  IEngine,
  ICommand,
  ISession,
  Errors,
  Session,
  IServer,
  Server,
  EngineState,
  CommandArg,
  SessionProps,
} from '..'
import express from 'express'
import http from 'http'
import socket from 'socket.io'
import getPort from 'get-port'

/**
 * Solely reponsible for running Carmel Commands.
 * It acts as the main entry point to the Carmel System.
 * Usually gets invoked by a Carmel Client, such as the Carmel CLI.
 * Only one instance available at all times.
 *
 * {@link https://github.com/fluidtrends/carmel/blob/master/sdk/src/Engine.ts | Source Code } |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Engine.ts/source | Code Quality} |
 * {@link https://codeclimate.com/github/fluidtrends/carmel/sdk/src/Engine.ts/stats | Code Stats}
 *
 * @category Core
 */
export class Engine implements IEngine {
  /** @internal */
  private _session?: ISession

  /** @internal */
  private _state: EngineState

  /** @internal */
  private static _instance?: IEngine

  /** @internal */
  protected _server?: IServer

  /** @internal */
  private constructor() {
    this._state = EngineState.STOPPED
  }

  /**
   * Makes sure that the Engine has a single instance
   */
  static get instance() {
    Engine._instance = Engine._instance || new Engine()
    return Engine._instance
  }

  /**
   * Move the Engine into a new {@linkcode EngineState}
   *
   * @param state The new {@linkcode EngineState}
   */
  changeState(state: EngineState) {
    this._state = state
  }

  /**
   *
   */
  get server() {
    return this._server
  }

  /**
   * Retrieves the current {@linkcode EngineState} of the Engine.
   */
  get state() {
    return this._state
  }

  /**
   *
   * @param command
   * @param args
   */
  async startServer(command: ICommand, args?: CommandArg[]) {
    const props: any = {}
    args?.map((arg) => (props[arg.name!] = arg.value))
    process.env.CARMEL_COMMAND = JSON.stringify(props)

    this._server = new Server(command, args)
    await this.server?.start()

    process.exit(0)
  }

  /**
   *
   */
  get session() {
    return this._session
  }

  /**
   * Checks whether the Engine has a valid {@linkcode Session}
   */
  get hasSession() {
    return this._session !== undefined
  }

  /**
   * Checks whether the Engine has been started or not.
   */
  get isStarted() {
    return this._state >= EngineState.STARTED && this.hasSession
  }

  /**
   * Create a brand new  {@linkcode Session}
   *
   * @param props The {@linkcode SessionProps} with which to create a new {@linkcode Session}
   */
  async newSession(props?: SessionProps) {
    // Make sure we do have props, even if only defaults
    props = Object.assign(
      {},
      {
        cwd: process.cwd(),
        name: 'carmel',
        dir: process.env.CARMEL_USER_HOME,
      },
      props
    )

    // This engine is not started yet, let's begin by assigning a new Session
    this._session = new Session(props)

    // Good, let's also make sure the Session is initialized
    await this._session.initialize()
  }

  /**
   * Starts a new Engine {@linkcode Session}.
   *
   * @param props The {@linkcode SessionProps} with which to initialize a new {@linkcode Session}
   */
  async start(props?: SessionProps) {
    if (this.isStarted) {
      // No need to start an Engine that has already been started
      return this._session!
    }

    // Let's let the world know we're starting up
    this.changeState(EngineState.STARTING)

    // This engine is not started yet, let's begin by assigning a new Session
    await this.newSession(props)

    // We're now started and ready to go
    this.changeState(EngineState.READY)

    // Let's allow callers to access the Session
    return this._session!
  }

  /**
   * Ends the current Engine {@linkcode Session} and clean up if necessary.
   */
  async stop() {
    // Let's put ourselves in the right state
    this.changeState(EngineState.STOPPED)

    // Ready to go to sleep now
    await this._session?.destroy()
    delete this._session
  }

  /**
   * Executes a single {@linkcode ICommand}.
   *
   * @param command The {@linkcode ICommand} to execute
   * @param args The {@linkcode CommandArgs} to pass to this command
   */
  async exec(command?: ICommand, args?: CommandArg[]) {
    if (!this.session) {
      // Don't do anything without a session
      throw Errors.SessionIsMissing()
    }

    if (!command) {
      // Likewise, don't do anything without a command
      throw Errors.CommandIsMissing()
    }

    if (!this.isStarted) {
      // Don't barf but silently ignore execution until we're ready
      return
    }

    // We're about to run it
    Engine.instance.changeState(EngineState.RUNNING)

    // Time to let the command do its thing
    await command?.exec()

    // We're done running
    Engine.instance.changeState(EngineState.READY)
  }

  /**
   *
   */
  static get session() {
    return Engine.instance.session
  }

  /**
   * Runs a {@linkcode Command} in a {@linkcode Session}.
   *
   * @param command The {@linkcode Command} to run
   * @param args The {@linkcode CommandArgs} to pass to this command
   */
  static async run(command?: ICommand, args?: CommandArg[]) {
    if (command?.isLongRunning) {
      // First, start the engine if necessary
      await Engine.instance.start()

      // Prepare the command
      await command?.initialize(this.session!, args)

      // Start the server for long running commands
      await Engine.instance.startServer(command, args)
      return
    }

    // Let's let this command run
    await Engine.start(command, args)

    // If we only need to run this once, then we're completely finished
    await Engine.stop()
  }

  /**
   *
   * @param command
   * @param args
   */
  static async start(command?: ICommand, args?: CommandArg[]) {
    // First, start the engine if necessary
    await Engine.instance.start()

    // Prepare the command
    await command?.initialize(this.session!, args)

    const port = await getPort({ port: 3000 })
    const app = express()
    app.set('port', port)

    const serverInstance = new http.Server(app)
    const io = socket(serverInstance)

    app.get('/', async (req: any, res: any) => {
      res.send('ok')
    })

    io.on('connection', (socket) => {
      console.log('A user has connected to the socket!')
      socket.on('disconnect', () =>
        console.log('A user has disconnected from the socket!')
      )
      socket.on('request', (message: any) => {
        console.log('>', message)
        socket.emit('response', { hello: 'world', message })
      })
    })

    serverInstance.listen(port, async () => {
      // Listen for events
      console.log('server instance running', port)
    })

    // Let's let this command run
    await Engine.instance.exec(command, args)
  }

  /**
   *
   */
  static async stop() {
    // First, start the engine if necessary
    await Engine.instance.stop()
    process.exit(0)
  }
}
