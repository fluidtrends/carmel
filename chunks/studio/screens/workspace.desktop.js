import React from 'react'
import { Component, Components, Screen } from 'react-dom-chunky'
import { Form, Icon, Row, Col, List, Collapse, Alert, Layout, Breadcrumb, Dropdown, Avatar, Menu, Tabs, notification } from 'antd'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Fab } from 'rmwc/Fab'
import { Elevation } from 'rmwc/Elevation'
import fs from 'fs-extra'
import path from 'path'
import { Parallax } from 'react-spring'
import { Typography } from 'rmwc/Typography'
import { Data } from 'react-chunky'
import PopupMessage from '../components/popup'
import Shell from '../components/shell'
import Challenge from '../components/challenge'
import Challenges from '../components/challenges'
import Browser from '../components/browser'
import Explorer from '../components/explorer'
import Task from '../components/task'
import Prompt from '../components/prompt'
import WorkspaceContent from '../components/workspaceContent'
import * as Stages from '../functions/stages'
import moment from 'moment'
import SlidingPane from 'react-sliding-pane'
import {
  Drawer,
  DrawerHeader,
  DrawerContent,
  DrawerTitle,
  DrawerScrim,
  DrawerSubtitle
} from 'rmwc/Drawer'
import { remote } from 'electron'
import { Flipper, Flipped } from 'react-flip-toolkit'

const { Sider, Content, Footer } = Layout
const { SubMenu } = Menu
const TabPane = Tabs.TabPane
const Panel = Collapse.Panel

const FormItem = Form.Item
const HOME = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']
const CARMEL_HOME = path.resolve(HOME, '.carmel')
const LIGHT_START = false

export default class Workspace extends Screen {
  constructor (props) {
    super(props)

    this.state = { }
    this._shell = new Shell()
    this._onProductOption = this.onProductOption.bind(this)
    this._onScreenChanged = this.onScreenChanged.bind(this)
    this._onTogglePreview = this.onTogglePreview.bind(this)
    this._onSelectChallenge = this.onSelectChallenge.bind(this)
    this._onStartChallenge = this.onStartChallenge.bind(this)
    this._onStopChallenge = this.onStopChallenge.bind(this)
    this._onUnselectChallenge = this.onUnselectChallenge.bind(this)
    this._onShowTask = this.onShowTask.bind(this)
    this._onTaskCompleted = this.onTaskCompleted.bind(this)
    this._onChallengeCompleted = this.onChallengeCompleted.bind(this)
    this._onChallengeRated = this.onChallengeRated.bind(this)
    this._onHideTask = this.onHideTask.bind(this)
    this._onShowCompileErrors = this.onShowCompileErrors.bind(this)
    this._onBuyChallenge = this.onBuyChallenge.bind(this)
    this._onPublishProduct = this.onPublishProduct.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
    this.start()
  }

  get shell () {
    return this._shell
  }

  get products () {
    return this.props.session.products
  }

  get product () {
    return this.state.product || this.props.session.product
  }

  onShowAccountScreen () {
    this.triggerRedirect(this.isLoggedIn ? '/me' : '/login')
  }

  onShowCommunityScreen () {
    this.triggerRedirect('/community')
  }

  onShowBountiesScreen () {
    this.triggerRedirect('/bounties')
  }

  onShowTask () {
    this.setState({ enableTabs: true })
  }

  onHideTask () {
    this.setState({ enableTabs: false })
  }

  controllerMessage (options) {
    switch (options.type) {
      case 'bonus':
        return `You just unlocked ${options.tokens} CARMEL tokens! ${options.reason}`
      default:
        return `You're awesome`
    }
  }

  get challenges () {
    return this.props.session.challenges.map(challenge => {
      const newChallenge = Object.assign({}, challenge, this.state.userChallenges && this.state.userChallenges[challenge.id] && { history: this.state.userChallenges[challenge.id] })
      return newChallenge
    })
  }

  get challenge () {
    const id = this.state.challengeId
    return this.challenges.find(c => id === c.id)
  }

  updateLocalSession (data) {
    const { challenges, controller, challengeId } = data
    const userChallenges = Object.assign({}, challenges)

    if (!controller) {
      this.setState({ userChallenges, challengeId })
      return
    }

    switch (controller.type) {
      case 'achievement':
        const achievement = controller.achievement
        const popupButtonTitle = 'Continue'
        const popupTitle = 'Congratulations'
        const popupIcon = achievement.type === 'bonus' ? 'tokens' : 'cup'
        const popupMessage = this.controllerMessage(achievement)

        this.setState(Object.assign({}, { userChallenges, challengeId, showPopup: true, popupIcon, popupButtonTitle, popupMessage, popupTitle }))
        break
      default:
    }
  }

  sessionSynced (response) {
    if (!response || !response.data) {
      return
    }

    this.updateLocalSession(response.data)
  }

  failedToSyncSession (error) {
    console.log('failedToSyncSession', error)
  }

