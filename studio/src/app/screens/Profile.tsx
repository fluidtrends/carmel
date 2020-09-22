import React, { useState, useEffect } from 'react'
import { ProfileScreenProps } from '../types'
import * as styles from '../styles'
import { Plans, VaultLock } from '../components'
import { replace } from 'connected-react-router'
import { Spin, Button, Form, Tag, Input, Typography, Modal, Alert } from 'antd'
import { CheckOutlined, CaretDownOutlined, UnlockOutlined, LockOutlined, UserOutlined } from "@ant-design/icons"
import strings from '../strings.json'
import moment from 'moment'

import { State } from '../types'
import { useSelector, useDispatch } from "react-redux"
import { useEvent } from '../hooks'

const { Title, Paragraph } = Typography
const { Search } = Input

/**
 * 
 * @param props 
 */
export const Profile: React.FC<ProfileScreenProps> = (props) => { 
  const session = useSelector((state: State) => state.session) 
  const { user } = session
  const [warning, setWarning] = useState('')
  const [working, setWorking] = useState(true)
  const dispatch = useDispatch()
  const [profile, setProfile] = useState<any>('')
  const [securityCheck, setSecurityCheck] = useState(false)
  const [locked, setLocked] = useState(true)

  const data: any = useEvent()
  const topupEvent: any = useEvent()

  const onUpgrade = () => {

  }

  const onRenew = () => {

  }

  const onLockVault = () => {
    setSecurityCheck(true)

  }

  const onUnlockVault = () => {
    setSecurityCheck(true)
  }

  const onSecurityCheck = (done: boolean) => {
    setSecurityCheck(false)
    if (!done) return 

    const newLock = !locked
    setLocked(newLock)
    console.log("READY", newLock)
    // password && topupEvent.send({ type: "topup", account: user.account, password })
  }

  const onTopUp = () => {
    setSecurityCheck(true)
  }

  useEffect(() => {
    data.send({ type: "syncProfile", user })
  }, [])

  useEffect(() => {
      if (!topupEvent.received.id) return
      console.log(">>>", topupEvent.received)
  }, [topupEvent.received])

  useEffect(() => {
    if (!data.received.id) return
    
    setProfile(data.received)
    setLocked(data.received.isLocked)
    setWorking(false)
}, [data.received])

  const onUpdate= (v: any) => {
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
  }

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 19 },
    },
  }

  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 19, offset: 5 },
    },
  }

  const layout = {
    wrapperCol: { span: 24 },
  }

  const tailLayout = {
    wrapperCol: {  span: 24 },
  }


  const onSkip = () => {
    dispatch(replace('/'))
  }

  const [form] = Form.useForm()

 
  const renderFormField = (label: string, content: any, actions: any) => (
    <Form.Item key={label} label={label.toUpperCase()} style={{
      width: "100%",
   }} {...formItemLayout}>
     <div style={{
         display: "flex",
         flexDirection: "row"
     }}>
       <Paragraph style={{
         marginTop: -10,
         textAlign: "left",
         marginLeft: 20,
         backgroundColor: "#ffffff",
         display: "flex",
         flex: 10,
         borderBottom: "1px solid #c7c7c7"
       }}>
         { content }
        </Paragraph>
        { actions }
     </div>
   </Form.Item>
  )

  const renderActionButton = (title: string, type: any, call: any, i: number) => {
    return <Button size="large" key={i} type={type}
         onClick={call}
         style={{
           display: "flex",
           justifySelf: "flex-end",
           marginLeft: 20,
           flex: 1
         }}>
         { title }
      </Button>
  }

  const renderText = (text: string, i: number) => {
    return <Paragraph key={i} style={{ marginTop: 10, fontSize: 14 }}>
      { text }
    </Paragraph>
  }

  const renderTag = (color: string, content: any, i: number) => {
    return <Tag key={i} color={color} style={{
        margin: 8,
        padding: 5, 
        fontSize: 15
      }}>
         { content } 
    </Tag>
  }
  
  const renderBalanceField = () => {
    return renderFormField("carmel tokens", [
      renderTag("green", `${profile.balance.carmel.toFixed(4).toLocaleString('en-US')} CARMEL`, 1),
      renderTag("", `${profile.balance.eos.toFixed(4).toLocaleString('en-US')} EOS`, 2)
    ], [
      renderActionButton("Top Up", "primary", onTopUp, 10)
    ])
  }             

  const renderPlanField = () => {
    return renderFormField("plan", [
      renderTag(user.plan_name === 'free' ? 'blue' : 'green', user.plan_name.split('.')[0].toUpperCase(), 1),
      renderText(user.plan_name === 'free' ?  `Forever` : `Expires on ${moment.utc(user.plan_expire_timestamp * 1000).format("MMM DD, YYYY")} `, 2),
    ], [
      user.plan_name === 'free' || renderActionButton("Renew", "", onRenew, 1),
      renderActionButton("Upgrade", "primary", onUpgrade, 2),
    ])
  }

  const renderFields = () => {
    return [
      renderPlanField(),
      renderBalanceField(),
    ]
  }

  const renderInfo = () => {
    if (working) {
      return (<Spin tip={ strings.updatingProfile }/>)
    }

    if (warning) {
      return (<Alert
          message={warning}
          banner
        />)
    }

    if (locked) {
      return <Paragraph style={{
        fontSize: 16
      }}> 
       <LockOutlined/> Your secure data vault is locked
        <Button onClick={onUnlockVault} size="large" style={{marginLeft: 10}}>
          Unlock Vault
        </Button>
      </Paragraph>
    }

    return <Paragraph style={{
      fontSize: 16
    }}> 
      <UnlockOutlined/> Your secure data vault is unlocked
      <Button onClick={onLockVault} size="large" style={{marginLeft: 10}}>
        Lock Vault
      </Button>      
    </Paragraph>
  }

  if (!profile) {
    return (<div style={{
      ...styles.screen,
      backgroundColor: "#f5f5f5",
      ...layout
    }}> 
      <Spin tip={strings.loadingProfile}/>
    </div>)
  }
  
  return (<div style={{
      ...styles.screen,
      backgroundColor: "#f5f5f5",
      ...layout
    }}>       
      <VaultLock key="check" show={securityCheck} locked={locked} onDone={onSecurityCheck}/>
      <Form {...formItemLayoutWithOutLabel} key="form" form={form} name="control-hooks" onFinish={onUpdate} style={{
          backgroundColor: "#ffffff",
          boxShadow: "0px 0px 8px #999999",
          minWidth: 700,
          padding: 40,
      }}>
         <Form.Item {...tailLayout}>
              <UserOutlined style={{ fontSize: 40, margin: 20 }} />
              <Title level={2}>
                  { user.username  }
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
      </Form>
      <Button disabled={working} type="link" htmlType="button" onClick={onSkip} style={{ margin: 20 }}>
            Go back
      </Button> 
  </div>)
}