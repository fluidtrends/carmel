import React, { useEffect, useCallback, useState } from 'react'
import { Card, Typography, Button, Radio } from 'antd'
import { Summary, Header } from '.'

const { Meta } = Card
const { Text, Title, Paragraph } = Typography

export const Details: any = (props: any) => {
    const { challenge, onStart, children, onBack } = props

    const onBackToBrowse = () => {
      onBack && onBack()
    }

    const onStartChallenge = () => {
      onStart && onStart(challenge)
    }

    return (<div key={"top"} style={{ 
                  width: 300, 
                  marginTop: 16, 
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                    textAlign: "center",
                    padding: 10 
                  }}>
                 <Header title={"Take Challenge"}/>
                  { children }
                 <div style={{
                      marginTop: 16,
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center"
                  }}>
                    <Button
                      type="primary"
                      size="large"
                      onClick={onStartChallenge}
                      style={{
                          marginTop: 0,
                          width: 120
                      }}>
                      Start Now
                  </Button>
                  <Button
                      type="link"
                      onClick={onBackToBrowse}
                      style={{
                          marginTop: 8
                      }}>
                      or choose another one
                  </Button>
                </div>
            </div>)
}