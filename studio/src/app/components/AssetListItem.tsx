import React from 'react'
import { AssetListItemComponentProps } from '../types'
import { Card, Button, Avatar, Typography } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card
const { Text } = Typography

/**
 * 
 * @param props 
 */
export const AssetListItem: React.FC<AssetListItemComponentProps> = (props) => {
  const { product, asset, onSelected } = props

  return (<div onClick={() => onSelected(asset)}>
    <Card
      hoverable
      style={{ 
        width: 150, 
        height: 150, 
        margin: 20, 
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}
      cover={
        <Text> { asset.name } </Text>
    }> 
    
  </Card></div>)
}