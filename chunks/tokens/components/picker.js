import React from 'react'
import { Component } from 'react-dom-chunky'
import { LinearProgress } from 'rmwc/LinearProgress'
import {
  Card,
  CardActions,
  CardActionButtons
} from 'rmwc/Card'
import { Button } from 'rmwc/Button'
import { Typography } from 'rmwc/Typography'
import { Chip, ChipText, ChipIcon, ChipSet } from 'rmwc/Chip'
import { ListDivider } from 'rmwc/List'
import { Fab } from 'rmwc/Fab'
import { Slider } from 'rmwc/Slider'
import { Header, Footer } from '.'
import { Radio } from 'rmwc/Radio'

const CoinMarketCapAPI = `https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD`

const CarmelPaymentMethods = { metamask: 'MetaMask', mew: 'MyEtherWallet', cc: 'Credit Card', wire: 'Bank Transfer' }
const CarmelIncrement = 100
const CarmelMax = 100
const CarmelStart = 50

const CarmelPeriod = 'April 9 - April 16'
const CarmelPriceUSD = 0.25

export default class PickerComponent extends Component {
  constructor (props) {
    super(props)
    this.state = { ...super.state, loading: true, payCurrency: 'eth', payMethod: 'metamask' }
    this._incrementLevel = this.incrementLevel.bind(this)
    this._decrementLevel = this.decrementLevel.bind(this)
    this._updateLevel = this.updateLevel.bind(this)
    this._buy = this.buy.bind(this)
    this._unpay = this.unpay.bind(this)
    this._updatePayCurrency = this.updatePayCurrency.bind(this)
    this._updatePayMethod = this.updatePayMethod.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
    this.loadLevelData()
  }

  componentWillUnmount () {
  }

  loadLevelData () {
    const level = this.user.level || 0
    const tokens = this.user.tokens || 0
    const up = CarmelStart
    const nextLevel = level + up
    const nextTokens = nextLevel * CarmelIncrement
    const loading = false
    const tokenPrice = CarmelPriceUSD

    return this.fetchEthereumRate().then(ethereumRate => {
      const ethereumPrice = Number(ethereumRate.price_usd).toFixed(2)
      const carmelPrice = (tokenPrice / ethereumPrice).toFixed(6)
      const nextLevelPrice = (carmelPrice * (nextTokens - tokens)).toFixed(2)

      this.setState({
        tokenPrice,
        nextLevelPrice,
        ethereumPrice,
        carmelPrice,
        ethereumRate,
        nextTokens,
        nextLevel,
        tokens,
        up,
        loading,
        level
      })
    })
  }

  buy () {
    this.setState({ checkout: true })
  }

  unpay () {
    this.setState({ checkout: false })
  }

  updatePayCurrency (evt) {
    this.setState({ payCurrency: evt.target.value, payMethod: (evt.target.value === 'eth' ? 'metamask' : 'cc') })
  }

  updatePayMethod (evt) {
    this.setState({ payMethod: evt.target.value })
  }

  fetchEthereumRate () {
    return fetch(CoinMarketCapAPI)
      .then(response => response.json())
      .then(rates => rates[0])
  }

  get user () {
    return this.props.account || {}
  }

  renderDecrementButton () {
    if (this.state.checkout) {
      return <div />
    }
    return <Fab
      mini
      onClick={this._decrementLevel}
      style={{ backgroundColor: '#CFD8DC', marginTop: '5px' }}
  >
    remove
  </Fab>
  }

  renderIncrementButton () {
    if (this.state.checkout) {
      return <div />
    }

    return <Fab
      mini
      onClick={this._incrementLevel}
      style={{ marginTop: '5px' }}
    >
      add
    </Fab>
  }

  renderETHPaymentMethods () {
    return <Typography use='title' style={{ color: '#66BB6A' }} tag='h1'>
      <Radio
        value='metamask'
        style={{ color: '#66BB6A' }}
        checked={this.state.payMethod === 'metamask'}
        onChange={this._updatePayMethod}>
        With { CarmelPaymentMethods.metamask}
      </Radio>
      <Radio
        value='mew'
        checked={this.state.payMethod === 'mew'}
        onChange={this._updatePayMethod}>
        With { CarmelPaymentMethods.mew }
      </Radio>
    </Typography>
  }

  renderUSDPaymentMethods () {
    return <Typography use='title' style={{ color: '#66BB6A' }} tag='h1'>
      <Radio
        value='cc'
        style={{ color: '#66BB6A' }}
        checked={this.state.payMethod === 'cc'}
        onChange={this._updatePayMethod}>
        With a { CarmelPaymentMethods.cc }
      </Radio>
      <Radio
        value='wire'
        checked={this.state.payMethod === 'wire'}
        onChange={this._updatePayMethod}>
        Via a { CarmelPaymentMethods.wire }
      </Radio>
    </Typography>
  }

  renderCurrencyOptions () {
    if (this.state.checkout) {
      return <div />
    }

    return <Typography use='title' style={{ color: '#66BB6A' }} tag='h1'>
      <Radio
        value='eth'
        style={{ color: '#66BB6A' }}
        checked={this.state.payCurrency === 'eth'}
        onChange={this._updatePayCurrency}>
          ETH
        </Radio>
      <Radio
        value='usd'
        checked={this.state.payCurrency === 'usd'}
        onChange={this._updatePayCurrency}>
          USD
      </Radio>
    </Typography>
  }

