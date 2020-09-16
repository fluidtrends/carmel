import React, { useEffect, useRef, useState } from 'react'
import { LoginScreenProps, State, Template } from '../types'
import { Spin, Button, Form, Menu, Input, Typography, Dropdown, Select, Alert, Steps } from 'antd'
import * as styles from '../styles'
import strings from '../strings.json'
import { useEvent, useBlockchain } from '../hooks'
import { useDispatch, useSelector } from "react-redux"
import { initialize, register } from '../data'
import axios from 'axios'
import { Plans } from '../components'
import { replace } from 'connected-react-router'
import { KeyOutlined, CheckOutlined,  UnlockOutlined, CaretDownOutlined, LockOutlined, UserOutlined, LoadingOutlined, SmileOutlined} from "@ant-design/icons"

const { Title, Text, Paragraph } = Typography
const { Option } = Select
const { Step } = Steps
const { Search } = Input

/**
 * 
 * @param props 
 */
export const Auth: React.FC<LoginScreenProps> = (props) => {
//   const [isCreating, setIsCreating] = useState(false)
    const [key, setKey] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [warning, setWarning] = useState('')
    const [working, setWorking] = useState(false)
    const [publicKey, setPublicKey] = useState('')
    const [accounts, setAccounts] = useState([])
    const [account, setAccount] = useState('')
    const [plan, setPlan] = useState('')

    const checkKeyEvent: any = useEvent() 
    const checkUsernameEvent: any = useEvent() 

    const signupEvent: any = useEvent() 

    const dispatch = useDispatch()
    const layout = {
      wrapperCol: { span: 24 },
    }

    const tailLayout = {
      wrapperCol: {  span: 24 },
    };
    
    const [form] = Form.useForm()

    const onVerifyUsername = () => {
      if (username) {
        console.log('skip')
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
    setWorking(false)
  }, [checkKeyEvent.received])


  useEffect(() => {
    if (!checkUsernameEvent.received.id) return
  
    if (checkUsernameEvent.received.error) {
      setWarning(checkUsernameEvent.received.error)
      setWorking(false)
      return 
    }

    if (checkUsernameEvent.received.user) {
      setWarning('The username is already taken')
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

  const selectPlan = (plan: any) => {
    setPlan(plan)
  }

  const onSkip = () => {
      dispatch(replace('/'))
  }

  const onUsernameChanged = (e: any) => {
    setWarning('')
    setUsername('')
  }

  function onAccountChange(e: any) {
    const { key } = e
    setAccount(key)
  }

  const renderInfo = () => {
    if (working) {
      return (<Spin tip={strings.signingUp}/>)
    }

    if (warning) {
      return (<Alert
          message={warning}
          banner
        />)
    }

   return <Paragraph> 
     Sign up with your EOS account
     </Paragraph>
   }

  const accountMenu = (<Menu onClick={onAccountChange}> 
    {
      accounts.map((a: string) => (
        <Menu.Item key={a}  >
          { a }
        </Menu.Item>
      ))
    }
    </Menu>)

  const renderPrivateKeyField = () => (
        <Form.Item  key="privateKey" name="privateKey" style={{ width: "100%"}} >
          { accounts.length > 0 ? (
             <Dropdown overlay={accountMenu} disabled={working}>
                <Button size='large' style={{
                  height: 34,
                  backgroundColor: "#f5f5f5",
                  width: 180
                }}>
                  <Title level={4}> { account }                   
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
                enterButton={username ? <CheckOutlined /> : "Check Availability"}
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
      renderUsernameField(),
      renderPasswordField()
    ]
  }

  const renderForm = () => (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} style={{
        backgroundColor: "#ffffff",
        boxShadow: "0px 0px 8px #999999",
        minWidth: 450,
        padding: 40,
    }}>
        <Form.Item {...tailLayout}>
            <UserOutlined style={{ fontSize: 40, margin: 20 }} />
            <Title level={3}>
                Welcome to Carmel
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
        <Form.Item {...tailLayout} style={{ paddingTop: 20}}>  
            <Button disabled={working || !username} type="primary" size="large" htmlType="submit" style={{
              opacity: (working || !username || !password) ? 0.3 : 1.0
            }}>
                Create Your Carmel Account
              </Button>
        </Form.Item>
        <Form.Item {...tailLayout}>
            <Button disabled={working} type="link" htmlType="button" onClick={onSkip}>
                Skip for now
            </Button>
        </Form.Item>
    </Form>)

  const renderPlans = () => (
    <Plans selectPlan={selectPlan}/>
  )
  
  return (<div style={{
        ...styles.screen,
        backgroundColor: "#f5f5f5",
        ...layout
      }}>       
        { plan ? renderForm() : renderPlans() } 
    </div>)
}