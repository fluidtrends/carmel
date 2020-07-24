import React, { useEffect, useState } from 'react'
import { Typography, Spin, Progress } from 'antd'
import { useDispatch, useSelector } from "react-redux"
import { WelcomeScreenProps, State } from '../types'
import { useEvent } from '../hooks'
import * as styles from '../styles'
import { replace } from 'connected-react-router'
// import { setup } from 'src/main/events'
import { initialize } from '../data'

const { Title, Text } = Typography

/**
 * 
 * @param props 
 */
export const Welcome: React.FC<WelcomeScreenProps> = (props) => {
  const setupEvent: any = useEvent() 
  const loadEvent: any = useEvent() 
  const [status, setStatus] = useState('Setting up your environment ...')
  const session = useSelector((state: State) => state.session)
  // const products = useSelector((state: State) => state.products)

  const dispatch = useDispatch()

  useEffect(() => {
    setupEvent.send({ type: 'setup' })
  }, [])

  useEffect(() => {
    if (!setupEvent.received.id) return 

    const { status } = setupEvent.received
    setStatus(`${status}`)

    if (setupEvent.received.done) {
      setStatus("Ready")
      loadEvent.send({ type: 'load' })
    }
 }, [setupEvent.received])

  useEffect(() => {
    if (!loadEvent.received.id) return

    loadEvent.received.type === 'loaded' && dispatch(initialize(loadEvent.received)) 
  }, [loadEvent.received])

  useEffect(() => {
    if (!session.loadedTimestamp) return
    console.log(session)
    dispatch(replace('/product'))
  }, [session])

  return (<div style={styles.screen}>
      <Title> Welcome </Title>
      <Spin tip={status}/>
  </div>)
}