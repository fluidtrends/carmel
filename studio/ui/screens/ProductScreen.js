import React, { Component } from "react"
import ListScreen from './ListScreen'
import { Layout, Select, notification, Typography, Alert, Menu, Icon } from 'antd'
import logo from '../../assets/logo.gif'
import carmelLogo from '../../assets/carmel-logo-white.png'
import Loading from '../components/Loading'
import BaseScreen from "./BaseScreen"
import * as Sections from '../components/sections'
import { Button } from "antd/lib/radio"

const { Option } = Select
const { Text } = Typography
const { Header, Footer, Sider, Content } = Layout

class ProductScreen extends BaseScreen {
    constructor() {
        super()

        this.state = {}
        this._onSectionSelected = this.onSectionSelected.bind(this)
        this._onStartWebPreview = this.onStartWebPreview.bind(this)
        this._onChallenge = this.onChallenge.bind(this)
        this._onChallengeEvent = this.onChallengeEvent.bind(this)
     }

    renderError() {
      if (!this.state.error) {
        return <div/>
      }

      return <Alert 
                banner
                showIcon
                message={this.state.error} 
                type="error" 
                style={{marginBottom: "10px"}} />
    }

    get backConfirmation() {
      return 'Are you sure?'
    }

    get title() {
      return this.props.product.name 
    }

    onStartWebPreview() {
      if (!this.state.startedWeb) {
        this.setState({ ready: false, loadingMessage: "Starting up, almost there ..."})
        this.props.session.startWebPackager({
          productId: this.props.product.id
        })
        return
      }

      this.props.session.startWebPreview({
        productId: this.props.product.id, 
        port: this.state.previewWebPort
      })
    }

    startChallenge(challenge) {
      this.props.session.startChallenge({
        productId: this.props.product.id, 
        challengeId: challenge.id
      })
    }

    onChallengeEvent(challenge, challengeState) {
      switch(challengeState) {
        case "started":
          if (!this.isLoggedIn) {
            this.showModal('login', {  productId: this.props.product.id })
            this.setState({ challenge, challengeState: "authenticating", taskIndex: 0 })
          } else {
            this.startChallenge(challenge)
          }
          break
        default: 
          this.setState({ challenge, challengeState })
          break
      }
    }

    load() {    
      if (this.props.session.data.journey && this.props.session.data.journey.challenge) {
        const section = this.props.sections.find(i => i.id === 'challenge')
        this.setState({ section, ready: this.props.product.hasDependencies })
        return 
      }

      if (this.props.product.hasDependencies) {
        this.setState({ ready: true })
        return 
      }

      this.setState({ ready: false, loadingMessage: "Initializing, just a minute ..."})
      this.props.session.initProduct({
        productId: this.props.product.id
      })
    }

    onUpdatedSession() {
      const session = this.props.session.data

      console.log(session.event)
      if (session.event.eventId === 'installDeps' && !session.event.installing && session.event.installed) {
        this.setState({ ready: true })
        return 
       }

       if (session.event.eventId === 'startWeb') {
         this.props.session.startWebPreview({
           productId: this.props.product.id, 
           port: session.event.port
         })
         this.setState({ ready: true, startedWeb: true, previewWebPort: session.event.port })
         return
        }

        if (session.event.eventId === 'termination') {
          this.props.screenTransition && this.props.screenTransition('products')
          return
        }

        if (session.event.eventId === 'listings') {
          if (session.event.challenge && session.journey.challenge) {
            this.setState({ 
              listings: session.event, 
              alert: false,
              taskTutorial: session.event.challenge.taskTutorial,
              challenge: session.event.challenge, 
              challengeState: "started", 
              taskIndex: session.journey.challenge.taskIndex 
            })
            return 
          }
          this.setState({ listings: session.event })
          return
        }

        if (session.event.eventId === 'login' && 
            !session.event.error && 
            this.state.challenge && 
            this.state.challengeState === 'authenticating') {
              this.startChallenge(this.state.challenge)
              return
        }

        if (session.event.eventId === 'challengeStarted' || session.event.eventId === 'taskStarted') {
          this.setState({ 
            challengeState: "started", 
            taskValidationError: false,
            alert: false,
            taskValidationSuccess: false, 
            taskTutorial: session.event.taskTutorial,
            challenge: Object.assign({}, session.event.challenge),
            taskIndex: (session.challenge ? session.challenge.taskIndex : 0)
          })
          return
        }

        if (session.event.eventId === 'challengePaused') {
          this.setState({ 
            challengeState: "paused"
          })
          return
        }

        if (session.event.eventId === 'taskValidated') {
          this.setState(Object.assign({}, { 
            challengeState: "started", 
            alert: { type: "success", message: "Great work!", description: "Keep going, you're doing amazing!" },
            taskValidationError: session.event.error,
            taskValidationSuccess: !session.event.error,
            challenge: session.event.challenge,
          }))
          return
        }

        if (session.event.eventId === 'challengeCompleted') {
          this.setState(Object.assign({}, { 
            alert: { type: "success", message: "Amazing!", description: "You just collected new skills!" },
            challengeState: "completed", 
            challenge: session.event.challenge,
          }))
          return
        }
    }

