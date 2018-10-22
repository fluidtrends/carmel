import React from 'react'
import { Component } from 'react-dom-chunky'
import { Menu, Dropdown, Badge, Tooltip } from 'antd'
import {
  TopAppBar,
  TopAppBarRow,
  ToolbarMenuIcon,
  TopAppBarSection,
  TopAppBarNavigationIcon,
  TopAppBarActionItem,
  TopAppBarTitle
} from '@rmwc/top-app-bar'
import { Icon } from '@rmwc/icon'
import { Button, ButtonIcon } from '@rmwc/button'
import { Typography } from '@rmwc/typography'

export default class MainMenu extends Component {
  constructor (props) {
    super(props)

    this.state = { }
    this._itemSelected = this.itemSelected.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  itemSelected (item) {
    this.props.onItemSelected && this.props.onItemSelected(item)
  }

  renderItem ({ icon, badge, title, id, route }) {
    return <Tooltip key={id} placement='bottomLeft' title={title}>
      <Badge offset={[15, 35]} status={badge ? 'error' : undefined}>
        <TopAppBarNavigationIcon
          icon={icon}
          style={{ marginLeft: '3px'}}
          onClick={() => this.itemSelected({ id, type: 'main' })} />
      </Badge>
    </Tooltip>
  }

  renderMenuItem ({ id, badge, title, icon }) {
    return <Menu.Item key={`${id}`} style={{
      padding: '15px',
      color: '#263238'
    }}>
      <Badge offset={[-2, -20]} count={badge}>
        <Icon
          icon={icon}
          style={{marginRight: '20px' }} />
      </Badge>
      { title }
    </Menu.Item>
  }

  get accountMenu () {
    return <Menu onClick={({ key }) => this.itemSelected({ id: key, type: 'account' })}>
      {
        this.props.menus.account.map(item => this.renderMenuItem(item))
      }
    </Menu>
  }

  get productMenu () {
    return <Menu onClick={({ key }) => this.itemSelected({ id: key, type: 'product' })}>
      {
        Object.keys(this.props.products)
        .filter(p => (this.props.products[p] && this.props.product && this.props.products[p].id !== this.props.product.id))
        .map(p => this.renderMenuItem({
          icon: 'web',
          id: this.props.products[p].id,
          title: this.props.products[p].name
        }))
      }
      <Menu.Divider />
      { this.renderMenuItem({ id: ':newProduct', title: 'New Product', icon: 'add_circle' })}
    </Menu>
  }

  renderTitle () {
    if (this.props.secondary) {
      return <Typography use='overline' style={{
        display: 'flex',
        fontSize: '14px',
        color: '#ffffff',
        flex: 1
      }}>
        { this.props.title || 'Go back' }
      </Typography>
    }

    const title = (this.props.product ? this.props.product.name : 'Your Account')

    return <Dropdown overlay={this.productMenu}
      style={{ marginLeft: 8 }}>
      <Button
        style={{ color: '#ffffff'}}>
        { title }
        <ButtonIcon icon='expand_more' />
      </Button>
    </Dropdown>
  }

  renderMainActionContent () {
    if (!this.props.account) {
      return <div style={{ marginLeft: '10px' }}>
        <Button
          onClick={() => this.props.onSignIn && this.props.onSignIn()}
          style={{ color: '#ffffff', backgroundColor: 'rgba(120,120,120,0.15)'}}>
          <ButtonIcon icon='account_circle' />
          {`Sign In`}
        </Button>
      </div>
    }

    return <div style={{ marginLeft: '10px' }}>
      <Badge offset={[2, -2]} count={0}>
        <Dropdown overlay={this.accountMenu}
          onClick={() => {}}>
          <Button
            style={{ color: '#ffffff', backgroundColor: 'rgba(120,120,120,0.15)' }}>
            <ButtonIcon icon='account_circle' />
            { this.props.account.user.name }
            <ButtonIcon icon='expand_more' />
          </Button>
        </Dropdown>
      </Badge>
    </div>
  }

  render () {
    return <TopAppBar
      style={{
        backgroundColor: this.props.backgroundColor,
        boxShadow: '0px 0px 6px 0px #455A64'
      }}>
      <TopAppBarRow>
        <TopAppBarSection alignStart>
          <TopAppBarNavigationIcon
            icon={this.props.secondary ? 'arrow_back_ios' : 'subject'}
            onClick={() => this.itemSelected({ id: this.props.secondary ? 'back' : 'toggle', type: 'primary' })}
            style={{ marginLeft: '3px'}} />
          <TopAppBarTitle>
            { this.renderTitle() }
          </TopAppBarTitle>
        </TopAppBarSection>
        <TopAppBarSection alignEnd>
          { this.props.menus.main.map(item => this.renderItem(item)) }
          { this.renderMainActionContent() }
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
  }
}
