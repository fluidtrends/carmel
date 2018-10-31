import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Steps } from 'antd'
import { Typography } from '@rmwc/typography'
import { Card, CardActions, CardActionButtons } from '@rmwc/card'
import { Button } from '@rmwc/button'
import { Chart } from '../components'
import Periods from '../data/periods'
import Milestones from '../data/milestones'
import TimelineComponent from '../components/timeline'

const Step = Steps.Step

const CurrentMilestoneId = 7
const CurrentPeriodId = 1

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
    const direction = this.isSmallScreen ? 'vertical' : 'horizontal'
    const stepsPad = this.isSmallScreen ? 30 : 0

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
