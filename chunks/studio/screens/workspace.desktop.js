import React from 'react'
import { Component, Components, Screen } from 'react-dom-chunky'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Form, Icon, Row, Col, List, Alert, Breadcrumb, Dropdown, Avatar, Menu, Tabs, Layout, notification, Drawer } from 'antd'
import { Card, CardActions, CardActionButtons } from 'rmwc/Card'
import { Fab } from 'rmwc/Fab'
import { Elevation } from 'rmwc/Elevation'
import fs from 'fs-extra'
import path from 'path'
import { Parallax } from 'react-spring'

import Shell from '../components/shell'
import Toolbar from '../components/toolbar'
import Challenge from '../components/challenge'
import Challenges from '../components/challenges'
import Browser from '../components/browser'
import Explorer from '../components/explorer'
import TabBar from '../components/tabbar'
import Task from '../components/task'
import Progress from '../components/progress'
import Prompt from '../components/prompt'

const { Header, Sider, Content, Footer } = Layout
const { SubMenu } = Menu

const FormItem = Form.Item
const HOME = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME']
const CARMEL_HOME = path.resolve(HOME, '.carmel')
const LIGHT_START = true

export default class Workspace extends Screen {
  constructor (props) {
    super(props)

    this.state = { openFiles: {}, verifying: false }
    this._shell = new Shell()
    this._onNewProduct = this.onNewProduct.bind(this)
    this._onProductChanged = this.onProductChanged.bind(this)
    this._onShowAccountScreen = this.onShowAccountScreen.bind(this)
    this._onTogglePreview = this.onTogglePreview.bind(this)
    this._onStartChallenge = this.onStartChallenge.bind(this)
    this._onSelectChallenge = this.onSelectChallenge.bind(this)
    this._onUnselectChallenge = this.onUnselectChallenge.bind(this)
    this._onStopChallenge = this.onStopChallenge.bind(this)
    this._onShowFileBrowser = this.onShowFileBrowser.bind(this)
    this._onShowCompileErrors = this.onShowCompileErrors.bind(this)
    this._onFileOpen = this.onFileOpen.bind(this)
    this._verifyTask = this.verifyTask.bind(this)
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
    // this.triggerRedirect('/me')
  }

  onShowFileBrowser () {
    this.setState({ showFileBrowser: true })
  }

  loadChallenges () {
    return this.importRemoteData(this.props.challengesIndex)
               .then(challenges => challenges.map(challenge => {
                 const actionObj = { action: {handler: `local://challenges/${challenge.path}`}}
                 return { ...challenge, ...actionObj }
               }))
  }

