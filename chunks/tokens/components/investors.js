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
import Items from '../data/items.json'

export default class Investors extends Component {
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
    return <Card style={{ margin: "10px", minWidth: "300px" }} onClick={() => this.props.onAction(item)}>
        <CardPrimaryAction>
          <CardMedia
            sixteenByNine
            style={{
              backgroundImage: `url(${item.image})`
            }}
          />
          <div style={{ padding: '10px' }}>
            <Typography use="headline5" tag="h1">
              { item.title }
            </Typography>
            <Typography
              use="headline6"
              tag="h2"
              theme="text-secondary-on-background"
              style={{ margin: '1rem', textAlign: "center" }}>
              { item.subtitle }
            </Typography>
          </div>
        </CardPrimaryAction>
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            onClick={() => this.props.onAction(item)}
            style={{
              marginTop: "10px",
              color: '#ffffff',
              backgroundColor: `${item.color}`
            }}>
            <ButtonIcon icon="credit_card" style={{ marginLeft: "5px"}}/>
            Buy Carmel Credits Now
            <ButtonIcon icon="arrow_forward" style={{ marginLeft: "5px"}}/>
          </Button>
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
            { item.prompt }
          </Typography>
        </CardActions>
      </Card>
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
    </div>
  }

  render () {
    return this.props.compact ? this.renderCompact() : this.renderDefault()
  }
}
