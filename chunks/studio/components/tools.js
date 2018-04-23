
import React from 'react'
import { Component } from 'react-dom-chunky'
import { List, Avatar } from 'antd'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Chip, ChipText, ChipSet } from 'rmwc/Chip'
import { Typography } from 'rmwc/Typography'

export default class ToolsComponent extends Component {

  constructor (props) {
    super(props)
    this.state = { ...super.state }
    this._renderItem = this.renderItem.bind(this)
    this._renderHeader = this.renderHeader.bind(this)
    this._renderFooter = this.renderFooter.bind(this)
    this._onInstall = (item) => this.onInstall.bind(this, item)
    this._onOpen = (item) => this.onOpen.bind(this, item)
  }

  onOpen (item) {
    this.props.onOpen && this.props.onOpen(item)
  }

  onInstall (item) {
    this.props.onInstall && this.props.onInstall(item)
  }

  get data () {
    return this.props.data.map(t => t)
  }

  renderFooter () {
    return <div />
  }

  renderHeader () {
    return <div />
  }

  renderAction ({ icon, text, action, disabled }) {
    return <Button disabled={disabled} onClick={action}><ButtonIcon use={icon} /> { text }</Button>
  }

  renderActions (item) {
    if (!item.ready) {
      return [this.renderAction({ text: 'Install', icon: 'archive', action: this._onOpen(item), disabled: true })]
    }

    if (item.installed) {
      return [this.renderAction({ text: 'Launch', icon: 'launch', action: this._onOpen(item) })]
    }

    return [this.renderAction({ text: 'Install', icon: 'archive', action: this._onInstall(item) })]
  }

  renderTags (item) {
    if (!item.ready) {
      return <ChipSet>
        <Chip style={{
          backgroundColor: '#ffffff',
          color: '#CFD8DC'
        }}>
          <ChipText> Coming Soon </ChipText>
        </Chip>
      </ChipSet>
    }

    if (item.installed) {
      return <ChipSet>
        <Chip style={{
          backgroundColor: '#66BB6A',
          color: '#ffffff'
        }}>
          <ChipText> { `Version ${item.version}` } </ChipText>
        </Chip>
      </ChipSet>
    }

    return <ChipSet>
      <Chip style={{
        backgroundColor: '#ffffff',
        color: '#CFD8DC'
      }}>
        <ChipText> Not installed yet </ChipText>
      </Chip>
    </ChipSet>
  }

  renderItem (item) {
    return <List.Item actions={this.renderActions(item)}>
      <List.Item.Meta
        avatar={<Avatar shape='square' src={`${this.props.toolboxUrl}/${item.path}/image.png`} />}
        title={item.title}
        description={item.details} />
      { this.renderTags(item)}
    </List.Item>
  }

  renderList () {
    return <List
      style={{
        paddingLeft: '20px',
        paddingRight: '20px'
      }}
      size='large'
      header={this._renderHeader}
      footer={this._renderFooter}
      dataSource={this.data}
      renderItem={this._renderItem}
    />
  }

  render () {
    return <div>
      { this.renderList() }
    </div>
  }
}
