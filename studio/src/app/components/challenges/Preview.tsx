import React, { useEffect, useCallback, useState } from 'react'
import { Card, Typography, Spin, Select, Input, Button } from 'antd'
import { Auth, Browser, Tasks } from '.'
import { useSelector, useDispatch } from "react-redux"
import { useRemote, useEvent } from '../../hooks'
import { State } from '../../types'
import { selectChallenge, unselectChallenge } from '../../data'
import { 
  CaretLeftOutlined,
  CaretRightOutlined,
  RedoOutlined
} from '@ant-design/icons'

const { Meta } = Card
const { Text, Title, Paragraph } = Typography
const { Option } = Select

const PROTOCOLS = ['http', 'https', 'carmel']
const LOCALHOST = "0.0.0.0"

export const Preview: React.FC<any> = (props) => {
    const { product, onReload, session, profile, challenge, listChallengesEvent } = props
    const [needAuth, setNeedAuth] = useState(false)
    const [starting, setStarting] = useState(false)
    const [progress, setProgress] = useState<any>()
    const [completed, setCompleted] = useState<any>([])
    const startChallenge: any = useEvent()
    const validateTask: any = useEvent()
    const updateProgress: any = useEvent()
    const dispatch = useDispatch()

    const [url, setUrl] = useState("")
    const [protocol, setProtocol] = useState("http")

    const showWork = () => {
      return <div style={{ 
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
        justifyContent: "center",
      }}>
        <Spin/>
      </div>
    }

    const showContents = () => {
      return showWork()
    }

    const onUrlChange = (val: any) => {
      // setUrl(val.target.value)
    }

    const onPressEnter = () => {
        // view.current && view.current.loadURL(`${protocol}://${url}`)
    }

    const onRefresh = () => {
        // view.current && view.current.loadURL(`${protocol}://${url}`)
    }

    const onBack = () => {
        // view.current && view.current.canGoBack() && view.current.goBack()
    }

    const onNext = () => {
        // view.current && view.current.canGoForward() && view.current.goForward()
    }


    const onProtocolChange = (
      <Select defaultValue={PROTOCOLS[0]} value={protocol} className="select-before">
          { PROTOCOLS.map(p => (
               <Option key={p} value={p}> {p}:// </Option>
          ))}    
      </Select>
  )

    const showHeader = () => {
      return <div style={{
        display: "flex",
        width: "100%",
        height: 55,
        backgroundColor: "#37474F",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        padding: 10
    }}>
    <Button 
        size='small'
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
        size='small'
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
        size='small'
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
    }

    return ( 
        <div
        style={{ 
          overflow: "auto", 
          margin: 0, 
          marginLeft: 5,
          padding: 0,
          marginTop: 0,
          display: 'flex',
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          textAlign: "justify",
          boxShadow: "0px 0px 12px #333333", 
          backgroundColor: "#37474F",
          width: "100%",
          height: "100%",
        }}>          
          { showHeader()}
      </div>)
}