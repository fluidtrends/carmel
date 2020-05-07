import React, { PureComponent } from 'react'
import { renderResponsive } from './utils/responsive'
import { CSSTransition } from 'react-transition-group'

export default class Component extends PureComponent {

  constructor (props) {
    super(props)
    this._kind = `${this.constructor.name.toLowerCase()}`
    this._name = props.name || this.kind
    this._index = props.index || 0
    this._id = props.id || `${this.name}/${this.index}`
    this.triggerEvent = (event, data) => this.onEvent.bind(this, event, data)
  }

  onEvent (name = '', data) {
    this.props.onEvent && this.props.onEvent({
      component: { id: this.id, kind: this.kind, name: this.name, index: this.index },
      name,
      data,
      id: `${this.id}${name ? '/' + name : ''}`
    })
  }

  get index () {
    return this._index
  }

  get kind () {
    return this._kind
  }

  get name () {
    return this._name
  }

  get id () {
    return this._id
  }

  get width () {
    return this.props.width
  }

  get height () {
    return this.props.height
  }

  componentWillEnter (callback) {
    callback()
  }

  componentWillLeave (callback) {
  }

  componentDidMount () {
  }

  componentDidEnter () {
  }

  componentDidLeave () {
  }

  componentWillAppear (callback) {
    callback()
  }

  componentDidAppear () {
  }

  renderComponentCompact () {
    return this.renderComponent()
  }

  renderFade () {
    return <CSSTransition
      timeout={500}
      classNames={`fade`}
      >
      { this.props.children }
    </CSSTransition>
  }

  renderComponent () {
    return this.props.children
  }

  render () {
    return (<div style={styles.container} ref={c => this.container = c}>
      { renderResponsive(this.id, this.renderComponentCompact(), this.renderComponent()) }
    </div>)
  }
}

const styles = {
  container: {
  }
}
