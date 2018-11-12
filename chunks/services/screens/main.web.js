import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { LinearProgress } from 'rmwc/LinearProgress'
import {
  Card,
  CardActions,
  CardActionButtons
} from 'rmwc/Card'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Typography } from 'rmwc/Typography'
import { Form, Input, Checkbox, notification, Icon, Slider } from 'antd'

const FormItem = Form.Item
const CheckboxGroup = Checkbox.Group
const { TextArea } = Input

export default class MainServicesScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state }

    this._done = this.done.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  renderScreenshots () {
  }

  get features () {
    return []
  }

  renderFeatures() {
    const options = ['Website', 'iPhone App', 'Android App', 'API', 'Blockchain DApp', 'Other']

    return <div style={{ padding: '4px', textAlign: 'center', marginBottom: '20px' }}>
      <Icon type='message' style={{
        fontSize: '40px',
        padding: '10px'
      }} />
      <Typography use='headline5' tag='div' style={{textAlign: "center"}}>
        How may we help you?
      </Typography>
      <CheckboxGroup
      style={{
        padding: "10px",
        margin: "10px",
        lineHeight: "20px"
      }}
      options={options}
      value={this.state.features}
      onChange={(features) => this.setState({ features })} />
    </div>
  }

  renderLinks() {
    return <div style={{ padding: '4px', textAlign: 'center' }}>
      <Typography use='headline5' tag='div' style={{textAlign: "center"}}>
        Include top 3 relevant links (if any)
      </Typography>
      <Input style={{margin: "10px"}} addonBefore="Http://"
      onChange={val => this.setState({ link1: val.target.value, error: '' })}/>
      <Input style={{margin: "10px"}} addonBefore="Http://"
      onChange={val => this.setState({ link2: val.target.value, error: '' })}/>
      <Input style={{margin: "10px"}} addonBefore="Http://"
      onChange={val => this.setState({ link3: val.target.value, error: '' })}/>
    </div>
  }

  renderDescription() {
    return <div style={{ padding: '4px', textAlign: 'center' }}>
      <Typography use='headline5' tag='div' style={{textAlign: "center"}}>
        Tell us a bit about your project
      </Typography>
      <FormItem>
        <TextArea style={{margin: "20px", maxWidth: '80vw'}}
        onChange={val => this.setState({ description: val.target.value, error: '' })}
        placeholder={placeholders.description}  autosize />
      </FormItem>
    </div>
  }

  renderBudget() {
    const marks = {
      10: '$10K',
      25: '$25K',
      50: '$50K',
      75: '$75K',
      100: '$100K+'
    }

    const budget = this.state.budget ? `$${this.state.budget[0]}K - $${this.state.budget[1]}K` : ''

    return <div style={{ padding: '4px', textAlign: 'center', maxWidth: '85vw' }}>
      <Typography use='headline5' tag='div' style={{textAlign: "center"}}>
        What's your budget (USD)?
      </Typography>
      <Slider marks={marks} range
        defaultValue={[40, 60]}
        onChange={val => this.setState({ budget: val, error: '' })}/>
      <Typography use='headline5' tag='div' style={{textAlign: "center"}}>
        { budget }
      </Typography>
    </div>
  }

  renderFormContent (width, padding) {
    if (this.state.sending) {
      return <Components.Loading message="Just a sec, please ..."/>
    }

    return <Card style={{ width, margin: '10px', padding }}>
      {this.renderFeatures()}
      {this.renderDescription()}
      {this.renderLinks()}
      {this.renderBudget()}
      {this.renderFields()}

      <CardActions style={{ justifyContent: 'center', margin: '20px' }}>
        <CardActionButtons>
          <Button
            disabled={this.state.loading && !this.error}
            raised
            onClick={this._done}
            theme='secondary-bg text-primary-on-secondary'>
            <ButtonIcon icon='done' />
            Get Your FREE Quote Now
          </Button>
        </CardActionButtons>
      </CardActions>
    </Card>
  }

  get containerStyle () {
    const margin = this.isSmallScreen ? '0' : '40px'
    return {
      display: 'flex',
      flex: 1,
      margin,
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }

  get formWidth () {
    return this.isSmallScreen ? '95vw' : '600px'
  }

  get formPadding () {
    return this.isSmallScreen ? '10px' : '30px'
  }

  onKeyPress (event) {
    if (event.key === 'Enter') {
      this._done()
    }
  }

  get quote() {
    return Object.assign({}, {
      name: this.state.name,
      email: this.state.email,
      description: this.state.description,
      budget: `$${this.state.budget[0]}K - $${this.state.budget[1]}K`,
      features: this.state.features.join(","),
      timestamp: `${Date.now()}`
    },
    this.state.link1 && { link1: this.state.link1 },
    this.state.link2 && { link2: this.state.link2 },
    this.state.link3 && { link3: this.state.link3 })
  }

  done () {
    if (!this.state.features) {
      notification.open({
        icon: <Icon type='frown' style={{ color: '#f44336' }} />,
        message: errors.features
      })
      return
    }

    if (!this.state.description) {
      notification.open({
        icon: <Icon type='frown' style={{ color: '#f44336' }} />,
        message: errors.description
      })
      return
    }

    if (!this.state.budget) {
      notification.open({
        icon: <Icon type='frown' style={{ color: '#f44336' }} />,
        message: errors.budget
      })
      return
    }

    if (!this.state.name) {
      notification.open({
        icon: <Icon type='frown' style={{ color: '#f44336' }} />,
        message: errors.name
      })
      return
    }

    if (!this.state.email) {
      notification.open({
        icon: <Icon type='frown' style={{ color: '#f44336' }} />,
        message: errors.email
      })
      return
    }

    this.setState({ sending: true })
    this.props.newQuote(this.quote)
  }

  quoteSent(response) {
    this.setState({ sent: true, sending: false })
    notification.open({
      icon: <Icon type='smile' style={{ color: '#4CAF50' }} />,
      message: "Someone will get back to you shortly"
    })
  }

  failedToSentQuote(error) {
    this.setState({ sending: false })
    notification.open({
      icon: <Icon type='frown' style={{ color: '#f44336' }} />,
      message: error.message
    })
  }

  renderFields () {
    return <div style={{
      margin: "20px"
    }}>
     <FormItem>
       <Input style={{ height: '48px' }}
        ref={(ref) => { this._name = ref }}
        value={this.state.name}
        disabled={this.state.loading && !this.error}
        onChange={val => this.setState({ name: val.target.value, error: '' })}
        onKeyPress={this.onKeyPress}
        prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
        type='text'
        placeholder={placeholders.name} />
     </FormItem>
      <FormItem style={{
      }}>
        <Input
          ref={(ref) => { this._email = ref }}
          style={{ height: '48px' }}
          value={this.state.email}
          disabled={this.state.loading && !this.error}
          onChange={val => this.setState({ email: val.target.value, error: '' })}
          onKeyPress={this.onKeyPress}
          prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder={placeholders.email} />
      </FormItem>
    </div>
  }

  renderForm () {
    const width = this.formWidth
    const padding = this.formPadding
    return (
      <div
        style={this.containerStyle}>
        {this.renderFormContent(width, padding)}
      </div>
    )
  }

  components () {
    const features = super.components()
    return [...features, this.renderForm()]
  }
}

const placeholders = {
  email: 'Please enter your email address',
  name: 'Please enter your name',
  description: 'What is your project all about?'
}

const errors = {
  description: "Please give us a bit of context",
  features: "Please specify one or more areas where we can help",
  email: "Don't forget your email address",
  name: "Don't forget your name",
  budget: "Make sure you specify your budget"
}
