import React from 'react'
import ReactDOM from 'react-dom'
import { Screen } from 'react-dom-chunky'
import { webview } from 'electron'
import { Parallax } from 'react-spring'
import Welcome from '../components/welcome'
import Info from '../components/info'
import NewProduct from '../../studio/components/newProduct'
import Shell from '../../studio/components/shell'

export default class Main extends Screen {
  constructor (props) {
    super(props)

    this.state = {}
    this._shell = new Shell()
    this._onStart = this.onStart.bind(this)
    this._onContinue = this.onContinue.bind(this)
    this._onCreate = this.onCreate.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()

    if (this.props.session.product) {
      this.shell.analytics('newSession', 'firstTime')
      this.triggerRedirect('/workspace')
    } else {
      this.shell.analytics('newSession', 'returning')
    }
  }

  get shell () {
    return this._shell
  }

  onStart () {
    this.scroller.scrollTo(1)
  }

  onContinue () {
    this.scroller.scrollTo(2)
  }

  onCreate (product) {
    this.shell.analytics('newProduct', 'firstTime')
    this.triggerRedirect('/workspace')
  }

  renderIntro () {
    return <Parallax
      ref={ref => (this.scroller = ref)}
      scrolling={!this.state.creatingProduct}
      pages={3}
      style={{
        backgroundColor: '#00bcd4'
      }}>
      <Welcome
        session={this.props.session}
        offset={0}
        onStart={this._onStart} />
      <Info
        session={this.props.session}
        offset={1}
        onContinue={this._onContinue} />
      <NewProduct
        session={this.props.session}
        offset={2}
        onCreate={this._onCreate} />
    </Parallax>
  }

  renderScreenLayout () {
    return <div style={{
      backgroundColor: '#ffff00',
      display: 'flex',
      flex: 1,
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {this.renderIntro()}
    </div>
  }
}
