import React from 'react'
import { Component } from 'react-dom-chunky'
import { Fab } from 'rmwc/Fab'
import { Icon } from 'rmwc/Icon'

export default class SpecialButtonComponent extends Component {

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  render () {
    return (<div style={styles.fab} onClick={this.props.onAction}>
      <img src="assets/imspecial.png" style={styles.icon}/>
    </div>)
  }
}

const styles = {
  fab: {
    position: 'fixed',
    bottom: 100,
    right: 100
  },
  icon: {
    cursor: 'pointer',
    width: 60,
    height: 60
  }
}
