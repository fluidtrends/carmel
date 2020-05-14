import Ora from 'ora'
import chalk from 'chalk'

import {
    ILogger
} from '.'

export class Logger implements ILogger {
    protected _props: any;

    constructor(props: any) {
        this._props = Object.assign({}, { name: "carmel" }, props)
        // this._events = []
    }

    // get console() {
    //     return this._console
    // }

    get props() {
        return this._props
    }

    // get events() {
    //     return this._events
    // }

    // get name () {
    //     return this.props.name
    // }

    // start(message) {
    //     return new Promise((resolve) => {
    //         if (!this.props.console) {
    //             resolve()
    //             return 
    //         }

    //         this._console = new Ora({ text: chalk[_.TYPE_FLAGS[_.TYPE_SYSTEM]](message || ''), spinner: 'dots', color: 'yellow', stream: process.stdout })
    //         this.console.start()
    //         resolve()
    //     })
    // }

    // stop() {
    //     return new Promise((resolve) => {
    //         if (!this.console) {
    //             resolve()
    //             return 
    //         }

    //         this.console.stop()
    //         resolve()
    //     })
    // }

    // done(message) {
    //     this.info(message)
    //     this.console.succeed()
    // }

    // logEvent(event) {
    //     const type = event.type || _.TYPE_SYSTEM
    //     const message = `${event.message || ""}`

    //     this.events.push(Object.assign({}, {
    //         timestamp: `${Date.now()}`,
    //         type, message
    //     }, event))

    //     if (!this.console) {
    //         return 
    //     }

    //     if (_.TYPE_ERROR === type) {
    //         this.console.fail(`${chalk[_.TYPE_FLAGS[type]](message)}`)
    //         return
    //     }

    //     this.console.text = `${chalk[_.TYPE_FLAGS[type]](message)}`
    // }

    // system(message) {
    //     this.logEvent({ message, type: _.TYPE_SYSTEM })
    // }

    // error(error) {
    //     this.logEvent({ error, message: error.message, type: _.TYPE_ERROR })
    // }

    // info (message) {
    //     this.logEvent({ message, type: _.TYPE_INFO })
    // }
}

// _.TYPE_ERROR = 'error'
// _.TYPE_INFO = 'info'
// _.TYPE_SYSTEM = 'system'

// _.TYPE_FLAGS = { 
//     [_.TYPE_ERROR]: 'red', 
//     [_.TYPE_INFO]: 'green',
//     [_.TYPE_SYSTEM]: 'bold' 
// }
