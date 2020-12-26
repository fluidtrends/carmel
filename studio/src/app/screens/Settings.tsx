import React, { useState, useEffect } from 'react'
import { ProfileScreenProps } from '../types'
import * as styles from '../styles'
import { Plans, VaultLock, DNSSetup } from '../components'
import { replace } from 'connected-react-router'
import { Spin, Button, Form, Row, Col, Tag, Input, Typography, Badge, Switch, Card } from 'antd'
import { UnlockOutlined, LockOutlined, CloseOutlined, CheckOutlined, SettingOutlined } from "@ant-design/icons"
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
export const Settings: React.FC<any> = (props) => { 
  const session = useSelector((state: State) => state.session) 
  const dispatch = useDispatch()
  const [working, setWorking] = useState<any>('')
  const [securityCheck, setSecurityCheck] = useState(false)
  const [locked, setLocked] = useState(session.isLocked)
  const [ipfsRunning, setIpfsRunning] = useState(session.ipfsRunning)
  const [dnsEditing, setDnsEditing] = useState(false)

  const ipfs: any = useEvent()
  const topupEvent: any = useEvent()

//   const onUpgrade = () => {

//   }

//   const onRenew = () => {

//   }

  console.log(">>#####>>>>>", session)

  const onDoneDNSEditing = () => {
    setDnsEditing(false)
  }

  const onSetupDNS = () => {
    setDnsEditing(true)
  }

  const onVaultChange = () => {
    // setLocked(!locked)
    setSecurityCheck(true)
  }

  const onLockVault = () => {
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
  
  const onIpfsRestart = () => {
    setWorking('Restarting IPFS ...')
    ipfs.send({ type: 'ipfsRestart' })
  }

  const onIpfsStart = () => {
    setWorking('Starting IPFS ...')
    ipfs.send({ type: 'ipfsStart' })
  }
    
  useEffect(() => {
      if (!ipfs.received.id) return
      console.log(">>>", ipfs.received)
      const session = useSelector((state: State) => state.session) 
      console.log(">>>>>>>", session)
  }, [ipfs.received])

//   useEffect(() => {
//       if (!topupEvent.received.id) return
//       console.log(">>>", topupEvent.received)
//   }, [topupEvent.received])

//   useEffect(() => {
//     if (!data.received.id) return
//     setProfile(data.received.profile)
//     setLocked(data.received.session.isLocked)
//     setWorking(false)
//   }, [data.received])

  const onUpdate = (v: any) => {
//     if (!v.username) {
//       setWarning('Please choose a username')
//       return 
//     }

//     if (!v.password) {
//       setWarning('Please choose a password')
//       return 
//     }

//     setWarning('')
//     setWorking(true)
  }

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  }

  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 20, offset: 4 },
    },
  }

  const layout = {
    wrapperCol: { span: 24 },
  }

  // const tailLayout = {
  //   wrapperCol: {  span: 24 },
  // }

  const onSkip = () => {
    dispatch(replace('/'))
  }

  const [form] = Form.useForm()

  const renderFormField = (label: string, content: any, actions: any, secure: boolean = false) => (
    <Form.Item key={label} label={label.toUpperCase()} style={{
      width: "100%",
      opacity: (!secure || secure &&!locked) ? 1.0 : 0.3
   }} {...formItemLayout}>
     <div style={{
         display: "flex",
         flexDirection: "row"
     }}>
      { (!secure || secure &&!locked) && actions }
       <div style={{
         marginTop: -10,
         textAlign: "left",
         marginLeft: 20,
         backgroundColor: "#ffffff",
         display: "flex",
         flex: 10,
         borderBottom: "1px solid #c7c7c7"
       }}>
         { content }
        </div>
     </div>
   </Form.Item>
  )

  const renderEditFormField = (label: string, content: any, actions: any) => (
    <Form.Item key={label} label={label.toUpperCase()} style={{
      width: "100%",
   }} {...formItemLayout}>
     <div style={{
         display: "flex",
         flexDirection: "row"
     }}>
       { actions }
       <div style={{
         marginTop: -10,
         textAlign: "left",
         marginLeft: 20,
         backgroundColor: "#ffffff",
         display: "flex",
         flex: 10,
         borderBottom: "1px solid #c7c7c7"
       }}>
         { content }
        </div>
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
             width: 80
           }}>
            { title }
           </span>
      </Button>
  }

  const renderText = (text: string, i: number) => {
    return <Paragraph key={i} style={{ 
        margin: 8,
        padding: 5, 
        fontSize: 15
      }}>
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
  
  const renderIpfsField = () => {
    return renderFormField("ipfs", [
      renderTag(ipfsRunning ? "green" : "red", `Your IPFS Node is${ipfsRunning ? '' : ' not'} running`, 1),
    ], [
      renderActionButton(ipfsRunning ? "Stop" : "Start", "secondary", ipfsRunning ? onIpfsStart : onIpfsRestart, 10)
    ])
  }   
  
  const renderDNSField = () => {
    return renderFormField("DNS", [
      renderTag("blue", "Namecheap", 1),
    ], [
      renderActionButton("Setup", "secondary", onSetupDNS, 10)
    ], true)
  }   

  const renderFields = () => {
    return [
      renderIpfsField(),
      renderDNSField()
    ]
  }

  // const showSkills = () => {
  //   if (!profile.skills || Object.keys(profile.skills).length === 0) {
  //     return <div style={{ marginBottom: 4, textAlign: "center" }}>
  //         <Paragraph> You have not collected any skills yet. </Paragraph>
  //     </div>
  //   }

  //   return <div style={{ marginBottom: 4, textAlign: "center" }}>
  //       { Object.keys(profile.skills).map((skill: any, i: number) => (
  //           <Tag key={i} style={{
  //                marginTop: 0, borderRadius: 8, padding: 4, paddingLeft: 10, paddingRight: 10, fontSize: 13 
  //                }}> { skill } 
  //               <Badge count={profile.skills[skill]} style={{ 
  //                   marginTop: -3,
  //                   marginLeft: 5, 
  //                   fontSize: 10,
  //                   backgroundColor: '#8BC34A' 
  //               }}/>
  //           </Tag>
  //       ))}
  //       </div>
  // }

  // const renderInfo = () => {
  //   // if (locked) {
  //   //   return <Paragraph style={{
  //   //     fontSize: 16
  //   //   }}> 
  //   //    <LockOutlined/> Your secure data vault is locked
  //   //     <Button onClick={onUnlockVault} size="large" style={{marginLeft: 10}}>
  //   //       Unlock Vault
  //   //     </Button>
  //   //   </Paragraph>
  //   // }

  //   // return <Paragraph style={{
  //   //   fontSize: 16
  //   // }}> 
  //   //   <UnlockOutlined/> Your secure data vault is unlocked
  //   //   <Button onClick={onLockVault} size="large" style={{marginLeft: 10}}>
  //   //     Lock Vault
  //   //   </Button>      
  //   // </Paragraph>
  // }

  // if (!profile) {
  //   return (<div style={{
  //     ...styles.screen,
  //     backgroundColor: "#f5f5f5",
  //     ...layout
  //   }}> 
  //     <Spin tip={strings.loadingProfile}/>
  //   </div>)
  // }
  
  return (<div style={{
      ...styles.screen,
      backgroundColor: "#f5f5f5",
      ...layout
    }}>       
      <VaultLock key="check" show={securityCheck} locked={locked} onDone={onSecurityCheck}/>
      <DNSSetup key="dns" show={dnsEditing && !locked} onDone={onDoneDNSEditing}/>
      <div style={{
         minWidth: 700,
         marginTop: 16,
         padding: 20,
      }}>
          <SettingOutlined style={{ fontSize: 30, margin: 10 }} />
          <Title level={2}>
            Settings
          </Title>  
          <Text mark={locked} disabled={!locked}>vault locked</Text>            
          <Switch
              onChange={onVaultChange}
                style={{ margin: 5 }}
                checkedChildren={<LockOutlined />}
                unCheckedChildren={<UnlockOutlined />}
                defaultChecked={locked}
              />
              <Text mark={!locked} disabled={locked}>vault unlocked</Text>
          </div>

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
          </div>
      </Form>
      
      <Button type="link" htmlType="button" onClick={onSkip} style={{ margin: 20 }}>
            Go back
      </Button> 
  </div>)
}