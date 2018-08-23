import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Dropdown, Menu, Icon } from 'antd'

export default class Toolbar extends Component {
  constructor (props) {
    super(props)

    this.state = { }
    this._productChanged = this.productChanged.bind(this)
    this._showAccountScreen = this.showAccountScreen.bind(this)
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

  showAccountScreen () {
    this.props.onShowAccountScreen && this.props.onShowAccountScreen()
  }

  togglePreview () {
    const preview = !this.state.preview
    this.props.onTogglePreview && this.props.onTogglePreview(preview)
    this.setState({ preview })
  }

  render () {
    const items = Object.keys(this.props.products).filter(p => (p !== this.props.product.id)).map(p => {
      return <Menu.Item key={p}> <Icon type='laptop' style={{ marginRight: '5px'}} /> {this.props.products[p].name } </Menu.Item>
    })

    const menu = <Menu onClick={this._productChanged}>
      { items }
      <Menu.Divider />
      <Menu.Item key='newProduct' style={{ color: '#42A5F5' }}>
        <Icon type='plus-circle-o' style={{ marginRight: '5px'}} />
        Create a new product
      </Menu.Item>
    </Menu>

    return <div style={{
      display: 'flex',
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
    }}>
      <Icon
        style={{
          color: '#455A64',
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
        <Dropdown overlay={menu} trigger={['click']}>
          <a className='ant-dropdown-link' href='#' style={{ padding: '0 5px' }}>
            { this.props.product.name } <Icon type='down' />
          </a>
        </Dropdown>
      </div>
      <Icon
        style={{
          color: '#455A64',
          display: 'flex',
          fontSize: '18px',
          lineHeight: '64px',
          padding: '0 24px',
          cursor: 'pointer',
          alignSelf: 'flex-end',
          transition: 'color .3s'
        }}
        type={'user'}
        onClick={this._showAccountScreen} />
    </div>
  }

}
