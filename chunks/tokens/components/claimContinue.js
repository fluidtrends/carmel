import React from "react"
import { Component, Components } from "react-dom-chunky"
import { Typography } from "rmwc/Typography"
import { Card } from "rmwc/Card"
import { Button } from "rmwc/Button"
import { List, Icon, Input, notification, Steps } from "antd"
import Steemit from './steemit'
import Telegram from './telegram'

const Step = Steps.Step

export default class ClaimContinue extends Component {
  constructor(props) {
    super(props)
    this.state = { ...super.state, loading: false, step: 1 }
    this._renderItem = this.renderItem.bind(this)
    this._onItemEdit = item => this.onItemEdit.bind(this, item)
    this._next = this.next.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()
  }

  onItemEdit(item) {
    const value = this.state[item.id] === null ? null : (this.state[item.id] || this.props.account[item.id])
    if (!value) {
      notification.error({
        message: "Missing username",
        description: `${"Add your username before moving on to the next step"}`
      })
      return
    }

    this.props.onClaimAction &&
      this.props.onClaimAction(item, { [item.id]: value })
  }

  next() {
    this.props.onContinue && this.props.onContinue()
  }

  renderItemActions(item) {
    return [
      <Button
        style={{ marginTop: "-12px" }}
        theme="secondary-bg on-secondary"
        raised
        onClick={this._onItemEdit(item)}
      >
        {item.action}
      </Button>
    ]
  }

  renderItem(item) {
    return this.state[item.id] === undefined ? <div /> : (
      <List.Item actions={this.renderItemActions(item)}>
        <div style={{ width: "100%", marginTop: "20px" }}>
          <List.Item.Meta
            title={
              <Input
                style={{ height: "48px" }}
                value={
                  this.state[item.id] === null
                    ? ""
                    : this.state[item.id] || this.props.account[item.id]
                }
                onChange={val =>
                  this.setState({
                    [item.id]: val.target.value == "" ? null : val.target.value,
                    error: ""
                  })
                }
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder={item.placeholder}
              />
            }
          />
          <Typography
            use="caption"
            tag="h2"
            style={{ textAlign: "left", paddingLeft: "10px", color: "#03A9F4" }}
          >
            {item.details}
          </Typography>
        </div>
      </List.Item>
    )
  }

  renderIcons() {
    const socialNetworks = [
      "telegram",
      "twitter",
      "youtube",
      "facebook",
      "github",
      "medium",
      "linkedin",
      "instagram"
    ]

    const margin = this.props.isSmallScreen ? '0 0 5px 0' : '0 95px 35px 0'
    const align = this.props.isSmallScreen ? 'center' : 'flex-end'
    const { social } = this.props

    let enabled, telegramEnabled = this.state['telegram'] !== undefined || this.props.account['telegram'], steemitEnabled = this.state['steemit'] !== undefined || this.props.account['steemit']

    return <div style={{ display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'flex-end', alignSelf: align, margin }}>
      {socialNetworks.map(key => {

        enabled = this.state[key] !== undefined || this.props.account[key]

        return <Icon key={key} type={key} onClick={() => this.setState({ [key]: this.state[key] === undefined ? '' : undefined })} style={{
          cursor: "pointer",
          fontSize: 36,
          padding: "10px",
          color: enabled ? '#00bcd4' : "#B0BEC5"
        }} />
      })}
      <div style={{ cursor: 'pointer' }} onClick={() => this.setState({ telegram: this.state['telegram'] === undefined ? '' : undefined })}>
        <Telegram fill={telegramEnabled ? '#00bcd4' : "#B0BEC5"} />
      </div>
      <div style={{ cursor: 'pointer', marginLeft: 5 }} onClick={() => this.setState({ steemit: this.state['steemit'] === undefined ? '' : undefined })}>
        <Steemit fill={steemitEnabled ? '#00bcd4' : "#B0BEC5"} />
      </div>
    </div>
  }

  renderItems() {
    return <div>
      {this.renderIcons()}
      <List
        style={{ marginTop: "20px" }}
        itemLayout="horizontal"
        dataSource={this.itemData}
        renderItem={this._renderItem}
      />
    </div>
  }