  startProduct ({ challenge, challenges, challengeStarted, light }) {
    this.shell.exec('startProduct', { id: this.product.id, light }, (compilation) => {
      if (compilation.compiled && !this.state.productStarted) {
        this.setState({ compilation, productStarted: true, challenge, challenges, challengeStarted, productStarting: false })
        return
      }

      this.setState({ compilation })
    })
    .then(({ files, dir, port }) => {
      if (light) {
        this.setState({ files, dir, port, productStarted: true, productStarting: false, challenge, challenges, challengeStarted })
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
      this.setState({ challenge, challenges, challengeStarted, compilation, productStarted: true, productStarting: false })
    })
  }

  start () {
    this.setState({ productStarting: true, productStarted: false })
    this.loadChallenges()
        .then((challenges) => {
          const challenge = challenges.find(c => this.props.session.challenge && this.props.session.challenge.id === c.id)
          const challengeStarted = (challenge ? true : false)
          return this.startProduct({ challenge, challenges, challengeStarted, light: LIGHT_START })
        })
  }

  onProductChanged (product) {
    this.shell.cache('productId', product.id)
    this.setState({ product })
  }

  onNewProduct () {
    this.triggerRedirect('/new')
  }

  onTogglePreview (preview) {
    this.setState({ preview })
  }

  onStartChallenge (challenge) {
    this.shell.cache('challengeId', this.state.challenge.id)
    this.setState({ challengeStarted: true })
  }

  onSelectChallenge (challenge) {
    this.setState({ challenge })
  }

  onUnselectChallenge () {
    this.setState({ challenge: '', challengeStarted: false })
  }

  onStopChallenge () {
    this.shell.cache('challengeId', '')
    this.setState({ challenge: '', challengeStarted: false })
  }

  verifyTask () {
    this.setState({ verifying: true })
    // this.shell.exec('verifyTask', { productId: this.product.id, task }, (compilation) => {
    //   if (compilation.compiled && !this.state.productStarted) {
    //     this.setState({ compilation, productStarted: true, productStarting: false })
    //     return
    //   }
    //
    //   this.setState({ compilation })
    // })
    // .then(({ files, dir, port }) => {
    //   this.setState({ files, dir, port })
    // })
    // .catch((error) => {
    //   const compilation = {
    //     compiled: true,
    //     compiling: false,
    //     errors: [error.message]
    //   }
    //   this.setState({ compilation, productStarted: true, productStarting: false })
    // })
  }

  // renderActiveTask () {
  //   const dummyTasks = []
  //   for (let i = 1; i <= 5; i++) {
  //     dummyTasks.push({
  //       taskNumber: i,
  //       completed: false
  //     })
  //   }
  //
  //   return <Card key='activeTask' style={{
  //     backgroundColor: '#ffffff',
  //     width: '100%',
  //     justifyContent: 'center',
  //     height: '100%',
  //     alignItems: 'center',
  //     height: '120px',
  //     marginBottom: '10px'
  //   }}>
  //     {
  //     this.state.verifying ?
  //       <p>verifying ...</p>
  //     :
  //       <Task
  //         activeTask={1}
  //         tasksNumber={5}
  //         width={'100%'}
  //         completedTask={false}
  //         failedTask={false}
  //         padding={'20px'}
  //         tasks={dummyTasks}
  //         progress={0}
  //         finalTask={false}
  //         successMessage={'uhu'}
  //         errorMessage={'nopeeeee'}
  //         showChallenge={this._stop}
  //         content={''}
  //         verifyTask={this._verifyTask}
  //         startNextTask={this._startNextTask}
  //         goBack={this._stop}
  //     />
  //   }
  //   </Card>
  // }

  onFileOpen (file) {
    const relative = path.relative(this.state.dir, file)
    const openFiles = Object.assign({}, this.state.openFiles)
    openFiles[relative] = { openTimestamp: `${Date.now}`, fullPath: file }
    this.setState({ openFiles, lastOpenedFile: relative, showFileBrowser: false })
  }

  onShowCompileErrors () {
    console.log(this.state.compilation.errors)
  }

  get productStatus () {
    const isStarting = (this.state.productStarting && !this.state.productStarted)
    const isStarted = (!this.state.productStarting && this.state.productStarted)

    const isCompiling = (isStarted && this.state.compilation && !this.state.compilation.compiled && this.state.compilation.compiling)
    const isCompiled = (isStarted && this.state.compilation && this.state.compilation.compiled && !this.state.compilation.compiling)
    const isCompiledWithErrors = (isCompiled && this.state.compilation.errors && this.state.compilation.errors.length > 0)
    const isCompiledWithoutErrors = (isCompiled && (!this.state.compilation.errors || this.state.compilation.errors.length === 0))

    const status = {
      isStarting,
      isStarted,
      isCompiling,
      isCompiled,
      isCompiledWithErrors,
      isCompiledWithoutErrors
    }

    return status
  }

  renderProductPreviewAlert () {
    const status = this.productStatus

    var alertType = 'info'
    var alertMessage = `The product is starting ...`
    var onAction = false

    if (status.isCompiling) {
      alertMessage = 'Applying changes to your product ...'
    } else if (status.isCompiledWithoutErrors) {
      alertType = 'success'
      alertMessage = 'Your product is up and running'
    } else if (status.isCompiledWithErrors) {
      const errors = this.state.compilation.errors
      alertType = 'error'
      const errorsString = `error${errors.length > 1 ? 's' : ''}`
      alertMessage = `Your latest changes produced ${errors.length} ${errorsString}`
    }

    return <Card key='alert' style={{
      width: '100%',
      marginBottom: '5px',
      textAlign: 'center'
    }}>
      <Alert style={{
        width: '100%',
        textAlign: 'center'
      }}
        type={alertType}
        message={alertMessage}
        banner />
    </Card>
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
      { this.renderProductPreviewAlert() }
      <Browser
        product={this.state.product}
        port={this.state.port} />
    </div>
  }

  renderOpenFileTabs () {
    if (!this.state.openFiles || Object.keys(this.state.openFiles).length === 0) {
      return <div key='tabs' />
    }

    return <TabBar
      key='tabs'
      file={this.state.lastOpenedFile}
      dir={this.state.dir}
      files={this.state.openFiles} />
  }

  renderFileExplorer (status) {
    if (!this.state.showFileBrowser) {
      return <div key='explorer' />
    }

    return <Explorer
      key='explorer'
      onFileOpen={this._onFileOpen}
      product={this.state.product}
      dir={this.state.dir}
      onClose={() => this.setState({ showFileBrowser: false })}
      files={this.state.files} />
  }

  renderChallenge () {
    return <div key='challenge' style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'column'
    }}>
      <Challenge
        started={this.state.challengeStarted}
        onBack={this._onUnselectChallenge}
        onStop={this._onStopChallenge}
        importRemoteData={this.importRemoteData}
        onStartChallenge={this._onStartChallenge}
        challenge={this.state.challenge} />
    </div>
  }

  renderChallenges () {
    return <div key='challenges' style={{
      display: 'flex',
      flex: 1,
      flexDirection: 'column'
    }}>
      <Prompt
        title='Ready for a challenge?'
        subtitle='Choose a challenge to grow your skills and to advance your product. Ready when you are.' />
      <Challenges
        challenges={this.state.challenges}
        onSelectChallenge={this._onSelectChallenge} />
    </div>
  }

  renderWorkspaceContent () {
    if (!this.state.challenge) {
      return this.renderChallenges()
    }

    return [ this.renderChallenge(), this.renderOpenFileTabs() ]
  }

  renderWorkspace (status) {
    const browserWidth = '60vw'
    const minBrowserWidth = '60px'
    const browserHeight = '100vh'

    return <Layout key='workspace' style={{ height: '100vh' }}>
      <Sider
        key='preview'
        trigger={null}
        collapsible
        width={browserWidth}
        style={{
          borderRight: '1px #CFD8DC solid',
          backgroundColor: '#ff0000',
          height: '100vh'
        }}
        collapsedWidth={minBrowserWidth}
        collapsed={this.state.preview}>
        { this.renderProductPreview() }
      </Sider>
      <Layout key='workspace' style={{ minHeight: '100vh' }}>
        <Header key='header' style={{
          background: '#ffffff',
          padding: 0,
          borderBottom: '1px #CFD8DC solid'
        }}>
          <Elevation z={2}>
            <Toolbar
              onShowFileBrowser={this._onShowFileBrowser}
              onTogglePreview={this._onTogglePreview}
              onNewProduct={this._onNewProduct}
              onProductChanged={this._onProductChanged}
              onShowAccountScreen={this._onShowAccountScreen}
              products={this.products}
              product={this.product} />
          </Elevation>
        </Header>
        <Layout key='content' style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
          backgroundColor: '#f5f5f5'
        }}>
          { this.renderWorkspaceContent() }
        </Layout>
      </Layout>
    </Layout>
  }

  renderScreenLayout () {
    const productStatus = this.productStatus

    if (productStatus.isStarting) {
      return <Progress
        title='Ready to see your product in action?'
        message='Hold on a sec, this will be fun I promise ...' />
    }

    return <div style={{
      backgroundColor: '#f5f5f5',
      display: 'flex',
      flex: 1,
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      { this.renderWorkspace(productStatus) }
      { this.renderFileExplorer(productStatus) }
    </div>
  }
}
