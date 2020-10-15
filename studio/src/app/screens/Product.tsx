import React, { useState, useRef, useEffect, useCallback } from 'react'
import { ProductScreenProps, State, Chunk } from '../types'
import { useSelector, useDispatch } from "react-redux"
import { Carousel, Layout } from 'antd'
import { unselectProduct, selectProduct } from '../data'
import { useEvent } from '../hooks'
import { Challenges } from '../components/challenges'
import { Workspace } from '../components/workspace'

/**
 * 
 * @param props 
 */
export const Product: React.FC<ProductScreenProps> = (props) => {
  const { width, height } = props
  const product = useSelector((state: State) => state.product) 
  const dispatch = useDispatch()

  const loadProductEvent: any = useEvent() 
  const command: any = useEvent()

  const [productDetails, setProductDetails] = useState("")
  const [rootDir, setRootDir] = useState()
  const [files, setFiles] = useState({})
  const [commandResponse, setCommandResponse] = useState({})

  useEffect(() => { 
    if (!command.received.id) return 

    setCommandResponse(command.received)

    if (command.received.done) {
        loadProductEvent.send({ type: 'loadSelectedProduct' })
    }
  }, [command.received])

  useEffect(() => {
    loadProductEvent.send({ type: 'loadSelectedProduct' })
  }, [])

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
        isLocked: loadProductEvent.received.isLocked,
        staticPort: loadProductEvent.received.staticServerPort,
        started: loadProductEvent.received.hasStartServer
      }
      
      setProductDetails(selectedProduct)
      dispatch(selectProduct(selectedProduct))
  }, [loadProductEvent.received])

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
      <Workspace
        height={height}
        files={files}
        rootDir={rootDir}
        command={command}
        commandResponse={commandResponse}
        product={productDetails}/>

      <Challenges 
        height={height}
        product={productDetails} />
  </Layout>)
}

