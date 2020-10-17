import React, { useEffect, useCallback, useState } from 'react'
import { Card, Typography, Button, Radio, Spin } from 'antd'
import { Header } from './Header'
import { useRemote, useEvent } from '../../hooks'

const { Meta } = Card
const { Text, Title, Paragraph } = Typography

export const Start: any = (props: any) => {
    const { onBrowse, product, completed } = props  

    const onChallengesBrowse = () => {
      onBrowse && onBrowse()
    }

    const onHistory = () => {
    }

    const showNoHistory = () => {
      return <div style={{marginTop: 16, marginBottom: 48, padding: 10, paddingTop: 16, width: "100%" }}>
        <Paragraph> You have not completed any challenges for this product yet </Paragraph>
      </div>
    }

    const showHistory = () => {
      if (completed.length === 0) {
        return showNoHistory()
      }

      return <div style={{marginTop: 32, marginBottom: 48, padding: 10, paddingTop: 16, width: "100%" }}>
        <Paragraph> You completed { completed.length } product challenges so far </Paragraph>
                    <Button
                        type="link"
                        size="large"
                        onClick={onHistory}
                        style={{
                        }}>
                        See History
                    </Button>
      </div>
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
                  padding: 0 
                }}>

                 <Header title="Take a Product Challenge" style={{marginTop: 16}}/>

                  <Card style={{marginTop: 8, padding: 10 }}>
                    <Title level={2}> Tweak-n-Learn™ </Title>
                    <Paragraph> Take a Product Challenge to add functionality to your product and grow your skill set. </Paragraph>
                    <Button
                        type="primary"
                        size="large"
                        onClick={onChallengesBrowse}
                        style={{
                            marginTop: 16
                        }}>
                        Browse Challenges
                    </Button>
                  </Card>

                  { showHistory() }

    </div>)
}