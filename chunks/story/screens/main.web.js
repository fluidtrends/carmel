import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import ChapterPreview from '../components/chapterPreview'

export default class MainStoryScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount() {
    super.componentDidMount()

    this._loadStoryContent()

    // this._chapter = this.props.location.pathname.split('/')[2]
    // Promise.all(
    //   this.props.stories.map(story => this.importRemoteData(story.source))
    // )
    //   .then(stories => {
    //     var index = 0
    //     return stories
    //       .map(story => Object.assign({}, story, this.props.stories[index++]))
    //       .map(s => new Story(s))
    //   })
    //   .then(stories => this.setState({ stories }))
  }

  _loadStoryContent() {
    this.importRemoteData(`${this.props.source}/story.json`).then((story) => {
      console.log(story)
      // this.setState({ story })
    })
    .catch((error) => console.log(error))
  }

  // get chapter() {
  //   return this._chapter
  // }

  // renderPostSocialIcons(chapter, justifyContent) {
  //   return (
  //     <CardActionIcons
  //       style={{
  //         justifyContent: this.isSmallScreen
  //           ? 'center'
  //           : justifyContent
  //           ? justifyContent
  //           : 'flex-end'
  //       }}
  //     >
  //       <TwitterShareButton
  //         url={chapter.url}
  //         title={chapter.quote}
  //         hashtags={chapter.hashtags}
  //         style={{ marginRight: '10px' }}
  //       >
  //         <TwitterIcon size={32} round={true} />
  //       </TwitterShareButton>
  //       <LinkedinShareButton
  //         url={chapter.url}
  //         description={chapter.quote}
  //         style={{ marginRight: '10px' }}
  //       >
  //         <LinkedinIcon size={32} round={true} />
  //       </LinkedinShareButton>
  //       <FacebookShareButton
  //         url={chapter.url}
  //         hashtag={`#${chapter.hashtags[0]}`}
  //         quote={chapter.quote}
  //         style={{ marginRight: '10px' }}
  //       >
  //         <FacebookIcon size={32} round={true} />
  //       </FacebookShareButton>
  //       <TelegramShareButton
  //         url={chapter.url}
  //         title={chapter.quote}
  //         style={{ marginRight: '0px' }}
  //       >
  //         <TelegramIcon size={32} round={true} />
  //       </TelegramShareButton>
  //     </CardActionIcons>
  //   )
  // }

  // renderPostHeader(chapter) {
  //   if (this.isSmallScreen) {
  //     return (
  //       <div
  //         style={{
  //           display: 'flex',
  //           padding: '10px',
  //           margin: '10px',
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           flexDirection: 'column'
  //         }}
  //       >
  //         <Avatar
  //           src="https://github.com/fluidtrends/carmel/raw/master/assets/chunky-logo.gif"
  //           size="large"
  //           style={{
  //             border: '1px solid #B0BEC5'
  //           }}
  //         />
  //         <div
  //           style={{
  //             display: 'flex',
  //             flex: 1,
  //             padding: '10px',
  //             flexDirection: 'column'
  //           }}
  //         >
  //           <Typography
  //             use="caption"
  //             tag="div"
  //             style={{
  //               color: '#607D8B',
  //               textAlign: 'center'
  //             }}
  //           >
  //             {chapter.author}
  //           </Typography>
  //           <Typography
  //             use="caption"
  //             tag="div"
  //             style={{
  //               color: '#B0BEC5',
  //               textAlign: 'center'
  //             }}
  //           >
  //             {chapter.date}
  //           </Typography>
  //         </div>
  //         {this.renderPostCategories(chapter)}
  //       </div>
  //     )
  //   }
  //
  //   return (
  //     <div
  //       style={{
  //         display: 'flex',
  //         padding: '10px',
  //         margin: '10px',
  //         flexDirection: 'row'
  //       }}
  //     >
  //       <Avatar
  //         src="https://github.com/fluidtrends/carmel/raw/master/assets/chunky-logo.gif"
  //         size="large"
  //         style={{
  //           border: '1px solid #B0BEC5'
  //         }}
  //       />
  //       <div
  //         style={{
  //           display: 'flex',
  //           flex: 1,
  //           paddingLeft: '20px',
  //           flexDirection: 'column'
  //         }}
  //       >
  //         <Typography
  //           use="caption"
  //           tag="div"
  //           style={{
  //             color: '#607D8B'
  //           }}
  //         >
  //           {chapter.author}
  //         </Typography>
  //         <Typography
  //           use="caption"
  //           tag="div"
  //           style={{
  //             color: '#B0BEC5'
  //           }}
  //         >
  //           {chapter.date}
  //         </Typography>
  //       </div>
  //       {this.renderPostCategories(chapter)}
  //     </div>
  //   )
  // }

  // renderPostCategories(chapter) {
  //   return (
  //     <ChipSet>
  //       {chapter.tags.map(t => (
  //         <Chip style={{ backgroundColor: '#F5F5F5', color: '#546E7A' }}>
  //           <ChipText>{t}</ChipText>
  //         </Chip>
  //       ))}
  //     </ChipSet>
  //   )
  // }
  //
  // renderPostActions(chapter) {
  //   if (this.isSmallScreen) {
  //     return [
  //       <CardActions
  //         key="first"
  //         style={{
  //           margin: '10px',
  //           justifyContent: 'center',
  //           display: 'flex',
  //           flex: 1
  //         }}
  //       >
  //         {this.renderPostSocialIcons(chapter)}
  //       </CardActions>,
  //       <CardActions key="second">
  //         <CardActionButtons
  //           style={{
  //             justifyContent: 'center',
  //             display: 'flex',
  //             flex: 1,
  //             marginBottom: '20px'
  //           }}
  //         >
  //           <CardAction
  //             onClick={() =>
  //               this.props.history.push(`/stories/${chapter.variants[0].url}`)
  //             }
  //           >
  //             Continue Reading
  //           </CardAction>
  //         </CardActionButtons>
  //       </CardActions>
  //     ]
  //   }
  //
  //   return (
  //     <CardActions style={{ margin: '10px' }}>
  //       <CardActionButtons
  //         style={{ justifyContent: 'flex-start', display: 'flex', flex: 1 }}
  //       >
  //         <CardAction
  //           onClick={() =>
  //             this.props.history.push(`/story/${chapter.variants[0].url}`)
  //           }
  //         >
  //           Continue Reading
  //         </CardAction>
  //       </CardActionButtons>
  //       {this.renderPostSocialIcons(chapter)}
  //     </CardActions>
  //   )
  // }



  // renderChapter(chapter) {
  //   return (
  //     <div
  //       style={{
  //         width: '80vw',
  //         justifyContent: 'center',
  //         marginTop: '50px',
  //         maxWidth: '750px'
  //       }}
  //     >
  //       <h2>{chapter.title}</h2>
  //       <Components.Text
  //         source={`https://raw.githubusercontent.com/fluidtrends/carmel/master/chunks/story/data/chapters/${chapter.variants[0].source}/README.md`}
  //       />
  //       <div style={{ margin: '20px' }}>
  //         {this.renderPostSocialIcons(chapter, 'center')}
  //       </div>
  //       <div style={{ margin: '20px' }}>
  //         <Button
  //           onClick={() => this.props.history.goBack()}
  //           style={{
  //             display: 'flex',
  //             color: '#ffffff',
  //             backgroundColor: '#006064',
  //             border: 'none',
  //             margin: '10px auto 0',
  //             height: '35px',
  //             lineHeight: '15px'
  //           }}
  //         >
  //           <AntdIcon type="arrow-left" />
  //           Read Another Story
  //         </Button>
  //       </div>
  //     </div>
  //   )
  // }

  // renderStories() {
  //   const story = this.state.stories[0]
  //
  //   return (
  //     <div
  //       style={{
  //         display: 'flex',
  //         flex: 1,
  //         justifyContent: 'center',
  //         flexDirection: 'column',
  //         alignItems: 'center'
  //       }}
  //     >
  //       {story.chapters.map(chapter => this.renderChapterPreview(chapter))}
  //     </div>
  //   )
  // }

  renderStoryChapters() {
    console.log(this.state.story)
    return <div/>
    //   return <div
    //       style={{
    //         display: 'flex',
    //         flex: 1,
    //         justifyContent: 'center',
    //         flexDirection: 'column',
    //         alignItems: 'center'
    //       }}>
    //     hello
    // </div>
  }

  renderLoading() {
    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Components.Loading message="One sec please..." />
      </div>
    )
  }

  components() {
    if (!this.state.story) {
      return [this.renderLoading()]
    }

    return [this.renderStoryChapters()]

    // if (this.chapter) {
    //   const filteredChapter = this.state.stories[0].chapters.filter(
    //     chapter => chapter.variants[0].url === this.chapter
    //   )
    //   return [this.renderChapter(filteredChapter[0])]
    // }
    //
    // return [this.renderStories()]
  }
}
