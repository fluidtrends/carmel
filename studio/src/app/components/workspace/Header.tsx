import React, { useState, useEffect } from 'react'
import { Button, Tag, Dropdown, Switch, Tooltip, Badge, PageHeader, Menu, Typography } from 'antd'
import { 
    LinkOutlined,
    ExclamationCircleOutlined,
    DownOutlined
} from '@ant-design/icons'
import moment from 'moment'
import { shell } from 'electron'

const { Title, Text } = Typography

/**
 * 
 * @param props 
 */
export const Header: React.FC<any> = (props) => {
  const [section, setSection] = useState('info')
  const { onBack, product, onCommand, commandResponse, onWebPreview } = props
  const [status, setStatus] = useState<any>({})
  
  useEffect(() => {
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
        icon: "ControlOutlined",
        name: "Info",
        id: "info"
    },{
        icon: "CopyOutlined",
        name: "Assets",
        id: "assets"
    }, {
        icon: "AppstoreOutlined",
        name: "Chunks",
        id: "chunks"
    }, {
        icon: "DatabaseOutlined",
        name: "Content",
        disabled: true,
        id: "content"
    }, {
        icon: "RiseOutlined",
        name: "Challenges",
        disabled: true,
        id: "challenges"
    }]

    const onPanelCommand = (command: any) => {
        switch(command.id) {
            case 'preview':
                onWebPreview()
                break
            default:
                onCommand(command.id)
        }
    }

    const onViewLive = (e: any) => {
        const deployment = product.deployments.find((d: any) => d.id === e.key)
        shell.openExternal(deployment.urls.publicRaw)
    }

    const LiveMenu = () => {
        if (!product.deployments || product.deployments.length === 0) return <div/>
        return (<Menu onClick={onViewLive}>
            { product.deployments.sort((a: any, b: any) => b.timestamp - a.timestamp).map((d: any, i: number) => (
            <Menu.Item key={d.id} icon={<LinkOutlined />} style={{
                color: i > 0 ? "#d9d9d9" : "#333333",
                backgroundColor: i > 0 ? "#eeeeee" : "#ffffff"
            }}>
                { moment(d.timestamp).fromNow() } { i === 0 && "(latest)"} 
            </Menu.Item>))}
        </Menu>)
    }
    
    const LiveButton = () => {
       if (!product.deployments || product.deployments.length === 0) return <div/>
        
        return (<Dropdown overlay={<LiveMenu/>}>
            <Button type="link" style={{ marginLeft: 0 }}>
                {product.deployments.length} Live Versions <DownOutlined />
            </Button>
        </Dropdown>)
    }

    let commands = [product.started ? {
        id: "stop",
        name: "STOP",
        icon: "PauseOutlined",
        color: "#f44336",
        tooltip: "Stop running"
    } : {
        id: "start",
        name: "START",
        color: "#4CAF50",
        icon: "CaretRightOutlined",
        tooltip: "Start running"
    }, {
        id: "deploy",
        name: "PUBLISH",
        color: "#03A9F4",
        icon: "CloudUploadOutlined",
        tooltip: "Publish online"
    }
    ].filter(d => d)

    const renderStatus = () => {
        if (status.processing) {
            return <div key="status" style={{ 
                display: "flex",
                flex: 1,
                margin: 10,
                paddingLeft: 20,
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
            justifyContent: "center"
        }}>
        <div key="container" style={{
            marginTop: -5
        }}>
            { commands.map((command: any) => {
                const Icon = require(`@ant-design/icons/lib/icons/${command.icon}.js`).default
                return <Tooltip placement="bottomRight" key={command.id} title={command.tooltip}>
                    <Button disabled={status.processing} size="middle" onClick={() => onPanelCommand(command)} style={{
                        marginLeft: 10,
                        opacity: status.processing ? 0.4 : 1.0,
                        backgroundColor: command.color,
                        color: "#ffffff"
                    }} icon={<Icon style={{
                        color: "#ffffff"
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
      height: 50,
      width: "100%",
      alignItems: "center",
      justifyContent: "center"
     }}>
    <Title key="title" level={3} style={{ margin: 0 }}>
        { product.name}
    </Title>
    { renderStatus() }
    { product.deployments && product.deployments.length > 0 && <LiveButton/>}
    { webOptions }
  </div>)

  const showStatus = () => {
    return <div key="alert" style={{ 
        display: "flex",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    }}>
    </div>
  }

  return (<div key="main" style={{
      display: "flex",
      flex: 1,
      width: 680,
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
                    return (<Menu.Item key={s.id} icon={<Icon/>} disabled={s.disabled} style={
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
            
            { showStatus() }
        </div>
    </PageHeader>
</div>)
}