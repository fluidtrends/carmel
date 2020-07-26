import React, { useState, useEffect } from 'react'
import { ProductHeaderComponentProps } from '../types'
import { Card, Button, Tag, Switch, Tooltip, Badge, PageHeader, Menu, Typography } from 'antd'
import { 
    GlobalOutlined, 
    BlockOutlined, 
    PauseCircleFilled,
    CodeOutlined,
    PlayCircleFilled,
    CaretDownOutlined,
    RiseOutlined,
    ExclamationCircleOutlined,
    CodeFilled,
    SyncOutlined,
    CheckCircleOutlined,
    TrophyOutlined,
    RocketOutlined, 
    PauseOutlined,
    CaretRightOutlined,
    CloudUploadOutlined,
    FileTextOutlined,
    FormOutlined, 
    DownOutlined, 
    PictureOutlined,  
} from '@ant-design/icons'
import { useEvent } from '../hooks'

const { Meta } = Card
const { Title, Text } = Typography
const { SubMenu } = Menu

/**
 * 
 * @param props 
 */
export const ProductHeader: React.FC<ProductHeaderComponentProps> = (props) => {
  const [section, setSection] = useState('chunks')
  const { onBack, product, onCommand, commandResponse, onTogglePreview } = props
  const [status, setStatus] = useState<any>({})
  
  useEffect(() => {
    console.log(commandResponse)
    if (!commandResponse.id) return 
    setStatus({
        icon: <Badge status={"processing" }/>,
        color: "processing",
        processing: !commandResponse.done,
        text: commandResponse.status
    })
  }, [commandResponse])

  const onSectionChanged = (e: any) => {
    setSection(e.key)
    props.onSectionChanged && props.onSectionChanged(e.key)
  }

  const sections = [{
        icon: "BlockOutlined",
        name: "Chunks",
        id: "chunks"
    }, {
        icon: "PictureOutlined",
        name: "Assets",
        id: "assets"
    }]

    const onPanelCommand = (command: any) => {
        onCommand(command.id)
    }

    let commands = [product.started ? {
        id: "stop",
        name: "STOP",
        icon: "PauseOutlined",
        tooltip: "Stop running"
    } : {
        id: "start",
        name: "START",
        icon: "CaretRightOutlined",
        tooltip: "Start running"
    }, {
        id: "deploy",
        name: "PUBLISH",
        icon: "CloudUploadOutlined",
        tooltip: "Publish online"
    }, {
        id: "visit",
        name: "VISIT",
        icon: "GlobalOutlined",
        tooltip: "Visit website"
    }]

    const renderStatus = () => {
        if (status.processing) {
            return <div key="status" style={{ 
                display: "flex",
                flex: 1,
                margin: 10,
                justifyContent: "flex-end",
                alignItems: "flex-end"
            }}>
                { status.text && 
                    <Tag icon={status.icon} color={status.color}>
                        { status.text }
                    </Tag> 
                }
            </div>
        }

        return <Tag key="tag" icon={product.started ? <Badge status={"processing"} color={"green"}/> : <ExclamationCircleOutlined/>} color={product.started ? "success" : "warning"} style={{
            margin: 10
        }}>
             { product.started ? 'RUNNING' : 'NOT RUNNING' }
        </Tag>
    }

    const webOptions = (<div key="web" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%"
        }}>
        <div key="container" style={{
            marginTop: 20
        }}>
            { commands.map((command: any) => {
                const Icon = require(`@ant-design/icons/lib/icons/${command.icon}.js`).default
                return <Tooltip placement="bottomRight" key={command.id} title={command.tooltip}>
                <Button disabled={status.processing} onClick={() => onPanelCommand(command)} style={{
                    marginLeft: 10,
                }} icon={<Icon style={{
                }}/>} loading={false}>
                    { command.name }
                </Button>
                </Tooltip>
            })}
        </div>
    </div>)

  
    const title = (<div key="main" style={{
      display: "flex", 
      flex: 1, 
      flexDirection: "row", 
      height: 40,
      width: "100%",
      alignItems: "center",
      justifyContent: "center"
  }}>
    <Title key="title" level={3} style={{ margin: 0 }}>
        { product.name}
    </Title>
   { renderStatus() }
  </div>)

  return (<div key="main" style={{
      display: "flex",
      flex: 1,
      width: "100%",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center"
  }}>      
      <PageHeader
        key="header"
        title={title}
        style={{
            width: "100%",
            padding: 0,
        }}
        extra={[webOptions]}
        onBack={onBack}>
        <div key="inner" style={{
            display: "flex",
            flex: 1,
            flexDirection: "row"
        }}>
            <Menu key="menu" onClick={onSectionChanged} selectedKeys={[section]} mode="horizontal" style={{
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
            
            <div key="alert" style={{ 
                display: "flex",
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "flex-end"
            }}>
                { product.started && 
                    <div>
                        <Text style={{ marginRight: 5 }}> Preview </Text>
                        <Switch 
                            checkedChildren="on"
                            onChange={onTogglePreview} 
                            unCheckedChildren="off" 
                            defaultChecked={false} />
                    </div>
                }
            </div>
        </div>
    </PageHeader>
</div>)
}