  renderMainContent () {
    const priceETH = this.state.nextLevelPrice
    const priceUSD = (this.state.nextTokens * this.state.tokenPrice).toLocaleString('en')
    const price = (this.state.payCurrency === 'eth' ? `${priceETH} ETH` : `$${priceUSD} USD`)
    const title = (this.state.checkout ? 'How would you like to pay?' : 'How many Carmel Tokens would you like to buy?')

    return (
      <div style={{
        paddingTop: '10px'
      }}>
        <Typography
          use='headline'
          tag='div'
          style={{
            textAlign: 'center',
            padding: '20px'
          }}
          theme='text-secondary-on-background'
  >
          { title }
        </Typography>
        { this.renderPaymentMethods() }

        <ListDivider style={{ marginTop: '10px', marginBottom: '40px' }} />

        <Typography use='headline' tag='h1' style={{ margin: '0px' }}>
          <ChipSet style={{ justifyContent: 'center' }}>
            { this.renderDecrementButton()}
            <Chip
              style={{
                backgroundColor: '#F5F5F5',
                marginLeft: '20px',
                marginRight: '20px',
                padding: '15px'
              }}
            >
              <ChipIcon
                style={{ color: '#66BB6A', marginRight: '10px' }}
                leading
                use={`stars`}
              />
              <ChipText>
                {' '}
                {(this.state.nextTokens - this.state.tokens).toLocaleString(
                  'en'
                )}{' '}
                CARMEL{' '}
              </ChipText>
            </Chip>
            { this.renderIncrementButton()}
          </ChipSet>
        </Typography>

        { this.renderSlider() }

        <Typography use='title' style={{ color: '#66BB6A' }} tag='h1'>
          {`TOTAL: ${price}`}
        </Typography>
        { this.renderCurrencyOptions() }

        <ListDivider style={{ marginTop: '30px' }} />

        {this.renderPrice()}
      </div>
    )
  }

  incrementLevel () {
    if (this.state.up === CarmelMax) {
      return
    }

    const up = this.state.up + 1
    const nextLevel = this.state.level + up
    const nextTokens = nextLevel * CarmelIncrement
    const nextLevelPrice = (
      this.state.carmelPrice *
      (nextTokens - this.state.tokens)
    ).toFixed(2)

    this.setState({ up, nextLevel, nextLevelPrice, nextTokens })
  }

  decrementLevel () {
    if (this.state.up === 1) {
      return
    }

    const up = this.state.up - 1
    const nextLevel = this.state.level + up
    const nextTokens = nextLevel * CarmelIncrement
    const nextLevelPrice = (
      this.state.carmelPrice *
      (nextTokens - this.state.tokens)
    ).toFixed(2)

    this.setState({ up, nextLevel, nextLevelPrice, nextTokens })
  }

  updateLevel (event) {
    const up = event.detail.value
    const nextLevel = this.state.level + up
    const nextTokens = nextLevel * CarmelIncrement
    const nextLevelPrice = (
      this.state.carmelPrice *
      (nextTokens - this.state.tokens)
    ).toFixed(2)

    this.setState({ up, nextLevel, nextLevelPrice, nextTokens })
  }

  renderCancel () {
    if (!this.state.checkout) {
      return <div />
    }

    return <CardActions
      style={{
        justifyContent: 'center',
        marginTop: '0px'
      }}
    >
      <CardActionButtons>
        <Button
          onClick={this._unpay}
          style={{ marginBottom: '20px' }}>
        Cancel
        </Button>
      </CardActionButtons>
    </CardActions>
  }

  renderPrice () {
    const title = (this.state.checkout ? `Pay With ${CarmelPaymentMethods[this.state.payMethod]}` : 'Buy Now')

    return (
      <div>
        <CardActions
          style={{
            justifyContent: 'center',
            marginTop: '0px'
          }}
        >
          <CardActionButtons>
            <Button
              onClick={this._buy}
              raised
              theme='secondary-bg text-primary-on-secondar'
              style={{ marginTop: '10px', marginBottom: '20px' }}>
              { title }
            </Button>
          </CardActionButtons>
        </CardActions>
        { this.renderCancel()}
      </div>
    )
  }

  renderPaymentMethods () {
    if (!this.state.checkout) {
      return <div />
    }

    return (this.state.payCurrency === 'eth' ? this.renderETHPaymentMethods() : this.renderUSDPaymentMethods())
  }

  renderSlider () {
    if (this.state.checkout) {
      return <div />
    }

    return <Slider
      style={{ marginTop: '20px', marginBottom: '0px' }}
      value={this.state.up}
      onChange={this._updateLevel}
      onInput={this._updateLevel}
      discrete
      min={1}
      max={CarmelMax}
      displayMarkers
      step={1}
    />
  }

  get error () {
    return this.state.error || this.props.error
  }

  renderError () {
    if (!this.error) {
      return <div />
    }

    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          margin: '10px',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <Typography use='title' style={{ color: '#ef5350' }} tag='h1'>
          {this.error}
        </Typography>
      </div>
    )
  }

  render () {
    const width = this.props.compact ? '95vw' : '600px'
    if (this.state.loading) {
      return (
        <div
          style={{
            display: 'flex',
            flex: 1,
            margin: '10px',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Card style={{ width, margin: '20px', padding: '0px' }}>
            <Typography use='title' tag='h1'>
              Loading ... Just a sec, please.
            </Typography>
            <ListDivider />
            <LinearProgress determinate={false} />
          </Card>
        </div>
      )
    }

    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          margin: '10px',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Card style={{ width, margin: '10px', padding: '0px' }}>
          <Header
            period={CarmelPeriod}
            carmelPriceUSD={CarmelPriceUSD} />
        </Card>
        {this.renderError()}
        <Card style={{ width, margin: '10px', padding: '0px' }}>
          {this.renderMainContent()}
        </Card>
        <Footer
          carmelPriceUSD={CarmelPriceUSD}
          carmelPriceETH={this.state.carmelPrice}
          ethereumPrice={this.state.ethereumPrice} />
      </div>
    )
  }
}
