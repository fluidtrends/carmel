import React from 'react'
import { Component } from 'react-dom-chunky'
import { Menu, Icon as AIcon, Layout, Badge, Tooltip } from 'antd'
import { Icon } from '@rmwc/icon'
import { Button, ButtonIcon } from '@rmwc/button'
import { Typography } from '@rmwc/typography'

const { Sider, Content, Footer } = Layout

export default class SideMenu extends Component {
  constructor (props) {
    super(props)

    this.state = { }
    this._itemSelected = this.itemSelected.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  itemSelected (item) {
    this.props.onItemSelected && this.props.onItemSelected({ id: item.key, type: 'side' })
  }

  renderMenuItem ({ id, badge, title, icon }) {
    const isSelected = ((id === this.props.menus.side[0].id && !this.props.selected) || (this.props.selected === id))

    return <Menu.Item key={`${id}`} style={{
      padding: 0,
      margin: 0,
      color: '#ffffff',
      backgroundColor: isSelected ? '#00bcd4' : 'rgba(0, 16, 31, 1)'
    }}>
      <Badge offset={[-2, -20]} count={badge}>
        <Icon
          icon={icon}
          style={{
            marginRight: '30px',
            height: '18px',
            width: '18px',
            fontSize: '18px',
            color: '#ffffff'
          }} />
      </Badge>
      { title }
    </Menu.Item>
  }

  get selectedKey () {
    if (!this.props.selected) {
      return [this.props.menus.side[0].id]
    }

    if (this.props.menus.side.find(i => i.id === this.props.selected)) {
      return [this.props.selected]
    }

    return
  }

  renderMenuAction () {
    if (this.props.expanded) {
      return <Button
        onClick={() => this._itemSelected({ key: 'challenges' })}
        style={{
          color: '#ffffff',
          fontSize: '12px',
          backgroundColor: '#00bcd4'
        }}>
        <Icon icon={'play_circle_filled'} style={{ marginRight: '5px' }} />
        {`Take a challenge`}
      </Button>
    }

    return <Button
      onClick={() => this._itemSelected({ key: 'challenges' })}
      style={{
        color: '#ffffff',
        backgroundColor: '#00bcd4'
      }}>
      <Icon icon={'play_circle_filled'} style={{ }} />
    </Button>
  }

  render () {
    return <Sider
      trigger={null}
      collapsible
      width={220}
      style={{
        backgroundColor: 'rgba(0, 16, 31, 1)'
      }}
      collapsed={!this.props.expanded}>
      <div style={{
        marginTop: '64px',
        flex: 1,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center'
      }}>
        <img src={'../../../../assets/carmel-logo-white.png'} style={{
          display: 'block',
          width: '54px',
          height: '54px'
        }} />
      </div>
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={this.selectedKey}
        onClick={this._itemSelected} >
        {
          this.props.menus.side.map(item => this.renderMenuItem(item))
        }
      </Menu>
      <div style={{
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center'
      }}>
        { this.renderMenuAction() }
      </div>
    </Sider>
  }
}
