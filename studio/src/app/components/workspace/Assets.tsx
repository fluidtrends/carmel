
import React, { useState, useEffect } from 'react'
import { Asset } from '../../types'
import { Layout, Menu, Dropdown, Button, Tree, Select, Typography } from 'antd'
import { PictureOutlined, PlusCircleOutlined, SettingOutlined, FileImageOutlined, FolderOutlined, FileTextOutlined, FontSizeOutlined } from '@ant-design/icons'
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
  const { product, height, openFile, visible, onSelect } = props

  const [images, setImages] = useState([])
  const [covers, setCovers] = useState([])
  const [text, setText] = useState([])
  const [locales, setLocales] = useState([])
  const [locale, setLocale] = useState("en")
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
          break;
        case 'cover':
          setSelectedImage(`http://0.0.0.0:${product.staticServerPort}/products/${product.id}/carmel/assets/${locale}/images/covers/${path}/landscape@3x.png`)
          setSelectedFile("")
          break;
        case 'text':
          setSelectedFile(`carmel/assets/${locale}/text/${path}`)
          setSelectedImage("")
          break;
      }  
  }

  const updateFiles = () => {
    if (!product.files.assets) return

    const textFiles = product.files.assets[locale].text.__files || []
    const imageFiles = product.files.assets[locale].images.__files || []
    const coverFilesRaw = product.files.assets[locale].images.covers
    delete coverFilesRaw.__path
    const coverFiles = Object.keys(coverFilesRaw)

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

  const renderImagesMenu = () => {
      return <SubMenu
        key="images"
        title={
          <span>
            <PictureOutlined />
            <span>Images</span>
          </span> 
        }>
          { renderCoversMenu() }
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

  const onNew = (e: any) => {
    const { key } = e
    switch(key) {
      case "newCover":
        addEvent.send({ type: "runCommand", cmd: "assets", args: [
          { name: "cover", value: true },
          { name: "generate", value: true },
          { name: "name", value: 'lugano' }
        ], productId: product.id })
        break
    }
  }

  useEffect(() => {
    if (!addEvent.received.id) return 
    console.log(addEvent.received.id)
  }, [addEvent.received])

  const createMenu = <Menu onClick={onNew}>
    <Menu.Item key="newCover" icon={<PictureOutlined />}>
      Add New Cover
    </Menu.Item>
  </Menu>  

 
  return (<Layout style={{ 
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      margin: 0,
      flex: 1,
      padding: 0,
      // backgroundColor: "#00eeee",
      alignItems: 'stretch',
      alignSelf: "stretch",
      height,
      width: "100%",
    }}>
        <Sider style={{
          backgroundColor: "#ffffff",
          // borderRight: "1px solid #", 
          overflow: "auto",
          padding: 5
        }}>
           <Dropdown overlay={createMenu}>
              <Button icon={<PlusCircleOutlined />} type="link" style={{
              }}> Add a new asset </Button>
          </Dropdown>
          <Select defaultValue="en" style={{ 
            margin: 10, 
            width: "90%"
          }} onChange={onLocaleChange}>
                { locales.map((l: any) => <Option value={l.id} key={l.id}>{l.language}</Option>)}
          </Select>
          { renderMenu() }
        </Sider>
        <Content style={{ margin: 0 }}>
            { renderEditor() }
        </Content>
    </Layout>)
}