import React, { useEffect, useRef, useState } from 'react'
import { NewProductScreenProps, State, Template } from '../types'
import { Spin, Button, Form, Input, Typography } from 'antd'
import * as styles from '../styles'
import strings from '../strings.json'
import { useEvent, useBlockchain } from '../hooks'
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
  const dispatch = useDispatch()
  const session = useSelector((state: State) => state.session)
  const products = useSelector((state: State) => state.products)
  
  const blockchain = useBlockchain()

  useEffect(() => {
    (async () => {
      await blockchain.getTemplates()
    })()
  }, [])

  useEffect(() => { 
    if (!createEvent.received.id) return 
    dispatch(replace('/product'))
    // setCommandResponse(command.received)
    // if (command.received.done) {
      // loadProductEvent.send({ type: 'loadSelectedProduct' })
    // }
  }, [createEvent.received])

  const onTemplateSelected = (template: Template) => {
    if (name.trim().length === 0) return

    createEvent.send({ 
      type: 'createProduct', 
      name, 
      template: `${template.bundle}/${template.name}`
     })
    setIsCreating(true)
  }

  if (!isCreating && blockchain.templates.length === 0) {
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
      { products.length === 0 ? 'Create Your First Carmel Product' : 'Create a new Carmel Product' }
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
      { blockchain.templates.map ((template, idx) => <TemplateListItem key={idx} onSelected={onTemplateSelected} template={template}/>) }
    </div>
  </div>)
}