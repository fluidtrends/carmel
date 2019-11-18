import React, { Component } from "react"
import { Icon, Button, Card, Avatar  } from 'antd'
import headerImageiOS from '../../assets/header-ios.png'
import headerImageAndroid from '../../assets/header-android.png'

const { Meta } = Card

class Section extends Component {

  constructor() {
    super()

    this.state = {}
    this._onPreviewiOS = this.onPreviewiOS.bind(this)
    this._onPreviewAndroid = this.onPreviewAndroid.bind(this)
    this._onPublishiOS = this.onPublishiOS.bind(this)
    this._onPublishAndroid = this.onPublishAndroid.bind(this)
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onPreviewiOS() {
    // this.props.onStartMobilePreview && this.props.onStartMobilePreview('ios')
  }

  onPreviewAndroid() {
    // this.props.onStartMobilePreview && this.props.onStartMobilePreview('android')
  }

  onPublishiOS() {
    // this.props.onStartMobilePublish && this.props.onStartMobilePublish('ios')
  }

  onPublishAndroid() {
    // this.props.onStartMobilePublish && this.props.onStartMobilePublish('android')
  }
  
  render() {    
    return <div> 
            <Card
                style={{ width: "100%", marginBottom: "20px" }}
                cover={ <img src={headerImageiOS} /> }
                actions={[<Button
                    disabled
                    onClick={this._onPreviewiOS}
                    icon="play-circle"
                    type="primary"
                    style={{
                    }}>
                    Preview
                </Button>,
                <Button
                  disabled
                  onClick={this._onPublishiOS}
                  icon="apple"
                  style={{
                  }}>
                  Publish
                </Button>
              ]}>                  
          </Card>
          <Card
                style={{ width: "100%" }}
                cover={ <img src={headerImageAndroid} /> }
                actions={[<Button
                    disabled
                    onClick={this._onPreviewAndroid}
                    icon="play-circle"
                    type="primary"
                    style={{
                    }}>
                    Preview
                </Button>,
                <Button
                  disabled
                  onClick={this._onPublishAndroid}
                  icon="android"
                  style={{
                  }}>
                  Publish
                </Button>
          ]}>                  
        </Card>
    </div>
  }

}

export default Section