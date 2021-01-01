
import React, { useState, useEffect } from 'react'
import { Asset } from '../../types'
import { Layout, Menu, Modal, Dropdown, Button, Tree, Select, Typography, Divider, Spin, Input } from 'antd'
import { PictureOutlined, UploadOutlined, PlusCircleOutlined, LoadingOutlined, PlusOutlined, FileImageOutlined, FolderOutlined, FileTextOutlined, FontSizeOutlined } from '@ant-design/icons'
import { useEvent } from '../../hooks'

import { Editor } from './Editor'
const { Content, Sider } = Layout
const { DirectoryTree } = Tree
const { Option } = Select
const { Title } = Typography
const { SubMenu } = Menu

/**
 * 
 * @param props 
 */
export const Assets: React.FC<any> = (props) => {
  const { product, height, openFile, onReload, visible, onSelect } = props

  const [images, setImages] = useState([])
  const [covers, setCovers] = useState([])
  const [text, setText] = useState([])
  const [locales, setLocales] = useState([])
  const [locale, setLocale] = useState("en")
  const [addingAsset, setAddingAsset] = useState(false)
  const [addingAssetType, setAddingAssetType] = useState("")
  const [addingAssetName, setAddingAssetName] = useState("")
  const [addingAssetUploading, setAddingAssetUploading] = useState(false)
  
  const [selectedFile, setSelectedFile] = useState("")
  const [selectedImage, setSelectedImage] = useState("")
  const addEvent: any = useEvent()

  const onLocaleChange = (value: any) => {
    console.log(`selected locale ${value}`)
  }

  const onMenuItemSelected = async (value: any) => {
    const [type, path] = value.key.split("|")
      switch(type) {
        case 'image':
          setSelectedImage(`http://0.0.0.0:${product.staticServerPort}/products/${product.id}/carmel/assets/${locale}/images/${path}`)
          setSelectedFile("")
          break
        case 'cover':
          setSelectedImage(`http://0.0.0.0:${product.staticServerPort}/products/${product.id}/carmel/assets/${locale}/images/covers/${path}/landscape@3x.png`)
          setSelectedFile("")
          break
        case 'text':
          setSelectedFile(`carmel/assets/${locale}/text/${path}`)
          setSelectedImage("")
          break
        case 'newcover':
          setAddingAssetType('covers')
          setAddingAsset(true)   
          break
        case 'newimage':
          setAddingAssetType('images')
          setAddingAsset(true)   
          onAddAsset()
          break
        case 'newtext':
          break
      }  
  }

  const updateFiles = () => {
    if (!product.files.assets) return

    const textFiles = product.files.assets[locale].text.__files || []
    const imageFiles = (product.files.assets[locale].images.__files || []).filter((i: any) => i !== '.DS_Store')
    const coverFilesRaw = product.files.assets[locale].images.covers

    delete coverFilesRaw.__path
    delete coverFilesRaw.__files

    const coverFiles: any = Object.keys(coverFilesRaw)
    
    setImages(imageFiles)
    setCovers(coverFiles)
    setText(textFiles)
  }

  useEffect(() => {
    if (!product || !product.files.assets) return
    let l: any = Object.keys(product.files.assets)
    l.shift()
    setLocales(l.map((id: string) => ({ id, language: id })))
    updateFiles()
  }, [product])

  useEffect(() => {
    if (!selectedFile) return 
    onSelect(selectedFile)
  }, [selectedFile])

  useEffect(() => {
    if (!selectedFile || !visible) return 
    onSelect(selectedFile)
  }, [visible])


  const onAddAsset = () => {
    setAddingAssetUploading(true)
    addEvent.send({ type: "addAsset", name: addingAssetName, kind: addingAssetType, locale, productId: product.id })
  }

  const onAddingAssetNameChanged = (e: any) => {
    setAddingAssetName(e.target.value)
  }

  const renderImagesMenu = () => {
      return <SubMenu
        key="images"
        title={
          <span>
            <PictureOutlined />
            <span>Images</span>
          </span> 
        }>
          <Menu.Item key={`newimage`} icon={<PlusOutlined />}> <Button type="link">Add Image</Button> </Menu.Item>      
          { images.map((i: string) =>  <Menu.Item key={`image|${i}`} icon={<FileImageOutlined />}>{ i }</Menu.Item>)}       
      </SubMenu>
  } 

  const renderCoversMenu = () => {
    return <SubMenu
      key="covers"
      title={
        <span>
          <FolderOutlined />
          <span>Covers</span>
        </span> 
      }>
        <Menu.Item key={`newcover`} icon={<PlusOutlined />}> <Button type="link">Add Cover</Button> </Menu.Item>      
        { covers.map((i: string) =>  <Menu.Item key={`cover|${i}`} icon={<FileImageOutlined />}>{ i }</Menu.Item>)}       
    </SubMenu>
  } 
 
  const renderTextMenu = () => {
    return <SubMenu
      key="text"
      title={
        <span>
          <FontSizeOutlined />
          <span>Text</span>
        </span>
      }>
        <Menu.Item key={`newtext`} icon={<PlusOutlined />}> <Button type="link">Add Text</Button> </Menu.Item>      
        { text.map((i: string) =>  <Menu.Item key={`text|${i}`} icon={<FileTextOutlined />}>{ i }</Menu.Item>)}       
    </SubMenu>
  }

  const renderMenu = () => {
      return <Menu
      mode="inline"
      onSelect={onMenuItemSelected}
      style={{ 
        width: "100%", 
        border: "none" 
      }}>
        { renderTextMenu() }
        { renderCoversMenu() }
        { renderImagesMenu() }
    </Menu>
  }

  const renderEditor = () => {
    if (selectedImage) {
          return <div style={{
            backgroundColor: "#2E3129",
            height: "100%",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}>
            <img src={selectedImage} style={{
              margin: "20px",
              maxWidth: "80%",
              maxHeight: "80%" 
            }}/>
          </div>
    }

    if (!selectedFile) {
      return <div/>
    }

    return <div style={{
      backgroundColor: "#272822",
      height: "100%",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Editor 
              product={product} 
              openFile={openFile}
              selectedFile={selectedFile}/>
      </div>
  }

  const stopAddingAsset = () => {
    setAddingAsset(false)
    setAddingAssetType("")
    setAddingAssetUploading(false)
  }

  useEffect(() => {
    if (!addEvent.received.id) return 
    stopAddingAsset()
    onReload()
  }, [addEvent.received])

  const renderAddForm = () => {
    if (addingAssetUploading) {
      return <div style={{
        backgroundColor: "#ffffff",
        height: "100%",
        width: "100%",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
          <Spin/>
      </div>
    }
    
    return <div style={{
      backgroundColor: "#ffffff",
      height: "100%",
      width: "100%",
      display: "flex",
      flex: 1,
      padding: 20,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Input style={{ height: 32, width: 300, margin: 20 }} placeholder="Give your cover a name" onChange={onAddingAssetNameChanged}/>

      <Button type="primary" onClick={onAddAsset}> Choose an image </Button>
      <Button type="link" onClick={stopAddingAsset}> Cancel </Button>
    </div>
  }

  const renderSider = () => {
    if (addingAsset) {
      return <div/>
    }

    return <Sider style={{
      backgroundColor: "#ffffff",
      overflow: "auto",
      padding: 5
    }}>
      <Select defaultValue="en" style={{ 
        margin: 10, 
        width: "90%"
      }} onChange={onLocaleChange}>
            { locales.map((l: any) => <Option value={l.id} key={l.id}>{l.language}</Option>)}
      </Select>
      { renderMenu() }
    </Sider>
  }

  const renderContent = () => {
    return  <Content style={{ margin: 0 }}>
        { addingAsset ? renderAddForm() : renderEditor() }
    </Content> 
  }
 
  return (<Layout style={{ 
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      margin: 0,
      flex: 1,
      padding: 0,
      alignItems: 'stretch',
      alignSelf: "stretch",
      height,
      width: "100%",
    }}>
        { renderSider() }
        { renderContent() }
    </Layout>)
}