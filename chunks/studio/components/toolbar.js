import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Dropdown, Menu, Icon, Button } from 'antd'

const SubMenu = Menu.SubMenu
const ItemGroup = Menu.ItemGroup

export default class Toolbar extends Component {
  constructor (props) {
    super(props)

    this.state = { }
    this._productChanged = this.productChanged.bind(this)
    this._showAccountScreen = this.showAccountScreen.bind(this)
    this._showTVScreen = this.showTVScreen.bind(this)
    this._showBountiesScreen = this.showBountiesScreen.bind(this)
    this._togglePreview = this.togglePreview.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
  }

  productChanged (item) {
    if (item.key) {
      this.props.onProductOption && this.props.onProductOption(item)
      return
    }

    const p = this.props.products[item.key]
    this.props.onProductChanged && this.props.onProductChanged(p)
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
    // {
    //   options.map(option => <Menu.Item key={option.id} style={{ padding: '10px' }}> <Icon type={option.icon} style={{ padding: '5px' }} /> {option.title} </Menu.Item>)
    // }
    return <Menu onClick={this._productChanged} style={{ padding: '0px'}}>
      <Menu.Item key='openFile' style={{ color: '#607D8B', margin: '0px', padding: '5px 15px 5px 5px' }}>
        <Icon type='form' style={{ margin: '10px' }} />
       Open File
      </Menu.Item>
      <Menu.Item key='editSettings' style={{ color: '#607D8B', margin: '0px', padding: '5px 15px 5px 5px' }}>
        <Icon type='setting' style={{ margin: '10px' }} />
       Edit Settings
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='changeProduct' style={{ color: '#42A5F5', margin: '0px', padding: '5px 15px 5px 5px' }}>
        <Icon type='desktop' style={{ margin: '10px' }} />
       Change Product
      </Menu.Item>
    </Menu>
    // return <Menu onClick={this._productChanged} style={{ padding: '0px'}}>
    //   <ItemGroup key='openFile' title='Product Settings'>
    //     <Menu.Item key='openFile' style={{ color: '#42A5F5', margin: '0px', padding: '5px' }}>
    //       <Icon type='form' style={{ margin: '10px' }} />
    //    Open File
    //   </Menu.Item>
    //   </ItemGroup>
    //   <Menu.Divider />
    //   {
    //     options.map(option => <Menu.Item key={option.id} style={{ padding: '10px' }}> <Icon type={option.icon} style={{ padding: '5px' }} /> {option.title} </Menu.Item>)
    //   }
    //   <Menu.Divider />
    //   <Menu.Item key='newProduct' style={{ color: '#42A5F5', margin: '0px', padding: '5px' }}>
    //     <Icon type='plus-circle-o' style={{ margin: '10px' }} />
    //     New product
    //   </Menu.Item>
    // </Menu>
  }

  renderMenuBar () {
    const options = Object.keys(this.props.products).map(p => ({
      id: this.props.products[p].id,
      icon: 'desktop',
      title: this.props.products[p].name
    }))

    return <Dropdown overlay={this.renderMenu(options)} trigger={['click']}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <a className='ant-dropdown-link' href='#' style={{
          padding: '0px 5px',
          color: '#03A9F4',
          textDecoration: 'none'
        }}>
          { this.props.product.name }
        </a>
        <Icon type='down' style={{
          fontSize: '20px',
          color: '#03A9F4',
          cursor: 'pointer'
        }} />
      </div>
    </Dropdown>
  }

  render () {
    return <div style={{
      display: 'flex',
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingRight: '10px'
    }}>
      <Icon
        style={{
          color: '#607D8B',
          display: 'flex',
          fontSize: '18px',
          marginLeft: '10px',
          lineHeight: '64px',
          padding: '0 10px',
          cursor: 'pointer',
          transition: 'color .3s'
        }}
        type={this.state.preview ? 'menu-unfold' : 'menu-fold'}
        onClick={this._togglePreview} />
      <div style={{
        flex: 1,
        display: 'flex'
      }}>
        { this.renderMenuBar() }
      </div>
      <Button
        shape='circle'
        icon='play-circle'
        ghost
        onClick={this._showTVScreen}
        style={{
          margin: '15px 0px 15px 10px',
          color: '#607D8B'
        }} />
      <Button
        shape='circle'
        icon='gift'
        ghost
        onClick={this._showBountiesScreen}
        style={{
          margin: '15px 0px 15px 10px',
          color: '#607D8B'
        }} />
      <Button
        shape='circle'
        ghost
        icon='user'
        onClick={this._showAccountScreen}
        style={{
          margin: '15px 0px 15px 10px',
          color: '#607D8B'
        }} />
    </div>
  }

}
