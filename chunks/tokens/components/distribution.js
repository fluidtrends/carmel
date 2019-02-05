import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Card } from '@rmwc/card'
import { Icon } from 'antd'
import { Typography } from '@rmwc/typography'

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
  }

  componentDidMount () {
    super.componentDidMount()
  }

  renderDistribution() {
    const padding = this.props.isSmallScreen ? '5px' : '30px'

    return <div>
      <Typography use='headline4' tag='h3' style={{ textAlign:"center", color: '#4ebcd4' }}>
         Carmel Token Distribution
      </Typography>
      <br />
      <Typography use='headline5' tag='h3' style={{ textAlign:"center", color: '#B0BEC5' }}>
         Completed
      </Typography>
      <Typography use='headline6' tag='h3' style={{ textAlign:"center", color: '#B0BEC5' }}>
          Period 1: Initial Seed (April 2018) <span style={{color: '#4ebcd4'}}>✓</span>
      </Typography>
      <Typography use='headline6' tag='h3' style={{ textAlign:"center", color: '#B0BEC5' }}>
        Period 2: First Airdrop (May 2018) <span style={{color: '#4ebcd4'}}>✓</span>
      </Typography>
      <br />

      <Card style={{ margin: '10px', padding }}>
        <Typography use='headline4' tag='h3' style={{ textAlign:"center", color: '#4ebcd4' }}>
          Live now
        </Typography>
        <Typography use='headline5' tag='h3' style={{ textAlign:"center", color: '#546E7A' }}>
          Period 3: Pre-Listing Token Distribution
          <Icon type="loading" spin style={{marginLeft: 15}} style={{color: '#4ebcd4'}}/>
        </Typography>
        <br />
        <br />

        <Typography use='headline5' tag='h3' style={{ textAlign:"center", color: '#4ebcd4' }}>
          How to get CARMEL tokens
        </Typography>
        <Typography use='subtitle1' tag='h3' style={{ textAlign:"center", color: '#000' }}>
          <strong>1 CARMEL = 0.005 EOS</strong>
        </Typography>
        <Typography use='headline6' tag='h3' style={{ textAlign:"left", color: '#000' }}>
          Step 1:
        </Typography>
        <Typography use='headline6' tag='h3' style={{ textAlign:"left", color: '#546E7A' }}>
          Send <strong>10 EOS or more</strong> to the <strong style={{color: '#4ebcd4'}}>carmeltokens</strong> EOS Smart Contract.
        </Typography>
        <Typography use='headline6' tag='h3' style={{ textAlign:"left", color: '#000' }}>
          Step 2:
        </Typography>
        <Typography use='headline6' tag='h3' style={{ textAlign:"left", color: '#546E7A' }}>
          That's it. There is no Step 2. <strong style={{color: '#4ebcd4'}}>Enjoy your new</strong> CARMEL tokens.
        </Typography>
        <Typography use='headline6' tag='h3' style={{ textAlign:"left", color: '#000' }}>
          Step 3:
        </Typography>
        <Typography use='headline6' tag='h3' style={{ textAlign:"left", color: '#546E7A' }}>
          <strong style={{color: '#4ebcd4'}}>Share the love</strong> with your friends. And loved ones. Including robot friends.
        </Typography>
        
        <Components.Timer periods={periods} textColor="#4ebcd4" />
      </Card>
      
      <br />
      <Typography use='headline5' tag='h3' style={{ textAlign:"center", color: '#B0BEC5' }}>
         Upcoming (March 2019)
      </Typography>
      <Typography use='headline6' tag='h3' style={{ textAlign:"center", color: '#B0BEC5' }}>
        Period 4: CARMEL Holders Bonus
      </Typography>
      <Typography use='headline6' tag='h3' style={{ textAlign:"center", color: '#B0BEC5' }}>
        Period 5: EOS Holders Airgrab
      </Typography>
      <br />
      <Typography use='subtitle1' tag='h3' style={{ textAlign:"center", color: '#000' }}>
        Exchange listing starts April 2019.
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
