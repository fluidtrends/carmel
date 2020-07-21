import React, { useState } from 'react'
import { ProductHeaderComponentProps } from '../types'
import { Card, Button, Tag, Dropdown, Badge, PageHeader, Menu, Typography } from 'antd'
import { 
    GlobalOutlined, 
    BlockOutlined, 
    PauseCircleFilled,
    CodeOutlined,
    CaretDownOutlined,
    RiseOutlined,
    CodeFilled,
    TrophyOutlined,
    RocketOutlined, 
    CloudUploadOutlined,
    FileTextOutlined,
    FormOutlined, 
    DownOutlined, 
    PictureOutlined,  
} from '@ant-design/icons'

const { Meta } = Card
const { Title } = Typography
const { SubMenu } = Menu

/**
 * 
 * @param props 
 */
export const ProductHeader: React.FC<ProductHeaderComponentProps> = (props) => {
  const [section, setSection] = useState('chunks')
  const { onBack, product } = props

  const onSectionChanged = (e: any) => {
    setSection(e.key)
    props.onSectionChanged && props.onSectionChanged(e.key)
  }

  const onWebSelect = (e: any) => {
    console.log('web', e);
  }

  const webMenu = <Menu onClick={onWebSelect}>
    <Menu.Item key="status" disabled>
    <Badge status="processing" /> 
        Running 
    </Menu.Item>
    <Menu.Item key="stop" icon={<PauseCircleFilled />}>
        Stop 
    </Menu.Item>
    <Menu.Item key="publish" icon={<CloudUploadOutlined/>}>
        Publish
    </Menu.Item>
    <Menu.Item key="visit" icon={<GlobalOutlined />}>
        Visit
    </Menu.Item>
  </Menu>


    const webOptions = (<Dropdown key="website" overlay={webMenu} placement="bottomRight">
    <Button key="action" size='large' icon={<Badge status="processing" />} style={{ 
    }}>
        Website
        <DownOutlined/>
    </Button>
    </Dropdown>)

  const title = (<div style={{
      display: "flex", 
      flex: 1, 
      flexDirection: "row", 
      alignItems: "center",
      justifyContent: "center"
  }}>
    <Title level={3} style={{ margin: 0 }}>
        { product.name}
    </Title>
     <Button key="settings" type="link" icon={<FormOutlined />} style={{
        margin: 5,
        fontSize: 14
    }}> 
        Edit 
    </Button>
    { webOptions }
  </div>)

  const menu = ([<Button key="newChallenge" type="primary" size="large" icon={<RocketOutlined />} style={{
        margin: 5,
    }}> 
        Start A Challenge 
    </Button>])

  const sections = [{
      icon: "BlockOutlined",
      name: "Chunks",
      id: "chunks"
  }, {
    icon: "PictureOutlined",
    name: "Assets",
    id: "assets"
  }]

  return (<PageHeader
        title={title}
        style={{
            width: "100%",
            padding: 0,
        }}
        extra={menu}
        onBack={onBack}>
        
        <Menu onClick={onSectionChanged} selectedKeys={[section]} mode="horizontal" style={{
            padding: 0,
            fontSize: 12,
            fontWeight: 500,
            border: "none",
            backgroundColor: "#f5f5f5",
            margin: 0
        }}>
            { sections.map((s: any) => {
                const Icon = require(`@ant-design/icons/lib/icons/${s.icon}.js`).default
                return (<Menu.Item key={s.id} icon={<Icon/>} style={
                    section === s.id ? { 
                        margin: "0px 10px -8px 0px", 
                        height: 50,
                        padding: "5px 18px 10px 10px",
                        boxShadow: "0px 0px 8px #c7c7c7",
                        backgroundColor: "#ffffff",
                    } : {
                        margin: "0px 10px -8px 0px", 
                        height: 50,
                        padding: "5px 18px 10px 10px",
                    }}> 
                        { s.name }
                </Menu.Item>)
            })}
        </Menu>
</PageHeader>)
}