import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Card } from '@rmwc/card'
import { Icon } from 'antd'
import { Typography } from '@rmwc/typography'
import { Button, ButtonIcon } from '@rmwc/button'

const periods = [
  {
    until: '7 March 2019',
    text: 'ends in:'
  }
]

export default class Distribution extends Component {
  constructor (props) {
    super(props)
    this.state = { ...super.state }

    this._goToDexEOS = this.goToDexEOS.bind(this)
  }

  goToDexEOS() {
    this.props.triggerRawRedirect("https://dexeos.io/trade/?market=eos&code=carmeltokens&symbol=CARMEL")
  }

  componentDidMount () {
    super.componentDidMount()
  }

  renderDistribution() {
    const padding = this.props.isSmallScreen ? '10px' : '30px'

    return <div>

      <br />

      <Typography use='headline5' tag='h3' style={{ textAlign:"center", color: '#607D8B' }}>
         Token Distribution
      </Typography>
      <Typography use='headline6' tag='h3' style={{ textAlign:"center", color: '#B0BEC5' }}>
          <strike> Period 1: Initial Seed (April 2018) </strike> <span style={{color: '#4ebcd4'}}>✓</span>
      </Typography>
      <Typography use='headline6' tag='h3' style={{ textAlign:"center", color: '#B0BEC5' }}>
        <strike> Period 2: First Airdrop (May 2018) </strike> <span style={{color: '#4ebcd4'}}>✓</span>
      </Typography>
      <Typography use='headline6' tag='h3' style={{ textAlign:"center", color: '#B0BEC5' }}>
        <strike> Period 3: Pre-Listing Distribution (March 2019) </strike> <span style={{color: '#4ebcd4'}}>✓</span>
      </Typography>
      <Typography use='headline6' tag='h3' style={{ textAlign:"center", color: '#B0BEC5' }}>
        <strike> Period 4: CARMEL Holders 1% Bonus (March 2019) </strike> <span style={{color: '#4ebcd4'}}>✓</span>
      </Typography>

      <br />

      <Typography use='subtitle1' tag='h3' style={{ textAlign:"center", color: '#000' }}>
        Exchange listing now officially started
      </Typography>

      <br />

      <Typography use='headline5' tag='h3' style={{ textAlign:"center", color: '#4ebcd4', padding }}>
      Official Exchanges listing CARMEL:
      </Typography>

      <Card style={{ margin: '10px', padding, alignItems: "center" }}>
        <img src="http://files.carmel.io/images/dexeos.png" style={{width: "120px", textAlign: "center"}}/>
        <Typography use='subtitle1' tag='h3' style={{ textAlign:"center", color: '#607D8B' }}>
          <strong> As of April 1st, 2019 </strong>
        </Typography>
        <Button
          raised
          onClick={this._goToDexEOS}
          style={{ marginTop: '0px', marginBottom: '20px' }}>
          Get CARMEL now
        </Button>
      </Card>

      <br/>

      <Typography use='headline6' tag='h3' style={{ textAlign:"center", color: '#B0BEC5' }}>
        More exchanges coming soon <span style={{color: '#4ebcd4'}}></span>
      </Typography>

    </div>
  }

  render () {
    const width = this.props.isSmallScreen ? '95vw' : '600px'

    return (<div
        style={{
          display: 'flex',
          flex: 1,
          padding: "40px 20px",
          width,
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
            {this.renderDistribution()}
      </div>)
  }
}
