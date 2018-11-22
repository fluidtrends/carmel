import React from 'react'
import { Component } from 'react-dom-chunky'
import { Typography } from '@rmwc/typography'
import { Chip, ChipText, ChipIcon, ChipSet } from '@rmwc/chip'
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardAction,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from '@rmwc/card'
import { Row, Col } from 'antd'
import { Button, ButtonIcon } from '@rmwc/button'
import { Icon } from '@rmwc/icon';
import Levels from '../data/levels.json'
import { RadialBarChart, RadialBar, Legend } from 'recharts'

export default class Investor extends Component {
  constructor (props) {
    super(props)
    this.state = { ...super.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  get items() {
    return Levels
  }

  get price() {
    return 0.01
  }

  get bonus() {
    return 0
  }

  renderPayButton() {
    return <div>
        <a class="buy-with-crypto"
       href="https://commerce.coinbase.com/checkout/61136817-06f2-4873-b29b-4eb1184b0c25">
      <span>Buy with Crypto</span>
    </a>
    <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807">
    </script>
  </div>
  }

  paymentLink(amount) {
    const userId = "idancalinescu@gmail.com"
    const address = "0x4E52e804905CC320BF631523a9cb1416B8d613Fb"

    return `https://indacoin.com/gw/payment_form?partner=carmel&cur_from=USD&cur_to=ETH&amount=${amount}&address=${address}&user_id=${userId}`
  }

  renderCard(item) {
    const tokens = item.tokens * (1 + item.bonus)
    const rawPrice = (item.tokens * this.price).toFixed(0)
    const price = rawPrice.toLocaleString("en")
    const bonus = `${(item.bonus * 100).toFixed(0)}% Bonus`
    const paymentLink = this.paymentLink(rawPrice)

    return <Card style={{ margin: "10px", minWidth: "380px" }}>
        <CardPrimaryAction>
          <div style={{ padding: '20px', marginTop: "20px" }}>
            <Typography use="headline5" tag="h1">
              Get <strong> { tokens.toLocaleString("en") } </strong> CARMEL
            </Typography>
            <Typography
              use="headline6"
              tag="h2"
              theme="text-secondary-on-background"
              style={{ margin: '1rem', textAlign: "center" }}>
              Level { item.weight } Stake
            </Typography>
          </div>
        </CardPrimaryAction>
        <CardActions style={{ justifyContent: "center", }}>
          <Button
            onClick={() => this.props.onBuy(paymentLink)}
            style={{
              color: '#ffffff',
              backgroundColor: `${this.props.item.color}`
            }}>
            <ButtonIcon icon="check_circle" style={{ marginLeft: "5px"}}/>
            Pay &nbsp; <strong> ${price} USD </strong> &nbsp; Now
          </Button>
          { this.renderPayButton() }
        </CardActions>
        <CardActions style={{ justifyContent: "center" }}>
          <Typography
            use="caption"
            tag="div"
            style={{
              textAlign: "center",
              color: `#546E7A`,
              padding: "5px",
              backgroundColor: "#FFF9C4"}}>
              Includes { bonus }
          </Typography>
        </CardActions>
      </Card>
  }

  render() {
    return <div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        { this.renderCard(this.props.item) }
    </div>
  }

  renderCompact() {
    return <div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        { this.items.map(item => this.renderCard(item))}
      </div>
  }

  renderDefault() {
    return <div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <Row gutter={16}>
        <Col span={8}>
          { this.renderCard(this.items[0])}
        </Col>
        <Col span={8}>
          { this.renderCard(this.items[1])}
        </Col>
        <Col span={8}>
          { this.renderCard(this.items[2])}
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          { this.renderCard(this.items[3])}
        </Col>
        <Col span={8}>
          { this.renderCard(this.items[4])}
        </Col>
        <Col span={8}>
          { this.renderCard(this.items[5])}
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          { this.renderCard(this.items[6])}
        </Col>
        <Col span={8}>
          { this.renderCard(this.items[7])}
        </Col>
        <Col span={8}>
          { this.renderCard(this.items[8])}
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          { this.renderCard(this.items[9])}
        </Col>
        <Col span={8}>
          { this.renderCard(this.items[10])}
        </Col>
        <Col span={8}>
          { this.renderCard(this.items[11])}
        </Col>
      </Row>
    </div>
  }

  render () {
    return this.props.compact ? this.renderCompact() : this.renderDefault()
  }
}
