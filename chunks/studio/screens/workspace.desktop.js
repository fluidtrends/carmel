import React from 'react'
import { Data } from 'react-chunky'
import Screen from './base.desktop'
import { Typography } from '@rmwc/typography'
import { Button, ButtonIcon } from '@rmwc/button'
import { Icon } from '@rmwc/icon'
import { Spring } from 'react-spring'
import Browser from '../components/browser'
import Challenges from '../components/challenges'
import Challenge from '../components/challenge'
import Wobble from 'react-reveal/Wobble'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import RubberBand from 'react-reveal/RubberBand'
import Zoom from 'react-reveal/Zoom'
import Pulse from 'react-reveal/Bounce'
import { notification } from 'antd'

export default class Workspace extends Screen {
  constructor (props) {
    super(props)

    this.state = { ...super.state }
    this._onSelectChallenge = this.onSelectChallenge.bind(this)
    this._onBuyChallenge = this.onBuyChallenge.bind(this)
    this._onStartChallenge = this.onStartChallenge.bind(this)
    this._onTaskCompleted = this.onTaskCompleted.bind(this)
    this._onChallengeCompleted = this.onChallengeCompleted.bind(this)
    this._onChallengeRated = this.onChallengeRated.bind(this)
    this._onStopChallenge = this.onStopChallenge.bind(this)
    this._onUnselectChallenge = this.onUnselectChallenge.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()

    Data.Cache.retrieveCachedItem('product')
              .then((data) => { this.changeProduct(data.id, true) })
              .catch(() => { this.changeProduct(this.product.id, true) })
  }

  onSelectChallenge ({ challengeId }) {
    this.setState({ challengeId })
  }

  onBuyChallenge (challenge) {
    if (!this.isLoggedIn) {
      this.triggerRedirect('/login')
      return
    }

    const { level, author } = this.challenge
    this.setState({ inProgress: true, progressMessage: 'Transferring Tokens ...' })

    this.props.sendTokens({
      amount: this.calculatePrice(level),
      to: author.id,
      type: 'challengePurchase',
      data: {
        challengeId: this.state.challengeId
      }
    })
  }

  onStartChallenge ({ challengeId }) {
  }

  onTaskCompleted ({ taskIndex, challengeId }) {
  }

  onChallengeCompleted ({ challengeId }) {
  }

  onChallengeRated ({ challengeId, rating }) {
  }

  onStopChallenge ({ challengeId }) {
  }

  onUnselectChallenge () {
    this.setState({ challengeId: '' })
  }

  changeProduct (productId, refresh) {
    if (refresh) {
      this.setState({
        productId,
        primaryView: 'workspace',
        productStarting: true,
        productStarted: false,
        inProgress: true,
        progressMessage: 'Preparing Your Product Workspace. Just a sec, please ...'
      })
      this.startProduct(productId)
      this.syncSession()
      return
    }

    Data.Cache.cacheItem('product', { id: productId }).then((data) => {
      this.shell.cache('productId', productId)
      this.setState({
        productId,
        productStarting: true,
        productStarted: false,
        inProgress: true,
        progressMessage: 'Preparing Your Product Workspace. Just a sec, please ...'
      })
      this.startProduct(productId)
    })
  }

  calculatePrice (level) {
    const rate = 1
    const factor = 5
    const precision = 2
    const price = (level + 1) * factor * rate
    return price.toFixed(precision)
  }

  tokensSent (response) {
    if (response && response.data && response.data.error) {
      notification.error({ message: response.data.error })
      this.setState({ inProgress: false })
      return
    }

    this.setState({ inProgress: false })
    this.syncSession()
  }

  failedToSendTokens (error) {
    notification.error({ message: error.message })
    this.setState({ inProgress: false })
  }

  onSelectChallenge ({ challengeId }) {
    this.setState({ challengeId })
  }

  startProduct (productId) {
    this.shell.exec('startProduct', { id: productId }, (compilation) => {
      if (compilation.compiled && !this.state.productStarted) {
        this.setState({ compilation, productStarted: true, inProgress: false, productStarting: false })
        return
      }

      this.setState({ compilation })
    })
    .then(({ files, dir, port }) => {
      this.setState({ files, dir, port })
    })
    .catch((error) => {
      const compilation = {
        compiled: true,
        compiling: false,
        errors: [error.message]
      }
      this.setState({ compilation, productStarted: true, inProgress: false, productStarting: false })
    })
  }

  get challengesTitle () {
    return 'Challenges'
  }

  get challengesIcon () {
    return 'landscape'
  }

  get isSecondary () {
    return false
  }

  get screenTitle () {
    const menuItem = this.sideMenuItem
    return (this.state.primaryView ? (menuItem ? menuItem.title : this.challengesTitle) : super.screenTitle)
  }

  get screenIcon () {
    const menuItem = this.sideMenuItem
    return (this.state.primaryView ? (menuItem ? menuItem.icon : this.challengesIcon) : super.screenIcon)
  }

  get sideMenuItem () {
    return this.menus.side.find(i => i.id === this.state.primaryView)
  }

  renderDefaultPrimaryView () {
    if (this.state.productStarted) {
      return <Browser
        cache={this.cache}
        status={this.productStatus}
        product={this.product}
        port={this.state.port} />
    }

    return <div>
      <Typography use='overline' style={{
        display: 'flex',
        color: 'rgba(0, 16, 31, 1)',
        flex: 1
      }}>
        { this.product.name } is not ready yet.
      </Typography>
    </div>
  }

