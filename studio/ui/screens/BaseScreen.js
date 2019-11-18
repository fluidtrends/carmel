import React, { Component } from "react"
import Loading from '../components/Loading'
import { Avatar, Button, Popconfirm, Typography } from 'antd'

const { Text } = Typography

class BaseScreen extends Component {

  constructor() {
    super()

    this.state = {}
    this._onBack = this.onBack.bind(this)
    this._onSettings = this.onSettings.bind(this)
    this._onMenuAction = this.onMenuAction.bind(this)
  }

  load() {
    this.setState({ ready: true })
  }

  componentDidMount() {
    this.load()
  }

  onBack() {
    
  }

  onSettings() {
    this.showModal("settings")
  }

  onMenuAction() {
    
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.timestamp === this.props.timestamp) {
      return
    }

    this.onUpdatedSession && this.onUpdatedSession()
  }

  renderContent() {
    return <div/>
  }

  get title() {
    return this.props.title
  }

  renderLeftButton() {
    if (this.props.disableBack && !this.props.action) {
      return <div style={{
        width: "20px"
      }}/>
    }

    if (this.props.action) {
      return <Button 
        icon={this.props.action.icon}
        onClick={this._onMenuAction}
        size='large'
        shape="circle" style={{
          border: "1px solid #ffffff",
          color: "#333333"
      }}/>
    }

    if (!this.backConfirmation) {
      return <Button 
        icon="arrow-left" 
        onClick={this._onBack}
        size='large'
        shape="circle" style={{
          border: "1px solid #ffffff",
          color: "#333333"
      }}/>
    }

    return <Popconfirm
      placement="topRight"
      title={this.backConfirmation}
      onConfirm={this._onBack}
      okText="Yes"
      cancelText="No">
        <Button 
          icon="arrow-left" 
          onClick={() => {}}
          size='large'
          shape="circle" style={{
            border: "1px solid #ffffff",
            color: "#333333"
        }}/>
      </Popconfirm>
  }

  get isLoggedIn() {
    return this.props.session.data.account
  }

  renderRightButton(force) {
    if (this.props.disableSettings) {
      return <div style={{
        width: "20px"
      }}/>
    }

    if (!this.isLoggedIn) {
      return <Button 
          onClick={this._onSettings}
          size='large'
          icon="user"
          shape="circle" style={{
            border: "1px solid #ffffff",
            color: "#333333"
        }}/>
    }

    return <Button 
          onClick={this._onSettings}
          size='large'
          shape="circle" style={{
            border: "1px solid #ffffff",
            color: "#333333"
        }}>
            <Avatar src={this.props.session.data.account.pic} />
      </Button>
  }

  close() {
    this.props.onClose && this.props.onClose()
  }

  renderHeader() {
    if (this.props.modal) {
      return <div/>
    }

    return  <div style={{ 
      display: "flex",
      height: "80px",
      width: "100%",
      padding: "10px",
      boxShadow: "0px 1px 3px #B0BEC5",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: this.tabs ? "0px" : "3px",
      backgroundColor: "#ffffff",
      flexDirection: "row"
    }}>
      <div style={{
        paddingLeft: "5px"
      }}>
         { this.renderLeftButton() }
      </div> 
      <div style={{ flex: 1, textAlign: "center" }}>
        <Text style={{ color: "#333333", fontSize: "18px" }}> { this.title } </Text>
      </div>
      <div style={{
        paddingRight: "5px"
      }}>
        { this.renderRightButton() }     
      </div> 
    </div>
  }

  showModal(screen, data) {
    this.props.showModal && this.props.showModal(screen, data)
  }

  goTo(screen, data) {
    this.props.screenTransition && this.props.screenTransition(screen, data)
  }

  get loadingMessage() {
    return this.state.loadingMessage || "Just a sec please, I'm thinking 🤔..."
  }

  render() {
    if (!this.state.ready) {
      return <Loading message={this.loadingMessage}/>
    }

    return <div style={{ 
         height: "100%",
         display: "flex",
         flexDirection: "column",
         backgroundColor: this.props.modal ? 'rgba(0,0,0,0)' : "#F5F5F5" 
      }}>
      <div style={{
      }}>
        { this.renderHeader() }
      </div>
      <div style={{ 
        flex: 1,
        flexDirection: "column",
        display: "flex",
        width: "100%",
        alignItems: "center",
        overflow: "auto"
      }}>
        { this.renderContent() }  
      </div>
    </div>
  }
}

export default BaseScreen