    renderMenu() {
      return <Menu onSelect={this._onSectionSelected} theme="dark"
        selectedKeys={[this.state.section ? this.state.section.id : this.props.sections[0].id]}
        defaultSelectedKeys={[this.props.sections[0].id]}>
        { this.props.sections.map(item => this.renderMenuItem(item)) }      
      </Menu>
    }

    get section() {
      return this.state.section || this.props.sections[0]
    }
 
    onSectionSelected(item) {
      const section = this.props.sections.find(i => i.id === item.key)
      this.setState({ section })
    }

    onChallenge() { 
      const section = this.props.sections.find(i => i.id === 'challenge')
      this.setState({ section })
    }

    renderMenuItem(item) {
      if (item.skipMenu) {
        return <div key="skip"/>
      }

      return <Menu.Item key={item.id}>
        <Icon key="icon" type={item.icon} />
        <span key="title">{ item.name }</span>
      </Menu.Item>
    }

    renderAlert() {
      if (!this.state.alert) {
        return <div/>
      }

      return notification[this.state.alert.type]({
        message: this.state.alert.message,
        description: this.state.alert.description
      })
    }

    renderSectionContent() {
      const section = this.section
      const Section = Sections[section.id]

      return <div style={{ width: "100%" }}>
          <Text key="name" strong style={{ 
            fontSize: "18px", 
            margin: "0px 20px 10px 5px", 
            flex: 1, 
            color: "#00BCD4",
            display: "flex",
            justifyContent: "flex-start"
        }}>  { section.name } </Text>
          <Section key="section" {...section} 
            listings={this.state.listings}
            challenge={this.state.challenge}
            challengeState={this.state.challengeState}
            challengeStatus={this.props.challengeStatus}
            session={this.props.session}
            taskValidationError={this.state.taskValidationError}
            taskValidationSuccess={this.state.taskValidationSuccess}
            taskTutorial={this.state.taskTutorial}
            taskIndex={this.state.taskIndex}
            onChallengeEvent={this._onChallengeEvent}
            onStartWebPreview={this._onStartWebPreview}
            product={this.props.product} />
          { this.renderAlert() }
          </div>
    }

    renderChallengeButton() {
      if (this.section.skipMenu) {
        return <div/>
      }

      let title = this.props.challengeStatus ? 'Continue the Challenge' : (!this.state.challengeState ? 'Up for a new Challenge?' : 'Ready to start the Challenge?')

      return <div key="action" style={{
        width: "100%", 
        padding: "10px",
        backgroundColor: "#00bcd4"
      }}>
          <Button
              onClick={this._onChallenge}
              style={{
                backgroundColor: "#00bcd4",
                color: "#ffffff",
                textAlign: "center",
                border: "none",
                width: "100%"
              }}>
             { title }
          </Button>
      </div>      
    }

    renderLogin() {
      return <LoginForm/>
    }

    renderContent () {
      if (this.state.showLogin) {
        return this.renderLogin() 
      }

      return <Layout style={{ width: "100%"}}>
        <Sider collapsed={true} key="menu"> 
          { this.renderMenu() }
        </Sider>
        <Layout key="main" style={{ backgroundColor: "#F5F5F5" }}>
          <Layout key="layout" style={{
            height: "100%",
            overflow: "scroll",
            backgroundColor: "#F5F5F5"
          }}>
              <div style={{ 
                  margin: '0px',
                  padding: '10px',
                  display: "flex",
                  flex: 1,
                  backgroundColor: "#F5F5F5" 
                }}>
                { this.renderSectionContent() }
              </div>
          </Layout>
          { this.renderChallengeButton() }
        </Layout>
      </Layout>
    }
}

export default ProductScreen