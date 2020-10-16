import React, { useEffect, useCallback, useState } from 'react'
import { Card, Typography, Button, Radio, Spin } from 'antd'
import { useRemote, useEvent } from '../../hooks'

const { Meta } = Card
const { Text, Title, Paragraph } = Typography

export const Start: any = (props: any) => {
    const { onBrowse, product } = props  

    const onChallengesBrowse = () => {
      onBrowse && onBrowse()
    }

    return (<div 
                key={"main"} style={{ 
                  width: 300, 
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                  textAlign: "center",
                  padding: 10 
                }}>
                <Title level={2}> Tweak-n-Learn™ </Title>
                <Paragraph> Take a Carmel Challenge to add functionality to your product and grow your skill set. </Paragraph>
                <Button
                    type="primary"
                    size="large"
                    onClick={onChallengesBrowse}
                    style={{
                        marginTop: 16
                    }}>
                    Browse Challenges
                </Button>
    </div>)
}