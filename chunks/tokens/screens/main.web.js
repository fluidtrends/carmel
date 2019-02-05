import React from 'react'
import { Screen } from 'react-dom-chunky'
import Distribution from '../components/distribution'

export default class TokensScreen extends Screen {
  constructor (props) {
    super(props)

    this.state = { ...this.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  renderMainContent() {
    return <div style={{textAlign: 'center'}}> 
      <Distribution isSmallScreen={this.isSmallScreen} />
    </div>
  }

  components () {
    return [this.renderMainContent()]
  }
}
