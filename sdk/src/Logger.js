class _ {
    constructor(props) {
        this._props = Object.assign({}, { name: "carmel" }, props)
        this._events = []
    }

    get props() {
        return this._props
    }

    get events() {
        return this._events
    }

    get name () {
        return this.props.name
    }

    logEvent(event) {
        const type = event.type || _.TYPE_SYSTEM
        const message = event.message || ""

        this.events.push(Object.assign({}, {
            timestamp: `${Date.now()}`,
            type
        }, { message: `[${this.name} ${type}] ${message}`}, event))
    }

    system(message) {
        this.logEvent({ message, type: _.TYPE_SYSTEM })
    }

    error(error) {
        this.logEvent({ error, message: error.message, type: _.TYPE_ERROR })
    }

    info (message) {
        this.logEvent({ message, type: _.TYPE_SYSTEM })
    }
}

_.TYPE_ERROR = 'error'
_.TYPE_INFO = 'info'
_.TYPE_SYSTEM = 'system'

_.TYPES = { 
    [_.TYPE_ERROR]: _.TYPE_ERROR, 
    [_.TYPE_INFO]: _.TYPE_INFO,
    [_.TYPE_SYSTEM]: _.TYPE_SYSTEM 
}

module.exports = _