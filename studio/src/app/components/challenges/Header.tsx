import React, { useEffect, useCallback, useState } from 'react'
import { Card, Typography, Button, Radio } from 'antd'
import { ArrowDownOutlined } from '@ant-design/icons'

const { Meta } = Card
const { Text, Title, Paragraph } = Typography

export const Header: any = (props: any) => {
    const { title } = props

    return (<div 
                key={"top"} style={{ 
                  width: 300,
                  margin: 0,
                  textAlign: "center",
                  paddingTop: 10 }}>
                <Title level={4} style={{}}> { title } </Title>
                <ArrowDownOutlined style={{fontSize: 20, color: "#42A5F5"}} />
            </div>)
}