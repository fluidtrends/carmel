import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Avatar, Icon, Popover } from 'antd'
import { Typography } from '@rmwc/typography'

export default class Task extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    super.componentDidMount()
  }

  renderTip() {
    if (!this.props.tip) {
      return <div />
    }

    const tip = (
      <Typography
        use="body1"
        style={{
          textAlign: 'left',
          color: '#78909C',
          padding: '20px'
        }}
      >
        <Icon
          type="warning"
          style={{
            color: '#78909C',
            padding: '10px'
          }}
        />
        {this.props.tip}
      </Typography>
    )

    return (
      <Popover placement="bottom" content={tip}>
        <Icon
          type="warning"
          style={{
            color: '#f44336',
            padding: '10px'
          }}
        />
      </Popover>
    )
  }

  render() {
    const popup = (
      <Typography
        use="body1"
        style={{
          textAlign: 'left',
          color: '#78909C',
          padding: '20px'
        }}
      >
        <Icon
          type="question-circle"
          style={{
            color: '#78909C',
            padding: '10px'
          }}
        />
        {this.props.task.help}
      </Typography>
    )

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}
      >
        <Typography
          use="title"
          style={{
            textAlign: 'left',
            padding: '20px',
            color: '#00bcd4'
          }}
        >
          <Avatar
            size="small"
            style={{
              backgroundColor: '#00bcd4',
              color: '#ffffff',
              marginTop: '-5px',
              marginRight: '10px'
            }}
          >
            {this.props.task.index}
          </Avatar>
          {this.props.task.title}
        </Typography>

        <Typography
          use="body1"
          style={{
            textAlign: 'left',
            color: '#78909C',
            padding: '20px'
          }}
        >
          {this.props.task.instructions}
          <Popover placement="bottom" content={popup}>
            <Icon
              type="question-circle"
              style={{
                color: '#78909C',
                padding: '10px'
              }}
            />
          </Popover>
          {this.renderTip()}
        </Typography>
      </div>
    )
  }
}
