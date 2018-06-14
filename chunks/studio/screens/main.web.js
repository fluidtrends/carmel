import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import Platform from 'platform'
import { Typography } from 'rmwc/Typography'

const OSVersions = ['MacOS', 'Windows', 'Linux']
// const OSVersions = {
//   'Windows': 'Windows',
//   'MacOs': 'MacOs',
//   'Linux': 'Linux',
// }
import { Button } from 'rmwc/Button'
import { TabBar, Tab, TabIcon, TabIconText, TabBarScroller } from 'rmwc/Tabs';

export default class MainStudioScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = { ...this.state, activeTabIndex: 0 }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  get cover() {
    return Object.assign({}, this.props.cover, {
      title: `Download the #CarmelStudio`,
      primaryActionTitle: `Download Studio for ${Platform.os}`
    })
  }

  renderStudioVersions() {
    const versions = Object.keys(OSVersions).map(key => {
      const os = OSVersions[key]
      return <Button style={{marginBottom: 15, width: 300}} key={os}>Download Studio for {os} </Button>
    })
    return <div  style={{ padding: '4rem 5rem', textAlign: 'center' }}>
        <Typography use="display1" tag="h1">
          Download the Carmel Studio for other platforms
        </Typography>
        <TabBar
          activeTabIndex={this.state.activeTabIndex}
          onChange={evt => this.setState({'activeTabIndex': evt.target.value})}
        >
          <Tab>MacOs</Tab>
          <Tab>Windows</Tab>
          <Tab>Linux</Tab>
        </TabBar>

        <div style={{ display: 'flex', flexDirection: 'column',  alignItems: 'center', marginTop: 20 }}>
          {versions[this.state.activeTabIndex]}
        </div>
    </div>
  }

  get features() {
    return [this.renderStudioVersions()]
  }

  components() {
    return super.components().concat(this.features)
  }
}
