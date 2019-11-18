import React, { Component } from "react"
import headerImage from '../../assets/header-code.png'
import { Icon, Card, Button } from 'antd'

class Section extends Component {

  constructor() {
    super()

    this.state = {}
    this._onOpen = this.onOpen.bind(this)
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }
  
  onOpen() {
    this.props.session.openCode({ productId: this.props.product.id })
  }

  render() {    
    return <div> 
            <Card
                style={{ width: "100%" }}
                cover={ <img src={headerImage} />}
                actions={[<Button
                  onClick={this._onOpen}
                  icon="folder-open"
                  type="primary"
                  style={{
                  }}>
                  Open Code
              </Button>]}>
    </Card></div>
  }

}

export default Section