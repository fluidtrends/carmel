import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Button, ButtonIcon } from 'rmwc/Button'
import { List, Tabs, notification, Icon } from 'antd'
import UserInfo from '../../auth/components/userInfo'
import { Data } from 'react-chunky'
import { ListDivider } from 'rmwc/List'
import { Typography } from 'rmwc/Typography'
const TabPane = Tabs.TabPane

export default class MainBountiesScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state, inProgress: false }
    this._back = this.back.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  back () {
    this.triggerRedirect('/workspace')
  }

  renderMainContentFooter () {
    return <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      margin: '20px',
      alignItems: 'center'
    }}>
      <Button onClick={this._back} style={{
        color: '#81D4FA',
        backgroundColor: '#ECEFF1'
      }}>
        <Icon type={'arrow-left'} style={{ marginRight: '5px' }} />
        { 'Back to Workspace' }
      </Button>
    </div>
  }

  get containerStyle () {
    return {
      display: 'flex',
      flex: 1,
      height: '100vh',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }

  get formWidth () {
    return '600px'
  }

  get formPadding () {
    return '30px'
  }

  renderActiveContent () {
    return <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      justifyContent: 'center'
    }}>
      <Typography use='body1' style={{
        textAlign: 'center',
        color: '#78909C'
      }}>
      No bounties yet. Coming soon.
    </Typography>
    </div>
  }

  renderMainHeader () {
    return <Typography
      use='headline'
      tag='h1'
      style={{
        display: 'flex',
        color: '#00bcd4',
        flex: 1,
        marginBottom: '20px',
        justifyContent: 'flex-start'
      }}>
      <Icon style={{ margin: '5px 10px 0px 0px' }} type='trophy' theme='filled' />
      Carmel Bounties
    </Typography>
  }

  renderMainContent () {
    const width = this.formWidth
    const padding = this.formPadding

    if (this.state.inProgress) {
      return (<div style={this.containerStyle}>
        <Card style={{ width, margin: '10px', padding }}>
          <Components.Loading message='Just a minute, please ...' />
        </Card>
      </div>)
    }

    return (<div style={this.containerStyle}>
      <Card style={{ width, margin: '10px', padding }}>
        { this.renderMainHeader() }
        <ListDivider />
        { this.renderActiveContent() }
      </Card>
      { this.renderMainContentFooter() }
    </div>)
  }

  components () {
    return [this.renderMainContent()]
  }
}
