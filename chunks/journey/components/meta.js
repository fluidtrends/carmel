import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Card, Avatar, Button } from 'antd';
const { Meta } = Card;

export default class ActivityCard extends Component {
  constructor (props) {
    super(props)

    this.state = { }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  render () {
    const { name, username, bio, pic, since, followers } = this.props.user

		const about = <div>
      <span style={{fontSize: 16}}>
        {bio}
      </span>
      <br />
      <span style={{fontSize: 16}}>
        {since}
      </span>
      <br />
      <span style={{fontSize: 12}}>
        {followers &&`${followers} followers`}
      </span>
    </div>

    const title = <div style={{fontSize: 32}}> 
      {name}
      <div style={{fontSize: 28, display: 'flex', alignItems: 'center'}}>
        @{username}
        {/* <Button type="primary" small ghost style={{marginLeft: 40, marginTop: 5, color: '#00bfa5', borderColor: '#00bfa5'}}>Follow</Button> */}
      </div>
    </div>

    const meta = <Meta
      title={title}
      description={about}
      style={{flex: 1}}
    />

    const width = this.props.isSmallScreen? '90vw' : 700

    return <div style={{ display: 'flex', flexWrap: 'wrap-reverse', justifyContent: 'center', textAlign: 'left', width}}>
      {meta}
      <Avatar style={{height: 120, width: 120}} src={pic}/>
    </div>
  }
}
