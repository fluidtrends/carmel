import React, { useState, useEffect } from 'react'
import { VaultLockComponentProps } from '../types'
import { Input, Typography, Modal, Form, Spin, Alert } from 'antd'
import { CheckOutlined, UnlockOutlined, LockOutlined, UserOutlined } from "@ant-design/icons"
import strings from '../strings.json'
import { useEvent } from '../hooks'

const { Title } = Typography

/**
 * 
 * @param props 
 */
export const VaultLock: React.FC<VaultLockComponentProps> = (props) => {
    const [working, setWorking] = useState(false)
    const { show, onDone, locked } = props
    const [warning, setWarning] = useState("")
    const lockEvent: any = useEvent()

    const [form] = Form.useForm()

    const handleOk = () => {
      const password = form.getFieldValue('password')
      form.resetFields()
      setWorking(true)

      lockEvent.send({ type: locked ? "unlockVault" : "lockVault", password })
    }

    useEffect(() => {
      if (!lockEvent.received.id) return

      if (lockEvent.received.error) {
        setWarning(lockEvent.received.error)
        setWorking(false)
        return
      }

      onDone && onDone(true)
    }, [lockEvent.received])
    
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

    const onPasswordChanged = (e: any) => {
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
      }}>
          <Form.Item {...tailLayout}>
              <LockOutlined style={{ fontSize: 40, margin: 20 }} />
              <Title level={2}>
                  { locked ? strings.locked : strings.unlocked }
              </Title>
  
              { warning ? showWarning() : locked ? strings.unlock : strings.lock }
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
            <Form.Item key={"password"} name="password" style={{ width: "100%"}}>
            <Input 
                type="password"
                style={{ 
                  height: 64,
                  width: 250,
                }}
                placeholder="Enter your password" 
                prefix={locked ? <LockOutlined style={{ marginLeft: 5 }} /> : <UnlockOutlined style={{ marginLeft: 5 }} />} 
                onChange={onPasswordChanged}/>
            </Form.Item>
  
          </div>
         
      </Form>
    }

  return (<div>
   <Modal
          title=""
          visible={show}
          onOk={handleOk}
          confirmLoading={working}
          onCancel={handleCancel}
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