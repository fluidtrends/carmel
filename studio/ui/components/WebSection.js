import React, { Component } from "react"
import { Icon, Button, Card, Avatar  } from 'antd'
import headerImage from '../../assets/header-web.png'

const { Meta } = Card

class Section extends Component {

  constructor() {
    super()

    this.state = {}
    this._onPreview = this.onPreview.bind(this)
    this._onPublish= this.onPublish.bind(this)
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onPreview() {
    this.props.onStartWebPreview && this.props.onStartWebPreview()
  }

  onPublish() {
    // this.props.onStartWebPublish && this.props.onStartWebPublish()
  }
  
  render() {    
    return <div> 
            <Card
                style={{ width: "100%" }}
                cover={ <img src={headerImage} /> }
                actions={[<Button
                    onClick={this._onPreview}
                    icon="play-circle"
                    type="primary"
                    style={{
                    }}>
                    Preview
                </Button>, 
                <Button
                    disabled
                    onClick={this._onPublish}
                    icon="cloud-upload"
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