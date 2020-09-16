import React from 'react'
import { AssetListItemComponentProps } from '../types'
import { Card, Typography } from 'antd';

const { Text } = Typography

/**
 * 
 * @param props 
 */
export const ImageListItem: React.FC<AssetListItemComponentProps> = (props) => {
  const { asset, onSelected } = props

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
        <Text> IMAGE: { asset.name } </Text>
    }> 
    
  </Card></div>)
}