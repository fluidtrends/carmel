import React, { useEffect, useState } from 'react'
import { Typography, Spin } from 'antd'
import { useDispatch, useSelector } from "react-redux"
import { WelcomeScreenProps } from '../types'
import { useEvent } from '../hooks'
import * as styles from '../styles'
import strings from '../strings.json'
const { Title } = Typography

/**
 * 
 * @param props 
 */
export const Welcome: React.FC<WelcomeScreenProps> = (props) => {
  const setupEvent: any = useEvent() 
  const dispatch = useDispatch()

  useEffect(() => {
    setupEvent.send({ type: 'setup' })
  }, [])

  useEffect(() => {
    console.log(setupEvent)
    // setupEvent.received.type === 'ready' && dispatch(push('/')
  }, [setupEvent])

  return (<div style={styles.screen}>
      <Title> Welcome </Title>
     <Spin tip={strings.settingUp}/>
  </div>)
}