  onPublishProduct () {
    this.setState({ productPublishing: true, preview: false })
    this.shell.exec('publishProduct', { id: this.product.id, domain: 'idancali.com' }, ({ status }) => {
      this.setState({ productPublishingStatus: status })
    })
    .then((data) => {
      this.setState({ productPublishing: false, productPublished: true, productPublishingTimestamp: Date.now() })
    })
    .catch((error) => {
      this.setState({ productPublishing: false, productPublished: false, productPublishingError: error })
    })
  }

  startProduct () {
    this.shell.exec('startProduct', { id: this.product.id, light: LIGHT_START }, (compilation) => {
      if (compilation.compiled && !this.state.productStarted) {
        this.setState({ compilation, productStarted: true, productStarting: false })
        return
      }

      this.setState({ compilation })
    })
    .then(({ files, dir, port }) => {
      if (LIGHT_START) {
        this.setState({ files, dir, port, productStarted: true, productStarting: false })
        return
      }
      this.setState({ files, dir, port })
    })
    .catch((error) => {
      const compilation = {
        compiled: true,
        compiling: false,
        errors: [error.message]
      }
      this.setState({ compilation, productStarted: true, productStarting: false })
    })
  }

  syncSession (data) {
    const request = Object.assign({},
      { machineId: this.props.session.machineId,
        machineFingerprint: this.props.session.machineFingerprint,
        stage: Stages.WORKSPACE,
        challengeId: ''
      },
      data)

    this.props.syncSession(request)
  }

  start () {
    this.setState({ productStarting: true, productStarted: false })
    this.syncSession()
    return this.startProduct()
  }

  onScreenChanged (type) {
    switch (type) {
      case 'community':
        this.triggerRedirect('/community')
        break
      case 'bounties':
        this.triggerRedirect('/bounties')
        break
      case 'settings':
        this.triggerRedirect('/me')
        break
      default:
    }
  }

  showFileBrowser () {
    remote.dialog.showOpenDialog({
      defaultPath: this.state.dir,
      properties: ['openFile']
    }, (files) => {
      if (!files || files.length < 1) {
        return
      }
      const relative = path.relative(this.state.dir, files[0])
      const isOk = !relative.startsWith('..')

      if (!isOk) {
        return
      }

      this.setState({ lastOpenedFile: files[0] })
    })
  }

  onProductOption (type) {
    switch (type) {
      case 'publishProduct':
        this.onPublishProduct()
        break
      case 'switchProduct':
        // this.triggerRedirect('/new')
        break
      case 'openFile':
        this.showFileBrowser()
        break
      case 'editSettings':
        break
      default:
    }
  }

  onTogglePreview (preview) {
    this.setState({ preview })
  }

  onSelectChallenge ({ challengeId }) {
    this.setState({ challengeId })
  }

  onTaskCompleted ({ taskIndex, challengeId }) {
    this.syncSession({ stage: Stages.TASK_COMPLETED, challengeId })
  }

  onChallengeCompleted ({ challengeId }) {
    this.syncSession({ stage: Stages.CHALLENGE_COMPLETED, challengeId })
  }

  onChallengeRated ({ challengeId, rating }) {
    this.syncSession({ stage: Stages.CHALLENGE_RATED, challengeId, rating })
  }

  onStartChallenge ({ challengeId }) {
    this.syncSession({ stage: Stages.CHALLENGE_STARTED, challengeId })
  }

  onStopChallenge ({ challengeId }) {
    this.syncSession({ stage: Stages.CHALLENGE_STOPPED, challengeId })
  }

  onUnselectChallenge () {
    this.syncSession({ stage: Stages.CHALLENGE_CANCELLED })
    this.setState({ challengeId: '' })
  }

  onShowCompileErrors () {
    console.log(this.state.compilation.errors)
  }

  get productStatus () {
    const isStarting = (this.state.productStarting && !this.state.productStarted)
    const isStarted = (!this.state.productStarting && this.state.productStarted)
    const isPublishing = (this.state.productPublishing)
    const isPublished = (!this.state.productPublishing && this.state.productPublished)

    const isCompiling = (isStarted && this.state.compilation && !this.state.compilation.compiled && this.state.compilation.compiling)
    const isCompiled = (isStarted && this.state.compilation && this.state.compilation.compiled && !this.state.compilation.compiling)
    const isCompiledWithErrors = (isCompiled && this.state.compilation.errors && this.state.compilation.errors.length > 0)
    const isCompiledWithoutErrors = (isCompiled && (!this.state.compilation.errors || this.state.compilation.errors.length === 0))

    const status = {
      isStarting,
      isPublishing,
      isStarted,
      isCompiling,
      isCompiled,
      isCompiledWithErrors,
      isCompiledWithoutErrors
    }

    return status
  }

