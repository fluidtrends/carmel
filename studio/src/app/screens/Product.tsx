import React, { useState, useRef, useEffect, useCallback } from 'react'
import { ProductScreenProps, State, Chunk } from '../types'
import { useSelector, useDispatch } from "react-redux"
import { PageHeader, Menu, Tabs, Carousel, Spin, Tree, Dropdown, Button, Tag, Typography, Row, Layout } from 'antd'
import {
  EllipsisOutlined, TagOutlined,  
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LayoutFilled,
  UserOutlined,
  DownOutlined,
  PieChartOutlined,
  DesktopOutlined,
  LaptopOutlined,
  NotificationOutlined,
  ContainerOutlined,
  MailOutlined
} from '@ant-design/icons'
import { replace } from 'connected-react-router'
import { unselectProduct, selectProduct } from '../data'
import { useEvent } from '../hooks'
import { ProductHeader, ProductChunks, ProductAssets } from '../components'

const { Paragraph, Title } = Typography
const { TabPane } = Tabs
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
const { TreeNode, DirectoryTree } = Tree

/**
 * 
 * @param props 
 */
export const Product: React.FC<ProductScreenProps> = (props) => {
  const { width, height } = props
  const SECTIONS = ['chunks', 'assets']

  const product = useSelector((state: State) => state.product) 
  const dispatch = useDispatch()
  const unselectEvent: any = useEvent() 
  let loadProductEvent: any = useEvent() 
  const loadFileEvent: any = useEvent() 
  const command: any = useEvent()
  const browser: any = useEvent()
  const sections: any = useRef(null)

  const [expandedChunks, setExpandedChunks] = useState([])
  const [rootDir, setRootDir] = useState()
  const [files, setFiles] = useState({})
  const [section, setSection] = useState('chunks')
  const [commandResponse, setCommandResponse] = useState({})
  const [openFile, setOpenFile] = useState("")

  useEffect(() => {
    loadProductEvent.send({ type: 'loadSelectedProduct' })
  }, [])

  useEffect(() => { 
    if (!command.received.id) return 
    setCommandResponse(command.received)

    if (command.received.done) {
      loadProductEvent.send({ type: 'loadSelectedProduct' })
    }
  }, [command.received])

  useEffect(() => {
    if (!loadFileEvent.received.id) return 
    setOpenFile(loadFileEvent.received.content)
  }, [loadFileEvent.received])

  useEffect(() => {
    if (!loadProductEvent.received.id) return 

    let parsedFiles: any = {}
    loadProductEvent.received.files.map((file: string) => {
      const dirs = file.split('/')
      const filename = dirs.pop()

      let dir: any = parsedFiles
      let path = ""

      dirs.map((d: string) => {
        dir[d] = dir[d] || {}
        path = `${path}/${d}`
        dir[d].__path = path
        dir = dir[d]
      })

      dir.__files = dir.__files || []
      dir.__files.push(filename)
    })

    setRootDir(loadProductEvent.received.rootDir)
    setFiles(parsedFiles)
    dispatch(selectProduct({
      ...loadProductEvent.received.manifest
    }))
  }, [loadProductEvent.received])

  const onBack = () => {
    unselectEvent.send({ type: 'unselectProduct' })
    dispatch(unselectProduct()) && dispatch(replace('/products'))
  }

  const onSectionChanged = (section: string) => {
    setSection(section)
    sections.current.goTo(SECTIONS.indexOf(section))
  }

  const onExpandChunks = (keys: string[]) => {
    setExpandedChunks(keys)
  }

  const onCommand = (cmd: string) => {
      command.send({ type: "runCommand", cmd, args: [], productId: product.id })
  }

  const onChunkSelect = (path: any) => {
      loadFileEvent.send({ 
            type: "loadFile",
            productId: product.id, 
            path 
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
        <ProductHeader 
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
            width: 940,
            display: "flex",
            flex: 1,
            flexDirection: "column",
            backgroundColor: "#ffffff",
            marginTop: 10,
            padding: 0,
            height: height - 210
          }}>
           <ProductChunks
              onSelect={onChunkSelect}
              height={height - 210}
              openFile={openFile}
              expanded={expandedChunks}
              onExpand={onExpandChunks}
              product={product} 
              rootDir={rootDir} 
              files={files}
            />
            <ProductAssets 
              height={height}
              product={product} 
              rootDir={rootDir} 
              files={files}/>
      </Carousel>     
  </Layout>)
}

