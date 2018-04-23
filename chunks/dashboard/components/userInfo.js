
import React from 'react'
import { Component } from 'react-dom-chunky'
import { Typography } from 'rmwc/Typography'
import { Chip, ChipText, ChipIcon, ChipSet } from 'rmwc/Chip'
import { Icon } from 'rmwc/Icon'

export default class UserInfoComponent extends Component {

  constructor (props) {
    super(props)
    this.state = { ...super.state }
  }

  render () {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            padding: '10px',
            flexDirection: 'row',
            alignItems: 'center'
          }}
          >
          <Typography
            use='headline'
            tag='h1'
            style={{
              display: 'flex',
              flex: 1,
              justifyContent: 'flex-start'
            }}
            >
            <Icon style={{ fontSize: '50px' }} strategy='ligature'>
                account_circle
              </Icon>
          </Typography>
          <Typography
            use='title'
            tag='h1'
            style={{
              display: 'flex',
              flex: 6,
              justifyContent: 'flex-start'
            }}
            >
            {this.props.user.name}
          </Typography>
          <Typography use='subheading1' tag='h1'>
            <ChipSet>
              <Chip style={{ backgroundColor: '#F5F5F5' }}>
                <ChipIcon style={{ color: '#66BB6A' }} leading use={`stars`} />
                <ChipText>
                  {' '}
                  {this.props.tokens.toLocaleString('en')} CARMEL{' '}
                </ChipText>
              </Chip>
            </ChipSet>
              Level {this.props.level.toLocaleString('en')}
          </Typography>
        </div>
      </div>
    )
  }
}
