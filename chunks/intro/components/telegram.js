import React from 'react'
import { Component } from 'react-dom-chunky'
import { Fab } from 'rmwc/Fab'
import { Icon } from 'rmwc/Icon'

export default class TelegramComponent extends Component {

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  render () {
    return (<div style={styles.fab} onClick={this.props.onAction}>
      <img src="assets/telegram.png" style={styles.icon}/>
    </div>)
  }
}

const styles = {
  fab: {
    position: 'fixed',
    bottom: 20,
    right: 20
  },
  icon: {
    cursor: 'pointer',
    width: 60,
    height: 60
  }
}



