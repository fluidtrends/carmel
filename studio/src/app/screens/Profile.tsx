import React, { useState, useEffect } from 'react'
import { ProfileScreenProps } from '../types'
import * as styles from '../styles'
import { Plans, VaultLock } from '../components'
import { replace } from 'connected-react-router'
import { Spin, Button, Form, Tag, Input, Typography, Badge, Divider, Alert, Card } from 'antd'
import { UnlockOutlined, LockOutlined, UserOutlined } from "@ant-design/icons"
import strings from '../strings.json'
import moment from 'moment'

import { State } from '../types'
import { useSelector, useDispatch } from "react-redux"
import { useEvent } from '../hooks'

const { Title, Text, Paragraph } = Typography
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
    // password && topupEvent.send({ type: "topup", account: user.account, password })
  }

  const onTopUp = () => {
    setSecurityCheck(true)
  }

  useEffect(() => {
    data.send({ type: "load" })
  }, [])

  useEffect(() => {
      if (!topupEvent.received.id) return
      console.log(">>>", topupEvent.received)
  }, [topupEvent.received])

  useEffect(() => {
    if (!data.received.id) return
    setProfile(data.received.profile)
    setLocked(data.received.session.isLocked)
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
           <span style={{
             width: 120
           }}>
            { title }
           </span>
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
    return renderFormField("tokens", [
      renderTag("green", `${profile.tokens.carmel.toFixed(4).toLocaleString('en-US')} CARMEL`, 1)
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

  const showSkills = () => {
    if (!profile.skills || Object.keys(profile.skills).length === 0) {
      return <div style={{ marginBottom: 4, textAlign: "center" }}>
          <Paragraph> You have not collected any skills yet. </Paragraph>
      </div>
    }

    return <div style={{ marginBottom: 4, textAlign: "center" }}>
        { Object.keys(profile.skills).map((skill: any, i: number) => (
            <Tag key={i} style={{
                 marginTop: 0, borderRadius: 8, padding: 4, paddingLeft: 10, paddingRight: 10, fontSize: 13 
                 }}> { skill } 
                <Badge count={profile.skills[skill]} style={{ 
                    marginTop: -3,
                    marginLeft: 5, 
                    fontSize: 10,
                    backgroundColor: '#8BC34A' 
                }}/>
            </Tag>
        ))}
        </div>
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
      <Card style={{
         backgroundColor: "#ffffff",
         boxShadow: "0px 0px 8px #999999",
         minWidth: 700,
         marginTop: 16,
         padding: 40,
      }}>
              <UserOutlined style={{ fontSize: 40, margin: 20 }} />
              <Title level={1}>
                  @{ user.username  }
              </Title>
              <Divider orientation="center" style={{marginTop: 20}}>Skills:</Divider>
              { showSkills() }

      </Card>

      <Form {...formItemLayoutWithOutLabel} key="form" form={form} name="control-hooks" onFinish={onUpdate} style={{
          backgroundColor: "#ffffff",
          boxShadow: "0px 0px 8px #999999",
          minWidth: 700,
          marginTop: 20,
          padding: 20,
      }}> 
    
          <div style={{
            display: "flex", 
            flex: 1,
            marginTop: 20,
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>            
            { renderFields() }
          
            <Divider style={{marginBottom: 30}}/>
            
            { renderInfo() }
          </div>
      </Form>
      

      <Button disabled={working} type="link" htmlType="button" onClick={onSkip} style={{ margin: 20 }}>
            Go back
      </Button> 
  </div>)
}