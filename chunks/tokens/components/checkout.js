import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Typography } from 'rmwc/Typography'
import { Chip, ChipText, ChipIcon, ChipSet } from 'rmwc/Chip'
import { Fab } from 'rmwc/Fab'
import { Slider } from 'rmwc/Slider'
import { Footer, Steemit } from '.'
import { Radio } from 'rmwc/Radio'
import { Ethereum } from 'react-blockchain-chunky/lib'
import { Form, Input, Icon, Tooltip, Checkbox } from 'antd'
import { Eos, Euro, Eth } from './index'
import { S_IXUSR } from 'constants';

const FormItem = Form.Item

const CarmelETHAddress = `0x4E52e804905CC320BF631523a9cb1416B8d613Fb`
const MyEtherWalletUrl = `https://www.myetherwallet.com`
const CoinMarketCapAPIUSD = `https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=EUR`
const CoinMarketCapAPIEUR = `https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=EUR`
const CarmelPaymentMethods = { metamask: 'MetaMask', mew: 'MyEtherWallet' }
const CarmelIncrement = 100
const CarmelMax = 100
const CarmelStart = 50
const CarmelPrice = 1

const BonusMessage = <div>
  100 - 500 Carmel - 10% bonus
  <br />
  500 Carmel - 1000 Carmel - 15% bonus
  <br />
  1000 Carmel - 5000 Carmel -  20% bonus
  <br />
  5000 Carmel - 10.000 Carmel - 30% bonus
  <br />
  10.000 ++ Carmel -  private discussion</div>

