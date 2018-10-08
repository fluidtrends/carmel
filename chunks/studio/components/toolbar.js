import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Dropdown, Menu, Icon } from 'antd'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Fab } from 'rmwc/Fab'
import { Elevation } from 'rmwc/Elevation'

const SubMenu = Menu.SubMenu
const ItemGroup = Menu.ItemGroup

export default class Toolbar extends Component {
  constructor (props) {
    super(props)

    this.state = { }
    this._productOption = this.productOption.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  productOption (item) {
    const [keyType, key] = item.key.split('/')

    switch (keyType) {
      case 'screen':
        this.props.onScreenChanged && this.props.onScreenChanged(key)
        break
      default:
        this.props.onProductOption && this.props.onProductOption(key)
    }
  }

  togglePreview () {
    const preview = !this.state.preview
    this.props.onTogglePreview && this.props.onTogglePreview(preview)
    this.setState({ preview })
  }

  trimString (s, max) {
    const needsTrimming = name.length > max
    return s.substring(0, needsTrimming ? max : s.length) + (needsTrimming ? '...' : '')
  }

  renderUserTitle () {
    if (!this.props.account || !this.props.account.user) {
      return 'Sign In'
    }

    return this.trimString(this.props.account.user.name, 16)
  }

  renderUserMenu (options) {
    return <Menu onClick={this._productOption} style={{ padding: '0px'}}>
      <Menu.Item key='screen/community' style={{ color: '#546E7A', margin: '0px', padding: '5px 15px 5px 5px' }}>
        <Icon type='team' style={{ margin: '10px' }} />
          Community Resources
        </Menu.Item>
      <Menu.Item key='screen/bounties' style={{ color: '#546E7A', margin: '0px', padding: '5px 15px 5px 5px' }}>
        <Icon type='trophy' style={{ margin: '10px' }} />
        Bounties
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='screen/settings' style={{ color: '#546E7A', margin: '0px', padding: '5px 15px 5px 5px' }}>
        <Icon type='setting' style={{ margin: '10px' }} />
          Account Settings
        </Menu.Item>
    </Menu>
  }

  renderProductMenu (options) {
    // const products = Object.keys(this.props.products).map(p => <Menu.Item key={`product/${this.props.products[p].id}`} style={{ color: '#607D8B', margin: '0px', padding: '5px 15px 5px 5px' }}>
    //   <Icon type='desktop' style={{ margin: '10px' }} />
    //   { this.props.products[p].name }
    // </Menu.Item>)

    return <Menu onClick={this._productOption} style={{ padding: '0px'}}>
      <Menu.Item key='/openFile' style={{ color: '#00bcd4', margin: '0px', padding: '5px 15px 5px 5px' }}>
        <Icon type='file-text' style={{ margin: '10px' }} />
        Open File
      </Menu.Item>
      <Menu.Item key='/publishProduct' style={{ color: '#00bcd4', margin: '0px', padding: '5px 15px 5px 5px' }}>
        <Icon type='cloud-upload' style={{ margin: '10px' }} />
        Publish Product
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='/switchProduct' style={{ color: '#00bcd4', margin: '0px', padding: '5px 15px 5px 5px' }}>
        <Icon type='retweet' style={{ margin: '10px' }} />
        Switch Product
      </Menu.Item>
    </Menu>
  }

  icon (type, action) {
    return <Button
      onClick={action}
      style={{
        color: '#546E7A',
        textAlign: 'center',
        padding: '0px',
        justifyContent: 'center',
        margin: '0px'
      }}>
      <ButtonIcon icon={type}
        style={{
          selfAlign: 'center',
          padding: '0px',
          margin: '0px'
        }} />
    </Button>
  }

  render () {
    return <Elevation z={2} style={{
      display: 'flex',
      flex: 1,
      backgroundColor: '#ffffff',
      width: '100%',
      padding: '10px',
      flexDirection: 'row',
      alignItems: 'center',
      height: '100%',
      justifyContent: 'center'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
      }}>
        { this.icon(this.state.preview ? 'phonelink' : 'phonelink_off', () => this.togglePreview()) }
      </div>
      <div style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
      }}>
        <Dropdown
          overlay={this.renderProductMenu()}
          trigger={['hover']}>
          <Button style={{
            color: '#00bcd4',
            marginLeft: '3px'
          }}>
            { this.trimString(this.props.product.name, 20) }
            <ButtonIcon icon='expand_more' />
          </Button>
        </Dropdown>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
      }}>
        <Dropdown
          overlay={this.renderUserMenu()}
          trigger={['hover']}>
          <Button style={{
            color: '#546E7A',
            marginLeft: '3px'
          }}>
            <ButtonIcon icon='account_circle' />
            { this.renderUserTitle() }
            <ButtonIcon icon='expand_more' />
          </Button>
        </Dropdown>
      </div>
    </Elevation>
  }

}
