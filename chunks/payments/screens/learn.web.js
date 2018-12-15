import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Typography } from '@rmwc/typography'
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardAction,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from '@rmwc/card'
import { Row, Col, Badge } from 'antd'
import { Button, ButtonIcon } from '@rmwc/button'
import { Icon } from '@rmwc/icon'
import BountyPreview from '../components/bountyPreview'
import QuestPreview from '../components/questPreview'
import ChallengePreview from '../components/challengePreview'
import { Tabs } from 'antd'
const TabPane = Tabs.TabPane
import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarMenuIcon,
  ToolbarIcon
} from '@rmwc/toolbar'


const Challenges = [{
  categoryTitle: "New",
  categoryId: "0",
  challenges: [{
    id: "0",
    title: "My First Website",
    imageSmall: 'http://files.carmel.io/covers/hello-preview.png'
  },
  {
    id: "1",
    title: "Create A New Web Page",
    imageSmall: 'http://files.carmel.io/covers/blog-preview.png'
  },
  {
    id: "2",
    title: "Add A Blog",
    imageSmall: 'http://files.carmel.io/covers/book-preview.png'
  }]
}, {
  categoryTitle: "Popular",
  categoryId: "1",
  challenges: [{
    id: "0",
    title: "Blog",
    imageSmall: 'http://files.carmel.io/covers/blog-preview.png'
  }, {
    id: "1",
    title: "Add A Twitter Feed",
    imageSmall: 'http://files.carmel.io/covers/twitter-preview.png'
  }]
}, {
  categoryTitle: "Getting Started",
  categoryId: "2",
  challenges: [{
    id: "0",
    title: "My First Website",
    imageSmall: 'http://files.carmel.io/covers/hello-preview.png'
  },
  {
    id: "1",
    title: "Create A New Web Page",
    imageSmall: 'http://files.carmel.io/covers/blog-preview.png'
  },
  {
    id: "2",
    title: "Add A Blog",
    imageSmall: 'http://files.carmel.io/covers/book-preview.png'
  },
  {
    id: "3",
    title: "Add A Twitter Feed",
    imageSmall: 'http://files.carmel.io/covers/twitter-preview.png'
  }]
}, {
  categoryTitle: "Intermediate",
  categoryId: "3",
  challenges: [{
    id: "0",
    title: "Add Authentication",
    imageSmall: 'http://files.carmel.io/covers/laptop-preview.png'
  }, {
    id: "1",
    title: "Add Email Integration",
    imageSmall: 'http://files.carmel.io/covers/email-preview.png'
  }]
}]

const Bounties = [{
  categoryTitle: "New",
  categoryId: "0",
  bounties: [{
    id: "0",
    title: "Twitter Feed",
    imageSmall: 'http://files.carmel.io/covers/twitter-preview.png'
  },
  {
    id: "1",
    title: "Blog",
    imageSmall: 'http://files.carmel.io/covers/desk-preview.png'
  },
  {
    id: "2",
    title: "Testimonials",
    imageSmall: 'http://files.carmel.io/covers/concert-preview.png'
  }]
}, {
  categoryTitle: "Popular",
  categoryId: "1",
  bounties: [{
    id: "0",
    title: "Blog",
    imageSmall: 'http://files.carmel.io/covers/desk-preview.png'
  }, {
    id: "1",
    title: "Features",
    imageSmall: 'http://files.carmel.io/covers/gifts-preview.png'
  }]
}, {
  categoryTitle: "Marketing",
  categoryId: "2",
  bounties: [{
    id: "0",
    title: "Blog",
    imageSmall: 'http://files.carmel.io/covers/desk-preview.png'
  },
  {
    id: "1",
    title: "Features",
    imageSmall: 'http://files.carmel.io/covers/gifts-preview.png'
  },
  {
    id: "2",
    title: "Testimonials",
    imageSmall: 'http://files.carmel.io/covers/concert-preview.png'
  },
  {
    id: "3",
    title: "Twitter Feed",
    imageSmall: 'http://files.carmel.io/covers/twitter-preview.png'
  }]
}, {
  categoryTitle: "Functional",
  categoryId: "3",
  bounties: [{
    id: "0",
    title: "Authentication",
    imageSmall: 'http://files.carmel.io/covers/laptop-preview.png'
  }, {
    id: "1",
    title: "Email Integration",
    imageSmall: 'http://files.carmel.io/covers/email-preview.png'
  }]
}]

const Quests = [{
  categoryTitle: "New",
  categoryId: "0",
  quests: [{
    id: "0",
    title: "Build Your Personal Website",
    imageSmall: 'http://files.carmel.io/covers/hello-preview.png'
  }]
}, {
  categoryTitle: "Popular",
  categoryId: "1",
  quests: [{
    id: "0",
    title: "Publish Your Own Blog",
    imageSmall: 'http://files.carmel.io/covers/blog-preview.png'
  }]
}, {
  categoryTitle: "Web Development",
  categoryId: "2",
  quests: [{
    id: "0",
    title: "Build Your Personal Website",
    imageSmall: 'http://files.carmel.io/covers/hello-preview.png'
  }]
}]

