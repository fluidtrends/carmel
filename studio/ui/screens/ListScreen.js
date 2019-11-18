import React, { Component } from "react"
import { Spin, Icon, Button, Menu, Dropdown, Typography, List, PageHeader, Row, Col } from 'antd'
import BaseScreen from './BaseScreen'
import ListItem from '../components/ListItem'

const { Text } = Typography

class ListScreen extends BaseScreen {

  constructor() {
    super()

    this.state = {}
    this._onAction = (item) => this.onAction.bind(this, item)
  }

  updateItem(itemId, updates) {
    const itemIndex = this.state.data.findIndex(i => i.id === itemId)
    const data = Array.from(this.state.data)
    data[itemIndex] = Object.assign({}, data[itemIndex], updates)
    this.setState({ data })
  }

  onAction(item) {
  }
  
  get config() {
    return this._config
  }

  renderNoItems() {
    return <div style={{ 
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      flexDirection: "column"
    }}>
      <Icon type="exclamation-circle" size="large" style={{
        color: "#C5C5C5",
        fontSize: "60px",
        padding: "10px"
      }}/>      
      <Text disabled> { this.props.noItemsLabel || '' } </Text> 
    </div>
  }

  get itemPadding() {
    return 5
  }

  renderItem(item) {
    return <ListItem 
                padding={this.itemPadding}
                onAction={this._onAction(item)} 
                key={item.id} {...item}/>
  }

  renderContent() {
    if (!this.state.data || this.state.data.length === 0) {
      return this.renderNoItems()
    }

    return <List
      itemLayout="horizontal"
      style={{
        overflow: "scroll",
        display: "flex",
        flexDirection: "column",
        width: "100%"
      }}
      dataSource={this.state.data}
      renderItem={item => this.renderItem(item)}/>
  }
}

export default ListScreen