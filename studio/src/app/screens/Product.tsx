import React, { useState, useRef, useEffect, useCallback } from 'react'
import { ProductScreenProps, State, Chunk } from '../types'
import { useSelector, useDispatch } from "react-redux"
import { Carousel, Layout } from 'antd'
import { replace } from 'connected-react-router'
import { unselectProduct, selectProduct } from '../data'
import { useEvent } from '../hooks'
import { ProductHeader, ProductChunks, ProductAssets, ProductChallenge } from '../components'

/**
 * 
 * @param props 
 */
export const Product: React.FC<ProductScreenProps> = (props) => {
  const { width, height } = props
  const SECTIONS = ['assets', 'chunks']
  const [productDetails, setProductDetails] = useState("")

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
  const [section, setSection] = useState('assets')
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

    const selectedProduct = {
      ...loadProductEvent.received.manifest,
      dir: loadProductEvent.received.rootDir,
      staticPort: loadProductEvent.received.staticServerPort,
      started: loadProductEvent.received.hasStartServer
    }
    setProductDetails(selectedProduct)
    dispatch(selectProduct(selectedProduct))
  }, [loadProductEvent.received])

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

  const onCommand = (cmd: string) => {
      command.send({ type: "runCommand", cmd, args: [], productId: product.id })
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
      flexDirection: "row",
      backgroundColor: "#f5f5f5",
      alignItems: "flex-start",
      padding: 0,
      margin: 0,
      width: "100%",
      height: "100%",
      justifyContent: "flex-start"
    }}>

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
            width: 840,
            display: "flex",
            flex: 1,
            flexDirection: "column",
            backgroundColor: "#ffffff",
            marginTop: 10,
            padding: 0,
          }}>
            <ProductAssets
              onSelect={onFileSelect}
              height={height - 230}
              product={product} 
              rootDir={rootDir} 
              visible={section === SECTIONS[0]}
              openFile={openFile}
              files={files}/>
            <ProductChunks
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
      </Layout>
      <div style={{
        backgroundColor: "#f5f5f5", 
        borderLeft: "1px solid  #c7c7c7",
        paddingLeft: 20,
        margin: 0,
        marginLeft: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: 480,
        height: (height - 120 )
      }}>
        <ProductChallenge 
           productDetails={productDetails}
        /> 
      </div>  
  </Layout>)
}

