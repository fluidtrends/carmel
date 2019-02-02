import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Data } from 'react-chunky'
import { LinearProgress } from 'rmwc/LinearProgress'
import {
  Card,
  CardActions,
  CardActionButtons
} from 'rmwc/Card'
import Fade from 'react-reveal/Fade'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Typography } from 'rmwc/Typography'
import { Form, Input, Icon, Avatar } from 'antd'
const FormItem = Form.Item
import Bounce from 'react-reveal/Bounce'

export default class LoginScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state }
    this._join = this.join.bind(this)
    this._login = this.login.bind(this)
    this._onKeyPress = this.onKeyPress.bind(this)
    this.state = { ...super.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  joinNow(session) {
    Data.Cache.cacheItem("guestSession", Object.assign({}, session, { guild: "entrepreneurs", help: this.state.message }))
              .then(() => this.triggerRedirect('/register'))
              .catch((e) => this.triggerRedirect('/register'))
  }


  join() {
    Data.Cache.retrieveCachedItem("guestSession")
              .then((session) => this.joinNow(session))
              .catch((e) => this.joinNow())
  }

  login () {
    this.triggerRedirect('/login')
  }

  onKeyPress (event) {
    console.log(event)
    if (event.key === 'Enter') {
      this.join()
    }
  }

  renderFormContent (width, padding) {
    if (this.state.loading) {
      return this.renderLoading()
    }

    return <Fade>
        <Card style={{ width, margin: '10px', padding }}>
      <div style={{ padding: '4px', textAlign: 'center', marginBottom: '20px' }}>
        <Bounce>
          <Avatar src="/assets/chunky-logo.gif" style={{
            height: "180px", width: "180px"
          }} />
        </Bounce>

        <Typography use='headline4' tag='div' style={{margin: "20px" }}>
          Hi there, I'm Chunky
        </Typography>

        <Typography use='headline6' tag='div' style={{ color: "#90A4AE" }}>
          I'm the official Carmel Code Monkey. My main purpose in life is to help awesome humans become world-class Software Developers,
          through our revolutionary <strong> Tweak-N-Learn™</strong> educational model.
        </Typography>

        <Typography use='headline6' tag='div' style={{margin: "20px", color: "#455A64" }}>
          Between our amazing Carmel Developer Community - and myself, we can help you <strong> turn your ideas into products </strong> faster,
          better and cheaper than anywhere else on this - or any other - planet.
        </Typography>
      </div>
    </Card>
    </Fade>
  }

  renderActionContent (width, padding) {
    if (this.state.loading) {
      return this.renderLoading()
    }

    return <Fade>
        <Card style={{ width, margin: '10px', padding }}>
      <div style={{ padding: '4px', textAlign: 'center', margin: '20px' }}>
       <FormItem style={{
      }}>
        <div style={{
          display: 'flex'
        }}>
        <Input
          style={{ height: '36px' }}
          value={this.state.message}
          onChange={val => this.setState({ message: val.target.value, error: '' })}
          placeholder={'What can we help you with today?'} />
          <Button
            raised
            theme='secondary-bg text-primary-on-secondary'
            style={{ marginLeft: "10px" }}
            onClick={this._join}>
            Send
          </Button>
          </div>
        </FormItem>
       </div>
    </Card>
    </Fade>
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

  renderMainContentFooter () {
    return <div />
  }

  get formWidth () {
    return this.isSmallScreen ? '95vw' : '600px'
  }

  get formPadding () {
    return this.isSmallScreen ? '10px' : '30px'
  }

  renderForm () {
    const width = this.formWidth
    const padding = this.formPadding
    return (
      <div
        style={this.containerStyle}>
        {this.renderFormContent(width, padding)}
        {this.renderActionContent(width, padding)}
        {this.renderMainContentFooter()}
      </div>
    )
  }

  components () {
    return [this.renderForm()]
  }
}
