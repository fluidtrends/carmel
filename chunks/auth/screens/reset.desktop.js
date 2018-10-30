import React from 'react'
import Screen from './reset.web'
import { Button, ButtonIcon } from 'rmwc/Button'

export default class ResetScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...super.state }
    this._back = this.back.bind(this)
  }

  back () {
    this.triggerRedirect('/workspace')
  }

  componentDidMount () {
    super.componentDidMount()
  }

  get formWidth () {
    return '600px'
  }

  get formPadding () {
    return '30px'
  }

  get containerStyle () {
    const margin = this.isSmallScreen ? '0' : '40px'
    return {
      display: 'flex',
      flex: 1,
      height: '100vh',
      margin,
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
      margin: '20px',
      alignItems: 'center'
    }}>
      <Button onClick={this._back}>
        <ButtonIcon icon={'arrow_back'} />
        Back to Workspace
      </Button>
    </div>
  }
}
