import React, { useEffect, useState } from 'react'
import { Typography, Spin, Progress } from 'antd'
import { useDispatch, useSelector } from "react-redux"
import { WelcomeScreenProps, State } from '../types'
import { useEvent } from '../hooks'
import * as styles from '../styles'
import strings from '../strings.json'
const { Title, Text } = Typography
import { replace } from 'connected-react-router'

/**
 * 
 * @param props 
 */
export const Welcome: React.FC<WelcomeScreenProps> = (props) => {
  const setupEvent: any = useEvent() 
  const [status, setStatus] = useState('')
  const [progress, setProgress] = useState(0)
  const session = useSelector((state: State) => state.session)

  const dispatch = useDispatch()

  useEffect(() => {
    setupEvent.send({ type: 'setup' })
  }, [])

  useEffect(() => {
    if (!setupEvent.received.id) return 
    setProgress(setupEvent.received.progress)
    setStatus(setupEvent.received.status)

    if (setupEvent.received.progress >= 100) {
      setTimeout(() => {
        dispatch(replace(session.productId ? '/product' : '/products'))
      }, 1000)
    }
 }, [setupEvent])

  return (<div style={styles.screen}>
      <Title> Welcome </Title>
      
      <div style={{
        width: 600
      }}>
        <Progress
          strokeColor={{
            from: '#108ee9',
            to: '#87d068',
          }}
          percent={progress}
          status="active"
        />
      </div>
      <Text> { status } </Text>

  </div>)
}