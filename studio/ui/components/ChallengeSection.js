import React, { Component } from "react"
import { Card, Divider, Button, Collapse, Avatar, Tag, Icon, Typography } from 'antd'
import TaskView from './TaskView'
import moment from 'moment'
import Loading from './Loading'

const { Panel } = Collapse
const { Meta } = Card
const { Text } = Typography

class Section extends Component {

  constructor() {
    super()

    this.state = {}
    this._onSelect = (challenge) => this.onSelect.bind(this, challenge)
    this._onStart = (challenge) => this.onStart.bind(this, challenge)
    this._onChangeFilter = this.onChangeFilter.bind(this)
  }
  
  componentDidMount() {
    if (!this.props.challengeStatus) {
      this.setState({ loading: true, timestamp: this.props.session.timestamp })
      this.props.session.getChallenges()
      return 
    }

    if (this.props.challenge) {      
      return
    }

    this.setState({ loading: true, timestamp: this.props.session.timestamp })
    this.props.session.getChallenge({
      productId: this.props.product.id,
      challengeId: this.props.challengeStatus.challengeId 
    })
  }

  componentDidUpdate(props, state) {
    if (this.state.timestamp === props.session.timestamp) {
      return 
    }

    this.setState({ loading: false, timestamp: props.session.timestamp })
  }

  componentWillUnmount() {
  }

  onSelect(challenge) {
    this.props.onChallengeEvent && this.props.onChallengeEvent(challenge, 'selected')
  }
 
  onStart(challenge) {
    if (this.props.challengeState === 'completed') {
      return 
    }

    this.setState({ loading: true, timestamp: this.props.session.timestamp })
    this.props.onChallengeEvent && this.props.onChallengeEvent(challenge, 'started')
  }
  
  renderChallengeTitle(challenge, type) {
   return  <Text strong style={{ 
            fontSize: "18px", 
            marginBottom: "5px"
         }}>
            {challenge.title}
    </Text>
  }

  renderChallengeSummary(challenge) {
    return <Text>
      {challenge.summary}
    </Text>
  }

  renderChallengeSkills(challenge) {
    return <div style={{
      flex: 1,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      marginBottom: "10px"
    }}>
      { Object.keys(challenge.skills).map(skill =>
        <Tag color="#9CCC65" style={{
          height: "22px",
          marginTop: "10px"
        }}>{ skill } {challenge.skills[skill]} </Tag>)}
    </div>
  }

  renderChallengeAuthor(challenge) {
    return <div style={{
      flex: 1,
      display: "flex",
      flexDirection: "row"
    }}>
      <Icon type="user" style={{ color: "#90A4AE", margin: "10px 0px 10px 0px"}}/>
      <Text style={{ margin: "8px", color: "#90A4AE"}}>
        { challenge.authorName}
      </Text>
    </div>
  }

  renderChallengeTimestamp(challenge, type) {
    const timestamp = type === 'paused' ? challenge.pausedTimestamp : challenge.timestamp
    const elapsed = moment(parseInt(timestamp)).fromNow()
    const friendlyTime = type === 'paused' ? `Paused ${elapsed}` : `Created ${elapsed}`
    return <div style={{
      flex: 1,
      display: "flex",
      flexDirection: "row"
    }}>
      <Icon type="clock-circle" style={{ color: "#90A4AE", margin: "10px 0px 10px 0px"}}/>
      <Text style={{ margin: "6px", color: "#90A4AE"}}>
        { friendlyTime }
      </Text>
    </div>
  }

  renderChallengeLevel(challenge) {
    return <div style={{
      flex: 1,
      display: "flex",
      flexDirection: "row",
      marginBottom: "5px",
      flexWrap: "wrap"
    }}>
      <Tag color="#ffffff" style={{
          height: "20px",
          color: "#00bcd4",
          border: "1px solid #00bcd4",
          margin: "0px 0px 0px 0px"
        }}>{ challenge.level } 
      </Tag>
      <Tag color="#00bcd4" style={{
            height: "20px",
            margin: "0px 0px 0px -3px"
          }}>{ challenge.xp } XP 
        </Tag>
    </div>
  }

