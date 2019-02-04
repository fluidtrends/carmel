import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Icon, Tag, Tabs, Avatar } from 'antd';
import Activity from '../components/activityCard'
import Challenge from '../components/challengeCard'
import Meta from '../components/meta'
import Story from '../components/Story'
import StoryCard from '../components/storyCard'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'
import { Typography } from '@rmwc/typography'
import {
  Card,
  CardActions,
  CardActionButtons
} from 'rmwc/Card'

const { TabPane } = Tabs;

export default class MainJourneyScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = {
      ...this.state
    }

    this._renderChallenges = this.renderChallenges.bind(this)
    this._renderTabs = this.renderTabs.bind(this)
    this._renderMeta = this.renderMeta.bind(this)
    this._renderSkills = this.renderSkills.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()

    setTimeout(() => {
      this.props.getUserProfile({ username: this.dynamicVariant })
    }, 300)

    Promise.all(this.props.stories.map(story => this.importRemoteData(story.source)))
      .then(stories => {
        var index = 0
        return stories.map(story => Object.assign({}, story, this.props.stories[index++])).map(s => new Story(s))
      })
      .then(stories => this.setState({ stories }))
  }

  gotListings(listings) {
    this.setState({ journey: listings.data })
  }

  couldNotGetListings(error) {
    console.log(error)
  }

  getUserOk(user) {
    if (user.data.error) {
      // This username does not exist
      this.triggerRedirect('/')
      return
    }

    this.setState({ user: user.data })
    this.props.getListings({ userId: user.data._id })
  }

  getUserError(error) {
    console.log(error)
  }

  get cover () {
    if (this.username) {
      return
    }
    return this.props.cover
  }

  get username () {
    return this.dynamicVariant
  }

  renderBadge(name, value) {
    if (this.isSmallScreen) {
      // return
    }

    const Badge = <span style={{width: 25, height: 25, borderRadius: '50%', background: '#00bcd4', position: 'absolute', bottom: 7, right: -10, color: '#fff',textAlign: 'center', padding: 3}}>{value}</span>

    return <Components.AnimatedWrapper animation animationType="fade">
      <span style={{position: 'relative', marginRight: 20}}>
        <Tag style={{marginBottom: 10, borderColor: '#00bcd4', color: '#00bcd4', backgroundColor: '#fff'}}>
          {`#${String(name).toLowerCase()} - ${value}`}
        </Tag>
      </span>
    </Components.AnimatedWrapper>
  }

  renderMeta() {
    return <Meta user={this.state.user} isSmallScreen={this.isSmallScreen} />
  }

  renderTabs() {
    return this._renderChallenges()
    // return <Tabs defaultActiveKey="3" onChange={() => {}} style={{color: '#546E7A', marginTop: 75, minHeight: '30vh'}}>
    //   <TabPane tab="Activity" disabled key="1">
    //     <div style={{textAlign: 'center'}}>
    //       <Icon type="loading" style={{fontSize: 40, color: '#00bfa5', padding: '20px 0'}} />
    //     </div>
    //   </TabPane>
    //   <TabPane tab="Stories" disabled key="2">
    //     {this.state.stories? this.renderStories() : this.renderLoading()}
    //   </TabPane>
    //   <TabPane tab="Challenges" key="3">{this._renderChallenges()}</TabPane>
    //   <TabPane tab="Code" disabled key="4"></TabPane>
    // </Tabs>
  }

  renderNewJourney(width, padding) {
    return <Fade>
        <Card style={{ width, margin: '40px 10px', padding }}>
            <div style={{ padding: '4px', textAlign: 'center', marginBottom: '20px' }}>
              <Bounce>
                <Avatar src="/assets/chunky-logo.gif" style={{
                  height: "180px", width: "180px"
                }} />
              </Bounce>
            </div>

            <Typography use='headline5' tag='div' style={{margin: "20px", color: this.props.theme.primaryColor, textAlign: 'center' }}>
              {this.dynamicVariant}'s learning journey hasn't started yet
            </Typography>
          </Card>
          </Fade>
  }

  renderCompletedChallenges(challenges) {
    return challenges.slice(0).reverse().map(challenge => <Challenge challenge={challenge} isSmallScreen={this.isSmallScreen} completed />)
  }

  renderCurrentChallenge(challenge) {
    return <Challenge challenge={challenge} isSmallScreen={this.isSmallScreen} active />
  }

  renderChallenges() {
      const {journey} = this.state.journey

      const {completedChallenges = [], challenge} = journey

      const completedChallengesCards = completedChallenges && this.renderCompletedChallenges(completedChallenges)

      if (!completedChallenges.length && ! challenge) {
        return this.renderNewJourney()
      }

      return [
        this.renderCurrentChallenge(challenge),
        ...completedChallengesCards
      ]
  }

  renderSkills() {
    const { skills } = this.state.journey.journey

    if (!skills) {
      return
    }

    return Object.keys(skills).map(key => this.renderBadge(key, skills[key]))
  }

  renderStories() {
    const story = this.state.stories[0]
    if (!story || !story.chapters) {
      return
    }

    return <div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        { story.chapters.map(chapter => <StoryCard chapter={chapter} isSmallScreen={this.isSmallScreen} />) }
      </div>
  }

  renderLoading() {
    return <div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        height: '70vh',
        alignItems: 'center'
      }}>
        <Components.Loading message="One sec please..."/>
      </div>
  }

  renderJourney() {
    const width = this.isSmallScreen? '90vw' : 700
    const distancer = <div style={{ marginTop: 25 }} />
    return <div style={{width, padding: '50px 0'}}>
      {this._renderMeta()}
      {distancer}
      {this._renderSkills()}
      {this._renderTabs()}
    </div>
  }

  get features() {
    if (!this.username || !this.state.user || !this.state.journey) {
      return this.renderLoading()
    }

    return this.renderJourney()
  }

  components() {
    return super.components().concat(this.features)
  }
}
