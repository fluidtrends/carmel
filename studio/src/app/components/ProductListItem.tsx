import React from 'react'
import { ProductListItemComponentProps } from '../types'
import { Card, Button, Avatar, Typography } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card
const { Title } = Typography

/**
 * 
 * @param props 
 */
export const ProductListItem: React.FC<ProductListItemComponentProps> = (props) => {
  const { product, onSelected } = props

  return (<div onClick={() => onSelected(product)}>
    <Card
      hoverable
      style={{ 
        width: 200, 
        height: 200, 
        margin: 20, 
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid #dddddd",
        justifyContent: "center",
        textAlign: "center"
      }}
      cover={
        <Title level={4}> { product.name } </Title>
    }> 
    
  </Card></div>)
}