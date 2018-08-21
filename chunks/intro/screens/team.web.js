import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import teamData from '../data/team'

export default class MainTeamScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  get cover() {
    return Object.assign({}, this.props.cover)
  }

  get username() { }

  get features() {
    return []
  }

  renderTeam() {
    return <Components.Team {...teamData} />
  }

  components() {
    return super.components().concat(this.renderTeam())
  }
}
