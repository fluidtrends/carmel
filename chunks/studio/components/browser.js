 import React from 'react'
 import { Component, Components } from 'react-dom-chunky'
 import { Card } from '@rmwc/card'
 import { Input, Icon, Progress } from 'antd'
 import { Button, ButtonIcon } from '@rmwc/button'
 import { Typography } from '@rmwc/typography'
 import { LinearProgress } from '@rmwc/linear-progress'
 import { Data } from 'react-chunky'
 import ProgressiveImage from 'react-progressive-image'
 import Wobble from 'react-reveal/Wobble'
 import Bounce from 'react-reveal/Bounce'
 import Fade from 'react-reveal/Fade'
 import RubberBand from 'react-reveal/RubberBand'
 import Zoom from 'react-reveal/Zoom'
 import Pulse from 'react-reveal/Bounce'
 import { IconButton } from '@rmwc/icon-button'
 import {
   Toolbar,
   ToolbarRow,
   ToolbarSection,
   ToolbarTitle,
   ToolbarMenuIcon,
   ToolbarIcon
 } from '@rmwc/toolbar'
 import { shell } from 'electron'

 const PROGRESS_CACHE = '_cacheProgressVideo'

 export default class Browser extends Component {
   constructor (props) {
     super(props)

     this.state = { longProcessVideoId: 0 }
     this._next = this.next.bind(this)
     this._prev = this.prev.bind(this)
     this._reload = this.reload.bind(this)
     this._loaded = this.loaded.bind(this)
     this._external = this.external.bind(this)
     this._onVideoPlayerEvent = this.onVideoPlayerEvent.bind(this)
     this._toggleView = this.toggleView.bind(this)
   }

   componentDidMount () {
     super.componentDidMount()
   }

   loaded (ref) {
     this._webview = ref

     if (!this.webview) {
       return
     }

     const self = this
     this.webview.addEventListener('dom-ready', () => {
       // self.webview.openDevTools()
     })

     this.webview.addEventListener('did-navigate-in-page', (page) => {
       console.log('did-navigate-in-page', page)
     })

     this.webview.addEventListener('did-navigate', (page) => {
       console.log('did-navigate', page)
       if (page.url.startsWith("http://localhost")) {
         self.setState({ url: '' })
       }
     })

     this.webview.addEventListener('will-navigate', (page) => {
       console.log('will-navigate', page)
     })

     this.webview.addEventListener('did-start-loading', () => {
       console.log('did-start-loading')
     })

     this.webview.addEventListener('new-window', (e) => {
       self.setState({ url: e.url })
       console.log(e.url)
     })

     this.webview.addEventListener('did-stop-loading', () => {
       console.log('did-stop-loading')
     })
   }

   get webview () {
     return this._webview
   }

   renderMask () {
     if (!this.props.preview) {
       return <div />
     }

     const style = Object.assign({}, {
       position: 'absolute',
       top: '0px',
       left: '0px',
       height: '100vh',
       opacity: 0.5,
       width: '60px'
     })

     return <div style={style} />
   }

   get url () {
     if (!this.state.url) {
       return `http://localhost:${this.props.port}`
     }
     return this.state.url
   }

   toggleView() {
     this.setState({ mobile: !this.state.mobile })
   }

   prev () {
     this.webview && this.webview.canGoBack() && this.webview.goBack()
   }

   next () {
     this.webview && this.webview.canGoForward() && this.webview.goForward()
   }

   reload () {
     this.webview && this.webview.reload()
   }

   external() {
     shell.openExternal(this.url)
   }

   renderToolbar () {
     return <div key='toolbar' style={{
       width: this.state.mobile ? '600px' : "100%",
       height: '60px',
       backgroundColor: '#78909C',
       display: 'flex',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center'
     }}>
      <IconButton
      onClick={this._prev}
      icon="arrow_back"
      style={{
        margin: 0,
        padding: 0,
        fontSize: "30px",
        marginLeft: "10px",
        color: '#ffffff'
      }}
      />
      <IconButton
      onClick={this._next}
      icon="arrow_forward"
      style={{
        color: '#ffffff',
        margin: 0,
        padding: 0,
        fontSize: "30px"
      }}
      />
      <IconButton
      onClick={this._reload}
      icon="refresh"
      style={{
        color: '#ffffff',
        margin: 0,
        padding: 0,
        fontSize: "30px"
      }}
      />
       <Input
         type='text'
         disabled
         value={this.url}
         style={{
           color: '#90A4AE',
           height: '40px',
           backgroundColor: '#ffffff',
           display: 'flex',
           padding: '10px',
           margin: '10px',
           flex: 1
         }} />
         <IconButton
         onClick={this._external}
         icon="launch"
         style={{
           color: '#ffffff',
           margin: 0,
           marginRight: "10px",
           padding: 0,
           fontSize: "30px"
        }}
         />
         <IconButton
         onClick={this._toggleView}
         icon={this.state.mobile ? 'laptop_mac' : 'mobile_friendly'}
         style={{
           color: '#ffffff',
           margin: 0,
           marginRight: "10px",
           padding: 0,
           fontSize: "30px"
        }}
         />
     </div>
   }

   get canPublish () {
     return (!this.props.status.isStarting && !this.props.status.isPublishing)
   }

   get isLongRunning () {
     return this.props.status.isStarting || this.props.status.isPublishing
   }

   get longRunningStatus () {
     return (this.props.status.isStarting ? 'starting up' : (this.props.status.isPublishing ? 'being published' : ''))
   }

   get longRunningPercentage () {
     return ((this.state.progressVideoDuration && this.state.progressVideoTime) ? parseFloat(this.state.progressVideoTime / this.state.progressVideoDuration) : 0)
   }

   get longProcessVideos () {
     return [{
       id: 'lTTajzrSkCw',
       startTime: 0,
       duration: 11,
       summary: 'a funny rabbit'
     }, {
       id: 'x9mOI7ae6JU',
       startTime: 0,
       duration: 11,
       summary: 'a funny drawing'
     }, {
       id: '_Nua3Cjdik0',
       startTime: 0,
       duration: 59,
       summary: 'The life of a programmer'
     },
     {
       id: 'BKorP55Aqvg',
       startTime: 0,
       duration: 454,
       summary: 'A day in the life of a consultant'
     },
     {
       id: '984VkHzXl8w',
       startTime: 0,
       duration: 422,
       summary: 'Jerry Seinfeld doing stand up'
     }]
   }

   get longProcessVideo () {
     return this.longProcessVideos[this.state.longProcessVideoId]
   }

   goToNextLongProcessVideo () {
     var longProcessVideoId = ((this.longProcessVideos.length <= (this.state.longProcessVideoId + 1)) ? 0 : this.state.longProcessVideoId + 1)
     const video = this.longProcessVideos[longProcessVideoId]

     Data.Cache.cacheItem(PROGRESS_CACHE, { video, time: video.startTime })
               .then(() => this.setState({ longProcessVideoId }))
   }

   get longProcessPrompt () {
     return 'This could take a while'
   }

   startProgressVideo (player, data) {
     const video = (data ? data.video : this.longProcessVideo)
     player.seekTo(data ? data.time : video.startTime)

     this.setState({
       progressVideoTime: data ? data.time : video.startTime,
       progressVideoPlayer: player,
       progressVideoDuration: data ? data.video.duration : video.duration
     })
   }

   onVideoPlayerEvent (type, data) {
     switch (type) {
       case 'ready':
         Data.Cache.retrieveCachedItem(PROGRESS_CACHE)
        .then((result) => this.startProgressVideo(data.player, result))
        .catch(() => this.startProgressVideo(data.player))
         break
       case 'progress':
         this.setState({
           progressVideoTime: data.progress.playedSeconds
         })
         break
       case 'done':
         this.goToNextLongProcessVideo()
         break
       case 'error':
         this.goToNextLongProcessVideo()
         break
       default:
     }
   }

   renderProgressVideo () {
     const video = this.longProcessVideo
     const prompt = this.longProcessPrompt
     const status = this.longRunningStatus

     return <div key='progress' style={{
       backgroundColor: '#000000',
       display: 'flex',
       width: '100%',
       flexDirection: 'column',
       height: '100%'
     }}>
       <Typography key='title' use='title' style={{
         textAlign: 'center',
         color: '#ffffff',
         padding: '20px',
         marginTop: '10px'
       }}>
         { prompt }
       </Typography>
       <Typography key='summary2' use='body1' style={{
         textAlign: 'center',
         color: '#ffffff',
         margin: '20px'
       }}>
        Until then watch this:
       </Typography>
       <Components.Media
         key='video'
         cache={this.props.cache}
         onVideoPlayerEvent={this._onVideoPlayerEvent}
         video={`https://www.youtube.com/watch?v=${video.id}`}
         playing
         width={'100%'}
         height={'360px'}
         innerHeight={'380px'}
         style={{
           backgroundColor: '#ffffff'
         }} />
       <Typography key='summary' use='title' style={{
         textAlign: 'center',
         fontSize: '30px',
         color: '#ffffff',
         marginTop: '40px'
       }}>
         { video.summary }
       </Typography>
     </div>
   }

   renderProgressBar () {
     if (!this.isLongRunning) {
       return <div />
     }

     const percentage = this.longRunningPercentage
     return <LinearProgress key='divider' progress={percentage} />
   }

   render () {
     const style = Object.assign({}, {
       height: '100%',
       display: 'flex',
       flex: 1,
       width: "100%",
       justifyContent: 'center',
       alignItems: 'center',
       alignSelf: "center",
       flexDirection: 'column'
     })

     return <div key='browserContainer' style={style}>
    { this.renderToolbar() }
     <webview
     allowpopups
       key='webview'
       ref={this._loaded}
       src={this.url} style={{
         display: 'flex',
         width: this.state.mobile ? '600px' : "100%",
         backgroundColor: '#ECEFF1',
         flex: 1
       }} />
    </div>
   }
}
