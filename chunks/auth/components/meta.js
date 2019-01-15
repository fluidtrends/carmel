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
    const { name, username, bio, img } = this.props.user

	const about = <div>
      <span style={{fontSize: 16}}>
        {bio}
      </span>
      <br />
    </div>

    const title = <div style={{fontSize: 32}}> 
      {name}
      <div style={{fontSize: 28, display: 'flex', alignItems: 'center', color: '#455A64'}}>
        {username}
      </div>
    </div>

    const meta = <Meta
      title={title}
      description={about}
      style={{flex: 1}}
    />


    return <div style={{ display: 'flex', flexWrap: 'wrap-reverse', justifyContent: 'center', textAlign: 'left'}}>
      {meta}
      <Avatar style={{height: 120, width: 120}} src={img}/>
    </div>
  }
}
