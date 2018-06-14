import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import { Portfolio, Create } from '../components/index.desktop'
import {
  Card,
  CardActions,
  CardActionButtons
} from 'rmwc/Card'
import { Button, ButtonIcon } from 'rmwc/Button'
import { Typography } from 'rmwc/Typography'
import { Form, Input, Icon, Carousel } from 'antd'
import fs from 'fs-extra'
import path from 'path'
import os from 'os'

const FormItem = Form.Item

export default class ProductsScreen extends Screen {
  constructor (props) {
    super(props)
    this.state = { ...super.state, products: [] }
  }

  openIt (data) {
    console.log('DDDD')
  }

  componentDidMount () {
    super.componentDidMount()

    this.loadProducts()
  }

  get homedir () {
    if (os.userInfo && os.userInfo().homedir) {
      return os.userInfo().homedir
    }

    if (os.homedir) {
      return os.homedir()
    }

    return process.env.HOME
  }

  get indexFile () {
    return path.resolve(this.homedir, '.carmel', 'products', 'index.json')
  }

  loadProducts () {
    try {
      const products = JSON.parse(fs.readFileSync(this.indexFile, 'utf8'))
      const carmelFile = JSON.parse(fs.readFileSync(path.resolve(this.homedir, products[0].location, 'chunky.json'), 'utf8'))
      console.log(carmelFile)
    } catch (e) {
      console.log(e)
    }
    console.log(path.resolve(__dirname))
    console.log(path.resolve(process.cwd()))

    const products = [{
      'name': 'meet-chris',
      'image': 'https://github.com/fluidtrends/carmel/raw/content/story/meet-chris/large.png',
      'imageSmall': 'https://github.com/fluidtrends/carmel/raw/content/story/meet-chris/small.png',
      'thumbnail': 'https://github.com/fluidtrends/carmel/raw/content/story/meet-chris/thumb.png',
      'backgroundColor': '#ffffff',
      'path': 'meet-chris',
      'title': 'Meet Chris',
      'details': 'Chris is a 40 year old father who has the type of job that can be easily replaced by robots. What keeps Chris up at night is the thought that soon, he might lose his job and not be able to provide for his family.',
      'actionTitle': '',
      'action': {
        'handler': '#openIt'
      },
      'content': {
        'text': 'github://fluidtrends/carmel/content/story/meet-chris/README',
        'textColor': '#37474F'
      }
    }]
    this.setState({ products, loading: false })
  }

  renderProducts () {
    if (this.state.loading) {
      return <Components.Loading message='Loading Your Carmel Products...' />
    }

    return <Components.Collection id='products' categories={this.state.products} />
  }

  components () {
    return [this.renderProducts()]
  }
}
