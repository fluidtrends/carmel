import React, { useEffect, useCallback, useState } from 'react'
import { Card, Typography, Spin, Select, Input, Button, Switch } from 'antd'
import { Auth, Browser, Tasks } from '.'
import { useSelector, useDispatch } from "react-redux"
import { useRemote, useEvent } from '../../hooks'
import { State } from '../../types'
import { selectChallenge, unselectChallenge } from '../../data'
import { 
  CaretLeftOutlined,
  CaretRightOutlined,
  MobileFilled,
  LayoutFilled,
  RedoOutlined
} from '@ant-design/icons'

export const Preview: React.FC<any> = (props) => {
    
    const [isMobileView, setMobileView] = useState(false)
    const browser: any = useEvent()

    const [url, setUrl] = useState("")

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

    const onUrlChange = (val: any) => {
    }

    const onPressEnter = () => {
    }

    const onRefresh = () => {
    }

    const onViewChanged = (e: any) => {
      setMobileView(!e)
      browser.send({ type: 'updateWebPreview', mobile: !e })
    }

    const onBack = () => {
    }

    const onNext = () => {
    }

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
            paddingTop: 4,
            paddingRight: 2,
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
            color: "#ffffff",
            paddingLeft: 2,
            paddingTop: 4,
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
                defaultValue={url} />
        </div>
        <Switch 
          onChange={onViewChanged}
          checkedChildren="desktop" 
          unCheckedChildren="mobile" 
          defaultChecked />
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