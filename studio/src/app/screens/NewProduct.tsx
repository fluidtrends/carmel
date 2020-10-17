import React, { useEffect, useRef, useState } from 'react'
import { NewProductScreenProps, State, Template } from '../types'
import { Spin, Button, Form, Input, Typography } from 'antd'
import * as styles from '../styles'
import strings from '../strings.json'
import { useEvent } from '../hooks'
import { useDispatch, useSelector } from "react-redux"
import { initialize } from '../data'
import axios from 'axios'
import { TemplateListItem } from '../components'
import { replace } from 'connected-react-router'

const { Title, Text } = Typography

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
  
  return (<div style={styles.screen}>
    <Title>
      { 'Create a new Carmel Product' }
    </Title>

        <Form>
            <Form.Item
          label="Name:"
          name="name"
          rules={[{ required: true, message: 'Please enter a name' }]}
        >
          <Input onChange={onNameChanged}/>
        </Form.Item>
      </Form>

      <Title level={3}>
        Select a template: 
      </Title>  

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
  </div>)
}