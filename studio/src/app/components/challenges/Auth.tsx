import React, { useEffect, useCallback, useState } from 'react'
import { Card, Typography, Result, Button, Radio, Carousel } from 'antd'
import { ArrowDownOutlined } from '@ant-design/icons'
import { LockOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from "react-redux"
import { replace } from 'connected-react-router'

const { Meta } = Card
const { Text, Title, Paragraph } = Typography

export const Auth: any = (props: any) => {
    const { onBack } = props
    const dispatch = useDispatch()

    const onRegister = () => {
        dispatch(replace('/register'))
    }

    const onLogin = () => {
        dispatch(replace('/login'))
    }

    const onCancel = () => {
        onBack && onBack()
    }

    return (<div 
                key={"top"} style={{ 
                    width: 300, 
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                    textAlign: "center",
                  paddingTop: 10 }}>
                      <Card>
                         <Result
                            title="You need a Carmel Account to continue"
                            icon={<LockOutlined />}

                            extra={[<Button key="signup" onClick={onRegister} type="primary">
                                Sign Up
                            </Button>,
                            <Button key="signin" onClick={onLogin}>
                                Sign In
                            </Button>]}/>
                        </Card>
                        <Button onClick={onCancel}  type="link" style={{marginTop: 16}} key="back">
                            Never mind
                        </Button>
            </div>)
}