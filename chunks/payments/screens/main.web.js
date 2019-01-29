import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Typography } from '@rmwc/typography'
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardAction,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from '@rmwc/card'
import { Row, Col, Switch, Progress } from 'antd'
import { Button, ButtonIcon } from '@rmwc/button'
import { List, SimpleListItem } from '@rmwc/list'
import Carmel1K from '../functions/1k.json'
import { Data } from 'react-chunky'
import { Ribbon } from '../components/styledComponents'

export default class EarlyAccessScreen extends Screen {
  constructor(props) {
    super(props)

    this._checkout = this.checkout.bind(this)
    this.state = { selectedPlan: 'yearly' }
  }

  componentDidMount() {
    this._plans = this.importData('plans')
    this._subscriptionBought = this.importData('subscriptionBought')
    this.setState({
      plans: this.plans,
      subscriptionBought: this.subscriptionBought
    })
    super.componentDidMount()
  }

  get plans() {
    return this._plans || []
  }

  get subscriptionBought() {
    return this._subscriptionBought.subscriptionBought || 20
  }

  addToCart(cart) {
    const newCart = Object.assign({}, { items: {} }, cart)
    newCart.items[Carmel1K.item.id] = Object.assign({}, Carmel1K.item, {
      quantity: 1
    })

    Data.Cache.cacheItem('__shoppingCart', newCart).then(() =>
      this.triggerRedirect('/checkout')
    )
  }

  checkout() {
    Data.Cache.retrieveCachedItem('__shoppingCart')
      .then(cart => this.addToCart(cart))
      .catch(error => this.addToCart())
  }

  handlePlanChange = () => {
    this.setState({
      selectedPlan: this.state.selectedPlan === 'yearly' ? 'monthly' : 'yearly'
    })
  }

  renderForm() {
    const width = this.isSmallScreen ? '90vw' : '700px'
    const padding = this.isSmallScreen ? '5px' : '40px'
    const heading = this.isSmallScreen ? 'headline5' : 'headline4'
    const percentage = (this.state.subscriptionBought / 10).toFixed(0)
    return (
      <Card style={{ margin: '10px', width }}>
        <div style={{ padding: '30px', marginTop: '20px' }}>
          <Typography use={heading} tag="h1">
            Join the #Carmel1K Club
          </Typography>
          <Typography
            use="headline6"
            tag="h2"
            theme="text-secondary-on-background"
            style={{ margin: '1rem', textAlign: 'center' }}
          >
            Become one of the first 1,000 Carmel Customers
          </Typography>
          <Progress
            style={{ display: 'flex', justifyContent: 'center' }}
            type="circle"
            width={80}
            percent={percentage}
            format={percent => `${this.state.subscriptionBought}/1000`}
          />
        </div>
        <List
          twoLine
          style={{
            padding,
            borderTop: '1px solid #eeeeee',
            borderBottom: '1px solid #eeeeee'
          }}
        >
          {Carmel1K.benefits.map(benefit => (
            <SimpleListItem graphic="check_circle" text={benefit.title} />
          ))}
        </List>
        <CardActions style={{ justifyContent: 'center', paddingTop: '40px' }}>
          <Button
            onClick={this._checkout}
            style={{
              color: '#ffffff',
              height: '50px',
              backgroundColor: this.props.theme.primaryColor
            }}
          >
            <ButtonIcon
              icon="credit_card"
              style={{ marginLeft: '5px', fontSize: '24px' }}
            />
            <Typography
              use="headline5"
              tag="div"
              style={{
                textAlign: 'center',
                color: '#ffffff',
                padding: '0px 20px 0px 20px'
              }}
            >
              €{Carmel1K.item.price}
            </Typography>
            <ButtonIcon
              icon="arrow_forward"
              style={{ marginLeft: '5px', fontSize: '24px' }}
            />
          </Button>
        </CardActions>
        <CardActions
          style={{ justifyContent: 'center', paddingBottom: '40px' }}
        >
          <Typography
            use="caption"
            tag="div"
            style={{
              textAlign: 'center',
              color: `#546E7A`,
              padding: '5px',
              backgroundColor: '#FFF9C4'
            }}
          >
            Make a one-time secure credit card payment
          </Typography>
        </CardActions>
      </Card>
    )
  }

