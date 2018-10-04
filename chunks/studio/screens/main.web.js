import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import Platform from 'platform'
import { Typography } from 'rmwc/Typography'

const OSVersions = ['MacOS', 'Windows', 'Linux']
import { Button } from 'rmwc/Button'
import { TabBar, Tab } from 'rmwc/Tabs';

export default class MainStudioScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = { ...this.state, activeTabIndex: 0 }
  }

  changeOs(evt) {
    this.setState({ 'activeTabIndex': evt.detail.index })
  }

  componentDidMount() {
    super.componentDidMount()
  }

  download(os) {
    const account = this.isLoggedIn ? 'member' : 'guest'
    window.open(`http://files.carmel.io/studio/carmel.dmg`, '_blank')
    this.triggerAnalyticsEvent({
      category: `Download ${os} ` + this.constructor.name,
      action: '' + this.props.location.pathname,
      label: account
    });
  }

  renderStudioVersions() {
    const versions = Object.keys(OSVersions).map(key => {
      const os = OSVersions[key]
      let action = () => { }
      let text = 'Coming Soon'
      if (os == 'MacOS') {
        action = this.download.bind(this, os)
        text = `Download Studio for ${os} `
      }
      return <Button style={{ marginBottom: 15, width: 300 }} key={os} onClick={action}>{text}</Button>
    })

    return <div style={{ padding: '4rem 5rem', textAlign: 'center' }}>
      <Typography use="display1" tag="h1">
        Download the Carmel Studio for other platforms
        </Typography>
      <TabBar
        activeTabIndex={this.state.activeTabIndex}
        onActivated={this.changeOs.bind(this)}
      >
        <Tab>MacOs</Tab>
        <Tab>Windows</Tab>
        <Tab>Linux</Tab>
      </TabBar>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 20 }}>
        {versions[this.state.activeTabIndex]}
      </div>
    </div>
  }

  handleSystemEvent(event) {
    if (event === '/download') {
      this.download('mac')
    }
  }

  get features() {
    return [this.renderStudioVersions()]
  }

  components() {
    return super.components().concat(this.features)
  }
}
