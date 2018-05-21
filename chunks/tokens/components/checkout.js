import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Typography } from 'rmwc/Typography'
import { Chip, ChipText, ChipIcon, ChipSet } from 'rmwc/Chip'
import { Fab } from 'rmwc/Fab'
import { Slider } from 'rmwc/Slider'
import { Footer } from '.'
import { Radio } from 'rmwc/Radio'
import { Ethereum } from 'react-blockchain-chunky/lib'
import { Form, Input, Icon } from 'antd'

const FormItem = Form.Item

const CarmelETHAddress = '0xefE8889a7580d30E0120C8c9f52c2b3F8d16B431'// `0x4E52e804905CC320BF631523a9cb1416B8d613Fb`
const MyEtherWalletUrl = `https://www.myetherwallet.com`
const CoinMarketCapAPI = `https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD`
const CarmelPaymentMethods = { metamask: 'MetaMask', mew: 'MyEtherWallet' }
const CarmelIncrement = 100
const CarmelMax = 100
const CarmelStart = 50
const CarmelPrice = 0.5

export default class CheckoutComponent extends Component {
  constructor (props) {
    super(props)
    this.state = { ...super.state, loading: true, payMethod: 'metamask', loadingMessage: 'Loading, just a sec please ...' }
    this._incrementLevel = this.incrementLevel.bind(this)
    this._decrementLevel = this.decrementLevel.bind(this)
    this._updateLevel = this.updateLevel.bind(this)
    this._send = this.send.bind(this)
    this._back = this.back.bind(this)
    this._updatePayMethod = this.updatePayMethod.bind(this)
    this._status = this.status.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
    this.startTimer()
    this._loadPricing()
  }

  componentWillUnmount () {
    this.stopTimer()
  }

  startTimer () {
    const timer = setInterval(() => this.timerFired(), 1000)
    this.setState({ timer })
  }

