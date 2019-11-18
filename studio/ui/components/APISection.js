import React, { Component } from "react"
import { Icon, Button, Card, Avatar  } from 'antd'
import headerImage from '../../assets/header-api.png'

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
    // this.props.onStartAPIDocs && this.props.onStartAPIDocs()
  }

  onPublish() {
    // this.props.onStartAPIPublish && this.props.onStartAPIPublish()
  }
  
  render() {    
    return <div> 
            <Card
                style={{ width: "100%" }}
                cover={ <img src={headerImage} /> }
                actions={[<Button
                    disabled
                    onClick={this._onPreview}
                    icon="container"
                    type="primary"
                    style={{
                    }}>
                    Docs
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