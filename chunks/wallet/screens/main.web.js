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
import { Row, Col } from 'antd'
import { Button, ButtonIcon } from '@rmwc/button'
import { Icon } from '@rmwc/icon'

export default class CreditsScreen extends Screen {

  constructor (props) {
    super(props)
  }

  componentDidMount() {
    super.componentDidMount()

    const checkoutButton = document.querySelector('#checkout-button')
    const self = this

    braintree.dropin.create({
      authorization: 'sandbox_gnt2n6pt_yngf7t22wkqkbp2s',
      container: '#dropin-container'
    }, (e, instance) => {
      checkoutButton.addEventListener('click', function () {
        instance.requestPaymentMethod((error, payload) => {
          self.props.checkout({ paymentMethodNonce: payload.nonce, amount: "1.03da" })
        })
      })
    })
  }

  renderMainContent() {
    return <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%"
    }}>
    <div id="dropin-container"/>
    <Button
      id="checkout-button"
      style={{
        backgroundColor: this.props.theme.primaryColor,
        margin: "10px 0px 30px 0px",
        color: '#ffffff'
      }}>
      <ButtonIcon icon="check_circle" style={{ marginLeft: "5px"}}/>
       Pay Now
      <ButtonIcon icon="arrow_forward" style={{ marginLeft: "5px"}}/>
    </Button>
  </div>
  }

  renderMainContent2() {
    return <Card style={{  margin: "10px" }}>
          <CardPrimaryAction style={{ justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ padding: '10px', marginTop: "20px" }}>
              <Typography use="headline6" tag="h1">
              3333333
              </Typography>
              <Typography
                use="headline7"
                tag="div"
                theme="text-secondary-on-background"
                style={{ margin: '1rem', textAlign: "center" }}>
                    sdfdfsd
              </Typography>
            </div>
            <CardActions style={{ justifyContent: "center" }}>
              <Button
                onClick={this._onCheckout}
                style={{
                  margin: "10px 0px 30px 0px",
                  color: '#ffffff'
                }}>
                <ButtonIcon icon="check_circle" style={{ marginLeft: "5px"}}/>
                ddddd
                <ButtonIcon icon="arrow_forward" style={{ marginLeft: "5px"}}/>
              </Button>
            </CardActions>
          </CardPrimaryAction>
      </Card>
  }

  checkoutOk(data) {
    console.log(data)
  }

  checkoutError(error) {
    console.log(error)
  }

  checkoutOk(data) {
    console.log(data)
  }

  checkoutError(error) {
    console.log(error)
  }

  components () {
    return [this.renderMainContent()]
  }
}