  // renderScreenTray () {
  //   if (!this.state.showChallenges) {
  //     if (typeof this.state.showChallenges === 'undefined') {
  //       return <Wobble duration={800} delay={800}>
  //         <RubberBand duration={800} delay={1600}>
  //           <Button onClick={() => this.setState({ showChallenges: true })} style={{
  //             color: '#ffffff',
  //             backgroundColor: this.props.theme.primaryColor
  //           }}>
  //             <Icon icon={'play_circle_filled'} style={{ marginRight: '5px' }} />
  //             {`Take a challenge`}
  //           </Button>
  //         </RubberBand>
  //       </Wobble>
  //     }
  //     return <Button onClick={() => this.setState({ showChallenges: true })} style={{
  //       color: '#ffffff',
  //       backgroundColor: this.props.theme.primaryColor
  //     }}>
  //       <Icon icon={'play_circle_filled'} style={{ marginRight: '5px' }} />
  //       {`Take a challenge`}
  //     </Button>
  //   }
  //
  //   return <div style={{
  //     margin: 0,
  //     display: 'block',
  //     overflow: 'scroll',
  //     width: '100%',
  //     flexDirection: 'column',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     textAlign: 'center'
  //   }}>
  //     <Bounce bottom duration={500} delay={100}>
  //       { this.renderScreenTrayContents() }
  //     </Bounce>
  //   </div>
  // }

  // renderScreenTrayHeader () {
  //   if (!this.state.showChallenges) {
  //     return <div />
  //   }
  //
  //   return <Zoom top delay={100} duration={500}>
  //     <div style={{
  //       display: 'flex',
  //       flexDirection: 'row',
  //       width: '100%',
  //       margin: '20px',
  //       padding: '20px'
  //     }}>
  //       <Typography use='headline5' style={{
  //         display: 'flex',
  //         flex: 1,
  //         paddingLeft: '20px',
  //         alignSelf: 'flex-start',
  //         textAlign: 'center',
  //         color: '#FFFFFF'
  //       }}>
  //       Select a challenge:
  //     </Typography>
  //       <Button onClick={() => this.setState({ showChallenges: false })} style={{
  //         color: '#ffffff',
  //         display: 'flex',
  //         alignSelf: 'flex-end'
  //       }}>
  //         <Icon icon={'cancel'} />
  //       </Button>
  //     </div>
  //   </Zoom>
  // }

  // renderScreenFooter () {
  //   if (this.state.primaryView && this.state.primaryView !== 'workspace') {
  //     return <div />
  //   }
  //
  //   return <div
  //     onClick={() => this.setState({ showChallenges: !this.state.showChallenges })}
  //     style={{
  //       margin: 0,
  //       padding: 0,
  //       height: this.state.showChallenges ? `${this.height - 75}px` : '60px',
  //       width: `${this.width - (this.state.sideMenuExpanded ? 240 : 100)}px`,
  //       display: 'flex',
  //       backgroundColor: this.state.showChallenges ? `rgba(0, 16, 31, 1)` : 'rgba(101, 125, 139, 0)',
  //       flexDirection: 'column',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       position: 'absolute',
  //       bottom: this.state.showChallenges ? '0px' : '10px',
  //       right: '10px',
  //       boxShadow: '10px #455A64'
  //     }}>
  //     { this.renderScreenTrayHeader() }
  //     { this.renderScreenTray() }
  //   </div>
  // }

  get challenges () {
    return this.props.session.challenges.map(challenge => {
      const newChallenge = Object.assign({}, challenge, this.state.userChallenges && this.state.userChallenges[challenge.id] && { history: this.state.userChallenges[challenge.id] })
      return newChallenge
    })
  }

  get challenge () {
    return this.challenges.find(c => this.state.challengeId === c.id)
  }

  renderFilesPrimaryView () {
    return this.renderScreenContentsContainer(this.renderScreenMainMessage({
      message: 'No files yet.'
    }))
  }

  renderSettingsPrimaryView () {
    return this.renderScreenContentsContainer(this.renderScreenMainMessage({
      message: 'No settings yet.'
    }))
  }

  renderLivePrimaryView () {
    return this.renderScreenContentsContainer(this.renderScreenMainMessage({
      message: 'Not published yet.'
    }))
  }

  renderChallenges () {
    if (this.state.challengeId) {
      return this.renderScreenContentsContainer(<Challenge
        onSelectChallenge={this._onSelectChallenge}
        onBuyChallenge={this._onBuyChallenge}
        onStartChallenge={this._onStartChallenge}
        onTaskCompleted={this._onTaskCompleted}
        onChallengeCompleted={this._onChallengeCompleted}
        onChallengeRated={this._onChallengeRated}
        onStopChallenge={this._onStopChallenge}
        account={this.account}
        product={this.product}
        onBack={this._onUnselectChallenge}
        challenge={this.challenge} />)
    }

    return this.renderScreenContentsContainer(<Challenges
      challenges={this.challenges}
      onSelectChallenge={this._onSelectChallenge} />)
  }

  renderScreenContents () {
    switch (this.state.primaryView) {
      case 'files':
        return this.renderFilesPrimaryView()
      case 'settings':
        return this.renderSettingsPrimaryView()
      case 'live':
        return this.renderLivePrimaryView()
      case 'challenges':
        return this.renderChallenges()
      default:
    }

    return <div style={{
      height: '100%'
    }}>
      { this.renderDefaultPrimaryView() }
    </div>
  }
}
