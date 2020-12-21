import React, { useState, useEffect } from 'react'
import { VaultLockComponentProps } from '../types'
import { Input, Typography, Modal, Form, Spin, Row, Col, Alert, Button } from 'antd'
import { CheckOutlined, UnlockOutlined, EnvironmentOutlined, LockOutlined, UserOutlined, ApiOutlined } from "@ant-design/icons"
import strings from '../strings.json'
import { useEvent } from '../hooks'
import { useSelector, useDispatch } from "react-redux"

const { Title, Text } = Typography

/**
 * 
 * @param props 
 */
export const DNSSetup: React.FC<any> = (props: any) => {
    const [working, setWorking] = useState(true)
    const { show, onDone, locked } = props
    const [warning, setWarning] = useState("")
    const [data, setData] = useState<any>({})
    const sendEvent: any = useEvent()
    const fetchEvent: any = useEvent()
    const dispatch = useDispatch()

    const [form] = Form.useForm()

    const handleOk = () => {
      const apiKey = form.getFieldValue('apiKey')
      const username = form.getFieldValue('username')
      const clientIP = form.getFieldValue('clientIP')

      form.resetFields()
      setWorking(true)

      sendEvent.send({ type: "updateSecret", key: "namecheap", values: { apiKey, username, clientIP }})
    }

    useEffect(() => {
        fetchEvent.send({ type: "getSecret", key: "namecheap" })
    }, [])

    useEffect(() => {
        if (!fetchEvent.received.id) return
        const { values } = fetchEvent.received
        setData(values)
        setWorking(false)
    }, [fetchEvent.received])

    useEffect(() => {
      if (!sendEvent.received.id) return

      console.log(">!!!!", sendEvent.received)
      // form.resetFields()
      setWorking(false)
      
      // if (lockEvent.received.error) {
      //   setWarning(lockEvent.received.error)
      //   return
      // }

      onDone && onDone(true)
    }, [sendEvent.received])
    
    const handleCancel = () => {
      if (working) return 
      form.resetFields()
      setWorking(false)
      onDone && onDone(false)
    }

    const layout = {
        wrapperCol: { span: 24 },
    }
  
    const tailLayout = {
      wrapperCol: {  span: 24 },
    }

    const onKeyChanged = (e: any) => {
        const { value } = e.target
        setWarning("")
    }

    const showWorking = () => {
        return <Spin/>
    }

    const showWarning = () => {
      return <Alert
            message={warning}
            banner
        />
    }

    const showPrompt = () => {
      return <Form {...layout} form={form} style={{
          width: 300
      }}>
          <Form.Item {...tailLayout} key="top">
              <ApiOutlined style={{ fontSize: 30, margin: 20 }} />
              <Title level={3}>
                  { 'Setup Your DNS'}
              </Title>  
              <Text>
                  { 'Update your Namecheap credentials'}
              </Text>  
        </Form.Item>
            
          <div key="main" style={{
            display: "flex", 
            flex: 1,
            marginTop: 10,
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>   
            <Form.Item {...tailLayout} key="username" name="username" style={{ width: "100%" }}>
                <Input defaultValue={data.username} prefix={<UserOutlined style={{ marginLeft: 5  }} />} placeholder="Username"/>
            </Form.Item>

            <Form.Item key={"clientIP"} name="clientIP" style={{ width: "100%" }}>
                <Input defaultValue={data.clientIP} prefix={<EnvironmentOutlined style={{ marginLeft: 5 }} />} placeholder="Client IP"/>
            </Form.Item>

            <Form.Item key="apiKey" name="apiKey" style={{ width: "100%"}}>
                <Input 

                    type="password"
                    style={{
                    }}
                    defaultValue={data.apiKey}
                    placeholder="API Key" 
                    prefix={<LockOutlined style={{ marginLeft: 5 }} />} 
                    onChange={onKeyChanged}/>
            </Form.Item>            
          </div>
      </Form>
    }

  return (<div>
   <Modal
          title=""
          visible={show}
          confirmLoading={working}
          onCancel={handleCancel}
          footer={[
            <div key="foot" style={{
              textAlign: "center",
              display: "flex",
              flex: 1,
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Button key="back" onClick={handleCancel}>
                Cancel
              </Button>
              <Button key="submit" type="primary" loading={working} onClick={handleOk}>
                { 'Update' }
              </Button>
          </div>
          ]}
        >
        <div style={{
          textAlign: "center",
          display: "flex",
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: 250
        }}>
          { working ? showWorking() : showPrompt() }
        </div>
      </Modal>
</div>)
}