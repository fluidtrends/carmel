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
    this.state = { ...super.state }
  }

  componentDidMount () {
    super.componentDidMount()

    if (this.isLoggedIn) {
      this.triggerRedirect("/me/workspace")
    }
  }

  joinNow(session) {
    Data.Cache.cacheItem("guestSession", Object.assign({}, session, { guild: "learners" }))
              .then(() => this.triggerRedirect('/challenges'))
              .catch((e) => this.triggerRedirect('/challenges'))
  }


  join() {
    Data.Cache.retrieveCachedItem("guestSession")
              .then((session) => this.joinNow(session))
              .catch((e) => this.joinNow())
  }

  login () {
    this.triggerRedirect('/login')
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

        <Typography use='headline6' tag='div'>
          I'm the official Carmel Code Monkey. My main purpose in life is to help you become the best Software Developer possible,
          through our revolutionary <strong> Tweak-N-Learn™</strong> educational model. All you have to do is to <strong> really want it </strong> - and
          to be willing to <strong> challenge </strong> yourself to grow.
        </Typography>
      </div>

      <CardActions style={{ justifyContent: 'center', margin: '20px' }}>
        <CardActionButtons>
          <Button
            raised
            onClick={this._join}
            theme='secondary-bg text-primary-on-secondary'>
            <ButtonIcon icon='play_circle_filled' />
            Take A Challenge Now
          </Button>
        </CardActionButtons>
      </CardActions>
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
        {this.renderMainContentFooter()}
      </div>
    )
  }

  components () {
    const features = super.components()
    return [...features, this.renderForm()]
  }
}
