import React, { useEffect, useCallback, useState } from 'react'
import { Card, Typography, Button, Radio } from 'antd'

const { Meta } = Card
const { Text, Title, Paragraph } = Typography

export const Header: any = (props: any) => {
    const { onBrowse } = props

    return (<Card 
                key={"top"} style={{ 
                  width: 300, 
                  textAlign: "center",
                  marginTop: 16, 
                  padding: 10 }} loading={false}>
                <Title level={4}> Product Challenges </Title>
                <Paragraph> You didn't take any challenges relating to this product. </Paragraph>
            </Card>)
}