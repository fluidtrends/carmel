import React, { useState, useEffect } from 'react'
import { ProfileScreenProps } from '../types'
import * as styles from '../styles'
import { Plans, VaultLock, DNSSetup } from '../components'
import { replace } from 'connected-react-router'
import { Spin, Button, Form, Row, Col, Tag, Input, Typography, Dropdown, Menu, Divider, Switch } from 'antd'
import { UnlockOutlined, LockOutlined, PlusOutlined, CheckOutlined, DownOutlined } from "@ant-design/icons"
import strings from '../strings.json'
import moment from 'moment'

import { State } from '../types'
import { useSelector, useDispatch } from "react-redux"
import { useEvent } from '../hooks'
import { Swing } from 'react-awesome-reveal'

const { Title, Text, Paragraph } = Typography
const { Search, TextArea } = Input

/**
 * 
 * @param props 
 */
export const Vault: React.FC<any> = (props) => { 
  const session = useSelector((state: State) => state.session) 
  const dispatch = useDispatch()
  const [working, setWorking] = useState<any>('')
  const [securityCheck, setSecurityCheck] = useState(false)
  const [addingGroup, setAddingGroup] = useState(false)
  const [addingSecret, setAddingSecret] = useState(false)
  const [secrets, setSecrets] = useState<any>()
  const [group, setGroup] = useState<any>('default')
  const [locked, setLocked] = useState(session.isLocked)
  const secretsEvent: any = useEvent()
  const newGroupEvent: any = useEvent()
  const newSecretEvent: any = useEvent()

  const loadSecrets = () => {
    setWorking(true)
    secretsEvent.send({ type: "getAllSecrets" })
  }

  const onNewSecret = () => {
    setAddingSecret(true)
  }

  const onAddSecret = () => {
    const newSecretName = form.getFieldValue('newSecretName')
    var newSecretValue = form.getFieldValue('newSecretValue')

    newSecretValue = JSON.parse(newSecretValue)

    newSecretEvent.send({ type: "updateSecret", key: group, values: 
      { [newSecretName]: newSecretValue }
    })

    setWorking(true)
  }

  const onCancelAddGroup = () => {
    setAddingGroup(false)
  }

  const onDeleteGroup = () => {
  }

  const onCancelAddSecret = () => {
    setAddingSecret(false)
  }

  useEffect(() => {
    locked || loadSecrets()
  }, [])

  useEffect(() => {
    if (!newSecretEvent.received.id) return

    console.log(newSecretEvent.received)
    if (newSecretEvent.received.error) {
      setWorking(true)
      return 
    }

    setWorking(false)
    setSecrets(newSecretEvent.received.secrets)
    setAddingGroup(false)
    setAddingSecret(false)
  }, [newSecretEvent.received])


  useEffect(() => {
    if (!secretsEvent.received.id) return

    if (secretsEvent.received.error) {
      loadSecrets()
      return 
    }

    setWorking(false)
    setSecrets(secretsEvent.received.secrets)
  }, [secretsEvent.received])

  useEffect(() => {
    if (!newGroupEvent.received.id) return

    if (newGroupEvent.received.error) {
      setWorking(true)
      return 
    }

    setWorking(false)
    setSecrets(newGroupEvent.received.secrets)
    setGroup(newGroupEvent.received.name)
    setAddingGroup(false)
  }, [newGroupEvent.received])

  const onAddGroup = () => {
    const newGroupName = form.getFieldValue('newGroupName')
    
    if (!newGroupName) {
      return
    }

    if (secretsEvent[newGroupName]) {
      return 
    }

    setWorking(true)
    newGroupEvent.send({ type: "addNewGroup", name: newGroupName })
  }


  const onSecretEdit = () => {
    // setDnsEditing(true)
  } 

  const onVaultChange = () => {
    setSecurityCheck(true)
  }

  const onSecurityCheck = (done: boolean) => {
    setSecurityCheck(false)
    if (!done) return 

    const newLock = !locked
    setLocked(newLock)
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

  // const formItemLayoutWithOutLabel = {
  //   wrapperCol: {
  //     xs: { span: 24, offset: 0 },
  //     sm: { span: 20, offset: 4 },
  //   },
  // }

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

  const renderFormField = (label: string, content: any, actions: any) => (
    <Form.Item key={label} label={label.toUpperCase()} style={{
      width: "100%"
   }} {...formItemLayout}>
     <div style={{
         display: "flex",
         flexDirection: "row"
     }}>
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
  
  const renderSecret = (id: string) => { 
    const val = JSON.stringify(secrets[group][id])
    return renderFormField(id, [
      renderTag("blue", val.length > 35 ? val.substr(0, 35) + "..." : val, 1),
    ], [
      renderActionButton("Edit", "secondary", onSecretEdit, 10)
    ])
  }

  const chooseGroup = (e: any) => {
    if (e.key === '_new') {
      setAddingGroup(true)
      return 
    }

    setAddingSecret(false)
    setAddingGroup(false)
    setGroup(e.key)
  }

  const groups = () => (
    <Menu onClick={chooseGroup}>
      { Object.keys(secrets).map((secret: string) => (<Menu.Item key={secret}> { secret } </Menu.Item>)) }
      <Menu.Divider />
      <Menu.Item key={'_new'} icon={<PlusOutlined/>}> New Section </Menu.Item>
    </Menu>
  )

  const renderGroup = () => {
    if (locked || !secrets) {
      return <div/>
    }

    return <div>
      <div style={{
          backgroundColor: "#f5f5f5",
          display: "flex",
          flexDirection: "row",
          marginBottom: 20,
          padding: 15,
          borderBottom: "1px solid #cccccc"
      }}>
          <div style={{ paddingTop: 3 }}>
              <Dropdown overlay={groups()}>
                <Button style={{
                }}>
                Section: &nbsp; <span style={{ fontWeight: 700 }}> { group } </span> <DownOutlined />                  
                </Button>
              </Dropdown>
          </div>
          <div style={{   }}>
              <Button type="link" size="large" onClick={onDeleteGroup} style={{ marginLeft: 5 }}>
                delete
              </Button>
          </div>
          <div style={{
            flex: 10
          }}></div>
          <div style={{   }}>
              <Button type="primary" size="large" icon={<PlusOutlined/>} onClick={onNewSecret} style={{ marginLeft: 5 }}>
                Add Secret
              </Button>
          </div>
      </div>
    </div>
  }

  const renderSecrets = () => {
    if (addingSecret) {
      return (
        [<Form.Item key='newSecretName' name='newSecretName' label={'NAME:'} style={{
          width: "100%",
       }} {...formItemLayout}>
          <Input bordered={false} placeholder="Choose a secret name" style={{ 
            height: 32,
            border: 'none',
            borderBottom: '1px solid #cccccc'
          }}/> 
       </Form.Item>, 
       <Form.Item key='newSecretValue' name='newSecretValue' label={'VALUE:'} style={{
          width: "100%",
       }} {...formItemLayout}>
          <TextArea rows={5} placeholder="Choose a secret value" style={{ 
          }}/> 
       </Form.Item>, <div style={{ marginBottom: 10 }}>
          <Button type="primary" size="large" onClick={onAddSecret}> Add Secret </Button>
          <Button type="link" size="large" onClick={onCancelAddSecret}> Cancel </Button>
       </div>]
      )
    }

    if (addingGroup) {
      return (
        [<Form.Item key='newGroupName' name='newGroupName' label={'NAME:'} style={{
          width: "100%",
       }} {...formItemLayout}>
            <Input bordered={false} placeholder="Choose a section name" style={{ 
              height: 32,
              border: 'none',
              borderBottom: '1px solid #cccccc'
            }}/>
       </Form.Item>, <div>
          <Button type="primary" size="large" onClick={onAddGroup}> Add Section</Button>
          <Button type="link" size="large" onClick={onCancelAddGroup}> Cancel </Button>
       </div>]
      )
    }

    if (!secrets || Object.keys(secrets).length === 0 || Object.keys(secrets[group]).length === 0) {
      return (<div style={{
      }}>       
          <Button type="primary" size="large" onClick={onNewSecret}>
            Add A Secret
          </Button>
      </div>)
    }

    return Object.keys(secrets[group]).map((s: string) => renderSecret(s))
  }

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const renderLocked = () => { 
      return (<div style={{
        }}>       
          
      </div>)
  }

  const renderContent = () => {
    if (locked) {
      return <div/>
    }

    return <Form {...layout} form={form} name="all" onFinish={onFinish}
      style={{
        backgroundColor: "#ffffff",
        boxShadow: "0px 0px 8px #999999",
        minWidth: 700,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        marginTop: 20,
        padding: 0
      }}>
        { renderGroup() }
      <div style={{ padding: 10 }}>
        { working ? <Spin/> : locked ? renderLocked() : renderSecrets() }
      </div>
    </Form>
  }

  return (<div style={{
      ...styles.screen,
      backgroundColor: "#f5f5f5",
      ...layout
    }}>       
        <VaultLock key="check" show={securityCheck} locked={locked} onDone={onSecurityCheck}/>

        <div style={{
            minWidth: 700,
            marginTop: 16,
            padding: 20,
        }}>
          { locked ? <LockOutlined style={{ fontSize: 40, margin: 10 }} /> : <UnlockOutlined style={{ fontSize: 40, margin: 10 }} /> }
          <Title level={2}>
              Vault
                <Switch style={{marginLeft: 5 }}
                  onChange={onVaultChange}
                  checkedChildren={<LockOutlined />}
                  unCheckedChildren={<UnlockOutlined />}
                  checked={locked}
                />
          </Title>
          { renderContent() }
        </div>
      <Button type="link" htmlType="button" onClick={onSkip} style={{ margin: 20 }}>
            Go back
      </Button> 
    </div>)
}
