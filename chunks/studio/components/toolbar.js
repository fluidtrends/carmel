import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Dropdown, Menu, Icon, Button } from 'antd'

const SubMenu = Menu.SubMenu
const ItemGroup = Menu.ItemGroup

export default class Toolbar extends Component {
  constructor (props) {
    super(props)

    this.state = { }
    this._productOption = this.productOption.bind(this)
    this._showAccountScreen = this.showAccountScreen.bind(this)
    this._showTVScreen = this.showTVScreen.bind(this)
    this._showBountiesScreen = this.showBountiesScreen.bind(this)
    this._togglePreview = this.togglePreview.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  productOption (item) {
    const [keyType, key] = item.key.split('/')

    switch (keyType) {
      case 'product':
        this.props.onProductChanged && this.props.onProductChanged(this.props.products[key])
        break
      default:
        this.props.onProductOption && this.props.onProductOption(key)
    }
  }

  showTVScreen () {
    this.props.onShowTVScreen && this.props.onShowTVScreen()
  }

  showAccountScreen () {
    this.props.onShowAccountScreen && this.props.onShowAccountScreen()
  }

  showBountiesScreen () {
    this.props.onShowBountiesScreen && this.props.onShowBountiesScreen()
  }

  togglePreview () {
    const preview = !this.state.preview
    this.props.onTogglePreview && this.props.onTogglePreview(preview)
    this.setState({ preview })
  }

  renderMenu (options) {
    const products = Object.keys(this.props.products).map(p => <Menu.Item key={`product/${this.props.products[p].id}`} style={{ color: '#607D8B', margin: '0px', padding: '5px 15px 5px 5px' }}>
      <Icon type='desktop' style={{ margin: '10px' }} />
      { this.props.products[p].name }
    </Menu.Item>)

    return <Menu onClick={this._productOption} style={{ padding: '0px'}}>
      { products }
      <Menu.Divider />
      <Menu.Item key='/newProduct' style={{ color: '#42A5F5', margin: '0px', padding: '5px 15px 5px 5px' }}>
        <Icon type='plus-circle' style={{ margin: '10px' }} />
        Create New Product
      </Menu.Item>
    </Menu>
  }

  renderMenuPrimary () {
    return <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Dropdown
        overlay={this.renderMenu()}
        trigger={['click']}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: '5px',
          justifyContent: 'center'
        }}>
          <Button style={{
            color: '#03A9F4'
          }}>
            { this.props.product.name }
            <Icon type='down' style={{
              color: '#03A9F4',
              cursor: 'pointer'
            }} />
          </Button>
        </div>
      </Dropdown>
    </div>
  }

  render () {
    return <div style={{
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingRight: '10px'
    }}>
      <Icon
        style={{
          color: '#03A9F4',
          display: 'flex',
          fontSize: '18px',
          marginLeft: '10px',
          lineHeight: '64px',
          padding: '0 10px',
          cursor: 'pointer',
          marginTop: '0px',
          transition: 'color .3s'
        }}
        type={this.state.preview ? 'menu-unfold' : 'menu-fold'}
        onClick={this._togglePreview} />
      <div style={{
        flex: 1,
        display: 'flex',
        height: '64px',
        paddingTop: '2px',
        justifyContent: 'flex-start'
      }}>
        <Button
          shape='circle'
          icon='copy'
          ghost
          onClick={() => this._productOption({ key: '/openFile' })}
          style={{
            margin: '15px 0px 15px 0px',
            color: '#03A9F4'
          }} />
        <Button
          shape='circle'
          icon='setting'
          ghost
          onClick={() => this._productOption({ key: '/productSettings' })}
          style={{
            margin: '15px 0px 15px 0px',
            color: '#03A9F4'
          }} />
        { this.renderMenuPrimary() }
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        <Button
          shape='circle'
          icon='play-circle'
          ghost
          onClick={this._showTVScreen}
          style={{
            margin: '15px 0px 15px 0px',
            color: '#90A4AE'
          }} />
        <Button
          shape='circle'
          icon='gift'
          ghost
          onClick={this._showBountiesScreen}
          style={{
            margin: '15px 0px 15px 0px',
            color: '#90A4AE'
          }} />
        <Button
          shape='circle'
          ghost
          icon='user'
          onClick={this._showAccountScreen}
          style={{
            margin: '15px 0px 15px 0px',
            color: '#90A4AE'
          }} />
      </div>
    </div>
  }

}
