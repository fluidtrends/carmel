  import React, { useState, useEffect } from 'react'
import { Asset } from '../../types'
import { Layout, Menu, Modal, Dropdown, List, Avatar, Button, Skeleton, Tree, Select, Typography, Divider, Spin, Input } from 'antd'
import { PictureOutlined, UploadOutlined, PlusCircleOutlined, LoadingOutlined, PlusOutlined, FileImageOutlined, FolderOutlined, FileTextOutlined, FontSizeOutlined } from '@ant-design/icons'
import { useEvent } from '../../hooks'

import { Editor } from './Editor'
const { Sider } = Layout
const { DirectoryTree } = Tree
const { Option } = Select
const { Title } = Typography
const { SubMenu } = Menu

/**
 * 
 * @param props 
 */
export const Content: React.FC<any> = (props) => {
  const { product, height, openFile, onReload, visible, onSelect } = props

  const [index, setIndex] = useState([])
  const [addingSection, setAddingSection] = useState(false)
  const [section, setSection] = useState("")
  const [working, setWorking] = useState(false)
  const [addingSectionName, setAddingSectionName] = useState("")

  const [selectedFile, setSelectedFile] = useState("")
  const addSectionEvent: any = useEvent()
  const addFileEvent: any = useEvent()

  const onNewSection = () => {
    setAddingSection(true)
  }

  const onAddSection = () => {
    setAddingSection(false)
    setWorking(true)    
    addSectionEvent.send({ type: "addContentSection", name: addingSectionName, productId: product.id })
  } 

  const stopAddingSection = () => {
    setAddingSection(false)
  }

  const onMenuItemSelected = async (value: any) => {
    const [type, path] = value.key.split("|")
      switch(type) {
          case 'newfile':
            setSection(path)
            setWorking(true)
            addFileEvent.send({ type: "addContentFile", section: path, productId: product.id })
          break
      }  
  }

  useEffect(() => {
    setIndex(product.contentIndex)
  }, [product])

  useEffect(() => {
    // if (!selectedFile) return 
    // onSelect(selectedFile)
  }, [selectedFile])

  useEffect(() => {
    // if (!selectedFile || !visible) return 
    // onSelect(selectedFile)
  }, [visible])

  const onAddingSectionNameChanged = (e: any) => {
    setAddingSectionName(e.target.value)
  }

  const renderFiles = (section: any) => {
    const sect = index[section]
    if (!sect || !sect.files) return 

    return sect.files.map((file: string) => {
      return <Menu.Item key={`file|${section}|${file}`} icon={<FileTextOutlined />}> { file } </Menu.Item>      
    })
  }

  const renderSections = () => {
    if (!index || Object.keys(index).length === 0) {
      return <div/>
    }

    return Object.keys(index).map((section: any, i: number) => {
      return <SubMenu
          key={`section|${section}`}
          title={
            <span>
              <FolderOutlined />
              <span>{ section }</span>
            </span> 
          }>
            <Menu.Item key={`newfile|${section}`} icon={<PlusOutlined />}> <Button type="link">Add File</Button> </Menu.Item>      
            { renderFiles(section)}
        </SubMenu>
    })
  }

  const renderMenu = () => {
      return <Menu
      mode="inline"
      onSelect={onMenuItemSelected}
      style={{ 
        width: "100%", 
        border: "none" 
      }}>
            <Menu.Item key={`newsection`} icon={<PlusOutlined />}> <Button type="link" onClick={onNewSection}>Add Section</Button> </Menu.Item>      
            { renderSections() }
    </Menu>
  }

  useEffect(() => {
    if (!addSectionEvent.received.id) return 
    setIndex(addSectionEvent.received.index)
    setWorking(false)
  }, [addSectionEvent.received])

  useEffect(() => {
    if (!addFileEvent.received.id) return 
    console.log(addFileEvent.received)
    setIndex(addFileEvent.received.index)
    setWorking(false)
  }, [addFileEvent.received])

  const renderAddSection = () => {
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
      <Input style={{ height: 32, width: 300, margin: 20 }} placeholder="Give your section a name" onChange={onAddingSectionNameChanged}/>

      <Button type="primary" onClick={onAddSection}> Add</Button>
      <Button type="link" onClick={stopAddingSection}> Cancel </Button>
    </div>
  }

  const renderPreview = () => {
    return <div/>
  //   const hashes = [
  //     {
  //       title: 'Ant Design Title 1',
  //     },
  //     {
  //       title: 'Ant Design Title 2',
  //     },
  //     {
  //       title: 'Ant Design Title 3',
  //     },
  //     {
  //       title: 'Ant Design Title 3',
  //     },
  //     {
  //       title: 'Ant Design Title 3',
  //     },
  //     {
  //       title: 'Ant Design Title 3',
  //     },
  //     {
  //       title: 'Ant Design Title 3',
  //     },
  //     {
  //       title: 'Ant Design Title 3',
  //     },
  //     {
  //       title: 'Ant Design Title 3',
  //     },
  //     {
  //       title: 'Ant Design Title 3',
  //     },
  //     {
  //       title: 'Ant Design Title 3',
  //     },
  //     {
  //       title: 'Ant Design Title 3',
  //     },
  //     {
  //       title: 'Ant Design Title 3',
  //     },
  //     {
  //       title: 'Ant Design Title 4',
  //     },
  //   ];
    
  //   return <List
  //   style={{padding: 20}}
  //   itemLayout="horizontal"
  //   dataSource={hashes}
  //   renderItem={item => (
  //     <List.Item>
  //       <List.Item.Meta
  //         title={<a href="">{item.title}</a>}
  //         description="Ant Design, a design language for background applications, is refined by Ant UED Team"
  //       />
  //     </List.Item>
  //   )}
  // />
  }

  const renderSider = () => {
    if (addingSection || working) {
      return <div/>
    }

    return <Sider style={{
      backgroundColor: "#ffffff",
      overflow: "auto",
      padding: 5
    }}>
      { renderMenu() }
    </Sider>
  }

  const renderContent = () => {
    return  <Layout.Content style={{ 
      margin: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      flex: 1,
      alignItems: 'center'
     }}>
      { working ? <Spin/> : addingSection ? renderAddSection() : renderPreview() }
    </Layout.Content> 
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
        { renderSider()}
        { renderContent() }
    </Layout>)
}