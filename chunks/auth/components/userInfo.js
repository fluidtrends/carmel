
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

  get tokens () {
    return 1000
  }

  get name () {
    return 'I. Dan Calinescu'
  }

  get xp () {
    return 0
  }

  render () {
    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          paddingTop: '10px',
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
        <Typography
          use='headline'
          tag='h1'
          style={{
            display: 'flex',
            flex: 1,
            marginBottom: '10px',
            justifyContent: 'flex-start'
          }}>
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
          }}>
          {this.name}
        </Typography>
        <Typography use='subheading1' tag='h1'>
          <ChipSet>
            <Chip style={{ backgroundColor: '#F5F5F5' }}>
              <ChipIcon style={{ color: '#66BB6A' }} leading use={`stars`} />
              <ChipText>
                {this.tokens.toLocaleString('en')} CARMEL
                </ChipText>
            </Chip>
          </ChipSet>
          <ChipSet>
            <Chip style={{ backgroundColor: '#ffffff' }}>
              <ChipIcon style={{ color: '#1E88E5' }} leading use={`terrain`} />
              <ChipText style={{ color: '#1E88E5' }}>
                {this.xp.toLocaleString('en')} CARMEL XP
                </ChipText>
            </Chip>
          </ChipSet>
        </Typography>
      </div>
    )
  }
}
