import React from 'react'
import { Screen } from 'react-dom-chunky'
import { Steps } from 'antd'
import { Typography } from 'rmwc/Typography'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Button } from 'rmwc/Button'
import { Chart } from '../components'
import Periods from '../data/periods'
import Milestones from '../data/milestones'

const Step = Steps.Step

const CurrentMilestoneId = 7
const CurrentPeriodId = 1

export default class RoadmapScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = { ...this.state }
    this._details = (milestone) => this.details.bind(this, milestone)
  }

  componentDidMount() {
    super.componentDidMount()
  }

  renderPeriod(period) {
    const align = this.isSmallScreen ? 'left' : 'center'
    const description = <Typography use='subheading2' tag='h1' style={{
      color: '#90A4AE',
      marginBottom: '30px',
      textAlign: align
    }}>
      {period.summary}
    </Typography>

    return <Step
      key={period.id}
      title={period.title}
      description={description} />
  }

  details(milestone) {
    this.triggerRawRedirect(`https://github.com/fluidtrends/carmel/milestone/${milestone.id}`)
  }

  renderMilestone(milestone) {
    const description = <div style={{
      marginRight: '30px'
    }}>
      <Typography use='subheading2' tag='h1' style={{
        color: '#90A4AE',
        marginBottom: '10px',
        textAlign: 'left'
      }}>
        {milestone.description}
      </Typography>
      <Typography use='subheading2' tag='h1' style={{
        textAlign: 'left'
      }}>
        <Button onClick={this._details(milestone)} style={{ border: '1px solid #4FC3F7' }}>
          See Milestone Details
     </Button>
      </Typography>
    </div>

    return <Step
      key={milestone.id}
      title={milestone.title}
      description={description} />
  }

  renderPeriods() {
    return Periods.map(period => this.renderPeriod(period))
  }

  renderMilestones() {
    return Milestones.map(milestone => this.renderMilestone(milestone))
  }

  renderChart() {
    return <Chart isSmallScreen={this.isSmallScreen} />
  }

  renderMainContent() {
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

        <Steps
          progressDot
          direction={direction}
          style={{ margin: `${stepsPad}px` }}
          current={CurrentPeriodId}>

          {this.renderPeriods()}

        </Steps>
      </Card>

      <Card style={{ width, margin: '10px', padding }}>
        <Typography use='display1' tag='h1' style={{ color: '#90A4AE', marginBottom: '30px', marginTop: '20px' }}>
          Key Milestones
        </Typography>

        <Steps
          direction={'vertical'}
          style={{ margin: `${stepsPad}px` }}
          current={CurrentMilestoneId}>

          {this.renderMilestones()}

        </Steps>
      </Card>

    </div>)
  }

  components() {
    return super.components().concat([this.renderMainContent()])
  }
}
