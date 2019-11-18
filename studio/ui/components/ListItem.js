import React, { Component } from "react"
import { Typography, Icon, Tag, Button, Progress } from 'antd'
import Fade from 'react-reveal/Fade'
const { Text } = Typography

class ListItem extends Component {

  constructor() {
    super()

    this.state = {}
    this._onSelect = this.onSelect.bind(this)
    this._toggleHighlight = this.toggleHighlight.bind(this)
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  renderIcon() {
    if (!this.props.icon) {
      return <div/>
    }

    return <div style={{ 
      display: "flex",
      width: "60px"
    }}>
      <img src={this.props.icon} style={{ height: "48px" }} />
    </div>
  }

  onSelect() {
    this.props.onAction && this.props.onAction()
  }

  toggleHighlight() {
    this.setState({ highlight: !this.state.highlight })
  }

  renderTags() {
    if (!this.props.tags) {
      return <div/>
    }

    let index = 0
    const labels = this.props.tags.labels.map(label => <Tag key={index++} color={label.color}>
       { label.text }
    </Tag>)

    return <div style={{ marginTop: "5px" }}>
      <Text disabled style={{ marginRight: "5px" }}> 
        { this.props.tags.title } 
      </Text>
      { labels }
    </div>
  }

  render() {
    return <Fade>
        <div 
            onMouseEnter={this._toggleHighlight}
            onMouseOut={this._toggleHighlight}
            onMouseUp={this._onSelect}
            style={{ 
              display: "flex",
              flex: 1, 
              flexDirection: "row",
              cursor: "pointer",
              boxShadow: "1px 1px 3px #B0BEC5",
              margin: "10px",
              padding: "10px",
              height: "120px",
              backgroundColor: this.state.highlight ? "#FFFFFF" : "#F5F5F5"
            }}>
                { this.renderIcon() }
               <div style={{ 
                display: "flex",
                alignItems: "top",
                flexDirection: "column",
                justifyContent: "top",
                padding: "10px",
                flex: 1
              }}> 
                <Text strong style={{ fontSize: "18px"}}> 
                  {this.props.title}
                </Text>
                <Text disabled> 
                  {this.props.subtitle}
                </Text>
               { this.renderTags() }
              </div>
        </div>
      </Fade>
  }
}

export default ListItem