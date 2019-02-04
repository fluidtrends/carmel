import React from 'react'
import { Screen, Component } from 'react-dom-chunky'
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
import { Form, Input, Icon, Rate, Slider, Checkbox, Switch, Avatar, notification } from 'antd'
const FormItem = Form.Item
import Bounce from 'react-reveal/Bounce'
import isEmail from 'validator/lib/isEmail'
import isUrl from 'validator/lib/isUrl'
const { TextArea } = Input
const CheckboxGroup = Checkbox.Group

export default class MessageForm extends Component {
  constructor (props) {
    super(props)
    this.state = { ...this.state }
    this._send = this.send.bind(this)
    this._onKeyPress = this.onKeyPress.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  send() {
    try {
      var name = this.state.name || ""
      var email = this.state.email || ""

      if (this.props.account) {
        name = this.props.account.user.name
        email = this.props.account.user.email
      }

      if (!name) {
        throw new Error("Make sure you enter your name")
      }

      if (!email) {
        throw new Error("Make sure you enter your email")
      }

      if (!isEmail(email)) {
        throw new Error("Make sure you enter a valid email address")
      }

      if (!this.state.messageTitle) {
        throw new Error(this.props.conversation.title)
      }

      if (!this.state.messageText) {
        throw new Error(this.props.conversation.text)
      }

      var fields
      if (this.props.conversation.extra) {
        fields = {}
        Object.keys(this.props.conversation.extra).map((extra) => {
          if (!this.state[extra] && !this.props.conversation.extra[extra].optional) {
            throw new Error(this.props.conversation.extra[extra].title)
          }
          if (this.state[extra] && this.props.conversation.extra[extra].type === 'Link' && !isUrl(this.state[extra])) {
            throw new Error("Please enter a valid website address")
          }
          const value = Array.isArray(this.state[extra]) ? this.state[extra].join(", ") : this.state[extra]
          fields[this.props.conversation.extra[extra].title] = value
        })
      }

      this.setState({ messageSent: true })

      this.props.onSend && this.props.onSend(Object.assign({}, {
        name,
        email,
        type: `${this.props.conversation.type}`,
        title: this.state.messageTitle,
        text: this.state.messageText
      }, fields && { fields }))
    } catch (error) {
      notification.info({
        message: "Help us out here :)",
        description: error.message
      })
    }
  }

  onKeyPress (event) {
    if (event.key === 'Enter') {
      this.send()
    }
  }

  renderMessageTitle() {
    if (this.state.messageSent) {
      return <div/>
    }

    return <Typography use='headline4' tag='div' style={{ textAlign: "center", margin: "10px", color: "#00bcd4" }}>
     <Icon type={this.props.conversation.icon} style={{ marginRight: "10px" }}/>
     {this.props.conversation.header}
    </Typography>
  }

  renderContactFields() {
    if (this.props.account || this.state.messageSent) {
      return <div/>
    }

    return <div style={{
              display: 'flex',
              flex: 1,
              flexDirection: this.props.compact ? 'column' : "row"
            }}>
               <Input
                 allowClear
                 prefix={<Icon type='user' style={{ color: '#78909C' }} />}
                 style={{ display: "flex", flex: 1, marginBottom: "10px"  }}
                 value={this.state.name}
                 onChange={val => this.setState({ name: val.target.value, error: '' })}
                 placeholder={"So what's your name? :)"} />
                <Input
                  allowClear
                  prefix={<Icon type='mail' style={{ color: '#78909C'}} />}
                  style={{ display: "flex", flex: 1, marginBottom: "10px", marginLeft: this.props.compact ? "0px" : "10px"  }}
                  value={this.state.email}
                  onChange={val => this.setState({ email: val.target.value, error: '' })}
                  placeholder={`And your email?`} />
          </div>
  }

  renderExtraFields() {
    if (!this.props.conversation.extra) {
      return <div/>
    }

    var fields = []
    Object.keys(this.props.conversation.extra).map((extra) => {
      fields = fields.concat(this.renderExtraFieldSet(extra, this.props.conversation.extra[extra]))
    })

    return fields
  }

  renderLink({ id, value }) {
    return <Input
                style={{margin: "10px"}}
                addonBefore="Http://"
                onChange={val => this.setState({ [id]: val.target.value })}/>
  }

  renderRate({ id, value }) {
    const result = this.state[id] ? value[this.state[id]-1] : ''

    return <div>
            <Rate tooltips={value} ocharacter={<Icon type="heart" />}
                onChange={val => this.setState({ [id]: val, error: '' })}/>
                <Typography use='caption' tag='div' style={{ textAlign: "center", color: "#00bcd4"}}>
                  { result }
                </Typography>
        </div>
  }

  renderRange({ id, value }) {
    const result = this.state[id] ? `${this.state[id][0]} - ${this.state[id][1]}` : ''

    return <div style={{ padding: '4px', textAlign: 'center' }}>
      <Slider marks={value} range
        onChange={val => this.setState({ [id]: val, error: '' })}/>
      <Typography use='caption' tag='div' style={{ textAlign: "center", color: "#00bcd4"}}>
        { result }
      </Typography>
    </div>
  }

  renderMultipleChoice({ id, value }) {
    return <CheckboxGroup options={value} value={this.state[id]} onChange={(data) => this.setState({ [id]: data})} style={{ marginBottom: "10px" }}/>
  }

  renderExtraFieldSet(id, { title, value, type }) {
    var caller = this[`render${type}`]

    if (!caller) {
      return <div/>
    }

    var caller = caller.bind(this)

    return <div style={{
             display: 'flex',
             flex: 1,
             backgroundColor: "#FAFAFA",
             padding: "10px",
             marginBottom: "10px",
             flexDirection: "column"
           }}>
            <Typography use='body1' tag='div' style={{ color: '#37474F', marginBottom: "5px"  }}> { title } </Typography>
            { caller({ id, value }) }
          </div>
  }

  renderMessageFields() {
    if (this.state.messageSent) {
      return <Bounce>
                <Icon type='check-circle' style={{ color: "#00bcd4", fontSize: "50px" }} />
            </Bounce>
    }

    return <div style={{
           display: 'flex',
           flex: 1,
           flexDirection: "column"
         }}>
           <Input
           style={{ marginBottom: "10px"  }}
             allowClear
             value={this.state.messageTitle}
             onChange={val => this.setState({ messageTitle: val.target.value, error: '' })}
             placeholder={this.props.conversation.title} />
           <TextArea
           rows={4}
           style={{ marginBottom: "10px"  }}
             value={this.state.messageText}
             onChange={val => this.setState({ messageText: val.target.value, error: '' })}
             placeholder={this.props.conversation.text} />
           { this.renderExtraFields() }
           { this.renderContactFields() }
           <Button
             raised
             theme='secondary-bg text-primary-on-secondary'
             style={{ height: "48px", margin: "0px", marginTop: "20px" }}
             onClick={this._send}>
             <ButtonIcon icon="chat"/>
             Send Now
           </Button>
     </div>
  }

  renderMessageFooter() {
    if (!this.state.messageSent) {
      return <div/>
    }

    return <Typography use='caption' tag='div' style={{ textAlign: "center" }}>
      We'll get back to you asap and we'll continue the conversation :)
    </Typography>
  }

  renderActionContent (width, padding) {
    return <Fade>
        { this.renderMessageTitle() }
        <Card style={{ width, margin: '20px', padding }}>
         <div style={{ padding: '4px', textAlign: 'center', margin: '10px' }}>
          { this.renderMessageFields() }
         </div>
         {this.renderMessageFooter()}
      </Card>
      <Typography use='caption' tag='div' style={{ textAlign: "center" }}>
        <Icon type="heart"/> You're awesome :)
      </Typography>
    </Fade>
  }

  get containerStyle () {
    const margin = this.props.compact ? '0' : '40px'

    return {
      display: 'flex',
      flex: 1,
      margin,
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }

  render () {
    const width = this.props.compact ? '95vw' : '700px'
    const padding = this.props.compact ? '10px' : '30px'

    return <div
        style={this.containerStyle}>
        {this.renderActionContent(width, padding)}
      </div>
  }
}
