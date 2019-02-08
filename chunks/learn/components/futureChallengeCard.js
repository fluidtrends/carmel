import React from 'react'
import { Component } from 'react-dom-chunky'
import { Card } from 'antd'
import { Typography } from '@rmwc/typography'
import { Ribbon } from './styledComponents'

export default class FutureChallengeCard extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    super.componentDidMount()
  }

  renderTitle() {
    return (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start'
        }}
      >
        <Typography
          use="headline5"
          tag="div"
          style={{
            color: '#455A64',
            maxWidth: '90%',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            marginLeft: '10px',
            display: 'inline-block'
          }}
        >
          {this.props.challenge.title}
        </Typography>
        <Ribbon backgroundColor={'#00BCD4'}>
          {this.props.challenge.type.toUpperCase()}
        </Ribbon>
      </div>
    )
  }

  render() {
    return (
      <Card
        title={this.renderTitle()}
        className={'future-challenge-card'}
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          width: '100%',
          opacity: 0.5
        }}
        bodyStyle={{ padding: 0 }}
      />
    )
  }
}
