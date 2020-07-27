import React from 'react'
import { TemplateListItemComponentProps } from '../types'
import { Card, Button, Avatar, Typography } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card
const { Title } = Typography

/**
 * 
 * @param props 
 */
export const TemplateListItem: React.FC<TemplateListItemComponentProps> = (props) => {
  const { template, onSelected } = props
  
  return (<div onClick={() => onSelected(template)}>
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
        <Title level={4}> { template.name } </Title>
    }> 
    
  </Card></div>)
}