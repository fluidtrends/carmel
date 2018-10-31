import React from 'react'
import { Screen } from 'react-dom-chunky'
import { Typography } from '@rmwc/typography'
import { Card } from '@rmwc/card'
import { Chart } from '../components'
import Milestones from '../data/milestones'
import TimelineComponent from '../components/timeline'


export default class RoadmapScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state }
    this._details = (milestone) => this.details.bind(this, milestone)
  }

  componentDidMount () {
    super.componentDidMount()
  }


  details (milestone) {
    this.triggerRawRedirect(`https://github.com/fluidtrends/carmel/milestone/${milestone.id}`)
  }

  renderMilestones () {
    return <TimelineComponent milestones={Milestones.milestones} doneColor={Milestones.doneColor} progressColor={Milestones.progressColor} todoColor={Milestones.todoColor} doneIcon={Milestones.doneIcon} progressIcon={Milestones.progressIcon} todoIcon={Milestones.todoIcon} />
  }

  renderChart () {
    return <Chart isSmallScreen={this.isSmallScreen} />
  }

  renderMainContent () {
    const width = this.isSmallScreen ? '95vw' : '800px'
    const padding = this.isSmallScreen ? '2px' : '30px'

    return (<div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: '50px',
        alignItems: 'center'
      }}>

      <Card style={{ width, margin: '10px', padding }}>
        <Typography use='display1' tag='h1' style={{ color: '#90A4AE', marginBottom: '30px', marginTop: '20px' }}>
          Token Distribution
        </Typography>
        {this.renderChart()}
      </Card>

      <Card style={{ width, margin: '10px', padding }}>
        <Typography use='display1' tag='h1' style={{ color: '#90A4AE', marginBottom: '30px', marginTop: '20px' }}>
          Key Milestones
        </Typography>
        {this.renderMilestones()}
      </Card>
    </div>)
  }

  components () {
    return super.components().concat([this.renderMainContent()])
  }
}
