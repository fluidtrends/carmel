import passport from 'passport'
import express, { Express } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import http from 'http'
import path from 'path'
import getPort from 'get-port'

export class Server {
    private _app: any 
    private _port: number 
    private _env: any
    private _runner: any

    constructor(env: any) {
        this._app = express()
        this._env = env
    }

    get app() {
        return this._app
    }

    get port () {
        return this._port
    }

    get env() {
        return this._env
    }

    get baseUrl() {
        return '0.0.0.0'
    }

    get runner() {
        return this._runner
    }

    async init() {
        this._port = await getPort()
        this.app.set('port', this.port)
        // this.app.set('views', this.dir.path!)
        // this.app.set('view engine', 'ejs')
    
        this.app.use(
          cors({
            origin: this.baseUrl,
            methods: ['GET', 'POST'],
            credentials: true,
          })
        )
    
        this.app.use((req: any, res: any, next: any) => {
          res.header('Access-Control-Allow-Origin', this.baseUrl)
          res.header('Access-Control-Allow-Credentials', 'true')
          next()
        })
    
        // this.app.use(bodyParser.json())
        // this.app.use(bodyParser.urlencoded({ extended: false }))
        // this.app.use(cookieParser())
        this.app.use(express.static(this.env.home.path))
    
        // this.app.use(passport.initialize())
        // this.app.use(passport.session())
    }

    async start() {
        await this.init()

        // this.app.get('/', (req: any, res: any) => {
        //     console.log(req)
        // })

        this._runner = new http.Server(this.app)
        
        this.runner.listen(this.port, async () => {
            console.log("**** Server Started on port", this.port, "...")
        })
    }
}