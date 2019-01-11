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
    const { name, description, img } = this.props

		const about = <div>
      <span style={{fontSize: 16}}>
        {description}
      </span>
      <br />
      <span style={{fontSize: 16}}>
        On the platform since 14 March 2018
      </span>
      <br />
      <span style={{fontSize: 12}}>
        15k followers
      </span>
    </div>

    const title = <div style={{fontSize: 32, display: 'flex', alignItems: 'center'}}>
      {name}
      <Button type="primary" small ghost style={{marginLeft: 30, marginTop: 5, color: '#00bfa5', borderColor: '#00bfa5'}}>Follow</Button>
    </div>

    const meta = <Meta
      title={title}
      description={about}
      style={{flex: 1}}
    />

    const width = this.isSmallScreen? '90vw' : 700

    return <div style={{ margin: '50px 0', display: 'flex', textAlign: 'left'}}>
      {meta}
      <Avatar style={{height: 120, width: 120}} src={img}/>
    </div>
  }
}