export default class LearnScreen extends Screen {

  constructor (props) {
    super(props)

    this._changeCategory = this.changeCategory.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()
  }

  get categories() {
    switch (this.state.typeId) {
      case 1:
        return Quests.map(c => ({ id: c.categoryId, title: c.categoryTitle }))
      case 2:
        return Bounties.map(c => ({ id: c.categoryId, title: c.categoryTitle }))
      default:
    }
    return Challenges.map(c => ({ id: c.categoryId, title: c.categoryTitle }))
  }

  get challenges() {
    return Challenges[this.state.categoryId || 0].challenges
  }

  get bounties() {
    return Bounties[this.state.categoryId || 0].bounties
  }

  get quests() {
    return Quests[this.state.categoryId || 0].quests
  }

  changeCategory(categoryId) {
    this.setState({ categoryId })
  }

  renderCategories() {
    return <Tabs
          size="large"
          style={{ width: "100%", justifyContent: "center" }}
          onChange={this._changeCategory}
          defaultActiveKey={`0`}
          activeKey={`${this.state.categoryId || 0}`}
          tabPosition={this.isSmallScreen ? "top" : "left"}>
          { this.categories.map(c => <TabPane tab={c.title} key={c.id}/>)}
    </Tabs>
  }

  renderTypes() {
    return  <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        borderBottom: "1px solid #dddddd",
        padding: "10px",
        margin: "20px"
      }}>
        <Badge count={0} style={{ margin: "10px 5px 0px -10px", fontSize: "10px"}}>
          <Button style={{ color: (this.state.typeId || 0) === 0 ? '#039BE5' : '#B0BEC5', margin: "10px" }} onClick={() => this.setState({ typeId: 0, categoryId: 0 })} outlined={(this.state.typeId || 0) === 0}>
            Challenges
          </Button>
        </Badge>
        <Badge count={0} style={{ margin: "10px 5px 0px -10px"}}>
          <Button style={{ color: (this.state.typeId || 0) === 1 ? '#039BE5' : '#B0BEC5', margin: "10px" }} onClick={() => this.setState({ typeId: 1, categoryId: 0 })} outlined={(this.state.typeId || 0) === 1}>
            Quests
          </Button>
        </Badge>
        <Badge count={0} style={{ margin: "10px 5px 0px -10px"}}>
          <Button style={{ color: (this.state.typeId || 0) === 2 ? '#039BE5' : '#B0BEC5', margin: "10px" }} onClick={() => this.setState({ typeId: 2, categoryId: 0 })} outlined={(this.state.typeId || 0) === 2}>
            Bounties
          </Button>
        </Badge>
      </div>
  }

  renderQuote() {
    return <div/>
  }

  renderCategoriesContent(category) {
    switch (this.state.typeId) {
      case 1:
        return <div style={{  }}>
            { this.quests.map(c => <QuestPreview key={c.id} quest={c} compact={this.isSmallScreen}/> )}
        </div>
      case 2:
      return <div style={{  }}>
          { this.bounties.map(p => <BountyPreview key={p.id} bounty={p} compact={this.isSmallScreen}/> )}
      </div>
      default:
    }

    return <div style={{  }}>
        { this.challenges.map(t => <ChallengePreview key={t.id} challenge={t} compact={this.isSmallScreen}/> )}
    </div>
  }

  renderTypePrompt() {
    var prompt = "Take a Challenge to acquire new skills"

    switch (this.state.typeId) {
      case 1:
        prompt = "Go on a Quest with a series of related Challenges"
        break
      case 2:
        prompt = "Put your skills to the test"
        break
      default:
    }

    return <Typography
      use="body1"
      tag="div"
      style={{
        textAlign: "center",
        margin: "20px 0px 20px 0px",
        padding: "5px",
        color: "#29B6F6" }}>
      { prompt }
    </Typography>
  }

  renderDefault() {
    return <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start"
      }}>
        <div style={{ marginTop: "120px"}}>
          { this.renderCategories() }
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px"
        }}>
          { this.renderTypes() }
          { this.renderTypePrompt() }
          { this.renderCategoriesContent()}
      </div>
    </div>
  }

  renderCompact() {
    return <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100vw"
    }}>
      { this.renderTypes() }
      { this.renderTypePrompt() }
      { this.renderCategories() }
      { this.renderCategoriesContent()}
    </div>
  }

  renderMainContent() {
    return this.isSmallScreen ? this.renderCompact() : this.renderDefault()
  }

  components () {
    return [this.renderMainContent()]
  }
}
