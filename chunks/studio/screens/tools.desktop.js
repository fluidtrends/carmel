import React from 'react'
import { Screen } from 'react-dom-chunky'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Button } from 'rmwc/Button'
import { List, notification } from 'antd'
import { Toolbox } from '../components/index.desktop'

import UserInfo from '../../auth/components/userInfo'

export default class ToolsScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  renderTools () {
    // return <Toolbox
              // toolboxUrl={this.props.toolboxUrl}
              // importRemoteData={this.importRemoteData} />
  }

  renderMainContent () {
    const width = this.props.isSmallScreen ? '95vw' : '600px'
    const padding = this.props.isSmallScreen ? '2px' : '30px'

    return (<div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <Card style={{ width, margin: '10px', padding }} >
      Tools
      </Card>
    </div>)
  }

  components () {
    return [this.renderMainContent()]
  }
}