  renderError() {
    if (!this.state.error) {
      return <div />
    }

    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          marginTop: "10px",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Typography
          use="title"
          style={{ color: "#ef5350", padding: "10px" }}
          tag="h1"
        >
          {this.state.error}
        </Typography>
      </div>
    )
  }

  get itemData() {
    return [
      {
        id: "telegram",
        title: "Telegram",
        details: "Join our Telegram Channel and meet the rest of the community",
        placeholder: "@mytelegramusername",
        url: "https://t.me/carmelplatform",
        action: "Go"
      },
      {
        id: "twitter",
        title: "Twitter",
        details: "Follow us on Twitter to stay up to date with our progress",
        placeholder: "@mytwitterusername",
        url: "https://twitter.com/carmelplatform",
        action: "Go"
      },
      {
        id: "youtube",
        title: "YouTube",
        details: "Subscribe to our YouTube Channel and tune in to our Devlog",
        placeholder: "myemail@somemail.com",
        url: "https://www.youtube.com/channel/UCjiQXohOk0pBmJ6PFElQL-g",
        action: "Go"
      },
      {
        id: "facebook",
        title: "Facebook",
        details: "Like our Facebook Page and join the conversation",
        placeholder: "myfacebookusername",
        url: "https://www.facebook.com/carmelio-347131802460343/",
        action: "Go"
      },
      {
        id: "github",
        title: "5. Github",
        details: "Check our progress on Github and don't forget to star Carmel",
        placeholder: "@mygithubusername",
        url: "https://github.com/fluidtrends/carmel",
        action: "Go"
      },
      {
        id: "linkedin",
        title: "6. Linkedin",
        details: "Make sure you follow us on Linkedin",
        placeholder: "mylinkedinusername",
        url: "https://www.linkedin.com/company/carmel-platform/",
        action: "Go"
      },
      {
        id: "steemit",
        title: "7. Steemit",
        details: "Follow us on Steemit",
        placeholder: "@mysteemitusername",
        url: "https://steemit.com/@idancali",
        action: "Go"
      },
      {
        id: "instagram",
        title: "8. Instagram",
        details: "Tune in to our journey at Carmel on Instagram",
        placeholder: "myinstagramusername",
        url: "https://www.instagram.com/carmel.io/",
        action: "Go"
      },
      {
        id: "medium",
        title: "9. Medium",
        details: "Follow our Medium Publication and get to know our story",
        placeholder: "@mymediumusername",
        url: "http://medium.com/carmelplatform",
        action: "Go"
      }
    ]
  }

  renderContinue() {
    if (!this.props.isSocialMediaComplete) {
      return <div />
    }

    return (
      <Typography
        use="title"
        tag="h2"
        style={{ marginTop: "5px", marginBottom: "30px" }}
      >
        <Button onClick={this._next}> Continue </Button>
      </Typography>
    )
  }

  renderComponent() {
    const width = this.props.isSmallScreen ? "95vw" : "600px"
    const padding = this.props.isSmallScreen ? "2px" : "30px"

    if (this.state.loading) {
      return <Components.Loading message={this.state.loadingMessage} />
    }

    return (
      <Card style={{ width, margin: "10px", marginTop: "30px", padding, textAlign: 'center' }}>
        <Icon
          type="gift"
          style={{
            fontSize: "48px",
            color: "#607D8B",

            padding: "10px"
          }}
        />

        <Typography use="title" tag="h2">
          Claim Your FREE CARMEL Tokens
        </Typography>

        <Steps
          current={this.state.step}
          style={{ marginTop: "30px", marginBottom: "30px" }}
        >
          <Step title="Reservation" description="Reserve your tokens" />
          <Step title="Social Media" description="Join our community" />
          <Step title="Activation" description="Final validation" />
        </Steps>

        <Typography
          use="subheading2"
          tag="h2"
          style={{ marginTop: "30px", marginBottom: "5px" }}
        >
          Pick your top <b>5</b> favorite Social Media channels from the list below and
          join our growing online community
        </Typography>

        {this.renderError()}
        {this.renderItems()}
        {this.renderContinue()}
      </Card>
    )
  }
}
