import React from 'react'
import { Screen } from 'react-dom-chunky'
import { Picker } from '../components'
import { LinearProgress } from 'rmwc/LinearProgress'
import {
  Card,
  CardActions,
  CardActionButtons
} from 'rmwc/Card'
import { Button } from 'rmwc/Button'
import { Typography } from 'rmwc/Typography'
import { ListDivider } from 'rmwc/List'

export default class MainTokensScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount () {
    super.componentDidMount()

    if (this.isLoggedIn) {
      this.triggerRedirect(`/me/tokens`)
    }
  }

  components () {
    return []
  }
}