  renderProductStatusPrompt () {
    const status = this.productStatus

    var alertMessage = `The product is starting ...`

    var successColor = '#81C784'
    var progressColor = '#90CAF9'
    var successBackgroundColor = '#FAFAFA'
    var progressBackgroundColor = '#FFFDE7'

    var successIcon = <Icon type='check-circle' style={{ marginRight: '10px', color: successColor }} />
    var progressIcon = <Icon type='hourglass' spin style={{ marginRight: '10px', color: progressColor }} />

    var icon = progressIcon
    var color = progressColor
    var backgroundColor = progressBackgroundColor

    if (status.isPublishing) {
      alertMessage = `${this.state.productPublishingStatus || 'Getting ready to publish your product ...'}`
    } else if (status.isCompiling) {
      alertMessage = 'Applying changes to your product ...'
    } else if (status.isCompiledWithoutErrors) {
      alertMessage = 'Your product is up and running'
      icon = successIcon
      color = successColor
      backgroundColor = successBackgroundColor
    } else if (status.isCompiledWithErrors) {
      const errors = this.state.compilation.errors
      const errorsString = `error${errors.length > 1 ? 's' : ''}`
      alertMessage = `Your latest changes produced ${errors.length} ${errorsString}`
    } else if (status.isPublished) {
      alertMessage = `Your product was successfully published`
      // this.state.productPublishingTimestamp
    }

    return <Typography key='status' style={{
      textAlign: 'center',
      marginBottom: '20px',
      color,
      backgroundColor,
      padding: '10px',
      textAlign: 'center'
    }}>
      { icon }
      { alertMessage }
    </Typography>
  }

  renderProductPreview () {
    const style = Object.assign({}, {
      height: '100vh',
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0px',
      flexDirection: 'column',
      backgroundColor: '#f5f5f5'
    }, this.state.preview && {
      marginLeft: '-300px',
      opacity: 0.5
    })

    return <div style={style}>
      <Browser
        cache={this.cache}
        onPublish={this._onPublishProduct}
        status={this.productStatus}
        product={this.state.product}
        port={this.state.port} />
      { this.renderProductStatusPrompt() }
    </div>
  }

  onBuyChallenge (challenge) {
    this.triggerRedirect(this.isLoggedIn ? '/wallet' : '/login')
  }

  renderChallenge () {
    return <div key='challenge' style={{
      display: 'flex',
      flex: 1,
      width: '100%',
      flexDirection: 'column'
    }}>
      <Challenge
        onBuyChallenge={this._onBuyChallenge}
        onSelectChallenge={this._onSelectChallenge}
        onStartChallenge={this._onStartChallenge}
        onTaskCompleted={this._onTaskCompleted}
        onChallengeCompleted={this._onChallengeCompleted}
        onChallengeRated={this._onChallengeRated}
        onStopChallenge={this._onStopChallenge}
        account={this.account}
        product={this.product}
        onShowTask={this._onShowTask}
        onHideTask={this._onHideTask}
        onBack={this._onUnselectChallenge}
        challenge={this.challenge} />
    </div>
  }

  renderChallenges () {
    return <div key='challenges' style={{
      display: 'flex',
      flex: 1,
      width: '100%',
      flexDirection: 'column'
    }}>
      <Challenges
        challenges={this.challenges}
        onSelectChallenge={this._onSelectChallenge} />
    </div>
  }

  renderPopup () {
    if (!this.state.showPopup) {
      return <div key='popupContainer' />
    }

    return <PopupMessage
      key='popupContainer'
      buttonTitle={this.state.popupButtonTitle}
      icon={this.state.popupIcon}
      title={this.state.popupTitle}
      message={this.state.popupMessage}
      onClose={() => this.setState({ showPopup: false })}
      message={this.state.popupMessage} />
  }

  renderScreenLayout () {
    const w = this.width
    const wSide = (w / 2)
    const wContent = this.state.preview ? w : wSide

    return <div style={{
      backgroundColor: '#f5f5f5',
      display: 'flex',
      flex: 1,
      height: '100vh',
      width: '100vw',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Layout key='workspace'
        style={{ height: '100vh' }}>
        <Sider
          key='preview'
          trigger={null}
          collapsible
          width={`${wSide}px`}
          style={{
            borderRight: '1px #CFD8DC solid',
            height: '100vh'
          }}
          collapsedWidth={'0px'}
          collapsed={this.state.preview}>
          { this.renderProductPreview() }
        </Sider>
        <Layout
          key='content'
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100vh',
            backgroundColor: '#f5f5f5',
            width: `${wContent}px`
          }}>
          <WorkspaceContent
            account={this.account}
            onTogglePreview={this._onTogglePreview}
            onProductOption={this._onProductOption}
            onScreenChanged={this._onScreenChanged}
            product={this.product}
            lastOpenedFile={this.state.lastOpenedFile}
            isProductPublishing={this.state.productPublishing}
            isProductStarting={this.state.productStarting}
            challengeId={this.state.challengeId}
            dir={this.state.dir}>
            { this.state.challengeId ? this.renderChallenge() : this.renderChallenges() }
          </WorkspaceContent>
        </Layout>
      </Layout>
    </div>
  }
}
