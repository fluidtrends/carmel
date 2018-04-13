import React from 'react'
import { Component } from 'react-dom-chunky'
import { Typography } from 'rmwc/Typography'
import { Chip, ChipText, ChipIcon, ChipSet } from 'rmwc/Chip'

export default class BuyComponent extends Component {

  constructor (props) {
    super(props)
    this.state = { ...super.state, loading: false }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  get discount () {
    return (100 - (this.props.carmelPriceUSD * 100))
  }

  render () {
    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '20px'
        }}
    >
        <Typography
          use='headline'
          tag='div'
          style={{
            padding: '0.5rem 1rem',
            textAlign: 'center',
            padding: '20px'
          }}
          theme='text-secondary-on-background'
    >
          { `This week's discount: ${this.discount}%`}
        </Typography>
        <Typography style={{ textAlign: 'center' }} use='subheading2' tag='div'>
          {this.props.period}
        </Typography>
      </div>
    )
  }
}
