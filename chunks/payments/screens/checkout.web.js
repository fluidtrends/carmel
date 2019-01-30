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
import dropin from 'braintree-web-drop-in'
import {
  List,
  SimpleListItem
} from '@rmwc/list'
import { Fab } from '@rmwc/fab'
import { IconButton } from '@rmwc/icon-button'
import { Data } from 'react-chunky'
import { TextField, TextFieldIcon, TextFieldHelperText } from '@rmwc/textfield'
import { Form, Input } from 'antd'
import * as EmailValidator from 'email-validator'
import Carmel1K from '../functions/1k.json'
const FormItem = Form.Item

export default class CreateScreen extends Screen {

  constructor (props) {
    super(props)
    this._makePayment = this.makePayment.bind(this)
    this._reduceQuantity = (item) => this.reduceQuantity.bind(this, item)
    this._increaseQuantity = (item) => this.increaseQuantity.bind(this, item)
    this._goToAccount = this.goToAccount.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()

    this.loadShoppingCart()
  }

  reduceQuantity(item) {
    const cart = Object.assign({}, this.state.cart)
    cart.items[item.id].quantity = cart.items[item.id].quantity - 1
    this.setState({ cart })
  }

  increaseQuantity(item) {
    const cart = Object.assign({}, this.state.cart)
    cart.items[item.id].quantity = cart.items[item.id].quantity + 1
    this.setState({ cart })
  }

  loadShoppingCart() {
    Data.Cache.retrieveCachedItem("__shoppingCart")
              .then((cart) => {
                this.props.getToken()
                this.setState({ cart })
              })
              .catch((error) => {
                this.triggerRedirect("/pricing")
              })
  }

  goToAccount() {
    this.triggerRedirect(this.state.paymentSuccess ? (this.isLoggedIn ? "/me" : "/register") : "/pricing")
  }

  makePayment() {
    this.setState({ paying: true })

    this.state.clientService.requestPaymentMethod((error, response) =>  {
      if (error || !response || !response.nonce) {

        return
      }

      this.props.pay({
        payment: response,
        cart: this.state.cart,
        total: this.totalEuro,
        name: this.isLoggedIn ? this.account.user.name : this.state.name,
        email: this.isLoggedIn ? this.account.user.email : this.state.email
      })
    })
  }

  paymentOk(response) {
    console.log(response)
    //
    // if (!response.ok) {
    //   // this.makePayment()
    //   return
    // }
    // console.log(response)
    //
    // const paymentSuccess = response.data.success
    // const paymentStatus = response.data.status
    //
    // this.setState({ paying: false, paid: true, paymentSuccess, paymentStatus })
  }

  paymentError(error) {
    // this.makePayment()
  }

  gotToken(response) {
    var button = document.querySelector('#pay-button')

    if (!response || !response.data || !response.data.clientToken) {
      this.props.getToken()
      return
    }

    const clientToken = response.data.clientToken
    const carmel1K = response.data.Carmel1K

    if (carmel1K.item.id !== Carmel1K.item.id ||
       carmel1K.item.price !== Carmel1K.item.price) {
       this.triggerRedirect("/pricing")
       return
    }

    dropin.create({
      authorization: clientToken,
      container: '#dropin-container'
    }, (createErr, clientService)  => {
      this.setState({ clientToken,  clientService })
    })
  }

  tokenError(error) {
    console.log(error)
    // this.props.getToken()
  }

  get totalEuro() {
    var t = 0
    Object.keys(this.state.cart.items).map(i => t = t + this.state.cart.items[i].price * this.state.cart.items[i].quantity)
    return t
  }

  get total() {
    return `€${this.totalEuro.toLocaleString("en")}`
  }

  renderPaymentGuestFields() {
    if (!this.state.clientToken || this.isLoggedIn) {
      return <div/>
    }

    return <div style={{
      border: "1px solid #a7a7a7",
      padding: "15px"
    }}>
    <Input
      style={{ height: '48px', marginBottom: "10px" }}
      value={this.state.name}
      onChange={val => this.setState({ name: val.target.value, error: '' })}
      onKeyPress={this.onKeyPress}
      placeholder="Your Name" />
    <Input
      style={{ height: '48px' }}
      value={this.state.email}
      onChange={val => this.setState({ email: val.target.value, error: '' })}
      onKeyPress={this.onKeyPress}
      placeholder="Your Email Address" />
    </div>
  }

