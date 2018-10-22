import React, { Fragment } from 'react'
import { Screen } from 'react-dom-chunky'
import { Button, ButtonIcon } from '@rmwc/button'
import { IconButton } from '@rmwc/icon-button'
import { Typography } from '@rmwc/typography'
import { Data } from 'react-chunky'
import Typist from 'react-typist'
import { Elevation } from '@rmwc/elevation'
import { Tooltip } from 'antd'
import { Icon } from '@rmwc/icon'
import path from 'path'
import PopupMessage from '../components/popup'
import Menus from '../data/menus.json'
import Shell from '../components/shell'
import MainMenu from '../components/mainMenu'
import SideMenu from '../components/sideMenu'
import Progress from '../components/progress'
import { Layout } from 'antd'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { Spring } from 'react-spring'

const { remote } = require('electron')

const HOME = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']
const CARMEL_HOME = path.resolve(HOME, '.carmel')

export default class BaseStudioScreen extends Screen {
  constructor (props) {
    super(props)

    this.state = { inProgress: false, progressMessage: 'Just a sec, please' }

    this._shell = new Shell()
    this._onMenuItemSelected = this.onMenuItemSelected.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()

    // this.showPopup({
    //   buttonTitle: 'Keep Going',
    //   icon: 'tokens',
    //   title: 'Great job!',
    //   message: 'wassup'
    // })
  }

  /***********************************************************/

  walletSuccess (wallet) {
    const user = Object.assign({}, this.state.user, { wallet: wallet[0] })
    this.setState({ user })
    this.login(user)
  }

  profileSuccess (profile) {
    this.setState({ user: Object.assign({}, this.state.user, profile[0]) })
    this.props.refreshWallet({ userId: this.account.user.uid })
  }

  /***********************************************************/

  refreshAccount () {
    this.setState({ inProgress: true, progressMessage: 'Preparing your account, just a sec please ...' })
    this.props.refreshAccount({ userId: this.account.user.uid })
  }

  accountError (error) {
    this.refreshAccount()
  }

  accountSuccess (account) {
    this.setState({ user: Object.assign({}, this.state.user, account) })
    this.props.refreshProfile({ userId: this.account.user.uid })
  }

  get shell () {
    return this._shell
  }

  loadCookies () {
    return new Promise((resolve, reject) => {
      remote.session.defaultSession.cookies.get({}, (error, cookies) => {
        error ? reject(error) : resolve(cookies)
      })
    })
  }

  loadAuthCookie ({ name, domain }) {
    return this.loadCookies()
               .then((cookies) => cookies.find(cookie => (cookie.domain.endsWith(domain) && cookie.secure && cookie.name === name)))
  }

  openTwitterWindow () {
    this.openWindow({
      url: 'https://twitter.com/intent/follow?screen_name=carmelplatform',
      authCookieDomain: 'twitter.com',
      authCookieName: 'auth_token'
    })
  }

  openWindow ({ url, authCookieDomain, authCookieName }) {
    const win = new remote.BrowserWindow({
      show: false,
      modal: true,
      alwaysOnTop: false,
      backgroundColor: this.props.theme.primaryColor,
      width: 800,
      height: 600
    })

    win.webContents.on('did-finish-load', () => {
    })

    win.webContents.on('did-navigate', (e, page) => {
      this.loadAuthCookie({ domain: authCookieDomain, name: authCookieName })
          .then((cookie) => console.log(cookie))
      console.log(page)
    })

    win.webContents.on('did-navigate-in-page', (e, page) => {
      this.loadAuthCookie({ name: authCookieDomain, domain: authCookieName })
          .then((cookie) => console.log(cookie))
      console.log(page)
    })

    win.once('ready-to-show', () => {
      win.show()
    })

    win.on('closed', () => {
      win = null
    })

    win.loadURL(url)
    this.setState({ win })
  }

  get screenTitle () {
    return this.props.title
  }

  get screenIcon () {
    return this.props.icon
  }

  get screenActions () {
    return []
  }

  onScreenAction (action) {
    console.log('ACTION:', action)
  }

  changeProduct (productId) {
    this.setState({ productId })
  }

