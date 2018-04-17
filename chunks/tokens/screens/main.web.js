import React from 'react'
import { Screen } from 'react-dom-chunky'
import { Picker } from '../components'
import { LinearProgress } from 'rmwc/LinearProgress'
import {
  Card,
  CardActions,
  CardActionButtons
} from 'rmwc/Card'
import { Button } from 'rmwc/Button'
import { Typography } from 'rmwc/Typography'
import { ListDivider } from 'rmwc/List'

export default class MainTokensScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount () {
    super.componentDidMount()

    if (this.isLoggedIn) {
      this.triggerRedirect(`/me/tokens`)
    }
  }

  // createdNewTransactionId(data) {
  //   setTimeout(() => {
  //     if (data.nextTokens) {
  //       this.triggerRawRedirect(`https://www.myetherwallet.com/?to=0x4E52e804905CC320BF631523a9cb1416B8d613Fb&value=${data.nextLevelPrice}&data=${data.id}#send-transaction`)      
  //       this.setState({processingMewPayment: true})
  //       this.props.updateAccount({
  //         transactionId: data.id,
  //         received: false
  //       })
  //     }
  //   }, 300);
  // }

  // renderProcessingScreen() {
  //   const width = this.props.compact ? '95vw' : '600px'
  //   return (
  //     <div
  //       style={{
  //         display: 'flex',
  //         flex: 1,
  //         margin: '10px',
  //         justifyContent: 'center',
  //         flexDirection: 'column',
  //         alignItems: 'center'
  //       }}
  //     >
  //       <Card style={{ width, margin: '20px', padding: '0px' }}>
  //         <Typography use='title' tag='h1'>
  //           Processing payment... Please check back later.
  //         </Typography>
  //         <ListDivider />
  //         <LinearProgress determinate={false} />
  //       </Card>
  //     </div>
  //   )
  // }

  // renderTokensContent() {
  //   // const processing = this.state.processingMewPayment
  //   // if(processing) {
  //   //   return this.renderProcessingScreen()
  //   // }
  //   // return <Picker />
  //   return <div />
  // }

  // components () {
  //   return [this.renderTokensContent()]
  // }
}
