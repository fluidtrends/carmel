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
import Items from '../data/credits.json'
import braintree from 'braintree-web/client'
import hostedFields from 'braintree-web/hosted-fields'


export default class Credits extends Component {
  constructor (props) {
    super(props)
    this.state = { ...super.state }
  }

  componentDidMount () {
    super.componentDidMount()
  }

  get items() {
    return Items
  }

  renderCard(item) {
    return <Card style={{  margin: "10px" }}>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick"/>
        <input type="hidden" name="hosted_button_id" value={item.paymentId}/>

          <CardPrimaryAction style={{ justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ padding: '10px', marginTop: "20px" }}>
              <Typography use="headline6" tag="h1">
                { item.title }
              </Typography>
              <Typography
                use="headline7"
                tag="div"
                theme="text-secondary-on-background"
                style={{ margin: '1rem', textAlign: "center" }}>
                { item.subtitle }
              </Typography>
            </div>
            <CardActions style={{ justifyContent: "center" }}>
              <Button
                type="submit"
                style={{
                  margin: "10px 0px 30px 0px",
                  color: '#ffffff',
                  backgroundColor: `${item.color}`
                }}>
                <ButtonIcon icon="check_circle" style={{ marginLeft: "5px"}}/>
                { item.action }
                <ButtonIcon icon="arrow_forward" style={{ marginLeft: "5px"}}/>
              </Button>
            </CardActions>
          </CardPrimaryAction>
        </form>
      </Card>
  }

  render() {
    return <div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: this.props.compact ? 'column' : 'row',
        alignItems: 'center'
      }}>
        { this.items.map(item => this.renderCard(item))}
    </div>
  }
}
