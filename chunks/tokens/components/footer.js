import React from 'react'
import { Component } from 'react-dom-chunky'
import { Typography } from 'rmwc/Typography'
import { Chip, ChipText, ChipIcon, ChipSet } from 'rmwc/Chip'

export default class BuyComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { ...super.state, loading: false }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  get bonus() {
    const { amount } = this.props

    if (amount < 500) {
      return 10
    }
    if (amount < 1000) {
      return 15
    }
    if (amount < 5000) {
      return 20
    }
    if (amount < 10000) {
      return 30
    }

    return 'Wow'
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <Typography use='caption' tag='h1'>
          <ChipSet>
            <Chip style={{ backgroundColor: '#F5F5F5' }}>
              <ChipText>
                {' '}
                CARMEL:{' '}
                <strong> {this.props.carmelPriceUSD} USD = {this.props.carmelPriceETH} ETH </strong>{' '}
              </ChipText>
            </Chip>
            <Chip
              style={{
                border: '1px #66BB6A solid',
                backgroundColor: '#ffffff',
                color: '#66BB6A'
              }}
            >
              <ChipText>
                {' '}
                <strong> {`${this.bonus}% Bonus `}</strong>{' '}
              </ChipText>
              <ChipIcon
                style={{ color: '#66BB6A', marginLeft: '2px' }}
                leading
                icon={`done`}
              />
            </Chip>
          </ChipSet>
        </Typography>
        <Typography use='caption' tag='h1'>
          At{' '}
          <a href='https://coinmarketcap.com/currencies/ethereum/'>
            CoinMarketCap ETH
        </a>{' '}
          rate:{' '}
          <strong>${this.props.ethereumPrice.toLocaleString('en')} USD</strong>
        </Typography>
      </div>
    )
  }
}
