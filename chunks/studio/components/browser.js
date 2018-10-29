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

 const PROGRESS_CACHE = '_cacheProgressVideo'

 export default class Browser extends Component {
   constructor (props) {
     super(props)

     this.state = { longProcessVideoId: 0 }
     this._next = this.next.bind(this)
     this._prev = this.prev.bind(this)
     this._reload = this.reload.bind(this)
     this._loaded = this.loaded.bind(this)
     this._onVideoPlayerEvent = this.onVideoPlayerEvent.bind(this)
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
       self.setState({ ready: true })
     })

     this.webview.addEventListener('did-navigate-in-page', (e, page) => {
       console.log('did-navigate-in-page', page)
     })

     this.webview.addEventListener('will-navigate', (e, page) => {
       console.log('will-navigate', page)
     })

     this.webview.addEventListener('did-start-loading', () => {
       console.log('did-start-loading')
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
       backgroundColor: '#00ff00',
       opacity: 0.5,
       width: '60px'
     })

     return <div style={style} />
   }

   get url () {
     if (!this.props.port) {
       return 'http://localhost'
     }

     return `http://localhost:${this.props.port}`
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

   renderToolbar () {
     return <div key='toolbar' style={{
       width: '100%',
       height: '60px',
       backgroundColor: '#78909C',
       display: 'flex',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center'
     }}>
       <Icon
         onClick={this._prev}
         style={{
           color: '#CFD8DC',
           display: 'flex',
           fontSize: '18px',
           marginLeft: '10px',
           lineHeight: '64px',
           padding: '0 10px',
           cursor: 'pointer',
           width: '40px',
           transition: 'color .3s'
         }}
         type='arrow-left' />
       <Icon
         onClick={this._next}
         style={{
           color: '#CFD8DC',
           display: 'flex',
           fontSize: '18px',
           marginLeft: '10px',
           lineHeight: '64px',
           padding: '0 10px',
           cursor: 'pointer',
           width: '40px',
           transition: 'color .3s'
         }}
         type='arrow-right' />
       <Icon
         onClick={this._reload}
         style={{
           color: '#CFD8DC',
           display: 'flex',
           fontSize: '18px',
           marginLeft: '10px',
           lineHeight: '64px',
           padding: '0 10px',
           cursor: 'pointer',
           width: '40px',
           transition: 'color .3s'
         }}
         type='reload' />
       <Input
         type='text'
         disabled
         defaultValue={this.url}
         style={{
           color: '#37474F',
           height: '30px',
           backgroundColor: '#FAFAFA',
           display: 'flex',
           padding: '10px',
           margin: '10px',
           flex: 1
         }} />
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

   renderWebview () {
     return <webview
       key='webview'
       ref={this._loaded}
       src={this.url} style={{
         display: 'flex',
         width: '100%',
         backgroundColor: '#ffffff',
         flex: 1
       }} />
   }

   renderMainBrowserContent () {
     // console.log(this.webview)
     // if (this.webview) {
       // console.log(this.webview.isLoading(),
       // this.webview.isWaitingForResponse(),
       // this.webview.getURL(),
       // this.webview.getTitle())
     // }

     console.log(this.state.ready)

     // if (!this.state.ready) {
     //   return <div style={{
     //     backgroundColor: '#ffff00',
     //     display: 'flex',
     //     flexDirection: 'column',
     //     justifyContent: 'center',
     //     alignItems: 'center'
     //   }}>
     //    hey
     //   </div>
     // }

     // if (!this.isLongRunning) {
       // if (this.state.progressVideoTime) {
         // Data.Cache.cacheItem(PROGRESS_CACHE, { video: this.longProcessVideo, time: this.state.progressVideoTime })
       // }
     return this.renderWebview()
     // }

     // return this.renderProgressVideo()
   }

   render () {
     const style = Object.assign({}, {
       height: '100%',
       display: 'flex',
       flex: 1,
       width: '100%',
       justifyContent: 'center',
       alignItems: 'center',
       padding: 0,
       flexDirection: 'column'
     })

     //   <Card key='browserContainerCard' style={{
     //     width: '100%',
     //     display: 'flex',
     //     flex: 1,
     //     justifyContent: 'center',
     //     alignItems: 'center',
     //     flexDirection: 'column'
     //   }}>
     //     { this.renderMainBrowserContent() }
     //   </Card>
     //   { this.renderProgressBar() }
     // </div>

     return <div key='browserContainer' style={style}>
       { this.renderWebview() }
     </div>
   }
}
