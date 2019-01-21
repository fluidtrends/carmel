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
import { Row, Col, Badge } from 'antd'
import { Button, ButtonIcon } from '@rmwc/button'
import { Icon } from '@rmwc/icon'
import { List, SimpleListItem } from '@rmwc/list'
import Carmel1K from '../functions/1k.json'
import { Data } from 'react-chunky'

export default class EarlyAccessScreen extends Screen {
  constructor(props) {
    super(props)

    this._checkout = this.checkout.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()
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

  renderForm() {
    const width = this.isSmallScreen ? '90vw' : '700px'
    const padding = this.isSmallScreen ? '5px' : '40px'
    const heading = this.isSmallScreen ? 'headline5' : 'headline4'

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
    return <div>aaa</div>
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
        {this.renderPrices()}
        {this.renderForm()}
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
