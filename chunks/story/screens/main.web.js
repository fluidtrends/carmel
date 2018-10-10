import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { LinearProgress } from '@rmwc/linear-progress'
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
} from '@rmwc/card'
import { Typography } from '@rmwc/typography'
import { ListDivider } from '@rmwc/list'

export default class MainStoryScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state, loading: true }
  }

  componentDidMount () {
    super.componentDidMount()
    this.importRemoteData(this.props.index).then(posts => {
      this.setState({ posts, loading: false })
    })
  }

  renderContent () {
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
            <Typography use='title' tag='h1'>
              Loading ... Just a sec.
            </Typography>
            <ListDivider />
            <LinearProgress determinate={false} />
          </Card>
        </div>
      )
    }

    return <Components.Collection id='posts' categories={this.state.posts} />
  }

  components () {
    return [this.renderContent()]
  }
}