  renderChallengeTask(task, index, state) {
    const active = (this.props.challengeState === 'completed' ? false : state === 1)
    const completed = (this.props.challengeState === 'completed' ? true : state <= 0)
    
    return <div style={{
      flex: 1,
      display: "flex",
      flexDirection: "row",
      height: "40px",
      marginTop: "10px"
    }}>
          <Icon type={completed ? "check-square" : (active ? "play-square" : "border")} style={{
            margin: "5px 10px 0px 0px",
            fontSize: "18px",
            color: (active ? '#00bcd4' : (completed ? '#607D8B' : '#E0E0E0'))
          }}/>
          <Text delete={completed} style={{ 
            margin: "2px 10px 0px 0px", 
            fontSize: "14px",
            color: (active ? '#00bcd4' : (completed ? '#607D8B' : '#E0E0E0')) 
          }}>
            { task.title }
          </Text>
    </div>
  }

  renderChallengeTasks(challenge) {
    let index = 1
    const taskIndex = (challenge.state ? challenge.state.taskIndex : 0)

    return <div style={{
      flex: 1,
      display: "flex",
      flexDirection: "column"
    }}>
      <Divider/>
      <Text strong>
        Tasks:
      </Text>
        { 
          challenge.tasks.map(task => {
            const state = (index - taskIndex)
            return this.renderChallengeTask(task, index++, state)
          })
        }
    </div>
  }

  renderChallenge(challenge, type, showTasks) {
    if (!this.props.taskValidationSuccess && this.props.challengeState === 'started' && challenge.state.taskActive) {
      return <TaskView 
        taskTutorial={this.props.taskTutorial}
        product={this.props.product}
        taskValidationError={this.props.taskValidationError}
        session={this.props.session}
        challenge={this.props.challenge}
      />
    }

    const buttonTitle = (this.props.challengeState === 'completed' ? 'Rate This Challenge' : (showTasks ? (challenge.state ? 'Continue' : 'Start') : (type === 'paused' ? 'Continue Challenge' : 'Take Challenge')))
    
    let actions = [<Button
        icon={this.props.challengeState === 'completed' ? 'like' : 'play-square'}
        disabled={this.state.progress}
        type={ type === 'paused' ? "secondary" : 'primary' }
        style={{
        }}>
          { buttonTitle }
    </Button>
    ]
      
    return <Card
              key={challenge._id}
              style={{ width: "100%", marginBottom: "20px" }}
              onClick={showTasks ? this._onStart(challenge) : this._onSelect(challenge)}
              actions={actions}> 
            <div style={{
              flex: 1, 
              display: "flex",
              flexDirection: "column"
            }}>       
            
            { this.renderChallengeTitle(challenge, type) }
            { showTasks || type === 'paused' || this.renderChallengeLevel(challenge) }
            { showTasks || type === 'paused' || this.renderChallengeSummary(challenge) }
            { showTasks || type === 'paused' || this.renderChallengeSkills(challenge) }
            { type === 'paused' && this.renderChallengeTimestamp(challenge, type) }
            { showTasks && this.renderChallengeTasks(challenge) }
            
          </div>
        </Card>
  }

  onChangeFilter(e) {
    this.setState({ filter: e.target.value });
  }

  get filter() {
    if (!this.props.product.challenges) {
      return false
    }

    return this.props.product.challenges[this.state.filter]
  }

  get challenges() {
    let c = []
    let all = [].concat(this.props.listings.challenges)

    if (this.props.product.challenges) {
      if (this.props.product.challenges.paused) {
        let paused = all.filter(c => this.props.product.challenges.paused[c._id])
        paused = paused.map(c => Object.assign({}, c, { pausedTimestamp: this.props.product.challenges.paused[c._id].timestamp }))
        all = all.filter(c => !paused.find(i => i._id === c._id))
        
        c.push({
          label: "Continue",
          type: "paused",
          items: paused
        })
      }
    }

    c.push({
      label: "Take a New Challenge",
      type: "new",
      items: all
    })

    return c
  }

  render() {
    if (this.state.loading) {
      return <Loading/>
    }

    if (!this.props.listings) {
      return <div/>
    }

    if (this.props.challenge || this.props.listings.challenge) {
      return this.renderChallenge(this.props.challenge || this.props.listings.challenge, "details", true)
    }

    if (this.props.listings.challenges) {
      let items = []
      this.challenges.map(group => {
        items = items.concat(group.items.map(c => this.renderChallenge(c, group.type)))
      })

      return items
    }

    return <div/>
  }

}

export default Section