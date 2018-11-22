import React from 'react'
import { Screen } from 'react-dom-chunky'

export default class TeachersScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  renderMainContent() {
      return (<div
        style={{
          display: 'flex',
          flex: 1,
          padding: "20px",
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          
      </div>)
  }

  components () {
    return [this.renderMainContent()]
  }
}
