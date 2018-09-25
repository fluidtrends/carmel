import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Parallax } from 'react-spring'
import { Button, ButtonIcon } from 'rmwc/Button'

export default class Challenges extends Component {
  constructor(props) {
    super(props)

    this.state = { speaking: true }
    this._showTeam = this.showTeam.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()
  }

  componentWillUnmount() {
  }

  showTeam() {
    this.props.showTeam && this.props.showTeam()
  }

  action(offset, speed) {
    return [<Parallax.Layer
      offset={offset}
      speed={speed}
      key='action'
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center'
      }
      }>
      <div>
        <Button
          theme='secondary-bg text-primary-on-secondary'
          style={{ marginBottom: '40px' }}
          raised
          onClick={this._showTeam}>
          <ButtonIcon icon='done' />
          {`See the rest of the team`}
        </Button>
      </div>
    </Parallax.Layer >]
  }

  render() {
    return this.props.isSmallScreen ? [
      ...this.action(this.props.offset, 0)
    ] : <div />
  }
}
