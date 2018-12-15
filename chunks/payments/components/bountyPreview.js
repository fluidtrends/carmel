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
import { Icon } from '@rmwc/icon'
import Fade from 'react-reveal/Fade'

export default class BountyPreview extends Component {
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


  render() {
    const width = this.props.compact ? "90vw" : "500px"
    const image = this.props.bounty.imageSmall
    const title = this.props.bounty.title

    return <Fade>
      <Card style={{ margin: "20px", width }} onClick={() => {}}>
        <CardPrimaryAction style={{ justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <CardMedia
            sixteenByNine
            style={{
              width: "100%",
              backgroundImage:`url(${image})`
            }}
          />
          <div style={{ padding: '20px' }}>
            <Typography use="headline5" tag="div" style={{
              color: '#263238',
              margin: "0px 0px 10px 0px"
            }}>
              { title }
            </Typography>
          </div>
        </CardPrimaryAction>
      </Card>
    </Fade>
  }
}
