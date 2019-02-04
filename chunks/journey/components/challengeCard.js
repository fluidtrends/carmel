import React from 'react'
import moment from 'moment'
import { Component, Components } from 'react-dom-chunky'
import { Card, Icon, Tag, Timeline } from 'antd';
const { Meta } = Card;


export default class ChallengeCard extends Component {
  constructor (props) {
    super(props)

    this.state = { }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  capitalizeName(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
  }

  completedIn (timestamp) {
    let minutes = moment.duration(timestamp).minutes()
    let seconds = moment.duration(timestamp).seconds()
    let minutesText
    let secondsText
    if (minutes > 0) {
      minutesText = minutes === 1? 'minute' : 'minutes'
      secondsText = seconds === 1? 'second' : 'seconds'
    } else {
      seconds = moment.duration(timestamp).seconds()
      secondsText = seconds === 1? 'second' : 'seconds'
    }

    if (!minutes && !seconds) {
      return 0
    }

    return `${minutes || ''} ${minutesText || ''} ${seconds} ${secondsText}`
  }

  renderTasks (challenge) {
    const tasks = challenge.totalTasks
    const tasksTime = challenge.tasksTime || []
    const index = tasksTime.length
    const errors = challenge.failures

    const items = []
    let item, i
    for (i = 0; i < tasks; i++) {
      if (errors && errors.length) {
        let error = errors[i]
        
        if( error ) {
          let errorsCount = Object.keys(error).length
          let errorsText = errorsCount === 1 ? 'failure' : 'failures'
          let errorItem = <Timeline.Item color="red">
            <div style={{paddingTop: 6}}>
              {`Task ${i + 1} - ${errorsCount} ${errorsText}`}
            </div>
          </Timeline.Item>          
  
          items.push(errorItem)
        }
      }
     
      //check if task was completed
      if (i < index) {
        item = <Timeline.Item color="green">
          <div style={{paddingTop: 6}}>
            {`Task ${i + 1} - completed in ${this.completedIn(challenge.tasksTime[i])}`}
          </div>
        </Timeline.Item>
      } else {
        item = <Timeline.Item color="#FFA000">
          <div style={{paddingTop: 6}}>
            {`Task ${i + 1} - not started`}
          </div>
        </Timeline.Item>

      }

      
      items.push(item)

    }

    if (!items.length) {
      return <div />
    }

    return <Timeline>
      {[...items]}
    </Timeline>
  }

  render () {
    const { challenge, isSmallScreen, completed, active } = this.props

    if (!challenge) {
      return null
    }

    const { challengeId, timestamp, tasksTime } = challenge
    const name = this.capitalizeName(challengeId.replace(/-/g, ' '))
    const date = moment.unix(timestamp/1000).fromNow()
    const description = <div style={{fontSize: 12}}>
      {date}
    </div>

    const tagColor = completed? '#87d068' : '#FFA000'
    const tagText= completed? 'Completed' : 'On going'

    const totalTime = (tasksTime && tasksTime.length) ? tasksTime.reduce((time, acc) => acc + time) : 0

    const challengeTime = this.completedIn(totalTime) 

    const title = <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <Meta
        title={name}
        description={description}
      />  
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end'}}>
        <Tag style={{margin: 5}} color={tagColor}>{tagText}</Tag>
        {challengeTime ? <Tag style={{margin: 5}} color="#26C6DA">{challengeTime}</Tag> : null}
      </div>  
    </div>

    const width = isSmallScreen? '90vw' : 700

    return <div style={{ paddingTop: 20, textAlign: 'left', marginBottom: 10 }}>
			<Card
				size="small"
				style={{width}}
        title={title}
				xactions={[<Icon type="like" style={{fontSize: 20, color: '#00bfa5'}} />, <Icon type="message" style={{fontSize: 20, color: '#00bfa5'}} />, <Icon type="share-alt" style={{fontSize: 20, color: '#00bfa5'}} />]}
				>
					<Components.AnimatedWrapper animation animationType="zoom">
							<div style={{paddingTop: 20}}>
                {this.renderTasks(challenge)}
							</div>
					</Components.AnimatedWrapper>
			</Card>
    </div>

  }
}