  renderPrices() {
    return (
      <div style={{ opacity: 0.5, cursor: 'not-allowed' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '18px',
            justifyContent: 'center',
            margin: '20px'
          }}
        >
          <span>Billet Monthly</span>
          <Switch
            style={{ margin: '0 10px', cursor: 'not-allowed' }}
            defaultChecked
            onChange={this.handlePlanChange}
          />
          <span>Billet Annually</span>
        </div>
        <Row gutter={16}>{this.plans.map(plan => this.renderPlan(plan))}</Row>
      </div>
    )
  }

  renderPlan(plan) {
    const heading = this.isSmallScreen ? 'headline5' : 'headline4'
    const {
      title,
      description,
      popular,
      id,
      monthlyPrice,
      yearlyPrice,
      mentoring,
      benefits,
      button,
      color
    } = plan

    const pricePerMonth = parseInt(yearlyPrice / 12).toFixed(0)

    return (
      <Col xl={8} sm={12} xs={24}>
        <Card
          style={{
            margin: '10px',
            position: 'relative',
            overflow: 'hidden',
            minWidth: '325px',
            height: '450px',
            color
          }}
        >
          <div
            style={{
              padding: '30px 30px 0',
              marginTop: '20px',
              height: '200px'
            }}
          >
            <Typography use={heading} tag="h1">
              {title}
            </Typography>
            <p style={{ margin: 0 }}>
              {id === 'free' ? (
                monthlyPrice
              ) : this.state.selectedPlan === 'yearly' ? (
                <React.Fragment>
                  <span style={{ textDecoration: 'line-through' }}>
                    ${monthlyPrice}
                  </span>
                  <span> ${pricePerMonth}</span>
                  <span> per month</span>
                </React.Fragment>
              ) : (
                <span>${monthlyPrice} per month</span>
              )}
            </p>
            {description && <p style={{ margin: 0 }}>{description}</p>}
          </div>
          <List twoLine style={{}} className={'plans-list-wrapper'}>
            {benefits.map(benefit => (
              <SimpleListItem
                style={{ height: '35px', cursor: 'not-allowed' }}
                graphic="done"
                text={`${benefit.text} ${benefit.value}`}
              />
            ))}
            {mentoring && (
              <SimpleListItem
                style={{ height: '35px', cursor: 'not-allowed' }}
                graphic="done"
                text={`Mentoring: ${mentoring}`}
              />
            )}
          </List>
          <CardActions
            style={{
              justifyContent: 'center',
              position: 'absolute',
              alignSelf: 'center',
              bottom: '10px',
              cursor: 'not-allowed'
            }}
          >
            <Button
              onClick={() => {
                return false
              }}
              style={{
                color: button.color,
                height: '50px',
                backgroundColor: button.backgroundColor,
                cursor: 'not-allowed'
              }}
            >
              <ButtonIcon
                icon="credit_card"
                style={{
                  marginLeft: '5px',
                  fontSize: '24px',
                  marginTop: '-8px'
                }}
              />
              <Typography
                use="headline5"
                tag="div"
                style={{
                  textAlign: 'center',
                  color: '#ffffff',
                  padding: '0px 20px 0px 20px'
                }}
              >
                {id === 'free'
                  ? 'Get Started'
                  : this.state.selectedPlan === 'yearly'
                  ? `$${yearlyPrice}`
                  : `$${monthlyPrice}`}
              </Typography>
              <ButtonIcon
                icon="arrow_forward"
                style={{
                  marginLeft: '5px',
                  fontSize: '24px',
                  marginTop: '-8px'
                }}
              />
            </Button>
          </CardActions>
          {popular && <Ribbon>Popular</Ribbon>}
        </Card>
      </Col>
    )
  }

  renderMainContent() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop: '60px',
          alignItems: 'center'
        }}
      >
        {this.renderForm()}
        {this.renderPrices()}
        <Typography
          use="caption"
          tag="div"
          style={{
            textAlign: 'center',
            color: `#546E7A`,
            margin: '20px 0px 60px 0px'
          }}
        >
          Thanks for believing.
        </Typography>
      </div>
    )
  }

  components() {
    return super.components().concat([this.renderMainContent()])
  }
}
