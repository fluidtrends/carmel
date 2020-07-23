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
  const [status, setStatus] = useState('Preparing to setup ...')
  const [progress, setProgress] = useState(0)
  const [estimatedTime, setEstimatedTime] = useState(0)
  const [timer, setTimer] = useState(undefined)
  
  const session = useSelector((state: State) => state.session)

  const dispatch = useDispatch()

  useEffect(() => {
    setupEvent.send({ type: 'setup' })
  }, [])

  useEffect(() => {
    if (!setupEvent.received.id) return 

    if (setupEvent.received.estimatedTime) {
      if (estimatedTime > 0) return
      setEstimatedTime(setupEvent.received.estimatedTime)
      setStatus("Setting up your environment  ...")
      setProgress(5)  
      const ticker = 95 / setupEvent.received.estimatedTime
      setTimer(setInterval(() => {
        setProgress((prog) => prog + ticker)
      }, 1000))
      return 
    }

    if (setupEvent.received.done) {
      clearInterval(timer)
      setStatus("Ready")
      setProgress(100)
      setTimer(undefined)
      setTimeout(() => {
        dispatch(replace('/newProduct'))
      }, 2000)
      return 
    }

    setProgress(2)  
 }, [setupEvent])

  return (<div style={styles.screen}>
      <Title> Welcome to Carmel </Title>
      
      <div style={{
        width: 600
      }}>
        <Progress
          showInfo={false}
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