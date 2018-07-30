import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { LinearProgress } from 'rmwc/LinearProgress'
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
import { Typography } from 'rmwc/Typography'
import { ListDivider } from 'rmwc/List'
import { SpecialButton } from '../components'

export default class MainChallengesScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = { ...this.state, loading: true }
  }

  componentDidMount() {
    super.componentDidMount()
    this.importRemoteData(this.props.index).then(challenges => {
      this.setState({
        challenges,
        loading: false
      })
    })
  }

  get specialButton() {
    return (<SpecialButton onAction={() => { this.triggerRawRedirect('https://t.me/carmelplatform') }} />)
  }
  
  renderContent() {
    if (this.state.loading) {
      const width = '100%'
      return (
        <div
          style={{
            display: 'flex',
            flex: 1,
            margin: '10px',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Card style={{ width, margin: '20px', padding: '0px' }}>
            <Typography use="title" tag="h1">
              Loading ... Just a sec.
            </Typography>
            <ListDivider />
            <LinearProgress determinate={false} />
          </Card>
        </div>
      )
    }

    return (
      <Components.Collection
        id="challenges"
        type="challenges"
        categories={this.state.challenges}
      />
    )
  }

  components() {
    return [this.renderContent()]
    .concat([this.specialButton])
  }
}
