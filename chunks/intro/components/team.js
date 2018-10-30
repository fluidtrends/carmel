import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import AnimatedSection from './animatedSection'

import teamData from '../data/team'

export default class Challenges extends Component {
  constructor(props) {
    super(props)

    this.state = {  }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  render() {
    return  (
      <AnimatedSection
        animationType={'opacity'}
      >
        <Components.Team {...teamData} small={true} />
      </AnimatedSection>
    )
  }
}
