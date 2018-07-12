import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import fs from 'fs-extra'
import path from 'path'
import os from 'os'
import NewWorkspaceForm from '../components/newWorkspace'
import { Typography } from 'rmwc/Typography'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Icon } from 'antd'
import Shell from '../components/shell'

export default class WorkspaceScreen extends Screen {
  constructor (props) {
    super(props)
    this._shell = new Shell()
    this.state = { ...this.state, loadingWorkspace: true, create: false }
    this._onCancel = this.onCancel.bind(this)
    this._onPause = this.onPause.bind(this)
    this._onSwitch = this.onSwitch.bind(this)
    this._onCreate = this.onCreate.bind(this)
    this._homeDir = this._calculateHomeDir()
  }

  componentDidMount () {
    super.componentDidMount()

    this.loadWorkspace()
  }

  get shell () {
    return this._shell
  }

  get homeDir () {
    return this._homeDir
  }

  _calculateHomeDir () {
    if (os.userInfo && os.userInfo().homedir) {
      return os.userInfo().homedir
    }

    if (os.homedir) {
      return os.homedir()
    }

    return process.env.HOME
  }

  get workspaceContext () {
    try {
      return JSON.parse(fs.readFileSync(path.resolve(this.homeDir, '.carmel', 'context', 'index.json'), 'utf8'))
    } catch (e) {
      console.log(e)
    }
  }

  onPause () {

  }

  onSwitch () {
  }

  onCancel () {
    // this.setState({ create: false })
  }

  loadProduct (workspace) {
    try {
      var product = path.resolve(this.homeDir, '.carmel', 'products', workspace.id, 'chunky.json')
      product = JSON.parse(fs.readFileSync(product, 'utf8'))
      this.setState({ workspace, product, loadingWorkspace: false, create: false })
    } catch (e) {
      console.log(e)
    }
  }

  startProduct (workspace) {
    setTimeout(() => {
      this.shell.exec('startProduct', { type: 'web', id: workspace.id }, ({ log }) => {
        console.log(log)
      })
      .then((data) => console.log(data))
      .catch(error => console.log(error))
    }, 500)
  }

  onCreate (workspace) {
    try {
      const context = Object.assign({}, this.workspaceContext, { workspace })
      fs.writeFileSync(path.resolve(this.homeDir, '.carmel', 'context', 'index.json'), JSON.stringify(context, null, 2), 'utf8')
      this.loadProduct(workspace)
      this.startProduct(workspace)
    } catch (e) {
      console.log(e)
    }
  }

  loadWorkspace () {
    this.setState({ loadingWorkspace: true, create: false })

    const context = this.workspaceContext
    if (!context || !context.workspace) {
      this.setState({ loadingWorkspace: false, create: true })
      return
    }

    this.loadProduct(context.workspace)
    this.startProduct(context.workspace)
  }

  renderMenu () {
    return [<Button
      raised
      key='add'
      onClick={this._onSwitch}
      >
      <ButtonIcon use='repeat' />
        Switch Workspace
      </Button>]
  }

  renderWorkspace (width, padding) {
    if (!this.state.workspace || !this.state.product) {
      return <div />
    }

    return <div style={{
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      width: '80vw'
    }}>
      <div style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: '20px',
        width: '100%',
        marginBottom: '20px',
        borderBottom: '1px #eeeeee solid'
      }}>
        { this.renderMenu() }
      </div>

      <Card style={{ width, margin: '10px', padding }}>
        <div style={{ padding: '4px', textAlign: 'center', marginBottom: '20px' }}>
          <Icon type='phonelink' style={{
            fontSize: '64px',
            padding: '10px'
          }} />
          <Typography use='title' tag='h2'>
            { this.state.product.info.title }
          </Typography>
        </div>

        <CardActions style={{ justifyContent: 'center', margin: '20px' }}>
          <CardActionButtons>
            <Button
              raised
              style={{ backgroundColor: '#f44336' }}
              onClick={this._onPause}>
              <ButtonIcon use='pause_circle_outline' />
              Stop
            </Button>
          </CardActionButtons>
        </CardActions>
      </Card>
    </div>
  }

  renderMainContent () {
    if (this.state.create) {
      return <NewWorkspaceForm
        cancel
        onCancel={this._onCancel}
        onCreate={this._onCreate} />
    }

    if (this.state.loadingWorkspace) {
      return <Components.Loading message='Loading Your Carmel Learning Workspace ...' />
    }

    const width = '400px'
    const padding = this.props.isSmallScreen ? '2px' : '30px'
    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          padding: '30px',
          margin: '40px',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        { this.renderWorkspace(width, padding)}
      </div>
    )
  }

  components () {
    return [this.renderMainContent()]
  }
}
