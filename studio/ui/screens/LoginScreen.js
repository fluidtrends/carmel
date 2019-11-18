
import React, { Component } from "react"
import { Card, Form, Result, Select, Typography, Icon, Alert, Input, Spin, Button } from 'antd'
import logo from '../../assets/logo.gif'
import Loading from '../components/Loading'
import BaseScreen from './BaseScreen'
import loading from '../../assets/loading1.gif'
import Fade from 'react-reveal/Fade'

const { Option } = Select
const { Text } = Typography

class  LoginScreen extends BaseScreen {
    constructor() {
        super()

        this.state = {}
        this._onLogin = this.onLogin.bind(this)
        this._onEditEmail = this.onEditEmail.bind(this)
        this._onEditPassword = this.onEditPassword.bind(this)
    }

    onUpdatedSession() {
      const session = this.props.session.data

      if (session.event.eventId === "login") {
        if (session.event.error) {
          this.setState({ error: session.event.error, trying: false })
          return 
        }

        this.close()
      }
    }
    
    onLogin() {
      if (!this.state.email) {
        this.setState({ error: `Don't forget the email` })
        return 
      }

      if (!this.state.password) {
        this.setState({ error: `Please enter your password` })
        return 
      }

      this.setState({ trying: true })

      this.props.session.login({
        productId: this.props.productId,
        email: this.state.email,
        password: this.state.password
      })
    }

    onSelectTemplate(template) {
      this.setState({ template, error: '' })
    }

    onEditEmail(e) {
      this.setState({ email: e.target.value, error: '' })
    }

    onEditPassword(e) {
        this.setState({ password: e.target.value, error: '' })
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
                style={{marginBottom: "10px", width: "300px"}} />
    }

    renderForm() {
      return <Form>
        <Form.Item>
          <Input
            onChange={this._onEditEmail}
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Enter your email"
          />
        </Form.Item>

        <Form.Item>
          <Input
            onChange={this._onEditPassword}
            type="password"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Enter your password"
          />
        </Form.Item>


        <Form.Item>
          <Button type="primary" style={{ width: '100%' }} onClick={this._onLogin}>
            Sign in now
          </Button>
        </Form.Item>
      </Form>
    }
    
    renderContent() {
      if (this.state.trying) {
        return <div style={{
          flex: 1,
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Fade>
            <Card style={{ width: "300px", textAlign: "center" }}>
              <img src={loading} style={{ width: "100px", marginLeft: "40px" }} />
            </Card>
          </Fade>
        </div>
      }

      return [<img src={logo} style={{ width: "150px" }} />,
        this.renderError(),
        <Fade><Card style={{ width: "300px", textAlign: "center" }}>
          { this.renderForm() }
        </Card></Fade>]
    }
}

export default LoginScreen