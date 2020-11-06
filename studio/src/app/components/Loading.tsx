import React, { useEffect, useCallback, useState } from 'react'
import { Card, Typography, Button, Skeleton } from 'antd'
import * as Spinners from 'react-spinners'
import * as styles from '../styles'

const { Meta } = Card
const { Text, Title, Paragraph } = Typography

export const Loading: any = (props: any) => {
    const { message } = props
    const loaders = ['ClimbingBoxLoader', 'PacmanLoader', 'PuffLoader']

    return <div style={{ 
        ...styles.container
    }}>
            <div style={{ margin: 50 }}>
                <Spinners.ScaleLoader color="#03A9F4"/> 
            </div>
            <Title level={4} style={{color: "#999999"}}>
                { message || 'Loading' }
            </Title>
    </div>
}
