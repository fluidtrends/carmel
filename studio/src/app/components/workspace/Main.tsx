import React, { useEffect, useRef, useState } from 'react'
import { Card, Typography, Button, Layout, Carousel } from 'antd'
import { State, Chunk } from '../../types'
import { useSelector, useDispatch } from "react-redux"
import { useEvent } from '../../hooks'
import { unselectProduct, selectProduct } from '../../data'
import { replace } from 'connected-react-router'
import { StepForwardOutlined } from '@ant-design/icons'

import * as ProductComps from '.'
import { Challenges, TaskTutorial } from '../challenges'

const { Meta } = Card
const { Text, Title, Paragraph } = Typography
const SECTIONS = ['assets', 'chunks', 'challenges']

export const Workspace: any = (props: any) => {
    const { product, challenge, profile, session, onReload, height, command, commandResponse } = props

    const dispatch = useDispatch()
    const unselectEvent: any = useEvent() 
    const loadFileEvent: any = useEvent() 
    const browser: any = useEvent()
    const sections: any = useRef(null)

    const [expandedChunks, setExpandedChunks] = useState([])
    const [section, setSection] = useState('assets')
    const [openFile, setOpenFile] = useState("")
    const listChallengesEvent: any = useEvent() 

    useEffect(() => {
        if (!loadFileEvent.received.id) return 
        setOpenFile(loadFileEvent.received.content)
    }, [loadFileEvent.received])
    
    const onCommand = (cmd: string) => {
        command.send({ type: "runCommand", cmd, args: [], productId: product.id })
    }

    const onBack = () => {
        unselectEvent.send({ type: 'unselectProduct' })
        dispatch(unselectProduct()) && dispatch(replace('/products'))
    }
    
    const onSectionChanged = (section: string) => {
        const index = SECTIONS.indexOf(section)
        sections.current.goTo(index)
        setSection(section)
    }

    const onExpandChunks = (keys: string[]) => {
        setExpandedChunks(keys)
    }

    const onFileSelect = (file: any) => {
        loadFileEvent.send({ 
            type: "loadFile",
            productId: product.id, 
            path: file 
        })    
    }

    const onWebPreview = () => {
        browser.send({ type: 'showWebPreview', product: product })
    }

    // const tutorialText = () => {
    //   return "I love supporting the **[EFF](https://eff.org)**. This is the *[Markdown Guide](https://www.markdownguide.org)*. See the section on [`code`](#code)."
    // }

    const renderActivity = () => {
      return (<div key="main" style={{
          display: "flex",
          flex: 1,
          width: 680,
          height: 102, 
          marginTop: 5,
          backgroundColor: "#ffffff",
          flexDirection: "row",
          boxShadow: "0px 0px 8px #999999", 
          justifyContent: "center",
          alignItems: "center"
      }}>    
        
      </div>)
    }

    return (
        <Layout style={{ 
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f5f5f5",
          alignItems: "flex-start",
          padding: 0,
          margin: 0,
          width: 680,
          height: "100%",
          justifyContent: "flex-start"
        }}>
          <ProductComps.Header 
              onWebPreview={onWebPreview}
              product={product} 
              commandResponse={commandResponse}
              onCommand={onCommand}
              onBack={onBack} 
              onSectionChanged={onSectionChanged} />
            <Carousel 
              ref={sections}
              dots={false}
              effect={"fade"}
              style={{
                boxShadow: "0px 0px 8px #999999",
                width: 680,
                display: "flex",
                flex: 1,
                flexDirection: "column",
                backgroundColor: "#ffffff",
                margin: 0,
                marginTop: 0,
                padding: 0,
              }}>
                <ProductComps.Assets
                  onSelect={onFileSelect}
                  height={height - 295}
                  product={product} 
                  visible={section === SECTIONS[0]}
                  openFile={openFile}/>
                <ProductComps.Chunks
                  onSelect={onFileSelect}
                  height={height - 295}
                  openFile={openFile}
                  expanded={expandedChunks}
                  onExpand={onExpandChunks}
                  visible={section === SECTIONS[1]}
                  product={product} 
                />
                <ProductComps.History
                  height={height - 295}
                  session={session}
                  profile={profile}
                  challenge={challenge}
                  visible={section === SECTIONS[2]}
                  product={product} 
                />
          </Carousel>  

          { renderActivity() }
        </Layout>)
}