  get product () {
    return (this.state.productId ? this.props.session.products[this.state.productId] : this.props.session.product)
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

  get menus () {
    return Menus
  }

  onMenuItemSelected ({ type, id }) {
    const menuItem = this.menus[type] ? this.menus[type].find(m => m.id === id) : undefined

    if (menuItem && menuItem.route) {
      this.triggerRedirect(menuItem.route)
      return
    }

    if (type === 'primary') {
      if (id === 'back') {
        this.triggerRedirect('/workspace')
      }

      this.setState({ sideMenuExpanded: !this.state.sideMenuExpanded })
      return
    }

    if (type === 'product') {
      if (id === ':newProduct') {
        this.triggerRedirect('/new')
        return
      }

      this.changeProduct(id)
      return
    }

    if (type === 'side') {
      this.setState({ primaryView: id })
      return
    }
  }

  // controllerMessage (options) {
  //   switch (options.type) {
  //     case 'bonus':
  //       return `You just unlocked ${options.tokens} CARMEL tokens! ${options.reason}`
  //     default:
  //       return `You're awesome`
  //   }
  // }

  // updateLocalSession (data) {
  //   const { challenges, controller, challengeId } = data
  //   const userChallenges = Object.assign({}, challenges)
  //
  //   if (!controller) {
  //     this.setState({ userChallenges, challengeId })
  //     return
  //   }
  //
  //   switch (controller.type) {
  //     case 'achievement':
  //       const achievement = controller.achievement
  //       const popupButtonTitle = 'Continue'
  //       const popupTitle = 'Congratulations'
  //       const popupIcon = achievement.type === 'bonus' ? 'tokens' : 'cup'
  //       const popupMessage = this.controllerMessage(achievement)
  //
  //       this.setState(Object.assign({}, { userChallenges, challengeId, showPopup: true, popupIcon, popupButtonTitle, popupMessage, popupTitle }))
  //       break
  //     default:
  //   }
  // }

  // sessionSynced (response) {
  //   if (!response || !response.data) {
  //     return
  //   }
  //
  //   this.updateLocalSession(response.data)
  // }

  // failedToSyncSession (error) {
  //   console.log('failedToSyncSession', error)
  // }

  // syncSession (data) {
  //   const request = Object.assign({},
  //     { machineId: this.props.session.machineId,
  //       machineFingerprint: this.props.session.machineFingerprint,
  //       stage: Stages.WORKSPACE,
  //       challengeId: ''
  //     },
  //     data)
  //
  //   this.props.syncSession(request)
  // }

  // start () {
    // this.setState({ productStarting: true, productStarted: false })
    // this.syncSession()
    // return this.startProduct()
  // }

  renderPopupMessage () {
    if (!this.state.showPopup) {
      return <div key='popupContainer' />
    }

    return <PopupMessage
      key='popupContainer'
      buttonTitle={this.state.popupButtonTitle}
      icon={this.state.popupIcon}
      title={this.state.popupTitle}
      message={this.state.popupMessage}
      onClose={() => this.setState({ showPopup: false })} />
  }

  showPopup ({ buttonTitle, title, icon, message }) {
    this.setState({
      showPopup: true,
      popupButtonTitle: buttonTitle,
      popupIcon: icon,
      popupTitle: title,
      popupMessage: message
    })
  }

  renderScreenMainMessage ({ message }) {
    return <div style={{
      display: 'flex',
      flex: 1,
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <img src={`../../../../assets/chunky-logo.gif`} style={{
        display: 'block',
        width: '220px'
      }} />
      <Typography use='headline5' style={{
        color: this.props.theme.primaryColor,
        margin: '30px'
      }}>
        { message }
      </Typography>
    </div>
  }

  renderPrompt () {
    if (!this.state.showPrompt) {
      return <div />
    }

    return <div style={{
      margin: 0,
      padding: 0,
      height: 64,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }}>
      <div style={{
        display: 'flex',
        color: 'rgba(0, 16, 31, 1)',
        height: '56px',
        margin: '10px',
        backgroundColor: 'rgba(255, 251, 223, 1)',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        border: '1px solid rgba(250, 240, 175, 1)',
        alignItems: 'flex-start',
        fontSize: '14px',
        flex: 1
      }}>
        <Typist>
          <Icon icon='chat' style={{
            color: 'rgba(243, 179, 0, 1)',
            marginRight: '10px'
          }} />
          { `This is your Carmel Workspace, where you'll be spending most of your time.`}
        </Typist>
      </div>
    </div>
  }

  renderScreenActions () {
    return this.screenActions.map((action) => (<Tooltip key={action.id} placement='bottomLeft' title={action.title}>
      <IconButton icon={action.icon}
        onClick={() => this.onScreenAction(action)}
        style={{
          display: 'flex',
          color: 'rgba(0, 16, 31, 1)',
          padding: '0px 0px 0px 4px',
          width: '32px',
          height: '32px'
        }} />
    </Tooltip>))
  }

  renderScreenContentsContainer (children) {
    return <Elevation z={10} style={{
      width: '100%',
      overflow: 'scroll',
      justifyContent: 'center',
      display: 'block',
      backgroundColor: '#ffffff',
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      margin: '0px',
      padding: '20px'
    }}>
      { children }
    </Elevation>
  }

  renderScreenContents () {
    return this.renderScreenContentsContainer(<div />)
  }

  get mainMenuTitle () {
    return 'Back To Workspace'
  }

  get isSecondary () {
    return true
  }

  renderSideMenu () {
    if (this.isSecondary) {
      return <div />
    }

    return <SideMenu
      selected={this.state.primaryView}
      expanded={this.state.sideMenuExpanded}
      onItemSelected={this._onMenuItemSelected}
      menus={this.menus} />
  }

  renderScreenHeader () {
    // <div style={{
    //   margin: 0,
    //   padding: 0,
    //   display: 'flex',
    //   flexDirection: 'row',
    //   marginBottom: '10px',
    //   justifyContent: 'flex-end',
    //   alignItems: 'flex-end'
    // }}>
    //   <Icon icon={this.screenIcon} style={{
    //     margin: '0px 8px 6px 0px',
    //     padding: '0px',
    //     fontSize: '20px',
    //     color: 'rgba(0, 16, 31, 1)'
    //   }} />
    //   <Typography use='overline' style={{
    //     display: 'flex',
    //     fontSize: '14px',
    //     color: 'rgba(0, 16, 31, 1)',
    //     flex: 1
    //   }}>
    //     { this.screenTitle }
    //   </Typography>
    //   { this.renderScreenActions() }
    // </div>
    return <div />
  }

  renderScreenFooter () {
    return <div />
  }

  renderScreenLayoutMain () {
    return <div style={{ display: 'flex', flex: 1 }}>
      <div style={{
        width: '100%',
        overflow: 'scroll',
        paddingTop: '64px',
        justifyContent: 'center',
        display: 'block',
        backgroundColor: '#ECEFF1',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <Layout style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          padding: '10px',
          flexDirection: 'column'
        }}>
          { this.renderPrompt() }
          { this.renderScreenHeader() }
          { this.renderScreenContents() }
          { this.renderScreenFooter() }
        </Layout>
      </div>
    </div>
  }

  // renderTrayHandle () {
  //   return <div
  //     onMouseOver={() => this.setState({ trayState: 'hover' })}
  //     onMouseOut={() => this.setState({ trayState: 'default' })}
  //     onClick={() => this.setState({ trayState: 'open' })}
  //     style={{
  //       height: '64px',
  //       width: '320px',
  //       backgroundColor: '#ff0000',
  //       position: 'absolute',
  //       left: '10px',
  //       display: 'flex',
  //       flexDirection: 'row',
  //       bottom: '20px'
  //     }}>
  //     <img src={`../../../../assets/chunky-logo.gif`} style={{
  //       display: 'block',
  //       width: '64px'
  //     }} />
  //     <div style={{
  //       backgroundColor: '#ffff00'
  //     }}>
  //       hey
  //     </div>
  //   </div>
  // }

  // renderTray () {
  //   switch (this.state.trayState) {
  //     case 'hover':
  //     case 'default':
  //     case 'open':
  //     default:
  //   }
  //
  //   return <RubberBand>
  //     { this.renderTrayHandle()}
  //   </RubberBand>
  // }

  renderMainMenu () {
    return <MainMenu
      product={this.product}
      products={this.props.session.products}
      account={this.account}
      secondary={this.isSecondary}
      title={this.mainMenuTitle}
      onItemSelected={this._onMenuItemSelected}
      onSignIn={() => this.triggerRedirect('/login')}
      backgroundColor={this.props.theme.primaryColor}
      menus={this.menus} />
  }

  renderScreenLayout () {
    if (this.state.inProgress) {
      return <div style={{
        backgroundColor: 'rgba(0, 16, 31, 0.9)',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Elevation z={10} style={{
          justifyContent: 'center',
          display: 'flex',
          backgroundColor: '#ffffff',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '60px'
        }}>
          <Fade>
            <Progress message={this.state.progressMessage} />
          </Fade>
        </Elevation>
      </div>
    }

    return <div
      style={{
        backgroundColor: '#ECEFF1',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
      }}>
      { this.renderPopupMessage() }
      { this.renderMainMenu()}
      <Bounce
        right={this.isSecondary}
        left={!this.isSecondary}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: '100%'
        }}>
          { this.renderSideMenu() }
          { this.renderScreenLayoutMain() }
        </div>
      </Bounce>
    </div>
  }
}
