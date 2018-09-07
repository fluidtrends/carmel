import React from 'react'
import Screen from './account.web'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Typography } from 'rmwc/Typography'
import { Data } from 'react-chunky'

export default class AccountScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...super.state, inProgress: false }
    this._back = this.back.bind(this)
  }

  back () {
    this.triggerRedirect('/workspace')
  }

  componentDidMount () {
    super.componentDidMount()
    this.checkPendingPurchase()
  }

  checkPendingPurchase () {
    this.setState({ inProgress: true })
    Data.Cache.retrieveCachedItem('pendingPurchase')
              .then((pendingPurchase) => {
                this.setState({ inProgress: false })
                this.triggerRedirect('/wallet')
              })
              .catch(error => {
                this.setState({ inProgress: false })
              })
  }

  renderActiveContent () {
    return super.renderActiveContent()
  }

  get formWidth () {
    return '600px'
  }

  get formPadding () {
    return '30px'
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

  renderMainContentFooter () {
    return <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center'
    }}>
      <Button onClick={this._back}>
        <ButtonIcon use={'arrow_back'} />
        Back to Workspace
      </Button>
    </div>
  }

}
