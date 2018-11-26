import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Typography } from '@rmwc/typography'
import Credits from '../components/credits'

export default class CreditsScreen extends Screen {
  constructor (props) {
    super(props)
  }

  renderMainContent() {
      return (<div
        style={{
          display: 'flex',
          flex: 1,
          padding: "10px",
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <Credits compact={this.isSmallScreen}/>
      </div>)
  }

  components () {
    return [this.renderMainContent()]
  }
}
