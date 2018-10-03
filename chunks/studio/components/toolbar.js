import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Dropdown, Menu, Icon, Button } from 'antd'

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
    if (item.key === 'newProduct') {
      this.props.onNewProduct && this.props.onNewProduct()
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

  renderMenu () {
    const items = Object.keys(this.props.products).filter(p => (p !== this.props.product.id)).map(p => {
      return <Menu.Item key={p}> <Icon type='laptop' style={{ marginRight: '5px' }} /> {this.props.products[p].name } </Menu.Item>
    })

    return <Menu onClick={this._productChanged}>
      { items }
      <Menu.Divider />
      <Menu.Item key='newProduct' style={{ color: '#42A5F5' }}>
        <Icon type='plus-circle-o' style={{ marginRight: '5px'}} />
        Create a new product
      </Menu.Item>
    </Menu>
  }

  renderMenuBar () {
    return <div style={{ padding: '0 5px', color: '#03A9F4' }}>
      { this.props.product.name }
    </div>

    // return <Dropdown overlay={this.renderMenu(items)} trigger={['click']}>
    //   <a className='ant-dropdown-link' href='#' style={{ padding: '0 5px' }}>
    //     { this.props.product.name } <Icon type='down' />
    //   </a>
    // </Dropdown>
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
        onClick={this._togglePreview}
          />
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
        icon='setting'
        onClick={this._showAccountScreen}
        style={{
          margin: '15px 0px 15px 10px',
          color: '#607D8B'
        }} />
    </div>
  }

}
