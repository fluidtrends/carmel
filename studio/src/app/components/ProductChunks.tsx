import React, { useState, useEffect } from 'react'
import { ProductChunksComponentProps, Chunk } from '../types'
import { Card, Menu, Layout, Typography, Spin, Tree } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

import { DataNode } from 'antd/lib/tree';
import { Editor } from './Editor'

const { Content, Sider, Header, Footer } = Layout
const { DirectoryTree } = Tree
const { SubMenu } = Menu

/**
 * 
 * @param props 
 */
export const ProductChunks: React.FC<ProductChunksComponentProps> = (props) => {
  const { product, height, openFile, files, expanded, onSelect, onExpand } = props
  const [data, setData] = useState([])
  const [chunk, setChunk] = useState()
  const [asset, setAsset] = useState()
  const [tree, setTree] = useState([])

  const parseChunksData = (root: any, id = 'chunks') => {
    const shadow = Object.assign({}, root)

    const { __path, __files } = shadow
    delete shadow.__path && delete shadow.__files

    let children: any = Object.keys(shadow).filter(k => !['__path'].includes(k)).map(name => ({
      title: name,
      key: `${id}/${name}`,
      children: parseChunksData(shadow[name], `${id}/${name}`)
    }))

    if (__files) {
      __files.map((file: string) => {
        setTree(tree => [...tree, `${id}/${file}`])
        children.push({
          key: `${id}/${file}`,
          title: file, 
          isLeaf: true
        })
      })
    }

    return children
  }

  const onFileSelect = (file: any) => {
    const fileData = tree.find(f => f === file[0])
    setAsset(fileData)
    fileData && onSelect(fileData)
  }

  useEffect(() => {
    if (!files.chunks) return 

    setData(parseChunksData(files.chunks))
  }, [files])
 
  return (<Layout style={{ 
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      margin: 0,
      flex: 1,
      padding: 0,
      backgroundColor: "#ffffff",
      alignItems: 'stretch',
      alignSelf: "stretch",
      width: "100%",
      height
    }}>
        <Sider style={{
          backgroundColor: "#ffffff",
          borderRight: "1px solid #ffffff"
        }}>
          <DirectoryTree
            onSelect={onFileSelect}
            treeData={data}
          />
        </Sider>
        <Content style={{ margin: 0 }}>
            <Editor 
              product={product} 
              chunk={chunk}
              openFile={openFile}
              asset={asset}/>
        </Content>
    </Layout>)
}
