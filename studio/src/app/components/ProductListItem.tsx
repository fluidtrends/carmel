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
        width: 160, 
        height: 160, 
        margin: 20, 
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid #dddddd",
        justifyContent: "center",
        textAlign: "center"
      }}> 
      <PlusCircleOutlined style={{
        fontSize: 30,
        margin: 10
      }}/>
     <Title level={4} style={{
        }}> { title || product.name } </Title>
  </Card></div>)
}