const ipc = require('node-ipc')
const path = require('path')
const fs = require('fs-extra')

const HOME = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']
const CARMEL_HOME = path.resolve(HOME, '.carmel')
const CARMEL_WELCOME = path.resolve(HOME, '.carmel', 'context', 'welcome')

const _name = 'carmelhyper'

var events = {
  ssh: {
    id: 'ssh',
    cmd: 'vagrant ssh',
    hook: ''
  },
  compiled: {
    id: 'compiled',
    cmd: 'chunky start web',
    hook: 'Chunky is happy'
  }
}

try {
  events.ssh.hook = fs.readFileSync(CARMEL_WELCOME, 'utf8').trim()
} catch (e) {}

const registerEvent = (command, client) => {
  const data = `${command.cmd} ${(command.args || []).join(' ')}\n`

  if (!events[command.id]) {
    return data
  }

  events[command.id].pending = { command, client }

  return data
}

const handleEvent = (action) => {
  Object.keys(events).forEach(event => {
    if (events[event].pending && events[event].hook && action.data.includes(events[event].hook)) {
      ipc.server.emit(events[event].pending.client, 'response', { from: _name, cmd: events[event].cmd, id: events[event].id, done: true })
    }
  })
}

exports.middleware = (store) => (next) => (action) => {
  if (action.type === 'SESSION_ADD_DATA') {
    handleEvent(action)
  }
  next(action)
}

const exit = ({ window, dispatch, uid }) => {
  console.log('!!! GOT EXIT')
  dispatch({
    type: 'SESSION_CLEAR_ACTIVE',
    effect () {
      window.rpc.emit('exit', { uid })
    }
  })
}

const run = ({ dispatch, uid, command, client }) => {
  console.log('>>>>', command)
  if (command.cmd === 'exit') {
    exit({ window, dispatch, uid })
    return
  }

  const data = registerEvent(command, client)

  dispatch({
    type: 'SESSION_USER_DATA',
    data,
    effect () {
      window.rpc.emit('data', { uid, data })
    }
  })
}

const exec = (command, client) => {
  if (!command.cmd || !command.from || !command.id) {
    return
  }

  console.log(`[${_name}] got [${command.cmd}] command from [${command.from}]`)

  window.store.dispatch((dispatch, getState) => {
    const { sessions } = getState()
    const uid = sessions.activeUid

    run({ dispatch, uid, command, client })
  })
}

const start = () => {
  ipc.config.id = _name
  ipc.config.retry = 1500
  ipc.config.silent = true

  console.log(`[${_name}] starting ... `)

  ipc.serve(() => {
    ipc.server.on('command', (command, client) => {
      exec(command, client)
    })
  })

  ipc.server.start()

  console.log(`[${_name}] started`)
}

exports.decorateTerm = (Term, { React, notify }) => {
  return class extends React.Component {
    constructor (props, context) {
      super(props, context)
    }

    componentDidMount () {
      start()
    }

    render () {
      return React.createElement(Term, Object.assign({}, this.props, {
      }))
    }
  }
}
