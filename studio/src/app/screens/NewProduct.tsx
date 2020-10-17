import React, { useEffect, useRef, useState } from 'react'
import { NewProductScreenProps, State, Template } from '../types'
import { Spin, Button, Form, Input, Divider, Typography, Card } from 'antd'
import * as styles from '../styles'
import strings from '../strings.json'
import { useEvent } from '../hooks'
import { useDispatch, useSelector } from "react-redux"
import { initialize } from '../data'
import axios from 'axios'
import { TemplateListItem } from '../components'
import { replace } from 'connected-react-router'
import { PlusOutlined, LockOutlined, UserOutlined } from "@ant-design/icons"

const { Title, Paragraph } = Typography

/**
 * 
 * @param props 
 */
export const NewProduct: React.FC<NewProductScreenProps> = (props) => {
  const [isCreating, setIsCreating] = useState(false)
  const [name, setName] = useState('')
  const createEvent: any = useEvent() 
  const listTemplates: any = useEvent() 
  const [templates, setTemplates] = useState([])
  const dispatch = useDispatch()
  
  const layout = {
    wrapperCol: { span: 24 },
  }

  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 19, offset: 5 },
    },
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

  const [form] = Form.useForm()

  const onDone = () => {

  }

  const onCancel = () => {
    dispatch(replace('/products'))
  }

  useEffect(() => {
    listTemplates.send({ type: "listTemplates" })
  }, [])

  useEffect(() => { 
    if (!createEvent.received.id) return 
    dispatch(replace('/product'))
  }, [createEvent.received])

  useEffect(() => {
    if (!listTemplates.received.id) return 
    listTemplates.received.templates && setTemplates(listTemplates.received.templates)
  }, [listTemplates.received])

  const onTemplateSelected = (template: Template) => {
    if (name.trim().length === 0) return

    setIsCreating(true)
    createEvent.send({ 
      type: 'createProduct', 
      name, 
      template: `${template.bundle}/${template.name}`
     })
  }

  if (!isCreating && templates.length === 0) {
      return <div style={styles.screen}>
          <Spin tip={strings.loadingTemplates}/>
    </div>
  }

  if (isCreating) {
    return <div style={styles.screen}>
        <Spin tip={strings.creatingProduct}/>
  </div>
}

  const onNameChanged = (e: any) => {
    setName(e.target.value)
  }
  
  return (<div style={{
      ...styles.screen,
      backgroundColor: "#f5f5f5",
      ...layout
    }}>       
      <Card style={{
        backgroundColor: "#ffffff",
        boxShadow: "0px 0px 8px #999999",
        minWidth: 700,
        marginTop: 16,
        padding: 40,
      }}>
              <PlusOutlined style={{ fontSize: 40, margin: 20 }} />
              <Title level={3}>
                  Create a new Carmel Product
              </Title>

      <Form {...formItemLayoutWithOutLabel} key="form" form={form} name="control-hooks" onFinish={onDone} style={{
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
              
              <Form.Item key={"name"} label={"name".toUpperCase()} style={{
                  width: "100%",
                  margin: 20,
              }} {...formItemLayout}>
                  <Input onChange={onNameChanged} style={{ border: "none", borderBottom: "1px solid #c7c7c7"}}/>
              </Form.Item>

              <Divider orientation="center" style={{marginTop: 20}}>Choose a template:</Divider>

              <div style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap"
              }}>
                { templates.map ((template, idx) => <TemplateListItem key={idx} onSelected={onTemplateSelected} template={template}/>) }
              </div>    
          </div>
      </Form>
      </Card>
      
      <Button disabled={false} type="link" htmlType="button"  onClick={onCancel} style={{ margin: 20 }}>
            Never mind
      </Button> 
    </div>)
}

// return (<div style={styles.screen}>
//   <Title>
//     { 'Create a new Carmel Product' }
//   </Title>

//   <Card style={{
//     minWidth: 700
//   }}>
//       <Form>
//           <Form.Item
//         label="Name:"
//         name="name"
//         rules={[{ required: true, message: 'Please enter a name' }]}
//       >
//         <Input onChange={onNameChanged}/>
//       </Form.Item>
//     </Form>
//     </Card>
//     <Title level={3}>
//       Select a template: 
//     </Title>  

//   <div style={{
//     display: "flex",
//     flexDirection: "row",
//     width: "100%",
//     alignItems: "center",
//     justifyContent: "center",
//     flexWrap: "wrap"
//   }}>
//     { templates.map ((template, idx) => <TemplateListItem key={idx} onSelected={onTemplateSelected} template={template}/>) }
//   </div>
// </div>)