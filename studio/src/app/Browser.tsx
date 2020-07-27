import React, { useState, useEffect, useRef } from 'react'
import { BrowserProps, State } from './types'
import { useWindowSize, useEvent } from './hooks'
import * as styles from './styles'
import { Typography, Select, Input, Button} from 'antd'
import { 
    CaretLeftOutlined,
    CaretRightOutlined,
    RedoOutlined
} from '@ant-design/icons';
import { changeConfirmLocale } from 'antd/lib/modal/locale'
import { ipcRenderer } from 'electron'

const { Title } = Typography
const { Option } = Select

const PROTOCOLS = ['http', 'https', 'carmel']

/**
 * 
 * @param props 
 */
export const Browser = (BrowserProps: any) => {
    const view: any = useRef(null)
    const urlInput: any = useRef(null)
    const [width, height] = useWindowSize()
    const [url, setUrl] = useState("carmel.io")
    const [protocol, setProtocol] = useState("http")

    const onUrlChange = (val: any) => {
        setUrl(val.target.value)
    }

    const onPressEnter = () => {
        view.current && view.current.loadURL(`${protocol}://${url}`)
    }

    const onRefresh = () => {
        view.current && view.current.loadURL(`${protocol}://${url}`)
    }

    const onBack = () => {
        console.log("Back")
    }

    const onNext = () => {
        console.log("Next")
    }

    const onProtocolChange = (
        <Select defaultValue={PROTOCOLS[0]} value={protocol} className="select-before">
            { PROTOCOLS.map(p => (
                 <Option key={p} value={p}> {p}:// </Option>
            ))}    
        </Select>
    )

    useEffect(() => {
        const listener = (e: any, data: any) => {
            if (data.product && data.product.started && data.product.packerPort) {
                setUrl(`0.0.0.0:${data.product.packerPort}`)
                setProtocol('http')
                view.current && view.current.loadURL(`http://0.0.0.0:${data.product.packerPort}`)
            }
        }
        ipcRenderer.on('carmel', listener)
    }, [])

    useEffect(() => {
        // console.log(view.current)
    }, [view])

    return (<div style={{
        backgroundColor: "#252526",
        display: "flex",
        width: '100vw',
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        padding: 0
    }}>
        <div style={{
            display: "flex",
            width: '100vw',
            height: 80,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
            padding: 10
        }}>
        <Button 
            size='large'
            shape='circle'
            onClick={onBack}
            style={{
                backgroundColor: "#252526",
                marginRight: 10
            }}
            icon={<CaretLeftOutlined style={{
                color: "#ffffff",   
            }}/>}/>

        <Button 
            onClick={onNext}
            size='large'
            shape='circle'
            style={{
                backgroundColor: "#252526",
                marginRight: 10
            }}
            icon={<CaretRightOutlined style={{
                color: "#ffffff"
            }}/>}/>

        <Button 
            onClick={onRefresh}
            size='large'
            shape='circle'
            style={{
                backgroundColor: "#252526",
                marginRight: 10
            }}
            icon={<RedoOutlined style={{
                color: "#ffffff"
            }}/>}/>

            <div style={{
                 marginRight: 10, 
                 display: "flex",
                flex: 1 
            }}>
                <Input 
                value={url}
                onPressEnter={onPressEnter}
                onChange={onUrlChange}
                addonBefore={onProtocolChange} 
                defaultValue={url} />
            </div>
        </div>
        <webview id="carmel" 
            ref={view}
            src="https://www.github.com/" 
            style={{ 
                display: "flex",
                flex: 1,
                width: "100%"
            }}/>
    </div>
    )
}