import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { TabBar, Tab } from '@rmwc/tabs'
import { Typography } from '@rmwc/typography'
import { Button, Icon } from 'antd'

const OSVersions = {
  "MacIntel": "Mac",
  "Win32": "Windows",
  "Linux": "Linux"
}
const StudioVersions = {
  "Mac": "http://files.carmel.io/studio/Carmel-Beta01.dmg",
  "Windows": "http://files.carmel.io/studio/Carmel.7z",
  "Linux": "http://files.carmel.io/studio/Carmel.7z"
}

export default class MainPersonScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  renderScreenshots () {
  }

  get cover () {
    let platform = 'MacIntel'
    if (window && window.navigator) {
      platform = window.navigator.platform.split(' ')[0]
    }

    return Object.assign({}, this.props.cover, {
      primaryActionTitle: `Download the studio for ${OSVersions[platform]}`,
      link: StudioVersions[platform]
    })
  }

  changeOs (evt) {
    this.setState({ 'activeTabIndex': evt.detail.index })
  }

  download (os) {
    const account = this.isLoggedIn ? 'member' : 'guest'

    window.open(StudioVersions[os], '_blank')

    this.triggerAnalyticsEvent({
      category: `Download ${os} ` + this.constructor.name,
      action: '' + this.props.location.pathname,
      label: account
    })
  }

  renderStudioVersions () {
    return <div style={{ display: 'flex', alignItems: 'space-between', padding: 40,  justifyContent: 'center', flexWrap: 'wrap' }}>
      {Object.keys(OSVersions).map(key => {
        const os = OSVersions[key]
        let action = os == 'Linux'? () => { } : this.download.bind(this, os)
        let text = os
        let color = os == 'Linux'? '#546e7a' : '#00bfa5'

        return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 50px'}}>
          <img src={`assets/${String(os).toLowerCase()}.svg`} style={{ width: 200, height: 200, paddingBottom: 20, fill: 'red' }} /> 
          <Button
            style={{
              textAlign: 'center',
              display: 'flex',
              color: '#ffffff',
              fontSize: 22,
              backgroundColor: color,
              border: 'none',
              margin: '10px auto 0',
              height: '70px',
              width: '200px',
              lineHeight: '20px'
            }}
            onClick={action}
          >
            <div style={{display: 'flex', flex: 1, justifyContent: 'center'}}>
              <Icon type="download" style={{marginRight: 10}}/>
              {text}
            </div> 
          </Button>
          {/* <Button style={{ marginBottom: 15, width: 300 }} key={os} onClick={action}>{text}</Button> */}
        </div>
      })}
    </div>
  }

  get features () {
    return [this.renderStudioVersions()]
  }

  components () {
    return super.components().concat(this.features)
  }
}
