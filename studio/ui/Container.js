import React, { Component } from "react"
import { Button } from 'antd'
import Bounce from 'react-reveal/Bounce'
import { Offline, Online } from "react-detect-offline"
import { Spring } from 'react-spring/renderprops'
import Session from './Session'
import config from '../config.json'
import Loading from './components/Loading'
import * as Screens from './screens/index'
import Fade from 'react-reveal/Fade'

const MAX_HEIGHT = 600

class Container extends Component {

  constructor() {
    super()

    this.state = {}
    this._session = new Session(this)
    this._screenTransition = this.screenTransition.bind(this)
    this._hideModal = this.hideModal.bind(this)
    this._showModal = this.showModal.bind(this)
    this._onModalHidingDone = this.onModalHidingDone.bind(this)
    this._onUpdatedSession = this.onUpdatedSession.bind(this)
  }

  componentDidMount() {
    this._session.start().then(() => {
      this.setState({ screenId: 'start' })
    })
  }

  componentWillUnmount() {
    this._session.stop()
  }

  get session() {
    return this._session
  }

  onUpdatedSession() {
    this.setState({ timestamp: this.session.timestamp })
  }

  screenTransition(screenId, screenProps) {
    this.setState({ screenId, screenProps })
  }

  hideModal() {
    this.setState({ modalHiding: true })
  }

  showModal(modalScreenId, modalScreenProps) {
    this.setState({ modalScreenId, modalScreenProps, showModal: true })
  }

  onModalHidingDone() {
    this.setState({ modalHiding: false, showModal: false })
  }

  renderModalScreen() {
    if (!this.state.showModal) {
      return <div/>
    }
  
    if (this.state.modalHiding) {
    return <Spring 
                onRest={this._onModalHidingDone}
                from={{ top: 0 }} 
                to={{ top: MAX_HEIGHT }}>
          { props => this.renderModalScreenContent(props) }
      </Spring>
    }
    return <Bounce bottom>
      { this.renderModalScreenContent({ top: 0 })}
    </Bounce>
  }

  renderModalScreenContent(props) {
    const Screen = Screens[this.state.modalScreenId]
    const screenProps = Object.assign({}, 
                  this.state.modalScreenProps,
                  { screenId: this.state.modalScreenId }, 
                  { session: this.session },
                  { timestamp: this.state.timestamp },
                  config.screens.find(s => s.id === this.state.modalScreenId))

    return <div style={Object.assign({}, {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        display: "flex",
        position: "absolute",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.9)"          
      }, props)}>
        <div style={{
          width: "100%",
          flexDirection: "row",
          flex: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          padding: "20px"
        }}> 
          <Button onClick={this._hideModal} 
            icon="close" size="large"
            style={{
              border: "1px solid #ffffff",
              color: "#333333"
            }}/>
        </div>
        <Screen  
          modal
          config={config}
          onClose={this._hideModal}
          { ...screenProps }/>
      </div>
  }

  renderScreen() {
    const Screen = Screens[this.state.screenId]
    const props = Object.assign({}, 
                  this.state.screenProps,
                  { screenId: this.state.screenId }, 
                  { session: this.session },
                  { timestamp: this.state.timestamp },
                  config.screens.find(s => s.id === this.state.screenId))

    return <div style={{ height: "100%" }}>
        <Offline>
          <Loading message="Looking for Internet connection ..."/>
        </Offline>
        <Online>
          <Screen
          config={config}
          screenTransition={this._screenTransition}
          showModal={this._showModal}
          { ...props }/>
          { this.renderModalScreen()}
        </Online>
      </div>
  }

  render() {
    if (!this.state.screenId) {
      return <Fade>
          <Loading/>
        </Fade>
    }

    return <Fade>
      { this.renderScreen() }
      </Fade>
  }
}

export default Container