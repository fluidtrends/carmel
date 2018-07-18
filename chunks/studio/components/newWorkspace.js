import React from 'react'
import { Component, Components, Utils } from 'react-dom-chunky'
import { LinearProgress } from 'rmwc/LinearProgress'
import { Typography } from 'rmwc/Typography'
import { ListDivider } from 'rmwc/List'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Form, Input, Icon, Cascader } from 'antd'
const FormItem = Form.Item
import {
  GridList,
  GridTile,
  GridTileIcon,
  GridTilePrimary,
  GridTilePrimaryContent,
  GridTileSecondary,
  GridTileTitle
} from 'rmwc/GridList'
import { Elevation } from 'rmwc/Elevation'
import Shell from './shell'

export default class NewWorkspaceComponent extends Component {
  constructor (props) {
    super(props)
    this.state = { ...super.state, loading: false }
    this._done = this.create.bind(this)
    this._cancel = this.cancel.bind(this)
    this._shell = new Shell()
    this._templateFilter = this.templateFilter.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  componentWillUnmount () {
  }

  get shell () {
    return this._shell
  }

  create () {
    if (!this.state.name) {
      this.setState({ error: 'Please choose a name for your product' })
      return
    }

    if (!this.state.template) {
      this.setState({ error: 'Please choose a template for your product' })
      return
    }

    this.setState({ loading: true })
    const id = this.state.name.replace(/\s+/g, '-').toLowerCase()
    setTimeout(() => {
      this.shell.exec('createWorkspace', { name: this.state.name, id, template: this.state.template }, ({ log }) => {})
      .then((data) => {
        this.props.onCreate && this.props.onCreate({ id, name: this.state.name, template: this.state.template })
      })
      .catch(error => this.setState({ error, loading: false }))
    }, 500)
  }

  cancel () {
    this.props.onCancel && this.props.onCancel()
  }

  get user () {
    return this.props.account || {}
  }

  renderMainContent () {
  }

  renderError () {
    if (!this.state.error) {
      return <div />
    }

    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          margin: '10px',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography use='title' style={{ color: '#ef5350' }} tag='h1'>
          {this.state.error}
        </Typography>
      </div>
    )
  }

  templateFilter (data) {
    console.log(data)
  }

  renderSecondary () {
    if (!this.props.cancel) {
      return <div />
    }

    return <CardActions style={{ justifyContent: 'center', margin: '0px' }}>
      <CardActionButtons>
        <Button
          onClick={this._cancel}>
          Cancel
        </Button>
      </CardActionButtons>
    </CardActions>
  }

  renderFormContent (width, padding) {
    if (this.state.loading) {
      return <Components.Loading message={'Almost there, one sec please ...'} />
    }

    return <Card style={{ width, margin: '10px', padding }}>
      <div style={{ padding: '4px', textAlign: 'center', marginBottom: '20px' }}>
        <Icon type='rocket' style={{
          fontSize: '64px',
          padding: '10px'
        }} />
        <Typography use='title' tag='h2'>
          Create A New Carmel Product
        </Typography>
      </div>

      { this.renderError() }
      { this.renderFields() }

      <CardActions style={{ justifyContent: 'center', margin: '20px' }}>
        <CardActionButtons>
          <Button
            raised
            onClick={this._done}
            theme='secondary-bg text-primary-on-secondary'>
            <ButtonIcon use='done' />
            Create Now
          </Button>
        </CardActionButtons>
      </CardActions>
      { this.renderSecondary() }
    </Card>
  }

  get templates () {
    return [{
      value: 'personal',
      label: 'Personal Brand'
    }]
  }

  renderFields () {
    return <div style={{
      padding: '20px'
    }}>
      <FormItem style={{
      }}>
        <Input
          style={{ height: '42px' }}
          value={this.state.name}
          onChange={val => this.setState({ name: val.target.value, error: '' })}
          onKeyPress={this.onKeyPress}
          prefix={<Icon type='form' style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder={placeholders.name} />
      </FormItem>
      <FormItem style={{
      }}>
        <Cascader
          style={{
            width: '100%'
          }}
          size='large'
          options={this.templates}
          onChange={val => this.setState({ template: val[0], error: '' })}
          placeholder='Choose a template'
          showSearch={this._templateFilter}
        />
      </FormItem>
    </div>
  }

  render () {
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
        { this.renderFormContent(width, padding)}
      </div>
    )
  }
}

const placeholders = {
  name: 'Choose a name for your product',
  password: 'Please enter your password'
}
