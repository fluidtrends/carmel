import React, { useEffect, useCallback, useState } from 'react'
import { Card, Typography } from 'antd'
import { Start, Browser } from '.'

const { Meta } = Card
const { Text, Title, Paragraph } = Typography

export const Challenges: React.FC<any> = (props) => {
    const { product, height } = props
    const [ browse, setBrowse ] = useState(false)

    const onBrowse = () => {
      setBrowse(true)
    }

    return (<div
        style={{ 
          overflow: "auto", 
          margin: 0, 
          display: 'flex',
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "justify",
          backgroundColor: "#f5f5f5", 
          borderLeft: "1px solid  #c7c7c7",
          paddingLeft: 20,
          marginLeft: 20,
          width: 480,
          height: (height - 120 )
        }}>
          { browse ? <Browser product={product}/> : <Start onBrowse={onBrowse}/> }
        </div>)
}