  renderPaymentButton() {
    if (!this.state.clientToken) {
      return <div/>
    }

    return <Button id="pay-button"
        onClick={this._makePayment}
        disabled={!this.isLoggedIn && (!this.state.name || !this.state.email || !EmailValidator.validate(this.state.email))}
        raised style={{
          margin: "20px 0px 10px 0px",
          height: "50px",
          width: "100%"
        }}>
        <ButtonIcon icon="check_circle"/> Pay {this.total} Now
    </Button>
  }

  renderPaymentForm() {
    if (this.state.paid) {
      const action = this.state.paymentSuccess ? (this.isLoggedIn ? "Go To Your Account" : "Get A Carmel Account") : "Try again"

      return <div>
       <Button
          onClick={this._goToAccount}
          raised style={{
            margin: "20px 0px 10px 0px",
            height: "50px",
            width: "100%"
          }}>
          { action }
      </Button>
      </div>
    }

    if (this.state.paying) {
      return <div>
      <Components.Loading />
        <div id="dropin-container" style={{ opacity: 0 }}/>
      </div>
    }

    return <div>
      { this.renderPaymentGuestFields() }
      <div id="dropin-container"/>
      { this.renderPaymentButton() }
    </div>
  }

  renderItemLine(item) {
    return [<div key={item.id} style={{
      display: "flex",
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
      alignItems: "center"
    }}>
      <Typography use="headline6" tag="div" style={{color: "#333333", marginLeft: "10px", flex: 1}}>
        { item.name }
      </Typography>
      <IconButton icon="remove"
                  disabled={item.quantity < 2}
                  onClick={this._reduceQuantity(item)}
                  style={{color: "#eeeeee" }}/>
      <Typography use="headline6" tag="div">
        { item.quantity }
      </Typography>
      <IconButton icon="add"
                  onClick={this._increaseQuantity(item)}
                  style={{color: "#333333"}}/>
      <Typography use="headline6" tag="div" style={{color: "#333333", textAlign: "right", marginLeft: "10px", flex: 1}}>
        €{(item.price * item.quantity).toLocaleString("en")}
      </Typography>
    </div>,
    item.prompt && <Typography
      use="caption"
      tag="div"
      style={{
        textAlign: "center",
        color: `#546E7A`,
        padding: "5px",
        backgroundColor: "#FFF9C4"}}>
        { item.prompt }
    </Typography>]
  }

  renderPaymentItems() {
    if (this.state.paying || this.state.paid) {
      return <div/>
    }

    const padding = this.isSmallScreen ? "5px" : "40px"

    return <div style={{
      padding,
      display: "flex",
      width: "100%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderTop: "1px solid #eeeeee",
      borderBottom: "1px solid #eeeeee"
    }}>
      {Object.keys(this.state.cart.items).map(item => this.renderItemLine(this.state.cart.items[item]))}
    </div>
  }


  renderPayment() {
    const width = this.isSmallScreen ? "90vw" : "750px"
    const heading = this.isSmallScreen ? "headline5" : "headline4"
    const title = this.state.paid ? (this.state.paymentSuccess ? "Welcome to the #Carmel1K Club" : "Your payment did not go through :(") : "Finish Your Purchase"
    const subtitle = this.state.paid ? (this.state.paymentSuccess ? "Thanks for joining the Carmel Mission" : this.state.paymentStatus) : "Oh you're so close - almost there"

    return <Card style={{ margin: "10px", width }}>
        <div style={{ padding: '30px', marginTop: "20px" }}>
          <Typography use={heading} tag="h1">
          { title }
          </Typography>
          <Typography
            use="headline6"
            tag="h2"
            theme="text-secondary-on-background"
            style={{ margin: '1rem', textAlign: "center" }}>
            {subtitle}
          </Typography>
        </div>
        { this.renderPaymentItems() }
        <CardActions style={{ justifyContent: "center", padding: "40px" }}>
          { this.renderPaymentForm() }
        </CardActions>
    </Card>
  }

  renderNoCart() {
    return <Components.Loading/>
  }


  renderMainContent() {
    return <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginTop: "60px",
      alignItems: "center"
    }}>
      { !this.state.cart ? this.renderNoCart() : this.renderPayment() }
    </div>
  }

  components () {
    return super.components().concat([this.renderMainContent()])
  }
}