  timerFired () {
    if (this.state.sending ||
       !this.isWaiting ||
       !this.props.transaction) {
      return
    }

    const amount = 0.00001 // this.state.nextLevelPrice
    const purchaseKey = this.props.transaction.data.purchaseKey
    const sending = true

    if (this.state.payMethod === 'mew') {
      this.sendEtherWithMEW({ amount, purchaseKey })
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

  stopTimer () {
    if (!this.state.timer) {
      return
    }
    clearInterval(this.state.timer)
  }

  fetchProviderAccount (ethereum) {
    return ethereum.refreshAccounts().then(accounts => accounts[0])
  }

  calculateGas (to, data) {
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

  sendEthereumTransaction (transaction) {
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

  sendEtherWithMEW ({ amount, purchaseKey }) {
    this.props.triggerRawRedirect(`${MyEtherWalletUrl}/?to=${CarmelETHAddress}&value=${amount}&data=${purchaseKey}#send-transaction`)
  }

  sendEther ({ ethereumAddress, amount, purchaseKey }) {
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

  sendingEther (ethereumTransactionHash) {
    return new Promise((resolve, reject) => {
      this.setState({ ethereumTransactionHash })
      resolve({ ethereumTransactionHash })
    })
  }

  couldNotSendEther () {
    this.setState({ sending: false, error: 'The transaction was not successful. Please try again.' })
  }

  _loadPricing () {
    const level = 0
    const tokens = 0
    const up = CarmelStart
    const nextLevel = up
    const nextTokens = nextLevel * CarmelIncrement
    const loading = false
    const provider = (typeof web3 !== 'undefined' ? web3.currentProvider : undefined)
    const ethereum = new Ethereum({ provider })

    return this.fetchPricing()
          .then(({ ethereumRate, tokenPrice }) => {
            const ethereumPrice = Number(ethereumRate.price_usd).toFixed(2)
            const carmelPrice = (tokenPrice / ethereumPrice).toFixed(6)
            const nextLevelPrice = (carmelPrice * (nextTokens - tokens)).toFixed(8)

            this.setState({
              tokenPrice,
              ethereum,
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

  fetchPricing () {
    return fetch(CoinMarketCapAPI)
          .then(response => response.json())
          .then(rates => ({ ethereumRate: rates[0], tokenPrice: CarmelPrice }))
  }

  get email () {
    return (this.props.account ? this.props.account.user.email : this.state.email)
  }

  send () {
    if (!this.email) {
      this.setState({ error: 'Please enter your email first' })
      return
    }

    this.setState({ waiting: true, error: '' })

    this.props.newTransaction({
      email: this.email,
      amount: this.state.nextLevelPrice,
      tokens: (this.state.nextTokens - this.state.tokens),
      price: this.state.tokenPrice,
      currency: 'eth'
    })
  }

  back () {
    this.setState({ waiting: false, sending: false, error: '', ethereumTransactionHash: '' })
  }

  updatePayMethod (evt) {
    this.setState({ payMethod: evt.target.value })
  }

  get isWaiting () {
    return (this.state.waiting && !this.error && this.props.transaction)
  }

  renderDecrementButton () {
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

  renderIncrementButton () {
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

  renderPaymentMethods () {
    if (this.isWaiting) {
      return <div />
    }

    return <Typography use='title' style={{ color: '#66BB6A', marginBottom: '20px' }} tag='h1'>
      <Radio
        value='metamask'
        style={{ color: '#66BB6A', marginRight: '10px' }}
        checked={this.state.payMethod === 'metamask'}
        onChange={this._updatePayMethod}>
        Send with { CarmelPaymentMethods.metamask }
      </Radio>
      <Radio
        value='mew'
        style={{ color: '#66BB6A', marginLeft: '10px' }}
        checked={this.state.payMethod === 'mew'}
        onChange={this._updatePayMethod}>
        Send with { CarmelPaymentMethods.mew }
      </Radio>
    </Typography>
  }

  renderUSD () {
    const priceUSD = (this.state.nextTokens * this.state.tokenPrice).toLocaleString('en')

    if (this.isWaiting) {
      return <div />
    }

    return <Typography use='subheading2' tag='h1' theme='text-secondary-on-background'>
      ${ priceUSD } USD
    </Typography>
  }

  renderTokens () {
    if (this.isWaiting) {
      return <div />
    }

    return <Chip
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
    </Chip>
  }

  renderMainContent () {
    const title = (this.isWaiting ? 'Complete The Ethereum Transaction' : 'Get CARMEL Tokens')
    return (
      <div>
        <Typography
          use='headline'
          tag='div'
          style={{
            textAlign: 'center',
            paddingTop: '30px',
            paddingBottom: '30px',
            marginBottom: '40px',
            borderBottom: '1px #E0E0E0 solid'
          }}
          theme='text-secondary-on-background'>
          { title }
        </Typography>

        { this.renderError() }

        <Typography use='title' tag='h1' style={{ margin: '0px' }}>
          <ChipSet style={{ justifyContent: 'center' }}>
            { this.renderDecrementButton() }
            { this.renderTokens() }
            { this.renderIncrementButton()}
          </ChipSet>
        </Typography>

        { this.renderUSD() }
        { this.renderSlider() }
        { this.renderPrice() }
        { this.renderPaymentMethods() }
        { this.renderBack() }
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
    ).toFixed(8)

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
    ).toFixed(8)

    this.setState({ up, nextLevel, nextLevelPrice, nextTokens })
  }

  updateLevel (event) {
    const up = event.detail.value
    const nextLevel = this.state.level + up
    const nextTokens = nextLevel * CarmelIncrement
    const nextLevelPrice = (
      this.state.carmelPrice *
      (nextTokens - this.state.tokens)
    ).toFixed(8)

    this.setState({ up, nextLevel, nextLevelPrice, nextTokens })
  }

  renderPaymentInfo () {
    return <Typography use='caption' tag='h1'>
      You will receive your Carmel Tokens as soon as your Ethereum Transaction is verified. The verification process could take a while, depending on how busy the Ethereum Blockchain is at the moment. You will be notified as soon as your transaction is verified.
    </Typography>
  }

  renderWaiting ({ message }) {
    return <div style={{ padding: '4px', textAlign: 'center', marginBottom: '20px' }}>
      <Icon type='check-circle-o' style={{
        fontSize: '64px',
        color: '#00bcd4',
        padding: '10px'
      }} />
      <Typography use='title' tag='h1' >
        { message }
      </Typography>
    </div>
  }

  status () {
    this.props.triggerRawRedirect(`https://etherscan.io/tx/${this.state.ethereumTransactionHash}`)
  }

  renderPaymentStatus () {
    if (this.state.payMethod === 'metamask') {
      if (!this.state.ethereumAddress) {
        return <Components.Loading message='Please unlock your MetaMask to complete the transaction.' />
      }

      if (this.state.ethereumTransactionHash) {
        return <div>
          { this.renderWaiting({ message: 'Transaction sent successfuly. Waiting for its verification.' }) }
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
      return this.renderWaiting({ message: 'Please complete the transaction with MyEtherWallet.' })
    }

    return <div />
  }

  renderPaymentDetails () {
    return <div style={{
      padding: '20px',
      marginBottom: '20px',
      backgroundColor: 'e0e0e0',
      borderTop: '1px eeeeee #solid'
    }}>
      { this.renderPaymentStatus() }
      { this.renderPaymentInfo() }
    </div>
  }

  renderPrice () {
    const priceETH = this.state.nextLevelPrice
    const priceCARMEL = this.state.nextTokens.toLocaleString('en')

    let title = `Send ${priceETH} ETH`
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
              <ChipText style={{color: '#546E7A', marginRight: '10px'}}>
                <strong> Total: </strong>
              </ChipText>
              <ChipText>
                <strong> { priceETH } ETH </strong>
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
              <ChipText style={{color: '#546E7A', marginRight: '10px'}}>
                <strong> Tokens: </strong>
              </ChipText>
              <ChipText>
                <strong> { priceCARMEL } CARMEL </strong>
              </ChipText>
            </Chip>
          </ChipSet>
        </Typography>
        { this.renderPaymentDetails() }
      </div>
    }

    return (
      <div>

        { this.renderEmailField() }

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
              { title }
            </Button>
          </CardActionButtons>
        </CardActions>
      </div>
    )
  }

  renderEmailField () {
    if (this.isWaiting || this.props.account) {
      return <div />
    }

    return <CardActions style={{
      marginTop: '20px',
      justifyContent: 'center'
    }}>
      <CardActionButtons style={{
        width: '100%'
      }}>
        <FormItem style={{
          width: '100%',
          marginLeft: '30px',
          marginRight: '30px'
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

  renderBack () {
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

  renderSlider () {
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
          marginTop: '10px',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <Typography use='title' style={{ color: '#ef5350' }} tag='h1'>
          { this.error }
        </Typography>
      </div>
    )
  }

  renderFooter () {
    if (this.isWaiting) {
      return <div />
    }

    return <Footer
      carmelPriceUSD={this.state.tokenPrice}
      carmelPriceETH={this.state.carmelPrice}
      ethereumPrice={this.state.ethereumPrice} />
  }

  render () {
    const width = this.props.compact ? '95vw' : '600px'
    if (this.state.loading) {
      return <Components.Loading message={this.state.loadingMessage} />
    }

    return (<div
      style={{
        display: 'flex',
        flex: 1,
        margin: '10px',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <Card style={{ width, margin: '10px', marginBottom: '20px', padding: '0px' }}>
        {this.renderMainContent()}
      </Card>
      { this.renderFooter() }
    </div>)
  }
}
