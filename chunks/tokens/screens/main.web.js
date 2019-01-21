import React from 'react'
import { Screen } from 'react-dom-chunky'
import Investors from '../components/investors'
import { Card } from '@rmwc/card'
import { Typography } from '@rmwc/typography'

export default class TokensScreen extends Screen {
  constructor (props) {
    super(props)

    this.state = { ...this.state }
    this._onAction = this.onAction.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  onAction(item) {
    this.triggerRedirect(item.path)
  }

  renderMainContent() {
    const width = this.isSmallScreen ? '95vw' : '600px'
    const padding = this.isSmallScreen ? '5px' : '30px'

      return (<div
        style={{
          display: 'flex',
          flex: 1,
          padding: "20px",
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
       <Card style={{ width, margin: '10px', padding }}>
       <Typography use='subheading2' tag='h3' style={{ textAlign:"center", color: '#333333' }}>
         1 CARMEL = 0.005 EOS
       </Typography>
       <Typography use='subheading2' tag='h3' style={{ textAlign:"center", color: '#90A4AE' }}>
          Get CARMEL by sending EOS to the
        </Typography>
        <Typography use='subheading2' tag='h3' style={{ textAlign:"center", color: '#90A4AE' }}>
         <strong> carmeltokens </strong> smart contract
        </Typography>
        <Typography
          use="caption"
          tag="div"
          style={{
            textAlign: "center",
            color: `#546E7A`,
            padding: "5px",
            backgroundColor: "#FFF9C4"}}>
          Token Distribution ends on March 7, 2019
        </Typography>
        </Card>
      </div>)
  }

  components () {
    return [this.renderMainContent()]
  }
}
