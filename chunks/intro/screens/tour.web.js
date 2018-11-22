import React from 'react'
import { Screen } from 'react-dom-chunky'
import { Parallax } from 'react-spring'
import Scene from '../components/scene'
import Chunky from '../components/chunky'
import { Data } from 'react-chunky'
import { Button, ButtonIcon } from '@rmwc/button'
import { Typography } from '@rmwc/typography'
import Bounce from 'react-reveal/Bounce'
import Pulse from 'react-reveal/Pulse'
import RubberBand from 'react-reveal/RubberBand'
import { Spring } from 'react-spring'

export default class Main extends Screen {
  constructor (props) {
    super(props)

    this.state = {}
  }

  componentDidMount () {
    super.componentDidMount()
  }

  renderScreenLayout() {
    return [this.renderStory(), this.renderFooter()]
  }

  renderActionButton() {
    if (this.state.onAction) {
      return <Pulse>
        { this.renderActionButtonInner() }
      </Pulse>
    }

    return <RubberBand>
      { this.renderActionButtonInner() }
    </RubberBand>

  }

  renderActionButtonInner(props) {
    return <Button onClick={() => this.triggerRedirect("/guilds")} style={Object.assign({}, {
      color: this.state.onAction ? '#ffffff' : '#F5F5F5',
      backgroundColor: this.state.onAction ? '#00bcd4' : '#4DD0E1'
    }, props)}
    onMouseOver={() => this.setState({ onAction: true })}
    onMouseOut={() => this.setState({ onAction: false })}>
        <ButtonIcon icon="check_circle" style={{marginLeft: "5px"}}/>
          Join a Carmel Guild
        <ButtonIcon icon="arrow_forward" style={{marginLeft: "5px"}}/>
    </Button>
  }

  renderStory () {
    return <div key="story" style={{
      position: "absolute",
      top: "20px",
      bottom: "80px",
      left: "20px",
      right: "20px",
      justifyContent: "center",
      display: "flex"
    }}>
      <Parallax
        ref={ref => (this.scroller = ref)}
        scrolling
        pages={8}
        style={{
          backgroundColor: "#ffffff"
        }}>
        <Scene
          compact={this.isSmallScreen}
          image="chunky-logo.gif"
          text="Hi, I'm Chunky the Code Monkey."
          summary="local://tour/chunky"
          prompt="Allow me to introduce Chris ..."
          next={() => this.scroller.scrollTo(1)}
          offset={0}/>
        <Scene
          compact={this.isSmallScreen}
          image="chris.png"
          text="Chris is a Learner."
          summary="local://tour/chris"
          prompt="Next, meet Bob ..."
          next={() => this.scroller.scrollTo(2)}
          offset={1}/>
        <Scene
          compact={this.isSmallScreen}
          image="bob.png"
          text="Bob is a Developer."
          summary="local://tour/bob"
          prompt="And then here's Fred ..."
          next={() => this.scroller.scrollTo(3)}
          offset={2}/>
        <Scene
          compact={this.isSmallScreen}
          image="fred.png"
          summary="local://tour/fred"
          prompt="Say Hello to Alice ..."
          text="Fred is an Entrepreneur."
          next={() => this.scroller.scrollTo(4)}
          offset={3}/>
        <Scene
          compact={this.isSmallScreen}
          image="alice.png"
          summary="local://tour/alice"
          prompt="Emma is something else ..."
          text="Alice is a Teacher."
          next={() => this.scroller.scrollTo(5)}
          offset={4}/>
        <Scene
          compact={this.isSmallScreen}
          image="emma.png"
          prompt="Last but not least, meet Diane ..."
          summary="local://tour/emma"
          text="Emma is a Manager."
          next={() => this.scroller.scrollTo(6)}
          offset={5}/>
        <Scene
          compact={this.isSmallScreen}
          image="diane.png"
          text="Diane is a Recruiter."
          summary="local://tour/diane"
          prompt="See how it all comes together ..."
          next={() => this.scroller.scrollTo(7)}
          offset={6}/>
        <Scene
          compact={this.isSmallScreen}
          image="cup.png"
          text="Carmel Challenges tie all together"
          summary="local://tour/marketplace"
          prompt="Ready to join us?"
          next={() => this.triggerRedirect("/guilds")}
          offset={7}/>
      </Parallax>
    </div>
  }

  renderFooter() {
    return <div key="action" style={{
      position: "absolute",
      bottom: 0,
      backgroundColor: this.state.onAction ? "#FFFDE7" : "#E0F7FA",
      width: "100vw"
    }}>
    <Typography use='title' tag='h2' style={{
      margin: '20px',
      textAlign: 'center'
    }}>
      { this.renderActionButton() }
    </Typography>
    </div>
  }
}