export default class CheckoutComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { ...super.state, loading: true, payMethod: 'mew', paymentOption: 'crypto', currency: 'eth', loadingMessage: 'Loading, just a sec please ...' }
    this._incrementLevel = this.incrementLevel.bind(this)
    this._decrementLevel = this.decrementLevel.bind(this)
    this._updateLevel = this.updateLevel.bind(this)
    this._send = this.send.bind(this)
    this._back = this.back.bind(this)
    this._updatePayMethod = this.updatePayMethod.bind(this)
    this._payWithFiat = this.payWithFiat.bind(this)
    this._status = this.status.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()
    this.startTimer()
    this._loadPricing()
  }

  componentWillUnmount() {
    this.stopTimer()
  }

  startTimer() {
    const timer = setInterval(() => this.timerFired(), 1000)
    this.setState({ timer })
  }

  timerFired() {
    if (this.state.sending ||
      !this.isWaiting ||
      !this.props.transaction) {
      return
    }

    let amount = this.state.nextLevelPrice
    let currency = this.state.currency
    const purchaseKey = this.props.transaction.data.purchaseKey
    const sending = true

    if (this.state.payMethod === 'mew') {
      this.sendEtherWithMEW({ amount, purchaseKey })
      this.setState({ sending })
      return
    }

    if (this.state.payMethod == 'euro' || this.state.payMethod == 'usd') {
      currency = this.state.payMethod
      const email = this.state.email
      amount = this.state.payMethod == 'usd' ? this.state.tokenPrice * this.state.nextTokens : (this.state.nextLevelPrice * 1) * this.state.ethereumPriceEur
      this._payWithFiat({ amount, purchaseKey, currency, email })
      this.setState({ sending })
      return
    }

    if (this.state.payMethod !== 'metamask' || !this.state.ethereum) {
      return
    }

    this.fetchProviderAccount(this.state.ethereum)
      .then(ethereumAddress => {
        if (!ethereumAddress) {
          return
        }

        this.setState({ ethereumAddress, sending })
        this.sendEther({ amount, ethereumAddress, purchaseKey })
      })
  }

  stopTimer() {
    if (!this.state.timer) {
      return
    }
    clearInterval(this.state.timer)
  }

  fetchProviderAccount(ethereum) {
    return ethereum.refreshAccounts().then(accounts => accounts[0])
  }

  calculateGas(to, data) {
    return new Promise((resolve, reject) => {
      web3.eth.estimateGas({ to, data }, (error, gas) => {
        if (error) {
          resolve(22000)
          return
        }
        resolve(gas)
      })
    })
  }

  sendEthereumTransaction(transaction) {
    return new Promise((resolve, reject) => {
      web3.eth.sendTransaction(transaction, (error, result) => {
        if (error) {
          reject(error)
          return
        }
        resolve(result)
      })
    })
  }

  payWithFiat({ amount, currency, purchaseKey, email }) {
    const url = `https://indacoin.com/gw/payment_form?partner=carmel&cur_from=${currency}&cur_to=ETH&amount=${amount}&address=${CarmelETHAddress}&user_id=${email}`
    window.open(url, '_blank')

  }

  sendEtherWithMEW({ amount, purchaseKey }) {
    this.props.triggerRawRedirect(`${MyEtherWalletUrl}/?to=${CarmelETHAddress}&value=${amount}&data=${purchaseKey}#send-transaction`)
  }

  sendEther({ ethereumAddress, amount, purchaseKey }) {
    const message = `${purchaseKey}`
    const data = web3.toHex(message)
    const from = ethereumAddress
    const to = CarmelETHAddress
    const value = web3.toWei(amount, 'ether')

    return this.calculateGas(to, data)
      .then(gas => this.sendEthereumTransaction({ from, to, value, data, gas }))
      .then(hash => this.sendingEther(hash))
      .catch(error => this.couldNotSendEther(error))
  }

  sendingEther(ethereumTransactionHash) {
    return new Promise((resolve, reject) => {
      this.setState({ ethereumTransactionHash })
      resolve({ ethereumTransactionHash })
    })
  }

  couldNotSendEther() {
    this.setState({ sending: false, error: 'The transaction was not successful. Please try again.' })
  }

  _loadPricing() {
    const level = 0
    const tokens = 0
    const up = CarmelStart
    const max = CarmelMax
    const nextLevel = up
    const nextTokens = nextLevel * CarmelIncrement
    const loading = false
    const provider = (typeof web3 !== 'undefined' ? web3.currentProvider : undefined)
    const ethereum = new Ethereum({ provider })

    return this.fetchPricing()
      .then(({ ethereumRate, tokenPrice }) => {
        const ethereumPrice = Number(ethereumRate.price_usd).toFixed(2)
        const ethereumPriceEur = Number(ethereumRate.price_eur).toFixed(2)
        const carmelPrice = (tokenPrice / ethereumPrice).toFixed(6)
        const carmelPriceEur = (tokenPrice / ethereumPriceEur).toFixed(6)
        const nextLevelPrice = (carmelPrice * (nextTokens - tokens)).toFixed(8)

        this.setState({
          tokenPrice,
          ethereum,
          nextLevelPrice,
          ethereumPrice,
          ethereumPriceEur,
          carmelPrice,
          carmelPriceEur,
          ethereumRate,
          nextTokens,
          nextLevel,
          tokens,
          up,
          max,
          loading,
          level
        })
      })
  }

  fetchPricing() {
    return fetch(CoinMarketCapAPIUSD)
      .then(response => response.json())
      .then(rates => ({ ethereumRate: rates[0], tokenPrice: CarmelPrice }))
  }

  get email() {
    return (this.props.account ? this.props.account.user.email : this.state.email)
  }

  send() {
    if (!this.email) {
      this.setState({ error: 'Please enter your email first' })
      return
    }

    if (!this.state.terms) {
      this.setState({ error: 'Please confirm the terms' })
      return
    }

    if (!this.state.country) {
      this.setState({ error: 'Please confirm your location' })
      return
    }

    if (!this.state.age) {
      this.setState({ error: 'Please confirm your age' })
      return
    }

    const amount = this.state.currency == 'eth' ? this.state.nextLevelPrice : (this.state.currency == 'usd' ? this.state.nextTokens * this.state.tokenPrice : (this.state.nextLevelPrice * 1) * this.state.ethereumPriceEur)

    this.setState({ waiting: true, error: '' })

    this.props.newTransaction({
      email: this.email,
      amount,
      tokens: (this.state.nextTokens - this.state.tokens),
      price: this.state.tokenPrice,
      method: this.state.payMethod,
      ethereumAddress: this.state.ethereumAddress,
      currency: this.state.currency
    })
  }

  back() {
    // this.setState({ waiting: false, sending: false, error: '', ethereumTransactionHash: '', paymentOption: null })
    this.setState({ waiting: false, sending: false, error: '', ethereumTransactionHash: '' })
  }

  updatePayMethod(evt) {
    const value = evt.target.value
    const currency = (value != 'euro' || value != 'usd') ? 'eth' : value
    this.setState({ payMethod: value, currency: value == ('euro' || 'usd') ? value : 'eth' })
  }

  get isWaiting() {
    return (this.state.waiting && !this.error && this.props.transaction)
  }

  renderDecrementButton() {
    if (this.isWaiting) {
      return <div />
    }

    return <Fab
      mini
      onClick={this._decrementLevel}
      style={{ backgroundColor: '#CFD8DC', marginTop: '5px' }}>
      remove
  </Fab>
  }

  renderIncrementButton() {
    if (this.isWaiting) {
      return <div />
    }

    return <Fab
      mini
      onClick={this._incrementLevel}
      style={{ marginTop: '5px' }}>
      add
    </Fab>
  }

  renderFiatPayments() {
    if (this.isWaiting) {
      return <div />
    }

    return <Typography use='title' style={{ color: '#66BB6A', marginBottom: '20px' }} tag='h1'>
      <Radio
        value='usd'
        style={{ color: '#66BB6A', marginLeft: '10px' }}
        checked={this.state.payMethod === 'usd'}
        onChange={this._updatePayMethod}>
        Pay with dollars
      </Radio>
      <Radio
        value='euro'
        style={{ color: '#66BB6A', marginRight: '10px' }}
        checked={this.state.payMethod === 'euro'}
        onChange={this._updatePayMethod}>
        Pay with euro
      </Radio>
    </Typography>
  }

  renderCryptoPayments() {
    if (this.isWaiting) {
      return <div />
    }

    return <Typography use='title' style={{ color: '#66BB6A', marginBottom: '20px' }} tag='h1'>
      <Radio
        value='mew'
        style={{ color: '#66BB6A', marginLeft: '10px' }}
        checked={this.state.payMethod === 'mew'}
        onChange={this._updatePayMethod}>
        Send with {CarmelPaymentMethods.mew}
      </Radio>
      <Radio
        value='metamask'
        style={{ color: '#66BB6A', marginRight: '10px' }}
        checked={this.state.payMethod === 'metamask'}
        onChange={this._updatePayMethod}>
        Send with {CarmelPaymentMethods.metamask}
      </Radio>
    </Typography>
  }

  renderPaymentOptions() {
    if (this.isWaiting) {
      return <div />
    }

    if (this.state.paymentOption) {
      return <div />
    }

    let theme = 'secondary-bg text-primary-on-secondary'
    return <div style={{ display: 'flex', flex: 1, flexDirection: 'center', justifyContent: 'space-around', padding: 20 }}>
      <Button style={{ width: 150, height: 90, padding: 15 }} theme={theme} raised onClick={() => this.setState({ paymentOption: 'crypto', payMethod: 'mew', currency: 'eth', max: 100 })}><Eth size={64} /></Button>
      <Button style={{ width: 150, height: 90, padding: 15 }} theme={theme} raised onClick={() => this.setState({ paymentOption: 'fiat', payMethod: 'usd', currency: 'usd' })} > <Euro size={64} /></Button>
    </div>
  }

  renderUSD() {
    const priceUSD = (this.state.nextTokens * this.state.tokenPrice).toLocaleString('en')
    const priceEUR = (this.state.nextLevelPrice * 1) * this.state.ethereumPriceEur
    const priceETH = this.state.nextLevelPrice * 1
    if (this.isWaiting) {
      return <div />
    }

    const secondaryPrice = this.state.paymentOption == 'fiat' ? `€${priceEUR.toFixed(3)} EURO` : `${priceETH.toFixed(3)} ETH`

    return <Typography use='subheading2' tag='h1' theme='text-secondary-on-background'>
      ${priceUSD} USD/ {secondaryPrice}
    </Typography>
  }

  renderTokens() {
    if (this.isWaiting) {
      return <div />
    }

    return <Tooltip placement='right' title={BonusMessage} overlayStyle={{ width: 350 }} >
      <Chip
        style={{
          backgroundColor: '#F5F5F5',
          marginLeft: '20px',
          marginRight: '20px',
          padding: '15px'
        }}>
        <ChipIcon
          style={{ color: '#66BB6A', marginRight: '10px' }}
          leading
          use={`stars`}
        />
        <ChipText>
          {(this.state.nextTokens - this.state.tokens).toLocaleString(
            'en'
          )} CARMEL
        </ChipText>
        <ChipIcon style={{ color: '#B0BEC5', marginLeft: '5px', marginTop: '-5px' }} use={`redeem`} />
      </Chip>
    </Tooltip>
  }

  renderPaymentMethods() {
    if (!this.state.paymentOption) {
      return
    }

    return this.state.paymentOption == 'crypto' ? this.renderCryptoPayments() : this.renderFiatPayments()
  }

  renderMainContent() {
    return (
      <div>
        {this.renderError()}

        <Typography use='title' tag='h1' style={{ margin: '0px' }}>
          <ChipSet style={{ justifyContent: 'center' }}>
            {this.renderDecrementButton()}
            {this.renderTokens()}
            {this.renderIncrementButton()}
          </ChipSet>
        </Typography>

        {this.renderUSD()}
        {this.renderSlider()}
        {this.renderPrice()}
        {this.renderPaymentOptions()}
        {this.renderPaymentMethods()}
        {this.renderBack()}
      </div>
    )
  }

  incrementLevel() {
    if (this.state.up === this.state.max) {
      return
    }

    const up = this.state.up + 1
    const nextLevel = this.state.level + up
    const nextTokens = nextLevel * CarmelIncrement
    const nextLevelPrice = (
      this.state.carmelPrice *
      (nextTokens - this.state.tokens)
    ).toFixed(8)

    this.setState({ up, nextLevel, nextLevelPrice, nextTokens })
  }

  decrementLevel() {
    if (this.state.up === 1) {
      return
    }

    const up = this.state.up - 1
    const nextLevel = this.state.level + up
    const nextTokens = nextLevel * CarmelIncrement
    const nextLevelPrice = (
      this.state.carmelPrice *
      (nextTokens - this.state.tokens)
    ).toFixed(8)

    this.setState({ up, nextLevel, nextLevelPrice, nextTokens })
  }

  updateLevel(event) {
    const up = event.detail.value
    const nextLevel = this.state.level + up
    const nextTokens = nextLevel * CarmelIncrement
    const nextLevelPrice = (
      this.state.carmelPrice *
      (nextTokens - this.state.tokens)
    ).toFixed(8)

    this.setState({ up, nextLevel, nextLevelPrice, nextTokens })
  }

  renderPaymentInfo() {
    const currency = this.state.currency == 'eth' ? 'Ethereum' : (this.state.currency == 'usd' ? 'USD' : 'EURO')

    return <Typography use='caption' tag='h1'>
      {`You will receive your Carmel Tokens as soon as your ${currency} Transaction is verified. The verification process could take a while${currency == 'Ethereum' ? `, depending on how busy the Ethereum Blockchain is at the moment` : ''}. You will be notified as soon as your transaction is verified.`}
    </Typography>
  }

  renderWaiting({ message }) {
    return <div style={{ padding: '4px', textAlign: 'center', marginBottom: '20px' }}>
      <Icon type='check-circle-o' style={{
        fontSize: '64px',
        color: '#00bcd4',
        padding: '10px'
      }} />
      <Typography use='title' tag='h1' >
        {message}
      </Typography>
    </div>
  }

  status() {
    this.props.triggerRawRedirect(`https://etherscan.io/tx/${this.state.ethereumTransactionHash}`)
  }

  renderPaymentStatus() {
    if (this.state.payMethod === 'metamask') {
      if (!this.state.ethereumAddress) {
        return <Components.Loading message='Please unlock your MetaMask to complete the transaction.' />
      }

      if (this.state.ethereumTransactionHash) {
        return <div>
          {this.renderWaiting({ message: 'Transaction sent successfuly. Waiting for its verification.' })}
          <Typography use='caption' tag='h1' style={{ marginTop: '20px', marginBottom: '20px' }} >
            <Button
              onClick={this._status}
              raised
              style={{ marginTop: '0px', marginBottom: '20px' }}>
              See Transaction Status
          </Button>
          </Typography>
        </div>
      }

      return <Components.Loading message='Please confirm the transaction in MetaMask.' />
    }

    if (this.state.payMethod === 'mew') {
      return this.renderWaiting({ message: 'Please complete the transaction with MyEtherWallet. Oh - and make sure you allow popups :) ' })
    }

    return <div />
  }

  renderPaymentDetails() {
    return <div style={{
      padding: '20px',
      marginBottom: '20px',
      backgroundColor: 'e0e0e0',
      borderTop: '1px eeeeee #solid'
    }}>
      {this.renderPaymentStatus()}
      {this.renderPaymentInfo()}
    </div>
  }

  renderPrice() {

    if (!this.state.paymentOption) {
      return <div />
    }

    const priceETH = this.state.nextLevelPrice * 1
    const priceUSD = (this.state.nextTokens * this.state.tokenPrice).toLocaleString('en')
    const priceEUR = (this.state.nextLevelPrice * 1) * this.state.ethereumPriceEur
    const priceCARMEL = this.state.nextTokens.toLocaleString('en')
    const currency = this.state.paymentOption == 'crypto' ? 'ETH' : (this.state.payMethod == 'usd' ? 'dollars' : 'euro')
    const price = this.state.paymentOption == 'crypto' ? priceETH : (this.state.payMethod == 'usd' ? priceUSD : priceEUR.toFixed(3))
    let title = `Send ${price} ${currency}`
    let theme = 'secondary-bg text-primary-on-secondary'

    if (this.isWaiting) {
      return <div>
        <Typography use='subheading2' tag='h1' style={{ marginLeft: '20px', textAlign: 'center' }}>
          <ChipSet>
            <Chip
              style={{
                border: '1px #e7e7e7 solid',
                height: '38px',
                padding: '10px',
                margin: '5px',
                backgroundColor: '#ffffff',
                color: '#66BB6A'
              }}>
              <ChipText style={{ color: '#546E7A', marginRight: '10px' }}>
                <strong> Total: </strong>
              </ChipText>
              <ChipText>
                <strong> {price} {currency} </strong>
              </ChipText>
            </Chip>
            <Chip
              style={{
                border: '1px #e7e7e7 solid',
                height: '38px',
                padding: '10px',
                margin: '5px',
                backgroundColor: '#ffffff',
                color: '#66BB6A'
              }}>
              <ChipText style={{ color: '#546E7A', marginRight: '10px' }}>
                <strong> Tokens: </strong>
              </ChipText>
              <ChipText>
                <strong> {priceCARMEL} CARMEL </strong>
              </ChipText>
            </Chip>
          </ChipSet>
        </Typography>
        {this.renderPaymentDetails()}
      </div>
    }

    return (
      <div>

        {this.renderEmailField()}
        {this.renderTerms()}

        <CardActions
          style={{
            justifyContent: 'center',
            marginTop: '0px'
          }}>
          <CardActionButtons>
            <Button
              theme={theme}
              onClick={this._send}
              raised
              style={{ marginTop: '0px', marginBottom: '20px' }}>
              <ButtonIcon use='done' />
              {title}
            </Button>
          </CardActionButtons>
        </CardActions>
      </div>
    )
  }

  renderEmailField() {
    if (this.isWaiting || this.props.account) {
      return <div />
    }

    return <CardActions style={{
      marginTop: '20px',
      padding: '0 20px'
    }}>
      <CardActionButtons style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
        <FormItem style={{
          width: '100%'
        }}>
          <Input
            style={{
              height: '52px'
            }}
            value={this.state.email}
            onChange={val => this.setState({ email: val.target.value, error: '' })}
            prefix={<Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder={'Enter your email address'} />
          <Typography use='subheading1' style={{ color: '#90A4AE', marginTop: '5px' }} tag='h1'>
            We need this so we can notify you once your transaction is verified.
            </Typography>
        </FormItem>
      </CardActionButtons>
    </CardActions>
  }

  renderTerms() {
    if (this.isWaiting) {
      return <div />
    }

    // if (this.state.paymentOption !== 'fiat') {
    //   return
    // }

    return <CardActions style={{
      padding: '0 30px'
    }}>
      <CardActionButtons style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
        <FormItem>
          <Checkbox checked={this.state.terms} onChange={this.confirmTerm.bind(this, 'terms')}>I have read the <a href="/terms">Terms and Conditions</a></Checkbox>
        </FormItem>
        <FormItem>
          <Checkbox checked={this.state.country} onChange={this.confirmTerm.bind(this, 'country')}>I hereby declare, due to regulations uncertainties, that I am neither a resident in or citizen of the United States of America.</Checkbox>
        </FormItem>
        <FormItem>
          <Checkbox checked={this.state.age} onChange={this.confirmTerm.bind(this, 'age')}>I declare I am 16 years old or above</Checkbox>
        </FormItem>
      </CardActionButtons>
    </CardActions>
  }

  confirmTerm(term, ev) {
    this.setState({ [term]: ev.target.checked })
  }

  renderBack() {
    // if (!this.isWaiting && !this.state.paymentOption) {
    if (!this.isWaiting) {
      return <div />
    }

    return (
      <div>
        <CardActions
          style={{
            justifyContent: 'center',
            marginTop: '0px'
          }}>
          <CardActionButtons>
            <Button
              onClick={this._back}
              style={{ marginTop: '20px', marginBottom: '20px' }}>
              <ButtonIcon use='chevron_left' />
              Go Back
            </Button>
          </CardActionButtons>
        </CardActions>
      </div>
    )
  }

  renderSlider() {
    if (this.isWaiting) {
      return <div />
    }

    return <Slider
      style={{ marginTop: '20px', marginBottom: '0px' }}
      value={this.state.up}
      onChange={this._updateLevel}
      onInput={this._updateLevel}
      discrete
      min={1}
      max={this.state.max}
      displayMarkers
      step={1}
    />
  }

  get error() {
    return this.state.error || this.props.error
  }

  renderError() {
    if (!this.error) {
      return <div />
    }

    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          marginTop: '10px',
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

  renderFooter() {
    if (this.isWaiting) {
      return <div />
    }
    return <Footer
      carmelPriceUSD={this.state.tokenPrice}
      carmelPriceETH={this.state.carmelPrice}
      ethereumPrice={this.state.ethereumPrice}
      amount={this.state.nextTokens}
    />
  }

  render() {
    const width = this.props.isSmallScreen ? '95vw' : '600px'
    if (this.state.loading) {
      return <Components.Loading message={this.state.loadingMessage} />
    }

    const currency = this.state.currency == 'eth' ? 'Ethereum' : (this.state.currency == 'usd' ? 'USD' : 'EURO')

    const title = (this.isWaiting ? `Complete The ${currency} Transaction` : 'Get Your CARMEL Tokens')

    return (<div
      style={{
        display: 'flex',
        flex: 1,
        margin: '10px',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <Card style={{ width, margin: '10px', marginBottom: '20px', padding: '0 0 40px 0' }}>
        <Icon type='area-chart' style={{
          fontSize: '48px',
          marginTop: '20px',
          color: '#607D8B',
          padding: '10px'
        }} />
        <Typography use='headline' tag='h2' style={{ marginBottom: '40px' }}>
          {title}
        </Typography>

        {this.renderMainContent()}
      </Card>
      {this.renderFooter()}
    </div>)
  }
}
