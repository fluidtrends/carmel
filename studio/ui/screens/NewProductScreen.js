import React, { Component } from "react"
import BaseScreen from './BaseScreen'
import { Card, Form, Result, Select, Typography, Icon, Alert, Input, Spin, Button } from 'antd'
import logo from '../../assets/logo.gif'
import Loading from '../components/Loading'

const { Option } = Select
const { Text } = Typography

class  NewProductScreen extends BaseScreen {
    constructor() {
        super()

        this.state = {}
        this._onSelectTemplate = this.onSelectTemplate.bind(this)
        this._onCreate = this.onCreate.bind(this)
        this._onEditName = this.onEditName.bind(this)
        this._onCancel = this.onCancel.bind(this)
    }

    onUpdatedSession() {
      const session = this.props.session.data
      
      if (session.event.eventId === "init" && session.event.done) {
        console.log("INIT EVENT:", session.event)
        this.props.screenTransition && this.props.screenTransition('product', { 
          product: {
            id: session.event.options.productId,
            name: this.state.name, 
            template: this.state.template
          }
        })
        return 
       }
    }

    onCancel() {
      this.goTo('products')
    }
    
    onCreate() {
      if (!this.state.name) {
        this.setState({ error: `Don't forget the name` })
        return 
      }

      if (!this.state.template) {
        this.setState({ error: `Please select a template` })
        return 
      }

      this.setState({ ready: false })

      this.props.session.createProduct({
        name: this.state.name, 
        template: this.state.template
      })
    }

    onSelectTemplate(template) {
      this.setState({ template, error: '' })
    }

    onEditName(e) {
      this.setState({ name: e.target.value, error: '' })
    }

    renderError() {
      if (!this.state.error) {
        return <div/>
      }

      return <Alert 
                banner
                showIcon
                message={this.state.error} 
                type="error" 
                style={{marginBottom: "10px"}} />
    }

    renderForm() {
      return <Form>
        <Form.Item>
          <Input
            onChange={this._onEditName}
            prefix={<Icon type="tag" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Give it a name"
          />
        </Form.Item>

        <Form.Item>
          <Select
            style={{ width: '100%' }}
            placeholder="Choose a template:"
            onChange={this._onSelectTemplate}>
            <Option value="personal">Personal</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" style={{ width: '100%' }} onClick={this._onCreate}>
            Create it now
          </Button>
        </Form.Item>
      </Form>
    }

    renderCancelButton() {
      return  <Button 
            onClick={this._onCancel}
            style={{ paddingTop: "30px" }}
            type="link">
                Cancel
          </Button>
    }
    
    renderContent() {
      return [<img src={logo} style={{ width: "150px" }} />,
        this.renderError(),
        <Card style={{ width: 300 }}>
          { this.renderForm() }
        </Card>, this.renderCancelButton()]
    }
}

export default NewProductScreen