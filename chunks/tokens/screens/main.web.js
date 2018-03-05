import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import {
  Card,
  CardMedia,
  CardMediaItem,
  CardPrimary,
  CardTitle,
  CardActions,
  CardActionButtons,
  CardAction,
  CardPrimaryAction,
  CardActionIcons,
  CardSubtitle,
  CardSupportingText,
  CardHorizontalBlock
} from 'rmwc/Card'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Typography } from 'rmwc/Typography'
import { FormField } from 'rmwc/FormField'
import { Chip, ChipText, ChipIcon, ChipSet } from 'rmwc/Chip'
import {
  ListDivider
} from 'rmwc/List'
import { Fab } from 'rmwc/Fab'
import { Icon } from 'rmwc/Icon'
export default class MainTokensScreen extends Screen {

  constructor (props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount () {
    super.componentDidMount()

    if (this.isLoggedIn) {
      this.triggerRedirect(`/me/levelup`)
    }
  }

  renderAction () {
    const width = this.props.compact ? '95vw' : '600px'

    return <div style={{ display: 'flex', flex: 1, margin: '10px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} >
      <Card style={{width, margin: '10px', padding: '0px'}} >
        <Typography
          use='title'
          tag='div'
          style={{padding: '0.5rem 1rem', textAlign: 'center', padding: '20px'}}
          theme='text-secondary-on-background'>
            Sign In To Level Up Your Carmel Account
          </Typography>

        <ListDivider style={{marginBottom: '20px'}} />

        <Typography use='headline' tag='h1'>
          <div>
            <CardActions style={{
              justifyContent: 'center',
              marginTop: '0px'}}>
              <CardActionButtons>
                <Button
                  onClick={() => this.triggerRedirect(`/me/levelup`)}
                  raised
                  theme='secondary-bg text-primary-on-secondary'
                  style={{margin: '20px'}}>
                Sign In To Level Up
                </Button>
              </CardActionButtons>
            </CardActions>
          </div>
        </Typography>
      </Card>
    </div>
  }

  get features () {
    return ([this.renderAction()])
  }

  components () {
    return super.components()
          .concat(this.features)
  }
}
