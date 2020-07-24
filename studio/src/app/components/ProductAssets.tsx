import React, { useEffect, useState } from 'react'
import { ProductAssetsComponentProps, Asset } from '../types'
import { Card, Menu, Layout, Typography, Spin, Tree } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { AssetListItem } from '../components'

const { Meta } = Card
const { Title } = Typography
const { Header, Content, Sider } = Layout
const { TreeNode, DirectoryTree } = Tree

/**
 * 
 * @param props 
 */
export const ProductAssets: React.FC<ProductAssetsComponentProps> = (props) => {
  const { product, rootDir, files } = props
  const [images, setImages] = useState([])

  const onSelected = (asset: Asset) => {
    console.log('selected', asset)
  }

  useEffect(() => {
    if (!files.assets) return

    setImages(files.assets.__files.map((name: string) => ({
      id: name,
      name,
      path: name
    } as Asset )))
  }, [files])

  return (<Layout style={{ 
      display: "flex",
      flex: 1,
      margin: 0,
      padding: 0,
      flexDirection: "row",
      width: "100%",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      flexWrap: "wrap",
      backgroundColor: "#ffffff"
    }}>
          { images && images.map (asset => <AssetListItem key={asset.id} asset={asset} onSelected={onSelected} product={product}/>) }
    </Layout>)
}