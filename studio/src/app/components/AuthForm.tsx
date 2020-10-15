import React, { useEffect, useState } from 'react'
import { AuthFormComponentProps } from '../types'
import { Spin, Button, Form, Menu, Input, Typography, Dropdown, Alert } from 'antd'
import strings from '../strings.json'
import { useEvent } from '../hooks'
import { useDispatch } from "react-redux"
import { register } from '../data'
import { replace } from 'connected-react-router'
import { CheckOutlined, CaretDownOutlined, LockOutlined, UserOutlined } from "@ant-design/icons"

const { Title, Paragraph } = Typography
const { Search } = Input

/**
 * 
 * @param props 
 */
export const AuthForm: React.FC<AuthFormComponentProps> = (props) => {
    
    let { login } = props
   
    const [plan, setPlan] = useState<any>(props.plan)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [warning, setWarning] = useState('')
    const [working, setWorking] = useState(false)
    const [publicKey, setPublicKey] = useState('')
    const [accounts, setAccounts] = useState([])
    const [account, setAccount] = useState<any>('')
    
    const checkKeyEvent: any = useEvent() 
    const checkUsernameEvent: any = useEvent() 

    const signupEvent: any = useEvent() 
    const signinEvent: any = useEvent() 

    const dispatch = useDispatch()

    const layout = {
        wrapperCol: { span: 24 },
    }
  
    const tailLayout = {
      wrapperCol: {  span: 24 },
    }
    
    const [form] = Form.useForm()

    const onRegister = () => {
      dispatch(replace("/register"))
    }

    const onLogin = () => {
      dispatch(replace("/login"))
    }

    const onVerifyUsername = () => {
      if (username) {
        return
      }

      const u = form.getFieldValue('username')

      if (!u) {
        setWarning('Please enter a username')
        return
      }

      checkUsernameEvent.send({ type: 'findUser', username: u })
    }
  
    const onVerifyPrivateKey = () => {
      const privateKey = form.getFieldValue('privateKey')

      if (!privateKey) {
        setWarning('Please enter your EOS Private Key')
        return
      }

      setWarning('')
      checkKeyEvent.send({ type: 'checkEOSKey', privateKey })
    }

    const onPasswordChanged = (e: any) => {
      const { value } = e.target

      if (value.length < 8) {
        setPassword('')
        setWarning('Please enter at least 8 characters')
        return
      }

      setPassword(value)
      setWarning('')
    }

    const onSkip = () => {
        dispatch(replace('/'))
    }
  
    const onFinish = (v: any) => {
      if (!v.username) {
        setWarning('Please choose a username')
        return 
      }

      if (!v.password) {
        setWarning('Please choose a password')
        return 
      }

      setWarning('')
      setWorking(true)

      if (login) {
          signinEvent.send({
              type: "login",
              privateKey: v.privateKey,
              username,
              publicKey,
              account,
              password
          })
          return
      }

      signupEvent.send({
        type: "register",
        privateKey: v.privateKey,
        username,
        plan, 
        publicKey,
        account,
        password
      })
    }

    useEffect(() => {
      if (!checkKeyEvent.received.id) return
    
      if (checkKeyEvent.received.error) {
        setWarning(checkKeyEvent.received.error)
        setWorking(false)
        return 
      }

      setAccounts(checkKeyEvent.received.accounts)
      setPublicKey(checkKeyEvent.received.publicKey)
      setAccount(checkKeyEvent.received.accounts[0])
      setWarning('')
      setWorking(false)

      if (!login && plan.requiredTokens > checkKeyEvent.received.accounts[0].balance * 10000) {
        setWarning(strings.insufficientTokens)
        setPlan(props.freePlan)
      }
    }, [checkKeyEvent.received])


    useEffect(() => {
      if (!checkUsernameEvent.received.id) return
    
      if (checkUsernameEvent.received.error) {
        setWarning(checkUsernameEvent.received.error)
        setWorking(false)
        return 
      }

      if (checkUsernameEvent.received.user && !login) {
        setWarning('The username is already taken')
        setWorking(false)
        return 
      }

      if (!checkUsernameEvent.received.user && login) {
          setWarning('The username does not exist')
          setWorking(false)
          return 
      }

      setUsername(checkUsernameEvent.received.username)
      setWorking(false)
      setWarning('')
    }, [checkUsernameEvent.received])

    useEffect(() => {
      if (!signupEvent.received.id) return
    
      if (signupEvent.received.type === 'registerError') {
        setWarning(signupEvent.received.error)
        setWorking(false)
        return 
      }

      dispatch(register(signupEvent.received))
      dispatch(replace('/'))
    }, [signupEvent.received])

    useEffect(() => {
      if (!signinEvent.received.id) return
    
      if (signinEvent.received.type === 'loginError') {
        setWarning(signinEvent.received.error)
        setWorking(false)
        return 
      }

      dispatch(register(signinEvent.received))
      dispatch(replace('/'))
    }, [signinEvent.received])


    const onUsernameChanged = (e: any) => {
      setWarning('')
      setUsername('')
    }

    function onAccountChange(e: any) {
      const { key } = e
      const a = accounts.find((a: any) => a.id === key)

      setAccount(a)
      setWarning(plan.requiredTokens <= a.balance * 10000 ? '' : 'Insufficient tokens')
    }

    const renderInfo = () => {
      if (working) {
        return (<Spin tip={login ? strings.signingIn : strings.signingUp}/>)
      }

      if (warning) {
        return (<Alert
            message={warning}
            banner
          />)
      }

      if (login) {
          return <Paragraph> 
              Sign in with your EOS account
        </Paragraph>
      }

    return <Paragraph> 
        <Button style={{ marginBottom: 10 }}>
            { plan.name } Plan
        </Button>
      </Paragraph>
    }

    const sufficientTokens = () => {
      if (!plan || !account) return false

      return plan.requiredTokens <= account.balance * 10000
    }

    const accountMenu = (<Menu onClick={onAccountChange}> 
      {
        accounts.map((a: any) => (
          <Menu.Item key={a.id}  >
            { a.id }
          </Menu.Item>
        ))
      }
      </Menu>)

    const renderTokensField = () => (
      <Form.Item  key="tokens" style={{ width: "100%"}} >
        { account && (
          <Paragraph style={{ color: sufficientTokens() ? "#4CAF50" : "#f44336", fontWeight: 700 }}>
            { account.balance.toLocaleString() } CARMEL available
          </Paragraph>
        )}
        </Form.Item>
    )

    const renderPrivateKeyField = () => (
          <Form.Item  key="privateKey" name="privateKey" style={{ width: "100%"}} >
            { accounts.length > 0 ? (
              <Dropdown overlay={accountMenu} disabled={working}>
                  <Button size='large' style={{
                    height: 34,
                    opacity: working ? 0.3 : 1.0,
                    backgroundColor: "#f5f5f5",
                    width: 180
                  }}>
                    <Title level={4}>  { account.id }               
                      <CaretDownOutlined/>
                    </Title>
                </Button>
          </Dropdown>
            ) :
              (<Search
                  disabled={working || accounts.length > 0}
                  placeholder="Enter Your EOS Private Key" 
                  type="password"
                  style={{
                    opacity: (working || accounts.length > 0 ? 0.3 : 1.0)
                  }}
                  enterButton={!working && accounts.length === 0 ? "Verify" : false}
                  size="large"
                  prefix={<LockOutlined />} 
                  suffix={!working && accounts.length > 0 ? <CheckOutlined /> : false} 
                  onSearch={onVerifyPrivateKey}/>)
              }             
            </Form.Item>
    )

    const renderUsernameField = () => (
          <Form.Item key="username" name="username" style={{ width: "100%"}}>
            <Search
                disabled={working || accounts.length === 0}
                placeholder="Choose a Carmel username" 
                style={{
                  opacity: (working || accounts.length === 0 ? 0.3 : 1.0)
                }}
                enterButton={username ? <CheckOutlined /> : login ? "Verify" : "Check Availability"}
                size="large"
                prefix={<UserOutlined />} 
                onChange={onUsernameChanged}
                onSearch={onVerifyUsername}/>
          </Form.Item>
    )

    const renderPasswordField = () => (
          <Form.Item key={"password"} name="password" style={{ width: "100%"}}>
              <Input 
                  type="password"
                  disabled={working || accounts.length === 0 || !username}
                  style={{ 
                    height: 32,
                    opacity: (working || !username || accounts.length === 0 ? 0.3 : 1.0)
                  }}
                  placeholder="Choose a strong password" 
                  prefix={<LockOutlined style={{ marginLeft: 5 }} />} 
                  onChange={onPasswordChanged}/>
          </Form.Item>
    )

    const renderFields = () => {
      return [
        renderPrivateKeyField(),
        login || renderTokensField(),
        renderUsernameField(),
        renderPasswordField()
      ]
    }
    
    const renderAction = () => {
      return (<Form.Item {...tailLayout} style={{ paddingTop: 20}}>  
          <Button disabled={working || !username} type="primary" size="large" htmlType="submit" style={{
          opacity: (working || !username || !password) ? 0.3 : 1.0
          }}>
              { login ? 'Sign In Now' : 'Create Your Carmel Account' }
          </Button>
          { login || (<Paragraph style={{
                  marginTop: 5
              }}>
              { plan.requiredTokens > 0 ? `${(plan.requiredTokens / 10000).toLocaleString()} CARMEL required` : `No CARMEL required` }
              </Paragraph>)
          }
      </Form.Item>)
    }

    return (
      <div style={{
        textAlign: "center"
      }}>
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} style={{
            backgroundColor: "#ffffff",
            boxShadow: "0px 0px 8px #999999",
            minWidth: 450,
            padding: 40,
        }}>
            <Form.Item {...tailLayout}>
                <UserOutlined style={{ fontSize: 40, margin: 20 }} />
                <Title level={2}>
                    { login ? 'Welcome back' : 'Join Carmel' }
                </Title>
    
               { renderInfo() }
             
              </Form.Item>
    
            <div style={{
              display: "flex", 
              flex: 1,
              marginTop: 30,
              width: "100%",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}>
              
              { renderFields() }
    
            </div>
            { renderAction() }
            <Form.Item {...tailLayout}>
                <Button disabled={working} type="link" htmlType="button" onClick={onSkip}>
                    Skip for now
                </Button>
            </Form.Item>
           
        </Form>
        <Button onClick={login ? onRegister : onLogin}  type="link" size="large" style={{
          marginTop: 20,
        }}>
          { login ? strings.noAccountYet : strings.alreadyAnAccount }
        </Button>
        </div>
    )
}
