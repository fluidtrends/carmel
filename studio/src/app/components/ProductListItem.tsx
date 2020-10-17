import React from 'react'
import { ProductListItemComponentProps } from '../types'
import { Card, Button, Avatar, Typography } from 'antd';
import { PlusCircleOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card
const { Title } = Typography

/**
 * 
 * @param props 
 */
export const ProductListItem: React.FC<ProductListItemComponentProps> = (props) => {
  const { product, onSelected, isButton, title } = props

  return (<div onClick={() => onSelected(isButton ? undefined : product)}>
    <Card
      hoverable
      style={{ 
        width: 250, 
        height: 160, 
        margin: 20, 
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid #dddddd",
        justifyContent: "center",
        backgroundColor: title ? "#f7f7f7" : "#ffffff",
        textAlign: "center"
      }}> 
      { title && (<PlusCircleOutlined style={{
          fontSize: 30,
          color: "#2196F3",
          margin: 10
        }}/>)
      }
     <Title level={4} style={{
               color: title ? "#2196F3" : "#333333"
        }}> { title || product.name } </Title>
  </Card></div>)
}