import React, { useEffect, useRef, useState } from 'react'
import { Card, Typography, Button, Layout, Carousel } from 'antd'
import { State, Chunk } from '../../types'
import { useSelector, useDispatch } from "react-redux"
import { useEvent } from '../../hooks'
import { unselectProduct, selectProduct } from '../../data'
import { replace } from 'connected-react-router'

import * as ProductComps from '.'

const { Meta } = Card
const { Text, Title, Paragraph } = Typography
const SECTIONS = ['assets', 'chunks']

export const Workspace: any = (props: any) => {
    const { product, height, files, rootDir, command, commandResponse } = props

    const dispatch = useDispatch()
    const unselectEvent: any = useEvent() 
    const loadFileEvent: any = useEvent() 
    const browser: any = useEvent()
    const sections: any = useRef(null)

    const [expandedChunks, setExpandedChunks] = useState([])
    const [section, setSection] = useState('assets')
    const [openFile, setOpenFile] = useState("")

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

    const onTogglePreview = () => {
        browser.send({ type: 'toggleBrowser', product: product })
    }

    return (
        <Layout style={{ 
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f5f5f5",
          alignItems: "flex-start",
          padding: 0,
          margin: 0,
          width: "100%",
          height: "100%",
          justifyContent: "flex-start"
        }}>
          <ProductComps.Header 
              onTogglePreview={onTogglePreview}
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
                width: 840,
                display: "flex",
                flex: 1,
                flexDirection: "column",
                backgroundColor: "#ffffff",
                marginTop: 10,
                padding: 0,
              }}>
                <ProductComps.Assets
                  onSelect={onFileSelect}
                  height={height - 230}
                  product={product} 
                  rootDir={rootDir} 
                  visible={section === SECTIONS[0]}
                  openFile={openFile}
                  files={files}/>
                <ProductComps.Chunks
                  onSelect={onFileSelect}
                  height={height - 230}
                  openFile={openFile}
                  expanded={expandedChunks}
                  onExpand={onExpandChunks}
                  visible={section === SECTIONS[1]}
                  product={product} 
                  rootDir={rootDir} 
                  files={files}
                />
          </Carousel>   
        </Layout>)
}