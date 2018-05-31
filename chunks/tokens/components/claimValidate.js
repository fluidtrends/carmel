import React from "react"
import { Component, Components } from "react-dom-chunky"
import { Typography } from "rmwc/Typography"
import { Card, CardActionButtons, CardActions } from "rmwc/Card"
import { Button, ButtonIcon } from "rmwc/Button"
import { List, Icon, Form, Input, notification, Steps } from "antd"

const Step = Steps.Step

export default class ClaimComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { ...super.state, loading: false, step: 2 }
    this._renderItem = this.renderItem.bind(this)
    this._checkProgress = this.checkProgress.bind(this)
    this._goBack = this.goBack.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()
  }

  goBack() {
    this.props.onCancelValidation && this.props.onCancelValidation()
  }

  checkProgress() {
    this.props.redirect("https://github.com/fluidtrends/carmel/issues/169")
  }

  renderItemActions(item) {
    return [
      <Typography
        use="caption"
        tag="h2"
        style={{ textAlign: "left", paddingLeft: "10px", color: "#03A9F4" }}
      >
        {this.props.account[item.id]}
      </Typography>,
      <Typography
        use="caption"
        tag="h2"
        style={{ textAlign: "left", paddingLeft: "10px", color: "#FFA000" }}
      >
        {this.props.account[item.id] ? 'Validation Pending' : ''}
      </Typography>
    ]
  }

  renderItem(item) {
    return (
      <List.Item actions={this.renderItemActions(item)}>
        <div style={{ width: "100%", marginTop: "20px" }}>
          <List.Item.Meta title={item.title} description={item.details} />
        </div>
      </List.Item>
    )
  }

  renderItems() {
    return (
      <List
        style={{ marginTop: "20px" }}
        itemLayout="horizontal"
        dataSource={this.itemData}
        renderItem={this._renderItem}
      />
    )
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
        title: "1. Telegram",
        details: "Make sure you joined the Carmel Telegram channel.",
        placeholder: "Enter your Telegram username",
        url: "https://t.me/carmelplatform",
        action: "Go"
      },
      {
        id: "twitter",
        title: "2. Twitter",
        details: "Make sure you are following us on Twitter.",
        placeholder: "Enter your Twitter username",
        url: "https://twitter.com/carmelplatform",
        action: "Go"
      },
      {
        id: "youtube",
        title: "3. YouTube",
        details: "Make sure are subscribed to our YouTube channel.",
        placeholder: "Enter your YouTube username",
        url: "https://www.youtube.com/channel/UCjiQXohOk0pBmJ6PFElQL-g",
        action: "Go"
      },
      {
        id: "facebook",
        title: "4. Facebook",
        details: "Make sure you liked our Facebook page.",
        placeholder: "Enter your Facebook username",
        url: "https://www.facebook.com/carmelio-347131802460343/",
        action: "Go"
      },
      {
        id: "github",
        title: "5. Github",
        details:
          "Check our progress on Github and don't forget to star Carmel.",
        placeholder: "Enter your Github username",
        url: "https://github.com/fluidtrends/carmel",
        action: "Go"
      },
      {
        id: "linkedin",
        title: "6. Linkedin",
        details: "Make sure you follow us on Linkedin.",
        placeholder: "Enter your Linkedin username",
        url: "https://www.linkedin.com/company/carmel-platform/",
        action: "Go"
      },
      {
        id: "steemit",
        title: "7. Steemit",
        details: "Follow us on Steemit.",
        placeholder: "Enter your Steemit username",
        url: "https://steemit.com/@idancali",
        action: "Go"
      },
      {
        id: "instagram",
        title: "8. Instagram",
        details: "Tune in to our journey at Carmel on Instagram.",
        placeholder: "Enter your Instagram username",
        url: "https://www.instagram.com/carmel.io/",
        action: "Go"
      },
      {
        id: "reddit",
        title: "9. Reddit",
        details: "Share your thoughts about Carmel on reddit.",
        placeholder: "Enter your reddit username",
        url: "??????????????",
        action: "Go"
      },
      {
        id: "medium",
        title: "10. Medium",
        details: "Follow our Medium Publication and get to know our story.",
        placeholder: "Enter your Medium username",
        url: "http://medium.com/carmelplatform",
        action: "Go"
      }
    ]
  }

  renderComponent() {
    const width = this.props.isSmallScreen ? "95vw" : "600px"
    const padding = this.props.isSmallScreen ? "2px" : "30px"

    if (this.state.loading) {
      return <Components.Loading message={this.state.loadingMessage} />
    }

    return (
      <Card style={{ width, margin: "10px", marginTop: "30px", padding }}>
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
          use="title"
          tag="h2"
          style={{ marginTop: "30px", marginBottom: "5px" }}
        >
          The validation process is in progress
        </Typography>

        <Typography
          use="subheading2"
          tag="h2"
          style={{ marginTop: "30px", marginBottom: "5px" }}
        >
          Your tokens are reserved, not to worry, we just need a bit of time to
          finish up this feature. Please stay tuned.
        </Typography>

        <Typography
          use="title"
          tag="h2"
          style={{ marginTop: "5px", marginBottom: "30px" }}
        >
          <Button onClick={this._checkProgress}> Check the progress </Button>
        </Typography>

        {this.renderError()}
        {this.renderItems()}

        <Typography
          use="title"
          tag="h2"
          style={{ marginTop: "5px", marginBottom: "30px" }}
        >
          <Button onClick={this._goBack}> Go Back </Button>
        </Typography>
      </Card>
    )
  }
}
