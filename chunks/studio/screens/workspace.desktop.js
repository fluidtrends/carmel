import React from 'react'
import { Data } from 'react-chunky'
import Screen from './base.desktop'
import { Typography } from '@rmwc/typography'
import { Button, ButtonIcon } from '@rmwc/button'
import { Icon } from '@rmwc/icon'
import { Spring } from 'react-spring'
import Browser from '../components/browser'
import Challenge from '../components/challenge'
import Explorer from '../components/explorer'
import Challenges from '../components/challenges'
import Editor from '../components/editor'
import Live from '../components/live'
import Wobble from 'react-reveal/Wobble'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import RubberBand from 'react-reveal/RubberBand'
import Zoom from 'react-reveal/Zoom'
import Pulse from 'react-reveal/Bounce'
import { notification } from 'antd'
import * as Stages from '../functions/stages'

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
    this._onFileOpen = this.onFileOpen.bind(this)
    this._onFileClose = this.onFileClose.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()

    Data.Cache.retrieveCachedItem('openFiles').then((openFiles) => {
      this.setState({ openFiles })
    })

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
    this.syncSession({ stage: Stages.CHALLENGE_STARTED, challengeId })
  }

  onTaskCompleted ({ taskIndex, challengeId }) {
    this.syncSession({ stage: Stages.TASK_COMPLETED, challengeId, taskIndex })
  }

  onChallengeCompleted ({ challengeId }) {
    this.syncSession({ stage: Stages.CHALLENGE_COMPLETED, challengeId })
  }

  onChallengeRated ({ challengeId, rating }) {
    this.syncSession({ stage: Stages.CHALLENGE_RATED, challengeId, rating })
  }

  onStopChallenge ({ challengeId }) {
    this.syncSession({ stage: Stages.CHALLENGE_STOPPED, challengeId })
  }

  onUnselectChallenge () {
    this.setState({ challengeId: '' })
  }

  onFileOpen (file) {
    const openFiles = Object.assign({}, this.openFiles, { [file]: true })

    Data.Cache.cacheItem('openFiles', openFiles).then((data) => {
      this.setState({ openFiles, primaryView: 'workspace' })
    })
  }

  onFileClose (file) {
    const openFiles = Object.assign({}, this.openFiles)
    delete openFiles[file]

    Data.Cache.cacheItem('openFiles', openFiles).then((data) => {
      this.setState({ openFiles })
    })
  }

  get openFiles () {
    return this.state.openFiles || {}
  }

  get hasOpenFiles () {
    return this.openFiles && Object.keys(this.openFiles).length > 0
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

    Data.Cache.clearCachedItem('openFiles')
    .then(() => Data.Cache.cacheItem('product', { id: productId }).then((data) => {
      this.shell.cache('productId', productId)
      this.setState({
        productId,
        openFiles: {},
        productStarting: true,
        productStarted: false,
        inProgress: true,
        progressMessage: 'Preparing Your Product Workspace. Just a sec, please ...'
      })
      this.startProduct(productId)
    }))
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
    return this.renderScreenContentsContainer(
      <Explorer
        onFileOpen={this._onFileOpen}
        dir={this.state.dir}
        files={this.state.files}
      />)
  }

  renderSettingsPrimaryView () {
    return this.renderScreenContentsContainer(this.renderScreenMainMessage({
      message: 'No settings yet.'
    }))
  }

  renderLivePrimaryView () {
    const hide = (this.state.primaryView !== "live")

    return <div
      key='overlayLive'
      style={{
        position: 'absolute',
        right: '10px',
        bottom: '10px',
        left: this.state.sideMenuExpanded ? '230px' : '90px',
        top: '74px',
        zIndex: hide ? -10 : 15
      }}>
        { this.renderScreenContentsContainer(<Live
          productId={this.product.id}
          settings={this.props.session.settings}/>) }
    </div>
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

  renderDefaultSideView () {
    if (!this.hasOpenFiles) {
      return <div />
    }

    return <div style={{
      marginRight: '10px',
      flex: 1,
      maxWidth: '35vw'
    }}>
      <Editor
        onFileClose={this._onFileClose}
        key={'editor'}
        files={this.openFiles}
      />
    </div>
  }

  renderOverlay () {
    switch (this.state.primaryView) {
      case 'files':
        return this.renderFilesPrimaryView()
      case 'settings':
        return this.renderSettingsPrimaryView()
      case 'challenges':
        return this.renderChallenges()
      default:
    }

    return <div />
  }


  renderScreenContents () {
    return [<div
      key='main'
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
      }}>
      { this.renderDefaultSideView() }
      <div style={{
        flex: 1
      }}>
        { this.renderDefaultPrimaryView() }
      </div>
    </div>, this.state.primaryView !== 'workspace' &&
      <div
        key='overlay'
        style={{
          position: 'absolute',
          right: '10px',
          bottom: '10px',
          left: this.state.sideMenuExpanded ? '230px' : '90px',
          top: '74px',
          zIndex: 10
        }}>
        {
          this.renderOverlay()
        }
      </div>,
      this.renderLivePrimaryView()]
  }
}
